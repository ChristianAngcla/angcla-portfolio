import Button from "../../components/Button";

const HomePage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      
      {/* Hero Section */}
      <section className="border-y-2 border-sky-100 bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          
          <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.28em] text-emerald-400">
              Hello, World! I'm Christian Constantino Angcla
            </p>

            <h1 className="max-w-xl text-3xl font-black leading-tight text-sky-900 sm:text-5xl">
              BSIT Student - Mobile & Web Applications.
            </h1>

            <p className="mt-4 max-w-lg text-sm leading-7 text-slate-500 sm:text-base">
              I am a 3rd-year IT student at National University. I am currently upskilling and building my portfolio with prototypes like <i>How to Train Your Birdie</i>, <i>Quickita</i>, <i>Floodguard</i>, and <i>Intertwine</i>.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/about" variant="primary">
                More About Me
              </Button>
              <Button to="/dashboard" variant="secondary">
                View Dashboard
              </Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border-2 border-sky-100 shadow-xl shadow-sky-200/50">
            <img 
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Developer coding" 
              className="h-[400px] w-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* KPI Section */}
      <section className="border-y-2 border-sky-100 bg-sky-50/30 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-violet-400">
            My Journey
          </p>

          <h2 className="mt-2 text-2xl font-bold text-sky-900">
            By the Numbers
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          
          <div className="rounded-3xl border-2 border-violet-100 bg-white p-5 shadow-sm shadow-violet-100">
            <p className="text-2xl font-black text-violet-500">4+</p>
            <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.24em] text-sky-500">
              App Prototypes
            </p>
          </div>

          <div className="rounded-3xl border-2 border-violet-100 bg-white p-5 shadow-sm shadow-violet-100">
            <p className="text-2xl font-black text-violet-500">3rd</p>
            <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.24em] text-sky-500">
              Year IT Student (NU)
            </p>
          </div>

          <div className="rounded-3xl border-2 border-violet-100 bg-white p-5 shadow-sm shadow-violet-100">
            <p className="text-2xl font-black text-violet-500">Active</p>
            <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.24em] text-sky-500">
              Learner & Upskilling
            </p>
          </div>

          <div className="rounded-3xl border-2 border-violet-100 bg-white p-5 shadow-sm shadow-violet-100">
            <p className="text-2xl font-black text-violet-500">1000+</p>
            <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.24em] text-sky-500">
              Cups of Coffee
            </p>
          </div>

        </div>
      </section>

      {/* Feature Cards */}
      <section className="border-y-2 border-sky-100 bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-emerald-400">
            My Expertise
          </p>

          <h2 className="mt-2 text-2xl font-bold text-sky-900">
            What I Do
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          
          {/* Card 1 */}
          <article className="rounded-3xl border-2 border-sky-100 bg-sky-50/30 p-4 transition-all hover:shadow-xl hover:shadow-sky-200/50">
            <div className="overflow-hidden aspect-4/3 rounded-[1.25rem] border-2 border-sky-100">
              <img 
                src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/6ed27f195190601.660995cd26c0b.png" 
                alt="UI/UX Design" 
                className="h-full w-full object-cover" 
              />
            </div>

            <h3 className="mt-4 text-lg font-bold text-sky-900">
              Mobile & Web Frontend
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Focusing mostly on front-end development for mobile and web applications to create beautiful, responsive user interfaces.
            </p>

            <Button to="/articles" className="mt-4" variant="primary">
              See Projects
            </Button>
          </article>

          {/* Card 2 */}
          <article className="rounded-3xl border-2 border-sky-100 bg-sky-50/30 p-4 transition-all hover:shadow-xl hover:shadow-sky-200/50">
            <div className="overflow-hidden aspect-4/3 rounded-[1.25rem] border-2 border-sky-100">
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Web Development" 
                className="h-full w-full object-cover" 
              />
            </div>

            <h3 className="mt-4 text-lg font-bold text-sky-900">
              Backend & Databases
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Starting my backend and database journey! I am currently learning how to manage data and build robust APIs.
            </p>

            <Button to="/articles" className="mt-4" variant="primary">
              See Projects
            </Button>
          </article>

          {/* Card 3 */}
          <article className="rounded-3xl border-2 border-sky-100 bg-sky-50/30 p-4 transition-all hover:shadow-xl hover:shadow-sky-200/50">
            <div className="overflow-hidden aspect-4/3 rounded-[1.25rem] border-2 border-sky-100">
              <img 
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Game Development" 
                className="h-full w-full object-cover" 
              />
            </div>

            <h3 className="mt-4 text-lg font-bold text-sky-900">
              Game Development
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Beyond web and mobile apps, I also love making games! I enjoy exploring game mechanics and bringing fun ideas to life.
            </p>

            <Button to="/articles" className="mt-4" variant="primary">
              See Projects
            </Button>
          </article>

        </div>
      </section>

    </div>
  );
};

export default HomePage;