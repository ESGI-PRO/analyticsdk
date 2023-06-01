import { Base } from "../base";
import { AnalyticsType, CreateAnalyticsType, CreateVisitorsNumberType } from "./type";
import { createAnalyticsPath, getAllAnalyticsPath, createAnalyticsVisitorsPath, getAllAnalyticsVisitorsPath, AnalyticsVisitors } from "./path";

const resource = "analyticsbyid";
export class Analytics extends Base {

    constructor(config: { appName: string; apiKey: string; baseUrl?: string; }) {
        super(config);
    }

    //partie analytics 
    createAnalytics(analytics: CreateAnalyticsType): Promise<AnalyticsType>{
        analytics.userAgent = navigator.userAgent;
        console.log("userAgent :", analytics.userAgent )
        console.log("request", this.request)
        return this.request(`${createAnalyticsPath}`, {
            method: 'POST',
            body: JSON.stringify(analytics)
        });
    }

    getAnalytics(): Promise<AnalyticsType[]>{
        return this.request(`${getAllAnalyticsPath}`);
    }

    getAnalyticsById(id: string): Promise<AnalyticsType>{
        return this.request(`${resource}/${id}`);
    }

    trackAnalyticsEvents(analytics: CreateAnalyticsType) {
        try {
            const event =  this.request(`${createAnalyticsPath}`, {
                method: 'POST',
                body: JSON.stringify(analytics)
            });
            return event;

        } catch (error) {
            console.error('Failed to track event:', analytics, error);
        }
    }


    //partie visitors
    CountVisitors(visitors: CreateVisitorsNumberType) {
        try {
            console.log("this.getVisitors()", this.verifVisitors())

            if (this.verifVisitors() === true ) {
                console.log("already counted")
            } else {
                visitors.userAgent = navigator.userAgent;
                const event =  this.request(`${AnalyticsVisitors}`, {
                    method: 'POST',
                    body: JSON.stringify(visitors)
                });
                sessionStorage.setItem('visited', 'true');
                return event;
            }
            } catch (error) {
            console.error('Failed to track event:', error);
        }
    }

    // verifications
    verifVisitors() {
        //get data from session storage
        const visitors = sessionStorage.getItem('visited');
        if (visitors) {
            return true
        }
        else {
            return false;
        }

    }
}