import {Middleware, Req} from "@tsed/common";
import {Exception} from "ts-httpexceptions";

@Middleware()
export default class routeNotFoundMiddleware {
  use(@Req() req: Req) {
    if(!req.route){
      throw new Exception(404, "Route not found")
    }
  }
}