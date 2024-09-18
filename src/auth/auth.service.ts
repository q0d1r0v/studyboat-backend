import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

@Injectable()
export class AuthService {
  async findAll() {
    return await prisma.admins.findMany();
  }
  async login(body) {
    const { username, password, auth_secret } = body;
    if (auth_secret === process.env.AUTH_SECRET) {
      const user = await prisma.admins.findUnique({
        where: {
          username,
        },
      });
      if (!user) {
        return new HttpException(
          'Username or password is incorrect!',
          HttpStatus.BAD_REQUEST,
        );
      } else {
        try {
          const is_true_password = await bcrypt.compare(
            password,
            user.password,
          );

          if (is_true_password) {
            const access_token = await jwt.sign(user, process.env.AUTH_SECRET, {
              expiresIn: '24h',
            });

            return new HttpException(
              {
                access_token,
              },
              HttpStatus.OK,
            );
          } else {
            throw new HttpException(
              {
                message: 'Username or password is incorrect!',
              },
              HttpStatus.BAD_REQUEST,
            );
          }
        } catch (err) {
          throw err;
        }
      }
    } else {
      return new HttpException('BAD_REQUEST', HttpStatus.BAD_REQUEST);
    }
  }
  async rgister(body) {
    const { auth_secret, full_name, username, password } = body;

    if (auth_secret === process.env.AUTH_SECRET) {
      const user = await prisma.admins.findUnique({
        where: {
          username,
        },
      });
      if (!user) {
        try {
          const hashed = await bcrypt.hash(password, 10);
          return await prisma.admins.create({
            data: {
              full_name,
              username,
              password: hashed,
            },
          });
        } catch (err) {
          throw err;
        }
      } else {
        return new HttpException('We have this admin!', HttpStatus.BAD_REQUEST);
      }
    } else {
      return new HttpException('BAD_REQUEST', HttpStatus.BAD_REQUEST);
    }
  }
}
