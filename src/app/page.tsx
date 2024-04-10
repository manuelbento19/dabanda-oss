import { Badge } from "@/components/badge";
import { CgSearch } from "react-icons/cg";
import { DiGithubBadge } from "react-icons/di";

const techs = ["Next.js","Typescript","React","Tailwind CSS","Vite"]

export default function Home() {
  return (
    <main className="min-h-screen py-10 bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl flex flex-col items-center">
        <header className="w-full flex justify-end">
          <div className="relative border border-white/10 rounded-md shadow-sm">
            <input type="text" placeholder="Pesquisar..." className="bg-transparent w-full outline-0 border-0 py-2.5 pe-8 pl-4"/>
            <button type="button" className="absolute inset-y-0 end-0 grid place-content-center w-10 text-gray-600 hover:text-gray-700">
              <CgSearch className="size-5 "/>
            </button>
          </div>
        </header>
        <section className="px-4 mt-4 h-[85vh] overflow-auto grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
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
      </div>
    </main>
  );
}
