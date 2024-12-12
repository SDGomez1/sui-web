"use client";
import { csvDataResponse, inputType, useReadCsv } from "@/hooks/useReadCsv";
import { Input } from "../ui/input";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { Button } from "../ui/button";

export default function FileReadingInput({
  fieldType,
  setOpen,
  setData,
}: {
  fieldType: inputType;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setData: Dispatch<SetStateAction<csvDataResponse | undefined>>;
}) {
  const { setFiles, response } = useReadCsv({ fieldType });
  const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    setData(response);
  }, [response]);

  return (
    <>
      <Input
        ref={inputRef}
        type="file"
        accept=".csv"
        className="hidden"
        onChange={(e) => {
          const fileList = e.target.files;
          if (fileList?.length === 0) {
            return;
          }
          setFiles(fileList);
          setOpen(true);
        }}
      />
      <Button variant={"outline"} onClick={() => inputRef.current?.click()}>
        Subir csv
      </Button>
    </>
  );
}
