import React from 'react';
import { connect } from 'react-redux';
import { resetfilter, setfilter } from '../Action';
import filterreducer from '../Reducer/filterreducer';

const Filter = ({ resetfilter, filter_name, setfilter }) => {
  const prod = ["All Items", "Rice Items", "Pizzas", "Cool Drinks", "Hot Drinks"];
  const [localFilter, setLocalFilter] = React.useState("All Items");

  const handleFilterChange = (e) => {
    const selectedFilter = e.target.value;
    setLocalFilter(selectedFilter);
    setfilter(selectedFilter);
  };

  return (
    <div>
      <center className='m-4'>
        <span className='h4 m-3'>Select: </span>
        <select name="filter" className='p-2' value={localFilter} onChange={handleFilterChange}>
          {prod.map((item, index) => (
            <option value={item} key={index}>{item}</option>
          ))}
        </select>
      </center>
    </div>
  );
};

const mapStateToProps = (state) => ({
  filter_name: state.filterreducer.filter_name,
});

export default connect(mapStateToProps, { setfilter, resetfilter })(Filter);
