export default function ContentTable(item) {
  return (
    // hidden menu
    <div className="">
      {item.table.join('\n')}
      {/*<div dangerouslySetInnerHTML={{ __html: blog.table }} />*/}
      {/*<div>{blog.table.remarkToc}</div>*/}
      {/*<TableOfContents></TableOfContents>*/}
    </div>
  );
}
