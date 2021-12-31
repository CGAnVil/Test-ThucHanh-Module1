function checkExist(n, array) {
    let check = false
    let possition
    for (let i = 0; i < array.length; i++) {
        if (array[i] === n) {
            check = true
            possition = i + 1
        }
    }

    if (check === true) {
        alert(n + ' có trong mảng' + ' ở vị trí thứ : ' + possition)
    } else {
        alert(n + ' không có trong mảng')
    }

}
