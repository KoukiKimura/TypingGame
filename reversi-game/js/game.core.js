"use strict";

// ライブラリ用のオブジェクトの作成
if (window.game === undefined){window.game = {}}
if (window.game.core === undefined){window.game.core = {}}

(function(){
    let _t = game.core; // ショートカットの作成

    // 変数の初期化
    _t.ua = {};
    _t.ua.pc = ! window.navigator.userAgent.match(
        /iphone|ipod|ipad|android|windows Phone/i);
    
    // ウィンドウサイズ横幅/高さを取得
    _t.getWinW = function(){return window.innerWidth};
    _t.getWinH = function(){return window.innerHeight};

    // ウィンドウ サイズをもとに、指定🅂横縦比が入る縦横サイズを取得
    _t.getFitSz = function(w, h){
        const winW = _t.getWinH();
        const winH = _t.getWinH();

        let resW, resH;
        if (w / h >= winW / winH) {
            resW = winW;
            resH = (h * winW / w) | 0;
        } else {
            resW = (w * winH / h) | 0;
            resH = winH;
        }
        return {w: resW, h: resH};
    };

    // 範囲内か判定
    _t.inRng = function(cX, cY, x, y, w, h){
        if (cX < x || x + w <= cX){return false}
        if (cY < y || y + h <= cY){return false}
        return true;
    };

    // RGB比率
    _t.rtRGB = function(r0, g0, b0, r1, g1, b1, rt){
        if (rt < 0){rt = 0}
        if (rt > 1){rt = 1}
        let r2 = (r0 * (1 - rt) + r1 * rt) | 0;
        let g2 = (g0 * (1 - rt) + g1 * rt) | 0;
        let b2 = (b0 * (1 - rt) + b1 * rt) | 0;
        let s = "rgb(" + r2 + ", " + g2 + ", " + b2 + ")";
        return s;
    }

})