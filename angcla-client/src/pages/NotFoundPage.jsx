import React from 'react';
import Button from '../components/Button';
import frierenPic from '../assets/frieren.jpg';

const NotFoundPage = () => {
    return (
        <div className="flex w-full flex-col items-center justify-center gap-4 px-4 py-20 sm:px-6 lg:px-8 text-center min-h-[60vh]">
            <div className="mb-4 overflow-hidden rounded-[2rem] border-4 border-white shadow-xl shadow-sky-200 transition-transform duration-500 hover:scale-105">
                <img src={frierenPic} alt="Frieren looking lost" className="h-48 w-48 object-cover sm:h-64 sm:w-64" />
            </div>
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-emerald-400">
                Lost on a journey
            </p>
            <h1 className="max-w-xl text-3xl font-black leading-tight text-sky-900 sm:text-5xl">
                Page Not Found
            </h1>
            <p className="mt-2 max-w-lg text-sm leading-7 text-slate-500 sm:text-base">
                The page you are looking for doesn't exist or has been moved. Let's get you back on track to exploring my portfolio.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
                <Button to="/" variant="primary">Back Home</Button>
                <Button to="/articles" variant="secondary">View Projects</Button>
            </div>
        </div>
    );
};

export default NotFoundPage;