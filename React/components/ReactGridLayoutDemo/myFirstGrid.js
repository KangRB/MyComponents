import React, { Component } from 'react';
import GridLayout, {
  Responsive as ResponsiveGridLayout
} from 'react-grid-layout';
import _ from 'lodash';
import './css/myFirstGrid.css';

export default class MyFirstGrid extends Component {
  constructor(props) {
    super();
    this.state = {
      layout: [
        { i: '1', x: 0, y: 0, w: 2, h: 4 },
        { i: '2', x: 3, y: 0, w: 2, h: 4 },
        { i: '3', x: 6, y: 0, w: 2, h: 4 },
        { i: '4', x: 9, y: 0, w: 2, h: 4 },
        { i: '5', x: 12, y: 0, w: 2, h: 4 }
      ],
      currentEvent: {}
    };
  }
  onRemoveItem(i) {
    // 删除
    const { layout } = this.state;
    _.remove(layout, item => {
      return item.i === i;
    });
    this.setState({ layout });
  }
  onClick(i) {
    let { layout } = this.state;
    Object.values(layout).map(v => {
      v['current'] = i === v.i ? true : false;
    });

    this.setState({ layout, currentEvent: layout[Number(i) - 1] });
  }
  createElement(el) {
    const removeStyle = {
      position: 'absolute',
      right: '2px',
      top: 0,
      cursor: 'pointer'
    };
    const i = el.i;
    return (
      <div
        key={i}
        data-grid={el}
        style={el.current ? styles.current : styles.bg}
        onClick={this.onClick.bind(this, i)}
      >
        <span className="text">{i}</span>
        {el.current && (
          <span
            className="remove"
            style={removeStyle}
            onClick={this.onRemoveItem.bind(this, i)}
          >
            x
          </span>
        )}
      </div>
    );
  }
  render() {
    // layout is an array of objects, see the demo for more complete usage
    const { layout, currentEvent } = this.state;
    return (
      <div className="content">
        <div className="canvas">
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
            // onDragStart={(layouts, current) => this.setTargetEvent(current)}
          >
            {_.map(layout, el => this.createElement(el))}
          </GridLayout>
        </div>
        <div className="tools">
          {layout.map(v => {
            <div>{`i：${v.i}`}</div>;
          })}
          {currentEvent && (
            <div>
              当前项：X:{currentEvent['x']} Y:{currentEvent['y']} W:
              {currentEvent['w']}H:{currentEvent['h']}
            </div>
          )}
        </div>
      </div>
    );
  }
}

const styles = {
  bg: { background: '#ccc' },
  current: {
    border: '2px solid red',
    boxSizing: 'border-box',
    background: '#ccc'
  }
};
