import { NextRequest, NextResponse } from 'next/server'
import { hash } from 'bcrypt'

import prisma from '@/lib/prisma'

export async function POST(request: NextRequest) {
  const { email, name, password, dateOfBirth } = await request.json()

  if (!email || !password) {
    return NextResponse.json(
      {
        error: 'Missing email or password',
      },
      { status: 400 }
    )
  }

  const isUserExist = await prisma.user.findUnique({
    where: { email },
  })

  if (isUserExist) {
    return NextResponse.json(
      {
        error: 'User already exists',
      },
      { status: 400 }
    )
  }

  try {
    const user = await prisma.user.create({
      data: {
        email,
        name,
        password: await hash(password, 10),
        dateOfBirth,
      },
    })

    if (!user) {
      return NextResponse.json(
        {
          error: 'There was an error creating the user',
        },
        { status: 500 }
      )
    }

    return NextResponse.json(
      {
        message: 'User created successfully',
        user,
      },
      { status: 201 }
    )
  } catch (error: unknown) {
    if (error instanceof Error)
      return NextResponse.json(
        {
          error: error.message || 'There was an error creating the user',
        },
        { status: 500 }
      )
  }
}
