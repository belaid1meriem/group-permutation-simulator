import { TableCell, TableRow } from "../components/ui/table";

export const EmptyState: React.FC = () => (
  <TableRow>
    <TableCell 
      colSpan={4} 
      className="text-center py-8 text-gray-500"
    >
      No student requests found. All group change requests will appear here.
    </TableCell>
  </TableRow>
);