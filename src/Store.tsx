import Product from "./interfaces";
import "./Styles/Store.css"
import { Component} from "react";
class Store extends Component<{products: Product[]}> {
    constructor(props : {products: Product[]}) {
        super(props);
    }
    render() : JSX.Element {
        let toRender : Array<JSX.Element> = [];
        
        this.props.products.forEach((product : Product, index : number) => {
            toRender.push(<div className="cardBody">
                <img src={product.img} className="cardImg"></img>
                <h2 className="cardName">{product.name}</h2>
                <button className="buyButton">Купить</button>
            </div>);
        })
        return <div className="store">
            {toRender}
        </div>
    }
}
export default Store;