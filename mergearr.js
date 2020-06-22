function mergeSort(arr){
	if(arr.length<2) return arr;
	let mid = Math.floor(arr.length/2);
	let firstArr = arr.slice(0,mid);
	let secondArr = arr.slice(mid);
	return merge(mergeSort(firstArr),mergeSort(secondArr));
}
function merge(arr1,arr2){
	let i=0;j=0;k=0;arr3=[];
	while(i<arr1.length && j<arr2.length){
		//console.log(arr1,arr2);	
		if(arr1[i]>arr2[j]){
			arr3[k++] = arr2[j++];
		}
		if(arr1[i]<arr2[j]){
			arr3[k++] = arr1[i++];
		}
	}
	for(;i<arr1.length;i++){
		arr3[k++] = arr1[i];
	}
	for(;j<arr2.length;j++){
		arr3[k++] = arr2[j];
	}
	return arr3;
}
let mergeArr = [5,3,4,1,2,6];
console.log('mergeSort');
console.log(mergeSort(mergeArr));
console.log('mergeSort END');