<template>
  <div>
    <nav-header ref="loginSignal"></nav-header>
    <div class="container-wrap">
      <div class="container">
        <div class="top">
          <div class="title">
            <h1>{{goodsDetail.productName}}</h1>
          </div>
          <div class="basic-info">
            <div class="left">
              <img :src="'static/' + goodsDetail.productImage" alt="" referrerpolicy="never">
            </div>
            <div class="right">
              <div>
                <ul>

                  <li>描述：{{goodsDetail.productDesc}}</li>
                  <li>颜色：黑</li>
                  <li>套餐：原装旗舰</li>
                  <li>
                    <div class="number">
                      <span>数量：</span>
                      <a href="javascript:;" @click="numEdit('sub')" >-</a>
                      <span>{{subOrAdd || 1}}</span>
                      <a href="javascript:;" @click="numEdit('add')" >+</a>
                    </div>
                  </li>
                  <li>运费：10元</li>
                  <li class="price">价格：￥{{goodsDetail.salePrice}}</li>
                </ul>
              </div>
              <div class="add-cart-box">
                <a href="javascript:;" class="add-cart" @click="addCart(goodsDetail.productId)">加入购物车</a>
              </div>
            </div>
          </div>
        </div>
        <section class="detail-summary">
          <div class="summary">
            <div>
              <h2>商品详情 · · · · · ·</h2>
            </div>
            <div class="detail"></div>
          </div>
          <div class="summary">
            <div>
              <h2></h2>
            </div>
            <div class="detail"></div>
          </div>
          <div class="comments"></div>
        </section>

      </div>
      <modal></modal>
    </div>
    <modal :loginSignal="mkShow" v-on:close="closeMask">
      <p slot="message" class="message">
        请先登录，否则无法加入购物车！
      </p>
      <div slot="btnGroup">
        <a href="javascript:;" class="btn-wrap mask" @click="mkShow = false">关闭</a>
        <a href="javascript:;" class="btn-wrap mask" @click="toLogin">前往登录</a>
      </div>
    </modal>
    <modal :loginSignal="mkShowCart" v-on:close="closeMask">
      <p slot="message" class="message">
        加入购物车成功
      </p>
      <div slot="btnGroup">
        <router-link href="javascript:;" class="btn-wrap mask" v-on:click="mkShowCart=false" :to="'/home'">继续购物</router-link>
        <router-link href="javascript:;" class="btn-wrap mask" :to="{path:'/cart'}">查看购物车</router-link>
      </div>
    </modal>
    <div class="over-mask" v-if="mkShow" @click="mkShow=false"></div>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      goodsDetail: {},
      mkShow: false,
      mkShowCart: false,
      subOrAdd:''
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      var productId = this.$route.query.productId;
      axios.get("goods/goodsDetail?productId=" + productId).then(response => {
        var res = response.data;

        if (res.status == "0") {
          this.goodsDetail = res.result;
        }
      });
    },
    addCart(productId) {
      axios.post("goods/addCart", { productId: productId }).then(response => {
        let res = response.data;
        if (res.status == "0") {
          // alert('成功');
          this.mkShowCart = true;
        } else {
          alert('失败')
          // this.mkShow = true;
        }
      });
    },
    closeMask() {
      this.mkShow = false;
      this.mkShowCart = false;
    },
    toLogin() {
      this.$refs.loginSignal.toLogin();
      this.mkShow = false;
    },
    numEdit(flag){
      if (flag === "sub") {
        if (this.subOrAdd <= 0) {
          return;
        }
        this.subOrAdd--;
      } else if (flag === "add") {
        this.subOrAdd++;
      }
    }
  }
};
</script>

<style scoped>
.container-wrap {
  width: 100%;
  /* background-color: green; */
}
.container {
  width: 1024px;
  margin: 0 auto;
  /* background-color: red; */
}

.top {
  height: 500px;
}
.title {
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
  margin-top: 20px;
}
.title h1 {
  height: 50px;
  line-height: 50px;
  font-size: 25px;
  margin-left: 10px;
}
.basic-info {
  margin-bottom: 50px;
  height: 300px;
}
.basic-info::after {
  display: block;
  clear: both;
  content: "";
  height: 0px;
}
.basic-info .left {
  float: left;
}
.basic-info .left img {
  width: 300px;
  height: 400px;
}
.basic-info .right {
  margin-left: 50px;
  float: left;
}
.basic-info .right ul li {
  margin-bottom: 15px;
}

.basic-info .right .price {
  color: #f00;
}

.add-cart-box {
  width: 250px;
  height: 44px;
  background-color: #fe4c5a;
}
.add-cart {
  display: block;
  width: 250px;
  height: 44px;
  line-height: 44px;
  text-align: center;
  color: #fff;
}
.add-cart-box:hover {
  background-color: rgb(247, 63, 63);
  transition: all, 0.4s, ease-out;
}

.detail-summary {
  margin-top: 10px;
}
.summary h2 {
  font: 16px Arial;
  color: #007722;
  margin: 20px 0;
}
.summary .detail {
  margin-top: 15px;
}

.mask {
  margin-right: 10px;
  width: 180px;
  float: left;
  display: inline-block;
  font-size: 20px;
  position: relative;
  top: 110px;
  left: -32px;
  color: #d1434a;
  letter-spacing: 4px;
}
.mask-close {
  position: relative;
  top: 113px;
  width: 303px;
  color: #d1434a;
}
.message {
  font-size: 20px;
  position: relative;
  top: 53px;
  left: -32px;
}
.number a {
  display: inline-block;
  width: 40px;
  height: 19px;
  text-align: center;
  line-height: 19px;
  background-color: #f0f0f0;
  color: #777;
}
</style>