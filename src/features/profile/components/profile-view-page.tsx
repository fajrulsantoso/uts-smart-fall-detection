'use client';

import { useState, useEffect } from 'react';

export default function ProfileViewPage() {
  const [user, setUser] = useState<any>(null);

  // Mengambil data pengguna dari localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className='flex w-full flex-col p-4'>
      {user ? (
        <div className='space-y-4'>
          <h1 className='text-2xl font-bold'>User Profile</h1>
          <div className='text-lg'>
            <p className='font-semibold'>Name: {user?.fullName}</p>
            <p>Email: {user?.email}</p>
            <p>Password: {user?.password}</p> {/* Jangan tampilkan password di produksi */}
          </div>
        </div>
      ) : (
        <div className='text-center text-lg text-red-600'>
          <p>No user found. Please log in.</p>
        </div>
      )}
    </div>
  );
}
