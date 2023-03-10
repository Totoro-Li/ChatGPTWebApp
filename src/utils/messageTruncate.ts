import {MessageInterface} from '@type/chat';
import countTokens from './tokenizer'


export const truncateMessages = (
    messages: MessageInterface[],
    limit: number = 4096
): MessageInterface[] => {
    // Message list filtered by token limit
    const limitedMessages: MessageInterface[] = [];
    let tokenCount = 0;

    for (let i = messages.length - 1; i >= 0; i--) {
        const count = countTokens(messages[i].content);
        if (count + tokenCount > limit) break;
        tokenCount += count;
        limitedMessages.unshift({...messages[i]});
    }

    return limitedMessages;
};
