import React from 'react';
import { connect } from 'react-redux';
import Header from './Container/Header';

const Orders = ({ list }) => {
  return (
    <div>
      <Header />
      <center>
        {list.length > 0 ?
          <div className='container'>
            <div className='row'>
              {list.map((item) => (
                <div className='col-md-4' style={{ padding: "30px" }} key={item.id}>
                  <div className='card p-4' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img src={item.url} className='card-img-top' alt={item.name} style={{ width: '250px', height: '300px', textAlign: "center" }} />
                    <div className='card-body'>
                      <h4 className='card-title'>{item.name}</h4>
                      <div className='card-text'>Billing amount: Rs.{item.price}</div>
                      <p>Table number: {item.table_number}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          :
          <div className='h4'>
            No order placed yet
          </div>
        }
      </center>
    </div>
  );
};

const mapStateToProps = state => ({
  list: state.orderreducer
});

export default connect(mapStateToProps)(Orders);
