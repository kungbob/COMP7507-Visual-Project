<template>
  <div class="app-container">
    <el-container>
      <el-aside width="200px">
        <img :src="'CandidatesImages/cheung-chiu-hung.jpg'">
      </el-aside>
      <el-container>
        <el-header><h1>Cheung Chiu Hung (張超雄)</h1></el-header>
        <el-main>
          <p><b>Sex:</b> Male&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <b>Age:</b> 62<br>
          <b>Geographical Constituency:</b> New Territories East<br>
          <b>Political Affiliation:</b> Labour Party (工黨)</p>
          <b>2016 Legco Election Votes Received:</b> 49800</b><br>
          <b>Attendance Percentage of the 6th LegCo Meetings:</b> 83.72%
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