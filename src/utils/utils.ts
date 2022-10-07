export const setTitle = (title: string) => {
  const prefix = import.meta.env.VITE_APP_SHORT_NAME || 'VITE_APP_SHORT_NAME'
  document.title = `${prefix} :: ${title}`
}