import React from 'react';
import { connect } from 'react-redux';
import { addorder, resetTableNumber, resetfilter } from '../Action';

const Card = ({ filter_name, addorder, table_number, resetTableNumber, resetfilter }) => {
    const [data, setData] = React.useState([]);
    const [cloneData, setCloneData] = React.useState([]);

    React.useEffect(() => {
        fetch('https://raw.githubusercontent.com/Indirauppala/restaurant/main/fooditems.json')
            .then(response => response.json())
            .then(json => {
                setData(json.items);
                setCloneData(json.items);
            });
    }, []);

    React.useEffect(() => {
        if (filter_name !== "All Items") {
            let specific = cloneData.filter(item => item.category === filter_name);
            setData(specific);
        } else {
            setData(cloneData);
        }
    }, [filter_name, cloneData]);

    const handleOrder = async (id, name, price, url) => {
        if (table_number != null) {
            await addorder(id, name, price, table_number, url);
            await resetTableNumber();
            await resetfilter();
            alert("Order placed successfully!");
        } else {
            alert("Please select a table number");
        }
    };

    return (
        <div>
            <center>
                {data.length > 0 ?
                    <div className='container'>
                        <div className='row'>
                            {data.map((item) => (
                                <div className='col-md-4' style={{ padding: "30px" }} key={item.id}>
                                    <div className='card p-4' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <img src={item.url} className='card-img-top' alt={item.name} style={{ width: '250px', height: '300px', textAlign: "center" }} />
                                        <div className='card-body'>
                                            <h4 className='card-title'>{item.name}</h4>
                                            <div className='card-text'>Rs.{item.price}</div>
                                            <button className='btn btn-primary' onClick={() => handleOrder(item.id, item.name, item.price, item.url)}>Order</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    :
                    <div className='spinner-border text-primary'></div>
                }
            </center>
        </div>
    );
};

const mapStateToProps = state => ({
    filter_name: state.filterreducer.filter_name,
    table_number: state.tablereducer.table_number
});

export default connect(mapStateToProps, { addorder, resetTableNumber, resetfilter })(Card);
