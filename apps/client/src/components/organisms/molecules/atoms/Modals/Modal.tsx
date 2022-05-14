import { useEffect } from "react";
import styled, { FlattenSimpleInterpolation } from "styled-components";
import { Device, Zindex } from "styles";
import { Activable, Modal as IModal, Stylable } from "types";

interface IModalProps extends IModal {
  contentStyles?: FlattenSimpleInterpolation;
  side?: "right" | "left";
  center?: boolean;
}
export const Modal: React.FC<IModalProps> = ({
  on,
  toggle,
  contentStyles,
  children,
  center,
  side,
}) => {
  useEffect(() => {
    if (on) {
      document.querySelector("body").style.overflowY = "hidden";
    } else {
      document.querySelector("body").style.overflowY = "";
    }
  }, [on]);

  return (
    <ModalComponent active={on} side={side}>
      <ModalBackdrop onClick={toggle} />
      <ModalContent center={center} Style={contentStyles}>
        {children}
      </ModalContent>
    </ModalComponent>
  );
};

interface ModalComponentProps extends Activable {
  side?: "right" | "left";
}
const ModalComponent = styled.div<ModalComponentProps>`
  width: 100vw;
  height: 100vh;

  display: ${(props) => (props.active ? "flex" : "none")};

  position: fixed;
  top: 0;
  left: 0;

  // TODO: implement sides

  justify-content: center;
  align-items: center;

  z-index: ${Zindex.modal};
`;

const ModalBackdrop = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.5);

  z-index: ${Zindex.modalBackdrop};

  &:hover {
    cursor: pointer;
  }
`;

interface ModalContentProps extends Stylable {
  center?: boolean;
}
const ModalContent = styled.div<ModalContentProps>`
  position: absolute;
  bottom: ${(props) => props.center ? "auto" : "0"};
  top: ${(props) => props.center ? "50%" : "auto"};
  left: 50%;
  transform: translate(${(props) => props.center ? "-50%, -50%" : "-50%"});

  z-index: ${Zindex.modalContent};

  @media (${Device.desktop}) {
   bottom: auto;
   top: 50%;
   transform: translate(-50%, -50%);
  }

  ${(p) => p.Style}
`;
