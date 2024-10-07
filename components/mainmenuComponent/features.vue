<template>
  <div class="container-fluid features overflow-hidden py-5">
    <div class="container">
      <div
        class="section-title text-center mb-5 wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <div class="sub-style">
          <h5 class="sub-title text-primary px-3">WTA</h5>
        </div>
        <h1 class="display-5 mb-4">Daftar Pelayanan Wisata</h1>
      </div>
      <div class="row g-4 justify-content-center text-center">
        <div
          v-for="(destinasi, index) in destinasi"
          :key="index"
          class="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
          data-wow-delay="0.3s"
        >
          <div class="feature-item text-center p-4" style="height: 25rem;">
            <div class="feature-icon p-3 mb-4">
              <img
              src="/assets/img/logowta.png"
              class="img-fluid"
              alt=""
            />
            </div>
            <div class="feature-content d-flex flex-column">
              <h5 class="mb-3">{{ destinasi.nama }}</h5>
              <p class="mb-3">
                Dolor, sit amet consectetur adipisicing elit. Soluta inventore
                cum accusamus,
              </p>
              <NuxtLink :to="`/product/${destinasi.id}`" class="btn btn-secondary rounded-pill"
                >Read More<i class="fas fa-arrow-right ms-2"></i
              ></NuxtLink>
            </div>
          </div>
        </div>
        <!-- <div
            class="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <div class="feature-item text-center p-4">
              <div class="feature-icon p-3 mb-4">
                <i class="fab fa-cc-visa fa-4x text-primary"></i>
              </div>
              <div class="feature-content d-flex flex-column">
                <h5 class="mb-3">Visa Assistance</h5>
                <p class="mb-3">
                  Dolor, sit amet consectetur adipisicing elit. Soluta inventore
                  cum accusamus,
                </p>
                <a class="btn btn-secondary rounded-pill" href="#"
                  >Read More<i class="fas fa-arrow-right ms-2"></i
                ></a>
              </div>
            </div>
          </div> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">


interface IDestinasi {
    id: number
    nama: string
    jumlah_seat: number
    harga: string
    deskripsi: string
    info: string
}
// menampilkan data
import { useDestinasiStore} from '~/stores/destinasi';

const destinasiStore = useDestinasiStore();
const { getDestinasi, addDestinasi:satu, deleteDestinasi:hapus, updateDestinasi:edit } = destinasiStore;
const { destinasi } = storeToRefs(destinasiStore);


// const todos = ref<ITodo[]>([])

const newNama = ref<string>('')
const newSeat = ref<number>(0)
const newHarga = ref<string>('')
const newDeskripsi = ref<string>('')
const newInfo = ref<string>('')
const editId = ref<number>(0)

getDestinasi()
setTimeout(()=>{
    console.log(destinasi)
},2000)

//menambahkan data
 

</script>