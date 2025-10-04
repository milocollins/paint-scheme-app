import { Module } from '@nestjs/common';
import { SharedModule } from 'src/shared/shared.module';
import { SchemesController } from './controller/schemes.controller';
import { AllSchemesHandler } from './queries/all-schemes/all-schemes.handler';
import { GetSchemeHandler } from './queries/get-scheme/get-scheme.handler';
import { CreateSchemeHandler } from './commands/create-scheme/create-scheme.handler';

@Module({
  controllers: [SchemesController],
  providers: [AllSchemesHandler, GetSchemeHandler, CreateSchemeHandler],
  imports: [SharedModule],
})
export class SchemesModule {}
