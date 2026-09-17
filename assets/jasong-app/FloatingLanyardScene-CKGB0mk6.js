import { a as e, n as t, s as n, u as r } from "./SiteContext-CnqCaF0u.js";
import { A as i, C as a, D as o, E as s, O as c, S as l, T as u, _ as d, a as f, b as p, c as m, d as h, f as g, g as _, h as v, i as y, j as b, k as x, l as S, m as C, n as w, o as T, p as E, r as D, s as O, t as k, u as A, v as j, w as M, x as N, y as P } from "./lanyard-card-materials-LX65jeET.js";
//#region src/new-site/FloatingLanyardScene.tsx
var F = /* @__PURE__ */ r(n()), I = e();
E({
	Group: N,
	Object3D: u,
	Mesh: a,
	BoxGeometry: d,
	MeshStandardMaterial: M,
	AmbientLight: _,
	DirectionalLight: P
});
var L = 2.15, R = 3.15, z = 1.69, B = 30;
function V(e, t, n) {
	let r = e <= 600, i = Math.max(100, Math.min(r ? 160 : 180, (t - 160) * L / R)), a = i / L, o = Math.min(r ? 200 : 180, t - i * R / L - 78), s = r ? 112 : 125;
	return {
		width: e,
		height: t,
		pixels: a,
		cardPixels: i,
		openTop: o,
		ropeLength: (300 + o) / a + R / 2 - z,
		anchorX: (n - e / 2) / a,
		openAnchorY: (t / 2 + 300) / a,
		closedAnchorY: (t / 2 + 300 + o + R * a - s) / a,
		cameraZ: t / (2 * a * Math.tan(l.degToRad(B / 2)))
	};
}
var H = class extends F.Component {
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
function U({ children: e, width: t, height: n, onFailure: r }) {
	let i = (0, F.useRef)(null), a = (0, F.useRef)(null), o = (0, F.useRef)(null), s = (0, F.useRef)({
		children: e,
		width: t,
		height: n,
		onFailure: r
	});
	return s.current = {
		children: e,
		width: t,
		height: n,
		onFailure: r
	}, (0, F.useEffect)(() => {
		let e = i.current;
		if (!e) return;
		let t = !1, n = g(e);
		a.current = n;
		let r = () => {
			t || s.current.onFailure();
		}, c = (e) => {
			e.preventDefault(), r();
		};
		return e.addEventListener("webglcontextlost", c), n.configure({
			camera: {
				position: [
					0,
					0,
					18
				],
				fov: B,
				near: .1,
				far: 100
			},
			dpr: [1, 1.5],
			size: {
				width: s.current.width,
				height: s.current.height,
				top: 0,
				left: 0
			},
			gl: {
				alpha: !0,
				antialias: !0,
				powerPreference: "low-power"
			}
		}).then(() => {
			if (t) {
				n.unmount();
				return;
			}
			o.current = n.render(/* @__PURE__ */ (0, I.jsx)(H, {
				onFailure: r,
				children: s.current.children
			}));
			let e = o.current.getState();
			e.gl.setClearColor(0, 0), e.setSize(s.current.width, s.current.height, 0, 0);
		}).catch(r), () => {
			t = !0, e.removeEventListener("webglcontextlost", c), a.current = null, o.current = null, n.unmount();
		};
	}, []), (0, F.useEffect)(() => {
		o.current && (o.current.getState().setSize(t, n, 0, 0), a.current?.render(/* @__PURE__ */ (0, I.jsx)(H, {
			onFailure: () => s.current.onFailure(),
			children: e
		})));
	}, [
		e,
		t,
		n
	]), /* @__PURE__ */ (0, I.jsx)("canvas", {
		ref: i,
		"aria-hidden": "true",
		style: {
			display: "block",
			width: "100%",
			height: "100%",
			pointerEvents: "none"
		}
	});
}
function W(e) {
	let { camera: n, size: r } = v(), { rapier: a } = m(), u = (0, F.useRef)(e);
	u.current = e;
	let d = (0, F.useRef)(null), f = (0, F.useRef)(null), g = (0, F.useRef)(null), _ = (0, F.useRef)(null), E = (0, F.useRef)(null), M = (0, F.useMemo)(() => V(e.width, e.height, e.anchorX), [
		e.width,
		e.height,
		e.anchorX
	]), N = (0, F.useRef)({
		layout: M,
		anchorY: e.expanded ? M.openAnchorY : M.closedAnchorY
	}).current, P = N.layout.ropeLength / 3, B = N.anchorY - N.layout.ropeLength - z, H = h(t("id-portrait.png")), U = (0, F.useMemo)(() => {
		if (!(H.image instanceof HTMLImageElement)) throw Error("Portrait image could not be decoded");
		return w(H.image, e.lang, e.identity);
	}, [
		H,
		e.lang,
		e.identity
	]), W = (0, F.useMemo)(() => k(e.identity.strap), [e.identity.strap]), G = (0, F.useMemo)(() => ({
		curve: new j(Array.from({ length: 4 }, () => new b())),
		smooth1: new b(N.layout.anchorX, N.anchorY - P, 0),
		smooth2: new b(N.layout.anchorX, N.anchorY - P * 2, 0),
		ray: new x(),
		pointer: new i(),
		plane: new o(new b(0, 0, 1), 0),
		hit: new b(),
		target: new b(),
		position: new b(),
		anchor: new b(),
		reach: new b(),
		velocity: new b(),
		angular: new b(),
		quaternion: new c(),
		desiredRotation: new c(),
		euler: new p(),
		corner: new b(),
		corners: Array.from({ length: 4 }, () => new i())
	}), [N, P]), K = (0, F.useRef)(null), q = (0, F.useRef)(!1);
	S(d, f, [
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
		P
	]), S(f, g, [
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
		P
	]), S(g, _, [
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
		P
	]), A(_, E, [[
		0,
		0,
		0
	], [
		0,
		z,
		0
	]]), (0, F.useEffect)(() => () => U.dispose(), [U]), (0, F.useEffect)(() => () => W.dispose(), [W]), (0, F.useEffect)(() => {
		W.material.resolution.set(r.width, r.height);
	}, [W, r]), (0, F.useEffect)(() => {
		n.position.set(0, 0, M.cameraZ), n instanceof s && (n.aspect = M.width / M.height, n.updateProjectionMatrix()), n.updateMatrixWorld();
	}, [n, M]), (0, F.useEffect)(() => {
		let t = (e, t) => {
			let { width: r, height: i } = u.current;
			return G.pointer.set(e / r * 2 - 1, -(t / i) * 2 + 1), G.ray.setFromCamera(G.pointer, n), G.ray.ray.intersectPlane(G.plane, G.hit);
		}, r = {
			start(e, n) {
				let r = E.current, i = t(e, n);
				r && i && u.current.motion && (u.current.expanded || u.current.onOpen(), K.current = {
					x: e,
					y: n,
					offset: i.clone().sub(G.position.copy(r.translation()))
				}, G.velocity.set(0, 0, 0), G.angular.copy(r.angvel()), r.setBodyType(a.RigidBodyType.KinematicPositionBased, !0), [
					f,
					g,
					_,
					E
				].forEach((e) => e.current?.wakeUp()));
			},
			move(e, t) {
				K.current && (K.current.x = e, K.current.y = t);
			},
			end() {
				if (!K.current) return;
				K.current = null;
				let e = E.current;
				e && e.isValid() && (e.setBodyType(a.RigidBodyType.Dynamic, !0), e.setLinvel(G.velocity.clone().clampLength(0, 10), !0), G.angular.set(G.velocity.y * .045, G.velocity.x * .075, -G.velocity.x * .24).clampLength(0, 3.5), e.setAngvel(G.angular, !0));
			}
		};
		return e.bridge.current = r, () => {
			r.end(), e.bridge.current === r && (e.bridge.current = null), K.current = null, e.handle.current && (e.handle.current.dataset.dragging = "false");
		};
	}, [
		n,
		G,
		e.bridge,
		e.handle,
		a
	]), O((e) => {
		let t = E.current, r = d.current;
		if (!t || !r || !u.current.motion) return;
		let i = Math.min(e.timestep, 1 / 30), a = u.current.expanded ? M.openAnchorY : M.closedAnchorY;
		if (G.anchor.copy(r.translation()), G.anchor.x = l.damp(G.anchor.x, M.anchorX, 10, i), G.anchor.y = l.damp(G.anchor.y, a, 5.8, i), G.anchor.z = 0, r.setNextKinematicTranslation(G.anchor), Math.abs(G.anchor.y - a) > .002 && [
			f,
			g,
			_,
			E
		].forEach((e) => e.current?.wakeUp()), K.current) {
			let e = K.current, r = L * M.pixels / 2, a = R * M.pixels / 2;
			if (G.pointer.set(e.x / M.width * 2 - 1, -(e.y / M.height) * 2 + 1), G.ray.setFromCamera(G.pointer, n), G.ray.ray.intersectPlane(G.plane, G.hit)) {
				G.target.copy(G.hit).sub(e.offset), G.target.z = 0;
				let n = l.clamp(G.target.x * M.pixels + M.width / 2, r + 8, M.width - r - 8), o = l.clamp(M.height / 2 - G.target.y * M.pixels, 100 - a, M.height - a - 12);
				G.target.set((n - M.width / 2) / M.pixels, (M.height / 2 - o) / M.pixels, 0), G.reach.copy(G.target), G.reach.y += z, G.reach.sub(G.anchor).clampLength(0, N.layout.ropeLength * .995), G.target.copy(G.anchor).add(G.reach), G.target.y -= z, G.position.copy(t.translation()), G.velocity.copy(G.target).sub(G.position).divideScalar(Math.max(i, .001)).clampLength(0, 10), t.setNextKinematicTranslation(G.target);
				let s = l.clamp(-G.velocity.x * .022 + (M.anchorX - G.target.x) * .035, -.55, .55);
				G.euler.set(.015, -G.velocity.x * .012, s), G.desiredRotation.setFromEuler(G.euler), G.quaternion.copy(t.rotation()).slerp(G.desiredRotation, 1 - Math.exp(-12 * i)), t.setNextKinematicRotation(G.quaternion);
			}
			[
				f,
				g,
				_
			].forEach((e) => e.current?.wakeUp());
		} else if (!t.isSleeping()) {
			let e = t.angvel(), n = t.rotation();
			t.setAngvel({
				x: e.x - n.x * i * 1.5,
				y: e.y - n.y * i * 2.5,
				z: e.z
			}, !1);
		}
	}), C((t, i) => {
		let a = E.current;
		if (!a || !d.current || !f.current || !g.current || !_.current) return;
		G.smooth1.lerp(f.current.translation(), 1 - Math.exp(-24 * i)), G.smooth2.lerp(g.current.translation(), 1 - Math.exp(-24 * i)), G.curve.points[0].copy(_.current.translation()), G.curve.points[1].copy(G.smooth2), G.curve.points[2].copy(G.smooth1), G.curve.points[3].copy(d.current.translation()), W.strap.setPoints(G.curve.getPoints(32)), G.position.copy(a.translation()), G.quaternion.copy(a.rotation());
		let o = [
			[-1, 1],
			[1, 1],
			[1, -1],
			[-1, -1]
		];
		for (let e = 0; e < 4; e++) G.corner.set(o[e][0] * 1.0999999999999999, o[e][1] * 1.5999999999999999, .05).applyQuaternion(G.quaternion).add(G.position).project(n), G.corners[e].set((G.corner.x * .5 + .5) * r.width, (-G.corner.y * .5 + .5) * r.height);
		let s = Math.min(...G.corners.map((e) => e.x)), c = Math.min(...G.corners.map((e) => e.y)), l = Math.max(...G.corners.map((e) => e.x)), p = Math.max(...G.corners.map((e) => e.y));
		if (![
			s,
			c,
			l,
			p
		].every(Number.isFinite)) return;
		let m = l - s, h = p - c, v = !!K.current, y = e.handle.current;
		y && (y.style.transform = `translate(${s}px, ${c}px)`, y.style.width = `${m}px`, y.style.height = `${h}px`, y.style.clipPath = `polygon(${G.corners.map((e) => `${e.x - s}px ${e.y - c}px`).join(",")})`, y.dataset.dragging = String(v)), u.current.onPose?.({
			left: s,
			top: c,
			width: m,
			height: h,
			centerX: (s + l) / 2,
			centerY: (c + p) / 2,
			bottom: p,
			dragging: v
		}), q.current || (q.current = !0, u.current.onReady());
	});
	let J = {
		colliders: !1,
		canSleep: !0,
		linearDamping: 2.5,
		angularDamping: 2.5
	}, Y = N.layout.anchorX, X = N.anchorY;
	return /* @__PURE__ */ (0, I.jsxs)(I.Fragment, { children: [
		/* @__PURE__ */ (0, I.jsx)(T, {
			ref: d,
			type: "kinematicPosition",
			position: [
				Y,
				X,
				0
			],
			colliders: !1
		}),
		/* @__PURE__ */ (0, I.jsx)(T, {
			ref: f,
			position: [
				Y,
				X - P,
				0
			],
			...J,
			children: /* @__PURE__ */ (0, I.jsx)(D, {
				args: [.035],
				mass: .12,
				collisionGroups: 0
			})
		}),
		/* @__PURE__ */ (0, I.jsx)(T, {
			ref: g,
			position: [
				Y,
				X - P * 2,
				0
			],
			...J,
			children: /* @__PURE__ */ (0, I.jsx)(D, {
				args: [.035],
				mass: .12,
				collisionGroups: 0
			})
		}),
		/* @__PURE__ */ (0, I.jsx)(T, {
			ref: _,
			position: [
				Y,
				X - P * 3,
				0
			],
			...J,
			children: /* @__PURE__ */ (0, I.jsx)(D, {
				args: [.035],
				mass: .12,
				collisionGroups: 0
			})
		}),
		/* @__PURE__ */ (0, I.jsxs)(T, {
			ref: E,
			position: [
				Y,
				B,
				0
			],
			rotation: [
				.015,
				-.05,
				-.025
			],
			...J,
			linearDamping: 1.1,
			angularDamping: 1.5,
			children: [
				/* @__PURE__ */ (0, I.jsx)(y, {
					args: [
						L / 2,
						R / 2,
						.035
					],
					mass: .8,
					collisionGroups: 0
				}),
				/* @__PURE__ */ (0, I.jsx)("mesh", {
					geometry: W.body,
					children: /* @__PURE__ */ (0, I.jsx)("meshStandardMaterial", {
						color: "#a8b7c6",
						metalness: .78,
						roughness: .25
					})
				}),
				/* @__PURE__ */ (0, I.jsx)("mesh", {
					geometry: W.face,
					position: [
						0,
						0,
						.038
					],
					children: /* @__PURE__ */ (0, I.jsx)("meshStandardMaterial", {
						map: U.front,
						roughness: .68,
						metalness: .12
					})
				}),
				/* @__PURE__ */ (0, I.jsx)("mesh", {
					geometry: W.face,
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
					children: /* @__PURE__ */ (0, I.jsx)("meshStandardMaterial", {
						map: U.back,
						roughness: .58,
						metalness: .15
					})
				}),
				/* @__PURE__ */ (0, I.jsxs)("mesh", {
					position: [
						0,
						1.66,
						0
					],
					children: [/* @__PURE__ */ (0, I.jsx)("boxGeometry", { args: [
						.38,
						.28,
						.095
					] }), /* @__PURE__ */ (0, I.jsx)("meshStandardMaterial", {
						color: "#728599",
						metalness: .92,
						roughness: .22
					})]
				}),
				/* @__PURE__ */ (0, I.jsxs)("mesh", {
					position: [
						0,
						1.67,
						.055
					],
					children: [/* @__PURE__ */ (0, I.jsx)("boxGeometry", { args: [
						.24,
						.16,
						.015
					] }), /* @__PURE__ */ (0, I.jsx)("meshStandardMaterial", {
						color: "#172333",
						metalness: .4,
						roughness: .5
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, I.jsx)("mesh", {
			geometry: W.strap,
			material: W.material,
			frustumCulled: !1
		})
	] });
}
function G(e) {
	if ((0, F.useEffect)(() => () => {
		e.bridge.current?.end(), e.bridge.current = null;
	}, [e.bridge, e.motion]), !e.motion || e.width <= 0 || e.height <= 0) return null;
	let t = V(e.width, e.height, e.anchorX);
	return /* @__PURE__ */ (0, I.jsxs)(U, {
		width: e.width,
		height: e.height,
		onFailure: e.onFailure,
		children: [
			/* @__PURE__ */ (0, I.jsx)("ambientLight", { intensity: 2.1 }),
			/* @__PURE__ */ (0, I.jsx)("directionalLight", {
				position: [
					3,
					5,
					6
				],
				intensity: 2.2
			}),
			/* @__PURE__ */ (0, I.jsx)("directionalLight", {
				position: [
					-4,
					1,
					3
				],
				color: "#719fff",
				intensity: 1.6
			}),
			/* @__PURE__ */ (0, I.jsx)(F.Suspense, {
				fallback: null,
				children: /* @__PURE__ */ (0, I.jsx)(f, {
					gravity: [
						0,
						-22,
						0
					],
					timeStep: 1 / 60,
					children: /* @__PURE__ */ (0, I.jsx)(W, { ...e })
				}, `${t.cardPixels}:${t.openTop}`)
			})
		]
	});
}
//#endregion
export { G as default };
