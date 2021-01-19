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

 	}
     keyDownEvent(e){
        var _this = this;
        var validFormat = _this.formatArgs[0];
        var key = e.key;
        
		var regex = new RegExp("^[a-zA-Z0-9 ]+$");
		var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
		if (regex.test(str)) {
			e.target.value = formatString(e.target.value ,validFormat);
		}
        
     }
	 

	 pasteEvent(e){
        const validFormat = this.formatArgs[0];
		setTimeout(function(){
			e.target.value = formatString(e.target.value ,validFormat);
		}, 100);
	 }

     transform(){
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