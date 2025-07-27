import { Button } from "../components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import { Input } from "../components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "../components/ui/dialog";
import useAddStudentForm from "../hooks/forms/useAddStudentForm";


export default function StudentForm({ isOpen, closeForm }: { isOpen: boolean; closeForm: () => void }) {
  const { form, onSubmit, isSubmitting } = useAddStudentForm({ closeModal: closeForm });

  return (
    <Dialog open={isOpen} onOpenChange={closeForm}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Simulate a student request</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={onSubmit} className="space-y-6">
            <FormField
              control={form.control}
              name="matricule"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Student Id - matricule</FormLabel>
                  <FormControl>
                    <Input placeholder="ex: 22/0008" {...field} />
                  </FormControl>
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
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end gap-2">
              <DialogClose asChild>
                <Button variant="outline" type="button">Cancel</Button>
              </DialogClose>
              <Button type="submit" disabled={ isSubmitting } >Submit</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
