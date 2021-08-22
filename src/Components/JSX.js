import React from 'react';
import { Component } from 'react';

class JSX extends Component {
    render() {
        var objects = [
            {
                id: 1,
                name: 'Steve Bruce',
                year: 1942

            }, {
                id: 2,
                name: 'Hwang Cho',
                year: 1945

            }
            , {
                id: 3,
                name: 'Mr.Hoa',
                year: 1973

            }
        ];
        var listElement = objects.map((item, index) => {
            return <div key={item.id}>
                <h1>{item.name}</h1><br />
                <p>{item.year}</p>
            </div>
        });
        console.log(listElement);
        return (
            <div>
                <div>
                {listElement}
                </div>
            </div>


        );
    }
}

export default JSX;
