import fs from 'fs';
import path from 'path';

// Usage: npm run generate:command <command-name>
// Example: npm run --prefix generate:command create-user
// The command name should be in kebab-case (e.g., create-user, update-order-status).

const name = process.argv[2];
if (!name || !/^([a-z]+(-[a-z]+)*)$/.test(name)) {
  process.exit(1);
}

const pascalCase = (str) =>
  str
    .split('-')
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join('');
const Name = pascalCase(name);

const dir = path.join(process.cwd(), name);
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

const commandFile = path.join(dir, `${name}.command.ts`);
const handlerFile = path.join(dir, `${name}.handler.ts`);

const commandContent = `import { Command } from '@nestjs/cqrs';

export interface I${Name}Command {
  placeholder?: string;
}

export interface I${Name}Dto {
  placeholder: string;
}

export class ${Name}Command
  extends Command<I${Name}Dto>
  implements I${Name}Command
{
  constructor(public readonly placeholder: string) {
    super();
  }
}
`;

const handlerContent = `import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { ApiProxyService } from 'src/shared/services/api-proxy/api-proxy.service';
import { ${Name}Command, I${Name}Dto } from './${name}.command';

/**
 * Handles the ${Name}Command and returns an I${Name}Dto
 */
@CommandHandler(${Name}Command)
export class ${Name}Handler implements ICommandHandler<${Name}Command> {
  /**
   * Handler constructor.
   * @param apiProxyService API Proxy service handles forwarding requests to external APIs
   */
  public constructor(private apiProxyService: ApiProxyService) {}

  execute(command: ${Name}Command): Promise<I${Name}Dto> {
    console.log(\`\${command}\`);
    throw new Error('Method not implemented.');
  }
}
`;

fs.writeFileSync(commandFile, commandContent);
fs.writeFileSync(handlerFile, handlerContent);

console.log(`Created ${commandFile} and ${handlerFile}`);