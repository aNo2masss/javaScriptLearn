var ul1 = document.getElementById('list');
var ul2 = document.getElementsByClassName('child-list');
var ah3 = document.getElementsByTagName('h3');

console.log(ul2,ah3.style,ul1);

for (i = 0; i <= ah3.length; i++) {
    ah3[i].index = i
    console.log(ul2[i].style)
    ah3[i].onclick = function () {
        console.log(1)
        for (j = 0; j < ah3.length; j++) {
            if (ul2[j].style.display = "none") 
            {
                ul2[j].style.display = 'block';
            }
            else {
                ul2[i].style.display = "none"
            }
        }
    }
}