// Create a list for the responses
function addResponse(response) {
	let list = [];
	list.push(response);
	return(list);
}

//From the list check the results, if there is 1 Pending the result for the other field is calculated as Pending, in case there are none Pending sets as Concluded
function checkStatus(list) {
  if (list.includes('Pending')) {
    return 'Pending';
  } else {
    return 'Concluded';
  }
}


