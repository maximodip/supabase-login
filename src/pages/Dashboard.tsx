// src/pages/Dashboard.tsx
import { supabase } from '../lib/supabaseClient'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

export default function Dashboard() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) {
        setName(user.user_metadata.name!)
        setEmail(user.email!)
      } else navigate('/login')
    })
  }, [navigate])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    navigate('/login')
  }

  return (
    <div className="max-w-md mx-auto mt-10 space-y-4">
      <h2 className="text-xl">Bienvenido, {name}</h2>
      <p className="text-gray-500">{email}</p>
      <button onClick={handleLogout} className="cursor-pointer bg-red-500 text-white px-4 py-2">
        Cerrar sesión
      </button>
    </div>
  )
}
