import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const usePagination = () => {
  const [params, setParams] = useSearchParams();
  const [pageIndex, setPageIndex] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(5);
  useEffect(() => {
    const paramIndex = params.get('page');
    if (paramIndex) setPageIndex(parseInt(paramIndex));
    const paramSize = params.get('size');

    if (paramSize) setPageSize(parseInt(paramSize));
  }, []);
  useEffect(() => {
    params.set('page', pageIndex.toString());
    setParams(params);
  }, [pageIndex]);
  useEffect(() => {
    params.set('size', pageSize.toString());
    setParams(params);
  }, [pageSize]);
  const goToPage = (pageNumber: number) => {
    setPageIndex(pageNumber);
  };
  const nextPage = () => {
    setPageIndex(currentPage => currentPage + 1);
  };
  const previousPage = () => {
    setPageIndex(currentPage => currentPage - 1);
  };
  const changePageSize = (pageSize: number) => {
    setPageSize(pageSize);
  };
  return {
    pageIndex,
    pageSize,
    previousPage,
    nextPage,
    goToPage,
    changePageSize,
  };
};
