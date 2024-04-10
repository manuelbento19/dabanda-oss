import { Badge } from "@/components/badge";
import { DiGithubBadge } from "react-icons/di";

const techs = ["Next.js","Typescript","React","Tailwind CSS","Vite"]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-gray-900 text-white">
      <section className="max-w-screen-xl overflow-auto grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({length:10}).map((_,index)=>(
          <article key={index} className="bg-gray-800 shadow-lg rounded p-4 flex flex-col justify-between">
            <div className="flex items-center gap-2 mb-2">
              <DiGithubBadge className="size-8"/>
              <h2 className="text-xl font-medium">ollama-bot</h2>
            </div>
            <p className="text-sm text-slate-400 leading-6">OllamaBot: Um assistente virtual inteligente, baseado em contêiner, capaz de interagir naturalmente em uma variedade de contextos.</p>
            <div className="mt-2 text-xs leading-6 flex flex-row flex-wrap gap-2">
              {techs.map((item,index)=> <Badge key={index} label={item}/>)}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
