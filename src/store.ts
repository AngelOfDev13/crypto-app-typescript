import { create } from "zustand"
import { CryptoResponseType, CryptoSchema, Pair } from "./types"
import { devtools } from "zustand/middleware"
import { getCryptos, fetchCrypto } from "./services/CryptoService"

type CryptoStore = {
    cryptoCurrencies: CryptoResponseType
    fetchCryptos: () => Promise<void>
    fetchData: (pair: Pair) => Promise<void>
    response: CryptoSchema
    loading: boolean
}

export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({

    cryptoCurrencies: [],
    response: {
        IMAGEURL: '',
        PRICE: '',
        HIGHDAY: '',
        LOWDAY: '',
        CHANGEPCT24HOUR: '',
        LASTUPDATE: ''
    },
    loading: false,
    fetchCryptos: async () => {
        const cryptoCurrencies = await getCryptos()
        set(() => ({
            cryptoCurrencies
        }))
    },
    
    fetchData: async (pair) => {
        
        set(() => ({
            loading: true
        }))
        
        const response = await fetchCrypto(pair)
       set(() => ({
        response, 
        loading: false
       }))
    }


})))