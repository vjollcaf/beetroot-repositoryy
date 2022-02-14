
let slider_img = document.querySelector('.slider-img');
let images = ['img1.png', 'img2.png', 'img4.png'];
let i = 0;

function prev(){
	if(i <= 0) i = images.length;	
	i--;
	return setImg();			 
}

function next(){
	if(i >= images.length-1) i = -1;
	i++;
	return setImg();			 
}

function setImg(){
	return slider_img.setAttribute('src', "assets/img/"+images[i]);
	
}