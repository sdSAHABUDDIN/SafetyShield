import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = React.useState({
    email: '',
    password: ''
  });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await login(form);
      if (res) {
        navigate('/dashboard');
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  }
  return (
    <div className="container mx-auto px-4 py-12 max-w-md">
      <h2 className="text-xl font-semibold mb-4">Login</h2>
      <form onSubmit={submit} className="space-y-3">
        <input value={form.email} onChange={e=>setForm({...form, email:e.target.value})} placeholder="Email" type="email" className="w-full p-3 border rounded" />
        <input value={form.password} onChange={e=>setForm({...form, password:e.target.value})} placeholder="Password" type="password" className="w-full p-3 border rounded" />
        <button className="w-full p-3 bg-primary text-white rounded">Login</button>
      </form>
    </div>
  )
}

export default Login