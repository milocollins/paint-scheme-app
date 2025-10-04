import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PaintsModule } from './paints/paints.module';
import { SchemesModule } from './schemes/schemes.module';
import { SharedModule } from './shared/shared.module';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
  imports: [CqrsModule.forRoot(), SharedModule, PaintsModule, SchemesModule],
  controllers: [AppController],
})
export class AppModule {}
