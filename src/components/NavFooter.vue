<template>
    <div>
        <div class="footer">
				<!--底部内容区域     -->
				<div class="footer_content">
					<div class="footer_service">
						<ul>
							<li><a href="#">预约维修服务</a></li>
							<li><a href="#">7天无理由退货</a></li>
							<li><a href="#">15天免费换货</a></li>
							<li><a href="#">满150元包邮</a></li>
							<li class="lastli"><a href="#">520余家售后网点</a></li>
						</ul>
					</div>
					<!--底部ul列表区 -->
					<div class="footer_links">
						<div class="footer_list">
							<dl>
								<dt>帮助中心</dt>
								<dd><a href="#">账户管理</a></dd>
								<dd><a href="#">购物指南</a></dd>
								<dd><a href="#">订单管理</a></dd>
							</dl>
							<dl>
								<dt>服务支持</dt>
								<dd><a href="#">售后政策</a></dd>
								<dd><a href="#">资助服务</a></dd>
								<dd><a href="#">相关下载</a></dd>
							</dl>
							<dl>
								<dt>线下门店</dt>
								<dd><a href="#">小米之间</a></dd>
								<dd><a href="#">服务网点</a></dd>
								<dd><a href="#">授权体验店</a></dd>
							</dl>
							<dl>
								<dt>关于小米</dt>
								<dd><a href="#">了解小米</a></dd>
								<dd><a href="#">加入小米</a></dd>
								<dd><a href="#">投资者关系</a></dd>
							</dl>
							<dl>
								<dt>关注我们</dt>
								<dd><a href="#">新浪微博</a></dd>
								<dd><a href="#">官方微信</a></dd>
								<dd><a href="#">联系我们</a></dd>
							</dl>
							<dl>
								<dt>特色服务</dt>
								<dd><a href="#">F码通道</a></dd>
								<dd><a href="#">礼物码</a></dd>
								<dd><a href="#">防伪查询</a></dd>
							</dl>
						</div>
						<div class="footer_tel">
							<p class="phone">400-100-5678</p>
							<p class="time1">周一至周日 8:00-18:00<br>
									（仅收市话费）</p>
						</div>
					</div>
				</div>
				<!--底部连接区域     -->
				<div class="footer_lianjie">
					
				</div>
			</div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.footer{
	width: 100%;
	background: white;
	margin: 0 auto;
}
.footer .footer_content{
	width:1226px;
	height: 272px;
	margin: 0 auto;

}
.footer .footer_content .footer_service{
	width: 100%;
	height: 50px;
	margin-top: 30px;
	border-bottom: 1px solid #E0E0E0 ;
}
.footer .footer_content .footer_service li{
	width: 240px;
	height: 25px;
	line-height: 25px;
	text-align: center;
	font-size: 16px;
	float: left;
	border-right: 1px solid #E0E0E0;
}
.footer .footer_content .footer_service  .lastli{
	border-right:none;
}
.footer .footer_content .footer_service li a{
		color: #757575;
}
.footer .footer_content .footer_service li a:hover{
	color: #FFAC13;
}
.footer .footer_content .footer_links{
	width: 1226px;
	height: 192px;
}
.footer .footer_content .footer_links .footer_list{
	width: 966px;
	height: 112px;
	margin-top: 40px;
	float: left;
	border-right: 1px solid #E0E0E0;
}

.footer .footer_content .footer_links .footer_list dl{
	width: 160px;
	height: 112px;
	float: left;
	margin-top: 0px;
}
.footer .footer_content .footer_links #footer_list dd{
	margin-left: 0px;
	font-size: 12px;
	margin-top: 10px;
}
.footer_links .footer_list a{
	color: #757575;
}
.footer_links .footer_list a:hover{
	color: #FF6700;
}
.footer .footer_content .footer_links .footer_list dt{
	color:#424242;
	font-size: 14px;
	margin-bottom: 10px;
	
}
.footer .footer_content .footer_links .footer_tel{
	width: 259px;
	height: 112px;
	margin-top: 40px;
	float: right;
	text-align: center;
}
.footer_links .footer_tel .phone{
 	font-size: 22px;
 	color: #FF6700;
 }
.footer_links .footer_tel .time1{
	font-size: 12px;
	color: #757575;
}

</style>