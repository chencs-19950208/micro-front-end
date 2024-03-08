// 立即执行的匿名函数,可以防止 root 冲突
(function() {
  let root;

  // 挂载钩子函数
  window.micro1_mount = function(slot) {
    // 以下可以是react 或者 vue 框架元素
    root = document.createElement('h1');
    root.textContent = 'chencs micro 1 render';
    const $slot = document.querySelector(slot);
    $slot?.appendChild(root);
  };

  // 卸载钩子函数
  window.micro1_unmount = function() {
    if(!root) return;

    root?.parentNode?.removeChild(root);
  }
})();