# FValidator

Form validator is vanilla js based form validation library. This library aims to provide simple,
elegant form validation. No more using complicated logic, and entangled mess of codes. Just use
cdn or pull the js file in browser and get started.




## Simple Usage

To get started you need to use html5 data attributes for validation. This library already provides
basic validations for you but you can extend the [rules](https://github.com/retroace/FValidator/blob/master/docs/Rule.md) to suit your needs.

To validate any element use **data-fvalid-type="rule1:arg1,arg2"** this type of syntax. An example
of this is

```
<input 
        type="text" 
        name="number"
		data-fvalid-type="prefix:01|digits:10|required" 
		placeholder="Your Phone Number"
	/>
```

## Input Mutator

Sometimes what you might want to specify through validation for some fields. To express those using this
api we provide you **data-fvalid-transform** attribute. This attribute helps you to specify what kind of input
you want to allow in the field. There are currently three types of field validation alphabet(**a**), number(**n**)
and all(**x**). 

Let's say we want this type of input from user
```
	000 a0a0a0a0a0
``` 
To use this type of input we provide 

```

```
<input 
    type="text" 
	data-fvalid-transform="NNN ANANANANAN"
	placeholder="Your Phone Number"
/>
```
```