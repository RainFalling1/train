import React, { useState, useEffect } from 'react';
import {
  Spin, Row, Col,Alert
} from 'antd';
import { getAll, getMoreByUrl } from '../../services/Popular';
// import './Popular.css';
import PopularCard from '../../components/PopularCard/PopularCard';
import InfiniteScroll from 'react-infinite-scroller';
// import { Link } from 'react-router-dom';
import PopularNav from "./PopularNav";


const Popular = () => {
  const [list, setList] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [pageType, setPageType] = useState("all");
  const [showAlert, setShowAlert] = useState(true);



  useEffect(() => {
    // getMore(null, 1, [])
    // 初始化

    // eslint-disable-next-line no-use-before-define
    const type = GetQueryString("type");
    // eslint-disable-next-line no-use-before-define
    getMore(type, 1, []);

  }, []);

  // 获得更多数据
  // eslint-disable-next-line no-shadow
  const getMore = (pageType, pageNum, pageList) => {
    setPageType(pageType);
    if (pageType === 'all') {
      // 拉取全部
      getAll(pageNum).then(
        (res) => {
          if (res.data) {
            res.data.items && setList([...pageList, ...res.data.items]);
            setPageNum(pageNum + 1);
          }
        },
      ).catch(() => {
        setShowAlert(true);
        setList([]);
      });
    } else {
      getMoreByUrl(pageType, pageNum).then(
        (res) => {
          setList([...pageList, ...res.data.items]);
          setPageNum(pageNum + 1);
        },
      ).catch(() => {
        setShowAlert(true);
        setList([]);
      });
    }
  };

  const updateList = (type) =>{
    setList([]);
    getMore(type, 1, []);
  };

  const GetQueryString = (name) =>{
    const reg = new RegExp(`(^|&)${  name  }=([^&]*)(&|$)`, "i");
    const r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]);
    return null;
  }




  return (
      // eslint-disable-next-line react/jsx-filename-extension
    <div style={{ flexDirection: 'column', alignItems: 'center', display: 'flex' }}>
      <PopularNav callback={updateList} currentType={pageType}/>
      {list && list.length > 0
        ? (
          <div>
            <InfiniteScroll
              loadMore={() => getMore(pageType, pageNum, list)}
              loader={null}
              hasMore
              initialLoad
            >
              {/* 卡片列表 */}
              {/* <div className={"listArea"}> */}
              <Row type="flex" justify="center" align="center">
                {
                                    list.map(
                                      (i, index) => (
                                        <Col xs={24} sm={12} md={8} lg={6}>
                                          <PopularCard item={i} key={i.id} index={index} />
                                        </Col>
                                      ),
                                    )
                                }
              </Row>

              {/* </div> */}
            </InfiniteScroll>
          </div>
        )
        : <Spin size="large" tip="加载中..." />}
      {list && list.length > 0 && <Spin size="large" tip="加载中..." />}

      <div style={{ display: showAlert ? 'block' : 'none' }}>
        <Alert message="别刷太快噢亲～" type="warning" showIcon />
      </div>
    </div>

  );
};
export default Popular;
