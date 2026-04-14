'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const BroadcastNews = () => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [scheduledTime, setScheduledTime] = useState('');
  const [announcementStatus, setAnnouncementStatus] = useState('');

  const handleSendAnnouncement = () => {
    if (!title || !message) {
      setAnnouncementStatus('Judul dan pesan pengumuman harus diisi!');
      return;
    }

    // Simulasikan pengiriman pengumuman
    setTimeout(() => {
      setAnnouncementStatus('Pengumuman berhasil dikirim!');
    }, 2000);
  };

  return (
    <div className='space-y-10 p-8 md:p-12'>
      {/* Form Pengumuman */}
      <Card className='shadow-xl rounded-xl'>
        <CardHeader>
          <CardTitle>Buat Pengumuman</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='space-y-6'>
            {/* Judul Pengumuman */}
            <div className='space-y-2'>
              <label htmlFor='title' className='text-sm font-medium text-gray-700'>
                Judul Pengumuman
              </label>
              <Input
                id='title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder='Masukkan judul pengumuman'
                className='w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>

            {/* Pesan Pengumuman */}
            <div className='space-y-2'>
              <label htmlFor='message' className='text-sm font-medium text-gray-700'>
                Pesan Pengumuman
              </label>
              <Textarea
                id='message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder='Masukkan isi pengumuman'
                rows={5}
                className='w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>

            {/* Waktu Pengiriman */}
            <div className='space-y-2'>
              <label htmlFor='scheduledTime' className='text-sm font-medium text-gray-700'>
                Waktu Pengiriman
              </label>
              <Input
                id='scheduledTime'
                type='datetime-local'
                value={scheduledTime}
                onChange={(e) => setScheduledTime(e.target.value)}
                className='w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>

            {/* Tombol Kirim Pengumuman */}
            <Button
              onClick={handleSendAnnouncement}
              className='w-full mt-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200'
            >
              Kirim Pengumuman
            </Button>

            {/* Status Pengumuman */}
            {announcementStatus && (
              <p className='text-sm text-center mt-4 text-green-600'>{announcementStatus}</p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Daftar Pengumuman Terkirim */}
      <Card className='shadow-xl rounded-xl'>
        <CardHeader>
          <CardTitle>Pengumuman Terkirim</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='space-y-4'>
            {/* Daftar Pengumuman */}
            <div className='space-y-2'>
              <p className='font-semibold text-lg'>Pengumuman #1: Sistem Maintenance</p>
              <p className='text-sm text-muted-foreground'>Tanggal Pengiriman: 2023-04-01 09:00</p>
              <p className='text-xs text-muted-foreground'>Status: Sudah Dibaca</p>
            </div>
            <div className='space-y-2'>
              <p className='font-semibold text-lg'>Pengumuman #2: Update Firmware</p>
              <p className='text-sm text-muted-foreground'>Tanggal Pengiriman: 2023-04-02 12:00</p>
              <p className='text-xs text-muted-foreground'>Status: Belum Dibaca</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BroadcastNews;
