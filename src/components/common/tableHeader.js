import React, {Component} from 'react';

class TableHeader extends Component {
  raiseSort = (path) => {
    const sortColumn = {...this.props.sortColumn};
    if(sortColumn.path === path) {
      sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc';
    } else {
      sortColumn.path = path;
      sortColumn.order = 'asc';
    }
    this.props.onSort(sortColumn);
  }

  onSortIcon = () => {
    const sortColumn = {...this.props.sortColumn};
    if(sortColumn.order === 'asc') {
      return <i className="fa fa-caret-up" aria-hidden="true"></i>;
    } else {
      return <i className="fa fa-caret-down" aria-hidden="true"></i>;
    }
  }
  
  render() {
    const {columns} = this.props;
    return(
      <thead>
        <tr>
          {columns.map(column => (
            <th
              key={column.label}
              onClick={() => this.raiseSort(column.path)}
            >
              {column.label}
              {this.onSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;