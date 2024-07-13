/*$(document).ready(function() {
    $(document).on('click', '.nav', function() {
        $('.selection-menu-container').toggleClass('show');
    });

    // Close the menu when clicking outside of it
    $(document).click(function(e) {
        if (!$(e.target).closest('.nav, .selection-menu-container').length) {
            $('.selection-menu-container').removeClass('show');
        }
    });
    //------------------------------------------------
});*/

$(document).ready(function(){
    $(document).on('click','.list-menu',function(){
        const selectedPage = $(this).text();
        if(selectedPage === 'About'){
            window.location.href = "about.html";
        }else if(selectedPage === 'Home'){
            window.location.href = 'frontpage.html';
        }else if(selectedPage ==='Contact Me'){
            window.location.href ='contact.html';
        }
    })
    $('.my-cat, .iium-img').each(function(index) {
        $(this).delay(300 * index).fadeTo(1000, 1);
    });
    $(document).on('click','.contact-me',function(){
        window.location.href = 'contact.html';
    })

})
