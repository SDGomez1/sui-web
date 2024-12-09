"use client";

import { usePaginatedQuery } from "convex/react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { api } from "../../../convex/_generated/api";
import { DYEINPUTS } from "@/lib/constants";

export default function DyeInputs() {
  const { results } = usePaginatedQuery(
    api.dye.listDye,
    {},
    { initialNumItems: 5 },
  );

  const formatCurrency = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "COP",
    currencyDisplay: "narrowSymbol",
  });

  const rows = results.map((data) => {
    return (
      <TableRow key={data._id}>
        <TableCell>{data.quantity}</TableCell>
        <TableCell>{formatCurrency.format(data.price)}</TableCell>
        <TableCell>{data.weight}</TableCell>
        <TableCell>{data.dropQuantity}</TableCell>
        <TableCell>{data.date}</TableCell>
        <TableCell>
          {formatCurrency.format(data.price / data.quantity)}
        </TableCell>
        <TableCell>
          {formatCurrency.format(
            data.price / data.quantity / data.dropQuantity,
          )}
        </TableCell>
      </TableRow>
    );
  });
  const headers = DYEINPUTS.map((header) => {
    return <TableHead key={crypto.randomUUID()}>{header} </TableHead>;
  });
  return (
    <Table>
      <TableHeader>
        <TableRow>{headers}</TableRow>
      </TableHeader>
      <TableBody>{rows}</TableBody>
    </Table>
  );
}
