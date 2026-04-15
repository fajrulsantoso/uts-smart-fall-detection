import { NavGroup } from '@/types';

/**
 * Navigation configuration with RBAC support
 * (komentar ini biarin aja, gak masalah)
 */

export const navGroups: NavGroup[] = [
  // =========================
  // 🔥 INI BAGIAN YANG DIUBAH TOTAL
  // =========================
  {
    label: 'Main Menu', // 🔥 (sebelumnya "Overview")
    items: [
      {
        title: 'Informasi', // 🔥 baru
        url: '/dashboard/informasi', // 🔥 baru
        icon: 'dashboard',
        isActive: false,
        items: []
      },

      {
        title: 'Dashboard', // 🔥 baru
        url: '/dashboard', // 🔥 ganti dari /dashboard/overview
        icon: 'dashboard',
        isActive: false,
        items: []
      },

      {
        title: 'Activity Logs', // 🔥 baru
        url: '/dashboard/logs', // 🔥 baru
        icon: 'dashboard',
        isActive: false,
        items: []
      },

      {
        title: 'Emergency',
        url: '/dashboard/emergency',
        icon: 'dashboard',
        isActive: false,
        items: []
      }

      // {
      //   title: 'Device',
      //   url: '/dashboard/device',
      //   icon: 'settings',
      //   isActive: false,
      //   items: []
      // }

      // {
      //   title: 'Admin', // 🔥 baru
      //   url: '/admin', // 🔥 baru
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
    label: 'Elements',
    items: [...]
  },
  {
    label: '',
    items: [...]
  }
  */
];
