import { NextResponse } from "next/server";
import { transporter , mailOptions} from "../form/transporter";

export async function POST(req) {
    const {email} = await req.json();

    try{

        await transporter.sendMail({
            ...mailOptions,
            subject: `new Subscriber - Synwave`,
            text: `You have received a new subscriber`,
            html:`
            <h2>Subscriber</h2>
            <h3>${email}</h3>
            `,
        }).catch((err) => {
            console.log(err);
        });

        return  NextResponse.json({msg : "Subcribed"},{status : 200});
    }catch(error) {
        console.log(error);
        return  NextResponse.json({error : error});
    }
 }