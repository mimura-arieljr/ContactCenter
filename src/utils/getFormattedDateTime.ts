export const GetFormattedDateTime = async (
    timeZone: string,
): Promise<string> => {

    // Options to format the date and time for natural TTS pronunciation
    const options: Intl.DateTimeFormatOptions = {
        timeZone,
        weekday: 'long', // Example: Monday
        year: 'numeric', // Example: 2025
        month: 'long',   // Example: October
        day: 'numeric',  // Example: 23
        hour: 'numeric', // Example: 1
        minute: 'numeric',// Example: 56
        hour12: true     // Example: PM
    };

    // 1. Get the current date and time object
    const now = new Date();

    // 2. Format the date and time string using the defined options
    // The resulting string will be locale-dependent, but for US English (en-US) 
    // it will be something like: "Monday, October 23, 2025 at 1:56 PM"
    const dateTimeString = new Intl.DateTimeFormat('en-US', options).format(now);

    // 3. Custom TTS formatting for a friendlier announcement
    // We replace the " at " with our preferred phrase structure
    const speechFormat = dateTimeString.replace(" at ", " and the time is ");

    const currentDateTime = `Today is ${speechFormat}`;

    return currentDateTime;
}