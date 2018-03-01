# Podstawy React

## Ćwiczenie 1

1. Dodaj do app.js:
```javascript

class ProductList extends React.Component {
    render() {
        return (
            <div className='ui unstackable items'>
                Hello, friend! I am a basic React component.
            </div>
        );
    }
}

```

2. Uruchom:

```javascript

yarn start

```

3. Przejdź do http://localhost:3000 i uruchom konsole (F12)

4. Zamień linijkę:

```javascript

<script src="js/app.js"></script>

```

na:

```javascript

<script type="text/babel" src="js/app.js"></script>

```

5. Odśwież stronę

6. Dodaj do app.js (na sam koniec pliku):

```javascript
ReactDOM.render(
    <ProductList />,
    document.getElementById('content')
);
```

7. Odśwież stronę

## Ćwiczenie 2

1. Dodaj do app.js:

```javascript
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
```

2. Zmień komponent ProductList tak, aby wyglądał w następujący sposób:

```javascript
class ProductList extends React.Component {
    render() {
        return (
            <div className='ui unstackable items'>
                <Product />
            </div>
        );
    }
}
```

3. Odśwież stronę

## Ćwiczenie 3

1. Dodaj do public/js plik data.js

```javascript
window.Data = {
    products: [
        {
            id: 1,
            title: 'Pizza margherita',
            description: 'Just pizza margherita.',
            url: '#',
            votes: 5,
            submitterAvatarUrl: 'images/avatars/avatar.png',
            productImageUrl: 'images/products/pizza-margherita.jpg',
        },
    ]
};
```

2. Zmodyfikuj ProductList

```javascript
class ProductList extends React.Component {
    render() {
        const product = window.Data.products[0];

        return (
            <div className='ui unstackable items'>
                <Product
                    id={product.id}
                    title={product.title}
                    description={product.description}
                    url={product.url}
                    votes={product.votes}
                    submitterAvatarUrl={product.submitterAvatarUrl}
                    productImageUrl={product.productImageUrl}
                />
            </div>
        );
    }
}
```

3. Zmodyfikuj Product

```javascript
class Product extends React.Component {
    render() {
        return (
            <div className='item'>
                <div className='image'>
                    <img src={this.props.productImageUrl} />
                </div>
                <div className='middle aligned content'>
                    <div className='header'>
                        <a>
                            <i className='large caret up icon' />
                        </a>
                        {this.props.votes}
                    </div>
                    <div className='description'>
                        <a href={this.props.url}>
                            {this.props.title}
                        </a>
                        <p>
                            {this.props.description}
                        </p>
                    </div>
                    <div className='extra'>
                        <span>Submitted by:</span>
                        <img
                            className='ui avatar image'
                            src={this.props.submitterAvatarUrl}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
```

4. Odśwież stronę

## Ćwiczenie 4

1. Zmodyfikuj ProductList

```javascript
class ProductList extends React.Component {
    render() {
        const productComponents = window.Data.products.map((product) => (
            <Product
                key={'product-' + product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                url={product.url}
                votes={product.votes}
                submitterAvatarUrl={product.submitterAvatarUrl}
                productImageUrl={product.productImageUrl}
            />
        ));
        return (
            <div className='ui unstackable items'>
                {productComponents}
            </div>
        )
    }
}
```

2. Odśwież stronę

3. Zmodyfikuj ProductList (dodanie sortowania)

```javascript
class ProductList extends React.Component {
    render() {
        const products = window.Data.products
            .concat()
            .sort((a, b) => (
                b.votes - a.votes
            ));
        const productComponents = products.map((product) => (
            <Product
                key={'product-' + product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                url={product.url}
                votes={product.votes}
                submitterAvatarUrl={product.submitterAvatarUrl}
                productImageUrl={product.productImageUrl}
            />
        ));
        return (
            <div className='ui unstackable items'>
                {productComponents}
            </div>
        )
    }
}
```

## Ćwiczenie 5

1. Dodaj metodę do ProductList

```javascript
class ProductList extends React.Component {
    handleProductUpVote(productId) {
        console.log(productId + ' was upvoted.');
    }
```

2. Zmodyfikuj ProductList

```javascript
        const productComponents = products.map((product) => (
            <Product
                key={'product-' + product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                url={product.url}
                votes={product.votes}
                submitterAvatarUrl={product.submitterAvatarUrl}
                productImageUrl={product.productImageUrl}
                onVote={this.handleProductUpVote}
            />
        ));
```

3. Dodaj metodę do Product

```javascript
    handleUpVote() {
        this.props.onVote(this.props.id);
    }
```

4. Zmodyfikuj render() w Product

```javascript
                <div className='middle aligned content'>
                    <div className='header'>
                        <a onClick={this.handleUpVote}>
                            <i className='large caret up icon' />
                        </a>
                        {this.props.votes}
                    </div>
```

5. Odśwież stronę

6. Dodaj konstruktor do Product

```javascript
    constructor(props) {
        super(props);
        this.handleUpVote = this.handleUpVote.bind(this);
    }
```

7. Odśwież stronę i zagłosuj

## Ćwiczenie 6

1. Dodaj konstruktor do ProductList

```javascript
    constructor(props) {
        super(props);
        this.state = {
            products: [],
        };
    }
```

2. Zmodyfukuj render() w ProductList

```javascript
    render() {
        const products = this.state.products
            .concat()
            .sort((a, b) => (
                b.votes - a.votes
            ));
```

3. Dodaj metodę do ProductList

```javascript
    componentDidMount() {
        this.setState({ products: window.Data.products });
    }
```

4. Zmodyfikuj handleProductUpVote()

```javascript
    handleProductUpVote(productId) {
        const nextProducts = this.state.products.map((product) => {
            if (product.id === productId) {
                return Object.assign({}, product, {
                    votes: product.votes + 1,
                });
            } else {
                return product;
            }
        });
        this.setState({
            products: nextProducts,
        });
    }
```

5. Zmodyfikuj konstruktor ProductList

```javascript
    constructor(props) {
        super(props);
        this.state = {
            products: [],
        };

        this.handleProductUpVote = this.handleProductUpVote.bind(this);
    }
```

6. Odśwież stronę

## Ćwiczenie 7

1. Zmodyfikuj handleUpVote() w Product

```javascript
    handleUpVote = () => (
        this.props.onVote(this.props.id)
    );
```

2. Usuń konstruktor w Product

3. Zmodyfikuj handleUpVote() w ProductList

```javascript
handleProductUpVote = (productId) => {
```

4. Usuń konstruktor w ProductList

5. Dodaj do ProductList

```javascript
class ProductList extends React.Component {
    state = {
        products: [],
    };
```

6. Odśwież stronę