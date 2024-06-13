"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CkEditorConfig = void 0;
class CkEditorConfig {
    static minimal() {
        return {
            width: '100%',
            height: '100%',
            toolbar: [
                { name: 'document', items: ['Source'] },
                { name: 'basicstyles', items: ['Bold', 'Italic', 'Underline'] },
                {
                    name: 'paragraph',
                    items: [
                        'JustifyLeft',
                        'JustifyCenter',
                        'JustifyRight',
                        'JustifyBlock',
                        'NumberedList',
                        'BulletedList',
                        'Checkbox',
                        'Blockquote',
                        'Code'
                    ]
                },
                { name: 'styles', items: ['Format', 'Link', 'Heading'] }
            ],
            toolbarCanCollapse: true,
            format_tags: 'p;h1;h2;pre'
        };
    }
}
exports.CkEditorConfig = CkEditorConfig;
//# sourceMappingURL=ck-editor.config.js.map