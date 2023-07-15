'use strict';
function e(e, o) {
    const t = Object.create(null), n = e.split(',');
    for (let r = 0; r < n.length; r++) {
        t[n[r]] = true;
    }
    return o ? e => !!t[e.toLowerCase()] : e => !!t[e];
}
function o(e) {
    if (y(e)) {
        const t = { e: l[e] };
        for (let n = 0; n < e.length; n++) {
            const r = e[n], l = z(r) ? i(r) : o(r);
            if (l) {
                for (const e in l);
            }
        }
        return t;
    }
    return z(e) || P(e) ? e : void 0;
}
Object.defineProperties(exports, {
    __esModule: { value: true },
    [Symbol.toStringTag]: { value: 'Module' }
});
const t = /;(?![^(]*\))/g, n = /:([^]+)/, r = /\/\*.*?\*\//gs;
function i(e) {
    const o = {};
    return e.replace(r, '').split(t).forEach(e => {
        if (e) {
            const t = e.split(n);
            t.length > 1 && (o[t[0].trim()] = t[1].trim());
        }
    }), o;
}
function l(e) {
    let o = '';
    if (z(e)) {
        o = e;
    } else {
        if (y(e)) {
            for (let t = 0; t < e.length; t++) {
                const n = l(e[t]);
                n && (o += n + ' ');
            }
        } else {
            if (P(e)) {
                for (const t in e)
                    e[t] && (o += t + ' ');
            }
        }
    }
    return o.trim();
}
const a = e('itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly');
function s(e) {
    return !!e || '' === e;
}
const c = (e, o) => o && o.__v_isRef ? c(e, o.value) : S(o) ? { [`Map(${ o.size })`]: [...o.entries()].reduce((e, [o, t]) => (e[`${ o } =>`] = t, e), {}) } : w(o) ? { [`Set(${ o.size })`]: [...o.values()] } : !P(o) || y(o) || O(o) ? o : String(o), u = {}, d = [], p = () => {
    }, f = () => false, h = /^on[^a-z]/, m = e => h.test(e), g = e => e.startsWith('onUpdate:'), v = Object.assign, b = (e, o) => {
        const t = e.indexOf(o);
        t > -1 && e.splice(t, 1);
    }, x = Object.prototype.hasOwnProperty, C = (e, o) => x.call(e, o), y = Array.isArray, S = e => '[object Map]' === R(e), w = e => '[object Set]' === R(e), _ = e => 'function' == typeof e, z = e => 'string' == typeof e, T = e => 'symbol' == typeof e, P = e => null !== e && 'object' == typeof e, E = e => P(e) && _(e.then) && _(e.catch), k = Object.prototype.toString, R = e => k.call(e), L = e => R(e).slice(8, -1), O = e => '[object Object]' === R(e), A = e => z(e) && 'NaN' !== e && '-' !== e[0] && '' + parseInt(e, 10) === e, I = e(',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted'), $ = e => {
        const o = Object.create(null);
        return t => o[t] || (o[t] = e(t));
    }, M = /-(\w)/g, H = $(e => e.replace(M, (e, o) => o ? o.toUpperCase() : '')), F = /\B([A-Z])/g, B = $(e => e.replace(F, '-$1').toLowerCase()), D = $(e => e.charAt(0).toUpperCase() + e.slice(1)), j = $(e => e ? `on${ D(e) }` : ''), N = (e, o) => !Object.is(e, o), W = (e, o) => {
        for (let t = 0; t < e.length; t++) {
            e[t](o);
        }
    }, U = (e, o, t) => {
        Object.defineProperty(e, o, {
            configurable: true,
            enumerable: false,
            value: t
        });
    }, V = e => {
        const o = parseFloat(e);
        return isNaN(o) ? e : o;
    }, G = e => {
        const o = z(e) ? Number(e) : NaN;
        return isNaN(o) ? e : o;
    };
let q;
const K = () => q || (q = 'undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {});
let Y;
class X {
    constructor(e = false) {
        this.detached = e;
        this._active = true;
        this.effects = [];
        this.cleanups = [];
        this.parent = Y;
        !e && Y && (this.index = (Y.scopes || (Y.scopes = [])).push(this) - 1);
    }
    get active() {
        return this._active;
    }
    run(e) {
        if (this._active) {
            const o = Y;
            try {
                return Y = this, e();
            } finally {
                Y = o;
            }
        }
    }
    on() {
        Y = this;
    }
    off() {
        Y = this.parent;
    }
    stop(e) {
        if (this._active) {
            let o, t;
            for (o = 0, t = this.effects.length; o < t; o++) {
                this.effects[o].stop();
            }
            for (o = 0, t = this.cleanups.length; o < t; o++) {
                this.cleanups[o]();
            }
            if (this.scopes) {
                for (o = 0, t = this.scopes.length; o < t; o++) {
                    this.scopes[o].stop(true);
                }
            }
            if (!this.detached && this.parent && !e) {
                const e = this.parent.scopes.pop();
                e && e !== this && (this.parent.scopes[this.index] = e, e.index = this.index);
            }
            this.parent = void 0;
            this._active = false;
        }
    }
}
function J(e) {
    return new X(e);
}
function Z() {
    return Y;
}
const Q = e => {
        const o = new Set(e);
        return o.w = 0, o.n = 0, o;
    }, ee = e => (e.w & re) > 0, oe = e => (e.n & re) > 0, te = new WeakMap();
let ne = 0, re = 1;
const ie = 30;
let le;
const ae = Symbol(''), se = Symbol('');
class ce {
    constructor(e, o = null, t) {
        this.fn = e;
        this.scheduler = o;
        this.active = true;
        this.deps = [];
        this.parent = void 0;
        (function (e, o = Y) {
            o && o.active && o.effects.push(e);
        }(this, t));
    }
    run() {
        if (!this.active) {
            return this.fn();
        }
        let e = le, o = de;
        for (; e;) {
            if (e === this) {
                return;
            }
            e = e.parent;
        }
        try {
            return this.parent = le, le = this, de = true, re = 1 << ++ne, ne <= ie ? (({deps: e}) => {
                if (e.length) {
                    for (let o = 0; o < e.length; o++) {
                        e[o].w |= re;
                    }
                }
            })(this) : ue(this), this.fn();
        } finally {
            ne <= ie && (e => {
                const {deps: o} = e;
                if (o.length) {
                    let t = 0;
                    for (let n = 0; n < o.length; n++) {
                        const r = o[n];
                        ee(r) && !oe(r) ? r.delete(e) : o[t++] = r;
                        r.w &= ~re;
                        r.n &= ~re;
                    }
                    o.length = t;
                }
            })(this);
            re = 1 << --ne;
            le = this.parent;
            de = o;
            this.parent = void 0;
            this.deferStop && this.stop();
        }
    }
    stop() {
        le === this ? this.deferStop = true : this.active && (ue(this), this.onStop && this.onStop(), this.active = false);
    }
}
function ue(e) {
    const {deps: o} = e;
    if (o.length) {
        for (let t = 0; t < o.length; t++) {
            o[t].delete(e);
        }
        o.length = 0;
    }
}
let de = true;
const pe = [];
function fe() {
    pe.push(de);
    de = false;
}
function he() {
    const e = pe.pop();
    de = void 0 === e || e;
}
function me(e, o, t) {
    if (de && le) {
        let o = te.get(e);
        o || te.set(e, o = new Map());
        let n = o.get(t);
        n || o.set(t, n = Q());
        ge(n);
    }
}
function ge(e, o) {
    let t = false;
    ne <= ie ? oe(e) || (e.n |= re, t = !ee(e)) : t = !e.has(le);
    t && (e.add(le), le.deps.push(e));
}
function ve(e, o, t, n, r, i) {
    const l = te.get(e);
    if (!l) {
        return;
    }
    let a = [];
    if ('clear' === o) {
        a = [...l.values()];
    } else {
        if ('length' === t && y(e)) {
            const e = Number(n);
            l.forEach((o, t) => {
                ('length' === t || t >= e) && a.push(o);
            });
        } else {
            switch (void 0 !== t && a.push(l.get(t)), o) {
            case 'add':
                y(e) ? A(t) && a.push(l.get('length')) : (a.push(l.get(ae)), S(e) && a.push(l.get(se)));
                break;
            case 'delete':
                y(e) || (a.push(l.get(ae)), S(e) && a.push(l.get(se)));
                break;
            case 'set':
                S(e) && a.push(l.get(ae));
            }
        }
    }
    if (1 === a.length) {
        a[0] && be(a[0]);
    } else {
        const e = [];
        for (const o of a)
            o && e.push(...o);
        be(Q(e));
    }
}
function be(e, o) {
    const t = y(e) ? e : [...e];
    for (const n of t)
        n.computed && xe(n);
    for (const n of t)
        n.computed || xe(n);
}
function xe(e, o) {
    (e !== le || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
const Ce = e('__proto__,__v_isRef,__isVue'), ye = new Set(Object.getOwnPropertyNames(Symbol).filter(e => 'arguments' !== e && 'caller' !== e).map(e => Symbol[e]).filter(T)), Se = Ee(), we = Ee(false, true), _e = Ee(true), ze = Te();
function Te() {
    const e = {
        o: function (...e) {
            const t = po(this);
            for (let o = 0, r = this.length; o < r; o++) {
                me(t, 0, o + '');
            }
            const n = t[o](...e);
            return -1 === n || false === n ? t[o](...e.map(po)) : n;
        },
        o: function (...e) {
            fe();
            const t = po(this)[o].apply(this, e);
            return he(), t;
        }
    };
    return [
        'includes',
        'indexOf',
        'lastIndexOf'
    ].forEach(o => {
        ;
    }), [
        'push',
        'pop',
        'shift',
        'unshift',
        'splice'
    ].forEach(o => {
        ;
    }), e;
}
function Pe(e) {
    const o = po(this);
    return me(o, 0, e), o.hasOwnProperty(e);
}
function Ee(e = false, o = false) {
    return function (t, n, r) {
        if ('__v_isReactive' === n) {
            return !e;
        }
        if ('__v_isReadonly' === n) {
            return e;
        }
        if ('__v_isShallow' === n) {
            return o;
        }
        if ('__v_raw' === n && r === (e ? o ? no : to : o ? oo : eo).get(t)) {
            return t;
        }
        const i = y(t);
        if (!e) {
            if (i && C(ze, n)) {
                return Reflect.get(ze, n, r);
            }
            if ('hasOwnProperty' === n) {
                return Pe;
            }
        }
        const l = Reflect.get(t, n, r);
        return (T(n) ? ye.has(n) : Ce(n)) ? l : (e || me(t, 0, n), o ? l : bo(l) ? i && A(n) ? l : l.value : P(l) ? e ? io(l) : ro(l) : l);
    };
}
function ke(e = false) {
    return function (o, t, n, r) {
        let i = o[t];
        if (so(i) && bo(i) && !bo(n)) {
            return false;
        }
        if (!e && (co(n) || so(n) || (i = po(i), n = po(n)), !y(o) && bo(i) && !bo(n))) {
            return i.value = n, true;
        }
        const l = y(o) && A(t) ? Number(t) < o.length : C(o, t), a = Reflect.set(o, t, n, r);
        return o === po(r) && (l ? N(n, i) && ve(o, 'set', t, n) : ve(o, 'add', t, n)), a;
    };
}
const Re = {
        get: Se,
        set: ke(),
        deleteProperty: function (e, o) {
            const t = C(e, o);
            e[o];
            const n = Reflect.deleteProperty(e, o);
            return n && t && ve(e, 'delete', o, void 0), n;
        },
        has: function (e, o) {
            const t = Reflect.has(e, o);
            return T(o) && ye.has(o) || me(e, 0, o), t;
        },
        ownKeys: function (e) {
            return me(e, 0, y(e) ? 'length' : ae), Reflect.ownKeys(e);
        }
    }, Le = {
        get: _e,
        set: (e, o) => true,
        deleteProperty: (e, o) => true
    }, Oe = v({}, Re, {
        get: we,
        set: ke(true)
    }), Ae = e => e, Ie = e => Reflect.getPrototypeOf(e);
function $e(e, o, t = false, n = false) {
    const r = po(e = e.__v_raw), i = po(o);
    t || (o !== i && me(r, 0, o), me(r, 0, i));
    const {has: l} = Ie(r), a = n ? Ae : t ? mo : ho;
    return l.call(r, o) ? a(e.get(o)) : l.call(r, i) ? a(e.get(i)) : void (e !== r && e.get(o));
}
function Me(e, o = false) {
    const t = this.__v_raw, n = po(t), r = po(e);
    return o || (e !== r && me(n, 0, e), me(n, 0, r)), e === r ? t.has(e) : t.has(e) || t.has(r);
}
function He(e, o = false) {
    return e = e.__v_raw, !o && me(po(e), 0, ae), Reflect.get(e, 'size', e);
}
function Fe(e) {
    e = po(e);
    const o = po(this);
    return Ie(o).has.call(o, e) || (o.add(e), ve(o, 'add', e, e)), this;
}
function Be(e, o) {
    o = po(o);
    const t = po(this), {
            has: n,
            get: r
        } = Ie(t);
    let i = n.call(t, e);
    i || (e = po(e), i = n.call(t, e));
    const l = r.call(t, e);
    return t.set(e, o), i ? N(o, l) && ve(t, 'set', e, o) : ve(t, 'add', e, o), this;
}
function De(e) {
    const o = po(this), {
            has: t,
            get: n
        } = Ie(o);
    let r = t.call(o, e);
    r || (e = po(e), r = t.call(o, e));
    n && n.call(o, e);
    const i = o.delete(e);
    return r && ve(o, 'delete', e, void 0), i;
}
function je() {
    const e = po(this), o = 0 !== e.size, t = e.clear();
    return o && ve(e, 'clear', void 0, void 0), t;
}
function Ne(e, o) {
    return function (t, n) {
        const r = this, i = r.__v_raw, l = po(i), a = o ? Ae : e ? mo : ho;
        return !e && me(l, 0, ae), i.forEach((e, o) => t.call(n, a(e), a(o), r));
    };
}
function We(e, o, t) {
    return function (...n) {
        const r = this.__v_raw, i = po(r), l = S(i), a = 'entries' === e || e === Symbol.iterator && l, s = 'keys' === e && l, c = r[e](...n), u = t ? Ae : o ? mo : ho;
        return !o && me(i, 0, s ? se : ae), {
            next() {
                const {
                    value: e,
                    done: o
                } = c.next();
                return o ? {
                    value: e,
                    done: o
                } : {
                    value: a ? [
                        u(e[0]),
                        u(e[1])
                    ] : u(e),
                    done: o
                };
            },
            [Symbol.iterator]() {
                return this;
            }
        };
    };
}
function Ue(e) {
    return function (...o) {
        return 'delete' !== e && this;
    };
}
function Ve() {
    const e = {
            get(e) {
                return $e(this, e);
            },
            get size() {
                return He(this);
            },
            has: Me,
            add: Fe,
            set: Be,
            delete: De,
            clear: je,
            forEach: Ne(false, false)
        }, o = {
            get(e) {
                return $e(this, e, false, true);
            },
            get size() {
                return He(this);
            },
            has: Me,
            add: Fe,
            set: Be,
            delete: De,
            clear: je,
            forEach: Ne(false, true)
        }, t = {
            get(e) {
                return $e(this, e, true);
            },
            get size() {
                return He(this, true);
            },
            has(e) {
                return Me.call(this, e, true);
            },
            add: Ue('add'),
            set: Ue('set'),
            delete: Ue('delete'),
            clear: Ue('clear'),
            forEach: Ne(true, false)
        }, n = {
            get(e) {
                return $e(this, e, true, true);
            },
            get size() {
                return He(this, true);
            },
            has(e) {
                return Me.call(this, e, true);
            },
            add: Ue('add'),
            set: Ue('set'),
            delete: Ue('delete'),
            clear: Ue('clear'),
            forEach: Ne(true, true)
        };
    return [
        'keys',
        'values',
        'entries',
        Symbol.iterator
    ].forEach(r => {
        e[r] = We(r, false, false);
        t[r] = We(r, true, false);
        o[r] = We(r, false, true);
        n[r] = We(r, true, true);
    }), [
        e,
        t,
        o,
        n
    ];
}
const [Ge, qe, Ke, Ye] = Ve();
function Xe(e, o) {
    const t = o ? e ? Ye : Ke : e ? qe : Ge;
    return (o, n, r) => '__v_isReactive' === n ? !e : '__v_isReadonly' === n ? e : '__v_raw' === n ? o : Reflect.get(C(t, n) && n in o ? t : o, n, r);
}
const Je = { get: Xe(false, false) }, Ze = { get: Xe(false, true) }, Qe = { get: Xe(true, false) }, eo = new WeakMap(), oo = new WeakMap(), to = new WeakMap(), no = new WeakMap();
function ro(e) {
    return so(e) ? e : lo(e, false, Re, Je, eo);
}
function io(e) {
    return lo(e, true, Le, Qe, to);
}
function lo(e, o, t, n, r) {
    if (!P(e)) {
        return e;
    }
    if (e.__v_raw && (!o || !e.__v_isReactive)) {
        return e;
    }
    const i = r.get(e);
    if (i) {
        return i;
    }
    const l = (a = e).__v_skip || !Object.isExtensible(a) ? 0 : function (e) {
        switch (e) {
        case 'Object':
        case 'Array':
            return 1;
        case 'Map':
        case 'Set':
        case 'WeakMap':
        case 'WeakSet':
            return 2;
        default:
            return 0;
        }
    }(L(a));
    var a;
    if (0 === l) {
        return e;
    }
    const s = new Proxy(e, 2 === l ? n : t);
    return r.set(e, s), s;
}
function ao(e) {
    return so(e) ? ao(e.__v_raw) : !(!e || !e.__v_isReactive);
}
function so(e) {
    return !(!e || !e.__v_isReadonly);
}
function co(e) {
    return !(!e || !e.__v_isShallow);
}
function uo(e) {
    return ao(e) || so(e);
}
function po(e) {
    const o = e && e.__v_raw;
    return o ? po(o) : e;
}
function fo(e) {
    return U(e, '__v_skip', true), e;
}
const ho = e => P(e) ? ro(e) : e, mo = e => P(e) ? io(e) : e;
function go(e) {
    de && le && ge((e = po(e)).dep || (e.dep = Q()));
}
function vo(e, o) {
    const t = (e = po(e)).dep;
    t && be(t);
}
function bo(e) {
    return !(!e || true !== e.__v_isRef);
}
function xo(e) {
    return yo(e, false);
}
function Co(e) {
    return yo(e, true);
}
function yo(e, o) {
    return bo(e) ? e : new So(e, o);
}
class So {
    constructor(e, o) {
        this.__v_isShallow = o;
        this.dep = void 0;
        this.__v_isRef = true;
        this._rawValue = o ? e : po(e);
        this._value = o ? e : ho(e);
    }
    get value() {
        return go(this), this._value;
    }
    set value(e) {
        const o = this.__v_isShallow || co(e) || so(e);
        e = o ? e : po(e);
        N(e, this._rawValue) && (this._rawValue = e, this._value = o ? e : ho(e), vo(this));
    }
}
function wo(e) {
    return bo(e) ? e.value : e;
}
const _o = {
    get: (e, o, t) => wo(Reflect.get(e, o, t)),
    set: (e, o, t, n) => {
        const r = e[o];
        return bo(r) && !bo(t) ? (r.value = t, true) : Reflect.set(e, o, t, n);
    }
};
function zo(e) {
    return ao(e) ? e : new Proxy(e, _o);
}
class To {
    constructor(e, o, t) {
        this._object = e;
        this._key = o;
        this._defaultValue = t;
        this.__v_isRef = true;
    }
    get value() {
        const e = this._object[this._key];
        return void 0 === e ? this._defaultValue : e;
    }
    set value(e) {
        this._object[this._key] = e;
    }
    get dep() {
        return e = po(this._object), o = this._key, null === (t = te.get(e)) || void 0 === t ? void 0 : t.get(o);
        var e, o, t;
    }
}
function Po(e, o, t) {
    const n = e[o];
    return bo(n) ? n : new To(e, o, t);
}
var Eo;
class ko {
    constructor(e, o, t, n) {
        this._setter = o;
        this.dep = void 0;
        this.__v_isRef = true;
        this[Eo] = false;
        this._dirty = true;
        this.effect = new ce(e, () => {
            this._dirty || (this._dirty = true, vo(this));
        });
        this.effect.computed = this;
        this.effect.active = this._cacheable = !n;
        this.__v_isReadonly = t;
    }
    get value() {
        const e = po(this);
        return go(e), !e._dirty && e._cacheable || (e._dirty = false, e._value = e.effect.run()), e._value;
    }
    set value(e) {
        this._setter(e);
    }
}
function Ro(e, o, t = false) {
    let n, r;
    const i = _(e);
    i ? (n = e, r = p) : (n = e.get, r = e.set);
    return new ko(n, r, i || !r, t);
}
function Lo(e, o, t, n) {
    let r;
    try {
        r = n ? e(...n) : e();
    } catch (i) {
        Ao(i, o, t);
    }
    return r;
}
function Oo(e, o, t, n) {
    if (_(e)) {
        const r = Lo(e, o, t, n);
        return r && E(r) && r.catch(e => {
            Ao(e, o, t);
        }), r;
    }
    const r = [];
    for (let i = 0; i < e.length; i++) {
        r.push(Oo(e[i], o, t, n));
    }
    return r;
}
function Ao(e, o, t, n = true) {
    o && o.vnode;
    if (o) {
        let n = o.parent;
        const r = o.proxy, i = t;
        for (; n;) {
            const o = n.ec;
            if (o) {
                for (let t = 0; t < o.length; t++) {
                    if (false === o[t](e, r, i)) {
                        return;
                    }
                }
            }
            n = n.parent;
        }
        const l = o.appContext.config.errorHandler;
        if (l) {
            return void Lo(l, null, 10, [
                e,
                r,
                i
            ]);
        }
    }
}
Eo = '__v_isReadonly';
let Io = false, $o = false;
const Mo = [];
let Ho = 0;
const Fo = [];
let Bo = null, Do = 0;
const jo = Promise.resolve();
let No = null;
function Wo(e) {
    const o = No || jo;
    return e ? o.then(this ? e.bind(this) : e) : o;
}
function Uo(e) {
    Mo.length && Mo.includes(e, Io && e.allowRecurse ? Ho + 1 : Ho) || (null == e.id ? Mo.push(e) : Mo.splice(function (e) {
        let o = Ho + 1, t = Mo.length;
        for (; o < t;) {
            const n = o + t >>> 1;
            Ko(Mo[n]) < e ? o = n + 1 : t = n;
        }
        return o;
    }(e.id), 0, e), Vo());
}
function Vo() {
    Io || $o || ($o = true, No = jo.then(Xo));
}
function Go(e, o = Io ? Ho + 1 : 0) {
    for (; o < Mo.length; o++) {
        const e = Mo[o];
        e && e.pre && (Mo.splice(o, 1), o--, e());
    }
}
function qo(e) {
    if (Fo.length) {
        const e = [...new Set(Fo)];
        if (Fo.length = 0, Bo) {
            return void Bo.push(...e);
        }
        for (Bo = e, Bo.sort((e, o) => Ko(e) - Ko(o)), Do = 0; Do < Bo.length; Do++) {
            Bo[Do]();
        }
        Bo = null;
        Do = 0;
    }
}
const Ko = e => null == e.id ? 1e+400 : e.id, Yo = (e, o) => {
        const t = Ko(e) - Ko(o);
        if (0 === t) {
            if (e.pre && !o.pre) {
                return -1;
            }
            if (o.pre && !e.pre) {
                return 1;
            }
        }
        return t;
    };
function Xo(e) {
    $o = false;
    Io = true;
    Mo.sort(Yo);
    try {
        for (Ho = 0; Ho < Mo.length; Ho++) {
            const e = Mo[Ho];
            e && false !== e.active && Lo(e, null, 14);
        }
    } finally {
        Ho = 0;
        Mo.length = 0;
        qo();
        Io = false;
        No = null;
        (Mo.length || Fo.length) && Xo();
    }
}
function Jo(e, o, ...t) {
    if (e.isUnmounted) {
        return;
    }
    const n = e.vnode.props || u;
    let r = t;
    const i = o.startsWith('update:'), l = i && o.slice(7);
    if (l && l in n) {
        const e = `${ 'modelValue' === l ? 'model' : l }Modifiers`, {
                number: o,
                trim: i
            } = n[e] || u;
        i && (r = t.map(e => z(e) ? e.trim() : e));
        o && (r = t.map(V));
    }
    let a, s = n[a = j(o)] || n[a = j(H(o))];
    !s && i && (s = n[a = j(B(o))]);
    s && Oo(s, e, 6, r);
    const c = n[a + 'Once'];
    if (c) {
        if (e.emitted) {
            if (e.emitted[a]) {
                return;
            }
        } else {
            e.emitted = {};
        }
        e.emitted[a] = true;
        Oo(c, e, 6, r);
    }
}
function Zo(e, o, t = false) {
    const n = o.emitsCache, r = n.get(e);
    if (void 0 !== r) {
        return r;
    }
    const i = e.emits;
    let l = {}, a = false;
    if (!_(e)) {
        const n = e => {
            const t = Zo(e, o, true);
            t && (a = true, v(l, t));
        };
        !t && o.mixins.length && o.mixins.forEach(n);
        e.extends && n(e.extends);
        e.mixins && e.mixins.forEach(n);
    }
    return i || a ? (y(i) ? i.forEach(e => l[e] = null) : v(l, i), P(e) && n.set(e, l), l) : (P(e) && n.set(e, null), null);
}
function Qo(e, o) {
    return !(!e || !m(o)) && (o = o.slice(2).replace(/Once$/, ''), C(e, o[0].toLowerCase() + o.slice(1)) || C(e, B(o)) || C(e, o));
}
let et = null, ot = null;
function tt(e) {
    const o = et;
    return et = e, ot = e && e.type.__scopeId || null, o;
}
function nt(e, o = et, t) {
    if (!o) {
        return e;
    }
    if (e._n) {
        return e;
    }
    const n = (...t) => {
        n._d && Zn(-1);
        const r = tt(o);
        let i;
        try {
            i = e(...t);
        } finally {
            tt(r);
            n._d && Zn(1);
        }
        return i;
    };
    return n._n = true, n._c = true, n._d = true, n;
}
function rt(e) {
    const {
        type: o,
        vnode: t,
        proxy: n,
        withProxy: r,
        props: i,
        propsOptions: [l],
        slots: a,
        attrs: s,
        emit: c,
        render: u,
        renderCache: d,
        data: p,
        setupState: f,
        ctx: h,
        inheritAttrs: m
    } = e;
    let v, b;
    const x = tt(e);
    try {
        if (4 & t.shapeFlag) {
            const e = r || n;
            v = dr(u.call(e, e, d, i, f, p, h));
            b = s;
        } else {
            const e = o;
            0;
            v = dr(e.length > 1 ? e(i, {
                attrs: s,
                slots: a,
                emit: c
            }) : e(i, null));
            b = o.props ? s : it(s);
        }
    } catch (y) {
        Kn.length = 0;
        Ao(y, e, 1);
        v = sr(Gn);
    }
    let C = v;
    if (b && false !== m) {
        const e = Object.keys(b), {shapeFlag: o} = C;
        e.length && 7 & o && (l && e.some(g) && (b = lt(b, l)), C = cr(C, b));
    }
    return t.dirs && (C = cr(C), C.dirs = C.dirs ? C.dirs.concat(t.dirs) : t.dirs), t.transition && (C.transition = t.transition), v = C, tt(x), v;
}
const it = e => {
        let o;
        for (const t in e)
            ('class' === t || 'style' === t || m(t)) && ((o || (o = {}))[t] = e[t]);
        return o;
    }, lt = (e, o) => {
        const t = {};
        for (const n in e)
            g(n) && n.slice(9) in o || (t[n] = e[n]);
        return t;
    };
function at(e, o, t) {
    const n = Object.keys(o);
    if (n.length !== Object.keys(e).length) {
        return true;
    }
    for (let r = 0; r < n.length; r++) {
        const i = n[r];
        if (o[i] !== e[i] && !Qo(t, i)) {
            return true;
        }
    }
    return false;
}
function st(e, o) {
    if (br) {
        let t = br.provides;
        const n = br.parent && br.parent.provides;
        n === t && (t = br.provides = Object.create(n));
        t[e] = o;
    } else {
        ;
    }
}
function ct(e, o, t = false) {
    const n = br || et;
    if (n) {
        const r = null == n.parent ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides;
        if (r && e in r) {
            return r[e];
        }
        if (arguments.length > 1) {
            return t && _(o) ? o.call(n.proxy) : o;
        }
    }
}
function ut(e, o) {
    return ft(e, null, o);
}
const dt = {};
function pt(e, o, t) {
    return ft(e, o, t);
}
function ft(e, o, {
    immediate: t,
    deep: n,
    flush: r,
    onTrack: i,
    onTrigger: l
} = u) {
    const a = Z() === (null == br ? void 0 : br.scope) ? br : null;
    let s, c, d = false, f = false;
    if (bo(e) ? (s = () => e.value, d = co(e)) : ao(e) ? (s = () => e, n = true) : y(e) ? (f = true, d = e.some(e => ao(e) || co(e)), s = () => e.map(e => bo(e) ? e.value : ao(e) ? gt(e) : _(e) ? Lo(e, a, 2) : void 0)) : s = _(e) ? o ? () => Lo(e, a, 2) : () => {
            if (!a || !a.isUnmounted) {
                return c && c(), Oo(e, a, 3, [m]);
            }
        } : p, o && n) {
        const e = s;
        s = () => gt(e());
    }
    let h, m = e => {
            c = C.onStop = () => {
                Lo(e, a, 4);
            };
        };
    if (_r) {
        if (m = p, o ? t && Oo(o, a, 3, [
                s(),
                f ? [] : void 0,
                m
            ]) : s(), 'sync' !== r) {
            return p;
        }
        {
            const e = Lr();
            h = e.__watcherHandles || (e.__watcherHandles = []);
        }
    }
    let g = f ? new Array(e.length).fill(dt) : dt;
    const v = () => {
        if (C.active) {
            if (o) {
                const e = C.run();
                (n || d || (f ? e.some((e, o) => N(e, g[o])) : N(e, g))) && (c && c(), Oo(o, a, 3, [
                    e,
                    g === dt ? void 0 : f && g[0] === dt ? [] : g,
                    m
                ]), g = e);
            } else {
                C.run();
            }
        }
    };
    let x;
    v.allowRecurse = !!o;
    'sync' === r ? x = v : 'post' === r ? x = () => In(v, a && a.suspense) : (v.pre = true, a && (v.id = a.uid), x = () => Uo(v));
    const C = new ce(s, x);
    o ? t ? v() : g = C.run() : 'post' === r ? In(C.run.bind(C), a && a.suspense) : C.run();
    const S = () => {
        C.stop();
        a && a.scope && b(a.scope.effects, C);
    };
    return h && h.push(S), S;
}
function ht(e, o, t) {
    const n = this.proxy, r = z(e) ? e.includes('.') ? mt(n, e) : () => n[e] : e.bind(n, n);
    let i;
    _(o) ? i = o : (i = o.handler, t = o);
    const l = br;
    Cr(this);
    const a = ft(r, i.bind(n), t);
    return l ? Cr(l) : yr(), a;
}
function mt(e, o) {
    const t = o.split('.');
    return () => {
        let o = e;
        for (let e = 0; e < t.length && o; e++) {
            o = o[t[e]];
        }
        return o;
    };
}
function gt(e, o) {
    if (!P(e) || e.__v_skip) {
        return e;
    }
    if ((o = o || new Set()).has(e)) {
        return e;
    }
    if (o.add(e), bo(e)) {
        gt(e.value, o);
    } else {
        if (y(e)) {
            for (let t = 0; t < e.length; t++) {
                gt(e[t], o);
            }
        } else {
            if (w(e) || S(e)) {
                e.forEach(e => {
                    gt(e, o);
                });
            } else {
                if (O(e)) {
                    for (const t in e)
                        gt(e[t], o);
                }
            }
        }
    }
    return e;
}
function vt() {
    const e = {
        isMounted: false,
        isLeaving: false,
        isUnmounting: false,
        leavingVNodes: new Map()
    };
    return Mt(() => {
        e.isMounted = true;
    }), Bt(() => {
        e.isUnmounting = true;
    }), e;
}
const bt = [
        Function,
        Array
    ], xt = {
        name: 'BaseTransition',
        props: {
            mode: String,
            appear: Boolean,
            persisted: Boolean,
            onBeforeEnter: bt,
            onEnter: bt,
            onAfterEnter: bt,
            onEnterCancelled: bt,
            onBeforeLeave: bt,
            onLeave: bt,
            onAfterLeave: bt,
            onLeaveCancelled: bt,
            onBeforeAppear: bt,
            onAppear: bt,
            onAfterAppear: bt,
            onAppearCancelled: bt
        },
        setup(e, {slots: o}) {
            const t = xr(), n = vt();
            let r;
            return () => {
                const i = o.default && zt(o.default(), true);
                if (!i || !i.length) {
                    return;
                }
                let l = i[0];
                if (i.length > 1) {
                    for (const e of i)
                        if (e.type !== Gn) {
                            l = e;
                            break;
                        }
                }
                const a = po(e), {mode: s} = a;
                if (n.isLeaving) {
                    return St(l);
                }
                const c = wt(l);
                if (!c) {
                    return St(l);
                }
                const u = yt(c, a, n, t);
                _t(c, u);
                const d = t.subTree, p = d && wt(d);
                let f = false;
                const {getTransitionKey: h} = c.type;
                if (h) {
                    const e = h();
                    void 0 === r ? r = e : e !== r && (r = e, f = true);
                }
                if (p && p.type !== Gn && (!nr(c, p) || f)) {
                    const e = yt(p, a, n, t);
                    if (_t(p, e), 'out-in' === s) {
                        return n.isLeaving = true, e.afterLeave = () => {
                            n.isLeaving = false;
                            false !== t.update.active && t.update();
                        }, St(l);
                    }
                    'in-out' === s && c.type !== Gn && (e.delayLeave = (e, o, t) => {
                        Ct(n, p)[String(p.key)] = p;
                        e._leaveCb = () => {
                            o();
                            e._leaveCb = void 0;
                            delete u.delayedLeave;
                        };
                        u.delayedLeave = t;
                    });
                }
                return l;
            };
        }
    };
function Ct(e, o) {
    const {leavingVNodes: t} = e;
    let n = t.get(o.type);
    return n || (n = Object.create(null), t.set(o.type, n)), n;
}
function yt(e, o, t, n) {
    const {
            appear: r,
            mode: i,
            persisted: l = false,
            onBeforeEnter: a,
            onEnter: s,
            onAfterEnter: c,
            onEnterCancelled: u,
            onBeforeLeave: d,
            onLeave: p,
            onAfterLeave: f,
            onLeaveCancelled: h,
            onBeforeAppear: m,
            onAppear: g,
            onAfterAppear: v,
            onAppearCancelled: b
        } = o, x = String(e.key), C = Ct(t, e), S = (e, o) => {
            e && Oo(e, n, 9, o);
        }, w = (e, o) => {
            const t = o[1];
            S(e, o);
            y(e) ? e.every(e => e.length <= 1) && t() : e.length <= 1 && t();
        }, _ = {
            mode: i,
            persisted: l,
            beforeEnter(o) {
                let n = a;
                if (!t.isMounted) {
                    if (!r) {
                        return;
                    }
                    n = m || a;
                }
                o._leaveCb && o._leaveCb(true);
                const i = C[x];
                i && nr(e, i) && i.el._leaveCb && i.el._leaveCb();
                S(n, [o]);
            },
            enter(e) {
                let o = s, n = c, i = u;
                if (!t.isMounted) {
                    if (!r) {
                        return;
                    }
                    o = g || s;
                    n = v || c;
                    i = b || u;
                }
                let l = false;
                const a = e._enterCb = o => {
                    l || (l = true, S(o ? i : n, [e]), _.delayedLeave && _.delayedLeave(), e._enterCb = void 0);
                };
                o ? w(o, [
                    e,
                    a
                ]) : a();
            },
            leave(o, n) {
                const r = String(e.key);
                if (o._enterCb && o._enterCb(true), t.isUnmounting) {
                    return n();
                }
                S(d, [o]);
                let i = false;
                const l = o._leaveCb = t => {
                    i || (i = true, n(), S(t ? h : f, [o]), o._leaveCb = void 0, C[r] === e && delete C[r]);
                };
                C[r] = e;
                p ? w(p, [
                    o,
                    l
                ]) : l();
            },
            clone: e => yt(e, o, t, n)
        };
    return _;
}
function St(e) {
    if (Et(e)) {
        return (e = cr(e)).children = null, e;
    }
}
function wt(e) {
    return Et(e) ? e.children ? e.children[0] : void 0 : e;
}
function _t(e, o) {
    6 & e.shapeFlag && e.component ? _t(e.component.subTree, o) : 128 & e.shapeFlag ? (e.ssContent.transition = o.clone(e.ssContent), e.ssFallback.transition = o.clone(e.ssFallback)) : e.transition = o;
}
function zt(e, o = false, t) {
    let n = [], r = 0;
    for (let i = 0; i < e.length; i++) {
        let l = e[i];
        const a = null == t ? l.key : String(t) + String(null != l.key ? l.key : i);
        l.type === Un ? (128 & l.patchFlag && r++, n = n.concat(zt(l.children, o, a))) : (o || l.type !== Gn) && n.push(null != a ? cr(l, { key: a }) : l);
    }
    if (r > 1) {
        for (let i = 0; i < n.length; i++) {
            n[i].patchFlag = -2;
        }
    }
    return n;
}
function Tt(e) {
    return _(e) ? {
        setup: e,
        name: e.name
    } : e;
}
const Pt = e => !!e.type.__asyncLoader, Et = e => e.type.__isKeepAlive;
function kt(e, o) {
    Lt(e, 'a', o);
}
function Rt(e, o) {
    Lt(e, 'da', o);
}
function Lt(e, o, t = br) {
    const n = e.__wdc || (e.__wdc = () => {
        let o = t;
        for (; o;) {
            if (o.isDeactivated) {
                return;
            }
            o = o.parent;
        }
        return e();
    });
    if (At(o, n, t), t) {
        let e = t.parent;
        for (; e && e.parent;) {
            Et(e.parent.vnode) && Ot(n, o, t, e);
            e = e.parent;
        }
    }
}
function Ot(e, o, t, n) {
    const r = At(o, e, n, true);
    Dt(() => {
        b(n[o], r);
    }, t);
}
function At(e, o, t = br, n = false) {
    if (t) {
        const r = t[e] || (t[e] = []), i = o.__weh || (o.__weh = (...n) => {
                if (t.isUnmounted) {
                    return;
                }
                fe();
                Cr(t);
                const r = Oo(o, t, e, n);
                return yr(), he(), r;
            });
        return n ? r.unshift(i) : r.push(i), i;
    }
}
const It = e => (o, t = br) => (!_r || 'sp' === e) && At(e, (...e) => o(...e), t), $t = It('bm'), Mt = It('m'), Ht = It('bu'), Ft = It('u'), Bt = It('bum'), Dt = It('um'), jt = It('sp'), Nt = It('rtg'), Wt = It('rtc');
function Ut(e, o = br) {
    At('ec', e, o);
}
function Vt(e, o) {
    const t = et;
    if (null === t) {
        return e;
    }
    const n = Pr(t) || t.proxy, r = e.dirs || (e.dirs = []);
    for (let i = 0; i < o.length; i++) {
        let [e, t, l, a = u] = o[i];
        e && (_(e) && (e = {
            mounted: e,
            updated: e
        }), e.deep && gt(t), r.push({
            dir: e,
            instance: n,
            value: t,
            oldValue: void 0,
            arg: l,
            modifiers: a
        }));
    }
    return e;
}
function Gt(e, o, t, n) {
    const r = e.dirs, i = o && o.dirs;
    for (let l = 0; l < r.length; l++) {
        const a = r[l];
        i && (a.oldValue = i[l].value);
        let s = a.dir[n];
        s && (fe(), Oo(s, t, 8, [
            e.el,
            a,
            e,
            o
        ]), he());
    }
}
const qt = 'components';
function Kt(e, o) {
    return function (e, o, t = true, n = false) {
        const r = et || br;
        if (r) {
            const t = r.type;
            if (e === qt) {
                const e = function (e, o = true) {
                    return _(e) ? e.displayName || e.name : e.name || o && e.__name;
                }(t, false);
                if (e && (e === o || e === H(o) || e === D(H(o)))) {
                    return t;
                }
            }
            const i = Xt(r[e] || t[e], o) || Xt(r.appContext[e], o);
            return !i && n ? t : i;
        }
    }(qt, e, true, o) || e;
}
const Yt = Symbol();
function Xt(e, o) {
    return e && (e[o] || e[H(o)] || e[D(H(o))]);
}
function Jt(e, o, t = {}, n, r) {
    if (et.isCE || et.parent && Pt(et.parent) && et.parent.isCE) {
        return 'default' !== o && (t.name = o), sr('slot', t, n && n());
    }
    let i = e[o];
    i && i._c && (i._d = false);
    Xn();
    const l = i && Zt(i(t)), a = or(Un, { key: t.key || l && l.key || `_${ o }` }, l || (n ? n() : []), l && 1 === e._ ? 64 : -2);
    return !r && a.scopeId && (a.slotScopeIds = [a.scopeId + '-s']), i && i._c && (i._d = true), a;
}
function Zt(e) {
    return e.some(e => !tr(e) || e.type !== Gn && !(e.type === Un && !Zt(e.children))) ? e : null;
}
const Qt = e => e ? Sr(e) ? Pr(e) || e.proxy : Qt(e.parent) : null, en = v(Object.create(null), {
        $: e => e,
        $el: e => e.vnode.el,
        $data: e => e.data,
        $props: e => e.props,
        $attrs: e => e.attrs,
        $slots: e => e.slots,
        $refs: e => e.refs,
        $parent: e => Qt(e.parent),
        $root: e => Qt(e.root),
        $emit: e => e.emit,
        $options: e => sn(e),
        $forceUpdate: e => e.f || (e.f = () => Uo(e.update)),
        $nextTick: e => e.n || (e.n = Wo.bind(e.proxy)),
        $watch: e => ht.bind(e)
    }), on = (e, o) => e !== u && !e.__isScriptSetup && C(e, o), tn = {
        get({_: e}, o) {
            const {
                ctx: t,
                setupState: n,
                data: r,
                props: i,
                accessCache: l,
                type: a,
                appContext: s
            } = e;
            let c;
            if ('$' !== o[0]) {
                const a = l[o];
                if (void 0 !== a) {
                    switch (a) {
                    case 1:
                        return n[o];
                    case 2:
                        return r[o];
                    case 4:
                        return t[o];
                    case 3:
                        return i[o];
                    }
                } else {
                    if (on(n, o)) {
                        return l[o] = 1, n[o];
                    }
                    if (r !== u && C(r, o)) {
                        return l[o] = 2, r[o];
                    }
                    if ((c = e.propsOptions[0]) && C(c, o)) {
                        return l[o] = 3, i[o];
                    }
                    if (t !== u && C(t, o)) {
                        return l[o] = 4, t[o];
                    }
                    nn && (l[o] = 0);
                }
            }
            const d = en[o];
            let p, f;
            return d ? ('$attrs' === o && me(e, 0, o), d(e)) : (p = a.__cssModules) && (p = p[o]) ? p : t !== u && C(t, o) ? (l[o] = 4, t[o]) : (f = s.config.globalProperties, C(f, o) ? f[o] : void 0);
        },
        set({_: e}, o, t) {
            const {
                data: n,
                setupState: r,
                ctx: i
            } = e;
            return on(r, o) ? (r[o] = t, true) : n !== u && C(n, o) ? (n[o] = t, true) : !C(e.props, o) && (('$' !== o[0] || !(o.slice(1) in e)) && (i[o] = t, true));
        },
        has({
            _: {
                data: e,
                setupState: o,
                accessCache: t,
                ctx: n,
                appContext: r,
                propsOptions: i
            }
        }, l) {
            let a;
            return !!t[l] || e !== u && C(e, l) || on(o, l) || (a = i[0]) && C(a, l) || C(n, l) || C(en, l) || C(r.config.globalProperties, l);
        },
        defineProperty(e, o, t) {
            return null != t.get ? e._.accessCache[o] = 0 : C(t, 'value') && this.set(e, o, t.value, null), Reflect.defineProperty(e, o, t);
        }
    };
let nn = true;
function rn(e) {
    const o = sn(e), t = e.proxy, n = e.ctx;
    nn = false;
    o.beforeCreate && ln(o.beforeCreate, e, 'bc');
    const {
        data: r,
        computed: i,
        methods: l,
        watch: a,
        provide: s,
        inject: c,
        created: u,
        beforeMount: d,
        mounted: f,
        beforeUpdate: h,
        updated: m,
        activated: g,
        deactivated: v,
        beforeDestroy: b,
        beforeUnmount: x,
        destroyed: C,
        unmounted: S,
        render: w,
        renderTracked: z,
        renderTriggered: T,
        errorCaptured: E,
        serverPrefetch: k,
        expose: R,
        inheritAttrs: L,
        components: O,
        directives: A,
        filters: I
    } = o;
    if (c && function (e, o, t = p, n = false) {
            y(e) && (e = pn(e));
            for (const r in e) {
                const t = e[r];
                let i;
                i = P(t) ? 'default' in t ? ct(t.from || r, t.default, true) : ct(t.from || r) : ct(t);
                bo(i) && n ? Object.defineProperty(o, r, {
                    enumerable: true,
                    configurable: true,
                    get: () => i.value,
                    set: e => i.value = e
                }) : o[r] = i;
            }
        }(c, n, null, e.appContext.config.unwrapInjectedRef), l) {
        for (const p in l) {
            const e = l[p];
            _(e) && (n[p] = e.bind(t));
        }
    }
    if (r) {
        const o = r.call(t, t);
        P(o) && (e.data = ro(o));
    }
    if (nn = true, i) {
        for (const y in i) {
            const e = i[y], o = _(e) ? e.bind(t, t) : _(e.get) ? e.get.bind(t, t) : p, r = !_(e) && _(e.set) ? e.set.bind(t) : p, l = Er({
                    get: o,
                    set: r
                });
            Object.defineProperty(n, y, {
                enumerable: true,
                configurable: true,
                get: () => l.value,
                set: e => l.value = e
            });
        }
    }
    if (a) {
        for (const p in a)
            an(a[p], n, t, p);
    }
    if (s) {
        const e = _(s) ? s.call(t) : s;
        Reflect.ownKeys(e).forEach(o => {
            st(o, e[o]);
        });
    }
    function $(e, o) {
        y(o) ? o.forEach(o => e(o.bind(t))) : o && e(o.bind(t));
    }
    if (u && ln(u, e, 'c'), $($t, d), $(Mt, f), $(Ht, h), $(Ft, m), $(kt, g), $(Rt, v), $(Ut, E), $(Wt, z), $(Nt, T), $(Bt, x), $(Dt, S), $(jt, k), y(R)) {
        if (R.length) {
            const o = e.exposed || (e.exposed = {});
            R.forEach(e => {
                Object.defineProperty(o, e, {
                    get: () => t[e],
                    set: o => t[e] = o
                });
            });
        } else {
            e.exposed || (e.exposed = {});
        }
    }
    w && e.render === p && (e.render = w);
    null != L && (e.inheritAttrs = L);
    O && (e.components = O);
    A && (e.directives = A);
}
function ln(e, o, t) {
    Oo(y(e) ? e.map(e => e.bind(o.proxy)) : e.bind(o.proxy), o, t);
}
function an(e, o, t, n) {
    const r = n.includes('.') ? mt(t, n) : () => t[n];
    if (z(e)) {
        const t = o[e];
        _(t) && pt(r, t);
    } else {
        if (_(e)) {
            pt(r, e.bind(t));
        } else {
            if (P(e)) {
                if (y(e)) {
                    e.forEach(e => an(e, o, t, n));
                } else {
                    const n = _(e.handler) ? e.handler.bind(t) : o[e.handler];
                    _(n) && pt(r, n, e);
                }
            }
        }
    }
}
function sn(e) {
    const o = e.type, {
            mixins: t,
            extends: n
        } = o, {
            mixins: r,
            optionsCache: i,
            config: {optionMergeStrategies: l}
        } = e.appContext, a = i.get(o);
    let s;
    return a ? s = a : r.length || t || n ? (s = {}, r.length && r.forEach(e => cn(s, e, l, true)), cn(s, o, l)) : s = o, P(o) && i.set(o, s), s;
}
function cn(e, o, t, n = false) {
    const {
        mixins: r,
        extends: i
    } = o;
    i && cn(e, i, t, true);
    r && r.forEach(o => cn(e, o, t, true));
    for (const l in o)
        if (n && 'expose' === l) {
            ;
        } else {
            const n = un[l] || t && t[l];
            e[l] = n ? n(e[l], o[l]) : o[l];
        }
    return e;
}
const un = {
    data: dn,
    props: hn,
    emits: hn,
    methods: hn,
    computed: hn,
    beforeCreate: fn,
    created: fn,
    beforeMount: fn,
    mounted: fn,
    beforeUpdate: fn,
    updated: fn,
    beforeDestroy: fn,
    beforeUnmount: fn,
    destroyed: fn,
    unmounted: fn,
    activated: fn,
    deactivated: fn,
    errorCaptured: fn,
    serverPrefetch: fn,
    components: hn,
    directives: hn,
    watch: function (e, o) {
        if (!e) {
            return o;
        }
        if (!o) {
            return e;
        }
        const t = v(Object.create(null), e);
        for (const n in o)
            t[n] = fn(e[n], o[n]);
        return t;
    },
    provide: dn,
    inject: function (e, o) {
        return hn(pn(e), pn(o));
    }
};
function dn(e, o) {
    return o ? e ? function () {
        return v(_(e) ? e.call(this, this) : e, _(o) ? o.call(this, this) : o);
    } : o : e;
}
function pn(e) {
    if (y(e)) {
        const o = {};
        for (let t = 0; t < e.length; t++) {
            o[e[t]] = e[t];
        }
        return o;
    }
    return e;
}
function fn(e, o) {
    return e ? [...new Set([].concat(e, o))] : o;
}
function hn(e, o) {
    return e ? v(v(Object.create(null), e), o) : o;
}
function mn(e, o, t, n = false) {
    const r = {}, i = {};
    U(i, rr, 1);
    e.propsDefaults = Object.create(null);
    gn(e, o, r, i);
    for (const l in e.propsOptions[0])
        l in r || (r[l] = void 0);
    t ? e.props = n ? r : lo(r, false, Oe, Ze, oo) : e.type.props ? e.props = r : e.props = i;
    e.attrs = i;
}
function gn(e, o, t, n) {
    const [r, i] = e.propsOptions;
    let l, a = false;
    if (o) {
        for (let s in o) {
            if (I(s)) {
                continue;
            }
            const c = o[s];
            let u;
            r && C(r, u = H(s)) ? i && i.includes(u) ? (l || (l = {}))[u] = c : t[u] = c : Qo(e.emitsOptions, s) || s in n && c === n[s] || (n[s] = c, a = true);
        }
    }
    if (i) {
        const o = po(t), n = l || u;
        for (let l = 0; l < i.length; l++) {
            const a = i[l];
            t[a] = vn(r, o, a, n[a], e, !C(n, a));
        }
    }
    return a;
}
function vn(e, o, t, n, r, i) {
    const l = e[t];
    if (null != l) {
        const e = C(l, 'default');
        if (e && void 0 === n) {
            const e = l.default;
            if (l.type !== Function && _(e)) {
                const {propsDefaults: i} = r;
                t in i ? n = i[t] : (Cr(r), n = i[t] = e.call(null, o), yr());
            } else {
                n = e;
            }
        }
        l[0] && (i && !e ? n = false : !l[1] || '' !== n && n !== B(t) || (n = true));
    }
    return n;
}
function bn(e, o, t = false) {
    const n = o.propsCache, r = n.get(e);
    if (r) {
        return r;
    }
    const i = e.props, l = {}, a = [];
    let s = false;
    if (!_(e)) {
        const n = e => {
            s = true;
            const [t, n] = bn(e, o, true);
            v(l, t);
            n && a.push(...n);
        };
        !t && o.mixins.length && o.mixins.forEach(n);
        e.extends && n(e.extends);
        e.mixins && e.mixins.forEach(n);
    }
    if (!i && !s) {
        return P(e) && n.set(e, d), d;
    }
    if (y(i)) {
        for (let d = 0; d < i.length; d++) {
            const e = H(i[d]);
            xn(e) && (l[e] = u);
        }
    } else {
        if (i) {
            for (const u in i) {
                const e = H(u);
                if (xn(e)) {
                    const o = i[u], t = l[e] = y(o) || _(o) ? { type: o } : Object.assign({}, o);
                    if (t) {
                        const o = Sn(Boolean, t.type), n = Sn(String, t.type);
                        t[0] = o > -1;
                        t[1] = n < 0 || o < n;
                        (o > -1 || C(t, 'default')) && a.push(e);
                    }
                }
            }
        }
    }
    const c = [
        l,
        a
    ];
    return P(e) && n.set(e, c), c;
}
function xn(e) {
    return '$' !== e[0];
}
function Cn(e) {
    const o = e && e.toString().match(/^\s*(function|class) (\w+)/);
    return o ? o[2] : null === e ? 'null' : '';
}
function yn(e, o) {
    return Cn(e) === Cn(o);
}
function Sn(e, o) {
    return y(o) ? o.findIndex(o => yn(o, e)) : _(o) && yn(o, e) ? 0 : -1;
}
const wn = e => '_' === e[0] || '$stable' === e, _n = e => y(e) ? e.map(dr) : [dr(e)], zn = (e, o, t) => {
        if (o._n) {
            return o;
        }
        const n = nt((...e) => _n(o(...e)), t);
        return n._c = false, n;
    }, Tn = (e, o, t) => {
        const n = e._ctx;
        for (const r in e) {
            if (wn(r)) {
                continue;
            }
            const t = e[r];
            if (_(t)) {
                o[r] = zn(0, t, n);
            } else {
                if (null != t) {
                    const e = _n(t);
                    o[r] = () => e;
                }
            }
        }
    }, Pn = (e, o) => {
        const t = _n(o);
        e.slots.default = () => t;
    }, En = (e, o) => {
        if (32 & e.vnode.shapeFlag) {
            const t = o._;
            t ? (e.slots = po(o), U(o, '_', t)) : Tn(o, e.slots = {});
        } else {
            e.slots = {};
            o && Pn(e, o);
        }
        U(e.slots, rr, 1);
    }, kn = (e, o, t) => {
        const {
            vnode: n,
            slots: r
        } = e;
        let i = true, l = u;
        if (32 & n.shapeFlag) {
            const e = o._;
            e ? t && 1 === e ? i = false : (v(r, o), t || 1 !== e || delete r._) : (i = !o.$stable, Tn(o, r));
            l = o;
        } else {
            o && (Pn(e, o), l = { default: 1 });
        }
        if (i) {
            for (const a in r)
                wn(a) || a in l || delete r[a];
        }
    };
function Rn() {
    return {
        app: null,
        config: {
            isNativeTag: f,
            performance: false,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap(),
        propsCache: new WeakMap(),
        emitsCache: new WeakMap()
    };
}
let Ln = 0;
function On(e, o) {
    return function (t, n = null) {
        _(t) || (t = Object.assign({}, t));
        null == n || P(n) || (n = null);
        const r = Rn(), i = new Set();
        let l = false;
        const a = r.app = {
            _uid: Ln++,
            _component: t,
            _props: n,
            _container: null,
            _context: r,
            _instance: null,
            version: Or,
            get config() {
                return r.config;
            },
            set config(e) {
            },
            use: (e, ...o) => (i.has(e) || (e && _(e.install) ? (i.add(e), e.install(a, ...o)) : _(e) && (i.add(e), e(a, ...o))), a),
            mixin: e => (r.mixins.includes(e) || r.mixins.push(e), a),
            component: (e, o) => o ? (r.components[e] = o, a) : r.components[e],
            directive: (e, o) => o ? (r.directives[e] = o, a) : r.directives[e],
            mount(i, s, c) {
                if (!l) {
                    const u = sr(t, n);
                    return u.appContext = r, s && o ? o(u, i) : e(u, i, c), l = true, a._container = i, i.__vue_app__ = a, Pr(u.component) || u.component.proxy;
                }
            },
            unmount() {
                l && (e(null, a._container), delete a._container.__vue_app__);
            },
            provide: (e, o) => (r.provides[e] = o, a)
        };
        return a;
    };
}
function An(e, o, t, n, r = false) {
    if (y(e)) {
        return void e.forEach((e, i) => An(e, o && (y(o) ? o[i] : o), t, n, r));
    }
    if (Pt(n) && !r) {
        return;
    }
    const i = 4 & n.shapeFlag ? Pr(n.component) || n.component.proxy : n.el, l = r ? null : i, {
            i: a,
            r: s
        } = e, c = o && o.r, d = a.refs === u ? a.refs = {} : a.refs, p = a.setupState;
    if (null != c && c !== s && (z(c) ? (d[c] = null, C(p, c) && (p[c] = null)) : bo(c) && (c.value = null)), _(s)) {
        Lo(s, a, 12, [
            l,
            d
        ]);
    } else {
        const o = z(s), n = bo(s);
        if (o || n) {
            const a = () => {
                if (e.f) {
                    const t = o ? C(p, s) ? p[s] : d[s] : s.value;
                    r ? y(t) && b(t, i) : y(t) ? t.includes(i) || t.push(i) : o ? (d[s] = [i], C(p, s) && (p[s] = d[s])) : (s.value = [i], e.k && (d[e.k] = s.value));
                } else {
                    o ? (d[s] = l, C(p, s) && (p[s] = l)) : n && (s.value = l, e.k && (d[e.k] = l));
                }
            };
            l ? (a.id = -1, In(a, t)) : a();
        }
    }
}
const In = function (e, o) {
    var t;
    o && o.pendingBranch ? y(e) ? o.effects.push(...e) : o.effects.push(e) : (y(t = e) ? Fo.push(...t) : Bo && Bo.includes(t, t.allowRecurse ? Do + 1 : Do) || Fo.push(t), Vo());
};
function $n(e) {
    return function (e, o) {
        K().__VUE__ = true;
        const {
                insert: t,
                remove: n,
                patchProp: r,
                createElement: i,
                createText: l,
                createComment: a,
                setText: s,
                setElementText: c,
                parentNode: f,
                nextSibling: h,
                setScopeId: m = p,
                insertStaticContent: g
            } = e, v = (e, o, t, n = null, r = null, i = null, l = false, a = null, s = !!o.dynamicChildren) => {
                if (e === o) {
                    return;
                }
                e && !nr(e, o) && (n = Q(e), G(e, r, i, true), e = null);
                -2 === o.patchFlag && (s = false, o.dynamicChildren = null);
                const {
                    type: c,
                    ref: u,
                    shapeFlag: d
                } = o;
                switch (c) {
                case Vn:
                    b(e, o, t, n);
                    break;
                case Gn:
                    x(e, o, t, n);
                    break;
                case qn:
                    null == e && y(o, t, n, l);
                    break;
                case Un:
                    O(e, o, t, n, r, i, l, a, s);
                    break;
                default:
                    1 & d ? _(e, o, t, n, r, i, l, a, s) : 6 & d ? A(e, o, t, n, r, i, l, a, s) : (64 & d || 128 & d) && c.process(e, o, t, n, r, i, l, a, s, oe);
                }
                null != u && r && An(u, e && e.ref, i, o || e, !o);
            }, b = (e, o, n, r) => {
                if (null == e) {
                    t(o.el = l(o.children), n, r);
                } else {
                    const t = o.el = e.el;
                    o.children !== e.children && s(t, o.children);
                }
            }, x = (e, o, n, r) => {
                null == e ? t(o.el = a(o.children || ''), n, r) : o.el = e.el;
            }, y = (e, o, t, n) => {
                [e.el, e.anchor] = g(e.children, o, t, n, e.el, e.anchor);
            }, S = ({
                el: e,
                anchor: o
            }, n, r) => {
                let i;
                for (; e && e !== o;) {
                    i = h(e);
                    t(e, n, r);
                    e = i;
                }
                t(o, n, r);
            }, w = ({
                el: e,
                anchor: o
            }) => {
                let t;
                for (; e && e !== o;) {
                    t = h(e);
                    n(e);
                    e = t;
                }
                n(o);
            }, _ = (e, o, t, n, r, i, l, a, s) => {
                l = l || 'svg' === o.type;
                null == e ? z(o, t, n, r, i, l, a, s) : k(e, o, r, i, l, a, s);
            }, z = (e, o, n, l, a, s, u, d) => {
                let p, f;
                const {
                    type: h,
                    props: m,
                    shapeFlag: g,
                    transition: v,
                    dirs: b
                } = e;
                if (p = e.el = i(e.type, s, m && m.is, m), 8 & g ? c(p, e.children) : 16 & g && P(e.children, p, null, l, a, s && 'foreignObject' !== h, u, d), b && Gt(e, null, l, 'created'), T(p, e, e.scopeId, u, l), m) {
                    for (const o in m)
                        'value' === o || I(o) || r(p, o, null, m[o], s, e.children, l, a, Z);
                    'value' in m && r(p, 'value', null, m.value);
                    (f = m.onVnodeBeforeMount) && mr(f, l, e);
                }
                b && Gt(e, null, l, 'beforeMount');
                const x = (!a || a && !a.pendingBranch) && v && !v.persisted;
                x && v.beforeEnter(p);
                t(p, o, n);
                ((f = m && m.onVnodeMounted) || x || b) && In(() => {
                    f && mr(f, l, e);
                    x && v.enter(p);
                    b && Gt(e, null, l, 'mounted');
                }, a);
            }, T = (e, o, t, n, r) => {
                if (t && m(e, t), n) {
                    for (let i = 0; i < n.length; i++) {
                        m(e, n[i]);
                    }
                }
                if (r) {
                    if (o === r.subTree) {
                        const o = r.vnode;
                        T(e, o, o.scopeId, o.slotScopeIds, r.parent);
                    }
                }
            }, P = (e, o, t, n, r, i, l, a, s = 0) => {
                for (let c = s; c < e.length; c++) {
                    const s = e[c] = a ? pr(e[c]) : dr(e[c]);
                    v(null, s, o, t, n, r, i, l, a);
                }
            }, k = (e, o, t, n, i, l, a) => {
                const s = o.el = e.el;
                let {
                    patchFlag: d,
                    dynamicChildren: p,
                    dirs: f
                } = o;
                d |= 16 & e.patchFlag;
                const h = e.props || u, m = o.props || u;
                let g;
                t && Mn(t, false);
                (g = m.onVnodeBeforeUpdate) && mr(g, t, o, e);
                f && Gt(o, e, t, 'beforeUpdate');
                t && Mn(t, true);
                const v = i && 'foreignObject' !== o.type;
                if (p ? R(e.dynamicChildren, p, s, t, n, v, l) : a || j(e, o, s, null, t, n, v, l, false), d > 0) {
                    if (16 & d) {
                        L(s, o, h, m, t, n, i);
                    } else {
                        if (2 & d && h.class !== m.class && r(s, 'class', null, m.class, i), 4 & d && r(s, 'style', h.style, m.style, i), 8 & d) {
                            const l = o.dynamicProps;
                            for (let o = 0; o < l.length; o++) {
                                const a = l[o], c = h[a], u = m[a];
                                u === c && 'value' !== a || r(s, a, c, u, i, e.children, t, n, Z);
                            }
                        }
                    }
                    1 & d && e.children !== o.children && c(s, o.children);
                } else {
                    a || null != p || L(s, o, h, m, t, n, i);
                }
                ((g = m.onVnodeUpdated) || f) && In(() => {
                    g && mr(g, t, o, e);
                    f && Gt(o, e, t, 'updated');
                }, n);
            }, R = (e, o, t, n, r, i, l) => {
                for (let a = 0; a < o.length; a++) {
                    const s = e[a], c = o[a], u = s.el && (s.type === Un || !nr(s, c) || 70 & s.shapeFlag) ? f(s.el) : t;
                    v(s, c, u, null, n, r, i, l, true);
                }
            }, L = (e, o, t, n, i, l, a) => {
                if (t !== n) {
                    if (t !== u) {
                        for (const s in t)
                            I(s) || s in n || r(e, s, t[s], null, a, o.children, i, l, Z);
                    }
                    for (const s in n) {
                        if (I(s)) {
                            continue;
                        }
                        const c = n[s], u = t[s];
                        c !== u && 'value' !== s && r(e, s, u, c, a, o.children, i, l, Z);
                    }
                    'value' in n && r(e, 'value', t.value, n.value);
                }
            }, O = (e, o, n, r, i, a, s, c, u) => {
                const d = o.el = e ? e.el : l(''), p = o.anchor = e ? e.anchor : l('');
                let {
                    patchFlag: f,
                    dynamicChildren: h,
                    slotScopeIds: m
                } = o;
                m && (c = c ? c.concat(m) : m);
                null == e ? (t(d, n, r), t(p, n, r), P(o.children, n, p, i, a, s, c, u)) : f > 0 && 64 & f && h && e.dynamicChildren ? (R(e.dynamicChildren, h, n, i, a, s, c), (null != o.key || i && o === i.subTree) && Hn(e, o, true)) : j(e, o, n, p, i, a, s, c, u);
            }, A = (e, o, t, n, r, i, l, a, s) => {
                o.slotScopeIds = a;
                null == e ? 512 & o.shapeFlag ? r.ctx.activate(o, t, n, l, s) : $(o, t, n, r, i, l, s) : M(e, o, s);
            }, $ = (e, o, t, n, r, i, l) => {
                const a = e.component = function (e, o, t) {
                    const n = e.type, r = (o ? o.appContext : e.appContext) || gr, i = {
                            uid: vr++,
                            vnode: e,
                            type: n,
                            parent: o,
                            appContext: r,
                            root: null,
                            next: null,
                            subTree: null,
                            effect: null,
                            update: null,
                            scope: new X(true),
                            render: null,
                            proxy: null,
                            exposed: null,
                            exposeProxy: null,
                            withProxy: null,
                            provides: o ? o.provides : Object.create(r.provides),
                            accessCache: null,
                            renderCache: [],
                            components: null,
                            directives: null,
                            propsOptions: bn(n, r),
                            emitsOptions: Zo(n, r),
                            emit: null,
                            emitted: null,
                            propsDefaults: u,
                            inheritAttrs: n.inheritAttrs,
                            ctx: u,
                            data: u,
                            props: u,
                            attrs: u,
                            slots: u,
                            refs: u,
                            setupState: u,
                            setupContext: null,
                            suspense: t,
                            suspenseId: t ? t.pendingId : 0,
                            asyncDep: null,
                            asyncResolved: false,
                            isMounted: false,
                            isUnmounted: false,
                            isDeactivated: false,
                            bc: null,
                            c: null,
                            bm: null,
                            m: null,
                            bu: null,
                            u: null,
                            um: null,
                            bum: null,
                            da: null,
                            a: null,
                            rtg: null,
                            rtc: null,
                            ec: null,
                            sp: null
                        };
                    i.ctx = { _: i };
                    i.root = o ? o.root : i;
                    i.emit = Jo.bind(null, i);
                    e.ce && e.ce(i);
                    return i;
                }(e, n, r);
                if (Et(e) && (a.ctx.renderer = oe), function (e, o = false) {
                        _r = o;
                        const {
                                props: t,
                                children: n
                            } = e.vnode, r = Sr(e);
                        mn(e, t, r, o);
                        En(e, n);
                        const i = r ? function (e, o) {
                            const t = e.type;
                            e.accessCache = Object.create(null);
                            e.proxy = fo(new Proxy(e.ctx, tn));
                            const {setup: n} = t;
                            if (n) {
                                const t = e.setupContext = n.length > 1 ? function (e) {
                                    const o = o => {
                                        e.exposed = o || {};
                                    };
                                    let t;
                                    return {
                                        get attrs() {
                                            return t || (t = function (e) {
                                                return new Proxy(e.attrs, { get: (o, t) => (me(e, 0, '$attrs'), o[t]) });
                                            }(e));
                                        },
                                        slots: e.slots,
                                        emit: e.emit,
                                        expose: o
                                    };
                                }(e) : null;
                                Cr(e);
                                fe();
                                const r = Lo(n, e, 0, [
                                    e.props,
                                    t
                                ]);
                                if (he(), yr(), E(r)) {
                                    if (r.then(yr, yr), o) {
                                        return r.then(t => {
                                            zr(e, t, o);
                                        }).catch(o => {
                                            Ao(o, e, 0);
                                        });
                                    }
                                    e.asyncDep = r;
                                } else {
                                    zr(e, r, o);
                                }
                            } else {
                                Tr(e, o);
                            }
                        }(e, o) : void 0;
                        _r = false;
                    }(a), a.asyncDep) {
                    if (r && r.registerDep(a, F), !e.el) {
                        const e = a.subTree = sr(Gn);
                        x(null, e, o, t);
                    }
                } else {
                    F(a, e, o, t, r, i, l);
                }
            }, M = (e, o, t) => {
                const n = o.component = e.component;
                if (function (e, o, t) {
                        const {
                                props: n,
                                children: r,
                                component: i
                            } = e, {
                                props: l,
                                children: a,
                                patchFlag: s
                            } = o, c = i.emitsOptions;
                        if (o.dirs || o.transition) {
                            return true;
                        }
                        if (!(t && s >= 0)) {
                            return !(!r && !a || a && a.$stable) || n !== l && (n ? !l || at(n, l, c) : !!l);
                        }
                        if (1024 & s) {
                            return true;
                        }
                        if (16 & s) {
                            return n ? at(n, l, c) : !!l;
                        }
                        if (8 & s) {
                            const e = o.dynamicProps;
                            for (let o = 0; o < e.length; o++) {
                                const t = e[o];
                                if (l[t] !== n[t] && !Qo(c, t)) {
                                    return true;
                                }
                            }
                        }
                        return false;
                    }(e, o, t)) {
                    if (n.asyncDep && !n.asyncResolved) {
                        return void D(n, o, t);
                    }
                    n.next = o;
                    (function (e) {
                        const o = Mo.indexOf(e);
                        o > Ho && Mo.splice(o, 1);
                    }(n.update));
                    n.update();
                } else {
                    o.el = e.el;
                    n.vnode = o;
                }
            }, F = (e, o, t, n, r, i, l) => {
                const a = () => {
                        if (e.isMounted) {
                            let o, {
                                    next: t,
                                    bu: n,
                                    u: a,
                                    parent: s,
                                    vnode: c
                                } = e, u = t;
                            Mn(e, false);
                            t ? (t.el = c.el, D(e, t, l)) : t = c;
                            n && W(n);
                            (o = t.props && t.props.onVnodeBeforeUpdate) && mr(o, s, t, c);
                            Mn(e, true);
                            const d = rt(e), p = e.subTree;
                            e.subTree = d;
                            v(p, d, f(p.el), Q(p), e, r, i);
                            t.el = d.el;
                            null === u && function ({
                                vnode: e,
                                parent: o
                            }, t) {
                                for (; o && o.subTree === e;) {
                                    (e = o.vnode).el = t;
                                    o = o.parent;
                                }
                            }(e, d.el);
                            a && In(a, r);
                            (o = t.props && t.props.onVnodeUpdated) && In(() => mr(o, s, t, c), r);
                        } else {
                            let l;
                            const {
                                    el: a,
                                    props: s
                                } = o, {
                                    bm: c,
                                    m: u,
                                    parent: d
                                } = e, p = Pt(o);
                            if (Mn(e, false), c && W(c), !p && (l = s && s.onVnodeBeforeMount) && mr(l, d, o), Mn(e, true), a && ne) {
                                const t = () => {
                                    e.subTree = rt(e);
                                    ne(a, e.subTree, e, r, null);
                                };
                                p ? o.type.__asyncLoader().then(() => !e.isUnmounted && t()) : t();
                            } else {
                                const l = e.subTree = rt(e);
                                v(null, l, t, n, e, r, i);
                                o.el = l.el;
                            }
                            if (u && In(u, r), !p && (l = s && s.onVnodeMounted)) {
                                const e = o;
                                In(() => mr(l, d, e), r);
                            }
                            (256 & o.shapeFlag || d && Pt(d.vnode) && 256 & d.vnode.shapeFlag) && e.a && In(e.a, r);
                            e.isMounted = true;
                            o = t = n = null;
                        }
                    }, s = e.effect = new ce(a, () => Uo(c), e.scope), c = e.update = () => s.run();
                c.id = e.uid;
                Mn(e, true);
                c();
            }, D = (e, o, t) => {
                o.component = e;
                const n = e.vnode.props;
                e.vnode = o;
                e.next = null;
                (function (e, o, t, n) {
                    const {
                            props: r,
                            attrs: i,
                            vnode: {patchFlag: l}
                        } = e, a = po(r), [s] = e.propsOptions;
                    let c = false;
                    if (!(n || l > 0) || 16 & l) {
                        let n;
                        gn(e, o, r, i) && (c = true);
                        for (const i in a)
                            o && (C(o, i) || (n = B(i)) !== i && C(o, n)) || (s ? !t || void 0 === t[i] && void 0 === t[n] || (r[i] = vn(s, a, i, void 0, e, true)) : delete r[i]);
                        if (i !== a) {
                            for (const e in i)
                                o && C(o, e) || (delete i[e], c = true);
                        }
                    } else {
                        if (8 & l) {
                            const t = e.vnode.dynamicProps;
                            for (let n = 0; n < t.length; n++) {
                                let l = t[n];
                                if (Qo(e.emitsOptions, l)) {
                                    continue;
                                }
                                const u = o[l];
                                if (s) {
                                    if (C(i, l)) {
                                        u !== i[l] && (i[l] = u, c = true);
                                    } else {
                                        const o = H(l);
                                        r[o] = vn(s, a, o, u, e, false);
                                    }
                                } else {
                                    u !== i[l] && (i[l] = u, c = true);
                                }
                            }
                        }
                    }
                    c && ve(e, 'set', '$attrs');
                }(e, o.props, n, t));
                kn(e, o.children, t);
                fe();
                Go();
                he();
            }, j = (e, o, t, n, r, i, l, a, s = false) => {
                const u = e && e.children, d = e ? e.shapeFlag : 0, p = o.children, {
                        patchFlag: f,
                        shapeFlag: h
                    } = o;
                if (f > 0) {
                    if (128 & f) {
                        return void U(u, p, t, n, r, i, l, a, s);
                    }
                    if (256 & f) {
                        return void N(u, p, t, n, r, i, l, a, s);
                    }
                }
                8 & h ? (16 & d && Z(u, r, i), p !== u && c(t, p)) : 16 & d ? 16 & h ? U(u, p, t, n, r, i, l, a, s) : Z(u, r, i, true) : (8 & d && c(t, ''), 16 & h && P(p, t, n, r, i, l, a, s));
            }, N = (e, o, t, n, r, i, l, a, s) => {
                o = o || d;
                const c = (e = e || d).length, u = o.length, p = Math.min(c, u);
                let f;
                for (f = 0; f < p; f++) {
                    const n = o[f] = s ? pr(o[f]) : dr(o[f]);
                    v(e[f], n, t, null, r, i, l, a, s);
                }
                c > u ? Z(e, r, i, true, false, p) : P(o, t, n, r, i, l, a, s, p);
            }, U = (e, o, t, n, r, i, l, a, s) => {
                let c = 0;
                const u = o.length;
                let p = e.length - 1, f = u - 1;
                for (; c <= p && c <= f;) {
                    const n = e[c], u = o[c] = s ? pr(o[c]) : dr(o[c]);
                    if (!nr(n, u)) {
                        break;
                    }
                    v(n, u, t, null, r, i, l, a, s);
                    c++;
                }
                for (; c <= p && c <= f;) {
                    const n = e[p], c = o[f] = s ? pr(o[f]) : dr(o[f]);
                    if (!nr(n, c)) {
                        break;
                    }
                    v(n, c, t, null, r, i, l, a, s);
                    p--;
                    f--;
                }
                if (c > p) {
                    if (c <= f) {
                        const e = f + 1, d = e < u ? o[e].el : n;
                        for (; c <= f;) {
                            v(null, o[c] = s ? pr(o[c]) : dr(o[c]), t, d, r, i, l, a, s);
                            c++;
                        }
                    }
                } else {
                    if (c > f) {
                        for (; c <= p;) {
                            G(e[c], r, i, true);
                            c++;
                        }
                    } else {
                        const h = c, m = c, g = new Map();
                        for (c = m; c <= f; c++) {
                            const e = o[c] = s ? pr(o[c]) : dr(o[c]);
                            null != e.key && g.set(e.key, c);
                        }
                        let b, x = 0;
                        const C = f - m + 1;
                        let y = false, S = 0;
                        const w = new Array(C);
                        for (c = 0; c < C; c++) {
                            w[c] = 0;
                        }
                        for (c = h; c <= p; c++) {
                            const n = e[c];
                            if (x >= C) {
                                G(n, r, i, true);
                                continue;
                            }
                            let u;
                            if (null != n.key) {
                                u = g.get(n.key);
                            } else {
                                for (b = m; b <= f; b++) {
                                    if (0 === w[b - m] && nr(n, o[b])) {
                                        u = b;
                                        break;
                                    }
                                }
                            }
                            void 0 === u ? G(n, r, i, true) : (w[u - m] = c + 1, u >= S ? S = u : y = true, v(n, o[u], t, null, r, i, l, a, s), x++);
                        }
                        const _ = y ? function (e) {
                            const o = e.slice(), t = [0];
                            let n, r, i, l, a;
                            const s = e.length;
                            for (n = 0; n < s; n++) {
                                const s = e[n];
                                if (0 !== s) {
                                    if (r = t[t.length - 1], e[r] < s) {
                                        o[n] = r;
                                        t.push(n);
                                        continue;
                                    }
                                    for (i = 0, l = t.length - 1; i < l;) {
                                        a = i + l >> 1;
                                        e[t[a]] < s ? i = a + 1 : l = a;
                                    }
                                    s < e[t[i]] && (i > 0 && (o[n] = t[i - 1]), t[i] = n);
                                }
                            }
                            i = t.length;
                            l = t[i - 1];
                            for (; i-- > 0;) {
                                t[i] = l;
                                l = o[l];
                            }
                            return t;
                        }(w) : d;
                        for (b = _.length - 1, c = C - 1; c >= 0; c--) {
                            const e = m + c, d = o[e], p = e + 1 < u ? o[e + 1].el : n;
                            0 === w[c] ? v(null, d, t, p, r, i, l, a, s) : y && (b < 0 || c !== _[b] ? V(d, t, p, 2) : b--);
                        }
                    }
                }
            }, V = (e, o, n, r, i = null) => {
                const {
                    el: l,
                    type: a,
                    transition: s,
                    children: c,
                    shapeFlag: u
                } = e;
                if (6 & u) {
                    return void V(e.component.subTree, o, n, r);
                }
                if (128 & u) {
                    return void e.suspense.move(o, n, r);
                }
                if (64 & u) {
                    return void a.move(e, o, n, oe);
                }
                if (a === Un) {
                    t(l, o, n);
                    for (let e = 0; e < c.length; e++) {
                        V(c[e], o, n, r);
                    }
                    return void t(e.anchor, o, n);
                }
                if (a === qn) {
                    return void S(e, o, n);
                }
                if (2 !== r && 1 & u && s) {
                    if (0 === r) {
                        s.beforeEnter(l);
                        t(l, o, n);
                        In(() => s.enter(l), i);
                    } else {
                        const {
                                leave: e,
                                delayLeave: r,
                                afterLeave: i
                            } = s, a = () => t(l, o, n), c = () => {
                                e(l, () => {
                                    a();
                                    i && i();
                                });
                            };
                        r ? r(l, a, c) : c();
                    }
                } else {
                    t(l, o, n);
                }
            }, G = (e, o, t, n = false, r = false) => {
                const {
                    type: i,
                    props: l,
                    ref: a,
                    children: s,
                    dynamicChildren: c,
                    shapeFlag: u,
                    patchFlag: d,
                    dirs: p
                } = e;
                if (null != a && An(a, null, t, e, true), 256 & u) {
                    return void o.ctx.deactivate(e);
                }
                const f = 1 & u && p, h = !Pt(e);
                let m;
                if (h && (m = l && l.onVnodeBeforeUnmount) && mr(m, o, e), 6 & u) {
                    J(e.component, t, n);
                } else {
                    if (128 & u) {
                        return void e.suspense.unmount(t, n);
                    }
                    f && Gt(e, null, o, 'beforeUnmount');
                    64 & u ? e.type.remove(e, o, t, r, oe, n) : c && (i !== Un || d > 0 && 64 & d) ? Z(c, o, t, false, true) : (i === Un && 384 & d || !r && 16 & u) && Z(s, o, t);
                    n && q(e);
                }
                (h && (m = l && l.onVnodeUnmounted) || f) && In(() => {
                    m && mr(m, o, e);
                    f && Gt(e, null, o, 'unmounted');
                }, t);
            }, q = e => {
                const {
                    type: o,
                    el: t,
                    anchor: r,
                    transition: i
                } = e;
                if (o === Un) {
                    return void Y(t, r);
                }
                if (o === qn) {
                    return void w(e);
                }
                const l = () => {
                    n(t);
                    i && !i.persisted && i.afterLeave && i.afterLeave();
                };
                if (1 & e.shapeFlag && i && !i.persisted) {
                    const {
                            leave: o,
                            delayLeave: n
                        } = i, r = () => o(t, l);
                    n ? n(e.el, l, r) : r();
                } else {
                    l();
                }
            }, Y = (e, o) => {
                let t;
                for (; e !== o;) {
                    t = h(e);
                    n(e);
                    e = t;
                }
                n(o);
            }, J = (e, o, t) => {
                const {
                    bum: n,
                    scope: r,
                    update: i,
                    subTree: l,
                    um: a
                } = e;
                n && W(n);
                r.stop();
                i && (i.active = false, G(l, e, o, t));
                a && In(a, o);
                In(() => {
                    e.isUnmounted = true;
                }, o);
                o && o.pendingBranch && !o.isUnmounted && e.asyncDep && !e.asyncResolved && e.suspenseId === o.pendingId && (o.deps--, 0 === o.deps && o.resolve());
            }, Z = (e, o, t, n = false, r = false, i = 0) => {
                for (let l = i; l < e.length; l++) {
                    G(e[l], o, t, n, r);
                }
            }, Q = e => 6 & e.shapeFlag ? Q(e.component.subTree) : 128 & e.shapeFlag ? e.suspense.next() : h(e.anchor || e.el), ee = (e, o, t) => {
                null == e ? o._vnode && G(o._vnode, null, null, true) : v(o._vnode || null, e, o, null, null, null, t);
                Go();
                qo();
                o._vnode = e;
            }, oe = {
                p: v,
                um: G,
                m: V,
                r: q,
                mt: $,
                mc: P,
                pc: j,
                pbc: R,
                n: Q,
                o: e
            };
        let te, ne;
        o && ([te, ne] = o(oe));
        return {
            render: ee,
            hydrate: te,
            createApp: On(ee, te)
        };
    }(e);
}
function Mn({
    effect: e,
    update: o
}, t) {
    e.allowRecurse = o.allowRecurse = t;
}
function Hn(e, o, t = false) {
    const n = e.children, r = o.children;
    if (y(n) && y(r)) {
        for (let i = 0; i < n.length; i++) {
            const e = n[i];
            let o = r[i];
            1 & o.shapeFlag && !o.dynamicChildren && ((o.patchFlag <= 0 || 32 === o.patchFlag) && (o = r[i] = pr(r[i]), o.el = e.el), t || Hn(e, o));
            o.type === Vn && (o.el = e.el);
        }
    }
}
const Fn = e => e && (e.disabled || '' === e.disabled), Bn = e => 'undefined' != typeof SVGElement && e instanceof SVGElement, Dn = (e, o) => {
        const t = e && e.to;
        if (z(t)) {
            if (o) {
                return o(t);
            }
            return null;
        }
        return t;
    };
function jn(e, o, t, {
    o: {insert: n},
    m: r
}, i = 2) {
    0 === i && n(e.targetAnchor, o, t);
    const {
            el: l,
            anchor: a,
            shapeFlag: s,
            children: c,
            props: u
        } = e, d = 2 === i;
    if (d && n(l, o, t), (!d || Fn(u)) && 16 & s) {
        for (let p = 0; p < c.length; p++) {
            r(c[p], o, t, 2);
        }
    }
    d && n(a, o, t);
}
const Nn = {
    __isTeleport: true,
    process(e, o, t, n, r, i, l, a, s, c) {
        const {
                mc: u,
                pc: d,
                pbc: p,
                o: {
                    insert: f,
                    querySelector: h,
                    createText: m,
                    createComment: g
                }
            } = c, v = Fn(o.props);
        let {
            shapeFlag: b,
            children: x,
            dynamicChildren: C
        } = o;
        if (null == e) {
            const e = o.el = m(''), c = o.anchor = m('');
            f(e, t, n);
            f(c, t, n);
            const d = o.target = Dn(o.props, h), p = o.targetAnchor = m('');
            d && (f(p, d), l = l || Bn(d));
            const g = (e, o) => {
                16 & b && u(x, e, o, r, i, l, a, s);
            };
            v ? g(t, c) : d && g(d, p);
        } else {
            o.el = e.el;
            const n = o.anchor = e.anchor, u = o.target = e.target, f = o.targetAnchor = e.targetAnchor, m = Fn(e.props), g = m ? t : u, b = m ? n : f;
            if (l = l || Bn(u), C ? (p(e.dynamicChildren, C, g, r, i, l, a), Hn(e, o, true)) : s || d(e, o, g, b, r, i, l, a, false), v) {
                m || jn(o, t, n, c, 1);
            } else {
                if ((o.props && o.props.to) !== (e.props && e.props.to)) {
                    const e = o.target = Dn(o.props, h);
                    e && jn(o, e, null, c, 0);
                } else {
                    m && jn(o, u, f, c, 1);
                }
            }
        }
        Wn(o);
    },
    remove(e, o, t, n, {
        um: r,
        o: {remove: i}
    }, l) {
        const {
            shapeFlag: a,
            children: s,
            anchor: c,
            targetAnchor: u,
            target: d,
            props: p
        } = e;
        if (d && i(u), (l || !Fn(p)) && (i(c), 16 & a)) {
            for (let f = 0; f < s.length; f++) {
                const e = s[f];
                r(e, o, t, true, !!e.dynamicChildren);
            }
        }
    },
    move: jn,
    hydrate: function (e, o, t, n, r, i, {
        o: {
            nextSibling: l,
            parentNode: a,
            querySelector: s
        }
    }, c) {
        const u = o.target = Dn(o.props, s);
        if (u) {
            const s = u._lpa || u.firstChild;
            if (16 & o.shapeFlag) {
                if (Fn(o.props)) {
                    o.anchor = c(l(e), o, a(e), t, n, r, i);
                    o.targetAnchor = s;
                } else {
                    o.anchor = l(e);
                    let a = s;
                    for (; a;) {
                        if (a = l(a), a && 8 === a.nodeType && 'teleport anchor' === a.data) {
                            o.targetAnchor = a;
                            u._lpa = o.targetAnchor && l(o.targetAnchor);
                            break;
                        }
                    }
                    c(s, o, u, t, n, r, i);
                }
            }
            Wn(o);
        }
        return o.anchor && l(o.anchor);
    }
};
function Wn(e) {
    const o = e.ctx;
    if (o && o.ut) {
        let t = e.children[0].el;
        for (; t !== e.targetAnchor;) {
            1 === t.nodeType && t.setAttribute('data-v-owner', o.uid);
            t = t.nextSibling;
        }
        o.ut();
    }
}
const Un = Symbol(void 0), Vn = Symbol(void 0), Gn = Symbol(void 0), qn = Symbol(void 0), Kn = [];
let Yn = null;
function Xn(e = false) {
    Kn.push(Yn = e ? null : []);
}
let Jn = 1;
function Zn(e) {
    Jn += e;
}
function Qn(e) {
    return e.dynamicChildren = Jn > 0 ? Yn || d : null, Kn.pop(), Yn = Kn[Kn.length - 1] || null, Jn > 0 && Yn && Yn.push(e), e;
}
function er(e, o, t, n, r, i) {
    return Qn(ar(e, o, t, n, r, i, true));
}
function or(e, o, t, n, r) {
    return Qn(sr(e, o, t, n, r, true));
}
function tr(e) {
    return !!e && true === e.__v_isVNode;
}
function nr(e, o) {
    return e.type === o.type && e.key === o.key;
}
const rr = '__vInternal', ir = ({key: e}) => null != e ? e : null, lr = ({
        ref: e,
        ref_key: o,
        ref_for: t
    }) => null != e ? z(e) || bo(e) || _(e) ? {
        i: et,
        r: e,
        k: o,
        f: !!t
    } : e : null;
function ar(e, o = null, t = null, n = 0, r = null, i = e === Un ? 0 : 1, l = false, a = false) {
    const s = {
        __v_isVNode: true,
        __v_skip: true,
        type: e,
        props: o,
        key: o && ir(o),
        ref: o && lr(o),
        scopeId: ot,
        slotScopeIds: null,
        children: t,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: i,
        patchFlag: n,
        dynamicProps: r,
        dynamicChildren: null,
        appContext: null,
        ctx: et
    };
    return a ? (fr(s, t), 128 & i && e.normalize(s)) : t && (s.shapeFlag |= z(t) ? 8 : 16), Jn > 0 && !l && Yn && (s.patchFlag > 0 || 6 & i) && 32 !== s.patchFlag && Yn.push(s), s;
}
const sr = function (e, t = null, n = null, r = 0, i = null, a = false) {
    e && e !== Yt || (e = Gn);
    if (tr(e)) {
        const o = cr(e, t, true);
        return n && fr(o, n), Jn > 0 && !a && Yn && (6 & o.shapeFlag ? Yn[Yn.indexOf(e)] = o : Yn.push(o)), o.patchFlag |= -2, o;
    }
    s = e;
    _(s) && '__vccOpts' in s && (e = e.__vccOpts);
    var s;
    if (t) {
        t = function (e) {
            return e ? uo(e) || rr in e ? v({}, e) : e : null;
        }(t);
        let {
            class: e,
            style: n
        } = t;
        e && !z(e) && (t.class = l(e));
        P(n) && (uo(n) && !y(n) && (n = v({}, n)), t.style = o(n));
    }
    const c = z(e) ? 1 : (e => e.__isSuspense)(e) ? 128 : (e => e.__isTeleport)(e) ? 64 : P(e) ? 4 : _(e) ? 2 : 0;
    return ar(e, t, n, r, i, c, a, true);
};
function cr(e, o, t = false) {
    const {
            props: n,
            ref: r,
            patchFlag: i,
            children: l
        } = e, a = o ? hr(n || {}, o) : n;
    return {
        __v_isVNode: true,
        __v_skip: true,
        type: e.type,
        props: a,
        key: a && ir(a),
        ref: o && o.ref ? t && r ? y(r) ? r.concat(lr(o)) : [
            r,
            lr(o)
        ] : lr(o) : r,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: l,
        target: e.target,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: o && e.type !== Un ? -1 === i ? 16 : 16 | i : i,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: e.transition,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && cr(e.ssContent),
        ssFallback: e.ssFallback && cr(e.ssFallback),
        el: e.el,
        anchor: e.anchor,
        ctx: e.ctx,
        ce: e.ce
    };
}
function ur(e = ' ', o = 0) {
    return sr(Vn, null, e, o);
}
function dr(e) {
    return null == e || 'boolean' == typeof e ? sr(Gn) : y(e) ? sr(Un, null, e.slice()) : 'object' == typeof e ? pr(e) : sr(Vn, null, String(e));
}
function pr(e) {
    return null === e.el && -1 !== e.patchFlag || e.memo ? e : cr(e);
}
function fr(e, o) {
    let t = 0;
    const {shapeFlag: n} = e;
    if (null == o) {
        o = null;
    } else {
        if (y(o)) {
            t = 16;
        } else {
            if ('object' == typeof o) {
                if (65 & n) {
                    const t = o.default;
                    return void (t && (t._c && (t._d = false), fr(e, t()), t._c && (t._d = true)));
                }
                {
                    t = 32;
                    const n = o._;
                    n || rr in o ? 3 === n && et && (1 === et.slots._ ? o._ = 1 : (o._ = 2, e.patchFlag |= 1024)) : o._ctx = et;
                }
            } else {
                _(o) ? (o = {
                    default: o,
                    _ctx: et
                }, t = 32) : (o = String(o), 64 & n ? (t = 16, o = [ur(o)]) : t = 8);
            }
        }
    }
    e.children = o;
    e.shapeFlag |= t;
}
function hr(...e) {
    const t = {
        style: o([
            t.style,
            r.style
        ])
    };
    for (let n = 0; n < e.length; n++) {
        const r = e[n];
        for (const e in r)
            if ('class' === e) {
                t.class !== r.class && (t.class = l([
                    t.class,
                    r.class
                ]));
            } else {
                if ('style' === e) {
                    ;
                } else {
                    if (m(e)) {
                        const o = t[e], n = r[e];
                        !n || o === n || y(o) && o.includes(n) || (t[e] = o ? [].concat(o, n) : n);
                    } else {
                        '' !== e && (t[e] = r[e]);
                    }
                }
            }
    }
    return t;
}
function mr(e, o, t, n = null) {
    Oo(e, o, 7, [
        t,
        n
    ]);
}
const gr = Rn();
let vr = 0;
let br = null;
const xr = () => br || et, Cr = e => {
        br = e;
        e.scope.on();
    }, yr = () => {
        br && br.scope.off();
        br = null;
    };
function Sr(e) {
    return 4 & e.vnode.shapeFlag;
}
let wr, _r = false;
function zr(e, o, t) {
    _(o) ? e.type.__ssrInlineRender ? e.ssrRender = o : e.render = o : P(o) && (e.setupState = zo(o));
    Tr(e, t);
}
function Tr(e, o, t) {
    const n = e.type;
    if (!e.render) {
        if (!o && wr && !n.render) {
            const o = n.template || sn(e).template;
            if (o) {
                const {
                        isCustomElement: t,
                        compilerOptions: r
                    } = e.appContext.config, {
                        delimiters: i,
                        compilerOptions: l
                    } = n, a = v(v({
                        isCustomElement: t,
                        delimiters: i
                    }, r), l);
                n.render = wr(o, a);
            }
        }
        e.render = n.render || p;
    }
    Cr(e);
    fe();
    rn(e);
    he();
    yr();
}
function Pr(e) {
    if (e.exposed) {
        return e.exposeProxy || (e.exposeProxy = new Proxy(zo(fo(e.exposed)), {
            get: (o, t) => t in o ? o[t] : t in en ? en[t](e) : void 0,
            has: (e, o) => o in e || o in en
        }));
    }
}
const Er = (e, o) => Ro(e, 0, _r);
function kr(e, o, t) {
    const n = arguments.length;
    return 2 === n ? P(o) && !y(o) ? tr(o) ? sr(e, null, [o]) : sr(e, o) : sr(e, null, o) : (n > 3 ? t = Array.prototype.slice.call(arguments, 2) : 3 === n && tr(t) && (t = [t]), sr(e, o, t));
}
const Rr = Symbol(''), Lr = () => ct(Rr), Or = '3.2.47', Ar = 'undefined' != typeof document ? document : null, Ir = Ar && Ar.createElement('template'), $r = {
        insert: (e, o, t) => {
            o.insertBefore(e, t || null);
        },
        remove: e => {
            const o = e.parentNode;
            o && o.removeChild(e);
        },
        createElement: (e, o, t, n) => {
            const r = o ? Ar.createElementNS('http://www.w3.org/2000/svg', e) : Ar.createElement(e, t ? { is: t } : void 0);
            return 'select' === e && n && null != n.multiple && r.setAttribute('multiple', n.multiple), r;
        },
        createText: e => Ar.createTextNode(e),
        createComment: e => Ar.createComment(e),
        setText: (e, o) => {
            e.nodeValue = o;
        },
        setElementText: (e, o) => {
            e.textContent = o;
        },
        parentNode: e => e.parentNode,
        nextSibling: e => e.nextSibling,
        querySelector: e => Ar.querySelector(e),
        setScopeId(e, o) {
            e.setAttribute(o, '');
        },
        insertStaticContent(e, o, t, n, r, i) {
            const l = t ? t.previousSibling : o.lastChild;
            if (r && (r === i || r.nextSibling)) {
                for (; o.insertBefore(r.cloneNode(true), t), r !== i && (r = r.nextSibling);) {
                    ;
                }
            } else {
                Ir.innerHTML = n ? `<svg>${ e }</svg>` : e;
                const r = Ir.content;
                if (n) {
                    const e = r.firstChild;
                    for (; e.firstChild;) {
                        r.appendChild(e.firstChild);
                    }
                    r.removeChild(e);
                }
                o.insertBefore(r, t);
            }
            return [
                l ? l.nextSibling : o.firstChild,
                t ? t.previousSibling : o.lastChild
            ];
        }
    };
const Mr = /\s*!important$/;
function Hr(e, o, t) {
    if (y(t)) {
        t.forEach(t => Hr(e, o, t));
    } else {
        if (null == t && (t = ''), o.startsWith('--')) {
            e.setProperty(o, t);
        } else {
            const n = function (e, o) {
                const t = Br[o];
                if (t) {
                    return t;
                }
                let n = H(o);
                if ('filter' !== n && n in e) {
                    return Br[o] = n;
                }
                n = D(n);
                for (let r = 0; r < Fr.length; r++) {
                    const t = Fr[r] + n;
                    if (t in e) {
                        return Br[o] = t;
                    }
                }
                return o;
            }(e, o);
            Mr.test(t) ? e.setProperty(B(n), t.replace(Mr, ''), 'important') : e[n] = t;
        }
    }
}
const Fr = [
        'Webkit',
        'Moz',
        'ms'
    ], Br = {};
const Dr = 'http://www.w3.org/1999/xlink';
function jr(e, o, t, n, r = null) {
    const i = e._vei || (e._vei = {}), l = i[o];
    if (n && l) {
        l.value = n;
    } else {
        const [t, a] = function (e) {
            let o;
            if (Nr.test(e)) {
                let t;
                for (o = {}; t = e.match(Nr);) {
                    e = e.slice(0, e.length - t[0].length);
                    o[t[0].toLowerCase()] = true;
                }
            }
            const t = ':' === e[2] ? e.slice(3) : B(e.slice(2));
            return [
                t,
                o
            ];
        }(o);
        if (n) {
            const l = i[o] = function (e, o) {
                const t = e => {
                    if (e._vts) {
                        if (e._vts <= t.attached) {
                            return;
                        }
                    } else {
                        e._vts = Date.now();
                    }
                    Oo(function (e, o) {
                        if (y(o)) {
                            const t = e.stopImmediatePropagation;
                            return e.stopImmediatePropagation = () => {
                                t.call(e);
                                e._stopped = true;
                            }, o.map(e => o => !o._stopped && e && e(o));
                        }
                        return o;
                    }(e, t.value), o, 5, [e]);
                };
                return t.value = e, t.attached = Vr(), t;
            }(n, r);
            !function (e, o, t, n) {
                e.addEventListener(o, t, n);
            }(e, t, l, a);
        } else {
            l && (!function (e, o, t, n) {
                e.removeEventListener(o, t, n);
            }(e, t, l, a), i[o] = void 0);
        }
    }
}
const Nr = /(?:Once|Passive|Capture)$/;
let Wr = 0;
const Ur = Promise.resolve(), Vr = () => Wr || (Ur.then(() => Wr = 0), Wr = Date.now());
const Gr = /^on[a-z]/;
const qr = 'transition', Kr = 'animation', Yr = (e, {slots: o}) => kr(xt, ei(e), o);
Yr.displayName = 'Transition';
const Xr = {
        name: String,
        type: String,
        css: {
            type: Boolean,
            default: true
        },
        duration: [
            String,
            Number,
            Object
        ],
        enterFromClass: String,
        enterActiveClass: String,
        enterToClass: String,
        appearFromClass: String,
        appearActiveClass: String,
        appearToClass: String,
        leaveFromClass: String,
        leaveActiveClass: String,
        leaveToClass: String
    }, Jr = Yr.props = v({}, xt.props, Xr), Zr = (e, o = []) => {
        y(e) ? e.forEach(e => e(...o)) : e && e(...o);
    }, Qr = e => !!e && (y(e) ? e.some(e => e.length > 1) : e.length > 1);
function ei(e) {
    const o = {};
    for (const v in e)
        v in Xr || (o[v] = e[v]);
    if (false === e.css) {
        return o;
    }
    const {
            name: t = 'v',
            type: n,
            duration: r,
            enterFromClass: i = `${ t }-enter-from`,
            enterActiveClass: l = `${ t }-enter-active`,
            enterToClass: a = `${ t }-enter-to`,
            appearFromClass: s = i,
            appearActiveClass: c = l,
            appearToClass: u = a,
            leaveFromClass: d = `${ t }-leave-from`,
            leaveActiveClass: p = `${ t }-leave-active`,
            leaveToClass: f = `${ t }-leave-to`
        } = e, h = function (e) {
            if (null == e) {
                return null;
            }
            if (P(e)) {
                return [
                    oi(e.enter),
                    oi(e.leave)
                ];
            }
            {
                const o = oi(e);
                return [
                    o,
                    o
                ];
            }
        }(r), m = h && h[0], g = h && h[1], {
            onBeforeEnter: b,
            onEnter: x,
            onEnterCancelled: C,
            onLeave: y,
            onLeaveCancelled: S,
            onBeforeAppear: w = b,
            onAppear: _ = x,
            onAppearCancelled: z = C
        } = o, T = (e, o, t) => {
            ni(e, o ? u : a);
            ni(e, o ? c : l);
            t && t();
        }, E = (e, o) => {
            e._isLeaving = false;
            ni(e, d);
            ni(e, f);
            ni(e, p);
            o && o();
        }, k = e => (o, t) => {
            const r = e ? _ : x, l = () => T(o, e, t);
            Zr(r, [
                o,
                l
            ]);
            ri(() => {
                ni(o, e ? s : i);
                ti(o, e ? u : a);
                Qr(r) || li(o, n, m, l);
            });
        };
    return v(o, {
        onBeforeEnter(e) {
            Zr(b, [e]);
            ti(e, i);
            ti(e, l);
        },
        onBeforeAppear(e) {
            Zr(w, [e]);
            ti(e, s);
            ti(e, c);
        },
        onEnter: k(false),
        onAppear: k(true),
        onLeave(e, o) {
            e._isLeaving = true;
            const t = () => E(e, o);
            ti(e, d);
            ui();
            ti(e, p);
            ri(() => {
                e._isLeaving && (ni(e, d), ti(e, f), Qr(y) || li(e, n, g, t));
            });
            Zr(y, [
                e,
                t
            ]);
        },
        onEnterCancelled(e) {
            T(e, false);
            Zr(C, [e]);
        },
        onAppearCancelled(e) {
            T(e, true);
            Zr(z, [e]);
        },
        onLeaveCancelled(e) {
            E(e);
            Zr(S, [e]);
        }
    });
}
function oi(e) {
    return G(e);
}
function ti(e, o) {
    o.split(/\s+/).forEach(o => o && e.classList.add(o));
    (e._vtc || (e._vtc = new Set())).add(o);
}
function ni(e, o) {
    o.split(/\s+/).forEach(o => o && e.classList.remove(o));
    const {_vtc: t} = e;
    t && (t.delete(o), t.size || (e._vtc = void 0));
}
function ri(e) {
    requestAnimationFrame(() => {
        requestAnimationFrame(e);
    });
}
let ii = 0;
function li(e, o, t, n) {
    const r = e._endId = ++ii, i = () => {
            r === e._endId && n();
        };
    if (t) {
        return setTimeout(i, t);
    }
    const {
        type: l,
        timeout: a,
        propCount: s
    } = ai(e, o);
    if (!l) {
        return n();
    }
    const c = l + 'end';
    let u = 0;
    const d = () => {
            e.removeEventListener(c, p);
            i();
        }, p = o => {
            o.target === e && ++u >= s && d();
        };
    setTimeout(() => {
        u < s && d();
    }, a + 1);
    e.addEventListener(c, p);
}
function ai(e, o) {
    const t = window.getComputedStyle(e), n = e => (t[e] || '').split(', '), r = n(`${ qr }Delay`), i = n(`${ qr }Duration`), l = si(r, i), a = n(`${ Kr }Delay`), s = n(`${ Kr }Duration`), c = si(a, s);
    let u = null, d = 0, p = 0;
    o === qr ? l > 0 && (u = qr, d = l, p = i.length) : o === Kr ? c > 0 && (u = Kr, d = c, p = s.length) : (d = Math.max(l, c), u = d > 0 ? l > c ? qr : Kr : null, p = u ? u === qr ? i.length : s.length : 0);
    return {
        type: u,
        timeout: d,
        propCount: p,
        hasTransform: u === qr && /\b(transform|all)(,|$)/.test(n(`${ qr }Property`).toString())
    };
}
function si(e, o) {
    for (; e.length < o.length;) {
        e = e.concat(e);
    }
    return Math.max(...o.map((o, t) => ci(o) + ci(e[t])));
}
function ci(e) {
    return 1000 * Number(e.slice(0, -1).replace(',', '.'));
}
function ui() {
    return document.body.offsetHeight;
}
const di = new WeakMap(), pi = new WeakMap(), fi = {
        name: 'TransitionGroup',
        props: v({}, Jr, {
            tag: String,
            moveClass: String
        }),
        setup(e, {slots: o}) {
            const t = xr(), n = vt();
            let r, i;
            return Ft(() => {
                if (!r.length) {
                    return;
                }
                const o = e.moveClass || `${ e.name || 'v' }-move`;
                if (!function (e, o, t) {
                        const n = e.cloneNode();
                        e._vtc && e._vtc.forEach(e => {
                            e.split(/\s+/).forEach(e => e && n.classList.remove(e));
                        });
                        t.split(/\s+/).forEach(e => e && n.classList.add(e));
                        n.style.display = 'none';
                        const r = 1 === o.nodeType ? o : o.parentNode;
                        r.appendChild(n);
                        const {hasTransform: i} = ai(n);
                        return r.removeChild(n), i;
                    }(r[0].el, t.vnode.el, o)) {
                    return;
                }
                r.forEach(mi);
                r.forEach(gi);
                const n = r.filter(vi);
                ui();
                n.forEach(e => {
                    const t = e.el, n = t.style;
                    ti(t, o);
                    n.transform = n.webkitTransform = n.transitionDuration = '';
                    const r = t._moveCb = e => {
                        e && e.target !== t || e && !/transform$/.test(e.propertyName) || (t.removeEventListener('transitionend', r), t._moveCb = null, ni(t, o));
                    };
                    t.addEventListener('transitionend', r);
                });
            }), () => {
                const l = po(e), a = ei(l);
                let s = l.tag || Un;
                r = i;
                i = o.default ? zt(o.default()) : [];
                for (let e = 0; e < i.length; e++) {
                    const o = i[e];
                    null != o.key && _t(o, yt(o, a, n, t));
                }
                if (r) {
                    for (let e = 0; e < r.length; e++) {
                        const o = r[e];
                        _t(o, yt(o, a, n, t));
                        di.set(o, o.el.getBoundingClientRect());
                    }
                }
                return sr(s, null, i);
            };
        }
    }, hi = fi;
function mi(e) {
    const o = e.el;
    o._moveCb && o._moveCb();
    o._enterCb && o._enterCb();
}
function gi(e) {
    pi.set(e, e.el.getBoundingClientRect());
}
function vi(e) {
    const o = di.get(e), t = pi.get(e), n = o.left - t.left, r = o.top - t.top;
    if (n || r) {
        const o = e.el.style;
        return o.transform = o.webkitTransform = `translate(${ n }px,${ r }px)`, o.transitionDuration = '0s', e;
    }
}
const bi = [
        'ctrl',
        'shift',
        'alt',
        'meta'
    ], xi = {
        stop: e => e.stopPropagation(),
        prevent: e => e.preventDefault(),
        self: e => e.target !== e.currentTarget,
        ctrl: e => !e.ctrlKey,
        shift: e => !e.shiftKey,
        alt: e => !e.altKey,
        meta: e => !e.metaKey,
        left: e => 'button' in e && 0 !== e.button,
        middle: e => 'button' in e && 1 !== e.button,
        right: e => 'button' in e && 2 !== e.button,
        exact: (e, o) => bi.some(t => e[`${ t }Key`] && !o.includes(t))
    }, Ci = {
        esc: 'escape',
        space: ' ',
        up: 'arrow-up',
        left: 'arrow-left',
        right: 'arrow-right',
        down: 'arrow-down',
        delete: 'backspace'
    }, yi = {
        beforeMount(e, {value: o}, {transition: t}) {
            e._vod = 'none' === e.style.display ? '' : e.style.display;
            t && o ? t.beforeEnter(e) : Si(e, o);
        },
        mounted(e, {value: o}, {transition: t}) {
            t && o && t.enter(e);
        },
        updated(e, {
            value: o,
            oldValue: t
        }, {transition: n}) {
            !o != !t && (n ? o ? (n.beforeEnter(e), Si(e, true), n.enter(e)) : n.leave(e, () => {
                Si(e, false);
            }) : Si(e, o));
        },
        beforeUnmount(e, {value: o}) {
            Si(e, o);
        }
    };
function Si(e, o) {
    e.style.display = o ? e._vod : 'none';
}
const wi = v({
    patchProp: (e, o, t, n, r = false, i, l, c, u) => {
        'class' === o ? function (e, o, t) {
            const n = e._vtc;
            n && (o = (o ? [
                o,
                ...n
            ] : [...n]).join(' '));
            null == o ? e.removeAttribute('class') : t ? e.setAttribute('class', o) : e.className = o;
        }(e, n, r) : 'style' === o ? function (e, o, t) {
            const n = e.style, r = z(t);
            if (t && !r) {
                if (o && !z(o)) {
                    for (const e in o)
                        null == t[e] && Hr(n, e, '');
                }
                for (const e in t)
                    Hr(n, e, t[e]);
            } else {
                const i = n.display;
                r ? o !== t && (n.cssText = t) : o && e.removeAttribute('style');
                '_vod' in e && (n.display = i);
            }
        }(e, t, n) : m(o) ? g(o) || jr(e, o, 0, n, l) : ('.' === o[0] ? (o = o.slice(1), 1) : '^' === o[0] ? (o = o.slice(1), 0) : function (e, o, t, n) {
            if (n) {
                return 'innerHTML' === o || 'textContent' === o || !!(o in e && Gr.test(o) && _(t));
            }
            if ('spellcheck' === o || 'draggable' === o || 'translate' === o) {
                return false;
            }
            if ('form' === o) {
                return false;
            }
            if ('list' === o && 'INPUT' === e.tagName) {
                return false;
            }
            if ('type' === o && 'TEXTAREA' === e.tagName) {
                return false;
            }
            if (Gr.test(o) && z(t)) {
                return false;
            }
            return o in e;
        }(e, o, n, r)) ? function (e, o, t, n, r, i, l) {
            if ('innerHTML' === o || 'textContent' === o) {
                return n && l(n, r, i), void (e[o] = null == t ? '' : t);
            }
            if ('value' === o && 'PROGRESS' !== e.tagName && !e.tagName.includes('-')) {
                e._value = t;
                const n = null == t ? '' : t;
                return e.value === n && 'OPTION' !== e.tagName || (e.value = n), void (null == t && e.removeAttribute(o));
            }
            let a = false;
            if ('' === t || null == t) {
                const n = typeof e[o];
                'boolean' === n ? t = s(t) : null == t && 'string' === n ? (t = '', a = true) : 'number' === n && (t = 0, a = true);
            }
            try {
                e[o] = t;
            } catch (c) {
            }
            a && e.removeAttribute(o);
        }(e, o, n, i, l, c, u) : ('true-value' === o ? e._trueValue = n : 'false-value' === o && (e._falseValue = n), function (e, o, t, n, r) {
            if (n && o.startsWith('xlink:')) {
                null == t ? e.removeAttributeNS(Dr, o.slice(6, o.length)) : e.setAttributeNS(Dr, o, t);
            } else {
                const n = a(o);
                null == t || n && !s(t) ? e.removeAttribute(o) : e.setAttribute(o, n ? '' : t);
            }
        }(e, o, n, r));
    }
}, $r);
let _i;
if ('undefined' != typeof window) {
    let e = function () {
        var e = document.body, o = document.getElementById('__svg__icons__dom__');
        o || ((o = document.createElementNS('http://www.w3.org/2000/svg', 'svg')).style.position = 'absolute', o.style.width = '0', o.style.height = '0', o.id = '__svg__icons__dom__', o.setAttribute('xmlns', 'http://www.w3.org/2000/svg'), o.setAttribute('xmlns:link', 'http://www.w3.org/1999/xlink'));
        o.innerHTML = '<symbol class="icon" viewBox="0 0 1024 1024"  id="icon-add"><path d="M0 0h1024v1024H0z" fill="transparent" /><path d="M810.667 490.667v42.666a21.333 21.333 0 0 1-21.334 21.334H554.667v234.666a21.333 21.333 0 0 1-21.334 21.334h-42.666a21.333 21.333 0 0 1-21.334-21.334V554.667H234.667a21.333 21.333 0 0 1-21.334-21.334v-42.666a21.333 21.333 0 0 1 21.334-21.334h234.666V234.667a21.333 21.333 0 0 1 21.334-21.334h42.666a21.333 21.333 0 0 1 21.334 21.334v234.666h234.666a21.333 21.333 0 0 1 21.334 21.334z" /></symbol><symbol  fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevrons-down" viewBox="0 0 24 24" id="icon-chevrons-down"><path d="m7 13 5 5 5-5M7 6l5 5 5-5" /></symbol><symbol  fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevrons-left" viewBox="0 0 24 24" id="icon-chevrons-left"><path d="m11 17-5-5 5-5M18 17l-5-5 5-5" /></symbol><symbol  fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevrons-right" viewBox="0 0 24 24" id="icon-chevrons-right"><path d="m13 17 5-5-5-5M6 17l5-5-5-5" /></symbol><symbol  fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevrons-up" viewBox="0 0 24 24" id="icon-chevrons-up"><path d="m17 11-5-5-5 5M17 18l-5-5-5 5" /></symbol><symbol viewBox="0 0 20 20"  id="icon-close"><g fill="none" fill-rule="evenodd"><path d="M0 0h20v20H0z" /><path stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M16 4 4 16M4 4l12 12" /></g></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-comment"><path d="M511.997 63.792c-247.551 0-448.205 174.77-448.205 390.369 0 215.603 200.65 390.373 448.205 390.373v115.674S784.75 769.56 832.363 727.164c79.07-70.344 127.845-166.768 127.845-273.008.001-215.595-200.655-390.364-448.211-390.364zm221.545 450.396c-33.015 0-59.782-25.887-59.779-57.838 0-31.892 26.764-57.778 59.779-57.778 33.016 0 59.744 25.886 59.744 57.778 0 31.95-26.727 57.838-59.744 57.838zm-223.296 0c-33.012 0-59.778-25.887-59.778-57.838 0-31.892 26.766-57.778 59.778-57.778 33.016 0 59.783 25.886 59.783 57.778 0 31.95-26.767 57.838-59.783 57.838zm-225.037 0c-32.957 0-59.72-25.887-59.72-57.838 0-31.892 26.762-57.778 59.72-57.778 33.01 0 59.773 25.886 59.773 57.778 0 31.95-26.762 57.838-59.773 57.838z" /></symbol><symbol viewBox="0 0 1024 1024"  id="icon-console"><path d="M853.333 810.667v-512H170.667v512h682.666m0-682.667a85.333 85.333 0 0 1 85.334 85.333v597.334A85.333 85.333 0 0 1 853.333 896H170.667a85.333 85.333 0 0 1-85.334-85.333V213.333A85.333 85.333 0 0 1 170.667 128h682.666M554.667 725.333V640H768v85.333H554.667m-145.92-170.666L237.653 384H358.4l140.8 140.8c16.64 16.64 16.64 43.947 0 60.587L359.253 725.333H238.507l170.24-170.666z" fill="currentColor" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-disconnect"><path d="M900.096 123.093a203.99 203.99 0 0 0-288.427 0L432 302.805a35.968 35.968 0 0 0 0 51.115 35.968 35.968 0 0 0 51.115 0l179.669-179.712a131.755 131.755 0 0 1 224.725 93.013c0 35.158-13.696 68.182-38.613 93.014L669.269 539.86a35.968 35.968 0 0 0 25.6 61.654 36.267 36.267 0 0 0 25.6-10.496l179.712-179.712a203.861 203.861 0 0 0-.085-288.214zm-523.52 157.099a36.01 36.01 0 0 0 36.139-36.096L412.587 99.2a36.01 36.01 0 0 0-36.096-36.096A36.01 36.01 0 0 0 340.395 99.2v144.981a35.413 35.413 0 0 0 10.666 25.43 36.139 36.139 0 0 0 25.558 10.581zm432.555 475.861a35.67 35.67 0 0 0-25.472-10.41 36.096 36.096 0 0 0-25.6 61.61l102.485 102.4a35.968 35.968 0 0 0 51.115 0 35.968 35.968 0 0 0 0-51.114L809.13 756.053zm114.517-145.92H778.624a35.413 35.413 0 0 0-25.387 10.71 36.01 36.01 0 0 0 25.387 61.61l144.939-.128a36.01 36.01 0 0 0 36.096-36.096 35.84 35.84 0 0 0-36.011-36.096zM647.723 742.06a36.01 36.01 0 0 0-36.096 36.096l.128 144.896a36.01 36.01 0 0 0 36.096 36.096 36.01 36.01 0 0 0 36.096-36.096V778.027a35.413 35.413 0 0 0-10.667-25.387 36.139 36.139 0 0 0-25.557-10.581zm-106.88-73.6L361.216 848.128a130.901 130.901 0 0 1-93.013 38.613 130.304 130.304 0 0 1-92.971-38.613 131.157 131.157 0 0 1-.085-185.984l179.712-179.712a35.968 35.968 0 0 0 0-51.072 35.968 35.968 0 0 0-51.115 0L124.032 610.859a202.581 202.581 0 0 0-59.776 144.213c0 54.357 21.205 105.685 59.776 144.085a203.221 203.221 0 0 0 144.128 59.691c52.181 0 104.49-19.925 144.085-59.733L592.043 719.53a35.968 35.968 0 0 0 0-51.072 36.267 36.267 0 0 0-51.2 0zM215.21 266.197c7.21 6.998 16.213 10.496 25.472 10.411a36.096 36.096 0 0 0 25.6-61.61L163.84 112.682a35.968 35.968 0 0 0-51.115 0 35.968 35.968 0 0 0 0 51.114l102.528 102.4zM100.693 412.203H245.76a35.413 35.413 0 0 0 25.387-10.667 36.01 36.01 0 0 0-25.387-61.653l-144.939.128a36.01 36.01 0 0 0-36.096 36.096 35.755 35.755 0 0 0 36.011 36.096z" fill="currentColor" /></symbol><symbol  viewBox="0 0 256 256" id="icon-electron"><g fill="none" fill-rule="evenodd"><circle fill="#2B2E3A" cx="128" cy="128" r="128" /><g fill="#9FEAF9" fill-rule="nonzero"><path d="M100.502 71.69c-26.005-4.736-46.567.221-54.762 14.415-6.115 10.592-4.367 24.635 4.24 39.646a2.667 2.667 0 1 0 4.626-2.653c-7.752-13.522-9.261-25.641-4.247-34.326 6.808-11.791 25.148-16.213 49.187-11.835a2.667 2.667 0 0 0 .956-5.247zm-36.999 72.307c10.515 11.555 24.176 22.394 39.756 31.388 37.723 21.78 77.883 27.601 97.675 14.106a2.667 2.667 0 1 0-3.005-4.406c-17.714 12.078-55.862 6.548-92.003-14.318-15.114-8.726-28.343-19.222-38.478-30.36a2.667 2.667 0 1 0-3.945 3.59z" /><path d="M194.62 140.753c17.028-20.116 22.973-40.348 14.795-54.512-6.017-10.423-18.738-15.926-35.645-16.146a2.667 2.667 0 0 0-.069 5.333c15.205.198 26.165 4.939 31.096 13.48 6.792 11.765 1.49 29.807-14.248 48.399a2.667 2.667 0 1 0 4.071 3.446zm-43.761-68.175c-15.396 3.299-31.784 9.749-47.522 18.835-38.942 22.483-64.345 55.636-60.817 79.675a2.667 2.667 0 1 0 5.277-.775c-3.133-21.344 20.947-52.769 58.207-74.281 15.267-8.815 31.135-15.06 45.972-18.239a2.667 2.667 0 1 0-1.117-5.215z" /><path d="M87.77 187.753c8.904 24.86 23.469 40.167 39.847 40.167 11.945 0 22.996-8.143 31.614-22.478a2.667 2.667 0 1 0-4.571-2.748c-7.745 12.883-17.258 19.892-27.043 19.892-13.605 0-26.596-13.652-34.825-36.63a2.667 2.667 0 1 0-5.021 1.797zm81.322-4.863c4.61-14.728 7.085-31.718 7.085-49.423 0-44.179-15.463-82.263-37.487-92.042a2.667 2.667 0 0 0-2.164 4.874c19.643 8.723 34.317 44.866 34.317 87.168 0 17.177-2.397 33.63-6.84 47.83a2.667 2.667 0 1 0 5.09 1.593zm50.224-2.612c0-7.049-5.714-12.763-12.763-12.763-7.049 0-12.763 5.714-12.763 12.763 0 7.049 5.714 12.763 12.763 12.763 7.049 0 12.763-5.714 12.763-12.763zm-5.333 0a7.43 7.43 0 1 1-14.86 0 7.43 7.43 0 0 1 14.86 0zM48.497 193.041c7.05 0 12.764-5.714 12.764-12.763 0-7.049-5.715-12.763-12.764-12.763-7.048 0-12.763 5.714-12.763 12.763 0 7.049 5.715 12.763 12.763 12.763zm0-5.333a7.43 7.43 0 1 1 0-14.86 7.43 7.43 0 0 1 0 14.86z" /><path d="M127.617 54.444c7.049 0 12.763-5.714 12.763-12.763 0-7.049-5.714-12.763-12.763-12.763-7.049 0-12.763 5.714-12.763 12.763 0 7.049 5.714 12.763 12.763 12.763zm0-5.333a7.43 7.43 0 1 1 0-14.86 7.43 7.43 0 0 1 0 14.86zm1.949 93.382c-4.985 1.077-9.896-2.091-10.975-7.076a9.236 9.236 0 0 1 7.076-10.976c4.985-1.077 9.896 2.091 10.976 7.076 1.077 4.985-2.091 9.897-7.077 10.976z" /></g></g></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-link"><path d="m369.067 594.773 225.706-225.706a21.333 21.333 0 0 1 30.294 0l29.866 29.866a21.333 21.333 0 0 1 0 30.294L429.227 654.933a21.333 21.333 0 0 1-30.294 0l-29.866-29.866a21.333 21.333 0 0 1 0-30.294zM896 326.827v14.506a170.667 170.667 0 0 1-50.347 121.174l-120.32 120.746a57.6 57.6 0 0 1-81.066 0L640 578.56a21.333 21.333 0 0 1 0-29.867L786.773 401.92a85.333 85.333 0 0 0 23.894-60.587v-14.506a85.333 85.333 0 0 0-25.174-60.587l-27.733-27.733a85.333 85.333 0 0 0-60.587-25.174h-14.506a85.333 85.333 0 0 0-60.587 25.174L475.307 384a21.333 21.333 0 0 1-29.867 0l-4.693-4.693a57.6 57.6 0 0 1 0-81.067l120.746-121.173A170.667 170.667 0 0 1 682.667 128h14.506a170.667 170.667 0 0 1 120.747 49.92l28.16 28.16A170.667 170.667 0 0 1 896 326.827zM548.693 640a21.333 21.333 0 0 1 29.867 0l4.693 4.693a57.6 57.6 0 0 1 0 81.067l-121.6 121.6A170.667 170.667 0 0 1 341.333 896h-14.506a170.667 170.667 0 0 1-120.747-49.92l-28.16-28.16A170.667 170.667 0 0 1 128 697.6v-14.933a170.667 170.667 0 0 1 50.347-121.174l120.32-120.746a57.6 57.6 0 0 1 81.066 0l4.694 4.693a21.333 21.333 0 0 1 0 29.867L238.507 622.08a85.333 85.333 0 0 0-25.174 60.587v14.506a85.333 85.333 0 0 0 25.174 60.587l27.733 27.733a85.333 85.333 0 0 0 60.587 25.174h14.506a85.333 85.333 0 0 0 61.014-25.174z" /></symbol><symbol viewBox="0 0 20 20"  id="icon-maximize"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="2"><rect x="3" y="6" width="11" height="11" rx="2" /><path d="M6 6V5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-1" /></g></symbol><symbol viewBox="0 0 20 20"   id="icon-minimize"><defs><path id="icon-minimize_a" d="M0 0h20v20H0z" /></defs><g fill="none" fill-rule="evenodd"><mask id="icon-minimize_b" fill="#fff"><use xlink:href="#icon-minimize_a" /></mask><rect fill="currentColor" mask="url(#icon-minimize_b)" x="4" y="9" width="12" height="2" rx="1" /></g></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-new"><path d="M963.072 446.336c0-211.744-200.96-384-448-384s-448 172.256-448 384c0 116.48 63.008 226.048 172.896 300.672 14.656 9.984 34.528 6.144 44.448-8.512 9.952-14.624 6.112-34.528-8.512-44.448-92.032-62.496-144.832-152.768-144.832-247.712 0-176.448 172.256-320 384-320s384 143.552 384 320-172.256 320-384 320c-1.984 0-3.68.768-5.568 1.12-15.104-2.688-30.464 5.216-35.776 20.192-6.144 17.376-46.368 46.656-94.144 73.792 17.472-58.208 9.088-70.688 3.52-78.976a36.034 36.034 0 0 0-29.92-15.936c-17.664 0-32 14.304-32 32 0 5.824 1.536 11.264 4.256 15.936-3.232 18.24-17.216 60.864-33.088 99.872-4.928 12.096-1.984 25.984 7.36 35.072a32.049 32.049 0 0 0 22.272 8.992c4.384 0 8.8-.896 12.992-2.752 36.48-16.256 147.68-69.12 187.616-125.664 243.552-3.488 440.48-174.08 440.48-383.648z" fill="#7bed9f" /><path d="M342.624 604.544a31.825 31.825 0 0 0 14.592 3.52c11.616 0 22.816-6.336 28.512-17.408l71.584-139.488 91.584 142.208a32.054 32.054 0 0 0 26.464 14.688h.448c10.56 0 20.48-5.216 26.432-13.984l128.8-188.864c9.984-14.624 6.176-34.528-8.416-44.48-14.624-9.952-34.528-6.208-44.48 8.416L576.512 518.144l-95.456-148.288c-6.176-9.6-17.152-14.752-28.48-14.656-11.424.576-21.696 7.2-26.912 17.344L328.768 561.44c-8.096 15.744-1.888 35.04 13.856 43.104z" fill="#f1f2f6" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-refresh"><path d="M512 128c167.104 0 308.8 106.944 361.536 256H768l128 192 128-192h-83.584C885.312 199.104 714.816 64 512 64c-178.56 0-332.096 104.768-403.904 256h71.872C246.272 205.312 369.92 128 512 128zM512 896c-167.104 0-308.8-106.944-361.536-256H256L128 448 0 640h83.584C138.688 824.896 309.184 960 512 960c178.56 0 332.096-104.768 403.904-256h-71.872C777.728 818.688 654.08 896 512 896z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-setting"><path d="M512 664.978c-84.498 0-152.987-68.49-152.987-152.978 0-84.498 68.489-152.987 152.987-152.987 84.489 0 152.988 68.489 152.988 152.987 0 84.489-68.5 152.978-152.988 152.978m371.54-267.659-72.714-9.099 44.987-57.851c29.868-29.858 29.868-78.267 0-108.134l-54.057-54.048c-29.858-29.858-78.267-29.858-108.125 0l-57.86 44.997-9.09-72.724c0-42.225-34.226-76.46-76.46-76.46h-76.442c-42.225 0-76.46 34.235-76.46 76.46l-9.09 72.724-57.85-44.997c-29.859-29.858-78.268-29.868-108.125 0l-54.067 54.048c-29.858 29.857-29.848 78.276 0 108.134l45.006 57.851-72.733 9.1c-42.225 0-76.46 34.225-76.46 76.46v76.44c0 42.226 34.235 76.46 76.46 76.46l72.733 9.09-45.006 57.852c-29.848 29.858-29.858 78.267 0 108.134l54.067 54.048c29.848 29.857 78.266 29.857 108.124 0l57.852-44.988 9.09 72.714c0 42.225 34.225 76.46 76.46 76.46h76.44c42.226 0 76.46-34.235 76.46-76.46l9.09-72.723 57.852 44.987c29.858 29.858 78.267 29.867 108.124.01l54.067-54.058c29.848-29.848 29.848-78.276 0-108.134l-44.997-57.842 72.724-9.09c42.225 0 76.46-34.225 76.46-76.46v-76.44c0-42.226-34.235-76.46-76.46-76.46" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-warn"><path d="m1002.923 767.598-361.92-664.796C613.4 57.2 565.4 29.6 512 29.6s-101.4 27.6-129.002 73.202L21.079 767.598C-6.517 815.002-7.12 871.402 19.883 918.8c26.998 47.398 75.596 75.6 130.198 75.6h723.84c54.602 0 103.202-28.202 130.198-75.6 27.002-47.398 26.4-103.798-1.196-151.202z" fill="#495A79" /><path d="M1004.119 918.8c-26.998 47.398-75.596 75.6-130.198 75.6H512V29.6c53.4 0 101.4 27.602 129.002 73.202l361.92 664.798c27.596 47.402 28.198 103.802 1.196 151.2z" fill="#42516D" /><path d="M951.323 798.2 589.399 133.398C573.203 105.8 543.803 89.6 512 89.6s-61.202 16.202-77.398 43.798L72.679 798.2c-16.798 28.202-16.798 62.398-.596 90.6 16.198 28.798 45.596 45.6 78 45.6h723.84c32.402 0 61.802-16.802 78-45.6 16.198-28.202 16.198-62.398-.6-90.6z" fill="#FFDE33" /><path d="M951.92 888.8c-16.197 28.798-45.595 45.6-78 45.6H512V89.6c31.803 0 61.203 16.202 77.399 43.798L951.323 798.2c16.798 28.202 16.798 62.398.598 90.6z" fill="#FFBC33" /><path d="M512 874.4c-33.075 0-60-26.924-60-60s26.925-60 60-60 60 26.924 60 60-26.923 60-60 60zm60-240c0 33.076-26.923 60-60 60s-60-26.924-60-60v-300c0-33.076 26.925-60 60-60s60 26.924 60 60v300z" fill="#495A79" /><path d="M572 814.4c0-33.076-26.923-60-60-60v120c33.077 0 60-26.924 60-60zm0-180v-300c0-33.076-26.923-60-60-60v420c33.077 0 60-26.924 60-60z" fill="#42516D" /></symbol>';
        e.insertBefore(o, e.lastChild);
    };
    'loading' === document.readyState ? document.addEventListener('DOMContentLoaded', e) : e();
}
function zi(e) {
    return e.composedPath()[0] || null;
}
function Ti(e, o) {
    const t = e.trim().split(/\s+/g), n = { top: t[0] };
    switch (t.length) {
    case 1:
        n.right = t[0], n.bottom = t[0], n.left = t[0];
        break;
    case 2:
        n.right = t[1], n.left = t[1], n.bottom = t[0];
        break;
    case 3:
        n.right = t[1], n.bottom = t[2], n.left = t[1];
        break;
    case 4:
        n.right = t[1], n.bottom = t[2], n.left = t[3];
        break;
    default:
        throw new Error('[seemly/getMargin]:' + e + ' is not a valid value.');
    }
    return void 0 === o ? n : n[o];
}
const Pi = {
        black: '#000',
        silver: '#C0C0C0',
        gray: '#808080',
        white: '#FFF',
        maroon: '#800000',
        red: '#F00',
        purple: '#800080',
        fuchsia: '#F0F',
        green: '#008000',
        lime: '#0F0',
        olive: '#808000',
        yellow: '#FF0',
        navy: '#000080',
        blue: '#00F',
        teal: '#008080',
        aqua: '#0FF',
        transparent: '#0000'
    }, Ei = '^\\s*', ki = '\\s*$', Ri = '\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))%\\s*', Li = '\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*', Oi = '([0-9A-Fa-f])', Ai = '([0-9A-Fa-f]{2})', Ii = new RegExp(`${ Ei }hsl\\s*\\(${ Li },${ Ri },${ Ri }\\)${ ki }`), $i = new RegExp(`${ Ei }hsv\\s*\\(${ Li },${ Ri },${ Ri }\\)${ ki }`), Mi = new RegExp(`${ Ei }hsla\\s*\\(${ Li },${ Ri },${ Ri },${ Li }\\)${ ki }`), Hi = new RegExp(`${ Ei }hsva\\s*\\(${ Li },${ Ri },${ Ri },${ Li }\\)${ ki }`), Fi = new RegExp(`${ Ei }rgb\\s*\\(${ Li },${ Li },${ Li }\\)${ ki }`), Bi = new RegExp(`${ Ei }rgba\\s*\\(${ Li },${ Li },${ Li },${ Li }\\)${ ki }`), Di = new RegExp(`${ Ei }#${ Oi }${ Oi }${ Oi }${ ki }`), ji = new RegExp(`${ Ei }#${ Ai }${ Ai }${ Ai }${ ki }`), Ni = new RegExp(`${ Ei }#${ Oi }${ Oi }${ Oi }${ Oi }${ ki }`), Wi = new RegExp(`${ Ei }#${ Ai }${ Ai }${ Ai }${ Ai }${ ki }`);
function Ui(e) {
    return parseInt(e, 16);
}
function Vi(e) {
    try {
        let o;
        if (o = ji.exec(e)) {
            return [
                Ui(o[1]),
                Ui(o[2]),
                Ui(o[3]),
                1
            ];
        }
        if (o = Fi.exec(e)) {
            return [
                Qi(o[1]),
                Qi(o[5]),
                Qi(o[9]),
                1
            ];
        }
        if (o = Bi.exec(e)) {
            return [
                Qi(o[1]),
                Qi(o[5]),
                Qi(o[9]),
                Ji(o[13])
            ];
        }
        if (o = Di.exec(e)) {
            return [
                Ui(o[1] + o[1]),
                Ui(o[2] + o[2]),
                Ui(o[3] + o[3]),
                1
            ];
        }
        if (o = Wi.exec(e)) {
            return [
                Ui(o[1]),
                Ui(o[2]),
                Ui(o[3]),
                Ji(Ui(o[4]) / 255)
            ];
        }
        if (o = Ni.exec(e)) {
            return [
                Ui(o[1] + o[1]),
                Ui(o[2] + o[2]),
                Ui(o[3] + o[3]),
                Ji(Ui(o[4] + o[4]) / 255)
            ];
        }
        if (e in Pi) {
            return Vi(Pi[e]);
        }
        throw new Error(`[seemly/rgba]: Invalid color value ${ e }.`);
    } catch (o) {
        throw o;
    }
}
function Gi(e, o, t, n) {
    return `rgba(${ Qi(e) }, ${ Qi(o) }, ${ Qi(t) }, ${ r = n, r > 1 ? 1 : r < 0 ? 0 : r })`;
    var r;
}
function qi(e, o, t, n, r) {
    return Qi((e * o * (1 - n) + t * n) / r);
}
function Ki(e, o) {
    Array.isArray(e) || (e = Vi(e));
    Array.isArray(o) || (o = Vi(o));
    const t = e[3], n = o[3], r = Ji(t + n - t * n);
    return Gi(qi(e[0], t, o[0], n, r), qi(e[1], t, o[1], n, r), qi(e[2], t, o[2], n, r), r);
}
function Yi(e, o) {
    const [t, n, r, i = 1] = Array.isArray(e) ? e : Vi(e);
    return o.alpha ? Gi(t, n, r, o.alpha) : Gi(t, n, r, i);
}
function Xi(e, o) {
    const [t, n, r, i = 1] = Array.isArray(e) ? e : Vi(e), {
            lightness: l = 1,
            alpha: a = 1
        } = o;
    return ol([
        t * l,
        n * l,
        r * l,
        i * a
    ]);
}
function Ji(e) {
    const o = Math.round(100 * Number(e)) / 100;
    return o > 1 ? 1 : o < 0 ? 0 : o;
}
function Zi(e) {
    const o = Math.round(Number(e));
    return o >= 360 || o < 0 ? 0 : o;
}
function Qi(e) {
    const o = Math.round(Number(e));
    return o > 255 ? 255 : o < 0 ? 0 : o;
}
function el(e) {
    const o = Math.round(Number(e));
    return o > 100 ? 100 : o < 0 ? 0 : o;
}
function ol(e) {
    const [o, t, n] = e;
    return 3 in e ? `rgba(${ Qi(o) }, ${ Qi(t) }, ${ Qi(n) }, ${ Ji(e[3]) })` : `rgba(${ Qi(o) }, ${ Qi(t) }, ${ Qi(n) }, 1)`;
}
function tl(e = 8) {
    return Math.random().toString(16).slice(2, 2 + e);
}
function nl(e, o = [], t) {
    const n = { o: e[o] };
    return o.forEach(o => {
        ;
    }), Object.assign(n, t);
}
function rl(e, o = [], t) {
    const n = {};
    return Object.getOwnPropertyNames(e).forEach(t => {
        o.includes(t) || (n[t] = e[t]);
    }), Object.assign(n, t);
}
function il(e, o = true, t = []) {
    return e.forEach(e => {
        if (null !== e) {
            if ('object' == typeof e) {
                if (Array.isArray(e)) {
                    il(e, o, t);
                } else {
                    if (e.type === Un) {
                        if (null === e.children) {
                            return;
                        }
                        Array.isArray(e.children) && il(e.children, o, t);
                    } else {
                        e.type !== Gn && t.push(e);
                    }
                }
            } else {
                'string' != typeof e && 'number' != typeof e || t.push(ur(String(e)));
            }
        }
    }), t;
}
function ll(e, ...o) {
    if (!Array.isArray(e)) {
        return e(...o);
    }
    e.forEach(e => ll(e, ...o));
}
function al(e) {
    return Object.keys(e);
}
const sl = (e, ...o) => 'function' == typeof e ? e(...o) : 'string' == typeof e ? ur(e) : 'number' == typeof e ? ur(String(e)) : null;
function cl(e, o) {
}
function ul(e, o) {
    throw new Error(`[naive/${ e }]: ${ o }`);
}
function dl(e, o = 'default', t = undefined) {
    const n = e[o];
    if (!n) {
        return null;
    }
    const r = il(n(t));
    return 1 === r.length ? r[0] : null;
}
function pl(e) {
    return e;
}
function fl(e) {
    return e.some(e => !tr(e) || e.type !== Gn && !(e.type === Un && !fl(e.children))) ? e : null;
}
function hl(e, o) {
    return e && fl(e()) || o();
}
function ml(e, o) {
    return o(e && fl(e()) || null);
}
function gl(e) {
    return !(e && fl(e()));
}
const vl = Tt({
    render() {
        var e, o;
        return null === (o = (e = this.$slots).default) || void 0 === o ? void 0 : o.call(e);
    }
});
function bl(e) {
    return e.replace(/#|\(|\)|,|\s/g, '_');
}
const xl = /\s*,(?![^(]*\))\s*/g, Cl = /\s+/g;
function yl(e) {
    let o = [''];
    return e.forEach(e => {
        (e = e && e.trim()) && (o = e.includes('&') ? function (e, o) {
            const t = [];
            return o.split(xl).forEach(o => {
                let n = function (e) {
                    let o = 0;
                    for (let t = 0; t < e.length; ++t) {
                        '&' === e[t] && ++o;
                    }
                    return o;
                }(o);
                if (!n) {
                    return void e.forEach(e => {
                        t.push((e && e + ' ') + o);
                    });
                }
                if (1 === n) {
                    return void e.forEach(e => {
                        t.push(o.replace('&', e));
                    });
                }
                let r = [o];
                for (; n--;) {
                    const o = [];
                    r.forEach(t => {
                        e.forEach(e => {
                            o.push(t.replace('&', e));
                        });
                    });
                    r = o;
                }
                r.forEach(e => t.push(e));
            }), t;
        }(o, e) : function (e, o) {
            const t = [];
            return o.split(xl).forEach(o => {
                e.forEach(e => {
                    t.push((e && e + ' ') + o);
                });
            }), t;
        }(o, e));
    }), o.join(', ').replace(Cl, ' ');
}
function Sl(e) {
    if (!e) {
        return;
    }
    const o = e.parentElement;
    o && o.removeChild(e);
}
function wl(e) {
    return document.querySelector(`style[cssr-id="${ e }"]`);
}
function _l(e) {
    return !!e && /^\s*@(s|m)/.test(e);
}
const zl = /[A-Z]/g;
function Tl(e) {
    return e.replace(zl, e => '-' + e.toLowerCase());
}
function Pl(e, o, t, n) {
    if (!o) {
        return '';
    }
    const r = function (e, o, t) {
        return 'function' == typeof e ? e({
            context: o.context,
            props: t
        }) : e;
    }(o, t, n);
    if (!r) {
        return '';
    }
    if ('string' == typeof r) {
        return `${ e } {\n${ r }\n}`;
    }
    const i = Object.keys(r);
    if (0 === i.length) {
        return t.config.keepEmptyBlock ? e + ' {\n}' : '';
    }
    const l = e ? [e + ' {'] : [];
    return i.forEach(e => {
        const o = r[e];
        'raw' !== e ? (e = Tl(e), null != o && l.push(`  ${ e }${ function (e, o = '  ') {
            return 'object' == typeof e && null !== e ? ' {\n' + Object.entries(e).map(e => o + `  ${ Tl(e[0]) }: ${ e[1] };`).join('\n') + '\n' + o + '}' : `: ${ e };`;
        }(o) }`)) : l.push('\n' + o + '\n');
    }), e && l.push('}'), l.join('\n');
}
function El(e, o, t) {
    e && e.forEach(e => {
        if (Array.isArray(e)) {
            El(e, o, t);
        } else {
            if ('function' == typeof e) {
                const n = e(o);
                Array.isArray(n) ? El(n, o, t) : n && t(n);
            } else {
                e && t(e);
            }
        }
    });
}
function kl(e, o, t, n, r, i) {
    const l = e.$;
    let a = '';
    if (l && 'string' != typeof l) {
        if ('function' == typeof l) {
            const e = l({
                context: n.context,
                props: r
            });
            _l(e) ? a = e : o.push(e);
        } else {
            if (l.before && l.before(n.context), l.$ && 'string' != typeof l.$) {
                if (l.$) {
                    const e = l.$({
                        context: n.context,
                        props: r
                    });
                    _l(e) ? a = e : o.push(e);
                }
            } else {
                _l(l.$) ? a = l.$ : o.push(l.$);
            }
        }
    } else {
        _l(l) ? a = l : o.push(l);
    }
    const s = yl(o), c = Pl(s, e.props, n, r);
    a ? (t.push(`${ a } {`), i && c && i.insertRule(`${ a } {\n${ c }\n}\n`)) : (i && c && i.insertRule(c), !i && c.length && t.push(c));
    e.children && El(e.children, {
        context: n.context,
        props: r
    }, e => {
        if ('string' == typeof e) {
            const o = Pl(s, { raw: e }, n, r);
            i ? i.insertRule(o) : t.push(o);
        } else {
            kl(e, o, t, n, r, i);
        }
    });
    o.pop();
    a && t.push('}');
    l && l.after && l.after(n.context);
}
function Rl(e, o, t, n = false) {
    const r = [];
    return kl(e, [], r, o, t, n ? e.instance.__styleSheet : void 0), n ? '' : r.join('\n\n');
}
function Ll(e) {
    for (var o, t = 0, n = 0, r = e.length; r >= 4; ++n, r -= 4) {
        o = 1540483477 * (65535 & (o = 255 & e.charCodeAt(n) | (255 & e.charCodeAt(++n)) << 8 | (255 & e.charCodeAt(++n)) << 16 | (255 & e.charCodeAt(++n)) << 24)) + (59797 * (o >>> 16) << 16);
        t = 1540483477 * (65535 & (o ^= o >>> 24)) + (59797 * (o >>> 16) << 16) ^ 1540483477 * (65535 & t) + (59797 * (t >>> 16) << 16);
    }
    switch (r) {
    case 3:
        t ^= (255 & e.charCodeAt(n + 2)) << 16;
    case 2:
        t ^= (255 & e.charCodeAt(n + 1)) << 8;
    case 1:
        t = 1540483477 * (65535 & (t ^= 255 & e.charCodeAt(n))) + (59797 * (t >>> 16) << 16);
    }
    return (((t = 1540483477 * (65535 & (t ^= t >>> 13)) + (59797 * (t >>> 16) << 16)) ^ t >>> 15) >>> 0).toString(36);
}
function Ol(e, o) {
    e.push(o);
}
function Al(e, o, t, n, r, i, l, a, s) {
    if (i && !s) {
        if (void 0 === t) {
            return;
        }
        const r = window.__cssrContext;
        return void (r[t] || (r[t] = true, Rl(o, e, n, i)));
    }
    let c;
    if (void 0 === t && (c = o.render(n), t = Ll(c)), s) {
        return void s.adapter(t, null != c ? c : o.render(n));
    }
    const u = wl(t);
    if (null !== u && !l) {
        return u;
    }
    const d = null != u ? u : function (e) {
        const o = document.createElement('style');
        return o.setAttribute('cssr-id', e), o;
    }(t);
    if (void 0 === c && (c = o.render(n)), d.textContent = c, null !== u) {
        return u;
    }
    if (a) {
        const e = document.head.querySelector(`meta[name="${ a }"]`);
        if (e) {
            return document.head.insertBefore(d, e), Ol(o.els, d), d;
        }
    }
    return r ? document.head.insertBefore(d, document.head.querySelector('style, link')) : document.head.appendChild(d), Ol(o.els, d), d;
}
function Il(e) {
    return Rl(this, this.instance, e);
}
function $l(e = {}) {
    const {
        id: o,
        ssr: t,
        props: n,
        head: r = false,
        silent: i = false,
        force: l = false,
        anchorMetaName: a
    } = e;
    return Al(this.instance, this, o, n, r, i, l, a, t);
}
function Ml(e = {}) {
    const {id: o} = e;
    !function (e, o, t) {
        const {els: n} = o;
        if (void 0 === t) {
            n.forEach(Sl);
            o.els = [];
        } else {
            const e = wl(t);
            e && n.includes(e) && (Sl(e), o.els = n.filter(o => o !== e));
        }
    }(this.instance, this, o);
}
'undefined' != typeof window && (window.__cssrContext = {});
const Hl = function (e, o, t, n) {
    return {
        instance: e,
        $: o,
        props: t,
        children: n,
        els: [],
        render: Il,
        mount: $l,
        unmount: Ml
    };
};
function Fl(e = {}) {
    let o = null;
    const t = {
        c: (...e) => function (e, o, t, n) {
            return Array.isArray(o) ? Hl(e, { $: null }, null, o) : Array.isArray(t) ? Hl(e, o, null, t) : Array.isArray(n) ? Hl(e, o, t, n) : Hl(e, o, t, null);
        }(t, ...e),
        use: (e, ...o) => e.install(t, ...o),
        find: wl,
        context: {},
        config: e,
        get __styleSheet() {
            if (!o) {
                const e = document.createElement('style');
                return document.head.appendChild(e), o = document.styleSheets[document.styleSheets.length - 1], o;
            }
            return o;
        }
    };
    return t;
}
function Bl(e, o) {
    return e + ('default' === o ? '' : o.replace(/^[a-z]/, e => e.toUpperCase()));
}
Bl('abc', 'def');
const Dl = '.n-', jl = Fl(), Nl = function (e) {
        let o, t = '.', n = '__', r = '--';
        if (e) {
            let o = e.blockPrefix;
            o && (t = o);
            o = e.elementPrefix;
            o && (n = o);
            o = e.modifierPrefix;
            o && (r = o);
        }
        const i = {
            install(e) {
                o = e.c;
                const t = e.context;
                t.bem = {};
                t.bem.b = null;
                t.bem.els = null;
            }
        };
        return Object.assign(i, {
            cB: (...e) => o(function (e) {
                let o, n;
                return {
                    before(e) {
                        o = e.bem.b;
                        n = e.bem.els;
                        e.bem.els = null;
                    },
                    after(e) {
                        e.bem.b = o;
                        e.bem.els = n;
                    },
                    $: ({
                        context: o,
                        props: n
                    }) => (e = 'string' == typeof e ? e : e({
                        context: o,
                        props: n
                    }), o.bem.b = e, `${ (null == n ? void 0 : n.bPrefix) || t }${ o.bem.b }`)
                };
            }(e[0]), e[1], e[2]),
            cE: (...e) => o(function (e) {
                let o;
                return {
                    before(e) {
                        o = e.bem.els;
                    },
                    after(e) {
                        e.bem.els = o;
                    },
                    $: ({
                        context: o,
                        props: r
                    }) => (e = 'string' == typeof e ? e : e({
                        context: o,
                        props: r
                    }), o.bem.els = e.split(',').map(e => e.trim()), o.bem.els.map(e => `${ (null == r ? void 0 : r.bPrefix) || t }${ o.bem.b }${ n }${ e }`).join(', '))
                };
            }(e[0]), e[1], e[2]),
            cM: (...e) => {
                return o((i = e[0], {
                    $({
                        context: e,
                        props: o
                    }) {
                        const l = (i = 'string' == typeof i ? i : i({
                            context: e,
                            props: o
                        })).split(',').map(e => e.trim());
                        function a(i) {
                            return l.map(l => `&${ (null == o ? void 0 : o.bPrefix) || t }${ e.bem.b }${ void 0 !== i ? `${ n }${ i }` : '' }${ r }${ l }`).join(', ');
                        }
                        const s = e.bem.els;
                        return null !== s ? a(s[0]) : a();
                    }
                }), e[1], e[2]);
                var i;
            },
            cNotM: (...e) => {
                return o((i = e[0], {
                    $({
                        context: e,
                        props: o
                    }) {
                        i = 'string' == typeof i ? i : i({
                            context: e,
                            props: o
                        });
                        const l = e.bem.els;
                        return `&:not(${ (null == o ? void 0 : o.bPrefix) || t }${ e.bem.b }${ null !== l && l.length > 0 ? `${ n }${ l[0] }` : '' }${ r }${ i })`;
                    }
                }), e[1], e[2]);
                var i;
            }
        }), i;
    }({
        blockPrefix: Dl,
        elementPrefix: '__',
        modifierPrefix: '--'
    });
jl.use(Nl);
const {
        c: Wl,
        find: Ul
    } = jl, {
        cB: Vl,
        cE: Gl,
        cM: ql,
        cNotM: Kl
    } = Nl;
function Yl(e) {
    return Wl(({
        props: {bPrefix: e}
    }) => `${ e || Dl }modal, ${ e || Dl }drawer`, [e]);
}
function Xl(e) {
    return Wl(({
        props: {bPrefix: e}
    }) => `${ e || Dl }popover`, [e]);
}
function Jl(e) {
    return Wl(({
        props: {bPrefix: e}
    }) => `&${ e || Dl }modal`, e);
}
const Zl = 'undefined' != typeof document && 'undefined' != typeof window, Ql = new WeakSet();
function ea(e) {
    const o = xo(!!e.value);
    if (o.value) {
        return io(o);
    }
    const t = pt(e, e => {
        e && (o.value = true, t());
    });
    return io(o);
}
function oa(e) {
    const o = Er(e), t = xo(o.value);
    return pt(o, e => {
        t.value = e;
    }), 'function' == typeof e ? t : {
        __v_isRef: true,
        get value() {
            return t.value;
        },
        set value(o) {
            e.set(o);
        }
    };
}
function ta() {
    return null !== xr();
}
const na = 'undefined' != typeof window;
function ra(e) {
    return e.composedPath()[0];
}
const ia = {
    mousemoveoutside: new WeakMap(),
    clickoutside: new WeakMap()
};
function la(e, o, t) {
    const n = ia[e];
    let r = n.get(o);
    void 0 === r && n.set(o, r = new WeakMap());
    let i = r.get(t);
    return void 0 === i && r.set(t, i = function (e, o, t) {
        if ('mousemoveoutside' === e) {
            const e = e => {
                o.contains(ra(e)) || t(e);
            };
            return {
                mousemove: e,
                touchstart: e
            };
        }
        if ('clickoutside' === e) {
            let e = false;
            const n = t => {
                    e = !o.contains(ra(t));
                }, r = n => {
                    e && (o.contains(ra(n)) || t(n));
                };
            return {
                mousedown: n,
                mouseup: r,
                touchstart: n,
                touchend: r
            };
        }
        return {};
    }(e, o, t)), i;
}
const {
        on: aa,
        off: sa
    } = function () {
        if ('undefined' == typeof window) {
            return {
                on: () => {
                },
                off: () => {
                }
            };
        }
        const e = new WeakMap(), o = new WeakMap();
        function t() {
            e.set(this, true);
        }
        function n() {
            e.set(this, true);
            o.set(this, true);
        }
        function r(e, o, t) {
            const n = e[o];
            return e[o] = function () {
                return t.apply(e, arguments), n.apply(e, arguments);
            }, e;
        }
        function i(e, o) {
            e[o] = Event.prototype[o];
        }
        const l = new WeakMap(), a = Object.getOwnPropertyDescriptor(Event.prototype, 'currentTarget');
        function s() {
            var e;
            return null !== (e = l.get(this)) && void 0 !== e ? e : null;
        }
        function c(e, o) {
            void 0 !== a && Object.defineProperty(e, 'currentTarget', {
                configurable: true,
                enumerable: true,
                get: null != o ? o : a.get
            });
        }
        const u = {
                bubble: {},
                capture: {}
            }, d = {}, p = function () {
                const a = function (a) {
                    const {
                            type: d,
                            eventPhase: p,
                            bubbles: f
                        } = a, h = ra(a);
                    if (2 === p) {
                        return;
                    }
                    const m = 1 === p ? 'capture' : 'bubble';
                    let g = h;
                    const v = [];
                    for (; null === g && (g = window), v.push(g), g !== window;) {
                        g = g.parentNode || null;
                    }
                    const b = u.capture[d], x = u.bubble[d];
                    if (r(a, 'stopPropagation', t), r(a, 'stopImmediatePropagation', n), c(a, s), 'capture' === m) {
                        if (void 0 === b) {
                            return;
                        }
                        for (let t = v.length - 1; t >= 0 && !e.has(a); --t) {
                            const e = v[t], n = b.get(e);
                            if (void 0 !== n) {
                                l.set(a, e);
                                for (const e of n) {
                                    if (o.has(a)) {
                                        break;
                                    }
                                    e(a);
                                }
                            }
                            if (0 === t && !f && void 0 !== x) {
                                const t = x.get(e);
                                if (void 0 !== t) {
                                    for (const e of t) {
                                        if (o.has(a)) {
                                            break;
                                        }
                                        e(a);
                                    }
                                }
                            }
                        }
                    } else {
                        if ('bubble' === m) {
                            if (void 0 === x) {
                                return;
                            }
                            for (let t = 0; t < v.length && !e.has(a); ++t) {
                                const e = v[t], n = x.get(e);
                                if (void 0 !== n) {
                                    l.set(a, e);
                                    for (const e of n) {
                                        if (o.has(a)) {
                                            break;
                                        }
                                        e(a);
                                    }
                                }
                            }
                        }
                    }
                    i(a, 'stopPropagation');
                    i(a, 'stopImmediatePropagation');
                    c(a);
                };
                return a.displayName = 'evtdUnifiedHandler', a;
            }(), f = function () {
                const e = function (e) {
                    const {
                        type: o,
                        eventPhase: t
                    } = e;
                    if (2 !== t) {
                        return;
                    }
                    const n = d[o];
                    void 0 !== n && n.forEach(o => o(e));
                };
                return e.displayName = 'evtdUnifiedWindowEventHandler', e;
            }();
        function h(e, o) {
            const t = u[e];
            return void 0 === t[o] && (t[o] = new Map(), window.addEventListener(o, p, 'capture' === e)), t[o];
        }
        function m(e, o) {
            let t = e.get(o);
            return void 0 === t && e.set(o, t = new Set()), t;
        }
        function g(e, o, t, n) {
            const r = function (e, o, t, n) {
                if ('mousemoveoutside' === e || 'clickoutside' === e) {
                    const r = la(e, o, t);
                    return Object.keys(r).forEach(e => {
                        sa(e, document, r[e], n);
                    }), true;
                }
                return false;
            }(e, o, t, n);
            if (r) {
                return;
            }
            const i = true === n || 'object' == typeof n && true === n.capture, l = i ? 'capture' : 'bubble', a = h(l, e), s = m(a, o);
            if (o === window) {
                if (!function (e, o, t, n) {
                        const r = u[o][t];
                        if (void 0 !== r) {
                            const o = r.get(e);
                            if (void 0 !== o && o.has(n)) {
                                return true;
                            }
                        }
                        return false;
                    }(o, i ? 'bubble' : 'capture', e, t) && function (e, o) {
                        const t = d[e];
                        return !(void 0 === t || !t.has(o));
                    }(e, t)) {
                    const o = d[e];
                    o.delete(t);
                    0 === o.size && (window.removeEventListener(e, f), d[e] = void 0);
                }
            }
            s.has(t) && s.delete(t);
            0 === s.size && a.delete(o);
            0 === a.size && (window.removeEventListener(e, p, 'capture' === l), u[l][e] = void 0);
        }
        return {
            on: function (e, o, t, n) {
                let r;
                r = 'object' == typeof n && true === n.once ? i => {
                    g(e, o, r, n);
                    t(i);
                } : t;
                if (function (e, o, t, n) {
                        if ('mousemoveoutside' === e || 'clickoutside' === e) {
                            const r = la(e, o, t);
                            return Object.keys(r).forEach(e => {
                                aa(e, document, r[e], n);
                            }), true;
                        }
                        return false;
                    }(e, o, r, n)) {
                    return;
                }
                const i = m(h(true === n || 'object' == typeof n && true === n.capture ? 'capture' : 'bubble', e), o);
                if (i.has(r) || i.add(r), o === window) {
                    const o = function (e) {
                        return void 0 === d[e] && (d[e] = new Set(), window.addEventListener(e, f)), d[e];
                    }(e);
                    o.has(r) || o.add(r);
                }
            },
            off: g
        };
    }(), ca = xo(null);
function ua(e) {
    if (e.clientX > 0 || e.clientY > 0) {
        ca.value = {
            x: e.clientX,
            y: e.clientY
        };
    } else {
        const {target: o} = e;
        if (o instanceof Element) {
            const {
                left: e,
                top: t,
                width: n,
                height: r
            } = o.getBoundingClientRect();
            ca.value = e > 0 || t > 0 ? {
                x: e + n / 2,
                y: t + r / 2
            } : {
                x: 0,
                y: 0
            };
        } else {
            ca.value = null;
        }
    }
}
let da = 0, pa = true;
function fa() {
    if (!na) {
        return io(xo(null));
    }
    0 === da && aa('click', document, ua, true);
    const e = () => {
        da += 1;
    };
    return pa && (pa = ta()) ? ($t(e), Bt(() => {
        da -= 1;
        0 === da && sa('click', document, ua, true);
    })) : e(), io(ca);
}
const ha = xo(void 0);
let ma = 0;
function ga() {
    ha.value = Date.now();
}
let va = true;
function ba(e) {
    if (!na) {
        return io(xo(false));
    }
    const o = xo(false);
    let t = null;
    function n() {
        null !== t && window.clearTimeout(t);
    }
    function r() {
        n();
        o.value = true;
        t = window.setTimeout(() => {
            o.value = false;
        }, e);
    }
    0 === ma && aa('click', window, ga, true);
    const i = () => {
        ma += 1;
        aa('click', window, r, true);
    };
    return va && (va = ta()) ? ($t(i), Bt(() => {
        ma -= 1;
        0 === ma && sa('click', window, ga, true);
        sa('click', window, r, true);
        n();
    })) : i(), io(o);
}
function xa() {
    const e = xo(false);
    return Mt(() => {
        e.value = true;
    }), io(e);
}
const Ca = 'undefined' != typeof window && (/iPad|iPhone|iPod/.test(navigator.platform) || 'MacIntel' === navigator.platform && navigator.maxTouchPoints > 1) && !window.MSStream;
const ya = 'n-modal-body', Sa = 'n-modal', wa = 'n-drawer-body', _a = 'n-popover-body';
function za(e, o, t = 'default') {
    const n = o[t];
    if (void 0 === n) {
        throw new Error(`[vueuc/${ e }]: slot[${ t }] is empty.`);
    }
    return n();
}
function Ta(e, o = true, t = []) {
    return e.forEach(e => {
        if (null !== e) {
            if ('object' == typeof e) {
                if (Array.isArray(e)) {
                    Ta(e, o, t);
                } else {
                    if (e.type === Un) {
                        if (null === e.children) {
                            return;
                        }
                        Array.isArray(e.children) && Ta(e.children, o, t);
                    } else {
                        e.type !== Gn && t.push(e);
                    }
                }
            } else {
                'string' != typeof e && 'number' != typeof e || t.push(ur(String(e)));
            }
        }
    }), t;
}
const Pa = '@@coContext', Ea = {
        mounted(e, {
            value: o,
            modifiers: t
        }) {
            e[Pa] = { handler: void 0 };
            'function' == typeof o && (e[Pa].handler = o, aa('clickoutside', e, o, { capture: t.capture }));
        },
        updated(e, {
            value: o,
            modifiers: t
        }) {
            const n = e[Pa];
            'function' == typeof o ? n.handler ? n.handler !== o && (sa('clickoutside', e, n.handler, { capture: t.capture }), n.handler = o, aa('clickoutside', e, o, { capture: t.capture })) : (e[Pa].handler = o, aa('clickoutside', e, o, { capture: t.capture })) : n.handler && (sa('clickoutside', e, n.handler, { capture: t.capture }), n.handler = void 0);
        },
        unmounted(e, {modifiers: o}) {
            const {handler: t} = e[Pa];
            t && sa('clickoutside', e, t, { capture: o.capture });
            e[Pa].handler = void 0;
        }
    };
const ka = new class {
        constructor() {
            this.elementZIndex = new Map();
            this.nextZIndex = 2000;
        }
        get elementCount() {
            return this.elementZIndex.size;
        }
        ensureZIndex(e, o) {
            const {elementZIndex: t} = this;
            if (void 0 !== o) {
                return e.style.zIndex = `${ o }`, void t.delete(e);
            }
            const {nextZIndex: n} = this;
            if (t.has(e)) {
                if (t.get(e) + 1 === this.nextZIndex) {
                    return;
                }
            }
            e.style.zIndex = `${ n }`;
            t.set(e, n);
            this.nextZIndex = n + 1;
            this.squashState();
        }
        unregister(e, o) {
            const {elementZIndex: t} = this;
            t.has(e) && t.delete(e);
            this.squashState();
        }
        squashState() {
            const {elementCount: e} = this;
            e || (this.nextZIndex = 2000);
            this.nextZIndex - e > 2500 && this.rearrange();
        }
        rearrange() {
            const e = Array.from(this.elementZIndex.entries());
            e.sort((e, o) => e[1] - o[1]);
            this.nextZIndex = 2000;
            e.forEach(e => {
                const o = e[0], t = this.nextZIndex++;
                `${ t }` !== o.style.zIndex && (o.style.zIndex = `${ t }`);
            });
        }
    }(), Ra = '@@ziContext', La = {
        mounted(e, o) {
            const {
                    value: t = {}
                } = o, {
                    zIndex: n,
                    enabled: r
                } = t;
            e[Ra] = {
                enabled: !!r,
                initialized: false
            };
            r && (ka.ensureZIndex(e, n), e[Ra].initialized = true);
        },
        updated(e, o) {
            const {
                    value: t = {}
                } = o, {
                    zIndex: n,
                    enabled: r
                } = t, i = e[Ra].enabled;
            r && !i && (ka.ensureZIndex(e, n), e[Ra].initialized = true);
            e[Ra].enabled = !!r;
        },
        unmounted(e, o) {
            if (!e[Ra].initialized) {
                return;
            }
            const {
                    value: t = {}
                } = o, {zIndex: n} = t;
            ka.unregister(e, n);
        }
    }, Oa = Symbol('@css-render/vue3-ssr');
function Aa(e, o) {
    const t = ct(Oa, null);
    if (null === t) {
        return;
    }
    const {
        styles: n,
        ids: r
    } = t;
    r.has(e) || null !== n && (r.add(e), n.push(function (e, o) {
        return `<style cssr-id="${ e }">\n${ o }\n</style>`;
    }(e, o)));
}
const Ia = 'undefined' != typeof document;
function $a() {
    if (Ia) {
        return;
    }
    const e = ct(Oa, null);
    return null !== e ? {
        adapter: Aa,
        context: e
    } : void 0;
}
function Ma(e) {
    return 'string' == typeof e ? document.querySelector(e) : e();
}
const Ha = Tt({
    name: 'LazyTeleport',
    props: {
        to: {
            type: [
                String,
                Object
            ],
            default: void 0
        },
        disabled: Boolean,
        show: {
            type: Boolean,
            required: true
        }
    },
    setup: e => ({
        showTeleport: ea(Po(e, 'show')),
        mergedTo: Er(() => {
            const {to: o} = e;
            return null != o ? o : 'body';
        })
    }),
    render() {
        return this.showTeleport ? this.disabled ? za('lazy-teleport', this.$slots) : kr(Nn, {
            disabled: this.disabled,
            to: this.mergedTo
        }, za('lazy-teleport', this.$slots)) : null;
    }
});
var Fa, Ba, Da = [], ja = 'ResizeObserver loop completed with undelivered notifications.';
(Ba = Fa || (Fa = {})).BORDER_BOX = 'border-box';
Ba.CONTENT_BOX = 'content-box';
Ba.DEVICE_PIXEL_CONTENT_BOX = 'device-pixel-content-box';
var Na, Wa = function (e) {
        return Object.freeze(e);
    }, Ua = function (e, o) {
        this.inlineSize = e;
        this.blockSize = o;
        Wa(this);
    }, Va = function () {
        function e(e, o, t, n) {
            return this.x = e, this.y = o, this.width = t, this.height = n, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, Wa(this);
        }
        return e.prototype.toJSON = function () {
            var e = this;
            return {
                x: e.x,
                y: e.y,
                top: e.top,
                right: e.right,
                bottom: e.bottom,
                left: e.left,
                width: e.width,
                height: e.height
            };
        }, e.fromRect = function (o) {
            return new e(o.x, o.y, o.width, o.height);
        }, e;
    }(), Ga = function (e) {
        return e instanceof SVGElement && 'getBBox' in e;
    }, qa = function (e) {
        if (Ga(e)) {
            var o = e.getBBox(), t = o.width, n = o.height;
            return !t && !n;
        }
        var r = e, i = r.offsetWidth, l = r.offsetHeight;
        return !(i || l || e.getClientRects().length);
    }, Ka = function (e) {
        var o;
        if (e instanceof Element) {
            return true;
        }
        var t = null === (o = null == e ? void 0 : e.ownerDocument) || void 0 === o ? void 0 : o.defaultView;
        return !!(t && e instanceof t.Element);
    }, Ya = 'undefined' != typeof window ? window : {}, Xa = new WeakMap(), Ja = /auto|scroll/, Za = /^tb|vertical/, Qa = /msie|trident/i.test(Ya.navigator && Ya.navigator.userAgent), es = function (e) {
        return parseFloat(e || '0');
    }, os = function (e, o, t) {
        return void 0 === e && (e = 0), void 0 === o && (o = 0), void 0 === t && (t = false), new Ua((t ? o : e) || 0, (t ? e : o) || 0);
    }, ts = Wa({
        devicePixelContentBoxSize: os(),
        borderBoxSize: os(),
        contentBoxSize: os(),
        contentRect: new Va(0, 0, 0, 0)
    }), ns = function (e, o) {
        if (void 0 === o && (o = false), Xa.has(e) && !o) {
            return Xa.get(e);
        }
        if (qa(e)) {
            return Xa.set(e, ts), ts;
        }
        var t = getComputedStyle(e), n = Ga(e) && e.ownerSVGElement && e.getBBox(), r = !Qa && 'border-box' === t.boxSizing, i = Za.test(t.writingMode || ''), l = !n && Ja.test(t.overflowY || ''), a = !n && Ja.test(t.overflowX || ''), s = n ? 0 : es(t.paddingTop), c = n ? 0 : es(t.paddingRight), u = n ? 0 : es(t.paddingBottom), d = n ? 0 : es(t.paddingLeft), p = n ? 0 : es(t.borderTopWidth), f = n ? 0 : es(t.borderRightWidth), h = n ? 0 : es(t.borderBottomWidth), m = d + c, g = s + u, v = (n ? 0 : es(t.borderLeftWidth)) + f, b = p + h, x = a ? e.offsetHeight - b - e.clientHeight : 0, C = l ? e.offsetWidth - v - e.clientWidth : 0, y = r ? m + v : 0, S = r ? g + b : 0, w = n ? n.width : es(t.width) - y - C, _ = n ? n.height : es(t.height) - S - x, z = w + m + C + v, T = _ + g + x + b, P = Wa({
                devicePixelContentBoxSize: os(Math.round(w * devicePixelRatio), Math.round(_ * devicePixelRatio), i),
                borderBoxSize: os(z, T, i),
                contentBoxSize: os(w, _, i),
                contentRect: new Va(d, s, w, _)
            });
        return Xa.set(e, P), P;
    }, rs = function (e, o, t) {
        var n = ns(e, t), r = n.borderBoxSize, i = n.contentBoxSize, l = n.devicePixelContentBoxSize;
        switch (o) {
        case Fa.DEVICE_PIXEL_CONTENT_BOX:
            return l;
        case Fa.BORDER_BOX:
            return r;
        default:
            return i;
        }
    }, is = function (e) {
        var o = ns(e);
        this.target = e;
        this.contentRect = o.contentRect;
        this.borderBoxSize = Wa([o.borderBoxSize]);
        this.contentBoxSize = Wa([o.contentBoxSize]);
        this.devicePixelContentBoxSize = Wa([o.devicePixelContentBoxSize]);
    }, ls = function (e) {
        if (qa(e)) {
            return null;
        }
        for (var o = 0, t = e.parentNode; t;) {
            o += 1;
            t = t.parentNode;
        }
        return o;
    }, as = function () {
        var e = 1e+400, o = [];
        Da.forEach(function (t) {
            if (0 !== t.activeTargets.length) {
                var n = [];
                t.activeTargets.forEach(function (o) {
                    var t = new is(o.target), r = ls(o.target);
                    n.push(t);
                    o.lastReportedSize = rs(o.target, o.observedBox);
                    r < e && (e = r);
                });
                o.push(function () {
                    t.callback.call(t.observer, n, t.observer);
                });
                t.activeTargets.splice(0, t.activeTargets.length);
            }
        });
        for (var t = 0, n = o; t < n.length; t++) {
            (0, n[t])();
        }
        return e;
    }, ss = function (e) {
        Da.forEach(function (o) {
            o.activeTargets.splice(0, o.activeTargets.length);
            o.skippedTargets.splice(0, o.skippedTargets.length);
            o.observationTargets.forEach(function (t) {
                t.isActive() && (ls(t.target) > e ? o.activeTargets.push(t) : o.skippedTargets.push(t));
            });
        });
    }, cs = function () {
        var e, o = 0;
        for (ss(o); Da.some(function (e) {
                return e.activeTargets.length > 0;
            });) {
            o = as();
            ss(o);
        }
        return Da.some(function (e) {
            return e.skippedTargets.length > 0;
        }) && ('function' == typeof ErrorEvent ? e = new ErrorEvent('error', { message: ja }) : ((e = document.createEvent('Event')).initEvent('error', false, false), e.message = ja), window.dispatchEvent(e)), o > 0;
    }, us = [], ds = function (e) {
        if (!Na) {
            var o = 0, t = document.createTextNode('');
            new MutationObserver(function () {
                return us.splice(0).forEach(function (e) {
                    return e();
                });
            }).observe(t, { characterData: true });
            Na = function () {
                t.textContent = ''.concat(o ? o-- : o++);
            };
        }
        us.push(e);
        Na();
    }, ps = 0, fs = {
        attributes: true,
        characterData: true,
        childList: true,
        subtree: true
    }, hs = [
        'resize',
        'load',
        'transitionend',
        'animationend',
        'animationstart',
        'animationiteration',
        'keyup',
        'keydown',
        'mouseup',
        'mousedown',
        'mouseover',
        'mouseout',
        'blur',
        'focus'
    ], ms = function (e) {
        return void 0 === e && (e = 0), Date.now() + e;
    }, gs = false, vs = new (function () {
        function e() {
            var e = this;
            this.stopped = true;
            this.listener = function () {
                return e.schedule();
            };
        }
        return e.prototype.run = function (e) {
            var o = this;
            if (void 0 === e && (e = 250), !gs) {
                gs = true;
                var t, n = ms(e);
                t = function () {
                    var t = false;
                    try {
                        t = cs();
                    } finally {
                        if (gs = false, e = n - ms(), !ps) {
                            return;
                        }
                        t ? o.run(1000) : e > 0 ? o.run(e) : o.start();
                    }
                };
                ds(function () {
                    requestAnimationFrame(t);
                });
            }
        }, e.prototype.schedule = function () {
            this.stop();
            this.run();
        }, e.prototype.observe = function () {
            var e = this, o = function () {
                    return e.observer && e.observer.observe(document.body, fs);
                };
            document.body ? o() : Ya.addEventListener('DOMContentLoaded', o);
        }, e.prototype.start = function () {
            var e = this;
            this.stopped && (this.stopped = false, this.observer = new MutationObserver(this.listener), this.observe(), hs.forEach(function (o) {
                return Ya.addEventListener(o, e.listener, true);
            }));
        }, e.prototype.stop = function () {
            var e = this;
            this.stopped || (this.observer && this.observer.disconnect(), hs.forEach(function (o) {
                return Ya.removeEventListener(o, e.listener, true);
            }), this.stopped = true);
        }, e;
    }())(), bs = function (e) {
        !ps && e > 0 && vs.start();
        !(ps += e) && vs.stop();
    }, xs = function () {
        function e(e, o) {
            this.target = e;
            this.observedBox = o || Fa.CONTENT_BOX;
            this.lastReportedSize = {
                inlineSize: 0,
                blockSize: 0
            };
        }
        return e.prototype.isActive = function () {
            var e, o = rs(this.target, this.observedBox, true);
            return e = this.target, Ga(e) || function (e) {
                switch (e.tagName) {
                case 'INPUT':
                    if ('image' !== e.type) {
                        break;
                    }
                case 'VIDEO':
                case 'AUDIO':
                case 'EMBED':
                case 'OBJECT':
                case 'CANVAS':
                case 'IFRAME':
                case 'IMG':
                    return true;
                }
                return false;
            }(e) || 'inline' !== getComputedStyle(e).display || (this.lastReportedSize = o), this.lastReportedSize.inlineSize !== o.inlineSize || this.lastReportedSize.blockSize !== o.blockSize;
        }, e;
    }(), Cs = function (e, o) {
        this.activeTargets = [];
        this.skippedTargets = [];
        this.observationTargets = [];
        this.observer = e;
        this.callback = o;
    }, ys = new WeakMap(), Ss = function (e, o) {
        for (var t = 0; t < e.length; t += 1) {
            if (e[t].target === o) {
                return t;
            }
        }
        return -1;
    }, ws = function () {
        function e() {
        }
        return e.connect = function (e, o) {
            var t = new Cs(e, o);
            ys.set(e, t);
        }, e.observe = function (e, o, t) {
            var n = ys.get(e), r = 0 === n.observationTargets.length;
            Ss(n.observationTargets, o) < 0 && (r && Da.push(n), n.observationTargets.push(new xs(o, t && t.box)), bs(1), vs.schedule());
        }, e.unobserve = function (e, o) {
            var t = ys.get(e), n = Ss(t.observationTargets, o), r = 1 === t.observationTargets.length;
            n >= 0 && (r && Da.splice(Da.indexOf(t), 1), t.observationTargets.splice(n, 1), bs(-1));
        }, e.disconnect = function (e) {
            var o = this, t = ys.get(e);
            t.observationTargets.slice().forEach(function (t) {
                return o.unobserve(e, t.target);
            });
            t.activeTargets.splice(0, t.activeTargets.length);
        }, e;
    }(), _s = function () {
        function e(e) {
            if (0 === arguments.length) {
                throw new TypeError('Failed to construct \'ResizeObserver\': 1 argument required, but only 0 present.');
            }
            if ('function' != typeof e) {
                throw new TypeError('Failed to construct \'ResizeObserver\': The callback provided as parameter 1 is not a function.');
            }
            ws.connect(this, e);
        }
        return e.prototype.observe = function (e, o) {
            if (0 === arguments.length) {
                throw new TypeError('Failed to execute \'observe\' on \'ResizeObserver\': 1 argument required, but only 0 present.');
            }
            if (!Ka(e)) {
                throw new TypeError('Failed to execute \'observe\' on \'ResizeObserver\': parameter 1 is not of type \'Element');
            }
            ws.observe(this, e, o);
        }, e.prototype.unobserve = function (e) {
            if (0 === arguments.length) {
                throw new TypeError('Failed to execute \'unobserve\' on \'ResizeObserver\': 1 argument required, but only 0 present.');
            }
            if (!Ka(e)) {
                throw new TypeError('Failed to execute \'unobserve\' on \'ResizeObserver\': parameter 1 is not of type \'Element');
            }
            ws.unobserve(this, e);
        }, e.prototype.disconnect = function () {
            ws.disconnect(this);
        }, e.toString = function () {
            return 'function ResizeObserver () { [polyfill code] }';
        }, e;
    }();
const zs = new class {
        constructor() {
            this.handleResize = this.handleResize.bind(this);
            this.observer = new ('undefined' != typeof window && window.ResizeObserver || _s)(this.handleResize);
            this.elHandlersMap = new Map();
        }
        handleResize(e) {
            for (const o of e) {
                const e = this.elHandlersMap.get(o.target);
                void 0 !== e && e(o);
            }
        }
        registerHandler(e, o) {
            this.elHandlersMap.set(e, o);
            this.observer.observe(e);
        }
        unregisterHandler(e) {
            this.elHandlersMap.has(e) && (this.elHandlersMap.delete(e), this.observer.unobserve(e));
        }
    }(), Ts = Tt({
        name: 'ResizeObserver',
        props: { onResize: Function },
        setup(e) {
            let o = false;
            const t = xr().proxy;
            function n(o) {
                const {onResize: t} = e;
                void 0 !== t && t(o);
            }
            Mt(() => {
                const e = t.$el;
                void 0 !== e && (e.nextElementSibling !== e.nextSibling && 3 === e.nodeType && '' !== e.nodeValue || null !== e.nextElementSibling && (zs.registerHandler(e.nextElementSibling, n), o = true));
            });
            Bt(() => {
                o && zs.unregisterHandler(t.$el.nextElementSibling);
            });
        },
        render() {
            return Jt(this.$slots, 'default');
        }
    });
function Ps(e) {
    return e instanceof HTMLElement;
}
function Es(e) {
    for (let o = 0; o < e.childNodes.length; o++) {
        const t = e.childNodes[o];
        if (Ps(t) && (Rs(t) || Es(t))) {
            return true;
        }
    }
    return false;
}
function ks(e) {
    for (let o = e.childNodes.length - 1; o >= 0; o--) {
        const t = e.childNodes[o];
        if (Ps(t) && (Rs(t) || ks(t))) {
            return true;
        }
    }
    return false;
}
function Rs(e) {
    if (!function (e) {
            if (e.tabIndex > 0 || 0 === e.tabIndex && null !== e.getAttribute('tabIndex')) {
                return true;
            }
            if (e.getAttribute('disabled')) {
                return false;
            }
            switch (e.nodeName) {
            case 'A':
                return !!e.href && 'ignore' !== e.rel;
            case 'INPUT':
                return 'hidden' !== e.type && 'file' !== e.type;
            case 'BUTTON':
            case 'SELECT':
            case 'TEXTAREA':
                return true;
            default:
                return false;
            }
        }(e)) {
        return false;
    }
    try {
        e.focus({ preventScroll: true });
    } catch (o) {
    }
    return document.activeElement === e;
}
let Ls = [];
const Os = Tt({
    name: 'FocusTrap',
    props: {
        disabled: Boolean,
        active: Boolean,
        autoFocus: {
            type: Boolean,
            default: true
        },
        onEsc: Function,
        initialFocusTo: String,
        finalFocusTo: String,
        returnFocusOnDeactivated: {
            type: Boolean,
            default: true
        }
    },
    setup(e) {
        const o = tl(), t = xo(null), n = xo(null);
        let r = false, i = false;
        const l = 'undefined' == typeof document ? null : document.activeElement;
        function a() {
            return Ls[Ls.length - 1] === o;
        }
        function s(o) {
            var t;
            'Escape' === o.code && a() && (null === (t = e.onEsc) || void 0 === t || t.call(e, o));
        }
        function c(e) {
            if (!i && a()) {
                const o = u();
                if (null === o) {
                    return;
                }
                if (o.contains(zi(e))) {
                    return;
                }
                p('first');
            }
        }
        function u() {
            const e = t.value;
            if (null === e) {
                return null;
            }
            let o = e;
            for (; !(o = o.nextSibling, null === o || o instanceof Element && 'DIV' === o.tagName);) {
                ;
            }
            return o;
        }
        function d() {
            var t;
            if (e.disabled) {
                return;
            }
            if (document.removeEventListener('focus', c, true), Ls = Ls.filter(e => e !== o), a()) {
                return;
            }
            const {finalFocusTo: n} = e;
            void 0 !== n ? null === (t = Ma(n)) || void 0 === t || t.focus({ preventScroll: true }) : e.returnFocusOnDeactivated && l instanceof HTMLElement && (i = true, l.focus({ preventScroll: true }), i = false);
        }
        function p(o) {
            if (a() && e.active) {
                const e = t.value, r = n.value;
                if (null !== e && null !== r) {
                    const t = u();
                    if (null == t || t === r) {
                        return i = true, e.focus({ preventScroll: true }), void (i = false);
                    }
                    i = true;
                    const n = 'first' === o ? Es(t) : ks(t);
                    i = false;
                    n || (i = true, e.focus({ preventScroll: true }), i = false);
                }
            }
        }
        return Mt(() => {
            pt(() => e.active, t => {
                t ? (!function () {
                    var t;
                    if (e.disabled) {
                        return;
                    }
                    if (Ls.push(o), e.autoFocus) {
                        const {initialFocusTo: o} = e;
                        void 0 === o ? p('first') : null === (t = Ma(o)) || void 0 === t || t.focus({ preventScroll: true });
                    }
                    r = true;
                    document.addEventListener('focus', c, true);
                }(), aa('keydown', document, s)) : (sa('keydown', document, s), r && d());
            }, { immediate: true });
        }), Bt(() => {
            sa('keydown', document, s);
            r && d();
        }), {
            focusableStartRef: t,
            focusableEndRef: n,
            focusableStyle: 'position: absolute; height: 0; width: 0;',
            handleStartFocus: function (e) {
                if (i) {
                    return;
                }
                const o = u();
                null !== o && (null !== e.relatedTarget && o.contains(e.relatedTarget) ? p('last') : p('first'));
            },
            handleEndFocus: function (e) {
                i || (null !== e.relatedTarget && e.relatedTarget === t.value ? p('last') : p('first'));
            }
        };
    },
    render() {
        const {default: e} = this.$slots;
        if (void 0 === e) {
            return null;
        }
        if (this.disabled) {
            return e();
        }
        const {
            active: o,
            focusableStyle: t
        } = this;
        return kr(Un, null, [
            kr('div', {
                'aria-hidden': 'true',
                tabindex: o ? '0' : '-1',
                ref: 'focusableStartRef',
                style: t,
                onFocus: this.handleStartFocus
            }),
            e(),
            kr('div', {
                'aria-hidden': 'true',
                style: t,
                ref: 'focusableEndRef',
                tabindex: o ? '0' : '-1',
                onFocus: this.handleEndFocus
            })
        ]);
    }
});
let As = 0, Is = '', $s = '', Ms = '', Hs = '';
const Fs = xo('0px');
const Bs = xo(false), Ds = () => {
        Bs.value = true;
    }, js = () => {
        Bs.value = false;
    };
let Ns = 0;
const Ws = 'n-form-item';
function Us(e, {
    defaultSize: o = 'medium',
    mergedSize: t,
    mergedDisabled: n
} = {}) {
    const r = ct(Ws, null);
    st(Ws, null);
    const i = Er(t ? () => t(r) : () => {
            const {size: t} = e;
            if (t) {
                return t;
            }
            if (r) {
                const {mergedSize: e} = r;
                if (void 0 !== e.value) {
                    return e.value;
                }
            }
            return o;
        }), l = Er(n ? () => n(r) : () => {
            const {disabled: o} = e;
            return void 0 !== o ? o : !!r && r.disabled.value;
        }), a = Er(() => {
            const {status: o} = e;
            return o || (null == r ? void 0 : r.mergedValidationStatus.value);
        });
    return Bt(() => {
        r && r.restoreValidation();
    }), {
        mergedSizeRef: i,
        mergedDisabledRef: l,
        mergedStatusRef: a,
        nTriggerFormBlur() {
            r && r.handleContentBlur();
        },
        nTriggerFormChange() {
            r && r.handleContentChange();
        },
        nTriggerFormFocus() {
            r && r.handleContentFocus();
        },
        nTriggerFormInput() {
            r && r.handleContentInput();
        }
    };
}
const Vs = 'object' == typeof global && global && global.Object === Object && global;
var Gs = 'object' == typeof self && self && self.Object === Object && self;
const qs = Vs || Gs || Function('return this')();
const Ks = qs.Symbol;
var Ys = Object.prototype, Xs = Ys.hasOwnProperty, Js = Ys.toString, Zs = Ks ? Ks.toStringTag : void 0;
var Qs = Object.prototype.toString;
var ec = '[object Null]', oc = '[object Undefined]', tc = Ks ? Ks.toStringTag : void 0;
function nc(e) {
    return null == e ? void 0 === e ? oc : ec : tc && tc in Object(e) ? function (e) {
        var o = Xs.call(e, Zs), t = e[Zs];
        try {
            e[Zs] = void 0;
            ;
        } catch (i) {
        }
        var r = Js.call(e);
        return true && (o ? e[Zs] = t : delete e[Zs]), r;
    }(e) : function (e) {
        return Qs.call(e);
    }(e);
}
function rc(e) {
    return null != e && 'object' == typeof e;
}
var ic = '[object Symbol]';
function lc(e) {
    return 'symbol' == typeof e || rc(e) && nc(e) == ic;
}
function ac(e, o) {
    for (var t = -1, n = null == e ? 0 : e.length, r = Array(n); ++t < n;) {
        r[t] = o(e[t], t, e);
    }
    return r;
}
const sc = Array.isArray;
var cc = 1e+400, uc = Ks ? Ks.prototype : void 0, dc = uc ? uc.toString : void 0;
function pc(e) {
    if ('string' == typeof e) {
        return e;
    }
    if (sc(e)) {
        return ac(e, pc) + '';
    }
    if (lc(e)) {
        return dc ? dc.call(e) : '';
    }
    var o = e + '';
    return '0' == o && 1 / e == -cc ? '-0' : o;
}
function fc(e) {
    var o = typeof e;
    return null != e && ('object' == o || 'function' == o);
}
function hc(e) {
    return e;
}
var mc = '[object AsyncFunction]', gc = '[object Function]', vc = '[object GeneratorFunction]', bc = '[object Proxy]';
function xc(e) {
    if (!fc(e)) {
        return false;
    }
    var o = nc(e);
    return o == gc || o == vc || o == mc || o == bc;
}
const Cc = qs['__core-js_shared__'];
var yc, Sc = (yc = /[^.]+$/.exec(Cc && Cc.keys && Cc.keys.IE_PROTO || '')) ? 'Symbol(src)_1.' + yc : '';
var wc = Function.prototype.toString;
function _c(e) {
    if (null != e) {
        try {
            return wc.call(e);
        } catch (o) {
        }
        try {
            return e + '';
        } catch (o) {
        }
    }
    return '';
}
var zc = /^\[object .+?Constructor\]$/, Tc = Function.prototype, Pc = Object.prototype, Ec = Tc.toString, kc = Pc.hasOwnProperty, Rc = RegExp('^' + Ec.call(kc).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
function Lc(e) {
    return !(!fc(e) || (o = e, Sc && Sc in o)) && (xc(e) ? Rc : zc).test(_c(e));
    var o;
}
function Oc(e, o) {
    var t = function (e, o) {
        return null == e ? void 0 : e[o];
    }(e, o);
    return Lc(t) ? t : void 0;
}
var Ac = Object.create;
const Ic = function () {
    function e() {
    }
    return function (o) {
        if (!fc(o)) {
            return {};
        }
        if (Ac) {
            return Ac(o);
        }
        e.prototype = o;
        var t = new e();
        return e.prototype = void 0, t;
    };
}();
var $c = Date.now;
var Mc = function () {
    try {
        var e = Oc(Object, 'defineProperty');
        return e({}, '', {}), e;
    } catch (o) {
    }
}();
const Hc = Mc;
var Fc = Hc ? function (e, o) {
    return Hc(e, 'toString', {
        configurable: true,
        enumerable: false,
        value: (t = o, function () {
            return t;
        }),
        writable: true
    });
    var t;
} : hc;
var Bc, Dc, jc;
const Nc = (Bc = Fc, Dc = 0, jc = 0, function () {
    var e = $c(), o = 16 - (e - jc);
    if (jc = e, o > 0) {
        if (++Dc >= 800) {
            return arguments[0];
        }
    } else {
        Dc = 0;
    }
    return Bc.apply(void 0, arguments);
});
var Wc = 9007199254740991, Uc = /^(?:0|[1-9]\d*)$/;
function Vc(e, o) {
    var t = typeof e;
    return !!(o = null == o ? Wc : o) && ('number' == t || 'symbol' != t && Uc.test(e)) && e > -1 && e % 1 == 0 && e < o;
}
function Gc(e, o, t) {
    '__proto__' == o && Hc ? Hc(e, o, {
        configurable: true,
        enumerable: true,
        value: t,
        writable: true
    }) : e[o] = t;
}
function qc(e, o) {
    return e === o || e != e && o != o;
}
var Kc = Object.prototype.hasOwnProperty;
function Yc(e, o, t) {
    var n = e[o];
    Kc.call(e, o) && qc(n, t) && (void 0 !== t || o in e) || Gc(e, o, t);
}
var Xc = Math.max;
function Jc(e, o) {
    return Nc(function (e, o, t) {
        return o = Xc(void 0 === o ? e.length - 1 : o, 0), function () {
            for (var n = arguments, r = -1, i = Xc(n.length - o, 0), l = Array(i); ++r < i;) {
                l[r] = n[o + r];
            }
            r = -1;
            for (var a = Array(o + 1); ++r < o;) {
                a[r] = n[r];
            }
            return a[o] = t(l), function (e, o, t) {
                switch (t.length) {
                case 0:
                    return e.call(o);
                case 1:
                    return e.call(o, t[0]);
                case 2:
                    return e.call(o, t[0], t[1]);
                case 3:
                    return e.call(o, t[0], t[1], t[2]);
                }
                return e.apply(o, t);
            }(e, this, a);
        };
    }(e, o, hc), e + '');
}
var Zc = 9007199254740991;
function Qc(e) {
    return 'number' == typeof e && e > -1 && e % 1 == 0 && e <= Zc;
}
function eu(e) {
    return null != e && Qc(e.length) && !xc(e);
}
var ou = Object.prototype;
function tu(e) {
    var o = e && e.constructor;
    return e === ('function' == typeof o && o.prototype || ou);
}
function nu(e) {
    return rc(e) && '[object Arguments]' == nc(e);
}
var ru = Object.prototype, iu = ru.hasOwnProperty, lu = ru.propertyIsEnumerable;
const au = nu(function () {
    return arguments;
}()) ? nu : function (e) {
    return rc(e) && iu.call(e, 'callee') && !lu.call(e, 'callee');
};
var su = 'object' == typeof exports && exports && !exports.nodeType && exports, cu = su && 'object' == typeof module && module && !module.nodeType && module, uu = cu && cu.exports === su ? qs.Buffer : void 0;
const du = (uu ? uu.isBuffer : void 0) || function () {
    return false;
};
var pu = {};
pu['[object Float32Array]'] = pu['[object Float64Array]'] = pu['[object Int8Array]'] = pu['[object Int16Array]'] = pu['[object Int32Array]'] = pu['[object Uint8Array]'] = pu['[object Uint8ClampedArray]'] = pu['[object Uint16Array]'] = pu['[object Uint32Array]'] = true;
pu['[object Arguments]'] = pu['[object Array]'] = pu['[object ArrayBuffer]'] = pu['[object Boolean]'] = pu['[object DataView]'] = pu['[object Date]'] = pu['[object Error]'] = pu['[object Function]'] = pu['[object Map]'] = pu['[object Number]'] = pu['[object Object]'] = pu['[object RegExp]'] = pu['[object Set]'] = pu['[object String]'] = pu['[object WeakMap]'] = false;
var fu = 'object' == typeof exports && exports && !exports.nodeType && exports, hu = fu && 'object' == typeof module && module && !module.nodeType && module, mu = hu && hu.exports === fu && Vs.process, gu = function () {
        try {
            var e = hu && hu.require && hu.require('util').types;
            return e || mu && mu.binding && mu.binding('util');
        } catch (o) {
        }
    }();
var vu = gu && gu.isTypedArray, bu = vu ? function (e) {
        return function (o) {
            return e(o);
        };
    }(vu) : function (e) {
        return rc(e) && Qc(e.length) && !!pu[nc(e)];
    };
const xu = bu;
var Cu = Object.prototype.hasOwnProperty;
function yu(e, o) {
    var t = sc(e), n = !t && au(e), r = !t && !n && du(e), i = !t && !n && !r && xu(e), l = t || n || r || i, a = l ? function (e, o) {
            for (var t = -1, n = Array(e); ++t < e;) {
                n[t] = o(t);
            }
            return n;
        }(e.length, String) : [], s = a.length;
    for (var c in e)
        !o && !Cu.call(e, c) || l && ('length' == c || r && ('offset' == c || 'parent' == c) || i && ('buffer' == c || 'byteLength' == c || 'byteOffset' == c) || Vc(c, s)) || a.push(c);
    return a;
}
function Su(e, o) {
    return function (t) {
        return e(o(t));
    };
}
var wu = Object.prototype.hasOwnProperty;
function _u(e) {
    if (!fc(e)) {
        return function (e) {
            var o = [];
            if (null != e) {
                for (var t in Object(e))
                    o.push(t);
            }
            return o;
        }(e);
    }
    var o = tu(e), t = [];
    for (var n in e)
        ('constructor' != n || !o && wu.call(e, n)) && t.push(n);
    return t;
}
function zu(e) {
    return eu(e) ? yu(e, true) : _u(e);
}
const Tu = Oc(Object, 'create');
var Pu = Object.prototype.hasOwnProperty;
var Eu = Object.prototype.hasOwnProperty;
function ku(e) {
    var o = -1, t = null == e ? 0 : e.length;
    for (this.clear(); ++o < t;) {
        var n = e[o];
        this.set(n[0], n[1]);
    }
}
function Ru(e, o) {
    for (var t = e.length; t--;) {
        if (qc(e[t][0], o)) {
            return t;
        }
    }
    return -1;
}
ku.prototype.clear = function () {
    this.__data__ = Tu ? Tu(null) : {};
    this.size = 0;
};
ku.prototype.delete = function (e) {
    var o = this.has(e) && delete this.__data__[e];
    return this.size -= o ? 1 : 0, o;
};
ku.prototype.get = function (e) {
    var o = this.__data__;
    if (Tu) {
        var t = o[e];
        return '__lodash_hash_undefined__' === t ? void 0 : t;
    }
    return Pu.call(o, e) ? o[e] : void 0;
};
ku.prototype.has = function (e) {
    var o = this.__data__;
    return Tu ? void 0 !== o[e] : Eu.call(o, e);
};
ku.prototype.set = function (e, o) {
    var t = this.__data__;
    return this.size += this.has(e) ? 0 : 1, t[e] = Tu && void 0 === o ? '__lodash_hash_undefined__' : o, this;
};
var Lu = Array.prototype.splice;
function Ou(e) {
    var o = -1, t = null == e ? 0 : e.length;
    for (this.clear(); ++o < t;) {
        var n = e[o];
        this.set(n[0], n[1]);
    }
}
Ou.prototype.clear = function () {
    this.__data__ = [];
    this.size = 0;
};
Ou.prototype.delete = function (e) {
    var o = this.__data__, t = Ru(o, e);
    return !(t < 0) && (t == o.length - 1 ? o.pop() : Lu.call(o, t, 1), --this.size, true);
};
Ou.prototype.get = function (e) {
    var o = this.__data__, t = Ru(o, e);
    return t < 0 ? void 0 : o[t][1];
};
Ou.prototype.has = function (e) {
    return Ru(this.__data__, e) > -1;
};
Ou.prototype.set = function (e, o) {
    var t = this.__data__, n = Ru(t, e);
    return n < 0 ? (++this.size, t.push([
        e,
        o
    ])) : t[n][1] = o, this;
};
const Au = Oc(qs, 'Map');
function Iu(e, o) {
    var t, n, r = e.__data__;
    return ('string' == (n = typeof (t = o)) || 'number' == n || 'symbol' == n || 'boolean' == n ? '__proto__' !== t : null === t) ? r['string' == typeof o ? 'string' : 'hash'] : r.map;
}
function $u(e) {
    var o = -1, t = null == e ? 0 : e.length;
    for (this.clear(); ++o < t;) {
        var n = e[o];
        this.set(n[0], n[1]);
    }
}
function Mu(e) {
    return null == e ? '' : pc(e);
}
$u.prototype.clear = function () {
    this.size = 0;
    this.__data__ = {
        hash: new ku(),
        map: new (Au || Ou)(),
        string: new ku()
    };
};
$u.prototype.delete = function (e) {
    var o = Iu(this, e).delete(e);
    return this.size -= o ? 1 : 0, o;
};
$u.prototype.get = function (e) {
    return Iu(this, e).get(e);
};
$u.prototype.has = function (e) {
    return Iu(this, e).has(e);
};
$u.prototype.set = function (e, o) {
    var t = Iu(this, e), n = t.size;
    return t.set(e, o), this.size += t.size == n ? 0 : 1, this;
};
const Hu = Su(Object.getPrototypeOf, Object);
var Fu = '[object Object]', Bu = Function.prototype, Du = Object.prototype, ju = Bu.toString, Nu = Du.hasOwnProperty, Wu = ju.call(Object);
function Uu(e, o, t) {
    var n = e.length;
    return t = void 0 === t ? n : t, !o && t >= n ? e : function (e, o, t) {
        var n = -1, r = e.length;
        o < 0 && (o = -o > r ? 0 : r + o);
        (t = t > r ? r : t) < 0 && (t += r);
        r = o > t ? 0 : t - o >>> 0;
        o >>>= 0;
        for (var i = Array(r); ++n < r;) {
            i[n] = e[n + o];
        }
        return i;
    }(e, o, t);
}
var Vu = RegExp('[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]');
function Gu(e) {
    return Vu.test(e);
}
var qu, Ku = '\\ud800-\\udfff', Yu = '[' + Ku + ']', Xu = '[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]', Ju = '\\ud83c[\\udffb-\\udfff]', Zu = '[^' + Ku + ']', Qu = '(?:\\ud83c[\\udde6-\\uddff]){2}', ed = '[\\ud800-\\udbff][\\udc00-\\udfff]', od = '(?:' + Xu + '|' + Ju + ')' + '?', td = '[\\ufe0e\\ufe0f]?', nd = td + od + ('(?:\\u200d(?:' + [
        Zu,
        Qu,
        ed
    ].join('|') + ')' + td + od + ')*'), rd = '(?:' + [
        Zu + Xu + '?',
        Xu,
        Qu,
        ed,
        Yu
    ].join('|') + ')', id = RegExp(Ju + '(?=' + Ju + ')|' + rd + nd, 'g');
function ld(e) {
    return Gu(e) ? function (e) {
        return e.match(id) || [];
    }(e) : function (e) {
        return e.split('');
    }(e);
}
const ad = (qu = 'toUpperCase', function (e) {
    var o = Gu(e = Mu(e)) ? ld(e) : void 0, t = o ? o[0] : e.charAt(0), n = o ? Uu(o, 1).join('') : e.slice(1);
    return t[qu]() + n;
});
function sd(e) {
    var o = this.__data__ = new Ou(e);
    this.size = o.size;
}
sd.prototype.clear = function () {
    this.__data__ = new Ou();
    this.size = 0;
};
sd.prototype.delete = function (e) {
    var o = this.__data__, t = o.delete(e);
    return this.size = o.size, t;
};
sd.prototype.get = function (e) {
    return this.__data__.get(e);
};
sd.prototype.has = function (e) {
    return this.__data__.has(e);
};
sd.prototype.set = function (e, o) {
    var t = this.__data__;
    if (t instanceof Ou) {
        var n = t.__data__;
        if (!Au || n.length < 199) {
            return n.push([
                e,
                o
            ]), this.size = ++t.size, this;
        }
        t = this.__data__ = new $u(n);
    }
    return t.set(e, o), this.size = t.size, this;
};
var cd = 'object' == typeof exports && exports && !exports.nodeType && exports, ud = cd && 'object' == typeof module && module && !module.nodeType && module, dd = ud && ud.exports === cd ? qs.Buffer : void 0, pd = dd ? dd.allocUnsafe : void 0;
const fd = qs.Uint8Array;
function hd(e, o) {
    var t, n, r = o ? (t = e.buffer, n = new t.constructor(t.byteLength), new fd(n).set(new fd(t)), n) : e.buffer;
    return new e.constructor(r, e.byteOffset, e.length);
}
var md;
const gd = function (e, o, t) {
    for (var n = -1, r = Object(e), i = t(e), l = i.length; l--;) {
        var a = i[md ? l : ++n];
        if (false === o(r[a], a, r)) {
            break;
        }
    }
    return e;
};
function vd(e, o, t) {
    (void 0 !== t && !qc(e[o], t) || void 0 === t && !(o in e)) && Gc(e, o, t);
}
function bd(e, o) {
    if (('constructor' !== o || 'function' != typeof e[o]) && '__proto__' != o) {
        return e[o];
    }
}
function xd(e) {
    return function (e, o, t, n) {
        var r = !t;
        t || (t = {});
        for (var i = -1, l = o.length; ++i < l;) {
            var a = o[i], s = n ? n(t[a], e[a], a, t, e) : void 0;
            void 0 === s && (s = e[a]);
            r ? Gc(t, a, s) : Yc(t, a, s);
        }
        return t;
    }(e, zu(e));
}
function Cd(e, o, t, n, r, i, l) {
    var a = bd(e, t), s = bd(o, t), c = l.get(s);
    if (c) {
        vd(e, t, c);
    } else {
        var u, d = i ? i(a, s, t + '', e, o, l) : void 0, p = void 0 === d;
        if (p) {
            var f = sc(s), h = !f && du(s), m = !f && !h && xu(s);
            d = s;
            f || h || m ? sc(a) ? d = a : rc(u = a) && eu(u) ? d = function (e, o) {
                var t = -1, n = e.length;
                for (o || (o = Array(n)); ++t < n;) {
                    o[t] = e[t];
                }
                return o;
            }(a) : h ? (p = false, d = function (e, o) {
                if (o) {
                    return e.slice();
                }
                var t = e.length, n = pd ? pd(t) : new e.constructor(t);
                return e.copy(n), n;
            }(s, true)) : m ? (p = false, d = hd(s, true)) : d = [] : function (e) {
                if (!rc(e) || nc(e) != Fu) {
                    return false;
                }
                var o = Hu(e);
                if (null === o) {
                    return true;
                }
                var t = Nu.call(o, 'constructor') && o.constructor;
                return 'function' == typeof t && t instanceof t && ju.call(t) == Wu;
            }(s) || au(s) ? (d = a, au(a) ? d = xd(a) : fc(a) && !xc(a) || (d = function (e) {
                return 'function' != typeof e.constructor || tu(e) ? {} : Ic(Hu(e));
            }(s))) : p = false;
        }
        p && (l.set(s, d), r(d, s, n, i, l), l.delete(s));
        vd(e, t, d);
    }
}
function yd(e, o, t, n, r) {
    e !== o && gd(o, function (i, l) {
        if (r || (r = new sd()), fc(i)) {
            Cd(e, o, l, t, yd, n, r);
        } else {
            var a = n ? n(bd(e, l), i, l + '', e, o, r) : void 0;
            void 0 === a && (a = i);
            vd(e, l, a);
        }
    }, zu);
}
var Sd;
const wd = (Sd = function (e, o, t) {
        yd(e, o, t);
    }, Jc(function (e, o) {
        var t = -1, n = o.length, r = n > 1 ? o[n - 1] : void 0, i = n > 2 ? o[2] : void 0;
        for (r = Sd.length > 3 && 'function' == typeof r ? (n--, r) : void 0, i && function (e, o, t) {
                if (!fc(t)) {
                    return false;
                }
                var n = typeof o;
                return !!('number' == n ? eu(t) && Vc(o, t.length) : 'string' == n && o in t) && qc(t[o], e);
            }(o[0], o[1], i) && (r = n < 3 ? void 0 : r, n = 1), e = Object(e); ++t < n;) {
            var l = o[t];
            l && Sd(e, l, t, r);
        }
        return e;
    })), _d = {
        fontFamily: 'v-sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        fontFamilyMono: 'v-mono, SFMono-Regular, Menlo, Consolas, Courier, monospace',
        fontWeight: '400',
        fontWeightStrong: '500',
        cubicBezierEaseInOut: 'cubic-bezier(.4, 0, .2, 1)',
        cubicBezierEaseOut: 'cubic-bezier(0, 0, .2, 1)',
        cubicBezierEaseIn: 'cubic-bezier(.4, 0, 1, 1)',
        borderRadius: '3px',
        borderRadiusSmall: '2px',
        fontSize: '14px',
        fontSizeMini: '12px',
        fontSizeTiny: '12px',
        fontSizeSmall: '14px',
        fontSizeMedium: '14px',
        fontSizeLarge: '15px',
        fontSizeHuge: '16px',
        lineHeight: '1.6',
        heightMini: '16px',
        heightTiny: '22px',
        heightSmall: '28px',
        heightMedium: '34px',
        heightLarge: '40px',
        heightHuge: '46px'
    }, {
        fontSize: zd,
        fontFamily: Td,
        lineHeight: Pd
    } = _d, Ed = Wl('body', `\n margin: 0;\n font-size: ${ zd };\n font-family: ${ Td };\n line-height: ${ Pd };\n -webkit-text-size-adjust: 100%;\n -webkit-tap-highlight-color: transparent;\n`, [Wl('input', '\n font-family: inherit;\n font-size: inherit;\n ')]), kd = 'n-config-provider', Rd = 'naive-ui-style';
function Ld(e, o, t, n, r, i) {
    const l = $a(), a = ct(kd, null);
    if (t) {
        const e = () => {
            const e = null == i ? void 0 : i.value;
            t.mount({
                id: void 0 === e ? o : e + o,
                head: true,
                props: { bPrefix: e ? `.${ e }-` : void 0 },
                anchorMetaName: Rd,
                ssr: l
            });
            (null == a ? void 0 : a.preflightStyleDisabled) || Ed.mount({
                id: 'n-global',
                head: true,
                anchorMetaName: Rd,
                ssr: l
            });
        };
        l ? e() : $t(e);
    }
    return Er(() => {
        var o;
        const {
                theme: {
                    common: t,
                    self: i,
                    peers: l = {}
                } = {},
                themeOverrides: s = {},
                builtinThemeOverrides: c = {}
            } = r, {
                common: u,
                peers: d
            } = s, {
                common: p,
                [e]: {
                    common: f,
                    self: h,
                    peers: m = {}
                } = {}
            } = (null == a ? void 0 : a.mergedThemeRef.value) || {}, {
                common: g,
                [e]: v = {}
            } = (null == a ? void 0 : a.mergedThemeOverridesRef.value) || {}, {
                common: b,
                peers: x = {}
            } = v, C = wd({}, t || f || p || n.common, g, b, u);
        return {
            common: C,
            self: wd(null === (o = i || h || n.self) || void 0 === o ? void 0 : o(C), c, v, s),
            peers: wd({}, n.peers, m, l),
            peerOverrides: wd({}, c.peers, x, d)
        };
    });
}
Ld.props = {
    theme: Object,
    themeOverrides: Object,
    builtinThemeOverrides: Object
};
const Od = 'n';
function Ad(e = {}, o = { defaultBordered: true }) {
    const t = ct(kd, null);
    return {
        inlineThemeDisabled: null == t ? void 0 : t.inlineThemeDisabled,
        mergedRtlRef: null == t ? void 0 : t.mergedRtlRef,
        mergedComponentPropsRef: null == t ? void 0 : t.mergedComponentPropsRef,
        mergedBreakpointsRef: null == t ? void 0 : t.mergedBreakpointsRef,
        mergedBorderedRef: Er(() => {
            var n, r;
            const {bordered: i} = e;
            return void 0 !== i ? i : null === (r = null !== (n = null == t ? void 0 : t.mergedBorderedRef.value) && void 0 !== n ? n : o.defaultBordered) || void 0 === r || r;
        }),
        mergedClsPrefixRef: Er(() => (null == t ? void 0 : t.mergedClsPrefixRef.value) || Od),
        namespaceRef: Er(() => null == t ? void 0 : t.mergedNamespaceRef.value)
    };
}
function Id(e, o, t) {
    if (!o) {
        return;
    }
    const n = $a(), r = ct(kd, null), i = () => {
            const i = null == t ? void 0 : t.value;
            o.mount({
                id: void 0 === i ? e : i + e,
                head: true,
                anchorMetaName: Rd,
                props: { bPrefix: i ? `.${ i }-` : void 0 },
                ssr: n
            });
            (null == r ? void 0 : r.preflightStyleDisabled) || Ed.mount({
                id: 'n-global',
                head: true,
                anchorMetaName: Rd,
                ssr: n
            });
        };
    n ? i() : $t(i);
}
function $d(e, o, t, n) {
    var r;
    t || ul('useThemeClass', 'cssVarsRef is not passed');
    const i = null === (r = ct(kd, null)) || void 0 === r ? void 0 : r.mergedThemeHashRef, l = xo(''), a = $a();
    let s;
    const c = `__${ e }`;
    return ut(() => {
        (() => {
            let e = c;
            const r = o ? o.value : void 0, u = null == i ? void 0 : i.value;
            u && (e += '-' + u);
            r && (e += '-' + r);
            const {
                themeOverrides: d,
                builtinThemeOverrides: p
            } = n;
            d && (e += '-' + Ll(JSON.stringify(d)));
            p && (e += '-' + Ll(JSON.stringify(p)));
            l.value = e;
            s = () => {
                const o = t.value;
                let n = '';
                for (const e in o)
                    n += `${ e }: ${ o[e] };`;
                Wl(`.${ e }`, n).mount({
                    id: e,
                    ssr: a
                });
                s = void 0;
            };
        })();
    }), {
        themeClass: l,
        onRender: () => {
            null == s || s();
        }
    };
}
function Md(e, o, t) {
    if (!o) {
        return;
    }
    const n = $a(), r = Er(() => {
            const {value: t} = o;
            if (!t) {
                return;
            }
            const n = t[e];
            return n || void 0;
        }), i = () => {
            ut(() => {
                const {value: o} = t, i = `${ o }${ e }Rtl`;
                if (function (e, o) {
                        if (void 0 === e) {
                            return false;
                        }
                        if (o) {
                            const {
                                context: {ids: t}
                            } = o;
                            return t.has(e);
                        }
                        return null !== wl(e);
                    }(i, n)) {
                    return;
                }
                const {value: l} = r;
                l && l.style.mount({
                    id: i,
                    head: true,
                    anchorMetaName: Rd,
                    props: { bPrefix: o ? `.${ o }-` : void 0 },
                    ssr: n
                });
            });
        };
    return n ? i() : $t(i), r;
}
function Hd(e, o) {
    return Tt({
        name: ad(e),
        setup() {
            var t;
            const n = null === (t = ct(kd, null)) || void 0 === t ? void 0 : t.mergedIconsRef;
            return () => {
                var t;
                const r = null === (t = null == n ? void 0 : n.value) || void 0 === t ? void 0 : t[e];
                return r ? r() : o;
            };
        }
    });
}
const Fd = Hd('close', kr('svg', {
        viewBox: '0 0 12 12',
        version: '1.1',
        xmlns: 'http://www.w3.org/2000/svg',
        'aria-hidden': true
    }, kr('g', {
        stroke: 'none',
        'stroke-width': '1',
        fill: 'none',
        'fill-rule': 'evenodd'
    }, kr('g', {
        fill: 'currentColor',
        'fill-rule': 'nonzero'
    }, kr('path', { d: 'M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z' }))))), Bd = Hd('error', kr('svg', {
        viewBox: '0 0 48 48',
        version: '1.1',
        xmlns: 'http://www.w3.org/2000/svg'
    }, kr('g', {
        stroke: 'none',
        'stroke-width': '1',
        'fill-rule': 'evenodd'
    }, kr('g', { 'fill-rule': 'nonzero' }, kr('path', { d: 'M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M17.8838835,16.1161165 L17.7823881,16.0249942 C17.3266086,15.6583353 16.6733914,15.6583353 16.2176119,16.0249942 L16.1161165,16.1161165 L16.0249942,16.2176119 C15.6583353,16.6733914 15.6583353,17.3266086 16.0249942,17.7823881 L16.1161165,17.8838835 L22.233,24 L16.1161165,30.1161165 L16.0249942,30.2176119 C15.6583353,30.6733914 15.6583353,31.3266086 16.0249942,31.7823881 L16.1161165,31.8838835 L16.2176119,31.9750058 C16.6733914,32.3416647 17.3266086,32.3416647 17.7823881,31.9750058 L17.8838835,31.8838835 L24,25.767 L30.1161165,31.8838835 L30.2176119,31.9750058 C30.6733914,32.3416647 31.3266086,32.3416647 31.7823881,31.9750058 L31.8838835,31.8838835 L31.9750058,31.7823881 C32.3416647,31.3266086 32.3416647,30.6733914 31.9750058,30.2176119 L31.8838835,30.1161165 L25.767,24 L31.8838835,17.8838835 L31.9750058,17.7823881 C32.3416647,17.3266086 32.3416647,16.6733914 31.9750058,16.2176119 L31.8838835,16.1161165 L31.7823881,16.0249942 C31.3266086,15.6583353 30.6733914,15.6583353 30.2176119,16.0249942 L30.1161165,16.1161165 L24,22.233 L17.8838835,16.1161165 L17.7823881,16.0249942 L17.8838835,16.1161165 Z' }))))), Dd = Hd('info', kr('svg', {
        viewBox: '0 0 28 28',
        version: '1.1',
        xmlns: 'http://www.w3.org/2000/svg'
    }, kr('g', {
        stroke: 'none',
        'stroke-width': '1',
        'fill-rule': 'evenodd'
    }, kr('g', { 'fill-rule': 'nonzero' }, kr('path', { d: 'M14,2 C20.6274,2 26,7.37258 26,14 C26,20.6274 20.6274,26 14,26 C7.37258,26 2,20.6274 2,14 C2,7.37258 7.37258,2 14,2 Z M14,11 C13.4477,11 13,11.4477 13,12 L13,12 L13,20 C13,20.5523 13.4477,21 14,21 C14.5523,21 15,20.5523 15,20 L15,20 L15,12 C15,11.4477 14.5523,11 14,11 Z M14,6.75 C13.3096,6.75 12.75,7.30964 12.75,8 C12.75,8.69036 13.3096,9.25 14,9.25 C14.6904,9.25 15.25,8.69036 15.25,8 C15.25,7.30964 14.6904,6.75 14,6.75 Z' }))))), jd = Hd('success', kr('svg', {
        viewBox: '0 0 48 48',
        version: '1.1',
        xmlns: 'http://www.w3.org/2000/svg'
    }, kr('g', {
        stroke: 'none',
        'stroke-width': '1',
        'fill-rule': 'evenodd'
    }, kr('g', { 'fill-rule': 'nonzero' }, kr('path', { d: 'M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M32.6338835,17.6161165 C32.1782718,17.1605048 31.4584514,17.1301307 30.9676119,17.5249942 L30.8661165,17.6161165 L20.75,27.732233 L17.1338835,24.1161165 C16.6457281,23.6279612 15.8542719,23.6279612 15.3661165,24.1161165 C14.9105048,24.5717282 14.8801307,25.2915486 15.2749942,25.7823881 L15.3661165,25.8838835 L19.8661165,30.3838835 C20.3217282,30.8394952 21.0415486,30.8698693 21.5323881,30.4750058 L21.6338835,30.3838835 L32.6338835,19.3838835 C33.1220388,18.8957281 33.1220388,18.1042719 32.6338835,17.6161165 Z' }))))), Nd = Hd('warning', kr('svg', {
        viewBox: '0 0 24 24',
        version: '1.1',
        xmlns: 'http://www.w3.org/2000/svg'
    }, kr('g', {
        stroke: 'none',
        'stroke-width': '1',
        'fill-rule': 'evenodd'
    }, kr('g', { 'fill-rule': 'nonzero' }, kr('path', { d: 'M12,2 C17.523,2 22,6.478 22,12 C22,17.522 17.523,22 12,22 C6.477,22 2,17.522 2,12 C2,6.478 6.477,2 12,2 Z M12.0018002,15.0037242 C11.450254,15.0037242 11.0031376,15.4508407 11.0031376,16.0023869 C11.0031376,16.553933 11.450254,17.0010495 12.0018002,17.0010495 C12.5533463,17.0010495 13.0004628,16.553933 13.0004628,16.0023869 C13.0004628,15.4508407 12.5533463,15.0037242 12.0018002,15.0037242 Z M11.99964,7 C11.4868042,7.00018474 11.0642719,7.38637706 11.0066858,7.8837365 L11,8.00036004 L11.0018003,13.0012393 L11.00857,13.117858 C11.0665141,13.6151758 11.4893244,14.0010638 12.0021602,14.0008793 C12.514996,14.0006946 12.9375283,13.6145023 12.9951144,13.1171428 L13.0018002,13.0005193 L13,7.99964009 L12.9932303,7.8830214 C12.9352861,7.38570354 12.5124758,6.99981552 11.99964,7 Z' }))))), Wd = Tt({
        name: 'BaseIconSwitchTransition',
        setup(e, {slots: o}) {
            const t = xa();
            return () => kr(Yr, {
                name: 'icon-switch-transition',
                appear: t.value
            }, o);
        }
    }), Ud = Tt({
        name: 'FadeInExpandTransition',
        props: {
            appear: Boolean,
            group: Boolean,
            mode: String,
            onLeave: Function,
            onAfterLeave: Function,
            onAfterEnter: Function,
            width: Boolean,
            reverse: Boolean
        },
        setup(e, {slots: o}) {
            function t(o) {
                e.width ? o.style.maxWidth = `${ o.offsetWidth }px` : o.style.maxHeight = `${ o.offsetHeight }px`;
                o.offsetWidth;
            }
            function n(o) {
                e.width ? o.style.maxWidth = '0' : o.style.maxHeight = '0';
                o.offsetWidth;
                const {onLeave: t} = e;
                t && t();
            }
            function r(o) {
                e.width ? o.style.maxWidth = '' : o.style.maxHeight = '';
                const {onAfterLeave: t} = e;
                t && t();
            }
            function i(o) {
                if (o.style.transition = 'none', e.width) {
                    const e = o.offsetWidth;
                    o.style.maxWidth = '0';
                    o.offsetWidth;
                    o.style.transition = '';
                    o.style.maxWidth = `${ e }px`;
                } else {
                    if (e.reverse) {
                        o.style.maxHeight = `${ o.offsetHeight }px`;
                        o.offsetHeight;
                        o.style.transition = '';
                        o.style.maxHeight = '0';
                    } else {
                        const e = o.offsetHeight;
                        o.style.maxHeight = '0';
                        o.offsetWidth;
                        o.style.transition = '';
                        o.style.maxHeight = `${ e }px`;
                    }
                }
                o.offsetWidth;
            }
            function l(o) {
                var t;
                e.width ? o.style.maxWidth = '' : e.reverse || (o.style.maxHeight = '');
                null === (t = e.onAfterEnter) || void 0 === t || t.call(e);
            }
            return () => kr(e.group ? hi : Yr, {
                name: e.width ? 'fade-in-width-expand-transition' : 'fade-in-height-expand-transition',
                mode: e.mode,
                appear: e.appear,
                onEnter: i,
                onAfterEnter: l,
                onBeforeLeave: t,
                onLeave: n,
                onAfterLeave: r
            }, o);
        }
    }), Vd = Vl('base-icon', '\n height: 1em;\n width: 1em;\n line-height: 1em;\n text-align: center;\n display: inline-block;\n position: relative;\n fill: currentColor;\n transform: translateZ(0);\n', [Wl('svg', '\n height: 1em;\n width: 1em;\n ')]), Gd = Tt({
        name: 'BaseIcon',
        props: {
            role: String,
            ariaLabel: String,
            ariaDisabled: {
                type: Boolean,
                default: void 0
            },
            ariaHidden: {
                type: Boolean,
                default: void 0
            },
            clsPrefix: {
                type: String,
                required: true
            },
            onClick: Function,
            onMousedown: Function,
            onMouseup: Function
        },
        setup(e) {
            Id('-base-icon', Vd, Po(e, 'clsPrefix'));
        },
        render() {
            return kr('i', {
                class: `${ this.clsPrefix }-base-icon`,
                onClick: this.onClick,
                onMousedown: this.onMousedown,
                onMouseup: this.onMouseup,
                role: this.role,
                'aria-label': this.ariaLabel,
                'aria-hidden': this.ariaHidden,
                'aria-disabled': this.ariaDisabled
            }, this.$slots);
        }
    }), qd = Vl('base-close', '\n display: flex;\n align-items: center;\n justify-content: center;\n cursor: pointer;\n background-color: transparent;\n color: var(--n-close-icon-color);\n border-radius: var(--n-close-border-radius);\n height: var(--n-close-size);\n width: var(--n-close-size);\n font-size: var(--n-close-icon-size);\n outline: none;\n border: none;\n position: relative;\n padding: 0;\n', [
        ql('absolute', '\n height: var(--n-close-icon-size);\n width: var(--n-close-icon-size);\n '),
        Wl('&::before', '\n content: "";\n position: absolute;\n width: var(--n-close-size);\n height: var(--n-close-size);\n left: 50%;\n top: 50%;\n transform: translateY(-50%) translateX(-50%);\n transition: inherit;\n border-radius: inherit;\n '),
        Kl('disabled', [
            Wl('&:hover', '\n color: var(--n-close-icon-color-hover);\n '),
            Wl('&:hover::before', '\n background-color: var(--n-close-color-hover);\n '),
            Wl('&:focus::before', '\n background-color: var(--n-close-color-hover);\n '),
            Wl('&:active', '\n color: var(--n-close-icon-color-pressed);\n '),
            Wl('&:active::before', '\n background-color: var(--n-close-color-pressed);\n ')
        ]),
        ql('disabled', '\n cursor: not-allowed;\n color: var(--n-close-icon-color-disabled);\n background-color: transparent;\n '),
        ql('round', [Wl('&::before', '\n border-radius: 50%;\n ')])
    ]), Kd = Tt({
        name: 'BaseClose',
        props: {
            isButtonTag: {
                type: Boolean,
                default: true
            },
            clsPrefix: {
                type: String,
                required: true
            },
            disabled: {
                type: Boolean,
                default: void 0
            },
            focusable: {
                type: Boolean,
                default: true
            },
            round: Boolean,
            onClick: Function,
            absolute: Boolean
        },
        setup: e => (Id('-base-close', qd, Po(e, 'clsPrefix')), () => {
            const {
                clsPrefix: o,
                disabled: t,
                absolute: n,
                round: r,
                isButtonTag: i
            } = e;
            return kr(i ? 'button' : 'div', {
                type: i ? 'button' : void 0,
                tabindex: t || !e.focusable ? -1 : 0,
                'aria-disabled': t,
                'aria-label': 'close',
                role: i ? void 0 : 'button',
                disabled: t,
                class: [
                    `${ o }-base-close`,
                    n && `${ o }-base-close--absolute`,
                    t && `${ o }-base-close--disabled`,
                    r && `${ o }-base-close--round`
                ],
                onMousedown: o => {
                    e.focusable || o.preventDefault();
                },
                onClick: e.onClick
            }, kr(Gd, { clsPrefix: o }, { default: () => kr(Fd, null) }));
        })
    }), {cubicBezierEaseInOut: Yd} = _d;
function Xd({
    originalTransform: e = '',
    left: o = 0,
    top: t = 0,
    transition: n = `all .3s ${ Yd } !important`
} = {}) {
    return [
        Wl('&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to', {
            transform: e + ' scale(0.75)',
            left: o,
            top: t,
            opacity: 0
        }),
        Wl('&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from', {
            transform: `scale(1) ${ e }`,
            left: o,
            top: t,
            opacity: 1
        }),
        Wl('&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active', {
            transformOrigin: 'center',
            position: 'absolute',
            left: o,
            top: t,
            transition: n
        })
    ];
}
const Jd = Wl([
        Wl('@keyframes loading-container-rotate', '\n to {\n -webkit-transform: rotate(360deg);\n transform: rotate(360deg);\n }\n '),
        Wl('@keyframes loading-layer-rotate', '\n 12.5% {\n -webkit-transform: rotate(135deg);\n transform: rotate(135deg);\n }\n 25% {\n -webkit-transform: rotate(270deg);\n transform: rotate(270deg);\n }\n 37.5% {\n -webkit-transform: rotate(405deg);\n transform: rotate(405deg);\n }\n 50% {\n -webkit-transform: rotate(540deg);\n transform: rotate(540deg);\n }\n 62.5% {\n -webkit-transform: rotate(675deg);\n transform: rotate(675deg);\n }\n 75% {\n -webkit-transform: rotate(810deg);\n transform: rotate(810deg);\n }\n 87.5% {\n -webkit-transform: rotate(945deg);\n transform: rotate(945deg);\n }\n 100% {\n -webkit-transform: rotate(1080deg);\n transform: rotate(1080deg);\n } \n '),
        Wl('@keyframes loading-left-spin', '\n from {\n -webkit-transform: rotate(265deg);\n transform: rotate(265deg);\n }\n 50% {\n -webkit-transform: rotate(130deg);\n transform: rotate(130deg);\n }\n to {\n -webkit-transform: rotate(265deg);\n transform: rotate(265deg);\n }\n '),
        Wl('@keyframes loading-right-spin', '\n from {\n -webkit-transform: rotate(-265deg);\n transform: rotate(-265deg);\n }\n 50% {\n -webkit-transform: rotate(-130deg);\n transform: rotate(-130deg);\n }\n to {\n -webkit-transform: rotate(-265deg);\n transform: rotate(-265deg);\n }\n '),
        Vl('base-loading', '\n position: relative;\n line-height: 0;\n width: 1em;\n height: 1em;\n ', [
            Gl('transition-wrapper', '\n position: absolute;\n width: 100%;\n height: 100%;\n ', [Xd()]),
            Gl('container', '\n display: inline-flex;\n position: relative;\n direction: ltr;\n line-height: 0;\n animation: loading-container-rotate 1568.2352941176ms linear infinite;\n font-size: 0;\n letter-spacing: 0;\n white-space: nowrap;\n opacity: 1;\n width: 100%;\n height: 100%;\n ', [
                Gl('svg', '\n stroke: var(--n-text-color);\n fill: transparent;\n position: absolute;\n height: 100%;\n overflow: hidden;\n '),
                Gl('container-layer', '\n position: absolute;\n width: 100%;\n height: 100%;\n animation: loading-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n ', [
                    Gl('container-layer-left', '\n display: inline-flex;\n position: relative;\n width: 50%;\n height: 100%;\n overflow: hidden;\n ', [Gl('svg', '\n animation: loading-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n width: 200%;\n ')]),
                    Gl('container-layer-patch', '\n position: absolute;\n top: 0;\n left: 47.5%;\n box-sizing: border-box;\n width: 5%;\n height: 100%;\n overflow: hidden;\n ', [Gl('svg', '\n left: -900%;\n width: 2000%;\n transform: rotate(180deg);\n ')]),
                    Gl('container-layer-right', '\n display: inline-flex;\n position: relative;\n width: 50%;\n height: 100%;\n overflow: hidden;\n ', [Gl('svg', '\n animation: loading-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n left: -100%;\n width: 200%;\n ')])
                ])
            ]),
            Gl('placeholder', '\n position: absolute;\n left: 50%;\n top: 50%;\n transform: translateX(-50%) translateY(-50%);\n ', [Xd({
                    left: '50%',
                    top: '50%',
                    originalTransform: 'translateX(-50%) translateY(-50%)'
                })])
        ])
    ]), Zd = {
        strokeWidth: {
            type: Number,
            default: 28
        },
        stroke: {
            type: String,
            default: void 0
        }
    }, Qd = Tt({
        name: 'BaseLoading',
        props: Object.assign({
            clsPrefix: {
                type: String,
                required: true
            },
            show: {
                type: Boolean,
                default: true
            },
            scale: {
                type: Number,
                default: 1
            },
            radius: {
                type: Number,
                default: 100
            }
        }, Zd),
        setup(e) {
            Id('-base-loading', Jd, Po(e, 'clsPrefix'));
        },
        render() {
            const {
                    clsPrefix: e,
                    radius: o,
                    strokeWidth: t,
                    stroke: n,
                    scale: r
                } = this, i = o / r;
            return kr('div', {
                class: `${ e }-base-loading`,
                role: 'img',
                'aria-label': 'loading'
            }, kr(Wd, null, {
                default: () => this.show ? kr('div', {
                    key: 'icon',
                    class: `${ e }-base-loading__transition-wrapper`
                }, kr('div', { class: `${ e }-base-loading__container` }, kr('div', { class: `${ e }-base-loading__container-layer` }, kr('div', { class: `${ e }-base-loading__container-layer-left` }, kr('svg', {
                    class: `${ e }-base-loading__svg`,
                    viewBox: `0 0 ${ 2 * i } ${ 2 * i }`,
                    xmlns: 'http://www.w3.org/2000/svg',
                    style: { color: n }
                }, kr('circle', {
                    fill: 'none',
                    stroke: 'currentColor',
                    'stroke-width': t,
                    'stroke-linecap': 'round',
                    cx: i,
                    cy: i,
                    r: o - t / 2,
                    'stroke-dasharray': 4.91 * o,
                    'stroke-dashoffset': 2.46 * o
                }))), kr('div', { class: `${ e }-base-loading__container-layer-patch` }, kr('svg', {
                    class: `${ e }-base-loading__svg`,
                    viewBox: `0 0 ${ 2 * i } ${ 2 * i }`,
                    xmlns: 'http://www.w3.org/2000/svg',
                    style: { color: n }
                }, kr('circle', {
                    fill: 'none',
                    stroke: 'currentColor',
                    'stroke-width': t,
                    'stroke-linecap': 'round',
                    cx: i,
                    cy: i,
                    r: o - t / 2,
                    'stroke-dasharray': 4.91 * o,
                    'stroke-dashoffset': 2.46 * o
                }))), kr('div', { class: `${ e }-base-loading__container-layer-right` }, kr('svg', {
                    class: `${ e }-base-loading__svg`,
                    viewBox: `0 0 ${ 2 * i } ${ 2 * i }`,
                    xmlns: 'http://www.w3.org/2000/svg',
                    style: { color: n }
                }, kr('circle', {
                    fill: 'none',
                    stroke: 'currentColor',
                    'stroke-width': t,
                    'stroke-linecap': 'round',
                    cx: i,
                    cy: i,
                    r: o - t / 2,
                    'stroke-dasharray': 4.91 * o,
                    'stroke-dashoffset': 2.46 * o
                })))))) : kr('div', {
                    key: 'placeholder',
                    class: `${ e }-base-loading__placeholder`
                }, this.$slots)
            }));
        }
    }), ep = '#000', op = '#fff', tp = '#fff', np = 'rgb(72, 72, 78)', rp = 'rgb(24, 24, 28)', ip = 'rgb(44, 44, 50)', lp = 'rgb(16, 16, 20)', ap = '0.9', sp = '0.82', cp = '0.52', up = '0.38', dp = '0.28', pp = '0.52', fp = '0.38', hp = '0.06', mp = '0.09', gp = '0.06', vp = '0.05', bp = '0.05', xp = '0.18', Cp = '0.2', yp = '0.12', Sp = '0.24', wp = '0.09', _p = '0.1', zp = '0.06', Tp = '0.04', Pp = '0.2', Ep = '0.3', kp = '0.12', Rp = '0.2', Lp = '#7fe7c4', Op = '#63e2b7', Ap = '#5acea7', Ip = 'rgb(42, 148, 125)', $p = '#8acbec', Mp = '#70c0e8', Hp = '#66afd3', Fp = 'rgb(56, 137, 197)', Bp = '#e98b8b', Dp = '#e88080', jp = '#e57272', Np = 'rgb(208, 58, 82)', Wp = '#f5d599', Up = '#f2c97d', Vp = '#e6c260', Gp = 'rgb(240, 138, 0)', qp = '#7fe7c4', Kp = '#63e2b7', Yp = '#5acea7', Xp = 'rgb(42, 148, 125)', Jp = Vi(ep), Zp = Vi(op), Qp = 'rgba(' + Zp.slice(0, 3).join(', ') + ', ';
function ef(e) {
    return Qp + String(e) + ')';
}
const of = Object.assign(Object.assign({ name: 'common' }, _d), {
        baseColor: ep,
        primaryColor: Op,
        primaryColorHover: Lp,
        primaryColorPressed: Ap,
        primaryColorSuppl: Ip,
        infoColor: Mp,
        infoColorHover: $p,
        infoColorPressed: Hp,
        infoColorSuppl: Fp,
        successColor: Kp,
        successColorHover: qp,
        successColorPressed: Yp,
        successColorSuppl: Xp,
        warningColor: Up,
        warningColorHover: Wp,
        warningColorPressed: Vp,
        warningColorSuppl: Gp,
        errorColor: Dp,
        errorColorHover: Bp,
        errorColorPressed: jp,
        errorColorSuppl: Np,
        textColorBase: tp,
        textColor1: ef(ap),
        textColor2: ef(sp),
        textColor3: ef(cp),
        textColorDisabled: ef(up),
        placeholderColor: ef(up),
        placeholderColorDisabled: ef(dp),
        iconColor: ef(up),
        iconColorDisabled: ef(dp),
        iconColorHover: ef(1.25 * Number(up)),
        iconColorPressed: ef(0.8 * Number(up)),
        opacity1: ap,
        opacity2: sp,
        opacity3: cp,
        opacity4: up,
        opacity5: dp,
        dividerColor: ef(wp),
        borderColor: ef(Sp),
        closeIconColorHover: ef(Number(pp)),
        closeIconColor: ef(Number(pp)),
        closeIconColorPressed: ef(Number(pp)),
        closeColorHover: 'rgba(255, 255, 255, .12)',
        closeColorPressed: 'rgba(255, 255, 255, .08)',
        clearColor: ef(up),
        clearColorHover: Xi(ef(up), { alpha: 1.25 }),
        clearColorPressed: Xi(ef(up), { alpha: 0.8 }),
        scrollbarColor: ef(Pp),
        scrollbarColorHover: ef(Ep),
        scrollbarWidth: '5px',
        scrollbarHeight: '5px',
        scrollbarBorderRadius: '5px',
        progressRailColor: ef(yp),
        railColor: ef(Cp),
        popoverColor: np,
        tableColor: rp,
        cardColor: rp,
        modalColor: ip,
        bodyColor: lp,
        tagColor: function (e) {
            const o = Array.from(Zp);
            return o[3] = Number(e), Ki(Jp, o);
        }(Rp),
        avatarColor: ef(xp),
        invertedColor: ep,
        inputColor: ef(_p),
        codeColor: ef(kp),
        tabColor: ef(Tp),
        actionColor: ef(zp),
        tableHeaderColor: ef(zp),
        hoverColor: ef(mp),
        tableColorHover: ef(gp),
        tableColorStriped: ef(vp),
        pressedColor: ef(bp),
        opacityDisabled: fp,
        inputColorDisabled: ef(hp),
        buttonColor2: 'rgba(255, 255, 255, .08)',
        buttonColor2Hover: 'rgba(255, 255, 255, .12)',
        buttonColor2Pressed: 'rgba(255, 255, 255, .08)',
        boxShadow1: '0 1px 2px -2px rgba(0, 0, 0, .24), 0 3px 6px 0 rgba(0, 0, 0, .18), 0 5px 12px 4px rgba(0, 0, 0, .12)',
        boxShadow2: '0 3px 6px -4px rgba(0, 0, 0, .24), 0 6px 12px 0 rgba(0, 0, 0, .16), 0 9px 18px 8px rgba(0, 0, 0, .10)',
        boxShadow3: '0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)'
    }), tf = '#FFF', nf = '#000', rf = '#000', lf = '#fff', af = '#fff', sf = '#fff', cf = '#fff', uf = '0.82', df = '0.72', pf = '0.38', ff = '0.24', hf = '0.18', mf = '0.6', gf = '0.5', vf = '0.2', bf = '.08', xf = '0', Cf = '0.25', yf = '0.4', Sf = '#36ad6a', wf = '#18a058', _f = '#0c7a43', zf = '#36ad6a', Tf = '#4098fc', Pf = '#2080f0', Ef = '#1060c9', kf = '#4098fc', Rf = '#de576d', Lf = '#d03050', Of = '#ab1f3f', Af = '#de576d', If = '#fcb040', $f = '#f0a020', Mf = '#c97c10', Hf = '#fcb040', Ff = '#36ad6a', Bf = '#18a058', Df = '#0c7a43', jf = '#36ad6a', Nf = Vi(tf), Wf = Vi(nf), Uf = 'rgba(' + Wf.slice(0, 3).join(', ') + ', ';
function Vf(e) {
    return Uf + String(e) + ')';
}
function Gf(e) {
    const o = Array.from(Wf);
    return o[3] = Number(e), Ki(Nf, o);
}
const qf = Object.assign(Object.assign({ name: 'common' }, _d), {
        baseColor: tf,
        primaryColor: wf,
        primaryColorHover: Sf,
        primaryColorPressed: _f,
        primaryColorSuppl: zf,
        infoColor: Pf,
        infoColorHover: Tf,
        infoColorPressed: Ef,
        infoColorSuppl: kf,
        successColor: Bf,
        successColorHover: Ff,
        successColorPressed: Df,
        successColorSuppl: jf,
        warningColor: $f,
        warningColorHover: If,
        warningColorPressed: Mf,
        warningColorSuppl: Hf,
        errorColor: Lf,
        errorColorHover: Rf,
        errorColorPressed: Of,
        errorColorSuppl: Af,
        textColorBase: rf,
        textColor1: 'rgb(31, 34, 37)',
        textColor2: 'rgb(51, 54, 57)',
        textColor3: 'rgb(118, 124, 130)',
        textColorDisabled: Gf(ff),
        placeholderColor: Gf(ff),
        placeholderColorDisabled: Gf(hf),
        iconColor: Gf(ff),
        iconColorHover: Xi(Gf(ff), { lightness: 0.75 }),
        iconColorPressed: Xi(Gf(ff), { lightness: 0.9 }),
        iconColorDisabled: Gf(hf),
        opacity1: uf,
        opacity2: df,
        opacity3: pf,
        opacity4: ff,
        opacity5: hf,
        dividerColor: 'rgb(239, 239, 245)',
        borderColor: 'rgb(224, 224, 230)',
        closeIconColor: Gf(Number(mf)),
        closeIconColorHover: Gf(Number(mf)),
        closeIconColorPressed: Gf(Number(mf)),
        closeColorHover: 'rgba(0, 0, 0, .09)',
        closeColorPressed: 'rgba(0, 0, 0, .13)',
        clearColor: Gf(ff),
        clearColorHover: Xi(Gf(ff), { lightness: 0.75 }),
        clearColorPressed: Xi(Gf(ff), { lightness: 0.9 }),
        scrollbarColor: Vf(Cf),
        scrollbarColorHover: Vf(yf),
        scrollbarWidth: '5px',
        scrollbarHeight: '5px',
        scrollbarBorderRadius: '5px',
        progressRailColor: Gf(bf),
        railColor: 'rgb(219, 219, 223)',
        popoverColor: lf,
        tableColor: af,
        cardColor: af,
        modalColor: sf,
        bodyColor: cf,
        tagColor: '#eee',
        avatarColor: Gf(vf),
        invertedColor: 'rgb(0, 20, 40)',
        inputColor: Gf(xf),
        codeColor: 'rgb(244, 244, 248)',
        tabColor: 'rgb(247, 247, 250)',
        actionColor: 'rgb(250, 250, 252)',
        tableHeaderColor: 'rgb(250, 250, 252)',
        hoverColor: 'rgb(243, 243, 245)',
        tableColorHover: 'rgba(0, 0, 100, 0.03)',
        tableColorStriped: 'rgba(0, 0, 100, 0.02)',
        pressedColor: 'rgb(237, 237, 239)',
        opacityDisabled: gf,
        inputColorDisabled: 'rgb(250, 250, 252)',
        buttonColor2: 'rgba(46, 51, 56, .05)',
        buttonColor2Hover: 'rgba(46, 51, 56, .09)',
        buttonColor2Pressed: 'rgba(46, 51, 56, .13)',
        boxShadow1: '0 1px 2px -2px rgba(0, 0, 0, .08), 0 3px 6px 0 rgba(0, 0, 0, .06), 0 5px 12px 4px rgba(0, 0, 0, .04)',
        boxShadow2: '0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05)',
        boxShadow3: '0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)'
    }), Kf = {
        iconSizeSmall: '34px',
        iconSizeMedium: '40px',
        iconSizeLarge: '46px',
        iconSizeHuge: '52px'
    }, Yf = e => {
        const {
            textColorDisabled: o,
            iconColor: t,
            textColor2: n,
            fontSizeSmall: r,
            fontSizeMedium: i,
            fontSizeLarge: l,
            fontSizeHuge: a
        } = e;
        return Object.assign(Object.assign({}, Kf), {
            fontSizeSmall: r,
            fontSizeMedium: i,
            fontSizeLarge: l,
            fontSizeHuge: a,
            textColor: o,
            iconColor: t,
            extraTextColor: n
        });
    }, Xf = {
        name: 'Empty',
        common: qf,
        self: Yf
    }, Jf = {
        name: 'Empty',
        common: of,
        self: Yf
    }, Zf = e => {
        const {
            scrollbarColor: o,
            scrollbarColorHover: t
        } = e;
        return {
            color: o,
            colorHover: t
        };
    }, Qf = {
        name: 'Scrollbar',
        common: qf,
        self: Zf
    }, eh = {
        name: 'Scrollbar',
        common: of,
        self: Zf
    }, {cubicBezierEaseInOut: oh} = _d;
function th({
    name: e = 'fade-in',
    enterDuration: o = '0.2s',
    leaveDuration: t = '0.2s',
    enterCubicBezier: n = oh,
    leaveCubicBezier: r = oh
} = {}) {
    return [
        Wl(`&.${ e }-transition-enter-active`, { transition: `all ${ o } ${ n }!important` }),
        Wl(`&.${ e }-transition-leave-active`, { transition: `all ${ t } ${ r }!important` }),
        Wl(`&.${ e }-transition-enter-from, &.${ e }-transition-leave-to`, { opacity: 0 }),
        Wl(`&.${ e }-transition-leave-from, &.${ e }-transition-enter-to`, { opacity: 1 })
    ];
}
const nh = Vl('scrollbar', '\n overflow: hidden;\n position: relative;\n z-index: auto;\n height: 100%;\n width: 100%;\n', [
        Wl('>', [Vl('scrollbar-container', '\n width: 100%;\n overflow: scroll;\n height: 100%;\n max-height: inherit;\n scrollbar-width: none;\n ', [
                Wl('&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb', '\n width: 0;\n height: 0;\n display: none;\n '),
                Wl('>', [Vl('scrollbar-content', '\n box-sizing: border-box;\n min-width: 100%;\n ')])
            ])]),
        Wl('>, +', [Vl('scrollbar-rail', '\n position: absolute;\n pointer-events: none;\n user-select: none;\n -webkit-user-select: none;\n ', [
                ql('horizontal', '\n left: 2px;\n right: 2px;\n bottom: 4px;\n height: var(--n-scrollbar-height);\n ', [Wl('>', [Gl('scrollbar', '\n height: var(--n-scrollbar-height);\n border-radius: var(--n-scrollbar-border-radius);\n right: 0;\n ')])]),
                ql('vertical', '\n right: 4px;\n top: 2px;\n bottom: 2px;\n width: var(--n-scrollbar-width);\n ', [Wl('>', [Gl('scrollbar', '\n width: var(--n-scrollbar-width);\n border-radius: var(--n-scrollbar-border-radius);\n bottom: 0;\n ')])]),
                ql('disabled', [Wl('>', [Gl('scrollbar', { pointerEvents: 'none' })])]),
                Wl('>', [Gl('scrollbar', '\n position: absolute;\n cursor: pointer;\n pointer-events: all;\n background-color: var(--n-scrollbar-color);\n transition: background-color .2s var(--n-scrollbar-bezier);\n ', [
                        th(),
                        Wl('&:hover', { backgroundColor: 'var(--n-scrollbar-color-hover)' })
                    ])])
            ])])
    ]), rh = Tt({
        name: 'Scrollbar',
        props: Object.assign(Object.assign({}, Ld.props), {
            size: {
                type: Number,
                default: 5
            },
            duration: {
                type: Number,
                default: 0
            },
            scrollable: {
                type: Boolean,
                default: true
            },
            xScrollable: Boolean,
            trigger: {
                type: String,
                default: 'hover'
            },
            useUnifiedContainer: Boolean,
            triggerDisplayManually: Boolean,
            container: Function,
            content: Function,
            containerClass: String,
            containerStyle: [
                String,
                Object
            ],
            contentClass: String,
            contentStyle: [
                String,
                Object
            ],
            horizontalRailStyle: [
                String,
                Object
            ],
            verticalRailStyle: [
                String,
                Object
            ],
            onScroll: Function,
            onWheel: Function,
            onResize: Function,
            internalOnUpdateScrollLeft: Function,
            internalHoistYRail: Boolean
        }),
        inheritAttrs: false,
        setup(e) {
            const {
                    mergedClsPrefixRef: o,
                    inlineThemeDisabled: t,
                    mergedRtlRef: n
                } = Ad(e), r = Md('Scrollbar', n, o), i = xo(null), l = xo(null), a = xo(null), s = xo(null), c = xo(null), u = xo(null), d = xo(null), p = xo(null), f = xo(null), h = xo(null), m = xo(null), g = xo(0), v = xo(0), b = xo(false), x = xo(false);
            let C, y, S = false, w = false, _ = 0, z = 0, T = 0, P = 0;
            const E = Ca, k = Er(() => {
                    const {value: o} = p, {value: t} = u, {value: n} = h;
                    return null === o || null === t || null === n ? 0 : Math.min(o, n * o / t + 1.5 * e.size);
                }), R = Er(() => `${ k.value }px`), L = Er(() => {
                    const {value: o} = f, {value: t} = d, {value: n} = m;
                    return null === o || null === t || null === n ? 0 : n * o / t + 1.5 * e.size;
                }), O = Er(() => `${ L.value }px`), A = Er(() => {
                    const {value: e} = p, {value: o} = g, {value: t} = u, {value: n} = h;
                    if (null === e || null === t || null === n) {
                        return 0;
                    }
                    {
                        const r = t - e;
                        return r ? o / r * (n - k.value) : 0;
                    }
                }), I = Er(() => `${ A.value }px`), $ = Er(() => {
                    const {value: e} = f, {value: o} = v, {value: t} = d, {value: n} = m;
                    if (null === e || null === t || null === n) {
                        return 0;
                    }
                    {
                        const r = t - e;
                        return r ? o / r * (n - L.value) : 0;
                    }
                }), M = Er(() => `${ $.value }px`), H = Er(() => {
                    const {value: e} = p, {value: o} = u;
                    return null !== e && null !== o && o > e;
                }), F = Er(() => {
                    const {value: e} = f, {value: o} = d;
                    return null !== e && null !== o && o > e;
                }), B = Er(() => {
                    const {trigger: o} = e;
                    return 'none' === o || b.value;
                }), D = Er(() => {
                    const {trigger: o} = e;
                    return 'none' === o || x.value;
                }), j = Er(() => {
                    const {container: o} = e;
                    return o ? o() : l.value;
                }), N = Er(() => {
                    const {content: o} = e;
                    return o ? o() : a.value;
                }), W = function (e) {
                    ;
                    let t = false;
                    return kt(() => {
                        false = false;
                        t ? e() : t = true;
                    }), Rt(() => {
                        false = true;
                        t || (t = true);
                    }), o;
                }(() => {
                    e.container || U({
                        top: g.value,
                        left: v.value
                    });
                }), U = (o, t) => {
                    if (!e.scrollable) {
                        return;
                    }
                    if ('number' == typeof o) {
                        return void V(null != t ? t : 0, o, 0, false, 'auto');
                    }
                    const {
                        left: n,
                        top: r,
                        index: i,
                        elSize: l,
                        position: a,
                        behavior: s,
                        el: c,
                        debounce: u = true
                    } = o;
                    void 0 === n && void 0 === r || V(null != n ? n : 0, null != r ? r : 0, 0, false, s);
                    void 0 !== c ? V(0, c.offsetTop, c.offsetHeight, u, s) : void 0 !== i && void 0 !== l ? V(0, i * l, l, u, s) : 'bottom' === a ? V(0, Number.MAX_SAFE_INTEGER, 0, false, s) : 'top' === a && V(0, 0, 0, false, s);
                };
            function V(e, o, t, n, r) {
                const {value: i} = j;
                if (i) {
                    if (n) {
                        const {
                            scrollTop: n,
                            offsetHeight: l
                        } = i;
                        if (o > n) {
                            return void (o + t <= n + l || i.scrollTo({
                                left: e,
                                top: o + t - l,
                                behavior: r
                            }));
                        }
                    }
                    i.scrollTo({
                        left: e,
                        top: o,
                        behavior: r
                    });
                }
            }
            function G() {
                !function () {
                    void 0 !== y && window.clearTimeout(y);
                    y = window.setTimeout(() => {
                        x.value = false;
                    }, e.duration);
                }();
                (function () {
                    void 0 !== C && window.clearTimeout(C);
                    C = window.setTimeout(() => {
                        b.value = false;
                    }, e.duration);
                }());
            }
            function q() {
                const {value: e} = j;
                e && (g.value = e.scrollTop, v.value = e.scrollLeft * ((null == r ? void 0 : r.value) ? -1 : 1));
            }
            function K() {
                const {value: e} = j;
                e && (g.value = e.scrollTop, v.value = e.scrollLeft * ((null == r ? void 0 : r.value) ? -1 : 1), p.value = e.offsetHeight, f.value = e.offsetWidth, u.value = e.scrollHeight, d.value = e.scrollWidth);
                const {value: o} = c, {value: t} = s;
                o && (m.value = o.offsetWidth);
                t && (h.value = t.offsetHeight);
            }
            function Y() {
                e.scrollable && (e.useUnifiedContainer ? K() : (!function () {
                    const {value: e} = N;
                    e && (u.value = e.offsetHeight, d.value = e.offsetWidth);
                    const {value: o} = j;
                    o && (p.value = o.offsetHeight, f.value = o.offsetWidth);
                    const {value: t} = c, {value: n} = s;
                    t && (m.value = t.offsetWidth);
                    n && (h.value = n.offsetHeight);
                }(), q()));
            }
            function X(e) {
                var o;
                return !(null === (o = i.value) || void 0 === o ? void 0 : o.contains(zi(e)));
            }
            function J(o) {
                if (!w) {
                    return;
                }
                void 0 !== C && window.clearTimeout(C);
                void 0 !== y && window.clearTimeout(y);
                const {value: t} = f, {value: n} = d, {value: i} = L;
                if (null === t || null === n) {
                    return;
                }
                const l = (null == r ? void 0 : r.value) ? window.innerWidth - o.clientX - T : o.clientX - T, a = n - t;
                let s = z + l * (n - t) / (t - i);
                s = Math.min(a, s);
                s = Math.max(s, 0);
                const {value: c} = j;
                if (c) {
                    c.scrollLeft = s * ((null == r ? void 0 : r.value) ? -1 : 1);
                    const {internalOnUpdateScrollLeft: o} = e;
                    o && o(s);
                }
            }
            function Z(e) {
                e.preventDefault();
                e.stopPropagation();
                sa('mousemove', window, J, true);
                sa('mouseup', window, Z, true);
                w = false;
                Y();
                X(e) && G();
            }
            function Q(e) {
                if (!S) {
                    return;
                }
                void 0 !== C && window.clearTimeout(C);
                void 0 !== y && window.clearTimeout(y);
                const {value: o} = p, {value: t} = u, {value: n} = k;
                if (null === o || null === t) {
                    return;
                }
                const r = e.clientY - P, i = t - o;
                let l = _ + r * (t - o) / (o - n);
                l = Math.min(i, l);
                l = Math.max(l, 0);
                const {value: a} = j;
                a && (a.scrollTop = l);
            }
            function ee(e) {
                e.preventDefault();
                e.stopPropagation();
                sa('mousemove', window, Q, true);
                sa('mouseup', window, ee, true);
                S = false;
                Y();
                X(e) && G();
            }
            ut(() => {
                const {value: e} = F, {value: t} = H, {value: n} = o, {value: r} = c, {value: i} = s;
                r && (e ? r.classList.remove(`${ n }-scrollbar-rail--disabled`) : r.classList.add(`${ n }-scrollbar-rail--disabled`));
                i && (t ? i.classList.remove(`${ n }-scrollbar-rail--disabled`) : i.classList.add(`${ n }-scrollbar-rail--disabled`));
            });
            Mt(() => {
                e.container || Y();
            });
            Bt(() => {
                void 0 !== C && window.clearTimeout(C);
                void 0 !== y && window.clearTimeout(y);
                sa('mousemove', window, Q, true);
                sa('mouseup', window, ee, true);
            });
            const oe = Ld('Scrollbar', '-scrollbar', nh, Qf, e, o), te = Er(() => {
                    const {
                        common: {
                            cubicBezierEaseInOut: e,
                            scrollbarBorderRadius: o,
                            scrollbarHeight: t,
                            scrollbarWidth: n
                        },
                        self: {
                            color: r,
                            colorHover: i
                        }
                    } = oe.value;
                    return {
                        '--n-scrollbar-bezier': e,
                        '--n-scrollbar-color': r,
                        '--n-scrollbar-color-hover': i,
                        '--n-scrollbar-border-radius': o,
                        '--n-scrollbar-width': n,
                        '--n-scrollbar-height': t
                    };
                }), ne = t ? $d('scrollbar', void 0, te, e) : void 0, re = {
                    scrollTo: U,
                    scrollBy: (o, t) => {
                        if (!e.scrollable) {
                            return;
                        }
                        const {value: n} = j;
                        n && ('object' == typeof o ? n.scrollBy(o) : n.scrollBy(o, t || 0));
                    },
                    sync: Y,
                    syncUnifiedContainer: K,
                    handleMouseEnterWrapper: function () {
                        !function () {
                            void 0 !== C && window.clearTimeout(C);
                            b.value = true;
                        }();
                        (function () {
                            void 0 !== y && window.clearTimeout(y);
                            x.value = true;
                        }());
                        Y();
                    },
                    handleMouseLeaveWrapper: function () {
                        G();
                    }
                };
            return Object.assign(Object.assign({}, re), {
                mergedClsPrefix: o,
                rtlEnabled: r,
                containerScrollTop: g,
                wrapperRef: i,
                containerRef: l,
                contentRef: a,
                yRailRef: s,
                xRailRef: c,
                needYBar: H,
                needXBar: F,
                yBarSizePx: R,
                xBarSizePx: O,
                yBarTopPx: I,
                xBarLeftPx: M,
                isShowXBar: B,
                isShowYBar: D,
                isIos: E,
                handleScroll: function (o) {
                    const {onScroll: t} = e;
                    t && t(o);
                    q();
                },
                handleContentResize: () => {
                    W.isDeactivated || Y();
                },
                handleContainerResize: o => {
                    if (W.isDeactivated) {
                        return;
                    }
                    const {onResize: t} = e;
                    t && t(o);
                    Y();
                },
                handleYScrollMouseDown: function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    S = true;
                    aa('mousemove', window, Q, true);
                    aa('mouseup', window, ee, true);
                    _ = g.value;
                    P = e.clientY;
                },
                handleXScrollMouseDown: function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    w = true;
                    aa('mousemove', window, J, true);
                    aa('mouseup', window, Z, true);
                    z = v.value;
                    T = (null == r ? void 0 : r.value) ? window.innerWidth - e.clientX : e.clientX;
                },
                cssVars: t ? void 0 : te,
                themeClass: null == ne ? void 0 : ne.themeClass,
                onRender: null == ne ? void 0 : ne.onRender
            });
        },
        render() {
            var e;
            const {
                $slots: o,
                mergedClsPrefix: t,
                triggerDisplayManually: n,
                rtlEnabled: r,
                internalHoistYRail: i
            } = this;
            if (!this.scrollable) {
                return null === (e = o.default) || void 0 === e ? void 0 : e.call(o);
            }
            const l = 'none' === this.trigger, a = () => kr('div', {
                    ref: 'yRailRef',
                    class: [
                        `${ t }-scrollbar-rail`,
                        `${ t }-scrollbar-rail--vertical`
                    ],
                    'data-scrollbar-rail': true,
                    style: this.verticalRailStyle,
                    'aria-hidden': true
                }, kr(l ? vl : Yr, l ? null : { name: 'fade-in-transition' }, {
                    default: () => this.needYBar && this.isShowYBar && !this.isIos ? kr('div', {
                        class: `${ t }-scrollbar-rail__scrollbar`,
                        style: {
                            height: this.yBarSizePx,
                            top: this.yBarTopPx
                        },
                        onMousedown: this.handleYScrollMouseDown
                    }) : null
                })), s = () => {
                    var e, s;
                    return null === (e = this.onRender) || void 0 === e || e.call(this), kr('div', hr(this.$attrs, {
                        role: 'none',
                        ref: 'wrapperRef',
                        class: [
                            `${ t }-scrollbar`,
                            this.themeClass,
                            r && `${ t }-scrollbar--rtl`
                        ],
                        style: this.cssVars,
                        onMouseenter: n ? void 0 : this.handleMouseEnterWrapper,
                        onMouseleave: n ? void 0 : this.handleMouseLeaveWrapper
                    }), [
                        this.container ? null === (s = o.default) || void 0 === s ? void 0 : s.call(o) : kr('div', {
                            role: 'none',
                            ref: 'containerRef',
                            class: [
                                `${ t }-scrollbar-container`,
                                this.containerClass
                            ],
                            style: this.containerStyle,
                            onScroll: this.handleScroll,
                            onWheel: this.onWheel
                        }, kr(Ts, { onResize: this.handleContentResize }, {
                            default: () => kr('div', {
                                ref: 'contentRef',
                                role: 'none',
                                style: [
                                    { width: this.xScrollable ? 'fit-content' : null },
                                    this.contentStyle
                                ],
                                class: [
                                    `${ t }-scrollbar-content`,
                                    this.contentClass
                                ]
                            }, o)
                        })),
                        i ? null : a(),
                        this.xScrollable && kr('div', {
                            ref: 'xRailRef',
                            class: [
                                `${ t }-scrollbar-rail`,
                                `${ t }-scrollbar-rail--horizontal`
                            ],
                            style: this.horizontalRailStyle,
                            'data-scrollbar-rail': true,
                            'aria-hidden': true
                        }, kr(l ? vl : Yr, l ? null : { name: 'fade-in-transition' }, {
                            default: () => this.needXBar && this.isShowXBar && !this.isIos ? kr('div', {
                                class: `${ t }-scrollbar-rail__scrollbar`,
                                style: {
                                    width: this.xBarSizePx,
                                    right: r ? this.xBarLeftPx : void 0,
                                    left: r ? void 0 : this.xBarLeftPx
                                },
                                onMousedown: this.handleXScrollMouseDown
                            }) : null
                        }))
                    ]);
                }, c = this.container ? s() : kr(Ts, { onResize: this.handleContainerResize }, { default: s });
            return i ? kr(Un, null, c, a()) : c;
        }
    }), ih = rh, lh = rh, ah = {
        height: 'calc(var(--n-option-height) * 7.6)',
        paddingSmall: '4px 0',
        paddingMedium: '4px 0',
        paddingLarge: '4px 0',
        paddingHuge: '4px 0',
        optionPaddingSmall: '0 12px',
        optionPaddingMedium: '0 12px',
        optionPaddingLarge: '0 12px',
        optionPaddingHuge: '0 12px',
        loadingSize: '18px'
    }, sh = e => {
        const {
            borderRadius: o,
            popoverColor: t,
            textColor3: n,
            dividerColor: r,
            textColor2: i,
            primaryColorPressed: l,
            textColorDisabled: a,
            primaryColor: s,
            opacityDisabled: c,
            hoverColor: u,
            fontSizeSmall: d,
            fontSizeMedium: p,
            fontSizeLarge: f,
            fontSizeHuge: h,
            heightSmall: m,
            heightMedium: g,
            heightLarge: v,
            heightHuge: b
        } = e;
        return Object.assign(Object.assign({}, ah), {
            optionFontSizeSmall: d,
            optionFontSizeMedium: p,
            optionFontSizeLarge: f,
            optionFontSizeHuge: h,
            optionHeightSmall: m,
            optionHeightMedium: g,
            optionHeightLarge: v,
            optionHeightHuge: b,
            borderRadius: o,
            color: t,
            groupHeaderTextColor: n,
            actionDividerColor: r,
            optionTextColor: i,
            optionTextColorPressed: l,
            optionTextColorDisabled: a,
            optionTextColorActive: s,
            optionOpacityDisabled: c,
            optionCheckColor: s,
            optionColorPending: u,
            optionColorActive: 'rgba(0, 0, 0, 0)',
            optionColorActivePending: u,
            actionTextColor: i,
            loadingColor: s
        });
    }, ch = {
        name: 'InternalSelectMenu',
        common: qf,
        peers: {
            Scrollbar: Qf,
            Empty: Xf
        },
        self: sh
    }, uh = {
        name: 'InternalSelectMenu',
        common: of,
        peers: {
            Scrollbar: eh,
            Empty: Jf
        },
        self: sh
    }, {
        cubicBezierEaseIn: dh,
        cubicBezierEaseOut: ph
    } = _d;
function fh({
    transformOrigin: e = 'inherit',
    duration: o = '.2s',
    enterScale: t = '.9',
    originalTransform: n = '',
    originalTransition: r = ''
} = {}) {
    return [
        Wl('&.fade-in-scale-up-transition-leave-active', {
            transformOrigin: e,
            transition: `opacity ${ o } ${ dh }, transform ${ o } ${ dh } ${ r && ',' + r }`
        }),
        Wl('&.fade-in-scale-up-transition-enter-active', {
            transformOrigin: e,
            transition: `opacity ${ o } ${ ph }, transform ${ o } ${ ph } ${ r && ',' + r }`
        }),
        Wl('&.fade-in-scale-up-transition-enter-from, &.fade-in-scale-up-transition-leave-to', {
            opacity: 0,
            transform: `${ n } scale(${ t })`
        }),
        Wl('&.fade-in-scale-up-transition-leave-from, &.fade-in-scale-up-transition-enter-to', {
            opacity: 1,
            transform: `${ n } scale(1)`
        })
    ];
}
const hh = Vl('base-wave', '\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n border-radius: inherit;\n'), mh = Tt({
        name: 'BaseWave',
        props: {
            clsPrefix: {
                type: String,
                required: true
            }
        },
        setup(e) {
            Id('-base-wave', hh, Po(e, 'clsPrefix'));
            const o = xo(null), t = xo(false);
            let n = null;
            return Bt(() => {
                null !== n && window.clearTimeout(n);
            }), {
                active: t,
                selfRef: o,
                play() {
                    null !== n && (window.clearTimeout(n), t.value = false, n = null);
                    Wo(() => {
                        var e;
                        null === (e = o.value) || void 0 === e || e.offsetHeight;
                        t.value = true;
                        n = window.setTimeout(() => {
                            t.value = false;
                            n = null;
                        }, 1000);
                    });
                }
            };
        },
        render() {
            const {clsPrefix: e} = this;
            return kr('div', {
                ref: 'selfRef',
                'aria-hidden': true,
                class: [
                    `${ e }-base-wave`,
                    this.active && `${ e }-base-wave--active`
                ]
            });
        }
    }), gh = {
        space: '6px',
        spaceArrow: '10px',
        arrowOffset: '10px',
        arrowOffsetVertical: '10px',
        arrowHeight: '6px',
        padding: '8px 14px'
    }, vh = e => {
        const {
            boxShadow2: o,
            popoverColor: t,
            textColor2: n,
            borderRadius: r,
            fontSize: i,
            dividerColor: l
        } = e;
        return Object.assign(Object.assign({}, gh), {
            fontSize: i,
            borderRadius: r,
            color: t,
            dividerColor: l,
            textColor: n,
            boxShadow: o
        });
    }, bh = {
        name: 'Popover',
        common: qf,
        self: vh
    }, xh = {
        name: 'Popover',
        common: of,
        self: vh
    }, Ch = {
        closeIconSizeTiny: '12px',
        closeIconSizeSmall: '12px',
        closeIconSizeMedium: '14px',
        closeIconSizeLarge: '14px',
        closeSizeTiny: '16px',
        closeSizeSmall: '16px',
        closeSizeMedium: '18px',
        closeSizeLarge: '18px',
        padding: '0 7px',
        closeMargin: '0 0 0 4px',
        closeMarginRtl: '0 4px 0 0'
    }, yh = {
        name: 'Tag',
        common: of,
        self(e) {
            const {
                textColor2: o,
                primaryColorHover: t,
                primaryColorPressed: n,
                primaryColor: r,
                infoColor: i,
                successColor: l,
                warningColor: a,
                errorColor: s,
                baseColor: c,
                borderColor: u,
                tagColor: d,
                opacityDisabled: p,
                closeIconColor: f,
                closeIconColorHover: h,
                closeIconColorPressed: m,
                closeColorHover: g,
                closeColorPressed: v,
                borderRadiusSmall: b,
                fontSizeMini: x,
                fontSizeTiny: C,
                fontSizeSmall: y,
                fontSizeMedium: S,
                heightMini: w,
                heightTiny: _,
                heightSmall: z,
                heightMedium: T,
                buttonColor2Hover: P,
                buttonColor2Pressed: E,
                fontWeightStrong: k
            } = e;
            return Object.assign(Object.assign({}, Ch), {
                closeBorderRadius: b,
                heightTiny: w,
                heightSmall: _,
                heightMedium: z,
                heightLarge: T,
                borderRadius: b,
                opacityDisabled: p,
                fontSizeTiny: x,
                fontSizeSmall: C,
                fontSizeMedium: y,
                fontSizeLarge: S,
                fontWeightStrong: k,
                textColorCheckable: o,
                textColorHoverCheckable: o,
                textColorPressedCheckable: o,
                textColorChecked: c,
                colorCheckable: '#0000',
                colorHoverCheckable: P,
                colorPressedCheckable: E,
                colorChecked: r,
                colorCheckedHover: t,
                colorCheckedPressed: n,
                border: `1px solid ${ u }`,
                textColor: o,
                color: d,
                colorBordered: '#0000',
                closeIconColor: f,
                closeIconColorHover: h,
                closeIconColorPressed: m,
                closeColorHover: g,
                closeColorPressed: v,
                borderPrimary: `1px solid ${ Yi(r, { alpha: 0.3 }) }`,
                textColorPrimary: r,
                colorPrimary: Yi(r, { alpha: 0.16 }),
                colorBorderedPrimary: '#0000',
                closeIconColorPrimary: Xi(r, { lightness: 0.7 }),
                closeIconColorHoverPrimary: Xi(r, { lightness: 0.7 }),
                closeIconColorPressedPrimary: Xi(r, { lightness: 0.7 }),
                closeColorHoverPrimary: Yi(r, { alpha: 0.16 }),
                closeColorPressedPrimary: Yi(r, { alpha: 0.12 }),
                borderInfo: `1px solid ${ Yi(i, { alpha: 0.3 }) }`,
                textColorInfo: i,
                colorInfo: Yi(i, { alpha: 0.16 }),
                colorBorderedInfo: '#0000',
                closeIconColorInfo: Xi(i, { alpha: 0.7 }),
                closeIconColorHoverInfo: Xi(i, { alpha: 0.7 }),
                closeIconColorPressedInfo: Xi(i, { alpha: 0.7 }),
                closeColorHoverInfo: Yi(i, { alpha: 0.16 }),
                closeColorPressedInfo: Yi(i, { alpha: 0.12 }),
                borderSuccess: `1px solid ${ Yi(l, { alpha: 0.3 }) }`,
                textColorSuccess: l,
                colorSuccess: Yi(l, { alpha: 0.16 }),
                colorBorderedSuccess: '#0000',
                closeIconColorSuccess: Xi(l, { alpha: 0.7 }),
                closeIconColorHoverSuccess: Xi(l, { alpha: 0.7 }),
                closeIconColorPressedSuccess: Xi(l, { alpha: 0.7 }),
                closeColorHoverSuccess: Yi(l, { alpha: 0.16 }),
                closeColorPressedSuccess: Yi(l, { alpha: 0.12 }),
                borderWarning: `1px solid ${ Yi(a, { alpha: 0.3 }) }`,
                textColorWarning: a,
                colorWarning: Yi(a, { alpha: 0.16 }),
                colorBorderedWarning: '#0000',
                closeIconColorWarning: Xi(a, { alpha: 0.7 }),
                closeIconColorHoverWarning: Xi(a, { alpha: 0.7 }),
                closeIconColorPressedWarning: Xi(a, { alpha: 0.7 }),
                closeColorHoverWarning: Yi(a, { alpha: 0.16 }),
                closeColorPressedWarning: Yi(a, { alpha: 0.11 }),
                borderError: `1px solid ${ Yi(s, { alpha: 0.3 }) }`,
                textColorError: s,
                colorError: Yi(s, { alpha: 0.16 }),
                colorBorderedError: '#0000',
                closeIconColorError: Xi(s, { alpha: 0.7 }),
                closeIconColorHoverError: Xi(s, { alpha: 0.7 }),
                closeIconColorPressedError: Xi(s, { alpha: 0.7 }),
                closeColorHoverError: Yi(s, { alpha: 0.16 }),
                closeColorPressedError: Yi(s, { alpha: 0.12 })
            });
        }
    }, Sh = {
        paddingSingle: '0 26px 0 12px',
        paddingMultiple: '3px 26px 0 12px',
        clearSize: '16px',
        arrowSize: '16px'
    }, wh = {
        name: 'InternalSelection',
        common: qf,
        peers: { Popover: bh },
        self: e => {
            const {
                borderRadius: o,
                textColor2: t,
                textColorDisabled: n,
                inputColor: r,
                inputColorDisabled: i,
                primaryColor: l,
                primaryColorHover: a,
                warningColor: s,
                warningColorHover: c,
                errorColor: u,
                errorColorHover: d,
                borderColor: p,
                iconColor: f,
                iconColorDisabled: h,
                clearColor: m,
                clearColorHover: g,
                clearColorPressed: v,
                placeholderColor: b,
                placeholderColorDisabled: x,
                fontSizeTiny: C,
                fontSizeSmall: y,
                fontSizeMedium: S,
                fontSizeLarge: w,
                heightTiny: _,
                heightSmall: z,
                heightMedium: T,
                heightLarge: P
            } = e;
            return Object.assign(Object.assign({}, Sh), {
                fontSizeTiny: C,
                fontSizeSmall: y,
                fontSizeMedium: S,
                fontSizeLarge: w,
                heightTiny: _,
                heightSmall: z,
                heightMedium: T,
                heightLarge: P,
                borderRadius: o,
                textColor: t,
                textColorDisabled: n,
                placeholderColor: b,
                placeholderColorDisabled: x,
                color: r,
                colorDisabled: i,
                colorActive: r,
                border: `1px solid ${ p }`,
                borderHover: `1px solid ${ a }`,
                borderActive: `1px solid ${ l }`,
                borderFocus: `1px solid ${ a }`,
                boxShadowHover: 'none',
                boxShadowActive: `0 0 0 2px ${ Yi(l, { alpha: 0.2 }) }`,
                boxShadowFocus: `0 0 0 2px ${ Yi(l, { alpha: 0.2 }) }`,
                caretColor: l,
                arrowColor: f,
                arrowColorDisabled: h,
                loadingColor: l,
                borderWarning: `1px solid ${ s }`,
                borderHoverWarning: `1px solid ${ c }`,
                borderActiveWarning: `1px solid ${ s }`,
                borderFocusWarning: `1px solid ${ c }`,
                boxShadowHoverWarning: 'none',
                boxShadowActiveWarning: `0 0 0 2px ${ Yi(s, { alpha: 0.2 }) }`,
                boxShadowFocusWarning: `0 0 0 2px ${ Yi(s, { alpha: 0.2 }) }`,
                colorActiveWarning: r,
                caretColorWarning: s,
                borderError: `1px solid ${ u }`,
                borderHoverError: `1px solid ${ d }`,
                borderActiveError: `1px solid ${ u }`,
                borderFocusError: `1px solid ${ d }`,
                boxShadowHoverError: 'none',
                boxShadowActiveError: `0 0 0 2px ${ Yi(u, { alpha: 0.2 }) }`,
                boxShadowFocusError: `0 0 0 2px ${ Yi(u, { alpha: 0.2 }) }`,
                colorActiveError: r,
                caretColorError: u,
                clearColor: m,
                clearColorHover: g,
                clearColorPressed: v
            });
        }
    }, _h = {
        name: 'InternalSelection',
        common: of,
        peers: { Popover: xh },
        self(e) {
            const {
                borderRadius: o,
                textColor2: t,
                textColorDisabled: n,
                inputColor: r,
                inputColorDisabled: i,
                primaryColor: l,
                primaryColorHover: a,
                warningColor: s,
                warningColorHover: c,
                errorColor: u,
                errorColorHover: d,
                iconColor: p,
                iconColorDisabled: f,
                clearColor: h,
                clearColorHover: m,
                clearColorPressed: g,
                placeholderColor: v,
                placeholderColorDisabled: b,
                fontSizeTiny: x,
                fontSizeSmall: C,
                fontSizeMedium: y,
                fontSizeLarge: S,
                heightTiny: w,
                heightSmall: _,
                heightMedium: z,
                heightLarge: T
            } = e;
            return Object.assign(Object.assign({}, Sh), {
                fontSizeTiny: x,
                fontSizeSmall: C,
                fontSizeMedium: y,
                fontSizeLarge: S,
                heightTiny: w,
                heightSmall: _,
                heightMedium: z,
                heightLarge: T,
                borderRadius: o,
                textColor: t,
                textColorDisabled: n,
                placeholderColor: v,
                placeholderColorDisabled: b,
                color: r,
                colorDisabled: i,
                colorActive: Yi(l, { alpha: 0.1 }),
                border: '1px solid #0000',
                borderHover: `1px solid ${ a }`,
                borderActive: `1px solid ${ l }`,
                borderFocus: `1px solid ${ a }`,
                boxShadowHover: 'none',
                boxShadowActive: `0 0 8px 0 ${ Yi(l, { alpha: 0.4 }) }`,
                boxShadowFocus: `0 0 8px 0 ${ Yi(l, { alpha: 0.4 }) }`,
                caretColor: l,
                arrowColor: p,
                arrowColorDisabled: f,
                loadingColor: l,
                borderWarning: `1px solid ${ s }`,
                borderHoverWarning: `1px solid ${ c }`,
                borderActiveWarning: `1px solid ${ s }`,
                borderFocusWarning: `1px solid ${ c }`,
                boxShadowHoverWarning: 'none',
                boxShadowActiveWarning: `0 0 8px 0 ${ Yi(s, { alpha: 0.4 }) }`,
                boxShadowFocusWarning: `0 0 8px 0 ${ Yi(s, { alpha: 0.4 }) }`,
                colorActiveWarning: Yi(s, { alpha: 0.1 }),
                caretColorWarning: s,
                borderError: `1px solid ${ u }`,
                borderHoverError: `1px solid ${ d }`,
                borderActiveError: `1px solid ${ u }`,
                borderFocusError: `1px solid ${ d }`,
                boxShadowHoverError: 'none',
                boxShadowActiveError: `0 0 8px 0 ${ Yi(u, { alpha: 0.4 }) }`,
                boxShadowFocusError: `0 0 8px 0 ${ Yi(u, { alpha: 0.4 }) }`,
                colorActiveError: Yi(u, { alpha: 0.1 }),
                caretColorError: u,
                clearColor: h,
                clearColorHover: m,
                clearColorPressed: g
            });
        }
    }, {cubicBezierEaseInOut: zh} = _d;
function Th({
    duration: e = '.2s',
    delay: o = '.1s'
} = {}) {
    return [
        Wl('&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to', { opacity: 1 }),
        Wl('&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from', '\n opacity: 0!important;\n margin-left: 0!important;\n margin-right: 0!important;\n '),
        Wl('&.fade-in-width-expand-transition-leave-active', `\n overflow: hidden;\n transition:\n opacity ${ e } ${ zh },\n max-width ${ e } ${ zh } ${ o },\n margin-left ${ e } ${ zh } ${ o },\n margin-right ${ e } ${ zh } ${ o };\n `),
        Wl('&.fade-in-width-expand-transition-enter-active', `\n overflow: hidden;\n transition:\n opacity ${ e } ${ zh } ${ o },\n max-width ${ e } ${ zh },\n margin-left ${ e } ${ zh },\n margin-right ${ e } ${ zh };\n `)
    ];
}
const Ph = {
        iconMargin: '11px 8px 0 12px',
        iconMarginRtl: '11px 12px 0 8px',
        iconSize: '24px',
        closeIconSize: '16px',
        closeSize: '20px',
        closeMargin: '13px 14px 0 0',
        closeMarginRtl: '13px 0 0 14px',
        padding: '13px'
    }, Eh = {
        name: 'Alert',
        common: of,
        self(e) {
            const {
                lineHeight: o,
                borderRadius: t,
                fontWeightStrong: n,
                dividerColor: r,
                inputColor: i,
                textColor1: l,
                textColor2: a,
                closeColorHover: s,
                closeColorPressed: c,
                closeIconColor: u,
                closeIconColorHover: d,
                closeIconColorPressed: p,
                infoColorSuppl: f,
                successColorSuppl: h,
                warningColorSuppl: m,
                errorColorSuppl: g,
                fontSize: v
            } = e;
            return Object.assign(Object.assign({}, Ph), {
                fontSize: v,
                lineHeight: o,
                titleFontWeight: n,
                borderRadius: t,
                border: `1px solid ${ r }`,
                color: i,
                titleTextColor: l,
                iconColor: a,
                contentTextColor: a,
                closeBorderRadius: t,
                closeColorHover: s,
                closeColorPressed: c,
                closeIconColor: u,
                closeIconColorHover: d,
                closeIconColorPressed: p,
                borderInfo: `1px solid ${ Yi(f, { alpha: 0.35 }) }`,
                colorInfo: Yi(f, { alpha: 0.25 }),
                titleTextColorInfo: l,
                iconColorInfo: f,
                contentTextColorInfo: a,
                closeColorHoverInfo: s,
                closeColorPressedInfo: c,
                closeIconColorInfo: u,
                closeIconColorHoverInfo: d,
                closeIconColorPressedInfo: p,
                borderSuccess: `1px solid ${ Yi(h, { alpha: 0.35 }) }`,
                colorSuccess: Yi(h, { alpha: 0.25 }),
                titleTextColorSuccess: l,
                iconColorSuccess: h,
                contentTextColorSuccess: a,
                closeColorHoverSuccess: s,
                closeColorPressedSuccess: c,
                closeIconColorSuccess: u,
                closeIconColorHoverSuccess: d,
                closeIconColorPressedSuccess: p,
                borderWarning: `1px solid ${ Yi(m, { alpha: 0.35 }) }`,
                colorWarning: Yi(m, { alpha: 0.25 }),
                titleTextColorWarning: l,
                iconColorWarning: m,
                contentTextColorWarning: a,
                closeColorHoverWarning: s,
                closeColorPressedWarning: c,
                closeIconColorWarning: u,
                closeIconColorHoverWarning: d,
                closeIconColorPressedWarning: p,
                borderError: `1px solid ${ Yi(g, { alpha: 0.35 }) }`,
                colorError: Yi(g, { alpha: 0.25 }),
                titleTextColorError: l,
                iconColorError: g,
                contentTextColorError: a,
                closeColorHoverError: s,
                closeColorPressedError: c,
                closeIconColorError: u,
                closeIconColorHoverError: d,
                closeIconColorPressedError: p
            });
        }
    }, {
        cubicBezierEaseInOut: kh,
        cubicBezierEaseOut: Rh,
        cubicBezierEaseIn: Lh
    } = _d;
function Oh({
    overflow: e = 'hidden',
    duration: o = '.3s',
    originalTransition: t = '',
    leavingDelay: n = '0s',
    foldPadding: r = false,
    enterToProps: i,
    leaveToProps: l,
    reverse: a = false
} = {}) {
    const s = a ? 'leave' : 'enter', c = a ? 'enter' : 'leave';
    return [
        Wl(`&.fade-in-height-expand-transition-${ c }-from,\n &.fade-in-height-expand-transition-${ s }-to`, Object.assign(Object.assign({}, i), { opacity: 1 })),
        Wl(`&.fade-in-height-expand-transition-${ c }-to,\n &.fade-in-height-expand-transition-${ s }-from`, Object.assign(Object.assign({}, l), {
            opacity: 0,
            marginTop: '0 !important',
            marginBottom: '0 !important',
            paddingTop: r ? '0 !important' : void 0,
            paddingBottom: r ? '0 !important' : void 0
        })),
        Wl(`&.fade-in-height-expand-transition-${ c }-active`, `\n overflow: ${ e };\n transition:\n max-height ${ o } ${ kh } ${ n },\n opacity ${ o } ${ Rh } ${ n },\n margin-top ${ o } ${ kh } ${ n },\n margin-bottom ${ o } ${ kh } ${ n },\n padding-top ${ o } ${ kh } ${ n },\n padding-bottom ${ o } ${ kh } ${ n }\n ${ t ? ',' + t : '' }\n `),
        Wl(`&.fade-in-height-expand-transition-${ s }-active`, `\n overflow: ${ e };\n transition:\n max-height ${ o } ${ kh },\n opacity ${ o } ${ Lh },\n margin-top ${ o } ${ kh },\n margin-bottom ${ o } ${ kh },\n padding-top ${ o } ${ kh },\n padding-bottom ${ o } ${ kh }\n ${ t ? ',' + t : '' }\n `)
    ];
}
const Ah = {
        linkFontSize: '13px',
        linkPadding: '0 0 0 16px',
        railWidth: '4px'
    }, Ih = {
        name: 'Anchor',
        common: of,
        self: e => {
            const {
                borderRadius: o,
                railColor: t,
                primaryColor: n,
                primaryColorHover: r,
                primaryColorPressed: i,
                textColor2: l
            } = e;
            return Object.assign(Object.assign({}, Ah), {
                borderRadius: o,
                railColor: t,
                railColorActive: n,
                linkColor: Yi(n, { alpha: 0.15 }),
                linkTextColor: l,
                linkTextColorHover: r,
                linkTextColorPressed: i,
                linkTextColorActive: n
            });
        }
    }, $h = Zl && 'chrome' in window;
Zl && navigator.userAgent.includes('Firefox');
const Mh = Zl && navigator.userAgent.includes('Safari') && !$h, Hh = {
        paddingTiny: '0 8px',
        paddingSmall: '0 10px',
        paddingMedium: '0 12px',
        paddingLarge: '0 14px',
        clearSize: '16px'
    }, Fh = {
        name: 'Input',
        common: of,
        self(e) {
            const {
                textColor2: o,
                textColor3: t,
                textColorDisabled: n,
                primaryColor: r,
                primaryColorHover: i,
                inputColor: l,
                inputColorDisabled: a,
                warningColor: s,
                warningColorHover: c,
                errorColor: u,
                errorColorHover: d,
                borderRadius: p,
                lineHeight: f,
                fontSizeTiny: h,
                fontSizeSmall: m,
                fontSizeMedium: g,
                fontSizeLarge: v,
                heightTiny: b,
                heightSmall: x,
                heightMedium: C,
                heightLarge: y,
                clearColor: S,
                clearColorHover: w,
                clearColorPressed: _,
                placeholderColor: z,
                placeholderColorDisabled: T,
                iconColor: P,
                iconColorDisabled: E,
                iconColorHover: k,
                iconColorPressed: R
            } = e;
            return Object.assign(Object.assign({}, Hh), {
                countTextColorDisabled: n,
                countTextColor: t,
                heightTiny: b,
                heightSmall: x,
                heightMedium: C,
                heightLarge: y,
                fontSizeTiny: h,
                fontSizeSmall: m,
                fontSizeMedium: g,
                fontSizeLarge: v,
                lineHeight: f,
                lineHeightTextarea: f,
                borderRadius: p,
                iconSize: '16px',
                groupLabelColor: l,
                textColor: o,
                textColorDisabled: n,
                textDecorationColor: o,
                groupLabelTextColor: o,
                caretColor: r,
                placeholderColor: z,
                placeholderColorDisabled: T,
                color: l,
                colorDisabled: a,
                colorFocus: Yi(r, { alpha: 0.1 }),
                groupLabelBorder: '1px solid #0000',
                border: '1px solid #0000',
                borderHover: `1px solid ${ i }`,
                borderDisabled: '1px solid #0000',
                borderFocus: `1px solid ${ i }`,
                boxShadowFocus: `0 0 8px 0 ${ Yi(r, { alpha: 0.3 }) }`,
                loadingColor: r,
                loadingColorWarning: s,
                borderWarning: `1px solid ${ s }`,
                borderHoverWarning: `1px solid ${ c }`,
                colorFocusWarning: Yi(s, { alpha: 0.1 }),
                borderFocusWarning: `1px solid ${ c }`,
                boxShadowFocusWarning: `0 0 8px 0 ${ Yi(s, { alpha: 0.3 }) }`,
                caretColorWarning: s,
                loadingColorError: u,
                borderError: `1px solid ${ u }`,
                borderHoverError: `1px solid ${ d }`,
                colorFocusError: Yi(u, { alpha: 0.1 }),
                borderFocusError: `1px solid ${ d }`,
                boxShadowFocusError: `0 0 8px 0 ${ Yi(u, { alpha: 0.3 }) }`,
                caretColorError: u,
                clearColor: S,
                clearColorHover: w,
                clearColorPressed: _,
                iconColor: P,
                iconColorDisabled: E,
                iconColorHover: k,
                iconColorPressed: R,
                suffixTextColor: o
            });
        }
    }, Bh = {
        name: 'Input',
        common: qf,
        self: e => {
            const {
                textColor2: o,
                textColor3: t,
                textColorDisabled: n,
                primaryColor: r,
                primaryColorHover: i,
                inputColor: l,
                inputColorDisabled: a,
                borderColor: s,
                warningColor: c,
                warningColorHover: u,
                errorColor: d,
                errorColorHover: p,
                borderRadius: f,
                lineHeight: h,
                fontSizeTiny: m,
                fontSizeSmall: g,
                fontSizeMedium: v,
                fontSizeLarge: b,
                heightTiny: x,
                heightSmall: C,
                heightMedium: y,
                heightLarge: S,
                actionColor: w,
                clearColor: _,
                clearColorHover: z,
                clearColorPressed: T,
                placeholderColor: P,
                placeholderColorDisabled: E,
                iconColor: k,
                iconColorDisabled: R,
                iconColorHover: L,
                iconColorPressed: O
            } = e;
            return Object.assign(Object.assign({}, Hh), {
                countTextColorDisabled: n,
                countTextColor: t,
                heightTiny: x,
                heightSmall: C,
                heightMedium: y,
                heightLarge: S,
                fontSizeTiny: m,
                fontSizeSmall: g,
                fontSizeMedium: v,
                fontSizeLarge: b,
                lineHeight: h,
                lineHeightTextarea: h,
                borderRadius: f,
                iconSize: '16px',
                groupLabelColor: w,
                groupLabelTextColor: o,
                textColor: o,
                textColorDisabled: n,
                textDecorationColor: o,
                caretColor: r,
                placeholderColor: P,
                placeholderColorDisabled: E,
                color: l,
                colorDisabled: a,
                colorFocus: l,
                groupLabelBorder: `1px solid ${ s }`,
                border: `1px solid ${ s }`,
                borderHover: `1px solid ${ i }`,
                borderDisabled: `1px solid ${ s }`,
                borderFocus: `1px solid ${ i }`,
                boxShadowFocus: `0 0 0 2px ${ Yi(r, { alpha: 0.2 }) }`,
                loadingColor: r,
                loadingColorWarning: c,
                borderWarning: `1px solid ${ c }`,
                borderHoverWarning: `1px solid ${ u }`,
                colorFocusWarning: l,
                borderFocusWarning: `1px solid ${ u }`,
                boxShadowFocusWarning: `0 0 0 2px ${ Yi(c, { alpha: 0.2 }) }`,
                caretColorWarning: c,
                loadingColorError: d,
                borderError: `1px solid ${ d }`,
                borderHoverError: `1px solid ${ p }`,
                colorFocusError: l,
                borderFocusError: `1px solid ${ p }`,
                boxShadowFocusError: `0 0 0 2px ${ Yi(d, { alpha: 0.2 }) }`,
                caretColorError: d,
                clearColor: _,
                clearColorHover: z,
                clearColorPressed: T,
                iconColor: k,
                iconColorDisabled: R,
                iconColorHover: L,
                iconColorPressed: O,
                suffixTextColor: o
            });
        }
    };
const Dh = {
        name: 'AutoComplete',
        common: of,
        peers: {
            InternalSelectMenu: uh,
            Input: Fh
        },
        self: function (e) {
            const {boxShadow2: o} = e;
            return { menuBoxShadow: o };
        }
    }, jh = {
        name: 'Avatar',
        common: of,
        self: e => {
            const {
                borderRadius: o,
                avatarColor: t,
                cardColor: n,
                fontSize: r,
                heightTiny: i,
                heightSmall: l,
                heightMedium: a,
                heightLarge: s,
                heightHuge: c,
                modalColor: u,
                popoverColor: d
            } = e;
            return {
                borderRadius: o,
                fontSize: r,
                border: `2px solid ${ n }`,
                heightTiny: i,
                heightSmall: l,
                heightMedium: a,
                heightLarge: s,
                heightHuge: c,
                color: Ki(n, t),
                colorModal: Ki(u, t),
                colorPopover: Ki(d, t)
            };
        }
    }, Nh = {
        name: 'AvatarGroup',
        common: of,
        peers: { Avatar: jh },
        self: () => ({ gap: '-12px' })
    }, Wh = {
        width: '44px',
        height: '44px',
        borderRadius: '22px',
        iconSize: '26px'
    }, Uh = {
        name: 'BackTop',
        common: of,
        self(e) {
            const {
                popoverColor: o,
                textColor2: t,
                primaryColorHover: n,
                primaryColorPressed: r
            } = e;
            return Object.assign(Object.assign({}, Wh), {
                color: o,
                textColor: t,
                iconColor: t,
                iconColorHover: n,
                iconColorPressed: r,
                boxShadow: '0 2px 8px 0px rgba(0, 0, 0, .12)',
                boxShadowHover: '0 2px 12px 0px rgba(0, 0, 0, .18)',
                boxShadowPressed: '0 2px 12px 0px rgba(0, 0, 0, .18)'
            });
        }
    }, Vh = {
        name: 'Badge',
        common: of,
        self(e) {
            const {
                errorColorSuppl: o,
                infoColorSuppl: t,
                successColorSuppl: n,
                warningColorSuppl: r,
                fontFamily: i
            } = e;
            return {
                color: o,
                colorInfo: t,
                colorSuccess: n,
                colorError: o,
                colorWarning: r,
                fontSize: '12px',
                fontFamily: i
            };
        }
    }, Gh = { fontWeightActive: '400' }, qh = {
        name: 'Breadcrumb',
        common: of,
        self: e => {
            const {
                fontSize: o,
                textColor3: t,
                textColor2: n,
                borderRadius: r,
                buttonColor2Hover: i,
                buttonColor2Pressed: l
            } = e;
            return Object.assign(Object.assign({}, Gh), {
                fontSize: o,
                itemLineHeight: '1.25',
                itemTextColor: t,
                itemTextColorHover: n,
                itemTextColorPressed: n,
                itemTextColorActive: n,
                itemBorderRadius: r,
                itemColorHover: i,
                itemColorPressed: l,
                separatorColor: t
            });
        }
    };
function Kh(e) {
    return Ki(e, [
        255,
        255,
        255,
        0.16
    ]);
}
function Yh(e) {
    return Ki(e, [
        0,
        0,
        0,
        0.12
    ]);
}
const Xh = {
        paddingTiny: '0 6px',
        paddingSmall: '0 10px',
        paddingMedium: '0 14px',
        paddingLarge: '0 18px',
        paddingRoundTiny: '0 10px',
        paddingRoundSmall: '0 14px',
        paddingRoundMedium: '0 18px',
        paddingRoundLarge: '0 22px',
        iconMarginTiny: '6px',
        iconMarginSmall: '6px',
        iconMarginMedium: '6px',
        iconMarginLarge: '6px',
        iconSizeTiny: '14px',
        iconSizeSmall: '18px',
        iconSizeMedium: '18px',
        iconSizeLarge: '20px',
        rippleDuration: '.6s'
    }, Jh = e => {
        const {
            heightTiny: o,
            heightSmall: t,
            heightMedium: n,
            heightLarge: r,
            borderRadius: i,
            fontSizeTiny: l,
            fontSizeSmall: a,
            fontSizeMedium: s,
            fontSizeLarge: c,
            opacityDisabled: u,
            textColor2: d,
            textColor3: p,
            primaryColorHover: f,
            primaryColorPressed: h,
            borderColor: m,
            primaryColor: g,
            baseColor: v,
            infoColor: b,
            infoColorHover: x,
            infoColorPressed: C,
            successColor: y,
            successColorHover: S,
            successColorPressed: w,
            warningColor: _,
            warningColorHover: z,
            warningColorPressed: T,
            errorColor: P,
            errorColorHover: E,
            errorColorPressed: k,
            fontWeight: R,
            buttonColor2: L,
            buttonColor2Hover: O,
            buttonColor2Pressed: A,
            fontWeightStrong: I
        } = e;
        return Object.assign(Object.assign({}, Xh), {
            heightTiny: o,
            heightSmall: t,
            heightMedium: n,
            heightLarge: r,
            borderRadiusTiny: i,
            borderRadiusSmall: i,
            borderRadiusMedium: i,
            borderRadiusLarge: i,
            fontSizeTiny: l,
            fontSizeSmall: a,
            fontSizeMedium: s,
            fontSizeLarge: c,
            opacityDisabled: u,
            colorOpacitySecondary: '0.16',
            colorOpacitySecondaryHover: '0.22',
            colorOpacitySecondaryPressed: '0.28',
            colorSecondary: L,
            colorSecondaryHover: O,
            colorSecondaryPressed: A,
            colorTertiary: L,
            colorTertiaryHover: O,
            colorTertiaryPressed: A,
            colorQuaternary: '#0000',
            colorQuaternaryHover: O,
            colorQuaternaryPressed: A,
            color: '#0000',
            colorHover: '#0000',
            colorPressed: '#0000',
            colorFocus: '#0000',
            colorDisabled: '#0000',
            textColor: d,
            textColorTertiary: p,
            textColorHover: f,
            textColorPressed: h,
            textColorFocus: f,
            textColorDisabled: d,
            textColorText: d,
            textColorTextHover: f,
            textColorTextPressed: h,
            textColorTextFocus: f,
            textColorTextDisabled: d,
            textColorGhost: d,
            textColorGhostHover: f,
            textColorGhostPressed: h,
            textColorGhostFocus: f,
            textColorGhostDisabled: d,
            border: `1px solid ${ m }`,
            borderHover: `1px solid ${ f }`,
            borderPressed: `1px solid ${ h }`,
            borderFocus: `1px solid ${ f }`,
            borderDisabled: `1px solid ${ m }`,
            rippleColor: g,
            colorPrimary: g,
            colorHoverPrimary: f,
            colorPressedPrimary: h,
            colorFocusPrimary: f,
            colorDisabledPrimary: g,
            textColorPrimary: v,
            textColorHoverPrimary: v,
            textColorPressedPrimary: v,
            textColorFocusPrimary: v,
            textColorDisabledPrimary: v,
            textColorTextPrimary: g,
            textColorTextHoverPrimary: f,
            textColorTextPressedPrimary: h,
            textColorTextFocusPrimary: f,
            textColorTextDisabledPrimary: d,
            textColorGhostPrimary: g,
            textColorGhostHoverPrimary: f,
            textColorGhostPressedPrimary: h,
            textColorGhostFocusPrimary: f,
            textColorGhostDisabledPrimary: g,
            borderPrimary: `1px solid ${ g }`,
            borderHoverPrimary: `1px solid ${ f }`,
            borderPressedPrimary: `1px solid ${ h }`,
            borderFocusPrimary: `1px solid ${ f }`,
            borderDisabledPrimary: `1px solid ${ g }`,
            rippleColorPrimary: g,
            colorInfo: b,
            colorHoverInfo: x,
            colorPressedInfo: C,
            colorFocusInfo: x,
            colorDisabledInfo: b,
            textColorInfo: v,
            textColorHoverInfo: v,
            textColorPressedInfo: v,
            textColorFocusInfo: v,
            textColorDisabledInfo: v,
            textColorTextInfo: b,
            textColorTextHoverInfo: x,
            textColorTextPressedInfo: C,
            textColorTextFocusInfo: x,
            textColorTextDisabledInfo: d,
            textColorGhostInfo: b,
            textColorGhostHoverInfo: x,
            textColorGhostPressedInfo: C,
            textColorGhostFocusInfo: x,
            textColorGhostDisabledInfo: b,
            borderInfo: `1px solid ${ b }`,
            borderHoverInfo: `1px solid ${ x }`,
            borderPressedInfo: `1px solid ${ C }`,
            borderFocusInfo: `1px solid ${ x }`,
            borderDisabledInfo: `1px solid ${ b }`,
            rippleColorInfo: b,
            colorSuccess: y,
            colorHoverSuccess: S,
            colorPressedSuccess: w,
            colorFocusSuccess: S,
            colorDisabledSuccess: y,
            textColorSuccess: v,
            textColorHoverSuccess: v,
            textColorPressedSuccess: v,
            textColorFocusSuccess: v,
            textColorDisabledSuccess: v,
            textColorTextSuccess: y,
            textColorTextHoverSuccess: S,
            textColorTextPressedSuccess: w,
            textColorTextFocusSuccess: S,
            textColorTextDisabledSuccess: d,
            textColorGhostSuccess: y,
            textColorGhostHoverSuccess: S,
            textColorGhostPressedSuccess: w,
            textColorGhostFocusSuccess: S,
            textColorGhostDisabledSuccess: y,
            borderSuccess: `1px solid ${ y }`,
            borderHoverSuccess: `1px solid ${ S }`,
            borderPressedSuccess: `1px solid ${ w }`,
            borderFocusSuccess: `1px solid ${ S }`,
            borderDisabledSuccess: `1px solid ${ y }`,
            rippleColorSuccess: y,
            colorWarning: _,
            colorHoverWarning: z,
            colorPressedWarning: T,
            colorFocusWarning: z,
            colorDisabledWarning: _,
            textColorWarning: v,
            textColorHoverWarning: v,
            textColorPressedWarning: v,
            textColorFocusWarning: v,
            textColorDisabledWarning: v,
            textColorTextWarning: _,
            textColorTextHoverWarning: z,
            textColorTextPressedWarning: T,
            textColorTextFocusWarning: z,
            textColorTextDisabledWarning: d,
            textColorGhostWarning: _,
            textColorGhostHoverWarning: z,
            textColorGhostPressedWarning: T,
            textColorGhostFocusWarning: z,
            textColorGhostDisabledWarning: _,
            borderWarning: `1px solid ${ _ }`,
            borderHoverWarning: `1px solid ${ z }`,
            borderPressedWarning: `1px solid ${ T }`,
            borderFocusWarning: `1px solid ${ z }`,
            borderDisabledWarning: `1px solid ${ _ }`,
            rippleColorWarning: _,
            colorError: P,
            colorHoverError: E,
            colorPressedError: k,
            colorFocusError: E,
            colorDisabledError: P,
            textColorError: v,
            textColorHoverError: v,
            textColorPressedError: v,
            textColorFocusError: v,
            textColorDisabledError: v,
            textColorTextError: P,
            textColorTextHoverError: E,
            textColorTextPressedError: k,
            textColorTextFocusError: E,
            textColorTextDisabledError: d,
            textColorGhostError: P,
            textColorGhostHoverError: E,
            textColorGhostPressedError: k,
            textColorGhostFocusError: E,
            textColorGhostDisabledError: P,
            borderError: `1px solid ${ P }`,
            borderHoverError: `1px solid ${ E }`,
            borderPressedError: `1px solid ${ k }`,
            borderFocusError: `1px solid ${ E }`,
            borderDisabledError: `1px solid ${ P }`,
            rippleColorError: P,
            waveOpacity: '0.6',
            fontWeight: R,
            fontWeightStrong: I
        });
    }, Zh = {
        name: 'Button',
        common: qf,
        self: Jh
    }, Qh = {
        name: 'Button',
        common: of,
        self(e) {
            const o = Jh(e);
            return o.waveOpacity = '0.8', o.colorOpacitySecondary = '0.16', o.colorOpacitySecondaryHover = '0.2', o.colorOpacitySecondaryPressed = '0.12', o;
        }
    }, em = Wl([
        Vl('button', '\n margin: 0;\n font-weight: var(--n-font-weight);\n line-height: 1;\n font-family: inherit;\n padding: var(--n-padding);\n height: var(--n-height);\n font-size: var(--n-font-size);\n border-radius: var(--n-border-radius);\n color: var(--n-text-color);\n background-color: var(--n-color);\n width: var(--n-width);\n white-space: nowrap;\n outline: none;\n position: relative;\n z-index: auto;\n border: none;\n display: inline-flex;\n flex-wrap: nowrap;\n flex-shrink: 0;\n align-items: center;\n justify-content: center;\n user-select: none;\n -webkit-user-select: none;\n text-align: center;\n cursor: pointer;\n text-decoration: none;\n transition:\n color .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n opacity .3s var(--n-bezier),\n border-color .3s var(--n-bezier);\n ', [
            ql('color', [
                Gl('border', { borderColor: 'var(--n-border-color)' }),
                ql('disabled', [Gl('border', { borderColor: 'var(--n-border-color-disabled)' })]),
                Kl('disabled', [
                    Wl('&:focus', [Gl('state-border', { borderColor: 'var(--n-border-color-focus)' })]),
                    Wl('&:hover', [Gl('state-border', { borderColor: 'var(--n-border-color-hover)' })]),
                    Wl('&:active', [Gl('state-border', { borderColor: 'var(--n-border-color-pressed)' })]),
                    ql('pressed', [Gl('state-border', { borderColor: 'var(--n-border-color-pressed)' })])
                ])
            ]),
            ql('disabled', {
                backgroundColor: 'var(--n-color-disabled)',
                color: 'var(--n-text-color-disabled)'
            }, [Gl('border', { border: 'var(--n-border-disabled)' })]),
            Kl('disabled', [
                Wl('&:focus', {
                    backgroundColor: 'var(--n-color-focus)',
                    color: 'var(--n-text-color-focus)'
                }, [Gl('state-border', { border: 'var(--n-border-focus)' })]),
                Wl('&:hover', {
                    backgroundColor: 'var(--n-color-hover)',
                    color: 'var(--n-text-color-hover)'
                }, [Gl('state-border', { border: 'var(--n-border-hover)' })]),
                Wl('&:active', {
                    backgroundColor: 'var(--n-color-pressed)',
                    color: 'var(--n-text-color-pressed)'
                }, [Gl('state-border', { border: 'var(--n-border-pressed)' })]),
                ql('pressed', {
                    backgroundColor: 'var(--n-color-pressed)',
                    color: 'var(--n-text-color-pressed)'
                }, [Gl('state-border', { border: 'var(--n-border-pressed)' })])
            ]),
            ql('loading', 'cursor: wait;'),
            Vl('base-wave', '\n pointer-events: none;\n top: 0;\n right: 0;\n bottom: 0;\n left: 0;\n animation-iteration-count: 1;\n animation-duration: var(--n-ripple-duration);\n animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);\n ', [ql('active', {
                    zIndex: 1,
                    animationName: 'button-wave-spread, button-wave-opacity'
                })]),
            Zl && 'MozBoxSizing' in document.createElement('div').style ? Wl('&::moz-focus-inner', { border: 0 }) : null,
            Gl('border, state-border', '\n position: absolute;\n left: 0;\n top: 0;\n right: 0;\n bottom: 0;\n border-radius: inherit;\n transition: border-color .3s var(--n-bezier);\n pointer-events: none;\n '),
            Gl('border', { border: 'var(--n-border)' }),
            Gl('state-border', {
                border: 'var(--n-border)',
                borderColor: '#0000',
                zIndex: 1
            }),
            Gl('icon', '\n margin: var(--n-icon-margin);\n margin-left: 0;\n height: var(--n-icon-size);\n width: var(--n-icon-size);\n max-width: var(--n-icon-size);\n font-size: var(--n-icon-size);\n position: relative;\n flex-shrink: 0;\n ', [
                Vl('icon-slot', '\n height: var(--n-icon-size);\n width: var(--n-icon-size);\n position: absolute;\n left: 0;\n top: 50%;\n transform: translateY(-50%);\n display: flex;\n align-items: center;\n justify-content: center;\n ', [Xd({
                        top: '50%',
                        originalTransform: 'translateY(-50%)'
                    })]),
                Th()
            ]),
            Gl('content', '\n display: flex;\n align-items: center;\n flex-wrap: nowrap;\n min-width: 0;\n ', [Wl('~', [Gl('icon', {
                        margin: 'var(--n-icon-margin)',
                        marginRight: 0
                    })])]),
            ql('block', '\n display: flex;\n width: 100%;\n '),
            ql('dashed', [Gl('border, state-border', { borderStyle: 'dashed !important' })]),
            ql('disabled', {
                cursor: 'not-allowed',
                opacity: 'var(--n-opacity-disabled)'
            })
        ]),
        Wl('@keyframes button-wave-spread', {
            from: { boxShadow: '0 0 0.5px 0 var(--n-ripple-color)' },
            to: { boxShadow: '0 0 0.5px 4.5px var(--n-ripple-color)' }
        }),
        Wl('@keyframes button-wave-opacity', {
            from: { opacity: 'var(--n-wave-opacity)' },
            to: { opacity: 0 }
        })
    ]), om = Tt({
        name: 'Button',
        props: Object.assign(Object.assign({}, Ld.props), {
            color: String,
            textColor: String,
            text: Boolean,
            block: Boolean,
            loading: Boolean,
            disabled: Boolean,
            circle: Boolean,
            size: String,
            ghost: Boolean,
            round: Boolean,
            secondary: Boolean,
            tertiary: Boolean,
            quaternary: Boolean,
            strong: Boolean,
            focusable: {
                type: Boolean,
                default: true
            },
            keyboard: {
                type: Boolean,
                default: true
            },
            tag: {
                type: String,
                default: 'button'
            },
            type: {
                type: String,
                default: 'default'
            },
            dashed: Boolean,
            renderIcon: Function,
            iconPlacement: {
                type: String,
                default: 'left'
            },
            attrType: {
                type: String,
                default: 'button'
            },
            bordered: {
                type: Boolean,
                default: true
            },
            onClick: [
                Function,
                Array
            ],
            nativeFocusBehavior: {
                type: Boolean,
                default: !Mh
            }
        }),
        setup(e) {
            const o = xo(null), t = xo(null), n = xo(false), r = oa(() => !e.quaternary && !e.tertiary && !e.secondary && !e.text && (!e.color || e.ghost || e.dashed) && e.bordered), i = ct('n-button-group', {}), {mergedSizeRef: l} = Us({}, {
                    defaultSize: 'medium',
                    mergedSize: o => {
                        const {size: t} = e;
                        if (t) {
                            return t;
                        }
                        const {size: n} = i;
                        if (n) {
                            return n;
                        }
                        const {mergedSize: r} = o || {};
                        return r ? r.value : 'medium';
                    }
                }), a = Er(() => e.focusable && !e.disabled), {
                    inlineThemeDisabled: s,
                    mergedClsPrefixRef: c,
                    mergedRtlRef: u
                } = Ad(e), d = Ld('Button', '-button', em, Zh, e, c), p = Md('Button', u, c), f = Er(() => {
                    const o = d.value, {
                            common: {
                                cubicBezierEaseInOut: t,
                                cubicBezierEaseOut: n
                            },
                            self: r
                        } = o, {
                            rippleDuration: i,
                            opacityDisabled: a,
                            fontWeight: s,
                            fontWeightStrong: c
                        } = r, u = l.value, {
                            dashed: p,
                            type: f,
                            ghost: h,
                            text: m,
                            color: g,
                            round: v,
                            circle: b,
                            textColor: x,
                            secondary: C,
                            tertiary: y,
                            quaternary: S,
                            strong: w
                        } = e, _ = { 'font-weight': w ? c : s };
                    ;
                    const T = 'tertiary' === f, P = 'default' === f, E = T ? 'default' : f;
                    if (m) {
                        const e = x || g;
                        z = {
                            '--n-color': '#0000',
                            '--n-color-hover': '#0000',
                            '--n-color-pressed': '#0000',
                            '--n-color-focus': '#0000',
                            '--n-color-disabled': '#0000',
                            '--n-ripple-color': '#0000',
                            '--n-text-color': e || r[Bl('textColorText', E)],
                            '--n-text-color-hover': e ? Kh(e) : r[Bl('textColorTextHover', E)],
                            '--n-text-color-pressed': e ? Yh(e) : r[Bl('textColorTextPressed', E)],
                            '--n-text-color-focus': e ? Kh(e) : r[Bl('textColorTextHover', E)],
                            '--n-text-color-disabled': e || r[Bl('textColorTextDisabled', E)]
                        };
                    } else {
                        if (h || p) {
                            const e = x || g;
                            z = {
                                '--n-color': '#0000',
                                '--n-color-hover': '#0000',
                                '--n-color-pressed': '#0000',
                                '--n-color-focus': '#0000',
                                '--n-color-disabled': '#0000',
                                '--n-ripple-color': g || r[Bl('rippleColor', E)],
                                '--n-text-color': e || r[Bl('textColorGhost', E)],
                                '--n-text-color-hover': e ? Kh(e) : r[Bl('textColorGhostHover', E)],
                                '--n-text-color-pressed': e ? Yh(e) : r[Bl('textColorGhostPressed', E)],
                                '--n-text-color-focus': e ? Kh(e) : r[Bl('textColorGhostHover', E)],
                                '--n-text-color-disabled': e || r[Bl('textColorGhostDisabled', E)]
                            };
                        } else {
                            if (C) {
                                const e = P ? r.textColor : T ? r.textColorTertiary : r[Bl('color', E)], o = g || e, t = 'default' !== f && 'tertiary' !== f;
                                z = {
                                    '--n-color': t ? Yi(o, { alpha: Number(r.colorOpacitySecondary) }) : r.colorSecondary,
                                    '--n-color-hover': t ? Yi(o, { alpha: Number(r.colorOpacitySecondaryHover) }) : r.colorSecondaryHover,
                                    '--n-color-pressed': t ? Yi(o, { alpha: Number(r.colorOpacitySecondaryPressed) }) : r.colorSecondaryPressed,
                                    '--n-color-focus': t ? Yi(o, { alpha: Number(r.colorOpacitySecondaryHover) }) : r.colorSecondaryHover,
                                    '--n-color-disabled': r.colorSecondary,
                                    '--n-ripple-color': '#0000',
                                    '--n-text-color': o,
                                    '--n-text-color-hover': o,
                                    '--n-text-color-pressed': o,
                                    '--n-text-color-focus': o,
                                    '--n-text-color-disabled': o
                                };
                            } else {
                                if (y || S) {
                                    const e = P ? r.textColor : T ? r.textColorTertiary : r[Bl('color', E)], o = g || e;
                                    y ? ('initial' = r.colorTertiary, 'initial' = r.colorTertiaryHover, 'initial' = r.colorTertiaryPressed, 'initial' = r.colorSecondaryHover, 'initial' = r.colorTertiary) : ('initial' = r.colorQuaternary, 'initial' = r.colorQuaternaryHover, 'initial' = r.colorQuaternaryPressed, 'initial' = r.colorQuaternaryHover, 'initial' = r.colorQuaternary);
                                    'initial' = '#0000';
                                    'initial' = o;
                                    'initial' = o;
                                    'initial' = o;
                                    'initial' = o;
                                    'initial' = o;
                                } else {
                                    z = {
                                        '--n-color': g || r[Bl('color', E)],
                                        '--n-color-hover': g ? Kh(g) : r[Bl('colorHover', E)],
                                        '--n-color-pressed': g ? Yh(g) : r[Bl('colorPressed', E)],
                                        '--n-color-focus': g ? Kh(g) : r[Bl('colorFocus', E)],
                                        '--n-color-disabled': g || r[Bl('colorDisabled', E)],
                                        '--n-ripple-color': g || r[Bl('rippleColor', E)],
                                        '--n-text-color': x || (g ? r.textColorPrimary : T ? r.textColorTertiary : r[Bl('textColor', E)]),
                                        '--n-text-color-hover': x || (g ? r.textColorHoverPrimary : r[Bl('textColorHover', E)]),
                                        '--n-text-color-pressed': x || (g ? r.textColorPressedPrimary : r[Bl('textColorPressed', E)]),
                                        '--n-text-color-focus': x || (g ? r.textColorFocusPrimary : r[Bl('textColorFocus', E)]),
                                        '--n-text-color-disabled': x || (g ? r.textColorDisabledPrimary : r[Bl('textColorDisabled', E)])
                                    };
                                }
                            }
                        }
                    }
                    ;
                    k = m ? {
                        '--n-border': 'none',
                        '--n-border-hover': 'none',
                        '--n-border-pressed': 'none',
                        '--n-border-focus': 'none',
                        '--n-border-disabled': 'none'
                    } : {
                        '--n-border': r[Bl('border', E)],
                        '--n-border-hover': r[Bl('borderHover', E)],
                        '--n-border-pressed': r[Bl('borderPressed', E)],
                        '--n-border-focus': r[Bl('borderFocus', E)],
                        '--n-border-disabled': r[Bl('borderDisabled', E)]
                    };
                    const {
                            [Bl('height', u)]: R,
                            [Bl('fontSize', u)]: L,
                            [Bl('padding', u)]: O,
                            [Bl('paddingRound', u)]: A,
                            [Bl('iconSize', u)]: I,
                            [Bl('borderRadius', u)]: $,
                            [Bl('iconMargin', u)]: M,
                            waveOpacity: H
                        } = r, F = {
                            '--n-width': b && !m ? R : 'initial',
                            '--n-height': m ? 'initial' : R,
                            '--n-font-size': L,
                            '--n-padding': b || m ? 'initial' : v ? A : O,
                            '--n-icon-size': I,
                            '--n-icon-margin': M,
                            '--n-border-radius': m ? 'initial' : b || v ? R : $
                        };
                    return Object.assign(Object.assign(Object.assign(Object.assign({
                        '--n-bezier': t,
                        '--n-bezier-ease-out': n,
                        '--n-ripple-duration': i,
                        '--n-opacity-disabled': a,
                        '--n-wave-opacity': H
                    }, _), z), k), F);
                }), h = s ? $d('button', Er(() => {
                    let o = '';
                    const {
                        dashed: t,
                        type: n,
                        ghost: r,
                        text: i,
                        color: a,
                        round: s,
                        circle: c,
                        textColor: u,
                        secondary: d,
                        tertiary: p,
                        quaternary: f,
                        strong: h
                    } = e;
                    t && (o += 'a');
                    r && (o += 'b');
                    i && (o += 'c');
                    s && (o += 'd');
                    c && (o += 'e');
                    d && (o += 'f');
                    p && (o += 'g');
                    f && (o += 'h');
                    h && (o += 'i');
                    a && (o += 'j' + bl(a));
                    u && (o += 'k' + bl(u));
                    const {value: m} = l;
                    return o += 'l' + m[0], o += 'm' + n[0], o;
                }), f, e) : void 0;
            return {
                selfElRef: o,
                waveElRef: t,
                mergedClsPrefix: c,
                mergedFocusable: a,
                mergedSize: l,
                showBorder: r,
                enterPressed: n,
                rtlEnabled: p,
                handleMousedown: t => {
                    var n;
                    a.value || t.preventDefault();
                    e.nativeFocusBehavior || (t.preventDefault(), e.disabled || a.value && (null === (n = o.value) || void 0 === n || n.focus({ preventScroll: true })));
                },
                handleKeydown: o => {
                    if ('Enter' === o.key) {
                        if (!e.keyboard || e.loading) {
                            return void o.preventDefault();
                        }
                        n.value = true;
                    }
                },
                handleBlur: () => {
                    n.value = false;
                },
                handleKeyup: o => {
                    if ('Enter' === o.key) {
                        if (!e.keyboard) {
                            return;
                        }
                        n.value = false;
                    }
                },
                handleClick: o => {
                    var n;
                    if (!e.disabled && !e.loading) {
                        const {onClick: r} = e;
                        r && ll(r, o);
                        e.text || null === (n = t.value) || void 0 === n || n.play();
                    }
                },
                customColorCssVars: Er(() => {
                    const {color: o} = e;
                    if (!o) {
                        return null;
                    }
                    const t = Kh(o);
                    return {
                        '--n-border-color': o,
                        '--n-border-color-hover': t,
                        '--n-border-color-pressed': Yh(o),
                        '--n-border-color-focus': t,
                        '--n-border-color-disabled': o
                    };
                }),
                cssVars: s ? void 0 : f,
                themeClass: null == h ? void 0 : h.themeClass,
                onRender: null == h ? void 0 : h.onRender
            };
        },
        render() {
            const {
                mergedClsPrefix: e,
                tag: o,
                onRender: t
            } = this;
            null == t || t();
            const n = ml(this.$slots.default, o => o && kr('span', { class: `${ e }-button__content` }, o));
            return kr(o, {
                ref: 'selfElRef',
                class: [
                    this.themeClass,
                    `${ e }-button`,
                    `${ e }-button--${ this.type }-type`,
                    `${ e }-button--${ this.mergedSize }-type`,
                    this.rtlEnabled && `${ e }-button--rtl`,
                    this.disabled && `${ e }-button--disabled`,
                    this.block && `${ e }-button--block`,
                    this.enterPressed && `${ e }-button--pressed`,
                    !this.text && this.dashed && `${ e }-button--dashed`,
                    this.color && `${ e }-button--color`,
                    this.secondary && `${ e }-button--secondary`,
                    this.loading && `${ e }-button--loading`,
                    this.ghost && `${ e }-button--ghost`
                ],
                tabindex: this.mergedFocusable ? 0 : -1,
                type: this.attrType,
                style: this.cssVars,
                disabled: this.disabled,
                onClick: this.handleClick,
                onBlur: this.handleBlur,
                onMousedown: this.handleMousedown,
                onKeyup: this.handleKeyup,
                onKeydown: this.handleKeydown
            }, 'right' === this.iconPlacement && n, kr(Ud, { width: true }, {
                default: () => ml(this.$slots.icon, o => (this.loading || this.renderIcon || o) && kr('span', {
                    class: `${ e }-button__icon`,
                    style: { margin: gl(this.$slots.default) ? '0' : '' }
                }, kr(Wd, null, {
                    default: () => this.loading ? kr(Qd, {
                        clsPrefix: e,
                        key: 'loading',
                        class: `${ e }-icon-slot`,
                        strokeWidth: 20
                    }) : kr('div', {
                        key: 'icon',
                        class: `${ e }-icon-slot`,
                        role: 'none'
                    }, this.renderIcon ? this.renderIcon() : o)
                })))
            }), 'left' === this.iconPlacement && n, this.text ? null : kr(mh, {
                ref: 'waveElRef',
                clsPrefix: e
            }), this.showBorder ? kr('div', {
                'aria-hidden': true,
                class: `${ e }-button__border`,
                style: this.customColorCssVars
            }) : null, this.showBorder ? kr('div', {
                'aria-hidden': true,
                class: `${ e }-button__state-border`,
                style: this.customColorCssVars
            }) : null);
        }
    }), tm = { titleFontSize: '22px' }, nm = {
        name: 'Calendar',
        common: of,
        peers: { Button: Qh },
        self: e => {
            const {
                borderRadius: o,
                fontSize: t,
                lineHeight: n,
                textColor2: r,
                textColor1: i,
                textColorDisabled: l,
                dividerColor: a,
                fontWeightStrong: s,
                primaryColor: c,
                baseColor: u,
                hoverColor: d,
                cardColor: p,
                modalColor: f,
                popoverColor: h
            } = e;
            return Object.assign(Object.assign({}, tm), {
                borderRadius: o,
                borderColor: Ki(p, a),
                borderColorModal: Ki(f, a),
                borderColorPopover: Ki(h, a),
                textColor: r,
                titleFontWeight: s,
                titleTextColor: i,
                dayTextColor: l,
                fontSize: t,
                lineHeight: n,
                dateColorCurrent: c,
                dateTextColorCurrent: u,
                cellColorHover: Ki(p, d),
                cellColorHoverModal: Ki(f, d),
                cellColorHoverPopover: Ki(h, d),
                cellColor: p,
                cellColorModal: f,
                cellColorPopover: h,
                barColor: c
            });
        }
    }, rm = e => {
        const {
            fontSize: o,
            boxShadow2: t,
            popoverColor: n,
            textColor2: r,
            borderRadius: i,
            borderColor: l,
            heightSmall: a,
            heightMedium: s,
            heightLarge: c,
            fontSizeSmall: u,
            fontSizeMedium: d,
            fontSizeLarge: p,
            dividerColor: f
        } = e;
        return {
            panelFontSize: o,
            boxShadow: t,
            color: n,
            textColor: r,
            borderRadius: i,
            border: `1px solid ${ l }`,
            heightSmall: a,
            heightMedium: s,
            heightLarge: c,
            fontSizeSmall: u,
            fontSizeMedium: d,
            fontSizeLarge: p,
            dividerColor: f
        };
    }, im = {
        name: 'ColorPicker',
        common: qf,
        peers: {
            Input: Bh,
            Button: Zh
        },
        self: rm
    }, lm = {
        name: 'ColorPicker',
        common: of,
        peers: {
            Input: Fh,
            Button: Qh
        },
        self: rm
    }, am = {
        paddingSmall: '12px 16px 12px',
        paddingMedium: '19px 24px 20px',
        paddingLarge: '23px 32px 24px',
        paddingHuge: '27px 40px 28px',
        titleFontSizeSmall: '16px',
        titleFontSizeMedium: '18px',
        titleFontSizeLarge: '18px',
        titleFontSizeHuge: '18px',
        closeIconSize: '18px',
        closeSize: '22px'
    }, sm = e => {
        const {
            primaryColor: o,
            borderRadius: t,
            lineHeight: n,
            fontSize: r,
            cardColor: i,
            textColor2: l,
            textColor1: a,
            dividerColor: s,
            fontWeightStrong: c,
            closeIconColor: u,
            closeIconColorHover: d,
            closeIconColorPressed: p,
            closeColorHover: f,
            closeColorPressed: h,
            modalColor: m,
            boxShadow1: g,
            popoverColor: v,
            actionColor: b
        } = e;
        return Object.assign(Object.assign({}, am), {
            lineHeight: n,
            color: i,
            colorModal: m,
            colorPopover: v,
            colorTarget: o,
            colorEmbedded: b,
            colorEmbeddedModal: b,
            colorEmbeddedPopover: b,
            textColor: l,
            titleTextColor: a,
            borderColor: s,
            actionColor: b,
            titleFontWeight: c,
            closeColorHover: f,
            closeColorPressed: h,
            closeBorderRadius: t,
            closeIconColor: u,
            closeIconColorHover: d,
            closeIconColorPressed: p,
            fontSizeSmall: r,
            fontSizeMedium: r,
            fontSizeLarge: r,
            fontSizeHuge: r,
            boxShadow: g,
            borderRadius: t
        });
    }, cm = {
        name: 'Card',
        common: qf,
        self: sm
    }, um = {
        name: 'Card',
        common: of,
        self(e) {
            const o = sm(e), {
                    cardColor: t,
                    modalColor: n,
                    popoverColor: r
                } = e;
            return o.colorEmbedded = t, o.colorEmbeddedModal = n, o.colorEmbeddedPopover = r, o;
        }
    }, dm = Wl([
        Vl('card', '\n font-size: var(--n-font-size);\n line-height: var(--n-line-height);\n display: flex;\n flex-direction: column;\n width: 100%;\n box-sizing: border-box;\n position: relative;\n border-radius: var(--n-border-radius);\n background-color: var(--n-color);\n color: var(--n-text-color);\n word-break: break-word;\n transition: \n color .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n box-shadow .3s var(--n-bezier),\n border-color .3s var(--n-bezier);\n ', [
            Jl({ background: 'var(--n-color-modal)' }),
            ql('hoverable', [Wl('&:hover', 'box-shadow: var(--n-box-shadow);')]),
            ql('content-segmented', [Wl('>', [Gl('content', { paddingTop: 'var(--n-padding-bottom)' })])]),
            ql('content-soft-segmented', [Wl('>', [Gl('content', '\n margin: 0 var(--n-padding-left);\n padding: var(--n-padding-bottom) 0;\n ')])]),
            ql('footer-segmented', [Wl('>', [Gl('footer', { paddingTop: 'var(--n-padding-bottom)' })])]),
            ql('footer-soft-segmented', [Wl('>', [Gl('footer', '\n padding: var(--n-padding-bottom) 0;\n margin: 0 var(--n-padding-left);\n ')])]),
            Wl('>', [
                Vl('card-header', '\n box-sizing: border-box;\n display: flex;\n align-items: center;\n font-size: var(--n-title-font-size);\n padding:\n var(--n-padding-top)\n var(--n-padding-left)\n var(--n-padding-bottom)\n var(--n-padding-left);\n ', [
                    Gl('main', '\n font-weight: var(--n-title-font-weight);\n transition: color .3s var(--n-bezier);\n flex: 1;\n min-width: 0;\n color: var(--n-title-text-color);\n '),
                    Gl('extra', '\n display: flex;\n align-items: center;\n font-size: var(--n-font-size);\n font-weight: 400;\n transition: color .3s var(--n-bezier);\n color: var(--n-text-color);\n '),
                    Gl('close', '\n margin: 0 0 0 8px;\n transition:\n background-color .3s var(--n-bezier),\n color .3s var(--n-bezier);\n ')
                ]),
                Gl('action', '\n box-sizing: border-box;\n transition:\n background-color .3s var(--n-bezier),\n border-color .3s var(--n-bezier);\n background-clip: padding-box;\n background-color: var(--n-action-color);\n '),
                Gl('content', 'flex: 1; min-width: 0;'),
                Gl('content, footer', '\n box-sizing: border-box;\n padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);\n font-size: var(--n-font-size);\n ', [Wl('&:first-child', { paddingTop: 'var(--n-padding-bottom)' })]),
                Gl('action', '\n background-color: var(--n-action-color);\n padding: var(--n-padding-bottom) var(--n-padding-left);\n border-bottom-left-radius: var(--n-border-radius);\n border-bottom-right-radius: var(--n-border-radius);\n ')
            ]),
            Vl('card-cover', '\n overflow: hidden;\n width: 100%;\n border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;\n ', [Wl('img', '\n display: block;\n width: 100%;\n ')]),
            ql('bordered', '\n border: 1px solid var(--n-border-color);\n ', [Wl('&:target', 'border-color: var(--n-color-target);')]),
            ql('action-segmented', [Wl('>', [Gl('action', [Wl('&:not(:first-child)', { borderTop: '1px solid var(--n-border-color)' })])])]),
            ql('content-segmented, content-soft-segmented', [Wl('>', [Gl('content', { transition: 'border-color 0.3s var(--n-bezier)' }, [Wl('&:not(:first-child)', { borderTop: '1px solid var(--n-border-color)' })])])]),
            ql('footer-segmented, footer-soft-segmented', [Wl('>', [Gl('footer', { transition: 'border-color 0.3s var(--n-bezier)' }, [Wl('&:not(:first-child)', { borderTop: '1px solid var(--n-border-color)' })])])]),
            ql('embedded', '\n background-color: var(--n-color-embedded);\n ')
        ]),
        Yl(Vl('card', '\n background: var(--n-color-modal);\n ', [ql('embedded', '\n background-color: var(--n-color-embedded-modal);\n ')])),
        Xl(Vl('card', '\n background: var(--n-color-popover);\n ', [ql('embedded', '\n background-color: var(--n-color-embedded-popover);\n ')]))
    ]), pm = {
        title: String,
        contentStyle: [
            Object,
            String
        ],
        headerStyle: [
            Object,
            String
        ],
        headerExtraStyle: [
            Object,
            String
        ],
        footerStyle: [
            Object,
            String
        ],
        embedded: Boolean,
        segmented: {
            type: [
                Boolean,
                Object
            ],
            default: false
        },
        size: {
            type: String,
            default: 'medium'
        },
        bordered: {
            type: Boolean,
            default: true
        },
        closable: Boolean,
        hoverable: Boolean,
        role: String,
        onClose: [
            Function,
            Array
        ],
        tag: {
            type: String,
            default: 'div'
        }
    }, fm = al(pm), hm = Tt({
        name: 'Card',
        props: Object.assign(Object.assign({}, Ld.props), pm),
        setup(e) {
            const {
                    inlineThemeDisabled: o,
                    mergedClsPrefixRef: t,
                    mergedRtlRef: n
                } = Ad(e), r = Ld('Card', '-card', dm, cm, e, t), i = Md('Card', n, t), l = Er(() => {
                    const {size: o} = e, {
                            self: {
                                color: t,
                                colorModal: n,
                                colorTarget: i,
                                textColor: l,
                                titleTextColor: a,
                                titleFontWeight: s,
                                borderColor: c,
                                actionColor: u,
                                borderRadius: d,
                                lineHeight: p,
                                closeIconColor: f,
                                closeIconColorHover: h,
                                closeIconColorPressed: m,
                                closeColorHover: g,
                                closeColorPressed: v,
                                closeBorderRadius: b,
                                closeIconSize: x,
                                closeSize: C,
                                boxShadow: y,
                                colorPopover: S,
                                colorEmbedded: w,
                                colorEmbeddedModal: _,
                                colorEmbeddedPopover: z,
                                [Bl('padding', o)]: T,
                                [Bl('fontSize', o)]: P,
                                [Bl('titleFontSize', o)]: E
                            },
                            common: {cubicBezierEaseInOut: k}
                        } = r.value, {
                            top: R,
                            left: L,
                            bottom: O
                        } = Ti(T);
                    return {
                        '--n-bezier': k,
                        '--n-border-radius': d,
                        '--n-color': t,
                        '--n-color-modal': n,
                        '--n-color-popover': S,
                        '--n-color-embedded': w,
                        '--n-color-embedded-modal': _,
                        '--n-color-embedded-popover': z,
                        '--n-color-target': i,
                        '--n-text-color': l,
                        '--n-line-height': p,
                        '--n-action-color': u,
                        '--n-title-text-color': a,
                        '--n-title-font-weight': s,
                        '--n-close-icon-color': f,
                        '--n-close-icon-color-hover': h,
                        '--n-close-icon-color-pressed': m,
                        '--n-close-color-hover': g,
                        '--n-close-color-pressed': v,
                        '--n-border-color': c,
                        '--n-box-shadow': y,
                        '--n-padding-top': R,
                        '--n-padding-bottom': O,
                        '--n-padding-left': L,
                        '--n-font-size': P,
                        '--n-title-font-size': E,
                        '--n-close-size': C,
                        '--n-close-icon-size': x,
                        '--n-close-border-radius': b
                    };
                }), a = o ? $d('card', Er(() => e.size[0]), l, e) : void 0;
            return {
                rtlEnabled: i,
                mergedClsPrefix: t,
                mergedTheme: r,
                handleCloseClick: () => {
                    const {onClose: o} = e;
                    o && ll(o);
                },
                cssVars: o ? void 0 : l,
                themeClass: null == a ? void 0 : a.themeClass,
                onRender: null == a ? void 0 : a.onRender
            };
        },
        render() {
            const {
                segmented: e,
                bordered: o,
                hoverable: t,
                mergedClsPrefix: n,
                rtlEnabled: r,
                onRender: i,
                embedded: l,
                tag: a,
                $slots: s
            } = this;
            return null == i || i(), kr(a, {
                class: [
                    `${ n }-card`,
                    this.themeClass,
                    l && `${ n }-card--embedded`,
                    {
                        [`${ n }-card--rtl`]: r,
                        [`${ n }-card--content${ 'boolean' != typeof e && 'soft' === e.content ? '-soft' : '' }-segmented`]: true === e || false !== e && e.content,
                        [`${ n }-card--footer${ 'boolean' != typeof e && 'soft' === e.footer ? '-soft' : '' }-segmented`]: true === e || false !== e && e.footer,
                        [`${ n }-card--action-segmented`]: true === e || false !== e && e.action,
                        [`${ n }-card--bordered`]: o,
                        [`${ n }-card--hoverable`]: t
                    }
                ],
                style: this.cssVars,
                role: this.role
            }, ml(s.cover, e => e && kr('div', {
                class: `${ n }-card-cover`,
                role: 'none'
            }, e)), ml(s.header, e => e || this.title || this.closable ? kr('div', {
                class: `${ n }-card-header`,
                style: this.headerStyle
            }, kr('div', {
                class: `${ n }-card-header__main`,
                role: 'heading'
            }, e || this.title), ml(s['header-extra'], e => e && kr('div', {
                class: `${ n }-card-header__extra`,
                style: this.headerExtraStyle
            }, e)), this.closable ? kr(Kd, {
                clsPrefix: n,
                class: `${ n }-card-header__close`,
                onClick: this.handleCloseClick,
                absolute: true
            }) : null) : null), ml(s.default, e => e && kr('div', {
                class: `${ n }-card__content`,
                style: this.contentStyle,
                role: 'none'
            }, e)), ml(s.footer, e => e && [kr('div', {
                    class: `${ n }-card__footer`,
                    style: this.footerStyle,
                    role: 'none'
                }, e)]), ml(s.action, e => e && kr('div', {
                class: `${ n }-card__action`,
                role: 'none'
            }, e)));
        }
    }), mm = {
        name: 'Carousel',
        common: of,
        self: e => ({
            dotSize: '8px',
            dotColor: 'rgba(255, 255, 255, .3)',
            dotColorActive: 'rgba(255, 255, 255, 1)',
            dotColorFocus: 'rgba(255, 255, 255, .5)',
            dotLineWidth: '16px',
            dotLineWidthActive: '24px',
            arrowColor: '#eee'
        })
    }, gm = {
        sizeSmall: '14px',
        sizeMedium: '16px',
        sizeLarge: '18px',
        labelPadding: '0 8px',
        labelFontWeight: '400'
    }, vm = e => {
        const {
            baseColor: o,
            inputColorDisabled: t,
            cardColor: n,
            modalColor: r,
            popoverColor: i,
            textColorDisabled: l,
            borderColor: a,
            primaryColor: s,
            textColor2: c,
            fontSizeSmall: u,
            fontSizeMedium: d,
            fontSizeLarge: p,
            borderRadiusSmall: f,
            lineHeight: h
        } = e;
        return Object.assign(Object.assign({}, gm), {
            labelLineHeight: h,
            fontSizeSmall: u,
            fontSizeMedium: d,
            fontSizeLarge: p,
            borderRadius: f,
            color: o,
            colorChecked: s,
            colorDisabled: t,
            colorDisabledChecked: t,
            colorTableHeader: n,
            colorTableHeaderModal: r,
            colorTableHeaderPopover: i,
            checkMarkColor: o,
            checkMarkColorDisabled: l,
            checkMarkColorDisabledChecked: l,
            border: `1px solid ${ a }`,
            borderDisabled: `1px solid ${ a }`,
            borderDisabledChecked: `1px solid ${ a }`,
            borderChecked: `1px solid ${ s }`,
            borderFocus: `1px solid ${ s }`,
            boxShadowFocus: `0 0 0 2px ${ Yi(s, { alpha: 0.3 }) }`,
            textColor: c,
            textColorDisabled: l
        });
    }, bm = {
        name: 'Checkbox',
        common: qf,
        self: vm
    }, xm = {
        name: 'Checkbox',
        common: of,
        self(e) {
            const {cardColor: o} = e, t = vm(e);
            return t.color = '#0000', t.checkMarkColor = o, t;
        }
    }, Cm = {
        name: 'Cascader',
        common: of,
        peers: {
            InternalSelectMenu: uh,
            InternalSelection: _h,
            Scrollbar: eh,
            Checkbox: xm,
            Empty: Xf
        },
        self: e => {
            const {
                borderRadius: o,
                boxShadow2: t,
                popoverColor: n,
                textColor2: r,
                textColor3: i,
                primaryColor: l,
                textColorDisabled: a,
                dividerColor: s,
                hoverColor: c,
                fontSizeMedium: u,
                heightMedium: d
            } = e;
            return {
                menuBorderRadius: o,
                menuColor: n,
                menuBoxShadow: t,
                menuDividerColor: s,
                menuHeight: 'calc(var(--n-option-height) * 6.6)',
                optionArrowColor: i,
                optionHeight: d,
                optionFontSize: u,
                optionColorHover: c,
                optionTextColor: r,
                optionTextColorActive: l,
                optionTextColorDisabled: a,
                optionCheckMarkColor: l,
                loadingColor: l,
                columnWidth: '180px'
            };
        }
    }, ym = {
        name: 'Code',
        common: of,
        self(e) {
            const {
                textColor2: o,
                fontSize: t,
                fontWeightStrong: n,
                textColor3: r
            } = e;
            return {
                textColor: o,
                fontSize: t,
                fontWeightStrong: n,
                'mono-3': '#5c6370',
                'hue-1': '#56b6c2',
                'hue-2': '#61aeee',
                'hue-3': '#c678dd',
                'hue-4': '#98c379',
                'hue-5': '#e06c75',
                'hue-5-2': '#be5046',
                'hue-6': '#d19a66',
                'hue-6-2': '#e6c07b',
                lineNumberTextColor: r
            };
        }
    }, Sm = {
        name: 'Collapse',
        common: of,
        self: e => {
            const {
                fontWeight: o,
                textColor1: t,
                textColor2: n,
                textColorDisabled: r,
                dividerColor: i,
                fontSize: l
            } = e;
            return {
                titleFontSize: l,
                titleFontWeight: o,
                dividerColor: i,
                titleTextColor: t,
                titleTextColorDisabled: r,
                fontSize: l,
                textColor: n,
                arrowColor: n,
                arrowColorDisabled: r,
                itemMargin: '16px 0 0 0'
            };
        }
    }, wm = e => {
        const {cubicBezierEaseInOut: o} = e;
        return { bezier: o };
    }, _m = {
        name: 'CollapseTransition',
        common: qf,
        self: wm
    }, zm = {
        name: 'CollapseTransition',
        common: of,
        self: wm
    }, Tm = Tt({
        name: 'ConfigProvider',
        alias: ['App'],
        props: {
            abstract: Boolean,
            bordered: {
                type: Boolean,
                default: void 0
            },
            clsPrefix: String,
            locale: Object,
            dateLocale: Object,
            namespace: String,
            rtl: Array,
            tag: {
                type: String,
                default: 'div'
            },
            hljs: Object,
            katex: Object,
            theme: Object,
            themeOverrides: Object,
            componentOptions: Object,
            icons: Object,
            breakpoints: Object,
            preflightStyleDisabled: Boolean,
            inlineThemeDisabled: {
                type: Boolean,
                default: void 0
            },
            as: {
                type: String,
                validator: () => true,
                default: void 0
            }
        },
        setup(e) {
            const o = ct(kd, null), t = Er(() => {
                    const {theme: t} = e;
                    if (null === t) {
                        return;
                    }
                    const n = null == o ? void 0 : o.mergedThemeRef.value;
                    return void 0 === t ? n : void 0 === n ? t : Object.assign({}, n, t);
                }), n = Er(() => {
                    const {themeOverrides: t} = e;
                    if (null !== t) {
                        if (void 0 === t) {
                            return null == o ? void 0 : o.mergedThemeOverridesRef.value;
                        }
                        {
                            const e = null == o ? void 0 : o.mergedThemeOverridesRef.value;
                            return void 0 === e ? t : wd({}, e, t);
                        }
                    }
                }), r = oa(() => {
                    const {namespace: t} = e;
                    return void 0 === t ? null == o ? void 0 : o.mergedNamespaceRef.value : t;
                }), i = oa(() => {
                    const {bordered: t} = e;
                    return void 0 === t ? null == o ? void 0 : o.mergedBorderedRef.value : t;
                }), l = Er(() => {
                    const {icons: t} = e;
                    return void 0 === t ? null == o ? void 0 : o.mergedIconsRef.value : t;
                }), a = Er(() => {
                    const {componentOptions: t} = e;
                    return void 0 !== t ? t : null == o ? void 0 : o.mergedComponentPropsRef.value;
                }), s = Er(() => {
                    const {clsPrefix: t} = e;
                    return void 0 !== t ? t : null == o ? void 0 : o.mergedClsPrefixRef.value;
                }), c = Er(() => {
                    var t;
                    const {rtl: n} = e;
                    if (void 0 === n) {
                        return null == o ? void 0 : o.mergedRtlRef.value;
                    }
                    const r = {};
                    for (const e of n)
                        r[e.name] = fo(e), null === (t = e.peers) || void 0 === t || t.forEach(e => {
                            e.name in r || (r[e.name] = fo(e));
                        });
                    return r;
                }), u = Er(() => e.breakpoints || (null == o ? void 0 : o.mergedBreakpointsRef.value)), d = e.inlineThemeDisabled || (null == o ? void 0 : o.inlineThemeDisabled), p = e.preflightStyleDisabled || (null == o ? void 0 : o.preflightStyleDisabled), f = Er(() => {
                    const {value: e} = t, {value: o} = n, r = o && 0 !== Object.keys(o).length, i = null == e ? void 0 : e.name;
                    return i ? r ? `${ i }-${ Ll(JSON.stringify(n.value)) }` : i : r ? Ll(JSON.stringify(n.value)) : '';
                });
            return st(kd, {
                mergedThemeHashRef: f,
                mergedBreakpointsRef: u,
                mergedRtlRef: c,
                mergedIconsRef: l,
                mergedComponentPropsRef: a,
                mergedBorderedRef: i,
                mergedNamespaceRef: r,
                mergedClsPrefixRef: s,
                mergedLocaleRef: Er(() => {
                    const {locale: t} = e;
                    if (null !== t) {
                        return void 0 === t ? null == o ? void 0 : o.mergedLocaleRef.value : t;
                    }
                }),
                mergedDateLocaleRef: Er(() => {
                    const {dateLocale: t} = e;
                    if (null !== t) {
                        return void 0 === t ? null == o ? void 0 : o.mergedDateLocaleRef.value : t;
                    }
                }),
                mergedHljsRef: Er(() => {
                    const {hljs: t} = e;
                    return void 0 === t ? null == o ? void 0 : o.mergedHljsRef.value : t;
                }),
                mergedKatexRef: Er(() => {
                    const {katex: t} = e;
                    return void 0 === t ? null == o ? void 0 : o.mergedKatexRef.value : t;
                }),
                mergedThemeRef: t,
                mergedThemeOverridesRef: n,
                inlineThemeDisabled: d || false,
                preflightStyleDisabled: p || false
            }), {
                mergedClsPrefix: s,
                mergedBordered: i,
                mergedNamespace: r,
                mergedTheme: t,
                mergedThemeOverrides: n
            };
        },
        render() {
            var e, o, t, n;
            return this.abstract ? null === (n = (t = this.$slots).default) || void 0 === n ? void 0 : n.call(t) : kr(this.as || this.tag, { class: `${ this.mergedClsPrefix || Od }-config-provider` }, null === (o = (e = this.$slots).default) || void 0 === o ? void 0 : o.call(e));
        }
    }), Pm = {
        name: 'Popselect',
        common: of,
        peers: {
            Popover: xh,
            InternalSelectMenu: uh
        }
    };
function Em(e) {
    const {boxShadow2: o} = e;
    return { menuBoxShadow: o };
}
const km = {
        name: 'Select',
        common: qf,
        peers: {
            InternalSelection: wh,
            InternalSelectMenu: ch
        },
        self: Em
    }, Rm = {
        name: 'Select',
        common: of,
        peers: {
            InternalSelection: _h,
            InternalSelectMenu: uh
        },
        self: Em
    }, Lm = {
        itemPaddingSmall: '0 4px',
        itemMarginSmall: '0 0 0 8px',
        itemMarginSmallRtl: '0 8px 0 0',
        itemPaddingMedium: '0 4px',
        itemMarginMedium: '0 0 0 8px',
        itemMarginMediumRtl: '0 8px 0 0',
        itemPaddingLarge: '0 4px',
        itemMarginLarge: '0 0 0 8px',
        itemMarginLargeRtl: '0 8px 0 0',
        buttonIconSizeSmall: '14px',
        buttonIconSizeMedium: '16px',
        buttonIconSizeLarge: '18px',
        inputWidthSmall: '60px',
        selectWidthSmall: 'unset',
        inputMarginSmall: '0 0 0 8px',
        inputMarginSmallRtl: '0 8px 0 0',
        selectMarginSmall: '0 0 0 8px',
        prefixMarginSmall: '0 8px 0 0',
        suffixMarginSmall: '0 0 0 8px',
        inputWidthMedium: '60px',
        selectWidthMedium: 'unset',
        inputMarginMedium: '0 0 0 8px',
        inputMarginMediumRtl: '0 8px 0 0',
        selectMarginMedium: '0 0 0 8px',
        prefixMarginMedium: '0 8px 0 0',
        suffixMarginMedium: '0 0 0 8px',
        inputWidthLarge: '60px',
        selectWidthLarge: 'unset',
        inputMarginLarge: '0 0 0 8px',
        inputMarginLargeRtl: '0 8px 0 0',
        selectMarginLarge: '0 0 0 8px',
        prefixMarginLarge: '0 8px 0 0',
        suffixMarginLarge: '0 0 0 8px'
    }, Om = {
        name: 'Pagination',
        common: of,
        peers: {
            Select: Rm,
            Input: Fh,
            Popselect: Pm
        },
        self(e) {
            const {
                    primaryColor: o,
                    opacity3: t
                } = e, n = Yi(o, { alpha: Number(t) }), r = (e => {
                    const {
                        textColor2: o,
                        primaryColor: t,
                        primaryColorHover: n,
                        primaryColorPressed: r,
                        inputColorDisabled: i,
                        textColorDisabled: l,
                        borderColor: a,
                        borderRadius: s,
                        fontSizeTiny: c,
                        fontSizeSmall: u,
                        fontSizeMedium: d,
                        heightTiny: p,
                        heightSmall: f,
                        heightMedium: h
                    } = e;
                    return Object.assign(Object.assign({}, Lm), {
                        buttonColor: '#0000',
                        buttonColorHover: '#0000',
                        buttonColorPressed: '#0000',
                        buttonBorder: `1px solid ${ a }`,
                        buttonBorderHover: `1px solid ${ a }`,
                        buttonBorderPressed: `1px solid ${ a }`,
                        buttonIconColor: o,
                        buttonIconColorHover: o,
                        buttonIconColorPressed: o,
                        itemTextColor: o,
                        itemTextColorHover: n,
                        itemTextColorPressed: r,
                        itemTextColorActive: t,
                        itemTextColorDisabled: l,
                        itemColor: '#0000',
                        itemColorHover: '#0000',
                        itemColorPressed: '#0000',
                        itemColorActive: '#0000',
                        itemColorActiveHover: '#0000',
                        itemColorDisabled: i,
                        itemBorder: '1px solid #0000',
                        itemBorderHover: '1px solid #0000',
                        itemBorderPressed: '1px solid #0000',
                        itemBorderActive: `1px solid ${ t }`,
                        itemBorderDisabled: `1px solid ${ a }`,
                        itemBorderRadius: s,
                        itemSizeSmall: p,
                        itemSizeMedium: f,
                        itemSizeLarge: h,
                        itemFontSizeSmall: c,
                        itemFontSizeMedium: u,
                        itemFontSizeLarge: d,
                        jumperFontSizeSmall: c,
                        jumperFontSizeMedium: u,
                        jumperFontSizeLarge: d,
                        jumperTextColor: o,
                        jumperTextColorDisabled: l
                    });
                })(e);
            return r.itemBorderActive = `1px solid ${ n }`, r.itemBorderDisabled = '1px solid #0000', r;
        }
    }, Am = { padding: '8px 14px' }, Im = {
        name: 'Tooltip',
        common: of,
        peers: { Popover: xh },
        self(e) {
            const {
                borderRadius: o,
                boxShadow2: t,
                popoverColor: n,
                textColor2: r
            } = e;
            return Object.assign(Object.assign({}, Am), {
                borderRadius: o,
                boxShadow: t,
                color: n,
                textColor: r
            });
        }
    }, $m = {
        name: 'Ellipsis',
        common: of,
        peers: { Tooltip: Im }
    }, Mm = {
        radioSizeSmall: '14px',
        radioSizeMedium: '16px',
        radioSizeLarge: '18px',
        labelPadding: '0 8px',
        labelFontWeight: '400'
    }, Hm = {
        name: 'Radio',
        common: of,
        self(e) {
            const {
                borderColor: o,
                primaryColor: t,
                baseColor: n,
                textColorDisabled: r,
                inputColorDisabled: i,
                textColor2: l,
                opacityDisabled: a,
                borderRadius: s,
                fontSizeSmall: c,
                fontSizeMedium: u,
                fontSizeLarge: d,
                heightSmall: p,
                heightMedium: f,
                heightLarge: h,
                lineHeight: m
            } = e;
            return Object.assign(Object.assign({}, Mm), {
                labelLineHeight: m,
                buttonHeightSmall: p,
                buttonHeightMedium: f,
                buttonHeightLarge: h,
                fontSizeSmall: c,
                fontSizeMedium: u,
                fontSizeLarge: d,
                boxShadow: `inset 0 0 0 1px ${ o }`,
                boxShadowActive: `inset 0 0 0 1px ${ t }`,
                boxShadowFocus: `inset 0 0 0 1px ${ t }, 0 0 0 2px ${ Yi(t, { alpha: 0.3 }) }`,
                boxShadowHover: `inset 0 0 0 1px ${ t }`,
                boxShadowDisabled: `inset 0 0 0 1px ${ o }`,
                color: '#0000',
                colorDisabled: i,
                colorActive: '#0000',
                textColor: l,
                textColorDisabled: r,
                dotColorActive: t,
                dotColorDisabled: o,
                buttonBorderColor: o,
                buttonBorderColorActive: t,
                buttonBorderColorHover: t,
                buttonColor: '#0000',
                buttonColorActive: t,
                buttonTextColor: l,
                buttonTextColorActive: n,
                buttonTextColorHover: t,
                opacityDisabled: a,
                buttonBoxShadowFocus: `inset 0 0 0 1px ${ t }, 0 0 0 2px ${ Yi(t, { alpha: 0.3 }) }`,
                buttonBoxShadowHover: `inset 0 0 0 1px ${ t }`,
                buttonBoxShadow: 'inset 0 0 0 1px #0000',
                buttonBorderRadius: s
            });
        }
    }, Fm = {
        padding: '4px 0',
        optionIconSizeSmall: '14px',
        optionIconSizeMedium: '16px',
        optionIconSizeLarge: '16px',
        optionIconSizeHuge: '18px',
        optionSuffixWidthSmall: '14px',
        optionSuffixWidthMedium: '14px',
        optionSuffixWidthLarge: '16px',
        optionSuffixWidthHuge: '16px',
        optionIconSuffixWidthSmall: '32px',
        optionIconSuffixWidthMedium: '32px',
        optionIconSuffixWidthLarge: '36px',
        optionIconSuffixWidthHuge: '36px',
        optionPrefixWidthSmall: '14px',
        optionPrefixWidthMedium: '14px',
        optionPrefixWidthLarge: '16px',
        optionPrefixWidthHuge: '16px',
        optionIconPrefixWidthSmall: '36px',
        optionIconPrefixWidthMedium: '36px',
        optionIconPrefixWidthLarge: '40px',
        optionIconPrefixWidthHuge: '40px'
    }, Bm = e => {
        const {
            primaryColor: o,
            textColor2: t,
            dividerColor: n,
            hoverColor: r,
            popoverColor: i,
            invertedColor: l,
            borderRadius: a,
            fontSizeSmall: s,
            fontSizeMedium: c,
            fontSizeLarge: u,
            fontSizeHuge: d,
            heightSmall: p,
            heightMedium: f,
            heightLarge: h,
            heightHuge: m,
            textColor3: g,
            opacityDisabled: v
        } = e;
        return Object.assign(Object.assign({}, Fm), {
            optionHeightSmall: p,
            optionHeightMedium: f,
            optionHeightLarge: h,
            optionHeightHuge: m,
            borderRadius: a,
            fontSizeSmall: s,
            fontSizeMedium: c,
            fontSizeLarge: u,
            fontSizeHuge: d,
            optionTextColor: t,
            optionTextColorHover: t,
            optionTextColorActive: o,
            optionTextColorChildActive: o,
            color: i,
            dividerColor: n,
            suffixColor: t,
            prefixColor: t,
            optionColorHover: r,
            optionColorActive: Yi(o, { alpha: 0.1 }),
            groupHeaderTextColor: g,
            optionTextColorInverted: '#BBB',
            optionTextColorHoverInverted: '#FFF',
            optionTextColorActiveInverted: '#FFF',
            optionTextColorChildActiveInverted: '#FFF',
            colorInverted: l,
            dividerColorInverted: '#BBB',
            suffixColorInverted: '#BBB',
            prefixColorInverted: '#BBB',
            optionColorHoverInverted: o,
            optionColorActiveInverted: o,
            groupHeaderTextColorInverted: '#AAA',
            optionOpacityDisabled: v
        });
    }, Dm = {
        name: 'Dropdown',
        common: qf,
        peers: { Popover: bh },
        self: Bm
    }, jm = {
        name: 'Dropdown',
        common: of,
        peers: { Popover: xh },
        self(e) {
            const {
                    primaryColorSuppl: o,
                    primaryColor: t,
                    popoverColor: n
                } = e, r = Bm(e);
            return r.colorInverted = n, r.optionColorActive = Yi(t, { alpha: 0.15 }), r.optionColorActiveInverted = o, r.optionColorHoverInverted = o, r;
        }
    }, Nm = {
        thPaddingSmall: '8px',
        thPaddingMedium: '12px',
        thPaddingLarge: '12px',
        tdPaddingSmall: '8px',
        tdPaddingMedium: '12px',
        tdPaddingLarge: '12px',
        sorterSize: '15px',
        resizableContainerSize: '8px',
        resizableSize: '2px',
        filterSize: '15px',
        paginationMargin: '12px 0 0 0',
        emptyPadding: '48px 0',
        actionPadding: '8px 12px',
        actionButtonMargin: '0 8px 0 0'
    }, Wm = {
        name: 'DataTable',
        common: of,
        peers: {
            Button: Qh,
            Checkbox: xm,
            Radio: Hm,
            Pagination: Om,
            Scrollbar: eh,
            Empty: Jf,
            Popover: xh,
            Ellipsis: $m,
            Dropdown: jm
        },
        self(e) {
            const o = (e => {
                const {
                    cardColor: o,
                    modalColor: t,
                    popoverColor: n,
                    textColor2: r,
                    textColor1: i,
                    tableHeaderColor: l,
                    tableColorHover: a,
                    iconColor: s,
                    primaryColor: c,
                    fontWeightStrong: u,
                    borderRadius: d,
                    lineHeight: p,
                    fontSizeSmall: f,
                    fontSizeMedium: h,
                    fontSizeLarge: m,
                    dividerColor: g,
                    heightSmall: v,
                    opacityDisabled: b,
                    tableColorStriped: x
                } = e;
                return Object.assign(Object.assign({}, Nm), {
                    actionDividerColor: g,
                    lineHeight: p,
                    borderRadius: d,
                    fontSizeSmall: f,
                    fontSizeMedium: h,
                    fontSizeLarge: m,
                    borderColor: Ki(o, g),
                    tdColorHover: Ki(o, a),
                    tdColorStriped: Ki(o, x),
                    thColor: Ki(o, l),
                    thColorHover: Ki(Ki(o, l), a),
                    tdColor: o,
                    tdTextColor: r,
                    thTextColor: i,
                    thFontWeight: u,
                    thButtonColorHover: a,
                    thIconColor: s,
                    thIconColorActive: c,
                    borderColorModal: Ki(t, g),
                    tdColorHoverModal: Ki(t, a),
                    tdColorStripedModal: Ki(t, x),
                    thColorModal: Ki(t, l),
                    thColorHoverModal: Ki(Ki(t, l), a),
                    tdColorModal: t,
                    borderColorPopover: Ki(n, g),
                    tdColorHoverPopover: Ki(n, a),
                    tdColorStripedPopover: Ki(n, x),
                    thColorPopover: Ki(n, l),
                    thColorHoverPopover: Ki(Ki(n, l), a),
                    tdColorPopover: n,
                    boxShadowBefore: 'inset -12px 0 8px -12px rgba(0, 0, 0, .18)',
                    boxShadowAfter: 'inset 12px 0 8px -12px rgba(0, 0, 0, .18)',
                    loadingColor: c,
                    loadingSize: v,
                    opacityLoading: b
                });
            })(e);
            return o.boxShadowAfter = 'inset 12px 0 8px -12px rgba(0, 0, 0, .36)', o.boxShadowBefore = 'inset -12px 0 8px -12px rgba(0, 0, 0, .36)', o;
        }
    }, Um = e => {
        const {
            textColorBase: o,
            opacity1: t,
            opacity2: n,
            opacity3: r,
            opacity4: i,
            opacity5: l
        } = e;
        return {
            color: o,
            opacity1Depth: t,
            opacity2Depth: n,
            opacity3Depth: r,
            opacity4Depth: i,
            opacity5Depth: l
        };
    }, Vm = {
        name: 'Icon',
        common: qf,
        self: Um
    }, Gm = {
        name: 'Icon',
        common: of,
        self: Um
    }, qm = {
        itemFontSize: '12px',
        itemHeight: '36px',
        itemWidth: '52px',
        panelActionPadding: '8px 0'
    }, Km = {
        name: 'TimePicker',
        common: of,
        peers: {
            Scrollbar: eh,
            Button: Qh,
            Input: Fh
        },
        self: e => {
            const {
                popoverColor: o,
                textColor2: t,
                primaryColor: n,
                hoverColor: r,
                dividerColor: i,
                opacityDisabled: l,
                boxShadow2: a,
                borderRadius: s,
                iconColor: c,
                iconColorDisabled: u
            } = e;
            return Object.assign(Object.assign({}, qm), {
                panelColor: o,
                panelBoxShadow: a,
                panelDividerColor: i,
                itemTextColor: t,
                itemTextColorActive: n,
                itemColorHover: r,
                itemOpacityDisabled: l,
                itemBorderRadius: s,
                borderRadius: s,
                iconColor: c,
                iconColorDisabled: u
            });
        }
    }, Ym = {
        itemSize: '24px',
        itemCellWidth: '38px',
        itemCellHeight: '32px',
        scrollItemWidth: '80px',
        scrollItemHeight: '40px',
        panelExtraFooterPadding: '8px 12px',
        panelActionPadding: '8px 12px',
        calendarTitlePadding: '0',
        calendarTitleHeight: '28px',
        arrowSize: '14px',
        panelHeaderPadding: '8px 12px',
        calendarDaysHeight: '32px',
        calendarTitleGridTempateColumns: '28px 28px 1fr 28px 28px',
        calendarLeftPaddingDate: '6px 12px 4px 12px',
        calendarLeftPaddingDatetime: '4px 12px',
        calendarLeftPaddingDaterange: '6px 12px 4px 12px',
        calendarLeftPaddingDatetimerange: '4px 12px',
        calendarLeftPaddingMonth: '0',
        calendarLeftPaddingYear: '0',
        calendarLeftPaddingQuarter: '0',
        calendarLeftPaddingMonthrange: '0',
        calendarLeftPaddingQuarterrange: '0',
        calendarLeftPaddingYearrange: '0',
        calendarRightPaddingDate: '6px 12px 4px 12px',
        calendarRightPaddingDatetime: '4px 12px',
        calendarRightPaddingDaterange: '6px 12px 4px 12px',
        calendarRightPaddingDatetimerange: '4px 12px',
        calendarRightPaddingMonth: '0',
        calendarRightPaddingYear: '0',
        calendarRightPaddingQuarter: '0',
        calendarRightPaddingMonthrange: '0',
        calendarRightPaddingQuarterrange: '0',
        calendarRightPaddingYearrange: '0'
    }, Xm = {
        name: 'DatePicker',
        common: of,
        peers: {
            Input: Fh,
            Button: Qh,
            TimePicker: Km,
            Scrollbar: eh
        },
        self(e) {
            const {
                    popoverColor: o,
                    hoverColor: t,
                    primaryColor: n
                } = e, r = (e => {
                    const {
                        hoverColor: o,
                        fontSize: t,
                        textColor2: n,
                        textColorDisabled: r,
                        popoverColor: i,
                        primaryColor: l,
                        borderRadiusSmall: a,
                        iconColor: s,
                        iconColorDisabled: c,
                        textColor1: u,
                        dividerColor: d,
                        boxShadow2: p,
                        borderRadius: f,
                        fontWeightStrong: h
                    } = e;
                    return Object.assign(Object.assign({}, Ym), {
                        itemFontSize: t,
                        calendarDaysFontSize: t,
                        calendarTitleFontSize: t,
                        itemTextColor: n,
                        itemTextColorDisabled: r,
                        itemTextColorActive: i,
                        itemTextColorCurrent: l,
                        itemColorIncluded: Yi(l, { alpha: 0.1 }),
                        itemColorHover: o,
                        itemColorDisabled: o,
                        itemColorActive: l,
                        itemBorderRadius: a,
                        panelColor: i,
                        panelTextColor: n,
                        arrowColor: s,
                        calendarTitleTextColor: u,
                        calendarTitleColorHover: o,
                        calendarDaysTextColor: n,
                        panelHeaderDividerColor: d,
                        calendarDaysDividerColor: d,
                        calendarDividerColor: d,
                        panelActionDividerColor: d,
                        panelBoxShadow: p,
                        panelBorderRadius: f,
                        calendarTitleFontWeight: h,
                        scrollItemBorderRadius: f,
                        iconColor: s,
                        iconColorDisabled: c
                    });
                })(e);
            return r.itemColorDisabled = Ki(o, t), r.itemColorIncluded = Yi(n, { alpha: 0.15 }), r.itemColorHover = Ki(o, t), r;
        }
    }, Jm = {
        thPaddingBorderedSmall: '8px 12px',
        thPaddingBorderedMedium: '12px 16px',
        thPaddingBorderedLarge: '16px 24px',
        thPaddingSmall: '0',
        thPaddingMedium: '0',
        thPaddingLarge: '0',
        tdPaddingBorderedSmall: '8px 12px',
        tdPaddingBorderedMedium: '12px 16px',
        tdPaddingBorderedLarge: '16px 24px',
        tdPaddingSmall: '0 0 8px 0',
        tdPaddingMedium: '0 0 12px 0',
        tdPaddingLarge: '0 0 16px 0'
    }, Zm = {
        name: 'Descriptions',
        common: of,
        self: e => {
            const {
                tableHeaderColor: o,
                textColor2: t,
                textColor1: n,
                cardColor: r,
                modalColor: i,
                popoverColor: l,
                dividerColor: a,
                borderRadius: s,
                fontWeightStrong: c,
                lineHeight: u,
                fontSizeSmall: d,
                fontSizeMedium: p,
                fontSizeLarge: f
            } = e;
            return Object.assign(Object.assign({}, Jm), {
                lineHeight: u,
                fontSizeSmall: d,
                fontSizeMedium: p,
                fontSizeLarge: f,
                titleTextColor: n,
                thColor: Ki(r, o),
                thColorModal: Ki(i, o),
                thColorPopover: Ki(l, o),
                thTextColor: n,
                thFontWeight: c,
                tdTextColor: t,
                tdColor: r,
                tdColorModal: i,
                tdColorPopover: l,
                borderColor: Ki(r, a),
                borderColorModal: Ki(i, a),
                borderColorPopover: Ki(l, a),
                borderRadius: s
            });
        }
    }, Qm = {
        titleFontSize: '18px',
        padding: '16px 28px 20px 28px',
        iconSize: '28px',
        actionSpace: '12px',
        contentMargin: '8px 0 16px 0',
        iconMargin: '0 4px 0 0',
        iconMarginIconTop: '4px 0 8px 0',
        closeSize: '22px',
        closeIconSize: '18px',
        closeMargin: '20px 26px 0 0',
        closeMarginIconTop: '10px 16px 0 0'
    }, eg = e => {
        const {
            textColor1: o,
            textColor2: t,
            modalColor: n,
            closeIconColor: r,
            closeIconColorHover: i,
            closeIconColorPressed: l,
            closeColorHover: a,
            closeColorPressed: s,
            infoColor: c,
            successColor: u,
            warningColor: d,
            errorColor: p,
            primaryColor: f,
            dividerColor: h,
            borderRadius: m,
            fontWeightStrong: g,
            lineHeight: v,
            fontSize: b
        } = e;
        return Object.assign(Object.assign({}, Qm), {
            fontSize: b,
            lineHeight: v,
            border: `1px solid ${ h }`,
            titleTextColor: o,
            textColor: t,
            color: n,
            closeColorHover: a,
            closeColorPressed: s,
            closeIconColor: r,
            closeIconColorHover: i,
            closeIconColorPressed: l,
            closeBorderRadius: m,
            iconColor: f,
            iconColorInfo: c,
            iconColorSuccess: u,
            iconColorWarning: d,
            iconColorError: p,
            borderRadius: m,
            titleFontWeight: g
        });
    }, og = {
        name: 'Dialog',
        common: qf,
        peers: { Button: Zh },
        self: eg
    }, tg = {
        name: 'Dialog',
        common: of,
        peers: { Button: Qh },
        self: eg
    }, ng = {
        icon: Function,
        type: {
            type: String,
            default: 'default'
        },
        title: [
            String,
            Function
        ],
        closable: {
            type: Boolean,
            default: true
        },
        negativeText: String,
        positiveText: String,
        positiveButtonProps: Object,
        negativeButtonProps: Object,
        content: [
            String,
            Function
        ],
        action: Function,
        showIcon: {
            type: Boolean,
            default: true
        },
        loading: Boolean,
        bordered: Boolean,
        iconPlacement: String,
        onPositiveClick: Function,
        onNegativeClick: Function,
        onClose: Function
    }, rg = al(ng), ig = Wl([
        Vl('dialog', '\n word-break: break-word;\n line-height: var(--n-line-height);\n position: relative;\n background: var(--n-color);\n color: var(--n-text-color);\n box-sizing: border-box;\n margin: auto;\n border-radius: var(--n-border-radius);\n padding: var(--n-padding);\n transition: \n border-color .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n color .3s var(--n-bezier);\n ', [
            Gl('icon', { color: 'var(--n-icon-color)' }),
            ql('bordered', { border: 'var(--n-border)' }),
            ql('icon-top', [
                Gl('close', { margin: 'var(--n-close-margin)' }),
                Gl('icon', { margin: 'var(--n-icon-margin)' }),
                Gl('content', { textAlign: 'center' }),
                Gl('title', { justifyContent: 'center' }),
                Gl('action', { justifyContent: 'center' })
            ]),
            ql('icon-left', [
                Gl('icon', { margin: 'var(--n-icon-margin)' }),
                ql('closable', [Gl('title', '\n padding-right: calc(var(--n-close-size) + 6px);\n ')])
            ]),
            Gl('close', '\n position: absolute;\n right: 0;\n top: 0;\n margin: var(--n-close-margin);\n transition:\n background-color .3s var(--n-bezier),\n color .3s var(--n-bezier);\n z-index: 1;\n '),
            Gl('content', '\n font-size: var(--n-font-size);\n margin: var(--n-content-margin);\n position: relative;\n word-break: break-word;\n ', [ql('last', 'margin-bottom: 0;')]),
            Gl('action', '\n display: flex;\n justify-content: flex-end;\n ', [Wl('> *:not(:last-child)', { marginRight: 'var(--n-action-space)' })]),
            Gl('icon', {
                fontSize: 'var(--n-icon-size)',
                transition: 'color .3s var(--n-bezier)'
            }),
            Gl('title', '\n transition: color .3s var(--n-bezier);\n display: flex;\n align-items: center;\n font-size: var(--n-title-font-size);\n font-weight: var(--n-title-font-weight);\n color: var(--n-title-text-color);\n '),
            Vl('dialog-icon-container', {
                display: 'flex',
                justifyContent: 'center'
            })
        ]),
        Yl(Vl('dialog', '\n width: 446px;\n max-width: calc(100vw - 32px);\n ')),
        Vl('dialog', [Jl('\n width: 446px;\n max-width: calc(100vw - 32px);\n ')])
    ]), lg = {
        default: () => kr(Dd, null),
        info: () => kr(Dd, null),
        success: () => kr(jd, null),
        warning: () => kr(Nd, null),
        error: () => kr(Bd, null)
    }, ag = Tt({
        name: 'Dialog',
        alias: [
            'NimbusConfirmCard',
            'Confirm'
        ],
        props: Object.assign(Object.assign({}, Ld.props), ng),
        setup(e) {
            const {
                    mergedComponentPropsRef: o,
                    mergedClsPrefixRef: t,
                    inlineThemeDisabled: n
                } = Ad(e), r = Er(() => {
                    var t, n;
                    const {iconPlacement: r} = e;
                    return r || (null === (n = null === (t = null == o ? void 0 : o.value) || void 0 === t ? void 0 : t.Dialog) || void 0 === n ? void 0 : n.iconPlacement) || 'left';
                });
            const i = Ld('Dialog', '-dialog', ig, og, e, t), l = Er(() => {
                    const {type: o} = e, t = r.value, {
                            common: {cubicBezierEaseInOut: n},
                            self: {
                                fontSize: l,
                                lineHeight: a,
                                border: s,
                                titleTextColor: c,
                                textColor: u,
                                color: d,
                                closeBorderRadius: p,
                                closeColorHover: f,
                                closeColorPressed: h,
                                closeIconColor: m,
                                closeIconColorHover: g,
                                closeIconColorPressed: v,
                                closeIconSize: b,
                                borderRadius: x,
                                titleFontWeight: C,
                                titleFontSize: y,
                                padding: S,
                                iconSize: w,
                                actionSpace: _,
                                contentMargin: z,
                                closeSize: T,
                                ['top' === t ? 'iconMarginIconTop' : 'iconMargin']: P,
                                ['top' === t ? 'closeMarginIconTop' : 'closeMargin']: E,
                                [Bl('iconColor', o)]: k
                            }
                        } = i.value;
                    return {
                        '--n-font-size': l,
                        '--n-icon-color': k,
                        '--n-bezier': n,
                        '--n-close-margin': E,
                        '--n-icon-margin': P,
                        '--n-icon-size': w,
                        '--n-close-size': T,
                        '--n-close-icon-size': b,
                        '--n-close-border-radius': p,
                        '--n-close-color-hover': f,
                        '--n-close-color-pressed': h,
                        '--n-close-icon-color': m,
                        '--n-close-icon-color-hover': g,
                        '--n-close-icon-color-pressed': v,
                        '--n-color': d,
                        '--n-text-color': u,
                        '--n-border-radius': x,
                        '--n-padding': S,
                        '--n-line-height': a,
                        '--n-border': s,
                        '--n-content-margin': z,
                        '--n-title-font-size': y,
                        '--n-title-font-weight': C,
                        '--n-title-text-color': c,
                        '--n-action-space': _
                    };
                }), a = n ? $d('dialog', Er(() => `${ e.type[0] }${ r.value[0] }`), l, e) : void 0;
            return {
                mergedClsPrefix: t,
                mergedIconPlacement: r,
                mergedTheme: i,
                handlePositiveClick: function (o) {
                    const {onPositiveClick: t} = e;
                    t && t(o);
                },
                handleNegativeClick: function (o) {
                    const {onNegativeClick: t} = e;
                    t && t(o);
                },
                handleCloseClick: function () {
                    const {onClose: o} = e;
                    o && o();
                },
                cssVars: n ? void 0 : l,
                themeClass: null == a ? void 0 : a.themeClass,
                onRender: null == a ? void 0 : a.onRender
            };
        },
        render() {
            var e;
            const {
                bordered: o,
                mergedIconPlacement: t,
                cssVars: n,
                closable: r,
                showIcon: i,
                title: l,
                content: a,
                action: s,
                negativeText: c,
                positiveText: u,
                positiveButtonProps: d,
                negativeButtonProps: p,
                handlePositiveClick: f,
                handleNegativeClick: h,
                mergedTheme: m,
                loading: g,
                type: v,
                mergedClsPrefix: b
            } = this;
            null === (e = this.onRender) || void 0 === e || e.call(this);
            const x = i ? kr(Gd, {
                    clsPrefix: b,
                    class: `${ b }-dialog__icon`
                }, { default: () => ml(this.$slots.icon, e => e || (this.icon ? sl(this.icon) : lg[this.type]())) }) : null, C = ml(this.$slots.action, e => e || u || c || s ? kr('div', { class: `${ b }-dialog__action` }, e || (s ? [sl(s)] : [
                    this.negativeText && kr(om, Object.assign({
                        theme: m.peers.Button,
                        themeOverrides: m.peerOverrides.Button,
                        ghost: true,
                        size: 'small',
                        onClick: h
                    }, p), { default: () => sl(this.negativeText) }),
                    this.positiveText && kr(om, Object.assign({
                        theme: m.peers.Button,
                        themeOverrides: m.peerOverrides.Button,
                        size: 'small',
                        type: 'default' === v ? 'primary' : v,
                        disabled: g,
                        loading: g,
                        onClick: f
                    }, d), { default: () => sl(this.positiveText) })
                ])) : null);
            return kr('div', {
                class: [
                    `${ b }-dialog`,
                    this.themeClass,
                    this.closable && `${ b }-dialog--closable`,
                    `${ b }-dialog--icon-${ t }`,
                    o && `${ b }-dialog--bordered`
                ],
                style: n,
                role: 'dialog'
            }, r ? kr(Kd, {
                clsPrefix: b,
                class: `${ b }-dialog__close`,
                onClick: this.handleCloseClick
            }) : null, i && 'top' === t ? kr('div', { class: `${ b }-dialog-icon-container` }, x) : null, kr('div', { class: `${ b }-dialog__title` }, i && 'left' === t ? x : null, hl(this.$slots.header, () => [sl(l)])), kr('div', {
                class: [
                    `${ b }-dialog__content`,
                    C ? '' : `${ b }-dialog__content--last`
                ]
            }, hl(this.$slots.default, () => [sl(a)])), C);
        }
    }), sg = 'n-dialog-provider', cg = 'n-dialog-api', ug = e => {
        const {
            modalColor: o,
            textColor2: t,
            boxShadow3: n
        } = e;
        return {
            color: o,
            textColor: t,
            boxShadow: n
        };
    }, dg = {
        name: 'Modal',
        common: qf,
        peers: {
            Scrollbar: Qf,
            Dialog: og,
            Card: cm
        },
        self: ug
    }, pg = {
        name: 'Modal',
        common: of,
        peers: {
            Scrollbar: eh,
            Dialog: tg,
            Card: um
        },
        self: ug
    }, fg = Object.assign(Object.assign({}, pm), ng), hg = al(fg), mg = Tt({
        name: 'ModalBody',
        inheritAttrs: false,
        props: Object.assign(Object.assign({
            show: {
                type: Boolean,
                required: true
            },
            preset: String,
            displayDirective: {
                type: String,
                required: true
            },
            trapFocus: {
                type: Boolean,
                default: true
            },
            autoFocus: {
                type: Boolean,
                default: true
            },
            blockScroll: Boolean
        }, fg), {
            renderMask: Function,
            onClickoutside: Function,
            onBeforeLeave: {
                type: Function,
                required: true
            },
            onAfterLeave: {
                type: Function,
                required: true
            },
            onPositiveClick: {
                type: Function,
                required: true
            },
            onNegativeClick: {
                type: Function,
                required: true
            },
            onClose: {
                type: Function,
                required: true
            },
            onAfterEnter: Function,
            onEsc: Function
        }),
        setup(e) {
            const o = xo(null), t = xo(null), n = xo(e.show), r = xo(null), i = xo(null);
            pt(Po(e, 'show'), e => {
                e && (n.value = true);
            });
            (function (e) {
                if ('undefined' == typeof document) {
                    return;
                }
                const o = document.documentElement;
                let t, n = false;
                const r = () => {
                    o.style.marginRight = Is;
                    o.style.overflow = $s;
                    o.style.overflowX = Ms;
                    o.style.overflowY = Hs;
                    Fs.value = '0px';
                };
                Mt(() => {
                    t = pt(e, e => {
                        if (e) {
                            if (!As) {
                                const e = window.innerWidth - o.offsetWidth;
                                e > 0 && (Is = o.style.marginRight, o.style.marginRight = `${ e }px`, Fs.value = `${ e }px`);
                                $s = o.style.overflow;
                                Ms = o.style.overflowX;
                                Hs = o.style.overflowY;
                                o.style.overflow = 'hidden';
                                o.style.overflowX = 'hidden';
                                o.style.overflowY = 'hidden';
                            }
                            n = true;
                            As++;
                        } else {
                            As--;
                            As || r();
                            n = false;
                        }
                    }, { immediate: true });
                });
                Bt(() => {
                    null == t || t();
                    n && (As--, As || r(), n = false);
                });
            }(Er(() => e.blockScroll && n.value)));
            const l = ct(Sa);
            function a() {
                if ('center' === l.transformOriginRef.value) {
                    return '';
                }
                const {value: e} = r, {value: o} = i;
                if (null === e || null === o) {
                    return '';
                }
                if (t.value) {
                    return `${ e }px ${ o + t.value.containerScrollTop }px`;
                }
                return '';
            }
            const s = xo(null);
            return pt(s, e => {
                e && Wo(() => {
                    const t = e.el;
                    t && o.value !== t && (o.value = t);
                });
            }), st(ya, o), st(wa, null), st(_a, null), {
                mergedTheme: l.mergedThemeRef,
                appear: l.appearRef,
                isMounted: l.isMountedRef,
                mergedClsPrefix: l.mergedClsPrefixRef,
                bodyRef: o,
                scrollbarRef: t,
                displayed: n,
                childNodeRef: s,
                handlePositiveClick: function () {
                    e.onPositiveClick();
                },
                handleNegativeClick: function () {
                    e.onNegativeClick();
                },
                handleCloseClick: function () {
                    const {onClose: o} = e;
                    o && o();
                },
                handleAfterLeave: function () {
                    n.value = false;
                    r.value = null;
                    i.value = null;
                    e.onAfterLeave();
                },
                handleBeforeLeave: function (o) {
                    o.style.transformOrigin = a();
                    e.onBeforeLeave();
                },
                handleEnter: function (e) {
                    Wo(() => {
                        !function (e) {
                            if ('center' === l.transformOriginRef.value) {
                                return;
                            }
                            const o = l.getMousePosition();
                            if (!o) {
                                return;
                            }
                            if (!t.value) {
                                return;
                            }
                            const n = t.value.containerScrollTop, {
                                    offsetLeft: s,
                                    offsetTop: c
                                } = e;
                            if (o) {
                                const e = o.y, t = o.x;
                                r.value = -(s - t);
                                i.value = -(c - e - n);
                            }
                            e.style.transformOrigin = a();
                        }(e);
                    });
                }
            };
        },
        render() {
            const {
                $slots: e,
                $attrs: o,
                handleEnter: t,
                handleAfterLeave: n,
                handleBeforeLeave: r,
                preset: i,
                mergedClsPrefix: l
            } = this;
            let a = null;
            if (!i) {
                if (a = dl(e), !a) {
                    return;
                }
                a = cr(a);
                a.props = hr({ class: `${ l }-modal` }, o, a.props || {});
            }
            return 'show' === this.displayDirective || this.displayed || this.show ? Vt(kr('div', {
                role: 'none',
                class: `${ l }-modal-body-wrapper`
            }, kr(ih, {
                ref: 'scrollbarRef',
                theme: this.mergedTheme.peers.Scrollbar,
                themeOverrides: this.mergedTheme.peerOverrides.Scrollbar,
                contentClass: `${ l }-modal-scroll-content`
            }, {
                default: () => {
                    var o;
                    return [
                        null === (o = this.renderMask) || void 0 === o ? void 0 : o.call(this),
                        kr(Os, {
                            disabled: !this.trapFocus,
                            active: this.show,
                            onEsc: this.onEsc,
                            autoFocus: this.autoFocus
                        }, {
                            default: () => {
                                var o;
                                return kr(Yr, {
                                    name: 'fade-in-scale-up-transition',
                                    appear: null !== (o = this.appear) && void 0 !== o ? o : this.isMounted,
                                    onEnter: t,
                                    onAfterEnter: this.onAfterEnter,
                                    onAfterLeave: n,
                                    onBeforeLeave: r
                                }, {
                                    default: () => {
                                        const o = [[
                                                    yi,
                                                    this.show
                                                ]], {onClickoutside: t} = this;
                                        return t && o.push([
                                            Ea,
                                            this.onClickoutside,
                                            void 0,
                                            { capture: true }
                                        ]), Vt('confirm' === this.preset || 'dialog' === this.preset ? kr(ag, Object.assign({}, this.$attrs, {
                                            class: [
                                                `${ l }-modal`,
                                                this.$attrs.class
                                            ],
                                            ref: 'bodyRef',
                                            theme: this.mergedTheme.peers.Dialog,
                                            themeOverrides: this.mergedTheme.peerOverrides.Dialog
                                        }, nl(this.$props, rg), { 'aria-modal': 'true' }), e) : 'card' === this.preset ? kr(hm, Object.assign({}, this.$attrs, {
                                            ref: 'bodyRef',
                                            class: [
                                                `${ l }-modal`,
                                                this.$attrs.class
                                            ],
                                            theme: this.mergedTheme.peers.Card,
                                            themeOverrides: this.mergedTheme.peerOverrides.Card
                                        }, nl(this.$props, fm), {
                                            'aria-modal': 'true',
                                            role: 'dialog'
                                        }), e) : this.childNodeRef = a, o);
                                    }
                                });
                            }
                        })
                    ];
                }
            })), [[
                    yi,
                    'if' === this.displayDirective || this.displayed || this.show
                ]]) : null;
        }
    }), gg = Wl([
        Vl('modal-container', '\n position: fixed;\n left: 0;\n top: 0;\n height: 0;\n width: 0;\n display: flex;\n '),
        Vl('modal-mask', '\n position: fixed;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n background-color: rgba(0, 0, 0, .4);\n ', [th({
                enterDuration: '.25s',
                leaveDuration: '.25s',
                enterCubicBezier: 'var(--n-bezier-ease-out)',
                leaveCubicBezier: 'var(--n-bezier-ease-out)'
            })]),
        Vl('modal-body-wrapper', '\n position: fixed;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n overflow: visible;\n ', [Vl('modal-scroll-content', '\n min-height: 100%;\n display: flex;\n position: relative;\n ')]),
        Vl('modal', '\n position: relative;\n align-self: center;\n color: var(--n-text-color);\n margin: auto;\n box-shadow: var(--n-box-shadow);\n ', [fh({
                duration: '.25s',
                enterScale: '.5'
            })])
    ]), vg = Tt({
        name: 'Modal',
        inheritAttrs: false,
        props: Object.assign(Object.assign(Object.assign(Object.assign({}, Ld.props), {
            show: Boolean,
            unstableShowMask: {
                type: Boolean,
                default: true
            },
            maskClosable: {
                type: Boolean,
                default: true
            },
            preset: String,
            to: [
                String,
                Object
            ],
            displayDirective: {
                type: String,
                default: 'if'
            },
            transformOrigin: {
                type: String,
                default: 'mouse'
            },
            zIndex: Number,
            autoFocus: {
                type: Boolean,
                default: true
            },
            trapFocus: {
                type: Boolean,
                default: true
            },
            closeOnEsc: {
                type: Boolean,
                default: true
            },
            blockScroll: {
                type: Boolean,
                default: true
            }
        }), fg), {
            onEsc: Function,
            'onUpdate:show': [
                Function,
                Array
            ],
            onUpdateShow: [
                Function,
                Array
            ],
            onAfterEnter: Function,
            onBeforeLeave: Function,
            onAfterLeave: Function,
            onClose: Function,
            onPositiveClick: Function,
            onNegativeClick: Function,
            onMaskClick: Function,
            internalDialog: Boolean,
            internalAppear: {
                type: Boolean,
                default: void 0
            },
            overlayStyle: [
                String,
                Object
            ],
            onBeforeHide: Function,
            onAfterHide: Function,
            onHide: Function
        }),
        setup(e) {
            const o = xo(null), {
                    mergedClsPrefixRef: t,
                    namespaceRef: n,
                    inlineThemeDisabled: r
                } = Ad(e), i = Ld('Modal', '-modal', gg, dg, e, t), l = ba(64), a = fa(), s = xa(), c = e.internalDialog ? ct(sg, null) : null, u = (Zl && ($t(() => {
                    Ns || (window.addEventListener('compositionstart', Ds), window.addEventListener('compositionend', js));
                    Ns++;
                }), Bt(() => {
                    Ns <= 1 ? (window.removeEventListener('compositionstart', Ds), window.removeEventListener('compositionend', js), Ns = 0) : Ns--;
                })), Bs);
            function d(o) {
                const {
                    onUpdateShow: t,
                    'onUpdate:show': n,
                    onHide: r
                } = e;
                t && ll(t, o);
                n && ll(n, o);
                r && !o && r(o);
            }
            st(Sa, {
                getMousePosition: () => {
                    if (c) {
                        const {
                            clickedRef: e,
                            clickPositionRef: o
                        } = c;
                        if (e.value && o.value) {
                            return o.value;
                        }
                    }
                    return l.value ? a.value : null;
                },
                mergedClsPrefixRef: t,
                mergedThemeRef: i,
                isMountedRef: s,
                appearRef: Po(e, 'internalAppear'),
                transformOriginRef: Po(e, 'transformOrigin')
            });
            const p = Er(() => {
                    const {
                        common: {cubicBezierEaseOut: e},
                        self: {
                            boxShadow: o,
                            color: t,
                            textColor: n
                        }
                    } = i.value;
                    return {
                        '--n-bezier-ease-out': e,
                        '--n-box-shadow': o,
                        '--n-color': t,
                        '--n-text-color': n
                    };
                }), f = r ? $d('theme-class', void 0, p, e) : void 0;
            return {
                mergedClsPrefix: t,
                namespace: n,
                isMounted: s,
                containerRef: o,
                presetProps: Er(() => nl(e, hg)),
                handleEsc: function (o) {
                    var t, n;
                    null === (t = e.onEsc) || void 0 === t || t.call(e);
                    e.show && e.closeOnEsc && (n = o, !Ql.has(n)) && !u.value && d(false);
                },
                handleAfterLeave: function () {
                    const {
                        onAfterLeave: o,
                        onAfterHide: t
                    } = e;
                    o && ll(o);
                    t && t();
                },
                handleClickoutside: function (t) {
                    var n;
                    const {onMaskClick: r} = e;
                    r && r(t);
                    e.maskClosable && (null === (n = o.value) || void 0 === n ? void 0 : n.contains(zi(t))) && d(false);
                },
                handleBeforeLeave: function () {
                    const {
                        onBeforeLeave: o,
                        onBeforeHide: t
                    } = e;
                    o && ll(o);
                    t && t();
                },
                doUpdateShow: d,
                handleNegativeClick: function () {
                    const {onNegativeClick: o} = e;
                    o ? Promise.resolve(o()).then(e => {
                        false !== e && d(false);
                    }) : d(false);
                },
                handlePositiveClick: function () {
                    const {onPositiveClick: o} = e;
                    o ? Promise.resolve(o()).then(e => {
                        false !== e && d(false);
                    }) : d(false);
                },
                handleCloseClick: function () {
                    const {onClose: o} = e;
                    o ? Promise.resolve(o()).then(e => {
                        false !== e && d(false);
                    }) : d(false);
                },
                cssVars: r ? void 0 : p,
                themeClass: null == f ? void 0 : f.themeClass,
                onRender: null == f ? void 0 : f.onRender
            };
        },
        render() {
            const {mergedClsPrefix: e} = this;
            return kr(Ha, {
                to: this.to,
                show: this.show
            }, {
                default: () => {
                    var o;
                    null === (o = this.onRender) || void 0 === o || o.call(this);
                    const {unstableShowMask: t} = this;
                    return Vt(kr('div', {
                        role: 'none',
                        ref: 'containerRef',
                        class: [
                            `${ e }-modal-container`,
                            this.themeClass,
                            this.namespace
                        ],
                        style: this.cssVars
                    }, kr(mg, Object.assign({ style: this.overlayStyle }, this.$attrs, {
                        ref: 'bodyWrapper',
                        displayDirective: this.displayDirective,
                        show: this.show,
                        preset: this.preset,
                        autoFocus: this.autoFocus,
                        trapFocus: this.trapFocus,
                        blockScroll: this.blockScroll
                    }, this.presetProps, {
                        onEsc: this.handleEsc,
                        onClose: this.handleCloseClick,
                        onNegativeClick: this.handleNegativeClick,
                        onPositiveClick: this.handlePositiveClick,
                        onBeforeLeave: this.handleBeforeLeave,
                        onAfterEnter: this.onAfterEnter,
                        onAfterLeave: this.handleAfterLeave,
                        onClickoutside: t ? void 0 : this.handleClickoutside,
                        renderMask: t ? () => {
                            var o;
                            return kr(Yr, {
                                name: 'fade-in-transition',
                                key: 'mask',
                                appear: null !== (o = this.internalAppear) && void 0 !== o ? o : this.isMounted
                            }, {
                                default: () => this.show ? kr('div', {
                                    'aria-hidden': true,
                                    ref: 'containerRef',
                                    class: `${ e }-modal-mask`,
                                    onClick: this.handleClickoutside
                                }) : null
                            });
                        } : void 0
                    }), this.$slots)), [[
                            La,
                            {
                                zIndex: this.zIndex,
                                enabled: this.show
                            }
                        ]]);
                }
            });
        }
    }), bg = Object.assign(Object.assign({}, ng), {
        onAfterEnter: Function,
        onAfterLeave: Function,
        transformOrigin: String,
        blockScroll: {
            type: Boolean,
            default: true
        },
        closeOnEsc: {
            type: Boolean,
            default: true
        },
        onEsc: Function,
        autoFocus: {
            type: Boolean,
            default: true
        },
        internalStyle: [
            String,
            Object
        ],
        maskClosable: {
            type: Boolean,
            default: true
        },
        onPositiveClick: Function,
        onNegativeClick: Function,
        onClose: Function,
        onMaskClick: Function
    }), xg = Tt({
        name: 'DialogEnvironment',
        props: Object.assign(Object.assign({}, bg), {
            internalKey: {
                type: String,
                required: true
            },
            to: [
                String,
                Object
            ],
            onInternalAfterLeave: {
                type: Function,
                required: true
            }
        }),
        setup(e) {
            const o = xo(true);
            function t() {
                o.value = false;
            }
            return {
                show: o,
                hide: t,
                handleUpdateShow: function (e) {
                    o.value = e;
                },
                handleAfterLeave: function () {
                    const {
                        onInternalAfterLeave: o,
                        internalKey: t,
                        onAfterLeave: n
                    } = e;
                    o && o(t);
                    n && n();
                },
                handleCloseClick: function () {
                    const {onClose: o} = e;
                    o ? Promise.resolve(o()).then(e => {
                        false !== e && t();
                    }) : t();
                },
                handleNegativeClick: function (o) {
                    const {onNegativeClick: n} = e;
                    n ? Promise.resolve(n(o)).then(e => {
                        false !== e && t();
                    }) : t();
                },
                handlePositiveClick: function (o) {
                    const {onPositiveClick: n} = e;
                    n ? Promise.resolve(n(o)).then(e => {
                        false !== e && t();
                    }) : t();
                },
                handleMaskClick: function (o) {
                    const {
                        onMaskClick: n,
                        maskClosable: r
                    } = e;
                    n && (n(o), r && t());
                },
                handleEsc: function () {
                    const {onEsc: o} = e;
                    o && o();
                }
            };
        },
        render() {
            const {
                handlePositiveClick: e,
                handleUpdateShow: o,
                handleNegativeClick: t,
                handleCloseClick: n,
                handleAfterLeave: r,
                handleMaskClick: i,
                handleEsc: l,
                to: a,
                maskClosable: s,
                show: c
            } = this;
            return kr(vg, {
                show: c,
                onUpdateShow: o,
                onMaskClick: i,
                onEsc: l,
                to: a,
                maskClosable: s,
                onAfterEnter: this.onAfterEnter,
                onAfterLeave: r,
                closeOnEsc: this.closeOnEsc,
                blockScroll: this.blockScroll,
                autoFocus: this.autoFocus,
                transformOrigin: this.transformOrigin,
                internalAppear: true,
                internalDialog: true
            }, {
                default: () => kr(ag, Object.assign({}, nl(this.$props, rg), {
                    style: this.internalStyle,
                    onClose: n,
                    onNegativeClick: t,
                    onPositiveClick: e
                }))
            });
        }
    }), Cg = Tt({
        name: 'DialogProvider',
        props: {
            injectionKey: String,
            to: [
                String,
                Object
            ]
        },
        setup() {
            const e = xo([]), o = {};
            function t(t = {}) {
                const n = tl(), r = ro(Object.assign(Object.assign({}, t), {
                        key: n,
                        destroy: () => {
                            o[`n-dialog-${ n }`].hide();
                        }
                    }));
                return e.value.push(r), r;
            }
            const n = [
                'info',
                'success',
                'warning',
                'error'
            ].map(e => o => t(Object.assign(Object.assign({}, o), { type: e })));
            const r = {
                create: t,
                destroyAll: function () {
                    Object.values(o).forEach(e => e.hide());
                },
                info: n[0],
                success: n[1],
                warning: n[2],
                error: n[3]
            };
            return st(cg, r), st(sg, {
                clickedRef: ba(64),
                clickPositionRef: fa()
            }), st('n-dialog-reactive-list', e), Object.assign(Object.assign({}, r), {
                dialogList: e,
                dialogInstRefs: o,
                handleAfterLeave: function (o) {
                    const {value: t} = e;
                    t.splice(t.findIndex(e => e.key === o), 1);
                }
            });
        },
        render() {
            var e, o;
            return kr(Un, null, [
                this.dialogList.map(e => kr(xg, rl(e, [
                    'destroy',
                    'style'
                ], {
                    internalStyle: e.style,
                    to: this.to,
                    ref: o => {
                        null === o ? delete this.dialogInstRefs[`n-dialog-${ e.key }`] : this.dialogInstRefs[`n-dialog-${ e.key }`] = o;
                    },
                    internalKey: e.key,
                    onInternalAfterLeave: this.handleAfterLeave
                }))),
                null === (o = (e = this.$slots).default) || void 0 === o ? void 0 : o.call(e)
            ]);
        }
    }), yg = {
        name: 'Divider',
        common: of,
        self: e => {
            const {
                textColor1: o,
                dividerColor: t,
                fontWeightStrong: n
            } = e;
            return {
                textColor: o,
                color: t,
                fontWeight: n
            };
        }
    }, Sg = {
        name: 'Drawer',
        common: of,
        peers: { Scrollbar: eh },
        self: e => {
            const {
                modalColor: o,
                textColor1: t,
                textColor2: n,
                boxShadow3: r,
                lineHeight: i,
                fontWeightStrong: l,
                dividerColor: a,
                closeColorHover: s,
                closeColorPressed: c,
                closeIconColor: u,
                closeIconColorHover: d,
                closeIconColorPressed: p,
                borderRadius: f,
                primaryColorHover: h
            } = e;
            return {
                bodyPadding: '16px 24px',
                headerPadding: '16px 24px',
                footerPadding: '16px 24px',
                color: o,
                textColor: n,
                titleTextColor: t,
                titleFontSize: '18px',
                titleFontWeight: l,
                boxShadow: r,
                lineHeight: i,
                headerBorderBottom: `1px solid ${ a }`,
                footerBorderTop: `1px solid ${ a }`,
                closeIconColor: u,
                closeIconColorHover: d,
                closeIconColorPressed: p,
                closeSize: '22px',
                closeIconSize: '18px',
                closeColorHover: s,
                closeColorPressed: c,
                closeBorderRadius: f,
                resizableTriggerColorHover: h
            };
        }
    }, wg = {
        actionMargin: '0 0 0 20px',
        actionMarginRtl: '0 20px 0 0'
    }, _g = {
        name: 'DynamicInput',
        common: of,
        peers: {
            Input: Fh,
            Button: Qh
        },
        self: () => wg
    }, zg = {
        gapSmall: '4px 8px',
        gapMedium: '8px 12px',
        gapLarge: '12px 16px'
    }, Tg = {
        name: 'Space',
        self: () => zg
    }, Pg = {
        name: 'DynamicTags',
        common: of,
        peers: {
            Input: Fh,
            Button: Qh,
            Tag: yh,
            Space: Tg
        },
        self: () => ({ inputWidth: '64px' })
    }, Eg = {
        name: 'Element',
        common: of
    }, kg = {
        feedbackPadding: '4px 0 0 2px',
        feedbackHeightSmall: '24px',
        feedbackHeightMedium: '24px',
        feedbackHeightLarge: '26px',
        feedbackFontSizeSmall: '13px',
        feedbackFontSizeMedium: '14px',
        feedbackFontSizeLarge: '14px',
        labelFontSizeLeftSmall: '14px',
        labelFontSizeLeftMedium: '14px',
        labelFontSizeLeftLarge: '15px',
        labelFontSizeTopSmall: '13px',
        labelFontSizeTopMedium: '14px',
        labelFontSizeTopLarge: '14px',
        labelHeightSmall: '24px',
        labelHeightMedium: '26px',
        labelHeightLarge: '28px',
        labelPaddingVertical: '0 0 6px 2px',
        labelPaddingHorizontal: '0 12px 0 0',
        labelTextAlignVertical: 'left',
        labelTextAlignHorizontal: 'right',
        labelFontWeight: '400'
    }, Rg = e => {
        const {
            heightSmall: o,
            heightMedium: t,
            heightLarge: n,
            textColor1: r,
            errorColor: i,
            warningColor: l,
            lineHeight: a,
            textColor3: s
        } = e;
        return Object.assign(Object.assign({}, kg), {
            blankHeightSmall: o,
            blankHeightMedium: t,
            blankHeightLarge: n,
            lineHeight: a,
            labelTextColor: r,
            asteriskColor: i,
            feedbackTextColorError: i,
            feedbackTextColorWarning: l,
            feedbackTextColor: s
        });
    }, Lg = {
        name: 'Form',
        common: qf,
        self: Rg
    }, Og = {
        name: 'Form',
        common: of,
        self: Rg
    }, Ag = {
        name: 'GradientText',
        common: of,
        self(e) {
            const {
                primaryColor: o,
                successColor: t,
                warningColor: n,
                errorColor: r,
                infoColor: i,
                primaryColorSuppl: l,
                successColorSuppl: a,
                warningColorSuppl: s,
                errorColorSuppl: c,
                infoColorSuppl: u,
                fontWeightStrong: d
            } = e;
            return {
                fontWeight: d,
                rotate: '252deg',
                colorStartPrimary: o,
                colorEndPrimary: l,
                colorStartInfo: i,
                colorEndInfo: u,
                colorStartWarning: n,
                colorEndWarning: s,
                colorStartError: r,
                colorEndError: c,
                colorStartSuccess: t,
                colorEndSuccess: a
            };
        }
    }, Ig = {
        name: 'IconWrapper',
        common: of,
        self: e => {
            const {
                primaryColor: o,
                baseColor: t
            } = e;
            return {
                color: o,
                iconColor: t
            };
        }
    }, $g = {
        closeMargin: '16px 12px',
        closeSize: '20px',
        closeIconSize: '16px',
        width: '365px',
        padding: '16px',
        titleFontSize: '16px',
        metaFontSize: '12px',
        descriptionFontSize: '12px'
    }, Mg = e => {
        const {
            textColor2: o,
            successColor: t,
            infoColor: n,
            warningColor: r,
            errorColor: i,
            popoverColor: l,
            closeIconColor: a,
            closeIconColorHover: s,
            closeIconColorPressed: c,
            closeColorHover: u,
            closeColorPressed: d,
            textColor1: p,
            textColor3: f,
            borderRadius: h,
            fontWeightStrong: m,
            boxShadow2: g,
            lineHeight: v,
            fontSize: b
        } = e;
        return Object.assign(Object.assign({}, $g), {
            borderRadius: h,
            lineHeight: v,
            fontSize: b,
            headerFontWeight: m,
            iconColor: o,
            iconColorSuccess: t,
            iconColorInfo: n,
            iconColorWarning: r,
            iconColorError: i,
            color: l,
            textColor: o,
            closeIconColor: a,
            closeIconColorHover: s,
            closeIconColorPressed: c,
            closeBorderRadius: h,
            closeColorHover: u,
            closeColorPressed: d,
            headerTextColor: p,
            descriptionTextColor: f,
            actionTextColor: o,
            boxShadow: g
        });
    }, Hg = {
        name: 'Notification',
        common: qf,
        peers: { Scrollbar: Qf },
        self: Mg
    }, Fg = {
        name: 'Notification',
        common: of,
        peers: { Scrollbar: eh },
        self: Mg
    }, Bg = {
        margin: '0 0 8px 0',
        padding: '10px 20px',
        maxWidth: '720px',
        minWidth: '420px',
        iconMargin: '0 10px 0 0',
        closeMargin: '0 0 0 10px',
        closeSize: '20px',
        closeIconSize: '16px',
        iconSize: '20px',
        fontSize: '14px'
    }, Dg = e => {
        const {
            textColor2: o,
            closeIconColor: t,
            closeIconColorHover: n,
            closeIconColorPressed: r,
            infoColor: i,
            successColor: l,
            errorColor: a,
            warningColor: s,
            popoverColor: c,
            boxShadow2: u,
            primaryColor: d,
            lineHeight: p,
            borderRadius: f,
            closeColorHover: h,
            closeColorPressed: m
        } = e;
        return Object.assign(Object.assign({}, Bg), {
            closeBorderRadius: f,
            textColor: o,
            textColorInfo: o,
            textColorSuccess: o,
            textColorError: o,
            textColorWarning: o,
            textColorLoading: o,
            color: c,
            colorInfo: c,
            colorSuccess: c,
            colorError: c,
            colorWarning: c,
            colorLoading: c,
            boxShadow: u,
            boxShadowInfo: u,
            boxShadowSuccess: u,
            boxShadowError: u,
            boxShadowWarning: u,
            boxShadowLoading: u,
            iconColor: o,
            iconColorInfo: i,
            iconColorSuccess: l,
            iconColorWarning: s,
            iconColorError: a,
            iconColorLoading: d,
            closeColorHover: h,
            closeColorPressed: m,
            closeIconColor: t,
            closeIconColorHover: n,
            closeIconColorPressed: r,
            closeColorHoverInfo: h,
            closeColorPressedInfo: m,
            closeIconColorInfo: t,
            closeIconColorHoverInfo: n,
            closeIconColorPressedInfo: r,
            closeColorHoverSuccess: h,
            closeColorPressedSuccess: m,
            closeIconColorSuccess: t,
            closeIconColorHoverSuccess: n,
            closeIconColorPressedSuccess: r,
            closeColorHoverError: h,
            closeColorPressedError: m,
            closeIconColorError: t,
            closeIconColorHoverError: n,
            closeIconColorPressedError: r,
            closeColorHoverWarning: h,
            closeColorPressedWarning: m,
            closeIconColorWarning: t,
            closeIconColorHoverWarning: n,
            closeIconColorPressedWarning: r,
            closeColorHoverLoading: h,
            closeColorPressedLoading: m,
            closeIconColorLoading: t,
            closeIconColorHoverLoading: n,
            closeIconColorPressedLoading: r,
            loadingColor: d,
            lineHeight: p,
            borderRadius: f
        });
    }, jg = {
        name: 'Message',
        common: qf,
        self: Dg
    }, Ng = {
        name: 'Message',
        common: of,
        self: Dg
    }, Wg = {
        name: 'ButtonGroup',
        common: of
    }, Ug = {
        name: 'InputNumber',
        common: of,
        peers: {
            Button: Qh,
            Input: Fh
        },
        self(e) {
            const {textColorDisabled: o} = e;
            return { iconColorDisabled: o };
        }
    }, Vg = {
        name: 'Layout',
        common: of,
        peers: { Scrollbar: eh },
        self(e) {
            const {
                textColor2: o,
                bodyColor: t,
                popoverColor: n,
                cardColor: r,
                dividerColor: i,
                scrollbarColor: l,
                scrollbarColorHover: a
            } = e;
            return {
                textColor: o,
                textColorInverted: o,
                color: t,
                colorEmbedded: t,
                headerColor: r,
                headerColorInverted: r,
                footerColor: r,
                footerColorInverted: r,
                headerBorderColor: i,
                headerBorderColorInverted: i,
                footerBorderColor: i,
                footerBorderColorInverted: i,
                siderBorderColor: i,
                siderBorderColorInverted: i,
                siderColor: r,
                siderColorInverted: r,
                siderToggleButtonBorder: '1px solid transparent',
                siderToggleButtonColor: n,
                siderToggleButtonIconColor: o,
                siderToggleButtonIconColorInverted: o,
                siderToggleBarColor: Ki(t, l),
                siderToggleBarColorHover: Ki(t, a),
                __invertScrollbar: 'false'
            };
        }
    }, Gg = {
        name: 'List',
        common: of,
        self: e => {
            const {
                textColor2: o,
                cardColor: t,
                modalColor: n,
                popoverColor: r,
                dividerColor: i,
                borderRadius: l,
                fontSize: a,
                hoverColor: s
            } = e;
            return {
                textColor: o,
                color: t,
                colorHover: s,
                colorModal: n,
                colorHoverModal: Ki(n, s),
                colorPopover: r,
                colorHoverPopover: Ki(r, s),
                borderColor: i,
                borderColorModal: Ki(n, i),
                borderColorPopover: Ki(r, i),
                borderRadius: l,
                fontSize: a
            };
        }
    }, qg = {
        name: 'LoadingBar',
        common: of,
        self(e) {
            const {primaryColor: o} = e;
            return {
                colorError: 'red',
                colorLoading: o,
                height: '2px'
            };
        }
    }, Kg = {
        name: 'Log',
        common: of,
        peers: {
            Scrollbar: eh,
            Code: ym
        },
        self(e) {
            const {
                textColor2: o,
                inputColor: t,
                fontSize: n,
                primaryColor: r
            } = e;
            return {
                loaderFontSize: n,
                loaderTextColor: o,
                loaderColor: t,
                loaderBorder: '1px solid #0000',
                loadingColor: r
            };
        }
    }, Yg = {
        name: 'Mention',
        common: of,
        peers: {
            InternalSelectMenu: uh,
            Input: Fh
        },
        self(e) {
            const {boxShadow2: o} = e;
            return { menuBoxShadow: o };
        }
    };
const Xg = {
        name: 'Menu',
        common: of,
        peers: {
            Tooltip: Im,
            Dropdown: jm
        },
        self(e) {
            const {
                    primaryColor: o,
                    primaryColorSuppl: t
                } = e, n = (e => {
                    const {
                        borderRadius: o,
                        textColor3: t,
                        primaryColor: n,
                        textColor2: r,
                        textColor1: i,
                        fontSize: l,
                        dividerColor: a,
                        hoverColor: s,
                        primaryColorHover: c
                    } = e;
                    return Object.assign({
                        borderRadius: o,
                        color: '#0000',
                        groupTextColor: t,
                        itemColorHover: s,
                        itemColorActive: Yi(n, { alpha: 0.1 }),
                        itemColorActiveHover: Yi(n, { alpha: 0.1 }),
                        itemColorActiveCollapsed: Yi(n, { alpha: 0.1 }),
                        itemTextColor: r,
                        itemTextColorHover: r,
                        itemTextColorActive: n,
                        itemTextColorActiveHover: n,
                        itemTextColorChildActive: n,
                        itemTextColorChildActiveHover: n,
                        itemTextColorHorizontal: r,
                        itemTextColorHoverHorizontal: c,
                        itemTextColorActiveHorizontal: n,
                        itemTextColorActiveHoverHorizontal: n,
                        itemTextColorChildActiveHorizontal: n,
                        itemTextColorChildActiveHoverHorizontal: n,
                        itemIconColor: i,
                        itemIconColorHover: i,
                        itemIconColorActive: n,
                        itemIconColorActiveHover: n,
                        itemIconColorChildActive: n,
                        itemIconColorChildActiveHover: n,
                        itemIconColorCollapsed: i,
                        itemIconColorHorizontal: i,
                        itemIconColorHoverHorizontal: c,
                        itemIconColorActiveHorizontal: n,
                        itemIconColorActiveHoverHorizontal: n,
                        itemIconColorChildActiveHorizontal: n,
                        itemIconColorChildActiveHoverHorizontal: n,
                        itemHeight: '42px',
                        arrowColor: r,
                        arrowColorHover: r,
                        arrowColorActive: n,
                        arrowColorActiveHover: n,
                        arrowColorChildActive: n,
                        arrowColorChildActiveHover: n,
                        colorInverted: '#0000',
                        borderColorHorizontal: '#0000',
                        fontSize: l,
                        dividerColor: a
                    }, {
                        itemColorHoverInverted: '#0000',
                        itemColorActiveInverted: d = n,
                        itemColorActiveHoverInverted: d,
                        itemColorActiveCollapsedInverted: d,
                        itemTextColorInverted: u = '#BBB',
                        itemTextColorHoverInverted: p = '#FFF',
                        itemTextColorChildActiveInverted: p,
                        itemTextColorChildActiveHoverInverted: p,
                        itemTextColorActiveInverted: p,
                        itemTextColorActiveHoverInverted: p,
                        itemTextColorHorizontalInverted: u,
                        itemTextColorHoverHorizontalInverted: p,
                        itemTextColorChildActiveHorizontalInverted: p,
                        itemTextColorChildActiveHoverHorizontalInverted: p,
                        itemTextColorActiveHorizontalInverted: p,
                        itemTextColorActiveHoverHorizontalInverted: p,
                        itemIconColorInverted: u,
                        itemIconColorHoverInverted: p,
                        itemIconColorActiveInverted: p,
                        itemIconColorActiveHoverInverted: p,
                        itemIconColorChildActiveInverted: p,
                        itemIconColorChildActiveHoverInverted: p,
                        itemIconColorCollapsedInverted: u,
                        itemIconColorHorizontalInverted: u,
                        itemIconColorHoverHorizontalInverted: p,
                        itemIconColorActiveHorizontalInverted: p,
                        itemIconColorActiveHoverHorizontalInverted: p,
                        itemIconColorChildActiveHorizontalInverted: p,
                        itemIconColorChildActiveHoverHorizontalInverted: p,
                        arrowColorInverted: u,
                        arrowColorHoverInverted: p,
                        arrowColorActiveInverted: p,
                        arrowColorActiveHoverInverted: p,
                        arrowColorChildActiveInverted: p,
                        arrowColorChildActiveHoverInverted: p,
                        groupTextColorInverted: '#AAA'
                    });
                    var u, d, p;
                })(e);
            return n.itemColorActive = Yi(o, { alpha: 0.15 }), n.itemColorActiveHover = Yi(o, { alpha: 0.15 }), n.itemColorActiveCollapsed = Yi(o, { alpha: 0.15 }), n.itemColorActiveInverted = t, n.itemColorActiveHoverInverted = t, n.itemColorActiveCollapsedInverted = t, n;
        }
    }, Jg = {
        titleFontSize: '18px',
        backSize: '22px'
    };
const Zg = {
        name: 'PageHeader',
        common: of,
        self: function (e) {
            const {
                textColor1: o,
                textColor2: t,
                textColor3: n,
                fontSize: r,
                fontWeightStrong: i,
                primaryColorHover: l,
                primaryColorPressed: a
            } = e;
            return Object.assign(Object.assign({}, Jg), {
                titleFontWeight: i,
                fontSize: r,
                titleTextColor: o,
                backColor: t,
                backColorHover: l,
                backColorPressed: a,
                subtitleTextColor: n
            });
        }
    }, Qg = { iconSize: '22px' }, ev = e => {
        const {
            fontSize: o,
            warningColor: t
        } = e;
        return Object.assign(Object.assign({}, Qg), {
            fontSize: o,
            iconColor: t
        });
    }, ov = {
        name: 'Popconfirm',
        common: qf,
        peers: {
            Button: Zh,
            Popover: bh
        },
        self: ev
    }, tv = {
        name: 'Popconfirm',
        common: of,
        peers: {
            Button: Qh,
            Popover: xh
        },
        self: ev
    }, nv = {
        name: 'Progress',
        common: of,
        self(e) {
            const o = (e => {
                const {
                    infoColor: o,
                    successColor: t,
                    warningColor: n,
                    errorColor: r,
                    textColor2: i,
                    progressRailColor: l,
                    fontSize: a,
                    fontWeight: s
                } = e;
                return {
                    fontSize: a,
                    fontSizeCircle: '28px',
                    fontWeightCircle: s,
                    railColor: l,
                    railHeight: '8px',
                    iconSizeCircle: '36px',
                    iconSizeLine: '18px',
                    iconColor: o,
                    iconColorInfo: o,
                    iconColorSuccess: t,
                    iconColorWarning: n,
                    iconColorError: r,
                    textColorCircle: i,
                    textColorLineInner: 'rgb(255, 255, 255)',
                    textColorLineOuter: i,
                    fillColor: o,
                    fillColorInfo: o,
                    fillColorSuccess: t,
                    fillColorWarning: n,
                    fillColorError: r,
                    lineBgProcessing: 'linear-gradient(90deg, rgba(255, 255, 255, .3) 0%, rgba(255, 255, 255, .5) 100%)'
                };
            })(e);
            return o.textColorLineInner = 'rgb(0, 0, 0)', o.lineBgProcessing = 'linear-gradient(90deg, rgba(255, 255, 255, .3) 0%, rgba(255, 255, 255, .5) 100%)', o;
        }
    }, rv = {
        name: 'Rate',
        common: of,
        self(e) {
            const {railColor: o} = e;
            return {
                itemColor: o,
                itemColorActive: '#CCAA33',
                itemSize: '20px',
                sizeSmall: '16px',
                sizeMedium: '20px',
                sizeLarge: '24px'
            };
        }
    }, iv = {
        titleFontSizeSmall: '26px',
        titleFontSizeMedium: '32px',
        titleFontSizeLarge: '40px',
        titleFontSizeHuge: '48px',
        fontSizeSmall: '14px',
        fontSizeMedium: '14px',
        fontSizeLarge: '15px',
        fontSizeHuge: '16px',
        iconSizeSmall: '64px',
        iconSizeMedium: '80px',
        iconSizeLarge: '100px',
        iconSizeHuge: '125px',
        iconColor418: void 0,
        iconColor404: void 0,
        iconColor403: void 0,
        iconColor500: void 0
    }, lv = e => {
        const {
            textColor2: o,
            textColor1: t,
            errorColor: n,
            successColor: r,
            infoColor: i,
            warningColor: l,
            lineHeight: a,
            fontWeightStrong: s
        } = e;
        return Object.assign(Object.assign({}, iv), {
            lineHeight: a,
            titleFontWeight: s,
            titleTextColor: t,
            textColor: o,
            iconColorError: n,
            iconColorSuccess: r,
            iconColorInfo: i,
            iconColorWarning: l
        });
    }, av = {
        name: 'Result',
        common: qf,
        self: lv
    }, sv = {
        name: 'Result',
        common: of,
        self: lv
    }, cv = {
        railHeight: '4px',
        railWidthVertical: '4px',
        handleSize: '18px',
        dotHeight: '8px',
        dotWidth: '8px',
        dotBorderRadius: '4px'
    }, uv = {
        name: 'Slider',
        common: of,
        self(e) {
            const {
                railColor: o,
                modalColor: t,
                primaryColorSuppl: n,
                popoverColor: r,
                textColor2: i,
                cardColor: l,
                borderRadius: a,
                fontSize: s,
                opacityDisabled: c
            } = e;
            return Object.assign(Object.assign({}, cv), {
                fontSize: s,
                markFontSize: s,
                railColor: o,
                railColorHover: o,
                fillColor: n,
                fillColorHover: n,
                opacityDisabled: c,
                handleColor: '#FFF',
                dotColor: l,
                dotColorModal: t,
                dotColorPopover: r,
                handleBoxShadow: '0px 2px 4px 0 rgba(0, 0, 0, 0.4)',
                handleBoxShadowHover: '0px 2px 4px 0 rgba(0, 0, 0, 0.4)',
                handleBoxShadowActive: '0px 2px 4px 0 rgba(0, 0, 0, 0.4)',
                handleBoxShadowFocus: '0px 2px 4px 0 rgba(0, 0, 0, 0.4)',
                indicatorColor: r,
                indicatorBoxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.12)',
                indicatorTextColor: i,
                indicatorBorderRadius: a,
                dotBorder: `2px solid ${ o }`,
                dotBorderActive: `2px solid ${ n }`,
                dotBoxShadow: ''
            });
        }
    }, dv = e => {
        const {
            opacityDisabled: o,
            heightTiny: t,
            heightSmall: n,
            heightMedium: r,
            heightLarge: i,
            heightHuge: l,
            primaryColor: a,
            fontSize: s
        } = e;
        return {
            fontSize: s,
            textColor: a,
            sizeTiny: t,
            sizeSmall: n,
            sizeMedium: r,
            sizeLarge: i,
            sizeHuge: l,
            color: a,
            opacitySpinning: o
        };
    }, pv = {
        name: 'Spin',
        common: qf,
        self: dv
    }, fv = {
        name: 'Spin',
        common: of,
        self: dv
    }, hv = {
        name: 'Statistic',
        common: of,
        self: e => {
            const {
                textColor2: o,
                textColor3: t,
                fontSize: n,
                fontWeight: r
            } = e;
            return {
                labelFontSize: n,
                labelFontWeight: r,
                valueFontWeight: r,
                valueFontSize: '24px',
                labelTextColor: t,
                valuePrefixTextColor: o,
                valueSuffixTextColor: o,
                valueTextColor: o
            };
        }
    }, mv = {
        stepHeaderFontSizeSmall: '14px',
        stepHeaderFontSizeMedium: '16px',
        indicatorIndexFontSizeSmall: '14px',
        indicatorIndexFontSizeMedium: '16px',
        indicatorSizeSmall: '22px',
        indicatorSizeMedium: '28px',
        indicatorIconSizeSmall: '14px',
        indicatorIconSizeMedium: '18px'
    }, gv = {
        name: 'Steps',
        common: of,
        self: e => {
            const {
                fontWeightStrong: o,
                baseColor: t,
                textColorDisabled: n,
                primaryColor: r,
                errorColor: i,
                textColor1: l,
                textColor2: a
            } = e;
            return Object.assign(Object.assign({}, mv), {
                stepHeaderFontWeight: o,
                indicatorTextColorProcess: t,
                indicatorTextColorWait: n,
                indicatorTextColorFinish: r,
                indicatorTextColorError: i,
                indicatorBorderColorProcess: r,
                indicatorBorderColorWait: n,
                indicatorBorderColorFinish: r,
                indicatorBorderColorError: i,
                indicatorColorProcess: r,
                indicatorColorWait: '#0000',
                indicatorColorFinish: '#0000',
                indicatorColorError: '#0000',
                splitorColorProcess: n,
                splitorColorWait: n,
                splitorColorFinish: r,
                splitorColorError: n,
                headerTextColorProcess: l,
                headerTextColorWait: n,
                headerTextColorFinish: n,
                headerTextColorError: i,
                descriptionTextColorProcess: a,
                descriptionTextColorWait: n,
                descriptionTextColorFinish: n,
                descriptionTextColorError: i
            });
        }
    }, vv = {
        buttonHeightSmall: '14px',
        buttonHeightMedium: '18px',
        buttonHeightLarge: '22px',
        buttonWidthSmall: '14px',
        buttonWidthMedium: '18px',
        buttonWidthLarge: '22px',
        buttonWidthPressedSmall: '20px',
        buttonWidthPressedMedium: '24px',
        buttonWidthPressedLarge: '28px',
        railHeightSmall: '18px',
        railHeightMedium: '22px',
        railHeightLarge: '26px',
        railWidthSmall: '32px',
        railWidthMedium: '40px',
        railWidthLarge: '48px'
    }, bv = {
        name: 'Switch',
        common: of,
        self(e) {
            const {
                primaryColorSuppl: o,
                opacityDisabled: t,
                borderRadius: n,
                primaryColor: r,
                textColor2: i,
                baseColor: l
            } = e;
            return Object.assign(Object.assign({}, vv), {
                iconColor: l,
                textColor: i,
                loadingColor: o,
                opacityDisabled: t,
                railColor: 'rgba(255, 255, 255, .20)',
                railColorActive: o,
                buttonBoxShadow: '0px 2px 4px 0 rgba(0, 0, 0, 0.4)',
                buttonColor: '#FFF',
                railBorderRadiusSmall: n,
                railBorderRadiusMedium: n,
                railBorderRadiusLarge: n,
                buttonBorderRadiusSmall: n,
                buttonBorderRadiusMedium: n,
                buttonBorderRadiusLarge: n,
                boxShadowFocus: `0 0 8px 0 ${ Yi(r, { alpha: 0.3 }) }`
            });
        }
    }, xv = {
        thPaddingSmall: '6px',
        thPaddingMedium: '12px',
        thPaddingLarge: '12px',
        tdPaddingSmall: '6px',
        tdPaddingMedium: '12px',
        tdPaddingLarge: '12px'
    }, Cv = {
        name: 'Table',
        common: of,
        self: e => {
            const {
                dividerColor: o,
                cardColor: t,
                modalColor: n,
                popoverColor: r,
                tableHeaderColor: i,
                tableColorStriped: l,
                textColor1: a,
                textColor2: s,
                borderRadius: c,
                fontWeightStrong: u,
                lineHeight: d,
                fontSizeSmall: p,
                fontSizeMedium: f,
                fontSizeLarge: h
            } = e;
            return Object.assign(Object.assign({}, xv), {
                fontSizeSmall: p,
                fontSizeMedium: f,
                fontSizeLarge: h,
                lineHeight: d,
                borderRadius: c,
                borderColor: Ki(t, o),
                borderColorModal: Ki(n, o),
                borderColorPopover: Ki(r, o),
                tdColor: t,
                tdColorModal: n,
                tdColorPopover: r,
                tdColorStriped: Ki(t, l),
                tdColorStripedModal: Ki(n, l),
                tdColorStripedPopover: Ki(r, l),
                thColor: Ki(t, i),
                thColorModal: Ki(n, i),
                thColorPopover: Ki(r, i),
                thTextColor: a,
                tdTextColor: s,
                thFontWeight: u
            });
        }
    }, yv = {
        tabFontSizeSmall: '14px',
        tabFontSizeMedium: '14px',
        tabFontSizeLarge: '16px',
        tabGapSmallLine: '36px',
        tabGapMediumLine: '36px',
        tabGapLargeLine: '36px',
        tabPaddingSmallLine: '6px 0',
        tabPaddingMediumLine: '10px 0',
        tabPaddingLargeLine: '14px 0',
        tabPaddingVerticalSmallLine: '0 6px',
        tabPaddingVerticalMediumLine: '0 10px',
        tabPaddingVerticalLargeLine: '0 14px',
        tabGapSmallBar: '36px',
        tabGapMediumBar: '36px',
        tabGapLargeBar: '36px',
        tabPaddingSmallBar: '4px 0',
        tabPaddingMediumBar: '6px 0',
        tabPaddingLargeBar: '10px 0',
        tabPaddingVerticalSmallBar: '0 4px',
        tabPaddingVerticalMediumBar: '0 6px ',
        tabPaddingVerticalLargeBar: '0 10px ',
        tabGapSmallCard: '4px',
        tabGapMediumCard: '4px',
        tabGapLargeCard: '4px',
        tabPaddingSmallCard: '6px 10px',
        tabPaddingMediumCard: '8px 12px',
        tabPaddingLargeCard: '8px 16px',
        tabPaddingSmallSegment: '4px 0',
        tabPaddingMediumSegment: '6px 0',
        tabPaddingLargeSegment: '8px 0',
        tabPaddingVerticalLargeSegment: '0 8px',
        tabPaddingVerticalSmallCard: '10px 6px',
        tabPaddingVerticalMediumCard: '12px 8px',
        tabPaddingVerticalLargeCard: '16px 8px',
        tabPaddingVerticalSmallSegment: '0 4px',
        tabPaddingVerticalMediumSegment: '0 6px',
        tabGapSmallSegment: '0',
        tabGapMediumSegment: '0',
        tabGapLargeSegment: '0',
        panePaddingSmall: '8px 0 0 0',
        panePaddingMedium: '12px 0 0 0',
        panePaddingLarge: '16px 0 0 0',
        closeSize: '18px',
        closeIconSize: '14px'
    }, Sv = {
        name: 'Tabs',
        common: of,
        self(e) {
            const o = (e => {
                    const {
                        textColor2: o,
                        primaryColor: t,
                        textColorDisabled: n,
                        closeIconColor: r,
                        closeIconColorHover: i,
                        closeIconColorPressed: l,
                        closeColorHover: a,
                        closeColorPressed: s,
                        tabColor: c,
                        baseColor: u,
                        dividerColor: d,
                        fontWeight: p,
                        textColor1: f,
                        borderRadius: h,
                        fontSize: m,
                        fontWeightStrong: g
                    } = e;
                    return Object.assign(Object.assign({}, yv), {
                        colorSegment: c,
                        tabFontSizeCard: m,
                        tabTextColorLine: f,
                        tabTextColorActiveLine: t,
                        tabTextColorHoverLine: t,
                        tabTextColorDisabledLine: n,
                        tabTextColorSegment: f,
                        tabTextColorActiveSegment: o,
                        tabTextColorHoverSegment: o,
                        tabTextColorDisabledSegment: n,
                        tabTextColorBar: f,
                        tabTextColorActiveBar: t,
                        tabTextColorHoverBar: t,
                        tabTextColorDisabledBar: n,
                        tabTextColorCard: f,
                        tabTextColorHoverCard: f,
                        tabTextColorActiveCard: t,
                        tabTextColorDisabledCard: n,
                        barColor: t,
                        closeIconColor: r,
                        closeIconColorHover: i,
                        closeIconColorPressed: l,
                        closeColorHover: a,
                        closeColorPressed: s,
                        closeBorderRadius: h,
                        tabColor: c,
                        tabColorSegment: u,
                        tabBorderColor: d,
                        tabFontWeightActive: p,
                        tabFontWeight: p,
                        tabBorderRadius: h,
                        paneTextColor: o,
                        fontWeightStrong: g
                    });
                })(e), {inputColor: t} = e;
            return o.colorSegment = t, o.tabColorSegment = t, o;
        }
    }, wv = {
        name: 'Thing',
        common: of,
        self: e => {
            const {
                textColor1: o,
                textColor2: t,
                fontWeightStrong: n,
                fontSize: r
            } = e;
            return {
                fontSize: r,
                titleTextColor: o,
                textColor: t,
                titleFontWeight: n
            };
        }
    }, _v = {
        titleMarginMedium: '0 0 6px 0',
        titleMarginLarge: '-2px 0 6px 0',
        titleFontSizeMedium: '14px',
        titleFontSizeLarge: '16px',
        iconSizeMedium: '14px',
        iconSizeLarge: '14px'
    }, zv = {
        name: 'Timeline',
        common: of,
        self(e) {
            const {
                textColor3: o,
                infoColorSuppl: t,
                errorColorSuppl: n,
                successColorSuppl: r,
                warningColorSuppl: i,
                textColor1: l,
                textColor2: a,
                railColor: s,
                fontWeightStrong: c,
                fontSize: u
            } = e;
            return Object.assign(Object.assign({}, _v), {
                contentFontSize: u,
                titleFontWeight: c,
                circleBorder: `2px solid ${ o }`,
                circleBorderInfo: `2px solid ${ t }`,
                circleBorderError: `2px solid ${ n }`,
                circleBorderSuccess: `2px solid ${ r }`,
                circleBorderWarning: `2px solid ${ i }`,
                iconColor: o,
                iconColorInfo: t,
                iconColorError: n,
                iconColorSuccess: r,
                iconColorWarning: i,
                titleTextColor: l,
                contentTextColor: a,
                metaTextColor: o,
                lineColor: s
            });
        }
    }, Tv = {
        extraFontSizeSmall: '12px',
        extraFontSizeMedium: '12px',
        extraFontSizeLarge: '14px',
        titleFontSizeSmall: '14px',
        titleFontSizeMedium: '16px',
        titleFontSizeLarge: '16px',
        closeSize: '20px',
        closeIconSize: '16px',
        headerHeightSmall: '44px',
        headerHeightMedium: '44px',
        headerHeightLarge: '50px'
    }, Pv = {
        name: 'Transfer',
        common: of,
        peers: {
            Checkbox: xm,
            Scrollbar: eh,
            Input: Fh,
            Empty: Jf,
            Button: Qh
        },
        self(e) {
            const {
                fontWeight: o,
                fontSizeLarge: t,
                fontSizeMedium: n,
                fontSizeSmall: r,
                heightLarge: i,
                heightMedium: l,
                borderRadius: a,
                inputColor: s,
                tableHeaderColor: c,
                textColor1: u,
                textColorDisabled: d,
                textColor2: p,
                textColor3: f,
                hoverColor: h,
                closeColorHover: m,
                closeColorPressed: g,
                closeIconColor: v,
                closeIconColorHover: b,
                closeIconColorPressed: x,
                dividerColor: C
            } = e;
            return Object.assign(Object.assign({}, Tv), {
                itemHeightSmall: l,
                itemHeightMedium: l,
                itemHeightLarge: i,
                fontSizeSmall: r,
                fontSizeMedium: n,
                fontSizeLarge: t,
                borderRadius: a,
                dividerColor: C,
                borderColor: '#0000',
                listColor: s,
                headerColor: c,
                titleTextColor: u,
                titleTextColorDisabled: d,
                extraTextColor: f,
                extraTextColorDisabled: d,
                itemTextColor: p,
                itemTextColorDisabled: d,
                itemColorPending: h,
                titleFontWeight: o,
                closeColorHover: m,
                closeColorPressed: g,
                closeIconColor: v,
                closeIconColorHover: b,
                closeIconColorPressed: x
            });
        }
    }, Ev = {
        name: 'Tree',
        common: of,
        peers: {
            Checkbox: xm,
            Scrollbar: eh,
            Empty: Jf
        },
        self(e) {
            const {primaryColor: o} = e, t = (e => {
                    const {
                        borderRadiusSmall: o,
                        hoverColor: t,
                        pressedColor: n,
                        primaryColor: r,
                        textColor3: i,
                        textColor2: l,
                        textColorDisabled: a,
                        fontSize: s
                    } = e;
                    return {
                        fontSize: s,
                        nodeBorderRadius: o,
                        nodeColorHover: t,
                        nodeColorPressed: n,
                        nodeColorActive: Yi(r, { alpha: 0.1 }),
                        arrowColor: i,
                        nodeTextColor: l,
                        nodeTextColorDisabled: a,
                        loadingColor: r,
                        dropMarkColor: r
                    };
                })(e);
            return t.nodeColorActive = Yi(o, { alpha: 0.15 }), t;
        }
    }, kv = {
        name: 'TreeSelect',
        common: of,
        peers: {
            Tree: Ev,
            Empty: Jf,
            InternalSelection: _h
        }
    }, Rv = {
        headerFontSize1: '30px',
        headerFontSize2: '22px',
        headerFontSize3: '18px',
        headerFontSize4: '16px',
        headerFontSize5: '16px',
        headerFontSize6: '16px',
        headerMargin1: '28px 0 20px 0',
        headerMargin2: '28px 0 20px 0',
        headerMargin3: '28px 0 20px 0',
        headerMargin4: '28px 0 18px 0',
        headerMargin5: '28px 0 18px 0',
        headerMargin6: '28px 0 18px 0',
        headerPrefixWidth1: '16px',
        headerPrefixWidth2: '16px',
        headerPrefixWidth3: '12px',
        headerPrefixWidth4: '12px',
        headerPrefixWidth5: '12px',
        headerPrefixWidth6: '12px',
        headerBarWidth1: '4px',
        headerBarWidth2: '4px',
        headerBarWidth3: '3px',
        headerBarWidth4: '3px',
        headerBarWidth5: '3px',
        headerBarWidth6: '3px',
        pMargin: '16px 0 16px 0',
        liMargin: '.25em 0 0 0',
        olPadding: '0 0 0 2em',
        ulPadding: '0 0 0 2em'
    }, Lv = {
        name: 'Typography',
        common: of,
        self: e => {
            const {
                primaryColor: o,
                textColor2: t,
                borderColor: n,
                lineHeight: r,
                fontSize: i,
                borderRadiusSmall: l,
                dividerColor: a,
                fontWeightStrong: s,
                textColor1: c,
                textColor3: u,
                infoColor: d,
                warningColor: p,
                errorColor: f,
                successColor: h,
                codeColor: m
            } = e;
            return Object.assign(Object.assign({}, Rv), {
                aTextColor: o,
                blockquoteTextColor: t,
                blockquotePrefixColor: n,
                blockquoteLineHeight: r,
                blockquoteFontSize: i,
                codeBorderRadius: l,
                liTextColor: t,
                liLineHeight: r,
                liFontSize: i,
                hrColor: a,
                headerFontWeight: s,
                headerTextColor: c,
                pTextColor: t,
                pTextColor1Depth: c,
                pTextColor2Depth: t,
                pTextColor3Depth: u,
                pLineHeight: r,
                pFontSize: i,
                headerBarColor: o,
                headerBarColorPrimary: o,
                headerBarColorInfo: d,
                headerBarColorError: f,
                headerBarColorWarning: p,
                headerBarColorSuccess: h,
                textColor: t,
                textColor1Depth: c,
                textColor2Depth: t,
                textColor3Depth: u,
                textColorPrimary: o,
                textColorInfo: d,
                textColorSuccess: h,
                textColorWarning: p,
                textColorError: f,
                codeTextColor: t,
                codeColor: m,
                codeBorder: '1px solid #0000'
            });
        }
    }, Ov = {
        name: 'Upload',
        common: of,
        peers: {
            Button: Qh,
            Progress: nv
        },
        self(e) {
            const {errorColor: o} = e, t = (e => {
                    const {
                        iconColor: o,
                        primaryColor: t,
                        errorColor: n,
                        textColor2: r,
                        successColor: i,
                        opacityDisabled: l,
                        actionColor: a,
                        borderColor: s,
                        hoverColor: c,
                        lineHeight: u,
                        borderRadius: d,
                        fontSize: p
                    } = e;
                    return {
                        fontSize: p,
                        lineHeight: u,
                        borderRadius: d,
                        draggerColor: a,
                        draggerBorder: `1px dashed ${ s }`,
                        draggerBorderHover: `1px dashed ${ t }`,
                        itemColorHover: c,
                        itemColorHoverError: Yi(n, { alpha: 0.06 }),
                        itemTextColor: r,
                        itemTextColorError: n,
                        itemTextColorSuccess: i,
                        itemIconColor: o,
                        itemDisabledOpacity: l,
                        itemBorderImageCardError: `1px solid ${ n }`,
                        itemBorderImageCard: `1px solid ${ s }`
                    };
                })(e);
            return t.itemColorHoverError = Yi(o, { alpha: 0.09 }), t;
        }
    }, Av = {
        name: 'Watermark',
        common: of,
        self(e) {
            const {fontFamily: o} = e;
            return { fontFamily: o };
        }
    }, Iv = {
        name: 'Row',
        common: of
    }, $v = {
        name: 'Image',
        common: of,
        peers: { Tooltip: Im },
        self: e => {
            const {textColor2: o} = e;
            return {
                toolbarIconColor: o,
                toolbarColor: 'rgba(0, 0, 0, .35)',
                toolbarBoxShadow: 'none',
                toolbarBorderRadius: '24px'
            };
        }
    }, Mv = {
        extraFontSize: '12px',
        width: '440px'
    }, Hv = {
        name: 'Transfer',
        common: of,
        peers: {
            Checkbox: xm,
            Scrollbar: eh,
            Input: Fh,
            Empty: Jf,
            Button: Qh
        },
        self(e) {
            const {
                iconColorDisabled: o,
                iconColor: t,
                fontWeight: n,
                fontSizeLarge: r,
                fontSizeMedium: i,
                fontSizeSmall: l,
                heightLarge: a,
                heightMedium: s,
                heightSmall: c,
                borderRadius: u,
                inputColor: d,
                tableHeaderColor: p,
                textColor1: f,
                textColorDisabled: h,
                textColor2: m,
                hoverColor: g
            } = e;
            return Object.assign(Object.assign({}, Mv), {
                itemHeightSmall: c,
                itemHeightMedium: s,
                itemHeightLarge: a,
                fontSizeSmall: l,
                fontSizeMedium: i,
                fontSizeLarge: r,
                borderRadius: u,
                borderColor: '#0000',
                listColor: d,
                headerColor: p,
                titleTextColor: f,
                titleTextColorDisabled: h,
                extraTextColor: m,
                filterDividerColor: '#0000',
                itemTextColor: m,
                itemTextColorDisabled: h,
                itemColorPending: g,
                titleFontWeight: n,
                iconColor: t,
                iconColorDisabled: o
            });
        }
    }, Fv = {
        icon: Function,
        type: {
            type: String,
            default: 'info'
        },
        content: [
            String,
            Number,
            Function
        ],
        showIcon: {
            type: Boolean,
            default: true
        },
        closable: Boolean,
        keepAliveOnHover: Boolean,
        onClose: Function,
        onMouseenter: Function,
        onMouseleave: Function
    }, Bv = 'n-message-api', Dv = 'n-message-provider', jv = Wl([
        Vl('message-wrapper', '\n margin: var(--n-margin);\n z-index: 0;\n transform-origin: top center;\n display: flex;\n ', [Oh({
                overflow: 'visible',
                originalTransition: 'transform .3s var(--n-bezier)',
                enterToProps: { transform: 'scale(1)' },
                leaveToProps: { transform: 'scale(0.85)' }
            })]),
        Vl('message', '\n box-sizing: border-box;\n display: flex;\n align-items: center;\n transition:\n color .3s var(--n-bezier),\n box-shadow .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n opacity .3s var(--n-bezier),\n transform .3s var(--n-bezier),\n margin-bottom .3s var(--n-bezier);\n padding: var(--n-padding);\n border-radius: var(--n-border-radius);\n flex-wrap: nowrap;\n overflow: hidden;\n max-width: var(--n-max-width);\n color: var(--n-text-color);\n background-color: var(--n-color);\n box-shadow: var(--n-box-shadow);\n ', [
            Gl('content', '\n display: inline-block;\n line-height: var(--n-line-height);\n font-size: var(--n-font-size);\n '),
            Gl('icon', '\n position: relative;\n margin: var(--n-icon-margin);\n height: var(--n-icon-size);\n width: var(--n-icon-size);\n font-size: var(--n-icon-size);\n flex-shrink: 0;\n ', [
                [
                    'default',
                    'info',
                    'success',
                    'warning',
                    'error',
                    'loading'
                ].map(e => ql(`${ e }-type`, [Wl('> *', `\n color: var(--n-icon-color-${ e });\n transition: color .3s var(--n-bezier);\n `)])),
                Wl('> *', '\n position: absolute;\n left: 0;\n top: 0;\n right: 0;\n bottom: 0;\n ', [Xd()])
            ]),
            Gl('close', '\n margin: var(--n-close-margin);\n transition:\n background-color .3s var(--n-bezier),\n color .3s var(--n-bezier);\n flex-shrink: 0;\n ', [
                Wl('&:hover', '\n color: var(--n-close-icon-color-hover);\n '),
                Wl('&:active', '\n color: var(--n-close-icon-color-pressed);\n ')
            ])
        ]),
        Vl('message-container', '\n z-index: 6000;\n position: fixed;\n height: 0;\n overflow: visible;\n display: flex;\n flex-direction: column;\n align-items: center;\n ', [
            ql('top', '\n top: 12px;\n left: 0;\n right: 0;\n '),
            ql('top-left', '\n top: 12px;\n left: 12px;\n right: 0;\n align-items: flex-start;\n '),
            ql('top-right', '\n top: 12px;\n left: 0;\n right: 12px;\n align-items: flex-end;\n '),
            ql('bottom', '\n bottom: 4px;\n left: 0;\n right: 0;\n justify-content: flex-end;\n '),
            ql('bottom-left', '\n bottom: 4px;\n left: 12px;\n right: 0;\n justify-content: flex-end;\n align-items: flex-start;\n '),
            ql('bottom-right', '\n bottom: 4px;\n left: 0;\n right: 12px;\n justify-content: flex-end;\n align-items: flex-end;\n ')
        ])
    ]), Nv = {
        info: () => kr(Dd, null),
        success: () => kr(jd, null),
        warning: () => kr(Nd, null),
        error: () => kr(Bd, null),
        default: () => null
    }, Wv = Tt({
        name: 'Message',
        props: Object.assign(Object.assign({}, Fv), { render: Function }),
        setup(e) {
            const {
                    inlineThemeDisabled: o,
                    mergedRtlRef: t
                } = Ad(e), {
                    props: n,
                    mergedClsPrefixRef: r
                } = ct(Dv), i = Md('Message', t, r), l = Ld('Message', '-message', jv, jg, n, r), a = Er(() => {
                    const {type: o} = e, {
                            common: {cubicBezierEaseInOut: t},
                            self: {
                                padding: n,
                                margin: r,
                                maxWidth: i,
                                iconMargin: a,
                                closeMargin: s,
                                closeSize: c,
                                iconSize: u,
                                fontSize: d,
                                lineHeight: p,
                                borderRadius: f,
                                iconColorInfo: h,
                                iconColorSuccess: m,
                                iconColorWarning: g,
                                iconColorError: v,
                                iconColorLoading: b,
                                closeIconSize: x,
                                closeBorderRadius: C,
                                [Bl('textColor', o)]: y,
                                [Bl('boxShadow', o)]: S,
                                [Bl('color', o)]: w,
                                [Bl('closeColorHover', o)]: _,
                                [Bl('closeColorPressed', o)]: z,
                                [Bl('closeIconColor', o)]: T,
                                [Bl('closeIconColorPressed', o)]: P,
                                [Bl('closeIconColorHover', o)]: E
                            }
                        } = l.value;
                    return {
                        '--n-bezier': t,
                        '--n-margin': r,
                        '--n-padding': n,
                        '--n-max-width': i,
                        '--n-font-size': d,
                        '--n-icon-margin': a,
                        '--n-icon-size': u,
                        '--n-close-icon-size': x,
                        '--n-close-border-radius': C,
                        '--n-close-size': c,
                        '--n-close-margin': s,
                        '--n-text-color': y,
                        '--n-color': w,
                        '--n-box-shadow': S,
                        '--n-icon-color-info': h,
                        '--n-icon-color-success': m,
                        '--n-icon-color-warning': g,
                        '--n-icon-color-error': v,
                        '--n-icon-color-loading': b,
                        '--n-close-color-hover': _,
                        '--n-close-color-pressed': z,
                        '--n-close-icon-color': T,
                        '--n-close-icon-color-pressed': P,
                        '--n-close-icon-color-hover': E,
                        '--n-line-height': p,
                        '--n-border-radius': f
                    };
                }), s = o ? $d('message', Er(() => e.type[0]), a, {}) : void 0;
            return {
                mergedClsPrefix: r,
                rtlEnabled: i,
                messageProviderProps: n,
                handleClose() {
                    var o;
                    null === (o = e.onClose) || void 0 === o || o.call(e);
                },
                cssVars: o ? void 0 : a,
                themeClass: null == s ? void 0 : s.themeClass,
                onRender: null == s ? void 0 : s.onRender,
                placement: n.placement
            };
        },
        render() {
            const {
                render: e,
                type: o,
                closable: t,
                content: n,
                mergedClsPrefix: r,
                cssVars: i,
                themeClass: l,
                onRender: a,
                icon: s,
                handleClose: c,
                showIcon: u
            } = this;
            let d;
            return null == a || a(), kr('div', {
                class: [
                    `${ r }-message-wrapper`,
                    l
                ],
                onMouseenter: this.onMouseenter,
                onMouseleave: this.onMouseleave,
                style: [
                    { alignItems: this.placement.startsWith('top') ? 'flex-start' : 'flex-end' },
                    i
                ]
            }, e ? e(this.$props) : kr('div', {
                class: [
                    `${ r }-message ${ r }-message--${ o }-type`,
                    this.rtlEnabled && `${ r }-message--rtl`
                ]
            }, (d = function (e, o, t) {
                if ('function' == typeof e) {
                    return e();
                }
                {
                    const e = 'loading' === o ? kr(Qd, {
                        clsPrefix: t,
                        strokeWidth: 24,
                        scale: 0.85
                    }) : Nv[o]();
                    return e ? kr(Gd, {
                        clsPrefix: t,
                        key: o
                    }, { default: () => e }) : null;
                }
            }(s, o, r)) && u ? kr('div', { class: `${ r }-message__icon ${ r }-message__icon--${ o }-type` }, kr(Wd, null, { default: () => d })) : null, kr('div', { class: `${ r }-message__content` }, sl(n)), t ? kr(Kd, {
                clsPrefix: r,
                class: `${ r }-message__close`,
                onClick: c,
                absolute: true
            }) : null));
        }
    });
const Uv = Tt({
        name: 'MessageEnvironment',
        props: Object.assign(Object.assign({}, Fv), {
            duration: {
                type: Number,
                default: 3000
            },
            onAfterLeave: Function,
            onLeave: Function,
            internalKey: {
                type: String,
                required: true
            },
            onInternalAfterLeave: Function,
            onHide: Function,
            onAfterHide: Function
        }),
        setup(e) {
            let o = null;
            const t = xo(true);
            function n() {
                const {duration: t} = e;
                t && (o = window.setTimeout(r, t));
            }
            function r() {
                const {onHide: n} = e;
                t.value = false;
                o && (window.clearTimeout(o), o = null);
                n && n();
            }
            return Mt(() => {
                n();
            }), {
                show: t,
                hide: r,
                handleClose: function () {
                    const {onClose: o} = e;
                    o && o();
                    r();
                },
                handleAfterLeave: function () {
                    const {
                        onAfterLeave: o,
                        onInternalAfterLeave: t,
                        onAfterHide: n,
                        internalKey: r
                    } = e;
                    o && o();
                    t && t(r);
                    n && n();
                },
                handleMouseleave: function (e) {
                    e.currentTarget === e.target && n();
                },
                handleMouseenter: function (e) {
                    e.currentTarget === e.target && null !== o && (window.clearTimeout(o), o = null);
                },
                deactivate: function () {
                    r();
                }
            };
        },
        render() {
            return kr(Ud, {
                appear: true,
                onAfterLeave: this.handleAfterLeave,
                onLeave: this.onLeave
            }, {
                default: () => [this.show ? kr(Wv, {
                        content: this.content,
                        type: this.type,
                        icon: this.icon,
                        showIcon: this.showIcon,
                        closable: this.closable,
                        onClose: this.handleClose,
                        onMouseenter: this.keepAliveOnHover ? this.handleMouseenter : void 0,
                        onMouseleave: this.keepAliveOnHover ? this.handleMouseleave : void 0
                    }) : null]
            });
        }
    }), Vv = Tt({
        name: 'MessageProvider',
        props: Object.assign(Object.assign({}, Ld.props), {
            to: [
                String,
                Object
            ],
            duration: {
                type: Number,
                default: 3000
            },
            keepAliveOnHover: Boolean,
            max: Number,
            placement: {
                type: String,
                default: 'top'
            },
            closable: Boolean,
            containerStyle: [
                String,
                Object
            ]
        }),
        setup(e) {
            const {mergedClsPrefixRef: o} = Ad(e), t = xo([]), n = xo({}), r = {
                    create: (e, o) => i(e, Object.assign({ type: 'default' }, o)),
                    info: (e, o) => i(e, Object.assign(Object.assign({}, o), { type: 'info' })),
                    success: (e, o) => i(e, Object.assign(Object.assign({}, o), { type: 'success' })),
                    warning: (e, o) => i(e, Object.assign(Object.assign({}, o), { type: 'warning' })),
                    error: (e, o) => i(e, Object.assign(Object.assign({}, o), { type: 'error' })),
                    loading: (e, o) => i(e, Object.assign(Object.assign({}, o), { type: 'loading' })),
                    destroyAll: function () {
                        Object.values(n.value).forEach(e => {
                            e.hide();
                        });
                    }
                };
            function i(o, r) {
                const i = tl(), l = ro(Object.assign(Object.assign({}, r), {
                        content: o,
                        key: i,
                        destroy: () => {
                            var e;
                            null === (e = n.value[i]) || void 0 === e || e.hide();
                        }
                    })), {max: a} = e;
                return a && t.value.length >= a && t.value.shift(), t.value.push(l), l;
            }
            return st(Dv, {
                props: e,
                mergedClsPrefixRef: o
            }), st(Bv, r), Object.assign({
                mergedClsPrefix: o,
                messageRefs: n,
                messageList: t,
                handleAfterLeave: function (e) {
                    t.value.splice(t.value.findIndex(o => o.key === e), 1);
                    delete n.value[e];
                }
            }, r);
        },
        render() {
            var e, o, t;
            return kr(Un, null, null === (o = (e = this.$slots).default) || void 0 === o ? void 0 : o.call(e), this.messageList.length ? kr(Nn, { to: null !== (t = this.to) && void 0 !== t ? t : 'body' }, kr('div', {
                class: [
                    `${ this.mergedClsPrefix }-message-container`,
                    `${ this.mergedClsPrefix }-message-container--${ this.placement }`
                ],
                key: 'message-container',
                style: this.containerStyle
            }, this.messageList.map(e => kr(Uv, Object.assign({
                ref: o => {
                    o && (this.messageRefs[e.key] = o);
                },
                internalKey: e.key,
                onInternalAfterLeave: this.handleAfterLeave
            }, rl(e, ['destroy'], void 0), {
                duration: void 0 === e.duration ? this.duration : e.duration,
                keepAliveOnHover: void 0 === e.keepAliveOnHover ? this.keepAliveOnHover : e.keepAliveOnHover,
                closable: void 0 === e.closable ? this.closable : e.closable
            }))))) : null);
        }
    });
function Gv() {
    const e = ct(Bv, null);
    return null === e && ul('use-message', 'No outer <n-message-provider /> founded. See prerequisite in https://www.naiveui.com/en-US/os-theme/components/message for more details. If you want to use `useMessage` outside setup, please check https://www.naiveui.com/zh-CN/os-theme/components/message#Q-&-A.'), e;
}
const qv = 'n-notification-provider', Kv = Tt({
        name: 'NotificationContainer',
        props: {
            scrollable: {
                type: Boolean,
                required: true
            },
            placement: {
                type: String,
                required: true
            }
        },
        setup() {
            const {
                    mergedThemeRef: e,
                    mergedClsPrefixRef: o,
                    wipTransitionCountRef: t
                } = ct(qv), n = xo(null);
            return ut(() => {
                var e, o;
                t.value > 0 ? null === (e = null == n ? void 0 : n.value) || void 0 === e || e.classList.add('transitioning') : null === (o = null == n ? void 0 : n.value) || void 0 === o || o.classList.remove('transitioning');
            }), {
                selfRef: n,
                mergedTheme: e,
                mergedClsPrefix: o,
                transitioning: t
            };
        },
        render() {
            const {
                $slots: e,
                scrollable: o,
                mergedClsPrefix: t,
                mergedTheme: n,
                placement: r
            } = this;
            return kr('div', {
                ref: 'selfRef',
                class: [
                    `${ t }-notification-container`,
                    o && `${ t }-notification-container--scrollable`,
                    `${ t }-notification-container--${ r }`
                ]
            }, o ? kr(ih, {
                theme: n.peers.Scrollbar,
                themeOverrides: n.peerOverrides.Scrollbar,
                contentStyle: { overflow: 'hidden' }
            }, e) : e);
        }
    }), Yv = {
        info: () => kr(Dd, null),
        success: () => kr(jd, null),
        warning: () => kr(Nd, null),
        error: () => kr(Bd, null),
        default: () => null
    }, Xv = {
        closable: {
            type: Boolean,
            default: true
        },
        type: {
            type: String,
            default: 'default'
        },
        avatar: Function,
        title: [
            String,
            Function
        ],
        description: [
            String,
            Function
        ],
        content: [
            String,
            Function
        ],
        meta: [
            String,
            Function
        ],
        action: [
            String,
            Function
        ],
        onClose: {
            type: Function,
            required: true
        },
        keepAliveOnHover: Boolean,
        onMouseenter: Function,
        onMouseleave: Function
    }, Jv = al(Xv), Zv = Tt({
        name: 'Notification',
        props: Xv,
        setup(e) {
            const {
                    mergedClsPrefixRef: o,
                    mergedThemeRef: t,
                    props: n
                } = ct(qv), {
                    inlineThemeDisabled: r,
                    mergedRtlRef: i
                } = Ad(), l = Md('Notification', i, o), a = Er(() => {
                    const {type: o} = e, {
                            self: {
                                color: n,
                                textColor: r,
                                closeIconColor: i,
                                closeIconColorHover: l,
                                closeIconColorPressed: a,
                                headerTextColor: s,
                                descriptionTextColor: c,
                                actionTextColor: u,
                                borderRadius: d,
                                headerFontWeight: p,
                                boxShadow: f,
                                lineHeight: h,
                                fontSize: m,
                                closeMargin: g,
                                closeSize: v,
                                width: b,
                                padding: x,
                                closeIconSize: C,
                                closeBorderRadius: y,
                                closeColorHover: S,
                                closeColorPressed: w,
                                titleFontSize: _,
                                metaFontSize: z,
                                descriptionFontSize: T,
                                [Bl('iconColor', o)]: P
                            },
                            common: {
                                cubicBezierEaseOut: E,
                                cubicBezierEaseIn: k,
                                cubicBezierEaseInOut: R
                            }
                        } = t.value, {
                            left: L,
                            right: O,
                            top: A,
                            bottom: I
                        } = Ti(x);
                    return {
                        '--n-color': n,
                        '--n-font-size': m,
                        '--n-text-color': r,
                        '--n-description-text-color': c,
                        '--n-action-text-color': u,
                        '--n-title-text-color': s,
                        '--n-title-font-weight': p,
                        '--n-bezier': R,
                        '--n-bezier-ease-out': E,
                        '--n-bezier-ease-in': k,
                        '--n-border-radius': d,
                        '--n-box-shadow': f,
                        '--n-close-border-radius': y,
                        '--n-close-color-hover': S,
                        '--n-close-color-pressed': w,
                        '--n-close-icon-color': i,
                        '--n-close-icon-color-hover': l,
                        '--n-close-icon-color-pressed': a,
                        '--n-line-height': h,
                        '--n-icon-color': P,
                        '--n-close-margin': g,
                        '--n-close-size': v,
                        '--n-close-icon-size': C,
                        '--n-width': b,
                        '--n-padding-left': L,
                        '--n-padding-right': O,
                        '--n-padding-top': A,
                        '--n-padding-bottom': I,
                        '--n-title-font-size': _,
                        '--n-meta-font-size': z,
                        '--n-description-font-size': T
                    };
                }), s = r ? $d('notification', Er(() => e.type[0]), a, n) : void 0;
            return {
                mergedClsPrefix: o,
                showAvatar: Er(() => e.avatar || 'default' !== e.type),
                handleCloseClick() {
                    e.onClose();
                },
                rtlEnabled: l,
                cssVars: r ? void 0 : a,
                themeClass: null == s ? void 0 : s.themeClass,
                onRender: null == s ? void 0 : s.onRender
            };
        },
        render() {
            var e;
            const {mergedClsPrefix: o} = this;
            return null === (e = this.onRender) || void 0 === e || e.call(this), kr('div', {
                class: [
                    `${ o }-notification-wrapper`,
                    this.themeClass
                ],
                onMouseenter: this.onMouseenter,
                onMouseleave: this.onMouseleave,
                style: this.cssVars
            }, kr('div', {
                class: [
                    `${ o }-notification`,
                    this.rtlEnabled && `${ o }-notification--rtl`,
                    this.themeClass,
                    {
                        [`${ o }-notification--closable`]: this.closable,
                        [`${ o }-notification--show-avatar`]: this.showAvatar
                    }
                ],
                style: this.cssVars
            }, this.showAvatar ? kr('div', { class: `${ o }-notification__avatar` }, this.avatar ? sl(this.avatar) : 'default' !== this.type ? kr(Gd, { clsPrefix: o }, { default: () => Yv[this.type]() }) : null) : null, this.closable ? kr(Kd, {
                clsPrefix: o,
                class: `${ o }-notification__close`,
                onClick: this.handleCloseClick
            }) : null, kr('div', {
                ref: 'bodyRef',
                class: `${ o }-notification-main`
            }, this.title ? kr('div', { class: `${ o }-notification-main__header` }, sl(this.title)) : null, this.description ? kr('div', { class: `${ o }-notification-main__description` }, sl(this.description)) : null, this.content ? kr('pre', { class: `${ o }-notification-main__content` }, sl(this.content)) : null, this.meta || this.action ? kr('div', { class: `${ o }-notification-main-footer` }, this.meta ? kr('div', { class: `${ o }-notification-main-footer__meta` }, sl(this.meta)) : null, this.action ? kr('div', { class: `${ o }-notification-main-footer__action` }, sl(this.action)) : null) : null)));
        }
    }), Qv = Object.assign(Object.assign({}, Xv), {
        duration: Number,
        onClose: Function,
        onLeave: Function,
        onAfterEnter: Function,
        onAfterLeave: Function,
        onHide: Function,
        onAfterShow: Function,
        onAfterHide: Function
    }), eb = Tt({
        name: 'NotificationEnvironment',
        props: Object.assign(Object.assign({}, Qv), {
            internalKey: {
                type: String,
                required: true
            },
            onInternalAfterLeave: {
                type: Function,
                required: true
            }
        }),
        setup(e) {
            const {wipTransitionCountRef: o} = ct(qv), t = xo(true);
            let n = null;
            function r() {
                t.value = false;
                n && window.clearTimeout(n);
            }
            return Mt(() => {
                e.duration && (n = window.setTimeout(r, e.duration));
            }), {
                show: t,
                hide: r,
                handleClose: function () {
                    const {onClose: o} = e;
                    o ? Promise.resolve(o()).then(e => {
                        false !== e && r();
                    }) : r();
                },
                handleAfterLeave: function () {
                    o.value--;
                    const {
                        onAfterLeave: t,
                        onInternalAfterLeave: n,
                        onAfterHide: r,
                        internalKey: i
                    } = e;
                    t && t();
                    n(i);
                    r && r();
                },
                handleLeave: function (o) {
                    const {onHide: t} = e;
                    t && t();
                    o.style.maxHeight = '0';
                    o.offsetHeight;
                },
                handleBeforeLeave: function (e) {
                    o.value++;
                    e.style.maxHeight = `${ e.offsetHeight }px`;
                    e.style.height = `${ e.offsetHeight }px`;
                    e.offsetHeight;
                },
                handleAfterEnter: function (t) {
                    o.value--;
                    t.style.height = '';
                    t.style.maxHeight = '';
                    const {
                        onAfterEnter: n,
                        onAfterShow: r
                    } = e;
                    n && n();
                    r && r();
                },
                handleBeforeEnter: function (e) {
                    o.value++;
                    Wo(() => {
                        e.style.height = `${ e.offsetHeight }px`;
                        e.style.maxHeight = '0';
                        e.style.transition = 'none';
                        e.offsetHeight;
                        e.style.transition = '';
                        e.style.maxHeight = e.style.height;
                    });
                },
                handleMouseenter: function (e) {
                    e.currentTarget === e.target && null !== n && (window.clearTimeout(n), n = null);
                },
                handleMouseleave: function (o) {
                    o.currentTarget === o.target && function () {
                        const {duration: o} = e;
                        o && (n = window.setTimeout(r, o));
                    }();
                }
            };
        },
        render() {
            return kr(Yr, {
                name: 'notification-transition',
                appear: true,
                onBeforeEnter: this.handleBeforeEnter,
                onAfterEnter: this.handleAfterEnter,
                onBeforeLeave: this.handleBeforeLeave,
                onLeave: this.handleLeave,
                onAfterLeave: this.handleAfterLeave
            }, {
                default: () => this.show ? kr(Zv, Object.assign({}, nl(this.$props, Jv), {
                    onClose: this.handleClose,
                    onMouseenter: this.duration && this.keepAliveOnHover ? this.handleMouseenter : void 0,
                    onMouseleave: this.duration && this.keepAliveOnHover ? this.handleMouseleave : void 0
                })) : null
            });
        }
    }), ob = Wl([Vl('notification-container', '\n z-index: 4000;\n position: fixed;\n overflow: visible;\n display: flex;\n flex-direction: column;\n align-items: flex-end;\n ', [
            Wl('>', [Vl('scrollbar', '\n width: initial;\n overflow: visible;\n height: -moz-fit-content !important;\n height: fit-content !important;\n max-height: 100vh !important;\n ', [Wl('>', [Vl('scrollbar-container', '\n height: -moz-fit-content !important;\n height: fit-content !important;\n max-height: 100vh !important;\n ', [Vl('scrollbar-content', '\n padding-top: 12px;\n padding-bottom: 33px;\n ')])])])]),
            ql('top, top-right, top-left', '\n top: 12px;\n ', [Wl('&.transitioning >', [Vl('scrollbar', [Wl('>', [Vl('scrollbar-container', '\n min-height: 100vh !important;\n ')])])])]),
            ql('bottom, bottom-right, bottom-left', '\n bottom: 12px;\n ', [
                Wl('>', [Vl('scrollbar', [Wl('>', [Vl('scrollbar-container', [Vl('scrollbar-content', '\n padding-bottom: 12px;\n ')])])])]),
                Vl('notification-wrapper', '\n display: flex;\n align-items: flex-end;\n margin-bottom: 0;\n margin-top: 12px;\n ')
            ]),
            ql('top, bottom', '\n left: 50%;\n transform: translateX(-50%);\n ', [Vl('notification-wrapper', [
                    Wl('&.notification-transition-enter-from, &.notification-transition-leave-to', '\n transform: scale(0.85);\n '),
                    Wl('&.notification-transition-leave-from, &.notification-transition-enter-to', '\n transform: scale(1);\n ')
                ])]),
            ql('top', [Vl('notification-wrapper', '\n transform-origin: top center;\n ')]),
            ql('bottom', [Vl('notification-wrapper', '\n transform-origin: bottom center;\n ')]),
            ql('top-right, bottom-right', [Vl('notification', '\n margin-left: 28px;\n margin-right: 16px;\n ')]),
            ql('top-left, bottom-left', [Vl('notification', '\n margin-left: 16px;\n margin-right: 28px;\n ')]),
            ql('top-right', '\n right: 0;\n ', [tb('top-right')]),
            ql('top-left', '\n left: 0;\n ', [tb('top-left')]),
            ql('bottom-right', '\n right: 0;\n ', [tb('bottom-right')]),
            ql('bottom-left', '\n left: 0;\n ', [tb('bottom-left')]),
            ql('scrollable', [
                ql('top-right', '\n top: 0;\n '),
                ql('top-left', '\n top: 0;\n '),
                ql('bottom-right', '\n bottom: 0;\n '),
                ql('bottom-left', '\n bottom: 0;\n ')
            ]),
            Vl('notification-wrapper', '\n margin-bottom: 12px;\n ', [
                Wl('&.notification-transition-enter-from, &.notification-transition-leave-to', '\n opacity: 0;\n margin-top: 0 !important;\n margin-bottom: 0 !important;\n '),
                Wl('&.notification-transition-leave-from, &.notification-transition-enter-to', '\n opacity: 1;\n '),
                Wl('&.notification-transition-leave-active', '\n transition:\n background-color .3s var(--n-bezier),\n color .3s var(--n-bezier),\n opacity .3s var(--n-bezier),\n transform .3s var(--n-bezier-ease-in),\n max-height .3s var(--n-bezier),\n margin-top .3s linear,\n margin-bottom .3s linear,\n box-shadow .3s var(--n-bezier);\n '),
                Wl('&.notification-transition-enter-active', '\n transition:\n background-color .3s var(--n-bezier),\n color .3s var(--n-bezier),\n opacity .3s var(--n-bezier),\n transform .3s var(--n-bezier-ease-out),\n max-height .3s var(--n-bezier),\n margin-top .3s linear,\n margin-bottom .3s linear,\n box-shadow .3s var(--n-bezier);\n ')
            ]),
            Vl('notification', '\n background-color: var(--n-color);\n color: var(--n-text-color);\n transition:\n background-color .3s var(--n-bezier),\n color .3s var(--n-bezier),\n opacity .3s var(--n-bezier),\n box-shadow .3s var(--n-bezier);\n font-family: inherit;\n font-size: var(--n-font-size);\n font-weight: 400;\n position: relative;\n display: flex;\n overflow: hidden;\n flex-shrink: 0;\n padding-left: var(--n-padding-left);\n padding-right: var(--n-padding-right);\n width: var(--n-width);\n border-radius: var(--n-border-radius);\n box-shadow: var(--n-box-shadow);\n box-sizing: border-box;\n opacity: 1;\n ', [
                Gl('avatar', [
                    Vl('icon', { color: 'var(--n-icon-color)' }),
                    Vl('base-icon', { color: 'var(--n-icon-color)' })
                ]),
                ql('show-avatar', [Vl('notification-main', '\n margin-left: 40px;\n width: calc(100% - 40px); \n ')]),
                ql('closable', [
                    Vl('notification-main', [Wl('> *:first-child', { paddingRight: '20px' })]),
                    Gl('close', '\n position: absolute;\n top: 0;\n right: 0;\n margin: var(--n-close-margin);\n transition:\n background-color .3s var(--n-bezier),\n color .3s var(--n-bezier);\n ')
                ]),
                Gl('avatar', '\n position: absolute;\n top: var(--n-padding-top);\n left: var(--n-padding-left);\n width: 28px;\n height: 28px;\n font-size: 28px;\n display: flex;\n align-items: center;\n justify-content: center;\n ', [Vl('icon', 'transition: color .3s var(--n-bezier);')]),
                Vl('notification-main', '\n padding-top: var(--n-padding-top);\n padding-bottom: var(--n-padding-bottom);\n box-sizing: border-box;\n display: flex;\n flex-direction: column;\n margin-left: 8px;\n width: calc(100% - 8px);\n ', [
                    Vl('notification-main-footer', '\n display: flex;\n align-items: center;\n justify-content: space-between;\n margin-top: 12px;\n ', [
                        Gl('meta', '\n font-size: var(--n-meta-font-size);\n transition: color .3s var(--n-bezier-ease-out);\n color: var(--n-description-text-color);\n '),
                        Gl('action', '\n cursor: pointer;\n transition: color .3s var(--n-bezier-ease-out);\n color: var(--n-action-text-color);\n ')
                    ]),
                    Gl('header', '\n font-weight: var(--n-title-font-weight);\n font-size: var(--n-title-font-size);\n transition: color .3s var(--n-bezier-ease-out);\n color: var(--n-title-text-color);\n '),
                    Gl('description', '\n margin-top: 8px;\n font-size: var(--n-description-font-size);\n transition: color .3s var(--n-bezier-ease-out);\n color: var(--n-description-text-color);\n '),
                    Gl('content', '\n line-height: var(--n-line-height);\n margin: 12px 0 0 0;\n font-family: inherit;\n white-space: pre-wrap;\n word-wrap: break-word;\n transition: color .3s var(--n-bezier-ease-out);\n color: var(--n-text-color);\n ', [Wl('&:first-child', { margin: 0 })])
                ])
            ])
        ])]);
function tb(e) {
    const o = e.split('-')[1];
    return Vl('notification-wrapper', [
        Wl('&.notification-transition-enter-from, &.notification-transition-leave-to', `\n transform: translate(${ 'left' === o ? 'calc(-100%)' : 'calc(100%)' }, 0);\n `),
        Wl('&.notification-transition-leave-from, &.notification-transition-enter-to', '\n transform: translate(0, 0);\n ')
    ]);
}
const nb = 'n-notification-api', rb = Tt({
        name: 'NotificationProvider',
        props: Object.assign(Object.assign({}, Ld.props), {
            containerStyle: [
                String,
                Object
            ],
            to: [
                String,
                Object
            ],
            scrollable: {
                type: Boolean,
                default: true
            },
            max: Number,
            placement: {
                type: String,
                default: 'top-right'
            },
            keepAliveOnHover: Boolean
        }),
        setup(e) {
            const {mergedClsPrefixRef: o} = Ad(e), t = xo([]), n = {}, r = new Set();
            function i(o) {
                const i = tl(), l = () => {
                        r.add(i);
                        n[i] && n[i].hide();
                    }, a = ro(Object.assign(Object.assign({}, o), {
                        key: i,
                        destroy: l,
                        hide: l,
                        deactivate: l
                    })), {max: s} = e;
                if (s && t.value.length - r.size >= s) {
                    let e = false, o = 0;
                    for (const i of t.value) {
                        if (!r.has(i.key)) {
                            n[i.key] && (i.destroy(), e = true);
                            break;
                        }
                        o++;
                    }
                    e || t.value.splice(o, 1);
                }
                return t.value.push(a), a;
            }
            const l = [
                'info',
                'success',
                'warning',
                'error'
            ].map(e => o => i(Object.assign(Object.assign({}, o), { type: e })));
            const a = Ld('Notification', '-notification', ob, Hg, e, o), s = {
                    create: i,
                    info: l[0],
                    success: l[1],
                    warning: l[2],
                    error: l[3],
                    open: function (e) {
                        return i(e);
                    },
                    destroyAll: function () {
                        Object.values(t.value).forEach(e => {
                            e.hide();
                        });
                    }
                }, c = xo(0);
            return st(nb, s), st(qv, {
                props: e,
                mergedClsPrefixRef: o,
                mergedThemeRef: a,
                wipTransitionCountRef: c
            }), Object.assign({
                mergedClsPrefix: o,
                notificationList: t,
                notificationRefs: n,
                handleAfterLeave: function (e) {
                    r.delete(e);
                    t.value.splice(t.value.findIndex(o => o.key === e), 1);
                }
            }, s);
        },
        render() {
            var e, o, t;
            const {placement: n} = this;
            return kr(Un, null, null === (o = (e = this.$slots).default) || void 0 === o ? void 0 : o.call(e), this.notificationList.length ? kr(Nn, { to: null !== (t = this.to) && void 0 !== t ? t : 'body' }, kr(Kv, {
                style: this.containerStyle,
                scrollable: this.scrollable && 'top' !== n && 'bottom' !== n,
                placement: n
            }, {
                default: () => this.notificationList.map(e => kr(eb, Object.assign({
                    ref: o => {
                        const t = e.key;
                        null === o ? delete this.notificationRefs[t] : this.notificationRefs[t] = o;
                    }
                }, rl(e, [
                    'destroy',
                    'hide',
                    'deactivate'
                ]), {
                    internalKey: e.key,
                    onInternalAfterLeave: this.handleAfterLeave,
                    keepAliveOnHover: void 0 === e.keepAliveOnHover ? this.keepAliveOnHover : e.keepAliveOnHover
                })))
            })) : null);
        }
    }), ib = {
        name: 'dark',
        common: of,
        Alert: Eh,
        Anchor: Ih,
        AutoComplete: Dh,
        Avatar: jh,
        AvatarGroup: Nh,
        BackTop: Uh,
        Badge: Vh,
        Breadcrumb: qh,
        Button: Qh,
        ButtonGroup: Wg,
        Calendar: nm,
        Card: um,
        Carousel: mm,
        Cascader: Cm,
        Checkbox: xm,
        Code: ym,
        Collapse: Sm,
        CollapseTransition: zm,
        ColorPicker: lm,
        DataTable: Wm,
        DatePicker: Xm,
        Descriptions: Zm,
        Dialog: tg,
        Divider: yg,
        Drawer: Sg,
        Dropdown: jm,
        DynamicInput: _g,
        DynamicTags: Pg,
        Element: Eg,
        Empty: Jf,
        Ellipsis: $m,
        Equation: {
            name: 'Equation',
            common: of,
            self: () => ({})
        },
        Form: Og,
        GradientText: Ag,
        Icon: Gm,
        IconWrapper: Ig,
        Image: $v,
        Input: Fh,
        InputNumber: Ug,
        LegacyTransfer: Hv,
        Layout: Vg,
        List: Gg,
        LoadingBar: qg,
        Log: Kg,
        Menu: Xg,
        Mention: Yg,
        Message: Ng,
        Modal: pg,
        Notification: Fg,
        PageHeader: Zg,
        Pagination: Om,
        Popconfirm: tv,
        Popover: xh,
        Popselect: Pm,
        Progress: nv,
        Radio: Hm,
        Rate: rv,
        Result: sv,
        Row: Iv,
        Scrollbar: eh,
        Select: Rm,
        Skeleton: {
            name: 'Skeleton',
            common: of,
            self(e) {
                const {
                    heightSmall: o,
                    heightMedium: t,
                    heightLarge: n,
                    borderRadius: r
                } = e;
                return {
                    color: 'rgba(255, 255, 255, 0.12)',
                    colorEnd: 'rgba(255, 255, 255, 0.18)',
                    borderRadius: r,
                    heightSmall: o,
                    heightMedium: t,
                    heightLarge: n
                };
            }
        },
        Slider: uv,
        Space: Tg,
        Spin: fv,
        Statistic: hv,
        Steps: gv,
        Switch: bv,
        Table: Cv,
        Tabs: Sv,
        Tag: yh,
        Thing: wv,
        TimePicker: Km,
        Timeline: zv,
        Tooltip: Im,
        Transfer: Pv,
        Tree: Ev,
        TreeSelect: kv,
        Typography: Lv,
        Upload: Ov,
        Watermark: Av
    };
function lb() {
    const e = window.$electron;
    return {
        electron: e,
        skipOuterLink: o => {
            e.openExternal(o);
        }
    };
}
var ab = (e => (e.USER = 'USER', e.APP = 'APP', e.TRANSLATE = 'TRANSLATE', e.KEY = 'KEY', e.NOTICE = 'NOTICE', e))(ab || {}), sb = (e => (e.TOKEN = 'TOKEN', e.USER_INFO = 'USER_INFO', e.APP_LIST = 'APP_LIST', e.CURRENT_APP = 'CURRENT_APP', e.CURRENT_APP_ID = 'CURRENT_APP_ID', e.CURRENT_APP_ITEM = 'CURRENT_APP_ITEM', e.CURRENT_MENU_TYPE = 'CURRENT_MENU_TYPE', e.PASSWORD = 'PASSWORD', e.SERVER_URL = 'SERVER_URL', e.LOCALE = 'LOCALE', e.OPEN_DISTURB = 'OPEN_DISTURB', e.IS_LOCK = 'IS_LOCK', e.CHAT_USER = 'CHAT_USER', e.CHAT_APP_LIST = 'CHAT_APP_LIST', e.SAME_CHAT_SHARE_CONFIG = 'SAME_CHAT_SHARE_CONFIG', e))(sb || {}), cb = (e => (e[e.YOUDAO = 0] = 'YOUDAO', e[e.GOOGLE = 1] = 'GOOGLE', e[e.DEEPL = 2] = 'DEEPL', e[e.YOUDAO_T = 3] = 'YOUDAO_T', e))(cb || {}), ub = (e => (e.EDIT_APP = 'EDIT_APP', e.DELETE_APP = 'DELETE_APP', e.DEVTOOL = 'DEVTOOL', e.RELOAD = 'RELOAD', e.FORCE_RELOAD = 'FORCE_RELOAD', e.RELOAD_ALL = 'RELOAD_ALL', e.CLOSE_ALL = 'CLOSE_ALL', e.PAGE_ACTION = 'PAGE_ACTION', e))(ub || {}), db = (e => (e.HOME = '0', e.SETTING = '1', e.USER_CENTER = '2', e))(db || {}), pb = (e => (e[e.LOGIN = 1] = 'LOGIN', e[e.REGISTER = 2] = 'REGISTER', e[e.FORGET_PASSWORD = 3] = 'FORGET_PASSWORD', e))(pb || {}), fb = (e => (e.ERR_NETWORK = 'ERR_NETWORK', e))(fb || {});
const hb = window.localStorage;
class mb {
    static set(e, o) {
        'string' == typeof e && hb.setItem(e, 'string' == typeof o ? o : JSON.stringify(o));
    }
    static get(e, o) {
        try {
            const t = hb.getItem(e);
            return /^(true)|(false)|(\[.*\])|({.*})$/.test(t) && 'string' == typeof t ? JSON.parse(t) : t || o;
        } catch (t) {
            return o || '';
        }
    }
    static remove(e) {
        try {
            hb.removeItem(e);
        } catch (o) {
        }
    }
    static clear() {
        try {
            hb.clear();
        } catch (e) {
        }
    }
}
function gb(e, o) {
    return function () {
        return e.apply(o, arguments);
    };
}
const {toString: vb} = Object.prototype, {getPrototypeOf: bb} = Object, xb = (Cb = Object.create(null), e => {
        const o = vb.call(e);
        return Cb[o] || (Cb[o] = o.slice(8, -1).toLowerCase());
    });
var Cb;
const yb = e => (e = e.toLowerCase(), o => xb(o) === e), Sb = e => o => typeof o === e, {isArray: wb} = Array, _b = Sb('undefined');
const zb = yb('ArrayBuffer');
const Tb = Sb('string'), Pb = Sb('function'), Eb = Sb('number'), kb = e => null !== e && 'object' == typeof e, Rb = e => {
        if ('object' !== xb(e)) {
            return false;
        }
        const o = bb(e);
        return !(null !== o && o !== Object.prototype && null !== Object.getPrototypeOf(o) || Symbol.toStringTag in e || Symbol.iterator in e);
    }, Lb = yb('Date'), Ob = yb('File'), Ab = yb('Blob'), Ib = yb('FileList'), $b = yb('URLSearchParams');
function Mb(e, o, {
    allOwnKeys: t = false
} = {}) {
    if (null == e) {
        return;
    }
    let n, r;
    if ('object' != typeof e && (e = [e]), wb(e)) {
        for (n = 0, r = e.length; n < r; n++) {
            o.call(null, e[n], n, e);
        }
    } else {
        const r = t ? Object.getOwnPropertyNames(e) : Object.keys(e), i = r.length;
        let l;
        for (n = 0; n < i; n++) {
            l = r[n];
            o.call(null, e[l], l, e);
        }
    }
}
function Hb(e, o) {
    o = o.toLowerCase();
    const t = Object.keys(e);
    let n, r = t.length;
    for (; r-- > 0;) {
        if (n = t[r], o === n.toLowerCase()) {
            return n;
        }
    }
    return null;
}
const Fb = 'undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : global, Bb = e => !_b(e) && e !== Fb;
const Db = (jb = 'undefined' != typeof Uint8Array && bb(Uint8Array), e => jb && e instanceof jb);
var jb;
const Nb = yb('HTMLFormElement'), Wb = (({hasOwnProperty: e}) => (o, t) => e.call(o, t))(Object.prototype), Ub = yb('RegExp'), Vb = (e, o) => {
        const t = Object.getOwnPropertyDescriptors(e), n = {};
        Mb(t, (t, r) => {
            false !== o(t, r, e) && (n[r] = t);
        });
        Object.defineProperties(e, n);
    }, Gb = 'abcdefghijklmnopqrstuvwxyz', qb = '0123456789', Kb = {
        DIGIT: qb,
        ALPHA: Gb,
        ALPHA_DIGIT: Gb + Gb.toUpperCase() + qb
    };
const Yb = {
    isArray: wb,
    isArrayBuffer: zb,
    isBuffer: function (e) {
        return null !== e && !_b(e) && null !== e.constructor && !_b(e.constructor) && Pb(e.constructor.isBuffer) && e.constructor.isBuffer(e);
    },
    isFormData: e => {
        ;
        return e && ('function' == typeof FormData && e instanceof FormData || vb.call(e) === '[object FormData]' || Pb(e.toString) && e.toString() === '[object FormData]');
    },
    isArrayBufferView: function (e) {
        let o;
        return o = 'undefined' != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && zb(e.buffer), o;
    },
    isString: Tb,
    isNumber: Eb,
    isBoolean: e => true === e || false === e,
    isObject: kb,
    isPlainObject: Rb,
    isUndefined: _b,
    isDate: Lb,
    isFile: Ob,
    isBlob: Ab,
    isRegExp: Ub,
    isFunction: Pb,
    isStream: e => kb(e) && Pb(e.pipe),
    isURLSearchParams: $b,
    isTypedArray: Db,
    isFileList: Ib,
    forEach: Mb,
    merge: function e() {
        const {caseless: o} = Bb(this) && this || {}, t = {}, n = (n, r) => {
                const i = o && Hb(t, r) || r;
                Rb(t[i]) && Rb(n) ? t[i] = e(t[i], n) : Rb(n) ? t[i] = e({}, n) : wb(n) ? t[i] = n.slice() : t[i] = n;
            };
        for (let r = 0, i = arguments.length; r < i; r++) {
            arguments[r] && Mb(arguments[r], n);
        }
        return t;
    },
    extend: (e, o, t, {allOwnKeys: n} = {}) => (Mb(o, (o, n) => {
        t && Pb(o) ? e[n] = gb(o, t) : e[n] = o;
    }, { allOwnKeys: n }), e),
    trim: e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''),
    stripBOM: e => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
    inherits: (e, o, t, n) => {
        e.prototype = Object.create(o.prototype, n);
        e.prototype.constructor = e;
        Object.defineProperty(e, 'super', { value: o.prototype });
        t && Object.assign(e.prototype, t);
    },
    toFlatObject: (e, o, t, n) => {
        let r, i, l;
        const a = {};
        if (o = o || {}, null == e) {
            return o;
        }
        do {
            for (r = Object.getOwnPropertyNames(e), i = r.length; i-- > 0;) {
                l = r[i];
                n && !n(l, e, o) || a[l] || (o[l] = e[l], a[l] = true);
            }
            e = false !== t && bb(e);
        } while (e && (!t || t(e, o)) && e !== Object.prototype);
        return o;
    },
    kindOf: xb,
    kindOfTest: yb,
    endsWith: (e, o, t) => {
        e = String(e);
        (void 0 === t || t > e.length) && (t = e.length);
        t -= o.length;
        const n = e.indexOf(o, t);
        return -1 !== n && n === t;
    },
    toArray: e => {
        if (!e) {
            return null;
        }
        if (wb(e)) {
            return e;
        }
        let o = e.length;
        if (!Eb(o)) {
            return null;
        }
        const t = new Array(o);
        for (; o-- > 0;) {
            t[o] = e[o];
        }
        return t;
    },
    forEachEntry: (e, o) => {
        const t = (e && e[Symbol.iterator]).call(e);
        let n;
        for (; (n = t.next()) && !n.done;) {
            const t = n.value;
            o.call(e, t[0], t[1]);
        }
    },
    matchAll: (e, o) => {
        let t;
        const n = [];
        for (; null !== (t = e.exec(o));) {
            n.push(t);
        }
        return n;
    },
    isHTMLForm: Nb,
    hasOwnProperty: Wb,
    hasOwnProp: Wb,
    reduceDescriptors: Vb,
    freezeMethods: e => {
        Vb(e, (o, t) => {
            if (Pb(e) && -1 !== [
                    'arguments',
                    'caller',
                    'callee'
                ].indexOf(t)) {
                return false;
            }
            const n = e[t];
            Pb(n) && (o.enumerable = false, 'writable' in o ? o.writable = false : o.set || (o.set = () => {
                throw Error('Can not rewrite read-only method \'' + t + '\'');
            }));
        });
    },
    toObjectSet: (e, o) => {
        const t = { e: true }, n = e => {
                e.forEach(e => {
                    ;
                });
            };
        return wb(e) ? n(e) : n(String(e).split(o)), t;
    },
    toCamelCase: e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (e, o, t) {
        return o.toUpperCase() + t;
    }),
    noop: () => {
    },
    toFiniteNumber: (e, o) => (e = +e, Number.isFinite(e) ? e : o),
    findKey: Hb,
    global: Fb,
    isContextDefined: Bb,
    ALPHABET: Kb,
    generateString: (e = 16, o = Kb.ALPHA_DIGIT) => {
        let t = '';
        const {length: n} = o;
        for (; e--;) {
            t += o[Math.random() * n | 0];
        }
        return t;
    },
    isSpecCompliantForm: function (e) {
        return !!(e && Pb(e.append) && 'FormData' === e[Symbol.toStringTag] && e[Symbol.iterator]);
    },
    toJSONObject: e => {
        const o = new Array(10), t = (e, n) => {
                if (kb(e)) {
                    if (o.indexOf(e) >= 0) {
                        return;
                    }
                    if (!('toJSON' in e)) {
                        o[n] = e;
                        const r = wb(e) ? [] : {};
                        return Mb(e, (e, o) => {
                            const i = t(e, n + 1);
                            !_b(i) && (r[o] = i);
                        }), o[n] = void 0, r;
                    }
                }
                return e;
            };
        return t(e, 0);
    }
};
function Xb(e, o, t, n, r) {
    Error.call(this);
    Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack;
    this.message = e;
    this.name = 'AxiosError';
    o && (this.code = o);
    t && (this.config = t);
    n && (this.request = n);
    r && (this.response = r);
}
Yb.inherits(Xb, Error, {
    toJSON: function () {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: Yb.toJSONObject(this.config),
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
        };
    }
});
const Jb = Xb.prototype, Zb = {};
[
    'ERR_BAD_OPTION_VALUE',
    'ERR_BAD_OPTION',
    'ECONNABORTED',
    'ETIMEDOUT',
    'ERR_NETWORK',
    'ERR_FR_TOO_MANY_REDIRECTS',
    'ERR_DEPRECATED',
    'ERR_BAD_RESPONSE',
    'ERR_BAD_REQUEST',
    'ERR_CANCELED',
    'ERR_NOT_SUPPORT',
    'ERR_INVALID_URL'
].forEach(e => {
    Zb[e] = { value: e };
});
Object.defineProperties(Xb, Zb);
Object.defineProperty(Jb, 'isAxiosError', { value: true });
Xb.from = (e, o, t, n, r, i) => {
    const l = Object.create(Jb);
    return Yb.toFlatObject(e, l, function (e) {
        return e !== Error.prototype;
    }, e => 'isAxiosError' !== e), Xb.call(l, e.message, o, t, n, r), l.cause = e, l.name = e.name, i && Object.assign(l, i), l;
};
function Qb(e) {
    return Yb.isPlainObject(e) || Yb.isArray(e);
}
function ex(e) {
    return Yb.endsWith(e, '[]') ? e.slice(0, -2) : e;
}
function ox(e, o, t) {
    return e ? e.concat(o).map(function (e, o) {
        return e = ex(e), !t && o ? '[' + e + ']' : e;
    }).join(t ? '.' : '') : o;
}
const tx = Yb.toFlatObject(Yb, {}, null, function (e) {
    return /^is[A-Z]/.test(e);
});
function nx(e, o, t) {
    if (!Yb.isObject(e)) {
        throw new TypeError('target must be an object');
    }
    o = o || new FormData();
    const n = (t = Yb.toFlatObject(t, {
            metaTokens: true,
            dots: false,
            indexes: false
        }, false, function (e, o) {
            return !Yb.isUndefined(o[e]);
        })).metaTokens, r = t.visitor || c, i = t.dots, l = t.indexes, a = (t.Blob || 'undefined' != typeof Blob && Blob) && Yb.isSpecCompliantForm(o);
    if (!Yb.isFunction(r)) {
        throw new TypeError('visitor must be a function');
    }
    function s(e) {
        if (null === e) {
            return '';
        }
        if (Yb.isDate(e)) {
            return e.toISOString();
        }
        if (!a && Yb.isBlob(e)) {
            throw new Xb('Blob is not supported. Use a Buffer instead.');
        }
        return Yb.isArrayBuffer(e) || Yb.isTypedArray(e) ? a && 'function' == typeof Blob ? new Blob([e]) : Buffer.from(e) : e;
    }
    function c(e, t, r) {
        let a = e;
        if (e && !r && 'object' == typeof e) {
            if (Yb.endsWith(t, '{}')) {
                t = n ? t : t.slice(0, -2);
                e = JSON.stringify(e);
            } else {
                if (Yb.isArray(e) && function (e) {
                        return Yb.isArray(e) && !e.some(Qb);
                    }(e) || (Yb.isFileList(e) || Yb.endsWith(t, '[]')) && (a = Yb.toArray(e))) {
                    return t = ex(t), a.forEach(function (e, n) {
                        !Yb.isUndefined(e) && null !== e && o.append(true === l ? ox([t], n, i) : null === l ? t : t + '[]', s(e));
                    }), false;
                }
            }
        }
        return !!Qb(e) || (o.append(ox(r, t, i), s(e)), false);
    }
    const u = [], d = Object.assign(tx, {
            defaultVisitor: c,
            convertValue: s,
            isVisitable: Qb
        });
    if (!Yb.isObject(e)) {
        throw new TypeError('data must be an object');
    }
    return function e(t, n) {
        if (!Yb.isUndefined(t)) {
            if (-1 !== u.indexOf(t)) {
                throw Error('Circular reference detected in ' + n.join('.'));
            }
            u.push(t);
            Yb.forEach(t, function (t, i) {
                true === (!(Yb.isUndefined(t) || null === t) && r.call(o, t, Yb.isString(i) ? i.trim() : i, n, d)) && e(t, n ? n.concat(i) : [i]);
            });
            u.pop();
        }
    }(e), o;
}
function rx(e) {
    ;
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (e) {
        return o[e];
    });
}
function ix(e, o) {
    this._pairs = [];
    e && nx(e, this, o);
}
const lx = ix.prototype;
function ax(e) {
    return encodeURIComponent(e).replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
}
function sx(e, o, t) {
    if (!o) {
        return e;
    }
    const n = t && t.encode || ax, r = t && t.serialize;
    let i;
    if (i = r ? r(o, t) : Yb.isURLSearchParams(o) ? o.toString() : new ix(o, t).toString(n), i) {
        const o = e.indexOf('#');
        -1 !== o && (e = e.slice(0, o));
        e += (-1 === e.indexOf('?') ? '?' : '&') + i;
    }
    return e;
}
lx.append = function (e, o) {
    this._pairs.push([
        e,
        o
    ]);
};
lx.toString = function (e) {
    const o = e ? function (o) {
        return e.call(this, o, rx);
    } : rx;
    return this._pairs.map(function (e) {
        return o(e[0]) + '=' + o(e[1]);
    }, '').join('&');
};
const cx = class {
        constructor() {
            this.handlers = [];
        }
        use(e, o, t) {
            return this.handlers.push({
                fulfilled: e,
                rejected: o,
                synchronous: !!t && t.synchronous,
                runWhen: t ? t.runWhen : null
            }), this.handlers.length - 1;
        }
        eject(e) {
            this.handlers[e] && (this.handlers[e] = null);
        }
        clear() {
            this.handlers && (this.handlers = []);
        }
        forEach(e) {
            Yb.forEach(this.handlers, function (o) {
                null !== o && e(o);
            });
        }
    }, ux = {
        silentJSONParsing: true,
        forcedJSONParsing: true,
        clarifyTimeoutError: false
    }, dx = {
        isBrowser: true,
        classes: {
            URLSearchParams: 'undefined' != typeof URLSearchParams ? URLSearchParams : ix,
            FormData: 'undefined' != typeof FormData ? FormData : null,
            Blob: 'undefined' != typeof Blob ? Blob : null
        },
        isStandardBrowserEnv: (() => {
            let e;
            return ('undefined' == typeof navigator || 'ReactNative' !== (e = navigator.product) && 'NativeScript' !== e && 'NS' !== e) && ('undefined' != typeof window && 'undefined' != typeof document);
        })(),
        isStandardBrowserWebWorkerEnv: 'undefined' != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && 'function' == typeof self.importScripts,
        protocols: [
            'http',
            'https',
            'file',
            'blob',
            'url',
            'data'
        ]
    };
function px(e) {
    function o(e, t, n, r) {
        let i = e[r++];
        const l = Number.isFinite(+i), a = r >= e.length;
        if (i = !i && Yb.isArray(n) ? n.length : i, a) {
            return Yb.hasOwnProp(n, i) ? n[i] = [
                n[i],
                t
            ] : n[i] = t, !l;
        }
        n[i] && Yb.isObject(n[i]) || (n[i] = []);
        return o(e, t, n[i], r) && Yb.isArray(n[i]) && (n[i] = function (e) {
            const o = { i: e[i] }, t = Object.keys(e);
            let n;
            const r = t.length;
            let i;
            for (n = 0; n < r; n++) {
                i = t[n];
                ;
            }
            return o;
        }(n[i])), !l;
    }
    if (Yb.isFormData(e) && Yb.isFunction(e.entries)) {
        const t = {};
        return Yb.forEachEntry(e, (e, n) => {
            o(function (e) {
                return Yb.matchAll(/\w+|\[(\w*)]/g, e).map(e => '[]' === e[0] ? '' : e[1] || e[0]);
            }(e), n, t, 0);
        }), t;
    }
    return null;
}
const fx = { 'Content-Type': void 0 };
const hx = {
    transitional: ux,
    adapter: [
        'xhr',
        'http'
    ],
    transformRequest: [function (e, o) {
            const t = o.getContentType() || '', n = t.indexOf('application/json') > -1, r = Yb.isObject(e);
            r && Yb.isHTMLForm(e) && (e = new FormData(e));
            if (Yb.isFormData(e)) {
                return n && n ? JSON.stringify(px(e)) : e;
            }
            if (Yb.isArrayBuffer(e) || Yb.isBuffer(e) || Yb.isStream(e) || Yb.isFile(e) || Yb.isBlob(e)) {
                return e;
            }
            if (Yb.isArrayBufferView(e)) {
                return e.buffer;
            }
            if (Yb.isURLSearchParams(e)) {
                return o.setContentType('application/x-www-form-urlencoded;charset=utf-8', false), e.toString();
            }
            let i;
            if (r) {
                if (t.indexOf('application/x-www-form-urlencoded') > -1) {
                    return function (e, o) {
                        return nx(e, new dx.classes.URLSearchParams(), Object.assign({
                            visitor: function (e, o, t, n) {
                                return dx.isNode && Yb.isBuffer(e) ? (this.append(o, e.toString('base64')), false) : n.defaultVisitor.apply(this, arguments);
                            }
                        }, o));
                    }(e, this.formSerializer).toString();
                }
                if ((i = Yb.isFileList(e)) || t.indexOf('multipart/form-data') > -1) {
                    const o = this.env && this.env.FormData;
                    return nx(i ? { 'files[]': e } : e, o && new o(), this.formSerializer);
                }
            }
            return r || n ? (o.setContentType('application/json', false), function (e, o, t) {
                if (Yb.isString(e)) {
                    try {
                        return (o || JSON.parse)(e), Yb.trim(e);
                    } catch (n) {
                        if ('SyntaxError' !== n.name) {
                            throw n;
                        }
                    }
                }
                return (t || JSON.stringify)(e);
            }(e)) : e;
        }],
    transformResponse: [function (e) {
            const o = this.transitional || hx.transitional, t = o && o.forcedJSONParsing, n = 'json' === this.responseType;
            if (e && Yb.isString(e) && (t && !this.responseType || n)) {
                const t = !(o && o.silentJSONParsing) && n;
                try {
                    return JSON.parse(e);
                } catch (r) {
                    if (t) {
                        if ('SyntaxError' === r.name) {
                            throw Xb.from(r, Xb.ERR_BAD_RESPONSE, this, null, this.response);
                        }
                        throw r;
                    }
                }
            }
            return e;
        }],
    timeout: 0,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: dx.classes.FormData,
        Blob: dx.classes.Blob
    },
    validateStatus: function (e) {
        return e >= 200 && e < 300;
    },
    headers: { common: { Accept: 'application/json, text/plain, */*' } }
};
Yb.forEach([
    'delete',
    'get',
    'head'
], function (e) {
    hx.headers[e] = {};
});
Yb.forEach([
    'post',
    'put',
    'patch'
], function (e) {
    hx.headers[e] = Yb.merge(fx);
});
const mx = hx, gx = Yb.toObjectSet([
        'age',
        'authorization',
        'content-length',
        'content-type',
        'etag',
        'expires',
        'from',
        'host',
        'if-modified-since',
        'if-unmodified-since',
        'last-modified',
        'location',
        'max-forwards',
        'proxy-authorization',
        'referer',
        'retry-after',
        'user-agent'
    ]), vx = Symbol('internals');
function bx(e) {
    return e && String(e).trim().toLowerCase();
}
function xx(e) {
    return false === e || null == e ? e : Yb.isArray(e) ? e.map(xx) : String(e);
}
function Cx(e, o, t, n, r) {
    return Yb.isFunction(n) ? n.call(this, o, t) : (r && (o = t), Yb.isString(o) ? Yb.isString(n) ? -1 !== o.indexOf(n) : Yb.isRegExp(n) ? n.test(o) : void 0 : void 0);
}
class yx {
    constructor(e) {
        e && this.set(e);
    }
    set(e, o, t) {
        const n = this;
        function r(e, o, t) {
            const r = bx(o);
            if (!r) {
                throw new Error('header name must be a non-empty string');
            }
            const i = Yb.findKey(n, r);
            (!i || void 0 === n[i] || true === t || void 0 === t && false !== n[i]) && (n[i || o] = xx(e));
        }
        const i = (e, o) => Yb.forEach(e, (e, t) => r(e, t, o));
        return Yb.isPlainObject(e) || e instanceof this.constructor ? i(e, o) : Yb.isString(e) && (e = e.trim()) && !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()) ? i((e => {
            const o = {};
            let t, n, r;
            return e && e.split('\n').forEach(function (e) {
                r = e.indexOf(':');
                t = e.substring(0, r).trim().toLowerCase();
                n = e.substring(r + 1).trim();
                !t || o[t] && gx[t] || ('set-cookie' === t ? o[t] ? o[t].push(n) : o[t] = [n] : o[t] = o[t] ? o[t] + ', ' + n : n);
            }), o;
        })(e), o) : null != e && r(o, e, t), this;
    }
    get(e, o) {
        if (e = bx(e)) {
            const t = Yb.findKey(this, e);
            if (t) {
                const e = this[t];
                if (!o) {
                    return e;
                }
                if (true === o) {
                    return function (e) {
                        const o = Object.create(null), t = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                        let n;
                        for (; n = t.exec(e);) {
                            o[n[1]] = n[2];
                        }
                        return o;
                    }(e);
                }
                if (Yb.isFunction(o)) {
                    return o.call(this, e, t);
                }
                if (Yb.isRegExp(o)) {
                    return o.exec(e);
                }
                throw new TypeError('parser must be boolean|regexp|function');
            }
        }
    }
    has(e, o) {
        if (e = bx(e)) {
            const t = Yb.findKey(this, e);
            return !(!t || void 0 === this[t] || o && !Cx(0, this[t], t, o));
        }
        return false;
    }
    delete(e, o) {
        const t = this;
        let n = false;
        function r(e) {
            if (e = bx(e)) {
                const r = Yb.findKey(t, e);
                !r || o && !Cx(0, t[r], r, o) || (delete t[r], n = true);
            }
        }
        return Yb.isArray(e) ? e.forEach(r) : r(e), n;
    }
    clear(e) {
        const o = Object.keys(this);
        let t = o.length, n = false;
        for (; t--;) {
            const r = o[t];
            e && !Cx(0, this[r], r, e, true) || (delete this[r], n = true);
        }
        return n;
    }
    normalize(e) {
        const o = this, t = { l: true };
        return Yb.forEach(this, (n, r) => {
            const i = Yb.findKey(t, r);
            if (i) {
                return o[i] = xx(n), void delete o[r];
            }
            const l = e ? function (e) {
                return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, o, t) => o.toUpperCase() + t);
            }(r) : String(r).trim();
            l !== r && delete o[r];
            o[l] = xx(n);
            ;
        }), this;
    }
    concat(...e) {
        return this.constructor.concat(this, ...e);
    }
    toJSON(e) {
        const o = Object.create(null);
        return Yb.forEach(this, (t, n) => {
            null != t && false !== t && (o[n] = e && Yb.isArray(t) ? t.join(', ') : t);
        }), o;
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
        return Object.entries(this.toJSON()).map(([e, o]) => e + ': ' + o).join('\n');
    }
    get [Symbol.toStringTag]() {
        return 'AxiosHeaders';
    }
    static from(e) {
        return e instanceof this ? e : new this(e);
    }
    static concat(e, ...o) {
        const t = new this(e);
        return o.forEach(e => t.set(e)), t;
    }
    static accessor(e) {
        const o = (this[vx] = this[vx] = { accessors: {} }).accessors, t = this.prototype;
        function n(e) {
            const n = bx(e);
            o[n] || (!function (e, o) {
                const t = Yb.toCamelCase(' ' + o);
                [
                    'get',
                    'set',
                    'has'
                ].forEach(n => {
                    Object.defineProperty(e, n + t, {
                        value: function (e, t, r) {
                            return this[n].call(this, o, e, t, r);
                        },
                        configurable: true
                    });
                });
            }(t, e), o[n] = true);
        }
        return Yb.isArray(e) ? e.forEach(n) : n(e), this;
    }
}
yx.accessor([
    'Content-Type',
    'Content-Length',
    'Accept',
    'Accept-Encoding',
    'User-Agent',
    'Authorization'
]);
Yb.freezeMethods(yx.prototype);
Yb.freezeMethods(yx);
const Sx = yx;
function wx(e, o) {
    const t = this || mx, n = o || t, r = Sx.from(n.headers);
    let i = n.data;
    return Yb.forEach(e, function (e) {
        i = e.call(t, i, r.normalize(), o ? o.status : void 0);
    }), r.normalize(), i;
}
function _x(e) {
    return !(!e || !e.__CANCEL__);
}
function zx(e, o, t) {
    Xb.call(this, null == e ? 'canceled' : e, Xb.ERR_CANCELED, o, t);
    this.name = 'CanceledError';
}
Yb.inherits(zx, Xb, { __CANCEL__: true });
const Tx = dx.isStandardBrowserEnv ? {
    write: function (e, o, t, n, r, i) {
        const l = [];
        l.push(e + '=' + encodeURIComponent(o));
        Yb.isNumber(t) && l.push('expires=' + new Date(t).toGMTString());
        Yb.isString(n) && l.push('path=' + n);
        Yb.isString(r) && l.push('domain=' + r);
        true === i && l.push('secure');
        document.cookie = l.join('; ');
    },
    read: function (e) {
        const o = document.cookie.match(new RegExp('(^|;\\s*)(' + e + ')=([^;]*)'));
        return o ? decodeURIComponent(o[3]) : null;
    },
    remove: function (e) {
        this.write(e, '', Date.now() - 86400000);
    }
} : {
    write: function () {
    },
    read: function () {
        return null;
    },
    remove: function () {
    }
};
function Px(e, o) {
    return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(o) ? function (e, o) {
        return o ? e.replace(/\/+$/, '') + '/' + o.replace(/^\/+/, '') : e;
    }(e, o) : o;
}
const Ex = dx.isStandardBrowserEnv ? function () {
    const e = /(msie|trident)/i.test(navigator.userAgent), o = document.createElement('a');
    let t;
    function n(t) {
        let n = t;
        return e && (o.setAttribute('href', n), n = o.href), o.setAttribute('href', n), {
            href: o.href,
            protocol: o.protocol ? o.protocol.replace(/:$/, '') : '',
            host: o.host,
            search: o.search ? o.search.replace(/^\?/, '') : '',
            hash: o.hash ? o.hash.replace(/^#/, '') : '',
            hostname: o.hostname,
            port: o.port,
            pathname: '/' === o.pathname.charAt(0) ? o.pathname : '/' + o.pathname
        };
    }
    return t = n(window.location.href), function (e) {
        const o = Yb.isString(e) ? n(e) : e;
        return o.protocol === t.protocol && o.host === t.host;
    };
}() : function () {
    return true;
};
function kx(e, o) {
    let t = 0;
    const n = function (e, o) {
        e = e || 10;
        const t = new Array(e), n = new Array(e);
        let r, i = 0, l = 0;
        return o = void 0 !== o ? o : 1000, function (a) {
            const s = Date.now(), c = n[l];
            r || (r = s);
            t[i] = a;
            n[i] = s;
            let u = l, d = 0;
            for (; u !== i;) {
                d += t[u++];
                u %= e;
            }
            if (i = (i + 1) % e, i === l && (l = (l + 1) % e), s - r < o) {
                return;
            }
            const p = c && s - c;
            return p ? Math.round(1000 * d / p) : void 0;
        };
    }(50, 250);
    return r => {
        const i = r.loaded, l = r.lengthComputable ? r.total : void 0, a = i - t, s = n(a);
        t = i;
        const c = {
            loaded: i,
            total: l,
            progress: l ? i / l : void 0,
            bytes: a,
            rate: s || void 0,
            estimated: s && l && i <= l ? (l - i) / s : void 0,
            event: r
        };
        c[o ? 'download' : 'upload'] = true;
        e(c);
    };
}
const Rx = {
    http: null,
    xhr: 'undefined' != typeof XMLHttpRequest && function (e) {
        return new Promise(function (o, t) {
            let n = e.data;
            const r = Sx.from(e.headers).normalize(), i = e.responseType;
            let l;
            function a() {
                e.cancelToken && e.cancelToken.unsubscribe(l);
                e.signal && e.signal.removeEventListener('abort', l);
            }
            Yb.isFormData(n) && (dx.isStandardBrowserEnv || dx.isStandardBrowserWebWorkerEnv) && r.setContentType(false);
            let s = new XMLHttpRequest();
            if (e.auth) {
                const o = e.auth.username || '', t = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : '';
                r.set('Authorization', 'Basic ' + btoa(o + ':' + t));
            }
            const c = Px(e.baseURL, e.url);
            function u() {
                if (!s) {
                    return;
                }
                const n = Sx.from('getAllResponseHeaders' in s && s.getAllResponseHeaders());
                !function (e, o, t) {
                    const n = t.config.validateStatus;
                    t.status && n && !n(t.status) ? o(new Xb('Request failed with status code ' + t.status, [
                        Xb.ERR_BAD_REQUEST,
                        Xb.ERR_BAD_RESPONSE
                    ][Math.floor(t.status / 100) - 4], t.config, t.request, t)) : e(t);
                }(function (e) {
                    o(e);
                    a();
                }, function (e) {
                    t(e);
                    a();
                }, {
                    data: i && 'text' !== i && 'json' !== i ? s.response : s.responseText,
                    status: s.status,
                    statusText: s.statusText,
                    headers: n,
                    config: e,
                    request: s
                });
                s = null;
            }
            if (s.open(e.method.toUpperCase(), sx(c, e.params, e.paramsSerializer), true), s.timeout = e.timeout, 'onloadend' in s ? s.onloadend = u : s.onreadystatechange = function () {
                    s && 4 === s.readyState && (0 !== s.status || s.responseURL && 0 === s.responseURL.indexOf('file:')) && setTimeout(u);
                }, s.onabort = function () {
                    s && (t(new Xb('Request aborted', Xb.ECONNABORTED, e, s)), s = null);
                }, s.onerror = function () {
                    t(new Xb('Network Error', Xb.ERR_NETWORK, e, s));
                    s = null;
                }, s.ontimeout = function () {
                    let o = e.timeout ? 'timeout of ' + e.timeout + 'ms exceeded' : 'timeout exceeded';
                    const n = e.transitional || ux;
                    e.timeoutErrorMessage && (o = e.timeoutErrorMessage);
                    t(new Xb(o, n.clarifyTimeoutError ? Xb.ETIMEDOUT : Xb.ECONNABORTED, e, s));
                    s = null;
                }, dx.isStandardBrowserEnv) {
                const o = (e.withCredentials || Ex(c)) && e.xsrfCookieName && Tx.read(e.xsrfCookieName);
                o && r.set(e.xsrfHeaderName, o);
            }
            void 0 === n && r.setContentType(null);
            'setRequestHeader' in s && Yb.forEach(r.toJSON(), function (e, o) {
                s.setRequestHeader(o, e);
            });
            Yb.isUndefined(e.withCredentials) || (s.withCredentials = !!e.withCredentials);
            i && 'json' !== i && (s.responseType = e.responseType);
            'function' == typeof e.onDownloadProgress && s.addEventListener('progress', kx(e.onDownloadProgress, true));
            'function' == typeof e.onUploadProgress && s.upload && s.upload.addEventListener('progress', kx(e.onUploadProgress));
            (e.cancelToken || e.signal) && (l = o => {
                s && (t(!o || o.type ? new zx(null, e, s) : o), s.abort(), s = null);
            }, e.cancelToken && e.cancelToken.subscribe(l), e.signal && (e.signal.aborted ? l() : e.signal.addEventListener('abort', l)));
            const d = function (e) {
                const o = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
                return o && o[1] || '';
            }(c);
            d && -1 === dx.protocols.indexOf(d) ? t(new Xb('Unsupported protocol ' + d + ':', Xb.ERR_BAD_REQUEST, e)) : s.send(n || null);
        });
    }
};
Yb.forEach(Rx, (e, o) => {
    if (e) {
        try {
            Object.defineProperty(e, 'name', { value: o });
        } catch (t) {
        }
        Object.defineProperty(e, 'adapterName', { value: o });
    }
});
const Lx = e => {
    e = Yb.isArray(e) ? e : [e];
    const {length: o} = e;
    let t, n;
    for (let r = 0; r < o && (t = e[r], !(n = Yb.isString(t) ? Rx[t.toLowerCase()] : t)); r++) {
        ;
    }
    if (!n) {
        if (false === n) {
            throw new Xb(`Adapter ${ t } is not supported by the environment`, 'ERR_NOT_SUPPORT');
        }
        throw new Error(Yb.hasOwnProp(Rx, t) ? `Adapter '${ t }' is not available in the build` : `Unknown adapter '${ t }'`);
    }
    if (!Yb.isFunction(n)) {
        throw new TypeError('adapter is not a function');
    }
    return n;
};
function Ox(e) {
    if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) {
        throw new zx(null, e);
    }
}
function Ax(e) {
    Ox(e);
    e.headers = Sx.from(e.headers);
    e.data = wx.call(e, e.transformRequest);
    -1 !== [
        'post',
        'put',
        'patch'
    ].indexOf(e.method) && e.headers.setContentType('application/x-www-form-urlencoded', false);
    return Lx(e.adapter || mx.adapter)(e).then(function (o) {
        return Ox(e), o.data = wx.call(e, e.transformResponse, o), o.headers = Sx.from(o.headers), o;
    }, function (o) {
        return _x(o) || (Ox(e), o && o.response && (o.response.data = wx.call(e, e.transformResponse, o.response), o.response.headers = Sx.from(o.response.headers))), Promise.reject(o);
    });
}
const Ix = e => e instanceof Sx ? e.toJSON() : e;
function $x(e, o) {
    o = o || {};
    const t = {};
    function n(e, o, t) {
        return Yb.isPlainObject(e) && Yb.isPlainObject(o) ? Yb.merge.call({ caseless: t }, e, o) : Yb.isPlainObject(o) ? Yb.merge({}, o) : Yb.isArray(o) ? o.slice() : o;
    }
    function r(e, o, t) {
        return Yb.isUndefined(o) ? Yb.isUndefined(e) ? void 0 : n(void 0, e, t) : n(e, o, t);
    }
    function i(e, o) {
        if (!Yb.isUndefined(o)) {
            return n(void 0, o);
        }
    }
    function l(e, o) {
        return Yb.isUndefined(o) ? Yb.isUndefined(e) ? void 0 : n(void 0, e) : n(void 0, o);
    }
    function a(t, r, i) {
        return i in o ? n(t, r) : i in e ? n(void 0, t) : void 0;
    }
    const s = {
        url: i,
        method: i,
        data: i,
        baseURL: l,
        transformRequest: l,
        transformResponse: l,
        paramsSerializer: l,
        timeout: l,
        timeoutMessage: l,
        withCredentials: l,
        adapter: l,
        responseType: l,
        xsrfCookieName: l,
        xsrfHeaderName: l,
        onUploadProgress: l,
        onDownloadProgress: l,
        decompress: l,
        maxContentLength: l,
        maxBodyLength: l,
        beforeRedirect: l,
        transport: l,
        httpAgent: l,
        httpsAgent: l,
        cancelToken: l,
        socketPath: l,
        responseEncoding: l,
        validateStatus: a,
        headers: (e, o) => r(Ix(e), Ix(o), true)
    };
    return Yb.forEach(Object.keys(e).concat(Object.keys(o)), function (n) {
        const i = s[n] || r, l = i(e[n], o[n], n);
        Yb.isUndefined(l) && i !== a || (t[n] = l);
    }), t;
}
const Mx = '1.3.5', Hx = {};
[
    'object',
    'boolean',
    'number',
    'function',
    'string',
    'symbol'
].forEach((e, o) => {
    Hx[e] = function (t) {
        return typeof t === e || 'a' + (o < 1 ? 'n ' : ' ') + e;
    };
});
const Fx = {};
Hx.transitional = function (e, o, t) {
    return (n, r, i) => {
        if (false === e) {
            throw new Xb(function (e, o) {
                return '[Axios v1.3.5] Transitional option \'' + e + '\'' + o + (t ? '. ' + t : '');
            }(r, ' has been removed' + (o ? ' in ' + o : '')), Xb.ERR_DEPRECATED);
        }
        return o && !Fx[r] && (Fx[r] = true), !e || e(n, r, i);
    };
};
const Bx = {
        assertOptions: function (e, o, t) {
            if ('object' != typeof e) {
                throw new Xb('options must be an object', Xb.ERR_BAD_OPTION_VALUE);
            }
            const n = Object.keys(e);
            let r = n.length;
            for (; r-- > 0;) {
                const i = n[r], l = o[i];
                if (l) {
                    const o = e[i], t = void 0 === o || l(o, i, e);
                    if (true !== t) {
                        throw new Xb('option ' + i + ' must be ' + t, Xb.ERR_BAD_OPTION_VALUE);
                    }
                } else {
                    if (true !== t) {
                        throw new Xb('Unknown option ' + i, Xb.ERR_BAD_OPTION);
                    }
                }
            }
        },
        validators: Hx
    }, Dx = Bx.validators;
class jx {
    constructor(e) {
        this.defaults = e;
        this.interceptors = {
            request: new cx(),
            response: new cx()
        };
    }
    request(e, o) {
        'string' == typeof e ? (o = o || {}).url = e : o = e || {};
        o = $x(this.defaults, o);
        const {
            transitional: t,
            paramsSerializer: n,
            headers: r
        } = o;
        let i;
        void 0 !== t && Bx.assertOptions(t, {
            silentJSONParsing: Dx.transitional(Dx.boolean),
            forcedJSONParsing: Dx.transitional(Dx.boolean),
            clarifyTimeoutError: Dx.transitional(Dx.boolean)
        }, false);
        null != n && (Yb.isFunction(n) ? o.paramsSerializer = { serialize: n } : Bx.assertOptions(n, {
            encode: Dx.function,
            serialize: Dx.function
        }, true));
        o.method = (o.method || this.defaults.method || 'get').toLowerCase();
        i = r && Yb.merge(r.common, r[o.method]);
        i && Yb.forEach([
            'delete',
            'get',
            'head',
            'post',
            'put',
            'patch',
            'common'
        ], e => {
            delete r[e];
        });
        o.headers = Sx.concat(i, r);
        const l = [];
        let a = true;
        this.interceptors.request.forEach(function (e) {
            'function' == typeof e.runWhen && false === e.runWhen(o) || (a = a && e.synchronous, l.unshift(e.fulfilled, e.rejected));
        });
        const s = [];
        let c;
        this.interceptors.response.forEach(function (e) {
            s.push(e.fulfilled, e.rejected);
        });
        let u, d = 0;
        if (!a) {
            const e = [
                Ax.bind(this),
                void 0
            ];
            for (e.unshift.apply(e, l), e.push.apply(e, s), u = e.length, c = Promise.resolve(o); d < u;) {
                c = c.then(e[d++], e[d++]);
            }
            return c;
        }
        u = l.length;
        let p = o;
        for (d = 0; d < u;) {
            const e = l[d++], o = l[d++];
            try {
                p = e(p);
            } catch (f) {
                o.call(this, f);
                break;
            }
        }
        try {
            c = Ax.call(this, p);
        } catch (f) {
            return Promise.reject(f);
        }
        for (d = 0, u = s.length; d < u;) {
            c = c.then(s[d++], s[d++]);
        }
        return c;
    }
    getUri(e) {
        return sx(Px((e = $x(this.defaults, e)).baseURL, e.url), e.params, e.paramsSerializer);
    }
}
Yb.forEach([
    'delete',
    'get',
    'head',
    'options'
], function (e) {
    jx.prototype[e] = function (o, t) {
        return this.request($x(t || {}, {
            method: e,
            url: o,
            data: (t || {}).data
        }));
    };
});
Yb.forEach([
    'post',
    'put',
    'patch'
], function (e) {
    function o(o) {
        return function (t, n, r) {
            return this.request($x(r || {}, {
                method: e,
                headers: o ? { 'Content-Type': 'multipart/form-data' } : {},
                url: t,
                data: n
            }));
        };
    }
    jx.prototype[e] = o();
    jx.prototype[e + 'Form'] = o(true);
});
const Nx = jx;
class Wx {
    constructor(e) {
        if ('function' != typeof e) {
            throw new TypeError('executor must be a function.');
        }
        let o;
        this.promise = new Promise(function (e) {
            o = e;
        });
        const t = this;
        this.promise.then(e => {
            if (!t._listeners) {
                return;
            }
            let o = t._listeners.length;
            for (; o-- > 0;) {
                t._listeners[o](e);
            }
            t._listeners = null;
        });
        this.promise.then = e => {
            let o;
            const n = new Promise(e => {
                t.subscribe(e);
                o = e;
            }).then(e);
            return n.cancel = function () {
                t.unsubscribe(o);
            }, n;
        };
        e(function (e, n, r) {
            t.reason || (t.reason = new zx(e, n, r), o(t.reason));
        });
    }
    throwIfRequested() {
        if (this.reason) {
            throw this.reason;
        }
    }
    subscribe(e) {
        this.reason ? e(this.reason) : this._listeners ? this._listeners.push(e) : this._listeners = [e];
    }
    unsubscribe(e) {
        if (!this._listeners) {
            return;
        }
        const o = this._listeners.indexOf(e);
        -1 !== o && this._listeners.splice(o, 1);
    }
    static source() {
        let e;
        return {
            token: new Wx(function (o) {
                e = o;
            }),
            cancel: e
        };
    }
}
const Ux = Wx;
const Vx = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries(Vx).forEach(([e, o]) => {
    Vx[o] = e;
});
const Gx = Vx;
const qx = function e(o) {
    const t = new Nx(o), n = gb(Nx.prototype.request, t);
    return Yb.extend(n, Nx.prototype, t, { allOwnKeys: true }), Yb.extend(n, t, null, { allOwnKeys: true }), n.create = function (t) {
        return e($x(o, t));
    }, n;
}(mx);
qx.Axios = Nx;
qx.CanceledError = zx;
qx.CancelToken = Ux;
qx.isCancel = _x;
qx.VERSION = Mx;
qx.toFormData = nx;
qx.AxiosError = Xb;
qx.Cancel = qx.CanceledError;
qx.all = function (e) {
    return Promise.all(e);
};
qx.spread = function (e) {
    return function (o) {
        return e.apply(null, o);
    };
};
qx.isAxiosError = function (e) {
    return Yb.isObject(e) && true === e.isAxiosError;
};
qx.mergeConfig = $x;
qx.AxiosHeaders = Sx;
qx.formToJSON = e => px(Yb.isHTMLForm(e) ? new FormData(e) : e);
qx.HttpStatusCode = Gx;
qx.default = qx;
const Kx = qx;
var Yx = (e => (e[e.showTask = 1] = 'showTask', e[e.showTray = 2] = 'showTray', e[e.showTaskAndTray = 3] = 'showTaskAndTray', e))(Yx || {}), Xx = (e => (e[e.minimize = 1] = 'minimize', e[e.quit = 2] = 'quit', e))(Xx || {});
let Jx;
Jx = [
    {
        id: 3,
        serveUrl: 'https://api6.lookworld88.com',
        name: '服务器专线1',
        key: 'Overseas Server 2',
        isOver: 1
    },
    {
        id: 2,
        serveUrl: 'https://api5.lookworld88.com',
        name: '海外服务器',
        key: 'Overseas Server 1',
        isOver: 1
    },
    {
        id: 10,
        serveUrl: 'https://api16.lookworld88.com',
        name: '香港服务器',
        key: 'Overseas Server 4',
        isOver: 1
    },
    {
        id: 4,
        serveUrl: 'https://api7.lookworld88.com',
        name: '服务器专线2',
        key: 'Overseas Server 3',
        isOver: 1
    },
    {
        id: 1,
        serveUrl: 'https://api4.lookworld88.com',
        name: '国内服务器',
        key: 'Domestic Server',
        isOver: 0
    }
];
const Zx = Jx, Qx = [
        {
            label: '简体中文',
            locale: 'zh-CN'
        },
        {
            label: 'English',
            locale: 'en-US'
        }
    ], eC = [
        {
            value: Yx.showTask,
            label: '在任务栏中显示',
            key: 'Show in taskbar'
        },
        {
            value: Yx.showTray,
            label: '在系统托盘中显示',
            key: 'Show in system tray'
        },
        {
            value: Yx.showTaskAndTray,
            label: '在任务栏和系统托盘中显示',
            key: 'Show in taskbar and system tray'
        }
    ], oC = [
        {
            value: Xx.minimize,
            label: '最小化系统',
            key: 'Minimize the system'
        },
        {
            value: Xx.quit,
            label: '退出系统',
            key: 'Exit system'
        }
    ], tC = [
        'whatsapp',
        'telegram-new',
        'google-voice',
        'textnow'
    ], {electron: nC} = lb(), rC = Zx.map(e => e.serveUrl), iC = Kx.create({
        baseURL: '',
        timeout: 20000,
        validateStatus: () => true
    }), lC = (e = {}) => {
        const o = {};
        Object.entries(e).forEach(([e, t]) => {
            '' !== t && (o[e] = t);
        });
        const t = new URLSearchParams(o);
        return t ? `?${ t }` : '';
    };
function aC(e) {
    const {
        config: {
            baseURL: o,
            data: t,
            headers: {'access-auth-token': n},
            url: r
        },
        data: i
    } = e;
    return {
        type: 'http',
        message: {
            id: n,
            configData: t,
            url: o + r,
            data: i
        }
    };
}
iC.interceptors.request.use(e => {
    const o = mb.get(sb.TOKEN);
    o && e.headers && (e.headers['access-auth-token'] = o);
    let t = mb.get(sb.SERVER_URL) || '';
    return rC.includes(t) ? e.baseURL = t : e.baseURL = Zx[0].serveUrl, e;
}, e => Promise.reject(e));
iC.interceptors.response.use(e => {
    const {
        status: o,
        error: t,
        code: n
    } = e.data;
    return o ? (nC.sendLog(aC(e)), Promise.reject({
        code: o,
        error: t
    })) : (0 !== n && nC.sendLog(aC(e)), e.data);
}, e => {
    const {
        config: {
            baseURL: o,
            data: t,
            headers: {'access-auth-token': n},
            url: r
        },
        data: i,
        code: l,
        stack: a
    } = e;
    let s;
    for (nC.sendLog({
            type: 'http',
            message: {
                id: n,
                configData: t,
                url: o + r,
                data: i,
                stack: a,
                code: l
            }
        }); rC.length > 1;) {
        if (s = rC[Math.floor(Math.random() * rC.length)], s !== o) {
            mb.set(sb.SERVER_URL, s);
            break;
        }
    }
    return Promise.reject(e);
});
let sC;
const cC = e => sC = e, uC = Symbol();
function dC(e) {
    return e && 'object' == typeof e && '[object Object]' === Object.prototype.toString.call(e) && 'function' != typeof e.toJSON;
}
var pC, fC;
(fC = pC || (pC = {})).direct = 'direct';
fC.patchObject = 'patch object';
fC.patchFunction = 'patch function';
const hC = () => {
};
function mC(e, o, t, n = hC) {
    e.push(o);
    const r = () => {
        const t = e.indexOf(o);
        t > -1 && (e.splice(t, 1), n());
    };
    var i;
    return !t && Z() && (i = r, Y && Y.cleanups.push(i)), r;
}
function gC(e, ...o) {
    e.slice().forEach(e => {
        e(...o);
    });
}
function vC(e, o) {
    e instanceof Map && o instanceof Map && o.forEach((o, t) => e.set(t, o));
    e instanceof Set && o instanceof Set && o.forEach(e.add, e);
    for (const t in o) {
        if (!o.hasOwnProperty(t)) {
            continue;
        }
        const n = o[t], r = e[t];
        dC(r) && dC(n) && e.hasOwnProperty(t) && !bo(n) && !ao(n) ? e[t] = vC(r, n) : e[t] = n;
    }
    return e;
}
const bC = Symbol();
const {assign: xC} = Object;
function CC(e, o, t, n) {
    const {
            state: r,
            actions: i,
            getters: l
        } = o, a = t.state.value[e];
    let s;
    return s = yC(e, function () {
        a || (t.state.value[e] = r ? r() : {});
        const o = function (e) {
            const o = y(e) ? new Array(e.length) : {};
            for (const t in e)
                o[t] = Po(e, t);
            return o;
        }(t.state.value[e]);
        return xC(o, i, Object.keys(l || {}).reduce((o, n) => (o[n] = fo(Er(() => {
            cC(t);
            const o = t._s.get(e);
            return l[n].call(o, o);
        })), o), {}));
    }, o, t, n, true), s;
}
function yC(e, o, t = {}, n, r, i) {
    let l;
    const a = xC({ actions: {} }, t);
    let c, u, d, p = fo([]), f = fo([]);
    const h = n.state.value[e];
    let m;
    function g(o) {
        let t;
        c = u = false;
        'function' == typeof o ? (o(n.state.value[e]), t = {
            type: pC.patchFunction,
            storeId: e,
            events: d
        }) : (vC(n.state.value[e], o), t = {
            type: pC.patchObject,
            payload: o,
            storeId: e,
            events: d
        });
        const r = m = Symbol();
        Wo().then(() => {
            m === r && (c = true);
        });
        u = true;
        gC(p, t, n.state.value[e]);
    }
    i || h || (n.state.value[e] = {});
    xo({});
    const v = i ? function () {
        const {state: e} = t, o = e ? e() : {};
        this.$patch(e => {
            xC(e, o);
        });
    } : hC;
    function b(o, t) {
        return function () {
            cC(n);
            const r = Array.from(arguments), i = [], l = [];
            let a;
            gC(f, {
                args: r,
                name: o,
                store: x,
                after: function (e) {
                    i.push(e);
                },
                onError: function (e) {
                    l.push(e);
                }
            });
            try {
                a = t.apply(this && this.$id === e ? this : x, r);
            } catch (s) {
                throw gC(l, s), s;
            }
            return a instanceof Promise ? a.then(e => (gC(i, e), e)).catch(e => (gC(l, e), Promise.reject(e))) : (gC(i, a), a);
        };
    }
    const x = ro({
        _p: n,
        $id: e,
        $onAction: mC.bind(null, f),
        $patch: g,
        $reset: v,
        $subscribe(o, t = {}) {
            const r = mC(p, o, t.detached, () => i()), i = l.run(() => pt(() => n.state.value[e], n => {
                    ('sync' === t.flush ? u : c) && o({
                        storeId: e,
                        type: pC.direct,
                        events: d
                    }, n);
                }, xC({}, s, t)));
            return r;
        },
        $dispose: function () {
            l.stop();
            p = [];
            f = [];
            n._s.delete(e);
        }
    });
    n._s.set(e, x);
    const C = n._e.run(() => (l = J(), l.run(() => o())));
    for (const w in C) {
        const o = C[w];
        if (bo(o) && (!bo(S = o) || !S.effect) || ao(o)) {
            i || (!h || dC(y = o) && y.hasOwnProperty(bC) || (bo(o) ? o.value = h[w] : vC(o, h[w])), n.state.value[e][w] = o);
        } else {
            if ('function' == typeof o) {
                const e = b(w, o);
                C[w] = e;
                a.actions[w] = o;
            }
        }
    }
    var y, S;
    return xC(x, C), xC(po(x), C), Object.defineProperty(x, '$state', {
        get: () => n.state.value[e],
        set: e => {
            g(o => {
                xC(o, e);
            });
        }
    }), n._p.forEach(e => {
        xC(x, l.run(() => e({
            store: x,
            app: n._a,
            pinia: n,
            options: a
        })));
    }), h && i && t.hydrate && t.hydrate(x.$state, h), c = true, u = true, x;
}
function SC(e, o, t) {
    let n, r;
    const i = 'function' == typeof o;
    function l(e, t) {
        const l = xr();
        (e = e || l && ct(uC, null)) && cC(e);
        (e = sC)._s.has(n) || (i ? yC(n, o, r, e) : CC(n, r, e));
        return e._s.get(n);
    }
    return 'string' == typeof e ? (n = e, r = i ? t : o) : (r = e, n = e.id), l.$id = n, l;
}
function wC(e) {
    {
        e = po(e);
        const o = {};
        for (const t in e) {
            const n = e[t];
            (bo(n) || ao(n)) && (o[t] = Po(e, t));
        }
        return o;
    }
}
const _C = SC(ab.USER, {
    state: () => ({
        userInfo: mb.get(sb.USER_INFO, {}),
        openDisturb: mb.get(sb.OPEN_DISTURB, false),
        isLock: mb.get(sb.IS_LOCK, false)
    }),
    getters: {
        userId: e => e.userInfo.id,
        vipType: e => e.userInfo.vipType,
        isGoogle: e => e.userInfo.vipType === cb.GOOGLE,
        isYoudao: e => [
            cb.YOUDAO,
            cb.YOUDAO_T
        ].includes(e.userInfo.vipType),
        isDeepl: e => e.userInfo.vipType === cb.DEEPL,
        isOversea: e => [
            cb.DEEPL,
            cb.GOOGLE
        ].includes(e.userInfo.vipType)
    },
    actions: {
        setUserInfo(e) {
            this.userInfo = e;
            mb.set(sb.USER_INFO, e);
        },
        refreshUser() {
            const e = kC();
            this.userInfo = mb.get(sb.USER_INFO, {});
            this.openDisturb = mb.get(e[sb.OPEN_DISTURB], false);
            this.isLock = mb.get(e[sb.IS_LOCK], false);
        },
        setDisturb(e) {
            this.openDisturb = e;
            mb.set(sb.OPEN_DISTURB, e);
        },
        setLock(e) {
            this.isLock = e;
            mb.set(sb.IS_LOCK, e);
        }
    }
});
function zC(e) {
    const o = Object.prototype.toString.call(e).slice(8, -1).toLowerCase();
    return 'string' === o || 'array' === o ? 0 === e.length : 'object' === o ? 0 === Object.keys(e).length : 'number' === o ? 0 === e : !e;
}
const TC = [
    {
        name: 'WhatsApp',
        type: 'whatsapp',
        logo: 'whatsapp.png',
        url: 'https://web.whatsapp.com/',
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
        description: 'WhatsApp 是一款适用于 iPhone\u3001黑莓\u3001Android\u3001Windows Phone 和诺基亚的跨平台移动消息应用程序\u3002 免费发送文字\u3001视频\u3001图片\u3001音频.'
    },
    {
        name: 'TelegramZ',
        type: 'telegram-new',
        logo: 'telegram.png',
        url: 'https://web.telegram.org/z',
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
        description: 'Telegram 是一款专注于速度和安全性的消息应用程序\u3002 它超快速\u3001简单\u3001安全且免费.'
    },
    {
        name: 'Line',
        type: 'line',
        logo: 'line.png',
        url: 'chrome-extension://ophjlpahpchlmihnnnihgmmeilfjmjjc/index.html',
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
        description: ''
    },
    {
        name: 'Facebook',
        type: 'facebook',
        logo: 'facebook.png',
        url: 'https://www.facebook.com/messages',
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
        description: '创建帐户或登录 Facebook\u3002 与朋友\u3001家人和其他您认识的人联系\u3002 分享照片和视频\u3001发送消息并获取更新.'
    },
    {
        name: 'Instagram',
        type: 'instagram',
        logo: 'instagram.png',
        url: 'https://www.instagram.com/direct/inbox/',
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
        description: '一种简单\u3001有趣且富有创意的方式来捕捉\u3001编辑和与朋友和家人分享照片\u3001视频和消息.'
    },
    {
        name: 'Twitter',
        type: 'twitter',
        logo: 'twitter.png',
        url: 'https://twitter.com/messages/',
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
        description: 'Twitter 是用于管理 Twitter 帐户的社交媒体仪表板应用程序.'
    },
    {
        name: 'Messenger',
        type: 'messenger',
        logo: 'messenger.png',
        url: 'https://www.messenger.com/login/',
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
        description: '立即免费接触您生活中的人\u3002 Messenger 就像发短信一样\uFF0C但您不必为每条消息付费.'
    },
    {
        name: 'Zalo',
        type: 'zalo',
        logo: 'zalo.png',
        url: 'https://chat.zalo.me',
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
        description: ''
    },
    {
        name: 'Tinder',
        type: 'tinder',
        logo: 'tinder.png',
        url: 'chrome-extension://cfohepagpmnodfdmjliccbbigdkfcgia/options.html',
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
        description: ''
    },
    {
        name: 'Tiktok',
        type: 'tiktok',
        logo: 'tiktok.png',
        url: 'https://www.tiktok.com/messages',
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
        description: '抖音需要VPN切换到美国节点否则无法发送消息.'
    },
    {
        name: 'Skype',
        type: 'skype',
        logo: 'skype.png',
        url: 'https://web.skype.com',
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
        description: ''
    },
    {
        name: 'GoogleVoice',
        type: 'google-voice',
        logo: 'google-voice.png',
        url: 'https://voice.google.com/',
        userAgent: '',
        description: ''
    },
    {
        name: 'TextNow',
        type: 'textnow',
        logo: 'textnow.png',
        url: 'https://www.textnow.com/login',
        userAgent: '',
        description: ''
    },
    {
        name: 'Phound',
        type: 'phound',
        logo: 'phound.png',
        url: 'https://web.phound.app/team-chat',
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36',
        description: '.'
    },
    {
        name: 'Bumble',
        type: 'bumble',
        logo: 'bumble.png',
        url: 'https://bumble.com/get-started',
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36',
        description: ''
    }
];
let PC = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((e, o) => e += (o &= 63) < 36 ? o.toString(36) : o < 62 ? (o - 26).toString(36).toUpperCase() : o > 62 ? '-' : '_', '');
const EC = (e, o = '-') => e.join(o).replace(/\s+/g, '-'), kC = SC(ab.KEY, {
        state: () => {
            const e = _C().userId;
            return {
                userId: e,
                CURRENT_APP_ID: EC([
                    sb.CURRENT_APP_ID,
                    e
                ]),
                CURRENT_APP: EC([
                    sb.CURRENT_APP,
                    e
                ]),
                CURRENT_MENU_TYPE: EC([
                    sb.CURRENT_MENU_TYPE,
                    e
                ]),
                APP_LIST: EC([
                    sb.APP_LIST,
                    e
                ]),
                CHAT_APP_LIST: EC([
                    sb.CHAT_APP_LIST,
                    e
                ]),
                SAME_CHAT_SHARE_CONFIG: EC([
                    sb.SAME_CHAT_SHARE_CONFIG,
                    e
                ])
            };
        },
        actions: {
            refreshKey() {
                const e = _C().userId;
                this.CURRENT_APP_ID = EC([
                    sb.CURRENT_APP_ID,
                    e
                ]);
                this.CURRENT_APP = EC([
                    sb.CURRENT_APP,
                    e
                ]);
                this.CURRENT_MENU_TYPE = EC([
                    sb.CURRENT_MENU_TYPE,
                    e
                ]);
                this.APP_LIST = EC([
                    sb.APP_LIST,
                    e
                ]);
                this.CHAT_APP_LIST = EC([
                    sb.CHAT_APP_LIST,
                    e
                ]);
                this.SAME_CHAT_SHARE_CONFIG = EC([
                    sb.SAME_CHAT_SHARE_CONFIG,
                    e
                ]);
            },
            clearApp(e = false) {
                const o = OC();
                mb.remove(this.CURRENT_APP_ID);
                mb.remove(this.CURRENT_APP);
                mb.remove(this.CURRENT_MENU_TYPE);
                mb.remove(this.CHAT_APP_LIST);
                mb.remove(this.SAME_CHAT_SHARE_CONFIG);
                !e && mb.remove(this.APP_LIST);
                o.$reset();
                e && o.refreshApp();
            },
            clearUser(e = false) {
                const o = _C();
                mb.remove(sb.USER_INFO);
                mb.remove(sb.TOKEN);
                mb.remove(sb.PASSWORD);
                mb.remove(sb.SERVER_URL);
                mb.remove(sb.OPEN_DISTURB);
                mb.remove(sb.IS_LOCK);
                o.$reset();
                e && o.refreshUser();
            },
            clearNotice() {
                AC().$reset();
            },
            clearAll() {
                const {electron: e} = lb();
                this.clearUser();
                this.clearNotice();
                this.$reset();
                e.logout();
            }
        }
    }), {electron: RC} = lb(), LC = () => {
        const e = kC(), o = mb.get(e[sb.SAME_CHAT_SHARE_CONFIG], {}), t = function () {
                const e = { o: {} };
                return TC.forEach(({name: o}) => {
                    ;
                }), e;
            }();
        for (const n in t)
            zC(o[n]) ? o[n] = t[n] : delete o[n].showName;
        return o;
    }, OC = SC(ab.APP, {
        state: () => {
            const e = kC();
            return {
                appList: mb.get(e[sb.APP_LIST], []),
                currentAppId: mb.get(e[sb.CURRENT_APP_ID], ''),
                currentApp: mb.get(e[sb.CURRENT_APP], ''),
                currentMenuType: mb.get(e[sb.CURRENT_MENU_TYPE], db.HOME),
                chatUser: mb.get(sb.CHAT_USER, ''),
                chatAppList: mb.get(e[sb.CHAT_APP_LIST], []),
                devtools: false,
                sameChatShareConfig: LC()
            };
        },
        getters: {
            getApp: e => o => {
                let t = e.appList.find(e => e.appId === o);
                if (t) {
                    return t;
                }
                for (let n of e.chatAppList)
                    if (n.key === o) {
                        return n.app;
                    }
            },
            getAppIndex: e => o => e.appList.findIndex(e => e.appId === o),
            appTypeList: e => {
                return o = e.appList.map(e => e.type), Array.from(new Set(o));
                var o;
            },
            endAppList() {
                return this.appTypeList.map(e => {
                    const o = this.appList.filter(o => o.type === e);
                    return {
                        type: e,
                        logo: o[0].logo,
                        appList: o
                    };
                });
            },
            getEndAppList() {
                return e => this.endAppList.find(o => o.type === e);
            },
            getChatApp() {
                const e = this.chatAppList.find(e => e.key === this.getChatUserKey);
                return e ? {
                    appId: e.key,
                    ...e.app
                } : this.currentApp;
            },
            getChatUserKey() {
                return zC(this.chatUser) ? '' : `${ this.currentAppId }_${ this.chatUser }`;
            },
            supportSplitChat() {
                return tC.includes(this.currentMenuType);
            },
            getSameChatShareConfig() {
                return this.sameChatShareConfig[this.currentApp.name] || {};
            },
            getRealWebViewAppId: () => (e, o) => e.map(({appId: e}) => e).find(e => 0 === o.search(e))
        },
        actions: {
            setDevtools() {
                this.devtools = !this.devtools;
            },
            setSameChatShareConfig(e, o = {}) {
                if (zC(o) || JSON.stringify(o) == JSON.stringify(this.sameChatShareConfig[e])) {
                    return;
                }
                const t = kC();
                this.sameChatShareConfig[e] = o;
                mb.set(t[sb.SAME_CHAT_SHARE_CONFIG], this.sameChatShareConfig);
                this.updateSameChatStorage(e, o);
            },
            updateSameChatStorage(e, o) {
                for (const n of this.appList)
                    ~n.appId.search(new RegExp(`^${ e }-`)) && this.editApp(n.appId, {
                        ...n,
                        ...o
                    });
                let t = false;
                for (const n of this.chatAppList)
                    ~n.key.search(new RegExp(`^${ e }-`)) && (t = true, n.app = {
                        ...n.app,
                        ...o
                    });
                if (t) {
                    const e = kC();
                    mb.set(e[sb.CHAT_APP_LIST], this.chatAppList);
                }
            },
            refreshApp() {
                const e = kC();
                this.appList = mb.get(e[sb.APP_LIST], []);
                this.currentAppId = mb.get(e[sb.CURRENT_APP_ID], '');
                this.currentApp = mb.get(e[sb.CURRENT_APP], '');
                this.currentMenuType = mb.get(e[sb.CURRENT_MENU_TYPE], db.HOME);
                this.sameChatShareConfig = LC();
            },
            addApp(e, o = false) {
                const t = kC(), n = EC([
                        e.name,
                        PC()
                    ]);
                this.appList.push({
                    appId: n,
                    ...e
                });
                mb.set(t[sb.APP_LIST], this.appList);
                o && (this.setCurrentAppId(n), this.updateCurrentApp({
                    appId: n,
                    ...e
                }));
            },
            removeApp(e) {
                const o = kC(), t = this.getAppIndex(e);
                -1 !== t && (this.appList.splice(t, 1), mb.set(o[sb.APP_LIST], this.appList));
            },
            editApp(e, o) {
                const t = kC(), n = this.getAppIndex(e);
                -1 !== n && (Object.assign(this.appList[n], o), mb.set(t[sb.APP_LIST], this.appList));
            },
            setCurrentAppId(e) {
                const o = kC();
                this.currentAppId = e;
                mb.set(o[sb.CURRENT_APP_ID], this.currentAppId);
            },
            updateCurrentApp(e) {
                const o = kC(), t = Object.assign({}, this.currentApp, e);
                this.currentApp = t;
                mb.set(o[sb.CURRENT_APP], this.currentApp);
                RC.sendLog({
                    type: 'changeCurrentChatApp',
                    message: { ...this.currentApp }
                });
                this.setCurrentAppId(t.appId);
            },
            updateAppList() {
                const e = kC();
                this.appList = mb.get(e[sb.APP_LIST], []);
            },
            setCurrentMenuType(e) {
                const o = kC();
                this.currentMenuType = e;
                mb.set(o[sb.CURRENT_MENU_TYPE], e);
            },
            updateChatAppList(e) {
                const o = kC(), t = this.getChatUserKey;
                if (this.updateShowName(e), !t) {
                    return;
                }
                const n = {
                        ...e,
                        appIdBySplitChat: t
                    }, r = this.getRealWebViewAppId(this.appList, e.appId);
                this.editApp(r, n);
                mb.set(o[sb.CURRENT_APP], n);
                const i = this.chatAppList.findIndex(e => e.key === t), l = this.chatAppList[i];
                -1 !== i ? this.chatAppList[i] = {
                    key: t,
                    app: {
                        ...l.app,
                        ...n
                    }
                } : this.chatAppList.push({
                    key: t,
                    app: n
                });
                e.showName !== this.currentApp.showName && this.chatAppList.map(o => {
                    o.app.appId === e.appId && (o.app.showName = e.showName);
                });
                mb.set(o[sb.CHAT_APP_LIST], this.chatAppList);
            },
            updateShowName(e) {
                const {
                    showName: o,
                    appId: t
                } = e;
                this.currentApp.appId === t && this.currentApp.showName !== o && this.updateCurrentApp({
                    ...this.currentApp,
                    showName: o
                });
                for (let r of this.appList)
                    if (r.appId === t && r.showName !== o) {
                        this.editApp(t, {
                            ...r,
                            showName: o
                        });
                        break;
                    }
                for (let r of this.chatAppList)
                    r.app.appId === t && r.app.showName !== o && (r.app.showName = o);
                const n = kC();
                mb.set(n[sb.CHAT_APP_LIST], this.chatAppList);
            },
            updateChatUser(e) {
                this.chatUser = e;
                mb.set(sb.CHAT_USER, e);
            },
            resetChatUser() {
                this.updateChatUser('');
            }
        }
    }), AC = SC(ab.NOTICE, {
        state: () => ({
            noticeList: [],
            availableUpdate: false,
            updateInfo: {}
        }),
        getters: {
            appNoticeNum: e => o => e.noticeList.filter(e => e.type === o).reduce((e, o) => e + o.number, 0) || 0,
            totalNoticeNum: e => e.noticeList.reduce((e, o) => e + o.number, 0) || 0
        },
        actions: {
            setNotice(e, o, t) {
                const n = this.noticeList.findIndex(e => e.appId === o);
                -1 === n ? this.noticeList.push({
                    appId: o,
                    number: t,
                    type: e
                }) : this.noticeList[n].number = t || 0;
            },
            getNotice(e) {
                const o = this.noticeList.find(o => o.appId === e);
                return (null == o ? void 0 : o.number) || 0;
            }
        }
    }), IC = SC(ab.TRANSLATE, {
        state: () => ({
            languageList: [],
            translateServeList: [],
            delayTimeList: [],
            isFetch: false,
            isFetchLoading: false,
            isLoading: true,
            isConnect: true
        }),
        getters: {},
        actions: {}
    }), $C = 'undefined' != typeof window;
const MC = Object.assign;
function HC(e, o) {
    const t = { n: BC(r) ? r.map(e) : e(r) };
    for (const n in o) {
        const r = o[n];
        ;
    }
    return t;
}
const FC = () => {
    }, BC = Array.isArray, DC = /\/$/, jC = e => e.replace(DC, '');
function NC(e, o, t = '/') {
    let n, r = {}, i = '', l = '';
    const a = o.indexOf('#');
    let s = o.indexOf('?');
    return a < s && a >= 0 && (s = -1), s > -1 && (n = o.slice(0, s), i = o.slice(s + 1, a > -1 ? a : o.length), r = e(i)), a > -1 && (n = n || o.slice(0, a), l = o.slice(a, o.length)), n = function (e, o) {
        if (e.startsWith('/')) {
            return e;
        }
        if (!e) {
            return o;
        }
        const t = o.split('/'), n = e.split('/');
        let r, i, l = t.length - 1;
        for (r = 0; r < n.length; r++) {
            if (i = n[r], '.' !== i) {
                if ('..' !== i) {
                    break;
                }
                l > 1 && l--;
            }
        }
        return t.slice(0, l).join('/') + '/' + n.slice(r - (r === n.length ? 1 : 0)).join('/');
    }(null != n ? n : o, t), {
        fullPath: n + (i && '?') + i + l,
        path: n,
        query: r,
        hash: l
    };
}
function WC(e, o) {
    return o && e.toLowerCase().startsWith(o.toLowerCase()) ? e.slice(o.length) || '/' : e;
}
function UC(e, o) {
    return (e.aliasOf || e) === (o.aliasOf || o);
}
function VC(e, o) {
    if (Object.keys(e).length !== Object.keys(o).length) {
        return false;
    }
    for (const t in e)
        if (!GC(e[t], o[t])) {
            return false;
        }
    return true;
}
function GC(e, o) {
    return BC(e) ? qC(e, o) : BC(o) ? qC(o, e) : e === o;
}
function qC(e, o) {
    return BC(o) ? e.length === o.length && e.every((e, t) => e === o[t]) : 1 === e.length && e[0] === o;
}
var KC, YC, XC, JC;
(YC = KC || (KC = {})).pop = 'pop';
YC.push = 'push';
(JC = XC || (XC = {})).back = 'back';
JC.forward = 'forward';
JC.unknown = '';
const ZC = /^[^#]+#/;
function QC(e, o) {
    return e.replace(ZC, '#') + o;
}
const ey = () => ({
    left: window.pageXOffset,
    top: window.pageYOffset
});
function oy(e) {
    let o;
    if ('el' in e) {
        const t = e.el, n = 'string' == typeof t && t.startsWith('#'), r = 'string' == typeof t ? n ? document.getElementById(t.slice(1)) : document.querySelector(t) : t;
        if (!r) {
            return;
        }
        o = function (e, o) {
            const t = document.documentElement.getBoundingClientRect(), n = e.getBoundingClientRect();
            return {
                behavior: o.behavior,
                left: n.left - t.left - (o.left || 0),
                top: n.top - t.top - (o.top || 0)
            };
        }(r, e);
    } else {
        o = e;
    }
    'scrollBehavior' in document.documentElement.style ? window.scrollTo(o) : window.scrollTo(null != o.left ? o.left : window.pageXOffset, null != o.top ? o.top : window.pageYOffset);
}
function ty(e, o) {
    return (history.state ? history.state.position - o : -1) + e;
}
const ny = new Map();
let ry = () => location.protocol + '//' + location.host;
function iy(e, o) {
    const {
            pathname: t,
            search: n,
            hash: r
        } = o, i = e.indexOf('#');
    if (i > -1) {
        let o = r.includes(e.slice(i)) ? e.slice(i).length : 1, t = r.slice(o);
        return '/' !== t[0] && (t = '/' + t), WC(t, '');
    }
    return WC(t, e) + n + r;
}
function ly(e, o, t, n = false, r = false) {
    return {
        back: e,
        current: o,
        forward: t,
        replaced: n,
        position: window.history.length,
        scroll: r ? ey() : null
    };
}
function ay(e) {
    const o = function (e) {
            const {
                    history: o,
                    location: t
                } = window, n = { value: iy(e, t) }, r = { value: o.state };
            function i(n, i, l) {
                const a = e.indexOf('#'), s = a > -1 ? (t.host && document.querySelector('base') ? e : e.slice(a)) + n : ry() + e + n;
                try {
                    o[l ? 'replaceState' : 'pushState'](i, '', s);
                    r.value = i;
                } catch (c) {
                    t[l ? 'replace' : 'assign'](s);
                }
            }
            return r.value || i(n.value, {
                back: null,
                current: n.value,
                forward: null,
                position: o.length - 1,
                replaced: true,
                scroll: null
            }, true), {
                location: n,
                state: r,
                push: function (e, t) {
                    const l = MC({}, r.value, o.state, {
                        forward: e,
                        scroll: ey()
                    });
                    i(l.current, l, true);
                    i(e, MC({}, ly(n.value, e, null), { position: l.position + 1 }, t), false);
                    n.value = e;
                },
                replace: function (e, t) {
                    i(e, MC({}, o.state, ly(r.value.back, e, r.value.forward, true), t, { position: r.value.position }), true);
                    n.value = e;
                }
            };
        }(e = function (e) {
            if (!e) {
                if ($C) {
                    const o = document.querySelector('base');
                    e = (e = o && o.getAttribute('href') || '/').replace(/^\w+:\/\/[^\/]+/, '');
                } else {
                    e = '/';
                }
            }
            return '/' !== e[0] && '#' !== e[0] && (e = '/' + e), jC(e);
        }(e)), t = function (e, o, t, n) {
            let r = [], i = [], l = null;
            const a = ({state: i}) => {
                const a = iy(e, location), s = t.value, c = o.value;
                let u = 0;
                if (i) {
                    if (t.value = a, o.value = i, l && l === s) {
                        return void (l = null);
                    }
                    u = c ? i.position - c.position : 0;
                } else {
                    n(a);
                }
                r.forEach(e => {
                    e(t.value, s, {
                        delta: u,
                        type: KC.pop,
                        direction: u ? u > 0 ? XC.forward : XC.back : XC.unknown
                    });
                });
            };
            function s() {
                const {history: e} = window;
                e.state && e.replaceState(MC({}, e.state, { scroll: ey() }), '');
            }
            return window.addEventListener('popstate', a), window.addEventListener('beforeunload', s), {
                pauseListeners: function () {
                    l = t.value;
                },
                listen: function (e) {
                    r.push(e);
                    const o = () => {
                        const o = r.indexOf(e);
                        o > -1 && r.splice(o, 1);
                    };
                    return i.push(o), o;
                },
                destroy: function () {
                    for (const e of i)
                        e();
                    i = [];
                    window.removeEventListener('popstate', a);
                    window.removeEventListener('beforeunload', s);
                }
            };
        }(e, o.state, o.location, o.replace);
    const n = MC({
        location: '',
        base: e,
        go: function (e, o = true) {
            o || t.pauseListeners();
            history.go(e);
        },
        createHref: QC.bind(null, e)
    }, o, t);
    return Object.defineProperty(n, 'location', {
        enumerable: true,
        get: () => o.location.value
    }), Object.defineProperty(n, 'state', {
        enumerable: true,
        get: () => o.state.value
    }), n;
}
function sy(e) {
    return 'string' == typeof e || 'symbol' == typeof e;
}
const cy = {
        path: '/',
        name: void 0,
        params: {},
        query: {},
        hash: '',
        fullPath: '/',
        matched: [],
        meta: {},
        redirectedFrom: void 0
    }, uy = Symbol('');
var dy, py;
function fy(e, o) {
    return MC(new Error(), {
        type: e,
        [uy]: true
    }, o);
}
function hy(e, o) {
    return e instanceof Error && uy in e && (null == o || !!(e.type & o));
}
(py = dy || (dy = {}))[py.aborted = 4] = 'aborted';
py[py.cancelled = 8] = 'cancelled';
py[py.duplicated = 16] = 'duplicated';
const my = '[^/]+?', gy = {
        sensitive: false,
        strict: false,
        start: true,
        end: true
    }, vy = /[.+*?^${}()[\]/\\]/g;
function by(e, o) {
    let t = 0;
    for (; t < e.length && t < o.length;) {
        const n = o[t] - e[t];
        if (n) {
            return n;
        }
        t++;
    }
    return e.length < o.length ? 1 === e.length && 80 === e[0] ? -1 : 1 : e.length > o.length ? 1 === o.length && 80 === o[0] ? 1 : -1 : 0;
}
function xy(e, o) {
    let t = 0;
    const n = e.score, r = o.score;
    for (; t < n.length && t < r.length;) {
        const e = by(n[t], r[t]);
        if (e) {
            return e;
        }
        t++;
    }
    if (1 === Math.abs(r.length - n.length)) {
        if (Cy(n)) {
            return 1;
        }
        if (Cy(r)) {
            return -1;
        }
    }
    return r.length - n.length;
}
function Cy(e) {
    const o = e[e.length - 1];
    return e.length > 0 && o[o.length - 1] < 0;
}
const yy = {
        type: 0,
        value: ''
    }, Sy = /[a-zA-Z0-9_]/;
function wy(e, o, t) {
    const n = function (e, o) {
            const t = MC({}, gy, o), n = [];
            let r = t.start ? '^' : '';
            const i = [];
            for (const s of e) {
                const e = s.length ? [] : [90];
                t.strict && !s.length && (r += '/');
                for (let o = 0; o < s.length; o++) {
                    const n = s[o];
                    let l = 40 + (t.sensitive ? 0.25 : 0);
                    if (0 === n.type) {
                        o || (r += '/');
                        r += n.value.replace(vy, '\\$&');
                        l += 40;
                    } else {
                        if (1 === n.type) {
                            const {
                                value: e,
                                repeatable: t,
                                optional: c,
                                regexp: u
                            } = n;
                            i.push({
                                name: e,
                                repeatable: t,
                                optional: c
                            });
                            const d = u || my;
                            if (d !== my) {
                                l += 10;
                                try {
                                    new RegExp(`(${ d })`);
                                } catch (a) {
                                    throw new Error(`Invalid custom RegExp for param "${ e }" (${ d }): ` + a.message);
                                }
                            }
                            let p = t ? `((?:${ d })(?:/(?:${ d }))*)` : `(${ d })`;
                            o || (p = c && s.length < 2 ? `(?:/${ p })` : '/' + p);
                            c && (p += '?');
                            r += p;
                            l += 20;
                            c && (l += -8);
                            t && (l += -20);
                            '.*' === d && (l += -50);
                        }
                    }
                    e.push(l);
                }
                n.push(e);
            }
            if (t.strict && t.end) {
                const e = n.length - 1;
                n[e][n[e].length - 1] += 0.7000000000000001;
            }
            t.strict || (r += '/?');
            t.end ? r += '$' : t.strict && (r += '(?:/|$)');
            const l = new RegExp(r, t.sensitive ? '' : 'i');
            return {
                re: l,
                score: n,
                keys: i,
                parse: function (e) {
                    const o = e.match(l), t = {};
                    if (!o) {
                        return null;
                    }
                    for (let n = 1; n < o.length; n++) {
                        const e = o[n] || '', r = i[n - 1];
                        t[r.name] = e && r.repeatable ? e.split('/') : e;
                    }
                    return t;
                },
                stringify: function (o) {
                    let t = '', n = false;
                    for (const r of e) {
                        n && t.endsWith('/') || (t += '/');
                        n = false;
                        for (const e of r)
                            if (0 === e.type) {
                                t += e.value;
                            } else {
                                if (1 === e.type) {
                                    const {
                                            value: i,
                                            repeatable: l,
                                            optional: a
                                        } = e, s = i in o ? o[i] : '';
                                    if (BC(s) && !l) {
                                        throw new Error(`Provided param "${ i }" is an array but it is not repeatable (* or + modifiers)`);
                                    }
                                    const c = BC(s) ? s.join('/') : s;
                                    if (!c) {
                                        if (!a) {
                                            throw new Error(`Missing required param "${ i }"`);
                                        }
                                        r.length < 2 && (t.endsWith('/') ? t = t.slice(0, -1) : n = true);
                                    }
                                    t += c;
                                }
                            }
                    }
                    return t || '/';
                }
            };
        }(function (e) {
            if (!e) {
                return [[]];
            }
            if ('/' === e) {
                return [[yy]];
            }
            if (!e.startsWith('/')) {
                throw new Error(`Invalid path "${ e }"`);
            }
            function o(e) {
                throw new Error(`ERR (${ t })/"${ c }": ${ e }`);
            }
            let t = 0, n = t;
            const r = [];
            let i;
            function l() {
                i && r.push(i);
                i = [];
            }
            let a, s = 0, c = '', u = '';
            function d() {
                c && (0 === t ? i.push({
                    type: 0,
                    value: c
                }) : 1 === t || 2 === t || 3 === t ? (i.length > 1 && ('*' === a || '+' === a) && o(`A repeatable param (${ c }) must be alone in its segment. eg: '/:ids+.`), i.push({
                    type: 1,
                    value: c,
                    regexp: u,
                    repeatable: '*' === a || '+' === a,
                    optional: '*' === a || '?' === a
                })) : o('Invalid state to consume buffer'), c = '');
            }
            function p() {
                c += a;
            }
            for (; s < e.length;) {
                if (a = e[s++], '\\' !== a || 2 === t) {
                    switch (t) {
                    case 0:
                        '/' === a ? (c && d(), l()) : ':' === a ? (d(), t = 1) : p();
                        break;
                    case 4:
                        p(), t = n;
                        break;
                    case 1:
                        '(' === a ? t = 2 : Sy.test(a) ? p() : (d(), t = 0, '*' !== a && '?' !== a && '+' !== a && s--);
                        break;
                    case 2:
                        ')' === a ? '\\' == u[u.length - 1] ? u = u.slice(0, -1) + a : t = 3 : u += a;
                        break;
                    case 3:
                        d(), t = 0, '*' !== a && '?' !== a && '+' !== a && s--, u = '';
                        break;
                    default:
                        o('Unknown state');
                    }
                } else {
                    n = t;
                    t = 4;
                }
            }
            return 2 === t && o(`Unfinished custom RegExp for param "${ c }"`), d(), l(), r;
        }(e.path), t), r = MC(n, {
            record: e,
            parent: o,
            children: [],
            alias: []
        });
    return o && !r.record.aliasOf == !o.record.aliasOf && o.children.push(r), r;
}
function _y(e, o) {
    const t = [], n = new Map();
    function r(e, t, n) {
        const a = !n, s = function (e) {
                return {
                    path: e.path,
                    redirect: e.redirect,
                    name: e.name,
                    meta: e.meta || {},
                    aliasOf: void 0,
                    beforeEnter: e.beforeEnter,
                    props: Ty(e),
                    children: e.children || [],
                    instances: {},
                    leaveGuards: new Set(),
                    updateGuards: new Set(),
                    enterCallbacks: {},
                    components: 'components' in e ? e.components || null : e.component && { default: e.component }
                };
            }(e);
        s.aliasOf = n && n.record;
        const c = ky(o, e), u = [s];
        if ('alias' in e) {
            const o = 'string' == typeof e.alias ? [e.alias] : e.alias;
            for (const e of o)
                u.push(MC({}, s, {
                    components: n ? n.record.components : s.components,
                    path: e,
                    aliasOf: n ? n.record : s
                }));
        }
        let d, p;
        for (const o of u) {
            const {path: u} = o;
            if (t && '/' !== u[0]) {
                const e = t.record.path, n = '/' === e[e.length - 1] ? '' : '/';
                o.path = t.record.path + (u && n + u);
            }
            if (d = wy(o, t, c), n ? n.alias.push(d) : (p = p || d, p !== d && p.alias.push(d), a && e.name && !Py(d) && i(e.name)), s.children) {
                const e = s.children;
                for (let o = 0; o < e.length; o++) {
                    r(e[o], d, n && n.children[o]);
                }
            }
            n = n || d;
            (d.record.components && Object.keys(d.record.components).length || d.record.name || d.record.redirect) && l(d);
        }
        return p ? () => {
            i(p);
        } : FC;
    }
    function i(e) {
        if (sy(e)) {
            const o = n.get(e);
            o && (n.delete(e), t.splice(t.indexOf(o), 1), o.children.forEach(i), o.alias.forEach(i));
        } else {
            const o = t.indexOf(e);
            o > -1 && (t.splice(o, 1), e.record.name && n.delete(e.record.name), e.children.forEach(i), e.alias.forEach(i));
        }
    }
    function l(e) {
        let o = 0;
        for (; o < t.length && xy(e, t[o]) >= 0 && (e.record.path !== t[o].record.path || !Ry(e, t[o]));) {
            o++;
        }
        t.splice(o, 0, e);
        e.record.name && !Py(e) && n.set(e.record.name, e);
    }
    return o = ky({
        strict: false,
        end: true,
        sensitive: false
    }, o), e.forEach(e => r(e)), {
        addRoute: r,
        resolve: function (e, o) {
            let r, i, l, a = {};
            if ('name' in e && e.name) {
                if (r = n.get(e.name), !r) {
                    throw fy(1, { location: e });
                }
                l = r.record.name;
                a = MC(zy(o.params, r.keys.filter(e => !e.optional).map(e => e.name)), e.params && zy(e.params, r.keys.map(e => e.name)));
                i = r.stringify(a);
            } else {
                if ('path' in e) {
                    i = e.path;
                    r = t.find(e => e.re.test(i));
                    r && (a = r.parse(i), l = r.record.name);
                } else {
                    if (r = o.name ? n.get(o.name) : t.find(e => e.re.test(o.path)), !r) {
                        throw fy(1, {
                            location: e,
                            currentLocation: o
                        });
                    }
                    l = r.record.name;
                    a = MC({}, o.params, e.params);
                    i = r.stringify(a);
                }
            }
            const s = [];
            let c = r;
            for (; c;) {
                s.unshift(c.record);
                c = c.parent;
            }
            return {
                name: l,
                path: i,
                params: a,
                matched: s,
                meta: Ey(s)
            };
        },
        removeRoute: i,
        getRoutes: function () {
            return t;
        },
        getRecordMatcher: function (e) {
            return n.get(e);
        }
    };
}
function zy(e, o) {
    const t = {};
    for (const n of o)
        n in e && (t[n] = e[n]);
    return t;
}
function Ty(e) {
    const o = {
            default: t,
            n: 'boolean' == typeof t ? t : t[n]
        }, t = e.props || false;
    if ('component' in e) {
        ;
    } else {
        for (const n in e.components);
    }
    return o;
}
function Py(e) {
    for (; e;) {
        if (e.record.aliasOf) {
            return true;
        }
        e = e.parent;
    }
    return false;
}
function Ey(e) {
    return e.reduce((e, o) => MC(e, o.meta), {});
}
function ky(e, o) {
    const t = { n: n in o ? o[n] : e[n] };
    for (const n in e);
    return t;
}
function Ry(e, o) {
    return o.children.some(o => o === e || Ry(e, o));
}
const Ly = /#/g, Oy = /&/g, Ay = /\//g, Iy = /=/g, $y = /\?/g, My = /\+/g, Hy = /%5B/g, Fy = /%5D/g, By = /%5E/g, Dy = /%60/g, jy = /%7B/g, Ny = /%7C/g, Wy = /%7D/g, Uy = /%20/g;
function Vy(e) {
    return encodeURI('' + e).replace(Ny, '|').replace(Hy, '[').replace(Fy, ']');
}
function Gy(e) {
    return Vy(e).replace(My, '%2B').replace(Uy, '+').replace(Ly, '%23').replace(Oy, '%26').replace(Dy, '`').replace(jy, '{').replace(Wy, '}').replace(By, '^');
}
function qy(e) {
    return null == e ? '' : function (e) {
        return Vy(e).replace(Ly, '%23').replace($y, '%3F');
    }(e).replace(Ay, '%2F');
}
function Ky(e) {
    try {
        return decodeURIComponent('' + e);
    } catch (o) {
    }
    return '' + e;
}
function Yy(e) {
    const o = { i: l };
    if ('' === e || '?' === e) {
        return o;
    }
    const t = ('?' === e[0] ? e.slice(1) : e).split('&');
    for (let n = 0; n < t.length; ++n) {
        const e = t[n].replace(My, ' '), r = e.indexOf('='), i = Ky(r < 0 ? e : e.slice(0, r)), l = r < 0 ? null : Ky(e.slice(r + 1));
        if (i in o) {
            let e = o[i];
            BC(e) || (e = o[i] = [e]);
            e.push(l);
        } else {
            ;
        }
    }
    return o;
}
function Xy(e) {
    let o = '';
    for (let t in e) {
        const n = e[t];
        if (t = Gy(t).replace(Iy, '%3D'), null == n) {
            void 0 !== n && (o += (o.length ? '&' : '') + t);
            continue;
        }
        (BC(n) ? n.map(e => e && Gy(e)) : [n && Gy(n)]).forEach(e => {
            void 0 !== e && (o += (o.length ? '&' : '') + t, null != e && (o += '=' + e));
        });
    }
    return o;
}
function Jy(e) {
    const o = {};
    for (const t in e) {
        const n = e[t];
        void 0 !== n && (o[t] = BC(n) ? n.map(e => null == e ? null : '' + e) : null == n ? n : '' + n);
    }
    return o;
}
const Zy = Symbol(''), Qy = Symbol(''), eS = Symbol(''), oS = Symbol(''), tS = Symbol('');
function nS() {
    let e = [];
    return {
        add: function (o) {
            return e.push(o), () => {
                const t = e.indexOf(o);
                t > -1 && e.splice(t, 1);
            };
        },
        list: () => e,
        reset: function () {
            e = [];
        }
    };
}
function rS(e, o, t, n, r) {
    const i = n && (n.enterCallbacks[r] = n.enterCallbacks[r] || []);
    return () => new Promise((l, a) => {
        const s = e => {
                var s;
                false === e ? a(fy(4, {
                    from: t,
                    to: o
                })) : e instanceof Error ? a(e) : 'string' == typeof (s = e) || s && 'object' == typeof s ? a(fy(2, {
                    from: o,
                    to: e
                })) : (i && n.enterCallbacks[r] === i && 'function' == typeof e && i.push(e), l());
            }, c = e.call(n && n.instances[r], o, t, s);
        let u = Promise.resolve(c);
        e.length < 3 && (u = u.then(s));
        u.catch(e => a(e));
    });
}
function iS(e, o, t, n) {
    const r = [];
    for (const l of e)
        for (const e in l.components) {
            let a = l.components[e];
            if ('beforeRouteEnter' === o || l.instances[e]) {
                if ('object' == typeof (i = a) || 'displayName' in i || 'props' in i || '__vccOpts' in i) {
                    const i = (a.__vccOpts || a)[o];
                    i && r.push(rS(i, t, n, l, e));
                } else {
                    let i = a();
                    r.push(() => i.then(r => {
                        if (!r) {
                            return Promise.reject(new Error(`Couldn't resolve component "${ e }" at "${ l.path }"`));
                        }
                        const i = (a = r).__esModule || 'Module' === a[Symbol.toStringTag] ? r.default : r;
                        var a;
                        l.components[e] = i;
                        const s = (i.__vccOpts || i)[o];
                        return s && rS(s, t, n, l, e)();
                    }));
                }
            }
        }
    ;
    return r;
}
function lS(e) {
    const o = ct(eS), t = ct(oS), n = Er(() => o.resolve(wo(e.to))), r = Er(() => {
            const {matched: e} = n.value, {length: o} = e, r = e[o - 1], i = t.matched;
            if (!r || !i.length) {
                return -1;
            }
            const l = i.findIndex(UC.bind(null, r));
            if (l > -1) {
                return l;
            }
            const a = sS(e[o - 2]);
            return o > 1 && sS(r) === a && i[i.length - 1].path !== a ? i.findIndex(UC.bind(null, e[o - 2])) : l;
        }), i = Er(() => r.value > -1 && function (e, o) {
            for (const t in o) {
                const n = o[t], r = e[t];
                if ('string' == typeof n) {
                    if (n !== r) {
                        return false;
                    }
                } else {
                    if (!BC(r) || r.length !== n.length || n.some((e, o) => e !== r[o])) {
                        return false;
                    }
                }
            }
            return true;
        }(t.params, n.value.params)), l = Er(() => r.value > -1 && r.value === t.matched.length - 1 && VC(t.params, n.value.params));
    return {
        route: n,
        href: Er(() => n.value.href),
        isActive: i,
        isExactActive: l,
        navigate: function (t = {}) {
            return function (e) {
                if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) {
                    return;
                }
                if (e.defaultPrevented) {
                    return;
                }
                if (void 0 !== e.button && 0 !== e.button) {
                    return;
                }
                if (e.currentTarget && e.currentTarget.getAttribute) {
                    const o = e.currentTarget.getAttribute('target');
                    if (/\b_blank\b/i.test(o)) {
                        return;
                    }
                }
                e.preventDefault && e.preventDefault();
                return true;
            }(t) ? o[wo(e.replace) ? 'replace' : 'push'](wo(e.to)).catch(FC) : Promise.resolve();
        }
    };
}
const aS = Tt({
    name: 'RouterLink',
    compatConfig: { MODE: 3 },
    props: {
        to: {
            type: [
                String,
                Object
            ],
            required: true
        },
        replace: Boolean,
        activeClass: String,
        exactActiveClass: String,
        custom: Boolean,
        ariaCurrentValue: {
            type: String,
            default: 'page'
        }
    },
    useLink: lS,
    setup(e, {slots: o}) {
        const t = ro(lS(e)), {options: n} = ct(eS), r = Er(() => ({
                [cS(e.activeClass, n.linkActiveClass, 'router-link-active')]: t.isActive,
                [cS(e.exactActiveClass, n.linkExactActiveClass, 'router-link-exact-active')]: t.isExactActive
            }));
        return () => {
            const n = o.default && o.default(t);
            return e.custom ? n : kr('a', {
                'aria-current': t.isExactActive ? e.ariaCurrentValue : null,
                href: t.href,
                onClick: t.navigate,
                class: r.value
            }, n);
        };
    }
});
function sS(e) {
    return e ? e.aliasOf ? e.aliasOf.path : e.path : '';
}
const cS = (e, o, t) => null != e ? e : null != o ? o : t;
function uS(e, o) {
    if (!e) {
        return null;
    }
    const t = e(o);
    return 1 === t.length ? t[0] : t;
}
const dS = Tt({
    name: 'RouterView',
    inheritAttrs: false,
    props: {
        name: {
            type: String,
            default: 'default'
        },
        route: Object
    },
    compatConfig: { MODE: 3 },
    setup(e, {
        attrs: o,
        slots: t
    }) {
        const n = ct(tS), r = Er(() => e.route || n.value), i = ct(Qy, 0), l = Er(() => {
                let e = wo(i);
                const {matched: o} = r.value;
                let t;
                for (; (t = o[e]) && !t.components;) {
                    e++;
                }
                return e;
            }), a = Er(() => r.value.matched[l.value]);
        st(Qy, Er(() => l.value + 1));
        st(Zy, a);
        st(tS, r);
        const s = xo();
        return pt(() => [
            s.value,
            a.value,
            e.name
        ], ([e, o, t], [n, r, i]) => {
            o && (o.instances[t] = e, r && r !== o && e && e === n && (o.leaveGuards.size || (o.leaveGuards = r.leaveGuards), o.updateGuards.size || (o.updateGuards = r.updateGuards)));
            !e || !o || r && UC(o, r) && n || (o.enterCallbacks[t] || []).forEach(o => o(e));
        }, { flush: 'post' }), () => {
            const n = r.value, i = e.name, l = a.value, c = l && l.components[i];
            if (!c) {
                return uS(t.default, {
                    Component: c,
                    route: n
                });
            }
            const u = l.props[i], d = u ? true === u ? n.params : 'function' == typeof u ? u(n) : u : null, p = kr(c, MC({}, d, o, {
                    onVnodeUnmounted: e => {
                        e.component.isUnmounted && (l.instances[i] = null);
                    },
                    ref: s
                }));
            return uS(t.default, {
                Component: p,
                route: n
            }) || p;
        };
    }
});
function pS(e) {
    return e.reduce((e, o) => e.then(() => o()), Promise.resolve());
}
function fS() {
    return ct(eS);
}
function hS() {
    return ct(oS);
}
const mS = 'undefined' != typeof window, gS = 'function' == typeof Symbol && 'symbol' == typeof Symbol.toStringTag, vS = e => gS ? Symbol(e) : e, bS = (e, o, t) => xS({
        l: e,
        k: o,
        s: t
    }), xS = e => JSON.stringify(e).replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029').replace(/\u0027/g, '\\u0027'), CS = e => 'number' == typeof e && isFinite(e), yS = e => '[object Date]' === HS(e), SS = e => '[object RegExp]' === HS(e), wS = e => FS(e) && 0 === Object.keys(e).length;
function _S(e, o) {
}
const zS = Object.assign;
let TS;
const PS = () => TS || (TS = 'undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {});
function ES(e) {
    return e.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}
const kS = Object.prototype.hasOwnProperty;
function RS(e, o) {
    return kS.call(e, o);
}
const LS = Array.isArray, OS = e => 'function' == typeof e, AS = e => 'string' == typeof e, IS = e => 'boolean' == typeof e, $S = e => null !== e && 'object' == typeof e, MS = Object.prototype.toString, HS = e => MS.call(e), FS = e => '[object Object]' === HS(e), BS = 15;
function DS(e, o, t = {}) {
    const {
            domain: n,
            messages: r,
            args: i
        } = t, l = new SyntaxError(String(e));
    return l.code = e, o && (l.location = o), l.domain = n, l;
}
const jS = {
        I18nInit: 'i18n:init',
        FunctionTranslate: 'function:translate'
    }, NS = [];
NS[0] = {
    w: [0],
    i: [
        3,
        0
    ],
    '[': [4],
    o: [7]
};
NS[1] = {
    w: [1],
    '.': [2],
    '[': [4],
    o: [7]
};
NS[2] = {
    w: [2],
    i: [
        3,
        0
    ],
    0: [
        3,
        0
    ]
};
NS[3] = {
    i: [
        3,
        0
    ],
    0: [
        3,
        0
    ],
    w: [
        1,
        1
    ],
    '.': [
        2,
        1
    ],
    '[': [
        4,
        1
    ],
    o: [
        7,
        1
    ]
};
NS[4] = {
    '\'': [
        5,
        0
    ],
    '"': [
        6,
        0
    ],
    '[': [
        4,
        2
    ],
    ']': [
        1,
        3
    ],
    o: 8,
    l: [
        4,
        0
    ]
};
NS[5] = {
    '\'': [
        4,
        0
    ],
    o: 8,
    l: [
        5,
        0
    ]
};
NS[6] = {
    '"': [
        4,
        0
    ],
    o: 8,
    l: [
        6,
        0
    ]
};
const WS = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function US(e) {
    if (null == e) {
        return 'o';
    }
    switch (e.charCodeAt(0)) {
    case 91:
    case 93:
    case 46:
    case 34:
    case 39:
        return e;
    case 95:
    case 36:
    case 45:
        return 'i';
    case 9:
    case 10:
    case 13:
    case 160:
    case 65279:
    case 8232:
    case 8233:
        return 'w';
    }
    return 'i';
}
function VS(e) {
    const o = e.trim();
    return ('0' !== e.charAt(0) || !isNaN(parseInt(e))) && (t = o, WS.test(t) ? function (e) {
        const o = e.charCodeAt(0);
        return o !== e.charCodeAt(e.length - 1) || 34 !== o && 39 !== o ? e : e.slice(1, -1);
    }(o) : '*' + o);
    var t;
}
const GS = new Map();
function qS(e, o) {
    return $S(e) ? e[o] : null;
}
const KS = e => e, YS = e => '', XS = 'text', JS = e => 0 === e.length ? '' : e.join(''), ZS = e => null == e ? '' : LS(e) || FS(e) && e.toString === MS ? JSON.stringify(e, null, 2) : String(e);
function QS(e, o) {
    return e = Math.abs(e), 2 === o ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function ew(e = {}) {
    const o = e.locale, t = function (e) {
            const o = CS(e.pluralIndex) ? e.pluralIndex : -1;
            return e.named && (CS(e.named.count) || CS(e.named.n)) ? CS(e.named.count) ? e.named.count : CS(e.named.n) ? e.named.n : o : o;
        }(e), n = $S(e.pluralRules) && AS(o) && OS(e.pluralRules[o]) ? e.pluralRules[o] : QS, r = $S(e.pluralRules) && AS(o) && OS(e.pluralRules[o]) ? QS : void 0, i = e.list || [], l = e.named || {};
    CS(e.pluralIndex) && function (e, o) {
        o.count || (o.count = e);
        o.n || (o.n = e);
    }(t, l);
    function a(o) {
        const t = OS(e.messages) ? e.messages(o) : !!$S(e.messages) && e.messages[o];
        return t || (e.parent ? e.parent.message(o) : YS);
    }
    const s = FS(e.processor) && OS(e.processor.normalize) ? e.processor.normalize : JS, c = FS(e.processor) && OS(e.processor.interpolate) ? e.processor.interpolate : ZS, u = {
            list: e => i[e],
            named: e => l[e],
            plural: e => e[n(t, e.length, r)],
            linked: (o, ...t) => {
                const [n, r] = t;
                let i = 'text', l = '';
                1 === t.length ? $S(n) ? (l = n.modifier || l, i = n.type || i) : AS(n) && (l = n || l) : 2 === t.length && (AS(n) && (l = n || l), AS(r) && (i = r || i));
                let s = a(o)(u);
                return 'vnode' === i && LS(s) && l && (s = s[0]), l ? (c = l, e.modifiers ? e.modifiers[c] : KS)(s, i) : s;
                var c;
            },
            message: a,
            type: FS(e.processor) && AS(e.processor.type) ? e.processor.type : XS,
            interpolate: c,
            normalize: s
        };
    return u;
}
let ow = null;
const tw = nw(jS.FunctionTranslate);
function nw(e) {
    return o => ow && ow.emit(e, o);
}
function rw(e, o, t) {
    return [...new Set([
            t,
            ...LS(o) ? o : $S(o) ? Object.keys(o) : AS(o) ? [o] : [t]
        ])];
}
function iw(e, o, t) {
    const n = AS(t) ? t : dw, r = e;
    r.__localeChainCache || (r.__localeChainCache = new Map());
    let i = r.__localeChainCache.get(n);
    if (!i) {
        i = [];
        let e = [t];
        for (; LS(e);) {
            e = lw(i, e, o);
        }
        const l = LS(o) || !FS(o) ? o : o.default ? o.default : null;
        e = AS(l) ? [l] : l;
        LS(e) && lw(i, e, false);
        r.__localeChainCache.set(n, i);
    }
    return i;
}
function lw(e, o, t) {
    let n = true;
    for (let r = 0; r < o.length && IS(n); r++) {
        const i = o[r];
        AS(i) && (n = aw(e, o[r], t));
    }
    return n;
}
function aw(e, o, t) {
    let n;
    const r = o.split('-');
    do {
        n = sw(e, r.join('-'), t);
        r.splice(-1, 1);
    } while (r.length && true === n);
    return n;
}
function sw(e, o, t) {
    let n = false;
    if (!e.includes(o) && (n = true, o)) {
        n = '!' !== o[o.length - 1];
        const r = o.replace(/!/g, '');
        e.push(r);
        (LS(t) || FS(t)) && t[r] && (n = t[r]);
    }
    return n;
}
const cw = '9.2.2', uw = -1, dw = 'en-US', pw = '', fw = e => `${ e.charAt(0).toLocaleUpperCase() }${ e.substr(1) }`;
let hw, mw, gw;
let vw = null;
const bw = e => {
        vw = e;
    }, xw = () => vw;
let Cw = null;
const yw = e => {
        Cw = e;
    }, Sw = () => Cw;
let ww = 0;
function _w(e = {}) {
    const o = AS(e.version) ? e.version : cw, t = AS(e.locale) ? e.locale : dw, n = LS(e.fallbackLocale) || FS(e.fallbackLocale) || AS(e.fallbackLocale) || false === e.fallbackLocale ? e.fallbackLocale : t, r = FS(e.messages) ? e.messages : { [t]: {} }, i = FS(e.datetimeFormats) ? e.datetimeFormats : { [t]: {} }, l = FS(e.numberFormats) ? e.numberFormats : { [t]: {} }, a = zS({}, e.modifiers || {}, {
            upper: (e, o) => 'text' === o && AS(e) ? e.toUpperCase() : 'vnode' === o && $S(e) && '__v_isVNode' in e ? e.children.toUpperCase() : e,
            lower: (e, o) => 'text' === o && AS(e) ? e.toLowerCase() : 'vnode' === o && $S(e) && '__v_isVNode' in e ? e.children.toLowerCase() : e,
            capitalize: (e, o) => 'text' === o && AS(e) ? fw(e) : 'vnode' === o && $S(e) && '__v_isVNode' in e ? fw(e.children) : e
        }), s = e.pluralRules || {}, c = OS(e.missing) ? e.missing : null, u = !IS(e.missingWarn) && !SS(e.missingWarn) || e.missingWarn, d = !IS(e.fallbackWarn) && !SS(e.fallbackWarn) || e.fallbackWarn, p = !!e.fallbackFormat, f = !!e.unresolving, h = OS(e.postTranslation) ? e.postTranslation : null, m = FS(e.processor) ? e.processor : null, g = !IS(e.warnHtmlMessage) || e.warnHtmlMessage, v = !!e.escapeParameter, b = OS(e.messageCompiler) ? e.messageCompiler : hw, x = OS(e.messageResolver) ? e.messageResolver : mw || qS, C = OS(e.localeFallbacker) ? e.localeFallbacker : gw || rw, y = $S(e.fallbackContext) ? e.fallbackContext : void 0, S = OS(e.onWarn) ? e.onWarn : _S, w = e, _ = $S(w.__datetimeFormatters) ? w.__datetimeFormatters : new Map(), z = $S(w.__numberFormatters) ? w.__numberFormatters : new Map(), T = $S(w.__meta) ? w.__meta : {};
    ww++;
    const P = {
        version: o,
        cid: ww,
        locale: t,
        fallbackLocale: n,
        messages: r,
        modifiers: a,
        pluralRules: s,
        missing: c,
        missingWarn: u,
        fallbackWarn: d,
        fallbackFormat: p,
        unresolving: f,
        postTranslation: h,
        processor: m,
        warnHtmlMessage: g,
        escapeParameter: v,
        messageCompiler: b,
        messageResolver: x,
        localeFallbacker: C,
        fallbackContext: y,
        onWarn: S,
        __meta: T
    };
    return P.datetimeFormats = i, P.numberFormats = l, P.__datetimeFormatters = _, P.__numberFormatters = z, __INTLIFY_PROD_DEVTOOLS__ && function (e, o, t) {
        ow && ow.emit(jS.I18nInit, {
            timestamp: Date.now(),
            i18n: e,
            version: o,
            meta: t
        });
    }(P, o, T), P;
}
function zw(e, o, t, n, r) {
    const {
        missing: i,
        onWarn: l
    } = e;
    if (null !== i) {
        const n = i(e, t, o, r);
        return AS(n) ? n : o;
    }
    return o;
}
function Tw(e, o, t) {
    e.__localeChainCache = new Map();
    e.localeFallbacker(e, t, o);
}
let Pw = BS;
const Ew = () => ++Pw, kw = {
        INVALID_ARGUMENT: Pw,
        INVALID_DATE_ARGUMENT: Ew(),
        INVALID_ISO_DATE_ARGUMENT: Ew(),
        __EXTEND_POINT__: Ew()
    };
function Rw(e) {
    return DS(e, null, void 0);
}
const Lw = () => '', Ow = e => OS(e);
function Aw(e, ...o) {
    const {
            fallbackFormat: t,
            postTranslation: n,
            unresolving: r,
            messageCompiler: i,
            fallbackLocale: l,
            messages: a
        } = e, [s, c] = Mw(...o), u = IS(c.missingWarn) ? c.missingWarn : e.missingWarn, d = IS(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn, p = IS(c.escapeParameter) ? c.escapeParameter : e.escapeParameter, f = !!c.resolvedMessage, h = AS(c.default) || IS(c.default) ? IS(c.default) ? i ? s : () => s : c.default : t ? i ? s : () => s : '', m = t || '' !== h, g = AS(c.locale) ? c.locale : e.locale;
    p && function (e) {
        LS(e.list) ? e.list = e.list.map(e => AS(e) ? ES(e) : e) : $S(e.named) && Object.keys(e.named).forEach(o => {
            AS(e.named[o]) && (e.named[o] = ES(e.named[o]));
        });
    }(c);
    let [v, b, x] = f ? [
            s,
            g,
            a[g] || {}
        ] : Iw(e, s, g, l, d, u), C = v, y = s;
    if (f || AS(C) || Ow(C) || m && (C = h, y = C), !(f || (AS(C) || Ow(C)) && AS(b))) {
        return r ? uw : s;
    }
    let S = false;
    const w = Ow(C) ? C : $w(e, s, b, C, y, () => {
        S = true;
    });
    if (S) {
        return C;
    }
    const _ = function (e, o, t, n) {
            const {
                    modifiers: r,
                    pluralRules: i,
                    messageResolver: l,
                    fallbackLocale: a,
                    fallbackWarn: s,
                    missingWarn: c,
                    fallbackContext: u
                } = e, d = n => {
                    let r = l(t, n);
                    if (null == r && u) {
                        const [, , e] = Iw(u, n, o, a, s, c);
                        r = l(e, n);
                    }
                    if (AS(r)) {
                        let t = false;
                        const i = $w(e, n, o, r, n, () => {
                            t = true;
                        });
                        return t ? Lw : i;
                    }
                    return Ow(r) ? r : Lw;
                }, p = {
                    locale: o,
                    modifiers: r,
                    pluralRules: i,
                    messages: d
                };
            e.processor && (p.processor = e.processor);
            n.list && (p.list = n.list);
            n.named && (p.named = n.named);
            CS(n.plural) && (p.pluralIndex = n.plural);
            return p;
        }(e, b, x, c), z = function (e, o, t) {
            const n = o(t);
            return n;
        }(0, w, ew(_)), T = n ? n(z, s) : z;
    if (__INTLIFY_PROD_DEVTOOLS__) {
        const o = {
            timestamp: Date.now(),
            key: AS(s) ? s : Ow(C) ? C.key : '',
            locale: b || (Ow(C) ? C.locale : ''),
            format: AS(C) ? C : Ow(C) ? C.source : '',
            message: T
        };
        o.meta = zS({}, e.__meta, xw() || {});
        tw(o);
    }
    return T;
}
function Iw(e, o, t, n, r, i) {
    const {
            messages: l,
            onWarn: a,
            messageResolver: s,
            localeFallbacker: c
        } = e, u = c(e, n, t);
    let d, p = {}, f = null;
    for (let h = 0; h < u.length && (d = u[h], p = l[d] || {}, null === (f = s(p, o)) && (f = p[o]), !AS(f) && !OS(f)); h++) {
        const t = zw(e, o, d, 0, 'translate');
        t !== o && (f = t);
    }
    return [
        f,
        d,
        p
    ];
}
function $w(e, o, t, n, r, i) {
    const {
        messageCompiler: l,
        warnHtmlMessage: a
    } = e;
    if (Ow(n)) {
        const e = n;
        return e.locale = e.locale || t, e.key = e.key || o, e;
    }
    if (null == l) {
        const e = () => n;
        return e.locale = t, e.key = o, e;
    }
    const s = l(n, function (e, o, t, n, r, i) {
        return {
            warnHtmlMessage: r,
            onError: e => {
                throw i && i(e), e;
            },
            onCacheKey: e => bS(o, t, e)
        };
    }(0, t, r, 0, a, i));
    return s.locale = t, s.key = o, s.source = n, s;
}
function Mw(...e) {
    const [o, t, n] = e, r = {};
    if (!AS(o) && !CS(o) && !Ow(o)) {
        throw Rw(kw.INVALID_ARGUMENT);
    }
    const i = CS(o) ? String(o) : (Ow(o), o);
    return CS(t) ? r.plural = t : AS(t) ? r.default = t : FS(t) && !wS(t) ? r.named = t : LS(t) && (r.list = t), CS(n) ? r.plural = n : AS(n) ? r.default = n : FS(n) && zS(r, n), [
        i,
        r
    ];
}
function Hw(e, ...o) {
    const {
            datetimeFormats: t,
            unresolving: n,
            fallbackLocale: r,
            onWarn: i,
            localeFallbacker: l
        } = e, {__datetimeFormatters: a} = e, [s, c, u, d] = Bw(...o);
    IS(u.missingWarn) ? u.missingWarn : e.missingWarn;
    IS(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn;
    const p = !!u.part, f = AS(u.locale) ? u.locale : e.locale, h = l(e, r, f);
    if (!AS(s) || '' === s) {
        return new Intl.DateTimeFormat(f, d).format(c);
    }
    let m, g = {}, v = null;
    for (let C = 0; C < h.length && (m = h[C], g = t[m] || {}, v = g[s], !FS(v)); C++) {
        zw(e, s, m, 0, 'datetime format');
    }
    if (!FS(v) || !AS(m)) {
        return n ? uw : s;
    }
    let b = `${ m }__${ s }`;
    wS(d) || (b = `${ b }__${ JSON.stringify(d) }`);
    let x = a.get(b);
    return x || (x = new Intl.DateTimeFormat(m, zS({}, v, d)), a.set(b, x)), p ? x.formatToParts(c) : x.format(c);
}
const Fw = [
    'localeMatcher',
    'weekday',
    'era',
    'year',
    'month',
    'day',
    'hour',
    'minute',
    'second',
    'timeZoneName',
    'formatMatcher',
    'hour12',
    'timeZone',
    'dateStyle',
    'timeStyle',
    'calendar',
    'dayPeriod',
    'numberingSystem',
    'hourCycle',
    'fractionalSecondDigits'
];
function Bw(...e) {
    const [o, t, n, r] = e, i = {};
    let l, a = {};
    if (AS(o)) {
        const e = o.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
        if (!e) {
            throw Rw(kw.INVALID_ISO_DATE_ARGUMENT);
        }
        const t = e[3] ? e[3].trim().startsWith('T') ? `${ e[1].trim() }${ e[3].trim() }` : `${ e[1].trim() }T${ e[3].trim() }` : e[1].trim();
        l = new Date(t);
        try {
            l.toISOString();
        } catch (s) {
            throw Rw(kw.INVALID_ISO_DATE_ARGUMENT);
        }
    } else {
        if (yS(o)) {
            if (isNaN(o.getTime())) {
                throw Rw(kw.INVALID_DATE_ARGUMENT);
            }
            l = o;
        } else {
            if (!CS(o)) {
                throw Rw(kw.INVALID_ARGUMENT);
            }
            l = o;
        }
    }
    return AS(t) ? i.key = t : FS(t) && Object.keys(t).forEach(e => {
        Fw.includes(e) ? a[e] = t[e] : i[e] = t[e];
    }), AS(n) ? i.locale = n : FS(n) && (a = n), FS(r) && (a = r), [
        i.key || '',
        l,
        i,
        a
    ];
}
function Dw(e, o, t) {
    const n = e;
    for (const r in t) {
        const e = `${ o }__${ r }`;
        n.__datetimeFormatters.has(e) && n.__datetimeFormatters.delete(e);
    }
}
function jw(e, ...o) {
    const {
            numberFormats: t,
            unresolving: n,
            fallbackLocale: r,
            onWarn: i,
            localeFallbacker: l
        } = e, {__numberFormatters: a} = e, [s, c, u, d] = Ww(...o);
    IS(u.missingWarn) ? u.missingWarn : e.missingWarn;
    IS(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn;
    const p = !!u.part, f = AS(u.locale) ? u.locale : e.locale, h = l(e, r, f);
    if (!AS(s) || '' === s) {
        return new Intl.NumberFormat(f, d).format(c);
    }
    let m, g = {}, v = null;
    for (let C = 0; C < h.length && (m = h[C], g = t[m] || {}, v = g[s], !FS(v)); C++) {
        zw(e, s, m, 0, 'number format');
    }
    if (!FS(v) || !AS(m)) {
        return n ? uw : s;
    }
    let b = `${ m }__${ s }`;
    wS(d) || (b = `${ b }__${ JSON.stringify(d) }`);
    let x = a.get(b);
    return x || (x = new Intl.NumberFormat(m, zS({}, v, d)), a.set(b, x)), p ? x.formatToParts(c) : x.format(c);
}
const Nw = [
    'localeMatcher',
    'style',
    'currency',
    'currencyDisplay',
    'currencySign',
    'useGrouping',
    'minimumIntegerDigits',
    'minimumFractionDigits',
    'maximumFractionDigits',
    'minimumSignificantDigits',
    'maximumSignificantDigits',
    'compactDisplay',
    'notation',
    'signDisplay',
    'unit',
    'unitDisplay',
    'roundingMode',
    'roundingPriority',
    'roundingIncrement',
    'trailingZeroDisplay'
];
function Ww(...e) {
    const [o, t, n, r] = e, i = {};
    let l = {};
    if (!CS(o)) {
        throw Rw(kw.INVALID_ARGUMENT);
    }
    const a = o;
    return AS(t) ? i.key = t : FS(t) && Object.keys(t).forEach(e => {
        Nw.includes(e) ? l[e] = t[e] : i[e] = t[e];
    }), AS(n) ? i.locale = n : FS(n) && (l = n), FS(r) && (l = r), [
        i.key || '',
        a,
        i,
        l
    ];
}
function Uw(e, o, t) {
    const n = e;
    for (const r in t) {
        const e = `${ o }__${ r }`;
        n.__numberFormatters.has(e) && n.__numberFormatters.delete(e);
    }
}
'boolean' != typeof __INTLIFY_PROD_DEVTOOLS__ && (PS().__INTLIFY_PROD_DEVTOOLS__ = false);
const Vw = '9.2.2';
let Gw = BS;
const qw = () => ++Gw, Kw = {
        UNEXPECTED_RETURN_TYPE: Gw,
        INVALID_ARGUMENT: qw(),
        MUST_BE_CALL_SETUP_TOP: qw(),
        NOT_INSLALLED: qw(),
        NOT_AVAILABLE_IN_LEGACY_MODE: qw(),
        REQUIRED_VALUE: qw(),
        INVALID_VALUE: qw(),
        CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: qw(),
        NOT_INSLALLED_WITH_PROVIDE: qw(),
        UNEXPECTED_ERROR: qw(),
        NOT_COMPATIBLE_LEGACY_VUE_I18N: qw(),
        BRIDGE_SUPPORT_VUE_2_ONLY: qw(),
        MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: qw(),
        NOT_AVAILABLE_COMPOSITION_IN_LEGACY: qw(),
        __EXTEND_POINT__: qw()
    };
function Yw(e, ...o) {
    return DS(e, null, void 0);
}
const Xw = vS('__transrateVNode'), Jw = vS('__datetimeParts'), Zw = vS('__numberParts'), Qw = vS('__setPluralRules');
vS('__intlifyMeta');
const e_ = vS('__injectWithOption');
function o_(e) {
    if (!$S(e)) {
        return e;
    }
    for (const o in e)
        if (RS(e, o)) {
            if (o.includes('.')) {
                const t = o.split('.'), n = t.length - 1;
                let r = e;
                for (let e = 0; e < n; e++) {
                    t[e] in r || (r[t[e]] = {});
                    r = r[t[e]];
                }
                r[t[n]] = e[o];
                delete e[o];
                $S(r[t[n]]) && o_(r[t[n]]);
            } else {
                $S(e[o]) && o_(e[o]);
            }
        }
    return e;
}
function t_(e, o) {
    const {
            messages: t,
            __i18n: n,
            messageResolver: r,
            flatJson: i
        } = o, l = FS(t) ? t : LS(n) ? {} : { [e]: {} };
    if (LS(n) && n.forEach(e => {
            if ('locale' in e && 'resource' in e) {
                const {
                    locale: o,
                    resource: t
                } = e;
                o ? (l[o] = l[o] || {}, r_(t, l[o])) : r_(t, l);
            } else {
                AS(e) && r_(JSON.parse(e), l);
            }
        }), null == r && i) {
        for (const a in l)
            RS(l, a) && o_(l[a]);
    }
    return l;
}
const n_ = e => !$S(e) || LS(e);
function r_(e, o) {
    if (n_(e) || n_(o)) {
        throw Yw(Kw.INVALID_VALUE);
    }
    for (const t in e)
        RS(e, t) && (n_(e[t]) || n_(o[t]) ? o[t] = e[t] : r_(e[t], o[t]));
}
function i_(e) {
    return e.type;
}
function l_(e) {
    return sr(Vn, null, e, 0);
}
const a_ = '__INTLIFY_META__';
let s_ = 0;
function c_(e) {
    return (o, t, n, r) => e(t, n, xr() || void 0, r);
}
const u_ = () => {
    const e = xr();
    let o = null;
    return e && (o = i_(e)[a_]) ? { [a_]: o } : null;
};
function d_(e = {}, o) {
    const {__root: t} = e, n = void 0 === t;
    let r = !IS(e.inheritLocale) || e.inheritLocale;
    const i = xo(t && r ? t.locale.value : AS(e.locale) ? e.locale : dw), l = xo(t && r ? t.fallbackLocale.value : AS(e.fallbackLocale) || LS(e.fallbackLocale) || FS(e.fallbackLocale) || false === e.fallbackLocale ? e.fallbackLocale : i.value), a = xo(t_(i.value, e)), s = xo(FS(e.datetimeFormats) ? e.datetimeFormats : { [i.value]: {} }), c = xo(FS(e.numberFormats) ? e.numberFormats : { [i.value]: {} });
    let u = t ? t.missingWarn : !IS(e.missingWarn) && !SS(e.missingWarn) || e.missingWarn, d = t ? t.fallbackWarn : !IS(e.fallbackWarn) && !SS(e.fallbackWarn) || e.fallbackWarn, p = t ? t.fallbackRoot : !IS(e.fallbackRoot) || e.fallbackRoot, f = !!e.fallbackFormat, h = OS(e.missing) ? e.missing : null, m = OS(e.missing) ? c_(e.missing) : null, g = OS(e.postTranslation) ? e.postTranslation : null, v = t ? t.warnHtmlMessage : !IS(e.warnHtmlMessage) || e.warnHtmlMessage, b = !!e.escapeParameter;
    const x = t ? t.modifiers : FS(e.modifiers) ? e.modifiers : {};
    let C, y = e.pluralRules || t && t.pluralRules;
    C = (() => {
        n && yw(null);
        const o = {
            version: Vw,
            locale: i.value,
            fallbackLocale: l.value,
            messages: a.value,
            modifiers: x,
            pluralRules: y,
            missing: null === m ? void 0 : m,
            missingWarn: u,
            fallbackWarn: d,
            fallbackFormat: f,
            unresolving: true,
            postTranslation: null === g ? void 0 : g,
            warnHtmlMessage: v,
            escapeParameter: b,
            messageResolver: e.messageResolver,
            __meta: { framework: 'vue' }
        };
        o.datetimeFormats = s.value;
        o.numberFormats = c.value;
        o.__datetimeFormatters = FS(C) ? C.__datetimeFormatters : void 0;
        o.__numberFormatters = FS(C) ? C.__numberFormatters : void 0;
        const t = _w(o);
        return n && yw(t), t;
    })();
    Tw(C, i.value, l.value);
    const S = Er({
            get: () => i.value,
            set: e => {
                i.value = e;
                C.locale = i.value;
            }
        }), w = Er({
            get: () => l.value,
            set: e => {
                l.value = e;
                C.fallbackLocale = l.value;
                Tw(C, i.value, e);
            }
        }), _ = Er(() => a.value), z = Er(() => s.value), T = Er(() => c.value);
    const P = (e, o, r, u, d, f) => {
        let h;
        if (i.value, l.value, a.value, s.value, c.value, __INTLIFY_PROD_DEVTOOLS__) {
            try {
                bw(u_());
                n || (C.fallbackContext = t ? Sw() : void 0);
                h = e(C);
            } finally {
                bw(null);
                n || (C.fallbackContext = void 0);
            }
        } else {
            h = e(C);
        }
        if (CS(h) && h === uw) {
            const [e, n] = o();
            return t && p ? u(t) : d(e);
        }
        if (f(h)) {
            return h;
        }
        throw Yw(Kw.UNEXPECTED_RETURN_TYPE);
    };
    function E(...e) {
        return P(o => Reflect.apply(Aw, null, [
            o,
            ...e
        ]), () => Mw(...e), 'translate', o => Reflect.apply(o.t, o, [...e]), e => e, e => AS(e));
    }
    const k = {
        normalize: function (e) {
            return e.map(e => AS(e) || CS(e) || IS(e) ? l_(String(e)) : e);
        },
        interpolate: e => e,
        type: 'vnode'
    };
    function R(e) {
        return a.value[e] || {};
    }
    s_++;
    t && mS && (pt(t.locale, e => {
        r && (i.value = e, C.locale = e, Tw(C, i.value, l.value));
    }), pt(t.fallbackLocale, e => {
        r && (l.value = e, C.fallbackLocale = e, Tw(C, i.value, l.value));
    }));
    const L = {
        id: s_,
        locale: S,
        fallbackLocale: w,
        get inheritLocale() {
            return r;
        },
        set inheritLocale(e) {
            r = e;
            e && t && (i.value = t.locale.value, l.value = t.fallbackLocale.value, Tw(C, i.value, l.value));
        },
        get availableLocales() {
            return Object.keys(a.value).sort();
        },
        messages: _,
        get modifiers() {
            return x;
        },
        get pluralRules() {
            return y || {};
        },
        get isGlobal() {
            return n;
        },
        get missingWarn() {
            return u;
        },
        set missingWarn(e) {
            u = e;
            C.missingWarn = u;
        },
        get fallbackWarn() {
            return d;
        },
        set fallbackWarn(e) {
            d = e;
            C.fallbackWarn = d;
        },
        get fallbackRoot() {
            return p;
        },
        set fallbackRoot(e) {
            p = e;
        },
        get fallbackFormat() {
            return f;
        },
        set fallbackFormat(e) {
            f = e;
            C.fallbackFormat = f;
        },
        get warnHtmlMessage() {
            return v;
        },
        set warnHtmlMessage(e) {
            v = e;
            C.warnHtmlMessage = e;
        },
        get escapeParameter() {
            return b;
        },
        set escapeParameter(e) {
            b = e;
            C.escapeParameter = e;
        },
        t: E,
        getLocaleMessage: R,
        setLocaleMessage: function (e, o) {
            a.value[e] = o;
            C.messages = a.value;
        },
        mergeLocaleMessage: function (e, o) {
            a.value[e] = a.value[e] || {};
            r_(o, a.value[e]);
            C.messages = a.value;
        },
        getPostTranslationHandler: function () {
            return OS(g) ? g : null;
        },
        setPostTranslationHandler: function (e) {
            g = e;
            C.postTranslation = e;
        },
        getMissingHandler: function () {
            return h;
        },
        setMissingHandler: function (e) {
            null !== e && (m = c_(e));
            h = e;
            C.missing = m;
        },
        [Qw]: function (e) {
            y = e;
            C.pluralRules = y;
        }
    };
    return L.datetimeFormats = z, L.numberFormats = T, L.rt = function (...e) {
        const [o, t, n] = e;
        if (n && !$S(n)) {
            throw Yw(Kw.INVALID_ARGUMENT);
        }
        return E(o, t, zS({ resolvedMessage: true }, n || {}));
    }, L.te = function (e, o) {
        const t = R(AS(o) ? o : i.value);
        return null !== C.messageResolver(t, e);
    }, L.tm = function (e) {
        const o = function (e) {
            let o = null;
            const t = iw(C, l.value, i.value);
            for (let n = 0; n < t.length; n++) {
                const r = a.value[t[n]] || {}, i = C.messageResolver(r, e);
                if (null != i) {
                    o = i;
                    break;
                }
            }
            return o;
        }(e);
        return null != o ? o : t && t.tm(e) || {};
    }, L.d = function (...e) {
        return P(o => Reflect.apply(Hw, null, [
            o,
            ...e
        ]), () => Bw(...e), 'datetime format', o => Reflect.apply(o.d, o, [...e]), () => pw, e => AS(e));
    }, L.n = function (...e) {
        return P(o => Reflect.apply(jw, null, [
            o,
            ...e
        ]), () => Ww(...e), 'number format', o => Reflect.apply(o.n, o, [...e]), () => pw, e => AS(e));
    }, L.getDateTimeFormat = function (e) {
        return s.value[e] || {};
    }, L.setDateTimeFormat = function (e, o) {
        s.value[e] = o;
        C.datetimeFormats = s.value;
        Dw(C, e, o);
    }, L.mergeDateTimeFormat = function (e, o) {
        s.value[e] = zS(s.value[e] || {}, o);
        C.datetimeFormats = s.value;
        Dw(C, e, o);
    }, L.getNumberFormat = function (e) {
        return c.value[e] || {};
    }, L.setNumberFormat = function (e, o) {
        c.value[e] = o;
        C.numberFormats = c.value;
        Uw(C, e, o);
    }, L.mergeNumberFormat = function (e, o) {
        c.value[e] = zS(c.value[e] || {}, o);
        C.numberFormats = c.value;
        Uw(C, e, o);
    }, L[e_] = e.__injectWithOption, L[Xw] = function (...e) {
        return P(o => {
            let t;
            const n = o;
            try {
                n.processor = k;
                t = Reflect.apply(Aw, null, [
                    n,
                    ...e
                ]);
            } finally {
                n.processor = null;
            }
            return t;
        }, () => Mw(...e), 'translate', o => o[Xw](...e), e => [l_(e)], e => LS(e));
    }, L[Jw] = function (...e) {
        return P(o => Reflect.apply(Hw, null, [
            o,
            ...e
        ]), () => Bw(...e), 'datetime format', o => o[Jw](...e), () => [], e => AS(e) || LS(e));
    }, L[Zw] = function (...e) {
        return P(o => Reflect.apply(jw, null, [
            o,
            ...e
        ]), () => Ww(...e), 'number format', o => o[Zw](...e), () => [], e => AS(e) || LS(e));
    }, L;
}
const p_ = {
    tag: {
        type: [
            String,
            Object
        ]
    },
    locale: { type: String },
    scope: {
        type: String,
        validator: e => 'parent' === e || 'global' === e,
        default: 'parent'
    },
    i18n: { type: Object }
};
function f_(e) {
    return Un;
}
const h_ = {
    name: 'i18n-t',
    props: zS({
        keypath: {
            type: String,
            required: true
        },
        plural: {
            type: [
                Number,
                String
            ],
            validator: e => CS(e) || !isNaN(e)
        }
    }, p_),
    setup(e, o) {
        const {
                slots: t,
                attrs: n
            } = o, r = e.i18n || S_({
                useScope: e.scope,
                __useComponent: true
            });
        return () => {
            const i = Object.keys(t).filter(e => '_' !== e), l = {};
            e.locale && (l.locale = e.locale);
            void 0 !== e.plural && (l.plural = AS(e.plural) ? +e.plural : e.plural);
            const a = function ({slots: e}, o) {
                    if (1 === o.length && 'default' === o[0]) {
                        return (e.default ? e.default() : []).reduce((e, o) => [
                            ...e,
                            ...LS(o.children) ? o.children : [o]
                        ], []);
                    }
                    return o.reduce((o, t) => {
                        const n = e[t];
                        return n && (o[t] = n()), o;
                    }, {});
                }(o, i), s = r[Xw](e.keypath, a, l), c = zS({}, n);
            return kr(AS(e.tag) || $S(e.tag) ? e.tag : f_(), c, s);
        };
    }
};
function m_(e, o, t, n) {
    const {
        slots: r,
        attrs: i
    } = o;
    return () => {
        ;
        let l = {};
        e.locale && (o.locale = e.locale);
        AS(e.format) ? o.key = e.format : $S(e.format) && (AS(e.format.key) && (o.key = e.format.key), l = Object.keys(e.format).reduce((o, n) => t.includes(n) ? zS({}, o, { [n]: e.format[n] }) : o, {}));
        const a = n(e.value, o, l);
        let s = [o.key];
        LS(a) ? s = a.map((e, o) => {
            const t = r[e.type], n = t ? t({
                    [e.type]: e.value,
                    index: o,
                    parts: a
                }) : [e.value];
            var i;
            return LS(i = n) && !AS(i[0]) && (n[0].key = `${ e.type }-${ o }`), n;
        }) : AS(a) && (s = [a]);
        const c = zS({}, i);
        return kr(AS(e.tag) || $S(e.tag) ? e.tag : f_(), c, s);
    };
}
const g_ = {
        name: 'i18n-n',
        props: zS({
            value: {
                type: Number,
                required: true
            },
            format: {
                type: [
                    String,
                    Object
                ]
            }
        }, p_),
        setup(e, o) {
            const t = e.i18n || S_({
                useScope: 'parent',
                __useComponent: true
            });
            return m_(e, o, Nw, (...e) => t[Zw](...e));
        }
    }, v_ = {
        name: 'i18n-d',
        props: zS({
            value: {
                type: [
                    Number,
                    Date
                ],
                required: true
            },
            format: {
                type: [
                    String,
                    Object
                ]
            }
        }, p_),
        setup(e, o) {
            const t = e.i18n || S_({
                useScope: 'parent',
                __useComponent: true
            });
            return m_(e, o, Fw, (...e) => t[Jw](...e));
        }
    };
function b_(e) {
    if (AS(e)) {
        return { path: e };
    }
    if (FS(e)) {
        if (!('path' in e)) {
            throw Yw(Kw.REQUIRED_VALUE);
        }
        return e;
    }
    throw Yw(Kw.INVALID_VALUE);
}
function x_(e) {
    const {
            path: o,
            locale: t,
            args: n,
            choice: r,
            plural: i
        } = e, l = {}, a = n || {};
    return AS(t) && (l.locale = t), CS(r) && (l.plural = r), CS(i) && (l.plural = i), [
        o,
        a,
        l
    ];
}
function C_(e, o, ...t) {
    const n = FS(t[0]) ? t[0] : {}, r = !!n.useI18nComponentName;
    (!IS(n.globalInstall) || n.globalInstall) && (e.component(r ? 'i18n' : h_.name, h_), e.component(g_.name, g_), e.component(v_.name, v_));
    e.directive('t', function (e) {
        const o = o => {
            const {
                instance: t,
                modifiers: n,
                value: r
            } = o;
            if (!t || !t.$) {
                throw Yw(Kw.UNEXPECTED_ERROR);
            }
            const i = function (e, o) {
                    const t = e;
                    if ('composition' === e.mode) {
                        return t.__getInstance(o) || e.global;
                    }
                    {
                        const n = t.__getInstance(o);
                        return null != n ? n.__composer : e.global.__composer;
                    }
                }(e, t.$), l = b_(r);
            return [
                Reflect.apply(i.t, i, [...x_(l)]),
                i
            ];
        };
        return {
            created: (t, n) => {
                const [r, i] = o(n);
                mS && e.global === i && (t.__i18nWatcher = pt(i.locale, () => {
                    n.instance && n.instance.$forceUpdate();
                }));
                t.__composer = i;
                t.textContent = r;
            },
            unmounted: e => {
                mS && e.__i18nWatcher && (e.__i18nWatcher(), e.__i18nWatcher = void 0, delete e.__i18nWatcher);
                e.__composer && (e.__composer = void 0, delete e.__composer);
            },
            beforeUpdate: (e, {value: o}) => {
                if (e.__composer) {
                    const t = e.__composer, n = b_(o);
                    e.textContent = Reflect.apply(t.t, t, [...x_(n)]);
                }
            },
            getSSRProps: e => {
                const [t] = o(e);
                return { textContent: t };
            }
        };
    }(o));
}
const y_ = vS('global-vue-i18n');
function S_(e = {}) {
    const o = xr();
    if (null == o) {
        throw Yw(Kw.MUST_BE_CALL_SETUP_TOP);
    }
    if (!o.isCE && null != o.appContext.app && !o.appContext.app.__VUE_I18N_SYMBOL__) {
        throw Yw(Kw.NOT_INSLALLED);
    }
    const t = function (e) {
            {
                const o = ct(e.isCE ? y_ : e.appContext.app.__VUE_I18N_SYMBOL__);
                if (!o) {
                    throw Yw(e.isCE ? Kw.NOT_INSLALLED_WITH_PROVIDE : Kw.UNEXPECTED_ERROR);
                }
                return o;
            }
        }(o), n = function (e) {
            return 'composition' === e.mode ? e.global : e.global.__composer;
        }(t), r = i_(o), i = function (e, o) {
            return wS(e) ? '__i18n' in o ? 'local' : 'global' : e.useScope ? e.useScope : 'local';
        }(e, r);
    if ('global' === i) {
        return function (e, o, t) {
            let n = $S(o.messages) ? o.messages : {};
            '__i18nGlobal' in t && (n = t_(e.locale.value, {
                messages: n,
                __i18n: t.__i18nGlobal
            }));
            const r = Object.keys(n);
            if (r.length && r.forEach(o => {
                    e.mergeLocaleMessage(o, n[o]);
                }), $S(o.datetimeFormats)) {
                const t = Object.keys(o.datetimeFormats);
                t.length && t.forEach(t => {
                    e.mergeDateTimeFormat(t, o.datetimeFormats[t]);
                });
            }
            if ($S(o.numberFormats)) {
                const t = Object.keys(o.numberFormats);
                t.length && t.forEach(t => {
                    e.mergeNumberFormat(t, o.numberFormats[t]);
                });
            }
        }(n, e, r), n;
    }
    if ('parent' === i) {
        let r = function (e, o, t = false) {
            let n = null;
            const r = o.root;
            let i = o.parent;
            for (; null != i;) {
                const o = e;
                if ('composition' === e.mode && (n = o.__getInstance(i)), null != n) {
                    break;
                }
                if (r === i) {
                    break;
                }
                i = i.parent;
            }
            return n;
        }(t, o, e.__useComponent);
        return null == r && (r = n), r;
    }
    const l = t;
    let a = l.__getInstance(o);
    if (null == a) {
        const t = zS({}, e);
        '__i18n' in r && (t.__i18n = r.__i18n);
        n && (t.__root = n);
        a = d_(t);
        (function (e, o, t) {
            Mt(() => {
            }, o);
            Dt(() => {
                e.__deleteInstance(o);
            }, o);
        }(l, o));
        l.__setInstance(o, a);
    }
    return a;
}
const w_ = [
        'locale',
        'fallbackLocale',
        'availableLocales'
    ], __ = [
        't',
        'rt',
        'd',
        'n',
        'tm'
    ];
var z_;
if (mw = function (e, o) {
        if (!$S(e)) {
            return null;
        }
        let t = GS.get(o);
        if (t || (t = function (e) {
                const o = [];
                let t, n, r, i, l, a, s, c = -1, u = 0, d = 0;
                const p = [];
                function f() {
                    const o = e[c + 1];
                    if (5 === u && '\'' === o || 6 === u && '"' === o) {
                        return c++, r = '\\' + o, p[0](), true;
                    }
                }
                for (p[0] = () => {
                        void 0 === n ? n = r : n += r;
                    }, p[1] = () => {
                        void 0 !== n && (o.push(n), n = void 0);
                    }, p[2] = () => {
                        p[0]();
                        d++;
                    }, p[3] = () => {
                        if (d > 0) {
                            d--;
                            u = 4;
                            p[0]();
                        } else {
                            if (d = 0, void 0 === n) {
                                return false;
                            }
                            if (n = VS(n), false === n) {
                                return false;
                            }
                            p[1]();
                        }
                    }; null !== u;) {
                    if (c++, t = e[c], '\\' !== t || !f()) {
                        if (i = US(t), s = NS[u], l = s[i] || s.l || 8, 8 === l) {
                            return;
                        }
                        if (u = l[0], void 0 !== l[1] && (a = p[l[1]], a && (r = t, false === a()))) {
                            return;
                        }
                        if (7 === u) {
                            return o;
                        }
                    }
                }
            }(o), t && GS.set(o, t)), !t) {
            return null;
        }
        const n = t.length;
        let r = e, i = 0;
        for (; i < n;) {
            const e = r[t[i]];
            if (void 0 === e) {
                return null;
            }
            r = e;
            i++;
        }
        return r;
    }, gw = iw, 'boolean' != typeof __INTLIFY_PROD_DEVTOOLS__ && (PS().__INTLIFY_PROD_DEVTOOLS__ = false), __INTLIFY_PROD_DEVTOOLS__) {
    const e = PS();
    e.__INTLIFY__ = true;
    z_ = e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__;
    ow = z_;
}
function T_() {
    const {electron: e} = lb(), o = S_({ useScope: 'global' }), t = Qx.map(e => e.locale), n = e => t.includes(e);
    return {
        ...o,
        setLocale: (t, r = false) => {
            n(t) && (e.setConfigDataByKey('locale', t), r && (o.locale.value = t));
        },
        initLocale: async () => {
            const t = await e.getConfigDataByKey('locale');
            n(t) && (o.locale.value = t);
        }
    };
}
function P_() {
    const {locale: e} = T_(), o = IC(), {
            translateServeList: t,
            isFetch: n,
            isFetchLoading: r,
            languageList: i
        } = wC(o);
    return {
        translateServeList: Er(() => n.value ? t.value.map(o => ({
            id: o.id,
            serveUrl: o.webAddress,
            name: 'en-US' === e.value ? o.en : o.name,
            isOver: o.isOver
        })) : t.value.map(o => ({
            ...o,
            name: 'en-US' === e.value ? o.en : o.name
        }))),
        languageList: i,
        isFetchLoading: r,
        fetchTranslateServe: async () => {
            r.value = true;
            try {
                const {data: o} = await iC.get('/server/allServer', { params: e });
                t.value = o;
                n.value = true;
            } catch (o) {
                n.value = false;
                t.value = Zx;
            } finally {
                r.value = false;
            }
            var e;
        },
        fetchLanguage: async (o = cb.YOUDAO) => {
            const {
                data: t = []
            } = await (n = { type: o }, iC.get('/language/getSupport', { params: n }));
            var n;
            try {
                o !== cb.YOUDAO && t.push({
                    name: '自动识别',
                    abridge: ''
                });
                i.value = null == t ? void 0 : t.map(o => ({
                    label: 'en-US' === e.value ? o.en : o.name,
                    value: o.abridge
                }));
            } catch (r) {
                i.value = [];
            }
        }
    };
}
function E_() {
    const e = xo(''), o = xo(), t = xo(), n = _C(), {electron: r} = lb(), i = hS(), {fetchLanguage: l} = P_(), a = kC(), s = fS(), {t: c} = T_(), u = async () => {
            try {
                const {
                    data: e,
                    code: o
                } = await function (e) {
                    return iC.post(`/user/loginWithToken${ lC(e) }`);
                }({
                    id: n.userInfo.id,
                    token: mb.get(sb.TOKEN)
                });
                return {
                    success: true,
                    code: o,
                    data: e
                };
            } catch (e) {
                return {
                    success: false,
                    code: -1,
                    error: e
                };
            }
        }, d = () => {
            try {
                n.setUserInfo(t.value);
                r.initUserInfo(JSON.stringify(t.value));
            } catch (e) {
            }
        };
    return pt(() => e.value, (e, o) => {
        '' !== o && (d(), l(n.vipType));
    }), {
        clearUserWatch: () => {
            clearInterval(o.value);
            o.value = null;
        },
        updateUser: d,
        watchUserInfo: () => {
            o.value = setInterval(async () => {
                if ('login' === i.name) {
                    return;
                }
                const {
                    success: o,
                    code: n,
                    data: l,
                    error: p
                } = await u();
                var f;
                o && ('' !== e.value && e.value !== (null == l ? void 0 : l.vipType) && r.sendLog({
                    type: 'userTypeChange',
                    message: {
                        beforeVipType: e.value,
                        vipType: null == l ? void 0 : l.vipType
                    }
                }), 4000 === (f = { code: n }).code ? (window.$message.error(c('Login Invalid')), setTimeout(() => {
                    a.clearAll();
                    s.replace({ name: 'login' });
                }, 4000)) : f.error && window.$message.error(f.error), l && l.token && l.id && (t.value = l, e.value = l.vipType, d()));
            }, 3000);
        }
    };
}
const k_ = Tt({
        __name: 'GlobalContainer',
        setup(e) {
            const o = Gv(), t = AC();
            window.$message = o;
            const {
                watchUserInfo: n,
                clearUserWatch: r
            } = E_();
            return Mt(() => {
                n();
                (() => {
                    try {
                        window.fetch('https://app-shanghai.oss-cn-shanghai.aliyuncs.com/latest-x64.yml?' + Date.now()).then(e => e.text()).then(e => {
                            const o = e.match(/version:\s([\d\.]+)/);
                            o && (t.updateInfo = { version: o[1] });
                        });
                    } catch (e) {
                    }
                })();
            }), Dt(() => {
                r();
            }), (e, o) => {
                const t = Kt('router-view');
                return Xn(), or(t);
            };
        }
    }), R_ = Tt({
        __name: 'App',
        setup(e) {
            const o = {
                    common: {
                        primaryColor: '#C19D64',
                        primaryColorHover: '#C19D64',
                        primaryColorPressed: '#C19D64',
                        placeholderColor: 'rgba(232, 209, 159, 1)',
                        textColor2: 'rgba(232, 209, 159, 1)'
                    },
                    Switch: { railColorActive: '#C19D64' },
                    InternalSelectMenu: { color: '#4e4c47' },
                    Form: { labelTextColor: 'rgba(232, 209, 159, 1)' },
                    Input: { placeholderColor: 'rgba(232, 209, 159, 1)' },
                    Checkbox: { border: '1px solid #d4d4d4' }
                }, {initLocale: t} = T_();
            return Mt(() => {
                t();
            }), (e, t) => (Xn(), or(wo(Tm), {
                theme: wo(ib),
                'theme-overrides': o
            }, {
                default: nt(() => [sr(wo(rb), {
                        placement: 'bottom-right',
                        max: 1
                    }, {
                        default: nt(() => [sr(wo(Cg), null, {
                                default: nt(() => [sr(wo(Vv), { placement: 'bottom' }, {
                                        default: nt(() => [sr(k_)]),
                                        _: 1
                                    })]),
                                _: 1
                            })]),
                        _: 1
                    })]),
                _: 1
            }, 8, ['theme']));
        }
    }), L_ = function (e, o, t) {
        return e();
    }, {electron: O_} = lb(), A_ = function (e) {
        const o = _y(e.routes, e), t = e.parseQuery || Yy, n = e.stringifyQuery || Xy, r = e.history, i = nS(), l = nS(), a = nS(), s = Co(cy);
        let c = cy;
        $C && e.scrollBehavior && 'scrollRestoration' in history && (history.scrollRestoration = 'manual');
        const u = HC.bind(null, e => '' + e), d = HC.bind(null, qy), p = HC.bind(null, Ky);
        function f(e, i) {
            if (i = MC({}, i || s.value), 'string' == typeof e) {
                const n = NC(t, e, i.path), l = o.resolve({ path: n.path }, i), a = r.createHref(n.fullPath);
                return MC(n, l, {
                    params: p(l.params),
                    hash: Ky(n.hash),
                    redirectedFrom: void 0,
                    href: a
                });
            }
            let l;
            if ('path' in e) {
                l = MC({}, e, { path: NC(t, e.path, i.path).path });
            } else {
                const o = MC({}, e.params);
                for (const e in o)
                    null == o[e] && delete o[e];
                l = MC({}, e, { params: d(e.params) });
                i.params = d(i.params);
            }
            const a = o.resolve(l, i), c = e.hash || '';
            a.params = u(p(a.params));
            const f = function (e, o) {
                const t = o.query ? e(o.query) : '';
                return o.path + (t && '?') + t + (o.hash || '');
            }(n, MC({}, e, {
                hash: (h = c, Vy(h).replace(jy, '{').replace(Wy, '}').replace(By, '^')),
                path: a.path
            }));
            var h;
            const m = r.createHref(f);
            return MC({
                fullPath: f,
                hash: c,
                query: n === Xy ? Jy(e.query) : e.query || {}
            }, a, {
                redirectedFrom: void 0,
                href: m
            });
        }
        function h(e) {
            return 'string' == typeof e ? NC(t, e, s.value.path) : MC({}, e);
        }
        function m(e, o) {
            if (c !== e) {
                return fy(8, {
                    from: o,
                    to: e
                });
            }
        }
        function g(e) {
            return b(e);
        }
        function v(e) {
            const o = e.matched[e.matched.length - 1];
            if (o && o.redirect) {
                const {redirect: t} = o;
                let n = 'function' == typeof t ? t(e) : t;
                return 'string' == typeof n && (n = n.includes('?') || n.includes('#') ? n = h(n) : { path: n }, n.params = {}), MC({
                    query: e.query,
                    hash: e.hash,
                    params: 'path' in n ? {} : e.params
                }, n);
            }
        }
        function b(e, o) {
            const t = c = f(e), r = s.value, i = e.state, l = e.force, a = true === e.replace, u = v(t);
            if (u) {
                return b(MC(h(u), {
                    state: 'object' == typeof u ? MC({}, i, u.state) : i,
                    force: l,
                    replace: a
                }), o || t);
            }
            const d = t;
            let p;
            return d.redirectedFrom = o, !l && function (e, o, t) {
                const n = o.matched.length - 1, r = t.matched.length - 1;
                return n > -1 && n === r && UC(o.matched[n], t.matched[r]) && VC(o.params, t.params) && e(o.query) === e(t.query) && o.hash === t.hash;
            }(n, r, t) && (p = fy(16, {
                to: d,
                from: r
            }), R(r, r, true, false)), (p ? Promise.resolve(p) : C(d, r)).catch(e => hy(e) ? hy(e, 2) ? e : k(e) : E(e, d, r)).then(e => {
                if (e) {
                    if (hy(e, 2)) {
                        return b(MC({ replace: a }, h(e.to), {
                            state: 'object' == typeof e.to ? MC({}, i, e.to.state) : i,
                            force: l
                        }), o || d);
                    }
                } else {
                    e = S(d, r, true, a, i);
                }
                return y(d, r, e), e;
            });
        }
        function x(e, o) {
            const t = m(e, o);
            return t ? Promise.reject(t) : Promise.resolve();
        }
        function C(e, o) {
            let t;
            const [n, r, a] = function (e, o) {
                const t = [], n = [], r = [], i = Math.max(o.matched.length, e.matched.length);
                for (let l = 0; l < i; l++) {
                    const i = o.matched[l];
                    i && (e.matched.find(e => UC(e, i)) ? n.push(i) : t.push(i));
                    const a = e.matched[l];
                    a && (o.matched.find(e => UC(e, a)) || r.push(a));
                }
                return [
                    t,
                    n,
                    r
                ];
            }(e, o);
            t = iS(n.reverse(), 'beforeRouteLeave', e, o);
            for (const i of n)
                i.leaveGuards.forEach(n => {
                    t.push(rS(n, e, o));
                });
            const s = x.bind(null, e, o);
            return t.push(s), pS(t).then(() => {
                t = [];
                for (const n of i.list())
                    t.push(rS(n, e, o));
                return t.push(s), pS(t);
            }).then(() => {
                t = iS(r, 'beforeRouteUpdate', e, o);
                for (const n of r)
                    n.updateGuards.forEach(n => {
                        t.push(rS(n, e, o));
                    });
                return t.push(s), pS(t);
            }).then(() => {
                t = [];
                for (const n of e.matched)
                    if (n.beforeEnter && !o.matched.includes(n)) {
                        if (BC(n.beforeEnter)) {
                            for (const r of n.beforeEnter)
                                t.push(rS(r, e, o));
                        } else {
                            t.push(rS(n.beforeEnter, e, o));
                        }
                    }
                return t.push(s), pS(t);
            }).then(() => (e.matched.forEach(e => e.enterCallbacks = {}), t = iS(a, 'beforeRouteEnter', e, o), t.push(s), pS(t))).then(() => {
                t = [];
                for (const n of l.list())
                    t.push(rS(n, e, o));
                return t.push(s), pS(t);
            }).catch(e => hy(e, 8) ? e : Promise.reject(e));
        }
        function y(e, o, t) {
            for (const n of a.list())
                n(e, o, t);
        }
        function S(e, o, t, n, i) {
            const l = m(e, o);
            if (l) {
                return l;
            }
            const a = o === cy, c = $C ? history.state : {};
            t && (n || a ? r.replace(e.fullPath, MC({ scroll: a && c && c.scroll }, i)) : r.push(e.fullPath, i));
            s.value = e;
            R(e, o, t, a);
            k();
        }
        let w;
        function _() {
            w || (w = r.listen((e, o, t) => {
                if (!I.listening) {
                    return;
                }
                const n = f(e), i = v(n);
                if (i) {
                    return void b(MC(i, { replace: true }), n).catch(FC);
                }
                c = n;
                const l = s.value;
                var a, u;
                $C && (a = ty(l.fullPath, t.delta), u = ey(), ny.set(a, u));
                C(n, l).catch(e => hy(e, 12) ? e : hy(e, 2) ? (b(e.to, n).then(e => {
                    hy(e, 20) && !t.delta && t.type === KC.pop && r.go(-1, false);
                }).catch(FC), Promise.reject()) : (t.delta && r.go(-t.delta, false), E(e, n, l))).then(e => {
                    (e = e || S(n, l, false)) && (t.delta && !hy(e, 8) ? r.go(-t.delta, false) : t.type === KC.pop && hy(e, 20) && r.go(-1, false));
                    y(n, l, e);
                }).catch(FC);
            }));
        }
        let z, T = nS(), P = nS();
        function E(e, o, t) {
            k(e);
            const n = P.list();
            return n.length && n.forEach(n => n(e, o, t)), Promise.reject(e);
        }
        function k(e) {
            return z || (z = !e, _(), T.list().forEach(([o, t]) => e ? t(e) : o()), T.reset()), e;
        }
        function R(o, t, n, r) {
            const {scrollBehavior: i} = e;
            if (!$C || !i) {
                return Promise.resolve();
            }
            const l = !n && function (e) {
                const o = ny.get(e);
                return ny.delete(e), o;
            }(ty(o.fullPath, 0)) || (r || !n) && history.state && history.state.scroll || null;
            return Wo().then(() => i(o, t, l)).then(e => e && oy(e)).catch(e => E(e, o, t));
        }
        const L = e => r.go(e);
        let O;
        const A = new Set(), I = {
                currentRoute: s,
                listening: true,
                addRoute: function (e, t) {
                    let n, r;
                    return sy(e) ? (n = o.getRecordMatcher(e), r = t) : r = e, o.addRoute(r, n);
                },
                removeRoute: function (e) {
                    const t = o.getRecordMatcher(e);
                    t && o.removeRoute(t);
                },
                hasRoute: function (e) {
                    return !!o.getRecordMatcher(e);
                },
                getRoutes: function () {
                    return o.getRoutes().map(e => e.record);
                },
                resolve: f,
                options: e,
                push: g,
                replace: function (e) {
                    return g(MC(h(e), { replace: true }));
                },
                go: L,
                back: () => L(-1),
                forward: () => L(1),
                beforeEach: i.add,
                beforeResolve: l.add,
                afterEach: a.add,
                onError: P.add,
                isReady: function () {
                    return z && s.value !== cy ? Promise.resolve() : new Promise((e, o) => {
                        T.add([
                            e,
                            o
                        ]);
                    });
                },
                install(e) {
                    e.component('RouterLink', aS);
                    e.component('RouterView', dS);
                    e.config.globalProperties.$router = this;
                    Object.defineProperty(e.config.globalProperties, '$route', {
                        enumerable: true,
                        get: () => wo(s)
                    });
                    $C && !O && s.value === cy && (O = true, g(r.location).catch(e => {
                    }));
                    const o = { n: Er(() => s.value[n]) };
                    for (const n in cy);
                    e.provide(eS, this);
                    e.provide(oS, ro(o));
                    e.provide(tS, s);
                    const t = e.unmount;
                    A.add(e);
                    e.unmount = function () {
                        A.delete(e);
                        A.size < 1 && (c = cy, w && w(), w = null, s.value = cy, O = false, z = false);
                        t();
                    };
                }
            };
        return I;
    }({
        history: ((I_ = location.host ? I_ || location.pathname + location.search : '').includes('#') || (I_ += '#'), ay(I_)),
        routes: [
            {
                path: '/',
                redirect: '/login'
            },
            {
                path: '/login',
                name: 'login',
                component: () => L_(() => Promise.resolve().then(() => require('./login.fcab1b18.js')), 0, 'undefined' == typeof document ? new (require('url')).URL('file:' + __filename).href : document.currentScript && document.currentScript.src || new URL('index.3840a89d.js', document.baseURI).href)
            },
            {
                path: '/layout',
                name: 'layout',
                component: () => L_(() => Promise.resolve().then(() => require('./index.6c91788b.js')), 0, 'undefined' == typeof document ? new (require('url')).URL('file:' + __filename).href : document.currentScript && document.currentScript.src || new URL('index.3840a89d.js', document.baseURI).href),
                redirect: '/layout/home',
                children: [
                    {
                        path: 'home',
                        name: 'home',
                        component: () => L_(() => Promise.resolve().then(() => require('./index.202a70b7.js')), 0, 'undefined' == typeof document ? new (require('url')).URL('file:' + __filename).href : document.currentScript && document.currentScript.src || new URL('index.3840a89d.js', document.baseURI).href)
                    },
                    {
                        path: 'set',
                        name: 'set',
                        component: () => L_(() => Promise.resolve().then(() => require('./index.f78f188b.js')).then(e => e.index), 0, 'undefined' == typeof document ? new (require('url')).URL('file:' + __filename).href : document.currentScript && document.currentScript.src || new URL('index.3840a89d.js', document.baseURI).href)
                    },
                    {
                        path: 'mine',
                        name: 'mine',
                        component: () => L_(() => Promise.resolve().then(() => require('./index.d4d303ea.js')), 0, 'undefined' == typeof document ? new (require('url')).URL('file:' + __filename).href : document.currentScript && document.currentScript.src || new URL('index.3840a89d.js', document.baseURI).href)
                    },
                    {
                        path: 'appview',
                        name: 'appview',
                        component: () => L_(() => Promise.resolve().then(() => require('./index.1abd9695.js')).then(e => e.index), 0, 'undefined' == typeof document ? new (require('url')).URL('file:' + __filename).href : document.currentScript && document.currentScript.src || new URL('index.3840a89d.js', document.baseURI).href)
                    }
                ]
            },
            {
                path: '/lockScreen',
                name: 'lockScreen',
                component: () => L_(() => Promise.resolve().then(() => require('./index.2227d7e5.js')), 0, 'undefined' == typeof document ? new (require('url')).URL('file:' + __filename).href : document.currentScript && document.currentScript.src || new URL('index.3840a89d.js', document.baseURI).href)
            }
        ]
    });
var I_;
A_.beforeEach((e, o) => {
    const t = mb.get(sb.TOKEN), n = O_.getUserData(), r = OC(), i = _C();
    if (zC(t) || zC(n)) {
        return 'login' !== e.name ? { name: 'login' } : void 0;
    }
    if ('login' === e.name) {
        return r.setCurrentMenuType(db.HOME), { name: 'home' };
    }
    if ('login' === o.name && r.setCurrentMenuType(db.HOME), i.isLock && 'lockScreen' !== e.name) {
        return { name: 'lockScreen' };
    }
    return void (r.appList.some(e => r.currentAppId === e.appId) && r.setCurrentMenuType(r.currentApp.type));
});
const $_ = (e, o) => {
        const t = e.__vccOpts || e;
        for (const [n, r] of o)
            t[n] = r;
        return t;
    }, M_ = $_(Tt({
        __name: 'BaseLayout',
        props: {
            isFloat: {
                type: Boolean,
                default: false
            }
        },
        setup: e => (o, t) => (Xn(), er('div', {
            class: l([
                'base-layout',
                { float: e.isFloat }
            ])
        }, [Jt(o.$slots, 'default', {}, void 0, true)], 2))
    }), [[
            '__scopeId',
            'data-v-143ee888'
        ]]), H_ = ['href'], F_ = $_(Tt({
        __name: 'SvgIcon',
        props: {
            prefix: {
                type: String,
                default: 'icon'
            },
            name: {
                type: String,
                required: true
            },
            color: { type: String },
            className: { type: String },
            size: { type: Number }
        },
        setup(e) {
            const t = e, n = Er(() => `#${ t.prefix }-${ t.name }`), r = Er(() => /^(https?:)/.test(t.name)), i = Er(() => {
                    const e = {};
                    return r && (e['--svg-icon-url'] = `url(${ t.name })`), t.size && (e.fontSize = t.size + 'px'), e;
                });
            return (t, a) => wo(r) ? (Xn(), er('div', {
                key: 0,
                style: o(wo(i)),
                class: l([
                    'svg-icon svg-icon-online',
                    e.className
                ])
            }, null, 6)) : (Xn(), er('svg', {
                key: 1,
                'aria-hidden': 'true',
                style: o({ fontSize: e.size + 'px' }),
                class: l([
                    'svg-icon',
                    e.className
                ])
            }, [ar('use', { href: wo(n) }, null, 8, H_)], 6));
        }
    }), [[
            '__scopeId',
            'data-v-31da7214'
        ]]), B_ = function (e = {}, o) {
        const t = !IS(e.globalInjection) || e.globalInjection, n = new Map(), [r, i] = function (e, o, t) {
                const n = J();
                {
                    const o = n.run(() => d_(e));
                    if (null == o) {
                        throw Yw(Kw.UNEXPECTED_ERROR);
                    }
                    return [
                        n,
                        o
                    ];
                }
            }(e), l = vS('');
        {
            const e = {
                get mode() {
                    return 'composition';
                },
                get allowComposition() {
                    return true;
                },
                async install(o, ...n) {
                    o.__VUE_I18N_SYMBOL__ = l;
                    o.provide(o.__VUE_I18N_SYMBOL__, e);
                    t && function (e, o) {
                        const t = Object.create(null);
                        w_.forEach(e => {
                            const n = Object.getOwnPropertyDescriptor(o, e);
                            if (!n) {
                                throw Yw(Kw.UNEXPECTED_ERROR);
                            }
                            const r = bo(n.value) ? {
                                get: () => n.value.value,
                                set(e) {
                                    n.value.value = e;
                                }
                            } : { get: () => n.get && n.get() };
                            Object.defineProperty(t, e, r);
                        });
                        e.config.globalProperties.$i18n = t;
                        __.forEach(t => {
                            const n = Object.getOwnPropertyDescriptor(o, t);
                            if (!n || !n.value) {
                                throw Yw(Kw.UNEXPECTED_ERROR);
                            }
                            Object.defineProperty(e.config.globalProperties, `$${ t }`, n);
                        });
                    }(o, e.global);
                    C_(o, e, ...n);
                    const r = o.unmount;
                    o.unmount = () => {
                        e.dispose();
                        r();
                    };
                },
                get global() {
                    return i;
                },
                dispose() {
                    r.stop();
                },
                __instances: n,
                __getInstance: function (e) {
                    return n.get(e) || null;
                },
                __setInstance: function (e, o) {
                    n.set(e, o);
                },
                __deleteInstance: function (e) {
                    n.delete(e);
                }
            };
            return e;
        }
    }({
        locale: 'zh-CN',
        legacy: false,
        fallbackLocale: 'zh-CN',
        messages: {
            'zh-CN': {
                Loading: e => {
                    const {normalize: o} = e;
                    return o(['加载中']);
                },
                Cancel: e => {
                    const {normalize: o} = e;
                    return o(['取消']);
                },
                Timeout: e => {
                    const {normalize: o} = e;
                    return o(['超时']);
                },
                Modify: e => {
                    const {normalize: o} = e;
                    return o(['修改']);
                },
                Host: e => {
                    const {normalize: o} = e;
                    return o(['主机地址']);
                },
                Port: e => {
                    const {normalize: o} = e;
                    return o(['端口']);
                },
                Name: e => {
                    const {normalize: o} = e;
                    return o(['名称']);
                },
                ShowName: e => {
                    const {normalize: o} = e;
                    return o(['显示名称']);
                },
                'Login please': e => {
                    const {normalize: o} = e;
                    return o(['欢迎登录']);
                },
                Username: e => {
                    const {normalize: o} = e;
                    return o(['用户名']);
                },
                'Enter your user name': e => {
                    const {normalize: o} = e;
                    return o(['输入用户名']);
                },
                Password: e => {
                    const {normalize: o} = e;
                    return o(['密码']);
                },
                'Enter password': e => {
                    const {normalize: o} = e;
                    return o(['输入密码']);
                },
                'Translation server': e => {
                    const {normalize: o} = e;
                    return o(['翻译服务器']);
                },
                language: e => {
                    const {normalize: o} = e;
                    return o(['登陆语言']);
                },
                Login: e => {
                    const {normalize: o} = e;
                    return o(['登陆']);
                },
                'Sign up now': e => {
                    const {normalize: o} = e;
                    return o(['立即注册']);
                },
                'Forgot password': e => {
                    const {normalize: o} = e;
                    return o(['忘记密码']);
                },
                'please enter user name': e => {
                    const {normalize: o} = e;
                    return o(['请输入用户名']);
                },
                'Please enter your password': e => {
                    const {normalize: o} = e;
                    return o(['请输入密码']);
                },
                'Please select a translation server': e => {
                    const {normalize: o} = e;
                    return o(['请选择翻译服务器']);
                },
                'Please select a login language': e => {
                    const {normalize: o} = e;
                    return o(['请选择登陆语言']);
                },
                'Basic Package (Youdao)': e => {
                    const {normalize: o} = e;
                    return o(['基础套餐 (有道)']);
                },
                'Premium Plan (Google)': e => {
                    const {normalize: o} = e;
                    return o(['高级套餐 (谷歌)']);
                },
                'Pro Package (DeepL)': e => {
                    const {normalize: o} = e;
                    return o(['专业套餐 (DeepL)']);
                },
                'Trial \xB7 Youdao': e => {
                    const {normalize: o} = e;
                    return o(['试用\xB7有道']);
                },
                'Domestic Server': e => {
                    const {normalize: o} = e;
                    return o(['国内服务器']);
                },
                'Overseas Server': e => {
                    const {normalize: o} = e;
                    return o(['海外服务器']);
                },
                'Show in taskbar': e => {
                    const {normalize: o} = e;
                    return o(['在任务栏中显示']);
                },
                'Show in system tray': e => {
                    const {normalize: o} = e;
                    return o(['在系统托盘中显示']);
                },
                'Show in taskbar and system tray': e => {
                    const {normalize: o} = e;
                    return o(['在任务栏和系统托盘中显示']);
                },
                'Minimize the system': e => {
                    const {normalize: o} = e;
                    return o(['最小化系统']);
                },
                'Exit system': e => {
                    const {normalize: o} = e;
                    return o(['退出系统']);
                },
                WeChat: e => {
                    const {normalize: o} = e;
                    return o(['微信']);
                },
                'WeChat customer service': e => {
                    const {normalize: o} = e;
                    return o(['微信客服']);
                },
                Telegram: e => {
                    const {normalize: o} = e;
                    return o(['飞机']);
                },
                'Customer Service': e => {
                    const {normalize: o} = e;
                    return o(['联系客服']);
                },
                Recharge: e => {
                    const {normalize: o} = e;
                    return o(['充值']);
                },
                'Go to recharge': e => {
                    const {normalize: o} = e;
                    return o(['前往充值']);
                },
                'Official website': e => {
                    const {normalize: o} = e;
                    return o(['官网']);
                },
                'Go to the official website': e => {
                    const {normalize: o} = e;
                    return o(['前往官网']);
                },
                'Add to': e => {
                    const {normalize: o} = e;
                    return o(['添加']);
                },
                'The upper limit for a single application is {limit}': e => {
                    const {
                        normalize: o,
                        interpolate: t,
                        named: n
                    } = e;
                    return o([
                        '单应用上限为',
                        t(n('limit')),
                        '个'
                    ]);
                },
                'Quick Reply': e => {
                    const {normalize: o} = e;
                    return o(['快捷回复']);
                },
                'Example: Good morning': e => {
                    const {normalize: o} = e;
                    return o(['例如\uFF1A早上好']);
                },
                Add: e => {
                    const {normalize: o} = e;
                    return o(['添加']);
                },
                'Common replies': e => {
                    const {normalize: o} = e;
                    return o(['常用回复']);
                },
                'No Data': e => {
                    const {normalize: o} = e;
                    return o(['暂无']);
                },
                'Content already exists': e => {
                    const {normalize: o} = e;
                    return o(['内容已存在']);
                },
                'Translation Settings': e => {
                    const {normalize: o} = e;
                    return o(['翻译设置']);
                },
                'Send translation': e => {
                    const {normalize: o} = e;
                    return o(['发送翻译']);
                },
                'Send language': e => {
                    const {normalize: o} = e;
                    return o(['发送语言']);
                },
                'Send translation language': e => {
                    const {normalize: o} = e;
                    return o(['发送翻译语言']);
                },
                'Receive translation': e => {
                    const {normalize: o} = e;
                    return o(['接收翻译']);
                },
                'Receive language': e => {
                    const {normalize: o} = e;
                    return o(['接收语言']);
                },
                'Accept language': e => {
                    const {normalize: o} = e;
                    return o(['接受语言']);
                },
                'Receive translation language': e => {
                    const {normalize: o} = e;
                    return o(['接收翻译语言']);
                },
                'Group translation': e => {
                    const {normalize: o} = e;
                    return o(['群组翻译']);
                },
                'Font size': e => {
                    const {normalize: o} = e;
                    return o(['字体大小']);
                },
                'Font color': e => {
                    const {normalize: o} = e;
                    return o(['字体颜色']);
                },
                'Please enter the application name': e => {
                    const {normalize: o} = e;
                    return o(['请输入应用名称']);
                },
                'Please set the translation type': e => {
                    const {normalize: o} = e;
                    return o(['请设置翻译类型']);
                },
                'Please select the sending language': e => {
                    const {normalize: o} = e;
                    return o(['请选择发送语言']);
                },
                'Please select the language to send the translation': e => {
                    const {normalize: o} = e;
                    return o(['请选择发送翻译语言']);
                },
                'Please choose to accept the language': e => {
                    const {normalize: o} = e;
                    return o(['请选择接受语言']);
                },
                'Please choose to receive translation language': e => {
                    const {normalize: o} = e;
                    return o(['请选择接收翻译语言']);
                },
                'Please set the font size': e => {
                    const {normalize: o} = e;
                    return o(['请设置字体大小']);
                },
                'Please set the font color': e => {
                    const {normalize: o} = e;
                    return o(['请设置字体颜色']);
                },
                'Successfully modified': e => {
                    const {normalize: o} = e;
                    return o(['修改成功']);
                },
                'Loading { text }, please wait...': e => {
                    const {
                        normalize: o,
                        interpolate: t,
                        named: n
                    } = e;
                    return o([
                        '加载 ',
                        t(n('text')),
                        ' 中, 请稍等...'
                    ]);
                },
                'Network connection timed out': e => {
                    const {normalize: o} = e;
                    return o(['网络连接超时']);
                },
                'Connection refused': e => {
                    const {normalize: o} = e;
                    return o(['连接拒绝']);
                },
                'Failed to load { text }': e => {
                    const {
                        normalize: o,
                        interpolate: t,
                        named: n
                    } = e;
                    return o([
                        '加载 ',
                        t(n('text')),
                        ' 失败'
                    ]);
                },
                'Account Management': e => {
                    const {normalize: o} = e;
                    return o(['账号管理']);
                },
                username: e => {
                    const {normalize: o} = e;
                    return o(['用户名']);
                },
                Mail: e => {
                    const {normalize: o} = e;
                    return o(['邮箱']);
                },
                'Package Type': e => {
                    const {normalize: o} = e;
                    return o(['套餐类型']);
                },
                'Number of remaining characters': e => {
                    const {normalize: o} = e;
                    return o(['剩余字符数']);
                },
                'Registration time': e => {
                    const {normalize: o} = e;
                    return o(['注册时间']);
                },
                'Sign out': e => {
                    const {normalize: o} = e;
                    return o(['退出登录']);
                },
                'Current version': e => {
                    const {normalize: o} = e;
                    return o(['当前版本']);
                },
                'Check version': e => {
                    const {normalize: o} = e;
                    return o(['检测更新']);
                },
                'New version found': e => {
                    const {normalize: o} = e;
                    return o(['立即安装']);
                },
                'Detected a new version v{version}': e => {
                    const {
                        normalize: o,
                        interpolate: t,
                        named: n
                    } = e;
                    return o([
                        '检测到新版本 v',
                        t(n('version'))
                    ]);
                },
                'Current version v {version}': e => {
                    const {
                        normalize: o,
                        interpolate: t,
                        named: n
                    } = e;
                    return o([
                        '当前版本 v ',
                        t(n('version'))
                    ]);
                },
                'Global Settings': e => {
                    const {normalize: o} = e;
                    return o(['全局设置']);
                },
                'Clear cache': e => {
                    const {normalize: o} = e;
                    return o(['清除缓存']);
                },
                'Clear data': e => {
                    const {normalize: o} = e;
                    return o(['清空数据']);
                },
                'This application language': e => {
                    const {normalize: o} = e;
                    return o(['本应用语言']);
                },
                'System language': e => {
                    const {normalize: o} = e;
                    return o(['系统语言']);
                },
                'Minimize after startup': e => {
                    const {normalize: o} = e;
                    return o(['启动后最小化']);
                },
                'Online update': e => {
                    const {normalize: o} = e;
                    return o(['在线更新']);
                },
                Autostart: e => {
                    const {normalize: o} = e;
                    return o(['自动启动']);
                },
                'Client display': e => {
                    const {normalize: o} = e;
                    return o(['客户端显示']);
                },
                'When the application pop-up window is closed': e => {
                    const {normalize: o} = e;
                    return o(['关闭应用弹窗时']);
                },
                'Proxy settings': e => {
                    const {normalize: o} = e;
                    return o(['代理设置']);
                },
                'If the computer has already turned on the VPN, please do not set it up, it may easily cause network conflicts': e => {
                    const {normalize: o} = e;
                    return o(['电脑已开启VPN的请勿进行设置\uFF0C容易引起网络冲突']);
                },
                Save: e => {
                    const {normalize: o} = e;
                    return o(['保存']);
                },
                Cache: e => {
                    const {normalize: o} = e;
                    return o(['缓存']);
                },
                Cleanup: e => {
                    const {normalize: o} = e;
                    return o(['清理']);
                },
                'Cache is temporary data generated during use, and clearing the cache will not affect the normal use of the application. ': e => {
                    const {normalize: o} = e;
                    return o(['缓存是使用过程中产生的临时数据\uFF0C清理缓存不会影响应用的正常使用\u3002']);
                },
                'This will delete data including <em>quick reply</em> and <em>chat translation</em>, are you sure? ': e => {
                    const {normalize: o} = e;
                    return o(['这将删除包括<em>快捷回复</em>和<em>聊天中翻译数据</em>\uFF0C是否确定\uFF1F']);
                },
                'Clear the data of the local application (including quick reply and translation data in chat). ': e => {
                    const {normalize: o} = e;
                    return o(['将本地应用的数据清空\uFF08包括快捷回复和聊天中翻译数据\uFF09\u3002']);
                },
                'Please enter IP': e => {
                    const {normalize: o} = e;
                    return o(['请输入IP']);
                },
                'Please enter the port': e => {
                    const {normalize: o} = e;
                    return o(['请输入端口']);
                },
                Success: e => {
                    const {normalize: o} = e;
                    return o(['成功']);
                },
                'Saved successfully, it will take effect after restart': e => {
                    const {normalize: o} = e;
                    return o(['保存成功\uFF0C将在重启后生效']);
                },
                'Restart now': e => {
                    const {normalize: o} = e;
                    return o(['立即重启']);
                },
                'Clear failed': e => {
                    const {normalize: o} = e;
                    return o(['清除失败']);
                },
                'Clear successfully': e => {
                    const {normalize: o} = e;
                    return o(['清除成功']);
                },
                'About LookWorld': e => {
                    const {normalize: o} = e;
                    return o(['关于LookWorld']);
                },
                'Application Center': e => {
                    const {normalize: o} = e;
                    return o(['应用中心']);
                },
                Settings: e => {
                    const {normalize: o} = e;
                    return o(['设置']);
                },
                'Personal Center': e => {
                    const {normalize: o} = e;
                    return o(['个人中心']);
                },
                Enable: e => {
                    const {normalize: o} = e;
                    return o(['启用']);
                },
                Beep: e => {
                    const {normalize: o} = e;
                    return o(['提示音']);
                },
                'Lock screen': e => {
                    const {normalize: o} = e;
                    return o(['锁屏']);
                },
                'Restart application': e => {
                    const {normalize: o} = e;
                    return o(['重启应用']);
                },
                'Refresh server': e => {
                    const {normalize: o} = e;
                    return o(['刷新服务器']);
                },
                'Modify Application': e => {
                    const {normalize: o} = e;
                    return o(['修改应用']);
                },
                'Delete app': e => {
                    const {normalize: o} = e;
                    return o(['删除应用']);
                },
                'Developer Tools': e => {
                    const {normalize: o} = e;
                    return o(['开发者工具']);
                },
                'Refresh application': e => {
                    const {normalize: o} = e;
                    return o(['刷新应用']);
                },
                'Refresh app (forced)': e => {
                    const {normalize: o} = e;
                    return o(['刷新应用\uFF08强制\uFF09']);
                },
                'Network Error': e => {
                    const {normalize: o} = e;
                    return o(['网络错误']);
                },
                'Locked, please enter the unlock password': e => {
                    const {normalize: o} = e;
                    return o(['应用已锁定\uFF0C请输入密码解锁']);
                },
                'Unlocked successfully': e => {
                    const {normalize: o} = e;
                    return o(['解锁成功']);
                },
                'The password is incorrect': e => {
                    const {normalize: o} = e;
                    return o(['密码错误']);
                },
                'Login Invalid': e => {
                    const {normalize: o} = e;
                    return o(['登录失效']);
                },
                'New version detected, please click to start updating': e => {
                    const {normalize: o} = e;
                    return o(['检测到新版本\uFF0C点击开始下载']);
                },
                'The download is complete, click to install': e => {
                    const {normalize: o} = e;
                    return o(['下载完成\uFF0C点击安装']);
                },
                Downloading: e => {
                    const {normalize: o} = e;
                    return o(['下载中']);
                },
                'Start download': e => {
                    const {normalize: o} = e;
                    return o(['开始下载']);
                },
                'Exit and install': e => {
                    const {normalize: o} = e;
                    return o(['退出并安装']);
                },
                'Network error': e => {
                    const {normalize: o} = e;
                    return o(['网络错误']);
                },
                'The network is not connected, please check the network or restart the application': e => {
                    const {normalize: o} = e;
                    return o(['网络未连接\uFF0C请检查网络或重启应用']);
                },
                'Failed to update characters, please switch server and log in again': e => {
                    const {normalize: o} = e;
                    return o(['更新字符失败\uFF0C请切换服务器重新登陆']);
                },
                'Copy success': e => {
                    const {normalize: o} = e;
                    return o(['复制成功']);
                },
                'Troubleshooting download': e => {
                    const {normalize: o} = e;
                    return o(['故障检测下载']);
                },
                'Fault detection file is being generated, please wait': e => {
                    const {normalize: o} = e;
                    return o(['故障检测文件生成中\uFF0C请稍候']);
                },
                'Refresh all': e => {
                    const {normalize: o} = e;
                    return o(['刷新全部']);
                },
                'Close all': e => {
                    const {normalize: o} = e;
                    return o(['关闭全部']);
                },
                'Shared master account characters': e => {
                    const {normalize: o} = e;
                    return o(['(共享主账号字符)']);
                }
            },
            'en-US': {
                Loading: e => {
                    const {normalize: o} = e;
                    return o(['Loading']);
                },
                Cancel: e => {
                    const {normalize: o} = e;
                    return o(['Cancel']);
                },
                Timeout: e => {
                    const {normalize: o} = e;
                    return o(['Timeout']);
                },
                Modify: e => {
                    const {normalize: o} = e;
                    return o(['Modify']);
                },
                Host: e => {
                    const {normalize: o} = e;
                    return o(['Host']);
                },
                Port: e => {
                    const {normalize: o} = e;
                    return o(['Port']);
                },
                Name: e => {
                    const {normalize: o} = e;
                    return o(['Name']);
                },
                ShowName: e => {
                    const {normalize: o} = e;
                    return o(['ShowName']);
                },
                'Login please': e => {
                    const {normalize: o} = e;
                    return o(['Login please']);
                },
                Username: e => {
                    const {normalize: o} = e;
                    return o(['Username']);
                },
                'Enter your user name': e => {
                    const {normalize: o} = e;
                    return o(['Enter your username']);
                },
                Password: e => {
                    const {normalize: o} = e;
                    return o(['Password']);
                },
                'Enter password': e => {
                    const {normalize: o} = e;
                    return o(['Enter password']);
                },
                'Translation server': e => {
                    const {normalize: o} = e;
                    return o(['Translation server']);
                },
                language: e => {
                    const {normalize: o} = e;
                    return o(['language']);
                },
                Login: e => {
                    const {normalize: o} = e;
                    return o(['Login']);
                },
                'Sign up now': e => {
                    const {normalize: o} = e;
                    return o(['Sign up now']);
                },
                'Forgot password': e => {
                    const {normalize: o} = e;
                    return o(['Forgot password']);
                },
                'please enter user name': e => {
                    const {normalize: o} = e;
                    return o(['please enter user name']);
                },
                'Please enter your password': e => {
                    const {normalize: o} = e;
                    return o(['Please enter your password']);
                },
                'Please select a translation server': e => {
                    const {normalize: o} = e;
                    return o(['Please select a translation server']);
                },
                'Please select a login language': e => {
                    const {normalize: o} = e;
                    return o(['Please select a login language']);
                },
                'Basic Package (Youdao)': e => {
                    const {normalize: o} = e;
                    return o(['Basic Package (Youdao)']);
                },
                'Premium Plan (Google)': e => {
                    const {normalize: o} = e;
                    return o(['Premium Plan (Google)']);
                },
                'Pro Package (DeepL)': e => {
                    const {normalize: o} = e;
                    return o(['Pro Package (DeepL)']);
                },
                'Trial \xB7 Youdao': e => {
                    const {normalize: o} = e;
                    return o(['Trial \xB7 Youdao']);
                },
                'Domestic Server': e => {
                    const {normalize: o} = e;
                    return o(['Domestic Server']);
                },
                'Overseas Server': e => {
                    const {normalize: o} = e;
                    return o(['Overseas Server']);
                },
                'Show in taskbar': e => {
                    const {normalize: o} = e;
                    return o(['Show in taskbar']);
                },
                'Show in system tray': e => {
                    const {normalize: o} = e;
                    return o(['Show in system tray']);
                },
                'Show in taskbar and system tray': e => {
                    const {normalize: o} = e;
                    return o(['Show in taskbar and system tray']);
                },
                'Minimize the system': e => {
                    const {normalize: o} = e;
                    return o(['Minimize the system']);
                },
                'Exit system': e => {
                    const {normalize: o} = e;
                    return o(['Exit system']);
                },
                WeChat: e => {
                    const {normalize: o} = e;
                    return o(['WeChat']);
                },
                'WeChat customer service': e => {
                    const {normalize: o} = e;
                    return o(['Customer Service']);
                },
                Telegram: e => {
                    const {normalize: o} = e;
                    return o(['Telegram']);
                },
                'Customer Service': e => {
                    const {normalize: o} = e;
                    return o(['Customer Service']);
                },
                Recharge: e => {
                    const {normalize: o} = e;
                    return o(['Recharge']);
                },
                'Go to recharge': e => {
                    const {normalize: o} = e;
                    return o(['Go to recharge']);
                },
                'Official website': e => {
                    const {normalize: o} = e;
                    return o(['Official website']);
                },
                'Go to the official website': e => {
                    const {normalize: o} = e;
                    return o(['Go to the official website']);
                },
                'Add to': e => {
                    const {normalize: o} = e;
                    return o(['Add to']);
                },
                'The upper limit for a single application is {limit}': e => {
                    const {
                        normalize: o,
                        interpolate: t,
                        named: n
                    } = e;
                    return o([
                        'The upper limit for a single application is ',
                        t(n('limit'))
                    ]);
                },
                'Quick Reply': e => {
                    const {normalize: o} = e;
                    return o(['Quick Reply']);
                },
                'Example: Good morning': e => {
                    const {normalize: o} = e;
                    return o(['Example: Good morning']);
                },
                Add: e => {
                    const {normalize: o} = e;
                    return o(['Add']);
                },
                'Common replies': e => {
                    const {normalize: o} = e;
                    return o(['Common replies']);
                },
                'No Data': e => {
                    const {normalize: o} = e;
                    return o(['No Data']);
                },
                'Content already exists': e => {
                    const {normalize: o} = e;
                    return o(['Content already exists']);
                },
                'Translation Settings': e => {
                    const {normalize: o} = e;
                    return o(['Translation Settings']);
                },
                'Send translation': e => {
                    const {normalize: o} = e;
                    return o(['Send translation']);
                },
                'Send language': e => {
                    const {normalize: o} = e;
                    return o(['Send language']);
                },
                'Send translation language': e => {
                    const {normalize: o} = e;
                    return o(['Send translation language']);
                },
                'Receive translation': e => {
                    const {normalize: o} = e;
                    return o(['Receive translation']);
                },
                'Receive language': e => {
                    const {normalize: o} = e;
                    return o(['Receive language']);
                },
                'Accept language': e => {
                    const {normalize: o} = e;
                    return o(['Accept language']);
                },
                'Receive translation language': e => {
                    const {normalize: o} = e;
                    return o(['Receive translation language']);
                },
                'Group translation': e => {
                    const {normalize: o} = e;
                    return o(['Group translation']);
                },
                'Font size': e => {
                    const {normalize: o} = e;
                    return o(['Font size']);
                },
                'Font color': e => {
                    const {normalize: o} = e;
                    return o(['Font color']);
                },
                'Please enter the application name': e => {
                    const {normalize: o} = e;
                    return o(['Please enter the application name']);
                },
                'Please set the translation type': e => {
                    const {normalize: o} = e;
                    return o(['Please set the translation type']);
                },
                'Please select the sending language': e => {
                    const {normalize: o} = e;
                    return o(['Please select the sending language']);
                },
                'Please select the language to send the translation': e => {
                    const {normalize: o} = e;
                    return o(['Please select the language to send the translation']);
                },
                'Please choose to accept the language': e => {
                    const {normalize: o} = e;
                    return o(['Please choose to accept the language']);
                },
                'Please choose to receive translation language': e => {
                    const {normalize: o} = e;
                    return o(['Please choose to receive translation language']);
                },
                'Please set the font size': e => {
                    const {normalize: o} = e;
                    return o(['Please set the font size']);
                },
                'Please set the font color': e => {
                    const {normalize: o} = e;
                    return o(['Please set the font color']);
                },
                'Successfully modified': e => {
                    const {normalize: o} = e;
                    return o(['Successfully modified']);
                },
                'Loading { text }, please wait...': e => {
                    const {
                        normalize: o,
                        interpolate: t,
                        named: n
                    } = e;
                    return o([
                        'Loading ',
                        t(n('text')),
                        ', please wait...'
                    ]);
                },
                'Network connection timed out': e => {
                    const {normalize: o} = e;
                    return o(['Network connection timed out']);
                },
                'Connection refused': e => {
                    const {normalize: o} = e;
                    return o(['Connection refused']);
                },
                'Failed to load { text }': e => {
                    const {
                        normalize: o,
                        interpolate: t,
                        named: n
                    } = e;
                    return o([
                        'Failed to load ',
                        t(n('text'))
                    ]);
                },
                'Account Management': e => {
                    const {normalize: o} = e;
                    return o(['Account Management']);
                },
                Mail: e => {
                    const {normalize: o} = e;
                    return o(['Mail']);
                },
                'Package Type': e => {
                    const {normalize: o} = e;
                    return o(['Package Type']);
                },
                'Number of remaining characters': e => {
                    const {normalize: o} = e;
                    return o(['Remaining characters']);
                },
                'Registration time': e => {
                    const {normalize: o} = e;
                    return o(['Registration time']);
                },
                'Sign out': e => {
                    const {normalize: o} = e;
                    return o(['Sign out']);
                },
                'Current version': e => {
                    const {normalize: o} = e;
                    return o(['Current version']);
                },
                'Check version': e => {
                    const {normalize: o} = e;
                    return o(['Check version']);
                },
                'New version found': e => {
                    const {normalize: o} = e;
                    return o(['Install']);
                },
                'Detected a new version v{version}': e => {
                    const {
                        normalize: o,
                        interpolate: t,
                        named: n
                    } = e;
                    return o([
                        'Detected a new version v',
                        t(n('version'))
                    ]);
                },
                'Current version v {version}': e => {
                    const {
                        normalize: o,
                        interpolate: t,
                        named: n
                    } = e;
                    return o([
                        'Current version v ',
                        t(n('version'))
                    ]);
                },
                'Global Settings': e => {
                    const {normalize: o} = e;
                    return o(['Global Settings']);
                },
                'Clear cache': e => {
                    const {normalize: o} = e;
                    return o(['Clear cache']);
                },
                'Clear data': e => {
                    const {normalize: o} = e;
                    return o(['Clear data']);
                },
                'This application language': e => {
                    const {normalize: o} = e;
                    return o(['Application language']);
                },
                'System language': e => {
                    const {normalize: o} = e;
                    return o(['System language']);
                },
                'Minimize after startup': e => {
                    const {normalize: o} = e;
                    return o(['Minimize after startup']);
                },
                'Online update': e => {
                    const {normalize: o} = e;
                    return o(['Online update']);
                },
                Autostart: e => {
                    const {normalize: o} = e;
                    return o(['Autostart']);
                },
                'Client display': e => {
                    const {normalize: o} = e;
                    return o(['Client display']);
                },
                'When the application pop-up window is closed': e => {
                    const {normalize: o} = e;
                    return o(['When the application pop-up window is closed']);
                },
                'Proxy settings': e => {
                    const {normalize: o} = e;
                    return o(['Proxy settings']);
                },
                'If the computer has already turned on the VPN, please do not set it up, it may easily cause network conflicts': e => {
                    const {normalize: o} = e;
                    return o(['If the computer has already turned on the VPN, please do not set it up, it may easily cause network conflicts']);
                },
                Save: e => {
                    const {normalize: o} = e;
                    return o(['Save']);
                },
                Cache: e => {
                    const {normalize: o} = e;
                    return o(['Cache']);
                },
                Cleanup: e => {
                    const {normalize: o} = e;
                    return o(['Cleanup']);
                },
                'Cache is temporary data generated during use, and clearing the cache will not affect the normal use of the application. ': e => {
                    const {normalize: o} = e;
                    return o(['Cache is temporary data generated during use, and clearing the cache will not affect the normal use of the application. ']);
                },
                'This will delete data including <em>quick reply</em> and <em>chat translation</em>, are you sure? ': e => {
                    const {normalize: o} = e;
                    return o(['This will delete data including <em>quick reply</em> and <em>chat translation</em>, are you sure? ']);
                },
                'Clear the data of the local application (including quick reply and translation data in chat). ': e => {
                    const {normalize: o} = e;
                    return o(['Clear the data of the local application (including quick reply and translation data in chat). ']);
                },
                'Please enter IP': e => {
                    const {normalize: o} = e;
                    return o(['Please enter IP']);
                },
                'Please enter the port': e => {
                    const {normalize: o} = e;
                    return o(['Please enter the port']);
                },
                Success: e => {
                    const {normalize: o} = e;
                    return o(['Success']);
                },
                'Saved successfully, it will take effect after restart': e => {
                    const {normalize: o} = e;
                    return o(['Saved successfully, it will take effect after restart']);
                },
                'Restart now': e => {
                    const {normalize: o} = e;
                    return o(['Restart now']);
                },
                'Clear failed': e => {
                    const {normalize: o} = e;
                    return o(['Clear failed']);
                },
                'Clear successfully': e => {
                    const {normalize: o} = e;
                    return o(['Clear successfully']);
                },
                'About LookWorld': e => {
                    const {normalize: o} = e;
                    return o(['About LookWorld']);
                },
                'Application Center': e => {
                    const {normalize: o} = e;
                    return o(['Application']);
                },
                Settings: e => {
                    const {normalize: o} = e;
                    return o(['Settings']);
                },
                'Personal Center': e => {
                    const {normalize: o} = e;
                    return o(['Personal']);
                },
                Enable: e => {
                    const {normalize: o} = e;
                    return o(['Enable']);
                },
                Beep: e => {
                    const {normalize: o} = e;
                    return o(['Beep']);
                },
                'Lock screen': e => {
                    const {normalize: o} = e;
                    return o(['Lock screen']);
                },
                'Restart application': e => {
                    const {normalize: o} = e;
                    return o(['Restart app']);
                },
                'Refresh server': e => {
                    const {normalize: o} = e;
                    return o(['Refresh server']);
                },
                'Modify Application': e => {
                    const {normalize: o} = e;
                    return o(['Modify Application']);
                },
                'Delete app': e => {
                    const {normalize: o} = e;
                    return o(['Delete app']);
                },
                'Developer Tools': e => {
                    const {normalize: o} = e;
                    return o(['Developer Tools']);
                },
                'Refresh application': e => {
                    const {normalize: o} = e;
                    return o(['Refresh application']);
                },
                'Refresh app (forced)': e => {
                    const {normalize: o} = e;
                    return o(['Refresh app (forced)']);
                },
                'Network Error': e => {
                    const {normalize: o} = e;
                    return o(['Network Error']);
                },
                'Locked, please enter the unlock password': e => {
                    const {normalize: o} = e;
                    return o(['Locked, please enter the unlock password']);
                },
                'Unlocked successfully': e => {
                    const {normalize: o} = e;
                    return o(['Unlocked successfully']);
                },
                'The password is incorrect': e => {
                    const {normalize: o} = e;
                    return o(['The password is incorrect']);
                },
                'Login Invalid': e => {
                    const {normalize: o} = e;
                    return o(['Login Invalid']);
                },
                'New version detected, please click to start updating': e => {
                    const {normalize: o} = e;
                    return o(['New version detected, please click to start updating']);
                },
                'The download is complete, click to install': e => {
                    const {normalize: o} = e;
                    return o(['The download is complete, click to install']);
                },
                Downloading: e => {
                    const {normalize: o} = e;
                    return o(['Downloading']);
                },
                'Start download': e => {
                    const {normalize: o} = e;
                    return o(['Start download']);
                },
                'Exit and install': e => {
                    const {normalize: o} = e;
                    return o(['Exit and install']);
                },
                'Network error': e => {
                    const {normalize: o} = e;
                    return o(['Network error']);
                },
                'The network is not connected, please check the network or restart the application': e => {
                    const {normalize: o} = e;
                    return o(['The network is not connected, please check the network or restart the application']);
                },
                'Failed to update characters, please switch server and log in again': e => {
                    const {normalize: o} = e;
                    return o(['Failed to update characters, please switch server and log in again']);
                },
                'Copy success': e => {
                    const {normalize: o} = e;
                    return o(['Copy success']);
                },
                'Troubleshooting download': e => {
                    const {normalize: o} = e;
                    return o(['Troubleshooting download']);
                },
                'Fault detection file is being generated, please wait': e => {
                    const {normalize: o} = e;
                    return o(['Fault detection file is being generated, please wait']);
                },
                'Refresh all': e => {
                    const {normalize: o} = e;
                    return o(['Refresh all ']);
                },
                'Close all': e => {
                    const {normalize: o} = e;
                    return o(['close all ']);
                },
                'Shared master account characters': e => {
                    const {normalize: o} = e;
                    return o(['(Shared master account characters)']);
                }
            }
        }
    }), D_ = ((...e) => {
        const o = (_i || (_i = $n(wi))).createApp(...e), {mount: t} = o;
        return o.mount = e => {
            const n = function (e) {
                if (z(e)) {
                    return document.querySelector(e);
                }
                return e;
            }(e);
            if (!n) {
                return;
            }
            const r = o._component;
            _(r) || r.render || r.template || (r.template = n.innerHTML);
            n.innerHTML = '';
            const i = t(n, false, n instanceof SVGElement);
            return n instanceof Element && (n.removeAttribute('v-cloak'), n.setAttribute('data-v-app', '')), i;
        }, o;
    })(R_), j_ = function () {
        const e = J(true), o = e.run(() => xo({}));
        let t = [], n = [];
        const r = fo({
            install(e) {
                cC(r);
                r._a = e;
                e.provide(uC, r);
                e.config.globalProperties.$pinia = r;
                n.forEach(e => t.push(e));
                n = [];
            },
            use(e) {
                return this._a ? t.push(e) : n.push(e), this;
            },
            _p: t,
            _a: null,
            _e: e,
            _s: new Map(),
            state: o
        });
        return r;
    }();
D_.component('base-layout', M_);
D_.component('svg-icon', F_);
D_.use(A_).use(j_).use(B_).mount('#app').$nextTick(() => {
    postMessage({ payload: 'removeLoading' }, '*');
});
exports.APP_LIMIT_NUM = 35;
exports.Cache = mb;
exports.CacheKey = sb;
exports.ContextmenuAction = ub;
exports.CssRender = Fl;
exports.ErrorCode = fb;
exports.ErrorIcon = Bd;
exports.FocusTrap = Os;
exports.Fragment = Un;
exports.HomepageLogin = pb;
exports.InfoIcon = Dd;
exports.LazyTeleport = Ha;
exports.Map = Au;
exports.MapCache = $u;
exports.MenuType = db;
exports.NBaseClose = Kd;
exports.NBaseIcon = Gd;
exports.NBaseLoading = Qd;
exports.NBaseWave = mh;
exports.NButton = om;
exports.NFadeInExpandTransition = Ud;
exports.NIconSwitchTransition = Wd;
exports.NModal = vg;
exports.NScrollbar = ih;
exports.Stack = sd;
exports.SuccessIcon = jd;
exports.SvgIcon = F_;
exports.Symbol = Ks;
exports.Transition = Yr;
exports.TransitionGroup = hi;
exports.TranslateType = cb;
exports.Uint8Array = fd;
exports.VResizeObserver = Ts;
exports.WarningIcon = Nd;
exports.Wrapper = vl;
exports.XScrollbar = lh;
exports._export_sfc = $_;
exports.appList = TC;
exports.arrayLikeKeys = yu;
exports.arrayMap = ac;
exports.baseFor = gd;
exports.baseGetTag = nc;
exports.c = Wl;
exports.cB = Vl;
exports.cCB = (...e) => Wl('>', [Vl(...e)]);
exports.cE = Gl;
exports.cM = ql;
exports.cNotM = Kl;
exports.call = ll;
exports.changeColor = Yi;
exports.checkUpdate = function (e) {
    return iC.get('/appRevision/getLastRevision', { params: e });
};
exports.checkboxLight = bm;
exports.clickoutside = Ea;
exports.clientCloseList = oC;
exports.clientShowList = eC;
exports.cloneVNode = cr;
exports.collapseTransitionLight = _m;
exports.color2Class = bl;
exports.colorPickerLight = im;
exports.commonLight = qf;
exports.commonVariables = Ch;
exports.commonVariables$1 = _d;
exports.commonVars = zg;
exports.commonVars$1 = vv;
exports.computed = Er;
exports.computed$1 = Ro;
exports.configProviderInjectionKey = kd;
exports.createBaseVNode = ar;
exports.createBlock = or;
exports.createCommentVNode = function (e = '', o = false) {
    return o ? (Xn(), or(Gn, null, e)) : sr(Gn, null, e);
};
exports.createElementBlock = er;
exports.createId = tl;
exports.createInjectionKey = pl;
exports.createKey = Bl;
exports.createTextVNode = ur;
exports.createVNode = sr;
exports.defineComponent = Tt;
exports.depx = function (e) {
    return 'string' == typeof e ? e.endsWith('px') ? Number(e.slice(0, e.length - 2)) : Number(e) : e;
};
exports.dialogApiInjectionKey = cg;
exports.drawerBodyInjectionKey = wa;
exports.dropdownLight = Dm;
exports.emptyLight = Xf;
exports.eq = qc;
exports.fadeInHeightExpandTransition = Oh;
exports.fadeInScaleUpTransition = fh;
exports.fadeInTransition = th;
exports.fadeInWidthExpandTransition = Th;
exports.flatten = il;
exports.formItemInjectionKey = Ws;
exports.formLight = Lg;
exports.getAboutInfo = function () {
    return iC.get('/sysData/getAbout');
};
exports.getCodeInfo = function (e) {
    return iC.get('/sysData/getSysDataCode', { params: e });
};
exports.getCurrentInstance = xr;
exports.getFirstSlotVNode = dl;
exports.getFirstVNode = function (e, o, t = 'default') {
    const n = o[t];
    if (void 0 === n) {
        throw new Error(`[vueuc/${ e }]: slot[${ t }] is empty.`);
    }
    const r = Ta(n());
    if (1 === r.length) {
        return r[0];
    }
    throw new Error(`[vueuc/${ e }]: slot[${ t }] should have exactly one child.`);
};
exports.getGap = function (e, o) {
    const [t, n] = e.split(' ');
    return o ? 'row' === o ? t : n : {
        row: t,
        col: n || t
    };
};
exports.getMargin = Ti;
exports.getNative = Oc;
exports.getPreciseEventTarget = zi;
exports.getSlot = za;
exports.getWebsiteInfo = function () {
    return iC.get('/sysData/getWebSiteAndRecharge');
};
exports.h = kr;
exports.hasInstance = ta;
exports.homepage = 'https://lookworld88.com';
exports.hsla = function (e) {
    try {
        let o;
        if (o = Mi.exec(e)) {
            return [
                Zi(o[1]),
                el(o[5]),
                el(o[9]),
                Ji(o[13])
            ];
        }
        if (o = Ii.exec(e)) {
            return [
                Zi(o[1]),
                el(o[5]),
                el(o[9]),
                1
            ];
        }
        throw new Error(`[seemly/hsla]: Invalid color value ${ e }.`);
    } catch (o) {
        throw o;
    }
};
exports.hsva = function (e) {
    try {
        let o;
        if (o = Hi.exec(e)) {
            return [
                Zi(o[1]),
                el(o[5]),
                el(o[9]),
                Ji(o[13])
            ];
        }
        if (o = $i.exec(e)) {
            return [
                Zi(o[1]),
                el(o[5]),
                el(o[9]),
                1
            ];
        }
        throw new Error(`[seemly/hsva]: Invalid color value ${ e }.`);
    } catch (o) {
        throw o;
    }
};
exports.iconLight = Vm;
exports.iconSwitchTransition = Xd;
exports.identity = hc;
exports.inject = ct;
exports.inputLight = Bh;
exports.insideModal = Yl;
exports.insidePopover = Xl;
exports.internalSelectMenuLight = ch;
exports.internalSelectionLight = wh;
exports.isArguments = au;
exports.isArray = sc;
exports.isArrayLike = eu;
exports.isBrowser = na;
exports.isBrowser$1 = Zl;
exports.isBuffer = du;
exports.isEmpty = zC;
exports.isIndex = Vc;
exports.isLength = Qc;
exports.isMounted = xa;
exports.isObject = fc;
exports.isObjectLike = rc;
exports.isPrototype = tu;
exports.isRef = bo;
exports.isSafari = Mh;
exports.isSlotEmpty = gl;
exports.isSymbol = lc;
exports.isTypedArray = xu;
exports.keep = nl;
exports.keysOf = al;
exports.languageList = Qx;
exports.login = function (e) {
    return iC.post(`/user/login.json${ lC(e) }`);
};
exports.markEventEffectPerformed = function (e) {
    Ql.add(e);
};
exports.mergeProps = hr;
exports.modalBodyInjectionKey = ya;
exports.nextTick = Wo;
exports.normalizeClass = l;
exports.notificationApiInjectionKey = nb;
exports.off = sa;
exports.omit = function (e, o) {
    const t = Object.keys(e);
    if (Array.isArray(o)) {
        const n = {};
        return t.forEach(t => {
            o.includes(t) || (n[t] = e[t]);
        }), n;
    }
    {
        const {
            [o]: t,
            ...n
        } = e;
        return n;
    }
};
exports.omit$1 = rl;
exports.on = aa;
exports.onActivated = kt;
exports.onBeforeMount = $t;
exports.onBeforeUnmount = Bt;
exports.onDeactivated = Rt;
exports.onMounted = Mt;
exports.onUnmounted = Dt;
exports.openBlock = Xn;
exports.overArg = Su;
exports.popScopeId = function () {
    ot = null;
};
exports.popconfirmLight = ov;
exports.popoverBodyInjectionKey = _a;
exports.popoverLight = bh;
exports.provide = st;
exports.pushScopeId = function (e) {
    ot = e;
};
exports.pxfy = function (e) {
    if (null != e) {
        return 'number' == typeof e ? `${ e }px` : e.endsWith('px') ? e : `${ e }px`;
    }
};
exports.reactive = ro;
exports.readonly = io;
exports.ref = xo;
exports.removeProtocol = function (e) {
    return e.replace(/https:\/\//, '');
};
exports.render = sl;
exports.renderList = function (e, o, t, n) {
    let r;
    const i = t && t[n];
    if (y(e) || z(e)) {
        r = new Array(e.length);
        for (let t = 0, n = e.length; t < n; t++) {
            r[t] = o(e[t], t, void 0, i && i[t]);
        }
    } else {
        if ('number' == typeof e) {
            r = new Array(e);
            for (let t = 0; t < e; t++) {
                r[t] = o(t + 1, t, void 0, i && i[t]);
            }
        } else {
            if (P(e)) {
                if (e[Symbol.iterator]) {
                    r = Array.from(e, (e, t) => o(e, t, void 0, i && i[t]));
                } else {
                    const t = Object.keys(e);
                    r = new Array(t.length);
                    for (let n = 0, l = t.length; n < l; n++) {
                        const l = t[n];
                        r[n] = o(e[l], l, n, i && i[n]);
                    }
                }
            } else {
                r = [];
            }
        }
    }
    return t && (t[n] = r), r;
};
exports.renderSlot = Jt;
exports.replaceable = Hd;
exports.resizeObserverManager = zs;
exports.resolveComponent = Kt;
exports.resolveSlot = hl;
exports.resolveSlotWithProps = function (e, o, t) {
    return e && fl(e(o)) || t(o);
};
exports.resolveWrappedSlot = ml;
exports.resultLight = av;
exports.rgba = Vi;
exports.root = qs;
exports.selectLight = km;
exports.shallowRef = Co;
exports.spinLight = pv;
exports.storeToRefs = wC;
exports.throwError = ul;
exports.toDisplayString = e => z(e) ? e : null == e ? '' : y(e) || P(e) && (e.toString === k || !_(e.toString)) ? JSON.stringify(e, c, 2) : String(e);
exports.toHexString = function (e) {
    if ('string' == typeof e) {
        let o;
        if (o = ji.exec(e)) {
            return o[0];
        }
        if (o = Wi.exec(e)) {
            return o[0].slice(0, 7);
        }
        if (o = Di.exec(e) || Ni.exec(e)) {
            return `#${ o[1] }${ o[1] }${ o[2] }${ o[2] }${ o[3] }${ o[3] }`;
        }
        throw new Error(`[seemly/toHexString]: Invalid hex value ${ e }.`);
    }
    return `#${ e.slice(0, 3).map(e => Qi(e).toString(16).toUpperCase().padStart(2, '0')).join('') }`;
};
exports.toHexaString = function (e) {
    if ('string' == typeof e) {
        let o;
        if (o = ji.exec(e)) {
            return `${ o[0] }FF`;
        }
        if (o = Wi.exec(e)) {
            return o[0];
        }
        if (o = Di.exec(e)) {
            return `#${ o[1] }${ o[1] }${ o[2] }${ o[2] }${ o[3] }${ o[3] }FF`;
        }
        if (o = Ni.exec(e)) {
            return `#${ o[1] }${ o[1] }${ o[2] }${ o[2] }${ o[3] }${ o[3] }${ o[4] }${ o[4] }`;
        }
        throw new Error(`[seemly/toHexString]: Invalid hex value ${ e }.`);
    }
    return `#${ e.slice(0, 3).map(e => Qi(e).toString(16).toUpperCase().padStart(2, '0')).join('') }` + (3 === e.length ? 'FF' : Qi(255 * e[3]).toString(16).padStart(2, '0').toUpperCase());
};
exports.toHslString = function (e) {
    return `hsl(${ Zi(e[0]) }, ${ el(e[1]) }%, ${ el(e[2]) }%)`;
};
exports.toHslaString = function (e) {
    const [o, t, n] = e;
    return 3 in e ? `hsla(${ Zi(o) }, ${ el(t) }%, ${ el(n) }%, ${ Ji(e[3]) })` : `hsla(${ Zi(o) }, ${ el(t) }%, ${ el(n) }%, 1)`;
};
exports.toHsvString = function (e) {
    return `hsv(${ Zi(e[0]) }, ${ el(e[1]) }%, ${ el(e[2]) }%)`;
};
exports.toHsvaString = function (e) {
    const [o, t, n] = e;
    return 3 in e ? `hsva(${ Zi(o) }, ${ el(t) }%, ${ el(n) }%, ${ Ji(e[3]) })` : `hsva(${ Zi(o) }, ${ el(t) }%, ${ el(n) }%, 1)`;
};
exports.toRef = Po;
exports.toRgbString = function (e) {
    const [o, t, n] = Array.isArray(e) ? e : Vi(e);
    return function (e, o, t) {
        return `rgb(${ Qi(e) }, ${ Qi(o) }, ${ Qi(t) })`;
    }(o, t, n);
};
exports.toRgbaString = ol;
exports.toSource = _c;
exports.toString = Mu;
exports.translateInfo = {
    0: {
        level: '基础套餐 (有道)',
        key: 'Basic Package (Youdao)'
    },
    1: {
        level: '高级套餐 (谷歌)',
        key: 'Premium Plan (Google)'
    },
    2: {
        level: '专业套餐 (DeepL)',
        key: 'Pro Package (DeepL)'
    },
    3: {
        level: '试用\xB7有道',
        key: 'Trial \xB7 Youdao'
    }
};
exports.unref = wo;
exports.useAppStore = OC;
exports.useConfig = Ad;
exports.useDefault = function () {
    const {electron: e} = lb(), o = e.getConfigData(), t = _C(), n = {
            translateServe: o.translateServe || Zx[0].serveUrl,
            locale: o.locale || Qx[0].locale
        }, r = () => {
            const e = t.isGoogle ? 'zh-CN' : t.isDeepl ? 'ZH' : 'zh-CHS', n = t.isDeepl ? 'EN-US' : 'en';
            return {
                fontSize: 16,
                fontColor: '#18A058',
                translateType: t.userInfo.vipType,
                translateServe: o.translateServe,
                isGroup: false,
                openSend: true,
                openMsg: true,
                sendFrom: t.isYoudao ? 'auto' : '',
                sendTo: n,
                msgFrom: t.isYoudao ? 'auto' : '',
                msgTo: e
            };
        };
    return {
        appFormModel: r(),
        loginFormModel: n,
        getDefaultFormModel: r
    };
};
exports.useElectron = lb;
exports.useFormItem = Us;
exports.useKeyStore = kC;
exports.useLocale = T_;
exports.useMemo = oa;
exports.useMessage = Gv;
exports.useNoticeStore = AC;
exports.useRoute = hS;
exports.useRouter = fS;
exports.useRtl = Md;
exports.useSsrAdapter = $a;
exports.useStyle = Id;
exports.useTheme = Ld;
exports.useThemeClass = $d;
exports.useTranslate = P_;
exports.useTranslateStore = IC;
exports.useUserStore = _C;
exports.vShow = yi;
exports.warn = cl;
exports.watch = pt;
exports.watchEffect = ut;
exports.withCtx = nt;
exports.withDirectives = Vt;
exports.withKeys = (e, o) => t => {
    if (!('key' in t)) {
        return;
    }
    const n = B(t.key);
    return o.some(e => e === n || Ci[e] === n) ? e(t) : void 0;
};
exports.withModifiers = (e, o) => (t, ...n) => {
    for (let e = 0; e < o.length; e++) {
        const n = xi[o[e]];
        if (n && n(t, o)) {
            return;
        }
    }
    return e(t, ...n);
};
exports.zindexable = La;