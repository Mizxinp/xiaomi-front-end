<template>
    <div>
        <div class="container">
            <div class="container-wrap">
                <div class="title">
                    <h2>小米</h2>
                </div>
                <div class="check-step">
                    <ul>
                        <li class="cur">确认地址</li>
                        <li class="cur">查看订单</li>
                        <li class="cur">支付成功</li>
                        <li class="cur">订单信息</li>
                    </ul>
                </div>

                <div class="order-create">
                    <div class="order-create-pic"><img src="../../static/ok-2.png" alt=""></div>
                    <div class="order-create-main">
                        <h3>恭喜 <br>你的订单正在处理中！</h3>
                        <p>
                            <span>订单 ID：{{orderId}}</span>
                            <span>总金额：{{orderTotal}}</span>
                        </p>
                        <div class="order-create-btn-wrap">
                            <div class="btn-l-wrap">
                                <router-link href="javascript:;" class="btn-wrap order-success" :to="'/cart'">返回购物车</router-link>
                            </div>
                            <div class="btn-r-wrap">
                                <router-link href="javascript:;" class="btn-wrap btn--m order-success" :to="'/home'">继续购物</router-link>
                            </div>
                        </div>
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
      orderId: "",
      orderTotal:''
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      let orderId = this.$route.query.orderId;
      axios.get("/users/orderSuccess", {
        params: {
          orderId: orderId
        }
      }).then(response => {
        let res = response.data;
        if (res.status == "0") {
          this.orderId = orderId;
          this.orderTotal = res.result.orderTotal;
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
.order-create {
  padding: 80px 0 50px 0;
  text-align: center;
}

.order-create-pic {
  height: 130px;
  margin: 0 auto;
  margin-bottom: 60px;
}

.order-create-pic img {
  height: 100%;
}

.order-create-main {
  font-size: 18px;
  line-height: 1.3;
}

.order-create-main h3 {
  margin-bottom: 20px;
  font-size: 1.25em;
  font-weight: 200;
  color: #333;
}

.order-create-main p {
  margin-bottom: 40px;
  color: #999;
}

.order-create-main p span {
  margin: 0 10px;
}

.order-create-main .order-create-btn-wrap {
  max-width: 460px;
  margin: 0 auto;
  padding: 0 5px;
}

.order-create-main .order-create-btn-wrap > div {
  float: left;
  width: 200px;
  padding: 0 10px;
}

.order-create-main .order-create-btn-wrap .btn-l-wrap .order-success,
.order-create-main .order-create-btn-wrap .btn-r-wrap .order-success {
  color: #d1434a;
  letter-spacing: 2px;
  font-size: 18px;
  font-weight: 0;
}

.order-create-main .order-create-btn-wrap .btn {
  width: 100%;
  min-width: 120px;
}

.order-create-main .order-create-btn-wrap:after {
  visibility: hidden;
  display: block;
  content: " ";
  clear: both;
}

.order-create-main .checkout-share-order {
  margin: 20px auto;
}

.order-create-main .checkout-share-order .checkout-share-tit {
  font-size: 1.44em;
  color: #e02614;
  font-weight: 200;
}

.order-create-main .checkout-share-main {
  text-align: center;
}

.order-create-main .checkout-share-main button {
  margin: 0 5%;
  padding: 20px 0;
  color: #e02614;
}

.order-create-main .checkout-share-main button:hover {
  opacity: 0.6;
}

.order-create-main .checkout-share-main .checkout-share-icon {
  width: 60px;
  height: 60px;
  margin: 10px auto;
}

.order-create-main .checkout-share-main .checkout-share-icon .icon {
  width: 100%;
  height: 100%;
  fill: #e02614;
}

.order-create-main .checkout-share-main .checkout-share-twitter {
  color: #ee7a23;
}

.order-create-main .checkout-share-main .checkout-share-twitter .icon {
  fill: #ee7a23;
}

.order-create-main .checkout-share-main .checkout-share-name {
  margin: 0;
  font-weight: 200;
  text-transform: uppercase;
  font-size: 0.6em;
  letter-spacing: 0.25em;
}

.order-create-main .get-lecode {
  margin-bottom: 40px;
  padding: 0 10px;
}

.order-create-main .get-lecode .lecode-main {
  max-width: 767px;
  margin: 0 auto 10px auto;
  padding: 37px 0;
  border: 1px dashed #ee7a23;
}

.order-create-main .get-lecode .lecode-main .lecode-num {
  margin-bottom: 20px;
  color: #ee7a23;
  font-size: 20px;
}

.order-create-main .get-lecode .get-lecode-tips {
  color: #999;
  line-height: 16px;
  line-height: 18px;
}
</style>