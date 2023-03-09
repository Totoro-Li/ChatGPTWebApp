import {MessageInterface} from "@type/chat";
import {defaultSystemMessage} from "@constants/chat";

export interface TextTemplate {
    name: string;
    content: MessageInterface[];
}

/*
export interface MessageInterface {
  role: Role;
  content: string;
}
 */

export const DefaultTextTemplate: TextTemplate = {
    name: "Default",
    content: [
        {
            role: "system",
            content: defaultSystemMessage
        }
    ]
}

export const TextTemplateToString = (template: TextTemplate): string => {
    return JSON.stringify(template);
}
export const StringToTextTemplate = (template: string): TextTemplate => {
    return JSON.parse(template);
}