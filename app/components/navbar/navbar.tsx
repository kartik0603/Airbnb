// import { Container } from "postcss";

'use client';
import Container from "../container";
import Logo from "./logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

const Navabar =()=>{
    return (
        <div className="fixed w-full bg-white z-10 shadow-sm">
          <div className="py-1 
          border-b-[1px]">

           
<Container>
    <div className="flex
    flex-row
    items-center
    justify-between
    gap-3
    md:gap-0"
    >
  <Logo/>
  <Search/>
  <UserMenu />
    </div>
</Container>



          </div>
        </div>
    )
}

export default Navabar;