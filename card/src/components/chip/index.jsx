import styled from "styled-components";

const ChipContainer = styled.div`
  width: ${(props) => props.width};
  height: 24px;
  border-radius: 4px;
  padding: 5px 8px;
  gap: 4px;
  color: #fff;
  background: ${(props) => props.background};

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export function Chip({ width, background, children }) {
  return (
    <ChipContainer width={width} background={background}>
      {children}
    </ChipContainer>
  );
}
