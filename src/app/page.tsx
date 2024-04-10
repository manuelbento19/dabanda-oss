import { Badge } from "@/components/badge";
import { CgSearch } from "react-icons/cg";
import { DiGithubBadge } from "react-icons/di";
import { Repo } from "@/types";
import { Card } from "@/components/card";

const techs = ["Next.js","Typescript","React","Tailwind CSS","Vite"]

export default async function Home() {
  const request = await fetch("http://127.0.0.1:3000/api/repo");
  const data:Repo[] = await request.json();
  console.log(data);

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
          {data.map((item,index)=> <Card key={index} repo={item}/>)}
        </section>
      </div>
    </main>
  );
}
