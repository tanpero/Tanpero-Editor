
class Editor {
    constructor (element, editorModel) {
        const _editor = element;
        this.editorModel = editorModel;
        document.execCommand("styleWithCSS");
        _editor.focus();
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
        return this;
    }

    setStrike () {
        this.editorModel.setBasicStyle("strikeThrough");
        return this;
    }

    setSubscript () {
        this.editorModel.setBasicStyle("subscript");
        return this;
    }

    setSuperscript () {
        this.editorModel.setBasicStyle("superscript");
        return this;
    }

    setFontColor (colorName) {
        this.editorModel.setFontColor(colorName);
        return this;
    }

    setBackgroundColor (colorName) {
        this.editorModel.setBackgroundColor(colorName);
        return this;
    }

    setHeading (level) {
        this.editorModel.setHeading(level);
        return this;
    }

    increaseFontSize () {
        this.editorModel.increaseFontSize();
        return this;
    }

    decreaseFontSize () {
        this.editorModel.decreaseFontSize();
        return this;
    }

    justify (type) {
        this.editorModel.justify(type);
        return this;
    }

    undo () {
        this.editorModel.undo();
        return this;
    }

    redo () {
        this.editorModel.redo();
        return this;
    }
};

module.exports = Editor;
