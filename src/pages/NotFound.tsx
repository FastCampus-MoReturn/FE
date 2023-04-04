import { useContext } from 'react';
import { ModalContext } from '@/contexts/modalContext';

const NotFound = () => {
  const { openModal }: any = useContext(ModalContext);
  return (
    <>
      <p>존재하지 않는 페이지입니다.</p>
      <button type="button" onClick={() => openModal(<ContentComponent />)}>
        모달버튼클릭
      </button>
    </>
  );
};

export default NotFound;

const ContentComponent = () => {
  const { closeModal }: any = useContext(ModalContext);
  return (
    <>
      <h3>모달 제목</h3>
      <p>모달 메세지</p>
      <button type="button">커스텀 버튼</button>
      <button
        type="button"
        className="h-8 px-3 text-white bg-red-500 text-xs rounded"
        onClick={closeModal}
      >
        닫기버튼
      </button>
    </>
  );
};
