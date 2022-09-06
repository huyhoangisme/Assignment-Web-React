import { Box } from '@chakra-ui/react';
import Button from 'app/components/Button';
import Table from 'app/components/Table';
import { useNumberWithDot } from 'app/hooks/useNumberWithDot';
import { usePagination } from 'app/hooks/usePagination';
import { useThemeContext } from 'app/themes/ThemeProvider';
import React from 'react';
import { Link } from 'react-router-dom';
import { columns } from '../data/columns';
import { data } from '../data/data';
const DetailCart = () => {
  const { pageIndex, pageSize, previousPage, nextPage, goToPage, changePageSize } = usePagination();
  const { theme } = useThemeContext();

  return (
    <Box>
      <Table
        data={data}
        columns={columns}
        hasPaginator={true}
        queryPageIndex={pageIndex}
        queryPageSize={pageSize}
        totalItems={5}
        nextPageFunc={nextPage}
        previousPageFunc={previousPage}
        goToPageFunc={goToPage}
        changePageSize={changePageSize}
      />
      <Box className="flex justify-end" fontSize="14px">
        <Box className="w-1/3 mb-3">
          <Box className="flex justify-between" color={theme.bgColor} my="10px">
            <Box color={theme.textColor}>Tổng tiền:</Box>
            <Box>{`${useNumberWithDot(10000000)} ₫`}</Box>
          </Box>
          <Link to="/checkout/1">
            <Button variant="button-outline" bgColor={theme.textColor} fontWeight="400">
              Thanh toán
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
export default DetailCart;
