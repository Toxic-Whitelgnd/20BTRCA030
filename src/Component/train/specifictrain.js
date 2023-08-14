import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';

export default function Specifictrain(props) {
    const locat = useLocation();
    console.log("from sp" + props);
    const data = locat.state?.data;
    const [sptrain, setsptrain] = useState([]);
    useEffect(() => {
        gettraindetails()
    }, []);
    const headers = { 'Authorization': `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTIwMzA4NjYsImNvbXBhbnlOYW1lIjoiQ0EwMzAgQ2VudHJhbCIsImNsaWVudElEIjoiZjA2Yzc5ZTAtM2NhNi00OWIzLTlhMDMtMTMyYzY4OGI1Yzg1Iiwib3duZXJOYW1lIjoiIiwib3duZXJFbWFpbCI6IiIsInJvbGxObyI6IjIwQlRSQ0EwMzAifQ.WN-W9YQqa_F7YlzANrl1luQtPZ-R2JmPZqzKHcnxKh0'}` };
    const gettraindetails = () => {
        console.log(data);

        axios.get(
            `http://20.244.56.144/train/trains/${data}`,
            {
                headers
            }
        )
            .then((response) => {
                var response = response.data;
                console.log("from req");
                console.log(response);
                setsptrain(response)



            },
                (error) => {
                    var status = error.response.status
                }
            );

    };
    return (
        <>
            <div>
                <h1>Train details</h1>
                <div className='d-grid p-4'>
                    <h3>Train Number:{sptrain.trainNumber}</h3>
                    <h3>Train Name: {sptrain.trainName}</h3>
                    <h3>Departure Time:{sptrain.Departure.Hours}H {sptrain.Departure.Minutes}M {sptrain.Departure.Seconds}S</h3>
                    <h3>Seat Availability: {sptrain.seatAvailable.Sleeper} Sleeper {sptrain.seatAvailable.AC} AC</h3>
                    <h3>Price:{sptrain.price.Sleeper} Sleeper  {sptrain.price.AC} AC</h3>
                    <h3>Train Delayed By: {sptrain.delayedBy}</h3>

                </div>


            </div>

            <Link to='/' >
                Home page
            </Link>





        </>
    );
};
