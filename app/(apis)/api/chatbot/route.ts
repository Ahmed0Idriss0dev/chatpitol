import { NextRequest } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { CreateBot } from "@/client/curd";
export async function POST(req:NextRequest){
    const {userId} = await auth()
    if(!userId) return Response.json({error:'user_unauthorized'}).status
    const {data} = await req.json();   
    const CustomData={
        ...data ,
        userId
    }
    await CreateBot(CustomData)
    return Response.json(data)
}