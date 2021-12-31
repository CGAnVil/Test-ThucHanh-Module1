class Animal{
    _name;
    _weight;
    constructor(name, weight) {
        this._name = name;
        this._weight = weight
    }
    set name(name){
        this._name = name
    }
    get name(){
        return this._name
    }
    set weight(weight){
        this._weight = weight
    }
    get weight(){
        return this._weight
    }
    toString(){
        document.write('Con ' + this._name + ' có cân nặng là: '+this._weight+' kg<br/>' )
    }
}
