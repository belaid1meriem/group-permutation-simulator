import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Student, useStudents } from "../../context/StudentsContext";
import useAddStudent from "../useAddStudent";
import { toast } from "sonner"

const useAddStudentForm = ({ closeModal }: { closeModal?: ()=> void } = {}) => {

    const { students } = useStudents()
    const { addStudent } = useAddStudent();
    
    const formSchema = z.object({
        matricule: z.string().nonempty({ message: "Matricule is required" })
            .refine(
                (value) => !students.some((s) => s.matricule === value),
                { message: "This matricule already exists" }
            ),
        currentGroup: z.string().nonempty({ message: "Original group is required" }),
        desiredGroup: z.string().nonempty({ message: "Desired group is required" }),
    })
    .refine((data) => data.currentGroup !== data.desiredGroup, {
        message: "Desired group must be different from current group",
        path: ["desiredGroup"]
    });


    const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      matricule: "",
      currentGroup: "",
      desiredGroup: "",
    },
  });

  const onSubmit = form.handleSubmit((values: z.infer<typeof formSchema>) => {
    const newStudent: Student = {
      matricule: values.matricule,
      fromG: values.currentGroup,
      toG: values.desiredGroup,
      date: new Date().toISOString(),
    };
    addStudent(newStudent);
    toast.success("Student added successfully");
    closeModal?.();
  }) 

  return {
    form,
    isSubmitting: form.formState.isSubmitting,
    onSubmit,
  };
}

export default useAddStudentForm;