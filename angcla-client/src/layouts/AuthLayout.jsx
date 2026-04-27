import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <section className="min-h-screen bg-slate-50 text-slate-900">
      <div className="grid min-h-screen w-full lg:grid-cols-2">
        <div className="hidden lg:block">
          <img
            src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/wm/2026/04/witch-hat-atelier-episode-1-release-date-and-where-to-watch-gamerant-feature.jpg?w=1600&h=900&fit=crop"
            alt="Developer coding"
            className="h-full w-full object-cover"
          />
        </div>

        <main className="flex items-center bg-white px-6 py-10 sm:px-10 lg:px-16">
          <div className="mx-auto w-full max-w-md">
            <Outlet />
          </div>
        </main>
      </div>
    </section>
  );
};

export default AuthLayout;