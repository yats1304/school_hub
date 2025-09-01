import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { School } from './school.entity';

@Injectable()
export class SchoolsService {
  constructor(
    @InjectRepository(School)
    private schoolRepo: Repository<School>,
  ) {}

  findAll() {
    return this.schoolRepo.find();
  }

  create(data: Partial<School>) {
    const school = this.schoolRepo.create(data);
    return this.schoolRepo.save(school);
  }
}
