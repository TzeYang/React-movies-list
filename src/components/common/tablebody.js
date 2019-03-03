import React, {Component} from 'react';
import _ from 'lodash';

class TableBody extends Component {
  createColumnItems = (item, column) => {
    if(column.content) {
      return column.content(item);
    } else {
      return _.get(item, column.path)
    }
  }

  createKey = (column) => {
    return column.path || column.label;
  }

  render() { 
    const {data, columns} = this.props;
    return(
      <tbody>
        {data.map(item => (
          <tr key={item._id}>
            {columns.map(column => (
              <td 
                key={this.createKey(column)}
              >
                {this.createColumnItems(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;