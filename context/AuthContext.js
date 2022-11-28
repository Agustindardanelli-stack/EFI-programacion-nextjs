import { createContext, useState, useEffect } from 'react'

// eslint-disable-next-line
export default ({ children }) => {
  const [state, setState] = useState({
    auth: false,
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    profile: {},
  })
  useEffect(() => {
    const usuario = JSON.parse(localStorage.getItem('usuario'))
    if (usuario && !state.email) {
      // Logee a su usuario aquí.
    }
  }, [state])

  return <AuthContext.Provider value={[state, setState]}>{children}</AuthContext.Provider>
}
export const AuthContext = createContext()