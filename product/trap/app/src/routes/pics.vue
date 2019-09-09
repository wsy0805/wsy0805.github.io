<template>
	<div class="pics">
		<div v-for="(i,$index) in arr" class="pics_item" @click="pics_btn(i,$index)">
			<img :src="i" alt="">
		</div>
		<div class="pics_mubu">
			<button @click="closebtn">×</button>
			<div class="photoes" style="position: absolute;left:28%;top:6%;">
				<img :src="photoes" alt="">
			</div>
			<button class="prev" @click="prevpic"><</button>
			<button class="next" @click="nextpic">></button>
		</div>
	</div>
</template>

<script>
	export default{
		methods:{
			pics_btn(i,index){
				console.log(i)
				var obody=document.querySelector('.pics_mubu')
				obody.style.display='block'
				setTimeout(()=>{
					obody.style.top='0';
				},1000)
				// console.log(obody)
				this.photoes=i
				this.index=index
			},
			closebtn(){
				var obody=document.querySelector('.pics_mubu')
				obody.style.top='-100vh';
				setTimeout(()=>{
					obody.style.display='none'
				},1000)
			},
			nextpic(){
				this.photoes=this.arr[this.index]
				this.index++
				if(this.index>=this.arr.length){
					this.index=0
				}
			},
			prevpic(){
				this.photoes=this.arr[this.index]
				this.index--
				if(this.index<=-1){
					this.index=this.arr.length-1
				}
			}
		},
		data(){
			return{
				arr:[
					'https://ccdn.goodq.top/caches/1f6a588ef8d15139fc379ea62fde10d4/aHR0cHM6Ly81NjljODRiOWNiNDUzLnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDEvZjAzNWMxZWRjYWJmMmNmMGMxZGMxODkzMDU2ZmQ5NTUuanBn.jpg',
					'https://ccdn.goodq.top/caches/1f6a588ef8d15139fc379ea62fde10d4/aHR0cHM6Ly81NjljODRiOWNiNDUzLnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDEvMjQ4ZjU3MTJhNjAwMjdkMDcwZjM4MWNhYTEyYmNkOTQuanBn.jpg',
					'https://ccdn.goodq.top/caches/1f6a588ef8d15139fc379ea62fde10d4/aHR0cHM6Ly81NjljODRiOWNiNDUzLnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDEvNDczYjc3YWVjMjMzMGM5ZTIzOWM1YTE0MTA5YmExYTIuanBn.jpg',
					'https://ccdn.goodq.top/caches/1f6a588ef8d15139fc379ea62fde10d4/aHR0cHM6Ly81NjljODRiOWNiNDUzLnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDEvOTk4ODdhZTI2YWVjNGRmMTY0MDk2MmRiNWViMjBlMzkuanBn.jpg',
					'https://ccdn.goodq.top/caches/1f6a588ef8d15139fc379ea62fde10d4/aHR0cHM6Ly81NjljODRiOWNiNDUzLnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDEvYjQ3ZDIwN2I1OWNjNWM4YzMyZWVmMjNmYjI0MjVkMGEuanBn.jpg',
					'https://ccdn.goodq.top/caches/1f6a588ef8d15139fc379ea62fde10d4/aHR0cHM6Ly81NjljODRiOWNiNDUzLnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDEvZjJkNzBkZGQwZTM5NmMzMmEyNTlkMmQyN2IwOTYzYjYuanBn.jpg',
					'https://ccdn.goodq.top/caches/1f6a588ef8d15139fc379ea62fde10d4/aHR0cHM6Ly81NjljODRiOWNiNDUzLnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDEvNTEwOGVjM2VlZDE2ZmI2MWNiNWI0NTZjMjVmMzVlYWYuanBn.jpg',
					'https://ccdn.goodq.top/caches/1f6a588ef8d15139fc379ea62fde10d4/aHR0cHM6Ly81NjljODRiOWNiNDUzLnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDEvNjcxZmM3YjRkN2NjZTExYmEwNTM1YjkzYmE3YjE5YzYuanBn.jpg',
					'https://ccdn.goodq.top/caches/1f6a588ef8d15139fc379ea62fde10d4/aHR0cHM6Ly81NjljODRiOWNiNDUzLnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDEvMWY3YjA4ZGQ0OTExNzBiODk5YzQ5YWE1YTkxYzdiNTIuanBn.jpg',
					'https://ccdn.goodq.top/caches/1f6a588ef8d15139fc379ea62fde10d4/aHR0cHM6Ly81NjljODRiOWNiNDUzLnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDEvNjAxNTUxNjRiY2I0M2FlYjdlNjc0YWQ0NWRmZTUwZTYuanBn.jpg',
					'https://ccdn.goodq.top/caches/1f6a588ef8d15139fc379ea62fde10d4/aHR0cHM6Ly81NjljODRiOWNiNDUzLnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDEvMTMxMjA5ODdmOWY2ZTIzOTQzOTIyZDg5NGRlNjUzY2IuanBn.jpg',
					'https://ccdn.goodq.top/caches/1f6a588ef8d15139fc379ea62fde10d4/aHR0cHM6Ly81NjljODRiOWNiNDUzLnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDEvNDcyZjEyMTU0M2U0YmRhZmQ0ZWQ1MTkzYThhYTU5NDIuanBn.jpg',
					'https://ccdn.goodq.top/caches/1f6a588ef8d15139fc379ea62fde10d4/aHR0cHM6Ly81NjljODRiOWNiNDUzLnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDEvODZhZTJlNTBiZjI1MDA3NmU3NmNlYzQzM2MwNTAzMmIuanBn.jpg',
					'https://ccdn.goodq.top/caches/1f6a588ef8d15139fc379ea62fde10d4/aHR0cHM6Ly81NjljODRiOWNiNDUzLnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDEvZjY0MjM3MjRiNjM0ZThhZTA4OThhMGZiNWMxMzVmYzYuanBn.jpg',
					'https://ccdn.goodq.top/caches/1f6a588ef8d15139fc379ea62fde10d4/aHR0cHM6Ly81NjljODRiOWNiNDUzLnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDEvNGI5NzNjYzFjM2IzMjJjZWFlMTQyZWM4N2E5NmUwMmIuanBn.jpg',
				],
				photoes:'',
				index:0,
			}
		}
	}
</script>

<style>
	.pics{
		overflow: hidden;
		padding:20px 0 40px 0;
	}
	.pics_item{
		float: left;
		width:calc(100% / 3);
		height:calc(100% / 3);
		padding:4px;
		box-sizing: border-box;
		cursor: pointer;
		position:relative;
	}
	.pics_item:hover:after{
		content:'';
		width:100%;
		height:100%;
		background:rgba(198,198,198,.4);
		position: absolute;
		left:0;
		top:0;
	}
	.pics_item:hover:before{
		content: '点击查看大图';
		width:100%;
		height:100%;
		position: absolute;
		left:0;
		top:40%;
		text-align: center;
		color:#000;
		font-weight:bold;
		font-size:30px;
	}
	.pics_item img{
		width:100%;
		height:100%;
	}
	.pics_mubu{
		width:100vw;
		height:100%;
		background:#2E2E2E;
		position: fixed;
		left:0;
		top:-100vh;
		transition: 1s;
		display: none;
	}
	.pics_mubu button{
		width:40px;
		height: 40px;
		background:#000;
		position: absolute;
		top:0;
		right:20px;
		text-align: center;
		line-height:40px;
		border:none;
		outline: none;
		color:#fff;
		font-size:36px;
	}
	.pics_mubu .prev{
		top:50%;
		margin-top:-20px;
		left:0
	}
	.pics_mubu .next{
		top:50%;
		margin-top:-20px;
	}
</style>
