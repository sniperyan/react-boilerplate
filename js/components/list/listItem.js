import React, {Component} from 'react';
import {Link} from 'react-router';
/**
 * 列表单独项
 */
export class ListItem extends Component {
    render() {
        const {id, title, author, visit_count, reply_count, create_at, last_reply_at} = this.props;
        return (
            <li>
                <Link to={'/topic/' + id}>
                    <div className="list-title">
                        <h3 className="tit">{title}</h3>
                    </div>
                    <div className="bottom">
                        <div className="author">
                        </div>
                        <div className="con">
                            <p className="bottom-tip">
                                <span className="name">{author.loginname}</span>
                                <span className="count">{reply_count}/{visit_count}</span>
                            </p>
                            <p className="bottom-tip">
                                <time className="create">{create_at }</time>
                                <time className="re">{last_reply_at }</time>
                            </p>
                        </div>
                    </div>
                </Link>
            </li>
        );
    }
}
ListItem.propTypes = {
    id: React.PropTypes.string,  //主题ID
    title: React.PropTypes.string,  //主题标题
    author: React.PropTypes.object,  //作者
    visit_count: React.PropTypes.number,  //访问量
    reply_count: React.PropTypes.number,  //回复量
    create_at: React.PropTypes.string,  //创建时间
    last_reply_at: React.PropTypes.string  //最后回复时间
};
