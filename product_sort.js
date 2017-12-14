/***动态获取***/
$(function(){
    $.ajax({
        url:'./data/product_sort.php',
        success:function(result){
			var adHtml = '';
			// console.log(result);
			// console.log(result.sortItems);
			for(var i = 0; i < result.sortItems.length; i++){
				var p = result.sortItems[i];
				adHtml+=`	
                <li>
                    <a href="${p.href}"><img src="${p.pic}" ></a><p>${p.details}<br> ￥${p.price}</p>
                </li>
				`
			}
			$('.hot ul').html(adHtml);
        },
		error:function(){
			alert('网络故障');
		}
    })
})