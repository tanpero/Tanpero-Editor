const editorModel = {
    setBasicStyle(name) {
        const styleList = editorRecords.basicStyleList;
        if (styleList.includes(name)) {
            document.execCommand(name);
        } else {
            throw "Undefined Style Name";
        }
    },
	
	setHeading (heading)  {
		let formatTag  =  heading,
			formatBlock  =  document.queryCommandValue("formatBlock");
		if  (formatBlock.length  >  0  &&  formatBlock.toLowerCase()  ===  formatTag)  {
			document.execCommand('formatBlock',  false,  ``);
		}  else  {
			document.execCommand('formatBlock',  false,  ``);
		}
	},
	
	adjustList() {
		let lists  =  document.querySelectorAll("ol, ul");
		for  (let  i  =  0;  i  <  lists.length;  i++)  {
			let ele  =  lists[i];  // ol
			let parentNode  =  ele.parentNode;	
			if  (parentNode.tagName  ===  'P'  &&  parentNode.lastChild  ===  parentNode.firstChild)  {
					parentNode.insertAdjacentElement('beforebegin',  ele);
					parentNode.remove()
			}
		}
	},
	
	insertLink (url, title) {
		let selection = document.getSelection(),
			range = selection.getRangeAt(0);
		if (range.collapsed) {
			let start = range.startContainer,
				parent = Util.findParentByTagName(start, 'a');
			if (parent) {
				parent.setAttribute('src', url);
			} else {
				this.insertHTML(`<a  href="${url}">${title}</a>`);
			}
		} else {
			document.execCommand('createLink', false, url);
		}
	},
	
	findParentByTagName(root,  name)  {
		let parent  =  root;
		if  (typeof name  ===  "string")  {
			name  =  [name];
		}
		while  (name.indexOf(parent.nodeName.toLowerCase())  ===  -1  &&
				parent.nodeName  !==  "BODY"  &&  parent.nodeName  !==  "HTML")  {
			parent  =  parent.parentNode;
		}
		return  parent.nodeName  ===  "BODY"  ||
			parent.nodeName  ===  "HTML"  ?  null  :  parent;

	},
	
    insertText (eventObject, withFormat) {
        let plainText = eventObject.clipboardData.getData('text/plain');  // 无格式文本
        let plainHTML = eventObject.clipboardData.getData('text/html'); // 有格式文本

        return withFormat ? plainHTML : plainText;
    }
};

module.exports = editorModel;
