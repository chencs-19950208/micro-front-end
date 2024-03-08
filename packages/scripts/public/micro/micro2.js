(function () {
  let root;

  window.micro2_mount = function (slot) {
    root = document.createElement('h1');
    root.textContent = 'chencs micro 2 render';
    const $slot = document.querySelector(slot);
    $slot?.appendChild(root);
  };

  window.micro2_unmount = function () {
    if(!root) return;
    root?.parentNode?.removeChild(root);
  };
})();