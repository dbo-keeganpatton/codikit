import { NextRequest, NextResponse } from 'next/server';
import sql from '../../../db.ts';

export async function POST(req: NextRequest) {
  
    try {
    
        const { name, password, confirmPassword } = await req.json();

    
        if (!name || !password || password !== confirmPassword) {
      
            return NextResponse.json({ message: 'Invalid input' }, { status: 400 });
    
        }

    
        await sql`
            INSERT INTO codikit.backend.user (name, password, user_uuid)
            VALUES (${name}, ${password}, gen_random_uuid())
            ON CONFLICT (name) DO NOTHING;
        `;

    
        return NextResponse.json({ message: 'User created successfully' });
  
    } catch (error) {
    
        console.error(error);
    
        return NextResponse.json({ message: 'Error creating user' }, { status: 500 });
  
    }
}

