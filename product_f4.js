
/***动态获取***/
$(function(){
    $.ajax({
        url:'./data/product_f4.php',
        success:function(result){
			//console.log(result);
		//	console.log(result.f4Items);
//			for(var i = 0; i < result.f4Items.length; i++){
//				var p = result.f4Items[i];
				var top = `	
            <a href="${result.f4Items[0].href}">
							<img src="${result.f4Items[0].pic}"><br>
							<span>${result.f4Items[0].details}</span>
							<span>￥${result.f4Items[0].price}</span>
						</a><a href="${result.f4Items[1].href}">
							<img src="${result.f4Items[1].pic}"><br>
							<span>${result.f4Items[1].details}</span>
							<span>￥${result.f4Items[1].price}</span>
						</a>
				`;
				var bottom = `
						<a href="${result.f4Items[2].href}">
							<img src="${result.f4Items[2].pic}"><br>
							<span>${result.f4Items[2].details}</span>
							<span>￥${result.f4Items[2].price}</span>
						</a><a href="${result.f4Items[3].href}">
							<img src="${result.f4Items[3].pic}"><br>
							<span>${result.f4Items[3].details}</span>
							<span>￥${result.f4Items[3].price}</span>
						</a><a href="${result.f4Items[4].href}">
							<img src="${result.f4Items[4].pic}"><br>
							<span>${result.f4Items[4].details}</span>
							<span>￥${result.f4Items[4].price}</span>
						</a><a href="${result.f4Items[5].href}">
							<img src="${result.f4Items[5].pic}"><br>
							<span>${result.f4Items[5].details}</span>
							<span>￥${result.f4Items[5].price}</span>
						</a>
				`
			//}
				//console.log(top);
			$('.top_right').html(top);
			$('.f4_right_bottom').html(bottom);
        },
		error:function(){
			alert('网络故障');
		}
    })
})