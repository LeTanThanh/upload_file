$(document).ready(function(){
  $('#fileInput').on('change', function() {
    var files = $(this)[0].files;

    for(var i = 0; i < files.length; i++) {
      var file = files[i];
      var fileReader = new FileReader();
      fileReader.onload = (function(fileParams) {
        return function(event) {
          var str = '<div class="col-md-2">' +
            '<span class="js-file-name"></span><br>' +
            '<span class="js-file-size"></span> (Byte)<br>' +
            '<img class="img-thumbnail js-file-image" style="width: 100%; height: 100%">' +
            '</div>';
          $('.js-file-list').append(str);

          var imageSrc = event.target.result;
          var fileName = fileParams.name;
          var fileSize = fileParams.size;

          $('.js-file-name').last().text(fileName);
          $('.js-file-size').last().text(fileSize);
          $('.js-file-image').last().attr('src', imageSrc);
        };
      })(file);
      fileReader.readAsDataURL(file);
    }
  });
});
