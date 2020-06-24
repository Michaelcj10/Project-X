import * as React from "react";
import styled from "styled-components";
import HyperModal from "react-hyper-modal";
import Input from "../../atoms/inputs/input";
import Button from "../../atoms/buttons/button";
import close from "../../../images/close.png";

const ModalStyle = styled.div`
>div{
  z-index: 1;
}
.fullscreen {
    width: 100%;
    height: 100%;
    border-radius: 0px;
    background: #23293a;
  }

  .content {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 90%;
    max-width: 540px;
    margin: auto;
    margin-top: 20vh;
  }
  .content > * {
    flex-grow: 1;
    min-width: 100%;
    margin-bottom: 25px;
  }
  button{
    width: 100%;
  }

  h2{
    color: white;
  }
  i{
    background-image:url(${close})
  }
`;

interface Props {
    showModal: boolean;
    setModalShowing: (showing: boolean) => void;
}

function Modal(props: Props) {

  return (
    <div>
       <ModalStyle>
        <HyperModal
          
          disableScroll={true}
          closeOnEscClick={true}
          unmountOnClose={true}
          isFullscreen={true}
          isOpen={props.showModal}
          requestClose={() => {
            props.setModalShowing(false);
          }}
        >
          <div className="content">
            <h2>Let's get you online!</h2>
            <form
              onSubmit={(e: React.FormEvent) => {
        
                e.preventDefault();
              }}
            >
              <Input label="Enter email or phone number" />
              <br />
              <Button type="submit" text="Submit" />
            </form>
          </div>
        </HyperModal>
      </ModalStyle>
    </div>
  );
}

export default Modal;
