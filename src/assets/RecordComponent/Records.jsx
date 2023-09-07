import React from 'react'

export const Records = () => {
    return (
        <>
            <div className="container-fluid py-5 px-5 r-desc ">
                <h1 className='text-center'>We have some incredible records</h1>
                <div className="row my-5">
                    <div className="col-lg-5">
                        <video src="/image/ground-1.mp4" controls autoPlay style={{ width: "100%", borderRadius: "7px" }}></video>
                    </div>
                    <div className="col-lg-7">
                        <p>In the world of cricket, records are the milestones that define greatness. At the Cricket Academy, we take immense pride in our incredible records, which are a testament to our dedication, passion, and unwavering commitment to the sport.The Cricket Academy has a glittering history of championship victories at various levels of the game. Our teams have consistently dominated local and national competitions, showcasing our players' exceptional skills and teamwork.</p><p> From youth tournaments to premier leagues, our academy's teams have etched their names in the annals of cricket history.One of our proudest records is the number of players who have gone on to represent their countries on the international stage. At the heart of our incredible records is our commitment to player development.
                        </p><p> We nurture raw talent and provide a conducive environment for growth, both on and off the field.</p>
                    </div>
                </div>

            </div>

            {/* BootStrap Accordian  */}


            <div className="container my-5 p-1" style={{ border: "1px solid grey", borderRadius: "12px" }}>
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                T20 Series Records
                            </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <div className="container my-5 " style={{ border: "1px solid grey", borderRadius: "12px" }}>
                                    <h1>T20 Records</h1>
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>Team</th>
                                                <th>Season</th>
                                                <th>Winner</th>
                                                <th>Margin</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>BCV vs FCC</td>
                                                <td>2/07/2019</td>
                                                <td>BCV</td>
                                                <td>1-0 (1)</td>
                                            </tr>
                                            <tr>
                                                <td>BCV vs KCC</td>
                                                <td>10/11/2019</td>
                                                <td>BCV</td>
                                                <td>1-0 (1)</td>
                                            </tr>
                                            <tr>
                                                <td>BCV vs FCC</td>
                                                <td>12/1/2019</td>
                                                <td>BCV</td>
                                                <td>2-1 (3)</td>
                                            </tr>
                                            <tr>
                                                <td>BCV vs TCC</td>
                                                <td>3/13/2020</td>
                                                <td>TCC</td>
                                                <td>1-0 (1)</td>
                                            </tr>
                                            <tr>
                                                <td>BCV vs ZCC (In Sindh)</td>
                                                <td>4/17/2020</td>
                                                <td>BCV</td>
                                                <td>2-0 (2)</td>
                                            </tr>
                                            <tr>
                                                <td>BCV vs ICA (In Sindh)</td>
                                                <td>4/23/2020</td>
                                                <td>ICA</td>
                                                <td>2-1 (3)</td>
                                            </tr>
                                            <tr>
                                                <td>BCV vs BCC (In Sindh)</td>
                                                <td>4/29/2020</td>
                                                <td>BCV</td>
                                                <td>2-0 (2)</td>
                                            </tr>
                                            <tr>
                                                <td>BCV vs D11</td>
                                                <td>6/25/2020</td>
                                                <td>BCV</td>
                                                <td>1-0 (1)</td>
                                            </tr>
                                            <tr>
                                                <td>BCV vs 11Star</td>
                                                <td>10/06/2020</td>
                                                <td>BCV</td>
                                                <td>1-0 (1)</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                ODI Series Records
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <div className="container my-5" style={{ border: "1px solid grey", borderRadius: "12px" }}>
                                    <h1>ODI Records</h1>
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>Team</th>
                                                <th>Season</th>
                                                <th>Winner</th>
                                                <th>Margin</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>BCV vs TCC</td>
                                                <td>3/23/2019</td>
                                                <td>BCV</td>
                                                <td>1-0 (1)</td>
                                            </tr>
                                            <tr>
                                                <td>BCV vs ICA (In Sindh)</td>
                                                <td>7/11/2019</td>
                                                <td>BCV</td>
                                                <td>1-0 (1)</td>
                                            </tr>
                                            <tr>
                                                <td>BCV vs FCC</td>
                                                <td>12/1/2019</td>
                                                <td>BCV</td>
                                                <td>2-1 (3)</td>
                                            </tr>
                                            <tr>
                                                <td>BCV vs ZCC (In Sindh)</td>
                                                <td>2/03/2020</td>
                                                <td>ZCC</td>
                                                <td>1-0 (1)</td>
                                            </tr>
                                            <tr>
                                                <td>BCV vs D11 </td>
                                                <td>5/21/2020</td>
                                                <td>BCV & D11</td>
                                                <td>1-1 (2)</td>
                                            </tr>
                                            <tr>
                                                <td>BCV vs BCA (In Home)</td>
                                                <td>7/24/2020</td>
                                                <td>BCV</td>
                                                <td>2-1 (3)</td>
                                            </tr>
                                            <tr>
                                                <td>BCV vs 11Star</td>
                                                <td>1/09/2021</td>
                                                <td>11Star</td>
                                                <td>1-0 (1)</td>
                                            </tr>
                                            <tr>
                                                <td>BCV vs D11</td>
                                                <td>3/29/2021</td>
                                                <td>BCV</td>
                                                <td>1-0 (1)</td>
                                            </tr>
                                            <tr>
                                                <td>BCV vs 11Star</td>
                                                <td>4/13/2021</td>
                                                <td>BCV</td>
                                                <td>1-0 (1)</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                4DAY Match Records
                            </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <div className="container my-5 " style={{ border: "1px solid grey", borderRadius: "12px" }}>
                                    <h1>4DAY Match Records</h1>
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>Team</th>
                                                <th>Season</th>
                                                <th>Winner</th>
                                                <th>Margin</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>BCV vs FCC</td>
                                                <td>2/07/2019</td>
                                                <td>BCV</td>
                                                <td>1-0 (1)</td>
                                            </tr>
                                            <tr>
                                                <td>BCV vs KCC</td>
                                                <td>10/11/2019</td>
                                                <td>BCV</td>
                                                <td>1-0 (1)</td>
                                            </tr>
                                            <tr>
                                                <td>BCV vs TCC</td>
                                                <td>3/13/2020</td>
                                                <td>TCC</td>
                                                <td>1-0 (1)</td>
                                            </tr>
                                            <tr>
                                                <td>BCV vs ZCC (In Sindh)</td>
                                                <td>4/17/2020</td>
                                                <td>BCV</td>
                                                <td>2-0 (2)</td>
                                            </tr>
                                            <tr>
                                                <td>BCV vs BCC (In Sindh)</td>
                                                <td>4/29/2020</td>
                                                <td>BCV</td>
                                                <td>2-0 (2)</td>
                                            </tr>
                                            <tr>
                                                <td>BCV vs D11</td>
                                                <td>6/25/2020</td>
                                                <td>BCV</td>
                                                <td>1-0 (1)</td>
                                            </tr>
                                            <tr>
                                                <td>BCV vs 11Star</td>
                                                <td>10/06/2020</td>
                                                <td>BCV</td>
                                                <td>1-0 (1)</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
