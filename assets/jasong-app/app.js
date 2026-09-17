import { a as e, c as t, i as n, n as r, o as i, r as a, s as o, t as s, u as c } from "./SiteContext-CnqCaF0u.js";
import { _ as l, a as u, c as d, d as f, f as p, g as m, h, i as g, l as _, m as v, n as y, o as b, p as x, r as S, s as C, t as w, u as T, v as E } from "./IdentityBadge-MAJJ2R5R.js";
//#region node_modules/.pnpm/react-dom@19.2.8_react@19.2.8/node_modules/react-dom/cjs/react-dom.production.js
var D = /* @__PURE__ */ t(((e) => {
	var t = o();
	function n(e) {
		var t = "https://react.dev/errors/" + e;
		if (1 < arguments.length) {
			t += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
		}
		return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	function r() {}
	var i = {
		d: {
			f: r,
			r: function() {
				throw Error(n(522));
			},
			D: r,
			C: r,
			L: r,
			m: r,
			X: r,
			S: r,
			M: r
		},
		p: 0,
		findDOMNode: null
	}, a = Symbol.for("react.portal");
	function s(e, t, n) {
		var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
		return {
			$$typeof: a,
			key: r == null ? null : "" + r,
			children: e,
			containerInfo: t,
			implementation: n
		};
	}
	var c = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	function l(e, t) {
		if (e === "font") return "";
		if (typeof t == "string") return t === "use-credentials" ? t : "";
	}
	e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i, e.createPortal = function(e, t) {
		var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
		if (!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11) throw Error(n(299));
		return s(e, t, null, r);
	}, e.flushSync = function(e) {
		var t = c.T, n = i.p;
		try {
			if (c.T = null, i.p = 2, e) return e();
		} finally {
			c.T = t, i.p = n, i.d.f();
		}
	}, e.preconnect = function(e, t) {
		typeof e == "string" && (t ? (t = t.crossOrigin, t = typeof t == "string" ? t === "use-credentials" ? t : "" : void 0) : t = null, i.d.C(e, t));
	}, e.prefetchDNS = function(e) {
		typeof e == "string" && i.d.D(e);
	}, e.preinit = function(e, t) {
		if (typeof e == "string" && t && typeof t.as == "string") {
			var n = t.as, r = l(n, t.crossOrigin), a = typeof t.integrity == "string" ? t.integrity : void 0, o = typeof t.fetchPriority == "string" ? t.fetchPriority : void 0;
			n === "style" ? i.d.S(e, typeof t.precedence == "string" ? t.precedence : void 0, {
				crossOrigin: r,
				integrity: a,
				fetchPriority: o
			}) : n === "script" && i.d.X(e, {
				crossOrigin: r,
				integrity: a,
				fetchPriority: o,
				nonce: typeof t.nonce == "string" ? t.nonce : void 0
			});
		}
	}, e.preinitModule = function(e, t) {
		if (typeof e == "string") {
			if (typeof t == "object" && t) {
				if (t.as == null || t.as === "script") {
					var n = l(t.as, t.crossOrigin);
					i.d.M(e, {
						crossOrigin: n,
						integrity: typeof t.integrity == "string" ? t.integrity : void 0,
						nonce: typeof t.nonce == "string" ? t.nonce : void 0
					});
				}
			} else t ?? i.d.M(e);
		}
	}, e.preload = function(e, t) {
		if (typeof e == "string" && typeof t == "object" && t && typeof t.as == "string") {
			var n = t.as, r = l(n, t.crossOrigin);
			i.d.L(e, n, {
				crossOrigin: r,
				integrity: typeof t.integrity == "string" ? t.integrity : void 0,
				nonce: typeof t.nonce == "string" ? t.nonce : void 0,
				type: typeof t.type == "string" ? t.type : void 0,
				fetchPriority: typeof t.fetchPriority == "string" ? t.fetchPriority : void 0,
				referrerPolicy: typeof t.referrerPolicy == "string" ? t.referrerPolicy : void 0,
				imageSrcSet: typeof t.imageSrcSet == "string" ? t.imageSrcSet : void 0,
				imageSizes: typeof t.imageSizes == "string" ? t.imageSizes : void 0,
				media: typeof t.media == "string" ? t.media : void 0
			});
		}
	}, e.preloadModule = function(e, t) {
		if (typeof e == "string") {
			if (t) {
				var n = l(t.as, t.crossOrigin);
				i.d.m(e, {
					as: typeof t.as == "string" && t.as !== "script" ? t.as : void 0,
					crossOrigin: n,
					integrity: typeof t.integrity == "string" ? t.integrity : void 0
				});
			} else i.d.m(e);
		}
	}, e.requestFormReset = function(e) {
		i.d.r(e);
	}, e.unstable_batchedUpdates = function(e, t) {
		return e(t);
	}, e.useFormState = function(e, t, n) {
		return c.H.useFormState(e, t, n);
	}, e.useFormStatus = function() {
		return c.H.useHostTransitionStatus();
	}, e.version = "19.2.8";
})), O = /* @__PURE__ */ t(((e, t) => {
	function n() {
		if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
		} catch (e) {
			console.error(e);
		}
	}
	n(), t.exports = D();
})), k = /* @__PURE__ */ t(((e) => {
	var t = i(), n = o(), r = O();
	function a(e) {
		var t = "https://react.dev/errors/" + e;
		if (1 < arguments.length) {
			t += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
		}
		return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	function s(e) {
		return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
	}
	function c(e) {
		var t = e, n = e;
		if (e.alternate) for (; t.return;) t = t.return;
		else {
			e = t;
			do
				t = e, t.flags & 4098 && (n = t.return), e = t.return;
			while (e);
		}
		return t.tag === 3 ? n : null;
	}
	function l(e) {
		if (e.tag === 13) {
			var t = e.memoizedState;
			if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
		}
		return null;
	}
	function u(e) {
		if (e.tag === 31) {
			var t = e.memoizedState;
			if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
		}
		return null;
	}
	function d(e) {
		if (c(e) !== e) throw Error(a(188));
	}
	function f(e) {
		var t = e.alternate;
		if (!t) {
			if (t = c(e), t === null) throw Error(a(188));
			return t === e ? e : null;
		}
		for (var n = e, r = t;;) {
			var i = n.return;
			if (i === null) break;
			var o = i.alternate;
			if (o === null) {
				if (r = i.return, r !== null) {
					n = r;
					continue;
				}
				break;
			}
			if (i.child === o.child) {
				for (o = i.child; o;) {
					if (o === n) return d(i), e;
					if (o === r) return d(i), t;
					o = o.sibling;
				}
				throw Error(a(188));
			}
			if (n.return !== r.return) n = i, r = o;
			else {
				for (var s = !1, l = i.child; l;) {
					if (l === n) {
						s = !0, n = i, r = o;
						break;
					}
					if (l === r) {
						s = !0, r = i, n = o;
						break;
					}
					l = l.sibling;
				}
				if (!s) {
					for (l = o.child; l;) {
						if (l === n) {
							s = !0, n = o, r = i;
							break;
						}
						if (l === r) {
							s = !0, r = o, n = i;
							break;
						}
						l = l.sibling;
					}
					if (!s) throw Error(a(189));
				}
			}
			if (n.alternate !== r) throw Error(a(190));
		}
		if (n.tag !== 3) throw Error(a(188));
		return n.stateNode.current === n ? e : t;
	}
	function p(e) {
		var t = e.tag;
		if (t === 5 || t === 26 || t === 27 || t === 6) return e;
		for (e = e.child; e !== null;) {
			if (t = p(e), t !== null) return t;
			e = e.sibling;
		}
		return null;
	}
	var m = Object.assign, h = Symbol.for("react.element"), g = Symbol.for("react.transitional.element"), _ = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), x = Symbol.for("react.consumer"), S = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), T = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), k = Symbol.for("react.activity"), A = Symbol.for("react.memo_cache_sentinel"), j = Symbol.iterator;
	function M(e) {
		return typeof e != "object" || !e ? null : (e = j && e[j] || e["@@iterator"], typeof e == "function" ? e : null);
	}
	var N = Symbol.for("react.client.reference");
	function P(e) {
		if (e == null) return null;
		if (typeof e == "function") return e.$$typeof === N ? null : e.displayName || e.name || null;
		if (typeof e == "string") return e;
		switch (e) {
			case v: return "Fragment";
			case b: return "Profiler";
			case y: return "StrictMode";
			case w: return "Suspense";
			case T: return "SuspenseList";
			case k: return "Activity";
		}
		if (typeof e == "object") switch (e.$$typeof) {
			case _: return "Portal";
			case S: return e.displayName || "Context";
			case x: return (e._context.displayName || "Context") + ".Consumer";
			case C:
				var t = e.render;
				return e = e.displayName, e ||= (e = t.displayName || t.name || "", e === "" ? "ForwardRef" : "ForwardRef(" + e + ")"), e;
			case E: return t = e.displayName || null, t === null ? P(e.type) || "Memo" : t;
			case D:
				t = e._payload, e = e._init;
				try {
					return P(e(t));
				} catch {}
		}
		return null;
	}
	var ee = Array.isArray, F = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, I = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, te = {
		pending: !1,
		data: null,
		method: null,
		action: null
	}, L = [], ne = -1;
	function R(e) {
		return { current: e };
	}
	function z(e) {
		0 > ne || (e.current = L[ne], L[ne] = null, ne--);
	}
	function B(e, t) {
		ne++, L[ne] = e.current, e.current = t;
	}
	var re = R(null), ie = R(null), ae = R(null), oe = R(null);
	function se(e, t) {
		switch (B(ae, t), B(ie, e), B(re, null), t.nodeType) {
			case 9:
			case 11:
				e = (e = t.documentElement) && (e = e.namespaceURI) ? Vd(e) : 0;
				break;
			default: if (e = t.tagName, t = t.namespaceURI) t = Vd(t), e = Hd(t, e);
			else switch (e) {
				case "svg":
					e = 1;
					break;
				case "math":
					e = 2;
					break;
				default: e = 0;
			}
		}
		z(re), B(re, e);
	}
	function ce() {
		z(re), z(ie), z(ae);
	}
	function le(e) {
		e.memoizedState !== null && B(oe, e);
		var t = re.current, n = Hd(t, e.type);
		t !== n && (B(ie, e), B(re, n));
	}
	function ue(e) {
		ie.current === e && (z(re), z(ie)), oe.current === e && (z(oe), Qf._currentValue = te);
	}
	var de, fe;
	function pe(e) {
		if (de === void 0) try {
			throw Error();
		} catch (e) {
			var t = e.stack.trim().match(/\n( *(at )?)/);
			de = t && t[1] || "", fe = -1 < e.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
		}
		return "\n" + de + e + fe;
	}
	var V = !1;
	function me(e, t) {
		if (!e || V) return "";
		V = !0;
		var n = Error.prepareStackTrace;
		Error.prepareStackTrace = void 0;
		try {
			var r = { DetermineComponentFrameRoot: function() {
				try {
					if (t) {
						var n = function() {
							throw Error();
						};
						if (Object.defineProperty(n.prototype, "props", { set: function() {
							throw Error();
						} }), typeof Reflect == "object" && Reflect.construct) {
							try {
								Reflect.construct(n, []);
							} catch (e) {
								var r = e;
							}
							Reflect.construct(e, [], n);
						} else {
							try {
								n.call();
							} catch (e) {
								r = e;
							}
							e.call(n.prototype);
						}
					} else {
						try {
							throw Error();
						} catch (e) {
							r = e;
						}
						(n = e()) && typeof n.catch == "function" && n.catch(function() {});
					}
				} catch (e) {
					if (e && r && typeof e.stack == "string") return [e.stack, r.stack];
				}
				return [null, null];
			} };
			r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
			var i = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, "name");
			i && i.configurable && Object.defineProperty(r.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
			var a = r.DetermineComponentFrameRoot(), o = a[0], s = a[1];
			if (o && s) {
				var c = o.split("\n"), l = s.split("\n");
				for (i = r = 0; r < c.length && !c[r].includes("DetermineComponentFrameRoot");) r++;
				for (; i < l.length && !l[i].includes("DetermineComponentFrameRoot");) i++;
				if (r === c.length || i === l.length) for (r = c.length - 1, i = l.length - 1; 1 <= r && 0 <= i && c[r] !== l[i];) i--;
				for (; 1 <= r && 0 <= i; r--, i--) if (c[r] !== l[i]) {
					if (r !== 1 || i !== 1) do
						if (r--, i--, 0 > i || c[r] !== l[i]) {
							var u = "\n" + c[r].replace(" at new ", " at ");
							return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u;
						}
					while (1 <= r && 0 <= i);
					break;
				}
			}
		} finally {
			V = !1, Error.prepareStackTrace = n;
		}
		return (n = e ? e.displayName || e.name : "") ? pe(n) : "";
	}
	function he(e, t) {
		switch (e.tag) {
			case 26:
			case 27:
			case 5: return pe(e.type);
			case 16: return pe("Lazy");
			case 13: return e.child !== t && t !== null ? pe("Suspense Fallback") : pe("Suspense");
			case 19: return pe("SuspenseList");
			case 0:
			case 15: return me(e.type, !1);
			case 11: return me(e.type.render, !1);
			case 1: return me(e.type, !0);
			case 31: return pe("Activity");
			default: return "";
		}
	}
	function ge(e) {
		try {
			var t = "", n = null;
			do
				t += he(e, n), n = e, e = e.return;
			while (e);
			return t;
		} catch (e) {
			return "\nError generating stack: " + e.message + "\n" + e.stack;
		}
	}
	var _e = Object.prototype.hasOwnProperty, ve = t.unstable_scheduleCallback, ye = t.unstable_cancelCallback, be = t.unstable_shouldYield, xe = t.unstable_requestPaint, Se = t.unstable_now, Ce = t.unstable_getCurrentPriorityLevel, we = t.unstable_ImmediatePriority, Te = t.unstable_UserBlockingPriority, Ee = t.unstable_NormalPriority, De = t.unstable_LowPriority, Oe = t.unstable_IdlePriority, ke = t.log, Ae = t.unstable_setDisableYieldValue, je = null, Me = null;
	function Ne(e) {
		if (typeof ke == "function" && Ae(e), Me && typeof Me.setStrictMode == "function") try {
			Me.setStrictMode(je, e);
		} catch {}
	}
	var Pe = Math.clz32 ? Math.clz32 : Le, Fe = Math.log, Ie = Math.LN2;
	function Le(e) {
		return e >>>= 0, e === 0 ? 32 : 31 - (Fe(e) / Ie | 0) | 0;
	}
	var Re = 256, ze = 262144, Be = 4194304;
	function Ve(e) {
		var t = e & 42;
		if (t !== 0) return t;
		switch (e & -e) {
			case 1: return 1;
			case 2: return 2;
			case 4: return 4;
			case 8: return 8;
			case 16: return 16;
			case 32: return 32;
			case 64: return 64;
			case 128: return 128;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072: return e & 261888;
			case 262144:
			case 524288:
			case 1048576:
			case 2097152: return e & 3932160;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432: return e & 62914560;
			case 67108864: return 67108864;
			case 134217728: return 134217728;
			case 268435456: return 268435456;
			case 536870912: return 536870912;
			case 1073741824: return 0;
			default: return e;
		}
	}
	function He(e, t, n) {
		var r = e.pendingLanes;
		if (r === 0) return 0;
		var i = 0, a = e.suspendedLanes, o = e.pingedLanes;
		e = e.warmLanes;
		var s = r & 134217727;
		return s === 0 ? (s = r & ~a, s === 0 ? o === 0 ? n || (n = r & ~e, n !== 0 && (i = Ve(n))) : i = Ve(o) : i = Ve(s)) : (r = s & ~a, r === 0 ? (o &= s, o === 0 ? n || (n = s & ~e, n !== 0 && (i = Ve(n))) : i = Ve(o)) : i = Ve(r)), i === 0 ? 0 : t !== 0 && t !== i && (t & a) === 0 && (a = i & -i, n = t & -t, a >= n || a === 32 && n & 4194048) ? t : i;
	}
	function Ue(e, t) {
		return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
	}
	function We(e, t) {
		switch (e) {
			case 1:
			case 2:
			case 4:
			case 8:
			case 64: return t + 250;
			case 16:
			case 32:
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
			case 2097152: return t + 5e3;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432: return -1;
			case 67108864:
			case 134217728:
			case 268435456:
			case 536870912:
			case 1073741824: return -1;
			default: return -1;
		}
	}
	function Ge() {
		var e = Be;
		return Be <<= 1, !(Be & 62914560) && (Be = 4194304), e;
	}
	function Ke(e) {
		for (var t = [], n = 0; 31 > n; n++) t.push(e);
		return t;
	}
	function qe(e, t) {
		e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
	}
	function Je(e, t, n, r, i, a) {
		var o = e.pendingLanes;
		e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
		var s = e.entanglements, c = e.expirationTimes, l = e.hiddenUpdates;
		for (n = o & ~n; 0 < n;) {
			var u = 31 - Pe(n), d = 1 << u;
			s[u] = 0, c[u] = -1;
			var f = l[u];
			if (f !== null) for (l[u] = null, u = 0; u < f.length; u++) {
				var p = f[u];
				p !== null && (p.lane &= -536870913);
			}
			n &= ~d;
		}
		r !== 0 && Ye(e, r, 0), a !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= a & ~(o & ~t));
	}
	function Ye(e, t, n) {
		e.pendingLanes |= t, e.suspendedLanes &= ~t;
		var r = 31 - Pe(t);
		e.entangledLanes |= t, e.entanglements[r] = e.entanglements[r] | 1073741824 | n & 261930;
	}
	function Xe(e, t) {
		var n = e.entangledLanes |= t;
		for (e = e.entanglements; n;) {
			var r = 31 - Pe(n), i = 1 << r;
			i & t | e[r] & t && (e[r] |= t), n &= ~i;
		}
	}
	function Ze(e, t) {
		var n = t & -t;
		return n = n & 42 ? 1 : Qe(n), (n & (e.suspendedLanes | t)) === 0 ? n : 0;
	}
	function Qe(e) {
		switch (e) {
			case 2:
				e = 1;
				break;
			case 8:
				e = 4;
				break;
			case 32:
				e = 16;
				break;
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
				e = 128;
				break;
			case 268435456:
				e = 134217728;
				break;
			default: e = 0;
		}
		return e;
	}
	function $e(e) {
		return e &= -e, 2 < e ? 8 < e ? e & 134217727 ? 32 : 268435456 : 8 : 2;
	}
	function et() {
		var e = I.p;
		return e === 0 ? (e = window.event, e === void 0 ? 32 : mp(e.type)) : e;
	}
	function tt(e, t) {
		var n = I.p;
		try {
			return I.p = e, t();
		} finally {
			I.p = n;
		}
	}
	var nt = Math.random().toString(36).slice(2), rt = "__reactFiber$" + nt, it = "__reactProps$" + nt, at = "__reactContainer$" + nt, ot = "__reactEvents$" + nt, st = "__reactListeners$" + nt, ct = "__reactHandles$" + nt, lt = "__reactResources$" + nt, ut = "__reactMarker$" + nt;
	function dt(e) {
		delete e[rt], delete e[it], delete e[ot], delete e[st], delete e[ct];
	}
	function ft(e) {
		var t = e[rt];
		if (t) return t;
		for (var n = e.parentNode; n;) {
			if (t = n[at] || n[rt]) {
				if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = df(e); e !== null;) {
					if (n = e[rt]) return n;
					e = df(e);
				}
				return t;
			}
			e = n, n = e.parentNode;
		}
		return null;
	}
	function H(e) {
		if (e = e[rt] || e[at]) {
			var t = e.tag;
			if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
		}
		return null;
	}
	function pt(e) {
		var t = e.tag;
		if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
		throw Error(a(33));
	}
	function U(e) {
		var t = e[lt];
		return t ||= e[lt] = {
			hoistableStyles: /* @__PURE__ */ new Map(),
			hoistableScripts: /* @__PURE__ */ new Map()
		}, t;
	}
	function mt(e) {
		e[ut] = !0;
	}
	var ht = /* @__PURE__ */ new Set(), gt = {};
	function _t(e, t) {
		vt(e, t), vt(e + "Capture", t);
	}
	function vt(e, t) {
		for (gt[e] = t, e = 0; e < t.length; e++) ht.add(t[e]);
	}
	var yt = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), bt = {}, xt = {};
	function St(e) {
		return _e.call(xt, e) ? !0 : _e.call(bt, e) ? !1 : yt.test(e) ? xt[e] = !0 : (bt[e] = !0, !1);
	}
	function Ct(e, t, n) {
		if (St(t)) {
			if (n === null) e.removeAttribute(t);
			else {
				switch (typeof n) {
					case "undefined":
					case "function":
					case "symbol":
						e.removeAttribute(t);
						return;
					case "boolean":
						var r = t.toLowerCase().slice(0, 5);
						if (r !== "data-" && r !== "aria-") {
							e.removeAttribute(t);
							return;
						}
				}
				e.setAttribute(t, "" + n);
			}
		}
	}
	function wt(e, t, n) {
		if (n === null) e.removeAttribute(t);
		else {
			switch (typeof n) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					e.removeAttribute(t);
					return;
			}
			e.setAttribute(t, "" + n);
		}
	}
	function Tt(e, t, n, r) {
		if (r === null) e.removeAttribute(n);
		else {
			switch (typeof r) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					e.removeAttribute(n);
					return;
			}
			e.setAttributeNS(t, n, "" + r);
		}
	}
	function Et(e) {
		switch (typeof e) {
			case "bigint":
			case "boolean":
			case "number":
			case "string":
			case "undefined": return e;
			case "object": return e;
			default: return "";
		}
	}
	function Dt(e) {
		var t = e.type;
		return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
	}
	function Ot(e, t, n) {
		var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
		if (!e.hasOwnProperty(t) && r !== void 0 && typeof r.get == "function" && typeof r.set == "function") {
			var i = r.get, a = r.set;
			return Object.defineProperty(e, t, {
				configurable: !0,
				get: function() {
					return i.call(this);
				},
				set: function(e) {
					n = "" + e, a.call(this, e);
				}
			}), Object.defineProperty(e, t, { enumerable: r.enumerable }), {
				getValue: function() {
					return n;
				},
				setValue: function(e) {
					n = "" + e;
				},
				stopTracking: function() {
					e._valueTracker = null, delete e[t];
				}
			};
		}
	}
	function kt(e) {
		if (!e._valueTracker) {
			var t = Dt(e) ? "checked" : "value";
			e._valueTracker = Ot(e, t, "" + e[t]);
		}
	}
	function At(e) {
		if (!e) return !1;
		var t = e._valueTracker;
		if (!t) return !0;
		var n = t.getValue(), r = "";
		return e && (r = Dt(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n && (t.setValue(e), !0);
	}
	function jt(e) {
		if (e ||= typeof document < "u" ? document : void 0, e === void 0) return null;
		try {
			return e.activeElement || e.body;
		} catch {
			return e.body;
		}
	}
	var Mt = /[\n"\\]/g;
	function Nt(e) {
		return e.replace(Mt, function(e) {
			return "\\" + e.charCodeAt(0).toString(16) + " ";
		});
	}
	function Pt(e, t, n, r, i, a, o, s) {
		e.name = "", o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" ? e.type = o : e.removeAttribute("type"), t == null ? o !== "submit" && o !== "reset" || e.removeAttribute("value") : o === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Et(t)) : e.value !== "" + Et(t) && (e.value = "" + Et(t)), t == null ? n == null ? r != null && e.removeAttribute("value") : It(e, o, Et(n)) : It(e, o, Et(t)), i == null && a != null && (e.defaultChecked = !!a), i != null && (e.checked = i && typeof i != "function" && typeof i != "symbol"), s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? e.name = "" + Et(s) : e.removeAttribute("name");
	}
	function Ft(e, t, n, r, i, a, o, s) {
		if (a != null && typeof a != "function" && typeof a != "symbol" && typeof a != "boolean" && (e.type = a), t != null || n != null) {
			if (!(a !== "submit" && a !== "reset" || t != null)) {
				kt(e);
				return;
			}
			n = n == null ? "" : "" + Et(n), t = t == null ? n : "" + Et(t), s || t === e.value || (e.value = t), e.defaultValue = t;
		}
		r ??= i, r = typeof r != "function" && typeof r != "symbol" && !!r, e.checked = s ? e.checked : !!r, e.defaultChecked = !!r, o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" && (e.name = o), kt(e);
	}
	function It(e, t, n) {
		t === "number" && jt(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
	}
	function Lt(e, t, n, r) {
		if (e = e.options, t) {
			t = {};
			for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
			for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
		} else {
			for (n = "" + Et(n), t = null, i = 0; i < e.length; i++) {
				if (e[i].value === n) {
					e[i].selected = !0, r && (e[i].defaultSelected = !0);
					return;
				}
				t !== null || e[i].disabled || (t = e[i]);
			}
			t !== null && (t.selected = !0);
		}
	}
	function Rt(e, t, n) {
		if (t != null && (t = "" + Et(t), t !== e.value && (e.value = t), n == null)) {
			e.defaultValue !== t && (e.defaultValue = t);
			return;
		}
		e.defaultValue = n == null ? "" : "" + Et(n);
	}
	function zt(e, t, n, r) {
		if (t == null) {
			if (r != null) {
				if (n != null) throw Error(a(92));
				if (ee(r)) {
					if (1 < r.length) throw Error(a(93));
					r = r[0];
				}
				n = r;
			}
			n ??= "", t = n;
		}
		n = Et(t), e.defaultValue = n, r = e.textContent, r === n && r !== "" && r !== null && (e.value = r), kt(e);
	}
	function Bt(e, t) {
		if (t) {
			var n = e.firstChild;
			if (n && n === e.lastChild && n.nodeType === 3) {
				n.nodeValue = t;
				return;
			}
		}
		e.textContent = t;
	}
	var Vt = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
	function Ht(e, t, n) {
		var r = t.indexOf("--") === 0;
		n == null || typeof n == "boolean" || n === "" ? r ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : r ? e.setProperty(t, n) : typeof n != "number" || n === 0 || Vt.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
	}
	function Ut(e, t, n) {
		if (t != null && typeof t != "object") throw Error(a(62));
		if (e = e.style, n != null) {
			for (var r in n) !n.hasOwnProperty(r) || t != null && t.hasOwnProperty(r) || (r.indexOf("--") === 0 ? e.setProperty(r, "") : r === "float" ? e.cssFloat = "" : e[r] = "");
			for (var i in t) r = t[i], t.hasOwnProperty(i) && n[i] !== r && Ht(e, i, r);
		} else for (var o in t) t.hasOwnProperty(o) && Ht(e, o, t[o]);
	}
	function Wt(e) {
		if (e.indexOf("-") === -1) return !1;
		switch (e) {
			case "annotation-xml":
			case "color-profile":
			case "font-face":
			case "font-face-src":
			case "font-face-uri":
			case "font-face-format":
			case "font-face-name":
			case "missing-glyph": return !1;
			default: return !0;
		}
	}
	var Gt = /* @__PURE__ */ new Map([
		["acceptCharset", "accept-charset"],
		["htmlFor", "for"],
		["httpEquiv", "http-equiv"],
		["crossOrigin", "crossorigin"],
		["accentHeight", "accent-height"],
		["alignmentBaseline", "alignment-baseline"],
		["arabicForm", "arabic-form"],
		["baselineShift", "baseline-shift"],
		["capHeight", "cap-height"],
		["clipPath", "clip-path"],
		["clipRule", "clip-rule"],
		["colorInterpolation", "color-interpolation"],
		["colorInterpolationFilters", "color-interpolation-filters"],
		["colorProfile", "color-profile"],
		["colorRendering", "color-rendering"],
		["dominantBaseline", "dominant-baseline"],
		["enableBackground", "enable-background"],
		["fillOpacity", "fill-opacity"],
		["fillRule", "fill-rule"],
		["floodColor", "flood-color"],
		["floodOpacity", "flood-opacity"],
		["fontFamily", "font-family"],
		["fontSize", "font-size"],
		["fontSizeAdjust", "font-size-adjust"],
		["fontStretch", "font-stretch"],
		["fontStyle", "font-style"],
		["fontVariant", "font-variant"],
		["fontWeight", "font-weight"],
		["glyphName", "glyph-name"],
		["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
		["glyphOrientationVertical", "glyph-orientation-vertical"],
		["horizAdvX", "horiz-adv-x"],
		["horizOriginX", "horiz-origin-x"],
		["imageRendering", "image-rendering"],
		["letterSpacing", "letter-spacing"],
		["lightingColor", "lighting-color"],
		["markerEnd", "marker-end"],
		["markerMid", "marker-mid"],
		["markerStart", "marker-start"],
		["overlinePosition", "overline-position"],
		["overlineThickness", "overline-thickness"],
		["paintOrder", "paint-order"],
		["panose-1", "panose-1"],
		["pointerEvents", "pointer-events"],
		["renderingIntent", "rendering-intent"],
		["shapeRendering", "shape-rendering"],
		["stopColor", "stop-color"],
		["stopOpacity", "stop-opacity"],
		["strikethroughPosition", "strikethrough-position"],
		["strikethroughThickness", "strikethrough-thickness"],
		["strokeDasharray", "stroke-dasharray"],
		["strokeDashoffset", "stroke-dashoffset"],
		["strokeLinecap", "stroke-linecap"],
		["strokeLinejoin", "stroke-linejoin"],
		["strokeMiterlimit", "stroke-miterlimit"],
		["strokeOpacity", "stroke-opacity"],
		["strokeWidth", "stroke-width"],
		["textAnchor", "text-anchor"],
		["textDecoration", "text-decoration"],
		["textRendering", "text-rendering"],
		["transformOrigin", "transform-origin"],
		["underlinePosition", "underline-position"],
		["underlineThickness", "underline-thickness"],
		["unicodeBidi", "unicode-bidi"],
		["unicodeRange", "unicode-range"],
		["unitsPerEm", "units-per-em"],
		["vAlphabetic", "v-alphabetic"],
		["vHanging", "v-hanging"],
		["vIdeographic", "v-ideographic"],
		["vMathematical", "v-mathematical"],
		["vectorEffect", "vector-effect"],
		["vertAdvY", "vert-adv-y"],
		["vertOriginX", "vert-origin-x"],
		["vertOriginY", "vert-origin-y"],
		["wordSpacing", "word-spacing"],
		["writingMode", "writing-mode"],
		["xmlnsXlink", "xmlns:xlink"],
		["xHeight", "x-height"]
	]), Kt = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
	function qt(e) {
		return Kt.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
	}
	function Jt() {}
	var Yt = null;
	function Xt(e) {
		return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
	}
	var Zt = null, Qt = null;
	function $t(e) {
		var t = H(e);
		if (t && (e = t.stateNode)) {
			var n = e[it] || null;
			a: switch (e = t.stateNode, t.type) {
				case "input":
					if (Pt(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), t = n.name, n.type === "radio" && t != null) {
						for (n = e; n.parentNode;) n = n.parentNode;
						for (n = n.querySelectorAll("input[name=\"" + Nt("" + t) + "\"][type=\"radio\"]"), t = 0; t < n.length; t++) {
							var r = n[t];
							if (r !== e && r.form === e.form) {
								var i = r[it] || null;
								if (!i) throw Error(a(90));
								Pt(r, i.value, i.defaultValue, i.defaultValue, i.checked, i.defaultChecked, i.type, i.name);
							}
						}
						for (t = 0; t < n.length; t++) r = n[t], r.form === e.form && At(r);
					}
					break a;
				case "textarea":
					Rt(e, n.value, n.defaultValue);
					break a;
				case "select": t = n.value, t != null && Lt(e, !!n.multiple, t, !1);
			}
		}
	}
	var en = !1;
	function tn(e, t, n) {
		if (en) return e(t, n);
		en = !0;
		try {
			return e(t);
		} finally {
			if (en = !1, (Zt !== null || Qt !== null) && (vu(), Zt && (t = Zt, e = Qt, Qt = Zt = null, $t(t), e))) for (t = 0; t < e.length; t++) $t(e[t]);
		}
	}
	function nn(e, t) {
		var n = e.stateNode;
		if (n === null) return null;
		var r = n[it] || null;
		if (r === null) return null;
		n = r[t];
		a: switch (t) {
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
				(r = !r.disabled) || (e = e.type, r = e !== "button" && e !== "input" && e !== "select" && e !== "textarea"), e = !r;
				break a;
			default: e = !1;
		}
		if (e) return null;
		if (n && typeof n != "function") throw Error(a(231, t, typeof n));
		return n;
	}
	var rn = !(typeof window > "u" || window.document === void 0 || window.document.createElement === void 0), an = !1;
	if (rn) try {
		var on = {};
		Object.defineProperty(on, "passive", { get: function() {
			an = !0;
		} }), window.addEventListener("test", on, on), window.removeEventListener("test", on, on);
	} catch {
		an = !1;
	}
	var sn = null, cn = null, ln = null;
	function un() {
		if (ln) return ln;
		var e, t = cn, n = t.length, r, i = "value" in sn ? sn.value : sn.textContent, a = i.length;
		for (e = 0; e < n && t[e] === i[e]; e++);
		var o = n - e;
		for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
		return ln = i.slice(e, 1 < r ? 1 - r : void 0);
	}
	function dn(e) {
		var t = e.keyCode;
		return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
	}
	function fn() {
		return !0;
	}
	function pn() {
		return !1;
	}
	function W(e) {
		function t(t, n, r, i, a) {
			for (var o in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = i, this.target = a, this.currentTarget = null, e) e.hasOwnProperty(o) && (t = e[o], this[o] = t ? t(i) : i[o]);
			return this.isDefaultPrevented = (i.defaultPrevented == null ? !1 === i.returnValue : i.defaultPrevented) ? fn : pn, this.isPropagationStopped = pn, this;
		}
		return m(t.prototype, {
			preventDefault: function() {
				this.defaultPrevented = !0;
				var e = this.nativeEvent;
				e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = fn);
			},
			stopPropagation: function() {
				var e = this.nativeEvent;
				e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = fn);
			},
			persist: function() {},
			isPersistent: fn
		}), t;
	}
	var G = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function(e) {
			return e.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0
	}, mn = W(G), hn = m({}, G, {
		view: 0,
		detail: 0
	}), gn = W(hn), _n, vn, yn, bn = m({}, hn, {
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
		getModifierState: jn,
		button: 0,
		buttons: 0,
		relatedTarget: function(e) {
			return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
		},
		movementX: function(e) {
			return "movementX" in e ? e.movementX : (e !== yn && (yn && e.type === "mousemove" ? (_n = e.screenX - yn.screenX, vn = e.screenY - yn.screenY) : vn = _n = 0, yn = e), _n);
		},
		movementY: function(e) {
			return "movementY" in e ? e.movementY : vn;
		}
	}), xn = W(bn), Sn = W(m({}, bn, { dataTransfer: 0 })), Cn = W(m({}, hn, { relatedTarget: 0 })), wn = W(m({}, G, {
		animationName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), Tn = W(m({}, G, { clipboardData: function(e) {
		return "clipboardData" in e ? e.clipboardData : window.clipboardData;
	} })), En = W(m({}, G, { data: 0 })), Dn = {
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
		MozPrintableKey: "Unidentified"
	}, On = {
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
		224: "Meta"
	}, kn = {
		Alt: "altKey",
		Control: "ctrlKey",
		Meta: "metaKey",
		Shift: "shiftKey"
	};
	function An(e) {
		var t = this.nativeEvent;
		return t.getModifierState ? t.getModifierState(e) : (e = kn[e]) ? !!t[e] : !1;
	}
	function jn() {
		return An;
	}
	var Mn = W(m({}, hn, {
		key: function(e) {
			if (e.key) {
				var t = Dn[e.key] || e.key;
				if (t !== "Unidentified") return t;
			}
			return e.type === "keypress" ? (e = dn(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? On[e.keyCode] || "Unidentified" : "";
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: jn,
		charCode: function(e) {
			return e.type === "keypress" ? dn(e) : 0;
		},
		keyCode: function(e) {
			return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		},
		which: function(e) {
			return e.type === "keypress" ? dn(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		}
	})), Nn = W(m({}, bn, {
		pointerId: 0,
		width: 0,
		height: 0,
		pressure: 0,
		tangentialPressure: 0,
		tiltX: 0,
		tiltY: 0,
		twist: 0,
		pointerType: 0,
		isPrimary: 0
	})), Pn = W(m({}, hn, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: jn
	})), Fn = W(m({}, G, {
		propertyName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), In = W(m({}, bn, {
		deltaX: function(e) {
			return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
		},
		deltaY: function(e) {
			return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
		},
		deltaZ: 0,
		deltaMode: 0
	})), Ln = W(m({}, G, {
		newState: 0,
		oldState: 0
	})), Rn = [
		9,
		13,
		27,
		32
	], zn = rn && "CompositionEvent" in window, Bn = null;
	rn && "documentMode" in document && (Bn = document.documentMode);
	var Vn = rn && "TextEvent" in window && !Bn, Hn = rn && (!zn || Bn && 8 < Bn && 11 >= Bn), Un = " ", Wn = !1;
	function Gn(e, t) {
		switch (e) {
			case "keyup": return Rn.indexOf(t.keyCode) !== -1;
			case "keydown": return t.keyCode !== 229;
			case "keypress":
			case "mousedown":
			case "focusout": return !0;
			default: return !1;
		}
	}
	function Kn(e) {
		return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
	}
	var qn = !1;
	function Jn(e, t) {
		switch (e) {
			case "compositionend": return Kn(t);
			case "keypress": return t.which === 32 ? (Wn = !0, Un) : null;
			case "textInput": return e = t.data, e === Un && Wn ? null : e;
			default: return null;
		}
	}
	function Yn(e, t) {
		if (qn) return e === "compositionend" || !zn && Gn(e, t) ? (e = un(), ln = cn = sn = null, qn = !1, e) : null;
		switch (e) {
			case "paste": return null;
			case "keypress":
				if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
					if (t.char && 1 < t.char.length) return t.char;
					if (t.which) return String.fromCharCode(t.which);
				}
				return null;
			case "compositionend": return Hn && t.locale !== "ko" ? null : t.data;
			default: return null;
		}
	}
	var Xn = {
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
		week: !0
	};
	function Zn(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t === "input" ? !!Xn[e.type] : t === "textarea";
	}
	function Qn(e, t, n, r) {
		Zt ? Qt ? Qt.push(r) : Qt = [r] : Zt = r, t = Td(t, "onChange"), 0 < t.length && (n = new mn("onChange", "change", null, n, r), e.push({
			event: n,
			listeners: t
		}));
	}
	var $n = null, er = null;
	function tr(e) {
		vd(e, 0);
	}
	function nr(e) {
		if (At(pt(e))) return e;
	}
	function rr(e, t) {
		if (e === "change") return t;
	}
	var ir = !1;
	if (rn) {
		var ar;
		if (rn) {
			var or = "oninput" in document;
			if (!or) {
				var sr = document.createElement("div");
				sr.setAttribute("oninput", "return;"), or = typeof sr.oninput == "function";
			}
			ar = or;
		} else ar = !1;
		ir = ar && (!document.documentMode || 9 < document.documentMode);
	}
	function cr() {
		$n && ($n.detachEvent("onpropertychange", lr), er = $n = null);
	}
	function lr(e) {
		if (e.propertyName === "value" && nr(er)) {
			var t = [];
			Qn(t, er, e, Xt(e)), tn(tr, t);
		}
	}
	function ur(e, t, n) {
		e === "focusin" ? (cr(), $n = t, er = n, $n.attachEvent("onpropertychange", lr)) : e === "focusout" && cr();
	}
	function dr(e) {
		if (e === "selectionchange" || e === "keyup" || e === "keydown") return nr(er);
	}
	function fr(e, t) {
		if (e === "click") return nr(t);
	}
	function pr(e, t) {
		if (e === "input" || e === "change") return nr(t);
	}
	function mr(e, t) {
		return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
	}
	var hr = typeof Object.is == "function" ? Object.is : mr;
	function gr(e, t) {
		if (hr(e, t)) return !0;
		if (typeof e != "object" || !e || typeof t != "object" || !t) return !1;
		var n = Object.keys(e), r = Object.keys(t);
		if (n.length !== r.length) return !1;
		for (r = 0; r < n.length; r++) {
			var i = n[r];
			if (!_e.call(t, i) || !hr(e[i], t[i])) return !1;
		}
		return !0;
	}
	function _r(e) {
		for (; e && e.firstChild;) e = e.firstChild;
		return e;
	}
	function vr(e, t) {
		var n = _r(e);
		e = 0;
		for (var r; n;) {
			if (n.nodeType === 3) {
				if (r = e + n.textContent.length, e <= t && r >= t) return {
					node: n,
					offset: t - e
				};
				e = r;
			}
			a: {
				for (; n;) {
					if (n.nextSibling) {
						n = n.nextSibling;
						break a;
					}
					n = n.parentNode;
				}
				n = void 0;
			}
			n = _r(n);
		}
	}
	function yr(e, t) {
		return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? yr(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
	}
	function br(e) {
		e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
		for (var t = jt(e.document); t instanceof e.HTMLIFrameElement;) {
			try {
				var n = typeof t.contentWindow.location.href == "string";
			} catch {
				n = !1;
			}
			if (n) e = t.contentWindow;
			else break;
			t = jt(e.document);
		}
		return t;
	}
	function xr(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
	}
	var Sr = rn && "documentMode" in document && 11 >= document.documentMode, Cr = null, wr = null, Tr = null, Er = !1;
	function Dr(e, t, n) {
		var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
		Er || Cr == null || Cr !== jt(r) || (r = Cr, "selectionStart" in r && xr(r) ? r = {
			start: r.selectionStart,
			end: r.selectionEnd
		} : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
			anchorNode: r.anchorNode,
			anchorOffset: r.anchorOffset,
			focusNode: r.focusNode,
			focusOffset: r.focusOffset
		}), Tr && gr(Tr, r) || (Tr = r, r = Td(wr, "onSelect"), 0 < r.length && (t = new mn("onSelect", "select", null, t, n), e.push({
			event: t,
			listeners: r
		}), t.target = Cr)));
	}
	function K(e, t) {
		var n = {};
		return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
	}
	var Or = {
		animationend: K("Animation", "AnimationEnd"),
		animationiteration: K("Animation", "AnimationIteration"),
		animationstart: K("Animation", "AnimationStart"),
		transitionrun: K("Transition", "TransitionRun"),
		transitionstart: K("Transition", "TransitionStart"),
		transitioncancel: K("Transition", "TransitionCancel"),
		transitionend: K("Transition", "TransitionEnd")
	}, kr = {}, Ar = {};
	rn && (Ar = document.createElement("div").style, "AnimationEvent" in window || (delete Or.animationend.animation, delete Or.animationiteration.animation, delete Or.animationstart.animation), "TransitionEvent" in window || delete Or.transitionend.transition);
	function jr(e) {
		if (kr[e]) return kr[e];
		if (!Or[e]) return e;
		var t = Or[e], n;
		for (n in t) if (t.hasOwnProperty(n) && n in Ar) return kr[e] = t[n];
		return e;
	}
	var Mr = jr("animationend"), Nr = jr("animationiteration"), Pr = jr("animationstart"), Fr = jr("transitionrun"), Ir = jr("transitionstart"), Lr = jr("transitioncancel"), Rr = jr("transitionend"), q = /* @__PURE__ */ new Map(), zr = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
	zr.push("scrollEnd");
	function Br(e, t) {
		q.set(e, t), _t(t, [e]);
	}
	var Vr = typeof reportError == "function" ? reportError : function(e) {
		if (typeof window == "object" && typeof window.ErrorEvent == "function") {
			var t = new window.ErrorEvent("error", {
				bubbles: !0,
				cancelable: !0,
				message: typeof e == "object" && e && typeof e.message == "string" ? String(e.message) : String(e),
				error: e
			});
			if (!window.dispatchEvent(t)) return;
		} else if (typeof process == "object" && typeof process.emit == "function") {
			process.emit("uncaughtException", e);
			return;
		}
		console.error(e);
	}, Hr = [], Ur = 0, Wr = 0;
	function Gr() {
		for (var e = Ur, t = Wr = Ur = 0; t < e;) {
			var n = Hr[t];
			Hr[t++] = null;
			var r = Hr[t];
			Hr[t++] = null;
			var i = Hr[t];
			Hr[t++] = null;
			var a = Hr[t];
			if (Hr[t++] = null, r !== null && i !== null) {
				var o = r.pending;
				o === null ? i.next = i : (i.next = o.next, o.next = i), r.pending = i;
			}
			a !== 0 && Yr(n, i, a);
		}
	}
	function Kr(e, t, n, r) {
		Hr[Ur++] = e, Hr[Ur++] = t, Hr[Ur++] = n, Hr[Ur++] = r, Wr |= r, e.lanes |= r, e = e.alternate, e !== null && (e.lanes |= r);
	}
	function qr(e, t, n, r) {
		return Kr(e, t, n, r), Xr(e);
	}
	function Jr(e, t) {
		return Kr(e, null, null, t), Xr(e);
	}
	function Yr(e, t, n) {
		e.lanes |= n;
		var r = e.alternate;
		r !== null && (r.lanes |= n);
		for (var i = !1, a = e.return; a !== null;) a.childLanes |= n, r = a.alternate, r !== null && (r.childLanes |= n), a.tag === 22 && (e = a.stateNode, e === null || e._visibility & 1 || (i = !0)), e = a, a = a.return;
		return e.tag === 3 ? (a = e.stateNode, i && t !== null && (i = 31 - Pe(n), e = a.hiddenUpdates, r = e[i], r === null ? e[i] = [t] : r.push(t), t.lane = n | 536870912), a) : null;
	}
	function Xr(e) {
		if (50 < lu) throw lu = 0, uu = null, Error(a(185));
		for (var t = e.return; t !== null;) e = t, t = e.return;
		return e.tag === 3 ? e.stateNode : null;
	}
	var Zr = {};
	function Qr(e, t, n, r) {
		this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
	}
	function $r(e, t, n, r) {
		return new Qr(e, t, n, r);
	}
	function ei(e) {
		return e = e.prototype, !(!e || !e.isReactComponent);
	}
	function ti(e, t) {
		var n = e.alternate;
		return n === null ? (n = $r(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 65011712, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
			lanes: t.lanes,
			firstContext: t.firstContext
		}, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
	}
	function ni(e, t) {
		e.flags &= 65011714;
		var n = e.alternate;
		return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
			lanes: t.lanes,
			firstContext: t.firstContext
		}), e;
	}
	function ri(e, t, n, r, i, o) {
		var s = 0;
		if (r = e, typeof e == "function") ei(e) && (s = 1);
		else if (typeof e == "string") s = Uf(e, n, re.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
		else a: switch (e) {
			case k: return e = $r(31, n, t, i), e.elementType = k, e.lanes = o, e;
			case v: return ii(n.children, i, o, t);
			case y:
				s = 8, i |= 24;
				break;
			case b: return e = $r(12, n, t, i | 2), e.elementType = b, e.lanes = o, e;
			case w: return e = $r(13, n, t, i), e.elementType = w, e.lanes = o, e;
			case T: return e = $r(19, n, t, i), e.elementType = T, e.lanes = o, e;
			default:
				if (typeof e == "object" && e) switch (e.$$typeof) {
					case S:
						s = 10;
						break a;
					case x:
						s = 9;
						break a;
					case C:
						s = 11;
						break a;
					case E:
						s = 14;
						break a;
					case D:
						s = 16, r = null;
						break a;
				}
				s = 29, n = Error(a(130, e === null ? "null" : typeof e, "")), r = null;
		}
		return t = $r(s, n, t, i), t.elementType = e, t.type = r, t.lanes = o, t;
	}
	function ii(e, t, n, r) {
		return e = $r(7, e, r, t), e.lanes = n, e;
	}
	function ai(e, t, n) {
		return e = $r(6, e, null, t), e.lanes = n, e;
	}
	function oi(e) {
		var t = $r(18, null, null, 0);
		return t.stateNode = e, t;
	}
	function si(e, t, n) {
		return t = $r(4, e.children === null ? [] : e.children, e.key, t), t.lanes = n, t.stateNode = {
			containerInfo: e.containerInfo,
			pendingChildren: null,
			implementation: e.implementation
		}, t;
	}
	var ci = /* @__PURE__ */ new WeakMap();
	function li(e, t) {
		if (typeof e == "object" && e) {
			var n = ci.get(e);
			return n === void 0 ? (t = {
				value: e,
				source: t,
				stack: ge(t)
			}, ci.set(e, t), t) : n;
		}
		return {
			value: e,
			source: t,
			stack: ge(t)
		};
	}
	var ui = [], di = 0, fi = null, pi = 0, mi = [], hi = 0, gi = null, _i = 1, vi = "";
	function yi(e, t) {
		ui[di++] = pi, ui[di++] = fi, fi = e, pi = t;
	}
	function bi(e, t, n) {
		mi[hi++] = _i, mi[hi++] = vi, mi[hi++] = gi, gi = e;
		var r = _i;
		e = vi;
		var i = 32 - Pe(r) - 1;
		r &= ~(1 << i), n += 1;
		var a = 32 - Pe(t) + i;
		if (30 < a) {
			var o = i - i % 5;
			a = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, _i = 1 << 32 - Pe(t) + i | n << i | r, vi = a + e;
		} else _i = 1 << a | n << i | r, vi = e;
	}
	function xi(e) {
		e.return !== null && (yi(e, 1), bi(e, 1, 0));
	}
	function Si(e) {
		for (; e === fi;) fi = ui[--di], ui[di] = null, pi = ui[--di], ui[di] = null;
		for (; e === gi;) gi = mi[--hi], mi[hi] = null, vi = mi[--hi], mi[hi] = null, _i = mi[--hi], mi[hi] = null;
	}
	function Ci(e, t) {
		mi[hi++] = _i, mi[hi++] = vi, mi[hi++] = gi, _i = t.id, vi = t.overflow, gi = e;
	}
	var wi = null, Ti = null, J = !1, Ei = null, Di = !1, Oi = Error(a(519));
	function ki(e) {
		throw Fi(li(Error(a(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", "")), e)), Oi;
	}
	function Ai(e) {
		var t = e.stateNode, n = e.type, r = e.memoizedProps;
		switch (t[rt] = e, t[it] = r, n) {
			case "dialog":
				$("cancel", t), $("close", t);
				break;
			case "iframe":
			case "object":
			case "embed":
				$("load", t);
				break;
			case "video":
			case "audio":
				for (n = 0; n < gd.length; n++) $(gd[n], t);
				break;
			case "source":
				$("error", t);
				break;
			case "img":
			case "image":
			case "link":
				$("error", t), $("load", t);
				break;
			case "details":
				$("toggle", t);
				break;
			case "input":
				$("invalid", t), Ft(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0);
				break;
			case "select":
				$("invalid", t);
				break;
			case "textarea": $("invalid", t), zt(t, r.value, r.defaultValue, r.children);
		}
		n = r.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || !0 === r.suppressHydrationWarning || jd(t.textContent, n) ? (r.popover != null && ($("beforetoggle", t), $("toggle", t)), r.onScroll != null && $("scroll", t), r.onScrollEnd != null && $("scrollend", t), r.onClick != null && (t.onclick = Jt), t = !0) : t = !1, t || ki(e, !0);
	}
	function ji(e) {
		for (wi = e.return; wi;) switch (wi.tag) {
			case 5:
			case 31:
			case 13:
				Di = !1;
				return;
			case 27:
			case 3:
				Di = !0;
				return;
			default: wi = wi.return;
		}
	}
	function Mi(e) {
		if (e !== wi) return !1;
		if (!J) return ji(e), J = !0, !1;
		var t = e.tag, n;
		if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = n === "form" || n === "button" || Ud(e.type, e.memoizedProps)), n = !n), n && Ti && ki(e), ji(e), t === 13) {
			if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(a(317));
			Ti = uf(e);
		} else if (t === 31) {
			if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(a(317));
			Ti = uf(e);
		} else t === 27 ? (t = Ti, Zd(e.type) ? (e = lf, lf = null, Ti = e) : Ti = t) : Ti = wi ? cf(e.stateNode.nextSibling) : null;
		return !0;
	}
	function Ni() {
		Ti = wi = null, J = !1;
	}
	function Pi() {
		var e = Ei;
		return e !== null && (Yl === null ? Yl = e : Yl.push.apply(Yl, e), Ei = null), e;
	}
	function Fi(e) {
		Ei === null ? Ei = [e] : Ei.push(e);
	}
	var Ii = R(null), Li = null, Ri = null;
	function zi(e, t, n) {
		B(Ii, t._currentValue), t._currentValue = n;
	}
	function Bi(e) {
		e._currentValue = Ii.current, z(Ii);
	}
	function Vi(e, t, n) {
		for (; e !== null;) {
			var r = e.alternate;
			if ((e.childLanes & t) === t ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t) : (e.childLanes |= t, r !== null && (r.childLanes |= t)), e === n) break;
			e = e.return;
		}
	}
	function Hi(e, t, n, r) {
		var i = e.child;
		for (i !== null && (i.return = e); i !== null;) {
			var o = i.dependencies;
			if (o !== null) {
				var s = i.child;
				o = o.firstContext;
				a: for (; o !== null;) {
					var c = o;
					o = i;
					for (var l = 0; l < t.length; l++) if (c.context === t[l]) {
						o.lanes |= n, c = o.alternate, c !== null && (c.lanes |= n), Vi(o.return, n, e), r || (s = null);
						break a;
					}
					o = c.next;
				}
			} else if (i.tag === 18) {
				if (s = i.return, s === null) throw Error(a(341));
				s.lanes |= n, o = s.alternate, o !== null && (o.lanes |= n), Vi(s, n, e), s = null;
			} else s = i.child;
			if (s !== null) s.return = i;
			else for (s = i; s !== null;) {
				if (s === e) {
					s = null;
					break;
				}
				if (i = s.sibling, i !== null) {
					i.return = s.return, s = i;
					break;
				}
				s = s.return;
			}
			i = s;
		}
	}
	function Ui(e, t, n, r) {
		e = null;
		for (var i = t, o = !1; i !== null;) {
			if (!o) {
				if (i.flags & 524288) o = !0;
				else if (i.flags & 262144) break;
			}
			if (i.tag === 10) {
				var s = i.alternate;
				if (s === null) throw Error(a(387));
				if (s = s.memoizedProps, s !== null) {
					var c = i.type;
					hr(i.pendingProps.value, s.value) || (e === null ? e = [c] : e.push(c));
				}
			} else if (i === oe.current) {
				if (s = i.alternate, s === null) throw Error(a(387));
				s.memoizedState.memoizedState !== i.memoizedState.memoizedState && (e === null ? e = [Qf] : e.push(Qf));
			}
			i = i.return;
		}
		e !== null && Hi(t, e, n, r), t.flags |= 262144;
	}
	function Wi(e) {
		for (e = e.firstContext; e !== null;) {
			if (!hr(e.context._currentValue, e.memoizedValue)) return !0;
			e = e.next;
		}
		return !1;
	}
	function Gi(e) {
		Li = e, Ri = null, e = e.dependencies, e !== null && (e.firstContext = null);
	}
	function Ki(e) {
		return Ji(Li, e);
	}
	function qi(e, t) {
		return Li === null && Gi(e), Ji(e, t);
	}
	function Ji(e, t) {
		var n = t._currentValue;
		if (t = {
			context: t,
			memoizedValue: n,
			next: null
		}, Ri === null) {
			if (e === null) throw Error(a(308));
			Ri = t, e.dependencies = {
				lanes: 0,
				firstContext: t
			}, e.flags |= 524288;
		} else Ri = Ri.next = t;
		return n;
	}
	var Yi = typeof AbortController < "u" ? AbortController : function() {
		var e = [], t = this.signal = {
			aborted: !1,
			addEventListener: function(t, n) {
				e.push(n);
			}
		};
		this.abort = function() {
			t.aborted = !0, e.forEach(function(e) {
				return e();
			});
		};
	}, Xi = t.unstable_scheduleCallback, Zi = t.unstable_NormalPriority, Qi = {
		$$typeof: S,
		Consumer: null,
		Provider: null,
		_currentValue: null,
		_currentValue2: null,
		_threadCount: 0
	};
	function $i() {
		return {
			controller: new Yi(),
			data: /* @__PURE__ */ new Map(),
			refCount: 0
		};
	}
	function ea(e) {
		e.refCount--, e.refCount === 0 && Xi(Zi, function() {
			e.controller.abort();
		});
	}
	var ta = null, na = 0, ra = 0, ia = null;
	function aa(e, t) {
		if (ta === null) {
			var n = ta = [];
			na = 0, ra = ud(), ia = {
				status: "pending",
				value: void 0,
				then: function(e) {
					n.push(e);
				}
			};
		}
		return na++, t.then(oa, oa), t;
	}
	function oa() {
		if (--na === 0 && ta !== null) {
			ia !== null && (ia.status = "fulfilled");
			var e = ta;
			ta = null, ra = 0, ia = null;
			for (var t = 0; t < e.length; t++) (0, e[t])();
		}
	}
	function sa(e, t) {
		var n = [], r = {
			status: "pending",
			value: null,
			reason: null,
			then: function(e) {
				n.push(e);
			}
		};
		return e.then(function() {
			r.status = "fulfilled", r.value = t;
			for (var e = 0; e < n.length; e++) (0, n[e])(t);
		}, function(e) {
			for (r.status = "rejected", r.reason = e, e = 0; e < n.length; e++) (0, n[e])(void 0);
		}), r;
	}
	var ca = F.S;
	F.S = function(e, t) {
		Ql = Se(), typeof t == "object" && t && typeof t.then == "function" && aa(e, t), ca !== null && ca(e, t);
	};
	var la = R(null);
	function ua() {
		var e = la.current;
		return e === null ? Fl.pooledCache : e;
	}
	function da(e, t) {
		t === null ? B(la, la.current) : B(la, t.pool);
	}
	function fa() {
		var e = ua();
		return e === null ? null : {
			parent: Qi._currentValue,
			pool: e
		};
	}
	var pa = Error(a(460)), ma = Error(a(474)), ha = Error(a(542)), ga = { then: function() {} };
	function _a(e) {
		return e = e.status, e === "fulfilled" || e === "rejected";
	}
	function va(e, t, n) {
		switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(Jt, Jt), t = n), t.status) {
			case "fulfilled": return t.value;
			case "rejected": throw e = t.reason, Sa(e), e;
			default:
				if (typeof t.status == "string") t.then(Jt, Jt);
				else {
					if (e = Fl, e !== null && 100 < e.shellSuspendCounter) throw Error(a(482));
					e = t, e.status = "pending", e.then(function(e) {
						if (t.status === "pending") {
							var n = t;
							n.status = "fulfilled", n.value = e;
						}
					}, function(e) {
						if (t.status === "pending") {
							var n = t;
							n.status = "rejected", n.reason = e;
						}
					});
				}
				switch (t.status) {
					case "fulfilled": return t.value;
					case "rejected": throw e = t.reason, Sa(e), e;
				}
				throw ba = t, pa;
		}
	}
	function ya(e) {
		try {
			var t = e._init;
			return t(e._payload);
		} catch (e) {
			throw typeof e == "object" && e && typeof e.then == "function" ? (ba = e, pa) : e;
		}
	}
	var ba = null;
	function xa() {
		if (ba === null) throw Error(a(459));
		var e = ba;
		return ba = null, e;
	}
	function Sa(e) {
		if (e === pa || e === ha) throw Error(a(483));
	}
	var Ca = null, wa = 0;
	function Ta(e) {
		var t = wa;
		return wa += 1, Ca === null && (Ca = []), va(Ca, e, t);
	}
	function Ea(e, t) {
		t = t.props.ref, e.ref = t === void 0 ? null : t;
	}
	function Da(e, t) {
		throw t.$$typeof === h ? Error(a(525)) : (e = Object.prototype.toString.call(t), Error(a(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
	}
	function Oa(e) {
		function t(t, n) {
			if (e) {
				var r = t.deletions;
				r === null ? (t.deletions = [n], t.flags |= 16) : r.push(n);
			}
		}
		function n(n, r) {
			if (!e) return null;
			for (; r !== null;) t(n, r), r = r.sibling;
			return null;
		}
		function r(e) {
			for (var t = /* @__PURE__ */ new Map(); e !== null;) e.key === null ? t.set(e.index, e) : t.set(e.key, e), e = e.sibling;
			return t;
		}
		function i(e, t) {
			return e = ti(e, t), e.index = 0, e.sibling = null, e;
		}
		function o(t, n, r) {
			return t.index = r, e ? (r = t.alternate, r === null ? (t.flags |= 67108866, n) : (r = r.index, r < n ? (t.flags |= 67108866, n) : r)) : (t.flags |= 1048576, n);
		}
		function s(t) {
			return e && t.alternate === null && (t.flags |= 67108866), t;
		}
		function c(e, t, n, r) {
			return t === null || t.tag !== 6 ? (t = ai(n, e.mode, r), t.return = e, t) : (t = i(t, n), t.return = e, t);
		}
		function l(e, t, n, r) {
			var a = n.type;
			return a === v ? d(e, t, n.props.children, r, n.key) : t !== null && (t.elementType === a || typeof a == "object" && a && a.$$typeof === D && ya(a) === t.type) ? (t = i(t, n.props), Ea(t, n), t.return = e, t) : (t = ri(n.type, n.key, n.props, null, e.mode, r), Ea(t, n), t.return = e, t);
		}
		function u(e, t, n, r) {
			return t === null || t.tag !== 4 || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? (t = si(n, e.mode, r), t.return = e, t) : (t = i(t, n.children || []), t.return = e, t);
		}
		function d(e, t, n, r, a) {
			return t === null || t.tag !== 7 ? (t = ii(n, e.mode, r, a), t.return = e, t) : (t = i(t, n), t.return = e, t);
		}
		function f(e, t, n) {
			if (typeof t == "string" && t !== "" || typeof t == "number" || typeof t == "bigint") return t = ai("" + t, e.mode, n), t.return = e, t;
			if (typeof t == "object" && t) {
				switch (t.$$typeof) {
					case g: return n = ri(t.type, t.key, t.props, null, e.mode, n), Ea(n, t), n.return = e, n;
					case _: return t = si(t, e.mode, n), t.return = e, t;
					case D: return t = ya(t), f(e, t, n);
				}
				if (ee(t) || M(t)) return t = ii(t, e.mode, n, null), t.return = e, t;
				if (typeof t.then == "function") return f(e, Ta(t), n);
				if (t.$$typeof === S) return f(e, qi(e, t), n);
				Da(e, t);
			}
			return null;
		}
		function p(e, t, n, r) {
			var i = t === null ? null : t.key;
			if (typeof n == "string" && n !== "" || typeof n == "number" || typeof n == "bigint") return i === null ? c(e, t, "" + n, r) : null;
			if (typeof n == "object" && n) {
				switch (n.$$typeof) {
					case g: return n.key === i ? l(e, t, n, r) : null;
					case _: return n.key === i ? u(e, t, n, r) : null;
					case D: return n = ya(n), p(e, t, n, r);
				}
				if (ee(n) || M(n)) return i === null ? d(e, t, n, r, null) : null;
				if (typeof n.then == "function") return p(e, t, Ta(n), r);
				if (n.$$typeof === S) return p(e, t, qi(e, n), r);
				Da(e, n);
			}
			return null;
		}
		function m(e, t, n, r, i) {
			if (typeof r == "string" && r !== "" || typeof r == "number" || typeof r == "bigint") return e = e.get(n) || null, c(t, e, "" + r, i);
			if (typeof r == "object" && r) {
				switch (r.$$typeof) {
					case g: return e = e.get(r.key === null ? n : r.key) || null, l(t, e, r, i);
					case _: return e = e.get(r.key === null ? n : r.key) || null, u(t, e, r, i);
					case D: return r = ya(r), m(e, t, n, r, i);
				}
				if (ee(r) || M(r)) return e = e.get(n) || null, d(t, e, r, i, null);
				if (typeof r.then == "function") return m(e, t, n, Ta(r), i);
				if (r.$$typeof === S) return m(e, t, n, qi(t, r), i);
				Da(t, r);
			}
			return null;
		}
		function h(i, a, s, c) {
			for (var l = null, u = null, d = a, h = a = 0, g = null; d !== null && h < s.length; h++) {
				d.index > h ? (g = d, d = null) : g = d.sibling;
				var _ = p(i, d, s[h], c);
				if (_ === null) {
					d === null && (d = g);
					break;
				}
				e && d && _.alternate === null && t(i, d), a = o(_, a, h), u === null ? l = _ : u.sibling = _, u = _, d = g;
			}
			if (h === s.length) return n(i, d), J && yi(i, h), l;
			if (d === null) {
				for (; h < s.length; h++) d = f(i, s[h], c), d !== null && (a = o(d, a, h), u === null ? l = d : u.sibling = d, u = d);
				return J && yi(i, h), l;
			}
			for (d = r(d); h < s.length; h++) g = m(d, i, h, s[h], c), g !== null && (e && g.alternate !== null && d.delete(g.key === null ? h : g.key), a = o(g, a, h), u === null ? l = g : u.sibling = g, u = g);
			return e && d.forEach(function(e) {
				return t(i, e);
			}), J && yi(i, h), l;
		}
		function y(i, s, c, l) {
			if (c == null) throw Error(a(151));
			for (var u = null, d = null, h = s, g = s = 0, _ = null, v = c.next(); h !== null && !v.done; g++, v = c.next()) {
				h.index > g ? (_ = h, h = null) : _ = h.sibling;
				var y = p(i, h, v.value, l);
				if (y === null) {
					h === null && (h = _);
					break;
				}
				e && h && y.alternate === null && t(i, h), s = o(y, s, g), d === null ? u = y : d.sibling = y, d = y, h = _;
			}
			if (v.done) return n(i, h), J && yi(i, g), u;
			if (h === null) {
				for (; !v.done; g++, v = c.next()) v = f(i, v.value, l), v !== null && (s = o(v, s, g), d === null ? u = v : d.sibling = v, d = v);
				return J && yi(i, g), u;
			}
			for (h = r(h); !v.done; g++, v = c.next()) v = m(h, i, g, v.value, l), v !== null && (e && v.alternate !== null && h.delete(v.key === null ? g : v.key), s = o(v, s, g), d === null ? u = v : d.sibling = v, d = v);
			return e && h.forEach(function(e) {
				return t(i, e);
			}), J && yi(i, g), u;
		}
		function b(e, r, o, c) {
			if (typeof o == "object" && o && o.type === v && o.key === null && (o = o.props.children), typeof o == "object" && o) {
				switch (o.$$typeof) {
					case g:
						a: {
							for (var l = o.key; r !== null;) {
								if (r.key === l) {
									if (l = o.type, l === v) {
										if (r.tag === 7) {
											n(e, r.sibling), c = i(r, o.props.children), c.return = e, e = c;
											break a;
										}
									} else if (r.elementType === l || typeof l == "object" && l && l.$$typeof === D && ya(l) === r.type) {
										n(e, r.sibling), c = i(r, o.props), Ea(c, o), c.return = e, e = c;
										break a;
									}
									n(e, r);
									break;
								}
								t(e, r), r = r.sibling;
							}
							o.type === v ? (c = ii(o.props.children, e.mode, c, o.key), c.return = e, e = c) : (c = ri(o.type, o.key, o.props, null, e.mode, c), Ea(c, o), c.return = e, e = c);
						}
						return s(e);
					case _:
						a: {
							for (l = o.key; r !== null;) {
								if (r.key === l) {
									if (r.tag === 4 && r.stateNode.containerInfo === o.containerInfo && r.stateNode.implementation === o.implementation) {
										n(e, r.sibling), c = i(r, o.children || []), c.return = e, e = c;
										break a;
									}
									n(e, r);
									break;
								}
								t(e, r), r = r.sibling;
							}
							c = si(o, e.mode, c), c.return = e, e = c;
						}
						return s(e);
					case D: return o = ya(o), b(e, r, o, c);
				}
				if (ee(o)) return h(e, r, o, c);
				if (M(o)) {
					if (l = M(o), typeof l != "function") throw Error(a(150));
					return o = l.call(o), y(e, r, o, c);
				}
				if (typeof o.then == "function") return b(e, r, Ta(o), c);
				if (o.$$typeof === S) return b(e, r, qi(e, o), c);
				Da(e, o);
			}
			return typeof o == "string" && o !== "" || typeof o == "number" || typeof o == "bigint" ? (o = "" + o, r !== null && r.tag === 6 ? (n(e, r.sibling), c = i(r, o), c.return = e, e = c) : (n(e, r), c = ai(o, e.mode, c), c.return = e, e = c), s(e)) : n(e, r);
		}
		return function(e, t, n, r) {
			try {
				wa = 0;
				var i = b(e, t, n, r);
				return Ca = null, i;
			} catch (t) {
				if (t === pa || t === ha) throw t;
				var a = $r(29, t, null, e.mode);
				return a.lanes = r, a.return = e, a;
			}
		};
	}
	var ka = Oa(!0), Aa = Oa(!1), ja = !1;
	function Ma(e) {
		e.updateQueue = {
			baseState: e.memoizedState,
			firstBaseUpdate: null,
			lastBaseUpdate: null,
			shared: {
				pending: null,
				lanes: 0,
				hiddenCallbacks: null
			},
			callbacks: null
		};
	}
	function Na(e, t) {
		e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
			baseState: e.baseState,
			firstBaseUpdate: e.firstBaseUpdate,
			lastBaseUpdate: e.lastBaseUpdate,
			shared: e.shared,
			callbacks: null
		});
	}
	function Pa(e) {
		return {
			lane: e,
			tag: 0,
			payload: null,
			callback: null,
			next: null
		};
	}
	function Fa(e, t, n) {
		var r = e.updateQueue;
		if (r === null) return null;
		if (r = r.shared, X & 2) {
			var i = r.pending;
			return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, t = Xr(e), Yr(e, null, n), t;
		}
		return Kr(e, r, t, n), Xr(e);
	}
	function Ia(e, t, n) {
		if (t = t.updateQueue, t !== null && (t = t.shared, n & 4194048)) {
			var r = t.lanes;
			r &= e.pendingLanes, n |= r, t.lanes = n, Xe(e, n);
		}
	}
	function La(e, t) {
		var n = e.updateQueue, r = e.alternate;
		if (r !== null && (r = r.updateQueue, n === r)) {
			var i = null, a = null;
			if (n = n.firstBaseUpdate, n !== null) {
				do {
					var o = {
						lane: n.lane,
						tag: n.tag,
						payload: n.payload,
						callback: null,
						next: null
					};
					a === null ? i = a = o : a = a.next = o, n = n.next;
				} while (n !== null);
				a === null ? i = a = t : a = a.next = t;
			} else i = a = t;
			n = {
				baseState: r.baseState,
				firstBaseUpdate: i,
				lastBaseUpdate: a,
				shared: r.shared,
				callbacks: r.callbacks
			}, e.updateQueue = n;
			return;
		}
		e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
	}
	var Ra = !1;
	function za() {
		if (Ra) {
			var e = ia;
			if (e !== null) throw e;
		}
	}
	function Ba(e, t, n, r) {
		Ra = !1;
		var i = e.updateQueue;
		ja = !1;
		var a = i.firstBaseUpdate, o = i.lastBaseUpdate, s = i.shared.pending;
		if (s !== null) {
			i.shared.pending = null;
			var c = s, l = c.next;
			c.next = null, o === null ? a = l : o.next = l, o = c;
			var u = e.alternate;
			u !== null && (u = u.updateQueue, s = u.lastBaseUpdate, s !== o && (s === null ? u.firstBaseUpdate = l : s.next = l, u.lastBaseUpdate = c));
		}
		if (a !== null) {
			var d = i.baseState;
			o = 0, u = l = c = null, s = a;
			do {
				var f = s.lane & -536870913, p = f !== s.lane;
				if (p ? (Q & f) === f : (r & f) === f) {
					f !== 0 && f === ra && (Ra = !0), u !== null && (u = u.next = {
						lane: 0,
						tag: s.tag,
						payload: s.payload,
						callback: null,
						next: null
					});
					a: {
						var h = e, g = s;
						f = t;
						var _ = n;
						switch (g.tag) {
							case 1:
								if (h = g.payload, typeof h == "function") {
									d = h.call(_, d, f);
									break a;
								}
								d = h;
								break a;
							case 3: h.flags = h.flags & -65537 | 128;
							case 0:
								if (h = g.payload, f = typeof h == "function" ? h.call(_, d, f) : h, f == null) break a;
								d = m({}, d, f);
								break a;
							case 2: ja = !0;
						}
					}
					f = s.callback, f !== null && (e.flags |= 64, p && (e.flags |= 8192), p = i.callbacks, p === null ? i.callbacks = [f] : p.push(f));
				} else p = {
					lane: f,
					tag: s.tag,
					payload: s.payload,
					callback: s.callback,
					next: null
				}, u === null ? (l = u = p, c = d) : u = u.next = p, o |= f;
				if (s = s.next, s === null) {
					if (s = i.shared.pending, s === null) break;
					p = s, s = p.next, p.next = null, i.lastBaseUpdate = p, i.shared.pending = null;
				}
			} while (1);
			u === null && (c = d), i.baseState = c, i.firstBaseUpdate = l, i.lastBaseUpdate = u, a === null && (i.shared.lanes = 0), Ul |= o, e.lanes = o, e.memoizedState = d;
		}
	}
	function Va(e, t) {
		if (typeof e != "function") throw Error(a(191, e));
		e.call(t);
	}
	function Ha(e, t) {
		var n = e.callbacks;
		if (n !== null) for (e.callbacks = null, e = 0; e < n.length; e++) Va(n[e], t);
	}
	var Ua = R(null), Wa = R(0);
	function Ga(e, t) {
		e = Vl, B(Wa, e), B(Ua, t), Vl = e | t.baseLanes;
	}
	function Ka() {
		B(Wa, Vl), B(Ua, Ua.current);
	}
	function qa() {
		Vl = Wa.current, z(Ua), z(Wa);
	}
	var Ja = R(null), Ya = null;
	function Xa(e) {
		var t = e.alternate;
		B(to, to.current & 1), B(Ja, e), Ya === null && (t === null || Ua.current !== null || t.memoizedState !== null) && (Ya = e);
	}
	function Za(e) {
		B(to, to.current), B(Ja, e), Ya === null && (Ya = e);
	}
	function Qa(e) {
		e.tag === 22 ? (B(to, to.current), B(Ja, e), Ya === null && (Ya = e)) : $a(e);
	}
	function $a() {
		B(to, to.current), B(Ja, Ja.current);
	}
	function eo(e) {
		z(Ja), Ya === e && (Ya = null), z(to);
	}
	var to = R(0);
	function no(e) {
		for (var t = e; t !== null;) {
			if (t.tag === 13) {
				var n = t.memoizedState;
				if (n !== null && (n = n.dehydrated, n === null || af(n) || of(n))) return t;
			} else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
				if (t.flags & 128) return t;
			} else if (t.child !== null) {
				t.child.return = t, t = t.child;
				continue;
			}
			if (t === e) break;
			for (; t.sibling === null;) {
				if (t.return === null || t.return === e) return null;
				t = t.return;
			}
			t.sibling.return = t.return, t = t.sibling;
		}
		return null;
	}
	var ro = 0, Y = null, io = null, ao = null, oo = !1, so = !1, co = !1, lo = 0, uo = 0, fo = null, po = 0;
	function mo() {
		throw Error(a(321));
	}
	function ho(e, t) {
		if (t === null) return !1;
		for (var n = 0; n < t.length && n < e.length; n++) if (!hr(e[n], t[n])) return !1;
		return !0;
	}
	function go(e, t, n, r, i, a) {
		return ro = a, Y = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, F.H = e === null || e.memoizedState === null ? Ns : Ps, co = !1, a = n(r, i), co = !1, so && (a = vo(t, n, r, i)), _o(e), a;
	}
	function _o(e) {
		F.H = Ms;
		var t = io !== null && io.next !== null;
		if (ro = 0, ao = io = Y = null, oo = !1, uo = 0, fo = null, t) throw Error(a(300));
		e === null || Zs || (e = e.dependencies, e !== null && Wi(e) && (Zs = !0));
	}
	function vo(e, t, n, r) {
		Y = e;
		var i = 0;
		do {
			if (so && (fo = null), uo = 0, so = !1, 25 <= i) throw Error(a(301));
			if (i += 1, ao = io = null, e.updateQueue != null) {
				var o = e.updateQueue;
				o.lastEffect = null, o.events = null, o.stores = null, o.memoCache != null && (o.memoCache.index = 0);
			}
			F.H = Fs, o = t(n, r);
		} while (so);
		return o;
	}
	function yo() {
		var e = F.H, t = e.useState()[0];
		return t = typeof t.then == "function" ? Eo(t) : t, e = e.useState()[0], (io === null ? null : io.memoizedState) !== e && (Y.flags |= 1024), t;
	}
	function bo() {
		var e = lo !== 0;
		return lo = 0, e;
	}
	function xo(e, t, n) {
		t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
	}
	function So(e) {
		if (oo) {
			for (e = e.memoizedState; e !== null;) {
				var t = e.queue;
				t !== null && (t.pending = null), e = e.next;
			}
			oo = !1;
		}
		ro = 0, ao = io = Y = null, so = !1, uo = lo = 0, fo = null;
	}
	function Co() {
		var e = {
			memoizedState: null,
			baseState: null,
			baseQueue: null,
			queue: null,
			next: null
		};
		return ao === null ? Y.memoizedState = ao = e : ao = ao.next = e, ao;
	}
	function wo() {
		if (io === null) {
			var e = Y.alternate;
			e = e === null ? null : e.memoizedState;
		} else e = io.next;
		var t = ao === null ? Y.memoizedState : ao.next;
		if (t !== null) ao = t, io = e;
		else {
			if (e === null) throw Y.alternate === null ? Error(a(467)) : Error(a(310));
			io = e, e = {
				memoizedState: io.memoizedState,
				baseState: io.baseState,
				baseQueue: io.baseQueue,
				queue: io.queue,
				next: null
			}, ao === null ? Y.memoizedState = ao = e : ao = ao.next = e;
		}
		return ao;
	}
	function To() {
		return {
			lastEffect: null,
			events: null,
			stores: null,
			memoCache: null
		};
	}
	function Eo(e) {
		var t = uo;
		return uo += 1, fo === null && (fo = []), e = va(fo, e, t), t = Y, (ao === null ? t.memoizedState : ao.next) === null && (t = t.alternate, F.H = t === null || t.memoizedState === null ? Ns : Ps), e;
	}
	function Do(e) {
		if (typeof e == "object" && e) {
			if (typeof e.then == "function") return Eo(e);
			if (e.$$typeof === S) return Ki(e);
		}
		throw Error(a(438, String(e)));
	}
	function Oo(e) {
		var t = null, n = Y.updateQueue;
		if (n !== null && (t = n.memoCache), t == null) {
			var r = Y.alternate;
			r !== null && (r = r.updateQueue, r !== null && (r = r.memoCache, r != null && (t = {
				data: r.data.map(function(e) {
					return e.slice();
				}),
				index: 0
			})));
		}
		if (t ??= {
			data: [],
			index: 0
		}, n === null && (n = To(), Y.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0) for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = A;
		return t.index++, n;
	}
	function ko(e, t) {
		return typeof t == "function" ? t(e) : t;
	}
	function Ao(e) {
		return jo(wo(), io, e);
	}
	function jo(e, t, n) {
		var r = e.queue;
		if (r === null) throw Error(a(311));
		r.lastRenderedReducer = n;
		var i = e.baseQueue, o = r.pending;
		if (o !== null) {
			if (i !== null) {
				var s = i.next;
				i.next = o.next, o.next = s;
			}
			t.baseQueue = i = o, r.pending = null;
		}
		if (o = e.baseState, i === null) e.memoizedState = o;
		else {
			t = i.next;
			var c = s = null, l = null, u = t, d = !1;
			do {
				var f = u.lane & -536870913;
				if (f === u.lane ? (ro & f) === f : (Q & f) === f) {
					var p = u.revertLane;
					if (p === 0) l !== null && (l = l.next = {
						lane: 0,
						revertLane: 0,
						gesture: null,
						action: u.action,
						hasEagerState: u.hasEagerState,
						eagerState: u.eagerState,
						next: null
					}), f === ra && (d = !0);
					else if ((ro & p) === p) {
						u = u.next, p === ra && (d = !0);
						continue;
					} else f = {
						lane: 0,
						revertLane: u.revertLane,
						gesture: null,
						action: u.action,
						hasEagerState: u.hasEagerState,
						eagerState: u.eagerState,
						next: null
					}, l === null ? (c = l = f, s = o) : l = l.next = f, Y.lanes |= p, Ul |= p;
					f = u.action, co && n(o, f), o = u.hasEagerState ? u.eagerState : n(o, f);
				} else p = {
					lane: f,
					revertLane: u.revertLane,
					gesture: u.gesture,
					action: u.action,
					hasEagerState: u.hasEagerState,
					eagerState: u.eagerState,
					next: null
				}, l === null ? (c = l = p, s = o) : l = l.next = p, Y.lanes |= f, Ul |= f;
				u = u.next;
			} while (u !== null && u !== t);
			if (l === null ? s = o : l.next = c, !hr(o, e.memoizedState) && (Zs = !0, d && (n = ia, n !== null))) throw n;
			e.memoizedState = o, e.baseState = s, e.baseQueue = l, r.lastRenderedState = o;
		}
		return i === null && (r.lanes = 0), [e.memoizedState, r.dispatch];
	}
	function Mo(e) {
		var t = wo(), n = t.queue;
		if (n === null) throw Error(a(311));
		n.lastRenderedReducer = e;
		var r = n.dispatch, i = n.pending, o = t.memoizedState;
		if (i !== null) {
			n.pending = null;
			var s = i = i.next;
			do
				o = e(o, s.action), s = s.next;
			while (s !== i);
			hr(o, t.memoizedState) || (Zs = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
		}
		return [o, r];
	}
	function No(e, t, n) {
		var r = Y, i = wo(), o = J;
		if (o) {
			if (n === void 0) throw Error(a(407));
			n = n();
		} else n = t();
		var s = !hr((io || i).memoizedState, n);
		if (s && (i.memoizedState = n, Zs = !0), i = i.queue, is(Io.bind(null, r, i, e), [e]), i.getSnapshot !== t || s || ao !== null && ao.memoizedState.tag & 1) {
			if (r.flags |= 2048, $o(9, { destroy: void 0 }, Fo.bind(null, r, i, n, t), null), Fl === null) throw Error(a(349));
			o || ro & 127 || Po(r, t, n);
		}
		return n;
	}
	function Po(e, t, n) {
		e.flags |= 16384, e = {
			getSnapshot: t,
			value: n
		}, t = Y.updateQueue, t === null ? (t = To(), Y.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
	}
	function Fo(e, t, n, r) {
		t.value = n, t.getSnapshot = r, Lo(t) && Ro(e);
	}
	function Io(e, t, n) {
		return n(function() {
			Lo(t) && Ro(e);
		});
	}
	function Lo(e) {
		var t = e.getSnapshot;
		e = e.value;
		try {
			var n = t();
			return !hr(e, n);
		} catch {
			return !0;
		}
	}
	function Ro(e) {
		var t = Jr(e, 2);
		t !== null && pu(t, e, 2);
	}
	function zo(e) {
		var t = Co();
		if (typeof e == "function") {
			var n = e;
			if (e = n(), co) {
				Ne(!0);
				try {
					n();
				} finally {
					Ne(!1);
				}
			}
		}
		return t.memoizedState = t.baseState = e, t.queue = {
			pending: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: ko,
			lastRenderedState: e
		}, t;
	}
	function Bo(e, t, n, r) {
		return e.baseState = n, jo(e, io, typeof r == "function" ? r : ko);
	}
	function Vo(e, t, n, r, i) {
		if (ks(e)) throw Error(a(485));
		if (e = t.action, e !== null) {
			var o = {
				payload: i,
				action: e,
				next: null,
				isTransition: !0,
				status: "pending",
				value: null,
				reason: null,
				listeners: [],
				then: function(e) {
					o.listeners.push(e);
				}
			};
			F.T === null ? o.isTransition = !1 : n(!0), r(o), n = t.pending, n === null ? (o.next = t.pending = o, Ho(t, o)) : (o.next = n.next, t.pending = n.next = o);
		}
	}
	function Ho(e, t) {
		var n = t.action, r = t.payload, i = e.state;
		if (t.isTransition) {
			var a = F.T, o = {};
			F.T = o;
			try {
				var s = n(i, r), c = F.S;
				c !== null && c(o, s), Uo(e, t, s);
			} catch (n) {
				Go(e, t, n);
			} finally {
				a !== null && o.types !== null && (a.types = o.types), F.T = a;
			}
		} else try {
			a = n(i, r), Uo(e, t, a);
		} catch (n) {
			Go(e, t, n);
		}
	}
	function Uo(e, t, n) {
		typeof n == "object" && n && typeof n.then == "function" ? n.then(function(n) {
			Wo(e, t, n);
		}, function(n) {
			return Go(e, t, n);
		}) : Wo(e, t, n);
	}
	function Wo(e, t, n) {
		t.status = "fulfilled", t.value = n, Ko(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, Ho(e, n)));
	}
	function Go(e, t, n) {
		var r = e.pending;
		if (e.pending = null, r !== null) {
			r = r.next;
			do
				t.status = "rejected", t.reason = n, Ko(t), t = t.next;
			while (t !== r);
		}
		e.action = null;
	}
	function Ko(e) {
		e = e.listeners;
		for (var t = 0; t < e.length; t++) (0, e[t])();
	}
	function qo(e, t) {
		return t;
	}
	function Jo(e, t) {
		if (J) {
			var n = Fl.formState;
			if (n !== null) {
				a: {
					var r = Y;
					if (J) {
						if (Ti) {
							b: {
								for (var i = Ti, a = Di; i.nodeType !== 8;) {
									if (!a) {
										i = null;
										break b;
									}
									if (i = cf(i.nextSibling), i === null) {
										i = null;
										break b;
									}
								}
								a = i.data, i = a === "F!" || a === "F" ? i : null;
							}
							if (i) {
								Ti = cf(i.nextSibling), r = i.data === "F!";
								break a;
							}
						}
						ki(r);
					}
					r = !1;
				}
				r && (t = n[0]);
			}
		}
		return n = Co(), n.memoizedState = n.baseState = t, r = {
			pending: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: qo,
			lastRenderedState: t
		}, n.queue = r, n = Es.bind(null, Y, r), r.dispatch = n, r = zo(!1), a = Os.bind(null, Y, !1, r.queue), r = Co(), i = {
			state: t,
			dispatch: null,
			action: e,
			pending: null
		}, r.queue = i, n = Vo.bind(null, Y, i, a, n), i.dispatch = n, r.memoizedState = e, [
			t,
			n,
			!1
		];
	}
	function Yo(e) {
		return Xo(wo(), io, e);
	}
	function Xo(e, t, n) {
		if (t = jo(e, t, qo)[0], e = Ao(ko)[0], typeof t == "object" && t && typeof t.then == "function") try {
			var r = Eo(t);
		} catch (e) {
			throw e === pa ? ha : e;
		}
		else r = t;
		t = wo();
		var i = t.queue, a = i.dispatch;
		return n !== t.memoizedState && (Y.flags |= 2048, $o(9, { destroy: void 0 }, Zo.bind(null, i, n), null)), [
			r,
			a,
			e
		];
	}
	function Zo(e, t) {
		e.action = t;
	}
	function Qo(e) {
		var t = wo(), n = io;
		if (n !== null) return Xo(t, n, e);
		wo(), t = t.memoizedState, n = wo();
		var r = n.queue.dispatch;
		return n.memoizedState = e, [
			t,
			r,
			!1
		];
	}
	function $o(e, t, n, r) {
		return e = {
			tag: e,
			create: n,
			deps: r,
			inst: t,
			next: null
		}, t = Y.updateQueue, t === null && (t = To(), Y.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e;
	}
	function es() {
		return wo().memoizedState;
	}
	function ts(e, t, n, r) {
		var i = Co();
		Y.flags |= e, i.memoizedState = $o(1 | t, { destroy: void 0 }, n, r === void 0 ? null : r);
	}
	function ns(e, t, n, r) {
		var i = wo();
		r = r === void 0 ? null : r;
		var a = i.memoizedState.inst;
		io !== null && r !== null && ho(r, io.memoizedState.deps) ? i.memoizedState = $o(t, a, n, r) : (Y.flags |= e, i.memoizedState = $o(1 | t, a, n, r));
	}
	function rs(e, t) {
		ts(8390656, 8, e, t);
	}
	function is(e, t) {
		ns(2048, 8, e, t);
	}
	function as(e) {
		Y.flags |= 4;
		var t = Y.updateQueue;
		if (t === null) t = To(), Y.updateQueue = t, t.events = [e];
		else {
			var n = t.events;
			n === null ? t.events = [e] : n.push(e);
		}
	}
	function os(e) {
		var t = wo().memoizedState;
		return as({
			ref: t,
			nextImpl: e
		}), function() {
			if (X & 2) throw Error(a(440));
			return t.impl.apply(void 0, arguments);
		};
	}
	function ss(e, t) {
		return ns(4, 2, e, t);
	}
	function cs(e, t) {
		return ns(4, 4, e, t);
	}
	function ls(e, t) {
		if (typeof t == "function") {
			e = e();
			var n = t(e);
			return function() {
				typeof n == "function" ? n() : t(null);
			};
		}
		if (t != null) return e = e(), t.current = e, function() {
			t.current = null;
		};
	}
	function us(e, t, n) {
		n = n == null ? null : n.concat([e]), ns(4, 4, ls.bind(null, t, e), n);
	}
	function ds() {}
	function fs(e, t) {
		var n = wo();
		t = t === void 0 ? null : t;
		var r = n.memoizedState;
		return t !== null && ho(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
	}
	function ps(e, t) {
		var n = wo();
		t = t === void 0 ? null : t;
		var r = n.memoizedState;
		if (t !== null && ho(t, r[1])) return r[0];
		if (r = e(), co) {
			Ne(!0);
			try {
				e();
			} finally {
				Ne(!1);
			}
		}
		return n.memoizedState = [r, t], r;
	}
	function ms(e, t, n) {
		return n === void 0 || ro & 1073741824 && !(Q & 261930) ? e.memoizedState = t : (e.memoizedState = n, e = fu(), Y.lanes |= e, Ul |= e, n);
	}
	function hs(e, t, n, r) {
		return hr(n, t) ? n : Ua.current === null ? !(ro & 42) || ro & 1073741824 && !(Q & 261930) ? (Zs = !0, e.memoizedState = n) : (e = fu(), Y.lanes |= e, Ul |= e, t) : (e = ms(e, n, r), hr(e, t) || (Zs = !0), e);
	}
	function gs(e, t, n, r, i) {
		var a = I.p;
		I.p = a !== 0 && 8 > a ? a : 8;
		var o = F.T, s = {};
		F.T = s, Os(e, !1, t, n);
		try {
			var c = i(), l = F.S;
			l !== null && l(s, c), typeof c == "object" && c && typeof c.then == "function" ? Ds(e, t, sa(c, r), du(e)) : Ds(e, t, r, du(e));
		} catch (n) {
			Ds(e, t, {
				then: function() {},
				status: "rejected",
				reason: n
			}, du());
		} finally {
			I.p = a, o !== null && s.types !== null && (o.types = s.types), F.T = o;
		}
	}
	function _s() {}
	function vs(e, t, n, r) {
		if (e.tag !== 5) throw Error(a(476));
		var i = ys(e).queue;
		gs(e, i, t, te, n === null ? _s : function() {
			return bs(e), n(r);
		});
	}
	function ys(e) {
		var t = e.memoizedState;
		if (t !== null) return t;
		t = {
			memoizedState: te,
			baseState: te,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: ko,
				lastRenderedState: te
			},
			next: null
		};
		var n = {};
		return t.next = {
			memoizedState: n,
			baseState: n,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: ko,
				lastRenderedState: n
			},
			next: null
		}, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
	}
	function bs(e) {
		var t = ys(e);
		t.next === null && (t = e.alternate.memoizedState), Ds(e, t.next.queue, {}, du());
	}
	function xs() {
		return Ki(Qf);
	}
	function Ss() {
		return wo().memoizedState;
	}
	function Cs() {
		return wo().memoizedState;
	}
	function ws(e) {
		for (var t = e.return; t !== null;) {
			switch (t.tag) {
				case 24:
				case 3:
					var n = du();
					e = Pa(n);
					var r = Fa(t, e, n);
					r !== null && (pu(r, t, n), Ia(r, t, n)), t = { cache: $i() }, e.payload = t;
					return;
			}
			t = t.return;
		}
	}
	function Ts(e, t, n) {
		var r = du();
		n = {
			lane: r,
			revertLane: 0,
			gesture: null,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}, ks(e) ? As(t, n) : (n = qr(e, t, n, r), n !== null && (pu(n, e, r), js(n, t, r)));
	}
	function Es(e, t, n) {
		Ds(e, t, n, du());
	}
	function Ds(e, t, n, r) {
		var i = {
			lane: r,
			revertLane: 0,
			gesture: null,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		};
		if (ks(e)) As(t, i);
		else {
			var a = e.alternate;
			if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
				var o = t.lastRenderedState, s = a(o, n);
				if (i.hasEagerState = !0, i.eagerState = s, hr(s, o)) return Kr(e, t, i, 0), Fl === null && Gr(), !1;
			} catch {}
			if (n = qr(e, t, i, r), n !== null) return pu(n, e, r), js(n, t, r), !0;
		}
		return !1;
	}
	function Os(e, t, n, r) {
		if (r = {
			lane: 2,
			revertLane: ud(),
			gesture: null,
			action: r,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}, ks(e)) {
			if (t) throw Error(a(479));
		} else t = qr(e, n, r, 2), t !== null && pu(t, e, 2);
	}
	function ks(e) {
		var t = e.alternate;
		return e === Y || t !== null && t === Y;
	}
	function As(e, t) {
		so = oo = !0;
		var n = e.pending;
		n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
	}
	function js(e, t, n) {
		if (n & 4194048) {
			var r = t.lanes;
			r &= e.pendingLanes, n |= r, t.lanes = n, Xe(e, n);
		}
	}
	var Ms = {
		readContext: Ki,
		use: Do,
		useCallback: mo,
		useContext: mo,
		useEffect: mo,
		useImperativeHandle: mo,
		useLayoutEffect: mo,
		useInsertionEffect: mo,
		useMemo: mo,
		useReducer: mo,
		useRef: mo,
		useState: mo,
		useDebugValue: mo,
		useDeferredValue: mo,
		useTransition: mo,
		useSyncExternalStore: mo,
		useId: mo,
		useHostTransitionStatus: mo,
		useFormState: mo,
		useActionState: mo,
		useOptimistic: mo,
		useMemoCache: mo,
		useCacheRefresh: mo
	};
	Ms.useEffectEvent = mo;
	var Ns = {
		readContext: Ki,
		use: Do,
		useCallback: function(e, t) {
			return Co().memoizedState = [e, t === void 0 ? null : t], e;
		},
		useContext: Ki,
		useEffect: rs,
		useImperativeHandle: function(e, t, n) {
			n = n == null ? null : n.concat([e]), ts(4194308, 4, ls.bind(null, t, e), n);
		},
		useLayoutEffect: function(e, t) {
			return ts(4194308, 4, e, t);
		},
		useInsertionEffect: function(e, t) {
			ts(4, 2, e, t);
		},
		useMemo: function(e, t) {
			var n = Co();
			t = t === void 0 ? null : t;
			var r = e();
			if (co) {
				Ne(!0);
				try {
					e();
				} finally {
					Ne(!1);
				}
			}
			return n.memoizedState = [r, t], r;
		},
		useReducer: function(e, t, n) {
			var r = Co();
			if (n !== void 0) {
				var i = n(t);
				if (co) {
					Ne(!0);
					try {
						n(t);
					} finally {
						Ne(!1);
					}
				}
			} else i = t;
			return r.memoizedState = r.baseState = i, e = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: e,
				lastRenderedState: i
			}, r.queue = e, e = e.dispatch = Ts.bind(null, Y, e), [r.memoizedState, e];
		},
		useRef: function(e) {
			var t = Co();
			return e = { current: e }, t.memoizedState = e;
		},
		useState: function(e) {
			e = zo(e);
			var t = e.queue, n = Es.bind(null, Y, t);
			return t.dispatch = n, [e.memoizedState, n];
		},
		useDebugValue: ds,
		useDeferredValue: function(e, t) {
			return ms(Co(), e, t);
		},
		useTransition: function() {
			var e = zo(!1);
			return e = gs.bind(null, Y, e.queue, !0, !1), Co().memoizedState = e, [!1, e];
		},
		useSyncExternalStore: function(e, t, n) {
			var r = Y, i = Co();
			if (J) {
				if (n === void 0) throw Error(a(407));
				n = n();
			} else {
				if (n = t(), Fl === null) throw Error(a(349));
				Q & 127 || Po(r, t, n);
			}
			i.memoizedState = n;
			var o = {
				value: n,
				getSnapshot: t
			};
			return i.queue = o, rs(Io.bind(null, r, o, e), [e]), r.flags |= 2048, $o(9, { destroy: void 0 }, Fo.bind(null, r, o, n, t), null), n;
		},
		useId: function() {
			var e = Co(), t = Fl.identifierPrefix;
			if (J) {
				var n = vi, r = _i;
				n = (r & ~(1 << 32 - Pe(r) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = lo++, 0 < n && (t += "H" + n.toString(32)), t += "_";
			} else n = po++, t = "_" + t + "r_" + n.toString(32) + "_";
			return e.memoizedState = t;
		},
		useHostTransitionStatus: xs,
		useFormState: Jo,
		useActionState: Jo,
		useOptimistic: function(e) {
			var t = Co();
			t.memoizedState = t.baseState = e;
			var n = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: null,
				lastRenderedState: null
			};
			return t.queue = n, t = Os.bind(null, Y, !0, n), n.dispatch = t, [e, t];
		},
		useMemoCache: Oo,
		useCacheRefresh: function() {
			return Co().memoizedState = ws.bind(null, Y);
		},
		useEffectEvent: function(e) {
			var t = Co(), n = { impl: e };
			return t.memoizedState = n, function() {
				if (X & 2) throw Error(a(440));
				return n.impl.apply(void 0, arguments);
			};
		}
	}, Ps = {
		readContext: Ki,
		use: Do,
		useCallback: fs,
		useContext: Ki,
		useEffect: is,
		useImperativeHandle: us,
		useInsertionEffect: ss,
		useLayoutEffect: cs,
		useMemo: ps,
		useReducer: Ao,
		useRef: es,
		useState: function() {
			return Ao(ko);
		},
		useDebugValue: ds,
		useDeferredValue: function(e, t) {
			return hs(wo(), io.memoizedState, e, t);
		},
		useTransition: function() {
			var e = Ao(ko)[0], t = wo().memoizedState;
			return [typeof e == "boolean" ? e : Eo(e), t];
		},
		useSyncExternalStore: No,
		useId: Ss,
		useHostTransitionStatus: xs,
		useFormState: Yo,
		useActionState: Yo,
		useOptimistic: function(e, t) {
			return Bo(wo(), io, e, t);
		},
		useMemoCache: Oo,
		useCacheRefresh: Cs
	};
	Ps.useEffectEvent = os;
	var Fs = {
		readContext: Ki,
		use: Do,
		useCallback: fs,
		useContext: Ki,
		useEffect: is,
		useImperativeHandle: us,
		useInsertionEffect: ss,
		useLayoutEffect: cs,
		useMemo: ps,
		useReducer: Mo,
		useRef: es,
		useState: function() {
			return Mo(ko);
		},
		useDebugValue: ds,
		useDeferredValue: function(e, t) {
			var n = wo();
			return io === null ? ms(n, e, t) : hs(n, io.memoizedState, e, t);
		},
		useTransition: function() {
			var e = Mo(ko)[0], t = wo().memoizedState;
			return [typeof e == "boolean" ? e : Eo(e), t];
		},
		useSyncExternalStore: No,
		useId: Ss,
		useHostTransitionStatus: xs,
		useFormState: Qo,
		useActionState: Qo,
		useOptimistic: function(e, t) {
			var n = wo();
			return io === null ? (n.baseState = e, [e, n.queue.dispatch]) : Bo(n, io, e, t);
		},
		useMemoCache: Oo,
		useCacheRefresh: Cs
	};
	Fs.useEffectEvent = os;
	function Is(e, t, n, r) {
		t = e.memoizedState, n = n(r, t), n = n == null ? t : m({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
	}
	var Ls = {
		enqueueSetState: function(e, t, n) {
			e = e._reactInternals;
			var r = du(), i = Pa(r);
			i.payload = t, n != null && (i.callback = n), t = Fa(e, i, r), t !== null && (pu(t, e, r), Ia(t, e, r));
		},
		enqueueReplaceState: function(e, t, n) {
			e = e._reactInternals;
			var r = du(), i = Pa(r);
			i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Fa(e, i, r), t !== null && (pu(t, e, r), Ia(t, e, r));
		},
		enqueueForceUpdate: function(e, t) {
			e = e._reactInternals;
			var n = du(), r = Pa(n);
			r.tag = 2, t != null && (r.callback = t), t = Fa(e, r, n), t !== null && (pu(t, e, n), Ia(t, e, n));
		}
	};
	function Rs(e, t, n, r, i, a, o) {
		return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !gr(n, r) || !gr(i, a) : !0;
	}
	function zs(e, t, n, r) {
		e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ls.enqueueReplaceState(t, t.state, null);
	}
	function Bs(e, t) {
		var n = t;
		if ("ref" in t) for (var r in n = {}, t) r !== "ref" && (n[r] = t[r]);
		if (e = e.defaultProps) for (var i in n === t && (n = m({}, n)), e) n[i] === void 0 && (n[i] = e[i]);
		return n;
	}
	function Vs(e) {
		Vr(e);
	}
	function Hs(e) {
		console.error(e);
	}
	function Us(e) {
		Vr(e);
	}
	function Ws(e, t) {
		try {
			var n = e.onUncaughtError;
			n(t.value, { componentStack: t.stack });
		} catch (e) {
			setTimeout(function() {
				throw e;
			});
		}
	}
	function Gs(e, t, n) {
		try {
			var r = e.onCaughtError;
			r(n.value, {
				componentStack: n.stack,
				errorBoundary: t.tag === 1 ? t.stateNode : null
			});
		} catch (e) {
			setTimeout(function() {
				throw e;
			});
		}
	}
	function Ks(e, t, n) {
		return n = Pa(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
			Ws(e, t);
		}, n;
	}
	function qs(e) {
		return e = Pa(e), e.tag = 3, e;
	}
	function Js(e, t, n, r) {
		var i = n.type.getDerivedStateFromError;
		if (typeof i == "function") {
			var a = r.value;
			e.payload = function() {
				return i(a);
			}, e.callback = function() {
				Gs(t, n, r);
			};
		}
		var o = n.stateNode;
		o !== null && typeof o.componentDidCatch == "function" && (e.callback = function() {
			Gs(t, n, r), typeof i != "function" && (tu === null ? tu = /* @__PURE__ */ new Set([this]) : tu.add(this));
			var e = r.stack;
			this.componentDidCatch(r.value, { componentStack: e === null ? "" : e });
		});
	}
	function Ys(e, t, n, r, i) {
		if (n.flags |= 32768, typeof r == "object" && r && typeof r.then == "function") {
			if (t = n.alternate, t !== null && Ui(t, n, i, !0), n = Ja.current, n !== null) {
				switch (n.tag) {
					case 31:
					case 13: return Ya === null ? Tu() : n.alternate === null && Hl === 0 && (Hl = 3), n.flags &= -257, n.flags |= 65536, n.lanes = i, r === ga ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([r]) : t.add(r), Wu(e, r, i)), !1;
					case 22: return n.flags |= 65536, r === ga ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
						transitions: null,
						markerInstances: null,
						retryQueue: /* @__PURE__ */ new Set([r])
					}, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([r]) : n.add(r)), Wu(e, r, i)), !1;
				}
				throw Error(a(435, n.tag));
			}
			return Wu(e, r, i), Tu(), !1;
		}
		if (J) return t = Ja.current, t === null ? (r !== Oi && (t = Error(a(423), { cause: r }), Fi(li(t, n))), e = e.current.alternate, e.flags |= 65536, i &= -i, e.lanes |= i, r = li(r, n), i = Ks(e.stateNode, r, i), La(e, i), Hl !== 4 && (Hl = 2)) : (!(t.flags & 65536) && (t.flags |= 256), t.flags |= 65536, t.lanes = i, r !== Oi && (e = Error(a(422), { cause: r }), Fi(li(e, n)))), !1;
		var o = Error(a(520), { cause: r });
		if (o = li(o, n), Jl === null ? Jl = [o] : Jl.push(o), Hl !== 4 && (Hl = 2), t === null) return !0;
		r = li(r, n), n = t;
		do {
			switch (n.tag) {
				case 3: return n.flags |= 65536, e = i & -i, n.lanes |= e, e = Ks(n.stateNode, r, e), La(n, e), !1;
				case 1: if (t = n.type, o = n.stateNode, !(n.flags & 128) && (typeof t.getDerivedStateFromError == "function" || o !== null && typeof o.componentDidCatch == "function" && (tu === null || !tu.has(o)))) return n.flags |= 65536, i &= -i, n.lanes |= i, i = qs(i), Js(i, e, n, r), La(n, i), !1;
			}
			n = n.return;
		} while (n !== null);
		return !1;
	}
	var Xs = Error(a(461)), Zs = !1;
	function Qs(e, t, n, r) {
		t.child = e === null ? Aa(t, null, n, r) : ka(t, e.child, n, r);
	}
	function $s(e, t, n, r, i) {
		n = n.render;
		var a = t.ref;
		if ("ref" in r) {
			var o = {};
			for (var s in r) s !== "ref" && (o[s] = r[s]);
		} else o = r;
		return Gi(t), r = go(e, t, n, o, a, i), s = bo(), e !== null && !Zs ? (xo(e, t, i), Cc(e, t, i)) : (J && s && xi(t), t.flags |= 1, Qs(e, t, r, i), t.child);
	}
	function ec(e, t, n, r, i) {
		if (e === null) {
			var a = n.type;
			return typeof a == "function" && !ei(a) && a.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = a, tc(e, t, a, r, i)) : (e = ri(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
		}
		if (a = e.child, !wc(e, i)) {
			var o = a.memoizedProps;
			if (n = n.compare, n = n === null ? gr : n, n(o, r) && e.ref === t.ref) return Cc(e, t, i);
		}
		return t.flags |= 1, e = ti(a, r), e.ref = t.ref, e.return = t, t.child = e;
	}
	function tc(e, t, n, r, i) {
		if (e !== null) {
			var a = e.memoizedProps;
			if (gr(a, r) && e.ref === t.ref) {
				if (Zs = !1, t.pendingProps = r = a, wc(e, i)) e.flags & 131072 && (Zs = !0);
				else return t.lanes = e.lanes, Cc(e, t, i);
			}
		}
		return lc(e, t, n, r, i);
	}
	function nc(e, t, n, r) {
		var i = r.children, a = e === null ? null : e.memoizedState;
		if (e === null && t.stateNode === null && (t.stateNode = {
			_visibility: 1,
			_pendingMarkers: null,
			_retryCache: null,
			_transitions: null
		}), r.mode === "hidden") {
			if (t.flags & 128) {
				if (a = a === null ? n : a.baseLanes | n, e !== null) {
					for (r = t.child = e.child, i = 0; r !== null;) i = i | r.lanes | r.childLanes, r = r.sibling;
					r = i & ~a;
				} else r = 0, t.child = null;
				return ic(e, t, a, n, r);
			}
			if (n & 536870912) t.memoizedState = {
				baseLanes: 0,
				cachePool: null
			}, e !== null && da(t, a === null ? null : a.cachePool), a === null ? Ka() : Ga(t, a), Qa(t);
			else return r = t.lanes = 536870912, ic(e, t, a === null ? n : a.baseLanes | n, n, r);
		} else a === null ? (e !== null && da(t, null), Ka(), $a(t)) : (da(t, a.cachePool), Ga(t, a), $a(t), t.memoizedState = null);
		return Qs(e, t, i, n), t.child;
	}
	function rc(e, t) {
		return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
			_visibility: 1,
			_pendingMarkers: null,
			_retryCache: null,
			_transitions: null
		}), t.sibling;
	}
	function ic(e, t, n, r, i) {
		var a = ua();
		return a = a === null ? null : {
			parent: Qi._currentValue,
			pool: a
		}, t.memoizedState = {
			baseLanes: n,
			cachePool: a
		}, e !== null && da(t, null), Ka(), Qa(t), e !== null && Ui(e, t, r, !0), t.childLanes = i, null;
	}
	function ac(e, t) {
		return t = vc({
			mode: t.mode,
			children: t.children
		}, e.mode), t.ref = e.ref, e.child = t, t.return = e, t;
	}
	function oc(e, t, n) {
		return ka(t, e.child, null, n), e = ac(t, t.pendingProps), e.flags |= 2, eo(t), t.memoizedState = null, e;
	}
	function sc(e, t, n) {
		var r = t.pendingProps, i = !!(t.flags & 128);
		if (t.flags &= -129, e === null) {
			if (J) {
				if (r.mode === "hidden") return e = ac(t, r), t.lanes = 536870912, rc(null, e);
				if (Za(t), (e = Ti) ? (e = rf(e, Di), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
					dehydrated: e,
					treeContext: gi === null ? null : {
						id: _i,
						overflow: vi
					},
					retryLane: 536870912,
					hydrationErrors: null
				}, n = oi(e), n.return = t, t.child = n, wi = t, Ti = null)) : e = null, e === null) throw ki(t);
				return t.lanes = 536870912, null;
			}
			return ac(t, r);
		}
		var o = e.memoizedState;
		if (o !== null) {
			var s = o.dehydrated;
			if (Za(t), i) {
				if (t.flags & 256) t.flags &= -257, t = oc(e, t, n);
				else if (t.memoizedState !== null) t.child = e.child, t.flags |= 128, t = null;
				else throw Error(a(558));
			} else if (Zs || Ui(e, t, n, !1), i = (n & e.childLanes) !== 0, Zs || i) {
				if (r = Fl, r !== null && (s = Ze(r, n), s !== 0 && s !== o.retryLane)) throw o.retryLane = s, Jr(e, s), pu(r, e, s), Xs;
				Tu(), t = oc(e, t, n);
			} else e = o.treeContext, Ti = cf(s.nextSibling), wi = t, J = !0, Ei = null, Di = !1, e !== null && Ci(t, e), t = ac(t, r), t.flags |= 4096;
			return t;
		}
		return e = ti(e.child, {
			mode: r.mode,
			children: r.children
		}), e.ref = t.ref, t.child = e, e.return = t, e;
	}
	function cc(e, t) {
		var n = t.ref;
		if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
		else {
			if (typeof n != "function" && typeof n != "object") throw Error(a(284));
			(e === null || e.ref !== n) && (t.flags |= 4194816);
		}
	}
	function lc(e, t, n, r, i) {
		return Gi(t), n = go(e, t, n, r, void 0, i), r = bo(), e !== null && !Zs ? (xo(e, t, i), Cc(e, t, i)) : (J && r && xi(t), t.flags |= 1, Qs(e, t, n, i), t.child);
	}
	function uc(e, t, n, r, i, a) {
		return Gi(t), t.updateQueue = null, n = vo(t, r, n, i), _o(e), r = bo(), e !== null && !Zs ? (xo(e, t, a), Cc(e, t, a)) : (J && r && xi(t), t.flags |= 1, Qs(e, t, n, a), t.child);
	}
	function dc(e, t, n, r, i) {
		if (Gi(t), t.stateNode === null) {
			var a = Zr, o = n.contextType;
			typeof o == "object" && o && (a = Ki(o)), a = new n(r, a), t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, a.updater = Ls, t.stateNode = a, a._reactInternals = t, a = t.stateNode, a.props = r, a.state = t.memoizedState, a.refs = {}, Ma(t), o = n.contextType, a.context = typeof o == "object" && o ? Ki(o) : Zr, a.state = t.memoizedState, o = n.getDerivedStateFromProps, typeof o == "function" && (Is(t, n, o, r), a.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (o = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), o !== a.state && Ls.enqueueReplaceState(a, a.state, null), Ba(t, r, a, i), za(), a.state = t.memoizedState), typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !0;
		} else if (e === null) {
			a = t.stateNode;
			var s = t.memoizedProps, c = Bs(n, s);
			a.props = c;
			var l = a.context, u = n.contextType;
			o = Zr, typeof u == "object" && u && (o = Ki(u));
			var d = n.getDerivedStateFromProps;
			u = typeof d == "function" || typeof a.getSnapshotBeforeUpdate == "function", s = t.pendingProps !== s, u || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s || l !== o) && zs(t, a, r, o), ja = !1;
			var f = t.memoizedState;
			a.state = f, Ba(t, r, a, i), za(), l = t.memoizedState, s || f !== l || ja ? (typeof d == "function" && (Is(t, n, d, r), l = t.memoizedState), (c = ja || Rs(t, n, c, r, f, l, o)) ? (u || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), a.props = r, a.state = l, a.context = o, r = c) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
		} else {
			a = t.stateNode, Na(e, t), o = t.memoizedProps, u = Bs(n, o), a.props = u, d = t.pendingProps, f = a.context, l = n.contextType, c = Zr, typeof l == "object" && l && (c = Ki(l)), s = n.getDerivedStateFromProps, (l = typeof s == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (o !== d || f !== c) && zs(t, a, r, c), ja = !1, f = t.memoizedState, a.state = f, Ba(t, r, a, i), za();
			var p = t.memoizedState;
			o !== d || f !== p || ja || e !== null && e.dependencies !== null && Wi(e.dependencies) ? (typeof s == "function" && (Is(t, n, s, r), p = t.memoizedState), (u = ja || Rs(t, n, u, r, f, p, c) || e !== null && e.dependencies !== null && Wi(e.dependencies)) ? (l || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, p, c), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, p, c)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = p), a.props = r, a.state = p, a.context = c, r = u) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
		}
		return a = r, cc(e, t), r = !!(t.flags & 128), a || r ? (a = t.stateNode, n = r && typeof n.getDerivedStateFromError != "function" ? null : a.render(), t.flags |= 1, e !== null && r ? (t.child = ka(t, e.child, null, i), t.child = ka(t, null, n, i)) : Qs(e, t, n, i), t.memoizedState = a.state, e = t.child) : e = Cc(e, t, i), e;
	}
	function fc(e, t, n, r) {
		return Ni(), t.flags |= 256, Qs(e, t, n, r), t.child;
	}
	var pc = {
		dehydrated: null,
		treeContext: null,
		retryLane: 0,
		hydrationErrors: null
	};
	function mc(e) {
		return {
			baseLanes: e,
			cachePool: fa()
		};
	}
	function hc(e, t, n) {
		return e = e === null ? 0 : e.childLanes & ~n, t && (e |= Kl), e;
	}
	function gc(e, t, n) {
		var r = t.pendingProps, i = !1, o = !!(t.flags & 128), s;
		if ((s = o) || (s = e !== null && e.memoizedState === null ? !1 : !!(to.current & 2)), s && (i = !0, t.flags &= -129), s = !!(t.flags & 32), t.flags &= -33, e === null) {
			if (J) {
				if (i ? Xa(t) : $a(t), (e = Ti) ? (e = rf(e, Di), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
					dehydrated: e,
					treeContext: gi === null ? null : {
						id: _i,
						overflow: vi
					},
					retryLane: 536870912,
					hydrationErrors: null
				}, n = oi(e), n.return = t, t.child = n, wi = t, Ti = null)) : e = null, e === null) throw ki(t);
				return of(e) ? t.lanes = 32 : t.lanes = 536870912, null;
			}
			var c = r.children;
			return r = r.fallback, i ? ($a(t), i = t.mode, c = vc({
				mode: "hidden",
				children: c
			}, i), r = ii(r, i, n, null), c.return = t, r.return = t, c.sibling = r, t.child = c, r = t.child, r.memoizedState = mc(n), r.childLanes = hc(e, s, n), t.memoizedState = pc, rc(null, r)) : (Xa(t), _c(t, c));
		}
		var l = e.memoizedState;
		if (l !== null && (c = l.dehydrated, c !== null)) {
			if (o) t.flags & 256 ? (Xa(t), t.flags &= -257, t = yc(e, t, n)) : t.memoizedState === null ? ($a(t), c = r.fallback, i = t.mode, r = vc({
				mode: "visible",
				children: r.children
			}, i), c = ii(c, i, n, null), c.flags |= 2, r.return = t, c.return = t, r.sibling = c, t.child = r, ka(t, e.child, null, n), r = t.child, r.memoizedState = mc(n), r.childLanes = hc(e, s, n), t.memoizedState = pc, t = rc(null, r)) : ($a(t), t.child = e.child, t.flags |= 128, t = null);
			else if (Xa(t), of(c)) {
				if (s = c.nextSibling && c.nextSibling.dataset, s) var u = s.dgst;
				s = u, r = Error(a(419)), r.stack = "", r.digest = s, Fi({
					value: r,
					source: null,
					stack: null
				}), t = yc(e, t, n);
			} else if (Zs || Ui(e, t, n, !1), s = (n & e.childLanes) !== 0, Zs || s) {
				if (s = Fl, s !== null && (r = Ze(s, n), r !== 0 && r !== l.retryLane)) throw l.retryLane = r, Jr(e, r), pu(s, e, r), Xs;
				af(c) || Tu(), t = yc(e, t, n);
			} else af(c) ? (t.flags |= 192, t.child = e.child, t = null) : (e = l.treeContext, Ti = cf(c.nextSibling), wi = t, J = !0, Ei = null, Di = !1, e !== null && Ci(t, e), t = _c(t, r.children), t.flags |= 4096);
			return t;
		}
		return i ? ($a(t), c = r.fallback, i = t.mode, l = e.child, u = l.sibling, r = ti(l, {
			mode: "hidden",
			children: r.children
		}), r.subtreeFlags = l.subtreeFlags & 65011712, u === null ? (c = ii(c, i, n, null), c.flags |= 2) : c = ti(u, c), c.return = t, r.return = t, r.sibling = c, t.child = r, rc(null, r), r = t.child, c = e.child.memoizedState, c === null ? c = mc(n) : (i = c.cachePool, i === null ? i = fa() : (l = Qi._currentValue, i = i.parent === l ? i : {
			parent: l,
			pool: l
		}), c = {
			baseLanes: c.baseLanes | n,
			cachePool: i
		}), r.memoizedState = c, r.childLanes = hc(e, s, n), t.memoizedState = pc, rc(e.child, r)) : (Xa(t), n = e.child, e = n.sibling, n = ti(n, {
			mode: "visible",
			children: r.children
		}), n.return = t, n.sibling = null, e !== null && (s = t.deletions, s === null ? (t.deletions = [e], t.flags |= 16) : s.push(e)), t.child = n, t.memoizedState = null, n);
	}
	function _c(e, t) {
		return t = vc({
			mode: "visible",
			children: t
		}, e.mode), t.return = e, e.child = t;
	}
	function vc(e, t) {
		return e = $r(22, e, null, t), e.lanes = 0, e;
	}
	function yc(e, t, n) {
		return ka(t, e.child, null, n), e = _c(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
	}
	function bc(e, t, n) {
		e.lanes |= t;
		var r = e.alternate;
		r !== null && (r.lanes |= t), Vi(e.return, t, n);
	}
	function xc(e, t, n, r, i, a) {
		var o = e.memoizedState;
		o === null ? e.memoizedState = {
			isBackwards: t,
			rendering: null,
			renderingStartTime: 0,
			last: r,
			tail: n,
			tailMode: i,
			treeForkCount: a
		} : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i, o.treeForkCount = a);
	}
	function Sc(e, t, n) {
		var r = t.pendingProps, i = r.revealOrder, a = r.tail;
		r = r.children;
		var o = to.current, s = !!(o & 2);
		if (s ? (o = o & 1 | 2, t.flags |= 128) : o &= 1, B(to, o), Qs(e, t, r, n), r = J ? pi : 0, !s && e !== null && e.flags & 128) a: for (e = t.child; e !== null;) {
			if (e.tag === 13) e.memoizedState !== null && bc(e, n, t);
			else if (e.tag === 19) bc(e, n, t);
			else if (e.child !== null) {
				e.child.return = e, e = e.child;
				continue;
			}
			if (e === t) break a;
			for (; e.sibling === null;) {
				if (e.return === null || e.return === t) break a;
				e = e.return;
			}
			e.sibling.return = e.return, e = e.sibling;
		}
		switch (i) {
			case "forwards":
				for (n = t.child, i = null; n !== null;) e = n.alternate, e !== null && no(e) === null && (i = n), n = n.sibling;
				n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), xc(t, !1, i, n, a, r);
				break;
			case "backwards":
			case "unstable_legacy-backwards":
				for (n = null, i = t.child, t.child = null; i !== null;) {
					if (e = i.alternate, e !== null && no(e) === null) {
						t.child = i;
						break;
					}
					e = i.sibling, i.sibling = n, n = i, i = e;
				}
				xc(t, !0, n, null, a, r);
				break;
			case "together":
				xc(t, !1, null, null, void 0, r);
				break;
			default: t.memoizedState = null;
		}
		return t.child;
	}
	function Cc(e, t, n) {
		if (e !== null && (t.dependencies = e.dependencies), Ul |= t.lanes, (n & t.childLanes) === 0) {
			if (e !== null) {
				if (Ui(e, t, n, !1), (n & t.childLanes) === 0) return null;
			} else return null;
		}
		if (e !== null && t.child !== e.child) throw Error(a(153));
		if (t.child !== null) {
			for (e = t.child, n = ti(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = ti(e, e.pendingProps), n.return = t;
			n.sibling = null;
		}
		return t.child;
	}
	function wc(e, t) {
		return (e.lanes & t) !== 0 || (e = e.dependencies, !!(e !== null && Wi(e)));
	}
	function Tc(e, t, n) {
		switch (t.tag) {
			case 3:
				se(t, t.stateNode.containerInfo), zi(t, Qi, e.memoizedState.cache), Ni();
				break;
			case 27:
			case 5:
				le(t);
				break;
			case 4:
				se(t, t.stateNode.containerInfo);
				break;
			case 10:
				zi(t, t.type, t.memoizedProps.value);
				break;
			case 31:
				if (t.memoizedState !== null) return t.flags |= 128, Za(t), null;
				break;
			case 13:
				var r = t.memoizedState;
				if (r !== null) return r.dehydrated === null ? (n & t.child.childLanes) === 0 ? (Xa(t), e = Cc(e, t, n), e === null ? null : e.sibling) : gc(e, t, n) : (Xa(t), t.flags |= 128, null);
				Xa(t);
				break;
			case 19:
				var i = !!(e.flags & 128);
				if (r = (n & t.childLanes) !== 0, r ||= (Ui(e, t, n, !1), (n & t.childLanes) !== 0), i) {
					if (r) return Sc(e, t, n);
					t.flags |= 128;
				}
				if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), B(to, to.current), r) break;
				return null;
			case 22: return t.lanes = 0, nc(e, t, n, t.pendingProps);
			case 24: zi(t, Qi, e.memoizedState.cache);
		}
		return Cc(e, t, n);
	}
	function Ec(e, t, n) {
		if (e !== null) {
			if (e.memoizedProps !== t.pendingProps) Zs = !0;
			else {
				if (!wc(e, n) && !(t.flags & 128)) return Zs = !1, Tc(e, t, n);
				Zs = !!(e.flags & 131072);
			}
		} else Zs = !1, J && t.flags & 1048576 && bi(t, pi, t.index);
		switch (t.lanes = 0, t.tag) {
			case 16:
				a: {
					var r = t.pendingProps;
					if (e = ya(t.elementType), t.type = e, typeof e == "function") ei(e) ? (r = Bs(e, r), t.tag = 1, t = dc(null, t, e, r, n)) : (t.tag = 0, t = lc(null, t, e, r, n));
					else {
						if (e != null) {
							var i = e.$$typeof;
							if (i === C) {
								t.tag = 11, t = $s(null, t, e, r, n);
								break a;
							}
							if (i === E) {
								t.tag = 14, t = ec(null, t, e, r, n);
								break a;
							}
						}
						throw t = P(e) || e, Error(a(306, t, ""));
					}
				}
				return t;
			case 0: return lc(e, t, t.type, t.pendingProps, n);
			case 1: return r = t.type, i = Bs(r, t.pendingProps), dc(e, t, r, i, n);
			case 3:
				a: {
					if (se(t, t.stateNode.containerInfo), e === null) throw Error(a(387));
					r = t.pendingProps;
					var o = t.memoizedState;
					i = o.element, Na(e, t), Ba(t, r, null, n);
					var s = t.memoizedState;
					if (r = s.cache, zi(t, Qi, r), r !== o.cache && Hi(t, [Qi], n, !0), za(), r = s.element, o.isDehydrated) {
						if (o = {
							element: r,
							isDehydrated: !1,
							cache: s.cache
						}, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
							t = fc(e, t, r, n);
							break a;
						}
						if (r !== i) {
							i = li(Error(a(424)), t), Fi(i), t = fc(e, t, r, n);
							break a;
						}
						switch (e = t.stateNode.containerInfo, e.nodeType) {
							case 9:
								e = e.body;
								break;
							default: e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
						}
						for (Ti = cf(e.firstChild), wi = t, J = !0, Ei = null, Di = !0, n = Aa(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
					} else {
						if (Ni(), r === i) {
							t = Cc(e, t, n);
							break a;
						}
						Qs(e, t, r, n);
					}
					t = t.child;
				}
				return t;
			case 26: return cc(e, t), e === null ? (n = kf(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : J || (n = t.type, e = t.pendingProps, r = Bd(ae.current).createElement(n), r[rt] = t, r[it] = e, Pd(r, n, e), mt(r), t.stateNode = r) : t.memoizedState = kf(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
			case 27: return le(t), e === null && J && (r = t.stateNode = ff(t.type, t.pendingProps, ae.current), wi = t, Di = !0, i = Ti, Zd(t.type) ? (lf = i, Ti = cf(r.firstChild)) : Ti = i), Qs(e, t, t.pendingProps.children, n), cc(e, t), e === null && (t.flags |= 4194304), t.child;
			case 5: return e === null && J && ((i = r = Ti) && (r = tf(r, t.type, t.pendingProps, Di), r === null ? i = !1 : (t.stateNode = r, wi = t, Ti = cf(r.firstChild), Di = !1, i = !0)), i || ki(t)), le(t), i = t.type, o = t.pendingProps, s = e === null ? null : e.memoizedProps, r = o.children, Ud(i, o) ? r = null : s !== null && Ud(i, s) && (t.flags |= 32), t.memoizedState !== null && (i = go(e, t, yo, null, null, n), Qf._currentValue = i), cc(e, t), Qs(e, t, r, n), t.child;
			case 6: return e === null && J && ((e = n = Ti) && (n = nf(n, t.pendingProps, Di), n === null ? e = !1 : (t.stateNode = n, wi = t, Ti = null, e = !0)), e || ki(t)), null;
			case 13: return gc(e, t, n);
			case 4: return se(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = ka(t, null, r, n) : Qs(e, t, r, n), t.child;
			case 11: return $s(e, t, t.type, t.pendingProps, n);
			case 7: return Qs(e, t, t.pendingProps, n), t.child;
			case 8: return Qs(e, t, t.pendingProps.children, n), t.child;
			case 12: return Qs(e, t, t.pendingProps.children, n), t.child;
			case 10: return r = t.pendingProps, zi(t, t.type, r.value), Qs(e, t, r.children, n), t.child;
			case 9: return i = t.type._context, r = t.pendingProps.children, Gi(t), i = Ki(i), r = r(i), t.flags |= 1, Qs(e, t, r, n), t.child;
			case 14: return ec(e, t, t.type, t.pendingProps, n);
			case 15: return tc(e, t, t.type, t.pendingProps, n);
			case 19: return Sc(e, t, n);
			case 31: return sc(e, t, n);
			case 22: return nc(e, t, n, t.pendingProps);
			case 24: return Gi(t), r = Ki(Qi), e === null ? (i = ua(), i === null && (i = Fl, o = $i(), i.pooledCache = o, o.refCount++, o !== null && (i.pooledCacheLanes |= n), i = o), t.memoizedState = {
				parent: r,
				cache: i
			}, Ma(t), zi(t, Qi, i)) : ((e.lanes & n) !== 0 && (Na(e, t), Ba(t, null, null, n), za()), i = e.memoizedState, o = t.memoizedState, i.parent === r ? (r = o.cache, zi(t, Qi, r), r !== i.cache && Hi(t, [Qi], n, !0)) : (i = {
				parent: r,
				cache: r
			}, t.memoizedState = i, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = i), zi(t, Qi, r))), Qs(e, t, t.pendingProps.children, n), t.child;
			case 29: throw t.pendingProps;
		}
		throw Error(a(156, t.tag));
	}
	function Dc(e) {
		e.flags |= 4;
	}
	function Oc(e, t, n, r, i) {
		if ((t = !!(e.mode & 32)) && (t = !1), t) {
			if (e.flags |= 16777216, (i & 335544128) === i) {
				if (e.stateNode.complete) e.flags |= 8192;
				else if (Su()) e.flags |= 8192;
				else throw ba = ga, ma;
			}
		} else e.flags &= -16777217;
	}
	function kc(e, t) {
		if (t.type !== "stylesheet" || t.state.loading & 4) e.flags &= -16777217;
		else if (e.flags |= 16777216, !Wf(t)) {
			if (Su()) e.flags |= 8192;
			else throw ba = ga, ma;
		}
	}
	function Ac(e, t) {
		t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag === 22 ? 536870912 : Ge(), e.lanes |= t, ql |= t);
	}
	function jc(e, t) {
		if (!J) switch (e.tailMode) {
			case "hidden":
				t = e.tail;
				for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
				n === null ? e.tail = null : n.sibling = null;
				break;
			case "collapsed":
				n = e.tail;
				for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
				r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
		}
	}
	function Mc(e) {
		var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
		if (t) for (var i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 65011712, r |= i.flags & 65011712, i.return = e, i = i.sibling;
		else for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
		return e.subtreeFlags |= r, e.childLanes = n, t;
	}
	function Nc(e, t, n) {
		var r = t.pendingProps;
		switch (Si(t), t.tag) {
			case 16:
			case 15:
			case 0:
			case 11:
			case 7:
			case 8:
			case 12:
			case 9:
			case 14: return Mc(t), null;
			case 1: return Mc(t), null;
			case 3: return n = t.stateNode, r = null, e !== null && (r = e.memoizedState.cache), t.memoizedState.cache !== r && (t.flags |= 2048), Bi(Qi), ce(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (Mi(t) ? Dc(t) : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Pi())), Mc(t), null;
			case 26:
				var i = t.type, o = t.memoizedState;
				return e === null ? (Dc(t), o === null ? (Mc(t), Oc(t, i, null, r, n)) : (Mc(t), kc(t, o))) : o ? o === e.memoizedState ? (Mc(t), t.flags &= -16777217) : (Dc(t), Mc(t), kc(t, o)) : (e = e.memoizedProps, e !== r && Dc(t), Mc(t), Oc(t, i, e, r, n)), null;
			case 27:
				if (ue(t), n = ae.current, i = t.type, e !== null && t.stateNode != null) e.memoizedProps !== r && Dc(t);
				else {
					if (!r) {
						if (t.stateNode === null) throw Error(a(166));
						return Mc(t), null;
					}
					e = re.current, Mi(t) ? Ai(t, e) : (e = ff(i, r, n), t.stateNode = e, Dc(t));
				}
				return Mc(t), null;
			case 5:
				if (ue(t), i = t.type, e !== null && t.stateNode != null) e.memoizedProps !== r && Dc(t);
				else {
					if (!r) {
						if (t.stateNode === null) throw Error(a(166));
						return Mc(t), null;
					}
					if (o = re.current, Mi(t)) Ai(t, o);
					else {
						var s = Bd(ae.current);
						switch (o) {
							case 1:
								o = s.createElementNS("http://www.w3.org/2000/svg", i);
								break;
							case 2:
								o = s.createElementNS("http://www.w3.org/1998/Math/MathML", i);
								break;
							default: switch (i) {
								case "svg":
									o = s.createElementNS("http://www.w3.org/2000/svg", i);
									break;
								case "math":
									o = s.createElementNS("http://www.w3.org/1998/Math/MathML", i);
									break;
								case "script":
									o = s.createElement("div"), o.innerHTML = "<script><\/script>", o = o.removeChild(o.firstChild);
									break;
								case "select":
									o = typeof r.is == "string" ? s.createElement("select", { is: r.is }) : s.createElement("select"), r.multiple ? o.multiple = !0 : r.size && (o.size = r.size);
									break;
								default: o = typeof r.is == "string" ? s.createElement(i, { is: r.is }) : s.createElement(i);
							}
						}
						o[rt] = t, o[it] = r;
						a: for (s = t.child; s !== null;) {
							if (s.tag === 5 || s.tag === 6) o.appendChild(s.stateNode);
							else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
								s.child.return = s, s = s.child;
								continue;
							}
							if (s === t) break a;
							for (; s.sibling === null;) {
								if (s.return === null || s.return === t) break a;
								s = s.return;
							}
							s.sibling.return = s.return, s = s.sibling;
						}
						t.stateNode = o;
						a: switch (Pd(o, i, r), i) {
							case "button":
							case "input":
							case "select":
							case "textarea":
								r = !!r.autoFocus;
								break a;
							case "img":
								r = !0;
								break a;
							default: r = !1;
						}
						r && Dc(t);
					}
				}
				return Mc(t), Oc(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n), null;
			case 6:
				if (e && t.stateNode != null) e.memoizedProps !== r && Dc(t);
				else {
					if (typeof r != "string" && t.stateNode === null) throw Error(a(166));
					if (e = ae.current, Mi(t)) {
						if (e = t.stateNode, n = t.memoizedProps, r = null, i = wi, i !== null) switch (i.tag) {
							case 27:
							case 5: r = i.memoizedProps;
						}
						e[rt] = t, e = !!(e.nodeValue === n || r !== null && !0 === r.suppressHydrationWarning || jd(e.nodeValue, n)), e || ki(t, !0);
					} else e = Bd(e).createTextNode(r), e[rt] = t, t.stateNode = e;
				}
				return Mc(t), null;
			case 31:
				if (n = t.memoizedState, e === null || e.memoizedState !== null) {
					if (r = Mi(t), n !== null) {
						if (e === null) {
							if (!r) throw Error(a(318));
							if (e = t.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(a(557));
							e[rt] = t;
						} else Ni(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
						Mc(t), e = !1;
					} else n = Pi(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
					if (!e) return t.flags & 256 ? (eo(t), t) : (eo(t), null);
					if (t.flags & 128) throw Error(a(558));
				}
				return Mc(t), null;
			case 13:
				if (r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
					if (i = Mi(t), r !== null && r.dehydrated !== null) {
						if (e === null) {
							if (!i) throw Error(a(318));
							if (i = t.memoizedState, i = i === null ? null : i.dehydrated, !i) throw Error(a(317));
							i[rt] = t;
						} else Ni(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
						Mc(t), i = !1;
					} else i = Pi(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = i), i = !0;
					if (!i) return t.flags & 256 ? (eo(t), t) : (eo(t), null);
				}
				return eo(t), t.flags & 128 ? (t.lanes = n, t) : (n = r !== null, e = e !== null && e.memoizedState !== null, n && (r = t.child, i = null, r.alternate !== null && r.alternate.memoizedState !== null && r.alternate.memoizedState.cachePool !== null && (i = r.alternate.memoizedState.cachePool.pool), o = null, r.memoizedState !== null && r.memoizedState.cachePool !== null && (o = r.memoizedState.cachePool.pool), o !== i && (r.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), Ac(t, t.updateQueue), Mc(t), null);
			case 4: return ce(), e === null && xd(t.stateNode.containerInfo), Mc(t), null;
			case 10: return Bi(t.type), Mc(t), null;
			case 19:
				if (z(to), r = t.memoizedState, r === null) return Mc(t), null;
				if (i = !!(t.flags & 128), o = r.rendering, o === null) {
					if (i) jc(r, !1);
					else {
						if (Hl !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null;) {
							if (o = no(e), o !== null) {
								for (t.flags |= 128, jc(r, !1), e = o.updateQueue, t.updateQueue = e, Ac(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null;) ni(n, e), n = n.sibling;
								return B(to, to.current & 1 | 2), J && yi(t, r.treeForkCount), t.child;
							}
							e = e.sibling;
						}
						r.tail !== null && Se() > $l && (t.flags |= 128, i = !0, jc(r, !1), t.lanes = 4194304);
					}
				} else {
					if (!i) {
						if (e = no(o), e !== null) {
							if (t.flags |= 128, i = !0, e = e.updateQueue, t.updateQueue = e, Ac(t, e), jc(r, !0), r.tail === null && r.tailMode === "hidden" && !o.alternate && !J) return Mc(t), null;
						} else 2 * Se() - r.renderingStartTime > $l && n !== 536870912 && (t.flags |= 128, i = !0, jc(r, !1), t.lanes = 4194304);
					}
					r.isBackwards ? (o.sibling = t.child, t.child = o) : (e = r.last, e === null ? t.child = o : e.sibling = o, r.last = o);
				}
				return r.tail === null ? (Mc(t), null) : (e = r.tail, r.rendering = e, r.tail = e.sibling, r.renderingStartTime = Se(), e.sibling = null, n = to.current, B(to, i ? n & 1 | 2 : n & 1), J && yi(t, r.treeForkCount), e);
			case 22:
			case 23: return eo(t), qa(), r = t.memoizedState !== null, e === null ? r && (t.flags |= 8192) : e.memoizedState !== null !== r && (t.flags |= 8192), r ? n & 536870912 && !(t.flags & 128) && (Mc(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Mc(t), n = t.updateQueue, n !== null && Ac(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), r = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (r = t.memoizedState.cachePool.pool), r !== n && (t.flags |= 2048), e !== null && z(la), null;
			case 24: return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), Bi(Qi), Mc(t), null;
			case 25: return null;
			case 30: return null;
		}
		throw Error(a(156, t.tag));
	}
	function Pc(e, t) {
		switch (Si(t), t.tag) {
			case 1: return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 3: return Bi(Qi), ce(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
			case 26:
			case 27:
			case 5: return ue(t), null;
			case 31:
				if (t.memoizedState !== null) {
					if (eo(t), t.alternate === null) throw Error(a(340));
					Ni();
				}
				return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 13:
				if (eo(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
					if (t.alternate === null) throw Error(a(340));
					Ni();
				}
				return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 19: return z(to), null;
			case 4: return ce(), null;
			case 10: return Bi(t.type), null;
			case 22:
			case 23: return eo(t), qa(), e !== null && z(la), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 24: return Bi(Qi), null;
			case 25: return null;
			default: return null;
		}
	}
	function Fc(e, t) {
		switch (Si(t), t.tag) {
			case 3:
				Bi(Qi), ce();
				break;
			case 26:
			case 27:
			case 5:
				ue(t);
				break;
			case 4:
				ce();
				break;
			case 31:
				t.memoizedState !== null && eo(t);
				break;
			case 13:
				eo(t);
				break;
			case 19:
				z(to);
				break;
			case 10:
				Bi(t.type);
				break;
			case 22:
			case 23:
				eo(t), qa(), e !== null && z(la);
				break;
			case 24: Bi(Qi);
		}
	}
	function Ic(e, t) {
		try {
			var n = t.updateQueue, r = n === null ? null : n.lastEffect;
			if (r !== null) {
				var i = r.next;
				n = i;
				do {
					if ((n.tag & e) === e) {
						r = void 0;
						var a = n.create, o = n.inst;
						r = a(), o.destroy = r;
					}
					n = n.next;
				} while (n !== i);
			}
		} catch (e) {
			Uu(t, t.return, e);
		}
	}
	function Lc(e, t, n) {
		try {
			var r = t.updateQueue, i = r === null ? null : r.lastEffect;
			if (i !== null) {
				var a = i.next;
				r = a;
				do {
					if ((r.tag & e) === e) {
						var o = r.inst, s = o.destroy;
						if (s !== void 0) {
							o.destroy = void 0, i = t;
							var c = n, l = s;
							try {
								l();
							} catch (e) {
								Uu(i, c, e);
							}
						}
					}
					r = r.next;
				} while (r !== a);
			}
		} catch (e) {
			Uu(t, t.return, e);
		}
	}
	function Rc(e) {
		var t = e.updateQueue;
		if (t !== null) {
			var n = e.stateNode;
			try {
				Ha(t, n);
			} catch (t) {
				Uu(e, e.return, t);
			}
		}
	}
	function zc(e, t, n) {
		n.props = Bs(e.type, e.memoizedProps), n.state = e.memoizedState;
		try {
			n.componentWillUnmount();
		} catch (n) {
			Uu(e, t, n);
		}
	}
	function Bc(e, t) {
		try {
			var n = e.ref;
			if (n !== null) {
				switch (e.tag) {
					case 26:
					case 27:
					case 5:
						var r = e.stateNode;
						break;
					case 30:
						r = e.stateNode;
						break;
					default: r = e.stateNode;
				}
				typeof n == "function" ? e.refCleanup = n(r) : n.current = r;
			}
		} catch (n) {
			Uu(e, t, n);
		}
	}
	function Vc(e, t) {
		var n = e.ref, r = e.refCleanup;
		if (n !== null) {
			if (typeof r == "function") try {
				r();
			} catch (n) {
				Uu(e, t, n);
			} finally {
				e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
			}
			else if (typeof n == "function") try {
				n(null);
			} catch (n) {
				Uu(e, t, n);
			}
			else n.current = null;
		}
	}
	function Hc(e) {
		var t = e.type, n = e.memoizedProps, r = e.stateNode;
		try {
			a: switch (t) {
				case "button":
				case "input":
				case "select":
				case "textarea":
					n.autoFocus && r.focus();
					break a;
				case "img": n.src ? r.src = n.src : n.srcSet && (r.srcset = n.srcSet);
			}
		} catch (t) {
			Uu(e, e.return, t);
		}
	}
	function Uc(e, t, n) {
		try {
			var r = e.stateNode;
			Fd(r, e.type, n, t), r[it] = t;
		} catch (t) {
			Uu(e, e.return, t);
		}
	}
	function Wc(e) {
		return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Zd(e.type) || e.tag === 4;
	}
	function Gc(e) {
		a: for (;;) {
			for (; e.sibling === null;) {
				if (e.return === null || Wc(e.return)) return null;
				e = e.return;
			}
			for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
				if (e.tag === 27 && Zd(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue a;
				e.child.return = e, e = e.child;
			}
			if (!(e.flags & 2)) return e.stateNode;
		}
	}
	function Kc(e, t, n) {
		var r = e.tag;
		if (r === 5 || r === 6) e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Jt));
		else if (r !== 4 && (r === 27 && Zd(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null)) for (Kc(e, t, n), e = e.sibling; e !== null;) Kc(e, t, n), e = e.sibling;
	}
	function qc(e, t, n) {
		var r = e.tag;
		if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
		else if (r !== 4 && (r === 27 && Zd(e.type) && (n = e.stateNode), e = e.child, e !== null)) for (qc(e, t, n), e = e.sibling; e !== null;) qc(e, t, n), e = e.sibling;
	}
	function Jc(e) {
		var t = e.stateNode, n = e.memoizedProps;
		try {
			for (var r = e.type, i = t.attributes; i.length;) t.removeAttributeNode(i[0]);
			Pd(t, r, n), t[rt] = e, t[it] = n;
		} catch (t) {
			Uu(e, e.return, t);
		}
	}
	var Yc = !1, Xc = !1, Zc = !1, Qc = typeof WeakSet == "function" ? WeakSet : Set, $c = null;
	function el(e, t) {
		if (e = e.containerInfo, Rd = sp, e = br(e), xr(e)) {
			if ("selectionStart" in e) var n = {
				start: e.selectionStart,
				end: e.selectionEnd
			};
			else a: {
				n = (n = e.ownerDocument) && n.defaultView || window;
				var r = n.getSelection && n.getSelection();
				if (r && r.rangeCount !== 0) {
					n = r.anchorNode;
					var i = r.anchorOffset, o = r.focusNode;
					r = r.focusOffset;
					try {
						n.nodeType, o.nodeType;
					} catch {
						n = null;
						break a;
					}
					var s = 0, c = -1, l = -1, u = 0, d = 0, f = e, p = null;
					b: for (;;) {
						for (var m; f !== n || i !== 0 && f.nodeType !== 3 || (c = s + i), f !== o || r !== 0 && f.nodeType !== 3 || (l = s + r), f.nodeType === 3 && (s += f.nodeValue.length), (m = f.firstChild) !== null;) p = f, f = m;
						for (;;) {
							if (f === e) break b;
							if (p === n && ++u === i && (c = s), p === o && ++d === r && (l = s), (m = f.nextSibling) !== null) break;
							f = p, p = f.parentNode;
						}
						f = m;
					}
					n = c === -1 || l === -1 ? null : {
						start: c,
						end: l
					};
				} else n = null;
			}
			n ||= {
				start: 0,
				end: 0
			};
		} else n = null;
		for (zd = {
			focusedElem: e,
			selectionRange: n
		}, sp = !1, $c = t; $c !== null;) if (t = $c, e = t.child, t.subtreeFlags & 1028 && e !== null) e.return = t, $c = e;
		else for (; $c !== null;) {
			switch (t = $c, o = t.alternate, e = t.flags, t.tag) {
				case 0:
					if (e & 4 && (e = t.updateQueue, e = e === null ? null : e.events, e !== null)) for (n = 0; n < e.length; n++) i = e[n], i.ref.impl = i.nextImpl;
					break;
				case 11:
				case 15: break;
				case 1:
					if (e & 1024 && o !== null) {
						e = void 0, n = t, i = o.memoizedProps, o = o.memoizedState, r = n.stateNode;
						try {
							var h = Bs(n.type, i);
							e = r.getSnapshotBeforeUpdate(h, o), r.__reactInternalSnapshotBeforeUpdate = e;
						} catch (e) {
							Uu(n, n.return, e);
						}
					}
					break;
				case 3:
					if (e & 1024) {
						if (e = t.stateNode.containerInfo, n = e.nodeType, n === 9) ef(e);
						else if (n === 1) switch (e.nodeName) {
							case "HEAD":
							case "HTML":
							case "BODY":
								ef(e);
								break;
							default: e.textContent = "";
						}
					}
					break;
				case 5:
				case 26:
				case 27:
				case 6:
				case 4:
				case 17: break;
				default: if (e & 1024) throw Error(a(163));
			}
			if (e = t.sibling, e !== null) {
				e.return = t.return, $c = e;
				break;
			}
			$c = t.return;
		}
	}
	function tl(e, t, n) {
		var r = n.flags;
		switch (n.tag) {
			case 0:
			case 11:
			case 15:
				gl(e, n), r & 4 && Ic(5, n);
				break;
			case 1:
				if (gl(e, n), r & 4) {
					if (e = n.stateNode, t === null) try {
						e.componentDidMount();
					} catch (e) {
						Uu(n, n.return, e);
					}
					else {
						var i = Bs(n.type, t.memoizedProps);
						t = t.memoizedState;
						try {
							e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate);
						} catch (e) {
							Uu(n, n.return, e);
						}
					}
				}
				r & 64 && Rc(n), r & 512 && Bc(n, n.return);
				break;
			case 3:
				if (gl(e, n), r & 64 && (e = n.updateQueue, e !== null)) {
					if (t = null, n.child !== null) switch (n.child.tag) {
						case 27:
						case 5:
							t = n.child.stateNode;
							break;
						case 1: t = n.child.stateNode;
					}
					try {
						Ha(e, t);
					} catch (e) {
						Uu(n, n.return, e);
					}
				}
				break;
			case 27: t === null && r & 4 && Jc(n);
			case 26:
			case 5:
				gl(e, n), t === null && r & 4 && Hc(n), r & 512 && Bc(n, n.return);
				break;
			case 12:
				gl(e, n);
				break;
			case 31:
				gl(e, n), r & 4 && sl(e, n);
				break;
			case 13:
				gl(e, n), r & 4 && cl(e, n), r & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = qu.bind(null, n), sf(e, n))));
				break;
			case 22:
				if (r = n.memoizedState !== null || Yc, !r) {
					t = t !== null && t.memoizedState !== null || Xc, i = Yc;
					var a = Xc;
					Yc = r, (Xc = t) && !a ? vl(e, n, !!(n.subtreeFlags & 8772)) : gl(e, n), Yc = i, Xc = a;
				}
				break;
			case 30: break;
			default: gl(e, n);
		}
	}
	function nl(e) {
		var t = e.alternate;
		t !== null && (e.alternate = null, nl(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && dt(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
	}
	var rl = null, il = !1;
	function al(e, t, n) {
		for (n = n.child; n !== null;) ol(e, t, n), n = n.sibling;
	}
	function ol(e, t, n) {
		if (Me && typeof Me.onCommitFiberUnmount == "function") try {
			Me.onCommitFiberUnmount(je, n);
		} catch {}
		switch (n.tag) {
			case 26:
				Xc || Vc(n, t), al(e, t, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
				break;
			case 27:
				Xc || Vc(n, t);
				var r = rl, i = il;
				Zd(n.type) && (rl = n.stateNode, il = !1), al(e, t, n), pf(n.stateNode), rl = r, il = i;
				break;
			case 5: Xc || Vc(n, t);
			case 6:
				if (r = rl, i = il, rl = null, al(e, t, n), rl = r, il = i, rl !== null) {
					if (il) try {
						(rl.nodeType === 9 ? rl.body : rl.nodeName === "HTML" ? rl.ownerDocument.body : rl).removeChild(n.stateNode);
					} catch (e) {
						Uu(n, t, e);
					}
					else try {
						rl.removeChild(n.stateNode);
					} catch (e) {
						Uu(n, t, e);
					}
				}
				break;
			case 18:
				rl !== null && (il ? (e = rl, Qd(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, n.stateNode), Np(e)) : Qd(rl, n.stateNode));
				break;
			case 4:
				r = rl, i = il, rl = n.stateNode.containerInfo, il = !0, al(e, t, n), rl = r, il = i;
				break;
			case 0:
			case 11:
			case 14:
			case 15:
				Lc(2, n, t), Xc || Lc(4, n, t), al(e, t, n);
				break;
			case 1:
				Xc || (Vc(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function" && zc(n, t, r)), al(e, t, n);
				break;
			case 21:
				al(e, t, n);
				break;
			case 22:
				Xc = (r = Xc) || n.memoizedState !== null, al(e, t, n), Xc = r;
				break;
			default: al(e, t, n);
		}
	}
	function sl(e, t) {
		if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
			e = e.dehydrated;
			try {
				Np(e);
			} catch (e) {
				Uu(t, t.return, e);
			}
		}
	}
	function cl(e, t) {
		if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
			Np(e);
		} catch (e) {
			Uu(t, t.return, e);
		}
	}
	function ll(e) {
		switch (e.tag) {
			case 31:
			case 13:
			case 19:
				var t = e.stateNode;
				return t === null && (t = e.stateNode = new Qc()), t;
			case 22: return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Qc()), t;
			default: throw Error(a(435, e.tag));
		}
	}
	function ul(e, t) {
		var n = ll(e);
		t.forEach(function(t) {
			if (!n.has(t)) {
				n.add(t);
				var r = Ju.bind(null, e, t);
				t.then(r, r);
			}
		});
	}
	function dl(e, t) {
		var n = t.deletions;
		if (n !== null) for (var r = 0; r < n.length; r++) {
			var i = n[r], o = e, s = t, c = s;
			a: for (; c !== null;) {
				switch (c.tag) {
					case 27:
						if (Zd(c.type)) {
							rl = c.stateNode, il = !1;
							break a;
						}
						break;
					case 5:
						rl = c.stateNode, il = !1;
						break a;
					case 3:
					case 4:
						rl = c.stateNode.containerInfo, il = !0;
						break a;
				}
				c = c.return;
			}
			if (rl === null) throw Error(a(160));
			ol(o, s, i), rl = null, il = !1, o = i.alternate, o !== null && (o.return = null), i.return = null;
		}
		if (t.subtreeFlags & 13886) for (t = t.child; t !== null;) pl(t, e), t = t.sibling;
	}
	var fl = null;
	function pl(e, t) {
		var n = e.alternate, r = e.flags;
		switch (e.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
				dl(t, e), ml(e), r & 4 && (Lc(3, e, e.return), Ic(3, e), Lc(5, e, e.return));
				break;
			case 1:
				dl(t, e), ml(e), r & 512 && (Xc || n === null || Vc(n, n.return)), r & 64 && Yc && (e = e.updateQueue, e !== null && (r = e.callbacks, r !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? r : n.concat(r))));
				break;
			case 26:
				var i = fl;
				if (dl(t, e), ml(e), r & 512 && (Xc || n === null || Vc(n, n.return)), r & 4) {
					var o = n === null ? null : n.memoizedState;
					if (r = e.memoizedState, n === null) {
						if (r === null) {
							if (e.stateNode === null) {
								a: {
									r = e.type, n = e.memoizedProps, i = i.ownerDocument || i;
									b: switch (r) {
										case "title":
											o = i.getElementsByTagName("title")[0], (!o || o[ut] || o[rt] || o.namespaceURI === "http://www.w3.org/2000/svg" || o.hasAttribute("itemprop")) && (o = i.createElement(r), i.head.insertBefore(o, i.querySelector("head > title"))), Pd(o, r, n), o[rt] = e, mt(o), r = o;
											break a;
										case "link":
											var s = Vf("link", "href", i).get(r + (n.href || ""));
											if (s) {
												for (var c = 0; c < s.length; c++) if (o = s[c], o.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && o.getAttribute("rel") === (n.rel == null ? null : n.rel) && o.getAttribute("title") === (n.title == null ? null : n.title) && o.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
													s.splice(c, 1);
													break b;
												}
											}
											o = i.createElement(r), Pd(o, r, n), i.head.appendChild(o);
											break;
										case "meta":
											if (s = Vf("meta", "content", i).get(r + (n.content || ""))) {
												for (c = 0; c < s.length; c++) if (o = s[c], o.getAttribute("content") === (n.content == null ? null : "" + n.content) && o.getAttribute("name") === (n.name == null ? null : n.name) && o.getAttribute("property") === (n.property == null ? null : n.property) && o.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && o.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
													s.splice(c, 1);
													break b;
												}
											}
											o = i.createElement(r), Pd(o, r, n), i.head.appendChild(o);
											break;
										default: throw Error(a(468, r));
									}
									o[rt] = e, mt(o), r = o;
								}
								e.stateNode = r;
							} else Hf(i, e.type, e.stateNode);
						} else e.stateNode = If(i, r, e.memoizedProps);
					} else o === r ? r === null && e.stateNode !== null && Uc(e, e.memoizedProps, n.memoizedProps) : (o === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : o.count--, r === null ? Hf(i, e.type, e.stateNode) : If(i, r, e.memoizedProps));
				}
				break;
			case 27:
				dl(t, e), ml(e), r & 512 && (Xc || n === null || Vc(n, n.return)), n !== null && r & 4 && Uc(e, e.memoizedProps, n.memoizedProps);
				break;
			case 5:
				if (dl(t, e), ml(e), r & 512 && (Xc || n === null || Vc(n, n.return)), e.flags & 32) {
					i = e.stateNode;
					try {
						Bt(i, "");
					} catch (t) {
						Uu(e, e.return, t);
					}
				}
				r & 4 && e.stateNode != null && (i = e.memoizedProps, Uc(e, i, n === null ? i : n.memoizedProps)), r & 1024 && (Zc = !0);
				break;
			case 6:
				if (dl(t, e), ml(e), r & 4) {
					if (e.stateNode === null) throw Error(a(162));
					r = e.memoizedProps, n = e.stateNode;
					try {
						n.nodeValue = r;
					} catch (t) {
						Uu(e, e.return, t);
					}
				}
				break;
			case 3:
				if (Bf = null, i = fl, fl = gf(t.containerInfo), dl(t, e), fl = i, ml(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
					Np(t.containerInfo);
				} catch (t) {
					Uu(e, e.return, t);
				}
				Zc && (Zc = !1, hl(e));
				break;
			case 4:
				r = fl, fl = gf(e.stateNode.containerInfo), dl(t, e), ml(e), fl = r;
				break;
			case 12:
				dl(t, e), ml(e);
				break;
			case 31:
				dl(t, e), ml(e), r & 4 && (r = e.updateQueue, r !== null && (e.updateQueue = null, ul(e, r)));
				break;
			case 13:
				dl(t, e), ml(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (Zl = Se()), r & 4 && (r = e.updateQueue, r !== null && (e.updateQueue = null, ul(e, r)));
				break;
			case 22:
				i = e.memoizedState !== null;
				var l = n !== null && n.memoizedState !== null, u = Yc, d = Xc;
				if (Yc = u || i, Xc = d || l, dl(t, e), Xc = d, Yc = u, ml(e), r & 8192) a: for (t = e.stateNode, t._visibility = i ? t._visibility & -2 : t._visibility | 1, i && (n === null || l || Yc || Xc || _l(e)), n = null, t = e;;) {
					if (t.tag === 5 || t.tag === 26) {
						if (n === null) {
							l = n = t;
							try {
								if (o = l.stateNode, i) s = o.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none";
								else {
									c = l.stateNode;
									var f = l.memoizedProps.style, p = f != null && f.hasOwnProperty("display") ? f.display : null;
									c.style.display = p == null || typeof p == "boolean" ? "" : ("" + p).trim();
								}
							} catch (e) {
								Uu(l, l.return, e);
							}
						}
					} else if (t.tag === 6) {
						if (n === null) {
							l = t;
							try {
								l.stateNode.nodeValue = i ? "" : l.memoizedProps;
							} catch (e) {
								Uu(l, l.return, e);
							}
						}
					} else if (t.tag === 18) {
						if (n === null) {
							l = t;
							try {
								var m = l.stateNode;
								i ? $d(m, !0) : $d(l.stateNode, !1);
							} catch (e) {
								Uu(l, l.return, e);
							}
						}
					} else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
						t.child.return = t, t = t.child;
						continue;
					}
					if (t === e) break a;
					for (; t.sibling === null;) {
						if (t.return === null || t.return === e) break a;
						n === t && (n = null), t = t.return;
					}
					n === t && (n = null), t.sibling.return = t.return, t = t.sibling;
				}
				r & 4 && (r = e.updateQueue, r !== null && (n = r.retryQueue, n !== null && (r.retryQueue = null, ul(e, n))));
				break;
			case 19:
				dl(t, e), ml(e), r & 4 && (r = e.updateQueue, r !== null && (e.updateQueue = null, ul(e, r)));
				break;
			case 30: break;
			case 21: break;
			default: dl(t, e), ml(e);
		}
	}
	function ml(e) {
		var t = e.flags;
		if (t & 2) {
			try {
				for (var n, r = e.return; r !== null;) {
					if (Wc(r)) {
						n = r;
						break;
					}
					r = r.return;
				}
				if (n == null) throw Error(a(160));
				switch (n.tag) {
					case 27:
						var i = n.stateNode;
						qc(e, Gc(e), i);
						break;
					case 5:
						var o = n.stateNode;
						n.flags & 32 && (Bt(o, ""), n.flags &= -33), qc(e, Gc(e), o);
						break;
					case 3:
					case 4:
						var s = n.stateNode.containerInfo;
						Kc(e, Gc(e), s);
						break;
					default: throw Error(a(161));
				}
			} catch (t) {
				Uu(e, e.return, t);
			}
			e.flags &= -3;
		}
		t & 4096 && (e.flags &= -4097);
	}
	function hl(e) {
		if (e.subtreeFlags & 1024) for (e = e.child; e !== null;) {
			var t = e;
			hl(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
		}
	}
	function gl(e, t) {
		if (t.subtreeFlags & 8772) for (t = t.child; t !== null;) tl(e, t.alternate, t), t = t.sibling;
	}
	function _l(e) {
		for (e = e.child; e !== null;) {
			var t = e;
			switch (t.tag) {
				case 0:
				case 11:
				case 14:
				case 15:
					Lc(4, t, t.return), _l(t);
					break;
				case 1:
					Vc(t, t.return);
					var n = t.stateNode;
					typeof n.componentWillUnmount == "function" && zc(t, t.return, n), _l(t);
					break;
				case 27: pf(t.stateNode);
				case 26:
				case 5:
					Vc(t, t.return), _l(t);
					break;
				case 22:
					t.memoizedState === null && _l(t);
					break;
				case 30:
					_l(t);
					break;
				default: _l(t);
			}
			e = e.sibling;
		}
	}
	function vl(e, t, n) {
		for (n &&= !!(t.subtreeFlags & 8772), t = t.child; t !== null;) {
			var r = t.alternate, i = e, a = t, o = a.flags;
			switch (a.tag) {
				case 0:
				case 11:
				case 15:
					vl(i, a, n), Ic(4, a);
					break;
				case 1:
					if (vl(i, a, n), r = a, i = r.stateNode, typeof i.componentDidMount == "function") try {
						i.componentDidMount();
					} catch (e) {
						Uu(r, r.return, e);
					}
					if (r = a, i = r.updateQueue, i !== null) {
						var s = r.stateNode;
						try {
							var c = i.shared.hiddenCallbacks;
							if (c !== null) for (i.shared.hiddenCallbacks = null, i = 0; i < c.length; i++) Va(c[i], s);
						} catch (e) {
							Uu(r, r.return, e);
						}
					}
					n && o & 64 && Rc(a), Bc(a, a.return);
					break;
				case 27: Jc(a);
				case 26:
				case 5:
					vl(i, a, n), n && r === null && o & 4 && Hc(a), Bc(a, a.return);
					break;
				case 12:
					vl(i, a, n);
					break;
				case 31:
					vl(i, a, n), n && o & 4 && sl(i, a);
					break;
				case 13:
					vl(i, a, n), n && o & 4 && cl(i, a);
					break;
				case 22:
					a.memoizedState === null && vl(i, a, n), Bc(a, a.return);
					break;
				case 30: break;
				default: vl(i, a, n);
			}
			t = t.sibling;
		}
	}
	function yl(e, t) {
		var n = null;
		e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && ea(n));
	}
	function bl(e, t) {
		e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && ea(e));
	}
	function xl(e, t, n, r) {
		if (t.subtreeFlags & 10256) for (t = t.child; t !== null;) Sl(e, t, n, r), t = t.sibling;
	}
	function Sl(e, t, n, r) {
		var i = t.flags;
		switch (t.tag) {
			case 0:
			case 11:
			case 15:
				xl(e, t, n, r), i & 2048 && Ic(9, t);
				break;
			case 1:
				xl(e, t, n, r);
				break;
			case 3:
				xl(e, t, n, r), i & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && ea(e)));
				break;
			case 12:
				if (i & 2048) {
					xl(e, t, n, r), e = t.stateNode;
					try {
						var a = t.memoizedProps, o = a.id, s = a.onPostCommit;
						typeof s == "function" && s(o, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0);
					} catch (e) {
						Uu(t, t.return, e);
					}
				} else xl(e, t, n, r);
				break;
			case 31:
				xl(e, t, n, r);
				break;
			case 13:
				xl(e, t, n, r);
				break;
			case 23: break;
			case 22:
				a = t.stateNode, o = t.alternate, t.memoizedState === null ? a._visibility & 2 ? xl(e, t, n, r) : (a._visibility |= 2, Cl(e, t, n, r, !!(t.subtreeFlags & 10256) || !1)) : a._visibility & 2 ? xl(e, t, n, r) : wl(e, t), i & 2048 && yl(o, t);
				break;
			case 24:
				xl(e, t, n, r), i & 2048 && bl(t.alternate, t);
				break;
			default: xl(e, t, n, r);
		}
	}
	function Cl(e, t, n, r, i) {
		for (i &&= !!(t.subtreeFlags & 10256) || !1, t = t.child; t !== null;) {
			var a = e, o = t, s = n, c = r, l = o.flags;
			switch (o.tag) {
				case 0:
				case 11:
				case 15:
					Cl(a, o, s, c, i), Ic(8, o);
					break;
				case 23: break;
				case 22:
					var u = o.stateNode;
					o.memoizedState === null ? (u._visibility |= 2, Cl(a, o, s, c, i)) : u._visibility & 2 ? Cl(a, o, s, c, i) : wl(a, o), i && l & 2048 && yl(o.alternate, o);
					break;
				case 24:
					Cl(a, o, s, c, i), i && l & 2048 && bl(o.alternate, o);
					break;
				default: Cl(a, o, s, c, i);
			}
			t = t.sibling;
		}
	}
	function wl(e, t) {
		if (t.subtreeFlags & 10256) for (t = t.child; t !== null;) {
			var n = e, r = t, i = r.flags;
			switch (r.tag) {
				case 22:
					wl(n, r), i & 2048 && yl(r.alternate, r);
					break;
				case 24:
					wl(n, r), i & 2048 && bl(r.alternate, r);
					break;
				default: wl(n, r);
			}
			t = t.sibling;
		}
	}
	var Tl = 8192;
	function El(e, t, n) {
		if (e.subtreeFlags & Tl) for (e = e.child; e !== null;) Dl(e, t, n), e = e.sibling;
	}
	function Dl(e, t, n) {
		switch (e.tag) {
			case 26:
				El(e, t, n), e.flags & Tl && e.memoizedState !== null && Gf(n, fl, e.memoizedState, e.memoizedProps);
				break;
			case 5:
				El(e, t, n);
				break;
			case 3:
			case 4:
				var r = fl;
				fl = gf(e.stateNode.containerInfo), El(e, t, n), fl = r;
				break;
			case 22:
				e.memoizedState === null && (r = e.alternate, r !== null && r.memoizedState !== null ? (r = Tl, Tl = 16777216, El(e, t, n), Tl = r) : El(e, t, n));
				break;
			default: El(e, t, n);
		}
	}
	function Ol(e) {
		var t = e.alternate;
		if (t !== null && (e = t.child, e !== null)) {
			t.child = null;
			do
				t = e.sibling, e.sibling = null, e = t;
			while (e !== null);
		}
	}
	function kl(e) {
		var t = e.deletions;
		if (e.flags & 16) {
			if (t !== null) for (var n = 0; n < t.length; n++) {
				var r = t[n];
				$c = r, Ml(r, e);
			}
			Ol(e);
		}
		if (e.subtreeFlags & 10256) for (e = e.child; e !== null;) Al(e), e = e.sibling;
	}
	function Al(e) {
		switch (e.tag) {
			case 0:
			case 11:
			case 15:
				kl(e), e.flags & 2048 && Lc(9, e, e.return);
				break;
			case 3:
				kl(e);
				break;
			case 12:
				kl(e);
				break;
			case 22:
				var t = e.stateNode;
				e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, jl(e)) : kl(e);
				break;
			default: kl(e);
		}
	}
	function jl(e) {
		var t = e.deletions;
		if (e.flags & 16) {
			if (t !== null) for (var n = 0; n < t.length; n++) {
				var r = t[n];
				$c = r, Ml(r, e);
			}
			Ol(e);
		}
		for (e = e.child; e !== null;) {
			switch (t = e, t.tag) {
				case 0:
				case 11:
				case 15:
					Lc(8, t, t.return), jl(t);
					break;
				case 22:
					n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, jl(t));
					break;
				default: jl(t);
			}
			e = e.sibling;
		}
	}
	function Ml(e, t) {
		for (; $c !== null;) {
			var n = $c;
			switch (n.tag) {
				case 0:
				case 11:
				case 15:
					Lc(8, n, t);
					break;
				case 23:
				case 22:
					if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
						var r = n.memoizedState.cachePool.pool;
						r != null && r.refCount++;
					}
					break;
				case 24: ea(n.memoizedState.cache);
			}
			if (r = n.child, r !== null) r.return = n, $c = r;
			else a: for (n = e; $c !== null;) {
				r = $c;
				var i = r.sibling, a = r.return;
				if (nl(r), r === n) {
					$c = null;
					break a;
				}
				if (i !== null) {
					i.return = a, $c = i;
					break a;
				}
				$c = a;
			}
		}
	}
	var Nl = {
		getCacheForType: function(e) {
			var t = Ki(Qi), n = t.data.get(e);
			return n === void 0 && (n = e(), t.data.set(e, n)), n;
		},
		cacheSignal: function() {
			return Ki(Qi).controller.signal;
		}
	}, Pl = typeof WeakMap == "function" ? WeakMap : Map, X = 0, Fl = null, Z = null, Q = 0, Il = 0, Ll = null, Rl = !1, zl = !1, Bl = !1, Vl = 0, Hl = 0, Ul = 0, Wl = 0, Gl = 0, Kl = 0, ql = 0, Jl = null, Yl = null, Xl = !1, Zl = 0, Ql = 0, $l = Infinity, eu = null, tu = null, nu = 0, ru = null, iu = null, au = 0, ou = 0, su = null, cu = null, lu = 0, uu = null;
	function du() {
		return X & 2 && Q !== 0 ? Q & -Q : F.T === null ? et() : ud();
	}
	function fu() {
		if (Kl === 0) {
			if (!(Q & 536870912) || J) {
				var e = ze;
				ze <<= 1, !(ze & 3932160) && (ze = 262144), Kl = e;
			} else Kl = 536870912;
		}
		return e = Ja.current, e !== null && (e.flags |= 32), Kl;
	}
	function pu(e, t, n) {
		(e === Fl && (Il === 2 || Il === 9) || e.cancelPendingCommit !== null) && (bu(e, 0), _u(e, Q, Kl, !1)), qe(e, n), (!(X & 2) || e !== Fl) && (e === Fl && (!(X & 2) && (Wl |= n), Hl === 4 && _u(e, Q, Kl, !1)), nd(e));
	}
	function mu(e, t, n) {
		if (X & 6) throw Error(a(327));
		var r = !n && !(t & 127) && (t & e.expiredLanes) === 0 || Ue(e, t), i = r ? Ou(e, t) : Eu(e, t, !0), o = r;
		do {
			if (i === 0) {
				zl && !r && _u(e, t, 0, !1);
				break;
			}
			if (n = e.current.alternate, o && !gu(n)) {
				i = Eu(e, t, !1), o = !1;
				continue;
			}
			if (i === 2) {
				if (o = t, e.errorRecoveryDisabledLanes & o) var s = 0;
				else s = e.pendingLanes & -536870913, s = s === 0 ? s & 536870912 ? 536870912 : 0 : s;
				if (s !== 0) {
					t = s;
					a: {
						var c = e;
						i = Jl;
						var l = c.current.memoizedState.isDehydrated;
						if (l && (bu(c, s).flags |= 256), s = Eu(c, s, !1), s !== 2) {
							if (Bl && !l) {
								c.errorRecoveryDisabledLanes |= o, Wl |= o, i = 4;
								break a;
							}
							o = Yl, Yl = i, o !== null && (Yl === null ? Yl = o : Yl.push.apply(Yl, o));
						}
						i = s;
					}
					if (o = !1, i !== 2) continue;
				}
			}
			if (i === 1) {
				bu(e, 0), _u(e, t, 0, !0);
				break;
			}
			a: {
				switch (r = e, o = i, o) {
					case 0:
					case 1: throw Error(a(345));
					case 4: if ((t & 4194048) !== t) break;
					case 6:
						_u(r, t, Kl, !Rl);
						break a;
					case 2:
						Yl = null;
						break;
					case 3:
					case 5: break;
					default: throw Error(a(329));
				}
				if ((t & 62914560) === t && (i = Zl + 300 - Se(), 10 < i)) {
					if (_u(r, t, Kl, !Rl), He(r, 0, !0) !== 0) break a;
					au = t, r.timeoutHandle = Kd(hu.bind(null, r, n, Yl, eu, Xl, t, Kl, Wl, ql, Rl, o, "Throttled", -0, 0), i);
					break a;
				}
				hu(r, n, Yl, eu, Xl, t, Kl, Wl, ql, Rl, o, null, -0, 0);
			}
			break;
		} while (1);
		nd(e);
	}
	function hu(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
		if (e.timeoutHandle = -1, d = t.subtreeFlags, d & 8192 || (d & 16785408) == 16785408) {
			d = {
				stylesheets: null,
				count: 0,
				imgCount: 0,
				imgBytes: 0,
				suspenseyImages: [],
				waitingForImages: !0,
				waitingForViewTransition: !1,
				unsuspend: Jt
			}, Dl(t, a, d);
			var m = (a & 62914560) === a ? Zl - Se() : (a & 4194048) === a ? Ql - Se() : 0;
			if (m = qf(d, m), m !== null) {
				au = a, e.cancelPendingCommit = m(Fu.bind(null, e, t, a, n, r, i, o, s, c, u, d, null, f, p)), _u(e, a, o, !l);
				return;
			}
		}
		Fu(e, t, a, n, r, i, o, s, c);
	}
	function gu(e) {
		for (var t = e;;) {
			var n = t.tag;
			if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null))) for (var r = 0; r < n.length; r++) {
				var i = n[r], a = i.getSnapshot;
				i = i.value;
				try {
					if (!hr(a(), i)) return !1;
				} catch {
					return !1;
				}
			}
			if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
			else {
				if (t === e) break;
				for (; t.sibling === null;) {
					if (t.return === null || t.return === e) return !0;
					t = t.return;
				}
				t.sibling.return = t.return, t = t.sibling;
			}
		}
		return !0;
	}
	function _u(e, t, n, r) {
		t &= ~Gl, t &= ~Wl, e.suspendedLanes |= t, e.pingedLanes &= ~t, r && (e.warmLanes |= t), r = e.expirationTimes;
		for (var i = t; 0 < i;) {
			var a = 31 - Pe(i), o = 1 << a;
			r[a] = -1, i &= ~o;
		}
		n !== 0 && Ye(e, n, t);
	}
	function vu() {
		return X & 6 ? !0 : (rd(0, !1), !1);
	}
	function yu() {
		if (Z !== null) {
			if (Il === 0) var e = Z.return;
			else e = Z, Ri = Li = null, So(e), Ca = null, wa = 0, e = Z;
			for (; e !== null;) Fc(e.alternate, e), e = e.return;
			Z = null;
		}
	}
	function bu(e, t) {
		var n = e.timeoutHandle;
		n !== -1 && (e.timeoutHandle = -1, qd(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), au = 0, yu(), Fl = e, Z = n = ti(e.current, null), Q = t, Il = 0, Ll = null, Rl = !1, zl = Ue(e, t), Bl = !1, ql = Kl = Gl = Wl = Ul = Hl = 0, Yl = Jl = null, Xl = !1, t & 8 && (t |= t & 32);
		var r = e.entangledLanes;
		if (r !== 0) for (e = e.entanglements, r &= t; 0 < r;) {
			var i = 31 - Pe(r), a = 1 << i;
			t |= e[i], r &= ~a;
		}
		return Vl = t, Gr(), n;
	}
	function xu(e, t) {
		Y = null, F.H = Ms, t === pa || t === ha ? (t = xa(), Il = 3) : t === ma ? (t = xa(), Il = 4) : Il = t === Xs ? 8 : typeof t == "object" && t && typeof t.then == "function" ? 6 : 1, Ll = t, Z === null && (Hl = 1, Ws(e, li(t, e.current)));
	}
	function Su() {
		var e = Ja.current;
		return e === null ? !0 : (Q & 4194048) === Q ? Ya === null : (Q & 62914560) === Q || Q & 536870912 ? e === Ya : !1;
	}
	function Cu() {
		var e = F.H;
		return F.H = Ms, e === null ? Ms : e;
	}
	function wu() {
		var e = F.A;
		return F.A = Nl, e;
	}
	function Tu() {
		Hl = 4, Rl || (Q & 4194048) !== Q && Ja.current !== null || (zl = !0), !(Ul & 134217727) && !(Wl & 134217727) || Fl === null || _u(Fl, Q, Kl, !1);
	}
	function Eu(e, t, n) {
		var r = X;
		X |= 2;
		var i = Cu(), a = wu();
		(Fl !== e || Q !== t) && (eu = null, bu(e, t)), t = !1;
		var o = Hl;
		a: do
			try {
				if (Il !== 0 && Z !== null) {
					var s = Z, c = Ll;
					switch (Il) {
						case 8:
							yu(), o = 6;
							break a;
						case 3:
						case 2:
						case 9:
						case 6:
							Ja.current === null && (t = !0);
							var l = Il;
							if (Il = 0, Ll = null, Mu(e, s, c, l), n && zl) {
								o = 0;
								break a;
							}
							break;
						default: l = Il, Il = 0, Ll = null, Mu(e, s, c, l);
					}
				}
				Du(), o = Hl;
				break;
			} catch (t) {
				xu(e, t);
			}
		while (1);
		return t && e.shellSuspendCounter++, Ri = Li = null, X = r, F.H = i, F.A = a, Z === null && (Fl = null, Q = 0, Gr()), o;
	}
	function Du() {
		for (; Z !== null;) Au(Z);
	}
	function Ou(e, t) {
		var n = X;
		X |= 2;
		var r = Cu(), i = wu();
		Fl !== e || Q !== t ? (eu = null, $l = Se() + 500, bu(e, t)) : zl = Ue(e, t);
		a: do
			try {
				if (Il !== 0 && Z !== null) {
					t = Z;
					var o = Ll;
					b: switch (Il) {
						case 1:
							Il = 0, Ll = null, Mu(e, t, o, 1);
							break;
						case 2:
						case 9:
							if (_a(o)) {
								Il = 0, Ll = null, ju(t);
								break;
							}
							t = function() {
								Il !== 2 && Il !== 9 || Fl !== e || (Il = 7), nd(e);
							}, o.then(t, t);
							break a;
						case 3:
							Il = 7;
							break a;
						case 4:
							Il = 5;
							break a;
						case 7:
							_a(o) ? (Il = 0, Ll = null, ju(t)) : (Il = 0, Ll = null, Mu(e, t, o, 7));
							break;
						case 5:
							var s = null;
							switch (Z.tag) {
								case 26: s = Z.memoizedState;
								case 5:
								case 27:
									var c = Z;
									if (s ? Wf(s) : c.stateNode.complete) {
										Il = 0, Ll = null;
										var l = c.sibling;
										if (l !== null) Z = l;
										else {
											var u = c.return;
											u === null ? Z = null : (Z = u, Nu(u));
										}
										break b;
									}
							}
							Il = 0, Ll = null, Mu(e, t, o, 5);
							break;
						case 6:
							Il = 0, Ll = null, Mu(e, t, o, 6);
							break;
						case 8:
							yu(), Hl = 6;
							break a;
						default: throw Error(a(462));
					}
				}
				ku();
				break;
			} catch (t) {
				xu(e, t);
			}
		while (1);
		return Ri = Li = null, F.H = r, F.A = i, X = n, Z === null ? (Fl = null, Q = 0, Gr(), Hl) : 0;
	}
	function ku() {
		for (; Z !== null && !be();) Au(Z);
	}
	function Au(e) {
		var t = Ec(e.alternate, e, Vl);
		e.memoizedProps = e.pendingProps, t === null ? Nu(e) : Z = t;
	}
	function ju(e) {
		var t = e, n = t.alternate;
		switch (t.tag) {
			case 15:
			case 0:
				t = uc(n, t, t.pendingProps, t.type, void 0, Q);
				break;
			case 11:
				t = uc(n, t, t.pendingProps, t.type.render, t.ref, Q);
				break;
			case 5: So(t);
			default: Fc(n, t), t = Z = ni(t, Vl), t = Ec(n, t, Vl);
		}
		e.memoizedProps = e.pendingProps, t === null ? Nu(e) : Z = t;
	}
	function Mu(e, t, n, r) {
		Ri = Li = null, So(t), Ca = null, wa = 0;
		var i = t.return;
		try {
			if (Ys(e, i, t, n, Q)) {
				Hl = 1, Ws(e, li(n, e.current)), Z = null;
				return;
			}
		} catch (t) {
			if (i !== null) throw Z = i, t;
			Hl = 1, Ws(e, li(n, e.current)), Z = null;
			return;
		}
		t.flags & 32768 ? (J || r === 1 ? e = !0 : zl || Q & 536870912 ? e = !1 : (Rl = e = !0, (r === 2 || r === 9 || r === 3 || r === 6) && (r = Ja.current, r !== null && r.tag === 13 && (r.flags |= 16384))), Pu(t, e)) : Nu(t);
	}
	function Nu(e) {
		var t = e;
		do {
			if (t.flags & 32768) {
				Pu(t, Rl);
				return;
			}
			e = t.return;
			var n = Nc(t.alternate, t, Vl);
			if (n !== null) {
				Z = n;
				return;
			}
			if (t = t.sibling, t !== null) {
				Z = t;
				return;
			}
			Z = t = e;
		} while (t !== null);
		Hl === 0 && (Hl = 5);
	}
	function Pu(e, t) {
		do {
			var n = Pc(e.alternate, e);
			if (n !== null) {
				n.flags &= 32767, Z = n;
				return;
			}
			if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
				Z = e;
				return;
			}
			Z = e = n;
		} while (e !== null);
		Hl = 6, Z = null;
	}
	function Fu(e, t, n, r, i, o, s, c, l) {
		e.cancelPendingCommit = null;
		do
			Bu();
		while (nu !== 0);
		if (X & 6) throw Error(a(327));
		if (t !== null) {
			if (t === e.current) throw Error(a(177));
			if (o = t.lanes | t.childLanes, o |= Wr, Je(e, n, o, s, c, l), e === Fl && (Z = Fl = null, Q = 0), iu = t, ru = e, au = n, ou = o, su = i, cu = r, t.subtreeFlags & 10256 || t.flags & 10256 ? (e.callbackNode = null, e.callbackPriority = 0, Yu(Ee, function() {
				return Vu(), null;
			})) : (e.callbackNode = null, e.callbackPriority = 0), r = !!(t.flags & 13878), t.subtreeFlags & 13878 || r) {
				r = F.T, F.T = null, i = I.p, I.p = 2, s = X, X |= 4;
				try {
					el(e, t, n);
				} finally {
					X = s, I.p = i, F.T = r;
				}
			}
			nu = 1, Iu(), Lu(), Ru();
		}
	}
	function Iu() {
		if (nu === 1) {
			nu = 0;
			var e = ru, t = iu, n = !!(t.flags & 13878);
			if (t.subtreeFlags & 13878 || n) {
				n = F.T, F.T = null;
				var r = I.p;
				I.p = 2;
				var i = X;
				X |= 4;
				try {
					pl(t, e);
					var a = zd, o = br(e.containerInfo), s = a.focusedElem, c = a.selectionRange;
					if (o !== s && s && s.ownerDocument && yr(s.ownerDocument.documentElement, s)) {
						if (c !== null && xr(s)) {
							var l = c.start, u = c.end;
							if (u === void 0 && (u = l), "selectionStart" in s) s.selectionStart = l, s.selectionEnd = Math.min(u, s.value.length);
							else {
								var d = s.ownerDocument || document, f = d && d.defaultView || window;
								if (f.getSelection) {
									var p = f.getSelection(), m = s.textContent.length, h = Math.min(c.start, m), g = c.end === void 0 ? h : Math.min(c.end, m);
									!p.extend && h > g && (o = g, g = h, h = o);
									var _ = vr(s, h), v = vr(s, g);
									if (_ && v && (p.rangeCount !== 1 || p.anchorNode !== _.node || p.anchorOffset !== _.offset || p.focusNode !== v.node || p.focusOffset !== v.offset)) {
										var y = d.createRange();
										y.setStart(_.node, _.offset), p.removeAllRanges(), h > g ? (p.addRange(y), p.extend(v.node, v.offset)) : (y.setEnd(v.node, v.offset), p.addRange(y));
									}
								}
							}
						}
						for (d = [], p = s; p = p.parentNode;) p.nodeType === 1 && d.push({
							element: p,
							left: p.scrollLeft,
							top: p.scrollTop
						});
						for (typeof s.focus == "function" && s.focus(), s = 0; s < d.length; s++) {
							var b = d[s];
							b.element.scrollLeft = b.left, b.element.scrollTop = b.top;
						}
					}
					sp = !!Rd, zd = Rd = null;
				} finally {
					X = i, I.p = r, F.T = n;
				}
			}
			e.current = t, nu = 2;
		}
	}
	function Lu() {
		if (nu === 2) {
			nu = 0;
			var e = ru, t = iu, n = !!(t.flags & 8772);
			if (t.subtreeFlags & 8772 || n) {
				n = F.T, F.T = null;
				var r = I.p;
				I.p = 2;
				var i = X;
				X |= 4;
				try {
					tl(e, t.alternate, t);
				} finally {
					X = i, I.p = r, F.T = n;
				}
			}
			nu = 3;
		}
	}
	function Ru() {
		if (nu === 4 || nu === 3) {
			nu = 0, xe();
			var e = ru, t = iu, n = au, r = cu;
			t.subtreeFlags & 10256 || t.flags & 10256 ? nu = 5 : (nu = 0, iu = ru = null, zu(e, e.pendingLanes));
			var i = e.pendingLanes;
			if (i === 0 && (tu = null), $e(n), t = t.stateNode, Me && typeof Me.onCommitFiberRoot == "function") try {
				Me.onCommitFiberRoot(je, t, void 0, (t.current.flags & 128) == 128);
			} catch {}
			if (r !== null) {
				t = F.T, i = I.p, I.p = 2, F.T = null;
				try {
					for (var a = e.onRecoverableError, o = 0; o < r.length; o++) {
						var s = r[o];
						a(s.value, { componentStack: s.stack });
					}
				} finally {
					F.T = t, I.p = i;
				}
			}
			au & 3 && Bu(), nd(e), i = e.pendingLanes, n & 261930 && i & 42 ? e === uu ? lu++ : (lu = 0, uu = e) : lu = 0, rd(0, !1);
		}
	}
	function zu(e, t) {
		(e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, ea(t)));
	}
	function Bu() {
		return Iu(), Lu(), Ru(), Vu();
	}
	function Vu() {
		if (nu !== 5) return !1;
		var e = ru, t = ou;
		ou = 0;
		var n = $e(au), r = F.T, i = I.p;
		try {
			I.p = 32 > n ? 32 : n, F.T = null, n = su, su = null;
			var o = ru, s = au;
			if (nu = 0, iu = ru = null, au = 0, X & 6) throw Error(a(331));
			var c = X;
			if (X |= 4, Al(o.current), Sl(o, o.current, s, n), X = c, rd(0, !1), Me && typeof Me.onPostCommitFiberRoot == "function") try {
				Me.onPostCommitFiberRoot(je, o);
			} catch {}
			return !0;
		} finally {
			I.p = i, F.T = r, zu(e, t);
		}
	}
	function Hu(e, t, n) {
		t = li(n, t), t = Ks(e.stateNode, t, 2), e = Fa(e, t, 2), e !== null && (qe(e, 2), nd(e));
	}
	function Uu(e, t, n) {
		if (e.tag === 3) Hu(e, e, n);
		else for (; t !== null;) {
			if (t.tag === 3) {
				Hu(t, e, n);
				break;
			}
			if (t.tag === 1) {
				var r = t.stateNode;
				if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (tu === null || !tu.has(r))) {
					e = li(n, e), n = qs(2), r = Fa(t, n, 2), r !== null && (Js(n, r, t, e), qe(r, 2), nd(r));
					break;
				}
			}
			t = t.return;
		}
	}
	function Wu(e, t, n) {
		var r = e.pingCache;
		if (r === null) {
			r = e.pingCache = new Pl();
			var i = /* @__PURE__ */ new Set();
			r.set(t, i);
		} else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
		i.has(n) || (Bl = !0, i.add(n), e = Gu.bind(null, e, t, n), t.then(e, e));
	}
	function Gu(e, t, n) {
		var r = e.pingCache;
		r !== null && r.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Fl === e && (Q & n) === n && (Hl === 4 || Hl === 3 && (Q & 62914560) === Q && 300 > Se() - Zl ? !(X & 2) && bu(e, 0) : Gl |= n, ql === Q && (ql = 0)), nd(e);
	}
	function Ku(e, t) {
		t === 0 && (t = Ge()), e = Jr(e, t), e !== null && (qe(e, t), nd(e));
	}
	function qu(e) {
		var t = e.memoizedState, n = 0;
		t !== null && (n = t.retryLane), Ku(e, n);
	}
	function Ju(e, t) {
		var n = 0;
		switch (e.tag) {
			case 31:
			case 13:
				var r = e.stateNode, i = e.memoizedState;
				i !== null && (n = i.retryLane);
				break;
			case 19:
				r = e.stateNode;
				break;
			case 22:
				r = e.stateNode._retryCache;
				break;
			default: throw Error(a(314));
		}
		r !== null && r.delete(t), Ku(e, n);
	}
	function Yu(e, t) {
		return ve(e, t);
	}
	var Xu = null, Zu = null, Qu = !1, $u = !1, ed = !1, td = 0;
	function nd(e) {
		e !== Zu && e.next === null && (Zu === null ? Xu = Zu = e : Zu = Zu.next = e), $u = !0, Qu || (Qu = !0, ld());
	}
	function rd(e, t) {
		if (!ed && $u) {
			ed = !0;
			do
				for (var n = !1, r = Xu; r !== null;) {
					if (!t) {
						if (e !== 0) {
							var i = r.pendingLanes;
							if (i === 0) var a = 0;
							else {
								var o = r.suspendedLanes, s = r.pingedLanes;
								a = (1 << 31 - Pe(42 | e) + 1) - 1, a &= i & ~(o & ~s), a = a & 201326741 ? a & 201326741 | 1 : a ? a | 2 : 0;
							}
							a !== 0 && (n = !0, cd(r, a));
						} else a = Q, a = He(r, r === Fl ? a : 0, r.cancelPendingCommit !== null || r.timeoutHandle !== -1), !(a & 3) || Ue(r, a) || (n = !0, cd(r, a));
					}
					r = r.next;
				}
			while (n);
			ed = !1;
		}
	}
	function id() {
		ad();
	}
	function ad() {
		$u = Qu = !1;
		var e = 0;
		td !== 0 && Gd() && (e = td);
		for (var t = Se(), n = null, r = Xu; r !== null;) {
			var i = r.next, a = od(r, t);
			a === 0 ? (r.next = null, n === null ? Xu = i : n.next = i, i === null && (Zu = n)) : (n = r, (e !== 0 || a & 3) && ($u = !0)), r = i;
		}
		nu !== 0 && nu !== 5 || rd(e, !1), td !== 0 && (td = 0);
	}
	function od(e, t) {
		for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes & -62914561; 0 < a;) {
			var o = 31 - Pe(a), s = 1 << o, c = i[o];
			c === -1 ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = We(s, t)) : c <= t && (e.expiredLanes |= s), a &= ~s;
		}
		if (t = Fl, n = Q, n = He(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), r = e.callbackNode, n === 0 || e === t && (Il === 2 || Il === 9) || e.cancelPendingCommit !== null) return r !== null && r !== null && ye(r), e.callbackNode = null, e.callbackPriority = 0;
		if (!(n & 3) || Ue(e, n)) {
			if (t = n & -n, t === e.callbackPriority) return t;
			switch (r !== null && ye(r), $e(n)) {
				case 2:
				case 8:
					n = Te;
					break;
				case 32:
					n = Ee;
					break;
				case 268435456:
					n = Oe;
					break;
				default: n = Ee;
			}
			return r = sd.bind(null, e), n = ve(n, r), e.callbackPriority = t, e.callbackNode = n, t;
		}
		return r !== null && r !== null && ye(r), e.callbackPriority = 2, e.callbackNode = null, 2;
	}
	function sd(e, t) {
		if (nu !== 0 && nu !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
		var n = e.callbackNode;
		if (Bu() && e.callbackNode !== n) return null;
		var r = Q;
		return r = He(e, e === Fl ? r : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), r === 0 ? null : (mu(e, r, t), od(e, Se()), e.callbackNode != null && e.callbackNode === n ? sd.bind(null, e) : null);
	}
	function cd(e, t) {
		if (Bu()) return null;
		mu(e, t, !0);
	}
	function ld() {
		Yd(function() {
			X & 6 ? ve(we, id) : ad();
		});
	}
	function ud() {
		if (td === 0) {
			var e = ra;
			e === 0 && (e = Re, Re <<= 1, !(Re & 261888) && (Re = 256)), td = e;
		}
		return td;
	}
	function dd(e) {
		return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : qt("" + e);
	}
	function fd(e, t) {
		var n = t.ownerDocument.createElement("input");
		return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
	}
	function pd(e, t, n, r, i) {
		if (t === "submit" && n && n.stateNode === i) {
			var a = dd((i[it] || null).action), o = r.submitter;
			o && (t = (t = o[it] || null) ? dd(t.formAction) : o.getAttribute("formAction"), t !== null && (a = t, o = null));
			var s = new mn("action", "action", null, r, i);
			e.push({
				event: s,
				listeners: [{
					instance: null,
					listener: function() {
						if (r.defaultPrevented) {
							if (td !== 0) {
								var e = o ? fd(i, o) : new FormData(i);
								vs(n, {
									pending: !0,
									data: e,
									method: i.method,
									action: a
								}, null, e);
							}
						} else typeof a == "function" && (s.preventDefault(), e = o ? fd(i, o) : new FormData(i), vs(n, {
							pending: !0,
							data: e,
							method: i.method,
							action: a
						}, a, e));
					},
					currentTarget: i
				}]
			});
		}
	}
	for (var md = 0; md < zr.length; md++) {
		var hd = zr[md];
		Br(hd.toLowerCase(), "on" + (hd[0].toUpperCase() + hd.slice(1)));
	}
	Br(Mr, "onAnimationEnd"), Br(Nr, "onAnimationIteration"), Br(Pr, "onAnimationStart"), Br("dblclick", "onDoubleClick"), Br("focusin", "onFocus"), Br("focusout", "onBlur"), Br(Fr, "onTransitionRun"), Br(Ir, "onTransitionStart"), Br(Lr, "onTransitionCancel"), Br(Rr, "onTransitionEnd"), vt("onMouseEnter", ["mouseout", "mouseover"]), vt("onMouseLeave", ["mouseout", "mouseover"]), vt("onPointerEnter", ["pointerout", "pointerover"]), vt("onPointerLeave", ["pointerout", "pointerover"]), _t("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), _t("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), _t("onBeforeInput", [
		"compositionend",
		"keypress",
		"textInput",
		"paste"
	]), _t("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), _t("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), _t("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
	var gd = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), _d = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(gd));
	function vd(e, t) {
		t = !!(t & 4);
		for (var n = 0; n < e.length; n++) {
			var r = e[n], i = r.event;
			r = r.listeners;
			a: {
				var a = void 0;
				if (t) for (var o = r.length - 1; 0 <= o; o--) {
					var s = r[o], c = s.instance, l = s.currentTarget;
					if (s = s.listener, c !== a && i.isPropagationStopped()) break a;
					a = s, i.currentTarget = l;
					try {
						a(i);
					} catch (e) {
						Vr(e);
					}
					i.currentTarget = null, a = c;
				}
				else for (o = 0; o < r.length; o++) {
					if (s = r[o], c = s.instance, l = s.currentTarget, s = s.listener, c !== a && i.isPropagationStopped()) break a;
					a = s, i.currentTarget = l;
					try {
						a(i);
					} catch (e) {
						Vr(e);
					}
					i.currentTarget = null, a = c;
				}
			}
		}
	}
	function $(e, t) {
		var n = t[ot];
		n === void 0 && (n = t[ot] = /* @__PURE__ */ new Set());
		var r = e + "__bubble";
		n.has(r) || (Sd(t, e, 2, !1), n.add(r));
	}
	function yd(e, t, n) {
		var r = 0;
		t && (r |= 4), Sd(n, e, r, t);
	}
	var bd = "_reactListening" + Math.random().toString(36).slice(2);
	function xd(e) {
		if (!e[bd]) {
			e[bd] = !0, ht.forEach(function(t) {
				t !== "selectionchange" && (_d.has(t) || yd(t, !1, e), yd(t, !0, e));
			});
			var t = e.nodeType === 9 ? e : e.ownerDocument;
			t === null || t[bd] || (t[bd] = !0, yd("selectionchange", !1, t));
		}
	}
	function Sd(e, t, n, r) {
		switch (mp(t)) {
			case 2:
				var i = cp;
				break;
			case 8:
				i = lp;
				break;
			default: i = up;
		}
		n = i.bind(null, t, n, e), i = void 0, !an || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i === void 0 ? e.addEventListener(t, n, !0) : e.addEventListener(t, n, {
			capture: !0,
			passive: i
		}) : i === void 0 ? e.addEventListener(t, n, !1) : e.addEventListener(t, n, { passive: i });
	}
	function Cd(e, t, n, r, i) {
		var a = r;
		if (!(t & 1) && !(t & 2) && r !== null) a: for (;;) {
			if (r === null) return;
			var o = r.tag;
			if (o === 3 || o === 4) {
				var s = r.stateNode.containerInfo;
				if (s === i) break;
				if (o === 4) for (o = r.return; o !== null;) {
					var l = o.tag;
					if ((l === 3 || l === 4) && o.stateNode.containerInfo === i) return;
					o = o.return;
				}
				for (; s !== null;) {
					if (o = ft(s), o === null) return;
					if (l = o.tag, l === 5 || l === 6 || l === 26 || l === 27) {
						r = a = o;
						continue a;
					}
					s = s.parentNode;
				}
			}
			r = r.return;
		}
		tn(function() {
			var r = a, i = Xt(n), o = [];
			a: {
				var s = q.get(e);
				if (s !== void 0) {
					var l = mn, u = e;
					switch (e) {
						case "keypress": if (dn(n) === 0) break a;
						case "keydown":
						case "keyup":
							l = Mn;
							break;
						case "focusin":
							u = "focus", l = Cn;
							break;
						case "focusout":
							u = "blur", l = Cn;
							break;
						case "beforeblur":
						case "afterblur":
							l = Cn;
							break;
						case "click": if (n.button === 2) break a;
						case "auxclick":
						case "dblclick":
						case "mousedown":
						case "mousemove":
						case "mouseup":
						case "mouseout":
						case "mouseover":
						case "contextmenu":
							l = xn;
							break;
						case "drag":
						case "dragend":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "dragstart":
						case "drop":
							l = Sn;
							break;
						case "touchcancel":
						case "touchend":
						case "touchmove":
						case "touchstart":
							l = Pn;
							break;
						case Mr:
						case Nr:
						case Pr:
							l = wn;
							break;
						case Rr:
							l = Fn;
							break;
						case "scroll":
						case "scrollend":
							l = gn;
							break;
						case "wheel":
							l = In;
							break;
						case "copy":
						case "cut":
						case "paste":
							l = Tn;
							break;
						case "gotpointercapture":
						case "lostpointercapture":
						case "pointercancel":
						case "pointerdown":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "pointerup":
							l = Nn;
							break;
						case "toggle":
						case "beforetoggle": l = Ln;
					}
					var d = !!(t & 4), f = !d && (e === "scroll" || e === "scrollend"), p = d ? s === null ? null : s + "Capture" : s;
					d = [];
					for (var m = r, h; m !== null;) {
						var g = m;
						if (h = g.stateNode, g = g.tag, g !== 5 && g !== 26 && g !== 27 || h === null || p === null || (g = nn(m, p), g != null && d.push(wd(m, g, h))), f) break;
						m = m.return;
					}
					0 < d.length && (s = new l(s, u, null, n, i), o.push({
						event: s,
						listeners: d
					}));
				}
			}
			if (!(t & 7)) {
				a: {
					if (s = e === "mouseover" || e === "pointerover", l = e === "mouseout" || e === "pointerout", s && n !== Yt && (u = n.relatedTarget || n.fromElement) && (ft(u) || u[at])) break a;
					if ((l || s) && (s = i.window === i ? i : (s = i.ownerDocument) ? s.defaultView || s.parentWindow : window, l ? (u = n.relatedTarget || n.toElement, l = r, u = u ? ft(u) : null, u !== null && (f = c(u), d = u.tag, u !== f || d !== 5 && d !== 27 && d !== 6) && (u = null)) : (l = null, u = r), l !== u)) {
						if (d = xn, g = "onMouseLeave", p = "onMouseEnter", m = "mouse", (e === "pointerout" || e === "pointerover") && (d = Nn, g = "onPointerLeave", p = "onPointerEnter", m = "pointer"), f = l == null ? s : pt(l), h = u == null ? s : pt(u), s = new d(g, m + "leave", l, n, i), s.target = f, s.relatedTarget = h, g = null, ft(i) === r && (d = new d(p, m + "enter", u, n, i), d.target = h, d.relatedTarget = f, g = d), f = g, l && u) b: {
							for (d = Ed, p = l, m = u, h = 0, g = p; g; g = d(g)) h++;
							g = 0;
							for (var _ = m; _; _ = d(_)) g++;
							for (; 0 < h - g;) p = d(p), h--;
							for (; 0 < g - h;) m = d(m), g--;
							for (; h--;) {
								if (p === m || m !== null && p === m.alternate) {
									d = p;
									break b;
								}
								p = d(p), m = d(m);
							}
							d = null;
						}
						else d = null;
						l !== null && Dd(o, s, l, d, !1), u !== null && f !== null && Dd(o, f, u, d, !0);
					}
				}
				a: {
					if (s = r ? pt(r) : window, l = s.nodeName && s.nodeName.toLowerCase(), l === "select" || l === "input" && s.type === "file") var v = rr;
					else if (Zn(s)) {
						if (ir) v = pr;
						else {
							v = dr;
							var y = ur;
						}
					} else l = s.nodeName, !l || l.toLowerCase() !== "input" || s.type !== "checkbox" && s.type !== "radio" ? r && Wt(r.elementType) && (v = rr) : v = fr;
					if (v &&= v(e, r)) {
						Qn(o, v, n, i);
						break a;
					}
					y && y(e, s, r), e === "focusout" && r && s.type === "number" && r.memoizedProps.value != null && It(s, "number", s.value);
				}
				switch (y = r ? pt(r) : window, e) {
					case "focusin":
						(Zn(y) || y.contentEditable === "true") && (Cr = y, wr = r, Tr = null);
						break;
					case "focusout":
						Tr = wr = Cr = null;
						break;
					case "mousedown":
						Er = !0;
						break;
					case "contextmenu":
					case "mouseup":
					case "dragend":
						Er = !1, Dr(o, n, i);
						break;
					case "selectionchange": if (Sr) break;
					case "keydown":
					case "keyup": Dr(o, n, i);
				}
				var b;
				if (zn) b: {
					switch (e) {
						case "compositionstart":
							var x = "onCompositionStart";
							break b;
						case "compositionend":
							x = "onCompositionEnd";
							break b;
						case "compositionupdate":
							x = "onCompositionUpdate";
							break b;
					}
					x = void 0;
				}
				else qn ? Gn(e, n) && (x = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (x = "onCompositionStart");
				x && (Hn && n.locale !== "ko" && (qn || x !== "onCompositionStart" ? x === "onCompositionEnd" && qn && (b = un()) : (sn = i, cn = "value" in sn ? sn.value : sn.textContent, qn = !0)), y = Td(r, x), 0 < y.length && (x = new En(x, e, null, n, i), o.push({
					event: x,
					listeners: y
				}), b ? x.data = b : (b = Kn(n), b !== null && (x.data = b)))), (b = Vn ? Jn(e, n) : Yn(e, n)) && (x = Td(r, "onBeforeInput"), 0 < x.length && (y = new En("onBeforeInput", "beforeinput", null, n, i), o.push({
					event: y,
					listeners: x
				}), y.data = b)), pd(o, e, r, n, i);
			}
			vd(o, t);
		});
	}
	function wd(e, t, n) {
		return {
			instance: e,
			listener: t,
			currentTarget: n
		};
	}
	function Td(e, t) {
		for (var n = t + "Capture", r = []; e !== null;) {
			var i = e, a = i.stateNode;
			if (i = i.tag, i !== 5 && i !== 26 && i !== 27 || a === null || (i = nn(e, n), i != null && r.unshift(wd(e, i, a)), i = nn(e, t), i != null && r.push(wd(e, i, a))), e.tag === 3) return r;
			e = e.return;
		}
		return [];
	}
	function Ed(e) {
		if (e === null) return null;
		do
			e = e.return;
		while (e && e.tag !== 5 && e.tag !== 27);
		return e || null;
	}
	function Dd(e, t, n, r, i) {
		for (var a = t._reactName, o = []; n !== null && n !== r;) {
			var s = n, c = s.alternate, l = s.stateNode;
			if (s = s.tag, c !== null && c === r) break;
			s !== 5 && s !== 26 && s !== 27 || l === null || (c = l, i ? (l = nn(n, a), l != null && o.unshift(wd(n, l, c))) : i || (l = nn(n, a), l != null && o.push(wd(n, l, c)))), n = n.return;
		}
		o.length !== 0 && e.push({
			event: t,
			listeners: o
		});
	}
	var Od = /\r\n?/g, kd = /\u0000|\uFFFD/g;
	function Ad(e) {
		return (typeof e == "string" ? e : "" + e).replace(Od, "\n").replace(kd, "");
	}
	function jd(e, t) {
		return t = Ad(t), Ad(e) === t;
	}
	function Md(e, t, n, r, i, o) {
		switch (n) {
			case "children":
				typeof r == "string" ? t === "body" || t === "textarea" && r === "" || Bt(e, r) : (typeof r == "number" || typeof r == "bigint") && t !== "body" && Bt(e, "" + r);
				break;
			case "className":
				wt(e, "class", r);
				break;
			case "tabIndex":
				wt(e, "tabindex", r);
				break;
			case "dir":
			case "role":
			case "viewBox":
			case "width":
			case "height":
				wt(e, n, r);
				break;
			case "style":
				Ut(e, r, o);
				break;
			case "data": if (t !== "object") {
				wt(e, "data", r);
				break;
			}
			case "src":
			case "href":
				if (r === "" && (t !== "a" || n !== "href")) {
					e.removeAttribute(n);
					break;
				}
				if (r == null || typeof r == "function" || typeof r == "symbol" || typeof r == "boolean") {
					e.removeAttribute(n);
					break;
				}
				r = qt("" + r), e.setAttribute(n, r);
				break;
			case "action":
			case "formAction":
				if (typeof r == "function") {
					e.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
					break;
				}
				if (typeof o == "function" && (n === "formAction" ? (t !== "input" && Md(e, t, "name", i.name, i, null), Md(e, t, "formEncType", i.formEncType, i, null), Md(e, t, "formMethod", i.formMethod, i, null), Md(e, t, "formTarget", i.formTarget, i, null)) : (Md(e, t, "encType", i.encType, i, null), Md(e, t, "method", i.method, i, null), Md(e, t, "target", i.target, i, null))), r == null || typeof r == "symbol" || typeof r == "boolean") {
					e.removeAttribute(n);
					break;
				}
				r = qt("" + r), e.setAttribute(n, r);
				break;
			case "onClick":
				r != null && (e.onclick = Jt);
				break;
			case "onScroll":
				r != null && $("scroll", e);
				break;
			case "onScrollEnd":
				r != null && $("scrollend", e);
				break;
			case "dangerouslySetInnerHTML":
				if (r != null) {
					if (typeof r != "object" || !("__html" in r)) throw Error(a(61));
					if (n = r.__html, n != null) {
						if (i.children != null) throw Error(a(60));
						e.innerHTML = n;
					}
				}
				break;
			case "multiple":
				e.multiple = r && typeof r != "function" && typeof r != "symbol";
				break;
			case "muted":
				e.muted = r && typeof r != "function" && typeof r != "symbol";
				break;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "defaultValue":
			case "defaultChecked":
			case "innerHTML":
			case "ref": break;
			case "autoFocus": break;
			case "xlinkHref":
				if (r == null || typeof r == "function" || typeof r == "boolean" || typeof r == "symbol") {
					e.removeAttribute("xlink:href");
					break;
				}
				n = qt("" + r), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
				break;
			case "contentEditable":
			case "spellCheck":
			case "draggable":
			case "value":
			case "autoReverse":
			case "externalResourcesRequired":
			case "focusable":
			case "preserveAlpha":
				r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, "" + r) : e.removeAttribute(n);
				break;
			case "inert":
			case "allowFullScreen":
			case "async":
			case "autoPlay":
			case "controls":
			case "default":
			case "defer":
			case "disabled":
			case "disablePictureInPicture":
			case "disableRemotePlayback":
			case "formNoValidate":
			case "hidden":
			case "loop":
			case "noModule":
			case "noValidate":
			case "open":
			case "playsInline":
			case "readOnly":
			case "required":
			case "reversed":
			case "scoped":
			case "seamless":
			case "itemScope":
				r && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, "") : e.removeAttribute(n);
				break;
			case "capture":
			case "download":
				!0 === r ? e.setAttribute(n, "") : !1 !== r && r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, r) : e.removeAttribute(n);
				break;
			case "cols":
			case "rows":
			case "size":
			case "span":
				r != null && typeof r != "function" && typeof r != "symbol" && !isNaN(r) && 1 <= r ? e.setAttribute(n, r) : e.removeAttribute(n);
				break;
			case "rowSpan":
			case "start":
				r == null || typeof r == "function" || typeof r == "symbol" || isNaN(r) ? e.removeAttribute(n) : e.setAttribute(n, r);
				break;
			case "popover":
				$("beforetoggle", e), $("toggle", e), Ct(e, "popover", r);
				break;
			case "xlinkActuate":
				Tt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
				break;
			case "xlinkArcrole":
				Tt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
				break;
			case "xlinkRole":
				Tt(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
				break;
			case "xlinkShow":
				Tt(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
				break;
			case "xlinkTitle":
				Tt(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
				break;
			case "xlinkType":
				Tt(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
				break;
			case "xmlBase":
				Tt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
				break;
			case "xmlLang":
				Tt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
				break;
			case "xmlSpace":
				Tt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
				break;
			case "is":
				Ct(e, "is", r);
				break;
			case "innerText":
			case "textContent": break;
			default: (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = Gt.get(n) || n, Ct(e, n, r));
		}
	}
	function Nd(e, t, n, r, i, o) {
		switch (n) {
			case "style":
				Ut(e, r, o);
				break;
			case "dangerouslySetInnerHTML":
				if (r != null) {
					if (typeof r != "object" || !("__html" in r)) throw Error(a(61));
					if (n = r.__html, n != null) {
						if (i.children != null) throw Error(a(60));
						e.innerHTML = n;
					}
				}
				break;
			case "children":
				typeof r == "string" ? Bt(e, r) : (typeof r == "number" || typeof r == "bigint") && Bt(e, "" + r);
				break;
			case "onScroll":
				r != null && $("scroll", e);
				break;
			case "onScrollEnd":
				r != null && $("scrollend", e);
				break;
			case "onClick":
				r != null && (e.onclick = Jt);
				break;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "innerHTML":
			case "ref": break;
			case "innerText":
			case "textContent": break;
			default: if (!gt.hasOwnProperty(n)) a: {
				if (n[0] === "o" && n[1] === "n" && (i = n.endsWith("Capture"), t = n.slice(2, i ? n.length - 7 : void 0), o = e[it] || null, o = o == null ? null : o[n], typeof o == "function" && e.removeEventListener(t, o, i), typeof r == "function")) {
					typeof o != "function" && o !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, r, i);
					break a;
				}
				n in e ? e[n] = r : !0 === r ? e.setAttribute(n, "") : Ct(e, n, r);
			}
		}
	}
	function Pd(e, t, n) {
		switch (t) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li": break;
			case "img":
				$("error", e), $("load", e);
				var r = !1, i = !1, o;
				for (o in n) if (n.hasOwnProperty(o)) {
					var s = n[o];
					if (s != null) switch (o) {
						case "src":
							r = !0;
							break;
						case "srcSet":
							i = !0;
							break;
						case "children":
						case "dangerouslySetInnerHTML": throw Error(a(137, t));
						default: Md(e, t, o, s, n, null);
					}
				}
				i && Md(e, t, "srcSet", n.srcSet, n, null), r && Md(e, t, "src", n.src, n, null);
				return;
			case "input":
				$("invalid", e);
				var c = o = s = i = null, l = null, u = null;
				for (r in n) if (n.hasOwnProperty(r)) {
					var d = n[r];
					if (d != null) switch (r) {
						case "name":
							i = d;
							break;
						case "type":
							s = d;
							break;
						case "checked":
							l = d;
							break;
						case "defaultChecked":
							u = d;
							break;
						case "value":
							o = d;
							break;
						case "defaultValue":
							c = d;
							break;
						case "children":
						case "dangerouslySetInnerHTML":
							if (d != null) throw Error(a(137, t));
							break;
						default: Md(e, t, r, d, n, null);
					}
				}
				Ft(e, o, c, l, u, s, i, !1);
				return;
			case "select":
				for (i in $("invalid", e), r = s = o = null, n) if (n.hasOwnProperty(i) && (c = n[i], c != null)) switch (i) {
					case "value":
						o = c;
						break;
					case "defaultValue":
						s = c;
						break;
					case "multiple": r = c;
					default: Md(e, t, i, c, n, null);
				}
				t = o, n = s, e.multiple = !!r, t == null ? n != null && Lt(e, !!r, n, !0) : Lt(e, !!r, t, !1);
				return;
			case "textarea":
				for (s in $("invalid", e), o = i = r = null, n) if (n.hasOwnProperty(s) && (c = n[s], c != null)) switch (s) {
					case "value":
						r = c;
						break;
					case "defaultValue":
						i = c;
						break;
					case "children":
						o = c;
						break;
					case "dangerouslySetInnerHTML":
						if (c != null) throw Error(a(91));
						break;
					default: Md(e, t, s, c, n, null);
				}
				zt(e, r, i, o);
				return;
			case "option":
				for (l in n) if (n.hasOwnProperty(l) && (r = n[l], r != null)) switch (l) {
					case "selected":
						e.selected = r && typeof r != "function" && typeof r != "symbol";
						break;
					default: Md(e, t, l, r, n, null);
				}
				return;
			case "dialog":
				$("beforetoggle", e), $("toggle", e), $("cancel", e), $("close", e);
				break;
			case "iframe":
			case "object":
				$("load", e);
				break;
			case "video":
			case "audio":
				for (r = 0; r < gd.length; r++) $(gd[r], e);
				break;
			case "image":
				$("error", e), $("load", e);
				break;
			case "details":
				$("toggle", e);
				break;
			case "embed":
			case "source":
			case "link": $("error", e), $("load", e);
			case "area":
			case "base":
			case "br":
			case "col":
			case "hr":
			case "keygen":
			case "meta":
			case "param":
			case "track":
			case "wbr":
			case "menuitem":
				for (u in n) if (n.hasOwnProperty(u) && (r = n[u], r != null)) switch (u) {
					case "children":
					case "dangerouslySetInnerHTML": throw Error(a(137, t));
					default: Md(e, t, u, r, n, null);
				}
				return;
			default: if (Wt(t)) {
				for (d in n) n.hasOwnProperty(d) && (r = n[d], r !== void 0 && Nd(e, t, d, r, n, void 0));
				return;
			}
		}
		for (c in n) n.hasOwnProperty(c) && (r = n[c], r != null && Md(e, t, c, r, n, null));
	}
	function Fd(e, t, n, r) {
		switch (t) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li": break;
			case "input":
				var i = null, o = null, s = null, c = null, l = null, u = null, d = null;
				for (m in n) {
					var f = n[m];
					if (n.hasOwnProperty(m) && f != null) switch (m) {
						case "checked": break;
						case "value": break;
						case "defaultValue": l = f;
						default: r.hasOwnProperty(m) || Md(e, t, m, null, r, f);
					}
				}
				for (var p in r) {
					var m = r[p];
					if (f = n[p], r.hasOwnProperty(p) && (m != null || f != null)) switch (p) {
						case "type":
							o = m;
							break;
						case "name":
							i = m;
							break;
						case "checked":
							u = m;
							break;
						case "defaultChecked":
							d = m;
							break;
						case "value":
							s = m;
							break;
						case "defaultValue":
							c = m;
							break;
						case "children":
						case "dangerouslySetInnerHTML":
							if (m != null) throw Error(a(137, t));
							break;
						default: m !== f && Md(e, t, p, m, r, f);
					}
				}
				Pt(e, s, c, l, u, d, o, i);
				return;
			case "select":
				for (o in m = s = c = p = null, n) if (l = n[o], n.hasOwnProperty(o) && l != null) switch (o) {
					case "value": break;
					case "multiple": m = l;
					default: r.hasOwnProperty(o) || Md(e, t, o, null, r, l);
				}
				for (i in r) if (o = r[i], l = n[i], r.hasOwnProperty(i) && (o != null || l != null)) switch (i) {
					case "value":
						p = o;
						break;
					case "defaultValue":
						c = o;
						break;
					case "multiple": s = o;
					default: o !== l && Md(e, t, i, o, r, l);
				}
				t = c, n = s, r = m, p == null ? !!r != !!n && (t == null ? Lt(e, !!n, n ? [] : "", !1) : Lt(e, !!n, t, !0)) : Lt(e, !!n, p, !1);
				return;
			case "textarea":
				for (c in m = p = null, n) if (i = n[c], n.hasOwnProperty(c) && i != null && !r.hasOwnProperty(c)) switch (c) {
					case "value": break;
					case "children": break;
					default: Md(e, t, c, null, r, i);
				}
				for (s in r) if (i = r[s], o = n[s], r.hasOwnProperty(s) && (i != null || o != null)) switch (s) {
					case "value":
						p = i;
						break;
					case "defaultValue":
						m = i;
						break;
					case "children": break;
					case "dangerouslySetInnerHTML":
						if (i != null) throw Error(a(91));
						break;
					default: i !== o && Md(e, t, s, i, r, o);
				}
				Rt(e, p, m);
				return;
			case "option":
				for (var h in n) if (p = n[h], n.hasOwnProperty(h) && p != null && !r.hasOwnProperty(h)) switch (h) {
					case "selected":
						e.selected = !1;
						break;
					default: Md(e, t, h, null, r, p);
				}
				for (l in r) if (p = r[l], m = n[l], r.hasOwnProperty(l) && p !== m && (p != null || m != null)) switch (l) {
					case "selected":
						e.selected = p && typeof p != "function" && typeof p != "symbol";
						break;
					default: Md(e, t, l, p, r, m);
				}
				return;
			case "img":
			case "link":
			case "area":
			case "base":
			case "br":
			case "col":
			case "embed":
			case "hr":
			case "keygen":
			case "meta":
			case "param":
			case "source":
			case "track":
			case "wbr":
			case "menuitem":
				for (var g in n) p = n[g], n.hasOwnProperty(g) && p != null && !r.hasOwnProperty(g) && Md(e, t, g, null, r, p);
				for (u in r) if (p = r[u], m = n[u], r.hasOwnProperty(u) && p !== m && (p != null || m != null)) switch (u) {
					case "children":
					case "dangerouslySetInnerHTML":
						if (p != null) throw Error(a(137, t));
						break;
					default: Md(e, t, u, p, r, m);
				}
				return;
			default: if (Wt(t)) {
				for (var _ in n) p = n[_], n.hasOwnProperty(_) && p !== void 0 && !r.hasOwnProperty(_) && Nd(e, t, _, void 0, r, p);
				for (d in r) p = r[d], m = n[d], !r.hasOwnProperty(d) || p === m || p === void 0 && m === void 0 || Nd(e, t, d, p, r, m);
				return;
			}
		}
		for (var v in n) p = n[v], n.hasOwnProperty(v) && p != null && !r.hasOwnProperty(v) && Md(e, t, v, null, r, p);
		for (f in r) p = r[f], m = n[f], !r.hasOwnProperty(f) || p === m || p == null && m == null || Md(e, t, f, p, r, m);
	}
	function Id(e) {
		switch (e) {
			case "css":
			case "script":
			case "font":
			case "img":
			case "image":
			case "input":
			case "link": return !0;
			default: return !1;
		}
	}
	function Ld() {
		if (typeof performance.getEntriesByType == "function") {
			for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), r = 0; r < n.length; r++) {
				var i = n[r], a = i.transferSize, o = i.initiatorType, s = i.duration;
				if (a && s && Id(o)) {
					for (o = 0, s = i.responseEnd, r += 1; r < n.length; r++) {
						var c = n[r], l = c.startTime;
						if (l > s) break;
						var u = c.transferSize, d = c.initiatorType;
						u && Id(d) && (c = c.responseEnd, o += u * (c < s ? 1 : (s - l) / (c - l)));
					}
					if (--r, t += 8 * (a + o) / (i.duration / 1e3), e++, 10 < e) break;
				}
			}
			if (0 < e) return t / e / 1e6;
		}
		return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
	}
	var Rd = null, zd = null;
	function Bd(e) {
		return e.nodeType === 9 ? e : e.ownerDocument;
	}
	function Vd(e) {
		switch (e) {
			case "http://www.w3.org/2000/svg": return 1;
			case "http://www.w3.org/1998/Math/MathML": return 2;
			default: return 0;
		}
	}
	function Hd(e, t) {
		if (e === 0) switch (t) {
			case "svg": return 1;
			case "math": return 2;
			default: return 0;
		}
		return e === 1 && t === "foreignObject" ? 0 : e;
	}
	function Ud(e, t) {
		return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
	}
	var Wd = null;
	function Gd() {
		var e = window.event;
		return e && e.type === "popstate" ? e !== Wd && (Wd = e, !0) : (Wd = null, !1);
	}
	var Kd = typeof setTimeout == "function" ? setTimeout : void 0, qd = typeof clearTimeout == "function" ? clearTimeout : void 0, Jd = typeof Promise == "function" ? Promise : void 0, Yd = typeof queueMicrotask == "function" ? queueMicrotask : Jd === void 0 ? Kd : function(e) {
		return Jd.resolve(null).then(e).catch(Xd);
	};
	function Xd(e) {
		setTimeout(function() {
			throw e;
		});
	}
	function Zd(e) {
		return e === "head";
	}
	function Qd(e, t) {
		var n = t, r = 0;
		do {
			var i = n.nextSibling;
			if (e.removeChild(n), i && i.nodeType === 8) {
				if (n = i.data, n === "/$" || n === "/&") {
					if (r === 0) {
						e.removeChild(i), Np(t);
						return;
					}
					r--;
				} else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&") r++;
				else if (n === "html") pf(e.ownerDocument.documentElement);
				else if (n === "head") {
					n = e.ownerDocument.head, pf(n);
					for (var a = n.firstChild; a;) {
						var o = a.nextSibling, s = a.nodeName;
						a[ut] || s === "SCRIPT" || s === "STYLE" || s === "LINK" && a.rel.toLowerCase() === "stylesheet" || n.removeChild(a), a = o;
					}
				} else n === "body" && pf(e.ownerDocument.body);
			}
			n = i;
		} while (n);
		Np(t);
	}
	function $d(e, t) {
		var n = e;
		e = 0;
		do {
			var r = n.nextSibling;
			if (n.nodeType === 1 ? t ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (t ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), r && r.nodeType === 8) {
				if (n = r.data, n === "/$") {
					if (e === 0) break;
					e--;
				} else n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || e++;
			}
			n = r;
		} while (n);
	}
	function ef(e) {
		var t = e.firstChild;
		for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
			var n = t;
			switch (t = t.nextSibling, n.nodeName) {
				case "HTML":
				case "HEAD":
				case "BODY":
					ef(n), dt(n);
					continue;
				case "SCRIPT":
				case "STYLE": continue;
				case "LINK": if (n.rel.toLowerCase() === "stylesheet") continue;
			}
			e.removeChild(n);
		}
	}
	function tf(e, t, n, r) {
		for (; e.nodeType === 1;) {
			var i = n;
			if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
				if (!r && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
			} else if (!r) {
				if (t === "input" && e.type === "hidden") {
					var a = i.name == null ? null : "" + i.name;
					if (i.type === "hidden" && e.getAttribute("name") === a) return e;
				} else return e;
			} else if (!e[ut]) switch (t) {
				case "meta":
					if (!e.hasAttribute("itemprop")) break;
					return e;
				case "link":
					if (a = e.getAttribute("rel"), a === "stylesheet" && e.hasAttribute("data-precedence") || a !== i.rel || e.getAttribute("href") !== (i.href == null || i.href === "" ? null : i.href) || e.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin) || e.getAttribute("title") !== (i.title == null ? null : i.title)) break;
					return e;
				case "style":
					if (e.hasAttribute("data-precedence")) break;
					return e;
				case "script":
					if (a = e.getAttribute("src"), (a !== (i.src == null ? null : i.src) || e.getAttribute("type") !== (i.type == null ? null : i.type) || e.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin)) && a && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
					return e;
				default: return e;
			}
			if (e = cf(e.nextSibling), e === null) break;
		}
		return null;
	}
	function nf(e, t, n) {
		if (t === "") return null;
		for (; e.nodeType !== 3;) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = cf(e.nextSibling), e === null)) return null;
		return e;
	}
	function rf(e, t) {
		for (; e.nodeType !== 8;) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = cf(e.nextSibling), e === null)) return null;
		return e;
	}
	function af(e) {
		return e.data === "$?" || e.data === "$~";
	}
	function of(e) {
		return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
	}
	function sf(e, t) {
		var n = e.ownerDocument;
		if (e.data === "$~") e._reactRetry = t;
		else if (e.data !== "$?" || n.readyState !== "loading") t();
		else {
			var r = function() {
				t(), n.removeEventListener("DOMContentLoaded", r);
			};
			n.addEventListener("DOMContentLoaded", r), e._reactRetry = r;
		}
	}
	function cf(e) {
		for (; e != null; e = e.nextSibling) {
			var t = e.nodeType;
			if (t === 1 || t === 3) break;
			if (t === 8) {
				if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F") break;
				if (t === "/$" || t === "/&") return null;
			}
		}
		return e;
	}
	var lf = null;
	function uf(e) {
		e = e.nextSibling;
		for (var t = 0; e;) {
			if (e.nodeType === 8) {
				var n = e.data;
				if (n === "/$" || n === "/&") {
					if (t === 0) return cf(e.nextSibling);
					t--;
				} else n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || t++;
			}
			e = e.nextSibling;
		}
		return null;
	}
	function df(e) {
		e = e.previousSibling;
		for (var t = 0; e;) {
			if (e.nodeType === 8) {
				var n = e.data;
				if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
					if (t === 0) return e;
					t--;
				} else n !== "/$" && n !== "/&" || t++;
			}
			e = e.previousSibling;
		}
		return null;
	}
	function ff(e, t, n) {
		switch (t = Bd(n), e) {
			case "html":
				if (e = t.documentElement, !e) throw Error(a(452));
				return e;
			case "head":
				if (e = t.head, !e) throw Error(a(453));
				return e;
			case "body":
				if (e = t.body, !e) throw Error(a(454));
				return e;
			default: throw Error(a(451));
		}
	}
	function pf(e) {
		for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
		dt(e);
	}
	var mf = /* @__PURE__ */ new Map(), hf = /* @__PURE__ */ new Set();
	function gf(e) {
		return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
	}
	var _f = I.d;
	I.d = {
		f: vf,
		r: yf,
		D: Sf,
		C: Cf,
		L: wf,
		m: Tf,
		X: Df,
		S: Ef,
		M: Of
	};
	function vf() {
		var e = _f.f(), t = vu();
		return e || t;
	}
	function yf(e) {
		var t = H(e);
		t !== null && t.tag === 5 && t.type === "form" ? bs(t) : _f.r(e);
	}
	var bf = typeof document > "u" ? null : document;
	function xf(e, t, n) {
		var r = bf;
		if (r && typeof t == "string" && t) {
			var i = Nt(t);
			i = "link[rel=\"" + e + "\"][href=\"" + i + "\"]", typeof n == "string" && (i += "[crossorigin=\"" + n + "\"]"), hf.has(i) || (hf.add(i), e = {
				rel: e,
				crossOrigin: n,
				href: t
			}, r.querySelector(i) === null && (t = r.createElement("link"), Pd(t, "link", e), mt(t), r.head.appendChild(t)));
		}
	}
	function Sf(e) {
		_f.D(e), xf("dns-prefetch", e, null);
	}
	function Cf(e, t) {
		_f.C(e, t), xf("preconnect", e, t);
	}
	function wf(e, t, n) {
		_f.L(e, t, n);
		var r = bf;
		if (r && e && t) {
			var i = "link[rel=\"preload\"][as=\"" + Nt(t) + "\"]";
			t === "image" && n && n.imageSrcSet ? (i += "[imagesrcset=\"" + Nt(n.imageSrcSet) + "\"]", typeof n.imageSizes == "string" && (i += "[imagesizes=\"" + Nt(n.imageSizes) + "\"]")) : i += "[href=\"" + Nt(e) + "\"]";
			var a = i;
			switch (t) {
				case "style":
					a = Af(e);
					break;
				case "script": a = Pf(e);
			}
			mf.has(a) || (e = m({
				rel: "preload",
				href: t === "image" && n && n.imageSrcSet ? void 0 : e,
				as: t
			}, n), mf.set(a, e), r.querySelector(i) !== null || t === "style" && r.querySelector(jf(a)) || t === "script" && r.querySelector(Ff(a)) || (t = r.createElement("link"), Pd(t, "link", e), mt(t), r.head.appendChild(t)));
		}
	}
	function Tf(e, t) {
		_f.m(e, t);
		var n = bf;
		if (n && e) {
			var r = t && typeof t.as == "string" ? t.as : "script", i = "link[rel=\"modulepreload\"][as=\"" + Nt(r) + "\"][href=\"" + Nt(e) + "\"]", a = i;
			switch (r) {
				case "audioworklet":
				case "paintworklet":
				case "serviceworker":
				case "sharedworker":
				case "worker":
				case "script": a = Pf(e);
			}
			if (!mf.has(a) && (e = m({
				rel: "modulepreload",
				href: e
			}, t), mf.set(a, e), n.querySelector(i) === null)) {
				switch (r) {
					case "audioworklet":
					case "paintworklet":
					case "serviceworker":
					case "sharedworker":
					case "worker":
					case "script": if (n.querySelector(Ff(a))) return;
				}
				r = n.createElement("link"), Pd(r, "link", e), mt(r), n.head.appendChild(r);
			}
		}
	}
	function Ef(e, t, n) {
		_f.S(e, t, n);
		var r = bf;
		if (r && e) {
			var i = U(r).hoistableStyles, a = Af(e);
			t ||= "default";
			var o = i.get(a);
			if (!o) {
				var s = {
					loading: 0,
					preload: null
				};
				if (o = r.querySelector(jf(a))) s.loading = 5;
				else {
					e = m({
						rel: "stylesheet",
						href: e,
						"data-precedence": t
					}, n), (n = mf.get(a)) && Rf(e, n);
					var c = o = r.createElement("link");
					mt(c), Pd(c, "link", e), c._p = new Promise(function(e, t) {
						c.onload = e, c.onerror = t;
					}), c.addEventListener("load", function() {
						s.loading |= 1;
					}), c.addEventListener("error", function() {
						s.loading |= 2;
					}), s.loading |= 4, Lf(o, t, r);
				}
				o = {
					type: "stylesheet",
					instance: o,
					count: 1,
					state: s
				}, i.set(a, o);
			}
		}
	}
	function Df(e, t) {
		_f.X(e, t);
		var n = bf;
		if (n && e) {
			var r = U(n).hoistableScripts, i = Pf(e), a = r.get(i);
			a || (a = n.querySelector(Ff(i)), a || (e = m({
				src: e,
				async: !0
			}, t), (t = mf.get(i)) && zf(e, t), a = n.createElement("script"), mt(a), Pd(a, "link", e), n.head.appendChild(a)), a = {
				type: "script",
				instance: a,
				count: 1,
				state: null
			}, r.set(i, a));
		}
	}
	function Of(e, t) {
		_f.M(e, t);
		var n = bf;
		if (n && e) {
			var r = U(n).hoistableScripts, i = Pf(e), a = r.get(i);
			a || (a = n.querySelector(Ff(i)), a || (e = m({
				src: e,
				async: !0,
				type: "module"
			}, t), (t = mf.get(i)) && zf(e, t), a = n.createElement("script"), mt(a), Pd(a, "link", e), n.head.appendChild(a)), a = {
				type: "script",
				instance: a,
				count: 1,
				state: null
			}, r.set(i, a));
		}
	}
	function kf(e, t, n, r) {
		var i = (i = ae.current) ? gf(i) : null;
		if (!i) throw Error(a(446));
		switch (e) {
			case "meta":
			case "title": return null;
			case "style": return typeof n.precedence == "string" && typeof n.href == "string" ? (t = Af(n.href), n = U(i).hoistableStyles, r = n.get(t), r || (r = {
				type: "style",
				instance: null,
				count: 0,
				state: null
			}, n.set(t, r)), r) : {
				type: "void",
				instance: null,
				count: 0,
				state: null
			};
			case "link":
				if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
					e = Af(n.href);
					var o = U(i).hoistableStyles, s = o.get(e);
					if (s || (i = i.ownerDocument || i, s = {
						type: "stylesheet",
						instance: null,
						count: 0,
						state: {
							loading: 0,
							preload: null
						}
					}, o.set(e, s), (o = i.querySelector(jf(e))) && !o._p && (s.instance = o, s.state.loading = 5), mf.has(e) || (n = {
						rel: "preload",
						as: "style",
						href: n.href,
						crossOrigin: n.crossOrigin,
						integrity: n.integrity,
						media: n.media,
						hrefLang: n.hrefLang,
						referrerPolicy: n.referrerPolicy
					}, mf.set(e, n), o || Nf(i, e, n, s.state))), t && r === null) throw Error(a(528, ""));
					return s;
				}
				if (t && r !== null) throw Error(a(529, ""));
				return null;
			case "script": return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Pf(n), n = U(i).hoistableScripts, r = n.get(t), r || (r = {
				type: "script",
				instance: null,
				count: 0,
				state: null
			}, n.set(t, r)), r) : {
				type: "void",
				instance: null,
				count: 0,
				state: null
			};
			default: throw Error(a(444, e));
		}
	}
	function Af(e) {
		return "href=\"" + Nt(e) + "\"";
	}
	function jf(e) {
		return "link[rel=\"stylesheet\"][" + e + "]";
	}
	function Mf(e) {
		return m({}, e, {
			"data-precedence": e.precedence,
			precedence: null
		});
	}
	function Nf(e, t, n, r) {
		e.querySelector("link[rel=\"preload\"][as=\"style\"][" + t + "]") ? r.loading = 1 : (t = e.createElement("link"), r.preload = t, t.addEventListener("load", function() {
			return r.loading |= 1;
		}), t.addEventListener("error", function() {
			return r.loading |= 2;
		}), Pd(t, "link", n), mt(t), e.head.appendChild(t));
	}
	function Pf(e) {
		return "[src=\"" + Nt(e) + "\"]";
	}
	function Ff(e) {
		return "script[async]" + e;
	}
	function If(e, t, n) {
		if (t.count++, t.instance === null) switch (t.type) {
			case "style":
				var r = e.querySelector("style[data-href~=\"" + Nt(n.href) + "\"]");
				if (r) return t.instance = r, mt(r), r;
				var i = m({}, n, {
					"data-href": n.href,
					"data-precedence": n.precedence,
					href: null,
					precedence: null
				});
				return r = (e.ownerDocument || e).createElement("style"), mt(r), Pd(r, "style", i), Lf(r, n.precedence, e), t.instance = r;
			case "stylesheet":
				i = Af(n.href);
				var o = e.querySelector(jf(i));
				if (o) return t.state.loading |= 4, t.instance = o, mt(o), o;
				r = Mf(n), (i = mf.get(i)) && Rf(r, i), o = (e.ownerDocument || e).createElement("link"), mt(o);
				var s = o;
				return s._p = new Promise(function(e, t) {
					s.onload = e, s.onerror = t;
				}), Pd(o, "link", r), t.state.loading |= 4, Lf(o, n.precedence, e), t.instance = o;
			case "script": return o = Pf(n.src), (i = e.querySelector(Ff(o))) ? (t.instance = i, mt(i), i) : (r = n, (i = mf.get(o)) && (r = m({}, n), zf(r, i)), e = e.ownerDocument || e, i = e.createElement("script"), mt(i), Pd(i, "link", r), e.head.appendChild(i), t.instance = i);
			case "void": return null;
			default: throw Error(a(443, t.type));
		}
		else t.type === "stylesheet" && !(t.state.loading & 4) && (r = t.instance, t.state.loading |= 4, Lf(r, n.precedence, e));
		return t.instance;
	}
	function Lf(e, t, n) {
		for (var r = n.querySelectorAll("link[rel=\"stylesheet\"][data-precedence],style[data-precedence]"), i = r.length ? r[r.length - 1] : null, a = i, o = 0; o < r.length; o++) {
			var s = r[o];
			if (s.dataset.precedence === t) a = s;
			else if (a !== i) break;
		}
		a ? a.parentNode.insertBefore(e, a.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
	}
	function Rf(e, t) {
		e.crossOrigin ??= t.crossOrigin, e.referrerPolicy ??= t.referrerPolicy, e.title ??= t.title;
	}
	function zf(e, t) {
		e.crossOrigin ??= t.crossOrigin, e.referrerPolicy ??= t.referrerPolicy, e.integrity ??= t.integrity;
	}
	var Bf = null;
	function Vf(e, t, n) {
		if (Bf === null) {
			var r = /* @__PURE__ */ new Map(), i = Bf = /* @__PURE__ */ new Map();
			i.set(n, r);
		} else i = Bf, r = i.get(n), r || (r = /* @__PURE__ */ new Map(), i.set(n, r));
		if (r.has(e)) return r;
		for (r.set(e, null), n = n.getElementsByTagName(e), i = 0; i < n.length; i++) {
			var a = n[i];
			if (!(a[ut] || a[rt] || e === "link" && a.getAttribute("rel") === "stylesheet") && a.namespaceURI !== "http://www.w3.org/2000/svg") {
				var o = a.getAttribute(t) || "";
				o = e + o;
				var s = r.get(o);
				s ? s.push(a) : r.set(o, [a]);
			}
		}
		return r;
	}
	function Hf(e, t, n) {
		e = e.ownerDocument || e, e.head.insertBefore(n, t === "title" ? e.querySelector("head > title") : null);
	}
	function Uf(e, t, n) {
		if (n === 1 || t.itemProp != null) return !1;
		switch (e) {
			case "meta":
			case "title": return !0;
			case "style":
				if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
				return !0;
			case "link":
				if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
				switch (t.rel) {
					case "stylesheet": return e = t.disabled, typeof t.precedence == "string" && e == null;
					default: return !0;
				}
			case "script": if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return !0;
		}
		return !1;
	}
	function Wf(e) {
		return !(e.type === "stylesheet" && !(e.state.loading & 3));
	}
	function Gf(e, t, n, r) {
		if (n.type === "stylesheet" && (typeof r.media != "string" || !1 !== matchMedia(r.media).matches) && !(n.state.loading & 4)) {
			if (n.instance === null) {
				var i = Af(r.href), a = t.querySelector(jf(i));
				if (a) {
					t = a._p, typeof t == "object" && t && typeof t.then == "function" && (e.count++, e = Jf.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = a, mt(a);
					return;
				}
				a = t.ownerDocument || t, r = Mf(r), (i = mf.get(i)) && Rf(r, i), a = a.createElement("link"), mt(a);
				var o = a;
				o._p = new Promise(function(e, t) {
					o.onload = e, o.onerror = t;
				}), Pd(a, "link", r), n.instance = a;
			}
			e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && !(n.state.loading & 3) && (e.count++, n = Jf.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
		}
	}
	var Kf = 0;
	function qf(e, t) {
		return e.stylesheets && e.count === 0 && Xf(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
			var r = setTimeout(function() {
				if (e.stylesheets && Xf(e, e.stylesheets), e.unsuspend) {
					var t = e.unsuspend;
					e.unsuspend = null, t();
				}
			}, 6e4 + t);
			0 < e.imgBytes && Kf === 0 && (Kf = 62500 * Ld());
			var i = setTimeout(function() {
				if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Xf(e, e.stylesheets), e.unsuspend)) {
					var t = e.unsuspend;
					e.unsuspend = null, t();
				}
			}, (e.imgBytes > Kf ? 50 : 800) + t);
			return e.unsuspend = n, function() {
				e.unsuspend = null, clearTimeout(r), clearTimeout(i);
			};
		} : null;
	}
	function Jf() {
		if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
			if (this.stylesheets) Xf(this, this.stylesheets);
			else if (this.unsuspend) {
				var e = this.unsuspend;
				this.unsuspend = null, e();
			}
		}
	}
	var Yf = null;
	function Xf(e, t) {
		e.stylesheets = null, e.unsuspend !== null && (e.count++, Yf = /* @__PURE__ */ new Map(), t.forEach(Zf, e), Yf = null, Jf.call(e));
	}
	function Zf(e, t) {
		if (!(t.state.loading & 4)) {
			var n = Yf.get(e);
			if (n) var r = n.get(null);
			else {
				n = /* @__PURE__ */ new Map(), Yf.set(e, n);
				for (var i = e.querySelectorAll("link[data-precedence],style[data-precedence]"), a = 0; a < i.length; a++) {
					var o = i[a];
					(o.nodeName === "LINK" || o.getAttribute("media") !== "not all") && (n.set(o.dataset.precedence, o), r = o);
				}
				r && n.set(null, r);
			}
			i = t.instance, o = i.getAttribute("data-precedence"), a = n.get(o) || r, a === r && n.set(null, i), n.set(o, i), this.count++, r = Jf.bind(this), i.addEventListener("load", r), i.addEventListener("error", r), a ? a.parentNode.insertBefore(i, a.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(i, e.firstChild)), t.state.loading |= 4;
		}
	}
	var Qf = {
		$$typeof: S,
		Provider: null,
		Consumer: null,
		_currentValue: te,
		_currentValue2: te,
		_threadCount: 0
	};
	function $f(e, t, n, r, i, a, o, s, c) {
		this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ke(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ke(0), this.hiddenUpdates = Ke(null), this.identifierPrefix = r, this.onUncaughtError = i, this.onCaughtError = a, this.onRecoverableError = o, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c, this.incompleteTransitions = /* @__PURE__ */ new Map();
	}
	function ep(e, t, n, r, i, a, o, s, c, l, u, d) {
		return e = new $f(e, t, n, o, c, l, u, d, s), t = 1, !0 === a && (t |= 24), a = $r(3, null, null, t), e.current = a, a.stateNode = e, t = $i(), t.refCount++, e.pooledCache = t, t.refCount++, a.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: t
		}, Ma(a), e;
	}
	function tp(e) {
		return e ? (e = Zr, e) : Zr;
	}
	function np(e, t, n, r, i, a) {
		i = tp(i), r.context === null ? r.context = i : r.pendingContext = i, r = Pa(t), r.payload = { element: n }, a = a === void 0 ? null : a, a !== null && (r.callback = a), n = Fa(e, r, t), n !== null && (pu(n, e, t), Ia(n, e, t));
	}
	function rp(e, t) {
		if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
			var n = e.retryLane;
			e.retryLane = n !== 0 && n < t ? n : t;
		}
	}
	function ip(e, t) {
		rp(e, t), (e = e.alternate) && rp(e, t);
	}
	function ap(e) {
		if (e.tag === 13 || e.tag === 31) {
			var t = Jr(e, 67108864);
			t !== null && pu(t, e, 67108864), ip(e, 67108864);
		}
	}
	function op(e) {
		if (e.tag === 13 || e.tag === 31) {
			var t = du();
			t = Qe(t);
			var n = Jr(e, t);
			n !== null && pu(n, e, t), ip(e, t);
		}
	}
	var sp = !0;
	function cp(e, t, n, r) {
		var i = F.T;
		F.T = null;
		var a = I.p;
		try {
			I.p = 2, up(e, t, n, r);
		} finally {
			I.p = a, F.T = i;
		}
	}
	function lp(e, t, n, r) {
		var i = F.T;
		F.T = null;
		var a = I.p;
		try {
			I.p = 8, up(e, t, n, r);
		} finally {
			I.p = a, F.T = i;
		}
	}
	function up(e, t, n, r) {
		if (sp) {
			var i = dp(r);
			if (i === null) Cd(e, t, r, fp, n), Cp(e, r);
			else if (Tp(i, e, t, n, r)) r.stopPropagation();
			else if (Cp(e, r), t & 4 && -1 < Sp.indexOf(e)) {
				for (; i !== null;) {
					var a = H(i);
					if (a !== null) switch (a.tag) {
						case 3:
							if (a = a.stateNode, a.current.memoizedState.isDehydrated) {
								var o = Ve(a.pendingLanes);
								if (o !== 0) {
									var s = a;
									for (s.pendingLanes |= 2, s.entangledLanes |= 2; o;) {
										var c = 1 << 31 - Pe(o);
										s.entanglements[1] |= c, o &= ~c;
									}
									nd(a), !(X & 6) && ($l = Se() + 500, rd(0, !1));
								}
							}
							break;
						case 31:
						case 13: s = Jr(a, 2), s !== null && pu(s, a, 2), vu(), ip(a, 2);
					}
					if (a = dp(r), a === null && Cd(e, t, r, fp, n), a === i) break;
					i = a;
				}
				i !== null && r.stopPropagation();
			} else Cd(e, t, r, null, n);
		}
	}
	function dp(e) {
		return e = Xt(e), pp(e);
	}
	var fp = null;
	function pp(e) {
		if (fp = null, e = ft(e), e !== null) {
			var t = c(e);
			if (t === null) e = null;
			else {
				var n = t.tag;
				if (n === 13) {
					if (e = l(t), e !== null) return e;
					e = null;
				} else if (n === 31) {
					if (e = u(t), e !== null) return e;
					e = null;
				} else if (n === 3) {
					if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
					e = null;
				} else t !== e && (e = null);
			}
		}
		return fp = e, null;
	}
	function mp(e) {
		switch (e) {
			case "beforetoggle":
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
			case "toggle":
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
			case "selectstart": return 2;
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
			case "touchmove":
			case "wheel":
			case "mouseenter":
			case "mouseleave":
			case "pointerenter":
			case "pointerleave": return 8;
			case "message": switch (Ce()) {
				case we: return 2;
				case Te: return 8;
				case Ee:
				case De: return 32;
				case Oe: return 268435456;
				default: return 32;
			}
			default: return 32;
		}
	}
	var hp = !1, gp = null, _p = null, vp = null, yp = /* @__PURE__ */ new Map(), bp = /* @__PURE__ */ new Map(), xp = [], Sp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
	function Cp(e, t) {
		switch (e) {
			case "focusin":
			case "focusout":
				gp = null;
				break;
			case "dragenter":
			case "dragleave":
				_p = null;
				break;
			case "mouseover":
			case "mouseout":
				vp = null;
				break;
			case "pointerover":
			case "pointerout":
				yp.delete(t.pointerId);
				break;
			case "gotpointercapture":
			case "lostpointercapture": bp.delete(t.pointerId);
		}
	}
	function wp(e, t, n, r, i, a) {
		return e === null || e.nativeEvent !== a ? (e = {
			blockedOn: t,
			domEventName: n,
			eventSystemFlags: r,
			nativeEvent: a,
			targetContainers: [i]
		}, t !== null && (t = H(t), t !== null && ap(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
	}
	function Tp(e, t, n, r, i) {
		switch (t) {
			case "focusin": return gp = wp(gp, e, t, n, r, i), !0;
			case "dragenter": return _p = wp(_p, e, t, n, r, i), !0;
			case "mouseover": return vp = wp(vp, e, t, n, r, i), !0;
			case "pointerover":
				var a = i.pointerId;
				return yp.set(a, wp(yp.get(a) || null, e, t, n, r, i)), !0;
			case "gotpointercapture": return a = i.pointerId, bp.set(a, wp(bp.get(a) || null, e, t, n, r, i)), !0;
		}
		return !1;
	}
	function Ep(e) {
		var t = ft(e.target);
		if (t !== null) {
			var n = c(t);
			if (n !== null) {
				if (t = n.tag, t === 13) {
					if (t = l(n), t !== null) {
						e.blockedOn = t, tt(e.priority, function() {
							op(n);
						});
						return;
					}
				} else if (t === 31) {
					if (t = u(n), t !== null) {
						e.blockedOn = t, tt(e.priority, function() {
							op(n);
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
	function Dp(e) {
		if (e.blockedOn !== null) return !1;
		for (var t = e.targetContainers; 0 < t.length;) {
			var n = dp(e.nativeEvent);
			if (n === null) {
				n = e.nativeEvent;
				var r = new n.constructor(n.type, n);
				Yt = r, n.target.dispatchEvent(r), Yt = null;
			} else return t = H(n), t !== null && ap(t), e.blockedOn = n, !1;
			t.shift();
		}
		return !0;
	}
	function Op(e, t, n) {
		Dp(e) && n.delete(t);
	}
	function kp() {
		hp = !1, gp !== null && Dp(gp) && (gp = null), _p !== null && Dp(_p) && (_p = null), vp !== null && Dp(vp) && (vp = null), yp.forEach(Op), bp.forEach(Op);
	}
	function Ap(e, n) {
		e.blockedOn === n && (e.blockedOn = null, hp || (hp = !0, t.unstable_scheduleCallback(t.unstable_NormalPriority, kp)));
	}
	var jp = null;
	function Mp(e) {
		jp !== e && (jp = e, t.unstable_scheduleCallback(t.unstable_NormalPriority, function() {
			jp === e && (jp = null);
			for (var t = 0; t < e.length; t += 3) {
				var n = e[t], r = e[t + 1], i = e[t + 2];
				if (typeof r != "function") {
					if (pp(r || n) === null) continue;
					break;
				}
				var a = H(n);
				a !== null && (e.splice(t, 3), t -= 3, vs(a, {
					pending: !0,
					data: i,
					method: n.method,
					action: r
				}, r, i));
			}
		}));
	}
	function Np(e) {
		function t(t) {
			return Ap(t, e);
		}
		gp !== null && Ap(gp, e), _p !== null && Ap(_p, e), vp !== null && Ap(vp, e), yp.forEach(t), bp.forEach(t);
		for (var n = 0; n < xp.length; n++) {
			var r = xp[n];
			r.blockedOn === e && (r.blockedOn = null);
		}
		for (; 0 < xp.length && (n = xp[0], n.blockedOn === null);) Ep(n), n.blockedOn === null && xp.shift();
		if (n = (e.ownerDocument || e).$$reactFormReplay, n != null) for (r = 0; r < n.length; r += 3) {
			var i = n[r], a = n[r + 1], o = i[it] || null;
			if (typeof a == "function") o || Mp(n);
			else if (o) {
				var s = null;
				if (a && a.hasAttribute("formAction")) {
					if (i = a, o = a[it] || null) s = o.formAction;
					else if (pp(i) !== null) continue;
				} else s = o.action;
				typeof s == "function" ? n[r + 1] = s : (n.splice(r, 3), r -= 3), Mp(n);
			}
		}
	}
	function Pp() {
		function e(e) {
			e.canIntercept && e.info === "react-transition" && e.intercept({
				handler: function() {
					return new Promise(function(e) {
						return i = e;
					});
				},
				focusReset: "manual",
				scroll: "manual"
			});
		}
		function t() {
			i !== null && (i(), i = null), r || setTimeout(n, 20);
		}
		function n() {
			if (!r && !navigation.transition) {
				var e = navigation.currentEntry;
				e && e.url != null && navigation.navigate(e.url, {
					state: e.getState(),
					info: "react-transition",
					history: "replace"
				});
			}
		}
		if (typeof navigation == "object") {
			var r = !1, i = null;
			return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(n, 100), function() {
				r = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), i !== null && (i(), i = null);
			};
		}
	}
	function Fp(e) {
		this._internalRoot = e;
	}
	Ip.prototype.render = Fp.prototype.render = function(e) {
		var t = this._internalRoot;
		if (t === null) throw Error(a(409));
		var n = t.current;
		np(n, du(), e, t, null, null);
	}, Ip.prototype.unmount = Fp.prototype.unmount = function() {
		var e = this._internalRoot;
		if (e !== null) {
			this._internalRoot = null;
			var t = e.containerInfo;
			np(e.current, 2, null, e, null, null), vu(), t[at] = null;
		}
	};
	function Ip(e) {
		this._internalRoot = e;
	}
	Ip.prototype.unstable_scheduleHydration = function(e) {
		if (e) {
			var t = et();
			e = {
				blockedOn: null,
				target: e,
				priority: t
			};
			for (var n = 0; n < xp.length && t !== 0 && t < xp[n].priority; n++);
			xp.splice(n, 0, e), n === 0 && Ep(e);
		}
	};
	var Lp = n.version;
	if (Lp !== "19.2.8") throw Error(a(527, Lp, "19.2.8"));
	I.findDOMNode = function(e) {
		var t = e._reactInternals;
		if (t === void 0) throw typeof e.render == "function" ? Error(a(188)) : (e = Object.keys(e).join(","), Error(a(268, e)));
		return e = f(t), e = e === null ? null : p(e), e = e === null ? null : e.stateNode, e;
	};
	var Rp = {
		bundleType: 0,
		version: "19.2.8",
		rendererPackageName: "react-dom",
		currentDispatcherRef: F,
		reconcilerVersion: "19.2.8"
	};
	if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
		var zp = __REACT_DEVTOOLS_GLOBAL_HOOK__;
		if (!zp.isDisabled && zp.supportsFiber) try {
			je = zp.inject(Rp), Me = zp;
		} catch {}
	}
	e.createRoot = function(e, t) {
		if (!s(e)) throw Error(a(299));
		var n = !1, r = "", i = Vs, o = Hs, c = Us;
		return t != null && (!0 === t.unstable_strictMode && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onUncaughtError !== void 0 && (i = t.onUncaughtError), t.onCaughtError !== void 0 && (o = t.onCaughtError), t.onRecoverableError !== void 0 && (c = t.onRecoverableError)), t = ep(e, 1, !1, null, null, n, r, null, i, o, c, Pp), e[at] = t.current, xd(e), new Fp(t);
	};
})), A = /* @__PURE__ */ t(((e, t) => {
	function n() {
		if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
		} catch (e) {
			console.error(e);
		}
	}
	n(), t.exports = k();
})), j = /* @__PURE__ */ c(o()), M = /* @__PURE__ */ c(A()), N = {
	intro: {
		zh: "开场",
		en: "Opening"
	},
	home: {
		zh: "首页",
		en: "Home"
	},
	directory: {
		zh: "目录",
		en: "Directory"
	},
	experience: {
		zh: "实习经历",
		en: "Experience"
	},
	projects: {
		zh: "项目经历",
		en: "Projects"
	},
	life: {
		zh: "人生体验",
		en: "Life"
	},
	contact: {
		zh: "联系",
		en: "Contact"
	}
}, P = {
	welcome: "intro",
	overview: "directory",
	about: "home",
	profile: "home"
}, ee = [
	["intro", /开场|开头|片头|\b(?:intro|opening)\b/i],
	["directory", /目录|导航|所有栏目|\b(?:directory|navigation|all sections)\b/i],
	["projects", /项目|作品|\b(?:projects?|portfolio|woolworths)\b/i],
	["life", /人生体验|生活|相册|照片|旅行|健身|游戏|留学|\b(?:life|photos?|albums?|travel|fitness|gaming|study abroad)\b/i],
	["experience", /实习|工作经历|工作经验|\b(?:internships?|work experience|experience)\b/i],
	["contact", /联系|邮箱|电话|\b(?:contact|email|phone)\b/i],
	["home", /首页|关于我|个人介绍|\b(?:home|about|profile)\b/i]
], F = (e) => e.normalize("NFKC").replace(/\s+/g, " ").trim().toLowerCase(), I = (e) => {
	let t = e.replace(/^#/, "").split("/")[0];
	return Object.prototype.hasOwnProperty.call(N, t) ? t : Object.prototype.hasOwnProperty.call(P, t) ? P[t] : "home";
}, te = (e) => e.replace(/。/g, "").replace(/\.(?=\s|$)/g, "").trim(), L = (e, t = 520) => {
	let n = te(e);
	return n.length > t ? `${n.slice(0, t)}…` : n;
}, ne = (e, t) => ({
	route: e,
	label: t === "zh" ? `去${N[e].zh}` : `Explore ${N[e].en}`
}), R = (e, t, n) => ({
	text: te(e),
	actions: [...new Set(t)].map((e) => ne(e, n))
}), z = (e) => e.filter((e) => {
	let t = e;
	return !t.hidden && !t.deletedAt;
}), B = (e) => z(e.experiences), re = (e) => z(e.projects), ie = (e) => e.lifeMedia.reduce((e, t) => ({
	photos: e.photos + z(t.photos).length,
	videos: e.videos + z(t.videos).length
}), {
	photos: 0,
	videos: 0
});
function ae(e, t) {
	return N[I(e)][t];
}
function oe(e, t) {
	return R([
		"profile.intro",
		"profile.bio",
		"profile.values"
	].map((n) => L(E(e, n, t))).filter(Boolean).join("\n") || (t === "zh" ? "目前还没有公开的个人介绍" : "There is no published profile yet"), [
		"home",
		"experience",
		"projects"
	], t);
}
function se(e, t) {
	let n = E(e, "contact.email", t), r = E(e, "contact.phoneDisplay", t);
	return R([n && `${t === "zh" ? "邮箱" : "Email"}: ${n}`, r && `${t === "zh" ? "电话" : "Phone"}: ${r}`].filter(Boolean).join("\n") || (t === "zh" ? "目前没有公开的联系方式" : "There are no published contact details"), ["contact"], t);
}
function ce(e, t) {
	return R([[
		"profile.melbourne",
		"profile.masters",
		"profile.mastersDate"
	], [
		"profile.queens",
		"profile.computing",
		"profile.computingDate"
	]].map((n) => n.map((n) => L(E(e, n, t))).filter(Boolean).join(" · ")).filter(Boolean).join("\n") || (t === "zh" ? "目前没有公开的教育经历" : "There is no published education information"), ["home"], t);
}
function le(e, t, n = "") {
	if (!e.length) return R(t === "zh" ? "目前还没有公开的项目记录" : "There are no published project records yet", ["projects"], t);
	let r = /参与|负责|贡献|角色|\b(?:participat|contribut|role|responsib)/.test(n), i = /分析|框架|方法|信任方程|swot|tows|\b(?:analys|framework|method|trust equation)/.test(n), a = r ? /参与|负责|贡献|角色|participat|contribut|role|responsib/i : i ? /分析|框架|方法|analys|framework|method/i : null;
	return R(e.slice(0, 6).map((e) => {
		let n = [
			e.title[t],
			e.subtitle[t],
			e.summary[t]
		], r = z(e.details), i = a ? r.filter((e) => a.test(`${e.id} ${e.title.zh} ${e.title.en}`)) : [];
		for (let e of i) n.push(e.title[t], ...e.paragraphs.map((e) => e[t]), ...(e.points || []).map((e) => e[t]));
		return n.push(...z(e.deliverables).map((e) => e.label[t]), e.sourceNote[t]), n.filter(Boolean).map((e) => L(e, 1e3)).join("\n");
	}).filter(Boolean).join("\n\n") || (t === "zh" ? "这些公开项目暂时没有文字说明" : "These published projects have no description yet"), ["projects"], t);
}
function ue(e, t, n) {
	let r = I(e), i = ie(n), a = B(n).length, o = n.lifeMedia.map((e) => e.title[t]).filter(Boolean).join(t === "zh" ? "、" : " · ");
	if (r === "home") return oe(n, t);
	if (r === "projects") return le(re(n), t);
	if (r === "contact") return se(n, t);
	let s = {
		intro: {
			zh: "这里是网站的开场影像\n往下探索，我陪你一起",
			en: "This is the opening film\nScroll down to explore — I’ll come along",
			next: ["home"]
		},
		home: {
			zh: "",
			en: "",
			next: ["directory", "experience"]
		},
		directory: {
			zh: "这里是我们的出发点\n认识我、实习经历、项目经历和人生体验，选个方向，我陪你过去",
			en: "This is our starting point\nChoose About me, Experience, Projects or Life — I’ll come with you",
			next: [
				"home",
				"experience",
				"projects",
				"life"
			]
		},
		experience: {
			zh: `这里展示真实的实习经历，目前公开 ${a} 段记录\n可以了解岗位、时间和具体参与的工作`,
			en: `This section contains ${a} published experience records\nExplore the listed roles, dates and work`,
			next: ["projects"]
		},
		projects: {
			zh: "",
			en: "",
			next: ["projects", "experience"]
		},
		life: {
			zh: `这里记录工作之外的生活${o ? `：${o}` : ""}\n当前公开 ${i.photos} 张照片、${i.videos} 段视频，慢慢看，我在旁边陪你`,
			en: `Life beyond work${o ? `: ${o}` : ""}\nThere are ${i.photos} published photos and ${i.videos} videos — take your time, I’m here`,
			next: ["life", "contact"]
		},
		contact: {
			zh: "",
			en: "",
			next: ["contact", "directory"]
		}
	};
	return R(s[r][t], s[r].next, t);
}
function de(e, t) {
	if (!e.length) return R(t === "zh" ? "目前还没有公开的实习记录\n等新的经历加入，我再陪你一起看" : "There are no published experience records yet\nI’ll be here when new ones are added", ["experience"], t);
	let n = e.slice(0, 6).map((e) => {
		let n = e[t], r = (e) => L(n[e]);
		return `${r("company")} · ${r("role")}\n${r("date")} · ${r("place")}\n${r("description")}`;
	});
	return R(`${t === "zh" ? "我找到这些公开记录" : "Here are the published records"}\n\n${n.join("\n\n")}`, ["experience"], t);
}
function fe(e) {
	return R(e === "zh" ? "这件事我还没有可核对的公开资料，不想替他乱说\n我现在能介绍个人简介、实习、项目、生活内容，也可以陪你进入任一栏目" : "I don’t have published information to verify that, so I won’t guess\nI can introduce the published profile, experience, projects and life content, or guide you to a section", ["directory", "contact"], e);
}
function pe(e, t, n, r) {
	let i = F(e.slice(0, 1200)), a = t === "zh", o = i.replace(/^(?:(?:嘿|嗨|喂|hello|hey)\s*[,，]?\s*)?(?:圆宝|元宝|yuanbao\b)[,，、:：!！?？\s~～]*/, "").trim() || i;
	if (!o) return R(a ? "我在呢，想了解什么？也可以让我介绍当前页面" : "I’m here — what would you like to know? You can ask about this page too", ["directory"], t);
	if (/https?:\/\/|javascript:|file:\/\/|密码|密钥|客户名单|客户姓名|家庭住址|身份证|薪资|工资|年薪|收入|利润|业绩|营收|成绩|绩点|学号|生日|年龄|几岁|出生|身高|体重|哪里人|爱吃|最喜欢|喜欢什么颜色|\b(?:password|secret|api key|home address|salary|income|revenue|profit|gpa|student id|client list|birthday|birthdate|age|height|weight|favou?rite)\b/.test(o)) return fe(t);
	if (/当前页|当前页面|这个页面|这一页|这里是什么|这里有什么|介绍这里|\b(?:this page|current page|where am i)\b/.test(o)) return ue(n, t, r);
	let s = ee.find(([, e]) => e.test(o))?.[0];
	if (s && /带我|领我|带路|打开|进入|去看看|想去|去(?:首页|目录|实习|项目|人生|联系|生活)|\b(?:go to|take me|open|navigate to|show me|let'?s visit)\b/.test(o)) return R(a ? `好呀，我陪你去${N[s].zh}\n点下面的入口就出发` : `Let’s visit ${N[s].en} together\nUse the link below when you’re ready`, [s], t);
	if (/^(?:你好|嗨|哈喽|hello|hey|hi|早上好|晚上好)[!！~～\s]*$/.test(o)) return R(a ? "喵，你来啦，我是圆宝\n想看看个人介绍，还是让我陪你逛逛？" : "Meow, you’re here — I’m Yuanbao\nWould you like to see the profile or explore with me?", ["home", "directory"], t);
	if (/你是谁|你叫什么|你的名字|你会什么|你能做什么|你有什么功能|怎么用圆宝|怎么用元宝|\b(?:who are you|your name|what can you do|how to use yuanbao)\b/.test(o) || /^(?:圆宝|元宝|yuanbao|help)[!！?？~～\s]*$/.test(o)) return R(a ? "我是圆宝，黏人又爱陪你逛的小猫管家\n我能根据站内公开资料回答问题、介绍当前页面、带你去栏目，也喜欢摸摸\n这是本地资料问答，还没有接入大模型聊天" : "I’m Yuanbao, your affectionate little cat guide\nI can answer from published site information, introduce this page and guide you to sections — and I enjoy a little pet\nThis is a local information helper, not a connected language-model chat", ["directory"], t);
	if (/摸摸|摸你|抱抱|好可爱|\b(?:pet you|pat you|cuddle|so cute)\b/.test(o)) return R(a ? "蹭蹭你的手，喜欢你陪着我\n再一起逛一会儿，好不好？" : "A little nuzzle for you — I like having you here\nShall we explore a little longer?", ["directory"], t);
	if (/休息|睡觉|唤醒|叫醒|\b(?:rest|sleep|wake)\b/.test(o)) return R(a ? "想让我打个小盹，可以点下面的休息按钮\n叫醒我时，我就回来陪你" : "Use the rest button below when it’s nap time\nWake me whenever you want company again", [], t);
	if (/邮箱|电话|联系方式|怎么联系|联系他|联系高|\b(?:email|phone|contact|reach jason)\b/.test(o)) return se(r, t);
	if (/学历|教育|学校|大学|专业|学位|毕业时间|\b(?:education|university|degree|college|major|graduate|graduation|masters?)\b/.test(o)) return ce(r, t);
	let c = re(r), l = c.filter((e) => [
		e.title,
		e.displayTitle,
		e.subject
	].some((e) => [e.zh, e.en].some((e) => F(e).length >= 2 && o.includes(F(e)))));
	if (l.length) return le(l, t, o);
	if (/woolworths|消费者信任|促销透明|信任方程|swot|tows|poster|report|海报|咨询提案|课程团队|项目|\b(?:projects?|deliverables?|portfolio)\b/.test(o)) return le(c, t, o);
	let u = B(r), d = u.filter((e) => [e.zh.company, e.en.company].some((e) => {
		let t = F(e);
		return t.length >= 2 && (/^[a-z ]+$/.test(t) ? RegExp(`\\b${t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`).test(o) : o.includes(t));
	}));
	if (d.length) return de(d, t);
	if (/实习|工作经历|工作经验|做过什么|\b(?:internships?|work experience|professional experience|previous roles|work history)\b/.test(o)) return de(u, t);
	let f = [
		["travel", /旅行|旅游|\b(?:travel|trips?)\b/],
		["fitness", /健身|减脂|运动|\b(?:fitness|workouts?|exercise)\b/],
		["gaming", /游戏|\b(?:gaming|games?)\b/],
		["study", /留学|\b(?:study abroad|studying abroad)\b/]
	].find(([, e]) => e.test(o))?.[0];
	if (f) {
		let e = r.lifeMedia.find((e) => e.id === f);
		if (!e) return fe(t);
		let n = z(e.photos), i = z(e.videos), o = e.title[t], s = i.slice(0, 5).map((e) => te(e.title[t]));
		return R(a ? `${o}栏目目前公开 ${n.length} 张照片、${i.length} 段视频${s.length ? `\n视频包括：${s.join("、")}` : ""}\n${n.length + i.length ? "进入人生体验后，选择这个分类就能看，我陪你过去" : "这个分类还没有公开素材，先不编故事，等真实记录加入"}` : `${o} currently has ${n.length} published photos and ${i.length} videos${s.length ? `\nVideos include: ${s.join(" · ")}` : ""}\n${n.length + i.length ? "Visit Life and choose this category — I’ll come along" : "There is no published media in this category yet, so I won’t make up a story"}`, ["life"], t);
	}
	return /人生体验|生活|相册|照片|视频|\b(?:life|albums?|photos?|videos?)\b/.test(o) ? ue("life", t, r) : /(?:高瑞徽|jasong|jason gao|gao ruihui|jason)(?:\s*是谁|\s*是什么样的人)|(?:介绍|认识|了解)(?:一下)?(?:他|高瑞徽|\s*jasong|\s*jason)|关于我|好奇心|执行力|勇气|有什么技能|会用\s*ai|做什么的|他能做什么|\b(?:who is jason|introduce jason|tell me about jason|curiosity|courage|strengths?|personality|skills?|use ai|work with ai)\b/.test(o) || /^(?:高瑞徽|jasong|jason gao|gao ruihui|jason)[?？!！\s]*$/.test(o) ? oe(r, t) : /栏目|目录|逛逛|去哪里|\b(?:sections?|directory|explore|where to go|show me around|show me the site|give me a tour|take me around)\b/.test(o) ? ue("directory", t, r) : fe(t);
}
//#endregion
//#region src/new-site/PetContext.tsx
var V = e(), me = (0, j.createContext)(null), he = 6e4, ge = [
	{
		zh: "蹭蹭你的手，圆宝今天也想陪着你",
		en: "A little nuzzle for you — I’m happy to keep you company"
	},
	{
		zh: "再摸一下嘛，然后我们一起去逛逛",
		en: "One more pet, please? Then let’s explore together"
	},
	{
		zh: "收到你的摸摸啦，圆宝把这份开心收好了",
		en: "Pet received — keeping that little bit of happiness with me"
	}
];
function _e({ children: e }) {
	let { active: t, go: r, visible: i, petResting: a, setPetResting: o } = n(), s = m(), [c, l] = (0, j.useState)(!1), [u, d] = (0, j.useState)([]), [f, p] = (0, j.useState)(0), [h, g] = (0, j.useState)(null), _ = (0, j.useRef)(null), v = (0, j.useRef)(null), y = (0, j.useRef)(0), b = (0, j.useRef)(0), [x, S] = (0, j.useState)({
		id: 0,
		action: "sleep"
	}), [C, w] = (0, j.useState)(!1), T = (0, j.useRef)(0), E = (0, j.useRef)(!1), D = (0, j.useRef)(null), O = (0, j.useRef)(Date.now()), k = (0, j.useRef)({
		resting: a,
		visible: i
	});
	k.current = {
		resting: a,
		visible: i
	};
	let A = (0, j.useCallback)(() => {
		D.current !== null && clearTimeout(D.current), D.current = null;
	}, []), M = (0, j.useCallback)((e) => {
		A(), E.current = e !== "sleep", w(E.current), S({
			id: ++T.current,
			action: e
		});
	}, [A]), N = (0, j.useCallback)(function e() {
		if (A(), k.current.resting || !k.current.visible || document.hidden || E.current) return;
		let t = he - (Date.now() - O.current);
		if (t <= 0) {
			k.current.resting = !0, o(!0), M("sleep");
			return;
		}
		D.current = setTimeout(e, t);
	}, [
		M,
		A,
		o
	]), P = (0, j.useCallback)(() => {
		O.current = Date.now(), N();
	}, [N]), ee = (0, j.useCallback)((e) => {
		if (e !== T.current) return;
		let t = E.current;
		E.current = !1, w(!1), t && P();
	}, [P]);
	(0, j.useEffect)(() => (N(), A), [
		a,
		i,
		N,
		A
	]);
	let F = (e, t) => {
		let n = {
			id: ++y.current,
			question: t,
			reply: e
		};
		d((e) => [...e.slice(-11), n]);
	}, I = () => {
		v.current && clearTimeout(v.current), v.current = null, g(null);
	}, te = (e) => {
		I(), g(e), F({
			zh: {
				text: e.zh,
				actions: []
			},
			en: {
				text: e.en,
				actions: []
			}
		}), v.current = setTimeout(I, 3800);
	};
	(0, j.useEffect)(() => (i || I(), () => {
		v.current && clearTimeout(v.current);
	}), [i]);
	let L = (e = !0) => {
		P(), l(!1), e && requestAnimationFrame(() => {
			(_.current?.isConnected ? _.current : document.querySelector(".pet-body-button"))?.focus({ preventScroll: !0 });
		});
	}, ne = () => {
		P(), c || (_.current = document.activeElement instanceof HTMLElement ? document.activeElement : null), l(!0);
	}, R = () => {
		P(), !E.current && a && (o(!1), M("entrance"), te({
			zh: "你来啦，圆宝醒了！今天想一起去哪儿？",
			en: "You’re here! I’m awake — where shall we go together?"
		}));
	}, z = () => {
		P(), o(!0), M("sleep"), te({
			zh: "圆宝先眯一会儿，想我了就叫醒我",
			en: "Time for a little nap — wake me whenever you miss me"
		});
	}, B = () => {
		if (P(), E.current) return;
		if (a) {
			te({
				zh: "轻轻摸一下，圆宝还在休息，醒来再陪你玩",
				en: "A gentle pet while I nap — wake me when you want to play"
			});
			return;
		}
		let e = ++b.current;
		p(e), M("happy"), te(ge[(e - 1) % ge.length]);
	};
	return /* @__PURE__ */ (0, V.jsx)(me.Provider, {
		value: {
			open: c,
			turns: u,
			affection: f,
			toast: h,
			show: ne,
			close: L,
			ask: (e) => {
				P();
				let n = e.trim().slice(0, 400);
				if (n && !a) {
					if (/^(?:圆宝[，, ]*)?(?:休息|去休息|睡觉|睡吧|rest|sleep|take a nap)[！!~～\s]*$/i.test(n)) {
						z();
						return;
					}
					if (/^(?:圆宝[，, ]*)?(?:摸摸|摸摸你|pet|pet you)[！!~～\s]*$/i.test(n)) {
						B();
						return;
					}
					F({
						zh: pe(n, "zh", t, s),
						en: pe(n, "en", t, s)
					}, n);
				}
			},
			introduce: () => {
				P(), !a && F({
					zh: ue(t, "zh", s),
					en: ue(t, "en", s)
				});
			},
			pet: B,
			rest: z,
			wake: R,
			navigate: (e) => {
				P(), L(!1), r(e), requestAnimationFrame(() => {
					let t = document.getElementById(e);
					t && (t.tabIndex = -1, t.focus({ preventScroll: !0 }));
				});
			},
			clear: () => {
				P(), d([]);
			},
			animation: x,
			busy: C,
			treat: () => {
				P(), !(E.current || a) && (M("treat"), te({
					zh: "罐罐收到啦，圆宝把今天的偏爱都分给你",
					en: "A treat for me? You get all my affection today"
				}));
			},
			finishAnimation: ee,
			recordActivity: P
		},
		children: e
	});
}
function ve() {
	let e = (0, j.useContext)(me);
	if (!e) throw Error("PetProvider is missing");
	return e;
}
//#endregion
//#region node_modules/.pnpm/lucide-react@1.46.0_react@19.2.8/node_modules/lucide-react/dist/esm/icons/arrow-down.mjs
var ye = {
	name: "arrow-down",
	size: 24,
	node: [["path", {
		d: "M12 5v14",
		key: "s699le"
	}], ["path", {
		d: "m19 12-7 7-7-7",
		key: "1idqje"
	}]]
};
ye.node;
var be = p(ye), xe = {
	name: "arrow-left",
	size: 24,
	node: [["path", {
		d: "m12 19-7-7 7-7",
		key: "1l729n"
	}], ["path", {
		d: "M19 12H5",
		key: "x3x0zl"
	}]]
};
xe.node;
var Se = p(xe), Ce = {
	name: "arrow-right",
	size: 24,
	node: [["path", {
		d: "M5 12h14",
		key: "1ays0h"
	}], ["path", {
		d: "m12 5 7 7-7 7",
		key: "xquz4c"
	}]]
};
Ce.node;
var we = p(Ce), Te = {
	name: "arrow-up",
	size: 24,
	node: [["path", {
		d: "m5 12 7-7 7 7",
		key: "hav0vg"
	}], ["path", {
		d: "M12 19V5",
		key: "x0mq9r"
	}]]
};
Te.node;
var Ee = p(Te), De = {
	name: "check",
	size: 24,
	node: [["path", {
		d: "M20 6 9 17l-5-5",
		key: "1gmf2c"
	}]]
};
De.node;
var Oe = p(De), ke = {
	name: "compass",
	size: 24,
	node: [["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}], ["path", {
		d: "m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",
		key: "9ktpf1"
	}]]
};
ke.node;
var Ae = p(ke), je = {
	name: "copy",
	size: 24,
	node: [["rect", {
		width: "14",
		height: "14",
		x: "8",
		y: "8",
		rx: "2",
		ry: "2",
		key: "17jyea"
	}], ["path", {
		d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
		key: "zix9uf"
	}]]
};
je.node;
var Me = p(je), Ne = {
	name: "eye-off",
	size: 24,
	node: [
		["path", {
			d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
			key: "ct8e1f"
		}],
		["path", {
			d: "M14.084 14.158a3 3 0 0 1-4.242-4.242",
			key: "151rxh"
		}],
		["path", {
			d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
			key: "13bj9a"
		}],
		["path", {
			d: "m2 2 20 20",
			key: "1ooewy"
		}]
	]
};
Ne.node;
var Pe = p(Ne), Fe = {
	name: "heart",
	size: 24,
	node: [["path", {
		d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
		key: "mvr1a0"
	}]]
};
Fe.node;
var Ie = p(Fe), Le = {
	name: "id-card",
	size: 24,
	node: [
		["path", {
			d: "M13 19a4 4 0 00-8 0",
			key: "cugzd5"
		}],
		["path", {
			d: "M16 10h2",
			key: "8sgtl7"
		}],
		["path", {
			d: "M16 14h2",
			key: "epxaof"
		}],
		["circle", {
			cx: "9",
			cy: "12",
			r: "3",
			key: "u3jwor"
		}],
		["rect", {
			x: "2",
			y: "5",
			width: "20",
			height: "14",
			rx: "2",
			key: "qneu4z"
		}]
	]
};
Le.node;
var Re = p(Le), ze = {
	name: "images",
	size: 24,
	node: [
		["path", {
			d: "m22 11-1.296-1.296a2.4 2.4 0 0 0-3.408 0L11 16",
			key: "9kzy35"
		}],
		["path", {
			d: "M4 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2",
			key: "1t0f0t"
		}],
		["circle", {
			cx: "13",
			cy: "7",
			r: "1",
			fill: "currentColor",
			key: "1obus6"
		}],
		["rect", {
			x: "8",
			y: "2",
			width: "14",
			height: "14",
			rx: "2",
			key: "1gvhby"
		}]
	]
};
ze.node;
var Be = p(ze), Ve = {
	name: "mail",
	size: 24,
	node: [["path", {
		d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",
		key: "132q7q"
	}], ["rect", {
		x: "2",
		y: "4",
		width: "20",
		height: "16",
		rx: "2",
		key: "izxlao"
	}]]
};
Ve.node;
var He = p(Ve), Ue = {
	name: "menu",
	size: 24,
	node: [
		["path", {
			d: "M4 5h16",
			key: "1tepv9"
		}],
		["path", {
			d: "M4 12h16",
			key: "1lakjw"
		}],
		["path", {
			d: "M4 19h16",
			key: "1djgab"
		}]
	]
};
Ue.node;
var We = p(Ue), Ge = {
	name: "moon",
	size: 24,
	node: [["path", {
		d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
		key: "kfwtm"
	}]]
};
Ge.node;
var Ke = p(Ge), qe = {
	name: "pause",
	size: 24,
	node: [["rect", {
		x: "14",
		y: "3",
		width: "5",
		height: "18",
		rx: "1",
		key: "kaeet6"
	}], ["rect", {
		x: "5",
		y: "3",
		width: "5",
		height: "18",
		rx: "1",
		key: "1wsw3u"
	}]]
};
qe.node;
var Je = p(qe), Ye = {
	name: "paw-print",
	size: 24,
	node: [
		["circle", {
			cx: "11",
			cy: "4",
			r: "2",
			key: "vol9p0"
		}],
		["circle", {
			cx: "18",
			cy: "8",
			r: "2",
			key: "17gozi"
		}],
		["circle", {
			cx: "20",
			cy: "16",
			r: "2",
			key: "1v9bxh"
		}],
		["path", {
			d: "M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z",
			key: "1ydw1z"
		}]
	]
};
Ye.node;
var Xe = p(Ye), Ze = {
	name: "phone",
	size: 24,
	node: [["path", {
		d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
		key: "9njp5v"
	}]]
};
Ze.node;
var Qe = p(Ze), $e = {
	name: "play",
	size: 24,
	node: [["path", {
		d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
		key: "10ikf1"
	}]]
};
$e.node;
var et = p($e), tt = {
	name: "plus",
	size: 24,
	node: [["path", {
		d: "M5 12h14",
		key: "1ays0h"
	}], ["path", {
		d: "M12 5v14",
		key: "s699le"
	}]]
};
tt.node;
var nt = p(tt), rt = {
	name: "volume-1",
	size: 24,
	node: [["path", {
		d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
		key: "uqj9uw"
	}], ["path", {
		d: "M16 9a5 5 0 0 1 0 6",
		key: "1q6k2b"
	}]]
};
rt.node;
var it = p(rt), at = {
	name: "volume-2",
	size: 24,
	node: [
		["path", {
			d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
			key: "uqj9uw"
		}],
		["path", {
			d: "M16 9a5 5 0 0 1 0 6",
			key: "1q6k2b"
		}],
		["path", {
			d: "M19.364 18.364a9 9 0 0 0 0-12.728",
			key: "ijwkga"
		}]
	]
};
at.node;
var ot = p(at);
//#endregion
//#region node_modules/.pnpm/gsap@3.15.0/node_modules/gsap/gsap-core.js
function st(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function ct(e, t) {
	e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
}
var lt = {
	autoSleep: 120,
	force3D: "auto",
	nullTargetWarn: 1,
	units: { lineHeight: "" }
}, ut = {
	duration: .5,
	overwrite: !1,
	delay: 0
}, dt, ft, H, pt = 1e8, U = 1 / pt, mt = Math.PI * 2, ht = mt / 4, gt = 0, _t = Math.sqrt, vt = Math.cos, yt = Math.sin, bt = function(e) {
	return typeof e == "string";
}, xt = function(e) {
	return typeof e == "function";
}, St = function(e) {
	return typeof e == "number";
}, Ct = function(e) {
	return e === void 0;
}, wt = function(e) {
	return typeof e == "object";
}, Tt = function(e) {
	return e !== !1;
}, Et = function() {
	return typeof window < "u";
}, Dt = function(e) {
	return xt(e) || bt(e);
}, Ot = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {}, kt = Array.isArray, At = /random\([^)]+\)/g, jt = /,\s*/g, Mt = /(?:-?\.?\d|\.)+/gi, Nt = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, Pt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Ft = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, It = /[+-]=-?[.\d]+/, Lt = /[^,'"\[\]\s]+/gi, Rt = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, zt, Bt, Vt, Ht, Ut = {}, Wt = {}, Gt, Kt = function(e) {
	return (Wt = Cn(e, Ut)) && zi;
}, qt = function(e, t) {
	return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()");
}, Jt = function(e, t) {
	return !t && console.warn(e);
}, Yt = function(e, t) {
	return e && (Ut[e] = t) && Wt && (Wt[e] = t) || Ut;
}, Xt = function() {
	return 0;
}, Zt = {
	suppressEvents: !0,
	isStart: !0,
	kill: !1
}, Qt = {
	suppressEvents: !0,
	kill: !1
}, $t = { suppressEvents: !0 }, en = {}, tn = [], nn = {}, rn, an = {}, on = {}, sn = 30, cn = [], ln = "", un = function(e) {
	var t = e[0], n, r;
	if (wt(t) || xt(t) || (e = [e]), !(n = (t._gsap || {}).harness)) {
		for (r = cn.length; r-- && !cn[r].targetTest(t););
		n = cn[r];
	}
	for (r = e.length; r--;) e[r] && (e[r]._gsap || (e[r]._gsap = new Xr(e[r], n))) || e.splice(r, 1);
	return e;
}, dn = function(e) {
	return e._gsap || un(or(e))[0]._gsap;
}, fn = function(e, t, n) {
	return (n = e[t]) && xt(n) ? e[t]() : Ct(n) && e.getAttribute && e.getAttribute(t) || n;
}, pn = function(e, t) {
	return (e = e.split(",")).forEach(t) || e;
}, W = function(e) {
	return Math.round(e * 1e5) / 1e5 || 0;
}, G = function(e) {
	return Math.round(e * 1e7) / 1e7 || 0;
}, mn = function(e, t) {
	var n = t.charAt(0), r = parseFloat(t.substr(2));
	return e = parseFloat(e), n === "+" ? e + r : n === "-" ? e - r : n === "*" ? e * r : e / r;
}, hn = function(e, t) {
	for (var n = t.length, r = 0; e.indexOf(t[r]) < 0 && ++r < n;);
	return r < n;
}, gn = function() {
	var e = tn.length, t = tn.slice(0), n, r;
	for (nn = {}, tn.length = 0, n = 0; n < e; n++) r = t[n], r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
}, _n = function(e) {
	return !!(e._initted || e._startAt || e.add);
}, vn = function(e, t, n, r) {
	tn.length && !ft && gn(), e.render(t, n, r || !!(ft && t < 0 && _n(e))), tn.length && !ft && gn();
}, yn = function(e) {
	var t = parseFloat(e);
	return (t || t === 0) && (e + "").match(Lt).length < 2 ? t : bt(e) ? e.trim() : e;
}, bn = function(e) {
	return e;
}, xn = function(e, t) {
	for (var n in t) n in e || (e[n] = t[n]);
	return e;
}, Sn = function(e) {
	return function(t, n) {
		for (var r in n) r in t || r === "duration" && e || r === "ease" || (t[r] = n[r]);
	};
}, Cn = function(e, t) {
	for (var n in t) e[n] = t[n];
	return e;
}, wn = function e(t, n) {
	for (var r in n) r !== "__proto__" && r !== "constructor" && r !== "prototype" && (t[r] = wt(n[r]) ? e(t[r] || (t[r] = {}), n[r]) : n[r]);
	return t;
}, Tn = function(e, t) {
	var n = {}, r;
	for (r in e) r in t || (n[r] = e[r]);
	return n;
}, En = function(e) {
	var t = e.parent || zt, n = e.keyframes ? Sn(kt(e.keyframes)) : xn;
	if (Tt(e.inherit)) for (; t;) n(e, t.vars.defaults), t = t.parent || t._dp;
	return e;
}, Dn = function(e, t) {
	for (var n = e.length, r = n === t.length; r && n-- && e[n] === t[n];);
	return n < 0;
}, On = function(e, t, n, r, i) {
	n === void 0 && (n = "_first"), r === void 0 && (r = "_last");
	var a = e[r], o;
	if (i) for (o = t[i]; a && a[i] > o;) a = a._prev;
	return a ? (t._next = a._next, a._next = t) : (t._next = e[n], e[n] = t), t._next ? t._next._prev = t : e[r] = t, t._prev = a, t.parent = t._dp = e, t;
}, kn = function(e, t, n, r) {
	n === void 0 && (n = "_first"), r === void 0 && (r = "_last");
	var i = t._prev, a = t._next;
	i ? i._next = a : e[n] === t && (e[n] = a), a ? a._prev = i : e[r] === t && (e[r] = i), t._next = t._prev = t.parent = null;
}, An = function(e, t) {
	e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0;
}, jn = function(e, t) {
	if (e && (!t || t._end > e._dur || t._start < 0)) for (var n = e; n;) n._dirty = 1, n = n.parent;
	return e;
}, Mn = function(e) {
	for (var t = e.parent; t && t.parent;) t._dirty = 1, t.totalDuration(), t = t.parent;
	return e;
}, Nn = function(e, t, n, r) {
	return e._startAt && (ft ? e._startAt.revert(Qt) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, r));
}, Pn = function e(t) {
	return !t || t._ts && e(t.parent);
}, Fn = function(e) {
	return e._repeat ? In(e._tTime, e = e.duration() + e._rDelay) * e : 0;
}, In = function(e, t) {
	var n = Math.floor(e = G(e / t));
	return e && n === e ? n - 1 : n;
}, Ln = function(e, t) {
	return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur);
}, Rn = function(e) {
	return e._end = G(e._start + (e._tDur / Math.abs(e._ts || e._rts || U) || 0));
}, zn = function(e, t) {
	var n = e._dp;
	return n && n.smoothChildTiming && e._ts && (e._start = G(n._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)), Rn(e), n._dirty || jn(n, e)), e;
}, Bn = function(e, t) {
	var n;
	if ((t._time || !t._dur && t._initted || t._start < e._time && (t._dur || !t.add)) && (n = Ln(e.rawTime(), t), (!t._dur || er(0, t.totalDuration(), n) - t._tTime > U) && t.render(n, !0)), jn(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
		if (e._dur < e.duration()) for (n = e; n._dp;) n.rawTime() >= 0 && n.totalTime(n._tTime), n = n._dp;
		e._zTime = -U;
	}
}, Vn = function(e, t, n, r) {
	return t.parent && An(t), t._start = G((St(n) ? n : n || e !== zt ? Zn(e, n, t) : e._time) + t._delay), t._end = G(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)), On(e, t, "_first", "_last", e._sort ? "_start" : 0), Gn(t) || (e._recent = t), r || Bn(e, t), e._ts < 0 && zn(e, e._tTime), e;
}, Hn = function(e, t) {
	return (Ut.ScrollTrigger || qt("scrollTrigger", t)) && Ut.ScrollTrigger.create(t, e);
}, Un = function(e, t, n, r, i) {
	if (ai(e, t, i), !e._initted) return 1;
	if (!n && e._pt && !ft && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && rn !== Lr.frame) return tn.push(e), e._lazy = [i, r], 1;
}, Wn = function e(t) {
	var n = t.parent;
	return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || e(n));
}, Gn = function(e) {
	var t = e.data;
	return t === "isFromStart" || t === "isStart";
}, Kn = function(e, t, n, r) {
	var i = e.ratio, a = t < 0 || !t && (!e._start && Wn(e) && (e._initted || !Gn(e)) || (e._ts < 0 || e._dp._ts < 0) && !Gn(e)) ? 0 : 1, o = e._rDelay, s = 0, c, l, u;
	if (o && e._repeat && (s = er(0, e._tDur, t), l = In(s, o), e._yoyo && l & 1 && (a = 1 - a), l !== In(e._tTime, o) && (i = 1 - a, e.vars.repeatRefresh && e._initted && e.invalidate())), a !== i || ft || r || e._zTime === U || !t && e._zTime) {
		if (!e._initted && Un(e, t, r, n, s)) return;
		for (u = e._zTime, e._zTime = t || (n ? U : 0), n ||= t && !u, e.ratio = a, e._from && (a = 1 - a), e._time = 0, e._tTime = s, c = e._pt; c;) c.r(a, c.d), c = c._next;
		t < 0 && Nn(e, t, n, !0), e._onUpdate && !n && Cr(e, "onUpdate"), s && e._repeat && !n && e.parent && Cr(e, "onRepeat"), (t >= e._tDur || t < 0) && e.ratio === a && (a && An(e, 1), !n && !ft && (Cr(e, a ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()));
	} else e._zTime ||= t;
}, qn = function(e, t, n) {
	var r;
	if (n > t) for (r = e._first; r && r._start <= n;) {
		if (r.data === "isPause" && r._start > t) return r;
		r = r._next;
	}
	else for (r = e._last; r && r._start >= n;) {
		if (r.data === "isPause" && r._start < t) return r;
		r = r._prev;
	}
}, Jn = function(e, t, n, r) {
	var i = e._repeat, a = G(t) || 0, o = e._tTime / e._tDur;
	return o && !r && (e._time *= a / e._dur), e._dur = a, e._tDur = i ? i < 0 ? 1e10 : G(a * (i + 1) + e._rDelay * i) : a, o > 0 && !r && zn(e, e._tTime = e._tDur * o), e.parent && Rn(e), n || jn(e.parent, e), e;
}, Yn = function(e) {
	return e instanceof Qr ? jn(e) : Jn(e, e._dur);
}, Xn = {
	_start: 0,
	endTime: Xt,
	totalDuration: Xt
}, Zn = function e(t, n, r) {
	var i = t.labels, a = t._recent || Xn, o = t.duration() >= pt ? a.endTime(!1) : t._dur, s, c, l;
	return bt(n) && (isNaN(n) || n in i) ? (c = n.charAt(0), l = n.substr(-1) === "%", s = n.indexOf("="), c === "<" || c === ">" ? (s >= 0 && (n = n.replace(/=/, "")), (c === "<" ? a._start : a.endTime(a._repeat >= 0)) + (parseFloat(n.substr(1)) || 0) * (l ? (s < 0 ? a : r).totalDuration() / 100 : 1)) : s < 0 ? (n in i || (i[n] = o), i[n]) : (c = parseFloat(n.charAt(s - 1) + n.substr(s + 1)), l && r && (c = c / 100 * (kt(r) ? r[0] : r).totalDuration()), s > 1 ? e(t, n.substr(0, s - 1), r) + c : o + c)) : n == null ? o : +n;
}, Qn = function(e, t, n) {
	var r = St(t[1]), i = (r ? 2 : 1) + (e < 2 ? 0 : 1), a = t[i], o, s;
	if (r && (a.duration = t[1]), a.parent = n, e) {
		for (o = a, s = n; s && !("immediateRender" in o);) o = s.vars.defaults || {}, s = Tt(s.vars.inherit) && s.parent;
		a.immediateRender = Tt(o.immediateRender), e < 2 ? a.runBackwards = 1 : a.startAt = t[i - 1];
	}
	return new fi(t[0], a, t[i + 1]);
}, $n = function(e, t) {
	return e || e === 0 ? t(e) : t;
}, er = function(e, t, n) {
	return n < e ? e : n > t ? t : n;
}, tr = function(e, t) {
	return !bt(e) || !(t = Rt.exec(e)) ? "" : t[1];
}, nr = function(e, t, n) {
	return $n(n, function(n) {
		return er(e, t, n);
	});
}, rr = [].slice, ir = function(e, t) {
	return e && wt(e) && "length" in e && (!t && !e.length || e.length - 1 in e && wt(e[0])) && !e.nodeType && e !== Bt;
}, ar = function(e, t, n) {
	return n === void 0 && (n = []), e.forEach(function(e) {
		var r;
		return bt(e) && !t || ir(e, 1) ? (r = n).push.apply(r, or(e)) : n.push(e);
	}) || n;
}, or = function(e, t, n) {
	return H && !t && H.selector ? H.selector(e) : bt(e) && !n && (Vt || !Rr()) ? rr.call((t || Ht).querySelectorAll(e), 0) : kt(e) ? ar(e, n) : ir(e) ? rr.call(e, 0) : e ? [e] : [];
}, sr = function(e) {
	return e = or(e)[0] || Jt("Invalid scope") || {}, function(t) {
		var n = e.current || e.nativeElement || e;
		return or(t, n.querySelectorAll ? n : n === e ? Jt("Invalid scope") || Ht.createElement("div") : e);
	};
}, cr = function(e) {
	return e.sort(function() {
		return .5 - Math.random();
	});
}, lr = function(e) {
	if (xt(e)) return e;
	var t = wt(e) ? e : { each: e }, n = Gr(t.ease), r = t.from || 0, i = parseFloat(t.base) || 0, a = {}, o = r > 0 && r < 1, s = isNaN(r) || o, c = t.axis, l = r, u = r;
	return bt(r) ? l = u = {
		center: .5,
		edges: .5,
		end: 1
	}[r] || 0 : !o && s && (l = r[0], u = r[1]), function(e, o, d) {
		var f = (d || t).length, p = a[f], m, h, g, _, v, y, b, x, S;
		if (!p) {
			if (S = t.grid === "auto" ? 0 : (t.grid || [1, pt])[1], !S) {
				for (b = -pt; b < (b = d[S++].getBoundingClientRect().left) && S < f;);
				S < f && S--;
			}
			for (p = a[f] = [], m = s ? Math.min(S, f) * l - .5 : r % S, h = S === pt ? 0 : s ? f * u / S - .5 : r / S | 0, b = 0, x = pt, y = 0; y < f; y++) g = y % S - m, _ = h - (y / S | 0), p[y] = v = c ? Math.abs(c === "y" ? _ : g) : _t(g * g + _ * _), v > b && (b = v), v < x && (x = v);
			r === "random" && cr(p), p.max = b - x, p.min = x, p.v = f = (parseFloat(t.amount) || parseFloat(t.each) * (S > f ? f - 1 : c ? c === "y" ? f / S : S : Math.max(S, f / S)) || 0) * (r === "edges" ? -1 : 1), p.b = f < 0 ? i - f : i, p.u = tr(t.amount || t.each) || 0, n = n && f < 0 ? Wr(n) : n;
		}
		return f = (p[e] - p.min) / p.max || 0, G(p.b + (n ? n(f) : f) * p.v) + p.u;
	};
}, ur = function(e) {
	var t = 10 ** ((e + "").split(".")[1] || "").length;
	return function(n) {
		var r = G(Math.round(parseFloat(n) / e) * e * t);
		return (r - r % 1) / t + (St(n) ? 0 : tr(n));
	};
}, dr = function(e, t) {
	var n = kt(e), r, i;
	return !n && wt(e) && (r = n = e.radius || pt, e.values ? (e = or(e.values), (i = !St(e[0])) && (r *= r)) : e = ur(e.increment)), $n(t, n ? xt(e) ? function(t) {
		return i = e(t), Math.abs(i - t) <= r ? i : t;
	} : function(t) {
		for (var n = parseFloat(i ? t.x : t), a = parseFloat(i ? t.y : 0), o = pt, s = 0, c = e.length, l, u; c--;) i ? (l = e[c].x - n, u = e[c].y - a, l = l * l + u * u) : l = Math.abs(e[c] - n), l < o && (o = l, s = c);
		return s = !r || o <= r ? e[s] : t, i || s === t || St(t) ? s : s + tr(t);
	} : ur(e));
}, fr = function(e, t, n, r) {
	return $n(kt(e) ? !t : n === !0 ? !!(n = 0) : !r, function() {
		return kt(e) ? e[~~(Math.random() * e.length)] : (n ||= 1e-5) && (r = n < 1 ? 10 ** ((n + "").length - 2) : 1) && Math.floor(Math.round((e - n / 2 + Math.random() * (t - e + n * .99)) / n) * n * r) / r;
	});
}, pr = function() {
	var e = [...arguments];
	return function(t) {
		return e.reduce(function(e, t) {
			return t(e);
		}, t);
	};
}, mr = function(e, t) {
	return function(n) {
		return e(parseFloat(n)) + (t || tr(n));
	};
}, hr = function(e, t, n) {
	return br(e, t, 0, 1, n);
}, gr = function(e, t, n) {
	return $n(n, function(n) {
		return e[~~t(n)];
	});
}, _r = function e(t, n, r) {
	var i = n - t;
	return kt(t) ? gr(t, e(0, t.length), n) : $n(r, function(e) {
		return (i + (e - t) % i) % i + t;
	});
}, vr = function e(t, n, r) {
	var i = n - t, a = i * 2;
	return kt(t) ? gr(t, e(0, t.length - 1), n) : $n(r, function(e) {
		return e = (a + (e - t) % a) % a || 0, t + (e > i ? a - e : e);
	});
}, yr = function(e) {
	return e.replace(At, function(e) {
		var t = e.indexOf("[") + 1, n = e.substring(t || 7, t ? e.indexOf("]") : e.length - 1).split(jt);
		return fr(t ? n : +n[0], t ? 0 : +n[1], +n[2] || 1e-5);
	});
}, br = function(e, t, n, r, i) {
	var a = t - e, o = r - n;
	return $n(i, function(t) {
		return n + ((t - e) / a * o || 0);
	});
}, xr = function e(t, n, r, i) {
	var a = isNaN(t + n) ? 0 : function(e) {
		return (1 - e) * t + e * n;
	};
	if (!a) {
		var o = bt(t), s = {}, c, l, u, d, f;
		if (r === !0 && (i = 1) && (r = null), o) t = { p: t }, n = { p: n };
		else if (kt(t) && !kt(n)) {
			for (u = [], d = t.length, f = d - 2, l = 1; l < d; l++) u.push(e(t[l - 1], t[l]));
			d--, a = function(e) {
				e *= d;
				var t = Math.min(f, ~~e);
				return u[t](e - t);
			}, r = n;
		} else i || (t = Cn(kt(t) ? [] : {}, t));
		if (!u) {
			for (c in n) ei.call(s, t, c, "get", n[c]);
			a = function(e) {
				return xi(e, s) || (o ? t.p : t);
			};
		}
	}
	return $n(r, a);
}, Sr = function(e, t, n) {
	var r = e.labels, i = pt, a, o, s;
	for (a in r) o = r[a] - t, o < 0 == !!n && o && i > (o = Math.abs(o)) && (s = a, i = o);
	return s;
}, Cr = function(e, t, n) {
	var r = e.vars, i = r[t], a = H, o = e._ctx, s, c, l;
	if (i) return s = r[t + "Params"], c = r.callbackScope || e, n && tn.length && gn(), o && (H = o), l = s ? i.apply(c, s) : i.call(c), H = a, l;
}, wr = function(e) {
	return An(e), e.scrollTrigger && e.scrollTrigger.kill(!!ft), e.progress() < 1 && Cr(e, "onInterrupt"), e;
}, Tr, Er = [], Dr = function(e) {
	if (e) {
		if (e = !e.name && e.default || e, Et() || e.headless) {
			var t = e.name, n = xt(e), r = t && !n && e.init ? function() {
				this._props = [];
			} : e, i = {
				init: Xt,
				render: xi,
				add: ei,
				kill: Ci,
				modifier: Si,
				rawVars: 0
			}, a = {
				targetTest: 0,
				get: 0,
				getSetter: _i,
				aliases: {},
				register: 0
			};
			if (Rr(), e !== r) {
				if (an[t]) return;
				xn(r, xn(Tn(e, i), a)), Cn(r.prototype, Cn(i, Tn(e, a))), an[r.prop = t] = r, e.targetTest && (cn.push(r), en[t] = 1), t = (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin";
			}
			Yt(t, r), e.register && e.register(zi, r, J);
		} else Er.push(e);
	}
}, K = 255, Or = {
	aqua: [
		0,
		K,
		K
	],
	lime: [
		0,
		K,
		0
	],
	silver: [
		192,
		192,
		192
	],
	black: [
		0,
		0,
		0
	],
	maroon: [
		128,
		0,
		0
	],
	teal: [
		0,
		128,
		128
	],
	blue: [
		0,
		0,
		K
	],
	navy: [
		0,
		0,
		128
	],
	white: [
		K,
		K,
		K
	],
	olive: [
		128,
		128,
		0
	],
	yellow: [
		K,
		K,
		0
	],
	orange: [
		K,
		165,
		0
	],
	gray: [
		128,
		128,
		128
	],
	purple: [
		128,
		0,
		128
	],
	green: [
		0,
		128,
		0
	],
	red: [
		K,
		0,
		0
	],
	pink: [
		K,
		192,
		203
	],
	cyan: [
		0,
		K,
		K
	],
	transparent: [
		K,
		K,
		K,
		0
	]
}, kr = function(e, t, n) {
	return e += e < 0 ? 1 : e > 1 ? -1 : 0, (e * 6 < 1 ? t + (n - t) * e * 6 : e < .5 ? n : e * 3 < 2 ? t + (n - t) * (2 / 3 - e) * 6 : t) * K + .5 | 0;
}, Ar = function(e, t, n) {
	var r = e ? St(e) ? [
		e >> 16,
		e >> 8 & K,
		e & K
	] : 0 : Or.black, i, a, o, s, c, l, u, d, f, p;
	if (!r) {
		if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), Or[e]) r = Or[e];
		else if (e.charAt(0) === "#") {
			if (e.length < 6 && (i = e.charAt(1), a = e.charAt(2), o = e.charAt(3), e = "#" + i + i + a + a + o + o + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")), e.length === 9) return r = parseInt(e.substr(1, 6), 16), [
				r >> 16,
				r >> 8 & K,
				r & K,
				parseInt(e.substr(7), 16) / 255
			];
			e = parseInt(e.substr(1), 16), r = [
				e >> 16,
				e >> 8 & K,
				e & K
			];
		} else if (e.substr(0, 3) === "hsl") {
			if (r = p = e.match(Mt), !t) s = r[0] % 360 / 360, c = r[1] / 100, l = r[2] / 100, a = l <= .5 ? l * (c + 1) : l + c - l * c, i = l * 2 - a, r.length > 3 && (r[3] *= 1), r[0] = kr(s + 1 / 3, i, a), r[1] = kr(s, i, a), r[2] = kr(s - 1 / 3, i, a);
			else if (~e.indexOf("=")) return r = e.match(Nt), n && r.length < 4 && (r[3] = 1), r;
		} else r = e.match(Mt) || Or.transparent;
		r = r.map(Number);
	}
	return t && !p && (i = r[0] / K, a = r[1] / K, o = r[2] / K, u = Math.max(i, a, o), d = Math.min(i, a, o), l = (u + d) / 2, u === d ? s = c = 0 : (f = u - d, c = l > .5 ? f / (2 - u - d) : f / (u + d), s = u === i ? (a - o) / f + (a < o ? 6 : 0) : u === a ? (o - i) / f + 2 : (i - a) / f + 4, s *= 60), r[0] = ~~(s + .5), r[1] = ~~(c * 100 + .5), r[2] = ~~(l * 100 + .5)), n && r.length < 4 && (r[3] = 1), r;
}, jr = function(e) {
	var t = [], n = [], r = -1;
	return e.split(Nr).forEach(function(e) {
		var i = e.match(Pt) || [];
		t.push.apply(t, i), n.push(r += i.length + 1);
	}), t.c = n, t;
}, Mr = function(e, t, n) {
	var r = "", i = (e + r).match(Nr), a = t ? "hsla(" : "rgba(", o = 0, s, c, l, u;
	if (!i) return e;
	if (i = i.map(function(e) {
		return (e = Ar(e, t, 1)) && a + (t ? e[0] + "," + e[1] + "%," + e[2] + "%," + e[3] : e.join(",")) + ")";
	}), n && (l = jr(e), s = n.c, s.join(r) !== l.c.join(r))) for (c = e.replace(Nr, "1").split(Pt), u = c.length - 1; o < u; o++) r += c[o] + (~s.indexOf(o) ? i.shift() || a + "0,0,0,0)" : (l.length ? l : i.length ? i : n).shift());
	if (!c) for (c = e.split(Nr), u = c.length - 1; o < u; o++) r += c[o] + i[o];
	return r + c[u];
}, Nr = function() {
	var e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", t;
	for (t in Or) e += "|" + t + "\\b";
	return RegExp(e + ")", "gi");
}(), Pr = /hsl[a]?\(/, Fr = function(e) {
	var t = e.join(" "), n;
	if (Nr.lastIndex = 0, Nr.test(t)) return n = Pr.test(t), e[1] = Mr(e[1], n), e[0] = Mr(e[0], n, jr(e[1])), !0;
}, Ir, Lr = function() {
	var e = Date.now, t = 500, n = 33, r = e(), i = r, a = 1e3 / 240, o = a, s = [], c, l, u, d, f, p, m = function u(m) {
		var h = e() - i, g = m === !0, _, v, y, b;
		if ((h > t || h < 0) && (r += h - n), i += h, y = i - r, _ = y - o, (_ > 0 || g) && (b = ++d.frame, f = y - d.time * 1e3, d.time = y /= 1e3, o += _ + (_ >= a ? 4 : a - _), v = 1), g || (c = l(u)), v) for (p = 0; p < s.length; p++) s[p](y, f, b, m);
	};
	return d = {
		time: 0,
		frame: 0,
		tick: function() {
			m(!0);
		},
		deltaRatio: function(e) {
			return f / (1e3 / (e || 60));
		},
		wake: function() {
			Gt && (!Vt && Et() && (Bt = Vt = window, Ht = Bt.document || {}, Ut.gsap = zi, (Bt.gsapVersions || (Bt.gsapVersions = [])).push(zi.version), Kt(Wt || Bt.GreenSockGlobals || !Bt.gsap && Bt || {}), Er.forEach(Dr)), u = typeof requestAnimationFrame < "u" && requestAnimationFrame, c && d.sleep(), l = u || function(e) {
				return setTimeout(e, o - d.time * 1e3 + 1 | 0);
			}, Ir = 1, m(2));
		},
		sleep: function() {
			(u ? cancelAnimationFrame : clearTimeout)(c), Ir = 0, l = Xt;
		},
		lagSmoothing: function(e, r) {
			t = e || Infinity, n = Math.min(r || 33, t);
		},
		fps: function(e) {
			a = 1e3 / (e || 240), o = d.time * 1e3 + a;
		},
		add: function(e, t, n) {
			var r = t ? function(t, n, i, a) {
				e(t, n, i, a), d.remove(r);
			} : e;
			return d.remove(e), s[n ? "unshift" : "push"](r), Rr(), r;
		},
		remove: function(e, t) {
			~(t = s.indexOf(e)) && s.splice(t, 1) && p >= t && p--;
		},
		_listeners: s
	}, d;
}(), Rr = function() {
	return !Ir && Lr.wake();
}, q = {}, zr = /^[\d.\-M][\d.\-,\s]/, Br = /["']/g, Vr = function(e) {
	for (var t = {}, n = e.substr(1, e.length - 3).split(":"), r = n[0], i = 1, a = n.length, o, s, c; i < a; i++) s = n[i], o = i === a - 1 ? s.length : s.lastIndexOf(","), c = s.substr(0, o), t[r] = isNaN(c) ? c.replace(Br, "").trim() : +c, r = s.substr(o + 1).trim();
	return t;
}, Hr = function(e) {
	var t = e.indexOf("(") + 1, n = e.indexOf(")"), r = e.indexOf("(", t);
	return e.substring(t, ~r && r < n ? e.indexOf(")", n + 1) : n);
}, Ur = function(e) {
	var t = (e + "").split("("), n = q[t[0]];
	return n && t.length > 1 && n.config ? n.config.apply(null, ~e.indexOf("{") ? [Vr(t[1])] : Hr(e).split(",").map(yn)) : q._CE && zr.test(e) ? q._CE("", e) : n;
}, Wr = function(e) {
	return function(t) {
		return 1 - e(1 - t);
	};
}, Gr = function(e, t) {
	return e && (xt(e) ? e : q[e] || Ur(e)) || t;
}, Kr = function(e, t, n, r) {
	n === void 0 && (n = function(e) {
		return 1 - t(1 - e);
	}), r === void 0 && (r = function(e) {
		return e < .5 ? t(e * 2) / 2 : 1 - t((1 - e) * 2) / 2;
	});
	var i = {
		easeIn: t,
		easeOut: n,
		easeInOut: r
	}, a;
	return pn(e, function(e) {
		for (var t in q[e] = Ut[e] = i, q[a = e.toLowerCase()] = n, i) q[a + (t === "easeIn" ? ".in" : t === "easeOut" ? ".out" : ".inOut")] = q[e + "." + t] = i[t];
	}), i;
}, qr = function(e) {
	return function(t) {
		return t < .5 ? (1 - e(1 - t * 2)) / 2 : .5 + e((t - .5) * 2) / 2;
	};
}, Jr = function e(t, n, r) {
	var i = n >= 1 ? n : 1, a = (r || (t ? .3 : .45)) / (n < 1 ? n : 1), o = a / mt * (Math.asin(1 / i) || 0), s = function(e) {
		return e === 1 ? 1 : i * 2 ** (-10 * e) * yt((e - o) * a) + 1;
	}, c = t === "out" ? s : t === "in" ? function(e) {
		return 1 - s(1 - e);
	} : qr(s);
	return a = mt / a, c.config = function(n, r) {
		return e(t, n, r);
	}, c;
}, Yr = function e(t, n) {
	n === void 0 && (n = 1.70158);
	var r = function(e) {
		return e ? --e * e * ((n + 1) * e + n) + 1 : 0;
	}, i = t === "out" ? r : t === "in" ? function(e) {
		return 1 - r(1 - e);
	} : qr(r);
	return i.config = function(n) {
		return e(t, n);
	}, i;
};
pn("Linear,Quad,Cubic,Quart,Quint,Strong", function(e, t) {
	var n = t < 5 ? t + 1 : t;
	Kr(e + ",Power" + (n - 1), t ? function(e) {
		return e ** +n;
	} : function(e) {
		return e;
	}, function(e) {
		return 1 - (1 - e) ** n;
	}, function(e) {
		return e < .5 ? (e * 2) ** n / 2 : 1 - ((1 - e) * 2) ** n / 2;
	});
}), q.Linear.easeNone = q.none = q.Linear.easeIn, Kr("Elastic", Jr("in"), Jr("out"), Jr()), (function(e, t) {
	var n = 1 / t, r = 2 * n, i = 2.5 * n, a = function(a) {
		return a < n ? e * a * a : a < r ? e * (a - 1.5 / t) ** 2 + .75 : a < i ? e * (a -= 2.25 / t) * a + .9375 : e * (a - 2.625 / t) ** 2 + .984375;
	};
	Kr("Bounce", function(e) {
		return 1 - a(1 - e);
	}, a);
})(7.5625, 2.75), Kr("Expo", function(e) {
	return 2 ** (10 * (e - 1)) * e + e * e * e * e * e * e * (1 - e);
}), Kr("Circ", function(e) {
	return -(_t(1 - e * e) - 1);
}), Kr("Sine", function(e) {
	return e === 1 ? 1 : -vt(e * ht) + 1;
}), Kr("Back", Yr("in"), Yr("out"), Yr()), q.SteppedEase = q.steps = Ut.SteppedEase = { config: function(e, t) {
	e === void 0 && (e = 1);
	var n = 1 / e, r = e + +!t, i = +!!t, a = 1 - U;
	return function(e) {
		return ((r * er(0, a, e) | 0) + i) * n;
	};
} }, ut.ease = q["quad.out"], pn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(e) {
	return ln += e + "," + e + "Params,";
});
var Xr = function(e, t) {
	this.id = gt++, e._gsap = this, this.target = e, this.harness = t, this.get = t ? t.get : fn, this.set = t ? t.getSetter : _i;
}, Zr = /*#__PURE__*/ function() {
	function e(e) {
		this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat === Infinity ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, Jn(this, +e.duration, 1, 1), this.data = e.data, H && (this._ctx = H, H.data.push(this)), Ir || Lr.wake();
	}
	var t = e.prototype;
	return t.delay = function(e) {
		return e || e === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + e - this._delay), this._delay = e, this) : this._delay;
	}, t.duration = function(e) {
		return arguments.length ? this.totalDuration(this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e) : this.totalDuration() && this._dur;
	}, t.totalDuration = function(e) {
		return arguments.length ? (this._dirty = 0, Jn(this, this._repeat < 0 ? e : (e - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
	}, t.totalTime = function(e, t) {
		if (Rr(), !arguments.length) return this._tTime;
		var n = this._dp;
		if (n && n.smoothChildTiming && this._ts) {
			for (zn(this, e), !n._dp || n.parent || Bn(n, this); n && n.parent;) n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
			!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && e < this._tDur || this._ts < 0 && e > 0 || !this._tDur && !e) && Vn(this._dp, this, this._start - this._delay);
		}
		return (this._tTime !== e || !this._dur && !t || this._initted && Math.abs(this._zTime) === U || !this._initted && this._dur && e || !e && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = e), vn(this, e, t)), this;
	}, t.time = function(e, t) {
		return arguments.length ? this.totalTime(Math.min(this.totalDuration(), e + Fn(this)) % (this._dur + this._rDelay) || (e ? this._dur : 0), t) : this._time;
	}, t.totalProgress = function(e, t) {
		return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
	}, t.progress = function(e, t) {
		return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - e : e) + Fn(this), t) : this.duration() ? Math.min(1, this._time / this._dur) : +(this.rawTime() > 0);
	}, t.iteration = function(e, t) {
		var n = this.duration() + this._rDelay;
		return arguments.length ? this.totalTime(this._time + (e - 1) * n, t) : this._repeat ? In(this._tTime, n) + 1 : 1;
	}, t.timeScale = function(e, t) {
		if (!arguments.length) return this._rts === -U ? 0 : this._rts;
		if (this._rts === e) return this;
		var n = this.parent && this._ts ? Ln(this.parent._time, this) : this._tTime;
		return this._rts = +e || 0, this._ts = this._ps || e === -U ? 0 : this._rts, this.totalTime(er(-Math.abs(this._delay), this.totalDuration(), n), t !== !1), Rn(this), Mn(this);
	}, t.paused = function(e) {
		return arguments.length ? (this._ps !== e && (this._ps = e, e ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Rr(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== U && (this._tTime -= U)))), this) : this._ps;
	}, t.startTime = function(e) {
		if (arguments.length) {
			this._start = G(e);
			var t = this.parent || this._dp;
			return t && (t._sort || !this.parent) && Vn(t, this, this._start - this._delay), this;
		}
		return this._start;
	}, t.endTime = function(e) {
		return this._start + (Tt(e) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
	}, t.rawTime = function(e) {
		var t = this.parent || this._dp;
		return t ? e && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Ln(t.rawTime(e), this) : this._tTime : this._tTime;
	}, t.revert = function(e) {
		e === void 0 && (e = $t);
		var t = ft;
		return ft = e, _n(this) && (this.timeline && this.timeline.revert(e), this.totalTime(-.01, e.suppressEvents)), this.data !== "nested" && e.kill !== !1 && this.kill(), ft = t, this;
	}, t.globalTime = function(e) {
		for (var t = this, n = arguments.length ? e : t.rawTime(); t;) n = t._start + n / (Math.abs(t._ts) || 1), t = t._dp;
		return !this.parent && this._sat ? this._sat.globalTime(e) : n;
	}, t.repeat = function(e) {
		return arguments.length ? (this._repeat = e === Infinity ? -2 : e, Yn(this)) : this._repeat === -2 ? Infinity : this._repeat;
	}, t.repeatDelay = function(e) {
		if (arguments.length) {
			var t = this._time;
			return this._rDelay = e, Yn(this), t ? this.time(t) : this;
		}
		return this._rDelay;
	}, t.yoyo = function(e) {
		return arguments.length ? (this._yoyo = e, this) : this._yoyo;
	}, t.seek = function(e, t) {
		return this.totalTime(Zn(this, e), Tt(t));
	}, t.restart = function(e, t) {
		return this.play().totalTime(e ? -this._delay : 0, Tt(t)), this._dur || (this._zTime = -U), this;
	}, t.play = function(e, t) {
		return e != null && this.seek(e, t), this.reversed(!1).paused(!1);
	}, t.reverse = function(e, t) {
		return e != null && this.seek(e || this.totalDuration(), t), this.reversed(!0).paused(!1);
	}, t.pause = function(e, t) {
		return e != null && this.seek(e, t), this.paused(!0);
	}, t.resume = function() {
		return this.paused(!1);
	}, t.reversed = function(e) {
		return arguments.length ? (!!e !== this.reversed() && this.timeScale(-this._rts || (e ? -U : 0)), this) : this._rts < 0;
	}, t.invalidate = function() {
		return this._initted = this._act = 0, this._zTime = -U, this;
	}, t.isActive = function() {
		var e = this.parent || this._dp, t = this._start, n;
		return !!(!e || this._ts && this._initted && e.isActive() && (n = e.rawTime(!0)) >= t && n < this.endTime(!0) - U);
	}, t.eventCallback = function(e, t, n) {
		var r = this.vars;
		return arguments.length > 1 ? (t ? (r[e] = t, n && (r[e + "Params"] = n), e === "onUpdate" && (this._onUpdate = t)) : delete r[e], this) : r[e];
	}, t.then = function(e) {
		var t = this, n = t._prom;
		return new Promise(function(r) {
			var i = xt(e) ? e : bn, a = function() {
				var e = t.then;
				t.then = null, n && n(), xt(i) && (i = i(t)) && (i.then || i === t) && (t.then = e), r(i), t.then = e;
			};
			t._initted && t.totalProgress() === 1 && t._ts >= 0 || !t._tTime && t._ts < 0 ? a() : t._prom = a;
		});
	}, t.kill = function() {
		wr(this);
	}, e;
}();
xn(Zr.prototype, {
	_time: 0,
	_start: 0,
	_end: 0,
	_tTime: 0,
	_tDur: 0,
	_dirty: 0,
	_repeat: 0,
	_yoyo: !1,
	parent: null,
	_initted: !1,
	_rDelay: 0,
	_ts: 1,
	_dp: 0,
	ratio: 0,
	_zTime: -U,
	_prom: 0,
	_ps: !1,
	_rts: 1
});
var Qr = /*#__PURE__*/ function(e) {
	ct(t, e);
	function t(t, n) {
		var r;
		return t === void 0 && (t = {}), r = e.call(this, t) || this, r.labels = {}, r.smoothChildTiming = !!t.smoothChildTiming, r.autoRemoveChildren = !!t.autoRemoveChildren, r._sort = Tt(t.sortChildren), zt && Vn(t.parent || zt, st(r), n), t.reversed && r.reverse(), t.paused && r.paused(!0), t.scrollTrigger && Hn(st(r), t.scrollTrigger), r;
	}
	var n = t.prototype;
	return n.to = function(e, t, n) {
		return Qn(0, arguments, this), this;
	}, n.from = function(e, t, n) {
		return Qn(1, arguments, this), this;
	}, n.fromTo = function(e, t, n, r) {
		return Qn(2, arguments, this), this;
	}, n.set = function(e, t, n) {
		return t.duration = 0, t.parent = this, En(t).repeatDelay || (t.repeat = 0), t.immediateRender = !!t.immediateRender, new fi(e, t, Zn(this, n), 1), this;
	}, n.call = function(e, t, n) {
		return Vn(this, fi.delayedCall(0, e, t), n);
	}, n.staggerTo = function(e, t, n, r, i, a, o) {
		return n.duration = t, n.stagger = n.stagger || r, n.onComplete = a, n.onCompleteParams = o, n.parent = this, new fi(e, n, Zn(this, i)), this;
	}, n.staggerFrom = function(e, t, n, r, i, a, o) {
		return n.runBackwards = 1, En(n).immediateRender = Tt(n.immediateRender), this.staggerTo(e, t, n, r, i, a, o);
	}, n.staggerFromTo = function(e, t, n, r, i, a, o, s) {
		return r.startAt = n, En(r).immediateRender = Tt(r.immediateRender), this.staggerTo(e, t, r, i, a, o, s);
	}, n.render = function(e, t, n) {
		var r = this._time, i = this._dirty ? this.totalDuration() : this._tDur, a = this._dur, o = e <= 0 ? 0 : G(e), s = this._zTime < 0 != e < 0 && (this._initted || !a), c, l, u, d, f, p, m, h, g, _, v, y;
		if (this !== zt && o > i && e >= 0 && (o = i), o !== this._tTime || n || s) {
			if (r !== this._time && a && (o += this._time - r, e += this._time - r), c = o, g = this._start, h = this._ts, p = !h, s && (a || (r = this._zTime), (e || !t) && (this._zTime = e)), this._repeat) {
				if (v = this._yoyo, f = a + this._rDelay, this._repeat < -1 && e < 0) return this.totalTime(f * 100 + e, t, n);
				if (c = G(o % f), o === i ? (d = this._repeat, c = a) : (_ = G(o / f), d = ~~_, d && d === _ && (c = a, d--), c > a && (c = a)), _ = In(this._tTime, f), !r && this._tTime && _ !== d && this._tTime - _ * f - this._dur <= 0 && (_ = d), v && d & 1 && (c = a - c, y = 1), d !== _ && !this._lock) {
					var b = v && _ & 1, x = b === (v && d & 1);
					if (d < _ && (b = !b), r = b ? 0 : o % a ? a : o, this._lock = 1, this.render(r || (y ? 0 : G(d * f)), t, !a)._lock = 0, this._tTime = o, !t && this.parent && Cr(this, "onRepeat"), this.vars.repeatRefresh && !y && (this.invalidate()._lock = 1, _ = d), r && r !== this._time || p !== !this._ts || this.vars.onRepeat && !this.parent && !this._act || (a = this._dur, i = this._tDur, x && (this._lock = 2, r = b ? a : -1e-4, this.render(r, !0), this.vars.repeatRefresh && !y && this.invalidate()), this._lock = 0, !this._ts && !p)) return this;
				}
			}
			if (this._hasPause && !this._forcing && this._lock < 2 && (m = qn(this, G(r), G(c)), m && (o -= c - (c = m._start))), this._tTime = o, this._time = c, this._act = !!h, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = e, r = 0), !r && o && a && !t && !_ && (Cr(this, "onStart"), this._tTime !== o)) return this;
			if (c >= r && e >= 0) for (l = this._first; l;) {
				if (u = l._next, (l._act || c >= l._start) && l._ts && m !== l) {
					if (l.parent !== this) return this.render(e, t, n);
					if (l.render(l._ts > 0 ? (c - l._start) * l._ts : (l._dirty ? l.totalDuration() : l._tDur) + (c - l._start) * l._ts, t, n), c !== this._time || !this._ts && !p) {
						m = 0, u && (o += this._zTime = -U);
						break;
					}
				}
				l = u;
			}
			else {
				l = this._last;
				for (var S = e < 0 ? e : c; l;) {
					if (u = l._prev, (l._act || S <= l._end) && l._ts && m !== l) {
						if (l.parent !== this) return this.render(e, t, n);
						if (l.render(l._ts > 0 ? (S - l._start) * l._ts : (l._dirty ? l.totalDuration() : l._tDur) + (S - l._start) * l._ts, t, n || ft && _n(l)), c !== this._time || !this._ts && !p) {
							m = 0, u && (o += this._zTime = S ? -U : U);
							break;
						}
					}
					l = u;
				}
			}
			if (m && !t && (this.pause(), m.render(c >= r ? 0 : -U)._zTime = c >= r ? 1 : -1, this._ts)) return this._start = g, Rn(this), this.render(e, t, n);
			this._onUpdate && !t && Cr(this, "onUpdate", !0), (o === i && this._tTime >= this.totalDuration() || !o && r) && (g === this._start || Math.abs(h) !== Math.abs(this._ts)) && (this._lock || ((e || !a) && (o === i && this._ts > 0 || !o && this._ts < 0) && An(this, 1), !t && !(e < 0 && !r) && (o || r || !i) && (Cr(this, o === i && e >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(o < i && this.timeScale() > 0) && this._prom())));
		}
		return this;
	}, n.add = function(e, t) {
		var n = this;
		if (St(t) || (t = Zn(this, t, e)), !(e instanceof Zr)) {
			if (kt(e)) return e.forEach(function(e) {
				return n.add(e, t);
			}), this;
			if (bt(e)) return this.addLabel(e, t);
			if (xt(e)) e = fi.delayedCall(0, e);
			else return this;
		}
		return this === e ? this : Vn(this, e, t);
	}, n.getChildren = function(e, t, n, r) {
		e === void 0 && (e = !0), t === void 0 && (t = !0), n === void 0 && (n = !0), r === void 0 && (r = -pt);
		for (var i = [], a = this._first; a;) a._start >= r && (a instanceof fi ? t && i.push(a) : (n && i.push(a), e && i.push.apply(i, a.getChildren(!0, t, n)))), a = a._next;
		return i;
	}, n.getById = function(e) {
		for (var t = this.getChildren(1, 1, 1), n = t.length; n--;) if (t[n].vars.id === e) return t[n];
	}, n.remove = function(e) {
		return bt(e) ? this.removeLabel(e) : xt(e) ? this.killTweensOf(e) : (e.parent === this && kn(this, e), e === this._recent && (this._recent = this._last), jn(this));
	}, n.totalTime = function(t, n) {
		return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = G(Lr.time - (this._ts > 0 ? t / this._ts : (this.totalDuration() - t) / -this._ts))), e.prototype.totalTime.call(this, t, n), this._forcing = 0, this) : this._tTime;
	}, n.addLabel = function(e, t) {
		return this.labels[e] = Zn(this, t), this;
	}, n.removeLabel = function(e) {
		return delete this.labels[e], this;
	}, n.addPause = function(e, t, n) {
		var r = fi.delayedCall(0, t || Xt, n);
		return r.data = "isPause", this._hasPause = 1, Vn(this, r, Zn(this, e));
	}, n.removePause = function(e) {
		var t = this._first;
		for (e = Zn(this, e); t;) t._start === e && t.data === "isPause" && An(t), t = t._next;
	}, n.killTweensOf = function(e, t, n) {
		for (var r = this.getTweensOf(e, n), i = r.length; i--;) ri !== r[i] && r[i].kill(e, t);
		return this;
	}, n.getTweensOf = function(e, t) {
		for (var n = [], r = or(e), i = this._first, a = St(t), o; i;) i instanceof fi ? hn(i._targets, r) && (a ? (!ri || i._initted && i._ts) && i.globalTime(0) <= t && i.globalTime(i.totalDuration()) > t : !t || i.isActive()) && n.push(i) : (o = i.getTweensOf(r, t)).length && n.push.apply(n, o), i = i._next;
		return n;
	}, n.tweenTo = function(e, t) {
		t ||= {};
		var n = this, r = Zn(n, e), i = t, a = i.startAt, o = i.onStart, s = i.onStartParams, c = i.immediateRender, l, u = fi.to(n, xn({
			ease: t.ease || "none",
			lazy: !1,
			immediateRender: !1,
			time: r,
			overwrite: "auto",
			duration: t.duration || Math.abs((r - (a && "time" in a ? a.time : n._time)) / n.timeScale()) || U,
			onStart: function() {
				if (n.pause(), !l) {
					var e = t.duration || Math.abs((r - (a && "time" in a ? a.time : n._time)) / n.timeScale());
					u._dur !== e && Jn(u, e, 0, 1).render(u._time, !0, !0), l = 1;
				}
				o && o.apply(u, s || []);
			}
		}, t));
		return c ? u.render(0) : u;
	}, n.tweenFromTo = function(e, t, n) {
		return this.tweenTo(t, xn({ startAt: { time: Zn(this, e) } }, n));
	}, n.recent = function() {
		return this._recent;
	}, n.nextLabel = function(e) {
		return e === void 0 && (e = this._time), Sr(this, Zn(this, e));
	}, n.previousLabel = function(e) {
		return e === void 0 && (e = this._time), Sr(this, Zn(this, e), 1);
	}, n.currentLabel = function(e) {
		return arguments.length ? this.seek(e, !0) : this.previousLabel(this._time + U);
	}, n.shiftChildren = function(e, t, n) {
		n === void 0 && (n = 0);
		var r = this._first, i = this.labels, a;
		for (e = G(e); r;) r._start >= n && (r._start += e, r._end += e), r = r._next;
		if (t) for (a in i) i[a] >= n && (i[a] += e);
		return jn(this);
	}, n.invalidate = function(t) {
		var n = this._first;
		for (this._lock = 0; n;) n.invalidate(t), n = n._next;
		return e.prototype.invalidate.call(this, t);
	}, n.clear = function(e) {
		e === void 0 && (e = !0);
		for (var t = this._first, n; t;) n = t._next, this.remove(t), t = n;
		return this._dp && (this._time = this._tTime = this._pTime = 0), e && (this.labels = {}), jn(this);
	}, n.totalDuration = function(e) {
		var t = 0, n = this, r = n._last, i = pt, a, o, s;
		if (arguments.length) return n.timeScale((n._repeat < 0 ? n.duration() : n.totalDuration()) / (n.reversed() ? -e : e));
		if (n._dirty) {
			for (s = n.parent; r;) a = r._prev, r._dirty && r.totalDuration(), o = r._start, o > i && n._sort && r._ts && !n._lock ? (n._lock = 1, Vn(n, r, o - r._delay, 1)._lock = 0) : i = o, o < 0 && r._ts && (t -= o, (!s && !n._dp || s && s.smoothChildTiming) && (n._start += G(o / n._ts), n._time -= o, n._tTime -= o), n.shiftChildren(-o, !1, -Infinity), i = 0), r._end > t && r._ts && (t = r._end), r = a;
			Jn(n, n === zt && n._time > t ? n._time : t, 1, 1), n._dirty = 0;
		}
		return n._tDur;
	}, t.updateRoot = function(e) {
		if (zt._ts && (vn(zt, Ln(e, zt)), rn = Lr.frame), Lr.frame >= sn) {
			sn += lt.autoSleep || 120;
			var t = zt._first;
			if ((!t || !t._ts) && lt.autoSleep && Lr._listeners.length < 2) {
				for (; t && !t._ts;) t = t._next;
				t || Lr.sleep();
			}
		}
	}, t;
}(Zr);
xn(Qr.prototype, {
	_lock: 0,
	_hasPause: 0,
	_forcing: 0
});
var $r = function(e, t, n, r, i, a, o) {
	var s = new J(this._pt, e, t, 0, 1, bi, null, i), c = 0, l = 0, u, d, f, p, m, h, g, _;
	for (s.b = n, s.e = r, n += "", r += "", (g = ~r.indexOf("random(")) && (r = yr(r)), a && (_ = [n, r], a(_, e, t), n = _[0], r = _[1]), d = n.match(Ft) || []; u = Ft.exec(r);) p = u[0], m = r.substring(c, u.index), f ? f = (f + 1) % 5 : m.substr(-5) === "rgba(" && (f = 1), p !== d[l++] && (h = parseFloat(d[l - 1]) || 0, s._pt = {
		_next: s._pt,
		p: m || l === 1 ? m : ",",
		s: h,
		c: p.charAt(1) === "=" ? mn(h, p) - h : parseFloat(p) - h,
		m: f && f < 4 ? Math.round : 0
	}, c = Ft.lastIndex);
	return s.c = c < r.length ? r.substring(c, r.length) : "", s.fp = o, (It.test(r) || g) && (s.e = 0), this._pt = s, s;
}, ei = function(e, t, n, r, i, a, o, s, c, l) {
	xt(r) && (r = r(i || 0, e, a));
	var u = e[t], d = n === "get" ? xt(u) ? c ? e[t.indexOf("set") || !xt(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](c) : e[t]() : u : n, f = xt(u) ? c ? hi : mi : pi, p;
	if (bt(r) && (~r.indexOf("random(") && (r = yr(r)), r.charAt(1) === "=" && (p = mn(d, r) + (tr(d) || 0), (p || p === 0) && (r = p))), !l || d !== r || ii) return !isNaN(d * r) && r !== "" ? (p = new J(this._pt, e, t, +d || 0, r - (d || 0), typeof u == "boolean" ? yi : vi, 0, f), c && (p.fp = c), o && p.modifier(o, this, e), this._pt = p) : (!u && !(t in e) && qt(t, r), $r.call(this, e, t, d, r, f, s || lt.stringFilter, c));
}, ti = function(e, t, n, r, i) {
	if (xt(e) && (e = li(e, i, t, n, r)), !wt(e) || e.style && e.nodeType || kt(e) || Ot(e)) return bt(e) ? li(e, i, t, n, r) : e;
	var a = {}, o;
	for (o in e) a[o] = li(e[o], i, t, n, r);
	return a;
}, ni = function(e, t, n, r, i, a) {
	var o, s, c, l;
	if (an[e] && (o = new an[e]()).init(i, o.rawVars ? t[e] : ti(t[e], r, i, a, n), n, r, a) !== !1 && (n._pt = s = new J(n._pt, i, e, 0, 1, o.render, o, 0, o.priority), n !== Tr)) for (c = n._ptLookup[n._targets.indexOf(i)], l = o._props.length; l--;) c[o._props[l]] = s;
	return o;
}, ri, ii, ai = function e(t, n, r) {
	var i = t.vars, a = i.ease, o = i.startAt, s = i.immediateRender, c = i.lazy, l = i.onUpdate, u = i.runBackwards, d = i.yoyoEase, f = i.keyframes, p = i.autoRevert, m = t._dur, h = t._startAt, g = t._targets, _ = t.parent, v = _ && _.data === "nested" ? _.vars.targets : g, y = t._overwrite === "auto" && !dt, b = t.timeline, x = i.easeReverse || d, S, C, w, T, E, D, O, k, A, j, M, N, P;
	if (b && (!f || !a) && (a = "none"), t._ease = Gr(a, ut.ease), t._rEase = x && (Gr(x) || t._ease), t._from = !b && !!i.runBackwards, t._from && (t.ratio = 1), !b || f && !i.stagger) {
		if (k = g[0] ? dn(g[0]).harness : 0, N = k && i[k.prop], S = Tn(i, en), h && (h._zTime < 0 && h.progress(1), n < 0 && u && s && !p ? h.render(-1, !0) : h.revert(u && m ? Qt : Zt), h._lazy = 0), o) {
			if (An(t._startAt = fi.set(g, xn({
				data: "isStart",
				overwrite: !1,
				parent: _,
				immediateRender: !0,
				lazy: !h && Tt(c),
				startAt: null,
				delay: 0,
				onUpdate: l && function() {
					return Cr(t, "onUpdate");
				},
				stagger: 0
			}, o))), t._startAt._dp = 0, t._startAt._sat = t, n < 0 && (ft || !s && !p) && t._startAt.revert(Qt), s && m && n <= 0 && r <= 0) {
				n && (t._zTime = n);
				return;
			}
		} else if (u && m && !h) {
			if (n && (s = !1), w = xn({
				overwrite: !1,
				data: "isFromStart",
				lazy: s && !h && Tt(c),
				immediateRender: s,
				stagger: 0,
				parent: _
			}, S), N && (w[k.prop] = N), An(t._startAt = fi.set(g, w)), t._startAt._dp = 0, t._startAt._sat = t, n < 0 && (ft ? t._startAt.revert(Qt) : t._startAt.render(-1, !0)), t._zTime = n, !s) e(t._startAt, U, U);
			else if (!n) return;
		}
		for (t._pt = t._ptCache = 0, c = m && Tt(c) || c && !m, C = 0; C < g.length; C++) {
			if (E = g[C], O = E._gsap || un(g)[C]._gsap, t._ptLookup[C] = j = {}, nn[O.id] && tn.length && gn(), M = v === g ? C : v.indexOf(E), k && (A = new k()).init(E, N || S, t, M, v) !== !1 && (t._pt = T = new J(t._pt, E, A.name, 0, 1, A.render, A, 0, A.priority), A._props.forEach(function(e) {
				j[e] = T;
			}), A.priority && (D = 1)), !k || N) for (w in S) an[w] && (A = ni(w, S, t, M, E, v)) ? A.priority && (D = 1) : j[w] = T = ei.call(t, E, w, "get", S[w], M, v, 0, i.stringFilter);
			t._op && t._op[C] && t.kill(E, t._op[C]), y && t._pt && (ri = t, zt.killTweensOf(E, j, t.globalTime(n)), P = !t.parent, ri = 0), t._pt && c && (nn[O.id] = 1);
		}
		D && Ti(t), t._onInit && t._onInit(t);
	}
	t._onUpdate = l, t._initted = (!t._op || t._pt) && !P, f && n <= 0 && b.render(pt, !0, !0);
}, oi = function(e, t, n, r, i, a, o, s) {
	var c = (e._pt && e._ptCache || (e._ptCache = {}))[t], l, u, d, f;
	if (!c) for (c = e._ptCache[t] = [], d = e._ptLookup, f = e._targets.length; f--;) {
		if (l = d[f][t], l && l.d && l.d._pt) for (l = l.d._pt; l && l.p !== t && l.fp !== t;) l = l._next;
		if (!l) return ii = 1, e.vars[t] = "+=0", ai(e, o), ii = 0, s ? Jt(t + " not eligible for reset. Try splitting into individual properties") : 1;
		c.push(l);
	}
	for (f = c.length; f--;) u = c[f], l = u._pt || u, l.s = (r || r === 0) && !i ? r : l.s + (r || 0) + a * l.c, l.c = n - l.s, u.e && (u.e = W(n) + tr(u.e)), u.b && (u.b = l.s + tr(u.b));
}, si = function(e, t) {
	var n = e[0] ? dn(e[0]).harness : 0, r = n && n.aliases, i, a, o, s;
	if (!r) return t;
	for (a in i = Cn({}, t), r) if (a in i) for (s = r[a].split(","), o = s.length; o--;) i[s[o]] = i[a];
	return i;
}, ci = function(e, t, n, r) {
	var i = t.ease || r || "power1.inOut", a, o;
	if (kt(t)) o = n[e] || (n[e] = []), t.forEach(function(e, n) {
		return o.push({
			t: n / (t.length - 1) * 100,
			v: e,
			e: i
		});
	});
	else for (a in t) o = n[a] || (n[a] = []), a === "ease" || o.push({
		t: parseFloat(e),
		v: t[a],
		e: i
	});
}, li = function(e, t, n, r, i) {
	return xt(e) ? e.call(t, n, r, i) : bt(e) && ~e.indexOf("random(") ? yr(e) : e;
}, ui = ln + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert", di = {};
pn(ui + ",id,stagger,delay,duration,paused,scrollTrigger", function(e) {
	return di[e] = 1;
});
var fi = /*#__PURE__*/ function(e) {
	ct(t, e);
	function t(t, n, r, i) {
		var a;
		typeof n == "number" && (r.duration = n, n = r, r = null), a = e.call(this, i ? n : En(n)) || this;
		var o = a.vars, s = o.duration, c = o.delay, l = o.immediateRender, u = o.stagger, d = o.overwrite, f = o.keyframes, p = o.defaults, m = o.scrollTrigger, h = n.parent || zt, g = (kt(t) || Ot(t) ? St(t[0]) : "length" in n) ? [t] : or(t), _, v, y, b, x, S, C, w;
		if (a._targets = g.length ? un(g) : Jt("GSAP target " + t + " not found. https://gsap.com", !lt.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = d, f || u || Dt(s) || Dt(c)) {
			n = a.vars;
			var T = n.easeReverse || n.yoyoEase;
			if (_ = a.timeline = new Qr({
				data: "nested",
				defaults: p || {},
				targets: h && h.data === "nested" ? h.vars.targets : g
			}), _.kill(), _.parent = _._dp = st(a), _._start = 0, u || Dt(s) || Dt(c)) {
				if (b = g.length, C = u && lr(u), wt(u)) for (x in u) ~ui.indexOf(x) && (w ||= {}, w[x] = u[x]);
				for (v = 0; v < b; v++) y = Tn(n, di), y.stagger = 0, T && (y.easeReverse = T), w && Cn(y, w), S = g[v], y.duration = +li(s, st(a), v, S, g), y.delay = (+li(c, st(a), v, S, g) || 0) - a._delay, !u && b === 1 && y.delay && (a._delay = c = y.delay, a._start += c, y.delay = 0), _.to(S, y, C ? C(v, S, g) : 0), _._ease = q.none;
				_.duration() ? s = c = 0 : a.timeline = 0;
			} else if (f) {
				En(xn(_.vars.defaults, { ease: "none" })), _._ease = Gr(f.ease || n.ease || "none");
				var E = 0, D, O, k;
				if (kt(f)) f.forEach(function(e) {
					return _.to(g, e, ">");
				}), _.duration();
				else {
					for (x in y = {}, f) x === "ease" || x === "easeEach" || ci(x, f[x], y, f.easeEach);
					for (x in y) for (D = y[x].sort(function(e, t) {
						return e.t - t.t;
					}), E = 0, v = 0; v < D.length; v++) O = D[v], k = {
						ease: O.e,
						duration: (O.t - (v ? D[v - 1].t : 0)) / 100 * s
					}, k[x] = O.v, _.to(g, k, E), E += k.duration;
					_.duration() < s && _.to({}, { duration: s - _.duration() });
				}
			}
			s || a.duration(s = _.duration());
		} else a.timeline = 0;
		return d === !0 && !dt && (ri = st(a), zt.killTweensOf(g), ri = 0), Vn(h, st(a), r), n.reversed && a.reverse(), n.paused && a.paused(!0), (l || !s && !f && a._start === G(h._time) && Tt(l) && Pn(st(a)) && h.data !== "nested") && (a._tTime = -U, a.render(Math.max(0, -c) || 0)), m && Hn(st(a), m), a;
	}
	var n = t.prototype;
	return n.render = function(e, t, n) {
		var r = this._time, i = this._tDur, a = this._dur, o = e < 0, s = e > i - U && !o ? i : e < U ? 0 : e, c, l, u, d, f, p, m, h;
		if (!a) Kn(this, e, t, n);
		else if (s !== this._tTime || !e || n || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== o || this._lazy) {
			if (c = s, h = this.timeline, this._repeat) {
				if (d = a + this._rDelay, this._repeat < -1 && o) return this.totalTime(d * 100 + e, t, n);
				if (c = G(s % d), s === i ? (u = this._repeat, c = a) : (f = G(s / d), u = ~~f, u && u === f ? (c = a, u--) : c > a && (c = a)), p = this._yoyo && u & 1, p && (c = a - c), f = In(this._tTime, d), c === r && !n && this._initted && u === f) return this._tTime = s, this;
				u !== f && this.vars.repeatRefresh && !p && !this._lock && c !== d && this._initted && (this._lock = n = 1, this.render(G(d * u), !0).invalidate()._lock = 0);
			}
			if (!this._initted) {
				if (Un(this, o ? e : c, n, t, s)) return this._tTime = 0, this;
				if (r !== this._time && !(n && this.vars.repeatRefresh && u !== f)) return this;
				if (a !== this._dur) return this.render(e, t, n);
			}
			if (this._rEase) {
				var g = c < r;
				if (g !== this._inv) {
					var _ = g ? r : a - r;
					this._inv = g, this._from && (this.ratio = 1 - this.ratio), this._invRatio = this.ratio, this._invTime = r, this._invRecip = _ ? (g ? -1 : 1) / _ : 0, this._invScale = g ? -this.ratio : 1 - this.ratio, this._invEase = g ? this._rEase : this._ease;
				}
				this.ratio = m = this._invRatio + this._invScale * this._invEase((c - this._invTime) * this._invRecip);
			} else this.ratio = m = this._ease(c / a);
			if (this._from && (this.ratio = m = 1 - m), this._tTime = s, this._time = c, !this._act && this._ts && (this._act = 1, this._lazy = 0), !r && s && !t && !f && (Cr(this, "onStart"), this._tTime !== s)) return this;
			for (l = this._pt; l;) l.r(m, l.d), l = l._next;
			h && h.render(e < 0 ? e : h._dur * h._ease(c / this._dur), t, n) || this._startAt && (this._zTime = e), this._onUpdate && !t && (o && Nn(this, e, t, n), Cr(this, "onUpdate")), this._repeat && u !== f && this.vars.onRepeat && !t && this.parent && Cr(this, "onRepeat"), (s === this._tDur || !s) && this._tTime === s && (o && !this._onUpdate && Nn(this, e, !0, !0), (e || !a) && (s === this._tDur && this._ts > 0 || !s && this._ts < 0) && An(this, 1), !t && (!o || r) && (s || r || p) && (Cr(this, s === i ? "onComplete" : "onReverseComplete", !0), this._prom && !(s < i && this.timeScale() > 0) && this._prom()));
		}
		return this;
	}, n.targets = function() {
		return this._targets;
	}, n.invalidate = function(t) {
		return (!t || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(t), e.prototype.invalidate.call(this, t);
	}, n.resetTo = function(e, t, n, r, i) {
		Ir || Lr.wake(), this._ts || this.play();
		var a = Math.min(this._dur, (this._dp._time - this._start) * this._ts), o;
		return this._initted || ai(this, a), o = this._ease(a / this._dur), oi(this, e, t, n, r, o, a, i) ? this.resetTo(e, t, n, r, 1) : (zn(this, 0), this.parent || On(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
	}, n.kill = function(e, t) {
		if (t === void 0 && (t = "all"), !e && (!t || t === "all")) return this._lazy = this._pt = 0, this.parent ? wr(this) : this.scrollTrigger && this.scrollTrigger.kill(!!ft), this;
		if (this.timeline) {
			var n = this.timeline.totalDuration();
			return this.timeline.killTweensOf(e, t, ri && ri.vars.overwrite !== !0)._first || wr(this), this.parent && n !== this.timeline.totalDuration() && Jn(this, this._dur * this.timeline._tDur / n, 0, 1), this;
		}
		var r = this._targets, i = e ? or(e) : r, a = this._ptLookup, o = this._pt, s, c, l, u, d, f, p;
		if ((!t || t === "all") && Dn(r, i)) return t === "all" && (this._pt = 0), wr(this);
		for (s = this._op = this._op || [], t !== "all" && (bt(t) && (d = {}, pn(t, function(e) {
			return d[e] = 1;
		}), t = d), t = si(r, t)), p = r.length; p--;) if (~i.indexOf(r[p])) for (d in c = a[p], t === "all" ? (s[p] = t, u = c, l = {}) : (l = s[p] = s[p] || {}, u = t), u) f = c && c[d], f && ((!("kill" in f.d) || f.d.kill(d) === !0) && kn(this, f, "_pt"), delete c[d]), l !== "all" && (l[d] = 1);
		return this._initted && !this._pt && o && wr(this), this;
	}, t.to = function(e, n) {
		return new t(e, n, arguments[2]);
	}, t.from = function(e, t) {
		return Qn(1, arguments);
	}, t.delayedCall = function(e, n, r, i) {
		return new t(n, 0, {
			immediateRender: !1,
			lazy: !1,
			overwrite: !1,
			delay: e,
			onComplete: n,
			onReverseComplete: n,
			onCompleteParams: r,
			onReverseCompleteParams: r,
			callbackScope: i
		});
	}, t.fromTo = function(e, t, n) {
		return Qn(2, arguments);
	}, t.set = function(e, n) {
		return n.duration = 0, n.repeatDelay || (n.repeat = 0), new t(e, n);
	}, t.killTweensOf = function(e, t, n) {
		return zt.killTweensOf(e, t, n);
	}, t;
}(Zr);
xn(fi.prototype, {
	_targets: [],
	_lazy: 0,
	_startAt: 0,
	_op: 0,
	_onInit: 0
}), pn("staggerTo,staggerFrom,staggerFromTo", function(e) {
	fi[e] = function() {
		var t = new Qr(), n = rr.call(arguments, 0);
		return n.splice(e === "staggerFromTo" ? 5 : 4, 0, 0), t[e].apply(t, n);
	};
});
var pi = function(e, t, n) {
	return e[t] = n;
}, mi = function(e, t, n) {
	return e[t](n);
}, hi = function(e, t, n, r) {
	return e[t](r.fp, n);
}, gi = function(e, t, n) {
	return e.setAttribute(t, n);
}, _i = function(e, t) {
	return xt(e[t]) ? mi : Ct(e[t]) && e.setAttribute ? gi : pi;
}, vi = function(e, t) {
	return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
}, yi = function(e, t) {
	return t.set(t.t, t.p, !!(t.s + t.c * e), t);
}, bi = function(e, t) {
	var n = t._pt, r = "";
	if (!e && t.b) r = t.b;
	else if (e === 1 && t.e) r = t.e;
	else {
		for (; n;) r = n.p + (n.m ? n.m(n.s + n.c * e) : Math.round((n.s + n.c * e) * 1e4) / 1e4) + r, n = n._next;
		r += t.c;
	}
	t.set(t.t, t.p, r, t);
}, xi = function(e, t) {
	for (var n = t._pt; n;) n.r(e, n.d), n = n._next;
}, Si = function(e, t, n, r) {
	for (var i = this._pt, a; i;) a = i._next, i.p === r && i.modifier(e, t, n), i = a;
}, Ci = function(e) {
	for (var t = this._pt, n, r; t;) r = t._next, t.p === e && !t.op || t.op === e ? kn(this, t, "_pt") : t.dep || (n = 1), t = r;
	return !n;
}, wi = function(e, t, n, r) {
	r.mSet(e, t, r.m.call(r.tween, n, r.mt), r);
}, Ti = function(e) {
	for (var t = e._pt, n, r, i, a; t;) {
		for (n = t._next, r = i; r && r.pr > t.pr;) r = r._next;
		(t._prev = r ? r._prev : a) ? t._prev._next = t : i = t, (t._next = r) ? r._prev = t : a = t, t = n;
	}
	e._pt = i;
}, J = /*#__PURE__*/ function() {
	function e(e, t, n, r, i, a, o, s, c) {
		this.t = t, this.s = r, this.c = i, this.p = n, this.r = a || vi, this.d = o || this, this.set = s || pi, this.pr = c || 0, this._next = e, e && (e._prev = this);
	}
	var t = e.prototype;
	return t.modifier = function(e, t, n) {
		this.mSet = this.mSet || this.set, this.set = wi, this.m = e, this.mt = n, this.tween = t;
	}, e;
}();
pn(ln + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse", function(e) {
	return en[e] = 1;
}), Ut.TweenMax = Ut.TweenLite = fi, Ut.TimelineLite = Ut.TimelineMax = Qr, zt = new Qr({
	sortChildren: !1,
	defaults: ut,
	autoRemoveChildren: !0,
	id: "root",
	smoothChildTiming: !0
}), lt.stringFilter = Fr;
var Ei = [], Di = {}, Oi = [], ki = 0, Ai = 0, ji = function(e) {
	return (Di[e] || Oi).map(function(e) {
		return e();
	});
}, Mi = function() {
	var e = Date.now(), t = [];
	e - ki > 2 && (ji("matchMediaInit"), Ei.forEach(function(e) {
		var n = e.queries, r = e.conditions, i, a, o, s;
		for (a in n) i = Bt.matchMedia(n[a]).matches, i && (o = 1), i !== r[a] && (r[a] = i, s = 1);
		s && (e.revert(), o && t.push(e));
	}), ji("matchMediaRevert"), t.forEach(function(e) {
		return e.onMatch(e, function(t) {
			return e.add(null, t);
		});
	}), ki = e, ji("matchMedia"));
}, Ni = /*#__PURE__*/ function() {
	function e(e, t) {
		this.selector = t && sr(t), this.data = [], this._r = [], this.isReverted = !1, this.id = Ai++, e && this.add(e);
	}
	var t = e.prototype;
	return t.add = function(e, t, n) {
		xt(e) && (n = t, t = e, e = xt);
		var r = this, i = function() {
			var e = H, i = r.selector, a;
			return e && e !== r && e.data.push(r), n && (r.selector = sr(n)), H = r, a = t.apply(r, arguments), xt(a) && r._r.push(a), H = e, r.selector = i, r.isReverted = !1, a;
		};
		return r.last = i, e === xt ? i(r, function(e) {
			return r.add(null, e);
		}) : e ? r[e] = i : i;
	}, t.ignore = function(e) {
		var t = H;
		H = null, e(this), H = t;
	}, t.getTweens = function() {
		var t = [];
		return this.data.forEach(function(n) {
			return n instanceof e ? t.push.apply(t, n.getTweens()) : n instanceof fi && !(n.parent && n.parent.data === "nested") && t.push(n);
		}), t;
	}, t.clear = function() {
		this._r.length = this.data.length = 0;
	}, t.kill = function(e, t) {
		var n = this;
		if (e ? (function() {
			for (var t = n.getTweens(), r = n.data.length, i; r--;) i = n.data[r], i.data === "isFlip" && (i.revert(), i.getChildren(!0, !0, !1).forEach(function(e) {
				return t.splice(t.indexOf(e), 1);
			}));
			for (t.map(function(e) {
				return {
					g: e._dur || e._delay || e._sat && !e._sat.vars.immediateRender ? e.globalTime(0) : -Infinity,
					t: e
				};
			}).sort(function(e, t) {
				return t.g - e.g || -Infinity;
			}).forEach(function(t) {
				return t.t.revert(e);
			}), r = n.data.length; r--;) i = n.data[r], i instanceof Qr ? i.data !== "nested" && (i.scrollTrigger && i.scrollTrigger.revert(), i.kill()) : !(i instanceof fi) && i.revert && i.revert(e);
			n._r.forEach(function(t) {
				return t(e, n);
			}), n.isReverted = !0;
		})() : this.data.forEach(function(e) {
			return e.kill && e.kill();
		}), this.clear(), t) for (var r = Ei.length; r--;) Ei[r].id === this.id && Ei.splice(r, 1);
	}, t.revert = function(e) {
		this.kill(e || {});
	}, e;
}(), Pi = /*#__PURE__*/ function() {
	function e(e) {
		this.contexts = [], this.scope = e, H && H.data.push(this);
	}
	var t = e.prototype;
	return t.add = function(e, t, n) {
		wt(e) || (e = { matches: e });
		var r = new Ni(0, n || this.scope), i = r.conditions = {}, a, o, s;
		for (o in H && !r.selector && (r.selector = H.selector), this.contexts.push(r), t = r.add("onMatch", t), r.queries = e, e) o === "all" ? s = 1 : (a = Bt.matchMedia(e[o]), a && (Ei.indexOf(r) < 0 && Ei.push(r), (i[o] = a.matches) && (s = 1), a.addListener ? a.addListener(Mi) : a.addEventListener("change", Mi)));
		return s && t(r, function(e) {
			return r.add(null, e);
		}), this;
	}, t.revert = function(e) {
		this.kill(e || {});
	}, t.kill = function(e) {
		this.contexts.forEach(function(t) {
			return t.kill(e, !0);
		});
	}, e;
}(), Fi = {
	registerPlugin: function() {
		[...arguments].forEach(function(e) {
			return Dr(e);
		});
	},
	timeline: function(e) {
		return new Qr(e);
	},
	getTweensOf: function(e, t) {
		return zt.getTweensOf(e, t);
	},
	getProperty: function(e, t, n, r) {
		bt(e) && (e = or(e)[0]);
		var i = dn(e || {}).get, a = n ? bn : yn;
		return n === "native" && (n = ""), e && (t ? a((an[t] && an[t].get || i)(e, t, n, r)) : function(t, n, r) {
			return a((an[t] && an[t].get || i)(e, t, n, r));
		});
	},
	quickSetter: function(e, t, n) {
		if (e = or(e), e.length > 1) {
			var r = e.map(function(e) {
				return zi.quickSetter(e, t, n);
			}), i = r.length;
			return function(e) {
				for (var t = i; t--;) r[t](e);
			};
		}
		e = e[0] || {};
		var a = an[t], o = dn(e), s = o.harness && (o.harness.aliases || {})[t] || t, c = a ? function(t) {
			var r = new a();
			Tr._pt = 0, r.init(e, n ? t + n : t, Tr, 0, [e]), r.render(1, r), Tr._pt && xi(1, Tr);
		} : o.set(e, s);
		return a ? c : function(t) {
			return c(e, s, n ? t + n : t, o, 1);
		};
	},
	quickTo: function(e, t, n) {
		var r, i = zi.to(e, xn((r = {}, r[t] = "+=0.1", r.paused = !0, r.stagger = 0, r), n || {})), a = function(e, n, r) {
			return i.resetTo(t, e, n, r);
		};
		return a.tween = i, a;
	},
	isTweening: function(e) {
		return zt.getTweensOf(e, !0).length > 0;
	},
	defaults: function(e) {
		return e && e.ease && (e.ease = Gr(e.ease, ut.ease)), wn(ut, e || {});
	},
	config: function(e) {
		return wn(lt, e || {});
	},
	registerEffect: function(e) {
		var t = e.name, n = e.effect, r = e.plugins, i = e.defaults, a = e.extendTimeline;
		(r || "").split(",").forEach(function(e) {
			return e && !an[e] && !Ut[e] && Jt(t + " effect requires " + e + " plugin.");
		}), on[t] = function(e, t, r) {
			return n(or(e), xn(t || {}, i), r);
		}, a && (Qr.prototype[t] = function(e, n, r) {
			return this.add(on[t](e, wt(n) ? n : (r = n) && {}, this), r);
		});
	},
	registerEase: function(e, t) {
		q[e] = Gr(t);
	},
	parseEase: function(e, t) {
		return arguments.length ? Gr(e, t) : q;
	},
	getById: function(e) {
		return zt.getById(e);
	},
	exportRoot: function(e, t) {
		e === void 0 && (e = {});
		var n = new Qr(e), r, i;
		for (n.smoothChildTiming = Tt(e.smoothChildTiming), zt.remove(n), n._dp = 0, n._time = n._tTime = zt._time, r = zt._first; r;) i = r._next, (t || !(!r._dur && r instanceof fi && r.vars.onComplete === r._targets[0])) && Vn(n, r, r._start - r._delay), r = i;
		return Vn(zt, n, 0), n;
	},
	context: function(e, t) {
		return e ? new Ni(e, t) : H;
	},
	matchMedia: function(e) {
		return new Pi(e);
	},
	matchMediaRefresh: function() {
		return Ei.forEach(function(e) {
			var t = e.conditions, n, r;
			for (r in t) t[r] && (t[r] = !1, n = 1);
			n && e.revert();
		}) || Mi();
	},
	addEventListener: function(e, t) {
		var n = Di[e] || (Di[e] = []);
		~n.indexOf(t) || n.push(t);
	},
	removeEventListener: function(e, t) {
		var n = Di[e], r = n && n.indexOf(t);
		r >= 0 && n.splice(r, 1);
	},
	utils: {
		wrap: _r,
		wrapYoyo: vr,
		distribute: lr,
		random: fr,
		snap: dr,
		normalize: hr,
		getUnit: tr,
		clamp: nr,
		splitColor: Ar,
		toArray: or,
		selector: sr,
		mapRange: br,
		pipe: pr,
		unitize: mr,
		interpolate: xr,
		shuffle: cr
	},
	install: Kt,
	effects: on,
	ticker: Lr,
	updateRoot: Qr.updateRoot,
	plugins: an,
	globalTimeline: zt,
	core: {
		PropTween: J,
		globals: Yt,
		Tween: fi,
		Timeline: Qr,
		Animation: Zr,
		getCache: dn,
		_removeLinkedListItem: kn,
		reverting: function() {
			return ft;
		},
		context: function(e) {
			return e && H && (H.data.push(e), e._ctx = H), H;
		},
		suppressOverwrites: function(e) {
			return dt = e;
		}
	}
};
pn("to,from,fromTo,delayedCall,set,killTweensOf", function(e) {
	return Fi[e] = fi[e];
}), Lr.add(Qr.updateRoot), Tr = Fi.to({}, { duration: 0 });
var Ii = function(e, t) {
	for (var n = e._pt; n && n.p !== t && n.op !== t && n.fp !== t;) n = n._next;
	return n;
}, Li = function(e, t) {
	var n = e._targets, r, i, a;
	for (r in t) for (i = n.length; i--;) a = e._ptLookup[i][r], (a &&= a.d) && (a._pt && (a = Ii(a, r)), a && a.modifier && a.modifier(t[r], e, n[i], r));
}, Ri = function(e, t) {
	return {
		name: e,
		headless: 1,
		rawVars: 1,
		init: function(e, n, r) {
			r._onInit = function(e) {
				var r, i;
				if (bt(n) && (r = {}, pn(n, function(e) {
					return r[e] = 1;
				}), n = r), t) {
					for (i in r = {}, n) r[i] = t(n[i]);
					n = r;
				}
				Li(e, n);
			};
		}
	};
}, zi = Fi.registerPlugin({
	name: "attr",
	init: function(e, t, n, r, i) {
		var a, o, s;
		for (a in this.tween = n, t) s = e.getAttribute(a) || "", o = this.add(e, "setAttribute", (s || 0) + "", t[a], r, i, 0, 0, a), o.op = a, o.b = s, this._props.push(a);
	},
	render: function(e, t) {
		for (var n = t._pt; n;) ft ? n.set(n.t, n.p, n.b, n) : n.r(e, n.d), n = n._next;
	}
}, {
	name: "endArray",
	headless: 1,
	init: function(e, t) {
		for (var n = t.length; n--;) this.add(e, n, e[n] || 0, t[n], 0, 0, 0, 0, 0, 1);
	}
}, Ri("roundProps", ur), Ri("modifiers"), Ri("snap", dr)) || Fi;
fi.version = Qr.version = zi.version = "3.15.0", Gt = 1, Et() && Rr(), q.Power0, q.Power1, q.Power2, q.Power3, q.Power4, q.Linear, q.Quad, q.Cubic, q.Quart, q.Quint, q.Strong, q.Elastic, q.Back, q.SteppedEase, q.Bounce, q.Sine, q.Expo, q.Circ;
//#endregion
//#region node_modules/.pnpm/gsap@3.15.0/node_modules/gsap/CSSPlugin.js
var Bi, Vi, Hi, Ui, Wi, Gi, Ki, qi = function() {
	return typeof window < "u";
}, Ji = {}, Yi = 180 / Math.PI, Xi = Math.PI / 180, Zi = Math.atan2, Qi = 1e8, $i = /([A-Z])/g, ea = /(left|right|width|margin|padding|x)/i, ta = /[\s,\(]\S/, na = {
	autoAlpha: "opacity,visibility",
	scale: "scaleX,scaleY",
	alpha: "opacity"
}, ra = function(e, t) {
	return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
}, ia = function(e, t) {
	return t.set(t.t, t.p, e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
}, aa = function(e, t) {
	return t.set(t.t, t.p, e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t);
}, oa = function(e, t) {
	return t.set(t.t, t.p, e === 1 ? t.e : e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t);
}, sa = function(e, t) {
	var n = t.s + t.c * e;
	t.set(t.t, t.p, ~~(n + (n < 0 ? -.5 : .5)) + t.u, t);
}, ca = function(e, t) {
	return t.set(t.t, t.p, e ? t.e : t.b, t);
}, la = function(e, t) {
	return t.set(t.t, t.p, e === 1 ? t.e : t.b, t);
}, ua = function(e, t, n) {
	return e.style[t] = n;
}, da = function(e, t, n) {
	return e.style.setProperty(t, n);
}, fa = function(e, t, n) {
	return e._gsap[t] = n;
}, pa = function(e, t, n) {
	return e._gsap.scaleX = e._gsap.scaleY = n;
}, ma = function(e, t, n, r, i) {
	var a = e._gsap;
	a.scaleX = a.scaleY = n, a.renderTransform(i, a);
}, ha = function(e, t, n, r, i) {
	var a = e._gsap;
	a[t] = n, a.renderTransform(i, a);
}, ga = "transform", _a = ga + "Origin", va = function e(t, n) {
	var r = this, i = this.target, a = i.style, o = i._gsap;
	if (t in Ji && a) {
		if (this.tfm = this.tfm || {}, t !== "transform") t = na[t] || t, ~t.indexOf(",") ? t.split(",").forEach(function(e) {
			return r.tfm[e] = La(i, e);
		}) : this.tfm[t] = o.x ? o[t] : La(i, t), t === _a && (this.tfm.zOrigin = o.zOrigin);
		else return na.transform.split(",").forEach(function(t) {
			return e.call(r, t, n);
		});
		if (this.props.indexOf(ga) >= 0) return;
		o.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(_a, n, "")), t = ga;
	}
	(a || n) && this.props.push(t, n, a[t]);
}, ya = function(e) {
	e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"));
}, ba = function() {
	for (var e = this.props, t = this.target, n = t.style, r = t._gsap, i = 0, a; i < e.length; i += 3) e[i + 1] ? e[i + 1] === 2 ? t[e[i]](e[i + 2]) : t[e[i]] = e[i + 2] : e[i + 2] ? n[e[i]] = e[i + 2] : n.removeProperty(e[i].substr(0, 2) === "--" ? e[i] : e[i].replace($i, "-$1").toLowerCase());
	if (this.tfm) {
		for (a in this.tfm) r[a] = this.tfm[a];
		r.svg && (r.renderTransform(), t.setAttribute("data-svg-origin", this.svgo || "")), i = Ki(), (!i || !i.isStart) && !n[ga] && (ya(n), r.zOrigin && n[_a] && (n[_a] += " " + r.zOrigin + "px", r.zOrigin = 0, r.renderTransform()), r.uncache = 1);
	}
}, xa = function(e, t) {
	var n = {
		target: e,
		props: [],
		revert: ba,
		save: va
	};
	return e._gsap || zi.core.getCache(e), t && e.style && e.nodeType && t.split(",").forEach(function(e) {
		return n.save(e);
	}), n;
}, Sa, Ca = function(e, t) {
	var n = Vi.createElementNS ? Vi.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : Vi.createElement(e);
	return n && n.style ? n : Vi.createElement(e);
}, wa = function e(t, n, r) {
	var i = getComputedStyle(t);
	return i[n] || i.getPropertyValue(n.replace($i, "-$1").toLowerCase()) || i.getPropertyValue(n) || !r && e(t, Ea(n) || n, 1) || "";
}, Ta = "O,Moz,ms,Ms,Webkit".split(","), Ea = function(e, t, n) {
	var r = (t || Wi).style, i = 5;
	if (e in r && !n) return e;
	for (e = e.charAt(0).toUpperCase() + e.substr(1); i-- && !(Ta[i] + e in r););
	return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? Ta[i] : "") + e;
}, Da = function() {
	qi() && window.document && (Bi = window, Vi = Bi.document, Hi = Vi.documentElement, Wi = Ca("div") || { style: {} }, Ca("div"), ga = Ea(ga), _a = ga + "Origin", Wi.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Sa = !!Ea("perspective"), Ki = zi.core.reverting, Ui = 1);
}, Oa = function(e) {
	var t = e.ownerSVGElement, n = Ca("svg", t && t.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), r = e.cloneNode(!0), i;
	r.style.display = "block", n.appendChild(r), Hi.appendChild(n);
	try {
		i = r.getBBox();
	} catch {}
	return n.removeChild(r), Hi.removeChild(n), i;
}, ka = function(e, t) {
	for (var n = t.length; n--;) if (e.hasAttribute(t[n])) return e.getAttribute(t[n]);
}, Aa = function(e) {
	var t, n;
	try {
		t = e.getBBox();
	} catch {
		t = Oa(e), n = 1;
	}
	return t && (t.width || t.height) || n || (t = Oa(e)), t && !t.width && !t.x && !t.y ? {
		x: +ka(e, [
			"x",
			"cx",
			"x1"
		]) || 0,
		y: +ka(e, [
			"y",
			"cy",
			"y1"
		]) || 0,
		width: 0,
		height: 0
	} : t;
}, ja = function(e) {
	return !(!e.getCTM || e.parentNode && !e.ownerSVGElement || !Aa(e));
}, Ma = function(e, t) {
	if (t) {
		var n = e.style, r;
		t in Ji && t !== _a && (t = ga), n.removeProperty ? (r = t.substr(0, 2), (r === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t), n.removeProperty(r === "--" ? t : t.replace($i, "-$1").toLowerCase())) : n.removeAttribute(t);
	}
}, Na = function(e, t, n, r, i, a) {
	var o = new J(e._pt, t, n, 0, 1, a ? la : ca);
	return e._pt = o, o.b = r, o.e = i, e._props.push(n), o;
}, Pa = {
	deg: 1,
	rad: 1,
	turn: 1
}, Fa = {
	grid: 1,
	flex: 1
}, Ia = function e(t, n, r, i) {
	var a = parseFloat(r) || 0, o = (r + "").trim().substr((a + "").length) || "px", s = Wi.style, c = ea.test(n), l = t.tagName.toLowerCase() === "svg", u = (l ? "client" : "offset") + (c ? "Width" : "Height"), d = 100, f = i === "px", p = i === "%", m, h, g, _;
	if (i === o || !a || Pa[i] || Pa[o]) return a;
	if (o !== "px" && !f && (a = e(t, n, r, "px")), _ = t.getCTM && ja(t), (p || o === "%") && (Ji[n] || ~n.indexOf("adius"))) return m = _ ? t.getBBox()[c ? "width" : "height"] : t[u], W(p ? a / m * d : a / 100 * m);
	if (s[c ? "width" : "height"] = d + (f ? o : i), h = i !== "rem" && ~n.indexOf("adius") || i === "em" && t.appendChild && !l ? t : t.parentNode, _ && (h = (t.ownerSVGElement || {}).parentNode), (!h || h === Vi || !h.appendChild) && (h = Vi.body), g = h._gsap, g && p && g.width && c && g.time === Lr.time && !g.uncache) return W(a / g.width * d);
	if (p && (n === "height" || n === "width")) {
		var v = t.style[n];
		t.style[n] = d + i, m = t[u], v ? t.style[n] = v : Ma(t, n);
	} else (p || o === "%") && !Fa[wa(h, "display")] && (s.position = wa(t, "position")), h === t && (s.position = "static"), h.appendChild(Wi), m = Wi[u], h.removeChild(Wi), s.position = "absolute";
	return c && p && (g = dn(h), g.time = Lr.time, g.width = h[u]), W(f ? m * a / d : m && a ? d / m * a : 0);
}, La = function(e, t, n, r) {
	var i;
	return Ui || Da(), t in na && t !== "transform" && (t = na[t], ~t.indexOf(",") && (t = t.split(",")[0])), Ji[t] && t !== "transform" ? (i = Ya(e, r), i = t === "transformOrigin" ? i.svg ? i.origin : Xa(wa(e, _a)) + " " + i.zOrigin + "px" : i[t]) : (i = e.style[t], (!i || i === "auto" || r || ~(i + "").indexOf("calc(")) && (i = Ha[t] && Ha[t](e, t, n) || wa(e, t) || fn(e, t) || +(t === "opacity"))), n && !~(i + "").trim().indexOf(" ") ? Ia(e, t, i, n) + n : i;
}, Ra = function(e, t, n, r) {
	if (!n || n === "none") {
		var i = Ea(t, e, 1), a = i && wa(e, i, 1);
		a && a !== n ? (t = i, n = a) : t === "borderColor" && (n = wa(e, "borderTopColor"));
	}
	var o = new J(this._pt, e.style, t, 0, 1, bi), s = 0, c = 0, l, u, d, f, p, m, h, g, _, v, y, b;
	if (o.b = n, o.e = r, n += "", r += "", r.substring(0, 6) === "var(--" && (r = wa(e, r.substring(4, r.indexOf(")")))), r === "auto" && (m = e.style[t], e.style[t] = r, r = wa(e, t) || r, m ? e.style[t] = m : Ma(e, t)), l = [n, r], Fr(l), n = l[0], r = l[1], d = n.match(Pt) || [], b = r.match(Pt) || [], b.length) {
		for (; u = Pt.exec(r);) h = u[0], _ = r.substring(s, u.index), p ? p = (p + 1) % 5 : (_.substr(-5) === "rgba(" || _.substr(-5) === "hsla(") && (p = 1), h !== (m = d[c++] || "") && (f = parseFloat(m) || 0, y = m.substr((f + "").length), h.charAt(1) === "=" && (h = mn(f, h) + y), g = parseFloat(h), v = h.substr((g + "").length), s = Pt.lastIndex - v.length, v || (v = v || lt.units[t] || y, s === r.length && (r += v, o.e += v)), y !== v && (f = Ia(e, t, m, v) || 0), o._pt = {
			_next: o._pt,
			p: _ || c === 1 ? _ : ",",
			s: f,
			c: g - f,
			m: p && p < 4 || t === "zIndex" ? Math.round : 0
		});
		o.c = s < r.length ? r.substring(s, r.length) : "";
	} else o.r = t === "display" && r === "none" ? la : ca;
	return It.test(r) && (o.e = 0), this._pt = o, o;
}, za = {
	top: "0%",
	bottom: "100%",
	left: "0%",
	right: "100%",
	center: "50%"
}, Ba = function(e) {
	var t = e.split(" "), n = t[0], r = t[1] || "50%";
	return (n === "top" || n === "bottom" || r === "left" || r === "right") && (e = n, n = r, r = e), t[0] = za[n] || n, t[1] = za[r] || r, t.join(" ");
}, Va = function(e, t) {
	if (t.tween && t.tween._time === t.tween._dur) {
		var n = t.t, r = n.style, i = t.u, a = n._gsap, o, s, c;
		if (i === "all" || i === !0) r.cssText = "", s = 1;
		else for (i = i.split(","), c = i.length; --c > -1;) o = i[c], Ji[o] && (s = 1, o = o === "transformOrigin" ? _a : ga), Ma(n, o);
		s && (Ma(n, ga), a && (a.svg && n.removeAttribute("transform"), r.scale = r.rotate = r.translate = "none", Ya(n, 1), a.uncache = 1, ya(r)));
	}
}, Ha = { clearProps: function(e, t, n, r, i) {
	if (i.data !== "isFromStart") {
		var a = e._pt = new J(e._pt, t, n, 0, 0, Va);
		return a.u = r, a.pr = -10, a.tween = i, e._props.push(n), 1;
	}
} }, Ua = [
	1,
	0,
	0,
	1,
	0,
	0
], Wa = {}, Ga = function(e) {
	return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
}, Ka = function(e) {
	var t = wa(e, ga);
	return Ga(t) ? Ua : t.substr(7).match(Nt).map(W);
}, qa = function(e, t) {
	var n = e._gsap || dn(e), r = e.style, i = Ka(e), a, o, s, c;
	return n.svg && e.getAttribute("transform") ? (s = e.transform.baseVal.consolidate().matrix, i = [
		s.a,
		s.b,
		s.c,
		s.d,
		s.e,
		s.f
	], i.join(",") === "1,0,0,1,0,0" ? Ua : i) : (i === Ua && !e.offsetParent && e !== Hi && !n.svg && (s = r.display, r.display = "block", a = e.parentNode, (!a || !e.offsetParent && !e.getBoundingClientRect().width) && (c = 1, o = e.nextElementSibling, Hi.appendChild(e)), i = Ka(e), s ? r.display = s : Ma(e, "display"), c && (o ? a.insertBefore(e, o) : a ? a.appendChild(e) : Hi.removeChild(e))), t && i.length > 6 ? [
		i[0],
		i[1],
		i[4],
		i[5],
		i[12],
		i[13]
	] : i);
}, Ja = function(e, t, n, r, i, a) {
	var o = e._gsap, s = i || qa(e, !0), c = o.xOrigin || 0, l = o.yOrigin || 0, u = o.xOffset || 0, d = o.yOffset || 0, f = s[0], p = s[1], m = s[2], h = s[3], g = s[4], _ = s[5], v = t.split(" "), y = parseFloat(v[0]) || 0, b = parseFloat(v[1]) || 0, x, S, C, w;
	n ? s !== Ua && (S = f * h - p * m) && (C = h / S * y + b * (-m / S) + (m * _ - h * g) / S, w = y * (-p / S) + f / S * b - (f * _ - p * g) / S, y = C, b = w) : (x = Aa(e), y = x.x + (~v[0].indexOf("%") ? y / 100 * x.width : y), b = x.y + (~(v[1] || v[0]).indexOf("%") ? b / 100 * x.height : b)), r || r !== !1 && o.smooth ? (g = y - c, _ = b - l, o.xOffset = u + (g * f + _ * m) - g, o.yOffset = d + (g * p + _ * h) - _) : o.xOffset = o.yOffset = 0, o.xOrigin = y, o.yOrigin = b, o.smooth = !!r, o.origin = t, o.originIsAbsolute = !!n, e.style[_a] = "0px 0px", a && (Na(a, o, "xOrigin", c, y), Na(a, o, "yOrigin", l, b), Na(a, o, "xOffset", u, o.xOffset), Na(a, o, "yOffset", d, o.yOffset)), e.setAttribute("data-svg-origin", y + " " + b);
}, Ya = function(e, t) {
	var n = e._gsap || new Xr(e);
	if ("x" in n && !t && !n.uncache) return n;
	var r = e.style, i = n.scaleX < 0, a = "px", o = "deg", s = getComputedStyle(e), c = wa(e, _a) || "0", l = u = d = m = h = g = _ = v = y = 0, u, d, f = p = 1, p, m, h, g, _, v, y, b, x, S, C, w, T, E, D, O, k, A, j, M, N, P, ee, F, I, te, L, ne;
	return n.svg = !!(e.getCTM && ja(e)), s.translate && ((s.translate !== "none" || s.scale !== "none" || s.rotate !== "none") && (r[ga] = (s.translate === "none" ? "" : "translate3d(" + (s.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") ") + (s.rotate === "none" ? "" : "rotate(" + s.rotate + ") ") + (s.scale === "none" ? "" : "scale(" + s.scale.split(" ").join(",") + ") ") + (s[ga] === "none" ? "" : s[ga])), r.scale = r.rotate = r.translate = "none"), S = qa(e, n.svg), n.svg && (n.uncache ? (N = e.getBBox(), c = n.xOrigin - N.x + "px " + (n.yOrigin - N.y) + "px", M = "") : M = !t && e.getAttribute("data-svg-origin"), Ja(e, M || c, !!M || n.originIsAbsolute, n.smooth !== !1, S)), b = n.xOrigin || 0, x = n.yOrigin || 0, S !== Ua && (E = S[0], D = S[1], O = S[2], k = S[3], l = A = S[4], u = j = S[5], S.length === 6 ? (f = Math.sqrt(E * E + D * D), p = Math.sqrt(k * k + O * O), m = E || D ? Zi(D, E) * Yi : 0, _ = O || k ? Zi(O, k) * Yi + m : 0, _ && (p *= Math.abs(Math.cos(_ * Xi))), n.svg && (l -= b - (b * E + x * O), u -= x - (b * D + x * k))) : (ne = S[6], te = S[7], ee = S[8], F = S[9], I = S[10], L = S[11], l = S[12], u = S[13], d = S[14], C = Zi(ne, I), h = C * Yi, C && (w = Math.cos(-C), T = Math.sin(-C), M = A * w + ee * T, N = j * w + F * T, P = ne * w + I * T, ee = A * -T + ee * w, F = j * -T + F * w, I = ne * -T + I * w, L = te * -T + L * w, A = M, j = N, ne = P), C = Zi(-O, I), g = C * Yi, C && (w = Math.cos(-C), T = Math.sin(-C), M = E * w - ee * T, N = D * w - F * T, P = O * w - I * T, L = k * T + L * w, E = M, D = N, O = P), C = Zi(D, E), m = C * Yi, C && (w = Math.cos(C), T = Math.sin(C), M = E * w + D * T, N = A * w + j * T, D = D * w - E * T, j = j * w - A * T, E = M, A = N), h && Math.abs(h) + Math.abs(m) > 359.9 && (h = m = 0, g = 180 - g), f = W(Math.sqrt(E * E + D * D + O * O)), p = W(Math.sqrt(j * j + ne * ne)), C = Zi(A, j), _ = Math.abs(C) > 2e-4 ? C * Yi : 0, y = L ? 1 / (L < 0 ? -L : L) : 0), n.svg && (M = e.getAttribute("transform"), n.forceCSS = e.setAttribute("transform", "") || !Ga(wa(e, ga)), M && e.setAttribute("transform", M))), Math.abs(_) > 90 && Math.abs(_) < 270 && (i ? (f *= -1, _ += m <= 0 ? 180 : -180, m += m <= 0 ? 180 : -180) : (p *= -1, _ += _ <= 0 ? 180 : -180)), t ||= n.uncache, n.x = l - ((n.xPercent = l && (!t && n.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-l) ? -50 : 0))) ? e.offsetWidth * n.xPercent / 100 : 0) + a, n.y = u - ((n.yPercent = u && (!t && n.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-u) ? -50 : 0))) ? e.offsetHeight * n.yPercent / 100 : 0) + a, n.z = d + a, n.scaleX = W(f), n.scaleY = W(p), n.rotation = W(m) + o, n.rotationX = W(h) + o, n.rotationY = W(g) + o, n.skewX = _ + o, n.skewY = v + o, n.transformPerspective = y + a, (n.zOrigin = parseFloat(c.split(" ")[2]) || !t && n.zOrigin || 0) && (r[_a] = Xa(c)), n.xOffset = n.yOffset = 0, n.force3D = lt.force3D, n.renderTransform = n.svg ? ro : Sa ? no : Qa, n.uncache = 0, n;
}, Xa = function(e) {
	return (e = e.split(" "))[0] + " " + e[1];
}, Za = function(e, t, n) {
	var r = tr(t);
	return W(parseFloat(t) + parseFloat(Ia(e, "x", n + "px", r))) + r;
}, Qa = function(e, t) {
	t.z = "0px", t.rotationY = t.rotationX = "0deg", t.force3D = 0, no(e, t);
}, $a = "0deg", eo = "0px", to = ") ", no = function(e, t) {
	var n = t || this, r = n.xPercent, i = n.yPercent, a = n.x, o = n.y, s = n.z, c = n.rotation, l = n.rotationY, u = n.rotationX, d = n.skewX, f = n.skewY, p = n.scaleX, m = n.scaleY, h = n.transformPerspective, g = n.force3D, _ = n.target, v = n.zOrigin, y = "", b = g === "auto" && e && e !== 1 || g === !0;
	if (v && (u !== $a || l !== $a)) {
		var x = parseFloat(l) * Xi, S = Math.sin(x), C = Math.cos(x), w;
		x = parseFloat(u) * Xi, w = Math.cos(x), a = Za(_, a, S * w * -v), o = Za(_, o, -Math.sin(x) * -v), s = Za(_, s, C * w * -v + v);
	}
	h !== eo && (y += "perspective(" + h + to), (r || i) && (y += "translate(" + r + "%, " + i + "%) "), (b || a !== eo || o !== eo || s !== eo) && (y += s !== eo || b ? "translate3d(" + a + ", " + o + ", " + s + ") " : "translate(" + a + ", " + o + to), c !== $a && (y += "rotate(" + c + to), l !== $a && (y += "rotateY(" + l + to), u !== $a && (y += "rotateX(" + u + to), (d !== $a || f !== $a) && (y += "skew(" + d + ", " + f + to), (p !== 1 || m !== 1) && (y += "scale(" + p + ", " + m + to), _.style[ga] = y || "translate(0, 0)";
}, ro = function(e, t) {
	var n = t || this, r = n.xPercent, i = n.yPercent, a = n.x, o = n.y, s = n.rotation, c = n.skewX, l = n.skewY, u = n.scaleX, d = n.scaleY, f = n.target, p = n.xOrigin, m = n.yOrigin, h = n.xOffset, g = n.yOffset, _ = n.forceCSS, v = parseFloat(a), y = parseFloat(o), b, x, S, C, w;
	s = parseFloat(s), c = parseFloat(c), l = parseFloat(l), l && (l = parseFloat(l), c += l, s += l), s || c ? (s *= Xi, c *= Xi, b = Math.cos(s) * u, x = Math.sin(s) * u, S = Math.sin(s - c) * -d, C = Math.cos(s - c) * d, c && (l *= Xi, w = Math.tan(c - l), w = Math.sqrt(1 + w * w), S *= w, C *= w, l && (w = Math.tan(l), w = Math.sqrt(1 + w * w), b *= w, x *= w)), b = W(b), x = W(x), S = W(S), C = W(C)) : (b = u, C = d, x = S = 0), (v && !~(a + "").indexOf("px") || y && !~(o + "").indexOf("px")) && (v = Ia(f, "x", a, "px"), y = Ia(f, "y", o, "px")), (p || m || h || g) && (v = W(v + p - (p * b + m * S) + h), y = W(y + m - (p * x + m * C) + g)), (r || i) && (w = f.getBBox(), v = W(v + r / 100 * w.width), y = W(y + i / 100 * w.height)), w = "matrix(" + b + "," + x + "," + S + "," + C + "," + v + "," + y + ")", f.setAttribute("transform", w), _ && (f.style[ga] = w);
}, Y = function(e, t, n, r, i) {
	var a = 360, o = bt(i), s = parseFloat(i) * (o && ~i.indexOf("rad") ? Yi : 1) - r, c = r + s + "deg", l, u;
	return o && (l = i.split("_")[1], l === "short" && (s %= a, s !== s % (a / 2) && (s += s < 0 ? a : -a)), l === "cw" && s < 0 ? s = (s + a * Qi) % a - ~~(s / a) * a : l === "ccw" && s > 0 && (s = (s - a * Qi) % a - ~~(s / a) * a)), e._pt = u = new J(e._pt, t, n, r, s, ia), u.e = c, u.u = "deg", e._props.push(n), u;
}, io = function(e, t) {
	for (var n in t) e[n] = t[n];
	return e;
}, ao = function(e, t, n) {
	var r = io({}, n._gsap), i = "perspective,force3D,transformOrigin,svgOrigin", a = n.style, o, s, c, l, u, d, f, p;
	for (s in r.svg ? (c = n.getAttribute("transform"), n.setAttribute("transform", ""), a[ga] = t, o = Ya(n, 1), Ma(n, ga), n.setAttribute("transform", c)) : (c = getComputedStyle(n)[ga], a[ga] = t, o = Ya(n, 1), a[ga] = c), Ji) c = r[s], l = o[s], c !== l && i.indexOf(s) < 0 && (f = tr(c), p = tr(l), u = f === p ? parseFloat(c) : Ia(n, s, c, p), d = parseFloat(l), e._pt = new J(e._pt, o, s, u, d - u, ra), e._pt.u = p || 0, e._props.push(s));
	io(o, r);
};
pn("padding,margin,Width,Radius", function(e, t) {
	var n = "Top", r = "Right", i = "Bottom", a = "Left", o = (t < 3 ? [
		n,
		r,
		i,
		a
	] : [
		n + a,
		n + r,
		i + r,
		i + a
	]).map(function(n) {
		return t < 2 ? e + n : "border" + n + e;
	});
	Ha[t > 1 ? "border" + e : e] = function(e, t, n, r, i) {
		var a, s;
		if (arguments.length < 4) return a = o.map(function(t) {
			return La(e, t, n);
		}), s = a.join(" "), s.split(a[0]).length === 5 ? a[0] : s;
		a = (r + "").split(" "), s = {}, o.forEach(function(e, t) {
			return s[e] = a[t] = a[t] || a[(t - 1) / 2 | 0];
		}), e.init(t, s, i);
	};
});
var oo = {
	name: "css",
	register: Da,
	targetTest: function(e) {
		return e.style && e.nodeType;
	},
	init: function(e, t, n, r, i) {
		var a = this._props, o = e.style, s = n.vars.startAt, c, l, u, d, f, p, m, h, g, _, v, y, b, x, S, C, w;
		for (m in Ui || Da(), this.styles = this.styles || xa(e), C = this.styles.props, this.tween = n, t) if (m !== "autoRound" && (l = t[m], !(an[m] && ni(m, t, n, r, e, i)))) {
			if (f = typeof l, p = Ha[m], f === "function" && (l = l.call(n, r, e, i), f = typeof l), f === "string" && ~l.indexOf("random(") && (l = yr(l)), p) p(this, e, m, l, n) && (S = 1);
			else if (m.substr(0, 2) === "--") c = (getComputedStyle(e).getPropertyValue(m) + "").trim(), l += "", Nr.lastIndex = 0, Nr.test(c) || (h = tr(c), g = tr(l), g ? h !== g && (c = Ia(e, m, c, g) + g) : h && (l += h)), this.add(o, "setProperty", c, l, r, i, 0, 0, m), a.push(m), C.push(m, 0, o[m]);
			else if (f !== "undefined") {
				if (s && m in s ? (c = typeof s[m] == "function" ? s[m].call(n, r, e, i) : s[m], bt(c) && ~c.indexOf("random(") && (c = yr(c)), tr(c + "") || c === "auto" || (c += lt.units[m] || tr(La(e, m)) || ""), (c + "").charAt(1) === "=" && (c = La(e, m))) : c = La(e, m), d = parseFloat(c), _ = f === "string" && l.charAt(1) === "=" && l.substr(0, 2), _ && (l = l.substr(2)), u = parseFloat(l), m in na && (m === "autoAlpha" && (d === 1 && La(e, "visibility") === "hidden" && u && (d = 0), C.push("visibility", 0, o.visibility), Na(this, o, "visibility", d ? "inherit" : "hidden", u ? "inherit" : "hidden", !u)), m !== "scale" && m !== "transform" && (m = na[m], ~m.indexOf(",") && (m = m.split(",")[0]))), v = m in Ji, v) {
					if (this.styles.save(m), w = l, f === "string" && l.substring(0, 6) === "var(--") {
						if (l = wa(e, l.substring(4, l.indexOf(")"))), l.substring(0, 5) === "calc(") {
							var T = e.style.perspective;
							e.style.perspective = l, l = wa(e, "perspective"), T ? e.style.perspective = T : Ma(e, "perspective");
						}
						u = parseFloat(l);
					}
					if (y || (b = e._gsap, b.renderTransform && !t.parseTransform || Ya(e, t.parseTransform), x = t.smoothOrigin !== !1 && b.smooth, y = this._pt = new J(this._pt, o, ga, 0, 1, b.renderTransform, b, 0, -1), y.dep = 1), m === "scale") this._pt = new J(this._pt, b, "scaleY", b.scaleY, (_ ? mn(b.scaleY, _ + u) : u) - b.scaleY || 0, ra), this._pt.u = 0, a.push("scaleY", m), m += "X";
					else if (m === "transformOrigin") {
						C.push(_a, 0, o[_a]), l = Ba(l), b.svg ? Ja(e, l, 0, x, 0, this) : (g = parseFloat(l.split(" ")[2]) || 0, g !== b.zOrigin && Na(this, b, "zOrigin", b.zOrigin, g), Na(this, o, m, Xa(c), Xa(l)));
						continue;
					} else if (m === "svgOrigin") {
						Ja(e, l, 1, x, 0, this);
						continue;
					} else if (m in Wa) {
						Y(this, b, m, d, _ ? mn(d, _ + l) : l);
						continue;
					} else if (m === "smoothOrigin") {
						Na(this, b, "smooth", b.smooth, l);
						continue;
					} else if (m === "force3D") {
						b[m] = l;
						continue;
					} else if (m === "transform") {
						ao(this, l, e);
						continue;
					}
				} else m in o || (m = Ea(m) || m);
				if (v || (u || u === 0) && (d || d === 0) && !ta.test(l) && m in o) h = (c + "").substr((d + "").length), u ||= 0, g = tr(l) || (m in lt.units ? lt.units[m] : h), h !== g && (d = Ia(e, m, c, g)), this._pt = new J(this._pt, v ? b : o, m, d, (_ ? mn(d, _ + u) : u) - d, !v && (g === "px" || m === "zIndex") && t.autoRound !== !1 ? sa : ra), this._pt.u = g || 0, v && w !== l ? (this._pt.b = c, this._pt.e = w, this._pt.r = oa) : h !== g && g !== "%" && (this._pt.b = c, this._pt.r = aa);
				else if (m in o) Ra.call(this, e, m, c, _ ? _ + l : l);
				else if (m in e) this.add(e, m, c || e[m], _ ? _ + l : l, r, i);
				else if (m !== "parseTransform") {
					qt(m, l);
					continue;
				}
				v || (m in o ? C.push(m, 0, o[m]) : typeof e[m] == "function" ? C.push(m, 2, e[m]()) : C.push(m, 1, c || e[m])), a.push(m);
			}
		}
		S && Ti(this);
	},
	render: function(e, t) {
		if (t.tween._time || !Ki()) for (var n = t._pt; n;) n.r(e, n.d), n = n._next;
		else t.styles.revert();
	},
	get: La,
	aliases: na,
	getSetter: function(e, t, n) {
		var r = na[t];
		return r && r.indexOf(",") < 0 && (t = r), t in Ji && t !== _a && (e._gsap.x || La(e, "x")) ? n && Gi === n ? t === "scale" ? pa : fa : (Gi = n || {}) && (t === "scale" ? ma : ha) : e.style && !Ct(e.style[t]) ? ua : ~t.indexOf("-") ? da : _i(e, t);
	},
	core: {
		_removeProperty: Ma,
		_getMatrix: qa
	}
};
zi.utils.checkPrefix = Ea, zi.core.getStyleSaver = xa, (function(e, t, n, r) {
	var i = pn(e + "," + t + "," + n, function(e) {
		Ji[e] = 1;
	});
	pn(t, function(e) {
		lt.units[e] = "deg", Wa[e] = 1;
	}), na[i[13]] = e + "," + t, pn(r, function(e) {
		var t = e.split(":");
		na[t[1]] = i[t[0]];
	});
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"), pn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(e) {
	lt.units[e] = "px";
}), zi.registerPlugin(oo);
//#endregion
//#region node_modules/.pnpm/gsap@3.15.0/node_modules/gsap/index.js
var so = zi.registerPlugin(oo) || zi;
so.core.Tween;
//#endregion
//#region src/new-site/Navigation.tsx
var co = [
	[
		"home",
		"首页",
		"Home"
	],
	[
		"directory",
		"目录",
		"Explore"
	],
	[
		"experience",
		"经历",
		"Experience"
	],
	[
		"projects",
		"项目",
		"Projects"
	],
	[
		"life",
		"生活",
		"Life"
	],
	[
		"contact",
		"联系",
		"Contact"
	]
];
function lo() {
	let e = l(), { lang: t, setLang: r, motion: i, setMotion: a, visible: o, active: s, go: c, playing: u, audible: d, musicPhase: p, toggleMusic: m, volume: h, setVolume: g } = n(), [v, y] = (0, j.useState)(!1), b = (0, j.useRef)(null), x = (0, j.useRef)(null), S = (0, j.useRef)(null), w = (0, j.useRef)(null), [T, E] = (0, j.useState)({
		left: 0,
		width: 0,
		ready: !1
	}), D = t === "zh";
	(0, j.useEffect)(() => (v ? (b.current?.showModal(), document.body.classList.add("has-dialog")) : b.current?.open && b.current.close(), () => document.body.classList.remove("has-dialog")), [v]), (0, j.useLayoutEffect)(() => {
		let e = w.current;
		if (!e) return;
		let t = !1, n = () => {
			if (t) return;
			let n = e.querySelector("a[aria-current]");
			if (!n || !e.offsetWidth) {
				E((e) => e.ready ? {
					...e,
					ready: !1
				} : e);
				return;
			}
			let r = {
				left: n.offsetLeft,
				width: n.offsetWidth,
				ready: !0
			};
			E((e) => e.left === r.left && e.width === r.width && e.ready ? e : r);
		};
		n();
		let r = new ResizeObserver(n);
		return r.observe(e), e.querySelectorAll("a").forEach((e) => r.observe(e)), document.fonts.ready.then(n), () => {
			t = !0, r.disconnect();
		};
	}, [s, t]);
	let O = (e) => {
		y(!1), c(e);
	}, k = D ? u || p === "loading" ? "暂停背景音乐" : "播放背景音乐" : u || p === "loading" ? "Pause background music" : "Play background music";
	return /* @__PURE__ */ (0, V.jsxs)(V.Fragment, { children: [/* @__PURE__ */ (0, V.jsxs)("header", {
		className: "site-nav",
		"data-nav-motion": i && o ? "running" : "paused",
		children: [
			/* @__PURE__ */ (0, V.jsxs)("a", {
				className: "site-brand",
				href: "#home",
				"aria-label": "JasonG",
				onClick: (e) => {
					e.preventDefault(), c("home");
				},
				children: ["JG", /* @__PURE__ */ (0, V.jsx)("span", {
					className: "brand-spark",
					"aria-hidden": "true",
					children: "+"
				})]
			}),
			/* @__PURE__ */ (0, V.jsxs)("nav", {
				ref: w,
				className: "pill-nav",
				"aria-label": e("navigation.text01"),
				children: [/* @__PURE__ */ (0, V.jsx)("span", {
					className: "nav-current-pill",
					"aria-hidden": "true",
					"data-ready": T.ready,
					style: {
						"--nav-pill-x": `${T.left}px`,
						"--nav-pill-width": `${T.width}px`
					}
				}), co.map(([t]) => /* @__PURE__ */ (0, V.jsx)("a", {
					href: `#${t}`,
					"aria-current": s === t ? "location" : void 0,
					onClick: (e) => {
						e.preventDefault(), c(t);
					},
					children: /* @__PURE__ */ (0, V.jsx)("span", { children: e(`navigation.${t}`) })
				}, t))]
			}),
			/* @__PURE__ */ (0, V.jsxs)("div", {
				className: "nav-actions",
				children: [
					/* @__PURE__ */ (0, V.jsxs)("button", {
						className: `music-switch ${d ? "is-playing" : ""}`,
						onClick: m,
						"aria-label": k,
						title: k,
						"aria-pressed": u,
						"data-music-state": p,
						children: [/* @__PURE__ */ (0, V.jsx)("span", {
							className: "sound-wave",
							"aria-hidden": "true",
							children: [
								0,
								1,
								2,
								3,
								4
							].map((e) => /* @__PURE__ */ (0, V.jsx)("i", { style: { animationDelay: `${e * -.19}s` } }, e))
						}), (p === "blocked" || p === "error") && /* @__PURE__ */ (0, V.jsx)("span", {
							className: "music-waiting",
							"aria-hidden": "true"
						})]
					}),
					/* @__PURE__ */ (0, V.jsxs)("details", {
						className: "volume-popover",
						children: [/* @__PURE__ */ (0, V.jsx)("summary", {
							"aria-label": e("navigation.text02"),
							title: e("navigation.text03"),
							children: /* @__PURE__ */ (0, V.jsx)(it, { size: 15 })
						}), /* @__PURE__ */ (0, V.jsxs)("div", {
							className: "volume-panel",
							children: [
								/* @__PURE__ */ (0, V.jsxs)("div", {
									className: "volume-caption",
									children: [/* @__PURE__ */ (0, V.jsx)("span", { children: e("navigation.text04") }), /* @__PURE__ */ (0, V.jsxs)("output", { children: [Math.round(h * 100), "%"] })]
								}),
								/* @__PURE__ */ (0, V.jsxs)("div", {
									className: "elastic-slider",
									ref: S,
									onPointerMove: (e) => {
										if (!i || !e.buttons || !S.current) return;
										let t = S.current.getBoundingClientRect(), n = Math.max(-6, Math.min(6, (e.clientX - (t.left + t.width / 2)) / 25));
										so.to(S.current, {
											x: n,
											scaleY: 1.1,
											duration: .18,
											overwrite: !0
										});
									},
									onPointerUp: () => {
										S.current && so.to(S.current, {
											x: 0,
											scaleY: 1,
											duration: i ? .65 : 0,
											ease: "elastic.out(1,0.4)",
											overwrite: !0
										});
									},
									onPointerCancel: () => {
										S.current && so.set(S.current, {
											x: 0,
											scaleY: 1
										});
									},
									children: [
										/* @__PURE__ */ (0, V.jsx)(it, { size: 16 }),
										/* @__PURE__ */ (0, V.jsx)("input", {
											type: "range",
											min: "0",
											max: "1",
											step: "0.01",
											value: h,
											onChange: (e) => g(Number(e.target.value)),
											"aria-label": e("navigation.text05")
										}),
										/* @__PURE__ */ (0, V.jsx)(ot, { size: 18 })
									]
								}),
								/* @__PURE__ */ (0, V.jsx)("p", { children: e(p === "blocked" ? "navigation.text06" : "navigation.text07") })
							]
						})]
					}),
					/* @__PURE__ */ (0, V.jsx)("button", {
						className: "language-switch",
						onClick: () => r(D ? "en" : "zh"),
						"aria-label": e("navigation.text09"),
						children: e("navigation.text10")
					}),
					/* @__PURE__ */ (0, V.jsx)("button", {
						className: "motion-switch",
						"aria-pressed": i,
						onClick: () => a(!i),
						children: D ? `动效${i ? "开" : "关"}` : `Motion ${i ? "on" : "off"}`
					}),
					/* @__PURE__ */ (0, V.jsx)("button", {
						ref: x,
						className: "menu-switch",
						onClick: () => y(!0),
						"aria-label": e("navigation.text11"),
						"aria-expanded": v,
						children: /* @__PURE__ */ (0, V.jsx)(We, { size: 23 })
					})
				]
			})
		]
	}), /* @__PURE__ */ (0, V.jsxs)("dialog", {
		ref: b,
		className: "bubble-menu",
		onCancel: () => y(!1),
		onClose: () => {
			y(!1), document.body.classList.remove("has-dialog"), x.current?.focus();
		},
		children: [
			/* @__PURE__ */ (0, V.jsxs)("div", {
				className: "bubble-menu-header",
				children: [/* @__PURE__ */ (0, V.jsx)("strong", { children: e("home.name") }), /* @__PURE__ */ (0, V.jsx)("button", {
					onClick: () => y(!1),
					"aria-label": e("navigation.text12"),
					children: /* @__PURE__ */ (0, V.jsx)(_, {})
				})]
			}),
			/* @__PURE__ */ (0, V.jsx)("nav", {
				"aria-label": e("navigation.text13"),
				children: co.map(([t], n) => /* @__PURE__ */ (0, V.jsxs)("button", {
					style: { "--order": n },
					onClick: () => O(t),
					"aria-current": s === t ? "location" : void 0,
					children: [/* @__PURE__ */ (0, V.jsx)("span", { children: e(`navigation.${t}`) }), /* @__PURE__ */ (0, V.jsx)(f, { size: 22 })]
				}, t))
			}),
			/* @__PURE__ */ (0, V.jsx)("p", { children: /* @__PURE__ */ (0, V.jsx)(C, {
				insideDialog: !0,
				tone: "support",
				text: e("navigation.text14")
			}) })
		]
	})] });
}
//#endregion
//#region src/new-site/decorative-webgl.ts
function uo(e, t) {
	let [n, r] = (0, j.useState)(!1), [i, a] = (0, j.useState)(() => !document.hidden);
	return (0, j.useEffect)(() => {
		let t = e.current;
		if (!t) return;
		let n = new IntersectionObserver(([e]) => r(e.isIntersecting), { threshold: .02 });
		n.observe(t);
		let i = () => a(!document.hidden);
		return document.addEventListener("visibilitychange", i), () => {
			n.disconnect(), document.removeEventListener("visibilitychange", i);
		};
	}, [e]), t && n && i;
}
function fo(e) {
	let t = e >>> 0;
	return () => (t = Math.imul(t, 1664525) + 1013904223 >>> 0, t / 4294967296);
}
function po(e) {
	let t = e.replace(/^#/, "");
	t.length === 3 && (t = t.split("").map((e) => e + e).join(""));
	let n = /^[\da-f]{6}$/i.test(t) ? parseInt(t, 16) : 14739949;
	return [
		(n >> 16 & 255) / 255,
		(n >> 8 & 255) / 255,
		(n & 255) / 255
	];
}
function mo(e, t, n) {
	let r = (t, n) => {
		let r = e.createShader(t);
		if (!r) throw Error("Decorative shader unavailable");
		if (e.shaderSource(r, n), e.compileShader(r), !e.getShaderParameter(r, e.COMPILE_STATUS)) {
			let t = e.getShaderInfoLog(r);
			throw e.deleteShader(r), Error(t || "Decorative shader compilation failed");
		}
		return r;
	}, i = r(e.VERTEX_SHADER, t), a = null, o = null;
	try {
		if (a = r(e.FRAGMENT_SHADER, n), o = e.createProgram(), !o) throw Error("Decorative program unavailable");
		if (e.attachShader(o, i), e.attachShader(o, a), e.linkProgram(o), !e.getProgramParameter(o, e.LINK_STATUS)) throw Error(e.getProgramInfoLog(o) || "Decorative program link failed");
		return o;
	} catch (t) {
		throw o && e.deleteProgram(o), t;
	} finally {
		e.deleteShader(i), a && e.deleteShader(a);
	}
}
function ho(e) {
	e.getExtension("WEBGL_lose_context")?.loseContext();
}
//#endregion
//#region src/new-site/Particles.tsx
var go = "\nattribute vec3 position;\nattribute vec4 random;\nattribute vec3 color;\nuniform mat4 projectionMatrix;\nuniform float uTime;\nuniform float uAspect;\nvarying vec4 vRandom;\nvarying vec3 vColor;\nvoid main(){\n  vRandom=random;vColor=color;\n  // Spread the cloud across the small card viewport, with bounded depth so the\n  // majority of its points stay visible instead of clustering behind the art.\n  vec3 pos=position;\n  pos.xy=sign(pos.xy)*pow(abs(pos.xy),vec2(.65))*9.3;\n  pos.x*=uAspect;pos.z*=12.;\n  float a=uTime*.05;\n  pos.xy=mat2(cos(a),-sin(a),sin(a),cos(a))*pos.xy;\n  pos.x+=sin(uTime*random.z+6.28*random.w)*mix(.1,1.5,random.x);\n  pos.y+=sin(uTime*random.y+6.28*random.x)*mix(.1,1.5,random.w);\n  pos.z+=sin(uTime*random.w+6.28*random.y)*mix(.1,1.5,random.z);\n  vec4 mvPos=vec4(pos-vec3(0.,0.,55.),1.);\n  gl_PointSize=clamp(240.*(1.+(random.x-.5))/length(mvPos.xyz),2.8,7.);\n  gl_Position=projectionMatrix*mvPos;\n}\n", _o = "\nprecision highp float;\nuniform float uTime;\nvarying vec4 vRandom;\nvarying vec3 vColor;\nvoid main(){\n  vec2 uv=gl_PointCoord.xy;\n  float d=length(uv-vec2(.5));\n  float circle=(1.-smoothstep(.2,.5,d))*.92;\n  vec3 shade=min(vec3(1.),vColor+.06+.05*sin(uv.yxx+uTime+vRandom.y*6.28));\n  gl_FragColor=vec4(shade,circle);\n}\n", vo = [
	"#badbdc",
	"#eadbc2",
	"#b4bbdb"
];
function yo(e, t) {
	let n = fo(2117), r = new Float32Array(e * 3), i = new Float32Array(e * 4), a = new Float32Array(e * 3);
	for (let o = 0; o < e; o++) {
		let e, s, c, l;
		do
			e = n() * 2 - 1, s = n() * 2 - 1, c = n() * 2 - 1, l = e * e + s * s + c * c;
		while (l > 1 || l === 0);
		let u = Math.cbrt(n());
		r.set([
			e * u,
			s * u,
			c * u
		], o * 3), i.set([
			n(),
			n(),
			n(),
			n()
		], o * 4), a.set(po(t[Math.floor(n() * t.length)]), o * 3);
	}
	return {
		positions: r,
		randoms: i,
		colors: a
	};
}
function bo({ enabled: e, colors: t = vo, count: n = 44, className: r = "" }) {
	let i = (0, j.useRef)(null), a = (0, j.useRef)(null), o = (0, j.useRef)(0), s = uo(i, e), [c, l] = (0, j.useState)(() => matchMedia("(max-width: 700px)").matches);
	(0, j.useEffect)(() => {
		let e = matchMedia("(max-width: 700px)"), t = () => l(e.matches);
		return e.addEventListener("change", t), () => e.removeEventListener("change", t);
	}, []);
	let u = t.filter((e) => /^#[\da-f]{3}([\da-f]{3})?$/i.test(e)).join(",") || vo.join(","), d = (0, j.useMemo)(() => u.split(","), [u]), f = Math.max(16, Math.min(72, n)), p = (0, j.useMemo)(() => yo(f, d), [f, d]);
	return (0, j.useEffect)(() => {
		let e = i.current, t = a.current;
		if (!e || !t) return;
		let n = t.getContext("2d");
		if (!n) return;
		let r = () => {
			let r = e.clientWidth, i = e.clientHeight, a = Math.min(devicePixelRatio || 1, 1.25);
			t.width = Math.max(1, Math.round(r * a)), t.height = Math.max(1, Math.round(i * a)), n.setTransform(a, 0, 0, a, 0, 0), n.clearRect(0, 0, r, i);
			let o = fo(2117);
			for (let e = 0; e < f; e++) {
				let t = o() * r, a = o() * i, s = .55 + o() * 1.2, c = po(d[e % d.length]).map((e) => Math.round(e * 255));
				n.fillStyle = `rgba(${c.join(",")},${.3 + o() * .5})`, n.beginPath(), n.arc(t, a, s, 0, Math.PI * 2), n.fill();
			}
		};
		r();
		let o = new ResizeObserver(r);
		return o.observe(e), () => o.disconnect();
	}, [d, f]), (0, j.useEffect)(() => {
		let e = i.current;
		if (!e || !s || c) return;
		let t = document.createElement("canvas");
		t.className = "jg-particles__live", t.setAttribute("aria-hidden", "true");
		let n = t.getContext("webgl", {
			alpha: !0,
			premultipliedAlpha: !0,
			depth: !1,
			antialias: !1,
			powerPreference: "low-power"
		});
		if (!n) return;
		let r;
		try {
			r = mo(n, go, _o);
		} catch {
			ho(n);
			return;
		}
		n.useProgram(r), n.enable(n.BLEND), n.blendFuncSeparate(n.SRC_ALPHA, n.ONE_MINUS_SRC_ALPHA, n.ONE, n.ONE_MINUS_SRC_ALPHA), n.clearColor(0, 0, 0, 0);
		let a = [], l = (e, t, i) => {
			let o = n.createBuffer();
			if (!o) return;
			a.push(o), n.bindBuffer(n.ARRAY_BUFFER, o), n.bufferData(n.ARRAY_BUFFER, t, n.STATIC_DRAW);
			let s = n.getAttribLocation(r, e);
			n.enableVertexAttribArray(s), n.vertexAttribPointer(s, i, n.FLOAT, !1, 0, 0);
		};
		l("position", p.positions, 3), l("random", p.randoms, 4), l("color", p.colors, 3);
		let u = n.getUniformLocation(r, "projectionMatrix"), d = n.getUniformLocation(r, "uTime"), m = n.getUniformLocation(r, "uAspect"), h = () => {
			t.width = Math.max(1, Math.round(e.clientWidth)), t.height = Math.max(1, Math.round(e.clientHeight));
			let r = t.width / t.height, i = 1 / Math.tan(20 * Math.PI / 360);
			n.viewport(0, 0, t.width, t.height), n.uniformMatrix4fv(u, !1, new Float32Array([
				i / r,
				0,
				0,
				0,
				0,
				i,
				0,
				0,
				0,
				0,
				120.1 / -119.9,
				-1,
				0,
				0,
				24 / -119.9,
				0
			])), n.uniform1f(m, r);
		};
		h(), e.appendChild(t);
		let g = new ResizeObserver(h);
		g.observe(e);
		let _ = 0, v = 0, y = !1, b = (t) => {
			y || (_ = requestAnimationFrame(b), !(v && t - v < 1e3 / 24) && (o.current += v ? Math.min((t - v) / 1e3, .08) * .32 : 0, v = t, n.uniform1f(d, o.current), n.clear(n.COLOR_BUFFER_BIT), n.drawArrays(n.POINTS, 0, f), e.dataset.rendering = "webgl"));
		}, x = (n) => {
			n.preventDefault(), cancelAnimationFrame(_), e.dataset.rendering = "static", t.style.visibility = "hidden";
		};
		return t.addEventListener("webglcontextlost", x), _ = requestAnimationFrame(b), () => {
			y = !0, cancelAnimationFrame(_), g.disconnect(), t.removeEventListener("webglcontextlost", x), e.dataset.rendering = "static", a.forEach((e) => n.deleteBuffer(e)), n.deleteProgram(r), ho(n), t.remove();
		};
	}, [
		s,
		c,
		p,
		f
	]), /* @__PURE__ */ (0, V.jsx)("div", {
		ref: i,
		className: `jg-particles ${r}`,
		"data-rendering": "static",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, V.jsx)("canvas", {
			ref: a,
			className: "jg-particles__still"
		})
	});
}
//#endregion
//#region src/new-site/Yuanbao.tsx
function xo(e) {
	return null;
}
//#endregion
//#region src/new-site/home-lanyard.css
var So = O(), Co = (0, j.lazy)(() => import("./FloatingLanyardScene-CKGB0mk6.js")), wo = class extends j.Component {
	state = { failed: !1 };
	static getDerivedStateFromError() {
		return { failed: !0 };
	}
	componentDidCatch() {
		this.props.onFailure();
	}
	render() {
		return this.state.failed ? null : this.props.children;
	}
}, To = () => ({
	width: document.documentElement.clientWidth,
	height: window.innerHeight
});
function Eo() {
	let e = l(), t = y(), { lang: r, motion: i, visible: a, active: o, setProfile: s } = n(), c = d(), [u, p] = (0, j.useState)(!1), [m, h] = (0, j.useState)(!1), [g, _] = (0, j.useState)(!1), [v, b] = (0, j.useState)(!1), [x, S] = (0, j.useState)(To), C = (0, j.useRef)(null), T = (0, j.useRef)(null), E = (0, j.useRef)(null), D = (0, j.useRef)(null), O = (0, j.useRef)(0), k = o === "home" && a && !c, A = k && i && !v, M = x.width <= 600, N = Math.max(100, Math.min(M ? 160 : 180, (x.height - 160) * 2.15 / 3.15)), P = N * 3.15 / 2.15, ee = x.width * (M ? .07 : .06) + N / 2, F = u ? Math.min(M ? 200 : 180, x.height - P - 78) : (M ? 112 : 125) - P, I = ee - N / 2, te = (0, j.useCallback)((e) => {
		if (!T.current) return;
		let t = Math.max(16, Math.min(x.width - 216, e.centerX - 100)), n = Math.max(90, Math.min(x.height - 64, e.bottom + 14));
		T.current.style.transform = `translate3d(${t}px,${n}px,0)`;
	}, [x.width, x.height]), L = (0, j.useCallback)(() => {
		b(!0), _(!1);
	}, []), ne = (0, j.useCallback)(() => _(!0), []), R = (0, j.useCallback)(() => p(!0), []);
	(0, j.useEffect)(() => {
		let e = () => S(To());
		return window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
	}, []), (0, j.useEffect)(() => {
		if (A) return;
		_(!1), E.current?.end();
		let e = D.current;
		D.current = null, h(!1), e && C.current?.hasPointerCapture(e.id) && C.current.releasePointerCapture(e.id);
	}, [A]), (0, j.useEffect)(() => {
		if (A && g) return;
		let e = C.current;
		e && (e.style.transform = `translate3d(${I}px,${F}px,0)`, e.style.width = `${N}px`, e.style.height = `${P}px`, e.style.clipPath = "none"), te({
			left: I,
			top: F,
			width: N,
			height: P,
			centerX: ee,
			centerY: F + P / 2,
			bottom: F + P,
			dragging: !1
		});
	}, [
		A,
		g,
		I,
		F,
		N,
		P,
		ee,
		te
	]);
	let z = (e) => {
		let t = D.current;
		t && t.id === e.pointerId && (t.moved && (O.current = performance.now() + 400), D.current = null, h(!1), E.current?.end(), e.currentTarget.hasPointerCapture(e.pointerId) && e.currentTarget.releasePointerCapture(e.pointerId));
	}, B = () => {
		let e = D.current;
		D.current = null, e && (O.current = performance.now() + 400, C.current?.hasPointerCapture(e.id) && C.current.releasePointerCapture(e.id)), E.current?.end(), h(!1), p(!1), C.current?.focus({ preventScroll: !0 });
	}, re = {
		width: `${x.width}px`,
		"--hl-nav-height": `${M ? 70 : x.width <= 900 ? 74 : 84}px`,
		"--hl-card-width": `${N}px`,
		"--hl-card-height": `${P}px`,
		"--hl-fallback-x": `${I}px`,
		"--hl-fallback-y": `${F}px`,
		"--hl-hint-x": `${I + N + 14}px`,
		"--hl-hint-y": `${M ? 73 : 85}px`
	};
	return (0, So.createPortal)(/* @__PURE__ */ (0, V.jsxs)("aside", {
		className: "home-lanyard",
		hidden: !k,
		"data-expanded": u,
		"data-dragging": m,
		"data-ready": g && A,
		style: re,
		"aria-label": e("identity.text01"),
		children: [
			A && /* @__PURE__ */ (0, V.jsx)(wo, {
				onFailure: L,
				children: /* @__PURE__ */ (0, V.jsx)(j.Suspense, {
					fallback: null,
					children: /* @__PURE__ */ (0, V.jsx)(Co, {
						expanded: u,
						motion: i,
						lang: r,
						identity: t,
						width: x.width,
						height: x.height,
						anchorX: ee,
						handle: C,
						bridge: E,
						onOpen: R,
						onReady: ne,
						onFailure: L,
						onPose: te
					})
				})
			}),
			(!A || !g) && /* @__PURE__ */ (0, V.jsx)("div", {
				className: "hl-fallback",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, V.jsx)(w, { lang: r })
			}),
			/* @__PURE__ */ (0, V.jsx)("button", {
				ref: C,
				className: "hl-pull-target",
				type: "button",
				"aria-expanded": u,
				"aria-controls": "home-card-actions",
				"aria-label": e("identity.text02"),
				onPointerDown: (e) => {
					e.isPrimary && e.button === 0 && (e.currentTarget.setPointerCapture(e.pointerId), D.current = {
						id: e.pointerId,
						x: e.clientX,
						y: e.clientY,
						moved: !1
					}, g && A && E.current?.start(e.clientX, e.clientY));
				},
				onPointerMove: (e) => {
					let t = D.current;
					t && t.id === e.pointerId && (Math.hypot(e.clientX - t.x, e.clientY - t.y) > 5 && (t.moved = !0, h(!0), p(!0)), E.current?.move(e.clientX, e.clientY));
				},
				onPointerUp: z,
				onPointerCancel: z,
				onLostPointerCapture: z,
				onClick: (e) => {
					(!e.detail || performance.now() > O.current) && R();
				},
				onKeyDown: (e) => {
					(e.key === "Escape" || e.key === "ArrowUp") && (e.preventDefault(), B()), e.key === "ArrowDown" && (e.preventDefault(), R());
				}
			}),
			!u && /* @__PURE__ */ (0, V.jsxs)("button", {
				className: "hl-hint",
				type: "button",
				onClick: () => {
					R(), C.current?.focus({ preventScroll: !0 });
				},
				children: [/* @__PURE__ */ (0, V.jsx)(be, { size: 14 }), /* @__PURE__ */ (0, V.jsx)("span", { children: e("identity.text03") })]
			}),
			/* @__PURE__ */ (0, V.jsxs)("div", {
				ref: T,
				id: "home-card-actions",
				className: "hl-actions",
				hidden: !u || m,
				children: [/* @__PURE__ */ (0, V.jsxs)("button", {
					type: "button",
					onClick: () => s(!0),
					children: [e("identity.text04"), /* @__PURE__ */ (0, V.jsx)(f, { size: 15 })]
				}), /* @__PURE__ */ (0, V.jsxs)("button", {
					type: "button",
					onClick: B,
					children: [e("identity.text05"), /* @__PURE__ */ (0, V.jsx)(Ee, { size: 14 })]
				})]
			})
		]
	}), document.body);
}
//#endregion
//#region src/new-site/HeroSections.tsx
function Do() {
	let e = l(), { lang: t, motion: i, visible: a, active: o, go: s, registerOpeningVideo: c } = n(), d = t === "zh", p = (0, j.useRef)(null), m = (0, j.useRef)(!1), h = (0, j.useRef)(!1), g = (0, j.useRef)(i), _ = (0, j.useCallback)((e) => {
		p.current = e, c(e);
	}, [c]), [v, y] = (0, j.useState)(!1), [S, w] = (0, j.useState)(!1), [E, D] = (0, j.useState)(!1), [O, k] = (0, j.useState)(0), [A, M] = (0, j.useState)(0);
	return (0, j.useEffect)(() => {
		let e = p.current;
		e && (g.current !== i && (g.current = i, i || (h.current = !1)), o === "intro" && a && (i || h.current) && !v && !S && !m.current ? e.play().catch(() => D(!1)) : e.pause());
	}, [
		o,
		a,
		i,
		v,
		S
	]), /* @__PURE__ */ (0, V.jsxs)("section", {
		id: "intro",
		className: "chapter intro-section",
		"data-hero-motion": i && a && o === "intro" ? "running" : "paused",
		"aria-label": e("intro.text01"),
		children: [
			/* @__PURE__ */ (0, V.jsx)("img", {
				className: "intro-poster",
				src: r("intro.png"),
				alt: "",
				fetchPriority: "high"
			}),
			!S && /* @__PURE__ */ (0, V.jsx)("video", {
				ref: _,
				className: "intro-film",
				src: r("intro.mp4"),
				poster: r("intro.png"),
				muted: !0,
				playsInline: !0,
				preload: "metadata",
				onTimeUpdate: (e) => {
					let t = e.currentTarget;
					Number.isFinite(t.duration) && t.duration > 0 && k(t.currentTime / t.duration);
				},
				onEnded: () => {
					y(!0), D(!1), k(1);
				},
				onError: () => w(!0),
				onPlaying: () => D(!0),
				onPause: () => D(!1)
			}),
			/* @__PURE__ */ (0, V.jsx)("div", { className: "intro-vignette" }),
			/* @__PURE__ */ (0, V.jsx)(u, { chapter: "intro" }),
			/* @__PURE__ */ (0, V.jsx)(b, { children: /* @__PURE__ */ (0, V.jsxs)("div", {
				className: "intro-title",
				children: [
					/* @__PURE__ */ (0, V.jsx)("p", { children: /* @__PURE__ */ (0, V.jsx)(C, {
						chapter: "intro",
						settlePast: !1,
						text: e("intro.text02"),
						renderText: (e) => {
							let [t = "", ...n] = e.split("\n"), r = n.join("\n");
							return /* @__PURE__ */ (0, V.jsxs)(V.Fragment, { children: [
								t,
								/* @__PURE__ */ (0, V.jsx)("br", {}),
								/* @__PURE__ */ (0, V.jsx)("strong", { children: r })
							] });
						}
					}) }),
					/* @__PURE__ */ (0, V.jsx)("span", { children: /* @__PURE__ */ (0, V.jsx)(C, {
						chapter: "intro",
						settlePast: !1,
						order: 1,
						tone: "support",
						text: e("intro.text03")
					}) }),
					/* @__PURE__ */ (0, V.jsx)(x, { page: "intro" })
				]
			}) }, `${o === "intro"}-${A}`),
			/* @__PURE__ */ (0, V.jsxs)("button", {
				className: "intro-next",
				onClick: () => s("home"),
				children: [/* @__PURE__ */ (0, V.jsx)("span", { children: e("intro.text04") }), /* @__PURE__ */ (0, V.jsx)(be, { size: 23 })]
			}),
			/* @__PURE__ */ (0, V.jsxs)("div", {
				className: "intro-film-controls",
				children: [!S && /* @__PURE__ */ (0, V.jsxs)("button", {
					onClick: () => {
						let e = p.current;
						e && (e.paused ? (m.current = !1, h.current = !0, v && (e.currentTime = 0, M((e) => e + 1)), y(!1), e.play().catch(() => D(!1))) : (m.current = !0, h.current = !1, e.pause()));
					},
					children: [
						E ? /* @__PURE__ */ (0, V.jsx)(Je, { size: 14 }) : v ? /* @__PURE__ */ (0, V.jsx)(T, { size: 14 }) : /* @__PURE__ */ (0, V.jsx)(et, { size: 14 }),
						" ",
						d ? E ? "暂停开场" : v ? "重看开场" : "播放开场" : E ? "Pause film" : v ? "Replay" : "Play film"
					]
				}), /* @__PURE__ */ (0, V.jsxs)("button", {
					onClick: () => s("home"),
					children: [e("intro.text05"), /* @__PURE__ */ (0, V.jsx)(f, { size: 14 })]
				})]
			}),
			!S && /* @__PURE__ */ (0, V.jsx)("div", {
				className: "intro-film-track",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, V.jsx)("span", { style: { transform: `scaleX(${O})` } })
			})
		]
	});
}
function Oo() {
	let e = l(), { motion: t, visible: i, active: a, profile: o, go: s, setProfile: c } = n(), d = (0, j.useRef)(null);
	return (0, j.useEffect)(() => {
		if (!t || !i || o || a !== "home" || !d.current) return;
		let e = so.context(() => {
			so.timeline({ defaults: { ease: "expo.out" } }).fromTo(".home-art", {
				clipPath: "inset(0 0 0 18%)",
				opacity: .75
			}, {
				clipPath: "inset(0 0 0 0%)",
				opacity: 1,
				duration: 1.1
			}).fromTo(".home-links", { clipPath: "inset(0 100% 0 0)" }, {
				clipPath: "inset(0 0% 0 0)",
				clearProps: "clipPath",
				duration: .7
			}, .36);
		}, d);
		return () => e.revert();
	}, [
		t,
		i,
		a,
		o
	]), /* @__PURE__ */ (0, V.jsxs)("section", {
		ref: d,
		id: "home",
		className: "chapter home-section",
		"data-hero-motion": t && i && a === "home" && !o ? "running" : "paused",
		"aria-label": e("home.text01"),
		children: [
			/* @__PURE__ */ (0, V.jsx)("img", {
				className: "home-art",
				src: r("home-art.png"),
				alt: e("home.text02"),
				loading: "lazy"
			}),
			/* @__PURE__ */ (0, V.jsx)("div", { className: "home-shade" }),
			/* @__PURE__ */ (0, V.jsx)(u, { chapter: "home" }),
			/* @__PURE__ */ (0, V.jsx)("div", {
				className: "home-material-light",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, V.jsx)(Eo, {}),
			/* @__PURE__ */ (0, V.jsx)(b, { children: /* @__PURE__ */ (0, V.jsxs)("div", {
				className: "home-content",
				children: [
					/* @__PURE__ */ (0, V.jsx)("h1", {
						className: "home-name",
						children: /* @__PURE__ */ (0, V.jsx)(C, {
							chapter: "home",
							text: e("home.name"),
							renderText: (t) => e("home.name") === "JasonG" ? /* @__PURE__ */ (0, V.jsxs)(V.Fragment, { children: [t.slice(0, 5), /* @__PURE__ */ (0, V.jsx)("span", {
								style: { visibility: t.length > 5 ? "visible" : "hidden" },
								children: /* @__PURE__ */ (0, V.jsx)(g, { enabled: !1 })
							})] }) : t
						})
					}),
					/* @__PURE__ */ (0, V.jsx)("p", {
						className: "home-chinese",
						children: /* @__PURE__ */ (0, V.jsx)(C, {
							chapter: "home",
							order: 1,
							tone: "support",
							text: e("home.chineseName")
						})
					}),
					/* @__PURE__ */ (0, V.jsxs)("div", {
						className: "home-intent",
						children: [/* @__PURE__ */ (0, V.jsx)(C, {
							chapter: "home",
							order: 2,
							tone: "support",
							text: e("home.text03")
						}), /* @__PURE__ */ (0, V.jsx)("p", { children: /* @__PURE__ */ (0, V.jsx)(C, {
							chapter: "home",
							order: 3,
							tone: "support",
							text: e("home.text04")
						}) })]
					}),
					/* @__PURE__ */ (0, V.jsxs)("div", {
						className: "home-links",
						children: [/* @__PURE__ */ (0, V.jsxs)("button", {
							className: "text-link home-entry",
							onClick: () => s("directory"),
							children: [/* @__PURE__ */ (0, V.jsx)("span", { children: e("home.text05") }), /* @__PURE__ */ (0, V.jsx)("span", {
								className: "home-entry-direction",
								children: /* @__PURE__ */ (0, V.jsx)(we, {})
							})]
						}), /* @__PURE__ */ (0, V.jsxs)("button", {
							className: "profile-link",
							onClick: () => c(!0),
							children: [/* @__PURE__ */ (0, V.jsx)(Re, { size: 18 }), e("home.text06")]
						})]
					}),
					/* @__PURE__ */ (0, V.jsx)(x, { page: "home" })
				]
			}) }),
			/* @__PURE__ */ (0, V.jsx)(xo, {}),
			/* @__PURE__ */ (0, V.jsx)("span", {
				className: "home-signature",
				children: e("home.signature")
			})
		]
	});
}
var ko = [
	{
		id: "about",
		cn: "认识我",
		en: "About JasonG",
		caption: ["打开个人档案", "Open my profile"],
		image: "archive-terminal.png",
		particles: [
			"#b7e9df",
			"#91bad3",
			"#eef4e5"
		]
	},
	{
		id: "experience",
		cn: "实习经历",
		en: "Experience",
		caption: ["让经历说话", "Learning by doing"],
		image: "",
		particles: [
			"#e3c38d",
			"#a6b6c5",
			"#f5e2ba"
		]
	},
	{
		id: "projects",
		cn: "项目经历",
		en: "Projects",
		caption: ["想法成为实践", "Ideas into practice"],
		image: "holographic-desk.png",
		particles: [
			"#c5b3df",
			"#90bdde",
			"#e3d8ed"
		]
	},
	{
		id: "life",
		cn: "人生体验",
		en: "Life",
		caption: ["带上好奇心", "Stay curious"],
		image: "travel-pack.png",
		particles: [
			"#b2c6a7",
			"#d6c49e",
			"#dce9d0"
		]
	}
];
function Ao() {
	let e = l(), { motion: t, visible: i, active: a, go: o, profile: s } = n(), c = d(), [p, m] = (0, j.useState)(2);
	return /* @__PURE__ */ (0, V.jsxs)("section", {
		id: "directory",
		className: "chapter directory-section",
		"data-hero-motion": t && i && a === "directory" && !s ? "running" : "paused",
		"aria-labelledby": "directory-title",
		children: [
			/* @__PURE__ */ (0, V.jsx)(u, { chapter: "directory" }),
			/* @__PURE__ */ (0, V.jsxs)("div", {
				className: "directory-heading",
				children: [/* @__PURE__ */ (0, V.jsx)(b, { children: /* @__PURE__ */ (0, V.jsxs)("div", { children: [/* @__PURE__ */ (0, V.jsx)("h2", {
					id: "directory-title",
					children: /* @__PURE__ */ (0, V.jsx)(C, {
						chapter: "directory",
						text: e("directory.text01"),
						renderText: (e) => {
							let [t = "", ...n] = e.split("\n"), r = n.join("\n");
							return /* @__PURE__ */ (0, V.jsxs)(V.Fragment, { children: [
								t,
								/* @__PURE__ */ (0, V.jsx)("br", {}),
								/* @__PURE__ */ (0, V.jsx)("span", {
									className: "title-second-line",
									children: r
								})
							] });
						}
					})
				}), /* @__PURE__ */ (0, V.jsx)("p", {
					className: "directory-values",
					children: /* @__PURE__ */ (0, V.jsx)(C, {
						chapter: "directory",
						order: 1,
						tone: "support",
						text: e("directory.text02")
					})
				})] }) }), /* @__PURE__ */ (0, V.jsxs)("button", {
					className: "text-link",
					onClick: () => o("contact"),
					children: [e("directory.text03"), /* @__PURE__ */ (0, V.jsx)(f, { size: 18 })]
				})]
			}),
			/* @__PURE__ */ (0, V.jsx)("span", {
				className: "directory-word",
				"aria-hidden": "true",
				children: e("directory.backgroundWord")
			}),
			/* @__PURE__ */ (0, V.jsx)("div", {
				className: "card-spread",
				onKeyDown: (e) => {
					if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
						e.preventDefault();
						let t = (p + (e.key === "ArrowRight" ? 1 : -1) + 4) % 4;
						m(t), e.currentTarget.querySelectorAll(".destination")[t]?.focus();
					}
				},
				children: ko.map((n, s) => /* @__PURE__ */ (0, V.jsx)(S, {
					className: `destination-shell destination-${s} ${p === s ? "selected" : ""}`,
					children: /* @__PURE__ */ (0, V.jsxs)("button", {
						className: "destination",
						onPointerEnter: () => m(s),
						onFocus: () => m(s),
						onClick: () => o(n.id),
						"aria-label": e(`directory.${n.id}.title`),
						style: { "--index": s },
						children: [
							/* @__PURE__ */ (0, V.jsxs)("span", {
								className: "destination-no",
								children: ["0", s + 1]
							}),
							/* @__PURE__ */ (0, V.jsxs)("div", {
								className: "destination-art",
								children: [
									n.image ? /* @__PURE__ */ (0, V.jsx)("img", {
										src: r(n.image),
										alt: "",
										loading: "lazy"
									}) : /* @__PURE__ */ (0, V.jsxs)("span", {
										className: "year-sculpture",
										children: [
											/* @__PURE__ */ (0, V.jsx)("span", { children: "2023" }),
											/* @__PURE__ */ (0, V.jsx)("span", { children: "2024" }),
											/* @__PURE__ */ (0, V.jsx)("em", { children: "2025" })
										]
									}),
									/* @__PURE__ */ (0, V.jsx)(bo, {
										colors: n.particles,
										count: 42,
										enabled: t && i && a === "directory" && !c
									}),
									/* @__PURE__ */ (0, V.jsx)("span", {
										className: "destination-material",
										"aria-hidden": "true"
									})
								]
							}),
							/* @__PURE__ */ (0, V.jsx)("h3", { children: e(`directory.${n.id}.title`) }),
							/* @__PURE__ */ (0, V.jsx)("span", {
								className: "destination-en",
								children: e(`directory.${n.id}.secondary`)
							}),
							/* @__PURE__ */ (0, V.jsxs)("span", {
								className: "destination-bottom",
								children: [e(`directory.${n.id}.caption`), /* @__PURE__ */ (0, V.jsx)(f, { size: 17 })]
							})
						]
					})
				}, n.id))
			}),
			/* @__PURE__ */ (0, V.jsx)(x, { page: "directory" }),
			/* @__PURE__ */ (0, V.jsx)("div", {
				className: "destination-indicators",
				"aria-hidden": "true",
				children: ko.map((e, t) => /* @__PURE__ */ (0, V.jsx)("i", { className: p === t ? "active" : "" }, e.id))
			})
		]
	});
}
//#endregion
//#region src/new-site/content-motion.ts
function jo(e, t) {
	let [n, r] = (0, j.useState)(!1);
	return (0, j.useEffect)(() => {
		let n = e.current;
		if (!n || !t) {
			r(!1);
			return;
		}
		let i = new IntersectionObserver(([e]) => r(e.isIntersecting && e.intersectionRatio >= .08), { threshold: [0, .08] });
		return i.observe(n), () => i.disconnect();
	}, [t, e]), t && n;
}
function Mo(e, t, n, r = !1) {
	let i = (0, j.useRef)(void 0);
	(0, j.useLayoutEffect)(() => {
		let a = i.current !== void 0 && i.current !== t;
		i.current = t;
		let o = e.current;
		if (!o || !n || !a) return;
		let s = [];
		r && s.push(o.animate([{
			clipPath: "inset(0 1.5% 3% 1.5%)",
			filter: "brightness(1.07)"
		}, {
			clipPath: "inset(0 0% 0% 0%)",
			filter: "brightness(1)"
		}], {
			duration: 430,
			easing: "cubic-bezier(.16,1,.3,1)"
		})), s.push(o.animate([
			{
				opacity: 0,
				transform: "scaleX(.04)",
				offset: 0
			},
			{
				opacity: .9,
				transform: "scaleX(.42)",
				offset: .28
			},
			{
				opacity: 0,
				transform: "scaleX(1)",
				offset: 1
			}
		], {
			duration: 760,
			easing: "cubic-bezier(.16,1,.3,1)",
			pseudoElement: "::after"
		}));
		let c = () => s.forEach((e) => e.cancel());
		return o.addEventListener("pointerdown", c, {
			capture: !0,
			once: !0
		}), o.addEventListener("focusin", c, {
			capture: !0,
			once: !0
		}), () => {
			c(), o.removeEventListener("pointerdown", c, !0), o.removeEventListener("focusin", c, !0);
		};
	}, [
		n,
		r,
		t,
		e
	]);
}
//#endregion
//#region src/new-site/ElectricBorder.tsx
var No = (e) => {
	let t = Math.sin(e * 12.9898) * 43758.5453;
	return t - Math.floor(t);
};
function Po(e, t) {
	let n = Math.floor(e), r = Math.floor(t), i = e - n, a = t - r, o = i * i * (3 - 2 * i), s = a * a * (3 - 2 * a);
	return No(n + r * 57) * (1 - o) * (1 - s) + No(n + 1 + r * 57) * o * (1 - s) + No(n + (r + 1) * 57) * (1 - o) * s + No(n + 1 + (r + 1) * 57) * o * s;
}
function Fo(e, t, n) {
	let r = 0, i = 1, a = 1, o = 0;
	for (let s = 0; s < 5; s++) r += (Po(e * a + n * 100, t * a * .3) - .5) * i, o += i, i *= .65, a *= 1.7;
	return r / o;
}
function Io(e, t, n, r) {
	let i = t - 2 * r, a = n - 2 * r, o = Math.PI * r / 2, s = e * (2 * i + 2 * a + 4 * o), c = [
		i,
		o,
		a,
		o,
		i,
		o,
		a,
		o
	], l = 0;
	for (; l < 7 && s > c[l];) s -= c[l++];
	let u = c[l] > 0 ? s / c[l] : 0;
	if (l === 0) return {
		x: r + s,
		y: 0
	};
	if (l === 2) return {
		x: t,
		y: r + s
	};
	if (l === 4) return {
		x: t - r - s,
		y: n
	};
	if (l === 6) return {
		x: 0,
		y: n - r - s
	};
	let d = (l - 1) / 2, f = [
		[t - r, r],
		[t - r, n - r],
		[r, n - r],
		[r, r]
	], p = -Math.PI / 2 + (d + u) * Math.PI / 2;
	return {
		x: f[d][0] + Math.cos(p) * r,
		y: f[d][1] + Math.sin(p) * r
	};
}
function Lo({ children: e, enabled: t, className: n = "", color: r = "#83baff", speed: i = .45, chaos: a = .09, borderRadius: o = 2, thickness: s = 1.25 }) {
	let c = (0, j.useRef)(null), l = (0, j.useRef)(null), u = (0, j.useRef)(0), f = d(), p = t && !f;
	return (0, j.useEffect)(() => {
		let e = c.current, t = l.current;
		if (!e || !t || !p) return;
		let n = t.getContext("2d");
		if (!n) return;
		let d = 0, f = !1, m = 0, h = 0, g = 0, _ = 1, v = [], y = () => {
			h = e.clientWidth, g = e.clientHeight, _ = Math.min(devicePixelRatio || 1, 1.5), t.width = Math.ceil((h + 28) * _), t.height = Math.ceil((g + 28) * _);
			let n = Math.max(1, Math.min(o, h / 2, g / 2)), r = Math.min(640, Math.max(160, Math.round((h + g) * 2 / 4)));
			v = Array.from({ length: r + 1 }, (e, t) => {
				let i = t / r, a = Io(i, h, g, n);
				return {
					x: a.x + 14,
					y: a.y + 14,
					noiseX: i * 60,
					fade: Math.min(1, i * 28, (1 - i) * 28)
				};
			});
		}, b = (e) => {
			if (f || (d = requestAnimationFrame(b), document.hidden || m && e - m < 1e3 / 30)) return;
			let t = m ? Math.min((e - m) / 1e3, .08) : 0;
			m = e, u.current += t * i, n.setTransform(_, 0, 0, _, 0, 0), n.clearRect(0, 0, h + 28, g + 28), n.beginPath(), v.forEach((e, t) => {
				let r = a * 100 * e.fade, i = e.x + Fo(e.noiseX, u.current, 0) * r, o = e.y + Fo(e.noiseX, u.current, 1) * r;
				t === 0 ? n.moveTo(i, o) : n.lineTo(i, o);
			}), n.closePath(), n.lineCap = "round", n.lineJoin = "round", n.strokeStyle = r, n.shadowColor = r, n.shadowBlur = 5, n.lineWidth = s, n.globalAlpha = .85, n.stroke(), n.shadowBlur = 0, n.lineWidth = s * .45, n.strokeStyle = "#d9eaff", n.globalAlpha = .65, n.stroke();
		}, x = new ResizeObserver(y);
		return x.observe(e), y(), d = requestAnimationFrame(b), () => {
			f = !0, cancelAnimationFrame(d), x.disconnect(), n.clearRect(0, 0, t.width, t.height), t.width = 1, t.height = 1;
		};
	}, [
		p,
		r,
		i,
		a,
		o,
		s
	]), /* @__PURE__ */ (0, V.jsxs)("div", {
		ref: c,
		className: `jg-electric-border ${n}`,
		"data-electric-running": p,
		style: {
			"--electric-color": r,
			"--electric-radius": `${o}px`
		},
		children: [e, /* @__PURE__ */ (0, V.jsx)("canvas", {
			ref: l,
			className: "jg-electric-border-canvas",
			"aria-hidden": "true"
		})]
	});
}
//#endregion
//#region src/new-site/Galaxy.tsx
var Ro = "\nattribute vec2 position;\nvarying vec2 vUv;\nvoid main(){vUv=position*.5+.5;gl_Position=vec4(position,0.,1.);}\n", zo = "\nprecision highp float;\nuniform float uTime;\nuniform vec2 uResolution;\nvarying vec2 vUv;\n#define MAT45 mat2(0.7071,-0.7071,0.7071,0.7071)\nfloat Hash21(vec2 p){p=fract(p*vec2(123.34,456.21));p+=dot(p,p+45.32);return fract(p.x*p.y);}\nfloat tri(float x){return abs(fract(x)*2.-1.);}\nfloat tris(float x){return 1.-smoothstep(0.,1.,abs(2.*fract(x)-1.));}\nfloat trisn(float x){return 2.*tris(x)-1.;}\nfloat Star(vec2 uv,float flare){\n  float d=max(length(uv),.001);\n  float m=.015/d;\n  float rays=smoothstep(0.,1.,1.-abs(uv.x*uv.y*1000.));\n  m+=rays*flare*.3;\n  uv*=MAT45;\n  rays=smoothstep(0.,1.,1.-abs(uv.x*uv.y*1000.));\n  m+=rays*.3*flare*.3;\n  return m*(1.-smoothstep(.2,1.,d));\n}\nvec3 StarLayer(vec2 uv){\n  vec3 col=vec3(0.);\n  vec2 gv=fract(uv)-.5,id=floor(uv);\n  for(int y=-1;y<=1;y++){\n    for(int x=-1;x<=1;x++){\n      vec2 offset=vec2(float(x),float(y)),si=id+offset;\n      float seed=Hash21(si),size=fract(seed*345.32);\n      float gloss=tri(uTime*.007/(3.*seed+1.));\n      float flare=smoothstep(.9,1.,size)*gloss;\n      vec3 cool=mix(vec3(.72,.86,.92),vec3(.69,.59,.91),smoothstep(.25,.8,seed));\n      vec3 color=mix(cool,vec3(1.,.89,.74),step(.83,seed));\n      vec2 pad=vec2(tris(seed*34.+uTime*.024),tris(seed*38.+uTime*.008))-.5;\n      float star=Star(gv-offset-pad,flare);\n      star*=mix(1.,trisn(uTime*.24+seed*6.2831)*.5+1.,.18);\n      col+=star*size*color;\n    }\n  }\n  return col;\n}\nvoid main(){\n  vec2 uv=(vUv*uResolution-uResolution*vec2(.49,.54))/uResolution.y;\n  float angle=uTime*.003;\n  uv=mat2(cos(angle),-sin(angle),sin(angle),cos(angle))*uv;\n  vec3 col=vec3(0.);\n  for(int layer=0;layer<4;layer++){\n    float i=float(layer)/4.;\n    float depth=fract(i+.17+uTime*.0015);\n    float scale=mix(21.,.65,depth);\n    float fade=depth*(1.-smoothstep(.9,1.,depth));\n    col+=StarLayer(uv*scale+i*453.32)*fade;\n  }\n  vec3 base=mix(vec3(.024,.031,.059),vec3(.067,.043,.106),1.-smoothstep(.05,.85,length(uv)));\n  float veil=.5+.5*sin(vUv.x*3.1+vUv.y*4.4);\n  base+=vec3(.014,.018,.025)*veil;\n  gl_FragColor=vec4(base+col*.82,1.);\n}\n";
function Bo({ enabled: e, className: t = "" }) {
	let n = (0, j.useRef)(null), r = (0, j.useRef)(null), i = (0, j.useRef)(0), a = uo(n, e);
	return (0, j.useEffect)(() => {
		let e = n.current, t = r.current;
		if (!e || !t) return;
		let i = t.getContext("2d");
		if (!i) return;
		let a = () => {
			let n = e.clientWidth, r = e.clientHeight, a = Math.min(devicePixelRatio || 1, 1.25);
			t.width = Math.max(1, Math.round(n * a)), t.height = Math.max(1, Math.round(r * a)), i.setTransform(a, 0, 0, a, 0, 0);
			let o = i.createRadialGradient(n * .45, r * .4, 0, n * .5, r * .5, Math.max(n, r) * .8);
			o.addColorStop(0, "#1a152a"), o.addColorStop(.5, "#101423"), o.addColorStop(1, "#080d17"), i.fillStyle = o, i.fillRect(0, 0, n, r);
			let s = fo(8302);
			for (let e = 0; e < 125; e++) {
				let t = s() * n, a = s() * r, o = .35 + s() * .9, c = .25 + s() * .48;
				i.fillStyle = `rgba(${e % 6 == 0 ? "248,222,189" : e % 3 == 0 ? "189,167,232" : "189,214,227"},${c})`, i.beginPath(), i.arc(t, a, o, 0, Math.PI * 2), i.fill(), e % 13 == 0 && (i.globalAlpha = .42, i.fillRect(t - 3, a - .3, 6, .6), i.fillRect(t - .3, a - 3, .6, 6), i.globalAlpha = 1);
			}
		};
		a();
		let o = new ResizeObserver(a);
		return o.observe(e), () => o.disconnect();
	}, []), (0, j.useEffect)(() => {
		let e = n.current;
		if (!e || !a) return;
		let t = document.createElement("canvas");
		t.className = "jg-galaxy__live", t.setAttribute("aria-hidden", "true");
		let r = t.getContext("webgl", {
			alpha: !1,
			depth: !1,
			antialias: !1,
			powerPreference: "low-power"
		});
		if (!r) return;
		let o;
		try {
			o = mo(r, Ro, zo);
		} catch {
			ho(r);
			return;
		}
		let s = r.createBuffer();
		r.useProgram(o), r.bindBuffer(r.ARRAY_BUFFER, s), r.bufferData(r.ARRAY_BUFFER, new Float32Array([
			-1,
			-1,
			3,
			-1,
			-1,
			3
		]), r.STATIC_DRAW);
		let c = r.getAttribLocation(o, "position");
		r.enableVertexAttribArray(c), r.vertexAttribPointer(c, 2, r.FLOAT, !1, 0, 0);
		let l = r.getUniformLocation(o, "uResolution"), u = r.getUniformLocation(o, "uTime"), d = matchMedia("(max-width: 600px)").matches, f = () => {
			d = matchMedia("(max-width: 600px)").matches;
			let n = e.clientWidth, i = e.clientHeight, a = Math.min(d ? .8 : 1, 760 / Math.max(n, 1), 560 / Math.max(i, 1));
			t.width = Math.max(1, Math.round(n * a)), t.height = Math.max(1, Math.round(i * a)), r.viewport(0, 0, t.width, t.height), r.uniform2f(l, t.width, t.height);
		};
		f(), e.appendChild(t);
		let p = new ResizeObserver(f);
		p.observe(e);
		let m = 0, h = 0, g = !1, _ = (t) => {
			g || (m = requestAnimationFrame(_), !(h && t - h < 1e3 / (d ? 20 : 24)) && (i.current += h ? Math.min((t - h) / 1e3, .08) : 0, h = t, r.uniform1f(u, i.current), r.drawArrays(r.TRIANGLES, 0, 3), e.dataset.rendering = "webgl"));
		}, v = (n) => {
			n.preventDefault(), cancelAnimationFrame(m), e.dataset.rendering = "static", t.style.visibility = "hidden";
		};
		return t.addEventListener("webglcontextlost", v), m = requestAnimationFrame(_), () => {
			g = !0, cancelAnimationFrame(m), p.disconnect(), t.removeEventListener("webglcontextlost", v), e.dataset.rendering = "static", r.deleteBuffer(s), r.deleteProgram(o), ho(r), t.remove();
		};
	}, [a]), /* @__PURE__ */ (0, V.jsx)("div", {
		ref: n,
		className: `jg-galaxy ${t}`,
		"data-rendering": "static",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, V.jsx)("canvas", {
			ref: r,
			className: "jg-galaxy__still"
		})
	});
}
//#endregion
//#region src/new-site/ProjectSections.tsx
var Vo = (e) => e.pdf ? `${e.pdf}${e.page ? `#page=${e.page}` : ""}` : void 0, Ho = (e, t) => e.displayTitle[t] || e.title[t], Uo = (e) => e.toLocaleLowerCase().replace(/(?:\bproject|项目)\s*$/iu, "").replace(/[\s\p{P}\p{S}]+/gu, "");
function Wo({ item: e, enabled: t, onPlay: r, onPause: i }) {
	let { lang: a } = n(), o = (0, j.useRef)(null);
	return (0, j.useEffect)(() => {
		t || o.current?.pause();
	}, [t]), (0, j.useEffect)(() => {
		let e = o.current;
		if (!t || !e) return;
		let n = new IntersectionObserver(([t]) => {
			(!t.isIntersecting || t.intersectionRatio < .05) && e.pause();
		}, { threshold: [0, .05] });
		return n.observe(e), () => n.disconnect();
	}, [t]), (0, j.useEffect)(() => {
		let e = o.current;
		return () => {
			e && (e.pause(), i(e));
		};
	}, []), /* @__PURE__ */ (0, V.jsx)("video", {
		ref: o,
		src: e.src,
		poster: e.poster,
		controls: !0,
		playsInline: !0,
		preload: "none",
		"aria-label": e.alt[a],
		tabIndex: t ? 0 : -1,
		inert: !t,
		onPlay: (e) => {
			t ? r(e.currentTarget) : e.currentTarget.pause();
		},
		onPause: (e) => i(e.currentTarget),
		onEnded: (e) => i(e.currentTarget),
		onError: (e) => i(e.currentTarget)
	});
}
function Go() {
	let { projects: e } = m(), { active: t, visible: r, motion: i, go: a } = n(), o = l(), [s, c] = (0, j.useState)(() => e[0]?.id ?? ""), d = e.find((e) => e.id === s) ?? e[0];
	return /* @__PURE__ */ (0, V.jsxs)("section", {
		id: "projects",
		className: "chapter projects-section",
		"aria-labelledby": "projects-heading",
		"data-content-motion": i,
		"data-content-live": i && r && t === "projects",
		children: [/* @__PURE__ */ (0, V.jsx)(u, { chapter: "projects" }), /* @__PURE__ */ (0, V.jsxs)("div", {
			className: "content-section-inner",
			children: [
				/* @__PURE__ */ (0, V.jsx)("header", {
					className: "content-section-heading",
					children: /* @__PURE__ */ (0, V.jsx)("h2", {
						id: "projects-heading",
						children: /* @__PURE__ */ (0, V.jsx)(C, {
							chapter: "projects",
							text: o("projects.heading")
						})
					})
				}),
				e.length > 1 && /* @__PURE__ */ (0, V.jsx)(Ko, {
					projects: e,
					selected: d?.id,
					onSelect: c
				}),
				d ? /* @__PURE__ */ (0, V.jsx)(qo, { project: d }, d.id) : /* @__PURE__ */ (0, V.jsx)("p", {
					className: "jg-content-empty",
					children: o("projects.empty")
				}),
				/* @__PURE__ */ (0, V.jsx)(x, { page: "projects" }),
				/* @__PURE__ */ (0, V.jsx)("div", {
					className: "content-chapter-end",
					children: /* @__PURE__ */ (0, V.jsxs)("button", {
						type: "button",
						onClick: () => a("life"),
						children: [o("projects.next"), /* @__PURE__ */ (0, V.jsx)(be, {
							size: 18,
							"aria-hidden": "true"
						})]
					})
				})
			]
		})]
	});
}
function Ko({ projects: e, selected: t, onSelect: r }) {
	let { lang: i } = n(), a = l();
	return /* @__PURE__ */ (0, V.jsx)("nav", {
		className: "project-selection",
		"aria-label": a("projects.select"),
		children: e.map((e) => /* @__PURE__ */ (0, V.jsxs)("button", {
			type: "button",
			"aria-pressed": t === e.id,
			onClick: () => r(e.id),
			children: [Ho(e, i), /* @__PURE__ */ (0, V.jsx)(we, {
				size: 17,
				"aria-hidden": "true"
			})]
		}, e.id))
	});
}
function qo({ project: e }) {
	let { lang: t, active: r, visible: i, motion: a, setMediaPlaying: o } = n(), s = l(), c = d(), [u, p] = (0, j.useState)(0), [m, h] = (0, j.useState)(!1), [g, v] = (0, j.useState)(!1), [y, b] = (0, j.useState)(!1), [x, S] = (0, j.useState)(!1), [w, T] = (0, j.useState)("outputs"), E = (0, j.useRef)(null), D = (0, j.useRef)(null), O = (0, j.useRef)(null), k = (0, j.useRef)(null), A = (0, j.useRef)(!1), M = (0, j.useRef)([]), N = (0, j.useRef)(null), P = (0, j.useRef)(null), ee = jo(N, a && i && r === "projects"), F = e.slides.length, I = e.slides[u];
	Mo(N, u, ee), Mo(P, `${x}:${w}`, a && i && x, !0);
	let te = F > 1 && I?.type !== "video" && ee && !m && !g && !y && !x, L = (e) => {
		F > 1 && p((t) => (t + e + F) % F);
	}, ne = [{
		id: "outputs",
		label: s("projects.outputs")
	}, ...e.details.filter((e) => e.id !== "outputs" && e.id !== "overview").map((e) => ({
		id: e.id,
		label: e.title[t]
	}))], R = e.details.find((e) => e.id === w), z = e.details.find((e) => e.id === "overview"), B = e.details.find((e) => e.id === "participation"), re = Ho(e, t), ie = [re, `${re} ${e.subject[t]}`].some((n) => Uo(n) === Uo(e.title[t])) ? "" : e.title[t], ae = e.subtitle[t] === e.subject[t] ? "" : e.subtitle[t], oe = (e) => {
		let t = O.current;
		O.current = e, t !== e && t?.pause(), o(!0);
	}, se = (e) => {
		O.current === e && (O.current = null, o(!1));
	};
	(0, j.useEffect)(() => {
		if (!te) return;
		let e = window.setInterval(() => p((e) => (e + 1) % F), 5e3);
		return () => window.clearInterval(e);
	}, [te, F]), (0, j.useEffect)(() => {
		let e = E.current;
		e && (x && !e.open && e.showModal(), !x && e.open && e.close());
	}, [x]), (0, j.useEffect)(() => {
		(r !== "projects" || !i) && O.current?.pause();
	}, [r, i]), (0, j.useEffect)(() => () => {
		O.current && (O.current.pause(), o(!1));
	}, [o]);
	let ce = (e = "outputs") => {
		D.current = document.activeElement instanceof HTMLElement ? document.activeElement : null, T(e), S(!0);
	}, le = () => {
		S(!1), D.current?.focus({ preventScroll: !0 });
	}, ue = (e) => {
		e.target.tagName !== "VIDEO" && (e.key === "ArrowLeft" || e.key === "ArrowRight") && (e.preventDefault(), L(e.key === "ArrowLeft" ? -1 : 1));
	}, de = r === "projects" && i;
	return /* @__PURE__ */ (0, V.jsxs)(V.Fragment, { children: [/* @__PURE__ */ (0, V.jsxs)("div", {
		className: "projects-composition",
		children: [/* @__PURE__ */ (0, V.jsxs)("aside", {
			className: "projects-index",
			children: [
				/* @__PURE__ */ (0, V.jsx)("p", {
					className: "project-kind",
					children: e.kindLabel[t]
				}),
				/* @__PURE__ */ (0, V.jsx)("h3", { children: re }),
				/* @__PURE__ */ (0, V.jsx)("p", {
					className: "project-subject",
					children: e.subject[t]
				}),
				/* @__PURE__ */ (0, V.jsx)("p", {
					className: "project-summary",
					children: e.summary[t]
				}),
				/* @__PURE__ */ (0, V.jsx)("ul", {
					className: "project-topics",
					children: e.tags.map((e, n) => /* @__PURE__ */ (0, V.jsx)("li", { children: e[t] }, n))
				}),
				/* @__PURE__ */ (0, V.jsxs)("button", {
					className: "content-text-link project-details-link",
					type: "button",
					onClick: () => ce(),
					children: [s("projects.details"), /* @__PURE__ */ (0, V.jsx)(we, {
						size: 24,
						"aria-hidden": "true"
					})]
				})
			]
		}), /* @__PURE__ */ (0, V.jsx)(Lo, {
			enabled: ee && !x,
			className: "project-electric-preview",
			children: /* @__PURE__ */ (0, V.jsxs)("div", {
				ref: N,
				className: "project-preview project-preview--galaxy",
				onPointerEnter: (e) => {
					e.pointerType === "mouse" && v(!0);
				},
				onPointerLeave: () => v(!1),
				onFocusCapture: () => b(!0),
				onBlurCapture: (e) => {
					e.currentTarget.contains(e.relatedTarget) || b(!1);
				},
				children: [
					/* @__PURE__ */ (0, V.jsx)(Bo, { enabled: ee && !c }),
					/* @__PURE__ */ (0, V.jsxs)("div", {
						className: "project-preview-toolbar",
						children: [/* @__PURE__ */ (0, V.jsx)("span", { children: s("projects.outputs") }), I?.pdf && /* @__PURE__ */ (0, V.jsxs)("a", {
							href: Vo(I),
							target: "_blank",
							rel: "noopener noreferrer",
							children: [s("projects.openPdf"), /* @__PURE__ */ (0, V.jsx)(f, {
								size: 16,
								"aria-hidden": "true"
							})]
						})]
					}),
					/* @__PURE__ */ (0, V.jsxs)("div", {
						className: "project-depth-carousel",
						role: "region",
						"aria-roledescription": t === "zh" ? "轮播" : "carousel",
						"aria-label": `${re} ${s("projects.preview")}`,
						onKeyDown: ue,
						children: [F ? /* @__PURE__ */ (0, V.jsx)("div", {
							className: "project-depth-stage",
							onPointerDown: (e) => {
								A.current = !1, e.target.tagName !== "VIDEO" && e.pointerType !== "mouse" && (k.current = {
									x: e.clientX,
									y: e.clientY
								});
							},
							onPointerCancel: () => {
								k.current = null;
							},
							onPointerUp: (e) => {
								let t = k.current;
								if (k.current = null, !t) return;
								let n = e.clientX - t.x, r = e.clientY - t.y;
								Math.abs(n) > 45 && Math.abs(n) > Math.abs(r) * 1.2 && (A.current = !0, L(n < 0 ? 1 : -1));
							},
							children: e.slides.map((e, n) => {
								let r = (n - u + F) % F, i = {
									"--depth": r,
									zIndex: F - r
								};
								return e.type === "video" ? /* @__PURE__ */ (0, V.jsxs)("div", {
									className: "project-depth-card project-depth-card--video",
									"data-depth": r,
									style: i,
									children: [/* @__PURE__ */ (0, V.jsx)(Wo, {
										item: e,
										enabled: de && !x && n === u,
										onPlay: oe,
										onPause: se
									}), /* @__PURE__ */ (0, V.jsx)("button", {
										type: "button",
										className: "project-video-select",
										"aria-pressed": u === n,
										onClick: () => p(n),
										children: e.label[t]
									})]
								}, e.id) : /* @__PURE__ */ (0, V.jsxs)("button", {
									type: "button",
									className: "project-depth-card",
									"data-depth": r,
									style: i,
									onClick: () => {
										if (A.current) {
											A.current = !1;
											return;
										}
										n === u ? ce() : p(n);
									},
									"aria-label": `${e.label[t]} — ${s(n === u ? "projects.openDetails" : "projects.selectPreview")}`,
									"aria-pressed": n === u,
									children: [/* @__PURE__ */ (0, V.jsx)("img", {
										src: e.src,
										alt: e.alt[t],
										width: "720",
										height: "1018",
										loading: "lazy",
										draggable: "false"
									}), /* @__PURE__ */ (0, V.jsxs)("span", {
										className: "project-depth-card-caption",
										children: [e.label[t], /* @__PURE__ */ (0, V.jsx)(f, {
											size: 17,
											"aria-hidden": "true"
										})]
									})]
								}, e.id);
							})
						}) : /* @__PURE__ */ (0, V.jsx)("p", {
							className: "jg-content-empty project-preview-empty",
							children: s("projects.mediaEmpty")
						}), F > 0 && /* @__PURE__ */ (0, V.jsxs)("div", {
							className: "project-preview-controls",
							children: [
								/* @__PURE__ */ (0, V.jsx)("button", {
									className: "content-icon-button",
									type: "button",
									onClick: () => L(-1),
									disabled: F < 2,
									"aria-label": s("projects.previous"),
									children: /* @__PURE__ */ (0, V.jsx)(Se, {
										size: 19,
										"aria-hidden": "true"
									})
								}),
								/* @__PURE__ */ (0, V.jsx)("div", {
									className: "project-carousel-dots",
									"aria-label": s("projects.selectPreview"),
									children: e.slides.map((e, n) => /* @__PURE__ */ (0, V.jsx)("button", {
										type: "button",
										className: "project-carousel-dot",
										"aria-label": e.label[t],
										"aria-pressed": u === n,
										onClick: () => p(n),
										children: /* @__PURE__ */ (0, V.jsx)("span", {})
									}, e.id))
								}),
								/* @__PURE__ */ (0, V.jsxs)("span", {
									className: "project-carousel-position",
									"aria-live": te ? "off" : "polite",
									children: [
										u + 1,
										" / ",
										F
									]
								}),
								/* @__PURE__ */ (0, V.jsx)("button", {
									className: "content-icon-button",
									type: "button",
									onClick: () => L(1),
									disabled: F < 2,
									"aria-label": s("projects.nextPreview"),
									children: /* @__PURE__ */ (0, V.jsx)(we, {
										size: 19,
										"aria-hidden": "true"
									})
								}),
								F > 1 && /* @__PURE__ */ (0, V.jsxs)("button", {
									className: "project-autoplay-toggle",
									type: "button",
									onClick: () => h((e) => !e),
									"aria-pressed": m,
									"aria-label": s(m ? "projects.resumePreview" : "projects.pausePreview"),
									children: [m ? /* @__PURE__ */ (0, V.jsx)(et, {
										size: 14,
										"aria-hidden": "true"
									}) : /* @__PURE__ */ (0, V.jsx)(Je, {
										size: 14,
										"aria-hidden": "true"
									}), /* @__PURE__ */ (0, V.jsx)("span", { children: s(m ? "common.resume" : "common.pause") })]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, V.jsxs)("div", {
						className: "project-preview-footer",
						children: [/* @__PURE__ */ (0, V.jsxs)("span", { children: [e.participationLabel[t] && /* @__PURE__ */ (0, V.jsx)(Oe, {
							size: 14,
							"aria-hidden": "true"
						}), e.participationLabel[t]] }), B && /* @__PURE__ */ (0, V.jsxs)("button", {
							type: "button",
							onClick: () => ce("participation"),
							children: [B.title[t], /* @__PURE__ */ (0, V.jsx)(f, {
								size: 14,
								"aria-hidden": "true"
							})]
						})]
					})
				]
			})
		})]
	}), /* @__PURE__ */ (0, V.jsx)("dialog", {
		className: "content-reader-dialog",
		ref: E,
		"data-content-live": a && i && x,
		"aria-labelledby": "project-reader-heading",
		onClose: le,
		onCancel: () => S(!1),
		onClick: (e) => {
			e.target === e.currentTarget && S(!1);
		},
		children: /* @__PURE__ */ (0, V.jsxs)("article", {
			className: "project-reader-sheet",
			children: [
				/* @__PURE__ */ (0, V.jsxs)("header", {
					className: "project-reader-header",
					children: [/* @__PURE__ */ (0, V.jsxs)("div", { children: [/* @__PURE__ */ (0, V.jsx)("h2", {
						id: "project-reader-heading",
						children: /* @__PURE__ */ (0, V.jsx)(C, {
							text: re,
							insideDialog: !0
						})
					}), /* @__PURE__ */ (0, V.jsx)("p", { children: e.subject[t] })] }), /* @__PURE__ */ (0, V.jsx)("button", {
						className: "content-icon-button",
						type: "button",
						autoFocus: !0,
						onClick: () => S(!1),
						"aria-label": s("projects.closeDetails"),
						children: /* @__PURE__ */ (0, V.jsx)(_, {
							size: 23,
							"aria-hidden": "true"
						})
					})]
				}),
				/* @__PURE__ */ (0, V.jsxs)("div", {
					className: "project-reader-overview",
					children: [
						(ie || ae) && /* @__PURE__ */ (0, V.jsxs)("div", {
							className: "project-reader-context",
							children: [ie && /* @__PURE__ */ (0, V.jsx)("p", { children: ie }), ae && /* @__PURE__ */ (0, V.jsx)("p", { children: ae })]
						}),
						z?.title[t] && /* @__PURE__ */ (0, V.jsx)("h3", { children: z.title[t] }),
						/* @__PURE__ */ (0, V.jsx)("p", {
							className: "project-reader-intro",
							children: z?.paragraphs[0]?.[t] ?? e.summary[t]
						}),
						z?.paragraphs.slice(1).map((e, n) => /* @__PURE__ */ (0, V.jsx)("p", {
							className: "project-reader-intro",
							children: e[t]
						}, n)),
						!!z?.points?.length && /* @__PURE__ */ (0, V.jsx)("ul", { children: z.points.map((e, n) => /* @__PURE__ */ (0, V.jsx)("li", { children: e[t] }, n)) })
					]
				}),
				/* @__PURE__ */ (0, V.jsx)("div", {
					className: "project-reader-tabs",
					role: "tablist",
					"aria-label": s("projects.sections"),
					children: ne.map((e, t) => /* @__PURE__ */ (0, V.jsx)("button", {
						type: "button",
						ref: (e) => {
							M.current[t] = e;
						},
						role: "tab",
						id: `reader-tab-${e.id}`,
						"aria-selected": w === e.id,
						"aria-controls": `reader-panel-${e.id}`,
						tabIndex: w === e.id ? 0 : -1,
						onClick: () => T(e.id),
						onKeyDown: (e) => {
							let n = t;
							if (e.key === "ArrowRight") n = (t + 1) % ne.length;
							else if (e.key === "ArrowLeft") n = (t + ne.length - 1) % ne.length;
							else if (e.key === "Home") n = 0;
							else if (e.key === "End") n = ne.length - 1;
							else return;
							e.preventDefault(), T(ne[n].id), M.current[n]?.focus();
						},
						children: e.label
					}, e.id))
				}),
				/* @__PURE__ */ (0, V.jsxs)("div", {
					ref: P,
					className: "project-reader-panel",
					role: "tabpanel",
					id: `reader-panel-${w}`,
					"aria-labelledby": `reader-tab-${w}`,
					tabIndex: 0,
					children: [
						w === "outputs" && F > 0 && /* @__PURE__ */ (0, V.jsx)("div", {
							className: "project-reader-documents",
							children: e.slides.map((e) => /* @__PURE__ */ (0, V.jsxs)("figure", { children: [e.type === "video" ? /* @__PURE__ */ (0, V.jsx)(Wo, {
								item: e,
								enabled: de && x,
								onPlay: oe,
								onPause: se
							}) : /* @__PURE__ */ (0, V.jsx)("a", {
								href: Vo(e) ?? e.src,
								target: "_blank",
								rel: "noopener noreferrer",
								"aria-label": e.label[t],
								children: /* @__PURE__ */ (0, V.jsx)("img", {
									src: e.src,
									alt: e.alt[t],
									width: "720",
									height: "1018",
									loading: "lazy"
								})
							}), /* @__PURE__ */ (0, V.jsxs)("figcaption", { children: [e.label[t], e.page && /* @__PURE__ */ (0, V.jsx)("span", { children: s("projects.page").replace("{page}", String(e.page)) })] })] }, e.id))
						}),
						R?.paragraphs.map((e, n) => /* @__PURE__ */ (0, V.jsx)("p", { children: e[t] }, n)),
						!!R?.points?.length && /* @__PURE__ */ (0, V.jsx)("ul", { children: R.points.map((e, n) => /* @__PURE__ */ (0, V.jsx)("li", { children: e[t] }, n)) }),
						!R?.paragraphs.length && !R?.points?.length && !(w === "outputs" && F) && /* @__PURE__ */ (0, V.jsx)("p", { children: s("projects.detailsEmpty") })
					]
				}),
				/* @__PURE__ */ (0, V.jsxs)("footer", {
					className: "project-reader-footer",
					children: [/* @__PURE__ */ (0, V.jsx)("div", { children: e.deliverables.map((e) => /* @__PURE__ */ (0, V.jsxs)("a", {
						href: e.src,
						target: "_blank",
						rel: "noopener noreferrer",
						children: [e.label[t], /* @__PURE__ */ (0, V.jsx)(f, {
							size: 17,
							"aria-hidden": "true"
						})]
					}, e.id)) }), /* @__PURE__ */ (0, V.jsx)("p", { children: e.sourceNote[t] })]
				})
			]
		})
	})] });
}
//#endregion
//#region src/new-site/DomeGallery.tsx
var Jo = (e, t, n) => Math.min(n, Math.max(t, e)), Yo = (e) => ((e + 180) % 360 + 360) % 360 - 180;
function Xo({ images: e, selected: t, onSelect: n, onOpen: r, running: i, lang: a }) {
	let o = (0, j.useRef)(null), s = (0, j.useRef)(null), c = (0, j.useRef)({
		x: 0,
		y: 0
	}), l = (0, j.useRef)(0), u = (0, j.useRef)(!1), d = (0, j.useRef)(null), f = (0, j.useRef)(-Infinity), p = Math.max(5, Math.ceil(e.length / 5)), m = (0, j.useMemo)(() => e.map((e, t) => ({
		...e,
		index: t,
		y: Math.floor(t / 5) * 360 / p,
		x: (t % 5 - 2) * 17 + (Math.floor(t / 5) % 2 ? 3 : 0)
	})), [e, p]), h = (0, j.useCallback)(() => {
		cancelAnimationFrame(l.current), l.current = 0;
	}, []), g = (0, j.useCallback)((e, t = !1) => {
		c.current = e, s.current && (s.current.style.transition = t ? "transform 480ms cubic-bezier(.16,1,.3,1)" : "none", s.current.style.transform = `translateZ(calc(var(--dome-radius) * -1)) rotateX(${e.x}deg) rotateY(${e.y}deg)`, s.current.dataset.rotation = `${e.x.toFixed(2)},${e.y.toFixed(2)}`);
	}, []), _ = (0, j.useCallback)((e, t) => {
		let n = m[e];
		if (!n) return;
		h();
		let r = c.current.y + Yo(-n.y - c.current.y);
		g({
			x: -n.x,
			y: r
		}, t);
	}, [
		m,
		g,
		h
	]);
	(0, j.useEffect)(() => {
		let e = o.current;
		if (!e) return;
		let t = () => {
			if (!e.clientWidth || !e.clientHeight) return;
			let t = Jo(e.clientWidth <= 600 ? Math.min(e.clientWidth * 1.05, e.clientHeight * .86) : Math.min(e.clientWidth * .66, e.clientHeight * .96), 230, 650);
			e.style.setProperty("--dome-radius", `${Math.round(t)}px`), e.style.setProperty("--dome-tile-width", `${Math.round(t * Math.PI * 2 / p * .88)}px`), e.style.setProperty("--dome-tile-height", `${Math.round(t * .275)}px`), g(c.current);
		}, n = new ResizeObserver(t);
		return n.observe(e), t(), () => n.disconnect();
	}, [g, p]), (0, j.useEffect)(() => {
		if (!u.current) {
			u.current = !0, g({
				x: 0,
				y: -(m[t]?.y || 0)
			});
			return;
		}
		_(t, i);
	}, [
		t,
		_,
		g
	]), (0, j.useEffect)(() => (i || (h(), d.current = null, o.current && (o.current.dataset.dragging = "false")), h), [i, h]);
	let v = (e) => {
		if (!i || !e.isPrimary || e.button !== 0) return;
		h();
		let t = e.target.closest("button[data-dome-index]");
		e.preventDefault(), d.current = {
			id: e.pointerId,
			startX: e.clientX,
			startY: e.clientY,
			lastX: e.clientX,
			lastY: e.clientY,
			time: performance.now(),
			rotation: { ...c.current },
			vx: 0,
			vy: 0,
			moved: !1,
			photoIndex: t ? Number(t.dataset.domeIndex) : null
		}, t?.focus({ preventScroll: !0 }), e.currentTarget.setPointerCapture(e.pointerId);
	}, y = (e) => {
		let t = d.current;
		if (!t || t.id !== e.pointerId) return;
		let n = e.clientX - t.startX, r = e.clientY - t.startY;
		if (!t.moved && Math.hypot(n, r) < 7) return;
		t.moved || (t.moved = !0, e.currentTarget.setPointerCapture(e.pointerId), e.currentTarget.dataset.dragging = "true");
		let i = performance.now(), a = Math.max(12, i - t.time);
		t.vx = (e.clientX - t.lastX) / a, t.vy = (e.clientY - t.lastY) / a, t.lastX = e.clientX, t.lastY = e.clientY, t.time = i;
		let s = o.current && o.current.clientWidth < 600 ? 8 : 12;
		g({
			x: Jo(t.rotation.x - r / s, -38, 38),
			y: t.rotation.y + n / s
		});
	}, b = (e, t = !1) => {
		let a = d.current;
		if (!a || a.id !== e.pointerId) return;
		if (d.current = null, e.currentTarget.dataset.dragging = "false", e.currentTarget.hasPointerCapture(e.pointerId) && e.currentTarget.releasePointerCapture(e.pointerId), !a.moved) {
			!t && a.photoIndex !== null && Math.hypot(e.clientX - a.startX, e.clientY - a.startY) < 7 && (n(a.photoIndex), r(a.photoIndex));
			return;
		}
		if (f.current = performance.now(), t || !i) return;
		let o = Jo(a.vx, -1.5, 1.5) * 1.25, s = Jo(a.vy, -1.5, 1.5) * 1.25, u = performance.now(), p = u, m = (e) => {
			let t = Math.min(32, e - p) / 16.67;
			if (p = e, o *= .9 ** t, s *= .9 ** t, e - u > 720 || Math.abs(o) + Math.abs(s) < .02) {
				l.current = 0;
				return;
			}
			g({
				x: Jo(c.current.x - s * t, -38, 38),
				y: c.current.y + o * t
			}), l.current = requestAnimationFrame(m);
		};
		l.current = requestAnimationFrame(m);
	};
	return /* @__PURE__ */ (0, V.jsxs)("div", {
		ref: o,
		className: "jg-dome-gallery",
		"data-running": i,
		"data-dragging": "false",
		role: "group",
		"aria-label": a === "zh" ? "球面照片墙，可拖动浏览，方向键选择，回车打开照片" : "Dome photo wall, drag to explore, arrow keys to choose and Enter to open",
		onPointerDown: v,
		onPointerMove: y,
		onPointerUp: (e) => b(e),
		onPointerCancel: (e) => b(e, !0),
		onKeyDown: (r) => {
			let i = {
				ArrowLeft: -5,
				ArrowRight: 5,
				ArrowUp: -1,
				ArrowDown: 1
			}, a;
			r.key in i && (a = (t + i[r.key] + e.length) % e.length), r.key === "Home" && (a = 0), r.key === "End" && (a = e.length - 1), a !== void 0 && (r.preventDefault(), r.stopPropagation(), n(a), o.current?.querySelector(`[data-dome-index="${a}"]`)?.focus({ preventScroll: !0 }));
		},
		onClickCapture: (e) => {
			performance.now() - f.current < 280 && (e.preventDefault(), e.stopPropagation());
		},
		children: [/* @__PURE__ */ (0, V.jsx)("div", {
			className: "jg-dome-stage",
			children: /* @__PURE__ */ (0, V.jsx)("div", {
				ref: s,
				className: "jg-dome-sphere",
				children: m.map((i) => /* @__PURE__ */ (0, V.jsx)("div", {
					className: "jg-dome-tile",
					style: {
						"--dome-x": `${i.x}deg`,
						"--dome-y": `${i.y}deg`
					},
					children: /* @__PURE__ */ (0, V.jsxs)("button", {
						type: "button",
						"data-dome-index": i.index,
						tabIndex: t === i.index ? 0 : -1,
						"aria-label": `${i.index + 1} / ${e.length} — ${i.alt}`,
						"aria-pressed": t === i.index,
						onFocus: () => {
							d.current || n(i.index);
						},
						onClick: (e) => {
							e.detail === 0 && (h(), n(i.index), r(i.index));
						},
						children: [/* @__PURE__ */ (0, V.jsx)("img", {
							src: i.src,
							alt: "",
							draggable: !1,
							decoding: "async",
							loading: "lazy"
						}), /* @__PURE__ */ (0, V.jsx)("span", {
							"aria-hidden": "true",
							children: String(i.index + 1).padStart(2, "0")
						})]
					})
				}, i.id))
			})
		}), /* @__PURE__ */ (0, V.jsx)("div", {
			className: "jg-dome-vignette",
			"aria-hidden": "true"
		})]
	});
}
//#endregion
//#region src/new-site/LifeMedia.tsx
var Zo = (e) => e.replace(/\.(mp4|mov|webm|jpe?g|png|webp)$/i, ""), Qo = (e) => `${Math.floor(e / 60).toString().padStart(2, "0")}:${Math.floor(e % 60).toString().padStart(2, "0")}`, $o = [
	"study-photo-033",
	"study-photo-027",
	"study-photo-049"
];
function es(e) {
	let t = e.id === "study" ? $o.flatMap((t) => e.photos.filter((e) => e.id === t)) : [];
	return [...t, ...e.photos.filter((e) => !t.some((t) => t.id === e.id))].slice(0, 3);
}
function ts({ item: e, lang: t, controller: n }) {
	let r = l(), i = (0, j.useRef)(null), [a, o] = (0, j.useState)(!1), [s, c] = (0, j.useState)(!1), [u, d] = (0, j.useState)(e.duration), p = Zo(e.title[t]), m = (0, j.useCallback)((t) => {
		i.current = t, n.register(e.id, t);
	}, [n.register, e.id]), h = () => {
		let e = i.current;
		e && (s && (c(!1), e.load()), o(!0), e.play().catch(() => {}));
	};
	return /* @__PURE__ */ (0, V.jsxs)("article", {
		className: "life-video-card",
		"data-video-id": e.id,
		"data-playing": n.playingId === e.id,
		children: [/* @__PURE__ */ (0, V.jsxs)("div", {
			className: "life-video-picture",
			children: [
				/* @__PURE__ */ (0, V.jsx)("video", {
					ref: m,
					src: e.src,
					poster: e.poster,
					controls: !0,
					playsInline: !0,
					preload: "none",
					"data-started": a,
					"aria-label": p,
					onPlay: (t) => {
						o(!0), c(!1), n.play(e.id, t.currentTarget);
					},
					onPause: () => n.pause(e.id),
					onEnded: () => n.pause(e.id),
					onError: () => {
						c(!0), n.pause(e.id);
					},
					onLoadedMetadata: (e) => {
						Number.isFinite(e.currentTarget.duration) && d(e.currentTarget.duration);
					}
				}),
				!a && !s && /* @__PURE__ */ (0, V.jsx)("button", {
					type: "button",
					className: "life-video-start",
					onClick: h,
					"aria-label": `${r("life.play")} ${p}`,
					children: /* @__PURE__ */ (0, V.jsx)("span", { children: /* @__PURE__ */ (0, V.jsx)(et, {
						size: 25,
						"aria-hidden": "true"
					}) })
				}),
				s && /* @__PURE__ */ (0, V.jsxs)("div", {
					className: "life-video-failure",
					children: [
						/* @__PURE__ */ (0, V.jsx)("p", { children: r("life.videoError") }),
						/* @__PURE__ */ (0, V.jsx)("button", {
							type: "button",
							onClick: h,
							children: r("life.retryVideo")
						}),
						/* @__PURE__ */ (0, V.jsxs)("a", {
							href: e.src,
							target: "_blank",
							rel: "noopener noreferrer",
							children: [r("life.openVideo"), /* @__PURE__ */ (0, V.jsx)(f, {
								size: 15,
								"aria-hidden": "true"
							})]
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, V.jsxs)("div", {
			className: "life-video-caption",
			children: [/* @__PURE__ */ (0, V.jsx)("h4", { children: p }), /* @__PURE__ */ (0, V.jsx)("span", {
				className: "life-video-duration",
				children: u === void 0 ? r("life.video") : Qo(u)
			})]
		})]
	});
}
function ns({ category: e, enabled: t, blocked: n, lang: r, motion: i, controller: a }) {
	let o = l(), s = (0, j.useRef)(null), c = (0, j.useRef)(null), u = (0, j.useRef)(null), f = (0, j.useRef)(null), p = (0, j.useRef)(!1), m = (0, j.useRef)(0), h = (0, j.useRef)({
		step: 1,
		width: 1,
		view: 1,
		visible: 3
	}), g = (0, j.useRef)(0), _ = (0, j.useRef)(0), [v, y] = (0, j.useState)(!1), [b, x] = (0, j.useState)(0), [S, C] = (0, j.useState)(3), [w, T] = (0, j.useState)(!1), [E, D] = (0, j.useState)(!1), [O, k] = (0, j.useState)(!1), [A, M] = (0, j.useState)(!1), [N, P] = (0, j.useState)(!1), ee = d(), F = e.videos.length, I = F > 3, te = F > S, L = t && v && !n && !ee, ne = I && te && L && i && !a.playingId && !O && !w && !E && !A && !N, R = (e, t) => (e % t + t) % t, z = (0, j.useCallback)((t) => {
		let n = c.current;
		if (!n || !F) return;
		let { step: i, visible: a } = h.current, o = F > a, s = F * i;
		m.current = o ? R(t, s) : 0;
		for (let [e, t] of Array.from(n.children).entries()) {
			let n = o ? R(e * i + m.current + i, s) - i : e * i;
			t.style.transform = `translate3d(${n.toFixed(2)}px,0,0)`;
		}
		let l = o ? R(Math.round(-m.current / i), F) : 0;
		g.current !== l && (g.current = l, x(l)), n.dataset.offset = m.current.toFixed(2), u.current && (u.current.value = String(l), u.current.style.setProperty("--film-progress", `${F > 1 ? l / (F - 1) * 100 : 0}%`), u.current.setAttribute("aria-valuetext", `${l + 1} / ${F} · ${Zo(e.videos[l].title[r])}`));
	}, [
		F,
		e.videos,
		r
	]);
	(0, j.useEffect)(() => {
		let e = s.current;
		if (!e || !t) {
			y(!1);
			return;
		}
		let n = new IntersectionObserver(([e]) => {
			let t = e.isIntersecting && e.intersectionRatio >= .08;
			y(t), t || a.pauseAll();
		}, { threshold: [0, .08] });
		return n.observe(e), () => n.disconnect();
	}, [t, a.pauseAll]), (0, j.useEffect)(() => {
		D(!!(s.current?.contains(document.activeElement) && document.activeElement?.matches(":focus-visible")));
	}, [
		a.playingId,
		t,
		v
	]), (0, j.useEffect)(() => {
		if (!a.playingId || !c.current) return;
		let t = e.videos.findIndex((e) => e.id === a.playingId);
		if (t < 0) return;
		let n = c.current.children[t].getBoundingClientRect(), r = c.current.getBoundingClientRect();
		(n.left < r.left - 2 || n.right > r.right + 2) && z(-t * h.current.step);
	}, [
		a.playingId,
		e.videos,
		z
	]), (0, j.useLayoutEffect)(() => {
		let e = c.current;
		if (!e || !F) return;
		let t = 0, n = () => {
			if (t = 0, !e.clientWidth) return;
			let n = getComputedStyle(e), r = Math.min(F, Number(n.getPropertyValue("--film-columns")) || 3), i = Number.parseFloat(n.getPropertyValue("--film-gap")) || 24, a = (e.clientWidth - i * (r - 1)) / r, o = h.current.step;
			h.current = {
				step: a + i,
				width: a,
				view: e.clientWidth,
				visible: r
			}, e.style.setProperty("--film-width", `${a}px`), C(r), z(m.current / o * (a + i));
			let s = Math.max(...Array.from(e.children).map((e) => e.offsetHeight));
			s > 0 && (e.style.height = `${Math.ceil(s) + 3}px`);
		}, r = new ResizeObserver(() => {
			t ||= requestAnimationFrame(n);
		});
		r.observe(e);
		for (let t of Array.from(e.children)) r.observe(t);
		return n(), () => {
			r.disconnect(), cancelAnimationFrame(t);
		};
	}, [F, z]), (0, j.useEffect)(() => {
		if (!ne) return;
		let e = 0, t = 0, n = (r) => {
			t && z(m.current + Math.min(40, r - t) * .023), t = r, e = requestAnimationFrame(n);
		};
		return e = requestAnimationFrame(n), () => cancelAnimationFrame(e);
	}, [ne, z]), (0, j.useEffect)(() => {
		L && i && !a.playingId || (cancelAnimationFrame(_.current), _.current = 0, P(!1), f.current = null, M(!1));
	}, [
		L,
		i,
		a.playingId
	]), (0, j.useEffect)(() => () => cancelAnimationFrame(_.current), []);
	let B = (0, j.useCallback)((e, t = !0) => {
		if (!c.current || F <= h.current.visible) return;
		a.pauseAll(), cancelAnimationFrame(_.current);
		let { step: n } = h.current, r = F * n, o = R(e, F), s = R(-o * n - m.current + r / 2, r) - r / 2;
		if (!i || !t) {
			P(!1), z(m.current + s);
			return;
		}
		let l = m.current, u = 0;
		P(!0);
		let d = (e) => {
			u ||= e;
			let t = Math.min(1, (e - u) / 460);
			z(l + s * (1 - (1 - t) ** 3)), t < 1 ? _.current = requestAnimationFrame(d) : (_.current = 0, P(!1));
		};
		_.current = requestAnimationFrame(d);
	}, [
		F,
		a.pauseAll,
		i,
		z
	]), re = (e) => B(g.current + e), ie = e.videos[b] ? Zo(e.videos[b].title[r]) : "";
	return F === 0 ? null : /* @__PURE__ */ (0, V.jsxs)("div", {
		className: "life-video-shelf life-video-flow",
		ref: s,
		"data-automatic": I,
		"data-count": F,
		"data-running": ne,
		"data-shelf-visible": v,
		"data-flow-motion": i && L,
		"data-flow-paused": O,
		onPointerEnter: (e) => {
			e.pointerType === "mouse" && T(!0);
		},
		onPointerLeave: () => T(!1),
		onFocusCapture: (e) => {
			let t = e.target, n = t.matches(":focus-visible");
			if (D(n), f.current || !n) return;
			let r = t.closest("[data-film-index]");
			if (!r || !c.current) return;
			let i = r.getBoundingClientRect(), a = c.current.getBoundingClientRect();
			(i.left < a.left - 2 || i.right > a.right + 2) && B(Number(r.dataset.filmIndex), !1);
		},
		onBlurCapture: (e) => {
			e.currentTarget.contains(e.relatedTarget) || D(!1);
		},
		children: [
			/* @__PURE__ */ (0, V.jsxs)("div", {
				className: "life-media-toolbar",
				children: [/* @__PURE__ */ (0, V.jsxs)("h3", { children: [o("life.films"), /* @__PURE__ */ (0, V.jsx)("span", { children: F })] }), /* @__PURE__ */ (0, V.jsxs)("div", {
					className: "life-shelf-controls",
					children: [/* @__PURE__ */ (0, V.jsxs)("output", {
						"aria-live": "off",
						children: [String(b + 1).padStart(2, "0"), /* @__PURE__ */ (0, V.jsxs)("span", { children: [" / ", String(F).padStart(2, "0")] })]
					}), te && /* @__PURE__ */ (0, V.jsxs)("div", {
						className: "life-film-transport",
						children: [
							/* @__PURE__ */ (0, V.jsx)("button", {
								type: "button",
								className: "life-round-button",
								onClick: () => re(-1),
								"aria-label": o("life.previousVideo"),
								children: /* @__PURE__ */ (0, V.jsx)(Se, {
									size: 17,
									"aria-hidden": "true"
								})
							}),
							I && /* @__PURE__ */ (0, V.jsx)("button", {
								type: "button",
								className: "life-shelf-pause",
								"aria-pressed": O,
								onClick: () => k((e) => !e),
								"aria-label": r === "zh" ? O ? "继续自动展示视频" : "暂停自动展示视频" : O ? "Resume automatic browsing" : "Pause automatic browsing",
								title: o(O ? "common.resume" : "common.pause"),
								children: O ? /* @__PURE__ */ (0, V.jsx)(et, {
									size: 13,
									"aria-hidden": "true"
								}) : /* @__PURE__ */ (0, V.jsx)(Je, {
									size: 13,
									"aria-hidden": "true"
								})
							}),
							/* @__PURE__ */ (0, V.jsx)("button", {
								type: "button",
								className: "life-round-button",
								onClick: () => re(1),
								"aria-label": o("life.nextVideo"),
								children: /* @__PURE__ */ (0, V.jsx)(we, {
									size: 17,
									"aria-hidden": "true"
								})
							})
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, V.jsxs)("div", {
				className: "life-film-river",
				children: [/* @__PURE__ */ (0, V.jsxs)("div", {
					className: "life-film-water",
					"aria-hidden": "true",
					children: [/* @__PURE__ */ (0, V.jsx)("span", {}), /* @__PURE__ */ (0, V.jsx)("span", {})]
				}), /* @__PURE__ */ (0, V.jsx)("div", {
					className: "life-video-track life-film-track",
					ref: c,
					role: "region",
					"aria-label": `${e.title[r]} ${r === "zh" ? "视频，左右方向键浏览" : "videos, browse with left and right arrow keys"}`,
					tabIndex: 0,
					onPointerDown: (e) => {
						if (p.current = !1, !te || e.button !== 0) return;
						let t = e.target.closest(".life-video-picture");
						t && e.clientY > t.getBoundingClientRect().bottom - 44 || (cancelAnimationFrame(_.current), _.current = 0, P(!1), f.current = {
							x: e.clientX,
							y: e.clientY,
							offset: m.current,
							moved: !1
						}, M(!0));
					},
					onPointerMove: (e) => {
						let t = f.current;
						if (!t) return;
						let n = e.clientX - t.x, r = e.clientY - t.y;
						if (!t.moved && Math.abs(r) > Math.abs(n) && Math.abs(r) > 10) {
							f.current = null, M(!1);
							return;
						}
						!t.moved && Math.abs(n) > 8 && Math.abs(n) > Math.abs(r) * 1.2 && (t.moved = !0, a.pauseAll(), e.currentTarget.setPointerCapture(e.pointerId)), t.moved && (e.preventDefault(), z(t.offset + n));
					},
					onPointerCancel: () => {
						f.current = null, M(!1);
					},
					onPointerUp: (e) => {
						let t = f.current;
						f.current = null, M(!1), t?.moved && (p.current = !0, e.preventDefault()), e.currentTarget.hasPointerCapture(e.pointerId) && e.currentTarget.releasePointerCapture(e.pointerId);
					},
					onClickCapture: (e) => {
						p.current && (p.current = !1, e.preventDefault(), e.stopPropagation());
					},
					onKeyDown: (e) => {
						e.target === e.currentTarget && (e.key === "ArrowRight" || e.key === "ArrowLeft" ? (e.preventDefault(), re(e.key === "ArrowRight" ? 1 : -1)) : (e.key === "Home" || e.key === "End") && (e.preventDefault(), B(e.key === "Home" ? 0 : F - 1)));
					},
					children: e.videos.map((e, t) => /* @__PURE__ */ (0, V.jsx)("div", {
						className: "life-film-slot",
						"data-film-index": t,
						children: /* @__PURE__ */ (0, V.jsx)(ts, {
							item: e,
							lang: r,
							controller: a
						})
					}, e.id))
				})]
			}),
			te && /* @__PURE__ */ (0, V.jsxs)("div", {
				className: "life-film-position",
				children: [
					/* @__PURE__ */ (0, V.jsxs)("span", {
						className: "life-film-direction",
						"aria-hidden": "true",
						children: [
							/* @__PURE__ */ (0, V.jsx)("i", {}),
							/* @__PURE__ */ (0, V.jsx)("i", {}),
							/* @__PURE__ */ (0, V.jsx)("i", {}),
							/* @__PURE__ */ (0, V.jsx)(we, { size: 14 })
						]
					}),
					/* @__PURE__ */ (0, V.jsx)("input", {
						ref: u,
						type: "range",
						min: 0,
						max: F - 1,
						step: 1,
						defaultValue: 0,
						"aria-label": o("life.videoPosition"),
						"aria-valuetext": `${b + 1} / ${F} · ${ie}`,
						onChange: (e) => B(Number(e.target.value), !1)
					}),
					/* @__PURE__ */ (0, V.jsx)("span", {
						className: "life-film-count",
						"aria-hidden": "true",
						children: String(F).padStart(2, "0")
					})
				]
			})
		]
	});
}
function rs({ photo: e, lang: t }) {
	let r = l(), { motion: i, visible: a } = n(), o = i && a, s = (0, j.useRef)(null), c = (0, j.useRef)(null), u = (0, j.useRef)(null), d = (0, j.useRef)(e.id);
	d.current = e.id;
	let [f, p] = (0, j.useState)(null), [m, h] = (0, j.useState)({
		id: e.id,
		status: "loading"
	}), g = m.id === e.id ? m.status : "loading";
	return Mo(s, `${e.id}:${g}`, o && g === "ready"), (0, j.useLayoutEffect)(() => {
		p(u.current?.id === e.id ? null : u.current);
	}, [e.id]), (0, j.useLayoutEffect)(() => {
		if (g !== "ready" || !c.current) return;
		if (!o) {
			p(null);
			return;
		}
		let t = f && f.id > e.id ? "inset(0 0 0 100%)" : "inset(0 100% 0 0)", n = c.current.animate([{ clipPath: t }, { clipPath: "inset(0 0 0 0)" }], {
			duration: 520,
			easing: "cubic-bezier(.16,1,.3,1)"
		});
		return n.onfinish = () => {
			d.current === e.id && p(null);
		}, () => n.cancel();
	}, [
		o,
		e.id,
		g
	]), /* @__PURE__ */ (0, V.jsxs)("div", {
		className: "life-album-image-wrap",
		ref: s,
		children: [
			f && /* @__PURE__ */ (0, V.jsx)("img", {
				className: "life-album-previous-image",
				src: f.src,
				alt: "",
				"aria-hidden": "true",
				width: f.width,
				height: f.height
			}),
			/* @__PURE__ */ (0, V.jsx)("img", {
				ref: c,
				className: "life-album-current-image",
				"data-ready": g === "ready",
				src: e.src,
				alt: Zo(e.title[t]),
				width: e.width,
				height: e.height,
				onLoad: () => {
					d.current === e.id && (u.current = e, h({
						id: e.id,
						status: "ready"
					}));
				},
				onError: () => {
					d.current === e.id && h({
						id: e.id,
						status: "error"
					});
				}
			}, e.id),
			g === "loading" && /* @__PURE__ */ (0, V.jsx)("p", {
				className: "life-album-image-status",
				role: "status",
				children: r("life.loadingPhoto")
			}),
			g === "error" && /* @__PURE__ */ (0, V.jsx)("p", {
				className: "life-album-image-status",
				role: "status",
				children: r("life.photoError")
			})
		]
	});
}
function is({ category: e, index: t, lang: r, motion: i, onSelect: a, onClose: o }) {
	let s = l(), { visible: c } = n(), u = (0, j.useRef)(null), d = (0, j.useRef)(null), p = (0, j.useRef)(null), m = (0, j.useRef)(null), [h, g] = (0, j.useState)(!1), [v, y] = (0, j.useState)(!1), b = e.photos, x = (0, j.useMemo)(() => b.map((e) => ({
		id: e.id,
		src: e.src,
		alt: Zo(e.title[r])
	})), [b, r]), S = b[t], w = v || !i, T = (e) => a((t + e + b.length) % b.length);
	(0, j.useEffect)(() => {
		let e = u.current;
		if (!e) return;
		let t = document.body.classList.contains("has-dialog");
		return document.body.classList.add("has-dialog"), e.showModal(), () => {
			e.open && e.close(), t || document.body.classList.remove("has-dialog");
		};
	}, []);
	let E = (e) => {
		a(e), g(!0);
	}, D = () => {
		g(!1), requestAnimationFrame(() => d.current?.querySelector(w ? `[data-grid-index="${t}"]` : `[data-dome-index="${t}"]`)?.focus({ preventScroll: !0 }));
	};
	return (0, j.useEffect)(() => {
		h && p.current?.focus({ preventScroll: !0 });
	}, [h]), /* @__PURE__ */ (0, V.jsx)("dialog", {
		ref: u,
		className: "life-album-dialog life-dome-dialog",
		"data-content-live": i && c,
		"data-album-view": h ? "photo" : w ? "grid" : "dome",
		"aria-labelledby": "life-album-heading",
		onKeyDown: (e) => {
			h && !e.target.closest("select,input") && (e.key === "ArrowLeft" || e.key === "ArrowRight" ? (e.preventDefault(), T(e.key === "ArrowRight" ? 1 : -1)) : e.key === "Home" ? (e.preventDefault(), a(0)) : e.key === "End" && (e.preventDefault(), a(b.length - 1)));
		},
		onCancel: (e) => {
			e.preventDefault(), h ? D() : o();
		},
		onClose: o,
		onClick: (e) => {
			e.target === e.currentTarget && o();
		},
		children: /* @__PURE__ */ (0, V.jsxs)("article", {
			className: "life-album-sheet life-dome-sheet",
			children: [
				/* @__PURE__ */ (0, V.jsxs)("header", {
					className: "life-album-header",
					children: [/* @__PURE__ */ (0, V.jsxs)("div", { children: [/* @__PURE__ */ (0, V.jsx)("h2", {
						id: "life-album-heading",
						children: /* @__PURE__ */ (0, V.jsx)(C, {
							text: `${e.title[r]} / ${s("life.album")}`,
							insideDialog: !0
						})
					}), /* @__PURE__ */ (0, V.jsx)("p", { children: h ? Zo(S.title[r]) : `${b.length} ${s("life.moments")}` })] }), /* @__PURE__ */ (0, V.jsx)("button", {
						type: "button",
						className: "life-round-button",
						onClick: o,
						"aria-label": s("life.closeAlbum"),
						autoFocus: !0,
						children: /* @__PURE__ */ (0, V.jsx)(_, {
							size: 24,
							"aria-hidden": "true"
						})
					})]
				}),
				/* @__PURE__ */ (0, V.jsxs)("div", {
					className: "life-dome-toolbar",
					children: [h ? /* @__PURE__ */ (0, V.jsxs)("button", {
						ref: p,
						type: "button",
						onClick: D,
						children: [/* @__PURE__ */ (0, V.jsx)(Se, {
							size: 17,
							"aria-hidden": "true"
						}), s("life.backToWall")]
					}) : /* @__PURE__ */ (0, V.jsx)("p", { children: s(w ? "life.choosePhoto" : "life.dragHint") }), !h && i && /* @__PURE__ */ (0, V.jsxs)("button", {
						type: "button",
						onClick: () => y((e) => !e),
						children: [s(w ? "life.dome" : "life.grid"), /* @__PURE__ */ (0, V.jsx)(Be, {
							size: 16,
							"aria-hidden": "true"
						})]
					})]
				}),
				/* @__PURE__ */ (0, V.jsxs)("div", {
					className: "life-dome-wall",
					ref: d,
					hidden: h,
					children: [/* @__PURE__ */ (0, V.jsx)("div", {
						className: "life-dome-viewport",
						hidden: w,
						children: /* @__PURE__ */ (0, V.jsx)(Xo, {
							images: x,
							selected: t,
							onSelect: a,
							onOpen: E,
							running: i && c && !h && !w,
							lang: r
						})
					}), w && /* @__PURE__ */ (0, V.jsx)("div", {
						className: "life-dome-grid",
						"aria-label": s("life.allPhotos"),
						children: b.map((e, t) => /* @__PURE__ */ (0, V.jsxs)("button", {
							type: "button",
							"data-grid-index": t,
							onClick: () => E(t),
							"aria-label": `${t + 1} / ${b.length} — ${Zo(e.title[r])}`,
							children: [/* @__PURE__ */ (0, V.jsx)("img", {
								src: e.src,
								alt: "",
								width: e.width,
								height: e.height,
								loading: "lazy"
							}), /* @__PURE__ */ (0, V.jsx)("span", { children: String(t + 1).padStart(2, "0") })]
						}, e.id))
					})]
				}),
				h && /* @__PURE__ */ (0, V.jsxs)("div", {
					className: "life-album-stage",
					onPointerDown: (e) => {
						e.pointerType !== "mouse" && (m.current = {
							x: e.clientX,
							y: e.clientY
						});
					},
					onPointerCancel: () => {
						m.current = null;
					},
					onPointerUp: (e) => {
						let t = m.current;
						if (m.current = null, !t) return;
						let n = e.clientX - t.x, r = e.clientY - t.y;
						Math.abs(n) > 45 && Math.abs(n) > Math.abs(r) * 1.3 && T(n < 0 ? 1 : -1);
					},
					children: [
						/* @__PURE__ */ (0, V.jsx)(rs, {
							photo: S,
							lang: r
						}),
						/* @__PURE__ */ (0, V.jsx)("button", {
							type: "button",
							className: "life-album-arrow life-album-previous",
							onClick: () => T(-1),
							"aria-label": s("life.previousPhoto"),
							children: /* @__PURE__ */ (0, V.jsx)(Se, {
								size: 23,
								"aria-hidden": "true"
							})
						}),
						/* @__PURE__ */ (0, V.jsx)("button", {
							type: "button",
							className: "life-album-arrow life-album-next",
							onClick: () => T(1),
							"aria-label": s("life.nextPhoto"),
							children: /* @__PURE__ */ (0, V.jsx)(we, {
								size: 23,
								"aria-hidden": "true"
							})
						})
					]
				}),
				/* @__PURE__ */ (0, V.jsxs)("div", {
					className: "life-album-meta life-dome-meta",
					children: [/* @__PURE__ */ (0, V.jsxs)("label", { children: [s("life.photo"), /* @__PURE__ */ (0, V.jsx)("select", {
						value: t,
						onChange: (e) => a(Number(e.target.value)),
						"aria-label": s("life.jumpPhoto"),
						children: b.map((e, t) => /* @__PURE__ */ (0, V.jsxs)("option", {
							value: t,
							children: [
								t + 1,
								" / ",
								b.length,
								" — ",
								Zo(e.title[r])
							]
						}, e.id))
					})] }), h ? /* @__PURE__ */ (0, V.jsxs)("a", {
						href: S.src,
						target: "_blank",
						rel: "noopener noreferrer",
						children: [s("life.openOriginal"), /* @__PURE__ */ (0, V.jsx)(f, {
							size: 16,
							"aria-hidden": "true"
						})]
					}) : /* @__PURE__ */ (0, V.jsxs)("button", {
						type: "button",
						onClick: () => E(t),
						children: [s("life.openSelected"), /* @__PURE__ */ (0, V.jsx)(f, {
							size: 16,
							"aria-hidden": "true"
						})]
					})]
				})
			]
		})
	});
}
function as() {
	let e = l(), { lang: t, active: r, visible: i, motion: a, setMediaPlaying: o, go: s } = n(), { lifeMedia: c } = m(), [d, f] = (0, j.useState)("study"), [p, h] = (0, j.useState)(null), [g, _] = (0, j.useState)(null), v = (0, j.useRef)(/* @__PURE__ */ new Map()), y = (0, j.useRef)(null), S = (0, j.useRef)(null), w = (0, j.useRef)([]), T = (0, j.useRef)(null), E = a && i && r === "life";
	Mo(T, d, E, !0);
	let D = (0, j.useCallback)((e, t) => {
		t ? v.current.set(e, t) : v.current.delete(e);
	}, []), O = (0, j.useCallback)(() => {
		y.current = null;
		for (let e of v.current.values()) e.paused || e.pause();
		h(null), o(!1);
	}, [o]), k = {
		register: D,
		play: (0, j.useCallback)((e, t) => {
			y.current = e;
			for (let [t, n] of v.current) t !== e && !n.paused && n.pause();
			t.paused || (h(e), o(!0));
		}, [o]),
		pause: (0, j.useCallback)((e) => {
			y.current === e && (y.current = null, h(null), o(!1));
		}, [o]),
		pauseAll: O,
		playingId: p
	};
	(0, j.useEffect)(() => {
		(r !== "life" || !i) && O();
	}, [
		r,
		i,
		O
	]), (0, j.useEffect)(() => () => {
		for (let e of v.current.values()) e.pause();
		o(!1);
	}, [o]);
	let A = (e) => {
		O(), f(e);
	}, M = (e, t = 0) => {
		O(), S.current = document.activeElement instanceof HTMLElement ? document.activeElement : null, _({
			category: e,
			index: t
		});
	}, N = (0, j.useCallback)(() => {
		_(null), requestAnimationFrame(() => S.current?.focus({ preventScroll: !0 }));
	}, []), P = g ? c.find((e) => e.id === g.category) : void 0, ee = c.find((e) => e.id !== d && (e.photos.length || e.videos.length));
	return /* @__PURE__ */ (0, V.jsxs)("section", {
		id: "life",
		className: "chapter life-section life-library-section",
		"aria-labelledby": "life-heading",
		"data-content-motion": a,
		"data-content-live": E,
		children: [
			/* @__PURE__ */ (0, V.jsx)(u, { chapter: "life" }),
			/* @__PURE__ */ (0, V.jsxs)("div", {
				className: "content-section-inner",
				children: [
					/* @__PURE__ */ (0, V.jsxs)("div", {
						className: "life-library-heading",
						children: [/* @__PURE__ */ (0, V.jsx)(b, { children: /* @__PURE__ */ (0, V.jsxs)("header", {
							className: "content-section-heading",
							children: [/* @__PURE__ */ (0, V.jsx)("h2", {
								id: "life-heading",
								children: /* @__PURE__ */ (0, V.jsx)(C, {
									chapter: "life",
									text: e("life.heading")
								})
							}), /* @__PURE__ */ (0, V.jsx)("p", { children: /* @__PURE__ */ (0, V.jsx)(C, {
								chapter: "life",
								order: 1,
								tone: "support",
								text: e("life.subtitle")
							}) })]
						}) }), /* @__PURE__ */ (0, V.jsx)("div", {
							className: "life-library-categories",
							role: "tablist",
							"aria-label": e("life.categories"),
							children: c.map((e, n) => /* @__PURE__ */ (0, V.jsx)("button", {
								type: "button",
								ref: (e) => {
									w.current[n] = e;
								},
								role: "tab",
								id: `life-tab-${e.id}`,
								"aria-controls": `life-panel-${e.id}`,
								"aria-selected": d === e.id,
								tabIndex: d === e.id ? 0 : -1,
								onClick: () => A(e.id),
								onKeyDown: (e) => {
									let t = n;
									if (e.key === "ArrowRight") t = (n + 1) % c.length;
									else if (e.key === "ArrowLeft") t = (n + c.length - 1) % c.length;
									else if (e.key === "Home") t = 0;
									else if (e.key === "End") t = c.length - 1;
									else return;
									e.preventDefault(), A(c[t].id), w.current[t]?.focus();
								},
								children: e.title[t]
							}, e.id))
						})]
					}),
					/* @__PURE__ */ (0, V.jsx)("div", {
						className: "life-library-content",
						ref: T,
						children: c.map((n) => /* @__PURE__ */ (0, V.jsxs)("div", {
							className: "life-library-panel",
							id: `life-panel-${n.id}`,
							role: "tabpanel",
							"aria-labelledby": `life-tab-${n.id}`,
							hidden: d !== n.id,
							children: [
								/* @__PURE__ */ (0, V.jsx)(ns, {
									category: n,
									enabled: r === "life" && i && d === n.id,
									blocked: g !== null,
									lang: t,
									motion: a,
									controller: k
								}),
								n.photos.length > 0 && /* @__PURE__ */ (0, V.jsxs)("button", {
									type: "button",
									className: "life-album-entry",
									onClick: () => M(n.id),
									"aria-label": t === "zh" ? `打开${n.title.zh}相册，共 ${n.photos.length} 张照片` : `Open ${n.title.en} album, ${n.photos.length} photographs`,
									children: [/* @__PURE__ */ (0, V.jsx)("div", {
										className: "life-album-preview",
										"aria-hidden": "true",
										children: es(n).map((e) => /* @__PURE__ */ (0, V.jsx)("img", {
											src: e.src,
											alt: "",
											width: e.width,
											height: e.height,
											loading: "lazy"
										}, e.id))
									}), /* @__PURE__ */ (0, V.jsxs)("div", {
										className: "life-album-entry-copy",
										children: [
											/* @__PURE__ */ (0, V.jsxs)("span", {
												className: "life-album-entry-count",
												children: [
													/* @__PURE__ */ (0, V.jsx)(Be, {
														size: 18,
														"aria-hidden": "true"
													}),
													n.photos.length,
													" ",
													e("life.photoCount")
												]
											}),
											/* @__PURE__ */ (0, V.jsx)("h3", { children: e("life.albumHeading") }),
											/* @__PURE__ */ (0, V.jsxs)("span", {
												className: "life-album-entry-link",
												children: [e("life.exploreAlbum"), /* @__PURE__ */ (0, V.jsx)(we, {
													size: 25,
													"aria-hidden": "true"
												})]
											})
										]
									})]
								}),
								n.videos.length === 0 && n.photos.length === 0 && /* @__PURE__ */ (0, V.jsxs)("div", {
									className: "life-library-empty",
									children: [
										/* @__PURE__ */ (0, V.jsx)("span", {
											"aria-hidden": "true",
											children: n.title.en.toUpperCase()
										}),
										/* @__PURE__ */ (0, V.jsx)("h3", { children: e("life.emptyHeading") }),
										/* @__PURE__ */ (0, V.jsx)("p", { children: e("life.emptyBody") }),
										ee && /* @__PURE__ */ (0, V.jsxs)("button", {
											type: "button",
											onClick: () => {
												A(ee.id), w.current[c.indexOf(ee)]?.focus();
											},
											children: [e("life.exploreOther"), /* @__PURE__ */ (0, V.jsx)(we, {
												size: 20,
												"aria-hidden": "true"
											})]
										})
									]
								})
							]
						}, n.id))
					}),
					/* @__PURE__ */ (0, V.jsxs)("div", {
						className: "life-footline",
						children: [/* @__PURE__ */ (0, V.jsx)("p", { children: e("life.footline") }), /* @__PURE__ */ (0, V.jsx)("div", {
							className: "life-companion-slot",
							children: /* @__PURE__ */ (0, V.jsx)(xo, { placement: "life" })
						})]
					}),
					/* @__PURE__ */ (0, V.jsx)(x, { page: "life" }),
					/* @__PURE__ */ (0, V.jsx)("div", {
						className: "content-chapter-end",
						children: /* @__PURE__ */ (0, V.jsxs)("button", {
							type: "button",
							onClick: () => s("contact"),
							children: [e("life.next"), /* @__PURE__ */ (0, V.jsx)(be, {
								size: 18,
								"aria-hidden": "true"
							})]
						})
					})
				]
			}),
			g && P && /* @__PURE__ */ (0, V.jsx)(is, {
				category: P,
				index: g.index,
				lang: t,
				motion: a,
				onSelect: (e) => _((t) => t ? {
					...t,
					index: e
				} : null),
				onClose: N
			})
		]
	});
}
//#endregion
//#region src/new-site/ContentSections.tsx
function os({ destination: e, text: t }) {
	let { go: r } = n();
	return /* @__PURE__ */ (0, V.jsx)("div", {
		className: "content-chapter-end",
		children: /* @__PURE__ */ (0, V.jsxs)("button", {
			type: "button",
			onClick: () => r(e),
			children: [t, /* @__PURE__ */ (0, V.jsx)(be, {
				size: 18,
				"aria-hidden": "true"
			})]
		})
	});
}
function ss() {
	let e = l(), t = [
		"experience.tool1",
		"experience.tool2",
		"experience.tool3",
		"experience.tool4"
	].map(e).filter(Boolean), { lang: r, motion: i, active: a, visible: o } = n(), [s, c] = (0, j.useState)(!1), u = (0, j.useRef)(null), d = jo(u, i && o && a === "experience") && !s;
	return /* @__PURE__ */ (0, V.jsxs)("div", {
		ref: u,
		className: "practice-tools",
		"data-running": d,
		children: [/* @__PURE__ */ (0, V.jsxs)("div", {
			className: "practice-tools-label",
			children: [/* @__PURE__ */ (0, V.jsx)("p", { children: e("experience.tools") }), /* @__PURE__ */ (0, V.jsx)("button", {
				type: "button",
				className: "content-icon-button",
				onClick: () => c((e) => !e),
				"aria-label": r === "zh" ? s ? "继续工具轮播" : "暂停工具轮播" : s ? "Resume tool loop" : "Pause tool loop",
				"aria-pressed": s,
				children: s ? /* @__PURE__ */ (0, V.jsx)(et, {
					size: 15,
					"aria-hidden": "true"
				}) : /* @__PURE__ */ (0, V.jsx)(Je, {
					size: 15,
					"aria-hidden": "true"
				})
			})]
		}), /* @__PURE__ */ (0, V.jsx)("div", {
			className: "practice-tools-viewport",
			children: /* @__PURE__ */ (0, V.jsx)("div", {
				className: "practice-tools-track",
				children: [0, 1].map((e) => /* @__PURE__ */ (0, V.jsx)("ul", {
					"aria-hidden": e === 1 || void 0,
					children: t.map((e, t) => /* @__PURE__ */ (0, V.jsxs)("li", { children: [e, /* @__PURE__ */ (0, V.jsx)("span", {
						"aria-hidden": "true",
						children: "/"
					})] }, t))
				}, e))
			})
		})]
	});
}
function cs({ item: e, expanded: t, toggle: r, live: i }) {
	let { lang: a } = n(), o = e[a], [s, c] = o.date.split(" — "), [l, u] = (0, j.useState)(t), d = (0, j.useRef)(null), f = (0, j.useRef)(null), p = (0, j.useRef)(null), m = (0, j.useRef)(!1);
	return Mo(f, t ? "open" : "closed", i && t, !0), (0, j.useLayoutEffect)(() => {
		let e = d.current;
		if (!e) return;
		let n = e.getBoundingClientRect().height;
		if (p.current?.cancel(), p.current = null, e.style.height = "", e.style.overflow = "", !m.current || !i) {
			m.current = !0, e.open = t, u(t);
			return;
		}
		e.open = !0, u(!0);
		let r = parseFloat(getComputedStyle(e).borderBottomWidth) || 0, a = t ? e.getBoundingClientRect().height : (e.querySelector("summary")?.getBoundingClientRect().height || 0) + r;
		if (Math.abs(n - a) < 1) {
			e.open = t, u(t);
			return;
		}
		e.style.overflow = "clip";
		let o = e.animate([{ height: `${n}px` }, { height: `${a}px` }], {
			duration: Math.min(520, 280 + Math.abs(a - n) * .45),
			easing: "cubic-bezier(.2,.85,.2,1)",
			fill: "both"
		});
		p.current = o, o.onfinish = () => {
			p.current === o && (e.open = t, u(t), e.style.overflow = "", p.current = null, o.cancel());
		};
	}, [
		t,
		a,
		i
	]), (0, j.useEffect)(() => () => p.current?.cancel(), []), /* @__PURE__ */ (0, V.jsxs)("details", {
		ref: d,
		className: "experience-entry",
		open: l,
		"data-expanded": t,
		children: [/* @__PURE__ */ (0, V.jsxs)("summary", {
			onClick: (e) => {
				e.preventDefault(), r();
			},
			"aria-expanded": t,
			"aria-controls": `experience-description-${e.id}`,
			children: [
				/* @__PURE__ */ (0, V.jsxs)("span", {
					className: "experience-date",
					children: [/* @__PURE__ */ (0, V.jsx)("span", { children: s }), c && /* @__PURE__ */ (0, V.jsxs)("small", { children: ["— ", c] })]
				}),
				/* @__PURE__ */ (0, V.jsxs)("span", {
					className: "experience-company",
					children: [/* @__PURE__ */ (0, V.jsx)("strong", { children: o.company }), /* @__PURE__ */ (0, V.jsx)("span", { children: o.role })]
				}),
				/* @__PURE__ */ (0, V.jsx)("span", {
					className: "experience-toggle",
					"aria-hidden": "true",
					children: /* @__PURE__ */ (0, V.jsx)(nt, { size: 22 })
				})
			]
		}), /* @__PURE__ */ (0, V.jsxs)("div", {
			ref: f,
			className: "experience-description",
			id: `experience-description-${e.id}`,
			children: [/* @__PURE__ */ (0, V.jsx)("p", { children: o.description }), /* @__PURE__ */ (0, V.jsx)("span", {
				className: "experience-location",
				children: o.place
			})]
		})]
	});
}
function ls() {
	let e = l(), { lang: t, motion: r, visible: i, active: a } = n(), { experiences: o } = m(), [s, c] = (0, j.useState)(() => o[0]?.id ?? null), d = r && i && a === "experience";
	return /* @__PURE__ */ (0, V.jsxs)("section", {
		id: "experience",
		className: "chapter experience-section",
		"aria-labelledby": "experience-heading",
		"data-content-motion": r,
		"data-content-live": d,
		children: [/* @__PURE__ */ (0, V.jsx)(u, { chapter: "experience" }), /* @__PURE__ */ (0, V.jsxs)("div", {
			className: "content-section-inner",
			children: [
				/* @__PURE__ */ (0, V.jsx)(b, { children: /* @__PURE__ */ (0, V.jsxs)("header", {
					className: "content-section-heading experience-heading",
					children: [
						/* @__PURE__ */ (0, V.jsx)("h2", {
							id: "experience-heading",
							children: /* @__PURE__ */ (0, V.jsx)(C, {
								chapter: "experience",
								text: e("experience.heading")
							})
						}),
						/* @__PURE__ */ (0, V.jsx)("p", { children: /* @__PURE__ */ (0, V.jsx)(C, {
							chapter: "experience",
							order: 1,
							tone: "support",
							text: e("experience.subtitle")
						}) }),
						/* @__PURE__ */ (0, V.jsx)("span", {
							className: "experience-display-word",
							"aria-hidden": "true",
							children: e("experience.displayWord")
						})
					]
				}) }),
				/* @__PURE__ */ (0, V.jsxs)("div", {
					className: "experience-timeline",
					children: [o.map((e) => /* @__PURE__ */ (0, V.jsx)(cs, {
						item: e,
						expanded: s === e.id,
						live: d,
						toggle: () => c((t) => t === e.id ? null : e.id)
					}, e.id)), !o.length && /* @__PURE__ */ (0, V.jsx)("p", {
						className: "jg-content-empty",
						children: e("experience.empty")
					})]
				}),
				/* @__PURE__ */ (0, V.jsx)(ss, {}),
				/* @__PURE__ */ (0, V.jsx)(x, { page: "experience" }),
				/* @__PURE__ */ (0, V.jsx)(os, {
					destination: "projects",
					text: e("experience.next")
				})
			]
		})]
	});
}
//#endregion
//#region src/new-site/SiteChoreography.tsx
function us() {
	let { motion: e, visible: t, profile: r } = n(), [i, a] = (0, j.useState)(!1), o = (0, j.useRef)(/* @__PURE__ */ new WeakSet());
	(0, j.useEffect)(() => {
		let e = () => a(!!document.querySelector("dialog[open]")), t = new MutationObserver(e);
		return t.observe(document.body, {
			subtree: !0,
			attributes: !0,
			attributeFilter: ["open"]
		}), e(), () => t.disconnect();
	}, []);
	let s = e && t && !r && !i;
	return (0, j.useEffect)(() => (document.documentElement.dataset.motionRunning = String(s), document.documentElement.dataset.motionVisible = String(t), () => {
		delete document.documentElement.dataset.motionRunning, delete document.documentElement.dataset.motionVisible;
	}), [s, t]), (0, j.useEffect)(() => {
		if (!s) return;
		let e = /* @__PURE__ */ new Map(), t = [
			".experience-entry",
			".projects-index",
			".project-preview",
			".life-media-toolbar",
			".life-album-entry",
			".contact-methods",
			".contact-footer"
		].join(","), n = (t) => {
			e.get(t)?.cancel(), e.delete(t), t.dataset.revealState = "settled";
		}, r = new IntersectionObserver((t) => {
			for (let i of t) {
				let t = i.target;
				if (!i.isIntersecting) {
					n(t);
					continue;
				}
				if (o.current.has(t) || t.closest("[hidden]")) continue;
				if (o.current.add(t), r.unobserve(t), t.contains(document.activeElement)) {
					n(t);
					continue;
				}
				let a = t.matches(".content-section-heading,.contact-content h2"), s = t.matches(".project-preview,.life-album-entry"), c = s ? [{
					clipPath: "inset(0 0 11% 0)",
					filter: "brightness(.68)",
					opacity: .8
				}, {
					clipPath: "inset(0)",
					filter: "brightness(1)",
					opacity: 1
				}] : a ? [{
					clipPath: "inset(0 7% 0 0)",
					filter: "blur(3px)",
					opacity: .55
				}, {
					clipPath: "inset(0)",
					filter: "blur(0)",
					opacity: 1
				}] : [{
					clipPath: "inset(0 5% 0 0)",
					opacity: .52
				}, {
					clipPath: "inset(0)",
					opacity: 1
				}], l = t.animate(c, {
					duration: s ? 850 : 650,
					easing: "cubic-bezier(.16,1,.3,1)"
				});
				t.dataset.revealState = "running", e.set(t, l), l.onfinish = () => n(t);
			}
		}, {
			threshold: .07,
			rootMargin: "0px 0px -3% 0px"
		});
		document.querySelectorAll(t).forEach((e) => {
			o.current.has(e) || r.observe(e);
		});
		let i = (t) => {
			let r = t.target;
			if (r instanceof Node) for (let t of e.keys()) t.contains(r) && n(t);
		};
		return document.addEventListener("focusin", i), document.addEventListener("pointerdown", i, { passive: !0 }), () => {
			r.disconnect(), e.forEach((e, t) => n(t)), document.removeEventListener("focusin", i), document.removeEventListener("pointerdown", i);
		};
	}, [s]), (0, j.useEffect)(() => {
		if (!s || !matchMedia("(pointer: fine)").matches) return;
		let e = null, t = 0, n = 0, r = 0, i = () => {
			e?.removeAttribute("data-signal-hover"), e = null;
		}, a = () => {
			if (t = 0, !e) return;
			let i = e.getBoundingClientRect();
			e.style.setProperty("--signal-x", `${n - i.left}px`), e.style.setProperty("--signal-y", `${r - i.top}px`), e.dataset.signalHover = "true";
		}, o = (o) => {
			if (o.pointerType !== "mouse") return;
			let s = o.target?.closest(".contact-methods>div,.contact-footer") ?? null;
			s !== e && (i(), e = s), n = o.clientX, r = o.clientY, e && !t && (t = requestAnimationFrame(a));
		};
		return document.addEventListener("pointermove", o, { passive: !0 }), document.addEventListener("pointerleave", i), () => {
			cancelAnimationFrame(t), i(), document.removeEventListener("pointermove", o), document.removeEventListener("pointerleave", i);
		};
	}, [s]), null;
}
//#endregion
//#region src/new-site/vendor/splash-cursor.js
function ds(e, t = {}) {
	let n = null, r = {
		Texture: /* @__PURE__ */ new Set(),
		Framebuffer: /* @__PURE__ */ new Set(),
		Buffer: /* @__PURE__ */ new Set(),
		Shader: /* @__PURE__ */ new Set(),
		Program: /* @__PURE__ */ new Set()
	}, i = !0, a = 0, o = 0, s = 0, c = !0, l = !1, u = {
		SIM_RESOLUTION: 96,
		DYE_RESOLUTION: 512,
		DENSITY_DISSIPATION: 3.5,
		VELOCITY_DISSIPATION: 2,
		PRESSURE: .1,
		PRESSURE_ITERATIONS: 12,
		CURL: 3,
		SPLAT_RADIUS: .32,
		SPLAT_FORCE: 4300,
		SHADING: !0,
		RAINBOW_MODE: !1,
		COLOR: t.color || "#93cfff"
	}, d = [{
		texcoordX: 0,
		texcoordY: 0,
		prevTexcoordX: 0,
		prevTexcoordY: 0,
		deltaX: 0,
		deltaY: 0,
		moved: !1,
		down: !1,
		color: {
			r: 0,
			g: 0,
			b: 0
		}
	}];
	function f(e, t) {
		if (!t) throw Error("WebGL allocation failed");
		return r[e].add(t), t;
	}
	function p(e, t) {
		t && r[e].delete(t) && n?.["delete" + e](t);
	}
	function m(e) {
		e && (p("Texture", e.texture), p("Framebuffer", e.fbo));
	}
	function h() {
		i = !1, cancelAnimationFrame(a), window.removeEventListener("pointermove", x), window.removeEventListener("resize", _), window.removeEventListener("blur", v), e.removeEventListener("webglcontextlost", g);
		for (let e of Object.keys(r)) for (let t of Array.from(r[e])) p(e, t);
		e.dataset.rendering = "off", n && !n.isContextLost() && n.getExtension("WEBGL_lose_context")?.loseContext();
	}
	function g() {
		h(), e.dataset.rendering = "fallback", t.onError?.();
	}
	function _() {
		l = !0, c = !0, b();
	}
	function v() {
		c = !0;
	}
	function y() {
		let t = Math.min(1, 1800 / Math.max(1, e.clientWidth, e.clientHeight)), n = Math.max(1, Math.round(e.clientWidth * t)), r = Math.max(1, Math.round(e.clientHeight * t));
		return e.width === n && e.height === r ? !1 : (e.width = n, e.height = r, !0);
	}
	let b = () => {}, x = () => {};
	try {
		y();
		let { gl: t, ext: r } = S(e);
		r.supportLinearFiltering || (u.DYE_RESOLUTION = 256, u.SHADING = !1);
		function S(e) {
			let t = {
				alpha: !0,
				depth: !1,
				stencil: !1,
				antialias: !1,
				preserveDrawingBuffer: !1
			}, r = e.getContext("webgl2", t), i = !!r;
			if (i || (r = e.getContext("webgl", t) || e.getContext("experimental-webgl", t)), !r) throw Error("WebGL unavailable");
			n = r;
			let a, o;
			i ? (r.getExtension("EXT_color_buffer_float"), o = r.getExtension("OES_texture_float_linear")) : (a = r.getExtension("OES_texture_half_float"), o = r.getExtension("OES_texture_half_float_linear")), r.clearColor(0, 0, 0, 0);
			let s = i ? r.HALF_FLOAT : a && a.HALF_FLOAT_OES;
			if (!s) throw Error("Half float textures unavailable");
			let c, l, u;
			if (i ? (c = C(r, r.RGBA16F, r.RGBA, s), l = C(r, r.RG16F, r.RG, s), u = C(r, r.R16F, r.RED, s)) : (c = C(r, r.RGBA, r.RGBA, s), l = C(r, r.RGBA, r.RGBA, s), u = C(r, r.RGBA, r.RGBA, s)), !c || !l || !u) throw Error("Renderable float textures unavailable");
			return {
				gl: r,
				ext: {
					formatRGBA: c,
					formatRG: l,
					formatR: u,
					halfFloatTexType: s,
					supportLinearFiltering: o
				}
			};
		}
		function C(e, t, n, r) {
			if (!w(e, t, n, r)) switch (t) {
				case e.R16F: return C(e, e.RG16F, e.RG, r);
				case e.RG16F: return C(e, e.RGBA16F, e.RGBA, r);
				default: return null;
			}
			return {
				internalFormat: t,
				format: n
			};
		}
		function w(e, t, n, r) {
			let i = f("Texture", e.createTexture());
			e.bindTexture(e.TEXTURE_2D, i), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.NEAREST), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.texImage2D(e.TEXTURE_2D, 0, t, 4, 4, 0, n, r, null);
			let a = f("Framebuffer", e.createFramebuffer());
			e.bindFramebuffer(e.FRAMEBUFFER, a), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, i, 0);
			let o = e.checkFramebufferStatus(e.FRAMEBUFFER);
			return p("Texture", i), p("Framebuffer", a), o === e.FRAMEBUFFER_COMPLETE;
		}
		class T {
			constructor(e, t) {
				this.vertexShader = e, this.fragmentShaderSource = t, this.programs = [], this.activeProgram = null, this.uniforms = [];
			}
			setKeywords(e) {
				let n = 0;
				for (let t = 0; t < e.length; t++) n += Le(e[t]);
				let r = this.programs[n];
				if (r == null) {
					let i = k(t.FRAGMENT_SHADER, this.fragmentShaderSource, e);
					r = D(this.vertexShader, i), this.programs[n] = r;
				}
				r !== this.activeProgram && (this.uniforms = O(r), this.activeProgram = r);
			}
			bind() {
				t.useProgram(this.activeProgram);
			}
		}
		class E {
			constructor(e, t) {
				this.uniforms = {}, this.program = D(e, t), this.uniforms = O(this.program);
			}
			bind() {
				t.useProgram(this.program);
			}
		}
		function D(e, n) {
			let r = f("Program", t.createProgram());
			if (t.attachShader(r, e), t.attachShader(r, n), t.linkProgram(r), !t.getProgramParameter(r, t.LINK_STATUS)) throw Error(t.getProgramInfoLog(r) || "Shader link failed");
			return r;
		}
		function O(e) {
			let n = [], r = t.getProgramParameter(e, t.ACTIVE_UNIFORMS);
			for (let i = 0; i < r; i++) {
				let r = t.getActiveUniform(e, i).name;
				n[r] = t.getUniformLocation(e, r);
			}
			return n;
		}
		function k(e, n, r) {
			n = A(n, r);
			let i = f("Shader", t.createShader(e));
			if (t.shaderSource(i, n), t.compileShader(i), !t.getShaderParameter(i, t.COMPILE_STATUS)) throw Error(t.getShaderInfoLog(i) || "Shader compile failed");
			return i;
		}
		function A(e, t) {
			if (!t) return e;
			let n = "";
			return t.forEach((e) => {
				n += "#define " + e + "\n";
			}), n + e;
		}
		let j = k(t.VERTEX_SHADER, "\n        precision highp float;\n        attribute vec2 aPosition;\n        varying vec2 vUv;\n        varying vec2 vL;\n        varying vec2 vR;\n        varying vec2 vT;\n        varying vec2 vB;\n        uniform vec2 texelSize;\n\n        void main () {\n            vUv = aPosition * 0.5 + 0.5;\n            vL = vUv - vec2(texelSize.x, 0.0);\n            vR = vUv + vec2(texelSize.x, 0.0);\n            vT = vUv + vec2(0.0, texelSize.y);\n            vB = vUv - vec2(0.0, texelSize.y);\n            gl_Position = vec4(aPosition, 0.0, 1.0);\n        }\n      "), M = k(t.FRAGMENT_SHADER, "\n        precision mediump float;\n        precision mediump sampler2D;\n        varying highp vec2 vUv;\n        uniform sampler2D uTexture;\n\n        void main () {\n            gl_FragColor = texture2D(uTexture, vUv);\n        }\n      "), N = k(t.FRAGMENT_SHADER, "\n        precision mediump float;\n        precision mediump sampler2D;\n        varying highp vec2 vUv;\n        uniform sampler2D uTexture;\n        uniform float value;\n\n        void main () {\n            gl_FragColor = value * texture2D(uTexture, vUv);\n        }\n      "), P = k(t.FRAGMENT_SHADER, "\n        precision highp float;\n        precision highp sampler2D;\n        varying vec2 vUv;\n        uniform sampler2D uTarget;\n        uniform float aspectRatio;\n        uniform vec3 color;\n        uniform vec2 point;\n        uniform float radius;\n\n        void main () {\n            vec2 p = vUv - point.xy;\n            p.x *= aspectRatio;\n            vec3 splat = exp(-dot(p, p) / radius) * color;\n            vec3 base = texture2D(uTarget, vUv).xyz;\n            gl_FragColor = vec4(base + splat, 1.0);\n        }\n      "), ee = k(t.FRAGMENT_SHADER, "\n        precision highp float;\n        precision highp sampler2D;\n        varying vec2 vUv;\n        uniform sampler2D uVelocity;\n        uniform sampler2D uSource;\n        uniform vec2 texelSize;\n        uniform vec2 dyeTexelSize;\n        uniform float dt;\n        uniform float dissipation;\n\n        vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {\n            vec2 st = uv / tsize - 0.5;\n            vec2 iuv = floor(st);\n            vec2 fuv = fract(st);\n\n            vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);\n            vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);\n            vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);\n            vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);\n\n            return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);\n        }\n\n        void main () {\n            #ifdef MANUAL_FILTERING\n                vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;\n                vec4 result = bilerp(uSource, coord, dyeTexelSize);\n            #else\n                vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;\n                vec4 result = texture2D(uSource, coord);\n            #endif\n            float decay = 1.0 + dissipation * dt;\n            gl_FragColor = result / decay;\n        }\n      ", r.supportLinearFiltering ? null : ["MANUAL_FILTERING"]), F = k(t.FRAGMENT_SHADER, "\n        precision mediump float;\n        precision mediump sampler2D;\n        varying highp vec2 vUv;\n        varying highp vec2 vL;\n        varying highp vec2 vR;\n        varying highp vec2 vT;\n        varying highp vec2 vB;\n        uniform sampler2D uVelocity;\n\n        void main () {\n            float L = texture2D(uVelocity, vL).x;\n            float R = texture2D(uVelocity, vR).x;\n            float T = texture2D(uVelocity, vT).y;\n            float B = texture2D(uVelocity, vB).y;\n\n            vec2 C = texture2D(uVelocity, vUv).xy;\n            if (vL.x < 0.0) { L = -C.x; }\n            if (vR.x > 1.0) { R = -C.x; }\n            if (vT.y > 1.0) { T = -C.y; }\n            if (vB.y < 0.0) { B = -C.y; }\n\n            float div = 0.5 * (R - L + T - B);\n            gl_FragColor = vec4(div, 0.0, 0.0, 1.0);\n        }\n      "), I = k(t.FRAGMENT_SHADER, "\n        precision mediump float;\n        precision mediump sampler2D;\n        varying highp vec2 vUv;\n        varying highp vec2 vL;\n        varying highp vec2 vR;\n        varying highp vec2 vT;\n        varying highp vec2 vB;\n        uniform sampler2D uVelocity;\n\n        void main () {\n            float L = texture2D(uVelocity, vL).y;\n            float R = texture2D(uVelocity, vR).y;\n            float T = texture2D(uVelocity, vT).x;\n            float B = texture2D(uVelocity, vB).x;\n            float vorticity = R - L - T + B;\n            gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);\n        }\n      "), te = k(t.FRAGMENT_SHADER, "\n        precision highp float;\n        precision highp sampler2D;\n        varying vec2 vUv;\n        varying vec2 vL;\n        varying vec2 vR;\n        varying vec2 vT;\n        varying vec2 vB;\n        uniform sampler2D uVelocity;\n        uniform sampler2D uCurl;\n        uniform float curl;\n        uniform float dt;\n\n        void main () {\n            float L = texture2D(uCurl, vL).x;\n            float R = texture2D(uCurl, vR).x;\n            float T = texture2D(uCurl, vT).x;\n            float B = texture2D(uCurl, vB).x;\n            float C = texture2D(uCurl, vUv).x;\n\n            vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));\n            force /= length(force) + 0.0001;\n            force *= curl * C;\n            force.y *= -1.0;\n\n            vec2 velocity = texture2D(uVelocity, vUv).xy;\n            velocity += force * dt;\n            velocity = min(max(velocity, -1000.0), 1000.0);\n            gl_FragColor = vec4(velocity, 0.0, 1.0);\n        }\n      "), L = k(t.FRAGMENT_SHADER, "\n        precision mediump float;\n        precision mediump sampler2D;\n        varying highp vec2 vUv;\n        varying highp vec2 vL;\n        varying highp vec2 vR;\n        varying highp vec2 vT;\n        varying highp vec2 vB;\n        uniform sampler2D uPressure;\n        uniform sampler2D uDivergence;\n\n        void main () {\n            float L = texture2D(uPressure, vL).x;\n            float R = texture2D(uPressure, vR).x;\n            float T = texture2D(uPressure, vT).x;\n            float B = texture2D(uPressure, vB).x;\n            float C = texture2D(uPressure, vUv).x;\n            float divergence = texture2D(uDivergence, vUv).x;\n            float pressure = (L + R + B + T - divergence) * 0.25;\n            gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);\n        }\n      "), ne = k(t.FRAGMENT_SHADER, "\n        precision mediump float;\n        precision mediump sampler2D;\n        varying highp vec2 vUv;\n        varying highp vec2 vL;\n        varying highp vec2 vR;\n        varying highp vec2 vT;\n        varying highp vec2 vB;\n        uniform sampler2D uPressure;\n        uniform sampler2D uVelocity;\n\n        void main () {\n            float L = texture2D(uPressure, vL).x;\n            float R = texture2D(uPressure, vR).x;\n            float T = texture2D(uPressure, vT).x;\n            float B = texture2D(uPressure, vB).x;\n            vec2 velocity = texture2D(uVelocity, vUv).xy;\n            velocity.xy -= vec2(R - L, T - B);\n            gl_FragColor = vec4(velocity, 0.0, 1.0);\n        }\n      "), R = (t.bindBuffer(t.ARRAY_BUFFER, f("Buffer", t.createBuffer())), t.bufferData(t.ARRAY_BUFFER, new Float32Array([
			-1,
			-1,
			-1,
			1,
			1,
			1,
			1,
			-1
		]), t.STATIC_DRAW), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, f("Buffer", t.createBuffer())), t.bufferData(t.ELEMENT_ARRAY_BUFFER, new Uint16Array([
			0,
			1,
			2,
			0,
			2,
			3
		]), t.STATIC_DRAW), t.vertexAttribPointer(0, 2, t.FLOAT, !1, 0, 0), t.enableVertexAttribArray(0), (e, n = !1) => {
			e == null ? (t.viewport(0, 0, t.drawingBufferWidth, t.drawingBufferHeight), t.bindFramebuffer(t.FRAMEBUFFER, null)) : (t.viewport(0, 0, e.width, e.height), t.bindFramebuffer(t.FRAMEBUFFER, e.fbo)), n && (t.clearColor(0, 0, 0, 0), t.clear(t.COLOR_BUFFER_BIT)), t.drawElements(t.TRIANGLES, 6, t.UNSIGNED_SHORT, 0);
		}), z, B, re, ie, ae, oe = new E(j, M), se = new E(j, N), ce = new E(j, P), le = new E(j, ee), ue = new E(j, F), de = new E(j, I), fe = new E(j, te), pe = new E(j, L), V = new E(j, ne), me = new T(j, "\n      precision highp float;\n      precision highp sampler2D;\n      varying vec2 vUv;\n      varying vec2 vL;\n      varying vec2 vR;\n      varying vec2 vT;\n      varying vec2 vB;\n      uniform sampler2D uTexture;\n      uniform sampler2D uDithering;\n      uniform vec2 ditherScale;\n      uniform vec2 texelSize;\n\n      vec3 linearToGamma (vec3 color) {\n          color = max(color, vec3(0));\n          return max(1.055 * pow(color, vec3(0.416666667)) - 0.055, vec3(0));\n      }\n\n      void main () {\n          vec3 c = texture2D(uTexture, vUv).rgb;\n          #ifdef SHADING\n              vec3 lc = texture2D(uTexture, vL).rgb;\n              vec3 rc = texture2D(uTexture, vR).rgb;\n              vec3 tc = texture2D(uTexture, vT).rgb;\n              vec3 bc = texture2D(uTexture, vB).rgb;\n\n              float dx = length(rc) - length(lc);\n              float dy = length(tc) - length(bc);\n\n              vec3 n = normalize(vec3(dx, dy, length(texelSize)));\n              vec3 l = vec3(0.0, 0.0, 1.0);\n\n              float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);\n              c *= diffuse;\n          #endif\n\n          c = (vec3(1.0) - exp(-max(c, vec3(0.0)) * 1.6)) * 0.72;\n          float a = max(c.r, max(c.g, c.b));\n          gl_FragColor = vec4(c, a);\n      }\n    ");
		function he() {
			let e = Fe(u.SIM_RESOLUTION), n = Fe(u.DYE_RESOLUTION), i = r.halfFloatTexType, a = r.formatRGBA, o = r.formatRG, s = r.formatR, c = r.supportLinearFiltering ? t.LINEAR : t.NEAREST;
			t.disable(t.BLEND), z = z ? ye(z, n.width, n.height, a.internalFormat, a.format, i, c) : _e(n.width, n.height, a.internalFormat, a.format, i, c), B = B ? ye(B, e.width, e.height, o.internalFormat, o.format, i, c) : _e(e.width, e.height, o.internalFormat, o.format, i, c), m(re), m(ie), ae && (m(ae.read), m(ae.write)), re = ge(e.width, e.height, s.internalFormat, s.format, i, t.NEAREST), ie = ge(e.width, e.height, s.internalFormat, s.format, i, t.NEAREST), ae = _e(e.width, e.height, s.internalFormat, s.format, i, t.NEAREST);
		}
		function ge(e, n, r, i, a, o) {
			t.activeTexture(t.TEXTURE0);
			let s = f("Texture", t.createTexture());
			t.bindTexture(t.TEXTURE_2D, s), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, o), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, o), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), t.texImage2D(t.TEXTURE_2D, 0, r, e, n, 0, i, a, null);
			let c = f("Framebuffer", t.createFramebuffer());
			return t.bindFramebuffer(t.FRAMEBUFFER, c), t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, s, 0), t.viewport(0, 0, e, n), t.clear(t.COLOR_BUFFER_BIT), {
				texture: s,
				fbo: c,
				width: e,
				height: n,
				texelSizeX: 1 / e,
				texelSizeY: 1 / n,
				attach(e) {
					return t.activeTexture(t.TEXTURE0 + e), t.bindTexture(t.TEXTURE_2D, s), e;
				}
			};
		}
		function _e(e, t, n, r, i, a) {
			let o = ge(e, t, n, r, i, a), s = ge(e, t, n, r, i, a);
			return {
				width: e,
				height: t,
				texelSizeX: o.texelSizeX,
				texelSizeY: o.texelSizeY,
				get read() {
					return o;
				},
				set read(e) {
					o = e;
				},
				get write() {
					return s;
				},
				set write(e) {
					s = e;
				},
				swap() {
					let e = o;
					o = s, s = e;
				}
			};
		}
		function ve(e, n, r, i, a, o, s) {
			let c = ge(n, r, i, a, o, s);
			return oe.bind(), t.uniform1i(oe.uniforms.uTexture, e.attach(0)), R(c), m(e), c;
		}
		function ye(e, t, n, r, i, a, o) {
			return e.width === t && e.height === n ? e : (e.read = ve(e.read, t, n, r, i, a, o), m(e.write), e.write = ge(t, n, r, i, a, o), e.width = t, e.height = n, e.texelSizeX = 1 / t, e.texelSizeY = 1 / n, e);
		}
		function be() {
			let e = [];
			u.SHADING && e.push("SHADING"), me.setKeywords(e);
		}
		function xe() {
			d.forEach((e) => {
				e.moved && (e.moved = !1, Te(e));
			});
		}
		function Se(e) {
			t.disable(t.BLEND), de.bind(), t.uniform2f(de.uniforms.texelSize, B.texelSizeX, B.texelSizeY), t.uniform1i(de.uniforms.uVelocity, B.read.attach(0)), R(ie), fe.bind(), t.uniform2f(fe.uniforms.texelSize, B.texelSizeX, B.texelSizeY), t.uniform1i(fe.uniforms.uVelocity, B.read.attach(0)), t.uniform1i(fe.uniforms.uCurl, ie.attach(1)), t.uniform1f(fe.uniforms.curl, u.CURL), t.uniform1f(fe.uniforms.dt, e), R(B.write), B.swap(), ue.bind(), t.uniform2f(ue.uniforms.texelSize, B.texelSizeX, B.texelSizeY), t.uniform1i(ue.uniforms.uVelocity, B.read.attach(0)), R(re), se.bind(), t.uniform1i(se.uniforms.uTexture, ae.read.attach(0)), t.uniform1f(se.uniforms.value, u.PRESSURE), R(ae.write), ae.swap(), pe.bind(), t.uniform2f(pe.uniforms.texelSize, B.texelSizeX, B.texelSizeY), t.uniform1i(pe.uniforms.uDivergence, re.attach(0));
			for (let e = 0; e < u.PRESSURE_ITERATIONS; e++) t.uniform1i(pe.uniforms.uPressure, ae.read.attach(1)), R(ae.write), ae.swap();
			V.bind(), t.uniform2f(V.uniforms.texelSize, B.texelSizeX, B.texelSizeY), t.uniform1i(V.uniforms.uPressure, ae.read.attach(0)), t.uniform1i(V.uniforms.uVelocity, B.read.attach(1)), R(B.write), B.swap(), le.bind(), t.uniform2f(le.uniforms.texelSize, B.texelSizeX, B.texelSizeY), r.supportLinearFiltering || t.uniform2f(le.uniforms.dyeTexelSize, B.texelSizeX, B.texelSizeY);
			let n = B.read.attach(0);
			t.uniform1i(le.uniforms.uVelocity, n), t.uniform1i(le.uniforms.uSource, n), t.uniform1f(le.uniforms.dt, e), t.uniform1f(le.uniforms.dissipation, u.VELOCITY_DISSIPATION), R(B.write), B.swap(), r.supportLinearFiltering || t.uniform2f(le.uniforms.dyeTexelSize, z.texelSizeX, z.texelSizeY), t.uniform1i(le.uniforms.uVelocity, B.read.attach(0)), t.uniform1i(le.uniforms.uSource, z.read.attach(1)), t.uniform1f(le.uniforms.dissipation, u.DENSITY_DISSIPATION), R(z.write), z.swap();
		}
		function Ce(e) {
			t.bindFramebuffer(t.FRAMEBUFFER, null), t.clearColor(0, 0, 0, 0), t.clear(t.COLOR_BUFFER_BIT), t.blendFunc(t.ONE, t.ONE_MINUS_SRC_ALPHA), t.enable(t.BLEND), we(e);
		}
		function we(e) {
			let n = e == null ? t.drawingBufferWidth : e.width, r = e == null ? t.drawingBufferHeight : e.height;
			me.bind(), u.SHADING && t.uniform2f(me.uniforms.texelSize, 1 / n, 1 / r), t.uniform1i(me.uniforms.uTexture, z.read.attach(0)), R(e);
		}
		function Te(e) {
			let t = e.deltaX * u.SPLAT_FORCE, n = e.deltaY * u.SPLAT_FORCE;
			Ee(e.texcoordX, e.texcoordY, t, n, e.color);
		}
		function Ee(n, r, i, a, o) {
			ce.bind(), t.uniform1i(ce.uniforms.uTarget, B.read.attach(0)), t.uniform1f(ce.uniforms.aspectRatio, e.width / e.height), t.uniform2f(ce.uniforms.point, n, r), t.uniform3f(ce.uniforms.color, i, a, 0), t.uniform1f(ce.uniforms.radius, De(u.SPLAT_RADIUS / 100)), R(B.write), B.swap(), t.uniform1i(ce.uniforms.uTarget, z.read.attach(0)), t.uniform3f(ce.uniforms.color, o.r, o.g, o.b), R(z.write), z.swap();
		}
		function De(t) {
			let n = e.width / e.height;
			return n > 1 && (t *= n), t;
		}
		function Oe(t, n, r, i) {
			t.id = n, t.down = !0, t.moved = !1, t.texcoordX = r / e.width, t.texcoordY = 1 - i / e.height, t.prevTexcoordX = t.texcoordX, t.prevTexcoordY = t.texcoordY, t.deltaX = 0, t.deltaY = 0, t.color = Ne();
		}
		function ke(t, n, r, i) {
			t.prevTexcoordX = t.texcoordX, t.prevTexcoordY = t.texcoordY, t.texcoordX = n / e.width, t.texcoordY = 1 - r / e.height, t.deltaX = Ae(t.texcoordX - t.prevTexcoordX), t.deltaY = je(t.texcoordY - t.prevTexcoordY), t.moved = Math.abs(t.deltaX) > 0 || Math.abs(t.deltaY) > 0, t.color = i;
		}
		function Ae(t) {
			let n = e.width / e.height;
			return n < 1 && (t *= n), t;
		}
		function je(t) {
			let n = e.width / e.height;
			return n > 1 && (t /= n), t;
		}
		function Me(e) {
			let t = e.replace("#", "");
			t.length === 3 && (t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]);
			let n = parseInt(t.slice(0, 2), 16) / 255, r = parseInt(t.slice(2, 4), 16) / 255, i = parseInt(t.slice(4, 6), 16) / 255;
			return {
				r: n * .48,
				g: r * .48,
				b: i * .48
			};
		}
		function Ne() {
			if (!u.RAINBOW_MODE) return Me(u.COLOR);
			let e = Pe(Math.random(), 1, 1);
			return e.r *= .15, e.g *= .15, e.b *= .15, e;
		}
		function Pe(e, t, n) {
			let r, i, a, o, s, c, l, u;
			switch (o = Math.floor(e * 6), s = e * 6 - o, c = n * (1 - t), l = n * (1 - s * t), u = n * (1 - (1 - s) * t), o % 6) {
				case 0:
					r = n, i = u, a = c;
					break;
				case 1:
					r = l, i = n, a = c;
					break;
				case 2:
					r = c, i = n, a = u;
					break;
				case 3:
					r = c, i = l, a = n;
					break;
				case 4:
					r = u, i = c, a = n;
					break;
				case 5: r = n, i = c, a = l;
			}
			return {
				r,
				g: i,
				b: a
			};
		}
		function Fe(e) {
			let n = t.drawingBufferWidth / t.drawingBufferHeight;
			n < 1 && (n = 1 / n);
			let r = Math.round(e), i = Math.round(e * n);
			return t.drawingBufferWidth > t.drawingBufferHeight ? {
				width: i,
				height: r
			} : {
				width: r,
				height: i
			};
		}
		function Ie(t) {
			let n = e.width / Math.max(1, e.clientWidth);
			return Math.floor(t * n);
		}
		function Le(e) {
			if (e.length === 0) return 0;
			let t = 0;
			for (let n = 0; n < e.length; n++) t = (t << 5) - t + e.charCodeAt(n), t |= 0;
			return t;
		}
		function Re(n) {
			if (a = 0, i && !t.isContextLost()) {
				if (n - s > 1500) {
					t.bindFramebuffer(t.FRAMEBUFFER, null), t.clearColor(0, 0, 0, 0), t.clear(t.COLOR_BUFFER_BIT), e.dataset.rendering = "idle";
					return;
				}
				if (n - o >= 1e3 / 30 - .5) {
					let t = Math.min((n - o) / 1e3, 1 / 30);
					o = n, l && (l = !1, y() && he()), xe(), Se(t), Ce(null), e.dataset.rendering = "running";
				}
				a = requestAnimationFrame(Re);
			}
		}
		return b = () => {
			i && (s = performance.now(), a ||= (o = s - 34, requestAnimationFrame(Re)));
		}, x = (e) => {
			if (e.pointerType !== "mouse" || !i) return;
			if (e.target instanceof Element && e.target.closest("video,audio,iframe,object,embed,input,textarea,select,[contenteditable=\"true\"],[data-no-splash],.project-reader,.project-depth-carousel,.album-dialog")) {
				c = !0;
				return;
			}
			let t = Ie(e.clientX), n = Ie(e.clientY), r = d[0];
			c ? (Oe(r, -1, t, n), c = !1) : (ke(r, t, n, Ne()), r.deltaX = Math.max(-.035, Math.min(.035, r.deltaX)), r.deltaY = Math.max(-.035, Math.min(.035, r.deltaY))), b();
		}, be(), he(), t.bindFramebuffer(t.FRAMEBUFFER, null), t.clearColor(0, 0, 0, 0), t.clear(t.COLOR_BUFFER_BIT), e.dataset.rendering = "idle", window.addEventListener("pointermove", x, { passive: !0 }), window.addEventListener("resize", _, { passive: !0 }), window.addEventListener("blur", v, { passive: !0 }), e.addEventListener("webglcontextlost", g, { passive: !0 }), {
			dispose: h,
			setColor(e) {
				u.COLOR = e;
			}
		};
	} catch {
		return h(), e.dataset.rendering = "fallback", null;
	}
}
//#endregion
//#region src/new-site/SplashCursor.tsx
var fs = {
	intro: "#9bc9e9",
	home: "#a8c9f3",
	directory: "#b7afe9",
	experience: "#aebcdf",
	projects: "#9ddde1",
	life: "#e8c591",
	contact: "#c2bbe8"
}, ps = "(hover: hover) and (pointer: fine)";
function ms() {
	let { motion: e, visible: t, active: r, profile: i } = n(), a = d(), o = (0, j.useRef)(null), s = (0, j.useRef)(null), [c, l] = (0, j.useState)(() => window.matchMedia(ps).matches), [u, f] = (0, j.useState)(!1), p = fs[r] || fs.home, m = (0, j.useRef)(p);
	m.current = p;
	let h = e && t && c && !i && !a && !u;
	return (0, j.useEffect)(() => {
		let e = window.matchMedia(ps), t = () => l(e.matches);
		return e.addEventListener("change", t), () => e.removeEventListener("change", t);
	}, []), (0, j.useEffect)(() => {
		if (!h || !o.current) return;
		let e = ds(o.current, {
			color: m.current,
			onError: () => f(!0)
		});
		if (!e) {
			f(!0);
			return;
		}
		return s.current = e, () => {
			e.dispose(), s.current = null;
		};
	}, [h]), (0, j.useEffect)(() => {
		s.current?.setColor(p);
	}, [p]), /* @__PURE__ */ (0, V.jsx)("div", {
		className: "jg-splash-cursor",
		"aria-hidden": "true",
		"data-splash-chapter": r,
		"data-rendering": u ? "fallback" : h ? "ready" : "off",
		children: h && /* @__PURE__ */ (0, V.jsx)("canvas", {
			ref: o,
			"data-rendering": "starting"
		})
	});
}
//#endregion
//#region src/new-site/LiquidChrome.tsx
var hs = "\nattribute vec2 position;\nvarying vec2 vUv;\nvoid main(){vUv=position*.5+.5;gl_Position=vec4(position,0.,1.);}\n", gs = "\nprecision highp float;\nuniform vec2 uResolution;\nuniform float uTime;\nuniform float uMobile;\nvarying vec2 vUv;\n\nvec3 chrome(vec2 uvCoord){\n  vec2 uv=(2.*uvCoord*uResolution-uResolution)/min(uResolution.x,uResolution.y);\n  for(int layer=1;layer<10;layer++){\n    float i=float(layer);\n    uv.x+=.3/i*cos(i*3.*uv.y+uTime);\n    uv.y+=.3/i*cos(i*3.*uv.x+uTime);\n  }\n  // Same reflection function as the supplied source, without a cursor ripple.\n  float reflection=max(abs(sin(uTime-uv.y-uv.x)),.025);\n  vec3 raw=vec3(.095,.103,.109)/reflection;\n  vec3 silver=raw/(raw+vec3(.46));\n  // Charcoal shadows, cool-neutral silver, with a very slight warm reflection.\n  float warm=.5+.5*sin(uv.x*.7+uv.y*.5+uTime*.4);\n  vec3 tint=mix(vec3(.96,1.,1.035),vec3(1.045,1.01,.945),warm);\n  return vec3(.013,.020,.025)+silver*tint*.35;\n}\n\nvoid main(){\n  vec3 col=chrome(vUv);\n  if(uMobile<.5){\n    vec2 offset=vec2(.44,-.44)/uResolution;\n    col=(col+chrome(vUv+offset))*.5;\n  }\n  float edge=smoothstep(.15,.85,length((vUv-.5)*vec2(.8,1.)));\n  col*=1.-edge*.22;\n  gl_FragColor=vec4(col,1.);\n}\n";
function _s() {
	let { motion: e, visible: t, active: r } = n(), i = d(), a = (0, j.useRef)(null), o = (0, j.useRef)(null), s = (0, j.useRef)(3.7), c = e && t && !i && r !== "intro";
	return (0, j.useEffect)(() => {
		let e = a.current, t = o.current;
		if (!e || !t || !c) return;
		let n = document.createElement("canvas");
		n.className = "jg-liquid-chrome__live", n.setAttribute("aria-hidden", "true");
		let r = n.getContext("webgl", {
			alpha: !1,
			depth: !1,
			stencil: !1,
			antialias: !1,
			powerPreference: "low-power",
			preserveDrawingBuffer: !1
		});
		if (!r) {
			e.dataset.rendering = "static";
			return;
		}
		let i;
		try {
			i = mo(r, hs, gs);
		} catch {
			ho(r), e.dataset.rendering = "static";
			return;
		}
		let l = r.createBuffer();
		if (!l) {
			r.deleteProgram(i), ho(r);
			return;
		}
		r.useProgram(i), r.bindBuffer(r.ARRAY_BUFFER, l), r.bufferData(r.ARRAY_BUFFER, new Float32Array([
			-1,
			-1,
			3,
			-1,
			-1,
			3
		]), r.STATIC_DRAW);
		let u = r.getAttribLocation(i, "position");
		r.enableVertexAttribArray(u), r.vertexAttribPointer(u, 2, r.FLOAT, !1, 0, 0);
		let d = r.getUniformLocation(i, "uResolution"), f = r.getUniformLocation(i, "uTime"), p = r.getUniformLocation(i, "uMobile"), m = !1, h = () => {
			m = matchMedia("(max-width: 700px), (pointer: coarse)").matches;
			let t = Math.max(1, e.clientWidth), i = Math.max(1, e.clientHeight), a = Math.min(1, (m ? 600 : 1e3) / Math.max(t, i));
			n.width = Math.max(1, Math.round(t * a)), n.height = Math.max(1, Math.round(i * a)), r.viewport(0, 0, n.width, n.height), r.uniform2f(d, n.width, n.height), r.uniform1f(p, +!!m), e.dataset.quality = m ? "mobile-16fps" : "desktop-24fps";
		};
		h(), e.appendChild(n);
		let g = new ResizeObserver(h);
		g.observe(e);
		let _ = 0, v = 0, y = 0, b = !1, x = !1, S = () => {
			r.uniform1f(f, s.current * .13), r.drawArrays(r.TRIANGLES, 0, 3);
		}, C = () => {
			let r = t.getContext("2d");
			r && !x && (S(), t.width = n.width, t.height = n.height, r.drawImage(n, 0, 0), e.dataset.snapshot = "true");
		}, w = (t) => {
			b || x || (_ = requestAnimationFrame(w), !(v && t - v < 1e3 / (m ? 16 : 24)) && (s.current += v ? Math.min((t - v) / 1e3, .12) : 0, v = t, S(), e.dataset.rendering = "webgl", t - y > 500 && (e.dataset.time = s.current.toFixed(2), y = t)));
		}, T = (t) => {
			t.preventDefault(), x = !0, cancelAnimationFrame(_), e.dataset.rendering = "static", n.style.visibility = "hidden";
		};
		return n.addEventListener("webglcontextlost", T), C(), _ = requestAnimationFrame(w), () => {
			b = !0, cancelAnimationFrame(_), g.disconnect(), C(), n.removeEventListener("webglcontextlost", T), e.dataset.rendering = "static", r.deleteBuffer(l), r.deleteProgram(i), ho(r), n.remove();
		};
	}, [c]), /* @__PURE__ */ (0, V.jsx)("div", {
		ref: a,
		className: "jg-liquid-chrome",
		"data-rendering": "static",
		"data-snapshot": "false",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, V.jsx)("canvas", {
			ref: o,
			className: "jg-liquid-chrome__still"
		})
	});
}
//#endregion
//#region src/new-site/yuanbao/YuanbaoPlayer.ts
var vs = [
	"sleep",
	"wake",
	"wave",
	"happy",
	"treat"
], ys = 96, bs = 12e3, xs = class {
	mount;
	base;
	preference;
	lifetime = new AbortController();
	poster = new Image();
	animation = new Image();
	video = document.createElement("video");
	blobs = /* @__PURE__ */ new Map();
	poses = {};
	masks = {};
	manifest;
	initializing;
	active;
	current;
	currentPose = "P";
	sequence = 0;
	motionEnabled = !0;
	reducedMotionOptIn = !1;
	destroyed = !1;
	initialized = !1;
	selectedBackend = "static";
	constructor(e, { baseUrl: t = "/assets/yuanbao/", backend: n = "auto" } = {}) {
		this.mount = e, this.base = new URL(t.endsWith("/") ? t : `${t}/`, document.baseURI), this.preference = n, this.video.muted = !0, this.video.playsInline = !0, this.video.preload = "auto";
		for (let e of [
			this.poster,
			this.video,
			this.animation
		]) e.className = "yuanbao-media", e.setAttribute("aria-hidden", "true");
		this.video.hidden = this.animation.hidden = !0, this.poster.src = this.url("sleeping.png"), this.mount.classList.add("yuanbao-player"), this.mount.setAttribute("role", "img"), this.mount.setAttribute("aria-label", "圆宝"), this.mount.replaceChildren(this.poster, this.video, this.animation), this.mount.dataset.pose = "P", this.notify("idle", { pose: "P" });
	}
	get backend() {
		return this.selectedBackend;
	}
	get ready() {
		return this.initialized && !this.destroyed;
	}
	url(e) {
		return new URL(e, this.base).href;
	}
	get shouldAnimate() {
		return this.motionEnabled && (this.reducedMotionOptIn || !window.matchMedia("(prefers-reduced-motion: reduce)").matches);
	}
	setMotion(e, t = !1) {
		this.motionEnabled = e, this.reducedMotionOptIn = t, this.ready && !this.shouldAnimate && this.showPose(this.current?.lastPose ?? this.currentPose);
	}
	init() {
		return this.initializing ||= this.initialize(), this.initializing;
	}
	async initialize() {
		try {
			let e = await this.request("manifest.json", (e) => e.json(), this.lifetime.signal);
			if (!e?.poses?.P || !e.poses.S || vs.some((t) => {
				let n = e.clips?.[t];
				return !n?.files?.webm || !n.files.webp || !Number.isFinite(n.durationMs) || n.durationMs <= 0 || n.durationMs > 6e4 || !["P", "S"].includes(n.firstPose) || !["P", "S"].includes(n.lastPose);
			})) throw Error("圆宝素材清单无效");
			return this.manifest = e, await Promise.all(["P", "S"].map(async (t) => {
				try {
					let n = await this.loadImage(this.url(e.poses[t]), this.lifetime.signal);
					this.poses[t] = n.src;
				} catch {
					this.poses[t] = this.url(e.poses[t]);
				}
				await this.loadMask(t);
			})), this.destroyed || (this.selectedBackend = this.preference === "webp" ? "webp" : await this.checkAlphaVideo(this.url(e.clips.sleep.files.webm)) ? "webm" : "webp", this.destroyed) ? this : (this.initialized = !0, this.showPose("P"), this);
		} catch (e) {
			if (this.destroyed) return this;
			throw this.notify("idle", { pose: "P" }), this.emit("yuanbao:error", { message: String(e) }), e;
		}
	}
	async request(e, t, n) {
		let r = new AbortController(), i = () => r.abort();
		n.aborted ? r.abort() : n.addEventListener("abort", i, { once: !0 });
		let a = window.setTimeout(i, bs);
		try {
			let n = await fetch(this.url(e), { signal: r.signal });
			if (!n.ok) throw Error(`圆宝素材加载失败 (${n.status})`);
			return await t(n);
		} finally {
			window.clearTimeout(a), n.removeEventListener("abort", i);
		}
	}
	loadImage(e, t) {
		return new Promise((n, r) => {
			let i = new Image();
			i.crossOrigin = "anonymous";
			let a = !1, o = (e) => {
				a || (a = !0, window.clearTimeout(c), t.removeEventListener("abort", s), i.onload = i.onerror = null, e ? (i.removeAttribute("src"), r(e)) : n(i));
			}, s = () => o(/* @__PURE__ */ Error("圆宝图片加载已取消")), c = window.setTimeout(() => o(/* @__PURE__ */ Error("圆宝图片加载超时")), bs);
			i.onload = () => o(), i.onerror = () => o(/* @__PURE__ */ Error("圆宝图片加载失败")), t.addEventListener("abort", s, { once: !0 }), t.aborted ? s() : i.src = e;
		});
	}
	async loadMask(e) {
		let t = this.manifest?.hitMasks?.[e]?.file;
		if (t && !this.destroyed) try {
			let n = await this.loadImage(this.url(t), this.lifetime.signal);
			if (this.destroyed) return;
			let r = document.createElement("canvas");
			r.width = r.height = ys;
			let i = r.getContext("2d", { willReadFrequently: !0 });
			if (!i) return;
			i.drawImage(n, 0, 0, ys, ys);
			let a = i.getImageData(0, 0, ys, ys).data, o = /* @__PURE__ */ new Uint8ClampedArray(9216);
			for (let e = 0; e < o.length; e++) o[e] = a[e * 4 + 3];
			let s = [], c = /* @__PURE__ */ new Map();
			for (let e = 0; e < ys; e++) {
				let t = /* @__PURE__ */ new Map();
				for (let n = 0; n < ys;) {
					if (o[e * ys + n] === 0) {
						n++;
						continue;
					}
					let r = n;
					for (; n < ys && o[e * ys + n] > 0;) n++;
					let i = n - r, a = `${r}:${i}`, l = c.get(a);
					if (l) l.height++, t.set(a, l);
					else {
						let n = {
							x: r,
							y: e,
							width: i,
							height: 1
						};
						s.push(n), t.set(a, n);
					}
				}
				c = t;
			}
			this.masks[e] = {
				alpha: o,
				regions: s
			};
		} catch {}
	}
	hitTest(e, t, n) {
		let r = this.masks[n];
		if (!r || !Number.isFinite(e) || !Number.isFinite(t) || e < 0 || t < 0 || e > 1 || t > 1) return !1;
		let i = Math.min(95, Math.floor(e * ys)), a = Math.min(95, Math.floor(t * ys));
		return r.alpha[a * ys + i] > 0;
	}
	hitRegions(e) {
		return this.masks[e]?.regions.map((e) => ({ ...e })) ?? [];
	}
	checkAlphaVideo(e) {
		return new Promise((t) => {
			let n = document.createElement("video");
			n.muted = !0, n.playsInline = !0, n.preload = "auto", n.crossOrigin = "anonymous";
			let r = !1, i = (e) => {
				r || (r = !0, window.clearTimeout(o), this.lifetime.signal.removeEventListener("abort", a), n.onloadeddata = n.onerror = null, n.pause(), n.removeAttribute("src"), n.load(), t(e));
			}, a = () => i(!1), o = window.setTimeout(a, 6e3);
			this.lifetime.signal.addEventListener("abort", a, { once: !0 }), n.onerror = a, n.onloadeddata = () => {
				try {
					let e = document.createElement("canvas");
					e.width = e.height = 32;
					let t = e.getContext("2d", { willReadFrequently: !0 });
					if (!t) {
						i(!1);
						return;
					}
					t.drawImage(n, 0, 0, 32, 32);
					let r = t.getImageData(0, 0, 32, 32).data, a = !1;
					for (let e = 3; e < r.length; e += 4) r[e] > 100 && (a = !0);
					let o = [
						3,
						127,
						3971,
						r.length - 1
					];
					i(a && o.every((e) => r[e] < 8));
				} catch {
					i(!1);
				}
			}, this.lifetime.signal.aborted ? a() : (n.src = e, n.load());
		});
	}
	emit(e, t) {
		this.destroyed || this.mount.dispatchEvent(new CustomEvent(e, { detail: t }));
	}
	notify(e, t = {}) {
		this.destroyed || (this.mount.dataset.state = e, this.mount.dataset.backend = this.backend, this.emit("yuanbao:state", {
			state: e,
			backend: this.backend,
			...t
		}));
	}
	displayPose(e) {
		this.currentPose = e, this.poster.src = this.poses[e] ?? this.url(e === "P" ? "sleeping.png" : "standing.png"), this.poster.hidden = !1, this.video.hidden = this.animation.hidden = !0, this.mount.dataset.pose = e, this.notify("idle", { pose: e });
	}
	settle(e, t) {
		e.settled || (e.settled = !0, e.resolve(t));
	}
	dispose(e) {
		e.controller.abort();
		for (let t of e.cleanups) t();
		e.cleanups.clear(), this.active === e && (this.active = void 0);
	}
	cancel() {
		if (!this.active) return;
		let e = this.active;
		this.dispose(e), this.settle(e, { cancelled: !0 });
	}
	showPose(e = "S") {
		this.destroyed || (this.sequence++, this.cancel(), this.current = void 0, this.displayPose(e));
	}
	play(e) {
		return this.sequence++, this.start(e);
	}
	async playEntrance() {
		let e = ++this.sequence, t = !1, n = !1;
		for (let r of ["wake", "wave"]) {
			let i = await this.start(r);
			if (e !== this.sequence || i.cancelled) return { cancelled: !0 };
			t ||= !!i.staticFallback, n ||= !!i.reducedMotion;
		}
		return {
			completed: !0,
			staticFallback: t,
			reducedMotion: n
		};
	}
	start(e) {
		if (this.destroyed) return Promise.resolve({ cancelled: !0 });
		let t = this.manifest?.clips[e];
		return !this.ready || !t ? Promise.reject(/* @__PURE__ */ Error("圆宝播放器尚未就绪")) : (this.cancel(), this.current = t, this.mount.dataset.clip = e, this.displayPose(t.firstPose), this.shouldAnimate ? (this.notify("loading", { key: e }), new Promise((n) => {
			let r = {
				controller: new AbortController(),
				cleanups: /* @__PURE__ */ new Set(),
				resolve: n,
				settled: !1
			};
			this.active = r;
			let i = () => this.active === r && !r.controller.signal.aborted && !this.destroyed, a = (e, t) => {
				let n = window.setTimeout(() => {
					i() && e();
				}, t);
				return r.cleanups.add(() => window.clearTimeout(n)), n;
			}, o = () => {
				this.video.onloadeddata = this.video.onended = this.video.onerror = null, this.video.onwaiting = this.video.onstalled = this.video.onplaying = null, this.video.pause(), this.video.removeAttribute("src"), this.video.load(), this.video.hidden = !0;
			};
			r.cleanups.add(o), r.cleanups.add(() => {
				this.animation.onload = this.animation.onerror = null, this.animation.removeAttribute("src"), this.animation.hidden = !0;
			});
			let s = (n = !1, a) => {
				i() && (this.dispose(r), n && (this.selectedBackend = "static"), this.displayPose(t.lastPose), this.settle(r, {
					completed: !0,
					...n ? { staticFallback: !0 } : {}
				}), this.emit(n ? "yuanbao:error" : "yuanbao:ended", {
					key: e,
					...a ? { message: String(a) } : {}
				}));
			}, c = !1, l = async () => {
				if (i() && !c) {
					c = !0, o(), this.selectedBackend = "webp", this.notify("loading", { key: e });
					try {
						let n = this.blobs.get(t.files.webp);
						if (!n) {
							if (n = await this.request(t.files.webp, (e) => e.blob(), r.controller.signal), !i()) return;
							this.blobs.set(t.files.webp, n);
						}
						if (!i()) return;
						let o = URL.createObjectURL(n);
						r.cleanups.add(() => URL.revokeObjectURL(o));
						let c = a(() => s(!0, "备用动画加载超时"), bs);
						this.animation.onload = () => {
							i() && (window.clearTimeout(c), this.animation.onload = null, this.poster.hidden = !0, this.animation.hidden = !1, this.notify("playing", { key: e }), t.loop ? this.settle(r, { looping: !0 }) : a(() => s(), t.durationMs));
						}, this.animation.onerror = () => s(!0, "备用动画加载失败"), this.animation.src = o;
					} catch (e) {
						i() && s(!0, e);
					}
				}
			};
			if (this.backend !== "webm") {
				l();
				return;
			}
			let u = () => {
				l();
			}, d = a(u, bs), f, p = !1, m = () => {
				window.clearTimeout(f), f = void 0;
			};
			this.video.onerror = u, this.video.onended = () => {
				c || s();
			}, this.video.onwaiting = this.video.onstalled = () => {
				p && !c && f === void 0 && (f = a(u, 8e3));
			}, this.video.onplaying = m, this.video.onloadeddata = async () => {
				if (i() && !c) {
					this.video.onloadeddata = null;
					try {
						if (await this.video.play(), !i() || c) return;
						window.clearTimeout(d), p = !0, this.poster.hidden = this.animation.hidden = !0, this.video.hidden = !1, this.notify("playing", { key: e }), t.loop ? this.settle(r, { looping: !0 }) : a(() => {
							c || u();
						}, t.durationMs + 8e3);
					} catch {
						i() && !c && u();
					}
				}
			}, this.video.loop = t.loop, this.video.src = this.url(t.files.webm), this.video.load();
		})) : (this.displayPose(t.lastPose), Promise.resolve({
			completed: !0,
			reducedMotion: !0
		})));
	}
	destroy() {
		this.destroyed || (this.destroyed = !0, this.initialized = !1, this.sequence++, this.cancel(), this.lifetime.abort(), this.video.pause(), this.video.removeAttribute("src"), this.video.load(), this.poster.removeAttribute("src"), this.animation.removeAttribute("src"), this.blobs.clear(), delete this.masks.P, delete this.masks.S, this.mount.replaceChildren());
	}
}, Ss = "jasong-yuanbao-position-v1", Cs = (e, t, n) => Math.max(t, Math.min(n, e));
function ws() {
	try {
		let e = JSON.parse(localStorage.getItem(Ss) || "null");
		return e && Number.isFinite(e.x) && Number.isFinite(e.y) ? {
			x: Cs(e.x, 0, 1),
			y: Cs(e.y, 0, 1)
		} : null;
	} catch {
		return null;
	}
}
function Ts(e, t) {
	let n = (0, j.useRef)(null), r = (0, j.useRef)(ws()), i = (0, j.useRef)(null), a = (0, j.useRef)(0), [o, s] = (0, j.useState)(null), [c, l] = (0, j.useState)(!1), [u, d] = (0, j.useState)(!!r.current), f = () => {
		let e = n.current?.getBoundingClientRect();
		if (!e?.width || !e.height) return null;
		let t = document.documentElement.clientWidth, r = window.innerHeight, i = Math.min(t <= 760 ? 380 : 490, t - (t <= 760 ? 24 : 36)), a = Math.max(0, (i - e.width) / 2), o = 12 + a, s = Math.max(o, t - e.width - 12 - a), c = Math.max(12, r - e.height - 12);
		return {
			box: e,
			width: t,
			height: r,
			cloudWidth: i,
			cloudOverhang: a,
			minX: o,
			maxX: s,
			minY: Math.min(80, c),
			maxY: c
		};
	}, p = (e, t, n = !1) => {
		let i = f();
		if (!i) return;
		e = Cs(e, i.minX, i.maxX), t = Cs(t, i.minY, i.maxY);
		let a = (i.box.width - i.cloudWidth) / 2, o = {
			left: e,
			top: t,
			cloudLeft: a,
			cloudWidth: i.cloudWidth,
			cloudBelow: t < 160 && i.height - t - i.box.height >= 78
		};
		s(o), n && (r.current = {
			x: (e - i.minX) / Math.max(1, i.maxX - i.minX),
			y: (t - i.minY) / Math.max(1, i.maxY - i.minY)
		}, d(!0));
	}, m = () => {
		if (e || t) return;
		let n = f();
		n && (r.current ? p(n.minX + r.current.x * (n.maxX - n.minX), n.minY + r.current.y * (n.maxY - n.minY)) : p(n.width - n.box.width - n.cloudOverhang - (n.width <= 600 ? 12 : 24), n.height - n.box.height - (n.width <= 760 ? 72 : 82)));
	}, h = () => {
		try {
			r.current && localStorage.setItem(Ss, JSON.stringify(r.current));
		} catch {}
	};
	(0, j.useLayoutEffect)(() => {
		if (m(), !n.current) return;
		let e = new ResizeObserver(m);
		return e.observe(n.current), window.addEventListener("resize", m), () => {
			e.disconnect(), window.removeEventListener("resize", m);
		};
	}, [e, t]), (0, j.useLayoutEffect)(() => {
		(e || t) && (i.current = null, l(!1));
	}, [e, t]);
	let g = (t) => {
		if (e || !t.isPrimary || t.button !== 0) return;
		let r = n.current?.getBoundingClientRect();
		r && (a.current = 0, i.current = {
			id: t.pointerId,
			x: t.clientX,
			y: t.clientY,
			left: r.left,
			top: r.top,
			moved: !1
		}, t.currentTarget.setPointerCapture(t.pointerId));
	}, _ = (e) => {
		let t = i.current;
		if (!t || t.id !== e.pointerId) return !1;
		let n = e.clientX - t.x, r = e.clientY - t.y;
		return !t.moved && Math.hypot(n, r) < 6 || (t.moved = !0, l(!0), e.preventDefault(), p(t.left + n, t.top + r, !0), !0);
	}, v = (e) => {
		let t = i.current;
		t && t.id === e.pointerId && (i.current = null, l(!1), t.moved && (a.current = performance.now() + 500, h()), e.currentTarget.hasPointerCapture(e.pointerId) && e.currentTarget.releasePointerCapture(e.pointerId));
	}, y = () => {
		r.current = null, d(!1);
		try {
			localStorage.removeItem(Ss);
		} catch {}
		m();
	};
	return {
		actorRef: n,
		style: !e && o ? {
			position: "fixed",
			left: o.left,
			top: o.top,
			right: "auto",
			bottom: "auto",
			"--pet-cloud-left": `${o.cloudLeft}px`,
			"--pet-cloud-width": `${o.cloudWidth}px`
		} : void 0,
		dragging: c,
		custom: u,
		cloudBelow: o?.cloudBelow ?? !1,
		reset: y,
		onPointerDown: g,
		onPointerMove: _,
		onPointerEnd: v,
		onKeyDown: (t) => {
			if (e) return;
			if (t.key === "Home") {
				t.preventDefault(), y();
				return;
			}
			if (!t.altKey || ![
				"ArrowLeft",
				"ArrowRight",
				"ArrowUp",
				"ArrowDown"
			].includes(t.key)) return;
			let r = n.current?.getBoundingClientRect();
			r && (t.preventDefault(), p(r.left + (t.key === "ArrowLeft" ? -24 : t.key === "ArrowRight" ? 24 : 0), r.top + (t.key === "ArrowUp" ? -24 : t.key === "ArrowDown" ? 24 : 0), !0), h());
		},
		hoverBlocked: () => !!i.current || performance.now() < a.current,
		suppressClick: (e) => e !== 0 && performance.now() < a.current
	};
}
//#endregion
//#region src/new-site/yuanbao/PetActor.tsx
var Es = "M21 6H198L215 23V83L197 101H67L35 116L41 101H21L5 85V23Z";
function Ds({ tone: e, text: t, disabled: n, onClick: r }) {
	let i = (0, j.useId)();
	return /* @__PURE__ */ (0, V.jsxs)("button", {
		type: "button",
		className: `pet-cloud pet-cloud-${e}`,
		disabled: n,
		onClick: r,
		children: [/* @__PURE__ */ (0, V.jsxs)("svg", {
			className: "pet-bubble-frame",
			viewBox: "0 0 220 120",
			preserveAspectRatio: "none",
			"aria-hidden": "true",
			focusable: "false",
			children: [
				/* @__PURE__ */ (0, V.jsxs)("defs", { children: [
					/* @__PURE__ */ (0, V.jsxs)("linearGradient", {
						id: `${i}-surface`,
						x1: "0",
						y1: "0",
						x2: "1",
						y2: "1",
						children: [/* @__PURE__ */ (0, V.jsx)("stop", { stopColor: "var(--bubble-top)" }), /* @__PURE__ */ (0, V.jsx)("stop", {
							offset: "1",
							stopColor: "var(--bubble-bottom)"
						})]
					}),
					/* @__PURE__ */ (0, V.jsxs)("linearGradient", {
						id: `${i}-edge`,
						x1: "0",
						y1: "0",
						x2: "1",
						y2: "1",
						children: [
							/* @__PURE__ */ (0, V.jsx)("stop", { stopColor: "var(--bubble-edge)" }),
							/* @__PURE__ */ (0, V.jsx)("stop", {
								offset: ".48",
								stopColor: "var(--bubble-bright)"
							}),
							/* @__PURE__ */ (0, V.jsx)("stop", {
								offset: "1",
								stopColor: "var(--bubble-edge)"
							})
						]
					}),
					/* @__PURE__ */ (0, V.jsx)("clipPath", {
						id: `${i}-clip`,
						children: /* @__PURE__ */ (0, V.jsx)("path", { d: Es })
					})
				] }),
				/* @__PURE__ */ (0, V.jsx)("path", {
					className: "pet-bubble-halo",
					d: Es
				}),
				/* @__PURE__ */ (0, V.jsx)("path", {
					d: Es,
					fill: `url(#${i}-surface)`,
					stroke: `url(#${i}-edge)`,
					strokeWidth: "1.8",
					strokeLinejoin: "round"
				}),
				/* @__PURE__ */ (0, V.jsx)("path", {
					className: "pet-bubble-inset",
					d: "M23 10H196L210 25V81L195 96H65L43 107L47 96H23L10 83V25Z"
				}),
				/* @__PURE__ */ (0, V.jsxs)("g", {
					className: "pet-bubble-details",
					clipPath: `url(#${i}-clip)`,
					children: [
						/* @__PURE__ */ (0, V.jsx)("path", {
							className: "pet-bubble-corner",
							d: "M24 7H78L84 12H117M144 7H187M214 59V82L196 100H162"
						}),
						/* @__PURE__ */ (0, V.jsx)("path", {
							className: "pet-bubble-stripes",
							d: "M28 16H34L27 24H21ZM39 16H45L38 24H32ZM50 16H56L49 24H43ZM61 16H67L60 24H54Z"
						}),
						/* @__PURE__ */ (0, V.jsx)("circle", {
							cx: "177",
							cy: "22",
							r: "2.5"
						}),
						/* @__PURE__ */ (0, V.jsx)("circle", {
							cx: "186",
							cy: "22",
							r: "2.5"
						}),
						/* @__PURE__ */ (0, V.jsx)("circle", {
							cx: "195",
							cy: "22",
							r: "2.5"
						}),
						/* @__PURE__ */ (0, V.jsxs)("g", {
							className: "pet-bubble-radar",
							children: [
								/* @__PURE__ */ (0, V.jsx)("circle", {
									cx: "197",
									cy: "87",
									r: "29"
								}),
								/* @__PURE__ */ (0, V.jsx)("circle", {
									cx: "197",
									cy: "87",
									r: "23"
								}),
								/* @__PURE__ */ (0, V.jsx)("path", { d: "M174 88a23 23 0 0 1 28-23M163 85a34 34 0 0 1 37-32" })
							]
						}),
						/* @__PURE__ */ (0, V.jsx)("path", {
							className: "pet-bubble-floor",
							d: "M74 100H118L124 96H151M6 36V74"
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, V.jsx)("span", { children: t })]
	});
}
function Os({ panelOpen: e }) {
	let { lang: t, motion: r, visible: i, petResting: a } = n(), { animation: o, busy: s, wake: c, pet: l, treat: u, show: f, finishAnimation: p, recordActivity: m } = ve(), h = d(), g = (0, j.useRef)(null), _ = (0, j.useRef)(null), v = (0, j.useRef)(-1), y = (0, j.useRef)(null), [b, x] = (0, j.useState)(!1), [S, C] = (0, j.useState)(!1), [w, T] = (0, j.useState)(!0), [E, D] = (0, j.useState)("sleep"), [O, k] = (0, j.useState)(() => matchMedia("(max-width: 760px)").matches), [A, M] = (0, j.useState)(!1), N = a ? "P" : "S", P = t === "zh", ee = A || h || e && O, F = Ts(e, ee), I = r && i && !ee;
	(0, j.useEffect)(() => {
		let e = matchMedia("(max-width: 760px)"), t = () => k(e.matches);
		return e.addEventListener("change", t), () => e.removeEventListener("change", t);
	}, []), (0, j.useEffect)(() => {
		let e = g.current;
		if (!e) return;
		let t = !1, n = new xs(e, { baseUrl: "assets/yuanbao/" });
		_.current = n;
		let r = (e) => {
			let t = e.detail;
			t.state === "playing" && t.key ? D(t.key) : t.state === "idle" && t.pose && D(t.pose === "P" ? "sleep" : "standing");
		};
		return e.addEventListener("yuanbao:state", r), n.init().then(() => {
			t || x(!0);
		}).catch(() => {
			t || C(!0);
		}), () => {
			t = !0, e.removeEventListener("yuanbao:state", r), n.destroy(), _.current = null;
		};
	}, []), (0, j.useEffect)(() => {
		if (!b && !S) return;
		let e = _.current;
		if (S || !e) {
			p(o.id);
			return;
		}
		e.setMotion(I, !0);
		let t = !1;
		if (!I) {
			v.current = o.id, e.showPose(N), p(o.id);
			return;
		}
		return a ? (v.current = o.id, e.play("sleep")) : v.current === o.id ? (e.showPose(N), p(o.id)) : (v.current = o.id, (o.action === "entrance" ? e.playEntrance() : o.action === "sleep" ? Promise.resolve() : e.play(o.action)).catch(() => e.showPose("S")).finally(() => {
			t || (p(o.id), T(!0));
		})), () => {
			t = !0, e.showPose(N);
		};
	}, [
		b,
		S,
		I,
		o.id,
		o.action,
		a,
		N,
		p
	]);
	let te = () => {
		m(), M(!0), requestAnimationFrame(() => y.current?.focus({ preventScroll: !0 }));
	}, L = () => {
		m(), M(!1), requestAnimationFrame(() => F.actorRef.current?.querySelector(".pet-body-button")?.focus({ preventScroll: !0 }));
	}, ne = () => {
		s || (a ? (T(!0), c()) : T((e) => !e));
	}, R = (b ? _.current?.hitRegions(N) ?? [] : []).map((e) => `M${e.x} ${e.y}h${e.width}v${e.height}h-${e.width}z`).join(""), z = !a && !s && w && !e && !F.dragging, B = s ? P ? E === "wake" ? "慢慢醒来啦" : E === "wave" ? "和你打个招呼" : "圆宝正开心呢" : E === "wake" ? "Waking up" : E === "wave" ? "Hello there" : "A happy little moment" : a ? P ? "轻点唤醒 · 按住拖动" : "Tap to wake · hold to move" : P ? "圆宝 · 按住可以拖动" : "Yuanbao · hold to move";
	return /* @__PURE__ */ (0, V.jsxs)(V.Fragment, { children: [/* @__PURE__ */ (0, V.jsxs)("aside", {
		ref: F.actorRef,
		style: F.style,
		className: "pet-actor",
		"data-panel-open": e,
		"data-dragging": F.dragging,
		"data-cloud-below": F.cloudBelow,
		"data-busy": s,
		"data-phase": E,
		"data-motion": I,
		hidden: ee,
		"aria-label": P ? "圆宝宠物互动" : "Yuanbao companion interactions",
		onPointerDownCapture: m,
		onPointerMoveCapture: m,
		onPointerUpCapture: m,
		onKeyDownCapture: m,
		onFocusCapture: m,
		children: [
			/* @__PURE__ */ (0, V.jsxs)("div", {
				className: "pet-actor-stage",
				children: [
					!b && /* @__PURE__ */ (0, V.jsx)("img", {
						className: "pet-actor-fallback",
						src: `assets/yuanbao/${a ? "sleeping" : "standing"}.png`,
						alt: ""
					}),
					/* @__PURE__ */ (0, V.jsx)("div", {
						ref: g,
						className: "pet-actor-media",
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ (0, V.jsx)("button", {
						type: "button",
						className: "pet-body-button",
						onClick: (e) => {
							F.suppressClick(e.detail) || ne();
						},
						"aria-label": a ? P ? "唤醒圆宝" : "Wake Yuanbao" : P ? "圆宝的互动气泡" : "Yuanbao interaction bubbles",
						"aria-busy": s,
						"aria-describedby": "pet-drag-help",
						"aria-expanded": z,
						"aria-controls": "pet-cloud-actions",
						onPointerDown: F.onPointerDown,
						onPointerUp: F.onPointerEnd,
						onPointerCancel: F.onPointerEnd,
						onLostPointerCapture: F.onPointerEnd,
						onKeyDown: F.onKeyDown,
						onPointerMove: (e) => {
							if (F.onPointerMove(e) || F.hoverBlocked() || e.buttons !== 0 || e.pointerType !== "mouse" || !a || s || !b) return;
							let t = e.currentTarget.getBoundingClientRect();
							_.current?.hitTest((e.clientX - t.left) / t.width, (e.clientY - t.top) / t.height, "P") && ne();
						},
						children: /* @__PURE__ */ (0, V.jsx)("svg", {
							className: "pet-body-hit",
							viewBox: "0 0 96 96",
							"aria-hidden": "true",
							children: /* @__PURE__ */ (0, V.jsx)("path", { d: R })
						})
					})
				]
			}),
			/* @__PURE__ */ (0, V.jsx)("span", {
				className: "pet-sr",
				id: "pet-drag-help",
				children: P ? "按住圆宝身体拖动换位置，轻点互动，键盘 Alt 加方向键移动，Home 恢复默认位置" : "Drag Yuanbao to move, tap to interact, use Alt plus arrow keys to move or Home to reset"
			}),
			/* @__PURE__ */ (0, V.jsxs)("div", {
				id: "pet-cloud-actions",
				className: "pet-clouds",
				hidden: !z,
				role: "group",
				"aria-label": P ? "和圆宝玩" : "Play with Yuanbao",
				onKeyDown: (e) => {
					e.key === "Escape" && (T(!1), e.currentTarget.parentElement?.querySelector(".pet-body-button")?.focus());
				},
				children: [
					/* @__PURE__ */ (0, V.jsx)(Ds, {
						tone: "cobalt",
						text: P ? "摸摸我的头喵~" : "Pet my head, meow~",
						onClick: l
					}),
					/* @__PURE__ */ (0, V.jsx)(Ds, {
						tone: "cyan",
						text: P ? "快把罐罐交出来喵！" : "Treats, please, meow!",
						onClick: u
					}),
					/* @__PURE__ */ (0, V.jsx)(Ds, {
						tone: "ice",
						text: P ? "戳戳我有惊喜喵！！" : "Tap for a surprise, meow!!",
						onClick: f
					})
				]
			}),
			!e && /* @__PURE__ */ (0, V.jsx)("button", {
				type: "button",
				className: "pet-actor-caption",
				onClick: ne,
				"aria-disabled": s,
				tabIndex: b ? -1 : 0,
				children: B
			}),
			!e && /* @__PURE__ */ (0, V.jsxs)("button", {
				type: "button",
				className: "pet-hide-button",
				onClick: te,
				children: [/* @__PURE__ */ (0, V.jsx)(Pe, { size: 13 }), /* @__PURE__ */ (0, V.jsx)("span", { children: P ? "隐藏圆宝" : "Hide Yuanbao" })]
			}),
			/* @__PURE__ */ (0, V.jsx)("span", {
				className: "pet-sr",
				role: "status",
				children: s ? B : a ? P ? "圆宝在睡觉" : "Yuanbao is sleeping" : P ? "圆宝准备好陪你玩了" : "Yuanbao is ready to play"
			}),
			S && !e && /* @__PURE__ */ (0, V.jsx)("button", {
				className: "pet-actor-recovery",
				onClick: () => {
					a && c(), f();
				},
				children: P ? "和圆宝聊聊" : "Chat with Yuanbao"
			})
		]
	}), A && !h && !e && /* @__PURE__ */ (0, V.jsxs)("button", {
		ref: y,
		type: "button",
		className: "pet-restore-button",
		onClick: L,
		"aria-label": P ? "显示圆宝" : "Show Yuanbao",
		title: P ? "显示圆宝" : "Show Yuanbao",
		children: [/* @__PURE__ */ (0, V.jsx)(Xe, { size: 17 }), /* @__PURE__ */ (0, V.jsx)("span", { children: P ? "圆宝" : "Yuanbao" })]
	})] });
}
//#endregion
//#region src/new-site/PetButler.tsx
function ks() {
	let e = l(), { lang: t, active: r, visible: i, petResting: a } = n(), { open: o, turns: s, affection: c, busy: u, close: d, ask: p, introduce: m, pet: h, rest: g, wake: v, navigate: y, clear: b, recordActivity: x } = ve(), [S, C] = (0, j.useState)(""), w = (0, j.useRef)(null), E = (0, j.useRef)(null), D = (0, j.useRef)(null), O = (0, j.useRef)(!0);
	(0, j.useEffect)(() => {
		if (!o) return;
		w.current?.focus({ preventScroll: !0 });
		let e = (e) => {
			e.key === "Escape" && !document.querySelector("dialog[open]") && (e.preventDefault(), d());
		};
		return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e);
	}, [o]), (0, j.useEffect)(() => {
		o && O.current && D.current && (D.current.scrollTop = D.current.scrollHeight);
	}, [
		s,
		o,
		t,
		a
	]);
	let k = (e) => {
		e.preventDefault(), S.trim() && !a && (O.current = !0, p(S), C(""), E.current?.focus({ preventScroll: !0 }));
	}, A = (e) => {
		O.current = !0, e();
	};
	return /* @__PURE__ */ (0, V.jsxs)("div", {
		className: "pet-butler",
		"data-page": r,
		"data-awake": !a,
		"data-visible": i,
		children: [/* @__PURE__ */ (0, V.jsx)(Os, { panelOpen: o }), o && /* @__PURE__ */ (0, V.jsxs)("section", {
			ref: w,
			id: "pet-panel",
			className: "pet-panel",
			role: "dialog",
			"aria-modal": "false",
			"aria-labelledby": "pet-title",
			"aria-describedby": "pet-mode",
			tabIndex: -1,
			onPointerDownCapture: x,
			onPointerMoveCapture: x,
			onKeyDownCapture: x,
			onFocusCapture: x,
			onScrollCapture: x,
			children: [
				/* @__PURE__ */ (0, V.jsxs)("header", {
					className: "pet-panel-header",
					children: [
						/* @__PURE__ */ (0, V.jsxs)("div", {
							className: "pet-portrait",
							children: [/* @__PURE__ */ (0, V.jsx)("img", {
								src: `assets/yuanbao/${a ? "sleeping" : "standing"}.png`,
								alt: e("pet.text01")
							}), !a && c > 0 && /* @__PURE__ */ (0, V.jsx)(Ie, {
								className: "pet-heart",
								size: 16,
								"aria-hidden": "true"
							}, c)]
						}),
						/* @__PURE__ */ (0, V.jsxs)("div", { children: [/* @__PURE__ */ (0, V.jsxs)("h2", {
							id: "pet-title",
							children: [e("pet.text02"), /* @__PURE__ */ (0, V.jsx)("span", { children: e("pet.text03") })]
						}), /* @__PURE__ */ (0, V.jsx)("p", { children: e(a ? "pet.text04" : "pet.text05") })] }),
						/* @__PURE__ */ (0, V.jsx)("button", {
							className: "pet-icon-button",
							onClick: () => d(),
							"aria-label": e("pet.text06"),
							children: /* @__PURE__ */ (0, V.jsx)(_, { size: 19 })
						})
					]
				}),
				/* @__PURE__ */ (0, V.jsxs)("div", {
					className: "pet-page-context",
					children: [
						/* @__PURE__ */ (0, V.jsx)("span", { children: e("pet.text07") }),
						/* @__PURE__ */ (0, V.jsx)("strong", { children: ae(r, t) }),
						/* @__PURE__ */ (0, V.jsxs)("button", {
							onClick: () => A(m),
							disabled: a,
							children: [e("pet.text08"), /* @__PURE__ */ (0, V.jsx)(f, { size: 13 })]
						})
					]
				}),
				/* @__PURE__ */ (0, V.jsxs)("div", {
					ref: D,
					className: "pet-chat-log",
					role: "log",
					"aria-label": e("pet.text09"),
					"aria-live": "polite",
					"aria-relevant": "additions text",
					onScroll: () => {
						let e = D.current;
						e && (O.current = e.scrollHeight - e.scrollTop - e.clientHeight < 60);
					},
					children: [
						/* @__PURE__ */ (0, V.jsxs)("div", {
							className: "pet-welcome",
							children: [/* @__PURE__ */ (0, V.jsx)(Xe, { size: 21 }), /* @__PURE__ */ (0, V.jsxs)("p", { children: [e("pet.text10"), /* @__PURE__ */ (0, V.jsx)("span", { children: e("pet.text11") })] })]
						}),
						s.map((n) => /* @__PURE__ */ (0, V.jsxs)("div", {
							className: "pet-turn",
							children: [n.question && /* @__PURE__ */ (0, V.jsxs)("p", {
								className: "pet-question",
								children: [/* @__PURE__ */ (0, V.jsx)("span", {
									className: "pet-sr",
									children: e("pet.text12")
								}), n.question]
							}), /* @__PURE__ */ (0, V.jsxs)("div", {
								className: "pet-answer",
								children: [
									/* @__PURE__ */ (0, V.jsx)("span", {
										className: "pet-sr",
										children: e("pet.text13")
									}),
									/* @__PURE__ */ (0, V.jsx)("p", { children: n.reply[t].text }),
									n.reply[t].actions.length > 0 && /* @__PURE__ */ (0, V.jsx)("div", {
										className: "pet-answer-links",
										children: n.reply[t].actions.map((e, t) => /* @__PURE__ */ (0, V.jsxs)("a", {
											href: `#${e.route}`,
											onClick: (t) => {
												t.preventDefault(), y(e.route);
											},
											children: [e.label, /* @__PURE__ */ (0, V.jsx)(f, { size: 14 })]
										}, `${e.route}-${t}`))
									})
								]
							})]
						}, n.id)),
						a && /* @__PURE__ */ (0, V.jsxs)("div", {
							className: "pet-sleep-state",
							children: [
								/* @__PURE__ */ (0, V.jsx)(Ke, { size: 23 }),
								/* @__PURE__ */ (0, V.jsxs)("p", { children: [e("pet.text14"), /* @__PURE__ */ (0, V.jsx)("span", { children: e("pet.text15") })] }),
								/* @__PURE__ */ (0, V.jsxs)("button", {
									onClick: () => A(v),
									children: [/* @__PURE__ */ (0, V.jsx)(Xe, { size: 15 }), e("pet.text16")]
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, V.jsxs)("div", {
					className: "pet-shortcuts",
					"aria-label": e("pet.text17"),
					children: [
						/* @__PURE__ */ (0, V.jsxs)("button", {
							onClick: () => A(() => p(t === "zh" ? "带我逛逛" : "Show me around")),
							disabled: a,
							children: [/* @__PURE__ */ (0, V.jsx)(Ae, { size: 15 }), e("pet.text19")]
						}),
						/* @__PURE__ */ (0, V.jsxs)("button", {
							onClick: () => A(h),
							disabled: u,
							children: [/* @__PURE__ */ (0, V.jsx)(Ie, { size: 15 }), e("pet.text20")]
						}),
						/* @__PURE__ */ (0, V.jsxs)("button", {
							onClick: () => A(a ? v : g),
							children: [
								a ? /* @__PURE__ */ (0, V.jsx)(Xe, { size: 15 }) : /* @__PURE__ */ (0, V.jsx)(Ke, { size: 15 }),
								" ",
								e(a ? "pet.text21" : "pet.text22")
							]
						}),
						s.length > 0 && /* @__PURE__ */ (0, V.jsx)("button", {
							className: "pet-clear",
							onClick: b,
							"aria-label": e("pet.text23"),
							title: e("pet.text24"),
							children: /* @__PURE__ */ (0, V.jsx)(T, { size: 14 })
						})
					]
				}),
				/* @__PURE__ */ (0, V.jsxs)("form", {
					className: "pet-composer",
					onSubmit: k,
					onKeyDown: (e) => {
						e.key === "Enter" && e.nativeEvent.isComposing && e.preventDefault();
					},
					children: [
						/* @__PURE__ */ (0, V.jsx)("label", {
							className: "pet-sr",
							htmlFor: "pet-question",
							children: e("pet.text25")
						}),
						/* @__PURE__ */ (0, V.jsx)("input", {
							ref: E,
							id: "pet-question",
							value: S,
							onChange: (e) => {
								x(), C(e.target.value);
							},
							maxLength: 400,
							disabled: a,
							placeholder: e(a ? "pet.text26" : "pet.text27"),
							autoComplete: "off"
						}),
						/* @__PURE__ */ (0, V.jsx)("button", {
							type: "submit",
							disabled: !S.trim() || a,
							"aria-label": e("pet.text28"),
							children: /* @__PURE__ */ (0, V.jsx)(Ee, { size: 20 })
						})
					]
				}),
				/* @__PURE__ */ (0, V.jsx)("p", {
					className: "pet-mode",
					id: "pet-mode",
					children: e("pet.text29")
				})
			]
		})]
	});
}
//#endregion
//#region src/new-site/App.tsx
var As = (0, j.lazy)(() => import("./LanyardProfile-BgR3CF0b.js"));
function js() {
	let e = l(), t = {
		email: e("contact.email"),
		phone: e("contact.phone"),
		phoneDisplay: e("contact.phoneDisplay")
	}, { go: i } = n(), [a, o] = (0, j.useState)(""), [s, c] = (0, j.useState)(!1), d = (0, j.useRef)(null);
	(0, j.useEffect)(() => () => {
		d.current && clearTimeout(d.current);
	}, []);
	let f = async (e) => {
		try {
			await navigator.clipboard.writeText(e), o(e), c(!1), d.current && clearTimeout(d.current), d.current = setTimeout(() => o(""), 2400);
		} catch {
			c(!0);
		}
	};
	return /* @__PURE__ */ (0, V.jsx)(b, { children: /* @__PURE__ */ (0, V.jsxs)("section", {
		className: "chapter contact-section",
		id: "contact",
		"aria-labelledby": "contact-title",
		children: [
			/* @__PURE__ */ (0, V.jsx)("img", {
				className: "contact-art",
				src: r("armor.png"),
				alt: e("contact.text01"),
				loading: "lazy"
			}),
			/* @__PURE__ */ (0, V.jsx)("div", { className: "contact-shade" }),
			/* @__PURE__ */ (0, V.jsx)(u, { chapter: "contact" }),
			/* @__PURE__ */ (0, V.jsxs)("div", {
				className: "contact-content",
				"data-copied": !!a,
				children: [
					/* @__PURE__ */ (0, V.jsx)("h2", {
						id: "contact-title",
						children: /* @__PURE__ */ (0, V.jsx)(C, {
							chapter: "contact",
							text: e("contact.text02"),
							renderText: (e) => {
								let [t = "", ...n] = e.split("\n"), r = n.join("\n");
								return /* @__PURE__ */ (0, V.jsxs)(V.Fragment, { children: [
									t,
									/* @__PURE__ */ (0, V.jsx)("br", {}),
									r
								] });
							}
						})
					}),
					/* @__PURE__ */ (0, V.jsx)("p", {
						className: "contact-owner",
						children: /* @__PURE__ */ (0, V.jsx)(C, {
							chapter: "contact",
							order: 1,
							tone: "support",
							text: e("contact.owner"),
							renderText: (e) => /* @__PURE__ */ (0, V.jsxs)(V.Fragment, { children: [e.slice(0, 3), /* @__PURE__ */ (0, V.jsx)("span", {
								className: "contact-owner-alias",
								children: e.slice(3)
							})] })
						})
					}),
					/* @__PURE__ */ (0, V.jsx)(x, { page: "contact" }),
					/* @__PURE__ */ (0, V.jsxs)("div", {
						className: "contact-methods",
						children: [t.email && /* @__PURE__ */ (0, V.jsxs)("div", { children: [/* @__PURE__ */ (0, V.jsxs)("a", {
							href: `mailto:${t.email}`,
							children: [
								/* @__PURE__ */ (0, V.jsx)(He, { size: 19 }),
								/* @__PURE__ */ (0, V.jsx)("span", { children: t.email }),
								/* @__PURE__ */ (0, V.jsx)(we, { size: 19 })
							]
						}), /* @__PURE__ */ (0, V.jsx)("button", {
							onClick: () => void f(t.email),
							"aria-label": e("contact.text03"),
							children: a === t.email ? /* @__PURE__ */ (0, V.jsx)(Oe, { size: 17 }) : /* @__PURE__ */ (0, V.jsx)(Me, { size: 17 })
						})] }), t.phone && /* @__PURE__ */ (0, V.jsxs)("div", { children: [/* @__PURE__ */ (0, V.jsxs)("a", {
							href: `tel:${t.phone}`,
							children: [
								/* @__PURE__ */ (0, V.jsx)(Qe, { size: 19 }),
								/* @__PURE__ */ (0, V.jsx)("span", { children: t.phoneDisplay }),
								/* @__PURE__ */ (0, V.jsx)(we, { size: 19 })
							]
						}), /* @__PURE__ */ (0, V.jsx)("button", {
							onClick: () => void f(t.phone),
							"aria-label": e("contact.text04"),
							children: a === t.phone ? /* @__PURE__ */ (0, V.jsx)(Oe, { size: 17 }) : /* @__PURE__ */ (0, V.jsx)(Me, { size: 17 })
						})] })]
					}),
					/* @__PURE__ */ (0, V.jsx)("p", {
						className: "contact-status",
						role: "status",
						children: e(a ? "contact.text05" : s ? "contact.text06" : "contact.text07")
					})
				]
			}),
			/* @__PURE__ */ (0, V.jsxs)("footer", {
				className: "contact-footer",
				children: [/* @__PURE__ */ (0, V.jsx)("span", { children: /* @__PURE__ */ (0, V.jsx)(C, {
					chapter: "contact",
					order: 2,
					tone: "support",
					text: e("contact.text08")
				}) }), /* @__PURE__ */ (0, V.jsxs)("button", {
					onClick: () => i("home"),
					children: [e("contact.text09"), /* @__PURE__ */ (0, V.jsx)(Ee, { size: 17 })]
				})]
			})
		]
	}) });
}
function Ms() {
	let e = l(), { motion: t, visible: i, active: o, setActive: s, profile: c, setProfile: u, go: d, travel: f } = n(), p = (0, j.useRef)(null), m = (0, j.useRef)(null), h = (0, j.useRef)(!1);
	return (0, j.useEffect)(() => {
		let e = 0, t = () => {
			e = 0;
			let t = innerHeight * .44, n = a.map((e) => document.getElementById(e)).filter(Boolean).find((e) => {
				let n = e.getBoundingClientRect();
				return n.top <= t && n.bottom > t;
			});
			n && s(n.id);
		}, n = () => {
			!e && i && (e = requestAnimationFrame(t));
		};
		return window.addEventListener("scroll", n, { passive: !0 }), window.addEventListener("resize", n), t(), () => {
			cancelAnimationFrame(e), window.removeEventListener("scroll", n), window.removeEventListener("resize", n);
		};
	}, [i, s]), (0, j.useEffect)(() => {
		if (!h.current) {
			h.current = !0;
			let e = decodeURIComponent(location.hash.slice(1));
			if (e) {
				let t = e === "overview" ? "directory" : e === "welcome" ? "intro" : e === "about" ? "home" : e.split("/")[0];
				requestAnimationFrame(() => {
					document.getElementById(t)?.scrollIntoView({ behavior: "instant" }), e === "about" && u(!0);
				});
			}
		}
		let e = () => {
			let e = decodeURIComponent(location.hash.slice(1));
			d(e || "intro", !1);
		};
		return window.addEventListener("hashchange", e), () => window.removeEventListener("hashchange", e);
	}, [d, u]), (0, j.useEffect)(() => {
		document.documentElement.dataset.active = o;
	}, [o]), (0, j.useEffect)(() => {
		let e = p.current;
		return c ? (m.current = document.activeElement, e?.showModal(), document.body.classList.add("has-dialog")) : e?.open && e.close(), () => document.body.classList.remove("has-dialog");
	}, [c]), /* @__PURE__ */ (0, V.jsxs)(V.Fragment, { children: [
		/* @__PURE__ */ (0, V.jsx)(_s, {}),
		/* @__PURE__ */ (0, V.jsx)("a", {
			className: "skip-link",
			href: "#home",
			onClick: (e) => {
				e.preventDefault(), d("home");
			},
			children: e("contact.text10")
		}),
		/* @__PURE__ */ (0, V.jsx)(lo, {}),
		/* @__PURE__ */ (0, V.jsx)(ms, {}),
		/* @__PURE__ */ (0, V.jsx)(us, {}),
		t && f > 0 && /* @__PURE__ */ (0, V.jsx)("div", {
			className: "journey-line",
			"aria-hidden": "true"
		}, f),
		/* @__PURE__ */ (0, V.jsxs)("main", {
			id: "main",
			children: [
				/* @__PURE__ */ (0, V.jsx)(Do, {}),
				/* @__PURE__ */ (0, V.jsx)(Oo, {}),
				/* @__PURE__ */ (0, V.jsx)(Ao, {}),
				/* @__PURE__ */ (0, V.jsx)(ls, {}),
				/* @__PURE__ */ (0, V.jsx)(Go, {}),
				/* @__PURE__ */ (0, V.jsx)(as, {}),
				/* @__PURE__ */ (0, V.jsx)(js, {})
			]
		}),
		/* @__PURE__ */ (0, V.jsx)(ks, {}),
		/* @__PURE__ */ (0, V.jsx)("dialog", {
			ref: p,
			className: "profile-dialog",
			"aria-label": e("contact.text11"),
			onCancel: () => u(!1),
			onClose: () => {
				u(!1), document.body.classList.remove("has-dialog"), m.current?.focus();
			},
			children: c && /* @__PURE__ */ (0, V.jsx)(j.Suspense, {
				fallback: /* @__PURE__ */ (0, V.jsxs)("div", {
					className: "profile-loading",
					children: [
						/* @__PURE__ */ (0, V.jsx)("button", {
							className: "profile-close",
							onClick: () => u(!1),
							"aria-label": e("contact.text12"),
							children: /* @__PURE__ */ (0, V.jsx)(_, {})
						}),
						/* @__PURE__ */ (0, V.jsx)("img", {
							src: r("id-portrait.png"),
							alt: "JasonG"
						}),
						/* @__PURE__ */ (0, V.jsx)("p", { children: e("contact.text13") })
					]
				}),
				children: /* @__PURE__ */ (0, V.jsx)(As, { onClose: () => u(!1) })
			})
		})
	] });
}
//#endregion
//#region src/new-site/main.tsx
var Ns = class extends j.Component {
	state = { failed: !1 };
	static getDerivedStateFromError() {
		return { failed: !0 };
	}
	componentDidCatch(e) {
		console.error("JasonG rendering error:", e);
	}
	render() {
		return this.state.failed ? /* @__PURE__ */ (0, V.jsxs)("main", {
			className: "site-error",
			children: [
				/* @__PURE__ */ (0, V.jsx)("h1", { children: "JasonG" }),
				/* @__PURE__ */ (0, V.jsxs)("p", { children: [
					"页面暂时遇到问题，请刷新重试",
					/* @__PURE__ */ (0, V.jsx)("br", {}),
					"Something went wrong; please reload"
				] }),
				/* @__PURE__ */ (0, V.jsx)("button", {
					onClick: () => location.reload(),
					children: "重新载入 / Reload"
				}),
				/* @__PURE__ */ (0, V.jsx)("a", {
					href: "mailto:g18530106867@163.com",
					children: "g18530106867@163.com"
				})
			]
		}) : this.props.children;
	}
}, Ps = document.getElementById("jasong-root");
if (Ps) {
	let e = (0, M.createRoot)(Ps);
	h().then((t) => e.render(/* @__PURE__ */ (0, V.jsx)(Ns, { children: /* @__PURE__ */ (0, V.jsx)(v, {
		content: t,
		children: /* @__PURE__ */ (0, V.jsx)(s, { children: /* @__PURE__ */ (0, V.jsx)(_e, { children: /* @__PURE__ */ (0, V.jsx)(Ms, {}) }) })
	}) }))).catch(() => e.render(/* @__PURE__ */ (0, V.jsxs)("main", {
		className: "site-error",
		children: [
			/* @__PURE__ */ (0, V.jsx)("h1", { children: "JasonG" }),
			/* @__PURE__ */ (0, V.jsxs)("p", { children: [
				"网站内容暂时无法载入，请重试",
				/* @__PURE__ */ (0, V.jsx)("br", {}),
				"Content could not be loaded — please retry"
			] }),
			/* @__PURE__ */ (0, V.jsx)("button", {
				onClick: () => location.reload(),
				children: "重新载入 / Reload"
			})
		]
	})));
}
//#endregion
