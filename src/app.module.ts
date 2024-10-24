import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PropertyModule } from './property/property.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { pgCongfig } from 'dbconfig';
import { DataSource } from 'typeorm';

@Module({
  imports: [PropertyModule, TypeOrmModule.forRoot(pgCongfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
