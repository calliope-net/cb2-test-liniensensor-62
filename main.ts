input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    btf.zeigeBIN(33, btf.ePlot.hex, 4)
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
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    hex2 = i2c.i2ctohex(i2c.i2c_eADDR(i2c.eADDR.Relay_x1E), i2c.i2c_eADDR(i2c.eADDR.RGB_16x2_x30), 100)
    basic.showString(hex2)
    basic.showNumber(hex2.length / 2)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    btf.zeigeBIN(34, btf.ePlot.hex, 4)
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
let hex2 = ""
cb2.writeReset()
btf.zeigeBIN(cb2.readSpannung(), btf.ePlot.bcd, 1)
btf.zeigeBIN(cb2.readVersionArray()[1], btf.ePlot.bcd, 2)
btf.comment(btf.btf_text("calliope-net/cb2-test-liniensensor-62"))
