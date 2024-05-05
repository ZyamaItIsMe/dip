(() => {
    var __webpack_modules__ = {
        448: module => {
            !function(e, t) {
                true ? module.exports = t() : 0;
            }(window, (function() {
                return function(e) {
                    var t = {};
                    function n(a) {
                        if (t[a]) return t[a].exports;
                        var r = t[a] = {
                            i: a,
                            l: !1,
                            exports: {}
                        };
                        return e[a].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
                    }
                    return n.m = e, n.c = t, n.d = function(e, t, a) {
                        n.o(e, t) || Object.defineProperty(e, t, {
                            enumerable: !0,
                            get: a
                        });
                    }, n.r = function(e) {
                        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                            value: "Module"
                        }), Object.defineProperty(e, "__esModule", {
                            value: !0
                        });
                    }, n.t = function(e, t) {
                        if (1 & t && (e = n(e)), 8 & t) return e;
                        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                        var a = Object.create(null);
                        if (n.r(a), Object.defineProperty(a, "default", {
                            enumerable: !0,
                            value: e
                        }), 2 & t && "string" != typeof e) for (var r in e) n.d(a, r, function(t) {
                            return e[t];
                        }.bind(null, r));
                        return a;
                    }, n.n = function(e) {
                        var t = e && e.__esModule ? function() {
                            return e.default;
                        } : function() {
                            return e;
                        };
                        return n.d(t, "a", t), t;
                    }, n.o = function(e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t);
                    }, n.p = "", n(n.s = 0);
                }([ function(e, t, n) {
                    "use strict";
                    n.r(t);
                    var a = [], r = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ], i = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ], o = {
                        t: "top",
                        r: "right",
                        b: "bottom",
                        l: "left",
                        c: "centered"
                    };
                    function s() {}
                    var l = [ "click", "focusin", "keydown", "input" ];
                    function d(e) {
                        l.forEach((function(t) {
                            e.addEventListener(t, e === document ? L : Y);
                        }));
                    }
                    function c(e) {
                        return Array.isArray(e) ? e.map(c) : "[object Object]" === x(e) ? Object.keys(e).reduce((function(t, n) {
                            return t[n] = c(e[n]), t;
                        }), {}) : e;
                    }
                    function u(e, t) {
                        var n = e.calendar.querySelector(".qs-overlay"), a = n && !n.classList.contains("qs-hidden");
                        t = t || new Date(e.currentYear, e.currentMonth), e.calendar.innerHTML = [ h(t, e, a), f(t, e, a), v(e, a) ].join(""), 
                        a && window.requestAnimationFrame((function() {
                            M(!0, e);
                        }));
                    }
                    function h(e, t, n) {
                        return [ '<div class="qs-controls' + (n ? " qs-blur" : "") + '">', '<div class="qs-arrow qs-left"></div>', '<div class="qs-month-year' + (t.disableYearOverlay ? " qs-disabled-year-overlay" : "") + '">', '<span class="qs-month">' + t.months[e.getMonth()] + "</span>", '<span class="qs-year">' + e.getFullYear() + "</span>", "</div>", '<div class="qs-arrow qs-right"></div>', "</div>" ].join("");
                    }
                    function f(e, t, n) {
                        var a = t.currentMonth, r = t.currentYear, i = t.dateSelected, o = t.maxDate, s = t.minDate, l = t.showAllDates, d = t.days, c = t.disabledDates, u = t.startDay, h = t.weekendIndices, f = t.events, v = t.getRange ? t.getRange() : {}, m = +v.start, y = +v.end, p = g(new Date(e).setDate(1)), w = p.getDay() - u, D = w < 0 ? 7 : 0;
                        p.setMonth(p.getMonth() + 1), p.setDate(0);
                        var b = p.getDate(), q = [], S = D + 7 * ((w + b) / 7 | 0);
                        S += (w + b) % 7 ? 7 : 0;
                        for (var M = 1; M <= S; M++) {
                            var E = (M - 1) % 7, x = d[E], C = M - (w >= 0 ? w : 7 + w), L = new Date(r, a, C), Y = f[+L], j = C < 1 || C > b, O = j ? C < 1 ? -1 : 1 : 0, P = j && !l, k = P ? "" : L.getDate(), N = +L == +i, _ = E === h[0] || E === h[1], I = m !== y, A = "qs-square " + x;
                            Y && !P && (A += " qs-event"), j && (A += " qs-outside-current-month"), !l && j || (A += " qs-num"), 
                            N && (A += " qs-active"), (c[+L] || t.disabler(L) || _ && t.noWeekends || s && +L < +s || o && +L > +o) && !P && (A += " qs-disabled"), 
                            +g(new Date) == +L && (A += " qs-current"), +L === m && y && I && (A += " qs-range-start"), 
                            +L > m && +L < y && (A += " qs-range-middle"), +L === y && m && I && (A += " qs-range-end"), 
                            P && (A += " qs-empty", k = ""), q.push('<div class="' + A + '" data-direction="' + O + '">' + k + "</div>");
                        }
                        var R = d.map((function(e) {
                            return '<div class="qs-square qs-day">' + e + "</div>";
                        })).concat(q);
                        return R.unshift('<div class="qs-squares' + (n ? " qs-blur" : "") + '">'), R.push("</div>"), 
                        R.join("");
                    }
                    function v(e, t) {
                        var n = e.overlayPlaceholder, a = e.overlayButton;
                        return [ '<div class="qs-overlay' + (t ? "" : " qs-hidden") + '">', "<div>", '<input class="qs-overlay-year" placeholder="' + n + '" inputmode="numeric" />', '<div class="qs-close">&#10005;</div>', "</div>", '<div class="qs-overlay-month-container">' + e.overlayMonths.map((function(e, t) {
                            return '<div class="qs-overlay-month" data-month-num="' + t + '">' + e + "</div>";
                        })).join("") + "</div>", '<div class="qs-submit qs-disabled">' + a + "</div>", "</div>" ].join("");
                    }
                    function m(e, t, n) {
                        var a = t.el, r = t.calendar.querySelector(".qs-active"), i = e.textContent, o = t.sibling;
                        (a.disabled || a.readOnly) && t.respectDisabledReadOnly || (t.dateSelected = n ? void 0 : new Date(t.currentYear, t.currentMonth, i), 
                        r && r.classList.remove("qs-active"), n || e.classList.add("qs-active"), p(a, t, n), 
                        n || q(t), o && (y({
                            instance: t,
                            deselect: n
                        }), t.first && !o.dateSelected && (o.currentYear = t.currentYear, o.currentMonth = t.currentMonth, 
                        o.currentMonthName = t.currentMonthName), u(t), u(o)), t.onSelect(t, n ? void 0 : new Date(t.dateSelected)));
                    }
                    function y(e) {
                        var t = e.instance.first ? e.instance : e.instance.sibling, n = t.sibling;
                        t === e.instance ? e.deselect ? (t.minDate = t.originalMinDate, n.minDate = n.originalMinDate) : n.minDate = t.dateSelected : e.deselect ? (n.maxDate = n.originalMaxDate, 
                        t.maxDate = t.originalMaxDate) : t.maxDate = n.dateSelected;
                    }
                    function p(e, t, n) {
                        if (!t.nonInput) return n ? e.value = "" : t.formatter !== s ? t.formatter(e, t.dateSelected, t) : void (e.value = t.dateSelected.toDateString());
                    }
                    function w(e, t, n, a) {
                        n || a ? (n && (t.currentYear = +n), a && (t.currentMonth = +a)) : (t.currentMonth += e.contains("qs-right") ? 1 : -1, 
                        12 === t.currentMonth ? (t.currentMonth = 0, t.currentYear++) : -1 === t.currentMonth && (t.currentMonth = 11, 
                        t.currentYear--)), t.currentMonthName = t.months[t.currentMonth], u(t), t.onMonthChange(t);
                    }
                    function D(e) {
                        if (!e.noPosition) {
                            var t = e.position.top, n = e.position.right;
                            if (e.position.centered) return e.calendarContainer.classList.add("qs-centered");
                            var a = e.positionedEl.getBoundingClientRect(), r = e.el.getBoundingClientRect(), i = e.calendarContainer.getBoundingClientRect(), o = r.top - a.top + (t ? -1 * i.height : r.height) + "px", s = r.left - a.left + (n ? r.width - i.width : 0) + "px";
                            e.calendarContainer.style.setProperty("top", o), e.calendarContainer.style.setProperty("left", s);
                        }
                    }
                    function b(e) {
                        return "[object Date]" === x(e) && "Invalid Date" !== e.toString();
                    }
                    function g(e) {
                        if (b(e) || "number" == typeof e && !isNaN(e)) {
                            var t = new Date(+e);
                            return new Date(t.getFullYear(), t.getMonth(), t.getDate());
                        }
                    }
                    function q(e) {
                        e.disabled || !e.calendarContainer.classList.contains("qs-hidden") && !e.alwaysShow && ("overlay" !== e.defaultView && M(!0, e), 
                        e.calendarContainer.classList.add("qs-hidden"), e.onHide(e));
                    }
                    function S(e) {
                        e.disabled || (e.calendarContainer.classList.remove("qs-hidden"), "overlay" === e.defaultView && M(!1, e), 
                        D(e), e.onShow(e));
                    }
                    function M(e, t) {
                        var n = t.calendar, a = n.querySelector(".qs-overlay"), r = a.querySelector(".qs-overlay-year"), i = n.querySelector(".qs-controls"), o = n.querySelector(".qs-squares");
                        e ? (a.classList.add("qs-hidden"), i.classList.remove("qs-blur"), o.classList.remove("qs-blur"), 
                        r.value = "") : (a.classList.remove("qs-hidden"), i.classList.add("qs-blur"), o.classList.add("qs-blur"), 
                        r.focus());
                    }
                    function E(e, t, n, a) {
                        var r = isNaN(+(new Date).setFullYear(t.value || void 0)), i = r ? null : t.value;
                        if (13 === e.which || 13 === e.keyCode || "click" === e.type) a ? w(null, n, i, a) : r || t.classList.contains("qs-disabled") || w(null, n, i); else if (n.calendar.contains(t)) n.calendar.querySelector(".qs-submit").classList[r ? "add" : "remove"]("qs-disabled");
                    }
                    function x(e) {
                        return {}.toString.call(e);
                    }
                    function C(e) {
                        a.forEach((function(t) {
                            t !== e && q(t);
                        }));
                    }
                    function L(e) {
                        if (!e.__qs_shadow_dom) {
                            var t = e.which || e.keyCode, n = e.type, r = e.target, o = r.classList, s = a.filter((function(e) {
                                return e.calendar.contains(r) || e.el === r;
                            }))[0], l = s && s.calendar.contains(r);
                            if (!(s && s.isMobile && s.disableMobile)) if ("click" === n) {
                                if (!s) return a.forEach(q);
                                if (s.disabled) return;
                                var d = s.calendar, c = s.calendarContainer, h = s.disableYearOverlay, f = s.nonInput, v = d.querySelector(".qs-overlay-year"), y = !!d.querySelector(".qs-hidden"), p = d.querySelector(".qs-month-year").contains(r), D = r.dataset.monthNum;
                                if (s.noPosition && !l) (c.classList.contains("qs-hidden") ? S : q)(s); else if (o.contains("qs-arrow")) w(o, s); else if (p || o.contains("qs-close")) h || M(!y, s); else if (D) E(e, v, s, D); else {
                                    if (o.contains("qs-disabled")) return;
                                    if (o.contains("qs-num")) {
                                        var b = r.textContent, g = +r.dataset.direction, x = new Date(s.currentYear, s.currentMonth + g, b);
                                        if (g) {
                                            s.currentYear = x.getFullYear(), s.currentMonth = x.getMonth(), s.currentMonthName = i[s.currentMonth], 
                                            u(s);
                                            for (var L, Y = s.calendar.querySelectorAll('[data-direction="0"]'), j = 0; !L; ) {
                                                var O = Y[j];
                                                O.textContent === b && (L = O), j++;
                                            }
                                            r = L;
                                        }
                                        return void (+x == +s.dateSelected ? m(r, s, !0) : r.classList.contains("qs-disabled") || m(r, s));
                                    }
                                    o.contains("qs-submit") ? E(e, v, s) : f && r === s.el && (S(s), C(s));
                                }
                            } else if ("focusin" === n && s) S(s), C(s); else if ("keydown" === n && 9 === t && s) q(s); else if ("keydown" === n && s && !s.disabled) {
                                var P = !s.calendar.querySelector(".qs-overlay").classList.contains("qs-hidden");
                                13 === t && P && l ? E(e, r, s) : 27 === t && P && l && M(!0, s);
                            } else if ("input" === n) {
                                if (!s || !s.calendar.contains(r)) return;
                                var k = s.calendar.querySelector(".qs-submit"), N = r.value.split("").reduce((function(e, t) {
                                    return e || "0" !== t ? e + (t.match(/[0-9]/) ? t : "") : "";
                                }), "").slice(0, 4);
                                r.value = N, k.classList[4 === N.length ? "remove" : "add"]("qs-disabled");
                            }
                        }
                    }
                    function Y(e) {
                        L(e), e.__qs_shadow_dom = !0;
                    }
                    function j(e, t) {
                        l.forEach((function(n) {
                            e.removeEventListener(n, t);
                        }));
                    }
                    function O() {
                        S(this);
                    }
                    function P() {
                        q(this);
                    }
                    function k(e, t) {
                        var n = g(e), a = this.currentYear, r = this.currentMonth, i = this.sibling;
                        if (null == e) return this.dateSelected = void 0, p(this.el, this, !0), i && (y({
                            instance: this,
                            deselect: !0
                        }), u(i)), u(this), this;
                        if (!b(e)) throw new Error("`setDate` needs a JavaScript Date object.");
                        if (this.disabledDates[+n] || n < this.minDate || n > this.maxDate) throw new Error("You can't manually set a date that's disabled.");
                        this.dateSelected = n, t && (this.currentYear = n.getFullYear(), this.currentMonth = n.getMonth(), 
                        this.currentMonthName = this.months[n.getMonth()]), p(this.el, this), i && (y({
                            instance: this
                        }), u(i));
                        var o = a === n.getFullYear() && r === n.getMonth();
                        return o || t ? u(this, n) : o || u(this, new Date(a, r, 1)), this;
                    }
                    function N(e) {
                        return I(this, e, !0);
                    }
                    function _(e) {
                        return I(this, e);
                    }
                    function I(e, t, n) {
                        var a = e.dateSelected, r = e.first, i = e.sibling, o = e.minDate, s = e.maxDate, l = g(t), d = n ? "Min" : "Max";
                        function c() {
                            return "original" + d + "Date";
                        }
                        function h() {
                            return d.toLowerCase() + "Date";
                        }
                        function f() {
                            return "set" + d;
                        }
                        function v() {
                            throw new Error("Out-of-range date passed to " + f());
                        }
                        if (null == t) e[c()] = void 0, i ? (i[c()] = void 0, n ? (r && !a || !r && !i.dateSelected) && (e.minDate = void 0, 
                        i.minDate = void 0) : (r && !i.dateSelected || !r && !a) && (e.maxDate = void 0, 
                        i.maxDate = void 0)) : e[h()] = void 0; else {
                            if (!b(t)) throw new Error("Invalid date passed to " + f());
                            i ? ((r && n && l > (a || s) || r && !n && l < (i.dateSelected || o) || !r && n && l > (i.dateSelected || s) || !r && !n && l < (a || o)) && v(), 
                            e[c()] = l, i[c()] = l, (n && (r && !a || !r && !i.dateSelected) || !n && (r && !i.dateSelected || !r && !a)) && (e[h()] = l, 
                            i[h()] = l)) : ((n && l > (a || s) || !n && l < (a || o)) && v(), e[h()] = l);
                        }
                        return i && u(i), u(e), e;
                    }
                    function A() {
                        var e = this.first ? this : this.sibling, t = e.sibling;
                        return {
                            start: e.dateSelected,
                            end: t.dateSelected
                        };
                    }
                    function R() {
                        var e = this.shadowDom, t = this.positionedEl, n = this.calendarContainer, r = this.sibling, i = this;
                        this.inlinePosition && (a.some((function(e) {
                            return e !== i && e.positionedEl === t;
                        })) || t.style.setProperty("position", null));
                        n.remove(), a = a.filter((function(e) {
                            return e !== i;
                        })), r && delete r.sibling, a.length || j(document, L);
                        var o = a.some((function(t) {
                            return t.shadowDom === e;
                        }));
                        for (var s in e && !o && j(e, Y), this) delete this[s];
                        a.length || l.forEach((function(e) {
                            document.removeEventListener(e, L);
                        }));
                    }
                    function F(e, t) {
                        var n = new Date(e);
                        if (!b(n)) throw new Error("Invalid date passed to `navigate`");
                        this.currentYear = n.getFullYear(), this.currentMonth = n.getMonth(), u(this), t && this.onMonthChange(this);
                    }
                    function B() {
                        var e = !this.calendarContainer.classList.contains("qs-hidden"), t = !this.calendarContainer.querySelector(".qs-overlay").classList.contains("qs-hidden");
                        e && M(t, this);
                    }
                    t.default = function(e, t) {
                        var n = function(e, t) {
                            var n, l, d = function(e) {
                                var t = c(e);
                                t.events && (t.events = t.events.reduce((function(e, t) {
                                    if (!b(t)) throw new Error('"options.events" must only contain valid JavaScript Date objects.');
                                    return e[+g(t)] = !0, e;
                                }), {}));
                                [ "startDate", "dateSelected", "minDate", "maxDate" ].forEach((function(e) {
                                    var n = t[e];
                                    if (n && !b(n)) throw new Error('"options.' + e + '" needs to be a valid JavaScript Date object.');
                                    t[e] = g(n);
                                }));
                                var n = t.position, i = t.maxDate, l = t.minDate, d = t.dateSelected, u = t.overlayPlaceholder, h = t.overlayButton, f = t.startDay, v = t.id;
                                if (t.startDate = g(t.startDate || d || new Date), t.disabledDates = (t.disabledDates || []).reduce((function(e, t) {
                                    var n = +g(t);
                                    if (!b(t)) throw new Error('You supplied an invalid date to "options.disabledDates".');
                                    if (n === +g(d)) throw new Error('"disabledDates" cannot contain the same date as "dateSelected".');
                                    return e[n] = 1, e;
                                }), {}), t.hasOwnProperty("id") && null == v) throw new Error("`id` cannot be `null` or `undefined`");
                                if (null != v) {
                                    var m = a.filter((function(e) {
                                        return e.id === v;
                                    }));
                                    if (m.length > 1) throw new Error("Only two datepickers can share an id.");
                                    m.length ? (t.second = !0, t.sibling = m[0]) : t.first = !0;
                                }
                                var y = [ "tr", "tl", "br", "bl", "c" ].some((function(e) {
                                    return n === e;
                                }));
                                if (n && !y) throw new Error('"options.position" must be one of the following: tl, tr, bl, br, or c.');
                                function p(e) {
                                    throw new Error('"dateSelected" in options is ' + (e ? "less" : "greater") + ' than "' + (e || "max") + 'Date".');
                                }
                                if (t.position = function(e) {
                                    var t = e[0], n = e[1], a = {};
                                    a[o[t]] = 1, n && (a[o[n]] = 1);
                                    return a;
                                }(n || "bl"), i < l) throw new Error('"maxDate" in options is less than "minDate".');
                                d && (l > d && p("min"), i < d && p());
                                if ([ "onSelect", "onShow", "onHide", "onMonthChange", "formatter", "disabler" ].forEach((function(e) {
                                    "function" != typeof t[e] && (t[e] = s);
                                })), [ "customDays", "customMonths", "customOverlayMonths" ].forEach((function(e, n) {
                                    var a = t[e], r = n ? 12 : 7;
                                    if (a) {
                                        if (!Array.isArray(a) || a.length !== r || a.some((function(e) {
                                            return "string" != typeof e;
                                        }))) throw new Error('"' + e + '" must be an array with ' + r + " strings.");
                                        t[n ? n < 2 ? "months" : "overlayMonths" : "days"] = a;
                                    }
                                })), f && f > 0 && f < 7) {
                                    var w = (t.customDays || r).slice(), D = w.splice(0, f);
                                    t.customDays = w.concat(D), t.startDay = +f, t.weekendIndices = [ w.length - 1, w.length ];
                                } else t.startDay = 0, t.weekendIndices = [ 6, 0 ];
                                "string" != typeof u && delete t.overlayPlaceholder;
                                "string" != typeof h && delete t.overlayButton;
                                var q = t.defaultView;
                                if (q && "calendar" !== q && "overlay" !== q) throw new Error('options.defaultView must either be "calendar" or "overlay".');
                                return t.defaultView = q || "calendar", t;
                            }(t || {
                                startDate: g(new Date),
                                position: "bl",
                                defaultView: "calendar"
                            }), u = e;
                            if ("string" == typeof u) u = "#" === u[0] ? document.getElementById(u.slice(1)) : document.querySelector(u); else {
                                if ("[object ShadowRoot]" === x(u)) throw new Error("Using a shadow DOM as your selector is not supported.");
                                for (var h, f = u.parentNode; !h; ) {
                                    var v = x(f);
                                    "[object HTMLDocument]" === v ? h = !0 : "[object ShadowRoot]" === v ? (h = !0, 
                                    n = f, l = f.host) : f = f.parentNode;
                                }
                            }
                            if (!u) throw new Error("No selector / element found.");
                            if (a.some((function(e) {
                                return e.el === u;
                            }))) throw new Error("A datepicker already exists on that element.");
                            var m = u === document.body, y = n ? u.parentElement || n : m ? document.body : u.parentElement, w = n ? u.parentElement || l : y, D = document.createElement("div"), q = document.createElement("div");
                            D.className = "qs-datepicker-container qs-hidden", q.className = "qs-datepicker";
                            var M = {
                                shadowDom: n,
                                customElement: l,
                                positionedEl: w,
                                el: u,
                                parent: y,
                                nonInput: "INPUT" !== u.nodeName,
                                noPosition: m,
                                position: !m && d.position,
                                startDate: d.startDate,
                                dateSelected: d.dateSelected,
                                disabledDates: d.disabledDates,
                                minDate: d.minDate,
                                maxDate: d.maxDate,
                                noWeekends: !!d.noWeekends,
                                weekendIndices: d.weekendIndices,
                                calendarContainer: D,
                                calendar: q,
                                currentMonth: (d.startDate || d.dateSelected).getMonth(),
                                currentMonthName: (d.months || i)[(d.startDate || d.dateSelected).getMonth()],
                                currentYear: (d.startDate || d.dateSelected).getFullYear(),
                                events: d.events || {},
                                defaultView: d.defaultView,
                                setDate: k,
                                remove: R,
                                setMin: N,
                                setMax: _,
                                show: O,
                                hide: P,
                                navigate: F,
                                toggleOverlay: B,
                                onSelect: d.onSelect,
                                onShow: d.onShow,
                                onHide: d.onHide,
                                onMonthChange: d.onMonthChange,
                                formatter: d.formatter,
                                disabler: d.disabler,
                                months: d.months || i,
                                days: d.customDays || r,
                                startDay: d.startDay,
                                overlayMonths: d.overlayMonths || (d.months || i).map((function(e) {
                                    return e.slice(0, 3);
                                })),
                                overlayPlaceholder: d.overlayPlaceholder || "4-digit year",
                                overlayButton: d.overlayButton || "Submit",
                                disableYearOverlay: !!d.disableYearOverlay,
                                disableMobile: !!d.disableMobile,
                                isMobile: "ontouchstart" in window,
                                alwaysShow: !!d.alwaysShow,
                                id: d.id,
                                showAllDates: !!d.showAllDates,
                                respectDisabledReadOnly: !!d.respectDisabledReadOnly,
                                first: d.first,
                                second: d.second
                            };
                            if (d.sibling) {
                                var E = d.sibling, C = M, L = E.minDate || C.minDate, Y = E.maxDate || C.maxDate;
                                C.sibling = E, E.sibling = C, E.minDate = L, E.maxDate = Y, C.minDate = L, C.maxDate = Y, 
                                E.originalMinDate = L, E.originalMaxDate = Y, C.originalMinDate = L, C.originalMaxDate = Y, 
                                E.getRange = A, C.getRange = A;
                            }
                            d.dateSelected && p(u, M);
                            var j = getComputedStyle(w).position;
                            m || j && "static" !== j || (M.inlinePosition = !0, w.style.setProperty("position", "relative"));
                            var I = a.filter((function(e) {
                                return e.positionedEl === M.positionedEl;
                            }));
                            I.some((function(e) {
                                return e.inlinePosition;
                            })) && (M.inlinePosition = !0, I.forEach((function(e) {
                                e.inlinePosition = !0;
                            })));
                            D.appendChild(q), y.appendChild(D), M.alwaysShow && S(M);
                            return M;
                        }(e, t);
                        if (a.length || d(document), n.shadowDom && (a.some((function(e) {
                            return e.shadowDom === n.shadowDom;
                        })) || d(n.shadowDom)), a.push(n), n.second) {
                            var l = n.sibling;
                            y({
                                instance: n,
                                deselect: !n.dateSelected
                            }), y({
                                instance: l,
                                deselect: !l.dateSelected
                            }), u(l);
                        }
                        return u(n, n.startDate || n.dateSelected), n.alwaysShow && D(n), n;
                    };
                } ]).default;
            }));
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== void 0) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
        return module.exports;
    }
    (() => {
        "use strict";
        const modules_flsModules = {};
        function isWebp() {
            function testWebP(callback) {
                let webP = new Image;
                webP.onload = webP.onerror = function() {
                    callback(webP.height == 2);
                };
                webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
            }
            testWebP((function(support) {
                let className = support === true ? "webp" : "no-webp";
                document.documentElement.classList.add(className);
            }));
        }
        let _slideUp = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = `${target.offsetHeight}px`;
                target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                window.setTimeout((() => {
                    target.hidden = !showmore ? true : false;
                    !showmore ? target.style.removeProperty("height") : null;
                    target.style.removeProperty("padding-top");
                    target.style.removeProperty("padding-bottom");
                    target.style.removeProperty("margin-top");
                    target.style.removeProperty("margin-bottom");
                    !showmore ? target.style.removeProperty("overflow") : null;
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideUpDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        let _slideDown = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.hidden = target.hidden ? false : null;
                showmore ? target.style.removeProperty("height") : null;
                let height = target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                target.offsetHeight;
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = height + "px";
                target.style.removeProperty("padding-top");
                target.style.removeProperty("padding-bottom");
                target.style.removeProperty("margin-top");
                target.style.removeProperty("margin-bottom");
                window.setTimeout((() => {
                    target.style.removeProperty("height");
                    target.style.removeProperty("overflow");
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideDownDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        let _slideToggle = (target, duration = 500) => {
            if (target.hidden) return _slideDown(target, duration); else return _slideUp(target, duration);
        };
        let bodyLockStatus = true;
        let bodyLockToggle = (delay = 500) => {
            if (document.documentElement.classList.contains("lock")) bodyUnlock(delay); else bodyLock(delay);
        };
        let bodyUnlock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                setTimeout((() => {
                    for (let index = 0; index < lock_padding.length; index++) {
                        const el = lock_padding[index];
                        el.style.paddingRight = "0px";
                    }
                    body.style.paddingRight = "0px";
                    document.documentElement.classList.remove("lock");
                }), delay);
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        let bodyLock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                for (let index = 0; index < lock_padding.length; index++) {
                    const el = lock_padding[index];
                    el.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                }
                body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                document.documentElement.classList.add("lock");
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        function spollers() {
            const spollersArray = document.querySelectorAll("[data-spollers]");
            if (spollersArray.length > 0) {
                const spollersRegular = Array.from(spollersArray).filter((function(item, index, self) {
                    return !item.dataset.spollers.split(",")[0];
                }));
                if (spollersRegular.length) initSpollers(spollersRegular);
                let mdQueriesArray = dataMediaQueries(spollersArray, "spollers");
                if (mdQueriesArray && mdQueriesArray.length) mdQueriesArray.forEach((mdQueriesItem => {
                    mdQueriesItem.matchMedia.addEventListener("change", (function() {
                        initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                    }));
                    initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                }));
                function initSpollers(spollersArray, matchMedia = false) {
                    spollersArray.forEach((spollersBlock => {
                        spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
                        if (matchMedia.matches || !matchMedia) {
                            spollersBlock.classList.add("_spoller-init");
                            initSpollerBody(spollersBlock);
                            spollersBlock.addEventListener("click", setSpollerAction);
                        } else {
                            spollersBlock.classList.remove("_spoller-init");
                            initSpollerBody(spollersBlock, false);
                            spollersBlock.removeEventListener("click", setSpollerAction);
                        }
                    }));
                }
                function initSpollerBody(spollersBlock, hideSpollerBody = true) {
                    let spollerTitles = spollersBlock.querySelectorAll("[data-spoller]");
                    if (spollerTitles.length) {
                        spollerTitles = Array.from(spollerTitles).filter((item => item.closest("[data-spollers]") === spollersBlock));
                        spollerTitles.forEach((spollerTitle => {
                            if (hideSpollerBody) {
                                spollerTitle.removeAttribute("tabindex");
                                if (!spollerTitle.classList.contains("_spoller-active")) spollerTitle.nextElementSibling.hidden = true;
                            } else {
                                spollerTitle.setAttribute("tabindex", "-1");
                                spollerTitle.nextElementSibling.hidden = false;
                            }
                        }));
                    }
                }
                function setSpollerAction(e) {
                    const el = e.target;
                    if (el.closest("[data-spoller]")) {
                        const spollerTitle = el.closest("[data-spoller]");
                        const spollersBlock = spollerTitle.closest("[data-spollers]");
                        const oneSpoller = spollersBlock.hasAttribute("data-one-spoller");
                        const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                        if (!spollersBlock.querySelectorAll("._slide").length) {
                            if (oneSpoller && !spollerTitle.classList.contains("_spoller-active")) hideSpollersBody(spollersBlock);
                            spollerTitle.classList.toggle("_spoller-active");
                            _slideToggle(spollerTitle.nextElementSibling, spollerSpeed);
                        }
                        e.preventDefault();
                    }
                }
                function hideSpollersBody(spollersBlock) {
                    const spollerActiveTitle = spollersBlock.querySelector("[data-spoller]._spoller-active");
                    const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                    if (spollerActiveTitle && !spollersBlock.querySelectorAll("._slide").length) {
                        spollerActiveTitle.classList.remove("_spoller-active");
                        _slideUp(spollerActiveTitle.nextElementSibling, spollerSpeed);
                    }
                }
                const spollersClose = document.querySelectorAll("[data-spoller-close]");
                if (spollersClose.length) document.addEventListener("click", (function(e) {
                    const el = e.target;
                    if (!el.closest("[data-spollers]")) spollersClose.forEach((spollerClose => {
                        const spollersBlock = spollerClose.closest("[data-spollers]");
                        const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                        spollerClose.classList.remove("_spoller-active");
                        _slideUp(spollerClose.nextElementSibling, spollerSpeed);
                    }));
                }));
            }
        }
        function menuInit() {
            if (document.querySelector(".icon-menu")) document.addEventListener("click", (function(e) {
                if (bodyLockStatus && e.target.closest(".icon-menu")) {
                    bodyLockToggle();
                    document.documentElement.classList.toggle("menu-open");
                }
            }));
        }
        function uniqArray(array) {
            return array.filter((function(item, index, self) {
                return self.indexOf(item) === index;
            }));
        }
        function dataMediaQueries(array, dataSetValue) {
            const media = Array.from(array).filter((function(item, index, self) {
                if (item.dataset[dataSetValue]) return item.dataset[dataSetValue].split(",")[0];
            }));
            if (media.length) {
                const breakpointsArray = [];
                media.forEach((item => {
                    const params = item.dataset[dataSetValue];
                    const breakpoint = {};
                    const paramsArray = params.split(",");
                    breakpoint.value = paramsArray[0];
                    breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
                    breakpoint.item = item;
                    breakpointsArray.push(breakpoint);
                }));
                let mdQueries = breakpointsArray.map((function(item) {
                    return "(" + item.type + "-width: " + item.value + "px)," + item.value + "," + item.type;
                }));
                mdQueries = uniqArray(mdQueries);
                const mdQueriesArray = [];
                if (mdQueries.length) {
                    mdQueries.forEach((breakpoint => {
                        const paramsArray = breakpoint.split(",");
                        const mediaBreakpoint = paramsArray[1];
                        const mediaType = paramsArray[2];
                        const matchMedia = window.matchMedia(paramsArray[0]);
                        const itemsArray = breakpointsArray.filter((function(item) {
                            if (item.value === mediaBreakpoint && item.type === mediaType) return true;
                        }));
                        mdQueriesArray.push({
                            itemsArray,
                            matchMedia
                        });
                    }));
                    return mdQueriesArray;
                }
            }
        }
        function formFieldsInit(options = {
            viewPass: false
        }) {
            const formFields = document.querySelectorAll("input[placeholder],textarea[placeholder]");
            if (formFields.length) formFields.forEach((formField => {
                if (!formField.hasAttribute("data-placeholder-nohide")) formField.dataset.placeholder = formField.placeholder;
            }));
            document.body.addEventListener("focusin", (function(e) {
                const targetElement = e.target;
                if (targetElement.tagName === "INPUT" || targetElement.tagName === "TEXTAREA") {
                    if (targetElement.dataset.placeholder) targetElement.placeholder = "";
                    if (!targetElement.hasAttribute("data-no-focus-classes")) {
                        targetElement.classList.add("_form-focus");
                        targetElement.parentElement.classList.add("_form-focus");
                    }
                    formValidate.removeError(targetElement);
                }
            }));
            document.body.addEventListener("focusout", (function(e) {
                const targetElement = e.target;
                if (targetElement.tagName === "INPUT" || targetElement.tagName === "TEXTAREA") {
                    if (targetElement.dataset.placeholder) targetElement.placeholder = targetElement.dataset.placeholder;
                    if (!targetElement.hasAttribute("data-no-focus-classes")) {
                        targetElement.classList.remove("_form-focus");
                        targetElement.parentElement.classList.remove("_form-focus");
                    }
                    if (targetElement.hasAttribute("data-validate")) formValidate.validateInput(targetElement);
                }
            }));
            if (options.viewPass) document.addEventListener("click", (function(e) {
                let targetElement = e.target;
                if (targetElement.closest('[class*="__viewpass"]')) {
                    let inputType = targetElement.classList.contains("_viewpass-active") ? "password" : "text";
                    targetElement.parentElement.querySelector("input").setAttribute("type", inputType);
                    targetElement.classList.toggle("_viewpass-active");
                }
            }));
        }
        let formValidate = {
            getErrors(form) {
                let error = 0;
                let formRequiredItems = form.querySelectorAll("*[data-required]");
                if (formRequiredItems.length) formRequiredItems.forEach((formRequiredItem => {
                    if ((formRequiredItem.offsetParent !== null || formRequiredItem.tagName === "SELECT") && !formRequiredItem.disabled) error += this.validateInput(formRequiredItem);
                }));
                return error;
            },
            validateInput(formRequiredItem) {
                let error = 0;
                if (formRequiredItem.dataset.required === "email") {
                    formRequiredItem.value = formRequiredItem.value.replace(" ", "");
                    if (this.emailTest(formRequiredItem)) {
                        this.addError(formRequiredItem);
                        error++;
                    } else this.removeError(formRequiredItem);
                } else if (formRequiredItem.type === "checkbox" && !formRequiredItem.checked) {
                    this.addError(formRequiredItem);
                    error++;
                } else if (!formRequiredItem.value.trim()) {
                    this.addError(formRequiredItem);
                    error++;
                } else this.removeError(formRequiredItem);
                return error;
            },
            addError(formRequiredItem) {
                formRequiredItem.classList.add("_form-error");
                formRequiredItem.parentElement.classList.add("_form-error");
                let inputError = formRequiredItem.parentElement.querySelector(".form__error");
                if (inputError) formRequiredItem.parentElement.removeChild(inputError);
                if (formRequiredItem.dataset.error) formRequiredItem.parentElement.insertAdjacentHTML("beforeend", `<div class="form__error">${formRequiredItem.dataset.error}</div>`);
            },
            removeError(formRequiredItem) {
                formRequiredItem.classList.remove("_form-error");
                formRequiredItem.parentElement.classList.remove("_form-error");
                if (formRequiredItem.parentElement.querySelector(".form__error")) formRequiredItem.parentElement.removeChild(formRequiredItem.parentElement.querySelector(".form__error"));
            },
            formClean(form) {
                form.reset();
                setTimeout((() => {
                    let inputs = form.querySelectorAll("input,textarea");
                    for (let index = 0; index < inputs.length; index++) {
                        const el = inputs[index];
                        el.parentElement.classList.remove("_form-focus");
                        el.classList.remove("_form-focus");
                        formValidate.removeError(el);
                    }
                    let checkboxes = form.querySelectorAll(".checkbox__input");
                    if (checkboxes.length > 0) for (let index = 0; index < checkboxes.length; index++) {
                        const checkbox = checkboxes[index];
                        checkbox.checked = false;
                    }
                    if (modules_flsModules.select) {
                        let selects = form.querySelectorAll(".select");
                        if (selects.length) for (let index = 0; index < selects.length; index++) {
                            const select = selects[index].querySelector("select");
                            modules_flsModules.select.selectBuild(select);
                        }
                    }
                }), 0);
            },
            emailTest(formRequiredItem) {
                return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(formRequiredItem.value);
            }
        };
        function ssr_window_esm_isObject(obj) {
            return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
        }
        function extend(target, src) {
            if (target === void 0) target = {};
            if (src === void 0) src = {};
            Object.keys(src).forEach((key => {
                if (typeof target[key] === "undefined") target[key] = src[key]; else if (ssr_window_esm_isObject(src[key]) && ssr_window_esm_isObject(target[key]) && Object.keys(src[key]).length > 0) extend(target[key], src[key]);
            }));
        }
        const ssrDocument = {
            body: {},
            addEventListener() {},
            removeEventListener() {},
            activeElement: {
                blur() {},
                nodeName: ""
            },
            querySelector() {
                return null;
            },
            querySelectorAll() {
                return [];
            },
            getElementById() {
                return null;
            },
            createEvent() {
                return {
                    initEvent() {}
                };
            },
            createElement() {
                return {
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute() {},
                    getElementsByTagName() {
                        return [];
                    }
                };
            },
            createElementNS() {
                return {};
            },
            importNode() {
                return null;
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            }
        };
        function ssr_window_esm_getDocument() {
            const doc = typeof document !== "undefined" ? document : {};
            extend(doc, ssrDocument);
            return doc;
        }
        const ssrWindow = {
            document: ssrDocument,
            navigator: {
                userAgent: ""
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            },
            history: {
                replaceState() {},
                pushState() {},
                go() {},
                back() {}
            },
            CustomEvent: function CustomEvent() {
                return this;
            },
            addEventListener() {},
            removeEventListener() {},
            getComputedStyle() {
                return {
                    getPropertyValue() {
                        return "";
                    }
                };
            },
            Image() {},
            Date() {},
            screen: {},
            setTimeout() {},
            clearTimeout() {},
            matchMedia() {
                return {};
            },
            requestAnimationFrame(callback) {
                if (typeof setTimeout === "undefined") {
                    callback();
                    return null;
                }
                return setTimeout(callback, 0);
            },
            cancelAnimationFrame(id) {
                if (typeof setTimeout === "undefined") return;
                clearTimeout(id);
            }
        };
        function ssr_window_esm_getWindow() {
            const win = typeof window !== "undefined" ? window : {};
            extend(win, ssrWindow);
            return win;
        }
        function utils_classesToTokens(classes) {
            if (classes === void 0) classes = "";
            return classes.trim().split(" ").filter((c => !!c.trim()));
        }
        function deleteProps(obj) {
            const object = obj;
            Object.keys(object).forEach((key => {
                try {
                    object[key] = null;
                } catch (e) {}
                try {
                    delete object[key];
                } catch (e) {}
            }));
        }
        function utils_nextTick(callback, delay) {
            if (delay === void 0) delay = 0;
            return setTimeout(callback, delay);
        }
        function utils_now() {
            return Date.now();
        }
        function utils_getComputedStyle(el) {
            const window = ssr_window_esm_getWindow();
            let style;
            if (window.getComputedStyle) style = window.getComputedStyle(el, null);
            if (!style && el.currentStyle) style = el.currentStyle;
            if (!style) style = el.style;
            return style;
        }
        function utils_getTranslate(el, axis) {
            if (axis === void 0) axis = "x";
            const window = ssr_window_esm_getWindow();
            let matrix;
            let curTransform;
            let transformMatrix;
            const curStyle = utils_getComputedStyle(el);
            if (window.WebKitCSSMatrix) {
                curTransform = curStyle.transform || curStyle.webkitTransform;
                if (curTransform.split(",").length > 6) curTransform = curTransform.split(", ").map((a => a.replace(",", "."))).join(", ");
                transformMatrix = new window.WebKitCSSMatrix(curTransform === "none" ? "" : curTransform);
            } else {
                transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
                matrix = transformMatrix.toString().split(",");
            }
            if (axis === "x") if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); else curTransform = parseFloat(matrix[4]);
            if (axis === "y") if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); else curTransform = parseFloat(matrix[5]);
            return curTransform || 0;
        }
        function utils_isObject(o) {
            return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object";
        }
        function isNode(node) {
            if (typeof window !== "undefined" && typeof window.HTMLElement !== "undefined") return node instanceof HTMLElement;
            return node && (node.nodeType === 1 || node.nodeType === 11);
        }
        function utils_extend() {
            const to = Object(arguments.length <= 0 ? void 0 : arguments[0]);
            const noExtend = [ "__proto__", "constructor", "prototype" ];
            for (let i = 1; i < arguments.length; i += 1) {
                const nextSource = i < 0 || arguments.length <= i ? void 0 : arguments[i];
                if (nextSource !== void 0 && nextSource !== null && !isNode(nextSource)) {
                    const keysArray = Object.keys(Object(nextSource)).filter((key => noExtend.indexOf(key) < 0));
                    for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
                        const nextKey = keysArray[nextIndex];
                        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                        if (desc !== void 0 && desc.enumerable) if (utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]); else if (!utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) {
                            to[nextKey] = {};
                            if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]);
                        } else to[nextKey] = nextSource[nextKey];
                    }
                }
            }
            return to;
        }
        function utils_setCSSProperty(el, varName, varValue) {
            el.style.setProperty(varName, varValue);
        }
        function animateCSSModeScroll(_ref) {
            let {swiper, targetPosition, side} = _ref;
            const window = ssr_window_esm_getWindow();
            const startPosition = -swiper.translate;
            let startTime = null;
            let time;
            const duration = swiper.params.speed;
            swiper.wrapperEl.style.scrollSnapType = "none";
            window.cancelAnimationFrame(swiper.cssModeFrameID);
            const dir = targetPosition > startPosition ? "next" : "prev";
            const isOutOfBound = (current, target) => dir === "next" && current >= target || dir === "prev" && current <= target;
            const animate = () => {
                time = (new Date).getTime();
                if (startTime === null) startTime = time;
                const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
                const easeProgress = .5 - Math.cos(progress * Math.PI) / 2;
                let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
                if (isOutOfBound(currentPosition, targetPosition)) currentPosition = targetPosition;
                swiper.wrapperEl.scrollTo({
                    [side]: currentPosition
                });
                if (isOutOfBound(currentPosition, targetPosition)) {
                    swiper.wrapperEl.style.overflow = "hidden";
                    swiper.wrapperEl.style.scrollSnapType = "";
                    setTimeout((() => {
                        swiper.wrapperEl.style.overflow = "";
                        swiper.wrapperEl.scrollTo({
                            [side]: currentPosition
                        });
                    }));
                    window.cancelAnimationFrame(swiper.cssModeFrameID);
                    return;
                }
                swiper.cssModeFrameID = window.requestAnimationFrame(animate);
            };
            animate();
        }
        function utils_elementChildren(element, selector) {
            if (selector === void 0) selector = "";
            return [ ...element.children ].filter((el => el.matches(selector)));
        }
        function showWarning(text) {
            try {
                console.warn(text);
                return;
            } catch (err) {}
        }
        function utils_createElement(tag, classes) {
            if (classes === void 0) classes = [];
            const el = document.createElement(tag);
            el.classList.add(...Array.isArray(classes) ? classes : utils_classesToTokens(classes));
            return el;
        }
        function elementPrevAll(el, selector) {
            const prevEls = [];
            while (el.previousElementSibling) {
                const prev = el.previousElementSibling;
                if (selector) {
                    if (prev.matches(selector)) prevEls.push(prev);
                } else prevEls.push(prev);
                el = prev;
            }
            return prevEls;
        }
        function elementNextAll(el, selector) {
            const nextEls = [];
            while (el.nextElementSibling) {
                const next = el.nextElementSibling;
                if (selector) {
                    if (next.matches(selector)) nextEls.push(next);
                } else nextEls.push(next);
                el = next;
            }
            return nextEls;
        }
        function elementStyle(el, prop) {
            const window = ssr_window_esm_getWindow();
            return window.getComputedStyle(el, null).getPropertyValue(prop);
        }
        function utils_elementIndex(el) {
            let child = el;
            let i;
            if (child) {
                i = 0;
                while ((child = child.previousSibling) !== null) if (child.nodeType === 1) i += 1;
                return i;
            }
            return;
        }
        function utils_elementParents(el, selector) {
            const parents = [];
            let parent = el.parentElement;
            while (parent) {
                if (selector) {
                    if (parent.matches(selector)) parents.push(parent);
                } else parents.push(parent);
                parent = parent.parentElement;
            }
            return parents;
        }
        function elementOuterSize(el, size, includeMargins) {
            const window = ssr_window_esm_getWindow();
            if (includeMargins) return el[size === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-right" : "margin-top")) + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-left" : "margin-bottom"));
            return el.offsetWidth;
        }
        let support;
        function calcSupport() {
            const window = ssr_window_esm_getWindow();
            const document = ssr_window_esm_getDocument();
            return {
                smoothScroll: document.documentElement && document.documentElement.style && "scrollBehavior" in document.documentElement.style,
                touch: !!("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch)
            };
        }
        function getSupport() {
            if (!support) support = calcSupport();
            return support;
        }
        let deviceCached;
        function calcDevice(_temp) {
            let {userAgent} = _temp === void 0 ? {} : _temp;
            const support = getSupport();
            const window = ssr_window_esm_getWindow();
            const platform = window.navigator.platform;
            const ua = userAgent || window.navigator.userAgent;
            const device = {
                ios: false,
                android: false
            };
            const screenWidth = window.screen.width;
            const screenHeight = window.screen.height;
            const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
            let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
            const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
            const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            const windows = platform === "Win32";
            let macos = platform === "MacIntel";
            const iPadScreens = [ "1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810" ];
            if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
                ipad = ua.match(/(Version)\/([\d.]+)/);
                if (!ipad) ipad = [ 0, 1, "13_0_0" ];
                macos = false;
            }
            if (android && !windows) {
                device.os = "android";
                device.android = true;
            }
            if (ipad || iphone || ipod) {
                device.os = "ios";
                device.ios = true;
            }
            return device;
        }
        function getDevice(overrides) {
            if (overrides === void 0) overrides = {};
            if (!deviceCached) deviceCached = calcDevice(overrides);
            return deviceCached;
        }
        let browser;
        function calcBrowser() {
            const window = ssr_window_esm_getWindow();
            let needPerspectiveFix = false;
            function isSafari() {
                const ua = window.navigator.userAgent.toLowerCase();
                return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
            }
            if (isSafari()) {
                const ua = String(window.navigator.userAgent);
                if (ua.includes("Version/")) {
                    const [major, minor] = ua.split("Version/")[1].split(" ")[0].split(".").map((num => Number(num)));
                    needPerspectiveFix = major < 16 || major === 16 && minor < 2;
                }
            }
            return {
                isSafari: needPerspectiveFix || isSafari(),
                needPerspectiveFix,
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
            };
        }
        function getBrowser() {
            if (!browser) browser = calcBrowser();
            return browser;
        }
        function Resize(_ref) {
            let {swiper, on, emit} = _ref;
            const window = ssr_window_esm_getWindow();
            let observer = null;
            let animationFrame = null;
            const resizeHandler = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit("beforeResize");
                emit("resize");
            };
            const createObserver = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                observer = new ResizeObserver((entries => {
                    animationFrame = window.requestAnimationFrame((() => {
                        const {width, height} = swiper;
                        let newWidth = width;
                        let newHeight = height;
                        entries.forEach((_ref2 => {
                            let {contentBoxSize, contentRect, target} = _ref2;
                            if (target && target !== swiper.el) return;
                            newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
                            newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
                        }));
                        if (newWidth !== width || newHeight !== height) resizeHandler();
                    }));
                }));
                observer.observe(swiper.el);
            };
            const removeObserver = () => {
                if (animationFrame) window.cancelAnimationFrame(animationFrame);
                if (observer && observer.unobserve && swiper.el) {
                    observer.unobserve(swiper.el);
                    observer = null;
                }
            };
            const orientationChangeHandler = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit("orientationchange");
            };
            on("init", (() => {
                if (swiper.params.resizeObserver && typeof window.ResizeObserver !== "undefined") {
                    createObserver();
                    return;
                }
                window.addEventListener("resize", resizeHandler);
                window.addEventListener("orientationchange", orientationChangeHandler);
            }));
            on("destroy", (() => {
                removeObserver();
                window.removeEventListener("resize", resizeHandler);
                window.removeEventListener("orientationchange", orientationChangeHandler);
            }));
        }
        function Observer(_ref) {
            let {swiper, extendParams, on, emit} = _ref;
            const observers = [];
            const window = ssr_window_esm_getWindow();
            const attach = function(target, options) {
                if (options === void 0) options = {};
                const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
                const observer = new ObserverFunc((mutations => {
                    if (swiper.__preventObserver__) return;
                    if (mutations.length === 1) {
                        emit("observerUpdate", mutations[0]);
                        return;
                    }
                    const observerUpdate = function observerUpdate() {
                        emit("observerUpdate", mutations[0]);
                    };
                    if (window.requestAnimationFrame) window.requestAnimationFrame(observerUpdate); else window.setTimeout(observerUpdate, 0);
                }));
                observer.observe(target, {
                    attributes: typeof options.attributes === "undefined" ? true : options.attributes,
                    childList: typeof options.childList === "undefined" ? true : options.childList,
                    characterData: typeof options.characterData === "undefined" ? true : options.characterData
                });
                observers.push(observer);
            };
            const init = () => {
                if (!swiper.params.observer) return;
                if (swiper.params.observeParents) {
                    const containerParents = utils_elementParents(swiper.hostEl);
                    for (let i = 0; i < containerParents.length; i += 1) attach(containerParents[i]);
                }
                attach(swiper.hostEl, {
                    childList: swiper.params.observeSlideChildren
                });
                attach(swiper.wrapperEl, {
                    attributes: false
                });
            };
            const destroy = () => {
                observers.forEach((observer => {
                    observer.disconnect();
                }));
                observers.splice(0, observers.length);
            };
            extendParams({
                observer: false,
                observeParents: false,
                observeSlideChildren: false
            });
            on("init", init);
            on("destroy", destroy);
        }
        var eventsEmitter = {
            on(events, handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (typeof handler !== "function") return self;
                const method = priority ? "unshift" : "push";
                events.split(" ").forEach((event => {
                    if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
                    self.eventsListeners[event][method](handler);
                }));
                return self;
            },
            once(events, handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (typeof handler !== "function") return self;
                function onceHandler() {
                    self.off(events, onceHandler);
                    if (onceHandler.__emitterProxy) delete onceHandler.__emitterProxy;
                    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                    handler.apply(self, args);
                }
                onceHandler.__emitterProxy = handler;
                return self.on(events, onceHandler, priority);
            },
            onAny(handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (typeof handler !== "function") return self;
                const method = priority ? "unshift" : "push";
                if (self.eventsAnyListeners.indexOf(handler) < 0) self.eventsAnyListeners[method](handler);
                return self;
            },
            offAny(handler) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsAnyListeners) return self;
                const index = self.eventsAnyListeners.indexOf(handler);
                if (index >= 0) self.eventsAnyListeners.splice(index, 1);
                return self;
            },
            off(events, handler) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsListeners) return self;
                events.split(" ").forEach((event => {
                    if (typeof handler === "undefined") self.eventsListeners[event] = []; else if (self.eventsListeners[event]) self.eventsListeners[event].forEach(((eventHandler, index) => {
                        if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) self.eventsListeners[event].splice(index, 1);
                    }));
                }));
                return self;
            },
            emit() {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsListeners) return self;
                let events;
                let data;
                let context;
                for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
                if (typeof args[0] === "string" || Array.isArray(args[0])) {
                    events = args[0];
                    data = args.slice(1, args.length);
                    context = self;
                } else {
                    events = args[0].events;
                    data = args[0].data;
                    context = args[0].context || self;
                }
                data.unshift(context);
                const eventsArray = Array.isArray(events) ? events : events.split(" ");
                eventsArray.forEach((event => {
                    if (self.eventsAnyListeners && self.eventsAnyListeners.length) self.eventsAnyListeners.forEach((eventHandler => {
                        eventHandler.apply(context, [ event, ...data ]);
                    }));
                    if (self.eventsListeners && self.eventsListeners[event]) self.eventsListeners[event].forEach((eventHandler => {
                        eventHandler.apply(context, data);
                    }));
                }));
                return self;
            }
        };
        function updateSize() {
            const swiper = this;
            let width;
            let height;
            const el = swiper.el;
            if (typeof swiper.params.width !== "undefined" && swiper.params.width !== null) width = swiper.params.width; else width = el.clientWidth;
            if (typeof swiper.params.height !== "undefined" && swiper.params.height !== null) height = swiper.params.height; else height = el.clientHeight;
            if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) return;
            width = width - parseInt(elementStyle(el, "padding-left") || 0, 10) - parseInt(elementStyle(el, "padding-right") || 0, 10);
            height = height - parseInt(elementStyle(el, "padding-top") || 0, 10) - parseInt(elementStyle(el, "padding-bottom") || 0, 10);
            if (Number.isNaN(width)) width = 0;
            if (Number.isNaN(height)) height = 0;
            Object.assign(swiper, {
                width,
                height,
                size: swiper.isHorizontal() ? width : height
            });
        }
        function updateSlides() {
            const swiper = this;
            function getDirectionPropertyValue(node, label) {
                return parseFloat(node.getPropertyValue(swiper.getDirectionLabel(label)) || 0);
            }
            const params = swiper.params;
            const {wrapperEl, slidesEl, size: swiperSize, rtlTranslate: rtl, wrongRTL} = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
            const slides = utils_elementChildren(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
            const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
            let snapGrid = [];
            const slidesGrid = [];
            const slidesSizesGrid = [];
            let offsetBefore = params.slidesOffsetBefore;
            if (typeof offsetBefore === "function") offsetBefore = params.slidesOffsetBefore.call(swiper);
            let offsetAfter = params.slidesOffsetAfter;
            if (typeof offsetAfter === "function") offsetAfter = params.slidesOffsetAfter.call(swiper);
            const previousSnapGridLength = swiper.snapGrid.length;
            const previousSlidesGridLength = swiper.slidesGrid.length;
            let spaceBetween = params.spaceBetween;
            let slidePosition = -offsetBefore;
            let prevSlideSize = 0;
            let index = 0;
            if (typeof swiperSize === "undefined") return;
            if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize; else if (typeof spaceBetween === "string") spaceBetween = parseFloat(spaceBetween);
            swiper.virtualSize = -spaceBetween;
            slides.forEach((slideEl => {
                if (rtl) slideEl.style.marginLeft = ""; else slideEl.style.marginRight = "";
                slideEl.style.marginBottom = "";
                slideEl.style.marginTop = "";
            }));
            if (params.centeredSlides && params.cssMode) {
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-before", "");
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-after", "");
            }
            const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
            if (gridEnabled) swiper.grid.initSlides(slides); else if (swiper.grid) swiper.grid.unsetSlides();
            let slideSize;
            const shouldResetSlideSize = params.slidesPerView === "auto" && params.breakpoints && Object.keys(params.breakpoints).filter((key => typeof params.breakpoints[key].slidesPerView !== "undefined")).length > 0;
            for (let i = 0; i < slidesLength; i += 1) {
                slideSize = 0;
                let slide;
                if (slides[i]) slide = slides[i];
                if (gridEnabled) swiper.grid.updateSlide(i, slide, slides);
                if (slides[i] && elementStyle(slide, "display") === "none") continue;
                if (params.slidesPerView === "auto") {
                    if (shouldResetSlideSize) slides[i].style[swiper.getDirectionLabel("width")] = ``;
                    const slideStyles = getComputedStyle(slide);
                    const currentTransform = slide.style.transform;
                    const currentWebKitTransform = slide.style.webkitTransform;
                    if (currentTransform) slide.style.transform = "none";
                    if (currentWebKitTransform) slide.style.webkitTransform = "none";
                    if (params.roundLengths) slideSize = swiper.isHorizontal() ? elementOuterSize(slide, "width", true) : elementOuterSize(slide, "height", true); else {
                        const width = getDirectionPropertyValue(slideStyles, "width");
                        const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
                        const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
                        const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
                        const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
                        const boxSizing = slideStyles.getPropertyValue("box-sizing");
                        if (boxSizing && boxSizing === "border-box") slideSize = width + marginLeft + marginRight; else {
                            const {clientWidth, offsetWidth} = slide;
                            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
                        }
                    }
                    if (currentTransform) slide.style.transform = currentTransform;
                    if (currentWebKitTransform) slide.style.webkitTransform = currentWebKitTransform;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                } else {
                    slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                    if (slides[i]) slides[i].style[swiper.getDirectionLabel("width")] = `${slideSize}px`;
                }
                if (slides[i]) slides[i].swiperSlideSize = slideSize;
                slidesSizesGrid.push(slideSize);
                if (params.centeredSlides) {
                    slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
                    if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (Math.abs(slidePosition) < 1 / 1e3) slidePosition = 0;
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                } else {
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                    slidePosition = slidePosition + slideSize + spaceBetween;
                }
                swiper.virtualSize += slideSize + spaceBetween;
                prevSlideSize = slideSize;
                index += 1;
            }
            swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
            if (rtl && wrongRTL && (params.effect === "slide" || params.effect === "coverflow")) wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;
            if (params.setWrapperSize) wrapperEl.style[swiper.getDirectionLabel("width")] = `${swiper.virtualSize + spaceBetween}px`;
            if (gridEnabled) swiper.grid.updateWrapperSize(slideSize, snapGrid);
            if (!params.centeredSlides) {
                const newSlidesGrid = [];
                for (let i = 0; i < snapGrid.length; i += 1) {
                    let slidesGridItem = snapGrid[i];
                    if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
                    if (snapGrid[i] <= swiper.virtualSize - swiperSize) newSlidesGrid.push(slidesGridItem);
                }
                snapGrid = newSlidesGrid;
                if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) snapGrid.push(swiper.virtualSize - swiperSize);
            }
            if (isVirtual && params.loop) {
                const size = slidesSizesGrid[0] + spaceBetween;
                if (params.slidesPerGroup > 1) {
                    const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
                    const groupSize = size * params.slidesPerGroup;
                    for (let i = 0; i < groups; i += 1) snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
                }
                for (let i = 0; i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i += 1) {
                    if (params.slidesPerGroup === 1) snapGrid.push(snapGrid[snapGrid.length - 1] + size);
                    slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
                    swiper.virtualSize += size;
                }
            }
            if (snapGrid.length === 0) snapGrid = [ 0 ];
            if (spaceBetween !== 0) {
                const key = swiper.isHorizontal() && rtl ? "marginLeft" : swiper.getDirectionLabel("marginRight");
                slides.filter(((_, slideIndex) => {
                    if (!params.cssMode || params.loop) return true;
                    if (slideIndex === slides.length - 1) return false;
                    return true;
                })).forEach((slideEl => {
                    slideEl.style[key] = `${spaceBetween}px`;
                }));
            }
            if (params.centeredSlides && params.centeredSlidesBounds) {
                let allSlidesSize = 0;
                slidesSizesGrid.forEach((slideSizeValue => {
                    allSlidesSize += slideSizeValue + (spaceBetween || 0);
                }));
                allSlidesSize -= spaceBetween;
                const maxSnap = allSlidesSize - swiperSize;
                snapGrid = snapGrid.map((snap => {
                    if (snap <= 0) return -offsetBefore;
                    if (snap > maxSnap) return maxSnap + offsetAfter;
                    return snap;
                }));
            }
            if (params.centerInsufficientSlides) {
                let allSlidesSize = 0;
                slidesSizesGrid.forEach((slideSizeValue => {
                    allSlidesSize += slideSizeValue + (spaceBetween || 0);
                }));
                allSlidesSize -= spaceBetween;
                if (allSlidesSize < swiperSize) {
                    const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
                    snapGrid.forEach(((snap, snapIndex) => {
                        snapGrid[snapIndex] = snap - allSlidesOffset;
                    }));
                    slidesGrid.forEach(((snap, snapIndex) => {
                        slidesGrid[snapIndex] = snap + allSlidesOffset;
                    }));
                }
            }
            Object.assign(swiper, {
                slides,
                snapGrid,
                slidesGrid,
                slidesSizesGrid
            });
            if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
                const addToSnapGrid = -swiper.snapGrid[0];
                const addToSlidesGrid = -swiper.slidesGrid[0];
                swiper.snapGrid = swiper.snapGrid.map((v => v + addToSnapGrid));
                swiper.slidesGrid = swiper.slidesGrid.map((v => v + addToSlidesGrid));
            }
            if (slidesLength !== previousSlidesLength) swiper.emit("slidesLengthChange");
            if (snapGrid.length !== previousSnapGridLength) {
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                swiper.emit("snapGridLengthChange");
            }
            if (slidesGrid.length !== previousSlidesGridLength) swiper.emit("slidesGridLengthChange");
            if (params.watchSlidesProgress) swiper.updateSlidesOffset();
            swiper.emit("slidesUpdated");
            if (!isVirtual && !params.cssMode && (params.effect === "slide" || params.effect === "fade")) {
                const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
                const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
                if (slidesLength <= params.maxBackfaceHiddenSlides) {
                    if (!hasClassBackfaceClassAdded) swiper.el.classList.add(backFaceHiddenClass);
                } else if (hasClassBackfaceClassAdded) swiper.el.classList.remove(backFaceHiddenClass);
            }
        }
        function updateAutoHeight(speed) {
            const swiper = this;
            const activeSlides = [];
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            let newHeight = 0;
            let i;
            if (typeof speed === "number") swiper.setTransition(speed); else if (speed === true) swiper.setTransition(swiper.params.speed);
            const getSlideByIndex = index => {
                if (isVirtual) return swiper.slides[swiper.getSlideIndexByData(index)];
                return swiper.slides[index];
            };
            if (swiper.params.slidesPerView !== "auto" && swiper.params.slidesPerView > 1) if (swiper.params.centeredSlides) (swiper.visibleSlides || []).forEach((slide => {
                activeSlides.push(slide);
            })); else for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
                const index = swiper.activeIndex + i;
                if (index > swiper.slides.length && !isVirtual) break;
                activeSlides.push(getSlideByIndex(index));
            } else activeSlides.push(getSlideByIndex(swiper.activeIndex));
            for (i = 0; i < activeSlides.length; i += 1) if (typeof activeSlides[i] !== "undefined") {
                const height = activeSlides[i].offsetHeight;
                newHeight = height > newHeight ? height : newHeight;
            }
            if (newHeight || newHeight === 0) swiper.wrapperEl.style.height = `${newHeight}px`;
        }
        function updateSlidesOffset() {
            const swiper = this;
            const slides = swiper.slides;
            const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
            for (let i = 0; i < slides.length; i += 1) slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
        }
        function updateSlidesProgress(translate) {
            if (translate === void 0) translate = this && this.translate || 0;
            const swiper = this;
            const params = swiper.params;
            const {slides, rtlTranslate: rtl, snapGrid} = swiper;
            if (slides.length === 0) return;
            if (typeof slides[0].swiperSlideOffset === "undefined") swiper.updateSlidesOffset();
            let offsetCenter = -translate;
            if (rtl) offsetCenter = translate;
            slides.forEach((slideEl => {
                slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass);
            }));
            swiper.visibleSlidesIndexes = [];
            swiper.visibleSlides = [];
            let spaceBetween = params.spaceBetween;
            if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiper.size; else if (typeof spaceBetween === "string") spaceBetween = parseFloat(spaceBetween);
            for (let i = 0; i < slides.length; i += 1) {
                const slide = slides[i];
                let slideOffset = slide.swiperSlideOffset;
                if (params.cssMode && params.centeredSlides) slideOffset -= slides[0].swiperSlideOffset;
                const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
                const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
                const slideBefore = -(offsetCenter - slideOffset);
                const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
                const isFullyVisible = slideBefore >= 0 && slideBefore <= swiper.size - swiper.slidesSizesGrid[i];
                const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
                if (isVisible) {
                    swiper.visibleSlides.push(slide);
                    swiper.visibleSlidesIndexes.push(i);
                    slides[i].classList.add(params.slideVisibleClass);
                }
                if (isFullyVisible) slides[i].classList.add(params.slideFullyVisibleClass);
                slide.progress = rtl ? -slideProgress : slideProgress;
                slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
            }
        }
        function updateProgress(translate) {
            const swiper = this;
            if (typeof translate === "undefined") {
                const multiplier = swiper.rtlTranslate ? -1 : 1;
                translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
            }
            const params = swiper.params;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            let {progress, isBeginning, isEnd, progressLoop} = swiper;
            const wasBeginning = isBeginning;
            const wasEnd = isEnd;
            if (translatesDiff === 0) {
                progress = 0;
                isBeginning = true;
                isEnd = true;
            } else {
                progress = (translate - swiper.minTranslate()) / translatesDiff;
                const isBeginningRounded = Math.abs(translate - swiper.minTranslate()) < 1;
                const isEndRounded = Math.abs(translate - swiper.maxTranslate()) < 1;
                isBeginning = isBeginningRounded || progress <= 0;
                isEnd = isEndRounded || progress >= 1;
                if (isBeginningRounded) progress = 0;
                if (isEndRounded) progress = 1;
            }
            if (params.loop) {
                const firstSlideIndex = swiper.getSlideIndexByData(0);
                const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
                const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
                const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
                const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
                const translateAbs = Math.abs(translate);
                if (translateAbs >= firstSlideTranslate) progressLoop = (translateAbs - firstSlideTranslate) / translateMax; else progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
                if (progressLoop > 1) progressLoop -= 1;
            }
            Object.assign(swiper, {
                progress,
                progressLoop,
                isBeginning,
                isEnd
            });
            if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
            if (isBeginning && !wasBeginning) swiper.emit("reachBeginning toEdge");
            if (isEnd && !wasEnd) swiper.emit("reachEnd toEdge");
            if (wasBeginning && !isBeginning || wasEnd && !isEnd) swiper.emit("fromEdge");
            swiper.emit("progress", progress);
        }
        function updateSlidesClasses() {
            const swiper = this;
            const {slides, params, slidesEl, activeIndex} = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
            const getFilteredSlide = selector => utils_elementChildren(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
            slides.forEach((slideEl => {
                slideEl.classList.remove(params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
            }));
            let activeSlide;
            let prevSlide;
            let nextSlide;
            if (isVirtual) if (params.loop) {
                let slideIndex = activeIndex - swiper.virtual.slidesBefore;
                if (slideIndex < 0) slideIndex = swiper.virtual.slides.length + slideIndex;
                if (slideIndex >= swiper.virtual.slides.length) slideIndex -= swiper.virtual.slides.length;
                activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
            } else activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`); else if (gridEnabled) {
                activeSlide = slides.filter((slideEl => slideEl.column === activeIndex))[0];
                nextSlide = slides.filter((slideEl => slideEl.column === activeIndex + 1))[0];
                prevSlide = slides.filter((slideEl => slideEl.column === activeIndex - 1))[0];
            } else activeSlide = slides[activeIndex];
            if (activeSlide) {
                activeSlide.classList.add(params.slideActiveClass);
                if (gridEnabled) {
                    if (nextSlide) nextSlide.classList.add(params.slideNextClass);
                    if (prevSlide) prevSlide.classList.add(params.slidePrevClass);
                } else {
                    nextSlide = elementNextAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
                    if (params.loop && !nextSlide) nextSlide = slides[0];
                    if (nextSlide) nextSlide.classList.add(params.slideNextClass);
                    prevSlide = elementPrevAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
                    if (params.loop && !prevSlide === 0) prevSlide = slides[slides.length - 1];
                    if (prevSlide) prevSlide.classList.add(params.slidePrevClass);
                }
            }
            swiper.emitSlidesClasses();
        }
        const processLazyPreloader = (swiper, imageEl) => {
            if (!swiper || swiper.destroyed || !swiper.params) return;
            const slideSelector = () => swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
            const slideEl = imageEl.closest(slideSelector());
            if (slideEl) {
                let lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
                if (!lazyEl && swiper.isElement) if (slideEl.shadowRoot) lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`); else requestAnimationFrame((() => {
                    if (slideEl.shadowRoot) {
                        lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
                        if (lazyEl) lazyEl.remove();
                    }
                }));
                if (lazyEl) lazyEl.remove();
            }
        };
        const unlazy = (swiper, index) => {
            if (!swiper.slides[index]) return;
            const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
            if (imageEl) imageEl.removeAttribute("loading");
        };
        const preload = swiper => {
            if (!swiper || swiper.destroyed || !swiper.params) return;
            let amount = swiper.params.lazyPreloadPrevNext;
            const len = swiper.slides.length;
            if (!len || !amount || amount < 0) return;
            amount = Math.min(amount, len);
            const slidesPerView = swiper.params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
            const activeIndex = swiper.activeIndex;
            if (swiper.params.grid && swiper.params.grid.rows > 1) {
                const activeColumn = activeIndex;
                const preloadColumns = [ activeColumn - amount ];
                preloadColumns.push(...Array.from({
                    length: amount
                }).map(((_, i) => activeColumn + slidesPerView + i)));
                swiper.slides.forEach(((slideEl, i) => {
                    if (preloadColumns.includes(slideEl.column)) unlazy(swiper, i);
                }));
                return;
            }
            const slideIndexLastInView = activeIndex + slidesPerView - 1;
            if (swiper.params.rewind || swiper.params.loop) for (let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1) {
                const realIndex = (i % len + len) % len;
                if (realIndex < activeIndex || realIndex > slideIndexLastInView) unlazy(swiper, realIndex);
            } else for (let i = Math.max(activeIndex - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1) if (i !== activeIndex && (i > slideIndexLastInView || i < activeIndex)) unlazy(swiper, i);
        };
        function getActiveIndexByTranslate(swiper) {
            const {slidesGrid, params} = swiper;
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            let activeIndex;
            for (let i = 0; i < slidesGrid.length; i += 1) if (typeof slidesGrid[i + 1] !== "undefined") {
                if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) activeIndex = i; else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) activeIndex = i + 1;
            } else if (translate >= slidesGrid[i]) activeIndex = i;
            if (params.normalizeSlideIndex) if (activeIndex < 0 || typeof activeIndex === "undefined") activeIndex = 0;
            return activeIndex;
        }
        function updateActiveIndex(newActiveIndex) {
            const swiper = this;
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            const {snapGrid, params, activeIndex: previousIndex, realIndex: previousRealIndex, snapIndex: previousSnapIndex} = swiper;
            let activeIndex = newActiveIndex;
            let snapIndex;
            const getVirtualRealIndex = aIndex => {
                let realIndex = aIndex - swiper.virtual.slidesBefore;
                if (realIndex < 0) realIndex = swiper.virtual.slides.length + realIndex;
                if (realIndex >= swiper.virtual.slides.length) realIndex -= swiper.virtual.slides.length;
                return realIndex;
            };
            if (typeof activeIndex === "undefined") activeIndex = getActiveIndexByTranslate(swiper);
            if (snapGrid.indexOf(translate) >= 0) snapIndex = snapGrid.indexOf(translate); else {
                const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
                snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
            }
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            if (activeIndex === previousIndex && !swiper.params.loop) {
                if (snapIndex !== previousSnapIndex) {
                    swiper.snapIndex = snapIndex;
                    swiper.emit("snapIndexChange");
                }
                return;
            }
            if (activeIndex === previousIndex && swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
                swiper.realIndex = getVirtualRealIndex(activeIndex);
                return;
            }
            const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
            let realIndex;
            if (swiper.virtual && params.virtual.enabled && params.loop) realIndex = getVirtualRealIndex(activeIndex); else if (gridEnabled) {
                const firstSlideInColumn = swiper.slides.filter((slideEl => slideEl.column === activeIndex))[0];
                let activeSlideIndex = parseInt(firstSlideInColumn.getAttribute("data-swiper-slide-index"), 10);
                if (Number.isNaN(activeSlideIndex)) activeSlideIndex = Math.max(swiper.slides.indexOf(firstSlideInColumn), 0);
                realIndex = Math.floor(activeSlideIndex / params.grid.rows);
            } else if (swiper.slides[activeIndex]) {
                const slideIndex = swiper.slides[activeIndex].getAttribute("data-swiper-slide-index");
                if (slideIndex) realIndex = parseInt(slideIndex, 10); else realIndex = activeIndex;
            } else realIndex = activeIndex;
            Object.assign(swiper, {
                previousSnapIndex,
                snapIndex,
                previousRealIndex,
                realIndex,
                previousIndex,
                activeIndex
            });
            if (swiper.initialized) preload(swiper);
            swiper.emit("activeIndexChange");
            swiper.emit("snapIndexChange");
            if (swiper.initialized || swiper.params.runCallbacksOnInit) {
                if (previousRealIndex !== realIndex) swiper.emit("realIndexChange");
                swiper.emit("slideChange");
            }
        }
        function updateClickedSlide(el, path) {
            const swiper = this;
            const params = swiper.params;
            let slide = el.closest(`.${params.slideClass}, swiper-slide`);
            if (!slide && swiper.isElement && path && path.length > 1 && path.includes(el)) [ ...path.slice(path.indexOf(el) + 1, path.length) ].forEach((pathEl => {
                if (!slide && pathEl.matches && pathEl.matches(`.${params.slideClass}, swiper-slide`)) slide = pathEl;
            }));
            let slideFound = false;
            let slideIndex;
            if (slide) for (let i = 0; i < swiper.slides.length; i += 1) if (swiper.slides[i] === slide) {
                slideFound = true;
                slideIndex = i;
                break;
            }
            if (slide && slideFound) {
                swiper.clickedSlide = slide;
                if (swiper.virtual && swiper.params.virtual.enabled) swiper.clickedIndex = parseInt(slide.getAttribute("data-swiper-slide-index"), 10); else swiper.clickedIndex = slideIndex;
            } else {
                swiper.clickedSlide = void 0;
                swiper.clickedIndex = void 0;
                return;
            }
            if (params.slideToClickedSlide && swiper.clickedIndex !== void 0 && swiper.clickedIndex !== swiper.activeIndex) swiper.slideToClickedSlide();
        }
        var update = {
            updateSize,
            updateSlides,
            updateAutoHeight,
            updateSlidesOffset,
            updateSlidesProgress,
            updateProgress,
            updateSlidesClasses,
            updateActiveIndex,
            updateClickedSlide
        };
        function getSwiperTranslate(axis) {
            if (axis === void 0) axis = this.isHorizontal() ? "x" : "y";
            const swiper = this;
            const {params, rtlTranslate: rtl, translate, wrapperEl} = swiper;
            if (params.virtualTranslate) return rtl ? -translate : translate;
            if (params.cssMode) return translate;
            let currentTranslate = utils_getTranslate(wrapperEl, axis);
            currentTranslate += swiper.cssOverflowAdjustment();
            if (rtl) currentTranslate = -currentTranslate;
            return currentTranslate || 0;
        }
        function setTranslate(translate, byController) {
            const swiper = this;
            const {rtlTranslate: rtl, params, wrapperEl, progress} = swiper;
            let x = 0;
            let y = 0;
            const z = 0;
            if (swiper.isHorizontal()) x = rtl ? -translate : translate; else y = translate;
            if (params.roundLengths) {
                x = Math.floor(x);
                y = Math.floor(y);
            }
            swiper.previousTranslate = swiper.translate;
            swiper.translate = swiper.isHorizontal() ? x : y;
            if (params.cssMode) wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y; else if (!params.virtualTranslate) {
                if (swiper.isHorizontal()) x -= swiper.cssOverflowAdjustment(); else y -= swiper.cssOverflowAdjustment();
                wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
            }
            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (translatesDiff === 0) newProgress = 0; else newProgress = (translate - swiper.minTranslate()) / translatesDiff;
            if (newProgress !== progress) swiper.updateProgress(translate);
            swiper.emit("setTranslate", swiper.translate, byController);
        }
        function minTranslate() {
            return -this.snapGrid[0];
        }
        function maxTranslate() {
            return -this.snapGrid[this.snapGrid.length - 1];
        }
        function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
            if (translate === void 0) translate = 0;
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            if (translateBounds === void 0) translateBounds = true;
            const swiper = this;
            const {params, wrapperEl} = swiper;
            if (swiper.animating && params.preventInteractionOnTransition) return false;
            const minTranslate = swiper.minTranslate();
            const maxTranslate = swiper.maxTranslate();
            let newTranslate;
            if (translateBounds && translate > minTranslate) newTranslate = minTranslate; else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate; else newTranslate = translate;
            swiper.updateProgress(newTranslate);
            if (params.cssMode) {
                const isH = swiper.isHorizontal();
                if (speed === 0) wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate; else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: -newTranslate,
                            side: isH ? "left" : "top"
                        });
                        return true;
                    }
                    wrapperEl.scrollTo({
                        [isH ? "left" : "top"]: -newTranslate,
                        behavior: "smooth"
                    });
                }
                return true;
            }
            if (speed === 0) {
                swiper.setTransition(0);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit("beforeTransitionStart", speed, internal);
                    swiper.emit("transitionEnd");
                }
            } else {
                swiper.setTransition(speed);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit("beforeTransitionStart", speed, internal);
                    swiper.emit("transitionStart");
                }
                if (!swiper.animating) {
                    swiper.animating = true;
                    if (!swiper.onTranslateToWrapperTransitionEnd) swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
                        if (!swiper || swiper.destroyed) return;
                        if (e.target !== this) return;
                        swiper.wrapperEl.removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                        swiper.onTranslateToWrapperTransitionEnd = null;
                        delete swiper.onTranslateToWrapperTransitionEnd;
                        if (runCallbacks) swiper.emit("transitionEnd");
                    };
                    swiper.wrapperEl.addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                }
            }
            return true;
        }
        var translate = {
            getTranslate: getSwiperTranslate,
            setTranslate,
            minTranslate,
            maxTranslate,
            translateTo
        };
        function setTransition(duration, byController) {
            const swiper = this;
            if (!swiper.params.cssMode) {
                swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
                swiper.wrapperEl.style.transitionDelay = duration === 0 ? `0ms` : "";
            }
            swiper.emit("setTransition", duration, byController);
        }
        function transitionEmit(_ref) {
            let {swiper, runCallbacks, direction, step} = _ref;
            const {activeIndex, previousIndex} = swiper;
            let dir = direction;
            if (!dir) if (activeIndex > previousIndex) dir = "next"; else if (activeIndex < previousIndex) dir = "prev"; else dir = "reset";
            swiper.emit(`transition${step}`);
            if (runCallbacks && activeIndex !== previousIndex) {
                if (dir === "reset") {
                    swiper.emit(`slideResetTransition${step}`);
                    return;
                }
                swiper.emit(`slideChangeTransition${step}`);
                if (dir === "next") swiper.emit(`slideNextTransition${step}`); else swiper.emit(`slidePrevTransition${step}`);
            }
        }
        function transitionStart(runCallbacks, direction) {
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            const {params} = swiper;
            if (params.cssMode) return;
            if (params.autoHeight) swiper.updateAutoHeight();
            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: "Start"
            });
        }
        function transitionEnd(runCallbacks, direction) {
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            const {params} = swiper;
            swiper.animating = false;
            if (params.cssMode) return;
            swiper.setTransition(0);
            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: "End"
            });
        }
        var transition = {
            setTransition,
            transitionStart,
            transitionEnd
        };
        function slideTo(index, speed, runCallbacks, internal, initial) {
            if (index === void 0) index = 0;
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            if (typeof index === "string") index = parseInt(index, 10);
            const swiper = this;
            let slideIndex = index;
            if (slideIndex < 0) slideIndex = 0;
            const {params, snapGrid, slidesGrid, previousIndex, activeIndex, rtlTranslate: rtl, wrapperEl, enabled} = swiper;
            if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) return false;
            const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
            let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            const translate = -snapGrid[snapIndex];
            if (params.normalizeSlideIndex) for (let i = 0; i < slidesGrid.length; i += 1) {
                const normalizedTranslate = -Math.floor(translate * 100);
                const normalizedGrid = Math.floor(slidesGrid[i] * 100);
                const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
                if (typeof slidesGrid[i + 1] !== "undefined") {
                    if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) slideIndex = i; else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) slideIndex = i + 1;
                } else if (normalizedTranslate >= normalizedGrid) slideIndex = i;
            }
            if (swiper.initialized && slideIndex !== activeIndex) {
                if (!swiper.allowSlideNext && (rtl ? translate > swiper.translate && translate > swiper.minTranslate() : translate < swiper.translate && translate < swiper.minTranslate())) return false;
                if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) if ((activeIndex || 0) !== slideIndex) return false;
            }
            if (slideIndex !== (previousIndex || 0) && runCallbacks) swiper.emit("beforeSlideChangeStart");
            swiper.updateProgress(translate);
            let direction;
            if (slideIndex > activeIndex) direction = "next"; else if (slideIndex < activeIndex) direction = "prev"; else direction = "reset";
            if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
                swiper.updateActiveIndex(slideIndex);
                if (params.autoHeight) swiper.updateAutoHeight();
                swiper.updateSlidesClasses();
                if (params.effect !== "slide") swiper.setTranslate(translate);
                if (direction !== "reset") {
                    swiper.transitionStart(runCallbacks, direction);
                    swiper.transitionEnd(runCallbacks, direction);
                }
                return false;
            }
            if (params.cssMode) {
                const isH = swiper.isHorizontal();
                const t = rtl ? translate : -translate;
                if (speed === 0) {
                    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
                    if (isVirtual) {
                        swiper.wrapperEl.style.scrollSnapType = "none";
                        swiper._immediateVirtual = true;
                    }
                    if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
                        swiper._cssModeVirtualInitialSet = true;
                        requestAnimationFrame((() => {
                            wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
                        }));
                    } else wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
                    if (isVirtual) requestAnimationFrame((() => {
                        swiper.wrapperEl.style.scrollSnapType = "";
                        swiper._immediateVirtual = false;
                    }));
                } else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: t,
                            side: isH ? "left" : "top"
                        });
                        return true;
                    }
                    wrapperEl.scrollTo({
                        [isH ? "left" : "top"]: t,
                        behavior: "smooth"
                    });
                }
                return true;
            }
            swiper.setTransition(speed);
            swiper.setTranslate(translate);
            swiper.updateActiveIndex(slideIndex);
            swiper.updateSlidesClasses();
            swiper.emit("beforeTransitionStart", speed, internal);
            swiper.transitionStart(runCallbacks, direction);
            if (speed === 0) swiper.transitionEnd(runCallbacks, direction); else if (!swiper.animating) {
                swiper.animating = true;
                if (!swiper.onSlideToWrapperTransitionEnd) swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
                    if (!swiper || swiper.destroyed) return;
                    if (e.target !== this) return;
                    swiper.wrapperEl.removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
                    swiper.onSlideToWrapperTransitionEnd = null;
                    delete swiper.onSlideToWrapperTransitionEnd;
                    swiper.transitionEnd(runCallbacks, direction);
                };
                swiper.wrapperEl.addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
            }
            return true;
        }
        function slideToLoop(index, speed, runCallbacks, internal) {
            if (index === void 0) index = 0;
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            if (typeof index === "string") {
                const indexAsNumber = parseInt(index, 10);
                index = indexAsNumber;
            }
            const swiper = this;
            const gridEnabled = swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;
            let newIndex = index;
            if (swiper.params.loop) if (swiper.virtual && swiper.params.virtual.enabled) newIndex += swiper.virtual.slidesBefore; else {
                let targetSlideIndex;
                if (gridEnabled) {
                    const slideIndex = newIndex * swiper.params.grid.rows;
                    targetSlideIndex = swiper.slides.filter((slideEl => slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex))[0].column;
                } else targetSlideIndex = swiper.getSlideIndexByData(newIndex);
                const cols = gridEnabled ? Math.ceil(swiper.slides.length / swiper.params.grid.rows) : swiper.slides.length;
                const {centeredSlides} = swiper.params;
                let slidesPerView = swiper.params.slidesPerView;
                if (slidesPerView === "auto") slidesPerView = swiper.slidesPerViewDynamic(); else {
                    slidesPerView = Math.ceil(parseFloat(swiper.params.slidesPerView, 10));
                    if (centeredSlides && slidesPerView % 2 === 0) slidesPerView += 1;
                }
                let needLoopFix = cols - targetSlideIndex < slidesPerView;
                if (centeredSlides) needLoopFix = needLoopFix || targetSlideIndex < Math.ceil(slidesPerView / 2);
                if (needLoopFix) {
                    const direction = centeredSlides ? targetSlideIndex < swiper.activeIndex ? "prev" : "next" : targetSlideIndex - swiper.activeIndex - 1 < swiper.params.slidesPerView ? "next" : "prev";
                    swiper.loopFix({
                        direction,
                        slideTo: true,
                        activeSlideIndex: direction === "next" ? targetSlideIndex + 1 : targetSlideIndex - cols + 1,
                        slideRealIndex: direction === "next" ? swiper.realIndex : void 0
                    });
                }
                if (gridEnabled) {
                    const slideIndex = newIndex * swiper.params.grid.rows;
                    newIndex = swiper.slides.filter((slideEl => slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex))[0].column;
                } else newIndex = swiper.getSlideIndexByData(newIndex);
            }
            requestAnimationFrame((() => {
                swiper.slideTo(newIndex, speed, runCallbacks, internal);
            }));
            return swiper;
        }
        function slideNext(speed, runCallbacks, internal) {
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            const {enabled, params, animating} = swiper;
            if (!enabled) return swiper;
            let perGroup = params.slidesPerGroup;
            if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
            const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            if (params.loop) {
                if (animating && !isVirtual && params.loopPreventsSliding) return false;
                swiper.loopFix({
                    direction: "next"
                });
                swiper._clientLeft = swiper.wrapperEl.clientLeft;
                if (swiper.activeIndex === swiper.slides.length - 1 && params.cssMode) {
                    requestAnimationFrame((() => {
                        swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
                    }));
                    return true;
                }
            }
            if (params.rewind && swiper.isEnd) return swiper.slideTo(0, speed, runCallbacks, internal);
            return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
        }
        function slidePrev(speed, runCallbacks, internal) {
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            const {params, snapGrid, slidesGrid, rtlTranslate, enabled, animating} = swiper;
            if (!enabled) return swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            if (params.loop) {
                if (animating && !isVirtual && params.loopPreventsSliding) return false;
                swiper.loopFix({
                    direction: "prev"
                });
                swiper._clientLeft = swiper.wrapperEl.clientLeft;
            }
            const translate = rtlTranslate ? swiper.translate : -swiper.translate;
            function normalize(val) {
                if (val < 0) return -Math.floor(Math.abs(val));
                return Math.floor(val);
            }
            const normalizedTranslate = normalize(translate);
            const normalizedSnapGrid = snapGrid.map((val => normalize(val)));
            let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
            if (typeof prevSnap === "undefined" && params.cssMode) {
                let prevSnapIndex;
                snapGrid.forEach(((snap, snapIndex) => {
                    if (normalizedTranslate >= snap) prevSnapIndex = snapIndex;
                }));
                if (typeof prevSnapIndex !== "undefined") prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
            }
            let prevIndex = 0;
            if (typeof prevSnap !== "undefined") {
                prevIndex = slidesGrid.indexOf(prevSnap);
                if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
                if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
                    prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
                    prevIndex = Math.max(prevIndex, 0);
                }
            }
            if (params.rewind && swiper.isBeginning) {
                const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
                return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
            } else if (params.loop && swiper.activeIndex === 0 && params.cssMode) {
                requestAnimationFrame((() => {
                    swiper.slideTo(prevIndex, speed, runCallbacks, internal);
                }));
                return true;
            }
            return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
        }
        function slideReset(speed, runCallbacks, internal) {
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
        }
        function slideToClosest(speed, runCallbacks, internal, threshold) {
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            if (threshold === void 0) threshold = .5;
            const swiper = this;
            let index = swiper.activeIndex;
            const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
            const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            if (translate >= swiper.snapGrid[snapIndex]) {
                const currentSnap = swiper.snapGrid[snapIndex];
                const nextSnap = swiper.snapGrid[snapIndex + 1];
                if (translate - currentSnap > (nextSnap - currentSnap) * threshold) index += swiper.params.slidesPerGroup;
            } else {
                const prevSnap = swiper.snapGrid[snapIndex - 1];
                const currentSnap = swiper.snapGrid[snapIndex];
                if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) index -= swiper.params.slidesPerGroup;
            }
            index = Math.max(index, 0);
            index = Math.min(index, swiper.slidesGrid.length - 1);
            return swiper.slideTo(index, speed, runCallbacks, internal);
        }
        function slideToClickedSlide() {
            const swiper = this;
            const {params, slidesEl} = swiper;
            const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : params.slidesPerView;
            let slideToIndex = swiper.clickedIndex;
            let realIndex;
            const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
            if (params.loop) {
                if (swiper.animating) return;
                realIndex = parseInt(swiper.clickedSlide.getAttribute("data-swiper-slide-index"), 10);
                if (params.centeredSlides) if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
                    swiper.loopFix();
                    slideToIndex = swiper.getSlideIndex(utils_elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
                    utils_nextTick((() => {
                        swiper.slideTo(slideToIndex);
                    }));
                } else swiper.slideTo(slideToIndex); else if (slideToIndex > swiper.slides.length - slidesPerView) {
                    swiper.loopFix();
                    slideToIndex = swiper.getSlideIndex(utils_elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
                    utils_nextTick((() => {
                        swiper.slideTo(slideToIndex);
                    }));
                } else swiper.slideTo(slideToIndex);
            } else swiper.slideTo(slideToIndex);
        }
        var slide = {
            slideTo,
            slideToLoop,
            slideNext,
            slidePrev,
            slideReset,
            slideToClosest,
            slideToClickedSlide
        };
        function loopCreate(slideRealIndex) {
            const swiper = this;
            const {params, slidesEl} = swiper;
            if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
            const initSlides = () => {
                const slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
                slides.forEach(((el, index) => {
                    el.setAttribute("data-swiper-slide-index", index);
                }));
            };
            const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
            const slidesPerGroup = params.slidesPerGroup * (gridEnabled ? params.grid.rows : 1);
            const shouldFillGroup = swiper.slides.length % slidesPerGroup !== 0;
            const shouldFillGrid = gridEnabled && swiper.slides.length % params.grid.rows !== 0;
            const addBlankSlides = amountOfSlides => {
                for (let i = 0; i < amountOfSlides; i += 1) {
                    const slideEl = swiper.isElement ? utils_createElement("swiper-slide", [ params.slideBlankClass ]) : utils_createElement("div", [ params.slideClass, params.slideBlankClass ]);
                    swiper.slidesEl.append(slideEl);
                }
            };
            if (shouldFillGroup) {
                if (params.loopAddBlankSlides) {
                    const slidesToAdd = slidesPerGroup - swiper.slides.length % slidesPerGroup;
                    addBlankSlides(slidesToAdd);
                    swiper.recalcSlides();
                    swiper.updateSlides();
                } else showWarning("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
                initSlides();
            } else if (shouldFillGrid) {
                if (params.loopAddBlankSlides) {
                    const slidesToAdd = params.grid.rows - swiper.slides.length % params.grid.rows;
                    addBlankSlides(slidesToAdd);
                    swiper.recalcSlides();
                    swiper.updateSlides();
                } else showWarning("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
                initSlides();
            } else initSlides();
            swiper.loopFix({
                slideRealIndex,
                direction: params.centeredSlides ? void 0 : "next"
            });
        }
        function loopFix(_temp) {
            let {slideRealIndex, slideTo = true, direction, setTranslate, activeSlideIndex, byController, byMousewheel} = _temp === void 0 ? {} : _temp;
            const swiper = this;
            if (!swiper.params.loop) return;
            swiper.emit("beforeLoopFix");
            const {slides, allowSlidePrev, allowSlideNext, slidesEl, params} = swiper;
            const {centeredSlides} = params;
            swiper.allowSlidePrev = true;
            swiper.allowSlideNext = true;
            if (swiper.virtual && params.virtual.enabled) {
                if (slideTo) if (!params.centeredSlides && swiper.snapIndex === 0) swiper.slideTo(swiper.virtual.slides.length, 0, false, true); else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true); else if (swiper.snapIndex === swiper.snapGrid.length - 1) swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
                swiper.allowSlidePrev = allowSlidePrev;
                swiper.allowSlideNext = allowSlideNext;
                swiper.emit("loopFix");
                return;
            }
            let slidesPerView = params.slidesPerView;
            if (slidesPerView === "auto") slidesPerView = swiper.slidesPerViewDynamic(); else {
                slidesPerView = Math.ceil(parseFloat(params.slidesPerView, 10));
                if (centeredSlides && slidesPerView % 2 === 0) slidesPerView += 1;
            }
            const slidesPerGroup = params.slidesPerGroupAuto ? slidesPerView : params.slidesPerGroup;
            let loopedSlides = slidesPerGroup;
            if (loopedSlides % slidesPerGroup !== 0) loopedSlides += slidesPerGroup - loopedSlides % slidesPerGroup;
            loopedSlides += params.loopAdditionalSlides;
            swiper.loopedSlides = loopedSlides;
            const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
            if (slides.length < slidesPerView + loopedSlides) showWarning("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"); else if (gridEnabled && params.grid.fill === "row") showWarning("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
            const prependSlidesIndexes = [];
            const appendSlidesIndexes = [];
            let activeIndex = swiper.activeIndex;
            if (typeof activeSlideIndex === "undefined") activeSlideIndex = swiper.getSlideIndex(slides.filter((el => el.classList.contains(params.slideActiveClass)))[0]); else activeIndex = activeSlideIndex;
            const isNext = direction === "next" || !direction;
            const isPrev = direction === "prev" || !direction;
            let slidesPrepended = 0;
            let slidesAppended = 0;
            const cols = gridEnabled ? Math.ceil(slides.length / params.grid.rows) : slides.length;
            const activeColIndex = gridEnabled ? slides[activeSlideIndex].column : activeSlideIndex;
            const activeColIndexWithShift = activeColIndex + (centeredSlides && typeof setTranslate === "undefined" ? -slidesPerView / 2 + .5 : 0);
            if (activeColIndexWithShift < loopedSlides) {
                slidesPrepended = Math.max(loopedSlides - activeColIndexWithShift, slidesPerGroup);
                for (let i = 0; i < loopedSlides - activeColIndexWithShift; i += 1) {
                    const index = i - Math.floor(i / cols) * cols;
                    if (gridEnabled) {
                        const colIndexToPrepend = cols - index - 1;
                        for (let i = slides.length - 1; i >= 0; i -= 1) if (slides[i].column === colIndexToPrepend) prependSlidesIndexes.push(i);
                    } else prependSlidesIndexes.push(cols - index - 1);
                }
            } else if (activeColIndexWithShift + slidesPerView > cols - loopedSlides) {
                slidesAppended = Math.max(activeColIndexWithShift - (cols - loopedSlides * 2), slidesPerGroup);
                for (let i = 0; i < slidesAppended; i += 1) {
                    const index = i - Math.floor(i / cols) * cols;
                    if (gridEnabled) slides.forEach(((slide, slideIndex) => {
                        if (slide.column === index) appendSlidesIndexes.push(slideIndex);
                    })); else appendSlidesIndexes.push(index);
                }
            }
            swiper.__preventObserver__ = true;
            requestAnimationFrame((() => {
                swiper.__preventObserver__ = false;
            }));
            if (isPrev) prependSlidesIndexes.forEach((index => {
                slides[index].swiperLoopMoveDOM = true;
                slidesEl.prepend(slides[index]);
                slides[index].swiperLoopMoveDOM = false;
            }));
            if (isNext) appendSlidesIndexes.forEach((index => {
                slides[index].swiperLoopMoveDOM = true;
                slidesEl.append(slides[index]);
                slides[index].swiperLoopMoveDOM = false;
            }));
            swiper.recalcSlides();
            if (params.slidesPerView === "auto") swiper.updateSlides(); else if (gridEnabled && (prependSlidesIndexes.length > 0 && isPrev || appendSlidesIndexes.length > 0 && isNext)) swiper.slides.forEach(((slide, slideIndex) => {
                swiper.grid.updateSlide(slideIndex, slide, swiper.slides);
            }));
            if (params.watchSlidesProgress) swiper.updateSlidesOffset();
            if (slideTo) if (prependSlidesIndexes.length > 0 && isPrev) {
                if (typeof slideRealIndex === "undefined") {
                    const currentSlideTranslate = swiper.slidesGrid[activeIndex];
                    const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
                    const diff = newSlideTranslate - currentSlideTranslate;
                    if (byMousewheel) swiper.setTranslate(swiper.translate - diff); else {
                        swiper.slideTo(activeIndex + slidesPrepended, 0, false, true);
                        if (setTranslate) {
                            swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
                            swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
                        }
                    }
                } else if (setTranslate) {
                    const shift = gridEnabled ? prependSlidesIndexes.length / params.grid.rows : prependSlidesIndexes.length;
                    swiper.slideTo(swiper.activeIndex + shift, 0, false, true);
                    swiper.touchEventsData.currentTranslate = swiper.translate;
                }
            } else if (appendSlidesIndexes.length > 0 && isNext) if (typeof slideRealIndex === "undefined") {
                const currentSlideTranslate = swiper.slidesGrid[activeIndex];
                const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
                const diff = newSlideTranslate - currentSlideTranslate;
                if (byMousewheel) swiper.setTranslate(swiper.translate - diff); else {
                    swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
                    if (setTranslate) {
                        swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
                        swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
                    }
                }
            } else {
                const shift = gridEnabled ? appendSlidesIndexes.length / params.grid.rows : appendSlidesIndexes.length;
                swiper.slideTo(swiper.activeIndex - shift, 0, false, true);
            }
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            if (swiper.controller && swiper.controller.control && !byController) {
                const loopParams = {
                    slideRealIndex,
                    direction,
                    setTranslate,
                    activeSlideIndex,
                    byController: true
                };
                if (Array.isArray(swiper.controller.control)) swiper.controller.control.forEach((c => {
                    if (!c.destroyed && c.params.loop) c.loopFix({
                        ...loopParams,
                        slideTo: c.params.slidesPerView === params.slidesPerView ? slideTo : false
                    });
                })); else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) swiper.controller.control.loopFix({
                    ...loopParams,
                    slideTo: swiper.controller.control.params.slidesPerView === params.slidesPerView ? slideTo : false
                });
            }
            swiper.emit("loopFix");
        }
        function loopDestroy() {
            const swiper = this;
            const {params, slidesEl} = swiper;
            if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
            swiper.recalcSlides();
            const newSlidesOrder = [];
            swiper.slides.forEach((slideEl => {
                const index = typeof slideEl.swiperSlideIndex === "undefined" ? slideEl.getAttribute("data-swiper-slide-index") * 1 : slideEl.swiperSlideIndex;
                newSlidesOrder[index] = slideEl;
            }));
            swiper.slides.forEach((slideEl => {
                slideEl.removeAttribute("data-swiper-slide-index");
            }));
            newSlidesOrder.forEach((slideEl => {
                slidesEl.append(slideEl);
            }));
            swiper.recalcSlides();
            swiper.slideTo(swiper.realIndex, 0);
        }
        var loop = {
            loopCreate,
            loopFix,
            loopDestroy
        };
        function setGrabCursor(moving) {
            const swiper = this;
            if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            const el = swiper.params.touchEventsTarget === "container" ? swiper.el : swiper.wrapperEl;
            if (swiper.isElement) swiper.__preventObserver__ = true;
            el.style.cursor = "move";
            el.style.cursor = moving ? "grabbing" : "grab";
            if (swiper.isElement) requestAnimationFrame((() => {
                swiper.__preventObserver__ = false;
            }));
        }
        function unsetGrabCursor() {
            const swiper = this;
            if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            if (swiper.isElement) swiper.__preventObserver__ = true;
            swiper[swiper.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "";
            if (swiper.isElement) requestAnimationFrame((() => {
                swiper.__preventObserver__ = false;
            }));
        }
        var grabCursor = {
            setGrabCursor,
            unsetGrabCursor
        };
        function closestElement(selector, base) {
            if (base === void 0) base = this;
            function __closestFrom(el) {
                if (!el || el === ssr_window_esm_getDocument() || el === ssr_window_esm_getWindow()) return null;
                if (el.assignedSlot) el = el.assignedSlot;
                const found = el.closest(selector);
                if (!found && !el.getRootNode) return null;
                return found || __closestFrom(el.getRootNode().host);
            }
            return __closestFrom(base);
        }
        function preventEdgeSwipe(swiper, event, startX) {
            const window = ssr_window_esm_getWindow();
            const {params} = swiper;
            const edgeSwipeDetection = params.edgeSwipeDetection;
            const edgeSwipeThreshold = params.edgeSwipeThreshold;
            if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
                if (edgeSwipeDetection === "prevent") {
                    event.preventDefault();
                    return true;
                }
                return false;
            }
            return true;
        }
        function onTouchStart(event) {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            const data = swiper.touchEventsData;
            if (e.type === "pointerdown") {
                if (data.pointerId !== null && data.pointerId !== e.pointerId) return;
                data.pointerId = e.pointerId;
            } else if (e.type === "touchstart" && e.targetTouches.length === 1) data.touchId = e.targetTouches[0].identifier;
            if (e.type === "touchstart") {
                preventEdgeSwipe(swiper, e, e.targetTouches[0].pageX);
                return;
            }
            const {params, touches, enabled} = swiper;
            if (!enabled) return;
            if (!params.simulateTouch && e.pointerType === "mouse") return;
            if (swiper.animating && params.preventInteractionOnTransition) return;
            if (!swiper.animating && params.cssMode && params.loop) swiper.loopFix();
            let targetEl = e.target;
            if (params.touchEventsTarget === "wrapper") if (!swiper.wrapperEl.contains(targetEl)) return;
            if ("which" in e && e.which === 3) return;
            if ("button" in e && e.button > 0) return;
            if (data.isTouched && data.isMoved) return;
            const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== "";
            const eventPath = e.composedPath ? e.composedPath() : e.path;
            if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) targetEl = eventPath[0];
            const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
            const isTargetShadow = !!(e.target && e.target.shadowRoot);
            if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
                swiper.allowClick = true;
                return;
            }
            if (params.swipeHandler) if (!targetEl.closest(params.swipeHandler)) return;
            touches.currentX = e.pageX;
            touches.currentY = e.pageY;
            const startX = touches.currentX;
            const startY = touches.currentY;
            if (!preventEdgeSwipe(swiper, e, startX)) return;
            Object.assign(data, {
                isTouched: true,
                isMoved: false,
                allowTouchCallbacks: true,
                isScrolling: void 0,
                startMoving: void 0
            });
            touches.startX = startX;
            touches.startY = startY;
            data.touchStartTime = utils_now();
            swiper.allowClick = true;
            swiper.updateSize();
            swiper.swipeDirection = void 0;
            if (params.threshold > 0) data.allowThresholdMove = false;
            let preventDefault = true;
            if (targetEl.matches(data.focusableElements)) {
                preventDefault = false;
                if (targetEl.nodeName === "SELECT") data.isTouched = false;
            }
            if (document.activeElement && document.activeElement.matches(data.focusableElements) && document.activeElement !== targetEl) document.activeElement.blur();
            const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
            if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) e.preventDefault();
            if (params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) swiper.freeMode.onTouchStart();
            swiper.emit("touchStart", e);
        }
        function onTouchMove(event) {
            const document = ssr_window_esm_getDocument();
            const swiper = this;
            const data = swiper.touchEventsData;
            const {params, touches, rtlTranslate: rtl, enabled} = swiper;
            if (!enabled) return;
            if (!params.simulateTouch && event.pointerType === "mouse") return;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            if (e.type === "pointermove") {
                if (data.touchId !== null) return;
                const id = e.pointerId;
                if (id !== data.pointerId) return;
            }
            let targetTouch;
            if (e.type === "touchmove") {
                targetTouch = [ ...e.changedTouches ].filter((t => t.identifier === data.touchId))[0];
                if (!targetTouch || targetTouch.identifier !== data.touchId) return;
            } else targetTouch = e;
            if (!data.isTouched) {
                if (data.startMoving && data.isScrolling) swiper.emit("touchMoveOpposite", e);
                return;
            }
            const pageX = targetTouch.pageX;
            const pageY = targetTouch.pageY;
            if (e.preventedByNestedSwiper) {
                touches.startX = pageX;
                touches.startY = pageY;
                return;
            }
            if (!swiper.allowTouchMove) {
                if (!e.target.matches(data.focusableElements)) swiper.allowClick = false;
                if (data.isTouched) {
                    Object.assign(touches, {
                        startX: pageX,
                        startY: pageY,
                        currentX: pageX,
                        currentY: pageY
                    });
                    data.touchStartTime = utils_now();
                }
                return;
            }
            if (params.touchReleaseOnEdges && !params.loop) if (swiper.isVertical()) {
                if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
                    data.isTouched = false;
                    data.isMoved = false;
                    return;
                }
            } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) return;
            if (document.activeElement) if (e.target === document.activeElement && e.target.matches(data.focusableElements)) {
                data.isMoved = true;
                swiper.allowClick = false;
                return;
            }
            if (data.allowTouchCallbacks) swiper.emit("touchMove", e);
            touches.previousX = touches.currentX;
            touches.previousY = touches.currentY;
            touches.currentX = pageX;
            touches.currentY = pageY;
            const diffX = touches.currentX - touches.startX;
            const diffY = touches.currentY - touches.startY;
            if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
            if (typeof data.isScrolling === "undefined") {
                let touchAngle;
                if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) data.isScrolling = false; else if (diffX * diffX + diffY * diffY >= 25) {
                    touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
                    data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
                }
            }
            if (data.isScrolling) swiper.emit("touchMoveOpposite", e);
            if (typeof data.startMoving === "undefined") if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) data.startMoving = true;
            if (data.isScrolling) {
                data.isTouched = false;
                return;
            }
            if (!data.startMoving) return;
            swiper.allowClick = false;
            if (!params.cssMode && e.cancelable) e.preventDefault();
            if (params.touchMoveStopPropagation && !params.nested) e.stopPropagation();
            let diff = swiper.isHorizontal() ? diffX : diffY;
            let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
            if (params.oneWayMovement) {
                diff = Math.abs(diff) * (rtl ? 1 : -1);
                touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
            }
            touches.diff = diff;
            diff *= params.touchRatio;
            if (rtl) {
                diff = -diff;
                touchesDiff = -touchesDiff;
            }
            const prevTouchesDirection = swiper.touchesDirection;
            swiper.swipeDirection = diff > 0 ? "prev" : "next";
            swiper.touchesDirection = touchesDiff > 0 ? "prev" : "next";
            const isLoop = swiper.params.loop && !params.cssMode;
            const allowLoopFix = swiper.touchesDirection === "next" && swiper.allowSlideNext || swiper.touchesDirection === "prev" && swiper.allowSlidePrev;
            if (!data.isMoved) {
                if (isLoop && allowLoopFix) swiper.loopFix({
                    direction: swiper.swipeDirection
                });
                data.startTranslate = swiper.getTranslate();
                swiper.setTransition(0);
                if (swiper.animating) {
                    const evt = new window.CustomEvent("transitionend", {
                        bubbles: true,
                        cancelable: true
                    });
                    swiper.wrapperEl.dispatchEvent(evt);
                }
                data.allowMomentumBounce = false;
                if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(true);
                swiper.emit("sliderFirstMove", e);
            }
            let loopFixed;
            (new Date).getTime();
            if (data.isMoved && data.allowThresholdMove && prevTouchesDirection !== swiper.touchesDirection && isLoop && allowLoopFix && Math.abs(diff) >= 1) {
                Object.assign(touches, {
                    startX: pageX,
                    startY: pageY,
                    currentX: pageX,
                    currentY: pageY,
                    startTranslate: data.currentTranslate
                });
                data.loopSwapReset = true;
                data.startTranslate = data.currentTranslate;
                return;
            }
            swiper.emit("sliderMove", e);
            data.isMoved = true;
            data.currentTranslate = diff + data.startTranslate;
            let disableParentSwiper = true;
            let resistanceRatio = params.resistanceRatio;
            if (params.touchReleaseOnEdges) resistanceRatio = 0;
            if (diff > 0) {
                if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.slidesSizesGrid[swiper.activeIndex + 1] : swiper.minTranslate())) swiper.loopFix({
                    direction: "prev",
                    setTranslate: true,
                    activeSlideIndex: 0
                });
                if (data.currentTranslate > swiper.minTranslate()) {
                    disableParentSwiper = false;
                    if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
                }
            } else if (diff < 0) {
                if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] : swiper.maxTranslate())) swiper.loopFix({
                    direction: "next",
                    setTranslate: true,
                    activeSlideIndex: swiper.slides.length - (params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
                });
                if (data.currentTranslate < swiper.maxTranslate()) {
                    disableParentSwiper = false;
                    if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
                }
            }
            if (disableParentSwiper) e.preventedByNestedSwiper = true;
            if (!swiper.allowSlideNext && swiper.swipeDirection === "next" && data.currentTranslate < data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && swiper.swipeDirection === "prev" && data.currentTranslate > data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && !swiper.allowSlideNext) data.currentTranslate = data.startTranslate;
            if (params.threshold > 0) if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
                if (!data.allowThresholdMove) {
                    data.allowThresholdMove = true;
                    touches.startX = touches.currentX;
                    touches.startY = touches.currentY;
                    data.currentTranslate = data.startTranslate;
                    touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                    return;
                }
            } else {
                data.currentTranslate = data.startTranslate;
                return;
            }
            if (!params.followFinger || params.cssMode) return;
            if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            if (params.freeMode && params.freeMode.enabled && swiper.freeMode) swiper.freeMode.onTouchMove();
            swiper.updateProgress(data.currentTranslate);
            swiper.setTranslate(data.currentTranslate);
        }
        function onTouchEnd(event) {
            const swiper = this;
            const data = swiper.touchEventsData;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            let targetTouch;
            const isTouchEvent = e.type === "touchend" || e.type === "touchcancel";
            if (!isTouchEvent) {
                if (data.touchId !== null) return;
                if (e.pointerId !== data.pointerId) return;
                targetTouch = e;
            } else {
                targetTouch = [ ...e.changedTouches ].filter((t => t.identifier === data.touchId))[0];
                if (!targetTouch || targetTouch.identifier !== data.touchId) return;
            }
            if ([ "pointercancel", "pointerout", "pointerleave", "contextmenu" ].includes(e.type)) {
                const proceed = [ "pointercancel", "contextmenu" ].includes(e.type) && (swiper.browser.isSafari || swiper.browser.isWebView);
                if (!proceed) return;
            }
            data.pointerId = null;
            data.touchId = null;
            const {params, touches, rtlTranslate: rtl, slidesGrid, enabled} = swiper;
            if (!enabled) return;
            if (!params.simulateTouch && e.pointerType === "mouse") return;
            if (data.allowTouchCallbacks) swiper.emit("touchEnd", e);
            data.allowTouchCallbacks = false;
            if (!data.isTouched) {
                if (data.isMoved && params.grabCursor) swiper.setGrabCursor(false);
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(false);
            const touchEndTime = utils_now();
            const timeDiff = touchEndTime - data.touchStartTime;
            if (swiper.allowClick) {
                const pathTree = e.path || e.composedPath && e.composedPath();
                swiper.updateClickedSlide(pathTree && pathTree[0] || e.target, pathTree);
                swiper.emit("tap click", e);
                if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) swiper.emit("doubleTap doubleClick", e);
            }
            data.lastClickTime = utils_now();
            utils_nextTick((() => {
                if (!swiper.destroyed) swiper.allowClick = true;
            }));
            if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 && !data.loopSwapReset || data.currentTranslate === data.startTranslate && !data.loopSwapReset) {
                data.isTouched = false;
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            data.isTouched = false;
            data.isMoved = false;
            data.startMoving = false;
            let currentPos;
            if (params.followFinger) currentPos = rtl ? swiper.translate : -swiper.translate; else currentPos = -data.currentTranslate;
            if (params.cssMode) return;
            if (params.freeMode && params.freeMode.enabled) {
                swiper.freeMode.onTouchEnd({
                    currentPos
                });
                return;
            }
            const swipeToLast = currentPos >= -swiper.maxTranslate() && !swiper.params.loop;
            let stopIndex = 0;
            let groupSize = swiper.slidesSizesGrid[0];
            for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
                const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
                if (typeof slidesGrid[i + increment] !== "undefined") {
                    if (swipeToLast || currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
                        stopIndex = i;
                        groupSize = slidesGrid[i + increment] - slidesGrid[i];
                    }
                } else if (swipeToLast || currentPos >= slidesGrid[i]) {
                    stopIndex = i;
                    groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
                }
            }
            let rewindFirstIndex = null;
            let rewindLastIndex = null;
            if (params.rewind) if (swiper.isBeginning) rewindLastIndex = params.virtual && params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1; else if (swiper.isEnd) rewindFirstIndex = 0;
            const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
            const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
            if (timeDiff > params.longSwipesMs) {
                if (!params.longSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                if (swiper.swipeDirection === "next") if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment); else swiper.slideTo(stopIndex);
                if (swiper.swipeDirection === "prev") if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment); else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) swiper.slideTo(rewindLastIndex); else swiper.slideTo(stopIndex);
            } else {
                if (!params.shortSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
                if (!isNavButtonTarget) {
                    if (swiper.swipeDirection === "next") swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
                    if (swiper.swipeDirection === "prev") swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
                } else if (e.target === swiper.navigation.nextEl) swiper.slideTo(stopIndex + increment); else swiper.slideTo(stopIndex);
            }
        }
        function onResize() {
            const swiper = this;
            const {params, el} = swiper;
            if (el && el.offsetWidth === 0) return;
            if (params.breakpoints) swiper.setBreakpoint();
            const {allowSlideNext, allowSlidePrev, snapGrid} = swiper;
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            swiper.allowSlideNext = true;
            swiper.allowSlidePrev = true;
            swiper.updateSize();
            swiper.updateSlides();
            swiper.updateSlidesClasses();
            const isVirtualLoop = isVirtual && params.loop;
            if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) swiper.slideTo(swiper.slides.length - 1, 0, false, true); else if (swiper.params.loop && !isVirtual) swiper.slideToLoop(swiper.realIndex, 0, false, true); else swiper.slideTo(swiper.activeIndex, 0, false, true);
            if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
                clearTimeout(swiper.autoplay.resizeTimeout);
                swiper.autoplay.resizeTimeout = setTimeout((() => {
                    if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) swiper.autoplay.resume();
                }), 500);
            }
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
        }
        function onClick(e) {
            const swiper = this;
            if (!swiper.enabled) return;
            if (!swiper.allowClick) {
                if (swiper.params.preventClicks) e.preventDefault();
                if (swiper.params.preventClicksPropagation && swiper.animating) {
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                }
            }
        }
        function onScroll() {
            const swiper = this;
            const {wrapperEl, rtlTranslate, enabled} = swiper;
            if (!enabled) return;
            swiper.previousTranslate = swiper.translate;
            if (swiper.isHorizontal()) swiper.translate = -wrapperEl.scrollLeft; else swiper.translate = -wrapperEl.scrollTop;
            if (swiper.translate === 0) swiper.translate = 0;
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (translatesDiff === 0) newProgress = 0; else newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
            if (newProgress !== swiper.progress) swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
            swiper.emit("setTranslate", swiper.translate, false);
        }
        function onLoad(e) {
            const swiper = this;
            processLazyPreloader(swiper, e.target);
            if (swiper.params.cssMode || swiper.params.slidesPerView !== "auto" && !swiper.params.autoHeight) return;
            swiper.update();
        }
        function onDocumentTouchStart() {
            const swiper = this;
            if (swiper.documentTouchHandlerProceeded) return;
            swiper.documentTouchHandlerProceeded = true;
            if (swiper.params.touchReleaseOnEdges) swiper.el.style.touchAction = "auto";
        }
        const events = (swiper, method) => {
            const document = ssr_window_esm_getDocument();
            const {params, el, wrapperEl, device} = swiper;
            const capture = !!params.nested;
            const domMethod = method === "on" ? "addEventListener" : "removeEventListener";
            const swiperMethod = method;
            document[domMethod]("touchstart", swiper.onDocumentTouchStart, {
                passive: false,
                capture
            });
            el[domMethod]("touchstart", swiper.onTouchStart, {
                passive: false
            });
            el[domMethod]("pointerdown", swiper.onTouchStart, {
                passive: false
            });
            document[domMethod]("touchmove", swiper.onTouchMove, {
                passive: false,
                capture
            });
            document[domMethod]("pointermove", swiper.onTouchMove, {
                passive: false,
                capture
            });
            document[domMethod]("touchend", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("pointerup", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("pointercancel", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("touchcancel", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("pointerout", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("pointerleave", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("contextmenu", swiper.onTouchEnd, {
                passive: true
            });
            if (params.preventClicks || params.preventClicksPropagation) el[domMethod]("click", swiper.onClick, true);
            if (params.cssMode) wrapperEl[domMethod]("scroll", swiper.onScroll);
            if (params.updateOnWindowResize) swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true); else swiper[swiperMethod]("observerUpdate", onResize, true);
            el[domMethod]("load", swiper.onLoad, {
                capture: true
            });
        };
        function attachEvents() {
            const swiper = this;
            const {params} = swiper;
            swiper.onTouchStart = onTouchStart.bind(swiper);
            swiper.onTouchMove = onTouchMove.bind(swiper);
            swiper.onTouchEnd = onTouchEnd.bind(swiper);
            swiper.onDocumentTouchStart = onDocumentTouchStart.bind(swiper);
            if (params.cssMode) swiper.onScroll = onScroll.bind(swiper);
            swiper.onClick = onClick.bind(swiper);
            swiper.onLoad = onLoad.bind(swiper);
            events(swiper, "on");
        }
        function detachEvents() {
            const swiper = this;
            events(swiper, "off");
        }
        var events$1 = {
            attachEvents,
            detachEvents
        };
        const isGridEnabled = (swiper, params) => swiper.grid && params.grid && params.grid.rows > 1;
        function setBreakpoint() {
            const swiper = this;
            const {realIndex, initialized, params, el} = swiper;
            const breakpoints = params.breakpoints;
            if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return;
            const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
            if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
            const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : void 0;
            const breakpointParams = breakpointOnlyParams || swiper.originalParams;
            const wasMultiRow = isGridEnabled(swiper, params);
            const isMultiRow = isGridEnabled(swiper, breakpointParams);
            const wasEnabled = params.enabled;
            if (wasMultiRow && !isMultiRow) {
                el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
                swiper.emitContainerClasses();
            } else if (!wasMultiRow && isMultiRow) {
                el.classList.add(`${params.containerModifierClass}grid`);
                if (breakpointParams.grid.fill && breakpointParams.grid.fill === "column" || !breakpointParams.grid.fill && params.grid.fill === "column") el.classList.add(`${params.containerModifierClass}grid-column`);
                swiper.emitContainerClasses();
            }
            [ "navigation", "pagination", "scrollbar" ].forEach((prop => {
                if (typeof breakpointParams[prop] === "undefined") return;
                const wasModuleEnabled = params[prop] && params[prop].enabled;
                const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
                if (wasModuleEnabled && !isModuleEnabled) swiper[prop].disable();
                if (!wasModuleEnabled && isModuleEnabled) swiper[prop].enable();
            }));
            const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
            const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
            const wasLoop = params.loop;
            if (directionChanged && initialized) swiper.changeDirection();
            utils_extend(swiper.params, breakpointParams);
            const isEnabled = swiper.params.enabled;
            const hasLoop = swiper.params.loop;
            Object.assign(swiper, {
                allowTouchMove: swiper.params.allowTouchMove,
                allowSlideNext: swiper.params.allowSlideNext,
                allowSlidePrev: swiper.params.allowSlidePrev
            });
            if (wasEnabled && !isEnabled) swiper.disable(); else if (!wasEnabled && isEnabled) swiper.enable();
            swiper.currentBreakpoint = breakpoint;
            swiper.emit("_beforeBreakpoint", breakpointParams);
            if (initialized) if (needsReLoop) {
                swiper.loopDestroy();
                swiper.loopCreate(realIndex);
                swiper.updateSlides();
            } else if (!wasLoop && hasLoop) {
                swiper.loopCreate(realIndex);
                swiper.updateSlides();
            } else if (wasLoop && !hasLoop) swiper.loopDestroy();
            swiper.emit("breakpoint", breakpointParams);
        }
        function getBreakpoint(breakpoints, base, containerEl) {
            if (base === void 0) base = "window";
            if (!breakpoints || base === "container" && !containerEl) return;
            let breakpoint = false;
            const window = ssr_window_esm_getWindow();
            const currentHeight = base === "window" ? window.innerHeight : containerEl.clientHeight;
            const points = Object.keys(breakpoints).map((point => {
                if (typeof point === "string" && point.indexOf("@") === 0) {
                    const minRatio = parseFloat(point.substr(1));
                    const value = currentHeight * minRatio;
                    return {
                        value,
                        point
                    };
                }
                return {
                    value: point,
                    point
                };
            }));
            points.sort(((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10)));
            for (let i = 0; i < points.length; i += 1) {
                const {point, value} = points[i];
                if (base === "window") {
                    if (window.matchMedia(`(min-width: ${value}px)`).matches) breakpoint = point;
                } else if (value <= containerEl.clientWidth) breakpoint = point;
            }
            return breakpoint || "max";
        }
        var breakpoints = {
            setBreakpoint,
            getBreakpoint
        };
        function prepareClasses(entries, prefix) {
            const resultClasses = [];
            entries.forEach((item => {
                if (typeof item === "object") Object.keys(item).forEach((classNames => {
                    if (item[classNames]) resultClasses.push(prefix + classNames);
                })); else if (typeof item === "string") resultClasses.push(prefix + item);
            }));
            return resultClasses;
        }
        function addClasses() {
            const swiper = this;
            const {classNames, params, rtl, el, device} = swiper;
            const suffixes = prepareClasses([ "initialized", params.direction, {
                "free-mode": swiper.params.freeMode && params.freeMode.enabled
            }, {
                autoheight: params.autoHeight
            }, {
                rtl
            }, {
                grid: params.grid && params.grid.rows > 1
            }, {
                "grid-column": params.grid && params.grid.rows > 1 && params.grid.fill === "column"
            }, {
                android: device.android
            }, {
                ios: device.ios
            }, {
                "css-mode": params.cssMode
            }, {
                centered: params.cssMode && params.centeredSlides
            }, {
                "watch-progress": params.watchSlidesProgress
            } ], params.containerModifierClass);
            classNames.push(...suffixes);
            el.classList.add(...classNames);
            swiper.emitContainerClasses();
        }
        function swiper_core_removeClasses() {
            const swiper = this;
            const {el, classNames} = swiper;
            el.classList.remove(...classNames);
            swiper.emitContainerClasses();
        }
        var classes = {
            addClasses,
            removeClasses: swiper_core_removeClasses
        };
        function checkOverflow() {
            const swiper = this;
            const {isLocked: wasLocked, params} = swiper;
            const {slidesOffsetBefore} = params;
            if (slidesOffsetBefore) {
                const lastSlideIndex = swiper.slides.length - 1;
                const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
                swiper.isLocked = swiper.size > lastSlideRightEdge;
            } else swiper.isLocked = swiper.snapGrid.length === 1;
            if (params.allowSlideNext === true) swiper.allowSlideNext = !swiper.isLocked;
            if (params.allowSlidePrev === true) swiper.allowSlidePrev = !swiper.isLocked;
            if (wasLocked && wasLocked !== swiper.isLocked) swiper.isEnd = false;
            if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? "lock" : "unlock");
        }
        var checkOverflow$1 = {
            checkOverflow
        };
        var defaults = {
            init: true,
            direction: "horizontal",
            oneWayMovement: false,
            touchEventsTarget: "wrapper",
            initialSlide: 0,
            speed: 300,
            cssMode: false,
            updateOnWindowResize: true,
            resizeObserver: true,
            nested: false,
            createElements: false,
            eventsPrefix: "swiper",
            enabled: true,
            focusableElements: "input, select, option, textarea, button, video, label",
            width: null,
            height: null,
            preventInteractionOnTransition: false,
            userAgent: null,
            url: null,
            edgeSwipeDetection: false,
            edgeSwipeThreshold: 20,
            autoHeight: false,
            setWrapperSize: false,
            virtualTranslate: false,
            effect: "slide",
            breakpoints: void 0,
            breakpointsBase: "window",
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            slidesPerGroupAuto: false,
            centeredSlides: false,
            centeredSlidesBounds: false,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: true,
            centerInsufficientSlides: false,
            watchOverflow: true,
            roundLengths: false,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: true,
            shortSwipes: true,
            longSwipes: true,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: true,
            allowTouchMove: true,
            threshold: 5,
            touchMoveStopPropagation: false,
            touchStartPreventDefault: true,
            touchStartForcePreventDefault: false,
            touchReleaseOnEdges: false,
            uniqueNavElements: true,
            resistance: true,
            resistanceRatio: .85,
            watchSlidesProgress: false,
            grabCursor: false,
            preventClicks: true,
            preventClicksPropagation: true,
            slideToClickedSlide: false,
            loop: false,
            loopAddBlankSlides: true,
            loopAdditionalSlides: 0,
            loopPreventsSliding: true,
            rewind: false,
            allowSlidePrev: true,
            allowSlideNext: true,
            swipeHandler: null,
            noSwiping: true,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: true,
            maxBackfaceHiddenSlides: 10,
            containerModifierClass: "swiper-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-blank",
            slideActiveClass: "swiper-slide-active",
            slideVisibleClass: "swiper-slide-visible",
            slideFullyVisibleClass: "swiper-slide-fully-visible",
            slideNextClass: "swiper-slide-next",
            slidePrevClass: "swiper-slide-prev",
            wrapperClass: "swiper-wrapper",
            lazyPreloaderClass: "swiper-lazy-preloader",
            lazyPreloadPrevNext: 0,
            runCallbacksOnInit: true,
            _emitClasses: false
        };
        function moduleExtendParams(params, allModulesParams) {
            return function extendParams(obj) {
                if (obj === void 0) obj = {};
                const moduleParamName = Object.keys(obj)[0];
                const moduleParams = obj[moduleParamName];
                if (typeof moduleParams !== "object" || moduleParams === null) {
                    utils_extend(allModulesParams, obj);
                    return;
                }
                if (params[moduleParamName] === true) params[moduleParamName] = {
                    enabled: true
                };
                if (moduleParamName === "navigation" && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].prevEl && !params[moduleParamName].nextEl) params[moduleParamName].auto = true;
                if ([ "pagination", "scrollbar" ].indexOf(moduleParamName) >= 0 && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].el) params[moduleParamName].auto = true;
                if (!(moduleParamName in params && "enabled" in moduleParams)) {
                    utils_extend(allModulesParams, obj);
                    return;
                }
                if (typeof params[moduleParamName] === "object" && !("enabled" in params[moduleParamName])) params[moduleParamName].enabled = true;
                if (!params[moduleParamName]) params[moduleParamName] = {
                    enabled: false
                };
                utils_extend(allModulesParams, obj);
            };
        }
        const prototypes = {
            eventsEmitter,
            update,
            translate,
            transition,
            slide,
            loop,
            grabCursor,
            events: events$1,
            breakpoints,
            checkOverflow: checkOverflow$1,
            classes
        };
        const extendedDefaults = {};
        class Swiper {
            constructor() {
                let el;
                let params;
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === "Object") params = args[0]; else [el, params] = args;
                if (!params) params = {};
                params = utils_extend({}, params);
                if (el && !params.el) params.el = el;
                const document = ssr_window_esm_getDocument();
                if (params.el && typeof params.el === "string" && document.querySelectorAll(params.el).length > 1) {
                    const swipers = [];
                    document.querySelectorAll(params.el).forEach((containerEl => {
                        const newParams = utils_extend({}, params, {
                            el: containerEl
                        });
                        swipers.push(new Swiper(newParams));
                    }));
                    return swipers;
                }
                const swiper = this;
                swiper.__swiper__ = true;
                swiper.support = getSupport();
                swiper.device = getDevice({
                    userAgent: params.userAgent
                });
                swiper.browser = getBrowser();
                swiper.eventsListeners = {};
                swiper.eventsAnyListeners = [];
                swiper.modules = [ ...swiper.__modules__ ];
                if (params.modules && Array.isArray(params.modules)) swiper.modules.push(...params.modules);
                const allModulesParams = {};
                swiper.modules.forEach((mod => {
                    mod({
                        params,
                        swiper,
                        extendParams: moduleExtendParams(params, allModulesParams),
                        on: swiper.on.bind(swiper),
                        once: swiper.once.bind(swiper),
                        off: swiper.off.bind(swiper),
                        emit: swiper.emit.bind(swiper)
                    });
                }));
                const swiperParams = utils_extend({}, defaults, allModulesParams);
                swiper.params = utils_extend({}, swiperParams, extendedDefaults, params);
                swiper.originalParams = utils_extend({}, swiper.params);
                swiper.passedParams = utils_extend({}, params);
                if (swiper.params && swiper.params.on) Object.keys(swiper.params.on).forEach((eventName => {
                    swiper.on(eventName, swiper.params.on[eventName]);
                }));
                if (swiper.params && swiper.params.onAny) swiper.onAny(swiper.params.onAny);
                Object.assign(swiper, {
                    enabled: swiper.params.enabled,
                    el,
                    classNames: [],
                    slides: [],
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal() {
                        return swiper.params.direction === "horizontal";
                    },
                    isVertical() {
                        return swiper.params.direction === "vertical";
                    },
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: true,
                    isEnd: false,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: false,
                    cssOverflowAdjustment() {
                        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
                    },
                    allowSlideNext: swiper.params.allowSlideNext,
                    allowSlidePrev: swiper.params.allowSlidePrev,
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        focusableElements: swiper.params.focusableElements,
                        lastClickTime: 0,
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        startMoving: void 0,
                        pointerId: null,
                        touchId: null
                    },
                    allowClick: true,
                    allowTouchMove: swiper.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                });
                swiper.emit("_swiper");
                if (swiper.params.init) swiper.init();
                return swiper;
            }
            getDirectionLabel(property) {
                if (this.isHorizontal()) return property;
                return {
                    width: "height",
                    "margin-top": "margin-left",
                    "margin-bottom ": "margin-right",
                    "margin-left": "margin-top",
                    "margin-right": "margin-bottom",
                    "padding-left": "padding-top",
                    "padding-right": "padding-bottom",
                    marginRight: "marginBottom"
                }[property];
            }
            getSlideIndex(slideEl) {
                const {slidesEl, params} = this;
                const slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
                const firstSlideIndex = utils_elementIndex(slides[0]);
                return utils_elementIndex(slideEl) - firstSlideIndex;
            }
            getSlideIndexByData(index) {
                return this.getSlideIndex(this.slides.filter((slideEl => slideEl.getAttribute("data-swiper-slide-index") * 1 === index))[0]);
            }
            recalcSlides() {
                const swiper = this;
                const {slidesEl, params} = swiper;
                swiper.slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
            }
            enable() {
                const swiper = this;
                if (swiper.enabled) return;
                swiper.enabled = true;
                if (swiper.params.grabCursor) swiper.setGrabCursor();
                swiper.emit("enable");
            }
            disable() {
                const swiper = this;
                if (!swiper.enabled) return;
                swiper.enabled = false;
                if (swiper.params.grabCursor) swiper.unsetGrabCursor();
                swiper.emit("disable");
            }
            setProgress(progress, speed) {
                const swiper = this;
                progress = Math.min(Math.max(progress, 0), 1);
                const min = swiper.minTranslate();
                const max = swiper.maxTranslate();
                const current = (max - min) * progress + min;
                swiper.translateTo(current, typeof speed === "undefined" ? 0 : speed);
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            emitContainerClasses() {
                const swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                const cls = swiper.el.className.split(" ").filter((className => className.indexOf("swiper") === 0 || className.indexOf(swiper.params.containerModifierClass) === 0));
                swiper.emit("_containerClasses", cls.join(" "));
            }
            getSlideClasses(slideEl) {
                const swiper = this;
                if (swiper.destroyed) return "";
                return slideEl.className.split(" ").filter((className => className.indexOf("swiper-slide") === 0 || className.indexOf(swiper.params.slideClass) === 0)).join(" ");
            }
            emitSlidesClasses() {
                const swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                const updates = [];
                swiper.slides.forEach((slideEl => {
                    const classNames = swiper.getSlideClasses(slideEl);
                    updates.push({
                        slideEl,
                        classNames
                    });
                    swiper.emit("_slideClass", slideEl, classNames);
                }));
                swiper.emit("_slideClasses", updates);
            }
            slidesPerViewDynamic(view, exact) {
                if (view === void 0) view = "current";
                if (exact === void 0) exact = false;
                const swiper = this;
                const {params, slides, slidesGrid, slidesSizesGrid, size: swiperSize, activeIndex} = swiper;
                let spv = 1;
                if (typeof params.slidesPerView === "number") return params.slidesPerView;
                if (params.centeredSlides) {
                    let slideSize = slides[activeIndex] ? slides[activeIndex].swiperSlideSize : 0;
                    let breakLoop;
                    for (let i = activeIndex + 1; i < slides.length; i += 1) if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                    for (let i = activeIndex - 1; i >= 0; i -= 1) if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                } else if (view === "current") for (let i = activeIndex + 1; i < slides.length; i += 1) {
                    const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
                    if (slideInView) spv += 1;
                } else for (let i = activeIndex - 1; i >= 0; i -= 1) {
                    const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
                    if (slideInView) spv += 1;
                }
                return spv;
            }
            update() {
                const swiper = this;
                if (!swiper || swiper.destroyed) return;
                const {snapGrid, params} = swiper;
                if (params.breakpoints) swiper.setBreakpoint();
                [ ...swiper.el.querySelectorAll('[loading="lazy"]') ].forEach((imageEl => {
                    if (imageEl.complete) processLazyPreloader(swiper, imageEl);
                }));
                swiper.updateSize();
                swiper.updateSlides();
                swiper.updateProgress();
                swiper.updateSlidesClasses();
                function setTranslate() {
                    const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
                    const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
                    swiper.setTranslate(newTranslate);
                    swiper.updateActiveIndex();
                    swiper.updateSlidesClasses();
                }
                let translated;
                if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
                    setTranslate();
                    if (params.autoHeight) swiper.updateAutoHeight();
                } else {
                    if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) {
                        const slides = swiper.virtual && params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
                        translated = swiper.slideTo(slides.length - 1, 0, false, true);
                    } else translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
                    if (!translated) setTranslate();
                }
                if (params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
                swiper.emit("update");
            }
            changeDirection(newDirection, needUpdate) {
                if (needUpdate === void 0) needUpdate = true;
                const swiper = this;
                const currentDirection = swiper.params.direction;
                if (!newDirection) newDirection = currentDirection === "horizontal" ? "vertical" : "horizontal";
                if (newDirection === currentDirection || newDirection !== "horizontal" && newDirection !== "vertical") return swiper;
                swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
                swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
                swiper.emitContainerClasses();
                swiper.params.direction = newDirection;
                swiper.slides.forEach((slideEl => {
                    if (newDirection === "vertical") slideEl.style.width = ""; else slideEl.style.height = "";
                }));
                swiper.emit("changeDirection");
                if (needUpdate) swiper.update();
                return swiper;
            }
            changeLanguageDirection(direction) {
                const swiper = this;
                if (swiper.rtl && direction === "rtl" || !swiper.rtl && direction === "ltr") return;
                swiper.rtl = direction === "rtl";
                swiper.rtlTranslate = swiper.params.direction === "horizontal" && swiper.rtl;
                if (swiper.rtl) {
                    swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
                    swiper.el.dir = "rtl";
                } else {
                    swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
                    swiper.el.dir = "ltr";
                }
                swiper.update();
            }
            mount(element) {
                const swiper = this;
                if (swiper.mounted) return true;
                let el = element || swiper.params.el;
                if (typeof el === "string") el = document.querySelector(el);
                if (!el) return false;
                el.swiper = swiper;
                if (el.parentNode && el.parentNode.host && el.parentNode.host.nodeName === "SWIPER-CONTAINER") swiper.isElement = true;
                const getWrapperSelector = () => `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`;
                const getWrapper = () => {
                    if (el && el.shadowRoot && el.shadowRoot.querySelector) {
                        const res = el.shadowRoot.querySelector(getWrapperSelector());
                        return res;
                    }
                    return utils_elementChildren(el, getWrapperSelector())[0];
                };
                let wrapperEl = getWrapper();
                if (!wrapperEl && swiper.params.createElements) {
                    wrapperEl = utils_createElement("div", swiper.params.wrapperClass);
                    el.append(wrapperEl);
                    utils_elementChildren(el, `.${swiper.params.slideClass}`).forEach((slideEl => {
                        wrapperEl.append(slideEl);
                    }));
                }
                Object.assign(swiper, {
                    el,
                    wrapperEl,
                    slidesEl: swiper.isElement && !el.parentNode.host.slideSlots ? el.parentNode.host : wrapperEl,
                    hostEl: swiper.isElement ? el.parentNode.host : el,
                    mounted: true,
                    rtl: el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl",
                    rtlTranslate: swiper.params.direction === "horizontal" && (el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl"),
                    wrongRTL: elementStyle(wrapperEl, "display") === "-webkit-box"
                });
                return true;
            }
            init(el) {
                const swiper = this;
                if (swiper.initialized) return swiper;
                const mounted = swiper.mount(el);
                if (mounted === false) return swiper;
                swiper.emit("beforeInit");
                if (swiper.params.breakpoints) swiper.setBreakpoint();
                swiper.addClasses();
                swiper.updateSize();
                swiper.updateSlides();
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                if (swiper.params.grabCursor && swiper.enabled) swiper.setGrabCursor();
                if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true); else swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
                if (swiper.params.loop) swiper.loopCreate();
                swiper.attachEvents();
                const lazyElements = [ ...swiper.el.querySelectorAll('[loading="lazy"]') ];
                if (swiper.isElement) lazyElements.push(...swiper.hostEl.querySelectorAll('[loading="lazy"]'));
                lazyElements.forEach((imageEl => {
                    if (imageEl.complete) processLazyPreloader(swiper, imageEl); else imageEl.addEventListener("load", (e => {
                        processLazyPreloader(swiper, e.target);
                    }));
                }));
                preload(swiper);
                swiper.initialized = true;
                preload(swiper);
                swiper.emit("init");
                swiper.emit("afterInit");
                return swiper;
            }
            destroy(deleteInstance, cleanStyles) {
                if (deleteInstance === void 0) deleteInstance = true;
                if (cleanStyles === void 0) cleanStyles = true;
                const swiper = this;
                const {params, el, wrapperEl, slides} = swiper;
                if (typeof swiper.params === "undefined" || swiper.destroyed) return null;
                swiper.emit("beforeDestroy");
                swiper.initialized = false;
                swiper.detachEvents();
                if (params.loop) swiper.loopDestroy();
                if (cleanStyles) {
                    swiper.removeClasses();
                    el.removeAttribute("style");
                    wrapperEl.removeAttribute("style");
                    if (slides && slides.length) slides.forEach((slideEl => {
                        slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
                        slideEl.removeAttribute("style");
                        slideEl.removeAttribute("data-swiper-slide-index");
                    }));
                }
                swiper.emit("destroy");
                Object.keys(swiper.eventsListeners).forEach((eventName => {
                    swiper.off(eventName);
                }));
                if (deleteInstance !== false) {
                    swiper.el.swiper = null;
                    deleteProps(swiper);
                }
                swiper.destroyed = true;
                return null;
            }
            static extendDefaults(newDefaults) {
                utils_extend(extendedDefaults, newDefaults);
            }
            static get extendedDefaults() {
                return extendedDefaults;
            }
            static get defaults() {
                return defaults;
            }
            static installModule(mod) {
                if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];
                const modules = Swiper.prototype.__modules__;
                if (typeof mod === "function" && modules.indexOf(mod) < 0) modules.push(mod);
            }
            static use(module) {
                if (Array.isArray(module)) {
                    module.forEach((m => Swiper.installModule(m)));
                    return Swiper;
                }
                Swiper.installModule(module);
                return Swiper;
            }
        }
        Object.keys(prototypes).forEach((prototypeGroup => {
            Object.keys(prototypes[prototypeGroup]).forEach((protoMethod => {
                Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
            }));
        }));
        Swiper.use([ Resize, Observer ]);
        function create_element_if_not_defined_createElementIfNotDefined(swiper, originalParams, params, checkProps) {
            if (swiper.params.createElements) Object.keys(checkProps).forEach((key => {
                if (!params[key] && params.auto === true) {
                    let element = utils_elementChildren(swiper.el, `.${checkProps[key]}`)[0];
                    if (!element) {
                        element = utils_createElement("div", checkProps[key]);
                        element.className = checkProps[key];
                        swiper.el.append(element);
                    }
                    params[key] = element;
                    originalParams[key] = element;
                }
            }));
            return params;
        }
        function classes_to_selector_classesToSelector(classes) {
            if (classes === void 0) classes = "";
            return `.${classes.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`;
        }
        function Pagination(_ref) {
            let {swiper, extendParams, on, emit} = _ref;
            const pfx = "swiper-pagination";
            extendParams({
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: false,
                    hideOnClick: false,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: false,
                    type: "bullets",
                    dynamicBullets: false,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: number => number,
                    formatFractionTotal: number => number,
                    bulletClass: `${pfx}-bullet`,
                    bulletActiveClass: `${pfx}-bullet-active`,
                    modifierClass: `${pfx}-`,
                    currentClass: `${pfx}-current`,
                    totalClass: `${pfx}-total`,
                    hiddenClass: `${pfx}-hidden`,
                    progressbarFillClass: `${pfx}-progressbar-fill`,
                    progressbarOppositeClass: `${pfx}-progressbar-opposite`,
                    clickableClass: `${pfx}-clickable`,
                    lockClass: `${pfx}-lock`,
                    horizontalClass: `${pfx}-horizontal`,
                    verticalClass: `${pfx}-vertical`,
                    paginationDisabledClass: `${pfx}-disabled`
                }
            });
            swiper.pagination = {
                el: null,
                bullets: []
            };
            let bulletSize;
            let dynamicBulletIndex = 0;
            const makeElementsArray = el => (Array.isArray(el) ? el : [ el ]).filter((e => !!e));
            function isPaginationDisabled() {
                return !swiper.params.pagination.el || !swiper.pagination.el || Array.isArray(swiper.pagination.el) && swiper.pagination.el.length === 0;
            }
            function setSideBullets(bulletEl, position) {
                const {bulletActiveClass} = swiper.params.pagination;
                if (!bulletEl) return;
                bulletEl = bulletEl[`${position === "prev" ? "previous" : "next"}ElementSibling`];
                if (bulletEl) {
                    bulletEl.classList.add(`${bulletActiveClass}-${position}`);
                    bulletEl = bulletEl[`${position === "prev" ? "previous" : "next"}ElementSibling`];
                    if (bulletEl) bulletEl.classList.add(`${bulletActiveClass}-${position}-${position}`);
                }
            }
            function onBulletClick(e) {
                const bulletEl = e.target.closest(classes_to_selector_classesToSelector(swiper.params.pagination.bulletClass));
                if (!bulletEl) return;
                e.preventDefault();
                const index = utils_elementIndex(bulletEl) * swiper.params.slidesPerGroup;
                if (swiper.params.loop) {
                    if (swiper.realIndex === index) return;
                    swiper.slideToLoop(index);
                } else swiper.slideTo(index);
            }
            function update() {
                const rtl = swiper.rtl;
                const params = swiper.params.pagination;
                if (isPaginationDisabled()) return;
                let el = swiper.pagination.el;
                el = makeElementsArray(el);
                let current;
                let previousIndex;
                const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
                const total = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
                if (swiper.params.loop) {
                    previousIndex = swiper.previousRealIndex || 0;
                    current = swiper.params.slidesPerGroup > 1 ? Math.floor(swiper.realIndex / swiper.params.slidesPerGroup) : swiper.realIndex;
                } else if (typeof swiper.snapIndex !== "undefined") {
                    current = swiper.snapIndex;
                    previousIndex = swiper.previousSnapIndex;
                } else {
                    previousIndex = swiper.previousIndex || 0;
                    current = swiper.activeIndex || 0;
                }
                if (params.type === "bullets" && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
                    const bullets = swiper.pagination.bullets;
                    let firstIndex;
                    let lastIndex;
                    let midIndex;
                    if (params.dynamicBullets) {
                        bulletSize = elementOuterSize(bullets[0], swiper.isHorizontal() ? "width" : "height", true);
                        el.forEach((subEl => {
                            subEl.style[swiper.isHorizontal() ? "width" : "height"] = `${bulletSize * (params.dynamicMainBullets + 4)}px`;
                        }));
                        if (params.dynamicMainBullets > 1 && previousIndex !== void 0) {
                            dynamicBulletIndex += current - (previousIndex || 0);
                            if (dynamicBulletIndex > params.dynamicMainBullets - 1) dynamicBulletIndex = params.dynamicMainBullets - 1; else if (dynamicBulletIndex < 0) dynamicBulletIndex = 0;
                        }
                        firstIndex = Math.max(current - dynamicBulletIndex, 0);
                        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
                        midIndex = (lastIndex + firstIndex) / 2;
                    }
                    bullets.forEach((bulletEl => {
                        const classesToRemove = [ ...[ "", "-next", "-next-next", "-prev", "-prev-prev", "-main" ].map((suffix => `${params.bulletActiveClass}${suffix}`)) ].map((s => typeof s === "string" && s.includes(" ") ? s.split(" ") : s)).flat();
                        bulletEl.classList.remove(...classesToRemove);
                    }));
                    if (el.length > 1) bullets.forEach((bullet => {
                        const bulletIndex = utils_elementIndex(bullet);
                        if (bulletIndex === current) bullet.classList.add(...params.bulletActiveClass.split(" ")); else if (swiper.isElement) bullet.setAttribute("part", "bullet");
                        if (params.dynamicBullets) {
                            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) bullet.classList.add(...`${params.bulletActiveClass}-main`.split(" "));
                            if (bulletIndex === firstIndex) setSideBullets(bullet, "prev");
                            if (bulletIndex === lastIndex) setSideBullets(bullet, "next");
                        }
                    })); else {
                        const bullet = bullets[current];
                        if (bullet) bullet.classList.add(...params.bulletActiveClass.split(" "));
                        if (swiper.isElement) bullets.forEach(((bulletEl, bulletIndex) => {
                            bulletEl.setAttribute("part", bulletIndex === current ? "bullet-active" : "bullet");
                        }));
                        if (params.dynamicBullets) {
                            const firstDisplayedBullet = bullets[firstIndex];
                            const lastDisplayedBullet = bullets[lastIndex];
                            for (let i = firstIndex; i <= lastIndex; i += 1) if (bullets[i]) bullets[i].classList.add(...`${params.bulletActiveClass}-main`.split(" "));
                            setSideBullets(firstDisplayedBullet, "prev");
                            setSideBullets(lastDisplayedBullet, "next");
                        }
                    }
                    if (params.dynamicBullets) {
                        const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
                        const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
                        const offsetProp = rtl ? "right" : "left";
                        bullets.forEach((bullet => {
                            bullet.style[swiper.isHorizontal() ? offsetProp : "top"] = `${bulletsOffset}px`;
                        }));
                    }
                }
                el.forEach(((subEl, subElIndex) => {
                    if (params.type === "fraction") {
                        subEl.querySelectorAll(classes_to_selector_classesToSelector(params.currentClass)).forEach((fractionEl => {
                            fractionEl.textContent = params.formatFractionCurrent(current + 1);
                        }));
                        subEl.querySelectorAll(classes_to_selector_classesToSelector(params.totalClass)).forEach((totalEl => {
                            totalEl.textContent = params.formatFractionTotal(total);
                        }));
                    }
                    if (params.type === "progressbar") {
                        let progressbarDirection;
                        if (params.progressbarOpposite) progressbarDirection = swiper.isHorizontal() ? "vertical" : "horizontal"; else progressbarDirection = swiper.isHorizontal() ? "horizontal" : "vertical";
                        const scale = (current + 1) / total;
                        let scaleX = 1;
                        let scaleY = 1;
                        if (progressbarDirection === "horizontal") scaleX = scale; else scaleY = scale;
                        subEl.querySelectorAll(classes_to_selector_classesToSelector(params.progressbarFillClass)).forEach((progressEl => {
                            progressEl.style.transform = `translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`;
                            progressEl.style.transitionDuration = `${swiper.params.speed}ms`;
                        }));
                    }
                    if (params.type === "custom" && params.renderCustom) {
                        subEl.innerHTML = params.renderCustom(swiper, current + 1, total);
                        if (subElIndex === 0) emit("paginationRender", subEl);
                    } else {
                        if (subElIndex === 0) emit("paginationRender", subEl);
                        emit("paginationUpdate", subEl);
                    }
                    if (swiper.params.watchOverflow && swiper.enabled) subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
                }));
            }
            function render() {
                const params = swiper.params.pagination;
                if (isPaginationDisabled()) return;
                const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.grid && swiper.params.grid.rows > 1 ? swiper.slides.length / Math.ceil(swiper.params.grid.rows) : swiper.slides.length;
                let el = swiper.pagination.el;
                el = makeElementsArray(el);
                let paginationHTML = "";
                if (params.type === "bullets") {
                    let numberOfBullets = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
                    if (swiper.params.freeMode && swiper.params.freeMode.enabled && numberOfBullets > slidesLength) numberOfBullets = slidesLength;
                    for (let i = 0; i < numberOfBullets; i += 1) if (params.renderBullet) paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass); else paginationHTML += `<${params.bulletElement} ${swiper.isElement ? 'part="bullet"' : ""} class="${params.bulletClass}"></${params.bulletElement}>`;
                }
                if (params.type === "fraction") if (params.renderFraction) paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass); else paginationHTML = `<span class="${params.currentClass}"></span>` + " / " + `<span class="${params.totalClass}"></span>`;
                if (params.type === "progressbar") if (params.renderProgressbar) paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass); else paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
                swiper.pagination.bullets = [];
                el.forEach((subEl => {
                    if (params.type !== "custom") subEl.innerHTML = paginationHTML || "";
                    if (params.type === "bullets") swiper.pagination.bullets.push(...subEl.querySelectorAll(classes_to_selector_classesToSelector(params.bulletClass)));
                }));
                if (params.type !== "custom") emit("paginationRender", el[0]);
            }
            function init() {
                swiper.params.pagination = create_element_if_not_defined_createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
                    el: "swiper-pagination"
                });
                const params = swiper.params.pagination;
                if (!params.el) return;
                let el;
                if (typeof params.el === "string" && swiper.isElement) el = swiper.el.querySelector(params.el);
                if (!el && typeof params.el === "string") el = [ ...document.querySelectorAll(params.el) ];
                if (!el) el = params.el;
                if (!el || el.length === 0) return;
                if (swiper.params.uniqueNavElements && typeof params.el === "string" && Array.isArray(el) && el.length > 1) {
                    el = [ ...swiper.el.querySelectorAll(params.el) ];
                    if (el.length > 1) el = el.filter((subEl => {
                        if (utils_elementParents(subEl, ".swiper")[0] !== swiper.el) return false;
                        return true;
                    }))[0];
                }
                if (Array.isArray(el) && el.length === 1) el = el[0];
                Object.assign(swiper.pagination, {
                    el
                });
                el = makeElementsArray(el);
                el.forEach((subEl => {
                    if (params.type === "bullets" && params.clickable) subEl.classList.add(...(params.clickableClass || "").split(" "));
                    subEl.classList.add(params.modifierClass + params.type);
                    subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                    if (params.type === "bullets" && params.dynamicBullets) {
                        subEl.classList.add(`${params.modifierClass}${params.type}-dynamic`);
                        dynamicBulletIndex = 0;
                        if (params.dynamicMainBullets < 1) params.dynamicMainBullets = 1;
                    }
                    if (params.type === "progressbar" && params.progressbarOpposite) subEl.classList.add(params.progressbarOppositeClass);
                    if (params.clickable) subEl.addEventListener("click", onBulletClick);
                    if (!swiper.enabled) subEl.classList.add(params.lockClass);
                }));
            }
            function destroy() {
                const params = swiper.params.pagination;
                if (isPaginationDisabled()) return;
                let el = swiper.pagination.el;
                if (el) {
                    el = makeElementsArray(el);
                    el.forEach((subEl => {
                        subEl.classList.remove(params.hiddenClass);
                        subEl.classList.remove(params.modifierClass + params.type);
                        subEl.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                        if (params.clickable) {
                            subEl.classList.remove(...(params.clickableClass || "").split(" "));
                            subEl.removeEventListener("click", onBulletClick);
                        }
                    }));
                }
                if (swiper.pagination.bullets) swiper.pagination.bullets.forEach((subEl => subEl.classList.remove(...params.bulletActiveClass.split(" "))));
            }
            on("changeDirection", (() => {
                if (!swiper.pagination || !swiper.pagination.el) return;
                const params = swiper.params.pagination;
                let {el} = swiper.pagination;
                el = makeElementsArray(el);
                el.forEach((subEl => {
                    subEl.classList.remove(params.horizontalClass, params.verticalClass);
                    subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                }));
            }));
            on("init", (() => {
                if (swiper.params.pagination.enabled === false) disable(); else {
                    init();
                    render();
                    update();
                }
            }));
            on("activeIndexChange", (() => {
                if (typeof swiper.snapIndex === "undefined") update();
            }));
            on("snapIndexChange", (() => {
                update();
            }));
            on("snapGridLengthChange", (() => {
                render();
                update();
            }));
            on("destroy", (() => {
                destroy();
            }));
            on("enable disable", (() => {
                let {el} = swiper.pagination;
                if (el) {
                    el = makeElementsArray(el);
                    el.forEach((subEl => subEl.classList[swiper.enabled ? "remove" : "add"](swiper.params.pagination.lockClass)));
                }
            }));
            on("lock unlock", (() => {
                update();
            }));
            on("click", ((_s, e) => {
                const targetEl = e.target;
                const el = makeElementsArray(swiper.pagination.el);
                if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && el && el.length > 0 && !targetEl.classList.contains(swiper.params.pagination.bulletClass)) {
                    if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
                    const isHidden = el[0].classList.contains(swiper.params.pagination.hiddenClass);
                    if (isHidden === true) emit("paginationShow"); else emit("paginationHide");
                    el.forEach((subEl => subEl.classList.toggle(swiper.params.pagination.hiddenClass)));
                }
            }));
            const enable = () => {
                swiper.el.classList.remove(swiper.params.pagination.paginationDisabledClass);
                let {el} = swiper.pagination;
                if (el) {
                    el = makeElementsArray(el);
                    el.forEach((subEl => subEl.classList.remove(swiper.params.pagination.paginationDisabledClass)));
                }
                init();
                render();
                update();
            };
            const disable = () => {
                swiper.el.classList.add(swiper.params.pagination.paginationDisabledClass);
                let {el} = swiper.pagination;
                if (el) {
                    el = makeElementsArray(el);
                    el.forEach((subEl => subEl.classList.add(swiper.params.pagination.paginationDisabledClass)));
                }
                destroy();
            };
            Object.assign(swiper.pagination, {
                enable,
                disable,
                render,
                update,
                init,
                destroy
            });
        }
        let vibeSwiper;
        let vibePagination;
        let cardSwiper;
        function initSliders() {
            destroySwiper();
            if (document.querySelector(".vibe-block__slider")) {
                vibeSwiper = new Swiper(".vibe-block__slider", {
                    modules: [ Pagination ],
                    observer: true,
                    observeParents: true,
                    slidesPerView: 3,
                    spaceBetween: 0,
                    autoHeight: true,
                    speed: 800,
                    loop: true,
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true,
                        type: "bullets",
                        dynamicBullets: true,
                        dynamicMainBullets: 3
                    },
                    breakpoints: {
                        320: {},
                        768: {},
                        992: {},
                        1268: {}
                    },
                    on: {}
                });
                vibePagination = vibeSwiper.pagination;
            }
        }
        window.addEventListener("resize", (function() {
            if (window.innerWidth < 767.98) initSliderView(); else destroySwiperCardPage();
        }));
        function initSliderView() {
            if (document.querySelector(".view-block__pictures") && window.innerWidth < 767.98) {
                createSliderCardPage();
                cardSwiper = new Swiper(".view-block__slider", {
                    modules: [ Pagination ],
                    observer: true,
                    observeParents: true,
                    slidesPerView: 1,
                    spaceBetween: 0,
                    autoHeight: true,
                    speed: 800,
                    loop: true,
                    pagination: {
                        el: ".view-block__pagination",
                        type: "fraction"
                    },
                    breakpoints: {
                        320: {},
                        768: {},
                        992: {},
                        1268: {}
                    },
                    on: {}
                });
            }
        }
        window.addEventListener("load", (function(e) {
            initSliders();
            initSliderView();
        }));
        function destroySwiper() {
            if (vibeSwiper !== void 0 && vibeSwiper !== null && document.querySelector("title").innerHTML == "Главная") {
                vibeSwiper.destroy();
                vibeSwiper = null;
            }
        }
        function destroySwiperCardPage() {
            if (cardSwiper !== void 0 && cardSwiper !== null && document.querySelector("title").innerHTML == "Card-page") {
                cardSwiper.destroy();
                cardSwiper = null;
                const mainImg = document.querySelector("#mainImage");
                const allImagesCardSwiper = document.querySelectorAll(".view-block__small-picture");
                const allImagesCardSwiperArray = Array.from(allImagesCardSwiper);
                const filteredAllImagesCardSwiperArray = allImagesCardSwiperArray.filter((el => el.id !== "mainImage"));
                const wrapperImages = document.querySelector(".view-block__pictures");
                while (wrapperImages.firstChild) wrapperImages.removeChild(wrapperImages.firstChild);
                const smallsImgWrapper = document.createElement("div");
                wrapperImages.appendChild(mainImg);
                wrapperImages.appendChild(smallsImgWrapper);
                smallsImgWrapper.classList.add("view-block__small-pictures");
                filteredAllImagesCardSwiperArray.forEach((item => {
                    smallsImgWrapper.appendChild(item);
                }));
            }
        }
        function checkScreenWidth() {
            if (window.innerWidth < 767.98) {
                if (vibePagination) vibePagination.el.style.display = "none";
                destroySwiper();
            } else {
                if (vibePagination) vibePagination.el.style.display = "";
                initSliders();
            }
        }
        window.onload = function() {
            checkScreenWidth();
        };
        window.addEventListener("resize", (function() {
            checkScreenWidth();
        }));
        window.addEventListener("resize", (function() {
            if (vibeSwiper && vibePagination) {
                vibePagination.destroy();
                vibePagination.init();
                vibePagination.update();
            }
        }));
        function createSliderCardPage() {
            if (document.querySelector(".view-block__slider")) ; else {
                const wrapperImages = document.querySelector(".view-block__pictures");
                const allImagesCardSwiper = document.querySelectorAll(".view-block__small-picture");
                const appendBlock = document.querySelector(".view-block__pictures");
                const sliderSwiperCard = document.createElement("div");
                const wrapperSwiperCard = document.createElement("div");
                const pagiantionViewBlock = document.createElement("div");
                while (wrapperImages.firstChild) wrapperImages.removeChild(wrapperImages.firstChild);
                sliderSwiperCard.classList.add("view-block__slider", "swiper");
                wrapperSwiperCard.classList.add("view-block__wrapper", "swiper-wrapper");
                pagiantionViewBlock.classList.add("view-block__pagination");
                appendBlock.appendChild(sliderSwiperCard);
                sliderSwiperCard.appendChild(wrapperSwiperCard);
                sliderSwiperCard.appendChild(pagiantionViewBlock);
                allImagesCardSwiper.forEach((item => {
                    item.classList.add("view-block__slide", "swiper-slide");
                    wrapperSwiperCard.appendChild(item);
                }));
            }
        }
        let addWindowScrollEvent = false;
        setTimeout((() => {
            if (addWindowScrollEvent) {
                let windowScroll = new Event("windowScroll");
                window.addEventListener("scroll", (function(e) {
                    document.dispatchEvent(windowScroll);
                }));
            }
        }), 0);
        function DynamicAdapt(type) {
            this.type = type;
        }
        DynamicAdapt.prototype.init = function() {
            const _this = this;
            this.оbjects = [];
            this.daClassname = "_dynamic_adapt_";
            this.nodes = document.querySelectorAll("[data-da]");
            for (let i = 0; i < this.nodes.length; i++) {
                const node = this.nodes[i];
                const data = node.dataset.da.trim();
                const dataArray = data.split(",");
                const оbject = {};
                оbject.element = node;
                оbject.parent = node.parentNode;
                оbject.destination = document.querySelector(dataArray[0].trim());
                оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
                оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
                оbject.index = this.indexInParent(оbject.parent, оbject.element);
                this.оbjects.push(оbject);
            }
            this.arraySort(this.оbjects);
            this.mediaQueries = Array.prototype.map.call(this.оbjects, (function(item) {
                return "(" + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
            }), this);
            this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, (function(item, index, self) {
                return Array.prototype.indexOf.call(self, item) === index;
            }));
            for (let i = 0; i < this.mediaQueries.length; i++) {
                const media = this.mediaQueries[i];
                const mediaSplit = String.prototype.split.call(media, ",");
                const matchMedia = window.matchMedia(mediaSplit[0]);
                const mediaBreakpoint = mediaSplit[1];
                const оbjectsFilter = Array.prototype.filter.call(this.оbjects, (function(item) {
                    return item.breakpoint === mediaBreakpoint;
                }));
                matchMedia.addListener((function() {
                    _this.mediaHandler(matchMedia, оbjectsFilter);
                }));
                this.mediaHandler(matchMedia, оbjectsFilter);
            }
        };
        DynamicAdapt.prototype.mediaHandler = function(matchMedia, оbjects) {
            if (matchMedia.matches) for (let i = 0; i < оbjects.length; i++) {
                const оbject = оbjects[i];
                оbject.index = this.indexInParent(оbject.parent, оbject.element);
                this.moveTo(оbject.place, оbject.element, оbject.destination);
            } else for (let i = оbjects.length - 1; i >= 0; i--) {
                const оbject = оbjects[i];
                if (оbject.element.classList.contains(this.daClassname)) this.moveBack(оbject.parent, оbject.element, оbject.index);
            }
        };
        DynamicAdapt.prototype.moveTo = function(place, element, destination) {
            element.classList.add(this.daClassname);
            if (place === "last" || place >= destination.children.length) {
                destination.insertAdjacentElement("beforeend", element);
                return;
            }
            if (place === "first") {
                destination.insertAdjacentElement("afterbegin", element);
                return;
            }
            destination.children[place].insertAdjacentElement("beforebegin", element);
        };
        DynamicAdapt.prototype.moveBack = function(parent, element, index) {
            element.classList.remove(this.daClassname);
            if (parent.children[index] !== void 0) parent.children[index].insertAdjacentElement("beforebegin", element); else parent.insertAdjacentElement("beforeend", element);
        };
        DynamicAdapt.prototype.indexInParent = function(parent, element) {
            const array = Array.prototype.slice.call(parent.children);
            return Array.prototype.indexOf.call(array, element);
        };
        DynamicAdapt.prototype.arraySort = function(arr) {
            if (this.type === "min") Array.prototype.sort.call(arr, (function(a, b) {
                if (a.breakpoint === b.breakpoint) {
                    if (a.place === b.place) return 0;
                    if (a.place === "first" || b.place === "last") return -1;
                    if (a.place === "last" || b.place === "first") return 1;
                    return a.place - b.place;
                }
                return a.breakpoint - b.breakpoint;
            })); else {
                Array.prototype.sort.call(arr, (function(a, b) {
                    if (a.breakpoint === b.breakpoint) {
                        if (a.place === b.place) return 0;
                        if (a.place === "first" || b.place === "last") return 1;
                        if (a.place === "last" || b.place === "first") return -1;
                        return b.place - a.place;
                    }
                    return b.breakpoint - a.breakpoint;
                }));
                return;
            }
        };
        const da = new DynamicAdapt("max");
        da.init();
        const indexPage = {
            "header__btn-subMenu": {
                ru: "RU",
                en: "EN",
                de: "DE"
            },
            "header__title-1": {
                ru: "Главная",
                en: "Home",
                de: "Hauptsaechliche"
            },
            "header__title-2": {
                ru: "Размещение",
                en: "Accommodation",
                de: "Platzierung"
            },
            "header__title-3": {
                ru: "Достопримечательности",
                en: "Attractions",
                de: "Hauptsaechliche"
            },
            "header__title-4": {
                ru: "Специальные предложения",
                en: "Special Offers",
                de: "Sonderangebot"
            },
            "header__title-5": {
                ru: "Атмосфера",
                en: "Vibe",
                de: "Die Atmosphäre"
            },
            "header__title-6": {
                ru: "Вопросы",
                en: "FAQ",
                de: "Fragen"
            },
            "header__title-7": {
                ru: "Контакты",
                en: "Contacts",
                de: "Kontakte"
            },
            "header__title-8": {
                ru: "Забронировать",
                en: "Books Now",
                de: "Buchen"
            },
            "header__title-9": {
                ru: "Забронировать",
                en: "Books Now",
                de: "Buchen"
            },
            "header__text-1": {
                ru: "Дайте волю своему приключению: лучшее место для гламурного отдыха в Джорджии",
                en: "Unleash Your Adventure: Georgia's Premier Glamping Haven ",
                de: "Lassen Sie Ihrem Abenteuer freien Lauf: Der beste Ort für einen glamourösen Urlaub in Georgia"
            },
            "header__text-2": {
                ru: "Воссоединитесь с природой и заново откройте себя",
                en: "Reconnect with Nature and Rediscover Yourself",
                de: "Vereinige dich mit der Natur und entdecke dich neu"
            },
            hello__title: {
                ru: "Здравствуй, дорогой уважаемый Гость!",
                en: "Hello, dear Esteemed Guest!",
                de: "Hallo, sehr geehrter Gast!"
            },
            "hello__text-1": {
                ru: "Добро пожаловать на наше захватывающее дух место для глэмпинга, расположенное в самом сердце природной красоты Грузии.",
                en: "Welcome to our breathtaking glamping site nestled in the heart of Georgia's natural beauty. ",
                de: "Willkommen in unserem atemberaubenden Glamping-Ort im Herzen der natürlichen Schönheit Georgiens."
            },
            "hello__text-2": {
                ru: "Приготовьтесь создать незабываемые воспоминания и пробудить в себе дух приключений.",
                en: "Get ready to create lasting memories and awaken your adventurous spirit.",
                de: " Bereiten Sie sich darauf vor, unvergessliche Erinnerungen zu schaffen und den Geist des Abenteuers zu wecken."
            },
            "hello__text-3": {
                ru: "Мы здесь для того, чтобы сделать ваш отдых в глэмпинге исключительным во всех отношениях.",
                en: "We are here to make your glamping getaway exceptional in every way.",
                de: "Wir sind hier, um Ihren Urlaub in Glamping in jeder Hinsicht außergewöhnlich zu machen."
            },
            offer__title: {
                ru: "Что мы предлагаем",
                en: "What We Offer",
                de: "Was wir anbieten"
            },
            "offer__item-title-1": {
                ru: "Геодезические купола",
                en: "Geodesic Domes",
                de: "Geodätische Kuppeln"
            },
            "offer__item-text-1": {
                ru: "Каждый купол отделен от другого и расположен на другом расстоянии, так что никто не помешает вашему пребыванию",
                en: "Each dome is separated from other and located another distance so no one will disturb your stay ",
                de: "Jede Kuppel ist von der anderen getrennt und befindet sich in einer anderen Entfernung, so dass niemand Ihren Aufenthalt stören wird"
            },
            "offer__item-title-2": {
                ru: "Зона для костров",
                en: "Fire Zone",
                de: "Feuerzone"
            },
            "offer__item-text-2": {
                ru: "В каждой комнате есть своя каминная зона, а также большой камин в общей зоне для семьи и друзей",
                en: "Each room has its own fire zone, as well as a large fire at the common area for family and friends",
                de: "Jedes Zimmer hat eine eigene Feuerzone sowie ein großes Feuer im Gemeinschaftsbereich für Familie und Freunde"
            },
            "offer__item-title-3": {
                ru: "Местная эко-еда",
                en: "Local Eco Food",
                de: "Lokales Öko-Essen"
            },
            "offer__item-text-3": {
                ru: "Вы можете заказать завтрак, закуски и напитки. Большинство блюд готовят на месте, в ближайших деревнях",
                en: "You can order breakfast, snacks and drinks. Most of the meals are produced locally in the nearest villages ",
                de: "Sie können Frühstück, Snacks und Getränke bestellen. Die meisten Mahlzeiten werden vor Ort in den nächstgelegenen Dörfern hergestellt"
            },
            "offer__item-title-4": {
                ru: "Экологически чистый",
                en: "Eco Friendly",
                de: "Umweltfreundlich"
            },
            "offer__item-text-4": {
                ru: "Мы уделяем приоритетное внимание природе, внедряя раздельный сбор отходов",
                en: "We prioritize nature by implementing separate waste collection",
                de: "Wir priorisieren die Natur, indem wir getrennte Abfallsammlung implementieren"
            },
            "offer__item-title-5": {
                ru: "Технологии",
                en: "Technologies",
                de: "Technologie"
            },
            "offer__item-text-5": {
                ru: "Удаленная регистрация с использованием кода, взаимодействие с персоналом через мессенджеры",
                en: "Remote check-in using a code, interaction with staff via instant messengers",
                de: "Remote-Check-in mit einem Code, Interaktion mit dem Personal über Instant Messenger"
            },
            "offer__item-title-6": {
                ru: "Сауна, Фурако",
                en: "Sauna, Furako",
                de: "Sauna, Furako"
            },
            "offer__item-text-6": {
                ru: "Наслаждайтесь легким паром и холодным погружением, ощущая тепло и снимая стресс",
                en: "Enjoy light steam and cold plunge, feeling the warmth and letting go of stress ",
                de: "Genießen Sie leichten Dampf und kaltes Eintauchen, spüren Sie die Wärme und lassen Sie Stress los"
            },
            "offer__item-title-7": {
                ru: "Собачий друг",
                en: "Dog Friendly",
                de: "Hundefreundlich"
            },
            "offer__item-text-7": {
                ru: "Мы приветствуем гостей с хорошо воспитанными домашними животными",
                en: "We welcome guests with well-mannered  pets",
                de: "Wir begrüßen Gäste mit wohlerzogenen Haustieren"
            },
            "offer__item-title-8": {
                ru: "Пресная вода",
                en: "Fresh Water",
                de: "Süßwasser"
            },
            "offer__item-text-8": {
                ru: "Чистейшая вода из подземного колодца",
                en: "The purest water from an underground well",
                de: "Reinstes Wasser aus einem unterirdischen Brunnen"
            },
            "offer__item-title-9": {
                ru: "Достопримечательности",
                en: "Attractions",
                de: "Sehensw"
            },
            "offer__item-text-9": {
                ru: "Исследуйте близлежащие памятники, монастыри и холмы",
                en: "Explore nearby monuments, monasteries and hills",
                de: "Erkunden Sie nahegelegene Denkmäler, Klöster und Hügel"
            },
            "offer__text-picture-1": {
                ru: " откройте заново",
                en: "rediscover",
                de: "Wiederentdeckung"
            },
            "offer__text-picture-2": {
                ru: "Вашу",
                en: "Your",
                de: "Ihrer"
            },
            "offer__text-picture-3": {
                ru: "Душу",
                en: "Soul",
                de: "Seele"
            },
            "accommodation-coming": {
                ru: "Скоро",
                en: "Coming soon",
                de: "Kommt bald"
            },
            "accommodation-title": {
                ru: "Размещение",
                en: "Accommodation",
                de: "Unterk"
            },
            "accommodation__card-picture-name-1": {
                ru: "Геодезический купол",
                en: "Geodesic dome",
                de: "Geodätische Kuppel"
            },
            "accommodation__card-picture-text-1": {
                ru: "Наслаждайтесь природой, закатами и звездами, не выходя из своей постели",
                en: "Enjoy nature, sunsets and stars from the comfort of your bed",
                de: "Genießen Sie die Natur, Sonnenuntergänge und Sterne bequem von Ihrem Bett aus"
            },
            "accommodation__card1-itemText-1": {
                ru: "Двуспальная кровать: King-size, мягкие и приятные хлопчатобумажные простыни",
                en: "Double bed: King size, soft and pleasant cotton sheets",
                de: "Doppelbett: Kingsize, weiche und angenehme Baumwollbettwäsche"
            },
            "accommodation__card1-itemText-2": {
                ru: "Туалет и душ: отдыхайте на природе в домиках, как дома",
                en: "Toilet and shower: stay in nature with cabins like at home",
                de: "Toilette und Dusche: Bleiben Sie in der Natur mit Kabinen wie zu Hause"
            },
            "accommodation__card1-itemText-3": {
                ru: "Отопление: кондиционер в помещении и камины зимой",
                en: "Heating: indoor air conditioning unit and fireplaces in winter",
                de: "Heizung: Innenklimaanlage und Kamine im Winter"
            },
            "accommodation__card1-itemText-4": {
                ru: "Питьевая вода, чай, посуда, стаканы, столовые приборы и т.д.",
                en: "Drinking water, tea, dishes, glasses, cutlery, etc.",
                de: "Trinkwasser, Tee, Geschirr, Gläser, Besteck usw."
            },
            "accommodation__card1-itemText-5": {
                ru: "Площадка для разведения костра с видом на холмы",
                en: "Bonfire area with a view of the hills",
                de: "Lagerfeuerplatz mit Blick auf die Hügel"
            },
            "accommodation__card1-itemText-6": {
                ru: "Детали Комод, вешалки, полотенца, зеркало",
                en: "Details Chest of drawers, hangers, towels, mirror",
                de: "Details Kommode, Kleiderbügel, Handtücher, Spiegel"
            },
            "accommodation__card1-itemList-1": {
                ru: "Возможно размещение трех человек",
                en: "Possible three-person accommodation",
                de: "Mögliche Drei-Personen-Unterkunft"
            },
            "accommodation__card1-itemList-2": {
                ru: "Дети в возрасте до 6 лет размещаются бесплатно",
                en: "Сhildren under the age of 6 stay free of charge",
                de: "Kinder unter 6 Jahren übernachten kostenlos"
            },
            "accommodation__card1-itemList-3": {
                ru: "Заезд в 14:00, выезд в 12:00",
                en: "Check-in at 14:00, check-out at 12:00",
                de: "Anreise um 14:00 Uhr, Abreise um 12:00 Uhr"
            },
            "accommodation__card1-btn": {
                ru: "Забранировать",
                en: "Book now",
                de: "Jetzt buchen"
            },
            "accommodation__card-picture-name-2": {
                ru: "Кабина / палатка с А-образной рамой",
                en: "A-Frame cabin/tent",
                de: "Kabine /Zelt mit A-Rahmen"
            },
            "accommodation__card-picture-text-2": {
                ru: "Погрузитесь в природу с деревенским шармом и современным комфортом",
                en: "Immerse yourself in nature with rustic charm and modern comfort",
                de: "Eintauchen in die Natur mit rustikalem Charme und modernem Komfort"
            },
            "accommodation__card2-itemText-1": {
                ru: "2 двуспальные кровати: King-size, матрас, белоснежное постельное белье",
                en: "2 Double beds: King size, mattress Snow White linens",
                de: "2 Doppelbetten: Kingsize, Matratze Schneeweiße Bettwäsche"
            },
            "accommodation__card2-itemText-2": {
                ru: "Отопление: тепловая пушка",
                en: "Heating: heat gun",
                de: "Heizung: Heißluftpistole"
            },
            "accommodation__card2-itemText-3": {
                ru: "Чайный сервиз, питьевая вода, чай, посуда, стаканы, столовые приборы и т.д. вы можете взять с собой - БЕЗ дополнительной оплаты",
                en: "A tea set Drinking water, tea, crockery, glasses, cutlery, etc. you can take - NO extra charges",
                de: "Ein Teeservice Trinkwasser, Tee, Geschirr, Gläser, Besteck usw. sie können nehmen - KEINE zusätzlichen Gebühren"
            },
            "accommodation__card2-itemText-4": {
                ru: "Площадка для разведения костра с прекрасным видом на холмы",
                en: "Campfire area with a beautiful view of the hills",
                de: "Lagerfeuerplatz mit schöner Aussicht auf die Hügel"
            },
            "accommodation__card2-itemText-5": {
                ru: "На территории глэмпинга общего пользования:",
                en: "On the territory of the glamping in common use:",
                de: "Auf dem Territorium des Glamping im gemeinsamen Gebrauch:"
            },
            "accommodation__card2-itemText-6": {
                ru: "Летняя кухня (микроволновая печь, холодильник, плита, гриль-барбекю, казан, посуда и т.д.)",
                en: "Summer cuisine (microwave, refrigerator, stove, barbecue grill, cauldron, dishes, etc.)",
                de: "sommerküche (Mikrowelle, Kühlschrank, Herd, Grill, Kessel, Geschirr usw.).)"
            },
            "accommodation__card2-itemText-7": {
                ru: "Гостиная с открытым камином",
                en: "Lounge with open fire",
                de: "Lounge mit offenem Kamin"
            },
            "accommodation__card2-itemText-8": {
                ru: "Душ (горячая, холодная вода), туалет",
                en: "Shower (hot, cold water), toilet",
                de: "Susche (warmes, kaltes Wasser), WC"
            },
            "accommodation__card2-itemList-1": {
                ru: "Возможно размещение трех человек",
                en: "Possible three-person accommodation",
                de: "Mögliche Drei-Personen-Unterkunft"
            },
            "accommodation__card2-itemList-2": {
                ru: "Дети в возрасте до 6 лет размещаются бесплатно",
                en: "Сhildren under the age of 6 stay free of charge",
                de: "Kinder unter 6 Jahren übernachten kostenlos"
            },
            "accommodation__card2-itemList-3": {
                ru: "Заезд в 14:00, выезд в 12:00",
                en: "Check-in at 14:00, check-out at 12:00",
                de: "Anreise um 14:00 Uhr, Abreise um 12:00 Uhr"
            },
            "accommodation__card2-btn": {
                ru: "Забранировать",
                en: "Book now",
                de: "Jetzt buchen"
            },
            "accommodation__card-picture-name-3": {
                ru: "Сауна, Фурако",
                en: "Sauna, Furako",
                de: "Sauna in Furaco"
            },
            "accommodation__card-picture-text-3": {
                ru: "Встретьте тепло и расслабление в совершенной гармонии природы",
                en: "Meet warmth relaxation in the perfect harmony of nature",
                de: "Treffen Sie Wärme Entspannung in der perfekten Harmonie der Natur"
            },
            "accommodation__card3-itemText-1": {
                ru: "Уютная ванна с панорамным окном",
                en: "Cozy bath with a panoramic window",
                de: "Gemütliches Bad mit Panoramafenster"
            },
            "accommodation__card3-itemText-2": {
                ru: "Туалет и душевая кабина",
                en: "Toilet and shower",
                de: "Toilette und Dusche"
            },
            "accommodation__card3-itemText-3": {
                ru: "Чайная зона и вкусный травяной чай",
                en: "Tea area and delicious herbal tea",
                de: "Teebereich und köstlicher Kräutertee"
            },
            "accommodation__card3-itemText-4": {
                ru: "Раздевалка",
                en: "Locker room",
                de: "Umkleidekabine"
            },
            "accommodation__card3-itemText-5": {
                ru: "Купель с горячей или холодной водой (по запросу)",
                en: "Font with hot or cold water (on request)",
                de: "Brunnen mit heißem oder kaltem Wasser (auf Anfrage)"
            },
            "accommodation__card3-itemText-6": {
                ru: "Место для костра и барбекю",
                en: "Campfire and bbq area",
                de: "Lagerfeuer- und Grillplatz"
            },
            "accommodation__card3-nameList": {
                ru: "Что делать в спа-центре запрещено:",
                en: "What to do in the SPA area is not allowed:",
                de: "Was im Wellnessbereich zu tun ist, ist nicht erlaubt:"
            },
            "accommodation__card3-itemList-1": {
                ru: "Поверните ручки для регулировки нагрева обогревателя",
                en: "Turn the knobs for adjusting the heating of the heater",
                de: "Drehen Sie die Knöpfe zum Einstellen der Heizung der Heizung"
            },
            "accommodation__card3-itemList-2": {
                ru: "Обильно поливайте камни и используйте ароматические масла и соли",
                en: "Plentifully water the stones and use aroma oils and salts",
                de: "Gießen Sie die Steine reichlich und verwenden Sie Aromaöle und Salze"
            },
            "accommodation__card3-itemList-3": {
                ru: "Находиться в состоянии алкогольного опьянения",
                en: "Be under the influence of alcohol",
                de: "Unter dem Einfluss von Alkohol stehen"
            },
            "accommodation__card3-itemList-4": {
                ru: "Оставлять детей без присмотра",
                en: "Leave children unattended",
                de: "Kinder unbeaufsichtigt lassen"
            },
            "accommodation__card3-itemList-5": {
                ru: "Длительное пребывание в термальной зоне",
                en: "Stay long in the thermal zone",
                de: "Bleiben Sie lange in der Thermalzone"
            },
            "accommodation__card3-btn": {
                ru: "Забранировать",
                en: "Book now",
                de: "Jetzt buchen"
            },
            "vibe-title": {
                ru: "Атмосфера",
                en: "Vibe",
                de: "Vibe"
            },
            "notes-title": {
                ru: "Важные примечания",
                en: "Important notes",
                de: "Wichtige Hinweise"
            },
            "block-concept-title": {
                ru: "Концепция",
                en: "Concept",
                de: "Konzept"
            },
            "block-concept-text": {
                ru: "Глэмпинг - это место, где городской комфорт встречается с первозданной природой. Мы отдыхаем душой, просыпаясь от пения птиц, попивая кофе на верандах, общаясь с друзьями и семьей, сидя у камина, дегустируя вино, занимаясь йогой, готовя еду и катаясь на велосипеде. Формат нашего глэмпинга предполагает экологически чистое отношение к природе и другим людям, мы за тишину и атмосферу добрососедства.",
                en: "Glamping is a place where urban comfort meets pristine nature. We relax our souls by waking up from birdsong, drinking coffee on the verandas, chatting with friends and family sitting by the fire, tasting wine, doing yoga, cooking and cycling. The format of our glamping involves an environmentally friendly attitude towards nature and other people, we are for silence and an atmosphere of good neighborliness.",
                de: "Glamping ist ein Ort, an dem urbaner Komfort auf unberührte Natur trifft. Wir entspannen unsere Seelen, indem wir vom Vogelgezwitscher aufwachen, Kaffee auf den Veranden trinken, mit Freunden und Familie am Feuer sitzen, Wein probieren, Yoga machen, kochen und Radfahren. Das Format unseres Glampings beinhaltet eine umweltfreundliche Haltung gegenüber der Natur und anderen Menschen, wir stehen für Stille und eine Atmosphäre guter Nachbarschaft."
            },
            "area-block-title": {
                ru: "Что находится в зоне общего пользования:",
                en: "What is in the common area:",
                de: "Was ist im Gemeinschaftsbereich:"
            },
            "notes__item-title-1": {
                ru: "Кухня с посудой",
                en: "Kitchen with utensils",
                de: "Küche mit Geschirr"
            },
            "notes__item-text-1": {
                ru: "Холодильник, электрическая плита, микроволновая печь, зона для приготовления барбекю и казан",
                en: "Refrigerator, electric stove, microwave, barbecue grill area and cauldron",
                de: "Refrigerator, electric stove, microwave, barbecue grill area and cauldron"
            },
            "notes__item-title-2": {
                ru: "Костер на открытом воздухе",
                en: "Outdoor campfire",
                de: "Lagerfeuer im Freien"
            },
            "notes__item-text-2": {
                ru: "Внимание! По соображениям безопасности пользуйтесь сайтом только в безветренную погоду",
                en: "Attention! For safety reasons, use the site only in calm weather",
                de: "Achtung! Benutzen Sie den Platz aus Sicherheitsgründen nur bei ruhigem Wetter"
            },
            "notes__item-title-3": {
                ru: "Парковка",
                en: "Parking",
                de: "Parkplatz"
            },
            "notes__item-text-3": {
                ru: "Для всех гостей предусмотрено парковочное место с видеонаблюдением",
                en: "For all guests there is a parking space with video surveillance",
                de: "Für alle Gäste gibt es einen Parkplatz mit Videoüberwachung"
            },
            "notes__item-title-4": {
                ru: "Веранда",
                en: "Veranda",
                de: "Veranda"
            },
            "notes__item-text-4": {
                ru: "Удобное место для празднования особых мероприятий с семьей и друзьями",
                en: "Comfortable place for celebration special events with family and friends  ",
                de: "Gemütlicher Ort zum Feiern von besonderen Anlässen mit Familie und Freunden"
            },
            "notesr__item-title-5": {
                ru: "Плавательный бассейн",
                en: "Swimming pool",
                de: "Pool"
            },
            "notes__item-text-5": {
                ru: "Летом открыт девятиметровый бассейн с чистой водой и шезлонгами",
                en: "A nine-meter pool with clean water and sunbeds  are open in summer",
                de: "Ein neun Meter langer Pool mit sauberem Wasser und Sonnenliegen ist im Sommer geöffnet"
            },
            "notes__item-title-6": {
                ru: "Игровая площадка",
                en: "Playground",
                de: "Kinderspielplatz"
            },
            "notes__item-text-6": {
                ru: "На территории есть экологичная и современная игровая площадка для детей",
                en: "The territory has an ecological and modern playground for children",
                de: "Das Gebiet verfügt über einen ökologischen und modernen Spielplatz für Kinder"
            },
            "plannin-block-title": {
                ru: "Что я должен учитывать при планировании вашего визита:",
                en: "What should I consider when planning your visit:",
                de: "Was sollte ich bei der Planung Ihres Besuchs beachten:"
            },
            "plannin-block-text": {
                ru: "Для нас важно не нарушать хрупкий экологический баланс этого района. Поэтому мы убедительно просим вас:",
                en: "It is important for us not to disturb the fragile ecological balance of the area. Therefore, we kindly ask you:",
                de: "Es ist uns wichtig, das fragile ökologische Gleichgewicht der Region nicht zu stören. Deshalb bitten wir Sie:"
            },
            "plannin-block-list-item-1": {
                ru: "не мешайте другим гостям и соблюдайте тишину",
                en: "don’t disturb other guests, and keep quiet",
                de: "stören Sie andere Gäste nicht und bleiben Sie ruhig"
            },
            "plannin-block-list-item-2": {
                ru: "не трогайте чужих животных",
                en: "don’t touch other people's animals",
                de: "berühre keine Tiere anderer Leute"
            },
            "plannin-block-list-item-3": {
                ru: "присматривайте за своими детьми и животными",
                en: "watch over your children and animals",
                de: "pass auf deine Kinder und Tiere auf"
            },
            "plannin-block-list-item-4": {
                ru: "не курить",
                en: "no smoking",
                de: "nichtraucher"
            },
            "plannin-block-list-item-5": {
                ru: "соблюдайте культуру употребления алкоголя",
                en: "observe the culture of drinking alcohol",
                de: "beobachten Sie die Kultur des Alkoholkonsums"
            },
            "plannin-block-list-item-6": {
                ru: "будьте осторожны с огнем",
                en: "be careful with fire",
                de: "sei vorsichtig mit Feuer"
            },
            "plannin-block-list-item-7": {
                ru: "не мусорьте",
                en: "don’t litter",
                de: "nicht wegwerfen"
            },
            "plannin-block-list-item-8": {
                ru: "заботьтесь обо всех природных объектах",
                en: "take care of all natural objects",
                de: "kümmere dich um alle natürlichen Gegenstände"
            },
            "spoller-title-1": {
                ru: "Можно ли прийти к вам с собакой?",
                en: "Is it possible to come to you with a dog?",
                de: "Ist es möglich, mit einem Hund zu Ihnen zu kommen?"
            },
            "spoller-title-2": {
                ru: "Во сколько производится регистрация заезда и отъезда?",
                en: "What time is check in and check out?",
                de: "Wann ist Check-in und Check-out?"
            },
            "spoller-title-3": {
                ru: "Что я должен взять с собой?",
                en: "What should I bring with me?",
                de: "Was soll ich mitbringen?"
            },
            "spoller-title-4": {
                ru: "Как далеко друг от друга расположены купола?",
                en: "How far apart are the domes?  ",
                de: "Wie weit sind die Kuppeln voneinander entfernt?"
            },
            "spoller-title-5": {
                ru: "Удобна ли дорога к глэмпингу?",
                en: "Is the road to the glamping convenient?",
                de: "Ist der Weg zum Glamping bequem?"
            },
            "spoller-title-6": {
                ru: "Что мне делать, если моя поездка отменяется?",
                en: "What should I do if my trip is cancelled?",
                de: "Was soll ich tun, wenn meine Reise storniert wird?"
            },
            "spoller-title-7": {
                ru: "Как я могу добраться до глэмпинга?",
                en: "How can I get to glamping?",
                de: "Wie komme ich zum Glamping?"
            },
            "contacts-title": {
                ru: "Контакты.",
                en: "Contacts",
                de: "Kontakt"
            },
            "contacts-text-1": {
                ru: "Наш глэмпинг расположен в 30 км от Тбилиси.",
                en: "Our glamping is located 30 km from Tbilisi.",
                de: "Unser Glamping liegt 30 km von Tiflis entfernt."
            },
            "contacts-text-2": {
                ru: "Адрес: Грузия,Внутренняя Картли, муниципалитет Каспи, Кавтисхеви,",
                en: "Adress: Georgia,Inner Kartli, KaspiMunicipality, Kavtiskhevi,",
                de: "Adresse: Georgien,Inneres Kartli, Gemeinde Kaspi, Kavt'iskhevi,"
            },
            "contacts-text-3": {
                ru: "Номер телефона:",
                en: "Phone number:",
                de: "Telefonnummer:"
            },
            "contacts-text-4": {
                ru: "Электронная почта:",
                en: "Email:",
                de: "Email:"
            },
            "footer-link-1": {
                ru: "Главная",
                en: "Home",
                de: "Hauptsaechliche"
            },
            "footer-link-2": {
                ru: "Размещение",
                en: "Accommodation",
                de: "Platzierung"
            },
            "footer-link-3": {
                ru: "Достопримечательности",
                en: "Attractions",
                de: "Hauptsaechliche"
            },
            "footer-link-4": {
                ru: "Спецаильные предложения",
                en: "Special Offers",
                de: "Sonderangebot"
            },
            "footer-link-5": {
                ru: "Атмосфера",
                en: "Vibe",
                de: "Die Atmosphäre"
            },
            "footer-link-6": {
                ru: "Вопросы",
                en: "FAQ",
                de: "Fragen"
            },
            "footer-link-7": {
                ru: "Контакты",
                en: "Contacts",
                de: "Kontakte"
            },
            "footer-sub-title-1": {
                ru: "Адрес",
                en: "Adress",
                de: "Anschrift"
            },
            "footer-sub-title-2": {
                ru: "Номер телефона",
                en: "Phone number",
                de: "Telefonnummer"
            },
            "footer-sub-title-3": {
                ru: "Электронная почта:",
                en: "E-mail:",
                de: "E-mail:"
            },
            "footer-sub-text-1": {
                ru: "Грузия, Внутренняя Картли, муниципалитет Каспи,Кавтисхеви, 41.869560 44.448465",
                en: "Georgia, Inner Kartli, Kaspi Municipality,Kavtiskhevi, 41.869560 44.448465",
                de: "Georgien, Innere Kartlien, Kaspi Gemeinde,Kawtischewi, 41.869560 44.448465"
            }
        };
        const certificatesPage = {
            "header__btn-subMenu": {
                ru: "RU",
                en: "EN",
                de: "DE"
            },
            "header__title-1": {
                ru: "Главная",
                en: "Home",
                de: "Hauptsaechliche"
            },
            "header__title-2": {
                ru: "Размещение",
                en: "Accommodation",
                de: "Platzierung"
            },
            "header__title-3": {
                ru: "Достопримечательности",
                en: "Attractions",
                de: "Hauptsaechliche"
            },
            "header__title-4": {
                ru: "Специальные предложения",
                en: "Special Offers",
                de: "Sonderangebot"
            },
            "header__title-5": {
                ru: "Атмосфера",
                en: "Vibe",
                de: "Die Atmosphäre"
            },
            "header__title-6": {
                ru: "Вопросы",
                en: "FAQ",
                de: "Fragen"
            },
            "header__title-7": {
                ru: "Контакты",
                en: "Contacts",
                de: "Kontakte"
            },
            "header__title-8": {
                ru: "Забронировать",
                en: "Books Now",
                de: "Buchen"
            },
            "header__title-9": {
                ru: "Забронировать",
                en: "Books Now",
                de: "Buchen"
            },
            "header__text-1": {
                ru: "Подарочные сертификаты",
                en: "Gift certificates",
                de: "Geschenkbescheinigungen"
            },
            "footer-link-1": {
                ru: "Главная",
                en: "Home",
                de: "Hauptsaechliche"
            },
            "footer-link-2": {
                ru: "Размещение",
                en: "Accommodation",
                de: "Platzierung"
            },
            "footer-link-3": {
                ru: "Достопримечательности",
                en: "Attractions",
                de: "Hauptsaechliche"
            },
            "footer-link-4": {
                ru: "Спецаильные предложения",
                en: "Special Offers",
                de: "Sonderangebot"
            },
            "footer-link-5": {
                ru: "Атмосфера",
                en: "Vibe",
                de: "Die Atmosphäre"
            },
            "footer-link-6": {
                ru: "Вопросы",
                en: "FAQ",
                de: "Fragen"
            },
            "footer-link-7": {
                ru: "Контакты",
                en: "Contacts",
                de: "Kontakte"
            },
            "footer-sub-title-1": {
                ru: "Адрес",
                en: "Adress",
                de: "Anschrift"
            },
            "footer-sub-title-2": {
                ru: "Номер телефона",
                en: "Phone number",
                de: "Telefonnummer"
            },
            "footer-sub-title-3": {
                ru: "Электронная почта:",
                en: "E-mail:",
                de: "E-mail:"
            },
            "footer-sub-text-1": {
                ru: "Грузия, Внутренняя Картли, муниципалитет Каспи,Кавтисхеви, 41.869560 44.448465",
                en: "Georgia, Inner Kartli, Kaspi Municipality,Kavtiskhevi, 41.869560 44.448465",
                de: "Georgien, Innere Kartlien, Kaspi Gemeinde,Kawtischewi, 41.869560 44.448465"
            },
            "block-text-1": {
                ru: "Подарочный сертификат glamping - это воплощение идеального подарка для любителей приключений и отдыха.",
                en: "A glamping gift certificate is the epitome of a perfect present for adventure and relaxation enthusiasts.",
                de: "Ein Glamping-Geschenkgutschein ist der Inbegriff eines perfekten Geschenks für Abenteuer- und Entspannungsbegeisterte."
            },
            "block-text-2": {
                ru: "Это возможность воссоединиться с природой в комфорте и стиле, создавая заветные воспоминания в захватывающих дух природных условиях. С подарочным сертификатом glamping вы дарите радость прогулок на свежем воздухе и роскошь уютных уединений - все в одной восхитительной упаковке",
                en: "It's a ticket to reconnect with nature in comfort and style, creating cherished memories in breathtaking natural settings. With a glamping gift certificate, you're gifting the joy of outdoor escapades and the luxury of cozy retreats, all in one delightful package",
                de: "Es ist eine Eintrittskarte, um sich mit Komfort und Stil wieder mit der Natur zu verbinden und wertvolle Erinnerungen in atemberaubender Naturlandschaft zu schaffen. Mit einem Glamping-Geschenkgutschein schenken Sie die Freude an Outdoor-Eskapaden und den Luxus gemütlicher Rückzugsorte in einem entzückenden Paket"
            },
            "what-certificates-title": {
                ru: "Какие сертификаты у нас есть",
                en: "What certificates we have",
                de: "Welche Zertifikate wir haben"
            },
            "how-to-use-title": {
                ru: "Как использовать сертификат",
                en: "How to use the certificate",
                de: "So verwenden Sie das Zertifikat"
            },
            "mindori-title": {
                ru: "Что делать в Мидори",
                en: "What to do at Mindori",
                de: "Was tun bei Midori"
            },
            "mindori-text-card-1": {
                ru: "Расслабьтесь и восстановите силы с помощью безмятежных занятий йогой на лоне природы",
                en: "Relax and rejuvenate with serene yoga sessions amidst nature",
                de: "Entspannen und regenerieren Sie sich bei ruhigen Yoga-Sitzungen inmitten der Natur"
            },
            "mindori-text-card-2": {
                ru: "Отправляйтесь в захватывающие велосипедные приключения",
                en: "Embark on thrilling biking adventures ",
                de: "Begeben Sie sich auf aufregende Bike-Abenteuer"
            },
            "mindori-text-card-3": {
                ru: "Побалуйте себя абсолютным расслаблением в окружении спокойствия природы",
                en: "Indulge in ultimate relaxation, surrounded by nature's tranquility",
                de: "Gönnen Sie sich ultimative Entspannung, umgeben von der Ruhe der Natur"
            },
            "mindori-text-card-4": {
                ru: "Соберитесь вокруг и насладитесь настольными играми и дартсом",
                en: "Gather around and enjoy board games and darts",
                de: "Versammeln Sie sich und genießen Sie Brettspiele und Darts"
            },
            "mindori-text-card-5": {
                ru: "Насладитесь обжигающими блюдами барбекю под открытым небом",
                en: "Delight in sizzling BBQ feasts  under the open sky",
                de: "Genießen Sie brutzelnde Grillfeste unter freiem Himmel"
            },
            "mindori-text-card-change-1": {
                ru: "Расслабляющие занятия йогой",
                en: "Relax yoga sessions",
                de: "Entspannungs-Yoga-Sitzungen"
            },
            "mindori-text-card-change-2": {
                ru: "Отправляйтесь в захватывающие велосипедные приключения",
                en: "Embark on thrilling biking adventures ",
                de: "Begeben Sie sich auf aufregende Bike-Abenteuer"
            },
            "mindori-text-card-change-3": {
                ru: "Почувствуйте природу",
                en: "Feel the nature",
                de: "Spüren Sie die Natur"
            },
            "mindori-text-card-change-4": {
                ru: "Наслаждайтесь настольными играми",
                en: "Enjoy board games",
                de: "Genießen Sie Brettspiele"
            },
            "mindori-text-card-change-5": {
                ru: "Насладитесь обжигающим барбекю",
                en: "Delight in sizzling BBQ",
                de: "Genießen Sie brutzelndes BBQ"
            },
            "how-to-buy-title": {
                ru: "Как купить сертификат",
                en: "How to buy a certificate",
                de: "So kaufen Sie ein Zertifikat"
            },
            "how-to-buy-text-1": {
                ru: "Пожалуйста, выберите сумму, на которую вы хотите приобрести сертификат.",
                en: "Please  choose the amount for which you want to buy a certificate.",
                de: "Bitte wählen Sie den Betrag, für den Sie ein Zertifikat kaufen möchten."
            },
            "how-to-buy-text-2": {
                ru: "Сертификат действителен в течение 1 года.",
                en: "The certificate is valid for 1 year.",
                de: "Das Zertifikat ist 1 Jahr gültig."
            },
            "how-to-buy-text-3": {
                ru: "Если у вас есть какие-либо вопросы, заполните контактную форму, и наши менеджеры свяжутся с вами в ближайшее время.",
                en: "If you have any questions, fill in the contact form, and our managers will contact you shortly.",
                de: "Wenn Sie Fragen haben, füllen Sie das Kontaktformular aus und unsere Manager werden sich in Kürze mit Ihnen in Verbindung setzen."
            },
            "how-to-buy-text-4": {
                ru: "Мы обсудим информацию о наилучших вариантах с учетом ваших предпочтений и требований.",
                en: "We'll discuss the information about the best options tailored to your preferences and requirements.",
                de: "Wir besprechen die Informationen über die besten Optionen, die auf Ihre Vorlieben und Anforderungen zugeschnitten sind."
            },
            "how-to-buy-choose-ammount": {
                ru: "Выберите сумму",
                en: "Choose the amount",
                de: "Wählen Sie den Betrag"
            },
            "how-to-buy-certificate": {
                ru: "Купите сертификат",
                en: "Buy a certificate",
                de: "Kaufen Sie ein Zertifikat"
            },
            "how-to-buy-form-label-1": {
                ru: "Имя",
                en: "Name",
                de: "Name"
            },
            "how-to-buy-form-label-2": {
                ru: "Номер телефона",
                en: "Phone number",
                de: "Telefonnummer"
            },
            "how-to-buy-form-btn": {
                ru: "Отправить форму",
                en: "Send a form",
                de: "Senden Sie ein Formular"
            },
            "contacts-title": {
                ru: "Контакты.",
                en: "Contacts",
                de: "Kontakt"
            },
            "contacts-text-1": {
                ru: "Наш глэмпинг расположен в 30 км от Тбилиси.",
                en: "Our glamping is located 30 km from Tbilisi.",
                de: "Unser Glamping liegt 30 km von Tiflis entfernt."
            },
            "contacts-text-2": {
                ru: "Адрес: Грузия,Внутренняя Картли, муниципалитет Каспи, Кавтисхеви,",
                en: "Adress: Georgia,Inner Kartli, KaspiMunicipality, Kavtiskhevi,",
                de: "Adresse: Georgien,Inneres Kartli, Gemeinde Kaspi, Kavt'iskhevi,"
            },
            "contacts-text-3": {
                ru: "Номер телефона:",
                en: "Phone number:",
                de: "Telefonnummer:"
            },
            "contacts-text-4": {
                ru: "Электронная почта:",
                en: "Email:",
                de: "Email:"
            }
        };
        const bookingPage = {
            "header__btn-subMenu": {
                ru: "RU",
                en: "EN",
                de: "DE"
            },
            "header__title-1": {
                ru: "Главная",
                en: "Home",
                de: "Hauptsaechliche"
            },
            "header__title-2": {
                ru: "Размещение",
                en: "Accommodation",
                de: "Platzierung"
            },
            "header__title-3": {
                ru: "Достопримечательности",
                en: "Attractions",
                de: "Hauptsaechliche"
            },
            "header__title-4": {
                ru: "Специальные предложения",
                en: "Special Offers",
                de: "Sonderangebot"
            },
            "header__title-5": {
                ru: "Атмосфера",
                en: "Vibe",
                de: "Die Atmosphäre"
            },
            "header__title-6": {
                ru: "Вопросы",
                en: "FAQ",
                de: "Fragen"
            },
            "header__title-7": {
                ru: "Контакты",
                en: "Contacts",
                de: "Kontakte"
            },
            "header__title-8": {
                ru: "Забронировать",
                en: "Books Now",
                de: "Buchen"
            },
            "header__title-9": {
                ru: "Забронировать",
                en: "Books Now",
                de: "Buchen"
            },
            "footer-link-1": {
                ru: "Главная",
                en: "Home",
                de: "Hauptsaechliche"
            },
            "footer-link-2": {
                ru: "Размещение",
                en: "Accommodation",
                de: "Platzierung"
            },
            "footer-link-3": {
                ru: "Достопримечательности",
                en: "Attractions",
                de: "Hauptsaechliche"
            },
            "footer-link-4": {
                ru: "Спецаильные предложения",
                en: "Special Offers",
                de: "Sonderangebot"
            },
            "footer-link-5": {
                ru: "Атмосфера",
                en: "Vibe",
                de: "Die Atmosphäre"
            },
            "footer-link-6": {
                ru: "Вопросы",
                en: "FAQ",
                de: "Fragen"
            },
            "footer-link-7": {
                ru: "Контакты",
                en: "Contacts",
                de: "Kontakte"
            },
            "footer-sub-title-1": {
                ru: "Адрес",
                en: "Adress",
                de: "Anschrift"
            },
            "footer-sub-title-2": {
                ru: "Номер телефона",
                en: "Phone number",
                de: "Telefonnummer"
            },
            "footer-sub-title-3": {
                ru: "Электронная почта:",
                en: "E-mail:",
                de: "E-mail:"
            },
            "footer-sub-text-1": {
                ru: "Грузия, Внутренняя Картли, муниципалитет Каспи,Кавтисхеви, 41.869560 44.448465",
                en: "Georgia, Inner Kartli, Kaspi Municipality,Kavtiskhevi, 41.869560 44.448465",
                de: "Georgien, Innere Kartlien, Kaspi Gemeinde,Kawtischewi, 41.869560 44.448465"
            },
            "contacts-title": {
                ru: "Контакты.",
                en: "Contacts",
                de: "Kontakt"
            },
            "contacts-text-1": {
                ru: "Наш глэмпинг расположен в 30 км от Тбилиси.",
                en: "Our glamping is located 30 km from Tbilisi.",
                de: "Unser Glamping liegt 30 km von Tiflis entfernt."
            },
            "contacts-text-2": {
                ru: "Адрес: Грузия,Внутренняя Картли, муниципалитет Каспи, Кавтисхеви,",
                en: "Adress: Georgia,Inner Kartli, KaspiMunicipality, Kavtiskhevi,",
                de: "Adresse: Georgien,Inneres Kartli, Gemeinde Kaspi, Kavt'iskhevi,"
            },
            "contacts-text-3": {
                ru: "Номер телефона:",
                en: "Phone number:",
                de: "Telefonnummer:"
            },
            "contacts-text-4": {
                ru: "Электронная почта:",
                en: "Email:",
                de: "Email:"
            },
            "form-in-date": {
                ru: "Дата заезда",
                en: "Check-in date",
                de: "Anreisedatum"
            },
            "form-out-date": {
                ru: "Дата выезда",
                en: "Check-out date",
                de: "Abreisedatum"
            },
            "form-number-guests": {
                ru: "Число гостей",
                en: "Number of guests",
                de: "Anzahl der Gäste"
            },
            "form-btn": {
                ru: "Поиск",
                en: "Search",
                de: "Suche"
            },
            "card-geodesic-dome-title": {
                ru: "Геодезический купол",
                en: "Geodesic dome",
                de: "Geodätische Kuppel"
            },
            "card-convenience-guests-1": {
                ru: "2 гостя",
                en: "2 guest",
                de: "2 gäste"
            },
            "card-convenience-area-1": {
                ru: "Пл. 50 м2",
                en: "50 m² area",
                de: "50 m2 Fl"
            },
            "card-convenience-size-1": {
                ru: "king size",
                en: "king size",
                de: "king size"
            },
            "card-convenience-bed-1": {
                ru: "Дп кровать",
                en: "extra bed",
                de: "Zustellbett"
            },
            "card-convenience-furako": {
                ru: "Фурако",
                en: "furako",
                de: "furako"
            },
            "card-convenience-bbq": {
                ru: "Барбекю",
                en: "BBQ",
                de: "BBQ"
            },
            "card-geodesic-dome-list-item-1": {
                ru: "Двуспальная кровать: King size",
                en: "Double bed: King size",
                de: "Doppelbett: Kingsize"
            },
            "card-geodesic-dome-list-item-2": {
                ru: "Туалет и душевая кабина",
                en: "Toilet and shower",
                de: "Toilette und Dusche"
            },
            "card-geodesic-dome-list-item-3": {
                ru: "Отопление: внутренний блок кондиционирования воздуха и камины в зимнее время",
                en: "Heating: indoor air conditioning unit and fireplaces in winter",
                de: "Heizung: Innenklimaanlage und Kamine im Winter"
            },
            "card-geodesic-dome-list-item-4": {
                ru: "Питьевая вода, чай, посуда, стаканы, столовые приборы и т.д.",
                en: "Drinking water, tea, dishes, glasses, cutlery, etc.",
                de: "Trinkwasser, Tee, Geschirr, Gläser, Besteck usw."
            },
            "card-geodesic-dome-list-item-5": {
                ru: "Площадка для разведения костра с видом на холмы",
                en: "Bonfire area with a view of the hills",
                de: "Lagerfeuerplatz mit Blick auf die Hügel"
            },
            "card-geodesic-dome-list-item-6": {
                ru: "Детали Комод, вешалки, полотенца, зеркало",
                en: "Details Chest of drawers, hangers, towels, mirror",
                de: "Details Kommode, Kleiderbügel, Handtücher, Spiegel"
            },
            "card-geodesic-dome-btn": {
                ru: "Выбор",
                en: "Choose",
                de: "Choose"
            },
            "card-geodesic-dome-price": {
                ru: "от 100 долларов",
                en: "from 100$",
                de: "from 100$"
            },
            "card-sauna-title": {
                ru: "Сауна",
                en: "Sauna",
                de: "Sauna"
            },
            "card-convenience-guests-2": {
                ru: "2 гостя",
                en: "2 guest",
                de: "2 gäste"
            },
            "card-convenience-area-2": {
                ru: "Пл. 50 м2",
                en: "50 m² area",
                de: "50 m2 Fl"
            },
            "card-convenience-size-2": {
                ru: "Бл кровать",
                en: "king size",
                de: "Kingsize"
            },
            "card-convenience-bed-2": {
                ru: "Дп кровать",
                en: "extra bed",
                de: "Zustellbett"
            },
            "card-convenience-sauna": {
                ru: "Сауна",
                en: "sauna",
                de: "sauna"
            },
            "card-convenience-food": {
                ru: "Еда",
                en: "food",
                de: "Lebensmittel"
            },
            "card-sauna-list-item-1": {
                ru: "2 Двуспальные кровати: King size, матрас, белоснежное постельное белье",
                en: "2 Double beds: King size, mattress Snow White linens",
                de: "2 Doppelbetten: Kingsize, Matratze Schneeweiße Bettwäsche"
            },
            "card-sauna-list-item-2": {
                ru: "Отопление: тепловая пушка",
                en: "Heating: heat gun",
                de: "Heizung: Heißluftpistole"
            },
            "card-sauna-list-item-3": {
                ru: "Чайный набор, питьевая вода, чай, посуда, стаканы, столовые приборы и т.д. вы можете взять с собой - БЕЗ дополнительной оплаты",
                en: "A tea set Drinking water, tea, crockery, glasses, cutlery, etc. you can take - NO extra charges",
                de: "Ein Teeservice Trinkwasser, Tee, Geschirr, Gläser, Besteck usw. sie können nehmen - KEINE zusätzlichen Gebühren"
            },
            "card-sauna-list-item-4": {
                ru: "Площадка для разведения костра с прекрасным видом на холмы",
                en: "Campfire area with a beautiful view of the hills",
                de: "Lagerfeuerplatz mit schöner Aussicht auf die Hügel"
            },
            "card-sauna-list-item-5": {
                ru: "На территории глэмпинга общего пользования:",
                en: "On the territory of the glamping in common use:",
                de: "Auf dem Territorium des Glamping im gemeinsamen Gebrauch:"
            },
            "card-sauna-list-item-6": {
                ru: "летняя кухня (микроволновая печь, холодильник, плита, мангал, казан, посуда и т.д.)",
                en: "summer cuisine (microwave, refrigerator, stove, barbecue grill, cauldron,dishes, etc.)",
                de: "sommerküche (Mikrowelle, Kühlschrank, Herd, Grill, Kessel, Geschirr usw.).)"
            },
            "card-sauna-list-item-7": {
                ru: "гостиная с открытым камином",
                en: "lounge with open fire",
                de: "lounge mit offenem Kamin"
            },
            "card-sauna-list-item-8": {
                ru: "душевая кабина (горячая, холодная вода), туалет",
                en: "shower (hot, cold water), toilet",
                de: "dusche (warmes, kaltes Wasser), WC"
            },
            "card-sauna-btn": {
                ru: "Выбор",
                en: "Choose",
                de: "Choose"
            },
            "card-sauna-price": {
                ru: "от 100 долларов",
                en: "from 100$",
                de: "from 100$"
            }
        };
        const cardPage = {
            "header__btn-subMenu": {
                ru: "RU",
                en: "EN",
                de: "DE"
            },
            "header__title-1": {
                ru: "Главная",
                en: "Home",
                de: "Hauptsaechliche"
            },
            "header__title-2": {
                ru: "Размещение",
                en: "Accommodation",
                de: "Platzierung"
            },
            "header__title-3": {
                ru: "Достопримечательности",
                en: "Attractions",
                de: "Hauptsaechliche"
            },
            "header__title-4": {
                ru: "Специальные предложения",
                en: "Special Offers",
                de: "Sonderangebot"
            },
            "header__title-5": {
                ru: "Атмосфера",
                en: "Vibe",
                de: "Die Atmosphäre"
            },
            "header__title-6": {
                ru: "Вопросы",
                en: "FAQ",
                de: "Fragen"
            },
            "header__title-7": {
                ru: "Контакты",
                en: "Contacts",
                de: "Kontakte"
            },
            "header__title-8": {
                ru: "Забронировать",
                en: "Books Now",
                de: "Buchen"
            },
            "header__title-9": {
                ru: "Забронировать",
                en: "Books Now",
                de: "Buchen"
            },
            "footer-link-1": {
                ru: "Главная",
                en: "Home",
                de: "Hauptsaechliche"
            },
            "footer-link-2": {
                ru: "Размещение",
                en: "Accommodation",
                de: "Platzierung"
            },
            "footer-link-3": {
                ru: "Достопримечательности",
                en: "Attractions",
                de: "Hauptsaechliche"
            },
            "footer-link-4": {
                ru: "Спецаильные предложения",
                en: "Special Offers",
                de: "Sonderangebot"
            },
            "footer-link-5": {
                ru: "Атмосфера",
                en: "Vibe",
                de: "Die Atmosphäre"
            },
            "footer-link-6": {
                ru: "Вопросы",
                en: "FAQ",
                de: "Fragen"
            },
            "footer-link-7": {
                ru: "Контакты",
                en: "Contacts",
                de: "Kontakte"
            },
            "footer-sub-title-1": {
                ru: "Адрес",
                en: "Adress",
                de: "Anschrift"
            },
            "footer-sub-title-2": {
                ru: "Номер телефона",
                en: "Phone number",
                de: "Telefonnummer"
            },
            "footer-sub-title-3": {
                ru: "Электронная почта:",
                en: "E-mail:",
                de: "E-mail:"
            },
            "footer-sub-text-1": {
                ru: "Грузия, Внутренняя Картли, муниципалитет Каспи,Кавтисхеви, 41.869560 44.448465",
                en: "Georgia, Inner Kartli, Kaspi Municipality,Kavtiskhevi, 41.869560 44.448465",
                de: "Georgien, Innere Kartlien, Kaspi Gemeinde,Kawtischewi, 41.869560 44.448465"
            },
            "contacts-title": {
                ru: "Контакты.",
                en: "Contacts",
                de: "Kontakt"
            },
            "contacts-text-1": {
                ru: "Наш глэмпинг расположен в 30 км от Тбилиси.",
                en: "Our glamping is located 30 km from Tbilisi.",
                de: "Unser Glamping liegt 30 km von Tiflis entfernt."
            },
            "contacts-text-2": {
                ru: "Адрес: Грузия,Внутренняя Картли, муниципалитет Каспи, Кавтисхеви,",
                en: "Adress: Georgia,Inner Kartli, KaspiMunicipality, Kavtiskhevi,",
                de: "Adresse: Georgien,Inneres Kartli, Gemeinde Kaspi, Kavt'iskhevi,"
            },
            "contacts-text-3": {
                ru: "Номер телефона:",
                en: "Phone number:",
                de: "Telefonnummer:"
            },
            "contacts-text-4": {
                ru: "Электронная почта:",
                en: "Email:",
                de: "Email:"
            },
            "card-title-1": {
                ru: "Геодезический купол",
                en: "Geodesic Dome:",
                de: "Geodätische Kuppel"
            },
            "card-convenience-bed": {
                ru: "King size",
                en: "King size bed",
                de: "Kingsize-Bett"
            },
            "card-convenience-area": {
                ru: "Пл. 50 м2",
                en: "50 m² area",
                de: "50 m2 Fl"
            },
            "card-convenience-smoking": {
                ru: "Не курить",
                en: "No smoking",
                de: "Nichtraucher"
            },
            "card-convenience-pet": {
                ru: "С животными",
                en: "Pet friendly",
                de: "Tierfreundliche"
            },
            "card-convenience-parking": {
                ru: "Парковка",
                en: "Free parking",
                de: "Kostenloser Parkplatz"
            },
            "card-convenience-bath": {
                ru: "Ванна",
                en: "Free parking",
                de: "Bad"
            },
            "card-information-title": {
                ru: "Информация",
                en: "Information",
                de: "Information"
            },
            "card-information-text-1": {
                ru: "Наши геодезические купола, вдохновленные элегантностью природы, являются архитектурными чудесами. Зайдя внутрь, вы обнаружите гармоничное пространство, в котором роскошь сочетается с дикой природой. Вас ждут приключения в окружении инноваций и комфорта.",
                en: "Our geodesic domes, inspired by nature's elegance, are architectural marvels. Step inside, and you'll find a harmonious space that balances luxury with the wilderness. Adventure awaits, wrapped in the embrace of innovation and comfort.",
                de: "Unsere geodätischen Kuppeln, inspiriert von der Eleganz der Natur, sind architektonische Wunderwerke. Treten Sie ein und Sie werden einen harmonischen Raum finden, der Luxus mit der Wildnis in Einklang bringt. Abenteuer erwartet Sie, eingehüllt in Innovation und Komfort."
            },
            "card-geodesic-dome-list-item-1": {
                ru: "Двуспальная кровать: King size",
                en: "Double bed: King size",
                de: "Doppelbett: Kingsize"
            },
            "card-geodesic-dome-list-item-2": {
                ru: "Туалет и душевая кабина",
                en: "Toilet and shower",
                de: "Toilette und Dusche"
            },
            "card-geodesic-dome-list-item-3": {
                ru: "Отопление: внутренний блок кондиционирования воздуха и камины в зимнее время",
                en: "Heating: indoor air conditioning unit and fireplaces in winter",
                de: "Heizung: Innenklimaanlage und Kamine im Winter"
            },
            "card-geodesic-dome-list-item-4": {
                ru: "Питьевая вода, чай, посуда, стаканы, столовые приборы и т.д.",
                en: "Drinking water, tea, dishes, glasses, cutlery, etc.",
                de: "Trinkwasser, Tee, Geschirr, Gläser, Besteck usw."
            },
            "card-geodesic-dome-list-item-5": {
                ru: "Площадка для разведения костра с видом на холмы",
                en: "Bonfire area with a view of the hills",
                de: "Lagerfeuerplatz mit Blick auf die Hügel"
            },
            "card-geodesic-dome-list-item-6": {
                ru: "Детали Комод, вешалки, полотенца, зеркало",
                en: "Details Chest of drawers, hangers, towels, mirror",
                de: "Details Kommode, Kleiderbügel, Handtücher, Spiegel"
            },
            "card-information-under-text-1-1": {
                ru: "Экономьте по-крупному и делайте это просто!",
                en: "Save big and keep it simple!",
                de: "Sparen Sie viel und halten Sie es einfach!"
            },
            "card-information-under-text-1-2": {
                ru: "Забронируйте полный пакет услуг онлайн по сниженной цене. Воспользуйтесь лучшим соотношением цены и качества для вашего незабываемого глэмпинга, не беспокоясь о дополнительных расходах во время вашего отпуска. Сэкономьте по-крупному и сделайте это просто!",
                en: "Book our full package online at a discounted rate. Embrace the best value for your unforgettable glamping adventure without worrying about extra costs during your getaway. Save big and keep it simple!",
                de: "Buchen Sie unser Komplettpaket online zu einem ermäßigten Preis. Genießen Sie das beste Preis-Leistungs-Verhältnis für Ihr unvergessliches Glamping-Abenteuer, ohne sich während Ihres Urlaubs um zusätzliche Kosten sorgen zu müssen. Sparen Sie viel und halten Sie es einfach!"
            },
            "form-in-date": {
                ru: "Дата заезда",
                en: "Check-in date",
                de: "Anreisedatum"
            },
            "form-out-date": {
                ru: "Дата выезда",
                en: "Check-out date",
                de: "Abreisedatum"
            },
            "form-number-guests": {
                ru: "Гости",
                en: "Guests",
                de: "Gäste"
            },
            "form-btn": {
                ru: "Бронировать",
                en: "Book",
                de: "Buch"
            },
            "form-stay": {
                ru: "остаться на",
                en: "stay",
                de: "Aufenthalt"
            },
            "form-nights": {
                ru: "ночи",
                en: "nights",
                de: "bernachtungen"
            },
            "form-service": {
                ru: "Плата за обслуживание",
                en: "Service Fee",
                de: "Servicegebühr"
            },
            "form-nights-price": {
                ru: "ночь",
                en: "night",
                de: "bernachtungen"
            },
            "form-total": {
                ru: "Общая стоимость",
                en: "Total",
                de: "Insgesamt"
            }
        };
        const orderPage = {
            "header__btn-subMenu": {
                ru: "RU",
                en: "EN",
                de: "DE"
            },
            "header__title-1": {
                ru: "Главная",
                en: "Home",
                de: "Hauptsaechliche"
            },
            "header__title-2": {
                ru: "Размещение",
                en: "Accommodation",
                de: "Platzierung"
            },
            "header__title-3": {
                ru: "Достопримечательности",
                en: "Attractions",
                de: "Hauptsaechliche"
            },
            "header__title-4": {
                ru: "Специальные предложения",
                en: "Special Offers",
                de: "Sonderangebot"
            },
            "header__title-5": {
                ru: "Атмосфера",
                en: "Vibe",
                de: "Die Atmosphäre"
            },
            "header__title-6": {
                ru: "Вопросы",
                en: "FAQ",
                de: "Fragen"
            },
            "header__title-7": {
                ru: "Контакты",
                en: "Contacts",
                de: "Kontakte"
            },
            "header__title-8": {
                ru: "Забронировать",
                en: "Books Now",
                de: "Buchen"
            },
            "header__title-9": {
                ru: "Забронировать",
                en: "Books Now",
                de: "Buchen"
            },
            "footer-link-1": {
                ru: "Главная",
                en: "Home",
                de: "Hauptsaechliche"
            },
            "footer-link-2": {
                ru: "Размещение",
                en: "Accommodation",
                de: "Platzierung"
            },
            "footer-link-3": {
                ru: "Достопримечательности",
                en: "Attractions",
                de: "Hauptsaechliche"
            },
            "footer-link-4": {
                ru: "Спецаильные предложения",
                en: "Special Offers",
                de: "Sonderangebot"
            },
            "footer-link-5": {
                ru: "Атмосфера",
                en: "Vibe",
                de: "Die Atmosphäre"
            },
            "footer-link-6": {
                ru: "Вопросы",
                en: "FAQ",
                de: "Fragen"
            },
            "footer-link-7": {
                ru: "Контакты",
                en: "Contacts",
                de: "Kontakte"
            },
            "footer-sub-title-1": {
                ru: "Адрес",
                en: "Adress",
                de: "Anschrift"
            },
            "footer-sub-title-2": {
                ru: "Номер телефона",
                en: "Phone number",
                de: "Telefonnummer"
            },
            "footer-sub-title-3": {
                ru: "Электронная почта:",
                en: "E-mail:",
                de: "E-mail:"
            },
            "footer-sub-text-1": {
                ru: "Грузия, Внутренняя Картли, муниципалитет Каспи,Кавтисхеви, 41.869560 44.448465",
                en: "Georgia, Inner Kartli, Kaspi Municipality,Kavtiskhevi, 41.869560 44.448465",
                de: "Georgien, Innere Kartlien, Kaspi Gemeinde,Kawtischewi, 41.869560 44.448465"
            },
            "contacts-title": {
                ru: "Контакты.",
                en: "Contacts",
                de: "Kontakt"
            },
            "contacts-text-1": {
                ru: "Наш глэмпинг расположен в 30 км от Тбилиси.",
                en: "Our glamping is located 30 km from Tbilisi.",
                de: "Unser Glamping liegt 30 km von Tiflis entfernt."
            },
            "contacts-text-2": {
                ru: "Адрес: Грузия,Внутренняя Картли, муниципалитет Каспи, Кавтисхеви,",
                en: "Adress: Georgia,Inner Kartli, KaspiMunicipality, Kavtiskhevi,",
                de: "Adresse: Georgien,Inneres Kartli, Gemeinde Kaspi, Kavt'iskhevi,"
            },
            "contacts-text-3": {
                ru: "Номер телефона:",
                en: "Phone number:",
                de: "Telefonnummer:"
            },
            "contacts-text-4": {
                ru: "Электронная почта:",
                en: "Email:",
                de: "Email:"
            },
            "block-title": {
                ru: "Мой заказ",
                en: "My Booking",
                de: "Meine Buchung"
            },
            "card-title-1": {
                ru: "Геодезический купол",
                en: "Geodesic Dome",
                de: "Geodätische Kuppel"
            },
            "card-convenience-bed": {
                ru: "King size",
                en: "King size",
                de: "Kingsize-Bett"
            },
            "card-convenience-area": {
                ru: "Пл. 50 м2",
                en: "50 m² area",
                de: "50 m2 Fl"
            },
            "card-convenience-guests-1": {
                ru: "2 гостя",
                en: "2 guest",
                de: "2 gäste"
            },
            "card-convenience-bed-1": {
                ru: "Дп кровать",
                en: "extra bed",
                de: "Zustellbett"
            },
            "link-more": {
                ru: "Еще",
                en: "More",
                de: "Mehr"
            },
            "service-title": {
                ru: "Дополнительные услуги",
                en: "Extra Services",
                de: "Zusatzleistungen"
            },
            "service-card-title": {
                ru: "Завтрак",
                en: "Breakfast",
                de: "Breakfast"
            },
            "service-card-text": {
                ru: "Йогурт с фруктами, круассан, сэндвич с лососем, хлопья, яйца, фрукты, чай или кофе, сок, молоко",
                en: "Yogurt with fruits, croissant, sandwich with salmon, cereals, eggs, fruits, tea or coffee, juice, milk",
                de: "Joghurt mit Früchten, Croissant, Sandwich mit Lachs, Müsli, Eier, Obst, Tee oder Kaffee, Saft, Milch"
            },
            "service-card-guests-1": {
                ru: "Гости",
                en: "Guests",
                de: "Freuen"
            },
            "service-card-guests-2": {
                ru: "Гости",
                en: "Guests",
                de: "Freuen"
            },
            "service-card-btn-1": {
                ru: "Добавить",
                en: "Add",
                de: "Hinzufügen"
            },
            "service-card-btn-2": {
                ru: "Добавить",
                en: "Add",
                de: "Hinzufügen"
            },
            "service-package-title": {
                ru: "Полный пакет услуг",
                en: "Full Pacage",
                de: "Komplettpaket"
            },
            "service-package-text": {
                ru: "Завтрак, сауна, барбекю, Фурако, джакузи",
                en: "Breakfast, sauna, BBQ, Furako, jacuzzi",
                de: "Frühstück, Sauna, Grill, Furako, Whirlpool"
            },
            "service-summary-title": {
                ru: "Сводка",
                en: "Summary",
                de: "Zusammenfassung"
            },
            "form-in-date": {
                ru: "Дата заезда",
                en: "Check-in",
                de: "Anreisedatum"
            },
            "form-out-date": {
                ru: "Дата выезда",
                en: "Check-out",
                de: "Abreisedatum"
            },
            "form-number-guests": {
                ru: "Гости",
                en: "Guests",
                de: "Gäste"
            },
            "form-stay": {
                ru: "остаться на:",
                en: "stay:",
                de: "Aufenthalt:"
            },
            "form-nights": {
                ru: "ночи",
                en: "nights",
                de: "bernachtungen"
            },
            "form-night": {
                ru: "ночь",
                en: "night",
                de: "Nacht"
            },
            "form-total": {
                ru: "Общая стоимость",
                en: "Total",
                de: "Insgesamt"
            },
            "form-service-fee": {
                ru: "Плата за обслуживание",
                en: "Service Fee",
                de: "Servicegebühr"
            },
            "form-breakfast": {
                ru: "Завтрак",
                en: "Breakfast",
                de: "Breakfast"
            },
            "form-btn": {
                ru: "Бронировать",
                en: "Book",
                de: "Buch"
            }
        };
        const contaсtPage = {
            "header__btn-subMenu": {
                ru: "RU",
                en: "EN",
                de: "DE"
            },
            "header__title-1": {
                ru: "Главная",
                en: "Home",
                de: "Hauptsaechliche"
            },
            "header__title-2": {
                ru: "Размещение",
                en: "Accommodation",
                de: "Platzierung"
            },
            "header__title-3": {
                ru: "Достопримечательности",
                en: "Attractions",
                de: "Hauptsaechliche"
            },
            "header__title-4": {
                ru: "Специальные предложения",
                en: "Special Offers",
                de: "Sonderangebot"
            },
            "header__title-5": {
                ru: "Атмосфера",
                en: "Vibe",
                de: "Die Atmosphäre"
            },
            "header__title-6": {
                ru: "Вопросы",
                en: "FAQ",
                de: "Fragen"
            },
            "header__title-7": {
                ru: "Контакты",
                en: "Contacts",
                de: "Kontakte"
            },
            "header__title-8": {
                ru: "Забронировать",
                en: "Books Now",
                de: "Buchen"
            },
            "header__title-9": {
                ru: "Забронировать",
                en: "Books Now",
                de: "Buchen"
            },
            "footer-link-1": {
                ru: "Главная",
                en: "Home",
                de: "Hauptsaechliche"
            },
            "footer-link-2": {
                ru: "Размещение",
                en: "Accommodation",
                de: "Platzierung"
            },
            "footer-link-3": {
                ru: "Достопримечательности",
                en: "Attractions",
                de: "Hauptsaechliche"
            },
            "footer-link-4": {
                ru: "Спецаильные предложения",
                en: "Special Offers",
                de: "Sonderangebot"
            },
            "footer-link-5": {
                ru: "Атмосфера",
                en: "Vibe",
                de: "Die Atmosphäre"
            },
            "footer-link-6": {
                ru: "Вопросы",
                en: "FAQ",
                de: "Fragen"
            },
            "footer-link-7": {
                ru: "Контакты",
                en: "Contacts",
                de: "Kontakte"
            },
            "footer-sub-title-1": {
                ru: "Адрес",
                en: "Adress",
                de: "Anschrift"
            },
            "footer-sub-title-2": {
                ru: "Номер телефона",
                en: "Phone number",
                de: "Telefonnummer"
            },
            "footer-sub-title-3": {
                ru: "Электронная почта:",
                en: "E-mail:",
                de: "E-mail:"
            },
            "footer-sub-text-1": {
                ru: "Грузия, Внутренняя Картли, муниципалитет Каспи,Кавтисхеви, 41.869560 44.448465",
                en: "Georgia, Inner Kartli, Kaspi Municipality,Kavtiskhevi, 41.869560 44.448465",
                de: "Georgien, Innere Kartlien, Kaspi Gemeinde,Kawtischewi, 41.869560 44.448465"
            },
            "contacts-title": {
                ru: "Контакты.",
                en: "Contacts",
                de: "Kontakt"
            },
            "contacts-text-1": {
                ru: "Наш глэмпинг расположен в 30 км от Тбилиси.",
                en: "Our glamping is located 30 km from Tbilisi.",
                de: "Unser Glamping liegt 30 km von Tiflis entfernt."
            },
            "contacts-text-2": {
                ru: "Адрес: Грузия,Внутренняя Картли, муниципалитет Каспи, Кавтисхеви,",
                en: "Adress: Georgia,Inner Kartli, KaspiMunicipality, Kavtiskhevi,",
                de: "Adresse: Georgien,Inneres Kartli, Gemeinde Kaspi, Kavt'iskhevi,"
            },
            "contacts-text-3": {
                ru: "Номер телефона:",
                en: "Phone number:",
                de: "Telefonnummer:"
            },
            "contacts-text-4": {
                ru: "Электронная почта:",
                en: "Email:",
                de: "Email:"
            },
            "contact-inforamation": {
                ru: "Контактная информация",
                en: "Contact Information",
                de: "Kontaktinformationen"
            },
            "form-first": {
                ru: "Имя",
                en: "First Name",
                de: "Vorname"
            },
            "form-second": {
                ru: "Фамилия",
                en: "Second Name",
                de: "Nachname"
            },
            "form-email": {
                ru: "Почта",
                en: "Email",
                de: "Email"
            },
            "form-phone": {
                ru: "Номер телефона",
                en: "Phone Number",
                de: "Telefonnummer"
            },
            "form-btn": {
                ru: "Принять и продолжить",
                en: "Agree and Continue",
                de: "Zustimmen und fortfahren:"
            },
            "service-summary-title": {
                ru: "Сводка",
                en: "Summary",
                de: "Zusammenfassung"
            },
            "form-night": {
                ru: "ночь",
                en: "night",
                de: "Nacht"
            },
            "form-total": {
                ru: "Общая стоимость",
                en: "Total",
                de: "Insgesamt"
            },
            "form-service-fee": {
                ru: "Плата за обслуживание",
                en: "Service Fee",
                de: "Servicegebühr"
            },
            "form-breakfast": {
                ru: "Завтрак",
                en: "Breakfast",
                de: "Breakfast"
            },
            "card-title-1": {
                ru: "Сверкающий купол",
                en: "Glamping dome",
                de: "Glamping Kuppel"
            }
        };
        const requestPage = {
            "header__btn-subMenu": {
                ru: "RU",
                en: "EN",
                de: "DE"
            },
            "header__title-1": {
                ru: "Главная",
                en: "Home",
                de: "Hauptsaechliche"
            },
            "header__title-2": {
                ru: "Размещение",
                en: "Accommodation",
                de: "Platzierung"
            },
            "header__title-3": {
                ru: "Достопримечательности",
                en: "Attractions",
                de: "Hauptsaechliche"
            },
            "header__title-4": {
                ru: "Специальные предложения",
                en: "Special Offers",
                de: "Sonderangebot"
            },
            "header__title-5": {
                ru: "Атмосфера",
                en: "Vibe",
                de: "Die Atmosphäre"
            },
            "header__title-6": {
                ru: "Вопросы",
                en: "FAQ",
                de: "Fragen"
            },
            "header__title-7": {
                ru: "Контакты",
                en: "Contacts",
                de: "Kontakte"
            },
            "header__title-8": {
                ru: "Забронировать",
                en: "Books Now",
                de: "Buchen"
            },
            "header__title-9": {
                ru: "Забронировать",
                en: "Books Now",
                de: "Buchen"
            },
            "footer-link-1": {
                ru: "Главная",
                en: "Home",
                de: "Hauptsaechliche"
            },
            "footer-link-2": {
                ru: "Размещение",
                en: "Accommodation",
                de: "Platzierung"
            },
            "footer-link-3": {
                ru: "Достопримечательности",
                en: "Attractions",
                de: "Hauptsaechliche"
            },
            "footer-link-4": {
                ru: "Спецаильные предложения",
                en: "Special Offers",
                de: "Sonderangebot"
            },
            "footer-link-5": {
                ru: "Атмосфера",
                en: "Vibe",
                de: "Die Atmosphäre"
            },
            "footer-link-6": {
                ru: "Вопросы",
                en: "FAQ",
                de: "Fragen"
            },
            "footer-link-7": {
                ru: "Контакты",
                en: "Contacts",
                de: "Kontakte"
            },
            "footer-sub-title-1": {
                ru: "Адрес",
                en: "Adress",
                de: "Anschrift"
            },
            "footer-sub-title-2": {
                ru: "Номер телефона",
                en: "Phone number",
                de: "Telefonnummer"
            },
            "footer-sub-title-3": {
                ru: "Электронная почта:",
                en: "E-mail:",
                de: "E-mail:"
            },
            "footer-sub-text-1": {
                ru: "Грузия, Внутренняя Картли, муниципалитет Каспи,Кавтисхеви, 41.869560 44.448465",
                en: "Georgia, Inner Kartli, Kaspi Municipality,Kavtiskhevi, 41.869560 44.448465",
                de: "Georgien, Innere Kartlien, Kaspi Gemeinde,Kawtischewi, 41.869560 44.448465"
            },
            "contacts-title": {
                ru: "Контакты.",
                en: "Contacts",
                de: "Kontakt"
            },
            "contacts-text-1": {
                ru: "Наш глэмпинг расположен в 30 км от Тбилиси.",
                en: "Our glamping is located 30 km from Tbilisi.",
                de: "Unser Glamping liegt 30 km von Tiflis entfernt."
            },
            "contacts-text-2": {
                ru: "Адрес: Грузия,Внутренняя Картли, муниципалитет Каспи, Кавтисхеви,",
                en: "Adress: Georgia,Inner Kartli, KaspiMunicipality, Kavtiskhevi,",
                de: "Adresse: Georgien,Inneres Kartli, Gemeinde Kaspi, Kavt'iskhevi,"
            },
            "contacts-text-3": {
                ru: "Номер телефона:",
                en: "Phone number:",
                de: "Telefonnummer:"
            },
            "contacts-text-4": {
                ru: "Электронная почта:",
                en: "Email:",
                de: "Email:"
            },
            "form-card": {
                ru: "Номер карты",
                en: "Card",
                de: "Card"
            },
            "form-name-card": {
                ru: "Имя на карточке",
                en: "Name on Card",
                de: "Name auf der Karte"
            },
            "form-expiration": {
                ru: "Срок действия",
                en: "Expiration Date",
                de: "Ablaufdatum"
            },
            "form-phone": {
                ru: "Номер телефона",
                en: "Phone Number",
                de: "Telefonnummer"
            },
            "card-title-1": {
                ru: "Бронирование",
                en: "Request Booking",
                de: "Anfrage Buchung"
            },
            "card-gift-code-title": {
                ru: "Используйте подарочную карту/промо-код",
                en: "Use a gift card/promo code",
                de: "Verwenden Sie eine Geschenkkarte / einen Promo-Code"
            },
            "form-gift-code": {
                ru: "Код подарка",
                en: "Gift Code",
                de: "Geschenk-Code"
            },
            "gift-text": {
                ru: "Подарочные карты возврату не подлежат, если принимающая сторона примет ваше бронирование",
                en: "Gift cards are non-refundable if the host accepts your booking",
                de: "Geschenkkarten sind nicht erstattungsfähig, wenn der Gastgeber Ihre Buchung akzeptiert"
            },
            "form-btn": {
                ru: "Принять и продолжить",
                en: "Agree and Continue",
                de: "Zustimmen und fortfahren:"
            },
            "service-summary-title": {
                ru: "Сводка",
                en: "Summary",
                de: "Zusammenfassung"
            },
            "form-night": {
                ru: "ночь",
                en: "night",
                de: "Nacht"
            },
            "form-total": {
                ru: "Общая стоимость",
                en: "Total",
                de: "Insgesamt"
            },
            "form-service-fee": {
                ru: "Плата за обслуживание",
                en: "Service Fee",
                de: "Servicegebühr"
            },
            "form-breakfast": {
                ru: "Завтрак",
                en: "Breakfast",
                de: "Breakfast"
            },
            "card-title-1": {
                ru: "Сверкающий купол",
                en: "Glamping dome",
                de: "Glamping Kuppel"
            }
        };
        var datepicker_min = __webpack_require__(448);
        const btnTranslate = document.querySelector(".menu__translate");
        const subMenuTranslate = document.querySelector(".sub-menu");
        const subMenuItem = document.querySelectorAll("[data-btn]");
        const targetLang = document.querySelector(".menu__target-lang");
        const allLangs = [ "ru", "en", "de" ];
        let currentLang = localStorage.getItem("language") || chechBrowserLang() || "en";
        const namePage = document.querySelector("title");
        const currentPathName = window.location.pathname;
        const lastSegmentIndex = currentPathName.lastIndexOf("/");
        const currentFileName = currentPathName.substring(lastSegmentIndex + 1);
        let currentText = {};
        function checkPagePathName() {
            switch (currentFileName) {
              case "index.html":
                currentText = indexPage;
                break;

              case "certificates.html":
                currentText = certificatesPage;
                break;

              case "book.html":
                currentText = bookingPage;
                break;

              case "card-page.html":
                currentText = cardPage;
                break;

              case "order.html":
                currentText = orderPage;
                break;

              case "contact-page.html":
                currentText = contaсtPage;
                break;

              case "request-page.html":
                currentText = requestPage;
                break;

              default:
                break;
            }
        }
        checkPagePathName();
        function changeLang() {
            for (const key in currentText) {
                const elem = document.querySelector(`[data-lang=${key}]`);
                if (elem) elem.textContent = currentText[key][currentLang];
            }
        }
        changeLang();
        subMenuItem.forEach((btn => {
            btn.addEventListener("click", (event => {
                currentLang = event.target.dataset.btn;
                localStorage.setItem("language", event.target.dataset.btn);
                resetActiveClass(subMenuItem, "active-lang");
                btn.classList.add("active-lang");
            }));
        }));
        function resetActiveClass(arr, activeClass) {
            arr.forEach((elem => {
                elem.classList.remove(activeClass);
            }));
        }
        function checkActiveLangButton() {
            switch (currentLang) {
              case "ru":
                targetLang.innerHTML = currentLang;
                break;

              case "en":
                targetLang.innerHTML = currentLang;
                break;

              case "de":
                targetLang.innerHTML = currentLang;
                break;

              default:
                break;
            }
        }
        checkActiveLangButton();
        function chechBrowserLang() {
            const navLang = navigator.language.slice(0, 2).toLowerCase();
            const result = allLangs.some((elem => elem === navLang));
            if (result) return navLang;
        }
        if (btnTranslate) btnTranslate.addEventListener("click", (function() {
            subMenuTranslate.classList.toggle("active");
            btnTranslate.classList.toggle("active");
            changeLang();
            checkActiveLangButton();
        }));
        const classComing = document.querySelectorAll(".coming-soon");
        classComing.forEach((elComing => {
            elComing.querySelector(".item-accommodation__image").insertAdjacentHTML("beforeend", `<div class="item-accommodation__coming coming">\n\t<div data-lang="accommodation-coming" class="coming__text">Coming soon</div></div>`);
            elComing.querySelector(".button").classList.add("button_coming-soon");
        }));
        const picturesSlider = document.querySelectorAll("[data-mobGal]");
        const coverAdapt = document.querySelector(".vibe-block__slider-adapt");
        if (coverAdapt) {
            coverAdapt.remove();
            let windowWidth = window.innerWidth;
            if (windowWidth <= 767.98) {
                document.querySelector(".vibe-block__container_adapt").appendChild(coverAdapt);
                mobileVibe();
                window.addEventListener("resize", mobileVibe);
            } else window.addEventListener("resize", mobileVibe);
            function mobileVibe() {
                windowWidth = window.innerWidth;
                if (windowWidth <= 767.98) {
                    document.querySelector(".vibe-block__container_adapt").appendChild(coverAdapt);
                    picturesSlider.forEach((img => {
                        img.classList.remove("swiper-slide", "swiper-slide-active", "swiper-slide-next");
                        img.removeAttribute("data-swiper-slide-index");
                        if (img.getAttribute("data-mobGal") == "big") img.classList.add("vibe-block__slide_big");
                    }));
                } else {
                    coverAdapt.remove();
                    picturesSlider.forEach((img => {
                        img.classList.add("swiper-slide");
                        if (img.getAttribute("data-mobGal") == "big") img.classList.remove("vibe-block__slide_big");
                    }));
                    document.querySelector(".vibe-block__slider").classList.add("swiper");
                    document.querySelector(".vibe-block__wrapper").classList.add("swiper-wrapper");
                }
            }
        }
        const containerChoose = document.querySelector(".buy-certificate__ammount");
        const inputChoose = document.querySelector(".sub-menu-certificate");
        if (containerChoose) {
            containerChoose.addEventListener("click", (function() {
                inputChoose.classList.toggle("active");
            }));
            const itemsInput = document.querySelectorAll(".sub-menu-certificate__item");
            if (itemsInput) itemsInput.forEach((item => {
                item.addEventListener("click", (function() {
                    document.querySelector(".buy-certificate__ammount").innerHTML = item.innerHTML;
                    inputChoose.classList.remove("active");
                }));
            }));
        }
        if (namePage.innerHTML == "Booking") {
            const productsContainer = document.getElementById("booking-cards");
            const pagination = document.getElementById("pagination");
            const products = Array.from(productsContainer.children);
            let currentPage = 1;
            function displayProducts(pageNumber) {
                productsContainer.innerHTML = "";
                const itemsPerPage = 6;
                const startIndex = (pageNumber - 1) * itemsPerPage;
                const endIndex = startIndex + itemsPerPage;
                const displayedProducts = products.slice(startIndex, endIndex);
                displayedProducts.forEach((product => {
                    productsContainer.appendChild(product.cloneNode(true));
                }));
            }
            function updatePagination() {
                const totalPages = Math.ceil(products.length / 6);
                pagination.innerHTML = "";
                let pagesToShow = [];
                if (totalPages <= 4) pagesToShow = Array.from({
                    length: totalPages
                }, ((_, i) => i + 1)); else if (currentPage === 1) pagesToShow = [ 1, 2, "...", totalPages ]; else if (currentPage === totalPages) pagesToShow = [ 1, "...", totalPages - 1, totalPages ]; else pagesToShow = [ currentPage - 1, currentPage, "...", totalPages ];
                const prevButton = document.createElement("button");
                prevButton.classList.add("pagination-cards__prevButton");
                prevButton.classList.add("_icon-arrow-btn");
                prevButton.addEventListener("click", (() => {
                    if (currentPage > 1) {
                        currentPage--;
                        displayProducts(currentPage);
                        updatePagination();
                    }
                }));
                pagination.appendChild(prevButton);
                pagesToShow.forEach((pageNumber => {
                    addPageButton(pageNumber);
                }));
                const nextButton = document.createElement("button");
                nextButton.classList.add("pagination-cards__nextButton");
                nextButton.classList.add("_icon-arrow-btn");
                nextButton.addEventListener("click", (() => {
                    const totalPages = Math.ceil(products.length / 6);
                    if (currentPage < totalPages) {
                        currentPage++;
                        displayProducts(currentPage);
                        updatePagination();
                    }
                }));
                pagination.appendChild(nextButton);
            }
            function addPageButton(pageNumber) {
                const button = document.createElement("div");
                button.classList.add("pagination-cards__item");
                if (pageNumber === "...") {
                    button.textContent = "...";
                    button.disabled = true;
                } else if (pageNumber === currentPage) {
                    button.textContent = pageNumber;
                    button.disabled = true;
                    button.classList.add("active-page");
                } else {
                    button.textContent = pageNumber;
                    button.addEventListener("click", (() => {
                        currentPage = pageNumber;
                        displayProducts(currentPage);
                        updatePagination();
                    }));
                }
                pagination.appendChild(button);
            }
            displayProducts(currentPage);
            updatePagination();
        }
        document.addEventListener("DOMContentLoaded", (function() {
            tabImages();
        }));
        function tabImages() {
            const bigPicture = document.querySelector("#mainImage picture source");
            const bigPictureImg = document.querySelector("#mainImage picture img");
            const smallPictures = document.querySelectorAll(".view-block__small-picture");
            const hasSource = bigPicture && bigPictureImg;
            if (hasSource) smallPictures.forEach((function(smallPicture) {
                smallPicture.addEventListener("click", (function() {
                    const smallSource = smallPicture.querySelector("picture source");
                    if (smallSource) {
                        const smallSrcset = smallSource.getAttribute("srcset");
                        smallSource.setAttribute("srcset", bigPicture.getAttribute("srcset"));
                        bigPicture.setAttribute("srcset", smallSrcset);
                    }
                }));
            })); else smallPictures.forEach((function(smallPicture) {
                smallPicture.addEventListener("click", (function() {
                    const smallImg = smallPicture.querySelector("picture img");
                    if (smallImg) {
                        const smallSrc = smallImg.getAttribute("src");
                        smallImg.setAttribute("src", bigPictureImg.getAttribute("src"));
                        bigPictureImg.setAttribute("src", smallSrc);
                    }
                }));
            }));
        }
        if (currentFileName == "book.html") {
            function destroyDatepicker(picker) {
                if (picker) {
                    picker.remove();
                    picker = null;
                }
            }
            const dpOptions = {
                id: 1,
                startDay: 1,
                customDays: [ "S", "M", "T", "W", "T", "F", "S" ],
                formatter: (input, date, instance) => {
                    const value = date.toLocaleDateString();
                    input.value = value;
                }
            };
            let start = datepicker_min("[data-calendar-start]", dpOptions);
            let end = datepicker_min("[data-calendar-end]", dpOptions);
            function updateDatePicker() {
                destroyDatepicker(start);
                destroyDatepicker(end);
                const position = window.innerWidth < 768 ? "c" : "bl";
                const updatedOptions = {
                    ...dpOptions,
                    position
                };
                start = datepicker_min("[data-calendar-start]", updatedOptions);
                end = datepicker_min("[data-calendar-end]", updatedOptions);
            }
            window.addEventListener("resize", updateDatePicker);
            updateDatePicker();
        }
        window["FLS"] = true;
        isWebp();
        menuInit();
        spollers();
        formFieldsInit({
            viewPass: false
        });
    })();
})();