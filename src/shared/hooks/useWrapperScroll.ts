import { useMotionValue } from 'framer-motion';
import { useEffect } from 'react';

import { useModels } from '../contexts/ModelsContext';

export function useWrapperScroll() {
  const { wrapperRef } = useModels();
  const scrollY = useMotionValue(0);
  const scrollYProgress = useMotionValue(0);

  useEffect(() => {
    const element = wrapperRef.current;

    if (!element) return;

    const updateScrollValue = () => {
      const { scrollTop, scrollHeight, offsetHeight } = element;

      const fullScroll = scrollHeight - offsetHeight;

      scrollY.set(scrollTop);
      scrollYProgress.set(scrollTop / fullScroll);
    };

    element.addEventListener('scroll', updateScrollValue);

    // eslint-disable-next-line consistent-return
    return () => {
      element?.removeEventListener('scroll', updateScrollValue);
    };
  }, [scrollY, scrollYProgress, wrapperRef]);

  return {
    scrollY,
    scrollYProgress,
  };
}
