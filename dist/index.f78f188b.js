'use strict';
const e = require('./index.3840a89d.js'),
  t = require('./useDelayTime.c75a4cd7.js'),
  a = require('./Input.3f4c4aa8.js'),
  o = require('./Switch.a86b5994.js'),
  n = require('./Badge.53ca7866.js');
const i = {
  name: 'Space',
  self: () => e.commonVars,
};
let l;
const r = () => {
    if (!e.isBrowser$1) {
      return true;
    }
    if (void 0 === l) {
      const e = document.createElement('div');
      e.style.display = 'flex';
      e.style.flexDirection = 'column';
      e.style.rowGap = '1px';
      e.appendChild(document.createElement('div'));
      e.appendChild(document.createElement('div'));
      document.body.appendChild(e);
      const t = 1 === e.scrollHeight;
      return document.body.removeChild(e), (l = t);
    }
    return l;
  },
  s = Object.assign(Object.assign({}, e.useTheme.props), {
    align: String,
    justify: {
      type: String,
      default: 'start',
    },
    inline: Boolean,
    vertical: Boolean,
    size: {
      type: [String, Number, Array],
      default: 'medium',
    },
    wrapItem: {
      type: Boolean,
      default: true,
    },
    itemStyle: [String, Object],
    wrap: {
      type: Boolean,
      default: true,
    },
    internalUseGap: {
      type: Boolean,
      default: void 0,
    },
  }),
  c = e.defineComponent({
    name: 'Space',
    props: s,
    setup(t) {
      const { mergedClsPrefixRef: a, mergedRtlRef: o } = e.useConfig(t),
        n = e.useTheme('Space', '-space', void 0, i, t, a),
        l = e.useRtl('Space', o, a);
      return {
        useGap: r(),
        rtlEnabled: l,
        mergedClsPrefix: a,
        margin: e.computed(() => {
          const { size: a } = t;
          if (Array.isArray(a)) {
            return {
              horizontal: a[0],
              vertical: a[1],
            };
          }
          if ('number' == typeof a) {
            return {
              horizontal: a,
              vertical: a,
            };
          }
          const {
              self: { [e.createKey('gap', a)]: o },
            } = n.value,
            { row: i, col: l } = e.getGap(o);
          return {
            horizontal: e.depx(l),
            vertical: e.depx(i),
          };
        }),
      };
    },
    render() {
      const {
          vertical: t,
          align: a,
          inline: o,
          justify: n,
          itemStyle: i,
          margin: l,
          wrap: r,
          mergedClsPrefix: s,
          rtlEnabled: c,
          useGap: u,
          wrapItem: d,
          internalUseGap: p,
        } = this,
        f = e.flatten(
          (function (e, t = 'default', a = []) {
            const o = e.$slots[t];
            return void 0 === o ? a : o();
          })(this)
        );
      if (!f.length) {
        return null;
      }
      const m = `${l.horizontal}px`,
        v = l.horizontal / 2 + 'px',
        h = `${l.vertical}px`,
        g = l.vertical / 2 + 'px',
        y = f.length - 1,
        C = n.startsWith('space-');
      return e.h(
        'div',
        {
          role: 'none',
          class: [`${s}-space`, c && `${s}-space--rtl`],
          style: {
            display: o ? 'inline-flex' : 'flex',
            flexDirection: t ? 'column' : 'row',
            justifyContent: ['start', 'end'].includes(n) ? 'flex-' + n : n,
            flexWrap: !r || t ? 'nowrap' : 'wrap',
            marginTop: u || t ? '' : `-${g}`,
            marginBottom: u || t ? '' : `-${g}`,
            alignItems: a,
            gap: u ? `${l.vertical}px ${l.horizontal}px` : '',
          },
        },
        d || (!u && !p)
          ? f.map((a, o) =>
              e.h(
                'div',
                {
                  role: 'none',
                  style: [
                    i,
                    { maxWidth: '100%' },
                    u
                      ? ''
                      : t
                      ? { marginBottom: o !== y ? h : '' }
                      : c
                      ? {
                          marginLeft: C
                            ? 'space-between' === n && o === y
                              ? ''
                              : v
                            : o !== y
                            ? m
                            : '',
                          marginRight: C
                            ? 'space-between' === n && 0 === o
                              ? ''
                              : v
                            : '',
                          paddingTop: g,
                          paddingBottom: g,
                        }
                      : {
                          marginRight: C
                            ? 'space-between' === n && o === y
                              ? ''
                              : v
                            : o !== y
                            ? m
                            : '',
                          marginLeft: C
                            ? 'space-between' === n && 0 === o
                              ? ''
                              : v
                            : '',
                          paddingTop: g,
                          paddingBottom: g,
                        },
                  ],
                },
                a
              )
            )
          : f
      );
    },
  });
function u() {
  const t = e.inject(e.notificationApiInjectionKey, null);
  return (
    null === t &&
      e.throwError(
        'use-notification',
        'No outer `n-notification-provider` found.'
      ),
    t
  );
}
const d = e.createInjectionKey('n-popconfirm'),
  p = {
    positiveText: String,
    negativeText: String,
    showIcon: {
      type: Boolean,
      default: true,
    },
    onPositiveClick: {
      type: Function,
      required: true,
    },
    onNegativeClick: {
      type: Function,
      required: true,
    },
  },
  f = e.keysOf(p),
  m = e.defineComponent({
    name: 'NPopconfirmPanel',
    props: p,
    setup(t) {
      const { localeRef: o } = a.useLocale('Popconfirm'),
        { inlineThemeDisabled: n } = e.useConfig(),
        { mergedClsPrefixRef: i, mergedThemeRef: l, props: r } = e.inject(d),
        s = e.computed(() => {
          const {
            common: { cubicBezierEaseInOut: e },
            self: { fontSize: t, iconSize: a, iconColor: o },
          } = l.value;
          return {
            '--n-bezier': e,
            '--n-font-size': t,
            '--n-icon-size': a,
            '--n-icon-color': o,
          };
        }),
        c = n ? e.useThemeClass('popconfirm-panel', void 0, s, r) : void 0;
      return Object.assign(Object.assign({}, a.useLocale('Popconfirm')), {
        mergedClsPrefix: i,
        cssVars: n ? void 0 : s,
        localizedPositiveText: e.computed(
          () => t.positiveText || o.value.positiveText
        ),
        localizedNegativeText: e.computed(
          () => t.negativeText || o.value.negativeText
        ),
        positiveButtonProps: e.toRef(r, 'positiveButtonProps'),
        negativeButtonProps: e.toRef(r, 'negativeButtonProps'),
        handlePositiveClick(e) {
          t.onPositiveClick(e);
        },
        handleNegativeClick(e) {
          t.onNegativeClick(e);
        },
        themeClass: null == c ? void 0 : c.themeClass,
        onRender: null == c ? void 0 : c.onRender,
      });
    },
    render() {
      var t;
      const { mergedClsPrefix: a, showIcon: o, $slots: n } = this,
        i = e.resolveSlot(n.action, () =>
          null === this.negativeText && null === this.positiveText
            ? []
            : [
                null !== this.negativeText &&
                  e.h(
                    e.NButton,
                    Object.assign(
                      {
                        size: 'small',
                        onClick: this.handleNegativeClick,
                      },
                      this.negativeButtonProps
                    ),
                    { default: () => this.localizedNegativeText }
                  ),
                null !== this.positiveText &&
                  e.h(
                    e.NButton,
                    Object.assign(
                      {
                        size: 'small',
                        type: 'primary',
                        onClick: this.handlePositiveClick,
                      },
                      this.positiveButtonProps
                    ),
                    { default: () => this.localizedPositiveText }
                  ),
              ]
        );
      return (
        null === (t = this.onRender) || void 0 === t || t.call(this),
        e.h(
          'div',
          {
            class: [`${a}-popconfirm__panel`, this.themeClass],
            style: this.cssVars,
          },
          e.resolveWrappedSlot(n.default, (t) =>
            o || t
              ? e.h(
                  'div',
                  { class: `${a}-popconfirm__body` },
                  o
                    ? e.h(
                        'div',
                        { class: `${a}-popconfirm__icon` },
                        e.resolveSlot(n.icon, () => [
                          e.h(
                            e.NBaseIcon,
                            { clsPrefix: a },
                            { default: () => e.h(e.WarningIcon, null) }
                          ),
                        ])
                      )
                    : null,
                  t
                )
              : null
          ),
          i ? e.h('div', { class: [`${a}-popconfirm__action`] }, i) : null
        )
      );
    },
  }),
  v = e.cB('popconfirm', [
    e.cE(
      'body',
      '\n font-size: var(--n-font-size);\n display: flex;\n align-items: center;\n flex-wrap: nowrap;\n position: relative;\n ',
      [
        e.cE(
          'icon',
          '\n display: flex;\n font-size: var(--n-icon-size);\n color: var(--n-icon-color);\n transition: color .3s var(--n-bezier);\n margin: 0 8px 0 0;\n '
        ),
      ]
    ),
    e.cE('action', '\n display: flex;\n justify-content: flex-end;\n ', [
      e.c('&:not(:first-child)', 'margin-top: 8px'),
      e.cB('button', [e.c('&:not(:last-child)', 'margin-right: 8px;')]),
    ]),
  ]),
  h = Object.assign(
    Object.assign(Object.assign({}, e.useTheme.props), t.popoverBaseProps),
    {
      positiveText: String,
      negativeText: String,
      showIcon: {
        type: Boolean,
        default: true,
      },
      trigger: {
        type: String,
        default: 'click',
      },
      positiveButtonProps: Object,
      negativeButtonProps: Object,
      onPositiveClick: Function,
      onNegativeClick: Function,
    }
  ),
  g = e.defineComponent({
    name: 'Popconfirm',
    props: h,
    __popover__: true,
    setup(t) {
      const { mergedClsPrefixRef: a } = e.useConfig(),
        o = e.useTheme('Popconfirm', '-popconfirm', v, e.popconfirmLight, t, a),
        n = e.ref(null);
      e.provide(d, {
        mergedThemeRef: o,
        mergedClsPrefixRef: a,
        props: t,
      });
      const i = {
        setShow(e) {
          var t;
          null === (t = n.value) || void 0 === t || t.setShow(e);
        },
        syncPosition() {
          var e;
          null === (e = n.value) || void 0 === e || e.syncPosition();
        },
      };
      return Object.assign(Object.assign({}, i), {
        mergedTheme: o,
        popoverInstRef: n,
        handlePositiveClick: function (a) {
          const { onPositiveClick: o, 'onUpdate:show': i } = t;
          Promise.resolve(!o || o(a)).then((t) => {
            var a;
            false !== t &&
              (null === (a = n.value) || void 0 === a || a.setShow(false),
              i && e.call(i, false));
          });
        },
        handleNegativeClick: function (a) {
          const { onNegativeClick: o, 'onUpdate:show': i } = t;
          Promise.resolve(!o || o(a)).then((t) => {
            var a;
            false !== t &&
              (null === (a = n.value) || void 0 === a || a.setShow(false),
              i && e.call(i, false));
          });
        },
      });
    },
    render() {
      const { $slots: a, $props: o, mergedTheme: n } = this;
      return e.h(
        t.NPopover,
        e.omit$1(o, f, {
          theme: n.peers.Popover,
          themeOverrides: n.peerOverrides.Popover,
          internalExtraClass: ['popconfirm'],
          ref: 'popoverInstRef',
        }),
        {
          trigger: a.activator || a.trigger,
          default: () => {
            const t = e.keep(o, f);
            return e.h(
              m,
              Object.assign(Object.assign({}, t), {
                onPositiveClick: this.handlePositiveClick,
                onNegativeClick: this.handleNegativeClick,
              }),
              a
            );
          },
        }
      );
    },
  });
function y() {
  const a = e.useUserStore();
  e.useMessage();
  e.useKeyStore();
  e.useRouter();
  const o = e.ref({});
  e.useLocale();
  const { fetchTranslateServe: n, fetchLanguage: i } = e.useTranslate(),
    { fetchDelayTime: l } = t.useDelayTime();
  return {
    clientUpdater: async () => {
      const { data: t } = await e.checkUpdate({ platform: 1 });
      o.value = t || {};
    },
    translateUpdater: async () => {
      i(a.userInfo.vipType);
      await n();
      l();
    },
    updateInfo: o,
  };
}
const C =
    '' +
    ('undefined' == typeof document
      ? new (require('url').URL)('file:' + __dirname + '/logo.51056b7b.png')
          .href
      : new URL(
          'logo.51056b7b.png',
          (document.currentScript && document.currentScript.src) ||
            document.baseURI
        ).href),
  N = { class: 'set_form' },
  S = { class: 'set_form_center' },
  _ = ((t) => (e.pushScopeId('data-v-9cc6216f'), (t = t()), e.popScopeId(), t))(
    () =>
      e.createBaseVNode(
        'img',
        {
          src: C,
          alt: '',
        },
        null,
        -1
      )
  ),
  b = { class: 'version-number' },
  B = { class: 'version-text' },
  x = {
    key: 0,
    class: 'text',
  },
  w = {
    key: 0,
    class: 'version',
    target: '_blank',
    href: 'https://www.lookworld88.com/download',
  },
  k = { class: 'report-wait' },
  T = e.defineComponent({
    __name: 'chinaWorld',
    setup(a) {
      const o = e.useTranslateStore(),
        { delayTimeList: n } = e.storeToRefs(o),
        { clientUpdater: i } = y(),
        { electron: l } = e.useElectron(),
        r = e.ref(),
        s = e.useNoticeStore(),
        { t: u } = e.useLocale(),
        d = e.computed(() => r.value !== s.updateInfo.version),
        p = e.ref(false),
        f = () => {
          p.value = true;
          const {
              CHAT_USER: e,
              SERVER_URL: t,
              USER_INFO: a = {},
            } = localStorage,
            o = { ...JSON.parse(a) };
          ['salt', 'token', 'webToken'].map((e) => {
            delete o[e];
          });
          const i = { e: t };
          for (const n of [
            'CURRENT_MENU_TYPE',
            'APP_LIST',
            'CURRENT_APP',
            'CURRENT_APP_ID',
            'CHAT_APP_LIST',
            'SAME_CHAT_SHARE_CONFIG',
          ]) {
            const e = `${n}-${o.id}`;
            let t = localStorage[e];
            if (
              [
                'APP_LIST',
                'CURRENT_APP',
                'CHAT_APP_LIST',
                'SAME_CHAT_SHARE_CONFIG',
              ].includes(n) &&
              t
            ) {
              try {
                t = JSON.parse(t);
              } catch (r) {
                t = r.message;
              }
            }
          }
          l.saveLogFile(
            {
              CHAT_USER: e,
              SERVER_URL: t,
              USER_INFO: o,
              ...i,
              delayTimeList: JSON.parse(JSON.stringify(n.value)),
            },
            () => {
              p.value = false;
            }
          );
        };
      return (
        e.onMounted(() => {
          i();
          l.getVersion().then((e) => {
            r.value = e;
          });
        }),
        (a, o) => (
          e.openBlock(),
          e.createElementBlock('div', N, [
            e.createBaseVNode('div', S, [
              _,
              e.createBaseVNode(
                'span',
                b,
                e.toDisplayString(e.unref(u)('Current version')) +
                  ' v' +
                  e.toDisplayString(r.value),
                1
              ),
              e.createBaseVNode('div', B, [
                e.unref(d)
                  ? (e.openBlock(),
                    e.createElementBlock(
                      'span',
                      x,
                      e.toDisplayString(
                        e.unref(u)('Detected a new version v{version}', {
                          version: e.unref(s).updateInfo.version,
                        })
                      ),
                      1
                    ))
                  : e.createCommentVNode('', true),
              ]),
              e.unref(d)
                ? (e.openBlock(),
                  e.createElementBlock(
                    'a',
                    w,
                    e.toDisplayString(e.unref(u)('New version found')),
                    1
                  ))
                : e.createCommentVNode('', true),
              e.createBaseVNode(
                'button',
                {
                  class: 'version',
                  onClick: f,
                },
                e.toDisplayString(e.unref(u)('Troubleshooting download')),
                1
              ),
            ]),
            e.createVNode(
              e.unref(e.NModal),
              {
                show: p.value,
                'onUpdate:show': o[0] || (o[0] = (e) => (p.value = e)),
                'close-on-esc': false,
                'mask-closable': false,
                'transform-origin': 'center',
              },
              {
                default: e.withCtx(() => [
                  e.createBaseVNode('div', k, [
                    e.createVNode(e.unref(c), null, {
                      default: e.withCtx(() => [
                        e.createVNode(e.unref(t.NSpin), { size: 'large' }),
                      ]),
                      _: 1,
                    }),
                    e.createTextVNode(
                      ' ' +
                        e.toDisplayString(
                          e.unref(u)(
                            'Fault detection file is being generated, please wait'
                          )
                        ),
                      1
                    ),
                  ]),
                ]),
                _: 1,
              },
              8,
              ['show']
            ),
          ])
        )
      );
    },
  }),
  P = e._export_sfc(T, [['__scopeId', 'data-v-9cc6216f']]);
var V = ((e) => (
  (e.minimize = 'minimize'),
  (e.maximize = 'maximize'),
  (e.close = 'close'),
  (e.openDevTools = 'openDevTools'),
  (e.customResizeWindow = 'customResizeWindow'),
  (e.relaunch = 'relaunch'),
  e
))(V || {});
const E = ['B', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
  R = ['B', 'kiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'],
  z = ['b', 'kbit', 'Mbit', 'Gbit', 'Tbit', 'Pbit', 'Ebit', 'Zbit', 'Ybit'],
  I = [
    'b',
    'kibit',
    'Mibit',
    'Gibit',
    'Tibit',
    'Pibit',
    'Eibit',
    'Zibit',
    'Yibit',
  ],
  D = (e, t, a) => {
    let o = e;
    return (
      'string' == typeof t || Array.isArray(t)
        ? (o = e.toLocaleString(t, a))
        : (true !== t && void 0 === a) || (o = e.toLocaleString(void 0, a)),
      o
    );
  };
function U() {
  const t = e.ref(0),
    { electron: a } = e.useElectron(),
    o = e.computed(() =>
      (function (e, t) {
        if (!Number.isFinite(e)) {
          throw new TypeError(
            `Expected a finite number, got ${typeof e}: ${e}`
          );
        }
        const a = (t = {
            bits: false,
            binary: false,
            space: true,
            ...t,
          }).bits
            ? t.binary
              ? I
              : z
            : t.binary
            ? R
            : E,
          o = t.space ? ' ' : '';
        if (t.signed && 0 === e) {
          return ` 0${o}${a[0]}`;
        }
        const n = e < 0,
          i = n ? '-' : t.signed ? '+' : '';
        let l;
        if (
          (n && (e = -e),
          void 0 !== t.minimumFractionDigits &&
            (l = { minimumFractionDigits: t.minimumFractionDigits }),
          void 0 !== t.maximumFractionDigits &&
            (l = {
              maximumFractionDigits: t.maximumFractionDigits,
              ...l,
            }),
          e < 1)
        ) {
          return i + D(e, t.locale, l) + o + a[0];
        }
        const r = Math.min(
          Math.floor(
            t.binary ? Math.log(e) / Math.log(1024) : Math.log10(e) / 3
          ),
          a.length - 1
        );
        return (
          (e /= (t.binary ? 1024 : 1000) ** r),
          l || (e = e.toPrecision(3)),
          i + D(Number(e), t.locale, l) + o + a[r]
        );
      })(t.value || 0, { minimumFractionDigits: 2 })
    ),
    n = a.clearCache;
  return {
    fetchCacheSize: async () => {
      try {
        const e = await a.getCacheSize();
        t.value = e;
      } catch (e) {
        t.value = 0;
      }
    },
    fileStorageClear: a.fileStorageClear,
    clearCache: n,
    cacheSize: t,
    formatCacheSize: o,
  };
}
const L = { class: 'set_form' },
  j = { class: 'set_form_side' },
  O = { class: 'set_form_center' },
  F = {
    key: 0,
    class: 'overall',
  },
  $ = { class: 'hint' },
  A = { class: 'buttons' },
  M = {
    key: 1,
    class: 'cache',
  },
  G = { class: 'clear' },
  q = { class: 'left' },
  H = { key: 0 },
  W = { class: 'content' },
  J = {
    key: 2,
    class: 'cache',
  },
  Y = { class: 'clear' },
  K = { class: 'left' },
  Z = ['innerHTML'],
  Q = { class: 'content' },
  X = e.defineComponent({
    __name: 'overallSet',
    setup(n) {
      const i = e.ref(1),
        l = u(),
        { electron: r } = e.useElectron(),
        {
          fetchCacheSize: s,
          clearCache: c,
          formatCacheSize: d,
          fileStorageClear: p,
        } = U(),
        f = r.getConfigData(),
        m = e.ref(false),
        v = e.ref(false),
        h = e.useMessage(),
        y = (e) => {
          i.value = e;
          2 === i.value && s();
        },
        { setLocale: C, t: N } = e.useLocale(),
        S = e.computed$1(() =>
          e.clientCloseList.map((e) => ({
            ...e,
            label: N(e.key),
          }))
        ),
        _ = e.computed$1(() =>
          e.clientShowList.map((e) => ({
            ...e,
            label: N(e.key),
          }))
        ),
        b = {
          host: [
            {
              required: true,
              message: N('Please enter IP'),
            },
          ],
          port: [
            {
              required: true,
              message: N('Please enter the port'),
            },
          ],
        },
        B = e.ref(null),
        x = e.reactive(f),
        w = () => {
          var t;
          null == (t = B.value) ||
            t.validate(
              async (t) => {
                if (t) {
                  return;
                }
                const a = l.create({
                  title: N('Success'),
                  content: N(
                    'Saved successfully, it will take effect after restart'
                  ),
                  duration: 3000,
                  action: () =>
                    e.h(
                      e.NButton,
                      {
                        type: 'primary',
                        size: 'small',
                        onClick: () => {
                          r.handleWindow(V.relaunch);
                          a.destroy();
                        },
                      },
                      { default: () => N('Restart now') }
                    ),
                });
                r.setConfigData(JSON.stringify(x));
              },
              () => x.openProxy
            );
        },
        k = (e) => {
          x.locale = e;
          C(e);
        },
        T = async () => {
          m.value = true;
          try {
            await c();
            s();
          } catch (e) {
            h.error(N('Clear failed'));
          } finally {
            setTimeout(() => {
              m.value = false;
            }, 1000);
          }
        },
        P = async () => {
          v.value = true;
          try {
            await p();
            h.success(N('Clear successfully'));
          } catch (e) {
            h.error(N('Clear failed'));
          }
        };
      return (
        e.onMounted(() => {}),
        (n, l) => (
          e.openBlock(),
          e.createElementBlock('div', L, [
            e.createBaseVNode('div', j, [
              e.createBaseVNode(
                'div',
                {
                  class: e.normalizeClass([
                    'set_form_side_item',
                    1 === i.value ? 'active' : '',
                  ]),
                  onClick: l[0] || (l[0] = (e) => y(1)),
                },
                e.toDisplayString(e.unref(N)('Global Settings')),
                3
              ),
              e.createBaseVNode(
                'div',
                {
                  class: e.normalizeClass([
                    'set_form_side_item',
                    2 === i.value ? 'active' : '',
                  ]),
                  onClick: l[1] || (l[1] = (e) => y(2)),
                },
                e.toDisplayString(e.unref(N)('Clear cache')),
                3
              ),
              e.createBaseVNode(
                'div',
                {
                  class: e.normalizeClass([
                    'set_form_side_item',
                    3 === i.value ? 'active' : '',
                  ]),
                  onClick: l[2] || (l[2] = (e) => y(3)),
                },
                e.toDisplayString(e.unref(N)('Clear data')),
                3
              ),
            ]),
            e.createBaseVNode('div', O, [
              1 === i.value
                ? (e.openBlock(),
                  e.createElementBlock('div', F, [
                    e.createVNode(
                      e.unref(t.NForm),
                      {
                        ref_key: 'formRef',
                        ref: B,
                        'show-require-mark': false,
                        rules: b,
                        model: x,
                        'label-placement': 'left',
                        'label-width': '180px',
                      },
                      {
                        default: e.withCtx(() => [
                          e.createVNode(
                            e.unref(t.NFormItem),
                            {
                              label: e.unref(N)('This application language'),
                              path: 'locale',
                            },
                            {
                              default: e.withCtx(() => [
                                e.createVNode(
                                  e.unref(t.NSelect),
                                  {
                                    class: 'm-left',
                                    value: x.locale,
                                    'onUpdate:value':
                                      l[3] || (l[3] = (e) => (x.locale = e)),
                                    'value-field': 'locale',
                                    options: e.unref(e.languageList),
                                    placeholder: "t('System language')",
                                    'on-update:value': k,
                                  },
                                  null,
                                  8,
                                  ['value', 'options']
                                ),
                              ]),
                              _: 1,
                            },
                            8,
                            ['label']
                          ),
                          e.createVNode(
                            e.unref(t.NFormItem),
                            {
                              label: e.unref(N)('Minimize after startup'),
                              path: 'isStartupMinimize',
                            },
                            {
                              default: e.withCtx(() => [
                                e.createVNode(
                                  e.unref(o.NSwitch),
                                  {
                                    class: 'm-left',
                                    value: x.isStartupMinimize,
                                    'onUpdate:value':
                                      l[4] ||
                                      (l[4] = (e) => (x.isStartupMinimize = e)),
                                  },
                                  null,
                                  8,
                                  ['value']
                                ),
                              ]),
                              _: 1,
                            },
                            8,
                            ['label']
                          ),
                          e.createVNode(
                            e.unref(t.NFormItem),
                            {
                              label: e.unref(N)('Autostart'),
                              path: 'autoLaunch',
                            },
                            {
                              default: e.withCtx(() => [
                                e.createVNode(
                                  e.unref(o.NSwitch),
                                  {
                                    class: 'm-left',
                                    value: x.autoLaunch,
                                    'onUpdate:value':
                                      l[5] ||
                                      (l[5] = (e) => (x.autoLaunch = e)),
                                  },
                                  null,
                                  8,
                                  ['value']
                                ),
                              ]),
                              _: 1,
                            },
                            8,
                            ['label']
                          ),
                          e.createVNode(
                            e.unref(t.NFormItem),
                            {
                              label: e.unref(N)('Client display'),
                              path: 'clientShowType',
                            },
                            {
                              default: e.withCtx(() => [
                                e.createVNode(
                                  e.unref(t.NSelect),
                                  {
                                    class: 'm-left',
                                    value: x.clientShowType,
                                    'onUpdate:value':
                                      l[6] ||
                                      (l[6] = (e) => (x.clientShowType = e)),
                                    options: e.unref(_),
                                    filterable: '',
                                  },
                                  null,
                                  8,
                                  ['value', 'options']
                                ),
                              ]),
                              _: 1,
                            },
                            8,
                            ['label']
                          ),
                          e.createVNode(
                            e.unref(t.NFormItem),
                            {
                              label: e.unref(N)(
                                'When the application pop-up window is closed'
                              ),
                              path: 'clientCloseType',
                            },
                            {
                              default: e.withCtx(() => [
                                e.createVNode(
                                  e.unref(t.NSelect),
                                  {
                                    class: 'm-left',
                                    value: x.clientCloseType,
                                    'onUpdate:value':
                                      l[7] ||
                                      (l[7] = (e) => (x.clientCloseType = e)),
                                    options: e.unref(S),
                                    filterable: '',
                                  },
                                  null,
                                  8,
                                  ['value', 'options']
                                ),
                              ]),
                              _: 1,
                            },
                            8,
                            ['label']
                          ),
                          e.createVNode(
                            e.unref(t.NFormItem),
                            {
                              label: e.unref(N)('Proxy settings'),
                              path: 'openProxy',
                              class: 'custom-form-item',
                            },
                            {
                              default: e.withCtx(() => [
                                e.createVNode(
                                  e.unref(o.NSwitch),
                                  {
                                    class: 'm-left',
                                    value: x.openProxy,
                                    'onUpdate:value':
                                      l[8] || (l[8] = (e) => (x.openProxy = e)),
                                  },
                                  null,
                                  8,
                                  ['value']
                                ),
                                e.createBaseVNode(
                                  'div',
                                  $,
                                  ' *' +
                                    e.toDisplayString(
                                      e.unref(N)(
                                        'If the computer has already turned on the VPN, please do not set it up, it may easily cause network conflicts'
                                      )
                                    ),
                                  1
                                ),
                              ]),
                              _: 1,
                            },
                            8,
                            ['label']
                          ),
                          e.createVNode(
                            e.unref(t.NFormItem),
                            {
                              path: 'host',
                              label: ' ',
                            },
                            {
                              default: e.withCtx(() => [
                                e.createVNode(
                                  e.unref(a.NInput),
                                  {
                                    class: 'm-left',
                                    value: x.host,
                                    'onUpdate:value':
                                      l[9] || (l[9] = (e) => (x.host = e)),
                                    placeholder: e.unref(N)('Host'),
                                  },
                                  null,
                                  8,
                                  ['value', 'placeholder']
                                ),
                              ]),
                              _: 1,
                            }
                          ),
                          e.createVNode(
                            e.unref(t.NFormItem),
                            {
                              path: 'port',
                              label: ' ',
                            },
                            {
                              default: e.withCtx(() => [
                                e.createVNode(
                                  e.unref(a.NInput),
                                  {
                                    class: 'm-left',
                                    value: x.port,
                                    'onUpdate:value':
                                      l[10] || (l[10] = (e) => (x.port = e)),
                                    placeholder: e.unref(N)('Port'),
                                  },
                                  null,
                                  8,
                                  ['value', 'placeholder']
                                ),
                              ]),
                              _: 1,
                            }
                          ),
                        ]),
                        _: 1,
                      },
                      8,
                      ['model']
                    ),
                    e.createBaseVNode('div', A, [
                      e.createVNode(
                        e.unref(e.NButton),
                        { onClick: w },
                        {
                          default: e.withCtx(() => [
                            e.createTextVNode(
                              e.toDisplayString(e.unref(N)('Save')),
                              1
                            ),
                          ]),
                          _: 1,
                        }
                      ),
                    ]),
                  ]))
                : 2 === i.value
                ? (e.openBlock(),
                  e.createElementBlock('div', M, [
                    e.createBaseVNode('div', G, [
                      e.createBaseVNode('div', q, [
                        e.createTextVNode(
                          e.toDisplayString(e.unref(N)('Cache')) + ' ',
                          1
                        ),
                        (e.openBlock(),
                        e.createElementBlock(
                          'span',
                          H,
                          ' - ' + e.toDisplayString(e.unref(d)),
                          1
                        )),
                      ]),
                      e.createVNode(
                        e.unref(e.NButton),
                        {
                          onClick: T,
                          loading: m.value,
                        },
                        {
                          default: e.withCtx(() => [
                            e.createTextVNode(
                              e.toDisplayString(e.unref(N)('Cleanup')),
                              1
                            ),
                          ]),
                          _: 1,
                        },
                        8,
                        ['loading']
                      ),
                    ]),
                    e.createBaseVNode(
                      'div',
                      W,
                      e.toDisplayString(
                        e.unref(N)(
                          'Cache is temporary data generated during use, and clearing the cache will not affect the normal use of the application. '
                        )
                      ),
                      1
                    ),
                  ]))
                : (e.openBlock(),
                  e.createElementBlock('div', J, [
                    e.createBaseVNode('div', Y, [
                      e.createBaseVNode(
                        'div',
                        K,
                        e.toDisplayString(e.unref(N)('Clear data')),
                        1
                      ),
                      e.createVNode(
                        e.unref(g),
                        {
                          onPositiveClick: P,
                          'positive-text': e.unref(N)('Cleanup'),
                          'negative-text': e.unref(N)('Cancel'),
                        },
                        {
                          trigger: e.withCtx(() => [
                            e.createVNode(e.unref(e.NButton), null, {
                              default: e.withCtx(() => [
                                e.createTextVNode(
                                  e.toDisplayString(e.unref(N)('Cleanup')),
                                  1
                                ),
                              ]),
                              _: 1,
                            }),
                          ]),
                          default: e.withCtx(() => [
                            e.createBaseVNode(
                              'span',
                              {
                                class: 'warning-tip',
                                innerHTML: e.unref(N)(
                                  'This will delete data including <em>quick reply</em> and <em>chat translation</em>, are you sure? '
                                ),
                              },
                              null,
                              8,
                              Z
                            ),
                          ]),
                          _: 1,
                        },
                        8,
                        ['positive-text', 'negative-text']
                      ),
                    ]),
                    e.createBaseVNode(
                      'div',
                      Q,
                      e.toDisplayString(
                        e.unref(N)(
                          'Clear the data of the local application (including quick reply and translation data in chat). '
                        )
                      ),
                      1
                    ),
                  ])),
            ]),
          ])
        )
      );
    },
  }),
  ee = e._export_sfc(X, [['__scopeId', 'data-v-f14a4068']]),
  te = { class: 'set' },
  ae = { class: 'set_tab' },
  oe = { class: 'set_tab_item_title' },
  ne = {
    key: 0,
    class: 'set_tab_item_active',
  },
  ie = { class: 'set_tab_item_title' },
  le = {
    key: 0,
    class: 'set_tab_item_active',
  },
  re = ((t) => (
    e.pushScopeId('data-v-ff34f4d7'), (t = t()), e.popScopeId(), t
  ))(() => e.createBaseVNode('div', { class: 'set_bottom' }, null, -1)),
  se = e.defineComponent({
    __name: 'index',
    setup(t) {
      const { t: a } = e.useLocale(),
        o = e.ref(1),
        i = e.useNoticeStore(),
        l = (e) => {
          o.value = e;
        };
      return (t, r) => (
        e.openBlock(),
        e.createElementBlock('div', te, [
          e.createBaseVNode('div', ae, [
            e.createBaseVNode(
              'div',
              {
                class: 'set_tab_item',
                onClick: r[0] || (r[0] = (e) => l(1)),
              },
              [
                e.createBaseVNode(
                  'div',
                  oe,
                  e.toDisplayString(e.unref(a)('Global Settings')),
                  1
                ),
                1 === o.value
                  ? (e.openBlock(), e.createElementBlock('div', ne))
                  : e.createCommentVNode('', true),
              ]
            ),
            e.createVNode(
              e.unref(n.NBadge),
              {
                value: 1,
                color: '#7bed9f',
                dot: '',
                show: e.unref(i).availableUpdate,
              },
              {
                default: e.withCtx(() => [
                  e.createBaseVNode(
                    'div',
                    {
                      class: 'set_tab_item',
                      onClick: r[1] || (r[1] = (e) => l(2)),
                    },
                    [
                      e.createBaseVNode(
                        'div',
                        ie,
                        e.toDisplayString(e.unref(a)('About LookWorld')),
                        1
                      ),
                      2 === o.value
                        ? (e.openBlock(), e.createElementBlock('div', le))
                        : e.createCommentVNode('', true),
                    ]
                  ),
                ]),
                _: 1,
              },
              8,
              ['show']
            ),
          ]),
          re,
          1 === o.value
            ? (e.openBlock(), e.createBlock(ee, { key: 0 }))
            : (e.openBlock(), e.createBlock(P, { key: 1 })),
        ])
      );
    },
  }),
  ce = e._export_sfc(se, [['__scopeId', 'data-v-ff34f4d7']]),
  ue = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        default: ce,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  );
exports.Set = ce;
exports.index = ue;
exports.useNotification = u;
exports.useUpdater = y;
