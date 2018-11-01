<template>
  <div>
    <header id="header">
      <!--导航栏 -->
      <div id="nav">
        <div id="navCenter">
          <ul>
            <li><a href="#">小米商城</a></li>
            <li><a href="#">MIUI</a></li>
            <li><a href="#">米聊</a></li>
            <li><a href="#">游戏</a></li>
            <li><a href="#">多看阅读</a></li>
            <li><a href="#">云服务</a></li>
            <li><a href="#">金融</a></li>
            <li><a href="#">米币</a></li>
            <li><a href="#">小米商城手机版</a></li>
            <li><a href="#">问题反馈</a></li>
            <li class="lastLi"><a href="#">Select Region</a></li>
          </ul>
          <div id="card">
            <router-link href="javascript:;" :to="'/cart'">购物车（0）</router-link>
          </div>
          <div id="loginResiger">
            <span v-text="nickname" v-if="nickname"></span>
            <a href="javascript:;" @click="loginSignal=true" v-if="!nickname">登陆</a>
            <a href="javascript:;" @click="logout" v-else>退出</a> 
            <a href="javascript" v-if="!nickname">注册</a>
            <a href="#">消息通知</a>
          </div>
        </div>
      </div>

      <!--菜单栏 -->
      <div id="menu">
        <div class="h22"></div>
        <div id="menuCenter">
          <div id="logo">
            <router-link :to="'/home'">
              <img src="../../static/logo.png">
            </router-link>
          </div>
          <ul>
            <li><a href="#">小米手机</a></li>
            <li><a href="#">红米</a></li>
            <li><a href="#">笔记本</a></li>
            <li><a href="#">电视</a></li>
            <li><a href="#">盒子</a></li>
            <li><a href="#">新品</a></li>
            <li><a href="#">路由器</a></li>
            <li><a href="#">智能硬件</a></li>
            <li><a href="#">服务</a></li>
            <li><a href="#">社区</a></li>
          </ul>
          <div id="searchBtnBox" @click="searchBooks"></div>

          <input id="searchTextBox" v-model="keyWords">
            
          
        </div>
        <div class="h22"></div>
      </div>
    </header>
    <div class="dialog" :class="{'mask-show':loginSignal}">
      <div class="dialog-content">
        <div class="title">
          <h3>登录</h3>
          <div @click="loginSignal=false">x</div>
        </div>
        <div class="content ">
          <div>
            <span class="error" v-show="errorTip">用户名或密码错误</span>
          </div>
          <form action="post ">
            <ul>
              <li class="nickname ">
                <span>账号：</span>
                <input type="text " name="usernumber" v-model="userName">
              </li>
              <li class=" ">
                <span>密码：</span>
                <input type="password" name="password" v-model="userPwd">
              </li>
            </ul>
            <div class="content-bottom ">
              <a class="confirm " @click="login">登录</a>
            </div>
          </form>
        </div>

      </div>
    </div>
    <div class="over-mask" v-if="loginSignal" @click="loginSignal=false"></div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      loginSignal: false,
      errorTip: false,
      userName: "",
      userPwd: "",
      nickname: "",
      keyWords:''
    };
  },
  computed: {},
  mounted() {
    this.checkLogin();
  },
  methods: {
    searchBooks() {
      this.$router.push({
        path: "/goodsList",
        query: {
          keyWords: this.keyWords
        }
      });
    },
    checkLogin() {
      axios.get("users/checkLogin").then(response => {
        var res = response.data;
        if (res.status == "0") {
          this.nickname = res.result;
        }
      });
    },
    login() {
      if (!this.userName || !this.userPwd) {
        this.errorTip = true;
        return;
      }
      axios
        .post("users/login", {
          userName: this.userName,
          userPwd: this.userPwd
        })
        .then(response => {
          var res = response.data;
          // console.log(res.result.userName)
          this.loginSignal = false;
          this.nickname = res.result.userName;
        });
    },
    logout() {
      axios.post("/users/logout").then(res => {
        var res = res.data;
        if (res.status == "0") {
          this.nickname = "";
          this.$emit('logoutInit')
        }
      });
    },
    toLogin(){
      this.loginSignal = true;
    }
  }
};
</script>

<style scoped>
#container{
	width:100%;
}

#header{
	width: 100%;
	height: 140px;
}
#header #nav{
	width: 100%;
	height: 40px;
	background-color: #333333;
}
#header #nav #navCenter{
	width: 1226px;
	height: 40px;
	margin: 0 auto;
}
#nav #navCenter ul {
	height: 12px;
	margin-top: 12px;
	float: left;
}
#nav #navCenter ul li{
	float: left;
	line-height: 12px;
	border-right: 1px solid #606060;
	font-size: 12px;  
}
#nav #navCenter .lastLi{
	border-right:none;
}
#nav #navCenter ul li a{
	margin-left: 10px;
	margin-right: 10px;
	
}
#nav #navCenter a{
	color: #b0b0b0;
}
#nav #navCenter a:hover{
	color: #e0e0e0;
}
#nav #navCenter #card{
	width:100px;
	height: 40px;
	background-color: #424242;
	float: right;
	font-size: 12px;
	line-height: 40px;
	text-align: center;
}
#nav #navCenter #loginResiger{
	width:140px;
	height: 40px;
	float: right;
	font-size: 12px;
	line-height: 40px;
	text-align: center;
}
#nav #navCenter #loginResiger a{
  margin-right: 5px;
}
#nav #navCenter #loginResiger span{
	color: #b0b0b0;
	margin-left: 5px;
	margin-right: 5px;
}
#header #menu{
	width: 100%;
	height: 100px;
}
#header #menu #menuCenter{
	width: 1226px;
	height: 55px;
	margin: 0 auto;
}
#header #menu #menuCenter #logo{
	width: 55px;
	height: 55px;
	background-color: #FF6700;
	float: left;
}
#header #menu #menuCenter #logo img{
	margin-left: 4px;
	margin-top: 4px;
}
#header #menu #menuCenter ul{
	height: 55px;
	margin-left: 180px;
	float: left;
}
#header #menu #menuCenter ul li{
	float: left;
	line-height: 55px;
}

#header #menu #menuCenter ul li a{
	font-size: 16px;
	color: #333333;
	margin-left: 10px;
	margin-right: 10px;
}
#header #menu #menuCenter ul li a:hover{
	color: #FF6700;
}
#header #menu #menuCenter #searchBtnBox{
	width: 55px;
	height: 53px;
	float: right;
  border: 1px solid #e0e0e0;
	background-image: url(../../static/search1.jpg);
}
#header #menu #menuCenter #searchTextBox{
	width: 240px;
	height: 48px;
	float: right;
  border: 1px solid #e0e0e0;
  border-right: none;
  padding-left: 5px;
  outline: none;
}
#header #menu #menuCenter #searchTextBox #searchText{
	width: 220px;
	height: 20px;
	outline: none;
	margin-top: 15px;
	margin-left: 10px;
	border: none;
}
#header #menu #menuCenter #searchTextBox a{
	display: inline-block;
	margin-left: 20px;
	margin-top: 20px;
	font-size: 12px;
	background: #eee;
	color: #757575;
}
#header #menu #menuCenter #searchTextBox a:hover{
	background: #FF6700;
	color: #fff;
}
</style>