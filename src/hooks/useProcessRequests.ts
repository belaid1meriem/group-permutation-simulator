import { useState } from "react";
import { Student, useStudents } from "../context/StudentsContext";
import { PermutationRequest, useProcessedRequestsContext } from "../context/ProcessedRequestsContext";
import axios from "axios";
import { toast } from "sonner";

const useProcessRequests = () => {
    const { students } = useStudents();
    const groups = ((students: Student[]): string[] => {
        const groupsSet = new Set<string>();
        
        students.forEach(student => {
            groupsSet.add(student.fromG);
            groupsSet.add(student.toG);
        });
  
        return Array.from(groupsSet).sort();
    })(students);
    const { setProcessedRequests } = useProcessedRequestsContext();
    const [ isLoading, setIsLoading ] = useState(false);

    const processRequest = async (): Promise<void> => {
        setIsLoading(true);

        try {
            const response = await axios.post<PermutationRequest[]>('https://group-permutation.onrender.com/group_permutation', {
                students_list: students,
                group_list: groups
            });
            // console.log(response)
            setProcessedRequests(response.data);
            toast.success("Requests processed successfully");
            
        } catch (err) {
            toast.error("Failed to process requests, please try again!");
        } finally {
            setIsLoading(false);
        }
    }

    return {
        processRequest,
        isLoading
    };
}

export default useProcessRequests;