/* eslint-disable react/prop-types */
import Filter from "./Filter"
import Logo from "./Logo"
import Search from "./Search"


function HeaderSection(){
   
    return (
        <div className="mx-8 md:mx-28">
            <Logo/>
            <Search/>
            <Filter/>
            
            
        </div>
        
    )
}
export default HeaderSection