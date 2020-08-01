/*
  1:歌曲搜索接口
    请求地址:https://autumnfish.cn/search
    请求方法:get
    请求参数:keywords(查询关键字)
    响应内容:歌曲搜索结果

  2:歌曲url获取接口
    请求地址:https://autumnfish.cn/song/url
    请求方法:get
    请求参数:id(歌曲id)
    响应内容:歌曲url地址
  3.歌曲详情获取
    请求地址:https://autumnfish.cn/song/detail
    请求方法:get
    请求参数:ids(歌曲id)
    响应内容:歌曲详情(包括封面信息)
  4.热门评论获取
    请求地址:https://autumnfish.cn/comment/hot?type=0
    请求方法:get
    请求参数:id(歌曲id,地址中的type固定为0)
    响应内容:歌曲的热门评论
  5.mv地址获取
    请求地址:https://autumnfish.cn/mv/url
    请求方法:get
    请求参数:id(mvid,为0表示没有mv)
    响应内容:mv的地址
*/

var app = new Vue({
	el: "#player",
	data: {
		keywords:"",
		musicList:[],
		isPlay:false,
		musicSrc:"",
		imgUrl:"",
		remarkList:[],
		isPlayMv:false,
		mvUrl:""
	},
	methods: {
		getMusic:function(){
			var that = this;
			axios.get("https://autumnfish.cn/search?keywords="+that.keywords)
			.then(function(response){
				console.log(response.data.result.songs);
				that.musicList = response.data.result.songs;
			},function(err){
				console.log(err);
			})
		},
		play:function(id){
			this.isPlay = true;
			var that = this;
			axios.get("https://autumnfish.cn/song/url?id="+id)
			.then(function(response){
				console.log(response);
				that.musicSrc = response.data.data[0].url
			},function(err){
				console.log(err);
			})
			
			axios.get("https://autumnfish.cn/song/detail?ids="+id)
			.then(function(response){
				console.log(response);
				that.imgUrl = response.data.songs[0].al.picUrl;
			},function(err){
				console.log(err);
			})
			
			axios.get("https://autumnfish.cn/comment/hot?type=0&id="+id)
			.then(function(response){
				console.log(response);
				that.remarkList = response.data.hotComments;
				console.log(that.remarkList);
			},function(err){
				console.log(err);
			})
			
		},
		
		myplay:function(){
			console.log("播放");
			this.isPlay = true;
		},
		
		mypause:function(){
			console.log("暂停");
			this.isPlay = false;
		},
		
		playMv:function(id){
			var that = this;
			axios.get("https://autumnfish.cn/mv/url?id="+id)
			.then(function(response){
				console.log(response);
				that.mvUrl = response.data.data.url;
				that.isPlayMv = true;
			},function(err){
				console.log(err);
			})
		},
		
		close:function(){
			this.isPlayMv = false;
			this.mvUrl = "";
		}
	}
})
