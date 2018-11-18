!(function(e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function(e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function(e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          n.d(
            r,
            o,
            function(t) {
              return e[t];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = "/build"),
    n((n.s = 2));
})([
  function(e, t) {
    e.exports = require("react");
  },
  function(e, t) {
    e.exports = require("react-router");
  },
  function(e, t, n) {
    "use strict";
    (function(e) {
      n(3);
      var t = a(n(4)),
        r = a(n(0)),
        o = a(n(5)),
        u = n(1),
        l = a(n(6)),
        i = a(n(7));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var c = (0, t.default)(),
        f = n(9).join(e, "build"),
        p = process.env.PORT || 3e3;
      c.use(l.default.json()),
        c.use(t.default.static(f)),
        c.get("*", function(e, t) {
          var n = {},
            l = (o.default.renderToString(
              r.default.createElement(
                u.StaticRouter,
                { location: e.url, context: n },
                r.default.createElement(i.default, null)
              )
            ),
            '<html><head></head><body><div></div id="root">' +
              o.default.renderToString(
                r.default.createElement(
                  u.StaticRouter,
                  { location: e.url, context: n },
                  r.default.createElement(i.default, null)
                )
              ));
          t.send(l);
        }),
        c.listen(p, function() {
          console.log("App running,", p);
        });
    }.call(this, "/"));
  },
  function(e, t) {
    e.exports = require("babel-polyfill");
  },
  function(e, t) {
    e.exports = require("express");
  },
  function(e, t) {
    e.exports = require("react-dom/server");
  },
  function(e, t) {
    e.exports = require("body-parser");
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      o = i(n(0)),
      u = n(1),
      l = i(n(8));
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var a = (function(e) {
      function t() {
        return (
          (function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          (function(e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !t || ("object" != typeof t && "function" != typeof t)
              ? e
              : t;
          })(
            this,
            (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
          )
        );
      }
      return (
        (function(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof t
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (e.__proto__ = t));
        })(t, o.default.Component),
        r(t, [
          {
            key: "render",
            value: function() {
              return o.default.createElement(
                u.Switch,
                null,
                o.default.createElement(u.Route, {
                  path: "/",
                  render: function(e) {
                    return o.default.createElement(l.default, e);
                  }
                })
              );
            }
          }
        ]),
        t
      );
    })();
    t.default = a;
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      o = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(n(0));
    var u = (function(e) {
      function t() {
        return (
          (function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          (function(e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !t || ("object" != typeof t && "function" != typeof t)
              ? e
              : t;
          })(
            this,
            (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
          )
        );
      }
      return (
        (function(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof t
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (e.__proto__ = t));
        })(t, o.default.Component),
        r(t, [
          {
            key: "exampleMethod",
            value: function() {
              console.log("JS is running.");
            }
          },
          {
            key: "render",
            value: function() {
              var e = this;
              return o.default.createElement(
                "div",
                null,
                o.default.createElement("h1", null, "My home page"),
                o.default.createElement("p", null, "Some content"),
                o.default.createElement("button", {
                  onClick: function() {
                    return e.exampleMethod();
                  }
                })
              );
            }
          }
        ]),
        t
      );
    })();
    t.default = u;
  },
  function(e, t) {
    e.exports = require("path");
  }
]);
