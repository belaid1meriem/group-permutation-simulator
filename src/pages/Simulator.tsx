import { useCallback, useState } from "react"
import StudentTable from "../components/StudentTable"
import StudentForm  from "../components/StudentForm"
import { Button } from "../components/ui/button"
import BackgroundPattern from "../components/BackgroundPattern"


const Simulator = () =>  {

  const [isFormOpened, setIsFormOpened] = useState<boolean>(false)
  const openForm = useCallback(() => setIsFormOpened(true), []);

  const students = [
      { id: "22/0008", currentGroup: "G08", desiredGroup: "G09", date: "2025/03/03 14:30:33" },
      { id: "22/0010", currentGroup: "G05", desiredGroup: "G07", date: "2025/03/04 10:20:15" },
      { id: "22/0022", currentGroup: "G03", desiredGroup: "G06", date: "2025/03/05 16:45:50" },
  ]
  
  return (
    <section id="simulator" className="grid grid-cols-3 gap-4 max-sm:gap-8 max-sm:p-4 p-8 ">

      <h2 className="text-2xl font-semibold col-span-3 self-center">Group change requests</h2>
      
      <div className="col-span-2 max-md:col-span-3 ">
        <StudentTable students={students} />
      </div>

      <div className="flex flex-col  max-md:flex-row gap-4 max-md:gap-8 justify-center max-md:col-span-3 max-sm:flex-col max-sm:gap-2 ">
        <Button onClick={ openForm }>Simulate a new student request</Button>
        <Button variant="secondary">Process all requests</Button>
      </div>
      <BackgroundPattern />
      
      <StudentForm isOpen={isFormOpened} closeForm={() => setIsFormOpened(false)} />

    </section>
  )
}

export default Simulator