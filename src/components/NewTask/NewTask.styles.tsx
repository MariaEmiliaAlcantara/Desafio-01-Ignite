import styled from "styled-components";

export const ContainerNewTask = styled.div`
  height: 6vh;

  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: -3vh;
`;

export const InputNewTask = styled.input`
  height: 100%;
  width: 44vw;
  min-width: 30vw;

  border: 1px solid var(--gray-700);
  border-radius: 8px;

  padding: 1rem;

  background-color: var(--gray-500);
  color: var(--gray-300);
  font-size: 1rem;
  line-height: 140%;
`;

export const ButtonCreateNewTask = styled.button`
  height: 100%;
  min-width: 6.2vw;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  background-color: var(--blue-dark);
  color: var(--gray-100);
  border: none;
  border-radius: 8px;

  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: var(--blue);
  }
`;
