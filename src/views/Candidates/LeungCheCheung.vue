<template>
  <div class="app-container">
    <el-container>
      <el-aside width="200px">
        <img :src="'CandidatesImages/leung-che-cheung.jpg'">
      </el-aside>
      <el-container>
        <el-header><h1>Leung Che Cheung (梁志祥)</h1></el-header>
        <el-main>
          <p><b>Sex:</b> Male&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <b>Age:</b> 61<br>
          <b>Geographical Constituency:</b> New Territories West<br>
          <b>Political Affiliation:</b> Democratic Alliance for the Betterment and Progress of Hong Kong (民主建港協進聯盟)</p>
          <b>2016 Legco Election Votes Received:</b> 50190</b><br>
          <b>Attendance Percentage of the 6th LegCo Meetings:</b> 88.55%
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