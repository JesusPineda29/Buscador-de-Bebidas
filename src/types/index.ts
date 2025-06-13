import {z} from "zod"
import { CategoriesAPIResponseSchema } from "../utils-schemas/recipes-schema"

export type Categories = z.infer<typeof CategoriesAPIResponseSchema>