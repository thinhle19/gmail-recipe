'use strict';
var Z = Object.defineProperty,
  ee = (_0x32c702, _0x5b6dbc, _0x43dbdc) =>
    _0x5b6dbc in _0x32c702
      ? Z(_0x32c702, _0x5b6dbc, {
          enumerable: true,
          configurable: true,
          writable: true,
          value: _0x43dbdc,
        })
      : (_0x32c702[_0x5b6dbc] = _0x43dbdc),
  b = (_0x252964, _0x4bcf6f, _0x5e6ad4) => (
    ee(
      _0x252964,
      typeof _0x4bcf6f != 'symbol' ? _0x4bcf6f + '' : _0x4bcf6f,
      _0x5e6ad4
    ),
    _0x5e6ad4
  );
const n = require('electron'),
  te = require('electron-windows-badge'),
  N = require('os'),
  f = require('path'),
  oe = require('electron-store'),
  re = require('electron-log'),
  m = require('electron-updater'),
  L = require('fs'),
  ne = require('fs/promises'),
  se = require('sqlite3'),
  ae = require('systeminformation'),
  v = (_0x3ed2b3) =>
    _0x3ed2b3 && typeof _0x3ed2b3 == 'object' && 'default' in _0x3ed2b3
      ? _0x3ed2b3
      : { default: _0x3ed2b3 };
function ie(_0x1b3521) {
  if (_0x1b3521 && _0x1b3521['__esModule']) {
    return _0x1b3521;
  }
  const _0x468f5b = Object.create(null, {
    [Symbol.toStringTag]: { value: _0x41fb8d.ElDVD },
  });
  if (_0x1b3521) {
    for (const _0x4e08b4 in _0x1b3521)
      if (_0x4e08b4 !== 'default') {
        const _0x4d6350 = Object.getOwnPropertyDescriptor(_0x1b3521, _0x4e08b4);
        Object.defineProperty(
          _0x468f5b,
          _0x4e08b4,
          _0x4d6350.get
            ? _0x4d6350
            : {
                enumerable: true,
                get: () => _0x1b3521[_0x4e08b4],
              }
        );
      }
  }
  return (_0x468f5b.default = _0x1b3521), Object.freeze(_0x468f5b);
}
const le = v(te),
  C = v(N),
  R = v(oe),
  _ = v(re),
  S = v(L),
  H = v(se),
  $ = v(ae);
var F = ((_0x1f1e12) => (
    (_0x1f1e12[(_0x1f1e12.showTask = 1)] = 'showTask'),
    (_0x1f1e12[(_0x1f1e12.showTray = 2)] = 'showTray'),
    (_0x1f1e12[(_0x1f1e12.showTaskAndTray = 3)] = 'showTaskAndTray'),
    _0x1f1e12
  ))(F || {}),
  B = ((_0x18b195) => (
    (_0x18b195[(_0x18b195.minimize = 1)] = 'minimize'),
    (_0x18b195[(_0x18b195.quit = 2)] = 'quit'),
    _0x18b195
  ))(B || {}),
  c = ((_0xb3662d) => (
    (_0xb3662d.readJsFile = 'readJsFile'),
    (_0xb3662d.readCssFile = 'readCssFile'),
    (_0xb3662d.handleWindow = 'handleWindow'),
    (_0xb3662d.logout = 'logout'),
    (_0xb3662d.loadExtension = 'loadExtension'),
    (_0xb3662d.pluginInstalled = 'pluginInstalled'),
    (_0xb3662d.overwriteRequestHeader = 'overwriteRequestHeader'),
    (_0xb3662d.fileStorageSet = 'fileStorageSet'),
    (_0xb3662d.fileStorageGet = 'fileStorageGet'),
    (_0xb3662d.fileStorageClear = 'fileStorageClear'),
    (_0xb3662d.setProxy = 'setProxy'),
    (_0xb3662d.unProxy = 'unProxy'),
    (_0xb3662d.saveFile = 'saveFile'),
    (_0xb3662d.openExternal = 'openExternal'),
    (_0xb3662d.getVersion = 'getVersion'),
    (_0xb3662d.getCacheSize = 'getCacheSize'),
    (_0xb3662d.clearCache = 'clearCache'),
    (_0xb3662d.insertDebugRecord = 'insertDebugRecord'),
    (_0xb3662d.saveLogFile = 'saveLogFile'),
    _0xb3662d
  ))(c || {}),
  D = ((_0x1f476d) => (
    (_0x1f476d.minimize = 'minimize'),
    (_0x1f476d.maximize = 'maximize'),
    (_0x1f476d.close = 'close'),
    (_0x1f476d.openDevTools = 'openDevTools'),
    (_0x1f476d.customResizeWindow = 'customResizeWindow'),
    (_0x1f476d.relaunch = 'relaunch'),
    _0x1f476d
  ))(D || {}),
  w = ((_0x56d754) => (
    (_0x56d754.checkForUpdates = 'check-for-updates'),
    (_0x56d754.downloadUpdate = 'download-update'),
    (_0x56d754.updateMessage = 'update-message'),
    (_0x56d754.quitAndInstall = 'quit-and-install'),
    _0x56d754
  ))(w || {}),
  u = ((_0x3faf4c) => (
    (_0x3faf4c.updateAvailable = 'update-available'),
    (_0x3faf4c.updateNotAvailable = 'update-not-available'),
    (_0x3faf4c.error = 'error'),
    (_0x3faf4c.downloadProgress = 'download-progress'),
    (_0x3faf4c.updateDownloaded = 'update-downloaded'),
    (_0x3faf4c.checkingForUpdate = 'checking-for-update'),
    _0x3faf4c
  ))(u || {}),
  g = ((_0x39e7cd) => (
    (_0x39e7cd.getUserData = 'getUserData'),
    (_0x39e7cd.initUserData = 'initUserData'),
    (_0x39e7cd.clearUserData = 'clearUserData'),
    (_0x39e7cd.setAppData = 'setAppData'),
    (_0x39e7cd.getAppDataById = 'getAppDataById'),
    (_0x39e7cd.updateAppData = 'updateAppData'),
    (_0x39e7cd.setCurrentAppId = 'setCurrentAppId'),
    (_0x39e7cd.getCurrentAppId = 'getCurrentAppId'),
    (_0x39e7cd.getConfigData = 'getConfigData'),
    (_0x39e7cd.setConfigData = 'setConfigData'),
    (_0x39e7cd.setConfigDataByKey = 'setConfigDataByKey'),
    (_0x39e7cd.getConfigDataByKey = 'getConfigDataByKey'),
    _0x39e7cd
  ))(g || {}),
  z = ((_0x39e038) => (
    (_0x39e038.appData = 'appData'),
    (_0x39e038.quickMessage = 'quickMessage'),
    _0x39e038
  ))(z || {}),
  T = ((_0xe2f57e) => (
    (_0xe2f57e.dbName = './v8_linksys.dat'),
    (_0xe2f57e.splitMark = ' Safe sqlite3 from '),
    (_0xe2f57e.logFileName = 'look-world-log.zip'),
    _0xe2f57e
  ))(T || {});
const ce = [
    'whatsapp',
    'telegram-new',
    'telegram-old',
    'line',
    'line-business',
    'facebook',
    'instagram',
    'twitter',
    'messenger',
    'zalo',
    'tinder',
    'tiktok',
    'skype',
    'google-voice',
    'textnow',
    'phound',
    'bumble',
  ],
  y = new R.default({ name: 'user' });
n.ipcMain.on(g.getUserData, function (_0x323678, _0x25e9e8) {
  _0x323678.returnValue = y.store;
});
n.ipcMain.on(g.initUserData, function (_0x5a02ab, _0x2ead2a) {
  y.set(_0x2ead2a);
});
n.ipcMain.on(g.clearUserData, function (_0x2f6787, _0x7eaed6) {
  y.clear();
});
const x = new R.default({ name: 'app' });
n.ipcMain.on(g.setCurrentAppId, function (_0x27f97c, _0x19177c) {
  _0x27f97c.returnValue = x.get(_0x19177c);
});
n.ipcMain.on(g.getCurrentAppId, function (_0xa361ac, _0x169c96) {
  _0xa361ac.returnValue = x.get(_0x169c96);
});
n.ipcMain.on(g.getAppDataById, function (_0x3f98b7, _0x66d0) {
  _0x3f98b7.returnValue = x.get(_0x66d0);
});
n.ipcMain.on(g.setAppData, function (_0x21e616, _0x2f0101, _0x59c30b) {
  x.set(_0x2f0101, _0x59c30b);
});
n.ipcMain.on(g.updateAppData, function (_0x202a8e, _0x2b7f7a, _0x4e0eff) {
  const _0x33416d = x.get(_0x2b7f7a, {});
  x.set(_0x2b7f7a, {
    ..._0x33416d,
    ..._0x4e0eff,
  });
});
const M = new R.default({
  name: 'config',
  defaults: {
    openProxy: false,
    host: '',
    port: '',
    login: '',
    password: '',
    autoUpdate: false,
    autoLaunch: true,
    isStartupMinimize: false,
    clientShowType: 1,
    clientCloseType: 1,
    translateServe: '',
    locale: 'zh-CN',
  },
});
n.ipcMain.on(g.getConfigData, function (_0x21a0e2) {
  _0x21a0e2.returnValue = M.store;
});
n.ipcMain.on(g.setConfigData, function (_0x12479f, _0x3636c2) {
  try {
    const _0x26f59f = JSON.parse(_0x3636c2);
    M.set(_0x26f59f);
  } catch (_0x2a5287) {
    console.log('error: ', _0x2a5287);
  }
});
n.ipcMain.on(g.setConfigDataByKey, function (_0x5d127b, _0x2e5a40, _0x105346) {
  try {
    M.set(_0x2e5a40, _0x105346);
  } catch (_0x13683a) {
    console.log('error: ', _0x13683a);
  }
});
n.ipcMain.handle(g.getConfigDataByKey, function (_0x3ab557, _0x56716a) {
  try {
    return M.get(_0x56716a);
  } catch {
    return '';
  }
});
function E() {
  const _0x55fe9d = (_0x5a7487) => {
      !_0x5a7487 ||
        (_0x5a7487.setResizable(false),
        _0x5a7487.setMinimumSize(540, 680),
        _0x5a7487.setSize(540, 680),
        _0x5a7487.center());
    },
    _0x1c678b = (_0x4c8dc5) => {
      !_0x4c8dc5 ||
        (_0x4c8dc5.setResizable(true),
        _0x4c8dc5.setSize(1280, 800),
        _0x4c8dc5.center());
    };
  return {
    resizeMinWindow: _0x55fe9d,
    resizeMaxWindow: _0x1c678b,
    resizeWindow: (_0x5b4ac6) => {
      y.store.token ? _0x1c678b(_0x5b4ac6) : _0x55fe9d(_0x5b4ac6);
    },
    getFocusWindow: () => (
      console.log('process.platform: ', process.platform),
      process.platform === 'darwin'
        ? n.BrowserWindow.getAllWindows()[0]
        : n.BrowserWindow.getFocusedWindow()
    ),
  };
}
let U = null;
const { getFocusWindow: ue } = E();
function de() {
  const _0x2e3e50 = (_0x52c2cf) => {
    const _0x3a865f = new n.Tray(
      f.join(
        __dirname,
        n.app.isPackaged
          ? '../../dist/logo/64x64.png'
          : '../../public/logo/64x64.png'
      )
    );
    _0x3a865f.addListener('click', function () {
      _0x52c2cf.isMinimized() ? _0x52c2cf.restore() : _0x52c2cf.minimize();
    });
    const _0x566d64 = n.Menu.buildFromTemplate([
      {
        label: '打开 LookWorld',
        type: 'normal',
        click() {
          _0x52c2cf.restore();
        },
      },
      {
        label: '隐藏 LookWorld',
        type: 'normal',
        role: 'hide',
        click() {
          _0x52c2cf.minimize();
        },
      },
      {
        label: '退出 LookWorld',
        type: 'normal',
        role: 'quit',
      },
    ]);
    return (
      _0x3a865f.setToolTip('LookWorld'),
      _0x3a865f.setContextMenu(_0x566d64),
      _0x3a865f
    );
  };
  return {
    initConfig: () => {
      const _0x2b9efe = ue(),
        _0x1047a9 = M.store;
      n.app.setLoginItemSettings({
        openAtLogin: _0x1047a9.autoLaunch,
        openAsHidden: _0x1047a9.isStartupMinimize,
      });
      [F.showTray, F.showTaskAndTray].includes(_0x1047a9.clientShowType)
        ? (U = _0x2e3e50(_0x2b9efe))
        : U && U.destroy();
      [F.showTask, F.showTaskAndTray].includes(_0x1047a9.clientShowType)
        ? _0x2b9efe.setSkipTaskbar(false)
        : _0x2b9efe.setSkipTaskbar(true);
      _0x1047a9.isStartupMinimize && _0x2b9efe.minimize();
      _0x1047a9.openProxy
        ? (n.app.commandLine.appendSwitch(
            'proxy-server',
            _0x1047a9.host + ':' + _0x1047a9.port
          ),
          console.log(
            'set Proxy success: ',
            _0x1047a9.host + ':' + _0x1047a9.port
          ))
        : (n.app.commandLine.removeSwitch('proxy-server'),
          console.log('unProxy success'));
    },
  };
}
function pe() {
  _.default.transports.console.level = 'debug';
  _.default.transports.console.format = '{y}-{m}-{d} {h}:{i}:{s} {text}';
  _.default.transports.file.level = 'debug';
  _.default.transports.file.format = '{y}-{m}-{d} {h}:{i}:{s} {text}';
  Object.assign(console, _.default.functions);
}
function fe() {
  return {
    initProtocol: () => {
      n.protocol.registerSchemesAsPrivileged([
        {
          scheme: 'http',
          privileges: {
            standard: true,
            bypassCSP: true,
            allowServiceWorkers: true,
            supportFetchAPI: true,
            corsEnabled: true,
            stream: true,
          },
        },
        {
          scheme: 'https',
          privileges: {
            standard: true,
            bypassCSP: true,
            allowServiceWorkers: true,
            supportFetchAPI: true,
            corsEnabled: true,
            stream: true,
          },
        },
        {
          scheme: 'mailto',
          privileges: { standard: true },
        },
      ]);
    },
  };
}
const ge = require('electron-log');
ge.transports.file.level = 'debug';
const { getFocusWindow: me } = E(),
  he = () => {
    var _0x9b779c;
    const _0x207787 = process.platform + '-' + process.arch;
    console.log('platform: ', _0x207787);
    const _0x424b84 = {
        'win32-x64': 'latest-x64',
        'win32-ia32': 'latest-ia32',
        'darwin-x64': 'latest',
        'darwin-arm64': 'latest',
      },
      _0x53a146 = (_0x9b779c = me()) == null ? void 0 : _0x9b779c.webContents;
    n.app.isPackaged
      ? m.autoUpdater.setFeedURL({
          provider: 'generic',
          url: 'https://app-revision.oss-cn-hangzhou.aliyuncs.com/',
          channel: _0x424b84[_0x207787],
        })
      : (m.autoUpdater.updateConfigPath = f.join(
          __dirname,
          '../../',
          'dev-app-update.yml'
        ));
    m.autoUpdater.autoDownload = true;
    m.autoUpdater.on(u.checkingForUpdate, () => {
      _0x53a146.send(w.updateMessage, {
        type: u.checkingForUpdate,
        data: '',
      });
    });
    m.autoUpdater.on(u.updateAvailable, (_0x4083e2) => {
      console.log({
        type: u.updateAvailable,
        data: _0x4083e2,
      }),
        _0x53a146.send(w.updateMessage, {
          type: u.updateAvailable,
          data: _0x4083e2,
        });
    });
    m.autoUpdater.on(u.updateNotAvailable, (_0x46a64d) => {
      console.log({
        type: u.updateNotAvailable,
        data: _0x46a64d,
      }),
        _0x53a146.send(w.updateMessage, {
          type: u.updateNotAvailable,
          data: _0x46a64d,
        });
    });
    m.autoUpdater.on(u.error, (_0x5b50f2) => {
      console.log({
        type: u.error,
        data: _0x5b50f2,
      }),
        _0x53a146.send(w.updateMessage, {
          type: u.error,
          data: _0x5b50f2,
        });
    });
    m.autoUpdater.on(u.downloadProgress, (_0xd10b3c) => {
      console.log({
        type: u.downloadProgress,
        data: _0xd10b3c,
      }),
        _0x53a146.send(w.updateMessage, {
          type: u.downloadProgress,
          data: _0xd10b3c,
        });
    });
    m.autoUpdater.on(u.updateDownloaded, (_0x9f92a2) => {
      console.log({
        type: u.updateDownloaded,
        data: _0x9f92a2,
      });
      _0x53a146.send(w.updateMessage, {
        type: u.updateDownloaded,
        data: _0x9f92a2,
      });
    });
    n.ipcMain.on(w.downloadUpdate, () => {
      m.autoUpdater
        .downloadUpdate()
        .then((_0x5d3f6b) => {
          console.log('res :', _0x5d3f6b);
        })
        .catch((_0x126d25) => {
          console.log('err :', _0x126d25);
        });
    });
    n.ipcMain.on(w.checkForUpdates, () => {
      m.autoUpdater.checkForUpdates();
    });
    n.ipcMain.on(w.quitAndInstall, () => {
      m.autoUpdater.quitAndInstall();
    });
  },
  G = {
    [z.appData]: 'appData.txt',
    [z.quickMessage]: 'quickMessage.txt',
  },
  W = {
    [z.appData]: {},
    [z.quickMessage]: {},
  };
function we(_0x5af7b8, _0x4dafbb) {
  return (
    Object.keys(_0x4dafbb).forEach((_0x49db0b) => {
      _0x5af7b8[_0x49db0b] = Object.assign(
        {},
        _0x5af7b8[_0x49db0b],
        _0x4dafbb[_0x49db0b]
      );
    }),
    _0x5af7b8
  );
}
const J = Object.keys(G);
function ye(_0xe199d0, _0xdf2095) {
  S.default.mkdir(_0xe199d0, { recursive: true }, function (_0x31504c) {
    _0x31504c ||
      S.default.writeFile(
        _0xe199d0 + '/' + _0xdf2095,
        '',
        'utf-8',
        function (_0x484cda) {}
      );
  });
}
function be(_0x3afdc9, _0xfeae67) {
  try {
    const _0xec9970 = S.default.readFileSync(
      _0x3afdc9 + '/' + _0xfeae67,
      'utf-8'
    );
    return _0xec9970 ? JSON.parse(_0xec9970) : {};
  } catch {
    return {};
  }
}
class q {
  constructor(_0x3bfe8e, _0x2fff33) {
    this.timerId = null;
    this.curQueueNumber = 0;
    this.dir = q.getDir(_0x3bfe8e);
    this.pathname = G[_0x2fff33];
    this.path = f.join(this.dir, this.pathname);
    this.memory = this.getMemory();
    b(this, 'dir');
    b(this, 'pathname');
    b(this, 'memory');
    b(this, 'timerId');
    b(this, 'curQueueNumber');
    (this.timerId = null),
      (this.curQueueNumber = 0),
      (this.dir = q.getDir(_0x3bfe8e)),
      (this.pathname = G[_0x2fff33]),
      (this.path = f.join(this.dir, this.pathname)),
      (this.memory = this.getMemory());
  }
  ['isExist'](_0x2008ff) {
    return S.default.existsSync(_0x2008ff);
  }
  ['getMemory']() {
    return this.isExist(this.path)
      ? be(this.dir, this.pathname)
      : (ye(this.dir, this.pathname), {});
  }
  static ['getDir'](_0x454424) {
    return f.join(
      n.app.getPath('userData'),
      '../',
      'look-world-storage',
      _0x454424
    );
  }
  ['setItem'](_0x4e444e, _0x163eb1) {
    try {
      if (!(_0x4e444e && _0x163eb1)) {
        return;
      }
      let _0xe9410f = {};
      try {
        _0xe9410f = JSON.parse(_0x163eb1);
      } catch (_0x32da5f) {
        console.log('error :>> ', _0x32da5f);
      }
      we(this.memory, { [_0x4e444e]: _0xe9410f });
      clearTimeout(this.timerId);
      this.timerId = setTimeout(() => this.saveItem(), 1000);
    } catch (_0xc5c397) {
      console.log('error: ', _0xc5c397);
    }
  }
  ['getItem'](_0x39f2f1) {
    var _0x4b6925, _0x2503a6;
    return (_0x2503a6 =
      (_0x4b6925 = this.memory) == null ? void 0 : _0x4b6925[_0x39f2f1]) != null
      ? _0x2503a6
      : null;
  }
  ['getAllItem']() {
    return this.memory;
  }
  ['saveItem']() {
    try {
      S.default.writeFile(
        this.path,
        JSON.stringify(this.memory),
        'utf-8',
        (_0x425901) => {
          _0x425901 && console.log('error: ', _0x425901);
        }
      );
    } catch (_0x12fe93) {
      console.log('error: ', _0x12fe93);
    } finally {
      this.curQueueNumber = 0;
    }
  }
}
n.ipcMain.on(c.fileStorageGet, (_0x560be0, _0x19b2fb, _0x27012a) => {
  if (!J.includes(_0x19b2fb)) {
    return;
  }
  const _0x2a9309 = y.store.id;
  if (!_0x2a9309) {
    return;
  }
  const _0x54abdc = (W[_0x19b2fb][_0x2a9309] =
    W[_0x19b2fb][_0x2a9309] || new q(_0x2a9309.toString(), _0x19b2fb));
  let _0xb12bf8;
  _0x27012a
    ? (_0xb12bf8 = _0x54abdc.getItem(_0x27012a))
    : (_0xb12bf8 = _0x54abdc.getAllItem());
  _0x560be0.returnValue = _0xb12bf8;
});
n.ipcMain.on(c.fileStorageSet, (_0x3e7b51, _0x118157, _0x1306eb, _0x2f48a0) => {
  if (!J.includes(_0x118157)) {
    return;
  }
  const _0x2c12d9 = y.store.id;
  if (!_0x2c12d9) {
    return;
  }
  (W[_0x118157][_0x2c12d9] =
    W[_0x118157][_0x2c12d9] || new q(_0x2c12d9.toString(), _0x118157)).setItem(
    _0x1306eb,
    _0x2f48a0
  );
});
n.ipcMain.handle(c.fileStorageClear, (_0x58e55f) => {
  if (!y.store.id) {
    return;
  }
  const _0x1d85bf = q.getDir(y.store.id.toString());
  return ne.rm(_0x1d85bf, {
    recursive: true,
    force: true,
  });
});
const { resizeMinWindow: De, resizeWindow: Se, getFocusWindow: P } = E(),
  ve = Promise.resolve().then(() => ie(require('fs')));
n.ipcMain.handle(c.readJsFile, (_0x25071f, _0x2ad805, _0xa75869 = false) => {
  try {
    if (!ce.includes(_0x2ad805) && !/^common/.test(_0x2ad805)) {
      throw new Error('no support app:' + _0x2ad805);
    }
    const _0x280e10 = f.resolve(
      __dirname,
      '../features/webview/js/',
      _0x2ad805 + '.js'
    );
    return L.readFileSync(_0x280e10, 'utf-8');
  } catch (_0x5a1d4a) {
    return console.error('error: ', _0x5a1d4a), '';
  }
});
n.ipcMain.handle(c.readCssFile, (_0x62f897, _0x2b39df, _0x22958e = false) => {
  try {
    const _0x19fdf1 = f.resolve(
      __dirname,
      '../features/webview/css/',
      _0x2b39df + '.css'
    );
    return L.readFileSync(_0x19fdf1, 'utf-8');
  } catch (_0x410342) {
    return console.error('error: ', _0x410342), '';
  }
});
n.ipcMain.handle(c.getVersion, () => n.app.getVersion());
n.ipcMain.handle(c.getCacheSize, () => {
  const _0x5d8707 = P(),
    _0x3feee7 = _0x5d8707 == null ? void 0 : _0x5d8707.webContents.session;
  return _0x3feee7 == null ? void 0 : _0x3feee7.getCacheSize();
});
n.ipcMain.handle(c.clearCache, () => {
  const _0x202cc3 = P(),
    _0x3ce3a0 = _0x202cc3 == null ? void 0 : _0x202cc3.webContents.session;
  return _0x3ce3a0 == null ? void 0 : _0x3ce3a0.clearCache();
});
n.ipcMain.on(c.handleWindow, (_0x137682, _0x1e4ab5, _0x2c18aa) => {
  const _0x1417e4 = P(),
    _0x2f0229 = M.store;
  switch (_0x1e4ab5) {
    case D.close:
      B.minimize === _0x2f0229.clientCloseType
        ? _0x1417e4.minimize()
        : B.quit === _0x2f0229.clientCloseType &&
          (n.app.quit(), process.exit(0));
      break;
    case D.maximize:
      _0x1417e4.isMaximized() ? _0x1417e4.unmaximize() : _0x1417e4.maximize();
      break;
    case D.minimize:
      _0x1417e4.minimize();
      break;
    case D.openDevTools:
      _0x1417e4 != null && _0x1417e4.webContents.isDevToolsOpened()
        ? _0x1417e4 == null || _0x1417e4.webContents.closeDevTools()
        : _0x1417e4 == null || _0x1417e4.webContents.openDevTools();
      break;
    case D.customResizeWindow:
      Se(_0x1417e4);
      break;
    case D.relaunch:
      n.app.relaunch(), n.app.exit(0);
      break;
  }
});
n.ipcMain.on(c.logout, function (_0x38c5d3, _0x5bb8b7) {
  const _0x52e73a = P();
  y.clear();
  M.set('translateServe', '');
  De(_0x52e73a);
});
const Me = [
  {
    type: 'line',
    name: 'ophjlpahpchlmihnnnihgmmeilfjmjjc',
    version: '3.0.2',
  },
  {
    type: 'tinder',
    name: 'cfohepagpmnodfdmjliccbbigdkfcgia',
    version: '2.5.0_0',
  },
];
n.ipcMain.on(c.loadExtension, function (_0xc946ba, _0xe6ae32) {
  try {
    const _0x5aa7c1 = f.join(
      __dirname,
      '../../',
      n.app.isPackaged ? 'dist/extensions' : 'public/extensions'
    );
    console.log('loading extension: ', _0x5aa7c1);
    const { partition: _0x52377f, type: _0x44a2ca } = _0xe6ae32,
      _0x46cfe2 = n.session.fromPartition(_0x52377f),
      _0xe07b08 = Me.find((_0x5cee71) => _0x5cee71.type === _0x44a2ca),
      _0x23ba4e = P();
    if (_0xe07b08 && _0x46cfe2.getExtension(_0xe07b08.name) == null) {
      const _0x5bebd8 = f.join(_0x5aa7c1, _0xe07b08.name, _0xe07b08.version);
      _0x46cfe2
        .loadExtension(_0x5bebd8)
        .then((_0x3d1324) => {
          console.log('loaded extension');
          _0x23ba4e == null ||
            _0x23ba4e.webContents.send(c.pluginInstalled, {
              success: true,
              data: _0x3d1324,
            });
        })
        .catch((_0x1e2c20) => {
          console.error('error: ', _0x1e2c20);
          _0x23ba4e == null ||
            _0x23ba4e.webContents.send(c.pluginInstalled, {
              success: true,
              data: _0x1e2c20,
            });
        });
    }
  } catch (_0x45c942) {
    console.error('error: ', _0x45c942);
  }
});
n.ipcMain.on(c.overwriteRequestHeader, function (_0x4057af, _0x2e6de6) {
  n.session
    .fromPartition(_0x2e6de6)
    .webRequest.onBeforeSendHeaders((_0x45b366, _0x506818) => {
      try {
        const { url: _0x1446ee } = _0x45b366;
        if (_0x1446ee.includes('.zalo.me')) {
          let _0x191ec7 = _0x45b366.requestHeaders.Cookie;
          _0x191ec7 = _0x191ec7 || '';
          _0x191ec7.indexOf('_zlang=vn') !== -1
            ? (_0x191ec7 = _0x191ec7.replace('_zlang=vn', '_zlang=en'))
            : _0x191ec7.indexOf('_zlang=') === -1 &&
              (_0x191ec7 += '; _zlang=en');
          _0x45b366.requestHeaders.Cookie = _0x191ec7;
        }
      } catch (_0x374d33) {
        console.log('error: ', _0x374d33);
      }
      _0x506818({ requestHeaders: _0x45b366.requestHeaders });
    });
});
n.ipcMain.on(c.openExternal, function (_0x1efd0d, _0x4f66e2) {
  n.shell.openExternal(_0x4f66e2);
});
n.ipcMain.on(c.saveFile, (_0x1a7381, _0x49ca87, _0x3477da) => {
  const { dialog: _0x55403c } = require('electron');
  let _0x35cfe9 = _0x55403c.showOpenDialogSync({
    properties: ['openDirectory'],
  });
  if (_0x35cfe9 && _0x35cfe9.length > 0) {
    let _0x3f7bdd = _0x35cfe9[0] + '/' + _0x3477da;
    ve.writeFile(_0x3f7bdd, Buffer.from(_0x49ca87), function (_0x5a5cfe) {
      console.log(_0x5a5cfe);
    });
  }
});
const O = [];
let j = 0;
const V = 3000;
_e();
O.push({
  type: 'start up',
  message: '',
  created_at: A(),
});
n.ipcMain.on(c.insertDebugRecord, (_0x3e4130, _0x22e75e) => {
  const _0x1a432a = Date.now();
  _0x22e75e.created_at = A();
  O.push(_0x22e75e);
  !(_0x1a432a - j < V) &&
    setTimeout(() => {
      j = _0x1a432a;
      Te();
    }, V);
});
async function Ce(_0x41c459, _0x217109 = false) {
  return new Promise((_0x419033, _0x5e51ed) => {
    const _0x555521 = {
        method: 'GET',
        url: _0x41c459,
      },
      _0x19ecae = n.net.request(_0x555521);
    _0x19ecae.on('response', (_0x3ba5ad) => {
      _0x217109 || _0x419033('');
      let _0xebf192 = '';
      _0x3ba5ad.on('data', (_0x47700a) => {
        _0xebf192 += _0x47700a;
      });
      _0x3ba5ad.on('error', (_0x13b071) => {
        _0x5e51ed(_0x13b071.message);
      });
      _0x3ba5ad.on('end', () => {
        _0x217109 && _0x419033(_0xebf192.toString());
      });
    });
    _0x19ecae.end();
  });
}
n.ipcMain.handle(c.saveLogFile, async (_0x24a2ad, _0x50e7cf) => {
  let _0x3b1d6f = '';
  try {
    _0x3b1d6f = await Ce('https://api.ipify.org', true);
  } catch {}
  let _0x2e37c6 = n.dialog.showOpenDialogSync({
    properties: ['openDirectory'],
  });
  if (_0x2e37c6 && _0x2e37c6.length > 0) {
    const _0xd6c164 = S.default.readFileSync(T.dbName),
      _0x88cdb4 = {
        ipAdrress: _0x3b1d6f,
        ...(await xe()),
      },
      _0x488cd9 = await ke(_0x50e7cf),
      _0x4f8f67 = Buffer.from(
        JSON.stringify({
          systemInfo: _0x88cdb4,
          lastChatDelayTime: _0x488cd9,
          ..._0x50e7cf,
        })
      ).toString('base64'),
      _0xd182f0 = Buffer.from(_0xd6c164).toString('base64'),
      _0x1c515f = '' + _0x4f8f67 + T.splitMark + _0xd182f0;
    S.default.writeFileSync(_0x2e37c6[0] + '\\' + T.logFileName, _0x1c515f);
  }
});
function Te() {
  const _0x42ae29 = O.splice(0),
    _0x24cc0a = new H.default.Database(T.dbName);
  _0x24cc0a.run(
    'CREATE TABLE IF NOT EXISTS record (id INTEGER PRIMARY KEY AUTOINCREMENT, type TEXT, message TEXT, created_at DATETIME)'
  );
  _0x24cc0a.serialize(() => {
    _0x24cc0a.run('BEGIN');
    for (let {
      type: _0x523f00,
      message: _0x1cdf25,
      created_at: _0xb41e78,
    } of _0x42ae29) {
      const _0x4f7921 = _0x24cc0a.prepare(
        'INSERT INTO record (type, message, created_at) VALUES (?, ?, ?)'
      );
      Object.prototype.toString.call(_0x1cdf25) === '[object Object]'
        ? (_0x1cdf25 = JSON.stringify(_0x1cdf25))
        : typeof _0x1cdf25 != 'string' &&
          (_0x1cdf25 = Object.prototype.toString.call(_0x1cdf25));
      _0x4f7921.run([_0x523f00, _0x1cdf25, _0xb41e78]);
      _0x4f7921.finalize();
    }
    _0x24cc0a.run('COMMIT');
  });
  _0x24cc0a.all('SELECT * FROM record', [], (_0x568d46, _0x3aad17) => {
    if (_0x568d46) {
      console.error(_0x568d46.message);
      return;
    }
  });
  _0x24cc0a.close();
}
function A(_0xf83303 = new Date()) {
  const _0x5b1291 = _0xf83303.getTimezoneOffset() * 60 * 1000,
    _0x3ca317 = _0xf83303.getTime() - _0x5b1291;
  return new Date(_0x3ca317).toISOString().slice(0, 19).replace('T', ' ');
}
async function xe() {
  const _0x117572 =
      (C.default.totalmem() / 1024 / 1024 / 1024).toFixed(2) + ' GB',
    _0x554a36 = await $.default.mem(),
    _0xbdfbf4 = (_0x554a36.used / 1024 / 1024 / 1024).toFixed(2) + ' GB',
    _0x28c35e = (_0x554a36.free / 1024 / 1024 / 1024).toFixed(2) + ' GB',
    _0x5066ae = ((_0x554a36.used / _0x554a36.total) * 100).toFixed(2) + '%';
  return {
    memory: {
      total: _0x117572,
      usedMemory: _0xbdfbf4,
      freeMemory: _0x28c35e,
      memoryUsage: _0x5066ae,
    },
    cpu: {
      model: C.default.cpus()[0].model,
      cpuUsage: await $.default
        .currentLoad()
        .then((_0xe95039) => _0xe95039.currentLoad.toFixed(2) + '%'),
    },
    platform: C.default.platform(),
    release: C.default.release(),
    arch: C.default.arch(),
    hostname: C.default.hostname(),
    softwareVersion: n.app.getVersion(),
  };
}
async function ke(_0x1b13ac) {
  let _0x538076 = '';
  const _0x2788e1 = 'https://www.google.com',
    { USER_INFO: _0x45aec8 } = _0x1b13ac;
  if (_0x45aec8) {
    const _0x286f58 = _0x1b13ac['CURRENT_APP-' + _0x45aec8.id];
    _0x538076 = (_0x286f58 == null ? void 0 : _0x286f58.url) || '';
    (!_0x538076 || !~_0x538076.search(/^http/)) && (_0x538076 = _0x2788e1);
    const _0x212ed6 = Date.now();
    try {
      const _0xb502ef = [_0x5abb14(_0x538076)];
      _0x538076 !== _0x2788e1 && _0xb502ef.push(_0x5abb14(_0x2788e1));
      const _0x5cc5d1 = await Promise.allSettled(_0xb502ef),
        _0x4ecb3c = [];
      return (
        _0x5cc5d1.forEach((_0x41b212, _0xbc925d) => {
          _0x4ecb3c.push({
            url:
              _0xb502ef.length === 1 || _0xbc925d + 1 === _0xb502ef.length
                ? _0x2788e1
                : _0x538076,
            time:
              _0x41b212.status === 'fulfilled'
                ? _0x41b212.value - _0x212ed6 + 'ms'
                : 'time out',
          });
        }),
        _0x4ecb3c
      );
    } catch (_0x10a5be) {
      return {
        error: (_0x10a5be == null ? void 0 : _0x10a5be.message) || _0x10a5be,
      };
    }
  } else {
    return {};
  }
  async function _0x5abb14(_0x4530ef) {
    return new Promise((_0x68a849, _0x572066) => {
      const _0x35b8c7 = n.net.request(_0x4530ef),
        _0x3dcadc = setTimeout(() => {
          _0x35b8c7.abort();
          _0x572066('error');
        }, 10000);
      _0x35b8c7.on('response', (_0x4304b7) => {
        _0x4304b7.on('end', () => {
          clearTimeout(_0x3dcadc);
          _0x68a849(Date.now());
        });
      });
      _0x35b8c7.on('error', (_0xa53dd2) => {
        clearTimeout(_0x3dcadc);
        _0x572066('error');
      });
      _0x35b8c7.end();
    });
  }
}
function _e() {
  const _0x12a948 = () => {
    const _0x349a3e = new H.default.Database(T.dbName);
    _0x349a3e.run(
      "DELETE FROM record WHERE created_at < datetime('" +
        A(new Date(Date.now() - 3600000)) +
        "')"
    );
    _0x349a3e.close();
  };
  _0x12a948();
  setInterval(_0x12a948, 3600000);
}
process.env.DIST_ELECTRON = f.join(__dirname, '..');
process.env.DIST = f.join(process.env.DIST_ELECTRON, '../dist');
process.env.PUBLIC = n.app.isPackaged
  ? process.env.DIST
  : f.join(process.env.DIST_ELECTRON, '../public');
pe();
console.log('process.arch :', process.arch);
const { initConfig: Fe } = de(),
  { resizeWindow: ze } = E(),
  { initProtocol: qe } = fe();
N.release().startsWith('6.1') && n.app.disableHardwareAcceleration();
process.platform === 'win32' && n.app.setAppUserModelId(n.app.getName());
n.app.requestSingleInstanceLock() || (n.app.quit(), process.exit(0));
let p = null;
const K = f.join(__dirname, '../preload/index.js'),
  Q = process.env.VITE_DEV_SERVER_URL,
  X = f.join(process.env.DIST, 'index.html');
async function Y() {
  p = new n.BrowserWindow({
    title: 'Look World',
    icon: f.join(process.env.PUBLIC, 'favicon.ico'),
    frame: false,
    resizable: true,
    webPreferences: {
      preload: K,
      allowRunningInsecureContent: true,
      nodeIntegration: true,
      contextIsolation: false,
      webviewTag: true,
      webSecurity: false,
    },
  });
  new le.default(p, { color: '#d03a52' });
  ze(p);
  Fe();
  he();
  n.app.isPackaged ? p.loadFile(X) : p.loadURL(Q);
  p.webContents.on('did-finish-load', () => {
    p == null ||
      p.webContents.send('main-process-message', new Date().toLocaleString());
  });
  p.webContents.setWindowOpenHandler(
    ({ url: _0xbe7837 }) => (
      _0xbe7837.startsWith('https:') && n.shell.openExternal(_0xbe7837),
      { action: 'deny' }
    )
  );
}
qe();
n.app.whenReady().then(() => {
  console.log('load app');
  Y();
});
n.app.on('window-all-closed', () => {
  p = null;
  process.platform !== 'darwin' && n.app.quit();
});
n.app.on('second-instance', () => {
  p && (p.isMinimized() && p.restore(), p.focus());
});
n.app.on('activate', () => {
  const _0x1db8b2 = n.BrowserWindow.getAllWindows();
  _0x1db8b2.length ? _0x1db8b2[0].focus() : Y();
});
n.ipcMain.handle('open-win', (_0x45b03a, _0x245cb9) => {
  const _0x219ef2 = new n.BrowserWindow({ webPreferences: { preload: K } });
  n.app.isPackaged
    ? _0x219ef2.loadFile(X, { hash: _0x245cb9 })
    : _0x219ef2.loadURL(Q + '/#' + _0x245cb9);
});
n.app.on('render-process-gone', (_0x5aff25, _0x8c4068, _0x5da8a) => {
  console.log('e: ', _0x5aff25);
  _0x5da8a.reason == 'crashed'
    ? _0x8c4068.reload()
    : console.error(new Date() + ': 渲染进程被杀死' + _0x5da8a.reason + '\n');
});
process.on('uncaughtException', (_0x5c2e60) => {
  console.error(new Date() + ': ' + _0x5c2e60.toString());
});
