$(document).ready(function () {

    $('input').ToggleInputValue();

    $(".input-holder + input").keyup(function () {
        if ($(this).val().length) {
            $(this).prev('.input-holder').hide();
        } else {
            $(this).prev('.input-holder').show();
        }
    });
    $(".input-holder").click(function () {
        $(this).next().focus();
    });

});
$.fn.ToggleInputValue = function () {
    return $(this).each(function () {
        var Input = $(this);
        var default_value = Input.val();

        Input.focus(function () {
            if (Input.val() == default_value)
                Input.val("");
        }).blur(function () {
            if (Input.val().length == 0)
                Input.val(default_value);
        });
    });
}
