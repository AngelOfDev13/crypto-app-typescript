import CryptoForm from './components/CryptoForm'
import { useCryptoStore } from './store'
import './index.css'
import { useEffect } from 'react'
import CryptoPrice from './components/CryptoPrice'

const App = () => {

  const { fetchCryptos } = useCryptoStore() 

  useEffect(() => {
    fetchCryptos()
  }, [])

  return(
    <div className="container">
        <h1 className='app-title'>
            Cotizador de <span>Criptomonedas</span>
        </h1>

        <div className="content">
            <CryptoForm />
            <CryptoPrice />
        </div>
    </div>
  )
}

export default App