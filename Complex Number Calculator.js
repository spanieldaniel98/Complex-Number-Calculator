function Complex(real, imaginary) {
    
	this.real = real;
	this.imaginary = imaginary;
	
	this.magnitude = function(){
		return (Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imaginary, 2)));
	}
	
	this.print = function(){
		alert(this.real + " + " + this.imaginary + "i");
	}
	
} 

Complex.add = function(x, y){
	return new Complex(x.real + y.real, x.imaginary + y.imaginary);
}

Complex.subtract = function(x, y){
	return new Complex((x.real - y.real), (x.imaginary - y.imaginary));
}

Complex.multiply = function(x, y){
	return new Complex((x.real * y.real - x.imaginary * y.imaginary), (x.imaginary * y.real + x.real * y.imaginary));
}

Complex.divide = function(x, y){
	return new Complex(((x.real * y.real + x.imaginary * y.imaginary) / (Math.pow(y.real, 2) + Math.pow(y.imaginary, 2))), ((x.imaginary * y.real - x.real * y.imaginary) / (Math.pow(y.real, 2) + Math.pow(y.imaginary, 2))));
}

z1 = new Complex(1, 1);
z2 = new Complex(1, 1);

alert(z1.magnitude());
alert(z2.magnitude());

z3 = Complex.add(z1, z2);
z3.print();

z4 = Complex.subtract(z1, z2);
z4.print();

z5 = Complex.multiply(z1, z2);
z5.print();

z6 = Complex.divide(z1, z2)
z6.print();