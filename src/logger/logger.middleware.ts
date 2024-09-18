import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Response } from 'express';
import * as jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: Response, next: () => void) {
    const token = req.headers?.authorization?.split('Bearer ').join('');
    if (token) {
      jwt.verify(
        token,
        process.env.AUTH_SECRET,
        async (error, { username }) => {
          if (error)
            throw new HttpException(
              {
                message: 'FORBIDDEN',
                error,
              },
              HttpStatus.FORBIDDEN,
            );
          const user = await prisma.admins.findUnique({
            where: {
              username,
            },
          });

          if (!user) {
            res.status(403).send({
              message: 'FORBIDDEN',
            });
          } else {
            next();
          }
        },
      );
    } else {
      res.status(403).send({
        message: 'FORBIDDEN',
      });
    }
  }
}
