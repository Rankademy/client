"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type User = {
  username: string
  token: string
}

type AuthContextType = {
  user: User | null
  isLoading: boolean
  login: (username: string, password: string) => Promise<boolean>
  logout: () => void
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // 초기 로드 시 localStorage에서 사용자 정보 가져오기
  useEffect(() => {
    const loadUser = () => {
      try {
        const storedUser = localStorage.getItem("user")
        if (storedUser) {
          setUser(JSON.parse(storedUser))
        }
      } catch (error) {
        console.error("Failed to load user from localStorage:", error)
      } finally {
        setIsLoading(false)
      }
    }

    loadUser()
  }, [])

  // 로그인 함수
  const login = async (username: string, password: string): Promise<boolean> => {
    try {
      // 실제 API 호출 대신 모의 로그인 처리
      const mockLoginSuccess = username === "admin" && password === "1234"

      if (mockLoginSuccess) {
        const userData = {
          username,
          token: "mock-token-" + Date.now(),
        }

        // 사용자 정보 저장
        setUser(userData)
        localStorage.setItem("user", JSON.stringify(userData))
        return true
      }
      return false
    } catch (error) {
      console.error("Login failed:", error)
      return false
    }
  }

  // 로그아웃 함수
  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
  }

  const value = {
    user,
    isLoading,
    login,
    logout,
    isAuthenticated: !!user,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

// 커스텀 훅으로 AuthContext 사용하기 쉽게 만들기
export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
