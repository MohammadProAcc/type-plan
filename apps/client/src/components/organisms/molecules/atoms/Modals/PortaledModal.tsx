import styled, { keyframes } from "styled-components"
import { PortalContainer } from "../Containers"

interface IPortaledModalProps {
    on: boolean;
    toggle: any;
}

export const PortaledModal: React.FC<IPortaledModalProps> = ({ 
    on,
    toggle
 }) => {
    return (
        <PortalContainer wrapperId="modal-portal">
            <Component on={on}>
                <Content on={on}>Modal</Content>
                <Backdrop onClick={toggle}/>
            </Component>
        </PortalContainer> 
    )
}

const Component = styled.div<{on: boolean}>`
    width: 100vw;
    height: 100vh;
    
    position: fixed;
    top: 0;
    left: 0;

    opacity: ${props => props.on ? "1" : "0"};
    visibility: ${props => props.on ? "visible" : "hidden"};
    transition: 0.1s;

    display: flex;
    align-items: center;
    justify-content: center;

    color: #000;
    background-color: rgba(255,255,255,0.25);
`

const Backdrop = styled.div`
    width: 100vw;
    height: 100vh;

    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;

    cursor: pointer;

    background-color: rgba(0,0,0,0.5);
`

const ContentAnimation = keyframes`
    from {
        opacity: 0;
        transform: translateY(1rem);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
`

const Content = styled.div<{on: boolean}>`
    padding: 1rem;
    background-color: pink;

    z-index: 1;

    animation: ${props => props.on && ContentAnimation} 0.5s forwards;
`