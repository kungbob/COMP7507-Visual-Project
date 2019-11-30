<template>
  <div class="app-container">
    <el-container>
      <el-aside width="200px">
        <img :src="'CandidatesImages/kwok-wai-keung.jpg'">
      </el-aside>
      <el-container>
        <el-header><h1>Kwok Wai Keung (郭偉强)</h1></el-header>
        <el-main>
          <p><b>Sex:</b> Male&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <b>Age:</b> 41<br>
          <b>Geographical Constituency:</b> Hong Kong Island<br>
          <b>Political Affiliation:</b> The Hong Kong Federation of Trade Unions (香港工會聯合會)</p>
          <b>2016 Legco Election Votes Received:</b> 45925</b><br>
          <b>Attendance Percentage of the 6th LegCo Meetings:</b> 90.84%
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