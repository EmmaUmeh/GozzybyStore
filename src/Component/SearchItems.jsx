import { Button } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const Searchitems = (props) => {
    return(
        <div className="Navinputcont">
             <div className="Navinput">
        <input type="text" placeholder="Search items,electronics"
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}
        />

        <Button backgroundColor="#38B6FF" padding="8px 15px 8px 15px" borderRadius="5px" positive="relative" right="48px">
         <BsSearch/>
        </Button>
    </div>
        </div>
    )
}

export default Searchitems;