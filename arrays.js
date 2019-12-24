function addElementToEndOfArray(arrary,n){
  var newarray = [...arrary]
  newarray.push(n)
  return(newarray)
}

function addElementToBeginningOfArray(arrary,n){
    var newarray = [...arrary]
    newarray.unshift(n)
    return(newarray)
}

var chocolateBars = ['snickers', 'hundred grand','kitkat','skittles']

function removeElementFromEndOfArray(arrary,n){
    var newarrary = [...arrary]
    newarray.pop(n)
    return(newarrary)
}

function removeElementFromBeginningOfArray(arrary,n){
    var newarray = [...arrary]
    newarray.unshift(n)
    return(newarray)
}

function destructivelyAddElementToEndOfArray(arrary,element){
    arrary.push(element)
    return(arrary)
}
function destructivelyRemoveElementFromEndOfArray(array,element){
    array.pop(element)
    return(array)
}
