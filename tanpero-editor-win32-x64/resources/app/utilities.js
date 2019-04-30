const insertLink = (url, title) => {
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
};

const setHeading = (heading) => {


};


module.exports = {
    insertLink, setHeading
};
