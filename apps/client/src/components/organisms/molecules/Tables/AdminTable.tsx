import {
  AdminTableEl,
  AdminTableTd,
  AdminTableTh,
  AdminTableTr,
} from "elements";
import { useRouter } from "next/router";
import React from "react";
import { calcPagination } from "tools";
import { PaginationBar } from "..";

export const AdminTable: React.FC<AdminTableProps> = ({
  columns,
  rows,
}) => {
  const router = useRouter();

  const paginate = (page: number | "next" | "prev") => {
    router.push({
      query: {
        ...router.query,
        page: calcPagination(page, router.query.page as string, 2),
      },
    });
  };

  return (
    <>
      <AdminTableEl>
        <AdminTableTr>
          {columns?.map((column) => (
            <AdminTableTh key={column}>{column}</AdminTableTh>
          ))}
        </AdminTableTr>
        {rows?.map((row) => (
          <AdminTableTr key={Math.random()}>
            {row?.map((item) => (
              <AdminTableTd key={Math.random()}>{item}</AdminTableTd>
            ))}
          </AdminTableTr>
        ))}
      </AdminTableEl>
      <PaginationBar
        page={+((router.query.page as string) ?? 1)}
        lastPage={2}
        callback={paginate}
      />
    </>
  );
};

export interface AdminTableProps {
  columns: any[];
  rows: any[][];
}
