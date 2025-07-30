import type { Route } from "./+types/home";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart Feedback for your dream job" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')]">
<section className="main-section">
<div className="page-heading">
  <h1>Track Your Applications & Resume Ratings</h1>\
  <h2>Review  your submissions and check AI-powered feedback.</h2>
</div>
</section>
  </main>
}
