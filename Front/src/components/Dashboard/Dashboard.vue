<template>
  <div id="dashboard">
    <LoginCard/>
    <form method="post" @submit="checkData">
    <p class="title">Dashboard</p>
    <div class="board">
      <p class="subtitle">NEWS</p>
      <span class="dashboard-elem">
        <p>Enable news</p>
        <input type="checkbox" name="show_news" ref="show_news"/>
      </span>
      <span class="dashboard-elem">        
          <p>Webhook URL</p>
          <input type="text" name="webhook_url" ref="webhook_url"/>
      </span>
      <p class="subtitle">DANBOORU</p>
      <span class="dashboard-elem">
        <p>Enable danbooru</p>
        <input type="checkbox" name="danbooru_feed" ref="danbooru_feed"/>
      </span>
      <span class="dashboard-elem">
        <p>Check Channel ID</p>
        <input type="text" maxlength="18" name="check_channel" ref="check_channel"/>
      </span>
      <span class="dashboard-elem">
        <p>Safe for Work Channel ID</p>
        <input type="text" minlength="18" maxlength="18" name="sfw_danbooru_channel" ref="sfw_danbooru_channel"/>
      </span>
      <span class="dashboard-elem">
        <p>Not Safe for Work Channel ID</p>
        <input type="text" minlength="18" maxlength="18" name="nsfw_danbooru_channel" ref="nsfw_danbooru_channel"/>
      </span>
      <p class="subtitle">OTHER</p>
      <span class="dashboard-elem">
        <p>Change language</p>
        <select name="lang" ref="lang">
          <option value="EN">English</option>
          <option value="FR">French</option>
        </select>
      </span>
      <input type="submit" value="SAVE"/>
    </div>
  </form>
  </div>
</template>


<script>
import LoginCard from "../LoginCard.vue";
import OptionService from "../../services/OptionService.js"
import GuildService from "../../services/GuildService.js"
export default {
  name: 'Dashboard',
  components: {
    LoginCard
  },
  data() {
    return {
      old_options: {},
      lang_option: '',
      index: 0,
      guildId:''
    }
  },
  mounted() {
    this.loadGuildOptions();
  },
  methods: {
    async loadGuildOptions() {
      this.guildId = window.location.hash.substring(1, window.location.hash.length);
      this.old_options = await OptionService.findOne(this.guildId).then(r => {
        return r.data
      });
      this.lang_option = await GuildService.findOne(this.guildId).then(r => {
        return r.data.lang
      })
      this.renderOptions();
    },
    renderOptions() {
      console.log()
      if (this.old_options.show_news !== false) {
        this.$refs.show_news.checked = true;
        this.$refs.webhook_url.value = this.old_options.webhook_url
        this.$refs.webhook_url.required = true;
      }
      if (this.old_options.danbooru_feed !== 0) {
        this.$refs.danbooru_feed.checked = true;
        this.$refs.check_channel.value = this.old_options.check_channel;
        this.$refs.sfw_danbooru_channel.value = this.old_options.sfw_danbooru_channel;
        this.$refs.nsfw_danbooru_channel.value = this.old_options.nsfw_danbooru_channel;
        this.$refs.sfw_danbooru_channel.required = true;
        this.$refs.nsfw_danbooru_channel.required = true;
      }
      this.$refs.lang.value = this.lang_option
    },
    checkData(e) {
      e.preventDefault();
      let new_options={};
      let new_lang_option={};
      e.target.forEach((e) => {
        let nw = e.name;
        let old_options_value=this.old_options[nw]
        if (e.type === "checkbox") {
          if(old_options_value===1)
            old_options_value=true
          if(e.checked!==old_options_value){
            new_options[nw]=e.checked
          }
          return 0;
        } else if (e.type === "submit") {
          return 0;
        }
        if (e.localName === "select") {
          if (e.value !== this.lang_option) {
            new_lang_option["lang"]=e.value
          }
          return 0;
        }
        
      
        
        console.log(e.value, old_options_value)
        if (e.value !== old_options_value) {
          new_options[nw]=e.value
        }

        
      })
      console.log(new_lang_option)
      if(Object.keys(new_options).length!==0 || Object.keys(new_lang_option).length!==0)
        this.sendData(new_options,new_lang_option)
    },
    sendData(options,lang) {
      if(options.length!==0){
        OptionService.update(this.guildId,options)
      } 
      if(lang.options!==0){
        GuildService.update(this.guildId,lang)
      }
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import './Dashboard.scss';
  @import './Dashboard-Responsive.scss';
</style>
