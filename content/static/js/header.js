function header() {
    if($('#header-mob-2').css('display') == 'none') {
        $("#header-mob-2").attr("style", "display: flex !important");
        $('#menu-header-mob-1').empty();
        $('#menu-header-mob-1').append(`<svg width="24" height="24" viewBox="-5 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.7072 0.292893C1.31668 -0.097631 0.683511 -0.0976311 0.292987 0.292893C-0.0975378 0.683417 -0.0975381 1.31658 0.292986 1.70711L5.58583 6.99996L0.292893 12.2929C-0.0976311 12.6834 -0.0976311 13.3166 0.292893 13.7071C0.683418 14.0976 1.31658 14.0976 1.70711 13.7071L7.00005 8.41417L12.293 13.7071C12.6835 14.0976 13.3167 14.0976 13.7072 13.7071C14.0977 13.3166 14.0977 12.6834 13.7072 12.2929L8.41426 6.99996L13.7071 1.70711C14.0976 1.31658 14.0976 0.683419 13.7071 0.292895C13.3166 -0.0976298 12.6834 -0.0976294 12.2929 0.292895L7.00005 5.58574L1.7072 0.292893Z" fill="#E2E2E2"/>
</svg>
`);
    } else {
        $("#header-mob-2").attr("style", "display: none !important");
        $('#menu-header-mob-1').empty();
        $('#menu-header-mob-1').append(`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4 16C4 15.4477 4.44772 15 5 15H19C19.5523 15 20 15.4477 20 16C20 16.5523 19.5523 17 19 17H5C4.44772 17 4 16.5523 4 16Z" fill="#E2E2E2"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4 8C4 7.44772 4.44772 7 5 7H19C19.5523 7 20 7.44772 20 8C20 8.55228 19.5523 9 19 9H5C4.44772 9 4 8.55228 4 8Z" fill="#E2E2E2"/>
                </svg>`);
    }

}
console.log(document.URL)
if (window.location.href == 'http://194.67.125.24/objects/' || window.location.href == 'http://http://127.0.0.1:8000/objects/') {
    $('#contacts').css("color", "#D19B33");

}
if (window.location.href == 'http://194.67.125.24/contacts/' || window.location.href == 'http://http://127.0.0.1:8000/contacts/') {
    $('#base_nedv').css("color", "#D19B33");
}