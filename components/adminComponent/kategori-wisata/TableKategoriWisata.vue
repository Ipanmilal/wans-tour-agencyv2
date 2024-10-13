<template>
  <div class="container-fluid">
    <div class="">
      <div class="mb-3 d-flex justify-content-between">
        <h3>Kategori Wisata</h3>
        <button
          type="button"
          class="btn btn-primary btn-sm"
          data-bs-toggle="modal"
          data-bs-target="#modaltambahkategori"
        >
          Tambah Kategori
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
              <th>Nama Kategori</th>
              <th>Keterangan</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="currentItems.length === 0">
              <td colspan="100%">Data Tidak Tersedia</td>
            </tr>
            <tr v-else v-for="(item, index) in currentItems" :key="index">
              <td>{{ index + 1 + (currentPage - 1) * itemsPerPage }}</td>
              <td>{{ item.nama_kategori }}</td>
              <td>{{ item.keterangan_kategori }}</td>
              <td class="text-center">
                <button
                  class="btn btn-sm btn-outline-info"
                  style="margin-right: 1rem"
                  data-bs-toggle="modal"
                  @click="clikEdit(item.id_kategori, item.nama_kategori, item.keterangan_kategori)"
                  data-bs-target="#modaleditkategori"
                >
                  <i class="bi bi-pencil"></i>
                </button>
                <button class="btn btn-sm btn-outline-danger" @click="deleteKategori(item.id_kategori)">
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
            <span class="input-group-text col-3">Nama</span>
            <input type="text" aria-label="name" class="form-control" v-model="newNamaKategori" />
          </div>
          <div class="input-group">
            <span class="input-group-text col-3">Keterangan</span>
            <input type="text" aria-label="keterangan" class="form-control" v-model="newKeteranganKategori" />
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
          <button type="button" class="btn btn-primary" @click="addKategori" data-bs-dismiss="modal">Simpan</button>
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
            <span class="input-group-text col-3">Nama</span>
            <input type="text" aria-label="name" class="form-control" v-model="newNamaKategori" />
          </div>
          <div class="input-group">
            <span class="input-group-text col-3">Keterangan</span>
            <input type="text" aria-label="keterangan" class="form-control" v-model="newKeteranganKategori" />
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
          <button type="button" class="btn btn-primary" @click="updateKategori" data-bs-dismiss="modal">Simpan</button>
        </div>
      </div>
    </div>
  </div>
  <!-- modal edit kategori end -->
  <div></div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useKategoriStore } from "~/stores/kategoriStore/kategoriStore";

interface KategoriData {
  id_kategori: number;
  nama_kategori: string;
  keterangan_kategori: string;
}

// Mengambil data dari store
const kategoriStore = useKategoriStore();
const {
  getKategori,
  addKategori: nama,
  updateKategori: edit,
  deleteKategori: hapus,
} = kategoriStore;
const { kategori } = storeToRefs(kategoriStore);

// komponen untuk menambahkan data kategori
const newNamaKategori = ref<string>("");
const newKeteranganKategori = ref<string>("");
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
    kategori.value?.filter((item) =>
      item.nama_kategori.toLowerCase().includes(searchQuery.value.toLowerCase())
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
getKategori();

// fungsi untuk menambahkan data kategori
const addKategori = async () => {
  if (newNamaKategori.value.trim() !== "") {
    // todos.value.push({title: newTodo.value, status: false})
    await nama(newNamaKategori.value, newKeteranganKategori.value);
    newNamaKategori.value = "";
    newKeteranganKategori.value = "";
  }
  await getKategori();
};
// fungsi untuk menambahkan data kategori end

// fungsi untuk mengubah data kategori berdasarkan id
const updateKategori = async () => {
  await edit(editId.value, newNamaKategori.value, newKeteranganKategori.value);

  await getKategori();
  newNamaKategori.value = "";
  newKeteranganKategori.value = "";
  editId.value = 0;
};

const clikEdit = (
  id_kategori: number,
  nama_kategori: string,
  keterangan_kategori: string
) => {
  newNamaKategori.value = nama_kategori;
  newKeteranganKategori.value = keterangan_kategori;
  editId.value = id_kategori;
};
// fungsi untuk mengubah data kategori berdasarkan id end

// fungsi untuk menghapus data kategori
const deleteKategori = async (id_kategori: number) => {
  // todos.value.splice(index, 1)
  await useSupabaseClient().from("tb_kategori").delete().eq("id_kategori", id_kategori);
  await getKategori();
};

// fungsi untuk menghapus data kategori end
</script>
