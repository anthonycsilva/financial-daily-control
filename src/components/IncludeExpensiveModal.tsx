import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  ModalOverlay,
} from "@chakra-ui/react";

interface IIncludeExpensiveModalProps {
  onClose: () => void;
  isOpen: boolean;
  children?: React.ReactNode;
}

const IncludeExpensiveModal: React.FC<IIncludeExpensiveModalProps> = (
  props
) => {
  const overlay = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  return (
    <>
      <Modal isCentered isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent>
          <ModalHeader>New Expense</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <h3>Custom backdrop filters!</h3>
          </ModalBody>
          <ModalFooter>
            <Button onClick={props.onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default IncludeExpensiveModal;
