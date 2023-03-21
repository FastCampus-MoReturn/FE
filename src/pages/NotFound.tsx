import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setModal } from '@/store/modalSlice';

const NotFound = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onClickOk = () => {
    navigate('/');
    dispatch(setModal({ isOpen: false }));
  };

  const onClickCancel = () => {
    dispatch(setModal({ isOpen: false }));
  };
  return (
    <>
      <p>존재하지 않는 페이지입니다.</p>
      <button
        type="button"
        onClick={() => {
          dispatch(
            setModal({
              isOpen: true,
              title: '모달 타이틀',
              description: '모달 메세지',
              onClickOk,
              onClickCancel,
              cancelText: '텍스트 (취소)',
              okText: '텍스트 (확인)',
            }),
          );
        }}
      >
        홈으로 (모달 확인용)
      </button>
    </>
  );
};

export default NotFound;
