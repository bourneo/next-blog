---

title: FFmpeg 视频音频处理

date: 2023-02-28

tags:

- FFmpeg
- Tools

description: FFmpeg

---

# FFmpeg 视频音频处理

---

## FFmpeg 精要

---

### 简介

FFmpeg 中的 “FF” 指的是 “Fast Forward”，“mpeg” 则是 “Moving Picture Experts Group”。

### 命令格式

```
ffmpeg {全局参数} {输入文件参数} -i {输入文件} {输出文件参数} {输出文件}
```

### 命令参数

| 命令           | 简介                                   | 备注                                                              |
| :------------- | :------------------------------------- | :---------------------------------------------------------------- |
| -i             | 设置输入文件                           | input                                                             |
| -f             | 设置输出格式                           | format                                                            |
| -c copy        | 直接复制，不经过重新编码（这样比较快） |                                                                   |
| -c:v           | 设置视频编码器                         | 相当于 -vcodec，是 -codec:v 的简写                                |
| -c:a           | 设置音频编码器                         | 相当于 -acodec，是 -codec:a 的简写                                |
| -c:s           | 设置字幕编码器                         | 相当于 -scodec，是 -codec:s 的简写                                |
| -b:v           | 设置输出视频的比特率                   | bit                                                               |
| -b:a           | 设置输出音频的比特率                   | bit                                                               |
| -ss            | 设置开始时间                           |                                                                   |
| -t             | 设置持续时间                           | 单位为秒                                                          |
| -to            | 设置结束时间                           |                                                                   |
| -vf            | 创建和设置过滤图，并用它来过滤流       |                                                                   |
| -vf scale=     | 设置输出视频的宽度和高度               |                                                                   |
| -vf setsar=    | 设置过滤器输出视频的样本纵横比         |                                                                   |
| -vf subtitles= | 设置字幕                               |                                                                   |
| -loop 1        | 无限循环                               |                                                                   |
| -shortest      | 让生成的视频最短化                     |                                                                   |
| -vn            | 去除视频流                             | video not                                                         |
| -an            | 去除音频流                             | audio not                                                         |
| -ar            | 设置音频码率                           | audio rate                                                        |
| -ac            | 设置声道数                             | 1：单声道；2：立体声；转换单声道的 TVrip 可以用 1（节省一半容量） |
| -frames:v      | 设置要输出的视频帧数                   | 缩写：-vframes；相当于 -filter:v                                  |
| -crf           | 质量控制                               | 参数的设置范围是 0~50，数值越小代表清晰度越高，建议值域为 18~28。 |

备注：

> 关于 crf 的值：
>
> 量化器标度的范围是 0-51：其中 0 是无损，23 是默认值，51 是最坏的。较低的值表示较高的质量，主观上合理的范围是 18-28。
>
> 将 18 视为视觉无损或接近无损：它应该与输入看起来相同或几乎相同，但在技术上并非无损。
>
> 范围是指数级的，因此增加 CRF 值 +6 大约是比特率的一半，而 -6 大约是比特率的两倍。
>
> 一般用法是选择仍能提供可接受质量的最高 CRF 值。如果输出看起来不错，则尝试更高的值，如果看起来很差，则选择较低的值。

---

## FFmpeg 使用实例——截取操作

---

### 视频截取

```
ffmpeg -i input-1.mp4 -ss 00:02:25 -to 00:05:34 -c copy output-1.mp4
```

```
ffmpeg -i input-1.mp4 -ss 00:02:25 -t 00:02:00 -c copy output-2.mp4
```

> FFmpeg 截视频默认采用关键帧，所以输出的时间和设置的时间，可能有若干秒的误差。

### 音频截取

```
ffmpeg -i input-1.mp3 -ss 00:02:24.5 -to 00:05:38 -c copy output-1.mp3
```

```
ffmpeg -i input-1.mp3 -ss 00:02:24.5 -t 00:02:00 -c copy output-2.mp3
```

---

## FFmpeg 使用实例——提取操作

---

### 从视频提取音频

提取 mp3 格式：

```
ffmpeg -i input-1.mp4 -acodec libmp3lame output-1.mp3
```

```
ffmpeg -i input-1.mp4 -f mp3 -vn output-2.mp3
```

```
// 推荐
ffmpeg -i input-1.mp4 output-3.mp3
```

```
ffmpeg -i input-1.mp4 -f mp3 -ar 16000 output-4.mp3
```

提取 m4a 格式：

```
ffmpeg -i input-1.mp4 -acodec copy -vn output-1.m4a
```

提取 aac 格式：

```
ffmpeg -i input-1.mp4 -acodec copy -vn output-1.aac
```

提取 wav 格式：

```
ffmpeg -i input-1.mp4 -ac 1 -ar 16000 -f wav output-1.wav
```

```
ffmpeg -i input-1.mp4 -acodec pcm_s16le -f s16le -ac 1 -ar 16000 -f wav output-2.wav
```

### 视频提取的某一帧

```
// 推荐
ffmpeg -i input-1.mp4 -ss 00:00:01 -frames:v 1 output-1.png
```

> 如果时间戳不靠前，提取速度会比较慢。这时直接用 PotPlayer 的图像截取会更快。

### 视频提取封面

```
// 推荐
ffmpeg -i input-1.mp4 -map 0:v -map -0:V -c copy output-1.png
```

> 如果报错信息是：Output file #0 does not contain any stream，说明视频未附有封面。
>
> 没封面的视频，在文件浏览器看到的，只是解码器读到的关键帧缩略图。

---

## FFmpeg 使用实例——添加操作

---

### 视频加硬字幕

```
// 推荐
ffmpeg -i input-1.mp4 -vf subtitles=input-1.ass -c:a copy output-1.mp4
```

> 直接复制音频可以防止音频被压缩。

### 视频加软字幕

```
// 推荐
ffmpeg -i input-1.mp4 -i input-1.ass -c copy -c:s mov_text output-1.mp4
```

### 视频加封面

```
// 推荐
ffmpeg -i input-1.mp4 -i input-1.png -map 0 -map 1 -c copy -c:v:1 png -disposition:v:1 attached_pic output-1.mp4
```

---

## FFmpeg 使用实例——转码操作

---

### dvd / iso 直接转 mp4

```
ffmpeg -i input-1.iso -preset superfast -vf yadif -crf 18 output-1.mp4
```

### vob 格式转 mkv

```
ffmpeg -i input-1.vob -preset superfast -crf 18 -c:a ac3 -c:s copy -map 0:1 -map 0:2 output-1.mkv
```

> -c:a 是 -codec:a 的简写，冒号后面的 a 是 audio 音频的简写，s 是 subtitle 的简写。
>
> 这个参数用来指定视频、音频、字幕所采用的编码器，copy 表示沿用源视频的编码器。
>
> 0:0 是 DVD 的菜单，0:1 是视频部分，0:2 和 0:3 是音频部分，0:4 和 0:5 是字幕。

### vob 格式转 mp4

```
// 码率 2000，推荐
ffmpeg -i input-1.vob -preset superfast -crf 18 -c:a copy -map 0:1 -map 0:2 output-1.mp4
```

```
// 码率 1500，速度太慢
ffmpeg -i input-1.vob -c:v libx264 -crf 18 -vf yadif -c:a ac3 -b:a 448k output-2.mp4
```

```
// 码率 1000
ffmpeg -i output-1.vob -c:a copy -codec:v libx264 output-3.mp4
```

```
// 码率 1000
ffmpeg -i input-1.vob -c:a aac -aq 100 -c:v libx264 -c:s mov_text -map 0:1 -map 0:2 -movflags +faststart -vb 1000k -maxrate 1500k -bufsize 500k output-4.mp4
```

```
// 码率 800
ffmpeg -i input-1.vob output-5.mp4
```

```
// 码率 500
ffmpeg -i input-1.vob -preset superfast -crf 28 -c:a ac3 output-6.mp4
```

```
// 码率 400
ffmpeg -i input-1.vob -vcodec mpeg4 -b:a 1200k -mbd 2 -flags +mv4 -trellis 2 -cmp 2 -subcmp 2 -metadata title=output output-7.mp4
```

```
// 码率 300，分辨率改变
ffmpeg -i input-1.vob -vcodec libx265 output-8.mp4
```

---

---

## FFmpeg 使用实例——合并操作

---

### 无损合并 mp4

```
// 推荐（数量少的话）
(echo file 'input-1.mp4' & echo file 'input-2.mp4')>input-1.txt
ffmpeg -safe 0 -f concat -i input-1.txt -c copy output-2.mp4
```

```
// 转成 ts 再合并
ffmpeg -i input-1.mp4 -vcodec copy -acodec copy -vbsf h264_mp4toannexb 1.ts
ffmpeg -i input-2.mp4 -vcodec copy -acodec copy -vbsf h264_mp4toannexb 2.ts
ffmpeg -i "concat:1.ts|2.ts" -c copy output.mp4
```

```
// 批量合并文件夹下的 mp4
(for %i in (*.mp4) do @echo file '%i') > list.txt
ffmpeg -f concat -safe 0 -i list.txt -c copy -y output.mp4
```

```
// 批量合并文件夹下的 mp4，包含隐藏文件
for /f "delims=" %a in ('dir /b/a-d *.mp4') do (echo file '%cd%\%a' >> list.txt)
ffmpeg -f concat -safe 0 -i list.txt -c copy -y output.mp4
```

### 音频和图片合并，转成视频

```
// 推荐
ffmpeg -loop 1 -i input-1.jpg -i input-1.mp3 -c:v libx264 -c:a aac -b:a 330k -vf scale=1080:1080 -shortest output-1.mp4
```

```
// 如果是无损音频格式，例如 flac，可以封装进 mkv 里
// 同样的画质，libx265 压制的视频体积更小，但对机器性能要高点，介意的可以选 libx264
ffmpeg -loop 1 -i hr-1.png -i Beyond.flac -c:v libx265 -c:a copy -shortest output.mkv
```

```
// 图片转成不带视音频的视频
ffmpeg -loop 1 -i hr-1.png -c:v libx265 -t 292 output2.mkv
```

---

## FFmpeg 使用实例——图片压缩

---

### 图片转码压缩

```
// 推荐
ffmpeg -i input.png output.jpg
ffmpeg -i input.png output.jpeg
```

```
ffmpeg -i input.png output.webp
```

```
ffmpeg -i input.png output.bmp
```

### 图片压缩

```
// 推荐
ffmpeg -i input.png -vf palettegen=max_colors=256:stats_mode=single -y tmp.png
ffmpeg -i input.png -i tmp.png -lavfi "[0][1:v] paletteuse" -pix_fmt pal8 -y output.png
```

###

---

---

参考链接：

- [FFmpeg 官方英文文档](https://ffmpeg.org/ffmpeg.html)
- [FFmpeg 命令详解](https://www.cnblogs.com/vicowong/archive/2011/03/08/1977088.html)
- [ffmpeg - 把光盘转换成 MP4](https://it.ismy.fun/2019/05/16/convert-vob-to-mp4-by-ffmpeg/)
- [使用 FFMPEG 压缩 png 图片 与 tinypng 压缩结果对比](https://www.cnblogs.com/toumingbai/p/8298289.html)
- []()

---
