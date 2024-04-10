import { DiGithubBadge } from "react-icons/di";
import { GiBookmark } from "react-icons/gi";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-gray-900 text-white">
      <section className="max-w-screen-xl overflow-auto grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({length:10}).map((_,index)=>(
          <article key={index} className="bg-gray-800 shadow-lg rounded p-4 mb-4 flex">
            <DiGithubBadge className="mx-auto size-14 rounded"/>
            <div className="ml-4 flex flex-col justify-between">
              <div className="flex items-center gap-2 mb-2">
                <GiBookmark className="size-4"/>
                <h2 className="text-xl font-semibold">ollama-bot</h2>
              </div>
              <p className="text-sm">OllamaBot: Um assistente virtual inteligente, baseado em contêiner, capaz de interagir naturalmente em uma variedade de contextos.</p>
            </div>
          </article>
        ))}
      </section>
      
    </main>
  );
}
