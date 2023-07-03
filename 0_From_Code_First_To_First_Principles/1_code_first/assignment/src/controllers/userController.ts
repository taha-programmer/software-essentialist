import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export async function createUser(req: Request, res: Response) {
  const { email, firstName, lastName, username } = req.body;
  try {
    const user = await prisma.user.create({
      data: {
        email,
        firstName,
        lastName,
        username,
      },
    });
    res.status(201).json(user);
  } catch {
    res.status(500).json({ error: 'Failed to create user.' });
  }
}
