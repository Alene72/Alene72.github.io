class ShuXingDian {
    constructor(tiZhi, moLi, liLiang, naiLi, minJie) {
        this.tiZhi = tiZhi;
        this.moLi = moLi;
        this.liLiang = liLiang;
        this.naiLi = naiLi;
        this.minJie = minJie;
    }

    setTiZhi(tiZhi)
    {
        this.tiZhi = tiZhi;
    }
    getTiZhi() {
        return this.tiZhi;
    }
    plusTiZhi(val) {
        this.tiZhi += val;
    }
    minusTiZhi(val) {
        this.tiZhi -= val;
    }
    
    setMoLi(moLi)
    {
        this.moLi = moLi;
    }
    getMoLi() {
        return this.moLi;
    }
    plusMoLi(val) {
        this.moLi += val;
    }
    minusMoLi(val) {
        this.moLi -= val;
    }

    setLiLiang(liLiang)
    {
        this.liLiang = liLiang;
    }
    getLiLiang() {
        return this.liLiang;
    }
    plusLiLiang(val) {
        this.liLiang += val;
    }
    minusLiLiang(val) {
        this.liLiang -= val;
    }

    setNaiLi(naiLi)
    {
        this.naiLi = naiLi;
    }
    getNaiLi() {
        return this.naiLi;
    }
    plusNaiLi(val) {
        this.naiLi += val;
    }
    minusNaiLi(val) {
        this.naiLi -= val;
    }

    setMinJie(minJie)
    {
        this.minJie = minJie;
    }
    getMinJie() {
        return this.minJie;
    }
    plusMinJie(val) {
        this.minJie += val;
    }
    minusMinJie(val) {
        this.minJie -= val;
    }
}

class QianNeng {
    constructor(level, zhongZu, feiSheng, jiYuan, qianNengGuoNum) {
        switch (zhongZu) {
            // 人族
            case 0:
                this.shuXingDian = new ShuXingDian(10 + level, 10 + level, 10 + level, 10 + level, 10 + level);
                break;
            // 仙族
            case 1:
                this.shuXingDian = new ShuXingDian(12 + level, 5 + level, 11 + level, 12 + level, 10 + level);
                break;
            // 魔族
            case 2:
                this.shuXingDian = new ShuXingDian(12 + level, 11 + level, 11 + level, 8 + level, 8 + level);
                break;
            // default: 人族
            default:
                this.shuXingDian = new ShuXingDian(10 + level, 10 + level, 10 + level, 10 + level, 10 + level);
                break;
        }
        this.baseShuXingDian = new ShuXingDian(
            this.shuXingDian.getTiZhi(),
            this.shuXingDian.getMoLi(),
            this.shuXingDian.getLiLiang(),
            this.shuXingDian.getNaiLi(),
            this.shuXingDian.getMinJie());
        switch (feiSheng) {
            case "已飞升":
            case "渡劫":
            case "化圣一":
                this.weiFenPei = parseInt((level + 1) * 5 + 10 + jiYuan + qianNengGuoNum);
                break;
            case "化圣二":
            case "化圣三":
                this.weiFenPei = parseInt((level + 1) * 5 + 10 + 3 + jiYuan + qianNengGuoNum);
                break;
            case "化圣四":
            case "化圣五":
                this.weiFenPei = parseInt((level + 1) * 5 + 10 + 6 + jiYuan + qianNengGuoNum);
                break;
            case "化圣六":
                this.weiFenPei = parseInt((level + 1) * 5 + 10 + 9 + jiYuan + qianNengGuoNum);
                break;
            case "化圣七":
                this.weiFenPei = parseInt((level + 1) * 5 + 10 + 12 + jiYuan + qianNengGuoNum);
                break;
            case "化圣八":
            case "化圣九":
                this.weiFenPei = parseInt((level + 1) * 5 + 10 + 15 + jiYuan + qianNengGuoNum);
                break;
            case "未飞升":
            default:
                this.weiFenPei = parseInt((level + 1) * 5 + jiYuan + qianNengGuoNum);
                break;
        }
    }

    getTiZhi()
    {
        return this.shuXingDian.getTiZhi();
    }
    plusTiZhi(val)
    {
        this.shuXingDian.plusTiZhi(val);
        this.weiFenPei -= val;
        this.updateWeiFenPeiLabel();
        this.updateButtons();
    }
    minusTiZhi(val)
    {
        this.shuXingDian.minusTiZhi(val);
        this.weiFenPei += val;
        this.updateWeiFenPeiLabel();
        this.updateButtons();
    }

    getMoLi()
    {
        return this.shuXingDian.getMoLi();
    }
    plusMoLi(val)
    {
        this.shuXingDian.plusMoLi(val);
        this.weiFenPei -= val;
        this.updateWeiFenPeiLabel();
        this.updateButtons();
    }
    minusMoLi(val)
    {
        this.shuXingDian.minusMoLi(val);
        this.weiFenPei += val;
        this.updateWeiFenPeiLabel();
        this.updateButtons();
    }

    getLiLiang()
    {
        return this.shuXingDian.getLiLiang();
    }
    plusLiLiang(val)
    {
        this.shuXingDian.plusLiLiang(val);
        this.weiFenPei -= val;
        this.updateWeiFenPeiLabel();
        this.updateButtons();
    }
    minusLiLiang(val)
    {
        this.shuXingDian.minusLiLiang(val);
        this.weiFenPei += val;
        this.updateWeiFenPeiLabel();
        this.updateButtons();
    }

    getNaiLi()
    {
        return this.shuXingDian.getNaiLi();
    }
    plusNaiLi(val)
    {
        this.shuXingDian.plusNaiLi(val);
        this.weiFenPei -= val;
        this.updateWeiFenPeiLabel();
        this.updateButtons();
    }
    minusNaiLi(val)
    {
        this.shuXingDian.minusNaiLi(val);
        this.weiFenPei += val;
        this.updateWeiFenPeiLabel();
        this.updateButtons();
    }

    getMinJie()
    {
        return this.shuXingDian.getMinJie();
    }
    plusMinJie(val)
    {
        this.shuXingDian.plusMinJie(val);
        this.weiFenPei -= val;
        this.updateWeiFenPeiLabel();
        this.updateButtons();
    }
    minusMinJie(val)
    {
        this.shuXingDian.minusMinJie(val);
        this.weiFenPei += val;
        this.updateWeiFenPeiLabel();
        this.updateButtons();
    }
    getWeiFenPei()
    {
        return this.weiFenPei;
    }

    disablePlus1Buttons()
    {
        disableBtn("tiZhi_plus_1");
        disableBtn("moLi_plus_1");
        disableBtn("liLiang_plus_1");
        disableBtn("naiLi_plus_1");
        disableBtn("minJie_plus_1");
    }
    
    enablePlus1Buttons()
    {
        enableBtn("tiZhi_plus_1");
        enableBtn("moLi_plus_1");
        enableBtn("liLiang_plus_1");
        enableBtn("naiLi_plus_1");
        enableBtn("minJie_plus_1");
    }
    
    disablePlus5Buttons()
    {
        disableBtn("tiZhi_plus_5");
        disableBtn("moLi_plus_5");
        disableBtn("liLiang_plus_5");
        disableBtn("naiLi_plus_5");
        disableBtn("minJie_plus_5");
    }
    
    enablePlus5Buttons()
    {
        enableBtn("tiZhi_plus_5");
        enableBtn("moLi_plus_5");
        enableBtn("liLiang_plus_5");
        enableBtn("naiLi_plus_5");
        enableBtn("minJie_plus_5");
    }
    
    disablePlus10Buttons()
    {
        disableBtn("tiZhi_plus_10");
        disableBtn("moLi_plus_10");
        disableBtn("liLiang_plus_10");
        disableBtn("naiLi_plus_10");
        disableBtn("minJie_plus_10");
    }
    
    enablePlus10Buttons()
    {
        enableBtn("tiZhi_plus_10");
        enableBtn("moLi_plus_10");
        enableBtn("liLiang_plus_10");
        enableBtn("naiLi_plus_10");
        enableBtn("minJie_plus_10");
    }
    
    disablePlus100Buttons()
    {
        disableBtn("tiZhi_plus_100");
        disableBtn("moLi_plus_100");
        disableBtn("liLiang_plus_100");
        disableBtn("naiLi_plus_100");
        disableBtn("minJie_plus_100");
    }
    
    enablePlus100Buttons()
    {
        enableBtn("tiZhi_plus_100");
        enableBtn("moLi_plus_100");
        enableBtn("liLiang_plus_100");
        enableBtn("naiLi_plus_100");
        enableBtn("minJie_plus_100");
    }

    updateTiZhiMinusButtons()
    {
        var curr = this.shuXingDian.getTiZhi();
        var base = this.baseShuXingDian.getTiZhi();
        if (curr - base < 1) {
            disableBtn("tiZhi_minus_1");
        } else {
            enableBtn("tiZhi_minus_1");
        }
        if (curr - base < 5) {
            disableBtn("tiZhi_minus_5");
        } else {
            enableBtn("tiZhi_minus_5");
        }
        if (curr - base < 10) {
            disableBtn("tiZhi_minus_10");
        } else {
            enableBtn("tiZhi_minus_10");
        }
        if (curr - base < 100) {
            disableBtn("tiZhi_minus_100");
        } else {
            enableBtn("tiZhi_minus_100");
        }
    }
    updateMoLiMinusButtons()
    {
        var curr = this.shuXingDian.getMoLi();
        var base = this.baseShuXingDian.getMoLi();
        if (curr - base < 1) {
            disableBtn("moLi_minus_1");
        } else {
            enableBtn("moLi_minus_1");
        }
        if (curr - base < 5) {
            disableBtn("moLi_minus_5");
        } else {
            enableBtn("moLi_minus_5");
        }
        if (curr - base < 10) {
            disableBtn("moLi_minus_10");
        } else {
            enableBtn("moLi_minus_10");
        }
        if (curr - base < 100) {
            disableBtn("moLi_minus_100");
        } else {
            enableBtn("moLi_minus_100");
        }
    }
    updateLiLiangMinusButtons()
    {
        var curr = this.shuXingDian.getLiLiang();
        var base = this.baseShuXingDian.getLiLiang();
        if (curr - base < 1) {
            disableBtn("liLiang_minus_1");
        } else {
            enableBtn("liLiang_minus_1");
        }
        if (curr - base < 5) {
            disableBtn("liLiang_minus_5");
        } else {
            enableBtn("liLiang_minus_5");
        }
        if (curr - base < 10) {
            disableBtn("liLiang_minus_10");
        } else {
            enableBtn("liLiang_minus_10");
        }
        if (curr - base < 100) {
            disableBtn("liLiang_minus_100");
        } else {
            enableBtn("liLiang_minus_100");
        }
    }
    updateNaiLiMinusButtons()
    {
        var curr = this.shuXingDian.getNaiLi();
        var base = this.baseShuXingDian.getNaiLi();
        if (curr - base < 1) {
            disableBtn("naiLi_minus_1");
        } else {
            enableBtn("naiLi_minus_1");
        }
        if (curr - base < 5) {
            disableBtn("naiLi_minus_5");
        } else {
            enableBtn("naiLi_minus_5");
        }
        if (curr - base < 10) {
            disableBtn("naiLi_minus_10");
        } else {
            enableBtn("naiLi_minus_10");
        }
        if (curr - base < 100) {
            disableBtn("naiLi_minus_100");
        } else {
            enableBtn("naiLi_minus_100");
        }
    }
    updateMinJieMinusButtons()
    {
        var curr = this.shuXingDian.getMinJie();
        var base = this.baseShuXingDian.getMinJie();
        if (curr - base < 1) {
            disableBtn("minJie_minus_1");
        } else {
            enableBtn("minJie_minus_1");
        }
        if (curr - base < 5) {
            disableBtn("minJie_minus_5");
        } else {
            enableBtn("minJie_minus_5");
        }
        if (curr - base < 10) {
            disableBtn("minJie_minus_10");
        } else {
            enableBtn("minJie_minus_10");
        }
        if (curr - base < 100) {
            disableBtn("minJie_minus_100");
        } else {
            enableBtn("minJie_minus_100");
        }
    }

    updateMinusButtons()
    {
        this.updateTiZhiMinusButtons();
        this.updateMoLiMinusButtons();
        this.updateLiLiangMinusButtons();
        this.updateNaiLiMinusButtons();
        this.updateMinJieMinusButtons();
    }

    updateWeiFenPeiLabel()
    {
        var weiFenPeiQianNengLabel = document.getElementById("weiFenPeiQianNeng");
        writeLabel(weiFenPeiQianNengLabel, this.weiFenPei);
    }

    updateButtons()
    {
        // update +1 buttons' state
        if (this.weiFenPei < 1) {
            this.disablePlus1Buttons();
        } else {
            this.enablePlus1Buttons();
        }
        // update +5 buttons' state
        if (this.weiFenPei < 5) {
            this.disablePlus5Buttons();
        } else {
            this.enablePlus5Buttons();
        }
        // update +10 buttons' state
        if (this.weiFenPei < 10) {
            this.disablePlus10Buttons();
        } else {
            this.enablePlus10Buttons();
        }
        // update +100 buttons' state
        if (this.weiFenPei < 100) {
            this.disablePlus100Buttons();
        } else {
            this.enablePlus100Buttons();
        }
        this.updateMinusButtons();
    }
};
