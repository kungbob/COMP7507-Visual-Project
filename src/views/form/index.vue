<template>
  <div class="app-container">
    <div v-if="showGraph">
      <el-row>
        <el-button @click="onBack">Back</el-button>
      </el-row>
      <br>
    </div>

    <div v-if="!showGraph">
    <el-form ref="form" :model="form" label-width="120px">
      <!--
      <el-form-item label="Activity name">
        <el-input v-model="form.name" />
      </el-form-item>
      -->
      <el-form-item label="Located area">
        <el-select v-model="question.area" placeholder="please select your area">
          <el-option label="Hong Kong Island" value="hongkongisland" />
          <el-option label="Kowloon West" value="kowloonwest" />
          <el-option label="Kowloon East" value="kowlooneast" />
          <el-option label="New Territories West" value="newterritorieswest" />
          <el-option label="New Territories East" value="newterritorieseast" />
        </el-select>
      </el-form-item>
      <!--
      <el-form-item label="Activity time">
        <el-col :span="11">
          <el-date-picker v-model="form.date1" type="date" placeholder="Pick a date" style="width: 100%;" />
        </el-col>
        <el-col :span="2" class="line">-</el-col>
        <el-col :span="11">
          <el-time-picker v-model="form.date2" type="fixed-time" placeholder="Pick a time" style="width: 100%;" />
        </el-col>
      </el-form-item>
      -->
      <!--
      <el-form-item label="Instant delivery">
        <el-switch v-model="form.delivery" />
      </el-form-item>
      -->
      <el-form-item label="Questions">
        <div v-for="question in questionList" :key="question.no">
          <span class="demonstration">Question {{question.no}}. Do you agree on issues {{question.name}}</span>
          <br>
          <el-radio-group v-model="question.value">
            <el-radio label="-2" name="type">Very Disargee</el-radio>
            <el-radio label="-1" name="type">Disargee</el-radio>
            <el-radio label="0" name="type">Neutral</el-radio>
            <el-radio label="1" name="type">Agree</el-radio>
            <el-radio label="2" name="type">Very Agree</el-radio>
          </el-radio-group>
        </div>
      </el-form-item>
      <!--
      <el-form-item label="Resources">
        <el-radio-group v-model="form.resource">
          <el-radio label="Sponsor" />
          <el-radio label="Venue" />
        </el-radio-group>
      </el-form-item>
      -->
      <!--
      <el-form-item label="Activity form">
        <el-input v-model="form.desc" type="textarea" />
      </el-form-item>
      -->
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Submit</el-button>
        <el-button @click="onCancel">Cancel</el-button>
      </el-form-item>
    </el-form>
    </div>
    <div v-else>
      <v-chart :options="graph"/>
    </div>
  </div>
</template>

<script>
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'

export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      questionList: [],
      question: {
        area: null
      },
      showGraph: false,
      graph: {
        title: {
          text: 'Projected Result Base on Question Answer',
          left: 'center'
        },
        legend: {
          data: ['Candidates 1']
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: []
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [],
            type: 'line'
        }]
      }
    };
  },
  mounted: function() {
    this.showGraph = false
    this.onLoadQuestion()
  },
  methods: {
    onLoadQuestion() {
      this.questionList = []
      for (var i = 1; i <= 5; i++ )
      {
        var question = {
          no: i,
          name: i,
          value: null
        }
        this.questionList.push(question)
      }
    },
    onSubmit() {
      this.$message("submit!");
      this.showGraph = true
      this.setValue()
    },
    setValue() {
      var base = 0
      var valueList = []
      var questionList = []
      for (var i = 0; i < 5; i++)
      {
        base += parseInt(this.questionList[i].value)
        valueList.push(base)
        questionList.push('Issues on ' + this.questionList[i].name)
      }
      this.$set(this.graph.xAxis, 'data', questionList)
      this.$set(this.graph.series[0], 'data', valueList)
    },
    onCancel() {
      this.$message({
        message: "cancel!",
        type: "warning"
      });
    },
    onBack() {
      this.showGraph = false
    }
  }
};
</script>

<style scoped>
.line {
  text-align: center;
}
</style>

