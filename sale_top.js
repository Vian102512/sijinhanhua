
/***动态获取***/
$(function(){
    $.ajax({
        url:'./data/sale_top.php',
        success:function(result){
			//console.log(result);
            var	adHtml="";
			//console.log(result.saleItems);
			for(var i = 0; i < result.saleItems.length; i++){
				var p = result.saleItems[i];
            adHtml+=`	
                <ul>
                    <span class="top_title_span"><span>${p.pid}</span>${p.title}</span>
                    <li>
                    <a href="#" class="top_a1">
                        <img src="${p.img}">
                        <div>
                            <span>${p.details}</span>
                            <span>￥${p.price}</span>
                            <span>销量:${p.buy}</span>
                        </div>
                    </a>
                    </li>
                </ul>    
				`;
			}
			$('.ul_sale_top').html(adHtml);
        },
		error:function(){
			alert('网络故障');
		}
    })
})