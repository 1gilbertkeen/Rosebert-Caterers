$('.cd-form .required-email').keyup(function(event){
    var emailInput = $(this),
    insertedEmail = emailInput.val(),
    atPosition = insertedEmail.indexOf("@");
    dotPosition = insertedEmail.lastIndexOf(".")
    // check if a user has inserted a @ and a dot(.)
    if(atPosition < 1 || dotPosition < atPosition+2){
        //if they haven't
        //hide the subscribe button
        $('.cd-form').removeClass('is-active').find('.cd-loading').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
    } else {
        //if they have
        // show the subscribe button
        $('.cd-form').addClass('is-active');
    }
});