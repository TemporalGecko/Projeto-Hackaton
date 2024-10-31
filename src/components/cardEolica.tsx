import Link from "next/link";
import Image from "next/image";

export function CardEolica(){
    return(
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
        <div className="flex flex-row border w-[60vw] h-[60vh] shadow-lg rounded-xl bg-white overflow-auto">
            <Image className="w-[40%]" src={"/eolica.jpeg"} height={1472} width={2000} alt="" />
            <div>
                <h1>Eólica</h1>
                <p>Estados:
                    tire iso
Ceará
Rio Grande do Norte
Bahia
Piauí
Características da Energia Eólica
A energia eólica é gerada pela força dos ventos: a energia cinética do vento faz as pás das turbinas girarem, movimentando um gerador que converte essa energia em eletricidade; Fonte limpa e renovável: utiliza um recurso natural abundante em diversas regiões brasileiras, especialmente nas áreas litorâneas do Nordeste, onde os ventos são constantes e intensos.
Vantagens 
Sustentável e não poluente: a energia eólica não emite gases de efeito estufa durante sua geração, tornando-se uma alternativa mais ecológica em relação às fontes fósseis.
Menor impacto no consumo de água: ao contrário da energia hidrelétrica, a geração eólica não requer grandes volumes de água, sendo ideal para regiões secas ou com menor disponibilidade hídrica.
Desvantagens
Impacto visual e sonoro: as turbinas eólicas podem modificar a paisagem e gerar ruídos, o que pode afetar áreas residenciais próximas.
Intermitência: a geração de energia eólica depende das condições climáticas e da intensidade dos ventos, o que pode variar ao longo do tempo, tornando necessário o uso de fontes complementares para garantir a estabilidade da rede.
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
