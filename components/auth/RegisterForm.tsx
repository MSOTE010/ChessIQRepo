'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/lib/AuthContext';

export default function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { signUp } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');


    try {
      const res = await fetch('http://localhost:8080/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (res.ok) {
        router.push('/login'); // or /dashboard if you auto-login after registration
      } else {
        const data = await res.json();
        setError(data.message || 'Failed to register');
      }
      } catch (err: any) {
        console.error('Registration error:', err);
        setError('Something went wrong. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-8 space-y-4">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="w-full border px-3 py-2 rounded"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="w-full border px-3 py-2 rounded"
        required
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
        Register
      </button>
      <p className="text-sm">
        Already have an account?{' '}
        <Link href="/login" className="text-blue-500">
          Login
        </Link>
      </p>
    </form>
  );
}
