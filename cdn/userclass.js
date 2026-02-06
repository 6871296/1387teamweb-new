class User{
	constructor(userId){
		this.userId=userId
		this.downloadAssets()
	}
	uploadAssets(){
		let xhr = new XMLHttpRequest()
		xhr.open('POST', cdnSite + '/internalApi/setUserInfo')
		xhr.send({
			'userId': userId,
			'name':this.name,
			'favicon':this.favicon,
			'home':this.home,
			'luogu':this.luogu,
			'40code':this._40code,
			'github':this.github
		})
		if (xhr.status === 200) {
		} else console.error(`Failed to set user info of ${userId}!`)
	}
	downloadAssets(){
		let xhr = new XMLHttpRequest()
		xhr.open('POST', cdnSite + '/internalApi/getUserInfo')
		xhr.send({
			'userId': userId
		})
		if (xhr.status === 200) {
			this.name = JSON.parse(xhr.responseText)['name']
			this.favicon = JSON.parse(xhr.responseText)['favicon']
			this.home=JSON.parse(xhr.responseText)['home']
			this.luogu=JSON.parse(xhr.responseText)['luogu']
			this._40code=JSON.parse(xhr.responseText)['40code']
			this.github=JSON.parse(xhr.responseText)['github']
		} else console.error(`Failed to get user info of ${userId}!`)
	}
}