import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class CitiesService {
  async findAll(params) {
    const { region_id } = params;
    return await prisma.cities.findMany({
      where: {
        region_id: ~~region_id,
      },
    });
  }

  async createCity(body) {
    const { name, region_id } = body;
    return await prisma.cities.create({
      data: {
        name,
        region_id: ~~region_id,
      },
    });
  }

  async deleteCity({ id }) {
    const city = await prisma.cities.findUnique({
      where: { id: ~~id },
    });
    if (!city) {
      throw new NotFoundException(`City with ID ${id} not found`);
    }

    await prisma.cities.delete({
      where: { id: ~~id },
    });

    return {
      status: 'success',
      message: `City with ID ${id} has been deleted`,
    };
  }
}
