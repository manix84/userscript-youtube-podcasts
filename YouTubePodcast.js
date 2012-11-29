(function () {
    var YouTubePodcast = function () {
        this.container = document.getElementById("watch7-user-header");

        this.init();
    };

    YouTubePodcast.prototype = {
        init: function () {
            this.createButtonBase();
        },
        createButtonBase: function () {
            this.newButton = document.createElement("div");
            newButton.innerHTML = "<span class='yt-uix-button-context-light yt-uix-button-subscription-container'><button type='button' class='yt-subscription-button yt-subscription-button-js-default yt-uix-button yt-uix-button-subscribe-branded'><span class='yt-uix-button-icon-wrapper'><img class='yt-uix-button-icon yt-uix-button-icon-subscribe-branded' src='//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif' alt='><span class='yt-uix-button-valign'></span></span><span class='yt-uix-button-content'><span class='subscribe-hh-label'>Subscribe</span><span class='subscribed-hh-label'>Subscribed</span><span class='unsubscribe-hh-label'>Unsubscribe</span></span></button><span class='yt-subscription-button-disabled-mask'></span></span>";
            this.container.appendChild(this.newButton);
        }


        // 720 download URL structure.
        // http://o-o---preferred---sn-aigeznl6---v14---lscache6.c.youtube.com/videoplayback?upn=5D0Z24HQr5A&sparams=cp%2Cgcr%2Cid%2Cip%2Cipbits%2Citag%2Cratebypass%2Csource%2Cupn%2Cexpire&fexp=906357%2C916807%2C922911%2C902541%2C922401%2C920704%2C912806%2C927201%2C925706%2C928001%2C922403%2C913546%2C913556%2C916805%2C920201%2C911116%2C901451&ms=au&expire=1354081069&itag=22&ipbits=8&gcr=gb&sver=3&ratebypass=yes&mt=1354059848&ip=81.104.38.50&mv=m&source=youtube&key=yt1&cp=U0hUSVBTT19LU0NONF9ITVNBOmxyeFJSNndFZEox&id=7eea4c5f1e59f2c5&newshard=yes&signature=7AF7DDDC16D65ED0D7F36BF1659DA3C0E82358F1.5008BEA514395E37DD76FB48544AFCFB27EB741D&title=Garrys Mod - Robo Sumo Challenge

        // PIPE
        // http://pipes.yahoo.com/pipes/pipe.info?_id=2404b1b289037c4a7f616e39986a166c

        // PIPE IN USE
        // http://pipes.yahoo.com/pipes/pipe.run?YouTubeUsername=SourceFed&format=hd&_id=2404b1b289037c4a7f616e39986a166c&_render=rss&itemLimit=200

        // PIPE WITH VALUES
        // http://pipes.yahoo.com/pipes/pipe.run?YouTubeUsername=<USERNAME>&format=<FORMAT>&_id=2404b1b289037c4a7f616e39986a166c&_render=rss&itemLimit=200

    };





}());
