"use client";

import { ColumnDef } from "@tanstack/react-table";
import type { TransactionBulk } from "@/types";
import { AmountCell } from "../amount-cell";
import { CategoriesComboboxInput } from "@/components/add-transactions/categories-combobox-input";

export const columns: ColumnDef<TransactionBulk>[] = [
  {
    accessorKey: "Concept",
    header: "NAME",
  },
  {
    accessorKey: "Amount",
    header: "AMOUNT",
    cell: ({ getValue }) => <AmountCell amount={getValue() as string} />,
  },
  {
    accessorKey: "Date",
    header: "DATE",
  },
  {
    accessorKey: "Categories",
    header: "CATEGORIES",
    cell: ({ row }) => (
      <CategoriesComboboxInput
        selectedOptions={row.original.selectedCategories ?? []}
        selectedRow={row.index}
      />
    ),
  },
  {
    accessorKey: "Notes",
    header: "NOTES",
  },
];
