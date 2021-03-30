import React, {useEffect} from 'react';
import SHOP_DATA from "./shope.data";
import PreviewCollection from '../../Components/preview.component/preview.component'


class ShopPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            collections: SHOP_DATA
        };

    }

    render() {
        const {collections} = this.state;
        return (
            <div className={'shop-page'}>
                {
                    collections.map(({id, ...otherremainings}) =>(
                        <PreviewCollection key={'id'} {...otherremainings} />
                    ))
                }
            </div>

        )
    }


}

export default ShopPage;