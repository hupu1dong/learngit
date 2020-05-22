const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* 遍历图片并添加至缩略图区 */
var pic = ['images/pic1.jpg','images/pic2.jpg','images/pic3.jpg','images/pic4.jpg','images/pic5.jpg'];
for(var i=0;i<pic.length;i++) {
const newImage = document.createElement('img');
newImage.setAttribute('src', pic[i]);
thumbBar.appendChild(newImage);
newImage.onclick = function(e) {
	const imgSrc = e.target.getAttribute('src');
	displayedImage.setAttribute('src',imgSrc);
}
}

/* 编写 变亮/变暗 按钮 */
btn.onclick = function() {
	if(btn.getAttribute('class') === 'dark') {
		btn.setAttribute('class', 'light');
		btn.textContent = '变亮';
		overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
	} else {
		btn.setAttribute('class', 'dark');
		btn.textContent = '变暗';
		overlay.style.backgroundColor = 'rgba(0,0,0,0)';
	}
}


