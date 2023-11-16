const shape = {
    circle : {
radius:'15',
color:'blue'
    },
    rectangle: {
        length:'20',
        height:'40',
        color:'green'
    },

    areaofcircle: function() {
        console.log(`area of circle `, 3.14*this.circle.radius*this.circle.radius);
    },
    areaofrect: function() {
        console.log(`area ofrectangle `, this.rectangle.length * this.rectangle.height);
    }

}
shape.areaofcircle()
shape.areaofrect()