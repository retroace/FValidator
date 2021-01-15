import Rule from "./rule";
import InputRuleMessageException from "./message";

/**
 *  Single Input Field Validation
 *
 */
 class InputValidator {
 	constructor(selector ,option){
 		this.option = {
 			onInvalid : null,
 			onValid : null,
 			rule: Rule,
 			message: InputRuleMessageException
 		};

 		this.option = Object.assign({},this.option, option);

 		this.init(selector, this.option);
 		return this;

 	}

 	init(selector ,option) {
 		if(typeof selector == "string" ){
 			const input = document.querySelector(selector);
 			this.el = input;
 		}else{
 			this.el = selector;
 		}
 		
 		this.validatorAttribute = {
 			submit: null,
 			select: null,
 			type: null,
 			format: null
 		};

 		this.rule = new this.option.rule(this.el);
 		this.message = new this.option.message();

 		this.form = this.el.closest('form');

 		if(this.el.dataset.fvalidSubmit){
 			this.validatorAttribute.submit = this.el.dataset.fvalidSubmit.split("|");
 			this.submit(this.validatorAttribute.submit);
 		}
 		if(this.el.dataset.fvalidSelect){
 			this.validatorAttribute.select = this.el.dataset.fvalidSelect.split("|");
 			this.select(this.validatorAttribute.select);
 		}
 		if(this.el.dataset.fvalidType){
 			this.validatorAttribute.type = this.el.dataset.fvalidType.split("|");
 			this.type(this.validatorAttribute.type);
 		}

 		if(this.el.dataset.fvalidFormat){
 			this.validatorAttribute.format = this.el.dataset.fvalidFormat.split("|");
 			this.format(this.validatorAttribute.format);
 		}
 	}


 	format() {
 		this.formatArgs = arguments[0];
 		var _this = this;
 		this.el.addEventListener("keyup", function(e){
 			var _this = this;
 			return this.typeArgs.map(function(fnName){
 				var functionAndArgs = fnName.split(":");
 				if(functionAndArgs[0] == "undefined" || typeof _this['rule'][functionAndArgs[0]] != "function"){
 					console.error(functionAndArgs[0] +" must be a match with rule");
 					return;
 				}
 				return _this['rule'][functionAndArgs[0]](functionAndArgs.length == 2 ? functionAndArgs[1]: null);
 			});
 		}.bind(_this));
 	}


 	getMessage(functionName, option){
 		var message = this.message[functionName];
 		if(message == undefined || message == null || message.length <= 1){
 			return null;
 		}

 		if(option.title){
 			message = message.replaceAll(":title", option.title);
 		}

 		if(option.value){
 			message = message.replaceAll(":value", option.value);
 		}

 		if(option.option){
 			message = message.replaceAll(":option", option.option);
 		}
 		return message;
 	}

 	validateGivenArgs(e){
 		var _this = this;
 		if(this.args == null || !this.args.length){
 			return [
	 			{
	 				valid: true,
	 				type: undefined
	 			}
 			];
 		}
 		return this.args.map(function(fnName){
 			var functionAndArgs = fnName.split(":");
 			var functionName = functionAndArgs[0];
 			var functionParam = functionAndArgs[1];

 			if(functionName == "undefined" || typeof _this['rule'][functionName] != "function"){
 				console.error(functionName +" must be a function");
 				return;
 			}

 			functionParam = functionAndArgs.length == 2 ? functionParam: null;
 			if(_this['rule'][functionName](functionParam)) {
 				return {
 					valid: true,
 					type: functionName
 				};
 			}
 			
 			var messageOption = {
 				title: _this.getFormTitle(),
 				value: _this.el.value,
 				option: functionParam
 			};

 			return {
 				valid: false,
 				message: _this.getMessage(functionName, messageOption),
 				type: functionName
 			};
 		});

 	}

 	inputValidation(e){
 		var _this = this;

 		var valid = this.validateGivenArgs.bind(_this).call();


 		var isValid = valid.every(function(item){ return item.valid === true;});

 		if(isValid){
 			if(this.option.onValid){ this.option.onValid.bind(_this.el).call(); return isValid;}
 		}

 		var message = valid
 		.map(function(o) {return o.message == undefined ? null: o.message;})
 		.filter(function(x){ return x!= null;});

 		if(this.option.onInvalid && message.length) this.option.onInvalid.call(_this.el,message);
 		return isValid;
 	}

 	getFormTitle(){
 		var title = this.el.dataset.title;
 		if(title == undefined){			
 			title = this.el.parentNode.querySelector('label') ? this.el.parentNode.querySelector('label').textContent : this.el.name;
 		}
 		return title;
 	}

 	// Events
 	type() {
 		this.args = arguments[0];
 		var _this = this;
 		this.el.addEventListener("keyup", this.inputValidation.bind(_this));
 	}


 	select() {
 		this.args = arguments[0];
 		var _this = this;
 		this.el.addEventListener("change", this.inputValidation.bind(_this));
 	}



 	submit() {
 		this.args = arguments[0];
 		var _this = this;
 		this.form.addEventListener("submit", this.inputValidation.bind(_this));
 	}
 	//End Events



 	isValid(){
 		this.args = this.validatorAttribute.submit ? this.validatorAttribute.submit : this.validatorAttribute.type;
 		var _this = this;

 		var valid = this.validateGivenArgs.bind(_this).call();
 		return valid.every(function(item){ return item.valid === true;});	
 	}


 	getErrorMessages(){
 		this.args = this.validatorAttribute.submit ? this.validatorAttribute.submit : this.validatorAttribute.type;
 		var _this = this;

 		var valid = this.validateGivenArgs.bind(_this).call();
 		return valid
 		.map(function(o) {
 			o.valid == undefined; 
 			return o.message == undefined ? null:  {
 				title: o.title,
 				message: o.message,
 				type: o.type
 			};
 		})
 		.filter(function(x){ return x!= null;});
 	}

 }

 export default InputValidator;