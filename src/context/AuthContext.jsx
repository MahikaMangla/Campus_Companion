import React, { createContext, useState, useContext, useEffect } from 'react'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [registeredUsers, setRegisteredUsers] = useState([])

  // Load registered users from localStorage on initial load
  useEffect(() => {
    const storedUsers = localStorage.getItem('registeredUsers')
    if (storedUsers) {
      setRegisteredUsers(JSON.parse(storedUsers))
    }
  }, [])

  const signup = (userData) => {
    // Check if username or email already exists
    const userExists = registeredUsers.some(
      user => user.username === userData.username || user.email === userData.email
    )

    if (userExists) {
      throw new Error('Username or email already exists')
    }

    // Add new user to registered users
    const newUser = {
      ...userData,
      password: userData.password // In a real app, this would be hashed
    }
    
    const updatedUsers = [...registeredUsers, newUser]
    setRegisteredUsers(updatedUsers)
    localStorage.setItem('registeredUsers', JSON.stringify(updatedUsers))
  }

  const login = (username, password) => {
    // Find user by username and password
    const foundUser = registeredUsers.find(
      user => user.username === username && user.password === password
    )

    if (!foundUser) {
      throw new Error('Invalid username or password')
    }

    // Don't store password in user state
    const { password: _, ...userWithoutPassword } = foundUser
    setUser(userWithoutPassword)
    localStorage.setItem('user', JSON.stringify(userWithoutPassword))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  return (
    <AuthContext.Provider value={{ 
      user, 
      login, 
      signup, 
      logout,
      isAuthenticated: !!user 
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
} 