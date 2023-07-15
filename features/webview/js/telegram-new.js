'use strict';
var VERSION = '2022.10.18';
const queueConfig = {
    requestNum: 0,
    maxRequest: 6,
    syncRequest: 3,
    queueId: 1,
  },
  requestQueue = [],
  pendingRequestQueue = [];
let loopTimerId = null,
  lockKeydown = false,
  isInitInput = false;
window.firstStartHelper = true;
window.firstLoad = true;
const modalEl = {
    ipt: null,
    btn: null,
    placeholder: null,
  },
  __appendChild = Node.prototype.appendChild;
Node.prototype.appendChild = function (zayleah) {
  processElement(zayleah);
  const lakeleigh = document.querySelectorAll('#editable-message-text');
  lakeleigh.length > 0 &&
    _delayCall(() => {
      for (let avaleah = 0; avaleah < lakeleigh.length; avaleah++) {
        getInputText(lakeleigh[avaleah]);
      }
    });
  let murrel = zayleah.className;
  getModalInput(zayleah);
  if (hasClass(murrel, 'message-content-wrapper')) {
    setTimeout(() => {
      EachMessageItem(zayleah, this);
    }, 2000);
  }
  return __appendChild.call(this, zayleah);
};
const __insertBefore = Node.prototype.insertBefore;
Node.prototype.insertBefore = function (jazmond, sanaaya) {
  return processElement(jazmond), __insertBefore.call(this, jazmond, sanaaya);
};
function preventEvent(valdir) {
  valdir.preventDefault();
  valdir.stopPropagation();
}
let mutilMsgInput, mutilsendBtn, mutiTransTip;
function processElement(masal) {
  try {
    if (!masal || masal.nodeType !== 1) {
      return;
    }
    setTimeout(() => {
      if (masal.matches('#caption-input-text+div>button')) {
        mutilsendBtn = masal;
        mutilsendBtn.onmousedown = (josmel) => {
          if (josmel.isTrusted && !__config__.disableSend) {
            preventEvent(josmel);
            sendMutilMessage();
            return;
          }
        };
        return;
      }
      if (masal.id === 'editable-message-text-modal') {
        mutilMsgInput = masal;
        mutilMsgInput.addEventListener(
          'keydown',
          (kadasha) => {
            if (kadasha.shiftKey) {
              return true;
            }
            kadasha.key === 'Enter' &&
              !__config__.disableSend &&
              (preventEvent(kadasha), sendMutilMessage());
          },
          true
        );
        mutiTransTip = document.createElement('div');
        mutiTransTip.style =
          'position: absolute;line-height: 1;font-size: 12px;';
        masal.insertAdjacentElement('beforebegin', mutiTransTip);
        return;
      }
    });
  } catch (charrissa) {}
}
function dispatchMouseDown(sameem) {
  sameem.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
}
function sendMutilMessage() {
  const oluwafunmilola =
    mutilMsgInput == null ? void 0 : mutilMsgInput.innerHTML;
  if (validateSkipText(oluwafunmilola)) {
    dispatchMouseDown(mutilsendBtn);
    return;
  }
  InputTipsMsg($t['Translating...'], 'info', mutiTransTip);
  mutilMsgInput.setAttribute('contenteditable', 'false');
  TranslateMessagesDirectly(
    oluwafunmilola,
    function (milosz) {
      const { code: _0x5d8a5b, translateText: _0x5528e7 } = milosz;
      mutilMsgInput.setAttribute('contenteditable', 'true');
      if (_0x5d8a5b != 0) {
        InputTipsMsg(handleMessage(_0x5d8a5b), 'error', mutiTransTip);
      } else {
        let chubbie = _0x5528e7.replaceAll('\\n', '\n');
        mutilMsgInput.innerHTML = chubbie;
        mutilMsgInput.focus();
        mutilMsgInput.dispatchEvent(
          new Event('input', {
            bubbles: true,
            cancelable: true,
          })
        );
        if (!/^ja$/i.test(__config__.sendTo) && hasChinese(chubbie)) {
          InputTipsMsg(
            '结果中出现中文\uFF0C请增加符号发送或者直接发送此结果',
            'error',
            mutiTransTip
          );
          return;
        }
        InputTipsMsg($t['Translation successful'], 'info', mutiTransTip);
        setTimeout(() => {
          dispatchMouseDown(mutilsendBtn);
        }, 50);
      }
    },
    __config__.sendFrom,
    __config__.sendTo
  );
}
document.addEventListener(
  'keydown',
  function (maki) {
    if (maki.shiftKey) {
      return true;
    }
    if (maki.target.id === 'editable-message-text-modal') {
      return true;
    }
    if (maki.defaultPrevented) {
      return;
    }
    let saikrishna = false;
    lockKeydown && (saikrishna = true);
    if (maki.key !== void 0) {
      maki.key == 'Enter' && (saikrishna = EnterKeyDown(maki));
    } else {
      maki.keyCode !== void 0 && (saikrishna = true);
    }
    if (saikrishna) {
      maki.preventDefault();
      maki.stopPropagation();
      maki.stopImmediatePropagation();
    } else {
      __cacheEvent = maki;
    }
  },
  true
);
function newQueueId() {
  return ++queueConfig.queueId;
}
function isExpression(eniylah) {}
function OnMessageChange(gwyne, abbiegayle) {
  let azile = true;
  firstParse();
  if (gwyne) {
    try {
      const kastle = [];
      let illias = '';
      for (let aadhvik of gwyne.childNodes) {
        const anadela = {
          key: aadhvik.alt,
          value:
            '<img class="' +
            aadhvik.getAttribute('class') +
            '" src="' +
            aadhvik.getAttribute('src') +
            '" alt="' +
            aadhvik.getAttribute('alt') +
            '">',
        };
        aadhvik.nodeName === '#text' &&
          ((illias += aadhvik.data), (azile = false));
        if (aadhvik.nodeName === 'IMG') {
          illias += aadhvik.alt;
          kastle.push(anadela);
        } else {
          if (aadhvik.nodeName === 'A') {
            illias += aadhvik.innerHTML;
          } else {
            aadhvik.nodeName === 'BR' && (illias += '\n');
          }
        }
      }
      if (isNumber(illias) || validateSkipText(illias)) {
        return;
      }
      setTimeout(() => {
        var access;
        const brayven = gwyne.closest('.message-list-item'),
          heberto = !!((access = Array.from(
            brayven == null ? void 0 : brayven.classList
          )) == null
            ? void 0
            : access.includes('own'));
        if (
          (heberto && __config__.disableSend) ||
          (!heberto && __config__.disableReceive)
        ) {
          return;
        }
        let seath = gwyne.displayEl;
        if (seath == null) {
          const levell = createDisplayEl();
          seath = levell;
          gwyne.displayEl = levell;
          gwyne.insertAdjacentElement('afterend', levell);
        }
        const jabari = {
          text: illias,
          ele: seath,
          callback: addTSText,
          from: heberto ? __config__.sendTo : __config__.msgFrom,
          to: heberto ? __config__.sendFrom : __config__.msgTo,
          emojiAry: kastle,
          isRight: heberto,
          ...extendDisplayOption(),
        };
        if (!abbiegayle) {
          !__config__.disableReceive
            ? ((seath.innerHTML = $t['Translating...']), MessagePush(jabari))
            : PushDelayRequest(jabari);
        } else {
          if (heberto) {
            seath.innerHTML = $t['Translating...'];
            MessagePush(jabari);
          } else {
            PushDelayRequest(jabari);
          }
        }
      }, 0);
    } catch (jayshaun) {}
  }
}
function EachMessageItem(antonino, dawndra) {
  var rousseau = antonino.getElementsByClassName('text-content');
  setTimeout(() => {
    var germaine = rousseau ? rousseau[0] : null;
    const oswyn = !__config__.isGroup && CheckGroup();
    if (germaine) {
      setTimeout(() => {
        OnMessageChange(germaine, oswyn);
      }, waitIpcDelay);
    }
  }, 0);
}
function SearchMessageItems() {
  const mabree = document.getElementsByClassName('message-content-wrapper');
  for (let keali of mabree) {
    EachMessageItem(keali, keali.parentNode);
  }
}
function GetTextArea() {
  return document.getElementById('message-input-text');
}
function createErrorInput() {
  const dupree = document.createElement('div');
  return (dupree.style.color = 'red'), (dupree.innerHTML = ''), dupree;
}
function getInputText(zaiya) {
  if (!__config__.enabled) {
    return;
  }
  if (zaiya != null && zaiya.getAttribute(constant.translate_id) == null) {
    try {
      const kong = zaiya,
        archie = zaiya.parentElement.parentElement;
      input.errorEl === null &&
        ((input.errorEl = createErrorInput()),
        archie.insertAdjacentElement('beforebegin', input.errorEl));
      kong.setAttribute(constant.translate_id, constant.translate_input);
      Object.assign(input, {
        el: kong,
        placeholder: zaiya.parentElement.querySelector('.placeholder-text'),
        tipText: localePlaceholderText(),
      });
      const manahil =
        archie.parentNode.parentNode.parentNode.nextElementSibling;
      manahil &&
        (manahil.setAttribute(constant.translate_id, constant.send_btn),
        (input.btn = manahil),
        (manahil.onclick = InputButtonClick));
    } catch (asleigh) {}
  }
}
function InputButtonClick(dhea) {
  loadFinish();
  dhea &&
    dhea.isTrusted &&
    (EnterKeyDown(dhea),
    dhea.preventDefault(),
    dhea.stopPropagation(),
    dhea.stopImmediatePropagation());
}
function InputErrorMsg(shanaye) {
  input.errorEl.innerText = shanaye;
}
function CheckGroup() {
  const krishauna = document.getElementsByClassName(itzamara.ShyPk);
  return krishauna && krishauna.length > 0;
}
function checkInput(brody) {
  var arinn = document.querySelectorAll(
    'div[' + constant.translate_id + '=' + constant.translate_input + ']'
  );
  for (let prisma = 0; prisma < arinn.length; prisma++) {
    if (brody == arinn[prisma]) {
      return (input.el = brody), true;
    }
  }
  return false;
}
function checkButton(adolpha) {
  var vonmarie = document.querySelectorAll(
    'button[' + constant.translate_id + '=' + constant.send_btn + ']'
  );
  for (let kristoffer = 0; kristoffer < vonmarie.length; kristoffer++) {
    if (adolpha == vonmarie[kristoffer]) {
      return (input.btn = adolpha), true;
    }
  }
  return false;
}
function getModalInput(alyssandra) {
  try {
    const andreal = alyssandra.className;
    (alyssandra == null ? void 0 : alyssandra.id) ===
      'editable-message-text-modal' &&
      _delayCall(() => {
        modalEl.ipt = alyssandra;
      });
    hasClass(andreal, 'modal-action-button') &&
      _delayCall(() => {
        alyssandra.setAttribute('id', 'translate-modal-btn'),
          (alyssandra.onclick = InputButtonClick),
          (modalEl.btn = alyssandra);
      });
    hasClass(andreal, 'placeholder-text') &&
      _delayCall(() => {
        alyssandra.innerText = localePlaceholderText();
        modalEl.placeholder = alyssandra;
      });
  } catch (sofhia) {}
}
function handleModalInput(dezerea) {
  dezerea.preventDefault();
  dezerea.stopPropagation();
  dezerea.stopImmediatePropagation();
  let { ipt: _0x20a5b8, btn: _0x589cc8 } = modalEl;
  const ceianna =
    _0x20a5b8 == null ? void 0 : _0x20a5b8.innerText.replace(/^\s*|\s*$/g, '');
  ceianna &&
    _0x20a5b8 &&
    _0x589cc8 &&
    (__config__.disableSend || validateSkipText(ceianna)
      ? setTimeout(() => {
          _0x589cc8.click();
        }, 100)
      : ((_0x20a5b8.innerHTML = ceianna + $t['[Translating...]']),
        TranslateMessagesDirectly(
          ceianna,
          (maran) => {
            const { code: _0x5db9c9, translateText: _0x20b123 } = maran;
            _0x5db9c9 === 0 &&
              ((lockKeydown = true),
              (_0x20a5b8.innerHTML = _0x20b123),
              FireMessageInputEvent(_0x20a5b8),
              setTimeout(() => {
                _0x589cc8.click();
                lockKeydown = false;
              }, 100));
          },
          __config__.sendFrom,
          __config__.sendTo
        )));
}
let enterKeyDownLock = false;
function EnterKeyDown(skylen) {
  if (enterKeyDownLock) {
    return true;
  }
  const elouisa = curValue;
  let corin = '',
    kensingtyn = '';
  loadFinish();
  resetFirst();
  const samir = skylen.target;
  if (
    samir.id === 'editable-message-text-modal' ||
    samir.id === 'translate-modal-btn'
  ) {
    return handleModalInput(skylen);
  }
  if (
    input.el != null &&
    (checkInput(samir) || checkButton(skylen.currentTarget))
  ) {
    InputErrorMsg('');
    if (samir.innerText !== '' && !hasClass(samir.className, 'icon-send')) {
      if (samir.childNodes.length > 1) {
        for (var grasiela = 0; grasiela < samir.childNodes.length; grasiela++) {
          if (samir.childNodes[grasiela].className) {
            corin += samir.childNodes[grasiela].alt;
            kensingtyn += samir.childNodes[grasiela].alt;
          } else {
            if (samir.childNodes[grasiela].nodeName === '#text') {
              corin += samir.childNodes[grasiela].data;
              kensingtyn += samir.childNodes[grasiela].data;
            } else {
              samir.childNodes[grasiela].nodeName === 'BR' && (corin += '\\n');
            }
          }
        }
      } else {
        corin = samir.innerText;
        kensingtyn = samir.innerHTML;
      }
    } else {
      const tiaunna = document.querySelectorAll(
        'div[id=editable-message-text]'
      );
      for (let kaycee = 0; kaycee < tiaunna.length; kaycee++) {
        if (
          tiaunna[kaycee].innerHTML != '' ||
          tiaunna[kaycee].innerText != ''
        ) {
          corin = tiaunna[kaycee].innerText;
          kensingtyn = tiaunna[kaycee].innerHTML;
          break;
        }
      }
    }
    return (
      (corin = corin.replace(/^\s*|\s*$/g, '')),
      input.btn &&
        input.currentText == '' &&
        kensingtyn != '' &&
        (__config__.disableSend || validateSkipText(corin)
          ? setTimeout(() => {
              input.btn.click();
            }, 100)
          : ((input.currentText = corin),
            (input.el.innerHTML = corin + $t['[Translating...]']),
            (enterKeyDownLock = true),
            TranslateMessagesDirectly(
              corin,
              (evana) => {
                const { code: _0x5b2dad, translateText: _0x87700c } = evana;
                if (elouisa !== curValue) {
                  return (enterKeyDownLock = false), (sendLock = false);
                }
                if (_0x5b2dad === 0) {
                  input.el.innerHTML = _0x87700c.replaceAll('\\n', '\n');
                  lockKeydown = true;
                  FireMessageInputEvent(input.el);
                  setTimeout(() => {
                    lockKeydown = false;
                    enterKeyDownLock = false;
                    if (
                      !/^ja$/i.test(__config__.sendTo) &&
                      hasChinese(_0x87700c)
                    ) {
                      InputErrorMsg(
                        '结果中出现中文\uFF0C请增加符号发送或者直接发送此结果'
                      );
                      return;
                    }
                    input.btn.click();
                  }, 100);
                } else {
                  enterKeyDownLock = false;
                  input.el.innerHTML = corin;
                  InputErrorMsg(handleMessage(_0x5b2dad));
                }
              },
              __config__.sendFrom,
              __config__.sendTo
            ),
            (input.currentText = ''))),
      true
    );
  } else {
    if (
      __fileInputText != null &&
      (samir === __fileInputText || skylen.currentTarget === __fileInputBtn)
    ) {
      return true;
    }
  }
  return true;
}
function loopRequest() {
  if (
    pendingRequestQueue.length < queueConfig.maxRequest &&
    requestQueue.length > 0
  ) {
    const jshin = requestQueue.shift();
    pendingRequestQueue.push(jshin);
  }
  let cresie = pendingRequestQueue.shift();
  if (!cresie) {
    return;
  }
  translateApi(
    {
      from: __config__.sendFrom,
      to: __config__.sendTo,
      text: cresie.originText,
    },
    (nasere) => {
      const tanihya = createTranslateEl();
      tanihya.innerHTML = nasere.result.translation[0];
      cresie.el.appendChild(tanihya);
    },
    (haruyo) => {
      requestQueue.push({
        ...cresie,
        requestNum: cresie.requestNum + 1,
      });
    }
  );
}
let realTimeClData;
function InputTipsMsg(cerena, anacani, townsend) {
  if (townsend) {
    clearInterval(realTimeClData);
    anacani === 'error'
      ? (townsend.style.color = 'red')
      : (townsend.style.color = 'var(--chatColor)');
    townsend.innerHTML = cerena;
    townsend.style.display = 'block';
    realTimeClData = setInterval(function () {
      townsend.style.display = 'none';
    }, 5000);
  }
}
window['__waitId'] = -1;
function initInput(kilen) {
  isInitInput = true;
  kilen.setAttribute(constant.translate_id, constant.translate_input);
  input.placeholder = kilen.getElementsByClassName('placeholder-text')[0];
  input.tipText = localePlaceholderText();
  if (input.placeholder) {
    input.placeholder.innerText = input.tipText;
  }
}
function StartHelper(deems) {
  !deems &&
    window['__waitId'] === -1 &&
    (window['__waitId'] = setTimeout(StartHelper, 100, true));
  const avishai = GetTextArea();
  avishai && initInput(avishai);
  window['__waitId'] = -1;
  window.firstStartHelper = false;
  if (loopTimerId) {
    return;
  }
  loopTimerId = setInterval(loopRequest, 1000);
}
setTimeout(() => {
  StartHelper();
}, 100);
window.firstLoad && (SearchMessageItems(), (window.firstLoad = false));
function sendQuickMessage(rogina) {
  input.el.innerHTML = unescape(rogina);
  const laquane = createInputEvent();
  input.el.dispatchEvent(laquane);
  let greisy = createKeydownEvent();
  input.el.dispatchEvent(greisy);
}
let timerId = null;
function checkUnread() {
  var azeez;
  if (location.href.indexOf('web.telegram.org/z/') !== -1) {
    const aliska = document.querySelectorAll('.ChatBadge.unread:not(.muted)'),
      marrek =
        ((azeez = Array.from(aliska)) == null
          ? void 0
          : azeez.reduce((mardi, collett) => {
              var sharlene;
              return (
                mardi +
                Number(
                  ((sharlene = collett == null ? void 0 : collett.innerText) ==
                  null
                    ? void 0
                    : sharlene.replace(/[^\d]/g, '')) || 0
                )
              );
            }, 0)) || 0;
    updateBadge(marrek);
  }
}
checkUnread();
timerId = setInterval(checkUnread, 3000);
let curValue = location.href;
function getUserName() {
  const abyan =
    document.querySelector('.ListItem.selected .fullName') ||
    document.querySelector('#MiddleColumn .title .fullName');
  return (abyan == null ? void 0 : abyan.innerText) || '';
}
let currentInfo = {
  curUser: '',
  preUser: '',
};
function updateChatChange() {
  currentInfo.preUser = currentInfo.curUser;
  currentInfo.curUser = getUserName();
  chatChange(currentInfo);
}
function hashchange(khalon) {
  updateChatChange();
  if (!isInitInput) {
    const amrutha = GetTextArea();
    amrutha && initInput(amrutha);
  }
  curValue = khalon;
}
function urlChange(dnyah) {
  resetFirst(true);
}
function chatChange() {
  window['$electron'].chatChange(currentInfo);
}
updateChatChange();
0;
