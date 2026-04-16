'use client';

import PageContainer from '@/components/layout/page-container'; // Mengimpor komponen PageContainer yang mungkin digunakan untuk membungkus halaman dan menangani status pemuatan
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'; // Mengimpor komponen-komponen yang digunakan untuk membuat tampilan kartu (Card)
import { Icons } from '@/components/icons'; // Mengimpor kumpulan ikon dari komponen Icons
import { Alert, AlertDescription } from '@/components/ui/alert'; // Mengimpor komponen alert dan deskripsinya
import Link from 'next/link'; // Mengimpor komponen Link dari Next.js untuk membuat tautan navigasi

export default function ExclusivePage() {
  // Fungsi utama untuk halaman ExclusivePage
  // Hapus penggunaan useOrganization dan Protect dari Clerk
  const organization = { name: 'Example Organization' }; // Simulasi data organisasi
  const isLoaded = true; // Misalnya, data sudah dimuat

  return (
    <PageContainer isLoading={!isLoaded}>
      {' '}
      {/* Membungkus halaman dengan PageContainer dan memberikan status pemuatan */}
      <div className='space-y-6'>
        {' '}
        {/* Container utama dengan spasi antar elemen */}
        {/* Bagian Header Halaman */}
        <div>
          <h1 className='flex items-center gap-2 text-3xl font-bold tracking-tight'>
            {' '}
            {/* Judul halaman dengan ikon */}
            <Icons.badgeCheck className='h-7 w-7 text-green-600' />{' '}
            {/* Ikon badgeCheck yang ditampilkan di samping judul */}
            Exclusive Area {/* Judul halaman */}
          </h1>
          <p className='text-muted-foreground'>
            {' '}
            {/* Paragraf pengantar */}
            Welcome, <span className='font-semibold'>{organization?.name}</span>! This page contains
            exclusive features. {/* Menampilkan nama organisasi yang telah disimulasikan */}
          </p>
        </div>
        {/* Card dengan informasi eksklusif */}
        <Card>
          <CardHeader>
            {' '}
            {/* Bagian header kartu */}
            <CardTitle>Thank You for Checking Out the Exclusive Page</CardTitle>{' '}
            {/* Judul dalam kartu */}
            <CardDescription>
              This means you have access to exclusive features.
            </CardDescription>{' '}
            {/* Deskripsi dalam kartu */}
          </CardHeader>
          <CardContent>
            <div className='text-lg'>Have a wonderful day!</div> {/* Konten utama kartu */}
          </CardContent>
        </Card>
        {/* Alert Jika Tanpa Proteksi */}
        <Alert>
          <Icons.lock className='h-5 w-5 text-yellow-600' /> {/* Ikon lock dengan warna kuning */}
          <AlertDescription>
            <div className='mb-1 text-lg font-semibold'>Pro Plan Required</div>{' '}
            {/* Judul deskripsi alert */}
            <div className='text-muted-foreground'>
              {' '}
              {/* Deskripsi isi alert */}
              This page would be typically restricted to Pro plan users.
              <br />
              For more features, please visit the{' '}
              <Link className='underline' href='/dashboard/billing'>
                {' '}
                {/* Tautan ke halaman billing */}
                Billing &amp; Plans
              </Link>{' '}
              section.
            </div>
          </AlertDescription>
        </Alert>
      </div>
    </PageContainer>
  );
}
