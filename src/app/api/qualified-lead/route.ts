import {NextResponse} from "next/server";

export async function POST(req: Request){

    try{

        const {formData} = await req.json();

        console.log("Received qualified lead data:", formData);
        //send to external storage as needed
        const zapierWebhookURL = process.env.ZAPIER_WEBHOOK_URL;
        if(!zapierWebhookURL){
            throw new Error("ZAPIER_WEBHOOK_URL environment variable missing");
        }

        const responseMessage = fetch(zapierWebhookURL, {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({formData})
        })

        if(!responseMessage){
            throw new Error("Failed to send data to Zapier");
        }


        return NextResponse.json({message: "Qualified lead data received successfully and sent to Zapier"}, {status: 200});
    }catch(error){


        console.error("Qualified Lead API Error: ", error);
        return NextResponse.json(
          { success: false, error: "Server error" },
          { status: 500 }
        );
    }



}