// src/pages/Register.tsx
import { useState } from 'react'
import { handleOAuth, supabase } from '../lib/supabaseClient'
import { useNavigate } from 'react-router'
import Google from '../assets/Google'

export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    const { error } = await supabase.auth.signUp({ email, password })

    if (error) setError(error.message)
    else {
      alert('Registro exitoso. Revisa tu correo.')
      navigate('/login')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleRegister} className="max-w-md w-full mx-auto pb-12 space-y-4">
        <h2 className="text-xl font-bold">Registro</h2>
        <input
          className="w-full px-4 py-2 border border-gray-300 rounded-2xl bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          className="w-full px-4 py-2 border border-gray-300 rounded-2xl bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
        />
        {error && <p className="text-red-500">{error}</p>}
        <button className="cursor-pointer w-full px-4 py-2 border border-gray-300 rounded-2xl bg-green-600 text-white hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
          Registrarse
        </button>
        <hr className="w-full border-gray-300" />
        <div className="hover:opacity-80">
          <button
            className="cursor-pointer px-4 py-2 border border-gray-300 rounded-2xl bg-white flex items-center gap-x-2 justify-center w-full hover:opacity-80"
            onClick={() => handleOAuth('google')}
          >
            <Google className="w-6 h-6" />
            Iniciar sesión con Google
          </button>
        </div>
        <div className="w-full flex items-center justify-between">
          <p>¿Tienes una cuenta?</p>
          <a href="/login" className="text-blue-500 hover:underline">
            Inicia sesión
          </a>
        </div>
      </form>
    </div>
  )
}
