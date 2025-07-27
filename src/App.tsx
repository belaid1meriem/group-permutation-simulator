import { Route, Routes } from "react-router"
import  Simulator from "./pages/Simulator"
import LandingPage from "./pages/LandingPage"
import Header from "./components/Header"
import { StudentsProvider } from "./context/StudentsContext";
import { Toaster } from "sonner";
function App() {
  return (
    <div className="flex flex-col gap-4">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/simulator" element={
          <StudentsProvider>
            <Simulator />
          </StudentsProvider>
          } />
      </Routes>
      <Toaster />
    </div>
    
  )
}

export default App
