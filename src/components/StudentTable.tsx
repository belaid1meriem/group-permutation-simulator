import { Fragment } from "react/jsx-runtime";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";

import {memo} from "react";

const StudentTable = memo( function StudentTable() {
  return (
    <div className="border rounded-md">
      <Table >
        <TableHeader className="max-[930px]:hidden">
          <TableRow>
            <TableHead>Student Id (matricule)</TableHead>
            <TableHead>Current group</TableHead>
            <TableHead>Desired changement</TableHead>
            <TableHead>Request date</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {[...Array(3)].map((_, index) => (
            <Fragment key={index}>
              
              <TableRow  className="max-[930px]:hidden">
                <TableCell className="font-medium">22/0008</TableCell>
                <TableCell>G08</TableCell>
                <TableCell>G09</TableCell>
                <TableCell>2025/03/03 14:30:33</TableCell>
              </TableRow>

              
              <TableRow  className="hidden max-[930px]:table-row">
                <TableCell colSpan={4} className="flex flex-col gap-4 p-4">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Student Id (matricule)</span>
                    <span>22/0008</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Current group</span>
                    <span>G08</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Desired changement</span>
                    <span>G09</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Request date</span>
                    <span>2025/03/03 14:30:33</span>
                  </div>
                </TableCell>
              </TableRow>
            </Fragment>
          ))}
        </TableBody>
      </Table>
    </div>
    
  );
})

export default StudentTable;