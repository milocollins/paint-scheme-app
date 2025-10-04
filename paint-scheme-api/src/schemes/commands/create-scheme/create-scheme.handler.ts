import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateSchemeCommand, ICreateSchemeDto } from './create-scheme.command';

/**
 * Handles the CreateSchemeCommand and returns an ICreateSchemeDto
 */
@CommandHandler(CreateSchemeCommand)
export class CreateSchemeHandler
  implements ICommandHandler<CreateSchemeCommand>
{
  execute(command: CreateSchemeCommand): Promise<ICreateSchemeDto> {
    console.log(`${command}`);
    throw new Error('Method not implemented.');
  }
}
