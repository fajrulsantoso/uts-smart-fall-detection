'use client';

import { useState, useEffect } from 'react'; // Mengimpor useEffect untuk menjalankan kode di klien
import { Card, CardContent } from '@/components/ui/card'; // Mengimpor komponen Card dan CardContent untuk tampilan kartu
import { Button } from '@/components/ui/button'; // Mengimpor komponen Button untuk tombol aksi
import { Input } from '@/components/ui/input'; // Mengimpor komponen Input untuk input teks
import { Label } from '@/components/ui/label'; // Mengimpor komponen Label untuk label input
import { Phone, Save, AlertTriangle } from 'lucide-react'; // Mengimpor ikon dari pustaka lucide-react

export default function EmergencyPage() {
  // Fungsi utama untuk halaman EmergencyPage
  const [phone, setPhone] = useState(''); // State untuk menyimpan nomor telepon
  const [saved, setSaved] = useState(false); // State untuk menunjukkan apakah nomor sudah disimpan
  const [isClient, setIsClient] = useState(false); // State untuk mengecek apakah kode berjalan di klien

  // Pastikan bahwa kita hanya menggunakan localStorage di klien
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Fungsi untuk menyimpan nomor darurat
  const handleSave = () => {
    if (!phone) return alert('Nomor tidak boleh kosong'); // Jika nomor kosong, tampilkan alert

    // Validasi format nomor telepon (format internasional)
    const phoneRegex = /^[+62][0-9]{8,14}$/;
    if (!phoneRegex.test(phone)) {
      return alert('Format nomor tidak valid. Gunakan format internasional (62xxx)');
    }

    // Simulasi menyimpan nomor telepon di localStorage
    if (isClient) {
      localStorage.setItem('sos_contact', phone);
      setSaved(true); // Menandakan bahwa nomor berhasil disimpan
      setTimeout(() => setSaved(false), 2000); // Menghilangkan pesan "nomor berhasil disimpan" setelah 2 detik
    }
  };

  // Fungsi untuk mengirimkan simulasi notifikasi darurat
  const handleTestAlert = () => {
    if (isClient) {
      const stored = localStorage.getItem('sos_contact'); // Mengambil nomor darurat yang tersimpan di localStorage

      if (!stored) {
        // Jika nomor darurat belum disimpan
        alert('Belum ada nomor tersimpan!');
        return;
      }

      // Simulasi kirim notifikasi melalui WhatsApp
      alert(`Simulasi kirim notifikasi ke WhatsApp: ${stored}`);
    }
  };

  return (
    <div className='bg-gray-50 min-h-screen p-8'>
      {' '}
      {/* Background halaman dan padding */}
      <div className='max-w-2xl mx-auto space-y-8'>
        {' '}
        {/* Kontainer utama dengan lebar maksimum dan jarak antar elemen */}
        {/* HEADER */}
        <div className='text-center'>
          {' '}
          {/* Bagian header halaman */}
          <h1 className='text-3xl font-bold text-gray-800'>Emergency Setup</h1>{' '}
          {/* Judul halaman */}
          <p className='text-gray-600 mt-2'>
            Atur kontak darurat untuk menerima notifikasi saat terjadi insiden.
          </p>{' '}
          {/* Deskripsi singkat */}
        </div>
        {/* FORM */}
        <Card className='shadow-md'>
          {' '}
          {/* Kartu untuk form input */}
          <CardContent className='p-6 space-y-6'>
            {' '}
            {/* Konten kartu dengan padding dan jarak antar elemen */}
            <div className='space-y-2'>
              {' '}
              {/* Bagian input untuk nomor telepon */}
              <Label>Nomor WhatsApp Keluarga</Label> {/* Label input */}
              <div className='flex gap-2'>
                {' '}
                {/* Layout input dengan ikon di sebelah kiri */}
                <Phone className='mt-3 text-gray-500' /> {/* Ikon telepon */}
                <Input
                  placeholder='Contoh: 6281234567890'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)} // Menyimpan input ke state 'phone'
                />
              </div>
              <p className='text-xs text-muted-foreground'>
                Gunakan format internasional tanpa spasi (62xxx)
              </p>{' '}
              {/* Petunjuk format input */}
            </div>
            <Button onClick={handleSave} className='w-full'>
              <Save className='mr-2 h-4 w-4' />
              Simpan Nomor
            </Button>
            {saved && (
              <p className='text-green-600 text-sm text-center'>Nomor berhasil disimpan ✅</p>
            )}
          </CardContent>
        </Card>
        {/* TEST ALERT */}
        <Card className='border-red-300 bg-red-50'>
          {' '}
          {/* Kartu untuk simulasi notifikasi darurat */}
          <CardContent className='p-6 space-y-4 text-center'>
            {' '}
            {/* Konten kartu dengan padding dan teks terpusat */}
            <AlertTriangle className='mx-auto text-red-600' size={32} /> {/* Ikon peringatan */}
            <p className='font-semibold text-red-700'>Simulasi Notifikasi Darurat</p>{' '}
            {/* Judul simulasi */}
            <Button variant='destructive' onClick={handleTestAlert}>
              {' '}
              {/* Tombol untuk mengirim simulasi notifikasi */}
              Test Kirim Notifikasi
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
