//declaration of shape
class shape{
    constructor(){

    }
    area(){
        return ''
    }
}

//circle
class circle extends shape{
    constructor(radius){
        super()
        this.radius=radius
    }
    area(){
        return 22/7*this.radius*this.radius
    }
}

//rectangle
class rectangle extends shape{
    constructor(length, width){
        super()
        this.length=length
        this.width=width
    }
    area(){
        return this.length*this.width
    }
}

//square
class square extends shape{
    constructor(side){
        super()
        this.side=side
    }
    area(){
        return this.side*this.side
    }
}

//triangle
class triangle extends shape{
    constructor(base, height){
        super()
        this.base=base
        this.height=height
    }
    area(){
        return 1/2*this.base*this.height
    }
}

//value - input
var shapes=[new circle(1), new rectangle(2,1), new square(2), new triangle(1,2)]

//function declaration
function allshapes(n){
    var totalarea = 0
    n.forEach(item=> {
       console.log(item, item.area())
       totalarea = totalarea + item.area()
    })
    return totalarea
}

var a = allshapes(shapes)
console.log('Total area = ', a)