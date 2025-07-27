import { Route, Routes } from "react-router"
import  Simulator from "./pages/Simulator"
import LandingPage from "./pages/LandingPage"
import Header from "./components/Header"
import { StudentsProvider } from "./context/StudentsContext";
import { Toaster } from "sonner";
import { ProcessedRequestsProvider } from "./context/ProcessedRequestsContext";
function App() {
  return (
    <div className="flex flex-col gap-4">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/simulator" element={
          <ProcessedRequestsProvider>
            <StudentsProvider>
              <Simulator />
            </StudentsProvider>
          </ProcessedRequestsProvider>
          } />
      </Routes>
      <Toaster />
    </div>
    
  )
}

export default App
