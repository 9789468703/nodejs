const add=require('./add');
const fs=require('fs');
//console.log(add(2,3));
//console.log(fs);
fs.appendFile('./read.txt',"\n{encoding:'utf8'}" ,(err)=>{
	if(err){
	console.log(err);
	}else{
		console.log('ddd');
	}
}
);
console.log(process);
console.log('here');