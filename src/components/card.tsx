import { Repo } from '@/types';
import React from 'react'
import { DiGithubBadge } from 'react-icons/di';
import { Badge } from './badge';

type CardProps = {  
  repo: Repo
}

export const Card = ({repo}:CardProps) => {
  return (
    <article className="bg-gray-800 shadow-lg rounded p-4 flex flex-col justify-between">
      <div className="flex items-center gap-2 mb-2">
        <DiGithubBadge className="size-8"/>
        <h2 className="text-xl font-medium">{repo.name}</h2>
      </div>
      {repo.description && <p className="text-sm text-slate-400 leading-6">{repo.description}</p>}
      <div className="mt-2 text-xs leading-6 flex flex-row flex-wrap gap-2">
        {repo.techs.map((item,index)=> <Badge key={index} label={item}/>)}
      </div>
    </article>
  )
}
