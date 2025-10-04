import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { ApiProxyService } from 'src/shared/services/api-proxy/api-proxy.service';
import { GetSchemeQuery, IGetSchemeDto } from './get-scheme.query';

/**
 * Handles the GetSchemeQuery and returns an IGetSchemeDto
 */
@QueryHandler(GetSchemeQuery)
export class GetSchemeHandler implements IQueryHandler<GetSchemeQuery> {
  /**
   * Handler constructor.
   * @param apiProxyService API Proxy service handles forwarding requests to external APIs
   */
  public constructor(private apiProxyService: ApiProxyService) {}

  execute(query: GetSchemeQuery): Promise<IGetSchemeDto> {
    console.log(`${query}`);
    throw new Error('Method not implemented.');
  }
}
