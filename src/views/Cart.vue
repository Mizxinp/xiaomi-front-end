<template>
  <div class="body">
    <nav-header></nav-header>
    <svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <symbol id="icon-add" viewBox="0 0 32 32">
          <title>add2</title>
          <path class="path1" d="M15 17h-13.664c-0.554 0-1.002-0.446-1.002-1 0-0.552 0.452-1 1.002-1h13.664v-13.664c0-0.554 0.446-1.002 1-1.002 0.552 0 1 0.452 1 1.002v13.664h13.664c0.554 0 1.002 0.446 1.002 1 0 0.552-0.452 1-1.002 1h-13.664v13.664c0 0.554-0.446 1.002-1 1.002-0.552 0-1-0.452-1-1.002v-13.664z"></path>
        </symbol>
        <symbol id="icon-ok" viewBox="0 0 32 32">
          <title>ok</title>
          <path class="path1" d="M31.020 0.438c-0.512-0.363-1.135-0.507-1.757-0.406s-1.166 0.435-1.529 0.937l-17.965 24.679-5.753-5.67c-0.445-0.438-1.035-0.679-1.664-0.679s-1.219 0.241-1.664 0.679c-0.917 0.904-0.917 2.375 0 3.279l7.712 7.6c0.438 0.432 1.045 0.681 1.665 0.681l0.195-0.008c0.688-0.057 1.314-0.406 1.717-0.959l19.582-26.9c0.754-1.038 0.512-2.488-0.538-3.233z"></path>
        </symbol>
        <symbol id="icon-edit" viewBox="0 0 32 32">
          <title>edit</title>
          <path class="path1" d="M28.287 8.51l-4.805-4.806 0.831-0.831c0.472-0.472 1.086-0.777 1.564-0.777 0.248 0 0.452 0.082 0.622 0.253l3.143 3.144c0.539 0.54 0.133 1.529-0.524 2.186l-0.831 0.831zM26.805 9.992l-1.138 1.138-4.805-4.806 1.138-1.138 4.805 4.806zM24.186 12.612l-14.758 14.762-4.805-4.806 14.758-14.762 4.805 4.806zM7.379 28.288l-4.892 1.224 1.223-4.894 3.669 3.67zM31.123 4.011l-3.143-3.144c-0.567-0.567-1.294-0.867-2.103-0.867-1.036 0-2.174 0.52-3.045 1.391l-20.429 20.436c-0.135 0.134-0.23 0.302-0.276 0.487l-2.095 8.385c-0.089 0.355 0.017 0.736 0.276 0.995 0.198 0.198 0.461 0.307 0.741 0.307 0.085 0 0.171-0.010 0.254-0.031l8.381-2.096c0.185-0.047 0.354-0.142 0.487-0.276l20.43-20.436c1.409-1.41 2.042-3.632 0.524-5.15v0z"></path>
        </symbol>
        <symbol id="icon-del" viewBox="0 0 32 32">
          <title>delete</title>
          <path class="path1" d="M11.355 4.129v-2.065h9.29v2.065h-9.29zM6.194 29.935v-23.742h19.613v23.742h-19.613zM30.968 4.129h-8.258v-3.097c0-0.569-0.463-1.032-1.032-1.032h-11.355c-0.569 0-1.032 0.463-1.032 1.032v3.097h-8.258c-0.569 0-1.032 0.463-1.032 1.032s0.463 1.032 1.032 1.032h3.097v24.774c0 0.569 0.463 1.032 1.032 1.032h21.677c0.569 0 1.032-0.463 1.032-1.032v-24.774h3.097c0.569 0 1.032-0.463 1.032-1.032s-0.463-1.032-1.032-1.032v0z"></path>
          <path class="path2" d="M10.323 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"></path>
          <path class="path3" d="M16 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"></path>
          <path class="path4" d="M21.677 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"></path>
        </symbol>
        <symbol id="icon-clock" viewBox="0 0 32 32">
          <title>clock</title>
          <path class="path1" fill="#605f5f" d="M16 29c-7.168 0-13-5.831-13-13s5.832-13 13-13c7.168 0 13 5.832 13 13s-5.832 13-13 13zM16 0c-8.822 0-16 7.178-16 16s7.178 16 16 16c8.822 0 16-7.178 16-16s-7.178-16-16-16z"></path>
          <path class="path2" fill="#605f5f" d="M23.958 21.837l-6.958-6.489v-6.282c0-0.827-0.673-1.5-1.5-1.5s-1.5 0.673-1.5 1.5v6.934c0 0.414 0.174 0.814 0.477 1.098l7.435 6.934c0.279 0.259 0.642 0.402 1.023 0.402 0.415 0 0.814-0.174 1.096-0.477 0.564-0.605 0.532-1.555-0.073-2.12z"></path>
        </symbol>
      </defs>
    </svg>
    <div class="container cart-top">
      <div class="cart">
        <div class="my-cart" v-on:logoutInit="init()">我的购物车</div>
        <div class="cart-list">
          <ul>
            <li class="pro-name">名称</li>
            <li>单价</li>
            <li>数量</li>
            <li>总价</li>
            <li>删除</li>
          </ul>
        </div>
        <div class="cart-item" v-for="(item,index) in cartList" :key="index">
          <ul>
            <li class="name-wrap row">
              <div class="name">
                <a href="javascript:;" :class="{'check':item.checked == '1'}" @click="editCart('check',item)">
                  <svg class="icon icon-ok">
                    <use xlink:href="#icon-ok"></use>
                  </svg>
                </a>
                <img :src="'static/' + item.productImage" alt="">
                <span>{{item.productName}}</span>
              </div>
            </li>
            <li class="price-wrap row">
              <div class="price">{{item.salePrice}}</div>
            </li>
            <li class="number-wrap">
              <div class="number">
                <a href="javascript:;" @click="editCart('sub',item)">-</a>
                <span>{{item.productNum}}</span>
                <a href="javascript:;" @click="editCart('add',item)">+</a>
              </div>
            </li>
            <li class="totle-price-wrap row">
              <div class="totle-price">{{item.productNum * item.salePrice}}</div>
            </li>
            <li class="delete-wrap row">
              <div class="delete" @click="deleteCart(item.productId)">
                <svg class="icon icon-del">
                  <use xlink:href="#icon-del"></use>
                </svg>
              </div>
            </li>
          </ul>

        </div>
        <div class="cart-totle">
          <div class="select-all">
            <a href="javascript:;" @click="checkAll">
              <span class="cir" :class="{'check':checkAllFlag}">
                <svg class="icon icon-ok all">
                    <use xlink:href="#icon-ok"></use>
                  </svg>
              </span>
              <span>全选</span>
            </a>

          </div>
          <div class="totle">
            <div class="all">
              总共：
              <span>{{totlePrice}}</span>
            </div>
            <div class="btn-wrap next">
              <router-link href="javascript:;" class="settlement" :to="'/address'">结算</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <modal :loginSignal="cartMask" v-on:close="closeMask">
      <p slot="message" class="message">
        确认删除此商品？
      </p>
      <div slot="btnGroup">
        <a href="javascript:;" class="btn-wrap mask" v-on:click="cartMask=false">取消</a>
        <a href="javascript:;" class="btn-wrap mask" @click="delCartConfirm">确认</a>
      </div>
    </modal>
    <div class="over-mask" v-if="cartMask" @click="cartMask=false"></div>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      cartList: [],
      cartMask: false
    };
  },
  mounted() {
    this.init();
  },
  computed:{
    checkAllFlag(){
      return this.checkCount == this.cartList.length;
    },
    checkCount(){
      let i = 0;
      this.cartList.forEach(item => {
        if(item.checked == '1'){
          i++
        }
       
      });
       return i
    },
    totlePrice(){
      let totle = 0;
      this.cartList.forEach(item => {
        if(item.checked == '1'){
          totle += parseInt(item.productNum) * parseFloat(item.salePrice)
        }
      });
      return totle
    }
  },
  methods: {
    init() {
      axios.get("users/cartList").then(response => {
        let res = response.data;
        if (res.status == "0") {
          this.cartList = res.result;
        }
      });
    },
    editCart(flag, item) {
      if (flag === "sub") {
        if (item.productNum <= 0) {
          return;
        }
        item.productNum--;
      } else if (flag === "add") {
        item.productNum++;
      } else {
        item.checked = item.checked == "1" ? "0" : "1";
      }

      axios
        .post("users/editCart", {
          productNum: item.productNum,
          checked: item.checked,
          productId: item.productId
        })
        .then(response => {
          let res = response.data;
          if (res.status === "0") {
          }
        });
    },
    closeMask() {
      this.cartMask = false;
    },
    deleteCart(productId) {
      this.productId = productId;
      this.cartMask = true;
    },
    delCartConfirm() {
      let productId = this.productId;
      axios
        .post("users/delCartConfirm", { productId: productId })
        .then(response => {
          let res = response.data;
          if (res.status == "0") {
            // alert('删除成功')
            this.cartMask = false;
            this.init();
          }
        });
    },
    checkAll(){
      let flag = !this.checkAllFlag;
      this.cartList.forEach(item => {
        item.checked = flag ? '1' : '0'
      });

      axios.post('users/checkAll',{checkAll:flag}).then(response=>{
        let res = response.data;
        if(res.status == '0'){
          
        }
      })
    }
  }
};
</script>

<style scoped>
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: #fff;
}
.body {
  background-color: #f5f7fc;
}
.cart-top {
  margin-top: 100px;
}
.container {
  width: 100%;
  min-height: 500px;
}
.cart {
  width: 1280px;
  margin: 0 auto;
}
.my-cart {
  margin: 40px 0 20px 0;
}
.cart-list {
  background-color: #605f5f;
  height: 50px;
}
.cart-list ul {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.cart-list ul li {
  width: 208px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: #fff;
}
.cart-list ul .pro-name {
  flex: 2;
}
.cart-item {
  border: 1px solid #e9e9e9;
  height: 176px;
  background-color: #fff;
}
.cart-item ul {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.cart-item ul li {
  width: 208px;
  height: 176px;
  text-align: center;
}
.cart-item .name-wrap {
  flex: 2;
}
.cart-item .name {
  height: 110px;
  text-align: left;
  margin-top: 20px;
}
.cart-item .name a {
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid #929292;
  margin: 0 30px 0px 20px;
  position: relative;
  top: -19px;
}
.cart-item .name img {
  width: 100px;
  height: 100px;
  border: 1px solid #fff;
}
.cart-item .name span {
  display: inline-block;
  position: relative;
  bottom: 25px;
  left: 36px;
}
.cart-item .price {
  padding: 64px 0;
}
.cart-item .number {
  padding: 60px 0;
}
.cart-item .number a {
  display: inline-block;
  width: 40px;
  height: 28px;
  text-align: center;
  line-height: 28px;
  background-color: #f0f0f0;
  color: #777;
}
.cart-item .totle-price {
  padding: 64px 0;
  color: #ee7a23;
}
.cart-item .delete {
  padding: 64px 0;
}
.cart-totle {
  width: 100%;
  height: 55px;
  border: 1px solid #fff;
  background-color: #fff;
  margin-top: 30px;
  margin-bottom: 100px;
}
.cart-totle .select-all {
  line-height: 55px;
  float: left;
}
.cart-totle .select-all a .cir {
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid #929292;
  margin-right: 5px;
  margin-left: 22px;
  position: relative;
    top: 20px;
}
.cart-totle .select-all a span {
  color: #333;
}
.cart-totle .totle {
  line-height: 55px;
  float: right;
}
.cart-totle .totle .all {
  float: left;
  margin-right: 25px;
}
.cart-totle .totle .all span {
  color: #d1434a;
  font-size: 20px;
}
.cart-totle .totle .next {
  float: right;
}
.cart-totle .totle .btn-wrap .settlement {
  width: 200px;
  height: 54px;
  display: inline-block;
  text-align: center;
  font-size: 24px;
  font-family: "moderat", sans-serif;
  font-weight: bold;
  -webkit-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
  border: 1px solid #d1434a;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 20px;
  white-space: nowrap;
  margin-top: 0 !important;
  background-color: #d1434a;
}
.cart-totle .totle .btn-wrap a:hover {
  background-color: #f16f75;
}

.icon {
  width: 20px;
  height: 20px;
  fill: #999;
}
.icon-del:hover {
  fill: #ff6700;
}
.icon-ok {
  transform: scale(0.6);
  fill: #fff;
}

.check {
  background-color: #ee7a23;
  border-color: #ee7a23 !important;
}
.all{
  
}
</style>