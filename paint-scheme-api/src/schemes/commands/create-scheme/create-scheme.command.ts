import { Command } from '@nestjs/cqrs';

export interface ICreateSchemeCommand {
  placeholder?: string;
}

export interface ICreateSchemeDto {
  placeholder: string;
}

export class CreateSchemeCommand
  extends Command<ICreateSchemeDto>
  implements ICreateSchemeCommand
{
  constructor(public readonly placeholder: string) {
    super();
  }
}
