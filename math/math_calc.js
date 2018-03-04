$("[purpose=math_fact]").click(function(){
	window.location.href="factorial.html";
});
var val=0;

$("[purpose=fact_n]").on("change paste keyup", function() {
   val=$(this).val(); 
   factorial();
});
function factorial()
{
	var fact=1;
	for(var i=1;i<=val;i++)
	{
		fact=fact*i;

	}
	$("[purpose=fact_val]").val(fact);
}
