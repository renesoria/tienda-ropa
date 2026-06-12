export interface User {
  id: number
  usuario: string
  rol: 'Administrador' | 'Usuario'
}

export interface LoginResponse {
  success: boolean
  message: string
  user?: User
  token?: string
}
