 function setCookie(name,value,n){
			 	var oDate=new Date();
				oDate.setDate(oDate.getDate()+n);
			 	document.cookie=name+"="+value+";expires="+oDate+";path=/";
			 }
 function getCookie(name){
			 	var str=document.cookie;
			 	var arr=str.split("; ");
			 	//console.log(arr);
			 	for(var i=0;i<arr.length;i++){
			 		var newArr=arr[i].split("=");
			 		if(newArr[0]==name){
			 			return newArr[1];
			 		}
			 	}
			 	
			 }
function removeCookie(name){
		setCookie(name,2,-2)
		}