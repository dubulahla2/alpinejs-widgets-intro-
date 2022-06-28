function enoughAirtime(phone, airtime) {
    var call = 1.88
    var data = 12.00
    var sms = 0.75
    var splitPhone = phone.split(",")
    for (var i = 0; i < splitPhone.length; i++) {
        if (splitPhone[i] == "call") {
            airtime -= call
        } else if (splitPhone[i] == "data") {
            airtime -= data
        } else if (splitPhone[i] == "sms") {
            airtime -= sms
        }
        var x = airtime.toFixed(2)
    }
    var a = 0
    var b = a.toFixed(2)
    if (x < 0) {
        return "R" + b
    } else {
        return "R" + x
    }
}
