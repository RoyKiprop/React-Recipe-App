/* eslint-disable react/prop-types */
import Filter from "./Filter"
// import Logo from "./Logo"
import Search from "./Search"

function HeaderSection(){
   
    return (
        <section className="mx-28">
            {/* <Logo/> */}
            <Search/>
            <Filter/>

        </section>
        
    )
}
export default HeaderSection