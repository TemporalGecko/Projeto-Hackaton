// import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-[100vh] w-[100vw]">
      {/* <button className="absolute rounded-lg font-bold px-8 py-2 bg-white text-[#181818] opacity-80 mt-[20rem] ml-[48rem] hover:opacity-100 hover:scale-125 transition-all">Amazônia</button>
      <button className="absolute rounded-lg font-bold px-8 py-2 bg-white text-[#181818] opacity-80 mt-[34rem] ml-[62.5rem] hover:opacity-100 transition-all hover:scale-125">Cerrado</button>
      <button className="absolute rounded-lg font-bold px-8 py-2 bg-[#181818] text-[#f7f7f7] opacity-80 mt-[20rem] ml-[77rem] hover:opacity-100 transition-all hover:scale-125">Caatinga</button>
      <button className="absolute rounded-lg font-bold px-8 py-2 bg-[#181818] text-[#f7f7f7] opacity-80 mt-[48rem] ml-[64rem] hover:opacity-100 transition-all hover:scale-125">Mata Atlântica</button>
      <button className="absolute rounded-lg font-bold px-8 py-2 bg-[#181818] text-[#f7f7f7] opacity-80 mt-[37rem] ml-[47rem] hover:opacity-100 transition-all hover:scale-125">Pantanal</button>
      <button className="absolute rounded-lg font-bold px-8 py-2 bg-[#181818] text-[#f7f7f7] opacity-80 mt-[54rem] ml-[52rem] hover:opacity-100 transition-all hover:scale-125">Pampa</button>

      <div className="h-[100vh] w-[100vw] flex flex-col justify-center items-center gap-8">
        <h1 className="text-black font-bold text-4xl">Biomas</h1>
        <Image className="h-[80vh] w-fit" src={"/mapaBiomas.png"} alt="" width={1080} height={1080} />
      </div> */}
      
      <div className="flex flex-col justify-center items-center mt-52 font-mono">

        <p className="normal-case text-black font-medium text-7xl bg-slate-300 border rounded-md p-1 w-fit mb-10 ">Energia Renovável</p>
        <p className="normal-case text-black font-bold text-2xl bg-slate-300 border rounded-md p-1 w-fit mb-16 ">&#34;Em busca de um futuro melhor&#34;</p>

        <Link href={"/mapa"} className="py-2.5 px-5 text-3xl font-medium text-gray-900 focus:outline-none bg-white rounded-lg border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 ">Começar</Link>

      </div>

    </main>

  );
}
