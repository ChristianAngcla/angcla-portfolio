import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../components/Button';
import { fetchArticles } from '../../services/articleService';
import staticArticles from '../../assets/article-content.js';

const ArticlePage = () => {
  const { name } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArticles()
      .then((res) => {
        // Look for the article in the database first, then fallback to static articles
        const dbArticle = res.data.articles.find(a => a.name === name);
        const fallbackArticle = staticArticles.find(a => a.name === name);
        
        setArticle(dbArticle || fallbackArticle);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [name]);

  if (loading) return null; // Avoid flickering layout while fetching

  if (!article) {
    return (
      <div className="flex w-full flex-col gap-6">
        <section className="border-y-2 border-sky-100 bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-3xl font-black text-sky-900">Article not found</h1>
            <div className="mt-6">
              <Button to="/articles" variant="primary">Back to Articles</Button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-sky-100 bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6">
            <Button to="/articles" variant="secondary">← Back to Articles</Button>
          </div>
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.28em] text-emerald-400">
            {article.label}
          </p>
          <h1 className="text-3xl font-black leading-tight text-sky-900 sm:text-4xl">
            {article.title}
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            {article.name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
          </p>
        </div>
      </section>

      <section className="border-y-2 border-sky-100 bg-sky-50/30 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 overflow-hidden flex aspect-video items-center justify-center rounded-[1.25rem] border-2 border-sky-100 bg-white shadow-xl shadow-sky-200/50">
            <img src={article.image} alt={article.title} className="h-full w-full object-cover" />
          </div>

          <div className="space-y-6 text-slate-700">
            {article.content.map((paragraph, index) => (
              <p key={index} className="text-base leading-7 whitespace-pre-wrap">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-10 border-t-2 border-sky-100 pt-6">
            <Button to="/articles" variant="primary">Back to Articles</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticlePage;