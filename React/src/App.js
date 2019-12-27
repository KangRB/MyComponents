import React, { Component } from 'react';
import GridLayout, {
  Responsive as ResponsiveGridLayout
} from 'react-grid-layout';
export default class MyFirstGrid extends Component {
  constructor(props) {
    super();
    this.state = {
      layout: [
        { i: 'a', x: 0, y: 0, w: 2, h: 3, minW: 2, maxW: 4 },
        { i: 'b', x: 2, y: 0, w: 1, h: 2 },
        { i: 'c', x: 4, y: 0, w: 1, h: 2 },
        { i: 'd', x: 6, y: 0, w: 1, h: 2 },
        { i: 'e', x: 8, y: 0, w: 1, h: 2 }
      ]
    };
  }
  setTargetEvent(target) {
    const { layout } = this.state;
    Object.values(layout).map(v => {
      v['current'] = target.i === v.i ? true : false;
    });
    this.setState({ layout });
  }
  render() {
    // layout is an array of objects, see the demo for more complete usage
    const { layout } = this.state;
    return (
      <div>
        <div style={styles.div}>
          <GridLayout
            className="layout"
            layout={layout} // 子集
            width={1000} // 布局宽度
            cols={20} // 此布局中的列数
            rowHeight={25} // 子集高度
            margin={[0, 0]} // 子集外边距
            isDraggable={true} // 是否禁用拖动
            isResizable={true} // 是否禁用改变尺寸
            compactType={''} // 紧凑类型
            onDragStart={(layouts, current) => this.setTargetEvent(current)}
          >
            {layout.map(v => {
              return (
                <div key={v.i} style={v.current ? styles.current : styles.bg}>
                  {v.i}
                </div>
              );
            })}
          </GridLayout>
        </div>
      </div>
    );
  }
}

const styles = {
  div: {
    width: 1000,
    background: '#eee'
  },
  bg: { background: '#ccc' },
  current: {
    border: '2px solid red',
    boxSizing: 'border-box',
    background: '#ccc'
  }
};
