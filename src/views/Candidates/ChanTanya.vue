<template>
  <div class="app-container">
    <el-container>
      <el-aside width="200px">
        <img :src="'CandidatesImages/chan-tanya.jpg'">
      </el-aside>
      <el-container>
        <el-header><h1>Chan Tanya (陳淑莊)</h1></el-header>
        <el-main>
          <p><b>Sex:</b> Female&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <b>Age:</b> 48<br>
          <b>Geographical Constituency:</b> Hong Kong Island<br>
          <b>Political Affiliation:</b> Civic Party (公民黨)</p>
          <b>2016 Legco Election Votes Received:</b> 35404</b><br>
          <b>Attendance Percentage of the 6th LegCo Meetings:</b> 78.88%
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