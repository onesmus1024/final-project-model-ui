import React, {useState } from 'react';
import './trade.css';





function Trade() {

    const predictedValue = 0;
    const [predicted, setPredicted] = useState(0);

    const [trade, setTrade] = useState({
        close: '',
        open: '',
        high: '',
        low: '',
        tick_volume: '',
        spread : '',
        real_volume: ''

    });



    const handleSubmit = (event) => {

        event.preventDefault();
        console.log(trade);

        fetch('http://127.0.0.1:5000/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(trade),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                setPredicted(data);
                
                setTrade({
                    close: '',
                    open: '',
                    high: '',
                    low: '',
                    tick_volume: '',
                    spread : '',
                    real_volume: ''
                });
            }
            )
            .catch((error) => {
                console.error('Error:', error);
            }
            );

       
    };


    return (
        <div className="trade">
        <div className="trade__form">
            <form onSubmit={handleSubmit}>
            <label htmlFor='close'>Close</label>
            <input type="text" id="close" name="close" value={trade.close} onChange={e => setTrade({ ...trade, close: e.target.value })}  placeholder='Enter a close value' />
            <label htmlFor='open'>Open</label>
            <input type="text" id="open" name="open"  value={trade.open} onChange={e => setTrade({ ...trade, open: e.target.value })} placeholder='Enter an open value' />
            <label htmlFor='high'>High</label>
            <input type="text" id="high" name="high"  value={trade.high} onChange={e => setTrade({ ...trade, high: e.target.value })} placeholder='Enter a high value' />
            <label htmlFor='low'>Low</label>
            <input type="text" id="low" name="low" value={trade.low} onChange={e => setTrade({ ...trade, low: e.target.value })} placeholder='Enter a low value' />
            <label htmlFor='tick_volume'>Tick Volume</label>
            <input type="text" id="tick_volume" name="tick_volume" value={trade.tick_volume} onChange={e => setTrade({ ...trade, tick_volume: e.target.value })} placeholder='Enter a tick_volume value' />
            <label htmlFor='spread'>Spread</label>
            <input type="text" id="spread" name="spread" value={trade.spread} onChange={e => setTrade({ ...trade, spread: e.target.value })} placeholder='Enter a spread value' />
            <label htmlFor='real_volume'>Real Volume</label>
            <input type="text" id="real_volume" name="real_volume" value={trade.real_volume} onChange={e => setTrade({ ...trade, real_volume: e.target.value })} placeholder='Enter a real_volume value' />
            <input type="submit" value="Submit" />
            </form>
        </div>
        <div className="trade__result">
            <h1>Result</h1>
            <p>Predicted Value: {predicted.prediction}</p>

        </div>
        </div>
    );
    }



export default Trade;
