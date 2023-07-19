import { ButtonAdd, ButtonCancel, FooterContainer, HeaderModal, MainModal, ModalContainer, SubMenu } from "./styles";
import { ModalProps } from "../Veiculos";

export function Modal({closeModal}: ModalProps) {
    return(
        <ModalContainer>
            <HeaderModal>Nome da nave</HeaderModal>
            <MainModal>
                <SubMenu>teste</SubMenu>
                <SubMenu>teste</SubMenu>
            </MainModal>
            <FooterContainer>
                <ButtonAdd>Adicionar</ButtonAdd>
                <ButtonCancel onClick={closeModal}>Cancelar</ButtonCancel>
                </FooterContainer>
        </ModalContainer>
    )
}