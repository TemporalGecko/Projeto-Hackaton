import { faOilWell } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function BotaoPetroleo(){
    return(
        <div className="flex justify-center items-center absolute p-2 h-12   w-12 rounded-full bg-slate-200 mt-[8.5rem] ml-[40rem] hover:scale-125 transition-all">    
            <FontAwesomeIcon color='#181818' height={40} icon={faOilWell} />
        </div>
    )
}