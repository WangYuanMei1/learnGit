<template>
  <div id="app">
    <el-progress id="selectProgress" style="display: none;" color="#304156" :percentage="exportPercentage" :stroke-width="2" text-inside=true></el-progress>
    <el-button @click="getAllResult()" style="margin-left: 0;margin-top: 10px">一键执行全部</el-button>
    <el-table
      ref="multipleTable"
      :data="tableData"
      border
      style="width: 94%; margin-left: 3%;margin-top: 10px"
      :row-class-name="tableRowClassName"
      @selection-change="handleSelectionChange">
      <el-table-column
        align="center"
        type="selection"
        width="101px">
      </el-table-column>
      <el-table-column
        align="center"
        prop="SQL_TEXT"
        label="SQL_TEXT"
        width="500px">
      </el-table-column>
      <el-table-column
        align="center"
        prop="EXE_DESC"
        label="执行描述"
        width="365px">
      </el-table-column>
      <el-table-column
        align="center"
        prop="execute"
        label="执行"
        width="100px">
        <template slot-scope="scope">
          <el-button @click="getSqlData(scope.row, scope.$index)" type="text" size="small">执行</el-button>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="执行结果"
        width="400px">
        <template slot-scope="scope">
          <input :id="'res' + scope.$index" v-model="sqlresult" style="text-align: center;border: none;background: none"/>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style>

</style>

<script>
  import {getAllResult, getAllSql, getSqlData, } from "../api/dataContrast/dataContrast"

  export default {
    created() {
      this.getAllSql()
    },
    data() {
      return {
        tableData: [],
        sqlList: {
          sqlText: '',
          exeDesc: ''
        },
        sqlresult: '',
        result: [],
        dataList: '',
        selectIndex: '',
        exportPercentage: 0,
        detailPercentage: 0,
        getDetailFlag: 0,
        timerForGetExportPercentage: '',
        timerForGetDetailPercentage: '',
        sck: '',
        rowIndex: '',
        index2: ''
      }
    },
    methods: {
      getSqlData: function(row, index) {
        getSqlData(row).then((res) => {
          // alert(index)
          document.getElementById('res' + index).value = res.data.count
        })
      },
      getAllSql: function() {
        getAllSql(this.sqlList).then((res) => {
          // alert(res.data.list2)
          this.tableData = res.data.list2
        })
      },
      handleSelectionChange(val) {
        this.multipleSelection = val
        this.selectionItemIndexes = []
        val.forEach((item) => {
          this.selectionItemIndexes.push(item.index)
        })
        this.selectIndex = this.selectionItemIndexes
        // alert(this.selectionItemIndexes)
      },
      tableRowClassName(row) {
        // 设置row对象的index
        row.row.index = row.rowIndex
        // alert(row.rowIndex)
      },
      getAllResult: function() {
        var selectProgress = document.getElementById('selectProgress')
        selectProgress.style.display = 'block'
        this.sqlresult = null
        console.log(this.multipleSelection)
        this.exportPercentage = 0
        this.getAllResultLoop(this.multipleSelection[0], 0)
      },
      getAllResultLoop: function(s, i) {
        getAllResult(s).then((res) => {
          alert(1)
          this.exportPercentage += 30
          this.index2 = res.data.index
          // alert(this.index2)
          // this.sck = res.data.progressKey
          // this.timerForGetExportPercentage = setInterval(this.getExportPercentage, 1000)
          // alert(this.selectIndex[j])
          document.getElementById('res' + this.index2).value = res.data.count
          i++
          if (i <= this.multipleSelection.length - 1) {
            this.getAllResultLoop(this.multipleSelection[i], i)
          }
          if (i === this.multipleSelection.length) {
            this.exportPercentage = 100
            var selectProgress = document.getElementById('selectProgress')
            selectProgress.style.display = 'none'
          }
        })
      }
    }
  }

</script>
