import { Module } from '@nestjs/common';
import { PaintsController } from './controller/paints.controller';
import { SharedModule } from 'src/shared/shared.module';
import { AllPaintsHandler } from './queries/all-paints/all-paints.handler';

@Module({
  controllers: [PaintsController],
  imports: [SharedModule],
  providers: [AllPaintsHandler],
})
export class PaintsModule {}
