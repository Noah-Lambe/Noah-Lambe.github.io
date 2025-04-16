(function () {
  const s = document.createElement("link").relList;
  if (s && s.supports && s.supports("modulepreload")) return;
  for (const f of document.querySelectorAll('link[rel="modulepreload"]')) d(f);
  new MutationObserver((f) => {
    for (const m of f)
      if (m.type === "childList")
        for (const x of m.addedNodes)
          x.tagName === "LINK" && x.rel === "modulepreload" && d(x);
  }).observe(document, { childList: !0, subtree: !0 });
  function a(f) {
    const m = {};
    return (
      f.integrity && (m.integrity = f.integrity),
      f.referrerPolicy && (m.referrerPolicy = f.referrerPolicy),
      f.crossOrigin === "use-credentials"
        ? (m.credentials = "include")
        : f.crossOrigin === "anonymous"
        ? (m.credentials = "omit")
        : (m.credentials = "same-origin"),
      m
    );
  }
  function d(f) {
    if (f.ep) return;
    f.ep = !0;
    const m = a(f);
    fetch(f.href, m);
  }
})();
function Fd(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default")
    ? o.default
    : o;
}
var Xo = { exports: {} },
  Rr = {},
  Jo = { exports: {} },
  b = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ic;
function Ad() {
  if (ic) return b;
  ic = 1;
  var o = Symbol.for("react.element"),
    s = Symbol.for("react.portal"),
    a = Symbol.for("react.fragment"),
    d = Symbol.for("react.strict_mode"),
    f = Symbol.for("react.profiler"),
    m = Symbol.for("react.provider"),
    x = Symbol.for("react.context"),
    E = Symbol.for("react.forward_ref"),
    w = Symbol.for("react.suspense"),
    k = Symbol.for("react.memo"),
    O = Symbol.for("react.lazy"),
    I = Symbol.iterator;
  function P(v) {
    return v === null || typeof v != "object"
      ? null
      : ((v = (I && v[I]) || v["@@iterator"]),
        typeof v == "function" ? v : null);
  }
  var U = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    T = Object.assign,
    F = {};
  function M(v, N, q) {
    (this.props = v),
      (this.context = N),
      (this.refs = F),
      (this.updater = q || U);
  }
  (M.prototype.isReactComponent = {}),
    (M.prototype.setState = function (v, N) {
      if (typeof v != "object" && typeof v != "function" && v != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, v, N, "setState");
    }),
    (M.prototype.forceUpdate = function (v) {
      this.updater.enqueueForceUpdate(this, v, "forceUpdate");
    });
  function D() {}
  D.prototype = M.prototype;
  function H(v, N, q) {
    (this.props = v),
      (this.context = N),
      (this.refs = F),
      (this.updater = q || U);
  }
  var Z = (H.prototype = new D());
  (Z.constructor = H), T(Z, M.prototype), (Z.isPureReactComponent = !0);
  var te = Array.isArray,
    ae = Object.prototype.hasOwnProperty,
    we = { current: null },
    me = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Pe(v, N, q) {
    var ee,
      re = {},
      le = null,
      se = null;
    if (N != null)
      for (ee in (N.ref !== void 0 && (se = N.ref),
      N.key !== void 0 && (le = "" + N.key),
      N))
        ae.call(N, ee) && !me.hasOwnProperty(ee) && (re[ee] = N[ee]);
    var oe = arguments.length - 2;
    if (oe === 1) re.children = q;
    else if (1 < oe) {
      for (var pe = Array(oe), Xe = 0; Xe < oe; Xe++)
        pe[Xe] = arguments[Xe + 2];
      re.children = pe;
    }
    if (v && v.defaultProps)
      for (ee in ((oe = v.defaultProps), oe))
        re[ee] === void 0 && (re[ee] = oe[ee]);
    return {
      $$typeof: o,
      type: v,
      key: le,
      ref: se,
      props: re,
      _owner: we.current,
    };
  }
  function Se(v, N) {
    return {
      $$typeof: o,
      type: v.type,
      key: N,
      ref: v.ref,
      props: v.props,
      _owner: v._owner,
    };
  }
  function Le(v) {
    return typeof v == "object" && v !== null && v.$$typeof === o;
  }
  function ht(v) {
    var N = { "=": "=0", ":": "=2" };
    return (
      "$" +
      v.replace(/[=:]/g, function (q) {
        return N[q];
      })
    );
  }
  var mt = /\/+/g;
  function Ge(v, N) {
    return typeof v == "object" && v !== null && v.key != null
      ? ht("" + v.key)
      : N.toString(36);
  }
  function ot(v, N, q, ee, re) {
    var le = typeof v;
    (le === "undefined" || le === "boolean") && (v = null);
    var se = !1;
    if (v === null) se = !0;
    else
      switch (le) {
        case "string":
        case "number":
          se = !0;
          break;
        case "object":
          switch (v.$$typeof) {
            case o:
            case s:
              se = !0;
          }
      }
    if (se)
      return (
        (se = v),
        (re = re(se)),
        (v = ee === "" ? "." + Ge(se, 0) : ee),
        te(re)
          ? ((q = ""),
            v != null && (q = v.replace(mt, "$&/") + "/"),
            ot(re, N, q, "", function (Xe) {
              return Xe;
            }))
          : re != null &&
            (Le(re) &&
              (re = Se(
                re,
                q +
                  (!re.key || (se && se.key === re.key)
                    ? ""
                    : ("" + re.key).replace(mt, "$&/") + "/") +
                  v
              )),
            N.push(re)),
        1
      );
    if (((se = 0), (ee = ee === "" ? "." : ee + ":"), te(v)))
      for (var oe = 0; oe < v.length; oe++) {
        le = v[oe];
        var pe = ee + Ge(le, oe);
        se += ot(le, N, q, pe, re);
      }
    else if (((pe = P(v)), typeof pe == "function"))
      for (v = pe.call(v), oe = 0; !(le = v.next()).done; )
        (le = le.value), (pe = ee + Ge(le, oe++)), (se += ot(le, N, q, pe, re));
    else if (le === "object")
      throw (
        ((N = String(v)),
        Error(
          "Objects are not valid as a React child (found: " +
            (N === "[object Object]"
              ? "object with keys {" + Object.keys(v).join(", ") + "}"
              : N) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return se;
  }
  function vt(v, N, q) {
    if (v == null) return v;
    var ee = [],
      re = 0;
    return (
      ot(v, ee, "", "", function (le) {
        return N.call(q, le, re++);
      }),
      ee
    );
  }
  function He(v) {
    if (v._status === -1) {
      var N = v._result;
      (N = N()),
        N.then(
          function (q) {
            (v._status === 0 || v._status === -1) &&
              ((v._status = 1), (v._result = q));
          },
          function (q) {
            (v._status === 0 || v._status === -1) &&
              ((v._status = 2), (v._result = q));
          }
        ),
        v._status === -1 && ((v._status = 0), (v._result = N));
    }
    if (v._status === 1) return v._result.default;
    throw v._result;
  }
  var ke = { current: null },
    A = { transition: null },
    X = {
      ReactCurrentDispatcher: ke,
      ReactCurrentBatchConfig: A,
      ReactCurrentOwner: we,
    };
  function W() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (b.Children = {
      map: vt,
      forEach: function (v, N, q) {
        vt(
          v,
          function () {
            N.apply(this, arguments);
          },
          q
        );
      },
      count: function (v) {
        var N = 0;
        return (
          vt(v, function () {
            N++;
          }),
          N
        );
      },
      toArray: function (v) {
        return (
          vt(v, function (N) {
            return N;
          }) || []
        );
      },
      only: function (v) {
        if (!Le(v))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return v;
      },
    }),
    (b.Component = M),
    (b.Fragment = a),
    (b.Profiler = f),
    (b.PureComponent = H),
    (b.StrictMode = d),
    (b.Suspense = w),
    (b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = X),
    (b.act = W),
    (b.cloneElement = function (v, N, q) {
      if (v == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            v +
            "."
        );
      var ee = T({}, v.props),
        re = v.key,
        le = v.ref,
        se = v._owner;
      if (N != null) {
        if (
          (N.ref !== void 0 && ((le = N.ref), (se = we.current)),
          N.key !== void 0 && (re = "" + N.key),
          v.type && v.type.defaultProps)
        )
          var oe = v.type.defaultProps;
        for (pe in N)
          ae.call(N, pe) &&
            !me.hasOwnProperty(pe) &&
            (ee[pe] = N[pe] === void 0 && oe !== void 0 ? oe[pe] : N[pe]);
      }
      var pe = arguments.length - 2;
      if (pe === 1) ee.children = q;
      else if (1 < pe) {
        oe = Array(pe);
        for (var Xe = 0; Xe < pe; Xe++) oe[Xe] = arguments[Xe + 2];
        ee.children = oe;
      }
      return {
        $$typeof: o,
        type: v.type,
        key: re,
        ref: le,
        props: ee,
        _owner: se,
      };
    }),
    (b.createContext = function (v) {
      return (
        (v = {
          $$typeof: x,
          _currentValue: v,
          _currentValue2: v,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (v.Provider = { $$typeof: m, _context: v }),
        (v.Consumer = v)
      );
    }),
    (b.createElement = Pe),
    (b.createFactory = function (v) {
      var N = Pe.bind(null, v);
      return (N.type = v), N;
    }),
    (b.createRef = function () {
      return { current: null };
    }),
    (b.forwardRef = function (v) {
      return { $$typeof: E, render: v };
    }),
    (b.isValidElement = Le),
    (b.lazy = function (v) {
      return { $$typeof: O, _payload: { _status: -1, _result: v }, _init: He };
    }),
    (b.memo = function (v, N) {
      return { $$typeof: k, type: v, compare: N === void 0 ? null : N };
    }),
    (b.startTransition = function (v) {
      var N = A.transition;
      A.transition = {};
      try {
        v();
      } finally {
        A.transition = N;
      }
    }),
    (b.unstable_act = W),
    (b.useCallback = function (v, N) {
      return ke.current.useCallback(v, N);
    }),
    (b.useContext = function (v) {
      return ke.current.useContext(v);
    }),
    (b.useDebugValue = function () {}),
    (b.useDeferredValue = function (v) {
      return ke.current.useDeferredValue(v);
    }),
    (b.useEffect = function (v, N) {
      return ke.current.useEffect(v, N);
    }),
    (b.useId = function () {
      return ke.current.useId();
    }),
    (b.useImperativeHandle = function (v, N, q) {
      return ke.current.useImperativeHandle(v, N, q);
    }),
    (b.useInsertionEffect = function (v, N) {
      return ke.current.useInsertionEffect(v, N);
    }),
    (b.useLayoutEffect = function (v, N) {
      return ke.current.useLayoutEffect(v, N);
    }),
    (b.useMemo = function (v, N) {
      return ke.current.useMemo(v, N);
    }),
    (b.useReducer = function (v, N, q) {
      return ke.current.useReducer(v, N, q);
    }),
    (b.useRef = function (v) {
      return ke.current.useRef(v);
    }),
    (b.useState = function (v) {
      return ke.current.useState(v);
    }),
    (b.useSyncExternalStore = function (v, N, q) {
      return ke.current.useSyncExternalStore(v, N, q);
    }),
    (b.useTransition = function () {
      return ke.current.useTransition();
    }),
    (b.version = "18.3.1"),
    b
  );
}
var oc;
function lu() {
  return oc || ((oc = 1), (Jo.exports = Ad())), Jo.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var uc;
function Ud() {
  if (uc) return Rr;
  uc = 1;
  var o = lu(),
    s = Symbol.for("react.element"),
    a = Symbol.for("react.fragment"),
    d = Object.prototype.hasOwnProperty,
    f = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    m = { key: !0, ref: !0, __self: !0, __source: !0 };
  function x(E, w, k) {
    var O,
      I = {},
      P = null,
      U = null;
    k !== void 0 && (P = "" + k),
      w.key !== void 0 && (P = "" + w.key),
      w.ref !== void 0 && (U = w.ref);
    for (O in w) d.call(w, O) && !m.hasOwnProperty(O) && (I[O] = w[O]);
    if (E && E.defaultProps)
      for (O in ((w = E.defaultProps), w)) I[O] === void 0 && (I[O] = w[O]);
    return {
      $$typeof: s,
      type: E,
      key: P,
      ref: U,
      props: I,
      _owner: f.current,
    };
  }
  return (Rr.Fragment = a), (Rr.jsx = x), (Rr.jsxs = x), Rr;
}
var ac;
function $d() {
  return ac || ((ac = 1), (Xo.exports = Ud())), Xo.exports;
}
var j = $d(),
  C = lu();
const hn = Fd(C);
var Kl = {},
  Zo = { exports: {} },
  Ye = {},
  qo = { exports: {} },
  bo = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sc;
function Hd() {
  return (
    sc ||
      ((sc = 1),
      (function (o) {
        function s(A, X) {
          var W = A.length;
          A.push(X);
          e: for (; 0 < W; ) {
            var v = (W - 1) >>> 1,
              N = A[v];
            if (0 < f(N, X)) (A[v] = X), (A[W] = N), (W = v);
            else break e;
          }
        }
        function a(A) {
          return A.length === 0 ? null : A[0];
        }
        function d(A) {
          if (A.length === 0) return null;
          var X = A[0],
            W = A.pop();
          if (W !== X) {
            A[0] = W;
            e: for (var v = 0, N = A.length, q = N >>> 1; v < q; ) {
              var ee = 2 * (v + 1) - 1,
                re = A[ee],
                le = ee + 1,
                se = A[le];
              if (0 > f(re, W))
                le < N && 0 > f(se, re)
                  ? ((A[v] = se), (A[le] = W), (v = le))
                  : ((A[v] = re), (A[ee] = W), (v = ee));
              else if (le < N && 0 > f(se, W))
                (A[v] = se), (A[le] = W), (v = le);
              else break e;
            }
          }
          return X;
        }
        function f(A, X) {
          var W = A.sortIndex - X.sortIndex;
          return W !== 0 ? W : A.id - X.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var m = performance;
          o.unstable_now = function () {
            return m.now();
          };
        } else {
          var x = Date,
            E = x.now();
          o.unstable_now = function () {
            return x.now() - E;
          };
        }
        var w = [],
          k = [],
          O = 1,
          I = null,
          P = 3,
          U = !1,
          T = !1,
          F = !1,
          M = typeof setTimeout == "function" ? setTimeout : null,
          D = typeof clearTimeout == "function" ? clearTimeout : null,
          H = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function Z(A) {
          for (var X = a(k); X !== null; ) {
            if (X.callback === null) d(k);
            else if (X.startTime <= A)
              d(k), (X.sortIndex = X.expirationTime), s(w, X);
            else break;
            X = a(k);
          }
        }
        function te(A) {
          if (((F = !1), Z(A), !T))
            if (a(w) !== null) (T = !0), He(ae);
            else {
              var X = a(k);
              X !== null && ke(te, X.startTime - A);
            }
        }
        function ae(A, X) {
          (T = !1), F && ((F = !1), D(Pe), (Pe = -1)), (U = !0);
          var W = P;
          try {
            for (
              Z(X), I = a(w);
              I !== null && (!(I.expirationTime > X) || (A && !ht()));

            ) {
              var v = I.callback;
              if (typeof v == "function") {
                (I.callback = null), (P = I.priorityLevel);
                var N = v(I.expirationTime <= X);
                (X = o.unstable_now()),
                  typeof N == "function"
                    ? (I.callback = N)
                    : I === a(w) && d(w),
                  Z(X);
              } else d(w);
              I = a(w);
            }
            if (I !== null) var q = !0;
            else {
              var ee = a(k);
              ee !== null && ke(te, ee.startTime - X), (q = !1);
            }
            return q;
          } finally {
            (I = null), (P = W), (U = !1);
          }
        }
        var we = !1,
          me = null,
          Pe = -1,
          Se = 5,
          Le = -1;
        function ht() {
          return !(o.unstable_now() - Le < Se);
        }
        function mt() {
          if (me !== null) {
            var A = o.unstable_now();
            Le = A;
            var X = !0;
            try {
              X = me(!0, A);
            } finally {
              X ? Ge() : ((we = !1), (me = null));
            }
          } else we = !1;
        }
        var Ge;
        if (typeof H == "function")
          Ge = function () {
            H(mt);
          };
        else if (typeof MessageChannel < "u") {
          var ot = new MessageChannel(),
            vt = ot.port2;
          (ot.port1.onmessage = mt),
            (Ge = function () {
              vt.postMessage(null);
            });
        } else
          Ge = function () {
            M(mt, 0);
          };
        function He(A) {
          (me = A), we || ((we = !0), Ge());
        }
        function ke(A, X) {
          Pe = M(function () {
            A(o.unstable_now());
          }, X);
        }
        (o.unstable_IdlePriority = 5),
          (o.unstable_ImmediatePriority = 1),
          (o.unstable_LowPriority = 4),
          (o.unstable_NormalPriority = 3),
          (o.unstable_Profiling = null),
          (o.unstable_UserBlockingPriority = 2),
          (o.unstable_cancelCallback = function (A) {
            A.callback = null;
          }),
          (o.unstable_continueExecution = function () {
            T || U || ((T = !0), He(ae));
          }),
          (o.unstable_forceFrameRate = function (A) {
            0 > A || 125 < A
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (Se = 0 < A ? Math.floor(1e3 / A) : 5);
          }),
          (o.unstable_getCurrentPriorityLevel = function () {
            return P;
          }),
          (o.unstable_getFirstCallbackNode = function () {
            return a(w);
          }),
          (o.unstable_next = function (A) {
            switch (P) {
              case 1:
              case 2:
              case 3:
                var X = 3;
                break;
              default:
                X = P;
            }
            var W = P;
            P = X;
            try {
              return A();
            } finally {
              P = W;
            }
          }),
          (o.unstable_pauseExecution = function () {}),
          (o.unstable_requestPaint = function () {}),
          (o.unstable_runWithPriority = function (A, X) {
            switch (A) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                A = 3;
            }
            var W = P;
            P = A;
            try {
              return X();
            } finally {
              P = W;
            }
          }),
          (o.unstable_scheduleCallback = function (A, X, W) {
            var v = o.unstable_now();
            switch (
              (typeof W == "object" && W !== null
                ? ((W = W.delay),
                  (W = typeof W == "number" && 0 < W ? v + W : v))
                : (W = v),
              A)
            ) {
              case 1:
                var N = -1;
                break;
              case 2:
                N = 250;
                break;
              case 5:
                N = 1073741823;
                break;
              case 4:
                N = 1e4;
                break;
              default:
                N = 5e3;
            }
            return (
              (N = W + N),
              (A = {
                id: O++,
                callback: X,
                priorityLevel: A,
                startTime: W,
                expirationTime: N,
                sortIndex: -1,
              }),
              W > v
                ? ((A.sortIndex = W),
                  s(k, A),
                  a(w) === null &&
                    A === a(k) &&
                    (F ? (D(Pe), (Pe = -1)) : (F = !0), ke(te, W - v)))
                : ((A.sortIndex = N), s(w, A), T || U || ((T = !0), He(ae))),
              A
            );
          }),
          (o.unstable_shouldYield = ht),
          (o.unstable_wrapCallback = function (A) {
            var X = P;
            return function () {
              var W = P;
              P = X;
              try {
                return A.apply(this, arguments);
              } finally {
                P = W;
              }
            };
          });
      })(bo)),
    bo
  );
}
var cc;
function Bd() {
  return cc || ((cc = 1), (qo.exports = Hd())), qo.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fc;
function Wd() {
  if (fc) return Ye;
  fc = 1;
  var o = lu(),
    s = Bd();
  function a(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var d = new Set(),
    f = {};
  function m(e, t) {
    x(e, t), x(e + "Capture", t);
  }
  function x(e, t) {
    for (f[e] = t, e = 0; e < t.length; e++) d.add(t[e]);
  }
  var E = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    w = Object.prototype.hasOwnProperty,
    k =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    O = {},
    I = {};
  function P(e) {
    return w.call(I, e)
      ? !0
      : w.call(O, e)
      ? !1
      : k.test(e)
      ? (I[e] = !0)
      : ((O[e] = !0), !1);
  }
  function U(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r
          ? !1
          : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function T(e, t, n, r) {
    if (t === null || typeof t > "u" || U(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function F(e, t, n, r, l, i, u) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = i),
      (this.removeEmptyString = u);
  }
  var M = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      M[e] = new F(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      M[t] = new F(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      e
    ) {
      M[e] = new F(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      M[e] = new F(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        M[e] = new F(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      M[e] = new F(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      M[e] = new F(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      M[e] = new F(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      M[e] = new F(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var D = /[\-:]([a-z])/g;
  function H(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(D, H);
      M[t] = new F(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(D, H);
        M[t] = new F(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(D, H);
      M[t] = new F(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      M[e] = new F(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (M.xlinkHref = new F(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      M[e] = new F(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function Z(e, t, n, r) {
    var l = M.hasOwnProperty(t) ? M[t] : null;
    (l !== null
      ? l.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (T(t, n, l, r) && (n = null),
      r || l === null
        ? P(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : l.mustUseProperty
        ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
        : ((t = l.attributeName),
          (r = l.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((l = l.type),
              (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var te = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    ae = Symbol.for("react.element"),
    we = Symbol.for("react.portal"),
    me = Symbol.for("react.fragment"),
    Pe = Symbol.for("react.strict_mode"),
    Se = Symbol.for("react.profiler"),
    Le = Symbol.for("react.provider"),
    ht = Symbol.for("react.context"),
    mt = Symbol.for("react.forward_ref"),
    Ge = Symbol.for("react.suspense"),
    ot = Symbol.for("react.suspense_list"),
    vt = Symbol.for("react.memo"),
    He = Symbol.for("react.lazy"),
    ke = Symbol.for("react.offscreen"),
    A = Symbol.iterator;
  function X(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (A && e[A]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var W = Object.assign,
    v;
  function N(e) {
    if (v === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        v = (t && t[1]) || "";
      }
    return (
      `
` +
      v +
      e
    );
  }
  var q = !1;
  function ee(e, t) {
    if (!e || q) return "";
    q = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (S) {
            var r = S;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (S) {
            r = S;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (S) {
          r = S;
        }
        e();
      }
    } catch (S) {
      if (S && r && typeof S.stack == "string") {
        for (
          var l = S.stack.split(`
`),
            i = r.stack.split(`
`),
            u = l.length - 1,
            c = i.length - 1;
          1 <= u && 0 <= c && l[u] !== i[c];

        )
          c--;
        for (; 1 <= u && 0 <= c; u--, c--)
          if (l[u] !== i[c]) {
            if (u !== 1 || c !== 1)
              do
                if ((u--, c--, 0 > c || l[u] !== i[c])) {
                  var p =
                    `
` + l[u].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      p.includes("<anonymous>") &&
                      (p = p.replace("<anonymous>", e.displayName)),
                    p
                  );
                }
              while (1 <= u && 0 <= c);
            break;
          }
      }
    } finally {
      (q = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? N(e) : "";
  }
  function re(e) {
    switch (e.tag) {
      case 5:
        return N(e.type);
      case 16:
        return N("Lazy");
      case 13:
        return N("Suspense");
      case 19:
        return N("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = ee(e.type, !1)), e;
      case 11:
        return (e = ee(e.type.render, !1)), e;
      case 1:
        return (e = ee(e.type, !0)), e;
      default:
        return "";
    }
  }
  function le(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case me:
        return "Fragment";
      case we:
        return "Portal";
      case Se:
        return "Profiler";
      case Pe:
        return "StrictMode";
      case Ge:
        return "Suspense";
      case ot:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case ht:
          return (e.displayName || "Context") + ".Consumer";
        case Le:
          return (e._context.displayName || "Context") + ".Provider";
        case mt:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case vt:
          return (
            (t = e.displayName || null), t !== null ? t : le(e.type) || "Memo"
          );
        case He:
          (t = e._payload), (e = e._init);
          try {
            return le(e(t));
          } catch {}
      }
    return null;
  }
  function se(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return le(t);
      case 8:
        return t === Pe ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function oe(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function pe(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Xe(e) {
    var t = pe(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var l = n.get,
        i = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (u) {
            (r = "" + u), i.call(this, u);
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (u) {
            r = "" + u;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function Dr(e) {
    e._valueTracker || (e._valueTracker = Xe(e));
  }
  function fu(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = pe(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Fr(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function ti(e, t) {
    var n = t.checked;
    return W({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function du(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    (n = oe(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function pu(e, t) {
    (t = t.checked), t != null && Z(e, "checked", t, !1);
  }
  function ni(e, t) {
    pu(e, t);
    var n = oe(t.value),
      r = t.type;
    if (n != null)
      r === "number"
        ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value")
      ? ri(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && ri(e, t.type, oe(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function hu(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (
        !(
          (r !== "submit" && r !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n);
  }
  function ri(e, t, n) {
    (t !== "number" || Fr(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Wn = Array.isArray;
  function vn(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        (l = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + oe(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          (e[l].selected = !0), r && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function li(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(a(91));
    return W({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function mu(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(a(92));
        if (Wn(n)) {
          if (1 < n.length) throw Error(a(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: oe(n) };
  }
  function vu(e, t) {
    var n = oe(t.value),
      r = oe(t.defaultValue);
    n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r);
  }
  function gu(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function yu(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function ii(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? yu(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var Ar,
    wu = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, l);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          Ar = Ar || document.createElement("div"),
            Ar.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Ar.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function Vn(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Qn = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    $c = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Qn).forEach(function (e) {
    $c.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Qn[t] = Qn[e]);
    });
  });
  function Su(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (Qn.hasOwnProperty(e) && Qn[e])
      ? ("" + t).trim()
      : t + "px";
  }
  function ku(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          l = Su(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
      }
  }
  var Hc = W(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function oi(e, t) {
    if (t) {
      if (Hc[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(a(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(a(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(a(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(a(62));
    }
  }
  function ui(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var ai = null;
  function si(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var ci = null,
    gn = null,
    yn = null;
  function xu(e) {
    if ((e = pr(e))) {
      if (typeof ci != "function") throw Error(a(280));
      var t = e.stateNode;
      t && ((t = ul(t)), ci(e.stateNode, e.type, t));
    }
  }
  function Eu(e) {
    gn ? (yn ? yn.push(e) : (yn = [e])) : (gn = e);
  }
  function Cu() {
    if (gn) {
      var e = gn,
        t = yn;
      if (((yn = gn = null), xu(e), t)) for (e = 0; e < t.length; e++) xu(t[e]);
    }
  }
  function Pu(e, t) {
    return e(t);
  }
  function _u() {}
  var fi = !1;
  function Nu(e, t, n) {
    if (fi) return e(t, n);
    fi = !0;
    try {
      return Pu(e, t, n);
    } finally {
      (fi = !1), (gn !== null || yn !== null) && (_u(), Cu());
    }
  }
  function Kn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = ul(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !r);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(a(231, t, typeof n));
    return n;
  }
  var di = !1;
  if (E)
    try {
      var Yn = {};
      Object.defineProperty(Yn, "passive", {
        get: function () {
          di = !0;
        },
      }),
        window.addEventListener("test", Yn, Yn),
        window.removeEventListener("test", Yn, Yn);
    } catch {
      di = !1;
    }
  function Bc(e, t, n, r, l, i, u, c, p) {
    var S = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, S);
    } catch (R) {
      this.onError(R);
    }
  }
  var Gn = !1,
    Ur = null,
    $r = !1,
    pi = null,
    Wc = {
      onError: function (e) {
        (Gn = !0), (Ur = e);
      },
    };
  function Vc(e, t, n, r, l, i, u, c, p) {
    (Gn = !1), (Ur = null), Bc.apply(Wc, arguments);
  }
  function Qc(e, t, n, r, l, i, u, c, p) {
    if ((Vc.apply(this, arguments), Gn)) {
      if (Gn) {
        var S = Ur;
        (Gn = !1), (Ur = null);
      } else throw Error(a(198));
      $r || (($r = !0), (pi = S));
    }
  }
  function en(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function Ru(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function Lu(e) {
    if (en(e) !== e) throw Error(a(188));
  }
  function Kc(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = en(e)), t === null)) throw Error(a(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var i = l.alternate;
      if (i === null) {
        if (((r = l.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === i.child) {
        for (i = l.child; i; ) {
          if (i === n) return Lu(l), e;
          if (i === r) return Lu(l), t;
          i = i.sibling;
        }
        throw Error(a(188));
      }
      if (n.return !== r.return) (n = l), (r = i);
      else {
        for (var u = !1, c = l.child; c; ) {
          if (c === n) {
            (u = !0), (n = l), (r = i);
            break;
          }
          if (c === r) {
            (u = !0), (r = l), (n = i);
            break;
          }
          c = c.sibling;
        }
        if (!u) {
          for (c = i.child; c; ) {
            if (c === n) {
              (u = !0), (n = i), (r = l);
              break;
            }
            if (c === r) {
              (u = !0), (r = i), (n = l);
              break;
            }
            c = c.sibling;
          }
          if (!u) throw Error(a(189));
        }
      }
      if (n.alternate !== r) throw Error(a(190));
    }
    if (n.tag !== 3) throw Error(a(188));
    return n.stateNode.current === n ? e : t;
  }
  function ju(e) {
    return (e = Kc(e)), e !== null ? zu(e) : null;
  }
  function zu(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = zu(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Tu = s.unstable_scheduleCallback,
    Ou = s.unstable_cancelCallback,
    Yc = s.unstable_shouldYield,
    Gc = s.unstable_requestPaint,
    Ee = s.unstable_now,
    Xc = s.unstable_getCurrentPriorityLevel,
    hi = s.unstable_ImmediatePriority,
    Mu = s.unstable_UserBlockingPriority,
    Hr = s.unstable_NormalPriority,
    Jc = s.unstable_LowPriority,
    Iu = s.unstable_IdlePriority,
    Br = null,
    gt = null;
  function Zc(e) {
    if (gt && typeof gt.onCommitFiberRoot == "function")
      try {
        gt.onCommitFiberRoot(Br, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var ut = Math.clz32 ? Math.clz32 : ef,
    qc = Math.log,
    bc = Math.LN2;
  function ef(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((qc(e) / bc) | 0)) | 0;
  }
  var Wr = 64,
    Vr = 4194304;
  function Xn(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Qr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      i = e.pingedLanes,
      u = n & 268435455;
    if (u !== 0) {
      var c = u & ~l;
      c !== 0 ? (r = Xn(c)) : ((i &= u), i !== 0 && (r = Xn(i)));
    } else (u = n & ~l), u !== 0 ? (r = Xn(u)) : i !== 0 && (r = Xn(i));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      !(t & l) &&
      ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
    )
      return t;
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        (n = 31 - ut(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
    return r;
  }
  function tf(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function nf(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        l = e.expirationTimes,
        i = e.pendingLanes;
      0 < i;

    ) {
      var u = 31 - ut(i),
        c = 1 << u,
        p = l[u];
      p === -1
        ? (!(c & n) || c & r) && (l[u] = tf(c, t))
        : p <= t && (e.expiredLanes |= c),
        (i &= ~c);
    }
  }
  function mi(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function Du() {
    var e = Wr;
    return (Wr <<= 1), !(Wr & 4194240) && (Wr = 64), e;
  }
  function vi(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Jn(e, t, n) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - ut(t)),
      (e[t] = n);
  }
  function rf(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - ut(n),
        i = 1 << l;
      (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
    }
  }
  function gi(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - ut(n),
        l = 1 << r;
      (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
    }
  }
  var ue = 0;
  function Fu(e) {
    return (
      (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var Au,
    yi,
    Uu,
    $u,
    Hu,
    wi = !1,
    Kr = [],
    Mt = null,
    It = null,
    Dt = null,
    Zn = new Map(),
    qn = new Map(),
    Ft = [],
    lf =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function Bu(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Mt = null;
        break;
      case "dragenter":
      case "dragleave":
        It = null;
        break;
      case "mouseover":
      case "mouseout":
        Dt = null;
        break;
      case "pointerover":
      case "pointerout":
        Zn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        qn.delete(t.pointerId);
    }
  }
  function bn(e, t, n, r, l, i) {
    return e === null || e.nativeEvent !== i
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: i,
          targetContainers: [l],
        }),
        t !== null && ((t = pr(t)), t !== null && yi(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function of(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return (Mt = bn(Mt, e, t, n, r, l)), !0;
      case "dragenter":
        return (It = bn(It, e, t, n, r, l)), !0;
      case "mouseover":
        return (Dt = bn(Dt, e, t, n, r, l)), !0;
      case "pointerover":
        var i = l.pointerId;
        return Zn.set(i, bn(Zn.get(i) || null, e, t, n, r, l)), !0;
      case "gotpointercapture":
        return (
          (i = l.pointerId), qn.set(i, bn(qn.get(i) || null, e, t, n, r, l)), !0
        );
    }
    return !1;
  }
  function Wu(e) {
    var t = tn(e.target);
    if (t !== null) {
      var n = en(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = Ru(n)), t !== null)) {
            (e.blockedOn = t),
              Hu(e.priority, function () {
                Uu(n);
              });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Yr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = ki(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        (ai = r), n.target.dispatchEvent(r), (ai = null);
      } else return (t = pr(n)), t !== null && yi(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function Vu(e, t, n) {
    Yr(e) && n.delete(t);
  }
  function uf() {
    (wi = !1),
      Mt !== null && Yr(Mt) && (Mt = null),
      It !== null && Yr(It) && (It = null),
      Dt !== null && Yr(Dt) && (Dt = null),
      Zn.forEach(Vu),
      qn.forEach(Vu);
  }
  function er(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      wi ||
        ((wi = !0),
        s.unstable_scheduleCallback(s.unstable_NormalPriority, uf)));
  }
  function tr(e) {
    function t(l) {
      return er(l, e);
    }
    if (0 < Kr.length) {
      er(Kr[0], e);
      for (var n = 1; n < Kr.length; n++) {
        var r = Kr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      Mt !== null && er(Mt, e),
        It !== null && er(It, e),
        Dt !== null && er(Dt, e),
        Zn.forEach(t),
        qn.forEach(t),
        n = 0;
      n < Ft.length;
      n++
    )
      (r = Ft[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Ft.length && ((n = Ft[0]), n.blockedOn === null); )
      Wu(n), n.blockedOn === null && Ft.shift();
  }
  var wn = te.ReactCurrentBatchConfig,
    Gr = !0;
  function af(e, t, n, r) {
    var l = ue,
      i = wn.transition;
    wn.transition = null;
    try {
      (ue = 1), Si(e, t, n, r);
    } finally {
      (ue = l), (wn.transition = i);
    }
  }
  function sf(e, t, n, r) {
    var l = ue,
      i = wn.transition;
    wn.transition = null;
    try {
      (ue = 4), Si(e, t, n, r);
    } finally {
      (ue = l), (wn.transition = i);
    }
  }
  function Si(e, t, n, r) {
    if (Gr) {
      var l = ki(e, t, n, r);
      if (l === null) Ai(e, t, r, Xr, n), Bu(e, r);
      else if (of(l, e, t, n, r)) r.stopPropagation();
      else if ((Bu(e, r), t & 4 && -1 < lf.indexOf(e))) {
        for (; l !== null; ) {
          var i = pr(l);
          if (
            (i !== null && Au(i),
            (i = ki(e, t, n, r)),
            i === null && Ai(e, t, r, Xr, n),
            i === l)
          )
            break;
          l = i;
        }
        l !== null && r.stopPropagation();
      } else Ai(e, t, r, null, n);
    }
  }
  var Xr = null;
  function ki(e, t, n, r) {
    if (((Xr = null), (e = si(r)), (e = tn(e)), e !== null))
      if (((t = en(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = Ru(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (Xr = e), null;
  }
  function Qu(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Xc()) {
          case hi:
            return 1;
          case Mu:
            return 4;
          case Hr:
          case Jc:
            return 16;
          case Iu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var At = null,
    xi = null,
    Jr = null;
  function Ku() {
    if (Jr) return Jr;
    var e,
      t = xi,
      n = t.length,
      r,
      l = "value" in At ? At.value : At.textContent,
      i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var u = n - e;
    for (r = 1; r <= u && t[n - r] === l[i - r]; r++);
    return (Jr = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function Zr(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function qr() {
    return !0;
  }
  function Yu() {
    return !1;
  }
  function Je(e) {
    function t(n, r, l, i, u) {
      (this._reactName = n),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = i),
        (this.target = u),
        (this.currentTarget = null);
      for (var c in e)
        e.hasOwnProperty(c) && ((n = e[c]), (this[c] = n ? n(i) : i[c]));
      return (
        (this.isDefaultPrevented = (
          i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
        )
          ? qr
          : Yu),
        (this.isPropagationStopped = Yu),
        this
      );
    }
    return (
      W(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = qr));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = qr));
        },
        persist: function () {},
        isPersistent: qr,
      }),
      t
    );
  }
  var Sn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Ei = Je(Sn),
    nr = W({}, Sn, { view: 0, detail: 0 }),
    cf = Je(nr),
    Ci,
    Pi,
    rr,
    br = W({}, nr, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Ni,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== rr &&
              (rr && e.type === "mousemove"
                ? ((Ci = e.screenX - rr.screenX), (Pi = e.screenY - rr.screenY))
                : (Pi = Ci = 0),
              (rr = e)),
            Ci);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Pi;
      },
    }),
    Gu = Je(br),
    ff = W({}, br, { dataTransfer: 0 }),
    df = Je(ff),
    pf = W({}, nr, { relatedTarget: 0 }),
    _i = Je(pf),
    hf = W({}, Sn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    mf = Je(hf),
    vf = W({}, Sn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    gf = Je(vf),
    yf = W({}, Sn, { data: 0 }),
    Xu = Je(yf),
    wf = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Sf = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    kf = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function xf(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = kf[e])
      ? !!t[e]
      : !1;
  }
  function Ni() {
    return xf;
  }
  var Ef = W({}, nr, {
      key: function (e) {
        if (e.key) {
          var t = wf[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Zr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? Sf[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Ni,
      charCode: function (e) {
        return e.type === "keypress" ? Zr(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Zr(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    Cf = Je(Ef),
    Pf = W({}, br, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Ju = Je(Pf),
    _f = W({}, nr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ni,
    }),
    Nf = Je(_f),
    Rf = W({}, Sn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Lf = Je(Rf),
    jf = W({}, br, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    zf = Je(jf),
    Tf = [9, 13, 27, 32],
    Ri = E && "CompositionEvent" in window,
    lr = null;
  E && "documentMode" in document && (lr = document.documentMode);
  var Of = E && "TextEvent" in window && !lr,
    Zu = E && (!Ri || (lr && 8 < lr && 11 >= lr)),
    qu = " ",
    bu = !1;
  function ea(e, t) {
    switch (e) {
      case "keyup":
        return Tf.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function ta(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var kn = !1;
  function Mf(e, t) {
    switch (e) {
      case "compositionend":
        return ta(t);
      case "keypress":
        return t.which !== 32 ? null : ((bu = !0), qu);
      case "textInput":
        return (e = t.data), e === qu && bu ? null : e;
      default:
        return null;
    }
  }
  function If(e, t) {
    if (kn)
      return e === "compositionend" || (!Ri && ea(e, t))
        ? ((e = Ku()), (Jr = xi = At = null), (kn = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Zu && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Df = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function na(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Df[e.type] : t === "textarea";
  }
  function ra(e, t, n, r) {
    Eu(r),
      (t = ll(t, "onChange")),
      0 < t.length &&
        ((n = new Ei("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t }));
  }
  var ir = null,
    or = null;
  function Ff(e) {
    ka(e, 0);
  }
  function el(e) {
    var t = _n(e);
    if (fu(t)) return e;
  }
  function Af(e, t) {
    if (e === "change") return t;
  }
  var la = !1;
  if (E) {
    var Li;
    if (E) {
      var ji = "oninput" in document;
      if (!ji) {
        var ia = document.createElement("div");
        ia.setAttribute("oninput", "return;"),
          (ji = typeof ia.oninput == "function");
      }
      Li = ji;
    } else Li = !1;
    la = Li && (!document.documentMode || 9 < document.documentMode);
  }
  function oa() {
    ir && (ir.detachEvent("onpropertychange", ua), (or = ir = null));
  }
  function ua(e) {
    if (e.propertyName === "value" && el(or)) {
      var t = [];
      ra(t, or, e, si(e)), Nu(Ff, t);
    }
  }
  function Uf(e, t, n) {
    e === "focusin"
      ? (oa(), (ir = t), (or = n), ir.attachEvent("onpropertychange", ua))
      : e === "focusout" && oa();
  }
  function $f(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return el(or);
  }
  function Hf(e, t) {
    if (e === "click") return el(t);
  }
  function Bf(e, t) {
    if (e === "input" || e === "change") return el(t);
  }
  function Wf(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var at = typeof Object.is == "function" ? Object.is : Wf;
  function ur(e, t) {
    if (at(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!w.call(t, l) || !at(e[l], t[l])) return !1;
    }
    return !0;
  }
  function aa(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function sa(e, t) {
    var n = aa(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t))
          return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = aa(n);
    }
  }
  function ca(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? ca(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function fa() {
    for (var e = window, t = Fr(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Fr(e.document);
    }
    return t;
  }
  function zi(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function Vf(e) {
    var t = fa(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      ca(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && zi(n)) {
        if (
          ((t = r.start),
          (e = r.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
        )
          (n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var l = n.textContent.length,
            i = Math.min(r.start, l);
          (r = r.end === void 0 ? i : Math.min(r.end, l)),
            !e.extend && i > r && ((l = r), (r = i), (i = l)),
            (l = sa(n, i));
          var u = sa(n, r);
          l &&
            u &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== u.node ||
              e.focusOffset !== u.offset) &&
            ((t = t.createRange()),
            t.setStart(l.node, l.offset),
            e.removeAllRanges(),
            i > r
              ? (e.addRange(t), e.extend(u.node, u.offset))
              : (t.setEnd(u.node, u.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        (e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var Qf = E && "documentMode" in document && 11 >= document.documentMode,
    xn = null,
    Ti = null,
    ar = null,
    Oi = !1;
  function da(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Oi ||
      xn == null ||
      xn !== Fr(r) ||
      ((r = xn),
      "selectionStart" in r && zi(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (ar && ur(ar, r)) ||
        ((ar = r),
        (r = ll(Ti, "onSelect")),
        0 < r.length &&
          ((t = new Ei("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = xn))));
  }
  function tl(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var En = {
      animationend: tl("Animation", "AnimationEnd"),
      animationiteration: tl("Animation", "AnimationIteration"),
      animationstart: tl("Animation", "AnimationStart"),
      transitionend: tl("Transition", "TransitionEnd"),
    },
    Mi = {},
    pa = {};
  E &&
    ((pa = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete En.animationend.animation,
      delete En.animationiteration.animation,
      delete En.animationstart.animation),
    "TransitionEvent" in window || delete En.transitionend.transition);
  function nl(e) {
    if (Mi[e]) return Mi[e];
    if (!En[e]) return e;
    var t = En[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in pa) return (Mi[e] = t[n]);
    return e;
  }
  var ha = nl("animationend"),
    ma = nl("animationiteration"),
    va = nl("animationstart"),
    ga = nl("transitionend"),
    ya = new Map(),
    wa =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function Ut(e, t) {
    ya.set(e, t), m(t, [e]);
  }
  for (var Ii = 0; Ii < wa.length; Ii++) {
    var Di = wa[Ii],
      Kf = Di.toLowerCase(),
      Yf = Di[0].toUpperCase() + Di.slice(1);
    Ut(Kf, "on" + Yf);
  }
  Ut(ha, "onAnimationEnd"),
    Ut(ma, "onAnimationIteration"),
    Ut(va, "onAnimationStart"),
    Ut("dblclick", "onDoubleClick"),
    Ut("focusin", "onFocus"),
    Ut("focusout", "onBlur"),
    Ut(ga, "onTransitionEnd"),
    x("onMouseEnter", ["mouseout", "mouseover"]),
    x("onMouseLeave", ["mouseout", "mouseover"]),
    x("onPointerEnter", ["pointerout", "pointerover"]),
    x("onPointerLeave", ["pointerout", "pointerover"]),
    m(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    m(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    m("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    m(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    m(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    m(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var sr =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    Gf = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(sr)
    );
  function Sa(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), Qc(r, t, void 0, e), (e.currentTarget = null);
  }
  function ka(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.event;
      r = r.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var u = r.length - 1; 0 <= u; u--) {
            var c = r[u],
              p = c.instance,
              S = c.currentTarget;
            if (((c = c.listener), p !== i && l.isPropagationStopped()))
              break e;
            Sa(l, c, S), (i = p);
          }
        else
          for (u = 0; u < r.length; u++) {
            if (
              ((c = r[u]),
              (p = c.instance),
              (S = c.currentTarget),
              (c = c.listener),
              p !== i && l.isPropagationStopped())
            )
              break e;
            Sa(l, c, S), (i = p);
          }
      }
    }
    if ($r) throw ((e = pi), ($r = !1), (pi = null), e);
  }
  function fe(e, t) {
    var n = t[Vi];
    n === void 0 && (n = t[Vi] = new Set());
    var r = e + "__bubble";
    n.has(r) || (xa(t, e, 2, !1), n.add(r));
  }
  function Fi(e, t, n) {
    var r = 0;
    t && (r |= 4), xa(n, e, r, t);
  }
  var rl = "_reactListening" + Math.random().toString(36).slice(2);
  function cr(e) {
    if (!e[rl]) {
      (e[rl] = !0),
        d.forEach(function (n) {
          n !== "selectionchange" && (Gf.has(n) || Fi(n, !1, e), Fi(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[rl] || ((t[rl] = !0), Fi("selectionchange", !1, t));
    }
  }
  function xa(e, t, n, r) {
    switch (Qu(t)) {
      case 1:
        var l = af;
        break;
      case 4:
        l = sf;
        break;
      default:
        l = Si;
    }
    (n = l.bind(null, t, n, e)),
      (l = void 0),
      !di ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
        ? e.addEventListener(t, n, { passive: l })
        : e.addEventListener(t, n, !1);
  }
  function Ai(e, t, n, r, l) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null)
      e: for (;;) {
        if (r === null) return;
        var u = r.tag;
        if (u === 3 || u === 4) {
          var c = r.stateNode.containerInfo;
          if (c === l || (c.nodeType === 8 && c.parentNode === l)) break;
          if (u === 4)
            for (u = r.return; u !== null; ) {
              var p = u.tag;
              if (
                (p === 3 || p === 4) &&
                ((p = u.stateNode.containerInfo),
                p === l || (p.nodeType === 8 && p.parentNode === l))
              )
                return;
              u = u.return;
            }
          for (; c !== null; ) {
            if (((u = tn(c)), u === null)) return;
            if (((p = u.tag), p === 5 || p === 6)) {
              r = i = u;
              continue e;
            }
            c = c.parentNode;
          }
        }
        r = r.return;
      }
    Nu(function () {
      var S = i,
        R = si(n),
        L = [];
      e: {
        var _ = ya.get(e);
        if (_ !== void 0) {
          var $ = Ei,
            V = e;
          switch (e) {
            case "keypress":
              if (Zr(n) === 0) break e;
            case "keydown":
            case "keyup":
              $ = Cf;
              break;
            case "focusin":
              (V = "focus"), ($ = _i);
              break;
            case "focusout":
              (V = "blur"), ($ = _i);
              break;
            case "beforeblur":
            case "afterblur":
              $ = _i;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              $ = Gu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              $ = df;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              $ = Nf;
              break;
            case ha:
            case ma:
            case va:
              $ = mf;
              break;
            case ga:
              $ = Lf;
              break;
            case "scroll":
              $ = cf;
              break;
            case "wheel":
              $ = zf;
              break;
            case "copy":
            case "cut":
            case "paste":
              $ = gf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              $ = Ju;
          }
          var Q = (t & 4) !== 0,
            Ce = !Q && e === "scroll",
            g = Q ? (_ !== null ? _ + "Capture" : null) : _;
          Q = [];
          for (var h = S, y; h !== null; ) {
            y = h;
            var z = y.stateNode;
            if (
              (y.tag === 5 &&
                z !== null &&
                ((y = z),
                g !== null &&
                  ((z = Kn(h, g)), z != null && Q.push(fr(h, z, y)))),
              Ce)
            )
              break;
            h = h.return;
          }
          0 < Q.length &&
            ((_ = new $(_, V, null, n, R)), L.push({ event: _, listeners: Q }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((_ = e === "mouseover" || e === "pointerover"),
            ($ = e === "mouseout" || e === "pointerout"),
            _ &&
              n !== ai &&
              (V = n.relatedTarget || n.fromElement) &&
              (tn(V) || V[Ct]))
          )
            break e;
          if (
            ($ || _) &&
            ((_ =
              R.window === R
                ? R
                : (_ = R.ownerDocument)
                ? _.defaultView || _.parentWindow
                : window),
            $
              ? ((V = n.relatedTarget || n.toElement),
                ($ = S),
                (V = V ? tn(V) : null),
                V !== null &&
                  ((Ce = en(V)), V !== Ce || (V.tag !== 5 && V.tag !== 6)) &&
                  (V = null))
              : (($ = null), (V = S)),
            $ !== V)
          ) {
            if (
              ((Q = Gu),
              (z = "onMouseLeave"),
              (g = "onMouseEnter"),
              (h = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((Q = Ju),
                (z = "onPointerLeave"),
                (g = "onPointerEnter"),
                (h = "pointer")),
              (Ce = $ == null ? _ : _n($)),
              (y = V == null ? _ : _n(V)),
              (_ = new Q(z, h + "leave", $, n, R)),
              (_.target = Ce),
              (_.relatedTarget = y),
              (z = null),
              tn(R) === S &&
                ((Q = new Q(g, h + "enter", V, n, R)),
                (Q.target = y),
                (Q.relatedTarget = Ce),
                (z = Q)),
              (Ce = z),
              $ && V)
            )
              t: {
                for (Q = $, g = V, h = 0, y = Q; y; y = Cn(y)) h++;
                for (y = 0, z = g; z; z = Cn(z)) y++;
                for (; 0 < h - y; ) (Q = Cn(Q)), h--;
                for (; 0 < y - h; ) (g = Cn(g)), y--;
                for (; h--; ) {
                  if (Q === g || (g !== null && Q === g.alternate)) break t;
                  (Q = Cn(Q)), (g = Cn(g));
                }
                Q = null;
              }
            else Q = null;
            $ !== null && Ea(L, _, $, Q, !1),
              V !== null && Ce !== null && Ea(L, Ce, V, Q, !0);
          }
        }
        e: {
          if (
            ((_ = S ? _n(S) : window),
            ($ = _.nodeName && _.nodeName.toLowerCase()),
            $ === "select" || ($ === "input" && _.type === "file"))
          )
            var K = Af;
          else if (na(_))
            if (la) K = Bf;
            else {
              K = $f;
              var Y = Uf;
            }
          else
            ($ = _.nodeName) &&
              $.toLowerCase() === "input" &&
              (_.type === "checkbox" || _.type === "radio") &&
              (K = Hf);
          if (K && (K = K(e, S))) {
            ra(L, K, n, R);
            break e;
          }
          Y && Y(e, _, S),
            e === "focusout" &&
              (Y = _._wrapperState) &&
              Y.controlled &&
              _.type === "number" &&
              ri(_, "number", _.value);
        }
        switch (((Y = S ? _n(S) : window), e)) {
          case "focusin":
            (na(Y) || Y.contentEditable === "true") &&
              ((xn = Y), (Ti = S), (ar = null));
            break;
          case "focusout":
            ar = Ti = xn = null;
            break;
          case "mousedown":
            Oi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Oi = !1), da(L, n, R);
            break;
          case "selectionchange":
            if (Qf) break;
          case "keydown":
          case "keyup":
            da(L, n, R);
        }
        var G;
        if (Ri)
          e: {
            switch (e) {
              case "compositionstart":
                var J = "onCompositionStart";
                break e;
              case "compositionend":
                J = "onCompositionEnd";
                break e;
              case "compositionupdate":
                J = "onCompositionUpdate";
                break e;
            }
            J = void 0;
          }
        else
          kn
            ? ea(e, n) && (J = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (J = "onCompositionStart");
        J &&
          (Zu &&
            n.locale !== "ko" &&
            (kn || J !== "onCompositionStart"
              ? J === "onCompositionEnd" && kn && (G = Ku())
              : ((At = R),
                (xi = "value" in At ? At.value : At.textContent),
                (kn = !0))),
          (Y = ll(S, J)),
          0 < Y.length &&
            ((J = new Xu(J, e, null, n, R)),
            L.push({ event: J, listeners: Y }),
            G ? (J.data = G) : ((G = ta(n)), G !== null && (J.data = G)))),
          (G = Of ? Mf(e, n) : If(e, n)) &&
            ((S = ll(S, "onBeforeInput")),
            0 < S.length &&
              ((R = new Xu("onBeforeInput", "beforeinput", null, n, R)),
              L.push({ event: R, listeners: S }),
              (R.data = G)));
      }
      ka(L, t);
    });
  }
  function fr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function ll(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e,
        i = l.stateNode;
      l.tag === 5 &&
        i !== null &&
        ((l = i),
        (i = Kn(e, n)),
        i != null && r.unshift(fr(e, i, l)),
        (i = Kn(e, t)),
        i != null && r.push(fr(e, i, l))),
        (e = e.return);
    }
    return r;
  }
  function Cn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Ea(e, t, n, r, l) {
    for (var i = t._reactName, u = []; n !== null && n !== r; ) {
      var c = n,
        p = c.alternate,
        S = c.stateNode;
      if (p !== null && p === r) break;
      c.tag === 5 &&
        S !== null &&
        ((c = S),
        l
          ? ((p = Kn(n, i)), p != null && u.unshift(fr(n, p, c)))
          : l || ((p = Kn(n, i)), p != null && u.push(fr(n, p, c)))),
        (n = n.return);
    }
    u.length !== 0 && e.push({ event: t, listeners: u });
  }
  var Xf = /\r\n?/g,
    Jf = /\u0000|\uFFFD/g;
  function Ca(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Xf,
        `
`
      )
      .replace(Jf, "");
  }
  function il(e, t, n) {
    if (((t = Ca(t)), Ca(e) !== t && n)) throw Error(a(425));
  }
  function ol() {}
  var Ui = null,
    $i = null;
  function Hi(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Bi = typeof setTimeout == "function" ? setTimeout : void 0,
    Zf = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Pa = typeof Promise == "function" ? Promise : void 0,
    qf =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Pa < "u"
        ? function (e) {
            return Pa.resolve(null).then(e).catch(bf);
          }
        : Bi;
  function bf(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Wi(e, t) {
    var n = t,
      r = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === "/$")) {
          if (r === 0) {
            e.removeChild(l), tr(t);
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = l;
    } while (n);
    tr(t);
  }
  function $t(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function _a(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Pn = Math.random().toString(36).slice(2),
    yt = "__reactFiber$" + Pn,
    dr = "__reactProps$" + Pn,
    Ct = "__reactContainer$" + Pn,
    Vi = "__reactEvents$" + Pn,
    ed = "__reactListeners$" + Pn,
    td = "__reactHandles$" + Pn;
  function tn(e) {
    var t = e[yt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[Ct] || n[yt])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = _a(e); e !== null; ) {
            if ((n = e[yt])) return n;
            e = _a(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function pr(e) {
    return (
      (e = e[yt] || e[Ct]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function _n(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(a(33));
  }
  function ul(e) {
    return e[dr] || null;
  }
  var Qi = [],
    Nn = -1;
  function Ht(e) {
    return { current: e };
  }
  function de(e) {
    0 > Nn || ((e.current = Qi[Nn]), (Qi[Nn] = null), Nn--);
  }
  function ce(e, t) {
    Nn++, (Qi[Nn] = e.current), (e.current = t);
  }
  var Bt = {},
    Ie = Ht(Bt),
    Be = Ht(!1),
    nn = Bt;
  function Rn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Bt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      i;
    for (i in n) l[i] = t[i];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function We(e) {
    return (e = e.childContextTypes), e != null;
  }
  function al() {
    de(Be), de(Ie);
  }
  function Na(e, t, n) {
    if (Ie.current !== Bt) throw Error(a(168));
    ce(Ie, t), ce(Be, n);
  }
  function Ra(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(a(108, se(e) || "Unknown", l));
    return W({}, n, r);
  }
  function sl(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Bt),
      (nn = Ie.current),
      ce(Ie, e),
      ce(Be, Be.current),
      !0
    );
  }
  function La(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(a(169));
    n
      ? ((e = Ra(e, t, nn)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        de(Be),
        de(Ie),
        ce(Ie, e))
      : de(Be),
      ce(Be, n);
  }
  var Pt = null,
    cl = !1,
    Ki = !1;
  function ja(e) {
    Pt === null ? (Pt = [e]) : Pt.push(e);
  }
  function nd(e) {
    (cl = !0), ja(e);
  }
  function Wt() {
    if (!Ki && Pt !== null) {
      Ki = !0;
      var e = 0,
        t = ue;
      try {
        var n = Pt;
        for (ue = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        (Pt = null), (cl = !1);
      } catch (l) {
        throw (Pt !== null && (Pt = Pt.slice(e + 1)), Tu(hi, Wt), l);
      } finally {
        (ue = t), (Ki = !1);
      }
    }
    return null;
  }
  var Ln = [],
    jn = 0,
    fl = null,
    dl = 0,
    et = [],
    tt = 0,
    rn = null,
    _t = 1,
    Nt = "";
  function ln(e, t) {
    (Ln[jn++] = dl), (Ln[jn++] = fl), (fl = e), (dl = t);
  }
  function za(e, t, n) {
    (et[tt++] = _t), (et[tt++] = Nt), (et[tt++] = rn), (rn = e);
    var r = _t;
    e = Nt;
    var l = 32 - ut(r) - 1;
    (r &= ~(1 << l)), (n += 1);
    var i = 32 - ut(t) + l;
    if (30 < i) {
      var u = l - (l % 5);
      (i = (r & ((1 << u) - 1)).toString(32)),
        (r >>= u),
        (l -= u),
        (_t = (1 << (32 - ut(t) + l)) | (n << l) | r),
        (Nt = i + e);
    } else (_t = (1 << i) | (n << l) | r), (Nt = e);
  }
  function Yi(e) {
    e.return !== null && (ln(e, 1), za(e, 1, 0));
  }
  function Gi(e) {
    for (; e === fl; )
      (fl = Ln[--jn]), (Ln[jn] = null), (dl = Ln[--jn]), (Ln[jn] = null);
    for (; e === rn; )
      (rn = et[--tt]),
        (et[tt] = null),
        (Nt = et[--tt]),
        (et[tt] = null),
        (_t = et[--tt]),
        (et[tt] = null);
  }
  var Ze = null,
    qe = null,
    he = !1,
    st = null;
  function Ta(e, t) {
    var n = it(5, null, null, 0);
    (n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
  }
  function Oa(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (Ze = e), (qe = $t(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (Ze = e), (qe = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = rn !== null ? { id: _t, overflow: Nt } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = it(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (Ze = e),
              (qe = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Xi(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Ji(e) {
    if (he) {
      var t = qe;
      if (t) {
        var n = t;
        if (!Oa(e, t)) {
          if (Xi(e)) throw Error(a(418));
          t = $t(n.nextSibling);
          var r = Ze;
          t && Oa(e, t)
            ? Ta(r, n)
            : ((e.flags = (e.flags & -4097) | 2), (he = !1), (Ze = e));
        }
      } else {
        if (Xi(e)) throw Error(a(418));
        (e.flags = (e.flags & -4097) | 2), (he = !1), (Ze = e);
      }
    }
  }
  function Ma(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    Ze = e;
  }
  function pl(e) {
    if (e !== Ze) return !1;
    if (!he) return Ma(e), (he = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !Hi(e.type, e.memoizedProps))),
      t && (t = qe))
    ) {
      if (Xi(e)) throw (Ia(), Error(a(418)));
      for (; t; ) Ta(e, t), (t = $t(t.nextSibling));
    }
    if ((Ma(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(a(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                qe = $t(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        qe = null;
      }
    } else qe = Ze ? $t(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Ia() {
    for (var e = qe; e; ) e = $t(e.nextSibling);
  }
  function zn() {
    (qe = Ze = null), (he = !1);
  }
  function Zi(e) {
    st === null ? (st = [e]) : st.push(e);
  }
  var rd = te.ReactCurrentBatchConfig;
  function hr(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(a(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(a(147, e));
        var l = r,
          i = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === i
          ? t.ref
          : ((t = function (u) {
              var c = l.refs;
              u === null ? delete c[i] : (c[i] = u);
            }),
            (t._stringRef = i),
            t);
      }
      if (typeof e != "string") throw Error(a(284));
      if (!n._owner) throw Error(a(290, e));
    }
    return e;
  }
  function hl(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        a(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e
        )
      ))
    );
  }
  function Da(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Fa(e) {
    function t(g, h) {
      if (e) {
        var y = g.deletions;
        y === null ? ((g.deletions = [h]), (g.flags |= 16)) : y.push(h);
      }
    }
    function n(g, h) {
      if (!e) return null;
      for (; h !== null; ) t(g, h), (h = h.sibling);
      return null;
    }
    function r(g, h) {
      for (g = new Map(); h !== null; )
        h.key !== null ? g.set(h.key, h) : g.set(h.index, h), (h = h.sibling);
      return g;
    }
    function l(g, h) {
      return (g = Zt(g, h)), (g.index = 0), (g.sibling = null), g;
    }
    function i(g, h, y) {
      return (
        (g.index = y),
        e
          ? ((y = g.alternate),
            y !== null
              ? ((y = y.index), y < h ? ((g.flags |= 2), h) : y)
              : ((g.flags |= 2), h))
          : ((g.flags |= 1048576), h)
      );
    }
    function u(g) {
      return e && g.alternate === null && (g.flags |= 2), g;
    }
    function c(g, h, y, z) {
      return h === null || h.tag !== 6
        ? ((h = Wo(y, g.mode, z)), (h.return = g), h)
        : ((h = l(h, y)), (h.return = g), h);
    }
    function p(g, h, y, z) {
      var K = y.type;
      return K === me
        ? R(g, h, y.props.children, z, y.key)
        : h !== null &&
          (h.elementType === K ||
            (typeof K == "object" &&
              K !== null &&
              K.$$typeof === He &&
              Da(K) === h.type))
        ? ((z = l(h, y.props)), (z.ref = hr(g, h, y)), (z.return = g), z)
        : ((z = Al(y.type, y.key, y.props, null, g.mode, z)),
          (z.ref = hr(g, h, y)),
          (z.return = g),
          z);
    }
    function S(g, h, y, z) {
      return h === null ||
        h.tag !== 4 ||
        h.stateNode.containerInfo !== y.containerInfo ||
        h.stateNode.implementation !== y.implementation
        ? ((h = Vo(y, g.mode, z)), (h.return = g), h)
        : ((h = l(h, y.children || [])), (h.return = g), h);
    }
    function R(g, h, y, z, K) {
      return h === null || h.tag !== 7
        ? ((h = pn(y, g.mode, z, K)), (h.return = g), h)
        : ((h = l(h, y)), (h.return = g), h);
    }
    function L(g, h, y) {
      if ((typeof h == "string" && h !== "") || typeof h == "number")
        return (h = Wo("" + h, g.mode, y)), (h.return = g), h;
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case ae:
            return (
              (y = Al(h.type, h.key, h.props, null, g.mode, y)),
              (y.ref = hr(g, null, h)),
              (y.return = g),
              y
            );
          case we:
            return (h = Vo(h, g.mode, y)), (h.return = g), h;
          case He:
            var z = h._init;
            return L(g, z(h._payload), y);
        }
        if (Wn(h) || X(h))
          return (h = pn(h, g.mode, y, null)), (h.return = g), h;
        hl(g, h);
      }
      return null;
    }
    function _(g, h, y, z) {
      var K = h !== null ? h.key : null;
      if ((typeof y == "string" && y !== "") || typeof y == "number")
        return K !== null ? null : c(g, h, "" + y, z);
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case ae:
            return y.key === K ? p(g, h, y, z) : null;
          case we:
            return y.key === K ? S(g, h, y, z) : null;
          case He:
            return (K = y._init), _(g, h, K(y._payload), z);
        }
        if (Wn(y) || X(y)) return K !== null ? null : R(g, h, y, z, null);
        hl(g, y);
      }
      return null;
    }
    function $(g, h, y, z, K) {
      if ((typeof z == "string" && z !== "") || typeof z == "number")
        return (g = g.get(y) || null), c(h, g, "" + z, K);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case ae:
            return (
              (g = g.get(z.key === null ? y : z.key) || null), p(h, g, z, K)
            );
          case we:
            return (
              (g = g.get(z.key === null ? y : z.key) || null), S(h, g, z, K)
            );
          case He:
            var Y = z._init;
            return $(g, h, y, Y(z._payload), K);
        }
        if (Wn(z) || X(z)) return (g = g.get(y) || null), R(h, g, z, K, null);
        hl(h, z);
      }
      return null;
    }
    function V(g, h, y, z) {
      for (
        var K = null, Y = null, G = h, J = (h = 0), Te = null;
        G !== null && J < y.length;
        J++
      ) {
        G.index > J ? ((Te = G), (G = null)) : (Te = G.sibling);
        var ie = _(g, G, y[J], z);
        if (ie === null) {
          G === null && (G = Te);
          break;
        }
        e && G && ie.alternate === null && t(g, G),
          (h = i(ie, h, J)),
          Y === null ? (K = ie) : (Y.sibling = ie),
          (Y = ie),
          (G = Te);
      }
      if (J === y.length) return n(g, G), he && ln(g, J), K;
      if (G === null) {
        for (; J < y.length; J++)
          (G = L(g, y[J], z)),
            G !== null &&
              ((h = i(G, h, J)),
              Y === null ? (K = G) : (Y.sibling = G),
              (Y = G));
        return he && ln(g, J), K;
      }
      for (G = r(g, G); J < y.length; J++)
        (Te = $(G, g, J, y[J], z)),
          Te !== null &&
            (e &&
              Te.alternate !== null &&
              G.delete(Te.key === null ? J : Te.key),
            (h = i(Te, h, J)),
            Y === null ? (K = Te) : (Y.sibling = Te),
            (Y = Te));
      return (
        e &&
          G.forEach(function (qt) {
            return t(g, qt);
          }),
        he && ln(g, J),
        K
      );
    }
    function Q(g, h, y, z) {
      var K = X(y);
      if (typeof K != "function") throw Error(a(150));
      if (((y = K.call(y)), y == null)) throw Error(a(151));
      for (
        var Y = (K = null), G = h, J = (h = 0), Te = null, ie = y.next();
        G !== null && !ie.done;
        J++, ie = y.next()
      ) {
        G.index > J ? ((Te = G), (G = null)) : (Te = G.sibling);
        var qt = _(g, G, ie.value, z);
        if (qt === null) {
          G === null && (G = Te);
          break;
        }
        e && G && qt.alternate === null && t(g, G),
          (h = i(qt, h, J)),
          Y === null ? (K = qt) : (Y.sibling = qt),
          (Y = qt),
          (G = Te);
      }
      if (ie.done) return n(g, G), he && ln(g, J), K;
      if (G === null) {
        for (; !ie.done; J++, ie = y.next())
          (ie = L(g, ie.value, z)),
            ie !== null &&
              ((h = i(ie, h, J)),
              Y === null ? (K = ie) : (Y.sibling = ie),
              (Y = ie));
        return he && ln(g, J), K;
      }
      for (G = r(g, G); !ie.done; J++, ie = y.next())
        (ie = $(G, g, J, ie.value, z)),
          ie !== null &&
            (e &&
              ie.alternate !== null &&
              G.delete(ie.key === null ? J : ie.key),
            (h = i(ie, h, J)),
            Y === null ? (K = ie) : (Y.sibling = ie),
            (Y = ie));
      return (
        e &&
          G.forEach(function (Dd) {
            return t(g, Dd);
          }),
        he && ln(g, J),
        K
      );
    }
    function Ce(g, h, y, z) {
      if (
        (typeof y == "object" &&
          y !== null &&
          y.type === me &&
          y.key === null &&
          (y = y.props.children),
        typeof y == "object" && y !== null)
      ) {
        switch (y.$$typeof) {
          case ae:
            e: {
              for (var K = y.key, Y = h; Y !== null; ) {
                if (Y.key === K) {
                  if (((K = y.type), K === me)) {
                    if (Y.tag === 7) {
                      n(g, Y.sibling),
                        (h = l(Y, y.props.children)),
                        (h.return = g),
                        (g = h);
                      break e;
                    }
                  } else if (
                    Y.elementType === K ||
                    (typeof K == "object" &&
                      K !== null &&
                      K.$$typeof === He &&
                      Da(K) === Y.type)
                  ) {
                    n(g, Y.sibling),
                      (h = l(Y, y.props)),
                      (h.ref = hr(g, Y, y)),
                      (h.return = g),
                      (g = h);
                    break e;
                  }
                  n(g, Y);
                  break;
                } else t(g, Y);
                Y = Y.sibling;
              }
              y.type === me
                ? ((h = pn(y.props.children, g.mode, z, y.key)),
                  (h.return = g),
                  (g = h))
                : ((z = Al(y.type, y.key, y.props, null, g.mode, z)),
                  (z.ref = hr(g, h, y)),
                  (z.return = g),
                  (g = z));
            }
            return u(g);
          case we:
            e: {
              for (Y = y.key; h !== null; ) {
                if (h.key === Y)
                  if (
                    h.tag === 4 &&
                    h.stateNode.containerInfo === y.containerInfo &&
                    h.stateNode.implementation === y.implementation
                  ) {
                    n(g, h.sibling),
                      (h = l(h, y.children || [])),
                      (h.return = g),
                      (g = h);
                    break e;
                  } else {
                    n(g, h);
                    break;
                  }
                else t(g, h);
                h = h.sibling;
              }
              (h = Vo(y, g.mode, z)), (h.return = g), (g = h);
            }
            return u(g);
          case He:
            return (Y = y._init), Ce(g, h, Y(y._payload), z);
        }
        if (Wn(y)) return V(g, h, y, z);
        if (X(y)) return Q(g, h, y, z);
        hl(g, y);
      }
      return (typeof y == "string" && y !== "") || typeof y == "number"
        ? ((y = "" + y),
          h !== null && h.tag === 6
            ? (n(g, h.sibling), (h = l(h, y)), (h.return = g), (g = h))
            : (n(g, h), (h = Wo(y, g.mode, z)), (h.return = g), (g = h)),
          u(g))
        : n(g, h);
    }
    return Ce;
  }
  var Tn = Fa(!0),
    Aa = Fa(!1),
    ml = Ht(null),
    vl = null,
    On = null,
    qi = null;
  function bi() {
    qi = On = vl = null;
  }
  function eo(e) {
    var t = ml.current;
    de(ml), (e._currentValue = t);
  }
  function to(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function Mn(e, t) {
    (vl = e),
      (qi = On = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & t && (Ve = !0), (e.firstContext = null));
  }
  function nt(e) {
    var t = e._currentValue;
    if (qi !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), On === null)) {
        if (vl === null) throw Error(a(308));
        (On = e), (vl.dependencies = { lanes: 0, firstContext: e });
      } else On = On.next = e;
    return t;
  }
  var on = null;
  function no(e) {
    on === null ? (on = [e]) : on.push(e);
  }
  function Ua(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), no(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      Rt(e, r)
    );
  }
  function Rt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
  }
  var Vt = !1;
  function ro(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function $a(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function Lt(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Qt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), ne & 2)) {
      var l = r.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (r.pending = t),
        Rt(e, n)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), no(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      Rt(e, n)
    );
  }
  function gl(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), gi(e, n);
    }
  }
  function Ha(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var l = null,
        i = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var u = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          i === null ? (l = i = u) : (i = i.next = u), (n = n.next);
        } while (n !== null);
        i === null ? (l = i = t) : (i = i.next = t);
      } else l = i = t;
      (n = {
        baseState: r.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: i,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = n);
      return;
    }
    (e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  }
  function yl(e, t, n, r) {
    var l = e.updateQueue;
    Vt = !1;
    var i = l.firstBaseUpdate,
      u = l.lastBaseUpdate,
      c = l.shared.pending;
    if (c !== null) {
      l.shared.pending = null;
      var p = c,
        S = p.next;
      (p.next = null), u === null ? (i = S) : (u.next = S), (u = p);
      var R = e.alternate;
      R !== null &&
        ((R = R.updateQueue),
        (c = R.lastBaseUpdate),
        c !== u &&
          (c === null ? (R.firstBaseUpdate = S) : (c.next = S),
          (R.lastBaseUpdate = p)));
    }
    if (i !== null) {
      var L = l.baseState;
      (u = 0), (R = S = p = null), (c = i);
      do {
        var _ = c.lane,
          $ = c.eventTime;
        if ((r & _) === _) {
          R !== null &&
            (R = R.next =
              {
                eventTime: $,
                lane: 0,
                tag: c.tag,
                payload: c.payload,
                callback: c.callback,
                next: null,
              });
          e: {
            var V = e,
              Q = c;
            switch (((_ = t), ($ = n), Q.tag)) {
              case 1:
                if (((V = Q.payload), typeof V == "function")) {
                  L = V.call($, L, _);
                  break e;
                }
                L = V;
                break e;
              case 3:
                V.flags = (V.flags & -65537) | 128;
              case 0:
                if (
                  ((V = Q.payload),
                  (_ = typeof V == "function" ? V.call($, L, _) : V),
                  _ == null)
                )
                  break e;
                L = W({}, L, _);
                break e;
              case 2:
                Vt = !0;
            }
          }
          c.callback !== null &&
            c.lane !== 0 &&
            ((e.flags |= 64),
            (_ = l.effects),
            _ === null ? (l.effects = [c]) : _.push(c));
        } else
          ($ = {
            eventTime: $,
            lane: _,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null,
          }),
            R === null ? ((S = R = $), (p = L)) : (R = R.next = $),
            (u |= _);
        if (((c = c.next), c === null)) {
          if (((c = l.shared.pending), c === null)) break;
          (_ = c),
            (c = _.next),
            (_.next = null),
            (l.lastBaseUpdate = _),
            (l.shared.pending = null);
        }
      } while (!0);
      if (
        (R === null && (p = L),
        (l.baseState = p),
        (l.firstBaseUpdate = S),
        (l.lastBaseUpdate = R),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do (u |= l.lane), (l = l.next);
        while (l !== t);
      } else i === null && (l.shared.lanes = 0);
      (sn |= u), (e.lanes = u), (e.memoizedState = L);
    }
  }
  function Ba(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          l = r.callback;
        if (l !== null) {
          if (((r.callback = null), (r = n), typeof l != "function"))
            throw Error(a(191, l));
          l.call(r);
        }
      }
  }
  var mr = {},
    wt = Ht(mr),
    vr = Ht(mr),
    gr = Ht(mr);
  function un(e) {
    if (e === mr) throw Error(a(174));
    return e;
  }
  function lo(e, t) {
    switch ((ce(gr, t), ce(vr, e), ce(wt, mr), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : ii(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = ii(t, e));
    }
    de(wt), ce(wt, t);
  }
  function In() {
    de(wt), de(vr), de(gr);
  }
  function Wa(e) {
    un(gr.current);
    var t = un(wt.current),
      n = ii(t, e.type);
    t !== n && (ce(vr, e), ce(wt, n));
  }
  function io(e) {
    vr.current === e && (de(wt), de(vr));
  }
  var ve = Ht(0);
  function wl(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var oo = [];
  function uo() {
    for (var e = 0; e < oo.length; e++)
      oo[e]._workInProgressVersionPrimary = null;
    oo.length = 0;
  }
  var Sl = te.ReactCurrentDispatcher,
    ao = te.ReactCurrentBatchConfig,
    an = 0,
    ge = null,
    Ne = null,
    je = null,
    kl = !1,
    yr = !1,
    wr = 0,
    ld = 0;
  function De() {
    throw Error(a(321));
  }
  function so(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!at(e[n], t[n])) return !1;
    return !0;
  }
  function co(e, t, n, r, l, i) {
    if (
      ((an = i),
      (ge = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (Sl.current = e === null || e.memoizedState === null ? ad : sd),
      (e = n(r, l)),
      yr)
    ) {
      i = 0;
      do {
        if (((yr = !1), (wr = 0), 25 <= i)) throw Error(a(301));
        (i += 1),
          (je = Ne = null),
          (t.updateQueue = null),
          (Sl.current = cd),
          (e = n(r, l));
      } while (yr);
    }
    if (
      ((Sl.current = Cl),
      (t = Ne !== null && Ne.next !== null),
      (an = 0),
      (je = Ne = ge = null),
      (kl = !1),
      t)
    )
      throw Error(a(300));
    return e;
  }
  function fo() {
    var e = wr !== 0;
    return (wr = 0), e;
  }
  function St() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return je === null ? (ge.memoizedState = je = e) : (je = je.next = e), je;
  }
  function rt() {
    if (Ne === null) {
      var e = ge.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ne.next;
    var t = je === null ? ge.memoizedState : je.next;
    if (t !== null) (je = t), (Ne = e);
    else {
      if (e === null) throw Error(a(310));
      (Ne = e),
        (e = {
          memoizedState: Ne.memoizedState,
          baseState: Ne.baseState,
          baseQueue: Ne.baseQueue,
          queue: Ne.queue,
          next: null,
        }),
        je === null ? (ge.memoizedState = je = e) : (je = je.next = e);
    }
    return je;
  }
  function Sr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function po(e) {
    var t = rt(),
      n = t.queue;
    if (n === null) throw Error(a(311));
    n.lastRenderedReducer = e;
    var r = Ne,
      l = r.baseQueue,
      i = n.pending;
    if (i !== null) {
      if (l !== null) {
        var u = l.next;
        (l.next = i.next), (i.next = u);
      }
      (r.baseQueue = l = i), (n.pending = null);
    }
    if (l !== null) {
      (i = l.next), (r = r.baseState);
      var c = (u = null),
        p = null,
        S = i;
      do {
        var R = S.lane;
        if ((an & R) === R)
          p !== null &&
            (p = p.next =
              {
                lane: 0,
                action: S.action,
                hasEagerState: S.hasEagerState,
                eagerState: S.eagerState,
                next: null,
              }),
            (r = S.hasEagerState ? S.eagerState : e(r, S.action));
        else {
          var L = {
            lane: R,
            action: S.action,
            hasEagerState: S.hasEagerState,
            eagerState: S.eagerState,
            next: null,
          };
          p === null ? ((c = p = L), (u = r)) : (p = p.next = L),
            (ge.lanes |= R),
            (sn |= R);
        }
        S = S.next;
      } while (S !== null && S !== i);
      p === null ? (u = r) : (p.next = c),
        at(r, t.memoizedState) || (Ve = !0),
        (t.memoizedState = r),
        (t.baseState = u),
        (t.baseQueue = p),
        (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do (i = l.lane), (ge.lanes |= i), (sn |= i), (l = l.next);
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function ho(e) {
    var t = rt(),
      n = t.queue;
    if (n === null) throw Error(a(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      l = n.pending,
      i = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var u = (l = l.next);
      do (i = e(i, u.action)), (u = u.next);
      while (u !== l);
      at(i, t.memoizedState) || (Ve = !0),
        (t.memoizedState = i),
        t.baseQueue === null && (t.baseState = i),
        (n.lastRenderedState = i);
    }
    return [i, r];
  }
  function Va() {}
  function Qa(e, t) {
    var n = ge,
      r = rt(),
      l = t(),
      i = !at(r.memoizedState, l);
    if (
      (i && ((r.memoizedState = l), (Ve = !0)),
      (r = r.queue),
      mo(Ga.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || i || (je !== null && je.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        kr(9, Ya.bind(null, n, r, l, t), void 0, null),
        ze === null)
      )
        throw Error(a(349));
      an & 30 || Ka(n, t, l);
    }
    return l;
  }
  function Ka(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = ge.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (ge.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function Ya(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), Xa(t) && Ja(e);
  }
  function Ga(e, t, n) {
    return n(function () {
      Xa(t) && Ja(e);
    });
  }
  function Xa(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !at(e, n);
    } catch {
      return !0;
    }
  }
  function Ja(e) {
    var t = Rt(e, 1);
    t !== null && pt(t, e, 1, -1);
  }
  function Za(e) {
    var t = St();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Sr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = ud.bind(null, ge, e)),
      [t.memoizedState, e]
    );
  }
  function kr(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = ge.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (ge.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function qa() {
    return rt().memoizedState;
  }
  function xl(e, t, n, r) {
    var l = St();
    (ge.flags |= e),
      (l.memoizedState = kr(1 | t, n, void 0, r === void 0 ? null : r));
  }
  function El(e, t, n, r) {
    var l = rt();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (Ne !== null) {
      var u = Ne.memoizedState;
      if (((i = u.destroy), r !== null && so(r, u.deps))) {
        l.memoizedState = kr(t, n, i, r);
        return;
      }
    }
    (ge.flags |= e), (l.memoizedState = kr(1 | t, n, i, r));
  }
  function ba(e, t) {
    return xl(8390656, 8, e, t);
  }
  function mo(e, t) {
    return El(2048, 8, e, t);
  }
  function es(e, t) {
    return El(4, 2, e, t);
  }
  function ts(e, t) {
    return El(4, 4, e, t);
  }
  function ns(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function rs(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null), El(4, 4, ns.bind(null, t, e), n)
    );
  }
  function vo() {}
  function ls(e, t) {
    var n = rt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && so(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function is(e, t) {
    var n = rt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && so(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function os(e, t, n) {
    return an & 21
      ? (at(n, t) ||
          ((n = Du()), (ge.lanes |= n), (sn |= n), (e.baseState = !0)),
        t)
      : (e.baseState && ((e.baseState = !1), (Ve = !0)), (e.memoizedState = n));
  }
  function id(e, t) {
    var n = ue;
    (ue = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = ao.transition;
    ao.transition = {};
    try {
      e(!1), t();
    } finally {
      (ue = n), (ao.transition = r);
    }
  }
  function us() {
    return rt().memoizedState;
  }
  function od(e, t, n) {
    var r = Xt(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      as(e))
    )
      ss(t, n);
    else if (((n = Ua(e, t, n, r)), n !== null)) {
      var l = $e();
      pt(n, e, r, l), cs(n, t, r);
    }
  }
  function ud(e, t, n) {
    var r = Xt(e),
      l = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (as(e)) ss(t, l);
    else {
      var i = e.alternate;
      if (
        e.lanes === 0 &&
        (i === null || i.lanes === 0) &&
        ((i = t.lastRenderedReducer), i !== null)
      )
        try {
          var u = t.lastRenderedState,
            c = i(u, n);
          if (((l.hasEagerState = !0), (l.eagerState = c), at(c, u))) {
            var p = t.interleaved;
            p === null
              ? ((l.next = l), no(t))
              : ((l.next = p.next), (p.next = l)),
              (t.interleaved = l);
            return;
          }
        } catch {
        } finally {
        }
      (n = Ua(e, t, l, r)),
        n !== null && ((l = $e()), pt(n, e, r, l), cs(n, t, r));
    }
  }
  function as(e) {
    var t = e.alternate;
    return e === ge || (t !== null && t === ge);
  }
  function ss(e, t) {
    yr = kl = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function cs(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), gi(e, n);
    }
  }
  var Cl = {
      readContext: nt,
      useCallback: De,
      useContext: De,
      useEffect: De,
      useImperativeHandle: De,
      useInsertionEffect: De,
      useLayoutEffect: De,
      useMemo: De,
      useReducer: De,
      useRef: De,
      useState: De,
      useDebugValue: De,
      useDeferredValue: De,
      useTransition: De,
      useMutableSource: De,
      useSyncExternalStore: De,
      useId: De,
      unstable_isNewReconciler: !1,
    },
    ad = {
      readContext: nt,
      useCallback: function (e, t) {
        return (St().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: nt,
      useEffect: ba,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          xl(4194308, 4, ns.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return xl(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return xl(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = St();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = St();
        return (
          (t = n !== void 0 ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = od.bind(null, ge, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = St();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: Za,
      useDebugValue: vo,
      useDeferredValue: function (e) {
        return (St().memoizedState = e);
      },
      useTransition: function () {
        var e = Za(!1),
          t = e[0];
        return (e = id.bind(null, e[1])), (St().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = ge,
          l = St();
        if (he) {
          if (n === void 0) throw Error(a(407));
          n = n();
        } else {
          if (((n = t()), ze === null)) throw Error(a(349));
          an & 30 || Ka(r, t, n);
        }
        l.memoizedState = n;
        var i = { value: n, getSnapshot: t };
        return (
          (l.queue = i),
          ba(Ga.bind(null, r, i, e), [e]),
          (r.flags |= 2048),
          kr(9, Ya.bind(null, r, i, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = St(),
          t = ze.identifierPrefix;
        if (he) {
          var n = Nt,
            r = _t;
          (n = (r & ~(1 << (32 - ut(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = wr++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":");
        } else (n = ld++), (t = ":" + t + "r" + n.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    sd = {
      readContext: nt,
      useCallback: ls,
      useContext: nt,
      useEffect: mo,
      useImperativeHandle: rs,
      useInsertionEffect: es,
      useLayoutEffect: ts,
      useMemo: is,
      useReducer: po,
      useRef: qa,
      useState: function () {
        return po(Sr);
      },
      useDebugValue: vo,
      useDeferredValue: function (e) {
        var t = rt();
        return os(t, Ne.memoizedState, e);
      },
      useTransition: function () {
        var e = po(Sr)[0],
          t = rt().memoizedState;
        return [e, t];
      },
      useMutableSource: Va,
      useSyncExternalStore: Qa,
      useId: us,
      unstable_isNewReconciler: !1,
    },
    cd = {
      readContext: nt,
      useCallback: ls,
      useContext: nt,
      useEffect: mo,
      useImperativeHandle: rs,
      useInsertionEffect: es,
      useLayoutEffect: ts,
      useMemo: is,
      useReducer: ho,
      useRef: qa,
      useState: function () {
        return ho(Sr);
      },
      useDebugValue: vo,
      useDeferredValue: function (e) {
        var t = rt();
        return Ne === null ? (t.memoizedState = e) : os(t, Ne.memoizedState, e);
      },
      useTransition: function () {
        var e = ho(Sr)[0],
          t = rt().memoizedState;
        return [e, t];
      },
      useMutableSource: Va,
      useSyncExternalStore: Qa,
      useId: us,
      unstable_isNewReconciler: !1,
    };
  function ct(e, t) {
    if (e && e.defaultProps) {
      (t = W({}, t)), (e = e.defaultProps);
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function go(e, t, n, r) {
    (t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : W({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Pl = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? en(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = $e(),
        l = Xt(e),
        i = Lt(r, l);
      (i.payload = t),
        n != null && (i.callback = n),
        (t = Qt(e, i, l)),
        t !== null && (pt(t, e, l, r), gl(t, e, l));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = $e(),
        l = Xt(e),
        i = Lt(r, l);
      (i.tag = 1),
        (i.payload = t),
        n != null && (i.callback = n),
        (t = Qt(e, i, l)),
        t !== null && (pt(t, e, l, r), gl(t, e, l));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = $e(),
        r = Xt(e),
        l = Lt(n, r);
      (l.tag = 2),
        t != null && (l.callback = t),
        (t = Qt(e, l, r)),
        t !== null && (pt(t, e, r, n), gl(t, e, r));
    },
  };
  function fs(e, t, n, r, l, i, u) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, i, u)
        : t.prototype && t.prototype.isPureReactComponent
        ? !ur(n, r) || !ur(l, i)
        : !0
    );
  }
  function ds(e, t, n) {
    var r = !1,
      l = Bt,
      i = t.contextType;
    return (
      typeof i == "object" && i !== null
        ? (i = nt(i))
        : ((l = We(t) ? nn : Ie.current),
          (r = t.contextTypes),
          (i = (r = r != null) ? Rn(e, l) : Bt)),
      (t = new t(n, i)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Pl),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = i)),
      t
    );
  }
  function ps(e, t, n, r) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && Pl.enqueueReplaceState(t, t.state, null);
  }
  function yo(e, t, n, r) {
    var l = e.stateNode;
    (l.props = n), (l.state = e.memoizedState), (l.refs = {}), ro(e);
    var i = t.contextType;
    typeof i == "object" && i !== null
      ? (l.context = nt(i))
      : ((i = We(t) ? nn : Ie.current), (l.context = Rn(e, i))),
      (l.state = e.memoizedState),
      (i = t.getDerivedStateFromProps),
      typeof i == "function" && (go(e, t, i, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function" ||
        (typeof l.UNSAFE_componentWillMount != "function" &&
          typeof l.componentWillMount != "function") ||
        ((t = l.state),
        typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" &&
          l.UNSAFE_componentWillMount(),
        t !== l.state && Pl.enqueueReplaceState(l, l.state, null),
        yl(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Dn(e, t) {
    try {
      var n = "",
        r = t;
      do (n += re(r)), (r = r.return);
      while (r);
      var l = n;
    } catch (i) {
      l =
        `
Error generating stack: ` +
        i.message +
        `
` +
        i.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function wo(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function So(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var fd = typeof WeakMap == "function" ? WeakMap : Map;
  function hs(e, t, n) {
    (n = Lt(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
      (n.callback = function () {
        Tl || ((Tl = !0), (Io = r)), So(e, t);
      }),
      n
    );
  }
  function ms(e, t, n) {
    (n = Lt(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      (n.payload = function () {
        return r(l);
      }),
        (n.callback = function () {
          So(e, t);
        });
    }
    var i = e.stateNode;
    return (
      i !== null &&
        typeof i.componentDidCatch == "function" &&
        (n.callback = function () {
          So(e, t),
            typeof r != "function" &&
              (Yt === null ? (Yt = new Set([this])) : Yt.add(this));
          var u = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: u !== null ? u : "",
          });
        }),
      n
    );
  }
  function vs(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new fd();
      var l = new Set();
      r.set(t, l);
    } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
    l.has(n) || (l.add(n), (e = Pd.bind(null, e, t, n)), t.then(e, e));
  }
  function gs(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function ys(e, t, n, r, l) {
    return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = l), e)
      : (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = Lt(-1, 1)), (t.tag = 2), Qt(n, t, 1))),
            (n.lanes |= 1)),
        e);
  }
  var dd = te.ReactCurrentOwner,
    Ve = !1;
  function Ue(e, t, n, r) {
    t.child = e === null ? Aa(t, null, n, r) : Tn(t, e.child, n, r);
  }
  function ws(e, t, n, r, l) {
    n = n.render;
    var i = t.ref;
    return (
      Mn(t, l),
      (r = co(e, t, n, r, i, l)),
      (n = fo()),
      e !== null && !Ve
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          jt(e, t, l))
        : (he && n && Yi(t), (t.flags |= 1), Ue(e, t, r, l), t.child)
    );
  }
  function Ss(e, t, n, r, l) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" &&
        !Bo(i) &&
        i.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = i), ks(e, t, i, r, l))
        : ((e = Al(n.type, null, r, t, t.mode, l)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((i = e.child), !(e.lanes & l))) {
      var u = i.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : ur), n(u, r) && e.ref === t.ref)
      )
        return jt(e, t, l);
    }
    return (
      (t.flags |= 1),
      (e = Zt(i, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function ks(e, t, n, r, l) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (ur(i, r) && e.ref === t.ref)
        if (((Ve = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
          e.flags & 131072 && (Ve = !0);
        else return (t.lanes = e.lanes), jt(e, t, l);
    }
    return ko(e, t, n, r, l);
  }
  function xs(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if (!(t.mode & 1))
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          ce(An, be),
          (be |= n);
      else {
        if (!(n & 1073741824))
          return (
            (e = i !== null ? i.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            ce(An, be),
            (be |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = i !== null ? i.baseLanes : n),
          ce(An, be),
          (be |= r);
      }
    else
      i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
        ce(An, be),
        (be |= r);
    return Ue(e, t, l, n), t.child;
  }
  function Es(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function ko(e, t, n, r, l) {
    var i = We(n) ? nn : Ie.current;
    return (
      (i = Rn(t, i)),
      Mn(t, l),
      (n = co(e, t, n, r, i, l)),
      (r = fo()),
      e !== null && !Ve
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          jt(e, t, l))
        : (he && r && Yi(t), (t.flags |= 1), Ue(e, t, n, l), t.child)
    );
  }
  function Cs(e, t, n, r, l) {
    if (We(n)) {
      var i = !0;
      sl(t);
    } else i = !1;
    if ((Mn(t, l), t.stateNode === null))
      Nl(e, t), ds(t, n, r), yo(t, n, r, l), (r = !0);
    else if (e === null) {
      var u = t.stateNode,
        c = t.memoizedProps;
      u.props = c;
      var p = u.context,
        S = n.contextType;
      typeof S == "object" && S !== null
        ? (S = nt(S))
        : ((S = We(n) ? nn : Ie.current), (S = Rn(t, S)));
      var R = n.getDerivedStateFromProps,
        L =
          typeof R == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function";
      L ||
        (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
          typeof u.componentWillReceiveProps != "function") ||
        ((c !== r || p !== S) && ps(t, u, r, S)),
        (Vt = !1);
      var _ = t.memoizedState;
      (u.state = _),
        yl(t, r, u, l),
        (p = t.memoizedState),
        c !== r || _ !== p || Be.current || Vt
          ? (typeof R == "function" && (go(t, n, R, r), (p = t.memoizedState)),
            (c = Vt || fs(t, n, c, r, _, p, S))
              ? (L ||
                  (typeof u.UNSAFE_componentWillMount != "function" &&
                    typeof u.componentWillMount != "function") ||
                  (typeof u.componentWillMount == "function" &&
                    u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == "function" &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof u.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = p)),
            (u.props = r),
            (u.state = p),
            (u.context = S),
            (r = c))
          : (typeof u.componentDidMount == "function" && (t.flags |= 4194308),
            (r = !1));
    } else {
      (u = t.stateNode),
        $a(e, t),
        (c = t.memoizedProps),
        (S = t.type === t.elementType ? c : ct(t.type, c)),
        (u.props = S),
        (L = t.pendingProps),
        (_ = u.context),
        (p = n.contextType),
        typeof p == "object" && p !== null
          ? (p = nt(p))
          : ((p = We(n) ? nn : Ie.current), (p = Rn(t, p)));
      var $ = n.getDerivedStateFromProps;
      (R =
        typeof $ == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function") ||
        (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
          typeof u.componentWillReceiveProps != "function") ||
        ((c !== L || _ !== p) && ps(t, u, r, p)),
        (Vt = !1),
        (_ = t.memoizedState),
        (u.state = _),
        yl(t, r, u, l);
      var V = t.memoizedState;
      c !== L || _ !== V || Be.current || Vt
        ? (typeof $ == "function" && (go(t, n, $, r), (V = t.memoizedState)),
          (S = Vt || fs(t, n, S, r, _, V, p) || !1)
            ? (R ||
                (typeof u.UNSAFE_componentWillUpdate != "function" &&
                  typeof u.componentWillUpdate != "function") ||
                (typeof u.componentWillUpdate == "function" &&
                  u.componentWillUpdate(r, V, p),
                typeof u.UNSAFE_componentWillUpdate == "function" &&
                  u.UNSAFE_componentWillUpdate(r, V, p)),
              typeof u.componentDidUpdate == "function" && (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof u.componentDidUpdate != "function" ||
                (c === e.memoizedProps && _ === e.memoizedState) ||
                (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != "function" ||
                (c === e.memoizedProps && _ === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = V)),
          (u.props = r),
          (u.state = V),
          (u.context = p),
          (r = S))
        : (typeof u.componentDidUpdate != "function" ||
            (c === e.memoizedProps && _ === e.memoizedState) ||
            (t.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != "function" ||
            (c === e.memoizedProps && _ === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return xo(e, t, n, r, i, l);
  }
  function xo(e, t, n, r, l, i) {
    Es(e, t);
    var u = (t.flags & 128) !== 0;
    if (!r && !u) return l && La(t, n, !1), jt(e, t, i);
    (r = t.stateNode), (dd.current = t);
    var c =
      u && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && u
        ? ((t.child = Tn(t, e.child, null, i)), (t.child = Tn(t, null, c, i)))
        : Ue(e, t, c, i),
      (t.memoizedState = r.state),
      l && La(t, n, !0),
      t.child
    );
  }
  function Ps(e) {
    var t = e.stateNode;
    t.pendingContext
      ? Na(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Na(e, t.context, !1),
      lo(e, t.containerInfo);
  }
  function _s(e, t, n, r, l) {
    return zn(), Zi(l), (t.flags |= 256), Ue(e, t, n, r), t.child;
  }
  var Eo = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Co(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Ns(e, t, n) {
    var r = t.pendingProps,
      l = ve.current,
      i = !1,
      u = (t.flags & 128) !== 0,
      c;
    if (
      ((c = u) ||
        (c = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      c
        ? ((i = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (l |= 1),
      ce(ve, l & 1),
      e === null)
    )
      return (
        Ji(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? (t.mode & 1
              ? e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824)
              : (t.lanes = 1),
            null)
          : ((u = r.children),
            (e = r.fallback),
            i
              ? ((r = t.mode),
                (i = t.child),
                (u = { mode: "hidden", children: u }),
                !(r & 1) && i !== null
                  ? ((i.childLanes = 0), (i.pendingProps = u))
                  : (i = Ul(u, r, 0, null)),
                (e = pn(e, r, n, null)),
                (i.return = t),
                (e.return = t),
                (i.sibling = e),
                (t.child = i),
                (t.child.memoizedState = Co(n)),
                (t.memoizedState = Eo),
                e)
              : Po(t, u))
      );
    if (((l = e.memoizedState), l !== null && ((c = l.dehydrated), c !== null)))
      return pd(e, t, u, r, c, l, n);
    if (i) {
      (i = r.fallback), (u = t.mode), (l = e.child), (c = l.sibling);
      var p = { mode: "hidden", children: r.children };
      return (
        !(u & 1) && t.child !== l
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = p),
            (t.deletions = null))
          : ((r = Zt(l, p)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        c !== null ? (i = Zt(c, i)) : ((i = pn(i, u, n, null)), (i.flags |= 2)),
        (i.return = t),
        (r.return = t),
        (r.sibling = i),
        (t.child = r),
        (r = i),
        (i = t.child),
        (u = e.child.memoizedState),
        (u =
          u === null
            ? Co(n)
            : {
                baseLanes: u.baseLanes | n,
                cachePool: null,
                transitions: u.transitions,
              }),
        (i.memoizedState = u),
        (i.childLanes = e.childLanes & ~n),
        (t.memoizedState = Eo),
        r
      );
    }
    return (
      (i = e.child),
      (e = i.sibling),
      (r = Zt(i, { mode: "visible", children: r.children })),
      !(t.mode & 1) && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
    );
  }
  function Po(e, t) {
    return (
      (t = Ul({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function _l(e, t, n, r) {
    return (
      r !== null && Zi(r),
      Tn(t, e.child, null, n),
      (e = Po(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function pd(e, t, n, r, l, i, u) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = wo(Error(a(422)))), _l(e, t, u, r))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (l = t.mode),
          (r = Ul({ mode: "visible", children: r.children }, l, 0, null)),
          (i = pn(i, l, u, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && Tn(t, e.child, null, u),
          (t.child.memoizedState = Co(u)),
          (t.memoizedState = Eo),
          i);
    if (!(t.mode & 1)) return _l(e, t, u, null);
    if (l.data === "$!") {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var c = r.dgst;
      return (
        (r = c), (i = Error(a(419))), (r = wo(i, r, void 0)), _l(e, t, u, r)
      );
    }
    if (((c = (u & e.childLanes) !== 0), Ve || c)) {
      if (((r = ze), r !== null)) {
        switch (u & -u) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        (l = l & (r.suspendedLanes | u) ? 0 : l),
          l !== 0 &&
            l !== i.retryLane &&
            ((i.retryLane = l), Rt(e, l), pt(r, e, l, -1));
      }
      return Ho(), (r = wo(Error(a(421)))), _l(e, t, u, r);
    }
    return l.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = _d.bind(null, e)),
        (l._reactRetry = t),
        null)
      : ((e = i.treeContext),
        (qe = $t(l.nextSibling)),
        (Ze = t),
        (he = !0),
        (st = null),
        e !== null &&
          ((et[tt++] = _t),
          (et[tt++] = Nt),
          (et[tt++] = rn),
          (_t = e.id),
          (Nt = e.overflow),
          (rn = t)),
        (t = Po(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function Rs(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), to(e.return, t, n);
  }
  function _o(e, t, n, r, l) {
    var i = e.memoizedState;
    i === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: l,
        })
      : ((i.isBackwards = t),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = r),
        (i.tail = n),
        (i.tailMode = l));
  }
  function Ls(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      i = r.tail;
    if ((Ue(e, t, r.children, n), (r = ve.current), r & 2))
      (r = (r & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Rs(e, n, t);
          else if (e.tag === 19) Rs(e, n, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      r &= 1;
    }
    if ((ce(ve, r), !(t.mode & 1))) t.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (n = t.child, l = null; n !== null; )
            (e = n.alternate),
              e !== null && wl(e) === null && (l = n),
              (n = n.sibling);
          (n = l),
            n === null
              ? ((l = t.child), (t.child = null))
              : ((l = n.sibling), (n.sibling = null)),
            _o(t, !1, l, n, i);
          break;
        case "backwards":
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && wl(e) === null)) {
              t.child = l;
              break;
            }
            (e = l.sibling), (l.sibling = n), (n = l), (l = e);
          }
          _o(t, !0, n, null, i);
          break;
        case "together":
          _o(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Nl(e, t) {
    !(t.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function jt(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (sn |= t.lanes),
      !(n & t.childLanes))
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(a(153));
    if (t.child !== null) {
      for (
        e = t.child, n = Zt(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = Zt(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function hd(e, t, n) {
    switch (t.tag) {
      case 3:
        Ps(t), zn();
        break;
      case 5:
        Wa(t);
        break;
      case 1:
        We(t.type) && sl(t);
        break;
      case 4:
        lo(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        ce(ml, r._currentValue), (r._currentValue = l);
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (ce(ve, ve.current & 1), (t.flags |= 128), null)
            : n & t.child.childLanes
            ? Ns(e, t, n)
            : (ce(ve, ve.current & 1),
              (e = jt(e, t, n)),
              e !== null ? e.sibling : null);
        ce(ve, ve.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
          if (r) return Ls(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          ce(ve, ve.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), xs(e, t, n);
    }
    return jt(e, t, n);
  }
  var js, No, zs, Ts;
  (js = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }),
    (No = function () {}),
    (zs = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        (e = t.stateNode), un(wt.current);
        var i = null;
        switch (n) {
          case "input":
            (l = ti(e, l)), (r = ti(e, r)), (i = []);
            break;
          case "select":
            (l = W({}, l, { value: void 0 })),
              (r = W({}, r, { value: void 0 })),
              (i = []);
            break;
          case "textarea":
            (l = li(e, l)), (r = li(e, r)), (i = []);
            break;
          default:
            typeof l.onClick != "function" &&
              typeof r.onClick == "function" &&
              (e.onclick = ol);
        }
        oi(n, r);
        var u;
        n = null;
        for (S in l)
          if (!r.hasOwnProperty(S) && l.hasOwnProperty(S) && l[S] != null)
            if (S === "style") {
              var c = l[S];
              for (u in c) c.hasOwnProperty(u) && (n || (n = {}), (n[u] = ""));
            } else
              S !== "dangerouslySetInnerHTML" &&
                S !== "children" &&
                S !== "suppressContentEditableWarning" &&
                S !== "suppressHydrationWarning" &&
                S !== "autoFocus" &&
                (f.hasOwnProperty(S)
                  ? i || (i = [])
                  : (i = i || []).push(S, null));
        for (S in r) {
          var p = r[S];
          if (
            ((c = l != null ? l[S] : void 0),
            r.hasOwnProperty(S) && p !== c && (p != null || c != null))
          )
            if (S === "style")
              if (c) {
                for (u in c)
                  !c.hasOwnProperty(u) ||
                    (p && p.hasOwnProperty(u)) ||
                    (n || (n = {}), (n[u] = ""));
                for (u in p)
                  p.hasOwnProperty(u) &&
                    c[u] !== p[u] &&
                    (n || (n = {}), (n[u] = p[u]));
              } else n || (i || (i = []), i.push(S, n)), (n = p);
            else
              S === "dangerouslySetInnerHTML"
                ? ((p = p ? p.__html : void 0),
                  (c = c ? c.__html : void 0),
                  p != null && c !== p && (i = i || []).push(S, p))
                : S === "children"
                ? (typeof p != "string" && typeof p != "number") ||
                  (i = i || []).push(S, "" + p)
                : S !== "suppressContentEditableWarning" &&
                  S !== "suppressHydrationWarning" &&
                  (f.hasOwnProperty(S)
                    ? (p != null && S === "onScroll" && fe("scroll", e),
                      i || c === p || (i = []))
                    : (i = i || []).push(S, p));
        }
        n && (i = i || []).push("style", n);
        var S = i;
        (t.updateQueue = S) && (t.flags |= 4);
      }
    }),
    (Ts = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    });
  function xr(e, t) {
    if (!he)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), (t = t.sibling);
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
            n.alternate !== null && (r = n), (n = n.sibling);
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function Fe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var l = e.child; l !== null; )
        (n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags & 14680064),
          (r |= l.flags & 14680064),
          (l.return = e),
          (l = l.sibling);
    else
      for (l = e.child; l !== null; )
        (n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags),
          (r |= l.flags),
          (l.return = e),
          (l = l.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
  }
  function md(e, t, n) {
    var r = t.pendingProps;
    switch ((Gi(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Fe(t), null;
      case 1:
        return We(t.type) && al(), Fe(t), null;
      case 3:
        return (
          (r = t.stateNode),
          In(),
          de(Be),
          de(Ie),
          uo(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (pl(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), st !== null && (Ao(st), (st = null)))),
          No(e, t),
          Fe(t),
          null
        );
      case 5:
        io(t);
        var l = un(gr.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          zs(e, t, n, r, l),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(a(166));
            return Fe(t), null;
          }
          if (((e = un(wt.current)), pl(t))) {
            (r = t.stateNode), (n = t.type);
            var i = t.memoizedProps;
            switch (((r[yt] = t), (r[dr] = i), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                fe("cancel", r), fe("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                fe("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < sr.length; l++) fe(sr[l], r);
                break;
              case "source":
                fe("error", r);
                break;
              case "img":
              case "image":
              case "link":
                fe("error", r), fe("load", r);
                break;
              case "details":
                fe("toggle", r);
                break;
              case "input":
                du(r, i), fe("invalid", r);
                break;
              case "select":
                (r._wrapperState = { wasMultiple: !!i.multiple }),
                  fe("invalid", r);
                break;
              case "textarea":
                mu(r, i), fe("invalid", r);
            }
            oi(n, i), (l = null);
            for (var u in i)
              if (i.hasOwnProperty(u)) {
                var c = i[u];
                u === "children"
                  ? typeof c == "string"
                    ? r.textContent !== c &&
                      (i.suppressHydrationWarning !== !0 &&
                        il(r.textContent, c, e),
                      (l = ["children", c]))
                    : typeof c == "number" &&
                      r.textContent !== "" + c &&
                      (i.suppressHydrationWarning !== !0 &&
                        il(r.textContent, c, e),
                      (l = ["children", "" + c]))
                  : f.hasOwnProperty(u) &&
                    c != null &&
                    u === "onScroll" &&
                    fe("scroll", r);
              }
            switch (n) {
              case "input":
                Dr(r), hu(r, i, !0);
                break;
              case "textarea":
                Dr(r), gu(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof i.onClick == "function" && (r.onclick = ol);
            }
            (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
          } else {
            (u = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = yu(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = u.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                  ? (e = u.createElement(n, { is: r.is }))
                  : ((e = u.createElement(n)),
                    n === "select" &&
                      ((u = e),
                      r.multiple
                        ? (u.multiple = !0)
                        : r.size && (u.size = r.size)))
                : (e = u.createElementNS(e, n)),
              (e[yt] = t),
              (e[dr] = r),
              js(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((u = ui(n, r)), n)) {
                case "dialog":
                  fe("cancel", e), fe("close", e), (l = r);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  fe("load", e), (l = r);
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < sr.length; l++) fe(sr[l], e);
                  l = r;
                  break;
                case "source":
                  fe("error", e), (l = r);
                  break;
                case "img":
                case "image":
                case "link":
                  fe("error", e), fe("load", e), (l = r);
                  break;
                case "details":
                  fe("toggle", e), (l = r);
                  break;
                case "input":
                  du(e, r), (l = ti(e, r)), fe("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = W({}, r, { value: void 0 })),
                    fe("invalid", e);
                  break;
                case "textarea":
                  mu(e, r), (l = li(e, r)), fe("invalid", e);
                  break;
                default:
                  l = r;
              }
              oi(n, l), (c = l);
              for (i in c)
                if (c.hasOwnProperty(i)) {
                  var p = c[i];
                  i === "style"
                    ? ku(e, p)
                    : i === "dangerouslySetInnerHTML"
                    ? ((p = p ? p.__html : void 0), p != null && wu(e, p))
                    : i === "children"
                    ? typeof p == "string"
                      ? (n !== "textarea" || p !== "") && Vn(e, p)
                      : typeof p == "number" && Vn(e, "" + p)
                    : i !== "suppressContentEditableWarning" &&
                      i !== "suppressHydrationWarning" &&
                      i !== "autoFocus" &&
                      (f.hasOwnProperty(i)
                        ? p != null && i === "onScroll" && fe("scroll", e)
                        : p != null && Z(e, i, p, u));
                }
              switch (n) {
                case "input":
                  Dr(e), hu(e, r, !1);
                  break;
                case "textarea":
                  Dr(e), gu(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + oe(r.value));
                  break;
                case "select":
                  (e.multiple = !!r.multiple),
                    (i = r.value),
                    i != null
                      ? vn(e, !!r.multiple, i, !1)
                      : r.defaultValue != null &&
                        vn(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = ol);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return Fe(t), null;
      case 6:
        if (e && t.stateNode != null) Ts(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(a(166));
          if (((n = un(gr.current)), un(wt.current), pl(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[yt] = t),
              (i = r.nodeValue !== n) && ((e = Ze), e !== null))
            )
              switch (e.tag) {
                case 3:
                  il(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    il(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            i && (t.flags |= 4);
          } else
            (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[yt] = t),
              (t.stateNode = r);
        }
        return Fe(t), null;
      case 13:
        if (
          (de(ve),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (he && qe !== null && t.mode & 1 && !(t.flags & 128))
            Ia(), zn(), (t.flags |= 98560), (i = !1);
          else if (((i = pl(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!i) throw Error(a(318));
              if (
                ((i = t.memoizedState),
                (i = i !== null ? i.dehydrated : null),
                !i)
              )
                throw Error(a(317));
              i[yt] = t;
            } else
              zn(),
                !(t.flags & 128) && (t.memoizedState = null),
                (t.flags |= 4);
            Fe(t), (i = !1);
          } else st !== null && (Ao(st), (st = null)), (i = !0);
          if (!i) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              t.mode & 1 &&
                (e === null || ve.current & 1 ? Re === 0 && (Re = 3) : Ho())),
            t.updateQueue !== null && (t.flags |= 4),
            Fe(t),
            null);
      case 4:
        return (
          In(),
          No(e, t),
          e === null && cr(t.stateNode.containerInfo),
          Fe(t),
          null
        );
      case 10:
        return eo(t.type._context), Fe(t), null;
      case 17:
        return We(t.type) && al(), Fe(t), null;
      case 19:
        if ((de(ve), (i = t.memoizedState), i === null)) return Fe(t), null;
        if (((r = (t.flags & 128) !== 0), (u = i.rendering), u === null))
          if (r) xr(i, !1);
          else {
            if (Re !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((u = wl(e)), u !== null)) {
                  for (
                    t.flags |= 128,
                      xr(i, !1),
                      r = u.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;

                  )
                    (i = n),
                      (e = r),
                      (i.flags &= 14680066),
                      (u = i.alternate),
                      u === null
                        ? ((i.childLanes = 0),
                          (i.lanes = e),
                          (i.child = null),
                          (i.subtreeFlags = 0),
                          (i.memoizedProps = null),
                          (i.memoizedState = null),
                          (i.updateQueue = null),
                          (i.dependencies = null),
                          (i.stateNode = null))
                        : ((i.childLanes = u.childLanes),
                          (i.lanes = u.lanes),
                          (i.child = u.child),
                          (i.subtreeFlags = 0),
                          (i.deletions = null),
                          (i.memoizedProps = u.memoizedProps),
                          (i.memoizedState = u.memoizedState),
                          (i.updateQueue = u.updateQueue),
                          (i.type = u.type),
                          (e = u.dependencies),
                          (i.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling);
                  return ce(ve, (ve.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            i.tail !== null &&
              Ee() > Un &&
              ((t.flags |= 128), (r = !0), xr(i, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = wl(u)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                xr(i, !0),
                i.tail === null &&
                  i.tailMode === "hidden" &&
                  !u.alternate &&
                  !he)
              )
                return Fe(t), null;
            } else
              2 * Ee() - i.renderingStartTime > Un &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), xr(i, !1), (t.lanes = 4194304));
          i.isBackwards
            ? ((u.sibling = t.child), (t.child = u))
            : ((n = i.last),
              n !== null ? (n.sibling = u) : (t.child = u),
              (i.last = u));
        }
        return i.tail !== null
          ? ((t = i.tail),
            (i.rendering = t),
            (i.tail = t.sibling),
            (i.renderingStartTime = Ee()),
            (t.sibling = null),
            (n = ve.current),
            ce(ve, r ? (n & 1) | 2 : n & 1),
            t)
          : (Fe(t), null);
      case 22:
      case 23:
        return (
          $o(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && t.mode & 1
            ? be & 1073741824 &&
              (Fe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Fe(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(a(156, t.tag));
  }
  function vd(e, t) {
    switch ((Gi(t), t.tag)) {
      case 1:
        return (
          We(t.type) && al(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          In(),
          de(Be),
          de(Ie),
          uo(),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return io(t), null;
      case 13:
        if (
          (de(ve), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(a(340));
          zn();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return de(ve), null;
      case 4:
        return In(), null;
      case 10:
        return eo(t.type._context), null;
      case 22:
      case 23:
        return $o(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Rl = !1,
    Ae = !1,
    gd = typeof WeakSet == "function" ? WeakSet : Set,
    B = null;
  function Fn(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          xe(e, t, r);
        }
      else n.current = null;
  }
  function Ro(e, t, n) {
    try {
      n();
    } catch (r) {
      xe(e, t, r);
    }
  }
  var Os = !1;
  function yd(e, t) {
    if (((Ui = Gr), (e = fa()), zi(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var l = r.anchorOffset,
              i = r.focusNode;
            r = r.focusOffset;
            try {
              n.nodeType, i.nodeType;
            } catch {
              n = null;
              break e;
            }
            var u = 0,
              c = -1,
              p = -1,
              S = 0,
              R = 0,
              L = e,
              _ = null;
            t: for (;;) {
              for (
                var $;
                L !== n || (l !== 0 && L.nodeType !== 3) || (c = u + l),
                  L !== i || (r !== 0 && L.nodeType !== 3) || (p = u + r),
                  L.nodeType === 3 && (u += L.nodeValue.length),
                  ($ = L.firstChild) !== null;

              )
                (_ = L), (L = $);
              for (;;) {
                if (L === e) break t;
                if (
                  (_ === n && ++S === l && (c = u),
                  _ === i && ++R === r && (p = u),
                  ($ = L.nextSibling) !== null)
                )
                  break;
                (L = _), (_ = L.parentNode);
              }
              L = $;
            }
            n = c === -1 || p === -1 ? null : { start: c, end: p };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      $i = { focusedElem: e, selectionRange: n }, Gr = !1, B = t;
      B !== null;

    )
      if (((t = B), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (B = e);
      else
        for (; B !== null; ) {
          t = B;
          try {
            var V = t.alternate;
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (V !== null) {
                    var Q = V.memoizedProps,
                      Ce = V.memoizedState,
                      g = t.stateNode,
                      h = g.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? Q : ct(t.type, Q),
                        Ce
                      );
                    g.__reactInternalSnapshotBeforeUpdate = h;
                  }
                  break;
                case 3:
                  var y = t.stateNode.containerInfo;
                  y.nodeType === 1
                    ? (y.textContent = "")
                    : y.nodeType === 9 &&
                      y.documentElement &&
                      y.removeChild(y.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(a(163));
              }
          } catch (z) {
            xe(t, t.return, z);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (B = e);
            break;
          }
          B = t.return;
        }
    return (V = Os), (Os = !1), V;
  }
  function Er(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var i = l.destroy;
          (l.destroy = void 0), i !== void 0 && Ro(t, n, i);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Ll(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function Lo(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function Ms(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Ms(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[yt],
          delete t[dr],
          delete t[Vi],
          delete t[ed],
          delete t[td])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function Is(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Ds(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Is(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function jo(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = ol));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (jo(e, t, n), e = e.sibling; e !== null; )
        jo(e, t, n), (e = e.sibling);
  }
  function zo(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
      for (zo(e, t, n), e = e.sibling; e !== null; )
        zo(e, t, n), (e = e.sibling);
  }
  var Oe = null,
    ft = !1;
  function Kt(e, t, n) {
    for (n = n.child; n !== null; ) Fs(e, t, n), (n = n.sibling);
  }
  function Fs(e, t, n) {
    if (gt && typeof gt.onCommitFiberUnmount == "function")
      try {
        gt.onCommitFiberUnmount(Br, n);
      } catch {}
    switch (n.tag) {
      case 5:
        Ae || Fn(n, t);
      case 6:
        var r = Oe,
          l = ft;
        (Oe = null),
          Kt(e, t, n),
          (Oe = r),
          (ft = l),
          Oe !== null &&
            (ft
              ? ((e = Oe),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : Oe.removeChild(n.stateNode));
        break;
      case 18:
        Oe !== null &&
          (ft
            ? ((e = Oe),
              (n = n.stateNode),
              e.nodeType === 8
                ? Wi(e.parentNode, n)
                : e.nodeType === 1 && Wi(e, n),
              tr(e))
            : Wi(Oe, n.stateNode));
        break;
      case 4:
        (r = Oe),
          (l = ft),
          (Oe = n.stateNode.containerInfo),
          (ft = !0),
          Kt(e, t, n),
          (Oe = r),
          (ft = l);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !Ae &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          l = r = r.next;
          do {
            var i = l,
              u = i.destroy;
            (i = i.tag),
              u !== void 0 && (i & 2 || i & 4) && Ro(n, t, u),
              (l = l.next);
          } while (l !== r);
        }
        Kt(e, t, n);
        break;
      case 1:
        if (
          !Ae &&
          (Fn(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            (r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount();
          } catch (c) {
            xe(n, t, c);
          }
        Kt(e, t, n);
        break;
      case 21:
        Kt(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((Ae = (r = Ae) || n.memoizedState !== null), Kt(e, t, n), (Ae = r))
          : Kt(e, t, n);
        break;
      default:
        Kt(e, t, n);
    }
  }
  function As(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new gd()),
        t.forEach(function (r) {
          var l = Nd.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(l, l));
        });
    }
  }
  function dt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        try {
          var i = e,
            u = t,
            c = u;
          e: for (; c !== null; ) {
            switch (c.tag) {
              case 5:
                (Oe = c.stateNode), (ft = !1);
                break e;
              case 3:
                (Oe = c.stateNode.containerInfo), (ft = !0);
                break e;
              case 4:
                (Oe = c.stateNode.containerInfo), (ft = !0);
                break e;
            }
            c = c.return;
          }
          if (Oe === null) throw Error(a(160));
          Fs(i, u, l), (Oe = null), (ft = !1);
          var p = l.alternate;
          p !== null && (p.return = null), (l.return = null);
        } catch (S) {
          xe(l, t, S);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) Us(t, e), (t = t.sibling);
  }
  function Us(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((dt(t, e), kt(e), r & 4)) {
          try {
            Er(3, e, e.return), Ll(3, e);
          } catch (Q) {
            xe(e, e.return, Q);
          }
          try {
            Er(5, e, e.return);
          } catch (Q) {
            xe(e, e.return, Q);
          }
        }
        break;
      case 1:
        dt(t, e), kt(e), r & 512 && n !== null && Fn(n, n.return);
        break;
      case 5:
        if (
          (dt(t, e),
          kt(e),
          r & 512 && n !== null && Fn(n, n.return),
          e.flags & 32)
        ) {
          var l = e.stateNode;
          try {
            Vn(l, "");
          } catch (Q) {
            xe(e, e.return, Q);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var i = e.memoizedProps,
            u = n !== null ? n.memoizedProps : i,
            c = e.type,
            p = e.updateQueue;
          if (((e.updateQueue = null), p !== null))
            try {
              c === "input" && i.type === "radio" && i.name != null && pu(l, i),
                ui(c, u);
              var S = ui(c, i);
              for (u = 0; u < p.length; u += 2) {
                var R = p[u],
                  L = p[u + 1];
                R === "style"
                  ? ku(l, L)
                  : R === "dangerouslySetInnerHTML"
                  ? wu(l, L)
                  : R === "children"
                  ? Vn(l, L)
                  : Z(l, R, L, S);
              }
              switch (c) {
                case "input":
                  ni(l, i);
                  break;
                case "textarea":
                  vu(l, i);
                  break;
                case "select":
                  var _ = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!i.multiple;
                  var $ = i.value;
                  $ != null
                    ? vn(l, !!i.multiple, $, !1)
                    : _ !== !!i.multiple &&
                      (i.defaultValue != null
                        ? vn(l, !!i.multiple, i.defaultValue, !0)
                        : vn(l, !!i.multiple, i.multiple ? [] : "", !1));
              }
              l[dr] = i;
            } catch (Q) {
              xe(e, e.return, Q);
            }
        }
        break;
      case 6:
        if ((dt(t, e), kt(e), r & 4)) {
          if (e.stateNode === null) throw Error(a(162));
          (l = e.stateNode), (i = e.memoizedProps);
          try {
            l.nodeValue = i;
          } catch (Q) {
            xe(e, e.return, Q);
          }
        }
        break;
      case 3:
        if (
          (dt(t, e), kt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            tr(t.containerInfo);
          } catch (Q) {
            xe(e, e.return, Q);
          }
        break;
      case 4:
        dt(t, e), kt(e);
        break;
      case 13:
        dt(t, e),
          kt(e),
          (l = e.child),
          l.flags & 8192 &&
            ((i = l.memoizedState !== null),
            (l.stateNode.isHidden = i),
            !i ||
              (l.alternate !== null && l.alternate.memoizedState !== null) ||
              (Mo = Ee())),
          r & 4 && As(e);
        break;
      case 22:
        if (
          ((R = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((Ae = (S = Ae) || R), dt(t, e), (Ae = S)) : dt(t, e),
          kt(e),
          r & 8192)
        ) {
          if (
            ((S = e.memoizedState !== null),
            (e.stateNode.isHidden = S) && !R && e.mode & 1)
          )
            for (B = e, R = e.child; R !== null; ) {
              for (L = B = R; B !== null; ) {
                switch (((_ = B), ($ = _.child), _.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Er(4, _, _.return);
                    break;
                  case 1:
                    Fn(_, _.return);
                    var V = _.stateNode;
                    if (typeof V.componentWillUnmount == "function") {
                      (r = _), (n = _.return);
                      try {
                        (t = r),
                          (V.props = t.memoizedProps),
                          (V.state = t.memoizedState),
                          V.componentWillUnmount();
                      } catch (Q) {
                        xe(r, n, Q);
                      }
                    }
                    break;
                  case 5:
                    Fn(_, _.return);
                    break;
                  case 22:
                    if (_.memoizedState !== null) {
                      Bs(L);
                      continue;
                    }
                }
                $ !== null ? (($.return = _), (B = $)) : Bs(L);
              }
              R = R.sibling;
            }
          e: for (R = null, L = e; ; ) {
            if (L.tag === 5) {
              if (R === null) {
                R = L;
                try {
                  (l = L.stateNode),
                    S
                      ? ((i = l.style),
                        typeof i.setProperty == "function"
                          ? i.setProperty("display", "none", "important")
                          : (i.display = "none"))
                      : ((c = L.stateNode),
                        (p = L.memoizedProps.style),
                        (u =
                          p != null && p.hasOwnProperty("display")
                            ? p.display
                            : null),
                        (c.style.display = Su("display", u)));
                } catch (Q) {
                  xe(e, e.return, Q);
                }
              }
            } else if (L.tag === 6) {
              if (R === null)
                try {
                  L.stateNode.nodeValue = S ? "" : L.memoizedProps;
                } catch (Q) {
                  xe(e, e.return, Q);
                }
            } else if (
              ((L.tag !== 22 && L.tag !== 23) ||
                L.memoizedState === null ||
                L === e) &&
              L.child !== null
            ) {
              (L.child.return = L), (L = L.child);
              continue;
            }
            if (L === e) break e;
            for (; L.sibling === null; ) {
              if (L.return === null || L.return === e) break e;
              R === L && (R = null), (L = L.return);
            }
            R === L && (R = null),
              (L.sibling.return = L.return),
              (L = L.sibling);
          }
        }
        break;
      case 19:
        dt(t, e), kt(e), r & 4 && As(e);
        break;
      case 21:
        break;
      default:
        dt(t, e), kt(e);
    }
  }
  function kt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Is(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(a(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (Vn(l, ""), (r.flags &= -33));
            var i = Ds(e);
            zo(e, i, l);
            break;
          case 3:
          case 4:
            var u = r.stateNode.containerInfo,
              c = Ds(e);
            jo(e, c, u);
            break;
          default:
            throw Error(a(161));
        }
      } catch (p) {
        xe(e, e.return, p);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function wd(e, t, n) {
    (B = e), $s(e);
  }
  function $s(e, t, n) {
    for (var r = (e.mode & 1) !== 0; B !== null; ) {
      var l = B,
        i = l.child;
      if (l.tag === 22 && r) {
        var u = l.memoizedState !== null || Rl;
        if (!u) {
          var c = l.alternate,
            p = (c !== null && c.memoizedState !== null) || Ae;
          c = Rl;
          var S = Ae;
          if (((Rl = u), (Ae = p) && !S))
            for (B = l; B !== null; )
              (u = B),
                (p = u.child),
                u.tag === 22 && u.memoizedState !== null
                  ? Ws(l)
                  : p !== null
                  ? ((p.return = u), (B = p))
                  : Ws(l);
          for (; i !== null; ) (B = i), $s(i), (i = i.sibling);
          (B = l), (Rl = c), (Ae = S);
        }
        Hs(e);
      } else
        l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (B = i)) : Hs(e);
    }
  }
  function Hs(e) {
    for (; B !== null; ) {
      var t = B;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Ae || Ll(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !Ae)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : ct(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      l,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var i = t.updateQueue;
                i !== null && Ba(t, i, r);
                break;
              case 3:
                var u = t.updateQueue;
                if (u !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  Ba(t, u, n);
                }
                break;
              case 5:
                var c = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = c;
                  var p = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      p.autoFocus && n.focus();
                      break;
                    case "img":
                      p.src && (n.src = p.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var S = t.alternate;
                  if (S !== null) {
                    var R = S.memoizedState;
                    if (R !== null) {
                      var L = R.dehydrated;
                      L !== null && tr(L);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(a(163));
            }
          Ae || (t.flags & 512 && Lo(t));
        } catch (_) {
          xe(t, t.return, _);
        }
      }
      if (t === e) {
        B = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        (n.return = t.return), (B = n);
        break;
      }
      B = t.return;
    }
  }
  function Bs(e) {
    for (; B !== null; ) {
      var t = B;
      if (t === e) {
        B = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        (n.return = t.return), (B = n);
        break;
      }
      B = t.return;
    }
  }
  function Ws(e) {
    for (; B !== null; ) {
      var t = B;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Ll(4, t);
            } catch (p) {
              xe(t, n, p);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (p) {
                xe(t, l, p);
              }
            }
            var i = t.return;
            try {
              Lo(t);
            } catch (p) {
              xe(t, i, p);
            }
            break;
          case 5:
            var u = t.return;
            try {
              Lo(t);
            } catch (p) {
              xe(t, u, p);
            }
        }
      } catch (p) {
        xe(t, t.return, p);
      }
      if (t === e) {
        B = null;
        break;
      }
      var c = t.sibling;
      if (c !== null) {
        (c.return = t.return), (B = c);
        break;
      }
      B = t.return;
    }
  }
  var Sd = Math.ceil,
    jl = te.ReactCurrentDispatcher,
    To = te.ReactCurrentOwner,
    lt = te.ReactCurrentBatchConfig,
    ne = 0,
    ze = null,
    _e = null,
    Me = 0,
    be = 0,
    An = Ht(0),
    Re = 0,
    Cr = null,
    sn = 0,
    zl = 0,
    Oo = 0,
    Pr = null,
    Qe = null,
    Mo = 0,
    Un = 1 / 0,
    zt = null,
    Tl = !1,
    Io = null,
    Yt = null,
    Ol = !1,
    Gt = null,
    Ml = 0,
    _r = 0,
    Do = null,
    Il = -1,
    Dl = 0;
  function $e() {
    return ne & 6 ? Ee() : Il !== -1 ? Il : (Il = Ee());
  }
  function Xt(e) {
    return e.mode & 1
      ? ne & 2 && Me !== 0
        ? Me & -Me
        : rd.transition !== null
        ? (Dl === 0 && (Dl = Du()), Dl)
        : ((e = ue),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Qu(e.type))),
          e)
      : 1;
  }
  function pt(e, t, n, r) {
    if (50 < _r) throw ((_r = 0), (Do = null), Error(a(185)));
    Jn(e, n, r),
      (!(ne & 2) || e !== ze) &&
        (e === ze && (!(ne & 2) && (zl |= n), Re === 4 && Jt(e, Me)),
        Ke(e, r),
        n === 1 &&
          ne === 0 &&
          !(t.mode & 1) &&
          ((Un = Ee() + 500), cl && Wt()));
  }
  function Ke(e, t) {
    var n = e.callbackNode;
    nf(e, t);
    var r = Qr(e, e === ze ? Me : 0);
    if (r === 0)
      n !== null && Ou(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && Ou(n), t === 1))
        e.tag === 0 ? nd(Qs.bind(null, e)) : ja(Qs.bind(null, e)),
          qf(function () {
            !(ne & 6) && Wt();
          }),
          (n = null);
      else {
        switch (Fu(r)) {
          case 1:
            n = hi;
            break;
          case 4:
            n = Mu;
            break;
          case 16:
            n = Hr;
            break;
          case 536870912:
            n = Iu;
            break;
          default:
            n = Hr;
        }
        n = bs(n, Vs.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
    }
  }
  function Vs(e, t) {
    if (((Il = -1), (Dl = 0), ne & 6)) throw Error(a(327));
    var n = e.callbackNode;
    if ($n() && e.callbackNode !== n) return null;
    var r = Qr(e, e === ze ? Me : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = Fl(e, r);
    else {
      t = r;
      var l = ne;
      ne |= 2;
      var i = Ys();
      (ze !== e || Me !== t) && ((zt = null), (Un = Ee() + 500), fn(e, t));
      do
        try {
          Ed();
          break;
        } catch (c) {
          Ks(e, c);
        }
      while (!0);
      bi(),
        (jl.current = i),
        (ne = l),
        _e !== null ? (t = 0) : ((ze = null), (Me = 0), (t = Re));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((l = mi(e)), l !== 0 && ((r = l), (t = Fo(e, l)))),
        t === 1)
      )
        throw ((n = Cr), fn(e, 0), Jt(e, r), Ke(e, Ee()), n);
      if (t === 6) Jt(e, r);
      else {
        if (
          ((l = e.current.alternate),
          !(r & 30) &&
            !kd(l) &&
            ((t = Fl(e, r)),
            t === 2 && ((i = mi(e)), i !== 0 && ((r = i), (t = Fo(e, i)))),
            t === 1))
        )
          throw ((n = Cr), fn(e, 0), Jt(e, r), Ke(e, Ee()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(a(345));
          case 2:
            dn(e, Qe, zt);
            break;
          case 3:
            if (
              (Jt(e, r),
              (r & 130023424) === r && ((t = Mo + 500 - Ee()), 10 < t))
            ) {
              if (Qr(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                $e(), (e.pingedLanes |= e.suspendedLanes & l);
                break;
              }
              e.timeoutHandle = Bi(dn.bind(null, e, Qe, zt), t);
              break;
            }
            dn(e, Qe, zt);
            break;
          case 4:
            if ((Jt(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var u = 31 - ut(r);
              (i = 1 << u), (u = t[u]), u > l && (l = u), (r &= ~i);
            }
            if (
              ((r = l),
              (r = Ee() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                  ? 480
                  : 1080 > r
                  ? 1080
                  : 1920 > r
                  ? 1920
                  : 3e3 > r
                  ? 3e3
                  : 4320 > r
                  ? 4320
                  : 1960 * Sd(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = Bi(dn.bind(null, e, Qe, zt), r);
              break;
            }
            dn(e, Qe, zt);
            break;
          case 5:
            dn(e, Qe, zt);
            break;
          default:
            throw Error(a(329));
        }
      }
    }
    return Ke(e, Ee()), e.callbackNode === n ? Vs.bind(null, e) : null;
  }
  function Fo(e, t) {
    var n = Pr;
    return (
      e.current.memoizedState.isDehydrated && (fn(e, t).flags |= 256),
      (e = Fl(e, t)),
      e !== 2 && ((t = Qe), (Qe = n), t !== null && Ao(t)),
      e
    );
  }
  function Ao(e) {
    Qe === null ? (Qe = e) : Qe.push.apply(Qe, e);
  }
  function kd(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var l = n[r],
              i = l.getSnapshot;
            l = l.value;
            try {
              if (!at(i(), l)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        (n.return = t), (t = n);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function Jt(e, t) {
    for (
      t &= ~Oo,
        t &= ~zl,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - ut(t),
        r = 1 << n;
      (e[n] = -1), (t &= ~r);
    }
  }
  function Qs(e) {
    if (ne & 6) throw Error(a(327));
    $n();
    var t = Qr(e, 0);
    if (!(t & 1)) return Ke(e, Ee()), null;
    var n = Fl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = mi(e);
      r !== 0 && ((t = r), (n = Fo(e, r)));
    }
    if (n === 1) throw ((n = Cr), fn(e, 0), Jt(e, t), Ke(e, Ee()), n);
    if (n === 6) throw Error(a(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      dn(e, Qe, zt),
      Ke(e, Ee()),
      null
    );
  }
  function Uo(e, t) {
    var n = ne;
    ne |= 1;
    try {
      return e(t);
    } finally {
      (ne = n), ne === 0 && ((Un = Ee() + 500), cl && Wt());
    }
  }
  function cn(e) {
    Gt !== null && Gt.tag === 0 && !(ne & 6) && $n();
    var t = ne;
    ne |= 1;
    var n = lt.transition,
      r = ue;
    try {
      if (((lt.transition = null), (ue = 1), e)) return e();
    } finally {
      (ue = r), (lt.transition = n), (ne = t), !(ne & 6) && Wt();
    }
  }
  function $o() {
    (be = An.current), de(An);
  }
  function fn(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), Zf(n)), _e !== null))
      for (n = _e.return; n !== null; ) {
        var r = n;
        switch ((Gi(r), r.tag)) {
          case 1:
            (r = r.type.childContextTypes), r != null && al();
            break;
          case 3:
            In(), de(Be), de(Ie), uo();
            break;
          case 5:
            io(r);
            break;
          case 4:
            In();
            break;
          case 13:
            de(ve);
            break;
          case 19:
            de(ve);
            break;
          case 10:
            eo(r.type._context);
            break;
          case 22:
          case 23:
            $o();
        }
        n = n.return;
      }
    if (
      ((ze = e),
      (_e = e = Zt(e.current, null)),
      (Me = be = t),
      (Re = 0),
      (Cr = null),
      (Oo = zl = sn = 0),
      (Qe = Pr = null),
      on !== null)
    ) {
      for (t = 0; t < on.length; t++)
        if (((n = on[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var l = r.next,
            i = n.pending;
          if (i !== null) {
            var u = i.next;
            (i.next = l), (r.next = u);
          }
          n.pending = r;
        }
      on = null;
    }
    return e;
  }
  function Ks(e, t) {
    do {
      var n = _e;
      try {
        if ((bi(), (Sl.current = Cl), kl)) {
          for (var r = ge.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), (r = r.next);
          }
          kl = !1;
        }
        if (
          ((an = 0),
          (je = Ne = ge = null),
          (yr = !1),
          (wr = 0),
          (To.current = null),
          n === null || n.return === null)
        ) {
          (Re = 1), (Cr = t), (_e = null);
          break;
        }
        e: {
          var i = e,
            u = n.return,
            c = n,
            p = t;
          if (
            ((t = Me),
            (c.flags |= 32768),
            p !== null && typeof p == "object" && typeof p.then == "function")
          ) {
            var S = p,
              R = c,
              L = R.tag;
            if (!(R.mode & 1) && (L === 0 || L === 11 || L === 15)) {
              var _ = R.alternate;
              _
                ? ((R.updateQueue = _.updateQueue),
                  (R.memoizedState = _.memoizedState),
                  (R.lanes = _.lanes))
                : ((R.updateQueue = null), (R.memoizedState = null));
            }
            var $ = gs(u);
            if ($ !== null) {
              ($.flags &= -257),
                ys($, u, c, i, t),
                $.mode & 1 && vs(i, S, t),
                (t = $),
                (p = S);
              var V = t.updateQueue;
              if (V === null) {
                var Q = new Set();
                Q.add(p), (t.updateQueue = Q);
              } else V.add(p);
              break e;
            } else {
              if (!(t & 1)) {
                vs(i, S, t), Ho();
                break e;
              }
              p = Error(a(426));
            }
          } else if (he && c.mode & 1) {
            var Ce = gs(u);
            if (Ce !== null) {
              !(Ce.flags & 65536) && (Ce.flags |= 256),
                ys(Ce, u, c, i, t),
                Zi(Dn(p, c));
              break e;
            }
          }
          (i = p = Dn(p, c)),
            Re !== 4 && (Re = 2),
            Pr === null ? (Pr = [i]) : Pr.push(i),
            (i = u);
          do {
            switch (i.tag) {
              case 3:
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var g = hs(i, p, t);
                Ha(i, g);
                break e;
              case 1:
                c = p;
                var h = i.type,
                  y = i.stateNode;
                if (
                  !(i.flags & 128) &&
                  (typeof h.getDerivedStateFromError == "function" ||
                    (y !== null &&
                      typeof y.componentDidCatch == "function" &&
                      (Yt === null || !Yt.has(y))))
                ) {
                  (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                  var z = ms(i, c, t);
                  Ha(i, z);
                  break e;
                }
            }
            i = i.return;
          } while (i !== null);
        }
        Xs(n);
      } catch (K) {
        (t = K), _e === n && n !== null && (_e = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Ys() {
    var e = jl.current;
    return (jl.current = Cl), e === null ? Cl : e;
  }
  function Ho() {
    (Re === 0 || Re === 3 || Re === 2) && (Re = 4),
      ze === null || (!(sn & 268435455) && !(zl & 268435455)) || Jt(ze, Me);
  }
  function Fl(e, t) {
    var n = ne;
    ne |= 2;
    var r = Ys();
    (ze !== e || Me !== t) && ((zt = null), fn(e, t));
    do
      try {
        xd();
        break;
      } catch (l) {
        Ks(e, l);
      }
    while (!0);
    if ((bi(), (ne = n), (jl.current = r), _e !== null)) throw Error(a(261));
    return (ze = null), (Me = 0), Re;
  }
  function xd() {
    for (; _e !== null; ) Gs(_e);
  }
  function Ed() {
    for (; _e !== null && !Yc(); ) Gs(_e);
  }
  function Gs(e) {
    var t = qs(e.alternate, e, be);
    (e.memoizedProps = e.pendingProps),
      t === null ? Xs(e) : (_e = t),
      (To.current = null);
  }
  function Xs(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), t.flags & 32768)) {
        if (((n = vd(n, t)), n !== null)) {
          (n.flags &= 32767), (_e = n);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (Re = 6), (_e = null);
          return;
        }
      } else if (((n = md(n, t, be)), n !== null)) {
        _e = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        _e = t;
        return;
      }
      _e = t = e;
    } while (t !== null);
    Re === 0 && (Re = 5);
  }
  function dn(e, t, n) {
    var r = ue,
      l = lt.transition;
    try {
      (lt.transition = null), (ue = 1), Cd(e, t, n, r);
    } finally {
      (lt.transition = l), (ue = r);
    }
    return null;
  }
  function Cd(e, t, n, r) {
    do $n();
    while (Gt !== null);
    if (ne & 6) throw Error(a(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(a(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var i = n.lanes | n.childLanes;
    if (
      (rf(e, i),
      e === ze && ((_e = ze = null), (Me = 0)),
      (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
        Ol ||
        ((Ol = !0),
        bs(Hr, function () {
          return $n(), null;
        })),
      (i = (n.flags & 15990) !== 0),
      n.subtreeFlags & 15990 || i)
    ) {
      (i = lt.transition), (lt.transition = null);
      var u = ue;
      ue = 1;
      var c = ne;
      (ne |= 4),
        (To.current = null),
        yd(e, n),
        Us(n, e),
        Vf($i),
        (Gr = !!Ui),
        ($i = Ui = null),
        (e.current = n),
        wd(n),
        Gc(),
        (ne = c),
        (ue = u),
        (lt.transition = i);
    } else e.current = n;
    if (
      (Ol && ((Ol = !1), (Gt = e), (Ml = l)),
      (i = e.pendingLanes),
      i === 0 && (Yt = null),
      Zc(n.stateNode),
      Ke(e, Ee()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
    if (Tl) throw ((Tl = !1), (e = Io), (Io = null), e);
    return (
      Ml & 1 && e.tag !== 0 && $n(),
      (i = e.pendingLanes),
      i & 1 ? (e === Do ? _r++ : ((_r = 0), (Do = e))) : (_r = 0),
      Wt(),
      null
    );
  }
  function $n() {
    if (Gt !== null) {
      var e = Fu(Ml),
        t = lt.transition,
        n = ue;
      try {
        if (((lt.transition = null), (ue = 16 > e ? 16 : e), Gt === null))
          var r = !1;
        else {
          if (((e = Gt), (Gt = null), (Ml = 0), ne & 6)) throw Error(a(331));
          var l = ne;
          for (ne |= 4, B = e.current; B !== null; ) {
            var i = B,
              u = i.child;
            if (B.flags & 16) {
              var c = i.deletions;
              if (c !== null) {
                for (var p = 0; p < c.length; p++) {
                  var S = c[p];
                  for (B = S; B !== null; ) {
                    var R = B;
                    switch (R.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Er(8, R, i);
                    }
                    var L = R.child;
                    if (L !== null) (L.return = R), (B = L);
                    else
                      for (; B !== null; ) {
                        R = B;
                        var _ = R.sibling,
                          $ = R.return;
                        if ((Ms(R), R === S)) {
                          B = null;
                          break;
                        }
                        if (_ !== null) {
                          (_.return = $), (B = _);
                          break;
                        }
                        B = $;
                      }
                  }
                }
                var V = i.alternate;
                if (V !== null) {
                  var Q = V.child;
                  if (Q !== null) {
                    V.child = null;
                    do {
                      var Ce = Q.sibling;
                      (Q.sibling = null), (Q = Ce);
                    } while (Q !== null);
                  }
                }
                B = i;
              }
            }
            if (i.subtreeFlags & 2064 && u !== null) (u.return = i), (B = u);
            else
              e: for (; B !== null; ) {
                if (((i = B), i.flags & 2048))
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Er(9, i, i.return);
                  }
                var g = i.sibling;
                if (g !== null) {
                  (g.return = i.return), (B = g);
                  break e;
                }
                B = i.return;
              }
          }
          var h = e.current;
          for (B = h; B !== null; ) {
            u = B;
            var y = u.child;
            if (u.subtreeFlags & 2064 && y !== null) (y.return = u), (B = y);
            else
              e: for (u = h; B !== null; ) {
                if (((c = B), c.flags & 2048))
                  try {
                    switch (c.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ll(9, c);
                    }
                  } catch (K) {
                    xe(c, c.return, K);
                  }
                if (c === u) {
                  B = null;
                  break e;
                }
                var z = c.sibling;
                if (z !== null) {
                  (z.return = c.return), (B = z);
                  break e;
                }
                B = c.return;
              }
          }
          if (
            ((ne = l),
            Wt(),
            gt && typeof gt.onPostCommitFiberRoot == "function")
          )
            try {
              gt.onPostCommitFiberRoot(Br, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        (ue = n), (lt.transition = t);
      }
    }
    return !1;
  }
  function Js(e, t, n) {
    (t = Dn(n, t)),
      (t = hs(e, t, 1)),
      (e = Qt(e, t, 1)),
      (t = $e()),
      e !== null && (Jn(e, 1, t), Ke(e, t));
  }
  function xe(e, t, n) {
    if (e.tag === 3) Js(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Js(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (Yt === null || !Yt.has(r)))
          ) {
            (e = Dn(n, e)),
              (e = ms(t, e, 1)),
              (t = Qt(t, e, 1)),
              (e = $e()),
              t !== null && (Jn(t, 1, e), Ke(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function Pd(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
      (t = $e()),
      (e.pingedLanes |= e.suspendedLanes & n),
      ze === e &&
        (Me & n) === n &&
        (Re === 4 || (Re === 3 && (Me & 130023424) === Me && 500 > Ee() - Mo)
          ? fn(e, 0)
          : (Oo |= n)),
      Ke(e, t);
  }
  function Zs(e, t) {
    t === 0 &&
      (e.mode & 1
        ? ((t = Vr), (Vr <<= 1), !(Vr & 130023424) && (Vr = 4194304))
        : (t = 1));
    var n = $e();
    (e = Rt(e, t)), e !== null && (Jn(e, t, n), Ke(e, n));
  }
  function _d(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), Zs(e, n);
  }
  function Nd(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(a(314));
    }
    r !== null && r.delete(t), Zs(e, n);
  }
  var qs;
  qs = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Be.current) Ve = !0;
      else {
        if (!(e.lanes & n) && !(t.flags & 128)) return (Ve = !1), hd(e, t, n);
        Ve = !!(e.flags & 131072);
      }
    else (Ve = !1), he && t.flags & 1048576 && za(t, dl, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        Nl(e, t), (e = t.pendingProps);
        var l = Rn(t, Ie.current);
        Mn(t, n), (l = co(null, t, r, e, l, n));
        var i = fo();
        return (
          (t.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              We(r) ? ((i = !0), sl(t)) : (i = !1),
              (t.memoizedState =
                l.state !== null && l.state !== void 0 ? l.state : null),
              ro(t),
              (l.updater = Pl),
              (t.stateNode = l),
              (l._reactInternals = t),
              yo(t, r, e, n),
              (t = xo(null, t, r, !0, i, n)))
            : ((t.tag = 0), he && i && Yi(t), Ue(null, t, l, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (Nl(e, t),
            (e = t.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (t.type = r),
            (l = t.tag = Ld(r)),
            (e = ct(r, e)),
            l)
          ) {
            case 0:
              t = ko(null, t, r, e, n);
              break e;
            case 1:
              t = Cs(null, t, r, e, n);
              break e;
            case 11:
              t = ws(null, t, r, e, n);
              break e;
            case 14:
              t = Ss(null, t, r, ct(r.type, e), n);
              break e;
          }
          throw Error(a(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ct(r, l)),
          ko(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ct(r, l)),
          Cs(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((Ps(t), e === null)) throw Error(a(387));
          (r = t.pendingProps),
            (i = t.memoizedState),
            (l = i.element),
            $a(e, t),
            yl(t, r, null, n);
          var u = t.memoizedState;
          if (((r = u.element), i.isDehydrated))
            if (
              ((i = {
                element: r,
                isDehydrated: !1,
                cache: u.cache,
                pendingSuspenseBoundaries: u.pendingSuspenseBoundaries,
                transitions: u.transitions,
              }),
              (t.updateQueue.baseState = i),
              (t.memoizedState = i),
              t.flags & 256)
            ) {
              (l = Dn(Error(a(423)), t)), (t = _s(e, t, r, n, l));
              break e;
            } else if (r !== l) {
              (l = Dn(Error(a(424)), t)), (t = _s(e, t, r, n, l));
              break e;
            } else
              for (
                qe = $t(t.stateNode.containerInfo.firstChild),
                  Ze = t,
                  he = !0,
                  st = null,
                  n = Aa(t, null, r, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((zn(), r === l)) {
              t = jt(e, t, n);
              break e;
            }
            Ue(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Wa(t),
          e === null && Ji(t),
          (r = t.type),
          (l = t.pendingProps),
          (i = e !== null ? e.memoizedProps : null),
          (u = l.children),
          Hi(r, l) ? (u = null) : i !== null && Hi(r, i) && (t.flags |= 32),
          Es(e, t),
          Ue(e, t, u, n),
          t.child
        );
      case 6:
        return e === null && Ji(t), null;
      case 13:
        return Ns(e, t, n);
      case 4:
        return (
          lo(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = Tn(t, null, r, n)) : Ue(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ct(r, l)),
          ws(e, t, r, l, n)
        );
      case 7:
        return Ue(e, t, t.pendingProps, n), t.child;
      case 8:
        return Ue(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Ue(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (l = t.pendingProps),
            (i = t.memoizedProps),
            (u = l.value),
            ce(ml, r._currentValue),
            (r._currentValue = u),
            i !== null)
          )
            if (at(i.value, u)) {
              if (i.children === l.children && !Be.current) {
                t = jt(e, t, n);
                break e;
              }
            } else
              for (i = t.child, i !== null && (i.return = t); i !== null; ) {
                var c = i.dependencies;
                if (c !== null) {
                  u = i.child;
                  for (var p = c.firstContext; p !== null; ) {
                    if (p.context === r) {
                      if (i.tag === 1) {
                        (p = Lt(-1, n & -n)), (p.tag = 2);
                        var S = i.updateQueue;
                        if (S !== null) {
                          S = S.shared;
                          var R = S.pending;
                          R === null
                            ? (p.next = p)
                            : ((p.next = R.next), (R.next = p)),
                            (S.pending = p);
                        }
                      }
                      (i.lanes |= n),
                        (p = i.alternate),
                        p !== null && (p.lanes |= n),
                        to(i.return, n, t),
                        (c.lanes |= n);
                      break;
                    }
                    p = p.next;
                  }
                } else if (i.tag === 10) u = i.type === t.type ? null : i.child;
                else if (i.tag === 18) {
                  if (((u = i.return), u === null)) throw Error(a(341));
                  (u.lanes |= n),
                    (c = u.alternate),
                    c !== null && (c.lanes |= n),
                    to(u, n, t),
                    (u = i.sibling);
                } else u = i.child;
                if (u !== null) u.return = i;
                else
                  for (u = i; u !== null; ) {
                    if (u === t) {
                      u = null;
                      break;
                    }
                    if (((i = u.sibling), i !== null)) {
                      (i.return = u.return), (u = i);
                      break;
                    }
                    u = u.return;
                  }
                i = u;
              }
          Ue(e, t, l.children, n), (t = t.child);
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          Mn(t, n),
          (l = nt(l)),
          (r = r(l)),
          (t.flags |= 1),
          Ue(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (l = ct(r, t.pendingProps)),
          (l = ct(r.type, l)),
          Ss(e, t, r, l, n)
        );
      case 15:
        return ks(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ct(r, l)),
          Nl(e, t),
          (t.tag = 1),
          We(r) ? ((e = !0), sl(t)) : (e = !1),
          Mn(t, n),
          ds(t, r, l),
          yo(t, r, l, n),
          xo(null, t, r, !0, e, n)
        );
      case 19:
        return Ls(e, t, n);
      case 22:
        return xs(e, t, n);
    }
    throw Error(a(156, t.tag));
  };
  function bs(e, t) {
    return Tu(e, t);
  }
  function Rd(e, t, n, r) {
    (this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function it(e, t, n, r) {
    return new Rd(e, t, n, r);
  }
  function Bo(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function Ld(e) {
    if (typeof e == "function") return Bo(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === mt)) return 11;
      if (e === vt) return 14;
    }
    return 2;
  }
  function Zt(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = it(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function Al(e, t, n, r, l, i) {
    var u = 2;
    if (((r = e), typeof e == "function")) Bo(e) && (u = 1);
    else if (typeof e == "string") u = 5;
    else
      e: switch (e) {
        case me:
          return pn(n.children, l, i, t);
        case Pe:
          (u = 8), (l |= 8);
          break;
        case Se:
          return (
            (e = it(12, n, t, l | 2)), (e.elementType = Se), (e.lanes = i), e
          );
        case Ge:
          return (e = it(13, n, t, l)), (e.elementType = Ge), (e.lanes = i), e;
        case ot:
          return (e = it(19, n, t, l)), (e.elementType = ot), (e.lanes = i), e;
        case ke:
          return Ul(n, l, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Le:
                u = 10;
                break e;
              case ht:
                u = 9;
                break e;
              case mt:
                u = 11;
                break e;
              case vt:
                u = 14;
                break e;
              case He:
                (u = 16), (r = null);
                break e;
            }
          throw Error(a(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = it(u, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
    );
  }
  function pn(e, t, n, r) {
    return (e = it(7, e, r, t)), (e.lanes = n), e;
  }
  function Ul(e, t, n, r) {
    return (
      (e = it(22, e, r, t)),
      (e.elementType = ke),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Wo(e, t, n) {
    return (e = it(6, e, null, t)), (e.lanes = n), e;
  }
  function Vo(e, t, n) {
    return (
      (t = it(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function jd(e, t, n, r, l) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = vi(0)),
      (this.expirationTimes = vi(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = vi(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null);
  }
  function Qo(e, t, n, r, l, i, u, c, p) {
    return (
      (e = new jd(e, t, n, c, p)),
      t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
      (i = it(3, null, null, t)),
      (e.current = i),
      (i.stateNode = e),
      (i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      ro(i),
      e
    );
  }
  function zd(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: we,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function ec(e) {
    if (!e) return Bt;
    e = e._reactInternals;
    e: {
      if (en(e) !== e || e.tag !== 1) throw Error(a(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (We(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(a(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (We(n)) return Ra(e, n, t);
    }
    return t;
  }
  function tc(e, t, n, r, l, i, u, c, p) {
    return (
      (e = Qo(n, r, !0, e, l, i, u, c, p)),
      (e.context = ec(null)),
      (n = e.current),
      (r = $e()),
      (l = Xt(n)),
      (i = Lt(r, l)),
      (i.callback = t ?? null),
      Qt(n, i, l),
      (e.current.lanes = l),
      Jn(e, l, r),
      Ke(e, r),
      e
    );
  }
  function $l(e, t, n, r) {
    var l = t.current,
      i = $e(),
      u = Xt(l);
    return (
      (n = ec(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = Lt(i, u)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = Qt(l, t, u)),
      e !== null && (pt(e, l, u, i), gl(e, l, u)),
      u
    );
  }
  function Hl(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function nc(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Ko(e, t) {
    nc(e, t), (e = e.alternate) && nc(e, t);
  }
  function Td() {
    return null;
  }
  var rc =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Yo(e) {
    this._internalRoot = e;
  }
  (Bl.prototype.render = Yo.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(a(409));
      $l(e, t, null, null);
    }),
    (Bl.prototype.unmount = Yo.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          cn(function () {
            $l(null, e, null, null);
          }),
            (t[Ct] = null);
        }
      });
  function Bl(e) {
    this._internalRoot = e;
  }
  Bl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = $u();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Ft.length && t !== 0 && t < Ft[n].priority; n++);
      Ft.splice(n, 0, e), n === 0 && Wu(e);
    }
  };
  function Go(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Wl(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function lc() {}
  function Od(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var i = r;
        r = function () {
          var S = Hl(u);
          i.call(S);
        };
      }
      var u = tc(t, r, e, 0, null, !1, !1, "", lc);
      return (
        (e._reactRootContainer = u),
        (e[Ct] = u.current),
        cr(e.nodeType === 8 ? e.parentNode : e),
        cn(),
        u
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == "function") {
      var c = r;
      r = function () {
        var S = Hl(p);
        c.call(S);
      };
    }
    var p = Qo(e, 0, !1, null, null, !1, !1, "", lc);
    return (
      (e._reactRootContainer = p),
      (e[Ct] = p.current),
      cr(e.nodeType === 8 ? e.parentNode : e),
      cn(function () {
        $l(t, p, n, r);
      }),
      p
    );
  }
  function Vl(e, t, n, r, l) {
    var i = n._reactRootContainer;
    if (i) {
      var u = i;
      if (typeof l == "function") {
        var c = l;
        l = function () {
          var p = Hl(u);
          c.call(p);
        };
      }
      $l(t, u, e, l);
    } else u = Od(n, t, e, l, r);
    return Hl(u);
  }
  (Au = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Xn(t.pendingLanes);
          n !== 0 &&
            (gi(t, n | 1), Ke(t, Ee()), !(ne & 6) && ((Un = Ee() + 500), Wt()));
        }
        break;
      case 13:
        cn(function () {
          var r = Rt(e, 1);
          if (r !== null) {
            var l = $e();
            pt(r, e, 1, l);
          }
        }),
          Ko(e, 1);
    }
  }),
    (yi = function (e) {
      if (e.tag === 13) {
        var t = Rt(e, 134217728);
        if (t !== null) {
          var n = $e();
          pt(t, e, 134217728, n);
        }
        Ko(e, 134217728);
      }
    }),
    (Uu = function (e) {
      if (e.tag === 13) {
        var t = Xt(e),
          n = Rt(e, t);
        if (n !== null) {
          var r = $e();
          pt(n, e, t, r);
        }
        Ko(e, t);
      }
    }),
    ($u = function () {
      return ue;
    }),
    (Hu = function (e, t) {
      var n = ue;
      try {
        return (ue = e), t();
      } finally {
        ue = n;
      }
    }),
    (ci = function (e, t, n) {
      switch (t) {
        case "input":
          if ((ni(e, n), (t = n.name), n.type === "radio" && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var l = ul(r);
                if (!l) throw Error(a(90));
                fu(r), ni(r, l);
              }
            }
          }
          break;
        case "textarea":
          vu(e, n);
          break;
        case "select":
          (t = n.value), t != null && vn(e, !!n.multiple, t, !1);
      }
    }),
    (Pu = Uo),
    (_u = cn);
  var Md = { usingClientEntryPoint: !1, Events: [pr, _n, ul, Eu, Cu, Uo] },
    Nr = {
      findFiberByHostInstance: tn,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Id = {
      bundleType: Nr.bundleType,
      version: Nr.version,
      rendererPackageName: Nr.rendererPackageName,
      rendererConfig: Nr.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: te.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = ju(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: Nr.findFiberByHostInstance || Td,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ql = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ql.isDisabled && Ql.supportsFiber)
      try {
        (Br = Ql.inject(Id)), (gt = Ql);
      } catch {}
  }
  return (
    (Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Md),
    (Ye.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Go(t)) throw Error(a(200));
      return zd(e, t, null, n);
    }),
    (Ye.createRoot = function (e, t) {
      if (!Go(e)) throw Error(a(299));
      var n = !1,
        r = "",
        l = rc;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = Qo(e, 1, !1, null, null, n, !1, r, l)),
        (e[Ct] = t.current),
        cr(e.nodeType === 8 ? e.parentNode : e),
        new Yo(t)
      );
    }),
    (Ye.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(a(188))
          : ((e = Object.keys(e).join(",")), Error(a(268, e)));
      return (e = ju(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (Ye.flushSync = function (e) {
      return cn(e);
    }),
    (Ye.hydrate = function (e, t, n) {
      if (!Wl(t)) throw Error(a(200));
      return Vl(null, e, t, !0, n);
    }),
    (Ye.hydrateRoot = function (e, t, n) {
      if (!Go(e)) throw Error(a(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        i = "",
        u = rc;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (u = n.onRecoverableError)),
        (t = tc(t, null, e, 1, n ?? null, l, !1, i, u)),
        (e[Ct] = t.current),
        cr(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          (n = r[e]),
            (l = n._getVersion),
            (l = l(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, l])
              : t.mutableSourceEagerHydrationData.push(n, l);
      return new Bl(t);
    }),
    (Ye.render = function (e, t, n) {
      if (!Wl(t)) throw Error(a(200));
      return Vl(null, e, t, !1, n);
    }),
    (Ye.unmountComponentAtNode = function (e) {
      if (!Wl(e)) throw Error(a(40));
      return e._reactRootContainer
        ? (cn(function () {
            Vl(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[Ct] = null);
            });
          }),
          !0)
        : !1;
    }),
    (Ye.unstable_batchedUpdates = Uo),
    (Ye.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!Wl(n)) throw Error(a(200));
      if (e == null || e._reactInternals === void 0) throw Error(a(38));
      return Vl(e, t, n, !1, r);
    }),
    (Ye.version = "18.3.1-next-f1338f8080-20240426"),
    Ye
  );
}
var dc;
function Vd() {
  if (dc) return Zo.exports;
  dc = 1;
  function o() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o);
      } catch (s) {
        console.error(s);
      }
  }
  return o(), (Zo.exports = Wd()), Zo.exports;
}
var pc;
function Qd() {
  if (pc) return Kl;
  pc = 1;
  var o = Vd();
  return (Kl.createRoot = o.createRoot), (Kl.hydrateRoot = o.hydrateRoot), Kl;
}
var Kd = Qd(),
  Lr = {},
  hc;
function Yd() {
  if (hc) return Lr;
  (hc = 1),
    Object.defineProperty(Lr, "__esModule", { value: !0 }),
    (Lr.parse = x),
    (Lr.serialize = k);
  const o = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    s = /^[\u0021-\u003A\u003C-\u007E]*$/,
    a =
      /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    d = /^[\u0020-\u003A\u003D-\u007E]*$/,
    f = Object.prototype.toString,
    m = (() => {
      const P = function () {};
      return (P.prototype = Object.create(null)), P;
    })();
  function x(P, U) {
    const T = new m(),
      F = P.length;
    if (F < 2) return T;
    const M = (U == null ? void 0 : U.decode) || O;
    let D = 0;
    do {
      const H = P.indexOf("=", D);
      if (H === -1) break;
      const Z = P.indexOf(";", D),
        te = Z === -1 ? F : Z;
      if (H > te) {
        D = P.lastIndexOf(";", H - 1) + 1;
        continue;
      }
      const ae = E(P, D, H),
        we = w(P, H, ae),
        me = P.slice(ae, we);
      if (T[me] === void 0) {
        let Pe = E(P, H + 1, te),
          Se = w(P, te, Pe);
        const Le = M(P.slice(Pe, Se));
        T[me] = Le;
      }
      D = te + 1;
    } while (D < F);
    return T;
  }
  function E(P, U, T) {
    do {
      const F = P.charCodeAt(U);
      if (F !== 32 && F !== 9) return U;
    } while (++U < T);
    return T;
  }
  function w(P, U, T) {
    for (; U > T; ) {
      const F = P.charCodeAt(--U);
      if (F !== 32 && F !== 9) return U + 1;
    }
    return T;
  }
  function k(P, U, T) {
    const F = (T == null ? void 0 : T.encode) || encodeURIComponent;
    if (!o.test(P)) throw new TypeError(`argument name is invalid: ${P}`);
    const M = F(U);
    if (!s.test(M)) throw new TypeError(`argument val is invalid: ${U}`);
    let D = P + "=" + M;
    if (!T) return D;
    if (T.maxAge !== void 0) {
      if (!Number.isInteger(T.maxAge))
        throw new TypeError(`option maxAge is invalid: ${T.maxAge}`);
      D += "; Max-Age=" + T.maxAge;
    }
    if (T.domain) {
      if (!a.test(T.domain))
        throw new TypeError(`option domain is invalid: ${T.domain}`);
      D += "; Domain=" + T.domain;
    }
    if (T.path) {
      if (!d.test(T.path))
        throw new TypeError(`option path is invalid: ${T.path}`);
      D += "; Path=" + T.path;
    }
    if (T.expires) {
      if (!I(T.expires) || !Number.isFinite(T.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${T.expires}`);
      D += "; Expires=" + T.expires.toUTCString();
    }
    if (
      (T.httpOnly && (D += "; HttpOnly"),
      T.secure && (D += "; Secure"),
      T.partitioned && (D += "; Partitioned"),
      T.priority)
    )
      switch (
        typeof T.priority == "string" ? T.priority.toLowerCase() : void 0
      ) {
        case "low":
          D += "; Priority=Low";
          break;
        case "medium":
          D += "; Priority=Medium";
          break;
        case "high":
          D += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${T.priority}`);
      }
    if (T.sameSite)
      switch (
        typeof T.sameSite == "string" ? T.sameSite.toLowerCase() : T.sameSite
      ) {
        case !0:
        case "strict":
          D += "; SameSite=Strict";
          break;
        case "lax":
          D += "; SameSite=Lax";
          break;
        case "none":
          D += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${T.sameSite}`);
      }
    return D;
  }
  function O(P) {
    if (P.indexOf("%") === -1) return P;
    try {
      return decodeURIComponent(P);
    } catch {
      return P;
    }
  }
  function I(P) {
    return f.call(P) === "[object Date]";
  }
  return Lr;
}
Yd();
/**
 * react-router v7.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var mc = "popstate";
function Gd(o = {}) {
  function s(d, f) {
    let { pathname: m, search: x, hash: E } = d.location;
    return nu(
      "",
      { pathname: m, search: x, hash: E },
      (f.state && f.state.usr) || null,
      (f.state && f.state.key) || "default"
    );
  }
  function a(d, f) {
    return typeof f == "string" ? f : Tr(f);
  }
  return Jd(s, a, null, o);
}
function ye(o, s) {
  if (o === !1 || o === null || typeof o > "u") throw new Error(s);
}
function xt(o, s) {
  if (!o) {
    typeof console < "u" && console.warn(s);
    try {
      throw new Error(s);
    } catch {}
  }
}
function Xd() {
  return Math.random().toString(36).substring(2, 10);
}
function vc(o, s) {
  return { usr: o.state, key: o.key, idx: s };
}
function nu(o, s, a = null, d) {
  return {
    pathname: typeof o == "string" ? o : o.pathname,
    search: "",
    hash: "",
    ...(typeof s == "string" ? Hn(s) : s),
    state: a,
    key: (s && s.key) || d || Xd(),
  };
}
function Tr({ pathname: o = "/", search: s = "", hash: a = "" }) {
  return (
    s && s !== "?" && (o += s.charAt(0) === "?" ? s : "?" + s),
    a && a !== "#" && (o += a.charAt(0) === "#" ? a : "#" + a),
    o
  );
}
function Hn(o) {
  let s = {};
  if (o) {
    let a = o.indexOf("#");
    a >= 0 && ((s.hash = o.substring(a)), (o = o.substring(0, a)));
    let d = o.indexOf("?");
    d >= 0 && ((s.search = o.substring(d)), (o = o.substring(0, d))),
      o && (s.pathname = o);
  }
  return s;
}
function Jd(o, s, a, d = {}) {
  let { window: f = document.defaultView, v5Compat: m = !1 } = d,
    x = f.history,
    E = "POP",
    w = null,
    k = O();
  k == null && ((k = 0), x.replaceState({ ...x.state, idx: k }, ""));
  function O() {
    return (x.state || { idx: null }).idx;
  }
  function I() {
    E = "POP";
    let M = O(),
      D = M == null ? null : M - k;
    (k = M), w && w({ action: E, location: F.location, delta: D });
  }
  function P(M, D) {
    E = "PUSH";
    let H = nu(F.location, M, D);
    k = O() + 1;
    let Z = vc(H, k),
      te = F.createHref(H);
    try {
      x.pushState(Z, "", te);
    } catch (ae) {
      if (ae instanceof DOMException && ae.name === "DataCloneError") throw ae;
      f.location.assign(te);
    }
    m && w && w({ action: E, location: F.location, delta: 1 });
  }
  function U(M, D) {
    E = "REPLACE";
    let H = nu(F.location, M, D);
    k = O();
    let Z = vc(H, k),
      te = F.createHref(H);
    x.replaceState(Z, "", te),
      m && w && w({ action: E, location: F.location, delta: 0 });
  }
  function T(M) {
    let D = f.location.origin !== "null" ? f.location.origin : f.location.href,
      H = typeof M == "string" ? M : Tr(M);
    return (
      (H = H.replace(/ $/, "%20")),
      ye(
        D,
        `No window.location.(origin|href) available to create URL for href: ${H}`
      ),
      new URL(H, D)
    );
  }
  let F = {
    get action() {
      return E;
    },
    get location() {
      return o(f, x);
    },
    listen(M) {
      if (w) throw new Error("A history only accepts one active listener");
      return (
        f.addEventListener(mc, I),
        (w = M),
        () => {
          f.removeEventListener(mc, I), (w = null);
        }
      );
    },
    createHref(M) {
      return s(f, M);
    },
    createURL: T,
    encodeLocation(M) {
      let D = T(M);
      return { pathname: D.pathname, search: D.search, hash: D.hash };
    },
    push: P,
    replace: U,
    go(M) {
      return x.go(M);
    },
  };
  return F;
}
function xc(o, s, a = "/") {
  return Zd(o, s, a, !1);
}
function Zd(o, s, a, d) {
  let f = typeof s == "string" ? Hn(s) : s,
    m = bt(f.pathname || "/", a);
  if (m == null) return null;
  let x = Ec(o);
  qd(x);
  let E = null;
  for (let w = 0; E == null && w < x.length; ++w) {
    let k = sp(m);
    E = up(x[w], k, d);
  }
  return E;
}
function Ec(o, s = [], a = [], d = "") {
  let f = (m, x, E) => {
    let w = {
      relativePath: E === void 0 ? m.path || "" : E,
      caseSensitive: m.caseSensitive === !0,
      childrenIndex: x,
      route: m,
    };
    w.relativePath.startsWith("/") &&
      (ye(
        w.relativePath.startsWith(d),
        `Absolute route path "${w.relativePath}" nested under path "${d}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (w.relativePath = w.relativePath.slice(d.length)));
    let k = Tt([d, w.relativePath]),
      O = a.concat(w);
    m.children &&
      m.children.length > 0 &&
      (ye(
        m.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${k}".`
      ),
      Ec(m.children, s, O, k)),
      !(m.path == null && !m.index) &&
        s.push({ path: k, score: ip(k, m.index), routesMeta: O });
  };
  return (
    o.forEach((m, x) => {
      var E;
      if (m.path === "" || !((E = m.path) != null && E.includes("?"))) f(m, x);
      else for (let w of Cc(m.path)) f(m, x, w);
    }),
    s
  );
}
function Cc(o) {
  let s = o.split("/");
  if (s.length === 0) return [];
  let [a, ...d] = s,
    f = a.endsWith("?"),
    m = a.replace(/\?$/, "");
  if (d.length === 0) return f ? [m, ""] : [m];
  let x = Cc(d.join("/")),
    E = [];
  return (
    E.push(...x.map((w) => (w === "" ? m : [m, w].join("/")))),
    f && E.push(...x),
    E.map((w) => (o.startsWith("/") && w === "" ? "/" : w))
  );
}
function qd(o) {
  o.sort((s, a) =>
    s.score !== a.score
      ? a.score - s.score
      : op(
          s.routesMeta.map((d) => d.childrenIndex),
          a.routesMeta.map((d) => d.childrenIndex)
        )
  );
}
var bd = /^:[\w-]+$/,
  ep = 3,
  tp = 2,
  np = 1,
  rp = 10,
  lp = -2,
  gc = (o) => o === "*";
function ip(o, s) {
  let a = o.split("/"),
    d = a.length;
  return (
    a.some(gc) && (d += lp),
    s && (d += tp),
    a
      .filter((f) => !gc(f))
      .reduce((f, m) => f + (bd.test(m) ? ep : m === "" ? np : rp), d)
  );
}
function op(o, s) {
  return o.length === s.length && o.slice(0, -1).every((d, f) => d === s[f])
    ? o[o.length - 1] - s[s.length - 1]
    : 0;
}
function up(o, s, a = !1) {
  let { routesMeta: d } = o,
    f = {},
    m = "/",
    x = [];
  for (let E = 0; E < d.length; ++E) {
    let w = d[E],
      k = E === d.length - 1,
      O = m === "/" ? s : s.slice(m.length) || "/",
      I = Jl(
        { path: w.relativePath, caseSensitive: w.caseSensitive, end: k },
        O
      ),
      P = w.route;
    if (
      (!I &&
        k &&
        a &&
        !d[d.length - 1].route.index &&
        (I = Jl(
          { path: w.relativePath, caseSensitive: w.caseSensitive, end: !1 },
          O
        )),
      !I)
    )
      return null;
    Object.assign(f, I.params),
      x.push({
        params: f,
        pathname: Tt([m, I.pathname]),
        pathnameBase: pp(Tt([m, I.pathnameBase])),
        route: P,
      }),
      I.pathnameBase !== "/" && (m = Tt([m, I.pathnameBase]));
  }
  return x;
}
function Jl(o, s) {
  typeof o == "string" && (o = { path: o, caseSensitive: !1, end: !0 });
  let [a, d] = ap(o.path, o.caseSensitive, o.end),
    f = s.match(a);
  if (!f) return null;
  let m = f[0],
    x = m.replace(/(.)\/+$/, "$1"),
    E = f.slice(1);
  return {
    params: d.reduce((k, { paramName: O, isOptional: I }, P) => {
      if (O === "*") {
        let T = E[P] || "";
        x = m.slice(0, m.length - T.length).replace(/(.)\/+$/, "$1");
      }
      const U = E[P];
      return (
        I && !U ? (k[O] = void 0) : (k[O] = (U || "").replace(/%2F/g, "/")), k
      );
    }, {}),
    pathname: m,
    pathnameBase: x,
    pattern: o,
  };
}
function ap(o, s = !1, a = !0) {
  xt(
    o === "*" || !o.endsWith("*") || o.endsWith("/*"),
    `Route path "${o}" will be treated as if it were "${o.replace(
      /\*$/,
      "/*"
    )}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${o.replace(
      /\*$/,
      "/*"
    )}".`
  );
  let d = [],
    f =
      "^" +
      o
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (x, E, w) => (
            d.push({ paramName: E, isOptional: w != null }),
            w ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    o.endsWith("*")
      ? (d.push({ paramName: "*" }),
        (f += o === "*" || o === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : a
      ? (f += "\\/*$")
      : o !== "" && o !== "/" && (f += "(?:(?=\\/|$))"),
    [new RegExp(f, s ? void 0 : "i"), d]
  );
}
function sp(o) {
  try {
    return o
      .split("/")
      .map((s) => decodeURIComponent(s).replace(/\//g, "%2F"))
      .join("/");
  } catch (s) {
    return (
      xt(
        !1,
        `The URL path "${o}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${s}).`
      ),
      o
    );
  }
}
function bt(o, s) {
  if (s === "/") return o;
  if (!o.toLowerCase().startsWith(s.toLowerCase())) return null;
  let a = s.endsWith("/") ? s.length - 1 : s.length,
    d = o.charAt(a);
  return d && d !== "/" ? null : o.slice(a) || "/";
}
function cp(o, s = "/") {
  let {
    pathname: a,
    search: d = "",
    hash: f = "",
  } = typeof o == "string" ? Hn(o) : o;
  return {
    pathname: a ? (a.startsWith("/") ? a : fp(a, s)) : s,
    search: hp(d),
    hash: mp(f),
  };
}
function fp(o, s) {
  let a = s.replace(/\/+$/, "").split("/");
  return (
    o.split("/").forEach((f) => {
      f === ".." ? a.length > 1 && a.pop() : f !== "." && a.push(f);
    }),
    a.length > 1 ? a.join("/") : "/"
  );
}
function eu(o, s, a, d) {
  return `Cannot include a '${o}' character in a manually specified \`to.${s}\` field [${JSON.stringify(
    d
  )}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function dp(o) {
  return o.filter(
    (s, a) => a === 0 || (s.route.path && s.route.path.length > 0)
  );
}
function Pc(o) {
  let s = dp(o);
  return s.map((a, d) => (d === s.length - 1 ? a.pathname : a.pathnameBase));
}
function _c(o, s, a, d = !1) {
  let f;
  typeof o == "string"
    ? (f = Hn(o))
    : ((f = { ...o }),
      ye(
        !f.pathname || !f.pathname.includes("?"),
        eu("?", "pathname", "search", f)
      ),
      ye(
        !f.pathname || !f.pathname.includes("#"),
        eu("#", "pathname", "hash", f)
      ),
      ye(!f.search || !f.search.includes("#"), eu("#", "search", "hash", f)));
  let m = o === "" || f.pathname === "",
    x = m ? "/" : f.pathname,
    E;
  if (x == null) E = a;
  else {
    let I = s.length - 1;
    if (!d && x.startsWith("..")) {
      let P = x.split("/");
      for (; P[0] === ".."; ) P.shift(), (I -= 1);
      f.pathname = P.join("/");
    }
    E = I >= 0 ? s[I] : "/";
  }
  let w = cp(f, E),
    k = x && x !== "/" && x.endsWith("/"),
    O = (m || x === ".") && a.endsWith("/");
  return !w.pathname.endsWith("/") && (k || O) && (w.pathname += "/"), w;
}
var Tt = (o) => o.join("/").replace(/\/\/+/g, "/"),
  pp = (o) => o.replace(/\/+$/, "").replace(/^\/*/, "/"),
  hp = (o) => (!o || o === "?" ? "" : o.startsWith("?") ? o : "?" + o),
  mp = (o) => (!o || o === "#" ? "" : o.startsWith("#") ? o : "#" + o);
function vp(o) {
  return (
    o != null &&
    typeof o.status == "number" &&
    typeof o.statusText == "string" &&
    typeof o.internal == "boolean" &&
    "data" in o
  );
}
var Nc = ["POST", "PUT", "PATCH", "DELETE"];
new Set(Nc);
var gp = ["GET", ...Nc];
new Set(gp);
var Bn = C.createContext(null);
Bn.displayName = "DataRouter";
var bl = C.createContext(null);
bl.displayName = "DataRouterState";
var Rc = C.createContext({ isTransitioning: !1 });
Rc.displayName = "ViewTransition";
var yp = C.createContext(new Map());
yp.displayName = "Fetchers";
var wp = C.createContext(null);
wp.displayName = "Await";
var Et = C.createContext(null);
Et.displayName = "Navigation";
var Or = C.createContext(null);
Or.displayName = "Location";
var Ot = C.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Ot.displayName = "Route";
var iu = C.createContext(null);
iu.displayName = "RouteError";
function Sp(o, { relative: s } = {}) {
  ye(
    Mr(),
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: a, navigator: d } = C.useContext(Et),
    { hash: f, pathname: m, search: x } = Ir(o, { relative: s }),
    E = m;
  return (
    a !== "/" && (E = m === "/" ? a : Tt([a, m])),
    d.createHref({ pathname: E, search: x, hash: f })
  );
}
function Mr() {
  return C.useContext(Or) != null;
}
function mn() {
  return (
    ye(
      Mr(),
      "useLocation() may be used only in the context of a <Router> component."
    ),
    C.useContext(Or).location
  );
}
var Lc =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function jc(o) {
  C.useContext(Et).static || C.useLayoutEffect(o);
}
function kp() {
  let { isDataRoute: o } = C.useContext(Ot);
  return o ? Mp() : xp();
}
function xp() {
  ye(
    Mr(),
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let o = C.useContext(Bn),
    { basename: s, navigator: a } = C.useContext(Et),
    { matches: d } = C.useContext(Ot),
    { pathname: f } = mn(),
    m = JSON.stringify(Pc(d)),
    x = C.useRef(!1);
  return (
    jc(() => {
      x.current = !0;
    }),
    C.useCallback(
      (w, k = {}) => {
        if ((xt(x.current, Lc), !x.current)) return;
        if (typeof w == "number") {
          a.go(w);
          return;
        }
        let O = _c(w, JSON.parse(m), f, k.relative === "path");
        o == null &&
          s !== "/" &&
          (O.pathname = O.pathname === "/" ? s : Tt([s, O.pathname])),
          (k.replace ? a.replace : a.push)(O, k.state, k);
      },
      [s, a, m, f, o]
    )
  );
}
C.createContext(null);
function Ir(o, { relative: s } = {}) {
  let { matches: a } = C.useContext(Ot),
    { pathname: d } = mn(),
    f = JSON.stringify(Pc(a));
  return C.useMemo(() => _c(o, JSON.parse(f), d, s === "path"), [o, f, d, s]);
}
function Ep(o, s) {
  return zc(o, s);
}
function zc(o, s, a, d) {
  var D;
  ye(
    Mr(),
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: f } = C.useContext(Et),
    { matches: m } = C.useContext(Ot),
    x = m[m.length - 1],
    E = x ? x.params : {},
    w = x ? x.pathname : "/",
    k = x ? x.pathnameBase : "/",
    O = x && x.route;
  {
    let H = (O && O.path) || "";
    Tc(
      w,
      !O || H.endsWith("*") || H.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${w}" (under <Route path="${H}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${H}"> to <Route path="${
        H === "/" ? "*" : `${H}/*`
      }">.`
    );
  }
  let I = mn(),
    P;
  if (s) {
    let H = typeof s == "string" ? Hn(s) : s;
    ye(
      k === "/" || ((D = H.pathname) == null ? void 0 : D.startsWith(k)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${k}" but pathname "${H.pathname}" was given in the \`location\` prop.`
    ),
      (P = H);
  } else P = I;
  let U = P.pathname || "/",
    T = U;
  if (k !== "/") {
    let H = k.replace(/^\//, "").split("/");
    T = "/" + U.replace(/^\//, "").split("/").slice(H.length).join("/");
  }
  let F = xc(o, { pathname: T });
  xt(
    O || F != null,
    `No routes matched location "${P.pathname}${P.search}${P.hash}" `
  ),
    xt(
      F == null ||
        F[F.length - 1].route.element !== void 0 ||
        F[F.length - 1].route.Component !== void 0 ||
        F[F.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${P.pathname}${P.search}${P.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    );
  let M = Rp(
    F &&
      F.map((H) =>
        Object.assign({}, H, {
          params: Object.assign({}, E, H.params),
          pathname: Tt([
            k,
            f.encodeLocation
              ? f.encodeLocation(H.pathname).pathname
              : H.pathname,
          ]),
          pathnameBase:
            H.pathnameBase === "/"
              ? k
              : Tt([
                  k,
                  f.encodeLocation
                    ? f.encodeLocation(H.pathnameBase).pathname
                    : H.pathnameBase,
                ]),
        })
      ),
    m,
    a,
    d
  );
  return s && M
    ? C.createElement(
        Or.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              ...P,
            },
            navigationType: "POP",
          },
        },
        M
      )
    : M;
}
function Cp() {
  let o = Op(),
    s = vp(o)
      ? `${o.status} ${o.statusText}`
      : o instanceof Error
      ? o.message
      : JSON.stringify(o),
    a = o instanceof Error ? o.stack : null,
    d = "rgba(200,200,200, 0.5)",
    f = { padding: "0.5rem", backgroundColor: d },
    m = { padding: "2px 4px", backgroundColor: d },
    x = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", o),
    (x = C.createElement(
      C.Fragment,
      null,
      C.createElement("p", null, "💿 Hey developer 👋"),
      C.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        C.createElement("code", { style: m }, "ErrorBoundary"),
        " or",
        " ",
        C.createElement("code", { style: m }, "errorElement"),
        " prop on your route."
      )
    )),
    C.createElement(
      C.Fragment,
      null,
      C.createElement("h2", null, "Unexpected Application Error!"),
      C.createElement("h3", { style: { fontStyle: "italic" } }, s),
      a ? C.createElement("pre", { style: f }, a) : null,
      x
    )
  );
}
var Pp = C.createElement(Cp, null),
  _p = class extends C.Component {
    constructor(o) {
      super(o),
        (this.state = {
          location: o.location,
          revalidation: o.revalidation,
          error: o.error,
        });
    }
    static getDerivedStateFromError(o) {
      return { error: o };
    }
    static getDerivedStateFromProps(o, s) {
      return s.location !== o.location ||
        (s.revalidation !== "idle" && o.revalidation === "idle")
        ? { error: o.error, location: o.location, revalidation: o.revalidation }
        : {
            error: o.error !== void 0 ? o.error : s.error,
            location: s.location,
            revalidation: o.revalidation || s.revalidation,
          };
    }
    componentDidCatch(o, s) {
      console.error(
        "React Router caught the following error during render",
        o,
        s
      );
    }
    render() {
      return this.state.error !== void 0
        ? C.createElement(
            Ot.Provider,
            { value: this.props.routeContext },
            C.createElement(iu.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function Np({ routeContext: o, match: s, children: a }) {
  let d = C.useContext(Bn);
  return (
    d &&
      d.static &&
      d.staticContext &&
      (s.route.errorElement || s.route.ErrorBoundary) &&
      (d.staticContext._deepestRenderedBoundaryId = s.route.id),
    C.createElement(Ot.Provider, { value: o }, a)
  );
}
function Rp(o, s = [], a = null, d = null) {
  if (o == null) {
    if (!a) return null;
    if (a.errors) o = a.matches;
    else if (s.length === 0 && !a.initialized && a.matches.length > 0)
      o = a.matches;
    else return null;
  }
  let f = o,
    m = a == null ? void 0 : a.errors;
  if (m != null) {
    let w = f.findIndex(
      (k) => k.route.id && (m == null ? void 0 : m[k.route.id]) !== void 0
    );
    ye(
      w >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        m
      ).join(",")}`
    ),
      (f = f.slice(0, Math.min(f.length, w + 1)));
  }
  let x = !1,
    E = -1;
  if (a)
    for (let w = 0; w < f.length; w++) {
      let k = f[w];
      if (
        ((k.route.HydrateFallback || k.route.hydrateFallbackElement) && (E = w),
        k.route.id)
      ) {
        let { loaderData: O, errors: I } = a,
          P =
            k.route.loader &&
            !O.hasOwnProperty(k.route.id) &&
            (!I || I[k.route.id] === void 0);
        if (k.route.lazy || P) {
          (x = !0), E >= 0 ? (f = f.slice(0, E + 1)) : (f = [f[0]]);
          break;
        }
      }
    }
  return f.reduceRight((w, k, O) => {
    let I,
      P = !1,
      U = null,
      T = null;
    a &&
      ((I = m && k.route.id ? m[k.route.id] : void 0),
      (U = k.route.errorElement || Pp),
      x &&
        (E < 0 && O === 0
          ? (Tc(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration"
            ),
            (P = !0),
            (T = null))
          : E === O &&
            ((P = !0), (T = k.route.hydrateFallbackElement || null))));
    let F = s.concat(f.slice(0, O + 1)),
      M = () => {
        let D;
        return (
          I
            ? (D = U)
            : P
            ? (D = T)
            : k.route.Component
            ? (D = C.createElement(k.route.Component, null))
            : k.route.element
            ? (D = k.route.element)
            : (D = w),
          C.createElement(Np, {
            match: k,
            routeContext: { outlet: w, matches: F, isDataRoute: a != null },
            children: D,
          })
        );
      };
    return a && (k.route.ErrorBoundary || k.route.errorElement || O === 0)
      ? C.createElement(_p, {
          location: a.location,
          revalidation: a.revalidation,
          component: U,
          error: I,
          children: M(),
          routeContext: { outlet: null, matches: F, isDataRoute: !0 },
        })
      : M();
  }, null);
}
function ou(o) {
  return `${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Lp(o) {
  let s = C.useContext(Bn);
  return ye(s, ou(o)), s;
}
function jp(o) {
  let s = C.useContext(bl);
  return ye(s, ou(o)), s;
}
function zp(o) {
  let s = C.useContext(Ot);
  return ye(s, ou(o)), s;
}
function uu(o) {
  let s = zp(o),
    a = s.matches[s.matches.length - 1];
  return (
    ye(
      a.route.id,
      `${o} can only be used on routes that contain a unique "id"`
    ),
    a.route.id
  );
}
function Tp() {
  return uu("useRouteId");
}
function Op() {
  var d;
  let o = C.useContext(iu),
    s = jp("useRouteError"),
    a = uu("useRouteError");
  return o !== void 0 ? o : (d = s.errors) == null ? void 0 : d[a];
}
function Mp() {
  let { router: o } = Lp("useNavigate"),
    s = uu("useNavigate"),
    a = C.useRef(!1);
  return (
    jc(() => {
      a.current = !0;
    }),
    C.useCallback(
      async (f, m = {}) => {
        xt(a.current, Lc),
          a.current &&
            (typeof f == "number"
              ? o.navigate(f)
              : await o.navigate(f, { fromRouteId: s, ...m }));
      },
      [o, s]
    )
  );
}
var yc = {};
function Tc(o, s, a) {
  !s && !yc[o] && ((yc[o] = !0), xt(!1, a));
}
C.memo(Ip);
function Ip({ routes: o, future: s, state: a }) {
  return zc(o, void 0, a, s);
}
function zr(o) {
  ye(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function Dp({
  basename: o = "/",
  children: s = null,
  location: a,
  navigationType: d = "POP",
  navigator: f,
  static: m = !1,
}) {
  ye(
    !Mr(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let x = o.replace(/^\/*/, "/"),
    E = C.useMemo(
      () => ({ basename: x, navigator: f, static: m, future: {} }),
      [x, f, m]
    );
  typeof a == "string" && (a = Hn(a));
  let {
      pathname: w = "/",
      search: k = "",
      hash: O = "",
      state: I = null,
      key: P = "default",
    } = a,
    U = C.useMemo(() => {
      let T = bt(w, x);
      return T == null
        ? null
        : {
            location: { pathname: T, search: k, hash: O, state: I, key: P },
            navigationType: d,
          };
    }, [x, w, k, O, I, P, d]);
  return (
    xt(
      U != null,
      `<Router basename="${x}"> is not able to match the URL "${w}${k}${O}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    U == null
      ? null
      : C.createElement(
          Et.Provider,
          { value: E },
          C.createElement(Or.Provider, { children: s, value: U })
        )
  );
}
function Fp({ children: o, location: s }) {
  return Ep(ru(o), s);
}
function ru(o, s = []) {
  let a = [];
  return (
    C.Children.forEach(o, (d, f) => {
      if (!C.isValidElement(d)) return;
      let m = [...s, f];
      if (d.type === C.Fragment) {
        a.push.apply(a, ru(d.props.children, m));
        return;
      }
      ye(
        d.type === zr,
        `[${
          typeof d.type == "string" ? d.type : d.type.name
        }] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        ye(
          !d.props.index || !d.props.children,
          "An index route cannot have child routes."
        );
      let x = {
        id: d.props.id || m.join("-"),
        caseSensitive: d.props.caseSensitive,
        element: d.props.element,
        Component: d.props.Component,
        index: d.props.index,
        path: d.props.path,
        loader: d.props.loader,
        action: d.props.action,
        hydrateFallbackElement: d.props.hydrateFallbackElement,
        HydrateFallback: d.props.HydrateFallback,
        errorElement: d.props.errorElement,
        ErrorBoundary: d.props.ErrorBoundary,
        hasErrorBoundary:
          d.props.hasErrorBoundary === !0 ||
          d.props.ErrorBoundary != null ||
          d.props.errorElement != null,
        shouldRevalidate: d.props.shouldRevalidate,
        handle: d.props.handle,
        lazy: d.props.lazy,
      };
      d.props.children && (x.children = ru(d.props.children, m)), a.push(x);
    }),
    a
  );
}
var Gl = "get",
  Xl = "application/x-www-form-urlencoded";
function ei(o) {
  return o != null && typeof o.tagName == "string";
}
function Ap(o) {
  return ei(o) && o.tagName.toLowerCase() === "button";
}
function Up(o) {
  return ei(o) && o.tagName.toLowerCase() === "form";
}
function $p(o) {
  return ei(o) && o.tagName.toLowerCase() === "input";
}
function Hp(o) {
  return !!(o.metaKey || o.altKey || o.ctrlKey || o.shiftKey);
}
function Bp(o, s) {
  return o.button === 0 && (!s || s === "_self") && !Hp(o);
}
var Yl = null;
function Wp() {
  if (Yl === null)
    try {
      new FormData(document.createElement("form"), 0), (Yl = !1);
    } catch {
      Yl = !0;
    }
  return Yl;
}
var Vp = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function tu(o) {
  return o != null && !Vp.has(o)
    ? (xt(
        !1,
        `"${o}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Xl}"`
      ),
      null)
    : o;
}
function Qp(o, s) {
  let a, d, f, m, x;
  if (Up(o)) {
    let E = o.getAttribute("action");
    (d = E ? bt(E, s) : null),
      (a = o.getAttribute("method") || Gl),
      (f = tu(o.getAttribute("enctype")) || Xl),
      (m = new FormData(o));
  } else if (Ap(o) || ($p(o) && (o.type === "submit" || o.type === "image"))) {
    let E = o.form;
    if (E == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let w = o.getAttribute("formaction") || E.getAttribute("action");
    if (
      ((d = w ? bt(w, s) : null),
      (a = o.getAttribute("formmethod") || E.getAttribute("method") || Gl),
      (f =
        tu(o.getAttribute("formenctype")) ||
        tu(E.getAttribute("enctype")) ||
        Xl),
      (m = new FormData(E, o)),
      !Wp())
    ) {
      let { name: k, type: O, value: I } = o;
      if (O === "image") {
        let P = k ? `${k}.` : "";
        m.append(`${P}x`, "0"), m.append(`${P}y`, "0");
      } else k && m.append(k, I);
    }
  } else {
    if (ei(o))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (a = Gl), (d = null), (f = Xl), (x = o);
  }
  return (
    m && f === "text/plain" && ((x = m), (m = void 0)),
    { action: d, method: a.toLowerCase(), encType: f, formData: m, body: x }
  );
}
function au(o, s) {
  if (o === !1 || o === null || typeof o > "u") throw new Error(s);
}
async function Kp(o, s) {
  if (o.id in s) return s[o.id];
  try {
    let a = await import(o.module);
    return (s[o.id] = a), a;
  } catch (a) {
    return (
      console.error(
        `Error loading route module \`${o.module}\`, reloading page...`
      ),
      console.error(a),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function Yp(o) {
  return o == null
    ? !1
    : o.href == null
    ? o.rel === "preload" &&
      typeof o.imageSrcSet == "string" &&
      typeof o.imageSizes == "string"
    : typeof o.rel == "string" && typeof o.href == "string";
}
async function Gp(o, s, a) {
  let d = await Promise.all(
    o.map(async (f) => {
      let m = s.routes[f.route.id];
      if (m) {
        let x = await Kp(m, a);
        return x.links ? x.links() : [];
      }
      return [];
    })
  );
  return qp(
    d
      .flat(1)
      .filter(Yp)
      .filter((f) => f.rel === "stylesheet" || f.rel === "preload")
      .map((f) =>
        f.rel === "stylesheet"
          ? { ...f, rel: "prefetch", as: "style" }
          : { ...f, rel: "prefetch" }
      )
  );
}
function wc(o, s, a, d, f, m) {
  let x = (w, k) => (a[k] ? w.route.id !== a[k].route.id : !0),
    E = (w, k) => {
      var O;
      return (
        a[k].pathname !== w.pathname ||
        (((O = a[k].route.path) == null ? void 0 : O.endsWith("*")) &&
          a[k].params["*"] !== w.params["*"])
      );
    };
  return m === "assets"
    ? s.filter((w, k) => x(w, k) || E(w, k))
    : m === "data"
    ? s.filter((w, k) => {
        var I;
        let O = d.routes[w.route.id];
        if (!O || !O.hasLoader) return !1;
        if (x(w, k) || E(w, k)) return !0;
        if (w.route.shouldRevalidate) {
          let P = w.route.shouldRevalidate({
            currentUrl: new URL(f.pathname + f.search + f.hash, window.origin),
            currentParams: ((I = a[0]) == null ? void 0 : I.params) || {},
            nextUrl: new URL(o, window.origin),
            nextParams: w.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof P == "boolean") return P;
        }
        return !0;
      })
    : [];
}
function Xp(o, s) {
  return Jp(
    o
      .map((a) => {
        let d = s.routes[a.route.id];
        if (!d) return [];
        let f = [d.module];
        return d.imports && (f = f.concat(d.imports)), f;
      })
      .flat(1)
  );
}
function Jp(o) {
  return [...new Set(o)];
}
function Zp(o) {
  let s = {},
    a = Object.keys(o).sort();
  for (let d of a) s[d] = o[d];
  return s;
}
function qp(o, s) {
  let a = new Set();
  return (
    new Set(s),
    o.reduce((d, f) => {
      let m = JSON.stringify(Zp(f));
      return a.has(m) || (a.add(m), d.push({ key: m, link: f })), d;
    }, [])
  );
}
function bp(o) {
  let s =
    typeof o == "string"
      ? new URL(
          o,
          typeof window > "u" ? "server://singlefetch/" : window.location.origin
        )
      : o;
  return (
    s.pathname === "/"
      ? (s.pathname = "_root.data")
      : (s.pathname = `${s.pathname.replace(/\/$/, "")}.data`),
    s
  );
}
function eh() {
  let o = C.useContext(Bn);
  return (
    au(
      o,
      "You must render this element inside a <DataRouterContext.Provider> element"
    ),
    o
  );
}
function th() {
  let o = C.useContext(bl);
  return (
    au(
      o,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    ),
    o
  );
}
var su = C.createContext(void 0);
su.displayName = "FrameworkContext";
function Oc() {
  let o = C.useContext(su);
  return (
    au(o, "You must render this element inside a <HydratedRouter> element"), o
  );
}
function nh(o, s) {
  let a = C.useContext(su),
    [d, f] = C.useState(!1),
    [m, x] = C.useState(!1),
    {
      onFocus: E,
      onBlur: w,
      onMouseEnter: k,
      onMouseLeave: O,
      onTouchStart: I,
    } = s,
    P = C.useRef(null);
  C.useEffect(() => {
    if ((o === "render" && x(!0), o === "viewport")) {
      let F = (D) => {
          D.forEach((H) => {
            x(H.isIntersecting);
          });
        },
        M = new IntersectionObserver(F, { threshold: 0.5 });
      return (
        P.current && M.observe(P.current),
        () => {
          M.disconnect();
        }
      );
    }
  }, [o]),
    C.useEffect(() => {
      if (d) {
        let F = setTimeout(() => {
          x(!0);
        }, 100);
        return () => {
          clearTimeout(F);
        };
      }
    }, [d]);
  let U = () => {
      f(!0);
    },
    T = () => {
      f(!1), x(!1);
    };
  return a
    ? o !== "intent"
      ? [m, P, {}]
      : [
          m,
          P,
          {
            onFocus: jr(E, U),
            onBlur: jr(w, T),
            onMouseEnter: jr(k, U),
            onMouseLeave: jr(O, T),
            onTouchStart: jr(I, U),
          },
        ]
    : [!1, P, {}];
}
function jr(o, s) {
  return (a) => {
    o && o(a), a.defaultPrevented || s(a);
  };
}
function rh({ page: o, ...s }) {
  let { router: a } = eh(),
    d = C.useMemo(() => xc(a.routes, o, a.basename), [a.routes, o, a.basename]);
  return d
    ? C.createElement(ih, { page: o, matches: d, ...s })
    : (console.warn(`Tried to prefetch ${o} but no routes matched.`), null);
}
function lh(o) {
  let { manifest: s, routeModules: a } = Oc(),
    [d, f] = C.useState([]);
  return (
    C.useEffect(() => {
      let m = !1;
      return (
        Gp(o, s, a).then((x) => {
          m || f(x);
        }),
        () => {
          m = !0;
        }
      );
    }, [o, s, a]),
    d
  );
}
function ih({ page: o, matches: s, ...a }) {
  let d = mn(),
    { manifest: f, routeModules: m } = Oc(),
    { loaderData: x, matches: E } = th(),
    w = C.useMemo(() => wc(o, s, E, f, d, "data"), [o, s, E, f, d]),
    k = C.useMemo(() => wc(o, s, E, f, d, "assets"), [o, s, E, f, d]),
    O = C.useMemo(() => {
      if (o === d.pathname + d.search + d.hash) return [];
      let U = new Set(),
        T = !1;
      if (
        (s.forEach((M) => {
          var H;
          let D = f.routes[M.route.id];
          !D ||
            !D.hasLoader ||
            ((!w.some((Z) => Z.route.id === M.route.id) &&
              M.route.id in x &&
              (H = m[M.route.id]) != null &&
              H.shouldRevalidate) ||
            D.hasClientLoader
              ? (T = !0)
              : U.add(M.route.id));
        }),
        U.size === 0)
      )
        return [];
      let F = bp(o);
      return (
        T &&
          U.size > 0 &&
          F.searchParams.set(
            "_routes",
            s
              .filter((M) => U.has(M.route.id))
              .map((M) => M.route.id)
              .join(",")
          ),
        [F.pathname + F.search]
      );
    }, [x, d, f, w, s, o, m]),
    I = C.useMemo(() => Xp(k, f), [k, f]),
    P = lh(k);
  return C.createElement(
    C.Fragment,
    null,
    O.map((U) =>
      C.createElement("link", {
        key: U,
        rel: "prefetch",
        as: "fetch",
        href: U,
        ...a,
      })
    ),
    I.map((U) =>
      C.createElement("link", { key: U, rel: "modulepreload", href: U, ...a })
    ),
    P.map(({ key: U, link: T }) => C.createElement("link", { key: U, ...T }))
  );
}
function oh(...o) {
  return (s) => {
    o.forEach((a) => {
      typeof a == "function" ? a(s) : a != null && (a.current = s);
    });
  };
}
var Mc =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  Mc && (window.__reactRouterVersion = "7.0.2");
} catch {}
function uh({ basename: o, children: s, window: a }) {
  let d = C.useRef();
  d.current == null && (d.current = Gd({ window: a, v5Compat: !0 }));
  let f = d.current,
    [m, x] = C.useState({ action: f.action, location: f.location }),
    E = C.useCallback(
      (w) => {
        C.startTransition(() => x(w));
      },
      [x]
    );
  return (
    C.useLayoutEffect(() => f.listen(E), [f, E]),
    C.createElement(Dp, {
      basename: o,
      children: s,
      location: m.location,
      navigationType: m.action,
      navigator: f,
    })
  );
}
var Ic = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Dc = C.forwardRef(function (
    {
      onClick: s,
      discover: a = "render",
      prefetch: d = "none",
      relative: f,
      reloadDocument: m,
      replace: x,
      state: E,
      target: w,
      to: k,
      preventScrollReset: O,
      viewTransition: I,
      ...P
    },
    U
  ) {
    let { basename: T } = C.useContext(Et),
      F = typeof k == "string" && Ic.test(k),
      M,
      D = !1;
    if (typeof k == "string" && F && ((M = k), Mc))
      try {
        let Se = new URL(window.location.href),
          Le = k.startsWith("//") ? new URL(Se.protocol + k) : new URL(k),
          ht = bt(Le.pathname, T);
        Le.origin === Se.origin && ht != null
          ? (k = ht + Le.search + Le.hash)
          : (D = !0);
      } catch {
        xt(
          !1,
          `<Link to="${k}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let H = Sp(k, { relative: f }),
      [Z, te, ae] = nh(d, P),
      we = fh(k, {
        replace: x,
        state: E,
        target: w,
        preventScrollReset: O,
        relative: f,
        viewTransition: I,
      });
    function me(Se) {
      s && s(Se), Se.defaultPrevented || we(Se);
    }
    let Pe = C.createElement("a", {
      ...P,
      ...ae,
      href: M || H,
      onClick: D || m ? s : me,
      ref: oh(U, te),
      target: w,
      "data-discover": !F && a === "render" ? "true" : void 0,
    });
    return Z && !F
      ? C.createElement(C.Fragment, null, Pe, C.createElement(rh, { page: H }))
      : Pe;
  });
Dc.displayName = "Link";
var ah = C.forwardRef(function (
  {
    "aria-current": s = "page",
    caseSensitive: a = !1,
    className: d = "",
    end: f = !1,
    style: m,
    to: x,
    viewTransition: E,
    children: w,
    ...k
  },
  O
) {
  let I = Ir(x, { relative: k.relative }),
    P = mn(),
    U = C.useContext(bl),
    { navigator: T, basename: F } = C.useContext(Et),
    M = U != null && vh(I) && E === !0,
    D = T.encodeLocation ? T.encodeLocation(I).pathname : I.pathname,
    H = P.pathname,
    Z =
      U && U.navigation && U.navigation.location
        ? U.navigation.location.pathname
        : null;
  a ||
    ((H = H.toLowerCase()),
    (Z = Z ? Z.toLowerCase() : null),
    (D = D.toLowerCase())),
    Z && F && (Z = bt(Z, F) || Z);
  const te = D !== "/" && D.endsWith("/") ? D.length - 1 : D.length;
  let ae = H === D || (!f && H.startsWith(D) && H.charAt(te) === "/"),
    we =
      Z != null &&
      (Z === D || (!f && Z.startsWith(D) && Z.charAt(D.length) === "/")),
    me = { isActive: ae, isPending: we, isTransitioning: M },
    Pe = ae ? s : void 0,
    Se;
  typeof d == "function"
    ? (Se = d(me))
    : (Se = [
        d,
        ae ? "active" : null,
        we ? "pending" : null,
        M ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let Le = typeof m == "function" ? m(me) : m;
  return C.createElement(
    Dc,
    {
      ...k,
      "aria-current": Pe,
      className: Se,
      ref: O,
      style: Le,
      to: x,
      viewTransition: E,
    },
    typeof w == "function" ? w(me) : w
  );
});
ah.displayName = "NavLink";
var sh = C.forwardRef(
  (
    {
      discover: o = "render",
      fetcherKey: s,
      navigate: a,
      reloadDocument: d,
      replace: f,
      state: m,
      method: x = Gl,
      action: E,
      onSubmit: w,
      relative: k,
      preventScrollReset: O,
      viewTransition: I,
      ...P
    },
    U
  ) => {
    let T = hh(),
      F = mh(E, { relative: k }),
      M = x.toLowerCase() === "get" ? "get" : "post",
      D = typeof E == "string" && Ic.test(E),
      H = (Z) => {
        if ((w && w(Z), Z.defaultPrevented)) return;
        Z.preventDefault();
        let te = Z.nativeEvent.submitter,
          ae = (te == null ? void 0 : te.getAttribute("formmethod")) || x;
        T(te || Z.currentTarget, {
          fetcherKey: s,
          method: ae,
          navigate: a,
          replace: f,
          state: m,
          relative: k,
          preventScrollReset: O,
          viewTransition: I,
        });
      };
    return C.createElement("form", {
      ref: U,
      method: M,
      action: F,
      onSubmit: d ? w : H,
      ...P,
      "data-discover": !D && o === "render" ? "true" : void 0,
    });
  }
);
sh.displayName = "Form";
function ch(o) {
  return `${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Fc(o) {
  let s = C.useContext(Bn);
  return ye(s, ch(o)), s;
}
function fh(
  o,
  {
    target: s,
    replace: a,
    state: d,
    preventScrollReset: f,
    relative: m,
    viewTransition: x,
  } = {}
) {
  let E = kp(),
    w = mn(),
    k = Ir(o, { relative: m });
  return C.useCallback(
    (O) => {
      if (Bp(O, s)) {
        O.preventDefault();
        let I = a !== void 0 ? a : Tr(w) === Tr(k);
        E(o, {
          replace: I,
          state: d,
          preventScrollReset: f,
          relative: m,
          viewTransition: x,
        });
      }
    },
    [w, E, k, a, d, s, o, f, m, x]
  );
}
var dh = 0,
  ph = () => `__${String(++dh)}__`;
function hh() {
  let { router: o } = Fc("useSubmit"),
    { basename: s } = C.useContext(Et),
    a = Tp();
  return C.useCallback(
    async (d, f = {}) => {
      let { action: m, method: x, encType: E, formData: w, body: k } = Qp(d, s);
      if (f.navigate === !1) {
        let O = f.fetcherKey || ph();
        await o.fetch(O, a, f.action || m, {
          preventScrollReset: f.preventScrollReset,
          formData: w,
          body: k,
          formMethod: f.method || x,
          formEncType: f.encType || E,
          flushSync: f.flushSync,
        });
      } else
        await o.navigate(f.action || m, {
          preventScrollReset: f.preventScrollReset,
          formData: w,
          body: k,
          formMethod: f.method || x,
          formEncType: f.encType || E,
          replace: f.replace,
          state: f.state,
          fromRouteId: a,
          flushSync: f.flushSync,
          viewTransition: f.viewTransition,
        });
    },
    [o, s, a]
  );
}
function mh(o, { relative: s } = {}) {
  let { basename: a } = C.useContext(Et),
    d = C.useContext(Ot);
  ye(d, "useFormAction must be used inside a RouteContext");
  let [f] = d.matches.slice(-1),
    m = { ...Ir(o || ".", { relative: s }) },
    x = mn();
  if (o == null) {
    m.search = x.search;
    let E = new URLSearchParams(m.search),
      w = E.getAll("index");
    if (w.some((O) => O === "")) {
      E.delete("index"),
        w.filter((I) => I).forEach((I) => E.append("index", I));
      let O = E.toString();
      m.search = O ? `?${O}` : "";
    }
  }
  return (
    (!o || o === ".") &&
      f.route.index &&
      (m.search = m.search ? m.search.replace(/^\?/, "?index&") : "?index"),
    a !== "/" && (m.pathname = m.pathname === "/" ? a : Tt([a, m.pathname])),
    Tr(m)
  );
}
function vh(o, s = {}) {
  let a = C.useContext(Rc);
  ye(
    a != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: d } = Fc("useViewTransitionState"),
    f = Ir(o, { relative: s.relative });
  if (!a.isTransitioning) return !1;
  let m = bt(a.currentLocation.pathname, d) || a.currentLocation.pathname,
    x = bt(a.nextLocation.pathname, d) || a.nextLocation.pathname;
  return Jl(f.pathname, x) != null || Jl(f.pathname, m) != null;
}
new TextEncoder();
function gh({ darkMode: o, toggleDarkMode: s }) {
  return j.jsxs("header", {
    className: "header",
    children: [
      j.jsx("a", {
        href: "/",
        children: j.jsx("h1", { children: "Noah Lambe" }),
      }),
      j.jsx("nav", {
        children: j.jsxs("ul", {
          children: [
            j.jsx("li", {
              children: j.jsx("a", { href: "/about", children: "About" }),
            }),
            j.jsx("li", {
              children: j.jsx("a", { href: "/projects", children: "Projects" }),
            }),
            j.jsx("li", {
              children: j.jsx("a", { href: "/contact", children: "Contact" }),
            }),
            j.jsx("li", {
              children: j.jsx("button", {
                onClick: s,
                className: "dark-mode-toggle",
                children: o ? "Light Mode" : "Dark Mode",
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
const yh = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A personal portfolio built with React to showcase my skills and projects.",
    technologies: ["React", "CSS", "JavaScript"],
    image: "src/assets/Projects screenshots/Portfolio website.png",
    link: "https://github.com/Noah-Lambe/Portfolio",
  },
  {
    id: 8,
    title: "E-Commerce Web Application",
    description:
      "A feature-rich e-commerce application built with React, offering product listing, product details, shopping cart, and a simulated checkout process. Utilizes a mock API for backend interactions, delivering a seamless development and testing experience.",
    technologies: [
      "React",
      "React Router",
      "JSON Server",
      "CSS Modules",
      "Vitest",
      "React Testing Library",
    ],
    image: "src/assets/Projects screenshots/Semester 2 SPRINT 2.png",
    link: "https://github.com/Noah-Lambe/Sprint_2",
  },
  {
    id: 2,
    title: "Event Manager",
    description:
      "A simple web app for managing daily tasks with features like adding, editing, and deleting tasks.",
    technologies: ["React", "Node.js", "CSS", "JSON"],
    image: "src/assets/Projects screenshots/Event Manager app.png",
    link: "https://github.com/Noah-Lambe/Event_Manager",
  },
  {
    id: 3,
    title: "Dog Image Gallery App",
    description:
      "A Dog image fetching app that uses Dog CEO API to fetch images of selected dog breeds.",
    technologies: ["React", "CSS", "JavaScript", "API"],
    image: "src/assets/Projects screenshots/Semester 2 QAP 3.png",
    link: "https://github.com/Noah-Lambe/Noah_Lambe_QAP3",
  },
  {
    id: 4,
    title: "Modest Mo's Computers",
    description:
      "A mock e-commerce webpage designed for purchasing computer parts.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "src/assets/Projects screenshots/Semester 1 WEB SPRINT 1.png",
    link: "https://github.com/Noah-Lambe/NoahW_JonathanS_NoahL_Sprint1",
  },
  {
    id: 5,
    title: "Insurance Policy Management Program",
    description:
      "A Python program designed for an insurance company to calculate and manage customer policy details, premiums, taxes, and payment options. Includes functions, data validation, and receipt generation with support for multiple claims and payment plans.",
    technologies: ["Python", "Functions", "Lists", "File Handling"],
    image: "src/assets/Projects screenshots/Semester 1 PYTHON QAP4.png",
    link: "https://github.com/Noah-Lambe/QAP-4-Python",
  },
  {
    id: 6,
    title: "Comprehensive Menu-Based Application",
    description:
      "A Python application compiling five mini-programs into a menu-driven system, covering employee travel claims, interview questions, string and date manipulations, equipment maintenance schedules, and exploring new Python features. Includes well-structured functions, validations, and visually appealing input/output formatting.",
    technologies: ["Python", "Menu Systems", "Functions", "Date Handling"],
    image: "src/assets/Projects screenshots/Semester 1 PYTHON SPRINT 1.png",
    link: "https://github.com/Noah-Lambe/Group-20-Sprint-1---Python-",
  },
  {
    id: 7,
    title: "History of Computers Webpage",
    description:
      "An informational website exploring the evolution of computers, featuring key historical milestones, significant figures, and groundbreaking innovations.",
    technologies: ["HTML", "CSS"],
    image: "src/assets/Projects screenshots/Semester 1 WEB QAP2.png",
    link: "https://github.com/Noah-Lambe/QAP-2-Web-Dev",
  },
  {
    id: 9,
    title: "Automobile Educational Website",
    description:
      "A multimedia educational website that explores the history and details of a selected car brand. Includes text content, open-licensed images, videos, and audio resources, with a focus on semantic HTML5 elements, responsive design using CSS or Bootstrap, and accessibility.",
    technologies: ["HTML", "CSS", "Flexbox", "Multimedia Integration"],
    image: "src/assets/Projects screenshots/Semester 2 QAP1.png",
    link: "https://github.com/Noah-Lambe/QAP-2-Web-Dev",
  },
];
function wh() {
  return j.jsxs("section", {
    id: "projects",
    className: "projects-section",
    children: [
      j.jsx("h2", { children: "My Projects" }),
      j.jsx("div", {
        className: "project-list",
        children: yh.map((o) =>
          j.jsxs(
            "div",
            {
              className: "project",
              children: [
                j.jsx("img", {
                  src: o.image,
                  alt: o.title,
                  className: "project-image",
                }),
                j.jsx("h3", { children: o.title }),
                j.jsx("p", { children: o.description }),
                j.jsx("ul", {
                  className: "technologies",
                  children: o.technologies.map((s, a) =>
                    j.jsx("li", { children: s }, a)
                  ),
                }),
                j.jsx("a", {
                  href: o.link,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "project-link",
                  children: "View Project",
                }),
              ],
            },
            o.id
          )
        ),
      }),
    ],
  });
}
function Sh() {
  return j.jsx("section", {
    id: "about",
    className: "about-section",
    children: j.jsxs("div", {
      className: "about-container",
      children: [
        j.jsx("h2", { children: "About Me" }),
        j.jsxs("p", {
          className: "intro",
          children: [
            "Hi, I'm ",
            j.jsx("span", {
              className: "accent",
              children: j.jsx("strong", { children: "Noah" }),
            }),
            ". I’m a motivated and creative individual with a passion for problem-solving and innovation. With strong technical expertise in front-end development, I excel in building responsive and scalable web applications using React.js and JavaScript. My proficiency in HTML, CSS, and state management ensures I can create engaging and intuitive user interfaces, while my experience with AWS enables me to work on cloud-native solutions, including deployment and scaling. I follow Agile development practices, write clean and maintainable code, and utilize Git for effective version control. My adaptability and focus on delivering quality solutions make me an asset to any team or project.",
          ],
        }),
        j.jsxs("div", {
          className: "skills",
          children: [
            j.jsx("h3", { children: "My Skills" }),
            j.jsxs("ul", {
              className: "skills-list",
              children: [
                j.jsx("li", {
                  children: "React.js, Server-Side Rendering (React)",
                }),
                j.jsx("li", { children: "JavaScript, TypeScript" }),
                j.jsx("li", { children: "HTML, CSS, Responsive Design" }),
                j.jsx("li", { children: "State Management, UI/UX Principles" }),
                j.jsx("li", { children: "AWS, Cloud-Native Development" }),
                j.jsx("li", { children: "Git, GitHub, Version Control" }),
                j.jsx("li", { children: "Agile Development Practices" }),
                j.jsx("li", {
                  children: "Code Quality, Testing, and Maintainability",
                }),
                j.jsx("li", { children: "Python, Command line inteface" }),
              ],
            }),
          ],
        }),
        j.jsxs("div", {
          className: "personal-info",
          children: [
            j.jsx("h3", { children: "More About Me" }),
            j.jsxs("p", {
              children: [
                "Beyond my technical skills, I bring a collaborative and forward-thinking mindset to every team I work with. My background in theater, multimedia production, and competitive sports has instilled in me strong communication, leadership, and teamwork skills. I thrive in fast-paced environments where I can tackle challenges head-on while fostering a supportive and inclusive atmosphere. Whether building something from scratch or improving existing systems, I am dedicated to continuous growth and creating meaningful, impactful work.",
                j.jsx("br", {}),
                j.jsx("br", {}),
                "And I really appreciate dark mode.",
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
const kh = "/assets/Profile-photo3-BLyFf2Go.jpg";
function xh() {
  return j.jsx("section", {
    id: "home",
    className: "home-section",
    children: j.jsxs("div", {
      className: "home-container",
      children: [
        j.jsx("div", {
          className: "image-container",
          children: j.jsx("img", { src: kh, alt: "Noah Lambe" }),
        }),
        j.jsxs("div", {
          className: "intro",
          children: [
            j.jsxs("h1", {
              children: ["Hi, I'm ", j.jsx("span", { children: "Noah" })],
            }),
            j.jsxs("p", {
              children: [
                "A ",
                j.jsx("strong", { children: "Front-End Developer" }),
                " Crafting Engaging Web Experiences",
              ],
            }),
            j.jsx("a", {
              href: "projects",
              className: "cta-button",
              children: "See my Work",
            }),
            j.jsx("p", {
              className: "subtext",
              children:
                "Interested in collaborating? Feel free to reach out and let's build something great together.",
            }),
            j.jsx("a", {
              href: "contact",
              className: "secondary-button",
              children: "Get in Touch",
            }),
          ],
        }),
      ],
    }),
  });
}
var Ac = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Sc = hn.createContext && hn.createContext(Ac),
  Eh = ["attr", "size", "title"];
function Ch(o, s) {
  if (o == null) return {};
  var a = Ph(o, s),
    d,
    f;
  if (Object.getOwnPropertySymbols) {
    var m = Object.getOwnPropertySymbols(o);
    for (f = 0; f < m.length; f++)
      (d = m[f]),
        !(s.indexOf(d) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(o, d) &&
          (a[d] = o[d]);
  }
  return a;
}
function Ph(o, s) {
  if (o == null) return {};
  var a = {};
  for (var d in o)
    if (Object.prototype.hasOwnProperty.call(o, d)) {
      if (s.indexOf(d) >= 0) continue;
      a[d] = o[d];
    }
  return a;
}
function Zl() {
  return (
    (Zl = Object.assign
      ? Object.assign.bind()
      : function (o) {
          for (var s = 1; s < arguments.length; s++) {
            var a = arguments[s];
            for (var d in a)
              Object.prototype.hasOwnProperty.call(a, d) && (o[d] = a[d]);
          }
          return o;
        }),
    Zl.apply(this, arguments)
  );
}
function kc(o, s) {
  var a = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var d = Object.getOwnPropertySymbols(o);
    s &&
      (d = d.filter(function (f) {
        return Object.getOwnPropertyDescriptor(o, f).enumerable;
      })),
      a.push.apply(a, d);
  }
  return a;
}
function ql(o) {
  for (var s = 1; s < arguments.length; s++) {
    var a = arguments[s] != null ? arguments[s] : {};
    s % 2
      ? kc(Object(a), !0).forEach(function (d) {
          _h(o, d, a[d]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(a))
      : kc(Object(a)).forEach(function (d) {
          Object.defineProperty(o, d, Object.getOwnPropertyDescriptor(a, d));
        });
  }
  return o;
}
function _h(o, s, a) {
  return (
    (s = Nh(s)),
    s in o
      ? Object.defineProperty(o, s, {
          value: a,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (o[s] = a),
    o
  );
}
function Nh(o) {
  var s = Rh(o, "string");
  return typeof s == "symbol" ? s : s + "";
}
function Rh(o, s) {
  if (typeof o != "object" || !o) return o;
  var a = o[Symbol.toPrimitive];
  if (a !== void 0) {
    var d = a.call(o, s || "default");
    if (typeof d != "object") return d;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (s === "string" ? String : Number)(o);
}
function Uc(o) {
  return (
    o &&
    o.map((s, a) =>
      hn.createElement(s.tag, ql({ key: a }, s.attr), Uc(s.child))
    )
  );
}
function cu(o) {
  return (s) =>
    hn.createElement(Lh, Zl({ attr: ql({}, o.attr) }, s), Uc(o.child));
}
function Lh(o) {
  var s = (a) => {
    var { attr: d, size: f, title: m } = o,
      x = Ch(o, Eh),
      E = f || a.size || "1em",
      w;
    return (
      a.className && (w = a.className),
      o.className && (w = (w ? w + " " : "") + o.className),
      hn.createElement(
        "svg",
        Zl(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          a.attr,
          d,
          x,
          {
            className: w,
            style: ql(ql({ color: o.color || a.color }, a.style), o.style),
            height: E,
            width: E,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        m && hn.createElement("title", null, m),
        o.children
      )
    );
  };
  return Sc !== void 0
    ? hn.createElement(Sc.Consumer, null, (a) => s(a))
    : s(Ac);
}
function jh(o) {
  return cu({
    tag: "svg",
    attr: { viewBox: "0 0 496 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z",
        },
        child: [],
      },
    ],
  })(o);
}
function zh(o) {
  return cu({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z",
        },
        child: [],
      },
    ],
  })(o);
}
function Th(o) {
  return cu({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z",
        },
        child: [],
      },
    ],
  })(o);
}
function Oh() {
  return j.jsx("section", {
    id: "contact",
    className: "contact-section",
    children: j.jsxs("div", {
      className: "contact-container",
      children: [
        j.jsx("h2", { children: "Contact Me" }),
        j.jsx("p", {
          children:
            "Have a question or want to work together? Feel free to reach out! I'm excited to hear from you.",
        }),
        j.jsxs("form", {
          className: "contact-form",
          action: "https://formsubmit.co/noahalambe@gmail.com",
          method: "POST",
          children: [
            j.jsxs("div", {
              className: "form-group",
              children: [
                j.jsx("label", { htmlFor: "name", children: "Name" }),
                j.jsx("input", {
                  type: "text",
                  id: "name",
                  name: "name",
                  placeholder: "Your Name",
                  required: !0,
                }),
              ],
            }),
            j.jsxs("div", {
              className: "form-group",
              children: [
                j.jsx("label", { htmlFor: "email", children: "Email" }),
                j.jsx("input", {
                  type: "email",
                  id: "email",
                  name: "email",
                  placeholder: "Your Email",
                  required: !0,
                }),
              ],
            }),
            j.jsxs("div", {
              className: "form-group",
              children: [
                j.jsx("label", { htmlFor: "message", children: "Message" }),
                j.jsx("textarea", {
                  id: "message",
                  name: "message",
                  rows: "5",
                  placeholder: "Your Message",
                  required: !0,
                }),
              ],
            }),
            j.jsx("button", {
              type: "submit",
              className: "submit-button",
              children: "Send Message",
            }),
          ],
        }),
        j.jsxs("div", {
          className: "social-links",
          children: [
            j.jsx("p", { children: "Or connect with me on:" }),
            j.jsxs("a", {
              href: "https://github.com/Noah-Lambe",
              target: "_blank",
              rel: "noopener noreferrer",
              children: [j.jsx(jh, { className: "social-icon" }), "GitHub"],
            }),
            j.jsxs("a", {
              href: "https://www.linkedin.com/in/noah-lambe/",
              target: "_blank",
              rel: "noopener noreferrer",
              children: [j.jsx(zh, { className: "social-icon" }), "LinkedIn"],
            }),
            j.jsxs("a", {
              href: "mailto:noahalambe@gmail.com",
              children: [j.jsx(Th, { className: "social-icon" }), "Email"],
            }),
          ],
        }),
      ],
    }),
  });
}
function Mh() {
  const [o, s] = C.useState(!1);
  C.useEffect(() => {
    const d = localStorage.getItem("darkMode") === "true";
    s(d);
  }, []);
  const a = () => {
    s((d) => {
      const f = !d;
      return localStorage.setItem("darkMode", f), f;
    });
  };
  return j.jsx(uh, {
    children: j.jsxs("div", {
      className: o ? "app dark" : "app",
      children: [
        j.jsx(gh, { darkMode: o, toggleDarkMode: a }),
        j.jsx("main", {
          children: j.jsxs(Fp, {
            children: [
              j.jsx(zr, { path: "/", element: j.jsx(xh, {}) }),
              j.jsx(zr, { path: "about", element: j.jsx(Sh, {}) }),
              j.jsx(zr, { path: "projects", element: j.jsx(wh, {}) }),
              j.jsx(zr, { path: "contact", element: j.jsx(Oh, {}) }),
            ],
          }),
        }),
      ],
    }),
  });
}
Kd.createRoot(document.getElementById("root")).render(
  j.jsx(C.StrictMode, { children: j.jsx(Mh, {}) })
);
