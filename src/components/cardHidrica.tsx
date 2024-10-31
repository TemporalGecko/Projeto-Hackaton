import Link from "next/link";
import Image from "next/image";

export function CardHidrica(){
    return(
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
        <div className="flex flex-row border w-[60vw] h-[60vh] shadow-lg rounded-xl bg-white overflow-auto">
            <Image className="w-[40%]" src={"/eolica.jpeg"} height={1472} width={2000} alt="" />
            <div>
                <h1>Hídrica</h1>
                <p>Estados:
                    tire iso
Rondônia
Amapá
pará
tocantins
Mato Grosso
Minas Gerais
Goiás
Alagoas
São Paulo
Paraná
Rio Grande do Sul
Santa Catarina


	Caracteristicas:
Fonte de energia mais utilizada no Brasil e a terceira mais utilizada no mundo, ficando atrás do carvão e do gás natural. Gera eletricidade a partir da força da água, rotacionando as turbinas dos geradores e transformando a energia potencial em energia cinética. 

	Vantagens:
É uma energia limpa e renovável, visto que é um recurso em abundância no planeta e não poluente, além de ser mais barata que as demais.

	Desvantagens:
Altera consideravelmente a região onde é alocada, principalmente com desmatamento, necessitando de uma vasta área.

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
