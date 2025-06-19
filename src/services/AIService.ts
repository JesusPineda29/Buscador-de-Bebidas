import {streamText} from 'ai'
import { openrouter } from '../lib/ai'


export default {
    async generateRecipe(prompt: string) {

        const result = streamText({
            model: openrouter('deepseek/deepseek-r1-0528-qwen3-8b:free'),
            prompt,

            // controlar el comportaminto de la ia
            system: 'Eres un generador de recetas de bebidas. Responde solo con el nombre original de una bebida y su receta: ingredientes y pasos. Adáptate si el usuario menciona ingredientes, sabores o tipos de bebida. No expliques ni saludes. Solo da la receta, clara y directa.', // le da un contexto a la ia

        })

        return result.textStream
    }
}
