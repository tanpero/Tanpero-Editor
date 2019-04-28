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

    let formatTag = heading,
        formatBlock = document.queryCommandValue("formatBlock");

    if (heading > 6 || heading < 1) {
        throw "Unsupported Heading Level";
    }
    if (formatBlock.length > 0 && formatBlock.toLowerCase() === formatTag) {
        document.execCommand('formatBlock', false, ``);
    } else {
        document.execCommand('formatBlock', false, ``);
    }
};


module.exports = {
    insertLink, setHeading
};
