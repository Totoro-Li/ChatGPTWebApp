import {StoreSlice} from './store';
import {TextTemplate, DefaultTextTemplate} from '@type/template';

export interface TemplateSlice {
    templates: TextTemplate[];
    selectedTemplate?: TextTemplate;
    addTemplate: (template: TextTemplate) => void;
    setSelectedTemplate: (template?: TextTemplate) => void;
}

export const createTemplateSlice: StoreSlice<TemplateSlice> = (set, get) => ({
    templates: [],
    selectedTemplate: undefined,
    addTemplate: (template: TextTemplate) => {
        set((prev: TemplateSlice) => ({
            ...prev,
            templates: [...prev.templates, template],
        }));
                                      }
    setSelectedTemplate: (template?: TextTemplate) => {
        set((prev: TemplateSlice) => ({
            ...prev,
            selectedTemplate: template,
        }));
    },
});