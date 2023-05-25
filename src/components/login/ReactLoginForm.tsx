/* eslint-disable qwik/no-react-props */
/** @jsxImportSource react */

import React, { useState } from 'react'

const LoginForm = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleEmailChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setPassword(e.target.value)
  }

  const handleFormSubmit: React.FormEventHandler = async (e) => {
    e.preventDefault()
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      const resp = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: 'kminchelle',
          password: '0lelplR',
        }),
      })
      const data = await resp.json()
      localStorage.setItem('token', data.token)
      window.location.href = '/dashboard'
    } else {
      alert('Zadali jste nesprávnou e-mailovou adresu!')
    }
  }

  return (
    <div className="w-full px-4">
      <div className="relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg border-0 bg-gray-800 px-10 shadow-lg">
        <form
          className="flex-auto px-4 py-10 text-start lg:px-10"
          onSubmit={handleFormSubmit}
        >
          <div className="mb-3 text-center">
            <h2 className="text-xl font-bold text-gray-500">
              Zadejte přihlašovací údaje
            </h2>
          </div>
          <div className="relative mb-3 w-full">
            <label
              className="mb-1 block text-xs font-bold capitalize text-gray-600"
              htmlFor="grid-password"
            >
              E-mail
            </label>
            <input
              type="email"
              className="w-full rounded border-0 bg-white p-3 text-sm text-gray-700 shadow placeholder:text-gray-400 focus:outline-none focus:ring"
              placeholder="E-mail"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="relative mb-3 w-full">
            <label
              className="mb-1 block text-xs font-bold capitalize text-gray-600"
              htmlFor="grid-password"
            >
              Heslo
            </label>
            <input
              type="password"
              className="w-full rounded border-0 bg-white p-3 text-sm text-gray-700 shadow placeholder:text-gray-400 focus:outline-none focus:ring"
              placeholder="Heslo"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="mt-6 text-center">
            <button
              className="mr-1 mb-1 w-full rounded bg-gray-900 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none hover:shadow-lg focus:outline-none active:bg-gray-700"
              type="submit"
            >
              Přihlásit se
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginForm
