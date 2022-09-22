import { Box, Spinner } from '@chakra-ui/react';
import { Params } from 'app/api/users';
import Table from 'app/components/Table';
import Title from 'app/components/Title';
import { usePagination } from 'app/hooks/usePagination';
import { useAppDispatch, useAppSelector } from 'app/redux/root';
import { loadingSelector, totalUserSelector, userActions, usersSelector } from 'app/redux/users/userSlice';
import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import createColumns from './data/columns';
export const Users = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(usersSelector);
  const totalUser = useAppSelector(totalUserSelector);
  const loading = useAppSelector(loadingSelector);
  const { pageIndex, pageSize, nextPage, previousPage, goToPage, changePageSize } = usePagination();
  const params: Params = {
    limit: pageSize,
    page: pageIndex + 1,
  };
  const handleDeleteUser = (id: string) => {
    if (!id) return undefined;
    dispatch(userActions.deleteUserStart(id));
  };
  const columns = createColumns(handleDeleteUser);
  if (loading) <Spinner />;
  useEffect(() => {
    dispatch(userActions.getAllUserStart(params));
  }, [dispatch, pageSize, pageIndex, users?.length]);

  return (
    <Box>
      <Title title="Khách hàng" mb="12px" />
      {users && (
        <Table
          columns={columns}
          hasPaginator
          data={users}
          queryPageIndex={pageIndex}
          queryPageSize={pageSize}
          totalItems={totalUser}
          nextPageFunc={nextPage}
          previousPageFunc={previousPage}
          goToPageFunc={goToPage}
          changePageSize={changePageSize}
        />
      )}
      <Outlet />
    </Box>
  );
};
