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
import { STICKERTAGINPUTS } from "@/lib/constants";
import { csvDataResponse } from "@/hooks/useReadCsv";

export default function StickerTagInputs({
  data,
  handleData,
}: {
  data?: csvDataResponse;
  handleData?: boolean;
}) {
  const { results } = usePaginatedQuery(
    api.stickerTag.listStickerTag,
    {},
    { initialNumItems: 5 },
  );

  const formatCurrency = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "COP",
    currencyDisplay: "narrowSymbol",
  });

  let rows = results.map((data) => {
    if (!data) {
      return null;
    }
    return (
      <TableRow key={data._id}>
        <TableCell>{data.type}</TableCell>
        <TableCell>{formatCurrency.format(data.price)}</TableCell>
        <TableCell>{data.quantity}</TableCell>
        <TableCell>{data.date}</TableCell>
        <TableCell>
          {formatCurrency.format(data.price / data.quantity)}
        </TableCell>
      </TableRow>
    );
  });
  const headers = STICKERTAGINPUTS.map((header) => {
    return <TableHead key={crypto.randomUUID()}>{header} </TableHead>;
  });
  if (handleData && !data) {
    return <h1>Extranyendo datos ...</h1>;
  }

  if (data) {
    if (data?.headers.length <= 0) {
      return (
        <h1>
          Hubo un error leyendo el archivo, verifique el nombre de las columnas
        </h1>
      );
    }
    rows = data.content.map((rows, index) => {
      if (index > 4) {
        return null;
      }
      const columns = rows.map((column) => {
        return <TableCell key={crypto.randomUUID()}>{column}</TableCell>;
      });
      return <TableRow key={crypto.randomUUID()}>{columns}</TableRow>;
    });
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>{headers}</TableRow>
      </TableHeader>
      <TableBody>{rows}</TableBody>
    </Table>
  );
}
