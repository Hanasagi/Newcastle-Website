<template>
  <div id="features">
    <div class="firstPanel">
      <p>Features</p>
      <span>
        <button>ADD TO DISCORD</button>
        <button>WHAT IS HAS TO OFFER</button>
        <button>COMMANDS</button>
      </span>
      <img class="first-wave" src="@/assets/green-wave.svg"/>
    </div>
    <div class="secondPanel">
      <p>What is has to offer</p>
      <div class="panel-elem">
        <p>AZUR LANE WIKI ON YOUR SERVER</p>
        <p>Tired of going back and forth from your discord server to the azur lane wiki page ? Then this bot is made for you, multiple commands are available for you to search informations that directly came from the wiki and handed to you by our veteren maid, Newcastle !</p>
        <a>See all available commands</a>
      </div>
      <div class="panel-elem">
        <p>NEWS FOR DAYS</p>
        <p>Don’t have a Twitter account, or your timeline is just a complete clusterfuck and can’t find any news ? Let your maid handle the news delivery for you, free of charge and at the speed of light (not really but still, it’s pretty fast) ! </p>
        <img class="img-features" src="@/assets/news-bot.png"/>
      </div>
      <div class="panel-elem">
        <p>DANBOORU ON YOUR SERVER</p>
        <p>What if I said you could get all the latest Azur Lane related pictures uploaded on Danbooru directly on your server ? Well, turn out you can. You can also subscribe to a character you like, and get a ping when a picture of that character is uploaded !</p>
        <img class="img-features" src="@/assets/danbooru-img.png"/>
      </div>
      <img class="second-wave" src="@/assets/purple-wave.svg"/>
    </div>
    <div class="thirdPanel">
      <p>Commands</p>
      <div class="panel-elem">
        <span>
        <p>SHIP</p>
        <p>Get general informations on the ship you want.</p>
      </span>
      <span>
        <img class="img-features" src="@/assets/ship.png"/>
      </span>
      </div>
      <div class="panel-elem">
        <span><img class="img-features" src="@/assets/skin.png"/></span>
        <span>
        <p>SKIN</p>
        <p>See every skins a ship has, including retrofit.</p>
      </span>

      </div>
      <div class="panel-elem">
        <span>
        <p>BUILD</p>
        <p>Get a list of all build times available, or get a list of ship available
to said construction.</p>
      </span>
      <span>
        <img class="img-features" src="@/assets/build.png"/>
      </span>
      </div>
      <div class="panel-elem">
           <span><img class="img-features" src="@/assets/stat.png"/></span>
        <span>
        <p>STAT</p>
        <p>See all the stats of a ship, from level 0 to 120
and base to retrofit, if available.</p>
      </span>

      </div>
      <div class="panel-elem">
        <span>
        <p>SUB</p>
        <p>Want to subscribe to a character to get a ping when it appears
from danbooru ? Then look no further.
<span style="color: red">/!\ Danbooru functions needs to be enabled to use this command.</span></p>
      </span>
      </div>
    </div>

  </div>
</template>


<script>

export default {
  name: 'Features',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import './Features.scss';
  @import './Features-Responsive.scss';
</style>
