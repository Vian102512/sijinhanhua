
/***动态获取***/
$(function(){
    $.ajax({
        url:'./data/carrousel.php',
        success:function(result){
			var adHtml = '';
//			console.log(result);
//			console.log(result.carouselItems);
			for(var i = 0; i < result.carouselItems.length; i++){
				var p = result.carouselItems[i];
				adHtml+=`	
                    <li><a href="${p.href}"><img src="${p.img}"/></a></li>
				`
			}
			$('#box .ul_list').html(adHtml);
        },
		error:function(){
			alert('网络故障');
		}
    })
})