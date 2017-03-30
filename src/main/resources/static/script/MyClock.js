/**
 * Created by Kamil on 2017-03-29.
 */

function timeCounter() {

    var todayTime = new Date();

    var day = todayTime.getDate();
    var month = todayTime.getMonth()+1;
    if (month<10)
        month = "0" + month;
    var year = todayTime.getFullYear();

    var hour = todayTime.getHours();
    if (hour<10)
        hour = "0" + hour;
    var minute = todayTime.getMinutes();
    if (minute<10)
        minute = "0" + minute;
    var second = todayTime.getSeconds();
    if (second<10)
        second = "0" + second;

//			każemy skryptowi znaleźć element (dowolny) z naszego htmla i podmienić całą jego zawartość
//			na to co znajduje się po znaku =
    document.getElementById("myClock").innerHTML = day + "/" + month + "/" + year + " | " + hour
        + ":" + minute + ":" + second;

    setTimeout("timeCounter()", 1000);
}