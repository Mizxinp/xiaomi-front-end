### 仿小米商城前端

#### 主要技术栈

前端：
- Vue
- Vue-router

[后端地址](https://github.com/Mizxinp/xiaomi-server)

#### 目前实现的功能

- 登录退出功能
- 购物各个流程功能
- 商品搜索功能

#### 各个功能介绍

一系列的操作都是实时同步到数据库的，页面刷新，或者退出再登录数据并不会丢失

##### 登录退出功能

用户通过输入账号密码，发送请求，后台连接数据库验证账号是否正确。

##### 全局拦截功能

当用户没有登录账号密码时，此时是无法添加查看购物车等操作。系统会弹出模态框提示用户登录

##### 购物各个流程功能

1.包括添加到购物车

2.查看购物车，对购物车进行修改删除。

3.设置默认、选择、删除配送地址

4.订单确认

5.订单生成成功

##### 商品搜索功能

用v-model绑定用户输入keyWords。然后点击路由跳转并把keyWords传给所查商品列表页，商品列表页通过this.$route.query.keyWords拿到keyWords。并发请求给后端，接到响应后进行页面的渲染。