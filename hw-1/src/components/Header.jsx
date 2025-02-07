import logo from '../ressource/img/logo.jpeg'
import basket from'../ressource/img/basket.png'
import './Header.css'
function Header () {
    return (
        <header>
            <div className='logo'>
                <img src={logo} alt="logo" />
            </div>
            <div className='nav'>
                <ul>
                    <li>Главная</li>
                    <li>Категория</li>
                    <li>Магазины</li>
                    <li>Аккаунт</li>
                </ul>
            </div>
            <div className='basket'>
                <img src={basket} alt="basket" />
            </div>
        </header>
    )
}
export default Header