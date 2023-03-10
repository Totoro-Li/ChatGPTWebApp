import GPT3Tokenizer from 'gpt3-tokenizer';

const countTokens = (text: string): number => {

    const tokenizer = new GPT3Tokenizer({type: 'gpt3'}); // or 'codex'
    const encoded: { bpe: number[]; text: string[] } = tokenizer.encode(text);
    return tokenizer.encode(text).bpe.length;
}

export default countTokens;