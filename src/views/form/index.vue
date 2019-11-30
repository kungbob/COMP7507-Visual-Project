<template>
  <div class="app-container">
    <div v-if="showGraph">
      <el-row>
        <el-button @click="onBack">Back</el-button>
      </el-row>
      <br />
    </div>

    <div v-if="!showGraph">
      <el-form ref="form" :model="form" label-width="120px">
        <!--
      <el-form-item label="Activity name">
        <el-input v-model="form.name" />
      </el-form-item>
        -->
        <el-form-item label="Located area">
          <el-select v-model="area" placeholder="please select your area">
            <el-option label="Hong Kong Island" value="Hong Kong Island" />
            <el-option label="Kowloon West" value="Kowloon West" />
            <el-option label="Kowloon East" value="Kowloon East" />
            <el-option label="New Territories West" value="New Territories West" />
            <el-option label="New Territories East" value="New Territories East" />
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
            <span
              class="demonstration"
            >Question {{question.no}}. Do you agree with the issue {{question.name}}</span>
            <br />
            <el-radio-group v-model="question.value">
              <el-radio label="-2" name="type">Strongly Disargee</el-radio>
              <el-radio label="-1" name="type">Disargee</el-radio>
              <el-radio label="0" name="type">Neutral</el-radio>
              <el-radio label="1" name="type">Agree</el-radio>
              <el-radio label="2" name="type">Strongly Agree</el-radio>
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
      <v-chart auto-resize :options="graph" />

      <p><b><u>Your Selection on Issues:</u></b></p>
      <div v-for="question in questionList" :key="question.no">
        <span style="white-space: nowrap"><b>{{question.name}}</b> - 
          <div v-if="question.value == -2">
            <p><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Your response:</b> Strongly Disargee</p>
          </div>
          <div v-if="question.value == -1">
            <p><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Your response:</b> Disargee</p>
          </div>
          <div v-if="question.value == 0">
            <p><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Your response:</b> Neutral</p>
          </div>
          <div v-if="question.value == 1">
            <p><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Your response:</b> Agree</p>
          </div>
          <div v-if="question.value == 2">
            <p><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Your response:</b> Strongly Agree</p>
          </div>
        </span>
      </div>  
      <br>
      <h3>Results</h3>
      <p>The candidate that the platform recommend is <b><u>{{recommendCandidates}}</u></b>.</p>
    </div>
  </div>
</template>

<script>
import jsonData from "@/../public/Data/data.json";
import baseData from "@/../public/Data/csvjson.json";

import ECharts from "vue-echarts";
import "echarts/lib/chart/line";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import "echarts/lib/component/legend";

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
      area: null,
      showGraph: false,
      graph: {
        title: {
          text: "Projected Result Base on Question Answer",
          left: "center"
        },
        legend: {
          orient: 'vertical',
          x: 'right',
          y: 'center',
          data: ["", "", "", ""]
        },
        xAxis: {
          type: "category",
          boundaryGap: true,
          data: []
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [],
            name: null,
            type: "line"
          },
          {
            data: [],
            name: null,
            type: "line"
          },
          {
            data: [],
            name: null,
            type: "line"
          },
          {
            data: [],
            name: null,
            type: "line"
          }
        ]
      },
      allData: jsonData,
      allCandidatesData: baseData,
      topics: [],
      selectedTopics: [],
      candidatesByRegion: {},
      recommendCandidates: null
    };
  },
  mounted: function() {
    this.loadJson();
    this.showGraph = false;
    this.onLoadQuestion();
  },
  methods: {
    loadJson() {
      var temp = [];
      for (var i = 0; i < this.allData.length; i++) {
        if (temp.includes(this.allData[i]["debating-issue"])) {

        } else {
          temp.push(this.allData[i]["debating-issue"]);
        }

        if (this.allData[i]['region'] in this.candidatesByRegion) {
          if (this.candidatesByRegion[this.allData[i]['region']].includes(this.allData[i]['display-name'])){

          } else {
            this.candidatesByRegion[this.allData[i]['region']].push(this.allData[i]['display-name'])
          }
        } else {
          this.candidatesByRegion[this.allData[i]['region']] = [this.allData[i]['display-name']]

        }
      }

      // Random Pick Topics
      this.topics = temp;
      this.selectedTopics = this.getRandom(this.topics, 5)

    },
    getRandom(arr, n) {
      var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
      if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
      while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
      }
      return result;
    },
    onLoadQuestion() {
      this.questionList = [];
      for (var i = 1; i <= 5; i++) {
        var question = {
          no: i,
          name: this.selectedTopics[i-1],
          value: null
        };
        this.questionList.push(question);
      }
    },
    onSubmit() {
      if (this.area == null) {
        this.$message("select area!");
      } else {
        this.$message("submit!");
        this.showGraph = true;
        this.setValue();
      }
    },
    setValue() {
      var valueList = [[],[],[],[]];
      var questionList = ['Base Score'];

      var pickedCandidates = this.candidatesByRegion[this.area]

      for (var j = 0; j < pickedCandidates.length; j++) {
        var selected = this.search(pickedCandidates[j], this.allCandidatesData)
        var baseScore = selected['Total marks'] - 52.74
        valueList[j].push(baseScore)
      }
      
      for (var i = 0; i < 5; i++) {

        for (var j = 0; j < pickedCandidates.length; j ++ ){
          var base = valueList[j][0]
          var score = parseInt(this.questionList[i].value);
          var result = this.allData.filter(obj => {
            return (obj['display-name'] === pickedCandidates[j] && obj['debating-issue'] === this.questionList[i].name)
          })
          
          if (result[0]['vote'] == 'Yes') {
            score *= 2
          } else if (result[0]['vote'] == 'No') {
            score *= -2
          } else {
            score *= 0
          }
          score *= result[0]['entropy']
          base += score
          valueList[j].push(base)
        }
        questionList.push("Issues on \n" + this.questionList[i].no);
      }

      this.$set(this.graph.xAxis, "data", questionList);

      this.$set(this.graph.legend, 'data', this.candidatesByRegion[this.area])
      
      for (var i = 0 ; i < this.candidatesByRegion[this.area].length; i++){
        this.$set(this.graph.series[i], "data", valueList[i]);
        this.$set(this.graph.series[i], "name", this.candidatesByRegion[this.area][i]);
      }

      var tempMax = []
      for (var i = 0; i < valueList.length; i++) {
        tempMax.push(valueList[i][valueList[i].length - 1] )
      }
      
      var index = this.indexOfMax(tempMax)
      this.recommendCandidates = this.candidatesByRegion[this.area][index]
    },
    indexOfMax(arr) {
        if (arr.length === 0) {
            return -1;
        }

        var max = arr[0];
        var maxIndex = 0;

        for (var i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                maxIndex = i;
                max = arr[i];
            }
        }

        return maxIndex;
    },
    search(nameKey, myArray){
        for (var i = 0; i < myArray.length; i++) {
            if (myArray[i]['Candidates English Name'] === nameKey) {
                return myArray[i];
            }
        }
    },
    onCancel() {
      this.$message({
        message: "cancel!",
        type: "warning"
      });
    },
    onBack() {
      this.showGraph = false;
    }
  }
};
</script>

<style scoped>
.line {
  text-align: center;
}
.echarts {
  width: 100%;
  height: 300px; /* or e.g. 400px */
}
</style>

