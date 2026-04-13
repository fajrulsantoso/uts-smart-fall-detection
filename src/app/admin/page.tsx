import { Card, CardContent } from '@/components/ui/card';
import { Users, AlertTriangle, Activity } from 'lucide-react';

export default function AdminPage() {
  const data = {
    users: 25,
    falls: 3,
    devices: 10
  };

  return (
    <div className='bg-gray-50 min-h-screen p-8'>
      {/* HEADER */}
      <div className='mb-12 text-center'>
        <h1 className='text-4xl font-extrabold text-gray-800'>Admin Dashboard</h1>
        <p className='text-gray-600 mt-3'>
          Pantau status sistem secara keseluruhan, dengan analisis dan statistik real-time.
        </p>
      </div>

      {/* GRID */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {/* USERS */}
        <Card className='transition-transform transform hover:scale-105 hover:shadow-xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-800 rounded-xl'>
          <CardContent className='p-6 flex justify-between items-center text-white'>
            <div>
              <p className='text-sm font-medium'>Total Users</p>
              <p className='text-3xl font-bold'>{data.users}</p>
            </div>
            <Users className='text-4xl' />
          </CardContent>
        </Card>

        {/* FALL */}
        <Card className='transition-transform transform hover:scale-105 hover:shadow-xl bg-gradient-to-r from-red-600 to-red-700 rounded-xl'>
          <CardContent className='p-6 flex justify-between items-center text-white'>
            <div>
              <p className='text-sm font-medium'>Fall Today</p>
              <p className='text-3xl font-bold text-yellow-300'>{data.falls}</p>
            </div>
            <AlertTriangle className='text-4xl' />
          </CardContent>
        </Card>

        {/* DEVICE */}
        <Card className='transition-transform transform hover:scale-105 hover:shadow-xl bg-gradient-to-r from-green-600 to-green-700 rounded-xl'>
          <CardContent className='p-6 flex justify-between items-center text-white'>
            <div>
              <p className='text-sm font-medium'>Device Online</p>
              <p className='text-3xl font-bold text-green-200'>{data.devices}</p>
            </div>
            <Activity className='text-4xl' />
          </CardContent>
        </Card>
      </div>

      {/* CARD LAYOUT FOR STATS */}
      <div className='mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        <Card className='transition-shadow shadow-lg hover:shadow-2xl bg-white rounded-xl'>
          <CardContent className='p-6 flex flex-col items-center text-center'>
            <p className='text-sm font-medium text-gray-600'>Active Users</p>
            <p className='text-4xl font-semibold text-gray-800'>75</p>
          </CardContent>
        </Card>

        <Card className='transition-shadow shadow-lg hover:shadow-2xl bg-white rounded-xl'>
          <CardContent className='p-6 flex flex-col items-center text-center'>
            <p className='text-sm font-medium text-gray-600'>Alerts</p>
            <p className='text-4xl font-semibold text-red-500'>12</p>
          </CardContent>
        </Card>

        <Card className='transition-shadow shadow-lg hover:shadow-2xl bg-white rounded-xl'>
          <CardContent className='p-6 flex flex-col items-center text-center'>
            <p className='text-sm font-medium text-gray-600'>Critical Incidents</p>
            <p className='text-4xl font-semibold text-yellow-500'>5</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
