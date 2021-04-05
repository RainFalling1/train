/**
 * battle结果页面
 */

import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
const style = {

    li: { listStyle: 'none', display: 'flex', marginBottom: '10px',alignItems:'center' },
    lispan: {
        display: 'block',  marginLeft: '10px', textDecoration: 'none',fontWeight:'bold',color:'#232323'
    },

};


class BattleResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            repos1: [],
            repos2: [],
            player1: '',
            player2: '',
            Score1: '',
            Score2: '',
            f: '',
            s: '',
        };
    }


    async componentDidMount() {
        const res1 = await axios.get(`https://api.github.com/users/${this.props.location.state[0]}`);
        const res2 = await axios.get(`https://api.github.com/users/${this.props.location.state[1]}`);
        console.log('res1', res1.data);
        console.log('res2', res2.data, this.props);
        this.setState({
            repos1: res1.data,
            player1: this.props.location.state[0],
            repos2: res2.data,
            player2: this.props.location.state[1],
            Score1: res1.data.public_repos,

        });
        if (this.state.Score2 > this.state.Score1) {
            this.setState({
                f: 'Loser', s: 'Winer', Score2: '0', Score1: '0',
            });
        }
        if (this.state.Score2 < this.state.Score1) {
            this.setState({
                f: 'Winer', s: 'Loser', Score2: '0', Score1: '0',
            });
        }
    }


    render() {
        return (
            <div style={{ display: 'block', backgroundColor: '#fff', paddingBottom: '50px' }}>

                <div style={{
                    width: '90%', backgroundColor: '', margin: '0 auto', display: 'flex', justifyContent: 'center',
                }}
                >
                    <ul style={{
                        display: 'flex', flexWrap: 'wrap', listStyle: 'none', justifyContent: 'space-around', width: '100%',
                    }}
                    >

                        <div style={{
                            background: 'rgba(0, 0, 0, 0.08)', margin: '10px 5px', boxSizing: 'border-box', width: '290px', padding: '20px',
                        }}
                        >
                            <h4 style={{
                                textAlign: 'center', fontSize: '35px', fontWeight: '300', margin: '20px',
                            }}
                            >{this.state.f}
                            </h4>
                            <img
                                src={this.state.repos1.avatar_url}
                                alt=""
                                style={{
                                    width: '150px', height: '150px', display: 'block', margin: '0 auto', borderRadius: '3px', marginBottom: '8px',
                                }}
                            />

                            <h2 style={{ textAlign: 'center', margin: '30px 0' }}>
                                <a href={`https://github.com/${this.state.player1}`} style={{ color: 'rgb(187, 46, 31)', fontWeight: 'bold', textDecoration: 'none' }}>{this.state.player1}</a>
                            </h2>
                            <ul style={{ paddingLeft: '20px' }}>
                                <li style={{ listStyle: 'none', display: 'flex', marginBottom: '10px' }}>
                                    <svg t="1574237613440" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2421" width="32" height="32"><path d="M720.595852 563.870368C664.821571 612.393501 591.757508 641.953747 512 641.953747s-152.821571-29.560246-208.595852-78.084403C162.29534 638.607536 65.805752 786.967492 65.805752 958.194248l892.388497 0C958.194248 786.967492 861.70466 638.607536 720.595852 563.870368zM512 586.179466c143.897318 0 260.46622-116.567879 260.46622-259.908518 0-143.897318-116.567879-260.46622-260.46622-260.46622S251.53378 182.373631 251.53378 326.270948C251.53378 469.611587 368.101659 586.179466 512 586.179466z" p-id="2422" fill="#d7157c" /></svg>
                                    <a
                                        style={{
                                            display: 'block', paddingTop: '5px', marginLeft: '10px', textDecoration: 'none', color: '#000000', fontWeight: 'bold',
                                        }}
                                        href=""
                                    >{this.state.repos1.name || "未知"}
                                    </a>
                                </li>
                                <li style={{ listStyle: 'none', display: 'flex', marginBottom: '10px' }}>
                                    <svg t="1574237833591" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5636" width="32" height="32"><path d="M766.0032 322.6624c0-155.2384-126.3104-281.6-281.6-281.6s-281.6 126.3104-281.6 281.6c0 109.6192 63.0784 204.5952 154.7264 251.0848-168.8576 54.1184-308.3264 207.4624-308.3264 363.3152 0 14.1312 11.4688 25.6 25.6 25.6s25.6-11.4688 25.6-25.6c0-164.864 193.792-332.8 384-332.8C639.6416 604.2624 766.0032 477.952 766.0032 322.6624zM484.4032 553.0624c-127.0272 0-230.4-103.3728-230.4-230.4 0-127.0272 103.3728-230.4 230.4-230.4s230.4 103.3728 230.4 230.4C714.8032 449.6896 611.4304 553.0624 484.4032 553.0624z" p-id="5637" fill="#239d1c" /><path d="M945.2032 757.8624l-127.5904 0L817.6128 630.272c0-14.1312-11.4688-25.6-25.6-25.6s-25.6 11.4688-25.6 25.6l0 127.5904-127.5904 0c-14.1312 0-25.6 11.4688-25.6 25.6s11.4688 25.6 25.6 25.6l127.5904 0 0 127.5904c0 14.1312 11.4688 25.6 25.6 25.6s25.6-11.4688 25.6-25.6l0-127.5904 127.5904 0c14.1312 0 25.6-11.4688 25.6-25.6S959.3344 757.8624 945.2032 757.8624z" p-id="5638" fill="#239d1c" /></svg>
                                    <a
                                        style={{
                                            display: 'block', paddingTop: '5px', marginLeft: '10px', textDecoration: 'none', color: '#000000', fontWeight: 'bold',
                                        }}
                                        href=""
                                    >{this.state.repos1.following}following
                                    </a>
                                </li>
                                <li style={{ listStyle: 'none', display: 'flex', marginBottom: '10px' }}>
                                    <li style={style.li}>
                                        <span className={"fa fa-star"} style={{fontSize:29,color:"#ef8a33"}}/>
                                    </li>
                                    <a
                                        style={{
                                            display: 'block', paddingTop: '5px', marginLeft: '10px', textDecoration: 'none', color: '#000000', fontWeight: 'bold',
                                        }}
                                        href=""
                                    >{this.state.repos1.public_repos}repositories
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div style={{
                            background: 'rgba(0, 0, 0, 0.08)', margin: '10px 5px', boxSizing: 'border-box', width: '290px', padding: '20px',
                        }}
                        >
                            <h4 style={{
                                textAlign: 'center', fontSize: '35px', fontWeight: 300, margin: '20px',
                            }}
                            >{this.state.s}
                            </h4>
                            <img
                                src={this.state.repos2.avatar_url}
                                alt=""
                                style={{
                                    width: '150px', height: '150px', display: 'block', margin: '0 auto', borderRadius: '3px', marginBottom: '8px',
                                }}
                            />

                            <h2 style={{ textAlign: 'center', margin: '30px 0' }}>
                                <a href={`https://github.com/${this.state.player2}`} style={{ color: 'rgb(187, 46, 31)', fontWeight: 'bold', textDecoration: 'none' }}>{this.state.player2}</a>
                            </h2>
                            <ul style={{ paddingLeft: '20px' }}>
                                <li style={{ listStyle: 'none', display: 'flex', marginBottom: '10px' }}>
                                    <svg t="1574237613440" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2421" width="32" height="32"><path d="M720.595852 563.870368C664.821571 612.393501 591.757508 641.953747 512 641.953747s-152.821571-29.560246-208.595852-78.084403C162.29534 638.607536 65.805752 786.967492 65.805752 958.194248l892.388497 0C958.194248 786.967492 861.70466 638.607536 720.595852 563.870368zM512 586.179466c143.897318 0 260.46622-116.567879 260.46622-259.908518 0-143.897318-116.567879-260.46622-260.46622-260.46622S251.53378 182.373631 251.53378 326.270948C251.53378 469.611587 368.101659 586.179466 512 586.179466z" p-id="2422" fill="#d7157c" /></svg>
                                    <a
                                        style={{
                                            display: 'block', paddingTop: '5px', marginLeft: '10px', textDecoration: 'none', color: '#000000', fontWeight: 'bold',
                                        }}
                                        href=""
                                    >{this.state.repos2.name || "未知"}
                                    </a>
                                </li>
                                <li style={{ listStyle: 'none', display: 'flex', marginBottom: '10px' }}>
                                    <svg t="1574237833591" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5636" width="32" height="32"><path d="M766.0032 322.6624c0-155.2384-126.3104-281.6-281.6-281.6s-281.6 126.3104-281.6 281.6c0 109.6192 63.0784 204.5952 154.7264 251.0848-168.8576 54.1184-308.3264 207.4624-308.3264 363.3152 0 14.1312 11.4688 25.6 25.6 25.6s25.6-11.4688 25.6-25.6c0-164.864 193.792-332.8 384-332.8C639.6416 604.2624 766.0032 477.952 766.0032 322.6624zM484.4032 553.0624c-127.0272 0-230.4-103.3728-230.4-230.4 0-127.0272 103.3728-230.4 230.4-230.4s230.4 103.3728 230.4 230.4C714.8032 449.6896 611.4304 553.0624 484.4032 553.0624z" p-id="5637" fill="#239d1c" /><path d="M945.2032 757.8624l-127.5904 0L817.6128 630.272c0-14.1312-11.4688-25.6-25.6-25.6s-25.6 11.4688-25.6 25.6l0 127.5904-127.5904 0c-14.1312 0-25.6 11.4688-25.6 25.6s11.4688 25.6 25.6 25.6l127.5904 0 0 127.5904c0 14.1312 11.4688 25.6 25.6 25.6s25.6-11.4688 25.6-25.6l0-127.5904 127.5904 0c14.1312 0 25.6-11.4688 25.6-25.6S959.3344 757.8624 945.2032 757.8624z" p-id="5638" fill="#239d1c" /></svg>
                                    <a
                                        style={{
                                            display: 'block', paddingTop: '5px', marginLeft: '10px', textDecoration: 'none', color: '#000000', fontWeight: 'bold',
                                        }}
                                        href=""
                                    >{this.state.repos2.following}following
                                    </a>
                                </li>
                                <li style={{ listStyle: 'none', display: 'flex', marginBottom: '10px' }}>
                                    <li style={style.li}>
                                        <span className={"fa fa-star"} style={{fontSize:29,color:"#ef8a33"}}/>
                                    </li>
                                    <a
                                        style={{
                                            display: 'block', paddingTop: '5px', marginLeft: '10px', textDecoration: 'none', color: '#000000', fontWeight: 'bold',
                                        }}
                                        href=""
                                    >{this.state.repos2.public_repos}repositories
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </ul>

                </div>
                <Link
                    to="/battle"
                    style={{
                        display: 'flex',
                        flex: 1,
                        background: 'black',
                        color: '#c7c7c7',
                        margin: '40px auto',
                        padding: '10px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.25em',
                        borderRadius: '3px',
                        border: 'none',
                        fontSize: '16px',
                        justifyContent: 'center',
                        alignitems: 'center',
                        cursor: 'pointer',
                        textDecoration: 'none',
                        maxWidth: '250px',
                    }}
                >Battle
                </Link>

            </div>
        );
    }
}

export default BattleResult;
