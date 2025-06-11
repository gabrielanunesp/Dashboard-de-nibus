import { NavLink } from 'react-router-dom'
import { Home, BarChart, Settings } from 'lucide-react'

function Sidebar() {
  const linkClasses = ({ isActive }) =>
    `flex items-center gap-2 p-3 rounded-lg transition-colors ${
      isActive ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-blue-100'
    }`

  return (
    <aside className="w-64 bg-white shadow-md p-4 space-y-2">
      <NavLink to="/" className={linkClasses}>
        <Home size={20} /> Início
      </NavLink>
      <NavLink to="/graficos" className={linkClasses}>
        <BarChart size={20} /> Gráficos
      </NavLink>
      <NavLink to="/configuracoes" className={linkClasses}>
        <Settings size={20} /> Configurações
      </NavLink>
    </aside>
  )
}

export default Sidebar
