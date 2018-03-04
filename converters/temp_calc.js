var fah;
var cel;
var kel;
var ran;
var cen;
$("[purpose=temp_conv]").on("click",function(){
	window.location.href="temp_conv.html";
});
$("[purpose=fahren]").on("change paste keyup", function() {
   fah=$(this).val(); 
   convert("f");
});
$("[purpose=cel]").on("change paste keyup", function() {
   cel=$(this).val(); 
   convert("cel");
});
$("[purpose=ran]").on("change paste keyup", function() {
   ran=$(this).val(); 
   convert("ran");
});
$("[purpose=kel]").on("change paste keyup", function() {
   kel=$(this).val(); 
   convert("kel");
});
$("[purpose=cen]").on("change paste keyup", function() {
   cen=$(this).val(); 
   convert("cen");
});
function convert(fig)
{
	if(fig=="ran")
	{
		var val=parseInt(ran);
		cel=((val - 491.67) * (5/9)).toFixed(2);
		kel=(val*(5/9)).toFixed(2);
		fah=(val-459.67).toFixed(2);
		$("[purpose=fahren]").val(fah);
		$("[purpose=cel]").val(cel);
		$("[purpose=cen]").val(cel);
		$("[purpose=kel]").val(kel);
	}
	if(fig=="kel")
	{
		var val=parseInt(kel);
		cel=(val-273.15).toFixed(2);
		fah=((val*(9/5)) - 459.67).toFixed(2);
		ran=(cal*(9/5)).toFixed(2);
		$("[purpose=ran]").val(ran);
		$("[purpose=cel]").val(cel);
		$("[purpose=cen]").val(cel);
		$("[purpose=fahren]").val(fah);
	}
	if(fig=="f")
	{
		var val=parseInt(fah);
		ran=(val+459.67).toFixed(2);
		cel=((val-32)*(5/9)).toFixed(2);
		kel=((val+459.67)*(5/9)).toFixed(2);
		$("[purpose=ran]").val(ran);
		$("[purpose=cel]").val(cel);
		$("[purpose=cen]").val(cel);
		$("[purpose=kel]").val(kel);
	}
	if(fig=="cel")
	{
		var val=parseInt(cel);
		ran=((val+273.15) * (9/5)).toFixed(2);
		fah=((val*(9/5))+32).toFixed(2);
		kel=((val+273.15)).toFixed(2);
		$("[purpose=ran]").val(ran);
		$("[purpose=fahren]").val(fah);
		$("[purpose=cen]").val(cel);
		$("[purpose=kel]").val(kel);
	}
	if(fig=="cen")
	{
		var val=parseInt(cen);
		ran=((val+273.15) * (9/5)).toFixed(2);
		fah=((val*(9/5))+32).toFixed(2);
		kel=((val+273.15)).toFixed(2);
		$("[purpose=ran]").val(ran);
		$("[purpose=fahren]").val(fah);
		$("[purpose=cel]").val(val);
		$("[purpose=kel]").val(kel);
	}
	
}