type SidebarItem = {
  title: string;
  icon?: string;
  url?: string;
  status: "available" | "comingSoon";
  children?: SidebarItem[];
};

type Sidebar = {
  menu: SidebarItem[];
};

const sidebar: Sidebar = {
  menu: [
    {
      title: "Dashboard",
      icon: "bi bi-house",
      url: "/",
      status: "available",
    },
    {
      title: "Wisata",
      icon: "bi bi-person-fill",
      url: "/admin/wisata",
      status: "available",
    },
    {
      title: "Kategori",
      icon: "bi bi-person-fill",
      url: "/dosen",
      status: "available",
    },
    {
      title: "BiroPerjalanan",
      icon: "bi bi-file-earmark",
      url: "/krs-mahasiswa",
      status: "available",
    },
    
    // {
    //   title: "Penjadwalan",
    //   icon: "bi bi-calendar4",
    //   status: "available",
    //   children: [
    //     {
    //       title: "Perwalian",
    //       url: "/penjadwalan/perwalian",
    //       status: "available",
    //     },
    //     {
    //       title: "Perkuliahan",
    //       url: "/penjadwalan/perkuliahan",
    //       status: "available",
    //     },
    //     {
    //       title: "UTS",
    //       url: "/penjadwalan/UTS",
    //       status: "available",
    //     },
    //     {
    //       title: "UAS",
    //       url: "/penjadwalan/UAS",
    //       status: "available",
    //     },
    //   ],
    // },
    {
      title: "Kurikulum",
      icon: "bi bi-folder",
      status: "available",
      children: [
        {
          title: "Kurikulum Periode",
          url: "/kurikulum",
          status: "available",
        },
        {
          title: "Kurikulum Tahun Ajaran",
          url: "/kurikulum-tahun-ajaran",
          status: "available",
        },
      ],
    },
    //   {
    //     title: 'Perkuliahan',
    //     icon: 'bi bi-file-earmark-text',
    //     url: '/perkuliahan',
    //     status: 'available',
    //   },
    // {
    //   title: "Pengumuman",
    //   icon: "bi bi-megaphone",
    //   url: "/pengumuman",
    //   status: "available",
    // },
    // {
    //   title: "Pengajuan Surat",
    //   url: "/pengajuan-surat",
    //   status: "comingSoon",
    // },
    // {
    //   title: "Arsip",
    //   url: "/arsip",
    //   status: "comingSoon",
    // },
  ],
};

export default sidebar;
