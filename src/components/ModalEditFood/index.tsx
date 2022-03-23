import { Component, createRef, Dispatch, SetStateAction, useRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import { Modal } from '../Modal';
import { Input } from '../Input';

interface EditFood {
  id: number,
  name: string,
  description: string,
  price: string,
  available: boolean,
  image: string
}

interface ModalEditFoodProps {
  isOpen: boolean,
  setIsOpen: Dispatch<SetStateAction<boolean>>,
  editingFood: EditFood,
  handleUpdateFood: (food: EditFood) => void
}

export const ModalEditFood = ({ isOpen, setIsOpen, editingFood, handleUpdateFood }: ModalEditFoodProps) => {
  const formRef = useRef(null)

  const handleSubmit = async (data: EditFood) => {
    handleUpdateFood(data);
    setIsOpen(false);
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={e => handleSubmit(e)} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};