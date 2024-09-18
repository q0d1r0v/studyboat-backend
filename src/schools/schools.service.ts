import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class SchoolsService {
  async findAll(params) {
    const { city_id } = params;
    return await prisma.schools.findMany({
      where: {
        city_id: ~~city_id,
      },
    });
  }

  async createSchool(body) {
    const { name, city_id } = body;
    return await prisma.schools.create({
      data: {
        name,
        city_id: ~~city_id,
      },
    });
  }

  async deleteSchool({ id }) {
    const school = await prisma.schools.findUnique({
      where: { id: ~~id },
    });
    if (!school) {
      throw new NotFoundException(`City with ID ${id} not found`);
    }

    await prisma.schools.delete({
      where: { id: ~~id },
    });

    return {
      status: 'success',
      message: `School with ID ${id} has been deleted`,
    };
  }
}
