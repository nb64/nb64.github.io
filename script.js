$('.card').on('click', function (e)
{
    let card = $(e.currentTarget)
    let card_offset_scrolltop = $(card).offset().top - $(window).scrollTop()
    let card_offset_scrollleft = $(card).offset().left +  $(card).width()/2 - $(window).width()/2
    $(card).css('--data-offset-top', card_offset_scrolltop * -1 + 'px')
    $(card).css('--data-offset-left', card_offset_scrollleft * -1 + 'px')
    $(card).toggleClass('active')

    let ratio = 1.3
    let height = $(window).height()
    height -= $(card).find('img').outerHeight() * ratio
    height -= $(card).find('h4').outerHeight() * ratio
    height /= ratio
    
    $(card).find('.content').css('height', height)

    if ($(card).hasClass('active')) {
        $('body').addClass('noscroll')
        $('.mask').toggleClass('active')
    } else {
        $('body').removeClass('noscroll')
        $('.mask').toggleClass('active')
    }
})