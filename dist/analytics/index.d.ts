import { Base } from "../base";
import { AnalyticsType, CreateAnalyticsType, CreateVisitorsNumberType } from "./type";
export declare class Analytics extends Base {
    constructor(config: {
        appName: string;
        apiKey: string;
        baseUrl?: string;
    });
    createAnalytics(analytics: CreateAnalyticsType): Promise<AnalyticsType>;
    getAnalytics(): Promise<AnalyticsType[]>;
    getAnalyticsById(id: string): Promise<AnalyticsType>;
    trackAnalyticsEvents(analytics: CreateAnalyticsType): Promise<unknown> | undefined;
    CountVisitors(visitors: CreateVisitorsNumberType): Promise<unknown> | undefined;
    verifVisitors(): boolean;
}
