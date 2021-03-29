import React, {useState, useEffect} from "react";
import {Button, Spin} from "antd";
import {getAll, getMoreByUrl} from "../../services/Popular";
import "./Popular.css";
import PopularCard from "../../components/PopularCard/PopularCard";
import InfiniteScroll from 'react-infinite-scroller';

const Popular = (props) => {
    const [list, setList] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [pageNum, setPageNum] = useState(1);
    const [pageType, setPageType] = useState(undefined);

    const typeList = [
        {
            label: "All",
            type: undefined
        },
        {
            label: "Javascript",
            type: "+language:javascript"
        },
        {
            label: "Ruby",
            type: "+language:Ruby"
        },
        {
            label: "Java",
            type: "+language:Java"
        },
        {
            label: "CSS",
            type: "+language:CSS"
        },
    ]


    useEffect(() => {
        getMore(null, 1, [])
    }, []);

    const getMore = (pageType, pageNum, pageList) => {
        setHasMore(true)
        if (!pageType) {
            //拉取全部
            getAll().then(
                res => {
                    if (res.data){
                        res.data.items && setList([...pageList, ...res.data.items]);
                        setPageNum(pageNum + 1);
                        setHasMore(false);
                    }

                }
            );
        } else {
            getMoreByUrl(pageType, pageNum).then(
                res => {
                    setList([...pageList, ...res.data.items]);
                    setPageNum(pageNum + 1)
                    setHasMore(false)
                }
            )
        }

    };

    //顶部六个选择
    const TopNav = () => {
        return (

            <div style={{
                flexDirection: 'row',
                alignItems: 'center',
                display: 'flex',
                listStyle: 'none',
                fontWeight: 'bold',
            }}>
                {
                    typeList.map((i, index) =>
                        <a key={index} style={{margin: "10px", textDecoration: 'none'}}
                           href="#"
                           onClick={() => {
                               setPageType(i.type);
                               setList([]);
                               getMore(i.type, 1, []);
                           }} className={"topNavBtn"}>
                            {i.label}
                        </a>
                    )
                }

            </div>


        )
    }


    return (
        <div style={{
            overflow: "auto", display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: "center"
        }}
        >
            <TopNav/>
            {list && list.length > 0 ? <InfiniteScroll
                loadMore={() => getMore(pageType, pageNum, list)}
                loader={null}
                initialLoad={false}
                hasMore={hasMore}
            >
                {/*卡片区域*/}
                <div className={"listArea"}>
                    {
                         list.map(
                            (i, index) => <PopularCard item={i} key={i.id} index={index}/>
                        )
                    }
                </div>
            </InfiniteScroll> : <Spin size={"large"} tip={"加载中..."}/>}
            {list && list.length > 0 && <Spin size={"large"} tip={"加载中..."}/>}
        </div>


    )
};


export default Popular;
