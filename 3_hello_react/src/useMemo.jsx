import React, {memo} from "react";

//只会渲染改变之后才会重新渲染
export const MemoHeader = memo(() => {
  return (
    <h2>Header</h2>
  )
})


