<template>
  <div class="app-container">
    <el-container>
      <el-aside width="200px">
        <img :src="'CandidatesImages/ip-lau-suk-yee-regina.jpg'">
      </el-aside>
      <el-container>
        <el-header><h1>Ip Lau Suk Yee Regina (葉劉淑儀)</h1></el-header>
        <el-main>
          <p><b>Sex:</b> Female&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <b>Age:</b> 69<br>
          <b>Geographical Constituency:</b> Hong Kong Island<br>
          <b>Political Affiliation:</b> New People's Party (新民黨)</p>
          <b>2016 Legco Election Votes Received:</b> 60760</b><br>
          <b>Attendance Percentage of the 6th LegCo Meetings:</b> 81.68%
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