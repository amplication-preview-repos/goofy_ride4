import { Injectable } from "@nestjs/common";

@Injectable()
export class PriceFetcherService {
  constructor() {}
  async GetEthUsdtPrice(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
