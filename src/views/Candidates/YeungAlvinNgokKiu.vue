<template>
  <div class="app-container">
    <el-container>
      <el-aside width="200px">
        <img :src="'CandidatesImages/yeung-alvin-ngok-kiu.jpg'">
      </el-aside>
      <el-container>
        <el-header><h1>Yeung Alvin Ngok Kiu (楊岳橋)</h1></el-header>
        <el-main>
          <p><b>Sex:</b> Male&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <b>Age:</b> 38<br>
          <b>Geographical Constituency:</b> New Territories East<br>
          <b>Political Affiliation:</b> Civic Party (公民黨)</p>
          <b>2016 Legco Election Votes Received:</b> 52416</b><br>
          <b>Attendance Percentage of the 6th LegCo Meetings:</b> 92.11%
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