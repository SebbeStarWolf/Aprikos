/*function toggleImages() {
    var img1 = document.getElementById('img1');
    var img2 = document.getElementById('img2');

    if (img1.style.display !== 'none') {
        img1.style.display = 'none';
        img2.style.display = 'block';
    } else {
        img1.style.display = 'block';
        img2.style.display = 'none';
    }
}
*/
function toggleImages() {
    var img1 = document.getElementById('img1');
    var img2 = document.getElementById('img2');

    if (img1.style.opacity !== '0') {
        img1.style.opacity = '0';
        img2.style.opacity = '1';
    } else {
        img1.style.opacity = '1';
        img2.style.opacity = '0';
    }
}
  