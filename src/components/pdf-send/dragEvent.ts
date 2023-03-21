import { SetStateAction } from 'react';

const dragEvent = (
  isDraggingSetter: (arg0: boolean) => void,
  cb: (list: SetStateAction<File>) => void,
) => {
  const onDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    isDraggingSetter(true);
  };
  const onDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    isDraggingSetter(false);
  };
  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files) {
      isDraggingSetter(true);
    }
  };
  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    // 파일 타입 체크
    const files = Array.from(e.dataTransfer.files).filter((file) => {
      // image/jpeg, image/png, image/gif, application/pdf

      if (file.type !== 'application/pdf') {
        alert('pdf 파일만 업로드 가능합니다');
        return false;
      }
      return true;
    });
    // 파일 하나만 업로드하도록 제한

    if (files.length > 1) {
      alert(`한 개 이상의 파일이 선택되어
"${files[0].name}"
파일만 업로드 되었습니다`);
    } else if (files.length === 0) {
      alert(`pdf 파일이 선택되지 않았습니다`);
    }

    cb(e.dataTransfer.files[0]);
    isDraggingSetter(false);
  };
  return { onDragEnter, onDragLeave, onDragOver, onDrop };
};

export default dragEvent;
