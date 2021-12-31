function firstDegreeEquation(a,b){
    let x
    if(a === 0){
        if(b===0){
            alert("phương trình vô số nghiệm")
        }else {
            alert('Phương trình vô nghiệm')
        }
    }else if(b === 0){
        alert('Phương trình vô nghiệm')
    }else   {
        x = -b/a
        return x
    }
}