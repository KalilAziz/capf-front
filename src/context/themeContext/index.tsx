import { ThemeContext } from './context'
import { useReducer } from 'react'
import { reducer } from './reducer'

export const ThemeProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, false)

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  )
}
