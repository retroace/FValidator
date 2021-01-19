# How to use

Starting with form validation is easy. For simple validation you can just use

```
	new FValid(selector, {
        onInputValid: function(){
            // Calls this method on every invalid keypress
        },
        onValid: function(){
            // Calls this method on form submit if it is valid
        },
        onInvalid: function(){
            // Calls this method on form submit if it is invalid
        },
        onInputInvalid: function(message){
            // Calls this method on every input valid keypress
        },
    })

```



For the validation you can put it in html element with data attributes. Just use **data-fvalid-{type}** (where type is type/submit/change). For a simple email validation with min length of 10 char you need to give it as given below

```
	<input 
        type="email" 
        name="email"
		data-fvalid-type="required|email|minLength:10" 
	/>
``` 

If you want to get different title in validation message of the input. You can pass ```data-title="Another Title"``` which will trigger the message to have ```Another Title``` as it's title.


### Rules

This library provides useful default validation rules.

 - **required**  
    Adds required field when form submits

 - **max:maxNumber**  
    Number should be above maxNumber

 - **min:minNumber**  
    Number should be above minNumber

 - **between:min,max**  
    Number should be between min and max

 - **email**  
    Provided input should have email format

 - **numeric**  
    Provided input should be a number

 - **alphanumeric**  
    Provided input should have only alphabets and numbers

 - **nospace**  
    Provided input should be not have space

 - **in:arg1,arg2,arg3,...**  
    Provided input should be one of provided arg

 - **inLower:arg1,arg2,arg3,...**  
    Provided input should be one of provided arg. This is case insensitive

 - **prefix:prefixWith**  
    Provided input should be prefixed the arg

 - **digit:n**  
    Provided input should have ***n*** number of digits

 - **minLength:min**  
    Provided input should have morethan ***min** length

 - **maxLength**  
    Provided input should have lessthan ***max** length

 - **match:selector**  
    Provided input should match with the provided ***selector*** value

 - **matchName:selector**  
    Provided input should match with the provided ***selector*** name attribute value

 - **matchId:selector**  
    Provided input should match with the provided ***selector*** id attribute value

 - **password**  
    Provided input should contain one small and one capital letter