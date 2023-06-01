export declare type AnalytiqueEvent = {
    eventName: string;
    eventAction: string;
    eventCategory: string;
    eventPage: string;
    date: string;
    events?: JSON;
};
export declare type AnalyticsType = {
    id: string;
    appName: string;
    apiKey: string;
    baseUrl: string;
    userAgent?: string;
    data: AnalytiqueEvent;
};
export declare type CreateAnalyticsType = {
    appName: string;
    apiKey: string;
    baseUrl: string;
    userAgent?: string;
    data: AnalytiqueEvent;
};
export declare type CountVisitorsType = {};
export declare type VisitorsNumberType = {
    id: string;
    appName: string;
    apiKey: string;
    baseUrl: string;
    userAgent?: string;
};
export declare type CreateVisitorsNumberType = {
    appName: string;
    apiKey: string;
    baseUrl: string;
    userAgent?: string;
};
export declare type UpdateVisitorsNumberType = {
    appName: string;
    apiKey: string;
    baseUrl: string;
    userAgent?: string;
};
