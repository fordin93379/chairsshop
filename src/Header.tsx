import  './Styles/Header.css'

export default function Header(){
    return <div className="header">
        <img 
            src="https://m.media-amazon.com/images/I/41s+QrrJDKL.jpg"
            alt="logoOfShop"
            className="logo"
        />
        <h1 className="title">Присядь, отдохни!</h1>
        <div className="buttonsContainer">
            <tr>
                <td>
                    <button className="but">О нас</button>
                </td>
                <td>
                    <button className="but">Контакты</button>
                </td>
                <td>
                    <button className="but">Корзина</button>
                </td>
            </tr>
            <button className="shopButton but"> МАГАЗИН </button>
        </div>
    </div>
}