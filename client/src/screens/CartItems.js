export default function CartItems({imageURL, productName, productColor, productSize, productPrice})  {


    return(
        <div className="item1">
            <div className="product-image">
              <img src={imageURL} alt="Could Not load!"></img>
            </div>
            <div className="product-contents">
              <div className="product-name">
                {productName}
              </div>
              <div className="product-color">
                {productColor}
              </div>
              <div className="product-size">
                Size: {productSize}
              </div>
            </div>
            <div className="product-price-quantity">
              <div className="product-price">
                Price: ${productPrice}
              </div>
              <div className="product-quantity">
                Quantity: 3
              </div>
            </div>
          </div>
    );
}