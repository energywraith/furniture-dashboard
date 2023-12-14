"use client";

import { useCallback, useMemo, useState } from "react";
import { Row } from "./types";

const usePagination = (data: Row[], volume: number = 5) => {
  const [page, setPage] = useState(0);

  const totalPages = useMemo(() => {
    return Math.floor(data.length / volume);
  }, [volume, data.length]);

  const slicedData = useMemo(
    () => data.slice(page * volume, page * volume + volume),
    [data, volume, page]
  );

  const onNextPage = () => {
    setPage((prevState: number) => {
      if (prevState + 1 < totalPages) {
        return prevState + 1;
      }

      return prevState;
    });
  };

  const onPrevPage = () => {
    setPage((prevState: number) => {
      if (prevState > 0) {
        return prevState - 1;
      }

      return prevState;
    });
  };

  const onPage = (newPage: number) => {
    setPage(newPage);
  };

  return { data: slicedData, page, totalPages, onPrevPage, onPage, onNextPage };
};

export { usePagination };
