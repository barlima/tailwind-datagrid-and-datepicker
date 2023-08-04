import React from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Avatar } from "./Avatar";

type Invoice = {
  number: string;
  status: "paid" | "refunded" | "cancelled";
  customer: {
    name: string;
    email: string;
  };
  progress: number;
};

const defaultData: Invoice[] = [
  {
    number: "INV-3042",
    status: "paid",
    customer: {
      name: "Olivia Rhye",
      email: "olivia@untitledui.com",
    },
    progress: 60,
  },
  {
    number: "INV-4214",
    status: "paid",
    customer: {
      name: "Phoenix Baker",
      email: "phoenix@untitledui.com",
    },
    progress: 70,
  },
  {
    number: "INV-4312",
    status: "paid",
    customer: {
      name: "Drew Cano",
      email: "drew@untitledui.com",
    },
    progress: 10,
  },
];

const columnHelper = createColumnHelper<Invoice>();

const columns = [
  columnHelper.accessor("number", {
    cell: (info) => (
      <div className="flex gap-2">
        <input type="checkbox" />
        <span className="font-bold">{info.getValue()}</span>
      </div>
    ),
    header: () => (
      <div>
        <button onClick={() => alert('I could sort or call API!')}>
          Invoice
        </button>
      </div>
    ),
  }),
  columnHelper.accessor("status", {
    cell: (info) => (
      <div className="bg-green-100 px-3 py-1 rounded-full w-fit text-green-800 font-medium text-xs">
        <span>✓ {info.getValue()}</span>
      </div>
    ),
    header: "Status",
  }),
  columnHelper.accessor("customer", {
    cell: (info) => (
      <Avatar name={info.getValue().name} email={info.getValue().email} />
    ),
    header: "Customer",
  }),
  columnHelper.accessor("progress", {
    cell: (info) => (
      <div className="flex items-center gap-2">
        <div className="min-w-[100px] bg-gray-200 h-[6px] rounded-full relative">
          <div
            className="absolute h-[6px] bg-purple-600 rounded-l-full"
            style={{ width: `${info.getValue()}px` }}
          />
        </div>
        <span className="font-bold text-xs">{info.getValue()}%</span>
      </div>
    ),
    header: "Progress",
  }),
  columnHelper.accessor(() => "edit", {
    id: "edit",
    header: "",
    cell: () => <button className="border-none">...</button>,
  }),
];

const CustomDataGrid: React.FC = () => {
  const [data, _setData] = React.useState(() => [...defaultData]);
  const rerender = React.useReducer(() => ({}), {})[1];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="flex flex-col gap-2">
      <h2>Tailwind + @tanstack/react-table</h2>

      <p>
        Based on:{" "}
        <a
          className="text-primary underline"
          href="https://dribbble.com/shots/18369872-Order-history-Untitled-UI/attachments/13583066?mode=media"
          target="_blank"
        >
          Dribbble design 1
        </a>
      </p>

      <table className="border-[1px] bg-white rounded-xl">
        <thead className="border-b-[1px] relative after:absolute after:w-full after:h-1 after:top-0 after:left-0 after:bg-blue-300 after:rounded-t-xl after:bg-gradient-to-r after:from-violet-500 after:to-fuchsia-500">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="pb-3 pt-4 px-6 text-sm font-bold text-left"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="px-3 border-[1px] last:border-none">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-6 py-4">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
      <div className="h-4" />
      <button onClick={() => rerender()} className="border-[1px] p-2">
        Rerender
      </button>
    </div>
  );
};

export default CustomDataGrid;
