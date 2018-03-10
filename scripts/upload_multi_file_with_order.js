$(document).ready(function(){
  $('#fileInput').on('change', function() {

    var files = $(this)[0].files;
    uploadFile(files, 0);
  });

  function uploadFile(files, index) {
    var length = files.length
    if (index == length) {
      return;
    }

    var file = files[index];
    var fileReader = new FileReader();
    fileReader.onload = function() {
      var str = '<div class="col-md-2">' +
        '<span class="js-file-name"></span><br>' +
        '<span class="js-file-size"></span> (Byte)<br>' +
        '<img class="img-thumbnail js-file-image" style="width: 100%; height: 100%">' +
        '</div>';
      $('.js-file-list').append(str);

      var imageSrc = event.target.result;
      var fileName = file.name;
      var fileSize = file.size;

      $('.js-file-name').last().text(fileName);
      $('.js-file-size').last().text(fileSize);
      $('.js-file-image').last().attr('src', imageSrc);

      uploadFile(files, index + 1);
    };
    fileReader.readAsDataURL(file);
  }
});
