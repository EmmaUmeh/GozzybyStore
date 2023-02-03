    import React,{useState} from "react";
    import { Container } from 'react-bootstrap';
    import {BiUser,BiMenuAltLeft,BiX} from "react-icons/bi"
    import {BsHeart,BsCart3,BsSearch} from "react-icons/bs";
    import Badge from 'react-bootstrap/Badge';

    const NavbarComponent = (props) => {
     const [toggle,setToggle] = useState(false);

   const ToggleMenu = () => setToggle(!toggle);
        
    const Navlists = [];
    const Navholders = props.Navholders;
    for(let occurence = 0; occurence < Navholders.length; occurence++) {
    const Navholder = Navholders[occurence];
    const Navlist =
    <div className="Navbarcontainer" key={Navholder.id}>

    <Container>
        <div className="Navchild">
        <div className="Navlogo">
    <img src={Navholder.Navlogo} alt={Navholder.NavlogoAlt}/>
    </div>

    <div className="Navinput">
        <input type="text" placeholder={Navholder.NavPlaceholder}/>
        <button className="Navsearch"><BsSearch/></button>
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
            <Badge bg="danger">0</Badge>
            </span>
           
        </div>

 <div>

    <BsCart3 size="25"/>
    <span className="badgecounter">
            <Badge bg="danger">0</Badge>
    </span>
            <span className="navcart">
                {Navholder.NavCart}
           </span>
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
    </Container>

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
            NavCart:"Total",
            NavPlaceholder:"Search for products..",
            NavSelectAllCategories:"All Categories",
        }
    ]
    export default NavbarComponent;