'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { AlertTriangle, CheckCircle } from 'lucide-react';

export default function CustomerLogsPage() {
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

  return (
    <div className='bg-gray-50 min-h-screen py-10 px-4'>
      <div className='max-w-5xl mx-auto space-y-8'>
        {/* HEADER CARD */}
        <Card className='shadow-sm'>
          <CardContent className='p-6 space-y-2'>
            <h1 className='text-2xl font-bold'>Activity Logs</h1>
            <p className='text-muted-foreground text-sm'>
              Riwayat kejadian lansia secara real-time
            </p>
            <p className='text-sm'>
              Pasien: <span className='font-semibold'>{patient.name}</span> ({patient.age} tahun)
            </p>
          </CardContent>
        </Card>

        {/* SUMMARY */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <Card className='border-green-200'>
            <CardContent className='p-5'>
              <p className='text-muted-foreground text-sm'>Status Aman</p>
              <p className='text-2xl font-bold text-green-600 flex items-center gap-2'>
                <CheckCircle size={18} /> {totalSafe}
              </p>
            </CardContent>
          </Card>

          <Card className='border-red-200'>
            <CardContent className='p-5'>
              <p className='text-muted-foreground text-sm'>Kejadian Jatuh</p>
              <p className='text-2xl font-bold text-red-600 flex items-center gap-2'>
                <AlertTriangle size={18} /> {totalFall}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* FILTER */}
        <Card>
          <CardContent className='p-4 flex flex-col md:flex-row gap-3 md:items-center md:justify-between'>
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
        <div className='space-y-3'>
          {filteredLogs.length === 0 && (
            <Card>
              <CardContent className='p-6 text-center text-muted-foreground'>
                Data tidak ditemukan
              </CardContent>
            </Card>
          )}

          {filteredLogs.map((log, index) => {
            const isSafe = log.status === 'SAFE';

            return (
              <Card
                key={index}
                className={`transition hover:shadow-md ${
                  isSafe ? 'border-l-4 border-green-500' : 'border-l-4 border-red-500'
                }`}
              >
                <CardContent className='p-4 flex justify-between items-center'>
                  {/* LEFT */}
                  <div className='space-y-1'>
                    <p className='font-semibold text-sm'>{log.time}</p>

                    <p className='text-sm text-muted-foreground'>📍 {log.location}</p>

                    <p className='text-sm text-muted-foreground'>📝 {log.note}</p>
                  </div>

                  {/* RIGHT */}
                  <div className='flex flex-col items-end gap-2'>
                    <Badge variant={isSafe ? 'secondary' : 'destructive'}>{log.status}</Badge>

                    {isSafe ? (
                      <CheckCircle className='text-green-500' size={18} />
                    ) : (
                      <AlertTriangle className='text-red-500' size={18} />
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
