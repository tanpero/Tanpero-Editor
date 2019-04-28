class Editor {
    constructor (element, editorModel) {
        const _editor = element;
        this.editorModel = editorModel;
    }

    setBold () {
        this.editorModel.setBasicStyle("bold");
        return this;
    }

    setItalic () {
        this.editorModel.setBasicStyle("italic");
        return this;
    }

    setUnderline () {
        this.editorModel.setBasicStyle("underline");
    }
};

module.exports = Editor;
