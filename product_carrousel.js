/***动态获取***/
$(function(){
    $.ajax({
        url:'./data/product_carrousel.php',
        success:function(result){
			console.log(result);
			console.log(result.pro_Items);
			for(var i = 0; i < pro_Items.length; i++){
				var p = pro_Items[i];
			var adHtml=`	
					
				`
			}
			$('#wrap').html(adHtml);
        },
		error:function(){
			alert('网络故障');
		}
    })
})