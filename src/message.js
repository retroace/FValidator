
/**
 *
 * Rule Messages To Show When Exception Is Thrown 
 *
 * :title => Form Field Title
 * :option => List of options to match
 * :value => Current User Value
 *
 */
const InputRuleMessageException = function(){
	return {
		"in": "The :title must be one of :option",
		"inLower": "The :title must be in :option",
		"numeric": "The :title must be an integer",
		"alphanumeric": "The :title must be an length",
		"nospace": "The :title must be not have space",
		"email": "Please enter valid email format",
		"max": "The :title should be below :option",
		"maxLength": "The :title should be at max :option character",
		"min": "The :title should be above :option",
		"digit": "The :title should be :option digit",
		"minLength": "The :title should be at min :option character",
		"prefix": "The :title should start with :option",
		"between": "The :title should be between :option",
	};
};