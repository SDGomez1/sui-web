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
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import StickerTagDialog from "../dialogs/StickerTagDialog";
import StickerTagInputs from "../tables/StickerTagInputs";

export default function NewStickerTagEntry() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<csvDataResponse | undefined>();

  const sendToDB = useMutation(api.jar.addNewJar);
  return (
    <div className="flex gap-10 w-full justify-center items-center">
      <StickerTagDialog />
      <FileReadingInput fieldType="jar" setOpen={setIsOpen} setData={setData} />
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
          <StickerTagInputs data={data} handleData />
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
                    quantity: Number(column[2].replaceAll(/[^\d.]/g, "")),
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
