import {
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalFooter,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  RadioGroup,
  Radio,
  Button,
} from "@chakra-ui/react";

import { useContext } from "react";
import { GlobalContext } from "../../context";

export default function TransactionForm({ onClose, isOpen }) {
  const {
    formData,
    setFormData,
    handleFormSubmit,
  } = useContext(GlobalContext);

  function handleFormChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleFormSubmit(formData);
    onClose();
  }



  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader >Add New Transaction</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <FormControl>
              <FormLabel>Description</FormLabel>
              <Input
                name="description"
                type="text"
                onChange={handleFormChange}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Amount</FormLabel>
              <Input
                name="amount"
                type="number"
                onChange={handleFormChange}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Type</FormLabel>

              <RadioGroup
                value={formData.type}
                onChange={(value) =>
                  setFormData({ ...formData, type: value })
                }
              >
                <Radio value="income" colorScheme="blue">
                  Income
                </Radio>

                <Radio value="expense" colorScheme="red" ml={3}>
                  Expense
                </Radio>
              </RadioGroup>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              Cancel
            </Button>

            <Button type="submit" colorScheme="blue">
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
}