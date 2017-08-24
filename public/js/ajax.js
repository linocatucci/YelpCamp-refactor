$('#new_comment').submit(function(event) {
    event.preventDefault();
    var formData = $(this).serialize();
    $.post('/campgrounds/:id/comments', formData, function(data) {
        console.log(data);
    });
});