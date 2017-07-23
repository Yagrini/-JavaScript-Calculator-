var str1="";
var str2="";
var str3="";
var result = 0;
var op="";
var i=0;
function f(arg)
{
	if(arg>='0' && arg<='9') 
		{	
			if(str2.indexOf("=")!==-1) 
				{
					str2="";
					result = 0;
					i=0;
				}
			if(arg=="0" && str1=="") $("#disp").html("0");
			else
			{
				if(str1.length==8 );
				else{

					 str1 = str1 + arg;
					 str2 = str2 + arg;
					 if(str2.length>34) str2 = str2.substring(str2.length-35,str2.length);
					 $("#disp").html(str1);
					 $("#history").html(str2);
				}
			}
		}
	else if(arg=='.' && str1=="")
	{
		str1 = '0.';
		$("#disp").html(str1);
		str2 = str2 + "0.";
	}
	else if(arg=='.' && str1.indexOf(".")===-1)
	{
		str1 = str1 + '.';
		$("#disp").html(str1);
		str2 = str2 + arg;
	}
	else if(arg==="AC" || arg==="CE")
	{
			str1 = ""; str2 ="" ; str3 =""; result =0; i=0; op="";
			$("#disp").html('0');
			$("#history").html('0');

	}
	else if((arg=="+" || arg=="-" || arg=="x" || arg=="/" || arg=="=") && str2!=="" && i===0 && str2[str2.length -1]!=="+" && str2[str2.length -1]!=="-" && str2[str2.length -1]!=="x" && str2[str2.length -1]!=="/" && str2[str2.length -1]!=="=" && str1[str1.length-1]!==".") 
		{
			if(arg=="=") 
				{
					str2 = str2 + "=" + str2; i++;
					result = parseFloat(str2);
				}
			else{
				result = parseFloat(str2);
				op=arg; 
				str2 = str2 + op;
				i++;
			}
			if(str2.length>34) str2 = str2.substring(str2.length-35,str2.length);
			$("#history").html(str2);
			$("#disp").html(result);
			str1="";
		}
	else if((arg=="+" || arg=="-" || arg=="x" || arg=="/" || arg=="=") && str2!=="" && str2[str2.length -1]!=="+" && str2[str2.length -1]!=="-" && str2[str2.length -1]!=="x" && str2[str2.length -1]!=="/" && str2[str2.length -1]!=="=" && str1[str1.length-1]!==".") 
	{
		if(str2.indexOf("=")!==-1) str2 = str2.split("=")[1];
		switch (op){
			case "+": {
				result += parseFloat(str1);
				break;
			}
			case "-":{
				result -= parseFloat(str1);
				break;
			}
			case "x":{
				result *= parseFloat(str1);
				break;
			}
			case "/":{
				result /= parseFloat(str1);
				break;
			}
		}
		if(!isFinite(result) || isNaN(result))
		{
			$("#disp").html("0");
			$("#history").html("Error");
			str1 = ""; str2 ="" ; str3 =""; result =0; i=0; op="";
		}
		else{
		if(arg=='=' && op!=="=") 
		{
			if(result.toString().length>8)
			{
				result = Math.round(result*100)/100;
				if(result.toString().length>8)
				{
					$("#disp").html("0");
					$("#history").html("Digit Limit Met");
					str1 = ""; str2 ="" ; str3 =""; result =0; i=0; op="";
				}
				else
				{
					$("#disp").html(result);
					str2 = str2 + '=' + result;
					if(str2.length>34) str2 = str2.substring(str2.length-35,str2.length);
					$("#history").html(str2);
				}
			}
			else
				{
					$("#disp").html(result);
					str2 = str2 + '=' + result;
					if(str2.length>34) str2 = str2.substring(str2.length-35,str2.length);
					$("#history").html(str2);
			}
		}
		else{
			if(arg!="=")  str2 = str2 + arg;
			if(result.toString().length>8)
			{
				result = Math.round(result*100)/100;
				if(result.toString().length>8)
				{
					$("#disp").html("0");
					$("#history").html("Digit Limit Met");
					str1 = ""; str2 ="" ; str3 =""; result =0; i=0; op="";
				}
				else
				{
					$("#disp").html(result);
					str2 = str2 + '=' + result;
					if(str2.length>34) str2 = str2.substring(str2.length-35,str2.length);
					$("#history").html(str2);
				}
			}
			else
				{
					$("#disp").html(result);
					if(str2.length>34) str2 = str2.substring(str2.length-35,str2.length);
					$("#history").html(str2);
			}
		}}
			op=arg;
			str1="";
		
	}

}







