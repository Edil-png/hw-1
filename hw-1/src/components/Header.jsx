import Logo from './ui/Logo/Logo'
import Nav from './Nav/Nav'
import Basket from './Basket/Basket'
import './Header.css'
function Header () {
    return (
        <header>
            <Logo/>
           <Nav/>
            <Basket/>
        </header>
    )
}
export default Header