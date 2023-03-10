import {MessageInterface} from '@type/chat';
import {countTokens as countTokensLegacy} from './countTokens'
import countTokens from './tokenizer'


export const limitMessageTokens = (
    messages: MessageInterface[],
    limit: number = 4096
): MessageInterface[] => {
    const limitedMessages: MessageInterface[] = [];
    let tokenCountLegacy = 0;
    let tokenCount = 0;

    for (let i = messages.length - 1; i >= 0; i--) {
        const countLegacy = countTokensLegacy(messages[i].content);
        console.log(`Legacy token count result: ${countLegacy}`);
        const count = countTokens(messages[i].content);
        console.log(`New token count result: ${count}`);
        if (countLegacy + tokenCountLegacy > limit) break;
        tokenCountLegacy += countLegacy;
        tokenCount += count;
        limitedMessages.unshift({...messages[i]});
    }

    return limitedMessages;
};
