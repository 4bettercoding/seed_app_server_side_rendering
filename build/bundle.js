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
      var t = c(n(4)),
        r = c(n(0)),
        o = c(n(5)),
        u = n(1),
        i = c(n(6)),
        l = c(n(7));
      function c(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var a = (0, t.default)(),
        f = n(9).join(e, "build/public"),
        p = process.env.PORT || 3e3;
      a.use(i.default.json()),
        a.use(t.default.static(f)),
        a.get("*", function(e, t) {
          var n =
            '\n    <html>\n      <head>\n      </head>\n      <body>\n        <div id="root">\n          ' +
            o.default.renderToString(
              r.default.createElement(
                u.StaticRouter,
                { location: e.url, context: {} },
                r.default.createElement(l.default, null)
              )
            ) +
            '\n        </div>\n        \x3c!--<script src="client_bundle.js"></script>--\x3e\n      </body>\n    </html>\n  ';
          t.send(n);
        }),
        a.listen(p, function() {
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
      o = l(n(0)),
      u = n(1),
      i = l(n(8));
    function l(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var c = (function(e) {
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
                    return o.default.createElement(i.default, e);
                  }
                })
              );
            }
          }
        ]),
        t
      );
    })();
    t.default = c;
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
                o.default.createElement(
                  "button",
                  {
                    onClick: function() {
                      return e.exampleMethod();
                    }
                  },
                  "click to hydrate the browser"
                )
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
