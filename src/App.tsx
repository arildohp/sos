import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Header from './components/Header'
import { GlobalCss } from './styles'

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
      </div>
    </>
  )
}
export default App
