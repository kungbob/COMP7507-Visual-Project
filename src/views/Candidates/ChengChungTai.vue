<template>
  <div class="app-container">
    <el-container>
      <el-aside width="200px">
        <img :src="'CandidatesImages/cheng-chung-tai.jpg'">
      </el-aside>
      <el-container>
        <el-header><h1>Cheng Chung Tai (鄭松泰)</h1></el-header>
        <el-main>
          <p><b>Sex:</b> Male&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <b>Age:</b> 36<br>
          <b>Geographical Constituency:</b> New Territories West<br>
          <b>Political Affiliation:</b> Civic Passion (熱血公民)</p>
          <b>2016 Legco Election Votes Received:</b> 84121</b><br>
          <b>Attendance Percentage of the 6th LegCo Meetings:</b> 93.64%
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