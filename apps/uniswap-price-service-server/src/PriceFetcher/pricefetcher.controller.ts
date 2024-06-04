import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { PriceFetcherService } from "./pricefetcher.service";

@swagger.ApiTags("priceFetchers")
@common.Controller("priceFetchers")
export class PriceFetcherController {
  constructor(protected readonly service: PriceFetcherService) {}

  @common.Get("/price")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetEthUsdtPrice(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.GetEthUsdtPrice(body);
      }
}
