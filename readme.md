# Simple screen resolution checker
This simple yet (maybe) useful JS will determine if the user is using a computer desktop, a mobile phone or a ancient cubic display by checking their resolution and comparing it with three simple math operations.
# How is this useful?
If user-agent checking is not a solution, this script can be used to serve and/or modify the webpage to be more accessible for mobile or computer users. It is especially good when you have a completely static website hosted on services such as Github Pages and you want to deliver quality for all devices.
# Which file is right for me?
If you want to study the 10 lines of code, you can look at [screenchecker.js](https://github.com/Wreeper/screenchecker/blob/main/screenchecker.js).

If your perfect ass feels like it needs to save 60 bytes [(image)](https://i.imgur.com/itExKfa.png), well.. then, there's a minified version, [screenchecker.min.js](https://github.com/Wreeper/screenchecker/blob/main/screenchecker.min.js), if you want it. I personally recommend using the minified version anyways, since it exists and it can maybe save some request size.
# Great. How do i start using it?
Download it and include it from your webfiles, or just use one of the CDN's below of your choice.
(usually, any CDN that can pull files from a GitHub repository will work, below are two examples. they are links to the minified version)

jsdelivr.net:
```
<script src="https://cdn.jsdelivr.net/gh/wreeper/screenchecker/screenchecker.min.js"></script>
```
statically.io:
```
<script src="https://cdn.statically.io/gh/Wreeper/screenchecker/main/screenchecker.min.js"></script>
```

*I am in no way responsible for the contents of the above mentioned CDN's.*
