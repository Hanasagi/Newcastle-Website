<template>
  <div id="dashboard">
    <LoginCard/>
    <p class="title">Dashboard</p>
    <div class="board">
      <p class="subtitle">NEWS</p>
      <span class="dashboard-elem">
        <p>Enable news</p>
        <input type="checkbox"/>
      </span>
      <span class="dashboard-elem">        
          <p>Webhook URL</p>
          <input type="text"/>
      </span>
      <p class="subtitle">DANBOORU</p>
      <span class="dashboard-elem">
        <p>Enable news</p>
        <input type="checkbox"/>
      </span>
      <span class="dashboard-elem">
        <p>Check Channel ID</p>
        <input type="text"/>
      </span>
      <span class="dashboard-elem">
        <p>Safe for Work Channel ID</p>
        <input type="text"/>
      </span>
      <span class="dashboard-elem">
        <p>Not Safe for Work Channel ID</p>
        <input type="text"/>
      </span>
      <p class="subtitle">OTHER</p>
      <span class="dashboard-elem">
        <p>Change language</p>
        <select name="lang">
          <option value="EN">English</option>
          <option value="FR">French</option>
        </select>
      </span>
    </div>
  </div>
</template>


<script>
import LoginCard from "../LoginCard.vue";
export default {
  name: 'Dashboard',
  components: {
   LoginCard
 },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import './Dashboard.scss';
  @import './Dashboard-Responsive.scss';
</style>
