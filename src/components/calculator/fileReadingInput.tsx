"use client";
import { inputType, useReadCsv } from "@/hooks/useReadCsv";
import { Input } from "../ui/input";

export default function FileReadingInput({
  fieldType,
}: {
  fieldType: inputType;
}) {
  const { setFiles } = useReadCsv({ fieldType });
  return (
    <Input
      type="file"
      accept=".csv"
      onChange={(e) => {
        const fileList = e.target.files;
        if (fileList?.length === 0) {
          return;
        }
        setFiles(fileList);
      }}
    />
  );
}
