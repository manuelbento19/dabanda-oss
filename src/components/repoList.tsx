"use client"
import { Repo } from '@/types';
import { Card } from './card';
import { useEffect, useState } from 'react';

const RepoList = () =>{
  const [repos,setRepos] = useState<Array<Repo>>([]) 
  
  useEffect(()=> {
    console.log(process.env.NEXT_PUBLIC_API_URL)
    fetch(`${process.env.NEXT_PUBLIC_API_URL}`)
    .then((request)=>request.json())
    .then((result)=>setRepos(result))
    .catch(err=>console.log(err))
  },[])

  return (
    <section className="p-4 mt-4 h-[85vh] overflow-auto grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {repos?.map((item,index)=> <Card key={index} repo={item}/>)}
    </section>
  )
}

export default RepoList;