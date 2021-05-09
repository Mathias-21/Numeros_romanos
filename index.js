let romanNumber = document.getElementById('romanNumber')
let realNumber = document.getElementById('realNumber')
let converterBttn = document.getElementById('converterBttn')
let m, d, c, l, x, v, i, i0, i1, i2
let res = 0

romanNumber.addEventListener('keydown', eventKey)

function eventKey() {
    let key = event.keyCode
    switch (key) {
        case 13:
            toConvert()
    }
}

function toConvert() {
    m = 1000
    d = 500
    c = 100
    l = 50
    x = 10
    v = 5
    i = 1

    for (i0 = 0, i1 = 1, i2 = -1; i0 < romanNumber.value.length; i0++, i1++, i2++) {
        if (romanNumber.value.substr(i0, 1) === 'i' || romanNumber.value.substr(i0, 1) === 'I') {
            if ((romanNumber.value.substr(i0, 1) === 'i' || romanNumber.value.substr(i0, 1) === 'I') && (romanNumber.value.substr(i1, 1) === 'v' || romanNumber.value.substr(i1, 1) === 'V')) {
                res += v - i
            } else if ((romanNumber.value.substr(i0, 1) === 'i' || romanNumber.value.substr(i0, 1) === 'I') && (romanNumber.value.substr(i1, 1) === 'x' || romanNumber.value.substr(i1, 1) === 'X')) {
                res += x - i
            } else if (romanNumber.value.substr(i0, 1) === 'i' || romanNumber.value.substr(i0, 1) === 'I') {
                res += i
            }
        }
        if (romanNumber.value.substr(i0, 1) === 'v' || romanNumber.value.substr(i0, 1) === 'V') {
            if ((romanNumber.value.substr(i0, 1) === 'v' || romanNumber.value.substr(i0, 1) === 'V') && (romanNumber.value.substr(i2, 1) === 'i' || romanNumber.value.substr(i2, 1) === 'I')) {
                res += 0
            } else if (romanNumber.value.substr(i0, 1) === 'v' || romanNumber.value.substr(i0, 1) === 'V') {
                res += v
            }
        }
        if (romanNumber.value.substr(i0, 1) === 'x' || romanNumber.value.substr(i0, 1) === 'X') {
            if ((romanNumber.value.substr(i0, 1) === 'x' || romanNumber.value.substr(i0, 1) === 'X') && (romanNumber.value.substr(i1, 1) === 'l' || romanNumber.value.substr(i1, 1) === 'L')) {
                res += l - x
            } else if ((romanNumber.value.substr(i0, 1) === 'x' || romanNumber.value.substr(i0, 1) === 'X') && (romanNumber.value.substr(i1, 1) === 'c' || romanNumber.value.substr(i1, 1) === 'C')) {
                res += c - x
            } else if ((romanNumber.value.substr(i0, 1) === 'x' || romanNumber.value.substr(i0, 1) === 'X') && (romanNumber.value.substr(i2, 1) === 'i' || romanNumber.value.substr(i2, 1) === 'I')) {
                res += 0
            } else {
                res += x
            }
        }
        if (romanNumber.value.substr(i0, 1) === 'l' || romanNumber.value.substr(i0, 1) === 'L') {
            if ((romanNumber.value.substr(i0, 1) === 'l' || romanNumber.value.substr(i0, 1) === 'L') && (romanNumber.value.substr(i2, 1) === 'x' || romanNumber.value.substr(i2, 1) === 'X')) {
                res += 0
            } else if (romanNumber.value.substr(i0, 1) === 'l' || romanNumber.value.substr(i0, 1) === 'L') {
                res += l
            }
        }
        if (romanNumber.value.substr(i0, 1) === 'c' || romanNumber.value.substr(i0, 1) === 'C') {
            if ((romanNumber.value.substr(i0, 1) === 'c' || romanNumber.value.substr(i0, 1) === 'C') && (romanNumber.value.substr(i1, 1) === 'd' || romanNumber.value.substr(i1, 1) === 'D')) {
                res += d - c
            } else if ((romanNumber.value.substr(i0, 1) === 'c' || romanNumber.value.substr(i0, 1) === 'C') && (romanNumber.value.substr(i1, 1) === 'm' || romanNumber.value.substr(i1, 1) === 'M')) {
                res += m - c
            } else if ((romanNumber.value.substr(i0, 1) === 'c' || romanNumber.value.substr(i0, 1) === 'C') && (romanNumber.value.substr(i2, 1) === 'x' || romanNumber.value.substr(i2, 1) === 'X')) {
                res += 0
            } else {
                res += c
            }
        }
        if (romanNumber.value.substr(i0, 1) === 'd' || romanNumber.value.substr(i0, 1) === 'D') {
            if ((romanNumber.value.substr(i0, 1) === 'd' || romanNumber.value.substr(i0, 1) === 'D') && (romanNumber.value.substr(i2, 1) === 'c' || romanNumber.value.substr(i2, 1) === 'C')) {
                res += 0
            } else if (romanNumber.value.substr(i0, 1) === 'd' || romanNumber.value.substr(i0, 1) === 'D') {
                res += d
            }
        }
        if (romanNumber.value.substr(i0, 1) === 'm' || romanNumber.value.substr(i0, 1) === 'M') {
            if ((romanNumber.value.substr(i0, 1) === 'm' || romanNumber.value.substr(i0, 1) === 'M') && (romanNumber.value.substr(i2, 1) === 'c' || romanNumber.value.substr(i2, 1) === 'C')) {
                res += 0
            } else if (romanNumber.value.substr(i0, 1) === 'm' || romanNumber.value.substr(i0, 1) === 'M') {
                res += m
            }
        }
    }

    realNumber.setAttribute("value", res)
    romanNumber.value = ''
    romanNumber.focus()
    res = 0
}

converterBttn.addEventListener('click', toConvert)