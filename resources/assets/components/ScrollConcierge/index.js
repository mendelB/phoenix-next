/* global window, document */

import React from 'react';
import FontFaceObserver from 'fontfaceobserver';

/**
 * Wait until we're *really* sure page has rendered
 * so we don't read the wrong values for layout.
 *
 * @see https://stackoverflow.com/a/34999925/811624
 */
const waitForLayout = (callback) => {
  // Wait for the call stack to clear.
  setTimeout(() => {
    // Then, wait until we've rendered a frame.
    window.requestAnimationFrame(callback);
  }, 0);
};

/**
 * Scroll to the given offset on the page.
 *
 * @param {Number} target - vertical offset
 * @param {Number} duration - time in ms
 */
const scrollTo = (target = 0, duration = 500) => {
  const initialOffset = window.scrollY;
  const distance = target - initialOffset;
  const beginning = +Date.now();

  // Allow the user to interrupt the scroll animation.
  let interrupted = false;
  document.addEventListener('mousewheel', () => (interrupted = true));
  document.addEventListener('touchmove', () => (interrupted = true));

  // Render a frame of the animation.
  const scroller = () => {
    const elapsed = Date.now() - beginning;

    // Scroll to wherever we should be at this point in the animation.
    const newOffset = Math.min(initialOffset + Math.floor(distance * (elapsed / duration)), target);
    window.scrollTo(0, newOffset);

    // If we've reached the target or got interrupted, stop.
    if (newOffset === target || interrupted) return;

    window.requestAnimationFrame(scroller);
  };

  // Render the first frame.
  window.requestAnimationFrame(scroller);
};

/**
 * Component which scrolls the browser to itself when
 * it appears on the page.
 */
class ScrollConcierge extends React.Component {
  componentDidMount() {
    const font = new FontFaceObserver('League Gothic');

    // Wait for headline font to load so we don't scroll to
    // the wrong place when the page reflows & offset changes.
    font.load().then(() => {
      const VISUAL_OFFSET = 95;

      // Wait until the page has finished layout, then scroll.
      waitForLayout(() => scrollTo(this.node.offsetTop - VISUAL_OFFSET));
    });
  }

  render() {
    return <div ref={node => (this.node = node)} />;
  }
}

export default ScrollConcierge;
