import styled from 'styled-components'
import { useSelector, useDispatch } from "react-redux"

import { RootState } from "../../store/store"
import { login, logout } from '../../store/authSlice'


const Header = () => {
    const dispatch = useDispatch()

    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)

    const logoutHandler = (): void => {
        dispatch(logout())
    }
    const loginHandler = ():void =>{
        dispatch(login({isAuthenticated:true,username:"safwan"}))
    }
    return (
        <Wrapper>
            <h1>Header</h1>
            <Nav>
                <ul>
                    <li>Home</li>
                    {isAuthenticated ? (
                        <li onClick={logoutHandler}>Logout</li>
                    ) : (
                        <li onClick={loginHandler}>Login</li>
                    )}
                </ul>
            </Nav>
        </Wrapper>
    )
}

export default Header


const Wrapper = styled.header`
    padding: 12px 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #555555;

    h1{
        cursor: pointer;
    }
    `
const Nav = styled.nav`
    ul{
        display: flex;
        align-items: center;
        gap: 24px;

        li{
            cursor: pointer;
        }
    }
`