class Character {
    constructor()
    {
        this.allMenPais = [
            "大唐官府", "方寸山", "女儿村", "神木林", "天机城", "化生寺",
            "普陀山", "天宫", "龙宫", "五庄观", "凌波城", "花果山",
            "阴曹地府", "魔王寨", "盘丝洞", "无底洞", "狮驼岭", "女魃墓",
            "东海渊"];
        this.level = 0;
        this.baseShuXing = new ShuXing();
        this.initBaseShuXing();
        this.feiShengs = ["未飞升"];
        this.menPai = "大唐官府";
        this.feiShengStatus = "未飞升";
        this.jiYuan = 0;
        this.shiMenJiNeng = new ShiMenJiNeng(this.menPai, this.level, this.feiShengStatus);
        this.shengHuoJiNeng = new ShengHuoJiNeng(this.level, this.feiShengStatus);
        this.zuoQi = new ZuoQi(this.level, this.feiShengStatus);
        this.zhuangBeiFushiShuXingDian = new ShuXingDian(0, 0, 0, 0, 0);
        this.faBao = new FaBao(this.level);

        this.qianNengGuo = new QianNengGuo(this.level, this.feiShengStatus);
        this.updateQianNeng();
        this.updateShuXingDianPanel();
        this.updateTotalShuXingPanel();
    }

    static getInstance()
    {
        if (!Character._instance) {
            Character._instance = new Character();
        }
        return Character._instance;
    }

    initBaseShuXing()
    {
        this.baseShuXing.qiXue = 100;
        this.baseShuXing.moFa = 80;
        this.baseShuXing.huoLi = 50;
        this.baseShuXing.tiLi = 50;
        this.baseShuXing.mingZhong = 30;
        this.baseShuXing.shangHai = 40;
        this.baseShuXing.duoBi = 10;
    }

    getShuXingFromShuXingDian()
    {
        var shuXing = new ShuXing();
        var zhongZu = this.getZhongZu();
        var tiZhi = this.getCurrTiZhi();
        var moLi = this.getCurrMoLi();
        var liLiang = this.getCurrLiLiang();
        var naiLi = this.getCurrNaiLi();
        var minJie = this.getCurrMinJie();
        shuXing.suDu = 0.7 * minJie + 0.1 * (tiZhi + liLiang + naiLi);
                shuXing.lingLi = 0.7 * moLi + 0.4 * liLiang + 0.3 * tiZhi + 0.2 * naiLi;
                shuXing.faFang = shuXing.lingLi;
                shuXing.faShang = shuXing.lingLi;
        shuXing.duoBi = 1.0 * minJie;
        switch (zhongZu) {
            case 0: {
                shuXing.qiXue = 5 * tiZhi;
                shuXing.moFa = 3 * moLi;
                shuXing.mingZhong = 2.0 * liLiang;
                shuXing.shangHai = 2.0 * liLiang / 3.0;
                shuXing.fangYu = 1.5 * naiLi;
                break;
            }
            case 1: {
                shuXing.qiXue = 4.5 * tiZhi;
                shuXing.moFa = 3.5 * moLi;
                shuXing.mingZhong = 1.7 * liLiang;
                shuXing.shangHai = 1.7 * liLiang / 3.0;
                shuXing.fangYu = 1.6 * naiLi;
                break;
            }
            case 2: {
                shuXing.qiXue = 6 * tiZhi;
                shuXing.moFa = 2.5 * moLi;
                shuXing.mingZhong = 2.3 * liLiang;
                shuXing.shangHai = 2.3 * liLiang / 3.0;
                shuXing.fangYu = 1.4 * naiLi;
                break;
            }
            default:
                break;
        }
        return shuXing;
    }

    getToTalShuXing()
    {
        var totalShuXing = new ShuXing();
        totalShuXing.merge(this.baseShuXing);
        totalShuXing.merge(this.getShuXingFromShuXingDian());
        totalShuXing.merge(this.shengHuoJiNeng.getJiaChengShuXing());
        totalShuXing.merge(this.faBao.getJiaChengShuXing());
        totalShuXing.merge(this.shiMenJiNeng.getJiaChengShuXing());
        totalShuXing.huoLi += (this.level * 5);
        totalShuXing.tiLi += (this.level * 5);
        totalShuXing.qiXue *= (1.0 + this.shengHuoJiNeng.getQiangShenLevel() / 100.0);
        totalShuXing.moFa *= (1.0 + this.shengHuoJiNeng.getMingXiangLevel() / 100.0);
        return totalShuXing;
    }

    updateTotalShuXingPanel()
    {
        var totalShuXing = this.getToTalShuXing();
        totalShuXing.show(this.level);
    }

    getZuoQi()
    {
        return this.zuoQi;
    }

    getZhongZu()
    {
        return parseInt((this.allMenPais.indexOf(this.menPai) / 6) % 3);
    }

    getMenPai()
    {
        return this.menPai;
    }

    setMenPai(menPai)
    {
        this.menPai = menPai;
        this.updateQianNeng();
        this.updateShuXingDianPanel();
        this.shiMenJiNeng.setMenPai(this.menPai);
        this.updateTotalShuXingPanel();
    }

    getLevel()
    {
        return this.level;
    }

    setLevel(level)
    {
        if (this.level != level) {
            this.level = level;
            this.updateFeiShengs();
            this.shiMenJiNeng.setLevel(this.level);
            this.shengHuoJiNeng.setLevel(this.level);
            this.qianNengGuo.setLevel(this.level);
            this.updateQianNeng();
            this.updateShuXingDianPanel();
            this.zuoQi.setCharacterLevel(this.level);
            this.faBao.setLevel(this.level);
            this.updateTotalShuXingPanel();
        }
    }

    getFeiShengs()
    {
        return this.feiShengs;
    }

    getFeiShengStatus()
    {
        return this.feiShengStatus;
    }

    setFeiShengStatus(feiShengStatus)
    {
        if (this.feiShengStatus != feiShengStatus) {
            this.feiShengStatus = feiShengStatus;
            this.shiMenJiNeng.setFeiShengStatus(this.feiShengStatus);
            this.shengHuoJiNeng.setFeiShengStatus(this.feiShengStatus);
            this.zuoQi.setFeiShengStatus(this.feiShengStatus);
            this.qianNengGuo.setFeiShengStatus(this.feiShengStatus);
            this.updateQianNeng();
            this.updateShuXingDianPanel();
            this.updateTotalShuXingPanel();
        }
    }

    updateFeiShengs()
    {
        if (this.level < 120) {
            this.feiShengs = ["未飞升"];
        } else if (this.level <= 145) {
            this.feiShengs = ["未飞升", "已飞升"];
        } else if (this.level < 155) {
            this.feiShengs = ["已飞升"];
        } else if (this.level == 155) {
            this.feiShengs = ["已飞升", "渡劫"];
        } else if (this.level < 175) {
            this.feiShengs = ["渡劫"];
        } else {
            this.feiShengs = ["渡劫", "化圣一", "化圣二", "化圣三", "化圣四",
                            "化圣五", "化圣六", "化圣七", "化圣八", "化圣九"];
        }
    }

    getJiYuan()
    {
        return this.jiYuan;
    }

    setJiYuan(jiYuan)
    {
        if (this.jiYuan != jiYuan) {
            this.jiYuan = jiYuan;
            this.updateQianNeng();
            this.updateShuXingDianPanel();
            this.updateTotalShuXingPanel();
        }
    }

    updateQianNeng()
    {
        this.qianNeng = new QianNeng(
            this.getLevel(),
            this.getZhongZu(),
            this.getFeiShengStatus(),
            this.getJiYuan(),
            this.qianNengGuo.getNum());
        this.qianNeng.updateWeiFenPeiLabel();
        this.qianNeng.updateButtons();
    }

    getQianNeng()
    {
        return this.qianNeng;
    }


    plusTiZhi(val)
    {
        this.qianNeng.plusTiZhi(val);
        this.updateTiZhiPanel();
        this.updateTotalShuXingPanel();
    }
    minusTiZhi(val)
    {
        this.qianNeng.minusTiZhi(val);
        this.updateTiZhiPanel();
        this.updateTotalShuXingPanel();
    }
    getCurrTiZhi()
    {
        return parseInt(
            this.qianNeng.getTiZhi() +
            this.zuoQi.getShuXingDian().getTiZhi() +
            this.zhuangBeiFushiShuXingDian.getTiZhi());
    }
    updateTiZhiPanel()
    {
        var tiZhiLabel = document.getElementById("tiZhiLabel");
        writeLabel(tiZhiLabel, this.getCurrTiZhi());
    }

    plusMoLi(val)
    {
        this.qianNeng.plusMoLi(val);
        this.updateMoLiPanel();
        this.updateTotalShuXingPanel();
    }
    minusMoLi(val)
    {
        this.qianNeng.minusMoLi(val);
        this.updateMoLiPanel();
        this.updateTotalShuXingPanel();
    }
    getCurrMoLi()
    {
        return parseInt(
            this.qianNeng.getMoLi() +
            this.zuoQi.getShuXingDian().getMoLi() +
            this.zhuangBeiFushiShuXingDian.getMoLi());
    }
    updateMoLiPanel()
    {
        var moLiLabel = document.getElementById("moLiLabel");
        writeLabel(moLiLabel, this.getCurrMoLi());
    }

    plusLiLiang(val)
    {
        this.qianNeng.plusLiLiang(val);
        this.updateLiLiangPanel();
        this.updateTotalShuXingPanel();
    }
    minusLiLiang(val)
    {
        this.qianNeng.minusLiLiang(val);
        this.updateLiLiangPanel();
        this.updateTotalShuXingPanel();
    }
    getCurrLiLiang()
    {
        return parseInt(
            this.qianNeng.getLiLiang() +
            this.zuoQi.getShuXingDian().getLiLiang() +
            this.zhuangBeiFushiShuXingDian.getLiLiang());
    }
    updateLiLiangPanel()
    {
        var liLiangLabel = document.getElementById("liLiangLabel");
        writeLabel(liLiangLabel, this.getCurrLiLiang());
    }

    plusNaiLi(val)
    {
        this.qianNeng.plusNaiLi(val);
        this.updateNaiLiPanel();
        this.updateTotalShuXingPanel();
    }
    minusNaiLi(val)
    {
        this.qianNeng.minusNaiLi(val);
        this.updateNaiLiPanel();
        this.updateTotalShuXingPanel();
    }
    getCurrNaiLi()
    {
        return parseInt(
            this.qianNeng.getNaiLi() +
            this.zuoQi.getShuXingDian().getNaiLi() +
            this.zhuangBeiFushiShuXingDian.getNaiLi());
    }
    updateNaiLiPanel()
    {
        var naiLiLabel = document.getElementById("naiLiLabel");
        writeLabel(naiLiLabel, this.getCurrNaiLi());
    }

    plusMinJie(val)
    {
        this.qianNeng.plusMinJie(val);
        this.updateMinJiePanel();
        this.updateTotalShuXingPanel();
    }
    minusMinJie(val)
    {
        this.qianNeng.minusMinJie(val);
        this.updateMinJiePanel();
        this.updateTotalShuXingPanel();
    }
    getCurrMinJie()
    {
        return parseInt(
            this.qianNeng.getMinJie() +
            this.zuoQi.getShuXingDian().getMinJie() +
            this.zhuangBeiFushiShuXingDian.getMinJie());
    }
    updateMinJiePanel()
    {
        var minJieLabel = document.getElementById("minJieLabel");
        writeLabel(minJieLabel, this.getCurrMinJie());
    }

    updateShuXingDianPanel()
    {
        this.updateTiZhiPanel();
        this.updateMoLiPanel();
        this.updateLiLiangPanel();
        this.updateNaiLiPanel();
        this.updateMinJiePanel();
        this.updateTotalShuXingPanel();
    }
}
