import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ToPagination } from 'to-pagination';

const prisma = new PrismaClient();

@Injectable()
export class CourseService {
  async findAll(query) {
    const { school_id, page_number } = query;

    const much_courses = await prisma.courses.findMany({
      where: {
        school_id: ~~school_id,
      },
    });

    const courses = ToPagination(page_number, 6, much_courses);

    return courses;
  }

  async createCourse(body) {
    const { name, price, description, school_id } = body;
    return await prisma.courses.create({
      data: {
        name,
        price: ~~price,
        description,
        school_id: ~~school_id,
      },
    });
  }

  async updateCourse(query) {
    const { course_id, name, price, description } = query;
    return await prisma.courses.update({
      where: {
        id: ~~course_id,
      },
      data: {
        name,
        price: ~~price,
        description,
      },
    });
  }

  async deleteCourse({ id }) {
    const city = await prisma.courses.findUnique({
      where: { id: ~~id },
    });
    if (!city) {
      throw new NotFoundException(`Course with ID ${id} not found`);
    }

    await prisma.courses.delete({
      where: { id: ~~id },
    });

    return {
      status: 'success',
      message: `Course with ID ${id} has been deleted`,
    };
  }
}
