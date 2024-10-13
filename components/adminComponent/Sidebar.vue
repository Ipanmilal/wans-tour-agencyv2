<template>
  <div class="sidebar" v-show="showSidebar">
    <a class="sidebar-brand" href="/">
      <!-- <img src="@/assets/img/svg/LOGOSIAKAD.png" width="150px" alt="" /> -->
    </a>
    <div class="sidebar-nav">
      <ul class="sidebar-menu">
        <li class="sidebar-header text-center">Menu</li>
        <li v-for="(item, index) in dataSidebar.menu" :key="index">
          <template v-if="item.children">
            <div class="ms-3 parent-link" @click="toggleSubmenu(index)">
              <div class="parent-item">
                <i v-if="item.icon" :class="item.icon + ' icon'"></i>
                <span class="parent-title">{{ item.title }}</span>
                <i :class="expandedIndex === index ? 'bi bi-chevron-up' : 'bi bi-chevron-down'" class="toggle-icon"></i>
              </div>
              <ul v-show="expandedIndex === index" class="submenu">
                <li v-for="(child, childIndex) in item.children" :key="childIndex">
                  <a v-if="child.status === 'available'" :class="{ active: isActiveRoute(child.url ?? '') }" :href="child.url ?? '#'" class="sidebar-link">
                    {{ child.title }}
                  </a>
                  <span v-else class="sidebar-link coming-soon">
                    {{ child.title }} <span class="coming-soon-text">(Coming Soon)</span>
                  </span>
                </li>
              </ul>
            </div>
          </template>
          <template v-else>
            <a v-if="item.status === 'available'" :href="item.url ?? '#'" :class="{ active: isActiveRoute(item.url ?? '') }" class="sidebar-link">
              <i v-if="item.icon" :class="item.icon + ' icon'"></i>
              {{ item.title }}
            </a>
            <span v-else class="sidebar-link coming-soon">
              <i v-if="item.icon" :class="item.icon + ' icon'"></i>
              {{ item.title }} <span class="coming-soon-text">(Coming Soon)</span>
            </span>
          </template>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue';
import dataSidebar from '~/stores/dataSidebar';

export default defineComponent({
  name: 'Sidebar',
  props: {
    showSidebar: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      dataSidebar,
      expandedIndex: null as number | null // Menyimpan indeks parent yang sedang diperluas
    };
  },
  methods: {
    toggleSubmenu(index: number) {
      // Toggle submenu: jika sedang terbuka, tutup; jika tidak, buka
      this.expandedIndex = this.expandedIndex === index ? null : index;
    },
    isActiveRoute(route: string | undefined) {
      // Cek apakah route saat ini aktif
      return route ? this.$route.path === route : false;
    },
    hasActiveChild(children: any[]) {
      // Cek apakah ada child yang aktif (route-nya aktif)
      return children.some(child => this.isActiveRoute(child.url));
    }
  },
  watch: {
    $route() {
      // Buka parent secara otomatis jika child-nya aktif
      const activeParentIndex = this.dataSidebar.menu.findIndex(item => item.children && this.hasActiveChild(item.children));
      if (activeParentIndex !== -1 && this.expandedIndex !== activeParentIndex) {
        this.expandedIndex = activeParentIndex;
      }
    }
  }
});
</script>
<style scoped>
.sidebar-link .icon {
  font-size: 18px; /* Sesuaikan dengan ukuran ikon yang diinginkan */
  margin-right: 10px; /* Sesuaikan dengan lebar spasi antara ikon dan teks */
}

.sidebar-link:focus {
  outline: 0;
}

.sidebar-link:hover {
  color: rgba(8, 86, 163, 0.75);
}

.sidebar {
  width: 250px;
  height: 100%;
  /* background-color: white; */
}

.sidebar-brand {
  font-weight: 500;
  font-size: 1.125rem;
  padding: 1.15rem 1.5rem;
  display: block;
  text-align: center;
}

.sidebar-nav {
  padding-left: 0;
  list-style: none;
  margin-top: 4px;
}

.sidebar-header {
  /* background: transparent; */
  padding: 1.5rem 1.5rem 0.375rem;
  font-size: 0.75rem;
}

.sidebar-link, span.sidebar-link,
a.sidebar-link {
  display: block;
  padding: 0.625rem 1.625rem;
  font-weight: 400;
  -webkit-transition: color 75ms ease-in-out;
  transition: color 75ms ease-in-out;
  position: relative;
  text-decoration: none;
  cursor: pointer;
  color: #777777;
}
.sidebar-link.active, span.sidebar-link.active,
a.sidebar-link.active {
  color: #007bff;
}

.container {
  background-color: white;
  padding: 10px;
}
.container .tabs {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 20px;
}
.sidebar {
  width: 250px;
}

.sidebar .sidebar-menu {
  list-style-type: none;
  padding: 0;
}

.sidebar .sidebar-menu .sidebar-header {
  padding: 10px;
  background-color: #f0f0f0; /* Warna latar belakang header */
  color: #333; /* Warna teks header */
  font-weight: bold;
}

.parent-link {
  cursor: pointer;
  padding: 10px;
}
.submenu {
    list-style-type: none; /* Menghilangkan bullet points */
    padding-left: 0; /* Menghilangkan padding default pada ul */
  }


.parent-item {
  display: flex;
  align-items: center;
}

.parent-title {
  margin-left: 10px; /* Jarak antara ikon dan teks */
}

.toggle-icon {
  margin-left: auto; /* Geser ikon panah ke kanan */
}

.sidebar .sidebar-link {
  display: block;
  padding: 10px 20px; /* Atur padding untuk item sidebar */
  text-decoration: none;
  color: #333; /* Warna teks item sidebar */
}

.sidebar .sidebar-link.active {
  background-color: #e9ecef; /* Warna latar belakang saat aktif */
}

.sidebar .sidebar-link.coming-soon {
  color: grey;
}

.coming-soon-text {
  font-style: italic;
  color: red;
}
</style>
