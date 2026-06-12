import { HelmetProvider } from 'react-helmet-async'
import { AuthProvider } from './context/AuthContext'
import { PrendasProvider } from './context/PrendasContext'
import AppRoutes from './routes/AppRoutes'

export default function App() {
  return (
    <HelmetProvider>
      <AuthProvider>
        <PrendasProvider>
          <AppRoutes />
        </PrendasProvider>
      </AuthProvider>
    </HelmetProvider>
  )
}
