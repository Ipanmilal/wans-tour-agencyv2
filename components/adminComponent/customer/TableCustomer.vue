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
              <th>No KTP</th>
              <th>Nama</th>
              <th>Alamat</th>
              <th>Jenis kelamin</th>
              <th>No telepon</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="currentItems.length === 0">
              <td colspan="100%">Data Tidak Tersedia</td>
            </tr>
            <tr v-else v-for="(item, index) in currentItems" :key="index">
              <td>{{ index + 1 + (currentPage - 1) * itemsPerPage }}</td>
              <td>{{ item.no_ktp }}</td>
              <td>{{ item.nama }}</td>
              <td>{{ item.alamat }}</td>
              <td>{{ item.jenis_kelamin }}</td>
              <td>{{ item.no_telepon }}</td>
              <td class="text-center">
                <button
                  class="btn btn-sm btn-outline-info"
                  style="margin-right: 1rem"
                  data-bs-toggle="modal"
                  @click="
                    clikEdit(
                      item.id_user,
                      item.no_ktp,
                      item.nama,
                      item.alamat,
                      item.kota_asal,
                      item.jenis_kelamin,
                      item.no_telepon
                    )
                  "
                  data-bs-target="#modaleditkategori"
                >
                  <i class="bi bi-pencil"></i>
                </button>
                <button
                  class="btn btn-sm btn-outline-danger"
                  @click="deleteCustomer(item.id_user)"
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
            @click="updateCustomer"
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
import { useCustomerStore } from "~/stores/customerStore/customersStore";

// Mengambil data dari store
const customersStore = useCustomerStore();
const {
  getCustomer,
  addCustomer: nama,
  updateCustomer: edit,
  deleteCustomer: hapus,
} = customersStore;
const { customer } = storeToRefs(customersStore);

// komponen untuk menambahkan data customer
const newno_ktp = ref<string>("");
const newnama = ref<string>("");
const newalamat = ref<string>("");
const newkota_asal = ref<string>("");
const newjenis_kelamin = ref<string>("");
const newno_telepon = ref<string>("");
const editId = ref<number>(0);
// komponen untuk menambahkan data customer end

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
    customer.value?.filter((item) =>
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
// Mengambil data customer saat komponen dimuat
getCustomer();

// fungsi untuk menambahkan data customer
const addCustomer = async () => {
  if (newnama.value.trim() !== "") {
    // todos.value.push({title: newTodo.value, status: false})
    await nama(
      newno_ktp.value,
      newnama.value,
      newalamat.value,
      newkota_asal.value,
      newjenis_kelamin.value,
      newno_telepon.value
    );
    newno_ktp.value = "";
    newnama.value = "";
    newalamat.value = "";
    newkota_asal.value = "";
    newjenis_kelamin.value = "";
    newno_telepon.value = "";
  }
  await getCustomer();
};
// fungsi untuk menambahkan data customer end

// fungsi untuk mengubah data customer berdasarkan id
const updateCustomer = async () => {
  await edit(
    editId.value,
    newno_ktp.value,
    newnama.value,
    newalamat.value,
    newkota_asal.value,
    newjenis_kelamin.value,
    newno_telepon.value
  );

  await getCustomer();
    newno_ktp.value ="";
    newnama.value ="";
    newalamat.value ="";
    newkota_asal.value ="";
    newjenis_kelamin.value ="";
    newno_telepon.value ="";
  editId.value = 0;
};

const clikEdit = (
    id_user : number,
    no_ktp : string,
    nama: string,
    alamat : string,
    kota_asal : string,
    jenis_kelamin : string,
    no_telepon: string

) => {
  newno_ktp.value = no_ktp;
  newnama.value = nama;
  newalamat.value = alamat;
  newkota_asal.value =kota_asal;
  newjenis_kelamin.value = jenis_kelamin;
  newno_telepon.value = no_telepon;
  editId.value = id_user;
};
// fungsi untuk mengubah data customer berdasarkan id end

// fungsi untuk menghapus data customer
const deleteCustomer = async (id_user: number) => {
  // todos.value.splice(index, 1)
  await useSupabaseClient()
    .from("tb_customer")
    .delete()
    .eq("id_user", id_user);
  await getCustomer();
};

// fungsi untuk menghapus data customer end
</script>
