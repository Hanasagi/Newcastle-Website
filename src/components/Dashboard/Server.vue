<template>
  <div id="server">
    <LoginCard />
    <p class="title">Dashboard</p>
    <div class="board">
      <p>Select a server</p>
      <div class="flex">
        <div class="elem">
          <div class="server">
            <div></div>
          </div>
          <span>
              <p>Azur Lane Communauté FR</p>
              <button>Setup</button>
            </span>
        </div>
        <div class="elem">
          <div class="server">
            <div></div>
          </div>
          <span>
              <p>Azur Lane Communauté FR</p>
              <button>Setup</button>
            </span>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import LoginCard from "../LoginCard.vue";
export default {
  name: 'Server',
  components: {
   LoginCard
 },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import './Server.scss';
  @import './Server-Responsive.scss';
</style>
