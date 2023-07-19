import { HeaderContainer } from "./styles";
import logo from '../../../public/star-wars-logo.svg'

export function Header() {
    return(
        <HeaderContainer>
            <img src={logo} alt="Star Wars logo" />
        </HeaderContainer>
    )
}