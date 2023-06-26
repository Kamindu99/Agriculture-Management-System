import React,{useState} from 'react'
import Header from './Header';
import Footer from './Footer';

function Documents() {


    const [documents, setDocuments] = useState([
        {
            id: 1,
            name: "Agriculture Life Cycle",
            files: "122 pages",
            date: "Jan 21, 2020"
        },
        {
            id: 2,
            name: "How to grow a Plant",
            files: "52 Files",
            date: "Jan 21, 2020"
        },
        {
            id: 3,
            name: " Fertilizer for Plants",
            files: "89 Files",
            date: "Jan 21, 2020"
        },
        {
            id: 4,
            name: "Best Seeds for Plants",
            files: "105 pages",
            date: "Jan 21, 2020"
        },
        {
            id: 5,
            name: "New Equipments for Agriculture",
            files: "22 pages",
            date: "Jan 21, 2020"
        },
    ])


    return (
        <div>
            <Header />
            <div className="pagemargin">
                <div className="">
                    <div >
                        <div class="col-md-12 pt-4 d-flex justify-content-center">
                            <h3 style={{ fontWeight: '700' }}>Agriculture Documents</h3>
                        </div>
                        <div class="col-md-12 d-flex justify-content-center">
                            <h5 >
                                Here you can find the latest documents related to agriculture
                            </h5>
                        </div>
                    </div>

                    <div class=" documentpagecss ">
                        <div class="container d-flex justify-content-center">
                            <ul class="list-group mt-5 text-white">
                                { documents.map((document) => (

                                <li class="list-group-item d-flex justify-content-between align-content-center">
                                    <div class="d-flex flex-row">
                                        <img src="https://img.icons8.com/color/100/000000/folder-invoices.png" className='me-3' width="40" />
                                        <div class="ml-2">
                                            <h6 class="mb-0 ">{document.name}</h6>
                                            <div class="about">
                                                <span>
                                                    {document.files}
                                                </span>
                                                <span>
                                                    {document.date}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div >
                                   <i class="fa fa-download fa-2x mt-1"></i>
                                    </div>
                                </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Documents