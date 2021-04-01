import styled from 'styled-components/native';

interface IContainerProps {
  modalVisible: boolean;
}

export const ModalContainer = styled.View<IContainerProps>`
  position: absolute;
  z-index: 1;
  height: ${({ modalVisible }) => (modalVisible ? '100%' : '0')};
  width: ${({ modalVisible }) => (modalVisible ? '100%' : '0')};
  background-color: ${({ modalVisible }) =>
    modalVisible ? '#000000' : 'transparent'};
  opacity: ${({ modalVisible }) => (modalVisible ? 0.4 : 1)};
`;

export default ModalContainer;
