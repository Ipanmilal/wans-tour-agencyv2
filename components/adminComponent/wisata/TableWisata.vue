<template>
  <div class="container-fluid">
    <div class="">
      <div class="mb-3 d-flex justify-content-between">
        <h3>Wisata</h3>
        <button
          type="button"
          class="btn btn-primary btn-sm"
          data-bs-toggle="modal"
          data-bs-target="#modaltambahwisata"
        >
          Tambah Wisata
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
              <th>Kategori</th>
              <th>Konsumen</th>
              <th>Nama Wisata</th>
              <th>Alamat</th>
              <th>Fasilitas</th>
              <th>Biroperjalan</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="currentItems.length === 0">
              <td colspan="100%">Data Tidak Tersedia</td>
            </tr>
            <tr v-else v-for="(wisata, index) in currentItems" :key="index">
              <td>{{ index + 1 + (currentPage - 1) * itemsPerPage }}</td>
              <td>{{ wisata.id_kategori }}</td>
              <td>{{ wisata.id_user }}</td>
              <td>{{ wisata.nama_wisata }}</td>
              <td>{{ wisata.alamat_wisata }}</td>
              <td>{{ wisata.fasilitas }}</td>
              <td>{{ wisata.id_biroperjalanan }}</td>
              <td class="text-center">
                <button
                  class="btn btn-sm btn-outline-info"
                  style="margin-right: 1rem"
                  data-bs-toggle="modal"
                  @click="
                    clikEdit(
                      wisata.id_wisata,
                      wisata.id_kategori,
                      wisata.id_user,
                      wisata.nama_wisata,
                      wisata.alamat_wisata,
                      wisata.fasilitas,
                      wisata.gambar,
                      wisata.id_biroperjalanan,
                    )
                  "
                  data-bs-target="#modaledithwisata"
                >
                  <i class="bi bi-pencil"></i>
                </button>
                <button
                  class="btn btn-sm btn-outline-danger"
                  @click="deleteWisata(wisata.id_wisata)"
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

  <!-- modal tambah wisata -->
  <div
    class="modal fade"
    id="modaltambahwisata"
    tabindex="-1"
    aria-labelledby="modaltambahwisataLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modaltambahwisataLabel">Tambah Wisata</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="input-group mb-3">
            <span class="input-group-text col-3">Kategori</span>
            <select v-model="newIdKategori" id="kategori" class="form-select">
              <option value="" hidden selected>Pilih</option>
              <option
                v-for="kategori in kategori"
                :key="kategori.id_kategori"
                :value="kategori.id_kategori"
              >
                {{ kategori.nama_kategori }}
              </option>
            </select>
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text col-3">Konsumen</span>
            <input
              type="text"
              aria-label="user"
              class="form-control"
              v-model="newIdUser"
            />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text col-3">Nama Wisata</span>
            <input
              type="text"
              aria-label="namawisata"
              class="form-control"
              v-model="newNamaWisata"
            />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text col-3">Alamat Wisata</span>
            <input
              type="text"
              aria-label="alamatwisata"
              class="form-control"
              v-model="newAlamatWisata"
            />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text col-3">Fasilitas</span>
            <input
              type="text"
              aria-label="filitas"
              class="form-control"
              v-model="newFasilitas"
            />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text col-3">Biroperjalan</span>
            <input
              type="text"
              aria-label="biroperjalanan"
              class="form-control"
              v-model="newIdBiroperjalananr"
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
            @click="addWisata"
            data-bs-dismiss="modal"
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- modal tambah wisata end -->

  <!-- modal edit wisata  -->
  <div
    class="modal fade"
    id="modaledithwisata"
    tabindex="-1"
    aria-labelledby="modaleditwisataLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modaltambahwisataLabel">Tambah Wisata</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="input-group mb-3">
            <span class="input-group-text col-3">Kategori</span>
            <select v-model="newIdKategori" id="kategori" class="form-select">
              <option value="" hidden selected>Pilih</option>
              <option
                v-for="kategori in kategori"
                :key="kategori.id_kategori"
                :value="kategori.id_kategori"
              >
                {{ kategori.nama_kategori }}
              </option>
            </select>
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text col-3">Konsumen</span>
            <input
              type="text"
              aria-label="user"
              class="form-control"
              v-model="newIdUser"
            />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text col-3">Nama Wisata</span>
            <input
              type="text"
              aria-label="namawisata"
              class="form-control"
              v-model="newNamaWisata"
            />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text col-3">Alamat Wisata</span>
            <input
              type="text"
              aria-label="alamatwisata"
              class="form-control"
              v-model="newAlamatWisata"
            />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text col-3">Fasilitas</span>
            <input
              type="text"
              aria-label="filitas"
              class="form-control"
              v-model="newFasilitas"
            />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text col-3">Biroperjalan</span>
            <input
              type="text"
              aria-label="biroperjalanan"
              class="form-control"
              v-model="newIdBiroperjalananr"
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
            @click="updateWisata"
            data-bs-dismiss="modal"
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- modal edit wiata end -->
  <div></div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useWisataStore } from "~/stores/wisataStore/wisataStore";
import { useKategoriStore } from "~/stores/kategoriStore/kategoriStore";

interface WisataData {
  id_wisata: number;
  id_kategori: number;
  id_user: number;
  nama_wisata: string;
  alamat_wisata: string;
  fasilitas: string;
  gambar: string;
  id_biroperjalanan: number;
}

// Mengambil data dari store
const wisataStore = useWisataStore();
const {
  getWisata,
  addWisata: nama,
  updateWisata: edit,
  deleteWisata: hapus,
} = wisataStore;
const { wisata } = storeToRefs(wisataStore);

// mengambil data kategori
const kategoriStore = useKategoriStore();
const { getKategori } = kategoriStore;
const { kategori } = storeToRefs(kategoriStore);

// mengambil data kategori end

// komponen untuk menambahkan data kategori
const newIdKategori = ref<number>(0);
const newIdUser = ref<number>(0);
const newNamaWisata = ref<string>("");
const newAlamatWisata = ref<string>("");
const newFasilitas = ref<string>("");
const newIdBiroperjalananr = ref<number>(0);
const editId = ref<number>(0);
// komponen untuk menambahkan data kategori end

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
    wisata.value?.filter((item) =>
      item.nama_wisata.toLowerCase().includes(searchQuery.value.toLowerCase())
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
getWisata();

// fungsi untuk menambahkan data wisata
const addWisata = async () => {
  if (newNamaWisata.value.trim() !== "") {
    // todos.value.push({title: newTodo.value, status: false})
    await nama(
      newIdKategori.value,
      newIdUser.value,
      newNamaWisata.value,
      newAlamatWisata.value,
      newFasilitas.value,
      newIdBiroperjalananr.value
    );
    newIdKategori.value = 0;
    newIdUser.value = 0;
    newNamaWisata.value = "";
    newAlamatWisata.value = "";
    newFasilitas.value = "";
    newIdBiroperjalananr.value = 0;
  }
  await getWisata();
};
// fungsi untuk menambahkan data wisata end

// fungsi untuk mengubah data wisata berdasarkan id
const updateWisata = async () => {
  await edit(
    editId.value,
    newIdKategori.value,
    newIdUser.value,
    newNamaWisata.value,
    newAlamatWisata.value,
    newFasilitas.value,
    newIdBiroperjalananr.value
  );

  await getWisata();
  newIdKategori.value = 0;
  newIdUser.value = 0;
  newNamaWisata.value = "";
  newAlamatWisata.value = "";
  newFasilitas.value = "";
  newIdBiroperjalananr.value = 0;
  editId.value = 0;
};

const clikEdit = (
  id_wisata: number,
  id_kategori: number,
  id_user: number,
  nama_wisata: string,
  alamat_wisata: string,
  fasilitas: string,
  gambar: string,
  id_biroperjalanan: number
) => {
  newIdKategori.value = id_kategori;
  newIdUser.value = id_user;
  newNamaWisata.value = nama_wisata;
  newAlamatWisata.value = alamat_wisata;
  newFasilitas.value = fasilitas;
  newIdBiroperjalananr.value = id_biroperjalanan;
  editId.value = id_wisata;
};
// fungsi untuk mengubah data wisata berdasarkan id end

// fungsi untuk menghapus data wisata
const deleteWisata = async (id_wisata: number) => {
  // todos.value.splice(index, 1)
  await useSupabaseClient()
    .from("tb_wisata")
    .delete()
    .eq("id_wisata", id_wisata);
  await getWisata();
};

// fungsi untuk menghapus data wisata end
</script>
