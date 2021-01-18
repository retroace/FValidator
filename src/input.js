'use strict';

import Rule from "./rule";
import InputRuleMessageException from "./message";

/**
 * Construct a new Input Validator instance by passing the configuration object
 *
 * @param {String | HTMLElement} element
 * @param {Object} opts
 */
const InputValidator = function (selector ,option = {}){
	let owner = this;
	
	if(typeof selector == "string" ){
		const input = document.querySelector(selector);
		owner.el = input;
	}else{
		owner.el = selector;
	}
	
	owner.setOption(option);

	if(typeof owner.option.rule != 'function' && typeof owner.option.rule != 'object') {
		console.error("Invalid rule instance passed");
	}
	
	if(typeof owner.option.message != 'function' && typeof owner.option.message != 'object') {
		console.error("Invalid message instance passed");
	}

	owner.rule = new owner.option.rule(owner.el);
	owner.message = new owner.option.message();
	owner.form = owner.el.closest('form');
	
	owner.init();
	return this;
	
};

InputValidator.prototype = {
	init: function() {
	
		this.validatorAttribute = {
			submit: null,
			select: null,
			type: null,
			format: null
		};
		
		const dataset = this.el.dataset;
		
		if(dataset.fvalidSubmit){
			this.validatorAttribute.submit = dataset.fvalidSubmit.split("|");
			this.submit(this.validatorAttribute.submit);
		}

		if(dataset.fvalidSelect){
			this.validatorAttribute.select = dataset.fvalidSelect.split("|");
			this.select(this.validatorAttribute.select);
		}
		if(dataset.fvalidType){
			this.validatorAttribute.type = dataset.fvalidType.split("|");
			this.type(this.validatorAttribute.type);
		}
	},
	
	setOption: function(option){
		this.defaultOption = {
			onInvalid : null,
			onValid : null,
			rule: Rule,
			message: InputRuleMessageException
		};
		
		this.option = Object.assign({},this.defaultOption, option);
		return this.option;
	},
	
	getMessage: function(functionName, option){
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
	},
	
	validateGivenArgs: function(e){
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
		
	},
	
	inputValidation: function(e){
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
	},
	
	getFormTitle: function(){
		var title = this.el.dataset.title;
		if(title == undefined){			
			title = this.el.parentNode.querySelector('label') ? this.el.parentNode.querySelector('label').textContent : this.el.name;
		}
		return title;
	},
	
	// Events
	type: function() {
		this.args = arguments[0];
		var _this = this;
		this.el.addEventListener("keyup", this.inputValidation.bind(_this));
	},
	
	
	select: function() {
		this.args = arguments[0];
		var _this = this;
		this.el.addEventListener("change", this.inputValidation.bind(_this));
	},
	
	
	
	submit: function() {
		this.args = arguments[0];
		var _this = this;
		this.form.addEventListener("submit", this.inputValidation.bind(_this));
	},
	//End Events
	
	
	
	isValid: function(){
		this.args = this.validatorAttribute.submit ? this.validatorAttribute.submit : this.validatorAttribute.type;
		var _this = this;
		
		var valid = this.validateGivenArgs.bind(_this).call();
		return valid.every(function(item){ return item.valid === true;});	
	},
	
	
	getErrorMessages: function(){
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