
var Employees = [{
	name : "Nutan",
	age : 24,
	salary : 10000,
	address : {
		city : "Bangalore",
		State : "Karnataka",
		pincode : "560043"
	}
},
{
	name : "Bingu",
	age : 28,
	salary : 10000,
	address : {
		city : "Bangalore",
		State : "Karnataka",
		pincode : "560043"
	}
},
{
	name : "Manju",
	age : 29,
	salary : 10000,
	address : {
		city : "Bangalore",
		State : "Karnataka",
		pincode : "560043"
	}
},
{
	name : "Pinto",
	age : 30,
	salary : 10000,
	address : {
		city : "Bangalore",
		State : "Karnataka",
		pincode : "560043"
	}
},
{
	name : "Mintu",
	age : 34,
	salary : 10000,
	address : {
		city : "Bangalore",
		State : "Karnataka",
		pincode : "560043"
	}
},]

for(var i=0;i<Employees.length;i++){

	console.log("***********Employee " +(i+1) +" Details ************")

	console.log("Name : " +Employees[i].name);
	console.log("age : " +Employees[i].age);
	console.log("salary : " +Employees[i].salary);
	console.log("city : " +Employees[i].address.city);
	console.log("state : " +Employees[i].address.State);
	console.log("pincode : " +Employees[i].address.pincode);

}

