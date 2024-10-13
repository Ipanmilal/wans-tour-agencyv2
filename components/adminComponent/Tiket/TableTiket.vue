<template>
  <div class="container-fluid">
    <div class="">
      <div class="mb-3 d-flex justify-content-between">
        <h3>Tiket</h3>
        <button
          type="button"
          class="btn btn-primary btn-sm"
          data-bs-toggle="modal"
          data-bs-target="#modaltambahkategori"
        >
          Tambah Tiket
        </button>
      </div>

      <!-- Pilihan Jumlah Baris -->
      <div class="row d-flex justify-content-between">
        <div class="col-2 d-flex">
          <select
            id="itemsPerPageSelect"
            class="form-select"
            v-model="itemsPerPage"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="100">100</option>
          </select>
        </div>
        <div class="col-3">
          <input
            type="text"
            class="form-control"
            placeholder="Cari berdasarkan nama kategori..."
            v-model="searchQuery"
          />
        </div>
      </div>

      <div class="row">
        <table class="table table-striped table-responsive text-center">
          <thead>
            <tr>
              <th>No</th>
              <th>Wisata</th>
              <th>Jenis</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="currentItems.length === 0">
              <td colspan="100%">Data Tidak Tersedia</td>
            </tr>
            <tr v-else v-for="(item, index) in currentItems" :key="index">
              <td>{{ index + 1 + (currentPage - 1) * itemsPerPage }}</td>
              <td>{{ item.id_wisata }}</td>
              <td>{{ item.jenis_tiket }}</td>
              <td class="text-center">
                <button
                  class="btn btn-sm btn-outline-info"
                  style="margin-right: 1rem"
                  data-bs-toggle="modal"
                  @click="
                    clikEdit(item.id_tiket, item.id_wisata, item.jenis_tiket)
                  "
                  data-bs-target="#modaleditkategori"
                >
                  <i class="bi bi-pencil"></i>
                </button>
                <button
                  class="btn btn-sm btn-outline-danger"
                  @click="deleteTiket(item.id_tiket)"
                >
                  <i class="bi bi-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Pagination Controls -->
      <div class="row">
        <nav aria-label="Page navigation">
          <ul class="pagination">
            <li class="page-item" :class="{ disabled: currentPage === 1 }">
              <a class="page-link" href="#" @click.prevent="currentPage = 1"
                >First</a
              >
            </li>
            <li class="page-item" :class="{ disabled: currentPage === 1 }">
              <a class="page-link" href="#" @click.prevent="currentPage -= 1"
                >Previous</a
              >
            </li>
            <li
              v-for="page in totalPages"
              :key="page"
              class="page-item"
              :class="{ active: currentPage === page }"
            >
              <a
                class="page-link"
                href="#"
                @click.prevent="currentPage = page"
                >{{ page }}</a
              >
            </li>
            <li
              class="page-item"
              :class="{ disabled: currentPage === totalPages }"
            >
              <a class="page-link" href="#" @click.prevent="currentPage += 1"
                >Next</a
              >
            </li>
            <li
              class="page-item"
              :class="{ disabled: currentPage === totalPages }"
            >
              <a
                class="page-link"
                href="#"
                @click.prevent="currentPage = totalPages"
                >Last</a
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>

  <!-- modal tambah kategori -->
  <div
    class="modal fade"
    id="modaltambahkategori"
    tabindex="-1"
    aria-labelledby="modaltambahkategoriLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Tambah Kategori</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="input-group mb-3">
            <span class="input-group-text col-3">Wisata</span>
            <select v-model="newIdWisata" id="idwisata" class="form-select">
              <option value="" hidden selected>Pilih</option>
              <option
                v-for="wisata in wisata"
                :key="wisata.id_wisata"
                :value="wisata.id_wisata"
              >
                {{ wisata.nama_wisata }}
              </option>
            </select>
          </div>
          <div class="input-group">
            <span class="input-group-text col-3">Jenis</span>
            <input
              type="text"
              aria-label="keterangan"
              class="form-control"
              v-model="newJenisTiket"
            />
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Kembali
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="addTiket"
            data-bs-dismiss="modal"
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- modal tambah kategori end -->

  <!-- modal edit kategori  -->
  <div
    class="modal fade"
    id="modaleditkategori"
    tabindex="-1"
    aria-labelledby="modaleditkategoriLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Ubah Kategori</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="input-group mb-3">
            <span class="input-group-text col-3">Tiket</span>
            <select v-model="newIdWisata" id="idwisata" class="form-select">
              <option value="" hidden selected>Pilih</option>
              <option
                v-for="wisata in wisata"
                :key="wisata.id_wisata"
                :value="wisata.id_wisata"
              >
                {{ wisata.nama_wisata }}
              </option>
            </select>
          </div>
          <div class="input-group">
            <span class="input-group-text col-3">Jenis</span>
            <input
              type="text"
              aria-label="keterangan"
              class="form-control"
              v-model="newJenisTiket"
            />
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Kembali
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="updateTiket"
            data-bs-dismiss="modal"
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- modal edit kategori end -->
  <div></div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useTiketStore } from "~/stores/tiketStore/tiketStore";
import { useWisataStore } from "~/stores/wisataStore/wisataStore";

// Mengambil data dari store
const TiketStore = useTiketStore();
const {
  getTiket,
  addTiket: nama,
  updateTiket: edit,
  deleteTiket: hapus,
} = TiketStore;
const { tiket } = storeToRefs(TiketStore);

// mengambil data wisata
const wisataStore = useWisataStore();
const { getWisata } = wisataStore;
const { wisata } = storeToRefs(wisataStore);
// mengambil data wisata end

// komponen untuk menambahkan data tiket
const newIdWisata = ref<number>(0);
const newJenisTiket = ref<string>("");
const editId = ref<number>(0);
// komponen untuk menambahkan data tiket end

// State untuk pagination dan pencarian
const currentPage = ref(1);
const itemsPerPage = ref(1); // Default ke 10 baris per halaman
const searchQuery = ref(""); // Input untuk pencarian

// Menghitung total halaman
const totalPages = computed(() => {
  return Math.ceil(filteredItems.value.length / itemsPerPage.value);
});

// Filter data berdasarkan pencarian
const filteredItems = computed(() => {
  return (
    tiket.value?.filter((item) =>
      item.jenis_tiket.toLowerCase().includes(searchQuery.value.toLowerCase())
    ) || []
  );
});

// Data yang ditampilkan pada halaman saat ini
const currentItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return filteredItems.value.slice(start, end);
});
// Mengambil data kategori saat komponen dimuat
getTiket();

// fungsi untuk menambahkan data Tiket
const addTiket = async () => {
  if (newJenisTiket.value.trim() !== "") {
    // todos.value.push({title: newTodo.value, status: false})
    await nama(newIdWisata.value, newJenisTiket.value);
    newIdWisata.value = 0;
    newJenisTiket.value = "";
  }
  await getTiket();
};
// fungsi untuk menambahkan data tiket end

// fungsi untuk mengubah data tiket berdasarkan id
const updateTiket = async () => {
  await edit(editId.value, newIdWisata.value, newJenisTiket.value);

  await getTiket();
  newIdWisata.value = 0;
  newJenisTiket.value = "";
  editId.value = 0;
};

const clikEdit = (id_tiket: number, id_wisata: number, jenis_tiket: string) => {
  newIdWisata.value = id_wisata;
  newJenisTiket.value = jenis_tiket;
  editId.value = id_tiket;
};
// fungsi untuk mengubah data tiket berdasarkan id end

// fungsi untuk menghapus data tiket
const deleteTiket = async (id_tiket: number) => {
  // todos.value.splice(index, 1)
  await useSupabaseClient().from("tb_tiket").delete().eq("id_tiket", id_tiket);
  await getTiket();
};

// fungsi untuk menghapus data tiket end
</script>
