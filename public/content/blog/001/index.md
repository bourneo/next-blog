---

title: FFmpeg Examples

date: 2023-02-28

tags:

- FFmpeg
- Tools

description: FFmpeg

coverPath: "/content/flow/0001/2023-03-03.jpg"

author: Dove

eta: 0 min

---

# FFmpeg Examples

---

## FFmpeg

[comment]: <> (![img_test]&#40;/content/flow/0001/2023-03-03.jpg&#41;)

```javascript
export const meta = {
  title: 'FFmpeg 视频音频处理',
  date: '2021-01-30 15:31:22',
  author: 'DoveRank',
  description: 'FFmpeg',
  tags: 'FFmpeg',
};
```

```javascript
function groupBy(list, keyGetter) {
  const map = new Map();
  list.forEach((item) => {
    const key = keyGetter(item);
    const collection = map.get(key);
    if (!collection) {
      map.set(key, [item]);
    } else {
      collection.push(item);
    }
  });
  return map;
}
```