import { NextRequest, NextResponse } from "next/server";
import repos from './data.json';

export async function GET(_:NextRequest){
    console.log(repos)
    return NextResponse.json(repos)
}