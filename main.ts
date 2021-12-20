/**
 * Download this code and connect the device to the computer.
 * 
 * Press A and B to select the radio group or change it in the code.
 */
// Send all received packets to serial output
radio.onReceivedNumber(function (receivedNumber) {
    radio.writeReceivedPacketToSerial()
    led.toggle(randint(0, 4), randint(0, 4))
})
// Decrement radio group by 1
input.onButtonPressed(Button.A, function () {
    group = Math.max(0, group - 1)
    radio.setGroup(group)
    led.stopAnimation()
    basic.showNumber(group)
})
// Increment radio group by 1
input.onButtonPressed(Button.B, function () {
    group = Math.min(255, group + 1)
    radio.setGroup(group)
    led.stopAnimation()
    basic.showNumber(group)
})
let group = 0
group = 128
radio.setGroup(group)
