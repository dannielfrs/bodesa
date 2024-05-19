export const downloadFile = (url, type = 'application/xml', fileName) => {
  const blob = new Blob([url], { type })
  const link = document.createElement('a')
  link.href = window.URL.createObjectURL(blob)
  link.download = fileName
  link.click()
}
