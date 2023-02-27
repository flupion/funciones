function encenderLed (texto: string) {
    if (texto == "Sí") {
        basic.showIcon(IconNames.Heart)
    }
}
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        encenderLed("Sí")
    } else {
        basic.showIcon(IconNames.SmallHeart)
    }
})
