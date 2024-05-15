import { CurrencySchema, CryptoResponse, PairSchema, CryptoSchema} from '../schema/crypto-schema'
import { z } from 'zod' 

export type Currency = z.infer<typeof CurrencySchema>
export type CryptoResponseType = z.infer<typeof CryptoResponse>
export type Pair = z.infer<typeof PairSchema>
export type CryptoSchema = z.infer<typeof CryptoSchema>