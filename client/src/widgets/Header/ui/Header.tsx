import { Link } from 'react-router-dom'
import { PiPlusBold } from "react-icons/pi";
import { FaRegCopy } from "react-icons/fa";
import { HeaderItem, HeaderWrapper, HeaderLeft, HeaderRight } from './styles/style';
import { useAuth } from '../../../app/context/AuthContex';

function Header() {
    const { user, logout } = useAuth()

    return (
        <HeaderWrapper>
            <HeaderLeft>
                <HeaderItem>
                    <span>{user?.username}</span>
                    <span>|</span>
                    <button onClick={logout}>Выйти</button>
                </HeaderItem>
            </HeaderLeft>
            <HeaderRight>
                <HeaderItem>
                    <Link className='create-ad' to='/form'><PiPlusBold />Разместить объявление</Link>
                </HeaderItem>
                <HeaderItem>
                    <Link className='list-ads' to='/list'><FaRegCopy />Мои объявления</Link>
                </HeaderItem>
            </HeaderRight>
        </HeaderWrapper>
    )
}

export default Header