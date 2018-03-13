let html = '<p class="paragraph">Turnip greens yarrow ricebean rutabaga endive cauliflower sea  lettuce kohlrabi amaranth water <a href="https://www.google.pl/search?q=spinach" class="link">spinach</a> avocado daikon Süßkartoffel napa cabbage <strong>asparagus winter purslane kale. Celery potato scallion desert</strong> raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize <span style="font-size: 19px;color: blue;">bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea.</span> Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.</p>'

function truncate(html, n) {
    let tag = /<(.|\n)*?>/g;
    let splitRegex = /<.*?>/;
    let tagsArray = [];
    let result = "";
    let textParts;

    tagsArray.push(html.match(tag));
    console.log("Tags array:", tagsArray);

    textParts = html.split(splitRegex);
    console.log("Result after splitting:", textParts);

    for (let i = 0; i < textParts.length; i++) {
        if (result.length + textParts[i].length < n - 3) {
            result += textParts[i];
        } else {
            let slicedPart = textParts[i].slice(0, n - 3 - result.length);
            result += slicedPart;
            result = result.slice(0, result.lastIndexOf(" "));
            break
        }
    }
    return result + "...";
}

console.log("Result:", truncate(html, 18));
