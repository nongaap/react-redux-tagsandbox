import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTag, addAllTag, removeDropdownTag, showDropdown, hideDropdown, showColor, hideColor, showPicker, hidePicker } from '../actions/index';

import './addTag.css';

export class AddTag extends Component {
	constructor(props){
		super(props);

		this.state = {label: '', color: '#0FADE9'};

	}

	onInputChange(event) {
		this.props.showDropdown()
		let index = this.props.allTags.findIndex(item => event.target.value.toLowerCase() === item.label.toLowerCase())
		let tag = this.props.allTags[index]
		if(index > -1) {
			this.setState(tag);
			this.props.hidePicker();
		} else {
			this.setState( {label: event.target.value} );
			this.props.showPicker();
		}
	}

	onFormSubmit(event) {
		event.preventDefault();
		let index = this.props.allTags.findIndex(item => this.state.label.toLowerCase() === item.label.toLowerCase());
		let dropdownIndex = this.props.tagDropdown.findIndex(item => this.state.label.toLowerCase() === item.label.toLowerCase());
		let tagListIndex = this.props.tagList.findIndex(item => this.state.label.toLowerCase() === item.label.toLowerCase());
		if (tagListIndex > -1) {
			this.setState({label: '', color: '#0FADE9'});
			this.props.showPicker();
			this.props.hideDropdown();
		} else {
			
			this.props.addTag(this.state);
			
			if(index === -1 ) { 
				this.props.addAllTag(this.state);
			} else {
				this.props.showPicker();
			}
			
			if(dropdownIndex > -1) {
				this.props.removeDropdownTag(dropdownIndex);
			}
			
			this.setState({label: '', color: '#0FADE9'});
			
			this.props.hideDropdown();
		}
	}

	onTagClick(tag, index, event) {
		this.props.addTag(tag);
		this.props.removeDropdownTag(index);
		this.setState({label: '', color: '#0FADE9'});
		this.props.hideDropdown();
	}

	onColorSquareClick(color, event) {
		this.setState({color: color.color});
		this.props.hideColor();
	}

	renderSuggestList() {
		return this.props.tagDropdown.map((tag, index) => {
			return (
				<li className="tagList" key={index}
					onClick={this.onTagClick.bind(this, tag, index)}>
					<a className="aLink">
						<div className="colorTile" style={{backgroundColor: `${tag.color}`}} /> 
						<span className="tagLabel" > {tag.label} </span> 
					</a>
				</li>
			);
		});
	}

	renderColorList() {
		return this.props.colorList.map((color, index) => {
			return (
				<li key={index} 
				className="colorSquare" 
				onClick={this.onColorSquareClick.bind(this, color)}
				style={{backgroundColor: `${color.color}`}} />
			);
		});	
	}

	render() {
		return (
			<form onSubmit={this.onFormSubmit.bind(this)}>
				<input
					className="tagInput"
					placeholder="Type to add a tag."
					value={this.state.label}
					onClick={() => this.props.showDropdown() }
					onChange={this.onInputChange.bind(this)} />
				<ul className="dropDownList" style={{display: `${this.props.displayToggle.dropdownDisplay}`}}>
					{this.renderSuggestList()}
				</ul>
				<span 
					className="colorPicker"
					style={{backgroundColor: `${this.state.color}`, display:`${this.props.displayToggle.colorPicker}`}}
				>
					<a onClick={() => this.props.showColor()}> New </a>
					<ul className="colorDropDownList" style={{display: `${this.props.displayToggle.colorDisplay}`}}>
						{this.renderColorList()}
					</ul>
				</span>
				
				<span>
					<button className="addBtn" type="submit">Add Tag</button>
				</span>
			</form>
		);
	}
}

function mapStateToProps(state) {
	return {
		tagList: state.tagList,
		tagDropdown: state.tagDropdown,
		colorList: state.colorList,
		displayToggle: state.displayToggle,
		allTags: state.allTags
	};
}

export default connect(mapStateToProps, { addTag, addAllTag, removeDropdownTag, showDropdown, hideDropdown, showColor, hideColor, showPicker, hidePicker })(AddTag);