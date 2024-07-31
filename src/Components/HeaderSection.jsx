/* eslint-disable react/prop-types */
import Filter from "./Filter"
import Logo from "./Logo"
import Search from "./Search"

function HeaderSection({filtered, setFiltered}){
   
    return (
        <section className="mx-28">
            <Logo/>
            <Search filtered={filtered} setFiltered={setFiltered}/>
            <Filter/>

        </section>
        
    )
}
export default HeaderSection