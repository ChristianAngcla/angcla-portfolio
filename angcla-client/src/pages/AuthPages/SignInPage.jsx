import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import { loginUser } from '../../services/userService';

const inputClasses =
  'mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:bg-white focus:ring-1 focus:ring-sky-500';

const actionButtonClassName = 'w-full rounded-xl py-3 text-[11px] tracking-[0.2em] uppercase';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      // Call the login API
      const { data } = await loginUser({ email, password });
      console.log('Login successful:', data);

      localStorage.setItem('token', data.token);
      localStorage.setItem('firstName', data.firstName);
      localStorage.setItem('type', data.type); // use this for dynamic rendering

      // Navigate to the dashboard with the user's email and type
      navigate('/dashboard', { state: { firstName: data.firstName, type: data.type } });
    } catch (err) {
      console.error('Login failed:', err.response?.data?.message || err.message);
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    }
  };

  return (
    <>
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-black text-sky-900 sm:text-4xl">Welcome Back!</h1>
        <p className="mt-3 text-sm leading-6 text-slate-500">
          Log in to access your account and continue your journey.
        </p>
      </div>

      {error && (
        <div className="mb-6 rounded-xl bg-red-50 p-4 text-sm font-medium text-red-600 border border-red-100">
          {error}
        </div>
      )}

      <form className="space-y-5" onSubmit={handleLogin}>
        <div>
          <label htmlFor="signin-email" className="text-sm font-medium text-slate-700">
            Email Address
          </label>
          <input
            id="signin-email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            className={inputClasses}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="signin-password" className="text-sm font-medium text-slate-700">
              Password
            </label>
            <Link to="#" className="text-sm font-medium text-sky-600 transition hover:text-sky-500">
              Forgot Password?
            </Link>
          </div>
          <input
            id="signin-password"
            type="password"
            placeholder="••••••••"
            autoComplete="current-password"
            className={inputClasses}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="flex items-center gap-2 text-sm">
          <input type="checkbox" id="remember-me" className="h-4 w-4 rounded border-slate-300 accent-sky-600" />
          <label htmlFor="remember-me" className="text-slate-600">
            Remember me
          </label>
        </div>

        <Button type="submit" variant="primary" className={actionButtonClassName}>
          Log In
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
        No account yet?{' '}
        <Link to="/auth/signup" className="font-semibold text-sky-600 transition hover:text-sky-500">
          Sign Up
        </Link>
      </div>
    </>
  );
};

export default SignInPage;