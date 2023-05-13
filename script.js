//your JS code here. If required.
const student = {
	name: 'Rahul',
	class: 12,
	section:'c'
}

Object.prototype.getKeys = function () {
	return Object.keys(this);
}

console.log(student.getKeys())