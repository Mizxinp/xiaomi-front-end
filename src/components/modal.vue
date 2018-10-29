<template>
    <div>
        <div class="dialog" :class="{'mask-show':loginSignal}">
            <div class="dialog-content">
                <div class="title">
                    <div @click="closeModal">x</div>
                </div>
                <div class="content ">
                    <div class="confirm-tips">
                        <slot name="message"></slot>
                    </div>
                    <div class="login-wrap">
                        <slot name="btnGroup"></slot>
                    </div>
                </div>

            </div>
        </div>
        <div class="over-mask" v-if="loginSignal" @click="closeModal"></div>
    </div>
</template>

<script>
export default {
    props:['loginSignal'],
    data(){
        return{
            
        }
    },
    methods:{
        closeModal(){
            this.$emit('close')
        }
    }
};
</script>

<style scoped>
.confirm-tips {
  font-size: 14px;
  font-weight: 200;
  text-align: center;
}
.login-wrap{
  margin-top:30px;
}
</style>