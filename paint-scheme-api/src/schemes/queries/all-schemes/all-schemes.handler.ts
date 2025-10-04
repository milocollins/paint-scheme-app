import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { ApiProxyService } from 'src/shared/services/api-proxy/api-proxy.service';
import { AllSchemesQuery, IAllSchemesDto } from './all-schemes.query';

/**
 * Handles the AllSchemesQuery and returns an IAllSchemesDto
 */
@QueryHandler(AllSchemesQuery)
export class AllSchemesHandler implements IQueryHandler<AllSchemesQuery> {
  /**
   * Handler constructor.
   * @param apiProxyService API Proxy service handles forwarding requests to external APIs
   */
  public constructor(private apiProxyService: ApiProxyService) {}

  execute(query: AllSchemesQuery): Promise<IAllSchemesDto> {
    console.log(`${query}`);
    throw new Error('Method not implemented.');
  }
}
