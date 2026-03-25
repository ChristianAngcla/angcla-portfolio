import Button from '../components/Button';

// Import your local project images here
import quickitaPic from '../assets/quickita.jpg';
import birdiePic from '../assets/birdie.jpg';
import intertwinePic from '../assets/intertwine.jpg';
import floodguardPic from '../assets/floodguard.jpg';

const ArticlePage = () => {
  const projects = [
    {
      id: 1,
      title: "QuicKita",
      label: "Web Platform",
      desc: "A local job-seeking platform inspired by LinkedIn and JobStreet. Designed to connect applicants with small businesses for jobs not requiring extensive qualifications.",
      image: quickitaPic
    },
    {
      id: 2,
      title: "How to Train Your Birdie",
      label: "Game Development",
      desc: "A three-round pixel shooting game. Play as a bird fending off land, water, and aerial predators to help your flock safely migrate.",
      image: birdiePic
    },
    {
      id: 3,
      title: "Intertwine",
      label: "Flutter & JavaScript",
      desc: "A social media networking application functioning similarly to Facebook, connecting users through seamless real-time interactions.",
      image: intertwinePic
    },
    {
      id: 4,
      title: "FloodGuard",
      label: "Current Development",
      desc: "An ongoing prototype system focused on flood monitoring and early warning alerts to keep local communities safe and prepared.",
      image: floodguardPic
    }
  ];

  return (
    <div className="flex w-full flex-col gap-6">
       <section className="border-y-2 border-sky-100 bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.28em] text-emerald-400">
          Portfolio Showcase
        </p>
        <h1 className="max-w-xl text-3xl font-black leading-tight text-sky-900 sm:text-4xl">
          Apps, tools, and things I've built.
        </h1>
        <p className="mt-4 max-w-lg text-sm leading-7 text-slate-500 sm:text-base">
          Browse through my recent projects below. Each project was built to solve a specific problem, showcasing my skills across the stack.
        </p>
        <div className="mt-6">
          <Button to="/" variant="primary">Back Home</Button>
        </div>
      </section>

      <section className="border-y-2 border-sky-100 bg-sky-50/30 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-violet-400">
            Featured Work
          </p>
          <h2 className="mt-2 text-2xl font-bold text-sky-900">My Projects</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {projects.map((project) => (
            <article key={project.id} className="flex flex-col rounded-3xl border-2 border-violet-100 bg-white p-4 transition-all hover:shadow-xl hover:shadow-violet-200/50">
              <div className="overflow-hidden aspect-4/3 rounded-[1.25rem] border-2 border-sky-50">
                <img src={project.image} alt={project.title} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
              <div className="flex flex-col flex-grow mt-4">
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-emerald-400">
                  {project.label}
                </p>
                <h3 className="mt-2 text-lg font-bold text-sky-900">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-500 flex-grow">
                  {project.desc}
                </p>
                <Button className="mt-4" variant="primary">View Source</Button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ArticlePage;