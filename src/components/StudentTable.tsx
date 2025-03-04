import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table"

function StudentTable({className}: {className?: string}) {
  return (
    <div className={className}>
        <Table>
          {/* <TableCaption>A list of group changement requests.</TableCaption> */}
          <TableHeader>
          <TableRow>
              <TableHead>Student Id (matricule)</TableHead>
              <TableHead>Current group</TableHead>
              <TableHead>Desired changement</TableHead>
              <TableHead>Request date</TableHead>
          </TableRow>
          </TableHeader>
          <TableBody>
          <TableRow>
              <TableCell className="font-medium">22/0008</TableCell>
              <TableCell>G08</TableCell>
              <TableCell>G09</TableCell>
              <TableCell>2025/03/03 14:30:33</TableCell>
          </TableRow>
          </TableBody>
      </Table>
    </div>
  )
}

export default StudentTable