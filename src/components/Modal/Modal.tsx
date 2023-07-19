import { ButtonAdd, ButtonCancel, FooterContainer, HeaderModal, MainModal, ModalContainer, SubMenu } from "./styles";

export function Modal() {
    return(
        <ModalContainer>
            <HeaderModal>Nome da nave</HeaderModal>
            <MainModal>
                <SubMenu>teste</SubMenu>
                <SubMenu>teste</SubMenu>
            </MainModal>
            <FooterContainer>
                <ButtonAdd>Adicionar</ButtonAdd>
                <ButtonCancel>Cancelar</ButtonCancel>
                </FooterContainer>
        </ModalContainer>
    )
}