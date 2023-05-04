class FaBao {
    constructor(level)
    {
        this.level = level;
        this.faBaoSelects = ["无", "单风袋", "双风袋", "凌波仙符"];
        this.suDuJiaChengs = [0, 25, 50, 45]
        this.faBaoSelectEle = document.getElementById("fengDaiOrXianFuSelect");
        this.update();
    }

    setLevel(level)
    {
        if (this.level != level) {
            this.level = level;
            this.update();
        }
    }

    getJiaChengShuXing()
    {
        var shuXing = new ShuXing();
        if (this.level >= 60) {
            var currFaBao = this.faBaoSelectEle.selectedIndex;
            shuXing.suDu = parseInt(this.suDuJiaChengs[currFaBao]);
        }
        return shuXing;
    }

    update()
    {
        if (this.level < 60) {
            return;
        }
        clearElement(this.faBaoSelectEle);
        for (var i = 0; i < this.faBaoSelects.length; i++) {
            var opt = document.createElement("option");
            opt.value = this.faBaoSelects[i];
            opt.innerHTML = this.faBaoSelects[i];
            this.faBaoSelectEle.appendChild(opt);
        }
    }
}
