SET NAMES UTF8;
DROP DATABASE IF EXISTS flowers;
CREATE DATABASE flowers CHARSET=UTF8;
USE flowers;
#轮播图表
 CREATE TABLE carousel(
 	cid INT PRIMARY KEY AUTO_INCREMENT,
 	img	VARCHAR(128),		#图片路径
 	href	VARCHAR(128)            #图片链接
 );
#楼层表 f1,f2,f3
CREATE TABLE product_floor(
	pid INT 	PRIMARY KEY AUTO_INCREMENT,	
	details VARCHAR(128),           #详细描述
	href	VARCHAR(128),           #图片链接
	pic VARCHAR(128),            	#图片
	price DECIMAL(10,2)		#商品价格
);
#楼层表 f4
CREATE TABLE product_f4(
	pid INT 	PRIMARY KEY AUTO_INCREMENT,	
	details VARCHAR(128),           #详细描述
	href	VARCHAR(128),           #图片链接
	pic VARCHAR(128),            	#图片
	price DECIMAL(10,2)		#商品价格
);
#楼层表 f5
CREATE TABLE product_f5(
	pid INT 	PRIMARY KEY AUTO_INCREMENT,	
	details VARCHAR(128),           #详细描述
	href	VARCHAR(128),           #图片链接
	pic VARCHAR(128),            	#图片
	price DECIMAL(10,2)		#商品价格
);
#商品详情热销单品 
CREATE TABLE recommended_sort(
	pid INT 	PRIMARY KEY AUTO_INCREMENT,
	details VARCHAR(128),            #详细描述
	href	VARCHAR(128),            #图片链接
	pic VARCHAR(128),            	 #图片
	price DECIMAL(10,2)		 #商品价格
);
#商品详情轮播
CREATE TABLE product_carrousel(
	pid INT 	PRIMARY KEY AUTO_INCREMENT,
	details VARCHAR(128),            #详细描述
	href	VARCHAR(128),            #图片链接
	pic VARCHAR(128),            	 #图片
	price DECIMAL(10,2)		 #商品价格
);
#商品列表 热销排行
CREATE TABLE product_sort(
	pid INT 	PRIMARY KEY AUTO_INCREMENT,
	details VARCHAR(128),            #详细描述
	href	VARCHAR(128),            #图片链接
	pic VARCHAR(128),            	 #图片
	price DECIMAL(10,2)		 #商品价格
);
#首页商品大小图表
CREATE TABLE product_show(
	 pid INT PRIMARY KEY AUTO_INCREMENT,
	 title VARCHAR(64),
	 details VARCHAR(128),            #详细描述
	 price DECIMAL(10,2),		  #商品价格
	 buy INT,			  #够买人数
	 href VARCHAR(128),		  #图片链接
	 promise VARCHAR(64),		  #短句祝福
	 sm VARCHAR(128),                 #小图片路径
	 lg VARCHAR(128)                  #大图片路径
);
#首页销量排行表
CREATE TABLE sale_top(
	 pid INT PRIMARY KEY AUTO_INCREMENT,
	 title VARCHAR(128), 
	 details VARCHAR(128),            #详细描述
	 img VARCHAR(128),                  #大图片路径
	 price DECIMAL(10,2),		  #商品价格
	 buy INT,			  #够买人数
	 href VARCHAR(128)		  #图片链接
	
);


/*******************/
/******数据导入******/
/*******************/

#首页销量排行榜
INSERT INTO sale_top VALUES
	(NULL,"标题","img/sale/1.jpg","详情",238,231253,"05-product-details.html?fid=97"),
	(NULL,"标题","img/sale/2.jpg","详情",238,231253,"05-product-details.html?fid=98"),
	(NULL,"标题","img/sale/3.jpg","详情",238,231253,"05-product-details.html?fid=99"),
	(NULL,"标题","img/sale/4.jpg","详情",238,231253,"05-product-details.html?fid=100"),
	(NULL,"标题","img/sale/5.jpg","详情",238,231253,"05-product-details.html?fid=101"),
	(NULL,"标题","img/sale/6.jpg","详情",238,231253,"05-product-details.html?fid=102"),
	(NULL,"标题","img/sale/7.jpg","详情",238,231253,"05-product-details.html?fid=103"),
	(NULL,"标题","img/sale/8.jpg","详情",238,231253,"05-product-details.html?fid=104"),
	(NULL,"标题","img/sale/9.jpg","详情",238,231253,"05-product-details.html?fid=105");
#轮播
INSERT INTO carousel VALUES
	(NULL,"img/banner/1.png","05-product-details.html?fid=1"),
	(NULL,"img/banner/2.png","05-product-details.html?fid=2"),
	(NULL,"img/banner/3.png","05-product-details.html?fid=3"),
	(NULL,"img/banner/4.png","05-product-details.html?fid=4"),
	(NULL,"img/banner/1.png","05-product-details.html?fid=1");

#楼层
INSERT INTO product_floor VALUES
	(NULL,"鲜花 真爱","05-product-details.html?fid=5","img/floor/1.jpg",269),
	(NULL,"鲜花 情深","05-product-details.html?fid=6","img/floor/2.jpg",339),
	(NULL,"鲜花 承诺","05-product-details.html?fid=7","img/floor/3.jpg",289),
	(NULL,"鲜花 钟情","05-product-details.html?fid=8","img/floor/4.jpg",169),
	(NULL,"鲜花 永恒","05-product-details.html?fid=9","img/floor/5.jpg",289),
	(NULL,"鲜花 子衿","05-product-details.html?fid=10","img/floor/6.jpg",159),
	(NULL,"鲜花 风情","05-product-details.html?fid=11","img/floor/7.jpg",188),
	(NULL,"鲜花 浪漫","05-product-details.html?fid=12","img/floor/8.jpg",268),
	(NULL,"鲜花 仙子","05-product-details.html?fid=13","img/floor/9.jpg",358),
	(NULL,"鲜花 白雪","05-product-details.html?fid=14","img/floor/10.jpg",219),
	(NULL,"鲜花 苏醒","05-product-details.html?fid=15","img/floor/11.jpg",238),
	(NULL,"鲜花 晨曦","05-product-details.html?fid=16","img/floor/12.jpg",168),
	(NULL,"鲜花 简爱","05-product-details.html?fid=17","img/floor/13.jpg",168),
	(NULL,"鲜花 晴朗","05-product-details.html?fid=18","img/floor/14.jpg",338),
	(NULL,"鲜花 暖暖","05-product-details.html?fid=19","img/floor/15.jpg",459),
	(NULL,"鲜花 天空","05-product-details.html?fid=20","img/floor/16.jpg",398),
	(NULL,"鲜花 星晴","05-product-details.html?fid=21","img/floor/17.jpg",259),
	(NULL,"鲜花 唯美","05-product-details.html?fid=22","img/floor/18.jpg",118),
	(NULL,"鲜花 爱恋","05-product-details.html?fid=23","img/floor/19.jpg",218),
	(NULL,"鲜花 温暖","05-product-details.html?fid=24","img/floor/20.jpg",238),
	(NULL,"鲜花 美好","05-product-details.html?fid=25","img/floor/21.jpg",460),
	(NULL,"鲜花 相伴","05-product-details.html?fid=26","img/floor/22.jpg",788),
	(NULL,"鲜花 爱恋","05-product-details.html?fid=27","img/floor/23.jpg",289),
	(NULL,"鲜花 约定","05-product-details.html?fid=28","img/floor/24.jpg",689);
#楼层 f4	
INSERT INTO product_f4 VALUES
	(NULL,"鲜花 故乡","05-product-details.html?fid=29","img/floor/25.jpg",199),
	(NULL,"鲜花 还念","05-product-details.html?fid=30","img/floor/26.jpg",258),
	(NULL,"鲜花 阳光","05-product-details.html?fid=32","img/floor/27.jpg",229),
	(NULL,"鲜花 海岸","05-product-details.html?fid=33","img/floor/28.jpg",239),
	(NULL,"鲜花 晚安","05-product-details.html?fid=34","img/floor/29.jpg",439),
	(NULL,"鲜花 祝福","05-product-details.html?fid=35","img/floor/30.jpg",228);
#楼层 f5
INSERT INTO product_f5 VALUES	
	(NULL,"鲜花 芬芳","05-product-details.html?fid=36","img/floor/31.jpg",169),
	(NULL,"鲜花 月光","05-product-details.html?fid=37","img/floor/32.jpg",169),
	(NULL,"鲜花 女神","05-product-details.html?fid=38","img/floor/33.jpg",169),
	(NULL,"鲜花 如初","05-product-details.html?fid=39","img/floor/34.jpg",169),
	(NULL,"鲜花 温情","05-product-details.html?fid=40","img/floor/35.jpg",169),
	(NULL,"鲜花 回忆","05-product-details.html?fid=41","img/floor/36.jpg",169);

--	(NULL,"鲜花 有你","05-product-details.html?fid=42","img/flowers/38.jpg",269),
--	(NULL,"鲜花 宝贝","05-product-details.html?fid=43","img/flowers/39.jpg",239),
--	(NULL,"鲜花 青玄","05-product-details.html?fid=44","img/flowers/40.jpg",169),
--	(NULL,"鲜花 精选","05-product-details.html?fid=45","img/flowers/41.jpg",369),
--	(NULL,"鲜花 典雅","05-product-details.html?fid=46","img/flowers/42.jpg",369),
--	(NULL,"鲜花 唯美","05-product-details.html?fid=47","img/flowers/43.jpg",169),
--	(NULL,"鲜花 多芬","05-product-details.html?fid=48","img/flowers/44.jpg",669),
--	(NULL,"鲜花 芳香","05-product-details.html?fid=49","img/flowers/45.jpg",669),
--	(NULL,"鲜花 甜美","05-product-details.html?fid=50","img/flowers/46.jpg",469),
--	(NULL,"鲜花 爱恋","05-product-details.html?fid=51","img/flowers/47.jpg",369),
--	(NULL,"鲜花 优雅","05-product-details.html?fid=52","img/flowers/48.jpg",469),
--	(NULL,"鲜花 大方","05-product-details.html?fid=53","img/flowers/49.jpg",559),
--	(NULL,"鲜花 气质","05-product-details.html?fid=54","img/flowers/50.jpg",669),
--	(NULL,"鲜花 独特","05-product-details.html?fid=55","img/flowers/51.jpg",389),
--	(NULL,"鲜花 唯一","05-product-details.html?fid=56","img/flowers/52.jpg",269),
--	(NULL,"鲜花 久伴","05-product-details.html?fid=57","img/flowers/53.jpg",239),
--	(NULL,"鲜花 告白","05-product-details.html?fid=58","img/flowers/54.jpg",299),
--	(NULL,"鲜花 美人","05-product-details.html?fid=59","img/flowers/55.jpg",259),
--	(NULL,"鲜花 母爱","05-product-details.html?fid=60","img/flowers/56.jpg",219),
--	(NULL,"鲜花 维美","05-product-details.html?fid=61","img/flowers/57.jpg",229),
--	(NULL,"鲜花 原谅","05-product-details.html?fid=62","img/flowers/58.jpg",239),
--	(NULL,"鲜花 暗香","05-product-details.html?fid=63","img/flowers/59.jpg",249);

#商品热销排行表
INSERT INTO product_sort VALUES
	(NULL,"梦里花开","05-product-details.html?fid=64","img/friends/161.jpg",289),
	(NULL,"最美的你","05-product-details.html?fid=65","img/friends/162.jpg",689),
	(NULL,"永远幸福","05-product-details.html?fid=66","img/friends/163.jpg",199),
	(NULL,"美好时光","05-product-details.html?fid=67","img/friends/164.jpg",258),
	(NULL,"灿烂时光","05-product-details.html?fid=68","img/friends/165.jpg",229),
	(NULL,"天使祝福","05-product-details.html?fid=69","img/friends/166.jpg",239),
	(NULL,"阳光温暖","05-product-details.html?fid=70","img/friends/167.jpg",439),
	(NULL,"热情似火","05-product-details.html?fid=71","img/friends/168.jpg",228);
	
#商品详情页 轮播
INSERT INTO product_carrousel VALUES
	(NULL,"夏日亲情","05-product-details.html?fid=80","img/friends/150.jpg",169),
	(NULL,"一如既往","05-product-details.html?fid=81","img/friends/151.jpg",369),
	(NULL,"念念不忘","05-product-details.html?fid=82","img/friends/152.jpg",369),
	(NULL,"无声陪伴","05-product-details.html?fid=83","img/friends/153.jpg",289),
	(NULL,"温馨祝福","05-product-details.html?fid=84","img/friends/154.jpg",689),
	(NULL,"其乐融融","05-product-details.html?fid=85","img/friends/155.jpg",199),
	(NULL,"天使爱恋","05-product-details.html?fid=86","img/friends/156.jpg",258),
	(NULL,"柔情蜜意","05-product-details.html?fid=87","img/friends/157.jpg",229),
	(NULL,"阳光心情","05-product-details.html?fid=88","img/friends/158.jpg",239),
	(NULL,"花香四溢","05-product-details.html?fid=90","img/friends/159.jpg",439),
	(NULL,"永远依靠","05-product-details.html?fid=91","img/friends/160.jpg",228);
#商品详情页 热销单品
INSERT INTO recommended_sort VALUES
	(NULL,"永不褪色","05-product-details.html?fid=73","img/friends/170.jpg",169),
	(NULL,"阳光海岸","05-product-details.html?fid=74","img/friends/171.jpg",169),
	(NULL,"柔情似水","05-product-details.html?fid=75","img/friends/172.jpg",169),
	(NULL,"恋恋不忘","05-product-details.html?fid=76","img/friends/146.jpg",169),
	(NULL,"为爱相随","05-product-details.html?fid=77","img/friends/147.jpg",169),
	(NULL,"心花怒放","05-product-details.html?fid=78","img/friends/148.jpg",269),
	(NULL,"青青子衿","05-product-details.html?fid=79","img/friends/149.jpg",239),
	(NULL,"绿野仙踪","05-product-details.html?fid=72","img/friends/169.jpg",169);
#首页商品大小图表 
INSERT INTO product_show VALUES
(NULL,"一生期盼","紫玫瑰19枝、紫色桔梗6枝、搭配适量紫色雏菊、银叶菊、绿叶",259,32413,"05-product-details.html?fid=92","爱你是我一生的期盼，祝你一生都幸福，快乐永远","img/product/1.jpg","img/product/1.jpg"),
(NULL,"梦里花开","紫色桔梗1扎,白色opp雾面纸 白绿罗纹带",359,39413,"05-product-details.html?fid=93","眼波如水，映出窗外繁星点点。迷离的星光，在淡淡的云烟中隐约闪现。","img/product/2.jpg","img/product/2.jpg"),
(NULL,"花仙子","蓝绣球2枝，粉绣球1枝，紫玫瑰9枝，红豆3枝，搭配适量紫红色勿忘我",338,52413,"05-product-details.html?fid=94","能给人们带来幸福的花儿，在那静静绽放；可爱的人啊，正采摘着七色花而来！","img/product/3.jpg","img/product/4.jpg"),
(NULL,"浪漫巴黎"," 红玫瑰12枝，石竹梅7枝，尤加利适量",259,32413,"05-product-details.html?fid=95","不是因为特别才珍惜，而是因为珍惜才显得特别。","img/product/4.jpg","img/product/3.jpg"),
(NULL,"向日葵的夏天","向日葵3枝，绿色康乃馨6枝，小绿菊3枝，栀子叶2枝，黄莺4枝，银叶菊5枝",259,32413,"05-product-details.html?fid=96","夏天的向日葵不说心事，感谢你陪伴我，走过了每一步，触碰感情深处，我才读懂幸福！","img/product/5.jpg","img/product/2.jpg"),
(NULL,"一往情深","高档礼盒装鲜花:19枝红玫瑰，勿忘我适量",259,32413,"05-product-details.html?fid=97","你的轻柔像阵微风，让我从容不迫，想让你知道，我对你始终一往情深","img/product/6.jpg","img/product/3.jpg")
