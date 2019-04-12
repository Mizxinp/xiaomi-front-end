<template>
    <div>
        <svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <defs>

                <symbol id="icon-ok" viewBox="0 0 32 32">
                    <title>ok</title>
                    <path class="path1" d="M31.020 0.438c-0.512-0.363-1.135-0.507-1.757-0.406s-1.166 0.435-1.529 0.937l-17.965 24.679-5.753-5.67c-0.445-0.438-1.035-0.679-1.664-0.679s-1.219 0.241-1.664 0.679c-0.917 0.904-0.917 2.375 0 3.279l7.712 7.6c0.438 0.432 1.045 0.681 1.665 0.681l0.195-0.008c0.688-0.057 1.314-0.406 1.717-0.959l19.582-26.9c0.754-1.038 0.512-2.488-0.538-3.233z"></path>
                </symbol>
                <symbol id="icon-del" viewBox="0 0 32 32">
                    <title>delete</title>
                    <path class="path1" d="M11.355 4.129v-2.065h9.29v2.065h-9.29zM6.194 29.935v-23.742h19.613v23.742h-19.613zM30.968 4.129h-8.258v-3.097c0-0.569-0.463-1.032-1.032-1.032h-11.355c-0.569 0-1.032 0.463-1.032 1.032v3.097h-8.258c-0.569 0-1.032 0.463-1.032 1.032s0.463 1.032 1.032 1.032h3.097v24.774c0 0.569 0.463 1.032 1.032 1.032h21.677c0.569 0 1.032-0.463 1.032-1.032v-24.774h3.097c0.569 0 1.032-0.463 1.032-1.032s-0.463-1.032-1.032-1.032v0z"></path>
                    <path class="path2" d="M10.323 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"></path>
                    <path class="path3" d="M16 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"></path>
                    <path class="path4" d="M21.677 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"></path>
                </symbol>

            </defs>
        </svg>
        <div class="container">
            <div class="container-wrap">
                <div class="step-title">
                </div>
                <div class="check-step">
                    <ul>
                        <li class="cur">确认地址</li>
                        <li class="cur">查看订单</li>
                        <li>支付成功</li>
                        <li>订单信息</li>
                    </ul>
                </div>

                <div class="cart">

                    <div class="cart-list">
                        <ul>
                            <li class="pro-name">名称</li>
                            <li>单价</li>
                            <li>数量</li>
                            <li>总价</li>
                            <li>删除</li>
                        </ul>
                    </div>
                    <div class="cart-item" v-for="(item,index) in checkedGoods" :key="index">
                        <ul>
                            <li class="name-wrap row">
                                <div class="name">
                                    <a href="javascript:;" class="check">
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
                                    <a href="#">-</a>
                                    <span>{{item.productNum}}</span>
                                    <a href="#">+</a>
                                </div>
                            </li>
                            <li class="totle-price-wrap row">
                                <div class="totle-price">{{item.productNum * item.salePrice}}</div>
                            </li>
                            <li class="delete-wrap row">
                                <div class="delete">
                                    <svg class="icon icon-del">
                                        <use xlink:href="#icon-del"></use>
                                    </svg>
                                </div>
                            </li>
                        </ul>

                    </div>
                </div>

                <div class="price-count-wrap">
                    <div class="price-count">
                        <ul>
                            <li>
                                <span>单价：</span>
                                <span>￥ {{goodsTotlePrice}}</span>
                            </li>
                            <li>
                                <span>折扣：</span>
                                <span>￥ {{discount}}</span>
                            </li>
                            <li>
                                <span>运费：</span>
                                <span>￥ {{freight}}</span>
                            </li>
                            <li class="order-total-price">
                                <span>总价：</span>
                                <span>￥ {{totlePrice}}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="order-foot">
                    <div class="forword">
                        <a href="javascript:;" class="btn-wrap step-up">上一步</a>
                    </div>
                    <div class="confirm-next">
                        <a href="javascript:;" class="btn-wrap btn-red" @click="payMent">下一步</a>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      cartList: [],
      checkedGoods: [],
      goodsTotlePrice: 0,
      totlePrice: 0,
      freight: 20,
      discount: 200
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      axios.get("users/cartList").then(response => {
        let res = response.data;
        if (res.status == "0") {
          this.cartList = res.result;
          this.cartList.forEach(item => {
            if (item.checked == "1") {
              this.goodsTotlePrice += item.productNum * item.salePrice;
              this.checkedGoods.push(item);
            }
          });
          this.totlePrice = this.goodsTotlePrice + this.freight - this.discount;
        }
      });
    },
    payMent() {
      let addressId = this.$route.query.addressId;
      axios
        .post("users/payMent", {
          addressId: addressId,
          orderTotal: this.totlePrice
        })
        .then(response => {
          let res = response.data;
          if (res.status == "0") {
            this.$router.push({
              path: "/orderSuccess?orderId=" + res.result.orderId
            });
          }
        });
    }
  }
};
</script>

<style scoped>
.container {
  width: 100%;
}

.container-wrap {
  width: 1280px;
  margin: 0 auto;
}

.container-wrap {
  margin-bottom: 50px;
}
.price-count-wrap {
  margin-bottom: 20px;
}

.price-count-wrap {
  margin: 0;
  padding: 25px 0 15px 0;
  border: none;
}

.price-count ul {
  display: table;
  width: 100%;
}

.price-count li {
  display: table-row;
  font-size: 18px;
}

.price-count li span {
  display: table-cell;
  height: 36px;
  padding-right: 10px;
  vertical-align: top;
  text-align: right;
}

.price-count li span:first-child {
  color: #999;
}

.price-count li span:last-child {
  width: 20px;
  padding-left: 10px;
  white-space: nowrap;
}

.price-count .order-total-price span:last-child {
  color: #d1434a;
  font-size: 1.125em;
  font-weight: bold;
}

.order-foot {
  margin-top: 30px;
  height: 55px;
}

.order-foot .forword {
  float: left;
}
.order-foot .forword .step-up {
  color: #d1434a;
  background-color: #fff;
}
.order-foot .forword .step-up:hover {
  background-color: #fff;
}
.order-foot .confirm-next {
  float: right;
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
</style>