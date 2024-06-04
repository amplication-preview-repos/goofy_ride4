import { Module } from "@nestjs/common";
import { PriceFetcherService } from "./pricefetcher.service";
import { PriceFetcherController } from "./pricefetcher.controller";
import { PriceFetcherResolver } from "./pricefetcher.resolver";

@Module({
  controllers: [PriceFetcherController],
  providers: [PriceFetcherService, PriceFetcherResolver],
  exports: [PriceFetcherService],
})
export class PriceFetcherModule {}
