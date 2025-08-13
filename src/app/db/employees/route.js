import { NextResponse } from "next/server";

const employees = [
    'Ninja',
    'Loro',
    'Nobinho', 
    'Kleiton',
    'Vinicius',
    'Maylon',
    'Gabriel',
    'Roni',
    'Caic',
    'Alex',
    'Higor',
    'Eric',
    'Thor',
    'Felipe',
    'Ivam',
    'Adrian',
    'Abel',
    'Perceu', 
    'Carioca',
    'Claudio',
    'Gilberto',
    'Chico',
    'Sandoval',
]

export async function GET() {
    return NextResponse.json({employees})
}