export const formatString = function(stringToFormat, format){
    let totalStringLength = stringToFormat.length;
    let seperators = getSeperatorFromFormat(format.substr(0, totalStringLength + 1));
    let totalSeperators = seperators.length;
    let addToIndex = 0;
    let string = stringToFormat;
    
    for(let i=0; i< totalSeperators; i++){
        if(string[seperators[i]["index"]] != seperators[i]["seperator"]){
            string = insert(string , seperators[i]["index"],seperators[i]["seperator"]);
        }
    }
    return string;
}

export const getSeperatorFromFormat = function(format){
    return format.split("").map((x,index) => {
            if(!["-",",",".","/","\\","#","@", " "].includes(x)){
                return null;
            }
            return {
                index: index,
                seperator: x
            }
        })
        .filter(x => x != null);
}

export const insert = function(str, index, value) {
    return str.substr(0, index) + value + str.substr(index);
}
