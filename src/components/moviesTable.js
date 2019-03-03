import React, {Component} from 'react';
import Like from './common/like';
import TableHeader from './common/tableHeader';
import TableBody from './common/tablebody';

class MoviesTable extends Component {
  columns = [
    {path: 'title', label: 'Title'},
    {path: 'genre.name', label: 'Genre'},
    {path: 'numberInStock', label: 'Stock'},
    {path: 'dailyRentalRate', label: 'Rate'},
    {
      label: 'Like',
      content: (m) =>
        <Like 
          onClick={() => this.props.onLike(m)}
          like={m.like}
        /> 
      },
    {
      label: 'Delete', 
      content: (m) =>
        <button
          onClick={() => this.props.onDelete(m)}
          className='delete__btn'
        >
          DELETE
        </button>
    }
  ]

  render() {
    const {
      movies, 
      onSort,
      sortColumn
    } = this.props;

    return(
      <div>
        <table cellPadding="0" cellSpacing="0">
          <TableHeader
            columns={this.columns}
            onSort={onSort}
            sortColumn={sortColumn}
          />
        </table>
        <table className='table__content' cellPadding="0" cellSpacing="0">
          <TableBody
            data={movies}
            columns={this.columns}
          />
        </table>
      </div>
    );
  }
}

export default MoviesTable;