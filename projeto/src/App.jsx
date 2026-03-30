import { useState } from 'react'
import './App.css'
import Mensagem from './components/Mensagem'
import InfoCurso from './components/InfoCurso'
import InfoAluno from './components/infoAluno'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Bem-vindo ao meu projeto.</h1>
      <Mensagem />
      <InfoAluno/>
      <hr />
      <InfoCurso />
    </>
  )
}

export default App
