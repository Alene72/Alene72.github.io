class QianNengGuo {
    constructor(level, feiShengStatus)
    {
        this.level = level;
        this.feiShengStatus = feiShengStatus;
        this.qianNengGuoSelect = document.getElementById("qianNengGuoSelect");
        this.upperBound = this.getQianNengGuoUpperBound();
        this.update();
    }

    getNum()
    {
        return parseInt(getSelectValue("qianNengGuoSelect"));
    }

    setLevel(level)
    {
        if (this.level != level) {
            this.level = level;
            var upperBound = this.getQianNengGuoUpperBound();
            if (this.upperBound != upperBound) {
                this.upperBound = upperBound;
                this.update();
            }
        }
    }
    setFeiShengStatus(feiShengStatus)
    {
        if (this.feiShengStatus != feiShengStatus) {
            this.feiShengStatus = feiShengStatus;
            var upperBound = this.getQianNengGuoUpperBound();
            if (this.upperBound != upperBound) {
                this.upperBound = upperBound;
                this.update();
            }
        }
    }

    getQianNengGuoUpperBound()
    {
        if (this.level < 60) {
            return 0;
        }
        if (this.level < 90) {
            return 50;
        }
        if (this.level < 155) {
            return 100;
        }
        if (this.level == 155) {
            if (this.feiShengStatus == "渡劫") {
                return 150;
            } else {
                return 100;
            }
        }
        if (this.level < 170) {
            return 150;
        }
        return 200;
    }

    update()
    {
        clearElement(this.qianNengGuoSelect);
        for(var i = 0; i <= this.upperBound; i++) {
            var opt = document.createElement("option");
            opt.value = i;
            opt.innerHTML = i;
            this.qianNengGuoSelect.appendChild(opt);
        }
    }
}