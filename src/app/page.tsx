import { Suspense, lazy } from "react";
import { Header } from "@/components/header";
const RepoList = lazy(()=>import("@/components/repoList"))

export default async function Home() {

  return (
    <main className="min-h-screen py-0 bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl flex flex-col items-center">
        <Header/>
        <Suspense fallback={<p>Loading...</p>}>
          <RepoList/>
        </Suspense>
      </div>
    </main>
  );
}
