### Rule

Rule refers to the principle that must be followed by validation instance. You can pass your own rule instance to the Form Validation instance by passing it as an option.

```
	option = {
		rule: RuleClassReference
	}
```


Every rule instance will have scope to the element which can be acessed in **element** property;
Implementing your own rules is easy. A simple example of rule is given below which checks weather given input validates the email rule. 

```
 Rule.prototype.email = function() {
 	return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.element.value.trim());
 };

```
