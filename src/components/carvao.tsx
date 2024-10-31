import { faFire } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

export function BotaoCarvao(){
    return(
        <Link href={"/mapa/?carvao=true"} className="flex justify-center items-center absolute p-2 h-12   w-12 rounded-full bg-slate-200 mt-[30rem] ml-[57.5rem] hover:scale-125 transition-all">    
            <FontAwesomeIcon color='#181818' height={38} icon={faFire} />
        </Link>
    )
}