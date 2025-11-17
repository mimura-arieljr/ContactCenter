import { handler } from '../../../../lambdas/generateAedtDateTime/handler';
import * as dateTimeUtil from '../../../../utils/getFormattedDateTime';

describe('generateAedtDateTime Lambda Handler', () => {
  it('returns SydneyDateTime with formatted date/time', async () => {
    const mockDateTime = 'Today is Monday and the time is 10:00 AM';
    jest.spyOn(dateTimeUtil, 'GetFormattedDateTime').mockResolvedValue(mockDateTime);

    const event = {}; // Simulate ConnectLambdaEvent
    const result = await handler(event);

    expect(result).toEqual({ SydneyDateTime: mockDateTime });
    expect(dateTimeUtil.GetFormattedDateTime).toHaveBeenCalledWith('Australia/Sydney');
  });
});
