$(document).ready(function() {
    $('#sun').click(function() {
        $('#sun').hide(function() {
            $('body').css({'background':'black'})
        });

        $('#moon').show();
        $('.header').css({'background':'#192a56'})
        $('.about-info').css({'color': 'white'})
        $('.about-info p span').css({'color': 'orange'})
        $('h2').css({'color':'orange'});
        $('.about').css({'background':'#424769'})
    })
    $('#moon').click(function() {
        $('#moon').hide(function() {
            $('body').css({'background':'white'})
            $('.about-info').css({'color': 'black'})
            $('.about-info p span').css({'color': 'darkBlue'})
            $('.about').css({'background':' #2D9596'})
            $('.header').css({'background':'#265073'})
            $('h2').css({'color':'black'});
        });

        $('#sun').show();
        
    })

})

$(document).ready(function() {
    $('#moon').hide();
})

$('.mobile-navbar').hide();
 
$(document).ready(function() {
    $('#bar').click(function() {
        $('.mobile-navbar').toggle();
    })

   
}) 