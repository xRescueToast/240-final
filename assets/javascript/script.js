//interactive map sources to edit the src attribute of the original map
const generalMap = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7841524.396421668!2d134.6126645604314!3d44.03356533275964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34674e0fd77f192f%3A0xf54275d47c665244!2sJapan!5e0!3m2!1sen!2sus!4v1697236448179!5m2!1sen!2sus";
const takeshitaStreetMap = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.2485708926974!2d139.70277472625804!3d35.670880980541725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cbb2461011b%3A0x75e49439227a27d3!2sTakeshita%20Street%20Square!5e0!3m2!1sen!2sus!4v1697235117379!5m2!1sen!2sus";
const hachikoStatueMap = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.7284190223077!2d139.69805437625743!3d35.65906223119072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b57efbd57c7%3A0x217e9d9fe306fba!2sHachik%C5%8D%20Memorial%20Statue!5e0!3m2!1sen!2sus!4v1697236888557!5m2!1sen!2sus";
const bambooForrestMap = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1955.0463329417303!2d135.67036996015105!3d35.01598796629393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6001abebbf5c8bad%3A0xfb9ffc7bbdd67cdd!2sArashiyama%20Bamboo%20Grove!5e1!3m2!1sen!2sus!4v1697239029105!5m2!1sen!2sus";
const goldenTempleMap = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3266.694399987533!2d135.7266681762369!3d35.039374364964985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6001a820c0eb46bd%3A0xee4272b1c22645f!2sKinkaku-ji!5e0!3m2!1sen!2sus!4v1697238049536!5m2!1sen!2sus";
const fushimiShrineMap = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.3992713900834!2d135.7779688730167!3d34.96771705829501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60010f153d2e6d21%3A0x7b1aca1c753ae2e9!2sFushimi%20Inari%20Taisha!5e1!3m2!1sen!2sus!4v1697238906697!5m2!1sen!2sus";
const nijouCastleMap = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.2201651762275!2d135.74865277575825!3d35.013321272810245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600107d40a2b9b0b%3A0x106b8759906a2f2f!2sNij%C5%8D%20Castle!5e1!3m2!1sen!2sus!4v1697238714942!5m2!1sen!2sus";
const odawaraCastleMap = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1949.3946124484858!2d139.15032049855384!3d35.2517042490091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6019a4f9eeaa0651%3A0x7abfbd1ba781f8c2!2sOdawara%20Castle!5e1!3m2!1sen!2sus!4v1697239306470!5m2!1sen!2sus";
//const fishcakeMap = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1949.5348058757986!2d139.12822195669483!3d35.245873816433054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6019a47d9107ee93%3A0xe97bfabfcc0876a9!2sSuzuhiro%20Kamaboko%20Museum!5e1!3m2!1sen!2sus!4v1697239503424!5m2!1sen!2sus";
const lakeKawaguchiMap = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31089.41255643675!2d138.70605867112602!3d35.51311316763355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60195fb4a5043f4f%3A0x29cbb24b1e337d47!2sLake%20Kawaguchi!5e1!3m2!1sen!2sus!4v1697239809251!5m2!1sen!2sus";
const diverCityPlazaMap = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2116.0066122465523!2d139.77381229885026!3d35.62459358492888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601889f9d36ebaa5%3A0x67f4219bfa09db77!2sDiverCity%20Tokyo%20Plaza!5e1!3m2!1sen!2sus!4v1697239998421!5m2!1sen!2sus";

//href links to update then navigate the site from the homepage with
const takeshitaNav = '<a href="locations/takeshitastreet.php">Learn More</a>';
const hachikoNav = '<a href="locations/hachikoStatue.php">Learn More</a>';
const bambooNav = '<a href="locations/bambooForest.php">Learn More</a>';
const goldenNav = '<a href="locations/goldenTemple.php">Learn More</a>';
const fushimiNav = '<a href="locations/fushimiTemple.php">Learn More</a>';
const nijouNav = '<a href="locations/nijouCastle.php">Learn More</a>';
const oodawaraNav = '<a href="locations/odawaraCastle.php">Learn More</a>';
//const fishcakeNav = '<a href="locations/fishcake.html">Learn More</a>';
const lakeKawaguchiNav = '<a href="locations/lakeKawaguchi.php">Learn More</a>';
const diverCityPlazaNav = '<a href="locations/diverCityPlaza.php">Learn More</a>';

//arrays of all the constant values so they can be accessed easily by elements by passing through a number
var mapArray = [takeshitaStreetMap, hachikoStatueMap, bambooForrestMap, goldenTempleMap, fushimiShrineMap, nijouCastleMap, odawaraCastleMap, lakeKawaguchiMap, diverCityPlazaMap];
var navArray = [takeshitaNav, hachikoNav, bambooNav, goldenNav, fushimiNav, nijouNav, oodawaraNav, lakeKawaguchiNav, diverCityPlazaNav];

//variables to hold the object passed through so that it can be restored when something else is selected
var objectRevert = null;
var objectInnerhtml;

//init function to make sure the map of japan as a whole shows first before anything else
function init(){
    document.getElementById("map").src = generalMap;
}

//updates the nav while restoring elements after editing
function updateNav(item, num){
    //console.log('aaaaaaa')
    //checks if this is the first element clicked, if it is it stores the information, if not it restores any stored information before updating the clicked nav element
    if(objectRevert != null){
        objectRevert.innerHTML = objectInnerhtml;
        objectRevert = item;
        objectInnerhtml = item.innerHTML;
    }
    else{
        objectRevert = item;
        objectInnerhtml = item.innerHTML;
    }
    document.getElementById("map").src = mapArray[num];
    item.innerHTML = navArray[num];
}