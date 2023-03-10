import {StoreSlice} from './store';
import {TextTemplate} from '@type/template';

export interface TemplateSlice {
    templates: TextTemplate[];
    selectedTemplate?: TextTemplate;
    addTemplate: (template: TextTemplate) => void;
    deleteTemplate: (template: TextTemplate) => void;
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
    },
    deleteTemplate: (template: TextTemplate) => {
        set((prev: TemplateSlice) => ({
            ...prev,
            templates: prev.templates.filter((t) => t !== template),
            selectedTemplate:
                get().selectedTemplate === template ? undefined : get().selectedTemplate,
        }));
    },
    setSelectedTemplate: (template?: TextTemplate) => {
        set((prev: TemplateSlice) => ({
            ...prev,
            selectedTemplate: template,
        }));
    },
});