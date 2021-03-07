import React from 'react'
import TourCarousel from 'components/TourCarousel'
import BlogItem from 'components/BlogItem'

// Blog images
import BlogImg from 'assets/images/blog/item.png'
import BlogIcon from 'assets/images/blog/blog.svg'

// Catalog Image
import Catalog from 'assets/images/blog/catalog.svg'

// Social Icons
import Social1 from 'assets/images/icons/social1.svg'
import Social2 from 'assets/images/icons/social2.svg'
import Social3 from 'assets/images/icons/social3.svg'
import Social4 from 'assets/images/icons/social4.svg'
import Social5 from 'assets/images/icons/social5.svg'
import Social6 from 'assets/images/icons/social6.svg'

// Call & Write Icons
import Call from 'assets/images/icons/call.svg'
import SMS from 'assets/images/icons/message.svg'


const blogItemData = [
	{
		title: 'My gastro tour in Armenia',
		image: BlogImg
	},
	{
		title: 'My gastro tour in Armenia',
		image: BlogImg
	},
	{
		title: 'My gastro tour in Armenia',
		image: BlogImg
	},
	{
		title: 'My gastro tour in Armenia',
		image: BlogImg
	},
	{
		title: 'My gastro tour in Armenia',
		image: BlogImg
	},
	{
		title: 'My gastro tour in Armenia',
		image: BlogImg
	},
	{
		title: 'My gastro tour in Armenia',
		image: BlogImg
	},
	{
		title: 'My gastro tour in Armenia',
		image: BlogImg
	},
]


const carsouelConfig = {
	slidesToShow: 5,
	slidesToScroll: 1,
	responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        arrows: false,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 2,
        arrows: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
}

const Footer = () => {
	return(
		<footer>
			<div className="fluid">
				<div className="d-flex align-items-center">
					<div className="p-3 bg-white blog-scroll" style={{flex: 1, overflow: 'hidden'}}>
						<div className="blog-left float-left">
							<img src={BlogIcon} className="img-responsive"/>
						</div>
						<div className="carousel">
							<TourCarousel 
								items={
									blogItemData.map((item, index) => <BlogItem data={item} key={index}/> )
								}
								config={carsouelConfig}
							/>
						</div>
					</div>
					<img src={Catalog} height="120" className="ml-4"/>
				</div>
				<div className="d-flex mt-4 flex-wrap">
					<div className="footer-menu">
						<div className="menu-title"><b>Tours</b></div>
						<ul>
							<li>Classic tours</li>
							<li>Tours with guarantee departures</li>
							<li>Regional tours</li>
							<li>Active tours</li>
							<li>One day tours</li>
							<li>Themed tours</li>
						</ul>
					</div>
					<div className="footer-menu">
						<div className="menu-title"><b>Services</b></div>
						<ul>
							<li>Rent a transport</li>
							<li>Book an accommodation</li>
							<li>Meals end entertainments</li>
							<li>Tours to Armenia,Georgia and Iran</li>
							<li>Transfer from and to airport</li>
							<li>MICE</li>
						</ul>
					</div>
					<div className="footer-menu">
						<div className="menu-title"><b>For tourists</b></div>
						<ul>
							<li>Who are we</li>
							<li>What expect from us</li>
							<li>Why Tour Academy</li>
							<li>Discover Armenia</li>
							<li>FAQ’s</li>
							<li>Reviews</li>
						</ul>
					</div>
					<div className="footer-menu">
						<div className="menu-title"><b>Contact us</b></div>
						<ul>
							<li>Mail: touracademy@gmail.com</li>
							<li>Mobile: +37498300852</li>
							<li>Phone: +37410525225</li>
							<li>Adress: Yerevan</li>
						</ul>
					</div>
					<div className="footer-menu social">
						<div className="menu-title"><b>Follow us</b></div>
						<div className="d-grid">
							<a href="#"><img src={Social1}/></a>
							<a href="#"><img src={Social2}/></a>
							<a href="#"><img src={Social3}/></a>
							<a href="#"><img src={Social4}/></a>
							<a href="#"><img src={Social5}/></a>
							<a href="#"><img src={Social6}/></a>
						</div>
					</div>
					<div className="footer-menu call">
						<div className="menu-title"><b>Call / Write</b></div>
						<div className="d-grid">
							<a href="#"><img src={Call}/></a>
							<a href="#"><img src={SMS}/></a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer