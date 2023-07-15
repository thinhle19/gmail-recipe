'use strict';
let msgInput = null,
  translateTips = null,
  lockUser = '',
  isPrevent = false;
const chatLeftClass = [
    'ztn2w49o n3t5jt4f k1z55t6l ne6e0wym pbevjfx6',
    'x1yc453h x126k92a x6prxxf x1fc57z9 xzsf02u',
  ],
  chatRightClass = [
    'ztn2w49o n3t5jt4f k1z55t6l ne6e0wym qsbzbi57',
    'x1yc453h x126k92a x6prxxf x1fc57z9 x14ctfv',
  ],
  chatLoadingClass = [
    'alzwoclg gldv74r8 s1m0hq7j rj2hsocd k1z55t6l',
    'x78zum5 xuk3077 xz9dl7a xsag5q8 x6prxxf',
  ];
window['__dom_hook'].createElement = function (
  _0x32a5c5,
  _0x1e4e79,
  _0x41023d
) {
  return _0x41023d.apply(_0x32a5c5, _0x1e4e79);
};
window['__dom_hook'].appendChild = function (_0x4ddf2b, _0x35f5a8, _0x44638b) {
  const [_0x20acaa] = _0x35f5a8;
  return (
    setTimeout(() => {
      parseElement(_0x20acaa);
    }, 100),
    _0x44638b.call(_0x4ddf2b, _0x20acaa)
  );
};
window['__dom_hook'].insertBefore = function (_0x4c71d1, _0x1dd028, _0x1134a4) {
  const [_0x5c22b1, _0x5c1cd7] = _0x1dd028,
    _0x212e4a = _0x1134a4.call(_0x4c71d1, _0x5c22b1, _0x5c1cd7);
  return (
    setTimeout(() => {
      parseElement(_0x5c22b1);
    }, 100),
    _0x212e4a
  );
};
window['__dom_hook'].removeChild = function (_0x2273f4, _0xff139d, _0x4cdc30) {
  const [_0xac2684] = _0xff139d;
  return _0x4cdc30.call(_0x2273f4, _0xac2684);
};
function formatText(_0x57c9e4) {
  return _0x57c9e4 == null
    ? void 0
    : _0x57c9e4
        .replace(/^\s*|\s*$/g, '')
        .replace(/[\n]/g, '</br>')
        .replace('undefined', '')
        .replace('undefined', '');
}
function IsEmpty(_0xc3ad57) {
  return (
    typeof _0xc3ad57 == 'undefined' ||
    _0xc3ad57 == null ||
    _0xc3ad57.trim() === ''
  );
}
function CheckGroup() {
  let _0x2f5d2f = document.getElementsByClassName(
    'x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xdl72j9 x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m x3nfvp2 x1q0g3np x87ps6o x1lku1pv x1a2a7pz x193iq5w'
  );
  if (_0x2f5d2f.length === 1) {
    return (
      _0x2f5d2f[0].parentNode.className ===
      'x9f619 x1n2onr6 x1ja2u2z x78zum5 x1r8uery x1iyjqo2 xs83m0k xeuugli x1qughib x6s0dn4 xozqiw3 x1q0g3np xykv574 xbmpl8g x4cne27 xifccgj'
    );
  }
  if (_0x2f5d2f.length === 2) {
    return (
      _0x2f5d2f[1].parentNode.className ===
      'x9f619 x1n2onr6 x1ja2u2z x78zum5 x1r8uery x1iyjqo2 xs83m0k xeuugli x1qughib x6s0dn4 xozqiw3 x1q0g3np xykv574 xbmpl8g x4cne27 xifccgj'
    );
  }
}
function detectChinese(_0x41a155) {
  return new RegExp(_0x4cc690.jhuNo, 'g').test(_0x41a155);
}
function checkInput(_0x41cde2) {
  const _0xe1ee95 = document.querySelectorAll('div[name=msgInput]');
  for (let _0x3d415b = 0; _0x3d415b < _0xe1ee95.length; _0x3d415b++) {
    if (_0x41cde2 === _0xe1ee95[_0x3d415b]) {
      return (msgInput = _0x41cde2), true;
    }
  }
  return false;
}
function checkButton(_0x3bc115) {
  let _0x53cbbf = document.querySelectorAll('div[name=sendButton]');
  for (let _0x594e89 = 0; _0x594e89 < _0x53cbbf.length; _0x594e89++) {
    if (_0x3bc115 === _0x53cbbf[_0x594e89]) {
      return (input.btn = _0x3bc115), true;
    }
  }
  return false;
}
function searchMessageInput() {
  const _0x3da7c6 =
      'pbevjfx6 icdlwmnq om3e55n1 l4e6dv8b cgu29s5g effxes4x lgak1ieh aeinzg81 mm05nxu8 notranslate',
    _0x38d114 =
      'xzsf02u x1a2a7pz x1n2onr6 x14wi4xw x1iyjqo2 x1gh3ibb xisnujt xeuugli x1odjw0f notranslate',
    _0x49dfe3 =
      document.querySelector(str2Class(_0x3da7c6)) ||
      document.querySelector(str2Class(_0x38d114));
  _0x49dfe3 &&
    (_0x49dfe3.setAttribute('id', 'msgInput'),
    _0x49dfe3.setAttribute('name', 'msgInput'),
    (input.el = _0x49dfe3),
    (msgInput = _0x49dfe3));
}
function searchPlaceholder() {
  const _0x3896f4 =
      'rtxb060y lq84ybu9 hf30pyar l10tt5db s8sjc6am myo4itp8 oshhggmv ekq1a7f9 f14ij5to qm54mken mfclru0v',
    _0x239518 =
      'xi81zsa x6ikm8r x10wlt62 x47corl x10l6tqk x17qophe xlyipyv x13vifvy x87ps6o xuxw1ft xh8yej3',
    _0x569b86 =
      document.querySelector(str2Class(_0x3896f4)) ||
      document.querySelector(str2Class(_0x239518));
  _0x569b86 &&
    (_0x569b86.setAttribute('id', 'translateTips_old'),
    (input.tipText = localePlaceholderText()),
    (_0x569b86.innerHTML = input.tipText),
    (input.placeholder = _0x569b86));
}
function searchSendButton() {
  const _0x32aa0d =
      'qi72231t o9w3sbdw nu7423ey tav9wjvu flwp5yud tghlliq5 gkg15gwv s9ok87oh s9ljgwtm lxqftegz bf1zulr9 frfouenu bonavkto djs4p424 r7bn319e bdao358l fsf7x5fv tgm57n0e s5oniofx m8h3af8h kjdc1dyq dnr7xe2t aeinzg81 om3e55n1 cr00lzj9 rn8ck1ys s3jn8y49 g4tp4svg o9erhkwx dzqi5evh hupbnkgi hvb2xoa8 fxk3tzhb jl2a5g8c f14ij5to l3ldwz01 icdlwmnq jez8cy9q c7y9u1f0 q46jt4gp b0eko5f3 r5g9zsuq fwlpnqze b7mnygb8 iec8yc8l',
    _0x156828 =
      'x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xdl72j9 xe8uvvx xdj266r xat24cr x2lwn1j xeuugli x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m x3nfvp2 x1q0g3np x87ps6o x1lku1pv x1a2a7pz x2lah0s x1c4vz4f x1y1aw1k x1sxyh0 xwib8y2 xurb0ha xw3qccf xsgj6o6',
    _0x5c45fc =
      'x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xdl72j9 xe8uvvx xdj266r xat24cr x2lwn1j xeuugli x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m x3nfvp2 x1q0g3np x87ps6o x1lku1pv x1a2a7pz x2lah0s x1c4vz4f x1y1aw1k x1sxyh0 xwib8y2 xurb0ha x1emribx x1i64zmx',
    _0x598298 =
      document.querySelector(str2Class(_0x32aa0d)) ||
      document.querySelector(str2Class(_0x156828)) ||
      document.querySelector(str2Class(_0x5c45fc));
  _0x598298 &&
    (_0x598298.setAttribute('id', 'sendButton'),
    _0x598298.setAttribute('name', 'sendButton'),
    (_0x598298.onclick = InputButtonClick),
    (input.btn = _0x598298));
}
function searchAndCreateLoading() {
  const _0x36160b = 'x78zum5 xuk3077 xz9dl7a xsag5q8 x6prxxf',
    _0x352c08 =
      document.querySelector(
        str2Class('alzwoclg gldv74r8 s1m0hq7j rj2hsocd k1z55t6l')
      ) || document.querySelector(str2Class(_0x36160b));
  if (_0x352c08) {
    const _0x326c03 = createLoadingEl();
    input.loading = _0x326c03;
    _0x352c08.insertAdjacentElement('beforebegin', _0x326c03);
  }
}
function parseElement(_0x317402) {
  try {
    let _0x4d2eff = _0x317402.className;
    if (_0x4d2eff && _0x4d2eff.indexOf) {
      input.el == null && searchMessageInput();
      searchPlaceholder();
      searchSendButton();
      input.loading && searchAndCreateLoading();
      if (
        compareUnorderedStr(_0x4d2eff, chatLoadingClass[0]) ||
        compareUnorderedStr(_0x4d2eff, chatLoadingClass[1])
      ) {
        const _0x4dfdc5 = createLoadingEl();
        input.loading = _0x4dfdc5;
        _0x317402.insertAdjacentElement('beforebegin', _0x4dfdc5);
      }
      (compareUnorderedStr(_0x4d2eff, chatLeftClass[0]) ||
        compareUnorderedStr(_0x4d2eff, chatLeftClass[1])) &&
        parsingMessage(_0x317402, false);
      (compareUnorderedStr(_0x4d2eff, chatRightClass[0]) ||
        compareUnorderedStr(_0x4d2eff, chatRightClass[1])) &&
        parsingMessage(_0x317402, true);
    }
  } catch (_0x49cd36) {
    console.error(_0x49cd36);
  }
}
function parsingMessage(_0x310679, _0x23a75a) {
  setTimeout(() => {
    firstParse();
    try {
      let _0x346664 = '',
        _0x291942 = [];
      if (_0x310679.childNodes.length > 1) {
        for (
          var _0x266233 = 0;
          _0x266233 < _0x310679.childNodes.length;
          _0x266233++
        ) {
          _0x310679.childNodes[_0x266233].childNodes.length > 0
            ? (_0x310679.childNodes[_0x266233].childNodes[0].nodeName ===
                'IMG' &&
                (_0x346664 +=
                  _0x310679.childNodes[_0x266233].childNodes[0].alt),
              _0x310679.childNodes[_0x266233].nodeName === 'SPAN' &&
                (_0x346664 += _0x310679.childNodes[_0x266233].innerText))
            : _0x310679.childNodes[_0x266233].nodeName === '#text' &&
              (_0x346664 += _0x310679.childNodes[_0x266233].nodeValue);
        }
      } else {
        _0x310679.childNodes.length === 1 &&
          (_0x346664 +=
            _0x310679.childNodes[0].nodeValue ||
            _0x310679.childNodes[0].innerText);
      }
      _0x346664 = formatText(_0x346664);
      if (IsEmpty(_0x346664)) {
        return;
      }
      if (isNumber(_0x346664)) {
        return;
      }
      if (skipTranslate(_0x23a75a) || isURL(_0x346664)) {
        return;
      }
      let _0x47ac0a = _0x310679.displayEl;
      if (_0x47ac0a == null) {
        const _0x5ee09f = createDisplayEl();
        _0x5ee09f.innerHTML = $t['Translating...'];
        _0x47ac0a = _0x5ee09f;
        _0x310679.displayEl = _0x5ee09f;
        _0x310679.insertAdjacentElement('afterend', _0x5ee09f);
      }
      let _0x43c78c = {
        text: _0x346664,
        ele: _0x47ac0a,
        textele: _0x310679,
        endtext: '',
        callback: addTSText,
        from: _0x23a75a ? __config__.sendTo : __config__.msgFrom,
        to: _0x23a75a ? __config__.sendFrom : __config__.msgTo,
        emojiAry: _0x291942,
        isRight: _0x23a75a,
        ...extendDisplayOption(),
      };
      !CheckGroup()
        ? ((_0x47ac0a.innerHTML = $t['Translating...']), MessagePush(_0x43c78c))
        : ((_0x47ac0a.innerHTML = $t['Translating...']),
          __config__.isGroup
            ? MessagePush(_0x43c78c)
            : _0x23a75a && !__config__.disableSend
            ? MessagePush(_0x43c78c)
            : PushDelayRequest(_0x43c78c));
    } catch (_0x2a0d61) {
      console.error(_0x2a0d61);
    }
  }, waitIpcDelay);
}
document.addEventListener(
  'keydown',
  function (_0x293761) {
    if (_0x293761.key === 'Enter') {
      if (_0x293761.target.id === 'msgInput') {
        _0x293761.preventDefault();
        _0x293761.stopPropagation();
        _0x293761.stopImmediatePropagation();
        if (!sendLock) {
          sendLock = true;
          enterKeyDown(_0x293761);
        }
      } else {
        searchMessageInput();
        _0x293761.preventDefault();
        _0x293761.stopPropagation();
        _0x293761.stopImmediatePropagation();
        !sendLock && ((sendLock = true), enterKeyDown(_0x293761));
      }
    }
  },
  true
);
function enterKeyDown(_0x315ec7) {
  const _0x44bc92 = getCurVal();
  loadFinish();
  resetFirst();
  lockUser = getCurVal();
  isPrevent = false;
  try {
    let _0x248305 = '',
      _0x3d7cf0 = true;
    if (
      msgInput != null &&
      (checkInput(_0x315ec7.target) || checkButton(_0x315ec7.currentTarget))
    ) {
      InputTipsMsg('', 'info', _0x315ec7.target);
      let _0x1714c8 = '';
      if (_0x315ec7.target.nodeName === 'DIV') {
        if (_0x315ec7.target.id === 'msgInput') {
          msgInput = _0x315ec7.target;
          _0x1714c8 = msgInput.childNodes[0];
        } else {
          let _0x2f4775 =
              _0x315ec7.target.parentNode.parentNode.getElementsByClassName(
                'pbevjfx6 icdlwmnq om3e55n1 l4e6dv8b cgu29s5g effxes4x lgak1ieh aeinzg81 mm05nxu8 notranslate'
              )[0],
            _0x562708 =
              _0x315ec7.target.parentNode.parentNode.getElementsByClassName(
                'xzsf02u x1a2a7pz x1n2onr6 x14wi4xw x1iyjqo2 x1gh3ibb xisnujt xeuugli x1odjw0f notranslate'
              )[0];
          msgInput = _0x2f4775 ? _0x2f4775 : _0x562708;
          _0x1714c8 = msgInput.childNodes[0];
        }
      }
      if (_0x315ec7.target.nodeName === 'svg') {
        let _0x59cb8f =
            _0x315ec7.target.parentNode.parentNode.parentNode.getElementsByClassName(
              'pbevjfx6 icdlwmnq om3e55n1 l4e6dv8b cgu29s5g effxes4x lgak1ieh aeinzg81 mm05nxu8 notranslate'
            )[0],
          _0x37f5eb =
            _0x315ec7.target.parentNode.parentNode.parentNode.getElementsByClassName(
              'xzsf02u x1a2a7pz x1n2onr6 x14wi4xw x1iyjqo2 x1gh3ibb xisnujt xeuugli x1odjw0f notranslate'
            )[0];
        msgInput = _0x59cb8f ? _0x59cb8f : _0x37f5eb;
        _0x1714c8 = msgInput.childNodes[0];
      }
      if (_0x315ec7.target.nodeName === 'path') {
        let _0x1c83fe =
            _0x315ec7.target.parentNode.parentNode.parentNode.parentNode.getElementsByClassName(
              'pbevjfx6 icdlwmnq om3e55n1 l4e6dv8b cgu29s5g effxes4x lgak1ieh aeinzg81 mm05nxu8 notranslate'
            )[0],
          _0x3c7a17 =
            _0x315ec7.target.parentNode.parentNode.parentNode.parentNode.getElementsByClassName(
              'xzsf02u x1a2a7pz x1n2onr6 x14wi4xw x1iyjqo2 x1gh3ibb xisnujt xeuugli x1odjw0f notranslate'
            )[0];
        msgInput = _0x1c83fe ? _0x1c83fe : _0x3c7a17;
        _0x1714c8 = msgInput.childNodes[0];
      }
      for (
        let _0x486a3e = 0;
        _0x486a3e < _0x1714c8.childNodes.length;
        _0x486a3e++
      ) {
        _0x1714c8.childNodes[_0x486a3e].nodeName === 'SPAN' &&
          (_0x1714c8.childNodes[_0x486a3e].className !==
            'hsphh064 owmke36a kjdc1dyq ctgv7vl3 m8h3af8h lvuc4oj0 je9skisw tt3ens6q eq5u9d8z' &&
            (_0x3d7cf0 = false),
          (_0x248305 += _0x1714c8.childNodes[_0x486a3e].innerText)),
          _0x1714c8.childNodes[_0x486a3e].nodeName === 'BR' &&
            (_0x248305 += '\n');
      }
      if (__config__.disableSend || validateSkipText(_0x248305)) {
        setTimeout(() => {
          input.btn.click();
          sendLock = false;
        }, 1);
      } else {
        _0x3d7cf0
          ? setTimeout(() => {
              sendLock = false;
              input.btn.click();
            }, 1)
          : (InputTipsMsg(
              $t["Translating...don't click send frequently"],
              'info',
              _0x315ec7.target
            ),
            TranslateMessagesDirectly(
              _0x248305,
              function (_0x111cd4) {
                const { code: _0x1e62d5, translateText: _0x598c40 } = _0x111cd4;
                console.log(
                  '\uD83D\uDE80 ~ file: messenger.js:446 ~ data',
                  _0x111cd4
                );
                if (_0x44bc92 !== getCurVal()) {
                  return (sendLock = false);
                }
                if (_0x1e62d5 != 0) {
                  InputTipsMsg(
                    handleMessage(_0x1e62d5),
                    'error',
                    _0x315ec7.target
                  ),
                    (sendLock = false);
                } else {
                  selectText(msgInput);
                  setTimeout(() => {
                    sendLock = false;
                    Firepaste(_0x598c40);
                    setTimeout(() => {
                      if (isPrevent) {
                        return (isPrevent = false);
                      }
                      input.btn.click();
                    }, 50);
                  }, 100);
                  InputTipsMsg(
                    $t['Translation successful'],
                    'info',
                    _0x315ec7.target
                  );
                  setTimeout(() => {
                    InputTipsMsg('', 'info', _0x315ec7.target);
                  }, 1000);
                }
              },
              __config__.sendFrom,
              __config__.sendTo
            ));
      }
    }
  } catch (_0x1a3fd5) {
    (sendLock = false), Firepaste(''), console.error(_0x1a3fd5);
  }
}
function InputButtonClick(_0x5c5b2c) {
  loadFinish();
  _0x5c5b2c.isTrusted &&
    (_0x5c5b2c.preventDefault(),
    _0x5c5b2c.stopPropagation(),
    _0x5c5b2c.stopImmediatePropagation(),
    !sendLock
      ? ((sendLock = true), enterKeyDown(_0x5c5b2c))
      : (sendLock = false));
}
function Firepaste(_0xfa43c) {
  if (!_0xfa43c) {
    return;
  }
  const _0x113b79 = Object.assign(
    new Event('paste', {
      bubbles: true,
      cancelable: true,
    }),
    {
      clipboardData: {
        getData: () => _0xfa43c,
        types: ['text'],
      },
    }
  );
  msgInput.focus();
  msgInput.dispatchEvent(_0x113b79);
}
function selectText(_0x1609f0) {
  _0x1609f0.focus();
  if (document.selection) {
    const _0x1176b6 = document.body.createTextRange();
    _0x1176b6.moveToElementText(_0x1609f0);
    _0x1176b6.select();
  } else {
    if (window.getSelection) {
      window.getSelection().selectAllChildren(_0x1609f0);
    }
  }
}
let realTimeClData = null;
function InputTipsMsg(_0x2be7a8, _0x5c8f5c, _0x227c8e) {
  let _0x499f02 = null;
  if (_0x227c8e.nodeName === 'DIV') {
    _0x227c8e.id === 'msgInput'
      ? (_0x499f02 =
          _0x227c8e.parentElement.parentElement.parentElement.parentElement
            .parentElement.parentElement.parentElement.children[0])
      : (_0x499f02 =
          _0x227c8e.parentElement.parentElement.parentElement.children[0]);
  }
  _0x227c8e.nodeName === 'svg' &&
    (_0x499f02 =
      _0x227c8e.parentElement.parentElement.parentElement.parentElement
        .children[0]);
  _0x227c8e.nodeName === 'path' &&
    (_0x499f02 =
      _0x227c8e.parentElement.parentElement.parentElement.parentElement
        .parentElement.children[0]);
  input.loading &&
    _0x499f02 &&
    (_0x5c8f5c === 'error'
      ? (_0x499f02.style.color = 'red')
      : (_0x499f02.style.color = 'var(--chatColor)'),
    (_0x499f02.innerHTML = _0x2be7a8),
    (_0x499f02.style.display = 'block'));
}
function sendQuickMessage(_0x4e0359) {
  console.log('text: ', _0x4e0359);
  const _0x491023 = unescape(_0x4e0359);
  searchMessageInput();
  InputTipsMsg($t['Quick reply is being translated...'], 'info', msgInput);
  TranslateMessagesDirectly(
    _0x491023,
    function (_0xba1662) {
      const { code: _0x3a471c, translateText: _0x5922d2 } = _0xba1662;
      _0x3a471c != 0
        ? ((sendLock = false),
          InputTipsMsg(handleMessage(_0x3a471c), 'error', msgInput))
        : (selectText(msgInput),
          setTimeout(() => {
            Firepaste(_0x5922d2);
            setTimeout(() => {
              (sendLock = false), input.btn.click();
            }, 50);
          }, 100),
          InputTipsMsg($t['Translation successful'], 'info', msgInput));
    },
    __config__.sendFrom,
    __config__.sendTo
  );
}
let timerId = null;
function checkUnread() {
  updateBadge(document.querySelectorAll('[aria-label="Mark as read"]').length);
}
checkUnread();
timerId = setInterval(checkUnread, 3000);
console.log('inject messager.js');
function getCurVal() {
  return location.href;
}
document.addEventListener('click', function () {
  console.log(lockUser);
  setTimeout(() => {
    lockUser !== '' && lockUser !== getCurVal() && (isPrevent = true);
  }, 0);
});
function urlChange(_0xce38e7) {
  resetFirst(true);
  console.log('urlChange :', _0xce38e7);
}
0;
