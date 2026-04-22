import Button from '../../components/Button';
import ArticleList from '../../components/ArticleList';
import articles from '../../assets/article-content.js';

const ArticleListPage = () => {
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

                <ArticleList articles={articles} />
            </section>
        </div>
    );
}

export default ArticleListPage;