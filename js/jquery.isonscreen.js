/*eslint-disable */
(function ($) {
  $.fn.isOnScreen = function (x, y) {
    if (x == null || typeof x === 'undefined') x = 1;
    if (y == null || typeof y === 'undefined') y = 1;

    const win = $(window);

    const viewport = {
      top: win.scrollTop(),
      left: win.scrollLeft(),
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    const height = this.outerHeight();
    const width = this.outerWidth();

    if (!width || !height) {
      return false;
    }

    const bounds = this.offset();
    bounds.right = bounds.left + width;
    bounds.bottom = bounds.top + height;

    const visible = (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

    if (!visible) {
      return false;
    }

    const deltas = {
      top: Math.min(1, (bounds.bottom - viewport.top) / height),
      bottom: Math.min(1, (viewport.bottom - bounds.top) / height),
      left: Math.min(1, (bounds.right - viewport.left) / width),
      right: Math.min(1, (viewport.right - bounds.left) / width),
    };

    return (deltas.left * deltas.right) >= x && (deltas.top * deltas.bottom) >= y;
  };
}(jQuery));
