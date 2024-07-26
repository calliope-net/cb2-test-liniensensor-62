input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    Wendekreis_cm = 8 * btf.pi()
    btf.comment(btf.btf_text("viertel Drehung Umfang/4"))
    cb2.fahre2MotorenEncoder(
    btf.speedPicker(30),
    btf.speedPicker(-30),
    Wendekreis_cm / 4,
    Wendekreis_cm / 4,
    false
    )
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    hex2 = i2c.i2ctohex(i2c.i2c_eADDR(i2c.eADDR.Relay_x1E), i2c.i2c_eADDR(i2c.eADDR.RGB_16x2_x30), 100)
    basic.showString(hex2)
    basic.showNumber(hex2.length / 2)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    dauerhaft_Knopf_B = !(dauerhaft_Knopf_B)
})
input.onButtonEvent(Button.B, btf.buttonEventValue(ButtonEvent.Hold), function () {
    btf.zeigeBIN(bit.hex8(bit.eHEX8bit.x22), btf.ePlot.hex, 4)
    while (true) {
        if (cb2.readSpursensor(cb2.eDH.dunkel, cb2.eDH.dunkel, true, cb2.eI2C.x22)) {
            cb2.writeMotoren128(btf.speedPicker(100), btf.speedPicker(100))
        } else if (cb2.readSpursensor(cb2.eDH.dunkel, cb2.eDH.hell, false)) {
            cb2.writeMotoren128(btf.speedPicker(0), btf.speedPicker(50))
        } else {
            cb2.writeMotoren128(btf.speedPicker(50), btf.speedPicker(0))
        }
    }
})
input.onButtonEvent(Button.A, btf.buttonEventValue(ButtonEvent.Hold), function () {
    btf.zeigeBIN(bit.hex8(bit.eHEX8bit.x21), btf.ePlot.hex, 4)
    while (true) {
        if (cb2.readSpursensor(cb2.eDH.dunkel, cb2.eDH.dunkel, true, cb2.eI2C.x21)) {
            cb2.writeMotoren128(btf.speedPicker(100), btf.speedPicker(100))
        } else if (cb2.readSpursensor(cb2.eDH.dunkel, cb2.eDH.hell, false)) {
            cb2.writeMotoren128(btf.speedPicker(0), btf.speedPicker(50))
        } else {
            cb2.writeMotoren128(btf.speedPicker(50), btf.speedPicker(0))
        }
    }
})
let bWiederholung = false
let dauerhaft_Knopf_B = false
let hex2 = ""
let Wendekreis_cm = 0
cb2.writeReset()
btf.zeigeBIN(cb2.readSpannung(), btf.ePlot.bcd, 1)
btf.zeigeBIN(cb2.readVersionArray()[1], btf.ePlot.bcd, 2)
btf.comment(btf.btf_text("calliope-net/cb2-test-liniensensor-62"))
basic.forever(function () {
    if (dauerhaft_Knopf_B) {
        cb2.beispielSpurfolger16(
        192,
        160,
        31,
        0,
        bWiederholung,
        true,
        20,
        cb2.eI2C.x22
        )
        bWiederholung = true
    } else if (bWiederholung) {
        dauerhaft_Knopf_B = false
        bWiederholung = false
        cb2.writeMotorenStop()
    }
})
