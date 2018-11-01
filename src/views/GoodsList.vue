<template>
    <div>
        <nav-header></nav-header>
        <div class="container">
            <div class="container-wrap">
                <div class="all-products-wrap">
                    <div class="all-products">所有宝贝</div>
                </div>
                <div class="classify">
                    <ul>
                        <li class="sort">综合排序</li>
                        <!-- <li @click="sortPrice">
                            价格<span>↓</span>
                            
                        </li> -->
                    </ul>
                </div>
                <div class="goods-list">
                    <ul>
                        <li class="jiaDianBox" v-for="(item,index) in goodsList" :key="index" @click="toGoodsDetail(item.productId)">
                            <a href="javascript:;"><img :src="'static/' + item.productImage" /></a>
                            <p class="price">{{item.salePrice}}元</p>
                            <h3 class="title">{{item.productName}}</h3>
                            <p class="desc">{{item.productDesc}}</p>
                        </li>
                        
                    </ul>

                </div>
            </div>
        </div>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            goodsList:[],
            flag:1
        }
    },
    mounted(){
        this.init()
    },
    methods:{
        init(){
            let keyWords = this.$route.query.keyWords;

            // console.log(keyWords)
            axios.get('goods/search?keyWords=' + keyWords).then(response=>{
                let res = response.data;
                if(res.status == '0'){
                    this.goodsList = res.result;
   
                }else{
                    console.log('失败')
                }
            })
        },
        toGoodsDetail(productId){
            this.$router.push({
                path:'/goodsDetail',
                query:{
                    productId:productId
                }
            })
        },
    }
};
</script>

<style scoped>
.all-products-wrap {
  width: 100%;
  height: 40px;
  border-bottom: 2px solid #ff6700;
}
.all-products-wrap .all-products {
  width: 100px;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  text-align: center;
  color: #fff;
  background-color: #ff6700;
}
.classify {
  margin-top: 15px;
  width: 100%;
  height: 40px;
  background-color: #f5f5f5;
  border: 1px solid #e8e8e8;
}
.classify .sort {
  background-color: #fff;
  color: #f50;
}
.classify li {
  width: 80px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 12px;
  color: #404040;
  float: left;
  border-right: 1px solid #e8e8e8;
  cursor: pointer;
}
.classify li:hover {
  background-color: #fff;
  color: #f50;
}
.goods-list{
    margin-bottom: 50px;
}
.goods-list::after{
    clear: both;
    height: 0;
    content: '';
    display: block;
    visibility: hidden;

}

.goods-list ul {
  margin-top: 20px;
}
.jiaDianBox {
  width: 234px;
  height: 318px;
  float: left;
  margin-left: 17px;
  margin-top: 12px;
  background-color: white;
  position: relative;
  cursor: pointer;
  border: 1px solid #e8e8e8;
}
.jiaDianBox img {
  width: 160px;
  height: 160px;
  margin-top: 50px;
  margin-left: 40px;
}
.jiaDianBox h3 {
  font-size: 14px;
  color: black;
  text-align: center;
  font-weight: 300;
  cursor: pointer;
  margin-top: 10px;
}
.jiaDianBox .desc {
  color: #b0b0b0;
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 14px;
  text-align: center;
}
.jiaDianBox .price {
  color: #ff6700;
  margin-top: 10px;
  font-size: 16px;
  text-align: center;

}

</style>