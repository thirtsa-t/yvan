/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-cssanimations-csstransitions-touchevents-domprefixes-prefixes-setclasses-testallprops-testprop-teststyles !*/
! function(e, n, t) {
    function r(e, n) {
        return typeof e === n
    }

    function o() {
        var e, n, t, o, s, i, a;
        for (var l in S)
            if (S.hasOwnProperty(l)) {
                if (e = [], n = S[l], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length))
                    for (t = 0; t < n.options.aliases.length; t++) e.push(n.options.aliases[t].toLowerCase());
                for (o = r(n.fn, "function") ? n.fn() : n.fn, s = 0; s < e.length; s++) i = e[s], a = i.split("."), 1 === a.length ? Modernizr[a[0]] = o : (!Modernizr[a[0]] || Modernizr[a[0]] instanceof Boolean || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])), Modernizr[a[0]][a[1]] = o), C.push((o ? "" : "no-") + a.join("-"))
            }
    }

    function s(e) {
        var n = x.className,
            t = Modernizr._config.classPrefix || "";
        if (b && (n = n.baseVal), Modernizr._config.enableJSClass) {
            var r = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
            n = n.replace(r, "$1" + t + "js$2")
        }
        Modernizr._config.enableClasses && (n += " " + t + e.join(" " + t), b ? x.className.baseVal = n : x.className = n)
    }

    function i(e, n) {
        return !!~("" + e).indexOf(n)
    }

    function a() {
        return "function" != typeof n.createElement ? n.createElement(arguments[0]) : b ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments)
    }

    function l(e) {
        return e.replace(/([a-z])-([a-z])/g, function(e, n, t) {
            return n + t.toUpperCase()
        }).replace(/^-/, "")
    }

    function u() {
        var e = n.body;
        return e || (e = a(b ? "svg" : "body"), e.fake = !0), e
    }

    function f(e, t, r, o) {
        var s, i, l, f, c = "modernizr",
            d = a("div"),
            p = u();
        if (parseInt(r, 10))
            for (; r--;) l = a("div"), l.id = o ? o[r] : c + (r + 1), d.appendChild(l);
        return s = a("style"), s.type = "text/css", s.id = "s" + c, (p.fake ? p : d).appendChild(s), p.appendChild(d), s.styleSheet ? s.styleSheet.cssText = e : s.appendChild(n.createTextNode(e)), d.id = c, p.fake && (p.style.background = "", p.style.overflow = "hidden", f = x.style.overflow, x.style.overflow = "hidden", x.appendChild(p)), i = t(d, e), p.fake ? (p.parentNode.removeChild(p), x.style.overflow = f, x.offsetHeight) : d.parentNode.removeChild(d), !!i
    }

    function c(e, n) {
        return function() {
            return e.apply(n, arguments)
        }
    }

    function d(e, n, t) {
        var o;
        for (var s in e)
            if (e[s] in n) return t === !1 ? e[s] : (o = n[e[s]], r(o, "function") ? c(o, t || n) : o);
        return !1
    }

    function p(e) {
        return e.replace(/([A-Z])/g, function(e, n) {
            return "-" + n.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }

    function m(n, t, r) {
        var o;
        if ("getComputedStyle" in e) {
            o = getComputedStyle.call(e, n, t);
            var s = e.console;
            if (null !== o) r && (o = o.getPropertyValue(r));
            else if (s) {
                var i = s.error ? "error" : "log";
                s[i].call(s, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
            }
        } else o = !t && n.currentStyle && n.currentStyle[r];
        return o
    }

    function h(n, r) {
        var o = n.length;
        if ("CSS" in e && "supports" in e.CSS) {
            for (; o--;)
                if (e.CSS.supports(p(n[o]), r)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in e) {
            for (var s = []; o--;) s.push("(" + p(n[o]) + ":" + r + ")");
            return s = s.join(" or "), f("@supports (" + s + ") { #modernizr { position: absolute; } }", function(e) {
                return "absolute" == m(e, null, "position")
            })
        }
        return t
    }

    function v(e, n, o, s) {
        function u() {
            c && (delete j.style, delete j.modElem)
        }
        if (s = r(s, "undefined") ? !1 : s, !r(o, "undefined")) {
            var f = h(e, o);
            if (!r(f, "undefined")) return f
        }
        for (var c, d, p, m, v, y = ["modernizr", "tspan", "samp"]; !j.style && y.length;) c = !0, j.modElem = a(y.shift()), j.style = j.modElem.style;
        for (p = e.length, d = 0; p > d; d++)
            if (m = e[d], v = j.style[m], i(m, "-") && (m = l(m)), j.style[m] !== t) {
                if (s || r(o, "undefined")) return u(), "pfx" == n ? m : !0;
                try {
                    j.style[m] = o
                } catch (g) {}
                if (j.style[m] != v) return u(), "pfx" == n ? m : !0
            }
        return u(), !1
    }

    function y(e, n, t, o, s) {
        var i = e.charAt(0).toUpperCase() + e.slice(1),
            a = (e + " " + T.join(i + " ") + i).split(" ");
        return r(n, "string") || r(n, "undefined") ? v(a, n, o, s) : (a = (e + " " + P.join(i + " ") + i).split(" "), d(a, n, t))
    }

    function g(e, n, r) {
        return y(e, t, t, n, r)
    }
    var C = [],
        S = [],
        w = {
            _version: "3.6.0",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(e, n) {
                var t = this;
                setTimeout(function() {
                    n(t[e])
                }, 0)
            },
            addTest: function(e, n, t) {
                S.push({
                    name: e,
                    fn: n,
                    options: t
                })
            },
            addAsyncTest: function(e) {
                S.push({
                    name: null,
                    fn: e
                })
            }
        },
        Modernizr = function() {};
    Modernizr.prototype = w, Modernizr = new Modernizr;
    var _ = w._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    w._prefixes = _;
    var x = n.documentElement,
        b = "svg" === x.nodeName.toLowerCase(),
        z = "Moz O ms Webkit",
        P = w._config.usePrefixes ? z.toLowerCase().split(" ") : [];
    w._domPrefixes = P;
    var T = w._config.usePrefixes ? z.split(" ") : [];
    w._cssomPrefixes = T;
    var E = w.testStyles = f;
    Modernizr.addTest("touchevents", function() {
        var t;
        if ("ontouchstart" in e || e.DocumentTouch && n instanceof DocumentTouch) t = !0;
        else {
            var r = ["@media (", _.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
            E(r, function(e) {
                t = 9 === e.offsetTop
            })
        }
        return t
    });
    var N = {
        elem: a("modernizr")
    };
    Modernizr._q.push(function() {
        delete N.elem
    });
    var j = {
        style: N.elem.style
    };
    Modernizr._q.unshift(function() {
        delete j.style
    });
    w.testProp = function(e, n, r) {
        return v([e], t, n, r)
    };
    w.testAllProps = y, w.testAllProps = g, Modernizr.addTest("cssanimations", g("animationName", "a", !0)), Modernizr.addTest("csstransitions", g("transition", "all", !0)), o(), s(C), delete w.addTest, delete w.addAsyncTest;
    for (var k = 0; k < Modernizr._q.length; k++) Modernizr._q[k]();
    e.Modernizr = Modernizr
}(window, document);