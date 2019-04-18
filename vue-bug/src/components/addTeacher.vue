<template>
  <div class="addTeacher">
          <el-form ref="form" :model="form" label-width="90px">
            <el-form-item label="姓名:">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="性别:">
              <el-input v-model="form.sexCode"></el-input>
            </el-form-item>
            <el-form-item label="所在城市:">
              <el-select v-model="form.city"></el-select>
            </el-form-item>
            <el-form-item label="兴趣爱好:">
              <el-input v-model="form.hobby"></el-input>
            </el-form-item>
            <el-button @click="saveInfo">保存</el-button>
          </el-form>
          
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        name: '',
        sexCode: '',
        city: [],
        hobby: ''
      },
      teacherData: []
    }
  },
  methods: {
    saveInfo () {
      this.teacherData.push(this.form)
    }
  }
}
</script>

<style lang="less">
  .addTeacher {
    background-color: #09131d;
    overflow: hidden;
    height: 100%;
    .el-form {
      width: 500px;
      margin: 200px auto;
      >.el-button {
        margin-left: 215px;
      }
    }
  }
</style>
