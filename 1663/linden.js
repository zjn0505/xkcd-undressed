/*! linden by chromako.de */
!function(t) {
    function e(i) {
        if (n[i])
            return n[i].exports;
        var o = n[i] = {
            exports: {},
            id: i,
            loaded: !1
        };
        return t[i].call(o.exports, o, o.exports, e),
        o.loaded = !0,
        o.exports
    }
    var n = {};
    return e.m = t,
    e.c = n,
    e.p = "",
    e(0)
}([function(t, e, n) {
    n(55),
    n(53),
    n(52),
    n(51),
    n(54),
    n(50),
    n(107),
    n(101);
    var i = n(110)
      , o = document.getElementsByTagName("script")
      , r = o[o.length - 1]
      , s = window.setInterval(function() {
        void 0 != window.initGardenClient && (window.clearInterval(s),
        window.garden = new i({
            name: "garden",
            el: document.getElementById("comic"),
            width: 740,
            height: 462,
            title: r.getAttribute("data-title"),
            endpoint: r.getAttribute("data-endpoint"),
            imgPrefix: r.getAttribute("data-image-endpoint"),
            spread: {
                reload: 60
            },
            debug: "?debug" === location.search,
            startGardenClient: window.initGardenClient
        }).run())
    }, 1e3);
    window.addEventListener("keydown", function(t) {
        8 === t.which && t.preventDefault()
    }, !1)
}
, function(t, e, n) {
    var i = n(40)("wks")
      , o = n(29)
      , r = n(2).Symbol
      , s = "function" == typeof r;
    t.exports = function(t) {
        return i[t] || (i[t] = s && r[t] || (s ? r : o)("Symbol." + t))
    }
}
, function(t, e) {
    var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}
, function(t, e) {
    var n = t.exports = {
        version: "2.2.2"
    };
    "number" == typeof __e && (__e = n)
}
, function(t, e, n) {
    var i = n(10);
    t.exports = function(t) {
        if (!i(t))
            throw TypeError(t + " is not an object!");
        return t
    }
}
, function(t, e, n) {
    var i = n(2)
      , o = n(3)
      , r = n(9)
      , s = n(13)
      , a = n(6)
      , c = "prototype"
      , u = function(t, e, n) {
        var l, h, A, d, f = t & u.F, p = t & u.G, g = t & u.S, v = t & u.P, m = t & u.B, y = p ? i : g ? i[e] || (i[e] = {}) : (i[e] || {})[c], b = p ? o : o[e] || (o[e] = {}), w = b[c] || (b[c] = {});
        p && (n = e);
        for (l in n)
            h = !f && y && void 0 !== y[l],
            A = (h ? y : n)[l],
            d = m && h ? a(A, i) : v && "function" == typeof A ? a(Function.call, A) : A,
            y && s(y, l, A, t & u.U),
            b[l] != A && r(b, l, d),
            v && w[l] != A && (w[l] = A)
    };
    i.core = o,
    u.F = 1,
    u.G = 2,
    u.S = 4,
    u.P = 8,
    u.B = 16,
    u.W = 32,
    u.U = 64,
    u.R = 128,
    t.exports = u
}
, function(t, e, n) {
    var i = n(17);
    t.exports = function(t, e, n) {
        if (i(t),
        void 0 === e)
            return t;
        switch (n) {
        case 1:
            return function(n) {
                return t.call(e, n)
            }
            ;
        case 2:
            return function(n, i) {
                return t.call(e, n, i)
            }
            ;
        case 3:
            return function(n, i, o) {
                return t.call(e, n, i, o)
            }
        }
        return function() {
            return t.apply(e, arguments)
        }
    }
}
, function(t, e, n) {
    t.exports = !n(14)(function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    })
}
, function(t, e) {
    var n = {}.hasOwnProperty;
    t.exports = function(t, e) {
        return n.call(t, e)
    }
}
, function(t, e, n) {
    var i = n(15)
      , o = n(23);
    t.exports = n(7) ? function(t, e, n) {
        return i.f(t, e, o(1, n))
    }
    : function(t, e, n) {
        return t[e] = n,
        t
    }
}
, function(t, e) {
    t.exports = function(t) {
        return "object" == typeof t ? null !== t : "function" == typeof t
    }
}
, function(t, e) {
    var n = {}.toString;
    t.exports = function(t) {
        return n.call(t).slice(8, -1)
    }
}
, function(t, e) {
    t.exports = {}
}
, function(t, e, n) {
    var i = n(2)
      , o = n(9)
      , r = n(8)
      , s = n(29)("src")
      , a = "toString"
      , c = Function[a]
      , u = ("" + c).split(a);
    n(3).inspectSource = function(t) {
        return c.call(t)
    }
    ,
    (t.exports = function(t, e, n, a) {
        var c = "function" == typeof n;
        c && (r(n, "name") || o(n, "name", e)),
        t[e] !== n && (c && (r(n, s) || o(n, s, t[e] ? "" + t[e] : u.join(String(e)))),
        t === i ? t[e] = n : a ? t[e] ? t[e] = n : o(t, e, n) : (delete t[e],
        o(t, e, n)))
    }
    )(Function.prototype, a, function() {
        return "function" == typeof this && this[s] || c.call(this)
    })
}
, function(t, e) {
    t.exports = function(t) {
        try {
            return !!t()
        } catch (e) {
            return !0
        }
    }
}
, function(t, e, n) {
    var i = n(4)
      , o = n(35)
      , r = n(43)
      , s = Object.defineProperty;
    e.f = n(7) ? Object.defineProperty : function(t, e, n) {
        if (i(t),
        e = r(e, !0),
        i(n),
        o)
            try {
                return s(t, e, n)
            } catch (a) {}
        if ("get"in n || "set"in n)
            throw TypeError("Accessors not supported!");
        return "value"in n && (t[e] = n.value),
        t
    }
}
, function(t, e, n) {
    var i = n(22)
      , o = n(20);
    t.exports = function(t) {
        return i(o(t))
    }
}
, function(t, e) {
    t.exports = function(t) {
        if ("function" != typeof t)
            throw TypeError(t + " is not a function!");
        return t
    }
}
, function(t, e, n) {
    var i = n(6)
      , o = n(22)
      , r = n(28)
      , s = n(27)
      , a = n(58);
    t.exports = function(t, e) {
        var n = 1 == t
          , c = 2 == t
          , u = 3 == t
          , l = 4 == t
          , h = 6 == t
          , A = 5 == t || h
          , d = e || a;
        return function(e, a, f) {
            for (var p, g, v = r(e), m = o(v), y = i(a, f, 3), b = s(m.length), w = 0, x = n ? d(e, b) : c ? d(e, 0) : void 0; b > w; w++)
                if ((A || w in m) && (p = m[w],
                g = y(p, w, v),
                t))
                    if (n)
                        x[w] = g;
                    else if (g)
                        switch (t) {
                        case 3:
                            return !0;
                        case 5:
                            return p;
                        case 6:
                            return w;
                        case 2:
                            x.push(p)
                        }
                    else if (l)
                        return !1;
            return h ? -1 : u || l ? l : x
        }
    }
}
, function(t, e, n) {
    var i = n(11)
      , o = n(1)("toStringTag")
      , r = "Arguments" == i(function() {
        return arguments
    }())
      , s = function(t, e) {
        try {
            return t[e]
        } catch (n) {}
    };
    t.exports = function(t) {
        var e, n, a;
        return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = s(e = Object(t), o)) ? n : r ? i(e) : "Object" == (a = i(e)) && "function" == typeof e.callee ? "Arguments" : a
    }
}
, function(t, e) {
    t.exports = function(t) {
        if (void 0 == t)
            throw TypeError("Can't call method on  " + t);
        return t
    }
}
, function(t, e, n) {
    var i = n(10)
      , o = n(2).document
      , r = i(o) && i(o.createElement);
    t.exports = function(t) {
        return r ? o.createElement(t) : {}
    }
}
, function(t, e, n) {
    var i = n(11);
    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
        return "String" == i(t) ? t.split("") : Object(t)
    }
}
, function(t, e) {
    t.exports = function(t, e) {
        return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e
        }
    }
}
, function(t, e, n) {
    var i = n(15).f
      , o = n(8)
      , r = n(1)("toStringTag");
    t.exports = function(t, e, n) {
        t && !o(t = n ? t : t.prototype, r) && i(t, r, {
            configurable: !0,
            value: e
        })
    }
}
, function(t, e, n) {
    var i = n(40)("keys")
      , o = n(29);
    t.exports = function(t) {
        return i[t] || (i[t] = o(t))
    }
}
, function(t, e) {
    var n = Math.ceil
      , i = Math.floor;
    t.exports = function(t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? i : n)(t)
    }
}
, function(t, e, n) {
    var i = n(26)
      , o = Math.min;
    t.exports = function(t) {
        return t > 0 ? o(i(t), 9007199254740991) : 0
    }
}
, function(t, e, n) {
    var i = n(20);
    t.exports = function(t) {
        return Object(i(t))
    }
}
, function(t, e) {
    var n = 0
      , i = Math.random();
    t.exports = function(t) {
        return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + i).toString(36))
    }
}
, function(t, e) {
    t.exports = function n(t, e) {
        function i() {
            for (var i = 0; i < t.children.length; i++)
                n(t.children[i], e)
        }
        t && e(t.node, i)
    }
}
, function(t, e) {
    function n(t, e, n) {
        return e < n ? t < e ? e : t > n ? n : t : t < n ? n : t > e ? e : t
    }
    t.exports = n
}
, function(t, e, n) {
    var i = n(1)("unscopables")
      , o = Array.prototype;
    void 0 == o[i] && n(9)(o, i, {}),
    t.exports = function(t) {
        o[i][t] = !0
    }
}
, function(t, e) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}
, function(t, e, n) {
    t.exports = n(2).document && document.documentElement
}
, function(t, e, n) {
    t.exports = !n(7) && !n(14)(function() {
        return 7 != Object.defineProperty(n(21)("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    })
}
, function(t, e, n) {
    "use strict";
    var i = n(37)
      , o = n(5)
      , r = n(13)
      , s = n(9)
      , a = n(8)
      , c = n(12)
      , u = n(64)
      , l = n(24)
      , h = n(73)
      , A = n(1)("iterator")
      , d = !([].keys && "next"in [].keys())
      , f = "@@iterator"
      , p = "keys"
      , g = "values"
      , v = function() {
        return this
    };
    t.exports = function(t, e, n, m, y, b, w) {
        u(n, e, m);
        var x, C, E, D = function(t) {
            if (!d && t in S)
                return S[t];
            switch (t) {
            case p:
                return function() {
                    return new n(this,t)
                }
                ;
            case g:
                return function() {
                    return new n(this,t)
                }
            }
            return function() {
                return new n(this,t)
            }
        }, M = e + " Iterator", R = y == g, N = !1, S = t.prototype, O = S[A] || S[f] || y && S[y], U = O || D(y), I = y ? R ? D("entries") : U : void 0, L = "Array" == e ? S.entries || O : O;
        if (L && (E = h(L.call(new t)),
        E !== Object.prototype && (l(E, M, !0),
        i || a(E, A) || s(E, A, v))),
        R && O && O.name !== g && (N = !0,
        U = function() {
            return O.call(this)
        }
        ),
        i && !w || !d && !N && S[A] || s(S, A, U),
        c[e] = U,
        c[M] = v,
        y)
            if (x = {
                values: R ? U : D(g),
                keys: b ? U : D(p),
                entries: I
            },
            w)
                for (C in x)
                    C in S || r(S, C, x[C]);
            else
                o(o.P + o.F * (d || N), e, x);
        return x
    }
}
, function(t, e) {
    t.exports = !1
}
, function(t, e, n) {
    var i = n(74)
      , o = n(33);
    t.exports = Object.keys || function(t) {
        return i(t, o)
    }
}
, function(t, e) {
    e.f = {}.propertyIsEnumerable
}
, function(t, e, n) {
    var i = n(2)
      , o = "__core-js_shared__"
      , r = i[o] || (i[o] = {});
    t.exports = function(t) {
        return r[t] || (r[t] = {})
    }
}
, function(t, e, n) {
    var i = n(14);
    t.exports = function(t, e) {
        return !!t && i(function() {
            e ? t.call(null, function() {}, 1) : t.call(null)
        })
    }
}
, function(t, e, n) {
    var i, o, r, s = n(6), a = n(60), c = n(34), u = n(21), l = n(2), h = l.process, A = l.setImmediate, d = l.clearImmediate, f = l.MessageChannel, p = 0, g = {}, v = "onreadystatechange", m = function() {
        var t = +this;
        if (g.hasOwnProperty(t)) {
            var e = g[t];
            delete g[t],
            e()
        }
    }, y = function(t) {
        m.call(t.data)
    };
    A && d || (A = function(t) {
        for (var e = [], n = 1; arguments.length > n; )
            e.push(arguments[n++]);
        return g[++p] = function() {
            a("function" == typeof t ? t : Function(t), e)
        }
        ,
        i(p),
        p
    }
    ,
    d = function(t) {
        delete g[t]
    }
    ,
    "process" == n(11)(h) ? i = function(t) {
        h.nextTick(s(m, t, 1))
    }
    : f ? (o = new f,
    r = o.port2,
    o.port1.onmessage = y,
    i = s(r.postMessage, r, 1)) : l.addEventListener && "function" == typeof postMessage && !l.importScripts ? (i = function(t) {
        l.postMessage(t + "", "*")
    }
    ,
    l.addEventListener("message", y, !1)) : i = v in u("script") ? function(t) {
        c.appendChild(u("script"))[v] = function() {
            c.removeChild(this),
            m.call(t)
        }
    }
    : function(t) {
        setTimeout(s(m, t, 1), 0)
    }
    ),
    t.exports = {
        set: A,
        clear: d
    }
}
, function(t, e, n) {
    var i = n(10);
    t.exports = function(t, e) {
        if (!i(t))
            return t;
        var n, o;
        if (e && "function" == typeof (n = t.toString) && !i(o = n.call(t)))
            return o;
        if ("function" == typeof (n = t.valueOf) && !i(o = n.call(t)))
            return o;
        if (!e && "function" == typeof (n = t.toString) && !i(o = n.call(t)))
            return o;
        throw TypeError("Can't convert object to primitive value")
    }
}
, function(t, e, n) {
    function i(t) {
        return t === p || t === g
    }
    function o(t) {
        return b.test(t)
    }
    var r = n(97)
      , s = 0
      , a = 1
      , c = 2
      , u = 3
      , l = 4
      , h = 5
      , A = 6
      , d = 7
      , f = 8
      , p = 9
      , g = 10
      , v = 11
      , m = 12
      , y = 13;
    t.exports = function(t, e) {
        function n(t) {
            return "function" == typeof t ? t : "string" == typeof t ? t : t && "object" == typeof t ? t : null === t || void 0 === t ? t : b("", t)
        }
        e || (e = {});
        var b = e.concat || function(t, e) {
            return String(t) + String(e)
        }
        ;
        return e.attrToProp !== !1 && (t = r(t)),
        function(r) {
            function w(t) {
                var n = [];
                x === d && (x = l);
                for (var o = 0; o < t.length; o++) {
                    var r = t.charAt(o);
                    x === a && "<" === r ? (C.length && n.push([a, C]),
                    C = "",
                    x = c) : ">" !== r || i(x) || x === y ? x === y && /-$/.test(C) && "-" === r ? (e.comments && n.push([f, C.substr(0, C.length - 1)]),
                    C = "",
                    x = a) : x === c && /^!--$/.test(C) ? (e.comments && n.push([c, C], [h, "comment"], [v]),
                    C = r,
                    x = y) : x === a || x === y ? C += r : x === c && "/" === r && C.length || (x === c && /\s/.test(r) ? (C.length && n.push([c, C]),
                    C = "",
                    x = l) : x === c ? C += r : x === l && /[^\s"'=/]/.test(r) ? (x = h,
                    C = r) : x === l && /\s/.test(r) ? (C.length && n.push([h, C]),
                    n.push([m])) : x === h && /\s/.test(r) ? (n.push([h, C]),
                    C = "",
                    x = A) : x === h && "=" === r ? (n.push([h, C], [v]),
                    C = "",
                    x = d) : x === h ? C += r : x !== A && x !== l || "=" !== r ? x !== A && x !== l || /\s/.test(r) ? x === d && '"' === r ? x = g : x === d && "'" === r ? x = p : x === g && '"' === r ? (n.push([f, C], [m]),
                    C = "",
                    x = l) : x === p && "'" === r ? (n.push([f, C], [m]),
                    C = "",
                    x = l) : x !== d || /\s/.test(r) ? x === f && /\s/.test(r) ? (n.push([f, C], [m]),
                    C = "",
                    x = l) : x !== f && x !== p && x !== g || (C += r) : (x = f,
                    o--) : (n.push([m]),
                    /[\w-]/.test(r) ? (C += r,
                    x = h) : x = l) : (n.push([v]),
                    x = d)) : (x === c && C.length ? n.push([c, C]) : x === h ? n.push([h, C]) : x === f && C.length && n.push([f, C]),
                    n.push([u]),
                    C = "",
                    x = a)
                }
                return x === a && C.length ? (n.push([a, C]),
                C = "") : x === f && C.length ? (n.push([f, C]),
                C = "") : x === g && C.length ? (n.push([f, C]),
                C = "") : x === p && C.length ? (n.push([f, C]),
                C = "") : x === h && (n.push([h, C]),
                C = ""),
                n
            }
            for (var x = a, C = "", E = arguments.length, D = [], M = 0; M < r.length; M++)
                if (M < E - 1) {
                    var R = arguments[M + 1]
                      , N = w(r[M])
                      , S = x;
                    S === g && (S = f),
                    S === p && (S = f),
                    S === d && (S = f),
                    S === l && (S = h),
                    S === c ? "/" === C ? (N.push([c, "/", R]),
                    C = "") : N.push([c, R]) : S === y && e.comments ? C += String(R) : S !== y && N.push([s, S, R]),
                    D.push.apply(D, N)
                } else
                    D.push.apply(D, w(r[M]));
            for (var O = [null, {}, []], U = [[O, -1]], M = 0; M < D.length; M++) {
                var I = U[U.length - 1][0]
                  , N = D[M]
                  , L = N[0];
                if (L === c && /^\//.test(N[1])) {
                    var k = U[U.length - 1][1];
                    U.length > 1 && (U.pop(),
                    U[U.length - 1][0][2][k] = t(I[0], I[1], I[2].length ? I[2] : void 0))
                } else if (L === c) {
                    var B = [N[1], {}, []];
                    I[2].push(B),
                    U.push([B, I[2].length - 1])
                } else if (L === h || L === s && N[1] === h) {
                    for (var T, _ = ""; M < D.length; M++)
                        if (D[M][0] === h)
                            _ = b(_, D[M][1]);
                        else {
                            if (D[M][0] !== s || D[M][1] !== h)
                                break;
                            if ("object" != typeof D[M][2] || _)
                                _ = b(_, D[M][2]);
                            else
                                for (T in D[M][2])
                                    D[M][2].hasOwnProperty(T) && !I[1][T] && (I[1][T] = D[M][2][T])
                        }
                    D[M][0] === v && M++;
                    for (var F = M; M < D.length; M++)
                        if (D[M][0] === f || D[M][0] === h)
                            I[1][_] ? "" === D[M][1] || (I[1][_] = b(I[1][_], D[M][1])) : I[1][_] = n(D[M][1]);
                        else {
                            if (D[M][0] !== s || D[M][1] !== f && D[M][1] !== h) {
                                !_.length || I[1][_] || M !== F || D[M][0] !== u && D[M][0] !== m || (I[1][_] = _.toLowerCase()),
                                D[M][0] === u && M--;
                                break
                            }
                            I[1][_] ? "" === D[M][2] || (I[1][_] = b(I[1][_], D[M][2])) : I[1][_] = n(D[M][2])
                        }
                } else if (L === h)
                    I[1][N[1]] = !0;
                else if (L === s && N[1] === h)
                    I[1][N[2]] = !0;
                else if (L === u) {
                    if (o(I[0]) && U.length) {
                        var k = U[U.length - 1][1];
                        U.pop(),
                        U[U.length - 1][0][2][k] = t(I[0], I[1], I[2].length ? I[2] : void 0)
                    }
                } else if (L === s && N[1] === a)
                    void 0 === N[2] || null === N[2] ? N[2] = "" : N[2] || (N[2] = b("", N[2])),
                    Array.isArray(N[2][0]) ? I[2].push.apply(I[2], N[2]) : I[2].push(N[2]);
                else if (L === a)
                    I[2].push(N[1]);
                else if (L !== v && L !== m)
                    throw new Error("unhandled: " + L)
            }
            if (O[2].length > 1 && /^\s*$/.test(O[2][0]) && O[2].shift(),
            O[2].length > 2 || 2 === O[2].length && /\S/.test(O[2][1])) {
                if (e.createFragment)
                    return e.createFragment(O[2]);
                throw new Error("multiple root elements must be wrapped in an enclosing tag")
            }
            return Array.isArray(O[2][0]) && "string" == typeof O[2][0][0] && Array.isArray(O[2][0][2]) && (O[2][0] = t(O[2][0][0], O[2][0][1], O[2][0][2])),
            O[2][0]
        }
    }
    ;
    var b = RegExp("^(" + ["area", "base", "basefont", "bgsound", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr", "!--", "animate", "animateTransform", "circle", "cursor", "desc", "ellipse", "feBlend", "feColorMatrix", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "font-face-format", "font-face-name", "font-face-uri", "glyph", "glyphRef", "hkern", "image", "line", "missing-glyph", "mpath", "path", "polygon", "polyline", "rect", "set", "stop", "tref", "use", "view", "vkern"].join("|") + ")(?:[.#][a-zA-Z0-9-￿_:-]+)*$")
}
, function(t, e) {
    function n() {
        this.imgs = {},
        this.callbacks = {}
    }
    n.prototype = {
        get: function(t, e) {
            var n = this.imgs[t];
            void 0 === n ? (this.imgs[t] = !0,
            this.callbacks[t] = [e],
            n = new Image,
            n.onload = this._onDone.bind(this, t, n, n),
            n.onerror = this._onDone.bind(this, t, n, !1),
            n.crossOrigin = "anonymous",
            n.src = t) : n === !0 ? this.callbacks[t].push(e) : e && e(t, n)
        },
        _onDone: function(t, e, n) {
            this.imgs[t] = n;
            for (var i = 0; i < this.callbacks[t].length; i++) {
                var o = this.callbacks[t][i];
                o && o(t, n)
            }
            delete this.callbacks[t]
        },
        getAll: function(t, e) {
            function n(t, n) {
                o[t] = n,
                i--,
                0 === i && e(o)
            }
            if (!t.length)
                return void e([]);
            for (var i = t.length, o = {}, r = 0; r < t.length; r++)
                this.get(t[r], n)
        }
    },
    t.exports = n
}
, function(t, e, n) {
    function i(t, e) {
        return Object.freeze(Object.defineProperties(t, {
            raw: {
                value: Object.freeze(e)
            }
        }))
    }
    function o(t) {
        return Math.sin(t * S)
    }
    function r(t) {
        return Math.cos(t * S)
    }
    function s(t, e) {
        return (t % e + e) % e
    }
    function a(t, e, n, i, a, c, u) {
        var l, h, A, d, f = s(t, 360);
        f <= 90 ? (l = i,
        h = u,
        A = c,
        d = a) : f <= 180 ? (l = c,
        h = a,
        A = i,
        d = u) : f <= 270 ? (l = c,
        h = u,
        A = i,
        d = a) : (l = i,
        h = u,
        A = c,
        d = a),
        l -= e,
        h -= n,
        A -= e,
        d -= n;
        var p = {
            x1: e + l * r(f) - h * o(f),
            y1: n + l * o(f) + h * r(f),
            x2: e + A * r(f) - d * o(f),
            y2: n + A * o(f) + d * r(f)
        };
        if (p.x2 < p.x1) {
            var g = p.x2;
            p.x2 = p.x1,
            p.x1 = g
        }
        if (p.y2 < p.y1) {
            var v = p.y2;
            p.y2 = p.y1,
            p.y1 = v
        }
        return p
    }
    function c(t, e, n, i) {
        return "rgba(" + 100 * t + "%, " + 100 * e + "%, " + 100 * n + "%, " + i + ")"
    }
    function u(t) {
        return t < .32 ? [1, .5 + .5 * t / .32, .5] : t < .64 ? [1, 1, .5 + .5 * (t - .32) / .32] : [.75 + .25 * (1 - t) / .36, .75 + .25 * (1 - t) / .36, 1]
    }
    function l(t, e, n) {
        var i = {
            x2: 0,
            y2: 0,
            scale: 1,
            angle: 0
        };
        M(t, function(t, s) {
            var a = e[t.id]
              , c = t.cache;
            c || (c = t.cache = {}),
            c.scale = i.scale * t.scale,
            c.angle = i.angle + a.angle;
            var u = t.attach[0] - t.root[0]
              , l = t.attach[1] - t.root[1];
            c.x1 = i.x2,
            c.y1 = i.y2,
            c.x2 = c.x1 + c.scale * (u * r(c.angle) + l * o(c.angle)),
            c.y2 = c.y1 + c.scale * (-u * o(c.angle) + l * r(c.angle));
            var h = i;
            i = c,
            n(t, s),
            i = h
        })
    }
    function h(t) {
        var e = t.cache
          , n = e.x1 - t.root[0]
          , i = e.y1 - t.root[1];
        return a(-e.angle, n + t.root[0], i + t.root[1], n, i, n + e.scale * e.width, i + e.scale * e.height)
    }
    function A(t, e, n, i) {
        function s(t, n) {
            return e[t.id][n]
        }
        var a = i.width
          , A = i.height
          , d = i.debug
          , f = i.urlPrefix
          , p = ""
          , g = i.imgCache
          , v = i.el.getContext("2d")
          , m = Number(i.el.getAttribute("data-density"));
        m > 1 && (p = "2x-");
        var y = [];
        M(t, function(t, e) {
            t.img && y.push(f + p + t.img),
            e()
        }),
        g.getAll(y, function(g) {
            function y(t) {
                for (var e = 0; e < n.length; e++) {
                    var i = n[e];
                    x.save(),
                    x.beginPath(),
                    x.moveTo(i.pos[0], i.pos[1]);
                    var s = i.pos[0] + C * r(i.pointAngle - i.beamAngle / 2)
                      , a = i.pos[1] + C * o(i.pointAngle - i.beamAngle / 2);
                    x.lineTo(s, a),
                    x.arc(i.pos[0], i.pos[1], C, (i.pointAngle - i.beamAngle / 2) * S, (i.pointAngle + i.beamAngle / 2) * S),
                    x.lineTo(i.pos[0], i.pos[1]),
                    t(i),
                    x.restore()
                }
            }
            v.save(),
            v.scale(m, -m),
            v.translate(0, -A),
            v.clearRect(0, 0, a, A);
            var b;
            l(t, e, function(t, n) {
                var i = t.cache;
                if (v.save(),
                v.rotate(s(t, "angle") * -S),
                v.scale(t.scale, t.scale),
                e._selected && (t.id === e._selected.id && (v.globalAlpha = .5),
                t.id === e._selected.circled && (b = t)),
                t.img) {
                    var o = f + p + t.img
                      , r = g[o];
                    r && (v.save(),
                    v.scale(1 / m, -1 / m),
                    v.translate(0, -r.height),
                    v.drawImage(r, -t.root[0] * m, t.root[1] * m),
                    v.restore(),
                    i.width = r.width / m,
                    i.height = r.height / m)
                }
                v.translate(t.attach[0] - t.root[0], t.attach[1] - t.root[1]),
                n(),
                v.restore()
            });
            var w = document.createElement("canvas");
            w.width = i.el.width,
            w.height = i.el.height;
            var x = w.getContext("2d");
            x.scale(m, m);
            var C = Math.sqrt(Math.pow(a, 2) + Math.pow(A, 2));
            if (y(function(t) {
                var e = x.createRadialGradient(t.pos[0], t.pos[1], 0, t.pos[0], t.pos[1], C)
                  , n = u(t.temp);
                e.addColorStop(0, c(n[0], n[1], n[2], 1)),
                e.addColorStop(1, c(n[0], n[1], n[2], 0)),
                x.fillStyle = e,
                x.globalCompositeOperation = "lighten",
                x.fill()
            }),
            y(function(t) {
                x.globalAlpha = .4,
                x.strokeStyle = "black",
                x.stroke()
            }),
            v.save(),
            v.scale(1 / m, 1 / m),
            v.globalCompositeOperation = "source-atop",
            v.globalAlpha = .65,
            v.drawImage(w, 0, 0),
            v.globalAlpha = .25,
            v.globalCompositeOperation = "destination-over",
            v.drawImage(w, 0, 0),
            v.restore(),
            b) {
                b.cache;
                v.save(),
                v.beginPath();
                var E = h(b)
                  , D = E.x1 + (E.x2 - E.x1) / 2
                  , R = E.y1 + (E.y2 - E.y1) / 2
                  , O = Math.sqrt(Math.pow(E.x2 - E.x1, 2) + Math.pow(E.y2 - E.y1, 2));
                v.arc(D, R, O / 2 + 6, 0, N),
                v.strokeStyle = "red",
                v.lineWidth = 2,
                v.globalAlpha = .9,
                v.stroke(),
                v.restore()
            }
            d && M(t, function(t, e) {
                v.save();
                var n = t.cache;
                if (v.beginPath(),
                v.globalAlpha = .75,
                v.moveTo(n.x1, n.y1),
                v.lineTo(n.x2, n.y2),
                v.strokeStyle = t.proxyFor ? "lightgreen" : "magenta",
                v.lineWidth = 1,
                v.stroke(),
                e(),
                v.restore(),
                n.width) {
                    var i = h(t);
                    v.beginPath(),
                    v.rect(i.x1, i.y1, i.x2 - i.x1, i.y2 - i.y1),
                    v.strokeStyle = "red",
                    v.stroke()
                }
            }),
            v.restore(),
            i.onFinish && i.onFinish()
        })
    }
    function d(t) {
        this.el = t.el,
        this.opts = t,
        this.imgCache = new D,
        this._queued = !1,
        this._rendering = !1,
        this._afterNextRender = null,
        this.resetTree(),
        this.renderUI()
    }
    var f = i(["<div\n      className=", "\n      style=", "\n      onMouseDown=", "\n    />"], ["<div\n      className=", "\n      style=", "\n      onMouseDown=", "\n    />"])
      , p = i(["\n        <div>\n          <div style=", '>\n            <Handle\n              className="rotate"\n              disabled=', "\n              onDrag=", "\n              onRelease=", "\n            ></Handle>\n          </div>\n          <div style=", '>\n            <Handle\n              className="color"\n              style=', "\n              disabled=", "\n              onDrag=", "\n              onRelease=", "\n            ></Handle>\n          </div>\n        </div>\n      "], ["\n        <div>\n          <div style=", '>\n            <Handle\n              className="rotate"\n              disabled=', "\n              onDrag=", "\n              onRelease=", "\n            ></Handle>\n          </div>\n          <div style=", '>\n            <Handle\n              className="color"\n              style=', "\n              disabled=", "\n              onDrag=", "\n              onRelease=", "\n            ></Handle>\n          </div>\n        </div>\n      "])
      , g = i(["\n      <div\n        className=", "\n        style=", "\n        data-light-id=", '\n      >\n        <div>\n          <Handle\n            className="position"\n            disabled=', "\n            onGrab=", "\n            onDrag=", "\n            onRelease=", "\n          ></Handle>\n        </div>\n        ", "\n      </div>\n    "], ["\n      <div\n        className=", "\n        style=", "\n        data-light-id=", '\n      >\n        <div>\n          <Handle\n            className="position"\n            disabled=', "\n            onGrab=", "\n            onDrag=", "\n            onRelease=", "\n          ></Handle>\n        </div>\n        ", "\n      </div>\n    "])
      , v = i(['\n        <div className="tools">\n          <button\n            className="add-light"\n            disabled=', '\n            title="Create new light"\n            onClick=', '\n          >+</button>\n          <button\n            className="remove"\n            disabled=', '\n            title="Remove selected (delete key)"\n            onClick=', "\n          >x</button>\n        </div>\n      "], ['\n        <div className="tools">\n          <button\n            className="add-light"\n            disabled=', '\n            title="Create new light"\n            onClick=', '\n          >+</button>\n          <button\n            className="remove"\n            disabled=', '\n            title="Remove selected (delete key)"\n            onClick=', "\n          >x</button>\n        </div>\n      "])
      , m = i(['\n      <div id="comic">\n        <div\n          onMouseDown=', "\n          onKeyDown=", "\n          style=", "\n          className=", "\n          title=", '\n          tabIndex="1"\n        >\n          ', "\n          ", '\n          <div className="content">\n            <canvas\n              data-density=', "\n              width=", "\n              height=", "\n              style=", "\n              onMouseDown=", "\n            ></canvas>\n            ", "\n          </div>\n        </div>\n      </div>\n    "], ['\n      <div id="comic">\n        <div\n          onMouseDown=', "\n          onKeyDown=", "\n          style=", "\n          className=", "\n          title=", '\n          tabIndex="1"\n        >\n          ', "\n          ", '\n          <div className="content">\n            <canvas\n              data-density=', "\n              width=", "\n              height=", "\n              style=", "\n              onMouseDown=", "\n            ></canvas>\n            ", "\n          </div>\n        </div>\n      </div>\n    "])
      , y = i(['<div><div className="spinner"></div><div className="spinner-text">loading</div>'], ['<div><div className="spinner"></div><div className="spinner-text">loading</div>'])
      , b = i(["<Light\n                id=", "\n                disabled=", "\n                selected=", "\n                x=", "\n                y=", "\n                temp=", "\n                pointAngle=", "\n                beamAngle=", "\n                onInteract=", "\n                onMove=", "\n                onRotate=", "\n                onChangeColor=", "\n                onSave=", "\n              />"], ["<Light\n                id=", "\n                disabled=", "\n                selected=", "\n                x=", "\n                y=", "\n                temp=", "\n                pointAngle=", "\n                beamAngle=", "\n                onInteract=", "\n                onMove=", "\n                onRotate=", "\n                onChangeColor=", "\n                onSave=", "\n              />"])
      , w = n(95)
      , x = n(49)
      , C = n(31)
      , E = n(98)
      , D = n(45)
      , M = n(30)
      , R = Math.PI / 2
      , N = 2 * Math.PI
      , S = R / 90;
    w.component("Handle", {
        componentDidMount: function() {
            this._handleDragMove = this.handleDragMove.bind(this),
            this._handleDragUp = this.handleDragUp.bind(this),
            this.getDOMNode().firstChild.addEventListener("touchstart", this.handleDragDown.bind(this))
        },
        _stopListening: function() {
            window.removeEventListener("mousemove", this._handleDragMove, !1),
            window.removeEventListener("mouseup", this._handleDragUp, !1),
            window.removeEventListener("touchmove", this._handleDragMove, !1),
            window.removeEventListener("touchend", this._handleDragUp, !1)
        },
        componentWillUnmount: function() {
            this._stopListening()
        },
        _normalizeEvent: function(t) {
            t.touches && t.touches[0] && (t.clientX = t.touches[0].clientX,
            t.clientY = t.touches[0].clientY)
        },
        handleDragDown: function(t) {
            this.props.disabled || (document.documentElement.style.cursor = "move",
            window.addEventListener("mousemove", this._handleDragMove, !1),
            window.addEventListener("mouseup", this._handleDragUp, !1),
            window.addEventListener("touchmove", this._handleDragMove, !1),
            window.addEventListener("touchend", this._handleDragUp, !1),
            this.props.onGrab && (this._normalizeEvent(t),
            this.props.onGrab(t)),
            t.preventDefault())
        },
        handleDragUp: function(t) {
            document.documentElement.style.cursor = null,
            this._stopListening(),
            this.props.onRelease && (this._normalizeEvent(t),
            this.props.onRelease(t)),
            t.preventDefault()
        },
        handleDragMove: function(t) {
            this.props.onDrag && (this._normalizeEvent(t),
            this.props.onDrag(t)),
            t.preventDefault()
        },
        render: function() {
            return w(f, x("handle", this.props.className), this.props.style || "", this.handleDragDown.bind(this))
        }
    }),
    w.component("Light", {
        handleRotate: function(t) {
            var e = this.getDOMNode().firstChild.getBoundingClientRect()
              , n = t.clientX - e.left
              , i = t.clientY - e.top
              , o = s(-Math.atan2(i, n) / S, 360)
              , r = Math.sqrt(Math.pow(n, 2) + Math.pow(i, 2));
            this.props.onRotate(o, C(0, 95 - 3 * (r - 42), 95))
        },
        handleRotateColor: function(t) {
            var e = this.getDOMNode().firstChild.getBoundingClientRect()
              , n = t.clientX - e.left
              , i = t.clientY - e.top
              , o = C(90, s(-Math.atan2(i, n) / S - this.props.pointAngle, 360), 270) - 90;
            this.props.onChangeColor(o / 180)
        },
        render: function() {
            var t = E({
                left: this.props.x + "px",
                top: this.props.y + "px",
                transform: "rotate(" + (-this.props.pointAngle - 90) + "deg)"
            })
              , e = "";
            if (this.props.selected) {
                var n = 42 + C(0, (95 - this.props.beamAngle) / 3, 95)
                  , i = E({
                    position: "absolute",
                    top: n + "px"
                })
                  , s = 180 * this.props.temp
                  , a = u(this.props.temp)
                  , l = E({
                    position: "absolute",
                    left: 39 * r(-s) + "px",
                    top: 39 * o(-s) + "px"
                })
                  , h = E({
                    backgroundColor: c(a[0], a[1], a[2], 1)
                });
                e = w(p, i, this.props.disabled, this.handleRotate.bind(this), this.props.onSave, l, h, this.props.disabled, this.handleRotateColor.bind(this), this.props.onSave)
            }
            return w(g, x("light", this.props.selected && "selected"), t, this.props.id, this.props.disabled, this.props.onInteract, this.props.onMove, this.props.onSave, e)
        }
    }),
    d.prototype = {
        STIFFNESS: .25,
        FRICTION: .1,
        MAX_LIGHTS: 3,
        FPS: 15,
        resetTree: function() {
            this.l = null,
            this.lights = [],
            this.state = {
                _selected: null
            }
        },
        renderUI: function() {
            var t = "";
            this.opts.readOnly || this.opts.loading || (t = w(v, this.lights.length === this.MAX_LIGHTS, this.handleCreateLight.bind(this), !this.state._selected, this.handleRemoveSelection.bind(this)));
            var e = E({
                width: this.opts.width + "px",
                height: this.opts.height + "px"
            })
              , n = window.devicePixelRatio > 1 ? 2 : 1
              , i = E({
                transformOrigin: "0 0",
                transform: "scale(" + 1 / n + ", " + 1 / n + ")"
            })
              , o = x("frame", this.opts.loading && "loading");
            w.render(w(m, this.handleMouseDown.bind(this), this.handleKeyDown.bind(this), e, o, this.opts.title, t, this.opts.loading ? w(y) : "", n, this.opts.width * n, this.opts.height * n, i, this.handleCanvasMouseDown.bind(this), this.lights.map(function(t) {
                var e = Boolean(this.state._selected && "light" === this.state._selected.kind && this.state._selected.id === t.id);
                return w(b, t.id, this.opts.readOnly, e, t.pos[0], this.opts.height - t.pos[1], t.temp, t.pointAngle, t.beamAngle, this.handleLightInteract.bind(this, t.id), this.handleLightMove.bind(this, t.id), this.handleLightRotate.bind(this, t.id), this.handleLightChangeColor.bind(this, t.id), this.saveLight.bind(this, t.id))
            }
            .bind(this))), this.el)
        },
        update: function(t) {
            this.l = t.tree;
            var e = 0
              , n = {};
            M(this.l, function(t, i) {
                e++;
                var o = t.img || "proxy";
                n[o] = n[o] || {
                    count: 0
                },
                n[o].count++;
                var r = this.state[t.id];
                r || (r = this.state[t.id] = {
                    angle: t.angle,
                    av: 0
                }),
                r.node = t,
                i()
            }
            .bind(this)),
            this.lights = t.lights || [];
            var i = Date.now();
            this._afterNextRender = function() {
                if (this.opts.loading = !1,
                this.renderUI(),
                this._afterNextRender = null,
                this.opts.debug) {
                    var o = Date.now() - i;
                    console.debug("updated. rendered", e, "nodes in", o, "ms", "| supply:", t.supply),
                    console.table(n)
                }
            }
            .bind(this),
            this.renderCanvas()
        },
        addWind: function(t, e, n) {
            M(this.l, function(i, r) {
                if (!i.rigid && i.cache) {
                    var s = this.state[i.id]
                      , a = o(t - i.cache.angle)
                      , c = 1 - n + Math.random() * n;
                    s.av += i.waviness * c * (1 / Math.sqrt(i.cache.scale)) * a * e
                }
                r()
            }
            .bind(this)),
            this.queueStep()
        },
        queueStep: function() {
            this._queued || (setTimeout(this.step.bind(this), 1e3 / this.FPS),
            this._queued = Date.now())
        },
        step: function() {
            this.opts.beforeStep && this.opts.beforeStep(),
            M(this.l, function(t, e) {
                var n = this.state[t.id];
                n.av += (1 - t.waviness) * t.scale * this.STIFFNESS * (t.angle - n.angle),
                n.av += -n.av * this.FRICTION,
                n.angle += n.av,
                e()
            }
            .bind(this)),
            this.renderCanvas(),
            this._queued = !1,
            this.queueStep()
        },
        renderCanvas: function() {
            !this._rendering && this.l && (this._rendering = !0,
            A(this.l, this.state, this.lights, {
                width: this.opts.width,
                height: this.opts.height,
                el: this.el.querySelector("canvas"),
                urlPrefix: this.opts.urlPrefix,
                imgCache: this.imgCache,
                debug: this.opts.debug,
                onFinish: function() {
                    this._afterNextRender && this._afterNextRender(),
                    this._rendering = !1
                }
                .bind(this)
            }))
        },
        handleMouseDown: function() {
            this.el.querySelector(".frame").focus()
        },
        _deselect: function() {
            this.state._selected = null,
            this.renderCanvas(),
            this.renderUI()
        },
        handleCanvasMouseDown: function(t) {
            if (!this.opts.readOnly) {
                this._deselect();
                var e = this.el.getBoundingClientRect()
                  , n = t.clientX - e.left
                  , i = this.opts.height - (t.clientY - e.top)
                  , o = null
                  , r = Number.MAX_VALUE;
                if (M(this.l, function(t, e) {
                    var s = t.cache;
                    if (s && s.width && !t.immutable) {
                        var a = h(t);
                        if (a.x1 <= n && a.x2 >= n && a.y1 <= i && a.y2 >= i) {
                            var c = (a.x2 - a.x1) * (a.y2 - a.y1);
                            c < r && (o = t,
                            r = c)
                        }
                    }
                    e()
                }),
                o) {
                    var s = o.proxyFor || o.id;
                    this.state._selected = {
                        kind: "node",
                        id: s,
                        circled: o.id
                    }
                }
                this.renderCanvas(),
                this.renderUI()
            }
        },
        handleKeyDown: function(t) {
            46 !== t.which && 8 !== t.which || (this.handleRemoveSelection(),
            t.preventDefault())
        },
        handleLightInteract: function(t) {
            this.opts.readOnly || (this.state._selected = {
                kind: "light",
                id: t
            },
            this.renderCanvas(),
            this.renderUI())
        },
        handleLightMove: function(t, e) {
            var n = this.el.getBoundingClientRect()
              , i = C(0, e.clientX - n.left, this.opts.width)
              , o = C(0, this.opts.height - (e.clientY - n.top), this.opts.height);
            this.setLight(t, {
                pos: [i, o]
            })
        },
        handleLightRotate: function(t, e, n) {
            this.setLight(t, {
                pointAngle: e,
                beamAngle: n
            })
        },
        handleLightChangeColor: function(t, e) {
            this.setLight(t, {
                temp: e
            })
        },
        setLight: function(t, e) {
            this.opts.onLightChanging(t);
            var n = this.lights.findIndex(function(e) {
                return e.id === t
            });
            n !== -1 && (Object.assign(this.lights[n], e),
            this.renderCanvas(),
            this.renderUI())
        },
        saveLight: function(t) {
            var e = this.lights.findIndex(function(e) {
                return e.id === t
            });
            e !== -1 && this.opts.onSetLight(t, this.lights[e])
        },
        handleCreateLight: function() {
            var t = this.opts.width * Math.random()
              , e = (this.opts.height + this.opts.height * Math.random()) / 2
              , n = this.opts.width / 2
              , i = 0;
            this.opts.onSetLight(null, {
                pos: [t, e],
                pointAngle: Math.atan2(i - e, n - t) / S,
                beamAngle: 45 + 45 * Math.random(),
                temp: .5
            })
        },
        handleRemoveSelection: function() {
            this.state._selected && ("node" === this.state._selected.kind ? this.opts.onPruneNode(this.state._selected.id) : "light" === this.state._selected.kind && this.opts.onRemoveLight(this.state._selected.id),
            this._deselect())
        }
    },
    t.exports = d
}
, function(t, e, n) {
    var i = n(31);
    t.exports = function(t) {
        function e() {
            var e = 2 * (Math.random() - .5);
            Math.random() > .9 && (n += Math.random() - .5),
            o = i(60, o + 2 * (Math.random() - .5), 120),
            n *= .995,
            t.addWind(o, .025 * e + .25 * n, .5)
        }
        var n = 0
          , o = 90;
        t.opts.beforeStep = e,
        e()
    }
}
, function(t, e, n) {
    function i(t, e, n) {
        function i(t) {
            if (Array.isArray(t))
                for (var e = 0; e < t.length; e++) {
                    var n = t[e];
                    if (Array.isArray(n))
                        i(n);
                    else {
                        if (("number" == typeof n || "boolean" == typeof n || n instanceof Date || n instanceof RegExp) && (n = n.toString()),
                        "string" == typeof n) {
                            if (r.lastChild && "#text" === r.lastChild.nodeName) {
                                r.lastChild.nodeValue += n;
                                continue
                            }
                            n = o.createTextNode(n)
                        }
                        n && n.nodeType && r.appendChild(n)
                    }
                }
        }
        var r;
        c.indexOf(t) !== -1 && (e.namespace = s);
        var u = !1;
        e.namespace && (u = e.namespace,
        delete e.namespace),
        r = u ? o.createElementNS(u, t) : o.createElement(t);
        for (var l in e)
            if (e.hasOwnProperty(l)) {
                var h = l.toLowerCase()
                  , A = e[l];
                if ("classname" === h && (h = "class",
                l = "class"),
                a[h])
                    if ("true" === A)
                        A = h;
                    else if ("false" === A)
                        continue;
                "on" === h.slice(0, 2) ? r[l] = A : u ? r.setAttributeNS(null, l, A) : r.setAttribute(l, A)
            }
        return i(n),
        r
    }
    var o = n(96)
      , r = n(44)
      , s = "http://www.w3.org/2000/svg"
      , a = {
        autofocus: 1,
        checked: 1,
        defaultchecked: 1,
        disabled: 1,
        formnovalidate: 1,
        indeterminate: 1,
        readonly: 1,
        required: 1,
        willvalidate: 1
    }
      , c = ["svg", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignObject", "glyph", "glyphRef", "hkern", "image", "line", "linearGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "set", "stop", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"];
    t.exports = r(i),
    t.exports.createElement = i
}
, function(t, e, n) {
    var i, o;
    /*!
	  Copyright (c) 2017 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
    !function() {
        "use strict";
        function n() {
            for (var t = [], e = 0; e < arguments.length; e++) {
                var i = arguments[e];
                if (i) {
                    var o = typeof i;
                    if ("string" === o || "number" === o)
                        t.push(i);
                    else if (Array.isArray(i) && i.length) {
                        var s = n.apply(null, i);
                        s && t.push(s)
                    } else if ("object" === o)
                        for (var a in i)
                            r.call(i, a) && i[a] && t.push(a)
                }
            }
            return t.join(" ")
        }
        var r = {}.hasOwnProperty;
        "undefined" != typeof t && t.exports ? (n["default"] = n,
        t.exports = n) : (i = [],
        o = function() {
            return n
        }
        .apply(e, i),
        !(void 0 !== o && (t.exports = o)))
    }()
}
, function(t, e, n) {
    n(88),
    n(90),
    n(91),
    n(89),
    t.exports = n(3).Promise
}
, function(t, e, n) {
    n(82),
    t.exports = n(3).Array.filter
}
, function(t, e, n) {
    n(83),
    t.exports = n(3).Array.findIndex
}
, function(t, e, n) {
    n(85),
    t.exports = n(3).Array.map
}
, function(t, e, n) {
    n(86),
    t.exports = n(3).Date.now
}
, function(t, e, n) {
    n(87),
    t.exports = n(3).Object.assign
}
, function(t, e) {
    t.exports = function(t, e, n, i) {
        if (!(t instanceof e) || void 0 !== i && i in t)
            throw TypeError(n + ": incorrect invocation!");
        return t
    }
}
, function(t, e, n) {
    var i = n(16)
      , o = n(27)
      , r = n(80);
    t.exports = function(t) {
        return function(e, n, s) {
            var a, c = i(e), u = o(c.length), l = r(s, u);
            if (t && n != n) {
                for (; u > l; )
                    if (a = c[l++],
                    a != a)
                        return !0
            } else
                for (; u > l; l++)
                    if ((t || l in c) && c[l] === n)
                        return t || l || 0;
            return !t && -1
        }
    }
}
, function(t, e, n) {
    var i = n(10)
      , o = n(62)
      , r = n(1)("species");
    t.exports = function(t, e) {
        var n;
        return o(t) && (n = t.constructor,
        "function" != typeof n || n !== Array && !o(n.prototype) || (n = void 0),
        i(n) && (n = n[r],
        null === n && (n = void 0))),
        new (void 0 === n ? Array : n)(e)
    }
}
, function(t, e, n) {
    var i = n(6)
      , o = n(63)
      , r = n(61)
      , s = n(4)
      , a = n(27)
      , c = n(81);
    t.exports = function(t, e, n, u, l) {
        var h, A, d, f = l ? function() {
            return t
        }
        : c(t), p = i(n, u, e ? 2 : 1), g = 0;
        if ("function" != typeof f)
            throw TypeError(t + " is not iterable!");
        if (r(f))
            for (h = a(t.length); h > g; g++)
                e ? p(s(A = t[g])[0], A[1]) : p(t[g]);
        else
            for (d = f.call(t); !(A = d.next()).done; )
                o(d, p, A.value, e)
    }
}
, function(t, e) {
    t.exports = function(t, e, n) {
        var i = void 0 === n;
        switch (e.length) {
        case 0:
            return i ? t() : t.call(n);
        case 1:
            return i ? t(e[0]) : t.call(n, e[0]);
        case 2:
            return i ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
        case 3:
            return i ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
        case 4:
            return i ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3])
        }
        return t.apply(n, e)
    }
}
, function(t, e, n) {
    var i = n(12)
      , o = n(1)("iterator")
      , r = Array.prototype;
    t.exports = function(t) {
        return void 0 !== t && (i.Array === t || r[o] === t)
    }
}
, function(t, e, n) {
    var i = n(11);
    t.exports = Array.isArray || function(t) {
        return "Array" == i(t)
    }
}
, function(t, e, n) {
    var i = n(4);
    t.exports = function(t, e, n, o) {
        try {
            return o ? e(i(n)[0], n[1]) : e(n)
        } catch (r) {
            var s = t["return"];
            throw void 0 !== s && i(s.call(t)),
            r
        }
    }
}
, function(t, e, n) {
    "use strict";
    var i = n(69)
      , o = n(23)
      , r = n(24)
      , s = {};
    n(9)(s, n(1)("iterator"), function() {
        return this
    }),
    t.exports = function(t, e, n) {
        t.prototype = i(s, {
            next: o(1, n)
        }),
        r(t, e + " Iterator")
    }
}
, function(t, e, n) {
    var i = n(1)("iterator")
      , o = !1;
    try {
        var r = [7][i]();
        r["return"] = function() {
            o = !0
        }
        ,
        Array.from(r, function() {
            throw 2
        })
    } catch (s) {}
    t.exports = function(t, e) {
        if (!e && !o)
            return !1;
        var n = !1;
        try {
            var r = [7]
              , s = r[i]();
            s.next = function() {
                return {
                    done: n = !0
                }
            }
            ,
            r[i] = function() {
                return s
            }
            ,
            t(r)
        } catch (a) {}
        return n
    }
}
, function(t, e) {
    t.exports = function(t, e) {
        return {
            value: e,
            done: !!t
        }
    }
}
, function(t, e, n) {
    var i, o, r, s = n(2), a = n(42).set, c = s.MutationObserver || s.WebKitMutationObserver, u = s.process, l = s.Promise, h = "process" == n(11)(u), A = function() {
        var t, e;
        for (h && (t = u.domain) && t.exit(); i; )
            e = i.fn,
            e(),
            i = i.next;
        o = void 0,
        t && t.enter()
    };
    if (h)
        r = function() {
            u.nextTick(A)
        }
        ;
    else if (c) {
        var d = !0
          , f = document.createTextNode("");
        new c(A).observe(f, {
            characterData: !0
        }),
        r = function() {
            f.data = d = !d
        }
    } else
        r = l && l.resolve ? function() {
            l.resolve().then(A)
        }
        : function() {
            a.call(s, A)
        }
        ;
    t.exports = function(t) {
        var e = {
            fn: t,
            next: void 0
        };
        o && (o.next = e),
        i || (i = e,
        r()),
        o = e
    }
}
, function(t, e, n) {
    "use strict";
    var i = n(38)
      , o = n(72)
      , r = n(39)
      , s = n(28)
      , a = n(22)
      , c = Object.assign;
    t.exports = !c || n(14)(function() {
        var t = {}
          , e = {}
          , n = Symbol()
          , i = "abcdefghijklmnopqrst";
        return t[n] = 7,
        i.split("").forEach(function(t) {
            e[t] = t
        }),
        7 != c({}, t)[n] || Object.keys(c({}, e)).join("") != i
    }) ? function(t, e) {
        for (var n = s(t), c = arguments.length, u = 1, l = o.f, h = r.f; c > u; )
            for (var A, d = a(arguments[u++]), f = l ? i(d).concat(l(d)) : i(d), p = f.length, g = 0; p > g; )
                h.call(d, A = f[g++]) && (n[A] = d[A]);
        return n
    }
    : c
}
, function(t, e, n) {
    var i = n(4)
      , o = n(70)
      , r = n(33)
      , s = n(25)("IE_PROTO")
      , a = function() {}
      , c = "prototype"
      , u = function() {
        var t, e = n(21)("iframe"), i = r.length, o = ">";
        for (e.style.display = "none",
        n(34).appendChild(e),
        e.src = "javascript:",
        t = e.contentWindow.document,
        t.open(),
        t.write("<script>document.F=Object</script" + o),
        t.close(),
        u = t.F; i--; )
            delete u[c][r[i]];
        return u()
    };
    t.exports = Object.create || function(t, e) {
        var n;
        return null !== t ? (a[c] = i(t),
        n = new a,
        a[c] = null,
        n[s] = t) : n = u(),
        void 0 === e ? n : o(n, e)
    }
}
, function(t, e, n) {
    var i = n(15)
      , o = n(4)
      , r = n(38);
    t.exports = n(7) ? Object.defineProperties : function(t, e) {
        o(t);
        for (var n, s = r(e), a = s.length, c = 0; a > c; )
            i.f(t, n = s[c++], e[n]);
        return t
    }
}
, function(t, e, n) {
    var i = n(39)
      , o = n(23)
      , r = n(16)
      , s = n(43)
      , a = n(8)
      , c = n(35)
      , u = Object.getOwnPropertyDescriptor;
    e.f = n(7) ? u : function(t, e) {
        if (t = r(t),
        e = s(e, !0),
        c)
            try {
                return u(t, e)
            } catch (n) {}
        if (a(t, e))
            return o(!i.f.call(t, e), t[e])
    }
}
, function(t, e) {
    e.f = Object.getOwnPropertySymbols
}
, function(t, e, n) {
    var i = n(8)
      , o = n(28)
      , r = n(25)("IE_PROTO")
      , s = Object.prototype;
    t.exports = Object.getPrototypeOf || function(t) {
        return t = o(t),
        i(t, r) ? t[r] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? s : null
    }
}
, function(t, e, n) {
    var i = n(8)
      , o = n(16)
      , r = n(57)(!1)
      , s = n(25)("IE_PROTO");
    t.exports = function(t, e) {
        var n, a = o(t), c = 0, u = [];
        for (n in a)
            n != s && i(a, n) && u.push(n);
        for (; e.length > c; )
            i(a, n = e[c++]) && (~r(u, n) || u.push(n));
        return u
    }
}
, function(t, e, n) {
    var i = n(13);
    t.exports = function(t, e, n) {
        for (var o in e)
            i(t, o, e[o], n);
        return t
    }
}
, function(t, e, n) {
    var i = n(10)
      , o = n(4)
      , r = function(t, e) {
        if (o(t),
        !i(e) && null !== e)
            throw TypeError(e + ": can't set as prototype!")
    };
    t.exports = {
        set: Object.setPrototypeOf || ("__proto__"in {} ? function(t, e, i) {
            try {
                i = n(6)(Function.call, n(71).f(Object.prototype, "__proto__").set, 2),
                i(t, []),
                e = !(t instanceof Array)
            } catch (o) {
                e = !0
            }
            return function(t, n) {
                return r(t, n),
                e ? t.__proto__ = n : i(t, n),
                t
            }
        }({}, !1) : void 0),
        check: r
    }
}
, function(t, e, n) {
    "use strict";
    var i = n(2)
      , o = n(15)
      , r = n(7)
      , s = n(1)("species");
    t.exports = function(t) {
        var e = i[t];
        r && e && !e[s] && o.f(e, s, {
            configurable: !0,
            get: function() {
                return this
            }
        })
    }
}
, function(t, e, n) {
    var i = n(4)
      , o = n(17)
      , r = n(1)("species");
    t.exports = function(t, e) {
        var n, s = i(t).constructor;
        return void 0 === s || void 0 == (n = i(s)[r]) ? e : o(n)
    }
}
, function(t, e, n) {
    var i = n(26)
      , o = n(20);
    t.exports = function(t) {
        return function(e, n) {
            var r, s, a = String(o(e)), c = i(n), u = a.length;
            return c < 0 || c >= u ? t ? "" : void 0 : (r = a.charCodeAt(c),
            r < 55296 || r > 56319 || c + 1 === u || (s = a.charCodeAt(c + 1)) < 56320 || s > 57343 ? t ? a.charAt(c) : r : t ? a.slice(c, c + 2) : (r - 55296 << 10) + (s - 56320) + 65536)
        }
    }
}
, function(t, e, n) {
    var i = n(26)
      , o = Math.max
      , r = Math.min;
    t.exports = function(t, e) {
        return t = i(t),
        t < 0 ? o(t + e, 0) : r(t, e)
    }
}
, function(t, e, n) {
    var i = n(19)
      , o = n(1)("iterator")
      , r = n(12);
    t.exports = n(3).getIteratorMethod = function(t) {
        if (void 0 != t)
            return t[o] || t["@@iterator"] || r[i(t)]
    }
}
, function(t, e, n) {
    "use strict";
    var i = n(5)
      , o = n(18)(2);
    i(i.P + i.F * !n(41)([].filter, !0), "Array", {
        filter: function(t) {
            return o(this, t, arguments[1])
        }
    })
}
, function(t, e, n) {
    "use strict";
    var i = n(5)
      , o = n(18)(6)
      , r = "findIndex"
      , s = !0;
    r in [] && Array(1)[r](function() {
        s = !1
    }),
    i(i.P + i.F * s, "Array", {
        findIndex: function(t) {
            return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }),
    n(32)(r)
}
, function(t, e, n) {
    "use strict";
    var i = n(32)
      , o = n(66)
      , r = n(12)
      , s = n(16);
    t.exports = n(36)(Array, "Array", function(t, e) {
        this._t = s(t),
        this._i = 0,
        this._k = e
    }, function() {
        var t = this._t
          , e = this._k
          , n = this._i++;
        return !t || n >= t.length ? (this._t = void 0,
        o(1)) : "keys" == e ? o(0, n) : "values" == e ? o(0, t[n]) : o(0, [n, t[n]])
    }, "values"),
    r.Arguments = r.Array,
    i("keys"),
    i("values"),
    i("entries")
}
, function(t, e, n) {
    "use strict";
    var i = n(5)
      , o = n(18)(1);
    i(i.P + i.F * !n(41)([].map, !0), "Array", {
        map: function(t) {
            return o(this, t, arguments[1])
        }
    })
}
, function(t, e, n) {
    var i = n(5);
    i(i.S, "Date", {
        now: function() {
            return (new Date).getTime()
        }
    })
}
, function(t, e, n) {
    var i = n(5);
    i(i.S + i.F, "Object", {
        assign: n(68)
    })
}
, function(t, e, n) {
    "use strict";
    var i = n(19)
      , o = {};
    o[n(1)("toStringTag")] = "z",
    o + "" != "[object z]" && n(13)(Object.prototype, "toString", function() {
        return "[object " + i(this) + "]"
    }, !0)
}
, function(t, e, n) {
    "use strict";
    var i, o, r, s = n(37), a = n(2), c = n(6), u = n(19), l = n(5), h = n(10), A = (n(4),
    n(17)), d = n(56), f = n(59), p = (n(76).set,
    n(78)), g = n(42).set, v = n(67), m = "Promise", y = a.TypeError, b = a.process, w = a[m], b = a.process, x = "process" == u(b), C = function() {}, E = !!function() {
        try {
            var t = w.resolve(1)
              , e = (t.constructor = {})[n(1)("species")] = function(t) {
                t(C, C)
            }
            ;
            return (x || "function" == typeof PromiseRejectionEvent) && t.then(C)instanceof e
        } catch (i) {}
    }(), D = function(t, e) {
        return t === e || t === w && e === r
    }, M = function(t) {
        var e;
        return !(!h(t) || "function" != typeof (e = t.then)) && e
    }, R = function(t) {
        return D(w, t) ? new N(t) : new o(t)
    }, N = o = function(t) {
        var e, n;
        this.promise = new t(function(t, i) {
            if (void 0 !== e || void 0 !== n)
                throw y("Bad Promise constructor");
            e = t,
            n = i
        }
        ),
        this.resolve = A(e),
        this.reject = A(n)
    }
    , S = function(t) {
        try {
            t()
        } catch (e) {
            return {
                error: e
            }
        }
    }, O = function(t, e) {
        if (!t._n) {
            t._n = !0;
            var n = t._c;
            v(function() {
                for (var i = t._v, o = 1 == t._s, r = 0, s = function(e) {
                    var n, r, s = o ? e.ok : e.fail, a = e.resolve, c = e.reject, u = e.domain;
                    try {
                        s ? (o || (2 == t._h && L(t),
                        t._h = 1),
                        s === !0 ? n = i : (u && u.enter(),
                        n = s(i),
                        u && u.exit()),
                        n === e.promise ? c(y("Promise-chain cycle")) : (r = M(n)) ? r.call(n, a, c) : a(n)) : c(i)
                    } catch (l) {
                        c(l)
                    }
                }; n.length > r; )
                    s(n[r++]);
                t._c = [],
                t._n = !1,
                e && !t._h && U(t)
            })
        }
    }, U = function(t) {
        g.call(a, function() {
            var e, n, i, o = t._v;
            if (I(t) && (e = S(function() {
                x ? b.emit("unhandledRejection", o, t) : (n = a.onunhandledrejection) ? n({
                    promise: t,
                    reason: o
                }) : (i = a.console) && i.error && i.error("Unhandled promise rejection", o)
            }),
            t._h = x || I(t) ? 2 : 1),
            t._a = void 0,
            e)
                throw e.error
        })
    }, I = function(t) {
        if (1 == t._h)
            return !1;
        for (var e, n = t._a || t._c, i = 0; n.length > i; )
            if (e = n[i++],
            e.fail || !I(e.promise))
                return !1;
        return !0
    }, L = function(t) {
        g.call(a, function() {
            var e;
            x ? b.emit("rejectionHandled", t) : (e = a.onrejectionhandled) && e({
                promise: t,
                reason: t._v
            })
        })
    }, k = function(t) {
        var e = this;
        e._d || (e._d = !0,
        e = e._w || e,
        e._v = t,
        e._s = 2,
        e._a || (e._a = e._c.slice()),
        O(e, !0))
    }, B = function(t) {
        var e, n = this;
        if (!n._d) {
            n._d = !0,
            n = n._w || n;
            try {
                if (n === t)
                    throw y("Promise can't be resolved itself");
                (e = M(t)) ? v(function() {
                    var i = {
                        _w: n,
                        _d: !1
                    };
                    try {
                        e.call(t, c(B, i, 1), c(k, i, 1))
                    } catch (o) {
                        k.call(i, o)
                    }
                }) : (n._v = t,
                n._s = 1,
                O(n, !1))
            } catch (i) {
                k.call({
                    _w: n,
                    _d: !1
                }, i)
            }
        }
    };
    E || (w = function(t) {
        d(this, w, m, "_h"),
        A(t),
        i.call(this);
        try {
            t(c(B, this, 1), c(k, this, 1))
        } catch (e) {
            k.call(this, e)
        }
    }
    ,
    i = function(t) {
        this._c = [],
        this._a = void 0,
        this._s = 0,
        this._d = !1,
        this._v = void 0,
        this._h = 0,
        this._n = !1
    }
    ,
    i.prototype = n(75)(w.prototype, {
        then: function(t, e) {
            var n = R(p(this, w));
            return n.ok = "function" != typeof t || t,
            n.fail = "function" == typeof e && e,
            n.domain = x ? b.domain : void 0,
            this._c.push(n),
            this._a && this._a.push(n),
            this._s && O(this, !1),
            n.promise
        },
        "catch": function(t) {
            return this.then(void 0, t)
        }
    }),
    N = function() {
        var t = new i;
        this.promise = t,
        this.resolve = c(B, t, 1),
        this.reject = c(k, t, 1)
    }
    ),
    l(l.G + l.W + l.F * !E, {
        Promise: w
    }),
    n(24)(w, m),
    n(77)(m),
    r = n(3)[m],
    l(l.S + l.F * !E, m, {
        reject: function(t) {
            var e = R(this)
              , n = e.reject;
            return n(t),
            e.promise
        }
    }),
    l(l.S + l.F * (s || !E), m, {
        resolve: function(t) {
            if (t instanceof w && D(t.constructor, this))
                return t;
            var e = R(this)
              , n = e.resolve;
            return n(t),
            e.promise
        }
    }),
    l(l.S + l.F * !(E && n(65)(function(t) {
        w.all(t)["catch"](C)
    })), m, {
        all: function(t) {
            var e = this
              , n = R(e)
              , i = n.resolve
              , o = n.reject
              , r = S(function() {
                var n = []
                  , r = 0
                  , s = 1;
                f(t, !1, function(t) {
                    var a = r++
                      , c = !1;
                    n.push(void 0),
                    s++,
                    e.resolve(t).then(function(t) {
                        c || (c = !0,
                        n[a] = t,
                        --s || i(n))
                    }, o)
                }),
                --s || i(n)
            });
            return r && o(r.error),
            n.promise
        },
        race: function(t) {
            var e = this
              , n = R(e)
              , i = n.reject
              , o = S(function() {
                f(t, !1, function(t) {
                    e.resolve(t).then(n.resolve, i)
                })
            });
            return o && i(o.error),
            n.promise
        }
    })
}
, function(t, e, n) {
    "use strict";
    var i = n(79)(!0);
    n(36)(String, "String", function(t) {
        this._t = String(t),
        this._i = 0
    }, function() {
        var t, e = this._t, n = this._i;
        return n >= e.length ? {
            value: void 0,
            done: !0
        } : (t = i(e, n),
        this._i += t.length,
        {
            value: t,
            done: !1
        })
    })
}
, function(t, e, n) {
    for (var i = n(84), o = n(13), r = n(2), s = n(9), a = n(12), c = n(1), u = c("iterator"), l = c("toStringTag"), h = a.Array, A = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], d = 0; d < 5; d++) {
        var f, p = A[d], g = r[p], v = g && g.prototype;
        if (v) {
            v[u] || s(v, u, h),
            v[l] || s(v, l, p),
            a[p] = h;
            for (f in i)
                v[f] || o(v, f, i[f], !0)
        }
    }
}
, function(t, e, n) {
    e = t.exports = n(93)(),
    e.push([t.id, "#comic{position:relative;display:inline-block;outline:2px solid #000;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}#comic .frame{background:#fff;transition:background-color .5s ease}#comic .frame:focus{outline:none}#comic .frame .content{opacity:1;transition:opacity .5s ease}#comic .frame.loading{background:#fff}#comic .frame.loading .content{opacity:0}#comic .spinner{position:absolute;left:50%;top:45%;width:50px;height:52px;margin-left:-30px;margin-top:-26px;background-image:url(" + n(105) + ");background-size:contain;animation-name:rotate;animation-iteration-count:infinite;animation-timing-function:linear;animation-duration:2s;transform-origin:56% 50%}@keyframes rotate{0%{transform:rotateY(0)}50%{transform:rotateY(1turn)}to{transform:rotateY(0)}}#comic .spinner-text{font-size:0;position:absolute;left:50%;top:53%;width:91px;height:17px;margin-left:-45.5px;background-image:url(" + n(104) + ");background-repeat:no-repeat}#comic .light{position:absolute;z-index:200}#comic .light .handle{position:absolute;transform:translate(-50%,-50%)}#comic .light .handle.position{width:40px;height:44px;background-image:url(" + n(103) + ');background-size:contain}#comic .light .handle.rotate{width:0;height:0;background:transparent;border-left:10px solid transparent;border-right:10px solid transparent;border-top:10px solid red}#comic .light .handle.color{width:8px;height:8px;background:#000;border:2px solid #000;border-radius:100%}#comic .light.selected:before{content:"";display:block;position:absolute;left:-40px;right:-40px;top:-40px;bottom:-40px;border:2px solid red;border-radius:100%;opacity:.75}#comic .tools{position:absolute;right:0;z-index:100}#comic .tools button{display:block;width:40px;height:40px;padding:0;margin:10px;box-sizing:content-box;font-size:0;color:transparent;background:#ddd;background-size:contain;border:1px solid #333;border-radius:3px;transition:opacity .15s ease;opacity:.75}#comic .tools button:hover{opacity:1}#comic .tools button:disabled{opacity:.25}#comic .tools button.add-light{background-image:url(' + n(102) + ")}#comic .tools button.remove{background-color:#d22;background-image:url(" + n(106) + ")}#comic .tools button.remove:disabled{background-color:#777}#comic #data{width:100%;height:10em}", ""])
}
, function(t, e) {
    t.exports = function() {
        var t = [];
        return t.toString = function() {
            for (var t = [], e = 0; e < this.length; e++) {
                var n = this[e];
                n[2] ? t.push("@media " + n[2] + "{" + n[1] + "}") : t.push(n[1])
            }
            return t.join("")
        }
        ,
        t.i = function(e, n) {
            "string" == typeof e && (e = [[null, e, ""]]);
            for (var i = {}, o = 0; o < this.length; o++) {
                var r = this[o][0];
                "number" == typeof r && (i[r] = !0)
            }
            for (o = 0; o < e.length; o++) {
                var s = e[o];
                "number" == typeof s[0] && i[s[0]] || (n && !s[2] ? s[2] = n : n && (s[2] = "(" + s[2] + ") and (" + n + ")"),
                t.push(s))
            }
        }
        ,
        t
    }
}
, function(t, e) {
    /*!
	 * dashify <https://github.com/jonschlinkert/dashify>
	 *
	 * Copyright (c) 2015 Jon Schlinkert.
	 * Licensed under the MIT license.
	 */
    "use strict";
    t.exports = function(t) {
        if ("string" != typeof t)
            throw new TypeError("dashify expects a string.");
        return t = t.replace(/[A-Z]/g, "-$&"),
        t = t.replace(/[ \t]/g, "-"),
        t.toLowerCase()
    }
}
, function(t, e, n) {
    function i() {
        function t(t, e) {
            var n, i = t._co;
            if (e && e._co && e._co.instance) {
                if (n = e._co.instance,
                n.shouldComponentUpdate && n.shouldComponentUpdate(i.props, n.state) === !1)
                    return !1
            } else
                n = new u[i.component],
                n.getInitialState && (n.state = n.getInitialState());
            i.instance = n,
            n._node = e || t,
            n.props = i.props,
            e && (e._co = i);
            var o = n.render();
            t.appendChild(o)
        }
        function e(i, o) {
            if (o._co && o._co.component)
                return t(o, i) !== !1 && s(i, o, {
                    onBeforeMorphEl: e,
                    onBeforeNodeDiscarded: n,
                    childrenOnly: !0
                }),
                !1;
            if (o._co && o._co.events) {
                var r, a = o._co.events;
                for (r in a)
                    a.hasOwnProperty(r) && (i[r] = a[r]);
                if (i._co && i._co.events) {
                    var c = i._co.events;
                    for (r in c)
                        a.hasOwnProperty(r) || (i[r] = void 0)
                }
                i._co = i._co || {},
                i._co.events = a
            }
        }
        function n(t) {
            i(t, function(t) {
                t._co && t._co.instance && t._co.instance.componentWillUnmount && t._co.instance.componentWillUnmount()
            })
        }
        function i(t, e) {
            e(t);
            for (var n = 0; n < t.childNodes.length; n++)
                i(t.childNodes[n], e)
        }
        function a(o, r, a) {
            s(o, r, {
                onBeforeMorphEl: e,
                onBeforeNodeDiscarded: n,
                childrenOnly: a
            }),
            i(o, function(e) {
                var n = e._co;
                n && n.component && !n.instance && (t(e),
                n.instance.componentDidMount && n.instance.componentDidMount())
            })
        }
        var c = o(function(t, e, n) {
            var i, o, s;
            if (u.hasOwnProperty(t)) {
                i = r.createElement("co-" + t.toLowerCase(), {}, []);
                for (o in e) {
                    s = e[o];
                    var a;
                    "string" == typeof s && ("true" === s ? e[o] = !0 : "false" === s ? e[o] = !1 : "" !== s && (a = Number(s),
                    isNaN(a) || (e[o] = a)))
                }
                i._co = {
                    component: t,
                    props: e
                },
                n && n.length && (i._co.props.children = n)
            } else {
                var c = {}
                  , l = {};
                for (o in e)
                    s = e[o],
                    "on" === o.slice(0, 2) && (o = o.toLowerCase(),
                    l[o] = s),
                    c[o] = s;
                i = r.createElement(t, c, n),
                i._co = {
                    events: l
                }
            }
            return i
        })
          , u = c._components = {}
          , l = {};
        return l.setState = function(t) {
            var e, n = {};
            for (e in this.state)
                this.state.hasOwnProperty(e) && (n[e] = this.state[e]);
            for (e in t)
                t.hasOwnProperty(e) && (n[e] = t[e]);
            var i = this.shouldComponentUpdate && this.shouldComponentUpdate(this.props, n) !== !1;
            this.state = n,
            i !== !1 && a(this._node.firstChild, this.render())
        }
        ,
        l.getDOMNode = function() {
            return this._node
        }
        ,
        c.component = function(t, e) {
            e.setState = l.setState,
            e.getDOMNode = l.getDOMNode;
            var n = function() {};
            n.prototype = e,
            u[t] = n
        }
        ,
        c.render = function(t, e) {
            var n = r.createElement("div", {}, [t]);
            a(e, n, !1)
        }
        ,
        c
    }
    var o = n(44)
      , r = n(48)
      , s = n(99);
    t.exports = i(),
    t.exports.scope = i
}
, function(t, e, n) {
    (function(e) {
        var i, o = "undefined" != typeof e ? e : "undefined" != typeof window ? window : {}, r = n(108);
        "undefined" != typeof document ? i = document : (i = o["__GLOBAL_DOCUMENT_CACHE@4"],
        i || (i = o["__GLOBAL_DOCUMENT_CACHE@4"] = r)),
        t.exports = i
    }
    ).call(e, function() {
        return this
    }())
}
, function(t, e) {
    function n(t) {
        return function(e, n, o) {
            for (var r in n)
                r in i && (n[i[r]] = n[r],
                delete n[r]);
            return t(e, n, o)
        }
    }
    t.exports = n;
    var i = {
        "class": "className",
        "for": "htmlFor",
        "http-equiv": "httpEquiv"
    }
}
, function(t, e, n) {
    function i(t) {
        if (!t)
            return "";
        var e = Object.keys(t)
          , n = e.map(function(e) {
            var n = o(e)
              , i = n.concat(":").concat(t[e]);
            return i
        });
        return n.join(";")
    }
    /*!
	 * Dependencies
	 */
    var o = n(94);
    /*!
	 * Exports
	 */
    t.exports = i
}
, function(t, e) {
    function n(t) {
        for (var e in t)
            if (t.hasOwnProperty(e))
                return !1;
        return !0
    }
    function i(t) {
        !l && document.createRange && (l = document.createRange(),
        l.selectNode(document.body));
        var e;
        return l && l.createContextualFragment ? e = l.createContextualFragment(t) : (e = document.createElement("body"),
        e.innerHTML = t),
        e.childNodes[0]
    }
    function o() {}
    function r(t, e) {
        return e && e !== d ? document.createElementNS(e, t) : document.createElement(t)
    }
    function s(t, e) {
        var n, i, o, r, s, a, c = e.attributes;
        for (n = c.length - 1; n >= 0; n--)
            i = c[n],
            o = i.name,
            s = i.value,
            r = i.namespaceURI,
            r ? (o = i.localName || o,
            a = t.getAttributeNS(r, o)) : a = t.getAttribute(o),
            a !== s && (r ? t.setAttributeNS(r, o, s) : t.setAttribute(o, s));
        for (c = t.attributes,
        n = c.length - 1; n >= 0; n--)
            i = c[n],
            i.specified !== !1 && (o = i.name,
            r = i.namespaceURI,
            h(e, r, r ? o = i.localName || o : o) || (r ? t.removeAttributeNS(r, i.localName) : t.removeAttribute(o)))
    }
    function a(t, e) {
        for (var n = t.firstChild; n; ) {
            var i = n.nextSibling;
            e.appendChild(n),
            n = i
        }
        return e
    }
    function c(t) {
        return t.id
    }
    function u(t, e, u) {
        function l(t, e) {
            var n = x(t);
            if (n ? b[n] = t : e || N(t),
            t.nodeType === f)
                for (var i = t.firstChild; i; )
                    l(i, e || n),
                    i = i.nextSibling
        }
        function h(t) {
            if (t.nodeType === f)
                for (var e = t.firstChild; e; )
                    x(e) || (N(e),
                    h(e)),
                    e = e.nextSibling
        }
        function A(t, e, n) {
            R(t) !== !1 && (e.removeChild(t),
            n ? x(t) || (N(t),
            h(t)) : l(t))
        }
        function d(t, e, n, i) {
            var o = x(e);
            if (o && delete b[o],
            !i) {
                if (D(t, e) === !1)
                    return;
                if (s(t, e),
                M(t),
                S(t, e) === !1)
                    return
            }
            if ("TEXTAREA" !== t.nodeName) {
                var r, a, c, u, l, h = e.firstChild, y = t.firstChild;
                t: for (; h; ) {
                    for (c = h.nextSibling,
                    r = x(h); y; ) {
                        var R = x(y);
                        if (a = y.nextSibling,
                        !n && R && (l = w[R]))
                            l.parentNode.replaceChild(y, l),
                            d(y, l, n),
                            y = a;
                        else {
                            var O = y.nodeType;
                            if (O === h.nodeType) {
                                var I = !1;
                                if (O === f ? (m(y, h) && (R || r ? r === R && (I = !0) : I = !0),
                                I && d(y, h, n)) : O !== p && O != g || (I = !0,
                                y.nodeValue = h.nodeValue),
                                I) {
                                    h = c,
                                    y = a;
                                    continue t
                                }
                            }
                            A(y, t, n),
                            y = a
                        }
                    }
                    r && ((u = b[r]) ? m(u, h) ? (d(u, h, !0),
                    h = u) : (delete b[r],
                    N(u)) : w[r] = h),
                    C(h) !== !1 && (t.appendChild(h),
                    E(h)),
                    h.nodeType === f && (r || h.firstChild) && U.push(h),
                    h = c,
                    y = a
                }
                for (; y; )
                    a = y.nextSibling,
                    A(y, t, n),
                    y = a
            }
            var L = v[t.nodeName];
            L && L(t, e)
        }
        if (u || (u = {}),
        "string" == typeof e)
            if ("#document" === t.nodeName || "HTML" === t.nodeName) {
                var y = e;
                e = document.createElement("html"),
                e.innerHTML = y
            } else
                e = i(e);
        var b = {}
          , w = {}
          , x = u.getNodeKey || c
          , C = u.onBeforeNodeAdded || o
          , E = u.onNodeAdded || o
          , D = u.onBeforeElUpdated || u.onBeforeMorphEl || o
          , M = u.onElUpdated || o
          , R = u.onBeforeNodeDiscarded || o
          , N = u.onNodeDiscarded || o
          , S = u.onBeforeElChildrenUpdated || u.onBeforeMorphElChildren || o
          , O = u.childrenOnly === !0
          , U = []
          , I = t
          , L = I.nodeType
          , k = e.nodeType;
        if (!O)
            if (L === f)
                k === f ? m(t, e) || (N(t),
                I = a(t, r(e.nodeName, e.namespaceURI))) : I = e;
            else if (L === p || L === g) {
                if (k === L)
                    return I.nodeValue = e.nodeValue,
                    I;
                I = e
            }
        if (I === e)
            N(t);
        else {
            d(I, e, !1, O);
            var B = function(t) {
                for (var e = t.firstChild; e; ) {
                    var i = e.nextSibling
                      , o = x(e);
                    if (o) {
                        var r = b[o];
                        if (r && m(e, r)) {
                            if (e.parentNode.replaceChild(r, e),
                            d(r, e, !0),
                            e = i,
                            n(b))
                                return !1;
                            continue
                        }
                    }
                    e.nodeType === f && B(e),
                    e = i
                }
            };
            if (!n(b))
                t: for (; U.length; ) {
                    var T = U;
                    U = [];
                    for (var _ = 0; _ < T.length; _++)
                        if (B(T[_]) === !1)
                            break t
                }
            for (var F in b)
                if (b.hasOwnProperty(F)) {
                    var j = b[F];
                    N(j),
                    h(j)
                }
        }
        return !O && I !== t && t.parentNode && t.parentNode.replaceChild(I, t),
        I
    }
    var l, h, A = "undefined" != typeof document ? document.body || document.createElement("div") : {}, d = "http://www.w3.org/1999/xhtml", f = 1, p = 3, g = 8;
    h = A.hasAttributeNS ? function(t, e, n) {
        return t.hasAttributeNS(e, n)
    }
    : A.hasAttribute ? function(t, e, n) {
        return t.hasAttribute(n)
    }
    : function(t, e, n) {
        return !!t.getAttributeNode(n)
    }
    ;
    var v = {
        OPTION: function(t, e) {
            t.selected = e.selected,
            t.selected ? t.setAttribute("selected", "") : t.removeAttribute("selected", "")
        },
        INPUT: function(t, e) {
            t.checked = e.checked,
            t.checked ? t.setAttribute("checked", "") : t.removeAttribute("checked"),
            t.value !== e.value && (t.value = e.value),
            h(e, null, "value") || t.removeAttribute("value"),
            t.disabled = e.disabled,
            t.disabled ? t.setAttribute("disabled", "") : t.removeAttribute("disabled")
        },
        TEXTAREA: function(t, e) {
            var n = e.value;
            t.value !== n && (t.value = n),
            t.firstChild && (t.firstChild.nodeValue = n)
        }
    }
      , m = function(t, e) {
        return t.nodeName === e.nodeName && t.namespaceURI === e.namespaceURI
    };
    t.exports = u
}
, function(t, e, n) {
    function i(t, e) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n]
              , o = d[i.id];
            if (o) {
                o.refs++;
                for (var r = 0; r < o.parts.length; r++)
                    o.parts[r](i.parts[r]);
                for (; r < i.parts.length; r++)
                    o.parts.push(u(i.parts[r], e))
            } else {
                for (var s = [], r = 0; r < i.parts.length; r++)
                    s.push(u(i.parts[r], e));
                d[i.id] = {
                    id: i.id,
                    refs: 1,
                    parts: s
                }
            }
        }
    }
    function o(t) {
        for (var e = [], n = {}, i = 0; i < t.length; i++) {
            var o = t[i]
              , r = o[0]
              , s = o[1]
              , a = o[2]
              , c = o[3]
              , u = {
                css: s,
                media: a,
                sourceMap: c
            };
            n[r] ? n[r].parts.push(u) : e.push(n[r] = {
                id: r,
                parts: [u]
            })
        }
        return e
    }
    function r(t, e) {
        var n = g()
          , i = y[y.length - 1];
        if ("top" === t.insertAt)
            i ? i.nextSibling ? n.insertBefore(e, i.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild),
            y.push(e);
        else {
            if ("bottom" !== t.insertAt)
                throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
            n.appendChild(e)
        }
    }
    function s(t) {
        t.parentNode.removeChild(t);
        var e = y.indexOf(t);
        e >= 0 && y.splice(e, 1)
    }
    function a(t) {
        var e = document.createElement("style");
        return e.type = "text/css",
        r(t, e),
        e
    }
    function c(t) {
        var e = document.createElement("link");
        return e.rel = "stylesheet",
        r(t, e),
        e
    }
    function u(t, e) {
        var n, i, o;
        if (e.singleton) {
            var r = m++;
            n = v || (v = a(e)),
            i = l.bind(null, n, r, !1),
            o = l.bind(null, n, r, !0)
        } else
            t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = c(e),
            i = A.bind(null, n),
            o = function() {
                s(n),
                n.href && URL.revokeObjectURL(n.href)
            }
            ) : (n = a(e),
            i = h.bind(null, n),
            o = function() {
                s(n)
            }
            );
        return i(t),
        function(e) {
            if (e) {
                if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap)
                    return;
                i(t = e)
            } else
                o()
        }
    }
    function l(t, e, n, i) {
        var o = n ? "" : i.css;
        if (t.styleSheet)
            t.styleSheet.cssText = b(e, o);
        else {
            var r = document.createTextNode(o)
              , s = t.childNodes;
            s[e] && t.removeChild(s[e]),
            s.length ? t.insertBefore(r, s[e]) : t.appendChild(r)
        }
    }
    function h(t, e) {
        var n = e.css
          , i = e.media;
        if (i && t.setAttribute("media", i),
        t.styleSheet)
            t.styleSheet.cssText = n;
        else {
            for (; t.firstChild; )
                t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(n))
        }
    }
    function A(t, e) {
        var n = e.css
          , i = e.sourceMap;
        i && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
        var o = new Blob([n],{
            type: "text/css"
        })
          , r = t.href;
        t.href = URL.createObjectURL(o),
        r && URL.revokeObjectURL(r)
    }
    var d = {}
      , f = function(t) {
        var e;
        return function() {
            return "undefined" == typeof e && (e = t.apply(this, arguments)),
            e
        }
    }
      , p = f(function() {
        return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())
    })
      , g = f(function() {
        return document.head || document.getElementsByTagName("head")[0]
    })
      , v = null
      , m = 0
      , y = [];
    t.exports = function(t, e) {
        e = e || {},
        "undefined" == typeof e.singleton && (e.singleton = p()),
        "undefined" == typeof e.insertAt && (e.insertAt = "bottom");
        var n = o(t);
        return i(n, e),
        function(t) {
            for (var r = [], s = 0; s < n.length; s++) {
                var a = n[s]
                  , c = d[a.id];
                c.refs--,
                r.push(c)
            }
            if (t) {
                var u = o(t);
                i(u, e)
            }
            for (var s = 0; s < r.length; s++) {
                var c = r[s];
                if (0 === c.refs) {
                    for (var l = 0; l < c.parts.length; l++)
                        c.parts[l]();
                    delete d[c.id]
                }
            }
        }
    }
    ;
    var b = function() {
        var t = [];
        return function(e, n) {
            return t[e] = n,
            t.filter(Boolean).join("\n")
        }
    }()
}
, function(t, e, n) {
    var i = n(92);
    "string" == typeof i && (i = [[t.id, i, ""]]);
    n(100)(i, {});
    i.locals && (t.exports = i.locals)
}
, function(t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAYUExURUxpcQAAABYWFgAAAAAAAPv7+39/f8fHx/ktK9QAAAAEdFJOUwCK20hF+i26AAABpklEQVRYw+2Xya7DIAxF4wH4/z9+GNI2ScNg4yd1kSt10SyOjhnNtlmCzAEZQ+RTkDZbgDlmVgx8DdiA2eVOUGIVTJmVjoJxwZBEUAo+CMZsvCoY0pEXOaUFwXgWxBDqf5tezVEwiWAuWi9I+LHCU8HywwXcKblgzMLohKszkn9gHLxrsBSsFmzplfUtBTO56FVB7Qx3cGXTKWeYkAeJmoLHOCl7WnAKJyFf3JzgPG4KqMFNnINK3AioxvWBBlwXCMyeQBuuCTRV2wFa9RpAsuPuFzZ4AxdGsHm6mpHgvWzAeZ/0LxQLEobtkC9QLwmLN6eptVYhyftOIY+OwfKacAfCsU/1AOYFmRI6AkUx3L2X7C8yaXhDin5AKTqEoSWoms0JoqZ9xZ3YRcJwMdOJGAuxM5SoAQoRK7JpqQPW87EyG6tSCcxfsTJTS1ILzJZg7GChcx4BOgOLqeSLvAC8PyrXgZcx/QbCK3sx+P4whcT5sxmnbh0n4OcVDV7Al6QfcJ9FcgQWSU/DIkn3G6Bsgn2U3x+2xYCqt3iAD/B/gIQlfsAnP5A/fAAqEID2icEAAAAASUVORK5CYII="
}
, function(t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAABCCAMAAAA8CkXxAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAALTUExURUxpcQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIuLiwAAADc3NwAAAAAAAAAAAAAAAP///wABAAEBAQQEBBgYGM3NzSsrK0dHRycnJwMDAxYWFsTExDs7OwUFBe3t7RISEiAgIDg4OGRkZB8fH////35+fjc3N01NTSwsLCMjIwkJCVZWVvb29gcHBxsbGxkZGTAwMDw8PFdXV0JCQmJiYtDQ0FRUVNbW1snJydra2khISNXV1UVFRf7+/uXl5evr6yYmJoqKik9PT9zc3Pv7+1NTU+Li4g8PD7CwsExMTK2trYODg4uLi0ZGRqqqqjk5OYaGhujo6N7e3mZmZqGhofr6+sHBwX19fSkpKR4eHvz8/MrKypycnNjY2MXFxWxsbJ6envDw8DY2Ng0NDVJSUmBgYEtLS3d3d11dXXl5eezs7FBQULKysunp6cPDw2hoaOPj4+Hh4d/f30BAQNvb2/Ly8j+FrY4AAACKdFJOUwAyQzxFM9z9/OkD+QVP9v7d3gIZCQE/C/Wl5xQ6BgzqL+Y2nPvg4j3y79bzRkli30Dh5egeJUSStSoi9DsExnLbqa+hrT5cJBOOxSOCs3APHfdUIJaa1PruU1bT2s7Dsc2mc4jQTshoKDUaeVIWalBgbDd7nq5KovDLEDA0hlgImbrslft//Vld2eCmYncAAANBSURBVEjHndf1W1NRGMDxsWCMARsKSHcMRLoFQUERBRUQxO7C7k7Md7JgdD2kQQuoICHYLQZ2d+uf4MaI4XZ3z73fn/d5znPPPefcHQoFM4O1DsDaQCHXGh4A6AWSw+ukFpytSVkzO44Uj1y9ioRdNkFLNjLoBazUIWq1R0NfvNAQgtgaBrJ3NSSGtyhg2GRBDCcqYisDItTSgqWIwyKThyFb25So/Yo4icXdhWrHTwClWKhY10oZe6LO2aTYvDIZSFXAjpaI+CAUfYHca5d7Xc3Nh/fAywcRu/Fav8G5rtNye/LGg47uLJt4RHwk6fsfKM3Jl+OKzKKS7nOOkxHxdFZHJ5R+fSXHjxqKSpry9VFn29Xr90+QtJ8BOCbF4sb375pq3FHxCC/xL5B0tsExGS4+X/um+4ODNiL28Cz8C5Ifn3sGluK3Bfw2LgUZl/FB0tw728WfSgr4eZqo2Mk9lw8tL+/KcX571ccuQMbWR+ECtOQUyHHp46zWZnRsq/n6LFRcOS7H4sys5znoeOJMwamBVZ1bm1d5AJDfs7m+8q4yjUQ8sE2YylhrNNq2cuOAimKXotjkUaCyUUH4VicUMFqBv0J92VjYWQP3M2MCmNnhnb8MUBPe0HPU4YAham0gqG2iWjxGPTZRZxfrqcdaVGwbsgRwWoSNFxjjYXYolg2aB7jNGoqBo/Et2EdhHF1cBAwORqrs9rmAVIyZChyHZoE5Ttn6mCJicPRVwvMBuYT//xJSgUDmg62hDRHMHby7woFQUwd9VNnEMIwdsPGzCVpwGVilCzlEMdO/zy4PA8K52/beYvyBRBvlMz7CmAzeGtezISKAVBGyDbKDSQ7zpK/LMBxItncPRZesBWNdyjbZiSq9QrG8Wez+BygvT0+F7AxxoVCYUVh5pjotLe2i7IYmfcHTvE2t5AL2UXY60V2DaR5UhgbDnOZHp9Op41zg1NWzDfefierrRCJRXePtEycuVQlgzOb1dD9asIYGg2pEoxnRdRmqDqT4GEHG8Ux+f3duXRem2+xGvKPozNBPPXnoyVMprH9RXZadnjo8egqBy9HhmRwmCITZwLRna6bEaVOINSMhkZek52LnxsD8yT+Xiv+cHr9vGgAAAABJRU5ErkJggg=="
}
, function(t, e) {
    t.exports = "data:image/gif;base64,R0lGODlhWwARAPfOAPf39wEBAR4eHgICAiIiIpmZmf39/YmJib6+vvb29oKCgkRERLq6uq2trbu7uz4+PgMDA7CwsAYGBvz8/BQUFAsLC/Hx8d3d3Y2NjaqqqoGBgRsbG19fX2hoaLOzs+vr6zQ0NKysrCkpKRcXFw4ODh8fHxwcHMLCwnp6ehMTE7S0tM/Pz4uLi1JSUpOTk/v7+9fX13FxccrKyuPj4woKCrGxsd/f3/X19VpaWu3t7ZWVlWZmZkFBQUBAQHR0dGVlZdnZ2TMzMxYWFjAwMBgYGNXV1d7e3gUFBRAQELKyspubm9PT0/n5+dzc3Ly8vEpKSgcHB1xcXBkZGSUlJUNDQ5aWloCAgMDAwBEREWxsbIiIiM3NzVVVVcjIyEtLS15eXg8PD/r6+qenp6Ghoejo6Gtra+Li4nZ2djIyMmBgYFZWVioqKisrK0ZGRoaGhjs7O/T09Lm5uQ0NDU5OTs7Oznl5eZiYmNLS0n5+fiEhIX19fa+vr8zMzO/v75GRkSMjIygoKGJiYtHR0SwsLLi4uMHBwaurq/Dw8CcnJ9TU1JycnKioqDk5OQgICIqKiubm5gwMDFdXV+Xl5cvLy56eni8vL5qammFhYSAgIFBQUMPDwzc3N8fHx3BwcL29vdDQ0FFRUQkJCYSEhPPz86SkpDY2NmRkZExMTKCgoE1NTerq6p+fn3t7e3Jyctvb2+Tk5EVFRampqYeHh6Ojo1hYWKampsnJyTw8PNbW1kJCQqWlpTo6OsbGxmdnZyYmJj09PX9/f4ODg2lpaeDg4Hd3dzExMezs7Nra2klJSVRUVHV1dTg4OBISEgAAAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDA1QzFEMDNGMjY3MTFFNTkwODJDMzUxMTUyRTJDNjMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDA1QzFEMDRGMjY3MTFFNTkwODJDMzUxMTUyRTJDNjMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0MDVDMUQwMUYyNjcxMUU1OTA4MkMzNTExNTJFMkM2MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0MDVDMUQwMkYyNjcxMUU1OTA4MkMzNTExNTJFMkM2MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAUyAM4ALAAAAABbABEAAAj/AJ0JdLZI08CDCA8hREhmS4KFHx51MeShUA6ENgwsFAgjBRoLCG8Y20iSJJ1mzQCUXCEiwBNVG+tAaEYhzkE8KHOifEBH4IlmeQS+QpgE5UWBQOYcabbBFK+SUJ3pajagpJEUOYfEQqhEZwUZA3GgDCCAQk4aCJw5aibAWZ1mHQ42QDmQjxydVA9EJcmALslTzYigyPnggkAmAppRmWSi2QiQzno1m3NDIABCif8Y0NEMkLNSzQIIGqjCbxESzUqE6IIBRDMITvYu7NuMpJEAzUI487AAJRKwhEJ/cmZLQjMrAok1W4DwZ7Mrs5phcda7WaCBc2sb2MXUsMAJT5rV/5KNkJTfhRqaSdEoMIKQzs5iNBMxsEwzEiD1NAOx8E8zDCFI58wDKEHgnQd01YBSEggB0Ad5CLHQTCMkUdFMGQhlx8cbcA1kA24NOHNAM0Es1JsWGTQDxYA5xSDQFSiRwUEzjEC4VxbNCEFSCc0UgJABFTRjyQjN6HDQEM384IwWzayxEIEaxIESAL3R0IwERTiTCEp3INKMBgfBIQgud7xgo0Bt7LcRACilhRABzaAwQDNuKKDGLWwg0cwUzlTRDAEL+dJMMA6gFMYmzezQGA/OmNFmYj4KxIlxKJGAwZlsNOPFRsegBMNCqHWCl04D3FDAnwjlMKcKhdYGSzNpjP+Bkg4JoLRHY3oJNANur014JpFcbGSDpwitgBIGKNHQQwcK2IFsMwycCuhBKTbzQavORNEMMs700EwoTQRpRwvNDDLBQEuY4YwIip0JSTNfbFRrM24OlEYzYASYEkKNKUAJTQj90kwxzmDrQzNoODOMnj0QQadzPiCEAEoZnInSDiRh0owoB6mAmxVdpbAQKM2kkqIEKrWHkhgFo2SBhNM2MCdKEePYjAID9QFnEGbaaFYkA0kixhkcBOIHUx84A4cCUDSZAE5DLDTYIAg2s0V7d5XoDG0JnErEQF2h5KIzMzajxhIy8PDaCmc6w+EIX4AQpE57GCeFF2CglIcRZDeDE8VCRwvhBEot6JELSgJ4Vy0DI5ZwkCwoufAdF6PmemZReB1RSRs7zODCUigN8EPSzvzQDAsLeYISKqNOkaXKzSwRwQYtIDTGGUwcVEViqUXatjM1XEILK4qckPJAQGjQgQszHDRBE2EsxEQrwoyyCjA4ZIJDDT0L1IQIjJ7pChC/BwQAIfkEBTIAzgAsTAAIAAYACAAACCIADTkbOPAJwYHKDjorpHCCwoEqoAggiKJZMwIDnaRIdiEgACH5BAUyAM4ALFEADAAGAAUAAAgfAJ0JfPFCoLMVFCooOuQsSrNmUww4O9AMkQuDFiQGBAAh+QQFMgDOACxWAA0ABQADAAAIFABhOGMhZdkiZ4yaMUvkDEELRwEBADs="
}
, function(t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABoCAMAAAAw/qUdAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAYUExURQAAAExpcQAAAAAAAAAAAAAAAAAAAAAAAO1JYJEAAAAIdFJOU/8A4rxAaZMcjWgm3wAABTlJREFUaN69Wtd2hSAQxK3//8dBAWkLCibhKedGGbbNFnTH5hLHr591mxjs3HuUXRB0CyjrIAyAFEDeorj32gG5RXACLi7RXwOJe+qhrlu/BpI21ChJueA7CDtvgaPYsBfFK+wUkLZBLvWgQt6QOxA56HpqG0SiBFkUZ1gFvoG0JgDqMeJv8Gsg1hKJWvsKAjwBeYrMJ5BbO/ws0L4LD3Y8LIGQaQ+E3NKSvYgfoPDg901aITA3s/2ON0AYAThFZB0c7wWZgyQ2KQ4NuOFh7om36oVetgkGrbsw9QLARR9FzIBfJ7j4fClbcQK1tilJA00ugYsciZl3gvFWDZITqkn3ziX+KYSUkFE3vOvWNSJYIBjkLSylG9yFIqw1HZcgyb+L33QVxDsYaONqUsQNJjcXmcTjBMTz3aUubFyNb6kogxfJDBZAzrdUbvk578FlXCQJlcZR7+bVbgahXpCqEKP8xKIkKOmQolnj2DlX3PlyQFkwvBJHFgzRHrgYKMoonPQfBTj0DHrSlTjhTLQhQOi4A1r9bkc2chBMN1j49sigscYvsyk4Poq4CqIlb4lZuGn2V9hJWj5PnV2CaowzYCEdFhhM+Fh9uwEpwiUQIxJhxTI+RLXUJ74o8d1ID2eRHawjHflfHmCnLfAlAT9LItWhapfMBAasJsjlAPQIcpvUG1GbtF1ujO8zvRsl3TOrYpe44V2J9xakoo4NEHZXi9aA4Nnf6gOIvANJPUCEcY0AfChMQN6KUsema7J5ptsGJIqu2FSQVKQXsHrWEkSGjQjGchgDiQc6Fm4rJTtqBiDdcQCx9k1ln8zkBsHHirJTV3DeghtrHZ/qOktFsUqXkcu4vqVSfTYomoJnkb34kjnZHZ0oDP07Lz23sE/4swtGcZ9XUWaGQqyP+HWU2RtoeFfIFiM9DNxUYA6CLYgSkZooeJbTaM07ZvEPhgtfL8Dw8fJ/7N54BuQ2wtXd4ao7Tf9HV/rOIGAo9A3/TUPpHlA5a7iBj+FoG0+k4sabh11LKu08yDauHKbuuCr4ITmx6/gRasfiAQg/GQhCyVzYRDpOsWyTz2+BGPxIQWGurOiIpu8WJSm/mB5hko0qEOxKNmmyA9Yaf0c7UIF4URr9Vl4AWa1wJuJnmPBIAqFmiJVH2hQHG/H8RfKeK4wxWUVu7+Ko6jYnaekYmKmBD30YFnHNwoJ+16s+CAEEhSdjKIdvm51akqqoASMQMZpAEkh0WjgHr74x8G2JhPwZqpJT9ZDUmHWb7RHsSJXPBAk4tTWuaPLP7c72B8MeRhlCPZv6Q3MYohKMupQcbnB4Rost+xV1KKM6Cga1NZtFZykjQVnBw6yQIjea1qDZOd5sHXhV7NoeUmKWZg5Gdk/QtQ4UGlFu5AygkPiG6+J20usSI4/6E2x7JDErBaiK89UrQGxVfDF1b5uix8djC4S6i1coYytqSGeDgSkIZ/GVLs/nm3ax1FG2CK1fyyLUSVKwcdzEWuIWtWUMC7Av3dm8Q6NtkEwZmM8cUGjSSq6BcJE9i6ED9ZdotA9SFqPFtBGtsfouCJU3PXI0E1J+nGytgYTqJ89hqbt1/GCTGyNGIdYMAiuX12MXlpMuKfkrhlQEYKSADyBhApkkOAf1vjtSy/2+f+0xdlRcF8VN702s48rspmQPBCcgf6gu+l8Q+QoiQ73reji6+R2jTMz13vJuepOJ88vH798S+RpZHu5qQb+CPN15LOjrG4j8EYhupOD177tgPQWvg8g/GL6smT7HyeOnLAB/+mGfsqB1zTVcP58nJEXsQyUBAAAAAElFTkSuQmCC"
}
, function(t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAYUExURUxpcf///////////////////////////95C5tQAAAAHdFJOUwABnpj+bGXDMIZhAAAA4ElEQVRYw+3XwQ6EIAxFUUCZ/v8fz8QYk1Gghd6V6VvTk6gIbUqRSCTynnxK1hflrZq9XXQxb7JXsyeq+PPEKB6eJh6eTTy9sXh6FvHyRuLlGcQioor5b1EyvOyxaFgytXzSUwumPaVkwRsWLXmDskWvW7jsdUodXrPY5TXKnd4DcHt30e/dRMDrieteW/R4LdHnPUWvdxf9Hg7Sj0x/FHrb0Bub/vXow4E+vugDlr4C6EuKvkbpi55uRehmiW7n6IYTb4nxph0fK/DBhx/N+OGRH29TqqYNW2qKRCKR9+QLfbEaz7uhlPAAAAAASUVORK5CYII="
}
, function(t, e) {
    !function(t) {
        "use strict";
        function e(t) {
            if ("string" != typeof t && (t = String(t)),
            /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))
                throw new TypeError("Invalid character in header field name");
            return t.toLowerCase()
        }
        function n(t) {
            return "string" != typeof t && (t = String(t)),
            t
        }
        function i(t) {
            this.map = {},
            t instanceof i ? t.forEach(function(t, e) {
                this.append(e, t)
            }, this) : t && Object.getOwnPropertyNames(t).forEach(function(e) {
                this.append(e, t[e])
            }, this)
        }
        function o(t) {
            return t.bodyUsed ? Promise.reject(new TypeError("Already read")) : void (t.bodyUsed = !0)
        }
        function r(t) {
            return new Promise(function(e, n) {
                t.onload = function() {
                    e(t.result)
                }
                ,
                t.onerror = function() {
                    n(t.error)
                }
            }
            )
        }
        function s(t) {
            var e = new FileReader;
            return e.readAsArrayBuffer(t),
            r(e)
        }
        function a(t) {
            var e = new FileReader;
            return e.readAsText(t),
            r(e)
        }
        function c() {
            return this.bodyUsed = !1,
            this._initBody = function(t) {
                if (this._bodyInit = t,
                "string" == typeof t)
                    this._bodyText = t;
                else if (f.blob && Blob.prototype.isPrototypeOf(t))
                    this._bodyBlob = t;
                else if (f.formData && FormData.prototype.isPrototypeOf(t))
                    this._bodyFormData = t;
                else if (t) {
                    if (!f.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(t))
                        throw new Error("unsupported BodyInit type")
                } else
                    this._bodyText = "";
                this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type && this.headers.set("content-type", this._bodyBlob.type))
            }
            ,
            f.blob ? (this.blob = function() {
                var t = o(this);
                if (t)
                    return t;
                if (this._bodyBlob)
                    return Promise.resolve(this._bodyBlob);
                if (this._bodyFormData)
                    throw new Error("could not read FormData body as blob");
                return Promise.resolve(new Blob([this._bodyText]))
            }
            ,
            this.arrayBuffer = function() {
                return this.blob().then(s)
            }
            ,
            this.text = function() {
                var t = o(this);
                if (t)
                    return t;
                if (this._bodyBlob)
                    return a(this._bodyBlob);
                if (this._bodyFormData)
                    throw new Error("could not read FormData body as text");
                return Promise.resolve(this._bodyText)
            }
            ) : this.text = function() {
                var t = o(this);
                return t ? t : Promise.resolve(this._bodyText)
            }
            ,
            f.formData && (this.formData = function() {
                return this.text().then(h)
            }
            ),
            this.json = function() {
                return this.text().then(JSON.parse)
            }
            ,
            this
        }
        function u(t) {
            var e = t.toUpperCase();
            return p.indexOf(e) > -1 ? e : t
        }
        function l(t, e) {
            e = e || {};
            var n = e.body;
            if (l.prototype.isPrototypeOf(t)) {
                if (t.bodyUsed)
                    throw new TypeError("Already read");
                this.url = t.url,
                this.credentials = t.credentials,
                e.headers || (this.headers = new i(t.headers)),
                this.method = t.method,
                this.mode = t.mode,
                n || (n = t._bodyInit,
                t.bodyUsed = !0)
            } else
                this.url = t;
            if (this.credentials = e.credentials || this.credentials || "omit",
            !e.headers && this.headers || (this.headers = new i(e.headers)),
            this.method = u(e.method || this.method || "GET"),
            this.mode = e.mode || this.mode || null,
            this.referrer = null,
            ("GET" === this.method || "HEAD" === this.method) && n)
                throw new TypeError("Body not allowed for GET or HEAD requests");
            this._initBody(n)
        }
        function h(t) {
            var e = new FormData;
            return t.trim().split("&").forEach(function(t) {
                if (t) {
                    var n = t.split("=")
                      , i = n.shift().replace(/\+/g, " ")
                      , o = n.join("=").replace(/\+/g, " ");
                    e.append(decodeURIComponent(i), decodeURIComponent(o))
                }
            }),
            e
        }
        function A(t) {
            var e = new i
              , n = (t.getAllResponseHeaders() || "").trim().split("\n");
            return n.forEach(function(t) {
                var n = t.trim().split(":")
                  , i = n.shift().trim()
                  , o = n.join(":").trim();
                e.append(i, o)
            }),
            e
        }
        function d(t, e) {
            e || (e = {}),
            this.type = "default",
            this.status = e.status,
            this.ok = this.status >= 200 && this.status < 300,
            this.statusText = e.statusText,
            this.headers = e.headers instanceof i ? e.headers : new i(e.headers),
            this.url = e.url || "",
            this._initBody(t)
        }
        if (!t.fetch) {
            i.prototype.append = function(t, i) {
                t = e(t),
                i = n(i);
                var o = this.map[t];
                o || (o = [],
                this.map[t] = o),
                o.push(i)
            }
            ,
            i.prototype["delete"] = function(t) {
                delete this.map[e(t)]
            }
            ,
            i.prototype.get = function(t) {
                var n = this.map[e(t)];
                return n ? n[0] : null
            }
            ,
            i.prototype.getAll = function(t) {
                return this.map[e(t)] || []
            }
            ,
            i.prototype.has = function(t) {
                return this.map.hasOwnProperty(e(t))
            }
            ,
            i.prototype.set = function(t, i) {
                this.map[e(t)] = [n(i)]
            }
            ,
            i.prototype.forEach = function(t, e) {
                Object.getOwnPropertyNames(this.map).forEach(function(n) {
                    this.map[n].forEach(function(i) {
                        t.call(e, i, n, this)
                    }, this)
                }, this)
            }
            ;
            var f = {
                blob: "FileReader"in t && "Blob"in t && function() {
                    try {
                        return new Blob,
                        !0
                    } catch (t) {
                        return !1
                    }
                }(),
                formData: "FormData"in t,
                arrayBuffer: "ArrayBuffer"in t
            }
              , p = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
            l.prototype.clone = function() {
                return new l(this)
            }
            ,
            c.call(l.prototype),
            c.call(d.prototype),
            d.prototype.clone = function() {
                return new d(this._bodyInit,{
                    status: this.status,
                    statusText: this.statusText,
                    headers: new i(this.headers),
                    url: this.url
                })
            }
            ,
            d.error = function() {
                var t = new d(null,{
                    status: 0,
                    statusText: ""
                });
                return t.type = "error",
                t
            }
            ;
            var g = [301, 302, 303, 307, 308];
            d.redirect = function(t, e) {
                if (g.indexOf(e) === -1)
                    throw new RangeError("Invalid status code");
                return new d(null,{
                    status: e,
                    headers: {
                        location: t
                    }
                })
            }
            ,
            t.Headers = i,
            t.Request = l,
            t.Response = d,
            t.fetch = function(t, e) {
                return new Promise(function(n, i) {
                    function o() {
                        return "responseURL"in s ? s.responseURL : /^X-Request-URL:/m.test(s.getAllResponseHeaders()) ? s.getResponseHeader("X-Request-URL") : void 0
                    }
                    var r;
                    r = l.prototype.isPrototypeOf(t) && !e ? t : new l(t,e);
                    var s = new XMLHttpRequest;
                    s.onload = function() {
                        var t = 1223 === s.status ? 204 : s.status;
                        if (t < 100 || t > 599)
                            return void i(new TypeError("Network request failed"));
                        var e = {
                            status: t,
                            statusText: s.statusText,
                            headers: A(s),
                            url: o()
                        }
                          , r = "response"in s ? s.response : s.responseText;
                        n(new d(r,e))
                    }
                    ,
                    s.onerror = function() {
                        i(new TypeError("Network request failed"))
                    }
                    ,
                    s.ontimeout = function() {
                        i(new TypeError("Network request failed"))
                    }
                    ,
                    s.open(r.method, r.url, !0),
                    "include" === r.credentials && (s.withCredentials = !0),
                    "responseType"in s && f.blob && (s.responseType = "blob"),
                    r.headers.forEach(function(t, e) {
                        s.setRequestHeader(e, t)
                    }),
                    s.send("undefined" == typeof r._bodyInit ? null : r._bodyInit)
                }
                )
            }
            ,
            t.fetch.polyfill = !0
        }
    }("undefined" != typeof self ? self : this)
}
, function(t, e) {}
, , function(t, e, n) {
    var i = n(46)
      , o = n(30)
      , r = n(47)
      , s = function(t) {
        this.opts = t,
        this.data = null,
        this.gardenId = null
    };
    s.prototype = {
        record: function(t, e) {
            this.log(t, e)
        },
        log: function() {
            this.opts.debug && console.log.apply(console, arguments)
        },
        _connect: function() {
            this.gardenClient = this.opts.startGardenClient({
                onLindenKey: this.onLindenKey.bind(this),
                onLindenUpdate: this.onLindenUpdate.bind(this),
                onConnect: this.onConnect.bind(this),
                onReload: this.onReload.bind(this),
                log: this.log.bind(this),
                id: this.gardenId
            })
        },
        run: function() {
            try {
                this.opts.endpoint && (location.hash && (this.gardenId = location.hash.substr(1)),
                this._connect()),
                this.linden = new i({
                    el: this.opts.el,
                    width: this.opts.width,
                    height: this.opts.height,
                    title: this.opts.title,
                    urlPrefix: this.opts.imgPrefix,
                    loading: !0,
                    readOnly: !1,
                    debug: this.opts.debug,
                    onLightChanging: this.handleLightChanging.bind(this),
                    onSetLight: this.handleSetLight.bind(this),
                    onRemoveLight: this.handleRemoveLight.bind(this),
                    onPruneNode: this.handlePruneNode.bind(this)
                }),
                this.opts.data && this.linden.update(this.opts.data),
                r(this.linden)
            } catch (t) {
                throw this.record(this.opts.name, "js_error"),
                t
            }
            return this
        },
        onConnect: function() {
            this.record(this.opts.name, "connect_start"),
            this.dirtyLights = {},
            this.linden.renderUI()
        },
        onLindenKey: function(t) {
            this.log("linden key from EventSource", t),
            this.gardenId = location.hash = t.garden,
            this.linden.opts.readOnly = !1,
            this.linden.renderUI()
        },
        _acceptUpdate: function() {
            for (var t in this.dirtyLights)
                if (this.dirtyLights.hasOwnProperty(t) && this.dirtyLights[t] === !0)
                    return this.log("rejecting update, dirty light:", t),
                    !1;
            return !0
        },
        _update: function(t) {
            this._acceptUpdate() && (this.data = t,
            this.linden.update(t))
        },
        onLindenUpdate: function(t) {
            this.log("linden from EventSource", t),
            this._update(t)
        },
        onReload: function() {
            var t = Math.round(Math.random() * this.opts.spread.reload);
            this.log("reloading in", t + 5, "seconds"),
            setTimeout(function() {
                this.record(this.opts.name, "reloading"),
                setTimeout(function() {
                    location.reload()
                }, 5e3)
            }, 1e3 * t)
        },
        handleLightChanging: function(t) {
            this.dirtyLights[t] = !0
        },
        handleSetLight: function(t, e) {
            this.log("set light:", t, e),
            this.gardenClient.editLight(Object.assign({
                garden: this.data.garden,
                light: t
            }, e), function(t) {
                this._update(Object.assign({}, this.data, {
                    lights: t
                }))
            }
            .bind(this)),
            delete this.dirtyLights[t]
        },
        _sendRemove: function(t) {
            this.gardenClient.delLight({
                garden: this.data.garden,
                node: t
            })
        },
        handleRemoveLight: function(t) {
            this.log("remove light:", t);
            var e = this.data.lights.filter(function(e) {
                return e.id !== t
            });
            this._update(Object.assign({}, this.data, {
                lights: e
            })),
            this._sendRemove(t)
        },
        handlePruneNode: function(t) {
            this.log("prune node:", t);
            var e = {
                children: []
            }
              , n = e;
            o(this.data.tree, function(e, i) {
                var o = n;
                n = {
                    node: e,
                    children: []
                },
                e.id !== t && o.children.push(n),
                i(),
                n = o
            }),
            this._update(Object.assign({}, this.data, {
                tree: e.children[0]
            })),
            this._sendRemove(t)
        }
    },
    t.exports = s
}
]);
