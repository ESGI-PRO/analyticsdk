type config = {
    appName: string;
    apiKey: string;
    baseUrl?: string;
};
export declare abstract class Base {
    private apiKey;
    private baseUrl;
    constructor(config: config);
    protected request<T>(endPoint: string, options?: RequestInit): Promise<T>;
}
export {};
