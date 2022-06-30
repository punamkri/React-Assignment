import React from "react";
import "../Component/Icon.css"
function Icon() {
    return (
        <div>
            <div className="container-fluid py-5 clspy">
                <div className="row rowcard mx-5 text-center">
                    <div className="col-4 d-flex">
                        <div i class="fa-solid fa-file-pen pen"></div>

                        <div className="msg ">

                            <div className="d-flex clsflx">100K+</div>
                            <div className="d-flex">AI model submission</div>
                        </div>
                        <div className="clslines"></div>


                    </div>

                    <div className="col-4 d-flex ">
                        <i className="fa-solid fa-address-book pen"></i>
                        <div className="msg">
                            <div className="d-flex clsflx">50K+</div>
                            <div className="d-flex">Data science</div>
                        </div>
                        <div className="clslines"></div>
                    </div>

                    <div className="col-4 d-flex ">
                        <i class="fa-solid fa-file-contract pen"></i>

                        <div className="msg">
                            <div className="d-flex clsflx">100+</div>
                            <div className="d-flex">AI Challenges hosted</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Icon;