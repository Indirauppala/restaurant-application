import React from 'react';
import { connect } from 'react-redux';
import { setTableNumber } from '../Action';

const Table = ({ table_number, setTableNumber }) => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const inActiveBtn = 'btn btn-outline-primary m-2';
    const activeBtn = 'btn btn-outline-primary m-2 active';
    const [number, setNumber] = React.useState(null);

    return (
        <div>
            <center className='mt-2'>
                <h3>Select Your Table Number</h3>
                {numbers.map((num, index) => (
                    <div style={{ display: "inline" }} key={index}>
                        <button 
                            className={table_number === num ? activeBtn : inActiveBtn} 
                            onClick={() => setTableNumber(num)}
                        >
                            {num}
                        </button>
                    </div>
                ))}
            </center>
        </div>
    );
};

const mapStateToProps = (state) => ({
    table_number: state.tablereducer.table_number,
});

export default connect(mapStateToProps, { setTableNumber })(Table);
