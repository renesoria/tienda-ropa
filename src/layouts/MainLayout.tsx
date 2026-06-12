import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className="panelcontenido">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default MainLayout
