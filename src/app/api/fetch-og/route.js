import axios from 'axios';
import cheerio from 'cheerio';
import { NextRequest, NextResponse } from 'next/server';


export async function POST(req) {
    const { url } = await req.json();

    if (!url) {
        return NextResponse.json({ error: 'URL is required' }, { status: 409 });
    }

    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);

        const ogImage = $('meta[property="og:image"]').attr('content');
        const ogTitle = $('meta[property="og:title"]').attr('content');
        const ogDescription = $('meta[property="og:description"]').attr('content');

        return NextResponse.json({ ogImage, ogTitle, ogDescription }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: 'Failed to fetch OG data' },
            { status: 500, statusText: 'Internal Server Error' }
        );
    }
}
