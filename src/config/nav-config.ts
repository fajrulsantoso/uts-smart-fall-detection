import { NavGroup } from '@/types'; // Mengimpor tipe data NavGroup untuk mendefinisikan struktur navigasi

/**
 * Navigation configuration with RBAC support
 * (komentar ini biarin aja, gak masalah)
 */

export const navGroups: NavGroup[] = [
  // Menyusun array untuk grup navigasi
  // =========================
  // 🔥 INI BAGIAN YANG DIUBAH TOTAL
  // =========================
  {
    label: 'Main Menu', // 🔥 Mengubah label menjadi 'Main Menu', sebelumnya 'Overview'
    items: [
      // Daftar item dalam menu utama
      {
        title: 'Informasi', // 🔥 Item baru, menambahkan 'Informasi' di menu
        url: '/dashboard/informasi', // 🔥 URL baru untuk halaman 'Informasi'
        icon: 'dashboard', // Ikon yang digunakan untuk item ini
        isActive: false, // Status aktif untuk item, masih non-aktif
        items: [] // Tidak ada submenu untuk item ini
      },

      {
        title: 'Dashboard', // 🔥 Item baru, 'Dashboard' sebagai menu utama
        url: '/dashboard', // 🔥 URL yang disesuaikan ke halaman dashboard utama
        icon: 'dashboard', // Ikon yang digunakan untuk 'Dashboard'
        isActive: false, // Status aktif untuk item ini
        items: [] // Tidak ada submenu untuk item ini
      },

      {
        title: 'Activity Logs', // 🔥 Item baru untuk mencatat aktivitas
        url: '/dashboard/logs', // 🔥 URL untuk halaman activity logs
        icon: 'dashboard', // Ikon yang digunakan untuk 'Activity Logs'
        isActive: false, // Status aktif untuk item ini
        items: [] // Tidak ada submenu untuk item ini
      },

      {
        title: 'Emergency', // Menambahkan menu 'Emergency'
        url: '/dashboard/emergency', // URL untuk halaman 'Emergency'
        icon: 'dashboard', // Ikon yang digunakan untuk 'Emergency'
        isActive: false, // Status aktif untuk item ini
        items: [] // Tidak ada submenu untuk item ini
      }

      // { // Baris ini dikomentari dan tidak digunakan
      //   title: 'Device',
      //   url: '/dashboard/device',
      //   icon: 'settings',
      //   isActive: false,
      //   items: []
      // }

      // { // Baris ini juga dikomentari dan tidak digunakan
      //   title: 'Admin',
      //   url: '/admin',
      //   icon: 'dashboard',
      //   isActive: false,
      //   items: []
      // }
    ]
  }

  // =========================
  // ❌ SEMUA BAGIAN DI BAWAH INI DIHAPUS
  // =========================

  /*
  {
    label: 'Elements', // Grup menu yang sudah dihapus
    items: [...] // Daftar item dalam grup yang sudah dihapus
  },
  {
    label: '', // Grup kosong yang sudah dihapus
    items: [...] // Daftar item dalam grup yang sudah dihapus
  }
  */
];
