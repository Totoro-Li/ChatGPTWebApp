import {create, StoreApi} from 'zustand';
import {persist} from 'zustand/middleware';
import {ChatSlice, createChatSlice} from './chat-slice';
import {createInputSlice, InputSlice} from './input-slice';
import {AuthSlice, createAuthSlice} from './auth-slice';
import {createTemplateSlice, TemplateSlice} from "@store/template-slice";
import {ConfigSlice, createConfigSlice} from './config-slice';
import {LocalStorageInterface} from '@type/chat';
import {migrateV0} from './migrate';

export type StoreState = ChatSlice & InputSlice & AuthSlice & ConfigSlice & TemplateSlice;

export type StoreSlice<T> = (
    set: StoreApi<StoreState>['setState'],
    get: StoreApi<StoreState>['getState']
) => T;

const useStore = create<StoreState>()(
    persist(
        (set, get) => ({
            ...createChatSlice(set, get),
            ...createInputSlice(set, get),
            ...createAuthSlice(set, get),
            ...createConfigSlice(set, get),
            ...createTemplateSlice(set, get),
        }),
        {
            name: 'chatgpt-elysium',
            partialize: (state) => ({
                chats: state.chats,
                currentChatIndex: state.currentChatIndex,
                apiKey: state.apiKey,
                apiFree: state.apiFree,
                apiPublicEndpoint: state.apiPublicEndpoint,
                theme: state.theme,
                templates: state.templates,
            }),
            version: 1,
            migrate: (persistedState, version) => {
                switch (version) {
                    case 0:
                        migrateV0(persistedState as LocalStorageInterface);
                        break;
                }
                return persistedState as StoreState;
            },
        }
    )
);

export default useStore;
