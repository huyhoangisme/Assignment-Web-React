import { useNumberWithDot } from 'app/hooks/useNumberWithDot';
import React from 'react';
import { Column } from 'react-table';
import { Cart } from './data';

export const columns: Column<Cart>[] = [
  {
    id: 'product',
    Header: 'Thông tin sản phẩm',
    accessor: 'product',
    Cell: ({ row }) => {
      const { product } = row.values;
      return (
        <div className="flex h-[100px] space-x-4 items-center text-sm ">
          <img src={product.image} alt="" className="w-[80px] h-[80px]" />
          <div>
            <div>{product.name}</div>
            <div className="text-[#f45c43] text-[13px] mt-2 cursor-pointer">Xóa</div>
          </div>
        </div>
      );
    },
  },
  {
    id: 'price',
    Header: 'Đơn giá',
    accessor: 'price',
    Cell: ({ row }) => {
      const { price } = row.values;
      return <div className="text-[14px] text-[#f45c43]">{`${useNumberWithDot(price)} ₫`}</div>;
    },
  },
  {
    id: 'quanity',
    Header: 'Số lượng',
    accessor: 'quanity',
    Cell: ({ row }) => {
      const { quanity } = row.values;
      return <div className="text-[14px] ">{quanity}</div>;
    },
  },
  {
    id: 'total',
    Header: 'Thành tiền',
    accessor: 'total',
    Cell: ({ row }) => {
      const { total } = row.values;
      return <div className="text-[14px] text-[#f45c43]">{`${useNumberWithDot(total)} ₫`}</div>;
    },
  },
];
