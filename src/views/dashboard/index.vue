<template>
  <div class="dashboard-container">
    <div class="dashboard-text">Welcome to 2020 Legislative Council Election Visualization Platform!</div>
    <p><b>Group 29: </b><u>Candidate Comparison and Recommendation Visualization Tool</u></p>
    <p>Please find your geographical constituency in the map below. After that, you can click the tabs on the left to <br>
      <ul>
      <li>Read the candidates' information; </li>
      <li>Compare the candidates in the same geographical constituency; </li>
      <li>Answer the questionnaire and then our system will recommend a candidate for you.</li>
      </ul>
    </p>
    <iframe id="iframe" src="Tableau/Dashboard.html"></iframe>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  mounted() {
    const oIframe = document.getElementById("iframe");
    const deviceWidth = document.documentElement.clientWidth;
    const deviceHeight = document.documentElement.clientHeight;
    oIframe.style.width = (Number(deviceWidth) - 220)* 0.95 + "px";
    oIframe.style.height = Number(deviceHeight) - 120 + "px";
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
