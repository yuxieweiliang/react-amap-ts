import React, { useState } from 'react';
import { Button } from 'antd';

function DemoHook() {
  // 声明一个叫 "count" 的 state 变量
  const [count, setCount] = useState(0);

  return (
      <div>
        <p>You clicked {count} times</p>
        <Button onClick={() => setCount(count + 1)}>
          Click me
        </Button>
      </div>
  );
}

export default DemoHook;