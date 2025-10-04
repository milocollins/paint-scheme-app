import { Controller, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/shared/guards/auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('paints')
export class PaintsController {}
