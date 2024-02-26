import { useState } from 'react';
import LoginModal from '../components/ModalsComponents/LoginModal';
import Search from '../components/HomeComponents/Search';
import { useSelector } from 'react-redux';
import Modal from 'react-modal';
import BusinessModal from '../components/ModalsComponents/BusinessModal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#body');

const LoginScreen = () => {
  const userLogin = useSelector((state: any) => state.userLogin);
  const { userInfo } = userLogin;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modaManagerIsOpen, setModalManagarIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function openManagerModal() {
    setModalManagarIsOpen(true);
  }
  function closeModalManager() {
    setModalManagarIsOpen(false);
  }

  function closeModal() {
    setIsOpen(false);
  }

  // useEffect(() => {
  //   if (userInfo && userInfo !== null) {
  //     navigate('/homepage');
  //   }
  // }, [userInfo, navigate]);

  return (
    //  -- SEARCH COMPONENT ---
    <div className="container p-3">
      <Search />

      <div className="buttons_connection">
        <button className="btn btn-dark">
          Create A business
          <i className="fa-solid fa-plus fa-lg m-2"></i>
        </button>

        <button
          className="btn btn-light"
          type="button"
          onClick={openManagerModal}
        >
          Managing an existing business
          <i className="fa-solid fa-arrow-right-to-bracket fa-lg m-2"></i>
        </button>
        <Modal
          isOpen={modaManagerIsOpen}
          onRequestClose={closeModalManager}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button
            onClick={closeModalManager}
            style={{ border: 'none', background: 'none' }}
          >
            <i className="fa-solid fa-xmark fa-lg"></i>
          </button>
          <BusinessModal />
        </Modal>

        <button type="button" className="btn btn-light" onClick={openModal}>
          Login
          <i className="fa-solid fa-arrow-right-to-bracket fa-lg m-2"></i>
        </button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button
          onClick={closeModal}
          style={{ border: 'none', background: 'none' }}
        >
          <i className="fa-solid fa-xmark fa-lg"></i>
        </button>
        <LoginModal />
      </Modal>
    </div>
  );
};

export default LoginScreen;
