import type { Route } from "./+types/home";
import { useEffect } from "react";
import { usePuterStore } from "~/lib/puter";
import { useNavigate } from "react-router";
import ResumeCard from "components/ResumeCard";
import Navbar from "components/Navbar";
import { resumes } from "constants/index";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "LukeATS" },
    { name: "description", content: "Smart Feedback for your dream job" },
  ];
}

export default function Home() {
    const {isLoading,auth}= usePuterStore();
  const navigate =useNavigate();

 useEffect(() => {
  if (!isLoading && !auth.isAuthenticated) {
    navigate('/auth?next=/');
  }
}, [isLoading, auth.isAuthenticated, navigate]);

 
  return <main className="bg-[url('/images/bg-main.svg')]">
    <Navbar></Navbar>

<section className="main-section">
<div className="page-heading py-16">
  <h1>Track Your Applications & Resume Ratings</h1>
  <h2>Review  your submissions and check AI-powered feedback.</h2>
</div>

  {resumes.length > 0 && ( 
    <div className="resumes-section">
      {resumes.map((resume: Resume) => (
        <ResumeCard key={resume.id} resume={resume} />
      ))}

    </div>
  )}
  </section>

  </main>
}
