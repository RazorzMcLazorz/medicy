export const tileSelector = () => {
  const ran = Math.round(Math.random() * 25)
  return ran >= 9 ? 0 : ran
}
