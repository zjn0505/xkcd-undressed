/*! linden by chromako.de */ ! function(t) {
    function e(i) {
        if (n[i]) return n[i].exports;
        var o = n[i] = {
            exports: {},
            id: i,
            loaded: !1
        };
        return t[i].call(o.exports, o, o.exports, e), o.loaded = !0, o.exports
    }
    var n = {};
    return e.m = t, e.c = n, e.p = "", e(0)
}([function(t, e, n) {
    n(55), n(53), n(52), n(51), n(54), n(50), n(109), n(103);
    var i = n(45),
        o = document.getElementsByTagName("script"),
        r = o[o.length - 1];
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
        debug: "?debug" === location.search
    }).run(), window.addEventListener("keydown", function(t) {
        8 === t.which && t.preventDefault()
    }, !1)
}, function(t, e, n) {
    var i = n(40)("wks"),
        o = n(29),
        r = n(2).Symbol,
        s = "function" == typeof r;
    t.exports = function(t) {
        return i[t] || (i[t] = s && r[t] || (s ? r : o)("Symbol." + t))
    }
}, function(t, e) {
    var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}, function(t, e) {
    var n = t.exports = {
        version: "2.2.1"
    };
    "number" == typeof __e && (__e = n)
}, function(t, e, n) {
    var i = n(10);
    t.exports = function(t) {
        if (!i(t)) throw TypeError(t + " is not an object!");
        return t
    }
}, function(t, e, n) {
    var i = n(2),
        o = n(3),
        r = n(9),
        s = n(13),
        a = n(6),
        c = "prototype",
        u = function(t, e, n) {
            var h, l, d, A, f = t & u.F,
                p = t & u.G,
                g = t & u.S,
                v = t & u.P,
                m = t & u.B,
                y = p ? i : g ? i[e] || (i[e] = {}) : (i[e] || {})[c],
                b = p ? o : o[e] || (o[e] = {}),
                w = b[c] || (b[c] = {});
            p && (n = e);
            for (h in n) l = !f && y && void 0 !== y[h], d = (l ? y : n)[h], A = m && l ? a(d, i) : v && "function" == typeof d ? a(Function.call, d) : d, y && s(y, h, d, t & u.U), b[h] != d && r(b, h, A), v && w[h] != d && (w[h] = d)
        };
    i.core = o, u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u.U = 64, u.R = 128, t.exports = u
}, function(t, e, n) {
    var i = n(17);
    t.exports = function(t, e, n) {
        if (i(t), void 0 === e) return t;
        switch (n) {
            case 1:
                return function(n) {
                    return t.call(e, n)
                };
            case 2:
                return function(n, i) {
                    return t.call(e, n, i)
                };
            case 3:
                return function(n, i, o) {
                    return t.call(e, n, i, o)
                }
        }
        return function() {
            return t.apply(e, arguments)
        }
    }
}, function(t, e, n) {
    t.exports = !n(14)(function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(t, e) {
    var n = {}.hasOwnProperty;
    t.exports = function(t, e) {
        return n.call(t, e)
    }
}, function(t, e, n) {
    var i = n(15),
        o = n(23);
    t.exports = n(7) ? function(t, e, n) {
        return i.f(t, e, o(1, n))
    } : function(t, e, n) {
        return t[e] = n, t
    }
}, function(t, e) {
    t.exports = function(t) {
        return "object" == typeof t ? null !== t : "function" == typeof t
    }
}, function(t, e) {
    var n = {}.toString;
    t.exports = function(t) {
        return n.call(t).slice(8, -1)
    }
}, function(t, e) {
    t.exports = {}
}, function(t, e, n) {
    var i = n(2),
        o = n(9),
        r = n(8),
        s = n(29)("src"),
        a = "toString",
        c = Function[a],
        u = ("" + c).split(a);
    n(3).inspectSource = function(t) {
        return c.call(t)
    }, (t.exports = function(t, e, n, a) {
        var c = "function" == typeof n;
        c && (r(n, "name") || o(n, "name", e)), t[e] !== n && (c && (r(n, s) || o(n, s, t[e] ? "" + t[e] : u.join(String(e)))), t === i ? t[e] = n : a ? t[e] ? t[e] = n : o(t, e, n) : (delete t[e], o(t, e, n)))
    })(Function.prototype, a, function() {
        return "function" == typeof this && this[s] || c.call(this)
    })
}, function(t, e) {
    t.exports = function(t) {
        try {
            return !!t()
        } catch (e) {
            return !0
        }
    }
}, function(t, e, n) {
    var i = n(4),
        o = n(35),
        r = n(43),
        s = Object.defineProperty;
    e.f = n(7) ? Object.defineProperty : function(t, e, n) {
        if (i(t), e = r(e, !0), i(n), o) try {
            return s(t, e, n)
        } catch (a) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (t[e] = n.value), t
    }
}, function(t, e, n) {
    var i = n(22),
        o = n(20);
    t.exports = function(t) {
        return i(o(t))
    }
}, function(t, e) {
    t.exports = function(t) {
        if ("function" != typeof t) throw TypeError(t + " is not a function!");
        return t
    }
}, function(t, e, n) {
    var i = n(6),
        o = n(22),
        r = n(28),
        s = n(27),
        a = n(58);
    t.exports = function(t, e) {
        var n = 1 == t,
            c = 2 == t,
            u = 3 == t,
            h = 4 == t,
            l = 6 == t,
            d = 5 == t || l,
            A = e || a;
        return function(e, a, f) {
            for (var p, g, v = r(e), m = o(v), y = i(a, f, 3), b = s(m.length), w = 0, x = n ? A(e, b) : c ? A(e, 0) : void 0; b > w; w++)
                if ((d || w in m) && (p = m[w], g = y(p, w, v), t))
                    if (n) x[w] = g;
                    else if (g) switch (t) {
                case 3:
                    return !0;
                case 5:
                    return p;
                case 6:
                    return w;
                case 2:
                    x.push(p)
            } else if (h) return !1;
            return l ? -1 : u || h ? h : x
        }
    }
}, function(t, e, n) {
    var i = n(11),
        o = n(1)("toStringTag"),
        r = "Arguments" == i(function() {
            return arguments
        }()),
        s = function(t, e) {
            try {
                return t[e]
            } catch (n) {}
        };
    t.exports = function(t) {
        var e, n, a;
        return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = s(e = Object(t), o)) ? n : r ? i(e) : "Object" == (a = i(e)) && "function" == typeof e.callee ? "Arguments" : a
    }
}, function(t, e) {
    t.exports = function(t) {
        if (void 0 == t) throw TypeError("Can't call method on  " + t);
        return t
    }
}, function(t, e, n) {
    var i = n(10),
        o = n(2).document,
        r = i(o) && i(o.createElement);
    t.exports = function(t) {
        return r ? o.createElement(t) : {}
    }
}, function(t, e, n) {
    var i = n(11);
    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
        return "String" == i(t) ? t.split("") : Object(t)
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e
        }
    }
}, function(t, e, n) {
    var i = n(15).f,
        o = n(8),
        r = n(1)("toStringTag");
    t.exports = function(t, e, n) {
        t && !o(t = n ? t : t.prototype, r) && i(t, r, {
            configurable: !0,
            value: e
        })
    }
}, function(t, e, n) {
    var i = n(40)("keys"),
        o = n(29);
    t.exports = function(t) {
        return i[t] || (i[t] = o(t))
    }
}, function(t, e) {
    var n = Math.ceil,
        i = Math.floor;
    t.exports = function(t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? i : n)(t)
    }
}, function(t, e, n) {
    var i = n(26),
        o = Math.min;
    t.exports = function(t) {
        return t > 0 ? o(i(t), 9007199254740991) : 0
    }
}, function(t, e, n) {
    var i = n(20);
    t.exports = function(t) {
        return Object(i(t))
    }
}, function(t, e) {
    var n = 0,
        i = Math.random();
    t.exports = function(t) {
        return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + i).toString(36))
    }
}, function(t, e) {
    t.exports = function n(t, e) {
        function i() {
            for (var i = 0; i < t.children.length; i++) n(t.children[i], e)
        }
        t && e(t.node, i)
    }
}, function(t, e) {
    function n(t, e, n) {
        return n > e ? e > t ? e : t > n ? n : t : n > t ? n : t > e ? e : t
    }
    t.exports = n
}, function(t, e, n) {
    var i = n(1)("unscopables"),
        o = Array.prototype;
    void 0 == o[i] && n(9)(o, i, {}), t.exports = function(t) {
        o[i][t] = !0
    }
}, function(t, e) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function(t, e, n) {
    t.exports = n(2).document && document.documentElement
}, function(t, e, n) {
    t.exports = !n(7) && !n(14)(function() {
        return 7 != Object.defineProperty(n(21)("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(t, e, n) {
    "use strict";
    var i = n(37),
        o = n(5),
        r = n(13),
        s = n(9),
        a = n(8),
        c = n(12),
        u = n(64),
        h = n(24),
        l = n(73),
        d = n(1)("iterator"),
        A = !([].keys && "next" in [].keys()),
        f = "@@iterator",
        p = "keys",
        g = "values",
        v = function() {
            return this
        };
    t.exports = function(t, e, n, m, y, b, w) {
        u(n, e, m);
        var x, E, C, D = function(t) {
                if (!A && t in O) return O[t];
                switch (t) {
                    case p:
                        return function() {
                            return new n(this, t)
                        };
                    case g:
                        return function() {
                            return new n(this, t)
                        }
                }
                return function() {
                    return new n(this, t)
                }
            },
            M = e + " Iterator",
            S = y == g,
            R = !1,
            O = t.prototype,
            k = O[d] || O[f] || y && O[y],
            N = k || D(y),
            T = y ? S ? D("entries") : N : void 0,
            L = "Array" == e ? O.entries || k : k;
        if (L && (C = l(L.call(new t)), C !== Object.prototype && (h(C, M, !0), i || a(C, d) || s(C, d, v))), S && k && k.name !== g && (R = !0, N = function() {
                return k.call(this)
            }), i && !w || !A && !R && O[d] || s(O, d, N), c[e] = N, c[M] = v, y)
            if (x = {
                    values: S ? N : D(g),
                    keys: b ? N : D(p),
                    entries: T
                }, w)
                for (E in x) E in O || r(O, E, x[E]);
            else o(o.P + o.F * (A || R), e, x);
        return x
    }
}, function(t, e) {
    t.exports = !1
}, function(t, e, n) {
    var i = n(74),
        o = n(33);
    t.exports = Object.keys || function(t) {
        return i(t, o)
    }
}, function(t, e) {
    e.f = {}.propertyIsEnumerable
}, function(t, e, n) {
    var i = n(2),
        o = "__core-js_shared__",
        r = i[o] || (i[o] = {});
    t.exports = function(t) {
        return r[t] || (r[t] = {})
    }
}, function(t, e, n) {
    var i = n(14);
    t.exports = function(t, e) {
        return !!t && i(function() {
            e ? t.call(null, function() {}, 1) : t.call(null)
        })
    }
}, function(t, e, n) {
    var i, o, r, s = n(6),
        a = n(60),
        c = n(34),
        u = n(21),
        h = n(2),
        l = h.process,
        d = h.setImmediate,
        A = h.clearImmediate,
        f = h.MessageChannel,
        p = 0,
        g = {},
        v = "onreadystatechange",
        m = function() {
            var t = +this;
            if (g.hasOwnProperty(t)) {
                var e = g[t];
                delete g[t], e()
            }
        },
        y = function(t) {
            m.call(t.data)
        };
    d && A || (d = function(t) {
        for (var e = [], n = 1; arguments.length > n;) e.push(arguments[n++]);
        return g[++p] = function() {
            a("function" == typeof t ? t : Function(t), e)
        }, i(p), p
    }, A = function(t) {
        delete g[t]
    }, "process" == n(11)(l) ? i = function(t) {
        l.nextTick(s(m, t, 1))
    } : f ? (o = new f, r = o.port2, o.port1.onmessage = y, i = s(r.postMessage, r, 1)) : h.addEventListener && "function" == typeof postMessage && !h.importScripts ? (i = function(t) {
        h.postMessage(t + "", "*")
    }, h.addEventListener("message", y, !1)) : i = v in u("script") ? function(t) {
        c.appendChild(u("script"))[v] = function() {
            c.removeChild(this), m.call(t)
        }
    } : function(t) {
        setTimeout(s(m, t, 1), 0)
    }), t.exports = {
        set: d,
        clear: A
    }
}, function(t, e, n) {
    var i = n(10);
    t.exports = function(t, e) {
        if (!i(t)) return t;
        var n, o;
        if (e && "function" == typeof(n = t.toString) && !i(o = n.call(t))) return o;
        if ("function" == typeof(n = t.valueOf) && !i(o = n.call(t))) return o;
        if (!e && "function" == typeof(n = t.toString) && !i(o = n.call(t))) return o;
        throw TypeError("Can't convert object to primitive value")
    }
}, function(t, e, n) {
    function i(t) {
        return t === p || t === g
    }
    function o(t) {
        return y.test(t)
    }
    var r = n(97),
        s = 0,
        a = 1,
        c = 2,
        u = 3,
        h = 4,
        l = 5,
        d = 6,
        A = 7,
        f = 8,
        p = 9,
        g = 10,
        v = 11,
        m = 12;
    t.exports = function(t, e) {
        function n(t) {
            return "function" == typeof t ? t : "string" == typeof t ? t : t && "object" == typeof t ? t : y("", t)
        }
        t = r(t), e || (e = {});
        var y = e.concat || function(t, e) {
            return String(t) + String(e)
        };
        return function(e) {
            function r(t) {
                var e = [];
                b === A && (b = h);
                for (var n = 0; n < t.length; n++) {
                    var o = t.charAt(n);
                    b === a && "<" === o ? (w.length && e.push([a, w]), w = "", b = c) : ">" !== o || i(b) ? b === a ? w += o : b === c && /\s/.test(o) ? (e.push([c, w]), w = "", b = h) : b === c ? w += o : b === h && /[\w-]/.test(o) ? (b = l, w = o) : b === h && /\s/.test(o) ? (w.length && e.push([l, w]), e.push([m])) : b === l && /\s/.test(o) ? (e.push([l, w]), w = "", b = d) : b === l && "=" === o ? (e.push([l, w], [v]), w = "", b = A) : b === l ? w += o : b !== d && b !== h || "=" !== o ? b !== d && b !== h || /\s/.test(o) ? b === A && '"' === o ? b = g : b === A && "'" === o ? b = p : b === g && '"' === o ? (e.push([f, w], [m]), w = "", b = h) : b === p && "'" === o ? (e.push([f, w], [m]), w = "", b = h) : b !== A || /\s/.test(o) ? b === f && /\s/.test(o) ? (e.push([m], [f, w]), w = "", b = h) : b !== f && b !== p && b !== g || (w += o) : (b = f, n--) : (e.push([m]), /[\w-]/.test(o) ? (w += o, b = l) : b = h) : (e.push([v]), b = A) : (b === c ? e.push([c, w]) : b === l ? e.push([l, w]) : b === f && w.length && e.push([f, w]), e.push([u]), w = "", b = a)
                }
                return b === a && w.length ? (e.push([a, w]), w = "") : b === f && w.length ? (e.push([f, w]), w = "") : b === g && w.length ? (e.push([f, w]), w = "") : b === p && w.length ? (e.push([f, w]), w = "") : b === l && (e.push([l, w]), w = ""), e
            }
            for (var b = a, w = "", x = arguments.length, E = [], C = 0; C < e.length; C++)
                if (x - 1 > C) {
                    var D = arguments[C + 1],
                        M = r(e[C]),
                        S = b;
                    S === g && (S = f), S === p && (S = f), S === A && (S = f), S === h && (S = l), M.push([s, S, D]), E.push.apply(E, M)
                } else E.push.apply(E, r(e[C]));
            for (var R = [null, {},
                    []
                ], O = [
                    [R, -1]
                ], C = 0; C < E.length; C++) {
                var k = O[O.length - 1][0],
                    M = E[C],
                    N = M[0];
                if (N === c && /^\//.test(M[1])) {
                    var T = O[O.length - 1][1];
                    O.length > 1 && (O.pop(), O[O.length - 1][0][2][T] = t(k[0], k[1], k[2].length ? k[2] : void 0))
                } else if (N === c) {
                    var L = [M[1], {},
                        []
                    ];
                    k[2].push(L), O.push([L, k[2].length - 1])
                } else if (N === l || N === s && M[1] === l) {
                    for (var I, U = ""; C < E.length; C++)
                        if (E[C][0] === l) U = y(U, E[C][1]);
                        else {
                            if (E[C][0] !== s || E[C][1] !== l) break;
                            if ("object" != typeof E[C][2] || U) U = y(U, E[C][2]);
                            else
                                for (I in E[C][2]) E[C][2].hasOwnProperty(I) && !k[1][I] && (k[1][I] = E[C][2][I])
                        }
                    E[C][0] === v && C++;
                    for (var B = C; C < E.length; C++)
                        if (E[C][0] === f || E[C][0] === l) k[1][U] ? k[1][U] = y(k[1][U], E[C][1]) : k[1][U] = n(E[C][1]);
                        else {
                            if (E[C][0] !== s || E[C][1] !== f && E[C][1] !== l) {
                                !U.length || k[1][U] || C !== B || E[C][0] !== u && E[C][0] !== m || (k[1][U] = U.toLowerCase());
                                break
                            }
                            k[1][U] ? k[1][U] = y(k[1][U], E[C][2]) : k[1][U] = n(E[C][2])
                        }
                } else if (N === l) k[1][M[1]] = !0;
                else if (N === s && M[1] === l) k[1][M[2]] = !0;
                else if (N === u) {
                    if (o(k[0]) && O.length) {
                        var T = O[O.length - 1][1];
                        O.pop(), O[O.length - 1][0][2][T] = t(k[0], k[1], k[2].length ? k[2] : void 0)
                    }
                } else if (N === s && M[1] === a) void 0 === M[2] || null === M[2] ? M[2] = "" : M[2] || (M[2] = y("", M[2])), Array.isArray(M[2][0]) ? k[2].push.apply(k[2], M[2]) : k[2].push(M[2]);
                else if (N === a) k[2].push(M[1]);
                else if (N !== v && N !== m) throw new Error("unhandled: " + N)
            }
            if (R[2].length > 1 && /^\s*$/.test(R[2][0]) && R[2].shift(), R[2].length > 2 || 2 === R[2].length && /\S/.test(R[2][1])) throw new Error("multiple root elements must be wrapped in an enclosing tag");
            return Array.isArray(R[2][0]) && "string" == typeof R[2][0][0] && Array.isArray(R[2][0][2]) && (R[2][0] = t(R[2][0][0], R[2][0][1], R[2][0][2])), R[2][0]
        }
    };
    var y = (Object.prototype.hasOwnProperty, RegExp("^(" + ["area", "base", "basefont", "bgsound", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr", "animate", "animateTransform", "circle", "cursor", "desc", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "font-face-format", "font-face-name", "font-face-uri", "glyph", "glyphRef", "hkern", "image", "line", "missing-glyph", "mpath", "path", "polygon", "polyline", "rect", "set", "stop", "tref", "use", "view", "vkern"].join("|") + ")(?:[.#][a-zA-Z0-9-ï¿¿_:-]+)*$"))
}, function(t, e, n) {
    n(99);
    var i = n(47),
        o = n(30),
        r = n(48),
        s = function(t) {
            this.opts = t, this.data = null, this.gardenId = null, this.gardenKey = null
        };
    s.prototype = {
        record: function(t, e) {
            (new Image).src = "http://xkcd.com/events.gif?re=" + t + "&ev=" + e
        },
        log: function() {
            this.opts.debug && console.log.apply(console, arguments)
        },
        _url: function() {
            var t = this.opts.endpoint + "run";
            return this.gardenId && (t += "/" + this.gardenId), t
        },
        _connect: function() {
            var t = this._url();
            this.source = new EventSource(t), this.log("connecting to event source:", t), this.source.addEventListener("open", this.onConnect.bind(this), !1), this.source.addEventListener("error", this.onConnectionError.bind(this), !1), this.source.addEventListener("linden-key", this.onLindenKey.bind(this), !1), this.source.addEventListener("linden", this.onLindenUpdate.bind(this), !1), this.source.addEventListener("reload", this.onReload.bind(this), !1)
        },
        run: function() {
            try {
                this.opts.endpoint && (location.hash && (this.gardenId = location.hash.substr(1), this.gardenKey = localStorage["key-" + this.gardenId]), this._connect()), this.linden = new i({
                    el: this.opts.el,
                    width: this.opts.width,
                    height: this.opts.height,
                    title: this.opts.title,
                    urlPrefix: this.opts.imgPrefix,
                    loading: !0,
                    readOnly: !this.gardenKey,
                    debug: this.opts.debug,
                    onLightChanging: this.handleLightChanging.bind(this),
                    onSetLight: this.handleSetLight.bind(this),
                    onRemoveLight: this.handleRemoveLight.bind(this),
                    onPruneNode: this.handlePruneNode.bind(this)
                }), this.opts.data && this.linden.update(this.opts.data), r(this.linden)
            } catch (t) {
                throw this.record(this.opts.name, "js_error"), t
            }
            return this
        },
        onConnect: function() {
            this.record(this.opts.name, "connect_start"), this.dirtyLights = {}, this.inFlightRequests = 0, this.linden.renderUI()
        },
        onConnectionError: function(t) {
            this.log("connection error", t), this.record(this.opts.name, "connect_error"), this.linden.opts.loading = !0, this.linden.resetTree(), this.linden.renderUI(), this.source.url !== this._url() && (this.source.close(), this._connect())
        },
        onLindenKey: function(t) {
            this.log("linden key from EventSource", t);
            var e = JSON.parse(t.data);
            this.gardenId = location.hash = e.garden, this.gardenKey = localStorage["key-" + e.garden] = e.key, this.linden.opts.readOnly = !1, this.linden.renderUI()
        },
        _acceptUpdate: function() {
            if (this.inFlightRequests > 0) return this.log("rejecting update, inflight:", this.inFlightRequests), !1;
            for (var t in this.dirtyLights)
                if (this.dirtyLights.hasOwnProperty(t) && this.dirtyLights[t] === !0) return this.log("rejecting update, dirty light:", t), !1;
            return !0
        },
        _update: function(t) {
            this._acceptUpdate() && (this.data = t, this.linden.update(t))
        },
        onLindenUpdate: function(t) {
            this.log("linden from EventSource", t), this._update(JSON.parse(t.data))
        },
        onReload: function() {
            var t = Math.round(Math.random() * this.opts.spread.reload);
            this.log("reloading in", t + 5, "seconds"), setTimeout(function() {
                this.record(this.opts.name, "reloading"), setTimeout(function() {
                    location.reload()
                }, 5e3)
            }, 1e3 * t)
        },
        request: function(t, e) {
            var n = function() {
                    this.inFlightRequests--, this.log("inflight--", this.inFlightRequests)
                }.bind(this),
                i = {
                    method: "POST"
                };
            Object.assign(i, e), i.body = JSON.stringify(e.body), this.log("request", t, i);
            var o = fetch(t, i);
            return o.then(n, n), this.inFlightRequests++, this.log("inflight++", this.inFlightRequests), o
        },
        handleLightChanging: function(t) {
            this.dirtyLights[t] = !0
        },
        handleSetLight: function(t, e) {
            this.log("set light:", t, e), this.request(this.opts.endpoint + "edit", {
                body: Object.assign({
                    tag: "EditLight",
                    garden: this.data.garden,
                    editKey: this.gardenKey,
                    light: t
                }, e)
            }).then(function(t) {
                return t.json()
            }).then(function(t) {
                this._update(Object.assign({}, this.data, {
                    lights: t
                }))
            }.bind(this)), delete this.dirtyLights[t]
        },
        _sendRemove: function(t) {
            this.request(this.opts.endpoint + "edit", {
                body: {
                    tag: "Del",
                    garden: this.data.garden,
                    editKey: this.gardenKey,
                    node: t
                }
            })
        },
        handleRemoveLight: function(t) {
            this.log("remove light:", t);
            var e = this.data.lights.filter(function(e) {
                return e.id !== t
            });
            this._update(Object.assign({}, this.data, {
                lights: e
            })), this._sendRemove(t)
        },
        handlePruneNode: function(t) {
            this.log("prune node:", t);
            var e = {
                    children: []
                },
                n = e;
            o(this.data.tree, function(e, i) {
                var o = n;
                n = {
                    node: e,
                    children: []
                }, e.id !== t && o.children.push(n), i(), n = o
            }), this._update(Object.assign({}, this.data, {
                tree: e.children[0]
            })), this._sendRemove(t)
        }
    }, t.exports = s
}, function(t, e) {
    function n() {
        this.imgs = {}, this.callbacks = {}
    }
    n.prototype = {
        get: function(t, e) {
            var n = this.imgs[t];
            void 0 === n ? (this.imgs[t] = !0, this.callbacks[t] = [e], n = new Image, n.onload = this._onDone.bind(this, t, n, n), n.onerror = this._onDone.bind(this, t, n, !1), n.crossOrigin = "anonymous", n.src = t) : n === !0 ? this.callbacks[t].push(e) : e && e(t, n)
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
                o[t] = n, i--, 0 === i && e(o)
            }
            if (!t.length) return void e([]);
            for (var i = t.length, o = {}, r = 0; r < t.length; r++) this.get(t[r], n)
        }
    }, t.exports = n
}, function(t, e, n) {
    function i(t, e) {
        return Object.freeze(Object.defineProperties(t, {
            raw: {
                value: Object.freeze(e)
            }
        }))
    }
    function o(t) {
        return Math.sin(t * O)
    }
    function r(t) {
        return Math.cos(t * O)
    }
    function s(t, e) {
        return (t % e + e) % e
    }
    function a(t, e, n, i, a, c, u) {
        var h, l, d, A, f = s(t, 360);
        90 >= f ? (h = i, l = u, d = c, A = a) : 180 >= f ? (h = c, l = a, d = i, A = u) : 270 >= f ? (h = c, l = u, d = i, A = a) : (h = i, l = u, d = c, A = a), h -= e, l -= n, d -= e, A -= n;
        var p = {
            x1: e + h * r(f) - l * o(f),
            y1: n + h * o(f) + l * r(f),
            x2: e + d * r(f) - A * o(f),
            y2: n + d * o(f) + A * r(f)
        };
        if (p.x2 < p.x1) {
            var g = p.x2;
            p.x2 = p.x1, p.x1 = g
        }
        if (p.y2 < p.y1) {
            var v = p.y2;
            p.y2 = p.y1, p.y1 = v
        }
        return p
    }
    function c(t, e, n, i) {
        return "rgba(" + 100 * t + "%, " + 100 * e + "%, " + 100 * n + "%, " + i + ")"
    }
    function u(t) {
        return .32 > t ? [1, .5 + .5 * t / .32, .5] : .64 > t ? [1, 1, .5 + .5 * (t - .32) / .32] : [.75 + .25 * (1 - t) / .36, .75 + .25 * (1 - t) / .36, 1]
    }
    function h(t, e, n) {
        var i = {
            x2: 0,
            y2: 0,
            scale: 1,
            angle: 0
        };
        M(t, function(t, s) {
            var a = e[t.id],
                c = t.cache;
            c || (c = t.cache = {}), c.scale = i.scale * t.scale, c.angle = i.angle + a.angle;
            var u = t.attach[0] - t.root[0],
                h = t.attach[1] - t.root[1];
            c.x1 = i.x2, c.y1 = i.y2, c.x2 = c.x1 + c.scale * (u * r(c.angle) + h * o(c.angle)), c.y2 = c.y1 + c.scale * (-u * o(c.angle) + h * r(c.angle));
            var l = i;
            i = c, n(t, s), i = l
        })
    }
    function l(t) {
        var e = t.cache,
            n = e.x1 - t.root[0],
            i = e.y1 - t.root[1];
        return a(-e.angle, n + t.root[0], i + t.root[1], n, i, n + e.scale * e.width, i + e.scale * e.height)
    }
    function d(t, e, n, i) {
        function s(t, n) {
            return e[t.id][n]
        }
        var a = i.width,
            d = i.height,
            A = i.debug,
            f = i.urlPrefix,
            p = "",
            g = i.imgCache,
            v = i.el.getContext("2d"),
            m = Number(i.el.getAttribute("data-density"));
        m > 1 && (p = "2x-");
        var y = [];
        M(t, function(t, e) {
            t.img && y.push(f + p + t.img), e()
        }), g.getAll(y, function(g) {
            function y(t) {
                for (var e = 0; e < n.length; e++) {
                    var i = n[e];
                    x.save(), x.beginPath(), x.moveTo(i.pos[0], i.pos[1]);
                    var s = i.pos[0] + E * r(i.pointAngle - i.beamAngle / 2),
                        a = i.pos[1] + E * o(i.pointAngle - i.beamAngle / 2);
                    x.lineTo(s, a), x.arc(i.pos[0], i.pos[1], E, (i.pointAngle - i.beamAngle / 2) * O, (i.pointAngle + i.beamAngle / 2) * O), x.lineTo(i.pos[0], i.pos[1]), t(i), x.restore()
                }
            }
            v.save(), v.scale(m, -m), v.translate(0, -d), v.clearRect(0, 0, a, d);
            var b;
            h(t, e, function(t, n) {
                var i = t.cache;
                if (v.save(), v.rotate(s(t, "angle") * -O), v.scale(t.scale, t.scale), e._selected && (t.id === e._selected.id && (v.globalAlpha = .5), t.id === e._selected.circled && (b = t)), t.img) {
                    var o = f + p + t.img,
                        r = g[o];
                    r && (v.save(), v.scale(1 / m, -1 / m), v.translate(0, -r.height), v.drawImage(r, -t.root[0] * m, t.root[1] * m), v.restore(), i.width = r.width / m, i.height = r.height / m)
                }
                v.translate(t.attach[0] - t.root[0], t.attach[1] - t.root[1]), n(), v.restore()
            });
            var w = document.createElement("canvas");
            w.width = i.el.width, w.height = i.el.height;
            var x = w.getContext("2d");
            x.scale(m, m);
            var E = Math.sqrt(Math.pow(a, 2) + Math.pow(d, 2));
            if (y(function(t) {
                    var e = x.createRadialGradient(t.pos[0], t.pos[1], 0, t.pos[0], t.pos[1], E),
                        n = u(t.temp);
                    e.addColorStop(0, c(n[0], n[1], n[2], 1)), e.addColorStop(1, c(n[0], n[1], n[2], 0)), x.fillStyle = e, x.globalCompositeOperation = "lighten", x.fill()
                }), y(function(t) {
                    x.globalAlpha = .4, x.strokeStyle = "black", x.stroke()
                }), v.save(), v.scale(1 / m, 1 / m), v.globalCompositeOperation = "source-atop", v.globalAlpha = .65, v.drawImage(w, 0, 0), v.globalAlpha = .25, v.globalCompositeOperation = "destination-over", v.drawImage(w, 0, 0), v.restore(), b) {
                b.cache;
                v.save(), v.beginPath();
                var C = l(b),
                    D = C.x1 + (C.x2 - C.x1) / 2,
                    S = C.y1 + (C.y2 - C.y1) / 2,
                    k = Math.sqrt(Math.pow(C.x2 - C.x1, 2) + Math.pow(C.y2 - C.y1, 2));
                v.arc(D, S, k / 2 + 6, 0, R), v.strokeStyle = "red", v.lineWidth = 2, v.globalAlpha = .9, v.stroke(), v.restore()
            }
            A && M(t, function(t, e) {
                v.save();
                var n = t.cache;
                if (v.beginPath(), v.globalAlpha = .75, v.moveTo(n.x1, n.y1), v.lineTo(n.x2, n.y2), v.strokeStyle = t.proxyFor ? "lightgreen" : "magenta", v.lineWidth = 1, v.stroke(), e(), v.restore(), n.width) {
                    var i = l(t);
                    v.beginPath(), v.rect(i.x1, i.y1, i.x2 - i.x1, i.y2 - i.y1), v.strokeStyle = "red", v.stroke()
                }
            }), v.restore(), i.onFinish && i.onFinish()
        })
    }
    function A(t) {
        this.el = t.el, this.opts = t, this.imgCache = new D, this._queued = !1, this._rendering = !1, this._afterNextRender = null, this.resetTree(), this.renderUI()
    }
    var f = i(["<div\n      className=", "\n      style=", "\n      onMouseDown=", "\n    />"], ["<div\n      className=", "\n      style=", "\n      onMouseDown=", "\n    />"]),
        p = i(["\n        <div>\n          <div style=", '>\n            <Handle\n              className="rotate"\n              disabled=', "\n              onDrag=", "\n              onRelease=", "\n            ></Handle>\n          </div>\n          <div style=", '>\n            <Handle\n              className="color"\n              style=', "\n              disabled=", "\n              onDrag=", "\n              onRelease=", "\n            ></Handle>\n          </div>\n        </div>\n      "], ["\n        <div>\n          <div style=", '>\n            <Handle\n              className="rotate"\n              disabled=', "\n              onDrag=", "\n              onRelease=", "\n            ></Handle>\n          </div>\n          <div style=", '>\n            <Handle\n              className="color"\n              style=', "\n              disabled=", "\n              onDrag=", "\n              onRelease=", "\n            ></Handle>\n          </div>\n        </div>\n      "]),
        g = i(["\n      <div\n        className=", "\n        style=", "\n        data-light-id=", '\n      >\n        <div>\n          <Handle\n            className="position"\n            disabled=', "\n            onGrab=", "\n            onDrag=", "\n            onRelease=", "\n          ></Handle>\n        </div>\n        ", "\n      </div>\n    "], ["\n      <div\n        className=", "\n        style=", "\n        data-light-id=", '\n      >\n        <div>\n          <Handle\n            className="position"\n            disabled=', "\n            onGrab=", "\n            onDrag=", "\n            onRelease=", "\n          ></Handle>\n        </div>\n        ", "\n      </div>\n    "]),
        v = i(['\n        <div className="tools">\n          <button\n            className="add-light"\n            disabled=', '\n            title="Create new light"\n            onClick=', '\n          >+</button>\n          <button\n            className="remove"\n            disabled=', '\n            title="Remove selected (delete key)"\n            onClick=', "\n          >x</button>\n        </div>\n      "], ['\n        <div className="tools">\n          <button\n            className="add-light"\n            disabled=', '\n            title="Create new light"\n            onClick=', '\n          >+</button>\n          <button\n            className="remove"\n            disabled=', '\n            title="Remove selected (delete key)"\n            onClick=', "\n          >x</button>\n        </div>\n      "]),
        m = i(["\n      <div\n        onMouseDown=", "\n        onKeyDown=", "\n        style=", "\n        className=", "\n        title=", '\n        tabIndex="1"\n      >\n        ', "\n        ", '\n        <div className="content">\n          <canvas\n            data-density=', "\n            width=", "\n            height=", "\n            style=", "\n            onMouseDown=", "\n          ></canvas>\n          ", "\n        </div>\n      </div>\n    "], ["\n      <div\n        onMouseDown=", "\n        onKeyDown=", "\n        style=", "\n        className=", "\n        title=", '\n        tabIndex="1"\n      >\n        ', "\n        ", '\n        <div className="content">\n          <canvas\n            data-density=', "\n            width=", "\n            height=", "\n            style=", "\n            onMouseDown=", "\n          ></canvas>\n          ", "\n        </div>\n      </div>\n    "]),
        y = i(['<div><div className="spinner"></div><div className="spinner-text">loading</div>'], ['<div><div className="spinner"></div><div className="spinner-text">loading</div>']),
        b = i(["<Light\n              id=", "\n              disabled=", "\n              selected=", "\n              x=", "\n              y=", "\n              temp=", "\n              pointAngle=", "\n              beamAngle=", "\n              onInteract=", "\n              onMove=", "\n              onRotate=", "\n              onChangeColor=", "\n              onSave=", "\n            />"], ["<Light\n              id=", "\n              disabled=", "\n              selected=", "\n              x=", "\n              y=", "\n              temp=", "\n              pointAngle=", "\n              beamAngle=", "\n              onInteract=", "\n              onMove=", "\n              onRotate=", "\n              onChangeColor=", "\n              onSave=", "\n            />"]),
        w = n(94),
        x = n(49),
        E = n(31),
        C = n(100),
        D = n(46),
        M = n(30),
        S = Math.PI / 2,
        R = 2 * Math.PI,
        O = S / 90;
    w.component("Handle", {
        componentDidMount: function() {
            this._handleDragMove = this.handleDragMove.bind(this), this._handleDragUp = this.handleDragUp.bind(this), this.getDOMNode().firstChild.addEventListener("touchstart", this.handleDragDown.bind(this))
        },
        _stopListening: function() {
            window.removeEventListener("mousemove", this._handleDragMove, !1), window.removeEventListener("mouseup", this._handleDragUp, !1), window.removeEventListener("touchmove", this._handleDragMove, !1), window.removeEventListener("touchend", this._handleDragUp, !1)
        },
        componentWillUnmount: function() {
            this._stopListening()
        },
        _normalizeEvent: function(t) {
            t.touches && t.touches[0] && (t.clientX = t.touches[0].clientX, t.clientY = t.touches[0].clientY)
        },
        handleDragDown: function(t) {
            this.props.disabled || (document.documentElement.style.cursor = "move", window.addEventListener("mousemove", this._handleDragMove, !1), window.addEventListener("mouseup", this._handleDragUp, !1), window.addEventListener("touchmove", this._handleDragMove, !1), window.addEventListener("touchend", this._handleDragUp, !1), this.props.onGrab && (this._normalizeEvent(t), this.props.onGrab(t)), t.preventDefault())
        },
        handleDragUp: function(t) {
            document.documentElement.style.cursor = null, this._stopListening(), this.props.onRelease && (this._normalizeEvent(t), this.props.onRelease(t)), t.preventDefault()
        },
        handleDragMove: function(t) {
            this.props.onDrag && (this._normalizeEvent(t), this.props.onDrag(t)), t.preventDefault()
        },
        render: function() {
            return w(f, x("handle", this.props.className), this.props.style || "", this.handleDragDown.bind(this))
        }
    }), w.component("Light", {
        handleRotate: function(t) {
            var e = this.getDOMNode().firstChild.getBoundingClientRect(),
                n = t.clientX - e.left,
                i = t.clientY - e.top,
                o = s(-Math.atan2(i, n) / O, 360),
                r = Math.sqrt(Math.pow(n, 2) + Math.pow(i, 2));
            this.props.onRotate(o, E(0, 95 - 3 * (r - 42), 95))
        },
        handleRotateColor: function(t) {
            var e = this.getDOMNode().firstChild.getBoundingClientRect(),
                n = t.clientX - e.left,
                i = t.clientY - e.top,
                o = E(90, s(-Math.atan2(i, n) / O - this.props.pointAngle, 360), 270) - 90;
            this.props.onChangeColor(o / 180)
        },
        render: function() {
            var t = C({
                    left: this.props.x + "px",
                    top: this.props.y + "px",
                    transform: "rotate(" + (-this.props.pointAngle - 90) + "deg)"
                }),
                e = "";
            if (this.props.selected) {
                var n = 42 + E(0, (95 - this.props.beamAngle) / 3, 95),
                    i = C({
                        position: "absolute",
                        top: n + "px"
                    }),
                    s = 180 * this.props.temp,
                    a = u(this.props.temp),
                    h = C({
                        position: "absolute",
                        left: 39 * r(-s) + "px",
                        top: 39 * o(-s) + "px"
                    }),
                    l = C({
                        backgroundColor: c(a[0], a[1], a[2], 1)
                    });
                e = w(p, i, this.props.disabled, this.handleRotate.bind(this), this.props.onSave, h, l, this.props.disabled, this.handleRotateColor.bind(this), this.props.onSave)
            }
            return w(g, x("light", this.props.selected && "selected"), t, this.props.id, this.props.disabled, this.props.onInteract, this.props.onMove, this.props.onSave, e)
        }
    }), A.prototype = {
        STIFFNESS: .25,
        FRICTION: .1,
        MAX_LIGHTS: 3,
        FPS: 15,
        resetTree: function() {
            this.l = null, this.lights = [], this.state = {
                _selected: null
            }
        },
        renderUI: function() {
            var t = "";
            this.opts.readOnly || this.opts.loading || (t = w(v, this.lights.length === this.MAX_LIGHTS, this.handleCreateLight.bind(this), !this.state._selected, this.handleRemoveSelection.bind(this)));
            var e = C({
                    width: this.opts.width + "px",
                    height: this.opts.height + "px"
                }),
                n = window.devicePixelRatio > 1 ? 2 : 1,
                i = C({
                    transformOrigin: "0 0",
                    transform: "scale(" + 1 / n + ", " + 1 / n + ")"
                }),
                o = x("frame", this.opts.loading && "loading");
            w.render(w(m, this.handleMouseDown.bind(this), this.handleKeyDown.bind(this), e, o, this.opts.title, t, this.opts.loading ? w(y) : "", n, this.opts.width * n, this.opts.height * n, i, this.handleCanvasMouseDown.bind(this), this.lights.map(function(t) {
                var e = Boolean(this.state._selected && "light" === this.state._selected.kind && this.state._selected.id === t.id);
                return w(b, t.id, this.opts.readOnly, e, t.pos[0], this.opts.height - t.pos[1], t.temp, t.pointAngle, t.beamAngle, this.handleLightInteract.bind(this, t.id), this.handleLightMove.bind(this, t.id), this.handleLightRotate.bind(this, t.id), this.handleLightChangeColor.bind(this, t.id), this.saveLight.bind(this, t.id))
            }.bind(this))), this.el)
        },
        update: function(t) {
            this.l = t.tree;
            var e = 0,
                n = {};
            M(this.l, function(t, i) {
                e++;
                var o = t.img || "proxy";
                n[o] = n[o] || {
                    count: 0
                }, n[o].count++;
                var r = this.state[t.id];
                r || (r = this.state[t.id] = {
                    angle: t.angle,
                    av: 0
                }), r.node = t, i()
            }.bind(this)), this.lights = t.lights || [];
            var i = Date.now();
            this._afterNextRender = function() {
                if (this.opts.loading = !1, this.renderUI(), this._afterNextRender = null, this.opts.debug) {
                    var o = Date.now() - i;
                    console.debug("updated. rendered", e, "nodes in", o, "ms", "| supply:", t.supply), console.table(n)
                }
            }.bind(this), this.renderCanvas()
        },
        addWind: function(t, e, n) {
            M(this.l, function(i, r) {
                if (!i.rigid && i.cache) {
                    var s = this.state[i.id],
                        a = o(t - i.cache.angle),
                        c = 1 - n + Math.random() * n;
                    s.av += i.waviness * c * (1 / Math.sqrt(i.cache.scale)) * a * e
                }
                r()
            }.bind(this)), this.queueStep()
        },
        queueStep: function() {
            this._queued || (setTimeout(this.step.bind(this), 1e3 / this.FPS), this._queued = Date.now())
        },
        step: function() {
            this.opts.beforeStep && this.opts.beforeStep(), M(this.l, function(t, e) {
                var n = this.state[t.id];
                n.av += (1 - t.waviness) * t.scale * this.STIFFNESS * (t.angle - n.angle), n.av += -n.av * this.FRICTION, n.angle += n.av, e()
            }.bind(this)), this.renderCanvas(), this._queued = !1, this.queueStep()
        },
        renderCanvas: function() {
            !this._rendering && this.l && (this._rendering = !0, d(this.l, this.state, this.lights, {
                width: this.opts.width,
                height: this.opts.height,
                el: this.el.querySelector("canvas"),
                urlPrefix: this.opts.urlPrefix,
                imgCache: this.imgCache,
                debug: this.opts.debug,
                onFinish: function() {
                    this._afterNextRender && this._afterNextRender(), this._rendering = !1
                }.bind(this)
            }))
        },
        handleMouseDown: function() {
            this.el.querySelector(".frame").focus()
        },
        _deselect: function() {
            this.state._selected = null, this.renderCanvas(), this.renderUI()
        },
        handleCanvasMouseDown: function(t) {
            if (!this.opts.readOnly) {
                this._deselect();
                var e = this.el.getBoundingClientRect(),
                    n = t.clientX - e.left,
                    i = this.opts.height - (t.clientY - e.top),
                    o = null,
                    r = Number.MAX_VALUE;
                if (M(this.l, function(t, e) {
                        var s = t.cache;
                        if (s && s.width && !t.immutable) {
                            var a = l(t);
                            if (a.x1 <= n && a.x2 >= n && a.y1 <= i && a.y2 >= i) {
                                var c = (a.x2 - a.x1) * (a.y2 - a.y1);
                                r > c && (o = t, r = c)
                            }
                        }
                        e()
                    }), o) {
                    var s = o.proxyFor || o.id;
                    this.state._selected = {
                        kind: "node",
                        id: s,
                        circled: o.id
                    }
                }
                this.renderCanvas(), this.renderUI()
            }
        },
        handleKeyDown: function(t) {
            46 !== t.which && 8 !== t.which || (this.handleRemoveSelection(), t.preventDefault())
        },
        handleLightInteract: function(t) {
            this.opts.readOnly || (this.state._selected = {
                kind: "light",
                id: t
            }, this.renderCanvas(), this.renderUI())
        },
        handleLightMove: function(t, e) {
            var n = this.el.getBoundingClientRect(),
                i = E(0, e.clientX - n.left, this.opts.width),
                o = E(0, this.opts.height - (e.clientY - n.top), this.opts.height);
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
            }); - 1 !== n && (Object.assign(this.lights[n], e), this.renderCanvas(), this.renderUI())
        },
        saveLight: function(t) {
            var e = this.lights.findIndex(function(e) {
                return e.id === t
            }); - 1 !== e && this.opts.onSetLight(t, this.lights[e])
        },
        handleCreateLight: function() {
            var t = this.opts.width * Math.random(),
                e = (this.opts.height + this.opts.height * Math.random()) / 2,
                n = this.opts.width / 2,
                i = 0;
            this.opts.onSetLight(null, {
                pos: [t, e],
                pointAngle: Math.atan2(i - e, n - t) / O,
                beamAngle: 45 + 45 * Math.random(),
                temp: .5
            })
        },
        handleRemoveSelection: function() {
            this.state._selected && ("node" === this.state._selected.kind ? this.opts.onPruneNode(this.state._selected.id) : "light" === this.state._selected.kind && this.opts.onRemoveLight(this.state._selected.id), this._deselect())
        }
    }, t.exports = A
}, function(t, e, n) {
    var i = n(31);
    t.exports = function(t) {
        function e() {
            var e = 2 * (Math.random() - .5);
            Math.random() > .9 && (n += Math.random() - .5), o = i(60, o + 2 * (Math.random() - .5), 120), n *= .995, t.addWind(o, .025 * e + .25 * n, .5)
        }
        var n = 0,
            o = 90;
        t.opts.beforeStep = e, e()
    }
}, function(t, e, n) {
    var i, o;
    /*!
          Copyright (c) 2016 Jed Watson.
          Licensed under the MIT License (MIT), see
          http://jedwatson.github.io/classnames
        */
    ! function() {
        "use strict";
        function n() {
            for (var t = [], e = 0; e < arguments.length; e++) {
                var i = arguments[e];
                if (i) {
                    var o = typeof i;
                    if ("string" === o || "number" === o) t.push(i);
                    else if (Array.isArray(i)) t.push(n.apply(null, i));
                    else if ("object" === o)
                        for (var s in i) r.call(i, s) && i[s] && t.push(s)
                }
            }
            return t.join(" ")
        }
        var r = {}.hasOwnProperty;
        "undefined" != typeof t && t.exports ? t.exports = n : (i = [], o = function() {
            return n
        }.apply(e, i), !(void 0 !== o && (t.exports = o)))
    }()
}, function(t, e, n) {
    n(88), n(90), n(91), n(89), t.exports = n(3).Promise
}, function(t, e, n) {
    n(82), t.exports = n(3).Array.filter
}, function(t, e, n) {
    n(83), t.exports = n(3).Array.findIndex
}, function(t, e, n) {
    n(85), t.exports = n(3).Array.map
}, function(t, e, n) {
    n(86), t.exports = n(3).Date.now
}, function(t, e, n) {
    n(87), t.exports = n(3).Object.assign
}, function(t, e) {
    t.exports = function(t, e, n, i) {
        if (!(t instanceof e) || void 0 !== i && i in t) throw TypeError(n + ": incorrect invocation!");
        return t
    }
}, function(t, e, n) {
    var i = n(16),
        o = n(27),
        r = n(80);
    t.exports = function(t) {
        return function(e, n, s) {
            var a, c = i(e),
                u = o(c.length),
                h = r(s, u);
            if (t && n != n) {
                for (; u > h;)
                    if (a = c[h++], a != a) return !0
            } else
                for (; u > h; h++)
                    if ((t || h in c) && c[h] === n) return t || h; return !t && -1
        }
    }
}, function(t, e, n) {
    var i = n(10),
        o = n(62),
        r = n(1)("species");
    t.exports = function(t, e) {
        var n;
        return o(t) && (n = t.constructor, "function" != typeof n || n !== Array && !o(n.prototype) || (n = void 0), i(n) && (n = n[r], null === n && (n = void 0))), new(void 0 === n ? Array : n)(e)
    }
}, function(t, e, n) {
    var i = n(6),
        o = n(63),
        r = n(61),
        s = n(4),
        a = n(27),
        c = n(81);
    t.exports = function(t, e, n, u, h) {
        var l, d, A, f = h ? function() {
                return t
            } : c(t),
            p = i(n, u, e ? 2 : 1),
            g = 0;
        if ("function" != typeof f) throw TypeError(t + " is not iterable!");
        if (r(f))
            for (l = a(t.length); l > g; g++) e ? p(s(d = t[g])[0], d[1]) : p(t[g]);
        else
            for (A = f.call(t); !(d = A.next()).done;) o(A, p, d.value, e)
    }
}, function(t, e) {
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
}, function(t, e, n) {
    var i = n(12),
        o = n(1)("iterator"),
        r = Array.prototype;
    t.exports = function(t) {
        return void 0 !== t && (i.Array === t || r[o] === t)
    }
}, function(t, e, n) {
    var i = n(11);
    t.exports = Array.isArray || function(t) {
        return "Array" == i(t)
    }
}, function(t, e, n) {
    var i = n(4);
    t.exports = function(t, e, n, o) {
        try {
            return o ? e(i(n)[0], n[1]) : e(n)
        } catch (r) {
            var s = t["return"];
            throw void 0 !== s && i(s.call(t)), r
        }
    }
}, function(t, e, n) {
    "use strict";
    var i = n(69),
        o = n(23),
        r = n(24),
        s = {};
    n(9)(s, n(1)("iterator"), function() {
        return this
    }), t.exports = function(t, e, n) {
        t.prototype = i(s, {
            next: o(1, n)
        }), r(t, e + " Iterator")
    }
}, function(t, e, n) {
    var i = n(1)("iterator"),
        o = !1;
    try {
        var r = [7][i]();
        r["return"] = function() {
            o = !0
        }, Array.from(r, function() {
            throw 2
        })
    } catch (s) {}
    t.exports = function(t, e) {
        if (!e && !o) return !1;
        var n = !1;
        try {
            var r = [7],
                s = r[i]();
            s.next = function() {
                n = !0
            }, r[i] = function() {
                return s
            }, t(r)
        } catch (a) {}
        return n
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return {
            value: e,
            done: !!t
        }
    }
}, function(t, e, n) {
    var i, o, r, s = n(2),
        a = n(42).set,
        c = s.MutationObserver || s.WebKitMutationObserver,
        u = s.process,
        h = s.Promise,
        l = "process" == n(11)(u),
        d = function() {
            var t, e;
            for (l && (t = u.domain) && t.exit(); i;) e = i.fn, e(), i = i.next;
            o = void 0, t && t.enter()
        };
    if (l) r = function() {
        u.nextTick(d)
    };
    else if (c) {
        var A = !0,
            f = document.createTextNode("");
        new c(d).observe(f, {
            characterData: !0
        }), r = function() {
            f.data = A = !A
        }
    } else r = h && h.resolve ? function() {
        h.resolve().then(d)
    } : function() {
        a.call(s, d)
    };
    t.exports = function(t) {
        var e = {
            fn: t,
            next: void 0
        };
        o && (o.next = e), i || (i = e, r()), o = e
    }
}, function(t, e, n) {
    "use strict";
    var i = n(38),
        o = n(72),
        r = n(39),
        s = n(28),
        a = n(22),
        c = Object.assign;
    t.exports = !c || n(14)(function() {
        var t = {},
            e = {},
            n = Symbol(),
            i = "abcdefghijklmnopqrst";
        return t[n] = 7, i.split("").forEach(function(t) {
            e[t] = t
        }), 7 != c({}, t)[n] || Object.keys(c({}, e)).join("") != i
    }) ? function(t, e) {
        for (var n = s(t), c = arguments.length, u = 1, h = o.f, l = r.f; c > u;)
            for (var d, A = a(arguments[u++]), f = h ? i(A).concat(h(A)) : i(A), p = f.length, g = 0; p > g;) l.call(A, d = f[g++]) && (n[d] = A[d]);
        return n
    } : c
}, function(t, e, n) {
    var i = n(4),
        o = n(70),
        r = n(33),
        s = n(25)("IE_PROTO"),
        a = function() {},
        c = "prototype",
        u = function() {
            var t, e = n(21)("iframe"),
                i = r.length,
                o = ">";
            for (e.style.display = "none", n(34).appendChild(e), e.src = "javascript:", t = e.contentWindow.document, t.open(), t.write("<script>document.F=Object</script" + o), t.close(), u = t.F; i--;) delete u[c][r[i]];
            return u()
        };
    t.exports = Object.create || function(t, e) {
        var n;
        return null !== t ? (a[c] = i(t), n = new a, a[c] = null, n[s] = t) : n = u(), void 0 === e ? n : o(n, e)
    }
}, function(t, e, n) {
    var i = n(15),
        o = n(4),
        r = n(38);
    t.exports = n(7) ? Object.defineProperties : function(t, e) {
        o(t);
        for (var n, s = r(e), a = s.length, c = 0; a > c;) i.f(t, n = s[c++], e[n]);
        return t
    }
}, function(t, e, n) {
    var i = n(39),
        o = n(23),
        r = n(16),
        s = n(43),
        a = n(8),
        c = n(35),
        u = Object.getOwnPropertyDescriptor;
    e.f = n(7) ? u : function(t, e) {
        if (t = r(t), e = s(e, !0), c) try {
            return u(t, e)
        } catch (n) {}
        return a(t, e) ? o(!i.f.call(t, e), t[e]) : void 0
    }
}, function(t, e) {
    e.f = Object.getOwnPropertySymbols
}, function(t, e, n) {
    var i = n(8),
        o = n(28),
        r = n(25)("IE_PROTO"),
        s = Object.prototype;
    t.exports = Object.getPrototypeOf || function(t) {
        return t = o(t), i(t, r) ? t[r] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? s : null
    }
}, function(t, e, n) {
    var i = n(8),
        o = n(16),
        r = n(57)(!1),
        s = n(25)("IE_PROTO");
    t.exports = function(t, e) {
        var n, a = o(t),
            c = 0,
            u = [];
        for (n in a) n != s && i(a, n) && u.push(n);
        for (; e.length > c;) i(a, n = e[c++]) && (~r(u, n) || u.push(n));
        return u
    }
}, function(t, e, n) {
    var i = n(13);
    t.exports = function(t, e, n) {
        for (var o in e) i(t, o, e[o], n);
        return t
    }
}, function(t, e, n) {
    var i = n(10),
        o = n(4),
        r = function(t, e) {
            if (o(t), !i(e) && null !== e) throw TypeError(e + ": can't set as prototype!")
        };
    t.exports = {
        set: Object.setPrototypeOf || ("__proto__" in {} ? function(t, e, i) {
            try {
                i = n(6)(Function.call, n(71).f(Object.prototype, "__proto__").set, 2), i(t, []), e = !(t instanceof Array)
            } catch (o) {
                e = !0
            }
            return function(t, n) {
                return r(t, n), e ? t.__proto__ = n : i(t, n), t
            }
        }({}, !1) : void 0),
        check: r
    }
}, function(t, e, n) {
    "use strict";
    var i = n(2),
        o = n(15),
        r = n(7),
        s = n(1)("species");
    t.exports = function(t) {
        var e = i[t];
        r && e && !e[s] && o.f(e, s, {
            configurable: !0,
            get: function() {
                return this
            }
        })
    }
}, function(t, e, n) {
    var i = n(4),
        o = n(17),
        r = n(1)("species");
    t.exports = function(t, e) {
        var n, s = i(t).constructor;
        return void 0 === s || void 0 == (n = i(s)[r]) ? e : o(n)
    }
}, function(t, e, n) {
    var i = n(26),
        o = n(20);
    t.exports = function(t) {
        return function(e, n) {
            var r, s, a = String(o(e)),
                c = i(n),
                u = a.length;
            return 0 > c || c >= u ? t ? "" : void 0 : (r = a.charCodeAt(c), 55296 > r || r > 56319 || c + 1 === u || (s = a.charCodeAt(c + 1)) < 56320 || s > 57343 ? t ? a.charAt(c) : r : t ? a.slice(c, c + 2) : (r - 55296 << 10) + (s - 56320) + 65536)
        }
    }
}, function(t, e, n) {
    var i = n(26),
        o = Math.max,
        r = Math.min;
    t.exports = function(t, e) {
        return t = i(t), 0 > t ? o(t + e, 0) : r(t, e)
    }
}, function(t, e, n) {
    var i = n(19),
        o = n(1)("iterator"),
        r = n(12);
    t.exports = n(3).getIteratorMethod = function(t) {
        return void 0 != t ? t[o] || t["@@iterator"] || r[i(t)] : void 0
    }
}, function(t, e, n) {
    "use strict";
    var i = n(5),
        o = n(18)(2);
    i(i.P + i.F * !n(41)([].filter, !0), "Array", {
        filter: function(t) {
            return o(this, t, arguments[1])
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(5),
        o = n(18)(6),
        r = "findIndex",
        s = !0;
    r in [] && Array(1)[r](function() {
        s = !1
    }), i(i.P + i.F * s, "Array", {
        findIndex: function(t) {
            return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), n(32)(r)
}, function(t, e, n) {
    "use strict";
    var i = n(32),
        o = n(66),
        r = n(12),
        s = n(16);
    t.exports = n(36)(Array, "Array", function(t, e) {
        this._t = s(t), this._i = 0, this._k = e
    }, function() {
        var t = this._t,
            e = this._k,
            n = this._i++;
        return !t || n >= t.length ? (this._t = void 0, o(1)) : "keys" == e ? o(0, n) : "values" == e ? o(0, t[n]) : o(0, [n, t[n]])
    }, "values"), r.Arguments = r.Array, i("keys"), i("values"), i("entries")
}, function(t, e, n) {
    "use strict";
    var i = n(5),
        o = n(18)(1);
    i(i.P + i.F * !n(41)([].map, !0), "Array", {
        map: function(t) {
            return o(this, t, arguments[1])
        }
    })
}, function(t, e, n) {
    var i = n(5);
    i(i.S, "Date", {
        now: function() {
            return (new Date).getTime()
        }
    })
}, function(t, e, n) {
    var i = n(5);
    i(i.S + i.F, "Object", {
        assign: n(68)
    })
}, function(t, e, n) {
    "use strict";
    var i = n(19),
        o = {};
    o[n(1)("toStringTag")] = "z", o + "" != "[object z]" && n(13)(Object.prototype, "toString", function() {
        return "[object " + i(this) + "]"
    }, !0)
}, function(t, e, n) {
    "use strict";
    var i, o, r, s = n(37),
        a = n(2),
        c = n(6),
        u = n(19),
        h = n(5),
        l = n(10),
        d = (n(4), n(17)),
        A = n(56),
        f = n(59),
        p = (n(76).set, n(78)),
        g = n(42).set,
        v = n(67),
        m = "Promise",
        y = a.TypeError,
        b = a.process,
        w = a[m],
        b = a.process,
        x = "process" == u(b),
        E = function() {},
        C = !! function() {
            try {
                var t = w.resolve(1),
                    e = (t.constructor = {})[n(1)("species")] = function(t) {
                        t(E, E)
                    };
                return (x || "function" == typeof PromiseRejectionEvent) && t.then(E) instanceof e
            } catch (i) {}
        }(),
        D = function(t, e) {
            return t === e || t === w && e === r
        },
        M = function(t) {
            var e;
            return l(t) && "function" == typeof(e = t.then) ? e : !1
        },
        S = function(t) {
            return D(w, t) ? new R(t) : new o(t)
        },
        R = o = function(t) {
            var e, n;
            this.promise = new t(function(t, i) {
                if (void 0 !== e || void 0 !== n) throw y("Bad Promise constructor");
                e = t, n = i
            }), this.resolve = d(e), this.reject = d(n)
        },
        O = function(t) {
            try {
                t()
            } catch (e) {
                return {
                    error: e
                }
            }
        },
        k = function(t, e) {
            if (!t._n) {
                t._n = !0;
                var n = t._c;
                v(function() {
                    for (var i = t._v, o = 1 == t._s, r = 0, s = function(e) {
                            var n, r, s = o ? e.ok : e.fail,
                                a = e.resolve,
                                c = e.reject,
                                u = e.domain;
                            try {
                                s ? (o || (2 == t._h && L(t), t._h = 1), s === !0 ? n = i : (u && u.enter(), n = s(i), u && u.exit()), n === e.promise ? c(y("Promise-chain cycle")) : (r = M(n)) ? r.call(n, a, c) : a(n)) : c(i)
                            } catch (h) {
                                c(h)
                            }
                        }; n.length > r;) s(n[r++]);
                    t._c = [], t._n = !1, e && !t._h && N(t)
                })
            }
        },
        N = function(t) {
            g.call(a, function() {
                var e, n, i, o = t._v;
                if (T(t) && (e = O(function() {
                        x ? b.emit("unhandledRejection", o, t) : (n = a.onunhandledrejection) ? n({
                            promise: t,
                            reason: o
                        }) : (i = a.console) && i.error && i.error("Unhandled promise rejection", o)
                    }), t._h = x || T(t) ? 2 : 1), t._a = void 0, e) throw e.error
            })
        },
        T = function(t) {
            if (1 == t._h) return !1;
            for (var e, n = t._a || t._c, i = 0; n.length > i;)
                if (e = n[i++], e.fail || !T(e.promise)) return !1;
            return !0
        },
        L = function(t) {
            g.call(a, function() {
                var e;
                x ? b.emit("rejectionHandled", t) : (e = a.onrejectionhandled) && e({
                    promise: t,
                    reason: t._v
                })
            })
        },
        I = function(t) {
            var e = this;
            e._d || (e._d = !0, e = e._w || e, e._v = t, e._s = 2, e._a || (e._a = e._c.slice()), k(e, !0))
        },
        U = function(t) {
            var e, n = this;
            if (!n._d) {
                n._d = !0, n = n._w || n;
                try {
                    if (n === t) throw y("Promise can't be resolved itself");
                    (e = M(t)) ? v(function() {
                        var i = {
                            _w: n,
                            _d: !1
                        };
                        try {
                            e.call(t, c(U, i, 1), c(I, i, 1))
                        } catch (o) {
                            I.call(i, o)
                        }
                    }): (n._v = t, n._s = 1, k(n, !1))
                } catch (i) {
                    I.call({
                        _w: n,
                        _d: !1
                    }, i)
                }
            }
        };
    C || (w = function(t) {
        A(this, w, m, "_h"), d(t), i.call(this);
        try {
            t(c(U, this, 1), c(I, this, 1))
        } catch (e) {
            I.call(this, e)
        }
    }, i = function(t) {
        this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
    }, i.prototype = n(75)(w.prototype, {
        then: function(t, e) {
            var n = S(p(this, w));
            return n.ok = "function" == typeof t ? t : !0, n.fail = "function" == typeof e && e, n.domain = x ? b.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && k(this, !1), n.promise
        },
        "catch": function(t) {
            return this.then(void 0, t)
        }
    }), R = function() {
        var t = new i;
        this.promise = t, this.resolve = c(U, t, 1), this.reject = c(I, t, 1)
    }), h(h.G + h.W + h.F * !C, {
        Promise: w
    }), n(24)(w, m), n(77)(m), r = n(3)[m], h(h.S + h.F * !C, m, {
        reject: function(t) {
            var e = S(this),
                n = e.reject;
            return n(t), e.promise
        }
    }), h(h.S + h.F * (s || !C), m, {
        resolve: function(t) {
            if (t instanceof w && D(t.constructor, this)) return t;
            var e = S(this),
                n = e.resolve;
            return n(t), e.promise
        }
    }), h(h.S + h.F * !(C && n(65)(function(t) {
        w.all(t)["catch"](E)
    })), m, {
        all: function(t) {
            var e = this,
                n = S(e),
                i = n.resolve,
                o = n.reject,
                r = O(function() {
                    var n = [],
                        r = 0,
                        s = 1;
                    f(t, !1, function(t) {
                        var a = r++,
                            c = !1;
                        n.push(void 0), s++, e.resolve(t).then(function(t) {
                            c || (c = !0, n[a] = t, --s || i(n))
                        }, o)
                    }), --s || i(n)
                });
            return r && o(r.error), n.promise
        },
        race: function(t) {
            var e = this,
                n = S(e),
                i = n.reject,
                o = O(function() {
                    f(t, !1, function(t) {
                        e.resolve(t).then(n.resolve, i)
                    })
                });
            return o && i(o.error), n.promise
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(79)(!0);
    n(36)(String, "String", function(t) {
        this._t = String(t), this._i = 0
    }, function() {
        var t, e = this._t,
            n = this._i;
        return n >= e.length ? {
            value: void 0,
            done: !0
        } : (t = i(e, n), this._i += t.length, {
            value: t,
            done: !1
        })
    })
}, function(t, e, n) {
    for (var i = n(84), o = n(13), r = n(2), s = n(9), a = n(12), c = n(1), u = c("iterator"), h = c("toStringTag"), l = a.Array, d = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], A = 0; 5 > A; A++) {
        var f, p = d[A],
            g = r[p],
            v = g && g.prototype;
        if (v) {
            v[u] || s(v, u, l), v[h] || s(v, h, p), a[p] = l;
            for (f in i) v[f] || o(v, f, i[f], !0)
        }
    }
}, function(t, e, n) {
    e = t.exports = n(93)(), e.push([t.id, "#comic{position:relative;display:inline-block;outline:2px solid #000;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}#comic .frame{background:#fff;-webkit-transition:background-color .5s ease;transition:background-color .5s ease}#comic .frame:focus{outline:none}#comic .frame .content{opacity:1;-webkit-transition:opacity .5s ease;transition:opacity .5s ease}#comic .frame.loading{background:#fff}#comic .frame.loading .content{opacity:0}#comic .spinner{position:absolute;left:50%;top:45%;width:50px;height:52px;margin-left:-30px;margin-top:-26px;background-image:url(" + n(107) + ");background-size:contain;-webkit-animation-name:rotate;animation-name:rotate;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-duration:2s;animation-duration:2s;-webkit-transform-origin:56% 50%;transform-origin:56% 50%}@-webkit-keyframes rotate{0%{-webkit-transform:rotateY(0);transform:rotateY(0)}50%{-webkit-transform:rotateY(1turn);transform:rotateY(1turn)}to{-webkit-transform:rotateY(0);transform:rotateY(0)}}@keyframes rotate{0%{-webkit-transform:rotateY(0);transform:rotateY(0)}50%{-webkit-transform:rotateY(1turn);transform:rotateY(1turn)}to{-webkit-transform:rotateY(0);transform:rotateY(0)}}#comic .spinner-text{font-size:0;position:absolute;left:50%;top:53%;width:91px;height:17px;margin-left:-45.5px;background-image:url(" + n(106) + ");background-repeat:no-repeat}#comic .light{position:absolute;z-index:200}#comic .light .handle{position:absolute;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}#comic .light .handle.position{width:40px;height:44px;background-image:url(" + n(105) + ");background-size:contain}#comic .light .handle.rotate{width:0;height:0;background:transparent;border-left:10px solid transparent;border-right:10px solid transparent;border-top:10px solid red}#comic .light .handle.color{width:8px;height:8px;background:#000;border:2px solid #000;border-radius:100%}#comic .light.selected:before{content:'';display:block;position:absolute;left:-40px;right:-40px;top:-40px;bottom:-40px;border:2px solid red;border-radius:100%;opacity:.75}#comic .tools{position:absolute;right:0;z-index:100}#comic .tools button{display:block;width:40px;height:40px;padding:0;margin:10px;box-sizing:content-box;font-size:0;color:transparent;background:#ddd;background-size:contain;border:1px solid #333;border-radius:3px;-webkit-transition:opacity .15s ease;transition:opacity .15s ease;opacity:.75}#comic .tools button:hover{opacity:1}#comic .tools button:disabled{opacity:.25}#comic .tools button.add-light{background-image:url(" + n(104) + ")}#comic .tools button.remove{background-color:#d22;background-image:url(" + n(108) + ")}#comic .tools button.remove:disabled{background-color:#777}#comic #data{width:100%;height:10em}", ""])
}, function(t, e) {
    t.exports = function() {
        var t = [];
        return t.toString = function() {
            for (var t = [], e = 0; e < this.length; e++) {
                var n = this[e];
                n[2] ? t.push("@media " + n[2] + "{" + n[1] + "}") : t.push(n[1])
            }
            return t.join("")
        }, t.i = function(e, n) {
            "string" == typeof e && (e = [
                [null, e, ""]
            ]);
            for (var i = {}, o = 0; o < this.length; o++) {
                var r = this[o][0];
                "number" == typeof r && (i[r] = !0)
            }
            for (o = 0; o < e.length; o++) {
                var s = e[o];
                "number" == typeof s[0] && i[s[0]] || (n && !s[2] ? s[2] = n : n && (s[2] = "(" + s[2] + ") and (" + n + ")"), t.push(s))
            }
        }, t
    }
}, function(t, e, n) {
    function i() {
        function t(t, e) {
            var n, i = t._co;
            if (e && e._co && e._co.instance) {
                if (n = e._co.instance, n.shouldComponentUpdate && n.shouldComponentUpdate(i.props, n.state) === !1) return !1
            } else n = new u[i.component], n.getInitialState && (n.state = n.getInitialState());
            i.instance = n, n._node = e || t, n.props = i.props, e && (e._co = i);
            var o = n.render();
            t.appendChild(o)
        }
        function e(i, o) {
            if (o._co && o._co.component) return t(o, i) !== !1 && s(i, o, {
                onBeforeMorphEl: e,
                onBeforeNodeDiscarded: n,
                childrenOnly: !0
            }), !1;
            if (o._co && o._co.events) {
                var r, a = o._co.events;
                for (r in a) a.hasOwnProperty(r) && (i[r] = a[r]);
                if (i._co && i._co.events) {
                    var c = i._co.events;
                    for (r in c) a.hasOwnProperty(r) || (i[r] = void 0)
                }
                i._co = i._co || {}, i._co.events = a
            }
        }
        function n(t) {
            i(t, function(t) {
                t._co && t._co.instance && t._co.instance.componentWillUnmount && t._co.instance.componentWillUnmount()
            })
        }
        function i(t, e) {
            e(t);
            for (var n = 0; n < t.childNodes.length; n++) i(t.childNodes[n], e)
        }
        function a(o, r, a) {
            s(o, r, {
                onBeforeMorphEl: e,
                onBeforeNodeDiscarded: n,
                childrenOnly: a
            }), i(o, function(e) {
                var n = e._co;
                n && n.component && !n.instance && (t(e), n.instance.componentDidMount && n.instance.componentDidMount())
            })
        }
        var c = o(function(t, e, n) {
                var i, o, s;
                if (u.hasOwnProperty(t)) {
                    i = r.createElement("co-" + t.toLowerCase(), {}, []);
                    for (o in e) {
                        s = e[o];
                        var a;
                        "string" == typeof s && ("true" === s ? e[o] = !0 : "false" === s ? e[o] = !1 : "" !== s && (a = Number(s), isNaN(a) || (e[o] = a)))
                    }
                    i._co = {
                        component: t,
                        props: e
                    }, n && n.length && (i._co.props.children = n)
                } else {
                    var c = {},
                        h = {};
                    for (o in e) s = e[o], "on" === o.slice(0, 2) && (o = o.toLowerCase(), h[o] = s), c[o] = s;
                    i = r.createElement(t, c, n), i._co = {
                        events: h
                    }
                }
                return i
            }),
            u = c._components = {},
            h = {};
        return h.setState = function(t) {
            var e, n = {};
            for (e in this.state) this.state.hasOwnProperty(e) && (n[e] = this.state[e]);
            for (e in t) t.hasOwnProperty(e) && (n[e] = t[e]);
            var i = this.shouldComponentUpdate && this.shouldComponentUpdate(this.props, n) !== !1;
            this.state = n, i !== !1 && a(this._node.firstChild, this.render())
        }, h.getDOMNode = function() {
            return this._node
        }, c.component = function(t, e) {
            e.setState = h.setState, e.getDOMNode = h.getDOMNode;
            var n = function() {};
            n.prototype = e, u[t] = n
        }, c.render = function(t, e) {
            var n = r.createElement("div", {}, [t]);
            a(e, n, !0)
        }, c
    }
    var o = n(44),
        r = n(95),
        s = n(98);
    t.exports = i(), t.exports.scope = i
}, function(t, e, n) {
    function i(t, e, n) {
        function i(t) {
            if (Array.isArray(t))
                for (var e = 0; e < t.length; e++) {
                    var n = t[e];
                    if (Array.isArray(n)) i(n);
                    else {
                        if (("number" == typeof n || "boolean" == typeof n || n instanceof Date || n instanceof RegExp) && (n = n.toString()), "string" == typeof n) {
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
        var r; - 1 !== c.indexOf(t) && (e.namespace = s);
        var u = !1;
        e.namespace && (u = e.namespace, delete e.namespace), r = u ? o.createElementNS(u, t) : o.createElement(t);
        for (var h in e)
            if (e.hasOwnProperty(h)) {
                var l = h.toLowerCase(),
                    d = e[h];
                if ("classname" === l && (l = "class", h = "class"), a[l])
                    if ("true" === d) d = l;
                    else if ("false" === d) continue;
                "on" === l.slice(0, 2) ? r[h] = d : u ? r.setAttributeNS(null, h, d) : r.setAttribute(h, d)
            }
        return i(n), r
    }
    var o = n(96),
        r = n(44),
        s = "http://www.w3.org/2000/svg",
        a = {
            autofocus: 1,
            checked: 1,
            defaultchecked: 1,
            disabled: 1,
            formnovalidate: 1,
            indeterminate: 1,
            readonly: 1,
            required: 1,
            willvalidate: 1
        },
        c = ["svg", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignObject", "glyph", "glyphRef", "hkern", "image", "line", "linearGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "set", "stop", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"];
    t.exports = r(i), t.exports.createElement = i
}, function(t, e, n) {
    (function(e) {
        var i = "undefined" != typeof e ? e : "undefined" != typeof window ? window : {},
            o = n(110);
        if ("undefined" != typeof document) t.exports = document;
        else {
            var r = i["__GLOBAL_DOCUMENT_CACHE@4"];
            r || (r = i["__GLOBAL_DOCUMENT_CACHE@4"] = o), t.exports = r
        }
    }).call(e, function() {
        return this
    }())
}, function(t, e) {
    function n(t) {
        return function(e, n, o) {
            for (var r in n) r in i && (n[i[r]] = n[r], delete n[r]);
            return t(e, n, o)
        }
    }
    t.exports = n;
    var i = {
        "class": "className",
        "for": "htmlFor",
        "http-equiv": "httpEquiv"
    }
}, function(t, e) {
    function n(t) {
        for (var e in t)
            if (t.hasOwnProperty(e)) return !1;
        return !0
    }
    function i(t) {
        !u && document.createRange && (u = document.createRange(), u.selectNode(document.body));
        var e;
        return u && u.createContextualFragment ? e = u.createContextualFragment(t) : (e = document.createElement("body"), e.innerHTML = t), e.childNodes[0]
    }
    function o() {}
    function r(t, e) {
        var n, i, o, r, s = e.attributes,
            a = {};
        for (n = s.length - 1; n >= 0; n--) i = s[n], i.specified !== !1 && (o = i.name, r = i.value, a[o] = !0, t.getAttribute(o) !== r && t.setAttribute(o, r));
        for (s = t.attributes, n = s.length - 1; n >= 0; n--) i = s[n], i.specified !== !1 && (o = i.name, a.hasOwnProperty(o) || t.removeAttribute(o))
    }
    function s(t, e) {
        for (var n = t.firstChild; n;) {
            var i = n.nextSibling;
            e.appendChild(n), n = i
        }
        return e
    }
    function a(t) {
        return t.id
    }
    function c(t, e, c) {
        function u(t, e) {
            var n = g(t);
            if (n ? f[n] = t : e || v(t), 1 === t.nodeType)
                for (var i = t.firstChild; i;) u(i, e || n), i = i.nextSibling
        }
        function h(t) {
            if (1 === t.nodeType)
                for (var e = t.firstChild; e;) g(e) || (v(e), h(e)), e = e.nextSibling
        }
        function l(t, e, n) {
            b(t) !== !1 && (e.removeChild(t), n ? g(t) || (v(t), h(t)) : u(t))
        }
        function A(t, e, n, i) {
            var o = g(e);
            if (o && delete f[o], !i) {
                if (m(t, e) === !1) return;
                if (r(t, e), y(t, e) === !1) return
            }
            if ("TEXTAREA" != t.tagName) {
                var s, a, c, u, h, v = e.firstChild,
                    b = t.firstChild;
                t: for (; v;) {
                    for (c = v.nextSibling, s = g(v); b;) {
                        var w = g(b);
                        if (a = b.nextSibling, !n && w && (h = p[w])) h.parentNode.replaceChild(b, h), A(b, h, n), b = a;
                        else {
                            var E = b.nodeType;
                            if (E === v.nodeType) {
                                var C = !1;
                                if (1 === E ? (b.tagName === v.tagName && (w || s ? s === w && (C = !0) : C = !0), C && A(b, v, n)) : 3 === E && (C = !0, b.nodeValue = v.nodeValue), C) {
                                    v = c, b = a;
                                    continue t
                                }
                            }
                            l(b, t, n), b = a
                        }
                    }
                    s && ((u = f[s]) ? (A(u, v, !0), v = u) : p[s] = v), t.appendChild(v), 1 === v.nodeType && (s || v.firstChild) && x.push(v), v = c, b = a
                }
                for (; b;) a = b.nextSibling, l(b, t, n), b = a
            }
            var D = d[t.tagName];
            D && D(t, e)
        }
        c || (c = {}), "string" == typeof e && (e = i(e));
        var f = {},
            p = {},
            g = c.getNodeKey || a,
            v = c.onNodeDiscarded || o,
            m = c.onBeforeMorphEl || o,
            y = c.onBeforeMorphElChildren || o,
            b = c.onBeforeNodeDiscarded || o,
            w = c.childrenOnly === !0,
            x = [],
            E = t,
            C = E.nodeType,
            D = e.nodeType;
        if (!w)
            if (1 === C) 1 === D ? t.tagName !== e.tagName && (v(t), E = s(t, document.createElement(e.tagName))) : E = e;
            else if (3 === C) {
            if (3 === D) return E.nodeValue = e.nodeValue, E;
            E = e
        }
        if (E === e) v(t);
        else {
            A(E, e, !1, w);
            var M = function(t) {
                for (var e = t.firstChild; e;) {
                    var i = e.nextSibling,
                        o = g(e);
                    if (o) {
                        var r = f[o];
                        if (r && e.tagName === r.tagName) {
                            if (e.parentNode.replaceChild(r, e), A(r, e, !0), e = i, n(f)) return !1;
                            continue
                        }
                    }
                    1 === e.nodeType && M(e), e = i
                }
            };
            if (!n(f)) t: for (; x.length;) {
                var S = x;
                x = [];
                for (var R = 0; R < S.length; R++)
                    if (M(S[R]) === !1) break t
            }
            for (var O in f)
                if (f.hasOwnProperty(O)) {
                    var k = f[O];
                    v(k), h(k)
                }
        }
        return !w && E !== t && t.parentNode && t.parentNode.replaceChild(E, t), E
    }
    var u, h, l = "undefined" != typeof document ? document.body || document.createElement("div") : {};
    h = l.hasAttribute ? function(t, e) {
        return t.hasAttribute(e)
    } : function(t, e) {
        return t.getAttributeNode(e)
    };
    var d = {
        OPTION: function(t, e) {
            (t.selected = e.selected) ? t.setAttribute("selected", ""): t.removeAttribute("selected", "")
        },
        INPUT: function(t, e) {
            t.checked = e.checked, t.value != e.value && (t.value = e.value), h(e, "checked") || t.removeAttribute("checked"), h(e, "value") || t.removeAttribute("value")
        },
        TEXTAREA: function(t, e) {
            var n = e.value;
            t.value != n && (t.value = n), t.firstChild && (t.firstChild.nodeValue = n)
        }
    };
    t.exports = c
}, function(t, e) {
    /** @license
     * eventsource.js
     * Available under MIT License (MIT)
     * https://github.com/Yaffle/EventSource/
     */
    ! function(t) {
        "use strict";
        function e() {
            this.data = {}
        }
        function n() {
            this.listeners = new e
        }
        function i(t) {
            h(function() {
                throw t
            }, 0)
        }
        function o(t) {
            this.type = t, this.target = void 0
        }
        function r(t, e) {
            o.call(this, t), this.data = e.data, this.lastEventId = e.lastEventId
        }
        function s(t, e) {
            var n = t;
            return n !== n && (n = e), M > n ? M : n > S ? S : n
        }
        function a(t, e, n) {
            try {
                "function" == typeof e && e.call(t, n)
            } catch (o) {
                i(o)
            }
        }
        function c(e, i) {
            function c() {
                G = y, void 0 != _ && (_.abort(), _ = void 0), 0 !== F && (l(F), F = 0), 0 !== j && (l(j), j = 0), L.readyState = y
            }
            function u(t) {
                var n = "";
                if (G === m || G === v) try {
                    n = _.responseText
                } catch (i) {}
                var u = void 0,
                    d = !1;
                if (G === v) {
                    var A = 0,
                        f = "",
                        p = void 0;
                    if ("contentType" in _) "" !== t && "error" !== t && (A = 200, f = "OK", p = _.contentType);
                    else try {
                        A = _.status, f = _.statusText, p = _.getResponseHeader("Content-Type")
                    } catch (i) {
                        A = 0, f = "", p = void 0
                    }
                    if (void 0 == p && (p = ""), 0 === A && "" === f && "load" === t && "" !== n && (A = 200, f = "OK", "" === p)) {
                        var M = /^data\:([^,]*?)(?:;base64)?,[\S]*$/.exec(e);
                        void 0 != M && (p = M[1])
                    }
                    if (200 === A && D.test(p)) {
                        if (G = m, U = !0, I = k, L.readyState = m, u = new o("open"), L.dispatchEvent(u), a(L, L.onopen, u), G === y) return
                    } else if (0 !== A && (200 !== A || "" !== p)) {
                        var R = "";
                        R = 200 !== A ? "EventSource's response has a status " + A + " " + f.replace(/\s+/g, " ") + " that is not 200. Aborting the connection." : "EventSource's response has a Content-Type specifying an unsupported type: " + p.replace(/\s+/g, " ") + ". Aborting the connection.", h(function() {
                            throw new Error(R)
                        }, 0), d = !0
                    }
                }
                if (G === m) {
                    n.length > P && (U = !0);
                    for (var O = P - 1, B = n.length, j = "\n"; ++O < B;)
                        if (j = n.charAt(O), K === b && "\n" === j) K = w;
                        else if (K === b && (K = w), "\r" === j || "\n" === j) {
                        if ("data" === z ? Q.push(q) : "id" === z ? Y = q : "event" === z ? H = q : "retry" === z ? (k = s(Number(q), k), I = k) : "heartbeatTimeout" === z && (N = s(Number(q), N), 0 !== F && (l(F), F = h(J, N))), q = "", z = "", K === w) {
                            if (0 !== Q.length && (T = Y, "" === H && (H = "message"), u = new r(H, {
                                    data: Q.join("\n"),
                                    lastEventId: Y
                                }), L.dispatchEvent(u), "message" === H && a(L, L.onmessage, u), G === y)) return;
                            Q.length = 0, H = ""
                        }
                        K = "\r" === j ? b : w
                    } else K === w && (K = x), K === x ? ":" === j ? K = E : z += j : K === E ? (" " !== j && (q += j), K = C) : K === C && (q += j);
                    P = B
                }
                G !== m && G !== v || !("load" === t || "error" === t || d || P > 1048576 || 0 === F && !U) ? 0 === F && (U = !1, F = h(J, N)) : (d ? c() : ("" !== t || 0 !== F || U || h(function() {
                    throw new Error("No activity within " + N + " milliseconds. Reconnecting.")
                }, 0), G = g, _.abort(), 0 !== F && (l(F), F = 0), I > 16 * k && (I = 16 * k), I > S && (I = S), F = h(J, I), I = 2 * I + 1, L.readyState = v), u = new o("error"), L.dispatchEvent(u), a(L, L.onerror, u))
            }
            function d() {
                u("progress")
            }
            function A() {
                u("load")
            }
            function M() {
                u("error")
            }
            function R() {
                u(4 === _.readyState ? 0 === _.status ? "error" : "load" : "progress")
            }
            e = e.toString();
            var O = f && void 0 != i && Boolean(i.withCredentials),
                k = s(1e3, 0),
                N = s(45e3, 0),
                T = "",
                L = this,
                I = k,
                U = !1,
                B = void 0 != i && void 0 != i.Transport ? i.Transport : p,
                _ = new B,
                F = 0,
                j = 0,
                P = 0,
                G = g,
                Q = [],
                Y = "",
                H = "",
                J = void 0,
                K = w,
                z = "",
                q = "";
            "readyState" in _ && void 0 != t.opera && (j = h(function Z() {
                3 === _.readyState && u("progress"), j = h(Z, 500)
            }, 0)), J = function() {
                if (F = 0, G !== g) return void u("");
                if ((!("ontimeout" in _) || "sendAsBinary" in _ || "mozAnon" in _) && void 0 != t.document && void 0 != t.document.readyState && "complete" !== t.document.readyState) return void(F = h(J, 4));
                _.onload = A, _.onerror = M, "onabort" in _ && (_.onabort = M), "onprogress" in _ && (_.onprogress = d), "onreadystatechange" in _ && (_.onreadystatechange = R), U = !1, F = h(J, N), P = 0, G = v, Q.length = 0, H = "", Y = T, q = "", z = "", K = w;
                var n = e.slice(0, 5);
                n = "data:" !== n && "blob:" !== n ? e + ((-1 === e.indexOf("?", 0) ? "?" : "&") + "lastEventId=" + encodeURIComponent(T) + "&r=" + (Math.random() + 1).toString().slice(2)) : e, _.open("GET", n, !0), "withCredentials" in _ && (_.withCredentials = O), "responseType" in _ && (_.responseType = "text"), "setRequestHeader" in _ && _.setRequestHeader("Accept", "text/event-stream"), _.send(void 0)
            }, n.call(this), this.close = c, this.url = e, this.readyState = v, this.withCredentials = O, this.onopen = void 0, this.onmessage = void 0, this.onerror = void 0, J()
        }
        function u() {
            this.CONNECTING = v, this.OPEN = m, this.CLOSED = y
        }
        var h = t.setTimeout,
            l = t.clearTimeout;
        e.prototype.get = function(t) {
            return this.data[t + "~"]
        }, e.prototype.set = function(t, e) {
            this.data[t + "~"] = e
        }, e.prototype["delete"] = function(t) {
            delete this.data[t + "~"]
        }, n.prototype.dispatchEvent = function(t) {
            t.target = this;
            var e = t.type.toString(),
                n = this.listeners,
                o = n.get(e);
            if (void 0 != o)
                for (var r = o.length, s = -1, a = void 0; ++s < r;) {
                    a = o[s];
                    try {
                        a.call(this, t)
                    } catch (c) {
                        i(c)
                    }
                }
        }, n.prototype.addEventListener = function(t, e) {
            t = t.toString();
            var n = this.listeners,
                i = n.get(t);
            void 0 == i && (i = [], n.set(t, i));
            for (var o = i.length; --o >= 0;)
                if (i[o] === e) return;
            i.push(e)
        }, n.prototype.removeEventListener = function(t, e) {
            t = t.toString();
            var n = this.listeners,
                i = n.get(t);
            if (void 0 != i) {
                for (var o = i.length, r = [], s = -1; ++s < o;) i[s] !== e && r.push(i[s]);
                0 === r.length ? n["delete"](t) : n.set(t, r)
            }
        }, r.prototype = o.prototype;
        var d = t.XMLHttpRequest,
            A = t.XDomainRequest,
            f = void 0 != d && void 0 != (new d).withCredentials,
            p = f || void 0 != d && void 0 == A ? d : A,
            g = -1,
            v = 0,
            m = 1,
            y = 2,
            b = 3,
            w = 4,
            x = 5,
            E = 6,
            C = 7,
            D = /^text\/event\-stream;?(\s*charset\=utf\-8)?$/i,
            M = 1e3,
            S = 18e6;
        u.prototype = n.prototype, c.prototype = new u, u.call(c), f && (c.prototype.withCredentials = void 0);
        var R = function() {
            return void 0 != t.EventSource && "withCredentials" in t.EventSource.prototype
        };
        void 0 != p && (void 0 == t.EventSource || f && !R()) && (t.NativeEventSource = t.EventSource, t.EventSource = c)
    }("undefined" != typeof window ? window : this)
}, function(t, e, n) {
    function i(t) {
        if (!t) return "";
        var e = Object.keys(t),
            n = e.map(function(e) {
                var n = o(e),
                    i = n.concat(":").concat(t[e]);
                return i
            });
        return n.join(";")
    }
    /*!
     * Dependencies
     */
    var o = n(101);
    /*!
     * Exports
     */
    t.exports = i
}, function(t, e) {
    /*!
     * dashify <https://github.com/jonschlinkert/dashify>
     *
     * Copyright (c) 2015 Jon Schlinkert.
     * Licensed under the MIT license.
     */
    "use strict";
    t.exports = function(t) {
        if ("string" != typeof t) throw new TypeError("dashify expects a string.");
        return t = t.replace(/[A-Z]/g, "-$&"), t = t.replace(/[ \t]/g, "-"), t.toLowerCase()
    }
}, function(t, e, n) {
    function i(t, e) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n],
                o = A[i.id];
            if (o) {
                o.refs++;
                for (var r = 0; r < o.parts.length; r++) o.parts[r](i.parts[r]);
                for (; r < i.parts.length; r++) o.parts.push(u(i.parts[r], e))
            } else {
                for (var s = [], r = 0; r < i.parts.length; r++) s.push(u(i.parts[r], e));
                A[i.id] = {
                    id: i.id,
                    refs: 1,
                    parts: s
                }
            }
        }
    }
    function o(t) {
        for (var e = [], n = {}, i = 0; i < t.length; i++) {
            var o = t[i],
                r = o[0],
                s = o[1],
                a = o[2],
                c = o[3],
                u = {
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
        var n = g(),
            i = y[y.length - 1];
        if ("top" === t.insertAt) i ? i.nextSibling ? n.insertBefore(e, i.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), y.push(e);
        else {
            if ("bottom" !== t.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
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
        return e.type = "text/css", r(t, e), e
    }
    function c(t) {
        var e = document.createElement("link");
        return e.rel = "stylesheet", r(t, e), e
    }
    function u(t, e) {
        var n, i, o;
        if (e.singleton) {
            var r = m++;
            n = v || (v = a(e)), i = h.bind(null, n, r, !1), o = h.bind(null, n, r, !0)
        } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = c(e), i = d.bind(null, n), o = function() {
            s(n), n.href && URL.revokeObjectURL(n.href)
        }) : (n = a(e), i = l.bind(null, n), o = function() {
            s(n)
        });
        return i(t),
            function(e) {
                if (e) {
                    if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                    i(t = e)
                } else o()
            }
    }
    function h(t, e, n, i) {
        var o = n ? "" : i.css;
        if (t.styleSheet) t.styleSheet.cssText = b(e, o);
        else {
            var r = document.createTextNode(o),
                s = t.childNodes;
            s[e] && t.removeChild(s[e]), s.length ? t.insertBefore(r, s[e]) : t.appendChild(r)
        }
    }
    function l(t, e) {
        var n = e.css,
            i = e.media;
        if (i && t.setAttribute("media", i), t.styleSheet) t.styleSheet.cssText = n;
        else {
            for (; t.firstChild;) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(n))
        }
    }
    function d(t, e) {
        var n = e.css,
            i = e.sourceMap;
        i && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
        var o = new Blob([n], {
                type: "text/css"
            }),
            r = t.href;
        t.href = URL.createObjectURL(o), r && URL.revokeObjectURL(r)
    }
    var A = {},
        f = function(t) {
            var e;
            return function() {
                return "undefined" == typeof e && (e = t.apply(this, arguments)), e
            }
        },
        p = f(function() {
            return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
        }),
        g = f(function() {
            return document.head || document.getElementsByTagName("head")[0]
        }),
        v = null,
        m = 0,
        y = [];
    t.exports = function(t, e) {
        e = e || {}, "undefined" == typeof e.singleton && (e.singleton = p()), "undefined" == typeof e.insertAt && (e.insertAt = "bottom");
        var n = o(t);
        return i(n, e),
            function(t) {
                for (var r = [], s = 0; s < n.length; s++) {
                    var a = n[s],
                        c = A[a.id];
                    c.refs--, r.push(c)
                }
                if (t) {
                    var u = o(t);
                    i(u, e)
                }
                for (var s = 0; s < r.length; s++) {
                    var c = r[s];
                    if (0 === c.refs) {
                        for (var h = 0; h < c.parts.length; h++) c.parts[h]();
                        delete A[c.id]
                    }
                }
            }
    };
    var b = function() {
        var t = [];
        return function(e, n) {
            return t[e] = n, t.filter(Boolean).join("\n")
        }
    }()
}, function(t, e, n) {
    var i = n(92);
    "string" == typeof i && (i = [
        [t.id, i, ""]
    ]);
    n(102)(i, {});
    i.locals && (t.exports = i.locals)
}, function(t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAYUExURUxpcQAAABYWFgAAAAAAAPv7+39/f8fHx/ktK9QAAAAEdFJOUwCK20hF+i26AAABpklEQVRYw+2Xya7DIAxF4wH4/z9+GNI2ScNg4yd1kSt10SyOjhnNtlmCzAEZQ+RTkDZbgDlmVgx8DdiA2eVOUGIVTJmVjoJxwZBEUAo+CMZsvCoY0pEXOaUFwXgWxBDqf5tezVEwiWAuWi9I+LHCU8HywwXcKblgzMLohKszkn9gHLxrsBSsFmzplfUtBTO56FVB7Qx3cGXTKWeYkAeJmoLHOCl7WnAKJyFf3JzgPG4KqMFNnINK3AioxvWBBlwXCMyeQBuuCTRV2wFa9RpAsuPuFzZ4AxdGsHm6mpHgvWzAeZ/0LxQLEobtkC9QLwmLN6eptVYhyftOIY+OwfKacAfCsU/1AOYFmRI6AkUx3L2X7C8yaXhDin5AKTqEoSWoms0JoqZ9xZ3YRcJwMdOJGAuxM5SoAQoRK7JpqQPW87EyG6tSCcxfsTJTS1ILzJZg7GChcx4BOgOLqeSLvAC8PyrXgZcx/QbCK3sx+P4whcT5sxmnbh0n4OcVDV7Al6QfcJ9FcgQWSU/DIkn3G6Bsgn2U3x+2xYCqt3iAD/B/gIQlfsAnP5A/fAAqEID2icEAAAAASUVORK5CYII="
}, function(t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAABCCAMAAAA8CkXxAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAALTUExURUxpcQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIuLiwAAADc3NwAAAAAAAAAAAAAAAP///wABAAEBAQQEBBgYGM3NzSsrK0dHRycnJwMDAxYWFsTExDs7OwUFBe3t7RISEiAgIDg4OGRkZB8fH////35+fjc3N01NTSwsLCMjIwkJCVZWVvb29gcHBxsbGxkZGTAwMDw8PFdXV0JCQmJiYtDQ0FRUVNbW1snJydra2khISNXV1UVFRf7+/uXl5evr6yYmJoqKik9PT9zc3Pv7+1NTU+Li4g8PD7CwsExMTK2trYODg4uLi0ZGRqqqqjk5OYaGhujo6N7e3mZmZqGhofr6+sHBwX19fSkpKR4eHvz8/MrKypycnNjY2MXFxWxsbJ6envDw8DY2Ng0NDVJSUmBgYEtLS3d3d11dXXl5eezs7FBQULKysunp6cPDw2hoaOPj4+Hh4d/f30BAQNvb2/Ly8j+FrY4AAACKdFJOUwAyQzxFM9z9/OkD+QVP9v7d3gIZCQE/C/Wl5xQ6BgzqL+Y2nPvg4j3y79bzRkli30Dh5egeJUSStSoi9DsExnLbqa+hrT5cJBOOxSOCs3APHfdUIJaa1PruU1bT2s7Dsc2mc4jQTshoKDUaeVIWalBgbDd7nq5KovDLEDA0hlgImbrslft//Vld2eCmYncAAANBSURBVEjHndf1W1NRGMDxsWCMARsKSHcMRLoFQUERBRUQxO7C7k7Md7JgdD2kQQuoICHYLQZ2d+uf4MaI4XZ3z73fn/d5znPPPefcHQoFM4O1DsDaQCHXGh4A6AWSw+ukFpytSVkzO44Uj1y9ioRdNkFLNjLoBazUIWq1R0NfvNAQgtgaBrJ3NSSGtyhg2GRBDCcqYisDItTSgqWIwyKThyFb25So/Yo4icXdhWrHTwClWKhY10oZe6LO2aTYvDIZSFXAjpaI+CAUfYHca5d7Xc3Nh/fAywcRu/Fav8G5rtNye/LGg47uLJt4RHwk6fsfKM3Jl+OKzKKS7nOOkxHxdFZHJ5R+fSXHjxqKSpry9VFn29Xr90+QtJ8BOCbF4sb375pq3FHxCC/xL5B0tsExGS4+X/um+4ODNiL28Cz8C5Ifn3sGluK3Bfw2LgUZl/FB0tw728WfSgr4eZqo2Mk9lw8tL+/KcX571ccuQMbWR+ECtOQUyHHp46zWZnRsq/n6LFRcOS7H4sys5znoeOJMwamBVZ1bm1d5AJDfs7m+8q4yjUQ8sE2YylhrNNq2cuOAimKXotjkUaCyUUH4VicUMFqBv0J92VjYWQP3M2MCmNnhnb8MUBPe0HPU4YAham0gqG2iWjxGPTZRZxfrqcdaVGwbsgRwWoSNFxjjYXYolg2aB7jNGoqBo/Et2EdhHF1cBAwORqrs9rmAVIyZChyHZoE5Ttn6mCJicPRVwvMBuYT//xJSgUDmg62hDRHMHby7woFQUwd9VNnEMIwdsPGzCVpwGVilCzlEMdO/zy4PA8K52/beYvyBRBvlMz7CmAzeGtezISKAVBGyDbKDSQ7zpK/LMBxItncPRZesBWNdyjbZiSq9QrG8Wez+BygvT0+F7AxxoVCYUVh5pjotLe2i7IYmfcHTvE2t5AL2UXY60V2DaR5UhgbDnOZHp9Op41zg1NWzDfefierrRCJRXePtEycuVQlgzOb1dD9asIYGg2pEoxnRdRmqDqT4GEHG8Ux+f3duXRem2+xGvKPozNBPPXnoyVMprH9RXZadnjo8egqBy9HhmRwmCITZwLRna6bEaVOINSMhkZek52LnxsD8yT+Xiv+cHr9vGgAAAABJRU5ErkJggg=="
}, function(t, e) {
    t.exports = "data:image/gif;base64,R0lGODlhWwARAPfOAPf39wEBAR4eHgICAiIiIpmZmf39/YmJib6+vvb29oKCgkRERLq6uq2trbu7uz4+PgMDA7CwsAYGBvz8/BQUFAsLC/Hx8d3d3Y2NjaqqqoGBgRsbG19fX2hoaLOzs+vr6zQ0NKysrCkpKRcXFw4ODh8fHxwcHMLCwnp6ehMTE7S0tM/Pz4uLi1JSUpOTk/v7+9fX13FxccrKyuPj4woKCrGxsd/f3/X19VpaWu3t7ZWVlWZmZkFBQUBAQHR0dGVlZdnZ2TMzMxYWFjAwMBgYGNXV1d7e3gUFBRAQELKyspubm9PT0/n5+dzc3Ly8vEpKSgcHB1xcXBkZGSUlJUNDQ5aWloCAgMDAwBEREWxsbIiIiM3NzVVVVcjIyEtLS15eXg8PD/r6+qenp6Ghoejo6Gtra+Li4nZ2djIyMmBgYFZWVioqKisrK0ZGRoaGhjs7O/T09Lm5uQ0NDU5OTs7Oznl5eZiYmNLS0n5+fiEhIX19fa+vr8zMzO/v75GRkSMjIygoKGJiYtHR0SwsLLi4uMHBwaurq/Dw8CcnJ9TU1JycnKioqDk5OQgICIqKiubm5gwMDFdXV+Xl5cvLy56eni8vL5qammFhYSAgIFBQUMPDwzc3N8fHx3BwcL29vdDQ0FFRUQkJCYSEhPPz86SkpDY2NmRkZExMTKCgoE1NTerq6p+fn3t7e3Jyctvb2+Tk5EVFRampqYeHh6Ojo1hYWKampsnJyTw8PNbW1kJCQqWlpTo6OsbGxmdnZyYmJj09PX9/f4ODg2lpaeDg4Hd3dzExMezs7Nra2klJSVRUVHV1dTg4OBISEgAAAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDA1QzFEMDNGMjY3MTFFNTkwODJDMzUxMTUyRTJDNjMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDA1QzFEMDRGMjY3MTFFNTkwODJDMzUxMTUyRTJDNjMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0MDVDMUQwMUYyNjcxMUU1OTA4MkMzNTExNTJFMkM2MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0MDVDMUQwMkYyNjcxMUU1OTA4MkMzNTExNTJFMkM2MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAUyAM4ALAAAAABbABEAAAj/AJ0JdLZI08CDCA8hREhmS4KFHx51MeShUA6ENgwsFAgjBRoLCG8Y20iSJJ1mzQCUXCEiwBNVG+tAaEYhzkE8KHOifEBH4IlmeQS+QpgE5UWBQOYcabbBFK+SUJ3pajagpJEUOYfEQqhEZwUZA3GgDCCAQk4aCJw5aibAWZ1mHQ42QDmQjxydVA9EJcmALslTzYigyPnggkAmAppRmWSi2QiQzno1m3NDIABCif8Y0NEMkLNSzQIIGqjCbxESzUqE6IIBRDMITvYu7NuMpJEAzUI487AAJRKwhEJ/cmZLQjMrAok1W4DwZ7Mrs5phcda7WaCBc2sb2MXUsMAJT5rV/5KNkJTfhRqaSdEoMIKQzs5iNBMxsEwzEiD1NAOx8E8zDCFI58wDKEHgnQd01YBSEggB0Ad5CLHQTCMkUdFMGQhlx8cbcA1kA24NOHNAM0Es1JsWGTQDxYA5xSDQFSiRwUEzjEC4VxbNCEFSCc0UgJABFTRjyQjN6HDQEM384IwWzayxEIEaxIESAL3R0IwERTiTCEp3INKMBgfBIQgud7xgo0Bt7LcRACilhRABzaAwQDNuKKDGLWwg0cwUzlTRDAEL+dJMMA6gFMYmzezQGA/OmNFmYj4KxIlxKJGAwZlsNOPFRsegBMNCqHWCl04D3FDAnwjlMKcKhdYGSzNpjP+Bkg4JoLRHY3oJNANur014JpFcbGSDpwitgBIGKNHQQwcK2IFsMwycCuhBKTbzQavORNEMMs700EwoTQRpRwvNDDLBQEuY4YwIip0JSTNfbFRrM24OlEYzYASYEkKNKUAJTQj90kwxzmDrQzNoODOMnj0QQadzPiCEAEoZnInSDiRh0owoB6mAmxVdpbAQKM2kkqIEKrWHkhgFo2SBhNM2MCdKEePYjAID9QFnEGbaaFYkA0kixhkcBOIHUx84A4cCUDSZAE5DLDTYIAg2s0V7d5XoDG0JnErEQF2h5KIzMzajxhIy8PDaCmc6w+EIX4AQpE57GCeFF2CglIcRZDeDE8VCRwvhBEot6JELSgJ4Vy0DI5ZwkCwoufAdF6PmemZReB1RSRs7zODCUigN8EPSzvzQDAsLeYISKqNOkaXKzSwRwQYtIDTGGUwcVEViqUXatjM1XEILK4qckPJAQGjQgQszHDRBE2EsxEQrwoyyCjA4ZIJDDT0L1IQIjJ7pChC/BwQAIfkEBTIAzgAsTAAIAAYACAAACCIADTkbOPAJwYHKDjorpHCCwoEqoAggiKJZMwIDnaRIdiEgACH5BAUyAM4ALFEADAAGAAUAAAgfAJ0JfPFCoLMVFCooOuQsSrNmUww4O9AMkQuDFiQGBAAh+QQFMgDOACxWAA0ABQADAAAIFABhOGMhZdkiZ4yaMUvkDEELRwEBADs="
}, function(t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABoCAMAAAAw/qUdAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAYUExURQAAAExpcQAAAAAAAAAAAAAAAAAAAAAAAO1JYJEAAAAIdFJOU/8A4rxAaZMcjWgm3wAABTlJREFUaN69Wtd2hSAQxK3//8dBAWkLCibhKedGGbbNFnTH5hLHr591mxjs3HuUXRB0CyjrIAyAFEDeorj32gG5RXACLi7RXwOJe+qhrlu/BpI21ChJueA7CDtvgaPYsBfFK+wUkLZBLvWgQt6QOxA56HpqG0SiBFkUZ1gFvoG0JgDqMeJv8Gsg1hKJWvsKAjwBeYrMJ5BbO/ws0L4LD3Y8LIGQaQ+E3NKSvYgfoPDg901aITA3s/2ON0AYAThFZB0c7wWZgyQ2KQ4NuOFh7om36oVetgkGrbsw9QLARR9FzIBfJ7j4fClbcQK1tilJA00ugYsciZl3gvFWDZITqkn3ziX+KYSUkFE3vOvWNSJYIBjkLSylG9yFIqw1HZcgyb+L33QVxDsYaONqUsQNJjcXmcTjBMTz3aUubFyNb6kogxfJDBZAzrdUbvk578FlXCQJlcZR7+bVbgahXpCqEKP8xKIkKOmQolnj2DlX3PlyQFkwvBJHFgzRHrgYKMoonPQfBTj0DHrSlTjhTLQhQOi4A1r9bkc2chBMN1j49sigscYvsyk4Poq4CqIlb4lZuGn2V9hJWj5PnV2CaowzYCEdFhhM+Fh9uwEpwiUQIxJhxTI+RLXUJ74o8d1ID2eRHawjHflfHmCnLfAlAT9LItWhapfMBAasJsjlAPQIcpvUG1GbtF1ujO8zvRsl3TOrYpe44V2J9xakoo4NEHZXi9aA4Nnf6gOIvANJPUCEcY0AfChMQN6KUsema7J5ptsGJIqu2FSQVKQXsHrWEkSGjQjGchgDiQc6Fm4rJTtqBiDdcQCx9k1ln8zkBsHHirJTV3DeghtrHZ/qOktFsUqXkcu4vqVSfTYomoJnkb34kjnZHZ0oDP07Lz23sE/4swtGcZ9XUWaGQqyP+HWU2RtoeFfIFiM9DNxUYA6CLYgSkZooeJbTaM07ZvEPhgtfL8Dw8fJ/7N54BuQ2wtXd4ao7Tf9HV/rOIGAo9A3/TUPpHlA5a7iBj+FoG0+k4sabh11LKu08yDauHKbuuCr4ITmx6/gRasfiAQg/GQhCyVzYRDpOsWyTz2+BGPxIQWGurOiIpu8WJSm/mB5hko0qEOxKNmmyA9Yaf0c7UIF4URr9Vl4AWa1wJuJnmPBIAqFmiJVH2hQHG/H8RfKeK4wxWUVu7+Ko6jYnaekYmKmBD30YFnHNwoJ+16s+CAEEhSdjKIdvm51akqqoASMQMZpAEkh0WjgHr74x8G2JhPwZqpJT9ZDUmHWb7RHsSJXPBAk4tTWuaPLP7c72B8MeRhlCPZv6Q3MYohKMupQcbnB4Rost+xV1KKM6Cga1NZtFZykjQVnBw6yQIjea1qDZOd5sHXhV7NoeUmKWZg5Gdk/QtQ4UGlFu5AygkPiG6+J20usSI4/6E2x7JDErBaiK89UrQGxVfDF1b5uix8djC4S6i1coYytqSGeDgSkIZ/GVLs/nm3ax1FG2CK1fyyLUSVKwcdzEWuIWtWUMC7Av3dm8Q6NtkEwZmM8cUGjSSq6BcJE9i6ED9ZdotA9SFqPFtBGtsfouCJU3PXI0E1J+nGytgYTqJ89hqbt1/GCTGyNGIdYMAiuX12MXlpMuKfkrhlQEYKSADyBhApkkOAf1vjtSy/2+f+0xdlRcF8VN702s48rspmQPBCcgf6gu+l8Q+QoiQ73reji6+R2jTMz13vJuepOJ88vH798S+RpZHu5qQb+CPN15LOjrG4j8EYhupOD177tgPQWvg8g/GL6smT7HyeOnLAB/+mGfsqB1zTVcP58nJEXsQyUBAAAAAElFTkSuQmCC"
}, function(t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAYUExURUxpcf///////////////////////////95C5tQAAAAHdFJOUwABnpj+bGXDMIZhAAAA4ElEQVRYw+3XwQ6EIAxFUUCZ/v8fz8QYk1Gghd6V6VvTk6gIbUqRSCTynnxK1hflrZq9XXQxb7JXsyeq+PPEKB6eJh6eTTy9sXh6FvHyRuLlGcQioor5b1EyvOyxaFgytXzSUwumPaVkwRsWLXmDskWvW7jsdUodXrPY5TXKnd4DcHt30e/dRMDrieteW/R4LdHnPUWvdxf9Hg7Sj0x/FHrb0Bub/vXow4E+vugDlr4C6EuKvkbpi55uRehmiW7n6IYTb4nxph0fK/DBhx/N+OGRH29TqqYNW2qKRCKR9+QLfbEaz7uhlPAAAAAASUVORK5CYII="
}, function(t, e) {
    ! function(t) {
        "use strict";
        function e(t) {
            if ("string" != typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t)) throw new TypeError("Invalid character in header field name");
            return t.toLowerCase()
        }
        function n(t) {
            return "string" != typeof t && (t = String(t)), t
        }
        function i(t) {
            this.map = {}, t instanceof i ? t.forEach(function(t, e) {
                this.append(e, t)
            }, this) : t && Object.getOwnPropertyNames(t).forEach(function(e) {
                this.append(e, t[e])
            }, this)
        }
        function o(t) {
            return t.bodyUsed ? Promise.reject(new TypeError("Already read")) : void(t.bodyUsed = !0)
        }
        function r(t) {
            return new Promise(function(e, n) {
                t.onload = function() {
                    e(t.result)
                }, t.onerror = function() {
                    n(t.error)
                }
            })
        }
        function s(t) {
            var e = new FileReader;
            return e.readAsArrayBuffer(t), r(e)
        }
        function a(t) {
            var e = new FileReader;
            return e.readAsText(t), r(e)
        }
        function c() {
            return this.bodyUsed = !1, this._initBody = function(t) {
                if (this._bodyInit = t, "string" == typeof t) this._bodyText = t;
                else if (f.blob && Blob.prototype.isPrototypeOf(t)) this._bodyBlob = t;
                else if (f.formData && FormData.prototype.isPrototypeOf(t)) this._bodyFormData = t;
                else if (t) {
                    if (!f.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(t)) throw new Error("unsupported BodyInit type")
                } else this._bodyText = "";
                this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type && this.headers.set("content-type", this._bodyBlob.type))
            }, f.blob ? (this.blob = function() {
                var t = o(this);
                if (t) return t;
                if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                return Promise.resolve(new Blob([this._bodyText]))
            }, this.arrayBuffer = function() {
                return this.blob().then(s)
            }, this.text = function() {
                var t = o(this);
                if (t) return t;
                if (this._bodyBlob) return a(this._bodyBlob);
                if (this._bodyFormData) throw new Error("could not read FormData body as text");
                return Promise.resolve(this._bodyText)
            }) : this.text = function() {
                var t = o(this);
                return t ? t : Promise.resolve(this._bodyText)
            }, f.formData && (this.formData = function() {
                return this.text().then(l)
            }), this.json = function() {
                return this.text().then(JSON.parse)
            }, this
        }
        function u(t) {
            var e = t.toUpperCase();
            return p.indexOf(e) > -1 ? e : t
        }
        function h(t, e) {
            e = e || {};
            var n = e.body;
            if (h.prototype.isPrototypeOf(t)) {
                if (t.bodyUsed) throw new TypeError("Already read");
                this.url = t.url, this.credentials = t.credentials, e.headers || (this.headers = new i(t.headers)), this.method = t.method, this.mode = t.mode, n || (n = t._bodyInit, t.bodyUsed = !0)
            } else this.url = t;
            if (this.credentials = e.credentials || this.credentials || "omit", !e.headers && this.headers || (this.headers = new i(e.headers)), this.method = u(e.method || this.method || "GET"), this.mode = e.mode || this.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && n) throw new TypeError("Body not allowed for GET or HEAD requests");
            this._initBody(n)
        }
        function l(t) {
            var e = new FormData;
            return t.trim().split("&").forEach(function(t) {
                if (t) {
                    var n = t.split("="),
                        i = n.shift().replace(/\+/g, " "),
                        o = n.join("=").replace(/\+/g, " ");
                    e.append(decodeURIComponent(i), decodeURIComponent(o))
                }
            }), e
        }
        function d(t) {
            var e = new i,
                n = t.getAllResponseHeaders().trim().split("\n");
            return n.forEach(function(t) {
                var n = t.trim().split(":"),
                    i = n.shift().trim(),
                    o = n.join(":").trim();
                e.append(i, o)
            }), e
        }
        function A(t, e) {
            e || (e = {}), this.type = "default", this.status = e.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = e.statusText, this.headers = e.headers instanceof i ? e.headers : new i(e.headers), this.url = e.url || "", this._initBody(t)
        }
        if (!t.fetch) {
            i.prototype.append = function(t, i) {
                t = e(t), i = n(i);
                var o = this.map[t];
                o || (o = [], this.map[t] = o), o.push(i)
            }, i.prototype["delete"] = function(t) {
                delete this.map[e(t)]
            }, i.prototype.get = function(t) {
                var n = this.map[e(t)];
                return n ? n[0] : null
            }, i.prototype.getAll = function(t) {
                return this.map[e(t)] || []
            }, i.prototype.has = function(t) {
                return this.map.hasOwnProperty(e(t))
            }, i.prototype.set = function(t, i) {
                this.map[e(t)] = [n(i)]
            }, i.prototype.forEach = function(t, e) {
                Object.getOwnPropertyNames(this.map).forEach(function(n) {
                    this.map[n].forEach(function(i) {
                        t.call(e, i, n, this)
                    }, this)
                }, this)
            };
            var f = {
                    blob: "FileReader" in t && "Blob" in t && function() {
                        try {
                            return new Blob, !0
                        } catch (t) {
                            return !1
                        }
                    }(),
                    formData: "FormData" in t,
                    arrayBuffer: "ArrayBuffer" in t
                },
                p = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
            h.prototype.clone = function() {
                return new h(this)
            }, c.call(h.prototype), c.call(A.prototype), A.prototype.clone = function() {
                return new A(this._bodyInit, {
                    status: this.status,
                    statusText: this.statusText,
                    headers: new i(this.headers),
                    url: this.url
                })
            }, A.error = function() {
                var t = new A(null, {
                    status: 0,
                    statusText: ""
                });
                return t.type = "error", t
            };
            var g = [301, 302, 303, 307, 308];
            A.redirect = function(t, e) {
                if (-1 === g.indexOf(e)) throw new RangeError("Invalid status code");
                return new A(null, {
                    status: e,
                    headers: {
                        location: t
                    }
                })
            }, t.Headers = i, t.Request = h, t.Response = A, t.fetch = function(t, e) {
                return new Promise(function(n, i) {
                    function o() {
                        return "responseURL" in s ? s.responseURL : /^X-Request-URL:/m.test(s.getAllResponseHeaders()) ? s.getResponseHeader("X-Request-URL") : void 0
                    }
                    var r;
                    r = h.prototype.isPrototypeOf(t) && !e ? t : new h(t, e);
                    var s = new XMLHttpRequest;
                    s.onload = function() {
                        var t = 1223 === s.status ? 204 : s.status;
                        if (100 > t || t > 599) return void i(new TypeError("Network request failed"));
                        var e = {
                                status: t,
                                statusText: s.statusText,
                                headers: d(s),
                                url: o()
                            },
                            r = "response" in s ? s.response : s.responseText;
                        n(new A(r, e))
                    }, s.onerror = function() {
                        i(new TypeError("Network request failed"))
                    }, s.open(r.method, r.url, !0), "include" === r.credentials && (s.withCredentials = !0), "responseType" in s && f.blob && (s.responseType = "blob"), r.headers.forEach(function(t, e) {
                        s.setRequestHeader(e, t)
                    }), s.send("undefined" == typeof r._bodyInit ? null : r._bodyInit)
                })
            }, t.fetch.polyfill = !0
        }
    }("undefined" != typeof self ? self : this)
}, function(t, e) {}]);