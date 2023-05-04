class ShiMenJiNeng {
    constructor(menPai, level, feiShengStatus)
    {
        this.allShiMenJiNengs = {
            "大唐官府": ["为官之道", "无双一击", "神兵鉴赏", "疾风步", "十方无敌", "紫薇之术", "文韬武略"],
            "方寸山": ["黄庭经", "磬龙灭法", "霹雳咒", "符之术", "归元心法", "神道无念", "斜月步"],
            "女儿村": ["毒经", "倾国倾城", "沉鱼落雁", "闭月羞花", "香飘兰麝", "玉质冰肌", "清歌妙舞"],
            "神木林": ["瞬息万变", "万灵诸念", "巫咒", "万物轮转", "天人庇护", "神木恩泽", "驭灵咒"],
            "天机城": ["神工无形", "攻玉以石", "擎天之械", "千机奇巧", "匠心不移", "运思如电", "探奥索隐"],
            "化生寺": ["小乘佛法", "金刚伏魔", "诵经", "佛光普照", "大慈大悲", "歧黄之术", "渡世步"],
            "普陀山": ["灵性", "护法金刚", "观音咒", "五行学说", "金刚经", "五行扭转", "莲花宝座"],
            "天宫": ["天罡气", "傲世诀", "清明自在", "宁气诀", "乾坤塔", "混天术", "云霄步"],
            "龙宫": ["九龙诀", "破浪诀", "呼风唤雨", "龙腾", "逆鳞", "游龙术", "龙附"],
            "五庄观": ["周易学", "潇湘仙雨", "乾坤袖", "修仙术", "混元道果", "明性修身", "七星遁"],
            "凌波城": ["天地无极", "九转玄功", "武神显圣", "啸傲", "气吞山河", "诛魔", "法天象地"],
            "花果山": ["神通广大", "如意金箍", "齐天逞胜", "金刚之躯", "灵猴九窍", "七十二变", "腾云驾雾"],
            "阴曹地府": ["灵通术", "六道轮回", "幽冥术", "拘魂诀", "九幽阴魂", "尸腐恶", "无常步"],
            "魔王寨": ["牛逼神功", "震天诀", "火云术", "火牛阵", "牛虱阵", "回身击", "裂石步"],
            "盘丝洞": ["蛛丝阵法", "迷情大法", "秋波暗送", "天外魔音", "盘丝大法", "移形换影", "姊妹相随"],
            "无底洞": ["枯骨心法", "阴风绝章", "鬼蛊灵蕴", "燃灯灵宝", "地冥妙法", "混元神功", "秘影迷踪"],
            "狮驼岭": ["魔兽神功", "生死搏", "训兽诀", "阴阳二气诀", "狂兽诀", "大鹏展翅", "魔兽反噬"],
            "女魃墓": ["天火献誓", "天罚之焰", "煌火无明", "化神以灵", "弹指成烬", "藻光灵狱", "离魂"],
            "东海渊": ["为官之道", "无双一击", "神兵鉴赏", "疾风步", "十方无敌", "紫薇之术", "文韬武略"]
        };
        this.menPaiJiaChengDispatchTable = {
            "大唐官府": function(obj, shuXing) { obj.updateDT(shuXing); },
            "方寸山": function(obj, shuXing) { obj.updateFC(shuXing); },
            "女儿村": function(obj, shuXing) { obj.updateNR(shuXing); },
            "神木林": function(obj, shuXing) { obj.updateSML(shuXing); },
            "天机城": function(obj, shuXing) { obj.updateTJC(shuXing); },
            "化生寺": function(obj, shuXing) { obj.updateHS(shuXing); },
            "普陀山": function(obj, shuXing) { obj.updatePT(shuXing); },
            "天宫": function(obj, shuXing) { obj.updateTG(shuXing); },
            "龙宫": function(obj, shuXing) { obj.updateLG(shuXing); },
            "五庄观": function(obj, shuXing) { obj.updateWZ(shuXing); },
            "凌波城": function(obj, shuXing) { obj.updateLBC(shuXing); },
            "花果山": function(obj, shuXing) { obj.updateHGS(shuXing); },
            "阴曹地府": function(obj, shuXing) { obj.updateDF(shuXing); },
            "魔王寨": function(obj, shuXing) { obj.updateMW(shuXing); },
            "盘丝洞": function(obj, shuXing) { obj.updatePS(shuXing); },
            "无底洞": function(obj, shuXing) { obj.updateWDD(shuXing); },
            "狮驼岭": function(obj, shuXing) { obj.updateSTL(shuXing); },
            "女魃墓": function(obj, shuXing) { obj.updateNBM(shuXing); },
            "东海渊": function(obj, shuXing) { obj.updateDHY(shuXing); },
        };
        this.fengxi = ["方寸山", "女儿村", "天宫", "五庄观", "盘丝洞", "无底洞", "天机城"];
        this.menPai = menPai;
        this.level = level;
        this.feiShengStatus = feiShengStatus;
        this.update();
    }

    isFengXi()
    {
        return this.fengxi.includes(this.menPai, 0);
    }

    getJiaChengShuXing()
    {
        var shuXing = new ShuXing();
        this.menPaiJiaChengDispatchTable[this.menPai](this, shuXing);
        return shuXing;
    }

    getJiNengLevel(jiNengIdx)
    {
        let prefix = "jineng";
        let selectSuffix = "Select";
        var jinengSelectId = prefix + String(jiNengIdx) + selectSuffix;
        return parseInt(getSelectValue(jinengSelectId));
    }
    getFangYuJiaCheng(jn)
    {
        var sum = 0;
        for (var i = 1; i <= jn; i++) {
            sum += (1 + 55.0 / 4000.0 * i);
        }
        return sum;
    }
    getLingLiJiaCheng(jn)
    {
        var sum = 0;
        for (var i = 1; i <= jn; i++) {
            sum += (50.0 / 110.0 + 0.01 * i);
        }
        return sum;
    }
    getDuoBiJiaCheng(jn)
    {
        var sum = 0;
        for (var i = 1; i <= jn; i++) {
            sum += (2.0 + 0.02 * i);
        }
        return sum;
    }
    // 普通门派
    getShangHaiJiaCheng(jn)
    {
        var sum = 0;
        for (var i = 1; i <= jn; i++) {
            sum += (2.0 + 0.02 * i);
        }
        return sum;
    }
    updateDT(shuXing)
    {
        var shangHaiSum = 0;
        for (var i = 1; i <= this.getJiNengLevel(5); i++) {
            shangHaiSum += (2.5 + 1.0 / 50 * i);
        }
        var mingZhongSum = 0;
        for (var i = 1; i <= this.getJiNengLevel(2); i++) {
            var mingZhong = 1.0 + 0.02 * i;
            mingZhongSum += mingZhong;
            shangHaiSum += (mingZhong / 3.0);
        }
        shuXing.shangHai = shangHaiSum;
        shuXing.mingZhong = mingZhongSum;
        shuXing.fangYu = this.getFangYuJiaCheng(this.getJiNengLevel(7));
        shuXing.lingLi = this.getLingLiJiaCheng(this.getJiNengLevel(6));
        shuXing.faShang = shuXing.lingLi;
        shuXing.faFang = shuXing.lingLi;
        shuXing.duoBi = this.getDuoBiJiaCheng(this.getJiNengLevel(4));
    }
    updateFC(shuXing)
    {
        shuXing.shangHai = this.getShangHaiJiaCheng(this.getJiNengLevel(2));
        shuXing.fangYu = this.getFangYuJiaCheng(this.getJiNengLevel(5));
        shuXing.lingLi = this.getLingLiJiaCheng(this.getJiNengLevel(6));
        shuXing.faShang = shuXing.lingLi;
        shuXing.faFang = shuXing.lingLi;
        shuXing.duoBi = this.getDuoBiJiaCheng(this.getJiNengLevel(7));
    }
    updateNR(shuXing)
    {
        // 拜师赠送25点伤害
        var shangHaiSum = 0;
        var jn1 = this.getJiNengLevel(1);
        if (jn1 > 0) {
            for (var i = 1; i <= jn1; i++) {
                shangHaiSum += (2 + 0.01 * i);
            }
            shangHaiSum += 25;
        }
        shuXing.shangHai = shangHaiSum;

        shuXing.fangYu = this.getFangYuJiaCheng(this.getJiNengLevel(6));
        shuXing.lingLi = this.getLingLiJiaCheng(this.getJiNengLevel(5));
        shuXing.faShang = shuXing.lingLi;
        shuXing.faFang = shuXing.lingLi;
        var suDuJN = this.getJiNengLevel(7);
        var suDuSum = 0;
        for (var i = 1; i <= suDuJN; i++) {
            suDuSum += (1.0 + 0.002 * i);
        }
        shuXing.suDu = suDuSum;
    }
    updateSML(shuXing)
    {
        shuXing.shangHai = this.getShangHaiJiaCheng(this.getJiNengLevel(3));
        shuXing.fangYu = this.getFangYuJiaCheng(this.getJiNengLevel(4));
        shuXing.lingLi = this.getLingLiJiaCheng(this.getJiNengLevel(2));
        shuXing.faShang = shuXing.lingLi;
        shuXing.faFang = shuXing.lingLi;
        shuXing.duoBi = this.getDuoBiJiaCheng(this.getJiNengLevel(5));
    }
    updateTJC(shuXing)
    {
        shuXing.shangHai = this.getShangHaiJiaCheng(this.getJiNengLevel(5));
        shuXing.fangYu = this.getFangYuJiaCheng(this.getJiNengLevel(4));
        shuXing.lingLi = this.getLingLiJiaCheng(this.getJiNengLevel(7));
        shuXing.faShang = shuXing.lingLi;
        shuXing.faFang = shuXing.lingLi;
        shuXing.duoBi = this.getDuoBiJiaCheng(this.getJiNengLevel(6));
    }
    updateHS(shuXing)
    {
        shuXing.shangHai = this.getShangHaiJiaCheng(this.getJiNengLevel(2));
        shuXing.fangYu = this.getFangYuJiaCheng(this.getJiNengLevel(5));
        shuXing.lingLi = this.getLingLiJiaCheng(this.getJiNengLevel(1));
        shuXing.faShang = shuXing.lingLi;
        shuXing.faFang = shuXing.lingLi;
        shuXing.duoBi = this.getDuoBiJiaCheng(this.getJiNengLevel(7));
    }
    updatePT(shuXing)
    {
        shuXing.shangHai = this.getShangHaiJiaCheng(this.getJiNengLevel(2));
        shuXing.fangYu = this.getFangYuJiaCheng(this.getJiNengLevel(6));
        shuXing.lingLi = this.getLingLiJiaCheng(this.getJiNengLevel(1));
        shuXing.faShang = shuXing.lingLi;
        shuXing.faFang = shuXing.lingLi;
        shuXing.duoBi = this.getDuoBiJiaCheng(this.getJiNengLevel(7));
    }
    updateTG(shuXing)
    {}
    updateLG(shuXing)
    {
        shuXing.shangHai = this.getShangHaiJiaCheng(this.getJiNengLevel(2));
        shuXing.fangYu = this.getFangYuJiaCheng(this.getJiNengLevel(5));
        shuXing.lingLi = this.getLingLiJiaCheng(this.getJiNengLevel(1));
        shuXing.faShang = shuXing.lingLi;
        shuXing.faFang = shuXing.lingLi;
        shuXing.duoBi = this.getDuoBiJiaCheng(this.getJiNengLevel(6));
    }
    updateWZ(shuXing)
    {}
    updateLBC(shuXing)
    {}
    updateHGS(shuXing)
    {}
    updateDF(shuXing)
    {}
    updateMW(shuXing)
    {}
    updatePS(shuXing)
    {}
    updateWDD(shuXing)
    {}
    updateSTL(shuXing)
    {}
    updateNBM(shuXing)
    {}
    updateDHY(shuXing)
    {}

    getShiMenJiNengUpperBound()
    {
        if (this.level < 60) {
            return this.level + 16;
        }
        var upperBound;
        if (this.isFengXi()) {
            switch (this.feiShengStatus) {
                case "未飞升":
                    upperBound = this.level + 21;
                    break;
                case "已飞升":
                    upperBound = parseInt(Math.max(160, this.level + 21));
                    break;
                case "渡劫":
                default:
                    upperBound = this.level + 16;
                    break;
            }
        } else {
            switch (this.feiShengStatus) {
                case "未飞升":
                    upperBound = this.level + 16;
                    break;
                case "已飞升":
                    upperBound = parseInt(Math.max(160, this.level + 16));
                    break;
                case "渡劫":
                default:
                    upperBound = this.level + 11;
                    break;
            }
        }
        return upperBound;
    }

    setLevel(level) {
        if (this.level != level) {
            this.level = level;
            this.update();
        }
    }
    setMenPai(menPai) {
        if (this.menPai != menPai) {
            this.menPai = menPai;
            this.update();
        }
    }
    setFeiShengStatus(feiShengStatus) {
        if (this.feiShengStatus != feiShengStatus) {
            this.feiShengStatus = feiShengStatus;
            this.update();
        }
    }

    update() {
        let prefix = "jineng";
        let nameSuffix = "Name";
        let selectSuffix = "Select";
        var shiMenJiNengs = this.allShiMenJiNengs[this.menPai];
        var upperBound = this.getShiMenJiNengUpperBound();
        for(var i = 0; i < shiMenJiNengs.length; i++) {
            var jinengName = shiMenJiNengs[i];
            var jinengNameId = prefix + String(i+1) + nameSuffix;
            var jinengNameLabel = document.getElementById(jinengNameId);
            jinengNameLabel.value = jinengName;
            jinengNameLabel.textContent = jinengName + "：";
    
            var jinengSelectId = prefix + String(i+1) + selectSuffix;
            var jinengSelect = document.getElementById(jinengSelectId);
            clearElement(jinengSelect);
            for (var j = 0; j <= upperBound; j++) {
                var opt = document.createElement("option");
                opt.value = j;
                opt.innerHTML = j;
                jinengSelect.appendChild(opt);
            }
        }
    }
}