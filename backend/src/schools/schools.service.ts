import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { School } from './school.entity';
import { CreateSchoolDto } from './create-school.dto';

@Injectable()
export class SchoolsService {
  constructor(
    @InjectRepository(School)
    private schoolRepository: Repository<School>,
  ) {}

  findAll() {
    return this.schoolRepository.find();
  }

  findOne(id: number) {
    return this.schoolRepository.findOne({ where: { id } });
  }

  create(schoolData: CreateSchoolDto) {
    return this.schoolRepository.save(schoolData);
  }

  // Add update, delete as needed
}
