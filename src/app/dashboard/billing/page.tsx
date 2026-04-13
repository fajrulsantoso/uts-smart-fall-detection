'use client';

import PageContainer from '@/components/layout/page-container';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Icons } from '@/components/icons';
import { billingInfoContent } from '@/config/infoconfig';

export default function BillingPage() {
  // Misalnya, kita tidak lagi menggunakan Clerk. Kita ganti dengan data statis atau API lain.
  const organization = { name: 'Example Organization' }; // Simulasi data organisasi
  const isLoaded = true; // Misalnya, data sudah dimuat

  return (
    <PageContainer
      isLoading={!isLoaded}
      access={!!organization}
      accessFallback={
        <div className='flex min-h-[400px] items-center justify-center'>
          <div className='space-y-2 text-center'>
            <h2 className='text-2xl font-semibold'>No Organization Selected</h2>
            <p className='text-muted-foreground'>
              Please select or create an organization to view billing information.
            </p>
          </div>
        </div>
      }
      infoContent={billingInfoContent}
      pageTitle='Billing & Plans'
      pageDescription={`Manage your subscription and usage limits for ${organization?.name}`}
    >
      <div className='space-y-6'>
        {/* Info Alert */}
        <Alert>
          <Icons.info className='h-4 w-4' />
          <AlertDescription>
            Plans and subscriptions are managed through the system. Subscribe to a plan to unlock
            features and higher limits.
          </AlertDescription>
        </Alert>

        {/* Static Pricing Table */}
        <Card>
          <CardHeader>
            <CardTitle>Available Plans</CardTitle>
            <CardDescription>Choose a plan that fits your organization's needs</CardDescription>
          </CardHeader>
          <CardContent>
            <div className='mx-auto max-w-4xl'>
              {/* Replace PricingTable with a static example or custom pricing UI */}
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                <div className='border p-6 rounded-lg shadow-md'>
                  <h3 className='text-xl font-semibold'>Basic Plan</h3>
                  <p className='mt-4 text-lg'>$10 / month</p>
                  <p className='mt-2 text-sm text-muted-foreground'>
                    Suitable for small teams with basic needs.
                  </p>
                  <button className='mt-4 w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700'>
                    Subscribe Now
                  </button>
                </div>
                <div className='border p-6 rounded-lg shadow-md'>
                  <h3 className='text-xl font-semibold'>Pro Plan</h3>
                  <p className='mt-4 text-lg'>$30 / month</p>
                  <p className='mt-2 text-sm text-muted-foreground'>
                    Ideal for growing teams with advanced features.
                  </p>
                  <button className='mt-4 w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700'>
                    Subscribe Now
                  </button>
                </div>
                <div className='border p-6 rounded-lg shadow-md'>
                  <h3 className='text-xl font-semibold'>Enterprise Plan</h3>
                  <p className='mt-4 text-lg'>$50 / month</p>
                  <p className='mt-2 text-sm text-muted-foreground'>
                    For large organizations with premium support.
                  </p>
                  <button className='mt-4 w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700'>
                    Subscribe Now
                  </button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}
