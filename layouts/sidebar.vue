<!-- <template>
  <div class="flex">
    <Sidebar />
    <div class="flex-1">
      <slot />
    </div>
  </div>
</template> -->
<template>
  <div>
    <Sidebar>
      <div>
        <h1>Welcome to Nuxt.js with Bootstrap 5 Sidebar</h1>
        <p>This is the main content area</p>
        <slot />
      </div>
    </Sidebar>
  </div>
</template>

<script setup>
import Sidebar from '~/components/baseComponent/sidebar.vue'
// import HeaderAdmin from '~/components/header/HeaderAdmin.vue'
</script>

<style scoped>
/* Optional: Additional styling */
</style>
