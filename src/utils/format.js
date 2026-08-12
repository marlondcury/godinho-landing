export function formatDate(isoDate) {
  const d = new Date(`${isoDate}T12:00:00`)
  return d.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })
}
