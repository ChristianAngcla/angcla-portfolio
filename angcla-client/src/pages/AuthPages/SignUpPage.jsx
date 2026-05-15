import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import { createUser } from '../../services/userService';

const inputClasses =
  'mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:bg-white focus:ring-1 focus:ring-sky-500';

const actionButtonClassName = 'w-full rounded-xl py-3 text-[11px] tracking-[0.2em] uppercase';

const SignUpPage = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    // Default fields required by the DB schema
    age: '18',
    gender: 'other',
    contactNumber: '00000000000',
    address: 'Not provided',
    type: 'admin',
    isActive: true,
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createUser(form);
      navigate('/auth/signin'); // Redirect to login on success
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to create account. Please try again.');
    }
  };

  return (
    <>
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-black text-sky-900 sm:text-4xl">Create an Account</h1>
        <p className="mt-3 text-sm leading-6 text-slate-500">
          Join us and start your journey. It's free and only takes a minute.
        </p>
      </div>

      {error && (
        <div className="mb-6 rounded-xl bg-red-50 p-4 text-sm font-medium text-red-600 border border-red-100">
          {error}
        </div>
      )}

      <form className="space-y-5" onSubmit={handleSignup}>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="text-sm font-medium text-slate-700">
              First Name
            </label>
            <input
              id="first-name"
              name="firstName"
              type="text"
              placeholder="John"
              autoComplete="given-name"
              className={inputClasses}
              value={form.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="last-name" className="text-sm font-medium text-slate-700">
              Last Name
            </label>
            <input
              id="last-name"
              name="lastName"
              type="text"
              placeholder="Doe"
              autoComplete="family-name"
              className={inputClasses}
              value={form.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="signup-email" className="text-sm font-medium text-slate-700">
              Email Address
            </label>
            <input
              id="signup-email"
              name="email"
              type="email"
              placeholder="you@example.com"
              className={inputClasses}
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="signup-username" className="text-sm font-medium text-slate-700">
              Username
            </label>
            <input
              id="signup-username"
              name="username"
              type="text"
              placeholder="johndoe123"
              className={inputClasses}
              value={form.username}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="signup-password" className="text-sm font-medium text-slate-700">
            Password
          </label>
          <input
            id="signup-password"
            name="password"
            type="password"
            placeholder="••••••••"
            autoComplete="new-password"
            className={inputClasses}
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>

        <Button type="submit" variant="primary" className={actionButtonClassName}>
          Create Account
        </Button>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-2 text-slate-500">Or continue with</span>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <Button type="button" variant="secondary" className={actionButtonClassName}>
            Google
          </Button>
          <Button type="button" variant="secondary" className={actionButtonClassName}>
            Apple
          </Button>
        </div>
      </form>

      <div className="mt-8 text-center text-sm text-slate-600">
        Already have an account?{' '}
        <Link to="/auth/signin" className="font-semibold text-sky-600 transition hover:text-sky-500">
          Log In
        </Link>
      </div>
    </>
  );
};

export default SignUpPage;