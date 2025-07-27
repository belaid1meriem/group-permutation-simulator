import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "../components/ui/table"

import { PermutationRequest } from "../context/ProcessedRequestsContext";
import { Student } from "../context/StudentsContext";
import { usePagination } from "../hooks/usePagination";
import { TablePagination } from "../components/TablePagination";

interface PermutationsResultsProps {
  className?: string;
  allRequests: Student[];
  acceptedRequests: PermutationRequest[];
  title?: string;
}

function PermutationsResults({ 
  className, 
  allRequests = [], 
  acceptedRequests = [],
  title = "Group change results"
}: PermutationsResultsProps) {
  const pagination = usePagination<Student>(allRequests);

  const isRequestAccepted = (request: PermutationRequest) => {
    return acceptedRequests.some(accepted => 
      accepted.matricule === request.matricule &&
      accepted.fromG === request.fromG &&
      accepted.toG === request.toG
    );
  };

  const getStatusColor = (request: PermutationRequest) => {
    return isRequestAccepted(request)
      ? 'text-green-800 dark:text-green-300' 
      : 'text-red-900 dark:text-red-300';
  };

  return (
    <section id="results" className={className}>
        <h2 className="text-2xl font-semibold text-center p-4">{title}</h2>
        <div className="space-y-4 bg-background ">
          <div className="border rounded-md ">
              <Table>
                  <TableHeader>
                  <TableRow>
                      <TableHead>Student Id - matricule</TableHead>
                      <TableHead>Current group</TableHead>
                      <TableHead>Desired changement</TableHead>
                      <TableHead>Status</TableHead>
                  </TableRow>
                  </TableHeader>
                  <TableBody>
                  {pagination.currentData.map((request, index) => (
                      <TableRow key={`${request.matricule}-${index}`} className={getStatusColor(request)}>
                          <TableCell className="font-medium">{request.matricule}</TableCell>
                          <TableCell>{request.fromG}</TableCell>
                          <TableCell>{request.toG}</TableCell>
                          <TableCell>{isRequestAccepted(request) ? 'Accepted' : 'Rejected'}</TableCell>
                      </TableRow>
                  ))}
                  </TableBody>
              </Table>
          </div>

          {allRequests.length > 0 && pagination.hasMultiplePages && (
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
    </section>
  )
}

export default PermutationsResults