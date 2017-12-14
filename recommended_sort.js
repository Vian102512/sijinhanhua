/***动态获取***/
$(function(){
    $.ajax({
        url:'./data/recommended_sort.php',
        success:function(result){
			var adHtml = '';
			console.log(result);
			console.log(result.recommendedItems);
			for(var i = 0; i < result.recommendedItems.length; i++){
				var p = result.recommendedItems[i];
				adHtml+=`	
                <li>
                    <a href="${p.href}"><img src="${p.pic}" ><p>${p.details}<br> ￥${p.price}</p></a>
                </li>
				`
			}
			$('.recommended ul').html(adHtml);
        },
		error:function(){
			alert('网络故障');
		}
    })
})