(function() {
	var h = this,
		aa = function() {},
		ca = function(a) {
			var b = typeof a;
			if ("object" == b)
				if (a) {
					if (a instanceof Array) return "array";
					if (a instanceof Object) return b;
					var c = Object.prototype.toString.call(a);
					if ("[object Window]" == c) return "object";
					if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
					if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
				} else return "null";
			else if ("function" == b && "undefined" == typeof a.call) return "object";
			return b
		},
		l = function(a) {
			return "string" == typeof a
		},
		da = function(a, b, c) {
			return a.call.apply(a.bind, arguments)
		},
		ea = function(a, b, c) {
			if (!a) throw Error();
			if (2 < arguments.length) {
				var d = Array.prototype.slice.call(arguments, 2);
				return function() {
					var c = Array.prototype.slice.call(arguments);
					Array.prototype.unshift.apply(c, d);
					return a.apply(b, c)
				}
			}
			return function() {
				return a.apply(b, arguments)
			}
		},
		fa = function(a, b, c) {
			fa = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? da : ea;
			return fa.apply(null, arguments)
		},
		ga = function(a, b) {
			var c = Array.prototype.slice.call(arguments, 1);
			return function() {
				var b = c.slice();
				b.push.apply(b, arguments);
				return a.apply(this, b)
			}
		},
		q = Date.now || function() {
			return +new Date
		},
		r = function(a, b) {
			a = a.split(".");
			var c = h;
			a[0] in c || !c.execScript || c.execScript("var " + a[0]);
			for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c = c[d] && c[d] !== Object.prototype[d] ? c[d] : c[d] = {} : c[d] = b
		};
	var ha = function(a, b, c, d, e) {
		if (e) c = a + ("&" + b + "=" + c);
		else {
			var f = "&" + b + "=",
				g = a.indexOf(f);
			0 > g ? c = a + f + c : (g += f.length, f = a.indexOf("&", g), c = 0 <= f ? a.substring(0, g) + c + a.substring(f) : a.substring(0, g) + c)
		}
		return 2E3 < c.length ? void 0 !== d ? ha(a, b, d, void 0, e) : a : c
	};
	var ia = function() {
		var a = /[&\?#]exk=([^& ]+)/.exec(t.location.href);
		return a && 2 == a.length ? a[1] : null
	};
	var ja = String.prototype.trim ? function(a) {
			return a.trim()
		} : function(a) {
			return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
		},
		la = function(a, b) {
			var c = 0;
			a = ja(String(a)).split(".");
			b = ja(String(b)).split(".");
			for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
				var f = a[e] || "",
					g = b[e] || "";
				do {
					f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
					g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
					if (0 == f[0].length && 0 == g[0].length) break;
					c = ka(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || ka(0 == f[2].length, 0 == g[2].length) || ka(f[2], g[2]);
					f = f[3];
					g = g[3]
				} while (0 == c)
			}
			return c
		},
		ka = function(a, b) {
			return a < b ? -1 : a > b ? 1 : 0
		};
	var ma = Array.prototype.indexOf ? function(a, b, c) {
			return Array.prototype.indexOf.call(a, b, c)
		} : function(a, b, c) {
			c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
			if (l(a)) return l(b) && 1 == b.length ? a.indexOf(b, c) : -1;
			for (; c < a.length; c++)
				if (c in a && a[c] === b) return c;
			return -1
		},
		na = Array.prototype.forEach ? function(a, b, c) {
			Array.prototype.forEach.call(a, b, c)
		} : function(a, b, c) {
			for (var d = a.length, e = l(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
		},
		oa = Array.prototype.map ? function(a, b, c) {
			return Array.prototype.map.call(a, b, c)
		} : function(a, b, c) {
			for (var d = a.length, e = Array(d), f = l(a) ? a.split("") : a, g = 0; g < d; g++) g in f && (e[g] = b.call(c, f[g], g, a));
			return e
		},
		pa = Array.prototype.reduce ? function(a, b, c, d) {
			d && (b = fa(b, d));
			return Array.prototype.reduce.call(a, b, c)
		} : function(a, b, c, d) {
			var e = c;
			na(a, function(c, g) {
				e = b.call(d, e, c, g, a)
			});
			return e
		},
		qa = Array.prototype.some ? function(a, b, c) {
			return Array.prototype.some.call(a, b, c)
		} : function(a, b, c) {
			for (var d = a.length, e = l(a) ? a.split("") : a, f = 0; f < d; f++)
				if (f in e && b.call(c, e[f], f, a)) return !0;
			return !1
		},
		ra = function(a) {
			var b = a.length;
			if (0 < b) {
				for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
				return c
			}
			return []
		};
	var u;
	a: {
		var sa = h.navigator;
		if (sa) {
			var ta = sa.userAgent;
			if (ta) {
				u = ta;
				break a
			}
		}
		u = ""
	}
	var v = function(a) {
			return -1 != u.indexOf(a)
		},
		ua = function(a) {
			for (var b = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, c = [], d; d = b.exec(a);) c.push([d[1], d[2], d[3] || void 0]);
			return c
		};
	var va = function(a, b) {
			for (var c in a) b.call(void 0, a[c], c, a)
		},
		wa = function(a, b) {
			return null !== a && b in a
		};
	var xa = function() {
			return v("Trident") || v("MSIE")
		},
		w = function() {
			return (v("Chrome") || v("CriOS")) && !v("Edge")
		},
		za = function() {
			function a(a) {
				var b;
				a: {
					b = d;
					for (var e = a.length, k = l(a) ? a.split("") : a, m = 0; m < e; m++)
						if (m in k && b.call(void 0, k[m], m, a)) {
							b = m;
							break a
						}
					b = -1
				}
				return c[0 > b ? null : l(a) ? a.charAt(b) : a[b]] || ""
			}
			var b = u;
			if (xa()) return ya(b);
			var b = ua(b),
				c = {};
			na(b, function(a) {
				c[a[0]] = a[1]
			});
			var d = ga(wa, c);
			return v("Opera") ? a(["Version", "Opera"]) : v("Edge") ? a(["Edge"]) : w() ? a(["Chrome", "CriOS"]) : (b = b[2]) && b[1] || ""
		},
		ya = function(a) {
			var b = /rv: *([\d\.]*)/.exec(a);
			if (b && b[1]) return b[1];
			var b = "",
				c = /MSIE +([\d\.]+)/.exec(a);
			if (c && c[1])
				if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == c[1])
					if (a && a[1]) switch (a[1]) {
						case "4.0":
							b = "8.0";
							break;
						case "5.0":
							b = "9.0";
							break;
						case "6.0":
							b = "10.0";
							break;
						case "7.0":
							b = "11.0"
					} else b = "7.0";
					else b = c[1];
			return b
		};
	var x = function() {
		return v("iPhone") && !v("iPod") && !v("iPad")
	};
	var Aa = function(a) {
		Aa[" "](a);
		return a
	};
	Aa[" "] = aa;
	var Ca = function(a, b) {
		var c = Ba;
		Object.prototype.hasOwnProperty.call(c, a) || (c[a] = b(a))
	};
	var Da = v("Opera"),
		y = xa(),
		Ea = v("Edge"),
		Ga = v("Gecko") && !(-1 != u.toLowerCase().indexOf("webkit") && !v("Edge")) && !(v("Trident") || v("MSIE")) && !v("Edge"),
		Ja = -1 != u.toLowerCase().indexOf("webkit") && !v("Edge"),
		Ka = v("Macintosh"),
		La = v("Windows"),
		Ma = v("Android"),
		Na = x(),
		Oa = v("iPad"),
		Pa = v("iPod"),
		Qa = function() {
			var a = h.document;
			return a ? a.documentMode : void 0
		},
		Ra;
	a: {
		var Sa = "",
			Ta = function() {
				var a = u;
				if (Ga) return /rv\:([^\);]+)(\)|;)/.exec(a);
				if (Ea) return /Edge\/([\d\.]+)/.exec(a);
				if (y) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
				if (Ja) return /WebKit\/(\S+)/.exec(a);
				if (Da) return /(?:Version)[ \/]?(\S+)/.exec(a)
			}();Ta && (Sa = Ta ? Ta[1] : "");
		if (y) {
			var Ua = Qa();
			if (null != Ua && Ua > parseFloat(Sa)) {
				Ra = String(Ua);
				break a
			}
		}
		Ra = Sa
	}
	var Va = Ra,
		Ba = {},
		Wa = function(a) {
			Ca(a, function() {
				return 0 <= la(Va, a)
			})
		},
		Xa;
	var Ya = h.document;
	Xa = Ya && y ? Qa() || ("CSS1Compat" == Ya.compatMode ? parseInt(Va, 10) : 5) : void 0;
	var Za = v("Firefox"),
		$a = x() || v("iPod"),
		ab = v("iPad"),
		bb = v("Android") && !(w() || v("Firefox") || v("Opera") || v("Silk")),
		cb = w(),
		db = v("Safari") && !(w() || v("Coast") || v("Opera") || v("Edge") || v("Silk") || v("Android")) && !(x() || v("iPad") || v("iPod"));
	var fb = function(a, b) {
		var c = eb();
		this.label = a;
		this.type = b;
		this.value = c;
		this.duration = 0;
		this.uniqueId = this.label + "_" + this.type + "_" + Math.random()
	};
	var z = function(a, b) {
			this.j = [];
			this.m = b || h;
			var c = null;
			b && (b.google_js_reporting_queue = b.google_js_reporting_queue || [], this.j = b.google_js_reporting_queue, c = b.google_measure_js_timing);
			this.f = null != c ? c : Math.random() < a
		},
		eb = function() {
			var a = h.performance;
			return a && a.now ? a.now() : q()
		};
	z.prototype.disable = function() {
		na(this.j, this.v, this);
		this.j.length = 0;
		this.f = !1
	};
	z.prototype.v = function(a) {
		var b = this.m.performance;
		a && b && b.clearMarks && (b.clearMarks("goog_" + a.uniqueId + "_start"), b.clearMarks("goog_" + a.uniqueId + "_end"))
	};
	z.prototype.start = function(a, b) {
		if (!this.f) return null;
		a = new fb(a, b);
		(b = this.m.performance) && b.mark && b.mark("goog_" + a.uniqueId + "_start");
		return a
	};
	z.prototype.end = function(a) {
		if (this.f) {
			a.duration = eb() - a.value;
			var b = this.m.performance;
			b && b.mark && b.mark("goog_" + a.uniqueId + "_end");
			this.f && this.j.push(a)
		}
	};
	var gb = function() {
			var a = !1;
			try {
				var b = Object.defineProperty({}, "passive", {
					get: function() {
						a = !0
					}
				});
				h.addEventListener("test", null, b)
			} catch (c) {}
			return a
		}(),
		A = function(a, b, c, d) {
			a.addEventListener ? a.addEventListener(b, c, gb ? d : d ? d.capture || !1 : !1) : a.attachEvent && a.attachEvent("on" + b, c)
		},
		hb = function(a, b, c) {
			a.removeEventListener ? a.removeEventListener(b, c, gb ? void 0 : !1) : a.detachEvent && a.detachEvent("on" + b, c)
		};
	var ib = function(a, b, c) {
			if ("array" == ca(b))
				for (var d = 0; d < b.length; d++) ib(a, String(b[d]), c);
			else null != b && c.push("&", a, "" === b ? "" : "=", encodeURIComponent(String(b)))
		},
		jb = function(a, b, c) {
			for (c = c || 0; c < b.length; c += 2) ib(b[c], b[c + 1], a);
			return a
		},
		kb = function(a, b) {
			var c = 2 == arguments.length ? jb([a], arguments[1], 0) : jb([a], arguments, 1);
			if (c[1]) {
				var d = c[0],
					e = d.indexOf("#");
				0 <= e && (c.push(d.substr(e)), c[0] = d = d.substr(0, e));
				e = d.indexOf("?");
				0 > e ? c[1] = "?" : e == d.length - 1 && (c[1] = void 0)
			}
			return c.join("")
		};
	var lb = function(a) {
			try {
				var b;
				if (b = !!a && null != a.location.href) a: {
					try {
						Aa(a.foo);
						b = !0;
						break a
					} catch (c) {}
					b = !1
				}
				return b
			} catch (c) {
				return !1
			}
		},
		mb = function(a, b) {
			for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
		},
		ob = function() {
			var a = nb;
			if (!a) return "";
			var b = /.*[&#?]google_debug(=[^&]*)?(&.*)?$/;
			try {
				var c = b.exec(decodeURIComponent(a));
				if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
			} catch (d) {}
			return ""
		};
	var pb = function(a, b) {
			this.D = a;
			this.F = b
		},
		qb = function(a, b) {
			this.url = a;
			this.w = !!b;
			this.depth = null
		};
	var rb = function(a, b, c, d, e) {
			this.A = c || 4E3;
			this.i = a || "&";
			this.M = b || ",$";
			this.l = void 0 !== d ? d : "trn";
			this.W = e || null;
			this.u = !1;
			this.h = {};
			this.S = 0;
			this.c = []
		},
		sb = function(a, b) {
			var c = {};
			c[a] = b;
			return [c]
		},
		B = function(a, b, c, d) {
			a.c.push(b);
			a.h[b] = sb(c, d)
		},
		vb = function(a, b, c, d) {
			b = b + "//" + c + d;
			var e = tb(a) - d.length - 0;
			if (0 > e) return "";
			a.c.sort(function(a, b) {
				return a - b
			});
			d = null;
			c = "";
			for (var f = 0; f < a.c.length; f++)
				for (var g = a.c[f], k = a.h[g], m = 0; m < k.length; m++) {
					if (!e) {
						d = null == d ? g : d;
						break
					}
					var p = ub(k[m], a.i, a.M);
					if (p) {
						p = c + p;
						if (e >= p.length) {
							e -= p.length;
							b += p;
							c = a.i;
							break
						} else a.u && (c = e, p[c - 1] == a.i && --c, b += p.substr(0, c), c = a.i, e = 0);
						d = null == d ? g : d
					}
				}
			f = "";
			a.l && null != d && (f = c + a.l + "=" + (a.W || d));
			return b + f + ""
		},
		tb = function(a) {
			if (!a.l) return a.A;
			var b = 1,
				c;
			for (c in a.h) b = c.length > b ? c.length : b;
			return a.A - a.l.length - b - a.i.length - 1
		},
		ub = function(a, b, c, d, e) {
			var f = [];
			mb(a, function(a, k) {
				(a = wb(a, b, c, d, e)) && f.push(k + "=" + a)
			});
			return f.join(b)
		},
		wb = function(a, b, c, d, e) {
			if (null == a) return "";
			b = b || "&";
			c = c || ",$";
			"string" == typeof c && (c = c.split(""));
			if (a instanceof Array) {
				if (d = d || 0, d < c.length) {
					for (var f = [], g = 0; g < a.length; g++) f.push(wb(a[g], b, c, d + 1, e));
					return f.join(c[d])
				}
			} else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(ub(a, b, c, d, e + 1)) : "...";
			return encodeURIComponent(String(a))
		};
	var yb = function(a, b, c, d, e) {
			if ((d ? a.V : Math.random()) < (e || a.N)) try {
				var f;
				c instanceof rb ? f = c : (f = new rb, mb(c, function(a, b) {
					var c = f,
						d = c.S++;
					a = sb(b, a);
					c.c.push(d);
					c.h[d] = a
				}));
				var g = vb(f, a.U, a.O, a.T + b + "&");
				g && xb(h, g)
			} catch (k) {}
		},
		xb = function(a, b, c) {
			a.google_image_requests || (a.google_image_requests = []);
			var d = a.document.createElement("img");
			if (c) {
				var e = function(a) {
					c(a);
					hb(d, "load", e);
					hb(d, "error", e)
				};
				A(d, "load", e);
				A(d, "error", e)
			}
			d.src = b;
			a.google_image_requests.push(d)
		};
	var zb = function(a, b, c, d) {
			this.C = a;
			this.R = b;
			this.o = c;
			this.s = null;
			this.P = this.B;
			this.g = d;
			this.G = !1
		},
		Cb = function(a) {
			return new Ab(Bb(a), a.fileName, a.lineNumber)
		},
		Bb = function(a) {
			var b = a.toString();
			a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
			a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
			if (a.stack) {
				a = a.stack;
				var c = b;
				try {
					-1 == a.indexOf(c) && (a = c + "\n" + a);
					for (var d; a != d;) d = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
					b = a.replace(/\n */g, "\n")
				} catch (e) {
					b = c
				}
			}
			return b
		},
		Db = function(a, b, c) {
			var d, e;
			try {
				a.g && a.g.f ? (e = a.g.start(b.toString(), 3), d = c(), a.g.end(e)) : d = c()
			} catch (k) {
				var f = a.o;
				try {
					a.g && e && a.g.v(e);
					var g = Cb(k),
						f = a.P.call(a, b, g, void 0, void 0)
				} catch (m) {
					a.B(217, m)
				}
				if (!f) throw k;
			} finally {}
			return d
		},
		C = function(a, b) {
			var c = Eb;
			return function() {
				for (var d = [], e = 0; e < arguments.length; ++e) d[e] = arguments[e];
				return Db(c, a, function() {
					return b.apply(void 0, d)
				})
			}
		};
	zb.prototype.B = function(a, b, c, d, e) {
		try {
			var f = e || this.R,
				g = new rb;
			g.u = !0;
			B(g, 1, "context", a);
			b instanceof Ab || (b = Cb(b));
			B(g, 2, "msg", b.message.substring(0, 512));
			b.fileName && B(g, 3, "file", b.fileName);
			0 < b.lineNumber && B(g, 4, "line", b.lineNumber.toString());
			b = {};
			if (this.s) try {
				this.s(b)
			} catch (ba) {}
			if (d) try {
				d(b)
			} catch (ba) {}
			d = [b];
			g.c.push(5);
			g.h[5] = d;
			var k;
			e = h;
			d = [];
			var m, p = null;
			do {
				b = e;
				lb(b) ? (m = b.location.href, p = b.document && b.document.referrer || null) : (m = p, p = null);
				d.push(new qb(m || ""));
				try {
					e = b.parent
				} catch (ba) {
					e = null
				}
			} while (e && b != e);
			m = 0;
			for (var n = d.length - 1; m <= n; ++m) d[m].depth = n - m;
			b = h;
			if (b.location && b.location.ancestorOrigins && b.location.ancestorOrigins.length == d.length - 1)
				for (m = 1; m < d.length; ++m) {
					var Fa = d[m];
					Fa.url || (Fa.url = b.location.ancestorOrigins[m - 1] || "", Fa.w = !0)
				}
			for (var Ha = new qb(h.location.href, !1), Ia = d.length - 1, n = Ia; 0 <= n; --n) {
				var G = d[n];
				if (G.url && !G.w) {
					Ha = G;
					break
				}
			}
			var G = null,
				Ac = d.length && d[Ia].url;
			0 != Ha.depth && Ac && (G = d[Ia]);
			k = new pb(Ha, G);
			k.F && B(g, 6, "top", k.F.url || "");
			B(g, 7, "url", k.D.url || "");
			yb(this.C, f, g, this.G, c)
		} catch (ba) {
			try {
				yb(this.C, f, {
					context: "ecmserr",
					rctx: a,
					msg: Bb(ba),
					url: k.D.url
				}, this.G, c)
			} catch (Pc) {}
		}
		return this.o
	};
	var Ab = function(a, b, c) {
		this.message = a;
		this.fileName = b || "";
		this.lineNumber = c || -1
	};
	var Fb;
	if (!(Fb = !Ga && !y)) {
		var Gb;
		if (Gb = y) Gb = 9 <= Number(Xa);
		Fb = Gb
	}
	Fb || Ga && Wa("1.9.1");
	y && Wa("9");
	var D = function(a, b) {
		this.width = a;
		this.height = b
	};
	D.prototype.clone = function() {
		return new D(this.width, this.height)
	};
	D.prototype.ceil = function() {
		this.width = Math.ceil(this.width);
		this.height = Math.ceil(this.height);
		return this
	};
	D.prototype.floor = function() {
		this.width = Math.floor(this.width);
		this.height = Math.floor(this.height);
		return this
	};
	D.prototype.round = function() {
		this.width = Math.round(this.width);
		this.height = Math.round(this.height);
		return this
	};
	D.prototype.scale = function(a, b) {
		this.width *= a;
		this.height *= "number" == typeof b ? b : a;
		return this
	};
	var E = document,
		t = window;
	var Hb = null,
		F = function(a, b) {
			xb(a, b, void 0)
		},
		Ib = function() {
			if (!E.body) return !1;
			if (!Hb) {
				var a = E.createElement("iframe");
				a.style.display = "none";
				a.id = "anonIframe";
				Hb = a;
				E.body.appendChild(a)
			}
			return !0
		},
		Jb = !!window.google_async_iframe_id,
		H = Jb && window.parent || window;
	var Eb, I;
	if (Jb && !lb(H)) {
		var Kb = "." + E.domain;
		try {
			for (; 2 < Kb.split(".").length && !lb(H);) E.domain = Kb = Kb.substr(Kb.indexOf(".") + 1), H = window.parent
		} catch (a) {}
		lb(H) || (H = window)
	}
	I = H;
	var Lb = new z(1, I);
	Eb = new zb(new function() {
		this.U = "http:" === t.location.protocol ? "http:" : "https:";
		this.O = "pagead2.googlesyndication.com";
		this.T = "/pagead/gen_204?id=";
		this.N = .01;
		this.V = Math.random()
	}, "jserror", !0, Lb);
	"complete" == I.document.readyState ? I.google_measure_js_timing || Lb.disable() : Lb.f && A(I, "load", function() {
		I.google_measure_js_timing || Lb.disable()
	});
	var J = function(a, b) {
		return C(a, b)
	};
	var Mb = {
		L: "ud=1",
		K: "ts=0",
		aa: "sc=1",
		H: "gz=1",
		J: "sl=1",
		ba: "efp=1",
		Z: "dcl=1",
		$: "mlc=1",
		Y: "rafv=1",
		X: "rafx=1",
		I: "opp=1"
	};
	if (E && E.URL) {
		var nb = E.URL,
			Nb = !(nb && 0 < ob().length);
		Eb.o = Nb
	}
	var K = function(a, b, c, d) {
			A(a, b, C(d, c), {
				capture: void 0
			})
		},
		Ob = function() {
			var a = L,
				b = ["IMG", "FRAME", "IFRAME"];
			return qa(b, function(b) {
				return a.nodeName == String(b)
			}) ? [a] : pa(b, function(b, d) {
				return b.concat(ra((a || document).getElementsByTagName(String(d))))
			}, [])
		},
		Qb = function() {
			for (var a = Pb, b = 0, c = null, d = Ob(), e = 0; e < d.length; e++) {
				var f = !1,
					c = d[e];
				switch (c.nodeName) {
					case "IMG":
						if (c.complete || c.naturalWidth) f = !0;
						break;
					case "FRAME":
					case "IFRAME":
						"complete" == c.readyState && (f = !0)
				}
				f || (b++, K(c, "load", function() {
					b--;
					b || a(null)
				}, 116))
			}
			d = c = null;
			b || a(null)
		},
		Rb = function(a, b) {
			var c = 0,
				d = function() {
					a();
					c++;
					10 > c && t.setTimeout(C(b, d), 100)
				};
			d()
		};
	var Sb = function(a, b) {
			this.b = a || 0;
			this.a = b || ""
		},
		Tb = function(a, b) {
			a.b && (b[4] = a.b);
			a.a && (b[12] = a.a)
		};
	Sb.prototype.match = function(a) {
		return (this.b || this.a) && (a.b || a.a) ? this.a || a.a ? this.a == a.a : this.b || a.b ? this.b == a.b : !1 : !1
	};
	Sb.prototype.toString = function() {
		var a = "" + this.b;
		this.a && (a += "-" + this.a);
		return a
	};
	var Ub = function() {
			var a = M,
				b = [];
			a.b && b.push("adk=" + a.b);
			a.a && b.push("exk=" + a.a);
			return b
		},
		Vb = function(a) {
			var b = [];
			va(a, function(a, d) {
				d = encodeURIComponent(d);
				l(a) && (a = encodeURIComponent(a));
				b.push(d + "=" + a)
			});
			b.push("24=" + (new Date).getTime());
			return b.join("\n")
		},
		N = 0,
		Wb = 0,
		Xb = function(a) {
			var b = 0,
				c = t;
			try {
				if (c && c.Goog_AdSense_getAdAdapterInstance) return c
			} catch (d) {}
			for (; c && 5 > b;) {
				try {
					if (c.google_osd_static_frame) return c
				} catch (d) {}
				try {
					if (c.aswift_0 && (!a || c.aswift_0.google_osd_static_frame)) return c.aswift_0
				} catch (d) {}
				b++;
				c = c != c.parent ? c.parent : null
			}
			return null
		},
		Yb = function(a, b, c, d, e, f) {
			f = f || aa;
			if (10 < Wb) t.clearInterval(N), f();
			else if (++Wb, t.postMessage && (b.b || b.a)) {
				if (f = Xb(!0)) {
					var g = {};
					Tb(b, g);
					g[0] = "goog_request_monitoring";
					g[6] = a;
					g[16] = c;
					d && d.length && (g[17] = d.join(","));
					e && (g[19] = e);
					try {
						var k = Vb(g);
						f.postMessage(k, "*")
					} catch (m) {}
				}
			} else t.clearInterval(N), f()
		},
		Zb = function(a) {
			var b = Xb(!1),
				c = !b;
			!b && t && (b = t.parent);
			if (b && b.postMessage) try {
				b.postMessage(a, "*"), c && t.postMessage(a, "*")
			} catch (d) {}
		};
	var O = !1,
		$b = function(a) {
			if (a = a.match(/[\d]+/g)) a.length = 3
		};
	(function() {
		if (navigator.plugins && navigator.plugins.length) {
			var a = navigator.plugins["Shockwave Flash"];
			if (a && (O = !0, a.description)) {
				$b(a.description);
				return
			}
			if (navigator.plugins["Shockwave Flash 2.0"]) {
				O = !0;
				return
			}
		}
		if (navigator.mimeTypes && navigator.mimeTypes.length && (a = navigator.mimeTypes["application/x-shockwave-flash"], O = !(!a || !a.enabledPlugin))) {
			$b(a.enabledPlugin.description);
			return
		}
		try {
			var b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
			O = !0;
			$b(b.GetVariable("$version"));
			return
		} catch (c) {}
		try {
			b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
			O = !0;
			return
		} catch (c) {}
		try {
			b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), O = !0, $b(b.GetVariable("$version"))
		} catch (c) {}
	})();
	(function() {
		var a;
		return La ? (a = /Windows NT ([0-9.]+)/, (a = a.exec(u)) ? a[1] : "0") : Ka ? (a = /10[_.][0-9_.]+/, (a = a.exec(u)) ? a[0].replace(/_/g, ".") : "10") : Ma ? (a = /Android\s+([^\);]+)(\)|;)/, (a = a.exec(u)) ? a[1] : "") : Na || Oa || Pa ? (a = /(?:iPhone|CPU)\s+OS\s+(\S+)/, (a = a.exec(u)) ? a[1].replace(/_/g, ".") : "") : ""
	})();
	var P = function(a) {
		return (a = a.exec(u)) ? a[1] : ""
	};
	(function() {
		if (Za) return P(/Firefox\/([0-9.]+)/);
		if (y || Ea || Da) return Va;
		if (cb) return x() || v("iPad") || v("iPod") ? P(/CriOS\/([0-9.]+)/) : P(/Chrome\/([0-9.]+)/);
		if (db && !(x() || v("iPad") || v("iPod"))) return P(/Version\/([0-9.]+)/);
		if ($a || ab) {
			var a = /Version\/(\S+).*Mobile\/(\S+)/.exec(u);
			if (a) return a[1] + "." + a[2]
		} else if (bb) return (a = P(/Android\s+([0-9.]+)/)) ? a : P(/Version\/([0-9.]+)/);
		return ""
	})();
	var ac = function() {
			var a = t;
			return null !== a && a.top != a
		},
		cc = function() {
			var a = ac(),
				b = a && 0 <= "//tpc.googlesyndication.com".indexOf(t.location.host);
			if (a && t.name && (0 == t.name.indexOf("google_ads_iframe") || 0 == t.name.indexOf("google_ads_frame")) || b) {
				var c;
				a = t || t;
				try {
					var d;
					if (a.document && !a.document.body) d = new D(-1, -1);
					else {
						var e = (a || window).document,
							f = "CSS1Compat" == e.compatMode ? e.documentElement : e.body;
						d = (new D(f.clientWidth, f.clientHeight)).round()
					}
					c = d
				} catch (g) {
					c = new D(-12245933, -12245933)
				}
				return bc(c)
			}
			c = (t.document || document).getElementsByTagName("SCRIPT");
			return 0 < c.length && (c = c[c.length - 1], c.parentElement && c.parentElement.id && 0 < c.parentElement.id.indexOf("_ad_container")) ? bc(void 0, c.parentElement) : null
		},
		bc = function(a, b) {
			var c = dc("IMG", a, b);
			return c ? c : (c = dc("IFRAME", a, b)) ? c : (c = dc("DIV", a, b)) ? c : (a = dc("OBJECT", a, b)) ? a : null
		},
		dc = function(a, b, c) {
			var d = document;
			c = c || d;
			d = a && "*" != a ? String(a).toUpperCase() : "";
			c = c.querySelectorAll && c.querySelector && d ? c.querySelectorAll(d + "") : c.getElementsByTagName(d || "*");
			for (d = 0; d < c.length; d++) {
				var e = c[d];
				if ("OBJECT" == a) a: {
					var f = e.getAttribute("height");
					if (null != f && 0 < f && 0 == e.clientHeight)
						for (var f = e.children, g = 0; g < f.length; g++) {
							var k = f[g];
							if ("OBJECT" == k.nodeName || "EMBED" == k.nodeName) {
								e = k;
								break a
							}
						}
				}
				f = e.clientHeight;
				g = e.clientWidth;
				if (k = b) k = new D(g, f), k = Math.abs(b.width - k.width) < .1 * b.width && Math.abs(b.height - k.height) < .1 * b.height;
				if (k || !b && 10 < f && 10 < g) return e
			}
			return null
		};
	var Q = 0,
		R = "",
		S = [],
		T = !1,
		U = !1,
		V = !1,
		ec = !0,
		fc = !1,
		gc = !1,
		hc = !1,
		ic = !1,
		jc = !1,
		kc = 0,
		lc = 0,
		W = 0,
		mc = 0,
		nc = [],
		M = null,
		oc = "",
		pc = [],
		qc = null,
		rc = [],
		sc = !1,
		tc = "",
		uc = "",
		vc = (new Date).getTime(),
		L = null,
		wc = !1,
		xc = ["1", "0", "3"],
		X = 0,
		Y = 0,
		yc = 0,
		zc = "",
		Bc = !1,
		Dc = function(a, b, c) {
			T && (ec || 3 != (c || 3) || gc) && Cc(a, b, !0);
			if (V || U && fc) Cc(a, b), U = V = !1
		},
		Ec = function() {
			var a = qc;
			return a ? 2 != a() : !0
		},
		Cc = function(a, b, c) {
			if ((b = b || oc) && !sc && (2 == Y || c) && Ec()) {
				for (var d = 0; d < S.length; ++d) {
					var e = Fc(S[d], b, c);
					F(a, e)
				}
				ic = !0;
				c ? T = !1 : sc = !0
			}
		},
		Gc = function(a, b) {
			var c = [];
			a && c.push("avi=" + a);
			b && c.push("cid=" + b);
			return c.length ? "//pagead2.googlesyndication.com/activeview?" + c.join("&") : "//pagead2.googlesyndication.com/activeview"
		},
		Fc = function(a, b, c) {
			c = c ? "osdim" : V ? "osd2" : "osdtos";
			a = [a, -1 < a.indexOf("?") ? "&id=" : "?id=", c];
			"osd2" == c && U && fc && a.push("&ts=1");
			a.push("&ti=1");
			a.push("&", b);
			a.push("&uc=" + yc);
			null != L ? a.push("&tgt=" + (null != L ? L.tagName : "")) : a.push("&tgt=nf");
			a.push("&cl=" + (wc ? 1 : 0));
			jc && (a.push("&lop=1"), b = q() - kc, a.push("&tslp=" + b));
			mc && a.push("&sle=" + mc);
			b = a.join("");
			for (a = 0; a < pc.length; a++) {
				try {
					var d = pc[a]()
				} catch (e) {}
				c = "max_length";
				2 <= d.length && (3 == d.length && (c = d[2]), b = ha(b, encodeURIComponent(d[0]), encodeURIComponent(d[1]), c))
			}
			2E3 < b.length && (b = b.substring(0, 2E3));
			return b
		},
		Z = function(a) {
			if (tc) {
				try {
					var b = ha(tc, "vi", a);
					Ib() && F(Hb.contentWindow, b)
				} catch (c) {}
				0 <= ma(xc, a) && (tc = "")
			}
		},
		Hc = function() {
			Z("-1")
		},
		Jc = function(a) {
			if (a && a.data && l(a.data)) {
				var b;
				var c = a.data;
				if (l(c)) {
					b = {};
					for (var c = c.split("\n"), d = 0; d < c.length; d++) {
						var e = c[d].indexOf("=");
						if (!(0 >= e)) {
							var f = Number(c[d].substr(0, e)),
								e = c[d].substr(e + 1);
							switch (f) {
								case 5:
								case 8:
								case 11:
								case 26:
								case 15:
								case 16:
								case 18:
									e = "true" == e;
									break;
								case 4:
								case 7:
								case 6:
								case 14:
								case 20:
								case 21:
								case 22:
								case 23:
								case 24:
								case 25:
									e = Number(e);
									break;
								case 3:
								case 19:
									if ("function" == ca(decodeURIComponent)) try {
										e = decodeURIComponent(e)
									} catch (k) {
										throw Error("Error: URI malformed: " + e);
									}
									break;
								case 17:
									e = oa(decodeURIComponent(e).split(","), Number)
							}
							b[f] = e
						}
					}
					b = b[0] ? b : null
				} else b = null;
				if (b && (c = new Sb(b[4], b[12]), M && M.match(c))) {
					for (c = 0; c < rc.length; c++) rc[c](b);
					b && (c = 100 * b[25], "number" == typeof c && !isNaN(c) && (window.document["4CGeArbVQ"] = c | 0));
					void 0 != b[18] && (gc = b[18], gc || 2 != W || (W = 3, Ic()));
					Bc && void 0 != b[7] && 0 < b[7] && (c = t, d = "//pagead2.googlesyndication.com/pagead/gen_204?id=ac_opp&vsblt=" + b[7], R && (d += "&avi=" + R), F(c, d), Bc = !1);
					c = b[0];
					if ("goog_acknowledge_monitoring" == c) t.clearInterval(N), X = 2;
					else if ("goog_get_mode" == c) {
						X = 1;
						d = {};
						M && Tb(M, d);
						d[0] = "goog_provide_mode";
						d[6] = Y;
						d[19] = zc;
						d[16] = U;
						try {
							var g = Vb(d);
							a.source.postMessage(g, a.origin)
						} catch (k) {}
						t.clearInterval(N);
						X = 2
					} else "goog_update_data" == c ? (oc = b[3], ++yc) : "goog_image_request" == c && (Dc(t, b[3]), b[5] || b[11] || Z("0"));
					if ("goog_update_data" == c || "goog_image_request" == c)(1 == Y || 2 == Y || T) && b[5] && (a = 1 == b[15] && "goog_update_data" == c, fc = !0, Z("1"), uc && Ec() && (g = uc, Ib() && F(Hb.contentWindow, g), uc = ""), T && !a && (Cc(t, void 0, !0), hc = !0, lc = q()), 3 == W && (W = 4, Ic()), T || 1 != Y || (sc = !0)), (1 == Y || 2 == Y || T) && b[11] && (U = !1, Z("3"), T && (Cc(t, void 0, !0), 1 == W && gc && (W = 2)))
				}
			}
		},
		Ic = function() {
			var a = t,
				b = W;
			0 != b && 1 != b && Kc(a, "osdim", "zas=" + b)
		},
		Kc = function(a, b, c) {
			var d = [];
			R && d.push("avi=" + R);
			d.push("id=" + b);
			d.push("ovr_value=" + Q);
			jc && d.push("lop=1");
			M && (d = d.concat(Ub()));
			d.push("tt=" + ((new Date).getTime() - vc));
			d.push(c);
			a.document && a.document.referrer && d.push("ref=" + encodeURIComponent(a.document.referrer));
			try {
				F(a, "//pagead2.googlesyndication.com/pagead/gen_204?" + d.join("&"))
			} catch (e) {}
		},
		Lc = function() {
			Dc(t);
			Z("0");
			2 > X && !U && 2 == Y && Kc(t, "osd2", "hs=" + X)
		},
		Mc = function() {
			var a = {};
			Tb(M, a);
			a[0] = "goog_dom_content_loaded";
			var b = Vb(a);
			try {
				Rb(function() {
					Zb(b)
				}, 114)
			} catch (c) {}
		},
		Pb = function() {
			var a = {};
			Tb(M, a);
			a[0] = "goog_creative_loaded";
			var b = Vb(a);
			Rb(function() {
				Zb(b)
			}, 115);
			wc = !0
		},
		Nc = function(a) {
			if (l(a)) {
				a = a.split("&");
				for (var b = a.length - 1; 0 <= b; b--) {
					var c = a[b],
						d = Mb;
					c == d.L ? (ec = !1, a.splice(b, 1)) : c == d.H ? (W = 1, a.splice(b, 1)) : c == d.J ? (mc = 1, a.splice(b, 1)) : c == d.K ? (U = !1, a.splice(b, 1)) : c == d.I && (Bc = !0, a.splice(b, 1))
				}
				zc = a.join("&")
			}
		},
		Oc = function() {
			null == L && (L = cc(), null != L && (1 == mc ? Qb() : L.complete || L.naturalWidth ? Pb() : K(L, "load", Pb, 116)))
		};
	r("osdlfm", J(123, function(a, b, c, d, e, f, g, k, m, p) {
		Q = a;
		tc = b;
		uc = d;
		T = f;
		g && Nc(g);
		U = f;
		1 == k ? nc.push(947190538) : 2 == k ? nc.push(947190541) : 3 == k && nc.push(947190542);
		M = new Sb(e, ia());
		K(t, "load", Hc, 117);
		K(t, "message", Jc, 118);
		R = c || "";
		S = [p || Gc(c, m)];
		K(t, "unload", Lc, 119);
		var n = t.document;
		!n.readyState || "complete" != n.readyState && "loaded" != n.readyState ? !xa() || 0 <= la(za(), 11) ? K(n, "DOMContentLoaded", Mc, 121) : K(n, "readystatechange", function() {
			"complete" != n.readyState && "loaded" != n.readyState || Mc()
		}, 120) : Mc(); - 1 == Q ? Y = f ? 3 : 1 : -2 == Q ? Y = 3 : 0 < Q && (Y = 2, V = !0);
		U && !V && -1 == Q && (Y = 2);
		M && (M.b || M.a) && (X = 1, N = t.setInterval(C(197, ga(Yb, Y, M, U, nc, zc, void 0)), 500));
		Rb(Oc, 122)
	}));
	r("osdlac", J(124, function(a) {
		pc.push(a)
	}));
	r("osdlamrc", J(125, function(a) {
		rc.push(a)
	}));
	r("osdsir", C(126, Dc));
	r("osdacrc", J(127, function(a) {
		qc = a
	}));
	r("osdpcls", J(128, function(a) {
		var b = /^(http[s]?:)?\/\//.test(a) ? a : Gc(a);
		if (jc && 0 <= ma(S, b)) return !0;
		if (!a || !ac() || sc || ic && !hc) return !1;
		jc = !0;
		if (hc) {
			a = Fc(b, oc, !0);
			var c = q() - lc;
			a = kb(a, "tsvp", c);
			F(t, a)
		}
		S.push(b);
		kc = q();
		return !0
	}));
}).call(this);