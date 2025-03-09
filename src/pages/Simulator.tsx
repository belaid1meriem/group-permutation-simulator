import { memo, useCallback, useState } from "react"
import { DotPattern } from "../components/magicui/dot-pattern"
import StudentTable from "../components/StudentTable"
import { StudentForm } from "../components/StudentForm"
import { Button } from "../components/ui/button"

const Simulator = memo( function Simulator() {

  const [isFormOpened, setIsFormOpened] = useState<boolean>(false)
  
  const handleCloseForm = useCallback( (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    setIsFormOpened(false)
  } , [])
  
  return (
    <section id="simulator" className="grid grid-cols-3 gap-4 max-sm:gap-8 max-sm:p-4 p-8 ">

      <h2 className="text-2xl font-semibold col-span-3 self-center">Group change requests</h2>
      
      <div className="col-span-2 max-md:col-span-3 ">
        <StudentTable />
      </div>

      <div className="flex flex-col  max-md:flex-row gap-4 max-md:gap-8 justify-center max-md:col-span-3 max-sm:flex-col max-sm:gap-2 ">
        <Button onClick={() => setIsFormOpened(true)}>Simulate a new student request</Button>
        <Button variant="secondary">Process all requests</Button>
      </div>
      

      <div className="relative h-[500px] w-full overflow-hidden bg-background col-span-3 ">
          <DotPattern/>
          <h2 className="absolute top-[10%] left-[50%] -translate-1/2 flex flex-col gap-4 bg-background border rounded-full px-4 py-2 text-center">Processed requests will appear here</h2>
        
      </div>

      {isFormOpened && (
         <div onClick={handleCloseForm} className="fixed top-0 left-0 w-svw h-svh bg-background/70 z-40 flex items-center justify-center" >
            <div onClick={(e) => e.stopPropagation()}>
              <StudentForm closeForm={() => setIsFormOpened(false)}/>
            </div>
         </div>
      )}
     
    </section>
  )
})

export default Simulator