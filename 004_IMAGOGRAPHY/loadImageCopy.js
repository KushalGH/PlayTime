  function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object

    // Loop through the FileList and render image files as thumbnails.
    for (var i = 0, f; f = files[i]; i++) {

      // Only process image files.
      if (!f.type.match('image.*')) {
        continue;
      }

      var reader = new FileReader();

      // Closure to capture the file information.
      reader.onload = (function(theFile) {
        return function(e) {
          // Render thumbnail.
          var div = document.createElement('div');
		  var i = 0;
          div.innerHTML = [
							'<div id="'+ escape(theFile.name) +'" class="fbbox">' +
								'<div class="fix"> <label for="' + e.target.result +'" class="left">' +  escape(theFile.name)  +  '</label> </div>' +
								'<div id="' + escape(theFile.name) +'" title="'+ escape(theFile.name)+ '" class="box thumb" style="background:url(' + e.target.result + ') no-repeat 50% 50%;  background-size: 195px 151px;">' +
									//'<a href="#">' +
										'<div class="overlay">' +
											'<span class="search">' +
												'<a href="#" onClick="fbShareClick();">' +
													'<img src="../ImagographyDemo/Fb.png" height="50px" width="50px">' +
												'</a>' +	
											'</span>' +
											'<span class="search">' +
												'<a href="#" onClick="deleteButtonClick();">' +											
													'<img src="../ImagographyDemo/delete.png" height="50px" width="50px">' +
												'</a>' +														
											'</span>' +
											'<span class="search">' +
												'<a href="#" onClick="likeButtonClick();">' +													
													'<img src="../ImagographyDemo/FbLike.jpg" height="50px" width="50px">' + 
												'</a>' +		
											'</span>' +
										'</div>' +
									//'</a>' +
								'</div>' +
							'</div>'
						  ].join('');
          document.getElementById('list').insertBefore(div, null);
		  i ++;
        };
      })(f);

      // Read in the image file as a data URL.
      reader.readAsDataURL(f);
    }
  }

  document.getElementById('files').addEventListener('change', handleFileSelect, false);

function fbShareClick() {   
    alert("fbShareClick");
} 

function deleteButtonClick(filename) {  
debugger;

    alert("deleteButtonClick");
} 

function likeButtonClick() {   
    alert("likeButtonClick");
}

function markActiveLink() {   
    alert("markActiveLink");
}

$("#search-criteria").on("keypress", function() {
    var g = $(this).val().toLowerCase();
    $(".fbbox .fix label").each(function() {
        var s = $(this).text().toLowerCase();
        $(this).closest('.fbbox')[ s.indexOf(g) !== -1 ? 'show' : 'hide' ]();
    });
});
