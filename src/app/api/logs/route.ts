import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// ログ一覧を取得
export async function GET() {
  const logs = await prisma.log.findMany()
  return NextResponse.json(logs)
}
