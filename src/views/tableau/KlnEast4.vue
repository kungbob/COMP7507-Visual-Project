<template>
  <div class="dashboard-container">
    <iframe id="iframe" src="Tableau/KlnEast4.html"></iframe>
    <br>
    <h3>Remarks</h3>
    <p>Entropy reflects the level of the controversy on 'Yes / No' votes.<br>
    <ul>
      <li>Entropy is a value between 0 and 1.</li>
      <li>A zero-value means that there is no controversy based on the voting results, i.e. all of them is ‘Yes’ or all of them is ‘No’.</li>
      <li>A one-value means that the number of ‘Yes’ votes and the number of ‘No’ votes are the same.</li>
    </ul>
    </p>
    <u>Formula</u>
    <ul>
      <li><i>p</i> = (# of ‘Yes’ votes) ÷ (# of ‘Yes’ votes + # of ‘No’ votes)</li>
      <li><i>q</i> = (# of ‘No’ votes) ÷ (# of ‘Yes’ votes + # of ‘No’ votes) = 1 - <i>p</i></li>
      <li><b>Entropy</b> = - <i>p</i> log<sub>2</sub> <i>p</i> - <i>q</i> log<sub>2</sub> <i>q</i>.</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Tableau",
  computed: {
    ...mapGetters(["name"])
  },
  data() {
    return {};
  },
  mounted() {
    const oIframe = document.getElementById("iframe");
    const deviceWidth = document.documentElement.clientWidth;
    const deviceHeight = document.documentElement.clientHeight;
    oIframe.style.width = Number(deviceWidth) - 220 + "px";
    oIframe.style.height = Number(deviceHeight) - 120 + "px";
  }
};
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

.tableau {
  height: 100;
}
</style>
