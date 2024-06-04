import * as graphql from "@nestjs/graphql";
import { PriceFetcherService } from "./pricefetcher.service";

export class PriceFetcherResolver {
  constructor(protected readonly service: PriceFetcherService) {}

  @graphql.Query(() => String)
  async GetEthUsdtPrice(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.GetEthUsdtPrice(args);
  }
}
