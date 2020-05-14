const APIUtil = require('./api_util.js');

class FollowToggle {
  constructor($el){
    this.$el = $el;
    this.userId = $el.data('user-id');
    // this.followState = $el.data('initial-follow-state');
    this.followState = ($el.data('initial-follow-state')) ? "followed" : "unfollowed";
    this.render();
    this.$el.on('click', this.handleClick.bind(this));
  }

  handleClick(e){
    e.preventDefault();

    this.followState = (this.followState === "followed") ? "unfollowing" : "following";
    this.render();
    
    let success = res => {
        this.followState = (this.followState === "unfollowing") ? "unfollowed" : "followed";
        this.render();
    }

    if (this.followState === "following" ){
      APIUtil.followUser(this.userId).then(success);      
    } else {
      APIUtil.unfollowUser(this.userId).then(success);      
    }
  }

  render(){
    switch (this.followState){
      case ("followed"):
        this.$el.text('Unfollow');
        this.$el.prop("disabled", false);
        break;
      case ("unfollowed"):
        this.$el.text('Follow');
        this.$el.prop("disabled", false);
        break;
      case ("following"):
        this.$el.text('Following');
        this.$el.prop("disabled", true);
        break;
      case ("unfollowing"):
        this.$el.text('Unfollowing');
        this.$el.prop("disabled", true)
        break;
    }

  }
}

module.exports = FollowToggle;