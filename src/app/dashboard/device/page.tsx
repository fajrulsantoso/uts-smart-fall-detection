'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Cpu, Link2, Loader } from 'lucide-react';

export default function DevicePage() {
  const [serial, setSerial] = useState('');
  const [connected, setConnected] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isLogin, setIsLogin] = useState(true); // Switch between login and register
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleConnect = async () => {
    if (!serial) {
      setError('Masukkan Serial Number!');
      return;
    }

    setLoading(true);
    setError(''); // Reset error message

    // Simulasi koneksi perangkat (gunakan API nyata jika ada)
    setTimeout(() => {
      setLoading(false);
      setConnected(true); // Simulasi keberhasilan
    }, 1500);
  };

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      // Proses Login (simulasi)
      console.log('Logging in with', email, password);
      // Redirect ke Dashboard setelah login (disesuaikan)
    } else {
      // Proses Register (simulasi)
      console.log('Registering with', email, password, serial);
      // Register dan koneksi device di backend
    }
  };

  return (
    <div className='p-6 md:p-10 max-w-4xl mx-auto space-y-8'>
      {/* HEADER */}
      <div className='space-y-2 text-center'>
        <h1 className='text-3xl font-extrabold text-gray-800'>
          {isLogin ? 'Login' : 'Register'} - Device Pairing
        </h1>
        <p className='text-gray-600 text-lg'>
          {isLogin
            ? 'Masuk ke akun Anda untuk menghubungkan perangkat'
            : 'Buat akun baru dan hubungkan perangkat Smart Fall Detection'}
        </p>
      </div>

      {/* CARD */}
      <Card className='shadow-md border rounded-xl'>
        <CardContent className='p-8 space-y-6'>
          {/* FORM */}
          <form onSubmit={handleAuth} className='space-y-4'>
            {/* Email Input */}
            <div className='space-y-2'>
              <label className='text-sm font-medium text-gray-800'>Email</label>
              <Input
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password Input */}
            <div className='space-y-2'>
              <label className='text-sm font-medium text-gray-800'>Password</label>
              <Input
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {!isLogin && (
              <div className='space-y-2'>
                <label className='text-sm font-medium text-gray-800'>Serial Number ESP32</label>
                <Input
                  placeholder='Contoh: ESP32-ABC-123'
                  value={serial}
                  onChange={(e) => setSerial(e.target.value)}
                  required
                />
              </div>
            )}

            {/* Submit Button */}
            <Button
              className='w-full py-3 bg-blue-600 text-white hover:bg-blue-700'
              type='submit'
              disabled={loading}
            >
              {loading ? <Loader className='animate-spin' size={16} /> : <Link2 size={16} />}
              {loading ? 'Processing...' : isLogin ? 'Login' : 'Register'}
            </Button>
          </form>

          {/* ERROR MESSAGE */}
          {error && (
            <div className='mt-4 p-4 rounded-lg bg-red-50 border text-red-700'>
              <Cpu className='inline-block mr-2' size={16} />
              {error}
            </div>
          )}

          {/* SUCCESS MESSAGE */}
          {connected && !loading && (
            <div className='mt-4 p-4 rounded-lg bg-green-50 border text-green-700'>
              <Cpu className='inline-block mr-2' size={16} />
              Device berhasil terhubung ke sistem
            </div>
          )}

          {/* Switch Between Login/Register */}
          <div className='text-center mt-4'>
            {isLogin ? (
              <p>
                Don't have an account?{' '}
                <button
                  onClick={() => setIsLogin(false)}
                  className='text-blue-500 hover:text-blue-700'
                >
                  Register here
                </button>
              </p>
            ) : (
              <p>
                Already have an account?{' '}
                <button
                  onClick={() => setIsLogin(true)}
                  className='text-blue-500 hover:text-blue-700'
                >
                  Login here
                </button>
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
