<template>
  <div
    class="search"
    :style="{ backgroundColor: bgColor }"
  >
    <div class="searchBox">
      <span class="el-icon-search"></span>
      <span>搜索</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Search',
  props: {
    bgColor: {
      type: String,
      default: '#ccc'
    }
  },
  methods: {
    getConfig: function () {
      return {
        bgColor: this.bgColor
      }
    }
  }
}
</script>

<style scoped lang="less">
.search {
  position: relative;
  width: 375px;
  height: 70px;
  line-height: 50px;
  text-align: center;
  .searchBox {
    height: 40px;
    width: 345px;
    line-height: 40px;
    border-radius: 20px;
    background-color: #fff;
    display: inline-block;
    margin-top: 15px;
    padding: 0 20px;
    text-align: left;
    box-sizing: border-box;
    font-size: 12px;
    color: #a5a5a5;
    .el-icon-search {
      font-weight: 600;
    }
    span {
      margin-left: 5px;
    }
  }
}


</style>
