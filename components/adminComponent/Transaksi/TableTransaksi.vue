<template>
    <div class="container-fluid">
      <div class="">
        <div class="mb-3 d-flex justify-content-between">
          <h3>Transaksi</h3>
          <button
            type="button"
            class="btn btn-primary btn-sm"
            data-bs-toggle="modal"
            data-bs-target="#modaltambahkategori"
          >
            Tambah Transaksi
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
                <th>Tiket</th>
                <th>Konsumen</th>
                <th>Tanggal Pesan</th>
                <th>Jumlah Bayar</th>
                <th>Biroperjalanan</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="currentItems.length === 0">
                <td colspan="100%">Data Tidak Tersedia</td>
              </tr>
              <tr v-else v-for="(item, index) in currentItems" :key="index">
                <td>{{ index + 1 + (currentPage - 1) * itemsPerPage }}</td>
                <td>{{ item.id_tiket }}</td>
                <td>{{ item.id_user }}</td>
                <td>{{ item.tgl_pesan }}</td>
                <td>{{ item.jumlah_bayar }}</td>
                <td>{{ item.id_biroperjalanan }}</td>
                <td class="text-center">
                  <button
                    class="btn btn-sm btn-outline-info"
                    style="margin-right: 1rem"
                    data-bs-toggle="modal"
                    data-bs-target="#modaleditkategori"
                  >
                    <i class="bi bi-pencil"></i>
                  </button>
                  <button class="btn btn-sm btn-outline-danger">
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
              <span class="input-group-text col-3">Tiket</span>
              <select v-model="newIdTiket" id="idtiket" class="form-select">
              <option value="" hidden selected>Pilih</option>
              <option
                v-for="tiket in tiket"
                :key="tiket.id_tiket"
                :value="tiket.id_tiket"
              >
                {{ tiket.jenis_tiket }}
              </option>
            </select>
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text col-3">Konsumen</span>
              <select v-model="newIdUser" id="customer" class="form-select">
              <option value="" hidden selected>Pilih</option>
              <option
                v-for="customer in customer"
                :key="customer.id_user"
                :value="customer.id_user"
              >
                {{ customer.nama }}
              </option>
            </select>
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text col-3">Tanggal Pesan</span>
              <input
              type="text"
              aria-label="tglpesan"
              class="form-control"
              v-model="newTglPesan"
            />
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text col-3">Jumlah Bayar</span>
              <input
              type="text"
              aria-label="jumlahbayar"
              class="form-control"
              v-model="newJumlahBayar"
            />
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text col-3">Biroperjalanan</span>
              <select v-model="newIdBiroperjalanan" id="customer" class="form-select">
              <option value="" hidden selected>Pilih</option>
              <option
                v-for="biroperjalan in biroperjalan"
                :key="biroperjalan.id_biroperjalanan"
                :value="biroperjalan.id_biroperjalanan"
              >
                {{ biroperjalan.nama }}
              </option>
            </select>
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
          
        </div>
      </div>
    </div>
    <!-- modal edit kategori end -->
    <div></div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from "vue";
  import { useTransaksiStore } from "~/stores/transaksiStore/transaksiStore";
  import { useCustomerStore } from "~/stores/customerStore/customersStore";
  import { useTiketStore } from "~/stores/tiketStore/tiketStore";
  import { useBiroperjalananStore } from "~/stores/biroperjalananStore/biroperjalananStore";
  
  // Mengambil data dari store
  const transaksiStore = useTransaksiStore();
  const {
    getTransaksi,
    addTransaksi: nama,
    updateTransaksi: edit,
    deleteTransaksi: hapus,
  } = transaksiStore;
  const { transaksi } = storeToRefs(transaksiStore);
  
  // mengambil data customer
  const customersStore = useCustomerStore();
  const {
    getCustomer
  } = customersStore;
  const { customer } = storeToRefs(customersStore);
  // mengambil data customer end

  // mengambil data tiket
  const tiketStore = useTiketStore();
  const {
    getTiket
  } = tiketStore;
  const { tiket } = storeToRefs(tiketStore);
  // mengambil data tiket end

  // mengambil data biroperjalanan
  const biroperjalananStore = useBiroperjalananStore();
  const {
    getBiroperjalanan
  } = biroperjalananStore;
  const { biroperjalan } = storeToRefs(biroperjalananStore);
  // mengambil data biroperjalanan end

  // komponen untuk menambahkan data transaksi
  const newIdTiket = ref<number>(0);
  const newIdUser = ref<number>(0);
  const newTglPesan = ref<string>("")
  const newJumlahBayar = ref<string>("")
  const newIdBiroperjalanan = ref<number>(0);
  const editId = ref<number>(0);
  // komponen untuk menambahkan data transaksi end
  
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
        transaksi.value?.filter((item) =>
        item.jumlah_bayar.toLowerCase().includes(searchQuery.value.toLowerCase())
      ) || []
    );
  });
  
  // Data yang ditampilkan pada halaman saat ini
  const currentItems = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value;
    const end = start + itemsPerPage.value;
    return filteredItems.value.slice(start, end);
  });
  // Mengambil data transaksi saat komponen dimuat
  getTransaksi();
  
  // fungsi untuk menambahkan data transaksi
  const addKategori = async () => {
    
      // todos.value.push({title: newTodo.value, status: false})
      await nama(newIdUser.value, newIdTiket.value, newTglPesan.value, newJumlahBayar.value, newIdBiroperjalanan.value );
      newIdTiket.value = 0;
      newIdUser.value = 0;
      newTglPesan.value = "";
      newJumlahBayar.value = "";
      newIdBiroperjalanan.value = 0;
    }
    await getTransaksi();

  // fungsi untuk menambahkan data transaksi end
  
  // fungsi untuk mengubah data transaksi berdasarkan id
  const updateKategori = async () => {
    await edit(editId.value, newIdTiket.value, newIdUser.value, newTglPesan.value, newJumlahBayar.value, newIdBiroperjalanan.value);
  
    await getTransaksi();
    newIdTiket.value = 0;
      newIdUser.value = 0;
      newTglPesan.value = "";
      newJumlahBayar.value = "";
      newIdBiroperjalanan.value = 0;
    editId.value = 0;
  };
  
  const clikEdit = (
    id_transaksi : number,
    id_tiket : number,
    id_user : number,
    tgl_pesan : string,
    jumlah_bayar : string,
    id_biroperjalanan: number,
  ) => {

    newIdTiket.value = id_tiket;
    newIdUser.value = id_user;
    newTglPesan.value = tgl_pesan;
    newJumlahBayar.value = jumlah_bayar;
    newIdBiroperjalanan.value = id_biroperjalanan
    editId.value = id_transaksi;
  };
  // fungsi untuk mengubah data transaksi berdasarkan id end
  
  // fungsi untuk menghapus data transaksi
  const deleteKategori = async (id_transaksi: number) => {
    // todos.value.splice(index, 1)
    await useSupabaseClient().from("tb_transaksi").delete().eq("id_transaksi", id_transaksi);
    await getTransaksi();
  };
  
  // fungsi untuk menghapus data transaksi end
  </script>
  