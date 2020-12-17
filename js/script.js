$(function () {

    //     $("#card1").hide().fadeIn(1000);
    //     $("#card2").hide().fadeIn(2000);
    //     $("#card3").hide().fadeIn(3000);
    //     $("#card4").hide().fadeIn(4000);

    //     $("#button1").click(function(){
    //      $("#bottom-content").hide();
    //      $("#bottom-content-about").show();
    //     });

    //     $("#button2").click(function(){
    //         $("#bottom-content").hide();
    //         $("#bottom-content-portfolio").show();
    //     })

    //     $("#button3").click(function(){
    //         $("#bottom-content").hide();
    //         $("#bottom-content-skills").show();
    //     })

    //     $("#button4").click(function(){
    //         $("#bottom-content").hide();
    //         $("#bottom-content-contact").show();
    //     })


    //     $(".backbutton").click(function(){
    //      $("#bottom-content").fadeIn();
    //      // $("#bottom-content").show().hide().fadeIn();
    //  });
    let backbutton = $('.backbutton');
    let bottomContent = $('#bottom-content');
    let card1 = $('#card1');
    let card2 = $('#card2');
    let card3 = $('#card3');
    let card4 = $('#card4');
    let about = $('#bottom-content-about');
    about.hide();
    let portfolio = $('#bottom-content-portfolio');
    portfolio.hide();
    let skills = $('#bottom-content-skills');
    skills.hide();
    let contact = $('#bottom-content-contact');
    contact.hide();

    card1.click(() => {
        bottomContent.hide();
        about.show();
        portfolio.hide();
        skills.hide();
        contact.hide();
    });
    card2.click(() => {
        bottomContent.hide();
        portfolio.show();
        about.hide();
        //portfolio.hide();
        skills.hide();
        contact.hide();
    });
    card3.click(() => {
        bottomContent.hide();
        skills.show();
        about.hide();
        portfolio.hide();
        //skills.hide();
        contact.hide();
    });
    card4.click(() => {
        bottomContent.hide();
        contact.show();
        about.hide();
        portfolio.hide();
        skills.hide();
        // contact.hide();
    });
    backbutton.click(() => {
        bottomContent.show();
    });

    let $body = $('body');
    let $top_Content_Right = $('#top-content-right');
    let $top_Content_Left = $('#top-content-left');
    let $cards = $('.cards');
    //console.log(top_Content_Left);

    //easing variables
    const ei = "power4.in";
    const eo = "power4.out";
    const bo = "bounce.out";
    const bi = "bounce.in";

    //animate body 
    function animateBody() {
        let anim_body = gsap.timeline({
            id: "animate body"
        })
        anim_body.from($body, {
            backgroundColor: "#000",
            duration: 2,
            ease: ei
        })
    }

    //animate top content left
    function topContentLeft() {
        let top_Content_L = gsap.timeline({
            id: "top content left"
        });
        top_Content_L.from($top_Content_Left, {
            x: -200,
            autoAlpha: 0,
            duration: 1.5,
            ease: bo
            // delay: 3
        }, 2)
    }

    //animate top content right
    function topContentRight() {
        let top_content_R = gsap.timeline({
            id: "top content right"
        });
        top_content_R.from($top_Content_Right, {
            y: -200,
            autoAlpha: 0,
            duration: 1.5,
            ease: bo,
            delay: 3
        })
    }
    //animate cards
    function cardsAnim() {
        let cards_anim = gsap.timeline({
            id: "cards animation"
        });
        cards_anim.fromTo($cards, {
            autoAlpha: 0
        }, {
            autoAlpha: 1,
            duration: 2,
            stagger: 0.2,
            ease: ei
        }, 4);
    }

    let master = gsap.timeline();
    master
        .add(animateBody())
        .add(topContentLeft())
        .add(topContentRight())
        .add(cardsAnim())
    //GSDevTools.create();

    $('#card1').mouseenter(() => {
        $('#card1').animate({
            opacity: '0.7',
        })
    })

    $('#card1').mouseleave(() => {
        $('#card1').animate({
            opacity: 1,
        })
    })
    $('#card2').mouseenter(() => {
        $('#card2').animate({
            opacity: 0.7
        })
    })

    $('#card2').mouseleave(() => {
        $('#card2').animate({
            opacity: 1
        })
    })
    $('#card3').mouseenter(() => {
        $('#card3').animate({
            opacity: 0.7
        })
    })

    $('#card3').mouseleave(() => {
        $('#card3').animate({
            opacity: 1
        })
    })
    $('#card4').mouseenter(() => {
        $('#card4').animate({
            opacity: 0.7
        })
    })

    $('#card4').mouseleave(() => {
        $('#card4').animate({
            opacity: 1
        })
    })

});