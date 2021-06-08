import { Query, Resolver } from '@nestjs/graphql';

@Resolver('Item')
export class ItemResolver {
  @Query(() => String)
  async item(): Promise<string> {
    return 'hello chh';
  }
}
