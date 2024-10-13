<template>
    <div class="d-flex">
      <!-- Sidebar -->
      <nav class="bg-light border-right" id="sidebar">
        <div class="sidebar-header p-3">
          <h3>Sidebar</h3>
        </div>
        <ul class="list-unstyled components p-3">
          <li>
            <NuxtLink to="/">Beranda</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/admin/kategori-wisata">Kategori</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/admin/wisata">Wisata</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/admin/biroperjlanan">Biroperjalanan</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/admin/tiket">Tiket</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/admin/transaksi">Transaksi</NuxtLink>
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
  