'use client';

import { useState } from 'react'; // Mengimpor hook useState untuk mengelola state dalam komponen
import { Card, CardContent } from '@/components/ui/card'; // Mengimpor komponen Card dan CardContent untuk tampilan kartu
import { Badge } from '@/components/ui/badge'; // Mengimpor komponen Badge untuk menampilkan status dalam kartu
import { Input } from '@/components/ui/input'; // Mengimpor komponen Input untuk input teks
import { Button } from '@/components/ui/button'; // Mengimpor komponen Button untuk tombol aksi
import { AlertTriangle, CheckCircle } from 'lucide-react'; // Mengimpor ikon dari pustaka lucide-react

export default function CustomerLogsPage() {
  // Fungsi utama untuk halaman CustomerLogsPage
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('ALL');

  const patient = {
    name: 'Budi Santoso',
    age: 72
  };

  const logs = [
    {
      time: '2026-04-12 10:00',
      status: 'FALL',
      location: 'Kamar',
      note: 'Terjatuh saat berjalan ke kamar mandi'
    },
    {
      time: '2026-04-12 09:30',
      status: 'SAFE',
      location: 'Ruang Tamu',
      note: 'Aktivitas normal'
    },
    {
      time: '2026-04-11 20:15',
      status: 'SAFE',
      location: 'Dapur',
      note: 'Sedang memasak'
    },
    {
      time: '2026-04-11 18:40',
      status: 'FALL',
      location: 'Kamar Mandi',
      note: 'Terpeleset di lantai basah'
    },
    {
      time: '2026-04-11 07:10',
      status: 'SAFE',
      location: 'Halaman',
      note: 'Berjalan santai'
    }
  ];

  const filteredLogs = logs.filter((log) => {
    const matchSearch =
      log.location.toLowerCase().includes(search.toLowerCase()) ||
      log.note.toLowerCase().includes(search.toLowerCase());

    const matchFilter = filter === 'ALL' ? true : log.status === filter;

    return matchSearch && matchFilter;
  });

  const totalFall = logs.filter((log) => log.status === 'FALL').length;
  const totalSafe = logs.filter((log) => log.status === 'SAFE').length;

  const latestLog = logs[0]; // highlight log terbaru

  return (
    <div className='min-h-screen bg-gradient-to-br from-background via-muted/30 to-muted/60 flex justify-center'>
      <div className='w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-20 space-y-12'>
        {/* HEADER CARD */}
        <Card className='rounded-3xl shadow-sm border'>
          <CardContent className='p-8 space-y-3'>
            <h1 className='text-3xl font-bold tracking-tight'>Activity Logs</h1>
            <p className='text-muted-foreground text-sm'>
              Riwayat kejadian lansia secara real-time
            </p>
            <p className='text-sm'>
              Pasien: <span className='font-semibold'>{patient.name}</span> ({patient.age} tahun)
            </p>
          </CardContent>
        </Card>

        {/* 🔥 HIGHLIGHT TERBARU */}
        <Card
          className={`rounded-3xl border shadow-sm ${
            latestLog.status === 'FALL'
              ? 'border-red-300 bg-red-50/50'
              : 'border-green-300 bg-green-50/50'
          }`}
        >
          <CardContent className='p-6 flex flex-col md:flex-row md:justify-between md:items-center gap-4'>
            <div>
              <p className='text-sm text-muted-foreground'>Latest Activity</p>
              <p className='font-semibold'>{latestLog.note}</p>
              <p className='text-xs text-muted-foreground'>{latestLog.time}</p>
            </div>

            <Badge variant={latestLog.status === 'SAFE' ? 'secondary' : 'destructive'}>
              {latestLog.status}
            </Badge>
          </CardContent>
        </Card>

        {/* SUMMARY */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <Card className='rounded-2xl border border-green-200 hover:shadow-md transition'>
            <CardContent className='p-6'>
              <p className='text-muted-foreground text-sm'>Status Aman</p>
              <p className='text-3xl font-bold text-green-600 flex items-center gap-2'>
                <CheckCircle size={20} /> {totalSafe}
              </p>
            </CardContent>
          </Card>

          <Card className='rounded-2xl border border-red-200 hover:shadow-md transition'>
            <CardContent className='p-6'>
              <p className='text-muted-foreground text-sm'>Kejadian Jatuh</p>
              <p className='text-3xl font-bold text-red-600 flex items-center gap-2'>
                <AlertTriangle size={20} /> {totalFall}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* FILTER */}
        <Card className='rounded-2xl shadow-sm border'>
          <CardContent className='p-5 flex flex-col md:flex-row gap-4 md:items-center md:justify-between'>
            <Input
              className='md:w-1/2'
              placeholder='Cari lokasi atau aktivitas...'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <div className='flex gap-2 flex-wrap'>
              <Button
                size='sm'
                variant={filter === 'ALL' ? 'default' : 'outline'}
                onClick={() => setFilter('ALL')}
              >
                Semua
              </Button>
              <Button
                size='sm'
                variant={filter === 'SAFE' ? 'default' : 'outline'}
                onClick={() => setFilter('SAFE')}
              >
                Safe
              </Button>
              <Button
                size='sm'
                variant={filter === 'FALL' ? 'default' : 'outline'}
                onClick={() => setFilter('FALL')}
              >
                Fall
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* LIST */}
        <div className='space-y-4'>
          {filteredLogs.length === 0 && (
            <Card className='rounded-2xl'>
              <CardContent className='p-10 text-center space-y-2 text-muted-foreground'>
                <p className='text-lg font-semibold'>Tidak ada data</p>
                <p className='text-sm'>Coba ubah filter atau kata pencarian</p>
              </CardContent>
            </Card>
          )}

          {filteredLogs.map((log, index) => {
            const isSafe = log.status === 'SAFE';

            return (
              <Card
                key={index}
                className={`rounded-2xl transition-all hover:shadow-lg hover:-translate-y-[2px] ${
                  isSafe ? 'border-l-4 border-green-500' : 'border-l-4 border-red-500'
                }`}
              >
                <CardContent className='p-5 flex flex-col md:flex-row md:justify-between md:items-center gap-4'>
                  {/* LEFT */}
                  <div className='space-y-1'>
                    <p className='font-semibold text-sm'>{log.time}</p>
                    <p className='text-sm text-muted-foreground'>📍 {log.location}</p>
                    <p className='text-sm text-muted-foreground'>📝 {log.note}</p>
                  </div>

                  {/* RIGHT */}
                  <div className='flex items-center justify-between md:flex-col md:items-end gap-2'>
                    <Badge variant={isSafe ? 'secondary' : 'destructive'}>{log.status}</Badge>

                    {isSafe ? (
                      <CheckCircle className='text-green-500' size={20} />
                    ) : (
                      <AlertTriangle className='text-red-500' size={20} />
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
