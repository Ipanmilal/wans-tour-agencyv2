<template>
  <div>
    <MainmenuComponentCarousel />
    <MainmenuComponentAboutcompany />
    <MainmenuComponentGrafic />
    <MainmenuComponentService />
    <MainmenuComponentFeatures />
    <MainmenuComponentFavorite />
    <!-- Modal Search Start -->
    <div
      class="modal fade"
      id="searchModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-fullscreen">
        <div class="modal-content rounded-0">
          <div class="modal-header">
            <h4 class="modal-title text-secondary mb-0" id="exampleModalLabel">
              Search by keyword
            </h4>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body d-flex align-items-center">
            <div class="input-group w-75 mx-auto d-flex">
              <input
                type="search"
                class="form-control p-3"
                placeholder="keywords"
                aria-describedby="search-icon-1"
              />
              <span id="search-icon-1" class="input-group-text p-3"
                ><i class="fa fa-search"></i
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal Search End -->

    
    <!-- About End -->

    
    <!-- Counter Facts End -->

    <!-- Services Start -->
    
    <!-- Services End -->

    <!-- Features Start -->
    
    <!-- Features End -->
    <!-- Countries We Offer Start -->
    

    <!-- Training Start -->
    <!-- <div class="container-fluid training overflow-hidden bg-light py-5">
      <div class="container py-5">
        <div
          class="section-title text-center mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div class="sub-style">
            <h5 class="sub-title text-primary px-3">CHECK OUR TRAINING</h5>
          </div>
          <h1 class="display-5 mb-4">
            Get the Best Coacing Service Training with Our Travisa
          </h1>
          <p class="mb-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            deleniti amet at atque sequi quibusdam cumque itaque repudiandae
            temporibus, eius nam mollitia voluptas maxime veniam necessitatibus
            saepe in ab? Repellat!
          </p>
        </div>
        <div class="row g-4">
          <div
            class="col-lg-6 col-lg-6 col-xl-3 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div class="training-item">
              <div class="training-inner">
                <img
                  src="assets/img/training-1.jpg"
                  class="img-fluid w-100 rounded"
                  alt="Image"
                />
                <div class="training-title-name">
                  <a href="#" class="h4 text-white mb-0">IELTS</a>
                  <a href="#" class="h4 text-white mb-0">Coaching</a>
                </div>
              </div>
              <div class="training-content bg-secondary rounded-bottom p-4">
                <a href="#"><h4 class="text-white">IELTS Coaching</h4></a>
                <p class="text-white-50">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Autem, veritatis.
                </p>
                <a
                  class="btn btn-secondary rounded-pill text-white p-0"
                  href="#"
                  >Read More <i class="fa fa-arrow-right"></i
                ></a>
              </div>
            </div>
          </div>
          <div
            class="col-lg-6 col-lg-6 col-xl-3 wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <div class="training-item">
              <div class="training-inner">
                <img
                  src="assets/img/training-2.jpg"
                  class="img-fluid w-100 rounded"
                  alt="Image"
                />
                <div class="training-title-name">
                  <a href="#" class="h4 text-white mb-0">TOEFL</a>
                  <a href="#" class="h4 text-white mb-0">Coaching</a>
                </div>
              </div>
              <div class="training-content bg-secondary rounded-bottom p-4">
                <a href="#"><h4 class="text-white">TOEFL Coaching</h4></a>
                <p class="text-white-50">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Autem, veritatis.
                </p>
                <a
                  class="btn btn-secondary rounded-pill text-white p-0"
                  href="#"
                  >Read More <i class="fa fa-arrow-right"></i
                ></a>
              </div>
            </div>
          </div>
          <div
            class="col-lg-6 col-lg-6 col-xl-3 wow fadeInUp"
            data-wow-delay="0.5s"
          >
            <div class="training-item">
              <div class="training-inner">
                <img
                  src="assets/img/training-3.jpg"
                  class="img-fluid w-100 rounded"
                  alt="Image"
                />
                <div class="training-title-name">
                  <a href="#" class="h4 text-white mb-0">PTE</a>
                  <a href="#" class="h4 text-white mb-0">Coaching</a>
                </div>
              </div>
              <div class="training-content bg-secondary rounded-bottom p-4">
                <a href="#"><h4 class="text-white">PTE Coaching</h4></a>
                <p class="text-white-50">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Autem, veritatis.
                </p>
                <a
                  class="btn btn-secondary rounded-pill text-white p-0"
                  href="#"
                  >Read More <i class="fa fa-arrow-right"></i
                ></a>
              </div>
            </div>
          </div>
          <div
            class="col-lg-6 col-lg-6 col-xl-3 wow fadeInUp"
            data-wow-delay="0.7s"
          >
            <div class="training-item">
              <div class="training-inner">
                <img
                  src="assets/img/training-4.jpg"
                  class="img-fluid w-100 rounded"
                  alt="Image"
                />
                <div class="training-title-name">
                  <a href="#" class="h4 text-white mb-0">OET</a>
                  <a href="#" class="h4 text-white mb-0">Coaching</a>
                </div>
              </div>
              <div class="training-content bg-secondary rounded-bottom p-4">
                <a href="#"><h4 class="text-white">OET Coaching</h4></a>
                <p class="text-white-50">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Autem, veritatis.
                </p>
                <a
                  class="btn btn-secondary rounded-pill text-white p-0"
                  href="#"
                  >Read More <i class="fa fa-arrow-right"></i
                ></a>
              </div>
            </div>
          </div>
          <div class="col-12 text-center">
            <a
              class="btn btn-primary border-secondary rounded-pill py-3 px-5 wow fadeInUp"
              data-wow-delay="0.1s"
              href="#"
              >View More</a
            >
          </div>
        </div>
      </div>
    </div> -->

    <!-- Contact Start -->
    <div class="container-fluid contact overflow-hidden pb-5">
      <div class="container py-5">
        <div class="office pt-5">
          <div
            class="section-title text-center mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div class="sub-style">
              <h5 class="sub-title text-primary px-3">WTA</h5>
            </div>
            <h1 class="display-5 mb-4">Informasi Kontak</h1>
            <p class="mb-0">
              Jika Anda mencari pengalaman perjalanan yang tak terlupakan, silakan hubungi Wanst Tour Agency. Kami menyediakan berbagai paket wisata menarik yang disesuaikan dengan kebutuhan Anda
            </p>
          </div>
          <div class="row g-4 justify-content-center">
            <div
              class="col-md-6 col-lg-6 col-xl-6 wow fadeInUp"
              data-wow-delay="0.1s"
              
            >
              <div class="office-item p-4">
                <div class="office-img mb-4">
                  <img
                    src="assets/img/logowta.png"
                    class="img-fluid w-70 rounded"
                    alt=""
                  />
                </div>
                <div class="office-content d-flex flex-column">
                  <h4 class="mb-2">Wans Tour Agency</h4>
                  <a href="#" class="text-secondary fs-5 mb-2">081320073451</a>
                  <a href="#" class="text-muted fs-5 mb-2"
                    >wta@example.com</a
                  >
                  <p class="mb-0">
                    Kp. Kebon Kalapa RT/RW 01/08, Kel.Margahurif, Kec.Banjaran, Kab. Bandung, Jawa Barat
                  </p>
                </div>
              </div>
            </div>
            <div
              class="col-md-6 col-lg-6 col-xl-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div class="office-item p-4">
                <div class="office-img mb-4">
                  <a href="https://maps.app.goo.gl/TZVTX9iQTN9Umxo68" target="_blank">
                  <img
                    src="assets/img/maps.png"
                    class="img-fluid w-70 rounded"
                    alt=""
                  />
                  </a>
                </div>
                <div class="office-content d-flex flex-column">
                  <h4 class="mb-2">Wans Tour Agency</h4>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Contact End -->
  </div>
</template>
