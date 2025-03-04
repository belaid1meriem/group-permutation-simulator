import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "../components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form"
import { Input } from "../components/ui/input"

const formSchema = z.object({
  matricule: z.string().nonempty({ message: "Matricule is required" }),
  currentGroup: z.string().nonempty({ message: "Original group is required" }),
  desiredGroup: z.string().nonempty({ message: "Desired group is required" }),
  requestDate: z.string().nonempty({ message: "Request date is required" }),
})

export function StudentForm() {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      matricule: "",
      currentGroup: "",
      desiredGroup: "",
      requestDate: "",
    },
  })


  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
   
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 border rounded-lg p-4 shadow">
      <h2 className="text-xl font-semibold text-center ">Simulate a student request</h2>
        <FormField
          control={form.control}
          name="matricule"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Student Id - matricule</FormLabel>
              <FormControl>
                <Input placeholder="ex: 22/0008" {...field} />
              </FormControl>
              <FormDescription>
                This is the student's matricule.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="currentGroup"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Current group</FormLabel>
              <FormControl>
                <Input placeholder="G08" {...field} />
              </FormControl>
              <FormDescription>
                This is the student's current group.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="desiredGroup"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Desired group</FormLabel>
              <FormControl>
                <Input placeholder="ex: G09" {...field} />
              </FormControl>
              <FormDescription>
                This is the student's desired group.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full" type="submit">Submit</Button>
      </form>
    </Form>
  )
}
