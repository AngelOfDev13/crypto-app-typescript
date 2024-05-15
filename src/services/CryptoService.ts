import axios from "axios"
import { CryptoResponse, CryptoSchema } from "../schema/crypto-schema"
import { Pair } from "../types"

export async function getCryptos() {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
    const {data: { Data }} = await axios(url)
    const response = CryptoResponse.safeParse(Data)

    if(response.success) {
        return response.data
    }
    
}

export async function fetchCrypto(pair: Pair){
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.cryptoCurrency}&tsyms=${pair.currency}`

    const { data: { DISPLAY } } = await axios(url)
    const response = CryptoSchema.safeParse(DISPLAY[pair.cryptoCurrency][pair.currency])
    
    if(response.success) {
        
        return response.data
    }
}