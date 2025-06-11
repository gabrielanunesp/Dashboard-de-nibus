import {
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell,
} from 'recharts';
import { useEffect, useState } from 'react';

const cores = ['#4f46e5', '#ec4899', '#10b981', '#f59e0b', '#3b82f6', '#ef4444', '#8b5cf6', '#14b8a6'];

export default function DashboardChart() {
  const [data, setData] = useState([]);

  // função que busca no backend
  const carregarDados = async () => {
    try {
      const res = await fetch('http://localhost:3001/onibus');
      const json = await res.json();
      const formatado = json.map((o, i) => ({
        name: `${o.linha} - ${o.sentido}`,
        value: 1,
        colorIndex: i,
      }));
      setData(formatado);
    } catch (err) {
      console.error('Erro ao buscar dados:', err);
    }
  };

  // carrega ao montar e a cada 15 s
  useEffect(() => {
    carregarDados();
    const id = setInterval(carregarDados, 15000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-4">Ônibus por linha / sentido (atualiza a cada 15 s)</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey="value">
            {data.map((d, idx) => (
              <Cell key={idx} fill={cores[d.colorIndex % cores.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
