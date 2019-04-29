const utilities = require("./utilities");

const editorModel = {
    setBasicStyle (name) {
		const styleList = ["bold", "italic", "underline", "strikeThrough",
								"subscript", "superscript"];
        if (styleList.includes(name)) {
            document.execCommand(name);
        } else {
            throw "Undefined Style Name";
        }
	},

	setHeading (heading) {
		if (heading < 1 || heading > 6) {
			throw "Unsupported Heading Level";
		}
		document.execCommand("formatBlock", false, "h" + heading);
	},

	setFontColor (colorName) {
		document.execCommand("foreColor", false, colorName);
	},

	setBackgroundColor (colorName) {
		document.execCommand("hiliteColor", false, colorName);
	},

	increaseFontSize () {
		document.execCommand("increaseFontSize");
	},

	decreaseFontSize () {
		document.execCommand("decreaseFontSize");
	},

	insertHorizontalRule () {
		document.execCommand("insertHorizontalRule");
	},

	insertHTML (html) {
		document.execCommand("insertHTML", false, html);
	},

	justify (type) {

		/*
		* justifyRight: 光标插入位置或者所选内容 右对齐
		* justifyLeft: 光标插入位置或者所选内容 左对齐
		* justifyFull: 光标插入位置或者所选内容 文本对齐
		* justifyCenter: 光标插入位置或者所选内容 文本居中
		*/

		let rightType = {
			"right":  "Right",
			"left":   "Left",
			"full":   "Full",
			"center": "Center",
		}[type];
		if (!rightType) {
			throw "Unsupported Justifying Type";
		} else {
			document.execCommand("justify" + rightType);
		}
	},

	adjustList () {
		let lists = document.querySelectorAll("ol, ul");
		for  (let i = 0; i < lists.length; i++)  {
			let ele = lists[i]; // ol
			let parentNode = ele.parentNode;
			if  (parentNode.tagName === 'P' && parentNode.lastChild === parentNode.firstChild) {
					parentNode.insertAdjacentElement('beforebegin', ele);
					parentNode.remove();
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

	findParentByTagName (root, name)  {
		let parent = root;
		if  (typeof name === "string")  {
			name = [name];
		}
		while (name.indexOf(parent.nodeName.toLowerCase()) === -1 &&
				parent.nodeName !== "BODY" && parent.nodeName !== "HTML")  {
			parent = parent.parentNode;
		}
		return parent.nodeName === "BODY" ||
			parent.nodeName === "HTML" ? null : parent;

	},

    pasteText (eventObject, withFormat) {
        let plainText = eventObject.clipboardData.getData('text/plain');  // 无格式文本
        let plainHTML = eventObject.clipboardData.getData('text/html'); // 有格式文本

        return withFormat ? plainHTML : plainText;
    }
};

module.exports = editorModel;
