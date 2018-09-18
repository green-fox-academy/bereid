var btn = document.getElementById('btn');

btn.addEventListener('click', ()=>{
    var myRequest = new XMLHttpRequest;
    myRequest.open('GET', 'http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5');
    myRequest.onload = () => {
        var myData = JSON.parse(myRequest.responseText);
        console.log(myData)
    }
    myRequest.send();
})