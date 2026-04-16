'use client';

import { Card, CardContent } from '@/components/ui/card'; // Import komponen Card dan CardContent dari folder yang sesuai
import { Shield, Activity, Bell } from 'lucide-react'; // Import ikon dari pustaka lucide-react

export default function GuidePage() {
  // Fungsi utama untuk halaman panduan
  return (
    <div className='min-h-screen bg-gradient-to-br from-background via-muted/30 to-muted/60'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16'>
        {' '}
        {/* Membuat container dengan padding dan jarak antar elemen */}
        {/* HEADER */}
        <div className='text-center space-y-5'>
          {' '}
          {/* Bagian header dengan teks yang terpusat */}
          <h1 className='text-3xl md:text-5xl font-bold tracking-tight leading-tight'>
            Panduan Smart Fall Detection
          </h1>{' '}
          {/* Judul halaman */}
          <p className='text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto leading-relaxed'>
            Sistem monitoring lansia berbasis IoT secara real-time
          </p>{' '}
          {/* Deskripsi singkat mengenai aplikasi */}
          {/* divider */}
          <div className='flex justify-center'>
            <div className='w-24 h-1.5 bg-primary rounded-full shadow-sm' />
          </div>
        </div>
        {/* FITUR UTAMA */}
        <div className='relative'>
          <div className='absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 rounded-3xl blur-2xl' />

          <div className='relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
            {' '}
            {/* Grid untuk menampilkan fitur utama dalam 3 kolom pada layar besar */}
            {/* Kartu Fitur 1 - Deteksi Jatuh */}
            <Card className='group rounded-3xl border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1'>
              <CardContent className='p-10 text-center space-y-5'>
                <div className='w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-green-100 group-hover:scale-110 transition'>
                  <Shield className='text-green-600 w-8 h-8' /> {/* Ikon perisai berwarna hijau */}
                </div>
                <p className='font-semibold text-lg'>Deteksi Jatuh</p> {/* Judul fitur */}
                <p className='text-sm text-muted-foreground'>Mendeteksi jatuh otomatis</p>{' '}
                {/* Deskripsi singkat */}
              </CardContent>
            </Card>
            {/* Kartu Fitur 2 - Real-time Monitor */}
            <Card className='group rounded-3xl border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1'>
              <CardContent className='p-10 text-center space-y-5'>
                <div className='w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-blue-100 group-hover:scale-110 transition'>
                  <Activity className='text-blue-600 w-8 h-8' />{' '}
                  {/* Ikon aktivitas berwarna biru */}
                </div>
                <p className='font-semibold text-lg'>Real-time Monitor</p> {/* Judul fitur */}
                <p className='text-sm text-muted-foreground'>Pantau kondisi langsung</p>{' '}
                {/* Deskripsi singkat */}
              </CardContent>
            </Card>
            {/* Kartu Fitur 3 - Notifikasi */}
            <Card className='group rounded-3xl border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1'>
              <CardContent className='p-10 text-center space-y-5'>
                <div className='w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-red-100 group-hover:scale-110 transition'>
                  <Bell className='text-red-600 w-8 h-8' /> {/* Ikon lonceng berwarna merah */}
                </div>
                <p className='font-semibold text-lg'>Notifikasi</p> {/* Judul fitur */}
                <p className='text-sm text-muted-foreground'>Alert saat darurat</p>{' '}
                {/* Deskripsi singkat */}
              </CardContent>
            </Card>
          </div>
        </div>
        {/* SECTION GRID */}
        <div className='grid md:grid-cols-2 gap-8'>
          {/* CARA KERJA */}
          <Card className='rounded-3xl shadow-sm border hover:shadow-md transition'>
            <CardContent className='p-10 space-y-6'>
              <h2 className='font-semibold text-xl'>Cara Kerja</h2> {/* Judul bagian cara kerja */}
              <ul className='space-y-4 text-sm text-muted-foreground leading-relaxed'>
                {' '}
                {/* List cara kerja */}
                <li className='flex items-start gap-3'>
                  <span className='w-6 h-6 flex items-center justify-center rounded-full bg-primary/10 text-primary text-xs'>
                    1
                  </span>
                  Lansia memakai gelang
                </li>{' '}
                {/* Langkah 1 */}
                <li className='flex items-start gap-3'>
                  <span className='w-6 h-6 flex items-center justify-center rounded-full bg-primary/10 text-primary text-xs'>
                    2
                  </span>
                  Sensor membaca gerakan
                </li>{' '}
                {/* Langkah 2 */}
                <li className='flex items-start gap-3'>
                  <span className='w-6 h-6 flex items-center justify-center rounded-full bg-primary/10 text-primary text-xs'>
                    3
                  </span>
                  Data dikirim ke sistem
                </li>{' '}
                {/* Langkah 3 */}
                <li className='flex items-start gap-3'>
                  <span className='w-6 h-6 flex items-center justify-center rounded-full bg-primary/10 text-primary text-xs'>
                    4
                  </span>
                  Sistem menentukan SAFE / FALL
                </li>{' '}
                {/* Langkah 4 */}
                <li className='flex items-start gap-3'>
                  <span className='w-6 h-6 flex items-center justify-center rounded-full bg-primary/10 text-primary text-xs'>
                    5
                  </span>
                  Hasil tampil di dashboard
                </li>{' '}
                {/* Langkah 5 */}
              </ul>
            </CardContent>
          </Card>

          {/* CARA PAKAI */}
          <Card className='rounded-3xl shadow-sm border hover:shadow-md transition'>
            <CardContent className='p-10 space-y-6'>
              <h2 className='font-semibold text-xl'>Cara Menggunakan</h2>{' '}
              {/* Judul bagian cara menggunakan */}
              <ul className='space-y-4 text-sm text-muted-foreground leading-relaxed'>
                {' '}
                {/* List cara menggunakan */}
                <li className='flex items-start gap-3'>
                  <span className='w-6 h-6 flex items-center justify-center rounded-full bg-primary/10 text-primary text-xs'>
                    1
                  </span>
                  Login ke sistem
                </li>{' '}
                {/* Langkah 1 */}
                <li className='flex items-start gap-3'>
                  <span className='w-6 h-6 flex items-center justify-center rounded-full bg-primary/10 text-primary text-xs'>
                    2
                  </span>
                  Buka dashboard
                </li>{' '}
                {/* Langkah 2 */}
                <li className='flex items-start gap-3'>
                  <span className='w-6 h-6 flex items-center justify-center rounded-full bg-primary/10 text-primary text-xs'>
                    3
                  </span>
                  Pantau status lansia
                </li>{' '}
                {/* Langkah 3 */}
                <li className='flex items-start gap-3'>
                  <span className='w-6 h-6 flex items-center justify-center rounded-full bg-primary/10 text-primary text-xs'>
                    4
                  </span>
                  Cek jika ada notifikasi jatuh
                </li>{' '}
                {/* Langkah 4 */}
                <li className='flex items-start gap-3'>
                  <span className='w-6 h-6 flex items-center justify-center rounded-full bg-primary/10 text-primary text-xs'>
                    5
                  </span>
                  Lihat riwayat di Activity Logs
                </li>{' '}
                {/* Langkah 5 */}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
