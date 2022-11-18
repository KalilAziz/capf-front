import * as types from './type'

interface reducerProps {
  (state: any, action: any): any
}

export const reducer: reducerProps = (state, action) => {
  switch (action.type) {
    case types.SET_THEME: {
      window.localStorage.setItem('theme', JSON.stringify(action.payload))
      return {
        ...state,
        light: action.payload,
      }
    }

    default:
      return state
  }
}
