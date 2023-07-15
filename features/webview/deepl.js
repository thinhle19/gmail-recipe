'use strict';
const { ipcRenderer } = require('electron');
window['$electron'] = {
  deeplTrans: (_0x4a9751) => {},
};
navigator.setAppBadge = function (_0x4bed1b) {
  return window['$electron'].updateUnreadCount(_0x4bed1b), Promise.resolve('');
};
window.addEventListener('load', function () {
  console.log(
    'object :>> ',
    document.querySelector('[contenteditable="true"]')
  );
  const _0x5e11cd = document.querySelector('[contenteditable="true"]');
});
console.log('in deepl :>> ');
