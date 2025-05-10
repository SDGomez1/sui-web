"use client";

import { usePaginatedQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { DYEINPUTS } from "@/lib/constants";
import { csvDataResponse } from "@/hooks/useReadCsv";
import { useEffect, useRef, useState } from "react";
import { formatCurrency } from "@/lib/formatCurrency";
import { AgGridReact } from "ag-grid-react";

export default function DyeInputs({
  data,
  handleData,
}: {
  data?: csvDataResponse;
  handleData?: boolean;
}) {
  const { results } = usePaginatedQuery(
    api.dye.listDye,
    {},
    { initialNumItems: 5 },
  );

  const [rowData, setRowData] = useState<DYEINPUTS[]>([]);
  const gridRef = useRef<AgGridReact>(null);
  useEffect(() => {
    const rawData = results.map((data) => {
      const formatRow: DYEINPUTS = {
        Cantidad: data.quantity,
        "Precio(cop)": formatCurrency.format(data.price),
        "Peso por tarro (g)": data.weight,
        "Cantidad de gotas": data.dropQuantity,
        Fecha: data.date,
        "Costo por gota (cop)": formatCurrency.format(
          data.price / data.quantity,
        ),
        "Costo por tarro (cop)": formatCurrency.format(
          data.price / data.quantity / data.dropQuantity,
        ),
      };
      gridRef.current?.api.setGridOption("domLayout", "autoHeight");
      return formatRow;
    });

    setRowData(rawData);
  }, [results]);
  const [colDefs, setColdefs] = useState();
  return (
    <div className="w-full h-screen">
      <AgGridReact<DYEINPUTS | null>
        ref={gridRef}
        rowData={rowData}
        columnDefs={[
          { field: "Cantidad" },
          { field: "Peso por tarro (g)" },
          { field: "Cantidad de gotas" },
          { field: "Costo por gota (cop)" },
          { field: "Costo por tarro (cop)" },
        ]}
        defaultColDef={{ filter: true }}
        pagination
      />
    </div>
  );
}
