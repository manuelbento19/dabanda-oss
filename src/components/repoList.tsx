"use client"
import { Repo } from '@/types';
import { Card } from './card';
import { useEffect, useState } from 'react';
import { useAppContext } from '@/app/context';

const RepoList = () =>{
  const {search} = useAppContext()
  
  const [repos,setRepos] = useState<Array<Repo>>([]);
  
  useEffect(()=> {
    const url = new URL(process.env.NEXT_PUBLIC_API_URL ?? "")
    if(search)
      url.searchParams.set("search",search);

    fetch(url)
    .then((request)=>request.json())
    .then((result)=>setRepos(result))
  },[search])

  return (
    <section className="p-4 mt-4 h-[85vh] overflow-auto grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {repos?.map((item,index)=> <Card key={index} repo={item}/>)}
    </section>
  )
}

export default RepoList;