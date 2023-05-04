class ShuXing {
    constructor()
    {
        this.qiXue = 0; // 气血
        this.qiXueLabel = document.getElementById("qiXueLabel");
        this.moFa = 0; // 魔法
        this.moFaLabel = document.getElementById("moFaLabel");
        this.huoLi = 0; // 活力
        this.huoLiLabel = document.getElementById("huoLiLabel");
        this.tiLi = 0; // 体力
        this.tiLiLabel = document.getElementById("tiLiLabel");
        this.mingZhong = 0; // 命中
        this.mingZhongLabel = document.getElementById("mingZhongLabel");
        this.shangHai = 0; // 伤害
        this.shangHaiLabel = document.getElementById("shangHaiLabel");
        this.fangYu = 0; // 防御
        this.fangYuLabel = document.getElementById("fangYuLabel");
        this.suDu = 0; // 速度
        this.suDuLabel = document.getElementById("suDuLabel");
        this.faShang = 0; // 法伤
        this.faShangLabel = document.getElementById("faShangLabel");
        this.faFang = 0; // 法防
        this.faFangLabel = document.getElementById("faFangLabel");
        this.lingLi = 0; // 灵力
        this.lingLiLabel = document.getElementById("lingLiLabel");
        this.wuBao = 0; // 物理暴击等级
        this.wuBaoLabel = document.getElementById("wuBaoLabel");
        this.chuanCi = 0; // 穿刺等级
        this.chuanCiLabel = document.getElementById("chuanCiLabel");
        this.kuangBao = 0; // 狂暴等级
        this.kuangBaoLabel = document.getElementById("kuangBaoLabel");
        this.faShuBaoJi = 0; // 法术暴击等级
        this.faShuBaoJiLabel = document.getElementById("faShuBaoJiLabel");
        this.faJie = 0; // 法术伤害结果
        this.faJieLabel = document.getElementById("faJieLabel");
        this.fengYin = 0; // 封印命中等级
        this.fengYinLabel = document.getElementById("fengYinLabel");
        this.zhiLiao = 0; // 治疗能力
        this.zhiLiaoLabel = document.getElementById("zhiLiaoLabel");
        this.kangWuBao = 0; // 抗物理暴击等级
        this.kangWuBaoLabel = document.getElementById("kangWuBaoLabel");
        this.geDang = 0; // 格挡值
        this.geDangLabel = document.getElementById("geDangLabel");
        this.kangFaBao = 0; // 抗法术暴击等级
        this.kangFaBaoLabel = document.getElementById("kangFaBaoLabel");
        this.kangFeng = 0; // 抵抗封印等级
        this.kangFengLabel = document.getElementById("kangFengLabel");
        this.qiXueHuiFu = 0; // 气血回复效果
        this.qiXueHuiFuLabel = document.getElementById("qiXueHuiFuLabel");
        this.duoBi = 0; // 躲避
        this.duoBiLabel = document.getElementById("duoBiLabel");
    }

    merge(other)
    {
        this.qiXue += other.qiXue; // 气血
        this.moFa += other.moFa; // 魔法
        this.huoLi += other.huoLi; // 活力
        this.tiLi += other.tiLi; // 体力
        this.mingZhong += other.mingZhong; // 命中
        this.shangHai += other.shangHai; // 伤害
        this.fangYu += other.fangYu; // 防御
        this.suDu += other.suDu; // 速度
        this.faShang += other.faShang; // 法伤
        this.faFang += other.faFang; // 法防
        this.lingLi += other.lingLi; // 灵力
        this.wuBao += other.wuBao; // 物理暴击等级
        this.chuanCi += other.chuanCi; // 穿刺等级
        this.kuangBao += other.kuangBao; // 狂暴等级
        this.faShuBaoJi += other.faShuBaoJi; // 法术暴击等级
        this.faJie += other.faJie; // 法术伤害结果
        this.fengYin += other.fengYin; // 封印命中等级
        this.zhiLiao += other.zhiLiao; // 治疗能力
        this.kangWuBao += other.kangWuBao; // 抗物理暴击等级
        this.geDang += other.geDang; // 格挡值
        this.kangFaBao += other.kangFaBao; // 抗法术暴击等级
        this.kangFeng += other.kangFeng; // 抵抗封印等级
        this.qiXueHuiFu += other.qiXueHuiFu; // 气血回复效果
        this.duoBi += other.duoBi; // 躲避
    }

    getPercentInfoFromLevel(info, level)
    {
        var res = String(parseInt(info));
        if (level <= 0) {
            res += "(0.00%)";
        } else {
            res += ("(" + String(info * 10.0 / level)+ "%)");
        }
        return res;
    }

    show(level)
    {
        writeLabel(this.qiXueLabel, parseInt(this.qiXue));
        writeLabel(this.moFaLabel, parseInt(this.moFa));
        writeLabel(this.huoLiLabel, parseInt(this.huoLi));
        writeLabel(this.tiLiLabel, parseInt(this.tiLi));
        writeLabel(this.mingZhongLabel, parseInt(this.mingZhong));
        writeLabel(this.shangHaiLabel, parseInt(this.shangHai));
        writeLabel(this.fangYuLabel, parseInt(this.fangYu));
        writeLabel(this.suDuLabel, parseInt(this.suDu));
        writeLabel(this.faShangLabel, parseInt(this.faShang));
        writeLabel(this.faFangLabel, parseInt(this.faFang));
        writeLabel(this.lingLiLabel, parseInt(this.lingLi));
        writeLabel(this.wuBaoLabel, this.getPercentInfoFromLevel(this.wuBao, level));
        writeLabel(this.chuanCiLabel, this.getPercentInfoFromLevel(this.chuanCi, level));
        writeLabel(this.kuangBaoLabel, this.getPercentInfoFromLevel(this.kuangBao, level));
        writeLabel(this.faShuBaoJiLabel, this.getPercentInfoFromLevel(this.faShuBaoJi, level));
        writeLabel(this.faJieLabel, parseInt(this.faJie));
        writeLabel(this.fengYinLabel, this.getPercentInfoFromLevel(this.fengYin, level));
        writeLabel(this.zhiLiaoLabel, parseInt(this.zhiLiao));
        writeLabel(this.kangWuBaoLabel, this.getPercentInfoFromLevel(this.kangWuBao, level));
        writeLabel(this.geDangLabel, parseInt(this.geDang));
        writeLabel(this.kangFaBaoLabel, this.getPercentInfoFromLevel(this.kangFaBao, level));
        writeLabel(this.kangFengLabel, this.getPercentInfoFromLevel(this.kangFeng, level));
        writeLabel(this.qiXueHuiFuLabel, parseInt(this.qiXueHuiFu));
        writeLabel(this.duoBiLabel, parseInt(this.duoBi));
    }
}
