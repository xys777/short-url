<p align="center">
  <a href="https://blog.csdn.net/xys_777/article/details/115039546" target="_blank" rel="noopener noreferrer">
    Short URL 短网址
  </a>
  <img src="https://img-blog.csdnimg.cn/20210321083254487.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3h5c183Nzc=,size_16,color_FFFFFF,t_70" />
</p>

# short-url


A short url implementaion, use increment by Redis to generate a new key, it supports max key is gAAAAAAAA (0-2^53)

It use Redis to store URLs and generate the new key for URL. 

Except npm install, you need to config a Redis server as well.

For loacl testing, it use levelDB to store data.

