import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as SuccessIcon } from 'assets/icons/successIcon.svg';
import { IconWrapper } from './SuccessAnim.style';
import gsap from 'gsap';

const SuccessAnim = ({ state }) => {
  const icon = useRef(null);

  useEffect(() => {
    if (!icon.current) return;

    const [elements] = icon.current.children;
    const circle = elements.querySelector('#circle');
    const symbol = elements.querySelectorAll('#symbol');

    gsap.set(icon.current, { autoAlpha: 0 });
    gsap.set([circle, symbol], {
      autoAlpha: 0,
      scale: 0.1,
      transformOrigin: 'center',
    });

    const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });

    if (!state) return;

    tl.to(icon.current, { autoAlpha: 1, duration: 0 })
      .to(circle, { duration: 0.3, scale: 1.3, autoAlpha: 1 })
      .to(circle, { duration: 0.2, scale: 1 })
      .to(symbol, { duration: 0.2, scale: 1, autoAlpha: 1 }, '-=0.2')
      .to(
        [circle, symbol],
        { duration: 0.4, autoAlpha: 0, scale: 0.1 },
        '+=0.7'
      ).to(icon.current, { autoAlpha: 0, duration: 0 });
  }, [state]);

  return (
    <IconWrapper ref={icon}>
      <SuccessIcon />
    </IconWrapper>
  );
};

SuccessAnim.propTypes = {};

export default SuccessAnim;
