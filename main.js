function updateclock() {

    // date
    let now = new Date();
    let daynum = now.getDay();
    months = now.getMonth();
    dt = now.getDate();
    yr = now.getFullYear();

    //timetravel
    hr = now.getHours();
    min = now.getMinutes();
    sec = now.getSeconds();
    //timeperiod
    pr = `Am`;
    if (hr == 0) {
        hr = 12;
    }
    if (hr>12) {
        hr = hr-12;
        pr = `PM`;
    }

    // number digits
    Number.prototype.pad = function(digits){
        for (var i = this.toString(); i.length < digits; i=0+i);
        return i;
    }

    let allmonths = [`January`,`Febrary`,`March`,`April`,`may`,`June`,`July`,`August`,`September`,`October`,`November`,`December`];
    let allweeks = [`Sunday`,`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`];
    let allids = [`dayname`,`monthname`,`dt`,`yr`,`hr`,`min`,`sec`,`pr`];
    let allvalues = [allweeks[daynum],allmonths[months],dt.pad(2),yr,hr.pad(2),min.pad(2),sec.pad(2),pr];
    for (let index = 0; index < allids.length; index++) {
        document.getElementById(allids[index]).firstChild.nodeValue = allvalues[index];
    }
}

function initclock() {
    updateclock();
    window.setInterval(`updateclock()`,1);
}