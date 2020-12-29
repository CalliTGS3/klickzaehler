input.onButtonPressed(Button.A, function () {
    Zähler += 1
})
input.onButtonPressed(Button.AB, function () {
    Zähler = 0
})
input.onButtonPressed(Button.B, function () {
    Zähler += 0 - 1
})
let Zähler = 0
Zähler = 0
basic.forever(function () {
    basic.showNumber(Zähler)
})
