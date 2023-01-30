/*
多合一签到
0 7 * * * jd_bean_sign.js
*/
const $ = new Env('多合一签到');
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
const notify = $.isNode() ? require('./sendNotify') : '';
var __encode = 'jsjiami.com',
    _a = {},
    _0xb483 = ["_decode", "http://www.sojson.com/javascriptobfuscator.html"];
(function(_0xd642x1) {
    _0xd642x1[_0xb483[0]] = _0xb483[1]
})(_a);
var __Oxf223f = ["", "https://api.m.jd.com/client.action", "medalNum", "isNode", "push", "forEach", "keys", "JD_DEBUG", "env", "false", "log", "GITHUB", "indexOf", "stringify", "exit", "filter", "CookieJD", "getdata", "CookieJD2", "cookie", "map", "CookiesJD", "[]", "toObj", "done", "finally", "❌ ", "name", ", 失败! 原因: ", "!", "catch", "【提示】请先获取京东账号一cookie直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/", "msg", "length", "UA", "UserName", "match", "index", "isLogin", "beans", "nickName", "UUID", "xxxxxxxxxxxxxxxx-xxxxxxxxxxxxxxxx", "ev", "-", "split", "fv", "******开始【京东账号", "】", "*********", "random", "wait", "parse", "code", "title", "dailyAward", "data", "get", "https://api.m.jd.com/client.action?functionId=signBeanAct&body=%7B%22fp%22%3A%22-1%22%2C%22shshshfp%22%3A%22-1%22%2C%22shshshfpa%22%3A%22-1%22%2C%22referUrl%22%3A%22-1%22%2C%22userAgent%22%3A%22-1%22%2C%22jda%22%3A%22-1%22%2C%22rnVersion%22%3A%223.9%22%7D&appid=ld&client=android&clientVersion=11.4.0&networkType=wifi&osVersion=10&uuid=", "&eu=", "&fv=", "&openudid=", "&jsonp=", "*/*", "com.jingdong.app.mall", "gzip, deflate, br", "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7", "https://h5.m.jd.com/", "object", "京东服务器访问数据为空，请检查自身设备网络情况", "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", "x", "toUpperCase", "replace", ".", "_", "jdapp;iPhone;", ";", ";network/wifi;Mozilla/5.0 (iPhone; CPU iPhone OS ", " like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko);supportJDSHWK/1", "jdltapp;android;3.8.10;10;network/wifi;model/MI 8;addressid/1969998059;aid/8566972dfd9a795d;oaid/4a8b773c3e307386;osVer/29;appBuild/1436;psn/PhYbUtCsCJo r 1b8hwxjnY8rEv5S8XC|383;psq/14;adk/;ads/;pap/JA2020_3112531|3.8.10|ANDROID 10;osv/10;pv/374.14;jdv/0|iosapp|t_335139774|liteshare|CopyURL|1609306590175|1609306596;ref/com.jd.jdlite.lib.jdlitemessage.view.activity.MessageCenterMainActivity;partner/jsxdlyqj09;apprpd/MessageCenter_MessageMerge;eufv/1;Mozilla/5.0 (Linux; Android 10; MI 8 Build/QKQ1.190828.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045140 Mobile Safari/537.36", "floor", "10.1.4", "10.1.2", "10.1.0", "10.0.10", "10.0.8", "10.0.6", "10.0.5", "10.0.4", "10.0.2", "10.0.1", "10.0.0", "10.1.6", "10.2.0", "10.2.4", "10.2.6", "10.3.0", "10.3.2", "10.3.3", "10.3.4", "10.3.5", "10.4.0", "10.4.2", "10.4.3", "10.4.4", "10.4.5", "10.4.6", "10.5.0", "10.5.2", "10.5.4", "11.0.0", "11.0.2", "11.0.4", "11.1.0", "11.1.2", "11.1.4", "11.2.0", "11.2.4", "11.2.5", "11.2.6", "9.0", "9.1", "9.2", "9.3", "10.0", "10.1", "10.2", "10.3", "11.0", "11.1", "11.2", "11.3", "11.4", "12.0", "12.1", "12.2", "12.3", "12.4", "12.5", "13.0", "13.1", "13.2", "13.3", "13.4", "13.5", "13.6", "13.7", "14.0", "14.1", "14.2", "14.3", "14.4", "14.5", "14.6", "14.7", "14.8", "15.0", "15.1", "15.2", "15.3", "15.4", "15.5", "15.6", "undefined", "删除", "版本号，js会定", "期弹窗，", "还请支持我们的工作", "jsjia", "mi.com"];
let cookiesArr = [],
    cookie = __Oxf223f[0x0],
    message;
const JD_API_HOST = __Oxf223f[0x1];
$[__Oxf223f[0x2]] = 0;
if ($[__Oxf223f[0x3]]()) {
    Object[__Oxf223f[0x6]](jdCookieNode)[__Oxf223f[0x5]]((_0x1ab0x5) => {
        cookiesArr[__Oxf223f[0x4]](jdCookieNode[_0x1ab0x5])
    });
    if (process[__Oxf223f[0x8]][__Oxf223f[0x7]] && process[__Oxf223f[0x8]][__Oxf223f[0x7]] === __Oxf223f[0x9]) {
        console[__Oxf223f[0xa]] = () => {}
    };
    if (JSON[__Oxf223f[0xd]](process[__Oxf223f[0x8]])[__Oxf223f[0xc]](__Oxf223f[0xb]) > -1) {
        process[__Oxf223f[0xe]](0)
    }
} else {
    cookiesArr = [$[__Oxf223f[0x11]](__Oxf223f[0x10]), $[__Oxf223f[0x11]](__Oxf223f[0x12]), ...$[__Oxf223f[0x17]]($[__Oxf223f[0x11]](__Oxf223f[0x15]) || __Oxf223f[0x16])[__Oxf223f[0x14]]((_0x1ab0x5) => {
        return _0x1ab0x5[__Oxf223f[0x13]]
    })][__Oxf223f[0xf]]((_0x1ab0x5) => {
        return !!_0x1ab0x5
    })
};
!(async() => {
    if (!cookiesArr[0x0]) {
        $[__Oxf223f[0x21]]($[__Oxf223f[0x1b]], __Oxf223f[0x1f], __Oxf223f[0x20], {
            "open-url": __Oxf223f[0x20]
        });
        return
    };
    for (let _0x1ab0x7 = 0; _0x1ab0x7 < cookiesArr[__Oxf223f[0x22]]; _0x1ab0x7++) {
        if (cookiesArr[_0x1ab0x7]) {
            $[__Oxf223f[0x23]] = getJDUA();
            cookie = cookiesArr[_0x1ab0x7];
            $[__Oxf223f[0x24]] = decodeURIComponent(cookie[__Oxf223f[0x25]](/pt_pin=(.+?);/) && cookie[__Oxf223f[0x25]](/pt_pin=(.+?);/)[0x1]);
            $[__Oxf223f[0x26]] = _0x1ab0x7 + 1;
            $[__Oxf223f[0x27]] = true;
            $[__Oxf223f[0x28]] = 0;
            $[__Oxf223f[0x29]] = __Oxf223f[0x0];
            message = __Oxf223f[0x0];
            $[__Oxf223f[0x2a]] = getUUID(__Oxf223f[0x2b]);
            $[__Oxf223f[0x2c]] = $[__Oxf223f[0x2a]][__Oxf223f[0x2e]](__Oxf223f[0x2d])[0x0];
            $[__Oxf223f[0x2f]] = $[__Oxf223f[0x2a]][__Oxf223f[0x2e]](__Oxf223f[0x2d])[0x1];
            console[__Oxf223f[0xa]](`${__Oxf223f[0x30]}${$[__Oxf223f[0x26]]}${__Oxf223f[0x31]}${$[__Oxf223f[0x29]]|| $[__Oxf223f[0x24]]}${__Oxf223f[0x32]}`);
            await $[__Oxf223f[0x34]](parseInt(Math[__Oxf223f[0x33]]() * 500 + 500, 10));
            await main();
            await $[__Oxf223f[0x34]](parseInt(Math[__Oxf223f[0x33]]() * 5500 + 5500, 10))
        }
    }
})()[__Oxf223f[0x1e]]((_0x1ab0x6) => {
    $[__Oxf223f[0xa]](__Oxf223f[0x0], `${__Oxf223f[0x1a]}${$[__Oxf223f[0x1b]]}${__Oxf223f[0x1c]}${_0x1ab0x6}${__Oxf223f[0x1d]}`, __Oxf223f[0x0])
})[__Oxf223f[0x19]](() => {
    $[__Oxf223f[0x18]]()
});
async function main() {
    try {
        await $[__Oxf223f[0x34]](parseInt(Math[__Oxf223f[0x33]]() * 1000 + 1000, 10));
        await ljd();
        await $[__Oxf223f[0x34]](parseInt(Math[__Oxf223f[0x33]]() * 1000 + 1000, 10))
    } catch (e) {
        console[__Oxf223f[0xa]](e)
    }
}
async function ljd() {
    let _0x1ab0xa = await getLjdUrl();
    $[__Oxf223f[0x3a]](_0x1ab0xa, function(_0x1ab0xb, _0x1ab0xc, _0x1ab0xd) {
        if (_0x1ab0xb) {} else {
            if (safeGet(_0x1ab0xd)) {
                _0x1ab0xc = JSON[__Oxf223f[0x35]](_0x1ab0xd);
                if (_0x1ab0xc[__Oxf223f[0x36]] == 0) {
                    try {
                        console[__Oxf223f[0xa]](_0x1ab0xc[__Oxf223f[0x39]][__Oxf223f[0x38]][__Oxf223f[0x37]])
                    } catch (e) {
                        console[__Oxf223f[0xa]](_0x1ab0xd)
                    }
                } else {
                    console[__Oxf223f[0xa]](_0x1ab0xd)
                }
            }
        }
    })
}

function getLjdUrl() {
    console.log(`${__Oxf223f[0x3b]}${$[__Oxf223f[0x2a]]}${__Oxf223f[0x3c]}${$[__Oxf223f[0x2c]]}${__Oxf223f[0x3d]}${$[__Oxf223f[0x2f]]}${__Oxf223f[0x3e]}${$[__Oxf223f[0x2a]]}${__Oxf223f[0x3f]}`)
    return {
        url: `${__Oxf223f[0x3b]}${$[__Oxf223f[0x2a]]}${__Oxf223f[0x3c]}${$[__Oxf223f[0x2c]]}${__Oxf223f[0x3d]}${$[__Oxf223f[0x2f]]}${__Oxf223f[0x3e]}${$[__Oxf223f[0x2a]]}${__Oxf223f[0x3f]}`,
        headers: {
            "Accept": __Oxf223f[0x40],
            "x-requested-with": __Oxf223f[0x41],
            "Accept-Encoding": __Oxf223f[0x42],
            "Accept-Language": __Oxf223f[0x43],
            "Referer": __Oxf223f[0x44],
            "Cookie": cookie,
            "User-Agent": $[__Oxf223f[0x23]]
        }
    }
}

function safeGet(_0x1ab0xd) {
    try {
        if (typeof JSON[__Oxf223f[0x35]](_0x1ab0xd) == __Oxf223f[0x45]) {
            return true
        }
    } catch (e) {
        console[__Oxf223f[0xa]](`${__Oxf223f[0x46]}`);
        return false
    }
}

function getUUID(_0x1ab0x11 = __Oxf223f[0x47], _0x1ab0x12 = 0) {
    return _0x1ab0x11[__Oxf223f[0x4a]](/[xy]/g, function(_0x1ab0x11) {
        var _0x1ab0x13 = 16 * Math[__Oxf223f[0x33]]() | 0,
            _0x1ab0x14 = __Oxf223f[0x48] == _0x1ab0x11 ? _0x1ab0x13 : 3 & _0x1ab0x13 | 8;
        return uuid = _0x1ab0x12 ? _0x1ab0x14.toString(36)[__Oxf223f[0x49]]() : _0x1ab0x14.toString(36), uuid
    })
}

function getJDUA() {
    getVersion = getIphoneVersion();
    getVersion1 = getVersion[__Oxf223f[0x4a]](__Oxf223f[0x4b], __Oxf223f[0x4c]);
    getJDversion = getJDVersion();
    $[__Oxf223f[0x23]] = `${__Oxf223f[0x4d]}${getJDversion}${__Oxf223f[0x4e]}${getVersion}${__Oxf223f[0x4e]}${getUUID(__Oxf223f[0x47])}${__Oxf223f[0x4f]}${getVersion1}${__Oxf223f[0x50]}`;
    return $[__Oxf223f[0x23]]
}

function getJSUA() {
    return __Oxf223f[0x51]
}

function random(_0x1ab0x18, _0x1ab0x19) {
    let _0x1ab0x1a = Math[__Oxf223f[0x52]](Math[__Oxf223f[0x33]]() * (_0x1ab0x19 - _0x1ab0x18)) + _0x1ab0x18;
    return `${__Oxf223f[0x0]}${_0x1ab0x1a}${__Oxf223f[0x0]}`
}

function getJDVersion() {
    let _0x1ab0x1c = [__Oxf223f[0x53], __Oxf223f[0x54], __Oxf223f[0x55], __Oxf223f[0x56], __Oxf223f[0x57], __Oxf223f[0x58], __Oxf223f[0x59], __Oxf223f[0x5a], __Oxf223f[0x5b], __Oxf223f[0x5c], __Oxf223f[0x5d], __Oxf223f[0x5e], __Oxf223f[0x5f], __Oxf223f[0x60], __Oxf223f[0x61], __Oxf223f[0x62], __Oxf223f[0x63], __Oxf223f[0x64], __Oxf223f[0x65], __Oxf223f[0x66], __Oxf223f[0x67], __Oxf223f[0x68], __Oxf223f[0x69], __Oxf223f[0x6a], __Oxf223f[0x6b], __Oxf223f[0x6c], __Oxf223f[0x6d], __Oxf223f[0x6e], __Oxf223f[0x6f], __Oxf223f[0x70], __Oxf223f[0x71], __Oxf223f[0x72], __Oxf223f[0x73], __Oxf223f[0x74], __Oxf223f[0x75], __Oxf223f[0x76], __Oxf223f[0x77], __Oxf223f[0x78], __Oxf223f[0x79]];
    return _0x1ab0x1c[random(0, _0x1ab0x1c[__Oxf223f[0x22]])]
}

function getIphoneVersion() {
    let _0x1ab0x1c = [__Oxf223f[0x7a], __Oxf223f[0x7b], __Oxf223f[0x7c], __Oxf223f[0x7d], __Oxf223f[0x7e], __Oxf223f[0x7f], __Oxf223f[0x80], __Oxf223f[0x81], __Oxf223f[0x82], __Oxf223f[0x83], __Oxf223f[0x84], __Oxf223f[0x85], __Oxf223f[0x86], __Oxf223f[0x87], __Oxf223f[0x88], __Oxf223f[0x89], __Oxf223f[0x8a], __Oxf223f[0x8b], __Oxf223f[0x8c], __Oxf223f[0x8d], __Oxf223f[0x8e], __Oxf223f[0x8f], __Oxf223f[0x90], __Oxf223f[0x91], __Oxf223f[0x92], __Oxf223f[0x93], __Oxf223f[0x94], __Oxf223f[0x95], __Oxf223f[0x96], __Oxf223f[0x97], __Oxf223f[0x98], __Oxf223f[0x99], __Oxf223f[0x9a], __Oxf223f[0x9b], __Oxf223f[0x9c], __Oxf223f[0x9d], __Oxf223f[0x9e], __Oxf223f[0x9f], __Oxf223f[0xa0], __Oxf223f[0xa1], __Oxf223f[0xa2], __Oxf223f[0xa3], __Oxf223f[0xa4]];
    return _0x1ab0x1c[random(0, _0x1ab0x1c[__Oxf223f[0x22]])]
}(function(_0x1ab0x1e, _0x1ab0x1f, _0x1ab0x20, _0x1ab0x21, _0x1ab0x22, _0x1ab0x23) {
    _0x1ab0x23 = __Oxf223f[0xa5];
    _0x1ab0x21 = function(_0x1ab0x24) {
        if (typeof alert !== _0x1ab0x23) {
            alert(_0x1ab0x24)
        };
        if (typeof console !== _0x1ab0x23) {
            console[__Oxf223f[0xa]](_0x1ab0x24)
        }
    };
    _0x1ab0x20 = function(_0x1ab0x25, _0x1ab0x1e) {
        return _0x1ab0x25 + _0x1ab0x1e
    };
    _0x1ab0x22 = _0x1ab0x20(__Oxf223f[0xa6], _0x1ab0x20(_0x1ab0x20(__Oxf223f[0xa7], __Oxf223f[0xa8]), __Oxf223f[0xa9]));
    try {
        _0x1ab0x1e = __encode;
        if (!(typeof _0x1ab0x1e !== _0x1ab0x23 && _0x1ab0x1e === _0x1ab0x20(__Oxf223f[0xaa], __Oxf223f[0xab]))) {
            _0x1ab0x21(_0x1ab0x22)
        }
    } catch (e) {
        _0x1ab0x21(_0x1ab0x22)
    }
})({})
// prettier-ignore
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }