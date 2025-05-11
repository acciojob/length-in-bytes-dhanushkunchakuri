const byteSize = (str) => {
  // write your code here
	let arr=str.split('');
	
	if(str.length === 0){
		return 0;
	}
	return arr.length;
	
};

// Do not change the code below

const str = prompt("Enter some string.");
alert(byteSize(str));
