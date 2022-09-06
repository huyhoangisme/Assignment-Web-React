import React from 'react';
import Menu from '../Menu';
import MenuItem from '../Menu/MenuItem';

interface Props {
  pageSize: number;
  setPageSize: (pageSize: number) => void;
}

const PageSize: React.FC<Props> = ({ pageSize, setPageSize }) => {
  return (
    <Menu title={`${pageSize} sản phẩm`}>
      {[5, 10, 15, 20, 50].map(pS => {
        return <MenuItem key={pS} onClick={() => setPageSize(Number(pS))}>{`${pS} sản phẩm`}</MenuItem>;
      })}
    </Menu>
  );
};

export default PageSize;
