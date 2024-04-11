import { DiGithubBadge } from 'react-icons/di';
import { Badge } from './badge';
import { Repo } from '@/types';

type CardProps = {  
  repo: Repo
}

export const Card = ({repo}:CardProps) => {
  return (
    <article className="h-fit bg-gray-800 shadow-lg rounded p-4 flex flex-col justify-between transition duration-500 hover:-translate-y-1 border hover:border-blue-600">
      <div className="flex items-center gap-2 mb-2">
        <DiGithubBadge className="size-8"/>
        <a href={repo.url} target='_blank' className='hover:text-white/80'>
          <h2 className="text-xl font-medium">{repo.name}</h2>
        </a>
      </div>
      {repo.description && <p className="text-sm text-slate-400 leading-6">{repo.description}</p>}
      <div className="mt-2 text-xs leading-6 flex flex-row flex-wrap gap-2">
        {repo.techs.map((item,index)=> <Badge key={index} label={item}/>)}
      </div>
    </article>
  )
}
