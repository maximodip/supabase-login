// src/pages/Login.tsx
import { useState } from 'react'
import { handleOAuth, supabase } from '../lib/supabaseClient'
import { useNavigate } from 'react-router'
import Google from '../assets/Google'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) setError(error.message)
    else navigate('/dashboard')
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleLogin} className="max-w-md w-full mx-auto pb-12 space-y-4">
        <h2 className="text-xl font-bold">Iniciar Sesión</h2>
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
        {error && (
          <div className="flex justify-between w-full">
            <p className="text-red-500">{error} </p>
            <a href="" className="text-blue-500 hover:underline">
              Forgot password?
            </a>
          </div>
        )}
        <button className="cursor-pointer w-full px-4 py-2 border border-gray-300 rounded-2xl bg-green-600 text-white hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
          Entrar
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
          <p>No tienes una cuenta?</p>
          <a href="/register" className="text-blue-500">
            Regístrate
          </a>
        </div>
      </form>
    </div>
  )
}
