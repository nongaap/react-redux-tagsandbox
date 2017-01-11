import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTag, addDropdownTag } from '../actions/index';

import './tagList.css';

class TagList extends Component {
	
	onDeleteTag(tag, index, event) {
		this.props.deleteTag(index);
		this.props.addDropdownTag(tag);
	}

	renderList() {
		return this.props.tagList.map((tag, index) => {
			return (
				<span key={index}
					className="tags" 
					style={{backgroundColor: `${tag.color}`}}
				>
					<span className="tag" > {tag.label} </span>
					<a className="click" onClick={this.onDeleteTag.bind(this, tag, index)}>{String.fromCharCode(215)}</a>
				</span>
			);
		});
	}

	render () {
		return (
			<div>
				{this.renderList()}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		tagList: state.tagList
	};
}

export default connect(mapStateToProps, { deleteTag, addDropdownTag })(TagList);