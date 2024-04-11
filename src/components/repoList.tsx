import { Repo } from '@/types';
import { Card } from './card';

export default async function RepoList(){
  const request = await fetch("http://127.0.0.1:3000/api/repo",{cache: "no-cache"});
  const data:Repo[] = await request.json();

  return (
    <section className="p-4 mt-4 h-[85vh] overflow-auto grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {data?.map((item,index)=> <Card key={index} repo={item}/>)}
    </section>
  )
}
