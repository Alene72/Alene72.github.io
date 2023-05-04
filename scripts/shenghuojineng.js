class ShengHuoJiNeng {
    constructor(level, feiShengStatus)
    {
        this.level = level;
        this.feiShengStatus = feiShengStatus;
        this.update();
    }

    getJiaChengShuXing()
    {
        var shuXing = new ShuXing();
        shuXing.huoLi = this.getYangShengLevel() * 4;
        shuXing.tiLi = this.getJianShenLevel() * 4;
        shuXing.qiXue = this.getQiangZhuangLevel() * 15;
        shuXing.suDu = this.getShenSuLevel() * 1.5;
        return shuXing;
    }

    getQiangShenLevel()
    {
        return parseInt(getSelectValue("qiangShenSelect"));
    }
    getMingXiangLevel()
    {
        return parseInt(getSelectValue("mingXiangSelect"));
    }
    getYangShengLevel()
    {
        return parseInt(getSelectValue("yangShengSelect"));
    }
    getJianShenLevel()
    {
        return parseInt(getSelectValue("jianShenSelect"));
    }
    getQiangZhuangLevel()
    {
        return parseInt(getSelectValue("qiangZhuangSelect"));
    }
    getShenSuLevel()
    {
        return parseInt(getSelectValue("shenSuSelect"));
    }

    setLevel(level)
    {
        if (this.level != level) {
            this.level = level;
            this.update();
        }
    }
    setFeiShengStatus(feiShengStatus)
    {
        if (this.feiShengStatus != feiShengStatus) {
            this.feiShengStatus = feiShengStatus;
            this.update();
        }
    }

    getQiangShenUpperBound() {
        if (this.feiShengStatus == "未飞升") {
            if (this.level < 100) {
                return 120;
            }
            return parseInt(Math.max(120, Math.min(this.level + 20, 140)));
        } else {
            return 140;
        }
    }
    updateQiangShenShu()
    {
        var qiangShenUpperBound = this.getQiangShenUpperBound();
        var qiangShenSelect = document.getElementById("qiangShenSelect");
        clearElement(qiangShenSelect);
        for (var i = 0; i <= qiangShenUpperBound; i++) {
            var opt = document.createElement("option");
            opt.value = i;
            opt.innerHTML = i;
            qiangShenSelect.appendChild(opt);
        }
    }

    getYangShengJianShenMingXiangUpperBound() {
        if (this.feiShengStatus == "未飞升") {
            return parseInt(Math.max(140, Math.min(this.level + 20, 160)));
        } else {
            return 160;
        }
    }
    updateMingXiang()
    {
        var mingXiangUpperBound = this.getYangShengJianShenMingXiangUpperBound();
        var mingXiangSelect = document.getElementById("mingXiangSelect");
        clearElement(mingXiangSelect);
        for (var i = 0; i <= mingXiangUpperBound; i++) {
            var opt = document.createElement("option");
            opt.value = i;
            opt.innerHTML = i;
            mingXiangSelect.appendChild(opt);
        }
    }
    updateYangShengZhiDao()
    {
        var yangShengUpperBound = this.getYangShengJianShenMingXiangUpperBound();
        var yangShengSelect = document.getElementById("yangShengSelect");
        clearElement(yangShengSelect);
        for (var i = 0; i <= yangShengUpperBound; i++) {
            var opt = document.createElement("option");
            opt.value = i;
            opt.innerHTML = i;
            yangShengSelect.appendChild(opt);
        }
    }
    updateJianShenShu()
    {
        var jianShenUpperBound = this.getYangShengJianShenMingXiangUpperBound();
        var jianShenSelect = document.getElementById("jianShenSelect");
        clearElement(jianShenSelect);
        for (var i = 0; i <= jianShenUpperBound; i++) {
            var opt = document.createElement("option");
            opt.value = i;
            opt.innerHTML = i;
            jianShenSelect.appendChild(opt);
        }
    }
    getQiangZhuangShenSuUpperBound()
    {
        if (this.level < 60) {
            return 0;
        }
        return parseInt(Math.min(40, this.level / 3));
    }
    updateQiangZhuang()
    {
        var qiangZhuangUpperBound = this.getQiangZhuangShenSuUpperBound();
        var qiangZhuangSelect = document.getElementById("qiangZhuangSelect");
        clearElement(qiangZhuangSelect);
        for (var i = 0; i <= qiangZhuangUpperBound; i++) {
            var opt = document.createElement("option");
            opt.value = i;
            opt.innerHTML = i;
            qiangZhuangSelect.appendChild(opt);
        }
    }
    updateShenSu()
    {
        var shenSuUpperBound = this.getQiangZhuangShenSuUpperBound();
        var shenSuSelect = document.getElementById("shenSuSelect");
        clearElement(shenSuSelect);
        for (var i = 0; i <= shenSuUpperBound; i++) {
            var opt = document.createElement("option");
            opt.value = i;
            opt.innerHTML = i;
            shenSuSelect.appendChild(opt);
        }
    }
    update()
    {
        this.updateQiangShenShu();
        this.updateMingXiang();
        this.updateYangShengZhiDao();
        this.updateJianShenShu();
        this.updateQiangZhuang();
        this.updateShenSu();
    }
}
