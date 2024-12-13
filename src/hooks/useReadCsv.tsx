import {
  DYEINPUTS,
  FRAGANCEINPUTS,
  JARINPUTS,
  STICKERTAGINPUTS,
  WAXINPUTS,
} from "@/lib/constants";
import { useCallback, useEffect, useState } from "react";
import { useDebounce } from "./useDebounce";

export type inputType = "wax" | "fragance" | "jar" | "stickerTag" | "dye";

export interface csvDataResponse {
  headers: string[];
  content: string[][];
}

const defaultValue = {
  headers: [],
  content: [[]],
};
export function useReadCsv({ fieldType }: { fieldType: inputType }) {
  const [files, setFiles] = useState<FileList | null>(null);
  const [response, setResponse] = useState<csvDataResponse>(defaultValue);
  const debouncedFile = useDebounce(files, 1000);
  const readFile = useCallback(async () => {
    if (!files) {
      setResponse(defaultValue);
      return;
    }

    const file: File = files[0];
    let text = await file.text();
    text = text.replaceAll(/\r|\t/g, "");
    const rows: string[] = text.split("\n");
    const headerRows = rows.slice(0, 1);
    const contentRows = rows.slice(1);
    const { scheme } = matchSchemeInput(fieldType, headerRows);
    if (scheme.length <= 0) {
      setResponse(defaultValue);
      return;
    }
    const content = formatData(contentRows);

    setResponse({ headers: scheme, content });
  }, [debouncedFile]);

  useEffect(() => {
    readFile();
  }, [debouncedFile]);
  return {
    setFiles,
    response,
  };
}

function matchSchemeInput(inputType: inputType, data: string[]) {
  interface returnValues {
    scheme: string[];
  }
  let isValid = false;
  let values: returnValues = {
    scheme: [],
  };

  const contentColumns = data[0].split(",");
  switch (inputType) {
    case "wax":
      values.scheme = WAXINPUTS;
      break;

    case "dye":
      values.scheme = DYEINPUTS;
      break;

    case "jar":
      values.scheme = JARINPUTS;
      break;

    case "stickerTag":
      values.scheme = STICKERTAGINPUTS;
      break;

    case "fragance":
      values.scheme = FRAGANCEINPUTS;
      break;

    default:
      break;
  }
  if (values.scheme.length <= 0) {
    return values;
  }
  for (let index = 0; index < values.scheme.length; index++) {
    if (!contentColumns[index]) {
      break;
    }
    isValid =
      values.scheme[index].replaceAll(" ", "").toLowerCase() ===
      contentColumns[index].replaceAll(" ", "").toLowerCase();
  }
  if (!isValid) {
    values.scheme = [];
  }
  return values;
}

function formatData(data: string[]) {
  let values: string[][] = [[]];
  for (let j = 0; j < data.length; j++) {
    const columns = data[j].split(/,(?=(?:[^"]*"[^"]*")*[^"]*$)/g);
    values[j] = [];
    for (let k = 0; k < columns.length; k++) {
      if (columns[k] === "" || columns[k] === " ") {
        break;
      }
      values[j][k] = columns[k];
    }
  }
  return values.filter((arr) => arr.length > 0);
}
