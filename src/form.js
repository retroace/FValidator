'use strict';

import Rule from "./rule";
import InputValidator from "./input";
import InputRuleMessageException from "./message";


/**
 * Construct a new form validator instance by passing the configuration object
 *
 * @param {String | HTMLElement} element
 * @param {Object} opts
 */
const FValidate = function(selector, option = {}){
	let owner = this;
	const input = document.querySelector(selector);
	owner.form = input;
	owner.children = [];
	
	owner.setOptions.bind(owner);
	owner.init.bind(owner);

	owner.setOptions(option);
	
	owner.children = owner.form.querySelectorAll('input , textarea , select');
	owner.children = owner.children.length ? Object.values(owner.children): [];
	
	owner.init();

	return owner;
};


FValidate.prototype = {
	init: function() {
		const inputValidator = [];
		const _this = this;

		if(this.children.length){
			this.children.forEach(function(element){
				let validator = new InputValidator(element, {
					onValid: _this.option.onInputValid,
					onInvalid: _this.option.onInputInvalid,
					rule: _this.option.rule,
					message: _this.option.message
				});
				inputValidator.push(validator);
			});
		}
		this.inputValidator = inputValidator;
		
		this.form.addEventListener("submit", function(e){
			e.preventDefault();
			
			if(this.isValid()){
				_this.option.onValid.bind(_this, e);
				return;
			}
			
			_this.option.onInvalid.call(_this, _this.getErrorBag(), e);
			e.stopPropagation();
		}.bind(this), true);
	},

	setOptions: function (option){
		this.defaultOption = {
			onInputInvalid : null,
			onInputValid : null,
			
			onInvalid : null,
			onValid : null,
			
			rule: Rule,
			message: InputRuleMessageException,
			submit: null
		};

		this.option = Object.assign({},this.defaultOption, option);
		return this;
	},

	isValid: function () {
		return this.inputValidator.map(function(validator){
			return validator.isValid.bind(validator).apply();
		}).every(function(x){ return x == true;});
	},
	
	getErrorBag: function() {
		return this.inputValidator.map(function(validator){
			var message = validator.getErrorMessages.bind(validator).apply();
			message.validator = validator;
			return message;
		});
	}
	
}

export default FValidate;