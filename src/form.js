import Rule from "./rule";
import InputValidator from "./input";
import InputRuleMessageException from "./message";
/**
 *  Single Form Validation Class
 *
 */

class FValidate {

	constructor(selector, option){
		this.init(selector, option);
		return this;
	}

	init(selector ,option) {
		const input = document.querySelector(selector);
		this.form = input;
		this.children = [];

		this.option = {
			onInputInvalid : null,
			onInputValid : null,

			onInvalid : null,
			onValid : null,
			
			rule: Rule,
			message: InputRuleMessageException,
			submit: null
		};
		
			
		const mainOption = Object.assign({},this.option, option);
		this.option = mainOption;
		
		this.children = this.form.querySelectorAll('input , textarea , select');
		this.children = this.children.length ? Object.values(this.children): [];
		const inputValidator = [];
		
		if(this.children.length){
			this.children.forEach(function(element){

				inputValidator.push(
					new InputValidator(element, {
						onValid: mainOption.onInputValid,
						onInvalid: mainOption.onInputInvalid,
						rule: mainOption.rule,
						message: mainOption.message
					})
				);
			});
		}
		this.inputValidator = inputValidator;

		this.form.addEventListener("submit", function(e){
			e.preventDefault();

			if(this.isValid()){
				this.option.onValid.bind(this, e);
				return;
			}

			this.option.onInvalid.call(this, this.getErrorBag(), e);
			e.stopPropagation();
		}.bind(this), true)
	}

	isValid () {
		return this.inputValidator.map(function(validator){
			return validator.isValid.bind(validator).apply();
		}).every(function(x){ return x == true;});
	}

	getErrorBag() {
		return this.inputValidator.map(function(validator){
			var message = validator.getErrorMessages.bind(validator).apply();
			message.validator = validator;
			return message;
		});
	}

}

export default FValidate;