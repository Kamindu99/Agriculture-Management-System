import React ,{useState} from 'react'
import Header from './Header';
import Footer from './Footer';

function Bolgs() {

    const [blogs, setBlogs] = useState([
        {
            id: 1,
            title:'Agriculture is the Backbone',
            blog : "Agriculture is the backbone of our economy. It provides us with food, clothing, and shelter.The main occupation of our country is agriculture. About seventy percent of our population dependson agriculture. One-third of our National income comes from agriculture. Our economy is based on agriculture. So the progress of agriculture means the progress of our economy.",
            name: "Kamindu Gayantha",
            position: "B.Sc. Agriculture",
            image: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687380859/MyImages/Myimages_27_yw37mj.jpg"
        },
        {
            id: 2,
            title:'Important of Agriculture',
            blog : "Sri Lanka is an agricultural country. Most of the people in Sri Lanka are farmers. They produce various types of crops.They grow paddy, corn, chillies, vegetables, fruits and various types of grains. They sell their surplus crops and earn money.They use this money to buy their other needs. So, agriculture is very important for our economy and our life too.",
            name: "Gayantha Wangisinghe",
            position: "SE Undergraduate",
            image: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687380859/MyImages/Myimages_29_yk4nlt.jpg"
        },
        {
            id: 3,
            title:'Agro Chemicals',
            blog : "Agro Chemicals are the chemicals which are used in agriculture. They are used to kill pests and insects. .They are used to protect crops from diseases. They are used to increase the production of crops. They are used to increase the fertility ofthe soil. They are used to increase the quality of the crops. They are used to increase.",
            name: "Gayantha Kamindu",
            position: "CEO of Green World",
            image: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687384669/2023-06-18_1.18.52_AM_an6meh.png"
        },
        {
            id: 4,
            title:'Healthy Soil',
            blog : "Healthy soil is the foundation of the food system. We rely on healthy soil to grow everything from fruits and vegetables to feed for livestock. Healthysoil is essential to ensure the continued growth of crops, and the health of animals and humans. Soil is a living ecosystem, and is a farmers most preciousresource. It is the foundation of the food system and plays a critical role in feeding our planet. Soil is the basis for sustenance for 7 billion people.",
            name: "Dr. Wanigasinghe",
            position: "Dept. Agriculture",
            image: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687380858/MyImages/Myimages_41_u2hisq.jpg"
        },
        {
            id: 5,
            title:'Things of Agriculture',
            blog : "Seeds, Plants, Fertilizers, and Equipments are the main things which are used in agriculture. Seeds are the primary basis for human sustenance.Plants are mainly multicellular organisms, predominantly photosynthetic. Fertilizer is any material of natural or synthetic origin that is appliedto soils or to plant tissues to supply one or more plant nutrients essential to the growth of plants. Equipments are the different types of machineryused agriculture.",
            name: "Mr. Anil Perera",
            position: "Student",
            image: "https://res.cloudinary.com/dmfljlyu1/image/upload/v1687378622/MyImages/Myimages_18_aywf3l.jpg"
        }
    ])

    return (
        <div>
            <Header />
            <div className="pagemargin">
                <div className="">

                    <div class="mb-5">
                        <div class="col-md-12 pt-4 d-flex justify-content-center">
                            <h3 style={{fontWeight:'700'}}>Blogs</h3>
                        </div>
                        <div class="col-md-12 d-flex justify-content-center">
                            <h5 >
                                Here you can find the latest blogs related to agriculture
                            </h5>
                        </div>
                    </div>

                    <div class="container mynewblogs">
                        <div class="row justify-content-center ms-5 me-5 align-items-stretch">

                            {blogs.map((blog) => (
                            <div class="col-md-4">
                                <div class="card d-flex mx-auto">
                                    <div class="card-image">
                                        <img class="img-fluid d-flex mx-auto" src={blog.image} />
                                    </div>
                                    <div class="card-text">
                                        <div class="card-title mb-2">
                                            {blog.title}
                                        </div>
                                        &ldquo; {blog.blog} &rdquo;
                                    </div>
                                    <div class="footer">
                                        <span id="name">  {blog.name}<br /></span>
                                        <span id="position">  {blog.position}</span>
                                    </div>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Bolgs