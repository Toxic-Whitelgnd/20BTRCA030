import React from 'react';

export default function Traintable({trainname,traino,depth,deptm,depts,seats,seatac,prices,priceac,delays}) {
    return (
        <>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">TrainName</th>
                        <th scope="col">TrainNo</th>
                        <th scope="col">DepatureTime</th>
                        <th scope="col">SeatAvailability</th>
                        <th scope="col">Price</th>
                        <th scope="col">DelayedBy</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="row">{trainname}</td>
                        <td scope="row">{traino}</td>
                        <td>{depth}H {deptm}M {depts}S</td>
                        <td>{seats}Sleeper ,{seatac}AC </td>
                        <td>{prices}Sleeper ,{priceac}AC</td>
                        <td>{delays}</td>
                    </tr>
                    
                </tbody>
            </table>


        </>
    )
};
