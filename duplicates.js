//This functions returns the answers from a select_one where the result cannot be duplicated
function HasDups (myArray)
{
 return new Set(myArray).size !== myArray.length;
}


