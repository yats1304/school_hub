import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SchoolsModule } from './schools/schools.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root', // or your MySQL user
      password: 'yats', // root password you set
      database: 'school_hub',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // auto create tables, good for dev
    }),
    SchoolsModule,
  ],
})
export class AppModule {}
