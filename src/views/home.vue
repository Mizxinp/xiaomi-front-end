<template>
  <div>
    <!-- 头部部分 -->
    <div id="container">
      <nav-header></nav-header>
      <!--网页主体内容区域  -->
      <div id="content">
        <!--网页主体内容区域  Banner -->
        <div id="banner">
          <div id="bannerLeftBox">
            <ul>
              <li>手机 平板 电话卡<span>&gt;</span></li>
              <li>电视 盒子<span>&gt;</span></li>
              <li>路由器 智能硬件<span>&gt;</span></li>
              <li>移动电源 插线板<span>&gt;</span></li>
              <li>耳机 音箱<span>&gt;</span></li>
              <li>电池 存储卡<span>&gt;</span></li>
              <li>保护套 后盖<span>&gt;</span></li>
              <li>贴膜 其他配件<span>&gt;</span></li>
              <li>米兔 服装<span>&gt;</span></li>
              <li>箱包 其他周边<span>&gt;</span></li>
            </ul>
          </div>
        </div>
        <div class="h15"></div>
        <!--网页主体内容区域  product -->
        <div id="product">
          <div id="productService">
            <div class="productServiceBox">
              <img src="/static/service1.jpg" />
              <span><a href="#">开放购买</a></span>
            </div>
            <div class="spaceY"></div>
            <div class="productServiceBox">
              <img src="/static/service2.jpg" />
              <span><a href="#">企业团购</a></span>
            </div>
            <div class="spaceY"></div>
            <div class="productServiceBox">
              <img src="/static/service3.jpg" />
              <span><a href="#">官方产品</a></span>
            </div>
            <div class="spaceX"></div>
            <div class="productServiceBox">

              <img src="/static/service4.jpg" />
              <span><a href="#">F码通道</a></span>
            </div>
            <div class="spaceY"></div>
            <div class="productServiceBox">

              <img src="/static/service5.jpg" />
              <span><a href="#">话费充值</a></span>
            </div>
            <div class="spaceY"></div>
            <div class="productServiceBox">

              <img src="/static/service6.jpg" />
              <span><a href="#">防伪查询</a></span>
            </div>
          </div>
          <div class="productShow">
            <a href="#"><img src="/static/product1.jpg"></a>
          </div>
          <div class="productShow">
            <a href="#"><img src="/static/product2.jpg" width="316px" height="170px"></a>
          </div>
          <div class="productShow">
            <a href="#"><img src="/static/product3.jpg" width="316px" height="170px"></a>
          </div>
        </div>
        <div class="h15"></div>
        <!--网页主体内容区域  star -->
        <div id="star">
          <div id="starTop">
            <h2>小米明星单品</h2>
            <div class="starlr">
              <a href="#"><img src="/static/arrowRight.jpg" /></a>
            </div>
            <div class="starlr" style="border-right: none;">
              <a href="#"><img src="/static/arrowLeft.jpg" /></a>
            </div>
          </div>
          <div id="starShow">
            <div id="starOne" v-for="(item,index) in starGoods" :key="index"  @click="toProductDetail(item.productId)">
              <a href="javascript:;"><img :src="'static/' + item.productImage" /></a>
              <h3 class="title">{{item.productName}}</h3>
              <p class="desc">{{item.productDesc}}</p>
              <p class="price">{{item.salePrice}}元</p>
            </div>
          </div>
        </div>
      </div>
      <!--具体分区  -->
      <div id="main">
        <div class="h22"></div>
        <div id="mainText">

          <!--家电区 -->
          <div id="jiaDianTitle">

            <h2>家电</h2>

            <div id="titleRight">
              <ul>
                <li><a href="#" style="text-decoration: underline;color:#FF6700">热门</a></li>
                <li><a href="#">电视影音</a></li>
                <li><a href="#">电脑</a></li>
                <li><a href="#">家居</a></li>
              </ul>
            </div>
          </div>
          <div id="jiaDian">
            <div id="leftBox">
              <img src="/static/jinghuaqi.jpg" />
            </div>
            <div>
              <ul>
                <li class="jiaDianBox" v-for="(item,index) in hotGoods" :key="index" @click="toProductDetail(item.productId)">
                  <div class="salesRed"> 享9.5折</div>
                  <a href="javascript:;"><img :src="'static/'+item.productImage" /></a>
                  <h3 class="title">{{item.productName}}</h3>
                  <p class="desc">{{item.productDesc}}</p>
                  <p class="price">{{item.salePrice}}元</p>
                  <div class="orange">不错的小米，支持，支持</div>
                </li>
              </ul>
            </div>
            <div class="jiaDianBox">
              <div class="eight" style="margin-top: 0px;">
                <div class="eightRight">
                  <a href="#"><img src="/static/jiadian8.jpg" /></a>
                </div>
                <div class="eightLeft">
                  <h3 class="title" style="margin-top: 50px;">小白摄像机</h3>
                  <p class="price">999元</p>
                </div>

              </div>
              <div class="eightSpaceX"></div>
              <div class="eight">
                <div class="eightRight">
                  <a href="#"><img src="/static/more.png" style="width: 51px; height: 51px; margin-top: 30;margin-left: 10px;" /></a>
                </div>
                <div class="eightLeft">
                  <h3 class="title" style="margin-top: 30px;">浏览更多</h3>
                  <p class="price">热门</p>
                </div>
              </div>
            </div>

          </div>
          <!--智能区 
					<div id="zhiNeng">
					
					</div>
					-->
          <!--搭配区 
					<div id="zhiNeng">
					
					</div>
					-->
          <!--配件区 
					<div id="zhiNeng">
					
					</div>
					-->

        </div>
        <div id="space60"></div>
      </div>
      <!--网页底部  -->
      <nav-footer></nav-footer>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      hotGoods: [],
      starGoods:[]
    };
  },
  created: function() {
    this.init();
  },
  mounted: function() {},
  methods: {
    init() {
      axios.get("goods/goodsList").then(response => {
        console.log(response)
        var res = response.data;
        if (res.status == "0") {
          this.hotGoods = res.result.hotGoods;
          this.starGoods = res.result.starGoods
        }
      });
    },
    toProductDetail(productId){
      this.$router.push({
        path:'/goodsDetail',
        query:{
          productId:productId
        }
      })
    }
  }
};
</script>

<style scoped>
/***网页主题内容区域**/
#content {
  width: 1226px;
  margin: 0px auto;
}
#content #banner {
  width: 1226px;
  height: 460px;
  background-image: url(../../static/banner1.jpg);
}
#content #banner #bannerLeftBox {
  width: 234px;
  height: 460px;
  background-color: rgba(0, 0, 0, 0.5);
  /*opacity: 0.5;!important;*/
}
#content #banner #bannerLeftBox ul {
  width: 234px;
  height: 420px;
  margin-top: 20px;
  float: left;
}
#content #banner #bannerLeftBox ul li {
  width: 200px;
  height: 40px;
  padding-left: 20px;
  line-height: 40px;
  font-size: 14px;
  color: #ccc;
}
#content #banner #bannerLeftBox ul li span {
  float: right;
  margin-right: 35px;
}

#content #product {
  width: 100%;
  height: 170px;
}
#content #product #productService {
  width: 233px;
  height: 170px;
  float: left;
}
#content #product .productShow {
  width: 316px;
  height: 170px;
  float: left;
  margin-left: 14px;
}
#product #productService .productServiceBox {
  width: 77px;
  height: 84px;
  background-color: #5f5750;
  float: left;
}
#product #productService .spaceX {
  width: 233px;
  height: 1px;
  background-color: #665e57;
  float: left;
}
#product #productService .spaceY {
  width: 1px;
  height: 84px;
  background-color: #665e57;
  float: left;
}
#product #productService .productServiceBox img {
  margin-top: 20px;
  margin-left: 26px;
}
#product #productService .productServiceBox span {
  display: block;
  margin-top: 8px;
  margin-left: 15px;
}
#product #productService .productServiceBox a {
  color: #b0b0b0;
  font-size: 12px;
}
#product #productService .productServiceBox a:hover {
  color: #e0e0e0;
}
#content #star {
  width: 1226px;
  height: 400px;
  margin: 0px auto;
}
#content #star #starTop {
  width: 1226px;
  height: 58px;
}
#content #star #starTop h2 {
  margin-top: 20px;
  font-weight: 400;
  float: left;
}

#content #star #starTop .starlr {
  width: 35px;
  height: 20px;
  float: right;
  margin-top: 20px;
  border: 1px solid #e0e0e0;
}
#content #star #starTop .starlr img {
  margin-top: 2px;
  margin-left: 10px;
}
#content #star #starShow {
  width: 1226px;
  height: 342px;
}
#content #star #starShow div {
  width: 235px;
  height: 341px;
  margin-right: 10px;
  float: left;
}
#content #star #starShow #starOne {
  border-top: 1px solid #ffac13;
}
#content #star #starShow #starTWo {
  border-top: 1px solid #83c44e;
}
#content #star #starShow #starThree {
  border-top: 1px solid #2196f3;
}
#content #star #starShow #starFour {
  border-top: 1px solid #e53935;
}
#content #star #starShow #starFive {
  border-top: 1px solid #00c0a5;
}
#content #star #starShow img {
  width: 160px;
  height: 160px;
  margin-top: 50px;
  margin-left: 40px;
}
#content #star #starShow h3 {
  font-size: 14px;
  color: black;
  text-align: center;
  font-weight: 300;
  cursor: pointer; /*鼠标变成手型*/
}
#content #star #starShow .desc {
  color: #b0b0b0;
  margin-top: 5px;
  font-size: 14px;
  text-align: center;
}
#content #star #starShow .price {
  color: #ff6700;
  margin-top: 10px;
  font-size: 14px;
  text-align: center;
}

#main {
  width: 100%;
  background: #f5f5f3;
}
#main #mainText {
  width: 1226px;
  margin: 0px auto;
  margin-top: 30px;
}
#main #mainText #jiaDianTitle {
  width: 100%;
  height: 58px;
}
#main #mainText #jiaDianTitle h2 {
  float: left;
  margin-top: 10px;
  margin-left: 5px;
}
#main #mainText #jiaDianTitle #titleRight {
  width: 280px;
  height: 42px;
  float: right;
  margin-top: 20px;
}
#main #mainText #jiaDianTitle #titleRight ul li {
  float: left;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 18px;
}
#main #mainText #jiaDianTitle #titleRight a {
  color: #424242;
}
#main #mainText #jiaDianTitle #titleRight a:hover {
  color: #ff6700;
  text-decoration: underline;
}
#main #mainText #jiaDian {
  width: 100%;
  height: 620px;
  margin-top: 5px;
}
#main #mainText #jiaDian #leftBox {
  width: 234px;
  height: 620px;
  float: left;
}
#main #mainText #jiaDian .jiaDianBox {
  box-shadow: 0 2px 10px 1px var(--primary-shadow);
  width: 234px;
  height: 300px;
  float: left;
  margin-left: 10px;
  margin-top: 12px;
  background-color: white;
  position: relative;
  cursor:pointer;
}
#main #mainText #jiaDian .jiaDianBox .orange {
  width: 234px;
  height: 0px;
  background-color: #ff6700;
  position: absolute;
  top: 215px;
  left: 0px;
  opacity: 0;
  color: white;
  font-size: 12px;
  transition: all 2s linear;
}
#main #mainText #jiaDian .jiaDianBox:hover .orange {
  display: block;
}
#main #mainText #jiaDian .jiaDianBox img {
  width: 160px;
  height: 160px;
  margin-top: 50px;
  margin-left: 40px;
}
#main #mainText #jiaDian .jiaDianBox h3 {
  font-size: 14px;
  color: black;
  text-align: center;
  font-weight: 300;
  cursor: pointer; /*鼠标变成手型*/
}
#main #mainText #jiaDian .jiaDianBox .desc {
  color: #b0b0b0;
  margin-top: 5px;
  font-size: 14px;
  text-align: center;
}
#main #mainText #jiaDian .jiaDianBox .price {
  color: #ff6700;
  margin-top: 10px;
  font-size: 14px;
  text-align: center;
}
#main #mainText #jiaDian .jiaDianBox .salesRed {
  width: 70px;
  height: 20px;
  background-color: red;
  color: white;
  position: absolute;
  left: 85px;
  text-align: center;
  font-size: 12px;
  line-height: 20px;
}
#main #mainText #jiaDian .jiaDianBox .salesGreen {
  width: 70px;
  height: 20px;
  background-color: #83c44e;
  color: white;
  position: absolute;
  left: 85px;
  text-align: center;
  font-size: 12px;
  line-height: 20px;
}
#main #mainText #jiaDian .jiaDianBox .eight {
  width: 234px;
  height: 145px;
  margin-top: 10px;
}
#main #mainText #jiaDian .jiaDianBox .eight .eightRight {
  width: 117px;
  height: 145px;
  float: right;
}
#main #mainText #jiaDian .jiaDianBox .eight .eightRight img {
  width: 80px;
  height: 80px;
  margin-top: 30px;
  margin-left: 10px;
}
#main #mainText #jiaDian .jiaDianBox .eight .eightLeft {
  width: 117px;
  height: 145px;
  float: left;
}
#main #mainText #jiaDian .jiaDianBox .eightSpaceX {
  width: 234px;
  height: 10px;
  clear: both;
  background-color: #f5f5f3;
}
#main #space60 {
  width: 100%;
  height: 60px;
  background-color: #f5f5f3;
}
</style>