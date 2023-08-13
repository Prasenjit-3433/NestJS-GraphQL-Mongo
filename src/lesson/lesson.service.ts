import { Injectable } from '@nestjs/common';
import { LessonRepository } from './lesson.repository';
import { v4 as uuid } from 'uuid';
import { Lesson } from './lesson.entity';

@Injectable()
export class LessonService {
  constructor(private lessonRepository: LessonRepository) {}

  async createLesson(name, startDate, endDate): Promise<Lesson> {
    const lesson = this.lessonRepository.create({
      id: uuid(),
      name,
      startDate,
      endDate,
    });

    return this.lessonRepository.save(lesson);
  }
}
