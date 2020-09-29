<template>
  <div style="width: 100%; height: 1000px; background: #F0F0F0">
    <div style="margin-top: 50px; height: 100px">
      <span style="float: left;margin-left: 50px"><h1>司机端登录白名单</h1></span>
      <el-button type="primary" style="float: right;margin-right: 70px;margin-top: 50px" @click="add = true">+新增</el-button>
    </div>

    <div>
      <el-dialog
        title="添加司机账号"
        :visible.sync="add"
        width="30%"
        center>
        <span>请输入司机账号(手机号)</span>
        <el-input
          type="textarea"
          :rows="2"
          placeholder="请输入内容"
          v-model="textarea">
        </el-input>
        <span slot="footer" class="dialog-footer">
          <el-button @click="add = false">取 消</el-button>
          <el-button type="primary" @click="add = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>
    <div style="width: 95%;margin-left: 20px;background: #ffffff">
      <el-card>
        <span style="float: left">手机号</span>
        <el-input style="width: 200px; margin-left: 10px;float: left; margin-top: -5px" v-model="input" placeholder="手机号" maxlength="11" ref="totalRent"></el-input>
        <div style="width: 500px;padding-top: 50px">
          <el-table
            :data="tableData"
            style="width: 100%;border: solid 0.3px; ">
            <el-table-column
              prop="number"
              label="手机号"
              align="center"
              width="">
            </el-table-column>
            <el-table-column
              prop="lala"
              label="操作"
              align="center"
              width="">
              <template slot-scope="scope">
                <el-button @click="del = true" type="text" size="small">移出</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-card>
      <div>
        <el-dialog
          :visible.sync="del"
          width="30%"
          center>
          <span style="align-content: center">是否将手机号移出白名单</span>
          <span slot="footer" class="dialog-footer">
          <el-button @click="add = false">取 消</el-button>
          <el-button type="primary" @click="add = false">确 定</el-button>
        </span>
        </el-dialog>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        textarea: '',
        add: false,
        del: false,
        textarea: '',
        input: '',
        tableData: [{
          number: '13801234567'
        },{
          number: ''
        }]
      }
    },
    methods: {
    }
  }
</script>
