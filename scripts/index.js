window.onload=function(){
	var banner=document.getElementsByClassName('img-b'),
		icon=document.getElementsByClassName('icon-y');
	// var main=document.getElementById('banner-b'),
		left=document.getElementById('lang-l'),
		right=document.getElementById('lang-r');
		icon[0].style.background='white';
		banner[0].style.display='block';
		var yuan=icon[0];
		var show=banner[0],count=0,timeId,timespec=2000;

		for(var i=0;i<icon.length;i++){
			icon[i].index=i;
			icon[i].onclick=function(){
				// console.log(1);
				// clearInterval(timeId);
				show.style.display='none';
				banner[this.index].style.display='block';
				show=banner[this.index];
				yuan.style.background='black';
				this.style.background='white';
				yuan=this;
				clearInterval(timeId);
			}
			icon[i].onmouseover=function(){
				clearInterval(timeId);
				show.style.display='none';
				banner[this.index].style.display='block';
				show=banner[this.index];
				yuan.style.background='black';
				this.style.background='white';
				yuan=this;
			}
			icon[i].onmouseout=function(){
				clearInterval(timeId);
				timeId=setInterval(fn,timespec);
			}
		}
		var fn=function(){
			show.style.display='none';
			banner[count].style.display='block';
			show=banner[count];
			yuan.style.background='black';
			icon[count].style.background='white';
			yuan=icon[count];
			count++;
			if(count==5){
				count=0;
			}
		}
		timeId=setInterval(fn,timespec);
		left.onclick=function(){
			clearInterval(timeId);
			count--;
			if(count<0){
				count=icon.length-1;
			}
			show.style.display='none';
			banner[count].style.display='block';
			show=banner[count];
			yuan.style.background='#333';
			icon[count].style.background='white';
			yuan=icon[count];
		};
		right.onclick=function(){
			clearInterval(timeId);
			fn();
		};
		left.onmousedown=function(e){e.preventDefault();}
		right.onmousedown=function(e){e.preventDefault();}

		// var fn=function(){
		// 	main.style.marginLeft=-1226*count+'px';
		// 	yuan.style.background='#333';
		// 	icon[count].style.background='white';
		// 	yuan=icon[count];
		// 	count++;
		// 	if(count==5){
		// 		count=0;
		// 	}
		// }
		// timeId=setInterval(fn,1000);

		// for(var i=0;i<icon.length;i++){
		// 	icon[i].index=i;
		// 	icon[i].onclick=function(){
		// 		clearInterval(timeId);
		// 		main.style.marginLeft=-1226*this.index+'px';
		// 		yuan.style.background='#333';
		// 		this.style.background='white';
		// 		yuan=this;
		// 		clearInterval(timeId);
		// 	}
		// }
		// for(var i=0;i<banner.length;i++){
		// 	banner[i].index=i;
		// 	banner[i].onclick=function(){
		// 		clearInterval(timeId);
		// 	}
		// }
		// var provent=null;
		// left.onclick=function(){
		// 	count--;
		// 	clearInterval(timeId);
		// 	if(count<0){
		// 		count=icon.length-1;
		// 	}
		// 	main.style.marginLeft=-1226*count+'px';
		// 	yuan.style.background='#333';
		// 	icon[count].style.background='white';
		// 	yuan=icon[count];
		// };
		// right.onclick=function(){
		// 	clearInterval(timeId);
		// 	fn();
		// };


		// icon[i].onmouseover=function(){
			// 	clearInterval(timeId);
			// 	main.style.marginLeft=-1226*this.index+'px';
			// 	yuan.style.background='#333';
			// 	this.style.background='white';
			// 	yuan=this;
			// 	if(this.index==icon.length){
			// 		count=0;
			// 	}else{
			// 		count=this.index;
			// 	}
			// }
			// icon[i].onmouseout=function(){
			// 	clearInterval(timeId);
			// 	timeId=setInterval(fn,1000);
			// }
};