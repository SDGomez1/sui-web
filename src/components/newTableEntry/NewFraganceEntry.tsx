"use client";

import { useState } from "react";
import FileReadingInput from "../calculator/fileReadingInput";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { csvDataResponse } from "@/hooks/useReadCsv";
import WaxInputs from "../tables/WaxInputs";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import FraganceDialog from "../dialogs/FraganceDialog";

export default function NewFraganceEntry() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<csvDataResponse | undefined>();

  const sendToDB = useMutation(api.fragance.addNewFragance);
  return (
    <div className="flex gap-10 w-full justify-center items-center">
      <FraganceDialog />
      <FileReadingInput
        fieldType="fragance"
        setOpen={setIsOpen}
        setData={setData}
      />
      <Dialog open={isOpen} onOpenChange={() => {}}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="font-medium">
              Vista previa de los datos
            </DialogTitle>
            <DialogDescription>
              La tabla siguiente te mostrara la vista previa de los datos a
              cargar
            </DialogDescription>
          </DialogHeader>
          <WaxInputs data={data} handleData />
          <DialogFooter>
            <Button
              onClick={() => {
                setIsOpen(false);
                setData(undefined);
              }}
              variant="destructive"
            >
              Cancelar
            </Button>
            <Button
              onClick={() => {
                data?.content.forEach((column) => {
                  sendToDB({
                    type: column[0],
                    price: Number(column[1].replaceAll(/[^\d.]/g, "")),
                    weight: Number(column[2].replaceAll(/[^\d.]/g, "")),
                    date: column[3],
                  });
                });
                setIsOpen(false);
                setData(undefined);
              }}
            >
              Subir a base de datos
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
