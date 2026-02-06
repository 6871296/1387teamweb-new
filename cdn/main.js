const site='https://1387teamweb.github.io/nextweb'
const cdnSite='https://1387-cdn.pythonanywhere.com'

let username=''
if(!window.localStorage.getItem('loginId')||window.localStorage.getItem('loginId')===null||window.localStorage.getItem('loginId')==='null')
	username='游客'
else{
	let xhr=new XMLHttpRequest()
	xhr.open('POST',cdnSite+'/internalApi/loginId2UserId')
	xhr.send({
		'loginId':window.localStorage.getItem('loginId')
	})
	if(xhr.status===200){
		let currentUser=new user(JSON.parse(xhr.responseText)['userId'])
	}else{
		alert('登录过期，请重新登录！')
		window.location.href=currentSite+'/login'
	}
}

document.getElementById('year').textContent=new Date().getFullYear()

document.getElementById('user-notifications').src = "https://1387-cdn.pythonanywhere.com/internalApi/GetNotifiIco?userId="+currentUser.userId;

document.getElementById('username').textContent=currentUser.name
if(currentUser.home!==''){
	document.getElementById('user-goto-home').href=currentUser.home
	document.getElementById('user-goto-home-icon').src=cdnSite+'/user-social-links/user-has-home.ico'
}
if(currentUser.luogu!==''){
	document.getElementById('user-goto-luogu').href='https://www.luogu.com.cn/user/'+currentUser.luogu
	document.getElementById('user-goto-luogu-icon').src=cdnSite+'/user-social-links/user-has-luogu.ico'
}
if(currentUser._40code!==''){
	document.getElementById('user-goto-40code').href='https://www.40code.com/#page=user&id='+currentUser._40code
	document.getElementById('user-goto-40code-icon').src=cdnSite+'/user-social-links/user-has-40code.ico'
}
if(currentUser.github!==''){
	document.getElementById('user-goto-github').href='https://github.com/'+currentUser.github
	document.getElementById('user-goto-gihub-icon').src=cdnSite+'/user-social-links/user-has-github.ico'
}

const userIcoList=document.querySelector('.user-ico')
for(let i=0;i<userIcoList.length;i++)
	userIcoList[i].src=currentUser.favicon

const URLParams=new URLSearchParams(window.location.search)
