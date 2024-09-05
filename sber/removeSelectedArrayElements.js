let indices = employee.reduce(function(prev,cur,index){
	if (cur[0] == "hireDate") prev.push(index);
	return prev;
}, []);
for (let i = indices.length - 1; i >= 0; i--) {
	employee.splice(indices[i],1);
}
employee.push(["jobName", "IT PROG"]);
console.log(employee);