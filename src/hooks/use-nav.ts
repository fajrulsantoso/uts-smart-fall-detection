'use client';

import { useMemo } from 'react';
import type { NavItem, NavGroup } from '@/types';

/**
 * Hook untuk menyaring item navigasi tanpa menggunakan Clerk atau RBAC
 *
 * @param items - Daftar item navigasi untuk disaring
 * @returns Item yang sudah difilter (sekarang semua item ditampilkan)
 */
export function useFilteredNavItems(items: NavItem[]) {
  return useMemo(() => {
    return items; // Kembalikan semua item tanpa penyaringan
  }, [items]);
}

/**
 * Hook untuk menyaring grup navigasi tanpa menggunakan Clerk atau RBAC
 *
 * @param groups - Daftar grup navigasi untuk disaring
 * @returns Grup navigasi yang sudah difilter (grup kosong akan dihapus)
 */
export function useFilteredNavGroups(groups: NavGroup[]) {
  const allItems = useMemo(() => groups.flatMap((g) => g.items), [groups]);
  const filteredItems = useFilteredNavItems(allItems);

  return useMemo(() => {
    return groups
      .map((group) => ({
        ...group,
        items: filteredItems.filter((item) => group.items.some((gi) => gi.title === item.title))
      }))
      .filter((group) => group.items.length > 0); // Menghapus grup yang tidak memiliki item
  }, [groups, filteredItems]);
}
