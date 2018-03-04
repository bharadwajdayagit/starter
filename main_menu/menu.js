var menu=["Electrical calulator","Light Calulator","Finance Calculator","Converters","Maths"];
var icon=["mdi-home","mdi-lamp","mdi-money"];
var href=["index.html","","Finance/menu.html","converters/menu.html","math/menu.html"];
var loc=window.location.href;
var split=loc.split("/");
var loc_len=split.length;
var menuindex=split[loc_len-2];

for(var i=0;i<menu.length;i++)
{

	var li=document.createElement("li");
	var a=document.createElement("a");

	if(menu[i].toLowerCase().includes(menuindex.toLowerCase()))
	{
		console.log("active");
		li.className="active";
		//if(menuindex.toLowerCase()=="temperature")
		{
			//a.href="../"+href[i];
		}
		//else
		{
			a.href="menu.html";
		}
		
	}
	else
	{
		a.href="../"+href[i];
	}
	
	var link=document.createElement("i");
	link.className = "icon mdi "+icon[i];
	var span=document.createElement("span");
	span.innerHTML=menu[i];
	a.appendChild(link);
	a.appendChild(span);
	li.appendChild(a);
	document.getElementById('menu_bar').appendChild(li);
}