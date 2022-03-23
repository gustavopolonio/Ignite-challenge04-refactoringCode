import { Dispatch, SetStateAction, useRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import { Modal } from '../Modal';
import { Input } from '../Input';
import { FormHandles } from '@unform/core';

interface Food {
  id: number,
  name: string,
  description: string,
  price: string,
  available: boolean,
  image: string
}

interface ModalAddFoodProps {
  isOpen: boolean,
  setIsOpen: Dispatch<SetStateAction<boolean>>,
  handleAddFood: (food: Food) => Promise<void>
}

export const ModalAddFood = ({ isOpen, setIsOpen, handleAddFood }: ModalAddFoodProps) => {
  const formRef = useRef<FormHandles>(null)

  const handleSubmit = async (data: Food) => {
    console.log('data', data)
    handleAddFood(data);
    setIsOpen(false);
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={e => handleSubmit(e)}>
        <h1>Novo Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" icon={undefined} />

        <Input name="name" placeholder="Ex: Moda Italiana" icon={undefined}/>
        <Input name="price" placeholder="Ex: 19.90" icon={undefined}/>

        <Input name="description" placeholder="Descrição" icon={undefined}/>
        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );

};