import React from 'react';
import classNames from 'classnames';
import classes from './test.css';

export class Test extends React.Component {
  static property = { name: 'name' };
  render() {
    return (
      <>
        <div className="plain" />
        <div className="space-separated-1 space-separated-2" />
        <ul>
          {list.map((item) => (
            <li className="in-array" />
          ))}
        </ul>
        <div
          className={classNames('classnames', {
            ['classnames-conditinal']: true,
          })}
        />
        <div className={classes.inRow}>{property.name}</div>
      </>
    );
  }
}
