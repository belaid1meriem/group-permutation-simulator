import { Student, useStudents } from "../context/StudentsContext";

const useAddStudent = () => {
    const { setStudents } = useStudents();

    const addStudent = (newStudent: Student) => {
        setStudents((prevStudents) => [...prevStudents, newStudent]);
    };

    return {
        addStudent
    }
}

export default useAddStudent;