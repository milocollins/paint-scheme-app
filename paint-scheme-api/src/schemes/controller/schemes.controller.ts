import { Controller, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/shared/guards/auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('schemes')
export class SchemesController {}
