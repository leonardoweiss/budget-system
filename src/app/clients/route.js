import { NextResponse } from "next/server";

const clients = [
    {
        id: 1,
        name: "Buzin Transportes LTDA",
    },
    {
        id: 2,
        name: "Transporte e Logística Silva",
    },
    {
        id: 3,
        name: "Transportes Rápidos S/A",
    },
    {
        id: 4,
        name: "Logística Expressa LTDA",
    },
    {
        id: 5,
        name: "Transporte e Distribuição Alves",
    },
]

export async function GET() {
    return NextResponse.json({clients})
}