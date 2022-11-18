let value

if (typeof window !== 'undefined') {
  value = window.localStorage.getItem('theme') === 'true'
}

export const data = {
  light: value,
}
