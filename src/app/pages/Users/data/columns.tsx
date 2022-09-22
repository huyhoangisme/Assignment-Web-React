import { Tooltip } from '@chakra-ui/react';
import React from 'react';

import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { Column } from 'react-table';
interface User {
  name: string;
  email: string;
  role: string;
  [key: string]: string;
}

export default function createColumns(handleDeleteUser: (id: string) => void) {
  const columns: Column<User>[] = [
    {
      Header: 'Họ và tên',
      accessor: 'name',
    },
    {
      Header: 'Email',
      accessor: 'email',
    },
    {
      Header: 'Role',
      accessor: 'role',
    },
    {
      Header: 'Actions',
      Cell: ({ row }) => {
        return (
          <div className="flex space-x-[28px]">
            <Tooltip label="Edit this event">
              <div className="cursor-pointer">
                <div>
                  <AiFillEdit />
                </div>
              </div>
            </Tooltip>
            <Tooltip label="Delete this event">
              <div className="cursor-pointer">
                <div onClick={() => handleDeleteUser(row.original['_id'])}>
                  <AiFillDelete />
                </div>
              </div>
            </Tooltip>
          </div>
        );
      },
    },
  ];
  return columns;
}
