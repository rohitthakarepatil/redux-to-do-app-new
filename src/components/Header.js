import React from 'react';

import "../App.css"

import Todos from './Todos';

import Displaytodos from './Displaytodos';

import Userdetails from './Userdetails';



function Header() {



    return (

        <>

            <div className="container my-5">

                <div className="row">

                    <Userdetails />

                    <div className="col-md-10 text-center text-white mt-4 p-4 mx-auto tododetails">

                        <h3 className="mb-4 fw-bold">Add-Todo</h3>

                        <div className="row">

                            <div className="col-md-10 mx-auto">

                                <Todos />

                                <Displaytodos />

                            </div>

                        </div>

                    </div>

                </div>

            </div>



        </>

    )

}



export default Header