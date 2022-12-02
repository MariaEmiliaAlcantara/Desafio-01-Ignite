import {
  ButtonCreateNewTask,
  ContainerNewTask,
  InputNewTask,
} from "./NewTask.styles";
import { PlusCircle } from "phosphor-react";

export const NewTask = () => {
  return (
    <ContainerNewTask>
      <InputNewTask placeholder="Adicione uma nova tarefa" />
      <ButtonCreateNewTask>
        Criar <PlusCircle size={16} />
      </ButtonCreateNewTask>
    </ContainerNewTask>
  );
};
