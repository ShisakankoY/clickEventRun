(function(global) {
  function clickEventRun(selector, callback) {
    if (typeof document === 'undefined') {
      console.warn('clickEventRun is only available in a browser environment.');
      return;
    }

    const button = typeof selector === 'string'
      ? document.querySelector(selector)
      : selector;

    if (button && button.addEventListener) {
      button.addEventListener('click', callback);
    } else {
      console.warn('clickEventRun: invalid selector or element.');
    }
  }

  global.clickEventRun = clickEventRun;
})(typeof window !== "undefined" ? window : (typeof global !== "undefined" ? global : this));
