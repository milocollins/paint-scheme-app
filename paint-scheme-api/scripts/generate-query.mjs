import fs from 'fs';
import path from 'path';

// Usage: npm run generate:command <command-name>
// Example: npm run --prefix generate:command create-user
// This will create a new directory with the command and handler files.
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

const queryFile = path.join(dir, `${name}.query.ts`);
const handlerFile = path.join(dir, `${name}.handler.ts`);

const queryContent = `import { Query } from '@nestjs/cqrs';

export interface I${Name}Query {
  placeholder?: string;
}

export interface I${Name}Dto {
  placeholder: string;
}

export class ${Name}Query
  extends Query<I${Name}Dto>
  implements I${Name}Query
{
  constructor(public readonly placeholder: string) {
    super();
  }
}
`;

const handlerContent = `import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { ApiProxyService } from 'src/shared/services/api-proxy/api-proxy.service';
import { ${Name}Query, I${Name}Dto } from './${name}.query';

/**
 * Handles the ${Name}Query and returns an I${Name}Dto
 */
@QueryHandler(${Name}Query)
export class ${Name}Handler implements IQueryHandler<${Name}Query> {
  /**
   * Handler constructor.
   * @param apiProxyService API Proxy service handles forwarding requests to external APIs
   */
  public constructor(private apiProxyService: ApiProxyService) {}

  execute(query: ${Name}Query): Promise<I${Name}Dto> {
    console.log(\`\${query}\`);
    throw new Error('Method not implemented.');
  }
}
`;

fs.writeFileSync(queryFile, queryContent);
fs.writeFileSync(handlerFile, handlerContent);

console.log(`Created ${queryFile} and ${handlerFile}`);
