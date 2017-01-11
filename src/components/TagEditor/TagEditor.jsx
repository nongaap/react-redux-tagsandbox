import React, { Component } from 'react';
import TagList from '../../containers/tagList';
import AddTag from '../../containers/addTag';

// An array of existing tags. Just uncomment when you want to use them.
// import tagsJSON from '../../api/tags.json';

import './TagEditor.css';

class TagEditor extends Component {

  render() {
    return (
      <div className="tag-editor">
        <h5 className="tag-editor-title">TAGS</h5>
        <TagList />
        <hr className="hr-separate" />
        <div
          style={{color: '#d5dadf', fontSize: '12px'}}
          /* you can remove this span */
        >
         <AddTag /> 
        </div>
      </div>
    );
  }
}

export default TagEditor;
