import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { RiSettingsLine } from 'react-icons/ri';
import { MdOutlineCheckBoxOutlineBlank } from 'react-icons/md';
import { BsBox } from 'react-icons/bs';
import { BsPersonSquare } from 'react-icons/bs';
import { LuWallet } from 'react-icons/lu';
import { BiSolidOffer, BiSolidWalletAlt } from 'react-icons/bi';
import { MdOutlineLiveHelp } from 'react-icons/md';
import { MdArrowForwardIos } from 'react-icons/md';
import { FcMoneyTransfer } from 'react-icons/fc';
import { GoChecklist } from 'react-icons/go';
import { BsBagCheckFill } from 'react-icons/bs';
import { CanvasJSChart } from 'canvasjs-react-charts'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import Table from 'react-bootstrap/Table';
import * as React from 'react';
import "./Nav.css";



// var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const Nav = () => {
    const options = {

        axisX: {
            gridThickness: 0,
            tickLength: 0,
            lineThickness: 0,
            labelFormatter: function () {
                return " ";
            }
        },
        axisY: {
            gridThickness: 0,
            tickLength: 0,
            lineThickness: 0,
            labelFormatter: function () {
                return " ";
            }
        },

        title: {
            text: "Overview (Monthly earning)",

        },
        // legend: {
        //     verticalAlign: "bottom",
        //     horizontalAlign: "center"
        // },
        data: [

            {
                color: "blue",
                type: "column",
                showInLegend: true,
                legendText: " ",
                dataPoints: [
                    { x: 1, y: 100, label: "Jan" },
                    { x: 2, y: 200, label: "Feb" },
                    { x: 3, y: 150, label: "Mar" },
                    { x: 4, y: 251, label: "Apr" },
                    { x: 5, y: 110, label: "May" },
                    { x: 6, y: 54, label: "Jun" },
                    { x: 7, y: 65, label: "Jul" },
                    { x: 8, y: 44, label: "Aug" },
                    { x: 9, y: 245, label: "Sep" },
                    { x: 10, y: 213, label: "Oct" },
                    { x: 11, y: 111, label: "Nov" },
                    { x: 12, y: 245, label: "Dec" },
                ]
            }
        ]
    }





    const options1 = {
        animationEnabled: true,
        title: {
            text: "Customers",
        },
        subtitles: [{
            text: "65% Total new customers",
            verticalAlign: "center",
            fontSize: 21,
            dockInsidePlotArea: true
        }],
        data: [{
            type: "doughnut",
            // showInLegend: true,
            // indexLabel: "{name}: {y}",
            yValueFormatString: "#,###'%'",
            dataPoints: [
                { name: "Old customers", y: 30 },
                { name: "New customers", y: 30 },
                { name: "Other", y: 5 },
            ]
        }]
    }

    return (
        <div className="container" >
            <div class="main-content ">
                <div style={{ display: "flex" }}>

                    <RiSettingsLine style={{ color: "white" }} className='dash-logo' />
                    <h4 style={{ color: "white" }} className='dash'>Dashboard</h4>
                </div>
                <div>

                    <Table borderless className='sideb'>

                        <tbody >
                            <tr >
                                <td style={{ backgroundColor: "transparent" }}>
                                    <Button variant=""
                                        className='btn-class'  >

                                        <MdOutlineCheckBoxOutlineBlank className='dash-items-logo' /><p className='dash-items-text'>Dashboard</p><MdArrowForwardIos className='arrow' /></Button>{' '}
                                </td>

                            </tr>
                            <tr>
                                <td style={{ backgroundColor: "transparent" }}>
                                    <Button variant="" className='btn-class'
                                    ><BsBox className='dash-items-logo' /><p className='dash-items-text' style={{ marginLeft: ".4rem" }}>Product</p><MdArrowForwardIos className='arrow arrow2' /></Button>{' '}</td>

                            </tr>
                            <tr>
                                <td style={{ backgroundColor: "transparent" }}>
                                    <Button variant="" className='btn-class'><BsPersonSquare className='dash-items-logo' />
                                        <p className='dash-items-text'>Customers</p><MdArrowForwardIos className='arrow' /></Button>{' '}</td>

                            </tr>
                            <tr>
                                <td style={{ backgroundColor: "transparent" }}>
                                    <Button variant="" className='btn-class'><LuWallet className='dash-items-logo' /><p className='dash-items-text' style={{ marginLeft: "0.4rem" }}>Income</p><MdArrowForwardIos className='arrow arrow5' /></Button>{' '}</td>

                            </tr>
                            <tr>
                                <td style={{ backgroundColor: "transparent" }}>
                                    <Button variant="" className='btn-class'><BiSolidOffer className='dash-items-logo' /><p className='dash-items-text' style={{ marginLeft: "0.4rem" }}>Promote</p><MdArrowForwardIos className='arrow arrow4' /></Button>{' '}</td>

                            </tr>
                            <tr>
                                <td style={{ backgroundColor: "transparent" }}>
                                    <Button variant="" className='btn-class'><MdOutlineLiveHelp className='dash-items-logo' /><p className='dash-items-text' style={{ marginLeft: ".6rem" }} >Help</p><MdArrowForwardIos className='arrow arrow6' /></Button>{' '}</td>

                            </tr>
                        </tbody>
                    </Table>
                </div>


            </div>
            <div class="sidebar">
                <div className="fixed">
                    <Navbar className="bg-body-tertiary justify-content-between">
                        <h4 className='name'>Hello Rushikesh</h4>
                        <Form inline>
                            <Row>
                                <Col xs="auto" >
                                    <Form.Control
                                        type="text"
                                        placeholder="Search"

                                    />
                                </Col>

                            </Row>
                        </Form>
                    </Navbar>




                </div>
            </div>
            <div className="responsive-boxes">
                <div className="box-pair">
                    <div className="box">
                        <p className='boxhead' >Earnings <p className='earn'>$198k</p></p>
                        <FcMoneyTransfer className='box-icon' />
                    </div>
                    <div className="box">
                        <p className='boxhead' >Orders <p className='earn'> $2.4k</p></p>
                        <GoChecklist className='box-icon' />
                    </div>
                </div>
                <div className="box-pair">
                    <div className="box " >
                        <p className='boxhead' >Balance <p className='earn'>$2.4k</p></p>
                        <BiSolidWalletAlt className='box-icon' />
                    </div>
                    <div className="box"><p className='boxhead' >Total sales <p className='earn'>$89k</p></p>
                        <BsBagCheckFill className='box-icon' /></div>
                </div>
                <div className="other-box">
                    <div className="big-box" >
                        <div>
                            <CanvasJSChart options={options} />
                        </div>
                    </div>
                    <div className="small-box">
                        <div>
                            <CanvasJSChart options={options1} />
                        </div>
                    </div>
                </div>
                <div className="footer-box">
                    <div className="fbox" >
                        <div>
                            <Table className='bttable'>
                                <thead>
                                    <tr>
                                        <th className='heading'><h5>Product Sell</h5></th>
                                        <th><Form inline>
                                            <Row>
                                                <Col xs="auto">
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Search"
                                                        className=" mr-sm-2"
                                                    />
                                                </Col>

                                            </Row>
                                        </Form></th>
                                        <th></th>
                                        <th><DropdownButton variant="transparent" title="Last 30days">
                                            <Dropdown.Item href="#/action-1">Last 1 day</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Last 15 dasy</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Last 1 year</Dropdown.Item>
                                        </DropdownButton></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Product name</td>
                                        <td>Stock</td>
                                        <td>Price</td>
                                        <td>Total sales</td>
                                    </tr>
                                    <tr>
                                        <td><h4>Abstract 3D </h4> <div style={{ display: "flex" }}><img src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1697241600&semt=sph" className='img' alt=" image" />
                                            <p>Lorem jsfgusgf fefuff uff  uaf fgsf</p></div></td>
                                        <td>32 in stocks</td>
                                        <td>$49.99</td>
                                        <td>20</td>
                                    </tr>
                                    <tr>
                                        <td><h4>Sarphens illustration </h4><div style={{ display: "flex" }}><img src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1697241600&semt=sph" className='img' alt=" image" />
                                            <p>Lorem jsfgusgf fefuff uff  uaf fgsf</p></div></td>
                                        <td>32 in stocks</td>
                                        <td>$45.99</td>
                                        <td>20</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>

                </div>
            </div>

        </div >);
}




export default Nav;