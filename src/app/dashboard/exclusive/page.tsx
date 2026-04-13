'use client';

import PageContainer from '@/components/layout/page-container';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Icons } from '@/components/icons';
import { Alert, AlertDescription } from '@/components/ui/alert';
import Link from 'next/link';

export default function ExclusivePage() {
  // Hapus penggunaan useOrganization dan Protect dari Clerk
  const organization = { name: 'Example Organization' }; // Simulasi data organisasi
  const isLoaded = true; // Misalnya, data sudah dimuat

  return (
    <PageContainer isLoading={!isLoaded}>
      <div className='space-y-6'>
        <div>
          <h1 className='flex items-center gap-2 text-3xl font-bold tracking-tight'>
            <Icons.badgeCheck className='h-7 w-7 text-green-600' />
            Exclusive Area
          </h1>
          <p className='text-muted-foreground'>
            Welcome, <span className='font-semibold'>{organization?.name}</span>! This page contains
            exclusive features.
          </p>
        </div>

        {/* Card dengan informasi eksklusif */}
        <Card>
          <CardHeader>
            <CardTitle>Thank You for Checking Out the Exclusive Page</CardTitle>
            <CardDescription>This means you have access to exclusive features.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className='text-lg'>Have a wonderful day!</div>
          </CardContent>
        </Card>

        {/* Alert Jika Tanpa Proteksi */}
        <Alert>
          <Icons.lock className='h-5 w-5 text-yellow-600' />
          <AlertDescription>
            <div className='mb-1 text-lg font-semibold'>Pro Plan Required</div>
            <div className='text-muted-foreground'>
              This page would be typically restricted to Pro plan users.
              <br />
              For more features, please visit the{' '}
              <Link className='underline' href='/dashboard/billing'>
                Billing &amp; Plans
              </Link>{' '}
              section.
            </div>
          </AlertDescription>
        </Alert>
      </div>
    </PageContainer>
  );
}
