import React from 'react';
import { createPortal } from 'react-dom';
import { useAtom } from 'jotai';

import useModal from '@/hooks/useModal';
import { modalStateAtom } from '@/stores/atoms';
import * as style from './ModalPortal.style';

const ModalPortal = () => {
  // modal의 Open 상태와 Content의 정보를 담은 atom 호출
  const [{ isOpen, content }] = useAtom(modalStateAtom);
  const { closeModal } = useModal();

  if (isOpen) {
    // 만약 mount 되기 전이라면, window 객체의 정보가 없으므로 false를 return 하게 됨.
    // modal id를 가진 div는 _document.tsx에 정의되었으므로 타입 단언을 통해 무조건 Element를 return.
    const modalRoot =
      typeof window !== 'undefined' ? document.getElementById('modal') : null;

    // 모달 외부의 여백만을 클릭했을 경우 강제로 창을 닫는 함수 closeModalByClick
    const closeModalByClick = (event: React.MouseEvent<HTMLDivElement>) => {
      const eventTarget = event.target as HTMLElement;
      if (eventTarget.id === 'modal_overlay') {
        closeModal();
      }
    };

    // mount가 완료되었고, 모달의 상태 또한 열렸으며 보여줄 컨텐츠가 있다면 Portal 생성
    // modal_overlay라는 id를 가진 div 스타일은 Global Style에서 정의하였음 (styled component 사용 불가)
    // tabIndex를 부여함으로서 div 요소에도 초점을 맞출 수 있도록 설정하고, KeyboardEvent를 적용하도록 함.
    return modalRoot && content
      ? createPortal(
          <style.Container id="modal_overlay" onClick={closeModalByClick}>
            {content}
          </style.Container>,
          modalRoot,
        )
      : null;
  }
  return null;
};

export default ModalPortal;
