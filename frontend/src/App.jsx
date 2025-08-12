import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import HowItWork from './pages/HowItWork'
import Contact from './pages/Contact'
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import TrackDevice from './pages/TrackDevice'
import AlertsHistory from './pages/AlertsHistory'
import AdminPanel from './pages/AdminPanel'
import Setting from './pages/Setting'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import LawEnforcementPanel from './pages/LawEnforcementPanel'

const App = () => {
  return (
    <AuthProvider>
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className='flex-1'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/how" element={<HowItWork />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />

          <Route path="/track" element={
            <ProtectedRoute >
              <TrackDevice />
            </ProtectedRoute>
          } />

          <Route path="/law-enforcement" element={
            <ProtectedRoute allowedRoles={['law-enforcement']}>
              <LawEnforcementPanel />
            </ProtectedRoute>
          } />

          <Route path="/alerts" element={
            <ProtectedRoute>
              <AlertsHistory />

            </ProtectedRoute>
          } />

          <Route path="/admin" element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AdminPanel />
            </ProtectedRoute>

          } />

          <Route path="/setting" element={
            <ProtectedRoute >
              <Setting />
            </ProtectedRoute>
          } />
        </Routes>
      </main>
    <Footer />
    </div>
    </AuthProvider>
  )
}

export default App