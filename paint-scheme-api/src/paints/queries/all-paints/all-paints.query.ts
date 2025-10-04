import { Query } from '@nestjs/cqrs';

export interface IAllPaintsQuery {
  placeholder?: string;
}

export interface IAllPaintsDto {
  placeholder: string;
}

export class AllPaintsQuery
  extends Query<IAllPaintsDto>
  implements IAllPaintsQuery
{
  constructor(public readonly placeholder: string) {
    super();
  }
}
