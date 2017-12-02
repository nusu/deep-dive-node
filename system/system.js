'use strict';

class Submissions {


	constructor(req, res){
		this.req = req;
		this.res = res;
	}

	getForm(id, callback){
		if(id == 1)this.form = "yeni-form";
		callback(this.form);
	}

	getAccount(id, callback){
		if(!this.form){
			callback(false);
			return false;
		}
		callback(this.form);
	}


}


var System = new Submissions(1,1);

System.getForm(1, function(callback){
	if(callback){
		console.log(callback);
	}else{
		console.log("yarra yerik");
	}
});


System.getAccount(1, function(callback){
	if(callback){
		console.log(callback);
	}else{
		console.log("acc yok");
	}
})


//Callback as second parameter
// if (typeof isMultiple === 'function') {
//   cb = isMultiple;
//   isMultiple = false;
// }