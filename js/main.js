
$(document).ready(function() {
	var height = $(window).height();

    $('#header').css('height', height);
	   

    //Scrollspy plugin
    $('body').scrollspy({ target: '.navbar-spy'});


    //Email Script
    // $("#contact-form").validate({
    // rules: {
    //     fullname: {
    //         required: true
    //     },
    //     email: {
    //         required: true,
    //         email: true
    //     },
    //     message: {
    //         required: true,
    //         maxlength: 8000
    //     }
    // },

    // messages: { // custom messages
    //     fullname: {
    //         required: "Please enter your name"
    //     },
    //     email: {
    //         required: "Please enter your email address"
    //     },
    //     message: {
    //         required: "enter your message",
    //         maxlength: jQuery.format("The maxlength for message is {0} !")
    //     },
    // },

    // submitHandler: function(form) {
    //     $form = $(form);
    //     $container = $form.parent();
    //     w = $form.outerWidth();
    //     h = $form.outerHeight();
    //     $form.hide();
        
    //     $('#msg_submitting', $container).width(w).height(h).fadeIn(1000);            
    //     $.ajax({
    //         type: "POST",
    //         url: $form.attr('action'),
    //         data: $form.serialize(),
    //         success: function (data) {
    //                 $('#msg_submitting', $container).hide();
    //                 if(data == 'success'){
    //                     $('#msg_submitted',$container).width(w).height(h).fadeIn(1000);
    //                 }
    //                 else{
    //                     $('#errors',$container).html(data).show();
    //                     $form.show();
    //                 }
    //         }
    //     });
        
    //     return false;
    
    // }

    // });

    // Email Form
    var form = $('form[role="form"]');
    form.addEventListener('submit', function(e) {
        // Prevent default form submission
        e.preventDefault();

        var target = e.target || e.srcElement;
        var i = 0;
        var message = '';

        // Loop Through All Input Fields
        for(i = 0; i < target.length; i++) {
            // Check to make sure it's a value. Don't need to include Buttons
            if(target[i].type != 'text' && target[i].type != 'textarea') {
                // Skip to next input
                continue;
            }
        }
    });

});