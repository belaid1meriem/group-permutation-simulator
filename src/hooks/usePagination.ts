export interface PaginationResult<T> {
  currentPage: number;
  totalPages: number;
  currentData: T[];
  pageNumbers: (number | 'ellipsis')[];
  goToPage: (page: number) => void;
  startIndex: number;
  endIndex: number;
  totalItems: number;
  hasMultiplePages: boolean;
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  pageNumbers: (number | 'ellipsis')[];
  onPageChange: (page: number) => void;
  startIndex: number;
  endIndex: number;
  totalItems: number;
}

import { useState, useMemo } from "react";

export const usePagination = <T>(
  data: T[], 
  itemsPerPage: number = 4
): PaginationResult<T> => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const pageNumbers = useMemo((): (number | 'ellipsis')[] => {
    const pages: (number | 'ellipsis')[] = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('ellipsis');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('ellipsis');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('ellipsis');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('ellipsis');
        pages.push(totalPages);
      }
    }
    
    return pages;
  }, [currentPage, totalPages]);

  const goToPage = (page: number): void => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return {
    currentPage,
    totalPages,
    currentData,
    pageNumbers,
    goToPage,
    startIndex,
    endIndex: Math.min(endIndex, data.length),
    totalItems: data.length,
    hasMultiplePages: totalPages > 1
  };
};