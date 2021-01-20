import Rule from "./rule";
import InputRuleMessageException from "./message";
import {formatString} from "./util/Transformers";

/**
 *  Single Input Field Validation
 *
 */
 
 class Transform {
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
			transform: null,
		};

		this.rule = new this.option.rule(this.el);
		this.message = new this.option.message();

		if(this.el.dataset.fvalidTransform){
			this.validatorAttribute.transform = this.el.dataset.fvalidTransform.split("|");
			this.transform(this.validatorAttribute.transform);
		}
		this.shortcodes = {

			"N": {
				type:"number",
				charcodes: ["48-57"] // Numeric Charcodes
			},
			"X": {
				type:"all",
				charcodes: null // All Charcodes
			},
			"A": {
				type:"alphabet",
				charcodes: ["65-90", "97-122"] // Alphabetic Charcodes
			}
		};
	}

	keyDownEvent(e) {
		var _this = this;
		const validFormat = _this.formatArgs[0];
		const key = e.key;
		const keyCode = e.which;
		
		const BACKSPACE = 8;
		const DELETE = 127;

		if(keyCode == BACKSPACE || keyCode == DELETE){
			return true;
		}

		var text = e.target.value;
		var shortcodes = validFormat[text.length] || null;
		
		if(shortcodes && shortcodes.trim().length && !this.validateKeyCode(keyCode, shortcodes.toUpperCase())) {
			e.preventDefault();
			const type = this.shortcodes[shortcodes.toUpperCase()]['type'];
			const message = this.option.message()[type];
			var errorBag = {
				type: type,
				message: message
			};
			if(this.option.onInvalid && message.length) this.option.onInvalid.call(_this.el,errorBag);
			return false;
		}
		
		
	   e.target.value = formatString(text ,validFormat);
	   return true;
		
   	}

   	validateKeyCode(keyCode, shortcode){
		var charcodes = this.shortcodes[shortcode].charcodes;
		if (charcodes == null) return true;


		if(!Array.isArray(charcodes)){
			charcodes = [charcodes];
		}

		const appropriateKey = charcodes.map(function(charcodes) {
			var minMax = charcodes.split("-");
			return keyCode >= minMax[0] &&  keyCode <= minMax[1];
		})
		.filter(result => result)
		.length;
		
		return appropriateKey > 0;
   	}


    pasteEvent(e) {
		const validFormat = this.formatArgs[0];
		setTimeout(function(){
		   e.target.value = formatString(e.target.value ,validFormat);
	   }, 100);
	}

	transform() {
		this.formatArgs = arguments[0];
		var _this = this;
		if(this.el.placeholder == null){
			this.el.placeholder = this.formatArgs[0];
		}
		this.keyDownEvent.bind(_this);
		this.el.addEventListener("keydown", this.keyDownEvent.bind(_this));
		this.el.addEventListener("paste", this.pasteEvent.bind(_this));
	}

}

export default Transform;