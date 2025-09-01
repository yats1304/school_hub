import {
  Controller,
  Get,
  Post,
  Body,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { SchoolsService } from './schools.service';
import { School } from './school.entity';
import { extname } from 'path';

@Controller('schools')
export class SchoolsController {
  constructor(private readonly schoolsService: SchoolsService) {}

  @Get()
  getAll(): Promise<School[]> {
    return this.schoolsService.findAll();
  }

  @Post()
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './uploads', // Folder to save uploaded files
        filename: (req, file, cb) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          cb(null, `${uniqueSuffix}${ext}`);
        },
      }),
    }),
  )
  async addSchool(
    @UploadedFile() file: Express.Multer.File,
    @Body() body: Partial<School>,
  ) {
    // Add the uploaded file's filename or path to the school data
    if (file) {
      body.image_url = file.filename;
    }
    return this.schoolsService.create(body);
  }
}
