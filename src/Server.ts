import {ServerLoader, ServerSettings} from "@tsed/common";
import "@tsed/ajv"; 
import errorMiddleware from "./middlewares/error.middleware";
import routeNotFoundMiddleware from "./middlewares/routeNorFound.middleware";
const bodyParser = require("body-parser");
const rootDir = __dirname;

@ServerSettings({
  rootDir,
  port: 3000,
  acceptMimes: ["application/json"],
  mount: {
    "/v1": `${rootDir}/controllers/**/**Ctrl.{ts,js}`
  },
  componentsScan: [
    `${rootDir}/middlewares/**/**.{ts,js}`
  ],
  ajv: {
    errorFormat: (error) => `At ${error.modelName}${error.dataPath}, value '${error.data}' ${error.message}`,
    options: {verbose: true}
 },
})
export class Server extends ServerLoader {
  $beforeRoutesInit(): void | Promise<any> {
    this
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({
      extended: true
    }))
     

    // return null;
  }

  $afterRoutesInit() {
    this.use(routeNotFoundMiddleware); 
    this.use(errorMiddleware); 
  }
}
