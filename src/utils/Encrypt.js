import CryptoJS from 'crypto-js'
const key = process.env.NEXT_PUBLIC_PASSWORD

export const Encrypt = (data) => {
  const ciphertext = CryptoJS.AES.encrypt(data, key).toString()
  return ciphertext
}

const Decrypt = (ciphertext) => {
  if (ciphertext) {
    const bytes = CryptoJS.AES.decrypt(ciphertext, key).toString(CryptoJS.enc.Utf8)
    return bytes
  }
}

export const EncryptData = (data) => {
  const ciphertext = Encrypt(JSON.stringify(data))
  return ciphertext
}

export const DecryptData = (data) => {
  const plaintext = Decrypt(data)
  if (plaintext) {
    return JSON.parse(plaintext)
  }
}
