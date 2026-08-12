import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Nome do repositório no GitHub — o site fica em
// https://marlondcury.github.io/godinho-landing/
// Se um dia usar domínio próprio ou um repositório "usuario.github.io",
// troque para base: '/'.
const base = '/godinho-landing/'

export default defineConfig({
  base,
  plugins: [react()],
})
