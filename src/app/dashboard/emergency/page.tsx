'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Phone, Save, AlertTriangle } from 'lucide-react';

export default function EmergencyPage() {
  const [phone, setPhone] = useState('');
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    if (!phone) return alert('Nomor tidak boleh kosong');

    // simulasi simpan (nanti bisa ke database)
    localStorage.setItem('sos_contact', phone);

    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleTestAlert = () => {
    const stored = localStorage.getItem('sos_contact');

    if (!stored) {
      alert('Belum ada nomor tersimpan!');
      return;
    }

    // simulasi kirim WA
    alert(`Simulasi kirim notifikasi ke WhatsApp: ${stored}`);
  };

  return (
    <div className='bg-gray-50 min-h-screen p-8'>
      <div className='max-w-2xl mx-auto space-y-8'>
        {/* HEADER */}
        <div className='text-center'>
          <h1 className='text-3xl font-bold text-gray-800'>Emergency Setup</h1>
          <p className='text-gray-600 mt-2'>
            Atur kontak darurat untuk menerima notifikasi saat terjadi insiden.
          </p>
        </div>

        {/* FORM */}
        <Card className='shadow-md'>
          <CardContent className='p-6 space-y-6'>
            <div className='space-y-2'>
              <Label>Nomor WhatsApp Keluarga</Label>
              <div className='flex gap-2'>
                <Phone className='mt-3 text-gray-500' />
                <Input
                  placeholder='Contoh: 6281234567890'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <p className='text-xs text-muted-foreground'>
                Gunakan format internasional tanpa spasi (62xxx)
              </p>
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
          <CardContent className='p-6 space-y-4 text-center'>
            <AlertTriangle className='mx-auto text-red-600' size={32} />
            <p className='font-semibold text-red-700'>Simulasi Notifikasi Darurat</p>

            <Button variant='destructive' onClick={handleTestAlert}>
              Test Kirim Notifikasi
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
