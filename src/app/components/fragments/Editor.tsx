'use client';
import { useEffect, useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import 'prismjs';
import 'prismjs/themes/prism.css'; // Tema Prism.js
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-css';

declare global {
  interface Window {
    Prism: any;
  }
}

const EditorComponent = () => {
  const editorRef: any = useRef(null);
  const [content, setContent] = useState<string>('');

  const handleEditorChange = (newContent: string) => {
    setContent(newContent);
  };
  const handleEditorInit = () => {
    if (typeof window !== 'undefined') {
      if (window.Prism) {
        window.Prism.highlightAll();
      }
    }
  };

  console.log(content, 'AAAAA');
  return (
    <Editor
      apiKey="a47uw5dleasy7xgyhmzafybr38g2fcoasemc48f42cb1xh5n"
      onInit={(evt, editor) => {
        editorRef.current = editor;
        handleEditorInit();
      }}
      onEditorChange={handleEditorChange}
      init={{
        height: '100%',
        autoresize_on_init: true, // Mengaktifkan autoresize saat editor diinisialisasi
        menubar: true,
        skin: 'oxide-dark',
        content_css: 'dark',
        content_style:
          'body { background-color: #1e1e1e; color: #dcdcdc; } pre { background: #2d2d2d; padding: 10px; border-radius: 5px; color: #ffffff; }',
        plugins: 'codesample',
        toolbar: 'codesample | undo redo | bold italic | code',
        codesample_languages: [
          { text: 'JavaScript', value: 'javascript' },
          { text: 'Python', value: 'python' },
          { text: 'CSS', value: 'css' }
        ]
      }}
    />
  );
};

export default EditorComponent;
