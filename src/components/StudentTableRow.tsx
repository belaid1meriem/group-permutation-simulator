import { Fragment } from "react";
import { TableCell, TableRow } from "../components/ui/table";
import { Student } from "../context/StudentsContext";

interface StudentTableRowProps {
  student: Student;
}

export const StudentTableRow: React.FC<StudentTableRowProps> = ({ student }) => (
  <Fragment>
    {/* Desktop row */}
    <TableRow className="max-[930px]:hidden">
      <TableCell className="font-medium">{student.matricule}</TableCell>
      <TableCell>{student.fromG}</TableCell>
      <TableCell>{student.toG}</TableCell>
      <TableCell>{student.date}</TableCell>
    </TableRow>

    {/* Mobile row */}
    <TableRow className="hidden max-[930px]:table-row">
      <TableCell colSpan={4} className="flex flex-col gap-4 p-4">
        <div className="flex justify-between items-center">
          <span className="font-semibold">Student Id (matricule)</span>
          <span>{student.matricule}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-semibold">Current group</span>
          <span>{student.fromG}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-semibold">Desired changement</span>
          <span>{student.toG}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-semibold">Request date</span>
          <span>{student.date}</span>
        </div>
      </TableCell>
    </TableRow>
  </Fragment>
);