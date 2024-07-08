import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Header from './components/Header'
import { GlobalCss } from './styles'
import Product from './components/Products'
import Footer from './components/Footer'

const rotas = createBrowserRouter([
  {
    path: '/'
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <div>
        <Header />
        <Product />
        <Footer />
      </div>
    </>
  )
}
export default App
