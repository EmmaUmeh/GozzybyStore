    import React, {useState} from "react";
    
    import {BiUser,BiMenuAltLeft,BiX} from "react-icons/bi"
    import {BsHeart,BsCart3} from "react-icons/bs";
//    import { Flex, } from "@chakra-ui/react";
import Searchitems from "./SearchItems";

    const NavbarComponent = (props) => {
     const [toggle,setToggle] = useState(false);

   const ToggleMenu = () => setToggle(!toggle);
        
    const Navlists = [];
    const Navholders = props.Navholders;
    for(let occurence = 0; occurence < Navholders.length; occurence++) {
    const Navholder = Navholders[occurence];
    const Navlist =
     <div className="Navbarcontainer" key={Navholder.id}>

   


<div 
style={{
    display:"flex", justifyContent:"space-around",alignItems:"center",padding:"10px 5px 10px 5px"
}}>

        <div className="Navlogo" >
    <img src={Navholder.Navlogo} alt={Navholder.NavlogoAlt}/>
    </div>

 
<div className={toggle ? 'Navchildsearch' : 'Navchildsearch expanded'}>
<div>
    <Searchitems />
 </div>

    <div className="useroptions">

        <div className="UserAccount">
         <BiUser size="25"/>
         
        <div className="NavAccountText">
        
        <div>
        {Navholder.Navsignin}
        </div>

        <div className="NavAccount">
        {Navholder.NavAccount}
        </div>
        </div>
       
        </div>

        <div>
            <BsHeart size="25"/>
            <span className="badgecounter">
            
            </span>
           
        </div>

 <div>

    <BsCart3 size="25"/>
            {/* <span className="navcart">
                {Navholder.NavCart}
           </span> */}
 </div>

    </div>
</div>


       <div onClick={ToggleMenu} className="Navmenu">
        {
            toggle ?
            <BiX size="30"/>
            :
            <BiMenuAltLeft size="30"/>
        }
       </div>
    
</div>




    </div>

    Navlists.push(Navlist);
    }

        return(

        <div>
            {Navlists}
        
        </div>
        )
    }

    export const Navbardata = [
        {
            id:0,
            Navlogo:"./assets/gozzybylogo.png",
            NavlogoAlt:"gozzybylogo",
            Navsignin:"Sign in",
            NavAccount:"Account",
            NavSelectAllCategories:"All Categories",
        }
    ]
    export default NavbarComponent;