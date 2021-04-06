/**
 * popular顶部六个路由
 */
// import {useState} from 'react';
import {Link} from "react-router-dom";
// eslint-disable-next-line no-unused-vars
const PopularNav = ({callback,currentType}) => {


    const typeList = [
        {
            label: 'All',
            type: "all",
        },
        {
            label: 'Javascript',
            type: '+language:javascript',
        },
        {
            label: 'Ruby',
            type: '+language:Ruby',
        },
        {
            label: 'Java',
            type: '+language:Java',
        },
        {
            label: 'CSS',
            type: '+language:CSS',
        },
    ];

    return (
        // eslint-disable-next-line react/jsx-filename-extension
        <div style={{
            flexDirection: 'row',
            alignItems: 'center',
            display: 'flex',
            listStyle: 'none',
            fontWeight: 'bold',
        }}
        >
            {
                typeList.map((i, index) => {
                    // eslint-disable-next-line no-unused-vars
                    const navStr = `/popular?type=${i.type}`;
                    return(
                        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
                        <a onClick={() => {
                            callback && callback(i.type)
                        }}
                           key={index}
                        >
                            <Link
                                style={{margin: '10px 10px', textDecoration: 'none', fontSize: '16px'}}
                                to={navStr}
                                className={(currentType === i.type) ? 'topNavBtnSelect' : 'topNavBtn'}
                            >
                                {i.label}
                            </Link>
                        </a>

                    )
                } )
            }

        </div>
    );
};
export default PopularNav;
