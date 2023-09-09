"use strict";

// ライブラリ用のオブジェクトの作成
if (window.game === undefined){window.game = {}}
if (window.game.core === undefined){window.game.core = {}}

(function(){
    let _t = game.core; // ショートカットの作成
    
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

})