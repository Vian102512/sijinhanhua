/***动态获取***/
$(function(){
    $.ajax({
        url:'./data/products.php',
        success:function(result){
			// console.log(result);
			// console.log(result.floorItems);
			// console.log(result.floorItems[0].href);
			// for(var i = 0; i < result.floorItems.length; i++){
			// 	var p = result.floorItems[i];
			var f1=`	
                <ul>
					<li>
						<a href="${result.floorItems[0].href}">
							<img src="${result.floorItems[0].pic}" class="img"><br></a>
								<span class="span">${result.floorItems[0].details}&nbsp;&nbsp;￥${result.floorItems[0].price}</span>
						<div class="txt">
							<p>	
								<a href="#">加入购物车</a>
								<a href="#">立即购买</a>  
							</p>
						</div>
					</li><li>
						<a href="${result.floorItems[1].href}">
							<img src="${result.floorItems[1].pic}" class="img"><br></a>
								<span class="span">${result.floorItems[1].details}&nbsp;&nbsp;￥${result.floorItems[1].price}</span>
						<div class="txt">
							<p>	
								<a href="#">加入购物车</a>
								<a href="#">立即购买</a>  
							</p>
						</div>
					</li><li>
						<a href="${result.floorItems[2].href}">
							<img src="${result.floorItems[2].pic}" class="img"><br></a>
								<span class="span">${result.floorItems[2].details}&nbsp;&nbsp;￥${result.floorItems[2].price}</span>
						<div class="txt">
							<p>	
								<a href="#">加入购物车</a>
								<a href="#">立即购买</a>  
							</p>
						</div>
					</li><li>
						<a href="${result.floorItems[3].href}">
							<img src="${result.floorItems[3].pic}" class="img"><br></a>
								<span class="span">${result.floorItems[3].details}&nbsp;&nbsp;￥${result.floorItems[3].price}</span>
						<div class="txt">
							<p>	
								<a href="#">加入购物车</a>
								<a href="#">立即购买</a>  
							</p>
						</div>
					</li><li>
						<a href="${result.floorItems[4].href}">
							<img src="${result.floorItems[4].pic}" class="img"><br></a>
								<span class="span">${result.floorItems[4].details}&nbsp;&nbsp;￥${result.floorItems[4].price}</span>
						<div class="txt">
							<p>	
								<a href="#">加入购物车</a>
								<a href="#">立即购买</a>  
							</p>
						</div>
					</li><li>
						<a href="${result.floorItems[5].href}">
							<img src="${result.floorItems[5].pic}" class="img"><br></a>
								<span class="span">${result.floorItems[5].details}&nbsp;&nbsp;￥${result.floorItems[5].price}</span>
						<div class="txt">
							<p>	
								<a href="#">加入购物车</a>
								<a href="#">立即购买</a>  
							</p>
						</div>
					</li><li>
						<a href="${result.floorItems[6].href}">
							<img src="${result.floorItems[6].pic}" class="img"><br></a>
								<span class="span">${result.floorItems[6].details}&nbsp;&nbsp;￥${result.floorItems[6].price}</span>
						<div class="txt">
							<p>	
								<a href="#">加入购物车</a>
								<a href="#">立即购买</a>  
							</p>
						</div>
					</li><li>
						<a href="${result.floorItems[7].href}">
							<img src="${result.floorItems[7].pic}" class="img"><br></a>
								<span class="span">${result.floorItems[7].details}&nbsp;&nbsp;￥${result.floorItems[7].price}</span>
						<div class="txt">
							<p>	
								<a href="#">加入购物车</a>
								<a href="#">立即购买</a>  
							</p>
						</div>
					</li>
				</ul>
				`;
			var f2=`	
                <ul>
					<li>
						<a href="${result.floorItems[8].href}">
							<img src="${result.floorItems[8].pic}" class="img"><br></a>
								<span class="span">${result.floorItems[8].details}&nbsp;&nbsp;￥${result.floorItems[8].price}</span>
						<div class="txt">
							<p>	
								<a href="#">加入购物车</a>
								<a href="#">立即购买</a>  
							</p>
						</div>
					</li><li>
						<a href="${result.floorItems[9].href}">
							<img src="${result.floorItems[9].pic}" class="img"><br></a>
								<span class="span">${result.floorItems[9].details}&nbsp;&nbsp;￥${result.floorItems[9].price}</span>
						<div class="txt">
							<p>	
								<a href="#">加入购物车</a>
								<a href="#">立即购买</a>  
							</p>
						</div>
					</li><li>
						<a href="${result.floorItems[10].href}">
							<img src="${result.floorItems[10].pic}" class="img"><br></a>
								<span class="span">${result.floorItems[10].details}&nbsp;&nbsp;￥${result.floorItems[10].price}</span>
						<div class="txt">
							<p>	
								<a href="#">加入购物车</a>
								<a href="#">立即购买</a>  
							</p>
						</div>
					</li><li>
						<a href="${result.floorItems[11].href}">
							<img src="${result.floorItems[11].pic}" class="img"><br></a>
								<span class="span">${result.floorItems[11].details}&nbsp;&nbsp;￥${result.floorItems[11].price}</span>
						<div class="txt">
							<p>	
								<a href="#">加入购物车</a>
								<a href="#">立即购买</a>  
							</p>
						</div>
					</li><li>
						<a href="${result.floorItems[12].href}">
							<img src="${result.floorItems[12].pic}" class="img"><br></a>
								<span class="span">${result.floorItems[12].details}&nbsp;&nbsp;￥${result.floorItems[12].price}</span>
						<div class="txt">
							<p>	
								<a href="#">加入购物车</a>
								<a href="#">立即购买</a>  
							</p>
						</div>
					</li><li>
						<a href="${result.floorItems[13].href}">
							<img src="${result.floorItems[13].pic}" class="img"><br></a>
								<span class="span">${result.floorItems[13].details}&nbsp;&nbsp;￥${result.floorItems[13].price}</span>
						<div class="txt">
							<p>	
								<a href="#">加入购物车</a>
								<a href="#">立即购买</a>  
							</p>
						</div>
					</li><li>
						<a href="${result.floorItems[14].href}">
							<img src="${result.floorItems[14].pic}" class="img"><br></a>
								<span class="span">${result.floorItems[14].details}&nbsp;&nbsp;￥${result.floorItems[14].price}</span>
						<div class="txt">
							<p>	
								<a href="#">加入购物车</a>
								<a href="#">立即购买</a>  
							</p>
						</div>
					</li><li>
						<a href="${result.floorItems[15].href}">
							<img src="${result.floorItems[15].pic}" class="img"><br></a>
								<span class="span">${result.floorItems[15].details}&nbsp;&nbsp;￥${result.floorItems[15].price}</span>
						<div class="txt">
							<p>	
								<a href="#">加入购物车</a>
								<a href="#">立即购买</a>  
							</p>
						</div>
					</li>
				</ul>
				`;
			var f3=`	
                <ul><li>
						<a href="${result.floorItems[16].href}">
							<img src="${result.floorItems[16].pic}" class="img"><br></a>
								<span class="span">${result.floorItems[16].details}&nbsp;&nbsp;￥${result.floorItems[16].price}</span>
						<div class="txt">
							<p>	
								<a href="#">加入购物车</a>
								<a href="#">立即购买</a>  
							</p>
						</div>
					</li><li>
						<a href="${result.floorItems[17].href}">
							<img src="${result.floorItems[17].pic}" class="img"><br></a>
								<span class="span">${result.floorItems[17].details}&nbsp;&nbsp;￥${result.floorItems[17].price}</span>
						<div class="txt">
							<p>	
								<a href="#">加入购物车</a>
								<a href="#">立即购买</a>  
							</p>
						</div>
					</li><li>
						<a href="${result.floorItems[18].href}">
							<img src="${result.floorItems[18].pic}" class="img"><br></a>
								<span class="span">${result.floorItems[18].details}&nbsp;&nbsp;￥${result.floorItems[18].price}</span>
						<div class="txt">
							<p>	
								<a href="#">加入购物车</a>
								<a href="#">立即购买</a>  
							</p>
						</div>
					</li><li>
						<a href="${result.floorItems[19].href}">
							<img src="${result.floorItems[19].pic}" class="img"><br></a>
								<span class="span">${result.floorItems[19].details}&nbsp;&nbsp;￥${result.floorItems[19].price}</span>
						<div class="txt">
							<p>	
								<a href="#">加入购物车</a>
								<a href="#">立即购买</a>  
							</p>
						</div>
					</li><li>
						<a href="${result.floorItems[20].href}">
							<img src="${result.floorItems[20].pic}" class="img"><br></a>
								<span class="span">${result.floorItems[20].details}&nbsp;&nbsp;￥${result.floorItems[20].price}</span>
						<div class="txt">
							<p>	
								<a href="#">加入购物车</a>
								<a href="#">立即购买</a>  
							</p>
						</div>
					</li><li>
						<a href="${result.floorItems[21].href}">
							<img src="${result.floorItems[21].pic}" class="img"><br></a>
								<span class="span">${result.floorItems[21].details}&nbsp;&nbsp;￥${result.floorItems[21].price}</span>
						<div class="txt">
							<p>	
								<a href="#">加入购物车</a>
								<a href="#">立即购买</a>  
							</p>
						</div>
					</li><li>
						<a href="${result.floorItems[22].href}">
							<img src="${result.floorItems[22].pic}" class="img"><br></a>
								<span class="span">${result.floorItems[22].details}&nbsp;&nbsp;￥${result.floorItems[22].price}</span>
						<div class="txt">
							<p>	
								<a href="#">加入购物车</a>
								<a href="#">立即购买</a>  
							</p>
						</div>
					</li><li>
						<a href="${result.floorItems[23].href}">
							<img src="${result.floorItems[23].pic}" class="img"><br></a>
								<span class="span">${result.floorItems[23].details}&nbsp;&nbsp;￥${result.floorItems[23].price}</span>
						<div class="txt">
							<p>	
								<a href="#">加入购物车</a>
								<a href="#">立即购买</a>  
							</p>
						</div>
					</li>
				</ul>
				`;
			//}
			$(".f1").html(f1);
			$(".f2").html(f2);
			$(".f3").html(f3);
        },
		error:function(){
			alert('网络故障');
		}
    })
})