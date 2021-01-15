
/**
 *  Rules for validation.
 *	
 *	
 */

 const Rule = function(element){
 	this.element = element;
 };


 Rule.prototype.required = function() {
 	this.element.setAttribute("required","required")
 	return true;
 };

 Rule.prototype.max = function() {
 	return parseInt(this.element.value) < parseInt(arguments[0]);
 };

 Rule.prototype.min = function() {
 	return parseInt(this.element.value) > parseInt(arguments[0]);
 };

 Rule.prototype.between = function() {
 	return parseInt(this.element.value) < parseInt(arguments[0]) && parseInt(this.element.value) > parseInt(arguments[1]);
 };

 Rule.prototype.email = function() {
 	return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.element.value.trim());
 };

 Rule.prototype.numeric = function() {
 	return !isNaN(parseInt(this.element.value));
 };

 Rule.prototype.alphanumeric = function() {
 	return (new RegExp(/^[a-z0-9]+$/i)).test(this.element.value);
 };

 Rule.prototype.nospace = function() {
 	return !(/\s/.test(this.element.value));
 };

 Rule.prototype.in = function() {
 	var arg = typeof arguments[0] == 'string' ? arguments[0].split(","): [];
 	return arg.includes(this.element.value.trim());
 };

 Rule.prototype.inLower = function() {
 	return Array.isArray(arguments) ? arguments.includes(this.element.value.trim().toLowerCase()): false;
 };

 Rule.prototype.format = function() {
 	return Array.isArray(arguments) ? arguments.includes(this.element.value.trim().toLowerCase()): false;
 };

 Rule.prototype.prefix = function() {
 	return this.element.value.trim().startsWith(arguments[0]);
 };


 Rule.prototype.digit = function() {
 	return this.element.value.length == arguments[0];
 };

 Rule.prototype.minLength = function() {
 	return this.element.value.length > arguments[0];
 };

 Rule.prototype.maxLength = function() {
 	return this.element.value.length < arguments[0];
 };

