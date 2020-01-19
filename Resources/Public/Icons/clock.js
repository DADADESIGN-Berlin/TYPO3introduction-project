var date = new Date();
var output = "Stand: " +
            date.getUTCDate() + "." +
            (date.getUTCMonth() + 1) + "." +
            date.getUTCFullYear();
var page = document.body.innerHTML;
document.body.innerHTML = page.replace(/Stand: heute/g, output);
