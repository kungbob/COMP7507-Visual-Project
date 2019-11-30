<template>
  <div class="app-container">
    <el-container>
      <el-aside width="200px">
        <img :src="'CandidatesImages/hui-chi-fung.jpg'">
      </el-aside>
      <el-container>
        <el-header><h1>Hui Chi Fung (許智峯)</h1></el-header>
        <el-main>
          <p><b>Sex:</b> Male&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <b>Age:</b> 37<br>
          <b>Geographical Constituency:</b> Hong Kong Island<br>
          <b>Political Affiliation:</b> Democratic Party (民主黨)</p>
          <b>2016 Legco Election Votes Received:</b> 42499</b><br>
          <b>Attendance Percentage of the 6th LegCo Meetings:</b> 84.99%
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