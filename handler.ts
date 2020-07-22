import { APIGatewayProxyHandler } from 'aws-lambda'
import * as moment from 'moment'
import { prune } from 'underscore.string'
import 'source-map-support/register'

export const hello: APIGatewayProxyHandler = async (event, _context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Go Serverless Webpack (Typescript) v1.0! Your function executed successfully! ${prune(
          moment().format(),
          12
        )}`,
        input: event,
      },
      null,
      2
    ),
  }
}
