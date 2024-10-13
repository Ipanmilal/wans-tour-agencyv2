<template>
  <div class="container-fluid">
    <div class="">
      <div class="mb-3 d-flex justify-content-between">
        <h3>Biroperjalanan</h3>
        <button
          type="button"
          class="btn btn-primary btn-sm"
          data-bs-toggle="modal"
          data-bs-target="#modaltambahbiroperjalanan"
        >
          Tambah Biroperjalanan
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
              <th>Konsumen</th>
              <th>Nama</th>
              <th>Alamat</th>
              <th>Telepon</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="currentItems.length === 0">
              <td colspan="100%">Data Tidak Tersedia</td>
            </tr>
            <tr v-else v-for="(item, index) in currentItems" :key="index">
              <td>{{ index + 1 + (currentPage - 1) * itemsPerPage }}</td>
              <td>{{ item.id_user }}</td>
              <td>{{ item.nama }}</td>
              <td>{{ item.alamat }}</td>
              <td>{{ item.telp }}</td>
              <td class="text-center">
                <button
                  class="btn btn-sm btn-outline-info"
                  style="margin-right: 1rem"
                  data-bs-toggle="modal"
                  @click="
                    clikEdit(
                      item.id_biroperjalanan,
                      item.id_user,
                      item.nama,
                      item.alamat,
                      item.telp
                    )
                  "
                  data-bs-target="#modaleditbiroperjalanan"
                >
                  <i class="bi bi-pencil"></i>
                </button>
                <button
                  class="btn btn-sm btn-outline-danger"
                  @click="deleteBiroperjalanan(item.id_biroperjalanan)"
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

  <!-- modal tambah biroperjalanan -->
  <div
    class="modal fade"
    id="modaltambahbiroperjalanan"
    tabindex="-1"
    aria-labelledby="modaltambahbiroperjalananLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Tambah Biroperjalanan</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="input-group mb-3">
            <span class="input-group-text col-3">Konsumen</span>
            <input
              type="text"
              aria-label="konsumen"
              class="form-control"
              v-model="newIdUser"
            />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text col-3">Nama</span>
            <input
              type="text"
              aria-label="nama"
              class="form-control"
              v-model="newNama"
            />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text col-3">Alamat</span>
            <input
              type="text"
              aria-label="alamat"
              class="form-control"
              v-model="newAlamat"
            />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text col-3">No. Telepon</span>
            <input
              type="text"
              aria-label="nama"
              class="form-control"
              v-model="newTelp"
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
            @click="addBiroperjalanan"
            data-bs-dismiss="modal"
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- modal tambah biroperjalanan end -->

  <!-- modal edit biroperjalanan  -->
  <div
    class="modal fade"
    id="modaleditbiroperjalanan"
    tabindex="-1"
    aria-labelledby="modaledithbiroperjalananLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Tambah Biroperjalanan</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="input-group mb-3">
            <span class="input-group-text col-3">Konsumen</span>
            <input
              type="text"
              aria-label="konsumen"
              class="form-control"
              v-model="newIdUser"
            />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text col-3">Nama</span>
            <input
              type="text"
              aria-label="nama"
              class="form-control"
              v-model="newNama"
            />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text col-3">Alamat</span>
            <input
              type="text"
              aria-label="alamat"
              class="form-control"
              v-model="newAlamat"
            />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text col-3">No. Telepon</span>
            <input
              type="text"
              aria-label="nama"
              class="form-control"
              v-model="newTelp"
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
            @click="updateBiroperjalanan"
            data-bs-dismiss="modal"
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- modal edit biroperjalanan end -->
  <div></div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useBiroperjalananStore } from "~/stores/biroperjalananStore/biroperjalananStore";

// Mengambil data dari store
const biroperjalananStore = useBiroperjalananStore();
const {
  getBiroperjalanan,
  addBiroperjalanan: nama,
  updateBiroperjalanan: edit,
  deleteBiroperjalanan: hapus,
} = biroperjalananStore;
const { biroperjalan } = storeToRefs(biroperjalananStore);

// komponen untuk menambahkan data biroperjalanan
const newIdUser = ref<number>(0);
const newNama = ref<string>("");
const newAlamat = ref<string>("");
const newTelp = ref<string>("");
const editId = ref<number>(0);
// komponen untuk menambahkan data biroperjalanan end

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
    biroperjalan.value?.filter((item) =>
      item.nama.toLowerCase().includes(searchQuery.value.toLowerCase())
    ) || []
  );
});

// Data yang ditampilkan pada halaman saat ini
const currentItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return filteredItems.value.slice(start, end);
});
// Mengambil data biroperjalanan saat komponen dimuat
getBiroperjalanan();

// fungsi untuk menambahkan data biroperjalanan
const addBiroperjalanan = async () => {
  if (newNama.value.trim() !== "") {
    // todos.value.push({title: newTodo.value, status: false})
    await nama(newIdUser.value, newNama.value, newAlamat.value, newTelp.value, );
    newIdUser.value = 0;
    newNama.value = "";
    newAlamat.value = "";
    newTelp.value = "";
  }
  await getBiroperjalanan();
};
// fungsi untuk menambahkan data biroperjalanan end

// fungsi untuk mengubah data biroperjlanan berdasarkan id
const updateBiroperjalanan = async () => {
  await edit(editId.value, newIdUser.value, newNama.value, newAlamat.value, newTelp.value);

  await getBiroperjalanan();
  newIdUser.value = 0;
    newNama.value = "";
    newAlamat.value = "";
    newTelp.value = "";
  editId.value = 0;
};

const clikEdit = (
    id_biroperjalanan : number,
    id_user : number,
    nama : string,
    alamat : string,
    telp: string,
) => {
  newIdUser.value = id_user;
  newNama.value = nama;
  newAlamat.value = alamat;
  newTelp.value = telp;
  editId.value = id_biroperjalanan;
};
// fungsi untuk mengubah data biroperjalanan berdasarkan id end

// fungsi untuk menghapus data kategori
const deleteBiroperjalanan = async (id_biroperjalanan: number) => {
  // todos.value.splice(index, 1)
  await useSupabaseClient()
    .from("tb_biropejalanan").delete().eq("id_biroperjalanan", id_biroperjalanan);
  await getBiroperjalanan();
};

// fungsi untuk menghapus data kategori end
</script>
