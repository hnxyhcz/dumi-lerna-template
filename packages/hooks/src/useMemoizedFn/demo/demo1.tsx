/**
 * title: Default usage
 * desc: useMemoizedFn is the same as useCallback.
 *
 * title.zh-CN: 基础用法
 * desc.zh-CN: useMemoizedFn 与 useCallback 可以实现同样的效果。
 */

import React, { useState, useCallback } from 'react';
import { useMemoizedFn } from 'hnxyhcz-hooks';

export default () => {
  const [count, setCount] = useState(0);

  const callbackFn = useCallback(() => {
    console.info(`Current count is ${count}`);
  }, [count]);

  const memoizedFn = useMemoizedFn(() => {
    console.info(`Current count is ${count}`);
  });

  return (
    <>
      <p>count: {count}</p>
      <button
        type="button"
        onClick={() => {
          setCount((c) => c + 1);
        }}
      >
        Add Count
      </button>
      <div style={{ marginTop: 16 }}>
        <button type="button" onClick={callbackFn}>
          call callbackFn
        </button>
        <button type="button" onClick={memoizedFn} style={{ marginLeft: 8 }}>
          call memoizedFn
        </button>
      </div>
    </>
  );
};
