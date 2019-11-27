<template>
  <div class="dashboard-container">
    <iframe id="iframe" src="Tableau/KlnWest4.html"></iframe>
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
