import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// 植物一覧を取得
export async function GET() {
  const plants = await prisma.plant.findMany()
  return NextResponse.json(plants)
}
