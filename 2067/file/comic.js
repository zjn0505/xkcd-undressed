"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * map layout and renderer by chromako.de
 * shape data crunching by @seakelps
 * thanks to @mbostock for d3, topojson, and us-atlas.
 */
!function (t) {
  var n = {};

  function e(r) {
    if (n[r]) return n[r].exports;
    var i = n[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return t[r].call(i.exports, i, i.exports, e), i.l = !0, i.exports;
  }

  e.m = t, e.c = n, e.d = function (t, n, r) {
    e.o(t, n) || Object.defineProperty(t, n, {
      enumerable: !0,
      get: r
    });
  }, e.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, e.t = function (t, n) {
    if (1 & n && (t = e(t)), 8 & n) return t;
    if (4 & n && "object" == _typeof(t) && t && t.__esModule) return t;
    var r = Object.create(null);
    if (e.r(r), Object.defineProperty(r, "default", {
      enumerable: !0,
      value: t
    }), 2 & n && "string" != typeof t) for (var i in t) {
      e.d(r, i, function (n) {
        return t[n];
      }.bind(null, i));
    }
    return r;
  }, e.n = function (t) {
    var n = t && t.__esModule ? function () {
      return t.default;
    } : function () {
      return t;
    };
    return e.d(n, "a", n), n;
  }, e.o = function (t, n) {
    return Object.prototype.hasOwnProperty.call(t, n);
  }, e.p = "", e(e.s = 26);
}([function (t, n) {
  t.exports = function (t, n, e) {
    return n in t ? Object.defineProperty(t, n, {
      value: e,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = e, t;
  };
}, function (t, n, e) {
  t.exports = e(9);
}, function (t, n, e) {
  var r = e(0);

  t.exports = function (t) {
    for (var n = 1; n < arguments.length; n++) {
      var e = null != arguments[n] ? arguments[n] : {},
          i = Object.keys(e);
      "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(e).filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      }))), i.forEach(function (n) {
        r(t, n, e[n]);
      });
    }

    return t;
  };
}, function (t, n) {
  function e(t, n, e, r, i, o, a) {
    try {
      var u = t[o](a),
          s = u.value;
    } catch (t) {
      return void e(t);
    }

    u.done ? n(s) : Promise.resolve(s).then(r, i);
  }

  t.exports = function (t) {
    return function () {
      var n = this,
          r = arguments;
      return new Promise(function (i, o) {
        var a = t.apply(n, r);

        function u(t) {
          e(a, i, o, u, s, "next", t);
        }

        function s(t) {
          e(a, i, o, u, s, "throw", t);
        }

        u(void 0);
      });
    };
  };
}, function (t, n, e) {
  "use strict";

  var r = function r() {
    return new i();
  };

  function i() {
    this.reset();
  }

  i.prototype = {
    constructor: i,
    reset: function reset() {
      this.s = this.t = 0;
    },
    add: function add(t) {
      a(o, t, this.t), a(this, o.s, this.s), this.s ? this.t += o.t : this.s = o.t;
    },
    valueOf: function valueOf() {
      return this.s;
    }
  };
  var o = new i();

  function a(t, n, e) {
    var r = t.s = n + e,
        i = r - n,
        o = r - i;
    t.t = n - o + (e - i);
  }

  var u = 1e-6,
      s = Math.PI,
      c = s / 2,
      h = s / 4,
      l = 2 * s,
      f = s / 180,
      p = Math.abs,
      d = Math.atan,
      v = Math.atan2,
      y = Math.cos,
      g = (Math.ceil, Math.exp),
      m = (Math.floor, Math.log),
      _ = (Math.pow, Math.sin),
      w = (Math.sign, Math.sqrt),
      x = Math.tan;

  function b(t) {
    return t > 1 ? 0 : t < -1 ? s : Math.acos(t);
  }

  function E(t) {
    return t > 1 ? c : t < -1 ? -c : Math.asin(t);
  }

  function M() {}

  function k(t, n) {
    t && N.hasOwnProperty(t.type) && N[t.type](t, n);
  }

  var S = {
    Feature: function Feature(t, n) {
      k(t.geometry, n);
    },
    FeatureCollection: function FeatureCollection(t, n) {
      for (var e = t.features, r = -1, i = e.length; ++r < i;) {
        k(e[r].geometry, n);
      }
    }
  },
      N = {
    Sphere: function Sphere(t, n) {
      n.sphere();
    },
    Point: function Point(t, n) {
      t = t.coordinates, n.point(t[0], t[1], t[2]);
    },
    MultiPoint: function MultiPoint(t, n) {
      for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) {
        t = e[r], n.point(t[0], t[1], t[2]);
      }
    },
    LineString: function LineString(t, n) {
      A(t.coordinates, n, 0);
    },
    MultiLineString: function MultiLineString(t, n) {
      for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) {
        A(e[r], n, 0);
      }
    },
    Polygon: function Polygon(t, n) {
      P(t.coordinates, n);
    },
    MultiPolygon: function MultiPolygon(t, n) {
      for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) {
        P(e[r], n);
      }
    },
    GeometryCollection: function GeometryCollection(t, n) {
      for (var e = t.geometries, r = -1, i = e.length; ++r < i;) {
        k(e[r], n);
      }
    }
  };

  function A(t, n, e) {
    var r,
        i = -1,
        o = t.length - e;

    for (n.lineStart(); ++i < o;) {
      r = t[i], n.point(r[0], r[1], r[2]);
    }

    n.lineEnd();
  }

  function P(t, n) {
    var e = -1,
        r = t.length;

    for (n.polygonStart(); ++e < r;) {
      A(t[e], n, 1);
    }

    n.polygonEnd();
  }

  var z = function z(t, n) {
    t && S.hasOwnProperty(t.type) ? S[t.type](t, n) : k(t, n);
  };

  r(), r();

  function T(t) {
    var n = t[0],
        e = t[1],
        r = y(e);
    return [r * y(n), r * _(n), _(e)];
  }

  function L(t, n) {
    return [t[1] * n[2] - t[2] * n[1], t[2] * n[0] - t[0] * n[2], t[0] * n[1] - t[1] * n[0]];
  }

  function I(t) {
    var n = w(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
    t[0] /= n, t[1] /= n, t[2] /= n;
  }

  r();

  function j(t, n) {
    return [t > s ? t - l : t < -s ? t + l : t, n];
  }

  j.invert = j;

  var O = function O() {
    var t,
        n = [];
    return {
      point: function point(n, e) {
        t.push([n, e]);
      },
      lineStart: function lineStart() {
        n.push(t = []);
      },
      lineEnd: M,
      rejoin: function rejoin() {
        n.length > 1 && n.push(n.pop().concat(n.shift()));
      },
      result: function result() {
        var e = n;
        return n = [], t = null, e;
      }
    };
  },
      C = function C(t, n) {
    return p(t[0] - n[0]) < u && p(t[1] - n[1]) < u;
  };

  function R(t, n, e, r) {
    this.x = t, this.z = n, this.o = e, this.e = r, this.v = !1, this.n = this.p = null;
  }

  var X = function X(t, n, e, r, i) {
    var o,
        a,
        u = [],
        s = [];

    if (t.forEach(function (t) {
      if (!((n = t.length - 1) <= 0)) {
        var n,
            e,
            r = t[0],
            a = t[n];

        if (C(r, a)) {
          for (i.lineStart(), o = 0; o < n; ++o) {
            i.point((r = t[o])[0], r[1]);
          }

          i.lineEnd();
        } else u.push(e = new R(r, t, null, !0)), s.push(e.o = new R(r, null, e, !1)), u.push(e = new R(a, t, null, !1)), s.push(e.o = new R(a, null, e, !0));
      }
    }), u.length) {
      for (s.sort(n), Y(u), Y(s), o = 0, a = s.length; o < a; ++o) {
        s[o].e = e = !e;
      }

      for (var c, h, l = u[0];;) {
        for (var f = l, p = !0; f.v;) {
          if ((f = f.n) === l) return;
        }

        c = f.z, i.lineStart();

        do {
          if (f.v = f.o.v = !0, f.e) {
            if (p) for (o = 0, a = c.length; o < a; ++o) {
              i.point((h = c[o])[0], h[1]);
            } else r(f.x, f.n.x, 1, i);
            f = f.n;
          } else {
            if (p) for (c = f.p.z, o = c.length - 1; o >= 0; --o) {
              i.point((h = c[o])[0], h[1]);
            } else r(f.x, f.p.x, -1, i);
            f = f.p;
          }

          c = (f = f.o).z, p = !p;
        } while (!f.v);

        i.lineEnd();
      }
    }
  };

  function Y(t) {
    if (n = t.length) {
      for (var n, e, r = 0, i = t[0]; ++r < n;) {
        i.n = e = t[r], e.p = i, i = e;
      }

      i.n = e = t[0], e.p = i;
    }
  }

  var q = r(),
      U = function U(t, n) {
    var e = n[0],
        r = n[1],
        i = _(r),
        o = [_(e), -y(e), 0],
        a = 0,
        f = 0;

    q.reset(), 1 === i ? r = c + u : -1 === i && (r = -c - u);

    for (var p = 0, d = t.length; p < d; ++p) {
      if (m = (g = t[p]).length) for (var g, m, w = g[m - 1], x = w[0], b = w[1] / 2 + h, M = _(b), k = y(b), S = 0; S < m; ++S, x = A, M = z, k = j, w = N) {
        var N = g[S],
            A = N[0],
            P = N[1] / 2 + h,
            z = _(P),
            j = y(P),
            O = A - x,
            C = O >= 0 ? 1 : -1,
            R = C * O,
            X = R > s,
            Y = M * z;

        if (q.add(v(Y * C * _(R), k * j + Y * y(R))), a += X ? O + C * l : O, X ^ x >= e ^ A >= e) {
          var U = L(T(w), T(N));
          I(U);
          var B = L(o, U);
          I(B);
          var F = (X ^ O >= 0 ? -1 : 1) * E(B[2]);
          (r > F || r === F && (U[0] || U[1])) && (f += X ^ O >= 0 ? 1 : -1);
        }
      }
    }

    return (a < -u || a < u && q < -u) ^ 1 & f;
  },
      B = function B(t, n) {
    return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
  };

  var F = function (t) {
    return 1 === t.length && (t = function (t) {
      return function (n, e) {
        return B(t(n), e);
      };
    }(t)), {
      left: function left(n, e, r, i) {
        for (null == r && (r = 0), null == i && (i = n.length); r < i;) {
          var o = r + i >>> 1;
          t(n[o], e) < 0 ? r = o + 1 : i = o;
        }

        return r;
      },
      right: function right(n, e, r, i) {
        for (null == r && (r = 0), null == i && (i = n.length); r < i;) {
          var o = r + i >>> 1;
          t(n[o], e) > 0 ? i = o : r = o + 1;
        }

        return r;
      }
    };
  }(B);

  F.right, F.left;
  var G = Array.prototype;
  G.slice, G.map, Math.sqrt(50), Math.sqrt(10), Math.sqrt(2);

  var D = function D(t) {
    for (var n, e, r, i = t.length, o = -1, a = 0; ++o < i;) {
      a += t[o].length;
    }

    for (e = new Array(a); --i >= 0;) {
      for (n = (r = t[i]).length; --n >= 0;) {
        e[--a] = r[n];
      }
    }

    return e;
  };

  var V = function V(t, n, e, r) {
    return function (i) {
      var o,
          a,
          u,
          s = n(i),
          c = O(),
          h = n(c),
          l = !1,
          f = {
        point: p,
        lineStart: v,
        lineEnd: y,
        polygonStart: function polygonStart() {
          f.point = g, f.lineStart = m, f.lineEnd = _, a = [], o = [];
        },
        polygonEnd: function polygonEnd() {
          f.point = p, f.lineStart = v, f.lineEnd = y, a = D(a);
          var t = U(o, r);
          a.length ? (l || (i.polygonStart(), l = !0), X(a, H, t, e, i)) : t && (l || (i.polygonStart(), l = !0), i.lineStart(), e(null, null, 1, i), i.lineEnd()), l && (i.polygonEnd(), l = !1), a = o = null;
        },
        sphere: function sphere() {
          i.polygonStart(), i.lineStart(), e(null, null, 1, i), i.lineEnd(), i.polygonEnd();
        }
      };

      function p(n, e) {
        t(n, e) && i.point(n, e);
      }

      function d(t, n) {
        s.point(t, n);
      }

      function v() {
        f.point = d, s.lineStart();
      }

      function y() {
        f.point = p, s.lineEnd();
      }

      function g(t, n) {
        u.push([t, n]), h.point(t, n);
      }

      function m() {
        h.lineStart(), u = [];
      }

      function _() {
        g(u[0][0], u[0][1]), h.lineEnd();
        var t,
            n,
            e,
            r,
            s = h.clean(),
            f = c.result(),
            p = f.length;
        if (u.pop(), o.push(u), u = null, p) if (1 & s) {
          if ((n = (e = f[0]).length - 1) > 0) {
            for (l || (i.polygonStart(), l = !0), i.lineStart(), t = 0; t < n; ++t) {
              i.point((r = e[t])[0], r[1]);
            }

            i.lineEnd();
          }
        } else p > 1 && 2 & s && f.push(f.pop().concat(f.shift())), a.push(f.filter($));
      }

      return f;
    };
  };

  function $(t) {
    return t.length > 1;
  }

  function H(t, n) {
    return ((t = t.x)[0] < 0 ? t[1] - c - u : c - t[1]) - ((n = n.x)[0] < 0 ? n[1] - c - u : c - n[1]);
  }

  V(function () {
    return !0;
  }, function (t) {
    var n,
        e = NaN,
        r = NaN,
        i = NaN;
    return {
      lineStart: function lineStart() {
        t.lineStart(), n = 1;
      },
      point: function point(o, a) {
        var h = o > 0 ? s : -s,
            l = p(o - e);
        p(l - s) < u ? (t.point(e, r = (r + a) / 2 > 0 ? c : -c), t.point(i, r), t.lineEnd(), t.lineStart(), t.point(h, r), t.point(o, r), n = 0) : i !== h && l >= s && (p(e - i) < u && (e -= i * u), p(o - h) < u && (o -= h * u), r = function (t, n, e, r) {
          var i,
              o,
              a = _(t - e);

          return p(a) > u ? d((_(n) * (o = y(r)) * _(e) - _(r) * (i = y(n)) * _(t)) / (i * o * a)) : (n + r) / 2;
        }(e, r, o, a), t.point(i, r), t.lineEnd(), t.lineStart(), t.point(h, r), n = 0), t.point(e = o, r = a), i = h;
      },
      lineEnd: function lineEnd() {
        t.lineEnd(), e = r = NaN;
      },
      clean: function clean() {
        return 2 - n;
      }
    };
  }, function (t, n, e, r) {
    var i;
    if (null == t) i = e * c, r.point(-s, i), r.point(0, i), r.point(s, i), r.point(s, 0), r.point(s, -i), r.point(0, -i), r.point(-s, -i), r.point(-s, 0), r.point(-s, i);else if (p(t[0] - n[0]) > u) {
      var o = t[0] < n[0] ? s : -s;
      i = e * o / 2, r.point(-o, i), r.point(0, i), r.point(o, i);
    } else r.point(n[0], n[1]);
  }, [-s, -c]);
  r();

  var Z,
      W,
      J,
      K,
      Q = function Q(t) {
    return t;
  },
      tt = r(),
      nt = r(),
      et = {
    point: M,
    lineStart: M,
    lineEnd: M,
    polygonStart: function polygonStart() {
      et.lineStart = rt, et.lineEnd = at;
    },
    polygonEnd: function polygonEnd() {
      et.lineStart = et.lineEnd = et.point = M, tt.add(p(nt)), nt.reset();
    },
    result: function result() {
      var t = tt / 2;
      return tt.reset(), t;
    }
  };

  function rt() {
    et.point = it;
  }

  function it(t, n) {
    et.point = ot, Z = J = t, W = K = n;
  }

  function ot(t, n) {
    nt.add(K * t - J * n), J = t, K = n;
  }

  function at() {
    ot(Z, W);
  }

  var ut = et,
      st = 1 / 0,
      ct = st,
      ht = -st,
      lt = ht;
  var ft,
      pt,
      dt,
      vt,
      yt = {
    point: function point(t, n) {
      t < st && (st = t);
      t > ht && (ht = t);
      n < ct && (ct = n);
      n > lt && (lt = n);
    },
    lineStart: M,
    lineEnd: M,
    polygonStart: M,
    polygonEnd: M,
    result: function result() {
      var t = [[st, ct], [ht, lt]];
      return ht = lt = -(ct = st = 1 / 0), t;
    }
  },
      gt = 0,
      mt = 0,
      _t = 0,
      wt = 0,
      xt = 0,
      bt = 0,
      Et = 0,
      Mt = 0,
      kt = 0,
      St = {
    point: Nt,
    lineStart: At,
    lineEnd: Tt,
    polygonStart: function polygonStart() {
      St.lineStart = Lt, St.lineEnd = It;
    },
    polygonEnd: function polygonEnd() {
      St.point = Nt, St.lineStart = At, St.lineEnd = Tt;
    },
    result: function result() {
      var t = kt ? [Et / kt, Mt / kt] : bt ? [wt / bt, xt / bt] : _t ? [gt / _t, mt / _t] : [NaN, NaN];
      return gt = mt = _t = wt = xt = bt = Et = Mt = kt = 0, t;
    }
  };

  function Nt(t, n) {
    gt += t, mt += n, ++_t;
  }

  function At() {
    St.point = Pt;
  }

  function Pt(t, n) {
    St.point = zt, Nt(dt = t, vt = n);
  }

  function zt(t, n) {
    var e = t - dt,
        r = n - vt,
        i = w(e * e + r * r);
    wt += i * (dt + t) / 2, xt += i * (vt + n) / 2, bt += i, Nt(dt = t, vt = n);
  }

  function Tt() {
    St.point = Nt;
  }

  function Lt() {
    St.point = jt;
  }

  function It() {
    Ot(ft, pt);
  }

  function jt(t, n) {
    St.point = Ot, Nt(ft = dt = t, pt = vt = n);
  }

  function Ot(t, n) {
    var e = t - dt,
        r = n - vt,
        i = w(e * e + r * r);
    wt += i * (dt + t) / 2, xt += i * (vt + n) / 2, bt += i, Et += (i = vt * t - dt * n) * (dt + t), Mt += i * (vt + n), kt += 3 * i, Nt(dt = t, vt = n);
  }

  var Ct = St;

  function Rt(t) {
    this._context = t;
  }

  Rt.prototype = {
    _radius: 4.5,
    pointRadius: function pointRadius(t) {
      return this._radius = t, this;
    },
    polygonStart: function polygonStart() {
      this._line = 0;
    },
    polygonEnd: function polygonEnd() {
      this._line = NaN;
    },
    lineStart: function lineStart() {
      this._point = 0;
    },
    lineEnd: function lineEnd() {
      0 === this._line && this._context.closePath(), this._point = NaN;
    },
    point: function point(t, n) {
      switch (this._point) {
        case 0:
          this._context.moveTo(t, n), this._point = 1;
          break;

        case 1:
          this._context.lineTo(t, n);

          break;

        default:
          this._context.moveTo(t + this._radius, n), this._context.arc(t, n, this._radius, 0, l);
      }
    },
    result: M
  };
  var Xt,
      Yt,
      qt,
      Ut,
      Bt,
      Ft = r(),
      Gt = {
    point: M,
    lineStart: function lineStart() {
      Gt.point = Dt;
    },
    lineEnd: function lineEnd() {
      Xt && Vt(Yt, qt), Gt.point = M;
    },
    polygonStart: function polygonStart() {
      Xt = !0;
    },
    polygonEnd: function polygonEnd() {
      Xt = null;
    },
    result: function result() {
      var t = +Ft;
      return Ft.reset(), t;
    }
  };

  function Dt(t, n) {
    Gt.point = Vt, Yt = Ut = t, qt = Bt = n;
  }

  function Vt(t, n) {
    Ut -= t, Bt -= n, Ft.add(w(Ut * Ut + Bt * Bt)), Ut = t, Bt = n;
  }

  var $t = Gt;

  function Ht() {
    this._string = [];
  }

  function Zt(t) {
    return "m0," + t + "a" + t + "," + t + " 0 1,1 0," + -2 * t + "a" + t + "," + t + " 0 1,1 0," + 2 * t + "z";
  }

  Ht.prototype = {
    _radius: 4.5,
    _circle: Zt(4.5),
    pointRadius: function pointRadius(t) {
      return (t = +t) !== this._radius && (this._radius = t, this._circle = null), this;
    },
    polygonStart: function polygonStart() {
      this._line = 0;
    },
    polygonEnd: function polygonEnd() {
      this._line = NaN;
    },
    lineStart: function lineStart() {
      this._point = 0;
    },
    lineEnd: function lineEnd() {
      0 === this._line && this._string.push("Z"), this._point = NaN;
    },
    point: function point(t, n) {
      switch (this._point) {
        case 0:
          this._string.push("M", t, ",", n), this._point = 1;
          break;

        case 1:
          this._string.push("L", t, ",", n);

          break;

        default:
          null == this._circle && (this._circle = Zt(this._radius)), this._string.push("M", t, ",", n, this._circle);
      }
    },
    result: function result() {
      if (this._string.length) {
        var t = this._string.join("");

        return this._string = [], t;
      }

      return null;
    }
  };

  var Wt = function Wt(t, n) {
    var e,
        r,
        i = 4.5;

    function o(t) {
      return t && ("function" == typeof i && r.pointRadius(+i.apply(this, arguments)), z(t, e(r))), r.result();
    }

    return o.area = function (t) {
      return z(t, e(ut)), ut.result();
    }, o.measure = function (t) {
      return z(t, e($t)), $t.result();
    }, o.bounds = function (t) {
      return z(t, e(yt)), yt.result();
    }, o.centroid = function (t) {
      return z(t, e(Ct)), Ct.result();
    }, o.projection = function (n) {
      return arguments.length ? (e = null == n ? (t = null, Q) : (t = n).stream, o) : t;
    }, o.context = function (t) {
      return arguments.length ? (r = null == t ? (n = null, new Ht()) : new Rt(n = t), "function" != typeof i && r.pointRadius(i), o) : n;
    }, o.pointRadius = function (t) {
      return arguments.length ? (i = "function" == typeof t ? t : (r.pointRadius(+t), +t), o) : i;
    }, o.projection(t).context(n);
  };

  function Jt(t) {
    return function (n) {
      var e = new Kt();

      for (var r in t) {
        e[r] = t[r];
      }

      return e.stream = n, e;
    };
  }

  function Kt() {}

  Kt.prototype = {
    constructor: Kt,
    point: function point(t, n) {
      this.stream.point(t, n);
    },
    sphere: function sphere() {
      this.stream.sphere();
    },
    lineStart: function lineStart() {
      this.stream.lineStart();
    },
    lineEnd: function lineEnd() {
      this.stream.lineEnd();
    },
    polygonStart: function polygonStart() {
      this.stream.polygonStart();
    },
    polygonEnd: function polygonEnd() {
      this.stream.polygonEnd();
    }
  };
  y(30 * f);
  Jt({
    point: function point(t, n) {
      this.stream.point(t * f, n * f);
    }
  });

  function Qt(t) {
    return function (n, e) {
      var r = y(n),
          i = y(e),
          o = t(r * i);
      return [o * i * _(n), o * _(e)];
    };
  }

  function tn(t) {
    return function (n, e) {
      var r = w(n * n + e * e),
          i = t(r),
          o = _(i),
          a = y(i);

      return [v(n * o, r * a), E(r && e * o / r)];
    };
  }

  var nn = Qt(function (t) {
    return w(2 / (1 + t));
  });
  nn.invert = tn(function (t) {
    return 2 * E(t / 2);
  });
  var en = Qt(function (t) {
    return (t = b(t)) && t / _(t);
  });
  en.invert = tn(function (t) {
    return t;
  });

  function rn(t, n) {
    return [t, m(x((c + n) / 2))];
  }

  rn.invert = function (t, n) {
    return [t, 2 * d(g(n)) - c];
  };

  function on(t, n) {
    return [t, n];
  }

  on.invert = on;
  var an = 1.340264,
      un = -.081106,
      sn = 893e-6,
      cn = .003796,
      hn = w(3) / 2;

  function ln(t, n) {
    var e = E(hn * _(n)),
        r = e * e,
        i = r * r * r;
    return [t * y(e) / (hn * (an + 3 * un * r + i * (7 * sn + 9 * cn * r))), e * (an + un * r + i * (sn + cn * r))];
  }

  ln.invert = function (t, n) {
    for (var e, r = n, i = r * r, o = i * i * i, a = 0; a < 12 && (o = (i = (r -= e = (r * (an + un * i + o * (sn + cn * i)) - n) / (an + 3 * un * i + o * (7 * sn + 9 * cn * i))) * r) * i * i, !(p(e) < 1e-12)); ++a) {
      ;
    }

    return [hn * t * (an + 3 * un * i + o * (7 * sn + 9 * cn * i)) / y(r), E(_(r) / hn)];
  };

  function fn(t, n) {
    var e = y(n),
        r = y(t) * e;
    return [e * _(t) / r, _(n) / r];
  }

  fn.invert = tn(d);

  function pn(t, n) {
    var e = n * n,
        r = e * e;
    return [t * (.8707 - .131979 * e + r * (r * (.003971 * e - .001529 * r) - .013791)), n * (1.007226 + e * (.015085 + r * (.028874 * e - .044475 - .005916 * r)))];
  }

  pn.invert = function (t, n) {
    var e,
        r = n,
        i = 25;

    do {
      var o = r * r,
          a = o * o;
      r -= e = (r * (1.007226 + o * (.015085 + a * (.028874 * o - .044475 - .005916 * a))) - n) / (1.007226 + o * (.045255 + a * (.259866 * o - .311325 - .005916 * 11 * a)));
    } while (p(e) > u && --i > 0);

    return [t / (.8707 + (o = r * r) * (o * (o * o * o * (.003971 - .001529 * o) - .013791) - .131979)), r];
  };

  function dn(t, n) {
    return [y(n) * _(t), _(n)];
  }

  dn.invert = tn(E);

  function vn(t, n) {
    var e = y(n),
        r = 1 + y(t) * e;
    return [e * _(t) / r, _(n) / r];
  }

  vn.invert = tn(function (t) {
    return 2 * d(t);
  });

  function yn(t, n) {
    return [m(x((c + n) / 2)), -t];
  }

  yn.invert = function (t, n) {
    return [-n, 2 * d(g(t)) - c];
  };

  e.d(n, "a", function () {
    return Wt;
  });
}, function (t, n) {
  t.exports = function (t, n) {
    if (!_instanceof(t, n)) throw new TypeError("Cannot call a class as a function");
  };
}, function (t, n) {
  function e(t, n) {
    for (var e = 0; e < n.length; e++) {
      var r = n[e];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
    }
  }

  t.exports = function (t, n, r) {
    return n && e(t.prototype, n), r && e(t, r), t;
  };
}, function (t, n, e) {
  "use strict";

  n.a = {
    baseURL: "",
    title: "Use your mouse or fingers to pan + zoom.\nTo edit the map, submit your ballot on November 6th.",
    maxZoom: 1e3
  };
}, function (t, n, e) {
  "use strict";

  var r = e(5),
      i = e.n(r),
      o = e(6),
      a = e.n(o),
      u = e(0),
      s = e.n(u),
      c = "http://www.w3.org/1999/xhtml",
      h = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: c,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
  },
      l = function l(t) {
    var n = t += "",
        e = n.indexOf(":");
    return e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)), h.hasOwnProperty(n) ? {
      space: h[n],
      local: t
    } : t;
  };

  var f = function f(t) {
    var n = l(t);
    return (n.local ? function (t) {
      return function () {
        return this.ownerDocument.createElementNS(t.space, t.local);
      };
    } : function (t) {
      return function () {
        var n = this.ownerDocument,
            e = this.namespaceURI;
        return e === c && n.documentElement.namespaceURI === c ? n.createElement(t) : n.createElementNS(e, t);
      };
    })(n);
  };

  function p() {}

  var d = function d(t) {
    return null == t ? p : function () {
      return this.querySelector(t);
    };
  };

  function v() {
    return [];
  }

  var y = function y(t) {
    return null == t ? v : function () {
      return this.querySelectorAll(t);
    };
  },
      g = function g(t) {
    return function () {
      return this.matches(t);
    };
  };

  if ("undefined" != typeof document) {
    var m = document.documentElement;

    if (!m.matches) {
      var _ = m.webkitMatchesSelector || m.msMatchesSelector || m.mozMatchesSelector || m.oMatchesSelector;

      g = function g(t) {
        return function () {
          return _.call(this, t);
        };
      };
    }
  }

  var w = g,
      x = function x(t) {
    return new Array(t.length);
  };

  function b(t, n) {
    this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
  }

  b.prototype = {
    constructor: b,
    appendChild: function appendChild(t) {
      return this._parent.insertBefore(t, this._next);
    },
    insertBefore: function insertBefore(t, n) {
      return this._parent.insertBefore(t, n);
    },
    querySelector: function querySelector(t) {
      return this._parent.querySelector(t);
    },
    querySelectorAll: function querySelectorAll(t) {
      return this._parent.querySelectorAll(t);
    }
  };
  var E = "$";

  function M(t, n, e, r, i, o) {
    for (var a, u = 0, s = n.length, c = o.length; u < c; ++u) {
      (a = n[u]) ? (a.__data__ = o[u], r[u] = a) : e[u] = new b(t, o[u]);
    }

    for (; u < s; ++u) {
      (a = n[u]) && (i[u] = a);
    }
  }

  function k(t, n, e, r, i, o, a) {
    var u,
        s,
        c,
        h = {},
        l = n.length,
        f = o.length,
        p = new Array(l);

    for (u = 0; u < l; ++u) {
      (s = n[u]) && (p[u] = c = E + a.call(s, s.__data__, u, n), c in h ? i[u] = s : h[c] = s);
    }

    for (u = 0; u < f; ++u) {
      (s = h[c = E + a.call(t, o[u], u, o)]) ? (r[u] = s, s.__data__ = o[u], h[c] = null) : e[u] = new b(t, o[u]);
    }

    for (u = 0; u < l; ++u) {
      (s = n[u]) && h[p[u]] === s && (i[u] = s);
    }
  }

  function S(t, n) {
    return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
  }

  var N = function N(t) {
    return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
  };

  function A(t, n) {
    return t.style.getPropertyValue(n) || N(t).getComputedStyle(t, null).getPropertyValue(n);
  }

  function P(t) {
    return t.trim().split(/^|\s+/);
  }

  function z(t) {
    return t.classList || new T(t);
  }

  function T(t) {
    this._node = t, this._names = P(t.getAttribute("class") || "");
  }

  function L(t, n) {
    for (var e = z(t), r = -1, i = n.length; ++r < i;) {
      e.add(n[r]);
    }
  }

  function I(t, n) {
    for (var e = z(t), r = -1, i = n.length; ++r < i;) {
      e.remove(n[r]);
    }
  }

  T.prototype = {
    add: function add(t) {
      this._names.indexOf(t) < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
    },
    remove: function remove(t) {
      var n = this._names.indexOf(t);

      n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")));
    },
    contains: function contains(t) {
      return this._names.indexOf(t) >= 0;
    }
  };

  function j() {
    this.textContent = "";
  }

  function O() {
    this.innerHTML = "";
  }

  function C() {
    this.nextSibling && this.parentNode.appendChild(this);
  }

  function R() {
    this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
  }

  function X() {
    return null;
  }

  function Y() {
    var t = this.parentNode;
    t && t.removeChild(this);
  }

  function q() {
    return this.parentNode.insertBefore(this.cloneNode(!1), this.nextSibling);
  }

  function U() {
    return this.parentNode.insertBefore(this.cloneNode(!0), this.nextSibling);
  }

  var B = {},
      F = null;
  "undefined" != typeof document && ("onmouseenter" in document.documentElement || (B = {
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  }));

  function G(t, n, e) {
    return t = D(t, n, e), function (n) {
      var e = n.relatedTarget;
      e && (e === this || 8 & e.compareDocumentPosition(this)) || t.call(this, n);
    };
  }

  function D(t, n, e) {
    return function (r) {
      var i = F;
      F = r;

      try {
        t.call(this, this.__data__, n, e);
      } finally {
        F = i;
      }
    };
  }

  function V(t) {
    return function () {
      var n = this.__on;

      if (n) {
        for (var e, r = 0, i = -1, o = n.length; r < o; ++r) {
          e = n[r], t.type && e.type !== t.type || e.name !== t.name ? n[++i] = e : this.removeEventListener(e.type, e.listener, e.capture);
        }

        ++i ? n.length = i : delete this.__on;
      }
    };
  }

  function $(t, n, e) {
    var r = B.hasOwnProperty(t.type) ? G : D;
    return function (i, o, a) {
      var u,
          s = this.__on,
          c = r(n, o, a);
      if (s) for (var h = 0, l = s.length; h < l; ++h) {
        if ((u = s[h]).type === t.type && u.name === t.name) return this.removeEventListener(u.type, u.listener, u.capture), this.addEventListener(u.type, u.listener = c, u.capture = e), void (u.value = n);
      }
      this.addEventListener(t.type, c, e), u = {
        type: t.type,
        name: t.name,
        value: n,
        listener: c,
        capture: e
      }, s ? s.push(u) : this.__on = [u];
    };
  }

  function H(t, n, e, r) {
    var i = F;
    t.sourceEvent = F, F = t;

    try {
      return n.apply(e, r);
    } finally {
      F = i;
    }
  }

  function Z(t, n, e) {
    var r = N(t),
        i = r.CustomEvent;
    "function" == typeof i ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
  }

  var W = [null];

  function J(t, n) {
    this._groups = t, this._parents = n;
  }

  function K() {
    return new J([[document.documentElement]], W);
  }

  J.prototype = K.prototype = {
    constructor: J,
    select: function select(t) {
      "function" != typeof t && (t = d(t));

      for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i) {
        for (var o, a, u = n[i], s = u.length, c = r[i] = new Array(s), h = 0; h < s; ++h) {
          (o = u[h]) && (a = t.call(o, o.__data__, h, u)) && ("__data__" in o && (a.__data__ = o.__data__), c[h] = a);
        }
      }

      return new J(r, this._parents);
    },
    selectAll: function selectAll(t) {
      "function" != typeof t && (t = y(t));

      for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o) {
        for (var a, u = n[o], s = u.length, c = 0; c < s; ++c) {
          (a = u[c]) && (r.push(t.call(a, a.__data__, c, u)), i.push(a));
        }
      }

      return new J(r, i);
    },
    filter: function filter(t) {
      "function" != typeof t && (t = w(t));

      for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i) {
        for (var o, a = n[i], u = a.length, s = r[i] = [], c = 0; c < u; ++c) {
          (o = a[c]) && t.call(o, o.__data__, c, a) && s.push(o);
        }
      }

      return new J(r, this._parents);
    },
    data: function data(t, n) {
      if (!t) return p = new Array(this.size()), c = -1, this.each(function (t) {
        p[++c] = t;
      }), p;
      var e = n ? k : M,
          r = this._parents,
          i = this._groups;
      "function" != typeof t && (t = function (t) {
        return function () {
          return t;
        };
      }(t));

      for (var o = i.length, a = new Array(o), u = new Array(o), s = new Array(o), c = 0; c < o; ++c) {
        var h = r[c],
            l = i[c],
            f = l.length,
            p = t.call(h, h && h.__data__, c, r),
            d = p.length,
            v = u[c] = new Array(d),
            y = a[c] = new Array(d);
        e(h, l, v, y, s[c] = new Array(f), p, n);

        for (var g, m, _ = 0, w = 0; _ < d; ++_) {
          if (g = v[_]) {
            for (_ >= w && (w = _ + 1); !(m = y[w]) && ++w < d;) {
              ;
            }

            g._next = m || null;
          }
        }
      }

      return (a = new J(a, r))._enter = u, a._exit = s, a;
    },
    enter: function enter() {
      return new J(this._enter || this._groups.map(x), this._parents);
    },
    exit: function exit() {
      return new J(this._exit || this._groups.map(x), this._parents);
    },
    merge: function merge(t) {
      for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), a = new Array(r), u = 0; u < o; ++u) {
        for (var s, c = n[u], h = e[u], l = c.length, f = a[u] = new Array(l), p = 0; p < l; ++p) {
          (s = c[p] || h[p]) && (f[p] = s);
        }
      }

      for (; u < r; ++u) {
        a[u] = n[u];
      }

      return new J(a, this._parents);
    },
    order: function order() {
      for (var t = this._groups, n = -1, e = t.length; ++n < e;) {
        for (var r, i = t[n], o = i.length - 1, a = i[o]; --o >= 0;) {
          (r = i[o]) && (a && a !== r.nextSibling && a.parentNode.insertBefore(r, a), a = r);
        }
      }

      return this;
    },
    sort: function sort(t) {
      function n(n, e) {
        return n && e ? t(n.__data__, e.__data__) : !n - !e;
      }

      t || (t = S);

      for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
        for (var a, u = e[o], s = u.length, c = i[o] = new Array(s), h = 0; h < s; ++h) {
          (a = u[h]) && (c[h] = a);
        }

        c.sort(n);
      }

      return new J(i, this._parents).order();
    },
    call: function call() {
      var t = arguments[0];
      return arguments[0] = this, t.apply(null, arguments), this;
    },
    nodes: function nodes() {
      var t = new Array(this.size()),
          n = -1;
      return this.each(function () {
        t[++n] = this;
      }), t;
    },
    node: function node() {
      for (var t = this._groups, n = 0, e = t.length; n < e; ++n) {
        for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
          var a = r[i];
          if (a) return a;
        }
      }

      return null;
    },
    size: function size() {
      var t = 0;
      return this.each(function () {
        ++t;
      }), t;
    },
    empty: function empty() {
      return !this.node();
    },
    each: function each(t) {
      for (var n = this._groups, e = 0, r = n.length; e < r; ++e) {
        for (var i, o = n[e], a = 0, u = o.length; a < u; ++a) {
          (i = o[a]) && t.call(i, i.__data__, a, o);
        }
      }

      return this;
    },
    attr: function attr(t, n) {
      var e = l(t);

      if (arguments.length < 2) {
        var r = this.node();
        return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
      }

      return this.each((null == n ? e.local ? function (t) {
        return function () {
          this.removeAttributeNS(t.space, t.local);
        };
      } : function (t) {
        return function () {
          this.removeAttribute(t);
        };
      } : "function" == typeof n ? e.local ? function (t, n) {
        return function () {
          var e = n.apply(this, arguments);
          null == e ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
        };
      } : function (t, n) {
        return function () {
          var e = n.apply(this, arguments);
          null == e ? this.removeAttribute(t) : this.setAttribute(t, e);
        };
      } : e.local ? function (t, n) {
        return function () {
          this.setAttributeNS(t.space, t.local, n);
        };
      } : function (t, n) {
        return function () {
          this.setAttribute(t, n);
        };
      })(e, n));
    },
    style: function style(t, n, e) {
      return arguments.length > 1 ? this.each((null == n ? function (t) {
        return function () {
          this.style.removeProperty(t);
        };
      } : "function" == typeof n ? function (t, n, e) {
        return function () {
          var r = n.apply(this, arguments);
          null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
        };
      } : function (t, n, e) {
        return function () {
          this.style.setProperty(t, n, e);
        };
      })(t, n, null == e ? "" : e)) : A(this.node(), t);
    },
    property: function property(t, n) {
      return arguments.length > 1 ? this.each((null == n ? function (t) {
        return function () {
          delete this[t];
        };
      } : "function" == typeof n ? function (t, n) {
        return function () {
          var e = n.apply(this, arguments);
          null == e ? delete this[t] : this[t] = e;
        };
      } : function (t, n) {
        return function () {
          this[t] = n;
        };
      })(t, n)) : this.node()[t];
    },
    classed: function classed(t, n) {
      var e = P(t + "");

      if (arguments.length < 2) {
        for (var r = z(this.node()), i = -1, o = e.length; ++i < o;) {
          if (!r.contains(e[i])) return !1;
        }

        return !0;
      }

      return this.each(("function" == typeof n ? function (t, n) {
        return function () {
          (n.apply(this, arguments) ? L : I)(this, t);
        };
      } : n ? function (t) {
        return function () {
          L(this, t);
        };
      } : function (t) {
        return function () {
          I(this, t);
        };
      })(e, n));
    },
    text: function text(t) {
      return arguments.length ? this.each(null == t ? j : ("function" == typeof t ? function (t) {
        return function () {
          var n = t.apply(this, arguments);
          this.textContent = null == n ? "" : n;
        };
      } : function (t) {
        return function () {
          this.textContent = t;
        };
      })(t)) : this.node().textContent;
    },
    html: function html(t) {
      return arguments.length ? this.each(null == t ? O : ("function" == typeof t ? function (t) {
        return function () {
          var n = t.apply(this, arguments);
          this.innerHTML = null == n ? "" : n;
        };
      } : function (t) {
        return function () {
          this.innerHTML = t;
        };
      })(t)) : this.node().innerHTML;
    },
    raise: function raise() {
      return this.each(C);
    },
    lower: function lower() {
      return this.each(R);
    },
    append: function append(t) {
      var n = "function" == typeof t ? t : f(t);
      return this.select(function () {
        return this.appendChild(n.apply(this, arguments));
      });
    },
    insert: function insert(t, n) {
      var e = "function" == typeof t ? t : f(t),
          r = null == n ? X : "function" == typeof n ? n : d(n);
      return this.select(function () {
        return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
      });
    },
    remove: function remove() {
      return this.each(Y);
    },
    clone: function clone(t) {
      return this.select(t ? U : q);
    },
    datum: function datum(t) {
      return arguments.length ? this.property("__data__", t) : this.node().__data__;
    },
    on: function on(t, n, e) {
      var r,
          i,
          o = function (t) {
        return t.trim().split(/^|\s+/).map(function (t) {
          var n = "",
              e = t.indexOf(".");
          return e >= 0 && (n = t.slice(e + 1), t = t.slice(0, e)), {
            type: t,
            name: n
          };
        });
      }(t + ""),
          a = o.length;

      if (!(arguments.length < 2)) {
        for (u = n ? $ : V, null == e && (e = !1), r = 0; r < a; ++r) {
          this.each(u(o[r], n, e));
        }

        return this;
      }

      var u = this.node().__on;

      if (u) for (var s, c = 0, h = u.length; c < h; ++c) {
        for (r = 0, s = u[c]; r < a; ++r) {
          if ((i = o[r]).type === s.type && i.name === s.name) return s.value;
        }
      }
    },
    dispatch: function dispatch(t, n) {
      return this.each(("function" == typeof n ? function (t, n) {
        return function () {
          return Z(this, t, n.apply(this, arguments));
        };
      } : function (t, n) {
        return function () {
          return Z(this, t, n);
        };
      })(t, n));
    }
  };

  var Q = K,
      tt = function tt(t) {
    return "string" == typeof t ? new J([[document.querySelector(t)]], [document.documentElement]) : new J([[t]], W);
  },
      nt = 0;

  function et() {
    this._ = "@" + (++nt).toString(36);
  }

  et.prototype = function () {
    return new et();
  }.prototype = {
    constructor: et,
    get: function get(t) {
      for (var n = this._; !(n in t);) {
        if (!(t = t.parentNode)) return;
      }

      return t[n];
    },
    set: function set(t, n) {
      return t[this._] = n;
    },
    remove: function remove(t) {
      return this._ in t && delete t[this._];
    },
    toString: function toString() {
      return this._;
    }
  };

  var rt = function rt() {
    for (var t, n = F; t = n.sourceEvent;) {
      n = t;
    }

    return n;
  },
      it = function it(t, n) {
    var e = t.ownerSVGElement || t;

    if (e.createSVGPoint) {
      var r = e.createSVGPoint();
      return r.x = n.clientX, r.y = n.clientY, [(r = r.matrixTransform(t.getScreenCTM().inverse())).x, r.y];
    }

    var i = t.getBoundingClientRect();
    return [n.clientX - i.left - t.clientLeft, n.clientY - i.top - t.clientTop];
  },
      ot = function ot(t) {
    var n = rt();
    return n.changedTouches && (n = n.changedTouches[0]), it(t, n);
  },
      at = function at(t, n, e) {
    arguments.length < 3 && (e = n, n = rt().changedTouches);

    for (var r, i = 0, o = n ? n.length : 0; i < o; ++i) {
      if ((r = n[i]).identifier === e) return it(t, r);
    }

    return null;
  },
      ut = e(4),
      st = {
    value: function value() {}
  };

  function ct() {
    for (var t, n = 0, e = arguments.length, r = {}; n < e; ++n) {
      if (!(t = arguments[n] + "") || t in r) throw new Error("illegal type: " + t);
      r[t] = [];
    }

    return new ht(r);
  }

  function ht(t) {
    this._ = t;
  }

  function lt(t, n) {
    for (var e, r = 0, i = t.length; r < i; ++r) {
      if ((e = t[r]).name === n) return e.value;
    }
  }

  function ft(t, n, e) {
    for (var r = 0, i = t.length; r < i; ++r) {
      if (t[r].name === n) {
        t[r] = st, t = t.slice(0, r).concat(t.slice(r + 1));
        break;
      }
    }

    return null != e && t.push({
      name: n,
      value: e
    }), t;
  }

  ht.prototype = ct.prototype = {
    constructor: ht,
    on: function on(t, n) {
      var e,
          r = this._,
          i = function (t, n) {
        return t.trim().split(/^|\s+/).map(function (t) {
          var e = "",
              r = t.indexOf(".");
          if (r >= 0 && (e = t.slice(r + 1), t = t.slice(0, r)), t && !n.hasOwnProperty(t)) throw new Error("unknown type: " + t);
          return {
            type: t,
            name: e
          };
        });
      }(t + "", r),
          o = -1,
          a = i.length;

      if (!(arguments.length < 2)) {
        if (null != n && "function" != typeof n) throw new Error("invalid callback: " + n);

        for (; ++o < a;) {
          if (e = (t = i[o]).type) r[e] = ft(r[e], t.name, n);else if (null == n) for (e in r) {
            r[e] = ft(r[e], t.name, null);
          }
        }

        return this;
      }

      for (; ++o < a;) {
        if ((e = (t = i[o]).type) && (e = lt(r[e], t.name))) return e;
      }
    },
    copy: function copy() {
      var t = {},
          n = this._;

      for (var e in n) {
        t[e] = n[e].slice();
      }

      return new ht(t);
    },
    call: function call(t, n) {
      if ((e = arguments.length - 2) > 0) for (var e, r, i = new Array(e), o = 0; o < e; ++o) {
        i[o] = arguments[o + 2];
      }
      if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);

      for (o = 0, e = (r = this._[t]).length; o < e; ++o) {
        r[o].value.apply(n, i);
      }
    },
    apply: function apply(t, n, e) {
      if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);

      for (var r = this._[t], i = 0, o = r.length; i < o; ++i) {
        r[i].value.apply(n, e);
      }
    }
  };
  var pt = ct;

  var dt = function dt() {
    F.preventDefault(), F.stopImmediatePropagation();
  },
      vt = function vt(t) {
    var n = t.document.documentElement,
        e = tt(t).on("dragstart.drag", dt, !0);
    "onselectstart" in n ? e.on("selectstart.drag", dt, !0) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none");
  };

  function yt(t, n) {
    var e = t.document.documentElement,
        r = tt(t).on("dragstart.drag", null);
    n && (r.on("click.drag", dt, !0), setTimeout(function () {
      r.on("click.drag", null);
    }, 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect);
  }

  function gt(t, n, e, r, i, o, a, u, s, c) {
    this.target = t, this.type = n, this.subject = e, this.identifier = r, this.active = i, this.x = o, this.y = a, this.dx = u, this.dy = s, this._ = c;
  }

  gt.prototype.on = function () {
    var t = this._.on.apply(this._, arguments);

    return t === this._ ? this : t;
  };

  var mt = function mt(t, n, e) {
    t.prototype = n.prototype = e, e.constructor = t;
  };

  function _t(t, n) {
    var e = Object.create(t.prototype);

    for (var r in n) {
      e[r] = n[r];
    }

    return e;
  }

  function wt() {}

  var xt = "\\s*([+-]?\\d+)\\s*",
      bt = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      Et = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      Mt = /^#([0-9a-f]{3})$/,
      kt = /^#([0-9a-f]{6})$/,
      St = new RegExp("^rgb\\(" + [xt, xt, xt] + "\\)$"),
      Nt = new RegExp("^rgb\\(" + [Et, Et, Et] + "\\)$"),
      At = new RegExp("^rgba\\(" + [xt, xt, xt, bt] + "\\)$"),
      Pt = new RegExp("^rgba\\(" + [Et, Et, Et, bt] + "\\)$"),
      zt = new RegExp("^hsl\\(" + [bt, Et, Et] + "\\)$"),
      Tt = new RegExp("^hsla\\(" + [bt, Et, Et, bt] + "\\)$"),
      Lt = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
  };

  function It(t) {
    var n;
    return t = (t + "").trim().toLowerCase(), (n = Mt.exec(t)) ? new Xt((n = parseInt(n[1], 16)) >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, (15 & n) << 4 | 15 & n, 1) : (n = kt.exec(t)) ? jt(parseInt(n[1], 16)) : (n = St.exec(t)) ? new Xt(n[1], n[2], n[3], 1) : (n = Nt.exec(t)) ? new Xt(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, 1) : (n = At.exec(t)) ? Ot(n[1], n[2], n[3], n[4]) : (n = Pt.exec(t)) ? Ot(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, n[4]) : (n = zt.exec(t)) ? qt(n[1], n[2] / 100, n[3] / 100, 1) : (n = Tt.exec(t)) ? qt(n[1], n[2] / 100, n[3] / 100, n[4]) : Lt.hasOwnProperty(t) ? jt(Lt[t]) : "transparent" === t ? new Xt(NaN, NaN, NaN, 0) : null;
  }

  function jt(t) {
    return new Xt(t >> 16 & 255, t >> 8 & 255, 255 & t, 1);
  }

  function Ot(t, n, e, r) {
    return r <= 0 && (t = n = e = NaN), new Xt(t, n, e, r);
  }

  function Ct(t) {
    return _instanceof(t, wt) || (t = It(t)), t ? new Xt((t = t.rgb()).r, t.g, t.b, t.opacity) : new Xt();
  }

  function Rt(t, n, e, r) {
    return 1 === arguments.length ? Ct(t) : new Xt(t, n, e, null == r ? 1 : r);
  }

  function Xt(t, n, e, r) {
    this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
  }

  function Yt(t) {
    return ((t = Math.max(0, Math.min(255, Math.round(t) || 0))) < 16 ? "0" : "") + t.toString(16);
  }

  function qt(t, n, e, r) {
    return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new Bt(t, n, e, r);
  }

  function Ut(t, n, e, r) {
    return 1 === arguments.length ? function (t) {
      if (_instanceof(t, Bt)) return new Bt(t.h, t.s, t.l, t.opacity);
      if (_instanceof(t, wt) || (t = It(t)), !t) return new Bt();
      if (_instanceof(t, Bt)) return t;
      var n = (t = t.rgb()).r / 255,
          e = t.g / 255,
          r = t.b / 255,
          i = Math.min(n, e, r),
          o = Math.max(n, e, r),
          a = NaN,
          u = o - i,
          s = (o + i) / 2;
      return u ? (a = n === o ? (e - r) / u + 6 * (e < r) : e === o ? (r - n) / u + 2 : (n - e) / u + 4, u /= s < .5 ? o + i : 2 - o - i, a *= 60) : u = s > 0 && s < 1 ? 0 : a, new Bt(a, u, s, t.opacity);
    }(t) : new Bt(t, n, e, null == r ? 1 : r);
  }

  function Bt(t, n, e, r) {
    this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
  }

  function Ft(t, n, e) {
    return 255 * (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n);
  }

  mt(wt, It, {
    displayable: function displayable() {
      return this.rgb().displayable();
    },
    hex: function hex() {
      return this.rgb().hex();
    },
    toString: function toString() {
      return this.rgb() + "";
    }
  }), mt(Xt, Rt, _t(wt, {
    brighter: function brighter(t) {
      return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new Xt(this.r * t, this.g * t, this.b * t, this.opacity);
    },
    darker: function darker(t) {
      return t = null == t ? .7 : Math.pow(.7, t), new Xt(this.r * t, this.g * t, this.b * t, this.opacity);
    },
    rgb: function rgb() {
      return this;
    },
    displayable: function displayable() {
      return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255 && 0 <= this.opacity && this.opacity <= 1;
    },
    hex: function hex() {
      return "#" + Yt(this.r) + Yt(this.g) + Yt(this.b);
    },
    toString: function toString() {
      var t = this.opacity;
      return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")");
    }
  })), mt(Bt, Ut, _t(wt, {
    brighter: function brighter(t) {
      return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new Bt(this.h, this.s, this.l * t, this.opacity);
    },
    darker: function darker(t) {
      return t = null == t ? .7 : Math.pow(.7, t), new Bt(this.h, this.s, this.l * t, this.opacity);
    },
    rgb: function rgb() {
      var t = this.h % 360 + 360 * (this.h < 0),
          n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
          e = this.l,
          r = e + (e < .5 ? e : 1 - e) * n,
          i = 2 * e - r;
      return new Xt(Ft(t >= 240 ? t - 240 : t + 120, i, r), Ft(t, i, r), Ft(t < 120 ? t + 240 : t - 120, i, r), this.opacity);
    },
    displayable: function displayable() {
      return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
    }
  }));
  var Gt = Math.PI / 180,
      Dt = 180 / Math.PI,
      Vt = .96422,
      $t = 1,
      Ht = .82521,
      Zt = 4 / 29,
      Wt = 6 / 29,
      Jt = 3 * Wt * Wt,
      Kt = Wt * Wt * Wt;

  function Qt(t) {
    if (_instanceof(t, nn)) return new nn(t.l, t.a, t.b, t.opacity);

    if (_instanceof(t, cn)) {
      if (isNaN(t.h)) return new nn(t.l, 0, 0, t.opacity);
      var n = t.h * Gt;
      return new nn(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity);
    }

    _instanceof(t, Xt) || (t = Ct(t));
    var e,
        r,
        i = an(t.r),
        o = an(t.g),
        a = an(t.b),
        u = en((.2225045 * i + .7168786 * o + .0606169 * a) / $t);
    return i === o && o === a ? e = r = u : (e = en((.4360747 * i + .3850649 * o + .1430804 * a) / Vt), r = en((.0139322 * i + .0971045 * o + .7141733 * a) / Ht)), new nn(116 * u - 16, 500 * (e - u), 200 * (u - r), t.opacity);
  }

  function tn(t, n, e, r) {
    return 1 === arguments.length ? Qt(t) : new nn(t, n, e, null == r ? 1 : r);
  }

  function nn(t, n, e, r) {
    this.l = +t, this.a = +n, this.b = +e, this.opacity = +r;
  }

  function en(t) {
    return t > Kt ? Math.pow(t, 1 / 3) : t / Jt + Zt;
  }

  function rn(t) {
    return t > Wt ? t * t * t : Jt * (t - Zt);
  }

  function on(t) {
    return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055);
  }

  function an(t) {
    return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4);
  }

  function un(t) {
    if (_instanceof(t, cn)) return new cn(t.h, t.c, t.l, t.opacity);
    if (_instanceof(t, nn) || (t = Qt(t)), 0 === t.a && 0 === t.b) return new cn(NaN, 0, t.l, t.opacity);
    var n = Math.atan2(t.b, t.a) * Dt;
    return new cn(n < 0 ? n + 360 : n, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity);
  }

  function sn(t, n, e, r) {
    return 1 === arguments.length ? un(t) : new cn(t, n, e, null == r ? 1 : r);
  }

  function cn(t, n, e, r) {
    this.h = +t, this.c = +n, this.l = +e, this.opacity = +r;
  }

  mt(nn, tn, _t(wt, {
    brighter: function brighter(t) {
      return new nn(this.l + 18 * (null == t ? 1 : t), this.a, this.b, this.opacity);
    },
    darker: function darker(t) {
      return new nn(this.l - 18 * (null == t ? 1 : t), this.a, this.b, this.opacity);
    },
    rgb: function rgb() {
      var t = (this.l + 16) / 116,
          n = isNaN(this.a) ? t : t + this.a / 500,
          e = isNaN(this.b) ? t : t - this.b / 200;
      return new Xt(on(3.1338561 * (n = Vt * rn(n)) - 1.6168667 * (t = $t * rn(t)) - .4906146 * (e = Ht * rn(e))), on(-.9787684 * n + 1.9161415 * t + .033454 * e), on(.0719453 * n - .2289914 * t + 1.4052427 * e), this.opacity);
    }
  })), mt(cn, sn, _t(wt, {
    brighter: function brighter(t) {
      return new cn(this.h, this.c, this.l + 18 * (null == t ? 1 : t), this.opacity);
    },
    darker: function darker(t) {
      return new cn(this.h, this.c, this.l - 18 * (null == t ? 1 : t), this.opacity);
    },
    rgb: function rgb() {
      return Qt(this).rgb();
    }
  }));
  var hn = -.14861,
      ln = 1.78277,
      fn = -.29227,
      pn = -.90649,
      dn = 1.97294,
      vn = dn * pn,
      yn = dn * ln,
      gn = ln * fn - pn * hn;

  function mn(t, n, e, r) {
    return 1 === arguments.length ? function (t) {
      if (_instanceof(t, _n)) return new _n(t.h, t.s, t.l, t.opacity);
      _instanceof(t, Xt) || (t = Ct(t));
      var n = t.r / 255,
          e = t.g / 255,
          r = t.b / 255,
          i = (gn * r + vn * n - yn * e) / (gn + vn - yn),
          o = r - i,
          a = (dn * (e - i) - fn * o) / pn,
          u = Math.sqrt(a * a + o * o) / (dn * i * (1 - i)),
          s = u ? Math.atan2(a, o) * Dt - 120 : NaN;
      return new _n(s < 0 ? s + 360 : s, u, i, t.opacity);
    }(t) : new _n(t, n, e, null == r ? 1 : r);
  }

  function _n(t, n, e, r) {
    this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
  }

  function wn(t, n, e, r, i) {
    var o = t * t,
        a = o * t;
    return ((1 - 3 * t + 3 * o - a) * n + (4 - 6 * o + 3 * a) * e + (1 + 3 * t + 3 * o - 3 * a) * r + a * i) / 6;
  }

  mt(_n, mn, _t(wt, {
    brighter: function brighter(t) {
      return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new _n(this.h, this.s, this.l * t, this.opacity);
    },
    darker: function darker(t) {
      return t = null == t ? .7 : Math.pow(.7, t), new _n(this.h, this.s, this.l * t, this.opacity);
    },
    rgb: function rgb() {
      var t = isNaN(this.h) ? 0 : (this.h + 120) * Gt,
          n = +this.l,
          e = isNaN(this.s) ? 0 : this.s * n * (1 - n),
          r = Math.cos(t),
          i = Math.sin(t);
      return new Xt(255 * (n + e * (hn * r + ln * i)), 255 * (n + e * (fn * r + pn * i)), 255 * (n + e * (dn * r)), this.opacity);
    }
  }));

  var xn = function xn(t) {
    return function () {
      return t;
    };
  };

  function bn(t, n) {
    return function (e) {
      return t + e * n;
    };
  }

  function En(t, n) {
    var e = n - t;
    return e ? bn(t, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e) : xn(isNaN(t) ? n : t);
  }

  function Mn(t) {
    return 1 == (t = +t) ? kn : function (n, e) {
      return e - n ? function (t, n, e) {
        return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function (r) {
          return Math.pow(t + r * n, e);
        };
      }(n, e, t) : xn(isNaN(n) ? e : n);
    };
  }

  function kn(t, n) {
    var e = n - t;
    return e ? bn(t, e) : xn(isNaN(t) ? n : t);
  }

  var Sn = function t(n) {
    var e = Mn(n);

    function r(t, n) {
      var r = e((t = Rt(t)).r, (n = Rt(n)).r),
          i = e(t.g, n.g),
          o = e(t.b, n.b),
          a = kn(t.opacity, n.opacity);
      return function (n) {
        return t.r = r(n), t.g = i(n), t.b = o(n), t.opacity = a(n), t + "";
      };
    }

    return r.gamma = t, r;
  }(1);

  function Nn(t) {
    return function (n) {
      var e,
          r,
          i = n.length,
          o = new Array(i),
          a = new Array(i),
          u = new Array(i);

      for (e = 0; e < i; ++e) {
        r = Rt(n[e]), o[e] = r.r || 0, a[e] = r.g || 0, u[e] = r.b || 0;
      }

      return o = t(o), a = t(a), u = t(u), r.opacity = 1, function (t) {
        return r.r = o(t), r.g = a(t), r.b = u(t), r + "";
      };
    };
  }

  Nn(function (t) {
    var n = t.length - 1;
    return function (e) {
      var r = e <= 0 ? e = 0 : e >= 1 ? (e = 1, n - 1) : Math.floor(e * n),
          i = t[r],
          o = t[r + 1],
          a = r > 0 ? t[r - 1] : 2 * i - o,
          u = r < n - 1 ? t[r + 2] : 2 * o - i;
      return wn((e - r / n) * n, a, i, o, u);
    };
  }), Nn(function (t) {
    var n = t.length;
    return function (e) {
      var r = Math.floor(((e %= 1) < 0 ? ++e : e) * n),
          i = t[(r + n - 1) % n],
          o = t[r % n],
          a = t[(r + 1) % n],
          u = t[(r + 2) % n];
      return wn((e - r / n) * n, i, o, a, u);
    };
  });

  var An = function An(t, n) {
    return n -= t = +t, function (e) {
      return t + n * e;
    };
  },
      Pn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      zn = new RegExp(Pn.source, "g");

  var Tn,
      Ln,
      In,
      jn,
      On = function On(t, n) {
    var e,
        r,
        i,
        o = Pn.lastIndex = zn.lastIndex = 0,
        a = -1,
        u = [],
        s = [];

    for (t += "", n += ""; (e = Pn.exec(t)) && (r = zn.exec(n));) {
      (i = r.index) > o && (i = n.slice(o, i), u[a] ? u[a] += i : u[++a] = i), (e = e[0]) === (r = r[0]) ? u[a] ? u[a] += r : u[++a] = r : (u[++a] = null, s.push({
        i: a,
        x: An(e, r)
      })), o = zn.lastIndex;
    }

    return o < n.length && (i = n.slice(o), u[a] ? u[a] += i : u[++a] = i), u.length < 2 ? s[0] ? function (t) {
      return function (n) {
        return t(n) + "";
      };
    }(s[0].x) : function (t) {
      return function () {
        return t;
      };
    }(n) : (n = s.length, function (t) {
      for (var e, r = 0; r < n; ++r) {
        u[(e = s[r]).i] = e.x(t);
      }

      return u.join("");
    });
  },
      Cn = 180 / Math.PI,
      Rn = {
    translateX: 0,
    translateY: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1
  },
      Xn = function Xn(t, n, e, r, i, o) {
    var a, u, s;
    return (a = Math.sqrt(t * t + n * n)) && (t /= a, n /= a), (s = t * e + n * r) && (e -= t * s, r -= n * s), (u = Math.sqrt(e * e + r * r)) && (e /= u, r /= u, s /= u), t * r < n * e && (t = -t, n = -n, s = -s, a = -a), {
      translateX: i,
      translateY: o,
      rotate: Math.atan2(n, t) * Cn,
      skewX: Math.atan(s) * Cn,
      scaleX: a,
      scaleY: u
    };
  };

  function Yn(t, n, e, r) {
    function i(t) {
      return t.length ? t.pop() + " " : "";
    }

    return function (o, a) {
      var u = [],
          s = [];
      return o = t(o), a = t(a), function (t, r, i, o, a, u) {
        if (t !== i || r !== o) {
          var s = a.push("translate(", null, n, null, e);
          u.push({
            i: s - 4,
            x: An(t, i)
          }, {
            i: s - 2,
            x: An(r, o)
          });
        } else (i || o) && a.push("translate(" + i + n + o + e);
      }(o.translateX, o.translateY, a.translateX, a.translateY, u, s), function (t, n, e, o) {
        t !== n ? (t - n > 180 ? n += 360 : n - t > 180 && (t += 360), o.push({
          i: e.push(i(e) + "rotate(", null, r) - 2,
          x: An(t, n)
        })) : n && e.push(i(e) + "rotate(" + n + r);
      }(o.rotate, a.rotate, u, s), function (t, n, e, o) {
        t !== n ? o.push({
          i: e.push(i(e) + "skewX(", null, r) - 2,
          x: An(t, n)
        }) : n && e.push(i(e) + "skewX(" + n + r);
      }(o.skewX, a.skewX, u, s), function (t, n, e, r, o, a) {
        if (t !== e || n !== r) {
          var u = o.push(i(o) + "scale(", null, ",", null, ")");
          a.push({
            i: u - 4,
            x: An(t, e)
          }, {
            i: u - 2,
            x: An(n, r)
          });
        } else 1 === e && 1 === r || o.push(i(o) + "scale(" + e + "," + r + ")");
      }(o.scaleX, o.scaleY, a.scaleX, a.scaleY, u, s), o = a = null, function (t) {
        for (var n, e = -1, r = s.length; ++e < r;) {
          u[(n = s[e]).i] = n.x(t);
        }

        return u.join("");
      };
    };
  }

  var qn = Yn(function (t) {
    return "none" === t ? Rn : (Tn || (Tn = document.createElement("DIV"), Ln = document.documentElement, In = document.defaultView), Tn.style.transform = t, t = In.getComputedStyle(Ln.appendChild(Tn), null).getPropertyValue("transform"), Ln.removeChild(Tn), t = t.slice(7, -1).split(","), Xn(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]));
  }, "px, ", "px)", "deg)"),
      Un = Yn(function (t) {
    return null == t ? Rn : (jn || (jn = document.createElementNS("http://www.w3.org/2000/svg", "g")), jn.setAttribute("transform", t), (t = jn.transform.baseVal.consolidate()) ? (t = t.matrix, Xn(t.a, t.b, t.c, t.d, t.e, t.f)) : Rn);
  }, ", ", ")", ")"),
      Bn = Math.SQRT2;

  function Fn(t) {
    return ((t = Math.exp(t)) + 1 / t) / 2;
  }

  var Gn = function Gn(t, n) {
    var e,
        r,
        i = t[0],
        o = t[1],
        a = t[2],
        u = n[0],
        s = n[1],
        c = n[2],
        h = u - i,
        l = s - o,
        f = h * h + l * l;
    if (f < 1e-12) r = Math.log(c / a) / Bn, e = function e(t) {
      return [i + t * h, o + t * l, a * Math.exp(Bn * t * r)];
    };else {
      var p = Math.sqrt(f),
          d = (c * c - a * a + 4 * f) / (2 * a * 2 * p),
          v = (c * c - a * a - 4 * f) / (2 * c * 2 * p),
          y = Math.log(Math.sqrt(d * d + 1) - d),
          g = Math.log(Math.sqrt(v * v + 1) - v);
      r = (g - y) / Bn, e = function e(t) {
        var n = t * r,
            e = Fn(y),
            u = a / (2 * p) * (e * function (t) {
          return ((t = Math.exp(2 * t)) - 1) / (t + 1);
        }(Bn * n + y) - function (t) {
          return ((t = Math.exp(t)) - 1 / t) / 2;
        }(y));

        return [i + u * h, o + u * l, a * e / Fn(Bn * n + y)];
      };
    }
    return e.duration = 1e3 * r, e;
  };

  function Dn(t) {
    return function (n, e) {
      var r = t((n = Ut(n)).h, (e = Ut(e)).h),
          i = kn(n.s, e.s),
          o = kn(n.l, e.l),
          a = kn(n.opacity, e.opacity);
      return function (t) {
        return n.h = r(t), n.s = i(t), n.l = o(t), n.opacity = a(t), n + "";
      };
    };
  }

  Dn(En), Dn(kn);

  function Vn(t) {
    return function (n, e) {
      var r = t((n = sn(n)).h, (e = sn(e)).h),
          i = kn(n.c, e.c),
          o = kn(n.l, e.l),
          a = kn(n.opacity, e.opacity);
      return function (t) {
        return n.h = r(t), n.c = i(t), n.l = o(t), n.opacity = a(t), n + "";
      };
    };
  }

  Vn(En), Vn(kn);

  function $n(t) {
    return function n(e) {
      function r(n, r) {
        var i = t((n = mn(n)).h, (r = mn(r)).h),
            o = kn(n.s, r.s),
            a = kn(n.l, r.l),
            u = kn(n.opacity, r.opacity);
        return function (t) {
          return n.h = i(t), n.s = o(t), n.l = a(Math.pow(t, e)), n.opacity = u(t), n + "";
        };
      }

      return e = +e, r.gamma = n, r;
    }(1);
  }

  $n(En), $n(kn);
  var Hn,
      Zn,
      Wn = 0,
      Jn = 0,
      Kn = 0,
      Qn = 1e3,
      te = 0,
      ne = 0,
      ee = 0,
      re = "object" == (typeof performance === "undefined" ? "undefined" : _typeof(performance)) && performance.now ? performance : Date,
      ie = "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function (t) {
    setTimeout(t, 17);
  };

  function oe() {
    return ne || (ie(ae), ne = re.now() + ee);
  }

  function ae() {
    ne = 0;
  }

  function ue() {
    this._call = this._time = this._next = null;
  }

  function se(t, n, e) {
    var r = new ue();
    return r.restart(t, n, e), r;
  }

  function ce() {
    ne = (te = re.now()) + ee, Wn = Jn = 0;

    try {
      !function () {
        oe(), ++Wn;

        for (var t, n = Hn; n;) {
          (t = ne - n._time) >= 0 && n._call.call(null, t), n = n._next;
        }

        --Wn;
      }();
    } finally {
      Wn = 0, function () {
        var t,
            n,
            e = Hn,
            r = 1 / 0;

        for (; e;) {
          e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : Hn = n);
        }

        Zn = t, le(r);
      }(), ne = 0;
    }
  }

  function he() {
    var t = re.now(),
        n = t - te;
    n > Qn && (ee -= n, te = t);
  }

  function le(t) {
    Wn || (Jn && (Jn = clearTimeout(Jn)), t - ne > 24 ? (t < 1 / 0 && (Jn = setTimeout(ce, t - re.now() - ee)), Kn && (Kn = clearInterval(Kn))) : (Kn || (te = re.now(), Kn = setInterval(he, Qn)), Wn = 1, ie(ce)));
  }

  ue.prototype = se.prototype = {
    constructor: ue,
    restart: function restart(t, n, e) {
      if ("function" != typeof t) throw new TypeError("callback is not a function");
      e = (null == e ? oe() : +e) + (null == n ? 0 : +n), this._next || Zn === this || (Zn ? Zn._next = this : Hn = this, Zn = this), this._call = t, this._time = e, le();
    },
    stop: function stop() {
      this._call && (this._call = null, this._time = 1 / 0, le());
    }
  };

  var fe = function fe(t, n, e) {
    var r = new ue();
    return n = null == n ? 0 : +n, r.restart(function (e) {
      r.stop(), t(e + n);
    }, n, e), r;
  },
      pe = pt("start", "end", "interrupt"),
      de = [],
      ve = 0,
      ye = 1,
      ge = 2,
      me = 3,
      _e = 4,
      we = 5,
      xe = 6,
      be = function be(t, n, e, r, i, o) {
    var a = t.__transition;

    if (a) {
      if (e in a) return;
    } else t.__transition = {};

    !function (t, n, e) {
      var r,
          i = t.__transition;

      function o(s) {
        var c, h, l, f;
        if (e.state !== ye) return u();

        for (c in i) {
          if ((f = i[c]).name === e.name) {
            if (f.state === me) return fe(o);
            f.state === _e ? (f.state = xe, f.timer.stop(), f.on.call("interrupt", t, t.__data__, f.index, f.group), delete i[c]) : +c < n && (f.state = xe, f.timer.stop(), delete i[c]);
          }
        }

        if (fe(function () {
          e.state === me && (e.state = _e, e.timer.restart(a, e.delay, e.time), a(s));
        }), e.state = ge, e.on.call("start", t, t.__data__, e.index, e.group), e.state === ge) {
          for (e.state = me, r = new Array(l = e.tween.length), c = 0, h = -1; c < l; ++c) {
            (f = e.tween[c].value.call(t, t.__data__, e.index, e.group)) && (r[++h] = f);
          }

          r.length = h + 1;
        }
      }

      function a(n) {
        for (var i = n < e.duration ? e.ease.call(null, n / e.duration) : (e.timer.restart(u), e.state = we, 1), o = -1, a = r.length; ++o < a;) {
          r[o].call(null, i);
        }

        e.state === we && (e.on.call("end", t, t.__data__, e.index, e.group), u());
      }

      function u() {
        for (var r in e.state = xe, e.timer.stop(), delete i[n], i) {
          return;
        }

        delete t.__transition;
      }

      i[n] = e, e.timer = se(function (t) {
        e.state = ye, e.timer.restart(o, e.delay, e.time), e.delay <= t && o(t - e.delay);
      }, 0, e.time);
    }(t, e, {
      name: n,
      index: r,
      group: i,
      on: pe,
      tween: de,
      time: o.time,
      delay: o.delay,
      duration: o.duration,
      ease: o.ease,
      timer: null,
      state: ve
    });
  };

  function Ee(t, n) {
    var e = ke(t, n);
    if (e.state > ve) throw new Error("too late; already scheduled");
    return e;
  }

  function Me(t, n) {
    var e = ke(t, n);
    if (e.state > ge) throw new Error("too late; already started");
    return e;
  }

  function ke(t, n) {
    var e = t.__transition;
    if (!e || !(e = e[n])) throw new Error("transition not found");
    return e;
  }

  var Se = function Se(t, n) {
    var e,
        r,
        i,
        o = t.__transition,
        a = !0;

    if (o) {
      for (i in n = null == n ? null : n + "", o) {
        (e = o[i]).name === n ? (r = e.state > ge && e.state < we, e.state = xe, e.timer.stop(), r && e.on.call("interrupt", t, t.__data__, e.index, e.group), delete o[i]) : a = !1;
      }

      a && delete t.__transition;
    }
  };

  function Ne(t, n, e) {
    var r = t._id;
    return t.each(function () {
      var t = Me(this, r);
      (t.value || (t.value = {}))[n] = e.apply(this, arguments);
    }), function (t) {
      return ke(t, r).value[n];
    };
  }

  var Ae = function Ae(t, n) {
    var e;
    return ("number" == typeof n ? An : _instanceof(n, It) ? Sn : (e = It(n)) ? (n = e, Sn) : On)(t, n);
  };

  var Pe = Q.prototype.constructor;
  var ze = 0;

  function Te(t, n, e, r) {
    this._groups = t, this._parents = n, this._name = e, this._id = r;
  }

  function Le() {
    return ++ze;
  }

  var Ie = Q.prototype;

  Te.prototype = function (t) {
    return Q().transition(t);
  }.prototype = {
    constructor: Te,
    select: function select(t) {
      var n = this._name,
          e = this._id;
      "function" != typeof t && (t = d(t));

      for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a) {
        for (var u, s, c = r[a], h = c.length, l = o[a] = new Array(h), f = 0; f < h; ++f) {
          (u = c[f]) && (s = t.call(u, u.__data__, f, c)) && ("__data__" in u && (s.__data__ = u.__data__), l[f] = s, be(l[f], n, e, f, l, ke(u, e)));
        }
      }

      return new Te(o, this._parents, n, e);
    },
    selectAll: function selectAll(t) {
      var n = this._name,
          e = this._id;
      "function" != typeof t && (t = y(t));

      for (var r = this._groups, i = r.length, o = [], a = [], u = 0; u < i; ++u) {
        for (var s, c = r[u], h = c.length, l = 0; l < h; ++l) {
          if (s = c[l]) {
            for (var f, p = t.call(s, s.__data__, l, c), d = ke(s, e), v = 0, g = p.length; v < g; ++v) {
              (f = p[v]) && be(f, n, e, v, p, d);
            }

            o.push(p), a.push(s);
          }
        }
      }

      return new Te(o, a, n, e);
    },
    filter: function filter(t) {
      "function" != typeof t && (t = w(t));

      for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i) {
        for (var o, a = n[i], u = a.length, s = r[i] = [], c = 0; c < u; ++c) {
          (o = a[c]) && t.call(o, o.__data__, c, a) && s.push(o);
        }
      }

      return new Te(r, this._parents, this._name, this._id);
    },
    merge: function merge(t) {
      if (t._id !== this._id) throw new Error();

      for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), a = new Array(r), u = 0; u < o; ++u) {
        for (var s, c = n[u], h = e[u], l = c.length, f = a[u] = new Array(l), p = 0; p < l; ++p) {
          (s = c[p] || h[p]) && (f[p] = s);
        }
      }

      for (; u < r; ++u) {
        a[u] = n[u];
      }

      return new Te(a, this._parents, this._name, this._id);
    },
    selection: function selection() {
      return new Pe(this._groups, this._parents);
    },
    transition: function transition() {
      for (var t = this._name, n = this._id, e = Le(), r = this._groups, i = r.length, o = 0; o < i; ++o) {
        for (var a, u = r[o], s = u.length, c = 0; c < s; ++c) {
          if (a = u[c]) {
            var h = ke(a, n);
            be(a, t, e, c, u, {
              time: h.time + h.delay + h.duration,
              delay: 0,
              duration: h.duration,
              ease: h.ease
            });
          }
        }
      }

      return new Te(r, this._parents, t, e);
    },
    call: Ie.call,
    nodes: Ie.nodes,
    node: Ie.node,
    size: Ie.size,
    empty: Ie.empty,
    each: Ie.each,
    on: function on(t, n) {
      var e = this._id;
      return arguments.length < 2 ? ke(this.node(), e).on.on(t) : this.each(function (t, n, e) {
        var r,
            i,
            o = function (t) {
          return (t + "").trim().split(/^|\s+/).every(function (t) {
            var n = t.indexOf(".");
            return n >= 0 && (t = t.slice(0, n)), !t || "start" === t;
          });
        }(n) ? Ee : Me;
        return function () {
          var a = o(this, t),
              u = a.on;
          u !== r && (i = (r = u).copy()).on(n, e), a.on = i;
        };
      }(e, t, n));
    },
    attr: function attr(t, n) {
      var e = l(t),
          r = "transform" === e ? Un : Ae;
      return this.attrTween(t, "function" == typeof n ? (e.local ? function (t, n, e) {
        var r, i, o;
        return function () {
          var a,
              u = e(this);
          if (null != u) return (a = this.getAttributeNS(t.space, t.local)) === u ? null : a === r && u === i ? o : o = n(r = a, i = u);
          this.removeAttributeNS(t.space, t.local);
        };
      } : function (t, n, e) {
        var r, i, o;
        return function () {
          var a,
              u = e(this);
          if (null != u) return (a = this.getAttribute(t)) === u ? null : a === r && u === i ? o : o = n(r = a, i = u);
          this.removeAttribute(t);
        };
      })(e, r, Ne(this, "attr." + t, n)) : null == n ? (e.local ? function (t) {
        return function () {
          this.removeAttributeNS(t.space, t.local);
        };
      } : function (t) {
        return function () {
          this.removeAttribute(t);
        };
      })(e) : (e.local ? function (t, n, e) {
        var r, i;
        return function () {
          var o = this.getAttributeNS(t.space, t.local);
          return o === e ? null : o === r ? i : i = n(r = o, e);
        };
      } : function (t, n, e) {
        var r, i;
        return function () {
          var o = this.getAttribute(t);
          return o === e ? null : o === r ? i : i = n(r = o, e);
        };
      })(e, r, n + ""));
    },
    attrTween: function attrTween(t, n) {
      var e = "attr." + t;
      if (arguments.length < 2) return (e = this.tween(e)) && e._value;
      if (null == n) return this.tween(e, null);
      if ("function" != typeof n) throw new Error();
      var r = l(t);
      return this.tween(e, (r.local ? function (t, n) {
        function e() {
          var e = this,
              r = n.apply(e, arguments);
          return r && function (n) {
            e.setAttributeNS(t.space, t.local, r(n));
          };
        }

        return e._value = n, e;
      } : function (t, n) {
        function e() {
          var e = this,
              r = n.apply(e, arguments);
          return r && function (n) {
            e.setAttribute(t, r(n));
          };
        }

        return e._value = n, e;
      })(r, n));
    },
    style: function style(t, n, e) {
      var r = "transform" == (t += "") ? qn : Ae;
      return null == n ? this.styleTween(t, function (t, n) {
        var e, r, i;
        return function () {
          var o = A(this, t),
              a = (this.style.removeProperty(t), A(this, t));
          return o === a ? null : o === e && a === r ? i : i = n(e = o, r = a);
        };
      }(t, r)).on("end.style." + t, function (t) {
        return function () {
          this.style.removeProperty(t);
        };
      }(t)) : this.styleTween(t, "function" == typeof n ? function (t, n, e) {
        var r, i, o;
        return function () {
          var a = A(this, t),
              u = e(this);
          return null == u && (this.style.removeProperty(t), u = A(this, t)), a === u ? null : a === r && u === i ? o : o = n(r = a, i = u);
        };
      }(t, r, Ne(this, "style." + t, n)) : function (t, n, e) {
        var r, i;
        return function () {
          var o = A(this, t);
          return o === e ? null : o === r ? i : i = n(r = o, e);
        };
      }(t, r, n + ""), e);
    },
    styleTween: function styleTween(t, n, e) {
      var r = "style." + (t += "");
      if (arguments.length < 2) return (r = this.tween(r)) && r._value;
      if (null == n) return this.tween(r, null);
      if ("function" != typeof n) throw new Error();
      return this.tween(r, function (t, n, e) {
        function r() {
          var r = this,
              i = n.apply(r, arguments);
          return i && function (n) {
            r.style.setProperty(t, i(n), e);
          };
        }

        return r._value = n, r;
      }(t, n, null == e ? "" : e));
    },
    text: function text(t) {
      return this.tween("text", "function" == typeof t ? function (t) {
        return function () {
          var n = t(this);
          this.textContent = null == n ? "" : n;
        };
      }(Ne(this, "text", t)) : function (t) {
        return function () {
          this.textContent = t;
        };
      }(null == t ? "" : t + ""));
    },
    remove: function remove() {
      return this.on("end.remove", function (t) {
        return function () {
          var n = this.parentNode;

          for (var e in this.__transition) {
            if (+e !== t) return;
          }

          n && n.removeChild(this);
        };
      }(this._id));
    },
    tween: function tween(t, n) {
      var e = this._id;

      if (t += "", arguments.length < 2) {
        for (var r, i = ke(this.node(), e).tween, o = 0, a = i.length; o < a; ++o) {
          if ((r = i[o]).name === t) return r.value;
        }

        return null;
      }

      return this.each((null == n ? function (t, n) {
        var e, r;
        return function () {
          var i = Me(this, t),
              o = i.tween;
          if (o !== e) for (var a = 0, u = (r = e = o).length; a < u; ++a) {
            if (r[a].name === n) {
              (r = r.slice()).splice(a, 1);
              break;
            }
          }
          i.tween = r;
        };
      } : function (t, n, e) {
        var r, i;
        if ("function" != typeof e) throw new Error();
        return function () {
          var o = Me(this, t),
              a = o.tween;

          if (a !== r) {
            i = (r = a).slice();

            for (var u = {
              name: n,
              value: e
            }, s = 0, c = i.length; s < c; ++s) {
              if (i[s].name === n) {
                i[s] = u;
                break;
              }
            }

            s === c && i.push(u);
          }

          o.tween = i;
        };
      })(e, t, n));
    },
    delay: function delay(t) {
      var n = this._id;
      return arguments.length ? this.each(("function" == typeof t ? function (t, n) {
        return function () {
          Ee(this, t).delay = +n.apply(this, arguments);
        };
      } : function (t, n) {
        return n = +n, function () {
          Ee(this, t).delay = n;
        };
      })(n, t)) : ke(this.node(), n).delay;
    },
    duration: function duration(t) {
      var n = this._id;
      return arguments.length ? this.each(("function" == typeof t ? function (t, n) {
        return function () {
          Me(this, t).duration = +n.apply(this, arguments);
        };
      } : function (t, n) {
        return n = +n, function () {
          Me(this, t).duration = n;
        };
      })(n, t)) : ke(this.node(), n).duration;
    },
    ease: function ease(t) {
      var n = this._id;
      return arguments.length ? this.each(function (t, n) {
        if ("function" != typeof n) throw new Error();
        return function () {
          Me(this, t).ease = n;
        };
      }(n, t)) : ke(this.node(), n).ease;
    }
  };

  (function t(n) {
    function e(t) {
      return Math.pow(t, n);
    }

    return n = +n, e.exponent = t, e;
  })(3), function t(n) {
    function e(t) {
      return 1 - Math.pow(1 - t, n);
    }

    return n = +n, e.exponent = t, e;
  }(3), function t(n) {
    function e(t) {
      return ((t *= 2) <= 1 ? Math.pow(t, n) : 2 - Math.pow(2 - t, n)) / 2;
    }

    return n = +n, e.exponent = t, e;
  }(3), Math.PI;
  (function t(n) {
    function e(t) {
      return t * t * ((n + 1) * t - n);
    }

    return n = +n, e.overshoot = t, e;
  })(1.70158), function t(n) {
    function e(t) {
      return --t * t * ((n + 1) * t + n) + 1;
    }

    return n = +n, e.overshoot = t, e;
  }(1.70158), function t(n) {
    function e(t) {
      return ((t *= 2) < 1 ? t * t * ((n + 1) * t - n) : (t -= 2) * t * ((n + 1) * t + n) + 2) / 2;
    }

    return n = +n, e.overshoot = t, e;
  }(1.70158);
  var je = 2 * Math.PI,
      Oe = (function t(n, e) {
    var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= je);

    function i(t) {
      return n * Math.pow(2, 10 * --t) * Math.sin((r - t) / e);
    }

    return i.amplitude = function (n) {
      return t(n, e * je);
    }, i.period = function (e) {
      return t(n, e);
    }, i;
  }(1, .3), function t(n, e) {
    var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= je);

    function i(t) {
      return 1 - n * Math.pow(2, -10 * (t = +t)) * Math.sin((t + r) / e);
    }

    return i.amplitude = function (n) {
      return t(n, e * je);
    }, i.period = function (e) {
      return t(n, e);
    }, i;
  }(1, .3), function t(n, e) {
    var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= je);

    function i(t) {
      return ((t = 2 * t - 1) < 0 ? n * Math.pow(2, 10 * t) * Math.sin((r - t) / e) : 2 - n * Math.pow(2, -10 * t) * Math.sin((r + t) / e)) / 2;
    }

    return i.amplitude = function (n) {
      return t(n, e * je);
    }, i.period = function (e) {
      return t(n, e);
    }, i;
  }(1, .3), {
    time: null,
    delay: 0,
    duration: 250,
    ease: function ease(t) {
      return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
    }
  });

  function Ce(t, n) {
    for (var e; !(e = t.__transition) || !(e = e[n]);) {
      if (!(t = t.parentNode)) return Oe.time = oe(), Oe;
    }

    return e;
  }

  Q.prototype.interrupt = function (t) {
    return this.each(function () {
      Se(this, t);
    });
  }, Q.prototype.transition = function (t) {
    var n, e;
    _instanceof(t, Te) ? (n = t._id, t = t._name) : (n = Le(), (e = Oe).time = oe(), t = null == t ? null : t + "");

    for (var r = this._groups, i = r.length, o = 0; o < i; ++o) {
      for (var a, u = r[o], s = u.length, c = 0; c < s; ++c) {
        (a = u[c]) && be(a, t, n, c, u, e || Ce(a, n));
      }
    }

    return new Te(r, this._parents, t, n);
  };

  var Re = function Re(t) {
    return function () {
      return t;
    };
  };

  function Xe(t, n, e) {
    this.k = t, this.x = n, this.y = e;
  }

  Xe.prototype = {
    constructor: Xe,
    scale: function scale(t) {
      return 1 === t ? this : new Xe(this.k * t, this.x, this.y);
    },
    translate: function translate(t, n) {
      return 0 === t & 0 === n ? this : new Xe(this.k, this.x + this.k * t, this.y + this.k * n);
    },
    apply: function apply(t) {
      return [t[0] * this.k + this.x, t[1] * this.k + this.y];
    },
    applyX: function applyX(t) {
      return t * this.k + this.x;
    },
    applyY: function applyY(t) {
      return t * this.k + this.y;
    },
    invert: function invert(t) {
      return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
    },
    invertX: function invertX(t) {
      return (t - this.x) / this.k;
    },
    invertY: function invertY(t) {
      return (t - this.y) / this.k;
    },
    rescaleX: function rescaleX(t) {
      return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
    },
    rescaleY: function rescaleY(t) {
      return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
    },
    toString: function toString() {
      return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
    }
  };
  var Ye = new Xe(1, 0, 0);

  function qe(t) {
    return t.__zoom || Ye;
  }

  function Ue() {
    F.stopImmediatePropagation();
  }

  qe.prototype = Xe.prototype;

  var Be = function Be() {
    F.preventDefault(), F.stopImmediatePropagation();
  };

  function Fe() {
    return !F.button;
  }

  function Ge() {
    var t,
        n,
        e = this;
    return _instanceof(e, SVGElement) ? (t = (e = e.ownerSVGElement || e).width.baseVal.value, n = e.height.baseVal.value) : (t = e.clientWidth, n = e.clientHeight), [[0, 0], [t, n]];
  }

  function De() {
    return this.__zoom || Ye;
  }

  function Ve() {
    return -F.deltaY * (F.deltaMode ? 120 : 1) / 500;
  }

  function $e() {
    return "ontouchstart" in this;
  }

  function He(t, n, e) {
    var r = t.invertX(n[0][0]) - e[0][0],
        i = t.invertX(n[1][0]) - e[1][0],
        o = t.invertY(n[0][1]) - e[0][1],
        a = t.invertY(n[1][1]) - e[1][1];
    return t.translate(i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i), a > o ? (o + a) / 2 : Math.min(0, o) || Math.max(0, a));
  }

  var Ze = function Ze(t) {
    return t;
  },
      We = function We(t) {
    if (null == t) return Ze;
    var n,
        e,
        r = t.scale[0],
        i = t.scale[1],
        o = t.translate[0],
        a = t.translate[1];
    return function (t, u) {
      u || (n = e = 0);
      var s = 2,
          c = t.length,
          h = new Array(c);

      for (h[0] = (n += t[0]) * r + o, h[1] = (e += t[1]) * i + a; s < c;) {
        h[s] = t[s], ++s;
      }

      return h;
    };
  },
      Je = function Je(t, n) {
    for (var e, r = t.length, i = r - n; i < --r;) {
      e = t[i], t[i++] = t[r], t[r] = e;
    }
  },
      Ke = function Ke(t, n) {
    return "GeometryCollection" === n.type ? {
      type: "FeatureCollection",
      features: n.geometries.map(function (n) {
        return Qe(t, n);
      })
    } : Qe(t, n);
  };

  function Qe(t, n) {
    var e = n.id,
        r = n.bbox,
        i = null == n.properties ? {} : n.properties,
        o = tr(t, n);
    return null == e && null == r ? {
      type: "Feature",
      properties: i,
      geometry: o
    } : null == r ? {
      type: "Feature",
      id: e,
      properties: i,
      geometry: o
    } : {
      type: "Feature",
      id: e,
      bbox: r,
      properties: i,
      geometry: o
    };
  }

  function tr(t, n) {
    var e = We(t.transform),
        r = t.arcs;

    function i(t, n) {
      n.length && n.pop();

      for (var i = r[t < 0 ? ~t : t], o = 0, a = i.length; o < a; ++o) {
        n.push(e(i[o], o));
      }

      t < 0 && Je(n, a);
    }

    function o(t) {
      return e(t);
    }

    function a(t) {
      for (var n = [], e = 0, r = t.length; e < r; ++e) {
        i(t[e], n);
      }

      return n.length < 2 && n.push(n[0]), n;
    }

    function u(t) {
      for (var n = a(t); n.length < 4;) {
        n.push(n[0]);
      }

      return n;
    }

    function s(t) {
      return t.map(u);
    }

    return function t(n) {
      var e,
          r = n.type;

      switch (r) {
        case "GeometryCollection":
          return {
            type: r,
            geometries: n.geometries.map(t)
          };

        case "Point":
          e = o(n.coordinates);
          break;

        case "MultiPoint":
          e = n.coordinates.map(o);
          break;

        case "LineString":
          e = a(n.arcs);
          break;

        case "MultiLineString":
          e = n.arcs.map(a);
          break;

        case "Polygon":
          e = s(n.arcs);
          break;

        case "MultiPolygon":
          e = n.arcs.map(s);
          break;

        default:
          return null;
      }

      return {
        type: r,
        coordinates: e
      };
    }(n);
  }

  var nr = function nr(t, n) {
    var e = {},
        r = {},
        i = {},
        o = [],
        a = -1;

    function u(t, n) {
      for (var r in t) {
        var i = t[r];
        delete n[i.start], delete i.start, delete i.end, i.forEach(function (t) {
          e[t < 0 ? ~t : t] = 1;
        }), o.push(i);
      }
    }

    return n.forEach(function (e, r) {
      var i,
          o = t.arcs[e < 0 ? ~e : e];
      o.length < 3 && !o[1][0] && !o[1][1] && (i = n[++a], n[a] = e, n[r] = i);
    }), n.forEach(function (n) {
      var e,
          o,
          a = function (n) {
        var e,
            r = t.arcs[n < 0 ? ~n : n],
            i = r[0];
        t.transform ? (e = [0, 0], r.forEach(function (t) {
          e[0] += t[0], e[1] += t[1];
        })) : e = r[r.length - 1];
        return n < 0 ? [e, i] : [i, e];
      }(n),
          u = a[0],
          s = a[1];

      if (e = i[u]) {
        if (delete i[e.end], e.push(n), e.end = s, o = r[s]) {
          delete r[o.start];
          var c = o === e ? e : e.concat(o);
          r[c.start = e.start] = i[c.end = o.end] = c;
        } else r[e.start] = i[e.end] = e;
      } else if (e = r[s]) {
        if (delete r[e.start], e.unshift(n), e.start = u, o = i[u]) {
          delete i[o.end];
          var h = o === e ? e : o.concat(e);
          r[h.start = o.start] = i[h.end = e.end] = h;
        } else r[e.start] = i[e.end] = e;
      } else r[(e = [n]).start = u] = i[e.end = s] = e;
    }), u(i, r), u(r, i), n.forEach(function (t) {
      e[t < 0 ? ~t : t] || o.push([t]);
    }), o;
  },
      er = function er(t) {
    return tr(t, function (t, n, e) {
      var r, i, o;
      if (arguments.length > 1) r = function (t, n, e) {
        var r,
            i = [],
            o = [];

        function a(t) {
          var n = t < 0 ? ~t : t;
          (o[n] || (o[n] = [])).push({
            i: t,
            g: r
          });
        }

        function u(t) {
          t.forEach(a);
        }

        function s(t) {
          t.forEach(u);
        }

        return function t(n) {
          switch (r = n, n.type) {
            case "GeometryCollection":
              n.geometries.forEach(t);
              break;

            case "LineString":
              u(n.arcs);
              break;

            case "MultiLineString":
            case "Polygon":
              s(n.arcs);
              break;

            case "MultiPolygon":
              !function (t) {
                t.forEach(s);
              }(n.arcs);
          }
        }(n), o.forEach(null == e ? function (t) {
          i.push(t[0].i);
        } : function (t) {
          e(t[0].g, t[t.length - 1].g) && i.push(t[0].i);
        }), i;
      }(0, n, e);else for (i = 0, r = new Array(o = t.arcs.length); i < o; ++i) {
        r[i] = i;
      }
      return {
        type: "MultiLineString",
        arcs: nr(t, r)
      };
    }.apply(this, arguments));
  };

  var rr = new ArrayBuffer(16);
  new Float64Array(rr), new Uint32Array(rr);
  Math.PI, Math.abs, Math.atan2, Math.cos, Math.sin;

  var ir =
  /*#__PURE__*/
  function () {
    function ir() {
      _classCallCheck(this, ir);

      this.ids = [], this.values = [], this.length = 0;
    }

    _createClass(ir, [{
      key: "clear",
      value: function clear() {
        this.length = this.ids.length = this.values.length = 0;
      }
    }, {
      key: "push",
      value: function push(t, n) {
        this.ids.push(t), this.values.push(n);
        var e = this.length++;

        for (; e > 0;) {
          var _t2 = e - 1 >> 1,
              _r = this.values[_t2];

          if (n >= _r) break;
          this.ids[e] = this.ids[_t2], this.values[e] = _r, e = _t2;
        }

        this.ids[e] = t, this.values[e] = n;
      }
    }, {
      key: "pop",
      value: function pop() {
        if (0 === this.length) return;
        var t = this.ids[0];

        if (this.length--, this.length > 0) {
          var _t3 = this.ids[0] = this.ids[this.length],
              _n2 = this.values[0] = this.values[this.length],
              _e2 = this.length >> 1;

          var _r2 = 0;

          for (; _r2 < _e2;) {
            var _t4 = 1 + (_r2 << 1);

            var _e3 = _t4 + 1;

            var _i = this.ids[_t4],
                _o = this.values[_t4];
            var _a = this.values[_e3];
            if (_e3 < this.length && _a < _o && (_t4 = _e3, _i = this.ids[_e3], _o = _a), _o >= _n2) break;
            this.ids[_r2] = _i, this.values[_r2] = _o, _r2 = _t4;
          }

          this.ids[_r2] = _t3, this.values[_r2] = _n2;
        }

        return this.ids.pop(), this.values.pop(), t;
      }
    }, {
      key: "peek",
      value: function peek() {
        return this.ids[0];
      }
    }, {
      key: "peekValue",
      value: function peekValue() {
        return this.values[0];
      }
    }]);

    return ir;
  }();

  var or = [Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array],
      ar = 3;

  var ur =
  /*#__PURE__*/
  function () {
    _createClass(ur, null, [{
      key: "from",
      value: function from(t) {
        if (!_instanceof(t, ArrayBuffer)) throw new Error("Data must be an instance of ArrayBuffer.");

        var _ref = new Uint8Array(t, 0, 2),
            _ref2 = _slicedToArray(_ref, 2),
            n = _ref2[0],
            e = _ref2[1];

        if (251 !== n) throw new Error("Data does not appear to be in a Flatbush format.");
        if (e >> 4 !== ar) throw new Error("Got v".concat(e >> 4, " data when expected v").concat(ar, "."));

        var _ref3 = new Uint16Array(t, 2, 1),
            _ref4 = _slicedToArray(_ref3, 1),
            r = _ref4[0],
            _ref5 = new Uint32Array(t, 4, 1),
            _ref6 = _slicedToArray(_ref5, 1),
            i = _ref6[0];

        return new ur(i, r, or[15 & e], t);
      }
    }]);

    function ur(t) {
      var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 16;
      var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Float64Array;
      var r = arguments.length > 3 ? arguments[3] : undefined;

      _classCallCheck(this, ur);

      if (void 0 === t) throw new Error("Missing required argument: numItems.");
      if (isNaN(t) || t <= 0) throw new Error("Unpexpected numItems value: ".concat(t, "."));
      this.numItems = +t, this.nodeSize = Math.min(Math.max(+n, 2), 65535);
      var i = t,
          o = i;
      this._levelBounds = [4 * i];

      do {
        o += i = Math.ceil(i / this.nodeSize), this._levelBounds.push(4 * o);
      } while (1 !== i);

      this.ArrayType = e || Float64Array, this.IndexArrayType = o < 16384 ? Uint16Array : Uint32Array;
      var a = or.indexOf(this.ArrayType),
          u = 4 * o * this.ArrayType.BYTES_PER_ELEMENT;
      if (a < 0) throw new Error("Unexpected typed array class: ".concat(e, "."));
      r && _instanceof(r, ArrayBuffer) ? (this.data = r, this._boxes = new this.ArrayType(this.data, 8, 4 * o), this._indices = new this.IndexArrayType(this.data, 8 + u, o), this._pos = 4 * o, this.minX = this._boxes[this._pos - 4], this.minY = this._boxes[this._pos - 3], this.maxX = this._boxes[this._pos - 2], this.maxY = this._boxes[this._pos - 1]) : (this.data = new ArrayBuffer(8 + u + o * this.IndexArrayType.BYTES_PER_ELEMENT), this._boxes = new this.ArrayType(this.data, 8, 4 * o), this._indices = new this.IndexArrayType(this.data, 8 + u, o), this._pos = 0, this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -1 / 0, this.maxY = -1 / 0, new Uint8Array(this.data, 0, 2).set([251, (ar << 4) + a]), new Uint16Array(this.data, 2, 1)[0] = n, new Uint32Array(this.data, 4, 1)[0] = t), this.queue = new ir();
    }

    _createClass(ur, [{
      key: "add",
      value: function add(t, n, e, r) {
        var i = this._pos >> 2;
        this._indices[i] = i, this._boxes[this._pos++] = t, this._boxes[this._pos++] = n, this._boxes[this._pos++] = e, this._boxes[this._pos++] = r, t < this.minX && (this.minX = t), n < this.minY && (this.minY = n), e > this.maxX && (this.maxX = e), r > this.maxY && (this.maxY = r);
      }
    }, {
      key: "finish",
      value: function finish() {
        if (this._pos >> 2 !== this.numItems) throw new Error("Added ".concat(this._pos >> 2, " items when expected ").concat(this.numItems, "."));
        var t = this.maxX - this.minX,
            n = this.maxY - this.minY,
            e = new Uint32Array(this.numItems);

        for (var _r3 = 0; _r3 < this.numItems; _r3++) {
          var _i2 = 4 * _r3;

          var _o2 = this._boxes[_i2++],
              _a2 = this._boxes[_i2++],
              _u = this._boxes[_i2++],
              _s2 = this._boxes[_i2++],
              _c = Math.floor(65535 * ((_o2 + _u) / 2 - this.minX) / t),
              _h = Math.floor(65535 * ((_a2 + _s2) / 2 - this.minY) / n);

          e[_r3] = lr(_c, _h);
        }

        !function t(n, e, r, i, o) {
          if (i >= o) return;
          var a = n[i + o >> 1];
          var u = i - 1;
          var s = o + 1;

          for (;;) {
            do {
              u++;
            } while (n[u] < a);

            do {
              s--;
            } while (n[s] > a);

            if (u >= s) break;
            hr(n, e, r, u, s);
          }

          t(n, e, r, i, s);
          t(n, e, r, s + 1, o);
        }(e, this._boxes, this._indices, 0, this.numItems - 1);

        for (var _t5 = 0, _n3 = 0; _t5 < this._levelBounds.length - 1; _t5++) {
          var _e4 = this._levelBounds[_t5];

          for (; _n3 < _e4;) {
            var _t6 = 1 / 0,
                _r4 = 1 / 0,
                _i3 = -1 / 0,
                _o3 = -1 / 0;

            var _a3 = _n3;

            for (var _a4 = 0; _a4 < this.nodeSize && _n3 < _e4; _a4++) {
              var _e5 = this._boxes[_n3++],
                  _a5 = this._boxes[_n3++],
                  _u2 = this._boxes[_n3++],
                  _s3 = this._boxes[_n3++];
              _e5 < _t6 && (_t6 = _e5), _a5 < _r4 && (_r4 = _a5), _u2 > _i3 && (_i3 = _u2), _s3 > _o3 && (_o3 = _s3);
            }

            this._indices[this._pos >> 2] = _a3, this._boxes[this._pos++] = _t6, this._boxes[this._pos++] = _r4, this._boxes[this._pos++] = _i3, this._boxes[this._pos++] = _o3;
          }
        }
      }
    }, {
      key: "search",
      value: function search(t, n, e, r, i) {
        if (this._pos !== this._boxes.length) throw new Error("Data not yet indexed - call index.finish().");
        var o = this._boxes.length - 4,
            a = this._levelBounds.length - 1;
        var u = [],
            s = [];

        for (; void 0 !== o;) {
          var _c2 = Math.min(o + 4 * this.nodeSize, this._levelBounds[a]);

          for (var _h2 = o; _h2 < _c2; _h2 += 4) {
            var _c3 = this._indices[_h2 >> 2];
            e < this._boxes[_h2] || r < this._boxes[_h2 + 1] || t > this._boxes[_h2 + 2] || n > this._boxes[_h2 + 3] || (o < 4 * this.numItems ? (void 0 === i || i(_c3)) && s.push(_c3) : (u.push(_c3), u.push(a - 1)));
          }

          a = u.pop(), o = u.pop();
        }

        return s;
      }
    }, {
      key: "neighbors",
      value: function neighbors(t, n) {
        var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1 / 0;
        var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1 / 0;
        var i = arguments.length > 4 ? arguments[4] : undefined;
        if (this._pos !== this._boxes.length) throw new Error("Data not yet indexed - call index.finish().");
        var o = this._boxes.length - 4;
        var a = this.queue,
            u = [],
            s = r * r;

        for (; void 0 !== o;) {
          var _r5 = Math.min(o + 4 * this.nodeSize, cr(o, this._levelBounds));

          for (var _e6 = o; _e6 < _r5; _e6 += 4) {
            var _r6 = this._indices[_e6 >> 2],
                _u3 = sr(t, this._boxes[_e6], this._boxes[_e6 + 2]),
                _s4 = sr(n, this._boxes[_e6 + 1], this._boxes[_e6 + 3]),
                _c4 = _u3 * _u3 + _s4 * _s4;

            o < 4 * this.numItems ? (void 0 === i || i(_r6)) && a.push(-_r6 - 1, _c4) : a.push(_r6, _c4);
          }

          for (; a.length && a.peek() < 0;) {
            if (a.peekValue() > s) return a.clear(), u;
            if (u.push(-a.pop() - 1), u.length === e) return a.clear(), u;
          }

          o = a.pop();
        }

        return a.clear(), u;
      }
    }]);

    return ur;
  }();

  function sr(t, n, e) {
    return t < n ? n - t : t <= e ? 0 : t - e;
  }

  function cr(t, n) {
    var e = 0,
        r = n.length - 1;

    for (; e < r;) {
      var _i4 = e + r >> 1;

      n[_i4] > t ? r = _i4 : e = _i4 + 1;
    }

    return n[e];
  }

  function hr(t, n, e, r, i) {
    var o = t[r];
    t[r] = t[i], t[i] = o;
    var a = 4 * r,
        u = 4 * i,
        s = n[a],
        c = n[a + 1],
        h = n[a + 2],
        l = n[a + 3];
    n[a] = n[u], n[a + 1] = n[u + 1], n[a + 2] = n[u + 2], n[a + 3] = n[u + 3], n[u] = s, n[u + 1] = c, n[u + 2] = h, n[u + 3] = l;
    var f = e[r];
    e[r] = e[i], e[i] = f;
  }

  function lr(t, n) {
    var e = t ^ n,
        r = 65535 ^ e,
        i = 65535 ^ (t | n),
        o = t & (65535 ^ n),
        a = e | r >> 1,
        u = e >> 1 ^ e,
        s = i >> 1 ^ r & o >> 1 ^ i,
        c = e & i >> 1 ^ o >> 1 ^ o;
    u = (e = a) & (r = u) >> 2 ^ r & (e ^ r) >> 2, s ^= e & (i = s) >> 2 ^ r & (o = c) >> 2, c ^= r & i >> 2 ^ (e ^ r) & o >> 2, u = (e = a = e & e >> 2 ^ r & r >> 2) & (r = u) >> 4 ^ r & (e ^ r) >> 4, s ^= e & (i = s) >> 4 ^ r & (o = c) >> 4, c ^= r & i >> 4 ^ (e ^ r) & o >> 4, s ^= (e = a = e & e >> 4 ^ r & r >> 4) & (i = s) >> 8 ^ (r = u) & (o = c) >> 8;
    var h = t ^ n,
        l = (r = (c ^= r & i >> 8 ^ (e ^ r) & o >> 8) ^ c >> 1) | 65535 ^ (h | (e = s ^ s >> 1));
    return ((l = 1431655765 & ((l = 858993459 & ((l = 252645135 & ((l = 16711935 & (l | l << 8)) | l << 4)) | l << 2)) | l << 1)) << 1 | (h = 1431655765 & ((h = 858993459 & ((h = 252645135 & ((h = 16711935 & (h | h << 8)) | h << 4)) | h << 2)) | h << 1))) >>> 0;
  }

  e.d(n, "a", function () {
    return fr;
  });

  var fr = function () {
    function t() {
      var n = this,
          e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      i()(this, t), s()(this, "width", 960), s()(this, "height", 600), s()(this, "handleZoom", function () {
        n.handleGrab(), n.draw();
      }), s()(this, "handleGrab", function () {
        var t = n.canvasEl,
            e = F.sourceEvent;
        1 !== (e && e.buttons) || n.findUnderCursor(e).length || (t.style.cursor = "grab");
      }), s()(this, "handleRelease", function () {
        n.canvasEl.style.cursor = "default";
      }), s()(this, "handleMouseMove", function () {
        var t = n.canvasEl,
            e = n.findUnderCursor(F),
            r = e.length && e[0].properties.url;
        t.style.cursor = r ? "pointer" : "default";
      }), s()(this, "handleMouseClick", function () {
        var t = n.findUnderCursor(F);

        if (t.length) {
          var e = t[0].properties.url;
          e && window.open(e);
        }
      }), s()(this, "draw", function () {
        var t = n.options,
            e = n.objIndex,
            r = n.canvasEl,
            i = n.data,
            o = n.ctx,
            a = n.width,
            u = n.height,
            s = n.tree,
            c = n.geoPath,
            h = (t.lineSpace, t.lineWidth, t.linePadding, qe(r));
        o.save(), n.drawClear(), o.translate(h.x, h.y), o.scale(h.k, h.k), o.lineJoin = "round", o.lineWidth = 1 / h.k;
        var l = .18 + .82 / h.k;
        o.strokeStyle = "rgba(0, 0, 0, ".concat(l, ")"), o.beginPath(), c(er(i, i.objects.states, function (t, n) {
          return t !== n;
        })), c(Ke(i, i.objects.nation)), o.stroke();
        var f = s.search(h.invertX(0), h.invertY(0), h.invertX(a), h.invertY(u)),
            p = !0,
            d = !1,
            v = void 0;

        try {
          for (var y, g = f[Symbol.iterator](); !(p = (y = g.next()).done); p = !0) {
            var m = e[y.value];

            if ("comic" === m.properties.kind) {
              var _ = m.id,
                  w = (z = m.properties.pos).x,
                  x = z.y,
                  b = z.w,
                  E = z.th;
              n.drawImage(_, w, x, b, E);
            }
          }
        } catch (t) {
          d = !0, v = t;
        } finally {
          try {
            p || null == g.return || g.return();
          } finally {
            if (d) throw v;
          }
        }

        var M = !0,
            k = !1,
            S = void 0;

        try {
          for (var N, A = f[Symbol.iterator](); !(M = (N = A.next()).done); M = !0) {
            var P = e[N.value];

            if ("label" === P.properties.kind) {
              var z,
                  T = P.properties,
                  L = T.color,
                  I = T.name,
                  j = T.caption,
                  O = (w = (z = T.pos).x, x = z.y, b = z.w, z.h),
                  C = z.cw,
                  R = z.ch;
              z.aw;
              o.fillStyle = L, o.textBaseline = "top", n.drawText(I, w, x, b, O) && j && n.drawText(j, w, x + O, C, R);
            }
          }
        } catch (t) {
          k = !0, S = t;
        } finally {
          try {
            M || null == A.return || A.return();
          } finally {
            if (k) throw S;
          }
        }

        o.restore();
      }), this.options = e, this.canvasEl = null, this.ctx = null, this.geoPath = null, this.data = null, this.objIndex = null, this.tree = null, this.imgs = new Map();
    }

    return a()(t, [{
      key: "create",
      value: function value() {
        var t = this.width,
            n = this.height,
            e = window.devicePixelRatio,
            r = this.canvasEl = document.createElement("canvas");
        r.width = t * e, r.height = n * e, r.style.width = "".concat(t, "px"), r.style.height = "".concat(n, "px"), r.style.border = "2px solid black", r.style.boxSizing = "border-box", r.title = this.options.title;
        var i = this.ctx = r.getContext("2d", {
          alpha: !1
        });
        return i.scale(e, e), this.drawClear(), this.geoPath = Object(ut.a)().context(i), r;
      }
    }, {
      key: "run",
      value: function value(t) {
        this.data = t;
        var n = this.options.maxZoom,
            e = t.objects.objs.geometries,
            r = this.objIndex = [],
            i = this.tree = new ur(e.length),
            o = !0,
            a = !1,
            u = void 0;

        try {
          for (var s, c = e[Symbol.iterator](); !(o = (s = c.next()).done); o = !0) {
            var h = s.value,
                l = h.properties.pos,
                f = l.x,
                p = l.y,
                d = l.w,
                v = l.th;
            i.add(f, p, f + d, p + v), r.push(h);
          }
        } catch (t) {
          a = !0, u = t;
        } finally {
          try {
            o || null == c.return || c.return();
          } finally {
            if (a) throw u;
          }
        }

        i.finish(), tt(this.canvasEl).call(function () {
          var t,
              n,
              e = Fe,
              r = Ge,
              i = He,
              o = Ve,
              a = $e,
              u = [0, 1 / 0],
              s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]],
              c = 250,
              h = Gn,
              l = [],
              f = pt("start", "zoom", "end"),
              p = 500,
              d = 150,
              v = 0;

          function y(t) {
            t.property("__zoom", De).on("wheel.zoom", E).on("mousedown.zoom", M).on("dblclick.zoom", k).filter(a).on("touchstart.zoom", S).on("touchmove.zoom", N).on("touchend.zoom touchcancel.zoom", A).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
          }

          function g(t, n) {
            return (n = Math.max(u[0], Math.min(u[1], n))) === t.k ? t : new Xe(n, t.x, t.y);
          }

          function m(t, n, e) {
            var r = n[0] - e[0] * t.k,
                i = n[1] - e[1] * t.k;
            return r === t.x && i === t.y ? t : new Xe(t.k, r, i);
          }

          function _(t) {
            return [(+t[0][0] + +t[1][0]) / 2, (+t[0][1] + +t[1][1]) / 2];
          }

          function w(t, n, e) {
            t.on("start.zoom", function () {
              x(this, arguments).start();
            }).on("interrupt.zoom end.zoom", function () {
              x(this, arguments).end();
            }).tween("zoom", function () {
              var t = arguments,
                  i = x(this, t),
                  o = r.apply(this, t),
                  a = e || _(o),
                  u = Math.max(o[1][0] - o[0][0], o[1][1] - o[0][1]),
                  s = this.__zoom,
                  c = "function" == typeof n ? n.apply(this, t) : n,
                  l = h(s.invert(a).concat(u / s.k), c.invert(a).concat(u / c.k));

              return function (t) {
                if (1 === t) t = c;else {
                  var n = l(t),
                      e = u / n[2];
                  t = new Xe(e, a[0] - n[0] * e, a[1] - n[1] * e);
                }
                i.zoom(null, t);
              };
            });
          }

          function x(t, n) {
            for (var e, r = 0, i = l.length; r < i; ++r) {
              if ((e = l[r]).that === t) return e;
            }

            return new b(t, n);
          }

          function b(t, n) {
            this.that = t, this.args = n, this.index = -1, this.active = 0, this.extent = r.apply(t, n);
          }

          function E() {
            if (e.apply(this, arguments)) {
              var t = x(this, arguments),
                  n = this.__zoom,
                  r = Math.max(u[0], Math.min(u[1], n.k * Math.pow(2, o.apply(this, arguments)))),
                  a = ot(this);
              if (t.wheel) t.mouse[0][0] === a[0] && t.mouse[0][1] === a[1] || (t.mouse[1] = n.invert(t.mouse[0] = a)), clearTimeout(t.wheel);else {
                if (n.k === r) return;
                t.mouse = [a, n.invert(a)], Se(this), t.start();
              }
              Be(), t.wheel = setTimeout(function () {
                t.wheel = null, t.end();
              }, d), t.zoom("mouse", i(m(g(n, r), t.mouse[0], t.mouse[1]), t.extent, s));
            }
          }

          function M() {
            if (!n && e.apply(this, arguments)) {
              var t = x(this, arguments),
                  r = tt(F.view).on("mousemove.zoom", function () {
                if (Be(), !t.moved) {
                  var n = F.clientX - a,
                      e = F.clientY - u;
                  t.moved = n * n + e * e > v;
                }

                t.zoom("mouse", i(m(t.that.__zoom, t.mouse[0] = ot(t.that), t.mouse[1]), t.extent, s));
              }, !0).on("mouseup.zoom", function () {
                r.on("mousemove.zoom mouseup.zoom", null), yt(F.view, t.moved), Be(), t.end();
              }, !0),
                  o = ot(this),
                  a = F.clientX,
                  u = F.clientY;
              vt(F.view), Ue(), t.mouse = [o, this.__zoom.invert(o)], Se(this), t.start();
            }
          }

          function k() {
            if (e.apply(this, arguments)) {
              var t = this.__zoom,
                  n = ot(this),
                  o = t.invert(n),
                  a = t.k * (F.shiftKey ? .5 : 2),
                  u = i(m(g(t, a), n, o), r.apply(this, arguments), s);
              Be(), c > 0 ? tt(this).transition().duration(c).call(w, u, n) : tt(this).call(y.transform, u);
            }
          }

          function S() {
            if (e.apply(this, arguments)) {
              var n,
                  r,
                  i,
                  o,
                  a = x(this, arguments),
                  u = F.changedTouches,
                  s = u.length;

              for (Ue(), r = 0; r < s; ++r) {
                i = u[r], o = [o = at(this, u, i.identifier), this.__zoom.invert(o), i.identifier], a.touch0 ? a.touch1 || (a.touch1 = o) : (a.touch0 = o, n = !0);
              }

              if (t && (t = clearTimeout(t), !a.touch1)) return a.end(), void ((o = tt(this).on("dblclick.zoom")) && o.apply(this, arguments));
              n && (t = setTimeout(function () {
                t = null;
              }, p), Se(this), a.start());
            }
          }

          function N() {
            var n,
                e,
                r,
                o,
                a = x(this, arguments),
                u = F.changedTouches,
                c = u.length;

            for (Be(), t && (t = clearTimeout(t)), n = 0; n < c; ++n) {
              e = u[n], r = at(this, u, e.identifier), a.touch0 && a.touch0[2] === e.identifier ? a.touch0[0] = r : a.touch1 && a.touch1[2] === e.identifier && (a.touch1[0] = r);
            }

            if (e = a.that.__zoom, a.touch1) {
              var h = a.touch0[0],
                  l = a.touch0[1],
                  f = a.touch1[0],
                  p = a.touch1[1],
                  d = (d = f[0] - h[0]) * d + (d = f[1] - h[1]) * d,
                  v = (v = p[0] - l[0]) * v + (v = p[1] - l[1]) * v;
              e = g(e, Math.sqrt(d / v)), r = [(h[0] + f[0]) / 2, (h[1] + f[1]) / 2], o = [(l[0] + p[0]) / 2, (l[1] + p[1]) / 2];
            } else {
              if (!a.touch0) return;
              r = a.touch0[0], o = a.touch0[1];
            }

            a.zoom("touch", i(m(e, r, o), a.extent, s));
          }

          function A() {
            var t,
                e,
                r = x(this, arguments),
                i = F.changedTouches,
                o = i.length;

            for (Ue(), n && clearTimeout(n), n = setTimeout(function () {
              n = null;
            }, p), t = 0; t < o; ++t) {
              e = i[t], r.touch0 && r.touch0[2] === e.identifier ? delete r.touch0 : r.touch1 && r.touch1[2] === e.identifier && delete r.touch1;
            }

            r.touch1 && !r.touch0 && (r.touch0 = r.touch1, delete r.touch1), r.touch0 ? r.touch0[1] = this.__zoom.invert(r.touch0[0]) : r.end();
          }

          return y.transform = function (t, n) {
            var e = t.selection ? t.selection() : t;
            e.property("__zoom", De), t !== e ? w(t, n) : e.interrupt().each(function () {
              x(this, arguments).start().zoom(null, "function" == typeof n ? n.apply(this, arguments) : n).end();
            });
          }, y.scaleBy = function (t, n) {
            y.scaleTo(t, function () {
              return this.__zoom.k * ("function" == typeof n ? n.apply(this, arguments) : n);
            });
          }, y.scaleTo = function (t, n) {
            y.transform(t, function () {
              var t = r.apply(this, arguments),
                  e = this.__zoom,
                  o = _(t),
                  a = e.invert(o),
                  u = "function" == typeof n ? n.apply(this, arguments) : n;

              return i(m(g(e, u), o, a), t, s);
            });
          }, y.translateBy = function (t, n, e) {
            y.transform(t, function () {
              return i(this.__zoom.translate("function" == typeof n ? n.apply(this, arguments) : n, "function" == typeof e ? e.apply(this, arguments) : e), r.apply(this, arguments), s);
            });
          }, y.translateTo = function (t, n, e) {
            y.transform(t, function () {
              var t = r.apply(this, arguments),
                  o = this.__zoom,
                  a = _(t);

              return i(Ye.translate(a[0], a[1]).scale(o.k).translate("function" == typeof n ? -n.apply(this, arguments) : -n, "function" == typeof e ? -e.apply(this, arguments) : -e), t, s);
            });
          }, b.prototype = {
            start: function start() {
              return 1 == ++this.active && (this.index = l.push(this) - 1, this.emit("start")), this;
            },
            zoom: function zoom(t, n) {
              return this.mouse && "mouse" !== t && (this.mouse[1] = n.invert(this.mouse[0])), this.touch0 && "touch" !== t && (this.touch0[1] = n.invert(this.touch0[0])), this.touch1 && "touch" !== t && (this.touch1[1] = n.invert(this.touch1[0])), this.that.__zoom = n, this.emit("zoom"), this;
            },
            end: function end() {
              return 0 == --this.active && (l.splice(this.index, 1), this.index = -1, this.emit("end")), this;
            },
            emit: function emit(t) {
              H(new function (t, n, e) {
                this.target = t, this.type = n, this.transform = e;
              }(y, t, this.that.__zoom), f.apply, f, [t, this.that, this.args]);
            }
          }, y.wheelDelta = function (t) {
            return arguments.length ? (o = "function" == typeof t ? t : Re(+t), y) : o;
          }, y.filter = function (t) {
            return arguments.length ? (e = "function" == typeof t ? t : Re(!!t), y) : e;
          }, y.touchable = function (t) {
            return arguments.length ? (a = "function" == typeof t ? t : Re(!!t), y) : a;
          }, y.extent = function (t) {
            return arguments.length ? (r = "function" == typeof t ? t : Re([[+t[0][0], +t[0][1]], [+t[1][0], +t[1][1]]]), y) : r;
          }, y.scaleExtent = function (t) {
            return arguments.length ? (u[0] = +t[0], u[1] = +t[1], y) : [u[0], u[1]];
          }, y.translateExtent = function (t) {
            return arguments.length ? (s[0][0] = +t[0][0], s[1][0] = +t[1][0], s[0][1] = +t[0][1], s[1][1] = +t[1][1], y) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
          }, y.constrain = function (t) {
            return arguments.length ? (i = t, y) : i;
          }, y.duration = function (t) {
            return arguments.length ? (c = +t, y) : c;
          }, y.interpolate = function (t) {
            return arguments.length ? (h = t, y) : h;
          }, y.on = function () {
            var t = f.on.apply(f, arguments);
            return t === f ? y : t;
          }, y.clickDistance = function (t) {
            return arguments.length ? (v = (t = +t) * t, y) : Math.sqrt(v);
          }, y;
        }().scaleExtent([1, n]).on("zoom", this.handleZoom).on("start", this.handleGrab).on("end", this.handleRelease)).on("mousemove", this.handleMouseMove).on("click", this.handleMouseClick), this.draw();
      }
    }, {
      key: "findUnderCursor",
      value: function value(t) {
        var n = this.canvasEl,
            e = this.objIndex,
            r = this.tree,
            i = qe(n),
            o = i.invertX(t.offsetX),
            a = i.invertY(t.offsetY);
        return r.search(o, a, o, a).map(function (t) {
          return e[t];
        });
      }
    }, {
      key: "drawClear",
      value: function value() {
        var t = this.ctx,
            n = this.width,
            e = this.height;
        t.fillStyle = "white", t.fillRect(0, 0, n, e);
      }
    }, {
      key: "drawText",
      value: function value(t, n, e, r, i) {
        var o = this.canvasEl,
            a = this.ctx,
            u = i * qe(o).k;
        if (u < .25) return !1;

        if (u > 2.65) {
          var s = 64 / i;
          return a.scale(1 / s, 1 / s), a.font = "normal 64px xkcd-Regular-v2", a.fillText(t.toLowerCase(), n * s, e * s), a.scale(s, s), !0;
        }

        var c = a.globalAlpha;
        return a.globalAlpha *= .65, a.fillRect(n, e + i / 3, r, i / 3), a.globalAlpha = c, !0;
      }
    }, {
      key: "getImage",
      value: function value(t, n) {
        var e = this.options.baseURL,
            r = new Image();
        return r.onload = n, r.src = "".concat(e, "imgs/").concat(t, ".png"), r;
      }
    }, {
      key: "drawImage",
      value: function value(t, n, e, r, i) {
        var o = this.canvasEl,
            a = this.ctx,
            u = this.imgs,
            s = this.options,
            c = this.draw;
        s.baseURL;

        if (!(r * i * qe(o).k < 16)) {
          var h = u.get(t);
          if (h || (h = this.getImage(t, c), u.set(t, h)), h.complete) try {
            a.drawImage(h, n, e, r, i);
          } catch (n) {
            console.warn("unable to render img", t, h);
          }
        }
      }
    }]), t;
  }();
}, function (t, n, e) {
  var r = function () {
    return this || "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self;
  }() || Function("return this")(),
      i = r.regeneratorRuntime && Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime") >= 0,
      o = i && r.regeneratorRuntime;

  if (r.regeneratorRuntime = void 0, t.exports = e(10), i) r.regeneratorRuntime = o;else try {
    delete r.regeneratorRuntime;
  } catch (t) {
    r.regeneratorRuntime = void 0;
  }
}, function (t, n) {
  !function (n) {
    "use strict";

    var e,
        r = Object.prototype,
        i = r.hasOwnProperty,
        o = "function" == typeof Symbol ? Symbol : {},
        a = o.iterator || "@@iterator",
        u = o.asyncIterator || "@@asyncIterator",
        s = o.toStringTag || "@@toStringTag",
        c = "object" == _typeof(t),
        h = n.regeneratorRuntime;

    if (h) c && (t.exports = h);else {
      (h = n.regeneratorRuntime = c ? t.exports : {}).wrap = w;
      var l = "suspendedStart",
          f = "suspendedYield",
          p = "executing",
          d = "completed",
          v = {},
          y = {};

      y[a] = function () {
        return this;
      };

      var g = Object.getPrototypeOf,
          m = g && g(g(T([])));
      m && m !== r && i.call(m, a) && (y = m);

      var _ = M.prototype = b.prototype = Object.create(y);

      E.prototype = _.constructor = M, M.constructor = E, M[s] = E.displayName = "GeneratorFunction", h.isGeneratorFunction = function (t) {
        var n = "function" == typeof t && t.constructor;
        return !!n && (n === E || "GeneratorFunction" === (n.displayName || n.name));
      }, h.mark = function (t) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t, M) : (t.__proto__ = M, s in t || (t[s] = "GeneratorFunction")), t.prototype = Object.create(_), t;
      }, h.awrap = function (t) {
        return {
          __await: t
        };
      }, k(S.prototype), S.prototype[u] = function () {
        return this;
      }, h.AsyncIterator = S, h.async = function (t, n, e, r) {
        var i = new S(w(t, n, e, r));
        return h.isGeneratorFunction(n) ? i : i.next().then(function (t) {
          return t.done ? t.value : i.next();
        });
      }, k(_), _[s] = "Generator", _[a] = function () {
        return this;
      }, _.toString = function () {
        return "[object Generator]";
      }, h.keys = function (t) {
        var n = [];

        for (var e in t) {
          n.push(e);
        }

        return n.reverse(), function e() {
          for (; n.length;) {
            var r = n.pop();
            if (r in t) return e.value = r, e.done = !1, e;
          }

          return e.done = !0, e;
        };
      }, h.values = T, z.prototype = {
        constructor: z,
        reset: function reset(t) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(P), !t) for (var n in this) {
            "t" === n.charAt(0) && i.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e);
          }
        },
        stop: function stop() {
          this.done = !0;
          var t = this.tryEntries[0].completion;
          if ("throw" === t.type) throw t.arg;
          return this.rval;
        },
        dispatchException: function dispatchException(t) {
          if (this.done) throw t;
          var n = this;

          function r(r, i) {
            return u.type = "throw", u.arg = t, n.next = r, i && (n.method = "next", n.arg = e), !!i;
          }

          for (var o = this.tryEntries.length - 1; o >= 0; --o) {
            var a = this.tryEntries[o],
                u = a.completion;
            if ("root" === a.tryLoc) return r("end");

            if (a.tryLoc <= this.prev) {
              var s = i.call(a, "catchLoc"),
                  c = i.call(a, "finallyLoc");

              if (s && c) {
                if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                if (this.prev < a.finallyLoc) return r(a.finallyLoc);
              } else if (s) {
                if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
              } else {
                if (!c) throw new Error("try statement without catch or finally");
                if (this.prev < a.finallyLoc) return r(a.finallyLoc);
              }
            }
          }
        },
        abrupt: function abrupt(t, n) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var r = this.tryEntries[e];

            if (r.tryLoc <= this.prev && i.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
              var o = r;
              break;
            }
          }

          o && ("break" === t || "continue" === t) && o.tryLoc <= n && n <= o.finallyLoc && (o = null);
          var a = o ? o.completion : {};
          return a.type = t, a.arg = n, o ? (this.method = "next", this.next = o.finallyLoc, v) : this.complete(a);
        },
        complete: function complete(t, n) {
          if ("throw" === t.type) throw t.arg;
          return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && n && (this.next = n), v;
        },
        finish: function finish(t) {
          for (var n = this.tryEntries.length - 1; n >= 0; --n) {
            var e = this.tryEntries[n];
            if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), P(e), v;
          }
        },
        catch: function _catch(t) {
          for (var n = this.tryEntries.length - 1; n >= 0; --n) {
            var e = this.tryEntries[n];

            if (e.tryLoc === t) {
              var r = e.completion;

              if ("throw" === r.type) {
                var i = r.arg;
                P(e);
              }

              return i;
            }
          }

          throw new Error("illegal catch attempt");
        },
        delegateYield: function delegateYield(t, n, r) {
          return this.delegate = {
            iterator: T(t),
            resultName: n,
            nextLoc: r
          }, "next" === this.method && (this.arg = e), v;
        }
      };
    }

    function w(t, n, e, r) {
      var i = n && _instanceof(n.prototype, b) ? n : b,
          o = Object.create(i.prototype),
          a = new z(r || []);
      return o._invoke = function (t, n, e) {
        var r = l;
        return function (i, o) {
          if (r === p) throw new Error("Generator is already running");

          if (r === d) {
            if ("throw" === i) throw o;
            return L();
          }

          for (e.method = i, e.arg = o;;) {
            var a = e.delegate;

            if (a) {
              var u = N(a, e);

              if (u) {
                if (u === v) continue;
                return u;
              }
            }

            if ("next" === e.method) e.sent = e._sent = e.arg;else if ("throw" === e.method) {
              if (r === l) throw r = d, e.arg;
              e.dispatchException(e.arg);
            } else "return" === e.method && e.abrupt("return", e.arg);
            r = p;
            var s = x(t, n, e);

            if ("normal" === s.type) {
              if (r = e.done ? d : f, s.arg === v) continue;
              return {
                value: s.arg,
                done: e.done
              };
            }

            "throw" === s.type && (r = d, e.method = "throw", e.arg = s.arg);
          }
        };
      }(t, e, a), o;
    }

    function x(t, n, e) {
      try {
        return {
          type: "normal",
          arg: t.call(n, e)
        };
      } catch (t) {
        return {
          type: "throw",
          arg: t
        };
      }
    }

    function b() {}

    function E() {}

    function M() {}

    function k(t) {
      ["next", "throw", "return"].forEach(function (n) {
        t[n] = function (t) {
          return this._invoke(n, t);
        };
      });
    }

    function S(t) {
      var n;

      this._invoke = function (e, r) {
        function o() {
          return new Promise(function (n, o) {
            !function n(e, r, o, a) {
              var u = x(t[e], t, r);

              if ("throw" !== u.type) {
                var s = u.arg,
                    c = s.value;
                return c && "object" == _typeof(c) && i.call(c, "__await") ? Promise.resolve(c.__await).then(function (t) {
                  n("next", t, o, a);
                }, function (t) {
                  n("throw", t, o, a);
                }) : Promise.resolve(c).then(function (t) {
                  s.value = t, o(s);
                }, function (t) {
                  return n("throw", t, o, a);
                });
              }

              a(u.arg);
            }(e, r, n, o);
          });
        }

        return n = n ? n.then(o, o) : o();
      };
    }

    function N(t, n) {
      var r = t.iterator[n.method];

      if (r === e) {
        if (n.delegate = null, "throw" === n.method) {
          if (t.iterator.return && (n.method = "return", n.arg = e, N(t, n), "throw" === n.method)) return v;
          n.method = "throw", n.arg = new TypeError("The iterator does not provide a 'throw' method");
        }

        return v;
      }

      var i = x(r, t.iterator, n.arg);
      if ("throw" === i.type) return n.method = "throw", n.arg = i.arg, n.delegate = null, v;
      var o = i.arg;
      return o ? o.done ? (n[t.resultName] = o.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", n.arg = e), n.delegate = null, v) : o : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, v);
    }

    function A(t) {
      var n = {
        tryLoc: t[0]
      };
      1 in t && (n.catchLoc = t[1]), 2 in t && (n.finallyLoc = t[2], n.afterLoc = t[3]), this.tryEntries.push(n);
    }

    function P(t) {
      var n = t.completion || {};
      n.type = "normal", delete n.arg, t.completion = n;
    }

    function z(t) {
      this.tryEntries = [{
        tryLoc: "root"
      }], t.forEach(A, this), this.reset(!0);
    }

    function T(t) {
      if (t) {
        var n = t[a];
        if (n) return n.call(t);
        if ("function" == typeof t.next) return t;

        if (!isNaN(t.length)) {
          var r = -1,
              o = function n() {
            for (; ++r < t.length;) {
              if (i.call(t, r)) return n.value = t[r], n.done = !1, n;
            }

            return n.value = e, n.done = !0, n;
          };

          return o.next = o;
        }
      }

      return {
        next: L
      };
    }

    function L() {
      return {
        value: e,
        done: !0
      };
    }
  }(function () {
    return this || "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self;
  }() || Function("return this")());
},,,,,,,,,,,,,,,, function (t, n, e) {
  "use strict";

  e.r(n);
  var r = e(1),
      i = e.n(r),
      o = e(2),
      a = e.n(o),
      u = e(3),
      s = e.n(u),
      c = e(8),
      h = e(7),
      l = "/2067/asset/";

  function f() {
    return (f = s()(i.a.mark(function t() {
      var n, e, r, o, u;
      return i.a.wrap(function (t) {
        for (;;) {
          switch (t.prev = t.next) {
            case 0:
              return n = new c.a(a()({}, h.a, {
                baseURL: l
              })), e = n.create(), (r = document.getElementById("comic-content")).parentNode.replaceChild(e, r), t.next = 6, fetch("".concat(l, "map-data.json"));

            case 6:
              return o = t.sent, t.next = 9, o.json();

            case 9:
              if (u = t.sent, !document.fonts) {
                t.next = 13;
                break;
              }

              return t.next = 13, document.fonts.load("normal 12px xkcd-Regular-v2");

            case 13:
              n.run(u);

            case 14:
            case "end":
              return t.stop();
          }
        }
      }, t, this);
    }))).apply(this, arguments);
  }

  document.addEventListener("DOMContentLoaded", function () {
    return f.apply(this, arguments);
  });
}]);