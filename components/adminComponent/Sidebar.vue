<template>
    <div>
      <div class="d-flex" id="wrapper">
        <!-- Sidebar -->
        <div id="sidebar-wrapper" class="bg-light border-end">
          <div class="sidebar-heading">My Sidebar</div>
          <div class="list-group list-group-flush">
            <a href="#" class="list-group-item list-group-item-action bg-light">Dashboard</a>
            <a href="#" class="list-group-item list-group-item-action bg-light">Profile</a>
            <a href="#" class="list-group-item list-group-item-action bg-light">Settings</a>
          </div>
        </div>
        <!-- /#sidebar-wrapper -->
  
        <!-- Page Content -->
        <div id="page-content-wrapper">
          <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
            <button class="btn btn-primary" id="menu-toggle" @click="toggleSidebar">Toggle Menu</button>
          </nav>
          <div class="container-fluid">
            <h1 class="mt-4">Simple Sidebar</h1>
            <p>This is a simple sidebar layout using Bootstrap 5 in Nuxt.js!</p>
          </div>
        </div>
        <!-- /#page-content-wrapper -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isSidebarOpen: true,
      };
    },
    methods: {
      toggleSidebar() {
        this.isSidebarOpen = !this.isSidebarOpen;
        const wrapper = document.getElementById('wrapper');
        if (this.isSidebarOpen) {
          wrapper.classList.remove('toggled');
        } else {
          wrapper.classList.add('toggled');
        }
      }
    }
  }
  </script>
  
  <style>
  #wrapper {
    display: flex;
    width: 100%;
  }
  
  #sidebar-wrapper {
    min-width: 250px;
    max-width: 250px;
  }
  
  #page-content-wrapper {
    width: 100%;
    padding-left: 250px;
  }
  
  #wrapper.toggled #sidebar-wrapper {
    margin-left: -250px;
  }
  
  #wrapper.toggled #page-content-wrapper {
    padding-left: 0;
  }
  </style>
  