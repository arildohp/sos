import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Header from './components/Header'
import { GlobalCss } from './styles'
import Product from './components/Products'

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
      </div>
    </>
  )
}
export default App
