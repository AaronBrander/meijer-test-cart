import React, {Fragment} from "react";
import { Row, Col } from "reactstrap";
const AboutUs = (props) => {

    return (
        <Fragment>
            <Row className="py-4">
                <Col>
                    <p>Bridge Street Market is your brand new neighborhood grocery store focused on bringing fresh, affordable, and local products to Grand Rapids’ vibrant West Side. We are proud to offer low prices every day on thousands of staple items while also creating a space to celebrate local and specialty businesses.
                    </p>
                    <p>
                        We have a beautiful 37,000-square-foot store rooted in the heart of the West Side, built with gorgeous, Michigan-specific elements, like reclaimed wood from farms in Hart, Emmett, and Ludington, and historic neighborhood brick. Bridge Street Market is truly the first-of-its-kind in this area, and we are excited to share this new grocery concept with the community. You’ll be happy to find a heavy emphasis on fresh produce, local and artisan groceries, as well as Meijer and national brand products on our shelves. We can’t wait to see you in our store. 
                    </p>

                </Col>
            </Row>
        </Fragment>
    );

}

export default AboutUs;