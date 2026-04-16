'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Battery, Activity, Clock } from 'lucide-react';

export default function DashboardPage() {
  const data = {
    status: 'safe',
    battery: 85,
    lastUpdate: '10:30 AM'
  };

  const isSafe = data.status === 'safe';

  return (
    <div className='min-h-screen bg-gradient-to-br from-background via-muted/30 to-muted/60'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10'>
        {/* HEADER */}
        <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
          <div>
            <h1 className='text-3xl md:text-4xl font-bold tracking-tight'>Smart Fall Detection</h1>
            <p className='text-muted-foreground'>Monitoring kondisi lansia secara real-time</p>
          </div>

          <Badge variant='secondary' className='w-fit px-4 py-1 text-sm'>
            Live System
          </Badge>
        </div>

        {/* STATUS HERO */}
        <Card className='relative overflow-hidden rounded-3xl border shadow-sm'>
          <div
            className={`absolute inset-0 opacity-10 ${isSafe ? 'bg-green-500' : 'bg-red-500'}`}
          />

          <CardContent className='relative p-12 flex flex-col items-center justify-center gap-5 text-center'>
            <Badge variant={isSafe ? 'secondary' : 'destructive'} className='px-4 py-1 text-sm'>
              {isSafe ? 'Normal Condition' : 'Emergency Detected'}
            </Badge>

            <h1
              className={`text-6xl md:text-7xl font-extrabold tracking-tight ${isSafe ? 'text-green-500' : 'text-red-500'}`}
            >
              {isSafe ? 'SAFE' : 'FALL DETECTED'}
            </h1>

            {/* pulse effect */}
            <div
              className={`w-3 h-3 rounded-full animate-ping ${isSafe ? 'bg-green-500' : 'bg-red-500'}`}
            />

            <p className='text-sm text-muted-foreground'>Last update: {data.lastUpdate}</p>
          </CardContent>
        </Card>

        {/* INFO GRID */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {/* BATTERY */}
          <Card className='rounded-2xl hover:shadow-lg transition-all'>
            <CardContent className='p-6 space-y-4'>
              <div className='flex justify-between items-center'>
                <p className='text-sm text-muted-foreground'>Battery</p>
                <Battery className='text-muted-foreground' />
              </div>

              <p className='text-3xl font-bold'>{data.battery}%</p>

              {/* PROGRESS */}
              <div className='w-full bg-muted rounded-full h-2 overflow-hidden'>
                <div
                  className={`h-2 rounded-full transition-all ${data.battery > 30 ? 'bg-green-500' : 'bg-red-500'}`}
                  style={{ width: `${data.battery}%` }}
                />
              </div>

              <p className='text-xs text-muted-foreground'>
                {data.battery > 30 ? 'Battery in good condition' : 'Battery low'}
              </p>
            </CardContent>
          </Card>

          {/* DEVICE */}
          <Card className='rounded-2xl hover:shadow-lg transition-all'>
            <CardContent className='p-6 space-y-4'>
              <div className='flex justify-between items-center'>
                <p className='text-sm text-muted-foreground'>Device Status</p>
                <Activity className='text-green-500' />
              </div>

              <p className='text-3xl font-bold text-green-500'>Online</p>

              <Badge variant='secondary'>Connected</Badge>

              <div className='flex items-center gap-2 text-xs text-muted-foreground'>
                <span className='w-2 h-2 bg-green-500 rounded-full animate-pulse' />
                Stable connection
              </div>
            </CardContent>
          </Card>

          {/* LAST UPDATE */}
          <Card className='rounded-2xl hover:shadow-lg transition-all'>
            <CardContent className='p-6 space-y-4'>
              <div className='flex justify-between items-center'>
                <p className='text-sm text-muted-foreground'>Last Update</p>
                <Clock className='text-muted-foreground' />
              </div>

              <p className='text-3xl font-bold'>{data.lastUpdate}</p>

              <p className='text-xs text-muted-foreground'>Data synced from device</p>

              <div className='text-xs text-green-500'>● Real-time sync active</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
