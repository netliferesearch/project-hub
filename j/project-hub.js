/*
*************************************************

PROJECT HUB
JavaScript Functions
Requires jQuery

Created by the epic SuperFriendly team.
http://superfriend.ly/

*************************************************
*/

var Site = function(){

    this.init = function(){

        var _classNameToScrollTo    =   '.js-box--latest',
            _pointToScrollTo        =   $(_classNameToScrollTo).offset().top - 48,
            _viewport               =   $('html, body');

        _viewport.scrollTop(_pointToScrollTo);



        // http://stackoverflow.com/questions/8858994/let-user-scrolling-stop-jquery-animation-of-scrolltop
        _viewport.bind("scroll mousedown DOMMouseScroll mousewheel keyup", function(e){
            if ( e.which > 0 || e.type === "mousedown" || e.type === "mousewheel"){
                _viewport.stop().unbind('scroll mousedown DOMMouseScroll mousewheel keyup'); // This identifies the scroll as a user action, stops the animation, then unbinds the event straight after (optional)
            }
        });

    }

}



/*-------------------------------------------
    Initial Actions
-------------------------------------------*/

$(document).ready(function() {
    $('#redactor').redactor({
        buttons: ['html','bold', 'italic','unorderedlist', 'orderedlist','link']
    });
    new Pikaday(
    {
        field: document.getElementById('datepicker'),
        position: 'bottom right'
    });
    var projectHub = new Site();
    projectHub.init();

});
