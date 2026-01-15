
import { NextResponse } from "next/server";
export async function GET(req: Request,{params}: {params: {sessionId: string}}) {

    try{
        const session = (globalThis as any).sessions?.get(params.sessionId);
        if(!session){
            return NextResponse.json({error: "Session not found"}, {status: 404});
        }
        return NextResponse.json({email: session.email});

    }catch(error){


        throw new Error("Failed to process sessions GET request");
    }


}