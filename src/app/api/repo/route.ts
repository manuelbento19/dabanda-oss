import { NextRequest, NextResponse } from "next/server";
import repos from '@public/data.json';

export async function GET(request:NextRequest){
    const url = new URL(request.url)
    const search = url.searchParams.get("search")
    return NextResponse.json(search  ? repos.filter(item=>JSON.stringify(item).toLowerCase().match(search?.toLowerCase())): repos)
}