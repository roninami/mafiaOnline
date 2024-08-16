import React from 'react'
import { Link, Form } from 'react-router-dom'
export default function AuthPage() {
  return (
    <div>
      <Link
      to="/game"
      >
        Войти
      </Link>
    </div>
  )
}
