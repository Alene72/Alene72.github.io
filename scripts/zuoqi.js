class ZuoQi {
    constructor(characterLevel, feiShengStatus)
    {
        this.characterLevel = characterLevel;
        this.feiShengStatus = feiShengStatus;
        this.level = 0;
        this.chengZhang = 2.3433;
        this.zhuShuXing = "体质";
        this.shuXingDian = new ShuXingDian(0, 0, 0, 0, 0);
        this.update();
    }

    setLevel(level)
    {
        if (this.level != level) {
            this.level = level;
            this.updateShuXingDian();
        }
    }
    setChengZhang(chengZhang)
    {
        if (this.chengZhang != chengZhang) {
            this.chengZhang = chengZhang;
            this.updateShuXingDian();
        }
    }
    setZhuShuXing(zhuShuXing)
    {
        if (this.zhuShuXing != zhuShuXing) {
            this.zhuShuXing = zhuShuXing;
            this.updateShuXingDian();
        }
    }

    setCharacterLevel(characterLevel)
    {
        if (this.characterLevel != characterLevel) {
            this.characterLevel = characterLevel;
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

    getLevelUpperBound()
    {
        if (this.characterLevel < 60) {
            return 0;
        }
    
        switch (this.feiShengStatus) {
            case "未飞升":
                return parseInt(Math.min(150, this.characterLevel + 16));
            case "已飞升":
                return 150;
            case "渡劫":
            default:
                return 170;
        }
    }

    initLevelPanel()
    {
        var levelUpperBound = this.getLevelUpperBound();
        var levelSelect = document.getElementById("zuoQiLevelSelect");
        clearElement(levelSelect);
        for (var i = 0; i <= levelUpperBound; i++) {
            var opt = document.createElement("option");
            opt.value = i;
            opt.innerHTML = i;
            levelSelect.appendChild(opt);
        }
        if (this.level > levelUpperBound) {
            this.level = levelUpperBound;
        } 
        levelSelect.selectedIndex = this.level;
    }

    initZhuShuXingLevel()
    {
        var zuoQiZhuShuXingSelect = document.getElementById("zuoQiZhuShuXingSelect");
        clearElement(zuoQiZhuShuXingSelect);
        var zhuSHuXings = ["体质", "魔力", "力量", "耐力", "敏捷"]
        zhuSHuXings.forEach(addZhuShuXingSelect);
        function addZhuShuXingSelect(val) {
            var opt = document.createElement("option")
            opt.value = val;
            opt.innerHTML = val;
            zuoQiZhuShuXingSelect.appendChild(opt);
        }
        zuoQiZhuShuXingSelect.selectedIndex = zhuSHuXings.indexOf(this.zhuShuXing);
    }

    getShuXingDian()
    {
        return this.shuXingDian;
    }

    updateShuXingDian()
    {
        if (this.level <= 0) {
            this.shuXingDian = new ShuXingDian(0, 0, 0, 0, 0);
            return;
        }

        var zhu = (this.level / 170.0) * (1050 / 28.5) * this.chengZhang;
        var fu = (this.level / 170.0) * (1050 / 175) * this.chengZhang;
        switch (this.zhuShuXing) {
            case "体质":
                this.shuXingDian = new ShuXingDian(zhu, fu, fu, fu, fu);
                break;
            case "魔力":
                this.shuXingDian = new ShuXingDian(fu, zhu, fu, fu, fu);
                break;
            case "力量":
                this.shuXingDian = new ShuXingDian(fu, fu, zhu, fu, fu);
                break;
            case "耐力":
                this.shuXingDian = new ShuXingDian(fu, fu, fu, zhu, fu);
                break;
            case "敏捷":
                this.shuXingDian = new ShuXingDian(fu, fu, fu, fu, zhu);
                break;
            default:
                break;
        }
        Character.getInstance().updateShuXingDianPanel();
    }

    update()
    {
        this.initLevelPanel();
        this.initZhuShuXingLevel();
        this.updateShuXingDian();
    }
}
