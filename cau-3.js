function checkVowel(array) {
    let vowel = ['a', 'o', 'e', 'u', 'i']
    let check = false
    let count = 0
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < vowel.length; j++) {
            if (array[i] === vowel[j]) {
                check = true
                count++
            }
        }
    }
    if (check === true) {
        alert('Mảng có ' + count + ' nguyên âm')
    } else {
        alert('Mảng không có nguyên âm')
    }
}