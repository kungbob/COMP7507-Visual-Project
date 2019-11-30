<template>
  <div class="app-container">
    <el-container>
      <el-aside width="200px">
        <img :src="'CandidatesImages/quat-elizabeth.jpg'">
      </el-aside>
      <el-container>
        <el-header><h1>Quat Elizabeth (葛珮帆)</h1></el-header>
        <el-main>
          <p><b>Sex:</b> Female&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <b>Age:</b> 52<br>
          <b>Geographical Constituency:</b> New Territories East<br>
          <b>Political Affiliation:</b> Democratic Alliance for the Betterment and Progress of Hong Kong (民主建港協進聯盟)</p>
          <b>2016 Legco Election Votes Received:</b> 58825</b><br>
          <b>Attendance Percentage of the 6th LegCo Meetings:</b> 94.91%
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