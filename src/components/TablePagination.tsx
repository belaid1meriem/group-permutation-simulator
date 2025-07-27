import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../components/ui/pagination";
import { PaginationProps } from "../hooks/usePagination";

export const TablePagination: React.FC<PaginationProps> = ({ 
  currentPage, 
  totalPages, 
  pageNumbers, 
  onPageChange, 
}) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 py-4">
      <div className="text-sm text-muted-foreground">
        Page {currentPage} of {totalPages}
      </div>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious 
              onClick={handlePrevious}
              className={
                isFirstPage 
                  ? "pointer-events-none opacity-50" 
                  : "cursor-pointer hover:bg-accent hover:text-accent-foreground"
              }
              size="default"
            />
          </PaginationItem>
          
          {pageNumbers.map((page, index) => (
            <PaginationItem key={index}>
              {page === 'ellipsis' ? (
                <PaginationEllipsis />
              ) : (
                <PaginationLink
                  onClick={() => onPageChange(page as number)}
                  isActive={currentPage === page}
                  className={
                    currentPage === page
                      ? ""
                      : "cursor-pointer hover:bg-accent hover:text-accent-foreground"
                  }
                  size="default"
                >
                  {page}
                </PaginationLink>
              )}
            </PaginationItem>
          ))}
          
          <PaginationItem>
            <PaginationNext 
              onClick={handleNext}
              className={
                isLastPage 
                  ? "pointer-events-none opacity-50" 
                  : "cursor-pointer hover:bg-accent hover:text-accent-foreground"
              }
              size="default"
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>

      <div className="text-sm text-muted-foreground">
        {totalPages > 1 && `${totalPages} pages total`}
      </div>
    </div>
  );
};