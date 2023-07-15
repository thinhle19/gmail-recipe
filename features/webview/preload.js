'use strict';
const { ipcRenderer } = require('electron');
window['$electron'] = {
  getUserData: () => ipcRenderer.sendSync('getUserData'),
  getConfigData: () => ipcRenderer.sendSync('getConfigData'),
  onQuickMessage: (_0x52897f) => ipcRenderer.on('onQuickMessage', _0x52897f),
  getItem: (_0x402bb9) =>
    ipcRenderer.sendSync('fileStorageGet', 'appData', _0x402bb9),
  setItem: (_0x56bb2b, _0xbbc654) =>
    ipcRenderer.send('fileStorageSet', 'appData', _0x56bb2b, _0xbbc654),
  updateUnreadCount: (_0x5a3155) =>
    ipcRenderer.sendToHost('updateUnreadCount', _0x5a3155),
  chatChange: (_0x4c1b20) => ipcRenderer.sendToHost('chatChange', _0x4c1b20),
  showMessage: (_0x48211d) => ipcRenderer.sendToHost('showMessage', _0x48211d),
  sendLog: (_0x1d5c08) => ipcRenderer.send('insertDebugRecord', _0x1d5c08),
};
navigator.setAppBadge = function (_0x455019) {
  return window['$electron'].updateUnreadCount(_0x455019), Promise.resolve('');
};
const currentURL = location.toString();
if (currentURL && currentURL.indexOf('chrome-extension') !== -1) {
  let DownloadFile = function (_0x44ba65, _0x31eeb3) {
      let _0x234178 = new XMLHttpRequest();
      _0x234178.open('GET', _0x44ba65);
      _0x234178.responseType = 'arraybuffer';
      _0x234178.onload = function (_0x12a60b) {
        ipcRenderer.send('saveFile', _0x234178.response, _0x31eeb3);
      };
      _0x234178.send();
    },
    myNativeFetch = function () {
      let _0x3eea6c = XMLHttpRequest.hook.fetch;
      return _0x3eea6c
        ? _0x3eea6c(arguments, originFetch)
        : originFetch.apply(null, arguments);
    },
    changeFavicon = function (_0x52b360) {
      let _0x5d4367 = document.querySelector('link[rel="icon"]');
      if (_0x5d4367 !== null) {
        _0x5d4367.href = _0x52b360;
      } else {
        _0x5d4367 = document.createElement('link');
        _0x5d4367.rel = 'icon';
        _0x5d4367.href = _0x52b360;
        document.head.appendChild(_0x5d4367);
      }
    },
    handleStream = function (_0x3c2080) {
      const _0x3702dd = document.querySelector('video');
      _0x3702dd.srcObject = _0x3c2080;
      _0x3702dd.onloadedmetadata = (_0x3b7521) => _0x3702dd.play();
    },
    handleError = function (_0x55fdc5) {},
    originFetch = fetch;
  myNativeFetch.toString = function () {
    return 'function fetch(){ [native code] }';
  };
  fetch = myNativeFetch;
  chrome.notifications = {
    onClicked: {
      addListener: function () {},
    },
    onClosed: {
      addListener: function () {},
    },
    create: function () {},
  };
  chrome.browserAction = {
    setBadgeBackgroundColor: function () {},
    setIcon: function () {
      let _0xc325c0 = arguments[0];
      _0xc325c0 && _0xc325c0[32] && changeFavicon(_0xc325c0[32]);
    },
    setBadgeText: function (_0x3f7b7d) {
      if (_0x3f7b7d && _0x3f7b7d.text !== void 0) {
        if (_0x3f7b7d.text !== '') {
          document.title = '(' + _0x3f7b7d.text + ')LINE';
        } else {
          document.title = 'LINE';
        }
      }
    },
  };
  chrome.desktopCapture = {
    chooseDesktopMedia: function () {
      alert('目前不支持此功能...');
    },
  };
  chrome.tabs.getZoom = function () {
    return Promise.resolve(1);
  };
  chrome.cookies = {
    remove: () => {},
  };
  chrome.downloads = {
    download: function (_0x2e8d7f, _0x1fbf9c) {
      DownloadFile(_0x2e8d7f.url, _0x2e8d7f.filename);
    },
  };
}
const _locale = {
  'en-US': {
    'message translated to $ send': (_0x31faf6) =>
      'message translated to [' + _0x31faf6 + '] send',
    'Message sent without translation': 'Message sent without translation',
    'Service is busy': 'Service is busy',
    'Login failed, please log in again': 'Login failed, please log in again',
    'The request was too fast': 'The request was too fast',
    'Service error': 'Service error',
    'Login failed': 'Login failed',
    'Translation failed, click to try again':
      'Translation failed, click to try again',
    'Click to translate...': 'Click to translate...',
    'Translating...': 'Translating...',
    '[Translating...]': '[Translating...]',
    "Translating...don't click send frequently":
      "Translating...don't click send frequently",
    'Translation successful': 'Translation successful',
    'Quick reply is being translated...': 'Quick reply is being translated...',
    'An unknown error occurred, please refresh the page and try again':
      'An unknown error occurred, please refresh the page and try again',
    'Please use the Enter key to send!': 'Please use the Enter key to send!',
    'Insufficient translation characters':
      'Insufficient translation characters!',
    'Add notes': 'Add notes',
  },
  'zh-CN': {
    'message translated to $ send': (_0x2dd4de) =>
      '消息翻译成 [' + _0x2dd4de + '] 发送',
    'Message sent without translation': '消息不翻译发送',
    'Service is busy': '服务繁忙',
    'Login failed, please log in again': '登陆失效\uFF0C请重新登陆',
    'The request was too fast': '请求过快',
    'Service error': '服务错误',
    'Login failed': '登陆失效',
    'Translation failed, click to try again': '翻译失败, 点击重试',
    'Click to translate...': '点击翻译...',
    'Translating...': '翻译中...',
    '[Translating...]': '[正在翻译中...]',
    "Translating...don't click send frequently":
      '正在翻译中...请勿频繁点击发送',
    'Translation successful': '翻译成功',
    'Quick reply is being translated...': '快捷回复语正在翻译中...',
    'An unknown error occurred, please refresh the page and try again':
      '出现未知错误,请刷新页面重试',
    'Please use the Enter key to send!': '请使用回车键发送!',
    'Insufficient translation characters': '翻译字符不够!',
    'Add notes': '添加备注',
  },
};
function initLocale() {
  const _0x1ada39 = window['$electron'].getConfigData();
  window['$t'] = _locale[_0x1ada39.locale];
}
initLocale();
window.vconsole = { ...window.console };
