<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Japan</title>
    <link rel="stylesheet" href="assets/styles/stylesheet.css" >
    <script src="assets/javascript/script.js"></script>
</head>
<body id="index" onload="init()">
    <h1 id="maintitle">Japan</h1>
    <!-- using google map's share feature it is possible to embed an interactive map-->
    <div id="map-interaction">
        <figure>
            <iframe id="map" src="1" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <figcaption>Interactive map of Japan.</figcaption>
        </figure>

        <!-- original dhtml -->
        <ul>
            <li onclick="updateNav(this, 0)" class="homenav">Takeshita Street</li>
            <li onclick="updateNav(this, 1)" class="homenav">Hachiko Statue</li>
            <li onclick="updateNav(this, 2)" class="homenav">Bamboo Forest</li>
            <li onclick="updateNav(this, 3)" class="homenav">Golden Temple</li>
            <li onclick="updateNav(this, 4)" class="homenav">Fushimi Inari Taisha</li>
            <li onclick="updateNav(this, 5)" class="homenav">Nijou Castle</li>
            <li onclick="updateNav(this, 6)" class="homenav">Odawara Castle</li>
            <!--<li onclick="updateNav(this, 7)">Fishcake Museum</li>-->
            <li onclick="updateNav(this, 7)" class="homenav">Lake Kawaguchi</li>
            <li onclick="updateNav(this, 8)" class="homenav">DriverCity Tokyo Plaza</li>
            <p>!! CLICK LOCATIONS ABOVE TO LEARN MORE ABOUT THEM !!</p>
        </ul>
    </div>

    <div>
        <p>Located in east asia, Japan offers a vast and rich experience through a blend of culture and modern technology. Each location on the interactive map above aims to highlight the power of each of those aspects of Japan and its people.</p>
    </div>
    <footer><a href="grading.html">Grading Page Document</a></footer>
</body>
</html>