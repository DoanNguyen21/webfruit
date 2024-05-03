import { memo } from "react";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import cart1Img from "assets/users/images/categories/cart-1.jpg";
import cart2Img from "assets/users/images/categories/cart-2.jpeg";
import cart3Img from "assets/users/images/categories/cart-3.jpg";
import cart4Img from "assets/users/images/categories/cart-4.jpg";
import cart5Img from "assets/users/images/categories/cart-5.jpg";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";

import feature1Img from "assets/users/images/featured/feature-1.jpg";
import feature2Img from "assets/users/images/featured/feature-2.jpg";

import "./style.scss"



const HomePage = () => {

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        }
      };


      const sliderItems = [
        {
          bgImg: cart1Img,
          name: "Cam tươi",
        },
        {
          bgImg: cart2Img,
          name: "Hoa quả khô",
        },
        {
          bgImg: cart3Img,
          name: "Rau củ tươi",
        },
        {
          bgImg: cart4Img,
          name: "Sữa hộp",
        },
        {
          bgImg: cart5Img,
          name: "Thịt bò",
        },
      ];

      const featProducts = {
        all: {
          title: "Toàn bộ",
          products: [
            {
              img: feature1Img,
              name: "Thịt bò nạt",
              price: 20000,
            },
            {
              img: feature2Img,
              name: "Chuối",
              price: 17000,
            },
          ],
        },
        freshMeat: {
          title: "Thịt tươi",
          products: [
            {
              img: feature1Img,
              name: "Thịt bò nạt",
              price: 20000,
            },
          ],
        },
      };

      const renderFeaturedProducts = (data) => {
      const tabList = [];
      const tabPanels = [];




      Object.keys(data).forEach((key, index) => {
      tabList.push(<Tab key={index}>{data[key].title}</Tab>);
  
      const tabPanel = [];
       data[key].products.forEach((item, j) => {
        tabPanel.push(
          <div key={j}>{item.name}</div>
        )
      })
      tabPanels.push(tabPanel);

      });


   return ( 
    <Tabs>
      <TabList>{tabList}</TabList>

      {
        tabPanels.map((item,key) => (
          <TabPanel key={key}>
          <div className="row">
          {item}
          </div>
        </TabPanel>
        ))}
  </Tabs>
   );

      };

    return (
     <>
       {/*Categories Begin*/} 
       <div className="container container__categories_slider">
         <Carousel responsive={responsive} className="categories_slider">
        {
          sliderItems.map((item,key) =>(
      <div className="categories_slider_item" 
        style={{ backgroundImage:`url(${item.bgImg})` }} 
        key={key}
        >  
        <p> {item.name} </p>     
        </div>
          ))}
        </Carousel>   
    </div> 
        {/*Categories End*/} 

        {/* Featured Begin */}
        <div className="container">
         <div className="featured">
          <div className="section-title">
            <h2>Sản phẩm nổi bật</h2>
            </div>
            {renderFeaturedProducts(featProducts)}
         </div>
        </div>
        {/* Featured End */}
     </>
    );    
};

export default memo(HomePage);