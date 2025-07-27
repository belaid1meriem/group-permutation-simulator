import { useEffect } from "react";
import { DotPattern } from "../components/magicui/dot-pattern";
import { useProcessedRequestsContext } from "../context/ProcessedRequestsContext";
import { useStudents } from "../context/StudentsContext";
import PermutationsResults from "./PermutationsResults";

const BackgroundPattern = () => {
  const { processedRequests } = useProcessedRequestsContext();
  const { students } = useStudents();
  const isProcessed: boolean = processedRequests.length > 0;

  useEffect(()=>{
    console.log("Processed Requests:", processedRequests);
  },[processedRequests]);
  return(
  <div className="relative h-[500px] w-full overflow-hidden bg-background col-span-3">
    <DotPattern />
    <div className="relative z-10">
        {
          isProcessed
          ? <PermutationsResults allRequests={students} acceptedRequests={processedRequests} />
          :(
            <h2 className="absolute top-[10%] left-[50%] -translate-x-1/2 flex flex-col gap-4 bg-background border rounded-full px-4 py-2 text-center">
              Processed requests will appear here
            </h2>
          )
        }
    </div>

  </div>
  )
};

export default BackgroundPattern;