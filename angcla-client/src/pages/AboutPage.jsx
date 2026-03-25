import Button from '../components/Button';

import gamingPic from '../assets/gaming.jpg';
import bakingPic from '../assets/baking.jpg';
import hikingPic from '../assets/hiking.jpg';
import runningPic from '../assets/running.jpg';

const AboutPage = () => {
    return (
        <div className="flex w-full flex-col gap-6">
            <section className="border-y-2 border-sky-100 bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                    <div className="overflow-hidden rounded-3xl border-2 border-sky-100 shadow-xl shadow-sky-200/50">
                        <img 
                            src="https://scontent.fmnl4-1.fna.fbcdn.net/v/t39.30808-6/615509878_869495876057975_6033171580628204368_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=uF7S17R1zuQQ7kNvwE_DJ0i&_nc_oc=AdoFTF1D2GUs9IClMdjv56kcPRWoMAZXAkxWZXOSDUaJ6fENvfFEC3CustaHAkmvq4ntDPU2V4UqsBW5VFj_-Uw9&_nc_zt=23&_nc_ht=scontent.fmnl4-1.fna&_nc_gid=4iRxpitDknzKvlrHdR_4TQ&_nc_ss=7a32e&oh=00_Afyq0ipezy76u3CCUB9leqdC7oW1IJHdl9fbeZNmJufoXQ&oe=69C9853A" 
                            alt="Ethan - Developer" 
                            className="h-[400px] w-full object-cover"
                        />
                    </div>

                    <div>
                        <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.28em] text-emerald-400">About Me</p>
                        <h1 className="max-w-xl text-3xl font-black leading-tight text-sky-900 sm:text-4xl">
                            Hi, I’m Ethan.
                        </h1>
                        <p className="mt-4 max-w-lg text-sm leading-7 text-slate-500 sm:text-base">
                            I am an Information Technology student with a passion for creating practical and innovative digital solutions. I specialize in mobile and web development, and I enjoy turning complex problems into user-friendly applications. I thrive in projects where I can combine coding, design, and problem-solving to make an impact.
                        </p>
                        <p className="mt-4 max-w-lg text-sm leading-7 text-slate-500 sm:text-base">
                            Beyond coding, I’m always exploring new technologies, experimenting with ideas, and refining my skills to stay ahead in the ever-evolving tech landscape. I take pride in building projects that are not just functional but also intuitive and engaging for users.
                        </p>
                        <p className="mt-4 max-w-lg text-sm leading-7 text-slate-500 sm:text-base">
                            In my portfolio, you’ll find a mix of academic, personal, and collaborative projects that reflect my journey as a developer and my commitment to learning and growth. I’m excited to connect with opportunities where I can contribute, innovate, and continue honing my craft.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-3">
                            <Button to="/" variant='primary'>
                                View Home
                            </Button>
                            <Button to="/articles">View My Projects</Button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-y-2 border-sky-100 bg-sky-50/30 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                <div className="mb-6">
                    <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-violet-400">
                        My Stack
                    </p>
                    <h2 className="mt-2 text-2xl font-bold text-sky-900">
                        Technologies I love using</h2>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="rounded-3xl border-2 border-violet-100 bg-white p-5 shadow-sm shadow-violet-100">
                        <p className="text-2xl font-black text-violet-500">React</p>
                        <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.24em] text-sky-500">
                            Frontend
                        </p>
                    </div>

                    <div className="rounded-3xl border-2 border-violet-100 bg-white p-5 shadow-sm shadow-violet-100">
                        <p className="text-2xl font-black text-violet-500">Node.js</p>
                        <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.24em] text-sky-500">
                            Backend
                        </p>
                    </div>

                    <div className="rounded-3xl border-2 border-violet-100 bg-white p-5 shadow-sm shadow-violet-100">
                        <p className="text-2xl font-black text-violet-500">CSS</p>
                        <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.24em] text-sky-500">
                            Styling
                        </p>
                    </div>
        </div>
        </section>

        <section className="border-y-2 border-sky-100 bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-emerald-400">
                        Experience
                    </p>
                    <h2 className="mt-2 text-2xl font-bold text-sky-900">
                        My Professional Background
                    </h2>

                    <div className="mt-6 space-y-4">
                        <article className="rounded-3xl border-2 border-sky-100 bg-sky-50/30 p-5 shadow-sm shadow-sky-200/50">
                            <h3 className="text-lg font-bold text-sky-900">
                                Upskilling Student
                            </h3> 
                            <p className="mt-3 text-sm leading-6 text-slate-500">
                                Always eager to learn, I dedicate my time to studying independently and expanding my knowledge of modern web technologies.
                            </p>
                        </article>

                        <article className="rounded-3xl border-2 border-sky-100 bg-sky-50/30 p-5 shadow-sm shadow-sky-200/50">
                            <h3 className="text-lg font-bold text-sky-900">
                                Active Participant
                            </h3> 
                            <p className="mt-3 text-sm leading-6 text-slate-500">
                                I frequently participate in workshops and organizations both inside and outside of school to engage with the tech community.
                            </p>
                        </article>

                        <article className="rounded-3xl border-2 border-sky-100 bg-sky-50/30 p-5 shadow-sm shadow-sky-200/50">
                            <h3 className="text-lg font-bold text-sky-900">
                                Self-Taught Explorer
                            </h3> 
                            <p className="mt-3 text-sm leading-6 text-slate-500">
                                I am constantly experimenting with new tools and learning online to refine my skills and build better digital experiences.
                            </p>
                        </article>
                    </div>
                </div>

                <div className="rounded-3xl border-2 border-violet-100 bg-white p-5 shadow-sm shadow-violet-100">
                    <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-violet-400">
                        Life Outside Code
                    </p>
                    <div className="mt-5 grid gap-4 sm:grid-cols-2">
                        <div className="group relative overflow-hidden rounded-[1.25em] border-2 border-sky-100 bg-sky-50 aspect-square">
                            <img src={gamingPic} alt="Gaming" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <p className="text-sm font-bold text-white">Gaming (Valorant, LoL, Genshin)</p>
                            </div>
                        </div>

                        <div className="group relative overflow-hidden rounded-[1.25em] border-2 border-sky-100 bg-sky-50 aspect-square">
                            <img src={bakingPic} alt="Baking and Cooking" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <p className="text-sm font-bold text-white">Baking & Cooking</p>
                            </div>
                        </div>

                        <div className="group relative overflow-hidden rounded-[1.25em] border-2 border-sky-100 bg-sky-50 aspect-square">
                            <img src={hikingPic} alt="Hiking" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <p className="text-sm font-bold text-white">Exploring & Hiking</p>
                            </div>
                        </div>

                        <div className="group relative overflow-hidden rounded-[1.25em] border-2 border-sky-100 bg-sky-50 aspect-square">
                            <img src={runningPic} alt="Running" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <p className="text-sm font-bold text-white">Running to de-stress</p>
                            </div>
                        </div>
                    </div>
                    <Button className="mt-5" variant="primary"> Contact Me</Button>
                </div>
            </div>
        </section>
    </div>

    );
};
export default AboutPage;
