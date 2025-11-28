import { NextResponse } from 'next/server';
import OpenAI from 'openai';

export async function POST(request: Request) {
    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
        return NextResponse.json(
            { error: 'OpenAI API key not configured' },
            { status: 500 }
        );
    }

    const openai = new OpenAI({
        apiKey: apiKey,
    });

    try {
        const { workout, duration } = await request.json();

        if (!workout || !duration) {
            return NextResponse.json(
                { error: 'Workout and duration are required' },
                { status: 400 }
            );
        }

        const prompt = `
      Calculate the estimated calories burnt for the following workout:
      Workout: ${workout}
      Duration: ${duration} minutes.
      
      Return ONLY a JSON object with the following format, no markdown formatting:
      {
        "calories": number,
        "summary": "A brief, encouraging summary of the workout intensity and benefits (max 2 sentences)."
      }
    `;

        const completion = await openai.chat.completions.create({
            messages: [{ role: 'user', content: prompt }],
            model: 'gpt-3.5-turbo',
        });

        const content = completion.choices[0].message.content;

        if (!content) {
            throw new Error('No content received from OpenAI');
        }

        try {
            const result = JSON.parse(content);
            return NextResponse.json(result);
        } catch (parseError) {
            console.error('Error parsing OpenAI response:', parseError);
            return NextResponse.json(
                { error: 'Failed to parse calorie calculation' },
                { status: 500 }
            );
        }
    } catch (error) {
        console.error('Error calculating calories:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
