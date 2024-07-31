import Button from "./Button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus} from '@fortawesome/free-solid-svg-icons'; 


function Filter() {
  return (
    <div className="flex justify-center gap-2 mb-1">
       <Button type="Filter">
       <FontAwesomeIcon icon={faPlus}/>
        Afican
        </Button>
       <Button type="Filter">
       <FontAwesomeIcon icon={faPlus}/>
        American
        </Button>
       <Button type="Filter">
       <FontAwesomeIcon icon={faPlus}/>
        Italian
        </Button>
       <Button type="Filter">
       <FontAwesomeIcon icon={faPlus}/>
        Japanese
        </Button>
        
      
    </div>
  )
}

export default Filter
