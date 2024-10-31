import { faDroplet } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function BotaoHidreletrica(){
    return(
        <div className="flex justify-center items-center absolute p-2 h-20 w-20 rounded-full bg-slate-200 mt-[20rem] ml-[46rem] hover:scale-125 transition-all">
            <FontAwesomeIcon color='#181818' height={48} icon={faDroplet} />
        </div>
    )
}