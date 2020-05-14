const APIUtil = require('./api_util.js');

class UsersSearch {
    constructor($el){
        this.$el = $el; //nav element
        this.$input = $el.find('input');
        this.$input.on('change', this.handleInput.bind(this));
        this.$ul = $el.find('ul');

    }

    handleInput(){
        const success = res => {
            this.render();
        }

        APIUtil.searchUsers(this.$input.val())
    }

    render(){
        console.log("RENDERING!")
    }
}


module.exports = UsersSearch