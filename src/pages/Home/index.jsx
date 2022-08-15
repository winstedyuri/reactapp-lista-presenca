import './styles.css'

import { Card } from '../../components/Card'

export function Home() {
  return (
    <div className='container' >
      <h1>Lista de Presença</h1>
      <input type="text" placeholder="Digite o nome..." />
      <button type="button">Adicionar</button>

      <Card name="Yuri" time="10:55:25" />
      <Card name="Anderson" time="11:00:01" />
      <Card name="Ana" time="12:13:44" />
    </div>
  )
}