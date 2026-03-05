export function reverseDate(dateString: string): string | null {
  if (!dateString) return null

  const parts = dateString.split('-')

  const [day, month, year] = parts

  return `${year}-${month}-${day}`
}
