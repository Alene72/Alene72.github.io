function clearElement(ele)
{
    ele.innerHTML = "";
}

function writeLabel(label, val)
{
    label.value = val;
    label.innerHTML = val;
    label.textContent = String(val);
}

function getSelectValue(selectId)
{
    var select = document.getElementById(selectId);
    var idx = select.selectedIndex;
    return select.options[idx].value;
}

function disableBtn(btnId) {
    var btn = document.getElementById(btnId);
    btn.disabled = true;
}

function enableBtn(btnId) {
    var btn = document.getElementById(btnId);
    btn.disabled = false;
}

function initLevel()
{
    var levelSelect = document.getElementById("levelSelect");
    clearElement(levelSelect);
    for(var i = 0; i <= 175; i++) {
        var opt = document.createElement("option");
        opt.value = i;
        opt.innerHTML = i;
        levelSelect.appendChild(opt);
    }
    initFeiShengs(Character.getInstance().getFeiShengs());
}

function onLevelChange()
{
    var levelSelect = document.getElementById("levelSelect");
    var levelIndex = levelSelect.selectedIndex;
    var level = parseInt(levelSelect.options[levelIndex].value);
    Character.getInstance().setLevel(level);
    initFeiShengs(Character.getInstance().getFeiShengs());
    onFeiShengChange();
}

function initFeiShengs(feiShengs)
{
    var feishengSelect = document.getElementById("feishengSelect");
    clearElement(feishengSelect);
    feiShengs.forEach(addFeiSheng);
    function addFeiSheng(value) {
        var opt = document.createElement("option")
        opt.value = value;
        opt.innerHTML = value;
        feishengSelect.appendChild(opt);
    }
}

function onFeiShengChange()
{
    var feishengSelect = document.getElementById("feishengSelect");
    var feishengIndex = feishengSelect.selectedIndex;
    var feiShengStatus = feishengSelect.options[feishengIndex].value;
    Character.getInstance().setFeiShengStatus(feiShengStatus);
}

function initMenPai()
{
    var menPaiSelect = document.getElementById("menPaiSelect");
    clearElement(menPaiSelect);
    var menpais = ["大唐官府", "方寸山", "女儿村", "神木林", "天机城", "化生寺",
                  "普陀山", "天宫", "龙宫", "五庄观", "凌波城", "花果山",
                  "阴曹地府", "魔王寨", "盘丝洞", "无底洞", "狮驼岭", "女魃墓", "东海渊"]
    menpais.forEach(addMenPai);
    function addMenPai(value) {
        var opt = document.createElement("option")
        opt.value = value;
        opt.innerHTML = value;
        menPaiSelect.appendChild(opt);
    }
}

function onMenPaiChange()
{
    var menPaiSelect = document.getElementById("menPaiSelect");
    var menPaiIndex = menPaiSelect.selectedIndex;
    var menPai = menPaiSelect.options[menPaiIndex].value;
    Character.getInstance().setMenPai(menPai);
}

function initJiYuan()
{
    var jiYuanSelect = document.getElementById("jiYuanSelect");
    clearElement(jiYuanSelect);
    for(var i = 0; i <= 60; i++) {
        var opt = document.createElement("option");
        opt.value = i;
        opt.innerHTML = i;
        jiYuanSelect.appendChild(opt);
    }
}

function onJiYuanChange()
{
    var jiYuanSelect = document.getElementById("jiYuanSelect");
    var jiYuanIndex = jiYuanSelect.selectedIndex;
    var jiYuan = parseInt(jiYuanSelect.options[jiYuanIndex].value);
    Character.getInstance().setJiYuan(jiYuan);
}

function onZuoQiLevelChange()
{
    var zuoQiLevelSelect = document.getElementById("zuoQiLevelSelect");
    var zuoQiLevelIndex = zuoQiLevelSelect.selectedIndex;
    var zuoQiLevel = parseInt(zuoQiLevelSelect.options[zuoQiLevelIndex].value);
    Character.getInstance().getZuoQi().setLevel(zuoQiLevel);
}

function onZuoQiChengZhangChange()
{
    var zuoQiChengZhangInput = document.getElementById("zuoQiChengZhangInput");
    var zuoQiChengZhang = parseFloat(zuoQiChengZhangInput.value);
    if (zuoQiChengZhang < 0.98) {
        zuoQiChengZhang = 0.98;
    }
    if (zuoQiChengZhang > 2.3433) {
        zuoQiChengZhang = 2.3433;
    }
    zuoQiChengZhangInput.value = zuoQiChengZhang;
    Character.getInstance().getZuoQi().setChengZhang(zuoQiChengZhang);
}

function onZuoQiZhuShuXingChange()
{
    var zuoQiZhuShuXingSelect = document.getElementById("zuoQiZhuShuXingSelect");
    var zuoQiZhuShuXingIndex = zuoQiZhuShuXingSelect.selectedIndex;
    var zuoQiZhuShuXing = zuoQiZhuShuXingSelect.options[zuoQiZhuShuXingIndex].value;
    Character.getInstance().getZuoQi().setZhuShuXing(zuoQiZhuShuXing);
}

function onShengHuoJiNengChange()
{
    Character.getInstance().updateTotalShuXingPanel();
}

function onFaBaoSelectChange()
{
    Character.getInstance().updateTotalShuXingPanel();
}

function onShiMenJiNengChange()
{
    Character.getInstance().updateTotalShuXingPanel();
}

function onQianNengGuoChange()
{
    Character.getInstance().updateQianNeng();
}
