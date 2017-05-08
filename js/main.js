// Asynchronous Flickr Search
//
// Flickr reveals a searchable JSON Feed you can access via jQuery's $.getJSON()
// method. Use this to allow users to search for a tag or comma-separated list
// of tags and view the images that are found.
//
// Allow users to click the images to see a larger version with more information.
$(document).on('ready', function(){
    // Place your code here, inside the document ready handler.


  var searchImages = function(tags) {
      var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?&format=json";
      console.log(tags);
      $.getJSON( flickerAPI, {
        tags    : tags,
        tagmode : "any",
        format  : "json"
      }) // getjson
      .done(function(data){
        $('#images').empty();
        $('.search-title').text( "Showing results for " + tags);
        console.log(data.items);
        for (i=0; i<10; i++){ // specifically showing 10 images
          var item = data.items[i];

          var flickrPhoto = document.createElement ('li');

          // var image = document.createElement ('img');
          // $(image).attr("src", item.media.m);
          // flickrPhoto.appendChild(image);
          var title = document.createElement ('p');
          title.innerHTML = item.title;
          flickrPhoto.appendChild(title);

          var description = document.createElement ('p');
          description.innerHTML = item.description;
          flickrPhoto.appendChild(description);


          var dateTaken = document.createElement ('p');
          dateTaken.innerHTML = item.date_taken;
          flickrPhoto.appendChild(dateTaken);


          var author = document.createElement ('p');
          author.innerHTML = item.author;
          flickrPhoto.appendChild(author);

          var link = document.createElement ('a');
          link.href = item.link;
          link.innerHTML = item.link;
          flickrPhoto.appendChild(link);

          document.getElementById('images').appendChild(flickrPhoto);
        } // for
      }); // done


  }; // searchImages

  $('button.search').on('click', function(event) {
    event.preventDefault();
    var tags = $("input[name='searchText']").val();
    searchImages(tags);

  }); // button

        // 3.   Construct a `$.getJSON()` call where you send a request object
        //      including the tags the user submitted, and a `done()` handler
        //      that displays and refreshes the content appropriately.
        //
        // 4.   Update the display to add the images to the list with the id
        //      `#images`.


        // When the Search button is clicked, the following should happen:
        //
        // 1.   Prevent the default event execution so the browser doesn't
        //      Example: `event.preventDefault();`
        //
        // 2.   Get the value of the 'input[name="searchText"]' and use that
        //      as the `tags` value you send to `searchImages()`.
        //
        // 3.   Execute the `searchImages()` function to fetch images for the
        //      user.

    // STRETCH GOAL: Add a "more info" popup using the technique shown on the
    // Bootstrap Modal documentation: http://getbootstrap.com/javascript/#modals-related-target



});
