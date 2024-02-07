import Button from './UI/Button.jsx';

import logoImg from '../assets/logo.jpg'
import { useContext } from 'react';
import CartContext from '../store/CartContext.jsx';
import UserProgressContext from '../store/UserProgressContext.jsx';

export default function Header() {
   const crtCtx= useContext(CartContext);
   const UserProgressCtx= useContext(UserProgressContext);

    const totalCartItems=crtCtx.items.reduce((totalNumberOfItems, item)=>{

        return  totalNumberOfItems + item.quantity;
    },0);

    function handleShowCart()
    {
        UserProgressCtx.showCart();
    }

    return (<header id="main-header">


        <div id="title">

            <img src={logoImg} alt="A restaurant" />
            <h1>ReactFood</h1>
        </div>

        <nav>


            <Button textOnly onClick={handleShowCart}>Cart ({totalCartItems})</Button>

          

        </nav>

    </header>
    );

}