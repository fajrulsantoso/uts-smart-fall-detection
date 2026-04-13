'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { GitHubStarsButton } from '@/components/github-stars-button';
import { cn } from '@/lib/utils';
import { Metadata } from 'next';
import Link from 'next/link';
import { InteractiveGridPattern } from './interactive-grid';

export const metadata: Metadata = {
  title: 'Authentication',
  description: 'Authentication forms built using the components.'
};

export default function SignInViewPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulasi login menggunakan localStorage
    if (email && password) {
      localStorage.setItem('user', JSON.stringify({ email }));
      setIsLoggedIn(true);
      // Redirect ke halaman dashboard atau home setelah login sukses
      window.location.href = '/dashboard/overview';
    } else {
      setError('Please enter a valid email and password');
    }
  };

  return (
    <div className='relative flex min-h-screen flex-col items-center justify-center overflow-hidden md:grid lg:max-w-none lg:grid-cols-2 lg:px-0'>
      <Link
        href='/examples/authentication'
        className={cn(
          'bg-transparent border-2 border-gray-500 rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-200',
          'absolute top-4 right-4 hidden md:top-8 md:right-8'
        )}
      >
        Login
      </Link>
      <div className='relative hidden h-full flex-col p-10 lg:flex dark:border-r'>
        <div className='absolute inset-0 bg-sidebar' />
        <div className='text-sidebar-foreground relative z-20 flex items-center text-lg font-medium'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='mr-2 h-6 w-6'
          >
            <path d='M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3' />
          </svg>
          Logo
        </div>
        <InteractiveGridPattern
          className={cn(
            'mask-[radial-gradient(400px_circle_at_center,white,transparent)]',
            'inset-x-0 inset-y-[0%] h-full skew-y-12'
          )}
        />
        <div className='text-sidebar-foreground relative z-20 mt-auto'>
          <blockquote className='space-y-2'>
            <p className='text-lg'>
              &ldquo;This starter template has saved me countless hours of work and helped me
              deliver projects to my clients faster than ever before.&rdquo;
            </p>
            <footer className='text-sidebar-foreground/70 text-sm'>Random Dude</footer>
          </blockquote>
        </div>
      </div>
      <div className='flex h-full items-center justify-center p-4 lg:p-8'>
        <div className='flex w-full max-w-md flex-col items-center justify-center space-y-6'>
          {/* github link  */}
          <GitHubStarsButton
            owner='kiranism'
            repo='next-shadcn-dashboard-starter'
            showRepo
            variant='outline'
            size='default'
          />
          <form onSubmit={handleLogin} className='space-y-6 w-full'>
            <div>
              <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
                Email Address
              </label>
              <input
                id='email'
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg'
                placeholder='your_email@example.com'
              />
            </div>
            <div>
              <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
                Password
              </label>
              <input
                id='password'
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg'
                placeholder='••••••••'
              />
            </div>

            {/* Display error message if login fails */}
            {error && <div className='text-red-600 text-sm'>{error}</div>}

            <Button
              type='submit'
              className='w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700'
            >
              Sign In
            </Button>
          </form>

          <div className='text-muted-foreground space-y-2 px-8 text-center text-xs'>
            <p>
              This is an{' '}
              <Link href='/about' className='hover:text-primary underline underline-offset-4'>
                open-source project
              </Link>{' '}
              for demo purposes.
            </p>
            <p>
              <Link
                href='https://github.com/kiranism/next-shadcn-dashboard-starter'
                target='_blank'
                className='hover:text-primary underline underline-offset-4'
              >
                View on GitHub
              </Link>
            </p>
          </div>

          <p className='text-muted-foreground px-8 text-center text-sm'>
            By clicking continue, you agree to our{' '}
            <Link
              href='/terms-of-service'
              className='hover:text-primary underline underline-offset-4'
            >
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link
              href='/privacy-policy'
              className='hover:text-primary underline underline-offset-4'
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
