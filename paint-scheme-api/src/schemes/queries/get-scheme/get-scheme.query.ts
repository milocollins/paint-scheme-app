import { Query } from '@nestjs/cqrs';

export interface IGetSchemeQuery {
  placeholder?: string;
}

export interface IGetSchemeDto {
  placeholder: string;
}

export class GetSchemeQuery
  extends Query<IGetSchemeDto>
  implements IGetSchemeQuery
{
  constructor(public readonly placeholder: string) {
    super();
  }
}
