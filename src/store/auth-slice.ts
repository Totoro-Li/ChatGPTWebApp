import {StoreSlice} from './store';

export interface AuthSlice {
    apiKey?: string;
    apiFree: boolean;
    apiPublicEndpoint: string;
    setApiKey: (apiKey: string) => void;
    setApiFree: (apiFree: boolean) => void;
    setapiPublicEndpoint: (apiPublicEndpoint: string) => void;
}

export const createAuthSlice: StoreSlice<AuthSlice> = (set, get) => ({
    apiFree: true,
    apiPublicEndpoint: 'https://api.pkucs.top/chat/',
    setApiKey: (apiKey: string) => {
        set((prev: AuthSlice) => ({
            ...prev,
            apiKey: apiKey,
        }));
    },
    setApiFree: (apiFree: boolean) => {
        set((prev: AuthSlice) => ({
            ...prev,
            apiFree: apiFree,
        }));
    },
    setapiPublicEndpoint: (apiPublicEndpoint: string) => {
        set((prev: AuthSlice) => ({
            ...prev,
            apiPublicEndpoint: apiPublicEndpoint,
        }));
    },
});
