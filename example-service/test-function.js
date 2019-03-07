import * as dynamo from "../libs/dynamo-lib";
import { success, failure } from "../libs/response-lib";

export async function main(event, context, callback) {

    const data = JSON.parse(event.body)

    console.log(data.text)
}