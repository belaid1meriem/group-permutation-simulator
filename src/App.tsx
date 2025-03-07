import { Route, Routes } from "react-router"
import  Simulator from "./pages/Simulator"
import LandingPage from "./pages/LandingPage"
import Header from "./components/Header"
import Footer from "./components/Footer"
function App() {
  return (
    <div className="flex flex-col gap-4">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/simulator" element={<Simulator />} />
      </Routes>
      <Footer/>
    </div>
    
  )
}

export default App
