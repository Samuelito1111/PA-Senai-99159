import './App.css'
import Mensagem from '.componets/Mensagem'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Bem-vindo ao meu projeto</h1>

      <Mensagem/>
    </>
  )
}

export default App
