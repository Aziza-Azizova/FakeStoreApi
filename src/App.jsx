import Header from "./components/Header"
import { Route, Routes } from "react-router-dom"
import { router } from "./router/index"


function App() {

  return (
    <div className="container">
      <Header />
      <Routes>
        {
          router.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))
        }
      </Routes>
    </div>
  )
}

export default App
