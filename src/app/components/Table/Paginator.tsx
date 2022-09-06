import { ArrowBack, ArrowForward } from 'app/assets';
import React, { useEffect, useState } from 'react';

interface Props {
  pageIndex: number;
  pageCount: number;
  previousPage: () => void;
  nextPage: () => void;
  canPreviousPage: boolean;
  canNextPage: boolean;
  gotoPage: (pageNumber: number) => void;
}

const Paginator: React.FC<Props> = ({
  pageIndex,
  pageCount,
  previousPage,
  nextPage,
  canPreviousPage,
  canNextPage,
  gotoPage,
}) => {
  const [pageArr, setPageArr] = useState([1, 2, 3, 4, 5]);

  useEffect(() => {
    const start = Math.floor(pageIndex / 5);
    const newArr = Array.from(Array(pageCount + 1).keys());
    newArr.shift();
    setPageArr(newArr.splice(start * 5, 5));
  }, [pageIndex, pageCount]);

  return (
    <div className="flex items-center">
      <button onClick={() => previousPage()} disabled={!canPreviousPage} className="mr-4">
        <ArrowBack />
      </button>
      {pageArr.map(p => (
        <button
          key={p}
          className={`py-[11px] px-[20px]  ${p === pageIndex + 1 ? 'rounded-md' : ''}`}
          onClick={() => gotoPage(p - 1)}
        >
          {p}
        </button>
      ))}
      <button onClick={() => nextPage()} disabled={!canNextPage} className="ml-4">
        <ArrowForward />
      </button>
    </div>
  );
};

export default Paginator;
