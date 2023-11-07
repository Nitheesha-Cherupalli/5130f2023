function isValidURL(url) {
    var pattern = /^www\.[a-zA-Z0-9-]+(\.com|\.org|\.edu|\.io)$/;
    return pattern.test(url);
}

var urls = ["www.example.com", "www.test.org", "www.valid.edu", "www.website.io", "www.invalid.net"];

urls.forEach(function(url) {
    if (isValidURL(url)) {
        console.log(url + " is a valid URL.");
    } else {
        console.log(url + " is not a valid URL.");
    }
});
