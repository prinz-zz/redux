
export default function ProductDetails(){
  return (
    <div className="ui grid container">
      
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src='' />
              </div>
              <div className="column rp">
                <h1></h1>
                <h2>
                  <a className="ui teal tag label"></a>
                </h2>
                <h3 className="ui brown block header"></h3>
                <p></p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
     
    </div>
  );
};

