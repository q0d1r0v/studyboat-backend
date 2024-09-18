import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class RegionsService {
  async findAll() {
    return await prisma.regions.findMany();
  }

  async createRegion(body) {
    const { name } = body;
    return await prisma.regions.create({
      data: {
        name,
      },
    });
  }

  async deleteRegion({ id }) {
    const region = await prisma.regions.findUnique({
      where: { id: ~~id },
    });
    if (!region) {
      throw new NotFoundException(`Region with ID ${id} not found`);
    }

    await prisma.regions.delete({
      where: { id: ~~id },
    });

    return {
      status: 'success',
      message: `Region with ID ${id} has been deleted`,
    };
  }
}
