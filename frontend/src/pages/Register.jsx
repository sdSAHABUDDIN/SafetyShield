import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [form,setForm] = React.useState({
    name: '',
    email: '',
    password: ''
  });
  const {register}=useContext(AuthContext);
  const navigate= useNavigate();

  const submit=async(e)=> {
    e.preventDefault();
    try {
      const res = await register(form);
      if (res) {
        navigate('/login');
      }
    } catch (error) {
      console.error("Registration failed:", error);
    }
  }
  return (
    <div className="container mx-auto px-4 py-12 max-w-md">
      <h2 className="text-xl font-semibold mb-4">Create account</h2>
      <form onSubmit={submit} className="space-y-3">
        <input value={form.name} onChange={e=>setForm({...form, name:e.target.value})} placeholder="Full name" className="w-full p-3 border rounded" />
        <input value={form.email} onChange={e=>setForm({...form, email:e.target.value})} placeholder="Email" type="email" className="w-full p-3 border rounded" />
        <input value={form.password} onChange={e=>setForm({...form, password:e.target.value})} placeholder="Password" type="password" className="w-full p-3 border rounded" />
        <button className="w-full p-3 bg-primary text-white rounded">Register</button>
      </form>
    </div>
  )
}

export default Register