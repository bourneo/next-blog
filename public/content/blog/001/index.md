---

title: FFmpeg Examples

date: 2023-02-28

tags:

- FFmpeg
- Tools

description: FFmpeg

cover_path: "/content/flow/0001/2023-03-03.jpg"

author: dove

eta: 0 min

---

# FFmpeg Examples

---

## FFmpeg

![img_test](/content/flow/0001/2023-03-03.jpg)

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