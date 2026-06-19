import { useState } from "react";
import Card_head from "./Card_for_header";
function Header(){
    const [count,setCount] = useState(0);
    function handlechange(){
        setCount(count+1);
    }
    return(
        <>
        <div className="header-container">
        <Card_head name="webFlow"/>
        <Card_head name="Products"/>
        <Card_head name="Resoureces"/>
        <Card_head name="Enterprice"/>
        <Card_head name="Hire an expert"/>
        </div>
        <hr />
        </>
    )
}
export default Header;