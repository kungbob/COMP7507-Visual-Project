<template>
  <div class="app-container">
    <el-container>
      <el-aside width="200px">
        <img :src="'CandidatesImages/tien-michael-puk-sun.jpg'">
      </el-aside>
      <el-container>
        <el-header><h1>Tien Michael Puk Sun (田北辰)</h1></el-header>
        <el-main>
          <p><b>Sex:</b> Male&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <b>Age:</b> 69<br>
          <b>Geographical Constituency:</b> New Territories West<br>
          <b>Political Affiliation:</b> Roundtable (實政圓桌)</p>
          <b>2016 Legco Election Votes Received:</b> 70646</b><br>
          <b>Attendance Percentage of the 6th LegCo Meetings:</b> 86.26%
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