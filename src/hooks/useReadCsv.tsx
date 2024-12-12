import {
  DYEINPUTS,
  FRAGANCEINPUTS,
  JARINPUTS,
  STICKERTAGINPUTS,
  WAXINPUTS,
} from "@/lib/constants";
import { useCallback, useState } from "react";

export type inputType = "wax" | "fragance" | "jar" | "stickerTag" | "dye";

export function useReadCsv({ fieldType }: { fieldType: inputType }) {
  const [files, setFiles] = useState<FileList | null>(null);

  const readFile = useCallback(async () => {
    if (!files) {
      return;
    }

    const file: File = files[0];
    let text = await file.text();
    console.log(text);
    text = text.replaceAll(/\r|\t/g, "");
    const rows: string[] = text.split("\n");
    const headerRows = rows.slice(0, 1);
    const contentRows = rows.slice(1);
    const { scheme, isValid } = matchSchemeInput(fieldType, headerRows);
    console.log(scheme);
    console.log(isValid);
  }, [files]);

  readFile();
  return {
    setFiles,
  };
}

function matchSchemeInput(inputType: inputType, data: string[]) {
  interface returnValues {
    scheme: string[];
    isValid: boolean;
  }

  let values: returnValues = {
    scheme: [],
    isValid: false,
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
    if (!data[index]) {
      break;
    }
    values.isValid =
      values.scheme[index].replaceAll(" ", "").toLowerCase() ===
      contentColumns[index].replaceAll(" ", "").toLowerCase();
  }

  return values;
}
