var searchYouTube = (options, callback) => {
  // TODO
  $.ajax ({
    url: 'https://www.googleapis.com/youtube/v3/search/videoEmbeddable',
    type: 'GET',
    data: {
      key: options.key,
      q: options.query,
      maxResults: options.max
    },
    Headers: { "HeaderName": YOUTUBE_API_KEY}

  });
};

window.searchYouTube = searchYouTube;
