// Agency Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

})(jQuery); 

    $("g#timeline line.st22").css("opacity","0");
    $("#_x32_017tm line").css("opacity","1");

    $("#timeline text").css("pointer-events","none");

    $("g#timeline rect").css("cursor","pointer");





    
        $("#_x31_994tm rect").on('click',function(){

            $("g#_x31_094").css("opacity","1");
            $("g#_x32_000").css("opacity","0");
            $("g#_x32_005").css("opacity","0");
            $("g#_x32_010").css("opacity","0");
            $("g#_x32_015").css("opacity","0");
            $("g#_x32_017").css("opacity","0");
            $("#timeline line.st22").css("opacity","0")
            $("#_x31_994tm line").css("opacity","1")


        });

        $("#_x32_000tm rect").on('click',function(){

            $("g#_x32_000").css("opacity","1");
            $("g#_x31_094").css("opacity","0");
            $("g#_x32_005").css("opacity","0");
            $("g#_x32_010").css("opacity","0");
            $("g#_x32_015").css("opacity","0");
            $("g#_x32_017").css("opacity","0");
            $("#timeline line.st22").css("opacity","0")
            $("#_x32_000tm line").css("opacity","1")
        

        });

        $("#_x32_005tm rect").on('click',function(){

            $("g#_x32_005").css("opacity","1");
            $("g#_x31_094").css("opacity","0");
            $("g#_x32_000").css("opacity","0");
            $("g#_x32_010").css("opacity","0");
            $("g#_x32_015").css("opacity","0");
            $("g#_x32_017").css("opacity","0");
            $("#timeline line.st22").css("opacity","0")
            $("#_x32_005tm line").css("opacity","1")
            

        });

        $("#_x32_010tm rect").on('click',function(){

            $("g#_x32_010").css("opacity","1");
            $("g#_x31_094").css("opacity","0");
            $("g#_x32_005").css("opacity","0");
            $("g#_x32_000").css("opacity","0");
            $("g#_x32_015").css("opacity","0");
            $("g#_x32_017").css("opacity","0");
            $("#timeline line.st22").css("opacity","0")
            $("#_x32_010tm line").css("opacity","1")


        });

        $("#_x32_015tm rect").on('click',function(){

            $("g#_x32_015").css("opacity","1");
            $("g#_x31_094").css("opacity","0");
            $("g#_x32_005").css("opacity","0");
            $("g#_x32_010").css("opacity","0");
            $("g#_x32_000").css("opacity","0");
            $("g#_x32_017").css("opacity","0");
            $("#timeline line.st22").css("opacity","0")
            $("#_x32_015tm line").css("opacity","1")
            


        });

        $("#_x32_017tm rect").on('click',function(){

            $("g#_x32_017").css("opacity","1");
            $("g#_x31_094").css("opacity","0");
            $("g#_x32_005").css("opacity","0");
            $("g#_x32_010").css("opacity","0");
            $("g#_x32_015").css("opacity","0");
            $("g#_x32_000").css("opacity","0");
            $("#timeline line.st22").css("opacity","0")
            $("#_x32_017tm line").css("opacity","1")

        });

// bottoni

        $("#REGGAE_1_").on('mouseover',function(){
        $("g#reggaenero_2_").hide();

    });

        $("#REGGAE_1_").on('mouseout',function(){
        $("g#reggaenero_2_").show();

    });

        $("#country_2_").on('mouseover',function(){
        $("g#countrynero_2_").hide();
        $("g#countrygiallo_2_").show();


    });
        
        $("#country_2_").on('mouseout',function(){
        $("g#countrynero_2_").show();
        $("g#countrygiallo_2_").show();


    });

        $("#jazz_1_").on('mouseover',function(){
        $("g#jazznero_1_").hide();

    });
        
        $("#jazz_1_").on('mouseout',function(){
        $("g#jazznero_1_").show();

    });

        $("#rock_1_").on('mouseover',function(){
        $("g#rocknero_1_").css("opacity","0");

    });
        
        $("#rock_1_").on('mouseout',function(){
        $("g#rocknero_1_").css("opacity","1");

    });

        $("#Hiphop_1_").on('mouseover',function(){
        $("g#hiphopnero_1_").hide();

    });
        
        $("#Hiphop_1_").on('mouseout',function(){
        $("g#hiphopnero_1_").show();

    });

        $("#EDM_1_").on('mouseover',function(){
        $("g#edmnero_1_").hide();

    });
        
        $("#EDM_1_").on('mouseout',function(){
        $("g#edmnero_1_").show();

    });


        $("#Blues_1_").on('mouseover',function(){
        $("g#bluesnero_1_").hide();

    });
        
        $("#Blues_1_").on('mouseout',function(){
        $("g#bluesnero_1_").show();

    });


        $("#r_x26_b_1_").on('mouseover',function(){
        $("g#r_x26_bnero_1_").hide();

    });
        
        $("#r_x26_b_1_").on('mouseout',function(){
        $("g#r_x26_bnero_1_").show();

    });



// treemap

  $("#reggae666").on('mouseover',function(){
        $("g#reggaegiallo6").hide();

    });
            $("#reggae666").on('mouseout',function(){
    $("g#reggaegiallo6").show();

    });


    $("#jazz666").on('mouseover',function(){
        $("g#jazzgiallo6").hide();

    });
    $("#jazz666").on('mouseout',function(){
    $("g#jazzgiallo6").show();

    });


    $("#blues666").on('mouseover',function(){
        $("g#bluesgiallo6").hide();

    });
    $("#blues666").on('mouseout',function(){
    $("g#bluesgiallo6").show();

    });



    $("#rb666").on('mouseover',function(){
    $("g#rbgiallo6").hide();

    });
    $("#rb666").on('mouseout',function(){
    $("g#rbgiallo6").show();

    });


    $("#rock666").on('mouseover',function(){
    $("g#rockgiallo6").hide();

    });
    $("#rock666").on('mouseout',function(){
    $("g#rockgiallo6").show();

    });

    $("#hiphop666").on('mouseover',function(){
        $("g#hiphopgiallo6").hide();

    });
    $("#hiphop666").on('mouseout',function(){
    $("g#hiphopgiallo6").show();

    });


    $("#country666").on('mouseover',function(){
    $("g#countrygiallo6").hide();

    });
              $("#country666").on('mouseout',function(){
    $("g#countrygiallo6").show();

    });



        $("#edm666").on('mouseover',function(){
        $("g#edmgiallo6").hide();

    });
           $("#edm666").on('mouseout',function(){
    $("g#edmgiallo6").show();

    });


        $("g#edm666").on('click',function(){

        window.open("https://www.youtube.com/playlist?list=PLr1WI-d8KJRzGIpsHtWetQlO-aH5i70Cy",'_blank');    

    });

        $("g#country666").on('click',function(){

        window.open("https://www.youtube.com/playlist?list=PLr1WI-d8KJRyDG0fJ-kL1OcBurogmi9l1",'_blank');    

    });

        $("g#hiphop666").on('click',function(){

        window.open("https://www.youtube.com/playlist?list=PLr1WI-d8KJRwWlidO7gVnM5JNjdgH_lg8",'_blank');    

    });


        $("g#rock666").on('click',function(){

        window.open("https://www.youtube.com/playlist?list=PLr1WI-d8KJRwhYofFmLgyg4dXMk8JLxyA",'_blank');    

    });


        $("g#rb666").on('click',function(){

        window.open("https://www.youtube.com/playlist?list=PLr1WI-d8KJRw_GzmnSMKrwx0vnCe1FRgt",'_blank');    

    });

        $("g#reggae666").on('click',function(){

        window.open("https://www.youtube.com/playlist?list=PLr1WI-d8KJRymdhgpAH87Cs9duAxCVLqW",'_blank');    

    });

        $("g#jazz666").on('click',function(){

        window.open("https://www.youtube.com/playlist?list=PLr1WI-d8KJRyW5thkWkv_NE_x-_9AFNd2",'_blank');    

    });

        $("g#blues666").on('click',function(){

        window.open("https://www.youtube.com/playlist?list=PLr1WI-d8KJRx-2TwCveCGCZPNT1t9AEGg",'_blank');    

    });




