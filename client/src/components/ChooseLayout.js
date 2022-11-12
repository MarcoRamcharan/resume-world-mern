import layout1 from '../layouts/layout1.jpeg'
import layout2 from '../layouts/layout2.jpeg'
import layout3 from '../layouts/layout3.jpeg'
import '../css/chooseLayout.css'


const ChooseLayout = ({setLay}) => {


    return ( 
        <div className="chooseLayout">
        <div className="chooseLayout-heading">
            <h2>CHOOSE LAYOUT</h2>
        </div>
        <div className="layouts">
            <div className="layout">
                <img src={layout1} alt="kjgk" />
                <div className="txt">
                <span onClick={() => setLay('layout1')}>Layout 1</span>
                </div>
            </div>
            <div className="layout">
                <img src={layout2} alt="gkjgk" />
                <div className="txt">
                <span onClick={() => setLay('layout2')}>Layout2</span>
                </div>
            </div>
            <div className="layout">
                <img src={layout3} alt="jhbkjkjgk" />
                <div className="txt">
                <span onClick={() => setLay('layout3')}>Layout 3</span>
                </div>
            </div>
        </div>
    </div>
     );
}
 
export default ChooseLayout;