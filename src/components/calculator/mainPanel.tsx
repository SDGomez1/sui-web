import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

export default function MainPanel() {
    return (
        <section className="flex justify-center gap-10  w-full ">
            <div className="w-1/2 bg-red-50">
            </div>
            <Card className="w-1/2  flex flex-col items-center px-40 ">
                <CardHeader className="w-full  text-center" >
                    <CardTitle> Resumen de Calculo</CardTitle>
                    <CardDescription className="!mb-4">
                        Costos asociados a las medidas dadas
                    </CardDescription>
                    <span className="border h-[1px] w-full " />
                </CardHeader>
                <CardContent className="w-full">
                    <section className="w-full">
                        <h2 className="font-medium">Cera</h2>
                        <div className="flex text-sm text-neutral-500 justify-between items-center w-full pl-4">
                            <h3>Parafina</h3>
                            <p>20</p>
                        </div>
                        <h2 className="font-medium">Fragancia</h2>
                        <div className="flex text-sm text-neutral-500 justify-between items-center w-full pl-4">
                            <h3>Parafina</h3>
                            <p>20</p>
                        </div>
                        <h2 className="font-medium">Tinte</h2>
                        <div className="flex text-sm text-neutral-500 justify-between items-center w-full pl-4">
                            <h3>Parafina</h3>
                            <p>20</p>
                        </div>
                        <h2 className="font-medium">Frascos</h2>
                        <div className="flex text-sm text-neutral-500 justify-between items-center w-full pl-4">
                            <h3>Parafina</h3>
                            <p>20</p>
                        </div>

                        <h2 className="font-medium">Etiquetas</h2>
                        <div className="flex text-sm text-neutral-500 justify-between items-center w-full pl-4">
                            <h3>Parafina</h3>
                            <p>20</p>
                        </div>
                        <h2 className="font-medium">Opcionales</h2>
                        <div className="flex text-sm text-neutral-500 justify-between items-center w-full pl-4">
                            <h3>Parafina</h3>
                            <p>20</p>
                        </div>

                    </section>


                </CardContent>
            </Card>
        </section>
    )
}
