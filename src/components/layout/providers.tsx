'use client';

import React from 'react';
import { useTheme } from 'next-themes';
import { ActiveThemeProvider } from '../themes/active-theme';
import QueryProvider from './query-provider';

export default function Providers({
  activeThemeValue,
  children
}: {
  activeThemeValue: string;
  children: React.ReactNode;
}) {
  const { resolvedTheme } = useTheme();

  return (
    <ActiveThemeProvider initialTheme={activeThemeValue}>
      <QueryProvider>{children}</QueryProvider>
    </ActiveThemeProvider>
  );
}
