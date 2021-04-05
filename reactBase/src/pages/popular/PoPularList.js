import React, { useState, useEffect } from 'react';
import {
  Button, Spin, Row, Col,
} from 'antd';
import { getAll, getMoreByUrl } from '../../services/Popular';
import './Popular.css';
import PopularCard from '../../components/PopularCard/PopularCard';
import InfiniteScroll from 'react-infinite-scroller';
import { Link } from 'react-router-dom';

const PopularList = (props) => {
  const [list, setList] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [pageNum, setPageNum] = useState(1);
  const [pageType, setPageType] = useState(undefined);
  const [preType, setPreType] = useState(undefined);

  // if (this.props.location){
  //
  // }
  const typeList = [
    {
      label: 'All',
      type: undefined,
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

  useEffect(() => {
    // getMore(null, 1, [])
    // 初始化
    getAll(pageNum).then(
      (res) => {
        if (res.data) {
          res.data.items && setList(res.data.items);
          setPageNum(pageNum + 1);
        }
      },
    );
  }, []);

  const getMore = (pageType, pageNum, pageList) => {
    setHasMore(true);
    if (!pageType) {
      // 拉取全部
      getAll(pageNum).then(
        (res) => {
          if (res.data) {
            res.data.items && setList([...pageList, ...res.data.items]);
            setPageNum(pageNum + 1);
            setHasMore(false);
          }
        },
      );
    } else {
      getMoreByUrl(pageType, pageNum).then(
        (res) => {
          setList([...pageList, ...res.data.items]);
          setPageNum(pageNum + 1);
          setHasMore(false);
        },
      );
    }
  };

  // 顶部六个选择
  const TopNav = () => {
    const path = {
      pathname: `/list?type=${pageType || 'all'}`,
    };
    return (

      <div style={{
        flexDirection: 'row',
        alignItems: 'center',
        display: 'flex',
        listStyle: 'none',
        fontWeight: 'bold',
      }}
      >
        {
                        typeList.map((i, index) => (
                          <Link
                            key={index}
                            style={{ margin: '10px 10px', textDecoration: 'none', fontSize: '16px' }}
                            onClick={() => {
                              setPageType(i.type);
                              setList([]);
                              getMore(i.type, 1, []);
                            }}
                            to={path}
                            className={(pageType === i.type) ? 'topNavBtnSelect' : 'topNavBtn'}
                          >
                            {i.label}
                          </Link>
                        ))
                    }

      </div>

    );
  };

  return (
    <div style={{ flexDirection: 'column', alignItems: 'center', display: 'flex' }}>
      <TopNav />
      {list && list.length > 0
        ? (
          <div>
            <InfiniteScroll
              loadMore={() => getMore(pageType, pageNum, list)}
              loader={null}
              hasMore
              initialLoad
            >
              {/* 卡片区域 */}
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

    </div>

  );
};
export default PopularList;
