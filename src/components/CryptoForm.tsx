import { useState } from "react"
import { currencies } from "../data"
import { useCryptoStore } from "../store"
import { Pair } from "../types"
import { ChangeEvent, FormEvent } from "react"
import Error from "./Error"

const CryptoForm = () => {

    const { cryptoCurrencies, fetchData } = useCryptoStore()
    const [ pair, setPair ] = useState<Pair>({
        currency: '',
        cryptoCurrency: ''
    })

    const [ error, setError ] = useState('')

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setPair({
            ...pair,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(Object.values(pair).includes('')) {
            setError('epa compadre todos los campos son obligatorios')
            return
        }
        setError('')
        fetchData(pair)
    }

    return(
        <form className="form" onSubmit={ handleSubmit }>
            { error && <Error>{error}</Error>}
            <div className="field">
                <label htmlFor="currency">
                    Moneda:
                </label>
                <select name="currency" id="currency" className="select" onChange={ handleChange } value={pair.currency}>
                    <option hidden value="">Seleccione</option>
                    {currencies.map(currency => (
                        <option key={currency.code} value={currency.code}>{currency.name}</option>
                    ))}
                </select>
            </div>

            <div className="field">
                <label htmlFor="crypto-currency">
                    CryptoMoneda:
                </label>
                <select name="cryptoCurrency" id="cryptoCurrency" className="select" onChange={ handleChange } value={pair.cryptoCurrency}>
                    <option hidden value="">Seleccione</option>
                    {
                        cryptoCurrencies.map(cryptoCurrency => (
                            <option  key={cryptoCurrency.CoinInfo.Name} value={cryptoCurrency.CoinInfo.Name} >
                                { cryptoCurrency.CoinInfo.FullName}
                            </option>
                        ))
                    }
                </select>
            </div>

            <input type="submit" value='Cotizar'/>
        </form>
    )

}

export default CryptoForm