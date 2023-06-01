// import fetch from "isomorphic-unfetch";
type config = {
    appName: string;
    apiKey: string;
    baseUrl?: string;
}

export abstract class Base {
    private apiKey : string;
    private baseUrl : string;

    constructor(config: config) {
        this.apiKey = config.apiKey;
        this.baseUrl = config.baseUrl || 'http://localhost:8085';
    }

    //getways
    protected request<T>(endPoint: string, options?: RequestInit): Promise<T> {
        const url = `${this.baseUrl}/${endPoint}`;

        const headers = {
            'Content-Type': 'application/json',
            'X-Api-Key': this.apiKey,
        }

        const config = {
            ...options,
            headers
        }

        return fetch(url, config).then((response) => {
            if (response.ok) {
              return response.json();
            }
            throw new Error(response.statusText);
          });
    }
}