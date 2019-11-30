<template>
  <div class="app-container">
    <el-container>
      <el-aside width="200px">
        <img :src="'CandidatesImages/chan-chi-chuen-raymond.jpg'">
      </el-aside>
      <el-container>
        <el-header><h1>Chan Chi Chuen Raymond (陳志全)</h1></el-header>
        <el-main>
          <p><b>Sex:</b> Male&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <b>Age:</b> 47<br>
          <b>Geographical Constituency:</b> New Territories East<br>
          <b>Political Affiliation:</b> People Power (人民力量)</p>
          <b>2016 Legco Election Votes Received:</b> 45993</b><br>
          <b>Attendance Percentage of the 6th LegCo Meetings:</b> 99.75%
        </el-main>
        <el-footer></el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
    name: "test",
    data() {
      return {
      }
    }
  }
</script>