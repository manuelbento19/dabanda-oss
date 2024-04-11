import { NextRequest, NextResponse } from "next/server";
import repos from './data.json';

export async function GET(_:NextRequest){
    return NextResponse.json(repos)
}