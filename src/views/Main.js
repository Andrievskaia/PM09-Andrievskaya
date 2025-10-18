import React, {useState} from 'react';
import './Main.css';
import Title from '../components/Title';
import Carousel from '../components/Carousel';
import placeholder1 from '../images/placeholder1.jpg';
import placeholder2 from '../images/placeholder1.webp';
import Menu from '../components/Menu';
import Feedback from '../components/Feedback';
import Contacts from '../components/Contacts';
import Dessert from  '../views/Dessert';
import Coffee from  '../views/Coffee';
import Breakfast from  '../views/Breakfast';
import Books from  '../views/Books';

const Main = React.forwardRef(
    function Main({}, ref) {
        const[page, setPage] = useState('Main')
        const[setModalBox] = useState('none')

        const pages = {
            Dessert: <Dessert/>,
            Coffee: <Coffee/>,
            Breakfast: <Breakfast/>,
            Books: <Books/>
        }
        return (
            <div className="Main">
                <Title/>
                <Carousel className="Placeholder">
                        <img src = {placeholder1} alt="placeholder"></img>
                        <img src = {placeholder2} alt="placeholder"></img>
                </Carousel>
                <div ref={ref.Menu}>
                    <Menu setPage={setPage} setModalBox={setModalBox}></Menu>
                    { pages[page] }
                </div>
                <Feedback/>
                <Contacts/>
            </div>
        );
    }
)

export default Main;