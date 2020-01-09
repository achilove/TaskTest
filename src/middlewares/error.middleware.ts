
import { NextFunction as ExpressNext, Request as ExpressRequest, Response as ExpressResponse } from "express";
import {IMiddlewareError, MiddlewareError, Request, Response, Next, Err} from "@tsed/common";
import {Exception} from "ts-httpexceptions";
import {$log} from "ts-log-debug";

@MiddlewareError()
export default class errorMiddleware {

    use(
        @Err() error: any,
        @Request() request: ExpressRequest,
        @Response() response: ExpressResponse,
        @Next() next: ExpressNext
    ): any {

        if (response.headersSent) {
            return next(error);
        }

        const errrResponse = (message = "", status) => ({data: null, message, statusCode: status});

        if (error instanceof Exception) {
            $log.error("" + error);
            response.send(errrResponse(error.message, error.status))
            return next();
        }

        if (typeof error === "string") {
            response.send(errrResponse(error, 404));
            return next();
        }

        $log.error("" + error);
        response.send(errrResponse("Internal Error", error.status || 500));

        return next();
    }
}