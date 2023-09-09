
// ライブラリ用のオブジェクトの作成
if (window.game === undefined){window.game = {}}
if (window.game.canvas === undefined){window.game.canvas = {}}

(function(){
    let _t = game.canvas; // ショートカットの作成
    
	// 変数の初期化
	_t.scl = 1;

    // キャンバスの生成
    _t.genCnvs = function(w, h, scl){
        if (scl === undefined){scl = 1}
        let $cnvs = $("<canvas>")
            .attr("width", w * scl).attr("height", h * scl)
            .width(w).height(h);
        let cnvs = $cnvs[0];
        let cntx = cnvs.getContext("2d");
        return {$cnvs: $cnvs, cnvs: cnvs, cntx: cntx, w: w * scl, h: h * scl};

    };

    // 指定ID内に、指定比率でキャンバスを作成して格納
    _t.initCnvs = function(id, w, h, scl){
        _t.scl = scl;
        let c = this.gencnvs(w, h, scl);
        $("#" + id).empty().append(c.$cnvs);
        return c;
    };
})