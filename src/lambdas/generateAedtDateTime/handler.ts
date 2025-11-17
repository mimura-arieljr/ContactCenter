import { GetFormattedDateTime } from "../../utils/getFormattedDateTime";

interface ConnectLambdaEvent {
  [key: string]: any;
}
const AEDT = 'Australia/Sydney';

export const handler = async (event: ConnectLambdaEvent) => {

    const currentDateTime = await GetFormattedDateTime(AEDT);

    const responseBody = {
        "SydneyDateTime": currentDateTime
    };

    return responseBody;
};
