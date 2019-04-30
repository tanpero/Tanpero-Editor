
class EditorView {
    constructor (toolbar, editorInstance) {
        this.toolbar = toolbar;
    }

    addButton (data) {
        let eventName = data.event || "click";
        let action = data.action || (() => {});
        let name = data.name || " ";
        let icon = data.icon || " ";
        let isReactive = !!data.isReactive;

        let obj = document.createElement("div");
        obj.title = name;
        obj.style.width = "24px";
        obj.style.height = "24px";
        obj.style.borderWidth = "2px";
        obj.style.padding = "0px";
        obj.style.float = "left";

        obj.toggleState = () => this.toggleState(obj);

        let node = document.createElement("img");
        node.src = icon;
        node.width = 20;
        node.height = 20;

        const onover = (e) => {
            e.target.style.borderColor = "black";
        };

        const onmousedown = (e) => {
            e.target.style.backgroundColor = "#82fff6";
        };

        const onmouseup = (e) => {
            e.target.style.backgroundColor = "#ffffff";
        };

        obj.addEventListener("mouseover", onover);
        obj.addEventListener("mousedown", onmousedown);

        /*if (isReactive) {
            obj.checked = false;
            obj.addEventListener("mouseup", (e) => {
                e.target.checked = !e.target.checked;
                e.target.style.backgroundColor = e.target.checked ? "#82fff6" :"#ffffff";
            });
        } else {
            obj.addEventListener("mouseup", (e) => {
                e.target.style.backgroundColor = "#ffffff";
            });
        }*/

        obj.appendChild(node);
        obj.addEventListener(eventName, (e) => {

            action(e.target);
        });

        this.toolbar.appendChild(obj);
    }

    toggleState (el) {
        this.checked = !this.checked;
        document.write(111);
        if (this.checked) {
            el.style.backgroundColor = "#82fff6";
        } else {
            el.style.backgroundColor = "#ffffff";
        }
    }
};

module.exports = EditorView;
