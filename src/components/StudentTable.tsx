import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { useStudents } from "../context/StudentsContext";
import { usePagination } from "../hooks/usePagination";
import { StudentTableRow } from "../components/StudentTableRow";
import { TablePagination } from "../components/TablePagination";
import { EmptyState } from "../components/EmptyState";
import { Student } from "../context/StudentsContext";

const StudentTable: React.FC = () => {
  const { students }: { students: Student[] } = useStudents();
  const pagination = usePagination<Student>(students);

  return (
    <div className="space-y-4">
      <div className="border rounded-md">
        <Table>
          <TableHeader className="max-[930px]:hidden">
            <TableRow>
              <TableHead>Student Id (matricule)</TableHead>
              <TableHead>Current group</TableHead>
              <TableHead>Desired changement</TableHead>
              <TableHead>Request date</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {students.length === 0 ? (
              <EmptyState />
            ) : (
              pagination.currentData.map((student) => (
                <StudentTableRow key={student.matricule} student={student} />
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {students.length > 0 && pagination.hasMultiplePages && (
        <TablePagination
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
          pageNumbers={pagination.pageNumbers}
          onPageChange={pagination.goToPage}
          startIndex={pagination.startIndex}
          endIndex={pagination.endIndex}
          totalItems={pagination.totalItems}
        />
      )}
    </div>
  );
};

export default StudentTable;