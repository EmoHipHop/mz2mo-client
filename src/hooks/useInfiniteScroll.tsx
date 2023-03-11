import { useRef, useEffect, RefObject } from "react";

type callbackFuncType = (...args: any) => any;

/**
 * Intersection Observer를 활용하여 관측 Ref를 관찰하고, 콜백 함수를 실행하는 Hook
 * @param targetRef 관찰하려는 HTML Element Ref
 * @param callbackFunc 관측 대상이 관찰되었을 경우 실행할 Callback
 */
const useInfiniteScroll = (targetRef: RefObject<HTMLDivElement>, callbackFunc: callbackFuncType) => {
  const observeRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // 새로운 IntersectionObserver 객체 생성
    observeRef.current = new IntersectionObserver(
      /**
       * IntersectionObserver Callback
       * entries : 타겟과 루트 엘리먼트가 교차되었을 때의 정보들을 담은 배열 (IntersectionObserverEntry[])
       * observer : 해당 콜백 함수를 실행하는 Intersection Observer 인스턴스.
       */
      (entries, observer) => {
        // 만약 타켓 요소가 관측되었다면, 콜백 함수를 실행시킨 후 관측을 종료시킴.
        if (entries[0].isIntersecting) {
          callbackFunc();
          observer.disconnect();
        }
      },
      /**
       * IntersectionObserver Option
       * threshold : 관측 대상이 Root 요소와 얼만큼 겹쳐야 Observer가 실행되는지를 지정.
       * root : 관찰 Root 의 대상을 지정 (default : 브라우저의 뷰 포트)
       */
      {
        threshold: 1
      }
    );

    // 관측 Ref Element의 lastElementChild 가 아니라면 종료.
    if (!targetRef.current?.lastElementChild) {
      return;
    }

    // 관측 대상의 lastElementChild를 관찰 대상으로 지정
    observeRef.current.observe(targetRef.current?.lastElementChild);

    // hook unmount 시, 관측 또한 종료해야 함.
    return () => observeRef.current?.disconnect();
  }, [targetRef, callbackFunc]);
};

export default useInfiniteScroll;
