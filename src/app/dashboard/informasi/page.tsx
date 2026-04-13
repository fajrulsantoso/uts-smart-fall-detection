'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Shield, Activity, Bell } from 'lucide-react';

export default function GuidePage() {
  return (
    <div className='min-h-screen bg-muted/40'>
      <div className='max-w-5xl mx-auto px-6 py-10 space-y-10'>
        {/* HEADER */}
        <div className='text-center space-y-2'>
          <h1 className='text-3xl font-bold'>Panduan Smart Fall Detection</h1>
          <p className='text-muted-foreground'>
            Sistem monitoring lansia berbasis IoT secara real-time
          </p>
        </div>

        {/* FITUR UTAMA */}
        <div className='grid md:grid-cols-3 gap-6'>
          <Card>
            <CardContent className='p-6 text-center space-y-2'>
              <Shield className='mx-auto text-green-500' />
              <p className='font-semibold'>Deteksi Jatuh</p>
              <p className='text-sm text-muted-foreground'>Mendeteksi jatuh otomatis</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='p-6 text-center space-y-2'>
              <Activity className='mx-auto text-blue-500' />
              <p className='font-semibold'>Real-time Monitor</p>
              <p className='text-sm text-muted-foreground'>Pantau kondisi langsung</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='p-6 text-center space-y-2'>
              <Bell className='mx-auto text-red-500' />
              <p className='font-semibold'>Notifikasi</p>
              <p className='text-sm text-muted-foreground'>Alert saat darurat</p>
            </CardContent>
          </Card>
        </div>

        {/* CARA KERJA */}
        <Card>
          <CardContent className='p-6 space-y-4'>
            <h2 className='font-semibold text-lg'>Cara Kerja</h2>

            <ul className='space-y-2 text-sm text-muted-foreground'>
              <li>1. Lansia memakai gelang</li>
              <li>2. Sensor membaca gerakan</li>
              <li>3. Data dikirim ke sistem</li>
              <li>4. Sistem menentukan SAFE / FALL</li>
              <li>5. Hasil tampil di dashboard</li>
            </ul>
          </CardContent>
        </Card>

        {/* CARA PAKAI */}
        <Card>
          <CardContent className='p-6 space-y-4'>
            <h2 className='font-semibold text-lg'>Cara Menggunakan</h2>

            <ul className='space-y-2 text-sm text-muted-foreground'>
              <li>1. Login ke sistem</li>
              <li>2. Buka dashboard</li>
              <li>3. Pantau status lansia</li>
              <li>4. Cek jika ada notifikasi jatuh</li>
              <li>5. Lihat riwayat di Activity Logs</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
