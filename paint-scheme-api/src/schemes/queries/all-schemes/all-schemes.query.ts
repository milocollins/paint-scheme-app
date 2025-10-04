import { Query } from '@nestjs/cqrs';

export interface IAllSchemesQuery {
  placeholder?: string;
}

export interface IAllSchemesDto {
  placeholder: string;
}

export class AllSchemesQuery
  extends Query<IAllSchemesDto>
  implements IAllSchemesQuery
{
  constructor(public readonly placeholder: string) {
    super();
  }
}
