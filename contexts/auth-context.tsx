'use client'

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from 'react'
import type { User, UserRole } from '@/types'

interface AuthContextValue {
  user: User | null
  isAuthenticated: boolean
  isAdmin: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  updateUser: (data: Partial<User>) => void
}

const AuthContext = createContext<AuthContextValue | null>(null)

// Demo user — replace with real API call
const DEMO_CLIENT: User = {
  id: 'usr_demo_001',
  name: 'Você',
  email: 'usuario@email.com',
  role: 'client' as UserRole,
  plan: 'Pro',
  planExpiresAt: '2026-07-26',
  createdAt: '2025-01-15',
  status: 'active',
  twoFactorEnabled: false,
  affiliateCode: 'NEBULA-DEMO',
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  const login = useCallback(async (email: string, _password: string) => {
    // TODO: replace with real API call to /api/auth/login
    await new Promise((r) => setTimeout(r, 800))
    const role: UserRole = email.includes('admin') ? 'admin' : 'client'
    setUser({ ...DEMO_CLIENT, email, role })
  }, [])

  const logout = useCallback(() => {
    setUser(null)
  }, [])

  const updateUser = useCallback((data: Partial<User>) => {
    setUser((prev) => (prev ? { ...prev, ...data } : prev))
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isAdmin: user?.role === 'admin' || user?.role === 'owner',
        login,
        logout,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider')
  return ctx
}
