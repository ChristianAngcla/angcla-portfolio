import Button from './Button';

const ArticleList = ({ articles }) => {
    return (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {articles.map((article) => (
                <article key={article.name} className="flex flex-col rounded-3xl border-2 border-violet-100 bg-white p-4 transition-all hover:shadow-xl hover:shadow-violet-200/50">
                    <div className="overflow-hidden aspect-4/3 rounded-[1.25rem] border-2 border-sky-50">
                        <img src={article.image} alt={article.title} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                    </div>
                    <div className="flex flex-col flex-grow mt-4">
                        <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-emerald-400">
                            {article.label}
                        </p>
                        <h3 className="mt-2 text-lg font-bold text-sky-900">{article.title}</h3>
                        <p className="mt-3 text-sm leading-6 text-slate-500 flex-grow">
                            {article.desc}
                        </p>
                        <Button to={`/articles/${article.name}`} className="mt-4" variant="primary">Read More</Button>
                    </div>
                </article>
            ))}

            {/* Dummy project to showcase the NotFoundPage (404) */}
            <article className="flex flex-col items-center justify-center rounded-3xl border-2 border-dashed border-sky-200 bg-sky-50/50 p-6 text-center transition-all hover:border-sky-400 hover:bg-sky-100">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-sky-400 mb-4 shadow-md shadow-sky-100 border-2 border-sky-100">
                    <span className="text-2xl font-black">?</span>
                </div>
                <h3 className="text-xl font-bold text-sky-900">Another Project</h3>
                <p className="mt-3 text-sm leading-6 text-slate-500 flex-grow">
                    Curious about my other secret projects? Click here to peek into the vault!
                </p>
                <Button to="/hidden-vault-404" className="mt-4" variant="secondary">Unlock Vault</Button>
            </article>
        </div>
    );
};

export default ArticleList;