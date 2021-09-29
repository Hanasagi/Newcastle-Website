<template>
  <div id="server">
    <LoginCard />
    <p class="title">Dashboard</p>
    <div class="board">
      <p>Select a server</p>
      <div class="flex" :key="indexKey">
        <div class="elem" v-for="g in guild" :key="g">
          <div class="server" >
            <div class="icon">
              <div class="server-icon" :style="{'background':'url('+g[0].icon_url+')','background-size':'cover'}"></div>
            </div>
            <div class="server-back" >
              <div :style="{'background':'url('+g[0].icon_url+')','background-size':'cover'}"></div>
            </div>
          </div>
          <span>
              <p>{{g[0].name}}</p>
              <button>Setup</button>
            </span>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import LoginCard from "../LoginCard.vue";
import UserService from "../../services/UserService.js"
import GuildService from "../../services/GuildService.js"
export default {
  name: 'Server',
  mounted(){
    this.checkServer();
  },
  data(){
    return{
      guild:[],
      indexKey:0
      }
  },
  components: {
   LoginCard
 },
 methods:{
  async checkServer(){
      let username = localStorage.getItem("user");
      let userGuild = await UserService.findAll(username).then((r)=>{return r.data[0].guild})
      for(let guilds of userGuild){
        let guild = await GuildService.findOne(guilds.id).then((r)=>{return r.data})
        if(guild.length!==0){
          this.guild.push(guild)
        }
      }
      console.log(this.guild[0][0])
      this.forceRerender()
  },
  forceRerender(){
    this.indexKey+=1;
  }
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import './Server.scss';
  @import './Server-Responsive.scss';
</style>
