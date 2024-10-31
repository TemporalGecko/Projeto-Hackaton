import Link from "next/link";
import Image from "next/image";

export function CardGas(){
    return(
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
        <div className="flex flex-row border w-[60vw] h-[60vh] shadow-lg rounded-xl bg-white overflow-auto">
            <Image className="w-[40%]" src={"/eolica.jpeg"} height={1472} width={2000} alt="" />
            <div>
                <h1>Gás Natural</h1>
                <p>Estados:
Sergipe
Maranhão 
Amazônia


	Características:
O gás natural é um combustível de origem fóssil composto por uma mistura de hidrocarbonetos como o metano e o etano. Ele é encontrado em depósitos subterrâneos comumente associados ao petróleo, mas pode ocorrer também de maneira isolada.

	Vantagens:
Uma de suas principais vantagens é o fato de ele emitir menos gases poluentes na atmosfera do que os derivados de petróleo e não gerar outros tipos de resíduos.

	Desvantagens:
O gás natural é um combustível não renovável, portanto finito na natureza, o que constitui a sua principal desvantagem, além de aspectos como inflamabilidade e produção de componentes tóxicos.
</p>
                <div className="flex justify-center mt-4">
                    {/* Navigates back to the base URL - closing the modal */}
                    <Link
                    href="/mapa"
                    className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
                    >
                    Fechar
                    </Link> 
                </div>
            </div>
        </div>
        </div>
  );
}
