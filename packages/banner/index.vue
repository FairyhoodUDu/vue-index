<template>
  <div class="banner" :style="{ height: bannerHeight + 'px' }">
    <span
      class="emptyPlaceholder"
      v-if="banner.length === 1 && !banner[0].imgUrl"
    >
      <i class="el-icon-picture"></i>
      <span>
        <b></b>
        <b></b>
        <b></b>
      </span>
    </span>
    <el-carousel v-else :height="`${bannerHeight}px`" @change="currentIndex">
      <el-carousel-item v-for="(item, index) in banner" :key="index">
        <hotzone
          :image="item.imgUrl"
          :max="3"
          :zonesInit="item.hotzone"
          @add="zoneAdd"
          @remove="zoneRemove"
          @overRange="zoneLimit"
          @change="zoneUpdate"
        >
        </hotzone>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
import hotzone from 'vue-hotzone'
export default {
  name: 'Search',
  data () {
    return {
      current: 0
    }
  },
  props: {
    banner: {
      type: Array,
      default: () => [
        {
          imgUrl: '',
          height: 0,
          hotzone: []
        }
      ]
    }
  },
  components: {
    hotzone
  },
  computed: {
    bannerHeight: function () {
      let res
      if (this.banner.length > 0) {
        if (this.banner[0].height === 0) {
          res = 350
        } else {
          res = this.banner[0].height / 2
        }
      } else {
        res = 350
      }
      return res
    }
  },
  methods: {
    getConfig: function () {
      return {
        banner: this.banner
      }
    },
    currentIndex (i) {
      this.current = i
    },
    // 热区更新后的结果
    zoneUpdate (result) {
      console.log('zoneUpdate', result)
    },
    // 热区添加
    zoneAdd (item) {
      console.log('zoneAdd', item)
      this.banner[this.current].hotzone.push({
        ...item,
        url: '' })
    },
    // 某个热区被删除
    zoneRemove (index) {
      console.log('zoneRemove', index)
      this.banner[this.current].hotzone.splice(index, 1)
    },
    zoneLimit () {
      this.$message.error('热区超过个数限制')
    }
  }
}
</script>
<style lang="less" scoped>
::v-deep.el-carousel__button {
  height: 10px;
  width: 10px;
  border-radius: 50%;
}
.emptyPlaceholder {
  width: 160px;
  font-size: 160px;
  color: #eee;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.emptyPlaceholder span {
  display: flex;
  transform: translateY(-30px);
  justify-content: center;
}

.emptyPlaceholder b {
  width: 20px;
  height: 20px;
  background-color: #eee;
  border-radius: 10px;
  box-sizing: border-box;
}

.emptyPlaceholder b:nth-child(2) {
  background-color: #ffffff;
  border: 2px solid #eee;
}

.emptyPlaceholder b + b {
  margin-left: 10px;
}


</style>
