<template>
	<div>henlo</div>
  <router-link to="/server"><button type="button" ref="router" style="visibility:hidden;"></button></router-link>
</template>

<script>
  import BotService from "../services/BotService.js"
  import UserService from '../services/UserService.js'
  export default {
    name: 'Redirect',
    mounted(){
      this.fetchUserToken();
    },
    data(){
      return{
        token:'a'   
      }
    },
    methods: {
      readCode() {
        return window.location.search.substring(window.location.search.indexOf("=") + 1);
      },
      async fetchUserToken() {
        let code = this.readCode();
        await this.fetchSecretToken().then((r)=>{this.token=r;});
        console.log(code, this.token)
        let options = {
          url: 'https://discord.com/api/oauth2/token',
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: new URLSearchParams({
            "client_id": "738389785697321030",
            "client_secret": this.token,
            "grant_type": 'authorization_code',
            "code": code,
            "redirect_uri": "http://localhost:8080/#/redirect",
            "scope": 'identify guilds'
          })

        }
        //eslint-disable-next-line
        let get_token = await fetch('https://discord.com/api/oauth2/token', options).then((response) => {
          return response;
        }).then(response => {
          return response.json();
        }).then(response => {
          this.fetchUserInfo(response)
        }).catch((error) => console.error(error));
      },
      fetchSecretToken(){
        let secret = BotService.findAll("sc").catch((error)=>console.error(error));
          return secret.then((r)=>{return r.data[0].value})
          .catch((error) => console.log(error))
        },
      async fetchUserInfo(token){
        console.log(token)
        let userInfo = await fetch(`https://discordapp.com/api/v9/users/@me`,
          {method:'GET',headers: {Authorization: `Bearer ${token.access_token}`}})
        .then(r=>{return r.json()})
        .then((r)=>{return r;})

        console.log(userInfo)

        await fetch(`https://discordapp.com/api/v9/users/@me/guilds`,
          {method:'GET',headers: {Authorization: `Bearer ${token.access_token}`}})
        .then(r=>{return r.json()})
        .then((r)=>{
          let adminGuild=[]
          r.forEach((e)=>{
            if(e.permissions.startsWith('109')){
              adminGuild.push(e)
            }
          })
          UserService.create({nickname:userInfo.username,picture:"https://cdn.discordapp.com/avatars/142682730776231936/"+userInfo.avatar,token:token.access_token,refresh:token.refresh_token,scope:token.scope,type:token.token_type,guild:adminGuild})
          localStorage.setItem("user",userInfo.username)
          this.$refs.router.click()

      })
  }
}
}

</script>

<style scoped lang="scss">
  
</style>