import * as e from "../../../../../assets/svelte/svelte_internal_client.js";
import "../../../../../assets/svelte/svelte_internal_flags_legacy.js";
import { getContext as br, untrack as Bt, onMount as _r, tick as Dr } from "../../../../../assets/svelte/svelte_svelte.js";
import { spring as Pt } from "../../../../../assets/svelte/svelte_motion.js";
import "../../../../../assets/svelte/svelte_transition.js";
var kr = e.from_svg('<svg class="resize-handle svelte-1stq1b1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10"><line x1="1" y1="9" x2="9" y2="1" stroke="gray" stroke-width="0.5" class="svelte-1stq1b1"></line><line x1="5" y1="9" x2="9" y2="5" stroke="gray" stroke-width="0.5" class="svelte-1stq1b1"></line></svg>'), xr = e.from_html("<!> <!>", 1), Fr = e.from_html('<div class="placeholder svelte-1stq1b1"></div>'), Er = e.from_html("<!> <!>", 1);
function yr(l, t) {
  e.push(t, !1);
  let r = e.prop(t, "height", 8, void 0), n = e.prop(t, "min_height", 8, void 0), i = e.prop(t, "max_height", 8, void 0), a = e.prop(t, "width", 8, void 0), s = e.prop(t, "elem_id", 8, ""), o = e.prop(t, "elem_classes", 24, () => []), u = e.prop(t, "variant", 8, "solid"), v = e.prop(t, "border_mode", 8, "base"), f = e.prop(t, "padding", 8, !0), k = e.prop(t, "type", 8, "normal"), b = e.prop(t, "test_id", 8, void 0), F = e.prop(t, "explicit_call", 8, !1), I = e.prop(t, "container", 8, !0), y = e.prop(t, "visible", 8, !0), x = e.prop(t, "allow_overflow", 8, !0), A = e.prop(t, "overflow_behavior", 8, "auto"), c = e.prop(t, "scale", 8, null), d = e.prop(t, "min_width", 8, 0), p = e.prop(t, "flex", 12, !1), h = e.prop(t, "resizable", 8, !1), g = e.prop(t, "rtl", 8, !1), m = e.prop(t, "fullscreen", 12, !1), E = e.mutable_source(m()), w = e.mutable_source(), R = k() === "fieldset" ? "fieldset" : "div", U = e.mutable_source(0), J = e.mutable_source(0), L = e.mutable_source(null);
  function pe(_) {
    m() && _.key === "Escape" && m(!1);
  }
  const me = (_) => {
    if (_ !== void 0) {
      if (typeof _ == "number")
        return _ + "px";
      if (typeof _ == "string")
        return _;
    }
  }, He = (_) => {
    let T = _.clientY;
    const S = (N) => {
      const C = N.clientY - T;
      T = N.clientY, e.mutate(w, e.get(w).style.height = `${e.get(w).offsetHeight + C}px`);
    }, $ = () => {
      window.removeEventListener("mousemove", S), window.removeEventListener("mouseup", $);
    };
    window.addEventListener("mousemove", S), window.addEventListener("mouseup", $);
  };
  e.legacy_pre_effect(
    () => (e.deep_read_state(m()), e.get(E), e.get(w)),
    () => {
      m() !== e.get(E) && (e.set(E, m()), m() ? (e.set(L, e.get(w).getBoundingClientRect()), e.set(U, e.get(w).offsetHeight), e.set(J, e.get(w).offsetWidth), window.addEventListener("keydown", pe)) : (e.set(L, null), window.removeEventListener("keydown", pe)));
    }
  ), e.legacy_pre_effect(() => e.deep_read_state(y()), () => {
    y() || p(!1);
  }), e.legacy_pre_effect_reset(), e.init();
  var ue = e.comment(), G = e.first_child(ue);
  {
    var ae = (_) => {
      var T = Er(), S = e.first_child(T);
      e.element(S, () => R, !1, (C, B) => {
        e.bind_this(C, (V) => e.set(w, V), () => e.get(w)), e.attribute_effect(
          C,
          (V, ee) => ({
            "data-testid": b(),
            id: s(),
            class: `block ${V ?? ""}`,
            dir: g() ? "rtl" : "ltr",
            style: "",
            [e.CLASS]: {
              hidden: y() === "hidden",
              padded: f(),
              flex: p(),
              border_focus: v() === "focus",
              border_contrast: v() === "contrast",
              "hide-container": !F() && !I(),
              fullscreen: m(),
              animating: m() && e.get(L) !== null,
              "auto-margin": c() === null
            },
            [e.STYLE]: ee
          }),
          [
            () => (e.deep_read_state(o()), e.untrack(() => o()?.join(" ") || "")),
            () => ({
              height: (e.deep_read_state(m()), e.deep_read_state(r()), e.untrack(() => m() ? void 0 : me(r()))),
              "min-height": (e.deep_read_state(m()), e.deep_read_state(n()), e.untrack(() => m() ? void 0 : me(n()))),
              "max-height": (e.deep_read_state(m()), e.deep_read_state(i()), e.untrack(() => m() ? void 0 : me(i()))),
              "--start-top": (e.get(L), e.untrack(() => e.get(L) ? `${e.get(L).top}px` : "0px")),
              "--start-left": (e.get(L), e.untrack(() => e.get(L) ? `${e.get(L).left}px` : "0px")),
              "--start-width": (e.get(L), e.untrack(() => e.get(L) ? `${e.get(L).width}px` : "0px")),
              "--start-height": (e.get(L), e.untrack(() => e.get(L) ? `${e.get(L).height}px` : "0px")),
              width: (e.deep_read_state(m()), e.deep_read_state(a()), e.untrack(() => m() ? void 0 : typeof a() == "number" ? `calc(min(${a()}px, 100%))` : me(a()))),
              "border-style": u(),
              overflow: x() ? A() : "hidden",
              "flex-grow": c(),
              "min-width": `calc(min(${d()}px, 100%))`,
              "border-width": "var(--block-border-width)"
            })
          ],
          void 0,
          void 0,
          "svelte-1stq1b1"
        );
        var M = xr(), P = e.first_child(M);
        e.slot(P, t, "default", {}, null);
        var X = e.sibling(P, 2);
        {
          var W = (V) => {
            var ee = kr();
            e.event("mousedown", ee, He), e.append(V, ee);
          };
          e.if(X, (V) => {
            h() && V(W);
          });
        }
        e.append(B, M);
      });
      var $ = e.sibling(S, 2);
      {
        var N = (C) => {
          var B = Fr();
          let M;
          e.template_effect(() => M = e.set_style(B, "", M, {
            height: e.get(U) + "px",
            width: e.get(J) + "px"
          })), e.append(C, B);
        };
        e.if($, (C) => {
          m() && C(N);
        });
      }
      e.append(_, T);
    };
    e.if(G, (_) => {
      (y() === !0 || y() === "hidden") && _(ae);
    });
  }
  e.append(l, ue), e.pop();
}
function Lt() {
  return {
    async: !1,
    breaks: !1,
    extensions: null,
    gfm: !0,
    hooks: null,
    pedantic: !1,
    renderer: null,
    silent: !1,
    tokenizer: null,
    walkTokens: null
  };
}
let je = Lt();
function ir(l) {
  je = l;
}
const or = /[&<>"']/, Cr = new RegExp(or.source, "g"), lr = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, Ar = new RegExp(lr.source, "g"), Tr = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, Ht = (l) => Tr[l];
function ge(l, t) {
  if (t) {
    if (or.test(l))
      return l.replace(Cr, Ht);
  } else if (lr.test(l))
    return l.replace(Ar, Ht);
  return l;
}
const Br = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function Sr(l) {
  return l.replace(Br, (t, r) => (r = r.toLowerCase(), r === "colon" ? ":" : r.charAt(0) === "#" ? r.charAt(1) === "x" ? String.fromCharCode(parseInt(r.substring(2), 16)) : String.fromCharCode(+r.substring(1)) : ""));
}
const Lr = /(^|[^\[])\^/g;
function Z(l, t) {
  let r = typeof l == "string" ? l : l.source;
  t = t || "";
  const n = {
    replace: (i, a) => {
      let s = typeof a == "string" ? a : a.source;
      return s = s.replace(Lr, "$1"), r = r.replace(i, s), n;
    },
    getRegex: () => new RegExp(r, t)
  };
  return n;
}
function qt(l) {
  try {
    l = encodeURI(l).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return l;
}
const st = { exec: () => null };
function Zt(l, t) {
  const r = l.replace(/\|/g, (a, s, o) => {
    let u = !1, v = s;
    for (; --v >= 0 && o[v] === "\\"; )
      u = !u;
    return u ? "|" : " |";
  }), n = r.split(/ \|/);
  let i = 0;
  if (n[0].trim() || n.shift(), n.length > 0 && !n[n.length - 1].trim() && n.pop(), t)
    if (n.length > t)
      n.splice(t);
    else
      for (; n.length < t; )
        n.push("");
  for (; i < n.length; i++)
    n[i] = n[i].trim().replace(/\\\|/g, "|");
  return n;
}
function pt(l, t, r) {
  const n = l.length;
  if (n === 0)
    return "";
  let i = 0;
  for (; i < n && l.charAt(n - i - 1) === t; )
    i++;
  return l.slice(0, n - i);
}
function Rr(l, t) {
  if (l.indexOf(t[1]) === -1)
    return -1;
  let r = 0;
  for (let n = 0; n < l.length; n++)
    if (l[n] === "\\")
      n++;
    else if (l[n] === t[0])
      r++;
    else if (l[n] === t[1] && (r--, r < 0))
      return n;
  return -1;
}
function Ut(l, t, r, n) {
  const i = t.href, a = t.title ? ge(t.title) : null, s = l[1].replace(/\\([\[\]])/g, "$1");
  if (l[0].charAt(0) !== "!") {
    n.state.inLink = !0;
    const o = {
      type: "link",
      raw: r,
      href: i,
      title: a,
      text: s,
      tokens: n.inlineTokens(s)
    };
    return n.state.inLink = !1, o;
  }
  return {
    type: "image",
    raw: r,
    href: i,
    title: a,
    text: ge(s)
  };
}
function Ir(l, t) {
  const r = l.match(/^(\s+)(?:```)/);
  if (r === null)
    return t;
  const n = r[1];
  return t.split(`
`).map((i) => {
    const a = i.match(/^\s+/);
    if (a === null)
      return i;
    const [s] = a;
    return s.length >= n.length ? i.slice(n.length) : i;
  }).join(`
`);
}
class vt {
  options;
  rules;
  // set by the lexer
  lexer;
  // set by the lexer
  constructor(t) {
    this.options = t || je;
  }
  space(t) {
    const r = this.rules.block.newline.exec(t);
    if (r && r[0].length > 0)
      return {
        type: "space",
        raw: r[0]
      };
  }
  code(t) {
    const r = this.rules.block.code.exec(t);
    if (r) {
      const n = r[0].replace(/^ {1,4}/gm, "");
      return {
        type: "code",
        raw: r[0],
        codeBlockStyle: "indented",
        text: this.options.pedantic ? n : pt(n, `
`)
      };
    }
  }
  fences(t) {
    const r = this.rules.block.fences.exec(t);
    if (r) {
      const n = r[0], i = Ir(n, r[3] || "");
      return {
        type: "code",
        raw: n,
        lang: r[2] ? r[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : r[2],
        text: i
      };
    }
  }
  heading(t) {
    const r = this.rules.block.heading.exec(t);
    if (r) {
      let n = r[2].trim();
      if (/#$/.test(n)) {
        const i = pt(n, "#");
        (this.options.pedantic || !i || / $/.test(i)) && (n = i.trim());
      }
      return {
        type: "heading",
        raw: r[0],
        depth: r[1].length,
        text: n,
        tokens: this.lexer.inline(n)
      };
    }
  }
  hr(t) {
    const r = this.rules.block.hr.exec(t);
    if (r)
      return {
        type: "hr",
        raw: r[0]
      };
  }
  blockquote(t) {
    const r = this.rules.block.blockquote.exec(t);
    if (r) {
      let n = r[0].replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g, `
    $1`);
      n = pt(n.replace(/^ *>[ \t]?/gm, ""), `
`);
      const i = this.lexer.state.top;
      this.lexer.state.top = !0;
      const a = this.lexer.blockTokens(n);
      return this.lexer.state.top = i, {
        type: "blockquote",
        raw: r[0],
        tokens: a,
        text: n
      };
    }
  }
  list(t) {
    let r = this.rules.block.list.exec(t);
    if (r) {
      let n = r[1].trim();
      const i = n.length > 1, a = {
        type: "list",
        raw: "",
        ordered: i,
        start: i ? +n.slice(0, -1) : "",
        loose: !1,
        items: []
      };
      n = i ? `\\d{1,9}\\${n.slice(-1)}` : `\\${n}`, this.options.pedantic && (n = i ? n : "[*+-]");
      const s = new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      let o = "", u = "", v = !1;
      for (; t; ) {
        let f = !1;
        if (!(r = s.exec(t)) || this.rules.block.hr.test(t))
          break;
        o = r[0], t = t.substring(o.length);
        let k = r[2].split(`
`, 1)[0].replace(/^\t+/, (A) => " ".repeat(3 * A.length)), b = t.split(`
`, 1)[0], F = 0;
        this.options.pedantic ? (F = 2, u = k.trimStart()) : (F = r[2].search(/[^ ]/), F = F > 4 ? 1 : F, u = k.slice(F), F += r[1].length);
        let I = !1;
        if (!k && /^ *$/.test(b) && (o += b + `
`, t = t.substring(b.length + 1), f = !0), !f) {
          const A = new RegExp(`^ {0,${Math.min(3, F - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), c = new RegExp(`^ {0,${Math.min(3, F - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), d = new RegExp(`^ {0,${Math.min(3, F - 1)}}(?:\`\`\`|~~~)`), p = new RegExp(`^ {0,${Math.min(3, F - 1)}}#`);
          for (; t; ) {
            const h = t.split(`
`, 1)[0];
            if (b = h, this.options.pedantic && (b = b.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), d.test(b) || p.test(b) || A.test(b) || c.test(t))
              break;
            if (b.search(/[^ ]/) >= F || !b.trim())
              u += `
` + b.slice(F);
            else {
              if (I || k.search(/[^ ]/) >= 4 || d.test(k) || p.test(k) || c.test(k))
                break;
              u += `
` + b;
            }
            !I && !b.trim() && (I = !0), o += h + `
`, t = t.substring(h.length + 1), k = b.slice(F);
          }
        }
        a.loose || (v ? a.loose = !0 : /\n *\n *$/.test(o) && (v = !0));
        let y = null, x;
        this.options.gfm && (y = /^\[[ xX]\] /.exec(u), y && (x = y[0] !== "[ ] ", u = u.replace(/^\[[ xX]\] +/, ""))), a.items.push({
          type: "list_item",
          raw: o,
          task: !!y,
          checked: x,
          loose: !1,
          text: u,
          tokens: []
        }), a.raw += o;
      }
      a.items[a.items.length - 1].raw = o.trimEnd(), a.items[a.items.length - 1].text = u.trimEnd(), a.raw = a.raw.trimEnd();
      for (let f = 0; f < a.items.length; f++)
        if (this.lexer.state.top = !1, a.items[f].tokens = this.lexer.blockTokens(a.items[f].text, []), !a.loose) {
          const k = a.items[f].tokens.filter((F) => F.type === "space"), b = k.length > 0 && k.some((F) => /\n.*\n/.test(F.raw));
          a.loose = b;
        }
      if (a.loose)
        for (let f = 0; f < a.items.length; f++)
          a.items[f].loose = !0;
      return a;
    }
  }
  html(t) {
    const r = this.rules.block.html.exec(t);
    if (r)
      return {
        type: "html",
        block: !0,
        raw: r[0],
        pre: r[1] === "pre" || r[1] === "script" || r[1] === "style",
        text: r[0]
      };
  }
  def(t) {
    const r = this.rules.block.def.exec(t);
    if (r) {
      const n = r[1].toLowerCase().replace(/\s+/g, " "), i = r[2] ? r[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", a = r[3] ? r[3].substring(1, r[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : r[3];
      return {
        type: "def",
        tag: n,
        raw: r[0],
        href: i,
        title: a
      };
    }
  }
  table(t) {
    const r = this.rules.block.table.exec(t);
    if (!r || !/[:|]/.test(r[2]))
      return;
    const n = Zt(r[1]), i = r[2].replace(/^\||\| *$/g, "").split("|"), a = r[3] && r[3].trim() ? r[3].replace(/\n[ \t]*$/, "").split(`
`) : [], s = {
      type: "table",
      raw: r[0],
      header: [],
      align: [],
      rows: []
    };
    if (n.length === i.length) {
      for (const o of i)
        /^ *-+: *$/.test(o) ? s.align.push("right") : /^ *:-+: *$/.test(o) ? s.align.push("center") : /^ *:-+ *$/.test(o) ? s.align.push("left") : s.align.push(null);
      for (const o of n)
        s.header.push({
          text: o,
          tokens: this.lexer.inline(o)
        });
      for (const o of a)
        s.rows.push(Zt(o, s.header.length).map((u) => ({
          text: u,
          tokens: this.lexer.inline(u)
        })));
      return s;
    }
  }
  lheading(t) {
    const r = this.rules.block.lheading.exec(t);
    if (r)
      return {
        type: "heading",
        raw: r[0],
        depth: r[2].charAt(0) === "=" ? 1 : 2,
        text: r[1],
        tokens: this.lexer.inline(r[1])
      };
  }
  paragraph(t) {
    const r = this.rules.block.paragraph.exec(t);
    if (r) {
      const n = r[1].charAt(r[1].length - 1) === `
` ? r[1].slice(0, -1) : r[1];
      return {
        type: "paragraph",
        raw: r[0],
        text: n,
        tokens: this.lexer.inline(n)
      };
    }
  }
  text(t) {
    const r = this.rules.block.text.exec(t);
    if (r)
      return {
        type: "text",
        raw: r[0],
        text: r[0],
        tokens: this.lexer.inline(r[0])
      };
  }
  escape(t) {
    const r = this.rules.inline.escape.exec(t);
    if (r)
      return {
        type: "escape",
        raw: r[0],
        text: ge(r[1])
      };
  }
  tag(t) {
    const r = this.rules.inline.tag.exec(t);
    if (r)
      return !this.lexer.state.inLink && /^<a /i.test(r[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && /^<\/a>/i.test(r[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(r[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(r[0]) && (this.lexer.state.inRawBlock = !1), {
        type: "html",
        raw: r[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        block: !1,
        text: r[0]
      };
  }
  link(t) {
    const r = this.rules.inline.link.exec(t);
    if (r) {
      const n = r[2].trim();
      if (!this.options.pedantic && /^</.test(n)) {
        if (!/>$/.test(n))
          return;
        const s = pt(n.slice(0, -1), "\\");
        if ((n.length - s.length) % 2 === 0)
          return;
      } else {
        const s = Rr(r[2], "()");
        if (s > -1) {
          const u = (r[0].indexOf("!") === 0 ? 5 : 4) + r[1].length + s;
          r[2] = r[2].substring(0, s), r[0] = r[0].substring(0, u).trim(), r[3] = "";
        }
      }
      let i = r[2], a = "";
      if (this.options.pedantic) {
        const s = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);
        s && (i = s[1], a = s[3]);
      } else
        a = r[3] ? r[3].slice(1, -1) : "";
      return i = i.trim(), /^</.test(i) && (this.options.pedantic && !/>$/.test(n) ? i = i.slice(1) : i = i.slice(1, -1)), Ut(r, {
        href: i && i.replace(this.rules.inline.anyPunctuation, "$1"),
        title: a && a.replace(this.rules.inline.anyPunctuation, "$1")
      }, r[0], this.lexer);
    }
  }
  reflink(t, r) {
    let n;
    if ((n = this.rules.inline.reflink.exec(t)) || (n = this.rules.inline.nolink.exec(t))) {
      const i = (n[2] || n[1]).replace(/\s+/g, " "), a = r[i.toLowerCase()];
      if (!a) {
        const s = n[0].charAt(0);
        return {
          type: "text",
          raw: s,
          text: s
        };
      }
      return Ut(n, a, n[0], this.lexer);
    }
  }
  emStrong(t, r, n = "") {
    let i = this.rules.inline.emStrongLDelim.exec(t);
    if (!i || i[3] && n.match(/[\p{L}\p{N}]/u))
      return;
    if (!(i[1] || i[2] || "") || !n || this.rules.inline.punctuation.exec(n)) {
      const s = [...i[0]].length - 1;
      let o, u, v = s, f = 0;
      const k = i[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (k.lastIndex = 0, r = r.slice(-1 * t.length + s); (i = k.exec(r)) != null; ) {
        if (o = i[1] || i[2] || i[3] || i[4] || i[5] || i[6], !o)
          continue;
        if (u = [...o].length, i[3] || i[4]) {
          v += u;
          continue;
        } else if ((i[5] || i[6]) && s % 3 && !((s + u) % 3)) {
          f += u;
          continue;
        }
        if (v -= u, v > 0)
          continue;
        u = Math.min(u, u + v + f);
        const b = [...i[0]][0].length, F = t.slice(0, s + i.index + b + u);
        if (Math.min(s, u) % 2) {
          const y = F.slice(1, -1);
          return {
            type: "em",
            raw: F,
            text: y,
            tokens: this.lexer.inlineTokens(y)
          };
        }
        const I = F.slice(2, -2);
        return {
          type: "strong",
          raw: F,
          text: I,
          tokens: this.lexer.inlineTokens(I)
        };
      }
    }
  }
  codespan(t) {
    const r = this.rules.inline.code.exec(t);
    if (r) {
      let n = r[2].replace(/\n/g, " ");
      const i = /[^ ]/.test(n), a = /^ /.test(n) && / $/.test(n);
      return i && a && (n = n.substring(1, n.length - 1)), n = ge(n, !0), {
        type: "codespan",
        raw: r[0],
        text: n
      };
    }
  }
  br(t) {
    const r = this.rules.inline.br.exec(t);
    if (r)
      return {
        type: "br",
        raw: r[0]
      };
  }
  del(t) {
    const r = this.rules.inline.del.exec(t);
    if (r)
      return {
        type: "del",
        raw: r[0],
        text: r[2],
        tokens: this.lexer.inlineTokens(r[2])
      };
  }
  autolink(t) {
    const r = this.rules.inline.autolink.exec(t);
    if (r) {
      let n, i;
      return r[2] === "@" ? (n = ge(r[1]), i = "mailto:" + n) : (n = ge(r[1]), i = n), {
        type: "link",
        raw: r[0],
        text: n,
        href: i,
        tokens: [
          {
            type: "text",
            raw: n,
            text: n
          }
        ]
      };
    }
  }
  url(t) {
    let r;
    if (r = this.rules.inline.url.exec(t)) {
      let n, i;
      if (r[2] === "@")
        n = ge(r[0]), i = "mailto:" + n;
      else {
        let a;
        do
          a = r[0], r[0] = this.rules.inline._backpedal.exec(r[0])?.[0] ?? "";
        while (a !== r[0]);
        n = ge(r[0]), r[1] === "www." ? i = "http://" + r[0] : i = r[0];
      }
      return {
        type: "link",
        raw: r[0],
        text: n,
        href: i,
        tokens: [
          {
            type: "text",
            raw: n,
            text: n
          }
        ]
      };
    }
  }
  inlineText(t) {
    const r = this.rules.inline.text.exec(t);
    if (r) {
      let n;
      return this.lexer.state.inRawBlock ? n = r[0] : n = ge(r[0]), {
        type: "text",
        raw: r[0],
        text: n
      };
    }
  }
}
const Mr = /^(?: *(?:\n|$))+/, zr = /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/, Or = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, it = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, Nr = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, ur = /(?:[*+-]|\d{1,9}[.)])/, cr = Z(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, ur).replace(/blockCode/g, / {4}/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).getRegex(), Rt = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, Pr = /^[^\n]+/, It = /(?!\s*\])(?:\\.|[^\[\]\\])+/, Hr = Z(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label", It).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), qr = Z(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, ur).getRegex(), bt = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", Mt = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, Zr = Z("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", "i").replace("comment", Mt).replace("tag", bt).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), dr = Z(Rt).replace("hr", it).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", bt).getRegex(), Ur = Z(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", dr).getRegex(), zt = {
  blockquote: Ur,
  code: zr,
  def: Hr,
  fences: Or,
  heading: Nr,
  hr: it,
  html: Zr,
  lheading: cr,
  list: qr,
  newline: Mr,
  paragraph: dr,
  table: st,
  text: Pr
}, Vt = Z("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", it).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", bt).getRegex(), Vr = {
  ...zt,
  table: Vt,
  paragraph: Z(Rt).replace("hr", it).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", Vt).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", bt).getRegex()
}, $r = {
  ...zt,
  html: Z(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", Mt).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: st,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: Z(Rt).replace("hr", it).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", cr).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, pr = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, jr = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, hr = /^( {2,}|\\)\n(?!\s*$)/, Gr = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, ot = "\\p{P}\\p{S}", Yr = Z(/^((?![*_])[\spunctuation])/, "u").replace(/punctuation/g, ot).getRegex(), Xr = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g, Wr = Z(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, "u").replace(/punct/g, ot).getRegex(), Kr = Z("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])", "gu").replace(/punct/g, ot).getRegex(), Qr = Z("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])", "gu").replace(/punct/g, ot).getRegex(), Jr = Z(/\\([punct])/, "gu").replace(/punct/g, ot).getRegex(), en = Z(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), tn = Z(Mt).replace("(?:-->|$)", "-->").getRegex(), rn = Z("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", tn).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), mt = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, nn = Z(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", mt).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), gr = Z(/^!?\[(label)\]\[(ref)\]/).replace("label", mt).replace("ref", It).getRegex(), fr = Z(/^!?\[(ref)\](?:\[\])?/).replace("ref", It).getRegex(), an = Z("reflink|nolink(?!\\()", "g").replace("reflink", gr).replace("nolink", fr).getRegex(), Ot = {
  _backpedal: st,
  // only used for GFM url
  anyPunctuation: Jr,
  autolink: en,
  blockSkip: Xr,
  br: hr,
  code: jr,
  del: st,
  emStrongLDelim: Wr,
  emStrongRDelimAst: Kr,
  emStrongRDelimUnd: Qr,
  escape: pr,
  link: nn,
  nolink: fr,
  punctuation: Yr,
  reflink: gr,
  reflinkSearch: an,
  tag: rn,
  text: Gr,
  url: st
}, sn = {
  ...Ot,
  link: Z(/^!?\[(label)\]\((.*?)\)/).replace("label", mt).getRegex(),
  reflink: Z(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", mt).getRegex()
}, St = {
  ...Ot,
  escape: Z(pr).replace("])", "~|])").getRegex(),
  url: Z(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
}, on = {
  ...St,
  br: Z(hr).replace("{2,}", "*").getRegex(),
  text: Z(St.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, ht = {
  normal: zt,
  gfm: Vr,
  pedantic: $r
}, at = {
  normal: Ot,
  gfm: St,
  breaks: on,
  pedantic: sn
};
class ye {
  tokens;
  options;
  state;
  tokenizer;
  inlineQueue;
  constructor(t) {
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = t || je, this.options.tokenizer = this.options.tokenizer || new vt(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: !1,
      inRawBlock: !1,
      top: !0
    };
    const r = {
      block: ht.normal,
      inline: at.normal
    };
    this.options.pedantic ? (r.block = ht.pedantic, r.inline = at.pedantic) : this.options.gfm && (r.block = ht.gfm, this.options.breaks ? r.inline = at.breaks : r.inline = at.gfm), this.tokenizer.rules = r;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block: ht,
      inline: at
    };
  }
  /**
   * Static Lex Method
   */
  static lex(t, r) {
    return new ye(r).lex(t);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(t, r) {
    return new ye(r).inlineTokens(t);
  }
  /**
   * Preprocessing
   */
  lex(t) {
    t = t.replace(/\r\n|\r/g, `
`), this.blockTokens(t, this.tokens);
    for (let r = 0; r < this.inlineQueue.length; r++) {
      const n = this.inlineQueue[r];
      this.inlineTokens(n.src, n.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(t, r = []) {
    this.options.pedantic ? t = t.replace(/\t/g, "    ").replace(/^ +$/gm, "") : t = t.replace(/^( *)(\t+)/gm, (o, u, v) => u + "    ".repeat(v.length));
    let n, i, a, s;
    for (; t; )
      if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((o) => (n = o.call({ lexer: this }, t, r)) ? (t = t.substring(n.raw.length), r.push(n), !0) : !1))) {
        if (n = this.tokenizer.space(t)) {
          t = t.substring(n.raw.length), n.raw.length === 1 && r.length > 0 ? r[r.length - 1].raw += `
` : r.push(n);
          continue;
        }
        if (n = this.tokenizer.code(t)) {
          t = t.substring(n.raw.length), i = r[r.length - 1], i && (i.type === "paragraph" || i.type === "text") ? (i.raw += `
` + n.raw, i.text += `
` + n.text, this.inlineQueue[this.inlineQueue.length - 1].src = i.text) : r.push(n);
          continue;
        }
        if (n = this.tokenizer.fences(t)) {
          t = t.substring(n.raw.length), r.push(n);
          continue;
        }
        if (n = this.tokenizer.heading(t)) {
          t = t.substring(n.raw.length), r.push(n);
          continue;
        }
        if (n = this.tokenizer.hr(t)) {
          t = t.substring(n.raw.length), r.push(n);
          continue;
        }
        if (n = this.tokenizer.blockquote(t)) {
          t = t.substring(n.raw.length), r.push(n);
          continue;
        }
        if (n = this.tokenizer.list(t)) {
          t = t.substring(n.raw.length), r.push(n);
          continue;
        }
        if (n = this.tokenizer.html(t)) {
          t = t.substring(n.raw.length), r.push(n);
          continue;
        }
        if (n = this.tokenizer.def(t)) {
          t = t.substring(n.raw.length), i = r[r.length - 1], i && (i.type === "paragraph" || i.type === "text") ? (i.raw += `
` + n.raw, i.text += `
` + n.raw, this.inlineQueue[this.inlineQueue.length - 1].src = i.text) : this.tokens.links[n.tag] || (this.tokens.links[n.tag] = {
            href: n.href,
            title: n.title
          });
          continue;
        }
        if (n = this.tokenizer.table(t)) {
          t = t.substring(n.raw.length), r.push(n);
          continue;
        }
        if (n = this.tokenizer.lheading(t)) {
          t = t.substring(n.raw.length), r.push(n);
          continue;
        }
        if (a = t, this.options.extensions && this.options.extensions.startBlock) {
          let o = 1 / 0;
          const u = t.slice(1);
          let v;
          this.options.extensions.startBlock.forEach((f) => {
            v = f.call({ lexer: this }, u), typeof v == "number" && v >= 0 && (o = Math.min(o, v));
          }), o < 1 / 0 && o >= 0 && (a = t.substring(0, o + 1));
        }
        if (this.state.top && (n = this.tokenizer.paragraph(a))) {
          i = r[r.length - 1], s && i.type === "paragraph" ? (i.raw += `
` + n.raw, i.text += `
` + n.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = i.text) : r.push(n), s = a.length !== t.length, t = t.substring(n.raw.length);
          continue;
        }
        if (n = this.tokenizer.text(t)) {
          t = t.substring(n.raw.length), i = r[r.length - 1], i && i.type === "text" ? (i.raw += `
` + n.raw, i.text += `
` + n.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = i.text) : r.push(n);
          continue;
        }
        if (t) {
          const o = "Infinite loop on byte: " + t.charCodeAt(0);
          if (this.options.silent) {
            console.error(o);
            break;
          } else
            throw new Error(o);
        }
      }
    return this.state.top = !0, r;
  }
  inline(t, r = []) {
    return this.inlineQueue.push({ src: t, tokens: r }), r;
  }
  /**
   * Lexing/Compiling
   */
  inlineTokens(t, r = []) {
    let n, i, a, s = t, o, u, v;
    if (this.tokens.links) {
      const f = Object.keys(this.tokens.links);
      if (f.length > 0)
        for (; (o = this.tokenizer.rules.inline.reflinkSearch.exec(s)) != null; )
          f.includes(o[0].slice(o[0].lastIndexOf("[") + 1, -1)) && (s = s.slice(0, o.index) + "[" + "a".repeat(o[0].length - 2) + "]" + s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (o = this.tokenizer.rules.inline.blockSkip.exec(s)) != null; )
      s = s.slice(0, o.index) + "[" + "a".repeat(o[0].length - 2) + "]" + s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (o = this.tokenizer.rules.inline.anyPunctuation.exec(s)) != null; )
      s = s.slice(0, o.index) + "++" + s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; t; )
      if (u || (v = ""), u = !1, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((f) => (n = f.call({ lexer: this }, t, r)) ? (t = t.substring(n.raw.length), r.push(n), !0) : !1))) {
        if (n = this.tokenizer.escape(t)) {
          t = t.substring(n.raw.length), r.push(n);
          continue;
        }
        if (n = this.tokenizer.tag(t)) {
          t = t.substring(n.raw.length), i = r[r.length - 1], i && n.type === "text" && i.type === "text" ? (i.raw += n.raw, i.text += n.text) : r.push(n);
          continue;
        }
        if (n = this.tokenizer.link(t)) {
          t = t.substring(n.raw.length), r.push(n);
          continue;
        }
        if (n = this.tokenizer.reflink(t, this.tokens.links)) {
          t = t.substring(n.raw.length), i = r[r.length - 1], i && n.type === "text" && i.type === "text" ? (i.raw += n.raw, i.text += n.text) : r.push(n);
          continue;
        }
        if (n = this.tokenizer.emStrong(t, s, v)) {
          t = t.substring(n.raw.length), r.push(n);
          continue;
        }
        if (n = this.tokenizer.codespan(t)) {
          t = t.substring(n.raw.length), r.push(n);
          continue;
        }
        if (n = this.tokenizer.br(t)) {
          t = t.substring(n.raw.length), r.push(n);
          continue;
        }
        if (n = this.tokenizer.del(t)) {
          t = t.substring(n.raw.length), r.push(n);
          continue;
        }
        if (n = this.tokenizer.autolink(t)) {
          t = t.substring(n.raw.length), r.push(n);
          continue;
        }
        if (!this.state.inLink && (n = this.tokenizer.url(t))) {
          t = t.substring(n.raw.length), r.push(n);
          continue;
        }
        if (a = t, this.options.extensions && this.options.extensions.startInline) {
          let f = 1 / 0;
          const k = t.slice(1);
          let b;
          this.options.extensions.startInline.forEach((F) => {
            b = F.call({ lexer: this }, k), typeof b == "number" && b >= 0 && (f = Math.min(f, b));
          }), f < 1 / 0 && f >= 0 && (a = t.substring(0, f + 1));
        }
        if (n = this.tokenizer.inlineText(a)) {
          t = t.substring(n.raw.length), n.raw.slice(-1) !== "_" && (v = n.raw.slice(-1)), u = !0, i = r[r.length - 1], i && i.type === "text" ? (i.raw += n.raw, i.text += n.text) : r.push(n);
          continue;
        }
        if (t) {
          const f = "Infinite loop on byte: " + t.charCodeAt(0);
          if (this.options.silent) {
            console.error(f);
            break;
          } else
            throw new Error(f);
        }
      }
    return r;
  }
}
class wt {
  options;
  constructor(t) {
    this.options = t || je;
  }
  code(t, r, n) {
    const i = (r || "").match(/^\S*/)?.[0];
    return t = t.replace(/\n$/, "") + `
`, i ? '<pre><code class="language-' + ge(i) + '">' + (n ? t : ge(t, !0)) + `</code></pre>
` : "<pre><code>" + (n ? t : ge(t, !0)) + `</code></pre>
`;
  }
  blockquote(t) {
    return `<blockquote>
${t}</blockquote>
`;
  }
  html(t, r) {
    return t;
  }
  heading(t, r, n) {
    return `<h${r}>${t}</h${r}>
`;
  }
  hr() {
    return `<hr>
`;
  }
  list(t, r, n) {
    const i = r ? "ol" : "ul", a = r && n !== 1 ? ' start="' + n + '"' : "";
    return "<" + i + a + `>
` + t + "</" + i + `>
`;
  }
  listitem(t, r, n) {
    return `<li>${t}</li>
`;
  }
  checkbox(t) {
    return "<input " + (t ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph(t) {
    return `<p>${t}</p>
`;
  }
  table(t, r) {
    return r && (r = `<tbody>${r}</tbody>`), `<table>
<thead>
` + t + `</thead>
` + r + `</table>
`;
  }
  tablerow(t) {
    return `<tr>
${t}</tr>
`;
  }
  tablecell(t, r) {
    const n = r.header ? "th" : "td";
    return (r.align ? `<${n} align="${r.align}">` : `<${n}>`) + t + `</${n}>
`;
  }
  /**
   * span level renderer
   */
  strong(t) {
    return `<strong>${t}</strong>`;
  }
  em(t) {
    return `<em>${t}</em>`;
  }
  codespan(t) {
    return `<code>${t}</code>`;
  }
  br() {
    return "<br>";
  }
  del(t) {
    return `<del>${t}</del>`;
  }
  link(t, r, n) {
    const i = qt(t);
    if (i === null)
      return n;
    t = i;
    let a = '<a href="' + t + '"';
    return r && (a += ' title="' + r + '"'), a += ">" + n + "</a>", a;
  }
  image(t, r, n) {
    const i = qt(t);
    if (i === null)
      return n;
    t = i;
    let a = `<img src="${t}" alt="${n}"`;
    return r && (a += ` title="${r}"`), a += ">", a;
  }
  text(t) {
    return t;
  }
}
class Nt {
  // no need for block level renderers
  strong(t) {
    return t;
  }
  em(t) {
    return t;
  }
  codespan(t) {
    return t;
  }
  del(t) {
    return t;
  }
  html(t) {
    return t;
  }
  text(t) {
    return t;
  }
  link(t, r, n) {
    return "" + n;
  }
  image(t, r, n) {
    return "" + n;
  }
  br() {
    return "";
  }
}
class Ce {
  options;
  renderer;
  textRenderer;
  constructor(t) {
    this.options = t || je, this.options.renderer = this.options.renderer || new wt(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new Nt();
  }
  /**
   * Static Parse Method
   */
  static parse(t, r) {
    return new Ce(r).parse(t);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(t, r) {
    return new Ce(r).parseInline(t);
  }
  /**
   * Parse Loop
   */
  parse(t, r = !0) {
    let n = "";
    for (let i = 0; i < t.length; i++) {
      const a = t[i];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[a.type]) {
        const s = a, o = this.options.extensions.renderers[s.type].call({ parser: this }, s);
        if (o !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(s.type)) {
          n += o || "";
          continue;
        }
      }
      switch (a.type) {
        case "space":
          continue;
        case "hr": {
          n += this.renderer.hr();
          continue;
        }
        case "heading": {
          const s = a;
          n += this.renderer.heading(this.parseInline(s.tokens), s.depth, Sr(this.parseInline(s.tokens, this.textRenderer)));
          continue;
        }
        case "code": {
          const s = a;
          n += this.renderer.code(s.text, s.lang, !!s.escaped);
          continue;
        }
        case "table": {
          const s = a;
          let o = "", u = "";
          for (let f = 0; f < s.header.length; f++)
            u += this.renderer.tablecell(this.parseInline(s.header[f].tokens), { header: !0, align: s.align[f] });
          o += this.renderer.tablerow(u);
          let v = "";
          for (let f = 0; f < s.rows.length; f++) {
            const k = s.rows[f];
            u = "";
            for (let b = 0; b < k.length; b++)
              u += this.renderer.tablecell(this.parseInline(k[b].tokens), { header: !1, align: s.align[b] });
            v += this.renderer.tablerow(u);
          }
          n += this.renderer.table(o, v);
          continue;
        }
        case "blockquote": {
          const s = a, o = this.parse(s.tokens);
          n += this.renderer.blockquote(o);
          continue;
        }
        case "list": {
          const s = a, o = s.ordered, u = s.start, v = s.loose;
          let f = "";
          for (let k = 0; k < s.items.length; k++) {
            const b = s.items[k], F = b.checked, I = b.task;
            let y = "";
            if (b.task) {
              const x = this.renderer.checkbox(!!F);
              v ? b.tokens.length > 0 && b.tokens[0].type === "paragraph" ? (b.tokens[0].text = x + " " + b.tokens[0].text, b.tokens[0].tokens && b.tokens[0].tokens.length > 0 && b.tokens[0].tokens[0].type === "text" && (b.tokens[0].tokens[0].text = x + " " + b.tokens[0].tokens[0].text)) : b.tokens.unshift({
                type: "text",
                text: x + " "
              }) : y += x + " ";
            }
            y += this.parse(b.tokens, v), f += this.renderer.listitem(y, I, !!F);
          }
          n += this.renderer.list(f, o, u);
          continue;
        }
        case "html": {
          const s = a;
          n += this.renderer.html(s.text, s.block);
          continue;
        }
        case "paragraph": {
          const s = a;
          n += this.renderer.paragraph(this.parseInline(s.tokens));
          continue;
        }
        case "text": {
          let s = a, o = s.tokens ? this.parseInline(s.tokens) : s.text;
          for (; i + 1 < t.length && t[i + 1].type === "text"; )
            s = t[++i], o += `
` + (s.tokens ? this.parseInline(s.tokens) : s.text);
          n += r ? this.renderer.paragraph(o) : o;
          continue;
        }
        default: {
          const s = 'Token with "' + a.type + '" type was not found.';
          if (this.options.silent)
            return console.error(s), "";
          throw new Error(s);
        }
      }
    }
    return n;
  }
  /**
   * Parse Inline Tokens
   */
  parseInline(t, r) {
    r = r || this.renderer;
    let n = "";
    for (let i = 0; i < t.length; i++) {
      const a = t[i];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[a.type]) {
        const s = this.options.extensions.renderers[a.type].call({ parser: this }, a);
        if (s !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(a.type)) {
          n += s || "";
          continue;
        }
      }
      switch (a.type) {
        case "escape": {
          const s = a;
          n += r.text(s.text);
          break;
        }
        case "html": {
          const s = a;
          n += r.html(s.text);
          break;
        }
        case "link": {
          const s = a;
          n += r.link(s.href, s.title, this.parseInline(s.tokens, r));
          break;
        }
        case "image": {
          const s = a;
          n += r.image(s.href, s.title, s.text);
          break;
        }
        case "strong": {
          const s = a;
          n += r.strong(this.parseInline(s.tokens, r));
          break;
        }
        case "em": {
          const s = a;
          n += r.em(this.parseInline(s.tokens, r));
          break;
        }
        case "codespan": {
          const s = a;
          n += r.codespan(s.text);
          break;
        }
        case "br": {
          n += r.br();
          break;
        }
        case "del": {
          const s = a;
          n += r.del(this.parseInline(s.tokens, r));
          break;
        }
        case "text": {
          const s = a;
          n += r.text(s.text);
          break;
        }
        default: {
          const s = 'Token with "' + a.type + '" type was not found.';
          if (this.options.silent)
            return console.error(s), "";
          throw new Error(s);
        }
      }
    }
    return n;
  }
}
class ft {
  options;
  constructor(t) {
    this.options = t || je;
  }
  static passThroughHooks = /* @__PURE__ */ new Set([
    "preprocess",
    "postprocess",
    "processAllTokens"
  ]);
  /**
   * Process markdown before marked
   */
  preprocess(t) {
    return t;
  }
  /**
   * Process HTML after marked is finished
   */
  postprocess(t) {
    return t;
  }
  /**
   * Process all tokens before walk tokens
   */
  processAllTokens(t) {
    return t;
  }
}
class ln {
  defaults = Lt();
  options = this.setOptions;
  parse = this.#e(ye.lex, Ce.parse);
  parseInline = this.#e(ye.lexInline, Ce.parseInline);
  Parser = Ce;
  Renderer = wt;
  TextRenderer = Nt;
  Lexer = ye;
  Tokenizer = vt;
  Hooks = ft;
  constructor(...t) {
    this.use(...t);
  }
  /**
   * Run callback for every token
   */
  walkTokens(t, r) {
    let n = [];
    for (const i of t)
      switch (n = n.concat(r.call(this, i)), i.type) {
        case "table": {
          const a = i;
          for (const s of a.header)
            n = n.concat(this.walkTokens(s.tokens, r));
          for (const s of a.rows)
            for (const o of s)
              n = n.concat(this.walkTokens(o.tokens, r));
          break;
        }
        case "list": {
          const a = i;
          n = n.concat(this.walkTokens(a.items, r));
          break;
        }
        default: {
          const a = i;
          this.defaults.extensions?.childTokens?.[a.type] ? this.defaults.extensions.childTokens[a.type].forEach((s) => {
            const o = a[s].flat(1 / 0);
            n = n.concat(this.walkTokens(o, r));
          }) : a.tokens && (n = n.concat(this.walkTokens(a.tokens, r)));
        }
      }
    return n;
  }
  use(...t) {
    const r = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return t.forEach((n) => {
      const i = { ...n };
      if (i.async = this.defaults.async || i.async || !1, n.extensions && (n.extensions.forEach((a) => {
        if (!a.name)
          throw new Error("extension name required");
        if ("renderer" in a) {
          const s = r.renderers[a.name];
          s ? r.renderers[a.name] = function(...o) {
            let u = a.renderer.apply(this, o);
            return u === !1 && (u = s.apply(this, o)), u;
          } : r.renderers[a.name] = a.renderer;
        }
        if ("tokenizer" in a) {
          if (!a.level || a.level !== "block" && a.level !== "inline")
            throw new Error("extension level must be 'block' or 'inline'");
          const s = r[a.level];
          s ? s.unshift(a.tokenizer) : r[a.level] = [a.tokenizer], a.start && (a.level === "block" ? r.startBlock ? r.startBlock.push(a.start) : r.startBlock = [a.start] : a.level === "inline" && (r.startInline ? r.startInline.push(a.start) : r.startInline = [a.start]));
        }
        "childTokens" in a && a.childTokens && (r.childTokens[a.name] = a.childTokens);
      }), i.extensions = r), n.renderer) {
        const a = this.defaults.renderer || new wt(this.defaults);
        for (const s in n.renderer) {
          if (!(s in a))
            throw new Error(`renderer '${s}' does not exist`);
          if (s === "options")
            continue;
          const o = s, u = n.renderer[o], v = a[o];
          a[o] = (...f) => {
            let k = u.apply(a, f);
            return k === !1 && (k = v.apply(a, f)), k || "";
          };
        }
        i.renderer = a;
      }
      if (n.tokenizer) {
        const a = this.defaults.tokenizer || new vt(this.defaults);
        for (const s in n.tokenizer) {
          if (!(s in a))
            throw new Error(`tokenizer '${s}' does not exist`);
          if (["options", "rules", "lexer"].includes(s))
            continue;
          const o = s, u = n.tokenizer[o], v = a[o];
          a[o] = (...f) => {
            let k = u.apply(a, f);
            return k === !1 && (k = v.apply(a, f)), k;
          };
        }
        i.tokenizer = a;
      }
      if (n.hooks) {
        const a = this.defaults.hooks || new ft();
        for (const s in n.hooks) {
          if (!(s in a))
            throw new Error(`hook '${s}' does not exist`);
          if (s === "options")
            continue;
          const o = s, u = n.hooks[o], v = a[o];
          ft.passThroughHooks.has(s) ? a[o] = (f) => {
            if (this.defaults.async)
              return Promise.resolve(u.call(a, f)).then((b) => v.call(a, b));
            const k = u.call(a, f);
            return v.call(a, k);
          } : a[o] = (...f) => {
            let k = u.apply(a, f);
            return k === !1 && (k = v.apply(a, f)), k;
          };
        }
        i.hooks = a;
      }
      if (n.walkTokens) {
        const a = this.defaults.walkTokens, s = n.walkTokens;
        i.walkTokens = function(o) {
          let u = [];
          return u.push(s.call(this, o)), a && (u = u.concat(a.call(this, o))), u;
        };
      }
      this.defaults = { ...this.defaults, ...i };
    }), this;
  }
  setOptions(t) {
    return this.defaults = { ...this.defaults, ...t }, this;
  }
  lexer(t, r) {
    return ye.lex(t, r ?? this.defaults);
  }
  parser(t, r) {
    return Ce.parse(t, r ?? this.defaults);
  }
  #e(t, r) {
    return (n, i) => {
      const a = { ...i }, s = { ...this.defaults, ...a };
      this.defaults.async === !0 && a.async === !1 && (s.silent || console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."), s.async = !0);
      const o = this.#t(!!s.silent, !!s.async);
      if (typeof n > "u" || n === null)
        return o(new Error("marked(): input parameter is undefined or null"));
      if (typeof n != "string")
        return o(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(n) + ", string expected"));
      if (s.hooks && (s.hooks.options = s), s.async)
        return Promise.resolve(s.hooks ? s.hooks.preprocess(n) : n).then((u) => t(u, s)).then((u) => s.hooks ? s.hooks.processAllTokens(u) : u).then((u) => s.walkTokens ? Promise.all(this.walkTokens(u, s.walkTokens)).then(() => u) : u).then((u) => r(u, s)).then((u) => s.hooks ? s.hooks.postprocess(u) : u).catch(o);
      try {
        s.hooks && (n = s.hooks.preprocess(n));
        let u = t(n, s);
        s.hooks && (u = s.hooks.processAllTokens(u)), s.walkTokens && this.walkTokens(u, s.walkTokens);
        let v = r(u, s);
        return s.hooks && (v = s.hooks.postprocess(v)), v;
      } catch (u) {
        return o(u);
      }
    };
  }
  #t(t, r) {
    return (n) => {
      if (n.message += `
Please report this to https://github.com/markedjs/marked.`, t) {
        const i = "<p>An error occurred:</p><pre>" + ge(n.message + "", !0) + "</pre>";
        return r ? Promise.resolve(i) : i;
      }
      if (r)
        return Promise.reject(n);
      throw n;
    };
  }
}
const $e = new ln();
function q(l, t) {
  return $e.parse(l, t);
}
q.options = q.setOptions = function(l) {
  return $e.setOptions(l), q.defaults = $e.defaults, ir(q.defaults), q;
};
q.getDefaults = Lt;
q.defaults = je;
q.use = function(...l) {
  return $e.use(...l), q.defaults = $e.defaults, ir(q.defaults), q;
};
q.walkTokens = function(l, t) {
  return $e.walkTokens(l, t);
};
q.parseInline = $e.parseInline;
q.Parser = Ce;
q.parser = Ce.parse;
q.Renderer = wt;
q.TextRenderer = Nt;
q.Lexer = ye;
q.lexer = ye.lex;
q.Tokenizer = vt;
q.Hooks = ft;
q.parse = q;
q.options;
q.setOptions;
q.use;
q.walkTokens;
q.parseInline;
Ce.parse;
ye.lex;
const un = /[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g, cn = Object.hasOwnProperty;
class vr {
  /**
   * Create a new slug class.
   */
  constructor() {
    this.occurrences, this.reset();
  }
  /**
   * Generate a unique slug.
  *
  * Tracks previously generated slugs: repeated calls with the same value
  * will result in different slugs.
  * Use the `slug` function to get same slugs.
   *
   * @param  {string} value
   *   String of text to slugify
   * @param  {boolean} [maintainCase=false]
   *   Keep the current case, otherwise make all lowercase
   * @return {string}
   *   A unique slug string
   */
  slug(t, r) {
    const n = this;
    let i = dn(t, r === !0);
    const a = i;
    for (; cn.call(n.occurrences, i); )
      n.occurrences[a]++, i = a + "-" + n.occurrences[a];
    return n.occurrences[i] = 0, i;
  }
  /**
   * Reset - Forget all previous slugs
   *
   * @return void
   */
  reset() {
    this.occurrences = /* @__PURE__ */ Object.create(null);
  }
}
function dn(l, t) {
  return typeof l != "string" ? "" : (t || (l = l.toLowerCase()), l.replace(un, "").replace(/ /g, "-"));
}
new vr();
var $t = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ct = { exports: {} }, jt;
function pn() {
  return jt || (jt = 1, (function(l) {
    var t = typeof window < "u" ? window : typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : {};
    var r = (function(n) {
      var i = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, a = 0, s = {}, o = {
        /**
         * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
         * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
         * additional languages or plugins yourself.
         *
         * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
         *
         * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
         * empty Prism object into the global scope before loading the Prism script like this:
         *
         * ```js
         * window.Prism = window.Prism || {};
         * Prism.manual = true;
         * // add a new <script> to load Prism's script
         * ```
         *
         * @default false
         * @type {boolean}
         * @memberof Prism
         * @public
         */
        manual: n.Prism && n.Prism.manual,
        /**
         * By default, if Prism is in a web worker, it assumes that it is in a worker it created itself, so it uses
         * `addEventListener` to communicate with its parent instance. However, if you're using Prism manually in your
         * own worker, you don't want it to do this.
         *
         * By setting this value to `true`, Prism will not add its own listeners to the worker.
         *
         * You obviously have to change this value before Prism executes. To do this, you can add an
         * empty Prism object into the global scope before loading the Prism script like this:
         *
         * ```js
         * window.Prism = window.Prism || {};
         * Prism.disableWorkerMessageHandler = true;
         * // Load Prism's script
         * ```
         *
         * @default false
         * @type {boolean}
         * @memberof Prism
         * @public
         */
        disableWorkerMessageHandler: n.Prism && n.Prism.disableWorkerMessageHandler,
        /**
         * A namespace for utility methods.
         *
         * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
         * change or disappear at any time.
         *
         * @namespace
         * @memberof Prism
         */
        util: {
          encode: function c(d) {
            return d instanceof u ? new u(d.type, c(d.content), d.alias) : Array.isArray(d) ? d.map(c) : d.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
          },
          /**
           * Returns the name of the type of the given value.
           *
           * @param {any} o
           * @returns {string}
           * @example
           * type(null)      === 'Null'
           * type(undefined) === 'Undefined'
           * type(123)       === 'Number'
           * type('foo')     === 'String'
           * type(true)      === 'Boolean'
           * type([1, 2])    === 'Array'
           * type({})        === 'Object'
           * type(String)    === 'Function'
           * type(/abc+/)    === 'RegExp'
           */
          type: function(c) {
            return Object.prototype.toString.call(c).slice(8, -1);
          },
          /**
           * Returns a unique number for the given object. Later calls will still return the same number.
           *
           * @param {Object} obj
           * @returns {number}
           */
          objId: function(c) {
            return c.__id || Object.defineProperty(c, "__id", { value: ++a }), c.__id;
          },
          /**
           * Creates a deep clone of the given object.
           *
           * The main intended use of this function is to clone language definitions.
           *
           * @param {T} o
           * @param {Record<number, any>} [visited]
           * @returns {T}
           * @template T
           */
          clone: function c(d, p) {
            p = p || {};
            var h, g;
            switch (o.util.type(d)) {
              case "Object":
                if (g = o.util.objId(d), p[g])
                  return p[g];
                h = /** @type {Record<string, any>} */
                {}, p[g] = h;
                for (var m in d)
                  d.hasOwnProperty(m) && (h[m] = c(d[m], p));
                return (
                  /** @type {any} */
                  h
                );
              case "Array":
                return g = o.util.objId(d), p[g] ? p[g] : (h = [], p[g] = h, /** @type {Array} */
                /** @type {any} */
                d.forEach(function(E, w) {
                  h[w] = c(E, p);
                }), /** @type {any} */
                h);
              default:
                return d;
            }
          },
          /**
           * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
           *
           * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
           *
           * @param {Element} element
           * @returns {string}
           */
          getLanguage: function(c) {
            for (; c; ) {
              var d = i.exec(c.className);
              if (d)
                return d[1].toLowerCase();
              c = c.parentElement;
            }
            return "none";
          },
          /**
           * Sets the Prism `language-xxxx` class of the given element.
           *
           * @param {Element} element
           * @param {string} language
           * @returns {void}
           */
          setLanguage: function(c, d) {
            c.className = c.className.replace(RegExp(i, "gi"), ""), c.classList.add("language-" + d);
          },
          /**
           * Returns the script element that is currently executing.
           *
           * This does __not__ work for line script element.
           *
           * @returns {HTMLScriptElement | null}
           */
          currentScript: function() {
            if (typeof document > "u")
              return null;
            if (document.currentScript && document.currentScript.tagName === "SCRIPT")
              return (
                /** @type {any} */
                document.currentScript
              );
            try {
              throw new Error();
            } catch (h) {
              var c = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(h.stack) || [])[1];
              if (c) {
                var d = document.getElementsByTagName("script");
                for (var p in d)
                  if (d[p].src == c)
                    return d[p];
              }
              return null;
            }
          },
          /**
           * Returns whether a given class is active for `element`.
           *
           * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
           * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
           * given class is just the given class with a `no-` prefix.
           *
           * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
           * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
           * ancestors have the given class or the negated version of it, then the default activation will be returned.
           *
           * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
           * version of it, the class is considered active.
           *
           * @param {Element} element
           * @param {string} className
           * @param {boolean} [defaultActivation=false]
           * @returns {boolean}
           */
          isActive: function(c, d, p) {
            for (var h = "no-" + d; c; ) {
              var g = c.classList;
              if (g.contains(d))
                return !0;
              if (g.contains(h))
                return !1;
              c = c.parentElement;
            }
            return !!p;
          }
        },
        /**
         * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
         *
         * @namespace
         * @memberof Prism
         * @public
         */
        languages: {
          /**
           * The grammar for plain, unformatted text.
           */
          plain: s,
          plaintext: s,
          text: s,
          txt: s,
          /**
           * Creates a deep copy of the language with the given id and appends the given tokens.
           *
           * If a token in `redef` also appears in the copied language, then the existing token in the copied language
           * will be overwritten at its original position.
           *
           * ## Best practices
           *
           * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
           * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
           * understand the language definition because, normally, the order of tokens matters in Prism grammars.
           *
           * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
           * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
           *
           * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
           * @param {Grammar} redef The new tokens to append.
           * @returns {Grammar} The new language created.
           * @public
           * @example
           * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
           *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
           *     // at its original position
           *     'comment': { ... },
           *     // CSS doesn't have a 'color' token, so this token will be appended
           *     'color': /\b(?:red|green|blue)\b/
           * });
           */
          extend: function(c, d) {
            var p = o.util.clone(o.languages[c]);
            for (var h in d)
              p[h] = d[h];
            return p;
          },
          /**
           * Inserts tokens _before_ another token in a language definition or any other grammar.
           *
           * ## Usage
           *
           * This helper method makes it easy to modify existing languages. For example, the CSS language definition
           * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
           * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
           * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
           * this:
           *
           * ```js
           * Prism.languages.markup.style = {
           *     // token
           * };
           * ```
           *
           * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
           * before existing tokens. For the CSS example above, you would use it like this:
           *
           * ```js
           * Prism.languages.insertBefore('markup', 'cdata', {
           *     'style': {
           *         // token
           *     }
           * });
           * ```
           *
           * ## Special cases
           *
           * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
           * will be ignored.
           *
           * This behavior can be used to insert tokens after `before`:
           *
           * ```js
           * Prism.languages.insertBefore('markup', 'comment', {
           *     'comment': Prism.languages.markup.comment,
           *     // tokens after 'comment'
           * });
           * ```
           *
           * ## Limitations
           *
           * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
           * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
           * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
           * deleting properties which is necessary to insert at arbitrary positions.
           *
           * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
           * Instead, it will create a new object and replace all references to the target object with the new one. This
           * can be done without temporarily deleting properties, so the iteration order is well-defined.
           *
           * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
           * you hold the target object in a variable, then the value of the variable will not change.
           *
           * ```js
           * var oldMarkup = Prism.languages.markup;
           * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
           *
           * assert(oldMarkup !== Prism.languages.markup);
           * assert(newMarkup === Prism.languages.markup);
           * ```
           *
           * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
           * object to be modified.
           * @param {string} before The key to insert before.
           * @param {Grammar} insert An object containing the key-value pairs to be inserted.
           * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
           * object to be modified.
           *
           * Defaults to `Prism.languages`.
           * @returns {Grammar} The new grammar object.
           * @public
           */
          insertBefore: function(c, d, p, h) {
            h = h || /** @type {any} */
            o.languages;
            var g = h[c], m = {};
            for (var E in g)
              if (g.hasOwnProperty(E)) {
                if (E == d)
                  for (var w in p)
                    p.hasOwnProperty(w) && (m[w] = p[w]);
                p.hasOwnProperty(E) || (m[E] = g[E]);
              }
            var R = h[c];
            return h[c] = m, o.languages.DFS(o.languages, function(U, J) {
              J === R && U != c && (this[U] = m);
            }), m;
          },
          // Traverse a language definition with Depth First Search
          DFS: function c(d, p, h, g) {
            g = g || {};
            var m = o.util.objId;
            for (var E in d)
              if (d.hasOwnProperty(E)) {
                p.call(d, E, d[E], h || E);
                var w = d[E], R = o.util.type(w);
                R === "Object" && !g[m(w)] ? (g[m(w)] = !0, c(w, p, null, g)) : R === "Array" && !g[m(w)] && (g[m(w)] = !0, c(w, p, E, g));
              }
          }
        },
        plugins: {},
        /**
         * This is the most high-level function in Prism’s API.
         * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
         * each one of them.
         *
         * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
         *
         * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
         * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
         * @memberof Prism
         * @public
         */
        highlightAll: function(c, d) {
          o.highlightAllUnder(document, c, d);
        },
        /**
         * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
         * {@link Prism.highlightElement} on each one of them.
         *
         * The following hooks will be run:
         * 1. `before-highlightall`
         * 2. `before-all-elements-highlight`
         * 3. All hooks of {@link Prism.highlightElement} for each element.
         *
         * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
         * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
         * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
         * @memberof Prism
         * @public
         */
        highlightAllUnder: function(c, d, p) {
          var h = {
            callback: p,
            container: c,
            selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
          };
          o.hooks.run("before-highlightall", h), h.elements = Array.prototype.slice.apply(h.container.querySelectorAll(h.selector)), o.hooks.run("before-all-elements-highlight", h);
          for (var g = 0, m; m = h.elements[g++]; )
            o.highlightElement(m, d === !0, h.callback);
        },
        /**
         * Highlights the code inside a single element.
         *
         * The following hooks will be run:
         * 1. `before-sanity-check`
         * 2. `before-highlight`
         * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
         * 4. `before-insert`
         * 5. `after-highlight`
         * 6. `complete`
         *
         * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
         * the element's language.
         *
         * @param {Element} element The element containing the code.
         * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
         * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
         * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
         * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
         *
         * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
         * asynchronous highlighting to work. You can build your own bundle on the
         * [Download page](https://prismjs.com/download.html).
         * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
         * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
         * @memberof Prism
         * @public
         */
        highlightElement: function(c, d, p) {
          var h = o.util.getLanguage(c), g = o.languages[h];
          o.util.setLanguage(c, h);
          var m = c.parentElement;
          m && m.nodeName.toLowerCase() === "pre" && o.util.setLanguage(m, h);
          var E = c.textContent, w = {
            element: c,
            language: h,
            grammar: g,
            code: E
          };
          function R(J) {
            w.highlightedCode = J, o.hooks.run("before-insert", w), w.element.innerHTML = w.highlightedCode, o.hooks.run("after-highlight", w), o.hooks.run("complete", w), p && p.call(w.element);
          }
          if (o.hooks.run("before-sanity-check", w), m = w.element.parentElement, m && m.nodeName.toLowerCase() === "pre" && !m.hasAttribute("tabindex") && m.setAttribute("tabindex", "0"), !w.code) {
            o.hooks.run("complete", w), p && p.call(w.element);
            return;
          }
          if (o.hooks.run("before-highlight", w), !w.grammar) {
            R(o.util.encode(w.code));
            return;
          }
          if (d && n.Worker) {
            var U = new Worker(o.filename);
            U.onmessage = function(J) {
              R(J.data);
            }, U.postMessage(JSON.stringify({
              language: w.language,
              code: w.code,
              immediateClose: !0
            }));
          } else
            R(o.highlight(w.code, w.grammar, w.language));
        },
        /**
         * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
         * and the language definitions to use, and returns a string with the HTML produced.
         *
         * The following hooks will be run:
         * 1. `before-tokenize`
         * 2. `after-tokenize`
         * 3. `wrap`: On each {@link Token}.
         *
         * @param {string} text A string with the code to be highlighted.
         * @param {Grammar} grammar An object containing the tokens to use.
         *
         * Usually a language definition like `Prism.languages.markup`.
         * @param {string} language The name of the language definition passed to `grammar`.
         * @returns {string} The highlighted HTML.
         * @memberof Prism
         * @public
         * @example
         * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
         */
        highlight: function(c, d, p) {
          var h = {
            code: c,
            grammar: d,
            language: p
          };
          if (o.hooks.run("before-tokenize", h), !h.grammar)
            throw new Error('The language "' + h.language + '" has no grammar.');
          return h.tokens = o.tokenize(h.code, h.grammar), o.hooks.run("after-tokenize", h), u.stringify(o.util.encode(h.tokens), h.language);
        },
        /**
         * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
         * and the language definitions to use, and returns an array with the tokenized code.
         *
         * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
         *
         * This method could be useful in other contexts as well, as a very crude parser.
         *
         * @param {string} text A string with the code to be highlighted.
         * @param {Grammar} grammar An object containing the tokens to use.
         *
         * Usually a language definition like `Prism.languages.markup`.
         * @returns {TokenStream} An array of strings and tokens, a token stream.
         * @memberof Prism
         * @public
         * @example
         * let code = `var foo = 0;`;
         * let tokens = Prism.tokenize(code, Prism.languages.javascript);
         * tokens.forEach(token => {
         *     if (token instanceof Prism.Token && token.type === 'number') {
         *         console.log(`Found numeric literal: ${token.content}`);
         *     }
         * });
         */
        tokenize: function(c, d) {
          var p = d.rest;
          if (p) {
            for (var h in p)
              d[h] = p[h];
            delete d.rest;
          }
          var g = new k();
          return b(g, g.head, c), f(c, g, d, g.head, 0), I(g);
        },
        /**
         * @namespace
         * @memberof Prism
         * @public
         */
        hooks: {
          all: {},
          /**
           * Adds the given callback to the list of callbacks for the given hook.
           *
           * The callback will be invoked when the hook it is registered for is run.
           * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
           *
           * One callback function can be registered to multiple hooks and the same hook multiple times.
           *
           * @param {string} name The name of the hook.
           * @param {HookCallback} callback The callback function which is given environment variables.
           * @public
           */
          add: function(c, d) {
            var p = o.hooks.all;
            p[c] = p[c] || [], p[c].push(d);
          },
          /**
           * Runs a hook invoking all registered callbacks with the given environment variables.
           *
           * Callbacks will be invoked synchronously and in the order in which they were registered.
           *
           * @param {string} name The name of the hook.
           * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
           * @public
           */
          run: function(c, d) {
            var p = o.hooks.all[c];
            if (!(!p || !p.length))
              for (var h = 0, g; g = p[h++]; )
                g(d);
          }
        },
        Token: u
      };
      n.Prism = o;
      function u(c, d, p, h) {
        this.type = c, this.content = d, this.alias = p, this.length = (h || "").length | 0;
      }
      u.stringify = function c(d, p) {
        if (typeof d == "string")
          return d;
        if (Array.isArray(d)) {
          var h = "";
          return d.forEach(function(R) {
            h += c(R, p);
          }), h;
        }
        var g = {
          type: d.type,
          content: c(d.content, p),
          tag: "span",
          classes: ["token", d.type],
          attributes: {},
          language: p
        }, m = d.alias;
        m && (Array.isArray(m) ? Array.prototype.push.apply(g.classes, m) : g.classes.push(m)), o.hooks.run("wrap", g);
        var E = "";
        for (var w in g.attributes)
          E += " " + w + '="' + (g.attributes[w] || "").replace(/"/g, "&quot;") + '"';
        return "<" + g.tag + ' class="' + g.classes.join(" ") + '"' + E + ">" + g.content + "</" + g.tag + ">";
      };
      function v(c, d, p, h) {
        c.lastIndex = d;
        var g = c.exec(p);
        if (g && h && g[1]) {
          var m = g[1].length;
          g.index += m, g[0] = g[0].slice(m);
        }
        return g;
      }
      function f(c, d, p, h, g, m) {
        for (var E in p)
          if (!(!p.hasOwnProperty(E) || !p[E])) {
            var w = p[E];
            w = Array.isArray(w) ? w : [w];
            for (var R = 0; R < w.length; ++R) {
              if (m && m.cause == E + "," + R)
                return;
              var U = w[R], J = U.inside, L = !!U.lookbehind, pe = !!U.greedy, me = U.alias;
              if (pe && !U.pattern.global) {
                var He = U.pattern.toString().match(/[imsuy]*$/)[0];
                U.pattern = RegExp(U.pattern.source, He + "g");
              }
              for (var ue = U.pattern || U, G = h.next, ae = g; G !== d.tail && !(m && ae >= m.reach); ae += G.value.length, G = G.next) {
                var _ = G.value;
                if (d.length > c.length)
                  return;
                if (!(_ instanceof u)) {
                  var T = 1, S;
                  if (pe) {
                    if (S = v(ue, ae, c, L), !S || S.index >= c.length)
                      break;
                    var B = S.index, $ = S.index + S[0].length, N = ae;
                    for (N += G.value.length; B >= N; )
                      G = G.next, N += G.value.length;
                    if (N -= G.value.length, ae = N, G.value instanceof u)
                      continue;
                    for (var C = G; C !== d.tail && (N < $ || typeof C.value == "string"); C = C.next)
                      T++, N += C.value.length;
                    T--, _ = c.slice(ae, N), S.index -= ae;
                  } else if (S = v(ue, 0, _, L), !S)
                    continue;
                  var B = S.index, M = S[0], P = _.slice(0, B), X = _.slice(B + M.length), W = ae + _.length;
                  m && W > m.reach && (m.reach = W);
                  var V = G.prev;
                  P && (V = b(d, V, P), ae += P.length), F(d, V, T);
                  var ee = new u(E, J ? o.tokenize(M, J) : M, me, M);
                  if (G = b(d, V, ee), X && b(d, G, X), T > 1) {
                    var ie = {
                      cause: E + "," + R,
                      reach: W
                    };
                    f(c, d, p, G.prev, ae, ie), m && ie.reach > m.reach && (m.reach = ie.reach);
                  }
                }
              }
            }
          }
      }
      function k() {
        var c = { value: null, prev: null, next: null }, d = { value: null, prev: c, next: null };
        c.next = d, this.head = c, this.tail = d, this.length = 0;
      }
      function b(c, d, p) {
        var h = d.next, g = { value: p, prev: d, next: h };
        return d.next = g, h.prev = g, c.length++, g;
      }
      function F(c, d, p) {
        for (var h = d.next, g = 0; g < p && h !== c.tail; g++)
          h = h.next;
        d.next = h, h.prev = d, c.length -= g;
      }
      function I(c) {
        for (var d = [], p = c.head.next; p !== c.tail; )
          d.push(p.value), p = p.next;
        return d;
      }
      if (!n.document)
        return n.addEventListener && (o.disableWorkerMessageHandler || n.addEventListener("message", function(c) {
          var d = JSON.parse(c.data), p = d.language, h = d.code, g = d.immediateClose;
          n.postMessage(o.highlight(h, o.languages[p], p)), g && n.close();
        }, !1)), o;
      var y = o.util.currentScript();
      y && (o.filename = y.src, y.hasAttribute("data-manual") && (o.manual = !0));
      function x() {
        o.manual || o.highlightAll();
      }
      if (!o.manual) {
        var A = document.readyState;
        A === "loading" || A === "interactive" && y && y.defer ? document.addEventListener("DOMContentLoaded", x) : window.requestAnimationFrame ? window.requestAnimationFrame(x) : window.setTimeout(x, 16);
      }
      return o;
    })(t);
    l.exports && (l.exports = r), typeof $t < "u" && ($t.Prism = r), r.languages.markup = {
      comment: {
        pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
        greedy: !0
      },
      prolog: {
        pattern: /<\?[\s\S]+?\?>/,
        greedy: !0
      },
      doctype: {
        // https://www.w3.org/TR/xml/#NT-doctypedecl
        pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
        greedy: !0,
        inside: {
          "internal-subset": {
            pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
            lookbehind: !0,
            greedy: !0,
            inside: null
            // see below
          },
          string: {
            pattern: /"[^"]*"|'[^']*'/,
            greedy: !0
          },
          punctuation: /^<!|>$|[[\]]/,
          "doctype-tag": /^DOCTYPE/i,
          name: /[^\s<>'"]+/
        }
      },
      cdata: {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        greedy: !0
      },
      tag: {
        pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
        greedy: !0,
        inside: {
          tag: {
            pattern: /^<\/?[^\s>\/]+/,
            inside: {
              punctuation: /^<\/?/,
              namespace: /^[^\s>\/:]+:/
            }
          },
          "special-attr": [],
          "attr-value": {
            pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
            inside: {
              punctuation: [
                {
                  pattern: /^=/,
                  alias: "attr-equals"
                },
                {
                  pattern: /^(\s*)["']|["']$/,
                  lookbehind: !0
                }
              ]
            }
          },
          punctuation: /\/?>/,
          "attr-name": {
            pattern: /[^\s>\/]+/,
            inside: {
              namespace: /^[^\s>\/:]+:/
            }
          }
        }
      },
      entity: [
        {
          pattern: /&[\da-z]{1,8};/i,
          alias: "named-entity"
        },
        /&#x?[\da-f]{1,8};/i
      ]
    }, r.languages.markup.tag.inside["attr-value"].inside.entity = r.languages.markup.entity, r.languages.markup.doctype.inside["internal-subset"].inside = r.languages.markup, r.hooks.add("wrap", function(n) {
      n.type === "entity" && (n.attributes.title = n.content.replace(/&amp;/, "&"));
    }), Object.defineProperty(r.languages.markup.tag, "addInlined", {
      /**
       * Adds an inlined language to markup.
       *
       * An example of an inlined language is CSS with `<style>` tags.
       *
       * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
       * case insensitive.
       * @param {string} lang The language key.
       * @example
       * addInlined('style', 'css');
       */
      value: function(i, a) {
        var s = {};
        s["language-" + a] = {
          pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
          lookbehind: !0,
          inside: r.languages[a]
        }, s.cdata = /^<!\[CDATA\[|\]\]>$/i;
        var o = {
          "included-cdata": {
            pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
            inside: s
          }
        };
        o["language-" + a] = {
          pattern: /[\s\S]+/,
          inside: r.languages[a]
        };
        var u = {};
        u[i] = {
          pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
            return i;
          }), "i"),
          lookbehind: !0,
          greedy: !0,
          inside: o
        }, r.languages.insertBefore("markup", "cdata", u);
      }
    }), Object.defineProperty(r.languages.markup.tag, "addAttribute", {
      /**
       * Adds an pattern to highlight languages embedded in HTML attributes.
       *
       * An example of an inlined language is CSS with `style` attributes.
       *
       * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
       * case insensitive.
       * @param {string} lang The language key.
       * @example
       * addAttribute('style', 'css');
       */
      value: function(n, i) {
        r.languages.markup.tag.inside["special-attr"].push({
          pattern: RegExp(
            /(^|["'\s])/.source + "(?:" + n + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
            "i"
          ),
          lookbehind: !0,
          inside: {
            "attr-name": /^[^\s=]+/,
            "attr-value": {
              pattern: /=[\s\S]+/,
              inside: {
                value: {
                  pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                  lookbehind: !0,
                  alias: [i, "language-" + i],
                  inside: r.languages[i]
                },
                punctuation: [
                  {
                    pattern: /^=/,
                    alias: "attr-equals"
                  },
                  /"|'/
                ]
              }
            }
          }
        });
      }
    }), r.languages.html = r.languages.markup, r.languages.mathml = r.languages.markup, r.languages.svg = r.languages.markup, r.languages.xml = r.languages.extend("markup", {}), r.languages.ssml = r.languages.xml, r.languages.atom = r.languages.xml, r.languages.rss = r.languages.xml, (function(n) {
      var i = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
      n.languages.css = {
        comment: /\/\*[\s\S]*?\*\//,
        atrule: {
          pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + i.source + ")*?" + /(?:;|(?=\s*\{))/.source),
          inside: {
            rule: /^@[\w-]+/,
            "selector-function-argument": {
              pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
              lookbehind: !0,
              alias: "selector"
            },
            keyword: {
              pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
              lookbehind: !0
            }
            // See rest below
          }
        },
        url: {
          // https://drafts.csswg.org/css-values-3/#urls
          pattern: RegExp("\\burl\\((?:" + i.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
          greedy: !0,
          inside: {
            function: /^url/i,
            punctuation: /^\(|\)$/,
            string: {
              pattern: RegExp("^" + i.source + "$"),
              alias: "url"
            }
          }
        },
        selector: {
          pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + i.source + ")*(?=\\s*\\{)"),
          lookbehind: !0
        },
        string: {
          pattern: i,
          greedy: !0
        },
        property: {
          pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
          lookbehind: !0
        },
        important: /!important\b/i,
        function: {
          pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
          lookbehind: !0
        },
        punctuation: /[(){};:,]/
      }, n.languages.css.atrule.inside.rest = n.languages.css;
      var a = n.languages.markup;
      a && (a.tag.addInlined("style", "css"), a.tag.addAttribute("style", "css"));
    })(r), r.languages.clike = {
      comment: [
        {
          pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
          lookbehind: !0,
          greedy: !0
        },
        {
          pattern: /(^|[^\\:])\/\/.*/,
          lookbehind: !0,
          greedy: !0
        }
      ],
      string: {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: !0
      },
      "class-name": {
        pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
        lookbehind: !0,
        inside: {
          punctuation: /[.\\]/
        }
      },
      keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
      boolean: /\b(?:false|true)\b/,
      function: /\b\w+(?=\()/,
      number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
      operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
      punctuation: /[{}[\];(),.:]/
    }, r.languages.javascript = r.languages.extend("clike", {
      "class-name": [
        r.languages.clike["class-name"],
        {
          pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
          lookbehind: !0
        }
      ],
      keyword: [
        {
          pattern: /((?:^|\})\s*)catch\b/,
          lookbehind: !0
        },
        {
          pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
          lookbehind: !0
        }
      ],
      // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
      function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
      number: {
        pattern: RegExp(
          /(^|[^\w$])/.source + "(?:" + // constant
          (/NaN|Infinity/.source + "|" + // binary integer
          /0[bB][01]+(?:_[01]+)*n?/.source + "|" + // octal integer
          /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + // hexadecimal integer
          /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + // decimal bigint
          /\d+(?:_\d+)*n/.source + "|" + // decimal number (integer or float) but no bigint
          /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source
        ),
        lookbehind: !0
      },
      operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
    }), r.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, r.languages.insertBefore("javascript", "keyword", {
      regex: {
        pattern: RegExp(
          // lookbehind
          // eslint-disable-next-line regexp/no-dupe-characters-character-class
          /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + // Regex pattern:
          // There are 2 regex patterns here. The RegExp set notation proposal added support for nested character
          // classes if the `v` flag is present. Unfortunately, nested CCs are both context-free and incompatible
          // with the only syntax, so we have to define 2 different regex patterns.
          /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + // `v` flag syntax. This supports 3 levels of nested character classes.
          /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + // lookahead
          /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source
        ),
        lookbehind: !0,
        greedy: !0,
        inside: {
          "regex-source": {
            pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
            lookbehind: !0,
            alias: "language-regex",
            inside: r.languages.regex
          },
          "regex-delimiter": /^\/|\/$/,
          "regex-flags": /^[a-z]+$/
        }
      },
      // This must be declared before keyword because we use "function" inside the look-forward
      "function-variable": {
        pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
        alias: "function"
      },
      parameter: [
        {
          pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
          lookbehind: !0,
          inside: r.languages.javascript
        },
        {
          pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
          lookbehind: !0,
          inside: r.languages.javascript
        },
        {
          pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
          lookbehind: !0,
          inside: r.languages.javascript
        },
        {
          pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
          lookbehind: !0,
          inside: r.languages.javascript
        }
      ],
      constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
    }), r.languages.insertBefore("javascript", "string", {
      hashbang: {
        pattern: /^#!.*/,
        greedy: !0,
        alias: "comment"
      },
      "template-string": {
        pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
        greedy: !0,
        inside: {
          "template-punctuation": {
            pattern: /^`|`$/,
            alias: "string"
          },
          interpolation: {
            pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
            lookbehind: !0,
            inside: {
              "interpolation-punctuation": {
                pattern: /^\$\{|\}$/,
                alias: "punctuation"
              },
              rest: r.languages.javascript
            }
          },
          string: /[\s\S]+/
        }
      },
      "string-property": {
        pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
        lookbehind: !0,
        greedy: !0,
        alias: "property"
      }
    }), r.languages.insertBefore("javascript", "operator", {
      "literal-property": {
        pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
        lookbehind: !0,
        alias: "property"
      }
    }), r.languages.markup && (r.languages.markup.tag.addInlined("script", "javascript"), r.languages.markup.tag.addAttribute(
      /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
      "javascript"
    )), r.languages.js = r.languages.javascript, (function() {
      if (typeof r > "u" || typeof document > "u")
        return;
      Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector);
      var n = "Loading…", i = function(y, x) {
        return "✖ Error " + y + " while fetching file: " + x;
      }, a = "✖ Error: File does not exist or is empty", s = {
        js: "javascript",
        py: "python",
        rb: "ruby",
        ps1: "powershell",
        psm1: "powershell",
        sh: "bash",
        bat: "batch",
        h: "c",
        tex: "latex"
      }, o = "data-src-status", u = "loading", v = "loaded", f = "failed", k = "pre[data-src]:not([" + o + '="' + v + '"]):not([' + o + '="' + u + '"])';
      function b(y, x, A) {
        var c = new XMLHttpRequest();
        c.open("GET", y, !0), c.onreadystatechange = function() {
          c.readyState == 4 && (c.status < 400 && c.responseText ? x(c.responseText) : c.status >= 400 ? A(i(c.status, c.statusText)) : A(a));
        }, c.send(null);
      }
      function F(y) {
        var x = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(y || "");
        if (x) {
          var A = Number(x[1]), c = x[2], d = x[3];
          return c ? d ? [A, Number(d)] : [A, void 0] : [A, A];
        }
      }
      r.hooks.add("before-highlightall", function(y) {
        y.selector += ", " + k;
      }), r.hooks.add("before-sanity-check", function(y) {
        var x = (
          /** @type {HTMLPreElement} */
          y.element
        );
        if (x.matches(k)) {
          y.code = "", x.setAttribute(o, u);
          var A = x.appendChild(document.createElement("CODE"));
          A.textContent = n;
          var c = x.getAttribute("data-src"), d = y.language;
          if (d === "none") {
            var p = (/\.(\w+)$/.exec(c) || [, "none"])[1];
            d = s[p] || p;
          }
          r.util.setLanguage(A, d), r.util.setLanguage(x, d);
          var h = r.plugins.autoloader;
          h && h.loadLanguages(d), b(
            c,
            function(g) {
              x.setAttribute(o, v);
              var m = F(x.getAttribute("data-range"));
              if (m) {
                var E = g.split(/\r\n?|\n/g), w = m[0], R = m[1] == null ? E.length : m[1];
                w < 0 && (w += E.length), w = Math.max(0, Math.min(w - 1, E.length)), R < 0 && (R += E.length), R = Math.max(0, Math.min(R, E.length)), g = E.slice(w, R).join(`
`), x.hasAttribute("data-start") || x.setAttribute("data-start", String(w + 1));
              }
              A.textContent = g, r.highlightElement(A);
            },
            function(g) {
              x.setAttribute(o, f), A.textContent = g;
            }
          );
        }
      }), r.plugins.fileHighlight = {
        /**
         * Executes the File Highlight plugin for all matching `pre` elements under the given container.
         *
         * Note: Elements which are already loaded or currently loading will not be touched by this method.
         *
         * @param {ParentNode} [container=document]
         */
        highlight: function(x) {
          for (var A = (x || document).querySelectorAll(k), c = 0, d; d = A[c++]; )
            r.highlightElement(d);
        }
      };
      var I = !1;
      r.fileHighlight = function() {
        I || (console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."), I = !0), r.plugins.fileHighlight.highlight.apply(this, arguments);
      };
    })();
  })(Ct)), Ct.exports;
}
pn();
var Gt = {}, Yt;
function hn() {
  return Yt || (Yt = 1, Prism.languages.python = {
    comment: {
      pattern: /(^|[^\\])#.*/,
      lookbehind: !0,
      greedy: !0
    },
    "string-interpolation": {
      pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
      greedy: !0,
      inside: {
        interpolation: {
          // "{" <expression> <optional "!s", "!r", or "!a"> <optional ":" format specifier> "}"
          pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
          lookbehind: !0,
          inside: {
            "format-spec": {
              pattern: /(:)[^:(){}]+(?=\}$)/,
              lookbehind: !0
            },
            "conversion-option": {
              pattern: /![sra](?=[:}]$)/,
              alias: "punctuation"
            },
            rest: null
          }
        },
        string: /[\s\S]+/
      }
    },
    "triple-quoted-string": {
      pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
      greedy: !0,
      alias: "string"
    },
    string: {
      pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
      greedy: !0
    },
    function: {
      pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
      lookbehind: !0
    },
    "class-name": {
      pattern: /(\bclass\s+)\w+/i,
      lookbehind: !0
    },
    decorator: {
      pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
      lookbehind: !0,
      alias: ["annotation", "punctuation"],
      inside: {
        punctuation: /\./
      }
    },
    keyword: /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
    builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
    boolean: /\b(?:False|None|True)\b/,
    number: /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
    operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
    punctuation: /[{}[\];(),.:]/
  }, Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest = Prism.languages.python, Prism.languages.py = Prism.languages.python), Gt;
}
hn();
(function(l) {
  var t = /\\(?:[^a-z()[\]]|[a-z*]+)/i, r = {
    "equation-command": {
      pattern: t,
      alias: "regex"
    }
  };
  l.languages.latex = {
    comment: /%.*/,
    // the verbatim environment prints whitespace to the document
    cdata: {
      pattern: /(\\begin\{((?:lstlisting|verbatim)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
      lookbehind: !0
    },
    /*
     * equations can be between $$ $$ or $ $ or \( \) or \[ \]
     * (all are multiline)
     */
    equation: [
      {
        pattern: /\$\$(?:\\[\s\S]|[^\\$])+\$\$|\$(?:\\[\s\S]|[^\\$])+\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]/,
        inside: r,
        alias: "string"
      },
      {
        pattern: /(\\begin\{((?:align|eqnarray|equation|gather|math|multline)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
        lookbehind: !0,
        inside: r,
        alias: "string"
      }
    ],
    /*
     * arguments which are keywords or references are highlighted
     * as keywords
     */
    keyword: {
      pattern: /(\\(?:begin|cite|documentclass|end|label|ref|usepackage)(?:\[[^\]]+\])?\{)[^}]+(?=\})/,
      lookbehind: !0
    },
    url: {
      pattern: /(\\url\{)[^}]+(?=\})/,
      lookbehind: !0
    },
    /*
     * section or chapter headlines are highlighted as bold so that
     * they stand out more
     */
    headline: {
      pattern: /(\\(?:chapter|frametitle|paragraph|part|section|subparagraph|subsection|subsubparagraph|subsubsection|subsubsubparagraph)\*?(?:\[[^\]]+\])?\{)[^}]+(?=\})/,
      lookbehind: !0,
      alias: "class-name"
    },
    function: {
      pattern: t,
      alias: "selector"
    },
    punctuation: /[[\]{}&]/
  }, l.languages.tex = l.languages.latex, l.languages.context = l.languages.latex;
})(Prism);
(function(l) {
  var t = "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b", r = {
    pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
    lookbehind: !0,
    alias: "punctuation",
    // this looks reasonably well in all themes
    inside: null
    // see below
  }, n = {
    bash: r,
    environment: {
      pattern: RegExp("\\$" + t),
      alias: "constant"
    },
    variable: [
      // [0]: Arithmetic Environment
      {
        pattern: /\$?\(\([\s\S]+?\)\)/,
        greedy: !0,
        inside: {
          // If there is a $ sign at the beginning highlight $(( and )) as variable
          variable: [
            {
              pattern: /(^\$\(\([\s\S]+)\)\)/,
              lookbehind: !0
            },
            /^\$\(\(/
          ],
          number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
          // Operators according to https://www.gnu.org/software/bash/manual/bashref.html#Shell-Arithmetic
          operator: /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
          // If there is no $ sign at the beginning highlight (( and )) as punctuation
          punctuation: /\(\(?|\)\)?|,|;/
        }
      },
      // [1]: Command Substitution
      {
        pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
        greedy: !0,
        inside: {
          variable: /^\$\(|^`|\)$|`$/
        }
      },
      // [2]: Brace expansion
      {
        pattern: /\$\{[^}]+\}/,
        greedy: !0,
        inside: {
          operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
          punctuation: /[\[\]]/,
          environment: {
            pattern: RegExp("(\\{)" + t),
            lookbehind: !0,
            alias: "constant"
          }
        }
      },
      /\$(?:\w+|[#?*!@$])/
    ],
    // Escape sequences from echo and printf's manuals, and escaped quotes.
    entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/
  };
  l.languages.bash = {
    shebang: {
      pattern: /^#!\s*\/.*/,
      alias: "important"
    },
    comment: {
      pattern: /(^|[^"{\\$])#.*/,
      lookbehind: !0
    },
    "function-name": [
      // a) function foo {
      // b) foo() {
      // c) function foo() {
      // but not “foo {”
      {
        // a) and c)
        pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
        lookbehind: !0,
        alias: "function"
      },
      {
        // b)
        pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/,
        alias: "function"
      }
    ],
    // Highlight variable names as variables in for and select beginnings.
    "for-or-select": {
      pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
      alias: "variable",
      lookbehind: !0
    },
    // Highlight variable names as variables in the left-hand part
    // of assignments (“=” and “+=”).
    "assign-left": {
      pattern: /(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,
      inside: {
        environment: {
          pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + t),
          lookbehind: !0,
          alias: "constant"
        }
      },
      alias: "variable",
      lookbehind: !0
    },
    // Highlight parameter names as variables
    parameter: {
      pattern: /(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,
      alias: "variable",
      lookbehind: !0
    },
    string: [
      // Support for Here-documents https://en.wikipedia.org/wiki/Here_document
      {
        pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
        lookbehind: !0,
        greedy: !0,
        inside: n
      },
      // Here-document with quotes around the tag
      // → No expansion (so no “inside”).
      {
        pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
        lookbehind: !0,
        greedy: !0,
        inside: {
          bash: r
        }
      },
      // “Normal” string
      {
        // https://www.gnu.org/software/bash/manual/html_node/Double-Quotes.html
        pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
        lookbehind: !0,
        greedy: !0,
        inside: n
      },
      {
        // https://www.gnu.org/software/bash/manual/html_node/Single-Quotes.html
        pattern: /(^|[^$\\])'[^']*'/,
        lookbehind: !0,
        greedy: !0
      },
      {
        // https://www.gnu.org/software/bash/manual/html_node/ANSI_002dC-Quoting.html
        pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
        greedy: !0,
        inside: {
          entity: n.entity
        }
      }
    ],
    environment: {
      pattern: RegExp("\\$?" + t),
      alias: "constant"
    },
    variable: n.variable,
    function: {
      pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
      lookbehind: !0
    },
    keyword: {
      pattern: /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
      lookbehind: !0
    },
    // https://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html
    builtin: {
      pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
      lookbehind: !0,
      // Alias added to make those easier to distinguish from strings.
      alias: "class-name"
    },
    boolean: {
      pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
      lookbehind: !0
    },
    "file-descriptor": {
      pattern: /\B&\d\b/,
      alias: "important"
    },
    operator: {
      // Lots of redirections here, but not just that.
      pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
      inside: {
        "file-descriptor": {
          pattern: /^\d/,
          alias: "important"
        }
      }
    },
    punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
    number: {
      pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
      lookbehind: !0
    }
  }, r.inside = l.languages.bash;
  for (var i = [
    "comment",
    "function-name",
    "for-or-select",
    "assign-left",
    "parameter",
    "string",
    "environment",
    "function",
    "keyword",
    "builtin",
    "boolean",
    "file-descriptor",
    "operator",
    "punctuation",
    "number"
  ], a = n.variable[1].inside, s = 0; s < i.length; s++)
    a[i[s]] = l.languages.bash[i[s]];
  l.languages.sh = l.languages.bash, l.languages.shell = l.languages.bash;
})(Prism);
Prism.languages.c = Prism.languages.extend("clike", {
  comment: {
    pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
    greedy: !0
  },
  string: {
    // https://en.cppreference.com/w/c/language/string_literal
    pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
    greedy: !0
  },
  "class-name": {
    pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
    lookbehind: !0
  },
  keyword: /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,
  function: /\b[a-z_]\w*(?=\s*\()/i,
  number: /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
  operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/
});
Prism.languages.insertBefore("c", "string", {
  char: {
    // https://en.cppreference.com/w/c/language/character_constant
    pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,
    greedy: !0
  }
});
Prism.languages.insertBefore("c", "string", {
  macro: {
    // allow for multiline macro definitions
    // spaces after the # character compile fine with gcc
    pattern: /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
    lookbehind: !0,
    greedy: !0,
    alias: "property",
    inside: {
      string: [
        {
          // highlight the path of the include statement as a string
          pattern: /^(#\s*include\s*)<[^>]+>/,
          lookbehind: !0
        },
        Prism.languages.c.string
      ],
      char: Prism.languages.c.char,
      comment: Prism.languages.c.comment,
      "macro-name": [
        {
          pattern: /(^#\s*define\s+)\w+\b(?!\()/i,
          lookbehind: !0
        },
        {
          pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
          lookbehind: !0,
          alias: "function"
        }
      ],
      // highlight macro directives as keywords
      directive: {
        pattern: /^(#\s*)[a-z]+/,
        lookbehind: !0,
        alias: "keyword"
      },
      "directive-hash": /^#/,
      punctuation: /##|\\(?=[\r\n])/,
      expression: {
        pattern: /\S[\s\S]*/,
        inside: Prism.languages.c
      }
    }
  }
});
Prism.languages.insertBefore("c", "function", {
  // highlight predefined macros as constants
  constant: /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/
});
delete Prism.languages.c.boolean;
var Xt = {}, Wt;
function gn() {
  return Wt || (Wt = 1, (function(l) {
    var t = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/, r = /\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g, function() {
      return t.source;
    });
    l.languages.cpp = l.languages.extend("c", {
      "class-name": [
        {
          pattern: RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g, function() {
            return t.source;
          })),
          lookbehind: !0
        },
        // This is intended to capture the class name of method implementations like:
        //   void foo::bar() const {}
        // However! The `foo` in the above example could also be a namespace, so we only capture the class name if
        // it starts with an uppercase letter. This approximation should give decent results.
        /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,
        // This will capture the class name before destructors like:
        //   Foo::~Foo() {}
        /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,
        // This also intends to capture the class name of method implementations but here the class has template
        // parameters, so it can't be a namespace (until C++ adds generic namespaces).
        /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/
      ],
      keyword: t,
      number: {
        pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
        greedy: !0
      },
      operator: />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
      boolean: /\b(?:false|true)\b/
    }), l.languages.insertBefore("cpp", "string", {
      module: {
        // https://en.cppreference.com/w/cpp/language/modules
        pattern: RegExp(
          /(\b(?:import|module)\s+)/.source + "(?:" + // header-name
          /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source + "|" + // module name or partition or both
          /<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g, function() {
            return r;
          }) + ")"
        ),
        lookbehind: !0,
        greedy: !0,
        inside: {
          string: /^[<"][\s\S]+/,
          operator: /:/,
          punctuation: /\./
        }
      },
      "raw-string": {
        pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
        alias: "string",
        greedy: !0
      }
    }), l.languages.insertBefore("cpp", "keyword", {
      "generic-function": {
        pattern: /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,
        inside: {
          function: /^\w+/,
          generic: {
            pattern: /<[\s\S]+/,
            alias: "class-name",
            inside: l.languages.cpp
          }
        }
      }
    }), l.languages.insertBefore("cpp", "operator", {
      "double-colon": {
        pattern: /::/,
        alias: "punctuation"
      }
    }), l.languages.insertBefore("cpp", "class-name", {
      // the base clause is an optional list of parent classes
      // https://en.cppreference.com/w/cpp/language/class
      "base-clause": {
        pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
        lookbehind: !0,
        greedy: !0,
        inside: l.languages.extend("cpp", {})
      }
    }), l.languages.insertBefore("inside", "double-colon", {
      // All untokenized words that are not namespaces should be class names
      "class-name": /\b[a-z_]\w*\b(?!\s*::)/i
    }, l.languages.cpp["base-clause"]);
  })(Prism)), Xt;
}
gn();
Prism.languages.json = {
  property: {
    pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
    lookbehind: !0,
    greedy: !0
  },
  string: {
    pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
    lookbehind: !0,
    greedy: !0
  },
  comment: {
    pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
    greedy: !0
  },
  number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
  punctuation: /[{}[\],]/,
  operator: /:/,
  boolean: /\b(?:false|true)\b/,
  null: {
    pattern: /\bnull\b/,
    alias: "keyword"
  }
};
Prism.languages.webmanifest = Prism.languages.json;
Prism.languages.sql = {
  comment: {
    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
    lookbehind: !0
  },
  variable: [
    {
      pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,
      greedy: !0
    },
    /@[\w.$]+/
  ],
  string: {
    pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
    greedy: !0,
    lookbehind: !0
  },
  identifier: {
    pattern: /(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,
    greedy: !0,
    lookbehind: !0,
    inside: {
      punctuation: /^`|`$/
    }
  },
  function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
  // Should we highlight user defined functions too?
  keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
  boolean: /\b(?:FALSE|NULL|TRUE)\b/i,
  number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
  operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
  punctuation: /[;[\]()`,.]/
};
var Kt = {}, Qt;
function fn() {
  return Qt || (Qt = 1, (function(l) {
    var t = /\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/, r = /(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source, n = {
      pattern: RegExp(/(^|[^\w.])/.source + r + /[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),
      lookbehind: !0,
      inside: {
        namespace: {
          pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,
          inside: {
            punctuation: /\./
          }
        },
        punctuation: /\./
      }
    };
    l.languages.java = l.languages.extend("clike", {
      string: {
        pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,
        lookbehind: !0,
        greedy: !0
      },
      "class-name": [
        n,
        {
          // variables, parameters, and constructor references
          // this to support class names (or generic parameters) which do not contain a lower case letter (also works for methods)
          pattern: RegExp(/(^|[^\w.])/.source + r + /[A-Z]\w*(?=\s+\w+\s*[;,=()]|\s*(?:\[[\s,]*\]\s*)?::\s*new\b)/.source),
          lookbehind: !0,
          inside: n.inside
        },
        {
          // class names based on keyword
          // this to support class names (or generic parameters) which do not contain a lower case letter (also works for methods)
          pattern: RegExp(/(\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\s+)/.source + r + /[A-Z]\w*\b/.source),
          lookbehind: !0,
          inside: n.inside
        }
      ],
      keyword: t,
      function: [
        l.languages.clike.function,
        {
          pattern: /(::\s*)[a-z_]\w*/,
          lookbehind: !0
        }
      ],
      number: /\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
      operator: {
        pattern: /(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,
        lookbehind: !0
      },
      constant: /\b[A-Z][A-Z_\d]+\b/
    }), l.languages.insertBefore("java", "string", {
      "triple-quoted-string": {
        // http://openjdk.java.net/jeps/355#Description
        pattern: /"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,
        greedy: !0,
        alias: "string"
      },
      char: {
        pattern: /'(?:\\.|[^'\\\r\n]){1,6}'/,
        greedy: !0
      }
    }), l.languages.insertBefore("java", "class-name", {
      annotation: {
        pattern: /(^|[^.])@\w+(?:\s*\.\s*\w+)*/,
        lookbehind: !0,
        alias: "punctuation"
      },
      generics: {
        pattern: /<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,
        inside: {
          "class-name": n,
          keyword: t,
          punctuation: /[<>(),.:]/,
          operator: /[?&|]/
        }
      },
      import: [
        {
          pattern: RegExp(/(\bimport\s+)/.source + r + /(?:[A-Z]\w*|\*)(?=\s*;)/.source),
          lookbehind: !0,
          inside: {
            namespace: n.inside.namespace,
            punctuation: /\./,
            operator: /\*/,
            "class-name": /\w+/
          }
        },
        {
          pattern: RegExp(/(\bimport\s+static\s+)/.source + r + /(?:\w+|\*)(?=\s*;)/.source),
          lookbehind: !0,
          alias: "static",
          inside: {
            namespace: n.inside.namespace,
            static: /\b\w+$/,
            punctuation: /\./,
            operator: /\*/,
            "class-name": /\w+/
          }
        }
      ],
      namespace: {
        pattern: RegExp(
          /(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/.source.replace(/<keyword>/g, function() {
            return t.source;
          })
        ),
        lookbehind: !0,
        inside: {
          punctuation: /\./
        }
      }
    });
  })(Prism)), Kt;
}
fn();
Prism.languages.go = Prism.languages.extend("clike", {
  string: {
    pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,
    lookbehind: !0,
    greedy: !0
  },
  keyword: /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
  boolean: /\b(?:_|false|iota|nil|true)\b/,
  number: [
    // binary and octal integers
    /\b0(?:b[01_]+|o[0-7_]+)i?\b/i,
    // hexadecimal integers and floats
    /\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,
    // decimal integers and floats
    /(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i
  ],
  operator: /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
  builtin: /\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/
});
Prism.languages.insertBefore("go", "string", {
  char: {
    pattern: /'(?:\\.|[^'\\\r\n]){0,10}'/,
    greedy: !0
  }
});
delete Prism.languages.go["class-name"];
var Jt = {}, er;
function vn() {
  return er || (er = 1, (function(l) {
    for (var t = /\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source, r = 0; r < 2; r++)
      t = t.replace(/<self>/g, function() {
        return t;
      });
    t = t.replace(/<self>/g, function() {
      return /[^\s\S]/.source;
    }), l.languages.rust = {
      comment: [
        {
          pattern: RegExp(/(^|[^\\])/.source + t),
          lookbehind: !0,
          greedy: !0
        },
        {
          pattern: /(^|[^\\:])\/\/.*/,
          lookbehind: !0,
          greedy: !0
        }
      ],
      string: {
        pattern: /b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/,
        greedy: !0
      },
      char: {
        pattern: /b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/,
        greedy: !0
      },
      attribute: {
        pattern: /#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,
        greedy: !0,
        alias: "attr-name",
        inside: {
          string: null
          // see below
        }
      },
      // Closure params should not be confused with bitwise OR |
      "closure-params": {
        pattern: /([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,
        lookbehind: !0,
        greedy: !0,
        inside: {
          "closure-punctuation": {
            pattern: /^\||\|$/,
            alias: "punctuation"
          },
          rest: null
          // see below
        }
      },
      "lifetime-annotation": {
        pattern: /'\w+/,
        alias: "symbol"
      },
      "fragment-specifier": {
        pattern: /(\$\w+:)[a-z]+/,
        lookbehind: !0,
        alias: "punctuation"
      },
      variable: /\$\w+/,
      "function-definition": {
        pattern: /(\bfn\s+)\w+/,
        lookbehind: !0,
        alias: "function"
      },
      "type-definition": {
        pattern: /(\b(?:enum|struct|trait|type|union)\s+)\w+/,
        lookbehind: !0,
        alias: "class-name"
      },
      "module-declaration": [
        {
          pattern: /(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,
          lookbehind: !0,
          alias: "namespace"
        },
        {
          pattern: /(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,
          lookbehind: !0,
          alias: "namespace",
          inside: {
            punctuation: /::/
          }
        }
      ],
      keyword: [
        // https://github.com/rust-lang/reference/blob/master/src/keywords.md
        /\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/,
        // primitives and str
        // https://doc.rust-lang.org/stable/rust-by-example/primitives.html
        /\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/
      ],
      // functions can technically start with an upper-case letter, but this will introduce a lot of false positives
      // and Rust's naming conventions recommend snake_case anyway.
      // https://doc.rust-lang.org/1.0.0/style/style/naming/README.html
      function: /\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,
      macro: {
        pattern: /\b\w+!/,
        alias: "property"
      },
      constant: /\b[A-Z_][A-Z_\d]+\b/,
      "class-name": /\b[A-Z]\w*\b/,
      namespace: {
        pattern: /(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,
        inside: {
          punctuation: /::/
        }
      },
      // Hex, oct, bin, dec numbers with visual separators and type suffix
      number: /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/,
      boolean: /\b(?:false|true)\b/,
      punctuation: /->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,
      operator: /[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/
    }, l.languages.rust["closure-params"].inside.rest = l.languages.rust, l.languages.rust.attribute.inside.string = l.languages.rust.string;
  })(Prism)), Jt;
}
vn();
var tr = {}, rr;
function mn() {
  return rr || (rr = 1, (function(l) {
    var t = /\/\*[\s\S]*?\*\/|\/\/.*|#(?!\[).*/, r = [
      {
        pattern: /\b(?:false|true)\b/i,
        alias: "boolean"
      },
      {
        pattern: /(::\s*)\b[a-z_]\w*\b(?!\s*\()/i,
        greedy: !0,
        lookbehind: !0
      },
      {
        pattern: /(\b(?:case|const)\s+)\b[a-z_]\w*(?=\s*[;=])/i,
        greedy: !0,
        lookbehind: !0
      },
      /\b(?:null)\b/i,
      /\b[A-Z_][A-Z0-9_]*\b(?!\s*\()/
    ], n = /\b0b[01]+(?:_[01]+)*\b|\b0o[0-7]+(?:_[0-7]+)*\b|\b0x[\da-f]+(?:_[\da-f]+)*\b|(?:\b\d+(?:_\d+)*\.?(?:\d+(?:_\d+)*)?|\B\.\d+)(?:e[+-]?\d+)?/i, i = /<?=>|\?\?=?|\.{3}|\??->|[!=]=?=?|::|\*\*=?|--|\+\+|&&|\|\||<<|>>|[?~]|[/^|%*&<>.+-]=?/, a = /[{}\[\](),:;]/;
    l.languages.php = {
      delimiter: {
        pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i,
        alias: "important"
      },
      comment: t,
      variable: /\$+(?:\w+\b|(?=\{))/,
      package: {
        pattern: /(namespace\s+|use\s+(?:function\s+)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
        lookbehind: !0,
        inside: {
          punctuation: /\\/
        }
      },
      "class-name-definition": {
        pattern: /(\b(?:class|enum|interface|trait)\s+)\b[a-z_]\w*(?!\\)\b/i,
        lookbehind: !0,
        alias: "class-name"
      },
      "function-definition": {
        pattern: /(\bfunction\s+)[a-z_]\w*(?=\s*\()/i,
        lookbehind: !0,
        alias: "function"
      },
      keyword: [
        {
          pattern: /(\(\s*)\b(?:array|bool|boolean|float|int|integer|object|string)\b(?=\s*\))/i,
          alias: "type-casting",
          greedy: !0,
          lookbehind: !0
        },
        {
          pattern: /([(,?]\s*)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|object|self|static|string)\b(?=\s*\$)/i,
          alias: "type-hint",
          greedy: !0,
          lookbehind: !0
        },
        {
          pattern: /(\)\s*:\s*(?:\?\s*)?)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|never|object|self|static|string|void)\b/i,
          alias: "return-type",
          greedy: !0,
          lookbehind: !0
        },
        {
          pattern: /\b(?:array(?!\s*\()|bool|float|int|iterable|mixed|object|string|void)\b/i,
          alias: "type-declaration",
          greedy: !0
        },
        {
          pattern: /(\|\s*)(?:false|null)\b|\b(?:false|null)(?=\s*\|)/i,
          alias: "type-declaration",
          greedy: !0,
          lookbehind: !0
        },
        {
          pattern: /\b(?:parent|self|static)(?=\s*::)/i,
          alias: "static-context",
          greedy: !0
        },
        {
          // yield from
          pattern: /(\byield\s+)from\b/i,
          lookbehind: !0
        },
        // `class` is always a keyword unlike other keywords
        /\bclass\b/i,
        {
          // https://www.php.net/manual/en/reserved.keywords.php
          //
          // keywords cannot be preceded by "->"
          // the complex lookbehind means `(?<!(?:->|::)\s*)`
          pattern: /((?:^|[^\s>:]|(?:^|[^-])>|(?:^|[^:]):)\s*)\b(?:abstract|and|array|as|break|callable|case|catch|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|enum|eval|exit|extends|final|finally|fn|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|match|namespace|never|new|or|parent|print|private|protected|public|readonly|require|require_once|return|self|static|switch|throw|trait|try|unset|use|var|while|xor|yield|__halt_compiler)\b/i,
          lookbehind: !0
        }
      ],
      "argument-name": {
        pattern: /([(,]\s*)\b[a-z_]\w*(?=\s*:(?!:))/i,
        lookbehind: !0
      },
      "class-name": [
        {
          pattern: /(\b(?:extends|implements|instanceof|new(?!\s+self|\s+static))\s+|\bcatch\s*\()\b[a-z_]\w*(?!\\)\b/i,
          greedy: !0,
          lookbehind: !0
        },
        {
          pattern: /(\|\s*)\b[a-z_]\w*(?!\\)\b/i,
          greedy: !0,
          lookbehind: !0
        },
        {
          pattern: /\b[a-z_]\w*(?!\\)\b(?=\s*\|)/i,
          greedy: !0
        },
        {
          pattern: /(\|\s*)(?:\\?\b[a-z_]\w*)+\b/i,
          alias: "class-name-fully-qualified",
          greedy: !0,
          lookbehind: !0,
          inside: {
            punctuation: /\\/
          }
        },
        {
          pattern: /(?:\\?\b[a-z_]\w*)+\b(?=\s*\|)/i,
          alias: "class-name-fully-qualified",
          greedy: !0,
          inside: {
            punctuation: /\\/
          }
        },
        {
          pattern: /(\b(?:extends|implements|instanceof|new(?!\s+self\b|\s+static\b))\s+|\bcatch\s*\()(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
          alias: "class-name-fully-qualified",
          greedy: !0,
          lookbehind: !0,
          inside: {
            punctuation: /\\/
          }
        },
        {
          pattern: /\b[a-z_]\w*(?=\s*\$)/i,
          alias: "type-declaration",
          greedy: !0
        },
        {
          pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,
          alias: ["class-name-fully-qualified", "type-declaration"],
          greedy: !0,
          inside: {
            punctuation: /\\/
          }
        },
        {
          pattern: /\b[a-z_]\w*(?=\s*::)/i,
          alias: "static-context",
          greedy: !0
        },
        {
          pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*::)/i,
          alias: ["class-name-fully-qualified", "static-context"],
          greedy: !0,
          inside: {
            punctuation: /\\/
          }
        },
        {
          pattern: /([(,?]\s*)[a-z_]\w*(?=\s*\$)/i,
          alias: "type-hint",
          greedy: !0,
          lookbehind: !0
        },
        {
          pattern: /([(,?]\s*)(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,
          alias: ["class-name-fully-qualified", "type-hint"],
          greedy: !0,
          lookbehind: !0,
          inside: {
            punctuation: /\\/
          }
        },
        {
          pattern: /(\)\s*:\s*(?:\?\s*)?)\b[a-z_]\w*(?!\\)\b/i,
          alias: "return-type",
          greedy: !0,
          lookbehind: !0
        },
        {
          pattern: /(\)\s*:\s*(?:\?\s*)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
          alias: ["class-name-fully-qualified", "return-type"],
          greedy: !0,
          lookbehind: !0,
          inside: {
            punctuation: /\\/
          }
        }
      ],
      constant: r,
      function: {
        pattern: /(^|[^\\\w])\\?[a-z_](?:[\w\\]*\w)?(?=\s*\()/i,
        lookbehind: !0,
        inside: {
          punctuation: /\\/
        }
      },
      property: {
        pattern: /(->\s*)\w+/,
        lookbehind: !0
      },
      number: n,
      operator: i,
      punctuation: a
    };
    var s = {
      pattern: /\{\$(?:\{(?:\{[^{}]+\}|[^{}]+)\}|[^{}])+\}|(^|[^\\{])\$+(?:\w+(?:\[[^\r\n\[\]]+\]|->\w+)?)/,
      lookbehind: !0,
      inside: l.languages.php
    }, o = [
      {
        pattern: /<<<'([^']+)'[\r\n](?:.*[\r\n])*?\1;/,
        alias: "nowdoc-string",
        greedy: !0,
        inside: {
          delimiter: {
            pattern: /^<<<'[^']+'|[a-z_]\w*;$/i,
            alias: "symbol",
            inside: {
              punctuation: /^<<<'?|[';]$/
            }
          }
        }
      },
      {
        pattern: /<<<(?:"([^"]+)"[\r\n](?:.*[\r\n])*?\1;|([a-z_]\w*)[\r\n](?:.*[\r\n])*?\2;)/i,
        alias: "heredoc-string",
        greedy: !0,
        inside: {
          delimiter: {
            pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,
            alias: "symbol",
            inside: {
              punctuation: /^<<<"?|[";]$/
            }
          },
          interpolation: s
        }
      },
      {
        pattern: /`(?:\\[\s\S]|[^\\`])*`/,
        alias: "backtick-quoted-string",
        greedy: !0
      },
      {
        pattern: /'(?:\\[\s\S]|[^\\'])*'/,
        alias: "single-quoted-string",
        greedy: !0
      },
      {
        pattern: /"(?:\\[\s\S]|[^\\"])*"/,
        alias: "double-quoted-string",
        greedy: !0,
        inside: {
          interpolation: s
        }
      }
    ];
    l.languages.insertBefore("php", "variable", {
      string: o,
      attribute: {
        pattern: /#\[(?:[^"'\/#]|\/(?![*/])|\/\/.*$|#(?!\[).*$|\/\*(?:[^*]|\*(?!\/))*\*\/|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')+\](?=\s*[a-z$#])/im,
        greedy: !0,
        inside: {
          "attribute-content": {
            pattern: /^(#\[)[\s\S]+(?=\]$)/,
            lookbehind: !0,
            // inside can appear subset of php
            inside: {
              comment: t,
              string: o,
              "attribute-class-name": [
                {
                  pattern: /([^:]|^)\b[a-z_]\w*(?!\\)\b/i,
                  alias: "class-name",
                  greedy: !0,
                  lookbehind: !0
                },
                {
                  pattern: /([^:]|^)(?:\\?\b[a-z_]\w*)+/i,
                  alias: [
                    "class-name",
                    "class-name-fully-qualified"
                  ],
                  greedy: !0,
                  lookbehind: !0,
                  inside: {
                    punctuation: /\\/
                  }
                }
              ],
              constant: r,
              number: n,
              operator: i,
              punctuation: a
            }
          },
          delimiter: {
            pattern: /^#\[|\]$/,
            alias: "punctuation"
          }
        }
      }
    }), l.hooks.add("before-tokenize", function(u) {
      if (/<\?/.test(u.code)) {
        var v = /<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#(?!\[))(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|#\[|\/\*(?:[^*]|\*(?!\/))*(?:\*\/|$))*?(?:\?>|$)/g;
        l.languages["markup-templating"].buildPlaceholders(u, "php", v);
      }
    }), l.hooks.add("after-tokenize", function(u) {
      l.languages["markup-templating"].tokenizePlaceholders(u, "php");
    });
  })(Prism)), tr;
}
mn();
(function(l) {
  var t = /[*&][^\s[\]{},]+/, r = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/, n = "(?:" + r.source + "(?:[ 	]+" + t.source + ")?|" + t.source + "(?:[ 	]+" + r.source + ")?)", i = /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g, function() {
    return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source;
  }), a = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
  function s(o, u) {
    u = (u || "").replace(/m/g, "") + "m";
    var v = /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g, function() {
      return n;
    }).replace(/<<value>>/g, function() {
      return o;
    });
    return RegExp(v, u);
  }
  l.languages.yaml = {
    scalar: {
      pattern: RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g, function() {
        return n;
      })),
      lookbehind: !0,
      alias: "string"
    },
    comment: /#.*/,
    key: {
      pattern: RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g, function() {
        return n;
      }).replace(/<<key>>/g, function() {
        return "(?:" + i + "|" + a + ")";
      })),
      lookbehind: !0,
      greedy: !0,
      alias: "atrule"
    },
    directive: {
      pattern: /(^[ \t]*)%.+/m,
      lookbehind: !0,
      alias: "important"
    },
    datetime: {
      pattern: s(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),
      lookbehind: !0,
      alias: "number"
    },
    boolean: {
      pattern: s(/false|true/.source, "i"),
      lookbehind: !0,
      alias: "important"
    },
    null: {
      pattern: s(/null|~/.source, "i"),
      lookbehind: !0,
      alias: "important"
    },
    string: {
      pattern: s(a),
      lookbehind: !0,
      greedy: !0
    },
    number: {
      pattern: s(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source, "i"),
      lookbehind: !0
    },
    tag: r,
    important: t,
    punctuation: /---|[:[\]{}\-,|>?]|\.\.\./
  }, l.languages.yml = l.languages.yaml;
})(Prism);
(function(l) {
  function t(r, n) {
    return "___" + r.toUpperCase() + n + "___";
  }
  Object.defineProperties(l.languages["markup-templating"] = {}, {
    buildPlaceholders: {
      /**
       * Tokenize all inline templating expressions matching `placeholderPattern`.
       *
       * If `replaceFilter` is provided, only matches of `placeholderPattern` for which `replaceFilter` returns
       * `true` will be replaced.
       *
       * @param {object} env The environment of the `before-tokenize` hook.
       * @param {string} language The language id.
       * @param {RegExp} placeholderPattern The matches of this pattern will be replaced by placeholders.
       * @param {(match: string) => boolean} [replaceFilter]
       */
      value: function(r, n, i, a) {
        if (r.language === n) {
          var s = r.tokenStack = [];
          r.code = r.code.replace(i, function(o) {
            if (typeof a == "function" && !a(o))
              return o;
            for (var u = s.length, v; r.code.indexOf(v = t(n, u)) !== -1; )
              ++u;
            return s[u] = o, v;
          }), r.grammar = l.languages.markup;
        }
      }
    },
    tokenizePlaceholders: {
      /**
       * Replace placeholders with proper tokens after tokenizing.
       *
       * @param {object} env The environment of the `after-tokenize` hook.
       * @param {string} language The language id.
       */
      value: function(r, n) {
        if (r.language !== n || !r.tokenStack)
          return;
        r.grammar = l.languages[n];
        var i = 0, a = Object.keys(r.tokenStack);
        function s(o) {
          for (var u = 0; u < o.length && !(i >= a.length); u++) {
            var v = o[u];
            if (typeof v == "string" || v.content && typeof v.content == "string") {
              var f = a[i], k = r.tokenStack[f], b = typeof v == "string" ? v : v.content, F = t(n, f), I = b.indexOf(F);
              if (I > -1) {
                ++i;
                var y = b.substring(0, I), x = new l.Token(n, l.tokenize(k, r.grammar), "language-" + n, k), A = b.substring(I + F.length), c = [];
                y && c.push.apply(c, s([y])), c.push(x), A && c.push.apply(c, s([A])), typeof v == "string" ? o.splice.apply(o, [u, 1].concat(c)) : v.content = c;
              }
            } else v.content && s(v.content);
          }
          return o;
        }
        s(r.tokens);
      }
    }
  });
})(Prism);
new vr();
const wn = (l) => {
  const t = {};
  for (let r = 0, n = l.length; r < n; r++) {
    const i = l[r];
    for (const a in i)
      t[a] ? t[a] = t[a].concat(i[a]) : t[a] = i[a];
  }
  return t;
}, bn = [
  "abbr",
  "accept",
  "accept-charset",
  "accesskey",
  "action",
  "align",
  "alink",
  "allow",
  "allowfullscreen",
  "alt",
  "anchor",
  "archive",
  "as",
  "async",
  "autocapitalize",
  "autocomplete",
  "autocorrect",
  "autofocus",
  "autopictureinpicture",
  "autoplay",
  "axis",
  "background",
  "behavior",
  "bgcolor",
  "border",
  "bordercolor",
  "capture",
  "cellpadding",
  "cellspacing",
  "challenge",
  "char",
  "charoff",
  "charset",
  "checked",
  "cite",
  "class",
  "classid",
  "clear",
  "code",
  "codebase",
  "codetype",
  "color",
  "cols",
  "colspan",
  "compact",
  "content",
  "contenteditable",
  "controls",
  "controlslist",
  "conversiondestination",
  "coords",
  "crossorigin",
  "csp",
  "data",
  "datetime",
  "declare",
  "decoding",
  "default",
  "defer",
  "dir",
  "direction",
  "dirname",
  "disabled",
  "disablepictureinpicture",
  "disableremoteplayback",
  "disallowdocumentaccess",
  "download",
  "draggable",
  "elementtiming",
  "enctype",
  "end",
  "enterkeyhint",
  "event",
  "exportparts",
  "face",
  "for",
  "form",
  "formaction",
  "formenctype",
  "formmethod",
  "formnovalidate",
  "formtarget",
  "frame",
  "frameborder",
  "headers",
  "height",
  "hidden",
  "high",
  "href",
  "hreflang",
  "hreftranslate",
  "hspace",
  "http-equiv",
  "id",
  "imagesizes",
  "imagesrcset",
  "importance",
  "impressiondata",
  "impressionexpiry",
  "incremental",
  "inert",
  "inputmode",
  "integrity",
  "invisible",
  "ismap",
  "keytype",
  "kind",
  "label",
  "lang",
  "language",
  "latencyhint",
  "leftmargin",
  "link",
  "list",
  "loading",
  "longdesc",
  "loop",
  "low",
  "lowsrc",
  "manifest",
  "marginheight",
  "marginwidth",
  "max",
  "maxlength",
  "mayscript",
  "media",
  "method",
  "min",
  "minlength",
  "multiple",
  "muted",
  "name",
  "nohref",
  "nomodule",
  "nonce",
  "noresize",
  "noshade",
  "novalidate",
  "nowrap",
  "object",
  "open",
  "optimum",
  "part",
  "pattern",
  "ping",
  "placeholder",
  "playsinline",
  "policy",
  "poster",
  "preload",
  "pseudo",
  "readonly",
  "referrerpolicy",
  "rel",
  "reportingorigin",
  "required",
  "resources",
  "rev",
  "reversed",
  "role",
  "rows",
  "rowspan",
  "rules",
  "sandbox",
  "scheme",
  "scope",
  "scopes",
  "scrollamount",
  "scrolldelay",
  "scrolling",
  "select",
  "selected",
  "shadowroot",
  "shadowrootdelegatesfocus",
  "shape",
  "size",
  "sizes",
  "slot",
  "span",
  "spellcheck",
  "src",
  "srclang",
  "srcset",
  "standby",
  "start",
  "step",
  "style",
  "summary",
  "tabindex",
  "target",
  "text",
  "title",
  "topmargin",
  "translate",
  "truespeed",
  "trusttoken",
  "type",
  "usemap",
  "valign",
  "value",
  "valuetype",
  "version",
  "virtualkeyboardpolicy",
  "vlink",
  "vspace",
  "webkitdirectory",
  "width",
  "wrap"
], _n = [
  "accent-height",
  "accumulate",
  "additive",
  "alignment-baseline",
  "ascent",
  "attributename",
  "attributetype",
  "azimuth",
  "basefrequency",
  "baseline-shift",
  "begin",
  "bias",
  "by",
  "class",
  "clip",
  "clippathunits",
  "clip-path",
  "clip-rule",
  "color",
  "color-interpolation",
  "color-interpolation-filters",
  "color-profile",
  "color-rendering",
  "cx",
  "cy",
  "d",
  "dx",
  "dy",
  "diffuseconstant",
  "direction",
  "display",
  "divisor",
  "dominant-baseline",
  "dur",
  "edgemode",
  "elevation",
  "end",
  "fill",
  "fill-opacity",
  "fill-rule",
  "filter",
  "filterunits",
  "flood-color",
  "flood-opacity",
  "font-family",
  "font-size",
  "font-size-adjust",
  "font-stretch",
  "font-style",
  "font-variant",
  "font-weight",
  "fx",
  "fy",
  "g1",
  "g2",
  "glyph-name",
  "glyphref",
  "gradientunits",
  "gradienttransform",
  "height",
  "href",
  "id",
  "image-rendering",
  "in",
  "in2",
  "k",
  "k1",
  "k2",
  "k3",
  "k4",
  "kerning",
  "keypoints",
  "keysplines",
  "keytimes",
  "lang",
  "lengthadjust",
  "letter-spacing",
  "kernelmatrix",
  "kernelunitlength",
  "lighting-color",
  "local",
  "marker-end",
  "marker-mid",
  "marker-start",
  "markerheight",
  "markerunits",
  "markerwidth",
  "maskcontentunits",
  "maskunits",
  "max",
  "mask",
  "media",
  "method",
  "mode",
  "min",
  "name",
  "numoctaves",
  "offset",
  "operator",
  "opacity",
  "order",
  "orient",
  "orientation",
  "origin",
  "overflow",
  "paint-order",
  "path",
  "pathlength",
  "patterncontentunits",
  "patterntransform",
  "patternunits",
  "points",
  "preservealpha",
  "preserveaspectratio",
  "primitiveunits",
  "r",
  "rx",
  "ry",
  "radius",
  "refx",
  "refy",
  "repeatcount",
  "repeatdur",
  "restart",
  "result",
  "rotate",
  "scale",
  "seed",
  "shape-rendering",
  "specularconstant",
  "specularexponent",
  "spreadmethod",
  "startoffset",
  "stddeviation",
  "stitchtiles",
  "stop-color",
  "stop-opacity",
  "stroke-dasharray",
  "stroke-dashoffset",
  "stroke-linecap",
  "stroke-linejoin",
  "stroke-miterlimit",
  "stroke-opacity",
  "stroke",
  "stroke-width",
  "style",
  "surfacescale",
  "systemlanguage",
  "tabindex",
  "targetx",
  "targety",
  "transform",
  "transform-origin",
  "text-anchor",
  "text-decoration",
  "text-rendering",
  "textlength",
  "type",
  "u1",
  "u2",
  "unicode",
  "values",
  "viewbox",
  "visibility",
  "version",
  "vert-adv-y",
  "vert-origin-x",
  "vert-origin-y",
  "width",
  "word-spacing",
  "wrap",
  "writing-mode",
  "xchannelselector",
  "ychannelselector",
  "x",
  "x1",
  "x2",
  "xmlns",
  "y",
  "y1",
  "y2",
  "z",
  "zoomandpan"
], Dn = [
  "accent",
  "accentunder",
  "align",
  "bevelled",
  "close",
  "columnsalign",
  "columnlines",
  "columnspan",
  "denomalign",
  "depth",
  "dir",
  "display",
  "displaystyle",
  "encoding",
  "fence",
  "frame",
  "height",
  "href",
  "id",
  "largeop",
  "length",
  "linethickness",
  "lspace",
  "lquote",
  "mathbackground",
  "mathcolor",
  "mathsize",
  "mathvariant",
  "maxsize",
  "minsize",
  "movablelimits",
  "notation",
  "numalign",
  "open",
  "rowalign",
  "rowlines",
  "rowspacing",
  "rowspan",
  "rspace",
  "rquote",
  "scriptlevel",
  "scriptminsize",
  "scriptsizemultiplier",
  "selection",
  "separator",
  "separators",
  "stretchy",
  "subscriptshift",
  "supscriptshift",
  "symmetric",
  "voffset",
  "width",
  "xmlns"
];
wn([
  Object.fromEntries(bn.map((l) => [l, ["*"]])),
  Object.fromEntries(_n.map((l) => [l, ["svg:*"]])),
  Object.fromEntries(Dn.map((l) => [l, ["math:*"]]))
]);
e.from_html("<span><!></span>");
e.from_html('<div class="svelte-1i9kj8o"><!></div>');
e.from_html('<span data-testid="block-info"><!></span> <!>', 1);
e.from_html('<label for="" data-testid="block-label"><span class="svelte-1fzogyz"><!></span> </label>');
e.from_html("<a><!></a>");
var kn = e.from_html('<span class="svelte-vvirtv"> </span>'), xn = e.from_html("<button><!> <div><!> <!></div></button>");
function nr(l, t) {
  e.push(t, !1);
  const r = e.mutable_source();
  let n = e.prop(t, "Icon", 8), i = e.prop(t, "label", 8, ""), a = e.prop(t, "show_label", 8, !1), s = e.prop(t, "pending", 8, !1), o = e.prop(t, "size", 8, "small"), u = e.prop(t, "padded", 8, !0), v = e.prop(t, "highlight", 8, !1), f = e.prop(t, "disabled", 8, !1), k = e.prop(t, "hasPopup", 8, !1), b = e.prop(t, "color", 8, "var(--block-label-text-color)"), F = e.prop(t, "transparent", 8, !1), I = e.prop(t, "background", 8, "var(--block-background-fill)"), y = e.prop(t, "border", 8, "transparent");
  e.legacy_pre_effect(() => (e.deep_read_state(v()), e.deep_read_state(b())), () => {
    e.set(r, v() ? "var(--color-accent)" : b());
  }), e.legacy_pre_effect_reset();
  var x = xn();
  let A, c;
  var d = e.child(x);
  {
    var p = (w) => {
      var R = kn(), U = e.child(R, !0);
      e.reset(R), e.template_effect(() => e.set_text(U, i())), e.append(w, R);
    };
    e.if(d, (w) => {
      a() && w(p);
    });
  }
  var h = e.sibling(d, 2);
  let g;
  var m = e.child(h);
  e.component(m, n, (w, R) => {
    R(w, {});
  });
  var E = e.sibling(m, 2);
  e.slot(E, t, "default", {}, null), e.reset(h), e.reset(x), e.template_effect(() => {
    A = e.set_class(x, 1, "icon-button svelte-vvirtv", null, A, {
      pending: s(),
      padded: u(),
      highlight: v(),
      transparent: F()
    }), x.disabled = f(), e.set_attribute(x, "aria-label", i()), e.set_attribute(x, "aria-haspopup", k()), e.set_attribute(x, "title", i()), c = e.set_style(x, "", c, {
      "--border-color": y(),
      color: !f() && e.get(r) ? e.get(r) : "var(--block-label-text-color)",
      "--bg-color": f() ? "auto" : I()
    }), g = e.set_class(h, 1, "svelte-vvirtv", null, g, {
      "x-small": o() === "x-small",
      small: o() === "small",
      large: o() === "large",
      medium: o() === "medium"
    });
  }), e.event("click", x, function(w) {
    e.bubble_event.call(this, t, w);
  }), e.append(l, x), e.pop();
}
e.from_html('<div aria-label="Empty value"><div class="icon svelte-1xcwp1t"><!></div></div>');
e.from_svg('<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>');
e.from_svg('<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" width="12px" height="24px" fill="currentColor" stroke-width="1.5" viewBox="0 0 12 24"><path d="M9 6L3 12L9 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"></path></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" stroke-width="1.5" viewBox="0 0 24 24" color="currentColor"><path stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M21.044 5.704a.6.6 0 0 1 .956.483v11.626a.6.6 0 0 1-.956.483l-7.889-5.813a.6.6 0 0 1 0-.966l7.89-5.813ZM10.044 5.704a.6.6 0 0 1 .956.483v11.626a.6.6 0 0 1-.956.483l-7.888-5.813a.6.6 0 0 1 0-.966l7.888-5.813Z"></path></svg>');
e.from_svg('<svg width="100%" height="100%" viewBox="0 0 32 32"><path d="M28.828 3.172a4.094 4.094 0 0 0-5.656 0L4.05 22.292A6.954 6.954 0 0 0 2 27.242V30h2.756a6.952 6.952 0 0 0 4.95-2.05L28.828 8.829a3.999 3.999 0 0 0 0-5.657zM10.91 18.26l2.829 2.829l-2.122 2.121l-2.828-2.828zm-2.619 8.276A4.966 4.966 0 0 1 4.756 28H4v-.759a4.967 4.967 0 0 1 1.464-3.535l1.91-1.91l2.829 2.828zM27.415 7.414l-12.261 12.26l-2.829-2.828l12.262-12.26a2.047 2.047 0 0 1 2.828 0a2 2 0 0 1 0 2.828z" fill="currentColor"></path><path d="M6.5 15a3.5 3.5 0 0 1-2.475-5.974l3.5-3.5a1.502 1.502 0 0 0 0-2.121a1.537 1.537 0 0 0-2.121 0L3.415 5.394L2 3.98l1.99-1.988a3.585 3.585 0 0 1 4.95 0a3.504 3.504 0 0 1 0 4.949L5.439 10.44a1.502 1.502 0 0 0 0 2.121a1.537 1.537 0 0 0 2.122 0l4.024-4.024L13 9.95l-4.025 4.024A3.475 3.475 0 0 1 6.5 15z" fill="currentColor"></path></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" d="M2.753 2.933a.75.75 0 0 1 .814-.68l3.043.272c2.157.205 4.224.452 5.922.732c1.66.273 3.073.594 3.844.983c.197.1.412.233.578.415c.176.192.352.506.28.9c-.067.356-.304.59-.487.729a3.001 3.001 0 0 1-.695.369c-1.02.404-2.952.79-5.984 1.169c-1.442.18-2.489.357-3.214.522c.205.045.43.089.674.132c.992.174 2.241.323 3.568.437a31.21 31.21 0 0 1 3.016.398c.46.087.893.186 1.261.296c.352.105.707.236.971.412c.13.086.304.225.42.437a.988.988 0 0 1 .063.141A1.75 1.75 0 0 0 14.5 12.25v.158c-.758.154-1.743.302-2.986.444c-2.124.243-3.409.55-4.117.859c-.296.128-.442.236-.508.3c.026.037.073.094.156.17c.15.138.369.29.65.45c.56.316 1.282.61 1.979.838l2.637.814a.75.75 0 1 1-.443 1.433l-2.655-.819c-.754-.247-1.58-.578-2.257-.96a5.082 5.082 0 0 1-.924-.65c-.255-.233-.513-.544-.62-.935c-.12-.441-.016-.88.274-1.244c.261-.328.656-.574 1.113-.773c.92-.4 2.387-.727 4.545-.974c1.366-.156 2.354-.313 3.041-.462a16.007 16.007 0 0 0-.552-.114a29.716 29.716 0 0 0-2.865-.378c-1.352-.116-2.649-.27-3.7-.454c-.524-.092-1-.194-1.395-.307c-.376-.106-.75-.241-1.021-.426a1.186 1.186 0 0 1-.43-.49a.934.934 0 0 1 .059-.873c.13-.213.32-.352.472-.442a3.23 3.23 0 0 1 .559-.251c.807-.287 2.222-.562 4.37-.83c2.695-.338 4.377-.666 5.295-.962c-.638-.21-1.623-.427-2.89-.635c-1.65-.273-3.679-.515-5.816-.718l-3.038-.272a.75.75 0 0 1-.68-.814M17 12.25a.75.75 0 0 0-1.5 0v4.19l-.72-.72a.75.75 0 1 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0l2-2a.75.75 0 1 0-1.06-1.06l-.72.72z"></path></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"></rect><line x1="2" y1="9" x2="22" y2="9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"></line><line x1="7" y1="2" x2="7" y2="6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"></line><line x1="17" y1="2" x2="17" y2="6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"></line></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-camera"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>');
e.from_svg('<svg viewBox="0 0 32 32"><path d="M28.828 3.172a4.094 4.094 0 0 0-5.656 0L4.05 22.292A6.954 6.954 0 0 0 2 27.242V30h2.756a6.952 6.952 0 0 0 4.95-2.05L28.828 8.829a3.999 3.999 0 0 0 0-5.657zM10.91 18.26l2.829 2.829l-2.122 2.121l-2.828-2.828zm-2.619 8.276A4.966 4.966 0 0 1 4.756 28H4v-.759a4.967 4.967 0 0 1 1.464-3.535l1.91-1.91l2.829 2.828zM27.415 7.414l-12.261 12.26l-2.829-2.828l12.262-12.26a2.047 2.047 0 0 1 2.828 0a2 2 0 0 1 0 2.828z" fill="currentColor"></path><path d="M6.5 15a3.5 3.5 0 0 1-2.475-5.974l3.5-3.5a1.502 1.502 0 0 0 0-2.121a1.537 1.537 0 0 0-2.121 0L3.415 5.394L2 3.98l1.99-1.988a3.585 3.585 0 0 1 4.95 0a3.504 3.504 0 0 1 0 4.949L5.439 10.44a1.502 1.502 0 0 0 0 2.121a1.537 1.537 0 0 0 2.122 0l4.024-4.024L13 9.95l-4.025 4.024A3.475 3.475 0 0 1 6.5 15z" fill="currentColor"></path></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--carbon" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M17.74 30L16 29l4-7h6a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h9v2H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4h-4.84Z"></path><path fill="currentColor" d="M8 10h16v2H8zm0 6h10v2H8z"></path></svg>');
e.from_svg('<svg width="100%" height="100%" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M5 13L9 17L19 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6L8 10L12 6"></path></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg>');
var Fn = e.from_svg('<svg width="100%" height="100%" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" stroke="currentColor" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;"><g transform="matrix(1.14096,-0.140958,-0.140958,1.14096,-0.0559523,0.0559523)"><path d="M18,6L6.087,17.913" style="fill:none;fill-rule:nonzero;stroke-width:2px;"></path></g><path d="M4.364,4.364L19.636,19.636" style="fill:none;fill-rule:nonzero;stroke-width:2px;"></path></svg>');
function ar(l) {
  var t = Fn();
  e.append(l, t);
}
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-closed-caption"><rect x="2" y="6" width="20" height="12" rx="2" ry="2"></rect><text x="12" y="15" font-family="sans-serif" font-size="8" font-weight="bold" fill="currentColor" stroke="none" text-anchor="middle">CC</text></svg>');
e.from_svg('<svg width="100%" height="100%" viewBox="0 0 32 32"><path fill="currentColor" d="m31 16l-7 7l-1.41-1.41L28.17 16l-5.58-5.59L24 9l7 7zM1 16l7-7l1.41 1.41L3.83 16l5.58 5.59L8 23l-7-7zm11.42 9.484L17.64 6l1.932.517L14.352 26z"></path></svg>');
e.from_svg('<svg width="100%" height="100%" viewBox="0 0 32 32"><circle cx="10" cy="12" r="2" fill="currentColor"></circle><circle cx="16" cy="9" r="2" fill="currentColor"></circle><circle cx="22" cy="12" r="2" fill="currentColor"></circle><circle cx="23" cy="18" r="2" fill="currentColor"></circle><circle cx="19" cy="23" r="2" fill="currentColor"></circle><path fill="currentColor" d="M16.54 2A14 14 0 0 0 2 16a4.82 4.82 0 0 0 6.09 4.65l1.12-.31a3 3 0 0 1 3.79 2.9V27a3 3 0 0 0 3 3a14 14 0 0 0 14-14.54A14.05 14.05 0 0 0 16.54 2Zm8.11 22.31A11.93 11.93 0 0 1 16 28a1 1 0 0 1-1-1v-3.76a5 5 0 0 0-5-5a5.07 5.07 0 0 0-1.33.18l-1.12.31A2.82 2.82 0 0 1 4 16A12 12 0 0 1 16.47 4A12.18 12.18 0 0 1 28 15.53a11.89 11.89 0 0 1-3.35 8.79Z"></path></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22q-2.05 0-3.875-.788t-3.187-2.15t-2.15-3.187T2 12q0-2.075.813-3.9t2.2-3.175T8.25 2.788T12.2 2q2 0 3.775.688t3.113 1.9t2.125 2.875T22 11.05q0 2.875-1.75 4.413T16 17h-1.85q-.225 0-.312.125t-.088.275q0 .3.375.863t.375 1.287q0 1.25-.687 1.85T12 22m-5.5-9q.65 0 1.075-.425T8 11.5t-.425-1.075T6.5 10t-1.075.425T5 11.5t.425 1.075T6.5 13m3-4q.65 0 1.075-.425T11 7.5t-.425-1.075T9.5 6t-1.075.425T8 7.5t.425 1.075T9.5 9m5 0q.65 0 1.075-.425T16 7.5t-.425-1.075T14.5 6t-1.075.425T13 7.5t.425 1.075T14.5 9m3 4q.65 0 1.075-.425T19 11.5t-.425-1.075T17.5 10t-1.075.425T16 11.5t.425 1.075T17.5 13"></path></svg>');
e.from_svg('<svg id="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="100%" height="100%"><path d="M23,20a5,5,0,0,0-3.89,1.89L11.8,17.32a4.46,4.46,0,0,0,0-2.64l7.31-4.57A5,5,0,1,0,18,7a4.79,4.79,0,0,0,.2,1.32l-7.31,4.57a5,5,0,1,0,0,6.22l7.31,4.57A4.79,4.79,0,0,0,18,25a5,5,0,1,0,5-5ZM23,4a3,3,0,1,1-3,3A3,3,0,0,1,23,4ZM7,19a3,3,0,1,1,3-3A3,3,0,0,1,7,19Zm16,9a3,3,0,1,1,3-3A3,3,0,0,1,23,28Z" fill="currentColor"></path></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 33" color="currentColor" aria-hidden="true" width="100%" height="100%"><path fill="currentColor" d="M28 10v18H10V10h18m0-2H10a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2Z"></path><path fill="currentColor" d="M4 18H2V4a2 2 0 0 1 2-2h14v2H4Z"></path></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 256 256"><path fill="currentColor" d="M240 192a8 8 0 0 1-8 8h-32v32a8 8 0 0 1-16 0v-32H64a8 8 0 0 1-8-8V72H24a8 8 0 0 1 0-16h32V24a8 8 0 0 1 16 0v160h160a8 8 0 0 1 8 8M96 72h88v88a8 8 0 0 0 16 0V64a8 8 0 0 0-8-8H96a8 8 0 0 0 0 16"></path></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32"><path fill="currentColor" d="M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"></path></svg>');
e.from_svg('<svg class="dropdown-arrow svelte-gtiaeq" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 18 18"><path d="M5 8l4 4 4-4z"></path></svg>');
e.from_svg('<svg class="dropdown-arrow svelte-wyly4p" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 18 18"><circle cx="9" cy="9" r="8" class="circle svelte-wyly4p"></circle><path d="M5 8l4 4 4-4z"></path></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-2"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><g fill="none"><path fill="currentColor" d="m5.505 11.41l.53.53l-.53-.53ZM3 14.952h-.75H3ZM9.048 21v.75V21ZM11.41 5.505l-.53-.53l.53.53Zm1.831 12.34a.75.75 0 0 0 1.06-1.061l-1.06 1.06ZM7.216 9.697a.75.75 0 1 0-1.06 1.061l1.06-1.06Zm10.749 2.362l-5.905 5.905l1.06 1.06l5.905-5.904l-1.06-1.06Zm-11.93-.12l5.905-5.905l-1.06-1.06l-5.905 5.904l1.06 1.06Zm0 6.025c-.85-.85-1.433-1.436-1.812-1.933c-.367-.481-.473-.79-.473-1.08h-1.5c0 .749.312 1.375.78 1.99c.455.596 1.125 1.263 1.945 2.083l1.06-1.06Zm-1.06-7.086c-.82.82-1.49 1.488-1.945 2.084c-.468.614-.78 1.24-.78 1.99h1.5c0-.29.106-.6.473-1.08c.38-.498.962-1.083 1.812-1.933l-1.06-1.06Zm7.085 7.086c-.85.85-1.435 1.433-1.933 1.813c-.48.366-.79.472-1.08.472v1.5c.75 0 1.376-.312 1.99-.78c.596-.455 1.264-1.125 2.084-1.945l-1.06-1.06Zm-7.085 1.06c.82.82 1.487 1.49 2.084 1.945c.614.468 1.24.78 1.989.78v-1.5c-.29 0-.599-.106-1.08-.473c-.497-.38-1.083-.962-1.933-1.812l-1.06 1.06Zm12.99-12.99c.85.85 1.433 1.436 1.813 1.933c.366.481.472.79.472 1.08h1.5c0-.749-.312-1.375-.78-1.99c-.455-.596-1.125-1.263-1.945-2.083l-1.06 1.06Zm1.06 7.086c.82-.82 1.49-1.488 1.945-2.084c.468-.614.78-1.24.78-1.99h-1.5c0 .29-.106.6-.473 1.08c-.38.498-.962 1.083-1.812 1.933l1.06 1.06Zm0-8.146c-.82-.82-1.487-1.49-2.084-1.945c-.614-.468-1.24-.78-1.989-.78v1.5c.29 0 .599.106 1.08.473c.497.38 1.083.962 1.933 1.812l1.06-1.06Zm-7.085 1.06c.85-.85 1.435-1.433 1.933-1.812c.48-.367.79-.473 1.08-.473v-1.5c-.75 0-1.376.312-1.99.78c-.596.455-1.264 1.125-2.084 1.945l1.06 1.06Zm2.362 10.749L7.216 9.698l-1.06 1.061l7.085 7.085l1.06-1.06Z"></path><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 21h12"></path></g></svg>');
e.from_svg('<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"></path></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" d="M21.03 2.97a3.578 3.578 0 0 0-5.06 0L14 4.94l-.013-.013a1.75 1.75 0 0 0-2.475 0l-.585.586a1.75 1.75 0 0 0 0 2.475l.012.012l-6.78 6.78a2.25 2.25 0 0 0-.659 1.592v.687l-1.28 2.347c-.836 1.533.841 3.21 2.374 2.375l2.347-1.28h.688a2.25 2.25 0 0 0 1.59-.66L16 13.061l.012.012a1.75 1.75 0 0 0 2.475 0l.586-.585a1.75 1.75 0 0 0 0-2.475L19.061 10l1.97-1.97a3.578 3.578 0 0 0 0-5.06ZM12 9.061l2.94 2.94l-6.78 6.78a.75.75 0 0 1-.531.22H6.75a.75.75 0 0 0-.359.09l-2.515 1.373a.234.234 0 0 1-.159.032a.264.264 0 0 1-.138-.075a.264.264 0 0 1-.075-.138a.234.234 0 0 1 .033-.158l1.372-2.515A.75.75 0 0 0 5 17.25v-.878a.75.75 0 0 1 .22-.53L12 9.06Z"></path></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" stroke-width="1.5" viewBox="0 0 24 24" color="currentColor"><path stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M2.956 5.704A.6.6 0 0 0 2 6.187v11.626a.6.6 0 0 0 .956.483l7.889-5.813a.6.6 0 0 0 0-.966l-7.89-5.813ZM13.956 5.704a.6.6 0 0 0-.956.483v11.626a.6.6 0 0 0 .956.483l7.889-5.813a.6.6 0 0 0 0-.966l-7.89-5.813Z"></path></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>');
e.from_svg('<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"></path></svg>');
e.from_svg('<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-image"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 256 256"><path fill="currentColor" d="M200 32h-36.26a47.92 47.92 0 0 0-71.48 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-72 0a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32m72 184H56V48h26.75A47.9 47.9 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.9 47.9 0 0 0-2.75-16H200Z"></path></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--mdi" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M5 3h2v2H5v5a2 2 0 0 1-2 2a2 2 0 0 1 2 2v5h2v2H5c-1.07-.27-2-.9-2-2v-4a2 2 0 0 0-2-2H0v-2h1a2 2 0 0 0 2-2V5a2 2 0 0 1 2-2m14 0a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h1v2h-1a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2h-2v-2h2v-5a2 2 0 0 1 2-2a2 2 0 0 1-2-2V5h-2V3h2m-7 12a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m-4 0a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m8 0a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1Z"></path></svg>');
e.from_svg('<svg width="100%" height="100%" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.35327 10.9495L6.77663 15.158C7.12221 15.4229 7.50051 15.5553 7.91154 15.5553C8.32258 15.5553 8.70126 15.4229 9.0476 15.158L14.471 10.9495" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M7.23461 11.4324C7.23406 11.432 7.2335 11.4316 7.23295 11.4312L1.81496 7.2268C1.81471 7.22661 1.81446 7.22641 1.8142 7.22621C1.52269 6.99826 1.39429 6.73321 1.39429 6.37014C1.39429 6.00782 1.52236 5.74301 1.81325 5.51507C1.8136 5.5148 1.81394 5.51453 1.81428 5.51426L7.2331 1.30812C7.45645 1.13785 7.67632 1.06653 7.91159 1.06653C8.14692 1.06653 8.36622 1.13787 8.58861 1.30787C8.58915 1.30828 8.58969 1.30869 8.59023 1.30911L14.0082 5.51462C14.0085 5.51485 14.0088 5.51507 14.0091 5.51529C14.3008 5.74345 14.4289 6.00823 14.4289 6.37014C14.4289 6.73356 14.3006 6.99862 14.01 7.22634C14.0096 7.22662 14.0093 7.22689 14.0089 7.22717L8.59007 11.4322C8.36672 11.6024 8.14686 11.6738 7.91159 11.6738C7.67628 11.6738 7.45699 11.6024 7.23461 11.4324Z" stroke="currentColor" stroke-width="1.5"></path></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--carbon" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M4 2H2v26a2 2 0 0 0 2 2h26v-2H4v-3h22v-8H4v-4h14V5H4Zm20 17v4H4v-4ZM16 7v4H4V7Z"></path></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-maximize" width="100%" height="100%"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mic"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minimize" width="100%" height="100%"><path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-music"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 12.026c0 5.146 3.867 9.387 8.847 9.96c.735.085 1.447-.228 1.97-.753a1.68 1.68 0 0 0 0-2.372c-.523-.525-.95-1.307-.555-1.934c1.576-2.508 9.738 3.251 9.738-4.9C22 6.488 17.523 2 12 2S2 6.489 2 12.026Z"></path><circle cx="17.5" cy="11.5" r=".75"></circle><circle cx="6.5" cy="11.5" r=".75"></circle><path d="M10.335 7a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0Zm4.915 0a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0Z"></path></g></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" d="M10.05 23q-.75 0-1.4-.337T7.575 21.7l-5.9-8.65q-.2-.3-.175-.65t.3-.6q.475-.475 1.125-.55t1.175.3L7 13.575V4q0-.425.288-.712T8 3t.713.288T9 4v11.5q0 .6-.537.888t-1.038-.063l-2.125-1.5l3.925 5.725q.125.2.35.325t.475.125H17q.825 0 1.413-.587T19 19V5q0-.425.288-.712T20 4t.713.288T21 5v14q0 1.65-1.175 2.825T17 23zM12 1q.425 0 .713.288T13 2v9q0 .425-.288.713T12 12t-.712-.288T11 11V2q0-.425.288-.712T12 1m4 1q.425 0 .713.288T17 3v8q0 .425-.288.713T16 12t-.712-.288T15 11V3q0-.425.288-.712T16 2m-3.85 14.5"></path></svg>');
e.from_svg('<svg fill="currentColor" width="100%" height="100%" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M1752.768 221.109C1532.646.986 1174.283.986 954.161 221.109l-838.588 838.588c-154.052 154.165-154.052 404.894 0 558.946 149.534 149.421 409.976 149.308 559.059 0l758.738-758.626c87.982-88.094 87.982-231.417 0-319.51-88.32-88.208-231.642-87.982-319.51 0l-638.796 638.908 79.85 79.849 638.795-638.908c43.934-43.821 115.539-43.934 159.812 0 43.934 44.047 43.934 115.877 0 159.812l-758.739 758.625c-110.23 110.118-289.355 110.005-399.36 0-110.118-110.117-110.005-289.242 0-399.247l838.588-838.588c175.963-175.962 462.382-176.188 638.909 0 176.075 176.188 176.075 462.833 0 638.908l-798.607 798.72 79.849 79.85 798.607-798.72c220.01-220.123 220.01-578.485 0-798.607" fill-rule="evenodd"></path></g></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--carbon" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><circle cx="20" cy="4" r="2" fill="currentColor"></circle><circle cx="8" cy="16" r="2" fill="currentColor"></circle><circle cx="28" cy="12" r="2" fill="currentColor"></circle><circle cx="11" cy="7" r="2" fill="currentColor"></circle><circle cx="16" cy="24" r="2" fill="currentColor"></circle><path fill="currentColor" d="M30 3.413L28.586 2L4 26.585V2H2v26a2 2 0 0 0 2 2h26v-2H5.413Z"></path></svg>');
e.from_svg('<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 12H12M18 12H12M12 12V6M12 12V18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-rotate-ccw" style="transform: rotateY(180deg);"><polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1024 1024"><path fill="currentColor" d="M672 418H144c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H188V494h440v326z"></path><path fill="currentColor" d="M819.3 328.5c-78.8-100.7-196-153.6-314.6-154.2l-.2-64c0-6.5-7.6-10.1-12.6-6.1l-128 101c-4 3.1-3.9 9.1 0 12.3L492 318.6c5.1 4 12.7.4 12.6-6.1v-63.9c12.9.1 25.9.9 38.8 2.5c42.1 5.2 82.1 18.2 119 38.7c38.1 21.2 71.2 49.7 98.4 84.3c27.1 34.7 46.7 73.7 58.1 115.8c11 40.7 14 82.7 8.9 124.8c-.7 5.4-1.4 10.8-2.4 16.1h74.9c14.8-103.6-11.3-213-81-302.3z"></path></svg>');
e.from_svg('<svg viewBox="0 0 22 24" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M19.1168 12.1484C19.474 12.3581 19.9336 12.2384 20.1432 11.8811C20.3528 11.5238 20.2331 11.0643 19.8758 10.8547L19.1168 12.1484ZM6.94331 4.13656L6.55624 4.77902L6.56378 4.78344L6.94331 4.13656ZM5.92408 4.1598L5.50816 3.5357L5.50816 3.5357L5.92408 4.1598ZM5.51031 5.09156L4.76841 5.20151C4.77575 5.25101 4.78802 5.29965 4.80505 5.34671L5.51031 5.09156ZM7.12405 11.7567C7.26496 12.1462 7.69495 12.3477 8.08446 12.2068C8.47397 12.0659 8.67549 11.6359 8.53458 11.2464L7.12405 11.7567ZM19.8758 12.1484C20.2331 11.9388 20.3528 11.4793 20.1432 11.122C19.9336 10.7648 19.474 10.6451 19.1168 10.8547L19.8758 12.1484ZM6.94331 18.8666L6.56375 18.2196L6.55627 18.2241L6.94331 18.8666ZM5.92408 18.8433L5.50815 19.4674H5.50815L5.92408 18.8433ZM5.51031 17.9116L4.80505 17.6564C4.78802 17.7035 4.77575 17.7521 4.76841 17.8016L5.51031 17.9116ZM8.53458 11.7567C8.67549 11.3672 8.47397 10.9372 8.08446 10.7963C7.69495 10.6554 7.26496 10.8569 7.12405 11.2464L8.53458 11.7567ZM19.4963 12.2516C19.9105 12.2516 20.2463 11.9158 20.2463 11.5016C20.2463 11.0873 19.9105 10.7516 19.4963 10.7516V12.2516ZM7.82931 10.7516C7.4151 10.7516 7.07931 11.0873 7.07931 11.5016C7.07931 11.9158 7.4151 12.2516 7.82931 12.2516V10.7516ZM19.8758 10.8547L7.32284 3.48968L6.56378 4.78344L19.1168 12.1484L19.8758 10.8547ZM7.33035 3.49414C6.76609 3.15419 6.05633 3.17038 5.50816 3.5357L6.34 4.78391C6.40506 4.74055 6.4893 4.73863 6.55627 4.77898L7.33035 3.49414ZM5.50816 3.5357C4.95998 3.90102 4.67184 4.54987 4.76841 5.20151L6.25221 4.98161C6.24075 4.90427 6.27494 4.82727 6.34 4.78391L5.50816 3.5357ZM4.80505 5.34671L7.12405 11.7567L8.53458 11.2464L6.21558 4.83641L4.80505 5.34671ZM19.1168 10.8547L6.56378 18.2197L7.32284 19.5134L19.8758 12.1484L19.1168 10.8547ZM6.55627 18.2241C6.4893 18.2645 6.40506 18.2626 6.34 18.2192L5.50815 19.4674C6.05633 19.8327 6.76609 19.8489 7.33035 19.509L6.55627 18.2241ZM6.34 18.2192C6.27494 18.1759 6.24075 18.0988 6.25221 18.0215L4.76841 17.8016C4.67184 18.4532 4.95998 19.1021 5.50815 19.4674L6.34 18.2192ZM6.21558 18.1667L8.53458 11.7567L7.12405 11.2464L4.80505 17.6564L6.21558 18.1667ZM19.4963 10.7516H7.82931V12.2516H19.4963V10.7516Z" fill="currentColor"></path></g></svg>');
e.from_svg('<svg enable-background="new 0 0 32 32" height="20" width="20" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="m30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4h-14.1v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4h4.1zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"></path><path d="m2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4h14.1v-2h-14.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4h-4.1zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3z"></path><path d="m0 0h32v32h-32z" fill="none"></path></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-2"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="feather feather-square"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-table"><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"></path></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--carbon" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M12 15H5a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3h5V5a1 1 0 0 0-1-1H3V2h6a3 3 0 0 1 3 3zM5 9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h5V9zm15 14v2a1 1 0 0 0 1 1h5v-4h-5a1 1 0 0 0-1 1z"></path><path fill="currentColor" d="M2 30h28V2Zm26-2h-7a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3h5v-2a1 1 0 0 0-1-1h-6v-2h6a3 3 0 0 1 3 3Z"></path></svg>');
e.from_svg(`<svg id="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="100%" height="100%"><defs><style>.cls-1 {
				fill: none;
			}</style></defs><rect x="12" y="12" width="2" height="12"></rect><rect x="18" y="12" width="2" height="12"></rect><path d="M4,6V8H6V28a2,2,0,0,0,2,2H24a2,2,0,0,0,2-2V8h2V6ZM8,28V8H24V28Z"></path><rect x="12" y="2" width="8" height="2"></rect><rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle>" class="cls-1" width="32" height="32"></rect></svg>`);
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--carbon" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M23 9.005h6a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2v1H11v-1a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h4v20a2.002 2.002 0 0 0 2 2h4v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2v1h-4v-9h4v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2v1h-4v-9h4v1a2 2 0 0 0 2 2Zm0-6h6v4h-6Zm-14 4H3v-4h6Zm14 18h6v4h-6Zm0-11h6v4h-6Z"></path></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-scissors"><circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line></svg>');
e.from_svg('<svg aria-label="undo" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-rotate-ccw"><polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" width="90%" height="90%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-upload"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-video"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" d="M12 16q1.875 0 3.188-1.312T16.5 11.5t-1.312-3.187T12 7T8.813 8.313T7.5 11.5t1.313 3.188T12 16m0-1.8q-1.125 0-1.912-.788T9.3 11.5t.788-1.912T12 8.8t1.913.788t.787 1.912t-.787 1.913T12 14.2m0 4.8q-3.65 0-6.65-2.037T1 11.5q1.35-3.425 4.35-5.462T12 4t6.65 2.038T23 11.5q-1.35 3.425-4.35 5.463T12 19"></path></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" d="m19.8 22.6l-4.2-4.15q-.875.275-1.762.413T12 19q-3.775 0-6.725-2.087T1 11.5q.525-1.325 1.325-2.463T4.15 7L1.4 4.2l1.4-1.4l18.4 18.4zM12 16q.275 0 .513-.025t.512-.1l-5.4-5.4q-.075.275-.1.513T7.5 11.5q0 1.875 1.313 3.188T12 16m7.3.45l-3.175-3.15q.175-.425.275-.862t.1-.938q0-1.875-1.312-3.187T12 7q-.5 0-.937.1t-.863.3L7.65 4.85q1.025-.425 2.1-.637T12 4q3.775 0 6.725 2.088T23 11.5q-.575 1.475-1.513 2.738T19.3 16.45m-4.625-4.6l-3-3q.7-.125 1.288.113t1.012.687t.613 1.038t.087 1.162"></path></svg>');
e.from_svg('<svg width="100%" height="100%" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" color="currentColor"><title>Low volume</title><path d="M19.5 7.5C19.5 7.5 21 9 21 11.5C21 14 19.5 15.5 19.5 15.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 13.8571V10.1429C2 9.03829 2.89543 8.14286 4 8.14286H6.9C7.09569 8.14286 7.28708 8.08544 7.45046 7.97772L13.4495 4.02228C14.1144 3.5839 15 4.06075 15 4.85714V19.1429C15 19.9392 14.1144 20.4161 13.4495 19.9777L7.45046 16.0223C7.28708 15.9146 7.09569 15.8571 6.9 15.8571H4C2.89543 15.8571 2 14.9617 2 13.8571Z" stroke-width="1.5"></path></svg>');
e.from_svg('<svg width="100%" height="100%" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" color="currentColor"><title>High volume</title><path d="M1 13.8571V10.1429C1 9.03829 1.89543 8.14286 3 8.14286H5.9C6.09569 8.14286 6.28708 8.08544 6.45046 7.97772L12.4495 4.02228C13.1144 3.5839 14 4.06075 14 4.85714V19.1429C14 19.9392 13.1144 20.4161 12.4495 19.9777L6.45046 16.0223C6.28708 15.9146 6.09569 15.8571 5.9 15.8571H3C1.89543 15.8571 1 14.9617 1 13.8571Z" stroke-width="1.5"></path><path d="M17.5 7.5C17.5 7.5 19 9 19 11.5C19 14 17.5 15.5 17.5 15.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.5 4.5C20.5 4.5 23 7 23 11.5C23 16 20.5 18.5 20.5 18.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
e.from_svg('<svg width="100%" height="100%" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" color="currentColor"><title>Muted volume</title><g clip-path="url(#clip0_3173_16686)"><path d="M18 14L20.0005 12M22 10L20.0005 12M20.0005 12L18 10M20.0005 12L22 14" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 13.8571V10.1429C2 9.03829 2.89543 8.14286 4 8.14286H6.9C7.09569 8.14286 7.28708 8.08544 7.45046 7.97772L13.4495 4.02228C14.1144 3.5839 15 4.06075 15 4.85714V19.1429C15 19.9392 14.1144 20.4161 13.4495 19.9777L7.45046 16.0223C7.28708 15.9146 7.09569 15.8571 6.9 15.8571H4C2.89543 15.8571 2 14.9617 2 13.8571Z" stroke-width="1.5"></path></g><defs><clipPath id="clip0_3173_16686"><rect width="24" height="24" fill="white"></rect></clipPath></defs></svg>');
e.from_svg('<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" stroke-linecap="round" stroke-linejoin="round"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"></path></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2c-4.963 0-9 4.038-9 9c0 3.328 1.82 6.232 4.513 7.79l-2.067 1.378A1 1 0 0 0 6 22h12a1 1 0 0 0 .555-1.832l-2.067-1.378C19.18 17.232 21 14.328 21 11c0-4.962-4.037-9-9-9zm0 16c-3.859 0-7-3.141-7-7c0-3.86 3.141-7 7-7s7 3.14 7 7c0 3.859-3.141 7-7 7z"></path><path fill="currentColor" d="M12 6c-2.757 0-5 2.243-5 5s2.243 5 5 5s5-2.243 5-5s-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3s3 1.346 3 3s-1.346 3-3 3z"></path></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 50 50" class="svelte-3g80w1"><circle cx="25" cy="25" r="20" fill="none" stroke-width="3.0" stroke-linecap="round" stroke-dasharray="94.2477796076938 94.2477796076938" stroke-dashoffset="0" class="svelte-3g80w1"><animateTransform attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" repeatCount="indefinite" class="svelte-3g80w1"></animateTransform></circle></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 256 256"><path fill="currentColor" d="M144 120v88a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8v-88a8 8 0 0 1 8-8h88a8 8 0 0 1 8 8m64 56a8 8 0 0 0-8 8v16h-24a8 8 0 0 0 0 16h24a16 16 0 0 0 16-16v-16a8 8 0 0 0-8-8m0-72a8 8 0 0 0-8 8v32a8 8 0 0 0 16 0v-32a8 8 0 0 0-8-8m-8-64h-16a8 8 0 0 0 0 16h16v16a8 8 0 0 0 16 0V56a16 16 0 0 0-16-16m-56 0h-32a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16M48 88a8 8 0 0 0 8-8V56h16a8 8 0 0 0 0-16H56a16 16 0 0 0-16 16v24a8 8 0 0 0 8 8"></path></svg>');
e.from_svg('<svg width="100%" height="100%" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M19.1679 9C18.0247 6.46819 15.3006 4.5 11.9999 4.5C8.31459 4.5 5.05104 7.44668 4.54932 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 9H19.4C19.7314 9 20 8.73137 20 8.4V5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4.88146 15C5.92458 17.5318 8.64874 19.5 12.0494 19.5C15.7347 19.5 18.9983 16.5533 19.5 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.04932 15H4.64932C4.31795 15 4.04932 15.2686 4.04932 15.6V19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
e.from_svg('<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 20L12 4M12 20L7 15M12 20L17 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314M11 8v6m-3-3h6"></path></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314M8 11h6"></path></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="currentColor" d="M12.1 2a9.8 9.8 0 0 0-5.4 1.6l6.4 6.4a2.1 2.1 0 0 1 .2 3a2.1 2.1 0 0 1-3-.2L3.7 6.4A9.84 9.84 0 0 0 2 12.1a10.14 10.14 0 0 0 10.1 10.1a11 11 0 0 0 2.6-.3l6.7 6.7a5 5 0 0 0 7.1-7.1l-6.7-6.7a11 11 0 0 0 .3-2.6A10 10 0 0 0 12.1 2m8 10.1a7.6 7.6 0 0 1-.3 2.1l-.3 1.1l.8.8l6.7 6.7a2.88 2.88 0 0 1 .9 2.1A2.72 2.72 0 0 1 27 27a2.9 2.9 0 0 1-4.2 0l-6.7-6.7l-.8-.8l-1.1.3a7.6 7.6 0 0 1-2.1.3a8.27 8.27 0 0 1-5.7-2.3A7.63 7.63 0 0 1 4 12.1a8.3 8.3 0 0 1 .3-2.2l4.4 4.4a4.14 4.14 0 0 0 5.9.2a4.14 4.14 0 0 0-.2-5.9L10 4.2a6.5 6.5 0 0 1 2-.3a8.27 8.27 0 0 1 5.7 2.3a8.5 8.5 0 0 1 2.4 5.9"></path></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="currentColor" d="M17.74 30L16 29l4-7h6a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h9v2H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4h-4.84Z"></path><path fill="currentColor" d="M8 10h16v2H8zm0 6h10v2H8z"></path></svg>');
e.from_svg('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="currentColor" d="M19 10h7v2h-7zm0 5h7v2h-7zm0 5h7v2h-7z"></path><path fill="currentColor" d="M28 5H4a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h24a2.003 2.003 0 0 0 2-2V7a2 2 0 0 0-2-2M4 7h11v18H4Zm13 18V7h11l.002 18Z"></path></svg>');
const En = [
  { color: "red", primary: 600, secondary: 100 },
  { color: "green", primary: 600, secondary: 100 },
  { color: "blue", primary: 600, secondary: 100 },
  { color: "yellow", primary: 500, secondary: 100 },
  { color: "purple", primary: 600, secondary: 100 },
  { color: "teal", primary: 600, secondary: 100 },
  { color: "orange", primary: 600, secondary: 100 },
  { color: "cyan", primary: 600, secondary: 100 },
  { color: "lime", primary: 500, secondary: 100 },
  { color: "pink", primary: 600, secondary: 100 }
], sr = {
  inherit: "inherit",
  current: "currentColor",
  transparent: "transparent",
  black: "#000",
  white: "#fff",
  slate: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
    950: "#020617"
  },
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
    950: "#030712"
  },
  zinc: {
    50: "#fafafa",
    100: "#f4f4f5",
    200: "#e4e4e7",
    300: "#d4d4d8",
    400: "#a1a1aa",
    500: "#71717a",
    600: "#52525b",
    700: "#3f3f46",
    800: "#27272a",
    900: "#18181b",
    950: "#09090b"
  },
  neutral: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#e5e5e5",
    300: "#d4d4d4",
    400: "#a3a3a3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
    950: "#0a0a0a"
  },
  stone: {
    50: "#fafaf9",
    100: "#f5f5f4",
    200: "#e7e5e4",
    300: "#d6d3d1",
    400: "#a8a29e",
    500: "#78716c",
    600: "#57534e",
    700: "#44403c",
    800: "#292524",
    900: "#1c1917",
    950: "#0c0a09"
  },
  red: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
    950: "#450a0a"
  },
  orange: {
    50: "#fff7ed",
    100: "#ffedd5",
    200: "#fed7aa",
    300: "#fdba74",
    400: "#fb923c",
    500: "#f97316",
    600: "#ea580c",
    700: "#c2410c",
    800: "#9a3412",
    900: "#7c2d12",
    950: "#431407"
  },
  amber: {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f",
    950: "#451a03"
  },
  yellow: {
    50: "#fefce8",
    100: "#fef9c3",
    200: "#fef08a",
    300: "#fde047",
    400: "#facc15",
    500: "#eab308",
    600: "#ca8a04",
    700: "#a16207",
    800: "#854d0e",
    900: "#713f12",
    950: "#422006"
  },
  lime: {
    50: "#f7fee7",
    100: "#ecfccb",
    200: "#d9f99d",
    300: "#bef264",
    400: "#a3e635",
    500: "#84cc16",
    600: "#65a30d",
    700: "#4d7c0f",
    800: "#3f6212",
    900: "#365314",
    950: "#1a2e05"
  },
  green: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d",
    950: "#052e16"
  },
  emerald: {
    50: "#ecfdf5",
    100: "#d1fae5",
    200: "#a7f3d0",
    300: "#6ee7b7",
    400: "#34d399",
    500: "#10b981",
    600: "#059669",
    700: "#047857",
    800: "#065f46",
    900: "#064e3b",
    950: "#022c22"
  },
  teal: {
    50: "#f0fdfa",
    100: "#ccfbf1",
    200: "#99f6e4",
    300: "#5eead4",
    400: "#2dd4bf",
    500: "#14b8a6",
    600: "#0d9488",
    700: "#0f766e",
    800: "#115e59",
    900: "#134e4a",
    950: "#042f2e"
  },
  cyan: {
    50: "#ecfeff",
    100: "#cffafe",
    200: "#a5f3fc",
    300: "#67e8f9",
    400: "#22d3ee",
    500: "#06b6d4",
    600: "#0891b2",
    700: "#0e7490",
    800: "#155e75",
    900: "#164e63",
    950: "#083344"
  },
  sky: {
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c4a6e",
    950: "#082f49"
  },
  blue: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
    950: "#172554"
  },
  indigo: {
    50: "#eef2ff",
    100: "#e0e7ff",
    200: "#c7d2fe",
    300: "#a5b4fc",
    400: "#818cf8",
    500: "#6366f1",
    600: "#4f46e5",
    700: "#4338ca",
    800: "#3730a3",
    900: "#312e81",
    950: "#1e1b4b"
  },
  violet: {
    50: "#f5f3ff",
    100: "#ede9fe",
    200: "#ddd6fe",
    300: "#c4b5fd",
    400: "#a78bfa",
    500: "#8b5cf6",
    600: "#7c3aed",
    700: "#6d28d9",
    800: "#5b21b6",
    900: "#4c1d95",
    950: "#2e1065"
  },
  purple: {
    50: "#faf5ff",
    100: "#f3e8ff",
    200: "#e9d5ff",
    300: "#d8b4fe",
    400: "#c084fc",
    500: "#a855f7",
    600: "#9333ea",
    700: "#7e22ce",
    800: "#6b21a8",
    900: "#581c87",
    950: "#3b0764"
  },
  fuchsia: {
    50: "#fdf4ff",
    100: "#fae8ff",
    200: "#f5d0fe",
    300: "#f0abfc",
    400: "#e879f9",
    500: "#d946ef",
    600: "#c026d3",
    700: "#a21caf",
    800: "#86198f",
    900: "#701a75",
    950: "#4a044e"
  },
  pink: {
    50: "#fdf2f8",
    100: "#fce7f3",
    200: "#fbcfe8",
    300: "#f9a8d4",
    400: "#f472b6",
    500: "#ec4899",
    600: "#db2777",
    700: "#be185d",
    800: "#9d174d",
    900: "#831843",
    950: "#500724"
  },
  rose: {
    50: "#fff1f2",
    100: "#ffe4e6",
    200: "#fecdd3",
    300: "#fda4af",
    400: "#fb7185",
    500: "#f43f5e",
    600: "#e11d48",
    700: "#be123c",
    800: "#9f1239",
    900: "#881337",
    950: "#4c0519"
  }
};
En.reduce((l, { color: t, primary: r, secondary: n }) => ({
  ...l,
  [t]: {
    primary: sr[t][r],
    secondary: sr[t][n]
  }
}), {});
const yn = "GRADIO_ROOT", Cn = typeof window < "u", An = [
  "elem_id",
  "elem_classes",
  "visible",
  "interactive",
  "server_fns",
  "server",
  "id",
  "target",
  "theme_mode",
  "version",
  "root",
  "autoscroll",
  "max_file_size",
  "formatter",
  "client",
  "load_component",
  "scale",
  "min_width",
  "theme",
  "padding",
  "loading_status",
  "label",
  "show_label",
  "validation_error",
  "show_progress",
  "api_prefix",
  "container",
  "attached_events"
];
class Tn {
  load_component;
  #e = e.state(e.proxy({}));
  get shared() {
    return e.get(this.#e);
  }
  set shared(t) {
    e.set(this.#e, t, !0);
  }
  #t = e.state(e.proxy({}));
  get props() {
    return e.get(this.#t);
  }
  set props(t) {
    e.set(this.#t, t, !0);
  }
  #r = e.state(e.proxy({}));
  get i18n() {
    return e.get(this.#r);
  }
  set i18n(t) {
    e.set(this.#r, t, !0);
  }
  dispatcher;
  last_update = null;
  shared_props = An;
  constructor(t, r) {
    for (const a in t.shared_props)
      this.shared[a] = t.shared_props[a];
    for (const a in t.props)
      this.props[a] = t.props[a];
    if (r)
      for (const a in r)
        this.props[a] === void 0 && (this.props[a] = r[a]);
    if (this.i18n = this.props.i18n, this.load_component = this.shared.load_component, !Cn || t.props?.__GRADIO_BROWSER_TEST__) return;
    const { register: n, dispatcher: i } = br(yn);
    n(t.shared_props.id, this.set_data.bind(this), this.get_data.bind(this)), this.dispatcher = i, e.user_effect(() => {
      for (const a in t.shared_props)
        this.shared[a] = t.shared_props[a];
      for (const a in t.props)
        this.props[a] = t.props[a];
      n(t.shared_props.id, this.set_data.bind(this), this.get_data.bind(this)), Bt(() => {
        this.shared.id = t.shared_props.id;
      });
    });
  }
  dispatch(t, r) {
    this.dispatcher(this.shared.id, t, r);
  }
  async get_data() {
    return e.snapshot(this.props);
  }
  update(t) {
    this.set_data(t);
  }
  set_data(t) {
    for (const r in t)
      if (this.shared_props.includes(r)) {
        const n = r;
        this.shared[n] = t[n];
        continue;
      } else
        this.props[r] = t[r];
  }
}
e.from_html('<h2 class="svelte-cmuu9m"> </h2>');
e.from_html('<p class="svelte-cmuu9m"> </p>');
e.from_html("<!> <!>", 1);
e.from_html('<span class="or svelte-cmuu9m"> </span> ', 1);
e.from_html(" <!>", 1);
e.from_html('<div class="wrap svelte-cmuu9m"><span><!></span> <!></div>');
e.from_html("<div><!></div>");
e.from_html('<button aria-label="Upload file"><!></button>');
e.from_html('<button aria-label="Record audio"><!></button>');
e.from_html('<button aria-label="Capture from camera"><!></button>');
e.from_html('<button aria-label="Paste from clipboard"><!></button>');
e.from_html('<span class="source-selection svelte-5d261r" data-testid="source-select"><!> <!> <!> <!></span>');
e.from_html('<span class="custom-button-label svelte-g7x491"> </span>');
e.from_html('<button class="custom-button svelte-g7x491"><!></button>');
e.from_html("<div><!> <!></div>");
function At(l) {
  let t = ["", "k", "M", "G", "T", "P", "E", "Z"], r = 0;
  for (; l > 1e3 && r < t.length - 1; )
    l /= 1e3, r++;
  let n = t[r];
  return (Number.isInteger(l) ? l : l.toFixed(1)) + n;
}
var Bn = e.from_html('<div><svg viewBox="-1200 -1200 3000 3000" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-m6d381"><g><path d="M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z" fill="#FF7C00" fill-opacity="0.4" class="svelte-m6d381"></path><path d="M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z" fill="#FF7C00" class="svelte-m6d381"></path><path d="M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z" fill="#FF7C00" fill-opacity="0.4" class="svelte-m6d381"></path><path d="M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z" fill="#FF7C00" class="svelte-m6d381"></path></g><g><path d="M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z" fill="#FF7C00" fill-opacity="0.4" class="svelte-m6d381"></path><path d="M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z" fill="#FF7C00" class="svelte-m6d381"></path><path d="M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z" fill="#FF7C00" fill-opacity="0.4" class="svelte-m6d381"></path><path d="M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z" fill="#FF7C00" class="svelte-m6d381"></path></g></svg></div>');
function Sn(l, t) {
  e.push(t, !1);
  const r = () => e.store_get(u, "$top", i), n = () => e.store_get(v, "$bottom", i), [i, a] = e.setup_stores();
  var s = this && this.__awaiter || function(d, p, h, g) {
    function m(E) {
      return E instanceof h ? E : new h(function(w) {
        w(E);
      });
    }
    return new (h || (h = Promise))(function(E, w) {
      function R(L) {
        try {
          J(g.next(L));
        } catch (pe) {
          w(pe);
        }
      }
      function U(L) {
        try {
          J(g.throw(L));
        } catch (pe) {
          w(pe);
        }
      }
      function J(L) {
        L.done ? E(L.value) : m(L.value).then(R, U);
      }
      J((g = g.apply(d, p || [])).next());
    });
  };
  let o = e.prop(t, "margin", 8, !0);
  const u = Pt([0, 0]), v = Pt([0, 0]);
  let f;
  function k() {
    return s(this, void 0, void 0, function* () {
      yield Promise.all([u.set([125, 140]), v.set([-125, -140])]), yield Promise.all([u.set([-125, 140]), v.set([125, -140])]), yield Promise.all([u.set([-125, 0]), v.set([125, -0])]), yield Promise.all([u.set([125, 0]), v.set([-125, 0])]);
    });
  }
  function b() {
    return s(this, void 0, void 0, function* () {
      yield k(), f || b();
    });
  }
  function F() {
    return s(this, void 0, void 0, function* () {
      yield Promise.all([u.set([125, 0]), v.set([-125, 0])]), b();
    });
  }
  _r(() => (F(), () => f = !0)), e.init();
  var I = Bn();
  let y;
  var x = e.child(I), A = e.child(x), c = e.sibling(A);
  e.reset(x), e.reset(I), e.template_effect(() => {
    y = e.set_class(I, 1, "svelte-m6d381", null, y, { margin: o() }), e.set_style(A, `transform: translate(${r(), e.untrack(() => r()[0]) ?? ""}px, ${r(), e.untrack(() => r()[1]) ?? ""}px);`), e.set_style(c, `transform: translate(${n(), e.untrack(() => n()[0]) ?? ""}px, ${n(), e.untrack(() => n()[1]) ?? ""}px);`);
  }), e.append(l, I), e.pop(), a();
}
var Ln = function(l, t, r, n) {
  function i(a) {
    return a instanceof r ? a : new r(function(s) {
      s(a);
    });
  }
  return new (r || (r = Promise))(function(a, s) {
    function o(f) {
      try {
        v(n.next(f));
      } catch (k) {
        s(k);
      }
    }
    function u(f) {
      try {
        v(n.throw(f));
      } catch (k) {
        s(k);
      }
    }
    function v(f) {
      f.done ? a(f.value) : i(f.value).then(o, u);
    }
    v((n = n.apply(l, t || [])).next());
  });
};
let gt = [], Tt = !1;
const Rn = typeof window < "u", mr = Rn ? window.requestAnimationFrame : (l) => {
};
function In(l) {
  return Ln(this, arguments, void 0, function* (t, r = !0) {
    if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && r !== !0)) {
      if (gt.push(t), !Tt) Tt = !0;
      else return;
      yield Dr(), mr(() => {
        let n = [0, 0];
        for (let i = 0; i < gt.length; i++) {
          const s = gt[i].getBoundingClientRect();
          (i === 0 || s.top + window.scrollY <= n[0]) && (n[0] = s.top + window.scrollY, n[1] = i);
        }
        window.scrollTo({ top: n[0] - 20, behavior: "smooth" }), Tt = !1, gt = [];
      });
    }
  });
}
var Mn = e.from_html('<div class="validation-error svelte-124hqw6"> <button class="svelte-124hqw6"><!></button></div>'), zn = e.from_html('<div class="eta-bar svelte-124hqw6"></div>'), On = e.from_html("<!> ", 1), Nn = e.from_html("<!> <!> <!> <!>", 1), Pn = e.from_html('<div class="progress-level svelte-124hqw6"><div class="progress-level-inner svelte-124hqw6"><!></div> <div class="progress-bar-wrap svelte-124hqw6"><div class="progress-bar svelte-124hqw6"></div></div></div>'), Hn = e.from_html('<p class="loading svelte-124hqw6"> </p> <!>', 1), qn = e.from_html("<!> <div><!> <!></div> <!> <!>", 1), Zn = e.from_html('<div class="clear-status svelte-124hqw6"><!></div> <span class="error svelte-124hqw6"> </span> <!>', 1), Un = e.from_html('<div data-testid="status-tracker"><!> <!></div>');
function Vn(l, t) {
  e.push(t, !0);
  let r = e.prop(t, "eta", 7, null), n = e.prop(t, "scroll_to_output", 3, !1), i = e.prop(t, "timer", 3, !0), a = e.prop(t, "show_progress", 3, "full"), s = e.prop(t, "message", 3, null), o = e.prop(t, "progress", 3, null), u = e.prop(t, "variant", 3, "default"), v = e.prop(t, "loading_text", 3, "Loading..."), f = e.prop(t, "absolute", 3, !0), k = e.prop(t, "translucent", 3, !1), b = e.prop(t, "border", 3, !1), F = e.prop(t, "validation_error", 7, null), I = e.prop(t, "show_validation_error", 3, !0), y = e.prop(t, "type", 3, null), x, A = !1, c = e.state(0), d = e.state(null), p = e.state(null), h = e.state(!1), g = e.state(null);
  const m = e.derived(() => y() === "input" || !t.status || t.status === "complete" || a() === "hidden" || t.status == "streaming" || !!(I() && F()));
  let E = e.state(0);
  const w = e.derived(() => e.get(p) === null || e.get(p) <= 0 || !e.get(E) ? 0 : Math.min(e.get(E) / e.get(p), 1)), R = e.derived(() => e.get(E).toFixed(1));
  let U = e.derived(() => o() == null);
  function J() {
    mr(() => {
      e.set(E, (performance.now() - e.get(c)) / 1e3), A && J();
    });
  }
  let L = e.derived(() => {
    let C = null;
    o() != null ? C = o().map((P) => {
      if (P.index != null && P.length != null)
        return P.index / P.length;
      if (P.progress != null)
        return P.progress;
    }) : C = null;
    let B, M = "";
    return C ? (B = C[C.length - 1], B === 0 ? M = "0" : M = "150ms") : B = void 0, {
      progress_level: C,
      last_progress_level: B,
      progress_bar_transition: M
    };
  });
  function pe() {
    A || (e.set(d, e.set(g, null), !0), e.set(c, performance.now(), !0), A = !0, J());
  }
  function me() {
    e.set(d, e.set(g, null), !0), A && (A = !1);
  }
  e.user_effect(() => {
    t.status === "pending" ? pe() : Bt(() => {
      me();
    });
  }), e.user_effect(() => {
    x && n() && (t.status === "pending" || t.status === "complete") && In(x, t.autoscroll);
  }), e.user_effect(() => {
    r() === null && r(e.get(d)), r() != null && e.get(d) !== r() && (e.set(p, (performance.now() - e.get(c)) / 1e3 + r()), e.set(g, e.get(p).toFixed(1), !0), e.set(d, r(), !0));
  });
  function He() {
    e.set(h, !1);
  }
  e.user_effect(() => {
    Bt(() => {
      He();
    }), t.status === "error" && s() && e.set(h, !0);
  });
  var ue = Un();
  let G, ae;
  var _ = e.child(ue);
  {
    var T = (C) => {
      var B = Mn(), M = e.child(B), P = e.sibling(M), X = e.child(P);
      {
        let W = e.derived(() => t.i18n ? t.i18n("common.clear") : "Clear");
        nr(X, {
          get Icon() {
            return ar;
          },
          get label() {
            return e.get(W);
          },
          disabled: !1,
          size: "x-small",
          background: "var(--background-fill-primary)",
          color: "var(--error-background-text)",
          border: "var(--border-color-primary)",
          onclick: () => F(null)
        });
      }
      e.reset(P), e.reset(B), e.template_effect(() => e.set_text(M, `${F() ?? ""} `)), e.append(C, B);
    };
    e.if(_, (C) => {
      F() && I() && C(T);
    });
  }
  var S = e.sibling(_, 2);
  {
    var $ = (C) => {
      var B = qn(), M = e.first_child(B);
      {
        var P = (H) => {
          var Y = zn();
          let te;
          e.template_effect(() => te = e.set_style(Y, "", te, {
            transform: `translateX(${(e.get(w) || 0) * 100 - 100}%)`
          })), e.append(H, Y);
        };
        e.if(M, (H) => {
          u() === "default" && e.get(U) && a() === "full" && H(P);
        });
      }
      var X = e.sibling(M, 2);
      let W;
      var V = e.child(X);
      {
        var ee = (H) => {
          var Y = e.comment(), te = e.first_child(Y);
          e.each(te, 17, o, e.index, (we, ne) => {
            var oe = e.comment(), he = e.first_child(oe);
            {
              var De = (fe) => {
                var be = On(), Le = e.first_child(be);
                {
                  var Q = (D) => {
                    var le = e.text();
                    e.template_effect((qe, Ze) => e.set_text(le, `${qe ?? ""}/${Ze ?? ""}`), [
                      () => At(e.get(ne).index || 0),
                      () => At(e.get(ne).length)
                    ]), e.append(D, le);
                  }, se = (D) => {
                    var le = e.text();
                    e.template_effect((qe) => e.set_text(le, qe), [() => At(e.get(ne).index || 0)]), e.append(D, le);
                  };
                  e.if(Le, (D) => {
                    e.get(ne).length != null ? D(Q) : D(se, !1);
                  });
                }
                var re = e.sibling(Le);
                e.template_effect(() => e.set_text(re, ` ${e.get(ne).unit ?? ""} |  `)), e.append(fe, be);
              };
              e.if(he, (fe) => {
                e.get(ne).index != null && fe(De);
              });
            }
            e.append(we, oe);
          }), e.append(H, Y);
        }, ie = (H) => {
          var Y = e.comment(), te = e.first_child(Y);
          {
            var we = (oe) => {
              var he = e.text();
              e.template_effect(() => e.set_text(he, `queue: ${t.queue_position + 1}/${t.queue_size ?? ""} |`)), e.append(oe, he);
            }, ne = (oe) => {
              var he = e.comment(), De = e.first_child(he);
              {
                var fe = (be) => {
                  var Le = e.text("processing |");
                  e.append(be, Le);
                };
                e.if(
                  De,
                  (be) => {
                    t.queue_position === 0 && be(fe);
                  },
                  !0
                );
              }
              e.append(oe, he);
            };
            e.if(
              te,
              (oe) => {
                t.queue_position !== null && t.queue_size !== void 0 && t.queue_position >= 0 ? oe(we) : oe(ne, !1);
              },
              !0
            );
          }
          e.append(H, Y);
        };
        e.if(V, (H) => {
          o() ? H(ee) : H(ie, !1);
        });
      }
      var _e = e.sibling(V, 2);
      {
        var Ae = (H) => {
          var Y = e.text();
          e.template_effect(() => e.set_text(Y, `${e.get(R) ?? ""}${r() ? `/${e.get(g)}` : ""}s`)), e.append(H, Y);
        };
        e.if(_e, (H) => {
          i() && H(Ae);
        });
      }
      e.reset(X);
      var K = e.sibling(X, 2);
      {
        var O = (H) => {
          var Y = Pn(), te = e.child(Y), we = e.child(te);
          {
            var ne = (fe) => {
              var be = e.comment(), Le = e.first_child(be);
              e.each(Le, 17, o, e.index, (Q, se, re) => {
                var D = e.comment(), le = e.first_child(D);
                {
                  var qe = (Ze) => {
                    var lt = Nn(), Be = e.first_child(lt);
                    {
                      var Re = (z) => {
                        var j = e.text(" /");
                        e.append(z, j);
                      };
                      e.if(Be, (z) => {
                        re !== 0 && z(Re);
                      });
                    }
                    var Ie = e.sibling(Be, 2);
                    {
                      var Je = (z) => {
                        var j = e.text();
                        e.template_effect(() => e.set_text(j, e.get(se).desc)), e.append(z, j);
                      };
                      e.if(Ie, (z) => {
                        e.get(se).desc != null && z(Je);
                      });
                    }
                    var Ye = e.sibling(Ie, 2);
                    {
                      var ke = (z) => {
                        var j = e.text("-");
                        e.append(z, j);
                      };
                      e.if(Ye, (z) => {
                        e.get(se).desc != null && e.get(L).progress_level && e.get(L).progress_level[re] != null && z(ke);
                      });
                    }
                    var xe = e.sibling(Ye, 2);
                    {
                      var ce = (z) => {
                        var j = e.text();
                        e.template_effect((ve) => e.set_text(j, `${ve ?? ""}%`), [
                          () => (100 * (e.get(L).progress_level[re] || 0)).toFixed(1)
                        ]), e.append(z, j);
                      };
                      e.if(xe, (z) => {
                        e.get(L).progress_level != null && z(ce);
                      });
                    }
                    e.append(Ze, lt);
                  };
                  e.if(le, (Ze) => {
                    (e.get(se).desc != null || e.get(L).progress_level && e.get(L).progress_level[re] != null) && Ze(qe);
                  });
                }
                e.append(Q, D);
              }), e.append(fe, be);
            };
            e.if(we, (fe) => {
              o() != null && fe(ne);
            });
          }
          e.reset(te);
          var oe = e.sibling(te, 2), he = e.child(oe);
          let De;
          e.reset(oe), e.reset(Y), e.template_effect(() => De = e.set_style(he, "", De, {
            width: `${e.get(L).last_progress_level * 100}%`,
            transition: e.get(L).progress_bar_transition
          })), e.append(H, Y);
        }, Te = (H) => {
          var Y = e.comment(), te = e.first_child(Y);
          {
            var we = (ne) => {
              {
                let oe = e.derived(() => u() === "default");
                Sn(ne, {
                  get margin() {
                    return e.get(oe);
                  }
                });
              }
            };
            e.if(
              te,
              (ne) => {
                a() === "full" && ne(we);
              },
              !0
            );
          }
          e.append(H, Y);
        };
        e.if(K, (H) => {
          e.get(L).last_progress_level != null ? H(O) : H(Te, !1);
        });
      }
      var Ge = e.sibling(K, 2);
      {
        var Qe = (H) => {
          var Y = Hn(), te = e.first_child(Y), we = e.child(te, !0);
          e.reset(te);
          var ne = e.sibling(te, 2);
          e.slot(ne, t, "additional-loading-text", {}, null), e.template_effect(() => e.set_text(we, v())), e.append(H, Y);
        };
        e.if(Ge, (H) => {
          i() || H(Qe);
        });
      }
      e.template_effect(() => W = e.set_class(X, 1, "progress-text svelte-124hqw6", null, W, {
        "meta-text-center": u() === "center",
        "meta-text": u() === "default"
      })), e.append(C, B);
    }, N = (C) => {
      var B = e.comment(), M = e.first_child(B);
      {
        var P = (X) => {
          var W = Zn(), V = e.first_child(W), ee = e.child(V);
          {
            let K = e.derived(() => t.i18n("common.clear"));
            nr(ee, {
              get Icon() {
                return ar;
              },
              get label() {
                return e.get(K);
              },
              disabled: !1,
              $$events: {
                click: () => {
                  t.on_clear_status?.();
                }
              }
            });
          }
          e.reset(V);
          var ie = e.sibling(V, 2), _e = e.child(ie, !0);
          e.reset(ie);
          var Ae = e.sibling(ie, 2);
          e.slot(Ae, t, "error", {}, null), e.template_effect((K) => e.set_text(_e, K), [() => t.i18n("common.error")]), e.append(X, W);
        };
        e.if(
          M,
          (X) => {
            t.status === "error" && X(P);
          },
          !0
        );
      }
      e.append(C, B);
    };
    e.if(S, (C) => {
      t.status === "pending" ? C($) : C(N, !1);
    });
  }
  e.reset(ue), e.bind_this(ue, (C) => x = C, () => x), e.template_effect(() => {
    G = e.set_class(ue, 1, `wrap ${u() ?? ""} ${a() ?? ""}`, "svelte-124hqw6", G, {
      "no-click": F() && I(),
      hide: e.get(m),
      translucent: u() === "center" && (t.status === "pending" || t.status === "error") || k() || a() === "minimal" || F(),
      generating: t.status === "generating" && a() === "full",
      border: b()
    }), ae = e.set_style(ue, "", ae, {
      position: f() ? "absolute" : "static",
      padding: f() ? "0" : "var(--size-8) 0"
    });
  }), e.append(l, ue), e.pop();
}
e.from_html('<span class="toast-count svelte-17ll3xi"> </span>');
e.from_html('<div class="toast-separator svelte-17ll3xi"></div>');
e.from_html('<div><div data-testid="toast-text"><!></div></div> <!>', 1);
e.from_html('<div class="toast-messages svelte-17ll3xi"></div>');
e.from_html("<div></div>");
e.from_html('<div role="status" aria-live="polite" data-testid="toast-body"><div class="toast-header svelte-17ll3xi" role="button" tabindex="0"><div><!></div> <div class="toast-title-row svelte-17ll3xi"><span> <!></span> <div><!></div></div> <button type="button" aria-label="Close" data-testid="toast-close"><span aria-hidden="true">&#215;</span></button></div> <!> <!></div>');
e.from_html('<div class="toast-item svelte-l56nvb"><!></div>');
e.from_html('<div class="toast-wrap svelte-l56nvb"></div>');
e.from_html('<div class="streaming-bar svelte-xj6qzf"></div>');
var $n = e.from_svg('<path class="edge-path svelte-r41nsf"></path>'), jn = e.from_html('<span class="run-btn svelte-r41nsf" title="Run to here" role="button" tabindex="0">▶</span>'), Gn = e.from_html('<div class="port-row svelte-r41nsf"><span class="port-dot input svelte-r41nsf"></span> <span class="port-label svelte-r41nsf"> </span></div>'), Yn = e.from_html('<div class="port-row svelte-r41nsf"><span class="port-label svelte-r41nsf"> </span> <span class="port-dot output svelte-r41nsf"></span></div>'), Xn = e.from_html('<textarea class="gr-input svelte-r41nsf"></textarea>'), Wn = e.from_html('<input type="text" class="gr-input svelte-r41nsf"/>'), Kn = e.from_html('<div class="gr-textbox-wrap svelte-r41nsf"><span class="gr-label svelte-r41nsf"> </span> <!></div>'), Qn = e.from_html('<div class="gr-textbox-wrap svelte-r41nsf"><span class="gr-label svelte-r41nsf"> </span> <input type="number" class="gr-input svelte-r41nsf"/></div>'), Jn = e.from_html('<label class="gr-checkbox-wrap svelte-r41nsf"><input type="checkbox" class="svelte-r41nsf"/> <span class="gr-check-label svelte-r41nsf"> </span></label>'), ea = e.from_html('<div class="gr-textbox-wrap svelte-r41nsf"><span class="gr-label svelte-r41nsf"> </span> <div class="gr-markdown svelte-r41nsf"><!></div></div>'), ta = e.from_html('<div class="gr-textbox-wrap svelte-r41nsf"><span class="gr-label svelte-r41nsf"> </span> <pre class="gr-json svelte-r41nsf"> </pre></div>'), ra = e.from_html('<audio controls class="gr-audio svelte-r41nsf"></audio>'), na = e.from_html('<div class="gr-empty svelte-r41nsf">No audio</div>'), aa = e.from_html('<div class="gr-textbox-wrap svelte-r41nsf"><span class="gr-label svelte-r41nsf"> </span> <!></div>'), sa = e.from_html('<img class="gr-image svelte-r41nsf"/>'), ia = e.from_html('<div class="gr-empty svelte-r41nsf">No image</div>'), oa = e.from_html('<div class="gr-textbox-wrap svelte-r41nsf"><span class="gr-label svelte-r41nsf"> </span> <!></div>'), la = e.from_html('<pre class="svelte-r41nsf"> </pre>'), ua = e.from_html('<div class="gr-fallback svelte-r41nsf"><span class="fallback-type svelte-r41nsf"> </span> <!></div>'), ca = e.from_html('<div class="embedded-component svelte-r41nsf"><!></div>'), da = e.from_html('<div class="embedded-components svelte-r41nsf"></div>'), pa = e.from_html('<div class="node svelte-r41nsf"><div class="node-header svelte-r41nsf"><span class="type-badge svelte-r41nsf"> </span> <span class="node-name svelte-r41nsf"> </span> <!></div> <div class="node-body svelte-r41nsf"><div class="ports-left svelte-r41nsf"></div> <div class="ports-right svelte-r41nsf"></div></div> <!></div>'), ha = e.from_html('<!> <div class="canvas svelte-r41nsf" role="application"><div class="grid-bg svelte-r41nsf"></div> <div class="canvas-transform svelte-r41nsf"><svg class="edges-svg svelte-r41nsf"></svg> <!></div> <div class="zoom-controls svelte-r41nsf"><button class="zoom-btn svelte-r41nsf" title="Zoom out">−</button> <span class="zoom-level svelte-r41nsf"> </span> <button class="zoom-btn svelte-r41nsf" title="Zoom in">+</button> <button class="zoom-btn fit-btn svelte-r41nsf" title="Fit all nodes">⊡</button></div></div>', 1);
function wa(l, t) {
  e.push(t, !0);
  var r, n;
  let i = e.rest_props(t, ["$$slots", "$$events", "$$legacy"]);
  const a = new Tn(i);
  let s, o = e.state(e.proxy({ x: 0, y: 0, scale: 1 })), u = e.state(!1), v = e.state(e.proxy({ x: 0, y: 0 })), f = e.derived(() => ((r = a.props.value) === null || r === void 0 ? void 0 : r.nodes) || []), k = e.derived(() => ((n = a.props.value) === null || n === void 0 ? void 0 : n.edges) || []), b = e.proxy({});
  function F(_, T, S) {
    b[_] || (b[_] = {}), b[_][T] = S;
  }
  function I(_, T) {
    var S, $, N;
    return (N = ($ = (S = b[_.id]) === null || S === void 0 ? void 0 : S[T.port_name]) !== null && $ !== void 0 ? $ : T.value) !== null && N !== void 0 ? N : "";
  }
  function y(_) {
    var T, S;
    return _.is_input_node && (!((T = _.input_components) === null || T === void 0) && T.length) ? _.input_components : !((S = _.output_components) === null || S === void 0) && S.length ? _.output_components : [];
  }
  const x = 220, A = 36, c = 1, d = 8, p = 22, h = 60;
  function g(_) {
    const T = Math.max(_.inputs.length, _.outputs.length, 1), $ = y(_).length * h;
    return A + c + d + T * p + $ + d;
  }
  let m = e.derived(() => {
    const _ = /* @__PURE__ */ new Map();
    for (const T of e.get(f))
      _.set(T.id, T);
    return _;
  });
  function E(_) {
    return A + c + d + _ * p + p / 2;
  }
  let w = e.derived(() => {
    const _ = [];
    for (const T of e.get(k)) {
      const S = e.get(m).get(T.from_node), $ = e.get(m).get(T.to_node);
      if (!S || !$) continue;
      const N = S.outputs.indexOf(T.from_port), C = $.inputs.findIndex((Ae) => Ae.name === T.to_port);
      if (N === -1 || C === -1) continue;
      const B = E(N), M = E(C), P = S.x + x, X = S.y + B, W = $.x, V = $.y + M, ee = Math.abs(W - P), ie = Math.max(ee * 0.4, 50), _e = `M ${P} ${X} C ${P + ie} ${X}, ${W - ie} ${V}, ${W} ${V}`;
      _.push({ id: T.id, d: _e });
    }
    return _;
  });
  function R() {
    if (e.get(f).length === 0 || !s) return;
    const _ = 40, T = s.getBoundingClientRect(), S = T.width, $ = T.height;
    let N = 1 / 0, C = 1 / 0, B = -1 / 0, M = -1 / 0;
    for (const O of e.get(f)) {
      const Te = g(O);
      N = Math.min(N, O.x), C = Math.min(C, O.y), B = Math.max(B, O.x + x), M = Math.max(M, O.y + Te);
    }
    const P = B - N, X = M - C, W = (S - _ * 2) / P, V = ($ - _ * 2) / X, ee = Math.min(W, V, 1.5), ie = (N + B) / 2, _e = (C + M) / 2, Ae = S / 2 - ie * ee, K = $ / 2 - _e * ee;
    e.set(o, { x: Ae, y: K, scale: Math.max(0.2, ee) }, !0);
  }
  function U() {
    e.get(o).scale = Math.min(3, e.get(o).scale * 1.2);
  }
  function J() {
    e.get(o).scale = Math.max(0.2, e.get(o).scale / 1.2);
  }
  function L(_) {
    _.button === 0 && _.target === s && (e.set(u, !0), e.set(
      v,
      {
        x: _.clientX - e.get(o).x,
        y: _.clientY - e.get(o).y
      },
      !0
    ));
  }
  function pe(_) {
    e.get(u) && (e.get(o).x = _.clientX - e.get(v).x, e.get(o).y = _.clientY - e.get(v).y);
  }
  function me() {
    e.set(u, !1);
  }
  function He(_) {
    _.preventDefault();
    const T = _.deltaY > 0 ? 0.9 : 1.1;
    e.get(o).scale = Math.max(0.2, Math.min(3, e.get(o).scale * T));
  }
  function ue(_, T) {
    _.stopPropagation(), a.props.value && (a.props.value = Object.assign(Object.assign({}, a.props.value), {
      inputs: Object.assign(Object.assign({}, a.props.value.inputs), b),
      run_to_node: T
    }));
  }
  function G(_) {
    return `background: ${{
      FN: "#f97316",
      INPUT: "#06b6d4",
      MAP: "#a855f7",
      GRADIO: "#ea580c",
      MODEL: "#22c55e"
    }[_] || "#666"};`;
  }
  let ae = e.derived(() => Math.round(e.get(o).scale * 100));
  {
    let _ = e.derived(() => a.props.height || "100vh");
    yr(l, {
      get elem_id() {
        return a.shared.elem_id;
      },
      get elem_classes() {
        return a.shared.elem_classes;
      },
      get visible() {
        return a.shared.visible;
      },
      padding: !1,
      get scale() {
        return a.shared.scale;
      },
      get min_width() {
        return a.shared.min_width;
      },
      get height() {
        return e.get(_);
      },
      allow_overflow: !1,
      flex: !0,
      children: (T, S) => {
        var $ = ha(), N = e.first_child($);
        {
          var C = (K) => {
            Vn(K, e.spread_props(
              {
                get autoscroll() {
                  return a.shared.autoscroll;
                },
                get i18n() {
                  return a.i18n;
                }
              },
              () => a.shared.loading_status,
              {
                on_clear_status: () => a.dispatch("clear_status", a.shared.loading_status)
              }
            ));
          };
          e.if(N, (K) => {
            a.shared.loading_status && K(C);
          });
        }
        var B = e.sibling(N, 2);
        B.__mousedown = L, B.__mousemove = pe, B.__mouseup = me;
        var M = e.sibling(e.child(B), 2), P = e.child(M);
        e.each(P, 21, () => e.get(w), (K) => K.id, (K, O) => {
          var Te = $n();
          e.template_effect(() => e.set_attribute(Te, "d", e.get(O).d)), e.append(K, Te);
        }), e.reset(P);
        var X = e.sibling(P, 2);
        e.each(X, 17, () => e.get(f), (K) => K.id, (K, O) => {
          const Te = e.derived(() => y(e.get(O)));
          var Ge = pa(), Qe = e.child(Ge), H = e.child(Qe), Y = e.child(H, !0);
          e.reset(H);
          var te = e.sibling(H, 2), we = e.child(te, !0);
          e.reset(te);
          var ne = e.sibling(te, 2);
          {
            var oe = (Q) => {
              var se = jn();
              se.__click = (re) => ue(re, e.get(O).name), e.append(Q, se);
            };
            e.if(ne, (Q) => {
              e.get(O).is_input_node || Q(oe);
            });
          }
          e.reset(Qe);
          var he = e.sibling(Qe, 2), De = e.child(he);
          e.each(De, 21, () => e.get(O).inputs, (Q) => Q.name, (Q, se) => {
            var re = Gn(), D = e.sibling(e.child(re), 2), le = e.child(D, !0);
            e.reset(D), e.reset(re), e.template_effect(() => e.set_text(le, e.get(se).name)), e.append(Q, re);
          }), e.reset(De);
          var fe = e.sibling(De, 2);
          e.each(fe, 20, () => e.get(O).outputs, (Q) => Q, (Q, se) => {
            var re = Yn(), D = e.child(re), le = e.child(D, !0);
            e.reset(D), e.next(2), e.reset(re), e.template_effect(() => e.set_text(le, se)), e.append(Q, re);
          }), e.reset(fe), e.reset(he);
          var be = e.sibling(he, 2);
          {
            var Le = (Q) => {
              var se = da();
              e.each(se, 21, () => e.get(Te), (re) => re.port_name, (re, D) => {
                var le = ca(), qe = e.child(le);
                {
                  var Ze = (Be) => {
                    var Re = Kn(), Ie = e.child(Re), Je = e.child(Ie, !0);
                    e.reset(Ie);
                    var Ye = e.sibling(Ie, 2);
                    {
                      var ke = (ce) => {
                        var z = Xn();
                        e.remove_textarea_child(z), z.__input = (j) => F(e.get(O).id, e.get(D).port_name, j.target.value), e.template_effect(
                          (j) => {
                            e.set_attribute(z, "placeholder", e.get(D).props?.placeholder || ""), e.set_attribute(z, "rows", e.get(D).props?.lines || 3), z.disabled = !e.get(O).is_input_node, e.set_value(z, j);
                          },
                          [() => I(e.get(O), e.get(D))]
                        ), e.append(ce, z);
                      }, xe = (ce) => {
                        var z = Wn();
                        e.remove_input_defaults(z), z.__input = (j) => F(e.get(O).id, e.get(D).port_name, j.target.value), e.template_effect(
                          (j) => {
                            e.set_attribute(z, "placeholder", e.get(D).props?.placeholder || ""), z.disabled = !e.get(O).is_input_node, e.set_value(z, j);
                          },
                          [() => I(e.get(O), e.get(D))]
                        ), e.append(ce, z);
                      };
                      e.if(Ye, (ce) => {
                        e.get(D).props?.lines && e.get(D).props.lines > 1 ? ce(ke) : ce(xe, !1);
                      });
                    }
                    e.reset(Re), e.template_effect(() => e.set_text(Je, e.get(D).props?.label || e.get(D).port_name)), e.append(Be, Re);
                  }, lt = (Be) => {
                    var Re = e.comment(), Ie = e.first_child(Re);
                    {
                      var Je = (ke) => {
                        var xe = Qn(), ce = e.child(xe), z = e.child(ce, !0);
                        e.reset(ce);
                        var j = e.sibling(ce, 2);
                        e.remove_input_defaults(j), j.__input = (ve) => F(e.get(O).id, e.get(D).port_name, parseFloat(ve.target.value)), e.reset(xe), e.template_effect(
                          (ve) => {
                            e.set_text(z, e.get(D).props?.label || e.get(D).port_name), j.disabled = !e.get(O).is_input_node, e.set_value(j, ve);
                          },
                          [() => I(e.get(O), e.get(D))]
                        ), e.append(ke, xe);
                      }, Ye = (ke) => {
                        var xe = e.comment(), ce = e.first_child(xe);
                        {
                          var z = (ve) => {
                            var Xe = Jn(), Ue = e.child(Xe);
                            e.remove_input_defaults(Ue), Ue.__change = (Fe) => F(e.get(O).id, e.get(D).port_name, Fe.target.checked);
                            var ut = e.sibling(Ue, 2), _t = e.child(ut, !0);
                            e.reset(ut), e.reset(Xe), e.template_effect(
                              (Fe) => {
                                Ue.disabled = !e.get(O).is_input_node, e.set_checked(Ue, Fe), e.set_text(_t, e.get(D).props?.label || e.get(D).port_name);
                              },
                              [() => I(e.get(O), e.get(D))]
                            ), e.append(ve, Xe);
                          }, j = (ve) => {
                            var Xe = e.comment(), Ue = e.first_child(Xe);
                            {
                              var ut = (Fe) => {
                                var We = ea(), et = e.child(We), Dt = e.child(et, !0);
                                e.reset(et);
                                var ct = e.sibling(et, 2), Me = e.child(ct);
                                e.html(Me, () => e.get(D).value || ""), e.reset(ct), e.reset(We), e.template_effect(() => e.set_text(Dt, e.get(D).props?.label || e.get(D).port_name)), e.append(Fe, We);
                              }, _t = (Fe) => {
                                var We = e.comment(), et = e.first_child(We);
                                {
                                  var Dt = (Me) => {
                                    var Ke = ta(), tt = e.child(Ke), kt = e.child(tt, !0);
                                    e.reset(tt);
                                    var dt = e.sibling(tt, 2), ze = e.child(dt, !0);
                                    e.reset(dt), e.reset(Ke), e.template_effect(
                                      (Oe) => {
                                        e.set_text(kt, e.get(D).props?.label || e.get(D).port_name), e.set_text(ze, Oe);
                                      },
                                      [
                                        () => typeof e.get(D).value == "string" ? e.get(D).value : JSON.stringify(e.get(D).value, null, 2)
                                      ]
                                    ), e.append(Me, Ke);
                                  }, ct = (Me) => {
                                    var Ke = e.comment(), tt = e.first_child(Ke);
                                    {
                                      var kt = (ze) => {
                                        var Oe = aa(), rt = e.child(Oe), xt = e.child(rt, !0);
                                        e.reset(rt);
                                        var Ft = e.sibling(rt, 2);
                                        {
                                          var Ne = (de) => {
                                            var Pe = ra();
                                            e.template_effect(() => e.set_attribute(Pe, "src", e.get(D).value?.url || e.get(D).value)), e.append(de, Pe);
                                          }, Se = (de) => {
                                            var Pe = na();
                                            e.append(de, Pe);
                                          };
                                          e.if(Ft, (de) => {
                                            e.get(D).value ? de(Ne) : de(Se, !1);
                                          });
                                        }
                                        e.reset(Oe), e.template_effect(() => e.set_text(xt, e.get(D).props?.label || e.get(D).port_name)), e.append(ze, Oe);
                                      }, dt = (ze) => {
                                        var Oe = e.comment(), rt = e.first_child(Oe);
                                        {
                                          var xt = (Ne) => {
                                            var Se = oa(), de = e.child(Se), Pe = e.child(de, !0);
                                            e.reset(de);
                                            var Et = e.sibling(de, 2);
                                            {
                                              var yt = (Ee) => {
                                                var Ve = sa();
                                                e.template_effect(() => {
                                                  e.set_attribute(Ve, "src", e.get(D).value?.url || e.get(D).value), e.set_attribute(Ve, "alt", e.get(D).props?.label || "");
                                                }), e.append(Ee, Ve);
                                              }, nt = (Ee) => {
                                                var Ve = ia();
                                                e.append(Ee, Ve);
                                              };
                                              e.if(Et, (Ee) => {
                                                e.get(D).value ? Ee(yt) : Ee(nt, !1);
                                              });
                                            }
                                            e.reset(Se), e.template_effect(() => e.set_text(Pe, e.get(D).props?.label || e.get(D).port_name)), e.append(Ne, Se);
                                          }, Ft = (Ne) => {
                                            var Se = ua(), de = e.child(Se), Pe = e.child(de, !0);
                                            e.reset(de);
                                            var Et = e.sibling(de, 2);
                                            {
                                              var yt = (nt) => {
                                                var Ee = la(), Ve = e.child(Ee, !0);
                                                e.reset(Ee), e.template_effect((wr) => e.set_text(Ve, wr), [
                                                  () => typeof e.get(D).value == "string" ? e.get(D).value : JSON.stringify(e.get(D).value, null, 2)
                                                ]), e.append(nt, Ee);
                                              };
                                              e.if(Et, (nt) => {
                                                e.get(D).value && nt(yt);
                                              });
                                            }
                                            e.reset(Se), e.template_effect(() => e.set_text(Pe, e.get(D).component)), e.append(Ne, Se);
                                          };
                                          e.if(
                                            rt,
                                            (Ne) => {
                                              e.get(D).component === "image" ? Ne(xt) : Ne(Ft, !1);
                                            },
                                            !0
                                          );
                                        }
                                        e.append(ze, Oe);
                                      };
                                      e.if(
                                        tt,
                                        (ze) => {
                                          e.get(D).component === "audio" ? ze(kt) : ze(dt, !1);
                                        },
                                        !0
                                      );
                                    }
                                    e.append(Me, Ke);
                                  };
                                  e.if(
                                    et,
                                    (Me) => {
                                      e.get(D).component === "json" ? Me(Dt) : Me(ct, !1);
                                    },
                                    !0
                                  );
                                }
                                e.append(Fe, We);
                              };
                              e.if(
                                Ue,
                                (Fe) => {
                                  e.get(D).component === "markdown" ? Fe(ut) : Fe(_t, !1);
                                },
                                !0
                              );
                            }
                            e.append(ve, Xe);
                          };
                          e.if(
                            ce,
                            (ve) => {
                              e.get(D).component === "checkbox" ? ve(z) : ve(j, !1);
                            },
                            !0
                          );
                        }
                        e.append(ke, xe);
                      };
                      e.if(
                        Ie,
                        (ke) => {
                          e.get(D).component === "number" ? ke(Je) : ke(Ye, !1);
                        },
                        !0
                      );
                    }
                    e.append(Be, Re);
                  };
                  e.if(qe, (Be) => {
                    e.get(D).component === "textbox" || e.get(D).component === "text" ? Be(Ze) : Be(lt, !1);
                  });
                }
                e.reset(le), e.append(re, le);
              }), e.reset(se), e.append(Q, se);
            };
            e.if(be, (Q) => {
              e.get(Te).length > 0 && Q(Le);
            });
          }
          e.reset(Ge), e.template_effect(
            (Q) => {
              e.set_style(Ge, `left: ${e.get(O).x ?? ""}px; top: ${e.get(O).y ?? ""}px; width: 220px;`), e.set_style(H, Q), e.set_text(Y, e.get(O).type), e.set_text(we, e.get(O).name);
            },
            [() => G(e.get(O).type)]
          ), e.append(K, Ge);
        }), e.reset(M);
        var W = e.sibling(M, 2), V = e.child(W);
        V.__click = J;
        var ee = e.sibling(V, 2), ie = e.child(ee);
        e.reset(ee);
        var _e = e.sibling(ee, 2);
        _e.__click = U;
        var Ae = e.sibling(_e, 2);
        Ae.__click = R, e.reset(W), e.reset(B), e.bind_this(B, (K) => s = K, () => s), e.template_effect(() => {
          e.set_style(M, `transform: translate(${e.get(o).x ?? ""}px, ${e.get(o).y ?? ""}px) scale(${e.get(o).scale ?? ""})`), e.set_text(ie, `${e.get(ae) ?? ""}%`);
        }), e.event("mouseleave", B, me), e.event("wheel", B, He), e.append(T, $);
      },
      $$slots: { default: !0 }
    });
  }
  e.pop();
}
e.delegate([
  "mousedown",
  "mousemove",
  "mouseup",
  "click",
  "input",
  "change"
]);
export {
  wa as default
};
