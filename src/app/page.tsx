import { redirect } from 'next/navigation';

export default async function Page() {
  // Memeriksa apakah ada informasi pengguna yang disimpan di local storage atau cookie
  const userId = localStorage.getItem('userId'); // Misalnya userId disimpan di localStorage

  if (!userId) {
    // Jika tidak ada userId, arahkan ke halaman login
    return redirect('/auth/sign-in');
  } else {
    // Jika userId ditemukan, arahkan ke dashboard
    redirect('/dashboard/overview');
  }
}
