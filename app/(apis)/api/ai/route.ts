import { NextRequest } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { CreateBot } from "@/client/curd";
import { generateText } from "ai"
import { google } from "@ai-sdk/google"
import { streamText } from 'ai';
export async function POST(req:NextRequest){
    const {prompt , system , messages} = await req.json();   
    const customPrompt = `${system} make the message short and no markdown`
    const { text } = await generateText({
      model: google("gemini-2.0-flash"),
      prompt: prompt ,
      system:customPrompt ,
    })
    return Response.json({text})
}