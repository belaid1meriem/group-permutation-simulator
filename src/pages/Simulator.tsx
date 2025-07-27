import { useState } from "react";
import StudentTable from "../components/StudentTable";
import StudentForm from "../components/StudentForm";
import { Button } from "../components/ui/button";
import BackgroundPattern from "../components/BackgroundPattern";

const Simulator = () => {
  const [isFormOpened, setIsFormOpened] = useState(false);

  const openForm = () => setIsFormOpened(true);
  const closeForm = () => setIsFormOpened(false);

  return (
    <section id="simulator" className="grid grid-cols-3 gap-4 max-sm:gap-8 max-sm:p-4 p-8">
      <h2 className="text-2xl font-semibold col-span-3 self-center">Group change requests</h2>

      <div className="col-span-2 max-md:col-span-3">
        <StudentTable/>
      </div>

      <div className="flex flex-col max-md:flex-row gap-4 max-md:gap-8 justify-start max-md:col-span-3 max-sm:flex-col max-sm:gap-2">
        <Button onClick={openForm}>Simulate a new student request</Button>
        <Button variant="secondary">Process all requests</Button>
      </div>

      <BackgroundPattern />

      {isFormOpened && <StudentForm isOpen={isFormOpened} closeForm={closeForm}  />}
    </section>
  );
};

export default Simulator;
