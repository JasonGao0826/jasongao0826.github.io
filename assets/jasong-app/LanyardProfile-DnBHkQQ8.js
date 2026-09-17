import { a as e, i as t, n, s as r, u as i } from "./SiteContext-CMMWA07R.js";
import { _ as a, d as o, l as s, n as c, p as l, s as u, t as d, u as f } from "./IdentityBadge-BRPJVZFl.js";
import { A as p, C as m, D as h, O as g, S as _, T as v, _ as y, a as b, d as x, f as S, g as C, h as w, i as T, j as E, k as D, l as O, m as k, n as A, o as j, p as M, r as N, t as P, u as F, v as I, w as L, x as R, y as z } from "./lanyard-card-materials-DBqYkVb4.js";
//#region src/new-site/lanyard-profile.css
var B = /* @__PURE__ */ i(r()), V = e();
M({
	Group: R,
	Object3D: v,
	Mesh: m,
	BoxGeometry: y,
	MeshStandardMaterial: L,
	AmbientLight: C,
	DirectionalLight: z
});
var H = class extends B.Component {
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
};
function U({ children: e, onFailure: t }) {
	let n = (0, B.useRef)(null), r = (0, B.useRef)(null), i = (0, B.useRef)(null), a = (0, B.useRef)(e);
	return a.current = e, (0, B.useEffect)(() => {
		let e = n.current, o = e?.parentElement;
		if (!e || !o) return;
		let s = !1, c = S(e);
		r.current = c;
		let l = new ResizeObserver(() => {
			let e = o.getBoundingClientRect();
			i.current?.getState().setSize(e.width, e.height, e.top, e.left);
		}), u = o.getBoundingClientRect();
		return c.configure({
			camera: {
				position: [
					0,
					.34,
					8
				],
				fov: 34
			},
			dpr: [1, 1.5],
			size: {
				width: u.width,
				height: u.height,
				top: u.top,
				left: u.left
			},
			gl: {
				alpha: !0,
				antialias: !0,
				powerPreference: "low-power"
			}
		}).then(() => {
			s || (i.current = c.render(/* @__PURE__ */ (0, V.jsx)(H, {
				onFailure: t,
				children: a.current
			})), l.observe(o));
		}).catch(() => {
			s || t();
		}), () => {
			s = !0, l.disconnect(), i.current = null, r.current = null, c.unmount();
		};
	}, [t]), (0, B.useEffect)(() => {
		i.current && r.current?.render(/* @__PURE__ */ (0, V.jsx)(H, {
			onFailure: t,
			children: e
		}));
	}, [e, t]), /* @__PURE__ */ (0, V.jsx)("canvas", {
		ref: n,
		style: {
			display: "block",
			width: "100%",
			height: "100%"
		}
	});
}
function W({ lang: e, identity: t, handle: r, bridge: i, onReady: a }) {
	let o = (0, B.useRef)(null), s = (0, B.useRef)(null), c = (0, B.useRef)(null), l = (0, B.useRef)(null), u = (0, B.useRef)(null), { camera: d, gl: f, size: m } = w(), [v, y] = (0, B.useState)(!1), b = (0, B.useRef)(null), S = x(n("id-portrait.png")), C = (0, B.useMemo)(() => {
		if (!(S.image instanceof HTMLImageElement)) throw Error("Portrait image could not be decoded");
		return A(S.image, e, t);
	}, [
		S,
		e,
		t
	]), M = (0, B.useMemo)(() => P(t.strap), [t.strap]), L = (0, B.useMemo)(() => ({
		curve: new I(Array.from({ length: 4 }, () => new E())),
		ray: new D(),
		pointer: new p(),
		plane: new h(new E(0, 0, 1), 0),
		hit: new E(),
		target: new E(),
		position: new E(),
		quaternion: new g(),
		corner: new E(),
		velocity: new E(),
		smooth1: new E(0, 2.27, 0),
		smooth2: new E(0, 1.89, 0)
	}), []), R = (0, B.useRef)(null);
	O(o, s, [
		[
			0,
			0,
			0
		],
		[
			0,
			0,
			0
		],
		.38
	]), O(s, c, [
		[
			0,
			0,
			0
		],
		[
			0,
			0,
			0
		],
		.38
	]), O(c, l, [
		[
			0,
			0,
			0
		],
		[
			0,
			0,
			0
		],
		.38
	]), F(l, u, [[
		0,
		0,
		0
	], [
		0,
		1.69,
		0
	]]), (0, B.useEffect)(() => () => C.dispose(), [C]), (0, B.useEffect)(() => () => M.dispose(), [M]), (0, B.useEffect)(() => {
		M.material.resolution.set(m.width, m.height);
	}, [M, m]), (0, B.useEffect)(() => {
		a();
	}, [a]), (0, B.useEffect)(() => {
		let e = (e, t) => {
			let n = f.domElement.getBoundingClientRect();
			return L.pointer.set((e - n.left) / n.width * 2 - 1, -(t - n.top) / n.height * 2 + 1), L.ray.setFromCamera(L.pointer, d), L.ray.ray.intersectPlane(L.plane, L.hit);
		};
		return i.current = {
			start(t, n) {
				let r = u.current, i = e(t, n);
				r && i && (b.current = {
					x: t,
					y: n,
					offset: i.clone().sub(L.position.copy(r.translation()))
				}, R.current = null, y(!0), [
					s,
					c,
					l,
					u
				].forEach((e) => e.current?.wakeUp()));
			},
			move(e, t) {
				b.current && (b.current.x = e, b.current.y = t);
			},
			end() {
				b.current && (R.current = L.velocity.clone().clampLength(0, 5), b.current = null, y(!1));
			}
		}, () => {
			i.current = null, b.current = null;
		};
	}, [
		i,
		d,
		f,
		L
	]), (0, B.useEffect)(() => {
		!v && R.current && u.current && (u.current.setLinvel(R.current, !0), R.current = null);
	}, [v]), k((e, t) => {
		let n = u.current;
		if (!n || !o.current || !s.current || !c.current || !l.current) return;
		if (b.current) {
			let e = f.domElement.getBoundingClientRect();
			L.pointer.set((b.current.x - e.left) / e.width * 2 - 1, -(b.current.y - e.top) / e.height * 2 + 1), L.ray.setFromCamera(L.pointer, d), L.ray.ray.intersectPlane(L.plane, L.hit) && (L.target.copy(L.hit).sub(b.current.offset), L.target.z = 0, L.target.y = _.clamp(L.target.y, -.55, .8), L.position.set(L.target.x, L.target.y + 1.69 - 2.65, 0).clampLength(0, 1.14), L.target.set(L.position.x, L.position.y + 2.65 - 1.69, 0), L.velocity.copy(L.target).sub(L.position.copy(n.translation())).divideScalar(Math.max(t, .001)).clampLength(0, 5), n.setNextKinematicTranslation(L.target)), [
				s,
				c,
				l
			].forEach((e) => e.current?.wakeUp());
		}
		if (L.smooth1.lerp(s.current.translation(), 1 - Math.exp(-22 * t)), L.smooth2.lerp(c.current.translation(), 1 - Math.exp(-22 * t)), L.curve.points[0].copy(l.current.translation()), L.curve.points[1].copy(L.smooth2), L.curve.points[2].copy(L.smooth1), L.curve.points[3].copy(o.current.translation()), M.strap.setPoints(L.curve.getPoints(24)), !v && !n.isSleeping()) {
			let e = n.angvel(), t = n.rotation();
			n.setAngvel({
				x: e.x,
				y: e.y - t.y * .35,
				z: e.z
			}, !1);
		}
		let i = r.current;
		if (i) {
			L.position.copy(n.translation()), L.quaternion.copy(n.rotation());
			let e = [
				[-1.1, 1.6],
				[1.1, 1.6],
				[1.1, -1.6],
				[-1.1, -1.6]
			].map(([e, t]) => (L.corner.set(e, t, .05).applyQuaternion(L.quaternion).add(L.position).project(d), [(L.corner.x * .5 + .5) * m.width, (-L.corner.y * .5 + .5) * m.height])), t = Math.min(...e.map((e) => e[0])), r = Math.min(...e.map((e) => e[1])), a = Math.max(...e.map((e) => e[0])) - t, o = Math.max(...e.map((e) => e[1])) - r;
			i.style.transform = `translate(${t}px, ${r}px)`, i.style.width = `${a}px`, i.style.height = `${o}px`, i.style.clipPath = `polygon(${e.map((e) => `${e[0] - t}px ${e[1] - r}px`).join(",")})`, i.dataset.dragging = String(v);
		}
	});
	let z = {
		colliders: !1,
		canSleep: !0,
		linearDamping: 3,
		angularDamping: 3
	};
	return /* @__PURE__ */ (0, V.jsxs)(V.Fragment, { children: [
		/* @__PURE__ */ (0, V.jsx)(j, {
			ref: o,
			type: "fixed",
			position: [
				0,
				2.65,
				0
			],
			colliders: !1
		}),
		/* @__PURE__ */ (0, V.jsx)(j, {
			ref: s,
			position: [
				0,
				2.27,
				0
			],
			...z,
			children: /* @__PURE__ */ (0, V.jsx)(N, {
				args: [.035],
				mass: .12,
				collisionGroups: 0
			})
		}),
		/* @__PURE__ */ (0, V.jsx)(j, {
			ref: c,
			position: [
				0,
				1.89,
				0
			],
			...z,
			children: /* @__PURE__ */ (0, V.jsx)(N, {
				args: [.035],
				mass: .12,
				collisionGroups: 0
			})
		}),
		/* @__PURE__ */ (0, V.jsx)(j, {
			ref: l,
			position: [
				0,
				1.51,
				0
			],
			...z,
			children: /* @__PURE__ */ (0, V.jsx)(N, {
				args: [.035],
				mass: .12,
				collisionGroups: 0
			})
		}),
		/* @__PURE__ */ (0, V.jsxs)(j, {
			ref: u,
			position: [
				0,
				-.18,
				0
			],
			rotation: [
				.015,
				-.12,
				-.08
			],
			type: v ? "kinematicPosition" : "dynamic",
			...z,
			linearDamping: 1.8,
			angularDamping: 2.3,
			children: [
				/* @__PURE__ */ (0, V.jsx)(T, {
					args: [
						1.075,
						1.575,
						.035
					],
					mass: .8,
					collisionGroups: 0
				}),
				/* @__PURE__ */ (0, V.jsx)("mesh", {
					geometry: M.body,
					children: /* @__PURE__ */ (0, V.jsx)("meshStandardMaterial", {
						color: "#a8b7c6",
						metalness: .78,
						roughness: .25
					})
				}),
				/* @__PURE__ */ (0, V.jsx)("mesh", {
					geometry: M.face,
					position: [
						0,
						0,
						.038
					],
					children: /* @__PURE__ */ (0, V.jsx)("meshStandardMaterial", {
						map: C.front,
						roughness: .68,
						metalness: .12
					})
				}),
				/* @__PURE__ */ (0, V.jsx)("mesh", {
					geometry: M.face,
					position: [
						0,
						0,
						-.038
					],
					rotation: [
						0,
						Math.PI,
						0
					],
					children: /* @__PURE__ */ (0, V.jsx)("meshStandardMaterial", {
						map: C.back,
						roughness: .58,
						metalness: .15
					})
				}),
				/* @__PURE__ */ (0, V.jsxs)("mesh", {
					position: [
						0,
						1.66,
						0
					],
					children: [/* @__PURE__ */ (0, V.jsx)("boxGeometry", { args: [
						.38,
						.28,
						.095
					] }), /* @__PURE__ */ (0, V.jsx)("meshStandardMaterial", {
						color: "#728599",
						metalness: .92,
						roughness: .22
					})]
				}),
				/* @__PURE__ */ (0, V.jsxs)("mesh", {
					position: [
						0,
						1.67,
						.055
					],
					children: [/* @__PURE__ */ (0, V.jsx)("boxGeometry", { args: [
						.24,
						.16,
						.015
					] }), /* @__PURE__ */ (0, V.jsx)("meshStandardMaterial", {
						color: "#172333",
						metalness: .4,
						roughness: .5
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, V.jsx)("mesh", {
			geometry: M.strap,
			material: M.material,
			frustumCulled: !1
		})
	] });
}
function G({ onFailure: e }) {
	let { gl: t } = w();
	return (0, B.useEffect)(() => {
		let n = t.domElement, r = (t) => {
			t.preventDefault(), e();
		};
		return n.addEventListener("webglcontextlost", r), () => n.removeEventListener("webglcontextlost", r);
	}, [t, e]), null;
}
function K({ onClose: e }) {
	let { lang: n, setLang: r, motion: i, setMotion: p, visible: m } = t(), h = a(), g = c(), _ = {
		title: h("profile.title"),
		close: h("profile.close"),
		intro: h("profile.intro"),
		bio: h("profile.bio"),
		values: h("profile.values"),
		education: h("profile.education"),
		melbourne: h("profile.melbourne"),
		masters: h("profile.masters"),
		mastersDate: h("profile.mastersDate"),
		queens: h("profile.queens"),
		computing: h("profile.computing"),
		computingDate: h("profile.computingDate"),
		instruction: h("profile.instruction"),
		reset: h("profile.reset"),
		drag: h("profile.drag"),
		static: h("profile.static"),
		loading: h("profile.loading"),
		fallback: h("profile.fallback"),
		portrait: h("profile.portrait"),
		continue: h("profile.continue"),
		field: h("profile.field")
	}, [v, y] = (0, B.useState)(!1), [x, S] = (0, B.useState)(!1), [C, w] = (0, B.useState)(0), T = (0, B.useRef)(null), E = (0, B.useRef)(null), D = i && m && !v, O = (0, B.useCallback)(() => {
		y(!0), S(!1);
	}, []), k = (0, B.useCallback)(() => S(!0), []);
	(0, B.useEffect)(() => {
		D || S(!1);
	}, [D]);
	let A = () => {
		E.current?.end(), w((e) => e + 1);
	}, j = (e) => {
		E.current?.end(), e.currentTarget.hasPointerCapture(e.pointerId) && e.currentTarget.releasePointerCapture(e.pointerId);
	};
	return /* @__PURE__ */ (0, V.jsxs)("div", {
		className: "lp-profile",
		children: [/* @__PURE__ */ (0, V.jsxs)("header", {
			className: "lp-header",
			children: [/* @__PURE__ */ (0, V.jsx)("h2", {
				id: "new-profile-title",
				children: /* @__PURE__ */ (0, V.jsx)(u, {
					text: _.title,
					insideDialog: !0
				})
			}), /* @__PURE__ */ (0, V.jsxs)("div", {
				className: "lp-actions",
				children: [
					/* @__PURE__ */ (0, V.jsx)("button", {
						className: "lp-language",
						type: "button",
						onClick: () => r(n === "zh" ? "en" : "zh"),
						"aria-label": n === "zh" ? "Switch profile to English" : "切换个人信息为中文",
						children: n === "zh" ? "EN" : "中"
					}),
					/* @__PURE__ */ (0, V.jsx)("button", {
						className: "lp-motion",
						type: "button",
						onClick: () => p(!i),
						"aria-pressed": i,
						"aria-label": n === "zh" ? i ? "关闭动效" : "开启动效" : i ? "Turn motion off" : "Turn motion on",
						children: n === "zh" ? `动效${i ? "开" : "关"}` : `Motion ${i ? "on" : "off"}`
					}),
					/* @__PURE__ */ (0, V.jsx)("button", {
						className: "lp-icon-button",
						type: "button",
						onClick: e,
						"aria-label": _.close,
						children: /* @__PURE__ */ (0, V.jsx)(s, {
							size: 22,
							"aria-hidden": "true"
						})
					})
				]
			})]
		}), /* @__PURE__ */ (0, V.jsxs)("div", {
			className: "lp-layout",
			children: [/* @__PURE__ */ (0, V.jsxs)("figure", {
				className: "lp-identity",
				children: [/* @__PURE__ */ (0, V.jsxs)("div", {
					className: "lp-stage",
					"data-active": D && x,
					children: [(!D || !x) && /* @__PURE__ */ (0, V.jsx)(d, { lang: n }), D && /* @__PURE__ */ (0, V.jsxs)(H, {
						onFailure: O,
						children: [/* @__PURE__ */ (0, V.jsx)("div", {
							className: "lp-canvas",
							"aria-hidden": "true",
							style: { visibility: x ? "visible" : "hidden" },
							children: /* @__PURE__ */ (0, V.jsxs)(U, {
								onFailure: O,
								children: [
									/* @__PURE__ */ (0, V.jsx)("ambientLight", { intensity: 2.1 }),
									/* @__PURE__ */ (0, V.jsx)("directionalLight", {
										position: [
											3,
											5,
											6
										],
										intensity: 2.2
									}),
									/* @__PURE__ */ (0, V.jsx)("directionalLight", {
										position: [
											-4,
											1,
											3
										],
										color: "#719fff",
										intensity: 1.6
									}),
									/* @__PURE__ */ (0, V.jsx)(G, { onFailure: O }),
									/* @__PURE__ */ (0, V.jsx)(B.Suspense, {
										fallback: null,
										children: /* @__PURE__ */ (0, V.jsx)(b, {
											gravity: [
												0,
												-22,
												0
											],
											timeStep: 1 / 60,
											children: /* @__PURE__ */ (0, V.jsx)(W, {
												lang: n,
												identity: g,
												handle: T,
												bridge: E,
												onReady: k
											})
										}, C)
									})
								]
							})
						}), /* @__PURE__ */ (0, V.jsx)("button", {
							ref: T,
							type: "button",
							className: "lp-drag-handle",
							hidden: !x,
							"aria-label": _.drag,
							"aria-describedby": "lp-drag-instructions",
							onPointerDown: (e) => {
								e.button === 0 && e.isPrimary && (e.preventDefault(), e.currentTarget.setPointerCapture(e.pointerId), E.current?.start(e.clientX, e.clientY));
							},
							onPointerMove: (e) => {
								e.currentTarget.hasPointerCapture(e.pointerId) && E.current?.move(e.clientX, e.clientY);
							},
							onPointerUp: j,
							onPointerCancel: j,
							onLostPointerCapture: () => E.current?.end(),
							onKeyDown: (e) => {
								(e.key === "Enter" || e.key === " ") && (e.preventDefault(), A());
							}
						})]
					})]
				}), /* @__PURE__ */ (0, V.jsxs)("figcaption", {
					className: "lp-card-controls",
					children: [/* @__PURE__ */ (0, V.jsx)("p", {
						id: "lp-drag-instructions",
						children: v ? _.fallback : D ? x ? _.instruction : _.loading : _.static
					}), D && /* @__PURE__ */ (0, V.jsxs)("button", {
						type: "button",
						className: "lp-reset",
						onClick: A,
						disabled: !x,
						children: [/* @__PURE__ */ (0, V.jsx)(f, {
							size: 15,
							"aria-hidden": "true"
						}), _.reset]
					})]
				})]
			}), /* @__PURE__ */ (0, V.jsxs)("div", {
				className: "lp-information",
				children: [
					/* @__PURE__ */ (0, V.jsx)("p", {
						className: "lp-intro",
						children: _.intro
					}),
					/* @__PURE__ */ (0, V.jsx)("p", {
						className: "lp-bio",
						children: _.bio
					}),
					/* @__PURE__ */ (0, V.jsx)("p", {
						className: "lp-values",
						children: _.values
					}),
					/* @__PURE__ */ (0, V.jsxs)("section", {
						className: "lp-education",
						"aria-labelledby": "lp-education-title",
						children: [/* @__PURE__ */ (0, V.jsx)("h3", {
							id: "lp-education-title",
							children: _.education
						}), /* @__PURE__ */ (0, V.jsxs)("ol", { children: [/* @__PURE__ */ (0, V.jsxs)("li", { children: [
							/* @__PURE__ */ (0, V.jsx)("h4", { children: _.melbourne }),
							/* @__PURE__ */ (0, V.jsx)("p", { children: _.masters }),
							/* @__PURE__ */ (0, V.jsx)("time", { children: _.mastersDate })
						] }), /* @__PURE__ */ (0, V.jsxs)("li", { children: [
							/* @__PURE__ */ (0, V.jsx)("h4", { children: _.queens }),
							/* @__PURE__ */ (0, V.jsx)("p", { children: _.computing }),
							/* @__PURE__ */ (0, V.jsx)("time", { children: _.computingDate })
						] })] })]
					}),
					/* @__PURE__ */ (0, V.jsx)(l, { page: "profile" }),
					/* @__PURE__ */ (0, V.jsxs)("button", {
						className: "lp-continue",
						type: "button",
						onClick: e,
						children: [_.continue, /* @__PURE__ */ (0, V.jsx)(o, {
							size: 19,
							"aria-hidden": "true"
						})]
					})
				]
			})]
		})]
	});
}
//#endregion
export { K as default };
