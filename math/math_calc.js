$("[purpose=math_fact]").click(function(){
	window.location.href="factorial.html";
});
$("[purpose=squareroot]").click(function(){
	window.location.href="squareroot.html";
});
$("[purpose=cuberoot]").click(function(){
	window.location.href="cuberoot.html";
});
var val=0;

$("[purpose=fact_n]").on("change paste keyup", function() {
   val=$(this).val(); 
   factorial();
});
$("[purpose=squareroot_n]").on("change paste keyup", function() {
   val=$(this).val(); 
   squareroot();
});
$("[purpose=cuberoot_n]").on("change paste keyup", function() {
   val=$(this).val(); 
   cuberoot();
});
function cuberoot()
{
	$("[purpose=cuberoot_val]").val(Math.cbrt(val).toFixed(4));
}
function squareroot()
{
	$("[purpose=squareroot_val]").val(Math.sqrt(val).toFixed(4));
}
function factorial()
{
	var fact=1;
	for(var i=1;i<=val;i++)
	{
		fact=fact*i;

	}
	$("[purpose=fact_val]").val(fact);
}

