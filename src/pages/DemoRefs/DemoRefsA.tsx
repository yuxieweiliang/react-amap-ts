import React from 'react';
import { Input } from 'antd';
// 只有FunctionComponent才用得到forwardRef，ClassComponent不需要
export const DemoRefsA = React.forwardRef((props, ref:any) => (
    <div>
      <Input ref={ref} placeholder="这是子组件A"/>
    </div>
));
