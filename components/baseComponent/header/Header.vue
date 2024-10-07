<template>
  <div>
    <!-- Top Bar Start -->
    <div class="container-fluid bg-primary px-5 d-none d-lg-block">
      <div class="row gx-0 align-items-center">
        <div class="col-lg-5 text-center text-lg-start mb-lg-0">
          <div class="d-flex">
            <NuxtLink to="#" class="text-muted me-4"
              ><i class="fas fa-envelope text-secondary me-2"></i
              >Example@gmail.com</NuxtLink>
            <NuxtLink to="#" class="text-muted me-0"
              ><i class="fas fa-phone-alt text-secondary me-2"></i
              >081320073451</NuxtLink>
          </div>
        </div>
        <div class="col-lg-3 text-center mb-2 mb-lg-0">
          <div class="d-inline-flex align-items-center" style="height: 45px">
            <NuxtLink
              class="btn btn-sm btn-outline-light btn-square rounded-circle me-2"
              to="#"
              ><i class="fab fa-twitter fw-normal text-secondary"></i
            ></NuxtLink>
            <NuxtLink
              class="btn btn-sm btn-outline-light btn-square rounded-circle me-2"
              to="#"
              ><i class="fab fa-facebook-f fw-normal text-secondary"></i
            ></NuxtLink>
            <NuxtLink
              class="btn btn-sm btn-outline-light btn-square rounded-circle me-2"
              to="#"
              ><i class="fab fa-linkedin-in fw-normal text-secondary"></i
            ></NuxtLink>
            <NuxtLink
              class="btn btn-sm btn-outline-light btn-square rounded-circle me-2"
              to="#"
              ><i class="fab fa-instagram fw-normal text-secondary"></i
            ></NuxtLink>
            <NuxtLink
              class="btn btn-sm btn-outline-light btn-square rounded-circle"
              to="#"
              ><i class="fab fa-youtube fw-normal text-secondary"></i
            ></NuxtLink>
          </div>
        </div>
        <div class="col-lg-4 text-center text-lg-end">
          <div class="d-inline-flex align-items-center" style="height: 45px">
            <NuxtLink to="#" class="text-muted me-2"> Help</NuxtLink><small> / </small>
            <NuxtLink to="#" class="text-muted mx-2"> Support</NuxtLink><small> / </small>
            <NuxtLink to="#" class="text-muted ms-2"> Contact</NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <!-- Top Bar End -->

    <!-- Navbar Start -->
    <div class="container-fluid nav-bar p-0">
      <nav
        class="navbar navbar-expand-lg navbar-light bg-white px-4 px-lg-5 py-3 py-lg-0"
      >
        <NuxtLink to="/" class="navbar-brand p-0">
          <h3 class="text-secondary m-0">
            <img
              src="/assets/img/logowta.png"
              class="img-fluid"
              alt="Logo"
            />Wans Tour Agency
          </h3>
        </NuxtLink>

        <!-- Toggler Button for Mobile -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="navbar-nav ms-auto py-0">
            <NuxtLink to="/" class="nav-item nav-link">Beranda</NuxtLink>
            <NuxtLink to="/about" class="nav-item nav-link">Tentang</NuxtLink>
            <NuxtLink to="/category" class="nav-item nav-link">Kategori</NuxtLink>
            <NuxtLink to="/destinasi" class="nav-item nav-link">Destinasi</NuxtLink>
            <NuxtLink to="/informasi" class="nav-item nav-link">Informasi</NuxtLink>
          </div>
          <NuxtLink
            to="/login"
            class="btn btn-primary border-secondary rounded-pill py-2 px-4 px-lg-3 mb-3 mb-lg-0"
            >Sign in</NuxtLink
          >
        </div>
      </nav>
    </div>
    <!-- Navbar End -->
  </div>
</template>

<script>
export default {
  mounted() {
    // Bootstrap JS dependency can be loaded in Nuxt by using this method
    // Make sure Bootstrap JS is available
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  },
};
</script>

<style scoped>
/* Add any custom styles if needed */
</style>
