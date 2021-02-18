var allElements = [...document.body.getElementsByTagName('*')];

function findAndReplace() {
    allElements.forEach(element =>{
        element.childNodes.forEach(child =>{
            if(child.nodeType === 3){
                noDorph(child);
            }
        });
    });

setInterval(function(){
        for(let i = 0; i< document.images.length; i++) {
            let imageLocation = document.images[i].src;
            let imageAlt = document.images[i].alt;

            let imageWidth = document.images[i].width;
            let imageHeight = document.images[i].height;

            let newImageSrc = 'https://placekitten.com/g/' + imageWidth + '/' + imageHeight;

            let closestPictureElement = document.images[i].closest('picture');

            if (imageLocation.toLowerCase().includes('dorph') || imageAlt.toLowerCase().includes('dorph')) {
                document.images[i].src = newImageSrc;
                document.images[i].srcset = newImageSrc;
            }
        }
    }, 2000);
}

function noDorph (node) {
    let value = node.nodeValue;
    value = value.replace(/Jes Dorph/gi, 'Anakin Skywalker');

    node.nodeValue = value;
}

window.onload = findAndReplace;
