import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from './lib/typeorm';
import { ServiceModule } from './lib/service/main.module';
import { MainModule, MainModuleSwagger } from './module/main.module';

@Module({
  imports: [
    MainModule,
    ServiceModule,
    TypeOrmModule,
    ConfigModule.forRoot({
      isGlobal: true
    })
  ]
})


export class AppModule {}