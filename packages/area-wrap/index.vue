<template>
  <div class="areaWrap itemBg">
    <div class="areaTitleWrap">
      <div class="areaTitle lineLightBd textMain">{{title}}</div>
    </div>
    <div class="areaContWrap">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AreaWrap',
  props: {
    title: {
      type: String,
      default: '标题'
    },
    message:{
      type:String,
      default: "可拖入组件"
    }
  },
  methods: {
    getConfig: function () {
      return {
        title: this.title,
        message:this.message
      }
    }
  }
}
</script>

<style lang='less'>
@import './index.less';
</style>
