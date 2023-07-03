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

export async function editUser(req: Request, res: Response) {
  const { userId } = req.params;
  const { email, firstName, lastName, username } = req.body;
  const user = await prisma.user.update({
    where: { id: Number(userId) },
    data: {
      email,
      firstName,
      lastName,
      username,
    },
  });
  res.json(user);
}

export async function getUserByEmail(req: Request, res: Response) {
  try {
    const { email } = req.query;

    const user = await prisma.user.findUnique({
      where: { email: String(email) },
    });
    res.json(user);
  } catch {
    res.status(500).json({ error: 'Failed to fetch user.' });
  }
}
