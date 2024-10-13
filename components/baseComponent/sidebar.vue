<template>
    <div class="d-flex">
      <!-- Sidebar -->
      <nav class="bg-light border-right" id="sidebar">
        <div class="sidebar-header p-3 text-center">
          <h3>WTA Admin</h3>
        </div>
        <ul class="list-unstyled components p-3">
          <li class="mb-3 d-flex gap-4">
            <i class="bi bi-house"></i><NuxtLink to="/admin">Beranda</NuxtLink>
          </li>
          <li class="mb-3 d-flex gap-4">
            <i class="bi bi-bookmark"></i><NuxtLink to="/admin/kategori-wisata">Kategori</NuxtLink>
          </li >
          <li class="mb-3 d-flex gap-4">
            <i class="bi bi-card-list"></i><NuxtLink to="/admin/wisata">Wisata</NuxtLink>
          </li>
          <li class="mb-3 d-flex gap-4">
            <i class="bi bi-archive"></i><NuxtLink to="/admin/biroperjlanan">Biroperjalanan</NuxtLink>
          </li>
          <li class="mb-3 d-flex gap-4">
            <i class="bi bi-ticket"></i><NuxtLink to="/admin/tiket">Tiket</NuxtLink>
          </li>
          <li class="mb-3 d-flex gap-4">
            <i class="bi bi-wallet2"></i><NuxtLink to="/admin/transaksi">Transaksi</NuxtLink>
          </li>
          <li class="mb-3 d-flex gap-4">
            <i class="bi bi-person"></i><NuxtLink to="/admin/customer">Konsumen</NuxtLink>
          </li>
        </ul>
      </nav>
  
      <!-- Content Area -->
      <div id="content" class="p-4 w-100">
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Sidebar",
  };
  </script>
  
  <style scoped>
  #sidebar {
    width: 250px;
    height: 100vh;
    position: fixed;
  }
  #content {
    margin-left: 250px;
  }
  </style>
  