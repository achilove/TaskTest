import {EndpointInfo, IMiddleware, Middleware, Req, Res, ResponseData} from "@tsed/common";

@Middleware()
export class SucessResponseEndpointMiddleware implements IMiddleware {
  use(@Req() request: Req, @EndpointInfo() endpoint: EndpointInfo, @ResponseData() data: any, @Res() response: Res) {

        if(response.headersSent) {
            return;
        }
        response.send({
            data:data,
            statusCode:endpoint.statusCode,
            message: `Success: ${endpoint.name}`
        })
  }
}