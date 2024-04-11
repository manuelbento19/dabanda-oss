"use client"
import { useAppContext } from "@/app/context"
import { CgSearch } from "react-icons/cg"

export const Header = () => {
    const {search,onSearchChange} = useAppContext();

    return (
        <header className="w-full flex justify-end py-4 px-2">
            <div className="relative border border-white/10 rounded-md shadow-sm">
                <input onChange={onSearchChange} value={search} type="text" placeholder="Pesquisar..." className="bg-transparent w-full outline-0 border-0 py-2.5 pe-8 pl-4"/>
                <div className="absolute inset-y-0 end-0 grid place-content-center w-10 text-gray-600 hover:text-gray-700">
                    <CgSearch className="size-5 "/>
                </div>
            </div>
        </header>
    )
}