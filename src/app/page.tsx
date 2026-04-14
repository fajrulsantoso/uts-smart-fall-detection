'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    const userId = localStorage.getItem('userId');

    if (!userId) {
      router.push('/auth/sign-in');
    } else {
      router.push('/dashboard/overview');
    }
  }, [router]);

  return null;
}
