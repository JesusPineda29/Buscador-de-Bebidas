import {streamText} from 'ai'
import { openrouter } from '../lib/ai'


export default {
    async generateRecipe(prompt: string) {

        const result = streamText({
            model: openrouter('meta-llama/llama-3.2-1b-instruct:free'),
            prompt
        })

        return result.textStream
    }
}
