import React, { useState }  from 'react'
import api from '../../services/api.js'

export default function Login({ history }) {
    const [email, setEmail, name, setName] = useState('')

    async function handleSubmit(event) {
      event.preventDefault()
      
      const response = await api.post('/sessions', {
        email: email
      })
  
      const { _id } = response.data
  
      localStorage.setItem('user', _id)

      history.push('/dashboard')
    }
    

    return (
        <>
            <p id='title'> 
            C o d e  <strong> d a y </strong>
            </p>

            <p>Conecte <strong>desenvolvedores</strong> com escolas <strong> e mude a vida dos alunos</strong> </p>

            <form onSubmit={handleSubmit}>
            {/* <label htmlFor="email">E-MAIL *</label> */}
            <input
                id="name"
                type="name"
                placeholder="Digite o nome"
                value={name}
                onChange={event => setName(event.target.value)}
            />

            <input
                id="email"
                type="email"
                placeholder="Digite o seu e-mail"
                value={email}
                onChange={event => setEmail(event.target.value)}
            />

            <button className="btn" type="submit">Entrar</button>
            </form>
        </>
    )
};