'use client';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function Register() {
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();

  const registerUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');

    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log('User registered:', data.message);
      alert(data.message);

      if (formRef.current) {
        formRef.current.reset();
        router.push('/');
      }
    } else {
      console.error('Registration error:', data.error);
      alert(data.error);
    }
  };
  return (
    <div className="flex justify-center flex-col">
      <form ref={formRef} onSubmit={registerUser}>
        <div>
          <label htmlFor="name">Name</label>
          <br />
          <input type="text" placeholder="John Doe" name="name" />
        </div>

        <div className="mt-4">
          <label htmlFor="email">Email</label>
          <br />
          <input type="text" placeholder="username@xyz.com" name="email" />
        </div>

        <div className="mt-4">
          <label htmlFor="password">Password</label>
          <br />
          <input type="password" placeholder="********" name="password" />
        </div>

        <div className="mt-6 flex justify-between">
          <button type="submit">Register</button>
          <a href="/" className="flex items-center">
            Go to login
          </a>
        </div>
      </form>
    </div>
  );
}
