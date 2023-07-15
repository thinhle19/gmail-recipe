'use strict';
const a = require('electron'),
  c = require('path'),
  u = (_0xe36d75) =>
    _0xe36d75 && typeof _0xe36d75 == 'object' && 'default' in _0xe36d75
      ? _0xe36d75
      : { default: _0xe36d75 },
  l = u(c);
var t = ((_0x281269) => (
    (_0x281269.readJsFile = 'readJsFile'),
    (_0x281269.readCssFile = 'readCssFile'),
    (_0x281269.handleWindow = 'handleWindow'),
    (_0x281269.logout = 'logout'),
    (_0x281269.loadExtension = 'loadExtension'),
    (_0x281269.pluginInstalled = 'pluginInstalled'),
    (_0x281269.overwriteRequestHeader = 'overwriteRequestHeader'),
    (_0x281269.fileStorageSet = 'fileStorageSet'),
    (_0x281269.fileStorageGet = 'fileStorageGet'),
    (_0x281269.fileStorageClear = 'fileStorageClear'),
    (_0x281269.setProxy = 'setProxy'),
    (_0x281269.unProxy = 'unProxy'),
    (_0x281269.saveFile = 'saveFile'),
    (_0x281269.openExternal = 'openExternal'),
    (_0x281269.getVersion = 'getVersion'),
    (_0x281269.getCacheSize = 'getCacheSize'),
    (_0x281269.clearCache = 'clearCache'),
    (_0x281269.insertDebugRecord = 'insertDebugRecord'),
    (_0x281269.saveLogFile = 'saveLogFile'),
    _0x281269
  ))(t || {}),
  i = ((_0x32c930) => (
    (_0x32c930.checkForUpdates = 'check-for-updates'),
    (_0x32c930.downloadUpdate = 'download-update'),
    (_0x32c930.updateMessage = 'update-message'),
    (_0x32c930.quitAndInstall = 'quit-and-install'),
    _0x32c930
  ))(i || {}),
  n = ((_0x15c92b) => (
    (_0x15c92b.getUserData = 'getUserData'),
    (_0x15c92b.initUserData = 'initUserData'),
    (_0x15c92b.clearUserData = 'clearUserData'),
    (_0x15c92b.setAppData = 'setAppData'),
    (_0x15c92b.getAppDataById = 'getAppDataById'),
    (_0x15c92b.updateAppData = 'updateAppData'),
    (_0x15c92b.setCurrentAppId = 'setCurrentAppId'),
    (_0x15c92b.getCurrentAppId = 'getCurrentAppId'),
    (_0x15c92b.getConfigData = 'getConfigData'),
    (_0x15c92b.setConfigData = 'setConfigData'),
    (_0x15c92b.setConfigDataByKey = 'setConfigDataByKey'),
    (_0x15c92b.getConfigDataByKey = 'getConfigDataByKey'),
    _0x15c92b
  ))(n || {}),
  p = ((_0x5a3f24) => (
    (_0x5a3f24.appData = 'appData'),
    (_0x5a3f24.quickMessage = 'quickMessage'),
    _0x5a3f24
  ))(p || {});
console.log('preload loaded ~~');
window['$electron'] = {
  readJsFile: (_0x9cc6bb) => a.ipcRenderer.invoke(t.readJsFile, _0x9cc6bb),
  readCssFile: (_0x49a49) => a.ipcRenderer.invoke(t.readCssFile, _0x49a49),
  initUserInfo: (_0x4cdc16) => a.ipcRenderer.send(n.initUserData, _0x4cdc16),
  getUserData: () => a.ipcRenderer.sendSync(n.getUserData),
  getConfigData: () => a.ipcRenderer.sendSync(n.getConfigData),
  setConfigData: (_0x35359c) => a.ipcRenderer.send(n.setConfigData, _0x35359c),
  setConfigDataByKey: (_0x212dcf, _0x12f5e2) =>
    a.ipcRenderer.send(n.setConfigDataByKey, _0x212dcf, _0x12f5e2),
  getConfigDataByKey: (_0x23c6cd) =>
    a.ipcRenderer.invoke(n.getConfigDataByKey, _0x23c6cd),
  setAppData: (_0x2cee43, _0x50f775) =>
    a.ipcRenderer.send(n.setAppData, _0x2cee43, _0x50f775),
  setCurrentAppId: (_0x144411) =>
    a.ipcRenderer.send(n.setCurrentAppId, _0x144411),
  path: l.default,
  executablePath: process.execPath,
  loadExtension: (_0x4ec4a9) => a.ipcRenderer.send(t.loadExtension, _0x4ec4a9),
  rootDir: () => l.default.resolve(__dirname, '../../'),
  handleWindow: (_0xdb8693) => a.ipcRenderer.send(t.handleWindow, _0xdb8693),
  logout: () => a.ipcRenderer.send(t.logout),
  onPluginInstalled: (_0x5be87b) =>
    a.ipcRenderer.on(t.pluginInstalled, _0x5be87b),
  overwriteRequestHeader: (_0x34fa12) =>
    a.ipcRenderer.send(t.overwriteRequestHeader, _0x34fa12),
  getItem: (_0x17cde0) =>
    a.ipcRenderer.sendSync(t.fileStorageGet, p.quickMessage, _0x17cde0),
  setItem: (_0x413413, _0x9245b4) =>
    a.ipcRenderer.send(t.fileStorageSet, p.quickMessage, _0x413413, _0x9245b4),
  setProxy: (_0x1b3c81) => a.ipcRenderer.send(t.setProxy, _0x1b3c81),
  unProxy: () => a.ipcRenderer.send(t.unProxy),
  openExternal: (_0x339386) => a.ipcRenderer.send(t.openExternal, _0x339386),
  getVersion: () => a.ipcRenderer.invoke(t.getVersion),
  checkForUpdates: () => a.ipcRenderer.send(i.checkForUpdates),
  downloadUpdate: () => a.ipcRenderer.send(i.downloadUpdate),
  updateMessage: (_0x34529b) => a.ipcRenderer.on(i.updateMessage, _0x34529b),
  quitAndInstall: () => a.ipcRenderer.send(i.quitAndInstall),
  getCacheSize: () => a.ipcRenderer.invoke(t.getCacheSize),
  clearCache: () => a.ipcRenderer.invoke(t.clearCache),
  fileStorageClear: () => a.ipcRenderer.invoke(t.fileStorageClear),
  sendLog: (_0xdef35e) => a.ipcRenderer.send(t.insertDebugRecord, _0xdef35e),
  saveLogFile: (_0x16e333, _0x22f1eb) => {
    a.ipcRenderer.invoke(t.saveLogFile, _0x16e333).then(() => {
      _0x22f1eb();
    });
  },
  setAppBadge: (_0x1435e8) => a.ipcRenderer.sendSync('update-badge', _0x1435e8),
};
function f(_0x2839bd = ['complete', 'interactive']) {
  return new Promise((_0x5a793c) => {
    _0x2839bd.includes(document.readyState)
      ? _0x5a793c(true)
      : document.addEventListener('readystatechange', () => {
          _0x2839bd.includes(document.readyState) && _0x5a793c(true);
        });
  });
}
const o = {
  append(_0x99d586, _0x4f24b7) {
    if (
      !Array.from(_0x99d586.children).find(
        (_0x6e69bb) => _0x6e69bb === _0x4f24b7
      )
    ) {
      return _0x99d586.appendChild(_0x4f24b7);
    }
  },
  remove(_0x45eca9, _0x91a92b) {
    if (
      Array.from(_0x45eca9.children).find(
        (_0x1db1b3) => _0x1db1b3 === _0x91a92b
      )
    ) {
      return _0x45eca9.removeChild(_0x91a92b);
    }
  },
};
function y() {
  const _0x5e5c18 = 'loaders-css__square-spin',
    _0x5edd71 =
      '\n@keyframes square-spin {\n  25% { transform: perspective(100px) rotateX(180deg) rotateY(0); }\n  50% { transform: perspective(100px) rotateX(180deg) rotateY(180deg); }\n  75% { transform: perspective(100px) rotateX(0) rotateY(180deg); }\n  100% { transform: perspective(100px) rotateX(0) rotateY(0); }\n}\n.' +
      _0x5e5c18 +
      ' > div {\n  animation-fill-mode: both;\n  width: 50px;\n  height: 50px;\n  background: #fff;\n  animation: square-spin 3s 0s cubic-bezier(0.09, 0.57, 0.49, 0.9) infinite;\n}\n.app-loading-wrap {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #282c34;\n  z-index: 9;\n}\n    ',
    _0x8ad6f9 = document.createElement('style'),
    _0x41275f = document.createElement('div');
  return (
    (_0x8ad6f9.id = 'app-loading-style'),
    (_0x8ad6f9.innerHTML = _0x5edd71),
    (_0x41275f.className = 'app-loading-wrap'),
    (_0x41275f.innerHTML = '<div class="' + _0x5e5c18 + '"><div></div></div>'),
    {
      appendLoading() {
        o.append(document.head, _0x8ad6f9), o.append(document.body, _0x41275f);
      },
      removeLoading() {
        o.remove(document.head, _0x8ad6f9);
        o.remove(document.body, _0x41275f);
      },
    }
  );
}
const { appendLoading: D, removeLoading: g } = y();
f().then(D);
window.onmessage = (_0x25e565) => {
  _0x25e565.data.payload === 'removeLoading' && g();
};
setTimeout(g, 4999);
