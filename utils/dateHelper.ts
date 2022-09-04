export default function secondsToDatePST(seconds: number): string {
    const dateStringOptions = {
        hour: '2-digit',
        minute:'2-digit',
        timeZone: 'America/Los_Angeles'
    };
    return new Date(seconds* 1000).toLocaleTimeString('en-US', dateStringOptions as Intl.DateTimeFormatOptions);
}
