import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { ApiProxyService } from 'src/shared/services/api-proxy/api-proxy.service';
import { AllPaintsQuery, IAllPaintsDto } from './all-paints.query';

/**
 * Handles the AllPaintsQuery and returns an IAllPaintsDto
 */
@QueryHandler(AllPaintsQuery)
export class AllPaintsHandler implements IQueryHandler<AllPaintsQuery> {
  /**
   * Handler constructor.
   * @param apiProxyService API Proxy service handles forwarding requests to external APIs
   */
  public constructor(private apiProxyService: ApiProxyService) {}

  execute(query: AllPaintsQuery): Promise<IAllPaintsDto> {
    console.log(`${query}`);
    throw new Error('Method not implemented.');
  }
}
