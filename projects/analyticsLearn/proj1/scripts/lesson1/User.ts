export interface User {
    eventId: string;
    userId: number;
    ipAddress: string;
    deviceType: string;
    eventTime: Date;
    action: string;
}