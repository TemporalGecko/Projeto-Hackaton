import Link from "next/link";
import Image from "next/image";

export function CardBiomassa() {
    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
            <div className="flex flex-row border w-[60vw] h-[60vh] shadow-lg rounded-xl bg-white overflow-auto">
                <Image className="w-[40%]" src={"/biomassa.jpg"} height={1472} width={2000} alt="" />
                <div className="">
                    <h1 className="flex justify-center items-center text-black font-mono " >Biomassa</h1>
                    <p className="text-black ">Estados:
Mato Grosso do Sul

	Características:
Biomassa corresponde ao conjunto de resíduos de origem animal ou vegetal utilizado na produção de energia, oriunda de fontes como vegetais lenhosos, cultivo agrícola e resíduos urbanos e industriais. A energia gerada a partir da biomassa, que são calor e eletricidade, é produzida por meio da combustão direta ou de processos de conversão termoquímica.


	Vantagens:

A biomassa é uma fonte de energia natural e renovável, visto que sua produção é parte do ciclo de carbono do planeta. Além do mais, os processos de geração de energia a partir da biomassa emitem poucos gases poluentes na atmosfera.
poggers
Desvantagens:

Uma das principais desvantagens da biomassa é o impacto que ela pode gerar ao meio ambiente, isso porque sua obtenção leva ao desmatamento de áreas e/ou à substituição da vegetação original por cultivo agrícola.

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
