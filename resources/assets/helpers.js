import marked from 'marked';

/**
 * Wait until the DOM is ready.
 *
 * @param {Function} fn
 */
export function ready(fn) {
  if (document.readyState !== 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

/**
 * Render Markdown for a React component.
 *
 * @param {String} source - Markdown source
 * @returns {{__html}} - Prepared object for React's dangerouslySetInnerHtml
 */
export function markdown(source) {
  // Markdown options <https://github.com/chjj/marked#options-1>
  const options = {
    sanitize: true
  };

  return {
    __html: marked(source, options),
  }
}
