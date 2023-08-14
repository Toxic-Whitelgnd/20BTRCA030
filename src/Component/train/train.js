import React, { useState } from 'react';
import axios from 'axios';
import Traintable from '../Tables/traintable';
import Specifictrain from './specifictrain';
import {Routes, Route, useNavigate,Link} from 'react-router-dom';


const Train = () => {
    const [traind, settraindet] = useState([]);
    const [traino, setrainno] = useState('');
    
    const headers = { 'Authorization': `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTIwMzA4NjYsImNvbXBhbnlOYW1lIjoiQ0EwMzAgQ2VudHJhbCIsImNsaWVudElEIjoiZjA2Yzc5ZTAtM2NhNi00OWIzLTlhMDMtMTMyYzY4OGI1Yzg1Iiwib3duZXJOYW1lIjoiIiwib3duZXJFbWFpbCI6IiIsInJvbGxObyI6IjIwQlRSQ0EwMzAifQ.WN-W9YQqa_F7YlzANrl1luQtPZ-R2JmPZqzKHcnxKh0'}` };
    const getthedata = () => {
        axios.get(
            'http://20.244.56.144:80/train/trains',
            {
                headers
            }
        ).then((response) => {
            var response = response.data;
            console.log(response);
            settraindet(response)
        },
            (error) => {
                var status = error.response.status
            }
        );
    };

    const getpricebyinc = () => {
        let data = [...traind]
        if (data.length > 0) {
            let result = data.sort((a, b) => a.price.sleeper - b.price.sleeper)
            settraindet(result)
        }
    };
    const gettctbydec = () => {
        let data = [...traind]
        if (data.length > 0) {
            let result = data.sort((a, b) => b.seatsAvailable.sleeper - a.seatsAvailable.sleeper)
            settraindet(result)
        }
    }
    let succ = false;
    
    return (
        <div>
            <div>
                {/* create a frontend part */}
                <div className='d-flex p-2'>
                    <button type="button" class="btn btn-success" onClick={getthedata}>Get the details of the train</button>
                    <span className='p-2'></span>
                    <button type="button" class="btn btn-success" onClick={getpricebyinc}>Increase in Price</button>
                    <span className='p-2'></span>
                    <button type="button" class="btn btn-success" onClick={gettctbydec}>Decending order of ticket</button>

                </div>
                <div>
                <input type="number" value={traino} onChange={e=> setrainno(e.target.value)}/>
                <Link 
                 to="/traindetails" state={{data:traino}}> 
                getdetails
                </Link>
                </div>
                
                <div className='p-3'>
                    {
                        traind.map((r) => (
                            <Traintable
                                trainname={r.trainName}
                                traino={r.trainNumber}
                                depth={r.departureTime.Hours}
                                deptm={r.departureTime.Minutes}
                                depts={r.departureTime.Seconds}
                                seats={r.seatsAvailable.sleeper}
                                seatac={r.seatsAvailable.AC}
                                prices={r.price.sleeper}
                                priceac={r.price.AC}
                                delays={r.delayedBy}
                            />
                        ))
                    }
                </div>


            </div>
        </div>
    );
}

export default Train;

// { traind &&
//     traind.map((r) => (
//         <Traintable
//         trainname={r.trainName}
//         traino={r.traiNumber}
//         dept={r.departureTime}
//         seat={r.seatsAvailable}
//         price={r.price}
//         delays={r.delayedBy}
//         />
//     ))
// }

// {
//     return(
//         <>
//         <p>{t.trainName}</p>
//         <p>{t.trainNumber}</p>
//         <p>{t.trainName}</p>
//         <p>{t.trainName}</p>
//         </>
//     )
// }