import { useEffect, useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts'

function Graficos() {
  const [dados, setDados] = useState([])

  const buscarDados = async () => {
    try {
      const resposta = await fetch('http://localhost:3001/onibus')
      if (!resposta.ok) throw new Error('Erro ao buscar /onibus')
      const data = await resposta.json()
      setDados(data)
    } catch (erro) {
      console.error('Erro ao buscar dados:', erro)
    }
  }

  useEffect(() => {
    buscarDados()
    const intervalo = setInterval(buscarDados, 10000)
    return () => clearInterval(intervalo)
  }, [])

  const formatarNome = (item) => `${item.linha} - ${item.sentido}`

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Gráfico de Localização</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={dados}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={formatarNome} />
          <YAxis />
          <Tooltip />
          <Bar dataKey="localizacao.lat" fill="#4f46e5" name="Latitude" />
          <Bar dataKey="localizacao.lng" fill="#10b981" name="Longitude" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Graficos
