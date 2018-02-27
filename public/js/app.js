class Product extends React.Component {
    render() {
        return (
            <div className='item'>
                <div className='image'>
                    <img src='images/products/pizza-margherita.jpg' />
                </div>
                <div className='middle aligned content'>
                    <div className='description'>
                        <a>Pizza margherita</a>
                        <p>Just standard pizza margherita.</p>
                    </div>
                    <div className='extra'>
                        <span>Submitted by:</span>
                        <img
                            className='ui avatar image'
                            src='images/avatars/avatar.png'
                        />
                    </div>
                </div>
            </div>
        );
    }
}

class ProductList extends React.Component {
    render() {
        return (
            <div className='ui unstackable items'>
                <Product />
            </div>
        );
    }
}

ReactDOM.render(
    <ProductList />,
    document.getElementById('content')
);
