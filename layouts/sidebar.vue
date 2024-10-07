<template>
  <div class="flex">
    <Sidebar />
    <div class="flex-1">
      <slot />
    </div>
  </div>
</template>

<script setup>
import Sidebar from '~/components/adminComponent/Sidebar.vue'
// import HeaderAdmin from '~/components/header/HeaderAdmin.vue'
</script>

<style scoped>
/* Optional: Additional styling */
</style>
