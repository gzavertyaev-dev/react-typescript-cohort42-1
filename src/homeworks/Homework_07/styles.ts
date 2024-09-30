import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  gap: 50px;
  padding: 100px;
`;
export const SuccessModalWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  gap: 40px;
`;

export const ModalInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export const ModalInfo = styled.div`
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  color: purple;
`;

export const ModalIcon = styled.img`
  width: 200px;
  height: 200px;
`;
