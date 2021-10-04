
<template>
  <header class="topLogin">
        <div>
          <div class="chibi"><img src="@/assets/NewcastleChibi.png"/></div>
          <div class="chibi--back"></div>
          <div class="right-triangle">
        </div>
        <div class="link-wrapper">
          <a class="login" ref="username" href="https://discord.com/api/oauth2/authorize?client_id=738389785697321030&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2F%23%2Fredirect&response_type=code&scope=identify%20guilds">Login</a> 
          <a class="logout" ref="logout" style="display:none;" @click="logout">Logout</a>
        </div>
        </div>
</header>
</template>

<script>
  import UserService from '../services/UserService.js'
  export default {
  name: 'LoginCard',
  data(){
    return{
      user:""
    }
  },
  mounted(){
    this.user = localStorage.getItem("user")
    this.isLoggedIn();
  },
  methods:{
    isLoggedIn(){
      if(this.user!==null){
        this.$refs.username.innerText=this.user;
        this.$refs.username.style.pointerEvents="none";
        this.$refs.logout.style.display="block";
      }
    },
    async logout(){
      let id = await UserService.findOne(this.user).then((r)=>{return r.data[0].id})
      UserService.delete(id).then(()=>{
        localStorage.removeItem("user");
        this.$refs.logout.style.display="none";
        window.location.href="/";
      });
      
    }
  }
}
</script>

<style scoped lang="scss">
  $black: rgba(0, 0, 0, 0.5);
$mainColor:#22A000;
$secondaryColor:#1C8400;
$firstFont:'Montserrat';
$secondFont:'Work Sans';
a{
  text-decoration: none;
  color:white;
}
  .topLogin{
  width:35em;
  height:5em;
  background:$black;
  position:absolute;
  top:0;
  left:0;
  display:flex;
  justify-content:center;
  align-items:center;
  &>div:first-of-type{
    position: static;
  }
  &>div:first-of-type>.chibi{
    position: absolute;
    top:0;
    left:0;
    height:5.5em;
    width:5.5em;
    background:transparent;
    
    transform:rotate(-45deg) translateY(2.5em);
    overflow:hidden;
    &--back{
      @extend .chibi;
      border:2px solid $mainColor;
    }
    &>img{
      width:8em;
      height:auto;
      transform:rotate(45deg) translateX(-2.5em);
    }
  }
  &>div:first-of-type>.right-triangle{
    position: absolute;
    bottom:4.8em;
    left:4.5em;
    height:3.5em;
    width:3.5em;
    transform:rotate(-45deg) translateY(2.5em);
        border: 4px solid #22A000;
  }
  .link-wrapper{
    position: relative;
    margin-left: 8.5em;
    display: flex;
  }
}
.login{
  position:relative;
  font-family: $secondFont;
  text-transform: uppercase;
  font-weight: lighter;
  font-size:1.8em;
  background:$black;
  padding:0.7em 3em;
  clip-path: polygon(12% 0, 100% 0, 100% 100%, 12% 100%, 0 50%);
  cursor:pointer;
  z-index:1;
}
.logout{
  position:relative;
  border: 2px solid #22A000;
  padding: 1.5em 1em;
   margin-left: 0.5em;
}
</style>