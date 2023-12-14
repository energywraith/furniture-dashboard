import { ArrowIcon } from "@/components/icons";

export interface TablePaginationProps {
  isCompact?: boolean;
  currentPage: number;
  totalPages: number;
  onPrevPage: () => void;
  onPage: (page: number) => void;
  onNextPage: () => void;
}

const TablePagination = ({
  isCompact,
  currentPage,
  totalPages,
  onNextPage,
  onPage,
  onPrevPage,
}: TablePaginationProps) => {
  const pagesToRender = Array.from(Array(totalPages).keys()).reduce(
    (acc: number[], page) => {
      if (
        (currentPage === 0 && page === 2) ||
        (currentPage === totalPages - 1 && page === totalPages - 3)
      ) {
        return [...acc, page];
      }

      if (page <= currentPage + 1 && page >= currentPage - 1) {
        return [...acc, page];
      }

      return acc;
    },
    []
  );

  return (
    <div className="flex justify-between text-gray-50">
      <button
        className={`
          "px-1 md:px-6 flex gap-x-1.5 items-center hover:text-gray-700 ${
            isCompact ? "px-6" : "px-1"
          }`}
        onClick={onPrevPage}
      >
        <ArrowIcon direction="left" className="w-4 h-4" />
        <span className={isCompact ? "hidden xl:block" : ""}>Wróć</span>
      </button>
      <ul className="flex text-body-s font-medium">
        {pagesToRender.map((page, index) => {
          return (
            <li key={`${page}${index}`} className="w-10 h-10">
              <button
                className={`w-full h-full ${
                  page === currentPage ? "text-info-600" : "hover:text-gray-700"
                }`}
                onClick={() => onPage(page)}
              >
                {page + 1}
              </button>
            </li>
          );
        })}
      </ul>
      <button
        className={`px-1 md:px-6 flex gap-x-1.5 items-center hover:text-gray-700 ${
          isCompact ? "px-6" : "px-1"
        }`}
        onClick={onNextPage}
      >
        <span className={isCompact ? "hidden xl:block" : ""}>Dalej</span>
        <ArrowIcon direction="right" className="w-4 h-4" />
      </button>
    </div>
  );
};

export { TablePagination };
