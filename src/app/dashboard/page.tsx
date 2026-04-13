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
    <div className='min-h-screen bg-muted/40'>
      <div className='max-w-6xl mx-auto px-6 py-8 space-y-8'>
        {/* HEADER */}
        <div>
          <h1 className='text-3xl font-bold tracking-tight'>Smart Fall Detection</h1>
          <p className='text-muted-foreground'>Monitoring kondisi lansia secara real-time</p>
        </div>

        {/* STATUS HERO */}
        <Card className='border shadow-sm'>
          <CardContent className='p-10 flex flex-col items-center justify-center gap-4 text-center'>
            <Badge variant={isSafe ? 'secondary' : 'destructive'} className='px-4 py-1 text-sm'>
              {isSafe ? 'Normal Condition' : 'Emergency Detected'}
            </Badge>

            <h1 className={`text-6xl font-extrabold ${isSafe ? 'text-green-500' : 'text-red-500'}`}>
              {isSafe ? 'SAFE' : 'FALL DETECTED'}
            </h1>

            <p className='text-sm text-muted-foreground'>Last update: {data.lastUpdate}</p>
          </CardContent>
        </Card>

        {/* INFO GRID */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {/* BATTERY */}
          <Card className='hover:shadow-md transition'>
            <CardContent className='p-6 space-y-4'>
              <div className='flex justify-between items-center'>
                <p className='text-sm text-muted-foreground'>Battery</p>
                <Battery className='text-muted-foreground' />
              </div>

              <p className='text-3xl font-bold'>{data.battery}%</p>

              {/* PROGRESS */}
              <div className='w-full bg-muted rounded-full h-2'>
                <div
                  className='bg-green-500 h-2 rounded-full transition-all'
                  style={{ width: `${data.battery}%` }}
                />
              </div>
            </CardContent>
          </Card>

          {/* DEVICE */}
          <Card className='hover:shadow-md transition'>
            <CardContent className='p-6 space-y-4'>
              <div className='flex justify-between items-center'>
                <p className='text-sm text-muted-foreground'>Device Status</p>
                <Activity className='text-green-500' />
              </div>

              <p className='text-3xl font-bold text-green-500'>Online</p>

              <Badge variant='secondary'>Connected</Badge>
            </CardContent>
          </Card>

          {/* LAST UPDATE */}
          <Card className='hover:shadow-md transition'>
            <CardContent className='p-6 space-y-4'>
              <div className='flex justify-between items-center'>
                <p className='text-sm text-muted-foreground'>Last Update</p>
                <Clock className='text-muted-foreground' />
              </div>

              <p className='text-3xl font-bold'>{data.lastUpdate}</p>

              <p className='text-xs text-muted-foreground'>Data synced from device</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
