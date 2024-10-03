import { NextResponse } from "next/server";
import { transporter, mailOptions } from './transporter';
import NodeCache from "node-cache";

// Initialize NodeCache instance
const cache = new NodeCache();

// Rate limiting parameters
const RATE_LIMIT = 3; // Max number of requests
const RATE_LIMIT_WINDOW = 20000; // Time window in seconds (1 hour)

export async function POST(req) {
    try {
        // Get the client's IP address
        const forwarded = req.headers.get('x-forwarded-for');
        const ip = forwarded ? forwarded.split(',')[0] : req.headers.get('host');
        
        // Check if IP is in the cache
        let requestCount = cache.get(ip) || 0;

        // If request count exceeds the rate limit, return an error
        if (requestCount >= RATE_LIMIT) {
            return NextResponse.json({ msg: 'Email limit exceeded' }, { status: 429 });
        }

        console.log(ip);

        // Increment the request count for the IP
        requestCount += 1;
        cache.set(ip, requestCount, RATE_LIMIT_WINDOW);

        const data = await req.json();
        const { first_name, last_name, email, project_name} = data;

        const htmlContent = `
            <div style="font-family: Arial, sans-serif; padding: 20px;">
                <h2 style="color: #e91e63;">Project Access Required</h2>
                <p>You've received a new project access request from your website. Here are the details:</p>
                <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 10px; border: 1px solid #dddddd;"><strong>Name:</strong></td>
                        <td style="padding: 10px; border: 1px solid #dddddd;">${first_name} ${last_name}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border: 1px solid #dddddd;"><strong>Email:</strong></td>
                        <td style="padding: 10px; border: 1px solid #dddddd;">${email}</td>
                    </tr> 
                    <tr>
                        <td style="padding: 10px; border: 1px solid #dddddd;"><strong>Project</strong></td>
                        <td style="padding: 10px; border: 1px solid #dddddd;">${project_name}</td>
                    </tr>                    
                </table>
                <p style="margin-top: 20px;">Please follow up with the client to discuss the project further.</p>
            </div>
        `;

        await transporter.sendMail({
            ...mailOptions,
            subject: `New Project Inquiry - Synwave`,
            text: `You have received a new project inquiry from ${first_name} ${last_name}.`,
            html: htmlContent,
        }).catch((err) => {
            console.log(err);
        });

        return NextResponse.json({ msg: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ msg: 'Internal Server Error' }, { status: 500 });
    }
}
