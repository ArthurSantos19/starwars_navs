import { ButtonAdd, ButtonCancel, FooterContainer, HeaderModal, MainModal, ModalContainer, SubMenu, SubMenuImg, DivDeta } from "./styles";
import { ModalProps } from "../Veiculos";
import { imageMap } from "../Veiculos";

export function Modal({closeModal, vehicle}: ModalProps) {
    const imageName = vehicle?.name ? vehicle.name : 'default';
    return(
        <ModalContainer>
            <HeaderModal><h3>{vehicle?.name}</h3></HeaderModal>
            <MainModal>
                <SubMenuImg>{imageMap[imageName] && <img src={imageMap[imageName]} alt={imageName} />}</SubMenuImg>
                <SubMenu>
                    <h4>Detalhes técnicos:</h4>
                    <DivDeta>Modelo: <p> {vehicle?.model}</p></DivDeta>
                    <DivDeta>Tamanho: <p>{vehicle?.length}</p></DivDeta>
                    <DivDeta>Passageiros: <p> {vehicle?.passengers}</p></DivDeta>
                    <DivDeta>Equipe: <p>{vehicle?.crew}</p></DivDeta>
                    <DivDeta>Capacidade de carga: <p> {vehicle?.cargo_capacity}</p></DivDeta>
                    
                </SubMenu>
            </MainModal>
            <FooterContainer>
                <ButtonAdd>Adicionar</ButtonAdd>
                <ButtonCancel onClick={closeModal}>Cancelar</ButtonCancel>
                </FooterContainer>
        </ModalContainer>
    )
}