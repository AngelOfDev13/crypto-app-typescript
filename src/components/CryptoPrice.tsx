import { useMemo } from "react"
import { useCryptoStore } from "../store"
import '../index.css'
import Spinner from "./Spinner"

const CryptoPrice = () => {

    const { response, loading } = useCryptoStore()
    const hasResponse = useMemo(() => !Object.values(response).includes(''), [response])

    return (
        <div className="response-wrapper">

            { loading ? <Spinner /> :
                hasResponse && (
                    <>
                        <h2>
                            Cotización
                        </h2>
                        <div className="response">
                            <img src={`https://cryptocompare.com/${response.IMAGEURL}`} alt="imagen que muestra el logo de la crypto moneda seleccionada" />
                            <div>
                                <p>El Precio es de: <span>{response.PRICE}</span></p>
                                <p>El Precio mas alto del día: <span>{response.HIGHDAY}</span></p>
                                <p>El Precio mas bajo del día: <span>{response.LOWDAY}</span></p>
                                <p>Variación últimas 24H: <span>{response.CHANGEPCT24HOUR}</span></p>
                                <p>Última actualización: <span>{response.LASTUPDATE}</span></p>
                            </div>
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default CryptoPrice