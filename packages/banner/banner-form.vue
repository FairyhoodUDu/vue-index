<template>
  <div class="input-group">
    <el-form ref="swiperForm" label-width="50px" :model="editProps">
      <el-form-item
        label="轮播"
        required
        v-for="(item, index) in editProps.banner"
        :key="index"
      >
        <el-button @click="del(index)">删除</el-button>
        <el-input type="hidden" v-model="item.imgUrl"></el-input>
        <el-upload
          @click.native.stop="setCurrent(index)"
          class="avatar-uploader"
          action="https://crs-api-test.vchangyi.com/gw-scrm/file/upload"
          :headers="{
            'Enterprise-Hash': 'ecd85280aa135bbd0108dd6aa424565a',
            'Auth-Token':'eyJpdiI6Ikx2ZkozUHNsUFJRSVhYSWNPekxKU1E9PSIsInZhbHVlIjoiK25wS1Vka2VFSTFsXC9xNmpsUkpNU2JkNHg0a1QyRjU2SFBWVEF4YlhDZ2U5TExGSm9mTUJYbW5uMEhDVEFZZzEwRnpabkZzbE15d29EMHlHZlRqWkRiMDJtYml0VjVHeWx5V3UyK3BQRytzbkVqOUJuSmQzeUdWN0VFMDNvYmlPM01NTmNyTElZeERXb3Z0dlZHUzNcL3c9PSIsIm1hYyI6IjQ1OWI1YWRhNDViMTdhNjAxM2Y4YjA0NDZiYjU1YWM5NjQ0MWY0NTk2MGRiNzBjNTkwMjg5MDUyMDQzODM3YjMifQ==',
          }"
          :limit="1"
          :show-file-list="false"
          :on-success="handleSuccess"
        >
          <i v-if="!item.imgUrl" slot="default" class="el-icon-plus"></i>
          <img v-if="item.imgUrl" :src="item.imgUrl" class="avatar" />
        </el-upload>
        <div v-for="(hot,i) in item.hotzone" :key="i">
          <label :for="`hot${i}`">热区{{i + 1}}</label>
          <el-input :id="`hot${i}`" v-model="hot.url" placeholder="请输入跳转链接"></el-input>
        </div>
      </el-form-item>
      <div style="text-align:center">
        <el-button @click="addBanner">添加轮播</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      current: 0
    }
  },
  props: {
    handleChangeProps: {
      type: Function
    },
    editProps: {
      type: Object,
      default: () => ({})
    }
  },
  watch: {
    /**
     * props 改变
     */
    editProps: {
      handler: function (newProps) {
        this.handleChangeProps(newProps)
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    handleSuccess (res) {
      console.log('handleSuccess', res)
      const { url } = res.data
      this.editProps.banner[this.current].imgUrl = url
      this.editProps.banner[this.current].height = 300
    },
    setCurrent (i) {
      this.current = i
    },
    addBanner () {
      this.editProps.banner.push({
        imgUrl: '',
        height: 0
      })
    },
    del (i) {
      this.editProps.banner.splice(i, 1)
    }
  },
  created () {
    console.log('editProps', this.editProps)
  }
}
</script>

<style lang="less">
.avatar-uploader {
}
.avatar-uploader .el-upload {
  padding: 30px 40px;
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}


</style>
