const FollowToggle = require('./follow_toggle.js')
const UsersSearch = require('./users_search.js')

$( () => {
    $('button.follow-toggle').each(function() {
        $button = $(this);
        let toggle = new FollowToggle($button)
    });

    let search = new UsersSearch($('.users-search'));
});
