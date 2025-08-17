import { NextResponse } from "next/server";

const products = [
  {code: "004080", desc: "Lâmpada H7 24V Phillps", price: "65", quantity: 1},
  {code: "002064", desc: "Jogo Lona freio L-734", price: "460", quantity: 1},
  {code: "051084", desc: "Bucha Tirante Randon 2000", price: "48", quantity: 12},
  {code: "125002", desc: "Fusível 10A", price: "1", quantity: 10},
  {code: "131001", desc: "Graxa Marfak Kg", price: "58", quantity: 2},
];

export async function GET() {
    return NextResponse.json({products})
}