import React from 'react'
import "../Component/TextBar.css"
export default function TextBar() {
    return (

        <div>
            <div className="fluid clsfluid ">
            <div className='clsh1 text-center'><h2>Explore Challenge</h2></div>
                <div className='row mx-auto'>

                    <form action="/action_page.php  bar ">
                        <div className='col-sm-10 d-flex '>
                            <div className='clsbt'><button type="submit"><i class="fa fa-search"></i></button></div>
                            <input type="text" placeholder="Search"></input>
                            <select className=' col-sm-2 filter'>
                                <option value="Ford"><h5>Filter</h5></option>
                                <option value="Volvo">Easy</option>
                                <option value="Fiat">Hard</option>
                                <option value="Fiat">Upcoming</option>

                            </select>


                        </div>
                        


                    </form>
                   
                </div>

            </div>
        </div>
    )
}
