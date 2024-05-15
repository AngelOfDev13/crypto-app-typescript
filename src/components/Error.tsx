import { ReactNode } from 'react'
import '../index.css'

type ErrorProps = {
    children: ReactNode
}

const Error = ({ children }: ErrorProps) => {
    return (
        <p className="error-message">{ children }</p>
    )
}

export default Error