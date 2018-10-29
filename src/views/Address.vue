<template>
    <div>
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
        <div class="container">
            <div class="container-wrap">
                <!-- <div class="title">
                    <h2>小米商城</h2>
                </div> -->
                <div class="check-step">
                    <ul>
                        <li class="cur">确认地址</li>
                        <li>查看订单</li>
                        <li>支付成功</li>
                        <li>订单信息</li>
                    </ul>
                </div>
                <div class="h2">
                    <h2>请选择收货地址</h2>
                </div>
                <div class="addr-list-wrap">
                    <div class="addr-list">
                        <ul>
                            <li v-for="(item,index) in addressListLimit" :key="index" v-bind:class="{'check-address':checkIndex == index}" @click="checkIndex=index,selectAddressId=item.addressId">
                                <dl>
                                    <dt>{{item.userName}}</dt>
                                    <dd class="address">{{item.streetName}}</dd>
                                    <dd class="tel">{{item.tel}}</dd>
                                </dl>
                                <div class="addr-opration addr-del">
                                    <a href="javascript:;" class="addr-del-btn" @click="delAddress(item.addressId)">
                                        <svg class="icon icon-del">
                                            <use xlink:href="#icon-del"></use>
                                        </svg>
                                    </a>
                                </div>
                                <div class="addr-opration addr-set-default">
                                    <a href="javascript:;" class="addr-set-default-btn"><i class="set-d" v-if="!item.isDefault" @click="setDefault(item.addressId)">设置默认地址</i></a>
                                </div>
                                <div class="addr-opration addr-default" v-if="item.isDefault">默认地址</div>
                            </li>
                            <li class="addr-new">
                                <div class="add-new-inner">
                                    <i class="icon-add">
                                        <svg class="icon icon-add">
                                            <use xlink:href="#icon-add"></use>
                                        </svg>
                                    </i>
                                    <p>添加新地址</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div class="shipping-addr-more">
                        <a class="addr-more-btn up-down-btn" href="javascript:;" @click="extension">
                            {{more || '展开'}}
                            <i class="i-up-down">
                                <i class="i-up-down-l"></i>
                                <i class="i-up-down-r"></i>
                            </i>
                        </a>
                    </div>
                </div>
                <div class="next">
                    <router-link href="javascript:;" :to="{path:'/orderConfirm',query:{'addressId':selectAddressId}}" class="nexta">下一步</router-link>
                </div>
            </div>
        </div>
        <modal :loginSignal="addressMask" v-on:close="closeMask">
            <p slot="message" class="message">
                确认删除该地址？
            </p>
            <div slot="btnGroup">
                <a href="javascript:;" class="btn-wrap mask" v-on:click="addressMask=false">取消</a>
                <a href="javascript:;" class="btn-wrap mask" @click="delAddressConfirm">确认</a>
            </div>
        </modal>
        <div class="over-mask" v-if="addressMask" @click="addressMask=false"></div>
    </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      addressList: [],
      addressMask:false,
      addressId:'',
      limit:3,
      more:'',
      checkIndex:0,
      selectAddressId:0
    };
  },
  mounted() {
    this.init();
  },
  computed:{
      addressListLimit(){
          return this.addressList.slice(0,this.limit)
      }
  },
  methods: {
    init() {
      axios.get("users/addressList").then(response => {
        let res = response.data;
        // console.log(res)
        if (res.status == "0") {
          this.addressList = res.result;
        }
      });
    },
    closeMask(){
        this.addressMask = false;
    },
    delAddress(addressId){
        this.addressMask = true;
        this.addressId = addressId;
    },
    delAddressConfirm(){
        let addressId = this.addressId;
        axios.post('users/delConfirm',{addressId:addressId}).then(response=>{
            let res = response.data;
            if(res.status == '0'){
                this.addressMask = false;
                this.init()
            }
        })
    },
    extension(){
        if(this.limit <= 3 ){
            this.limit = this.addressList.length;
            this.more = '收起'
        }else{
            this.limit = 3;
            this.more = '展开'
        }
    },
    setDefault(addressId){
        axios.post('users/setDefault',{addressId:addressId}).then(response=>{
            let res = response.data;
            if(res.status == '0'){
                // alert('修改成功')
                this.init()
            }
        })
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
  padding-bottom: 50px;
}



/* 收货列表 */
.h2 {
  margin: 20px 0;
}
.h2 h2 {
  color: #605f5f;
  font-size: 18px;
}
.addr-list ul:after {
  visibility: hidden;
  display: block;
  content: " ";
  clear: both;
}

.addr-list li {
  position: relative;
  float: left;
  width: 260px;
  height: 162px;
  margin: 0 1.587% 1.587% 0;
  padding: 20px 20px 40px 20px;
  background: #fff;
  border: 2px solid #e9e9e9;
  overflow: hidden;
  cursor: pointer;
  color: #333;
}

.addr-list li dt {
  line-height: 1em;
  padding: 0 25px 10px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 16px;
}

.addr-list li dd {
  margin-bottom: 10px;
  line-height: 1.4285;
}

.addr-list li .address {
  height: 2.8517em;
  overflow: hidden;
}

.addr-list li .tel {
  color: #605f5f;
  line-height: 1.2142;
}

.addr-list li .addr-opration {
  position: absolute;
}

.addr-list li .addr-opration .icon {
  width: 100%;
  height: 100%;
  fill: #605f5f;
}

.addr-list li .addr-opration:hover .icon {
  fill: #ee7a23;
}

.addr-list li .addr-edit {
  top: 20px;
  right: 20px;
  width: 20px;
  height: 20px;
}

.addr-list li .addr-del {
  bottom: 17px;
  right: 20px;
  width: 20px;
  height: 20px;
}

.addr-list li .addr-set-default {
  /* display: none; */
}
.set-d{
    color: #ee7a23;
    font-size: 14px;
}
.addr-list li .addr-set-default,
.addr-list li .addr-default {
  bottom: 18px;
  left: 20px;
  color: #ee7a23;
}

.addr-list li:nth-child(4n) {
  margin-right: 0;
}

.addr-list li:hover {
  border-color: #ee7a23;
}
.check-address{
  border-color: #ee7a23;
}
.addr-list li.addr-new {
  color: #605f5f;
  text-align: center;
}

.addr-list li.addr-new .add-new-inner {
  padding-top: 20px;
}

.addr-list li.addr-new .add-new-inner .icon-add {
  display: inline-block;
  width: 50px;
  height: 50px;
}

.addr-list li.addr-new .add-new-inner .icon-add .icon-add {
  width: 50px;
  height: 50px;
  fill: #ccc;
}

.addr-list li.addr-new .add-new-inner p {
  margin-top: 10px;
}

.addr-list li.check {
  border-color: #ee7a23;
  border-width: 2px;
}

.addr-list li.check .addr-opration {
  display: block;
}

.shipping-addr-more {
  text-align: center;
}
.addr-more-btn {
  color: #ee7a23;
}
.addr-more-btn:hover {
  color: #d1434a;
}

.next {
  margin-top: 70px;
  float: right;
}
.next .nexta {
  width: 200px;
  height: 54px;
  line-height: 54px;
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
.next a:hover {
  background-color: #f16f75;
}
</style>