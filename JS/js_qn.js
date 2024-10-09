function hello_world()
{
	document.write("Hello World")
}

function add_2_num()
{
	num_1=document.getElementById("num_1").value;
	num_2=document.getElementById("num_2").value;
	document.getElementById("ans_2").innerHTML = Number(num_1)+Number(num_2);
}