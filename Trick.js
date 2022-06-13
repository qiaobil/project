const Trick = {
    summation: function (t) {
        let n = 0;
        if (!Array.isArray(t))
            return !1;
        for (let e = 0; e < t.length; e++)
            n += Number(t[e]);
        return n
    },
    downloadfile(e, t, n) {
        var r = null;
        window.ActiveXObject ? r = new ActiveXObject("Microsoft.XMLHTTP") : window.XMLHttpRequest && (r = new XMLHttpRequest),
            null != r && (r.open("get", e, !0),
                r.responseType = "blob",
                r.send(),
                r.onreadystatechange = function () {
                    4 == r.readyState && 200 == r.status && download(r.response, t, n)
                }
            )
    },
    time: () => (new Date).getTime(),
    hide: (e, t) => {
        e && t && (document.querySelector(e).style.display = t)
    },
    delete: function (e, t) {
        const n = this.get(e),
            r = [];
        if (!n)
            return !1;
        for (const o of n)
            t != o && r.push(o);
        this.set(e, r)
    },
    set: (e, t) => (Array.isArray(t),
        localStorage.setItem(e, JSON.stringify(t))),
    get: e => {
        try {
            return !!JSON.parse(localStorage.getItem(e)) && JSON.parse(localStorage.getItem(e))
        } catch (e) {
            return !1
        }
    },
    message: function (e, t, n) {
        var r = document.querySelector(".messageheaders"),
            o = document.querySelector(".--msg"),
            i = document.getElementById("message");
        document.getElementById("gf").play(),
            "1%" != i.style.right ? i.style.right = "1%" : (i.style.right = "-" + 2 * i.clientWidth + "px",
                setTimeout(() => {
                    i.style.right = "1%"
                }, 200)),
            i.onclick = function () {
                this.style.right = "-" + 2 * this.clientWidth + "px"
            },
            r.getElementsByTagName("img")[0].setAttribute("src", e || "./img/ico/Error.png"),
            r.getElementsByTagName("span")[0].innerText = t || "温馨提示",
            o.innerText = n || "The event cannot be triggered!"
    },
    casually: function (e) {
        var t = 1 != isNaN(e) ? e : 32;
        let n = [];
        var r = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        for (let e = 0; e < t; e++)
            n.push(r.split("")[Math.floor(Math.random() * r.length)]);
        return n.join("").toLocaleLowerCase()
    },
    show: function (e, t) {
        return e && t && (document.querySelector(e).style.display = t), !1
    },
    timeShift: function (e) {
        let t = new Date(e);
        return t.getFullYear() + "-" + (t.getMonth() + 1 < 10 ? "0" + (t.getMonth() + 1) : t.getMonth() + 1) + "-" + t.getDate() + " " + t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds()
    },
    UniqueArr: function (e, t) {
        let n = [],
            r = [];
        if (Array.isArray(e)) {
            if ("object" != typeof e[0])
                return [...new Set(e)];
            if (t) {
                for (const o in e) -1 == n.indexOf(e[o][t]) && (n.push(e[o][t]), r.push(e[o]));
                return r
            }
            return !1
        }
    },
    bubbleSort: function (t) {
        var n, r = !1;
        for (let e = 0; e < t.length; e++) {
            for (let e = 0; e < t.length; e++)
                t[e] > t[e + 1] && (n = t[e],
                    t[e] = t[e + 1],
                    t[e + 1] = n,
                    r = !0);
            if (!r)
                break
        }
        return t
    },
    quickSort: function (e) {
        if (e.length < 2)
            return e;
        var t = arguments.callee,
            l = Math.floor(e.length / 2),
            s = 0,
            c = e.length - 1,
            u = e[l];
        return function a(e, t, n) {
            var r, o;
            t < n && (e[n] <= u ? (r = e[n],
                e[o = n] = u,
                e[l] = r,
                n = l,
                l = o,
                function e(t, n, r) {
                    var o, i;
                    n < r && (t[n] > u ? (o = t[n],
                        t[i = n] = u,
                        t[l] = o,
                        n = l,
                        l = i,
                        a(t, s, c)) : e(t, ++s, r))
                }(e, s, c)) : a(e, t, --c))
        }(e, s, c), [].concat(t(e.slice(0, l)), e[l], t(e.slice(l + 1, e.length)))
    },
    resultArray: function (e) {
        return e.sort((e, t) => t.localeCompare(e, "zh"))
    },
    chart: function (e) {
        var t = document.createElement("canvas"),
            n = (t.width = 512,
                t.height = 512,
                t.id = "teqigv",
                document.body.appendChild(t),
                document.getElementById("teqigv")),
            r = n.getContext("2d");
        return r.fillStyle = "#ffffff",
            r.fillRect(0, 0, 512, 512),
            r.font = "900 18em 微软雅黑",
            r.textAlign = "center",
            r.textBaseline = "middle",
            r.fillStyle = "#2d2d2d",
            r.fillText(e, n.offsetWidth / 2, n.offsetHeight / 2 + 30),
            document.body.removeChild(n),
            t.toDataURL("image/png", 1)
    },
    Base64ToBlob: function (e) {
        for (var t = "", n = "", r = (1 < (e = e.split(",")).length && (n = e[1],
            t = e[0].substring(e[0].indexOf(":") + 1, e[0].indexOf(";"))),
            atob(n)), e = new ArrayBuffer(r.length), o = new Uint8Array(e), i = 0; i < r.length; i++)
            o[i] = r.charCodeAt(i);
        return new Blob([e], {
            type: t
        })
    },
    test: function (i) {
        return new Promise(function (e) {
            for (var t = (0 <= i.split(",")[0].indexOf("base64") ? atob : unescape)(i.split(",")[1]), n = i.split(",")[0].split(":")[1].split(";")[0], r = new Uint8Array(t.length), o = 0; o < t.length; o++)
                r[o] = t.charCodeAt(o);
            return e(window.URL.createObjectURL(new Blob([r], {
                type: n
            })))
        })
    },
    reduce: function (blob, width, height, gpcdul, xxkkok, prfscg) {
        return new Promise(function (resolve) {
            var restrict = ["jpg", "png", "jpeg", "tiff", "webp", 'ico'];
            if (restrict.indexOf(blob.type.split('/')[1].toLowerCase()) == -1) {
                alert('请上传后缀为["jpg", "png", "jpeg", "tiff", "webp"]的图片!!!');
                return false;
            }

            const reader = new FileReader();
            const Images = new Image();
            reader.readAsDataURL(blob);
            reader.onload = function () {
                var wlymau = !!prfscg ? this.result : false;
                Images.src = this.result;
                Images.onload = e => {
                    // 创建canvas元素
                    const canvas = document.createElement('canvas');
                    //  转成上下文
                    const context = canvas.getContext('2d');
                    // 设置宽高
                    canvas.width = width;
                    canvas.height = height;
                    // 设置图片
                    context.drawImage(Images, 0, 0, Images.width, Images.height, 0, 0, canvas.width, canvas.height);
                    // console.log(context.getImageData(0, 0, width, height).data);
                    // 返回结果
                    var sqsk = {
                        src: canvas.toDataURL(`image/${xxkkok || 'jpeg'}`, gpcdul || 0.1),
                        width: Images.width,
                        height: Images.height,
                        origin: wlymau
                    }
                    return resolve(sqsk);
                };
            };
        });
    },
    0: function (images_url, todlr) {
        return new Promise((resolve) => {
            var Wdith = window.screen.availWidth;
            var Height = screen.availHeight - (window.outerHeight - window.innerHeight) - 1;
            var thtszj = new Image();
            // 获取 canvas
            var cgxxo = document.getElementById(todlr);
            // 对canvas设置
            cgxxo.width = Wdith;
            cgxxo.height = Height;
            // 转成2D
            var vbssi = cgxxo.getContext('2d');
            thtszj.src = images_url;
            thtszj.onload = function (czcffq) {
                // 获取图片原始的宽高
                var bz = {
                    origin_width: czcffq.path[0].naturalWidth,
                    origin_height: czcffq.path[0].naturalHeight
                };
                // 设置背景;
                vbssi.drawImage(this, 0, 0, Wdith, Height);
                // 返回图片原始的宽高
                return resolve(bz);
            };
        });
    },
    backdrop: function (url) {
        return new Promise((e => {
            document.body.style.backgroundImage = `url('${url}')`;
        }));
    }, check: function (name, url) {
        /**
         * 校验表单
         * @param {String} name
         * @param {String} url
         * @return {boolean}
         */

        if (!name && !url) return false;

        if (name.length > 0 && url.match(/(\w+):\/\/([^/:]+)(:\d*)?/ig)) {
            return true;
        } else {
            return false;
        }
    }
};