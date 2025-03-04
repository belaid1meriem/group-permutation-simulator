import Header from "./components/Header"
import { StudentForm } from "./components/StudentForm"
import StudentTable from "./components/StudentTable"
import { DotPattern } from "./components/magicui/dot-pattern";
import Footer from "./components/Footer";
import { BorderBeam } from "./components/magicui/border-beam";
import { Button } from "./components/ui/button";
import PermutationsResults from "./components/PermutationsResults";


function App() {
  return (
    <div className="flex flex-col gap-4">
      <Header />
      <div className="grid grid-cols-3 gap-4">
        <StudentForm />
        <div className="relative h-[500px] w-full overflow-hidden bg-background col-span-2">
          <DotPattern/>
          <div className="absolute top-[50%] left-[50%] -translate-1/2 w-[80%] h-[80%] flex flex-col gap-4 bg-background border rounded-md p-4">
            <h2 className="text-2xl font-semibold text-center p-4">Group change requests</h2>
            <StudentTable className="border rounded-md" />
            <div className="flex justify-end items-end flex-1">
              <Button className="relative overflow-hidden" variant="default">
                <BorderBeam colorFrom="#ffaa40" colorTo="#ffaa40"/>
                Find permutations
              </Button>
            </div>
          </div>
        </div>
      </div>
      <PermutationsResults className="p-4"/>
      <Footer/>

    </div>
  )
}

export default App
