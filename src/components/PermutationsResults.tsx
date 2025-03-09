import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "../components/ui/table"
function PermutationsResults({className}: {className?: string}) {
  return (
    <section id="results" className={className}>
        <h2 className="text-2xl font-semibold text-center p-4">Group change results</h2>
        <div  className="border rounded-md">
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
                <TableRow className="text-green-800 dark:text-green-300">
                    <TableCell className="font-medium">22/0008</TableCell>
                    <TableCell>G08</TableCell>
                    <TableCell>G09</TableCell>
                    <TableCell>Accepted</TableCell>
                </TableRow>


                <TableRow className="text-red-900 dark:text-red-300">
                    <TableCell className="font-medium">22/0008</TableCell>
                    <TableCell>G08</TableCell>
                    <TableCell>G09</TableCell>
                    <TableCell>Rejected</TableCell>
                </TableRow>
                </TableBody>
            </Table>
        </div>
        
    </section>
    
  )
}

export default PermutationsResults