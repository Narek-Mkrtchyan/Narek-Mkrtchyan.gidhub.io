import React from 'react';

const PostItem = (props) => {

    console.log(this.props.value);
    return (
        <div className="post">
            <div className="poct__content">
                <strong>1. JavaScript</strong>
                <div>
                    Javascript its language programing
                </div>
                <div className="post_btns">
                    <button>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default PostItem;