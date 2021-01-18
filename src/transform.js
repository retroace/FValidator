import Rule from "./rule";
import InputRuleMessageException from "./message";

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
        e.target.value += " ";
        const format = [
            "X", 
            "x",
            "A",
            "a", 
            "n", 
            "N",
            "S",
            "*"
        ];
        console.log(e.key, e.keyCode);
        return true;
     }

     transform(){
        this.formatArgs = arguments[0];
        var _this = this;
        if(this.el.placeholder == null){
            this.el.placeholder = this.formatArgs[0];
        }
        this.keyDownEvent.bind(_this);
        this.el.addEventListener("keydown", this.keyDownEvent.bind(_this));
     }

 }

 export default Transform;