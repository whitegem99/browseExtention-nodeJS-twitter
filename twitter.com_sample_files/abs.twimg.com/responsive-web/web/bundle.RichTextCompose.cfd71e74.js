(window.webpackJsonp = window.webpackJsonp || []).push([
    [51, 48, 307], {
        "/Cwe": function(e, t, n) {
            "use strict";
            var r = n("euSu"),
                i = n("kuaq");

            function o(e) {
                return null == e ? e : String(e)
            }
            e.exports = function(e, t) {
                var n;
                if (window.getComputedStyle && (n = window.getComputedStyle(e, null))) return o(n.getPropertyValue(i(t)));
                if (document.defaultView && document.defaultView.getComputedStyle) {
                    if (n = document.defaultView.getComputedStyle(e, null)) return o(n.getPropertyValue(i(t)));
                    if ("display" === t) return "none"
                }
                return e.currentStyle ? o("float" === t ? e.currentStyle.cssFloat || e.currentStyle.styleFloat : e.currentStyle[r(t)]) : o(e.style && e.style[r(t)])
            }
        },
        "/L11": function(e, t, n) {
            "use strict";
            var r = n("b+nQ"),
                i = n("AL/+"),
                o = n("tI3i");

            function a(e, t, n) {
                var a = t.getCharacterList(),
                    s = n > 0 ? a.get(n - 1) : void 0,
                    c = n < a.count() ? a.get(n) : void 0,
                    u = s ? s.getEntity() : void 0,
                    l = c ? c.getEntity() : void 0;
                if (l && l === u && "MUTABLE" !== e.__get(l).getMutability()) {
                    for (var f, d = function(e, t, n) {
                            var r;
                            return i(e, (function(e, t) {
                                return e.getEntity() === t.getEntity()
                            }), (function(e) {
                                return e.getEntity() === t
                            }), (function(e, t) {
                                e <= n && t >= n && (r = {
                                    start: e,
                                    end: t
                                })
                            })), "object" != typeof r && o(!1), r
                        }(a, l, n), p = d.start, h = d.end; p < h;) f = a.get(p), a = a.set(p, r.applyEntity(f, null)), p++;
                    return t.set("characterList", a)
                }
                return t
            }
            e.exports = function(e, t) {
                var n = e.getBlockMap(),
                    r = e.getEntityMap(),
                    i = {},
                    o = t.getStartKey(),
                    s = t.getStartOffset(),
                    c = n.get(o),
                    u = a(r, c, s);
                u !== c && (i[o] = u);
                var l = t.getEndKey(),
                    f = t.getEndOffset(),
                    d = n.get(l);
                o === l && (d = u);
                var p = a(r, d, f);
                return p !== d && (i[l] = p), Object.keys(i).length ? e.merge({
                    blockMap: n.merge(i),
                    selectionAfter: t
                }) : e.set("selectionAfter", t)
            }
        },
        "/LAw": function(e, t, n) {
            "use strict";

            function r(e, t) {
                var n = i.get(e, t);
                return "auto" === n || "scroll" === n
            }
            var i = {
                get: n("/Cwe"),
                getScrollParent: function(e) {
                    if (!e) return null;
                    for (var t = e.ownerDocument; e && e !== t.body;) {
                        if (r(e, "overflow") || r(e, "overflowY") || r(e, "overflowX")) return e;
                        e = e.parentNode
                    }
                    return t.defaultView || t.parentWindow
                }
            };
            e.exports = i
        },
        "/jhs": function(e, t, n) {
            "use strict";
            var r = {
                isImage: function(e) {
                    return "image" === i(e)[0]
                },
                isJpeg: function(e) {
                    var t = i(e);
                    return r.isImage(e) && ("jpeg" === t[1] || "pjpeg" === t[1])
                }
            };

            function i(e) {
                return e.split("/")
            }
            e.exports = r
        },
        "0Gcc": function(e, t, n) {
            "use strict";
            var r = n("iogJ"),
                i = n("1xkk"),
                o = n("1AUG"),
                a = n("4aXP");
            e.exports = function(e) {
                var t = a(e, (function(e) {
                    var t = e.getSelection(),
                        n = t.getStartOffset();
                    if (0 === n) return o(e, 1);
                    var i = t.getStartKey(),
                        a = e.getCurrentContent().getBlockForKey(i).getText().slice(0, n),
                        s = r.getBackward(a);
                    return o(e, s.length || 1)
                }), "backward");
                return t === e.getCurrentContent() ? e : i.push(e, t, "remove-range")
            }
        },
        "0Uhd": function(e, t, n) {
            "use strict";
            var r = n("maj8");

            function i() {
                return (i = r || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    })))), r.forEach((function(t) {
                        s(e, t, n[t])
                    }))
                }
                return e
            }

            function a(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function s(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function c(e, t) {
                e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
            }
            var u = n("VUbk"),
                l = n("naKV"),
                f = n("fpFo"),
                d = n("QAfK"),
                p = n("UfDk"),
                h = n("QVkg"),
                g = n("tRbA"),
                v = n("Ea6c"),
                m = n("1xkk"),
                y = n("ERkP"),
                _ = n("7nmT"),
                b = n("O+2R"),
                S = n("/LAw"),
                w = n("rim0"),
                C = n("2Wwg"),
                x = n("tBqf"),
                E = n("YSZ8"),
                k = n("gZn9"),
                T = n("7MNd"),
                O = n("ZUd0"),
                D = n("tI3i"),
                I = n("hF1F"),
                M = w.isBrowser("IE"),
                A = !M,
                R = {
                    edit: h,
                    composite: f,
                    drag: p,
                    cut: null,
                    render: null
                },
                K = !1,
                B = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    c(t, e);
                    var n = t.prototype;
                    return n.render = function() {
                        return null
                    }, n.componentDidMount = function() {
                        this._update()
                    }, n.componentDidUpdate = function() {
                        this._update()
                    }, n._update = function() {
                        var e = this.props.editor;
                        e._latestEditorState = this.props.editorState, e._blockSelectEvents = !0
                    }, t
                }(y.Component),
                L = function(e) {
                    function t(t) {
                        var n;
                        return s(a(n = e.call(this, t) || this), "_blockSelectEvents", void 0), s(a(n), "_clipboard", void 0), s(a(n), "_handler", void 0), s(a(n), "_dragCount", void 0), s(a(n), "_internalDrag", void 0), s(a(n), "_editorKey", void 0), s(a(n), "_placeholderAccessibilityID", void 0), s(a(n), "_latestEditorState", void 0), s(a(n), "_latestCommittedEditorState", void 0), s(a(n), "_pendingStateFromBeforeInput", void 0), s(a(n), "_onBeforeInput", void 0), s(a(n), "_onBlur", void 0), s(a(n), "_onCharacterData", void 0), s(a(n), "_onCompositionEnd", void 0), s(a(n), "_onCompositionStart", void 0), s(a(n), "_onCopy", void 0), s(a(n), "_onCut", void 0), s(a(n), "_onDragEnd", void 0), s(a(n), "_onDragOver", void 0), s(a(n), "_onDragStart", void 0), s(a(n), "_onDrop", void 0), s(a(n), "_onInput", void 0), s(a(n), "_onFocus", void 0), s(a(n), "_onKeyDown", void 0), s(a(n), "_onKeyPress", void 0), s(a(n), "_onKeyUp", void 0), s(a(n), "_onMouseDown", void 0), s(a(n), "_onMouseUp", void 0), s(a(n), "_onPaste", void 0), s(a(n), "_onSelect", void 0), s(a(n), "editor", void 0), s(a(n), "editorContainer", void 0), s(a(n), "focus", void 0), s(a(n), "blur", void 0), s(a(n), "setMode", void 0), s(a(n), "exitCurrentMode", void 0), s(a(n), "restoreEditorDOM", void 0), s(a(n), "setClipboard", void 0), s(a(n), "getClipboard", void 0), s(a(n), "getEditorKey", void 0), s(a(n), "update", void 0), s(a(n), "onDragEnter", void 0), s(a(n), "onDragLeave", void 0), s(a(n), "focus", (function(e) {
                            var t = n.props.editorState,
                                r = t.getSelection().getHasFocus(),
                                i = n.editor;
                            if (i) {
                                var o = S.getScrollParent(i),
                                    a = e || T(o),
                                    s = a.x,
                                    c = a.y;
                                i instanceof HTMLElement || D(!1), i.focus(), o === window ? window.scrollTo(s, c) : b.setTop(o, c), r || n.update(m.forceSelection(t, t.getSelection()))
                            }
                        })), s(a(n), "blur", (function() {
                            var e = n.editor;
                            e instanceof HTMLElement || D(!1), e.blur()
                        })), s(a(n), "setMode", (function(e) {
                            var t = n.props,
                                r = t.onPaste,
                                i = t.onCut,
                                a = t.onCopy,
                                s = o({}, R.edit);
                            r && (s.onPaste = r), i && (s.onCut = i), a && (s.onCopy = a);
                            var c = o({}, R, {
                                edit: s
                            });
                            n._handler = c[e]
                        })), s(a(n), "exitCurrentMode", (function() {
                            n.setMode("edit")
                        })), s(a(n), "restoreEditorDOM", (function(e) {
                            n.setState({
                                contentsKey: n.state.contentsKey + 1
                            }, (function() {
                                n.focus(e)
                            }))
                        })), s(a(n), "setClipboard", (function(e) {
                            n._clipboard = e
                        })), s(a(n), "getClipboard", (function() {
                            return n._clipboard
                        })), s(a(n), "update", (function(e) {
                            n._latestEditorState = e, n.props.onChange(e)
                        })), s(a(n), "onDragEnter", (function() {
                            n._dragCount++
                        })), s(a(n), "onDragLeave", (function() {
                            n._dragCount--, 0 === n._dragCount && n.exitCurrentMode()
                        })), n._blockSelectEvents = !1, n._clipboard = null, n._handler = null, n._dragCount = 0, n._editorKey = t.editorKey || E(), n._placeholderAccessibilityID = "placeholder-" + n._editorKey, n._latestEditorState = t.editorState, n._latestCommittedEditorState = t.editorState, n._onBeforeInput = n._buildHandler("onBeforeInput"), n._onBlur = n._buildHandler("onBlur"), n._onCharacterData = n._buildHandler("onCharacterData"), n._onCompositionEnd = n._buildHandler("onCompositionEnd"), n._onCompositionStart = n._buildHandler("onCompositionStart"), n._onCopy = n._buildHandler("onCopy"), n._onCut = n._buildHandler("onCut"), n._onDragEnd = n._buildHandler("onDragEnd"), n._onDragOver = n._buildHandler("onDragOver"), n._onDragStart = n._buildHandler("onDragStart"), n._onDrop = n._buildHandler("onDrop"), n._onInput = n._buildHandler("onInput"), n._onFocus = n._buildHandler("onFocus"), n._onKeyDown = n._buildHandler("onKeyDown"), n._onKeyPress = n._buildHandler("onKeyPress"), n._onKeyUp = n._buildHandler("onKeyUp"), n._onMouseDown = n._buildHandler("onMouseDown"), n._onMouseUp = n._buildHandler("onMouseUp"), n._onPaste = n._buildHandler("onPaste"), n._onSelect = n._buildHandler("onSelect"), n.getEditorKey = function() {
                            return n._editorKey
                        }, n.state = {
                            contentsKey: 0
                        }, n
                    }
                    c(t, e);
                    var n = t.prototype;
                    return n._buildHandler = function(e) {
                        var t = this,
                            n = _.unstable_flushControlled;
                        return function(r) {
                            if (!t.props.readOnly) {
                                var i = t._handler && t._handler[e];
                                i && (n ? n((function() {
                                    return i(t, r)
                                })) : i(t, r))
                            }
                        }
                    }, n._showPlaceholder = function() {
                        return !!this.props.placeholder && !this.props.editorState.isInCompositionMode() && !this.props.editorState.getCurrentContent().hasText()
                    }, n._renderPlaceholder = function() {
                        if (this._showPlaceholder()) {
                            var e = {
                                text: I(this.props.placeholder),
                                editorState: this.props.editorState,
                                textAlignment: this.props.textAlignment,
                                accessibilityID: this._placeholderAccessibilityID
                            };
                            return y.createElement(g, e)
                        }
                        return null
                    }, n.render = function() {
                        var e = this,
                            t = this.props,
                            n = t.blockRenderMap,
                            r = t.blockRendererFn,
                            a = t.blockStyleFn,
                            s = t.customStyleFn,
                            c = t.customStyleMap,
                            u = t.editorState,
                            f = t.readOnly,
                            p = t.textAlignment,
                            h = t.textDirectionality,
                            g = C({
                                "DraftEditor/root": !0,
                                "DraftEditor/alignLeft": "left" === p,
                                "DraftEditor/alignRight": "right" === p,
                                "DraftEditor/alignCenter": "center" === p
                            }),
                            v = this.props.role || "textbox",
                            m = "combobox" === v ? !!this.props.ariaExpanded : null,
                            _ = {
                                blockRenderMap: n,
                                blockRendererFn: r,
                                blockStyleFn: a,
                                customStyleMap: o({}, l, c),
                                customStyleFn: s,
                                editorKey: this._editorKey,
                                editorState: u,
                                key: "contents" + this.state.contentsKey,
                                textDirectionality: h
                            };
                        return y.createElement("div", {
                            className: g
                        }, this._renderPlaceholder(), y.createElement("div", {
                            className: C("DraftEditor/editorContainer"),
                            ref: function(t) {
                                return e.editorContainer = t
                            }
                        }, y.createElement("div", i({
                            "aria-activedescendant": f ? null : this.props.ariaActiveDescendantID,
                            "aria-autocomplete": f ? null : this.props.ariaAutoComplete,
                            "aria-controls": f ? null : this.props.ariaControls,
                            "aria-describedby": this.props.ariaDescribedBy || this._placeholderAccessibilityID,
                            "aria-expanded": f ? null : m,
                            "aria-label": this.props.ariaLabel,
                            "aria-labelledby": this.props.ariaLabelledBy,
                            "aria-multiline": this.props.ariaMultiline,
                            "aria-owns": f ? null : this.props.ariaOwneeID,
                            autoCapitalize: this.props.autoCapitalize,
                            autoComplete: this.props.autoComplete,
                            autoCorrect: this.props.autoCorrect,
                            className: C({
                                notranslate: !f,
                                "public/DraftEditor/content": !0
                            }),
                            contentEditable: !f,
                            "data-testid": this.props.webDriverTestID,
                            onBeforeInput: this._onBeforeInput,
                            onBlur: this._onBlur,
                            onCompositionEnd: this._onCompositionEnd,
                            onCompositionStart: this._onCompositionStart,
                            onCopy: this._onCopy,
                            onCut: this._onCut,
                            onDragEnd: this._onDragEnd,
                            onDragEnter: this.onDragEnter,
                            onDragLeave: this.onDragLeave,
                            onDragOver: this._onDragOver,
                            onDragStart: this._onDragStart,
                            onDrop: this._onDrop,
                            onFocus: this._onFocus,
                            onInput: this._onInput,
                            onKeyDown: this._onKeyDown,
                            onKeyPress: this._onKeyPress,
                            onKeyUp: this._onKeyUp,
                            onMouseUp: this._onMouseUp,
                            onPaste: this._onPaste,
                            onSelect: this._onSelect,
                            ref: function(t) {
                                return e.editor = t
                            },
                            role: f ? null : v,
                            spellCheck: A && this.props.spellCheck,
                            style: {
                                outline: "none",
                                userSelect: "text",
                                WebkitUserSelect: "text",
                                whiteSpace: "pre-wrap",
                                wordWrap: "break-word"
                            },
                            suppressContentEditableWarning: !0,
                            tabIndex: this.props.tabIndex
                        }, this.props.customAttrs), y.createElement(B, {
                            editor: this,
                            editorState: u
                        }), y.createElement(d, _))))
                    }, n.componentDidMount = function() {
                        this._blockSelectEvents = !1, !K && O("draft_ods_enabled") && (K = !0, v.initODS()), this.setMode("edit"), M && document.execCommand("AutoUrlDetect", !1, !1)
                    }, n.componentDidUpdate = function() {
                        this._blockSelectEvents = !1, this._latestEditorState = this.props.editorState, this._latestCommittedEditorState = this.props.editorState
                    }, t
                }(y.Component);
            s(L, "defaultProps", {
                blockRenderMap: u,
                blockRendererFn: x.thatReturnsNull,
                blockStyleFn: x.thatReturns(""),
                customAttrs: {},
                keyBindingFn: k,
                readOnly: !1,
                spellCheck: !1,
                stripPastedStyles: !1
            }), e.exports = L
        },
        "1+m/": function(e, t, n) {
            "use strict";
            (function(t) {
                var r = n("Ea6c"),
                    i = n("Cfxn"),
                    o = n("iN4q"),
                    a = n("2KzS"),
                    s = n("tI3i");

                function c(e, t) {
                    if (!e) return "[empty]";
                    var n = function e(t, n) {
                        var r = void 0 !== n ? n(t) : [];
                        if (t.nodeType === Node.TEXT_NODE) {
                            var i = t.textContent.length;
                            return document.createTextNode("[text " + i + (r.length ? " | " + r.join(", ") : "") + "]")
                        }
                        var o = t.cloneNode();
                        1 === o.nodeType && r.length && o.setAttribute("data-labels", r.join(", "));
                        var a = t.childNodes;
                        for (var s = 0; s < a.length; s++) o.appendChild(e(a[s], n));
                        return o
                    }(e, t);
                    return n.nodeType === Node.TEXT_NODE ? n.textContent : (n instanceof Element || s(!1), n.outerHTML)
                }

                function u(e, t) {
                    for (var n = e; n;) {
                        if (n instanceof Element && n.hasAttribute("contenteditable")) return c(n, t);
                        n = n.parentNode
                    }
                    return "Could not find contentEditable parent of node"
                }

                function l(e) {
                    return null === e.nodeValue ? e.childNodes.length : e.nodeValue.length
                }

                function f(e, t, n, r) {
                    var s = a();
                    if (e.extend && o(s, t)) {
                        n > l(t) && i.logSelectionStateFailure({
                            anonymizedDom: u(t),
                            extraParams: JSON.stringify({
                                offset: n
                            }),
                            selectionState: JSON.stringify(r.toJS())
                        });
                        var c = t === e.focusNode;
                        try {
                            e.extend(t, n)
                        } catch (d) {
                            throw i.logSelectionStateFailure({
                                anonymizedDom: u(t, (function(t) {
                                    var n = [];
                                    return t === s && n.push("active element"), t === e.anchorNode && n.push("selection anchor node"), t === e.focusNode && n.push("selection focus node"), n
                                })),
                                extraParams: JSON.stringify({
                                    activeElementName: s ? s.nodeName : null,
                                    nodeIsFocus: t === e.focusNode,
                                    nodeWasFocus: c,
                                    selectionRangeCount: e.rangeCount,
                                    selectionAnchorNodeName: e.anchorNode ? e.anchorNode.nodeName : null,
                                    selectionAnchorOffset: e.anchorOffset,
                                    selectionFocusNodeName: e.focusNode ? e.focusNode.nodeName : null,
                                    selectionFocusOffset: e.focusOffset,
                                    message: d ? "" + d : null,
                                    offset: n
                                }, null, 2),
                                selectionState: JSON.stringify(r.toJS(), null, 2)
                            }), d
                        }
                    } else {
                        var f = e.getRangeAt(0);
                        f.setEnd(t, n), e.addRange(f.cloneRange())
                    }
                }

                function d(e, t, n, o) {
                    var a = document.createRange();
                    n > l(t) && (i.logSelectionStateFailure({
                        anonymizedDom: u(t),
                        extraParams: JSON.stringify({
                            offset: n
                        }),
                        selectionState: JSON.stringify(o.toJS())
                    }), r.handleExtensionCausedError()), a.setStart(t, n), e.addRange(a)
                }
                e.exports = function(e, n, r, i, a) {
                    if (o(document.documentElement, n)) {
                        var s = t.getSelection(),
                            c = e.getAnchorKey(),
                            u = e.getAnchorOffset(),
                            l = e.getFocusKey(),
                            p = e.getFocusOffset(),
                            h = e.getIsBackward();
                        if (!s.extend && h) {
                            var g = c,
                                v = u;
                            c = l, u = p, l = g, p = v, h = !1
                        }
                        var m = c === r && i <= u && a >= u,
                            y = l === r && i <= p && a >= p;
                        if (m && y) return s.removeAllRanges(), d(s, n, u - i, e), void f(s, n, p - i, e);
                        if (h) {
                            if (y && (s.removeAllRanges(), d(s, n, p - i, e)), m) {
                                var _ = s.focusNode,
                                    b = s.focusOffset;
                                s.removeAllRanges(), d(s, n, u - i, e), f(s, _, b, e)
                            }
                        } else m && (s.removeAllRanges(), d(s, n, u - i, e)), y && f(s, n, p - i, e)
                    }
                }
            }).call(this, n("yLpj"))
        },
        "1AUG": function(e, t, n) {
            "use strict";
            n("/2Cm");
            e.exports = function(e, t) {
                var n = e.getSelection(),
                    r = e.getCurrentContent(),
                    i = n.getStartKey(),
                    o = n.getStartOffset(),
                    a = i,
                    s = 0;
                if (t > o) {
                    var c = r.getKeyBefore(i);
                    if (null == c) a = i;
                    else a = c, s = r.getBlockForKey(c).getText().length
                } else s = o - t;
                return n.merge({
                    focusKey: a,
                    focusOffset: s,
                    isBackward: !0
                })
            }
        },
        "1RVd": function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "InlineComposeContainer", (function() {
                return u
            }));
            var r = n("ERkP"),
                i = n("Ub51"),
                o = n("3xO4"),
                a = n.n(o),
                s = n("cHvH"),
                c = n("rHpw"),
                u = function(e) {
                    var t = e.history,
                        n = e.location,
                        o = e.richTextInputContext,
                        c = e.typeaheadWrapper,
                        u = e.parentTweetId,
                        f = e.replyPressToggle;
                    return r.createElement(s.a, null, (function(e) {
                        var s = e.windowWidth;
                        return r.createElement(a.a, {
                            style: l.root
                        }, r.createElement(i.a, {
                            history: t,
                            isInline: !0,
                            location: n,
                            parentTweetId: u,
                            replyPressToggle: f,
                            richTextInputContext: o,
                            typeaheadWrapper: c,
                            windowWidth: s
                        }))
                    }))
                },
                l = c.a.create((function(e) {
                    return {
                        root: {
                            backgroundColor: e.colors.cellBackground,
                            zIndex: 1
                        }
                    }
                }));
            t.default = u
        },
        "1xkk": function(e, t, n) {
            "use strict";

            function r(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var i = n("VUYy"),
                o = n("VeLA"),
                a = n("Yed0"),
                s = n("IDEf"),
                c = n("Svze"),
                u = c.OrderedSet,
                l = c.Record,
                f = c.Stack,
                d = l({
                    allowUndo: !0,
                    currentContent: null,
                    decorator: null,
                    directionMap: null,
                    forceSelection: !1,
                    inCompositionMode: !1,
                    inlineStyleOverride: null,
                    lastChangeType: null,
                    nativelyRenderedContent: null,
                    redoStack: f(),
                    selection: null,
                    treeMap: null,
                    undoStack: f()
                }),
                p = function() {
                    t.createEmpty = function(e) {
                        return t.createWithContent(o.createFromText(""), e)
                    }, t.createWithContent = function(e, n) {
                        var r = e.getBlockMap().first().getKey();
                        return t.create({
                            currentContent: e,
                            undoStack: f(),
                            redoStack: f(),
                            decorator: n || null,
                            selection: s.createEmpty(r)
                        })
                    }, t.create = function(e) {
                        var n = e.currentContent,
                            i = function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        i = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                                    })))), i.forEach((function(t) {
                                        r(e, t, n[t])
                                    }))
                                }
                                return e
                            }({}, e, {
                                treeMap: g(n, e.decorator),
                                directionMap: a.getDirectionMap(n)
                            });
                        return new t(new d(i))
                    }, t.set = function(e, n) {
                        return new t(e.getImmutable().withMutations((function(t) {
                            var r = t.get("decorator"),
                                o = r;
                            null === n.decorator ? o = null : n.decorator && (o = n.decorator);
                            var a = n.currentContent || e.getCurrentContent();
                            if (o !== r) {
                                var s, c = t.get("treeMap");
                                return s = o && r ? function(e, t, n, r, o) {
                                    return n.merge(t.toSeq().filter((function(t) {
                                        return r.getDecorations(t, e) !== o.getDecorations(t, e)
                                    })).map((function(t) {
                                        return i.generate(e, t, r)
                                    })))
                                }(a, a.getBlockMap(), c, o, r) : g(a, o), void t.merge({
                                    decorator: o,
                                    treeMap: s,
                                    nativelyRenderedContent: null
                                })
                            }
                            a !== e.getCurrentContent() && t.set("treeMap", function(e, t, n, r) {
                                var o = e.getCurrentContent().set("entityMap", n),
                                    a = o.getBlockMap();
                                return e.getImmutable().get("treeMap").merge(t.toSeq().filter((function(e, t) {
                                    return e !== a.get(t)
                                })).map((function(e) {
                                    return i.generate(o, e, r)
                                })))
                            }(e, a.getBlockMap(), a.getEntityMap(), o)), t.merge(n)
                        })))
                    };
                    var e = t.prototype;

                    function t(e) {
                        r(this, "_immutable", void 0), this._immutable = e
                    }
                    return e.toJS = function() {
                        return this.getImmutable().toJS()
                    }, e.getAllowUndo = function() {
                        return this.getImmutable().get("allowUndo")
                    }, e.getCurrentContent = function() {
                        return this.getImmutable().get("currentContent")
                    }, e.getUndoStack = function() {
                        return this.getImmutable().get("undoStack")
                    }, e.getRedoStack = function() {
                        return this.getImmutable().get("redoStack")
                    }, e.getSelection = function() {
                        return this.getImmutable().get("selection")
                    }, e.getDecorator = function() {
                        return this.getImmutable().get("decorator")
                    }, e.isInCompositionMode = function() {
                        return this.getImmutable().get("inCompositionMode")
                    }, e.mustForceSelection = function() {
                        return this.getImmutable().get("forceSelection")
                    }, e.getNativelyRenderedContent = function() {
                        return this.getImmutable().get("nativelyRenderedContent")
                    }, e.getLastChangeType = function() {
                        return this.getImmutable().get("lastChangeType")
                    }, e.getInlineStyleOverride = function() {
                        return this.getImmutable().get("inlineStyleOverride")
                    }, t.setInlineStyleOverride = function(e, n) {
                        return t.set(e, {
                            inlineStyleOverride: n
                        })
                    }, e.getCurrentInlineStyle = function() {
                        var e = this.getInlineStyleOverride();
                        if (null != e) return e;
                        var t = this.getCurrentContent(),
                            n = this.getSelection();
                        return n.isCollapsed() ? function(e, t) {
                            var n = t.getStartKey(),
                                r = t.getStartOffset(),
                                i = e.getBlockForKey(n);
                            if (r > 0) return i.getInlineStyleAt(r - 1);
                            if (i.getLength()) return i.getInlineStyleAt(0);
                            return m(e, n)
                        }(t, n) : function(e, t) {
                            var n = t.getStartKey(),
                                r = t.getStartOffset(),
                                i = e.getBlockForKey(n);
                            if (r < i.getLength()) return i.getInlineStyleAt(r);
                            if (r > 0) return i.getInlineStyleAt(r - 1);
                            return m(e, n)
                        }(t, n)
                    }, e.getBlockTree = function(e) {
                        return this.getImmutable().getIn(["treeMap", e])
                    }, e.isSelectionAtStartOfContent = function() {
                        var e = this.getCurrentContent().getBlockMap().first().getKey();
                        return this.getSelection().hasEdgeWithin(e, 0, 0)
                    }, e.isSelectionAtEndOfContent = function() {
                        var e = this.getCurrentContent().getBlockMap().last(),
                            t = e.getLength();
                        return this.getSelection().hasEdgeWithin(e.getKey(), t, t)
                    }, e.getDirectionMap = function() {
                        return this.getImmutable().get("directionMap")
                    }, t.acceptSelection = function(e, t) {
                        return h(e, t, !1)
                    }, t.forceSelection = function(e, t) {
                        return t.getHasFocus() || (t = t.set("hasFocus", !0)), h(e, t, !0)
                    }, t.moveSelectionToEnd = function(e) {
                        var n = e.getCurrentContent().getLastBlock(),
                            r = n.getKey(),
                            i = n.getLength();
                        return t.acceptSelection(e, new s({
                            anchorKey: r,
                            anchorOffset: i,
                            focusKey: r,
                            focusOffset: i,
                            isBackward: !1
                        }))
                    }, t.moveFocusToEnd = function(e) {
                        var n = t.moveSelectionToEnd(e);
                        return t.forceSelection(n, n.getSelection())
                    }, t.push = function(e, n, r) {
                        var i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                        if (e.getCurrentContent() === n) return e;
                        var o = a.getDirectionMap(n, e.getDirectionMap());
                        if (!e.getAllowUndo()) return t.set(e, {
                            currentContent: n,
                            directionMap: o,
                            lastChangeType: r,
                            selection: n.getSelectionAfter(),
                            forceSelection: i,
                            inlineStyleOverride: null
                        });
                        var s = e.getSelection(),
                            c = e.getCurrentContent(),
                            u = e.getUndoStack(),
                            l = n;
                        s !== c.getSelectionAfter() || v(e, r) ? (u = u.push(c), l = l.set("selectionBefore", s)) : "insert-characters" !== r && "backspace-character" !== r && "delete-character" !== r || (l = l.set("selectionBefore", c.getSelectionBefore()));
                        var d = e.getInlineStyleOverride(),
                            p = ["adjust-depth", "change-block-type", "split-block"]; - 1 === p.indexOf(r) && (d = null);
                        var h = {
                            currentContent: l,
                            directionMap: o,
                            undoStack: u,
                            redoStack: f(),
                            lastChangeType: r,
                            selection: n.getSelectionAfter(),
                            forceSelection: i,
                            inlineStyleOverride: d
                        };
                        return t.set(e, h)
                    }, t.undo = function(e) {
                        if (!e.getAllowUndo()) return e;
                        var n = e.getUndoStack(),
                            r = n.peek();
                        if (!r) return e;
                        var i = e.getCurrentContent(),
                            o = a.getDirectionMap(r, e.getDirectionMap());
                        return t.set(e, {
                            currentContent: r,
                            directionMap: o,
                            undoStack: n.shift(),
                            redoStack: e.getRedoStack().push(i),
                            forceSelection: !0,
                            inlineStyleOverride: null,
                            lastChangeType: "undo",
                            nativelyRenderedContent: null,
                            selection: i.getSelectionBefore()
                        })
                    }, t.redo = function(e) {
                        if (!e.getAllowUndo()) return e;
                        var n = e.getRedoStack(),
                            r = n.peek();
                        if (!r) return e;
                        var i = e.getCurrentContent(),
                            o = a.getDirectionMap(r, e.getDirectionMap());
                        return t.set(e, {
                            currentContent: r,
                            directionMap: o,
                            undoStack: e.getUndoStack().push(i),
                            redoStack: n.shift(),
                            forceSelection: !0,
                            inlineStyleOverride: null,
                            lastChangeType: "redo",
                            nativelyRenderedContent: null,
                            selection: r.getSelectionAfter()
                        })
                    }, e.getImmutable = function() {
                        return this._immutable
                    }, t
                }();

            function h(e, t, n) {
                return p.set(e, {
                    selection: t,
                    forceSelection: n,
                    nativelyRenderedContent: null,
                    inlineStyleOverride: null
                })
            }

            function g(e, t) {
                return e.getBlockMap().map((function(n) {
                    return i.generate(e, n, t)
                })).toOrderedMap()
            }

            function v(e, t) {
                return t !== e.getLastChangeType() || "insert-characters" !== t && "backspace-character" !== t && "delete-character" !== t
            }

            function m(e, t) {
                var n = e.getBlockMap().reverse().skipUntil((function(e, n) {
                    return n === t
                })).skip(1).skipUntil((function(e, t) {
                    return e.getLength()
                })).first();
                return n ? n.getInlineStyleAt(n.getLength() - 1) : u()
            }
            e.exports = p
        },
        "2KzS": function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0))) return null;
                try {
                    return e.activeElement || e.body
                } catch (t) {
                    return e.body
                }
            }
        },
        "2Wwg": function(e, t, n) {
            "use strict";

            function r(e) {
                return e.replace(/\//g, "-")
            }
            e.exports = function(e) {
                return "object" == typeof e ? Object.keys(e).filter((function(t) {
                    return e[t]
                })).map(r).join(" ") : Array.prototype.map.call(arguments, r).join(" ")
            }
        },
        "3as9": function(e, t, n) {
            var r;
            /*!
             * UAParser.js v0.7.19
             * Lightweight JavaScript-based User-Agent string parser
             * https://github.com/faisalman/ua-parser-js
             *
             * Copyright © 2012-2016 Faisal Salman <fyzlman@gmail.com>
             * Dual licensed under GPLv2 or MIT
             */
            ! function(i, o) {
                "use strict";
                var a = "model",
                    s = "name",
                    c = "type",
                    u = "vendor",
                    l = "version",
                    f = "mobile",
                    d = "tablet",
                    p = {
                        extend: function(e, t) {
                            var n = {};
                            for (var r in e) t[r] && t[r].length % 2 == 0 ? n[r] = t[r].concat(e[r]) : n[r] = e[r];
                            return n
                        },
                        has: function(e, t) {
                            return "string" == typeof e && -1 !== t.toLowerCase().indexOf(e.toLowerCase())
                        },
                        lowerize: function(e) {
                            return e.toLowerCase()
                        },
                        major: function(e) {
                            return "string" == typeof e ? e.replace(/[^\d\.]/g, "").split(".")[0] : void 0
                        },
                        trim: function(e) {
                            return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
                        }
                    },
                    h = {
                        rgx: function(e, t) {
                            for (var n, r, i, o, a, s, c = 0; c < t.length && !a;) {
                                var u = t[c],
                                    l = t[c + 1];
                                for (n = r = 0; n < u.length && !a;)
                                    if (a = u[n++].exec(e))
                                        for (i = 0; i < l.length; i++) s = a[++r], "object" == typeof(o = l[i]) && o.length > 0 ? 2 == o.length ? "function" == typeof o[1] ? this[o[0]] = o[1].call(this, s) : this[o[0]] = o[1] : 3 == o.length ? "function" != typeof o[1] || o[1].exec && o[1].test ? this[o[0]] = s ? s.replace(o[1], o[2]) : void 0 : this[o[0]] = s ? o[1].call(this, s, o[2]) : void 0 : 4 == o.length && (this[o[0]] = s ? o[3].call(this, s.replace(o[1], o[2])) : void 0) : this[o] = s || void 0;
                                c += 2
                            }
                        },
                        str: function(e, t) {
                            for (var n in t)
                                if ("object" == typeof t[n] && t[n].length > 0) {
                                    for (var r = 0; r < t[n].length; r++)
                                        if (p.has(t[n][r], e)) return "?" === n ? void 0 : n
                                } else if (p.has(t[n], e)) return "?" === n ? void 0 : n;
                            return e
                        }
                    },
                    g = {
                        browser: {
                            oldsafari: {
                                version: {
                                    "1.0": "/8",
                                    1.2: "/1",
                                    1.3: "/3",
                                    "2.0": "/412",
                                    "2.0.2": "/416",
                                    "2.0.3": "/417",
                                    "2.0.4": "/419",
                                    "?": "/"
                                }
                            }
                        },
                        device: {
                            amazon: {
                                model: {
                                    "Fire Phone": ["SD", "KF"]
                                }
                            },
                            sprint: {
                                model: {
                                    "Evo Shift 4G": "7373KT"
                                },
                                vendor: {
                                    HTC: "APA",
                                    Sprint: "Sprint"
                                }
                            }
                        },
                        os: {
                            windows: {
                                version: {
                                    ME: "4.90",
                                    "NT 3.11": "NT3.51",
                                    "NT 4.0": "NT4.0",
                                    2e3: "NT 5.0",
                                    XP: ["NT 5.1", "NT 5.2"],
                                    Vista: "NT 6.0",
                                    7: "NT 6.1",
                                    8: "NT 6.2",
                                    8.1: "NT 6.3",
                                    10: ["NT 6.4", "NT 10.0"],
                                    RT: "ARM"
                                }
                            }
                        }
                    },
                    v = {
                        browser: [
                            [/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i],
                            [s, l],
                            [/(opios)[\/\s]+([\w\.]+)/i],
                            [
                                [s, "Opera Mini"], l
                            ],
                            [/\s(opr)\/([\w\.]+)/i],
                            [
                                [s, "Opera"], l
                            ],
                            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]*)/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark)\/([\w\.-]+)/i],
                            [s, l],
                            [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
                            [
                                [s, "IE"], l
                            ],
                            [/(edge|edgios|edga)\/((\d+)?[\w\.]+)/i],
                            [
                                [s, "Edge"], l
                            ],
                            [/(yabrowser)\/([\w\.]+)/i],
                            [
                                [s, "Yandex"], l
                            ],
                            [/(puffin)\/([\w\.]+)/i],
                            [
                                [s, "Puffin"], l
                            ],
                            [/(focus)\/([\w\.]+)/i],
                            [
                                [s, "Firefox Focus"], l
                            ],
                            [/(opt)\/([\w\.]+)/i],
                            [
                                [s, "Opera Touch"], l
                            ],
                            [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
                            [
                                [s, "UCBrowser"], l
                            ],
                            [/(comodo_dragon)\/([\w\.]+)/i],
                            [
                                [s, /_/g, " "], l
                            ],
                            [/(micromessenger)\/([\w\.]+)/i],
                            [
                                [s, "WeChat"], l
                            ],
                            [/(brave)\/([\w\.]+)/i],
                            [
                                [s, "Brave"], l
                            ],
                            [/(qqbrowserlite)\/([\w\.]+)/i],
                            [s, l],
                            [/(QQ)\/([\d\.]+)/i],
                            [s, l],
                            [/m?(qqbrowser)[\/\s]?([\w\.]+)/i],
                            [s, l],
                            [/(BIDUBrowser)[\/\s]?([\w\.]+)/i],
                            [s, l],
                            [/(2345Explorer)[\/\s]?([\w\.]+)/i],
                            [s, l],
                            [/(MetaSr)[\/\s]?([\w\.]+)/i],
                            [s],
                            [/(LBBROWSER)/i],
                            [s],
                            [/xiaomi\/miuibrowser\/([\w\.]+)/i],
                            [l, [s, "MIUI Browser"]],
                            [/;fbav\/([\w\.]+);/i],
                            [l, [s, "Facebook"]],
                            [/safari\s(line)\/([\w\.]+)/i, /android.+(line)\/([\w\.]+)\/iab/i],
                            [s, l],
                            [/headlesschrome(?:\/([\w\.]+)|\s)/i],
                            [l, [s, "Chrome Headless"]],
                            [/\swv\).+(chrome)\/([\w\.]+)/i],
                            [
                                [s, /(.+)/, "$1 WebView"], l
                            ],
                            [/((?:oculus|samsung)browser)\/([\w\.]+)/i],
                            [
                                [s, /(.+(?:g|us))(.+)/, "$1 $2"], l
                            ],
                            [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],
                            [l, [s, "Android Browser"]],
                            [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
                            [s, l],
                            [/(dolfin)\/([\w\.]+)/i],
                            [
                                [s, "Dolphin"], l
                            ],
                            [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
                            [
                                [s, "Chrome"], l
                            ],
                            [/(coast)\/([\w\.]+)/i],
                            [
                                [s, "Opera Coast"], l
                            ],
                            [/fxios\/([\w\.-]+)/i],
                            [l, [s, "Firefox"]],
                            [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
                            [l, [s, "Mobile Safari"]],
                            [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
                            [l, s],
                            [/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                            [
                                [s, "GSA"], l
                            ],
                            [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                            [s, [l, h.str, g.browser.oldsafari.version]],
                            [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i],
                            [s, l],
                            [/(navigator|netscape)\/([\w\.-]+)/i],
                            [
                                [s, "Netscape"], l
                            ],
                            [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i],
                            [s, l]
                        ],
                        cpu: [
                            [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
                            [
                                ["architecture", "amd64"]
                            ],
                            [/(ia32(?=;))/i],
                            [
                                ["architecture", p.lowerize]
                            ],
                            [/((?:i[346]|x)86)[;\)]/i],
                            [
                                ["architecture", "ia32"]
                            ],
                            [/windows\s(ce|mobile);\sppc;/i],
                            [
                                ["architecture", "arm"]
                            ],
                            [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
                            [
                                ["architecture", /ower/, "", p.lowerize]
                            ],
                            [/(sun4\w)[;\)]/i],
                            [
                                ["architecture", "sparc"]
                            ],
                            [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],
                            [
                                ["architecture", p.lowerize]
                            ]
                        ],
                        device: [
                            [/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],
                            [a, u, [c, d]],
                            [/applecoremedia\/[\w\.]+ \((ipad)/],
                            [a, [u, "Apple"],
                                [c, d]
                            ],
                            [/(apple\s{0,1}tv)/i],
                            [
                                [a, "Apple TV"],
                                [u, "Apple"]
                            ],
                            [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i],
                            [u, a, [c, d]],
                            [/(kf[A-z]+)\sbuild\/.+silk\//i],
                            [a, [u, "Amazon"],
                                [c, d]
                            ],
                            [/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],
                            [
                                [a, h.str, g.device.amazon.model],
                                [u, "Amazon"],
                                [c, f]
                            ],
                            [/android.+aft([bms])\sbuild/i],
                            [a, [u, "Amazon"],
                                [c, "smarttv"]
                            ],
                            [/\((ip[honed|\s\w*]+);.+(apple)/i],
                            [a, u, [c, f]],
                            [/\((ip[honed|\s\w*]+);/i],
                            [a, [u, "Apple"],
                                [c, f]
                            ],
                            [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i],
                            [u, a, [c, f]],
                            [/\(bb10;\s(\w+)/i],
                            [a, [u, "BlackBerry"],
                                [c, f]
                            ],
                            [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],
                            [a, [u, "Asus"],
                                [c, d]
                            ],
                            [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i],
                            [
                                [u, "Sony"],
                                [a, "Xperia Tablet"],
                                [c, d]
                            ],
                            [/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i],
                            [a, [u, "Sony"],
                                [c, f]
                            ],
                            [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
                            [u, a, [c, "console"]],
                            [/android.+;\s(shield)\sbuild/i],
                            [a, [u, "Nvidia"],
                                [c, "console"]
                            ],
                            [/(playstation\s[34portablevi]+)/i],
                            [a, [u, "Sony"],
                                [c, "console"]
                            ],
                            [/(sprint\s(\w+))/i],
                            [
                                [u, h.str, g.device.sprint.vendor],
                                [a, h.str, g.device.sprint.model],
                                [c, f]
                            ],
                            [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],
                            [u, a, [c, d]],
                            [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],
                            [u, [a, /_/g, " "],
                                [c, f]
                            ],
                            [/(nexus\s9)/i],
                            [a, [u, "HTC"],
                                [c, d]
                            ],
                            [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p)/i],
                            [a, [u, "Huawei"],
                                [c, f]
                            ],
                            [/(microsoft);\s(lumia[\s\w]+)/i],
                            [u, a, [c, f]],
                            [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
                            [a, [u, "Microsoft"],
                                [c, "console"]
                            ],
                            [/(kin\.[onetw]{3})/i],
                            [
                                [a, /\./g, " "],
                                [u, "Microsoft"],
                                [c, f]
                            ],
                            [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w*)/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i],
                            [a, [u, "Motorola"],
                                [c, f]
                            ],
                            [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
                            [a, [u, "Motorola"],
                                [c, d]
                            ],
                            [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
                            [
                                [u, p.trim],
                                [a, p.trim],
                                [c, "smarttv"]
                            ],
                            [/hbbtv.+maple;(\d+)/i],
                            [
                                [a, /^/, "SmartTV"],
                                [u, "Samsung"],
                                [c, "smarttv"]
                            ],
                            [/\(dtv[\);].+(aquos)/i],
                            [a, [u, "Sharp"],
                                [c, "smarttv"]
                            ],
                            [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i],
                            [
                                [u, "Samsung"], a, [c, d]
                            ],
                            [/smart-tv.+(samsung)/i],
                            [u, [c, "smarttv"], a],
                            [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i, /sec-((sgh\w+))/i],
                            [
                                [u, "Samsung"], a, [c, f]
                            ],
                            [/sie-(\w*)/i],
                            [a, [u, "Siemens"],
                                [c, f]
                            ],
                            [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i],
                            [
                                [u, "Nokia"], a, [c, f]
                            ],
                            [/android\s3\.[\s\w;-]{10}(a\d{3})/i],
                            [a, [u, "Acer"],
                                [c, d]
                            ],
                            [/android.+([vl]k\-?\d{3})\s+build/i],
                            [a, [u, "LG"],
                                [c, d]
                            ],
                            [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
                            [
                                [u, "LG"], a, [c, d]
                            ],
                            [/(lg) netcast\.tv/i],
                            [u, a, [c, "smarttv"]],
                            [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w*)/i, /android.+lg(\-?[\d\w]+)\s+build/i],
                            [a, [u, "LG"],
                                [c, f]
                            ],
                            [/android.+(ideatab[a-z0-9\-\s]+)/i],
                            [a, [u, "Lenovo"],
                                [c, d]
                            ],
                            [/linux;.+((jolla));/i],
                            [u, a, [c, f]],
                            [/((pebble))app\/[\d\.]+\s/i],
                            [u, a, [c, "wearable"]],
                            [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
                            [u, a, [c, f]],
                            [/crkey/i],
                            [
                                [a, "Chromecast"],
                                [u, "Google"]
                            ],
                            [/android.+;\s(glass)\s\d/i],
                            [a, [u, "Google"],
                                [c, "wearable"]
                            ],
                            [/android.+;\s(pixel c)[\s)]/i],
                            [a, [u, "Google"],
                                [c, d]
                            ],
                            [/android.+;\s(pixel( [23])?( xl)?)\s/i],
                            [a, [u, "Google"],
                                [c, f]
                            ],
                            [/android.+;\s(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i, /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i],
                            [
                                [a, /_/g, " "],
                                [u, "Xiaomi"],
                                [c, f]
                            ],
                            [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],
                            [
                                [a, /_/g, " "],
                                [u, "Xiaomi"],
                                [c, d]
                            ],
                            [/android.+;\s(m[1-5]\snote)\sbuild/i],
                            [a, [u, "Meizu"],
                                [c, d]
                            ],
                            [/(mz)-([\w-]{2,})/i],
                            [
                                [u, "Meizu"], a, [c, f]
                            ],
                            [/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})\s+build/i],
                            [a, [u, "OnePlus"],
                                [c, f]
                            ],
                            [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],
                            [a, [u, "RCA"],
                                [c, d]
                            ],
                            [/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],
                            [a, [u, "Dell"],
                                [c, d]
                            ],
                            [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],
                            [a, [u, "Verizon"],
                                [c, d]
                            ],
                            [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],
                            [
                                [u, "Barnes & Noble"], a, [c, d]
                            ],
                            [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],
                            [a, [u, "NuVision"],
                                [c, d]
                            ],
                            [/android.+;\s(k88)\sbuild/i],
                            [a, [u, "ZTE"],
                                [c, d]
                            ],
                            [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],
                            [a, [u, "Swiss"],
                                [c, f]
                            ],
                            [/android.+[;\/]\s*(zur\d{3})\s+build/i],
                            [a, [u, "Swiss"],
                                [c, d]
                            ],
                            [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],
                            [a, [u, "Zeki"],
                                [c, d]
                            ],
                            [/(android).+[;\/]\s+([YR]\d{2})\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],
                            [
                                [u, "Dragon Touch"], a, [c, d]
                            ],
                            [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],
                            [a, [u, "Insignia"],
                                [c, d]
                            ],
                            [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],
                            [a, [u, "NextBook"],
                                [c, d]
                            ],
                            [/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],
                            [
                                [u, "Voice"], a, [c, f]
                            ],
                            [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],
                            [
                                [u, "LvTel"], a, [c, f]
                            ],
                            [/android.+;\s(PH-1)\s/i],
                            [a, [u, "Essential"],
                                [c, f]
                            ],
                            [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],
                            [a, [u, "Envizen"],
                                [c, d]
                            ],
                            [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],
                            [u, a, [c, d]],
                            [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],
                            [a, [u, "MachSpeed"],
                                [c, d]
                            ],
                            [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],
                            [u, a, [c, d]],
                            [/android.+[;\/]\s*TU_(1491)\s+build/i],
                            [a, [u, "Rotor"],
                                [c, d]
                            ],
                            [/android.+(KS(.+))\s+build/i],
                            [a, [u, "Amazon"],
                                [c, d]
                            ],
                            [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],
                            [u, a, [c, d]],
                            [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
                            [
                                [c, p.lowerize], u, a
                            ],
                            [/(android[\w\.\s\-]{0,9});.+build/i],
                            [a, [u, "Generic"]]
                        ],
                        engine: [
                            [/windows.+\sedge\/([\w\.]+)/i],
                            [l, [s, "EdgeHTML"]],
                            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i],
                            [s, l],
                            [/rv\:([\w\.]{1,9}).+(gecko)/i],
                            [l, s]
                        ],
                        os: [
                            [/microsoft\s(windows)\s(vista|xp)/i],
                            [s, l],
                            [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],
                            [s, [l, h.str, g.os.windows.version]],
                            [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                            [
                                [s, "Windows"],
                                [l, h.str, g.os.windows.version]
                            ],
                            [/\((bb)(10);/i],
                            [
                                [s, "BlackBerry"], l
                            ],
                            [/(blackberry)\w*\/?([\w\.]*)/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]*)/i, /linux;.+(sailfish);/i],
                            [s, l],
                            [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],
                            [
                                [s, "Symbian"], l
                            ],
                            [/\((series40);/i],
                            [s],
                            [/mozilla.+\(mobile;.+gecko.+firefox/i],
                            [
                                [s, "Firefox OS"], l
                            ],
                            [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i, /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i],
                            [s, l],
                            [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                            [
                                [s, "Chromium OS"], l
                            ],
                            [/(sunos)\s?([\w\.\d]*)/i],
                            [
                                [s, "Solaris"], l
                            ],
                            [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],
                            [s, l],
                            [/(haiku)\s(\w+)/i],
                            [s, l],
                            [/cfnetwork\/.+darwin/i, /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],
                            [
                                [l, /_/g, "."],
                                [s, "iOS"]
                            ],
                            [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i],
                            [
                                [s, "Mac OS"],
                                [l, /_/g, "."]
                            ],
                            [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i, /(unix)\s?([\w\.]*)/i],
                            [s, l]
                        ]
                    },
                    m = function(e, t) {
                        if ("object" == typeof e && (t = e, e = void 0), !(this instanceof m)) return new m(e, t).getResult();
                        var n = e || (i && i.navigator && i.navigator.userAgent ? i.navigator.userAgent : ""),
                            r = t ? p.extend(v, t) : v;
                        return this.getBrowser = function() {
                            var e = {
                                name: void 0,
                                version: void 0
                            };
                            return h.rgx.call(e, n, r.browser), e.major = p.major(e.version), e
                        }, this.getCPU = function() {
                            var e = {
                                architecture: void 0
                            };
                            return h.rgx.call(e, n, r.cpu), e
                        }, this.getDevice = function() {
                            var e = {
                                vendor: void 0,
                                model: void 0,
                                type: void 0
                            };
                            return h.rgx.call(e, n, r.device), e
                        }, this.getEngine = function() {
                            var e = {
                                name: void 0,
                                version: void 0
                            };
                            return h.rgx.call(e, n, r.engine), e
                        }, this.getOS = function() {
                            var e = {
                                name: void 0,
                                version: void 0
                            };
                            return h.rgx.call(e, n, r.os), e
                        }, this.getResult = function() {
                            return {
                                ua: this.getUA(),
                                browser: this.getBrowser(),
                                engine: this.getEngine(),
                                os: this.getOS(),
                                device: this.getDevice(),
                                cpu: this.getCPU()
                            }
                        }, this.getUA = function() {
                            return n
                        }, this.setUA = function(e) {
                            return n = e, this
                        }, this
                    };
                m.VERSION = "0.7.19", m.BROWSER = {
                    NAME: s,
                    MAJOR: "major",
                    VERSION: l
                }, m.CPU = {
                    ARCHITECTURE: "architecture"
                }, m.DEVICE = {
                    MODEL: a,
                    VENDOR: u,
                    TYPE: c,
                    CONSOLE: "console",
                    MOBILE: f,
                    SMARTTV: "smarttv",
                    TABLET: d,
                    WEARABLE: "wearable",
                    EMBEDDED: "embedded"
                }, m.ENGINE = {
                    NAME: s,
                    VERSION: l
                }, m.OS = {
                    NAME: s,
                    VERSION: l
                }, void 0 !== t ? (void 0 !== e && e.exports && (t = e.exports = m), t.UAParser = m) : n("PDX0") ? void 0 === (r = function() {
                    return m
                }.call(t, n, t, e)) || (e.exports = r) : i && (i.UAParser = m);
                var y = i && (i.jQuery || i.Zepto);
                if (void 0 !== y && !y.ua) {
                    var _ = new m;
                    y.ua = _.getResult(), y.ua.get = function() {
                        return _.getUA()
                    }, y.ua.set = function(e) {
                        _.setUA(e);
                        var t = _.getResult();
                        for (var n in t) y.ua[n] = t[n]
                    }
                }
            }("object" == typeof window ? window : this)
        },
        "4aXP": function(e, t, n) {
            "use strict";
            var r = n("7002"),
                i = n("ZUd0")("draft_tree_data_support");
            e.exports = function(e, t, n) {
                var o = e.getSelection(),
                    a = e.getCurrentContent(),
                    s = o,
                    c = o.getAnchorKey(),
                    u = o.getFocusKey(),
                    l = a.getBlockForKey(c);
                if (i && "forward" === n && c !== u) return a;
                if (o.isCollapsed()) {
                    if ("forward" === n) {
                        if (e.isSelectionAtEndOfContent()) return a;
                        if (i)
                            if (o.getAnchorOffset() === a.getBlockForKey(c).getLength()) {
                                var f = a.getBlockForKey(l.nextSibling);
                                if (!f || 0 === f.getLength()) return a
                            }
                    } else if (e.isSelectionAtStartOfContent()) return a;
                    if ((s = t(e)) === o) return a
                }
                return r.removeRange(a, s, n)
            }
        },
        "5/F0": function(e, t, n) {
            "use strict";
            var r = n("iN4q");
            e.exports = function(e) {
                var t = e.ownerDocument.documentElement;
                if (!("getBoundingClientRect" in e && r(t, e))) return {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                };
                var n = e.getBoundingClientRect();
                return {
                    left: Math.round(n.left) - t.clientLeft,
                    right: Math.round(n.right) - t.clientLeft,
                    top: Math.round(n.top) - t.clientTop,
                    bottom: Math.round(n.bottom) - t.clientTop
                }
            }
        },
        "58Uu": function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                e._internalDrag = !0, e.setMode("drag")
            }
        },
        "5mUX": function(e, t, n) {
            "use strict";
            var r = n("tI3i");
            e.exports = function(e, t) {
                var n = [];
                return e.findEntityRanges((function(e) {
                    return e.getEntity() === t
                }), (function(e, t) {
                    n.push({
                        start: e,
                        end: t
                    })
                })), n.length || r(!1), n
            }
        },
        7002: function(e, t, n) {
            "use strict";
            var r = n("b+nQ"),
                i = n("HKFH"),
                o = n("8dwq"),
                a = n("USh0"),
                s = n("hDHP"),
                c = n("Svze"),
                u = n("yzfH"),
                l = n("pW+J"),
                f = n("tI3i"),
                d = n("WmAF"),
                p = n("/L11"),
                h = n("QCHf"),
                g = n("KDIr"),
                v = c.OrderedSet,
                m = {
                    replaceText: function(e, t, n, i, o) {
                        var a = p(e, t),
                            s = h(a, t),
                            c = r.create({
                                style: i || v(),
                                entity: o || null
                            });
                        return l(s, s.getSelectionAfter(), n, c)
                    },
                    insertText: function(e, t, n, r, i) {
                        return t.isCollapsed() || f(!1), m.replaceText(e, t, n, r, i)
                    },
                    moveText: function(e, t, n) {
                        var r = s(e, t),
                            i = m.removeRange(e, t, "backward");
                        return m.replaceWithFragment(i, n, r)
                    },
                    replaceWithFragment: function(e, t, n) {
                        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "REPLACE_WITH_NEW_DATA",
                            i = p(e, t),
                            o = h(i, t);
                        return u(o, o.getSelectionAfter(), n, r)
                    },
                    removeRange: function(e, t, n) {
                        var r, i, o, s;
                        t.getIsBackward() && (t = t.merge({
                            anchorKey: t.getFocusKey(),
                            anchorOffset: t.getFocusOffset(),
                            focusKey: t.getAnchorKey(),
                            focusOffset: t.getAnchorOffset(),
                            isBackward: !1
                        })), r = t.getAnchorKey(), i = t.getFocusKey(), o = e.getBlockForKey(r), s = e.getBlockForKey(i);
                        var c = t.getStartOffset(),
                            u = t.getEndOffset(),
                            l = o.getEntityAt(c),
                            f = s.getEntityAt(u - 1);
                        if (r === i && l && l === f) {
                            var d = a(e.getEntityMap(), o, s, t, n);
                            return h(e, d)
                        }
                        var g = p(e, t);
                        return h(g, t)
                    },
                    splitBlock: function(e, t) {
                        var n = p(e, t),
                            r = h(n, t);
                        return g(r, r.getSelectionAfter())
                    },
                    applyInlineStyle: function(e, t, n) {
                        return i.add(e, t, n)
                    },
                    removeInlineStyle: function(e, t, n) {
                        return i.remove(e, t, n)
                    },
                    setBlockType: function(e, t, n) {
                        return d(e, t, (function(e) {
                            return e.merge({
                                type: n,
                                depth: 0
                            })
                        }))
                    },
                    setBlockData: function(e, t, n) {
                        return d(e, t, (function(e) {
                            return e.merge({
                                data: n
                            })
                        }))
                    },
                    mergeBlockData: function(e, t, n) {
                        return d(e, t, (function(e) {
                            return e.merge({
                                data: e.getData().merge(n)
                            })
                        }))
                    },
                    applyEntity: function(e, t, n) {
                        var r = p(e, t);
                        return o(r, t, n)
                    }
                };
            e.exports = m
        },
        "7MNd": function(e, t, n) {
            "use strict";
            var r = n("JtWY"),
                i = n("LxfW");
            e.exports = function(e) {
                var t = r(e.ownerDocument || e.document);
                e.Window && e instanceof e.Window && (e = t);
                var n = i(e),
                    o = e === t ? e.ownerDocument.documentElement : e,
                    a = e.scrollWidth - o.clientWidth,
                    s = e.scrollHeight - o.clientHeight;
                return n.x = Math.max(0, Math.min(n.x, a)), n.y = Math.max(0, Math.min(n.y, s)), n
            }
        },
        "7XzN": function(e, t, n) {
            "use strict";
            var r = n("b//S"),
                i = n("hF1F");
            e.exports = function(e, t, n, o, a) {
                var s = i(e.getSelection()),
                    c = r.decode(t),
                    u = c.blockKey,
                    l = e.getBlockTree(u).getIn([c.decoratorKey, "leaves", c.leafKey]),
                    f = r.decode(o),
                    d = f.blockKey,
                    p = e.getBlockTree(d).getIn([f.decoratorKey, "leaves", f.leafKey]);
                if (!l || !p) return s;
                var h = l.get("start"),
                    g = p.get("start"),
                    v = l ? h + n : null,
                    m = p ? g + a : null;
                if (s.getAnchorKey() === u && s.getAnchorOffset() === v && s.getFocusKey() === d && s.getFocusOffset() === m) return s;
                var y = !1;
                if (u === d) {
                    var _ = l.get("end"),
                        b = p.get("end");
                    y = g === h && b === _ ? a < n : g < h
                } else {
                    y = e.getCurrentContent().getBlockMap().keySeq().skipUntil((function(e) {
                        return e === u || e === d
                    })).first() === d
                }
                return s.merge({
                    anchorKey: u,
                    anchorOffset: v,
                    focusKey: d,
                    focusOffset: m,
                    isBackward: y
                })
            }
        },
        "7mA2": function(e, t, n) {
            "use strict";
            var r = n("ObfX");
            e.exports = function(e) {
                return e.which === r.RETURN && (e.getModifierState("Shift") || e.getModifierState("Alt") || e.getModifierState("Control"))
            }
        },
        "8SYF": function(e, t, n) {
            "use strict";
            var r = n("1xkk");
            e.exports = function(e) {
                var t = e.getSelection(),
                    n = t.getEndKey(),
                    i = e.getCurrentContent().getBlockForKey(n).getLength();
                return r.set(e, {
                    selection: t.merge({
                        anchorKey: n,
                        anchorOffset: i,
                        focusKey: n,
                        focusOffset: i,
                        isBackward: !1
                    }),
                    forceSelection: !0
                })
            }
        },
        "8dwq": function(e, t, n) {
            "use strict";
            var r = n("ZxmY"),
                i = n("Svze");
            e.exports = function(e, t, n) {
                var o = e.getBlockMap(),
                    a = t.getStartKey(),
                    s = t.getStartOffset(),
                    c = t.getEndKey(),
                    u = t.getEndOffset(),
                    l = o.skipUntil((function(e, t) {
                        return t === a
                    })).takeUntil((function(e, t) {
                        return t === c
                    })).toOrderedMap().merge(i.OrderedMap([
                        [c, o.get(c)]
                    ])).map((function(e, t) {
                        var i = t === a ? s : 0,
                            o = t === c ? u : e.getLength();
                        return r(e, i, o, n)
                    }));
                return e.merge({
                    blockMap: o.merge(l),
                    selectionBefore: t,
                    selectionAfter: t
                })
            }
        },
        9e3: function(e, t, n) {
            "use strict";
            var r = n("7002"),
                i = n("1xkk");
            e.exports = function(e) {
                var t = r.splitBlock(e.getCurrentContent(), e.getSelection());
                return i.push(e, t, "split-block")
            }
        },
        "9Kr7": function(e, t, n) {
            "use strict";
            var r = n("7002"),
                i = n("1xkk"),
                o = n("udiT"),
                a = n("hF1F"),
                s = {
                    currentBlockContainsLink: function(e) {
                        var t = e.getSelection(),
                            n = e.getCurrentContent(),
                            r = n.getEntityMap();
                        return n.getBlockForKey(t.getAnchorKey()).getCharacterList().slice(t.getStartOffset(), t.getEndOffset()).some((function(e) {
                            var t = e.getEntity();
                            return !!t && "LINK" === r.__get(t).getType()
                        }))
                    },
                    getCurrentBlockType: function(e) {
                        var t = e.getSelection();
                        return e.getCurrentContent().getBlockForKey(t.getStartKey()).getType()
                    },
                    getDataObjectForLinkURL: function(e) {
                        return {
                            url: e.toString()
                        }
                    },
                    handleKeyCommand: function(e, t, n) {
                        switch (t) {
                            case "bold":
                                return s.toggleInlineStyle(e, "BOLD");
                            case "italic":
                                return s.toggleInlineStyle(e, "ITALIC");
                            case "underline":
                                return s.toggleInlineStyle(e, "UNDERLINE");
                            case "code":
                                return s.toggleCode(e);
                            case "backspace":
                            case "backspace-word":
                            case "backspace-to-start-of-line":
                                return s.onBackspace(e);
                            case "delete":
                            case "delete-word":
                            case "delete-to-end-of-block":
                                return s.onDelete(e);
                            default:
                                return null
                        }
                    },
                    insertSoftNewline: function(e) {
                        var t = r.insertText(e.getCurrentContent(), e.getSelection(), "\n", e.getCurrentInlineStyle(), null),
                            n = i.push(e, t, "insert-characters");
                        return i.forceSelection(n, t.getSelectionAfter())
                    },
                    onBackspace: function(e) {
                        var t = e.getSelection();
                        if (!t.isCollapsed() || t.getAnchorOffset() || t.getFocusOffset()) return null;
                        var n = e.getCurrentContent(),
                            r = t.getStartKey(),
                            o = n.getBlockBefore(r);
                        if (o && "atomic" === o.getType()) {
                            var a = n.getBlockMap().delete(o.getKey()),
                                c = n.merge({
                                    blockMap: a,
                                    selectionAfter: t
                                });
                            if (c !== n) return i.push(e, c, "remove-range")
                        }
                        var u = s.tryToRemoveBlockStyle(e);
                        return u ? i.push(e, u, "change-block-type") : null
                    },
                    onDelete: function(e) {
                        var t = e.getSelection();
                        if (!t.isCollapsed()) return null;
                        var n = e.getCurrentContent(),
                            o = t.getStartKey(),
                            a = n.getBlockForKey(o).getLength();
                        if (t.getStartOffset() < a) return null;
                        var s = n.getBlockAfter(o);
                        if (!s || "atomic" !== s.getType()) return null;
                        var c = t.merge({
                                focusKey: s.getKey(),
                                focusOffset: s.getLength()
                            }),
                            u = r.removeRange(n, c, "forward");
                        return u !== n ? i.push(e, u, "remove-range") : null
                    },
                    onTab: function(e, t, n) {
                        var r = t.getSelection(),
                            a = r.getAnchorKey();
                        if (a !== r.getFocusKey()) return t;
                        var s = t.getCurrentContent(),
                            c = s.getBlockForKey(a),
                            u = c.getType();
                        if ("unordered-list-item" !== u && "ordered-list-item" !== u) return t;
                        e.preventDefault();
                        var l = c.getDepth();
                        if (!e.shiftKey && l === n) return t;
                        var f = o(s, r, e.shiftKey ? -1 : 1, n);
                        return i.push(t, f, "adjust-depth")
                    },
                    toggleBlockType: function(e, t) {
                        var n = e.getSelection(),
                            o = n.getStartKey(),
                            s = n.getEndKey(),
                            c = e.getCurrentContent(),
                            u = n;
                        if (o !== s && 0 === n.getEndOffset()) {
                            var l = a(c.getBlockBefore(s));
                            s = l.getKey(), u = u.merge({
                                anchorKey: o,
                                anchorOffset: n.getStartOffset(),
                                focusKey: s,
                                focusOffset: l.getLength(),
                                isBackward: !1
                            })
                        }
                        if (c.getBlockMap().skipWhile((function(e, t) {
                                return t !== o
                            })).reverse().skipWhile((function(e, t) {
                                return t !== s
                            })).some((function(e) {
                                return "atomic" === e.getType()
                            }))) return e;
                        var f = c.getBlockForKey(o).getType() === t ? "unstyled" : t;
                        return i.push(e, r.setBlockType(c, u, f), "change-block-type")
                    },
                    toggleCode: function(e) {
                        var t = e.getSelection(),
                            n = t.getAnchorKey(),
                            r = t.getFocusKey();
                        return t.isCollapsed() || n !== r ? s.toggleBlockType(e, "code-block") : s.toggleInlineStyle(e, "CODE")
                    },
                    toggleInlineStyle: function(e, t) {
                        var n = e.getSelection(),
                            o = e.getCurrentInlineStyle();
                        if (n.isCollapsed()) return i.setInlineStyleOverride(e, o.has(t) ? o.remove(t) : o.add(t));
                        var a, s = e.getCurrentContent();
                        return a = o.has(t) ? r.removeInlineStyle(s, n, t) : r.applyInlineStyle(s, n, t), i.push(e, a, "change-inline-style")
                    },
                    toggleLink: function(e, t, n) {
                        var o = r.applyEntity(e.getCurrentContent(), t, n);
                        return i.push(e, o, "apply-entity")
                    },
                    tryToRemoveBlockStyle: function(e) {
                        var t = e.getSelection(),
                            n = t.getAnchorOffset();
                        if (t.isCollapsed() && 0 === n) {
                            var i = t.getAnchorKey(),
                                o = e.getCurrentContent(),
                                a = o.getBlockForKey(i).getType(),
                                s = o.getBlockBefore(i);
                            if ("code-block" === a && s && "code-block" === s.getType() && 0 !== s.getLength()) return null;
                            if ("unstyled" !== a) return r.setBlockType(o, t, "unstyled")
                        }
                        return null
                    }
                };
            e.exports = s
        },
        "9XMQ": function(e, t, n) {
            "use strict";
            var r = n("1xkk"),
                i = n("W6iK"),
                o = n("MzOC"),
                a = n("4aXP");
            e.exports = function(e) {
                var t = a(e, (function(e) {
                    var t = e.getSelection(),
                        n = e.getCurrentContent(),
                        r = t.getAnchorKey(),
                        a = t.getAnchorOffset(),
                        s = n.getBlockForKey(r).getText()[a];
                    return o(e, s ? i.getUTF16Length(s, 0) : 1)
                }), "forward");
                if (t === e.getCurrentContent()) return e;
                var n = e.getSelection();
                return r.push(e, t.set("selectionBefore", n), n.isCollapsed() ? "delete-character" : "remove-range")
            }
        },
        ADYu: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                var t = e.getSelection(),
                    n = t.getAnchorKey(),
                    r = e.getBlockTree(n),
                    i = t.getStartOffset(),
                    o = !1;
                return r.some((function(e) {
                    return i === e.get("start") ? (o = !0, !0) : i < e.get("end") && e.get("leaves").some((function(e) {
                        var t = e.get("start");
                        return i === t && (o = !0, !0)
                    }))
                })), o
            }
        },
        "AL/+": function(e, t, n) {
            "use strict";
            e.exports = function(e, t, n, r) {
                if (e.size) {
                    var i = 0;
                    e.reduce((function(e, o, a) {
                        return t(e, o) || (n(e) && r(i, a), i = a), o
                    })), n(e.last()) && r(i, e.count())
                }
            }
        },
        ApIa: function(e, t, n) {
            "use strict";

            function r(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    })))), r.forEach((function(t) {
                        i(e, t, n[t])
                    }))
                }
                return e
            }

            function i(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var o = n("ooRk"),
                a = n("b+nQ"),
                s = n("IbSy"),
                c = n("YM28"),
                u = n("7002"),
                l = n("1xkk"),
                f = n("YSZ8"),
                d = n("ZUd0"),
                p = n("Svze"),
                h = n("uJSo"),
                g = d("draft_tree_data_support"),
                v = g ? c : s,
                m = p.List,
                y = p.Repeat,
                _ = {
                    insertAtomicBlock: function(e, t, n) {
                        var i = e.getCurrentContent(),
                            s = e.getSelection(),
                            c = u.removeRange(i, s, "backward"),
                            d = c.getSelectionAfter(),
                            p = u.splitBlock(c, d),
                            h = p.getSelectionAfter(),
                            _ = u.setBlockType(p, h, "atomic"),
                            b = a.create({
                                entity: t
                            }),
                            S = {
                                key: f(),
                                type: "atomic",
                                text: n,
                                characterList: m(y(b, n.length))
                            },
                            w = {
                                key: f(),
                                type: "unstyled"
                            };
                        g && (S = r({}, S, {
                            nextSibling: w.key
                        }), w = r({}, w, {
                            prevSibling: S.key
                        }));
                        var C = [new v(S), new v(w)],
                            x = o.createFromArray(C),
                            E = u.replaceWithFragment(_, h, x),
                            k = E.merge({
                                selectionBefore: s,
                                selectionAfter: E.getSelectionAfter().set("hasFocus", !0)
                            });
                        return l.push(e, k, "insert-fragment")
                    },
                    moveAtomicBlock: function(e, t, n, r) {
                        var i, o = e.getCurrentContent(),
                            a = e.getSelection();
                        if ("before" === r || "after" === r) {
                            var s = o.getBlockForKey("before" === r ? n.getStartKey() : n.getEndKey());
                            i = h(o, t, s, r)
                        } else {
                            var c = u.removeRange(o, n, "backward"),
                                f = c.getSelectionAfter(),
                                d = c.getBlockForKey(f.getFocusKey());
                            if (0 === f.getStartOffset()) i = h(c, t, d, "before");
                            else if (f.getEndOffset() === d.getLength()) i = h(c, t, d, "after");
                            else {
                                var p = u.splitBlock(c, f),
                                    g = p.getSelectionAfter(),
                                    v = p.getBlockForKey(g.getFocusKey());
                                i = h(p, t, v, "before")
                            }
                        }
                        var m = i.merge({
                            selectionBefore: a,
                            selectionAfter: i.getSelectionAfter().set("hasFocus", !0)
                        });
                        return l.push(e, m, "move-block")
                    }
                };
            e.exports = _
        },
        B3y8: function(e, t, n) {
            "use strict";
            n("/2Cm");
            var r = {
                isValidBlock: function(e, t) {
                    var n = e.getKey(),
                        r = e.getParentKey();
                    if (null != r && !t.get(r).getChildKeys().includes(n)) return !1;
                    if (!e.getChildKeys().map((function(e) {
                            return t.get(e)
                        })).every((function(e) {
                            return e.getParentKey() === n
                        }))) return !1;
                    var i = e.getPrevSiblingKey();
                    if (null != i && t.get(i).getNextSiblingKey() !== n) return !1;
                    var o = e.getNextSiblingKey();
                    if (null != o && t.get(o).getPrevSiblingKey() !== n) return !1;
                    return (null === o || null === i || i !== o) && !("" != e.text && e.getChildKeys().size > 0)
                },
                isConnectedTree: function(e) {
                    var t = e.toArray().filter((function(e) {
                        return null == e.getParentKey() && null == e.getPrevSiblingKey()
                    }));
                    if (1 !== t.length) return !1;
                    for (var n = 0, r = t.shift().getKey(), i = []; null != r;) {
                        var o = e.get(r),
                            a = o.getChildKeys(),
                            s = o.getNextSiblingKey();
                        if (a.size > 0) {
                            null != s && i.unshift(s);
                            var c = a.map((function(t) {
                                return e.get(t)
                            })).find((function(e) {
                                return null == e.getPrevSiblingKey()
                            }));
                            if (null == c) return !1;
                            r = c.getKey()
                        } else r = null != o.getNextSiblingKey() ? o.getNextSiblingKey() : i.shift();
                        n++
                    }
                    return n === e.size
                },
                isValidTree: function(e) {
                    var t = this;
                    return !!e.toArray().every((function(n) {
                        return t.isValidBlock(n, e)
                    })) && this.isConnectedTree(e)
                }
            };
            e.exports = r
        },
        BTrg: function(e, t, n) {
            "use strict";

            function r() {
                var e;
                return document.documentElement && (e = document.documentElement.clientWidth), !e && document.body && (e = document.body.clientWidth), e || 0
            }

            function i() {
                var e;
                return document.documentElement && (e = document.documentElement.clientHeight), !e && document.body && (e = document.body.clientHeight), e || 0
            }

            function o() {
                return {
                    width: window.innerWidth || r(),
                    height: window.innerHeight || i()
                }
            }
            o.withoutScrollbars = function() {
                return {
                    width: r(),
                    height: i()
                }
            }, e.exports = o
        },
        BsqC: function(e, t, n) {
            "use strict";
            var r = n("1xkk");
            e.exports = function(e, t, n) {
                var i = r.undo(t);
                if ("spellcheck-change" !== t.getLastChangeType()) e.preventDefault(), t.getNativelyRenderedContent() ? (n(r.set(t, {
                    nativelyRenderedContent: null
                })), setTimeout((function() {
                    n(i)
                }), 0)) : n(i);
                else {
                    var o = i.getCurrentContent();
                    n(r.set(i, {
                        nativelyRenderedContent: o
                    }))
                }
            }
        },
        Cfxn: function(e, t, n) {
            "use strict";
            e.exports = {
                logBlockedSelectionEvent: function() {
                    return null
                },
                logSelectionStateFailure: function() {
                    return null
                }
            }
        },
        Cl3z: function(e, t, n) {
            "use strict";
            var r = n("W6iK"),
                i = n("KXNC"),
                o = n("tI3i");

            function a(e, t) {
                for (var n = 1 / 0, r = 1 / 0, i = -1 / 0, o = -1 / 0, a = 0; a < e.length; a++) {
                    var s = e[a];
                    0 !== s.width && 1 !== s.width && (n = Math.min(n, s.top), r = Math.min(r, s.bottom), i = Math.max(i, s.top), o = Math.max(o, s.bottom))
                }
                return i <= r && i - n < t && o - r < t
            }

            function s(e) {
                switch (e.nodeType) {
                    case Node.DOCUMENT_TYPE_NODE:
                        return 0;
                    case Node.TEXT_NODE:
                    case Node.PROCESSING_INSTRUCTION_NODE:
                    case Node.COMMENT_NODE:
                        return e.length;
                    default:
                        return e.childNodes.length
                }
            }
            e.exports = function(e) {
                e.collapsed || o(!1);
                var t = (e = e.cloneRange()).startContainer;
                1 !== t.nodeType && (t = t.parentNode);
                var n = function(e) {
                        var t = getComputedStyle(e),
                            n = document.createElement("div");
                        n.style.fontFamily = t.fontFamily, n.style.fontSize = t.fontSize, n.style.fontStyle = t.fontStyle, n.style.fontWeight = t.fontWeight, n.style.lineHeight = t.lineHeight, n.style.position = "absolute", n.textContent = "M";
                        var r = document.body;
                        r || o(!1), r.appendChild(n);
                        var i = n.getBoundingClientRect();
                        return r.removeChild(n), i.height
                    }(t),
                    c = e.endContainer,
                    u = e.endOffset;
                for (e.setStart(e.startContainer, 0); a(i(e), n) && (c = e.startContainer, u = e.startOffset, c.parentNode || o(!1), e.setStartBefore(c), 1 !== c.nodeType || "inline" === getComputedStyle(c).display););
                for (var l = c, f = u - 1;;) {
                    for (var d = l.nodeValue, p = f; p >= 0; p--)
                        if (!(null != d && p > 0 && r.isSurrogatePair(d, p - 1))) {
                            if (e.setStart(l, p), !a(i(e), n)) break;
                            c = l, u = p
                        }
                    if (-1 === p || 0 === l.childNodes.length) break;
                    f = s(l = l.childNodes[p])
                }
                return e.setStart(c, u), e
            }
        },
        CqlG: function(e, t, n) {
            "use strict";
            var r = n("tI3i");
            e.exports = function(e) {
                return function(e) {
                    return !!e && ("object" == typeof e || "function" == typeof e) && "length" in e && !("setInterval" in e) && "number" != typeof e.nodeType && (Array.isArray(e) || "callee" in e || "item" in e)
                }(e) ? Array.isArray(e) ? e.slice() : function(e) {
                    var t = e.length;
                    if ((Array.isArray(e) || "object" != typeof e && "function" != typeof e) && r(!1), "number" != typeof t && r(!1), 0 === t || t - 1 in e || r(!1), "function" == typeof e.callee && r(!1), e.hasOwnProperty) try {
                        return Array.prototype.slice.call(e)
                    } catch (o) {}
                    for (var n = Array(t), i = 0; i < t; i++) n[i] = e[i];
                    return n
                }(e) : [e]
            }
        },
        CtAg: function(e, t, n) {
            "use strict";
            var r = n("5/F0");
            e.exports = function(e) {
                var t = r(e);
                return {
                    x: t.left,
                    y: t.top,
                    width: t.right - t.left,
                    height: t.bottom - t.top
                }
            }
        },
        DZH9: function(e, t, n) {
            "use strict";
            var r = n("W6iK"),
                i = n("Svze").OrderedSet,
                o = r.substr,
                a = i();
            e.exports = function(e, t) {
                var n = Array(e.length).fill(a);
                return t && t.forEach((function(t) {
                    for (var r = o(e, 0, t.offset).length, i = r + o(e, t.offset, t.length).length; r < i;) n[r] = n[r].add(t.style), r++
                })), n
            }
        },
        DtGU: function(e, t, n) {
            "use strict";
            e.exports = function e(t) {
                if (t instanceof Element) {
                    var n = t.getAttribute("data-offset-key");
                    if (n) return n;
                    for (var r = 0; r < t.childNodes.length; r++) {
                        var i = e(t.childNodes[r]);
                        if (i) return i
                    }
                }
                return null
            }
        },
        DuSR: function(e, t, n) {
            "use strict";
            var r = n("Cfxn"),
                i = n("1xkk"),
                o = n("KqX8"),
                a = n("WbhC");
            e.exports = function(e) {
                if (e._blockSelectEvents || e._latestEditorState !== e.props.editorState) {
                    if (e._blockSelectEvents) {
                        var t = e.props.editorState.getSelection();
                        r.logBlockedSelectionEvent({
                            anonymizedDom: "N/A",
                            extraParams: JSON.stringify({
                                stacktrace: (new Error).stack
                            }),
                            selectionState: JSON.stringify(t.toJS())
                        })
                    }
                } else {
                    var n = e.props.editorState,
                        s = a(n, o(e)),
                        c = s.selectionState;
                    c !== n.getSelection() && (n = s.needsRecovery ? i.forceSelection(n, c) : i.acceptSelection(n, c), e.update(n))
                }
            }
        },
        EYg6: function(e, t, n) {
            "use strict";

            function r(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var i = n("IbSy"),
                o = n("YM28"),
                a = n("tO3r"),
                s = n("YSZ8"),
                c = n("GSkh"),
                u = n("ZUd0"),
                l = n("Svze"),
                f = n("fNVm"),
                d = l.List,
                p = l.Repeat,
                h = u("draft_tree_data_support"),
                g = h ? o : i,
                v = {
                    processHTML: function(e, t) {
                        return a(e, c, t)
                    },
                    processText: function(e, t, n) {
                        return e.reduce((function(e, i, o) {
                            i = f(i);
                            var a = s(),
                                c = {
                                    key: a,
                                    type: n,
                                    text: i,
                                    characterList: d(p(t, i.length))
                                };
                            if (h && 0 !== o) {
                                var u = o - 1;
                                c = function(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            i = Object.keys(n);
                                        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                                        })))), i.forEach((function(t) {
                                            r(e, t, n[t])
                                        }))
                                    }
                                    return e
                                }({}, c, {
                                    prevSibling: (e[u] = e[u].merge({
                                        nextSibling: a
                                    })).getKey()
                                })
                            }
                            return e.push(new g(c)), e
                        }), [])
                    }
                };
            e.exports = v
        },
        Ea6c: function(e, t, n) {
            "use strict";
            e.exports = {
                initODS: function() {},
                handleExtensionCausedError: function() {}
            }
        },
        Fd87: function(e, t, n) {
            "use strict";
            var r = n("n09L"),
                i = n("tI3i"),
                o = "֐־׀׃׆׈-׏א-ת׫-ׯװ-ײ׳-״׵-׿߀-߉ߊ-ߪߴ-ߵߺ߻-߿ࠀ-ࠕࠚࠤࠨ࠮-࠯࠰-࠾࠿ࡀ-ࡘ࡜-࡝࡞࡟-࢟‏יִײַ-ﬨשׁ-זּ﬷טּ-לּ﬽מּ﬿נּ-סּ﭂ףּ-פּ﭅צּ-ﭏ",
                a = "؈؋؍؛؜؝؞-؟ؠ-ؿـف-ي٭ٮ-ٯٱ-ۓ۔ەۥ-ۦۮ-ۯۺ-ۼ۽-۾ۿ܀-܍܎܏ܐܒ-ܯ݋-݌ݍ-ޥޱ޲-޿ࢠ-ࢲࢳ-ࣣﭐ-ﮱ﮲-﯁﯂-﯒ﯓ-ﴽ﵀-﵏ﵐ-ﶏ﶐-﶑ﶒ-ﷇ﷈-﷏ﷰ-ﷻ﷼﷾-﷿ﹰ-ﹴ﹵ﹶ-ﻼ﻽-﻾",
                s = new RegExp("[" + "A-Za-zªµºÀ-ÖØ-öø-ƺƻƼ-ƿǀ-ǃǄ-ʓʔʕ-ʯʰ-ʸʻ-ˁː-ˑˠ-ˤˮͰ-ͳͶ-ͷͺͻ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁ҂Ҋ-ԯԱ-Ֆՙ՚-՟ա-և։ःऄ-हऻऽा-ीॉ-ौॎ-ॏॐक़-ॡ।-॥०-९॰ॱॲ-ঀং-ঃঅ-ঌএ-ঐও-নপ-রলশ-হঽা-ীে-ৈো-ৌৎৗড়-ঢ়য়-ৡ০-৯ৰ-ৱ৴-৹৺ਃਅ-ਊਏ-ਐਓ-ਨਪ-ਰਲ-ਲ਼ਵ-ਸ਼ਸ-ਹਾ-ੀਖ਼-ੜਫ਼੦-੯ੲ-ੴઃઅ-ઍએ-ઑઓ-નપ-રલ-ળવ-હઽા-ીૉો-ૌૐૠ-ૡ૦-૯૰ଂ-ଃଅ-ଌଏ-ଐଓ-ନପ-ରଲ-ଳଵ-ହଽାୀେ-ୈୋ-ୌୗଡ଼-ଢ଼ୟ-ୡ୦-୯୰ୱ୲-୷ஃஅ-ஊஎ-ஐஒ-கங-சஜஞ-டண-தந-பம-ஹா-ிு-ூெ-ைொ-ௌௐௗ௦-௯௰-௲ఁ-ఃఅ-ఌఎ-ఐఒ-నప-హఽు-ౄౘ-ౙౠ-ౡ౦-౯౿ಂ-ಃಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽಾಿೀ-ೄೆೇ-ೈೊ-ೋೕ-ೖೞೠ-ೡ೦-೯ೱ-ೲം-ഃഅ-ഌഎ-ഐഒ-ഺഽാ-ീെ-ൈൊ-ൌൎൗൠ-ൡ൦-൯൰-൵൹ൺ-ൿං-ඃඅ-ඖක-නඳ-රලව-ෆා-ෑෘ-ෟ෦-෯ෲ-ෳ෴ก-ะา-ำเ-ๅๆ๏๐-๙๚-๛ກ-ຂຄງ-ຈຊຍດ-ທນ-ຟມ-ຣລວສ-ຫອ-ະາ-ຳຽເ-ໄໆ໐-໙ໜ-ໟༀ༁-༃༄-༒༓༔༕-༗༚-༟༠-༩༪-༳༴༶༸༾-༿ཀ-ཇཉ-ཬཿ྅ྈ-ྌ྾-࿅࿇-࿌࿎-࿏࿐-࿔࿕-࿘࿙-࿚က-ဪါ-ာေးျ-ြဿ၀-၉၊-၏ၐ-ၕၖ-ၗၚ-ၝၡၢ-ၤၥ-ၦၧ-ၭၮ-ၰၵ-ႁႃ-ႄႇ-ႌႎႏ႐-႙ႚ-ႜ႞-႟Ⴀ-ჅჇჍა-ჺ჻ჼჽ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ፠-፨፩-፼ᎀ-ᎏᎠ-Ᏼᐁ-ᙬ᙭-᙮ᙯ-ᙿᚁ-ᚚᚠ-ᛪ᛫-᛭ᛮ-ᛰᛱ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱ᜵-᜶ᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳាើ-ៅះ-ៈ។-៖ៗ៘-៚ៜ០-៩᠐-᠙ᠠ-ᡂᡃᡄ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᤣ-ᤦᤩ-ᤫᤰ-ᤱᤳ-ᤸ᥆-᥏ᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧀᧁ-ᧇᧈ-ᧉ᧐-᧙᧚ᨀ-ᨖᨙ-ᨚ᨞-᨟ᨠ-ᩔᩕᩗᩡᩣ-ᩤᩭ-ᩲ᪀-᪉᪐-᪙᪠-᪦ᪧ᪨-᪭ᬄᬅ-ᬳᬵᬻᬽ-ᭁᭃ-᭄ᭅ-ᭋ᭐-᭙᭚-᭠᭡-᭪᭴-᭼ᮂᮃ-ᮠᮡᮦ-ᮧ᮪ᮮ-ᮯ᮰-᮹ᮺ-ᯥᯧᯪ-ᯬᯮ᯲-᯳᯼-᯿ᰀ-ᰣᰤ-ᰫᰴ-ᰵ᰻-᰿᱀-᱉ᱍ-ᱏ᱐-᱙ᱚ-ᱷᱸ-ᱽ᱾-᱿᳀-᳇᳓᳡ᳩ-ᳬᳮ-ᳱᳲ-ᳳᳵ-ᳶᴀ-ᴫᴬ-ᵪᵫ-ᵷᵸᵹ-ᶚᶛ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼ‎ⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℴℵ-ℸℹℼ-ℿⅅ-ⅉⅎ⅏Ⅰ-ↂↃ-ↄↅ-ↈ⌶-⍺⎕⒜-ⓩ⚬⠀-⣿Ⰰ-Ⱞⰰ-ⱞⱠ-ⱻⱼ-ⱽⱾ-ⳤⳫ-ⳮⳲ-ⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯ⵰ⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々〆〇〡-〩〮-〯〱-〵〸-〺〻〼ぁ-ゖゝ-ゞゟァ-ヺー-ヾヿㄅ-ㄭㄱ-ㆎ㆐-㆑㆒-㆕㆖-㆟ㆠ-ㆺㇰ-ㇿ㈀-㈜㈠-㈩㈪-㉇㉈-㉏㉠-㉻㉿㊀-㊉㊊-㊰㋀-㋋㋐-㋾㌀-㍶㍻-㏝㏠-㏾㐀-䶵一-鿌ꀀ-ꀔꀕꀖ-ꒌꓐ-ꓷꓸ-ꓽ꓾-꓿ꔀ-ꘋꘌꘐ-ꘟ꘠-꘩ꘪ-ꘫꙀ-ꙭꙮꚀ-ꚛꚜ-ꚝꚠ-ꛥꛦ-ꛯ꛲-꛷Ꜣ-ꝯꝰꝱ-ꞇ꞉-꞊Ꞌ-ꞎꞐ-ꞭꞰ-Ʇꟷꟸ-ꟹꟺꟻ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꠣ-ꠤꠧ꠰-꠵꠶-꠷ꡀ-ꡳꢀ-ꢁꢂ-ꢳꢴ-ꣃ꣎-꣏꣐-꣙ꣲ-ꣷ꣸-꣺ꣻ꤀-꤉ꤊ-ꤥ꤮-꤯ꤰ-ꥆꥒ-꥓꥟ꥠ-ꥼꦃꦄ-ꦲꦴ-ꦵꦺ-ꦻꦽ-꧀꧁-꧍ꧏ꧐-꧙꧞-꧟ꧠ-ꧤꧦꧧ-ꧯ꧰-꧹ꧺ-ꧾꨀ-ꨨꨯ-ꨰꨳ-ꨴꩀ-ꩂꩄ-ꩋꩍ꩐-꩙꩜-꩟ꩠ-ꩯꩰꩱ-ꩶ꩷-꩹ꩺꩻꩽꩾ-ꪯꪱꪵ-ꪶꪹ-ꪽꫀꫂꫛ-ꫜꫝ꫞-꫟ꫠ-ꫪꫫꫮ-ꫯ꫰-꫱ꫲꫳ-ꫴꫵꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚ꭛ꭜ-ꭟꭤ-ꭥꯀ-ꯢꯣ-ꯤꯦ-ꯧꯩ-ꯪ꯫꯬꯰-꯹가-힣ힰ-ퟆퟋ-ퟻ-豈-舘並-龎ﬀ-ﬆﬓ-ﬗＡ-Ｚａ-ｚｦ-ｯｰｱ-ﾝﾞ-ﾟﾠ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ" + o + a + "]"),
                c = new RegExp("[" + o + a + "]");

            function u(e) {
                var t = s.exec(e);
                return null == t ? null : t[0]
            }

            function l(e) {
                var t = u(e);
                return null == t ? r.NEUTRAL : c.exec(t) ? r.RTL : r.LTR
            }

            function f(e, t) {
                if (t = t || r.NEUTRAL, !e.length) return t;
                var n = l(e);
                return n === r.NEUTRAL ? t : n
            }

            function d(e, t) {
                return t || (t = r.getGlobalDir()), r.isStrong(t) || i(!1), f(e, t)
            }
            var p = {
                firstStrongChar: u,
                firstStrongCharDir: l,
                resolveBlockDir: f,
                getDirection: d,
                isDirectionLTR: function(e, t) {
                    return d(e, t) === r.LTR
                },
                isDirectionRTL: function(e, t) {
                    return d(e, t) === r.RTL
                }
            };
            e.exports = p
        },
        GSkh: function(e, t, n) {
            "use strict";
            var r = n("rim0"),
                i = n("tI3i"),
                o = r.isBrowser("IE <= 9");
            e.exports = function(e) {
                var t, n = null;
                return !o && document.implementation && document.implementation.createHTMLDocument && ((t = document.implementation.createHTMLDocument("foo")).documentElement || i(!1), t.documentElement.innerHTML = e, n = t.getElementsByTagName("body")[0]), n
            }
        },
        GyyK: function(e, t, n) {
            "use strict";

            function r(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var i = n("IbSy"),
                o = n("YM28"),
                a = n("IvBP"),
                s = n("mTn+"),
                c = n("zYrz"),
                u = n("tI3i"),
                l = function(e, t) {
                    return {
                        key: e.getKey(),
                        text: e.getText(),
                        type: e.getType(),
                        depth: e.getDepth(),
                        inlineStyleRanges: c(e),
                        entityRanges: s(e, t),
                        data: e.getData().toObject()
                    }
                },
                f = function(e, t, n, a) {
                    if (e instanceof i) n.push(l(e, t));
                    else {
                        e instanceof o || u(!1);
                        var s = e.getParentKey(),
                            c = a[e.getKey()] = function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        i = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                                    })))), i.forEach((function(t) {
                                        r(e, t, n[t])
                                    }))
                                }
                                return e
                            }({}, l(e, t), {
                                children: []
                            });
                        s ? a[s].children.push(c) : n.push(c)
                    }
                };
            e.exports = function(e) {
                var t = {
                    entityMap: {},
                    blocks: []
                };
                return t = function(e, t) {
                    var n = t.entityMap,
                        r = [],
                        i = {},
                        o = {},
                        s = 0;
                    return e.getBlockMap().forEach((function(e) {
                        e.findEntityRanges((function(e) {
                            return null !== e.getEntity()
                        }), (function(t) {
                            var r = e.getEntityAt(t),
                                i = a.stringify(r);
                            o[i] || (o[i] = r, n[i] = "".concat(s), s++)
                        })), f(e, n, r, i)
                    })), {
                        blocks: r,
                        entityMap: n
                    }
                }(e, t), t = function(e, t) {
                    var n = t.blocks,
                        r = t.entityMap,
                        i = {};
                    return Object.keys(r).forEach((function(t, n) {
                        var r = e.getEntity(a.unstringify(t));
                        i[n] = {
                            type: r.getType(),
                            mutability: r.getMutability(),
                            data: r.getData()
                        }
                    })), {
                        blocks: n,
                        entityMap: i
                    }
                }(e, t)
            }
        },
        HKFH: function(e, t, n) {
            "use strict";
            var r = n("b+nQ"),
                i = n("Svze").Map,
                o = {
                    add: function(e, t, n) {
                        return a(e, t, n, !0)
                    },
                    remove: function(e, t, n) {
                        return a(e, t, n, !1)
                    }
                };

            function a(e, t, n, o) {
                var a = e.getBlockMap(),
                    s = t.getStartKey(),
                    c = t.getStartOffset(),
                    u = t.getEndKey(),
                    l = t.getEndOffset(),
                    f = a.skipUntil((function(e, t) {
                        return t === s
                    })).takeUntil((function(e, t) {
                        return t === u
                    })).concat(i([
                        [u, a.get(u)]
                    ])).map((function(e, t) {
                        var i, a;
                        s === u ? (i = c, a = l) : (i = t === s ? c : 0, a = t === u ? l : e.getLength());
                        for (var f, d = e.getCharacterList(); i < a;) f = d.get(i), d = d.set(i, o ? r.applyStyle(f, n) : r.removeStyle(f, n)), i++;
                        return e.set("characterList", d)
                    }));
                return e.merge({
                    blockMap: a.merge(f),
                    selectionBefore: t,
                    selectionAfter: t
                })
            }
            e.exports = o
        },
        HdU4: function(e, t, n) {
            "use strict";
            var r = n("YM28");
            e.exports = function(e, t) {
                if (!(e instanceof r)) return null;
                var n = e.getNextSiblingKey();
                if (n) return n;
                var i = e.getParentKey();
                if (!i) return null;
                for (var o = t.get(i); o && !o.getNextSiblingKey();) {
                    var a = o.getParentKey();
                    o = a ? t.get(a) : null
                }
                return o ? o.getNextSiblingKey() : null
            }
        },
        IDEf: function(e, t, n) {
            "use strict";
            var r = function(e) {
                var t, n;

                function r() {
                    return e.apply(this, arguments) || this
                }
                n = e, (t = r).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
                var i = r.prototype;
                return i.serialize = function() {
                    return "Anchor: " + this.getAnchorKey() + ":" + this.getAnchorOffset() + ", Focus: " + this.getFocusKey() + ":" + this.getFocusOffset() + ", Is Backward: " + String(this.getIsBackward()) + ", Has Focus: " + String(this.getHasFocus())
                }, i.getAnchorKey = function() {
                    return this.get("anchorKey")
                }, i.getAnchorOffset = function() {
                    return this.get("anchorOffset")
                }, i.getFocusKey = function() {
                    return this.get("focusKey")
                }, i.getFocusOffset = function() {
                    return this.get("focusOffset")
                }, i.getIsBackward = function() {
                    return this.get("isBackward")
                }, i.getHasFocus = function() {
                    return this.get("hasFocus")
                }, i.hasEdgeWithin = function(e, t, n) {
                    var r = this.getAnchorKey(),
                        i = this.getFocusKey();
                    if (r === i && r === e) {
                        var o = this.getStartOffset(),
                            a = this.getEndOffset();
                        return t <= o && o <= n || t <= a && a <= n
                    }
                    if (e !== r && e !== i) return !1;
                    var s = e === r ? this.getAnchorOffset() : this.getFocusOffset();
                    return t <= s && n >= s
                }, i.isCollapsed = function() {
                    return this.getAnchorKey() === this.getFocusKey() && this.getAnchorOffset() === this.getFocusOffset()
                }, i.getStartKey = function() {
                    return this.getIsBackward() ? this.getFocusKey() : this.getAnchorKey()
                }, i.getStartOffset = function() {
                    return this.getIsBackward() ? this.getFocusOffset() : this.getAnchorOffset()
                }, i.getEndKey = function() {
                    return this.getIsBackward() ? this.getAnchorKey() : this.getFocusKey()
                }, i.getEndOffset = function() {
                    return this.getIsBackward() ? this.getAnchorOffset() : this.getFocusOffset()
                }, r.createEmpty = function(e) {
                    return new r({
                        anchorKey: e,
                        anchorOffset: 0,
                        focusKey: e,
                        focusOffset: 0,
                        isBackward: !1,
                        hasFocus: !1
                    })
                }, r
            }((0, n("Svze").Record)({
                anchorKey: "",
                anchorOffset: 0,
                focusKey: "",
                focusOffset: 0,
                isBackward: !1,
                hasFocus: !1
            }));
            e.exports = r
        },
        IbSy: function(e, t, n) {
            "use strict";
            var r = n("b+nQ"),
                i = n("AL/+"),
                o = n("Svze"),
                a = o.List,
                s = o.Map,
                c = o.OrderedSet,
                u = o.Record,
                l = o.Repeat,
                f = c(),
                d = u({
                    key: "",
                    type: "unstyled",
                    text: "",
                    characterList: a(),
                    depth: 0,
                    data: s()
                }),
                p = function(e) {
                    if (!e) return e;
                    var t = e.characterList,
                        n = e.text;
                    return n && !t && (e.characterList = a(l(r.EMPTY, n.length))), e
                },
                h = function(e) {
                    var t, n;

                    function r(t) {
                        return e.call(this, p(t)) || this
                    }
                    n = e, (t = r).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
                    var o = r.prototype;
                    return o.getKey = function() {
                        return this.get("key")
                    }, o.getType = function() {
                        return this.get("type")
                    }, o.getText = function() {
                        return this.get("text")
                    }, o.getCharacterList = function() {
                        return this.get("characterList")
                    }, o.getLength = function() {
                        return this.getText().length
                    }, o.getDepth = function() {
                        return this.get("depth")
                    }, o.getData = function() {
                        return this.get("data")
                    }, o.getInlineStyleAt = function(e) {
                        var t = this.getCharacterList().get(e);
                        return t ? t.getStyle() : f
                    }, o.getEntityAt = function(e) {
                        var t = this.getCharacterList().get(e);
                        return t ? t.getEntity() : null
                    }, o.findStyleRanges = function(e, t) {
                        i(this.getCharacterList(), g, e, t)
                    }, o.findEntityRanges = function(e, t) {
                        i(this.getCharacterList(), v, e, t)
                    }, r
                }(d);

            function g(e, t) {
                return e.getStyle() === t.getStyle()
            }

            function v(e, t) {
                return e.getEntity() === t.getEntity()
            }
            e.exports = h
        },
        IchF: function(e, t, n) {
            "use strict";
            var r = n("M7w5"),
                i = n("DtGU"),
                o = n("7XzN"),
                a = n("tI3i"),
                s = n("hF1F");

            function c(e, t, n) {
                var o = t,
                    c = r(o);
                if (null != c || e && (e === o || e.firstChild === o) || a(!1), e === o && ((o = o.firstChild) instanceof Element && "true" === o.getAttribute("data-contents") || a(!1), n > 0 && (n = o.childNodes.length)), 0 === n) {
                    var l = null;
                    if (null != c) l = c;
                    else {
                        var f = function(e) {
                            for (; e.firstChild && (e.firstChild instanceof Element && "true" === e.firstChild.getAttribute("data-blocks") || i(e.firstChild));) e = e.firstChild;
                            return e
                        }(o);
                        l = s(i(f))
                    }
                    return {
                        key: l,
                        offset: 0
                    }
                }
                var d = o.childNodes[n - 1],
                    p = null,
                    h = null;
                if (i(d)) {
                    var g = function(e) {
                        for (; e.lastChild && (e.lastChild instanceof Element && "true" === e.lastChild.getAttribute("data-blocks") || i(e.lastChild));) e = e.lastChild;
                        return e
                    }(d);
                    p = s(i(g)), h = u(g)
                } else p = s(c), h = u(d);
                return {
                    key: p,
                    offset: h
                }
            }

            function u(e) {
                var t = e.textContent;
                return "\n" === t ? 0 : t.length
            }
            e.exports = function(e, t, n, i, a, u) {
                var l = n.nodeType === Node.TEXT_NODE,
                    f = a.nodeType === Node.TEXT_NODE;
                if (l && f) return {
                    selectionState: o(e, s(r(n)), i, s(r(a)), u),
                    needsRecovery: !1
                };
                var d = null,
                    p = null,
                    h = !0;
                return l ? (d = {
                    key: s(r(n)),
                    offset: i
                }, p = c(t, a, u)) : f ? (p = {
                    key: s(r(a)),
                    offset: u
                }, d = c(t, n, i)) : (d = c(t, n, i), p = c(t, a, u), n === a && i === u && (h = !!n.firstChild && "BR" !== n.firstChild.nodeName)), {
                    selectionState: o(e, d.key, d.offset, p.key, p.offset),
                    needsRecovery: h
                }
            }
        },
        IvBP: function(e, t, n) {
            "use strict";
            var r = {
                stringify: function(e) {
                    return "_" + String(e)
                },
                unstringify: function(e) {
                    return e.slice(1)
                }
            };
            e.exports = r
        },
        JAVJ: function(e, t, n) {
            "use strict";

            function r(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    })))), r.forEach((function(t) {
                        i(e, t, n[t])
                    }))
                }
                return e
            }

            function i(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var o = n("MOn9"),
                a = n("b//S"),
                s = n("ERkP"),
                c = n("2Wwg"),
                u = n("Y5pQ"),
                l = n("hF1F"),
                f = function(e, t, n, r) {
                    return c({
                        "public/DraftStyleDefault/unorderedListItem": "unordered-list-item" === e,
                        "public/DraftStyleDefault/orderedListItem": "ordered-list-item" === e,
                        "public/DraftStyleDefault/reset": n,
                        "public/DraftStyleDefault/depth0": 0 === t,
                        "public/DraftStyleDefault/depth1": 1 === t,
                        "public/DraftStyleDefault/depth2": 2 === t,
                        "public/DraftStyleDefault/depth3": 3 === t,
                        "public/DraftStyleDefault/depth4": t >= 4,
                        "public/DraftStyleDefault/listLTR": "LTR" === r,
                        "public/DraftStyleDefault/listRTL": "RTL" === r
                    })
                },
                d = function(e) {
                    var t, n;

                    function i() {
                        return e.apply(this, arguments) || this
                    }
                    n = e, (t = i).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
                    var c = i.prototype;
                    return c.shouldComponentUpdate = function(e) {
                        var t = this.props.editorState,
                            n = e.editorState;
                        if (t.getDirectionMap() !== n.getDirectionMap()) return !0;
                        if (t.getSelection().getHasFocus() !== n.getSelection().getHasFocus()) return !0;
                        var r = n.getNativelyRenderedContent(),
                            i = t.isInCompositionMode(),
                            o = n.isInCompositionMode();
                        if (t === n || null !== r && n.getCurrentContent() === r || i && o) return !1;
                        var a = t.getCurrentContent(),
                            s = n.getCurrentContent(),
                            c = t.getDecorator(),
                            u = n.getDecorator();
                        return i !== o || a !== s || c !== u || n.mustForceSelection()
                    }, c.render = function() {
                        for (var e = this.props, t = e.blockRenderMap, n = e.blockRendererFn, i = e.blockStyleFn, c = e.customStyleMap, d = e.customStyleFn, p = e.editorState, h = e.editorKey, g = e.textDirectionality, v = p.getCurrentContent(), m = p.getSelection(), y = p.mustForceSelection(), _ = p.getDecorator(), b = l(p.getDirectionMap()), S = v.getBlocksAsArray(), w = [], C = null, x = null, E = 0; E < S.length; E++) {
                            var k = S[E],
                                T = k.getKey(),
                                O = k.getType(),
                                D = n(k),
                                I = void 0,
                                M = void 0,
                                A = void 0;
                            D && (I = D.component, M = D.props, A = D.editable);
                            var R = g || b.get(T),
                                K = a.encode(T, 0, 0),
                                B = {
                                    contentState: v,
                                    block: k,
                                    blockProps: M,
                                    blockStyleFn: i,
                                    customStyleMap: c,
                                    customStyleFn: d,
                                    decorator: _,
                                    direction: R,
                                    forceSelection: y,
                                    key: T,
                                    offsetKey: K,
                                    selection: m,
                                    tree: p.getBlockTree(T)
                                },
                                L = t.get(O) || t.get("unstyled"),
                                P = L.wrapper,
                                F = L.element || t.get("unstyled").element,
                                N = k.getDepth(),
                                z = "";
                            if (i && (z = i(k)), "li" === F) z = u(z, f(O, N, x !== P || null === C || N > C, R));
                            var j = I || o,
                                U = {
                                    className: z,
                                    "data-block": !0,
                                    "data-editor": h,
                                    "data-offset-key": K,
                                    key: T
                                };
                            void 0 !== A && (U = r({}, U, {
                                contentEditable: A,
                                suppressContentEditableWarning: !0
                            }));
                            var H = s.createElement(F, U, s.createElement(j, B));
                            w.push({
                                block: H,
                                wrapperTemplate: P,
                                key: T,
                                offsetKey: K
                            }), C = P ? k.getDepth() : null, x = P
                        }
                        for (var W = [], V = 0; V < w.length;) {
                            var q = w[V];
                            if (q.wrapperTemplate) {
                                var G = [];
                                do {
                                    G.push(w[V].block), V++
                                } while (V < w.length && w[V].wrapperTemplate === q.wrapperTemplate);
                                var X = s.cloneElement(q.wrapperTemplate, {
                                    key: q.key + "-wrap",
                                    "data-offset-key": q.offsetKey
                                }, G);
                                W.push(X)
                            } else W.push(q.block), V++
                        }
                        return s.createElement("div", {
                            "data-contents": "true"
                        }, W)
                    }, i
                }(s.Component);
            e.exports = d
        },
        JtWY: function(e, t, n) {
            "use strict";
            var r = "undefined" != typeof navigator && navigator.userAgent.indexOf("AppleWebKit") > -1;
            e.exports = function(e) {
                return (e = e || document).scrollingElement ? e.scrollingElement : r || "CSS1Compat" !== e.compatMode ? e.body : e.documentElement
            }
        },
        K7Xh: function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.default = void 0, n("PN9k");
            var r = a(n("7DT3")),
                i = a(n("ERkP")),
                o = a(n("OkZJ"));

            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var s = function(e) {
                return void 0 === e && (e = {}), (0, r.default)("svg", Object.assign({}, e, {
                    style: [o.default.root, e.style],
                    viewBox: "0 0 24 24"
                }), i.default.createElement("g", null, i.default.createElement("path", {
                    d: "M7.3 11.8H1.5c-.4 0-.8-.3-.8-.8s.3-.8.8-.8h5.9c.4 0 .8.3.8.8s-.4.8-.9.8zm-1.8 3.9h-4c-.4 0-.8-.3-.8-.8s.3-.8.8-.8h4c.4 0 .8.3.8.8s-.3.8-.8.8zM10 7.8H1.5c-.4 0-.8-.4-.8-.8s.3-.8.8-.8H10c.4 0 .8.3.8.8s-.4.8-.8.8zm13.8-5.5v-.1h-.1c-.1 0-9.2 1.2-14.4 11.7-3.8 7.6-3.6 9.9-3.3 9.9.3.1 3.4-6.5 6.7-9.2 5.2-1.1 6.6-3.6 6.6-3.6s-1.5.2-2.1.2c-.8 0-1.4-.2-1.7-.3 1.3-1.2 2.4-1.5 3.5-1.7.9-.2 1.8-.4 3-1.2 2.2-1.6 1.9-5.5 1.8-5.7z"
                })))
            };
            s.metadata = {
                height: 24,
                width: 24
            };
            var c = s;
            t.default = c
        },
        KDIr: function(e, t, n) {
            "use strict";
            var r = n("YM28"),
                i = n("YSZ8"),
                o = n("Svze"),
                a = n("tI3i"),
                s = n("WmAF"),
                c = o.List,
                u = o.Map,
                l = function(e, t, n) {
                    if (e) {
                        var r = t.get(e);
                        r && t.set(e, n(r))
                    }
                };
            e.exports = function(e, t) {
                t.isCollapsed() || a(!1);
                var n = t.getAnchorKey(),
                    o = e.getBlockMap(),
                    f = o.get(n),
                    d = f.getText();
                if (!d) {
                    var p = f.getType();
                    if ("unordered-list-item" === p || "ordered-list-item" === p) return s(e, t, (function(e) {
                        return e.merge({
                            type: "unstyled",
                            depth: 0
                        })
                    }))
                }
                var h = t.getAnchorOffset(),
                    g = f.getCharacterList(),
                    v = i(),
                    m = f instanceof r,
                    y = f.merge({
                        text: d.slice(0, h),
                        characterList: g.slice(0, h)
                    }),
                    _ = y.merge({
                        key: v,
                        text: d.slice(h),
                        characterList: g.slice(h),
                        data: u()
                    }),
                    b = o.toSeq().takeUntil((function(e) {
                        return e === f
                    })),
                    S = o.toSeq().skipUntil((function(e) {
                        return e === f
                    })).rest(),
                    w = b.concat([
                        [n, y],
                        [v, _]
                    ], S).toOrderedMap();
                return m && (f.getChildKeys().isEmpty() || a(!1), w = function(e, t, n) {
                    return e.withMutations((function(e) {
                        var r = t.getKey(),
                            i = n.getKey();
                        l(t.getParentKey(), e, (function(e) {
                            var t = e.getChildKeys(),
                                n = t.indexOf(r) + 1,
                                o = t.toArray();
                            return o.splice(n, 0, i), e.merge({
                                children: c(o)
                            })
                        })), l(t.getNextSiblingKey(), e, (function(e) {
                            return e.merge({
                                prevSibling: i
                            })
                        })), l(r, e, (function(e) {
                            return e.merge({
                                nextSibling: i
                            })
                        })), l(i, e, (function(e) {
                            return e.merge({
                                prevSibling: r
                            })
                        }))
                    }))
                }(w, y, _)), e.merge({
                    blockMap: w,
                    selectionBefore: t,
                    selectionAfter: t.merge({
                        anchorKey: v,
                        anchorOffset: 0,
                        focusKey: v,
                        focusOffset: 0,
                        isBackward: !1
                    })
                })
            }
        },
        KOTo: function(e, t, n) {
            "use strict";

            function r(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    })))), r.forEach((function(t) {
                        i(e, t, n[t])
                    }))
                }
                return e
            }

            function i(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var o = n("IbSy"),
                a = n("YM28"),
                s = n("VeLA"),
                c = n("krsZ"),
                u = n("bdcm"),
                l = (n("B3y8"), n("IDEf")),
                f = n("hgxY"),
                d = n("NgPv"),
                p = n("DZH9"),
                h = n("YSZ8"),
                g = n("ZUd0"),
                v = n("Svze"),
                m = n("tI3i"),
                y = g("draft_tree_data_support"),
                _ = v.List,
                b = v.Map,
                S = v.OrderedMap,
                w = function(e, t) {
                    var n = e.key,
                        r = e.type,
                        i = e.data;
                    return {
                        text: e.text,
                        depth: e.depth || 0,
                        type: r || "unstyled",
                        key: n || h(),
                        data: b(i),
                        characterList: C(e, t)
                    }
                },
                C = function(e, t) {
                    var n = e.text,
                        i = e.entityRanges,
                        o = e.inlineStyleRanges,
                        a = i || [];
                    return f(p(n, o || []), d(n, a.filter((function(e) {
                        return t.hasOwnProperty(e.key)
                    })).map((function(e) {
                        return r({}, e, {
                            key: t[e.key]
                        })
                    }))))
                },
                x = function(e) {
                    return r({}, e, {
                        key: e.key || h()
                    })
                },
                E = function(e, t, n) {
                    var i = t.map((function(e) {
                        return r({}, e, {
                            parentRef: n
                        })
                    }));
                    return e.concat(i.reverse())
                },
                k = function(e, t) {
                    var n = e.blocks.find((function(e) {
                            return Array.isArray(e.children) && e.children.length > 0
                        })),
                        i = y && !n ? u.fromRawStateToRawTreeState(e).blocks : e.blocks;
                    return y ? function(e, t) {
                        return e.map(x).reduce((function(n, i, o) {
                            Array.isArray(i.children) || m(!1);
                            var s = i.children.map(x),
                                c = new a(r({}, w(i, t), {
                                    prevSibling: 0 === o ? null : e[o - 1].key,
                                    nextSibling: o === e.length - 1 ? null : e[o + 1].key,
                                    children: _(s.map((function(e) {
                                        return e.key
                                    })))
                                }));
                            n = n.set(c.getKey(), c);
                            for (var u = E([], s, c); u.length > 0;) {
                                var l = u.pop(),
                                    f = l.parentRef,
                                    d = f.getChildKeys(),
                                    p = d.indexOf(l.key),
                                    h = Array.isArray(l.children);
                                if (!h) {
                                    h || m(!1);
                                    break
                                }
                                var g = l.children.map(x),
                                    v = new a(r({}, w(l, t), {
                                        parent: f.getKey(),
                                        children: _(g.map((function(e) {
                                            return e.key
                                        }))),
                                        prevSibling: 0 === p ? null : d.get(p - 1),
                                        nextSibling: p === d.size - 1 ? null : d.get(p + 1)
                                    }));
                                n = n.set(v.getKey(), v), u = E(u, g, v)
                            }
                            return n
                        }), S())
                    }(i, t) : function(e, t) {
                        return S(e.map((function(e) {
                            var n = new o(w(e, t));
                            return [n.getKey(), n]
                        })))
                    }(n ? u.fromRawTreeStateToRawState(e).blocks : i, t)
                };
            e.exports = function(e) {
                Array.isArray(e.blocks) || m(!1);
                var t = function(e) {
                        var t = e.entityMap,
                            n = {};
                        return Object.keys(t).forEach((function(e) {
                            var r = t[e],
                                i = r.type,
                                o = r.mutability,
                                a = r.data;
                            n[e] = c.__create(i, o, a || {})
                        })), n
                    }(e),
                    n = k(e, t),
                    r = n.isEmpty() ? new l : l.createEmpty(n.first().getKey());
                return new s({
                    blockMap: n,
                    entityMap: t,
                    selectionBefore: r,
                    selectionAfter: r
                })
            }
        },
        KXNC: function(e, t, n) {
            "use strict";
            var r = n("rim0"),
                i = n("tI3i");
            var o = r.isBrowser("Chrome") ? function(e) {
                for (var t = e.cloneRange(), n = [], r = e.endContainer; null != r; r = r.parentNode) {
                    var o = r === e.commonAncestorContainer;
                    o ? t.setStart(e.startContainer, e.startOffset) : t.setStart(t.endContainer, 0);
                    var a, s = Array.from(t.getClientRects());
                    if (n.push(s), o) return n.reverse(), (a = []).concat.apply(a, n);
                    t.setEndBefore(r)
                }
                i(!1)
            } : function(e) {
                return Array.from(e.getClientRects())
            };
            e.exports = o
        },
        KqX8: function(e, t, n) {
            "use strict";
            var r = n("7nmT"),
                i = n("tI3i");
            e.exports = function(e) {
                var t = r.findDOMNode(e.editorContainer);
                return t || i(!1), t.firstChild instanceof HTMLElement || i(!1), t.firstChild
            }
        },
        LYv7: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                var t = (e ? e.ownerDocument || e : document).defaultView || window;
                return !(!e || !("function" == typeof t.Node ? e instanceof t.Node : "object" == typeof e && "number" == typeof e.nodeType && "string" == typeof e.nodeName))
            }
        },
        LtnY: function(e, t, n) {
            "use strict";
            var r = n("ooRk"),
                i = n("b+nQ"),
                o = n("djSO"),
                a = n("7002"),
                s = n("EYg6"),
                c = n("1xkk"),
                u = n("9Kr7"),
                l = n("e59y"),
                f = n("VVXv"),
                d = n("X+Re"),
                p = n("cQcL");

            function h(e, t, n) {
                var r = a.replaceWithFragment(e.getCurrentContent(), e.getSelection(), t);
                return c.push(e, r.set("entityMap", n), "insert-fragment")
            }
            e.exports = function(e, t) {
                t.preventDefault();
                var n = new o(t.clipboardData);
                if (!n.isRichText()) {
                    var g = n.getFiles(),
                        v = n.getText();
                    if (g.length > 0) {
                        if (e.props.handlePastedFiles && d(e.props.handlePastedFiles(g))) return;
                        return void f(g, (function(t) {
                            if (t = t || v) {
                                var n = e._latestEditorState,
                                    o = p(t),
                                    f = i.create({
                                        style: n.getCurrentInlineStyle(),
                                        entity: l(n.getCurrentContent(), n.getSelection())
                                    }),
                                    d = u.getCurrentBlockType(n),
                                    h = s.processText(o, f, d),
                                    g = r.createFromArray(h),
                                    m = a.replaceWithFragment(n.getCurrentContent(), n.getSelection(), g);
                                e.update(c.push(n, m, "insert-fragment"))
                            }
                        }))
                    }
                }
                var m = [],
                    y = n.getText(),
                    _ = n.getHTML(),
                    b = e._latestEditorState;
                if (!e.props.handlePastedText || !d(e.props.handlePastedText(y, _, b))) {
                    if (y && (m = p(y)), !e.props.stripPastedStyles) {
                        var S = e.getClipboard();
                        if (n.isRichText() && S) {
                            if (-1 !== _.indexOf(e.getEditorKey()) || 1 === m.length && 1 === S.size && S.first().getText() === y) return void e.update(h(e._latestEditorState, S))
                        } else if (S && n.types.includes("com.apple.webarchive") && !n.types.includes("text/html") && function(e, t) {
                                return e.length === t.size && t.valueSeq().every((function(t, n) {
                                    return t.getText() === e[n]
                                }))
                            }(m, S)) return void e.update(h(e._latestEditorState, S));
                        if (_) {
                            var w = s.processHTML(_, e.props.blockRenderMap);
                            if (w) {
                                var C = w.contentBlocks,
                                    x = w.entityMap;
                                if (C) {
                                    var E = r.createFromArray(C);
                                    return void e.update(h(e._latestEditorState, E, x))
                                }
                            }
                        }
                        e.setClipboard(null)
                    }
                    if (m.length) {
                        var k = i.create({
                                style: b.getCurrentInlineStyle(),
                                entity: l(b.getCurrentContent(), b.getSelection())
                            }),
                            T = u.getCurrentBlockType(b),
                            O = s.processText(m, k, T),
                            D = r.createFromArray(O);
                        e.update(h(e._latestEditorState, D))
                    }
                }
            }
        },
        LxfW: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                return e.Window && e instanceof e.Window ? {
                    x: e.pageXOffset || e.document.documentElement.scrollLeft,
                    y: e.pageYOffset || e.document.documentElement.scrollTop
                } : {
                    x: e.scrollLeft,
                    y: e.scrollTop
                }
            }
        },
        M5JI: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("1RVd"),
                i = n("SADN");
            t.default = Object(i.a)(r.default)
        },
        M6Be: function(e, t, n) {
            "use strict";
            (function(t) {
                var r = n("1xkk"),
                    i = n("Cl3z"),
                    o = n("IchF"),
                    a = n("1AUG"),
                    s = n("4aXP");
                e.exports = function(e) {
                    var n = s(e, (function(e) {
                        var n = e.getSelection();
                        if (n.isCollapsed() && 0 === n.getAnchorOffset()) return a(e, 1);
                        var r = t.getSelection().getRangeAt(0);
                        return r = i(r), o(e, null, r.endContainer, r.endOffset, r.startContainer, r.startOffset).selectionState
                    }), "backward");
                    return n === e.getCurrentContent() ? e : r.push(e, n, "remove-range")
                }
            }).call(this, n("yLpj"))
        },
        M7w5: function(e, t, n) {
            "use strict";
            var r = n("DtGU");
            e.exports = function(e) {
                for (var t = e; t && t !== document.documentElement;) {
                    var n = r(t);
                    if (null != n) return n;
                    t = t.parentNode
                }
                return null
            }
        },
        MIqs: function(e, t, n) {
            "use strict";
            var r = n("LYv7");
            e.exports = function(e) {
                return r(e) && 3 == e.nodeType
            }
        },
        MOn9: function(e, t, n) {
            "use strict";
            var r = n("maj8");

            function i() {
                return (i = r || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var o = n("XPEN"),
                a = n("b//S"),
                s = n("ERkP"),
                c = n("O+2R"),
                u = n("/LAw"),
                l = n("Fd87"),
                f = n("n09L"),
                d = n("2Wwg"),
                p = n("CtAg"),
                h = n("7MNd"),
                g = n("BTrg"),
                v = n("tI3i"),
                m = n("hF1F"),
                y = function(e, t) {
                    return e.getAnchorKey() === t || e.getFocusKey() === t
                },
                _ = function(e) {
                    var t, n;

                    function r() {
                        for (var t, n, r, i, o = arguments.length, a = new Array(o), s = 0; s < o; s++) a[s] = arguments[s];
                        return t = e.call.apply(e, [this].concat(a)) || this, n = function(e) {
                            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e
                        }(t), i = void 0, (r = "_node") in n ? Object.defineProperty(n, r, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : n[r] = i, t
                    }
                    n = e, (t = r).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
                    var _ = r.prototype;
                    return _.shouldComponentUpdate = function(e) {
                        return this.props.block !== e.block || this.props.tree !== e.tree || this.props.direction !== e.direction || y(e.selection, e.block.getKey()) && e.forceSelection
                    }, _.componentDidMount = function() {
                        var e = this.props.selection,
                            t = e.getEndKey();
                        if (e.getHasFocus() && t === this.props.block.getKey()) {
                            var n = this._node;
                            if (null != n) {
                                var r, i = u.getScrollParent(n),
                                    o = h(i);
                                if (i === window) {
                                    var a = p(n);
                                    (r = a.y + a.height - g().height) > 0 && window.scrollTo(o.x, o.y + r + 10)
                                } else {
                                    n instanceof HTMLElement || v(!1), (r = n.offsetHeight + n.offsetTop - (i.offsetHeight + o.y)) > 0 && c.setTop(i, c.getTop(i) + r + 10)
                                }
                            }
                        }
                    }, _._renderChildren = function() {
                        var e = this,
                            t = this.props.block,
                            n = t.getKey(),
                            r = t.getText(),
                            c = this.props.tree.size - 1,
                            u = y(this.props.selection, n);
                        return this.props.tree.map((function(d, p) {
                            var h = d.get("leaves");
                            if (0 === h.size) return null;
                            var g = h.size - 1,
                                v = h.map((function(i, l) {
                                    var f = a.encode(n, p, l),
                                        d = i.get("start"),
                                        h = i.get("end");
                                    return s.createElement(o, {
                                        key: f,
                                        offsetKey: f,
                                        block: t,
                                        start: d,
                                        selection: u ? e.props.selection : null,
                                        forceSelection: e.props.forceSelection,
                                        text: r.slice(d, h),
                                        styleSet: t.getInlineStyleAt(d),
                                        customStyleMap: e.props.customStyleMap,
                                        customStyleFn: e.props.customStyleFn,
                                        isLast: p === c && l === g
                                    })
                                })).toArray(),
                                y = d.get("decoratorKey");
                            if (null == y) return v;
                            if (!e.props.decorator) return v;
                            var _ = m(e.props.decorator),
                                b = _.getComponentForKey(y);
                            if (!b) return v;
                            var S = _.getPropsForKey(y),
                                w = a.encode(n, p, 0),
                                C = h.first().get("start"),
                                x = h.last().get("end"),
                                E = r.slice(C, x),
                                k = t.getEntityAt(d.get("start")),
                                T = f.getHTMLDirIfDifferent(l.getDirection(E), e.props.direction),
                                O = {
                                    contentState: e.props.contentState,
                                    decoratedText: E,
                                    dir: T,
                                    key: w,
                                    start: C,
                                    end: x,
                                    blockKey: n,
                                    entityKey: k,
                                    offsetKey: w
                                };
                            return s.createElement(b, i({}, S, O), v)
                        })).toArray()
                    }, _.render = function() {
                        var e = this,
                            t = this.props,
                            n = t.direction,
                            r = t.offsetKey,
                            i = d({
                                "public/DraftStyleDefault/block": !0,
                                "public/DraftStyleDefault/ltr": "LTR" === n,
                                "public/DraftStyleDefault/rtl": "RTL" === n
                            });
                        return s.createElement("div", {
                            "data-offset-key": r,
                            className: i,
                            ref: function(t) {
                                return e._node = t
                            }
                        }, this._renderChildren())
                    }, r
                }(s.Component);
            e.exports = _
        },
        MXY2: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return l
            }));
            var r = n("3XMw"),
                i = n.n(r),
                o = i.a.c6432564,
                a = i.a.ia04f5a9,
                s = i.a.ce6d3a76,
                c = i.a.h6994d0e,
                u = i.a.h2328df0,
                l = function(e) {
                    var t = e.inReplyToStatus && !e.isSelfThreadReply;
                    return e.isScheduled ? u : e.isQuoteTweet ? s : e.isRetweet ? s : t ? c : e.isThread ? a : o
                }
        },
        MzOC: function(e, t, n) {
            "use strict";
            n("/2Cm");
            e.exports = function(e, t) {
                var n, r = e.getSelection(),
                    i = r.getStartKey(),
                    o = r.getStartOffset(),
                    a = e.getCurrentContent(),
                    s = i;
                return t > a.getBlockForKey(i).getText().length - o ? (s = a.getKeyAfter(i), n = 0) : n = o + t, r.merge({
                    focusKey: s,
                    focusOffset: n
                })
            }
        },
        NGtv: function(e, t, n) {
            "use strict";
            var r = n("3as9"),
                i = "Unknown",
                o = {
                    "Mac OS": "Mac OS X"
                };
            var a, s = (new r).getResult(),
                c = function(e) {
                    if (!e) return {
                        major: "",
                        minor: ""
                    };
                    var t = e.split(".");
                    return {
                        major: t[0],
                        minor: t[1]
                    }
                }(s.browser.version),
                u = {
                    browserArchitecture: s.cpu.architecture || i,
                    browserFullVersion: s.browser.version || i,
                    browserMinorVersion: c.minor || i,
                    browserName: s.browser.name || i,
                    browserVersion: s.browser.major || i,
                    deviceName: s.device.model || i,
                    engineName: s.engine.name || i,
                    engineVersion: s.engine.version || i,
                    platformArchitecture: s.cpu.architecture || i,
                    platformName: (a = s.os.name, o[a] || a || i),
                    platformVersion: s.os.version || i,
                    platformFullVersion: s.os.version || i
                };
            e.exports = u
        },
        NgPv: function(e, t, n) {
            "use strict";
            var r = n("W6iK").substr;
            e.exports = function(e, t) {
                var n = Array(e.length).fill(null);
                return t && t.forEach((function(t) {
                    for (var i = r(e, 0, t.offset).length, o = i + r(e, t.offset, t.length).length, a = i; a < o; a++) n[a] = t.key
                })), n
            }
        },
        "O+2R": function(e, t, n) {
            "use strict";

            function r(e, t) {
                return !!t && (e === t.documentElement || e === t.body)
            }
            var i = {
                getTop: function(e) {
                    var t = e.ownerDocument;
                    return r(e, t) ? t.body.scrollTop || t.documentElement.scrollTop : e.scrollTop
                },
                setTop: function(e, t) {
                    var n = e.ownerDocument;
                    r(e, n) ? n.body.scrollTop = n.documentElement.scrollTop = t : e.scrollTop = t
                },
                getLeft: function(e) {
                    var t = e.ownerDocument;
                    return r(e, t) ? t.body.scrollLeft || t.documentElement.scrollLeft : e.scrollLeft
                },
                setLeft: function(e, t) {
                    var n = e.ownerDocument;
                    r(e, n) ? n.body.scrollLeft = n.documentElement.scrollLeft = t : e.scrollLeft = t
                }
            };
            e.exports = i
        },
        OJbI: function(e, t, n) {
            "use strict";
            var r = n("maj8");

            function i() {
                return (i = r || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var o = n("b//S"),
                a = n("ERkP"),
                s = n("Fd87"),
                c = n("n09L"),
                u = function(e) {
                    var t, n;

                    function r() {
                        return e.apply(this, arguments) || this
                    }
                    return n = e, (t = r).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n, r.prototype.render = function() {
                        var e = this.props,
                            t = e.block,
                            n = e.children,
                            r = e.contentState,
                            u = e.decorator,
                            l = e.decoratorKey,
                            f = e.direction,
                            d = e.leafSet,
                            p = e.text,
                            h = t.getKey(),
                            g = d.get("leaves"),
                            v = u.getComponentForKey(l),
                            m = u.getPropsForKey(l),
                            y = o.encode(h, parseInt(l, 10), 0),
                            _ = p.slice(g.first().get("start"), g.last().get("end")),
                            b = c.getHTMLDirIfDifferent(s.getDirection(_), f);
                        return a.createElement(v, i({}, m, {
                            contentState: r,
                            decoratedText: _,
                            dir: b,
                            key: y,
                            entityKey: t.getEntityAt(d.get("start")),
                            offsetKey: y
                        }), n)
                    }, r
                }(a.Component);
            e.exports = u
        },
        ObfX: function(e, t, n) {
            "use strict";
            e.exports = {
                BACKSPACE: 8,
                TAB: 9,
                RETURN: 13,
                ALT: 18,
                ESC: 27,
                SPACE: 32,
                PAGE_UP: 33,
                PAGE_DOWN: 34,
                END: 35,
                HOME: 36,
                LEFT: 37,
                UP: 38,
                RIGHT: 39,
                DOWN: 40,
                DELETE: 46,
                COMMA: 188,
                PERIOD: 190,
                A: 65,
                Z: 90,
                ZERO: 48,
                NUMPAD_0: 96,
                NUMPAD_9: 105
            }
        },
        "P/Gd": function(e, t, n) {
            "use strict";
            (function(t) {
                var r = n("7002"),
                    i = n("b//S"),
                    o = n("1xkk"),
                    a = n("rim0"),
                    s = n("RXrk").notEmptyKey,
                    c = n("M7w5"),
                    u = n("ZFda"),
                    l = n("hF1F"),
                    f = a.isEngine("Gecko"),
                    d = "\n\n";
                e.exports = function(e, n) {
                    void 0 !== e._pendingStateFromBeforeInput && (e.update(e._pendingStateFromBeforeInput), e._pendingStateFromBeforeInput = void 0);
                    var a = t.getSelection(),
                        p = a.anchorNode,
                        h = a.isCollapsed;
                    if (!(p.nodeType !== Node.TEXT_NODE && p.nodeType !== Node.ELEMENT_NODE)) {
                        if (p.nodeType === Node.TEXT_NODE && (null !== p.previousSibling || null !== p.nextSibling)) {
                            var g = p.parentNode;
                            p.nodeValue = g.textContent;
                            for (var v = g.firstChild; null !== v; v = v.nextSibling) v !== p && g.removeChild(v)
                        }
                        var m = p.textContent,
                            y = e._latestEditorState,
                            _ = l(c(p)),
                            b = i.decode(_),
                            S = b.blockKey,
                            w = b.decoratorKey,
                            C = b.leafKey,
                            x = y.getBlockTree(S).getIn([w, "leaves", C]),
                            E = x.start,
                            k = x.end,
                            T = y.getCurrentContent(),
                            O = T.getBlockForKey(S),
                            D = O.getText().slice(E, k);
                        if (m.endsWith(d) && (m = m.slice(0, -1)), m !== D) {
                            var I, M, A, R, K = y.getSelection(),
                                B = K.merge({
                                    anchorOffset: E,
                                    focusOffset: k,
                                    isBackward: !1
                                }),
                                L = O.getEntityAt(E),
                                P = s(L) ? T.getEntity(L) : null,
                                F = "MUTABLE" === (null != P ? P.getMutability() : null),
                                N = F ? "spellcheck-change" : "apply-entity",
                                z = r.replaceText(T, B, m, O.getInlineStyleAt(E), F ? O.getEntityAt(E) : null);
                            if (f) I = a.anchorOffset, M = a.focusOffset, R = (A = E + Math.min(I, M)) + Math.abs(I - M), I = A, M = R;
                            else {
                                var j = m.length - D.length;
                                A = K.getStartOffset(), R = K.getEndOffset(), I = h ? R + j : A, M = R + j
                            }
                            var U = z.merge({
                                selectionBefore: T.getSelectionAfter(),
                                selectionAfter: K.merge({
                                    anchorOffset: I,
                                    focusOffset: M
                                })
                            });
                            e.update(o.push(y, U, N))
                        } else {
                            var H = n.nativeEvent.inputType;
                            if (H) {
                                var W = function(e, t) {
                                    switch (e) {
                                        case "deleteContentBackward":
                                            return u(t)
                                    }
                                    return t
                                }(H, y);
                                if (W !== y) return e.restoreEditorDOM(), void e.update(W)
                            }
                        }
                    }
                }
            }).call(this, n("yLpj"))
        },
        PDX0: function(e, t) {
            (function(t) {
                e.exports = t
            }).call(this, {})
        },
        PrWI: function(e, t, n) {
            "use strict";
            var r = n("hDHP");
            e.exports = function(e) {
                var t = e.getSelection();
                return t.isCollapsed() ? null : r(e.getCurrentContent(), t)
            }
        },
        QAfK: function(e, t, n) {
            "use strict";
            var r = n("ZUd0")("draft_tree_data_support");
            e.exports = n(r ? "vHsC" : "JAVJ")
        },
        QCHf: function(e, t, n) {
            "use strict";
            var r = n("YM28"),
                i = n("HdU4"),
                o = n("Svze"),
                a = (o.List, o.Map),
                s = function(e, t, n) {
                    if (e) {
                        var r = t.get(e);
                        r && t.set(e, n(r))
                    }
                },
                c = function(e, t) {
                    var n = [];
                    if (!e) return n;
                    for (var r = t.get(e); r && r.getParentKey();) {
                        var i = r.getParentKey();
                        i && n.push(i), r = i ? t.get(i) : null
                    }
                    return n
                },
                u = function(e, t, n) {
                    if (!e) return null;
                    for (var r = n.get(e.getKey()).getNextSiblingKey(); r && !t.get(r);) r = n.get(r).getNextSiblingKey() || null;
                    return r
                },
                l = function(e, t, n) {
                    if (!e) return null;
                    for (var r = n.get(e.getKey()).getPrevSiblingKey(); r && !t.get(r);) r = n.get(r).getPrevSiblingKey() || null;
                    return r
                },
                f = function(e, t, n, r) {
                    return e.withMutations((function(o) {
                        if (s(t.getKey(), o, (function(e) {
                                return e.merge({
                                    nextSibling: u(e, o, r),
                                    prevSibling: l(e, o, r)
                                })
                            })), s(n.getKey(), o, (function(e) {
                                return e.merge({
                                    nextSibling: u(e, o, r),
                                    prevSibling: l(e, o, r)
                                })
                            })), c(t.getKey(), r).forEach((function(e) {
                                return s(e, o, (function(e) {
                                    return e.merge({
                                        children: e.getChildKeys().filter((function(e) {
                                            return o.get(e)
                                        })),
                                        nextSibling: u(e, o, r),
                                        prevSibling: l(e, o, r)
                                    })
                                }))
                            })), s(t.getNextSiblingKey(), o, (function(e) {
                                return e.merge({
                                    prevSibling: t.getPrevSiblingKey()
                                })
                            })), s(t.getPrevSiblingKey(), o, (function(e) {
                                return e.merge({
                                    nextSibling: u(e, o, r)
                                })
                            })), s(n.getNextSiblingKey(), o, (function(e) {
                                return e.merge({
                                    prevSibling: l(e, o, r)
                                })
                            })), s(n.getPrevSiblingKey(), o, (function(e) {
                                return e.merge({
                                    nextSibling: n.getNextSiblingKey()
                                })
                            })), c(n.getKey(), r).forEach((function(e) {
                                s(e, o, (function(e) {
                                    return e.merge({
                                        children: e.getChildKeys().filter((function(e) {
                                            return o.get(e)
                                        })),
                                        nextSibling: u(e, o, r),
                                        prevSibling: l(e, o, r)
                                    })
                                }))
                            })), function(e, t) {
                                var n = [];
                                if (!e) return n;
                                for (var r = i(e, t); r && t.get(r);) {
                                    var o = t.get(r);
                                    n.push(r), r = o.getParentKey() ? i(o, t) : null
                                }
                                return n
                            }(n, r).forEach((function(e) {
                                return s(e, o, (function(e) {
                                    return e.merge({
                                        nextSibling: u(e, o, r),
                                        prevSibling: l(e, o, r)
                                    })
                                }))
                            })), null == e.get(t.getKey()) && null != e.get(n.getKey()) && n.getParentKey() === t.getKey() && null == n.getPrevSiblingKey()) {
                            var a = t.getPrevSiblingKey();
                            s(n.getKey(), o, (function(e) {
                                return e.merge({
                                    prevSibling: a
                                })
                            })), s(a, o, (function(e) {
                                return e.merge({
                                    nextSibling: n.getKey()
                                })
                            }));
                            var f = a ? e.get(a) : null,
                                d = f ? f.getParentKey() : null;
                            if (t.getChildKeys().forEach((function(e) {
                                    s(e, o, (function(e) {
                                        return e.merge({
                                            parent: d
                                        })
                                    }))
                                })), null != d) {
                                var p = e.get(d);
                                s(d, o, (function(e) {
                                    return e.merge({
                                        children: p.getChildKeys().concat(t.getChildKeys())
                                    })
                                }))
                            }
                            s(t.getChildKeys().find((function(t) {
                                return null === e.get(t).getNextSiblingKey()
                            })), o, (function(e) {
                                return e.merge({
                                    nextSibling: t.getNextSiblingKey()
                                })
                            }))
                        }
                    }))
                },
                d = function(e, t, n) {
                    if (0 === t)
                        for (; t < n;) e = e.shift(), t++;
                    else if (n === e.count())
                        for (; n > t;) e = e.pop(), n--;
                    else {
                        var r = e.slice(0, t),
                            i = e.slice(n);
                        e = r.concat(i).toList()
                    }
                    return e
                };
            e.exports = function(e, t) {
                if (t.isCollapsed()) return e;
                var n, o = e.getBlockMap(),
                    s = t.getStartKey(),
                    u = t.getStartOffset(),
                    l = t.getEndKey(),
                    p = t.getEndOffset(),
                    h = o.get(s),
                    g = o.get(l),
                    v = h instanceof r,
                    m = [];
                if (v) {
                    var y = g.getChildKeys(),
                        _ = c(l, o);
                    g.getNextSiblingKey() && (m = m.concat(_)), y.isEmpty() || (m = m.concat(_.concat([l]))), m = m.concat(c(i(g, o), o))
                }
                n = h === g ? d(h.getCharacterList(), u, p) : h.getCharacterList().slice(0, u).concat(g.getCharacterList().slice(p));
                var b = h.merge({
                        text: h.getText().slice(0, u) + g.getText().slice(p),
                        characterList: n
                    }),
                    S = v && 0 === u && 0 === p && g.getParentKey() === s && null == g.getPrevSiblingKey() ? a([
                        [s, null]
                    ]) : o.toSeq().skipUntil((function(e, t) {
                        return t === s
                    })).takeUntil((function(e, t) {
                        return t === l
                    })).filter((function(e, t) {
                        return -1 === m.indexOf(t)
                    })).concat(a([
                        [l, null]
                    ])).map((function(e, t) {
                        return t === s ? b : null
                    })),
                    w = o.merge(S).filter((function(e) {
                        return !!e
                    }));
                return v && h !== g && (w = f(w, h, g, o)), e.merge({
                    blockMap: w,
                    selectionBefore: t,
                    selectionAfter: t.merge({
                        anchorKey: s,
                        anchorOffset: u,
                        focusKey: s,
                        focusOffset: u,
                        isBackward: !1
                    })
                })
            }
        },
        QVkg: function(e, t, n) {
            "use strict";
            var r = n("rim0"),
                i = n("r5/r"),
                o = n("Vwge"),
                a = n("oNIj"),
                s = n("fNrL"),
                c = n("k5bp"),
                u = n("gLP3"),
                l = n("58Uu"),
                f = n("glMO"),
                d = n("P/Gd"),
                p = n("njFt"),
                h = n("LtnY"),
                g = n("DuSR"),
                v = r.isBrowser("Chrome") ? g : function(e) {},
                m = {
                    onBeforeInput: i,
                    onBlur: o,
                    onCompositionStart: a,
                    onCopy: s,
                    onCut: c,
                    onDragOver: u,
                    onDragStart: l,
                    onFocus: f,
                    onInput: d,
                    onKeyDown: p,
                    onPaste: h,
                    onSelect: g,
                    onMouseUp: v,
                    onKeyUp: v
                };
            e.exports = m
        },
        R0VQ: function(e, t, n) {
            "use strict";
            var r = n("KXNC");
            e.exports = function(e) {
                var t = r(e),
                    n = 0,
                    i = 0,
                    o = 0,
                    a = 0;
                if (t.length) {
                    if (t.length > 1 && 0 === t[0].width) {
                        var s = t[1];
                        n = s.top, i = s.right, o = s.bottom, a = s.left
                    } else {
                        var c = t[0];
                        n = c.top, i = c.right, o = c.bottom, a = c.left
                    }
                    for (var u = 1; u < t.length; u++) {
                        var l = t[u];
                        0 !== l.height && 0 !== l.width && (n = Math.min(n, l.top), i = Math.max(i, l.right), o = Math.max(o, l.bottom), a = Math.min(a, l.left))
                    }
                }
                return {
                    top: n,
                    right: i,
                    bottom: o,
                    left: a,
                    width: i - a,
                    height: o - n
                }
            }
        },
        RH6X: function(e, t, n) {
            "use strict";
            var r = n("PJYZ"),
                i = n.n(r),
                o = n("VbXa"),
                a = n.n(o),
                s = n("lSNA"),
                c = n.n(s),
                u = n("ERkP"),
                l = n("oEoC"),
                f = n("2dXj"),
                d = n("zpdM"),
                p = function(e) {
                    function t() {
                        for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                        return t = e.call.apply(e, [this].concat(r)) || this, c()(i()(t), "state", {
                            queryContext: void 0,
                            canShowTypeahead: !1
                        }), c()(i()(t), "render", (function() {
                            var e = t.props,
                                n = e.children,
                                r = e.contextText,
                                i = e.isInline,
                                o = e.onTypeaheadStateChange,
                                a = e.source,
                                s = t.state,
                                c = s.queryContext,
                                l = s.canShowTypeahead && c ? {
                                    word: c.word,
                                    resultType: c.resultType
                                } : void 0;
                            return u.createElement(f.a, {
                                contextText: r,
                                isInline: i,
                                onDismiss: t._handleDismiss,
                                onSelectItem: t._handleSelectItem,
                                onTypeaheadStateChange: o,
                                query: l,
                                setRef: t._setGenericWrapperRef,
                                source: a
                            }, n(t._handleInputChange))
                        })), c()(i()(t), "_getCaret", (function(e) {
                            return e.getSelection().getStartOffset()
                        })), c()(i()(t), "_getPlaintextFromCurrentBlock", (function(e) {
                            var t = e.getSelection().anchorKey;
                            return e.getCurrentContent().getBlockForKey(t).getText()
                        })), c()(i()(t), "_handleSelectItem", (function(e) {
                            var n = t.props.onTextUpdated,
                                r = t.state.queryContext;
                            if (r) {
                                var i = "users" === r.resultType && "user" === e.type ? "@" + e.data.screen_name + " " : (e.data.topic || e.data.text || "") + " ";
                                n(t._replaceToken(i, r))
                            }
                            t._setQueryContext(void 0)
                        })), c()(i()(t), "_handleInputChange", (function(e) {
                            var n = t.state.queryContext,
                                r = n && t._getPlaintextFromCurrentBlock(n.editorState),
                                i = t._getPlaintextFromCurrentBlock(e);
                            if (r !== i) {
                                t._genericWrapperRef && t._genericWrapperRef.resetSelectedItem();
                                var o = l.c(t._getCaret(e), i),
                                    a = o.word,
                                    s = o.start;
                                if (-1 === s) t._setQueryContext(void 0);
                                else {
                                    var c = l.d(a || "", "compose");
                                    if (c) {
                                        var u = c.q,
                                            f = c.result_type;
                                        t._setQueryContext({
                                            word: u,
                                            resultType: f,
                                            editorState: e,
                                            startIndex: s
                                        })
                                    } else t._setQueryContext(void 0)
                                }
                            }
                        })), c()(i()(t), "_setGenericWrapperRef", (function(e) {
                            t._genericWrapperRef = e
                        })), c()(i()(t), "_setQueryContext", (function(e) {
                            return t.setState({
                                queryContext: e,
                                canShowTypeahead: !!e
                            })
                        })), c()(i()(t), "_handleDismiss", (function() {
                            return t.setState({
                                canShowTypeahead: !1
                            })
                        })), t
                    }
                    return a()(t, e), t.prototype._replaceToken = function(e, t) {
                        var n = t.startIndex,
                            r = t.editorState,
                            i = r.getSelection().merge({
                                anchorKey: r.getSelection().getFocusKey(),
                                anchorOffset: n
                            }),
                            o = d.Modifier.replaceText(r.getCurrentContent(), i, e),
                            a = d.EditorState.push(r, o, "insert-characters"),
                            s = n + e.length,
                            c = a.getSelection().merge({
                                anchorOffset: s,
                                focusOffset: s
                            });
                        return d.EditorState.forceSelection(a, c)
                    }, t
                }(u.Component);
            t.a = p
        },
        RXrk: function(e, t, n) {
            "use strict";
            e.exports = {
                notEmptyKey: function(e) {
                    return null != e && "" != e
                }
            }
        },
        SADN: function(e, t, n) {
            "use strict";
            var r = n("pVnL"),
                i = n.n(r),
                o = n("ERkP"),
                a = n("RH6X"),
                s = n("rziq"),
                c = n("hHEM"),
                u = n("keCP"),
                l = {
                    convertEmojiToEntities: c.a.convertEmojiToEntities,
                    element: u.a,
                    initEditorState: c.a.initEditorState,
                    insertTextAtCursor: c.a.insertTextAtCursor,
                    updateOverflowStyle: c.a.updateOverflowStyle,
                    dismissComposerCommandName: s.a,
                    sendTweetCommandName: s.b
                };
            t.a = function(e) {
                return function(t) {
                    return o.createElement(e, i()({}, t, {
                        richTextInputContext: l,
                        typeaheadWrapper: a.a
                    }))
                }
            }
        },
        Svze: function(e, t, n) {
            e.exports = function() {
                "use strict";
                var e = Array.prototype.slice;

                function t(e, t) {
                    t && (e.prototype = Object.create(t.prototype)), e.prototype.constructor = e
                }

                function n(e) {
                    return a(e) ? e : q(e)
                }

                function r(e) {
                    return s(e) ? e : G(e)
                }

                function i(e) {
                    return c(e) ? e : X(e)
                }

                function o(e) {
                    return a(e) && !u(e) ? e : Y(e)
                }

                function a(e) {
                    return !(!e || !e[f])
                }

                function s(e) {
                    return !(!e || !e[d])
                }

                function c(e) {
                    return !(!e || !e[p])
                }

                function u(e) {
                    return s(e) || c(e)
                }

                function l(e) {
                    return !(!e || !e[h])
                }
                t(r, n), t(i, n), t(o, n), n.isIterable = a, n.isKeyed = s, n.isIndexed = c, n.isAssociative = u, n.isOrdered = l, n.Keyed = r, n.Indexed = i, n.Set = o;
                var f = "@@__IMMUTABLE_ITERABLE__@@",
                    d = "@@__IMMUTABLE_KEYED__@@",
                    p = "@@__IMMUTABLE_INDEXED__@@",
                    h = "@@__IMMUTABLE_ORDERED__@@",
                    g = 5,
                    v = 1 << g,
                    m = v - 1,
                    y = {},
                    _ = {
                        value: !1
                    },
                    b = {
                        value: !1
                    };

                function S(e) {
                    return e.value = !1, e
                }

                function w(e) {
                    e && (e.value = !0)
                }

                function C() {}

                function x(e, t) {
                    t = t || 0;
                    for (var n = Math.max(0, e.length - t), r = new Array(n), i = 0; i < n; i++) r[i] = e[i + t];
                    return r
                }

                function E(e) {
                    return void 0 === e.size && (e.size = e.__iterate(T)), e.size
                }

                function k(e, t) {
                    if ("number" != typeof t) {
                        var n = t >>> 0;
                        if ("" + n !== t || 4294967295 === n) return NaN;
                        t = n
                    }
                    return t < 0 ? E(e) + t : t
                }

                function T() {
                    return !0
                }

                function O(e, t, n) {
                    return (0 === e || void 0 !== n && e <= -n) && (void 0 === t || void 0 !== n && t >= n)
                }

                function D(e, t) {
                    return M(e, t, 0)
                }

                function I(e, t) {
                    return M(e, t, t)
                }

                function M(e, t, n) {
                    return void 0 === e ? n : e < 0 ? Math.max(0, t + e) : void 0 === t ? e : Math.min(t, e)
                }
                var A = 0,
                    R = 1,
                    K = 2,
                    B = "function" == typeof Symbol && Symbol.iterator,
                    L = "@@iterator",
                    P = B || L;

                function F(e) {
                    this.next = e
                }

                function N(e, t, n, r) {
                    var i = 0 === e ? t : 1 === e ? n : [t, n];
                    return r ? r.value = i : r = {
                        value: i,
                        done: !1
                    }, r
                }

                function z() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }

                function j(e) {
                    return !!W(e)
                }

                function U(e) {
                    return e && "function" == typeof e.next
                }

                function H(e) {
                    var t = W(e);
                    return t && t.call(e)
                }

                function W(e) {
                    var t = e && (B && e[B] || e[L]);
                    if ("function" == typeof t) return t
                }

                function V(e) {
                    return e && "number" == typeof e.length
                }

                function q(e) {
                    return null == e ? oe() : a(e) ? e.toSeq() : function(e) {
                        var t = ce(e) || "object" == typeof e && new te(e);
                        if (!t) throw new TypeError("Expected Array or iterable object of values, or keyed object: " + e);
                        return t
                    }(e)
                }

                function G(e) {
                    return null == e ? oe().toKeyedSeq() : a(e) ? s(e) ? e.toSeq() : e.fromEntrySeq() : ae(e)
                }

                function X(e) {
                    return null == e ? oe() : a(e) ? s(e) ? e.entrySeq() : e.toIndexedSeq() : se(e)
                }

                function Y(e) {
                    return (null == e ? oe() : a(e) ? s(e) ? e.entrySeq() : e : se(e)).toSetSeq()
                }
                F.prototype.toString = function() {
                    return "[Iterator]"
                }, F.KEYS = A, F.VALUES = R, F.ENTRIES = K, F.prototype.inspect = F.prototype.toSource = function() {
                    return this.toString()
                }, F.prototype[P] = function() {
                    return this
                }, t(q, n), q.of = function() {
                    return q(arguments)
                }, q.prototype.toSeq = function() {
                    return this
                }, q.prototype.toString = function() {
                    return this.__toString("Seq {", "}")
                }, q.prototype.cacheResult = function() {
                    return !this._cache && this.__iterateUncached && (this._cache = this.entrySeq().toArray(), this.size = this._cache.length), this
                }, q.prototype.__iterate = function(e, t) {
                    return ue(this, e, t, !0)
                }, q.prototype.__iterator = function(e, t) {
                    return le(this, e, t, !0)
                }, t(G, q), G.prototype.toKeyedSeq = function() {
                    return this
                }, t(X, q), X.of = function() {
                    return X(arguments)
                }, X.prototype.toIndexedSeq = function() {
                    return this
                }, X.prototype.toString = function() {
                    return this.__toString("Seq [", "]")
                }, X.prototype.__iterate = function(e, t) {
                    return ue(this, e, t, !1)
                }, X.prototype.__iterator = function(e, t) {
                    return le(this, e, t, !1)
                }, t(Y, q), Y.of = function() {
                    return Y(arguments)
                }, Y.prototype.toSetSeq = function() {
                    return this
                }, q.isSeq = ie, q.Keyed = G, q.Set = Y, q.Indexed = X;
                var J, Q, Z, $ = "@@__IMMUTABLE_SEQ__@@";

                function ee(e) {
                    this._array = e, this.size = e.length
                }

                function te(e) {
                    var t = Object.keys(e);
                    this._object = e, this._keys = t, this.size = t.length
                }

                function ne(e) {
                    this._iterable = e, this.size = e.length || e.size
                }

                function re(e) {
                    this._iterator = e, this._iteratorCache = []
                }

                function ie(e) {
                    return !(!e || !e[$])
                }

                function oe() {
                    return J || (J = new ee([]))
                }

                function ae(e) {
                    var t = Array.isArray(e) ? new ee(e).fromEntrySeq() : U(e) ? new re(e).fromEntrySeq() : j(e) ? new ne(e).fromEntrySeq() : "object" == typeof e ? new te(e) : void 0;
                    if (!t) throw new TypeError("Expected Array or iterable object of [k, v] entries, or keyed object: " + e);
                    return t
                }

                function se(e) {
                    var t = ce(e);
                    if (!t) throw new TypeError("Expected Array or iterable object of values: " + e);
                    return t
                }

                function ce(e) {
                    return V(e) ? new ee(e) : U(e) ? new re(e) : j(e) ? new ne(e) : void 0
                }

                function ue(e, t, n, r) {
                    var i = e._cache;
                    if (i) {
                        for (var o = i.length - 1, a = 0; a <= o; a++) {
                            var s = i[n ? o - a : a];
                            if (!1 === t(s[1], r ? s[0] : a, e)) return a + 1
                        }
                        return a
                    }
                    return e.__iterateUncached(t, n)
                }

                function le(e, t, n, r) {
                    var i = e._cache;
                    if (i) {
                        var o = i.length - 1,
                            a = 0;
                        return new F((function() {
                            var e = i[n ? o - a : a];
                            return a++ > o ? {
                                value: void 0,
                                done: !0
                            } : N(t, r ? e[0] : a - 1, e[1])
                        }))
                    }
                    return e.__iteratorUncached(t, n)
                }

                function fe(e, t) {
                    return t ? function e(t, n, r, i) {
                        return Array.isArray(n) ? t.call(i, r, X(n).map((function(r, i) {
                            return e(t, r, i, n)
                        }))) : pe(n) ? t.call(i, r, G(n).map((function(r, i) {
                            return e(t, r, i, n)
                        }))) : n
                    }(t, e, "", {
                        "": e
                    }) : de(e)
                }

                function de(e) {
                    return Array.isArray(e) ? X(e).map(de).toList() : pe(e) ? G(e).map(de).toMap() : e
                }

                function pe(e) {
                    return e && (e.constructor === Object || void 0 === e.constructor)
                }

                function he(e, t) {
                    if (e === t || e != e && t != t) return !0;
                    if (!e || !t) return !1;
                    if ("function" == typeof e.valueOf && "function" == typeof t.valueOf) {
                        if ((e = e.valueOf()) === (t = t.valueOf()) || e != e && t != t) return !0;
                        if (!e || !t) return !1
                    }
                    return !("function" != typeof e.equals || "function" != typeof t.equals || !e.equals(t))
                }

                function ge(e, t) {
                    if (e === t) return !0;
                    if (!a(t) || void 0 !== e.size && void 0 !== t.size && e.size !== t.size || void 0 !== e.__hash && void 0 !== t.__hash && e.__hash !== t.__hash || s(e) !== s(t) || c(e) !== c(t) || l(e) !== l(t)) return !1;
                    if (0 === e.size && 0 === t.size) return !0;
                    var n = !u(e);
                    if (l(e)) {
                        var r = e.entries();
                        return t.every((function(e, t) {
                            var i = r.next().value;
                            return i && he(i[1], e) && (n || he(i[0], t))
                        })) && r.next().done
                    }
                    var i = !1;
                    if (void 0 === e.size)
                        if (void 0 === t.size) "function" == typeof e.cacheResult && e.cacheResult();
                        else {
                            i = !0;
                            var o = e;
                            e = t, t = o
                        }
                    var f = !0,
                        d = t.__iterate((function(t, r) {
                            if (n ? !e.has(t) : i ? !he(t, e.get(r, y)) : !he(e.get(r, y), t)) return f = !1, !1
                        }));
                    return f && e.size === d
                }

                function ve(e, t) {
                    if (!(this instanceof ve)) return new ve(e, t);
                    if (this._value = e, this.size = void 0 === t ? 1 / 0 : Math.max(0, t), 0 === this.size) {
                        if (Q) return Q;
                        Q = this
                    }
                }

                function me(e, t) {
                    if (!e) throw new Error(t)
                }

                function ye(e, t, n) {
                    if (!(this instanceof ye)) return new ye(e, t, n);
                    if (me(0 !== n, "Cannot step a Range by 0"), e = e || 0, void 0 === t && (t = 1 / 0), n = void 0 === n ? 1 : Math.abs(n), t < e && (n = -n), this._start = e, this._end = t, this._step = n, this.size = Math.max(0, Math.ceil((t - e) / n - 1) + 1), 0 === this.size) {
                        if (Z) return Z;
                        Z = this
                    }
                }

                function _e() {
                    throw TypeError("Abstract")
                }

                function be() {}

                function Se() {}

                function we() {}
                q.prototype[$] = !0, t(ee, X), ee.prototype.get = function(e, t) {
                    return this.has(e) ? this._array[k(this, e)] : t
                }, ee.prototype.__iterate = function(e, t) {
                    for (var n = this._array, r = n.length - 1, i = 0; i <= r; i++)
                        if (!1 === e(n[t ? r - i : i], i, this)) return i + 1;
                    return i
                }, ee.prototype.__iterator = function(e, t) {
                    var n = this._array,
                        r = n.length - 1,
                        i = 0;
                    return new F((function() {
                        return i > r ? {
                            value: void 0,
                            done: !0
                        } : N(e, i, n[t ? r - i++ : i++])
                    }))
                }, t(te, G), te.prototype.get = function(e, t) {
                    return void 0 === t || this.has(e) ? this._object[e] : t
                }, te.prototype.has = function(e) {
                    return this._object.hasOwnProperty(e)
                }, te.prototype.__iterate = function(e, t) {
                    for (var n = this._object, r = this._keys, i = r.length - 1, o = 0; o <= i; o++) {
                        var a = r[t ? i - o : o];
                        if (!1 === e(n[a], a, this)) return o + 1
                    }
                    return o
                }, te.prototype.__iterator = function(e, t) {
                    var n = this._object,
                        r = this._keys,
                        i = r.length - 1,
                        o = 0;
                    return new F((function() {
                        var a = r[t ? i - o : o];
                        return o++ > i ? {
                            value: void 0,
                            done: !0
                        } : N(e, a, n[a])
                    }))
                }, te.prototype[h] = !0, t(ne, X), ne.prototype.__iterateUncached = function(e, t) {
                    if (t) return this.cacheResult().__iterate(e, t);
                    var n = H(this._iterable),
                        r = 0;
                    if (U(n))
                        for (var i; !(i = n.next()).done && !1 !== e(i.value, r++, this););
                    return r
                }, ne.prototype.__iteratorUncached = function(e, t) {
                    if (t) return this.cacheResult().__iterator(e, t);
                    var n = H(this._iterable);
                    if (!U(n)) return new F(z);
                    var r = 0;
                    return new F((function() {
                        var t = n.next();
                        return t.done ? t : N(e, r++, t.value)
                    }))
                }, t(re, X), re.prototype.__iterateUncached = function(e, t) {
                    if (t) return this.cacheResult().__iterate(e, t);
                    for (var n, r = this._iterator, i = this._iteratorCache, o = 0; o < i.length;)
                        if (!1 === e(i[o], o++, this)) return o;
                    for (; !(n = r.next()).done;) {
                        var a = n.value;
                        if (i[o] = a, !1 === e(a, o++, this)) break
                    }
                    return o
                }, re.prototype.__iteratorUncached = function(e, t) {
                    if (t) return this.cacheResult().__iterator(e, t);
                    var n = this._iterator,
                        r = this._iteratorCache,
                        i = 0;
                    return new F((function() {
                        if (i >= r.length) {
                            var t = n.next();
                            if (t.done) return t;
                            r[i] = t.value
                        }
                        return N(e, i, r[i++])
                    }))
                }, t(ve, X), ve.prototype.toString = function() {
                    return 0 === this.size ? "Repeat []" : "Repeat [ " + this._value + " " + this.size + " times ]"
                }, ve.prototype.get = function(e, t) {
                    return this.has(e) ? this._value : t
                }, ve.prototype.includes = function(e) {
                    return he(this._value, e)
                }, ve.prototype.slice = function(e, t) {
                    var n = this.size;
                    return O(e, t, n) ? this : new ve(this._value, I(t, n) - D(e, n))
                }, ve.prototype.reverse = function() {
                    return this
                }, ve.prototype.indexOf = function(e) {
                    return he(this._value, e) ? 0 : -1
                }, ve.prototype.lastIndexOf = function(e) {
                    return he(this._value, e) ? this.size : -1
                }, ve.prototype.__iterate = function(e, t) {
                    for (var n = 0; n < this.size; n++)
                        if (!1 === e(this._value, n, this)) return n + 1;
                    return n
                }, ve.prototype.__iterator = function(e, t) {
                    var n = this,
                        r = 0;
                    return new F((function() {
                        return r < n.size ? N(e, r++, n._value) : {
                            value: void 0,
                            done: !0
                        }
                    }))
                }, ve.prototype.equals = function(e) {
                    return e instanceof ve ? he(this._value, e._value) : ge(e)
                }, t(ye, X), ye.prototype.toString = function() {
                    return 0 === this.size ? "Range []" : "Range [ " + this._start + "..." + this._end + (this._step > 1 ? " by " + this._step : "") + " ]"
                }, ye.prototype.get = function(e, t) {
                    return this.has(e) ? this._start + k(this, e) * this._step : t
                }, ye.prototype.includes = function(e) {
                    var t = (e - this._start) / this._step;
                    return t >= 0 && t < this.size && t === Math.floor(t)
                }, ye.prototype.slice = function(e, t) {
                    return O(e, t, this.size) ? this : (e = D(e, this.size), (t = I(t, this.size)) <= e ? new ye(0, 0) : new ye(this.get(e, this._end), this.get(t, this._end), this._step))
                }, ye.prototype.indexOf = function(e) {
                    var t = e - this._start;
                    if (t % this._step == 0) {
                        var n = t / this._step;
                        if (n >= 0 && n < this.size) return n
                    }
                    return -1
                }, ye.prototype.lastIndexOf = function(e) {
                    return this.indexOf(e)
                }, ye.prototype.__iterate = function(e, t) {
                    for (var n = this.size - 1, r = this._step, i = t ? this._start + n * r : this._start, o = 0; o <= n; o++) {
                        if (!1 === e(i, o, this)) return o + 1;
                        i += t ? -r : r
                    }
                    return o
                }, ye.prototype.__iterator = function(e, t) {
                    var n = this.size - 1,
                        r = this._step,
                        i = t ? this._start + n * r : this._start,
                        o = 0;
                    return new F((function() {
                        var a = i;
                        return i += t ? -r : r, o > n ? {
                            value: void 0,
                            done: !0
                        } : N(e, o++, a)
                    }))
                }, ye.prototype.equals = function(e) {
                    return e instanceof ye ? this._start === e._start && this._end === e._end && this._step === e._step : ge(this, e)
                }, t(_e, n), t(be, _e), t(Se, _e), t(we, _e), _e.Keyed = be, _e.Indexed = Se, _e.Set = we;
                var Ce = "function" == typeof Math.imul && -2 === Math.imul(4294967295, 2) ? Math.imul : function(e, t) {
                    var n = 65535 & (e |= 0),
                        r = 65535 & (t |= 0);
                    return n * r + ((e >>> 16) * r + n * (t >>> 16) << 16 >>> 0) | 0
                };

                function xe(e) {
                    return e >>> 1 & 1073741824 | 3221225471 & e
                }

                function Ee(e) {
                    if (!1 === e || null == e) return 0;
                    if ("function" == typeof e.valueOf && (!1 === (e = e.valueOf()) || null == e)) return 0;
                    if (!0 === e) return 1;
                    var t = typeof e;
                    if ("number" === t) {
                        var n = 0 | e;
                        for (n !== e && (n ^= 4294967295 * e); e > 4294967295;) n ^= e /= 4294967295;
                        return xe(n)
                    }
                    if ("string" === t) return e.length > Re ? function(e) {
                        var t = Le[e];
                        return void 0 === t && (t = ke(e), Be === Ke && (Be = 0, Le = {}), Be++, Le[e] = t), t
                    }(e) : ke(e);
                    if ("function" == typeof e.hashCode) return e.hashCode();
                    if ("object" === t) return function(e) {
                        var t;
                        if (Ie && void 0 !== (t = Te.get(e))) return t;
                        if (void 0 !== (t = e[Ae])) return t;
                        if (!De) {
                            if (void 0 !== (t = e.propertyIsEnumerable && e.propertyIsEnumerable[Ae])) return t;
                            if (void 0 !== (t = function(e) {
                                    if (e && e.nodeType > 0) switch (e.nodeType) {
                                        case 1:
                                            return e.uniqueID;
                                        case 9:
                                            return e.documentElement && e.documentElement.uniqueID
                                    }
                                }(e))) return t
                        }
                        if (t = ++Me, 1073741824 & Me && (Me = 0), Ie) Te.set(e, t);
                        else {
                            if (void 0 !== Oe && !1 === Oe(e)) throw new Error("Non-extensible objects are not allowed as keys.");
                            if (De) Object.defineProperty(e, Ae, {
                                enumerable: !1,
                                configurable: !1,
                                writable: !1,
                                value: t
                            });
                            else if (void 0 !== e.propertyIsEnumerable && e.propertyIsEnumerable === e.constructor.prototype.propertyIsEnumerable) e.propertyIsEnumerable = function() {
                                return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments)
                            }, e.propertyIsEnumerable[Ae] = t;
                            else {
                                if (void 0 === e.nodeType) throw new Error("Unable to set a non-enumerable property on object.");
                                e[Ae] = t
                            }
                        }
                        return t
                    }(e);
                    if ("function" == typeof e.toString) return ke(e.toString());
                    throw new Error("Value type " + t + " cannot be hashed.")
                }

                function ke(e) {
                    for (var t = 0, n = 0; n < e.length; n++) t = 31 * t + e.charCodeAt(n) | 0;
                    return xe(t)
                }
                var Te, Oe = Object.isExtensible,
                    De = function() {
                        try {
                            return Object.defineProperty({}, "@", {}), !0
                        } catch (e) {
                            return !1
                        }
                    }(),
                    Ie = "function" == typeof WeakMap;
                Ie && (Te = new WeakMap);
                var Me = 0,
                    Ae = "__immutablehash__";
                "function" == typeof Symbol && (Ae = Symbol(Ae));
                var Re = 16,
                    Ke = 255,
                    Be = 0,
                    Le = {};

                function Pe(e) {
                    me(e !== 1 / 0, "Cannot perform this action with an infinite size.")
                }

                function Fe(e) {
                    return null == e ? Ze() : Ne(e) && !l(e) ? e : Ze().withMutations((function(t) {
                        var n = r(e);
                        Pe(n.size), n.forEach((function(e, n) {
                            return t.set(n, e)
                        }))
                    }))
                }

                function Ne(e) {
                    return !(!e || !e[je])
                }
                t(Fe, be), Fe.prototype.toString = function() {
                    return this.__toString("Map {", "}")
                }, Fe.prototype.get = function(e, t) {
                    return this._root ? this._root.get(0, void 0, e, t) : t
                }, Fe.prototype.set = function(e, t) {
                    return $e(this, e, t)
                }, Fe.prototype.setIn = function(e, t) {
                    return this.updateIn(e, y, (function() {
                        return t
                    }))
                }, Fe.prototype.remove = function(e) {
                    return $e(this, e, y)
                }, Fe.prototype.deleteIn = function(e) {
                    return this.updateIn(e, (function() {
                        return y
                    }))
                }, Fe.prototype.update = function(e, t, n) {
                    return 1 === arguments.length ? e(this) : this.updateIn([e], t, n)
                }, Fe.prototype.updateIn = function(e, t, n) {
                    n || (n = t, t = void 0);
                    var r = function e(t, n, r, i) {
                        var o = t === y,
                            a = n.next();
                        if (a.done) {
                            var s = o ? r : t,
                                c = i(s);
                            return c === s ? t : c
                        }
                        me(o || t && t.set, "invalid keyPath");
                        var u = a.value,
                            l = o ? y : t.get(u, y),
                            f = e(l, n, r, i);
                        return f === l ? t : f === y ? t.remove(u) : (o ? Ze() : t).set(u, f)
                    }(this, rn(e), t, n);
                    return r === y ? void 0 : r
                }, Fe.prototype.clear = function() {
                    return 0 === this.size ? this : this.__ownerID ? (this.size = 0, this._root = null, this.__hash = void 0, this.__altered = !0, this) : Ze()
                }, Fe.prototype.merge = function() {
                    return rt(this, void 0, arguments)
                }, Fe.prototype.mergeWith = function(t) {
                    var n = e.call(arguments, 1);
                    return rt(this, t, n)
                }, Fe.prototype.mergeIn = function(t) {
                    var n = e.call(arguments, 1);
                    return this.updateIn(t, Ze(), (function(e) {
                        return "function" == typeof e.merge ? e.merge.apply(e, n) : n[n.length - 1]
                    }))
                }, Fe.prototype.mergeDeep = function() {
                    return rt(this, it, arguments)
                }, Fe.prototype.mergeDeepWith = function(t) {
                    var n = e.call(arguments, 1);
                    return rt(this, ot(t), n)
                }, Fe.prototype.mergeDeepIn = function(t) {
                    var n = e.call(arguments, 1);
                    return this.updateIn(t, Ze(), (function(e) {
                        return "function" == typeof e.mergeDeep ? e.mergeDeep.apply(e, n) : n[n.length - 1]
                    }))
                }, Fe.prototype.sort = function(e) {
                    return Dt(qt(this, e))
                }, Fe.prototype.sortBy = function(e, t) {
                    return Dt(qt(this, t, e))
                }, Fe.prototype.withMutations = function(e) {
                    var t = this.asMutable();
                    return e(t), t.wasAltered() ? t.__ensureOwner(this.__ownerID) : this
                }, Fe.prototype.asMutable = function() {
                    return this.__ownerID ? this : this.__ensureOwner(new C)
                }, Fe.prototype.asImmutable = function() {
                    return this.__ensureOwner()
                }, Fe.prototype.wasAltered = function() {
                    return this.__altered
                }, Fe.prototype.__iterator = function(e, t) {
                    return new Xe(this, e, t)
                }, Fe.prototype.__iterate = function(e, t) {
                    var n = this,
                        r = 0;
                    return this._root && this._root.iterate((function(t) {
                        return r++, e(t[1], t[0], n)
                    }), t), r
                }, Fe.prototype.__ensureOwner = function(e) {
                    return e === this.__ownerID ? this : e ? Qe(this.size, this._root, e, this.__hash) : (this.__ownerID = e, this.__altered = !1, this)
                }, Fe.isMap = Ne;
                var ze, je = "@@__IMMUTABLE_MAP__@@",
                    Ue = Fe.prototype;

                function He(e, t) {
                    this.ownerID = e, this.entries = t
                }

                function We(e, t, n) {
                    this.ownerID = e, this.bitmap = t, this.nodes = n
                }

                function Ve(e, t, n) {
                    this.ownerID = e, this.count = t, this.nodes = n
                }

                function qe(e, t, n) {
                    this.ownerID = e, this.keyHash = t, this.entries = n
                }

                function Ge(e, t, n) {
                    this.ownerID = e, this.keyHash = t, this.entry = n
                }

                function Xe(e, t, n) {
                    this._type = t, this._reverse = n, this._stack = e._root && Je(e._root)
                }

                function Ye(e, t) {
                    return N(e, t[0], t[1])
                }

                function Je(e, t) {
                    return {
                        node: e,
                        index: 0,
                        __prev: t
                    }
                }

                function Qe(e, t, n, r) {
                    var i = Object.create(Ue);
                    return i.size = e, i._root = t, i.__ownerID = n, i.__hash = r, i.__altered = !1, i
                }

                function Ze() {
                    return ze || (ze = Qe(0))
                }

                function $e(e, t, n) {
                    var r, i;
                    if (e._root) {
                        var o = S(_),
                            a = S(b);
                        if (r = et(e._root, e.__ownerID, 0, void 0, t, n, o, a), !a.value) return e;
                        i = e.size + (o.value ? n === y ? -1 : 1 : 0)
                    } else {
                        if (n === y) return e;
                        i = 1, r = new He(e.__ownerID, [
                            [t, n]
                        ])
                    }
                    return e.__ownerID ? (e.size = i, e._root = r, e.__hash = void 0, e.__altered = !0, e) : r ? Qe(i, r) : Ze()
                }

                function et(e, t, n, r, i, o, a, s) {
                    return e ? e.update(t, n, r, i, o, a, s) : o === y ? e : (w(s), w(a), new Ge(t, r, [i, o]))
                }

                function tt(e) {
                    return e.constructor === Ge || e.constructor === qe
                }

                function nt(e, t, n, r, i) {
                    if (e.keyHash === r) return new qe(t, r, [e.entry, i]);
                    var o, a = (0 === n ? e.keyHash : e.keyHash >>> n) & m,
                        s = (0 === n ? r : r >>> n) & m;
                    return new We(t, 1 << a | 1 << s, a === s ? [nt(e, t, n + g, r, i)] : (o = new Ge(t, r, i), a < s ? [e, o] : [o, e]))
                }

                function rt(e, t, n) {
                    for (var i = [], o = 0; o < n.length; o++) {
                        var s = n[o],
                            c = r(s);
                        a(s) || (c = c.map((function(e) {
                            return fe(e)
                        }))), i.push(c)
                    }
                    return at(e, t, i)
                }

                function it(e, t, n) {
                    return e && e.mergeDeep && a(t) ? e.mergeDeep(t) : he(e, t) ? e : t
                }

                function ot(e) {
                    return function(t, n, r) {
                        if (t && t.mergeDeepWith && a(n)) return t.mergeDeepWith(e, n);
                        var i = e(t, n, r);
                        return he(t, i) ? t : i
                    }
                }

                function at(e, t, n) {
                    return 0 === (n = n.filter((function(e) {
                        return 0 !== e.size
                    }))).length ? e : 0 !== e.size || e.__ownerID || 1 !== n.length ? e.withMutations((function(e) {
                        for (var r = t ? function(n, r) {
                                e.update(r, y, (function(e) {
                                    return e === y ? n : t(e, n, r)
                                }))
                            } : function(t, n) {
                                e.set(n, t)
                            }, i = 0; i < n.length; i++) n[i].forEach(r)
                    })) : e.constructor(n[0])
                }

                function st(e) {
                    return e = (e = (858993459 & (e -= e >> 1 & 1431655765)) + (e >> 2 & 858993459)) + (e >> 4) & 252645135, e += e >> 8, 127 & (e += e >> 16)
                }

                function ct(e, t, n, r) {
                    var i = r ? e : x(e);
                    return i[t] = n, i
                }
                Ue[je] = !0, Ue.delete = Ue.remove, Ue.removeIn = Ue.deleteIn, He.prototype.get = function(e, t, n, r) {
                    for (var i = this.entries, o = 0, a = i.length; o < a; o++)
                        if (he(n, i[o][0])) return i[o][1];
                    return r
                }, He.prototype.update = function(e, t, n, r, i, o, a) {
                    for (var s = i === y, c = this.entries, u = 0, l = c.length; u < l && !he(r, c[u][0]); u++);
                    var f = u < l;
                    if (f ? c[u][1] === i : s) return this;
                    if (w(a), (s || !f) && w(o), !s || 1 !== c.length) {
                        if (!f && !s && c.length >= ut) return function(e, t, n, r) {
                            e || (e = new C);
                            for (var i = new Ge(e, Ee(n), [n, r]), o = 0; o < t.length; o++) {
                                var a = t[o];
                                i = i.update(e, 0, void 0, a[0], a[1])
                            }
                            return i
                        }(e, c, r, i);
                        var d = e && e === this.ownerID,
                            p = d ? c : x(c);
                        return f ? s ? u === l - 1 ? p.pop() : p[u] = p.pop() : p[u] = [r, i] : p.push([r, i]), d ? (this.entries = p, this) : new He(e, p)
                    }
                }, We.prototype.get = function(e, t, n, r) {
                    void 0 === t && (t = Ee(n));
                    var i = 1 << ((0 === e ? t : t >>> e) & m),
                        o = this.bitmap;
                    return 0 == (o & i) ? r : this.nodes[st(o & i - 1)].get(e + g, t, n, r)
                }, We.prototype.update = function(e, t, n, r, i, o, a) {
                    void 0 === n && (n = Ee(r));
                    var s = (0 === t ? n : n >>> t) & m,
                        c = 1 << s,
                        u = this.bitmap,
                        l = 0 != (u & c);
                    if (!l && i === y) return this;
                    var f = st(u & c - 1),
                        d = this.nodes,
                        p = l ? d[f] : void 0,
                        h = et(p, e, t + g, n, r, i, o, a);
                    if (h === p) return this;
                    if (!l && h && d.length >= lt) return function(e, t, n, r, i) {
                        for (var o = 0, a = new Array(v), s = 0; 0 !== n; s++, n >>>= 1) a[s] = 1 & n ? t[o++] : void 0;
                        return a[r] = i, new Ve(e, o + 1, a)
                    }(e, d, u, s, h);
                    if (l && !h && 2 === d.length && tt(d[1 ^ f])) return d[1 ^ f];
                    if (l && h && 1 === d.length && tt(h)) return h;
                    var _ = e && e === this.ownerID,
                        b = l ? h ? u : u ^ c : u | c,
                        S = l ? h ? ct(d, f, h, _) : function(e, t, n) {
                            var r = e.length - 1;
                            if (n && t === r) return e.pop(), e;
                            for (var i = new Array(r), o = 0, a = 0; a < r; a++) a === t && (o = 1), i[a] = e[a + o];
                            return i
                        }(d, f, _) : function(e, t, n, r) {
                            var i = e.length + 1;
                            if (r && t + 1 === i) return e[t] = n, e;
                            for (var o = new Array(i), a = 0, s = 0; s < i; s++) s === t ? (o[s] = n, a = -1) : o[s] = e[s + a];
                            return o
                        }(d, f, h, _);
                    return _ ? (this.bitmap = b, this.nodes = S, this) : new We(e, b, S)
                }, Ve.prototype.get = function(e, t, n, r) {
                    void 0 === t && (t = Ee(n));
                    var i = (0 === e ? t : t >>> e) & m,
                        o = this.nodes[i];
                    return o ? o.get(e + g, t, n, r) : r
                }, Ve.prototype.update = function(e, t, n, r, i, o, a) {
                    void 0 === n && (n = Ee(r));
                    var s = (0 === t ? n : n >>> t) & m,
                        c = i === y,
                        u = this.nodes,
                        l = u[s];
                    if (c && !l) return this;
                    var f = et(l, e, t + g, n, r, i, o, a);
                    if (f === l) return this;
                    var d = this.count;
                    if (l) {
                        if (!f && --d < ft) return function(e, t, n, r) {
                            for (var i = 0, o = 0, a = new Array(n), s = 0, c = 1, u = t.length; s < u; s++, c <<= 1) {
                                var l = t[s];
                                void 0 !== l && s !== r && (i |= c, a[o++] = l)
                            }
                            return new We(e, i, a)
                        }(e, u, d, s)
                    } else d++;
                    var p = e && e === this.ownerID,
                        h = ct(u, s, f, p);
                    return p ? (this.count = d, this.nodes = h, this) : new Ve(e, d, h)
                }, qe.prototype.get = function(e, t, n, r) {
                    for (var i = this.entries, o = 0, a = i.length; o < a; o++)
                        if (he(n, i[o][0])) return i[o][1];
                    return r
                }, qe.prototype.update = function(e, t, n, r, i, o, a) {
                    void 0 === n && (n = Ee(r));
                    var s = i === y;
                    if (n !== this.keyHash) return s ? this : (w(a), w(o), nt(this, e, t, n, [r, i]));
                    for (var c = this.entries, u = 0, l = c.length; u < l && !he(r, c[u][0]); u++);
                    var f = u < l;
                    if (f ? c[u][1] === i : s) return this;
                    if (w(a), (s || !f) && w(o), s && 2 === l) return new Ge(e, this.keyHash, c[1 ^ u]);
                    var d = e && e === this.ownerID,
                        p = d ? c : x(c);
                    return f ? s ? u === l - 1 ? p.pop() : p[u] = p.pop() : p[u] = [r, i] : p.push([r, i]), d ? (this.entries = p, this) : new qe(e, this.keyHash, p)
                }, Ge.prototype.get = function(e, t, n, r) {
                    return he(n, this.entry[0]) ? this.entry[1] : r
                }, Ge.prototype.update = function(e, t, n, r, i, o, a) {
                    var s = i === y,
                        c = he(r, this.entry[0]);
                    return (c ? i === this.entry[1] : s) ? this : (w(a), s ? void w(o) : c ? e && e === this.ownerID ? (this.entry[1] = i, this) : new Ge(e, this.keyHash, [r, i]) : (w(o), nt(this, e, t, Ee(r), [r, i])))
                }, He.prototype.iterate = qe.prototype.iterate = function(e, t) {
                    for (var n = this.entries, r = 0, i = n.length - 1; r <= i; r++)
                        if (!1 === e(n[t ? i - r : r])) return !1
                }, We.prototype.iterate = Ve.prototype.iterate = function(e, t) {
                    for (var n = this.nodes, r = 0, i = n.length - 1; r <= i; r++) {
                        var o = n[t ? i - r : r];
                        if (o && !1 === o.iterate(e, t)) return !1
                    }
                }, Ge.prototype.iterate = function(e, t) {
                    return e(this.entry)
                }, t(Xe, F), Xe.prototype.next = function() {
                    for (var e = this._type, t = this._stack; t;) {
                        var n, r = t.node,
                            i = t.index++;
                        if (r.entry) {
                            if (0 === i) return Ye(e, r.entry)
                        } else if (r.entries) {
                            if (i <= (n = r.entries.length - 1)) return Ye(e, r.entries[this._reverse ? n - i : i])
                        } else if (i <= (n = r.nodes.length - 1)) {
                            var o = r.nodes[this._reverse ? n - i : i];
                            if (o) {
                                if (o.entry) return Ye(e, o.entry);
                                t = this._stack = Je(o, t)
                            }
                            continue
                        }
                        t = this._stack = this._stack.__prev
                    }
                    return {
                        value: void 0,
                        done: !0
                    }
                };
                var ut = v / 4,
                    lt = v / 2,
                    ft = v / 4;

                function dt(e) {
                    var t = wt();
                    if (null == e) return t;
                    if (pt(e)) return e;
                    var n = i(e),
                        r = n.size;
                    return 0 === r ? t : (Pe(r), r > 0 && r < v ? St(0, r, g, null, new vt(n.toArray())) : t.withMutations((function(e) {
                        e.setSize(r), n.forEach((function(t, n) {
                            return e.set(n, t)
                        }))
                    })))
                }

                function pt(e) {
                    return !(!e || !e[ht])
                }
                t(dt, Se), dt.of = function() {
                    return this(arguments)
                }, dt.prototype.toString = function() {
                    return this.__toString("List [", "]")
                }, dt.prototype.get = function(e, t) {
                    if ((e = k(this, e)) >= 0 && e < this.size) {
                        var n = Et(this, e += this._origin);
                        return n && n.array[e & m]
                    }
                    return t
                }, dt.prototype.set = function(e, t) {
                    return function(e, t, n) {
                        if ((t = k(e, t)) != t) return e;
                        if (t >= e.size || t < 0) return e.withMutations((function(e) {
                            t < 0 ? kt(e, t).set(0, n) : kt(e, 0, t + 1).set(t, n)
                        }));
                        t += e._origin;
                        var r = e._tail,
                            i = e._root,
                            o = S(b);
                        return t >= Ot(e._capacity) ? r = Ct(r, e.__ownerID, 0, t, n, o) : i = Ct(i, e.__ownerID, e._level, t, n, o), o.value ? e.__ownerID ? (e._root = i, e._tail = r, e.__hash = void 0, e.__altered = !0, e) : St(e._origin, e._capacity, e._level, i, r) : e
                    }(this, e, t)
                }, dt.prototype.remove = function(e) {
                    return this.has(e) ? 0 === e ? this.shift() : e === this.size - 1 ? this.pop() : this.splice(e, 1) : this
                }, dt.prototype.insert = function(e, t) {
                    return this.splice(e, 0, t)
                }, dt.prototype.clear = function() {
                    return 0 === this.size ? this : this.__ownerID ? (this.size = this._origin = this._capacity = 0, this._level = g, this._root = this._tail = null, this.__hash = void 0, this.__altered = !0, this) : wt()
                }, dt.prototype.push = function() {
                    var e = arguments,
                        t = this.size;
                    return this.withMutations((function(n) {
                        kt(n, 0, t + e.length);
                        for (var r = 0; r < e.length; r++) n.set(t + r, e[r])
                    }))
                }, dt.prototype.pop = function() {
                    return kt(this, 0, -1)
                }, dt.prototype.unshift = function() {
                    var e = arguments;
                    return this.withMutations((function(t) {
                        kt(t, -e.length);
                        for (var n = 0; n < e.length; n++) t.set(n, e[n])
                    }))
                }, dt.prototype.shift = function() {
                    return kt(this, 1)
                }, dt.prototype.merge = function() {
                    return Tt(this, void 0, arguments)
                }, dt.prototype.mergeWith = function(t) {
                    var n = e.call(arguments, 1);
                    return Tt(this, t, n)
                }, dt.prototype.mergeDeep = function() {
                    return Tt(this, it, arguments)
                }, dt.prototype.mergeDeepWith = function(t) {
                    var n = e.call(arguments, 1);
                    return Tt(this, ot(t), n)
                }, dt.prototype.setSize = function(e) {
                    return kt(this, 0, e)
                }, dt.prototype.slice = function(e, t) {
                    var n = this.size;
                    return O(e, t, n) ? this : kt(this, D(e, n), I(t, n))
                }, dt.prototype.__iterator = function(e, t) {
                    var n = 0,
                        r = bt(this, t);
                    return new F((function() {
                        var t = r();
                        return t === _t ? {
                            value: void 0,
                            done: !0
                        } : N(e, n++, t)
                    }))
                }, dt.prototype.__iterate = function(e, t) {
                    for (var n, r = 0, i = bt(this, t);
                        (n = i()) !== _t && !1 !== e(n, r++, this););
                    return r
                }, dt.prototype.__ensureOwner = function(e) {
                    return e === this.__ownerID ? this : e ? St(this._origin, this._capacity, this._level, this._root, this._tail, e, this.__hash) : (this.__ownerID = e, this)
                }, dt.isList = pt;
                var ht = "@@__IMMUTABLE_LIST__@@",
                    gt = dt.prototype;

                function vt(e, t) {
                    this.array = e, this.ownerID = t
                }
                gt[ht] = !0, gt.delete = gt.remove, gt.setIn = Ue.setIn, gt.deleteIn = gt.removeIn = Ue.removeIn, gt.update = Ue.update, gt.updateIn = Ue.updateIn, gt.mergeIn = Ue.mergeIn, gt.mergeDeepIn = Ue.mergeDeepIn, gt.withMutations = Ue.withMutations, gt.asMutable = Ue.asMutable, gt.asImmutable = Ue.asImmutable, gt.wasAltered = Ue.wasAltered, vt.prototype.removeBefore = function(e, t, n) {
                    if (n === t ? 1 << t : 0 === this.array.length) return this;
                    var r = n >>> t & m;
                    if (r >= this.array.length) return new vt([], e);
                    var i, o = 0 === r;
                    if (t > 0) {
                        var a = this.array[r];
                        if ((i = a && a.removeBefore(e, t - g, n)) === a && o) return this
                    }
                    if (o && !i) return this;
                    var s = xt(this, e);
                    if (!o)
                        for (var c = 0; c < r; c++) s.array[c] = void 0;
                    return i && (s.array[r] = i), s
                }, vt.prototype.removeAfter = function(e, t, n) {
                    if (n === (t ? 1 << t : 0) || 0 === this.array.length) return this;
                    var r, i = n - 1 >>> t & m;
                    if (i >= this.array.length) return this;
                    if (t > 0) {
                        var o = this.array[i];
                        if ((r = o && o.removeAfter(e, t - g, n)) === o && i === this.array.length - 1) return this
                    }
                    var a = xt(this, e);
                    return a.array.splice(i + 1), r && (a.array[i] = r), a
                };
                var mt, yt, _t = {};

                function bt(e, t) {
                    var n = e._origin,
                        r = e._capacity,
                        i = Ot(r),
                        o = e._tail;
                    return a(e._root, e._level, 0);

                    function a(e, s, c) {
                        return 0 === s ? function(e, a) {
                            var s = a === i ? o && o.array : e && e.array,
                                c = a > n ? 0 : n - a,
                                u = r - a;
                            return u > v && (u = v),
                                function() {
                                    if (c === u) return _t;
                                    var e = t ? --u : c++;
                                    return s && s[e]
                                }
                        }(e, c) : function(e, i, o) {
                            var s, c = e && e.array,
                                u = o > n ? 0 : n - o >> i,
                                l = 1 + (r - o >> i);
                            return l > v && (l = v),
                                function() {
                                    for (;;) {
                                        if (s) {
                                            var e = s();
                                            if (e !== _t) return e;
                                            s = null
                                        }
                                        if (u === l) return _t;
                                        var n = t ? --l : u++;
                                        s = a(c && c[n], i - g, o + (n << i))
                                    }
                                }
                        }(e, s, c)
                    }
                }

                function St(e, t, n, r, i, o, a) {
                    var s = Object.create(gt);
                    return s.size = t - e, s._origin = e, s._capacity = t, s._level = n, s._root = r, s._tail = i, s.__ownerID = o, s.__hash = a, s.__altered = !1, s
                }

                function wt() {
                    return mt || (mt = St(0, 0, g))
                }

                function Ct(e, t, n, r, i, o) {
                    var a, s = r >>> n & m,
                        c = e && s < e.array.length;
                    if (!c && void 0 === i) return e;
                    if (n > 0) {
                        var u = e && e.array[s],
                            l = Ct(u, t, n - g, r, i, o);
                        return l === u ? e : ((a = xt(e, t)).array[s] = l, a)
                    }
                    return c && e.array[s] === i ? e : (w(o), a = xt(e, t), void 0 === i && s === a.array.length - 1 ? a.array.pop() : a.array[s] = i, a)
                }

                function xt(e, t) {
                    return t && e && t === e.ownerID ? e : new vt(e ? e.array.slice() : [], t)
                }

                function Et(e, t) {
                    if (t >= Ot(e._capacity)) return e._tail;
                    if (t < 1 << e._level + g) {
                        for (var n = e._root, r = e._level; n && r > 0;) n = n.array[t >>> r & m], r -= g;
                        return n
                    }
                }

                function kt(e, t, n) {
                    void 0 !== t && (t |= 0), void 0 !== n && (n |= 0);
                    var r = e.__ownerID || new C,
                        i = e._origin,
                        o = e._capacity,
                        a = i + t,
                        s = void 0 === n ? o : n < 0 ? o + n : i + n;
                    if (a === i && s === o) return e;
                    if (a >= s) return e.clear();
                    for (var c = e._level, u = e._root, l = 0; a + l < 0;) u = new vt(u && u.array.length ? [void 0, u] : [], r), l += 1 << (c += g);
                    l && (a += l, i += l, s += l, o += l);
                    for (var f = Ot(o), d = Ot(s); d >= 1 << c + g;) u = new vt(u && u.array.length ? [u] : [], r), c += g;
                    var p = e._tail,
                        h = d < f ? Et(e, s - 1) : d > f ? new vt([], r) : p;
                    if (p && d > f && a < o && p.array.length) {
                        for (var v = u = xt(u, r), y = c; y > g; y -= g) {
                            var _ = f >>> y & m;
                            v = v.array[_] = xt(v.array[_], r)
                        }
                        v.array[f >>> g & m] = p
                    }
                    if (s < o && (h = h && h.removeAfter(r, 0, s)), a >= d) a -= d, s -= d, c = g, u = null, h = h && h.removeBefore(r, 0, a);
                    else if (a > i || d < f) {
                        for (l = 0; u;) {
                            var b = a >>> c & m;
                            if (b !== d >>> c & m) break;
                            b && (l += (1 << c) * b), c -= g, u = u.array[b]
                        }
                        u && a > i && (u = u.removeBefore(r, c, a - l)), u && d < f && (u = u.removeAfter(r, c, d - l)), l && (a -= l, s -= l)
                    }
                    return e.__ownerID ? (e.size = s - a, e._origin = a, e._capacity = s, e._level = c, e._root = u, e._tail = h, e.__hash = void 0, e.__altered = !0, e) : St(a, s, c, u, h)
                }

                function Tt(e, t, n) {
                    for (var r = [], o = 0, s = 0; s < n.length; s++) {
                        var c = n[s],
                            u = i(c);
                        u.size > o && (o = u.size), a(c) || (u = u.map((function(e) {
                            return fe(e)
                        }))), r.push(u)
                    }
                    return o > e.size && (e = e.setSize(o)), at(e, t, r)
                }

                function Ot(e) {
                    return e < v ? 0 : e - 1 >>> g << g
                }

                function Dt(e) {
                    return null == e ? At() : It(e) ? e : At().withMutations((function(t) {
                        var n = r(e);
                        Pe(n.size), n.forEach((function(e, n) {
                            return t.set(n, e)
                        }))
                    }))
                }

                function It(e) {
                    return Ne(e) && l(e)
                }

                function Mt(e, t, n, r) {
                    var i = Object.create(Dt.prototype);
                    return i.size = e ? e.size : 0, i._map = e, i._list = t, i.__ownerID = n, i.__hash = r, i
                }

                function At() {
                    return yt || (yt = Mt(Ze(), wt()))
                }

                function Rt(e, t, n) {
                    var r, i, o = e._map,
                        a = e._list,
                        s = o.get(t),
                        c = void 0 !== s;
                    if (n === y) {
                        if (!c) return e;
                        a.size >= v && a.size >= 2 * o.size ? (r = (i = a.filter((function(e, t) {
                            return void 0 !== e && s !== t
                        }))).toKeyedSeq().map((function(e) {
                            return e[0]
                        })).flip().toMap(), e.__ownerID && (r.__ownerID = i.__ownerID = e.__ownerID)) : (r = o.remove(t), i = s === a.size - 1 ? a.pop() : a.set(s, void 0))
                    } else if (c) {
                        if (n === a.get(s)[1]) return e;
                        r = o, i = a.set(s, [t, n])
                    } else r = o.set(t, a.size), i = a.set(a.size, [t, n]);
                    return e.__ownerID ? (e.size = r.size, e._map = r, e._list = i, e.__hash = void 0, e) : Mt(r, i)
                }

                function Kt(e, t) {
                    this._iter = e, this._useKeys = t, this.size = e.size
                }

                function Bt(e) {
                    this._iter = e, this.size = e.size
                }

                function Lt(e) {
                    this._iter = e, this.size = e.size
                }

                function Pt(e) {
                    this._iter = e, this.size = e.size
                }

                function Ft(e) {
                    var t = en(e);
                    return t._iter = e, t.size = e.size, t.flip = function() {
                        return e
                    }, t.reverse = function() {
                        var t = e.reverse.apply(this);
                        return t.flip = function() {
                            return e.reverse()
                        }, t
                    }, t.has = function(t) {
                        return e.includes(t)
                    }, t.includes = function(t) {
                        return e.has(t)
                    }, t.cacheResult = tn, t.__iterateUncached = function(t, n) {
                        var r = this;
                        return e.__iterate((function(e, n) {
                            return !1 !== t(n, e, r)
                        }), n)
                    }, t.__iteratorUncached = function(t, n) {
                        if (t === K) {
                            var r = e.__iterator(t, n);
                            return new F((function() {
                                var e = r.next();
                                if (!e.done) {
                                    var t = e.value[0];
                                    e.value[0] = e.value[1], e.value[1] = t
                                }
                                return e
                            }))
                        }
                        return e.__iterator(t === R ? A : R, n)
                    }, t
                }

                function Nt(e, t, n) {
                    var r = en(e);
                    return r.size = e.size, r.has = function(t) {
                        return e.has(t)
                    }, r.get = function(r, i) {
                        var o = e.get(r, y);
                        return o === y ? i : t.call(n, o, r, e)
                    }, r.__iterateUncached = function(r, i) {
                        var o = this;
                        return e.__iterate((function(e, i, a) {
                            return !1 !== r(t.call(n, e, i, a), i, o)
                        }), i)
                    }, r.__iteratorUncached = function(r, i) {
                        var o = e.__iterator(K, i);
                        return new F((function() {
                            var i = o.next();
                            if (i.done) return i;
                            var a = i.value,
                                s = a[0];
                            return N(r, s, t.call(n, a[1], s, e), i)
                        }))
                    }, r
                }

                function zt(e, t) {
                    var n = en(e);
                    return n._iter = e, n.size = e.size, n.reverse = function() {
                        return e
                    }, e.flip && (n.flip = function() {
                        var t = Ft(e);
                        return t.reverse = function() {
                            return e.flip()
                        }, t
                    }), n.get = function(n, r) {
                        return e.get(t ? n : -1 - n, r)
                    }, n.has = function(n) {
                        return e.has(t ? n : -1 - n)
                    }, n.includes = function(t) {
                        return e.includes(t)
                    }, n.cacheResult = tn, n.__iterate = function(t, n) {
                        var r = this;
                        return e.__iterate((function(e, n) {
                            return t(e, n, r)
                        }), !n)
                    }, n.__iterator = function(t, n) {
                        return e.__iterator(t, !n)
                    }, n
                }

                function jt(e, t, n, r) {
                    var i = en(e);
                    return r && (i.has = function(r) {
                        var i = e.get(r, y);
                        return i !== y && !!t.call(n, i, r, e)
                    }, i.get = function(r, i) {
                        var o = e.get(r, y);
                        return o !== y && t.call(n, o, r, e) ? o : i
                    }), i.__iterateUncached = function(i, o) {
                        var a = this,
                            s = 0;
                        return e.__iterate((function(e, o, c) {
                            if (t.call(n, e, o, c)) return s++, i(e, r ? o : s - 1, a)
                        }), o), s
                    }, i.__iteratorUncached = function(i, o) {
                        var a = e.__iterator(K, o),
                            s = 0;
                        return new F((function() {
                            for (;;) {
                                var o = a.next();
                                if (o.done) return o;
                                var c = o.value,
                                    u = c[0],
                                    l = c[1];
                                if (t.call(n, l, u, e)) return N(i, r ? u : s++, l, o)
                            }
                        }))
                    }, i
                }

                function Ut(e, t, n, r) {
                    var i = e.size;
                    if (void 0 !== t && (t |= 0), void 0 !== n && (n |= 0), O(t, n, i)) return e;
                    var o = D(t, i),
                        a = I(n, i);
                    if (o != o || a != a) return Ut(e.toSeq().cacheResult(), t, n, r);
                    var s, c = a - o;
                    c == c && (s = c < 0 ? 0 : c);
                    var u = en(e);
                    return u.size = 0 === s ? s : e.size && s || void 0, !r && ie(e) && s >= 0 && (u.get = function(t, n) {
                        return (t = k(this, t)) >= 0 && t < s ? e.get(t + o, n) : n
                    }), u.__iterateUncached = function(t, n) {
                        var i = this;
                        if (0 === s) return 0;
                        if (n) return this.cacheResult().__iterate(t, n);
                        var a = 0,
                            c = !0,
                            u = 0;
                        return e.__iterate((function(e, n) {
                            if (!c || !(c = a++ < o)) return u++, !1 !== t(e, r ? n : u - 1, i) && u !== s
                        })), u
                    }, u.__iteratorUncached = function(t, n) {
                        if (0 !== s && n) return this.cacheResult().__iterator(t, n);
                        var i = 0 !== s && e.__iterator(t, n),
                            a = 0,
                            c = 0;
                        return new F((function() {
                            for (; a++ < o;) i.next();
                            if (++c > s) return {
                                value: void 0,
                                done: !0
                            };
                            var e = i.next();
                            return r || t === R ? e : N(t, c - 1, t === A ? void 0 : e.value[1], e)
                        }))
                    }, u
                }

                function Ht(e, t, n, r) {
                    var i = en(e);
                    return i.__iterateUncached = function(i, o) {
                        var a = this;
                        if (o) return this.cacheResult().__iterate(i, o);
                        var s = !0,
                            c = 0;
                        return e.__iterate((function(e, o, u) {
                            if (!s || !(s = t.call(n, e, o, u))) return c++, i(e, r ? o : c - 1, a)
                        })), c
                    }, i.__iteratorUncached = function(i, o) {
                        var a = this;
                        if (o) return this.cacheResult().__iterator(i, o);
                        var s = e.__iterator(K, o),
                            c = !0,
                            u = 0;
                        return new F((function() {
                            var e, o, l;
                            do {
                                if ((e = s.next()).done) return r || i === R ? e : N(i, u++, i === A ? void 0 : e.value[1], e);
                                var f = e.value;
                                o = f[0], l = f[1], c && (c = t.call(n, l, o, a))
                            } while (c);
                            return i === K ? e : N(i, o, l, e)
                        }))
                    }, i
                }

                function Wt(e, t) {
                    var n = s(e),
                        i = [e].concat(t).map((function(e) {
                            return a(e) ? n && (e = r(e)) : e = n ? ae(e) : se(Array.isArray(e) ? e : [e]), e
                        })).filter((function(e) {
                            return 0 !== e.size
                        }));
                    if (0 === i.length) return e;
                    if (1 === i.length) {
                        var o = i[0];
                        if (o === e || n && s(o) || c(e) && c(o)) return o
                    }
                    var u = new ee(i);
                    return n ? u = u.toKeyedSeq() : c(e) || (u = u.toSetSeq()), (u = u.flatten(!0)).size = i.reduce((function(e, t) {
                        if (void 0 !== e) {
                            var n = t.size;
                            if (void 0 !== n) return e + n
                        }
                    }), 0), u
                }

                function Vt(e, t, n) {
                    var r = en(e);
                    return r.__iterateUncached = function(r, i) {
                        var o = 0,
                            s = !1;
                        return function e(c, u) {
                            var l = this;
                            c.__iterate((function(i, c) {
                                return (!t || u < t) && a(i) ? e(i, u + 1) : !1 === r(i, n ? c : o++, l) && (s = !0), !s
                            }), i)
                        }(e, 0), o
                    }, r.__iteratorUncached = function(r, i) {
                        var o = e.__iterator(r, i),
                            s = [],
                            c = 0;
                        return new F((function() {
                            for (; o;) {
                                var e = o.next();
                                if (!1 === e.done) {
                                    var u = e.value;
                                    if (r === K && (u = u[1]), t && !(s.length < t) || !a(u)) return n ? e : N(r, c++, u, e);
                                    s.push(o), o = u.__iterator(r, i)
                                } else o = s.pop()
                            }
                            return {
                                value: void 0,
                                done: !0
                            }
                        }))
                    }, r
                }

                function qt(e, t, n) {
                    t || (t = nn);
                    var r = s(e),
                        i = 0,
                        o = e.toSeq().map((function(t, r) {
                            return [r, t, i++, n ? n(t, r, e) : t]
                        })).toArray();
                    return o.sort((function(e, n) {
                        return t(e[3], n[3]) || e[2] - n[2]
                    })).forEach(r ? function(e, t) {
                        o[t].length = 2
                    } : function(e, t) {
                        o[t] = e[1]
                    }), r ? G(o) : c(e) ? X(o) : Y(o)
                }

                function Gt(e, t, n) {
                    if (t || (t = nn), n) {
                        var r = e.toSeq().map((function(t, r) {
                            return [t, n(t, r, e)]
                        })).reduce((function(e, n) {
                            return Xt(t, e[1], n[1]) ? n : e
                        }));
                        return r && r[0]
                    }
                    return e.reduce((function(e, n) {
                        return Xt(t, e, n) ? n : e
                    }))
                }

                function Xt(e, t, n) {
                    var r = e(n, t);
                    return 0 === r && n !== t && (null == n || n != n) || r > 0
                }

                function Yt(e, t, r) {
                    var i = en(e);
                    return i.size = new ee(r).map((function(e) {
                        return e.size
                    })).min(), i.__iterate = function(e, t) {
                        for (var n, r = this.__iterator(R, t), i = 0; !(n = r.next()).done && !1 !== e(n.value, i++, this););
                        return i
                    }, i.__iteratorUncached = function(e, i) {
                        var o = r.map((function(e) {
                                return e = n(e), H(i ? e.reverse() : e)
                            })),
                            a = 0,
                            s = !1;
                        return new F((function() {
                            var n;
                            return s || (n = o.map((function(e) {
                                return e.next()
                            })), s = n.some((function(e) {
                                return e.done
                            }))), s ? {
                                value: void 0,
                                done: !0
                            } : N(e, a++, t.apply(null, n.map((function(e) {
                                return e.value
                            }))))
                        }))
                    }, i
                }

                function Jt(e, t) {
                    return ie(e) ? t : e.constructor(t)
                }

                function Qt(e) {
                    if (e !== Object(e)) throw new TypeError("Expected [K, V] tuple: " + e)
                }

                function Zt(e) {
                    return Pe(e.size), E(e)
                }

                function $t(e) {
                    return s(e) ? r : c(e) ? i : o
                }

                function en(e) {
                    return Object.create((s(e) ? G : c(e) ? X : Y).prototype)
                }

                function tn() {
                    return this._iter.cacheResult ? (this._iter.cacheResult(), this.size = this._iter.size, this) : q.prototype.cacheResult.call(this)
                }

                function nn(e, t) {
                    return e > t ? 1 : e < t ? -1 : 0
                }

                function rn(e) {
                    var t = H(e);
                    if (!t) {
                        if (!V(e)) throw new TypeError("Expected iterable or array-like: " + e);
                        t = H(n(e))
                    }
                    return t
                }

                function on(e, t) {
                    var n, r = function(o) {
                            if (o instanceof r) return o;
                            if (!(this instanceof r)) return new r(o);
                            if (!n) {
                                n = !0;
                                var a = Object.keys(e);
                                ! function(e, t) {
                                    try {
                                        t.forEach(un.bind(void 0, e))
                                    } catch (n) {}
                                }(i, a), i.size = a.length, i._name = t, i._keys = a, i._defaultValues = e
                            }
                            this._map = Fe(o)
                        },
                        i = r.prototype = Object.create(an);
                    return i.constructor = r, r
                }
                t(Dt, Fe), Dt.of = function() {
                    return this(arguments)
                }, Dt.prototype.toString = function() {
                    return this.__toString("OrderedMap {", "}")
                }, Dt.prototype.get = function(e, t) {
                    var n = this._map.get(e);
                    return void 0 !== n ? this._list.get(n)[1] : t
                }, Dt.prototype.clear = function() {
                    return 0 === this.size ? this : this.__ownerID ? (this.size = 0, this._map.clear(), this._list.clear(), this) : At()
                }, Dt.prototype.set = function(e, t) {
                    return Rt(this, e, t)
                }, Dt.prototype.remove = function(e) {
                    return Rt(this, e, y)
                }, Dt.prototype.wasAltered = function() {
                    return this._map.wasAltered() || this._list.wasAltered()
                }, Dt.prototype.__iterate = function(e, t) {
                    var n = this;
                    return this._list.__iterate((function(t) {
                        return t && e(t[1], t[0], n)
                    }), t)
                }, Dt.prototype.__iterator = function(e, t) {
                    return this._list.fromEntrySeq().__iterator(e, t)
                }, Dt.prototype.__ensureOwner = function(e) {
                    if (e === this.__ownerID) return this;
                    var t = this._map.__ensureOwner(e),
                        n = this._list.__ensureOwner(e);
                    return e ? Mt(t, n, e, this.__hash) : (this.__ownerID = e, this._map = t, this._list = n, this)
                }, Dt.isOrderedMap = It, Dt.prototype[h] = !0, Dt.prototype.delete = Dt.prototype.remove, t(Kt, G), Kt.prototype.get = function(e, t) {
                    return this._iter.get(e, t)
                }, Kt.prototype.has = function(e) {
                    return this._iter.has(e)
                }, Kt.prototype.valueSeq = function() {
                    return this._iter.valueSeq()
                }, Kt.prototype.reverse = function() {
                    var e = this,
                        t = zt(this, !0);
                    return this._useKeys || (t.valueSeq = function() {
                        return e._iter.toSeq().reverse()
                    }), t
                }, Kt.prototype.map = function(e, t) {
                    var n = this,
                        r = Nt(this, e, t);
                    return this._useKeys || (r.valueSeq = function() {
                        return n._iter.toSeq().map(e, t)
                    }), r
                }, Kt.prototype.__iterate = function(e, t) {
                    var n, r = this;
                    return this._iter.__iterate(this._useKeys ? function(t, n) {
                        return e(t, n, r)
                    } : (n = t ? Zt(this) : 0, function(i) {
                        return e(i, t ? --n : n++, r)
                    }), t)
                }, Kt.prototype.__iterator = function(e, t) {
                    if (this._useKeys) return this._iter.__iterator(e, t);
                    var n = this._iter.__iterator(R, t),
                        r = t ? Zt(this) : 0;
                    return new F((function() {
                        var i = n.next();
                        return i.done ? i : N(e, t ? --r : r++, i.value, i)
                    }))
                }, Kt.prototype[h] = !0, t(Bt, X), Bt.prototype.includes = function(e) {
                    return this._iter.includes(e)
                }, Bt.prototype.__iterate = function(e, t) {
                    var n = this,
                        r = 0;
                    return this._iter.__iterate((function(t) {
                        return e(t, r++, n)
                    }), t)
                }, Bt.prototype.__iterator = function(e, t) {
                    var n = this._iter.__iterator(R, t),
                        r = 0;
                    return new F((function() {
                        var t = n.next();
                        return t.done ? t : N(e, r++, t.value, t)
                    }))
                }, t(Lt, Y), Lt.prototype.has = function(e) {
                    return this._iter.includes(e)
                }, Lt.prototype.__iterate = function(e, t) {
                    var n = this;
                    return this._iter.__iterate((function(t) {
                        return e(t, t, n)
                    }), t)
                }, Lt.prototype.__iterator = function(e, t) {
                    var n = this._iter.__iterator(R, t);
                    return new F((function() {
                        var t = n.next();
                        return t.done ? t : N(e, t.value, t.value, t)
                    }))
                }, t(Pt, G), Pt.prototype.entrySeq = function() {
                    return this._iter.toSeq()
                }, Pt.prototype.__iterate = function(e, t) {
                    var n = this;
                    return this._iter.__iterate((function(t) {
                        if (t) {
                            Qt(t);
                            var r = a(t);
                            return e(r ? t.get(1) : t[1], r ? t.get(0) : t[0], n)
                        }
                    }), t)
                }, Pt.prototype.__iterator = function(e, t) {
                    var n = this._iter.__iterator(R, t);
                    return new F((function() {
                        for (;;) {
                            var t = n.next();
                            if (t.done) return t;
                            var r = t.value;
                            if (r) {
                                Qt(r);
                                var i = a(r);
                                return N(e, i ? r.get(0) : r[0], i ? r.get(1) : r[1], t)
                            }
                        }
                    }))
                }, Bt.prototype.cacheResult = Kt.prototype.cacheResult = Lt.prototype.cacheResult = Pt.prototype.cacheResult = tn, t(on, be), on.prototype.toString = function() {
                    return this.__toString(cn(this) + " {", "}")
                }, on.prototype.has = function(e) {
                    return this._defaultValues.hasOwnProperty(e)
                }, on.prototype.get = function(e, t) {
                    if (!this.has(e)) return t;
                    var n = this._defaultValues[e];
                    return this._map ? this._map.get(e, n) : n
                }, on.prototype.clear = function() {
                    if (this.__ownerID) return this._map && this._map.clear(), this;
                    var e = this.constructor;
                    return e._empty || (e._empty = sn(this, Ze()))
                }, on.prototype.set = function(e, t) {
                    if (!this.has(e)) throw new Error('Cannot set unknown key "' + e + '" on ' + cn(this));
                    var n = this._map && this._map.set(e, t);
                    return this.__ownerID || n === this._map ? this : sn(this, n)
                }, on.prototype.remove = function(e) {
                    if (!this.has(e)) return this;
                    var t = this._map && this._map.remove(e);
                    return this.__ownerID || t === this._map ? this : sn(this, t)
                }, on.prototype.wasAltered = function() {
                    return this._map.wasAltered()
                }, on.prototype.__iterator = function(e, t) {
                    var n = this;
                    return r(this._defaultValues).map((function(e, t) {
                        return n.get(t)
                    })).__iterator(e, t)
                }, on.prototype.__iterate = function(e, t) {
                    var n = this;
                    return r(this._defaultValues).map((function(e, t) {
                        return n.get(t)
                    })).__iterate(e, t)
                }, on.prototype.__ensureOwner = function(e) {
                    if (e === this.__ownerID) return this;
                    var t = this._map && this._map.__ensureOwner(e);
                    return e ? sn(this, t, e) : (this.__ownerID = e, this._map = t, this)
                };
                var an = on.prototype;

                function sn(e, t, n) {
                    var r = Object.create(Object.getPrototypeOf(e));
                    return r._map = t, r.__ownerID = n, r
                }

                function cn(e) {
                    return e._name || e.constructor.name || "Record"
                }

                function un(e, t) {
                    Object.defineProperty(e, t, {
                        get: function() {
                            return this.get(t)
                        },
                        set: function(e) {
                            me(this.__ownerID, "Cannot set on an immutable record."), this.set(t, e)
                        }
                    })
                }

                function ln(e) {
                    return null == e ? mn() : fn(e) && !l(e) ? e : mn().withMutations((function(t) {
                        var n = o(e);
                        Pe(n.size), n.forEach((function(e) {
                            return t.add(e)
                        }))
                    }))
                }

                function fn(e) {
                    return !(!e || !e[pn])
                }
                an.delete = an.remove, an.deleteIn = an.removeIn = Ue.removeIn, an.merge = Ue.merge, an.mergeWith = Ue.mergeWith, an.mergeIn = Ue.mergeIn, an.mergeDeep = Ue.mergeDeep, an.mergeDeepWith = Ue.mergeDeepWith, an.mergeDeepIn = Ue.mergeDeepIn, an.setIn = Ue.setIn, an.update = Ue.update, an.updateIn = Ue.updateIn, an.withMutations = Ue.withMutations, an.asMutable = Ue.asMutable, an.asImmutable = Ue.asImmutable, t(ln, we), ln.of = function() {
                    return this(arguments)
                }, ln.fromKeys = function(e) {
                    return this(r(e).keySeq())
                }, ln.prototype.toString = function() {
                    return this.__toString("Set {", "}")
                }, ln.prototype.has = function(e) {
                    return this._map.has(e)
                }, ln.prototype.add = function(e) {
                    return gn(this, this._map.set(e, !0))
                }, ln.prototype.remove = function(e) {
                    return gn(this, this._map.remove(e))
                }, ln.prototype.clear = function() {
                    return gn(this, this._map.clear())
                }, ln.prototype.union = function() {
                    var t = e.call(arguments, 0);
                    return 0 === (t = t.filter((function(e) {
                        return 0 !== e.size
                    }))).length ? this : 0 !== this.size || this.__ownerID || 1 !== t.length ? this.withMutations((function(e) {
                        for (var n = 0; n < t.length; n++) o(t[n]).forEach((function(t) {
                            return e.add(t)
                        }))
                    })) : this.constructor(t[0])
                }, ln.prototype.intersect = function() {
                    var t = e.call(arguments, 0);
                    if (0 === t.length) return this;
                    t = t.map((function(e) {
                        return o(e)
                    }));
                    var n = this;
                    return this.withMutations((function(e) {
                        n.forEach((function(n) {
                            t.every((function(e) {
                                return e.includes(n)
                            })) || e.remove(n)
                        }))
                    }))
                }, ln.prototype.subtract = function() {
                    var t = e.call(arguments, 0);
                    if (0 === t.length) return this;
                    t = t.map((function(e) {
                        return o(e)
                    }));
                    var n = this;
                    return this.withMutations((function(e) {
                        n.forEach((function(n) {
                            t.some((function(e) {
                                return e.includes(n)
                            })) && e.remove(n)
                        }))
                    }))
                }, ln.prototype.merge = function() {
                    return this.union.apply(this, arguments)
                }, ln.prototype.mergeWith = function(t) {
                    var n = e.call(arguments, 1);
                    return this.union.apply(this, n)
                }, ln.prototype.sort = function(e) {
                    return yn(qt(this, e))
                }, ln.prototype.sortBy = function(e, t) {
                    return yn(qt(this, t, e))
                }, ln.prototype.wasAltered = function() {
                    return this._map.wasAltered()
                }, ln.prototype.__iterate = function(e, t) {
                    var n = this;
                    return this._map.__iterate((function(t, r) {
                        return e(r, r, n)
                    }), t)
                }, ln.prototype.__iterator = function(e, t) {
                    return this._map.map((function(e, t) {
                        return t
                    })).__iterator(e, t)
                }, ln.prototype.__ensureOwner = function(e) {
                    if (e === this.__ownerID) return this;
                    var t = this._map.__ensureOwner(e);
                    return e ? this.__make(t, e) : (this.__ownerID = e, this._map = t, this)
                }, ln.isSet = fn;
                var dn, pn = "@@__IMMUTABLE_SET__@@",
                    hn = ln.prototype;

                function gn(e, t) {
                    return e.__ownerID ? (e.size = t.size, e._map = t, e) : t === e._map ? e : 0 === t.size ? e.__empty() : e.__make(t)
                }

                function vn(e, t) {
                    var n = Object.create(hn);
                    return n.size = e ? e.size : 0, n._map = e, n.__ownerID = t, n
                }

                function mn() {
                    return dn || (dn = vn(Ze()))
                }

                function yn(e) {
                    return null == e ? Cn() : _n(e) ? e : Cn().withMutations((function(t) {
                        var n = o(e);
                        Pe(n.size), n.forEach((function(e) {
                            return t.add(e)
                        }))
                    }))
                }

                function _n(e) {
                    return fn(e) && l(e)
                }
                hn[pn] = !0, hn.delete = hn.remove, hn.mergeDeep = hn.merge, hn.mergeDeepWith = hn.mergeWith, hn.withMutations = Ue.withMutations, hn.asMutable = Ue.asMutable, hn.asImmutable = Ue.asImmutable, hn.__empty = mn, hn.__make = vn, t(yn, ln), yn.of = function() {
                    return this(arguments)
                }, yn.fromKeys = function(e) {
                    return this(r(e).keySeq())
                }, yn.prototype.toString = function() {
                    return this.__toString("OrderedSet {", "}")
                }, yn.isOrderedSet = _n;
                var bn, Sn = yn.prototype;

                function wn(e, t) {
                    var n = Object.create(Sn);
                    return n.size = e ? e.size : 0, n._map = e, n.__ownerID = t, n
                }

                function Cn() {
                    return bn || (bn = wn(At()))
                }

                function xn(e) {
                    return null == e ? In() : En(e) ? e : In().unshiftAll(e)
                }

                function En(e) {
                    return !(!e || !e[Tn])
                }
                Sn[h] = !0, Sn.__empty = Cn, Sn.__make = wn, t(xn, Se), xn.of = function() {
                    return this(arguments)
                }, xn.prototype.toString = function() {
                    return this.__toString("Stack [", "]")
                }, xn.prototype.get = function(e, t) {
                    var n = this._head;
                    for (e = k(this, e); n && e--;) n = n.next;
                    return n ? n.value : t
                }, xn.prototype.peek = function() {
                    return this._head && this._head.value
                }, xn.prototype.push = function() {
                    if (0 === arguments.length) return this;
                    for (var e = this.size + arguments.length, t = this._head, n = arguments.length - 1; n >= 0; n--) t = {
                        value: arguments[n],
                        next: t
                    };
                    return this.__ownerID ? (this.size = e, this._head = t, this.__hash = void 0, this.__altered = !0, this) : Dn(e, t)
                }, xn.prototype.pushAll = function(e) {
                    if (0 === (e = i(e)).size) return this;
                    Pe(e.size);
                    var t = this.size,
                        n = this._head;
                    return e.reverse().forEach((function(e) {
                        t++, n = {
                            value: e,
                            next: n
                        }
                    })), this.__ownerID ? (this.size = t, this._head = n, this.__hash = void 0, this.__altered = !0, this) : Dn(t, n)
                }, xn.prototype.pop = function() {
                    return this.slice(1)
                }, xn.prototype.unshift = function() {
                    return this.push.apply(this, arguments)
                }, xn.prototype.unshiftAll = function(e) {
                    return this.pushAll(e)
                }, xn.prototype.shift = function() {
                    return this.pop.apply(this, arguments)
                }, xn.prototype.clear = function() {
                    return 0 === this.size ? this : this.__ownerID ? (this.size = 0, this._head = void 0, this.__hash = void 0, this.__altered = !0, this) : In()
                }, xn.prototype.slice = function(e, t) {
                    if (O(e, t, this.size)) return this;
                    var n = D(e, this.size);
                    if (I(t, this.size) !== this.size) return Se.prototype.slice.call(this, e, t);
                    for (var r = this.size - n, i = this._head; n--;) i = i.next;
                    return this.__ownerID ? (this.size = r, this._head = i, this.__hash = void 0, this.__altered = !0, this) : Dn(r, i)
                }, xn.prototype.__ensureOwner = function(e) {
                    return e === this.__ownerID ? this : e ? Dn(this.size, this._head, e, this.__hash) : (this.__ownerID = e, this.__altered = !1, this)
                }, xn.prototype.__iterate = function(e, t) {
                    if (t) return this.reverse().__iterate(e);
                    for (var n = 0, r = this._head; r && !1 !== e(r.value, n++, this);) r = r.next;
                    return n
                }, xn.prototype.__iterator = function(e, t) {
                    if (t) return this.reverse().__iterator(e);
                    var n = 0,
                        r = this._head;
                    return new F((function() {
                        if (r) {
                            var t = r.value;
                            return r = r.next, N(e, n++, t)
                        }
                        return {
                            value: void 0,
                            done: !0
                        }
                    }))
                }, xn.isStack = En;
                var kn, Tn = "@@__IMMUTABLE_STACK__@@",
                    On = xn.prototype;

                function Dn(e, t, n, r) {
                    var i = Object.create(On);
                    return i.size = e, i._head = t, i.__ownerID = n, i.__hash = r, i.__altered = !1, i
                }

                function In() {
                    return kn || (kn = Dn(0))
                }

                function Mn(e, t) {
                    var n = function(n) {
                        e.prototype[n] = t[n]
                    };
                    return Object.keys(t).forEach(n), Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(t).forEach(n), e
                }
                On[Tn] = !0, On.withMutations = Ue.withMutations, On.asMutable = Ue.asMutable, On.asImmutable = Ue.asImmutable, On.wasAltered = Ue.wasAltered, n.Iterator = F, Mn(n, {
                    toArray: function() {
                        Pe(this.size);
                        var e = new Array(this.size || 0);
                        return this.valueSeq().__iterate((function(t, n) {
                            e[n] = t
                        })), e
                    },
                    toIndexedSeq: function() {
                        return new Bt(this)
                    },
                    toJS: function() {
                        return this.toSeq().map((function(e) {
                            return e && "function" == typeof e.toJS ? e.toJS() : e
                        })).__toJS()
                    },
                    toJSON: function() {
                        return this.toSeq().map((function(e) {
                            return e && "function" == typeof e.toJSON ? e.toJSON() : e
                        })).__toJS()
                    },
                    toKeyedSeq: function() {
                        return new Kt(this, !0)
                    },
                    toMap: function() {
                        return Fe(this.toKeyedSeq())
                    },
                    toObject: function() {
                        Pe(this.size);
                        var e = {};
                        return this.__iterate((function(t, n) {
                            e[n] = t
                        })), e
                    },
                    toOrderedMap: function() {
                        return Dt(this.toKeyedSeq())
                    },
                    toOrderedSet: function() {
                        return yn(s(this) ? this.valueSeq() : this)
                    },
                    toSet: function() {
                        return ln(s(this) ? this.valueSeq() : this)
                    },
                    toSetSeq: function() {
                        return new Lt(this)
                    },
                    toSeq: function() {
                        return c(this) ? this.toIndexedSeq() : s(this) ? this.toKeyedSeq() : this.toSetSeq()
                    },
                    toStack: function() {
                        return xn(s(this) ? this.valueSeq() : this)
                    },
                    toList: function() {
                        return dt(s(this) ? this.valueSeq() : this)
                    },
                    toString: function() {
                        return "[Iterable]"
                    },
                    __toString: function(e, t) {
                        return 0 === this.size ? e + t : e + " " + this.toSeq().map(this.__toStringMapper).join(", ") + " " + t
                    },
                    concat: function() {
                        var t = e.call(arguments, 0);
                        return Jt(this, Wt(this, t))
                    },
                    includes: function(e) {
                        return this.some((function(t) {
                            return he(t, e)
                        }))
                    },
                    entries: function() {
                        return this.__iterator(K)
                    },
                    every: function(e, t) {
                        Pe(this.size);
                        var n = !0;
                        return this.__iterate((function(r, i, o) {
                            if (!e.call(t, r, i, o)) return n = !1, !1
                        })), n
                    },
                    filter: function(e, t) {
                        return Jt(this, jt(this, e, t, !0))
                    },
                    find: function(e, t, n) {
                        var r = this.findEntry(e, t);
                        return r ? r[1] : n
                    },
                    findEntry: function(e, t) {
                        var n;
                        return this.__iterate((function(r, i, o) {
                            if (e.call(t, r, i, o)) return n = [i, r], !1
                        })), n
                    },
                    findLastEntry: function(e, t) {
                        return this.toSeq().reverse().findEntry(e, t)
                    },
                    forEach: function(e, t) {
                        return Pe(this.size), this.__iterate(t ? e.bind(t) : e)
                    },
                    join: function(e) {
                        Pe(this.size), e = void 0 !== e ? "" + e : ",";
                        var t = "",
                            n = !0;
                        return this.__iterate((function(r) {
                            n ? n = !1 : t += e, t += null != r ? r.toString() : ""
                        })), t
                    },
                    keys: function() {
                        return this.__iterator(A)
                    },
                    map: function(e, t) {
                        return Jt(this, Nt(this, e, t))
                    },
                    reduce: function(e, t, n) {
                        var r, i;
                        return Pe(this.size), arguments.length < 2 ? i = !0 : r = t, this.__iterate((function(t, o, a) {
                            i ? (i = !1, r = t) : r = e.call(n, r, t, o, a)
                        })), r
                    },
                    reduceRight: function(e, t, n) {
                        var r = this.toKeyedSeq().reverse();
                        return r.reduce.apply(r, arguments)
                    },
                    reverse: function() {
                        return Jt(this, zt(this, !0))
                    },
                    slice: function(e, t) {
                        return Jt(this, Ut(this, e, t, !0))
                    },
                    some: function(e, t) {
                        return !this.every(Ln(e), t)
                    },
                    sort: function(e) {
                        return Jt(this, qt(this, e))
                    },
                    values: function() {
                        return this.__iterator(R)
                    },
                    butLast: function() {
                        return this.slice(0, -1)
                    },
                    isEmpty: function() {
                        return void 0 !== this.size ? 0 === this.size : !this.some((function() {
                            return !0
                        }))
                    },
                    count: function(e, t) {
                        return E(e ? this.toSeq().filter(e, t) : this)
                    },
                    countBy: function(e, t) {
                        return function(e, t, n) {
                            var r = Fe().asMutable();
                            return e.__iterate((function(i, o) {
                                r.update(t.call(n, i, o, e), 0, (function(e) {
                                    return e + 1
                                }))
                            })), r.asImmutable()
                        }(this, e, t)
                    },
                    equals: function(e) {
                        return ge(this, e)
                    },
                    entrySeq: function() {
                        var e = this;
                        if (e._cache) return new ee(e._cache);
                        var t = e.toSeq().map(Bn).toIndexedSeq();
                        return t.fromEntrySeq = function() {
                            return e.toSeq()
                        }, t
                    },
                    filterNot: function(e, t) {
                        return this.filter(Ln(e), t)
                    },
                    findLast: function(e, t, n) {
                        return this.toKeyedSeq().reverse().find(e, t, n)
                    },
                    first: function() {
                        return this.find(T)
                    },
                    flatMap: function(e, t) {
                        return Jt(this, function(e, t, n) {
                            var r = $t(e);
                            return e.toSeq().map((function(i, o) {
                                return r(t.call(n, i, o, e))
                            })).flatten(!0)
                        }(this, e, t))
                    },
                    flatten: function(e) {
                        return Jt(this, Vt(this, e, !0))
                    },
                    fromEntrySeq: function() {
                        return new Pt(this)
                    },
                    get: function(e, t) {
                        return this.find((function(t, n) {
                            return he(n, e)
                        }), void 0, t)
                    },
                    getIn: function(e, t) {
                        for (var n, r = this, i = rn(e); !(n = i.next()).done;) {
                            var o = n.value;
                            if ((r = r && r.get ? r.get(o, y) : y) === y) return t
                        }
                        return r
                    },
                    groupBy: function(e, t) {
                        return function(e, t, n) {
                            var r = s(e),
                                i = (l(e) ? Dt() : Fe()).asMutable();
                            e.__iterate((function(o, a) {
                                i.update(t.call(n, o, a, e), (function(e) {
                                    return (e = e || []).push(r ? [a, o] : o), e
                                }))
                            }));
                            var o = $t(e);
                            return i.map((function(t) {
                                return Jt(e, o(t))
                            }))
                        }(this, e, t)
                    },
                    has: function(e) {
                        return this.get(e, y) !== y
                    },
                    hasIn: function(e) {
                        return this.getIn(e, y) !== y
                    },
                    isSubset: function(e) {
                        return e = "function" == typeof e.includes ? e : n(e), this.every((function(t) {
                            return e.includes(t)
                        }))
                    },
                    isSuperset: function(e) {
                        return (e = "function" == typeof e.isSubset ? e : n(e)).isSubset(this)
                    },
                    keySeq: function() {
                        return this.toSeq().map(Kn).toIndexedSeq()
                    },
                    last: function() {
                        return this.toSeq().reverse().first()
                    },
                    max: function(e) {
                        return Gt(this, e)
                    },
                    maxBy: function(e, t) {
                        return Gt(this, t, e)
                    },
                    min: function(e) {
                        return Gt(this, e ? Pn(e) : zn)
                    },
                    minBy: function(e, t) {
                        return Gt(this, t ? Pn(t) : zn, e)
                    },
                    rest: function() {
                        return this.slice(1)
                    },
                    skip: function(e) {
                        return this.slice(Math.max(0, e))
                    },
                    skipLast: function(e) {
                        return Jt(this, this.toSeq().reverse().skip(e).reverse())
                    },
                    skipWhile: function(e, t) {
                        return Jt(this, Ht(this, e, t, !0))
                    },
                    skipUntil: function(e, t) {
                        return this.skipWhile(Ln(e), t)
                    },
                    sortBy: function(e, t) {
                        return Jt(this, qt(this, t, e))
                    },
                    take: function(e) {
                        return this.slice(0, Math.max(0, e))
                    },
                    takeLast: function(e) {
                        return Jt(this, this.toSeq().reverse().take(e).reverse())
                    },
                    takeWhile: function(e, t) {
                        return Jt(this, function(e, t, n) {
                            var r = en(e);
                            return r.__iterateUncached = function(r, i) {
                                var o = this;
                                if (i) return this.cacheResult().__iterate(r, i);
                                var a = 0;
                                return e.__iterate((function(e, i, s) {
                                    return t.call(n, e, i, s) && ++a && r(e, i, o)
                                })), a
                            }, r.__iteratorUncached = function(r, i) {
                                var o = this;
                                if (i) return this.cacheResult().__iterator(r, i);
                                var a = e.__iterator(K, i),
                                    s = !0;
                                return new F((function() {
                                    if (!s) return {
                                        value: void 0,
                                        done: !0
                                    };
                                    var e = a.next();
                                    if (e.done) return e;
                                    var i = e.value,
                                        c = i[0],
                                        u = i[1];
                                    return t.call(n, u, c, o) ? r === K ? e : N(r, c, u, e) : (s = !1, {
                                        value: void 0,
                                        done: !0
                                    })
                                }))
                            }, r
                        }(this, e, t))
                    },
                    takeUntil: function(e, t) {
                        return this.takeWhile(Ln(e), t)
                    },
                    valueSeq: function() {
                        return this.toIndexedSeq()
                    },
                    hashCode: function() {
                        return this.__hash || (this.__hash = function(e) {
                            if (e.size === 1 / 0) return 0;
                            var t = l(e),
                                n = s(e),
                                r = t ? 1 : 0;
                            return function(e, t) {
                                return t = Ce(t, 3432918353), t = Ce(t << 15 | t >>> -15, 461845907), t = Ce(t << 13 | t >>> -13, 5), t = Ce((t = (t + 3864292196 | 0) ^ e) ^ t >>> 16, 2246822507), t = xe((t = Ce(t ^ t >>> 13, 3266489909)) ^ t >>> 16)
                            }(e.__iterate(n ? t ? function(e, t) {
                                r = 31 * r + jn(Ee(e), Ee(t)) | 0
                            } : function(e, t) {
                                r = r + jn(Ee(e), Ee(t)) | 0
                            } : t ? function(e) {
                                r = 31 * r + Ee(e) | 0
                            } : function(e) {
                                r = r + Ee(e) | 0
                            }), r)
                        }(this))
                    }
                });
                var An = n.prototype;
                An[f] = !0, An[P] = An.values, An.__toJS = An.toArray, An.__toStringMapper = Fn, An.inspect = An.toSource = function() {
                        return this.toString()
                    }, An.chain = An.flatMap, An.contains = An.includes,
                    function() {
                        try {
                            Object.defineProperty(An, "length", {
                                get: function() {
                                    if (!n.noLengthWarning) {
                                        var e;
                                        try {
                                            throw new Error
                                        } catch (t) {
                                            e = t.stack
                                        }
                                        if (-1 === e.indexOf("_wrapObject")) return console && console.warn, this.size
                                    }
                                }
                            })
                        } catch (e) {}
                    }(), Mn(r, {
                        flip: function() {
                            return Jt(this, Ft(this))
                        },
                        findKey: function(e, t) {
                            var n = this.findEntry(e, t);
                            return n && n[0]
                        },
                        findLastKey: function(e, t) {
                            return this.toSeq().reverse().findKey(e, t)
                        },
                        keyOf: function(e) {
                            return this.findKey((function(t) {
                                return he(t, e)
                            }))
                        },
                        lastKeyOf: function(e) {
                            return this.findLastKey((function(t) {
                                return he(t, e)
                            }))
                        },
                        mapEntries: function(e, t) {
                            var n = this,
                                r = 0;
                            return Jt(this, this.toSeq().map((function(i, o) {
                                return e.call(t, [o, i], r++, n)
                            })).fromEntrySeq())
                        },
                        mapKeys: function(e, t) {
                            var n = this;
                            return Jt(this, this.toSeq().flip().map((function(r, i) {
                                return e.call(t, r, i, n)
                            })).flip())
                        }
                    });
                var Rn = r.prototype;

                function Kn(e, t) {
                    return t
                }

                function Bn(e, t) {
                    return [t, e]
                }

                function Ln(e) {
                    return function() {
                        return !e.apply(this, arguments)
                    }
                }

                function Pn(e) {
                    return function() {
                        return -e.apply(this, arguments)
                    }
                }

                function Fn(e) {
                    return "string" == typeof e ? JSON.stringify(e) : e
                }

                function Nn() {
                    return x(arguments)
                }

                function zn(e, t) {
                    return e < t ? 1 : e > t ? -1 : 0
                }

                function jn(e, t) {
                    return e ^ t + 2654435769 + (e << 6) + (e >> 2) | 0
                }
                return Rn[d] = !0, Rn[P] = An.entries, Rn.__toJS = An.toObject, Rn.__toStringMapper = function(e, t) {
                    return JSON.stringify(t) + ": " + Fn(e)
                }, Mn(i, {
                    toKeyedSeq: function() {
                        return new Kt(this, !1)
                    },
                    filter: function(e, t) {
                        return Jt(this, jt(this, e, t, !1))
                    },
                    findIndex: function(e, t) {
                        var n = this.findEntry(e, t);
                        return n ? n[0] : -1
                    },
                    indexOf: function(e) {
                        var t = this.toKeyedSeq().keyOf(e);
                        return void 0 === t ? -1 : t
                    },
                    lastIndexOf: function(e) {
                        var t = this.toKeyedSeq().reverse().keyOf(e);
                        return void 0 === t ? -1 : t
                    },
                    reverse: function() {
                        return Jt(this, zt(this, !1))
                    },
                    slice: function(e, t) {
                        return Jt(this, Ut(this, e, t, !1))
                    },
                    splice: function(e, t) {
                        var n = arguments.length;
                        if (t = Math.max(0 | t, 0), 0 === n || 2 === n && !t) return this;
                        e = D(e, e < 0 ? this.count() : this.size);
                        var r = this.slice(0, e);
                        return Jt(this, 1 === n ? r : r.concat(x(arguments, 2), this.slice(e + t)))
                    },
                    findLastIndex: function(e, t) {
                        var n = this.toKeyedSeq().findLastKey(e, t);
                        return void 0 === n ? -1 : n
                    },
                    first: function() {
                        return this.get(0)
                    },
                    flatten: function(e) {
                        return Jt(this, Vt(this, e, !1))
                    },
                    get: function(e, t) {
                        return (e = k(this, e)) < 0 || this.size === 1 / 0 || void 0 !== this.size && e > this.size ? t : this.find((function(t, n) {
                            return n === e
                        }), void 0, t)
                    },
                    has: function(e) {
                        return (e = k(this, e)) >= 0 && (void 0 !== this.size ? this.size === 1 / 0 || e < this.size : -1 !== this.indexOf(e))
                    },
                    interpose: function(e) {
                        return Jt(this, function(e, t) {
                            var n = en(e);
                            return n.size = e.size && 2 * e.size - 1, n.__iterateUncached = function(n, r) {
                                var i = this,
                                    o = 0;
                                return e.__iterate((function(e, r) {
                                    return (!o || !1 !== n(t, o++, i)) && !1 !== n(e, o++, i)
                                }), r), o
                            }, n.__iteratorUncached = function(n, r) {
                                var i, o = e.__iterator(R, r),
                                    a = 0;
                                return new F((function() {
                                    return (!i || a % 2) && (i = o.next()).done ? i : a % 2 ? N(n, a++, t) : N(n, a++, i.value, i)
                                }))
                            }, n
                        }(this, e))
                    },
                    interleave: function() {
                        var e = [this].concat(x(arguments)),
                            t = Yt(this.toSeq(), X.of, e),
                            n = t.flatten(!0);
                        return t.size && (n.size = t.size * e.length), Jt(this, n)
                    },
                    last: function() {
                        return this.get(-1)
                    },
                    skipWhile: function(e, t) {
                        return Jt(this, Ht(this, e, t, !1))
                    },
                    zip: function() {
                        var e = [this].concat(x(arguments));
                        return Jt(this, Yt(this, Nn, e))
                    },
                    zipWith: function(e) {
                        var t = x(arguments);
                        return t[0] = this, Jt(this, Yt(this, e, t))
                    }
                }), i.prototype[p] = !0, i.prototype[h] = !0, Mn(o, {
                    get: function(e, t) {
                        return this.has(e) ? e : t
                    },
                    includes: function(e) {
                        return this.has(e)
                    },
                    keySeq: function() {
                        return this.valueSeq()
                    }
                }), o.prototype.has = An.includes, Mn(G, r.prototype), Mn(X, i.prototype), Mn(Y, o.prototype), Mn(be, r.prototype), Mn(Se, i.prototype), Mn(we, o.prototype), {
                    Iterable: n,
                    Seq: q,
                    Collection: _e,
                    Map: Fe,
                    OrderedMap: Dt,
                    List: dt,
                    Stack: xn,
                    Set: ln,
                    OrderedSet: yn,
                    Record: on,
                    Range: ye,
                    Repeat: ve,
                    is: he,
                    fromJS: fe
                }
            }()
        },
        TNQl: function(e, t, n) {
            "use strict";
            var r = n("maj8");

            function i() {
                return (i = r || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function o(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function a(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var s = n("ERkP"),
                c = n("rim0"),
                u = n("tI3i"),
                l = c.isBrowser("IE <= 11") || c.isBrowser("Edge");
            var f = function(e) {
                var t, n;

                function r(t) {
                    var n;
                    return a(o(n = e.call(this, t) || this), "_forceFlag", void 0), a(o(n), "_node", void 0), n._forceFlag = !1, n
                }
                n = e, (t = r).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
                var c = r.prototype;
                return c.shouldComponentUpdate = function(e) {
                    var t = this._node,
                        n = "" === e.children;
                    return t instanceof Element || u(!1), n ? ! function(e) {
                        return l ? "\n" === e.textContent : "BR" === e.tagName
                    }(t) : t.textContent !== e.children
                }, c.componentDidMount = function() {
                    this._forceFlag = !this._forceFlag
                }, c.componentDidUpdate = function() {
                    this._forceFlag = !this._forceFlag
                }, c.render = function() {
                    var e = this;
                    if ("" === this.props.children) return this._forceFlag ? function(e) {
                        return l ? s.createElement("span", {
                            key: "A",
                            "data-text": "true",
                            ref: e
                        }, "\n") : s.createElement("br", {
                            key: "A",
                            "data-text": "true",
                            ref: e
                        })
                    }((function(t) {
                        return e._node = t
                    })) : function(e) {
                        return l ? s.createElement("span", {
                            key: "B",
                            "data-text": "true",
                            ref: e
                        }, "\n") : s.createElement("br", {
                            key: "B",
                            "data-text": "true",
                            ref: e
                        })
                    }((function(t) {
                        return e._node = t
                    }));
                    var t = {};
                    return "object" == typeof this.props.style && (t.style = this.props.style), s.createElement("span", i({
                        key: this._forceFlag ? "A" : "B",
                        "data-text": "true",
                        ref: function(t) {
                            return e._node = t
                        }
                    }, t), this.props.children)
                }, r
            }(s.Component);
            e.exports = f
        },
        USh0: function(e, t, n) {
            "use strict";
            var r = n("sWKX"),
                i = n("5mUX"),
                o = n("tI3i");

            function a(e, t, n, a, s, c, u) {
                var l = n.getStartOffset(),
                    f = n.getEndOffset(),
                    d = e.__get(s).getMutability(),
                    p = u ? l : f;
                if ("MUTABLE" === d) return n;
                var h = i(t, s).filter((function(e) {
                    return p <= e.end && p >= e.start
                }));
                1 != h.length && o(!1);
                var g = h[0];
                if ("IMMUTABLE" === d) return n.merge({
                    anchorOffset: g.start,
                    focusOffset: g.end,
                    isBackward: !1
                });
                c || (u ? f = g.end : l = g.start);
                var v = r.getRemovalRange(l, f, t.getText().slice(g.start, g.end), g.start, a);
                return n.merge({
                    anchorOffset: v.start,
                    focusOffset: v.end,
                    isBackward: !1
                })
            }
            e.exports = function(e, t, n, r, i) {
                var o = r.getStartOffset(),
                    s = r.getEndOffset(),
                    c = t.getEntityAt(o),
                    u = n.getEntityAt(s - 1);
                if (!c && !u) return r;
                var l = r;
                if (c && c === u) l = a(e, t, l, i, c, !0, !0);
                else if (c && u) {
                    var f = a(e, t, l, i, c, !1, !0),
                        d = a(e, n, l, i, u, !1, !1);
                    l = l.merge({
                        anchorOffset: f.getAnchorOffset(),
                        focusOffset: d.getFocusOffset(),
                        isBackward: !1
                    })
                } else if (c) {
                    var p = a(e, t, l, i, c, !1, !0);
                    l = l.merge({
                        anchorOffset: p.getStartOffset(),
                        isBackward: !1
                    })
                } else if (u) {
                    var h = a(e, n, l, i, u, !1, !1);
                    l = l.merge({
                        focusOffset: h.getEndOffset(),
                        isBackward: !1
                    })
                }
                return l
            }
        },
        Ub51: function(e, t, n) {
            "use strict";
            var r = n("pVnL"),
                i = n.n(r),
                o = (n("p+GS"), n("4oWw"), n("LnO1"), n("3eMz"), n("AJ0U"), n("rmZQ"), n("PN9k"), n("yKDW"), n("dtAy"), n("W8MJ")),
                a = n.n(o),
                s = n("PJYZ"),
                c = n.n(s),
                u = n("VbXa"),
                l = n.n(u),
                f = n("lSNA"),
                d = n.n(f),
                p = n("ERkP"),
                h = (n("yIC7"), n("wpu3")),
                g = n("gt4B"),
                v = (n("cI1W"), n("KYm4"), n("/yvb")),
                m = Object.freeze({
                    all: "all",
                    community: "community",
                    by_invitation: "by_invitation"
                }),
                y = n("3XMw"),
                _ = n.n(y),
                b = n("SotI"),
                S = n.n(b),
                w = n("tXRi"),
                C = n.n(w),
                x = n("Vjl/"),
                E = n.n(x),
                k = n("rHpw"),
                T = n("3xO4"),
                O = n.n(T),
                D = n("t62R"),
                I = n("CKsB"),
                M = _.a.g79ea0a4,
                A = _.a.ifa1c670,
                R = _.a.bc305387,
                K = _.a.a0a0aed8,
                B = _.a.df56dcd1,
                L = _.a.becb3bf0,
                P = _.a.f042dfdc,
                F = _.a.d8db21c3,
                N = _.a.f4c9593e,
                z = k.a.create((function(e) {
                    return {
                        root: {
                            flexDirection: "column",
                            paddingVertical: e.spaces.small,
                            backgroundColor: e.colors.cellBackground,
                            borderRadius: e.borderRadii.large
                        },
                        modal: {
                            borderRadius: 0
                        },
                        title: {
                            flexDirection: "column",
                            paddingHorizontal: e.spaces.small,
                            marginBottom: e.spaces.small
                        },
                        menuRow: {
                            flexDirection: "row",
                            paddingTop: e.spaces.xxSmall,
                            paddingBottom: e.spaces.xxSmall,
                            alignItems: "center",
                            borderRadius: e.spaces.xxSmall
                        },
                        cancelButton: {
                            marginHorizontal: e.spaces.small,
                            marginVertical: e.spaces.small
                        }
                    }
                })),
                j = function(e) {
                    var t = e.dismiss,
                        n = e.isModal,
                        r = e.value,
                        i = function(t) {
                            return function() {
                                e.onChange(t), e.dismiss()
                            }
                        };
                    return p.createElement(O.a, {
                        style: [z.root, n && z.modal]
                    }, p.createElement(O.a, {
                        style: z.title
                    }, p.createElement(D.b, {
                        weight: "bold"
                    }, M), p.createElement(D.b, {
                        color: "deepGray",
                        size: "normal"
                    }, A)), p.createElement(O.a, null, p.createElement(I.a, {
                        Icon: E.a,
                        actionSubText: K,
                        actionText: R,
                        isSelected: m.all === r,
                        onClick: i(m.all),
                        selectable: !0,
                        style: z.menuRow,
                        withIconAsThumbnail: !0
                    }), p.createElement(I.a, {
                        Icon: C.a,
                        actionSubText: L,
                        actionText: B,
                        isSelected: m.community === r,
                        onClick: i(m.community),
                        selectable: !0,
                        style: z.menuRow,
                        withIconAsThumbnail: !0
                    }), p.createElement(I.a, {
                        Icon: S.a,
                        actionSubText: F,
                        actionText: P,
                        isSelected: m.by_invitation === r,
                        onClick: i(m.by_invitation),
                        selectable: !0,
                        style: z.menuRow,
                        withIconAsThumbnail: !0
                    }), e.isModal ? p.createElement(v.a, {
                        key: "button_cancel",
                        onPress: t,
                        style: z.cancelButton,
                        type: "neutral"
                    }, N) : null))
                },
                U = n("Xr1F"),
                H = n.n(U),
                W = n("Y22M"),
                V = n.n(W),
                q = n("sgih"),
                G = n("OiMc"),
                X = n("cHvH"),
                Y = Object.freeze({
                    all: {
                        Icon: V.a,
                        label: _.a.g9907c8c
                    },
                    community: {
                        Icon: H.a,
                        label: _.a.ad14fa9e
                    },
                    by_invitation: {
                        Icon: S.a,
                        label: _.a.e15a7f14
                    }
                }),
                J = function(e) {
                    var t = Y[e.value],
                        n = t.Icon,
                        r = t.label,
                        o = e.hidden,
                        a = p.useCallback((function(t) {
                            return p.createElement(j, i()({}, e, {
                                dismiss: t
                            }))
                        }), [e]),
                        s = p.useCallback((function(t) {
                            return p.createElement(q.a, {
                                onMaskClick: t,
                                type: "bottom",
                                withKeyboardNavigation: !0,
                                withMask: !0
                            }, p.createElement(j, i()({}, e, {
                                dismiss: t,
                                isModal: !0
                            })))
                        }), [e]);
                    return p.createElement(p.Fragment, null, p.createElement(O.a, {
                        style: [Q.container, o && Q.hidden]
                    }, p.createElement(X.a, null, (function(e) {
                        return e.screenWidth < k.a.theme.breakpoints.small ? p.createElement(v.a, {
                            renderMenu: s,
                            size: "small",
                            style: Q.button,
                            type: "text"
                        }, p.createElement(n, null), " ", r) : p.createElement(O.a, null, p.createElement(G.a, {
                            enableEnterKeyToggle: !0,
                            renderContent: a,
                            withArrow: !0
                        }, p.createElement(v.a, {
                            size: "small",
                            style: Q.button,
                            type: "text"
                        }, p.createElement(n, null), " ", r)))
                    }))), p.createElement(O.a, {
                        style: [Q.separator, o && Q.hidden]
                    }))
                },
                Q = k.a.create((function(e) {
                    return {
                        button: {
                            paddingHorizontal: e.spaces.xxSmall
                        },
                        container: {
                            display: "inline-flex",
                            flexDirection: "row",
                            paddingBottom: e.spaces.xSmall
                        },
                        separator: {
                            height: "1px",
                            backgroundColor: e.colors.borderColor,
                            width: "100%"
                        },
                        hidden: {
                            visibility: "hidden"
                        }
                    }
                })),
                Z = n("krmn"),
                $ = n("wrlS"),
                ee = n("cIoY"),
                te = n("w3n3"),
                ne = n("MLl7"),
                re = n("l2F/"),
                ie = n.n(re),
                oe = n("UZ11"),
                ae = n.n(oe),
                se = n("6m7o"),
                ce = n.n(se),
                ue = n("/aF9"),
                le = n.n(ue),
                fe = n("EbY/"),
                de = n.n(fe),
                pe = n("nGvh"),
                he = n.n(pe),
                ge = n("B4TA"),
                ve = n.n(ge),
                me = n("mlHa"),
                ye = n.n(me),
                _e = n("fI5n"),
                be = n.n(_e),
                Se = n("1auM"),
                we = n("YeIG"),
                Ce = n("Q8CU"),
                xe = n("QbaN"),
                Ee = n("VPdC"),
                ke = n("B1L3"),
                Te = n("oQhu"),
                Oe = n("aWzz"),
                De = n("p+r5"),
                Ie = n("GWvE"),
                Me = function(e) {
                    function t() {
                        for (var t, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return t = e.call.apply(e, [this].concat(r)) || this, d()(c()(t), "_setInputRef", (function(e) {
                            t._inputRef = e
                        })), t
                    }
                    return l()(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.autoFocus,
                            n = e.defaultValue,
                            r = e.editable,
                            i = e.label,
                            o = e.onChange,
                            a = e.name;
                        return p.createElement(O.a, {
                            style: Ae.root
                        }, p.createElement(De.a, {
                            autoCapitalize: "none",
                            autoCorrect: !1,
                            autoFocus: t,
                            defaultValue: n,
                            editable: r,
                            label: i,
                            maxLength: 25,
                            name: a,
                            onChange: o,
                            ref: this._setInputRef,
                            spellCheck: "false",
                            style: Ae.formTextInput
                        }))
                    }, a()(t, [{
                        key: "value",
                        get: function() {
                            return this._inputRef && this._inputRef.getValue()
                        }
                    }, {
                        key: "isValid",
                        get: function() {
                            var e = this.props.optional;
                            return !this.value && e || this.value && !Object(Ie.a)(this.value) && this._inputRef && this._inputRef.isValidLength()
                        }
                    }]), t
                }(p.Component);
            d()(Me, "defaultProps", {
                autoFocus: !1,
                editable: !0,
                optional: !1
            });
            var Ae = k.a.create((function(e) {
                    return {
                        root: {
                            flexDirection: "row",
                            flexShrink: 1
                        },
                        action: {
                            width: e.spaces.xLarge
                        },
                        addButton: {
                            flexGrow: 1,
                            minHeight: "100%",
                            padding: 0
                        },
                        formTextInput: {
                            flexGrow: 1,
                            flexShrink: 1,
                            marginVertical: 0,
                            paddingTop: 0,
                            paddingHorizontal: 0,
                            paddingBottom: e.spaces.xSmall
                        }
                    }
                })),
                Re = Me,
                Ke = n("mtvn"),
                Be = n("6XNv"),
                Le = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    return l()(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.editable,
                            n = e.label,
                            r = e.last,
                            i = e.max,
                            o = e.min,
                            a = e.onChange,
                            s = !t || o === i,
                            c = e.value.toString(),
                            u = Object(Ke.a)(o, i + 1).map((function(e) {
                                return {
                                    label: "" + e,
                                    value: "" + e
                                }
                            }));
                        return p.createElement(Be.a, {
                            disabled: s,
                            label: n,
                            onChange: a,
                            options: u,
                            style: [Pe.selector, !r && Pe.rightMargin],
                            value: c
                        })
                    }, t
                }(p.PureComponent);
            d()(Le, "defaultProps", {
                last: !1
            });
            var Pe = k.a.create((function(e) {
                    return {
                        rightMargin: {
                            marginRight: e.spaces.medium
                        },
                        selector: {
                            flexGrow: 1
                        }
                    }
                })),
                Fe = Le,
                Ne = _.a.f1857af8,
                ze = _.a.j762011b,
                je = _.a.i58784ec,
                Ue = _.a.f1e5e8ea,
                He = 5,
                We = function(e) {
                    function t(t, n) {
                        var r;
                        return r = e.call(this, t, n) || this, d()(c()(r), "_handleDaysChange", (function(e) {
                            var t = parseInt(e, 0);
                            r.setState((function(e) {
                                var n = e.duration,
                                    r = n.hours,
                                    i = n.minutes,
                                    o = 0 === t && 0 === r && 0 === i ? 1 : 7 === t ? 0 : r;
                                return {
                                    duration: {
                                        days: t,
                                        hours: o,
                                        minutes: 7 === t ? 0 : 0 === t && 0 === o && i < He ? He : i
                                    }
                                }
                            }))
                        })), d()(c()(r), "_handleHoursChange", (function(e) {
                            var t = parseInt(e, 0);
                            r.setState((function(e) {
                                var n = e.duration,
                                    r = n.days,
                                    i = n.minutes;
                                return {
                                    duration: {
                                        days: r,
                                        hours: t,
                                        minutes: 0 === r && 0 === t && i < He ? He : i
                                    }
                                }
                            }))
                        })), d()(c()(r), "_handleMinutesChange", (function(e) {
                            var t = parseInt(e, 0);
                            r.setState((function(e) {
                                var n = e.duration;
                                return {
                                    duration: {
                                        days: n.days,
                                        hours: n.hours,
                                        minutes: t
                                    }
                                }
                            }))
                        })), r.state = {
                            duration: t.initialDuration
                        }, r
                    }
                    l()(t, e);
                    var n = t.prototype;
                    return n.render = function() {
                        var e = this.props,
                            t = e.style,
                            n = e.isActive;
                        return p.createElement(O.a, {
                            style: t
                        }, p.createElement(D.b, {
                            color: "normal",
                            style: Ve.durationLabel
                        }, n ? Ne : ""), this._renderPicker())
                    }, n._renderPicker = function() {
                        var e = this.props,
                            t = e.editable,
                            n = e.isActive,
                            r = this.state.duration,
                            i = r.days,
                            o = r.hours,
                            a = r.minutes;
                        return p.createElement(O.a, {
                            style: Ve.durationControls
                        }, p.createElement(Fe, {
                            editable: t && n,
                            label: ze,
                            max: 7,
                            min: 0,
                            onChange: this._handleDaysChange,
                            value: i
                        }), p.createElement(Fe, {
                            editable: t && n,
                            label: je,
                            max: 7 === i ? 0 : 23,
                            min: 0,
                            onChange: this._handleHoursChange,
                            value: o
                        }), p.createElement(Fe, {
                            editable: t && n,
                            label: Ue,
                            last: !0,
                            max: 7 === i ? 0 : 59,
                            min: 0 === i && 0 === o ? He : 0,
                            onChange: this._handleMinutesChange,
                            value: a
                        }))
                    }, a()(t, [{
                        key: "duration",
                        get: function() {
                            return this.state.duration
                        }
                    }]), t
                }(p.Component);
            d()(We, "defaultProps", {
                editable: !0,
                initialDuration: {
                    days: 1,
                    hours: 0,
                    minutes: 0
                }
            });
            var Ve = k.a.create((function(e) {
                    return {
                        durationControls: {
                            flexDirection: "row",
                            justifyContent: "space-between"
                        },
                        durationLabel: {
                            marginBottom: e.spaces.xxSmall
                        }
                    }
                })),
                qe = We,
                Ge = n("Irs7"),
                Xe = n("jtO7"),
                Ye = _.a.j2719475,
                Je = _.a.jf7d5325,
                Qe = _.a.f8105840,
                Ze = _.a.daf7b547,
                $e = _.a.c121469b,
                et = _.a.if26fbf4,
                tt = function(e) {
                    function t(t, n) {
                        var r;
                        r = e.call(this, t, n) || this, d()(c()(r), "_setChoice1Ref", (function(e) {
                            r._choice1 = e
                        })), d()(c()(r), "_setChoice2Ref", (function(e) {
                            r._choice2 = e
                        })), d()(c()(r), "_setChoice3Ref", (function(e) {
                            r._choice3 = e
                        })), d()(c()(r), "_setChoice4Ref", (function(e) {
                            r._choice4 = e
                        })), d()(c()(r), "_setDurationPickerRef", (function(e) {
                            r._durationPicker = e
                        })), d()(c()(r), "_handleValidation", (function() {
                            var e = r.props,
                                t = e.onValid,
                                n = e.onInvalid,
                                i = r.choices,
                                o = c()(r),
                                a = [o._choice1, o._choice2, o._choice3, o._choice4].filter(Boolean).every((function(e) {
                                    return e.isValid
                                }));
                            i && i.length >= 2 && a ? t() : n()
                        })), d()(c()(r), "_handleAdd", (function() {
                            r.props.analytics.scribe({
                                element: "add_poll_option",
                                action: "click"
                            }), r.setState((function(e) {
                                return {
                                    autoFocus: !0,
                                    choiceCount: e.choiceCount + 1
                                }
                            }))
                        }));
                        var i = t.initialChoices,
                            o = void 0 === i,
                            a = (i || []).length,
                            s = a > 2 ? a : 2;
                        return r.state = {
                            autoFocus: o,
                            choiceCount: s
                        }, r
                    }
                    return l()(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.editable,
                            n = e.initialChoices,
                            r = void 0 === n ? [] : n,
                            i = e.initialDuration,
                            o = e.isActive,
                            a = e.onRemove,
                            s = this.state,
                            c = s.autoFocus,
                            u = s.choiceCount;
                        return p.createElement(O.a, {
                            style: nt.root
                        }, p.createElement(O.a, {
                            style: nt.choicesAndAddButton
                        }, p.createElement(O.a, {
                            style: nt.choices
                        }, p.createElement(Re, {
                            autoFocus: c,
                            defaultValue: r[0],
                            editable: t && o,
                            label: Ye,
                            name: "Choice1",
                            onChange: this._handleValidation,
                            ref: this._setChoice1Ref
                        }), p.createElement(Re, {
                            defaultValue: r[1],
                            editable: t && o,
                            label: Je,
                            name: "Choice2",
                            onChange: this._handleValidation,
                            ref: this._setChoice2Ref
                        }), u >= 3 ? p.createElement(Re, {
                            autoFocus: c,
                            defaultValue: r[2],
                            editable: t && o,
                            label: Qe,
                            name: "Choice3",
                            onChange: this._handleValidation,
                            optional: !0,
                            ref: this._setChoice3Ref
                        }) : null, 4 === u ? p.createElement(Re, {
                            autoFocus: c,
                            defaultValue: r[3],
                            editable: t && o,
                            label: Ze,
                            name: "Choice4",
                            onChange: this._handleValidation,
                            optional: !0,
                            ref: this._setChoice4Ref
                        }) : null), p.createElement(O.a, {
                            style: nt.rightColumn
                        }, u < 4 ? p.createElement(v.a, {
                            accessibilityLabel: et,
                            disabled: !(t && o),
                            icon: p.createElement(ve.a, null),
                            onPress: this._handleAdd,
                            size: "normal",
                            style: nt.addButton,
                            type: "text"
                        }) : null)), p.createElement(qe, {
                            editable: t,
                            initialDuration: i,
                            isActive: o,
                            ref: this._setDurationPickerRef,
                            style: nt.durationPicker
                        }), p.createElement(O.a, {
                            style: nt.removePollButton
                        }, p.createElement(Xe.a, {
                            color: "red",
                            label: $e,
                            onPress: a,
                            withBottomBorder: !1
                        })))
                    }, a()(t, [{
                        key: "choices",
                        get: function() {
                            var e = this._choice1,
                                t = this._choice2,
                                n = this._choice3,
                                r = this._choice4;
                            return [e && e.value, t && t.value, n && n.value, r && r.value].filter(Boolean)
                        }
                    }, {
                        key: "duration",
                        get: function() {
                            return this._durationPicker ? this._durationPicker.duration : void 0
                        }
                    }]), t
                }(p.Component),
                nt = k.a.create((function(e) {
                    return {
                        root: {
                            flexDirection: "column",
                            backgroundColor: e.colors.transparent,
                            borderColor: e.colors.nestedBorderColor,
                            borderRadius: e.borderRadii.large,
                            borderStyle: "solid",
                            borderWidth: e.borderWidths.small,
                            paddingTop: e.spaces.xSmall,
                            overflow: "hidden"
                        },
                        choicesAndAddButton: {
                            paddingLeft: e.spaces.small,
                            paddingRight: e.spaces.small,
                            flexDirection: "row"
                        },
                        choices: {
                            flexGrow: 1,
                            flexShrink: 1,
                            marginRight: e.spaces.xxSmall
                        },
                        removePollButton: {
                            borderBottomLeftRadius: e.borderRadii.large,
                            borderBottomRightRadius: e.borderRadii.large
                        },
                        rightColumn: {
                            flexDirection: "column-reverse",
                            marginRight: "calc(-1 * " + e.spaces.xSmall + ")",
                            paddingBottom: e.spaces.xSmall,
                            width: e.spaces.xLarge
                        },
                        addButton: {
                            marginBottom: e.spaces.large
                        },
                        durationPicker: {
                            borderTopColor: e.colors.nestedBorderColor,
                            borderTopWidth: 1,
                            borderBottomColor: e.colors.nestedBorderColor,
                            borderBottomWidth: 1,
                            paddingBottom: e.spaces.xSmall,
                            paddingLeft: e.spaces.small,
                            paddingRight: e.spaces.small,
                            paddingTop: e.spaces.xSmall
                        }
                    }
                })),
                rt = Object(Ge.a)(tt),
                it = n("VoLI"),
                ot = n("rcen"),
                at = n("zmS9"),
                st = n("WPfJ"),
                ct = k.a.create((function(e) {
                    return {
                        root: {
                            paddingHorizontal: e.componentDimensions.gutterHorizontal
                        },
                        avatarContainerExpanded: {
                            paddingTop: e.spaces.xxSmall
                        },
                        avatarContainer: {
                            justifyContent: "center"
                        },
                        avatar: {
                            width: "100%"
                        },
                        rightColumn: {
                            position: "static",
                            transitionProperty: "opacity, color",
                            transitionDuration: "0.1s",
                            transitionTimingFunction: "ease-out"
                        },
                        composeBoxContainer: {
                            display: "flex",
                            flexDirection: "column",
                            flexGrow: 1,
                            flexShrink: 1,
                            position: "static",
                            zIndex: 1
                        },
                        inputArea: {
                            zIndex: 1
                        },
                        dragDrop: {
                            borderColor: e.colors.transparent,
                            borderRadius: e.borderRadii.medium,
                            borderStyle: "solid",
                            borderWidth: e.borderWidths.medium
                        },
                        textInputArea: {
                            alignItems: "center",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            zIndex: st.f
                        },
                        textInputStyle: {
                            paddingHorizontal: 0
                        },
                        textInputMobileCollapsed: {
                            maxHeight: e.fontSizes.xLarge,
                            padding: 0
                        },
                        tweetAttachmentArea: {
                            zIndex: st.e
                        },
                        iconEmojiPicker: {
                            zIndex: st.c
                        },
                        toolBar: {
                            alignItems: "center",
                            backgroundColor: e.colors.cellBackground,
                            flexDirection: "row",
                            flexWrap: "wrap",
                            justifyContent: "space-between",
                            marginHorizontal: e.spaces.micro,
                            zIndex: st.a
                        },
                        firstToolBarButton: {
                            marginLeft: "-" + e.spaces.xSmall
                        },
                        toolBarButton: {
                            marginHorizontal: 0
                        },
                        toolBarIconsContainer: {
                            alignItems: "center",
                            flexDirection: "row",
                            marginTop: e.spaces.xSmall
                        },
                        separator: {
                            width: "1px",
                            backgroundColor: e.colors.mediumGray,
                            height: e.fontSizes.jumbo,
                            marginRight: e.spaces.xSmall,
                            marginLeft: "calc(" + e.spaces.xSmall + " - 2px)"
                        },
                        conversationLine: {
                            alignSelf: "center",
                            backgroundColor: e.colors.lightGray,
                            flexGrow: 1,
                            flexShrink: 1,
                            minHeight: 0,
                            width: e.componentDimensions.conversationLineWidth,
                            marginTop: e.spaces.xxSmall,
                            marginBottom: e.spaces.xxSmall
                        },
                        conversationLineWithOverflow: {
                            marginTop: "-" + e.spaces.xxSmall
                        },
                        attachmentContainer: {
                            marginTop: e.spaces.xxSmall,
                            marginBottom: e.spaces.xxSmall
                        },
                        mediaPreview: {
                            marginTop: e.spaces.xxSmall
                        },
                        quoteTweet: {
                            backgroundColor: e.colors.transparent,
                            marginTop: e.spaces.xxSmall,
                            marginBottom: 0
                        },
                        addImageTextContainer: {
                            alignSelf: "flex-start",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            maxWidth: "100%"
                        },
                        noBackground: {
                            backgroundColor: e.colors.transparent
                        },
                        addImageActionIcon: {
                            marginRight: e.spaces.micro
                        },
                        addImageTextPadding: {
                            marginEnd: e.spaces.xxLarge
                        },
                        imageActions: {
                            alignItems: "center",
                            flexDirection: "row",
                            flexWrap: "wrap",
                            marginTop: e.spaces.xxSmall
                        },
                        blurStyle: {
                            opacity: .5
                        },
                        inputStyle: {
                            paddingTop: e.spaces.xxSmall,
                            width: "100%"
                        },
                        collapsedInputStyle: {
                            flexGrow: 1
                        }
                    }
                })),
                ut = {
                    addButton: "addButton",
                    altTextLabel: "altTextLabel",
                    attachments: "attachments",
                    composeBoxContainer: "composeBoxContainer",
                    taggedUsersLabel: "taggedUsersLabel",
                    textareaPrefix: "tweetTextarea_",
                    toolBar: "toolBar",
                    scheduleOption: "scheduleOption"
                },
                lt = n("xM7j"),
                ft = n("6OUF"),
                dt = n("tZIO"),
                pt = n("5mJL"),
                ht = n("DNho"),
                gt = n("oSwX"),
                vt = n("rFBM"),
                mt = n("zfvc"),
                yt = n("yTN1"),
                _t = n("pKoL"),
                bt = n("9Xij"),
                St = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    l()(t, e);
                    var n = t.prototype;
                    return n.render = function() {
                        var e = this.props,
                            t = e.media,
                            n = e.style;
                        return p.createElement(O.a, {
                            style: n
                        }, this._renderImageGroup(t.length))
                    }, n._renderImageGroup = function(e) {
                        switch (e) {
                            case 1:
                                return this._renderGroupOf1();
                            case 2:
                                return this._renderGroupOf2();
                            case 3:
                                return this._renderGroupOf3();
                            case 4:
                                return this._renderGroupOf4();
                            default:
                                return null
                        }
                    }, n._renderGroupOf1 = function() {
                        var e = this.props.media,
                            t = e && !!e[0].mediaFile,
                            n = e && !t && e[0].externalMediaDetails || {},
                            r = n.width,
                            i = n.height;
                        return p.createElement(bt.a, {
                            ratio: t ? k.a.theme.aspectRatios.landscape : r / i
                        }, p.createElement(O.a, {
                            style: wt.mediaPreviewWrapper
                        }, this._renderMediaAtIndex(0)))
                    }, n._renderGroupOf2 = function() {
                        return p.createElement(bt.a, {
                            ratio: k.a.theme.aspectRatios.landscape
                        }, p.createElement(O.a, {
                            style: wt.mediaPreviewWrapper
                        }, this._renderMediaAtIndex(0, wt.gutterRight), this._renderMediaAtIndex(1)))
                    }, n._renderGroupOf3 = function() {
                        return p.createElement(bt.a, {
                            ratio: k.a.theme.aspectRatios.landscape
                        }, p.createElement(O.a, {
                            style: wt.mediaPreviewWrapper
                        }, this._renderMediaAtIndex(0, wt.gutterRight), this._renderColumnWithIndices([1, 2])))
                    }, n._renderGroupOf4 = function() {
                        return p.createElement(bt.a, {
                            ratio: k.a.theme.aspectRatios.landscape
                        }, p.createElement(O.a, {
                            style: wt.mediaPreviewWrapper
                        }, this._renderColumnWithIndices([0, 2], wt.gutterRight), this._renderColumnWithIndices([1, 3])))
                    }, n._renderColumnWithIndices = function(e, t) {
                        return p.createElement(O.a, {
                            style: [wt.column, t]
                        }, this._renderMediaAtIndex(e[0], wt.gutterBottom), this._renderMediaAtIndex(e[1]))
                    }, n._renderMediaAtIndex = function(e, t) {
                        var n = this.props,
                            r = n.media,
                            i = n.mediaMetadata,
                            o = n.editable,
                            a = n.isActive,
                            s = n.onClickMedia,
                            c = n.onEditMedia,
                            u = n.onRemoveMedia,
                            l = n.onSetMediaPreviewRef,
                            f = r[e];
                        return p.createElement(_t.a, {
                            accessibilityRole: s ? "button" : void 0,
                            enableGif: a,
                            key: f.id,
                            mediaItem: f,
                            onClick: s ? s(f.id) : void 0,
                            onEdit: c ? c(f.id) : void 0,
                            onRemove: u(f.id),
                            ref: l,
                            style: [wt.mediaContainer, t],
                            withAltTextLabel: i && i[f.id.toString()] && !!i[f.id.toString()].altText,
                            withCloseButton: o && a,
                            withEditButton: c && o && a
                        })
                    }, t
                }(p.Component),
                wt = k.a.create((function(e) {
                    return {
                        column: {
                            flexDirection: "column",
                            flexGrow: 1,
                            flexBasis: 0
                        },
                        gutterRight: {
                            marginRight: e.spaces.xSmall
                        },
                        gutterBottom: {
                            marginBottom: e.spaces.xSmall
                        },
                        mediaContainer: {
                            borderRadius: e.borderRadii.large,
                            transitionProperty: "width",
                            transitionDuration: "0.1s",
                            transitionTimingFunction: "ease-out",
                            overflow: "hidden",
                            flexGrow: 1,
                            flexBasis: 0
                        },
                        mediaPreviewWrapper: {
                            flexDirection: "row",
                            height: "100%"
                        }
                    }
                })),
                Ct = n("S1qy"),
                xt = n.n(Ct),
                Et = n("cjAp"),
                kt = n.n(Et),
                Tt = _.a.a8694a8b,
                Ot = _.a.c2332d52,
                Dt = _.a.a380d0ab,
                It = _.a.dee3bef4,
                Mt = _.a.e25ce40e,
                At = _.a.gaea80bc,
                Rt = _.a.ea24bfb8,
                Kt = _.a.j52f0636,
                Bt = _.a.ee3ade11,
                Lt = _.a.ba2da248,
                Pt = _.a.b973c93e,
                Ft = _.a.dd07db38,
                Nt = _.a.bc5a0502,
                zt = _.a.ad62343c,
                jt = _.a.d4fa2603,
                Ut = ["ja", "zh-cn", "zh-tw", "ko"],
                Ht = _.a.ia24dc8c,
                Wt = p.createElement(ie.a, null),
                Vt = p.createElement(ve.a, null),
                qt = p.createElement(ye.a, null),
                Gt = p.createElement(le.a, null),
                Xt = p.createElement(be.a, null),
                Yt = function(e) {
                    function t(t) {
                        var n;
                        n = e.call(this, t) || this, d()(c()(n), "_handleConversationControlsValueChange", (function(e) {
                            n.props.updateConversationControlsValue(e)
                        })), d()(c()(n), "_renderConversationControls", (function(e) {
                            var t = n.props,
                                r = t.conversationControlsValue,
                                i = t.isActive,
                                o = t.isInline,
                                a = t.isReply;
                            if (!n._conversationControlsCreationEnabled) return null;
                            var s = i && !a && e,
                                c = !s && !o;
                            return c || s ? p.createElement(J, {
                                hidden: c,
                                onChange: n._handleConversationControlsValueChange,
                                value: r
                            }) : null
                        })), d()(c()(n), "_renderMainContent", (function() {
                            var e = n.props,
                                t = e.additionalToolbarContent,
                                r = e.data,
                                i = e.editable,
                                o = e.index,
                                a = e.isActive,
                                s = e.isExpanded,
                                c = e.isInline,
                                u = e.isInlineReply,
                                l = e.isLast,
                                f = e.keyCommandHandlers,
                                d = e.onFilesAdded,
                                h = e.onTextInputBlur,
                                g = e.onTypeaheadStateChange,
                                v = e.positionCursorAtBeginning,
                                m = e.richTextInputContext,
                                y = r.text,
                                _ = 0 === o && l,
                                b = n.props.typeaheadWrapper,
                                S = !!m,
                                w = m || {},
                                C = w.element,
                                x = w.sendTweetCommandName,
                                E = w.dismissComposerCommandName,
                                k = m ? {
                                    dismissComposerCommandName: E,
                                    editorState: n.state.editorState,
                                    element: C,
                                    sendTweetCommandName: x
                                } : void 0,
                                T = u && !m && !s;
                            return p.createElement(O.a, {
                                style: ct.textInputArea
                            }, p.createElement(O.a, {
                                style: s ? ct.inputStyle : ct.collapsedInputStyle
                            }, p.createElement(b, {
                                contextText: r.text,
                                isInline: c,
                                onTextUpdated: n._handleTextChange,
                                onTypeaheadStateChange: g
                            }, (function(e) {
                                return p.createElement(ft.a, {
                                    appTextSize: "large",
                                    ariaLabel: It,
                                    autoFocus: a && !c,
                                    editable: i,
                                    inputStyle: [ct.textInputStyle, T && ct.textInputMobileCollapsed],
                                    keyCommandHandlers: f,
                                    maxNumberOfLines: S ? 30 : 10,
                                    multiline: !0,
                                    numberOfLines: n._calcNumberOfLines(),
                                    onBlur: h,
                                    onChange: n._getHandleChange(e),
                                    onFilesAdded: d,
                                    placeholder: n._getPlaceHolderText(),
                                    positionCursorAtBeginning: v,
                                    positionCursorAtEnd: !v,
                                    ref: n._setTextInputRef,
                                    renderCloseButton: a && n._isEmpty() && !_ ? n._renderCloseButton : void 0,
                                    renderContentBelow: n._renderTweetAttachment,
                                    richTextInputContext: k,
                                    style: ct.noBackground,
                                    styleType: "selection",
                                    testID: "" + ut.textareaPrefix + o,
                                    value: y
                                })
                            }))), s ? null : t)
                        })), d()(c()(n), "_calcNumberOfLines", (function() {
                            var e = n.props,
                                t = e.richTextInputContext,
                                r = e.isInline,
                                i = e.data,
                                o = !!t,
                                a = i.media,
                                s = i.pollActive,
                                c = i.quotedStatus;
                            return o && (r || a.length || s || c) ? 1 : 6
                        })), d()(c()(n), "_renderScheduledTweetLegend", (function() {
                            var e = n.props.scheduledFor;
                            return p.createElement(at.a, {
                                onPress: n._handlePressScheduledTweetLegend,
                                scheduledFor: e
                            })
                        })), d()(c()(n), "_handlePressScheduledTweetLegend", (function() {
                            var e = n.props,
                                t = e.history,
                                r = e.analytics,
                                i = e.setActiveParentKey;
                            t.push("/compose/tweet/schedule"), r.scribe({
                                element: "tweet_legend",
                                action: "click"
                            }), i()
                        })), d()(c()(n), "_renderEmojiPicker", (function() {
                            return p.createElement(Z.a, {
                                onEmojiDropdownDismiss: n._handleSetFocus,
                                onEmojiSelect: n._handleInsertEmoji,
                                size: "normal",
                                style: [ct.iconEmojiPicker, ct.toolBarButton]
                            })
                        })), d()(c()(n), "_renderSchedulingEntryPoint", (function() {
                            return n._tweetSchedulingEnabled ? "overflow" === n._tweetSchedulingEntryPoint ? n._renderMoreOptions() : n._renderSchedulingButton() : null
                        })), d()(c()(n), "_renderMoreOptions", (function() {
                            return p.createElement(v.a, {
                                accessibilityLabel: Ot,
                                icon: Gt,
                                renderMenu: n._renderOverflowMenu,
                                size: "normal",
                                style: ct.toolBarButton,
                                type: "text"
                            })
                        })), d()(c()(n), "_isSchedulingDisabled", (function() {
                            var e = n.props,
                                t = e.index,
                                r = e.isLast,
                                i = e.data,
                                o = i.pollActive,
                                a = i.quotedStatus,
                                s = i.text,
                                c = i.media;
                            return Boolean(o || !(0 === t && r) || a && "" === s && !c.length)
                        })), d()(c()(n), "_renderOverflowMenu", (function(e) {
                            var t = n.props.analytics,
                                r = ut.scheduleOption;
                            return t.scribe({
                                element: "more_options_menu",
                                action: "click"
                            }), p.createElement(g.a, {
                                items: [{
                                    text: Dt,
                                    Icon: be.a,
                                    disabled: n._isSchedulingDisabled(),
                                    testID: r,
                                    onClick: function() {
                                        e(), n._handleClickScheduler()
                                    }
                                }],
                                onCloseRequested: e
                            })
                        })), d()(c()(n), "_renderSchedulingButton", (function() {
                            return p.createElement(v.a, {
                                accessibilityLabel: Dt,
                                disabled: n._isSchedulingDisabled(),
                                icon: Xt,
                                onClick: n._handleClickScheduler,
                                size: "normal",
                                style: ct.toolBarButton,
                                testID: ut.scheduleOption,
                                type: "text"
                            })
                        })), d()(c()(n), "_handleClickScheduler", (function() {
                            var e = n.props,
                                t = e.analytics,
                                r = e.history,
                                i = e.setActiveParentKey;
                            r.push("/compose/tweet/schedule"), t.scribe({
                                element: "schedule_tweet",
                                action: "click"
                            }), i()
                        })), d()(c()(n), "_renderCloseButton", (function() {
                            var e = n.props.onRemoveComposer;
                            return p.createElement(v.a, {
                                accessibilityLabel: Rt,
                                icon: Wt,
                                onPress: e,
                                size: "small",
                                type: "text"
                            })
                        })), d()(c()(n), "_renderTweetAttachment", (function() {
                            var e = n.props,
                                t = e.data,
                                r = e.editable,
                                i = e.isActive,
                                o = t.media,
                                a = t.mediaMetadata,
                                s = t.pollActive,
                                c = t.initialPollChoices,
                                u = t.initialPollDuration,
                                l = t.quotedStatus;
                            return 0 !== o.length || s || l ? p.createElement(O.a, {
                                onClick: n._handleFocus,
                                style: [ct.attachmentContainer, ct.tweetAttachmentArea],
                                testID: ut.attachments
                            }, o.length > 0 ? p.createElement(St, {
                                editable: r,
                                isActive: i,
                                media: o,
                                mediaMetadata: a,
                                onClickMedia: n.hasAttachedImage ? n._handleClickMediaDetail : void 0,
                                onEditMedia: n.hasAttachedImage ? n._handleClickMediaDetail : void 0,
                                onRemoveMedia: n._handleMediaRemoveFactory,
                                onSetMediaPreviewRef: n._handleSetMediaPreviewRef,
                                style: ct.mediaPreview
                            }) : null, n._renderMediaActions(), s ? p.createElement(rt, {
                                editable: r,
                                initialChoices: c,
                                initialDuration: u,
                                isActive: i,
                                onInvalid: n._handlePollInvalid,
                                onRemove: n._handlePollRemove,
                                onValid: n._handlePollValid,
                                ref: n._setPollCreatorRef
                            }) : null, l ? n._renderQuoteTweet(l) : null) : null
                        })), d()(c()(n), "_renderQuoteTweet", (function(e) {
                            var t = n.props.data.media,
                                r = e.tombstoneInfo;
                            return r && r.richText ? p.createElement(lt.a, null, p.createElement(ot.b, {
                                entities: r.richText.entities,
                                rtl: r.richText.rtl,
                                text: r.richText.text
                            })) : p.createElement(it.a, {
                                isCondensed: t.length > 0,
                                shouldAnimate: !0,
                                shouldTruncate: !1,
                                style: ct.quoteTweet,
                                tweet: e,
                                withLink: !1,
                                withUserHoverCard: !1
                            })
                        })), d()(c()(n), "_renderToolbar", (function(e) {
                            var t = n.props,
                                r = t.additionalToolbarContent,
                                i = t.hidePollAndScheduling,
                                o = t.isReply,
                                a = t.richTextInputContext,
                                s = t.isSelfThreadReply,
                                c = !!a,
                                u = !t.isInlineReply && !i;
                            return p.createElement(O.a, {
                                style: ct.toolBar,
                                testID: ut.toolBar
                            }, p.createElement(O.a, {
                                style: ct.toolBarIconsContainer
                            }, n._renderMediaPickerButton(), n._renderGifButton(), u ? n._renderPollButton() : null, c ? n._renderEmojiPicker() : null, u ? n._renderSchedulingEntryPoint() : null), p.createElement(O.a, {
                                style: ct.toolBarIconsContainer
                            }, e ? n._renderCountdownCircle() : null, o && !s || !e ? null : p.createElement(p.Fragment, null, p.createElement(O.a, {
                                style: ct.separator
                            }), n._renderAddComposerButton()), r))
                        })), d()(c()(n), "_addOverflowStyle", (function(e) {
                            var t = n.props.richTextInputContext;
                            if (t) {
                                var r = e.getCurrentContent().getPlainText(),
                                    i = r.length,
                                    o = n._getParsedTweet(r).validRangeEnd,
                                    a = o + 1 < i;
                                if (n.state.hasOverflowStyle || a) {
                                    var s = a ? o + 1 : -1;
                                    return {
                                        editorState: t.updateOverflowStyle(e, s, n.state.hasOverflowStyle),
                                        hasOverflowStyle: a
                                    }
                                }
                                return {
                                    editorState: e,
                                    hasOverflowStyle: a
                                }
                            }
                        })), d()(c()(n), "_getHandleChange", Object(Te.a)((function(e) {
                            return function(t) {
                                e(t), n._handleTextChange(t)
                            }
                        }))), d()(c()(n), "_handleTextChange", (function(e) {
                            var t, r = n.props,
                                i = r.data,
                                o = i.key,
                                a = i.text,
                                s = r.onTextChange,
                                c = r.richTextInputContext;
                            if (c) {
                                t = e.getCurrentContent().getPlainText();
                                var u = c.convertEmojiToEntities(e);
                                n.setState(n._addOverflowStyle(u))
                            } else t = dt.a.replaceCarriageReturns(e.target.value);
                            a !== t && s(t, o)
                        })), d()(c()(n), "_handleClickAltTextShortcut", (function() {
                            n.props.analytics.scribe({
                                element: "alt_text_button",
                                action: "click"
                            })
                        })), d()(c()(n), "_handleClickMediaDetail", (function(e) {
                            return function() {
                                var t = n.props,
                                    r = t.analytics,
                                    i = t.history;
                                r.scribe({
                                    element: "media_detail_button",
                                    action: "click"
                                }), n.hasAttachedImage && ($.a.isTrue("responsive_web_alt_text_by_default_enabled") ? i.push("/compose/tweet/media", {
                                    mediaId: e,
                                    tab: "crop"
                                }) : i.push("/compose/tweet/media", {
                                    mediaId: e
                                }))
                            }
                        })), d()(c()(n), "_handleDragDrop", (function(e) {
                            var t = n.props,
                                r = t.addToast,
                                i = t.data.pollActive,
                                o = t.onFilesAdded;
                            i ? r({
                                text: Mt
                            }) : o(e)
                        })), d()(c()(n), "_handleMediaRemoveFactory", (function(e) {
                            return function() {
                                n.props.onRemoveMedia(n.props.index, e)
                            }
                        })), d()(c()(n), "_handleInsertEmoji", (function(e) {
                            var t = n.state.editorState,
                                r = n.props.richTextInputContext;
                            if (r) {
                                var i = r.insertTextAtCursor(t, e.text);
                                n._handleTextChange(i)
                            }
                        })), d()(c()(n), "_validateMedia", (function(e) {
                            var t = n.props.data.media;
                            return h.c(t.concat(e))
                        })), d()(c()(n), "_handlePollAdd", (function() {
                            var e = n.props,
                                t = e.analytics,
                                r = e.index,
                                i = e.updateSingleComposer;
                            t.scribe({
                                element: "add_poll",
                                action: "click"
                            }), i({
                                pollActive: !0
                            }, r)
                        })), d()(c()(n), "_handlePollRemove", (function() {
                            var e = n.props,
                                t = e.analytics,
                                r = e.index,
                                i = e.updateSingleComposer;
                            t.scribe({
                                element: "remove_poll",
                                action: "click"
                            }), i({
                                pollActive: !1
                            }, r)
                        })), d()(c()(n), "_handlePollInvalid", (function() {
                            var e = n.props,
                                t = e.data.pollValid,
                                r = e.index,
                                i = e.updateSingleComposer;
                            t && i({
                                pollValid: !1
                            }, r)
                        })), d()(c()(n), "_handlePollValid", (function() {
                            var e = n.props,
                                t = e.data.pollValid,
                                r = e.index,
                                i = e.updateSingleComposer;
                            !t && i({
                                pollValid: !0
                            }, r)
                        })), d()(c()(n), "_handleFocus", (function() {
                            var e = n.props,
                                t = e.isActive,
                                r = e.index,
                                i = e.onFocus;
                            (0, e.setActiveParentKey)(), t || (window.requestAnimationFrame((function() {
                                n._mediaPreviewRef && n._mediaPreviewRef._playVideo()
                            })), i(r))
                        })), d()(c()(n), "_handleSetFocus", (function() {
                            n._textInputRef && n._textInputRef.focus()
                        })), d()(c()(n), "_formatCountdownNumber", (function(e) {
                            return Ht(Math.ceil(e / n._userLanguageWeight))
                        })), d()(c()(n), "_getPlaceHolderText", (function() {
                            var e = n.props,
                                t = e.data,
                                r = t.quotedStatus,
                                i = t.pollActive,
                                o = e.isReply,
                                a = e.isSelfThreadReply,
                                s = e.index;
                            return r ? Nt : i ? jt : o && !a ? zt : a || s > 0 ? Ft : Pt
                        })), d()(c()(n), "_getNumberOfAltTextEntries", (function() {
                            var e = n.props.data,
                                t = e.mediaMetadata;
                            return e.media.reduce((function(e, n) {
                                var r;
                                return t && !Object(we.a)(null === (r = t[n.id.toString()]) || void 0 === r ? void 0 : r.altText) ? e + 1 : e
                            }), 0)
                        })), d()(c()(n), "_getParsedTweet", Object(Te.a)((function(e) {
                            var t = kt.a[n.props.twitterTextConfigurationVersion];
                            return xt()(e, t)
                        }))), d()(c()(n), "_isEmpty", (function() {
                            var e = n.props.data;
                            return Object(Ce.b)(e)
                        })), d()(c()(n), "_isScheduled", (function() {
                            var e = n.props.data.scheduledFor;
                            return n._tweetSchedulingEnabled && Object(xe.h)(e)
                        })), d()(c()(n), "_setPollCreatorRef", (function(e) {
                            n._pollCreatorRef = e
                        })), d()(c()(n), "_handleSetMediaPreviewRef", (function(e) {
                            n._mediaPreviewRef = e
                        })), d()(c()(n), "_setTextInputRef", (function(e) {
                            n._textInputRef = e
                        }));
                        var r = t.richTextInputContext,
                            i = t.userLanguage,
                            o = t.data.text,
                            a = (r || {}).initEditorState;
                        return n._tweetSchedulingEnabled = $.a.isTrue("responsive_web_scheduling_enabled"), n._tweetSchedulingEntryPoint = $.a.hasValue("responsive_web_scheduling_entry_point", "overflow") ? "overflow" : "inline", n._conversationControlsCreationEnabled = $.a.isTrue("conversation_controls_limited_replies_creation_enabled"), n._userLanguageWeight = i && Ut.indexOf(i) > -1 ? 2 : 1, n.state = {
                            editorState: a && a(o),
                            hasOverflowStyle: !1
                        }, n
                    }
                    l()(t, e);
                    var n = t.prototype;
                    return n.componentDidUpdate = function(e) {
                        (this.hasExternalMedia || this.props.data.media.some((function(e) {
                            return e.mediaFile && !(e.mediaFile instanceof Se.a) && e.mediaFile.isVideo
                        }))) && e.isActive && !this.props.isActive && this._mediaPreviewRef && this._mediaPreviewRef._pauseVideo()
                    }, n.focus = function() {
                        this._textInputRef && this._textInputRef.focus()
                    }, n.render = function() {
                        var e = this,
                            t = this.props,
                            n = t.isActive,
                            r = t.isExpanded,
                            i = t.isInline,
                            o = t.isLast,
                            a = t.loggedInUser,
                            s = t.withAvatar,
                            c = !this._isEmpty();
                        return p.createElement(O.a, {
                            onFocus: this._handleFocus,
                            style: [ct.root, !n && ct.blurStyle]
                        }, p.createElement(pt.a, {
                            avatarCell: p.createElement(p.Fragment, null, s ? p.createElement(ht.a.Consumer, null, (function(e) {
                                var t = e.avatarSize;
                                return p.createElement(gt.default, {
                                    accessibilityLabel: a ? a.name : void 0,
                                    screenName: a ? a.screen_name : void 0,
                                    size: t,
                                    style: ct.avatar,
                                    uri: a ? a.profile_image_url_https : void 0,
                                    withLink: i
                                })
                            })) : null, o ? null : p.createElement(O.a, {
                                style: [ct.conversationLine, !s && ct.conversationLineWithOverflow]
                            })),
                            avatarCellStyle: r ? ct.avatarContainerExpanded : ct.avatarContainer,
                            cellStyle: ct.rightColumn
                        }, this._tweetSchedulingEnabled ? this._renderScheduledTweetLegend() : null, p.createElement(O.a, {
                            style: ct.inputArea
                        }, p.createElement(vt.a, {
                            allowDragDrop: !this.mediaAttachDisabled,
                            onDragEnter: this._handleFocus,
                            onFilesAdded: this._handleDragDrop,
                            style: ct.dragDrop
                        }, (function(t) {
                            return p.createElement(p.Fragment, null, p.createElement(O.a, {
                                style: [ct.composeBoxContainer]
                            }, e._renderMainContent()))
                        }))), this._renderConversationControls(c), p.createElement(mt.b, {
                            show: n && r
                        }, this._renderToolbar(c))))
                    }, n._renderMediaPickerButton = function() {
                        var e = this.props,
                            t = e.data.media,
                            n = e.onFilesAdded,
                            r = e.setActiveParentKey,
                            i = this.mediaAttachDisabled,
                            o = t.length < 3;
                        return p.createElement(Ee.a, {
                            acceptGifs: 0 === t.length,
                            disabled: i,
                            multiple: o,
                            onChange: n,
                            onPress: r,
                            style: [ct.toolBarButton, ct.firstToolBarButton],
                            type: "text"
                        })
                    }, n._renderGifButton = function() {
                        var e = this.props,
                            t = e.data,
                            n = t.media,
                            r = t.pollActive,
                            i = e.history,
                            o = e.loggedInUser,
                            a = e.setActiveParentKey,
                            s = r || n.length || !o;
                        return p.createElement(te.a, {
                            enabled: !s,
                            gifSearchKeySource: ne.a.Composition,
                            history: i,
                            onPress: a
                        })
                    }, n._renderPollButton = function() {
                        var e = this.props,
                            t = e.data,
                            n = t.media,
                            r = t.pollActive,
                            i = t.quotedStatus,
                            o = e.loggedInUser,
                            a = this._isScheduled(),
                            s = !(!(r || n.length || i || a) && o);
                        return p.createElement(v.a, {
                            accessibilityLabel: Tt,
                            disabled: s,
                            icon: qt,
                            onPress: this._handlePollAdd,
                            size: "normal",
                            style: ct.toolBarButton,
                            type: "text"
                        })
                    }, n._renderMediaActions = function() {
                        var e = this.props,
                            t = e.altTextSettingEnabled,
                            n = e.data,
                            r = n.gifMetadata,
                            i = n.media,
                            o = 0 !== n.mediaTags.length,
                            a = (i.some((function(e) {
                                return e.mediaFile && e.mediaFile.isGif
                            })) || this.hasExternalMedia) && (t || $.a.isTrue("responsive_web_alt_text_by_default_enabled")) && $.a.isTrue("responsive_web_alt_text_gifs_enabled");
                        return this.hasAttachedImage || r || a ? p.createElement(O.a, {
                            style: ct.imageActions
                        }, r ? p.createElement(O.a, {
                            style: ct.addImageTextPadding
                        }, p.createElement(ee.a, {
                            gifUrl: r.url,
                            provider: r.provider
                        })) : null, this.hasAttachedImage ? p.createElement(D.b, {
                            accessibilityLabel: Lt,
                            color: "deepGray",
                            link: "/compose/tweet/tags",
                            style: [ct.addImageTextContainer, ct.addImageTextPadding]
                        }, o ? this._renderTaggedUsers() : this._renderTagPeopleLabel()) : null, t && this.hasAttachedImage || a ? p.createElement(D.b, {
                            accessibilityLabel: Kt({
                                numberOfImages: i.length
                            }),
                            color: "deepGray",
                            link: $.a.isTrue("responsive_web_alt_text_by_default_enabled") ? {
                                pathname: "/compose/tweet/media",
                                state: {
                                    mediaId: i[0].id,
                                    tab: "alt_text"
                                }
                            } : "/compose/tweet/alt_text",
                            onPress: $.a.isTrue("responsive_web_alt_text_by_default_enabled") ? this._handleClickAltTextShortcut : void 0,
                            style: ct.addImageTextContainer
                        }, this._renderAltTextLabel()) : null) : null
                    }, n._renderTagPeopleLabel = function() {
                        return p.createElement(D.b, {
                            color: "deepGray",
                            size: "small"
                        }, p.createElement(he.a, {
                            style: ct.addImageActionIcon
                        }), Lt)
                    }, n._renderTaggedUsers = function() {
                        var e = this.props.data.mediaTags.map((function(e) {
                            return {
                                name: e.data.name,
                                screen_name: e.data.screen_name,
                                type: e.type,
                                user_id: e.data.id_str
                            }
                        }));
                        return p.createElement(D.b, {
                            color: "deepGray",
                            size: "small",
                            testID: ut.taggedUsersLabel
                        }, p.createElement(de.a, {
                            style: ct.addImageActionIcon
                        }), p.createElement(ke.a, {
                            users: e
                        }))
                    }, n._renderAltTextLabel = function() {
                        var e = this.props.data,
                            t = e.media,
                            n = e.mediaMetadata;
                        return this.hasAttachedAltText ? t.length > 1 ? p.createElement(D.b, {
                            color: "deepGray",
                            size: "small",
                            testID: ut.altTextLabel
                        }, p.createElement(ae.a, {
                            style: ct.addImageActionIcon
                        }), Bt({
                            numberOfAltTextEntries: this._getNumberOfAltTextEntries()
                        })) : p.createElement(D.b, {
                            color: "deepGray",
                            numberOfLines: 1,
                            size: "small",
                            testID: ut.altTextLabel
                        }, p.createElement(ae.a, {
                            style: ct.addImageActionIcon
                        }), n && n[t[0].id.toString()] && n[t[0].id.toString()].altText) : p.createElement(D.b, {
                            color: "deepGray",
                            size: "small",
                            testID: ut.altTextLabel
                        }, p.createElement(ce.a, {
                            style: ct.addImageActionIcon
                        }), Kt({
                            numberOfImages: t.length
                        }))
                    }, n._renderCountdownCircle = function() {
                        var e = this.props,
                            t = e.data.text,
                            n = e.twitterTextConfigurationVersion,
                            r = kt.a[n],
                            i = this._getParsedTweet(t).weightedLength;
                        return p.createElement(yt.a, {
                            count: i,
                            formatNumber: this._formatCountdownNumber,
                            maxCount: r.maxWeightedTweetLength,
                            warningCount: 260
                        })
                    }, n._renderAddComposerButton = function() {
                        var e = this.props,
                            t = e.disableAddTweet,
                            n = e.loggedInUser,
                            r = e.isInline,
                            i = e.onAddComposer,
                            o = this._isEmpty(),
                            a = this._isScheduled(),
                            s = t || o || a || !n;
                        return p.createElement(v.a, {
                            accessibilityLabel: At,
                            disabled: s,
                            icon: Vt,
                            link: !r || o || s ? void 0 : "/compose/tweet",
                            onPress: i,
                            size: "small",
                            testID: ut.addButton,
                            type: "secondary"
                        })
                    }, a()(t, [{
                        key: "pollChoices",
                        get: function() {
                            return this.props.data.pollActive && this._pollCreatorRef ? this._pollCreatorRef.choices : void 0
                        }
                    }, {
                        key: "pollDuration",
                        get: function() {
                            return this.props.data.pollActive && this._pollCreatorRef ? this._pollCreatorRef.duration : void 0
                        }
                    }, {
                        key: "mediaAttachDisabled",
                        get: function() {
                            var e = this.props,
                                t = e.data,
                                n = t.media,
                                r = t.pollActive,
                                i = e.loggedInUser,
                                o = n.length,
                                a = n.some((function(e) {
                                    var t;
                                    return null === (t = e.mediaFile) || void 0 === t ? void 0 : t.isGif
                                })),
                                s = n.some((function(e) {
                                    return e.mediaFile && !(e.mediaFile instanceof Se.a) && e.mediaFile.isVideo
                                }));
                            return 4 === o || a || s || r || this.hasExternalMedia || !i
                        }
                    }, {
                        key: "hasAttachedImage",
                        get: function() {
                            return this.props.data.media.some((function(e) {
                                var t;
                                return null === (t = e.mediaFile) || void 0 === t ? void 0 : t.isImage
                            }))
                        }
                    }, {
                        key: "hasAttachedAltText",
                        get: function() {
                            return this._getNumberOfAltTextEntries() > 0
                        }
                    }, {
                        key: "hasExternalMedia",
                        get: function() {
                            return this.props.data.media.some((function(e) {
                                return !!e.externalMediaDetails
                            }))
                        }
                    }]), t
                }(p.Component);
            d()(Yt, "defaultProps", {
                twitterTextConfigurationVersion: "defaults",
                withAvatar: !0,
                conversationControlsValue: "all",
                updateConversationControlsValue: function() {}
            });
            var Jt = Object(Ge.a)(Yt),
                Qt = (n("KI7T"), n("mN6z")),
                Zt = n("fs1G"),
                $t = n("SrIh"),
                en = n("BLtI"),
                tn = n("kY28"),
                nn = (n("AxOO"), function(e) {
                    var t = e.children;
                    return p.createElement(D.b, {
                        color: "link"
                    }, t)
                }),
                rn = function(e) {
                    return "@" + e
                },
                on = function(e) {
                    function t() {
                        for (var t, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return t = e.call.apply(e, [this].concat(r)) || this, d()(c()(t), "_handleTweetAction", (function(e) {
                            e && e.preventDefault && e.preventDefault()
                        })), t
                    }
                    l()(t, e);
                    var n = t.prototype;
                    return n.shouldComponentUpdate = function(e) {
                        return !Object(Qt.a)(this.props, e)
                    }, n.UNSAFE_componentWillMount = function() {
                        var e = this.props,
                            t = e.excludedRecipients,
                            n = e.inReplyToStatus,
                            r = e.loggedInUserId;
                        this._calculatedRecipients = h.a({
                            inReplyToStatus: n,
                            loggedInUserId: r
                        }).filter((function(e) {
                            var n = e.id_str;
                            return t.indexOf(n) < 0
                        }))
                    }, n.render = function() {
                        var e = this.props,
                            t = e.dataSaverMode,
                            n = e.shouldDisplayRepliesText,
                            r = e.showParentTweet,
                            i = e.onPress;
                        return p.createElement(O.a, null, r ? p.createElement(en.a, {
                            conversationPosition: {
                                isStart: !0
                            },
                            dataSaverMode: t,
                            linkableQuotedTweet: !1,
                            linkify: !1,
                            onAnalyticsClick: Zt.a,
                            onAvatarClick: this._handleTweetAction,
                            onCardClick: this._handleTweetAction,
                            onCardShown: this._handleTweetAction,
                            onEntityClick: this._handleTweetAction,
                            onMediaClick: this._handleTweetAction,
                            onPollVote: Zt.a,
                            onReplyContextClick: this._handleTweetAction,
                            replyContext: tn.a.ReplyContextTypes.None,
                            tweet: this.props.inReplyToStatus,
                            withAvatarLink: !1,
                            withCardLinks: !0,
                            withInlineMedia: !1,
                            withQuotedTweetLinks: !0,
                            withSocialContext: !1,
                            withTimestampLink: !1,
                            withUserHoverCard: !1
                        }) : null, p.createElement(O.a, {
                            style: sn.replyUsersContainer
                        }, p.createElement(pt.a, {
                            avatarCell: r ? p.createElement(O.a, {
                                style: sn.conversationLine
                            }) : null,
                            avatarCellStyle: sn.conversationLineContainer,
                            cellStyle: sn.repliesTextContainer,
                            style: sn.grid
                        }, n ? p.createElement(D.b, {
                            accessibilityRole: "button",
                            color: "deepGray",
                            onPress: i,
                            style: r && sn.repliesMessage
                        }, this._renderContextMessage()) : null)))
                    }, n._renderContextMessage = function() {
                        var e = this.props.inReplyToStatus,
                            t = (e.retweeted_status || e).user;
                        switch (this._calculatedRecipients.length) {
                            case 0:
                                return Object($t.a)("Compose reply context should not have 0 recipients"), null;
                            case 1:
                                return p.createElement(_.a.I18NFormatMessage, {
                                    $i18n: "da23d59d"
                                }, p.createElement(nn, null, _.a.e6c5d8ce({
                                    userName: rn(t.screen_name)
                                })));
                            case 2:
                                var n = this._calculatedRecipients.find((function(e) {
                                    return e.id_str !== t.id_str
                                })) || {};
                                return p.createElement(_.a.I18NFormatMessage, {
                                    $i18n: "fb655933"
                                }, p.createElement(nn, null, _.a.j8324cad({
                                    replyUserName: rn(t.screen_name),
                                    otherUserName: rn(n.screen_name)
                                })));
                            case 3:
                                var r = this._calculatedRecipients.filter((function(e) {
                                        return e.id_str !== t.id_str
                                    })),
                                    i = r[0],
                                    o = r[1];
                                return p.createElement(_.a.I18NFormatMessage, {
                                    $i18n: "ad8ffca3"
                                }, p.createElement(nn, null, _.a.ha19a8c5({
                                    userOneName: rn(t.screen_name),
                                    userTwoName: rn(i.screen_name),
                                    userThreeName: rn(o.screen_name)
                                })));
                            default:
                                var a = this._calculatedRecipients.find((function(e) {
                                    return e.id_str !== t.id_str
                                })) || {};
                                return p.createElement(_.a.I18NFormatMessage, {
                                    $i18n: "ha99ec97"
                                }, p.createElement(nn, null, _.a.bca18233({
                                    userOneName: rn(t.screen_name),
                                    userTwoName: rn(a.screen_name),
                                    othersCount: this._calculatedRecipients.length - 2
                                })))
                        }
                    }, t
                }(p.Component);
            d()(on, "defaultProps", {
                showParentTweet: !0
            });
            var an, sn = k.a.create((function(e) {
                    return {
                        replyUsersContainer: {
                            flexDirection: "row",
                            minHeight: e.spaces.xSmall,
                            paddingHorizontal: e.componentDimensions.gutterHorizontal,
                            paddingVertical: 0
                        },
                        grid: {
                            flexGrow: 1,
                            flexShrink: 1
                        },
                        repliesTextContainer: {
                            flexGrow: 1
                        },
                        repliesMessage: {
                            flexGrow: 1,
                            paddingBottom: e.spaces.small,
                            paddingTop: e.spaces.xxSmall
                        },
                        conversationLineContainer: {
                            alignItems: "center"
                        },
                        conversationLine: {
                            backgroundColor: e.colors.lightGray,
                            flexGrow: 1,
                            minHeight: 0,
                            width: e.componentDimensions.conversationLineWidth,
                            marginBottom: e.spaces.xxSmall
                        }
                    }
                })),
                cn = on,
                un = n("8OQS"),
                ln = n.n(un),
                fn = n("nt0t"),
                dn = n("04Qv"),
                pn = n("Tb0w"),
                hn = n("1YZw"),
                gn = n("pidX"),
                vn = n("0KEI"),
                mn = n("AspN"),
                yn = n("P1r1"),
                _n = n("RqPI"),
                bn = n("XOJV"),
                Sn = n("G6rE"),
                wn = n("oEGd"),
                Cn = n("hqKg"),
                xn = $.a.isTrue("responsive_web_inline_reply_enabled"),
                En = xn ? dn : fn,
                kn = function(e) {
                    return e.parentTweetId || (e.isInline ? "homeTimeline" : "modal")
                },
                Tn = function(e) {
                    return function(t, n) {
                        var r = function(e, t) {
                            return t.location.state
                        }(0, n);
                        return r ? e(r) : void 0
                    }
                },
                On = Object(Cn.createSelector)((function(e, t) {
                    return t.activeUser
                }), Sn.e.selectLoggedInUser, (function(e, t) {
                    return e || t
                })),
                Dn = function(e, t) {
                    return t.parentTweetId || In(e, t) || Mn(e, t)
                },
                In = function(e, t) {
                    var n = t.location.query;
                    return n && "string" == typeof n.in_reply_to ? n.in_reply_to : void 0
                },
                Mn = Tn((function(e) {
                    return e.inReplyToStatusId
                })),
                An = function(e, t) {
                    return t.location.pathname.indexOf("/intent/") > -1
                },
                Rn = Tn((function(e) {
                    return e.convoCardData
                })),
                Kn = Tn((function(e) {
                    return e.externalMedia
                })),
                Bn = Tn((function(e) {
                    return e.externalMediaFiles
                })),
                Ln = Tn((function(e) {
                    return e.defaultText
                })),
                Pn = function(e, t) {
                    var n = Ln(e, t),
                        r = Object(gn.a)(t.location);
                    return (An(0, t) || function(e, t) {
                        return t.location.pathname.indexOf("/compose/tweet") > -1
                    }(0, t)) && r ? r : n
                },
                Fn = Tn((function(e) {
                    return e.quotedStatus
                })),
                Nn = Tn((function(e) {
                    return e.isSelfThreadReply
                })),
                zn = Tn((function(e) {
                    return e.positionCursorAtBeginning
                })),
                jn = Tn((function(e) {
                    return e.promotedContent
                })),
                Un = Object(Cn.createSelector)((function(e, t) {
                    var n = kn(t);
                    return xn ? dn.selectDraftComposerData(e, n) : fn.selectDraftComposerData(e)
                }), Pn, (function(e, t) {
                    return t.quotedStatus ? t.quotedStatus : Fn(e, t)
                }), mn.f, (function(e, t, n, r) {
                    return e.map((function(e, i) {
                        return Object.assign({}, function(e) {
                            e.mediaIds;
                            return ln()(e, ["mediaIds"])
                        }(e), {
                            media: r.filter((function(t) {
                                return e.mediaIds.some((function(e) {
                                    return e === t.id
                                }))
                            })),
                            quotedStatus: 0 === i ? n : void 0,
                            text: 0 === i && t ? t : e.text
                        })
                    }))
                })),
                Hn = Object(Cn.createStructuredSelector)({
                    activeComposerIndex: function(e, t) {
                        var n = kn(t);
                        return xn ? dn.selectActiveComposerIndex(e, n) : fn.selectActiveComposerIndex(e)
                    },
                    activeUser: On,
                    altTextComposeEnabled: function(e, t) {
                        return Object(yn.g)(e) || !!t.forceAltTextComposeEnabled
                    },
                    composerData: Un,
                    conversationControlsValue: function(e, t) {
                        var n = kn(t);
                        return xn ? dn.selectDraftConversationControlsValue(e, n) : fn.selectDraftConversationControlsValue(e)
                    },
                    dataSaverMode: yn.j,
                    excludedRecipients: function(e, t) {
                        var n = kn(t);
                        return xn ? dn.selectDraftExcludedRecipients(e, n) : fn.selectDraftExcludedRecipients(e)
                    },
                    externalMedia: Kn,
                    externalMediaFiles: Bn,
                    inReplyToStatus: function(e, t) {
                        var n = Dn(e, t);
                        return n ? bn.a.selectHydrated(e, n) : void 0
                    },
                    inReplyToStatusId: Dn,
                    isIntentRoute: An,
                    isSelfThreadReply: Nn,
                    isSending: function(e, t) {
                        var n = kn(t);
                        return xn ? dn.selectDraftIsSending(e, n) : fn.selectDraftIsSending(e)
                    },
                    positionCursorAtBeginning: zn,
                    loggedInUser: Sn.e.selectLoggedInUser,
                    prepopulatedText: Pn,
                    promotedContent: jn,
                    scheduledFor: En.selectScheduledFor,
                    sendingProgress: En.selectSendingProgress,
                    convoCardData: Rn,
                    userLanguage: _n.f
                }),
                Wn = {
                    addComposer: En.addComposer,
                    addToast: hn.b,
                    createLocalApiErrorHandler: Object(vn.b)("SCREEN_COMPOSE_V2"),
                    fetchInReplyToStatusIfNeeded: bn.a.fetchOneIfNeeded,
                    removeComposer: En.removeComposer,
                    resetDraft: En.resetDraft,
                    retweet: bn.a.retweet,
                    schedule: En.schedule,
                    draftTweet: En.draftTweet,
                    send: En.send,
                    updateActiveComposerIndex: En.updateActiveComposerIndex,
                    updateConvoCardState: pn.c,
                    updateConversationControlsValue: En.updateConversationControlsValue,
                    uploadMedia: mn.k,
                    addMedia: mn.b,
                    processMultipleMedia: mn.d,
                    removeMediaUpload: mn.e,
                    updateSingleComposer: fn.updateSingleComposer,
                    updateSingleComposerV3: dn.updateSingleComposer,
                    setActiveParentKey: dn.setActiveParentKey,
                    copyDataFromInlineComposerToModalComposer: dn.copyDataFromInlineComposerToModalComposer,
                    copyDataFromInlineReplyComposerToModalComposer: dn.copyDataFromInlineReplyComposerToModalComposer
                },
                Vn = Object(wn.g)(Hn, Wn),
                qn = n("45mF"),
                Gn = function(e) {
                    return new Promise((function(t, n) {
                        var r = new window.XMLHttpRequest;
                        r.responseType = "blob", r.onreadystatechange = function() {
                            r.readyState === window.XMLHttpRequest.DONE && (200 === r.status ? t(r.response) : n(new Error("Unexpected status code")))
                        }, r.onerror = function(e) {
                            return n(e)
                        }, r.ontimeout = function(e) {
                            return n(e)
                        }, r.open("GET", e, !0), r.send()
                    }))
                },
                Xn = n("W5XZ"),
                Yn = n("MXY2"),
                Jn = n("iFPY"),
                Qn = n("I8M8"),
                Zn = n("eyty"),
                $n = n("gUG0"),
                er = n("7myi"),
                tr = n("7nmT"),
                nr = n.n(tr),
                rr = n("vbWy"),
                ir = n("Rp9C"),
                or = n("k49u"),
                ar = _.a.fd7d9019,
                sr = _.a.b5377fb3,
                cr = _.a.b6cfedcc,
                ur = _.a.bcd74992,
                lr = _.a.acb297a4,
                fr = _.a.aa6d54f1,
                dr = _.a.f3fbc750,
                pr = _.a.dc049f88,
                hr = _.a.aaeb8541,
                gr = _.a.aff9a43f,
                vr = _.a.c2701a62,
                mr = _.a.a5f77977,
                yr = _.a.aac09291,
                _r = _.a.f64fdb40,
                br = ((an = {
                    defaultToast: {
                        text: cr
                    }
                })[or.a.OverStatusUpdateLimit] = {
                    toast: {
                        text: sr,
                        actionLabel: ar,
                        actionLink: "https://support.twitter.com/articles/15364"
                    }
                }, an[or.a.DuplicateStatusError] = {
                    toast: {
                        text: ur
                    }
                }, an[or.a.CurrentUserSuspended] = {
                    toast: {
                        text: lr
                    }
                }, an[or.a.InReplyToTweetNotFound] = {
                    toast: {
                        text: fr
                    }
                }, an[or.a.MentionLimitInTweetExceeded] = {
                    toast: {
                        text: dr
                    }
                }, an[or.a.UrlLimitInTweetExceeded] = {
                    toast: {
                        text: pr
                    }
                }, an[or.a.HashtagLimitInTweetExceeded] = {
                    toast: {
                        text: hr
                    }
                }, an[or.a.CashtagLimitInTweetExceeded] = {
                    toast: {
                        text: gr
                    }
                }, an[or.a.HashtagLengthLimitInTweetExceeded] = {
                    toast: {
                        text: vr
                    }
                }, an[or.a.AttachmentTypesLimitInTweetExceeded] = {
                    toast: {
                        text: mr
                    }
                }, an[or.a.StatusMalwareError] = {
                    toast: {
                        text: yr,
                        actionLabel: ar,
                        actionLink: "https://support.twitter.com/articles/90491"
                    }
                }, an[or.a.StatusTooLongError] = {
                    toast: {
                        text: _r
                    }
                }, an.showToast = !0, an),
                Sr = n("N5qz"),
                wr = "tweetButton",
                Cr = "tweetButtonInline",
                xr = n("+d3d"),
                Er = n("aITJ"),
                kr = n("JYMr"),
                Tr = n("1Pcy"),
                Or = n.n(Tr),
                Dr = n("W/Kd"),
                Ir = n.n(Dr),
                Mr = n("KEM+"),
                Ar = n.n(Mr),
                Rr = n("RhWx"),
                Kr = n.n(Rr),
                Br = n("zrc3"),
                Lr = Object.freeze({ in: "in",
                    out: "out",
                    static: "static"
                }),
                Pr = function(e) {
                    function t() {
                        for (var t, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return t = e.call.apply(e, [this].concat(r)) || this, Ar()(Or()(t), "state", {
                            isAnimating: !1,
                            renderChildren: p.Children.toArray(t.props.children).map((function(e) {
                                return {
                                    status: Lr.static,
                                    child: e
                                }
                            }))
                        }), Ar()(Or()(t), "_handleEachAnimateComplete", (function() {
                            var e = t.state.isAnimating,
                                n = t.props,
                                r = n.onAnimateComplete,
                                i = n.children;
                            e && (r && r(), t.setState({
                                renderChildren: p.Children.toArray(i).map((function(e) {
                                    return {
                                        status: Lr.static,
                                        child: e
                                    }
                                })),
                                isAnimating: !1
                            }))
                        })), t
                    }
                    return Ir()(t, e), t.getDerivedStateFromProps = function(e, t) {
                        var n = function(e, t) {
                            for (var n = 0, r = 0, i = [], o = function() {
                                    if (n >= t.length) return i.push.apply(i, Kr()(e.slice(r).map((function(e) {
                                        return {
                                            child: e,
                                            status: Lr.out
                                        }
                                    })))), "break";
                                    var o = t[n],
                                        a = e[r];
                                    if (o.key === a.key) i.push({
                                        child: o,
                                        status: Lr.static
                                    }), n++;
                                    else {
                                        var s = Object(Br.a)(t, (function(e) {
                                            return e.key === a.key
                                        }));
                                        s >= 0 ? (i.push.apply(i, Kr()(t.slice(n, s).map((function(e) {
                                            return {
                                                child: e,
                                                status: Lr.in
                                            }
                                        }))).concat([{
                                            child: t[s],
                                            status: Lr.static
                                        }])), n = s + 1) : i.push({
                                            child: a,
                                            status: Lr.out
                                        })
                                    }
                                    r++
                                }; r < e.length;) {
                                if ("break" === o()) break
                            }
                            return n < t.length && i.push.apply(i, Kr()(t.slice(n).map((function(e) {
                                return {
                                    child: e,
                                    status: Lr.in
                                }
                            })))), i
                        }(t.renderChildren.map((function(e) {
                            return e.child
                        })), p.Children.toArray(e.children));
                        return {
                            renderChildren: n,
                            isAnimating: !n.every((function(e) {
                                return e.status === Lr.static
                            }))
                        }
                    }, t.prototype.render = function() {
                        var e = this;
                        return this.state.renderChildren.map((function(t) {
                            var n = t.status,
                                r = t.child;
                            return p.createElement(mt.a, {
                                animateMount: n !== Lr.static,
                                key: r.key,
                                onAnimateComplete: e._handleEachAnimateComplete,
                                show: n !== Lr.out
                            }, r)
                        }))
                    }, t
                }(p.Component),
                Fr = Object.freeze({
                    primary: {
                        backgroundColor: "primary",
                        accessibilityRole: "text"
                    },
                    danger: {
                        backgroundColor: "red",
                        accessibilityRole: "alert"
                    }
                }),
                Nr = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    Ir()(t, e);
                    var n = t.prototype;
                    return n.render = function() {
                        var e = this.props,
                            t = e.type,
                            n = e.text,
                            r = Fr[t],
                            i = r.accessibilityRole,
                            o = k.a.theme.colors[r.backgroundColor];
                        return p.createElement(O.a, {
                            accessibilityRole: i,
                            style: [zr.root, {
                                backgroundColor: o
                            }]
                        }, p.createElement(D.b, {
                            color: "whiteOnColor"
                        }, n), this._renderActionLabel())
                    }, n._renderActionLabel = function() {
                        var e = this.props,
                            t = e.actionLabel,
                            n = e.actionLink;
                        if (t && n) return p.createElement(D.b, {
                            children: t,
                            color: "whiteOnColor",
                            link: n,
                            style: zr.actionText,
                            weight: "bold",
                            withInteractiveStyling: !0
                        })
                    }, t
                }(p.Component);
            Ar()(Nr, "defaultProps", {
                type: "primary"
            });
            var zr = k.a.create((function(e) {
                    return {
                        root: {
                            alignItems: "center",
                            flexDirection: "row",
                            padding: e.spaces.xSmall
                        },
                        actionText: {
                            marginLeft: e.spaces.xxSmall,
                            whiteSpace: "nowrap",
                            flexShrink: 0
                        }
                    }
                })),
                jr = Nr,
                Ur = n("eb3s"),
                Hr = n("rziq"),
                Wr = n("jTgF"),
                Vr = n("3A2y"),
                qr = n("s1N3"),
                Gr = n("4FGy"),
                Xr = function(e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                    return Object(Gr.a)(e, n)
                },
                Yr = n("sXY3"),
                Jr = 1e3,
                Qr = _.a.c51df0d7,
                Zr = _.a.f0a52a4a,
                $r = _.a.jf60e41a,
                ei = _.a.e258e22f,
                ti = _.a.e7ee6492,
                ni = _.a.hace56b8,
                ri = _.a.e0c22f24,
                ii = _.a.d823252a,
                oi = _.a.e4cb8f8f,
                ai = _.a.h74cf577,
                si = _.a.b138a3a2,
                ci = _.a.dad4c74b,
                ui = _.a.h6da8b08,
                li = _.a.g2c626f7,
                fi = _.a.i9cec7a1,
                di = _.a.bf706fcd,
                pi = document.documentElement && "scrollBehavior" in document.documentElement.style,
                hi = function(e) {
                    function t(n, r) {
                        var i;
                        return i = e.call(this, n, r) || this, d()(c()(i), "_getParentKey", (function() {
                            var e = i.props,
                                t = e.isInline;
                            return e.parentTweetId || (t ? "homeTimeline" : "modal")
                        })), d()(c()(i), "_updateSingleComposer", (function(e, t) {
                            var n = i.props,
                                r = n.updateSingleComposer,
                                o = n.updateSingleComposerV3;
                            return i._isInlineReplyEnabled ? o({
                                updates: e,
                                index: t,
                                parentKey: i._getParentKey()
                            }) : r({
                                updates: e,
                                index: t
                            })
                        })), d()(c()(i), "_resetDraft", (function() {
                            var e = i.props.resetDraft;
                            return i._isInlineReplyEnabled ? e(i._getParentKey()) : e()
                        })), d()(c()(i), "_syncTexts", (function() {
                            var e = i.props.composerData,
                                t = i.state.textMap;
                            e.forEach((function(e, n) {
                                var r = t[e.key];
                                "string" == typeof r && r !== e.text && i._updateSingleComposer({
                                    text: r
                                }, n)
                            }))
                        })), d()(c()(i), "_hasGif", (function(e) {
                            return e.gifMetadata || e.media.some((function(e) {
                                return e.mediaFile && e.mediaFile.isGif
                            }))
                        })), d()(c()(i), "_hasPhoto", (function(e) {
                            return e.media && e.media.some((function(e) {
                                return e.mediaFile && e.mediaFile.isImage
                            }))
                        })), d()(c()(i), "_hasVideo", (function(e) {
                            return e.media && e.media.some((function(e) {
                                return e.mediaFile && e.mediaFile.isVideo && !e.mediaFile.isGif
                            }))
                        })), d()(c()(i), "_handleAnimateComplete", (function() {
                            var e = i.props,
                                t = e.activeComposerIndex,
                                n = e.onHandleAppBarHeight,
                                r = nr.a.findDOMNode(i._composerRefs[t]);
                            if (r instanceof window.Element) {
                                var o = r.getBoundingClientRect(),
                                    a = o.top,
                                    s = o.bottom;
                                if (a < window.pageYOffset || s > window.innerHeight) {
                                    var c = n ? a - n() - 14 : a - 14,
                                        u = Math.max(c, 0);
                                    window.requestAnimationFrame((function() {
                                        pi ? window.scrollTo({
                                            top: u,
                                            left: 0,
                                            behavior: "smooth"
                                        }) : window.scrollTo(0, u)
                                    }))
                                }
                            }
                        })), d()(c()(i), "_handleFetchInReplyToStatusIfNeeded", (function() {
                            var e = i.props,
                                t = e.createLocalApiErrorHandler,
                                n = e.inReplyToStatus,
                                r = e.inReplyToStatusId,
                                o = e.fetchInReplyToStatusIfNeeded;
                            !n && r && o(r).catch(t(Xn.a))
                        })), d()(c()(i), "_blockHistory", (function(e, t) {
                            var n = !i.props.isInline && !/\/compose\/tweet\/?/.test(e.pathname);
                            return i.shouldShowDiscardConfirmation && "POP" === t && n ? (i.setState({
                                showDiscardTweetConfirmation: !0
                            }), !1) : !i.shouldShowBackgroundSendConfirmation || "POP" !== t || !n || (i._cancelAllMediaUploads(), !1)
                        })), d()(c()(i), "_getKeyCommandHandlers", (function() {
                            var e, t;
                            return i.state.typeaheadActive ? ((e = {})[Hr.b] = i.handleTweetOrRetweet, e) : ((t = {})[Hr.b] = i.handleTweetOrRetweet, t[Hr.a] = i.handleDismissComposer, t)
                        })), d()(c()(i), "handleTweetOrRetweet", (function() {
                            return i.isRetweet ? i._handleRetweet() : i._handleTweet()
                        })), d()(c()(i), "_renderReplyContext", (function() {
                            var e = i.props,
                                t = e.activeUser,
                                n = e.dataSaverMode,
                                r = e.excludedRecipients,
                                o = e.isInline,
                                a = e.isSelfThreadReply,
                                s = e.inReplyToStatus;
                            if (i._shouldBeExpanded()) return p.createElement(cn, {
                                dataSaverMode: n,
                                excludedRecipients: r,
                                inReplyToStatus: s,
                                key: r.join(),
                                loggedInUserId: t ? t.id_str : void 0,
                                onPress: i._handleViewRecipients,
                                shouldDisplayRepliesText: !a,
                                showParentTweet: !o
                            })
                        })), d()(c()(i), "_handleTweet", (function() {
                            var e = i.props.composerData[0].scheduledFor,
                                t = i._tweetSchedulingEnabled && e;
                            i.setState({
                                errorMessage: void 0
                            }), t ? Object(xe.h)(e) && i._handleScheduleTweet() : i._handleSendTweet()
                        })), d()(c()(i), "_handleTweetError", (function(e, t) {
                            return function(n) {
                                var r = i.props,
                                    o = r.analytics,
                                    a = r.createLocalApiErrorHandler;
                                if (Object(Wr.d)(n) && n.code === Qn.b.CANCELED) return o.scribeAction(e), Promise.resolve();
                                var s = Object(Wr.b)(n);
                                if (s) return i.setState({
                                    errorMessage: s
                                }), Promise.resolve();
                                var c = t || Object(qn.a)(void 0, !1);
                                a(Object.assign({}, c))(n), i.setState({
                                    errorMessage: {
                                        text: fi
                                    }
                                })
                            }
                        })), d()(c()(i), "_handleScheduleTweet", (function() {
                            var e = i.props,
                                t = e.addToast,
                                n = e.composerData,
                                r = e.excludedRecipients,
                                o = e.inReplyToStatus,
                                a = e.schedule,
                                s = i._getSingleComposerDataWithLatestText(n[0]);
                            a({
                                excludedRecipients: r,
                                inReplyToStatus: o,
                                scheduleData: s
                            }).then((function(e) {
                                i.setState({
                                    tweetsSentOrScheduled: !0
                                });
                                var r = Object(xe.c)(s.scheduledFor);
                                if (r) {
                                    var o = Object(xe.b)(r),
                                        a = Object(xe.i)(r),
                                        c = ui({
                                            scheduleDate: o,
                                            scheduleTime: a
                                        });
                                    t({
                                        text: c,
                                        actionLink: "/compose/tweet/unsent",
                                        actionLabel: ci
                                    }), i._scribeTweetSent(n[0], Object.assign({}, e, {
                                        id_str: e.scheduled_id_str
                                    }), !0)
                                }
                                i._updateConvoCardState(), i._close()
                            })).catch(i._handleTweetError("schedule_tweet_cancel"))
                        })), d()(c()(i), "_handleDraftTweet", (function() {
                            var e = i.props,
                                t = e.addToast,
                                n = e.composerData,
                                r = e.draftTweet,
                                o = e.excludedRecipients,
                                a = e.inReplyToStatus,
                                s = i._getSingleComposerDataWithLatestText(n[0]);
                            i.setState({
                                showDiscardTweetConfirmation: !1
                            }), r({
                                excludedRecipients: o,
                                inReplyToStatus: a,
                                draftData: s
                            }).then((function(e) {
                                t({
                                    text: si
                                }), i._scribeTweetSent(n[0], Object.assign({}, e, {
                                    id_str: e.draft_id_str
                                }), !1, !0), i._updateConvoCardState(), i._close()
                            })).catch(i._handleTweetError("draft_tweet_cancel"))
                        })), d()(c()(i), "_handleSendTweet", (function() {
                            var e = i.props,
                                t = e.addToast,
                                n = e.analytics,
                                r = e.composeSemanticCoreId,
                                o = e.excludedRecipients,
                                a = e.history,
                                s = e.inReplyToStatus,
                                c = e.isSelfThreadReply,
                                u = e.location,
                                l = e.activeUser,
                                f = e.promotedContent,
                                d = e.send,
                                p = i.props.composerData.map((function(e) {
                                    return i._getSingleComposerDataWithLatestText(e)
                                })),
                                h = i._tweetSchedulingEnabled ? Object(xe.c)(p[0].scheduledFor) : null;
                            if (h) {
                                var g = Object(xe.b)(h),
                                    v = Object(xe.i)(h),
                                    m = ui({
                                        scheduleDate: g,
                                        scheduleTime: v
                                    });
                                return t({
                                    text: m,
                                    actionLink: "",
                                    actionLabel: ci
                                }), void i._close()
                            }
                            o.length > 0 && n.scribe({
                                element: "mentions",
                                action: "edited"
                            }), d({
                                sendData: p.map((function(e, t) {
                                    return Object.assign({}, e, {
                                        pollChoices: i._composerRefs[t] ? i._composerRefs[t].pollChoices : void 0,
                                        pollDuration: i._composerRefs[t] ? i._composerRefs[t].pollDuration : void 0
                                    })
                                })),
                                excludedRecipients: o,
                                inReplyToStatus: s,
                                isSelfThreadReply: c,
                                promotedContent: f,
                                composeSemanticCoreId: r
                            }).then((function(e) {
                                i.setState({
                                    tweetsSentOrScheduled: !0
                                }), e.map((function(e, t) {
                                    return i._scribeTweetSent(p[t], e)
                                })), e.length > 1 && i._scribeThreadSent(p, e, "thread_send_success");
                                var n = i.props.onSent,
                                    r = e.length > 1 ? Zr : Qr;
                                t({
                                    text: r,
                                    actionLink: "/" + (l ? l.screen_name : "i") + "/status/" + e[0].id_str,
                                    actionLabel: ci
                                }), i._updateConvoCardState(), i._close(), n && n({
                                    sentTweets: e,
                                    inReplyToStatus: s
                                })
                            })).catch((function(e) {
                                var t = e.sentTweets,
                                    r = void 0 === t ? [] : t;
                                r.map((function(e, t) {
                                    return i._scribeTweetSent(p[t], e)
                                }));
                                var o = {
                                    message: e.type
                                };
                                throw Object(Wr.d)(e) && e.code === Qn.b.CANCELED || n.scribe({
                                    action: "send_tweet_failure",
                                    data: o
                                }), p.length > 1 && i._scribeThreadSent(p, r, "thread_send_failure"), r.length && a.replace({
                                    pathname: u.pathname,
                                    state: Object.assign({}, Object(Vr.a)(u.state || {}, "quotedStatus"), {
                                        inReplyToStatusId: r[r.length - 1].id_str,
                                        isSelfThreadReply: !0
                                    })
                                }), e
                            })).catch(i._handleTweetError("send_tweet_cancel", br))
                        })), d()(c()(i), "_setActiveParentKey", (function() {
                            (0, i.props.setActiveParentKey)(i._getParentKey())
                        })), d()(c()(i), "_scribeTweetSent", (function(e, t, n, r) {
                            void 0 === n && (n = !1), void 0 === r && (r = !1);
                            var o = e.scheduledTweetId ? "schedule_edit_" : "schedule_",
                                a = r ? "draft_" : n ? o : "send_",
                                s = {
                                    items: [ir.a.getTweetItem(t)]
                                },
                                c = e.pollActive && e.pollValid,
                                u = e.mediaMetadata && Object.values(e.mediaMetadata).some((function(e) {
                                    return !!e
                                }));
                            if (i._scribe({
                                    action: a + "tweet"
                                }, s), c && i._scribe({
                                    action: a + "poll_tweet"
                                }, s), u && i._scribe({
                                    action: a + "photo_tweet_with_alt_text"
                                }, s), i._hasPhoto(e) && i._scribe({
                                    action: a + "photo_tweet"
                                }, s), i._hasVideo(e) && i._scribe({
                                    action: a + "video_tweet"
                                }, s), e.gifMetadata) {
                                var l = ir.a.getGifSearchItemForTweet(t.id_str, e.gifMetadata);
                                i._scribe({
                                    element: "remote",
                                    action: a + "gif_tweet"
                                }, {
                                    items: [l]
                                })
                            } else i._hasGif(e) && i._scribe({
                                element: "local",
                                action: a + "gif_tweet"
                            }, s)
                        })), d()(c()(i), "_scribeThreadSent", (function(e, t, n) {
                            var r = i.props.inReplyToStatus,
                                o = {
                                    items: [ir.a.getSendThreadItem(e, t.length, !!r)]
                                };
                            i._scribe({
                                action: n
                            }, o)
                        })), d()(c()(i), "_scribeRetweet", (function(e) {
                            var t = {
                                items: [ir.a.getTweetItem(e)]
                            };
                            i._scribe({
                                action: "retweet"
                            }, t)
                        })), d()(c()(i), "_handleRetweet", (function() {
                            var e = i.props,
                                t = e.composerData,
                                n = e.createLocalApiErrorHandler,
                                r = e.onSent,
                                o = e.retweet,
                                a = t[0].quotedStatus;
                            a && (i._scribeRetweet(a), o(a.id_str, {}).then((function(e) {
                                i.setState({
                                    tweetsSentOrScheduled: !0
                                }), i._close(), r && r({
                                    sentTweets: e ? [e] : []
                                })
                            }), n(rr.a)))
                        })), d()(c()(i), "handleDismissComposer", (function() {
                            i.shouldShowDiscardConfirmation ? i.setState({
                                showDiscardTweetConfirmation: !0
                            }) : i.shouldShowBackgroundSendConfirmation ? i._cancelAllMediaUploads() : i._close()
                        })), d()(c()(i), "_cancelAllMediaUploads", (function() {
                            i.props.composerData.forEach((function(e) {
                                return e.media.forEach((function(e) {
                                    return e.uploading && e.uploader && e.uploader.cancel()
                                }))
                            }))
                        })), d()(c()(i), "_handleConfirmDiscardTweet", (function() {
                            var e = i.props.analytics,
                                t = i._draftTweetsEnabled ? "draft" : "send";
                            i.setState({
                                showDiscardTweetConfirmation: !1
                            }), i._close(), e.scribeAction(t + "_tweet_discard")
                        })), d()(c()(i), "_handleCancelDiscardTweet", (function() {
                            i.setState({
                                showDiscardTweetConfirmation: !1
                            }, (function() {
                                i._restoreFocusToActiveComposer()
                            }))
                        })), d()(c()(i), "_restoreFocusToActiveComposer", (function() {
                            var e = i.props.activeComposerIndex;
                            void 0 !== e && i._composerRefs[e] && i._composerRefs[e].focus()
                        })), d()(c()(i), "_close", (function() {
                            var e = i.props,
                                t = e.isSending,
                                n = e.onCloseComposer;
                            t || (i._resetDraft(), window.Windows && Object($n.a)().then((function(e) {
                                return e.default.shareCompletedCallback()
                            }))), n && n()
                        })), d()(c()(i), "_handleComposerFocus", (function(e) {
                            i._composerRefs[e] ? i.props.updateActiveComposerIndex(e) : setTimeout((function() {
                                i._restoreFocusToActiveComposer()
                            }), 0)
                        })), d()(c()(i), "_handleFocus", (function() {
                            i.setState({
                                focused: !0
                            })
                        })), d()(c()(i), "_handleTypeaheadStateChange", (function(e) {
                            i.setState({
                                typeaheadActive: e
                            })
                        })), d()(c()(i), "_handleRemoveComposer", (function() {
                            var e = i.props,
                                t = e.activeComposerIndex,
                                n = e.composerData,
                                r = e.history,
                                o = e.location,
                                a = e.removeComposer;
                            0 === t && n[0].quotedStatus && r.replace({
                                pathname: o.pathname,
                                state: Object(Vr.a)(o.state || {}, "quotedStatus")
                            }), a()
                        })), d()(c()(i), "_handleViewRecipients", (function() {
                            var e = i.props,
                                t = e.excludedRecipients,
                                n = e.history,
                                r = e.inReplyToStatus;
                            i._setActiveParentKey(), n.push({
                                pathname: "/compose/tweet/recipients",
                                state: {
                                    excludedRecipients: t,
                                    inReplyToStatus: r
                                }
                            })
                        })), d()(c()(i), "_handleTextChange", (function(e, t) {
                            var n, r = i.state.textMap,
                                o = i.props,
                                a = o.activeComposerIndex,
                                s = o.isInline,
                                c = o.setValidity;
                            if (i.setState({
                                    textMap: Object.assign({}, r, (n = {}, n[t] = e, n))
                                }, (function() {
                                    c && c(i._areComposersValid())
                                })), Er.a.isIOS()) {
                                var u = s ? 0 : a;
                                i._updateSingleComposer({
                                    text: e
                                }, u)
                            }
                        })), d()(c()(i), "_handleTextOnBlur", (function(e, t) {
                            return function() {
                                i.state.tweetsSentOrScheduled || i._updateSingleComposer({
                                    text: e
                                }, t)
                            }
                        })), d()(c()(i), "_updateConversationControlsValue", (function(e) {
                            i._conversationControlsCreationEnabled && (0, i.props.updateConversationControlsValue)(e, i._isInlineReplyEnabled ? i._getParentKey() : void 0)
                        })), d()(c()(i), "_renderProgressBar", (function() {
                            var e = i.props,
                                t = e.sendingProgress,
                                n = e.isSending;
                            return p.createElement(kr.a, {
                                progress: n ? Math.max(t, .02) : 0,
                                style: [gi.progressBar]
                            })
                        })), d()(c()(i), "_updateConvoCardState", (function() {
                            var e = i.props,
                                t = e.convoCardData,
                                n = e.updateConvoCardState;
                            if (t) {
                                var r = t.cardId,
                                    o = t.nextState;
                                o && r && n(r, o)
                            }
                        })), d()(c()(i), "_attachExternalMedia", (function(e) {
                            return function(t) {
                                return Promise.all(t.map((function(e) {
                                    return Gn(e)
                                }))).then(i._handleAddMediaFiles(e))
                            }
                        })), d()(c()(i), "_handleAddMediaFiles", (function(e) {
                            return function(n) {
                                var r = i.props,
                                    o = r.addMedia,
                                    a = r.addToast,
                                    s = r.composerData,
                                    c = r.dataSaverMode,
                                    u = r.processMultipleMedia,
                                    l = r.removeMediaUpload,
                                    f = r.uploadMedia;
                                o(n, Zn.c.Tweet).then((function(n) {
                                    var r = s[e],
                                        o = n.map((function(e) {
                                            return e.id
                                        }));
                                    if (t._validateMedia(r, n)) {
                                        var d = r.media.map((function(e) {
                                            return e.id
                                        }));
                                        i._updateSingleComposer({
                                            mediaIds: Object(qr.a)(d.concat(o))
                                        }, e), u(n, {
                                            onFailure: i._handleMediaRemoveFactory(e)
                                        }).then((function(e) {
                                            c || f(e.map((function(e) {
                                                return e.id
                                            })))
                                        }))
                                    } else a({
                                        text: di
                                    }), l(o)
                                }))
                            }
                        })), d()(c()(i), "_handleMediaRemoveFactory", (function(e) {
                            return function(t) {
                                return i._handleMediaRemove(e, t)
                            }
                        })), d()(c()(i), "_handleMediaRemove", (function(e, t) {
                            var n = i.props,
                                r = n.composerData,
                                o = n.removeMediaUpload,
                                a = r[e],
                                s = a.media,
                                c = a.mediaMetadata,
                                u = s.map((function(e) {
                                    return e.id
                                }));
                            i._updateSingleComposer({
                                mediaIds: Xr(u, t),
                                gifMetadata: void 0,
                                mediaMetadata: c && Object(Vr.a)(c, t.toString())
                            }, e), o(t), i.setState({
                                errorMessage: void 0
                            })
                        })), d()(c()(i), "_setComposerRef", (function(e) {
                            return function(t) {
                                i._composerRefs[e] = t
                            }
                        })), d()(c()(i), "_confirmTabCloseIfComposerNotEmpty", (function(e) {
                            i._confirmTabCloseEnabled && i.shouldShowDiscardConfirmation && (e.preventDefault(), e.returnValue = "", i._draftTweetsEnabled && i.setState({
                                showDiscardTweetConfirmation: !0
                            }))
                        })), d()(c()(i), "_shouldBeExpanded", (function() {
                            var e = i.props,
                                t = e.composerData,
                                n = e.parentTweetId;
                            return !!i.state.focused || (!n || !Object(Ce.b)(i._getSingleComposerDataWithLatestText(t[0])))
                        })), d()(c()(i), "_areComposersValid", (function() {
                            var e = i.props.composerData;
                            return i.isRetweet || e.every((function(e) {
                                return Object(Ce.c)(i._getSingleComposerDataWithLatestText(e))
                            }))
                        })), d()(c()(i), "_areComposersEmpty", (function() {
                            return i.props.composerData.every((function(e) {
                                return Object(Ce.b)(i._getSingleComposerDataWithLatestText(e))
                            }))
                        })), d()(c()(i), "_getSingleComposerDataWithLatestText", (function(e) {
                            var t = i.state.textMap;
                            return "string" == typeof t[e.key] ? Object.assign({}, e, {
                                text: t[e.key]
                            }) : e
                        })), i.state = {
                            focused: !1,
                            showBackgroundSendConfirmation: !1,
                            showDiscardTweetConfirmation: !1,
                            textMap: {},
                            tweetsSentOrScheduled: !1,
                            typeaheadActive: !1
                        }, i._composerRefs = {}, i._tweetSchedulingEnabled = $.a.isTrue("responsive_web_scheduling_enabled"), i._confirmTabCloseEnabled = $.a.isTrue("responsive_web_confirm_tab_close_enabled"), i._isInlineReplyEnabled = $.a.isTrue("responsive_web_inline_reply_enabled"), i._conversationControlsCreationEnabled = $.a.isTrue("conversation_controls_limited_replies_creation_enabled"), i._throttledSyncTexts = Object(xr.a)(i._syncTexts, Jr, {
                            leading: !0,
                            trailing: !1
                        }), i
                    }
                    l()(t, e);
                    var n = t.prototype;
                    return n.UNSAFE_componentWillMount = function() {
                        var e = this.props.onRef;
                        e && e(this)
                    }, n.componentDidMount = function() {
                        var e = this.props,
                            t = e.convoCardData,
                            n = e.externalMedia,
                            r = e.externalMediaFiles,
                            i = e.history,
                            o = e.isIntentRoute,
                            a = e.isInline,
                            s = e.location,
                            c = e.prepopulatedText,
                            u = e.setValidity;
                        this._unblockHistory = this.props.history.block(this._blockHistory), n.length > 0 && this._attachExternalMedia(0)(n), r.length > 0 && this._handleAddMediaFiles(0)(r), this._handleFetchInReplyToStatusIfNeeded(), (c || t && t.cardUrl) && this._updateSingleComposer(Object.assign({}, c ? {
                            text: c
                        } : null, {}, t && t.cardUrl ? {
                            cardUrl: t.cardUrl
                        } : null)), (c || t && t.cardUrl || n.length > 0 || r.length > 0) && !o && i.replace({
                            query: Object(gn.b)(s.query),
                            search: "",
                            pathname: s.pathname,
                            state: Object(Vr.a)(Object(gn.b)(s.state || {}), ["defaultText", "externalMedia", "externalMediaFiles"])
                        }), this._confirmTabCloseEnabled && window.addEventListener("beforeunload", this._confirmTabCloseIfComposerNotEmpty), u && u(this._areComposersValid()), a || this._setActiveParentKey()
                    }, n.componentDidUpdate = function(e) {
                        var t = this.props,
                            n = t.addToast,
                            r = t.composerData,
                            i = t.copyDataFromInlineReplyComposerToModalComposer,
                            o = t.externalMedia,
                            a = t.externalMediaFiles,
                            s = t.onRef,
                            c = t.parentTweetId,
                            u = t.replyPressToggle,
                            l = t.setValidity;
                        t.windowWidth !== e.windowWidth && this._throttledSyncTexts(), e.onRef && e.onRef !== s && e.onRef(void 0), s && s !== e.onRef && s(this), r.length >= 25 && e.composerData.length < 25 && n({
                            text: li
                        }), o.length > 0 && o !== e.externalMedia ? this._attachExternalMedia(0)(o) : a.length > 0 && a !== e.externalMediaFiles && this._handleAddMediaFiles(0)(a), l && !Object(Qt.a)(r, e.composerData) && l && l(this._areComposersValid()), u !== e.replyPressToggle && i(c)
                    }, n.componentWillUnmount = function() {
                        var e = this,
                            t = this.props,
                            n = t.composerData,
                            r = t.onRef;
                        this._unblockHistory && this._unblockHistory(), r && r(void 0), Object(Yr.a)(this._composerRefs).forEach((function(t) {
                            var r = t[0],
                                i = t[1],
                                o = parseInt(r, 10);
                            if (i) return n[o] && n[o].pollActive && e._updateSingleComposer({
                                initialPollChoices: i.pollChoices,
                                initialPollDuration: i.pollDuration
                            }, o)
                        })), this._confirmTabCloseEnabled && window.removeEventListener("beforeunload", this._confirmTabCloseIfComposerNotEmpty)
                    }, n.render = function() {
                        var e = this,
                            t = this.props,
                            n = t.activeUser,
                            r = t.addComposer,
                            o = t.addToast,
                            a = t.altTextComposeEnabled,
                            s = t.composeHeader,
                            c = t.composerData,
                            u = t.conversationControlsValue,
                            l = t.copyDataFromInlineComposerToModalComposer,
                            f = t.customizePropsForSingleComposerItem,
                            d = t.history,
                            h = t.isInline,
                            g = t.isIntentRoute,
                            m = t.isSending,
                            y = t.isSelfThreadReply,
                            _ = t.inReplyToStatus,
                            b = t.location,
                            S = t.parentTweetId,
                            w = t.positionCursorAtBeginning,
                            C = t.scheduledFor,
                            x = t.richTextInputContext,
                            E = t.typeaheadWrapper,
                            k = t.userLanguage,
                            T = t.windowWidth,
                            D = this.context.isModal,
                            I = this.state,
                            M = I.errorMessage,
                            A = I.showDiscardTweetConfirmation,
                            R = I.typeaheadActive,
                            K = !D && R,
                            B = h ? 0 : this.props.activeComposerIndex,
                            L = K || h ? [c[B]] : c,
                            P = this._areComposersValid(),
                            F = h ? O.a : Pr,
                            N = h ? {} : {
                                onAnimateComplete: D ? void 0 : this._handleAnimateComplete
                            };
                        return p.createElement(O.a, {
                            style: S ? gi.rootInlineReply : gi.root
                        }, h ? this._renderProgressBar() : null, M && p.createElement(jr, {
                            actionLabel: M.actionLabel,
                            actionLink: M.actionLink,
                            text: M.text,
                            type: "danger"
                        }), p.createElement(O.a, {
                            onFocus: this._handleFocus,
                            style: [gi.content, S && gi.contentInlineReply]
                        }, _ ? this._renderReplyContext() : null, s, p.createElement(F, N, L.map((function(t, s) {
                            var g = e._tweetSchedulingEnabled && Object(xe.h)(t.scheduledFor),
                                b = c.indexOf(t),
                                I = f(t, s, L),
                                M = D || h ? p.createElement(v.a, {
                                    disabled: !P,
                                    onPress: e.handleTweetOrRetweet,
                                    size: "normal",
                                    style: gi.inlineSendButton,
                                    testID: D ? wr : Cr,
                                    type: "primary"
                                }, Object(Yn.a)({
                                    inReplyToStatus: !!_,
                                    isSelfThreadReply: !!y,
                                    isQuoteTweet: !!e.isQuoteTweet,
                                    isRetweet: !!e.isRetweet,
                                    isScheduled: !!g,
                                    isThread: e.isThread
                                })) : null,
                                A = e._getSingleComposerDataWithLatestText(t);
                            return p.createElement(O.a, {
                                key: t.key
                            }, p.createElement(Jt, i()({
                                addToast: o,
                                additionalToolbarContent: M,
                                altTextSettingEnabled: a,
                                conversationControlsValue: u,
                                data: A,
                                disableAddTweet: c.length >= 25,
                                editable: !m && !!n,
                                hidePollAndScheduling: h && Sr.a.isOneColumnSquishedLayout(T),
                                history: d,
                                index: b,
                                isActive: b === B && !m,
                                isExpanded: 0 !== s || e._shouldBeExpanded(),
                                isInline: h,
                                isInlineReply: !!S,
                                isLast: h || b === c.length - 1,
                                isReply: !!_ || !!S,
                                isSelfThreadReply: !!y,
                                keyCommandHandlers: e._getKeyCommandHandlers(),
                                loggedInUser: n,
                                onAddComposer: h ? l : r,
                                onFilesAdded: e._handleAddMediaFiles(b),
                                onFocus: e._handleComposerFocus,
                                onRemoveComposer: e._handleRemoveComposer,
                                onRemoveMedia: e._handleMediaRemove,
                                onTextChange: e._handleTextChange,
                                onTextInputBlur: e._handleTextOnBlur(A.text, s),
                                onTypeaheadStateChange: e._handleTypeaheadStateChange,
                                positionCursorAtBeginning: !!w,
                                ref: e._setComposerRef(b),
                                richTextInputContext: x,
                                scheduledFor: C,
                                setActiveParentKey: e._setActiveParentKey,
                                twitterTextConfigurationVersion: "version3",
                                typeaheadWrapper: E,
                                updateConversationControlsValue: e._updateConversationControlsValue,
                                updateSingleComposer: e._updateSingleComposer,
                                userLanguage: k
                            }, I)))
                        }))), g ? p.createElement(Jn.a, {
                            history: d,
                            location: b
                        }) : null, A ? this._draftTweetsEnabled ? p.createElement(Ur.a, {
                            cancelButtonLabel: ai,
                            confirmButtonLabel: oi,
                            headline: ri,
                            onCancel: this._handleConfirmDiscardTweet,
                            onConfirm: this._handleDraftTweet,
                            onMaskClick: this._handleCancelDiscardTweet,
                            text: ii
                        }) : p.createElement(Ur.a, {
                            confirmButtonLabel: ni,
                            confirmButtonType: "destructive",
                            headline: this.isThread ? ei : $r,
                            onCancel: this._handleCancelDiscardTweet,
                            onConfirm: this._handleConfirmDiscardTweet,
                            text: ti
                        }) : null, p.createElement(O.a, {
                            style: [m && gi.mask]
                        })))
                    }, n._scribe = function(e, t) {
                        this.props.analytics.scribe(Object.assign({}, e, {
                            data: t
                        }))
                    }, a()(t, [{
                        key: "isThread",
                        get: function() {
                            return this.props.composerData.length > 1
                        }
                    }, {
                        key: "isRetweet",
                        get: function() {
                            var e = this.props.composerData,
                                t = 0 === e[0].media.length,
                                n = this._getSingleComposerDataWithLatestText(e[0]).text;
                            return !this.isThread && e[0].quotedStatus && "" === n && t
                        }
                    }, {
                        key: "isQuoteTweet",
                        get: function() {
                            var e = this.props.composerData;
                            return !this.isThread && e[0].quotedStatus
                        }
                    }, {
                        key: "shouldShowDiscardConfirmation",
                        get: function() {
                            var e = this.props,
                                t = e.isSending,
                                n = e.composerData[0].scheduledTweetId,
                                r = this.state.showDiscardTweetConfirmation,
                                i = this._areComposersEmpty();
                            return !(t || i || r || n)
                        }
                    }, {
                        key: "shouldShowBackgroundSendConfirmation",
                        get: function() {
                            var e = this.props,
                                t = e.composerData,
                                n = e.isSending,
                                r = this.state.showBackgroundSendConfirmation,
                                i = t.some((function(e) {
                                    return e.media.some((function(e) {
                                        return e.uploading
                                    }))
                                }));
                            return n && i && !r
                        }
                    }, {
                        key: "_draftTweetsEnabled",
                        get: function() {
                            var e = this.props.composerData;
                            return !this.isThread && !e[0].pollActive && $.a.isTrue("responsive_web_tweet_drafts_enabled")
                        }
                    }]), t
                }(p.Component);
            d()(hi, "defaultProps", {
                customizePropsForSingleComposerItem: function(e, t, n) {
                    return {}
                },
                externalMedia: [],
                externalMediaFiles: [],
                isSelfThreadReply: !1,
                positionCursorAtBeginning: !1,
                prepopulatedText: "",
                setValidity: function() {},
                typeaheadWrapper: er.a
            }), d()(hi, "contextTypes", {
                isModal: Oe.bool
            }), d()(hi, "_validateMedia", (function(e, t) {
                var n = e.media;
                return Object(h.c)(n.concat(t))
            }));
            var gi = k.a.create((function(e) {
                return {
                    root: {
                        paddingBottom: e.spaces.xxSmall
                    },
                    rootInlineReply: {
                        backgroundColor: e.colors.fadedGray,
                        paddingBottom: e.componentDimensions.gutterVertical
                    },
                    content: {
                        paddingVertical: e.spaces.xxSmall,
                        backgroundColor: e.colors.cellBackground
                    },
                    contentInlineReply: {
                        paddingVertical: e.componentDimensions.gutterVertical
                    },
                    mask: Object.assign({}, k.a.absoluteFillObject),
                    inlineSendButton: {
                        marginLeft: e.spaces.xSmall
                    },
                    progressBar: {
                        position: "absolute",
                        borderTopLeftRadius: e.borderRadii.medium,
                        borderTopRightRadius: e.borderRadii.medium
                    }
                }
            }));
            t.a = Object(Ge.a)(Vn(hi))
        },
        UfDk: function(e, t, n) {
            "use strict";
            var r = n("djSO"),
                i = n("7002"),
                o = n("1xkk"),
                a = n("7nmT"),
                s = n("M7w5"),
                c = n("VVXv"),
                u = n("7XzN"),
                l = n("X+Re"),
                f = n("hF1F");
            var d = {
                onDragEnd: function(e) {
                    e.exitCurrentMode(), p(e)
                },
                onDrop: function(e, t) {
                    var n = new r(t.nativeEvent.dataTransfer),
                        a = e._latestEditorState,
                        d = function(e, t) {
                            var n = null,
                                r = null;
                            if ("function" == typeof document.caretRangeFromPoint) {
                                var i = document.caretRangeFromPoint(e.x, e.y);
                                n = i.startContainer, r = i.startOffset
                            } else {
                                if (!e.rangeParent) return null;
                                n = e.rangeParent, r = e.rangeOffset
                            }
                            n = f(n), r = f(r);
                            var o = f(s(n));
                            return u(t, o, r, o, r)
                        }(t.nativeEvent, a);
                    if (t.preventDefault(), e._dragCount = 0, e.exitCurrentMode(), null != d) {
                        var g = n.getFiles();
                        if (g.length > 0) {
                            if (e.props.handleDroppedFiles && l(e.props.handleDroppedFiles(d, g))) return;
                            c(g, (function(t) {
                                t && e.update(h(a, d, t))
                            }))
                        } else {
                            var v = e._internalDrag ? "internal" : "external";
                            e.props.handleDrop && l(e.props.handleDrop(d, n, v)) || (e._internalDrag ? e.update(function(e, t) {
                                var n = i.moveText(e.getCurrentContent(), e.getSelection(), t);
                                return o.push(e, n, "insert-fragment")
                            }(a, d)) : e.update(h(a, d, n.getText()))), p(e)
                        }
                    }
                },
                onDragOver: function(e, t) {
                    t.preventDefault()
                }
            };

            function p(e) {
                e._internalDrag = !1;
                var t = a.findDOMNode(e);
                if (t) {
                    var n = new MouseEvent("mouseup", {
                        view: window,
                        bubbles: !0,
                        cancelable: !0
                    });
                    t.dispatchEvent(n)
                }
            }

            function h(e, t, n) {
                var r = i.insertText(e.getCurrentContent(), t, n, e.getCurrentInlineStyle());
                return o.push(e, r, "insert-fragment")
            }
            e.exports = d
        },
        VUYy: function(e, t, n) {
            "use strict";
            var r = n("tBqf"),
                i = n("AL/+"),
                o = n("Svze"),
                a = o.List,
                s = o.Repeat,
                c = o.Record,
                u = r.thatReturnsTrue,
                l = c({
                    start: null,
                    end: null
                }),
                f = c({
                    start: null,
                    end: null,
                    decoratorKey: null,
                    leaves: null
                }),
                d = {
                    generate: function(e, t, n) {
                        var r = t.getLength();
                        if (!r) return a.of(new f({
                            start: 0,
                            end: 0,
                            decoratorKey: null,
                            leaves: a.of(new l({
                                start: 0,
                                end: 0
                            }))
                        }));
                        var o = [],
                            c = n ? n.getDecorations(t, e) : a(s(null, r)),
                            d = t.getCharacterList();
                        return i(c, h, u, (function(e, t) {
                            o.push(new f({
                                start: e,
                                end: t,
                                decoratorKey: c.get(e),
                                leaves: p(d.slice(e, t).toList(), e)
                            }))
                        })), a(o)
                    }
                };

            function p(e, t) {
                var n = [],
                    r = e.map((function(e) {
                        return e.getStyle()
                    })).toList();
                return i(r, h, u, (function(e, r) {
                    n.push(new l({
                        start: e + t,
                        end: r + t
                    }))
                })), a(n)
            }

            function h(e, t) {
                return e === t
            }
            e.exports = d
        },
        VUbk: function(e, t, n) {
            "use strict";
            var r = n("ERkP"),
                i = n("2Wwg"),
                o = (0, n("Svze").Map)({
                    "header-one": {
                        element: "h1"
                    },
                    "header-two": {
                        element: "h2"
                    },
                    "header-three": {
                        element: "h3"
                    },
                    "header-four": {
                        element: "h4"
                    },
                    "header-five": {
                        element: "h5"
                    },
                    "header-six": {
                        element: "h6"
                    },
                    "unordered-list-item": {
                        element: "li",
                        wrapper: r.createElement("ul", {
                            className: i("public/DraftStyleDefault/ul")
                        })
                    },
                    "ordered-list-item": {
                        element: "li",
                        wrapper: r.createElement("ol", {
                            className: i("public/DraftStyleDefault/ol")
                        })
                    },
                    blockquote: {
                        element: "blockquote"
                    },
                    atomic: {
                        element: "figure"
                    },
                    "code-block": {
                        element: "pre",
                        wrapper: r.createElement("pre", {
                            className: i("public/DraftStyleDefault/pre")
                        })
                    },
                    unstyled: {
                        element: "div",
                        aliasedElements: ["p"]
                    }
                });
            e.exports = o
        },
        VVXv: function(e, t, n) {
            "use strict";
            (function(t) {
                var r = n("tI3i"),
                    i = /\.textClipping$/,
                    o = {
                        "text/plain": !0,
                        "text/html": !0,
                        "text/rtf": !0
                    },
                    a = 5e3;
                e.exports = function(e, n) {
                    var s = 0,
                        c = [];
                    e.forEach((function(u) {
                        ! function(e, n) {
                            if (!t.FileReader || e.type && !(e.type in o)) return void n("");
                            if ("" === e.type) {
                                var a = "";
                                return i.test(e.name) && (a = e.name.replace(i, "")), void n(a)
                            }
                            var s = new FileReader;
                            s.onload = function() {
                                var e = s.result;
                                "string" != typeof e && r(!1), n(e)
                            }, s.onerror = function() {
                                n("")
                            }, s.readAsText(e)
                        }(u, (function(t) {
                            s++, t && c.push(t.slice(0, a)), s == e.length && n(c.join("\r"))
                        }))
                    }))
                }
            }).call(this, n("yLpj"))
        },
        VeLA: function(e, t, n) {
            "use strict";
            var r = n("ooRk"),
                i = n("b+nQ"),
                o = n("IbSy"),
                a = n("YM28"),
                s = n("krsZ"),
                c = n("IDEf"),
                u = n("YSZ8"),
                l = n("ZUd0"),
                f = n("Svze"),
                d = n("fNVm"),
                p = f.List,
                h = f.Record,
                g = f.Repeat,
                v = function(e) {
                    var t, n;

                    function f() {
                        return e.apply(this, arguments) || this
                    }
                    n = e, (t = f).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
                    var h = f.prototype;
                    return h.getEntityMap = function() {
                        return s
                    }, h.getBlockMap = function() {
                        return this.get("blockMap")
                    }, h.getSelectionBefore = function() {
                        return this.get("selectionBefore")
                    }, h.getSelectionAfter = function() {
                        return this.get("selectionAfter")
                    }, h.getBlockForKey = function(e) {
                        return this.getBlockMap().get(e)
                    }, h.getKeyBefore = function(e) {
                        return this.getBlockMap().reverse().keySeq().skipUntil((function(t) {
                            return t === e
                        })).skip(1).first()
                    }, h.getKeyAfter = function(e) {
                        return this.getBlockMap().keySeq().skipUntil((function(t) {
                            return t === e
                        })).skip(1).first()
                    }, h.getBlockAfter = function(e) {
                        return this.getBlockMap().skipUntil((function(t, n) {
                            return n === e
                        })).skip(1).first()
                    }, h.getBlockBefore = function(e) {
                        return this.getBlockMap().reverse().skipUntil((function(t, n) {
                            return n === e
                        })).skip(1).first()
                    }, h.getBlocksAsArray = function() {
                        return this.getBlockMap().toArray()
                    }, h.getFirstBlock = function() {
                        return this.getBlockMap().first()
                    }, h.getLastBlock = function() {
                        return this.getBlockMap().last()
                    }, h.getPlainText = function(e) {
                        return this.getBlockMap().map((function(e) {
                            return e ? e.getText() : ""
                        })).join(e || "\n")
                    }, h.getLastCreatedEntityKey = function() {
                        return s.__getLastCreatedEntityKey()
                    }, h.hasText = function() {
                        var e = this.getBlockMap();
                        return e.size > 1 || escape(e.first().getText()).replace(/%u200B/g, "").length > 0
                    }, h.createEntity = function(e, t, n) {
                        return s.__create(e, t, n), this
                    }, h.mergeEntityData = function(e, t) {
                        return s.__mergeData(e, t), this
                    }, h.replaceEntityData = function(e, t) {
                        return s.__replaceData(e, t), this
                    }, h.addEntity = function(e) {
                        return s.__add(e), this
                    }, h.getEntity = function(e) {
                        return s.__get(e)
                    }, f.createFromBlockArray = function(e, t) {
                        var n = Array.isArray(e) ? e : e.contentBlocks,
                            i = r.createFromArray(n),
                            o = i.isEmpty() ? new c : c.createEmpty(i.first().getKey());
                        return new f({
                            blockMap: i,
                            entityMap: t || s,
                            selectionBefore: o,
                            selectionAfter: o
                        })
                    }, f.createFromText = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : /\r\n?|\n/g,
                            n = e.split(t),
                            r = n.map((function(e) {
                                return e = d(e), new(l("draft_tree_data_support") ? a : o)({
                                    key: u(),
                                    text: e,
                                    type: "unstyled",
                                    characterList: p(g(i.EMPTY, e.length))
                                })
                            }));
                        return f.createFromBlockArray(r)
                    }, f
                }(h({
                    entityMap: null,
                    blockMap: null,
                    selectionBefore: null,
                    selectionAfter: null
                }));
            e.exports = v
        },
        "Vjl/": function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.default = void 0, n("PN9k");
            var r = a(n("7DT3")),
                i = a(n("ERkP")),
                o = a(n("OkZJ"));

            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var s = function(e) {
                return void 0 === e && (e = {}), (0, r.default)("svg", Object.assign({}, e, {
                    style: [o.default.root, e.style],
                    viewBox: "0 0 24 24"
                }), i.default.createElement("g", null, i.default.createElement("path", {
                    d: "M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm8.472 9.442c-.242.19-.472.368-.63.486-.68-1.265-1.002-1.78-1.256-2.007-.163-.145-.37-.223-.78-.375-.367-.136-1.482-.55-1.65-.85-.087-.153.136-.602.23-.793.088-.177.164-.33.196-.497.123-.646-.33-1.146-.728-1.59-.066-.072-.153-.17-.23-.26.335-.12.862-.26 1.42-.384 1.95 1.448 3.26 3.704 3.428 6.272zm-9.788-7.83c.076.25.145.5.182.678-.255.15-.663.363-.96.52-.262.136-.522.273-.738.392-.247.137-.442.234-.6.313-.347.174-.598.3-.833.553-.068.073-.26.278-1.02 1.886l-1.79-.656c1.293-1.94 3.362-3.31 5.76-3.685zM12 20.5c-4.687 0-8.5-3.813-8.5-8.5 0-1.197.25-2.335.7-3.37.47.182 1.713.66 2.75 1.035-.107.336-.245.854-.26 1.333-.03.855.502 1.7.562 1.792.053.08.12.15.2.207.303.21.687.5.827.616.063.343.166 1.26.23 1.833.144 1.266.175 1.48.24 1.65.005.012.514 1.188 1.315 1.188.576-.003.673-.206 1.855-2.688.244-.512.45-.95.513-1.058.1-.144.597-.61.87-.83.55-.442.76-1.82.413-2.682-.335-.83-1.92-2.08-2.5-2.195-.17-.033-.43-.04-.953-.053-.497-.01-1.25-.028-1.536-.09-.098-.024-.314-.094-.605-.196.32-.668.627-1.28.71-1.4.05-.052.168-.112.408-.234.17-.086.383-.192.653-.34.208-.116.458-.247.71-.38 1.168-.612 1.484-.8 1.658-1.082.11-.177.263-.44-.04-1.544 1.042.027 2.038.24 2.955.61-.89.32-1.024.595-1.106.77-.367.784.256 1.475.667 1.93.096.107.24.268.32.38l-.017.036c-.234.472-.67 1.35-.196 2.194.406.72 1.384 1.13 2.437 1.52.134.05.25.092.33.126.16.208.496.79 1 1.735l.154.285c.078.14.33.505.842.505.167 0 .363-.04.59-.137.032-.013.083-.035.18-.094C19.72 17.405 16.22 20.5 12 20.5zm-3.812-9.45c.01-.285.102-.646.184-.907l.027.006c.397.09 1.037.11 1.83.13.32.006.59.008.615 0 .326.143 1.355 1 1.483 1.31.113.28.05.812-.034 1.01-.233.197-.845.735-1.085 1.078-.093.13-.212.373-.64 1.274-.133.276-.313.654-.488 1.013-.026-.225-.054-.472-.08-.686-.225-2.003-.273-2.22-.42-2.445-.05-.078-.202-.31-1.135-.973-.117-.213-.268-.564-.26-.813z"
                })))
            };
            s.metadata = {
                height: 24,
                width: 24
            };
            var c = s;
            t.default = c
        },
        Vwge: function(e, t, n) {
            "use strict";
            (function(t) {
                var r = n("1xkk"),
                    i = n("iN4q"),
                    o = n("2KzS");
                e.exports = function(e, n) {
                    if (!Boolean(e.props.preserveSelectionOnBlur) && o() === document.body) {
                        var a = t.getSelection(),
                            s = e.editor;
                        1 === a.rangeCount && i(s, a.anchorNode) && i(s, a.focusNode) && a.removeAllRanges()
                    }
                    var c = e._latestEditorState,
                        u = c.getSelection();
                    if (u.getHasFocus()) {
                        var l = u.set("hasFocus", !1);
                        e.props.onBlur && e.props.onBlur(n), e.update(r.acceptSelection(c, l))
                    }
                }
            }).call(this, n("yLpj"))
        },
        W5XZ: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            }));
            var r, i = n("k49u"),
                o = n("fs1G"),
                a = ((r = {})[i.a.OtherUserSuspended] = {
                    customAction: o.a
                }, r[i.a.StatusViewForbidden] = {
                    customAction: o.a
                }, r)
        },
        W6iK: function(e, t, n) {
            "use strict";
            var r = n("tI3i"),
                i = 55296,
                o = 56319,
                a = 56320,
                s = 57343,
                c = /[\uD800-\uDFFF]/;

            function u(e) {
                return i <= e && e <= s
            }

            function l(e) {
                return c.test(e)
            }

            function f(e, t) {
                return 1 + u(e.charCodeAt(t))
            }

            function d(e, t, n) {
                if (t = t || 0, n = void 0 === n ? 1 / 0 : n || 0, !l(e)) return e.substr(t, n);
                var r = e.length;
                if (r <= 0 || t > r || n <= 0) return "";
                var i = 0;
                if (t > 0) {
                    for (; t > 0 && i < r; t--) i += f(e, i);
                    if (i >= r) return ""
                } else if (t < 0) {
                    for (i = r; t < 0 && 0 < i; t++) i -= f(e, i - 1);
                    i < 0 && (i = 0)
                }
                var o = r;
                if (n < r)
                    for (o = i; n > 0 && o < r; n--) o += f(e, o);
                return e.substring(i, o)
            }
            var p = {
                getCodePoints: function(e) {
                    for (var t = [], n = 0; n < e.length; n += f(e, n)) t.push(e.codePointAt(n));
                    return t
                },
                getUTF16Length: f,
                hasSurrogateUnit: l,
                isCodeUnitInSurrogateRange: u,
                isSurrogatePair: function(e, t) {
                    if (0 <= t && t < e.length || r(!1), t + 1 === e.length) return !1;
                    var n = e.charCodeAt(t),
                        c = e.charCodeAt(t + 1);
                    return i <= n && n <= o && a <= c && c <= s
                },
                strlen: function(e) {
                    if (!l(e)) return e.length;
                    for (var t = 0, n = 0; n < e.length; n += f(e, n)) t++;
                    return t
                },
                substring: function(e, t, n) {
                    (t = t || 0) < 0 && (t = 0), (n = void 0 === n ? 1 / 0 : n || 0) < 0 && (n = 0);
                    var r = Math.abs(n - t);
                    return d(e, t = t < n ? t : n, r)
                },
                substr: d
            };
            e.exports = p
        },
        WbhC: function(e, t, n) {
            "use strict";
            (function(t) {
                var r = n("IchF");
                e.exports = function(e, n) {
                    var i = t.getSelection();
                    return 0 === i.rangeCount ? {
                        selectionState: e.getSelection().set("hasFocus", !1),
                        needsRecovery: !1
                    } : r(e, n, i.anchorNode, i.anchorOffset, i.focusNode, i.focusOffset)
                }
            }).call(this, n("yLpj"))
        },
        WmAF: function(e, t, n) {
            "use strict";
            var r = n("Svze").Map;
            e.exports = function(e, t, n) {
                var i = t.getStartKey(),
                    o = t.getEndKey(),
                    a = e.getBlockMap(),
                    s = a.toSeq().skipUntil((function(e, t) {
                        return t === i
                    })).takeUntil((function(e, t) {
                        return t === o
                    })).concat(r([
                        [o, a.get(o)]
                    ])).map(n);
                return e.merge({
                    blockMap: a.merge(s),
                    selectionBefore: t,
                    selectionAfter: t
                })
            }
        },
        "X+Re": function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                return "handled" === e || !0 === e
            }
        },
        XPEN: function(e, t, n) {
            "use strict";
            var r = n("maj8");
            var i = n("TNQl"),
                o = n("ERkP"),
                a = n("tI3i"),
                s = n("1+m/"),
                c = function(e) {
                    var t, n;

                    function c() {
                        for (var t, n, r, i, o = arguments.length, a = new Array(o), s = 0; s < o; s++) a[s] = arguments[s];
                        return t = e.call.apply(e, [this].concat(a)) || this, n = function(e) {
                            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e
                        }(t), i = void 0, (r = "leaf") in n ? Object.defineProperty(n, r, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : n[r] = i, t
                    }
                    n = e, (t = c).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
                    var u = c.prototype;
                    return u._setSelection = function() {
                        var e = this.props.selection;
                        if (null != e && e.getHasFocus()) {
                            var t = this.props,
                                n = t.block,
                                r = t.start,
                                i = t.text,
                                o = n.getKey(),
                                c = r + i.length;
                            if (e.hasEdgeWithin(o, r, c)) {
                                var u = this.leaf;
                                u || a(!1);
                                var l, f = u.firstChild;
                                f || a(!1), f.nodeType === Node.TEXT_NODE ? l = f : f instanceof Element && "BR" === f.tagName ? l = u : (l = f.firstChild) || a(!1), s(e, l, o, r, c)
                            }
                        }
                    }, u.shouldComponentUpdate = function(e) {
                        var t = this.leaf;
                        return t || a(!1), t.textContent !== e.text || e.styleSet !== this.props.styleSet || e.forceSelection
                    }, u.componentDidUpdate = function() {
                        this._setSelection()
                    }, u.componentDidMount = function() {
                        this._setSelection()
                    }, u.render = function() {
                        var e = this,
                            t = this.props.block,
                            n = this.props.text;
                        n.endsWith("\n") && this.props.isLast && (n += "\n");
                        var a = this.props,
                            s = a.customStyleMap,
                            c = a.customStyleFn,
                            u = a.offsetKey,
                            l = a.styleSet,
                            f = l.reduce((function(e, t) {
                                var n = {},
                                    i = s[t];
                                return void 0 !== i && e.textDecoration !== i.textDecoration && (n.textDecoration = [e.textDecoration, i.textDecoration].join(" ").trim()), r(e, i, n)
                            }), {});
                        if (c) {
                            var d = c(l, t);
                            f = r(f, d)
                        }
                        return o.createElement("span", {
                            "data-offset-key": u,
                            ref: function(t) {
                                return e.leaf = t
                            },
                            style: f
                        }, o.createElement(i, {
                            style: this.props.style
                        }, n))
                    }, c
                }(o.Component);
            e.exports = c
        },
        XjoI: function(e, t, n) {
            "use strict";
            var r = n("OJbI"),
                i = n("XPEN"),
                o = n("b//S"),
                a = n("Svze"),
                s = n("ERkP"),
                c = n("2Wwg"),
                u = (a.List, function(e) {
                    var t, n;

                    function a() {
                        return e.apply(this, arguments) || this
                    }
                    return n = e, (t = a).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n, a.prototype.render = function() {
                        var e = this.props,
                            t = e.block,
                            n = e.contentState,
                            a = e.customStyleFn,
                            u = e.customStyleMap,
                            l = e.decorator,
                            f = e.direction,
                            d = e.forceSelection,
                            p = e.hasSelection,
                            h = e.selection,
                            g = e.tree,
                            v = t.getKey(),
                            m = t.getText(),
                            y = g.size - 1,
                            _ = this.props.children || g.map((function(e, c) {
                                var g = e.get("decoratorKey"),
                                    _ = e.get("leaves"),
                                    b = _.size - 1,
                                    S = _.map((function(e, n) {
                                        var r = o.encode(v, c, n),
                                            l = e.get("start"),
                                            f = e.get("end");
                                        return s.createElement(i, {
                                            key: r,
                                            offsetKey: r,
                                            block: t,
                                            start: l,
                                            selection: p ? h : null,
                                            forceSelection: d,
                                            text: m.slice(l, f),
                                            styleSet: t.getInlineStyleAt(l),
                                            customStyleMap: u,
                                            customStyleFn: a,
                                            isLast: g === y && n === b
                                        })
                                    })).toArray();
                                return g && l ? s.createElement(r, {
                                    block: t,
                                    children: S,
                                    contentState: n,
                                    decorator: l,
                                    decoratorKey: g,
                                    direction: f,
                                    leafSet: e,
                                    text: m,
                                    key: c
                                }) : S
                            })).toArray();
                        return s.createElement("div", {
                            "data-offset-key": o.encode(v, 0, 0),
                            className: c({
                                "public/DraftStyleDefault/block": !0,
                                "public/DraftStyleDefault/ltr": "LTR" === f,
                                "public/DraftStyleDefault/rtl": "RTL" === f
                            })
                        }, _)
                    }, a
                }(s.Component));
            e.exports = u
        },
        XpKj: function(e, t, n) {
            "use strict";
            n.d(t, "d", (function() {
                return c
            })), n.d(t, "b", (function() {
                return l
            })), n.d(t, "f", (function() {
                return h
            })), n.d(t, "e", (function() {
                return g
            })), n.d(t, "c", (function() {
                return v
            })), n.d(t, "a", (function() {
                return m
            }));
            n("PN9k");
            var r, i = n("kGix"),
                o = n("Ssj5"),
                a = n("oEOe"),
                s = {
                    fetchStatus: i.a.NONE,
                    scheduledTweets: []
                },
                c = "FETCH_SCHEDULED_TWEETS",
                u = Object(a.a)("rweb/scheduledTweets", c),
                l = "DELETE_SCHEDULED_TWEET",
                f = Object(a.a)("rweb/scheduledTweets", l),
                d = function(e, t) {
                    return t.filter((function(t) {
                        return t.rest_id !== e
                    }))
                };

            function p(e, t) {
                switch (void 0 === e && (e = s), t.type) {
                    case u.SUCCESS:
                        return Object.assign({}, e, {
                            fetchStatus: i.a.LOADED,
                            scheduledTweets: t.payload
                        });
                    case u.FAILURE:
                        return Object.assign({}, e, {
                            fetchStatus: i.a.FAILED
                        });
                    case u.REQUEST:
                        return Object.assign({}, e, {
                            fetchStatus: i.a.LOADING
                        });
                    case f.SUCCESS:
                        var n = t.meta;
                        return n && n.deleteScheduledTweetId ? Object.assign({}, e, {
                            scheduledTweets: d(n.deleteScheduledTweetId, e.scheduledTweets)
                        }) : e;
                    default:
                        return e
                }
            }
            o.a.register(((r = {}).scheduledTweets = p, r));
            var h = function(e) {
                    return e.scheduledTweets.scheduledTweets
                },
                g = function(e) {
                    return e.scheduledTweets.fetchStatus
                },
                v = function() {
                    return function(e, t, n) {
                        var r = n.api;
                        return Object(a.b)(e, {
                            request: r.Scheduling.fetchScheduledTweets,
                            params: {}
                        })({
                            actionTypes: u,
                            context: c
                        }).then((function() {}))
                    }
                },
                m = function(e) {
                    return function(t, n, r) {
                        var i = r.api;
                        return Object(a.b)(t, {
                            request: i.Scheduling.deleteScheduledTweet,
                            params: {
                                scheduled_tweet_id: e
                            }
                        })({
                            actionTypes: f,
                            context: l,
                            meta: {
                                deleteScheduledTweetId: e
                            }
                        })
                    }
                }
        },
        Y5pQ: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                var t = e || "",
                    n = arguments.length;
                if (n > 1)
                    for (var r = 1; r < n; r++) {
                        var i = arguments[r];
                        i && (t = (t ? t + " " : "") + i)
                    }
                return t
            }
        },
        YM28: function(e, t, n) {
            "use strict";
            var r = n("b+nQ"),
                i = n("AL/+"),
                o = n("Svze"),
                a = o.List,
                s = o.Map,
                c = o.OrderedSet,
                u = o.Record,
                l = o.Repeat,
                f = c(),
                d = {
                    parent: null,
                    characterList: a(),
                    data: s(),
                    depth: 0,
                    key: "",
                    text: "",
                    type: "unstyled",
                    children: a(),
                    prevSibling: null,
                    nextSibling: null
                },
                p = function(e, t) {
                    return e.getStyle() === t.getStyle()
                },
                h = function(e, t) {
                    return e.getEntity() === t.getEntity()
                },
                g = function(e) {
                    if (!e) return e;
                    var t = e.characterList,
                        n = e.text;
                    return n && !t && (e.characterList = a(l(r.EMPTY, n.length))), e
                },
                v = function(e) {
                    var t, n;

                    function r() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d;
                        return e.call(this, g(t)) || this
                    }
                    n = e, (t = r).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
                    var o = r.prototype;
                    return o.getKey = function() {
                        return this.get("key")
                    }, o.getType = function() {
                        return this.get("type")
                    }, o.getText = function() {
                        return this.get("text")
                    }, o.getCharacterList = function() {
                        return this.get("characterList")
                    }, o.getLength = function() {
                        return this.getText().length
                    }, o.getDepth = function() {
                        return this.get("depth")
                    }, o.getData = function() {
                        return this.get("data")
                    }, o.getInlineStyleAt = function(e) {
                        var t = this.getCharacterList().get(e);
                        return t ? t.getStyle() : f
                    }, o.getEntityAt = function(e) {
                        var t = this.getCharacterList().get(e);
                        return t ? t.getEntity() : null
                    }, o.getChildKeys = function() {
                        return this.get("children")
                    }, o.getParentKey = function() {
                        return this.get("parent")
                    }, o.getPrevSiblingKey = function() {
                        return this.get("prevSibling")
                    }, o.getNextSiblingKey = function() {
                        return this.get("nextSibling")
                    }, o.findStyleRanges = function(e, t) {
                        i(this.getCharacterList(), p, e, t)
                    }, o.findEntityRanges = function(e, t) {
                        i(this.getCharacterList(), h, e, t)
                    }, r
                }(u(d));
            e.exports = v
        },
        YSZ8: function(e, t, n) {
            "use strict";
            var r = {},
                i = Math.pow(2, 24);
            e.exports = function() {
                for (var e; void 0 === e || r.hasOwnProperty(e) || !isNaN(+e);) e = Math.floor(Math.random() * i).toString(32);
                return r[e] = !0, e
            }
        },
        Yed0: function(e, t, n) {
            "use strict";
            var r, i = n("tDjQ"),
                o = n("Svze"),
                a = n("hF1F"),
                s = o.OrderedMap,
                c = {
                    getDirectionMap: function(e, t) {
                        r ? r.reset() : r = new i;
                        var n = e.getBlockMap(),
                            c = n.valueSeq().map((function(e) {
                                return a(r).getDirection(e.getText())
                            })),
                            u = s(n.keySeq().zip(c));
                        return null != t && o.is(t, u) ? t : u
                    }
                };
            e.exports = c
        },
        ZFda: function(e, t, n) {
            "use strict";
            var r = n("1xkk"),
                i = n("W6iK"),
                o = n("1AUG"),
                a = n("4aXP");
            e.exports = function(e) {
                var t = a(e, (function(e) {
                    var t = e.getSelection(),
                        n = e.getCurrentContent(),
                        r = t.getAnchorKey(),
                        a = t.getAnchorOffset(),
                        s = n.getBlockForKey(r).getText()[a - 1];
                    return o(e, s ? i.getUTF16Length(s, 0) : 1)
                }), "backward");
                if (t === e.getCurrentContent()) return e;
                var n = e.getSelection();
                return r.push(e, t.set("selectionBefore", n), n.isCollapsed() ? "backspace-character" : "remove-range")
            }
        },
        ZUd0: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                return !("undefined" == typeof window || !window.__DRAFT_GKX) && !!window.__DRAFT_GKX[e]
            }
        },
        ZlNV: function(e, t, n) {
            "use strict";
            var r = function() {
                function e(e) {
                    var t, n, r;
                    r = void 0, (n = "_uri") in (t = this) ? Object.defineProperty(t, n, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[n] = r, this._uri = e
                }
                return e.prototype.toString = function() {
                    return this._uri
                }, e
            }();
            e.exports = r
        },
        ZxmY: function(e, t, n) {
            "use strict";
            var r = n("b+nQ");
            e.exports = function(e, t, n, i) {
                for (var o = e.getCharacterList(); t < n;) o = o.set(t, r.applyEntity(o.get(t), i)), t++;
                return e.set("characterList", o)
            }
        },
        "b+nQ": function(e, t, n) {
            "use strict";
            var r = n("Svze"),
                i = r.Map,
                o = r.OrderedSet,
                a = r.Record,
                s = o(),
                c = {
                    style: s,
                    entity: null
                },
                u = function(e) {
                    var t, n;

                    function r() {
                        return e.apply(this, arguments) || this
                    }
                    n = e, (t = r).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
                    var o = r.prototype;
                    return o.getStyle = function() {
                        return this.get("style")
                    }, o.getEntity = function() {
                        return this.get("entity")
                    }, o.hasStyle = function(e) {
                        return this.getStyle().includes(e)
                    }, r.applyStyle = function(e, t) {
                        var n = e.set("style", e.getStyle().add(t));
                        return r.create(n)
                    }, r.removeStyle = function(e, t) {
                        var n = e.set("style", e.getStyle().remove(t));
                        return r.create(n)
                    }, r.applyEntity = function(e, t) {
                        var n = e.getEntity() === t ? e : e.set("entity", t);
                        return r.create(n)
                    }, r.create = function(e) {
                        if (!e) return l;
                        var t = i({
                                style: s,
                                entity: null
                            }).merge(e),
                            n = f.get(t);
                        if (n) return n;
                        var o = new r(t);
                        return f = f.set(t, o), o
                    }, r
                }(a(c)),
                l = new u,
                f = i([
                    [i(c), l]
                ]);
            u.EMPTY = l, e.exports = u
        },
        "b//S": function(e, t, n) {
            "use strict";
            var r = {
                encode: function(e, t, n) {
                    return e + "-" + t + "-" + n
                },
                decode: function(e) {
                    var t = e.split("-").reverse(),
                        n = t[0],
                        r = t[1];
                    return {
                        blockKey: t.slice(2).reverse().join("-"),
                        decoratorKey: parseInt(r, 10),
                        leafKey: parseInt(n, 10)
                    }
                }
            };
            e.exports = r
        },
        bdcm: function(e, t, n) {
            "use strict";

            function r(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    })))), r.forEach((function(t) {
                        i(e, t, n[t])
                    }))
                }
                return e
            }

            function i(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var o = n("YSZ8"),
                a = n("tI3i"),
                s = function(e) {
                    if (!e || !e.type) return !1;
                    var t = e.type;
                    return "unordered-list-item" === t || "ordered-list-item" === t
                },
                c = {
                    fromRawTreeStateToRawState: function(e) {
                        var t = e.blocks,
                            n = [];
                        return Array.isArray(t) || a(!1), Array.isArray(t) && t.length ? (function(e, t) {
                            for (var n = [].concat(e).reverse(); n.length;) {
                                var r = n.pop();
                                t(r);
                                var i = r.children;
                                Array.isArray(i) || a(!1), n = n.concat([].concat(i.reverse()))
                            }
                        }(t, (function(e) {
                            var t = r({}, e);
                            s(e) && (t.depth = t.depth || 0, function(e) {
                                Array.isArray(e.children) && (e.children = e.children.map((function(t) {
                                    return t.type === e.type ? r({}, t, {
                                        depth: (e.depth || 0) + 1
                                    }) : t
                                })))
                            }(e), null != e.children && e.children.length > 0) || (delete t.children, n.push(t))
                        })), e.blocks = n, r({}, e, {
                            blocks: n
                        })) : e
                    },
                    fromRawStateToRawTreeState: function(e) {
                        var t = [],
                            n = [];
                        return e.blocks.forEach((function(e) {
                            var i = s(e),
                                a = e.depth || 0,
                                c = r({}, e, {
                                    children: []
                                });
                            if (i) {
                                var u = n[0];
                                if (null == u && 0 === a) t.push(c);
                                else if (null == u || u.depth < a - 1) {
                                    var l = {
                                        key: o(),
                                        text: "",
                                        depth: a - 1,
                                        type: e.type,
                                        children: [],
                                        entityRanges: [],
                                        inlineStyleRanges: []
                                    };
                                    n.unshift(l), 1 === a ? t.push(l) : null != u && u.children.push(l), l.children.push(c)
                                } else if (u.depth === a - 1) u.children.push(c);
                                else {
                                    for (; null != u && u.depth >= a;) n.shift(), u = n[0];
                                    a > 0 ? u.children.push(c) : t.push(c)
                                }
                            } else t.push(c)
                        })), r({}, e, {
                            blocks: t
                        })
                    }
                };
            e.exports = c
        },
        cQcL: function(e, t, n) {
            "use strict";
            var r = /\r\n?|\n/g;
            e.exports = function(e) {
                return e.split(r)
            }
        },
        dVQN: function(e, t, n) {
            "use strict";
            var r = n("R0VQ");
            e.exports = function(e) {
                var t = e.getSelection();
                if (!t.rangeCount) return null;
                var n = t.getRangeAt(0),
                    i = r(n),
                    o = i.top,
                    a = i.right,
                    s = i.bottom,
                    c = i.left;
                return 0 === o && 0 === a && 0 === s && 0 === c ? null : i
            }
        },
        dWxr: function(e, t, n) {
            "use strict";
            var r = n("HJWM");
            n("qSjM"), Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t) {
                var n = (0, s.default)(e, t).concat((0, a.default)(e)).concat((0, o.default)(e, {
                    checkUrlOverlap: !1
                })).concat((0, i.default)(e));
                if (0 == n.length) return [];
                return (0, c.default)(n), n
            };
            var i = r(n("EW8Q")),
                o = r(n("yyPN")),
                a = r(n("YXS5")),
                s = r(n("vwfs")),
                c = r(n("c8jd"));
            e.exports = t.default
        },
        djSO: function(e, t, n) {
            "use strict";
            var r = n("/jhs"),
                i = n("CqlG"),
                o = n("tBqf"),
                a = new RegExp("\r\n", "g"),
                s = {
                    "text/rtf": 1,
                    "text/html": 1
                };

            function c(e) {
                if ("file" == e.kind) return e.getAsFile()
            }
            var u = function() {
                function e(e) {
                    this.data = e, this.types = e.types ? i(e.types) : []
                }
                var t = e.prototype;
                return t.isRichText = function() {
                    return !(!this.getHTML() || !this.getText()) || !this.isImage() && this.types.some((function(e) {
                        return s[e]
                    }))
                }, t.getText = function() {
                    var e;
                    return this.data.getData && (this.types.length ? -1 != this.types.indexOf("text/plain") && (e = this.data.getData("text/plain")) : e = this.data.getData("Text")), e ? e.replace(a, "\n") : null
                }, t.getHTML = function() {
                    if (this.data.getData) {
                        if (!this.types.length) return this.data.getData("Text");
                        if (-1 != this.types.indexOf("text/html")) return this.data.getData("text/html")
                    }
                }, t.isLink = function() {
                    return this.types.some((function(e) {
                        return -1 != e.indexOf("Url") || -1 != e.indexOf("text/uri-list") || e.indexOf("text/x-moz-url")
                    }))
                }, t.getLink = function() {
                    return this.data.getData ? -1 != this.types.indexOf("text/x-moz-url") ? this.data.getData("text/x-moz-url").split("\n")[0] : -1 != this.types.indexOf("text/uri-list") ? this.data.getData("text/uri-list") : this.data.getData("url") : null
                }, t.isImage = function() {
                    var e = this.types.some((function(e) {
                        return -1 != e.indexOf("application/x-moz-file")
                    }));
                    if (e) return !0;
                    for (var t = this.getFiles(), n = 0; n < t.length; n++) {
                        var i = t[n].type;
                        if (!r.isImage(i)) return !1
                    }
                    return !0
                }, t.getCount = function() {
                    return this.data.hasOwnProperty("items") ? this.data.items.length : this.data.hasOwnProperty("mozItemCount") ? this.data.mozItemCount : this.data.files ? this.data.files.length : null
                }, t.getFiles = function() {
                    return this.data.items ? Array.prototype.slice.call(this.data.items).map(c).filter(o.thatReturnsArgument) : this.data.files ? Array.prototype.slice.call(this.data.files) : []
                }, t.hasFiles = function() {
                    return this.getFiles().length > 0
                }, e
            }();
            e.exports = u
        },
        e59y: function(e, t, n) {
            "use strict";

            function r(e, t) {
                return t && "MUTABLE" === e.__get(t).getMutability() ? t : null
            }
            e.exports = function(e, t) {
                var n;
                if (t.isCollapsed()) {
                    var i = t.getAnchorKey(),
                        o = t.getAnchorOffset();
                    return o > 0 ? (n = e.getBlockForKey(i).getEntityAt(o - 1)) !== e.getBlockForKey(i).getEntityAt(o) ? null : r(e.getEntityMap(), n) : null
                }
                var a = t.getStartKey(),
                    s = t.getStartOffset(),
                    c = e.getBlockForKey(a);
                return n = s === c.getLength() ? null : c.getEntityAt(s), r(e.getEntityMap(), n)
            }
        },
        euSu: function(e, t, n) {
            "use strict";
            var r = /-(.)/g;
            e.exports = function(e) {
                return e.replace(r, (function(e, t) {
                    return t.toUpperCase()
                }))
            }
        },
        fI5n: function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.default = void 0, n("PN9k");
            var r = a(n("7DT3")),
                i = a(n("ERkP")),
                o = a(n("OkZJ"));

            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var s = function(e) {
                return void 0 === e && (e = {}), (0, r.default)("svg", Object.assign({}, e, {
                    style: [o.default.root, e.style],
                    viewBox: "0 0 24 24"
                }), i.default.createElement("g", null, i.default.createElement("path", {
                    d: "M-37.9 18c-.1-.1-.1-.1-.1-.2.1 0 .1.1.1.2z"
                }), i.default.createElement("path", {
                    d: "M-37.9 18c-.1-.1-.1-.1-.1-.2.1 0 .1.1.1.2zM18 2.2h-1.3v-.3c0-.4-.3-.8-.8-.8-.4 0-.8.3-.8.8v.3H7.7v-.3c0-.4-.3-.8-.8-.8-.4 0-.8.3-.8.8v.3H4.8c-1.4 0-2.5 1.1-2.5 2.5v13.1c0 1.4 1.1 2.5 2.5 2.5h2.9c.4 0 .8-.3.8-.8 0-.4-.3-.8-.8-.8H4.8c-.6 0-1-.5-1-1V7.9c0-.3.4-.7 1-.7H18c.6 0 1 .4 1 .7v1.8c0 .4.3.8.8.8.4 0 .8-.3.8-.8v-5c-.1-1.4-1.2-2.5-2.6-2.5zm1 3.7c-.3-.1-.7-.2-1-.2H4.8c-.4 0-.7.1-1 .2V4.7c0-.6.5-1 1-1h1.3v.5c0 .4.3.8.8.8.4 0 .8-.3.8-.8v-.5h7.5v.5c0 .4.3.8.8.8.4 0 .8-.3.8-.8v-.5H18c.6 0 1 .5 1 1v1.2z"
                }), i.default.createElement("path", {
                    d: "M15.5 10.4c-3.4 0-6.2 2.8-6.2 6.2 0 3.4 2.8 6.2 6.2 6.2 3.4 0 6.2-2.8 6.2-6.2 0-3.4-2.8-6.2-6.2-6.2zm0 11c-2.6 0-4.7-2.1-4.7-4.7s2.1-4.7 4.7-4.7 4.7 2.1 4.7 4.7c0 2.5-2.1 4.7-4.7 4.7z"
                }), i.default.createElement("path", {
                    d: "M18.9 18.7c-.1.2-.4.4-.6.4-.1 0-.3 0-.4-.1l-3.1-2v-3c0-.4.3-.8.8-.8.4 0 .8.3.8.8v2.2l2.4 1.5c.2.2.3.6.1 1z"
                })))
            };
            s.metadata = {
                height: 24,
                width: 24
            };
            var c = s;
            t.default = c
        },
        fNVm: function(e, t, n) {
            "use strict";
            var r = new RegExp("\r", "g");
            e.exports = function(e) {
                return e.replace(r, "")
            }
        },
        fNrL: function(e, t, n) {
            "use strict";
            var r = n("PrWI");
            e.exports = function(e, t) {
                e._latestEditorState.getSelection().isCollapsed() ? t.preventDefault() : e.setClipboard(r(e._latestEditorState))
            }
        },
        fpFo: function(e, t, n) {
            "use strict";
            var r = n("z0XV"),
                i = n("7002"),
                o = n("b//S"),
                a = n("1xkk"),
                s = n("ObfX"),
                c = n("DuSR"),
                u = n("KqX8"),
                l = n("WbhC"),
                f = n("e59y"),
                d = n("hF1F"),
                p = !1,
                h = !1,
                g = null;
            var v = {
                onCompositionStart: function(e) {
                    h = !0,
                        function(e) {
                            g || (g = new r(u(e))).start()
                        }(e)
                },
                onCompositionEnd: function(e) {
                    p = !1, h = !1, setTimeout((function() {
                        p || v.resolveComposition(e)
                    }), 20)
                },
                onSelect: c,
                onKeyDown: function(e, t) {
                    if (!h) return v.resolveComposition(e), void e._onKeyDown(t);
                    t.which !== s.RIGHT && t.which !== s.LEFT || t.preventDefault()
                },
                onKeyPress: function(e, t) {
                    t.which === s.RETURN && t.preventDefault()
                },
                resolveComposition: function(e) {
                    if (!h) {
                        var t = d(g).stopAndFlushMutations();
                        g = null, p = !0;
                        var n = a.set(e._latestEditorState, {
                            inCompositionMode: !1
                        });
                        if (e.exitCurrentMode(), t.size) {
                            var r = n.getCurrentContent();
                            t.forEach((function(e, t) {
                                var s = o.decode(t),
                                    c = s.blockKey,
                                    u = s.decoratorKey,
                                    l = s.leafKey,
                                    d = n.getBlockTree(c).getIn([u, "leaves", l]),
                                    p = d.start,
                                    h = d.end,
                                    g = n.getSelection().merge({
                                        anchorKey: c,
                                        focusKey: c,
                                        anchorOffset: p,
                                        focusOffset: h,
                                        isBackward: !1
                                    }),
                                    v = f(r, g),
                                    m = r.getBlockForKey(c).getInlineStyleAt(p);
                                r = i.replaceText(r, g, e, m, v), n = a.set(n, {
                                    currentContent: r
                                })
                            }));
                            var s = l(n, u(e)).selectionState;
                            e.restoreEditorDOM();
                            var c = a.acceptSelection(n, s);
                            e.update(a.push(c, r, "insert-characters"))
                        } else e.update(n)
                    }
                }
            };
            e.exports = v
        },
        gLP3: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                e.setMode("drag"), t.preventDefault()
            }
        },
        gZn9: function(e, t, n) {
            "use strict";
            var r = n("laB8"),
                i = n("ObfX"),
                o = n("rim0"),
                a = o.isPlatform("Mac OS X"),
                s = a && o.isBrowser("Firefox < 29"),
                c = r.hasCommandModifier,
                u = r.isCtrlKeyCommand;

            function l(e) {
                return a && e.altKey || u(e)
            }
            e.exports = function(e) {
                switch (e.keyCode) {
                    case 66:
                        return c(e) ? "bold" : null;
                    case 68:
                        return u(e) ? "delete" : null;
                    case 72:
                        return u(e) ? "backspace" : null;
                    case 73:
                        return c(e) ? "italic" : null;
                    case 74:
                        return c(e) ? "code" : null;
                    case 75:
                        return a && u(e) ? "secondary-cut" : null;
                    case 77:
                    case 79:
                        return u(e) ? "split-block" : null;
                    case 84:
                        return a && u(e) ? "transpose-characters" : null;
                    case 85:
                        return c(e) ? "underline" : null;
                    case 87:
                        return a && u(e) ? "backspace-word" : null;
                    case 89:
                        return u(e) ? a ? "secondary-paste" : "redo" : null;
                    case 90:
                        return function(e) {
                            return c(e) ? e.shiftKey ? "redo" : "undo" : null
                        }(e) || null;
                    case i.RETURN:
                        return "split-block";
                    case i.DELETE:
                        return function(e) {
                            return !a && e.shiftKey ? null : l(e) ? "delete-word" : "delete"
                        }(e);
                    case i.BACKSPACE:
                        return function(e) {
                            return c(e) && a ? "backspace-to-start-of-line" : l(e) ? "backspace-word" : "backspace"
                        }(e);
                    case i.LEFT:
                        return s && c(e) ? "move-selection-to-start-of-block" : null;
                    case i.RIGHT:
                        return s && c(e) ? "move-selection-to-end-of-block" : null;
                    default:
                        return null
                }
            }
        },
        glMO: function(e, t, n) {
            "use strict";
            var r = n("1xkk"),
                i = n("rim0");
            e.exports = function(e, t) {
                var n = e._latestEditorState,
                    o = n.getSelection();
                if (!o.getHasFocus()) {
                    var a = o.set("hasFocus", !0);
                    e.props.onFocus && e.props.onFocus(t), i.isBrowser("Chrome < 60.0.3081.0") ? e.update(r.forceSelection(n, a)) : e.update(r.acceptSelection(n, a))
                }
            }
        },
        gpZN: function(e, t, n) {
            "use strict";
            var r = n("7002"),
                i = n("1xkk"),
                o = n("hDHP"),
                a = n("hF1F"),
                s = null,
                c = {
                    cut: function(e) {
                        var t = e.getCurrentContent(),
                            n = e.getSelection(),
                            c = null;
                        if (n.isCollapsed()) {
                            var u = n.getAnchorKey(),
                                l = t.getBlockForKey(u).getLength();
                            if (l === n.getAnchorOffset()) {
                                var f = t.getKeyAfter(u);
                                if (null == f) return e;
                                c = n.set("focusKey", f).set("focusOffset", 0)
                            } else c = n.set("focusOffset", l)
                        } else c = n;
                        c = a(c), s = o(t, c);
                        var d = r.removeRange(t, c, "forward");
                        return d === t ? e : i.push(e, d, "remove-range")
                    },
                    paste: function(e) {
                        if (!s) return e;
                        var t = r.replaceWithFragment(e.getCurrentContent(), e.getSelection(), s);
                        return i.push(e, t, "insert-fragment")
                    }
                };
            e.exports = c
        },
        hDHP: function(e, t, n) {
            "use strict";
            var r = n("n1lM"),
                i = n("/L11");
            e.exports = function(e, t) {
                var n = t.getStartKey(),
                    o = t.getStartOffset(),
                    a = t.getEndKey(),
                    s = t.getEndOffset(),
                    c = i(e, t).getBlockMap(),
                    u = c.keySeq(),
                    l = u.indexOf(n),
                    f = u.indexOf(a) + 1;
                return r(c.slice(l, f).map((function(e, t) {
                    var r = e.getText(),
                        i = e.getCharacterList();
                    return n === a ? e.merge({
                        text: r.slice(o, s),
                        characterList: i.slice(o, s)
                    }) : t === n ? e.merge({
                        text: r.slice(o),
                        characterList: i.slice(o)
                    }) : t === a ? e.merge({
                        text: r.slice(0, s),
                        characterList: i.slice(0, s)
                    }) : e
                })))
            }
        },
        hF1F: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                if (null != e) return e;
                throw new Error("Got unexpected null or undefined")
            }
        },
        hHEM: function(e, t, n) {
            "use strict";
            n("0rpg");
            var r = n("ERkP"),
                i = n("dWxr"),
                o = n.n(i),
                a = n("rHpw"),
                s = n("aITJ"),
                c = n("zpdM"),
                u = {
                    strategy: function(e, t) {
                        for (var n = o()(e.getText()), r = 0; r < n.length; r++) n[r].indices && 2 === n[r].indices.length && t(n[r].indices[0], n[r].indices[1])
                    },
                    component: function(e) {
                        return r.createElement("span", {
                            style: {
                                color: a.a.theme.colors.link
                            }
                        }, e.children)
                    }
                },
                l = {
                    strategy: function(e, t, n) {
                        e.findEntityRanges((function(e) {
                            var t = e.getEntity(),
                                r = t && n.getEntity(t);
                            return !(!r || r.type !== m.TWEMOJI_ENTITY_TYPE)
                        }), t)
                    },
                    component: function(e) {
                        var t = e.children,
                            n = e.contentState,
                            i = e.entityKey,
                            o = i && n.getEntity(i) || {};
                        return !(s.a.isFirefox() && s.a.firefoxVersion() < 49) ? r.Children.map(t, (function(e) {
                            return r.cloneElement(e, {
                                style: (t = o.data && o.data.url || "", {
                                    backgroundImage: 'url("' + t + '")',
                                    backgroundSize: "1em 1em",
                                    padding: "0.15em",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    WebkitTextFillColor: "transparent"
                                })
                            });
                            var t
                        })) : t
                    }
                },
                f = {
                    strategy: function(e, t) {
                        var n = function(e, t, n) {
                            for (var r, i, o = t.getText(); r = e.exec(o);) n(i = r.index, i + r[0].length)
                        }(/\r/g, e, t);
                        if (n) return t(n, n + 1)
                    },
                    component: function() {
                        return "\n"
                    }
                },
                d = n("z4Oz"),
                p = function(e, t) {
                    for (var n = 0, r = 0; r < e.length; r++) {
                        var i = e[r],
                            o = i.getText().length;
                        if (n + o >= t) return {
                            blockKey: i.key,
                            offset: t - n
                        };
                        n += o + 1
                    }
                    return {}
                },
                h = function(e, t, n) {
                    var r = n,
                        i = e.getBlockForKey(t);
                    if (i) {
                        var o = i.getEntityAt(n);
                        if (void 0 !== o) {
                            var a = o && e.getEntity(o),
                                s = a && a.data && a.data.id;
                            if (void 0 !== s)
                                for (var c = n - 1; c >= 0; c--) {
                                    var u = i.getEntityAt(c),
                                        l = u && e.getEntity(u);
                                    if (!l || !l.data || l.data.id !== s) {
                                        r = c + 1;
                                        break
                                    }
                                }
                        }
                        return r
                    }
                },
                g = "TWEMOJI",
                v = "IMMUTABLE",
                m = t.a = {
                    convertEmojiToEntities: function(e) {
                        var t = c.EditorState.set(e, {
                                allowUndo: !1
                            }),
                            n = t.getCurrentContent(),
                            r = 0;
                        return n.getBlocksAsArray().forEach((function(e) {
                            d.a.getTwemojiEntities(e.getText()).forEach((function(i) {
                                if (2 === (i.indices && i.indices.length)) {
                                    var o = n.createEntity(g, v, {
                                            url: i.url || null,
                                            id: r++
                                        }),
                                        a = o.getLastCreatedEntityKey(),
                                        s = e.getKey(),
                                        u = t.getSelection().merge({
                                            anchorKey: s,
                                            anchorOffset: i.indices[0],
                                            focusKey: s,
                                            focusOffset: i.indices[1],
                                            isBackward: !1
                                        });
                                    n = c.Modifier.applyEntity(o, u, a)
                                }
                            }))
                        })), c.EditorState.set(t, {
                            allowUndo: !0,
                            currentContent: n
                        })
                    },
                    getRelativeOffset: p,
                    initEditorState: function(e) {
                        void 0 === e && (e = "");
                        var t = [u, l, f],
                            n = c.EditorState.createWithContent(c.ContentState.createFromText(e), new c.CompositeDecorator(t));
                        return c.EditorState.moveSelectionToEnd(n)
                    },
                    insertTextAtCursor: function(e, t) {
                        var n = e.getCurrentContent(),
                            r = e.getSelection(),
                            i = c.Modifier.insertText(n, r, t);
                        return c.EditorState.push(e, i, "insert-characters")
                    },
                    TWEMOJI_ENTITY_TYPE: g,
                    updateOverflowStyle: function(e, t, n) {
                        var r;
                        void 0 === n && (n = !1);
                        var i = e.getSelection(),
                            o = c.EditorState.set(e, {
                                allowUndo: !1
                            }),
                            a = e.getCurrentContent().getSelectionBefore(),
                            s = e.getCurrentContent().getSelectionAfter(),
                            u = e.getCurrentContent().getBlocksAsArray(),
                            l = "number" == typeof t && t > -1,
                            f = l ? p(u, t) : {};
                        if (n && (o = function(e, t) {
                                var n = e.getCurrentContent(),
                                    r = n.getFirstBlock(),
                                    i = n.getLastBlock(),
                                    o = t.blockKey,
                                    a = void 0 === o ? i.key : o,
                                    s = t.offset,
                                    u = void 0 === s ? i.getText().length : s,
                                    l = e.getSelection().merge({
                                        anchorKey: r.key,
                                        anchorOffset: 0,
                                        focusKey: a,
                                        focusOffset: u,
                                        isBackward: !1
                                    }),
                                    f = c.Modifier.removeInlineStyle(e.getCurrentContent(), l, "overflow");
                                return c.EditorState.push(e, f, "change-inline-style")
                            }(o, f), r = !0), l && (o = function(e, t) {
                                var n = t.blockKey,
                                    r = t.offset,
                                    i = e.getCurrentContent(),
                                    o = i.getLastBlock(),
                                    a = h(i, n, r);
                                if (n) {
                                    var s = e.getSelection().merge({
                                            anchorKey: n,
                                            anchorOffset: a,
                                            focusKey: o.key,
                                            focusOffset: o.getText().length,
                                            isBackward: !1
                                        }),
                                        u = c.Modifier.applyInlineStyle(i, s, "overflow");
                                    return c.EditorState.push(e, u, "change-inline-style")
                                }
                                return e
                            }(o, f), r = !0), r) {
                            var d = (o = c.EditorState.forceSelection(o, i)).getCurrentContent();
                            d = (d = d.set("selectionBefore", a)).set("selectionAfter", s), o = c.EditorState.set(e, {
                                allowUndo: !0,
                                currentContent: d
                            })
                        }
                        return o
                    }
                }
        },
        hgxY: function(e, t, n) {
            "use strict";
            var r = n("b+nQ"),
                i = n("Svze").List;
            e.exports = function(e, t) {
                var n = e.map((function(e, n) {
                    var i = t[n];
                    return r.create({
                        style: e,
                        entity: i
                    })
                }));
                return i(n)
            }
        },
        iN4q: function(e, t, n) {
            "use strict";
            var r = n("MIqs");
            e.exports = function e(t, n) {
                return !(!t || !n) && (t === n || !r(t) && (r(n) ? e(t, n.parentNode) : "contains" in t ? t.contains(n) : !!t.compareDocumentPosition && !!(16 & t.compareDocumentPosition(n))))
            }
        },
        iogJ: function(e, t, n) {
            "use strict";
            var r = "\\s|(?![_])" + n("lTVW").getPunctuation(),
                i = new RegExp("^(?:" + r + ")*(?:['‘’]|(?!" + r + ").)*(?:(?!" + r + ").)"),
                o = new RegExp("(?:(?!" + r + ").)(?:['‘’]|(?!" + r + ").)*(?:" + r + ")*$");

            function a(e, t) {
                var n = t ? o.exec(e) : i.exec(e);
                return n ? n[0] : e
            }
            var s = {
                getBackward: function(e) {
                    return a(e, !0)
                },
                getForward: function(e) {
                    return a(e, !1)
                }
            };
            e.exports = s
        },
        k5bp: function(e, t, n) {
            "use strict";
            var r = n("7002"),
                i = n("1xkk"),
                o = n("/LAw"),
                a = n("PrWI"),
                s = n("7MNd");
            e.exports = function(e, t) {
                var n, c = e._latestEditorState,
                    u = c.getSelection(),
                    l = t.target;
                if (u.isCollapsed()) t.preventDefault();
                else {
                    l instanceof Node && (n = s(o.getScrollParent(l)));
                    var f = a(c);
                    e.setClipboard(f), e.setMode("cut"), setTimeout((function() {
                        e.restoreEditorDOM(n), e.exitCurrentMode(), e.update(function(e) {
                            var t = r.removeRange(e.getCurrentContent(), e.getSelection(), "forward");
                            return i.push(e, t, "remove-range")
                        }(c))
                    }), 0)
                }
            }
        },
        keCP: function(e, t, n) {
            "use strict";
            var r = n("1Pcy"),
                i = n.n(r),
                o = n("W/Kd"),
                a = n.n(o),
                s = n("KEM+"),
                c = n.n(s),
                u = function() {
                    return "\n         .DraftEditor-editorContainer, .DraftEditor-root, .public-DraftEditor-content {\n            height: inherit;\n            text-align: initial;\n            min-height: inherit;\n            max-height: inherit;\n            overflow: auto;\n        }\n\n        .public-DraftEditor-content[contenteditable=true] {\n            -webkit-user-modify: read-write-plaintext-only\n        }\n\n        .DraftEditor-root {\n            width: 100%;\n            position: relative\n        }\n\n        .DraftEditor-editorContainer {\n            background-color: rgba(255, 255, 255, 0);\n            border-left: .1px solid transparent;\n            position: relative;\n            z-index: 1\n        }\n\n        .public-DraftEditor-block {\n            position: relative\n        }\n\n        .DraftEditor-alignLeft .public-DraftStyleDefault-block {\n            text-align: left\n        }\n\n        .DraftEditor-alignLeft .public-DraftEditorPlaceholder-root {\n            left: 0;\n            text-align: left\n        }\n\n        .DraftEditor-alignCenter .public-DraftStyleDefault-block {\n            text-align: center\n        }\n\n        .DraftEditor-alignCenter .public-DraftEditorPlaceholder-root {\n            margin: 0 auto;\n            text-align: center;\n            width: 100%\n        }\n\n        .DraftEditor-alignRight .public-DraftStyleDefault-block {\n            text-align: right\n        }\n\n        .DraftEditor-alignRight .public-DraftEditorPlaceholder-root {\n            right: 0;\n            text-align: right\n        }\n\n        .public-DraftEditorPlaceholder-root {\n            color: #9197a3;\n            position: absolute;\n            z-index: 1\n        }\n\n        .public-DraftEditorPlaceholder-hasFocus {\n            color: #bdc1c9\n        }\n\n        .DraftEditorPlaceholder-hidden {\n            display: none\n        }\n\n        .public-DraftStyleDefault-block {\n            position: relative;\n            overflow:hidden;\n            white-space: pre-wrap\n        }\n\n        .public-DraftStyleDefault-ltr {\n            direction: ltr;\n            text-align: left\n        }\n\n        .public-DraftStyleDefault-rtl {\n            direction: rtl;\n            text-align: right\n        }\n    "
                },
                l = n("ERkP"),
                f = n("w9LO"),
                d = n("fs1G"),
                p = n("rHpw"),
                h = (n("aWzz"), n("7DT3")),
                g = n.n(h),
                v = n("zpdM"),
                m = function(e) {
                    return g()("div", e)
                },
                y = 13,
                _ = 27,
                b = !1,
                S = function(e) {
                    function t() {
                        for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                        return t = e.call.apply(e, [this].concat(r)) || this, c()(i()(t), "_setFocusToEnd", (function() {
                            var e = t.props,
                                n = e.autoFocus,
                                r = e.editorState,
                                i = e.onChange;
                            n ? i && i(v.EditorState.moveFocusToEnd(r)) : i && i(v.EditorState.moveSelectionToEnd(r))
                        })), c()(i()(t), "_setDraftJsStyle", (function() {
                            var e = document.createElement("style");
                            e.innerHTML = u();
                            var t = document.head;
                            t && t.insertBefore(e, t.firstChild)
                        })), c()(i()(t), "focus", (function() {
                            t._editor && t._editor.focus()
                        })), c()(i()(t), "blur", (function() {
                            t._editor && t._editor.blur()
                        })), c()(i()(t), "value", (function() {
                            return t.props.editorState.getCurrentContent().getPlainText()
                        })), c()(i()(t), "getOffsetHeight", (function() {
                            var e = (t._editor || {}).editor;
                            return e && e.offsetHeight || 0
                        })), c()(i()(t), "_setEditorRef", (function(e) {
                            t._editor = e
                        })), c()(i()(t), "_handleViewClick", (function() {
                            return t.focus()
                        })), c()(i()(t), "_onPastedFiles", (function(e) {
                            var n = t.props.onFilesAdded;
                            return n && n(e) ? "handled" : "not-handled"
                        })), c()(i()(t), "_myKeyBindingFn", (function(e) {
                            var n = t.props,
                                r = n.dismissComposerCommandName,
                                i = n.sendTweetCommandName,
                                o = v.KeyBindingUtil.hasCommandModifier;
                            return e.keyCode === y && o(e) ? i : e.keyCode === _ ? r : Object(v.getDefaultKeyBinding)(e)
                        })), c()(i()(t), "_onKeyCommand", (function(e) {
                            var n = t.props.keyCommandHandlers,
                                r = n && n[e];
                            return r ? (r(), "handled") : "not-handled"
                        })), t
                    }
                    a()(t, e);
                    var n = t.prototype;
                    return n.componentDidMount = function() {
                        this.props.positionCursorAtEnd ? this._setFocusToEnd() : this.props.autoFocus && this.focus(), b || (this._setDraftJsStyle(), b = !0)
                    }, n.render = function() {
                        var e, t = this.props,
                            n = t.ariaActiveDescendant,
                            r = t.ariaAutocomplete,
                            i = t.ariaControls,
                            o = t.ariaLabel,
                            a = t.editorState,
                            s = t.handleReturn,
                            c = t.maxNumberOfLines,
                            u = t.numberOfLines,
                            d = t.onChange,
                            h = t.onFocus,
                            g = t.onKeyDown,
                            y = t.onKeyPress,
                            _ = t.onKeyUp,
                            b = t.placeholder,
                            S = t.style,
                            C = t.testID,
                            x = {
                                minHeight: u * parseFloat(p.a.theme.lineHeight) + "em",
                                maxHeight: (c - 1) * parseFloat(p.a.theme.lineHeight) + "em"
                            };
                        return l.createElement(m, {
                            onClick: this._handleViewClick,
                            style: [S, x]
                        }, l.createElement(v.Editor, {
                            ariaActiveDescendantID: n,
                            ariaAutoComplete: r,
                            ariaControls: i,
                            ariaLabel: o,
                            ariaMultiline: !0,
                            customAttrs: (e = {}, e[f.a.NO_REFOCUS_ATTRIBUTE] = "true", e.onKeyPress = y, e.onKeyUp = _, e),
                            customStyleMap: w(p.a.theme),
                            editorState: a,
                            handleKeyCommand: this._onKeyCommand,
                            handlePastedFiles: this._onPastedFiles,
                            handleReturn: s,
                            keyBindingFn: this._myKeyBindingFn,
                            onChange: d,
                            onFocus: h,
                            onKeyDown: g,
                            placeholder: b,
                            ref: this._setEditorRef,
                            spellCheck: !0,
                            stripPastedStyles: !0,
                            tabIndex: "0",
                            webDriverTestID: C
                        }))
                    }, t
                }(l.Component);
            c()(S, "defaultProps", {
                autoFocus: !1,
                keyCommandHandlers: {},
                maxNumberOfLines: 30,
                numberOfLines: 6,
                onFocus: d.a,
                positionCursorAtEnd: !1
            }), S.propTypes = {};
            var w = function(e) {
                return {
                    overflow: {
                        backgroundColor: e.colors.textOverflowBackground
                    }
                }
            };
            t.a = S
        },
        krsZ: function(e, t, n) {
            "use strict";

            function r(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var i = n("or4R"),
                o = n("Svze"),
                a = n("tI3i"),
                s = (0, o.Map)(),
                c = 0;
            var u = {
                getLastCreatedEntityKey: function() {
                    return u.__getLastCreatedEntityKey()
                },
                create: function(e, t, n) {
                    return u.__create(e, t, n)
                },
                add: function(e) {
                    return u.__add(e)
                },
                get: function(e) {
                    return u.__get(e)
                },
                mergeData: function(e, t) {
                    return u.__mergeData(e, t)
                },
                replaceData: function(e, t) {
                    return u.__replaceData(e, t)
                },
                __getLastCreatedEntityKey: function() {
                    return "" + c
                },
                __create: function(e, t, n) {
                    return u.__add(new i({
                        type: e,
                        mutability: t,
                        data: n || {}
                    }))
                },
                __add: function(e) {
                    var t = "" + ++c;
                    return s = s.set(t, e), t
                },
                __get: function(e) {
                    var t = s.get(e);
                    return t || a(!1), t
                },
                __mergeData: function(e, t) {
                    var n = u.__get(e),
                        i = function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    i = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                })))), i.forEach((function(t) {
                                    r(e, t, n[t])
                                }))
                            }
                            return e
                        }({}, n.getData(), t),
                        o = n.set("data", i);
                    return s = s.set(e, o), o
                },
                __replaceData: function(e, t) {
                    var n = u.__get(e).set("data", t);
                    return s = s.set(e, n), n
                }
            };
            e.exports = u
        },
        kuaq: function(e, t, n) {
            "use strict";
            var r = /([A-Z])/g;
            e.exports = function(e) {
                return e.replace(r, "-$1").toLowerCase()
            }
        },
        l2Ky: function(e, t, n) {
            "use strict";
            var r = n("maj8");

            function i() {
                return (i = r || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    })))), r.forEach((function(t) {
                        a(e, t, n[t])
                    }))
                }
                return e
            }

            function a(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var s = n("XjoI"),
                c = n("b//S"),
                u = n("ERkP"),
                l = n("7nmT"),
                f = n("O+2R"),
                d = n("/LAw"),
                p = n("CtAg"),
                h = n("7MNd"),
                g = n("BTrg"),
                v = n("Svze"),
                m = n("tI3i"),
                y = (v.List, function(e, t) {
                    return e.getAnchorKey() === t || e.getFocusKey() === t
                }),
                _ = function(e, t) {
                    var n = t.get(e.getType()) || t.get("unstyled"),
                        r = n.wrapper;
                    return {
                        Element: n.element || t.get("unstyled").element,
                        wrapperTemplate: r
                    }
                },
                b = function(e, t) {
                    var n = t(e);
                    return n ? {
                        CustomComponent: n.component,
                        customProps: n.props,
                        customEditable: n.editable
                    } : {}
                },
                S = function(e, t, n, r, i) {
                    var a = {
                            "data-block": !0,
                            "data-editor": t,
                            "data-offset-key": n,
                            key: e.getKey()
                        },
                        s = r(e);
                    return s && (a.className = s), void 0 !== i.customEditable && (a = o({}, a, {
                        contentEditable: i.customEditable,
                        suppressContentEditableWarning: !0
                    })), a
                },
                w = function(e) {
                    var t, n;

                    function r() {
                        return e.apply(this, arguments) || this
                    }
                    n = e, (t = r).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
                    var a = r.prototype;
                    return a.shouldComponentUpdate = function(e) {
                        var t = this.props,
                            n = t.block,
                            r = t.direction,
                            i = t.tree,
                            o = !n.getChildKeys().isEmpty(),
                            a = n !== e.block || i !== e.tree || r !== e.direction || y(e.selection, e.block.getKey()) && e.forceSelection;
                        return o || a
                    }, a.componentDidMount = function() {
                        var e = this.props.selection,
                            t = e.getEndKey();
                        if (e.getHasFocus() && t === this.props.block.getKey()) {
                            var n, r = l.findDOMNode(this),
                                i = d.getScrollParent(r),
                                o = h(i);
                            if (i === window) {
                                var a = p(r);
                                (n = a.y + a.height - g().height) > 0 && window.scrollTo(o.x, o.y + n + 10)
                            } else {
                                r instanceof HTMLElement || m(!1), (n = r.offsetHeight + r.offsetTop - (i.offsetHeight + o.y)) > 0 && f.setTop(i, f.getTop(i) + n + 10)
                            }
                        }
                    }, a.render = function() {
                        var e = this,
                            t = this.props,
                            n = t.block,
                            a = t.blockRenderMap,
                            l = t.blockRendererFn,
                            f = t.blockStyleFn,
                            d = t.contentState,
                            p = t.decorator,
                            h = t.editorKey,
                            g = t.editorState,
                            v = t.customStyleFn,
                            m = t.customStyleMap,
                            w = t.direction,
                            C = t.forceSelection,
                            x = t.selection,
                            E = t.tree,
                            k = null;
                        n.children.size && (k = n.children.reduce((function(t, n) {
                            var i = c.encode(n, 0, 0),
                                s = d.getBlockForKey(n),
                                p = b(s, l),
                                v = p.CustomComponent || r,
                                m = _(s, a),
                                y = m.Element,
                                w = m.wrapperTemplate,
                                C = S(s, h, i, f, p),
                                x = o({}, e.props, {
                                    tree: g.getBlockTree(n),
                                    blockProps: p.customProps,
                                    offsetKey: i,
                                    block: s
                                });
                            return t.push(u.createElement(y, C, u.createElement(v, x))), !w || function(e, t) {
                                var n = e.getNextSiblingKey();
                                return !!n && t.getBlockForKey(n).getType() === e.getType()
                            }(s, d) ? t : (function(e, t, n) {
                                var r = [],
                                    i = !0,
                                    o = !1,
                                    a = void 0;
                                try {
                                    for (var s, l = n.reverse()[Symbol.iterator](); !(i = (s = l.next()).done); i = !0) {
                                        var f = s.value;
                                        if (f.type !== t) break;
                                        r.push(f)
                                    }
                                } catch (h) {
                                    o = !0, a = h
                                } finally {
                                    try {
                                        i || null == l.return || l.return()
                                    } finally {
                                        if (o) throw a
                                    }
                                }
                                n.splice(n.indexOf(r[0]), r.length + 1);
                                var d = r.reverse(),
                                    p = d[0].key;
                                n.push(u.cloneElement(e, {
                                    key: "".concat(p, "-wrap"),
                                    "data-offset-key": c.encode(p, 0, 0)
                                }, d))
                            }(w, y, t), t)
                        }), []));
                        var T = n.getKey(),
                            O = c.encode(T, 0, 0),
                            D = b(n, l),
                            I = D.CustomComponent,
                            M = null != I ? u.createElement(I, i({}, this.props, {
                                tree: g.getBlockTree(T),
                                blockProps: D.customProps,
                                offsetKey: O,
                                block: n
                            })) : u.createElement(s, {
                                block: n,
                                children: k,
                                contentState: d,
                                customStyleFn: v,
                                customStyleMap: m,
                                decorator: p,
                                direction: w,
                                forceSelection: C,
                                hasSelection: y(x, T),
                                selection: x,
                                tree: E
                            });
                        if (n.getParentKey()) return M;
                        var A = _(n, a).Element,
                            R = S(n, h, O, f, D);
                        return u.createElement(A, R, M)
                    }, r
                }(u.Component);
            e.exports = w
        },
        lTVW: function(e, t, n) {
            "use strict";
            e.exports = {
                getPunctuation: function() {
                    return "[.,+*?$|#{}()'\\^\\-\\[\\]\\\\\\/!@%\"~=<>_:;・、。〈-】〔-〟：-？！-／［-｀｛-･⸮؟٪-٬؛،؍﴾﴿᠁।၊။‐-‧‰-⁞¡-±´-¸º»¿]"
                }
            }
        },
        laB8: function(e, t, n) {
            "use strict";
            var r = n("rim0"),
                i = n("7mA2"),
                o = r.isPlatform("Mac OS X"),
                a = {
                    isCtrlKeyCommand: function(e) {
                        return !!e.ctrlKey && !e.altKey
                    },
                    isOptionKeyCommand: function(e) {
                        return o && e.altKey
                    },
                    usesMacOSHeuristics: function() {
                        return o
                    },
                    hasCommandModifier: function(e) {
                        return o ? !!e.metaKey && !e.altKey : a.isCtrlKeyCommand(e)
                    },
                    isSoftNewlineEvent: i
                };
            e.exports = a
        },
        "mTn+": function(e, t, n) {
            "use strict";
            var r = n("IvBP"),
                i = n("W6iK").strlen;
            e.exports = function(e, t) {
                var n = [];
                return e.findEntityRanges((function(e) {
                    return !!e.getEntity()
                }), (function(o, a) {
                    var s = e.getText(),
                        c = e.getEntityAt(o);
                    n.push({
                        offset: i(s.slice(0, o)),
                        length: i(s.slice(o, a)),
                        key: Number(t[r.stringify(c)])
                    })
                })), n
            }
        },
        n09L: function(e, t, n) {
            "use strict";
            var r = n("tI3i"),
                i = "LTR",
                o = "RTL",
                a = null;

            function s(e) {
                return e === i || e === o
            }

            function c(e) {
                return s(e) || r(!1), e === i ? "ltr" : "rtl"
            }

            function u(e) {
                a = e
            }
            var l = {
                NEUTRAL: "NEUTRAL",
                LTR: i,
                RTL: o,
                isStrong: s,
                getHTMLDir: c,
                getHTMLDirIfDifferent: function(e, t) {
                    return s(e) || r(!1), s(t) || r(!1), e === t ? null : c(e)
                },
                setGlobalDir: u,
                initGlobalDir: function() {
                    u(i)
                },
                getGlobalDir: function() {
                    return a || this.initGlobalDir(), a || r(!1), a
                }
            };
            e.exports = l
        },
        n1lM: function(e, t, n) {
            "use strict";
            var r = n("YM28"),
                i = n("YSZ8"),
                o = n("Svze").OrderedMap;
            e.exports = function(e) {
                return e.first() instanceof r ? function(e) {
                    var t, n = {};
                    return o(e.withMutations((function(e) {
                        e.forEach((function(r, o) {
                            var a = r.getKey(),
                                s = r.getNextSiblingKey(),
                                c = r.getPrevSiblingKey(),
                                u = r.getChildKeys(),
                                l = r.getParentKey(),
                                f = i();
                            (n[a] = f, s) && (e.get(s) ? e.setIn([s, "prevSibling"], f) : e.setIn([a, "nextSibling"], null));
                            c && (e.get(c) ? e.setIn([c, "nextSibling"], f) : e.setIn([a, "prevSibling"], null));
                            if (l && e.get(l)) {
                                var d = e.get(l).getChildKeys();
                                e.setIn([l, "children"], d.set(d.indexOf(r.getKey()), f))
                            } else e.setIn([a, "parent"], null), t && (e.setIn([t.getKey(), "nextSibling"], f), e.setIn([a, "prevSibling"], n[t.getKey()])), t = e.get(a);
                            u.forEach((function(t) {
                                e.get(t) ? e.setIn([t, "parent"], f) : e.setIn([a, "children"], r.getChildKeys().filter((function(e) {
                                    return e !== t
                                })))
                            }))
                        }))
                    })).toArray().map((function(e) {
                        return [n[e.getKey()], e.set("key", n[e.getKey()])]
                    })))
                }(e) : function(e) {
                    return o(e.toArray().map((function(e) {
                        var t = i();
                        return [t, e.set("key", t)]
                    })))
                }(e)
            }
        },
        nGvh: function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.default = void 0, n("PN9k");
            var r = a(n("7DT3")),
                i = a(n("ERkP")),
                o = a(n("OkZJ"));

            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var s = function(e) {
                return void 0 === e && (e = {}), (0, r.default)("svg", Object.assign({}, e, {
                    style: [o.default.root, e.style],
                    viewBox: "0 0 24 24"
                }), i.default.createElement("g", null, i.default.createElement("path", {
                    d: "M12 11.816c1.355 0 2.872-.15 3.84-1.256.814-.93 1.078-2.368.806-4.392-.38-2.825-2.117-4.512-4.646-4.512S7.734 3.343 7.354 6.17c-.272 2.022-.008 3.46.806 4.39.968 1.107 2.485 1.256 3.84 1.256zM8.84 6.368c.162-1.2.787-3.212 3.16-3.212s2.998 2.013 3.16 3.212c.207 1.55.057 2.627-.45 3.205-.455.52-1.266.743-2.71.743s-2.255-.223-2.71-.743c-.507-.578-.657-1.656-.45-3.205zm11.44 12.868c-.877-3.526-4.282-5.99-8.28-5.99s-7.403 2.464-8.28 5.99c-.172.692-.028 1.4.395 1.94.408.52 1.04.82 1.733.82h12.304c.693 0 1.325-.3 1.733-.82.424-.54.567-1.247.394-1.94zm-1.576 1.016c-.126.16-.316.246-.552.246H5.848c-.235 0-.426-.085-.552-.246-.137-.174-.18-.412-.12-.654.71-2.855 3.517-4.85 6.824-4.85s6.114 1.994 6.824 4.85c.06.242.017.48-.12.654z"
                })))
            };
            s.metadata = {
                height: 24,
                width: 24
            };
            var c = s;
            t.default = c
        },
        naKV: function(e, t, n) {
            "use strict";
            e.exports = {
                BOLD: {
                    fontWeight: "bold"
                },
                CODE: {
                    fontFamily: "monospace",
                    wordWrap: "break-word"
                },
                ITALIC: {
                    fontStyle: "italic"
                },
                STRIKETHROUGH: {
                    textDecoration: "line-through"
                },
                UNDERLINE: {
                    textDecoration: "underline"
                }
            }
        },
        njFt: function(e, t, n) {
            "use strict";
            var r = n("7002"),
                i = n("1xkk"),
                o = n("laB8"),
                a = n("ObfX"),
                s = n("gpZN"),
                c = n("rim0"),
                u = n("X+Re"),
                l = n("M6Be"),
                f = n("0Gcc"),
                d = n("t4Yh"),
                p = n("9000"),
                h = n("8SYF"),
                g = n("ybp+"),
                v = n("ZFda"),
                m = n("9XMQ"),
                y = n("njy0"),
                _ = n("BsqC"),
                b = o.isOptionKeyCommand,
                S = c.isBrowser("Chrome");
            e.exports = function(e, t) {
                var n = t.which,
                    o = e._latestEditorState;

                function c(n) {
                    var r = e.props[n];
                    return !!r && (r(t), !0)
                }
                switch (n) {
                    case a.RETURN:
                        if (t.preventDefault(), e.props.handleReturn && u(e.props.handleReturn(t, o))) return;
                        break;
                    case a.ESC:
                        if (t.preventDefault(), c("onEscape")) return;
                        break;
                    case a.TAB:
                        if (c("onTab")) return;
                        break;
                    case a.UP:
                        if (c("onUpArrow")) return;
                        break;
                    case a.RIGHT:
                        if (c("onRightArrow")) return;
                        break;
                    case a.DOWN:
                        if (c("onDownArrow")) return;
                        break;
                    case a.LEFT:
                        if (c("onLeftArrow")) return;
                        break;
                    case a.SPACE:
                        S && b(t) && t.preventDefault()
                }
                var w = e.props.keyBindingFn(t);
                if (null != w && "" !== w)
                    if ("undo" !== w) {
                        if (t.preventDefault(), !e.props.handleKeyCommand || !u(e.props.handleKeyCommand(w, o, t.timeStamp))) {
                            var C = function(e, t) {
                                switch (e) {
                                    case "redo":
                                        return i.redo(t);
                                    case "delete":
                                        return m(t);
                                    case "delete-word":
                                        return d(t);
                                    case "backspace":
                                        return v(t);
                                    case "backspace-word":
                                        return f(t);
                                    case "backspace-to-start-of-line":
                                        return l(t);
                                    case "split-block":
                                        return p(t);
                                    case "transpose-characters":
                                        return y(t);
                                    case "move-selection-to-start-of-block":
                                        return g(t);
                                    case "move-selection-to-end-of-block":
                                        return h(t);
                                    case "secondary-cut":
                                        return s.cut(t);
                                    case "secondary-paste":
                                        return s.paste(t);
                                    default:
                                        return t
                                }
                            }(w, o);
                            C !== o && e.update(C)
                        }
                    } else _(t, o, e.update);
                else if (n === a.SPACE && S && b(t)) {
                    var x = r.replaceText(o.getCurrentContent(), o.getSelection(), " ");
                    e.update(i.push(o, x, "insert-characters"))
                }
            }
        },
        njy0: function(e, t, n) {
            "use strict";
            var r = n("7002"),
                i = n("1xkk"),
                o = n("hDHP");
            e.exports = function(e) {
                var t = e.getSelection();
                if (!t.isCollapsed()) return e;
                var n = t.getAnchorOffset();
                if (0 === n) return e;
                var a, s, c = t.getAnchorKey(),
                    u = e.getCurrentContent(),
                    l = u.getBlockForKey(c).getLength();
                if (l <= 1) return e;
                n === l ? (a = t.set("anchorOffset", n - 1), s = t) : s = (a = t.set("focusOffset", n + 1)).set("anchorOffset", n + 1);
                var f = o(u, a),
                    d = r.removeRange(u, a, "backward"),
                    p = d.getSelectionAfter(),
                    h = p.getAnchorOffset() - 1,
                    g = p.merge({
                        anchorOffset: h,
                        focusOffset: h
                    }),
                    v = r.replaceWithFragment(d, g, f),
                    m = i.push(e, v, "insert-fragment");
                return i.acceptSelection(m, s)
            }
        },
        oNIj: function(e, t, n) {
            "use strict";
            var r = n("1xkk");
            e.exports = function(e, t) {
                e.setMode("composite"), e.update(r.set(e._latestEditorState, {
                    inCompositionMode: !0
                })), e._onCompositionStart(t)
            }
        },
        ooRk: function(e, t, n) {
            "use strict";
            var r = n("Svze").OrderedMap,
                i = {
                    createFromArray: function(e) {
                        return r(e.map((function(e) {
                            return [e.getKey(), e]
                        })))
                    }
                };
            e.exports = i
        },
        or4R: function(e, t, n) {
            "use strict";
            var r = function(e) {
                var t, n;

                function r() {
                    return e.apply(this, arguments) || this
                }
                n = e, (t = r).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
                var i = r.prototype;
                return i.getType = function() {
                    return this.get("type")
                }, i.getMutability = function() {
                    return this.get("mutability")
                }, i.getData = function() {
                    return this.get("data")
                }, r
            }((0, n("Svze").Record)({
                type: "TOKEN",
                mutability: "IMMUTABLE",
                data: Object
            }));
            e.exports = r
        },
        "pW+J": function(e, t, n) {
            "use strict";
            var r = n("Svze"),
                i = n("wu3P"),
                o = n("tI3i"),
                a = r.Repeat;
            e.exports = function(e, t, n, r) {
                t.isCollapsed() || o(!1);
                var s = null;
                if (null != n && (s = n.length), null == s || 0 === s) return e;
                var c = e.getBlockMap(),
                    u = t.getStartKey(),
                    l = t.getStartOffset(),
                    f = c.get(u),
                    d = f.getText(),
                    p = f.merge({
                        text: d.slice(0, l) + n + d.slice(l, f.getLength()),
                        characterList: i(f.getCharacterList(), a(r, s).toList(), l)
                    }),
                    h = l + s;
                return e.merge({
                    blockMap: c.set(u, p),
                    selectionAfter: t.merge({
                        anchorOffset: h,
                        focusOffset: h
                    })
                })
            }
        },
        pcjM: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("pVnL"),
                i = n.n(r),
                o = (n("NlgC"), n("8OQS")),
                a = n.n(o),
                s = (n("PN9k"), n("W8MJ")),
                c = n.n(s),
                u = n("PJYZ"),
                l = n.n(u),
                f = n("VbXa"),
                d = n.n(f),
                p = n("lSNA"),
                h = n.n(p),
                g = n("ERkP"),
                v = n("aWzz"),
                m = (n("VAZu"), n("Ub51")),
                y = n("nt0t"),
                _ = n("04Qv"),
                b = n("zh9S"),
                S = n("pidX"),
                w = n("0KEI"),
                C = n("wrlS"),
                x = n("AspN"),
                E = n("XOJV"),
                k = n("G6rE"),
                T = n("oEGd"),
                O = n("hqKg"),
                D = n("XpKj"),
                I = C.a.isTrue("responsive_web_inline_reply_enabled"),
                M = I ? _ : y,
                A = function(e) {
                    return function(t, n) {
                        var r = function(e, t) {
                            return t.location.state
                        }(0, n);
                        return r ? e(r) : void 0
                    }
                },
                R = Object(O.createSelector)((function(e, t) {
                    return t.activeUser
                }), k.e.selectLoggedInUser, (function(e, t) {
                    return e || t
                })),
                K = function(e, t) {
                    var n = t.location.query;
                    return n && "string" == typeof n.in_reply_to ? n.in_reply_to : void 0
                },
                B = A((function(e) {
                    return e.inReplyToStatusId
                })),
                L = function(e, t) {
                    return t.location.pathname.indexOf("/intent/") > -1
                },
                P = A((function(e) {
                    return e.defaultText
                })),
                F = A((function(e) {
                    return e.quotedStatus
                })),
                N = A((function(e) {
                    return e.isSelfThreadReply
                })),
                z = Object(O.createSelector)((function(e) {
                    return I ? _.selectDraftComposerData(e, "") : y.selectDraftComposerData(e)
                }), (function(e, t) {
                    var n = P(e, t);
                    return Object(S.a)(t.location) || n
                }), (function(e, t) {
                    return t.quotedStatus ? t.quotedStatus : F(e, t)
                }), x.f, L, (function(e, t, n, r, i) {
                    return e.map((function(e, o) {
                        return Object.assign({}, function(e) {
                            e.mediaIds, e.cardUrl;
                            return a()(e, ["mediaIds", "cardUrl"])
                        }(e), {
                            media: r.filter((function(t) {
                                return e.mediaIds.some((function(e) {
                                    return e === t.id
                                }))
                            })),
                            quotedStatus: 0 === o ? n : void 0,
                            text: 0 === o && t && !i ? t : e.text
                        })
                    }))
                })),
                j = Object(O.createStructuredSelector)({
                    activeUser: R,
                    composerData: z,
                    inReplyToStatus: function(e, t) {
                        var n = K(0, t) || B(e, t);
                        return n ? E.a.selectHydrated(e, n) : void 0
                    },
                    inReplyToStatusId: K,
                    isIntentRoute: L,
                    isSelfThreadReply: N,
                    isSending: function(e) {
                        return I ? _.selectDraftIsSending(e, "") : y.selectDraftIsSending(e)
                    },
                    scheduledTweets: D.f,
                    sendingProgress: M.selectSendingProgress,
                    composeSemanticCoreId: A((function(e) {
                        return e.composeSemanticCoreId
                    }))
                }),
                U = {
                    createLocalApiErrorHandler: Object(w.b)(D.d),
                    googleAnalyticsPageView: b.a,
                    scribePageImpression: b.d,
                    fetchScheduledTweets: D.c
                },
                H = Object(T.g)(j, U),
                W = n("jHSc"),
                V = n("MXY2"),
                q = n("3XMw"),
                G = n.n(q),
                X = n("K7Xh"),
                Y = n.n(X),
                J = n("QbaN"),
                Q = n("oQhu"),
                Z = n("7nmT"),
                $ = n.n(Z),
                ee = n("Dtul"),
                te = n("7JQg"),
                ne = {
                    addButton: "addButton",
                    tweetButton: "tweetButton",
                    textarea: "tweetTextarea",
                    textareaPrefix: "tweetTextarea_"
                },
                re = n("3xO4"),
                ie = n.n(re),
                oe = n("/yvb"),
                ae = n("JYMr"),
                se = n("cHvH"),
                ce = n("rHpw");
            n.d(t, "Compose", (function() {
                return he
            }));
            var ue = G.a.jcfbdafa,
                le = G.a.g70570eb,
                fe = {
                    page: "compose"
                },
                de = {
                    page: "compose",
                    section: "reply"
                },
                pe = g.createElement(Y.a, null),
                he = function(e) {
                    function t(t) {
                        var n;
                        return n = e.call(this, t) || this, h()(l()(n), "state", {
                            isValid: !1
                        }), h()(l()(n), "_handleAppBarHeight", Object(Q.a)((function() {
                            var e = $.a.findDOMNode(n._appBarRef);
                            return e && e instanceof window.Element && e.getBoundingClientRect().height || 50
                        }))), h()(l()(n), "_handleBackClick", (function() {
                            n._composeContainerRef && n._composeContainerRef.handleDismissComposer()
                        })), h()(l()(n), "_handleCloseComposer", (function() {
                            n._appBarRef && n._appBarRef.goBack()
                        })), h()(l()(n), "_handleSendTweet", (function() {
                            n._composeContainerRef && n._composeContainerRef.handleTweetOrRetweet()
                        })), h()(l()(n), "_setValidity", (function(e) {
                            e !== n.state.isValid && n.setState({
                                isValid: e
                            })
                        })), h()(l()(n), "_getScribeNamespace", (function() {
                            return n.props.inReplyToStatus || n.props.inReplyToStatusId ? de : fe
                        })), h()(l()(n), "_getScribeData", (function() {
                            var e = n.props,
                                t = e.activeUser;
                            return e.isIntentRoute && t ? {
                                context: "compose_intent_logged_in"
                            } : {}
                        })), h()(l()(n), "_renderAppBarRightControl", (function() {
                            var e = n.state.isValid,
                                t = n.context.isModal,
                                r = n.props,
                                i = r.inReplyToStatus,
                                o = r.isSelfThreadReply,
                                a = r.isSending,
                                s = r.activeUser,
                                c = e || n.isRetweet;
                            return t ? void 0 : g.createElement(oe.a, {
                                disabled: !c || a || !s,
                                onPress: n._handleSendTweet,
                                size: "normalCompact",
                                testID: ne.tweetButton,
                                type: "primary"
                            }, Object(V.a)({
                                inReplyToStatus: !!i,
                                isSelfThreadReply: !!o,
                                isQuoteTweet: !!n.isQuoteTweet,
                                isRetweet: !!n.isRetweet,
                                isScheduled: !!n.isScheduled,
                                isThread: n.isThread
                            }))
                        })), h()(l()(n), "_renderHeaderWithProgressBar", (function(e) {
                            var t = n.context.isModal,
                                r = n.props,
                                i = r.sendingProgress,
                                o = r.isSending;
                            return g.createElement(g.Fragment, null, g.createElement(ae.a, {
                                progress: o ? Math.max(i, .02) : 0,
                                style: [ge.progressBar, t && ge.progressBarModal]
                            }), e)
                        })), h()(l()(n), "_renderUnsentHeading", (function() {
                            var e = n.props.scheduledTweets;
                            if (n._tweetSchedulingEnabled && e.length > 0) return g.createElement(ie.a, {
                                style: ge.unsentHeadingContainer
                            }, g.createElement(oe.a, {
                                icon: pe,
                                onPress: n._handleOpenUnsent,
                                size: "normalCompact",
                                type: "text"
                            }, le))
                        })), h()(l()(n), "_handleOpenUnsent", (function() {
                            var e = n.props.history;
                            Object(b.c)(Object.assign({}, n._getScribeNamespace(), {
                                element: "unsent_tweets",
                                action: "click"
                            })), e.push("/compose/tweet/unsent")
                        })), h()(l()(n), "_setAppBarRef", (function(e) {
                            n._appBarRef = e
                        })), h()(l()(n), "_handleComposeContainerRef", (function(e) {
                            n._composeContainerRef = e
                        })), n._tweetSchedulingEnabled = C.a.isTrue("responsive_web_scheduling_enabled"), n
                    }
                    d()(t, e);
                    var n = t.prototype;
                    return n.componentDidMount = function() {
                        var e = this.props,
                            t = e.createLocalApiErrorHandler,
                            n = e.fetchScheduledTweets,
                            r = e.googleAnalyticsPageView,
                            i = e.scribePageImpression,
                            o = this._getScribeNamespace();
                        i(o), r(o), this._unlockReload = ee.a.acquire(), this._tweetSchedulingEnabled && n().catch(t())
                    }, n.componentWillUnmount = function() {
                        this._unlockReload()
                    }, n.render = function() {
                        var e = this,
                            t = this.props,
                            n = (t.createLocalApiErrorHandler, t.history),
                            r = t.location,
                            o = t.activeUser,
                            s = (t.composerData, t.googleAnalyticsPageView, t.inReplyToStatus, t.inReplyToStatusId, t.isIntentRoute, t.isSelfThreadReply, t.isSending, t.match, t.scheduledTweets, t.scribePageImpression, t.sendingProgress, t.staticContext, a()(t, ["createLocalApiErrorHandler", "history", "location", "activeUser", "composerData", "googleAnalyticsPageView", "inReplyToStatus", "inReplyToStatusId", "isIntentRoute", "isSelfThreadReply", "isSending", "match", "scheduledTweets", "scribePageImpression", "sendingProgress", "staticContext"]));
                        return g.createElement(te.c, {
                            data: this._getScribeData(),
                            namespace: this._getScribeNamespace()
                        }, g.createElement(W.b, {
                            appBarRef: this._setAppBarRef,
                            documentTitle: ue,
                            hideBackButton: !1,
                            history: n,
                            location: r,
                            middleControl: this._renderUnsentHeading(),
                            onBackClick: this._handleBackClick,
                            renderHeader: this._renderHeaderWithProgressBar,
                            rightControl: this._renderAppBarRightControl()
                        }, g.createElement(se.a, null, (function(t) {
                            var a = t.windowWidth;
                            return g.createElement(m.a, i()({}, s, {
                                activeUser: o,
                                history: n,
                                location: r,
                                onCloseComposer: e._handleCloseComposer,
                                onHandleAppBarHeight: e._handleAppBarHeight,
                                onRef: e._handleComposeContainerRef,
                                setValidity: e._setValidity,
                                windowWidth: a
                            }))
                        }))))
                    }, c()(t, [{
                        key: "isThread",
                        get: function() {
                            return this.props.composerData.length > 1
                        }
                    }, {
                        key: "isRetweet",
                        get: function() {
                            var e = this.props.composerData,
                                t = 0 === e[0].media.length;
                            return !this.isThread && e[0].quotedStatus && "" === e[0].text && t
                        }
                    }, {
                        key: "isQuoteTweet",
                        get: function() {
                            var e = this.props.composerData;
                            return !this.isThread && e[0].quotedStatus
                        }
                    }, {
                        key: "isScheduled",
                        get: function() {
                            var e = this.props.composerData;
                            return this._tweetSchedulingEnabled && Object(J.h)(e[0].scheduledFor)
                        }
                    }]), t
                }(g.Component);
            h()(he, "contextTypes", {
                isModal: v.bool
            });
            var ge = ce.a.create((function(e) {
                return {
                    progressBar: {
                        position: "fixed",
                        borderTopLeftRadius: e.borderRadii.medium,
                        borderTopRightRadius: e.borderRadii.medium,
                        zIndex: e.componentZIndices.appBarZIndex + 1
                    },
                    progressBarModal: {
                        position: "absolute"
                    },
                    unsentHeadingContainer: {
                        marginLeft: "auto"
                    }
                }
            }));
            t.default = H(he)
        },
        pidX: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return c
            }));
            n("T7D0"), n("p+GS"), n("dtAy");
            var r = n("3XMw"),
                i = n.n(r),
                o = n("3A2y"),
                a = i.a.e48ced51,
                s = ["title", "screen_name", "text", "url", "hashtags", "via"];
            t.a = function(e) {
                var t = e.state || {},
                    n = e.query || {},
                    r = s.map((function(e) {
                        return t[e] || n[e]
                    })),
                    i = r[0],
                    o = r[1],
                    c = r[2],
                    u = r[3],
                    l = r[4],
                    f = r[5],
                    d = [i, o && "@" + o.toString(), c, u, l && l.toString().split(",").map((function(e) {
                        return "#" + e
                    })).join(" "), f && a({
                        viaScreenName: f
                    })].filter(Boolean).join(" ");
                return d ? d + " " : void 0
            };
            var c = function(e) {
                return Object(o.a)(e, s)
            }
        },
        qUKZ: function(e, t, n) {
            "use strict";
            var r = n("tI3i"),
                i = /\./,
                o = /\|\|/,
                a = /\s+\-\s+/,
                s = /^(<=|<|=|>=|~>|~|>|)?\s*(.+)/,
                c = /^(\d*)(.*)/;

            function u(e, t) {
                var n = e.split(o);
                return n.length > 1 ? n.some((function(e) {
                    return b.contains(e, t)
                })) : function(e, t) {
                    var n = e.split(a);
                    if (n.length > 0 && n.length <= 2 || r(!1), 1 === n.length) return l(n[0], t);
                    var i = n[0],
                        o = n[1];
                    return g(i) && g(o) || r(!1), l(">=" + i, t) && l("<=" + o, t)
                }(e = n[0].trim(), t)
            }

            function l(e, t) {
                if ("" === (e = e.trim())) return !0;
                var n, r = t.split(i),
                    o = p(e),
                    a = o.modifier,
                    s = o.rangeComponents;
                switch (a) {
                    case "<":
                        return f(r, s);
                    case "<=":
                        return -1 === (n = _(r, s)) || 0 === n;
                    case ">=":
                        return d(r, s);
                    case ">":
                        return function(e, t) {
                            return 1 === _(e, t)
                        }(r, s);
                    case "~":
                    case "~>":
                        return function(e, t) {
                            var n = t.slice(),
                                r = t.slice();
                            r.length > 1 && r.pop();
                            var i = r.length - 1,
                                o = parseInt(r[i], 10);
                            h(o) && (r[i] = o + 1 + "");
                            return d(e, n) && f(e, r)
                        }(r, s);
                    default:
                        return function(e, t) {
                            return 0 === _(e, t)
                        }(r, s)
                }
            }

            function f(e, t) {
                return -1 === _(e, t)
            }

            function d(e, t) {
                var n = _(e, t);
                return 1 === n || 0 === n
            }

            function p(e) {
                var t = e.split(i),
                    n = t[0].match(s);
                return n || r(!1), {
                    modifier: n[1],
                    rangeComponents: [n[2]].concat(t.slice(1))
                }
            }

            function h(e) {
                return !isNaN(e) && isFinite(e)
            }

            function g(e) {
                return !p(e).modifier
            }

            function v(e, t) {
                for (var n = e.length; n < t; n++) e[n] = "0"
            }

            function m(e, t) {
                var n = e.match(c)[1],
                    r = t.match(c)[1],
                    i = parseInt(n, 10),
                    o = parseInt(r, 10);
                return h(i) && h(o) && i !== o ? y(i, o) : y(e, t)
            }

            function y(e, t) {
                return typeof e != typeof t && r(!1), e > t ? 1 : e < t ? -1 : 0
            }

            function _(e, t) {
                for (var n = function(e, t) {
                        v(e = e.slice(), (t = t.slice()).length);
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n].match(/^[x*]$/i);
                            if (r && (t[n] = e[n] = "0", "*" === r[0] && n === t.length - 1))
                                for (var i = n; i < e.length; i++) e[i] = "0"
                        }
                        return v(t, e.length), [e, t]
                    }(e, t), r = n[0], i = n[1], o = 0; o < i.length; o++) {
                    var a = m(r[o], i[o]);
                    if (a) return a
                }
                return 0
            }
            var b = {
                contains: function(e, t) {
                    return u(e.trim(), t.trim())
                }
            };
            e.exports = b
        },
        "r5/r": function(e, t, n) {
            "use strict";
            (function(t) {
                var r = n("7002"),
                    i = n("1xkk"),
                    o = n("rim0"),
                    a = n("e59y"),
                    s = n("X+Re"),
                    c = n("ADYu"),
                    u = n("hF1F"),
                    l = n("z0MJ"),
                    f = "'",
                    d = "/",
                    p = o.isBrowser("Firefox");

                function h(e, t, n, o, a) {
                    var s = r.replaceText(e.getCurrentContent(), e.getSelection(), t, n, o);
                    return i.push(e, s, "insert-characters", a)
                }
                e.exports = function(e, n) {
                    void 0 !== e._pendingStateFromBeforeInput && (e.update(e._pendingStateFromBeforeInput), e._pendingStateFromBeforeInput = void 0);
                    var r = e._latestEditorState,
                        o = n.data;
                    if (o)
                        if (e.props.handleBeforeInput && s(e.props.handleBeforeInput(o, r, n.timeStamp))) n.preventDefault();
                        else {
                            var g = r.getSelection(),
                                v = g.getStartOffset(),
                                m = g.getAnchorKey();
                            if (!g.isCollapsed()) return n.preventDefault(), void e.update(h(r, o, r.getCurrentInlineStyle(), a(r.getCurrentContent(), r.getSelection()), !0));
                            var y, _ = h(r, o, r.getCurrentInlineStyle(), a(r.getCurrentContent(), r.getSelection()), !1),
                                b = !1;
                            if (b || (b = c(e._latestCommittedEditorState)), !b) {
                                var S = t.getSelection();
                                if (S.anchorNode && S.anchorNode.nodeType === Node.TEXT_NODE) {
                                    var w = S.anchorNode.parentNode;
                                    b = "SPAN" === w.nodeName && w.firstChild.nodeType === Node.TEXT_NODE && -1 !== w.firstChild.nodeValue.indexOf("\t")
                                }
                            }
                            if (!b) {
                                var C = r.getBlockTree(m),
                                    x = _.getBlockTree(m);
                                b = C.size !== x.size || C.zip(x).some((function(e) {
                                    var t = e[0],
                                        n = e[1],
                                        r = t.get("start"),
                                        i = r + (r >= v ? o.length : 0),
                                        a = t.get("end"),
                                        s = a + (a >= v ? o.length : 0);
                                    return t.get("decoratorKey") !== n.get("decoratorKey") || t.get("leaves").size !== n.get("leaves").size || i !== n.get("start") || s !== n.get("end")
                                }))
                            }
                            if (b || (y = o, b = p && (y == f || y == d)), b || (b = u(_.getDirectionMap()).get(m) !== u(r.getDirectionMap()).get(m)), b) return n.preventDefault(), _ = i.set(_, {
                                forceSelection: !0
                            }), void e.update(_);
                            _ = i.set(_, {
                                nativelyRenderedContent: _.getCurrentContent()
                            }), e._pendingStateFromBeforeInput = _, l((function() {
                                void 0 !== e._pendingStateFromBeforeInput && (e.update(e._pendingStateFromBeforeInput), e._pendingStateFromBeforeInput = void 0)
                            }))
                        }
                }
            }).call(this, n("yLpj"))
        },
        rim0: function(e, t, n) {
            "use strict";
            var r = n("NGtv"),
                i = n("qUKZ"),
                o = n("zgZY"),
                a = n("vqxm");

            function s(e, t, n, r) {
                if (e === n) return !0;
                if (!n.startsWith(e)) return !1;
                var o = n.slice(e.length);
                return !!t && (o = r ? r(o) : o, i.contains(o, t))
            }

            function c(e) {
                return "Windows" === r.platformName ? e.replace(/^\s*NT/, "") : e
            }
            var u = {
                isBrowser: function(e) {
                    return s(r.browserName, r.browserFullVersion, e)
                },
                isBrowserArchitecture: function(e) {
                    return s(r.browserArchitecture, null, e)
                },
                isDevice: function(e) {
                    return s(r.deviceName, null, e)
                },
                isEngine: function(e) {
                    return s(r.engineName, r.engineVersion, e)
                },
                isPlatform: function(e) {
                    return s(r.platformName, r.platformFullVersion, e, c)
                },
                isPlatformArchitecture: function(e) {
                    return s(r.platformArchitecture, null, e)
                }
            };
            e.exports = o(u, a)
        },
        rziq: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return r
            })), n.d(t, "a", (function() {
                return i
            }));
            var r = "send-tweet",
                i = "dismiss-composer"
        },
        sWKX: function(e, t, n) {
            "use strict";
            e.exports = {
                getRemovalRange: function(e, t, n, r, i) {
                    var o = n.split(" ");
                    o = o.map((function(e, t) {
                        if ("forward" === i) {
                            if (t > 0) return " " + e
                        } else if (t < o.length - 1) return e + " ";
                        return e
                    }));
                    for (var a, s = r, c = null, u = null, l = 0; l < o.length; l++) {
                        if (e < (a = s + o[l].length) && s < t) null !== c ? u = a : (c = s, u = a);
                        else if (null !== c) break;
                        s = a
                    }
                    var f = r + n.length,
                        d = c === r,
                        p = u === f;
                    return (!d && p || d && !p) && ("forward" === i ? u !== f && u++ : c !== r && c--), {
                        start: c,
                        end: u
                    }
                }
            }
        },
        t4Yh: function(e, t, n) {
            "use strict";
            var r = n("iogJ"),
                i = n("1xkk"),
                o = n("MzOC"),
                a = n("4aXP");
            e.exports = function(e) {
                var t = a(e, (function(e) {
                    var t = e.getSelection(),
                        n = t.getStartOffset(),
                        i = t.getStartKey(),
                        a = e.getCurrentContent().getBlockForKey(i).getText().slice(n),
                        s = r.getForward(a);
                    return o(e, s.length || 1)
                }), "forward");
                return t === e.getCurrentContent() ? e : i.push(e, t, "remove-range")
            }
        },
        tDjQ: function(e, t, n) {
            "use strict";

            function r(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var i = n("Fd87"),
                o = n("n09L"),
                a = n("tI3i"),
                s = function() {
                    function e(e) {
                        r(this, "_defaultDir", void 0), r(this, "_lastDir", void 0), e ? o.isStrong(e) || a(!1) : e = o.getGlobalDir(), this._defaultDir = e, this.reset()
                    }
                    var t = e.prototype;
                    return t.reset = function() {
                        this._lastDir = this._defaultDir
                    }, t.getDirection = function(e) {
                        return this._lastDir = i.getDirection(e, this._lastDir), this._lastDir
                    }, e
                }();
            e.exports = s
        },
        tO3r: function(e, t, n) {
            "use strict";
            var r;

            function i(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    })))), r.forEach((function(t) {
                        o(e, t, n[t])
                    }))
                }
                return e
            }

            function o(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var a = n("b+nQ"),
                s = n("IbSy"),
                c = n("YM28"),
                u = n("VUbk"),
                l = n("krsZ"),
                f = n("ZlNV"),
                d = n("2Wwg"),
                p = n("YSZ8"),
                h = n("GSkh"),
                g = n("ZUd0"),
                v = n("Svze"),
                m = v.List,
                y = v.Map,
                _ = v.OrderedSet,
                b = g("draft_tree_data_support"),
                S = new RegExp("\r", "g"),
                w = new RegExp("\n", "g"),
                C = new RegExp("^\n", "g"),
                x = new RegExp("&nbsp;", "g"),
                E = new RegExp("&#13;?", "g"),
                k = new RegExp("&#8203;?", "g"),
                T = ["bold", "bolder", "500", "600", "700", "800", "900"],
                O = ["light", "lighter", "100", "200", "300", "400"],
                D = ["className", "href", "rel", "target", "title"],
                I = ["alt", "className", "height", "src", "width"],
                M = (o(r = {}, d("public/DraftStyleDefault/depth0"), 0), o(r, d("public/DraftStyleDefault/depth1"), 1), o(r, d("public/DraftStyleDefault/depth2"), 2), o(r, d("public/DraftStyleDefault/depth3"), 3), o(r, d("public/DraftStyleDefault/depth4"), 4), r),
                A = y({
                    b: "BOLD",
                    code: "CODE",
                    del: "STRIKETHROUGH",
                    em: "ITALIC",
                    i: "ITALIC",
                    s: "STRIKETHROUGH",
                    strike: "STRIKETHROUGH",
                    strong: "BOLD",
                    u: "UNDERLINE",
                    mark: "HIGHLIGHT"
                }),
                R = function(e) {
                    var t = {};
                    return e.mapKeys((function(e, n) {
                        var r = [n.element];
                        void 0 !== n.aliasedElements && r.push.apply(r, n.aliasedElements), r.forEach((function(n) {
                            void 0 === t[n] ? t[n] = e : "string" == typeof t[n] ? t[n] = [t[n], e] : t[n].push(e)
                        }))
                    })), y(t)
                },
                K = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    return Object.keys(M).some((function(n) {
                        e.classList.contains(n) && (t = M[n])
                    })), t
                },
                B = function(e) {
                    return !(!(e instanceof HTMLAnchorElement && e.href) || "http:" !== e.protocol && "https:" !== e.protocol && "mailto:" !== e.protocol)
                },
                L = function(e) {
                    return !!(e instanceof HTMLImageElement && e.attributes.getNamedItem("src") && e.attributes.getNamedItem("src").value)
                },
                P = function(e) {
                    var t = _();
                    if (!(e instanceof HTMLElement)) return t;
                    var n = e,
                        r = n.style.fontWeight,
                        i = n.style.fontStyle,
                        o = n.style.textDecoration;
                    return t.withMutations((function(e) {
                        T.indexOf(r) >= 0 ? e.add("BOLD") : O.indexOf(r) >= 0 && e.remove("BOLD"), "italic" === i ? e.add("ITALIC") : "normal" === i && e.remove("ITALIC"), "underline" === o && e.add("UNDERLINE"), "line-through" === o && e.add("STRIKETHROUGH"), "none" === o && (e.remove("UNDERLINE"), e.remove("STRIKETHROUGH"))
                    }))
                },
                F = function(e) {
                    return "ul" === e || "ol" === e
                },
                N = function() {
                    function e(e, t) {
                        o(this, "characterList", m()), o(this, "currentBlockType", "unstyled"), o(this, "currentDepth", 0), o(this, "currentEntity", null), o(this, "currentStyle", _()), o(this, "currentText", ""), o(this, "wrapper", null), o(this, "blockConfigs", []), o(this, "contentBlocks", []), o(this, "entityMap", l), o(this, "blockTypeMap", void 0), o(this, "disambiguate", void 0), this.clear(), this.blockTypeMap = e, this.disambiguate = t
                    }
                    var t = e.prototype;
                    return t.clear = function() {
                        this.characterList = m(), this.blockConfigs = [], this.currentBlockType = "unstyled", this.currentDepth = 0, this.currentEntity = null, this.currentStyle = _(), this.currentText = "", this.entityMap = l, this.wrapper = null, this.contentBlocks = []
                    }, t.addDOMNode = function(e) {
                        var t;
                        return this.contentBlocks = [], this.currentDepth = 0, (t = this.blockConfigs).push.apply(t, this._toBlockConfigs([e])), this._trimCurrentText(), "" !== this.currentText && this.blockConfigs.push(this._makeBlockConfig()), this
                    }, t.getContentBlocks = function() {
                        return 0 === this.contentBlocks.length && (b ? this._toContentBlocks(this.blockConfigs) : this._toFlatContentBlocks(this.blockConfigs)), {
                            contentBlocks: this.contentBlocks,
                            entityMap: this.entityMap
                        }
                    }, t.addStyle = function(e) {
                        this.currentStyle = this.currentStyle.union(e)
                    }, t.removeStyle = function(e) {
                        this.currentStyle = this.currentStyle.subtract(e)
                    }, t._makeBlockConfig = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.key || p(),
                            n = i({
                                key: t,
                                type: this.currentBlockType,
                                text: this.currentText,
                                characterList: this.characterList,
                                depth: this.currentDepth,
                                parent: null,
                                children: m(),
                                prevSibling: null,
                                nextSibling: null,
                                childConfigs: []
                            }, e);
                        return this.characterList = m(), this.currentBlockType = "unstyled", this.currentText = "", n
                    }, t._toBlockConfigs = function(e) {
                        for (var t = [], n = 0; n < e.length; n++) {
                            var r = e[n],
                                i = r.nodeName.toLowerCase();
                            if ("body" === i || F(i)) {
                                this._trimCurrentText(), "" !== this.currentText && t.push(this._makeBlockConfig());
                                var o = this.currentDepth,
                                    a = this.wrapper;
                                F(i) && (this.wrapper = i, F(a) && this.currentDepth++), t.push.apply(t, this._toBlockConfigs(Array.from(r.childNodes))), this.currentDepth = o, this.wrapper = a
                            } else {
                                var s = this.blockTypeMap.get(i);
                                if (void 0 === s)
                                    if ("#text" !== i)
                                        if ("br" !== i)
                                            if (L(r)) this._addImgNode(r);
                                            else if (B(r)) this._addAnchorNode(r, t);
                                else {
                                    var c = A.has(i) ? _.of(A.get(i)) : _(),
                                        u = P(r);
                                    this.addStyle(c), this.addStyle(u), t.push.apply(t, this._toBlockConfigs(Array.from(r.childNodes))), this.removeStyle(u), this.removeStyle(c)
                                } else this._addBreakNode(r);
                                else this._addTextNode(r);
                                else {
                                    this._trimCurrentText(), "" !== this.currentText && t.push(this._makeBlockConfig());
                                    var l = this.currentDepth,
                                        f = this.wrapper;
                                    this.wrapper = "pre" === i ? "pre" : this.wrapper, "string" != typeof s && (s = this.disambiguate(i, this.wrapper) || s[0] || "unstyled"), !b && r instanceof HTMLElement && ("unordered-list-item" === s || "ordered-list-item" === s) && (this.currentDepth = K(r, this.currentDepth));
                                    var d = p(),
                                        h = this._toBlockConfigs(Array.from(r.childNodes));
                                    this._trimCurrentText(), t.push(this._makeBlockConfig({
                                        key: d,
                                        childConfigs: h,
                                        type: s
                                    })), this.currentDepth = l, this.wrapper = f
                                }
                            }
                        }
                        return t
                    }, t._appendText = function(e) {
                        var t;
                        this.currentText += e;
                        var n = a.create({
                            style: this.currentStyle,
                            entity: this.currentEntity
                        });
                        this.characterList = (t = this.characterList).push.apply(t, Array(e.length).fill(n))
                    }, t._trimCurrentText = function() {
                        var e = this.currentText.length,
                            t = e - this.currentText.trimLeft().length,
                            n = this.currentText.trimRight().length,
                            r = this.characterList.findEntry((function(e) {
                                return null !== e.getEntity()
                            }));
                        (t = void 0 !== r ? Math.min(t, r[0]) : t) > (n = void 0 !== (r = this.characterList.reverse().findEntry((function(e) {
                            return null !== e.getEntity()
                        }))) ? Math.max(n, e - r[0]) : n) ? (this.currentText = "", this.characterList = m()) : (this.currentText = this.currentText.slice(t, n), this.characterList = this.characterList.slice(t, n))
                    }, t._addTextNode = function(e) {
                        var t = e.textContent;
                        "" === t.trim() && "pre" !== this.wrapper && (t = " "), "pre" !== this.wrapper && (t = (t = t.replace(C, "")).replace(w, " ")), this._appendText(t)
                    }, t._addBreakNode = function(e) {
                        e instanceof HTMLBRElement && this._appendText("\n")
                    }, t._addImgNode = function(e) {
                        if (e instanceof HTMLImageElement) {
                            var t = e,
                                n = {};
                            I.forEach((function(e) {
                                var r = t.getAttribute(e);
                                r && (n[e] = r)
                            })), this.currentEntity = this.entityMap.__create("IMAGE", "IMMUTABLE", n), g("draftjs_fix_paste_for_img") ? "presentation" !== e.getAttribute("role") && this._appendText("📷") : this._appendText("📷"), this.currentEntity = null
                        }
                    }, t._addAnchorNode = function(e, t) {
                        if (e instanceof HTMLAnchorElement) {
                            var n = e,
                                r = {};
                            D.forEach((function(e) {
                                var t = n.getAttribute(e);
                                t && (r[e] = t)
                            })), r.url = new f(n.href).toString(), this.currentEntity = this.entityMap.__create("LINK", "MUTABLE", r || {}), t.push.apply(t, this._toBlockConfigs(Array.from(e.childNodes))), this.currentEntity = null
                        }
                    }, t._toContentBlocks = function(e) {
                        for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, n = e.length - 1, r = 0; r <= n; r++) {
                            var o = e[r];
                            o.parent = t, o.prevSibling = r > 0 ? e[r - 1].key : null, o.nextSibling = r < n ? e[r + 1].key : null, o.children = m(o.childConfigs.map((function(e) {
                                return e.key
                            }))), this.contentBlocks.push(new c(i({}, o))), this._toContentBlocks(o.childConfigs, o.key)
                        }
                    }, t._hoistContainersInBlockConfigs = function(e) {
                        var t = this;
                        return m(e).flatMap((function(e) {
                            return "unstyled" !== e.type || "" !== e.text ? [e] : t._hoistContainersInBlockConfigs(e.childConfigs)
                        }))
                    }, t._toFlatContentBlocks = function(e) {
                        var t = this;
                        this._hoistContainersInBlockConfigs(e).forEach((function(e) {
                            var n = t._extractTextFromBlockConfigs(e.childConfigs),
                                r = n.text,
                                o = n.characterList;
                            t.contentBlocks.push(new s(i({}, e, {
                                text: e.text + r,
                                characterList: e.characterList.concat(o)
                            })))
                        }))
                    }, t._extractTextFromBlockConfigs = function(e) {
                        for (var t = e.length - 1, n = "", r = m(), i = 0; i <= t; i++) {
                            var o = e[i];
                            n += o.text, r = r.concat(o.characterList), "" !== n && "unstyled" !== o.blockType && (n += "\n", r = r.push(r.last()));
                            var a = this._extractTextFromBlockConfigs(o.childConfigs);
                            n += a.text, r = r.concat(a.characterList)
                        }
                        return {
                            text: n,
                            characterList: r
                        }
                    }, e
                }();
            e.exports = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u,
                    r = t(e = e.trim().replace(S, "").replace(x, " ").replace(E, "").replace(k, ""));
                if (!r) return null;
                var i = R(n),
                    o = function(e, t) {
                        return "li" === e ? "ol" === t ? "ordered-list-item" : "unordered-list-item" : null
                    };
                return new N(i, o).addDOMNode(r).getContentBlocks()
            }
        },
        tRbA: function(e, t, n) {
            "use strict";
            var r = n("ERkP"),
                i = n("2Wwg"),
                o = function(e) {
                    var t, n;

                    function o() {
                        return e.apply(this, arguments) || this
                    }
                    n = e, (t = o).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
                    var a = o.prototype;
                    return a.shouldComponentUpdate = function(e) {
                        return this.props.text !== e.text || this.props.editorState.getSelection().getHasFocus() !== e.editorState.getSelection().getHasFocus()
                    }, a.render = function() {
                        var e = this.props.editorState.getSelection().getHasFocus(),
                            t = i({
                                "public/DraftEditorPlaceholder/root": !0,
                                "public/DraftEditorPlaceholder/hasFocus": e
                            });
                        return r.createElement("div", {
                            className: t
                        }, r.createElement("div", {
                            className: i("public/DraftEditorPlaceholder/inner"),
                            id: this.props.accessibilityID,
                            style: {
                                whiteSpace: "pre-wrap"
                            }
                        }, this.props.text))
                    }, o
                }(r.Component);
            e.exports = o
        },
        tXRi: function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.default = void 0, n("PN9k");
            var r = a(n("7DT3")),
                i = a(n("ERkP")),
                o = a(n("OkZJ"));

            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var s = function(e) {
                return void 0 === e && (e = {}), (0, r.default)("svg", Object.assign({}, e, {
                    style: [o.default.root, e.style],
                    viewBox: "0 0 24 24"
                }), i.default.createElement("g", null, i.default.createElement("path", {
                    d: "M19.192 9.3c-.205 0-.403-.085-.546-.236l-2.66-2.824c-.283-.302-.27-.776.032-1.06.303-.286.776-.27 1.06.03L19 7.25 22.157.877c.184-.37.63-.52 1.005-.34.372.185.523.635.34 1.006L19.864 8.88c-.108.22-.318.374-.562.41-.036.006-.073.01-.11.01zM8.417 11.816c1.355 0 2.872-.15 3.84-1.256.813-.93 1.077-2.367.806-4.392-.38-2.826-2.116-4.513-4.645-4.513-2.53 0-4.267 1.687-4.646 4.513-.273 2.025-.01 3.462.805 4.393.968 1.108 2.485 1.257 3.84 1.257zm-3.16-5.448c.16-1.2.786-3.212 3.16-3.212 2.373 0 2.998 2.013 3.16 3.212.207 1.55.056 2.627-.45 3.205-.455.52-1.266.743-2.71.743s-2.256-.223-2.71-.743c-.507-.578-.658-1.656-.45-3.205zm11.44 12.867c-.88-3.525-4.283-5.988-8.28-5.988-3.998 0-7.403 2.463-8.28 5.988-.172.693-.03 1.4.395 1.94.408.522 1.04.822 1.733.822H14.57c.69 0 1.323-.3 1.73-.82.425-.54.568-1.247.396-1.942zm-1.577 1.018c-.126.16-.316.245-.55.245H2.264c-.235 0-.426-.085-.552-.246-.137-.174-.18-.412-.12-.654.71-2.855 3.517-4.85 6.824-4.85s6.113 1.994 6.824 4.85c.06.24.017.48-.12.655z"
                })))
            };
            s.metadata = {
                height: 24,
                width: 24
            };
            var c = s;
            t.default = c
        },
        uJSo: function(e, t, n) {
            "use strict";
            var r = n("YM28"),
                i = n("HdU4"),
                o = n("Svze"),
                a = n("tI3i"),
                s = o.OrderedMap,
                c = o.List,
                u = function(e, t, n) {
                    if (e) {
                        var r = t.get(e);
                        r && t.set(e, n(r))
                    }
                },
                l = function(e, t, n, r, i) {
                    if (!i) return e;
                    var o = "after" === r,
                        a = t.getKey(),
                        s = n.getKey(),
                        l = t.getParentKey(),
                        f = t.getNextSiblingKey(),
                        d = t.getPrevSiblingKey(),
                        p = n.getParentKey(),
                        h = o ? n.getNextSiblingKey() : s,
                        g = o ? s : n.getPrevSiblingKey();
                    return e.withMutations((function(e) {
                        u(l, e, (function(e) {
                            var t = e.getChildKeys();
                            return e.merge({
                                children: t.delete(t.indexOf(a))
                            })
                        })), u(d, e, (function(e) {
                            return e.merge({
                                nextSibling: f
                            })
                        })), u(f, e, (function(e) {
                            return e.merge({
                                prevSibling: d
                            })
                        })), u(h, e, (function(e) {
                            return e.merge({
                                prevSibling: a
                            })
                        })), u(g, e, (function(e) {
                            return e.merge({
                                nextSibling: a
                            })
                        })), u(p, e, (function(e) {
                            var t = e.getChildKeys(),
                                n = t.indexOf(s),
                                r = o ? n + 1 : 0 !== n ? n - 1 : 0,
                                i = t.toArray();
                            return i.splice(r, 0, a), e.merge({
                                children: c(i)
                            })
                        })), u(a, e, (function(e) {
                            return e.merge({
                                nextSibling: h,
                                prevSibling: g,
                                parent: p
                            })
                        }))
                    }))
                };
            e.exports = function(e, t, n, o) {
                "replace" === o && a(!1);
                var c = n.getKey(),
                    u = t.getKey();
                u === c && a(!1);
                var f = e.getBlockMap(),
                    d = t instanceof r,
                    p = [t],
                    h = f.delete(u);
                d && (p = [], h = f.withMutations((function(e) {
                    var n = t.getNextSiblingKey(),
                        r = i(t, e);
                    e.toSeq().skipUntil((function(e) {
                        return e.getKey() === u
                    })).takeWhile((function(e) {
                        var t = e.getKey(),
                            i = t === u,
                            o = n && t !== n,
                            a = !n && e.getParentKey() && (!r || t !== r);
                        return !!(i || o || a)
                    })).forEach((function(t) {
                        p.push(t), e.delete(t.getKey())
                    }))
                })));
                var g = h.toSeq().takeUntil((function(e) {
                        return e === n
                    })),
                    v = h.toSeq().skipUntil((function(e) {
                        return e === n
                    })).skip(1),
                    m = p.map((function(e) {
                        return [e.getKey(), e]
                    })),
                    y = s();
                if ("before" === o) {
                    var _ = e.getBlockBefore(c);
                    _ && _.getKey() === t.getKey() && a(!1), y = g.concat([].concat(m, [
                        [c, n]
                    ]), v).toOrderedMap()
                } else if ("after" === o) {
                    var b = e.getBlockAfter(c);
                    b && b.getKey() === u && a(!1), y = g.concat([
                        [c, n]
                    ].concat(m), v).toOrderedMap()
                }
                return e.merge({
                    blockMap: l(y, t, n, o, d),
                    selectionBefore: e.getSelectionAfter(),
                    selectionAfter: e.getSelectionAfter().merge({
                        anchorKey: u,
                        focusKey: u
                    })
                })
            }
        },
        udiT: function(e, t, n) {
            "use strict";
            e.exports = function(e, t, n, r) {
                var i = t.getStartKey(),
                    o = t.getEndKey(),
                    a = e.getBlockMap(),
                    s = a.toSeq().skipUntil((function(e, t) {
                        return t === i
                    })).takeUntil((function(e, t) {
                        return t === o
                    })).concat([
                        [o, a.get(o)]
                    ]).map((function(e) {
                        var t = e.getDepth() + n;
                        return t = Math.max(0, Math.min(t, r)), e.set("depth", t)
                    }));
                return a = a.merge(s), e.merge({
                    blockMap: a,
                    selectionBefore: t,
                    selectionAfter: t
                })
            }
        },
        vHsC: function(e, t, n) {
            "use strict";
            var r = n("maj8");

            function i() {
                return (i = r || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var o = n("l2Ky"),
                a = n("b//S"),
                s = n("ERkP"),
                c = n("hF1F"),
                u = function(e) {
                    var t, n;

                    function r() {
                        return e.apply(this, arguments) || this
                    }
                    n = e, (t = r).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
                    var u = r.prototype;
                    return u.shouldComponentUpdate = function(e) {
                        var t = this.props.editorState,
                            n = e.editorState;
                        if (t.getDirectionMap() !== n.getDirectionMap()) return !0;
                        if (t.getSelection().getHasFocus() !== n.getSelection().getHasFocus()) return !0;
                        var r = n.getNativelyRenderedContent(),
                            i = t.isInCompositionMode(),
                            o = n.isInCompositionMode();
                        if (t === n || null !== r && n.getCurrentContent() === r || i && o) return !1;
                        var a = t.getCurrentContent(),
                            s = n.getCurrentContent(),
                            c = t.getDecorator(),
                            u = n.getDecorator();
                        return i !== o || a !== s || c !== u || n.mustForceSelection()
                    }, u.render = function() {
                        for (var e = this.props, t = e.blockRenderMap, n = e.blockRendererFn, r = e.blockStyleFn, u = e.customStyleMap, l = e.customStyleFn, f = e.editorState, d = e.editorKey, p = e.textDirectionality, h = f.getCurrentContent(), g = f.getSelection(), v = f.mustForceSelection(), m = f.getDecorator(), y = c(f.getDirectionMap()), _ = [], b = h.getBlocksAsArray()[0]; b;) {
                            var S = b.getKey(),
                                w = {
                                    blockRenderMap: t,
                                    blockRendererFn: n,
                                    blockStyleFn: r,
                                    contentState: h,
                                    customStyleFn: l,
                                    customStyleMap: u,
                                    decorator: m,
                                    editorKey: d,
                                    editorState: f,
                                    forceSelection: v,
                                    selection: g,
                                    block: b,
                                    direction: p || y.get(S),
                                    tree: f.getBlockTree(S)
                                },
                                C = (t.get(b.getType()) || t.get("unstyled")).wrapper;
                            _.push({
                                block: s.createElement(o, i({
                                    key: S
                                }, w)),
                                wrapperTemplate: C,
                                key: S,
                                offsetKey: a.encode(S, 0, 0)
                            });
                            var x = b.getNextSiblingKey();
                            b = x ? h.getBlockForKey(x) : null
                        }
                        for (var E = [], k = 0; k < _.length;) {
                            var T = _[k];
                            if (T.wrapperTemplate) {
                                var O = [];
                                do {
                                    O.push(_[k].block), k++
                                } while (k < _.length && _[k].wrapperTemplate === T.wrapperTemplate);
                                var D = s.cloneElement(T.wrapperTemplate, {
                                    key: T.key + "-wrap",
                                    "data-offset-key": T.offsetKey
                                }, O);
                                E.push(D)
                            } else E.push(T.block), k++
                        }
                        return s.createElement("div", {
                            "data-contents": "true"
                        }, E)
                    }, r
                }(s.Component);
            e.exports = u
        },
        vqxm: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                var t = {};
                return function(n) {
                    return t.hasOwnProperty(n) || (t[n] = e.call(this, n)), t[n]
                }
            }
        },
        wH9P: function(e, t, n) {
            "use strict";
            var r = n("Svze").List,
                i = function() {
                    function e(e) {
                        var t, n, r;
                        r = void 0, (n = "_decorators") in (t = this) ? Object.defineProperty(t, n, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[n] = r, this._decorators = e.slice()
                    }
                    var t = e.prototype;
                    return t.getDecorations = function(e, t) {
                        var n = Array(e.getText().length).fill(null);
                        return this._decorators.forEach((function(r, i) {
                            var o = 0;
                            (0, r.strategy)(e, (function(e, t) {
                                (function(e, t, n) {
                                    for (var r = t; r < n; r++)
                                        if (null != e[r]) return !1;
                                    return !0
                                })(n, e, t) && (! function(e, t, n, r) {
                                    for (var i = t; i < n; i++) e[i] = r
                                }(n, e, t, i + "." + o), o++)
                            }), t)
                        })), r(n)
                    }, t.getComponentForKey = function(e) {
                        var t = parseInt(e.split(".")[0], 10);
                        return this._decorators[t].component
                    }, t.getPropsForKey = function(e) {
                        var t = parseInt(e.split(".")[0], 10);
                        return this._decorators[t].props
                    }, e
                }();
            e.exports = i
        },
        wu3P: function(e, t, n) {
            "use strict";
            e.exports = function(e, t, n) {
                var r = e;
                if (n === r.count()) t.forEach((function(e) {
                    r = r.push(e)
                }));
                else if (0 === n) t.reverse().forEach((function(e) {
                    r = r.unshift(e)
                }));
                else {
                    var i = r.slice(0, n),
                        o = r.slice(n);
                    r = i.concat(t, o).toList()
                }
                return r
            }
        },
        "ybp+": function(e, t, n) {
            "use strict";
            var r = n("1xkk");
            e.exports = function(e) {
                var t = e.getSelection(),
                    n = t.getStartKey();
                return r.set(e, {
                    selection: t.merge({
                        anchorKey: n,
                        anchorOffset: 0,
                        focusKey: n,
                        focusOffset: 0,
                        isBackward: !1
                    }),
                    forceSelection: !0
                })
            }
        },
        ynU0: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("pcjM"),
                i = n("SADN");
            t.default = Object(i.a)(r.default)
        },
        yzfH: function(e, t, n) {
            "use strict";
            var r = n("ooRk"),
                i = n("YM28"),
                o = n("Svze"),
                a = n("wu3P"),
                s = n("tI3i"),
                c = n("n1lM"),
                u = o.List,
                l = function(e, t, n, r, i, o) {
                    var s = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "REPLACE_WITH_NEW_DATA",
                        c = n.get(i),
                        u = c.getText(),
                        l = c.getCharacterList(),
                        f = i,
                        d = o + r.getText().length,
                        p = null;
                    switch (s) {
                        case "MERGE_OLD_DATA_TO_NEW_DATA":
                            p = r.getData().merge(c.getData());
                            break;
                        case "REPLACE_WITH_NEW_DATA":
                            p = r.getData()
                    }
                    var h = c.merge({
                        text: u.slice(0, o) + r.getText() + u.slice(o),
                        characterList: a(l, r.getCharacterList(), o),
                        data: p
                    });
                    return e.merge({
                        blockMap: n.set(i, h),
                        selectionBefore: t,
                        selectionAfter: t.merge({
                            anchorKey: f,
                            anchorOffset: d,
                            focusKey: f,
                            focusOffset: d,
                            isBackward: !1
                        })
                    })
                },
                f = function(e, t, n, o, a, s) {
                    var c = n.first() instanceof i,
                        l = [],
                        f = o.size,
                        d = n.get(a),
                        p = o.first(),
                        h = o.last(),
                        g = h.getLength(),
                        v = h.getKey(),
                        m = c && (!d.getChildKeys().isEmpty() || !p.getChildKeys().isEmpty());
                    n.forEach((function(e, t) {
                        t === a ? (m ? l.push(e) : l.push(function(e, t, n) {
                            var r = e.getText(),
                                i = e.getCharacterList(),
                                o = r.slice(0, t),
                                a = i.slice(0, t),
                                s = n.first();
                            return e.merge({
                                text: o + s.getText(),
                                characterList: a.concat(s.getCharacterList()),
                                type: o ? e.getType() : s.getType(),
                                data: s.getData()
                            })
                        }(e, s, o)), o.slice(m ? 0 : 1, f - 1).forEach((function(e) {
                            return l.push(e)
                        })), l.push(function(e, t, n) {
                            var r = e.getText(),
                                i = e.getCharacterList(),
                                o = r.length,
                                a = r.slice(t, o),
                                s = i.slice(t, o),
                                c = n.last();
                            return c.merge({
                                text: c.getText() + a,
                                characterList: c.getCharacterList().concat(s),
                                data: c.getData()
                            })
                        }(e, s, o))) : l.push(e)
                    }));
                    var y = r.createFromArray(l);
                    return c && (y = function(e, t, n, r) {
                        return e.withMutations((function(t) {
                            var i = n.getKey(),
                                o = r.getKey(),
                                a = n.getNextSiblingKey(),
                                s = n.getParentKey(),
                                c = function(e, t) {
                                    var n = e.getKey(),
                                        r = e,
                                        i = [];
                                    for (t.get(n) && i.push(n); r && r.getNextSiblingKey();) {
                                        var o = r.getNextSiblingKey();
                                        if (!o) break;
                                        i.push(o), r = t.get(o)
                                    }
                                    return i
                                }(r, e),
                                l = c[c.length - 1];
                            if (t.get(o) ? (t.setIn([i, "nextSibling"], o), t.setIn([o, "prevSibling"], i)) : (t.setIn([i, "nextSibling"], r.getNextSiblingKey()), t.setIn([r.getNextSiblingKey(), "prevSibling"], i)), t.setIn([l, "nextSibling"], a), a && t.setIn([a, "prevSibling"], l), c.forEach((function(e) {
                                    return t.setIn([e, "parent"], s)
                                })), s) {
                                var f = e.get(s).getChildKeys(),
                                    d = f.indexOf(i) + 1,
                                    p = f.toArray();
                                p.splice.apply(p, [d, 0].concat(c)), t.setIn([s, "children"], u(p))
                            }
                        }))
                    }(y, 0, d, p)), e.merge({
                        blockMap: y,
                        selectionBefore: t,
                        selectionAfter: t.merge({
                            anchorKey: v,
                            anchorOffset: g,
                            focusKey: v,
                            focusOffset: g,
                            isBackward: !1
                        })
                    })
                };
            e.exports = function(e, t, n) {
                var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "REPLACE_WITH_NEW_DATA";
                t.isCollapsed() || s(!1);
                var o = e.getBlockMap(),
                    a = c(n),
                    u = t.getStartKey(),
                    d = t.getStartOffset(),
                    p = o.get(u);
                return p instanceof i && (p.getChildKeys().isEmpty() || s(!1)), 1 === a.size ? l(e, t, o, a.first(), u, d, r) : f(e, t, o, a, u, d)
            }
        },
        z0XV: function(e, t, n) {
            "use strict";

            function r(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var i = n("rim0"),
                o = n("M7w5"),
                a = n("Svze"),
                s = n("tI3i"),
                c = n("hF1F"),
                u = a.Map,
                l = {
                    subtree: !0,
                    characterData: !0,
                    childList: !0,
                    characterDataOldValue: !1,
                    attributes: !1
                },
                f = i.isBrowser("IE <= 11"),
                d = function() {
                    function e(e) {
                        var t = this;
                        r(this, "observer", void 0), r(this, "container", void 0), r(this, "mutations", void 0), r(this, "onCharData", void 0), this.container = e, this.mutations = u(), window.MutationObserver && !f ? this.observer = new window.MutationObserver((function(e) {
                            return t.registerMutations(e)
                        })) : this.onCharData = function(e) {
                            e.target instanceof Node || s(!1), t.registerMutation({
                                type: "characterData",
                                target: e.target
                            })
                        }
                    }
                    var t = e.prototype;
                    return t.start = function() {
                        this.observer ? this.observer.observe(this.container, l) : this.container.addEventListener("DOMCharacterDataModified", this.onCharData)
                    }, t.stopAndFlushMutations = function() {
                        var e = this.observer;
                        e ? (this.registerMutations(e.takeRecords()), e.disconnect()) : this.container.removeEventListener("DOMCharacterDataModified", this.onCharData);
                        var t = this.mutations;
                        return this.mutations = u(), t
                    }, t.registerMutations = function(e) {
                        for (var t = 0; t < e.length; t++) this.registerMutation(e[t])
                    }, t.getMutationTextContent = function(e) {
                        var t = e.type,
                            n = e.target,
                            r = e.removedNodes;
                        if ("characterData" === t) {
                            if ("" !== n.textContent) return n.textContent
                        } else if ("childList" === t && r && r.length) return "";
                        return null
                    }, t.registerMutation = function(e) {
                        var t = this.getMutationTextContent(e);
                        if (null != t) {
                            var n = c(o(e.target));
                            this.mutations = this.mutations.set(n, t)
                        }
                    }, e
                }();
            e.exports = d
        },
        zRF8: function(e, t, n) {},
        zYrz: function(e, t, n) {
            "use strict";
            var r = n("W6iK"),
                i = n("AL/+"),
                o = function(e, t) {
                    return e === t
                },
                a = function(e) {
                    return !!e
                },
                s = [];
            e.exports = function(e) {
                var t = e.getCharacterList().map((function(e) {
                        return e.getStyle()
                    })).toList(),
                    n = t.flatten().toSet().map((function(n) {
                        return function(e, t, n) {
                            var s = [],
                                c = t.map((function(e) {
                                    return e.has(n)
                                })).toList();
                            return i(c, o, a, (function(t, i) {
                                var o = e.getText();
                                s.push({
                                    offset: r.strlen(o.slice(0, t)),
                                    length: r.strlen(o.slice(t, i)),
                                    style: n
                                })
                            })), s
                        }(e, t, n)
                    }));
                return Array.prototype.concat.apply(s, n.toJS())
            }
        },
        zgZY: function(e, t, n) {
            "use strict";
            var r = Object.prototype.hasOwnProperty;
            e.exports = function(e, t, n) {
                if (!e) return null;
                var i = {};
                for (var o in e) r.call(e, o) && (i[o] = t.call(n, e[o], o, e));
                return i
            }
        },
        zmS9: function(e, t, n) {
            "use strict";
            var r = n("ERkP"),
                i = n("3XMw"),
                o = n.n(i),
                a = n("fI5n"),
                s = n.n(a),
                c = n("t62R"),
                u = n("rHpw"),
                l = n("QbaN"),
                f = o.a.g6021d39,
                d = u.a.create((function(e) {
                    return {
                        icon: {
                            fontSize: e.fontSizes.normal,
                            paddingRight: e.spaces.xSmall,
                            textAlignVertical: "middle"
                        }
                    }
                }));
            t.a = function(e) {
                var t = e.scheduledFor,
                    n = e.onPress,
                    i = Object(l.c)(t),
                    o = !!i && (Object(l.h)(t) && !Object(l.g)(i) && !Object(l.f)(i)),
                    a = Boolean(n);
                return i && o ? r.createElement(c.b, {
                    color: "deepGray",
                    onPress: n,
                    size: "small",
                    withInteractiveStyling: a
                }, r.createElement(s.a, {
                    style: d.icon
                }), f({
                    date: Object(l.b)(i),
                    time: Object(l.i)(i)
                })) : null
            }
        },
        zpdM: function(e, t, n) {
            "use strict";
            var r = n("ApIa"),
                i = n("ooRk"),
                o = n("b+nQ"),
                a = n("wH9P"),
                s = n("IbSy"),
                c = n("VeLA"),
                u = n("VUbk"),
                l = n("naKV"),
                f = n("0Uhd"),
                d = n("MOn9"),
                p = n("krsZ"),
                h = n("7002"),
                g = n("or4R"),
                v = n("1xkk"),
                m = n("laB8"),
                y = n("zRF8"),
                _ = n("9Kr7"),
                b = n("IDEf"),
                S = n("GyyK"),
                w = n("KOTo"),
                C = n("YSZ8"),
                x = n("gZn9"),
                E = n("dVQN"),
                k = {
                    Editor: f,
                    EditorBlock: d,
                    EditorState: v,
                    CompositeDecorator: a,
                    Entity: p,
                    EntityInstance: g,
                    BlockMapBuilder: i,
                    CharacterMetadata: o,
                    ContentBlock: s,
                    ContentState: c,
                    RawDraftContentState: y,
                    SelectionState: b,
                    AtomicBlockUtils: r,
                    KeyBindingUtil: m,
                    Modifier: h,
                    RichUtils: _,
                    DefaultDraftBlockRenderMap: u,
                    DefaultDraftInlineStyle: l,
                    convertFromHTML: n("tO3r"),
                    convertFromRaw: w,
                    convertToRaw: S,
                    genKey: C,
                    getDefaultKeyBinding: x,
                    getVisibleSelectionRect: E
                };
            e.exports = k
        }
    }
]);
//# sourceMappingURL=https://ton.smf1.twitter.com/responsive-web-internal/sourcemaps/web/bundle.RichTextCompose.cfd71e74.js.map